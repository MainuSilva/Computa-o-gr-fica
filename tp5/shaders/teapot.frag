#ifdef GL_ES
precision highp float;
#endif

varying vec4 vVertexPosition;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {

	if (vVertexPosition.y > 0.5) {
		gl_FragColor = vec4(1, 1, 0, 1);
    }
    else {
        gl_FragColor = vec4(0, 0, 1, 1);
    }
	
}