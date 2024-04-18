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
      		0.5, 0.5, -0.5,	  //7 Top Back Right

			  -0.5, -0.5, 0.5,	//0 Bottom Front Left
			  0.5, -0.5, 0.5,	  //1 Bottom Front Right
  
			  -0.5, 0.5, 0.5,	  //2 Top Front Left
				0.5, 0.5, 0.5,	  //3 Top Front Right
  
			   -0.5, -0.5, -0.5,	//4 Bottom Back Left
			  0.5, -0.5, -0.5,	//5 Bottom Back Right
		
			  -0.5, 0.5, -0.5,	//6 Top Back Left
				0.5, 0.5, -0.5, 	//7 Top Back Right
				
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

		this.normals = [
			0, 0, 1, //0
			0, 0, 1, //1
			0, 0, 1, //2
			0, 0, 1, //3
			0, 0, -1, //4
			0, 0, -1, //5
			0, 0, -1, //6
			0, 0, -1, //7
			0, -1, 0, //00
			0, -1, 0, //11
			0, 1, 0, //22
			0, 1, 0, //33
			0, -1, 0, //44
			0, -1, 0, //55
			0, 1, 0, //66
			0, 1, 0, //77
			-1, 0, 0, //000
			1, 0, 0, //111
			-1, 0, 0, //222
			1, 0, 0, //333
			-1, 0, 0, //444
			1, 0, 0, //555
			-1, 0, 0, //666
			1, 0, 0, //777
		];

		this.initGLBuffers();
	}
}