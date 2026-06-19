varying vec2 vUv;
uniform float uTime;

void main() {
    vec3 pos = position;
    pos.x += cos(uTime + position.y) * 0.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}