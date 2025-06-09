// import {
// 	Color,
// 	Matrix3,
// 	Vector2,
// 	Vector3
// } from 'three';

class Matrix3 {
    constructor() {
        this.elements = new Float32Array(9);
    }

    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
        const te = this.elements;
        te[0] = n11; te[1] = n21; te[2] = n31;
        te[3] = n12; te[4] = n22; te[5] = n32;
        te[6] = n13; te[7] = n23; te[8] = n33;
        return this;
    }

    getNormalMatrix(matrix4) {
        return this.setFromMatrix4(matrix4).getInverse(this).transpose();
    }

    setFromMatrix4(matrix4) {
        const me = matrix4.elements;
        const te = this.elements;

        te[0] = me[0]; te[1] = me[4]; te[2] = me[8];
        te[3] = me[1]; te[4] = me[5]; te[5] = me[9];
        te[6] = me[2]; te[7] = me[6]; te[8] = me[10];

        return this;
    }

    getInverse(matrix) {
        const me = matrix.elements;
        const te = this.elements;

        const n11 = me[0], n21 = me[1], n31 = me[2];
        const n12 = me[3], n22 = me[4], n32 = me[5];
        const n13 = me[6], n23 = me[7], n33 = me[8];

        const t11 = n33 * n22 - n32 * n23;
        const t12 = n32 * n13 - n33 * n12;
        const t13 = n23 * n12 - n22 * n13;

        const det = n11 * t11 + n21 * t12 + n31 * t13;

        if (det === 0) {
            console.error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this;
        }

        const detInv = 1 / det;

        te[0] = t11 * detInv;
        te[1] = (n31 * n23 - n33 * n21) * detInv;
        te[2] = (n32 * n21 - n31 * n22) * detInv;

        te[3] = t12 * detInv;
        te[4] = (n33 * n11 - n31 * n13) * detInv;
        te[5] = (n31 * n12 - n32 * n11) * detInv;

        te[6] = t13 * detInv;
        te[7] = (n21 * n13 - n23 * n11) * detInv;
        te[8] = (n22 * n11 - n21 * n12) * detInv;

        return this;
    }

    transpose() {
        const te = this.elements;
        let tmp;
        tmp = te[1]; te[1] = te[3]; te[3] = tmp;
        tmp = te[2]; te[2] = te[6]; te[6] = tmp;
        tmp = te[5]; te[5] = te[7]; te[7] = tmp;
        return this;
    }
}

class OBJExporter {

