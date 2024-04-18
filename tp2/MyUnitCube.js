import {CGFobject} from '../lib/CGF.js';

export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		//8 vertices of the cube
		this.vertices = [
			-0.5, -0.5, 0.5,	//0 Bottom Front Left
			0.5, -0.5, 0.5,	  //1 Bottom Front Right

			-0.5, 0.5, 0.5,	  //2 Top Front Left
      		0.5, 0.5, 0.5,	  //3 Top Front Right

     		-0.5, -0.5, -0.5,	//4 Bottom Back Left
			0.5, -0.5, -0.5,	//5 Bottom Back Right
      
			-0.5, 0.5, -0.5,	//6 Top Back Left
      		0.5, 0.5, -0.5	  //7 Top Back Right

		];

		//Counter-clockwise reference of vertices
		this.indices = [
      		//back
      		6, 7, 4,
      		5, 4, 7,

      		// front
			3, 2, 0,
			1, 3, 0,

      		// top
      		7, 6, 3,
			2, 3, 6, 

      		// bottom
      		4, 5, 0,
			5, 1, 0, 

      		//right
      		7, 3, 5,
			1, 5, 3,

      		//left
      		4, 2, 6,
			2, 4, 0,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}