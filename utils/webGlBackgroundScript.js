const scriptVert =
  document.createElement("script");
scriptVert.type = "x-shader/x-vertex";
scriptVert.id = "vert-shader";
scriptVert.textContent =
  "attribute vec4 a_position;\n void main() {\n    gl_Position = a_position;\n  }";
scriptVert.async = true;
document.body.appendChild(scriptVert);

const scriptFrag =
  document.createElement("script");
scriptFrag.type = "x-shader/x-fragment";
scriptFrag.id = "frag-shader";
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                -------------------------------------------------- set custom color here in decimal : X.0/255. --------------------------------------------------
scriptFrag.textContent =
  "precision highp float;\n  uniform vec2 u_resolution;\n  uniform float time;\n  uniform vec2 u_mouse;\n\n  float map(float value, float min1, float max1, float min2, float max2) {\n  return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;\n}\n\n\n  vec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n  float random (in vec2 _st) {\n  return fract(sin(dot(_st.xy,\n  vec2(12.9898,78.233)))*\n  43758.5453123);\n}\nfloat noise (in vec2 _st) {\n  vec2 i = floor(_st);\n  vec2 f = fract(_st);\n\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  return mix(a, b, u.x) +\n  (c - a)* u.y * (1.0 - u.x) +\n  (d - b) * u.x * u.y;\n}\n\n  #define NUM_OCTAVES 5\n\n  float fbm ( in vec2 _st) {\n  float v = 0.0;\n  float a = 0.5;\n  vec2 shift = vec2(100.0);\n  // Rotate to reduce axial bias\n  mat2 rot = mat2(cos(0.5), sin(0.5),\n  -sin(0.5), cos(0.50));\n  for (int i = 0; i < NUM_OCTAVES; ++i) {\n  v += a * noise(_st);\n  _st = rot * _st * 2.0 + shift;\n  a *= 0.5;\n}\n  return v;\n}\n\n  void main( void ) {\n\n  vec2 st = gl_FragCoord.xy/u_resolution.y;\n  vec2 mouse = u_mouse.xy/u_resolution.y;\n  vec3 color = vec3(184./255.,64./255.,94./255.);\n\n  vec3 darker = vec3(0.,0.,0.);\n  vec3 lighter = vec3(184./255.,64./255.,94./255.);\n\n  vec2 q = vec2(0.);\n  q.x = fbm( st + 0.02*time);\n  q.y = fbm( st + vec2(1.0));\n\n  vec2 r = vec2(0.);\n  r.x = fbm( st + 10.0*q + vec2(1.0*mouse.x,9.2*mouse.y)+ 0.15*time );\n  r.y = fbm( st + 25.0*q + vec2(5.0*mouse.x,2.8*mouse.y)+ 0.126*time);\n\n  float f = fbm(st+r);\n\n  color = mix(darker,\n  lighter,\n  clamp(0.,0.,0.));\n\n  color = mix(color,\n  darker,\n  clamp(length(q),1.,1.));\n\n  color = mix(color,\n  lighter,\n  clamp(length(r.x),1.5,1.5));\n\n\n  vec4 rgb = vec4 (vec4((f*f*f+.6*f*f+.5)*color,1.));\n\n  gl_FragColor = rgb;\n\n}";
scriptFrag.async = true;
document.body.appendChild(scriptFrag);

let canvas = null;
let gl = null;
let lastUpdate = null;
let timer = 0.0;
let time = null;
let mouseLocation = null;
let resolutionLocation = null;
let mouse = { x: 0, y: 0 };
let vertexShader = null;
let fragmentShader = null;

const initialize = () => {
  initialize3DCanvas();
  initializeResize();
  initializeShaders();
  initializeProgram();
  initializeModel();
  animate();
};

const initialize3DCanvas = () => {
  canvas = document.getElementById("canvas");
  gl =
    canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");
  if (gl) {
    gl.viewport(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(
      gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT,
    );
  }
};

const initializeModel = () => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0,
      1.0, -1.0, 1.0, 1.0,
    ]),
    gl.STATIC_DRAW,
  );

  const positionLocation = gl.getAttribLocation(
    program,
    "a_position",
  );
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(
    positionLocation,
    2,
    gl.FLOAT,
    false,
    0,
    0,
  );
  gl.uniform2f(
    resolutionLocation,
    window.innerWidth,
    window.innerHeight,
  );
  gl.uniform2f(mouseLocation, mouse.x, mouse.y);

  time = gl.getUniformLocation(program, "time");
  mouseLocation = gl.getUniformLocation(
    program,
    "u_mouse",
  );
  resolutionLocation = gl.getUniformLocation(
    program,
    "u_resolution",
  );
  lastUpdate = new Date().getTime();
  gl.uniform2f(
    resolutionLocation,
    window.innerWidth,
    window.innerHeight,
  );
};

const initializeShaders = () => {
  vertexShader = createShader(
    gl,
    "vert-shader",
    gl.VERTEX_SHADER,
  );
  fragmentShader = createShader(
    gl,
    "frag-shader",
    gl.FRAGMENT_SHADER,
  );
};

const createShader = (gl, source, type) => {
  const shader = gl.createShader(type);
  source = document.getElementById(source).text;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (
    !gl.getShaderParameter(
      shader,
      gl.COMPILE_STATUS,
    )
  ) {
    let info = gl.getShaderInfoLog(shader);
    throw (
      "could not compile web gl shader. \n\n" +
      info
    );
  }

  return shader;
};

let program = null;

const initializeProgram = () => {
  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  if (
    !gl.getProgramParameter(
      program,
      gl.LINK_STATUS,
    )
  ) {
    const info = gl.getProgramInfoLog(program);
    throw (
      "Could not compile WebGL program. \n\n" +
      info
    );
  } else {
    gl.useProgram(program);
  }
};

const animate = () => {
  const currentTime = new Date().getTime();
  const timeSinceLastUpdate =
    currentTime - lastUpdate;
  lastUpdate = currentTime;

  render(timeSinceLastUpdate);

  window.requestAnimationFrame(animate);
};

const render = (timeDelta) => {
  timer += timeDelta ? timeDelta / 500 : 0.05;
  gl.uniform1fv(time, [timer]);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
};

const initializeResize = () => {
  const footer =
    document.getElementById("footer");

  const height = document.body.clientHeight;
  const width = document.body.clientWidth;

  canvas.width = width * window.devicePixelRatio;
  canvas.height =
    height * window.devicePixelRatio;

  canvas.style.width = `${width}px`;
  canvas.style.height = `calc(100vh - ${footer.offsetHeight}px)`;

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform2f(
    resolutionLocation,
    window.innerWidth,
    window.innerHeight,
  );
};

window.onresize = () => {
  initializeResize();
};

window.onmousemove = (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  gl.uniform2f(mouseLocation, mouse.x, mouse.y);
};

export default initialize;
