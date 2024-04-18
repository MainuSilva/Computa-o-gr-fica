import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";

export class MyTangram extends CGFobject {
  constructor(scene) {
      super(scene);
    
      this.diamond = new MyDiamond(this.scene);
      this.triangle = new MyTriangle(this.scene);
      this.triangleBig = new MyTriangleBig(this.scene);
      this.triangleSmall = new MyTriangleSmall(this.scene);
      this.parallelogram = new MyParallelogram(this.scene);
  }


  display() {
    var mat = [
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0, -2, 0.0, 1.0,
    ];

    //Green Diamond
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.95, 6, 0);
    this.scene.rotate(0.1 * Math.PI, 0, 0, 1);
    this.scene.setDiffuse(0, 1, 0, 1);
    this.diamond.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0, 4, 0);
    this.scene.rotate(0.5 * Math.PI, 0, 0, 1);
    this.scene.setDiffuse(1, 0.6, 0, 1);
    this.triangleBig.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.6, 2.6, 0);
    this.scene.rotate(0.75 * Math.PI, 0, 0, 1);
    this.scene.setDiffuse(0, 0.6, 1, 1);
    this.triangleBig.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.7, 3, 0);
    this.scene.rotate(0.25 * Math.PI, 0, 0, 1);
    this.scene.setDiffuse(0.6, 0, 1, 1);
    this.triangleSmall.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.2, 0.2, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.scene.setDiffuse(1, 0.6, 0.8, 1);
    this.triangle.display();
    this.scene.popMatrix();

    //Yellow Paralellogram
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.8, -0.8, 0);
    this.scene.scale(-1, 1, 1);
    this.scene.rotate(0, 0, 0, 1);
    this.scene.setDiffuse(1, 1, 0, 1);
    this.parallelogram.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-2.2, -0.8, 0);
    this.scene.rotate(0, 0, 0, 1);
    this.scene.setDiffuse(1, 0, 0, 1);
    this.triangleSmall.display();
    this.scene.popMatrix();

  }

}