    parse(object) {

        let output = '';

        let indexVertex = 0;
        let indexVertexUvs = 0;
        let indexNormals = 0;

        // const vertex = new Vector3();
        // const color = new Color();
        // const normal = new Vector3();
        // const uv = new Vector2();
        const vertex = new THREE.Vector3();
        const color = new THREE.Color();
        const normal = new THREE.Vector3();
        const uv = new THREE.Vector2();

        const face = [];

        // function parseMesh( mesh ) {

        // 	let nbVertex = 0;
        // 	let nbNormals = 0;
        // 	let nbVertexUvs = 0;

        // 	const geometry = mesh.geometry;

        // 	const normalMatrixWorld = new Matrix3();

        // 	// shortcuts
        // 	const vertices = geometry.getAttribute( 'position' );
        // 	const normals = geometry.getAttribute( 'normal' );
        // 	const uvs = geometry.getAttribute( 'uv' );
        // 	const indices = geometry.getIndex();

        // 	// name of the mesh object
        // 	output += 'o ' + mesh.name + '\n';

        // 	// name of the mesh material
        // 	if ( mesh.material && mesh.material.name ) {

        // 		output += 'usemtl ' + mesh.material.name + '\n';

        // 	}

        // 	// vertices

        // 	if ( vertices !== undefined ) {

        // 		for ( let i = 0, l = vertices.count; i < l; i ++, nbVertex ++ ) {

        // 			vertex.fromBufferAttribute( vertices, i );

        // 			// transform the vertex to world space
        // 			vertex.applyMatrix4( mesh.matrixWorld );

        // 			// transform the vertex to export format
        // 			output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';

        // 		}

        // 	}

        // 	// uvs

        // 	if ( uvs !== undefined ) {

        // 		for ( let i = 0, l = uvs.count; i < l; i ++, nbVertexUvs ++ ) {

        // 			uv.fromBufferAttribute( uvs, i );

        // 			// transform the uv to export format
        // 			output += 'vt ' + uv.x + ' ' + uv.y + '\n';

        // 		}

        // 	}

        // 	// normals

        // 	if ( normals !== undefined ) {

        // 		normalMatrixWorld.getNormalMatrix( mesh.matrixWorld );

        // 		for ( let i = 0, l = normals.count; i < l; i ++, nbNormals ++ ) {

        // 			normal.fromBufferAttribute( normals, i );

        // 			// transform the normal to world space
        // 			normal.applyMatrix3( normalMatrixWorld ).normalize();

        // 			// transform the normal to export format
        // 			output += 'vn ' + normal.x + ' ' + normal.y + ' ' + normal.z + '\n';

        // 		}

        // 	}

        // 	// faces

        // 	if ( indices !== null ) {

        // 		for ( let i = 0, l = indices.count; i < l; i += 3 ) {

        // 			for ( let m = 0; m < 3; m ++ ) {

        // 				const j = indices.getX( i + m ) + 1;

        // 				face[ m ] = ( indexVertex + j ) + ( normals || uvs ? '/' + ( uvs ? ( indexVertexUvs + j ) : '' ) + ( normals ? '/' + ( indexNormals + j ) : '' ) : '' );

        // 			}

        // 			// transform the face to export format
        // 			output += 'f ' + face.join( ' ' ) + '\n';

        // 		}

        // 	} else {

        // 		for ( let i = 0, l = vertices.count; i < l; i += 3 ) {

        // 			for ( let m = 0; m < 3; m ++ ) {

        // 				const j = i + m + 1;

        // 				face[ m ] = ( indexVertex + j ) + ( normals || uvs ? '/' + ( uvs ? ( indexVertexUvs + j ) : '' ) + ( normals ? '/' + ( indexNormals + j ) : '' ) : '' );

        // 			}

        // 			// transform the face to export format
        // 			output += 'f ' + face.join( ' ' ) + '\n';

        // 		}

        // 	}

        // 	// update index
        // 	indexVertex += nbVertex;
        // 	indexVertexUvs += nbVertexUvs;
        // 	indexNormals += nbNormals;

        // }

        function parseMesh(mesh) {
            let nbVertex = 0;
            let nbVertexUvs = 0;
            let nbNormals = 0;

            const geometry = mesh.geometry;

            // Get vertex attributes from the geometry
            const vertices = geometry.vertices;
            const normals = geometry.normals;
            const colors = geometry.colors;
            const uvs = geometry.uvs;

            // Name of the mesh object
            output += 'o ' + mesh.name + '\n';

            // Name of the mesh material
            if (mesh.material && mesh.material.name) {
                output += 'usemtl ' + mesh.material.name + '\n';
            }

            // Vertices
            for (let i = 0, l = vertices.length; i < l; i++, nbVertex++) {
                const vertex = vertices[i];
                output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';
            }

            // Normals
            if (normals) {
                for (let i = 0, l = normals.length; i < l; i++, nbNormals++) {
                    const normal = normals[i];
                    output += 'vn ' + normal.x + ' ' + normal.y + ' ' + normal.z + '\n';
                }
            }

            // Colors
            for (let i = 0, l = colors.length; i < l; i++) {
                const color = colors[i];
                output += 'vc ' + color.r + ' ' + color.g + ' ' + color.b + '\n';
            }

            // UVs
            if (uvs) {
                for (let i = 0, l = uvs.length; i < l; i++, nbVertexUvs++) {
                    const uv = uvs[i];
                    output += 'vt ' + uv.x + ' ' + uv.y + '\n';
                }
            }

            // Faces
            const faces = geometry.faces;
            for (let i = 0, l = faces.length; i < l; i++) {
                const face = faces[i];
                const a = face.a + 1;
                const b = face.b + 1;
                const c = face.c + 1;
                output += 'f ' + a + '/' + (nbVertexUvs ? (a) : '') + '/' + (nbNormals ? (a) : '') + ' ';
                output += b + '/' + (nbVertexUvs ? (b) : '') + '/' + (nbNormals ? (b) : '') + ' ';
                output += c + '/' + (nbVertexUvs ? (c) : '') + '/' + (nbNormals ? (c) : '') + '\n';
            }
        }

        function parseLine(line) {

            let nbVertex = 0;

            const geometry = line.geometry;
            const type = line.type;

            // shortcuts
            const vertices = geometry.getAttribute('position');

            // name of the line object
            output += 'o ' + line.name + '\n';

            if (vertices !== undefined) {

                for (let i = 0, l = vertices.count; i < l; i++, nbVertex++) {

                    vertex.fromBufferAttribute(vertices, i);

                    // transform the vertex to world space
                    vertex.applyMatrix4(line.matrixWorld);

                    // transform the vertex to export format
                    output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '\n';

                }

            }

            if (type === 'Line') {

                output += 'l ';

                for (let j = 1, l = vertices.count; j <= l; j++) {

                    output += (indexVertex + j) + ' ';

                }

                output += '\n';

            }

            if (type === 'LineSegments') {

                for (let j = 1, k = j + 1, l = vertices.count; j < l; j += 2, k = j + 1) {

                    output += 'l ' + (indexVertex + j) + ' ' + (indexVertex + k) + '\n';

                }

            }

            // update index
            indexVertex += nbVertex;

        }

        function parsePoints(points) {

            let nbVertex = 0;

            const geometry = points.geometry;

            const vertices = geometry.getAttribute('position');
            const colors = geometry.getAttribute('color');

            output += 'o ' + points.name + '\n';

            if (vertices !== undefined) {

                for (let i = 0, l = vertices.count; i < l; i++, nbVertex++) {

                    vertex.fromBufferAttribute(vertices, i);
                    vertex.applyMatrix4(points.matrixWorld);

                    output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z;

                    if (colors !== undefined) {

                        color.fromBufferAttribute(colors, i).convertLinearToSRGB();

                        output += ' ' + color.r + ' ' + color.g + ' ' + color.b;

                    }

                    output += '\n';

                }

                output += 'p ';

                for (let j = 1, l = vertices.count; j <= l; j++) {

                    output += (indexVertex + j) + ' ';

                }

                output += '\n';

            }

            // update index
            indexVertex += nbVertex;

        }

        object.traverse(function (child) {

            if (child.isMesh === true) {

                parseMesh(child);

            }

            if (child.isLine === true) {

                parseLine(child);

            }

            if (child.isPoints === true) {

                parsePoints(child);

            }

        });

        return output;

    }

}

// export { OBJExporter };