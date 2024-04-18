import { CGFobject, CGFappearance } from "../lib/CGF.js";
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
    this.triangleBigOrange = new MyTriangleBig(this.scene, [ 1, 1, 1, 0, 0.5, 0.5]);
    this.triangleBigBlue = new MyTriangleBig(this.scene, [1, 0, 0, 0, 0.5, 0.5]);
    this.triangleSmallPurple = new MyTriangleSmall( this.scene, [0, 0, 0, 0.5, 0.25, 0.25]);
    this.triangleSmallRed = new MyTriangleSmall(this.scene, [0.25, 0.75, 0.75, 0.75, 0.5, 0.5]);
    this.parallelogram = new MyParallelogram(this.scene);
    this.initMaterials();
  }

  initMaterials() {
    // Tangram texture
    this.texture = new CGFappearance(this.scene);
    this.texture.setAmbient(0.1, 0.1, 0.1, 1);
    this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
    this.texture.setSpecular(0.1, 0.1, 0.1, 1);
    this.texture.setShininess(10.0);
    this.texture.loadTexture("images/tangram.png");
  }

  display() {
    let mat = [
      1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -2.0,
      0.0, 1.0,
    ];

    //Diamond with Tangram Texture
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.95, 6, 0);
    this.scene.rotate(0.1 * Math.PI, 0, 0, 1);
    this.texture.apply();
    this.diamond.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0, 4, 0);
    this.scene.rotate(0.5 * Math.PI, 0, 0, 1);
    this.texture.apply();
    this.triangleBigOrange.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.6, 2.6, 0);
    this.scene.rotate(0.75 * Math.PI, 0, 0, 1);
    this.texture.apply();
    this.triangleBigBlue.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.7, 3, 0);
    this.scene.rotate(0.25 * Math.PI, 0, 0, 1);
    this.texture.apply();
    this.triangleSmallPurple.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-2.2, -0.8, 0);
    this.scene.rotate(0, 0, 0, 1);
    this.texture.apply();
    this.triangleSmallRed.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.2, 0.2, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.texture.apply();
    this.triangle.display();
    this.scene.popMatrix();

    //Yellow Paralellogram
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.8, -0.8, 0);
    this.scene.scale(-1, 1, 1);
    this.scene.rotate(0, 0, 0, 1);
    this.texture.apply();
    this.parallelogram.display();
    this.scene.popMatrix();
  }
}
