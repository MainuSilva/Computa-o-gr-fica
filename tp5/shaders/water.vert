attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D waterMap;

void main() {
	vTextureCoord = aTextureCoord;

	vec2 movement = vec2(0.1*timeFactor, 0.1*timeFactor);
	vec3 offset = aVertexNormal * 0.1 * texture2D(waterMap, vTextureCoord + movement).b;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}
