attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler2;
varying vec2 vTextureCoord;
uniform float normScale;
uniform float timeFactor;

varying vec4 vVertexPosition;

void main() {

	vec3 offset=vec3(0.0,0.0,0.0);

	vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);

	if (filter.b > 0.5)
		offset.x = normScale + sin(timeFactor);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

	vVertexPosition = gl_Position;
}