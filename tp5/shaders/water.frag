#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
    vec2 movement = vec2(timeFactor*0.005, timeFactor*0.005);
    
    vec4 color = texture2D(uSampler, vTextureCoord+ movement);

    gl_FragColor = color;
}