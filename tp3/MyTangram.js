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
    this.triangleBig = new MyTriangleBig(this.scene);
    this.triangleSmall = new MyTriangleSmall(this.scene);
    this.parallelogram = new MyParallelogram(this.scene);
    this.initMaterials();
  }

  initMaterials() {
    //Green Material
    this.greenMaterial = new CGFappearance(this.scene);
    this.greenMaterial.setAmbient(0, 1, 0, 1.0);
    this.greenMaterial.setDiffuse(0, 1, 0, 1);
    this.greenMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.greenMaterial.setShininess(10.0);

    //Orange Material
    this.orangeMaterial = new CGFappearance(this.scene);
    this.orangeMaterial.setAmbient(0, 1, 0, 1.0);
    this.orangeMaterial.setDiffuse(1, 0.6, 0, 1);
    this.orangeMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.orangeMaterial.setShininess(10.0);

    //Blue Material
    this.blueMaterial = new CGFappearance(this.scene);
    this.blueMaterial.setAmbient(0, 1, 0, 1.0);
    this.blueMaterial.setDiffuse(0, 0.6, 1, 1);
    this.blueMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.blueMaterial.setShininess(10.0);

    //Purple Material
    this.purpleMaterial = new CGFappearance(this.scene);
    this.purpleMaterial.setAmbient(0, 1, 0, 1.0);
    this.purpleMaterial.setDiffuse(0.6, 0, 1, 1);
    this.purpleMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.purpleMaterial.setShininess(10.0);

    //Pink Material
    this.pinkMaterial = new CGFappearance(this.scene);
    this.pinkMaterial.setAmbient(0, 1, 0, 1.0);
    this.pinkMaterial.setDiffuse(1, 0.6, 0.8, 1);
    this.pinkMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.pinkMaterial.setShininess(10.0);

    //Yellow Material
    this.yellowMaterial = new CGFappearance(this.scene);
    this.yellowMaterial.setAmbient(0, 1, 0, 1.0);
    this.yellowMaterial.setDiffuse(1, 1, 0, 1);
    this.yellowMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.yellowMaterial.setShininess(10.0);

    //Red Material
    this.redMaterial = new CGFappearance(this.scene);
    this.redMaterial.setAmbient(0, 1, 0, 1.0);
    this.redMaterial.setDiffuse(1, 0, 0, 1);
    this.redMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
    this.redMaterial.setShininess(10.0);
  }

  display() {
    let mat = [
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, -2.0,0.0, 1.0,
    ];

    //Green Diamond
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.95, 6, 0);
    this.scene.rotate(0.1 * Math.PI, 0, 0, 1);
    this.scene.customMaterial.apply();
    this.diamond.display();
    this.scene.popMatrix();

    //Big Orange Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0, 4, 0);
    this.scene.rotate(0.5 * Math.PI, 0, 0, 1);
    this.orangeMaterial.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    //Big Blue Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.6, 2.6, 0);
    this.scene.rotate(0.75 * Math.PI, 0, 0, 1);
    this.blueMaterial.apply();
    this.triangleBig.display();
    this.scene.popMatrix();

    //Small Purple Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.7, 3, 0);
    this.scene.rotate(0.25 * Math.PI, 0, 0, 1);
    this.purpleMaterial.apply();
    this.triangleSmall.display();
    this.scene.popMatrix();

    //Pink Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-0.2, 0.2, 0);
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.pinkMaterial.apply();
    this.triangle.display();
    this.scene.popMatrix();

    //Yellow Paralellogram
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(0.8, -0.8, 0);
    this.scene.scale(-1, 1, 1);
    this.scene.rotate(0, 0, 0, 1);
    this.yellowMaterial.apply();
    this.parallelogram.display();
    this.scene.popMatrix();

    //Small Red Triangle
    this.scene.pushMatrix();
    this.scene.multMatrix(mat);
    this.scene.translate(-2.2, -0.8, 0);
    this.scene.rotate(0, 0, 0, 1);
    this.redMaterial.apply();
    this.triangleSmall.display();
    this.scene.popMatrix();
  }

}
