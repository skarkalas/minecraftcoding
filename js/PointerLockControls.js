function logCameraState(message) {
	console.log(message, `Position: (${camera.position.x}, ${camera.position.y}, ${camera.position.z})`,
		`Rotation: (${camera.rotation.x}, ${camera.rotation.y}, ${camera.rotation.z})`);
}

THREE.PointerLockControls = function (camera, domElement) {

	if (domElement === undefined) {
		console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.');
		domElement = document.body;
	}

	this.domElement = domElement;
	this.isLocked = false;

	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	var scope = this;
	var changeEvent = { type: 'change' };
	var lockEvent = { type: 'lock' };
	var unlockEvent = { type: 'unlock' };

	var euler = new THREE.Euler(0, 0, 0, 'YXZ');

	var PI_2 = Math.PI / 2;

	var vec = new THREE.Vector3();

	var ignoreNextMouseMove = false;

	function onMouseMove(event) {
		if (scope.isLocked === false || ignoreNextMouseMove) {
			// ignoreNextMouseMove = false;
			return;
		}
		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
		euler.setFromQuaternion(camera.quaternion);
		euler.y -= movementX * 0.002;
		euler.x -= movementY * 0.002;
		euler.x = Math.max(PI_2 - scope.maxPolarAngle, Math.min(PI_2 - scope.minPolarAngle, euler.x));
		camera.quaternion.setFromEuler(euler);
		scope.dispatchEvent(changeEvent);
	}

	function onPointerlockChange() {
		if (scope.domElement.ownerDocument.pointerLockElement === scope.domElement) {
			scope.dispatchEvent(lockEvent);
			scope.isLocked = true;
		} else {
			scope.dispatchEvent(unlockEvent);
			scope.isLocked = false;
			ignoreNextMouseMove = true;
			setTimeout(() => {
				ignoreNextMouseMove = false;
			}, 50); // Short delay to ignore initial mouse movements
		}
	}

	function onPointerlockError() {

		console.error('THREE.PointerLockControls: Unable to use Pointer Lock API');

	}

	this.connect = function () {

		scope.domElement.ownerDocument.addEventListener('mousemove', onMouseMove, false);
		scope.domElement.ownerDocument.addEventListener('pointerlockchange', onPointerlockChange, false);
		scope.domElement.ownerDocument.addEventListener('pointerlockerror', onPointerlockError, false);

	};

	this.disconnect = function () {

		scope.domElement.ownerDocument.removeEventListener('mousemove', onMouseMove, false);
		scope.domElement.ownerDocument.removeEventListener('pointerlockchange', onPointerlockChange, false);
		scope.domElement.ownerDocument.removeEventListener('pointerlockerror', onPointerlockError, false);

	};

	this.dispose = function () {

		this.disconnect();

	};

	this.getObject = function () { // retaining this method for backward compatibility

		return camera;

	};

	this.getDirection = function () {

		var direction = new THREE.Vector3(0, 0, - 1);

		return function (v) {

			return v.copy(direction).applyQuaternion(camera.quaternion);

		};

	}();

	this.moveForward = function (distance) {

		// move forward parallel to the xz-plane
		// assumes camera.up is y-up

		vec.setFromMatrixColumn(camera.matrix, 0);

		vec.crossVectors(camera.up, vec);

		camera.position.addScaledVector(vec, distance);

	};

	this.moveRight = function (distance) {

		vec.setFromMatrixColumn(camera.matrix, 0);

		camera.position.addScaledVector(vec, distance);

	};

	this.lock = function () {

		this.domElement.requestPointerLock();

	};

	this.unlock = function () {

		scope.domElement.ownerDocument.exitPointerLock();

	};

	this.connect();

};

THREE.PointerLockControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.PointerLockControls.prototype.constructor = THREE.PointerLockControls;
