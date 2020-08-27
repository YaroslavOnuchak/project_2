// (function () {
//   function r(e, n, t) {
//     function o(i, f) {
//       if (!n[i]) {
//         if (!e[i]) {
//           var c = "function" == typeof require && require;
//           if (!f && c) return c(i, !0);
//           if (u) return u(i, !0);
//           var a = new Error("Cannot find module '" + i + "'");
//           throw ((a.code = "MODULE_NOT_FOUND"), a);
//         }
//         var p = (n[i] = { exports: {} });
//         e[i][0].call(
//           p.exports,
//           function (r) {
//             var n = e[i][1][r];
//             return o(n || r);
//           },
//           p,
//           p.exports,
//           r,
//           e,
//           n,
//           t
//         );
//       }
//       return n[i].exports;
//     }
//     for (
//       var u = "function" == typeof require && require, i = 0;
//       i < t.length;
//       i++
//     )
//       o(t[i]);
//     return o;
//   }
//   return r;
// })()(
//   {
//     1: [
//       function (require, module, exports) {
//         "use strict";

//         var _sketchJs = require("sketch-js");

//         var _sketchJs2 = _interopRequireDefault(_sketchJs);

//         var _alea = require("alea");

//         var _alea2 = _interopRequireDefault(_alea);

//         var _newArray = require("new-array");

//         var _newArray2 = _interopRequireDefault(_newArray);

//         var _lib = require("./lib");

//         var _lib2 = _interopRequireDefault(_lib);

//         function _interopRequireDefault(obj) {
//           return obj && obj.__esModule ? obj : { default: obj };
//         }

//         var container = document
//           .querySelector("main")
//           .appendChild(document.createElement("div"));
//         container.style.position = "absolute";

//         var ctx = _sketchJs2.default.create({
//           container: container,
//           autostart: false,
//           autoclear: false,
//           fullscreen: false,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//         container.style.position = `absolute`;
//         container.style.zIndex = -2;
//         container.style.top = 0;
//         var settings = {
//           colors: 2,
//           shapePoints: 5,
//           spread: 450,
//           colorSize: 150,
//           deformations: 2,
//           layers: 55,
//           randomSeed: 217,
//           sigma: 2,
//           blend: "lighten",
//           mask: false,
//           maskCircles: 300,
//           maskCircleSize: 50,
//         };

//         var rand = void 0;

//         ctx.setup = ctx.resize = function () {
//           rand = new _alea2.default(settings.randomSeed);
//           ctx.clearRect(0, 0, ctx.width, ctx.height);
//           var canvasCenter = [ctx.width / 2, ctx.height / 2];
//           if (settings.colorSize <= 600) {
//             settings.colorSize += 1;
//             // settings.spread = Math.round(Math.random() * (150 - 100) + 100);
//           }
//           var colors = (0, _newArray2.default)(settings.colors).map(
//             function () {
//               var color = [
//                 (rand() * 256) | 0,
//                 (rand() * 256) | 0,
//                 (rand() * 256) | 0,
//               ];

//               var rads = rand() * Math.PI * 2;
//               var dist = Math.pow(rand(), 0.5) * settings.spread;
//               var position = [
//                 Math.cos(rads) * dist + canvasCenter[0],
//                 Math.sin(rads) * dist + canvasCenter[1],
//               ];
//               return { color: color, position: position };
//             }
//           );
//           var params = Object.assign({}, settings, {
//             randomFn: rand,
//             context: ctx,
//             colors: colors,
//           });
//           var draw = (0, _lib2.default)(params);
//           requestAnimationFrame(ctx.resize);
//           draw();
//           if (settings.colorSize === 600) {
//             settings.colors = Math.round(Math.random() * (3 - 1) + 1);
//             settings.colorSize = 200;
//           }
//         };
//       },
//       { "./lib": 2, alea: 4, "new-array": 51, "sketch-js": 52 },
//     ],
//     2: [
//       function (require, module, exports) {
//         "use strict";

//         Object.defineProperty(exports, "__esModule", {
//           value: true,
//         });

//         var _slicedToArray = (function () {
//           function sliceIterator(arr, i) {
//             var _arr = [];
//             var _n = true;
//             var _d = false;
//             var _e = undefined;
//             try {
//               for (
//                 var _i = arr[Symbol.iterator](), _s;
//                 !(_n = (_s = _i.next()).done);
//                 _n = true
//               ) {
//                 _arr.push(_s.value);
//                 if (i && _arr.length === i) break;
//               }
//             } catch (err) {
//               _d = true;
//               _e = err;
//             } finally {
//               try {
//                 if (!_n && _i["return"]) _i["return"]();
//               } finally {
//                 if (_d) throw _e;
//               }
//             }
//             return _arr;
//           }
//           return function (arr, i) {
//             if (Array.isArray(arr)) {
//               return arr;
//             } else if (Symbol.iterator in Object(arr)) {
//               return sliceIterator(arr, i);
//             } else {
//               throw new TypeError(
//                 "Invalid attempt to destructure non-iterable instance"
//               );
//             }
//           };
//         })();

//         exports.default = watercolor;

//         var _newArray = require("new-array");

//         var _newArray2 = _interopRequireDefault(_newArray);

//         var _glVec = require("gl-vec2");

//         var _glVec2 = _interopRequireDefault(_glVec);

//         var _lerp = require("lerp");

//         var _lerp2 = _interopRequireDefault(_lerp);

//         var _normal = require("./normal");

//         var _normal2 = _interopRequireDefault(_normal);

//         function _interopRequireDefault(obj) {
//           return obj && obj.__esModule ? obj : { default: obj };
//         }

//         var defaultSettings = {
//           shapePoints: 5,
//           colorSize: 200,
//           deformations: 2,
//           layers: 55,
//           sigma: 2,
//           blend: "lighten",
//           mask: false,
//           maskCircles: 300,
//           maskCircleSize: 50,
//           random: Math.random,
//         };

//         function watercolor(settings) {
//           settings = Object.assign({}, defaultSettings, settings);
//           var _settings = settings,
//             context = _settings.context,
//             randomFn = _settings.randomFn;

//           context.globalCompositeOperation = settings.blend;

//           var shapes = settings.colors.map(function (_ref) {
//             var color = _ref.color,
//               position = _ref.position;

//             var points = (0, _newArray2.default)(settings.shapePoints).map(
//               function (_, i) {
//                 var rads = ((Math.PI * 2) / settings.shapePoints) * i;
//                 return [
//                   Math.cos(rads) * settings.colorSize + position[0],
//                   Math.sin(rads) * settings.colorSize + position[1],
//                 ];
//               }
//             );

//             var j = settings.deformations + 2;
//             while (j--) {
//               points = deformPolygon(points);
//             }

//             // fix this to turn any color representation into rgb
//             var rgb = color;

//             return { points: points, rgb: rgb };
//           });

//           return function draw() {
//             var q = shapes.length * settings.layers;
//             while (q--) {
//               var _shapes = shapes[q % shapes.length],
//                 points = _shapes.points,
//                 rgb = _shapes.rgb;

//               var detailedDeform = points.slice();
//               var k = settings.deformations;
//               while (k--) {
//                 detailedDeform = deformPolygon(detailedDeform);
//               }
//               var opacity = 1 / (settings.layers + 4);
//               var color = "rgba(" + rgb.join(", ") + ", " + opacity + ")";
//               drawPolygonWithMask(context, detailedDeform, color);
//             }
//           };

//           function deformPolygon(points) {
//             var newPoints = [];
//             for (var i = 0; i < points.length; i++) {
//               newPoints.push(points[i]);
//               var nextPoint = points[i + 1] || points[0];
//               newPoints.push(
//                 _glVec2.default.lerp([], points[i], nextPoint, randomFn())
//               );
//             }
//             newPoints = newPoints.map(function (pt, i) {
//               var lastPt = newPoints[i - 1] || newPoints[newPoints.length - 1];
//               var nextPt = newPoints[i + 1] || newPoints[0];
//               var distToClosestPt =
//                 (_glVec2.default.distance(pt, lastPt) +
//                   _glVec2.default.distance(pt, nextPt)) /
//                 2;
//               var r = (0, _normal2.default)(
//                 0,
//                 distToClosestPt / settings.sigma,
//                 randomFn
//               );
//               return [r() + pt[0], r() + pt[1]];
//             });
//             return newPoints;
//           }

//           function setMask(context, bounds) {
//             var _bounds$ = _slicedToArray(bounds[0], 2),
//               xMin = _bounds$[0],
//               yMin = _bounds$[1];

//             var _bounds$2 = _slicedToArray(bounds[1], 2),
//               xMax = _bounds$2[0],
//               yMax = _bounds$2[1];

//             context.beginPath();
//             var j = settings.maskCircles;
//             while (j--) {
//               var x = (0, _lerp2.default)(xMin, xMax, randomFn());
//               var y = (0, _lerp2.default)(yMin, yMax, randomFn());
//               var radius = randomFn() * settings.maskCircleSize;
//               context.arc(x, y, radius, 0, Math.PI * 2);
//             }
//             context.clip();
//           }

//           function drawPolygonWithMask(context, poly, color) {
//             var polygonBounds = getPolygonExtent(poly);
//             context.save();
//             if (settings.mask) {
//               setMask(context, polygonBounds);
//             }
//             drawPolygon(context, poly, color);
//             context.restore();
//           }
//         }

//         function getPolygonExtent(poly) {
//           var xMin = Infinity;
//           var xMax = -Infinity;
//           var yMin = Infinity;
//           var yMax = -Infinity;
//           var _iteratorNormalCompletion = true;
//           var _didIteratorError = false;
//           var _iteratorError = undefined;

//           try {
//             for (
//               var _iterator = poly[Symbol.iterator](), _step;
//               !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
//               _iteratorNormalCompletion = true
//             ) {
//               var point = _step.value;

//               xMin = point[0] < xMin ? point[0] : xMin;
//               xMax = point[0] > xMax ? point[0] : xMax;
//               yMin = point[1] < yMin ? point[1] : yMin;
//               yMax = point[1] > yMax ? point[1] : yMax;
//             }
//           } catch (err) {
//             _didIteratorError = true;
//             _iteratorError = err;
//           } finally {
//             try {
//               if (!_iteratorNormalCompletion && _iterator.return) {
//                 _iterator.return();
//               }
//             } finally {
//               if (_didIteratorError) {
//                 throw _iteratorError;
//               }
//             }
//           }

//           return [
//             [xMin, yMin],
//             [xMax, yMax],
//           ];
//         }

//         function drawPolygon(context, points, color) {
//           context.beginPath();
//           context.moveTo(points[0][0], points[0][1]);
//           points.slice(1).forEach(function (pt) {
//             return context.lineTo(pt[0], pt[1]);
//           });
//           context.lineTo(points[0][0], points[0][1]);
//           context.fillStyle = color;
//           context.fill();
//         }
//       },
//       { "./normal": 3, "gl-vec2": 22, lerp: 50, "new-array": 51 },
//     ],
//     3: [
//       function (require, module, exports) {
//         "use strict";

//         Object.defineProperty(exports, "__esModule", {
//           value: true,
//         });

//         exports.default = function (mu, sigma, rand) {
//           var x, r;
//           mu = mu == null ? 0 : +mu;
//           sigma = sigma == null ? 1 : +sigma;
//           rand = rand == null ? Math.random : rand;
//           return function () {
//             var y;

//             // If available, use the second previously-generated uniform random.
//             if (x != null) {
//               y = x;
//               x = null;
//               // eslint-disable-next-line
//             } else
//               do {
//                 // Otherwise, generate a new x and y.
//                 x = rand() * 2 - 1;
//                 y = rand() * 2 - 1;
//                 r = x * x + y * y;
//               } while (!r || r > 1);

//             return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
//           };
//         };
//       },
//       {},
//     ],
//     4: [
//       function (require, module, exports) {
//         (function (root, factory) {
//           if (typeof exports === "object") {
//             module.exports = factory();
//           } else if (typeof define === "function" && define.amd) {
//             define(factory);
//           } else {
//             root.Alea = factory();
//           }
//         })(this, function () {
//           "use strict";

//           // From http://baagoe.com/en/RandomMusings/javascript/

//           // importState to sync generator states
//           Alea.importState = function (i) {
//             var random = new Alea();
//             random.importState(i);
//             return random;
//           };

//           return Alea;

//           function Alea() {
//             return (function (args) {
//               // Johannes Baagøe <baagoe@baagoe.com>, 2010
//               var s0 = 0;
//               var s1 = 0;
//               var s2 = 0;
//               var c = 1;

//               if (args.length == 0) {
//                 args = [+new Date()];
//               }
//               var mash = Mash();
//               s0 = mash(" ");
//               s1 = mash(" ");
//               s2 = mash(" ");

//               for (var i = 0; i < args.length; i++) {
//                 s0 -= mash(args[i]);
//                 if (s0 < 0) {
//                   s0 += 1;
//                 }
//                 s1 -= mash(args[i]);
//                 if (s1 < 0) {
//                   s1 += 1;
//                 }
//                 s2 -= mash(args[i]);
//                 if (s2 < 0) {
//                   s2 += 1;
//                 }
//               }
//               mash = null;

//               var random = function () {
//                 var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
//                 s0 = s1;
//                 s1 = s2;
//                 return (s2 = t - (c = t | 0));
//               };
//               random.uint32 = function () {
//                 return random() * 0x100000000; // 2^32
//               };
//               random.fract53 = function () {
//                 return (
//                   random() +
//                   ((random() * 0x200000) | 0) * 1.1102230246251565e-16
//                 ); // 2^-53
//               };
//               random.version = "Alea 0.9";
//               random.args = args;

//               // my own additions to sync state between two generators
//               random.exportState = function () {
//                 return [s0, s1, s2, c];
//               };
//               random.importState = function (i) {
//                 s0 = +i[0] || 0;
//                 s1 = +i[1] || 0;
//                 s2 = +i[2] || 0;
//                 c = +i[3] || 0;
//               };

//               return random;
//             })(Array.prototype.slice.call(arguments));
//           }

//           function Mash() {
//             var n = 0xefc8249d;

//             var mash = function (data) {
//               data = data.toString();
//               for (var i = 0; i < data.length; i++) {
//                 n += data.charCodeAt(i);
//                 var h = 0.02519603282416938 * n;
//                 n = h >>> 0;
//                 h -= n;
//                 h *= n;
//                 n = h >>> 0;
//                 h -= n;
//                 n += h * 0x100000000; // 2^32
//               }
//               return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
//             };

//             mash.version = "Mash 0.9";
//             return mash;
//           }
//         });
//       },
//       {},
//     ],
//     5: [
//       function (require, module, exports) {
//         module.exports = add;

//         /**
//          * Adds two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function add(out, a, b) {
//           out[0] = a[0] + b[0];
//           out[1] = a[1] + b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     6: [
//       function (require, module, exports) {
//         module.exports = ceil;

//         /**
//          * Math.ceil the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to ceil
//          * @returns {vec2} out
//          */
//         function ceil(out, a) {
//           out[0] = Math.ceil(a[0]);
//           out[1] = Math.ceil(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     7: [
//       function (require, module, exports) {
//         module.exports = clone;

//         /**
//          * Creates a new vec2 initialized with values from an existing vector
//          *
//          * @param {vec2} a vector to clone
//          * @returns {vec2} a new 2D vector
//          */
//         function clone(a) {
//           var out = new Float32Array(2);
//           out[0] = a[0];
//           out[1] = a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     8: [
//       function (require, module, exports) {
//         module.exports = copy;

//         /**
//          * Copy the values from one vec2 to another
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the source vector
//          * @returns {vec2} out
//          */
//         function copy(out, a) {
//           out[0] = a[0];
//           out[1] = a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     9: [
//       function (require, module, exports) {
//         module.exports = create;

//         /**
//          * Creates a new, empty vec2
//          *
//          * @returns {vec2} a new 2D vector
//          */
//         function create() {
//           var out = new Float32Array(2);
//           out[0] = 0;
//           out[1] = 0;
//           return out;
//         }
//       },
//       {},
//     ],
//     10: [
//       function (require, module, exports) {
//         module.exports = cross;

//         /**
//          * Computes the cross product of two vec2's
//          * Note that the cross product must by definition produce a 3D vector
//          *
//          * @param {vec3} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec3} out
//          */
//         function cross(out, a, b) {
//           var z = a[0] * b[1] - a[1] * b[0];
//           out[0] = out[1] = 0;
//           out[2] = z;
//           return out;
//         }
//       },
//       {},
//     ],
//     11: [
//       function (require, module, exports) {
//         module.exports = require("./distance");
//       },
//       { "./distance": 12 },
//     ],
//     12: [
//       function (require, module, exports) {
//         module.exports = distance;

//         /**
//          * Calculates the euclidian distance between two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} distance between a and b
//          */
//         function distance(a, b) {
//           var x = b[0] - a[0],
//             y = b[1] - a[1];
//           return Math.sqrt(x * x + y * y);
//         }
//       },
//       {},
//     ],
//     13: [
//       function (require, module, exports) {
//         module.exports = require("./divide");
//       },
//       { "./divide": 14 },
//     ],
//     14: [
//       function (require, module, exports) {
//         module.exports = divide;

//         /**
//          * Divides two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function divide(out, a, b) {
//           out[0] = a[0] / b[0];
//           out[1] = a[1] / b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     15: [
//       function (require, module, exports) {
//         module.exports = dot;

//         /**
//          * Calculates the dot product of two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} dot product of a and b
//          */
//         function dot(a, b) {
//           return a[0] * b[0] + a[1] * b[1];
//         }
//       },
//       {},
//     ],
//     16: [
//       function (require, module, exports) {
//         module.exports = 0.000001;
//       },
//       {},
//     ],
//     17: [
//       function (require, module, exports) {
//         module.exports = equals;

//         var EPSILON = require("./epsilon");

//         /**
//          * Returns whether or not the vectors have approximately the same elements in the same position.
//          *
//          * @param {vec2} a The first vector.
//          * @param {vec2} b The second vector.
//          * @returns {Boolean} True if the vectors are equal, false otherwise.
//          */
//         function equals(a, b) {
//           var a0 = a[0];
//           var a1 = a[1];
//           var b0 = b[0];
//           var b1 = b[1];
//           return (
//             Math.abs(a0 - b0) <=
//               EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
//             Math.abs(a1 - b1) <=
//               EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
//           );
//         }
//       },
//       { "./epsilon": 16 },
//     ],
//     18: [
//       function (require, module, exports) {
//         module.exports = exactEquals;

//         /**
//          * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
//          *
//          * @param {vec2} a The first vector.
//          * @param {vec2} b The second vector.
//          * @returns {Boolean} True if the vectors are equal, false otherwise.
//          */
//         function exactEquals(a, b) {
//           return a[0] === b[0] && a[1] === b[1];
//         }
//       },
//       {},
//     ],
//     19: [
//       function (require, module, exports) {
//         module.exports = floor;

//         /**
//          * Math.floor the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to floor
//          * @returns {vec2} out
//          */
//         function floor(out, a) {
//           out[0] = Math.floor(a[0]);
//           out[1] = Math.floor(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     20: [
//       function (require, module, exports) {
//         module.exports = forEach;

//         var vec = require("./create")();

//         /**
//          * Perform some operation over an array of vec2s.
//          *
//          * @param {Array} a the array of vectors to iterate over
//          * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
//          * @param {Number} offset Number of elements to skip at the beginning of the array
//          * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
//          * @param {Function} fn Function to call for each vector in the array
//          * @param {Object} [arg] additional argument to pass to fn
//          * @returns {Array} a
//          * @function
//          */
//         function forEach(a, stride, offset, count, fn, arg) {
//           var i, l;
//           if (!stride) {
//             stride = 2;
//           }

//           if (!offset) {
//             offset = 0;
//           }

//           if (count) {
//             l = Math.min(count * stride + offset, a.length);
//           } else {
//             l = a.length;
//           }

//           for (i = offset; i < l; i += stride) {
//             vec[0] = a[i];
//             vec[1] = a[i + 1];
//             fn(vec, vec, arg);
//             a[i] = vec[0];
//             a[i + 1] = vec[1];
//           }

//           return a;
//         }
//       },
//       { "./create": 9 },
//     ],
//     21: [
//       function (require, module, exports) {
//         module.exports = fromValues;

//         /**
//          * Creates a new vec2 initialized with the given values
//          *
//          * @param {Number} x X component
//          * @param {Number} y Y component
//          * @returns {vec2} a new 2D vector
//          */
//         function fromValues(x, y) {
//           var out = new Float32Array(2);
//           out[0] = x;
//           out[1] = y;
//           return out;
//         }
//       },
//       {},
//     ],
//     22: [
//       function (require, module, exports) {
//         module.exports = {
//           EPSILON: require("./epsilon"),
//           create: require("./create"),
//           clone: require("./clone"),
//           fromValues: require("./fromValues"),
//           copy: require("./copy"),
//           set: require("./set"),
//           equals: require("./equals"),
//           exactEquals: require("./exactEquals"),
//           add: require("./add"),
//           subtract: require("./subtract"),
//           sub: require("./sub"),
//           multiply: require("./multiply"),
//           mul: require("./mul"),
//           divide: require("./divide"),
//           div: require("./div"),
//           inverse: require("./inverse"),
//           min: require("./min"),
//           max: require("./max"),
//           rotate: require("./rotate"),
//           floor: require("./floor"),
//           ceil: require("./ceil"),
//           round: require("./round"),
//           scale: require("./scale"),
//           scaleAndAdd: require("./scaleAndAdd"),
//           distance: require("./distance"),
//           dist: require("./dist"),
//           squaredDistance: require("./squaredDistance"),
//           sqrDist: require("./sqrDist"),
//           length: require("./length"),
//           len: require("./len"),
//           squaredLength: require("./squaredLength"),
//           sqrLen: require("./sqrLen"),
//           negate: require("./negate"),
//           normalize: require("./normalize"),
//           dot: require("./dot"),
//           cross: require("./cross"),
//           lerp: require("./lerp"),
//           random: require("./random"),
//           transformMat2: require("./transformMat2"),
//           transformMat2d: require("./transformMat2d"),
//           transformMat3: require("./transformMat3"),
//           transformMat4: require("./transformMat4"),
//           forEach: require("./forEach"),
//           limit: require("./limit"),
//         };
//       },
//       {
//         "./add": 5,
//         "./ceil": 6,
//         "./clone": 7,
//         "./copy": 8,
//         "./create": 9,
//         "./cross": 10,
//         "./dist": 11,
//         "./distance": 12,
//         "./div": 13,
//         "./divide": 14,
//         "./dot": 15,
//         "./epsilon": 16,
//         "./equals": 17,
//         "./exactEquals": 18,
//         "./floor": 19,
//         "./forEach": 20,
//         "./fromValues": 21,
//         "./inverse": 23,
//         "./len": 24,
//         "./length": 25,
//         "./lerp": 26,
//         "./limit": 27,
//         "./max": 28,
//         "./min": 29,
//         "./mul": 30,
//         "./multiply": 31,
//         "./negate": 32,
//         "./normalize": 33,
//         "./random": 34,
//         "./rotate": 35,
//         "./round": 36,
//         "./scale": 37,
//         "./scaleAndAdd": 38,
//         "./set": 39,
//         "./sqrDist": 40,
//         "./sqrLen": 41,
//         "./squaredDistance": 42,
//         "./squaredLength": 43,
//         "./sub": 44,
//         "./subtract": 45,
//         "./transformMat2": 46,
//         "./transformMat2d": 47,
//         "./transformMat3": 48,
//         "./transformMat4": 49,
//       },
//     ],
//     23: [
//       function (require, module, exports) {
//         module.exports = inverse;

//         /**
//          * Returns the inverse of the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to invert
//          * @returns {vec2} out
//          */
//         function inverse(out, a) {
//           out[0] = 1.0 / a[0];
//           out[1] = 1.0 / a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     24: [
//       function (require, module, exports) {
//         module.exports = require("./length");
//       },
//       { "./length": 25 },
//     ],
//     25: [
//       function (require, module, exports) {
//         module.exports = length;

//         /**
//          * Calculates the length of a vec2
//          *
//          * @param {vec2} a vector to calculate length of
//          * @returns {Number} length of a
//          */
//         function length(a) {
//           var x = a[0],
//             y = a[1];
//           return Math.sqrt(x * x + y * y);
//         }
//       },
//       {},
//     ],
//     26: [
//       function (require, module, exports) {
//         module.exports = lerp;

//         /**
//          * Performs a linear interpolation between two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @param {Number} t interpolation amount between the two inputs
//          * @returns {vec2} out
//          */
//         function lerp(out, a, b, t) {
//           var ax = a[0],
//             ay = a[1];
//           out[0] = ax + t * (b[0] - ax);
//           out[1] = ay + t * (b[1] - ay);
//           return out;
//         }
//       },
//       {},
//     ],
//     27: [
//       function (require, module, exports) {
//         module.exports = limit;

//         /**
//          * Limit the magnitude of this vector to the value used for the `max`
//          * parameter.
//          *
//          * @param  {vec2} the vector to limit
//          * @param  {Number} max the maximum magnitude for the vector
//          * @returns {vec2} out
//          */
//         function limit(out, a, max) {
//           var mSq = a[0] * a[0] + a[1] * a[1];

//           if (mSq > max * max) {
//             var n = Math.sqrt(mSq);
//             out[0] = (a[0] / n) * max;
//             out[1] = (a[1] / n) * max;
//           } else {
//             out[0] = a[0];
//             out[1] = a[1];
//           }

//           return out;
//         }
//       },
//       {},
//     ],
//     28: [
//       function (require, module, exports) {
//         module.exports = max;

//         /**
//          * Returns the maximum of two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function max(out, a, b) {
//           out[0] = Math.max(a[0], b[0]);
//           out[1] = Math.max(a[1], b[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     29: [
//       function (require, module, exports) {
//         module.exports = min;

//         /**
//          * Returns the minimum of two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function min(out, a, b) {
//           out[0] = Math.min(a[0], b[0]);
//           out[1] = Math.min(a[1], b[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     30: [
//       function (require, module, exports) {
//         module.exports = require("./multiply");
//       },
//       { "./multiply": 31 },
//     ],
//     31: [
//       function (require, module, exports) {
//         module.exports = multiply;

//         /**
//          * Multiplies two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function multiply(out, a, b) {
//           out[0] = a[0] * b[0];
//           out[1] = a[1] * b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     32: [
//       function (require, module, exports) {
//         module.exports = negate;

//         /**
//          * Negates the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to negate
//          * @returns {vec2} out
//          */
//         function negate(out, a) {
//           out[0] = -a[0];
//           out[1] = -a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     33: [
//       function (require, module, exports) {
//         module.exports = normalize;

//         /**
//          * Normalize a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to normalize
//          * @returns {vec2} out
//          */
//         function normalize(out, a) {
//           var x = a[0],
//             y = a[1];
//           var len = x * x + y * y;
//           if (len > 0) {
//             //TODO: evaluate use of glm_invsqrt here?
//             len = 1 / Math.sqrt(len);
//             out[0] = a[0] * len;
//             out[1] = a[1] * len;
//           }
//           return out;
//         }
//       },
//       {},
//     ],
//     34: [
//       function (require, module, exports) {
//         module.exports = random;

//         /**
//          * Generates a random vector with the given scale
//          *
//          * @param {vec2} out the receiving vector
//          * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
//          * @returns {vec2} out
//          */
//         function random(out, scale) {
//           scale = scale || 1.0;
//           var r = Math.random() * 2.0 * Math.PI;
//           out[0] = Math.cos(r) * scale;
//           out[1] = Math.sin(r) * scale;
//           return out;
//         }
//       },
//       {},
//     ],
//     35: [
//       function (require, module, exports) {
//         module.exports = rotate;

//         /**
//          * Rotates a vec2 by an angle
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to rotate
//          * @param {Number} angle the angle of rotation (in radians)
//          * @returns {vec2} out
//          */
//         function rotate(out, a, angle) {
//           var c = Math.cos(angle),
//             s = Math.sin(angle);
//           var x = a[0],
//             y = a[1];

//           out[0] = x * c - y * s;
//           out[1] = x * s + y * c;

//           return out;
//         }
//       },
//       {},
//     ],
//     36: [
//       function (require, module, exports) {
//         module.exports = round;

//         /**
//          * Math.round the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to round
//          * @returns {vec2} out
//          */
//         function round(out, a) {
//           out[0] = Math.round(a[0]);
//           out[1] = Math.round(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     37: [
//       function (require, module, exports) {
//         module.exports = scale;

//         /**
//          * Scales a vec2 by a scalar number
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to scale
//          * @param {Number} b amount to scale the vector by
//          * @returns {vec2} out
//          */
//         function scale(out, a, b) {
//           out[0] = a[0] * b;
//           out[1] = a[1] * b;
//           return out;
//         }
//       },
//       {},
//     ],
//     38: [
//       function (require, module, exports) {
//         module.exports = scaleAndAdd;

//         /**
//          * Adds two vec2's after scaling the second operand by a scalar value
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @param {Number} scale the amount to scale b by before adding
//          * @returns {vec2} out
//          */
//         function scaleAndAdd(out, a, b, scale) {
//           out[0] = a[0] + b[0] * scale;
//           out[1] = a[1] + b[1] * scale;
//           return out;
//         }
//       },
//       {},
//     ],
//     39: [
//       function (require, module, exports) {
//         module.exports = set;

//         /**
//          * Set the components of a vec2 to the given values
//          *
//          * @param {vec2} out the receiving vector
//          * @param {Number} x X component
//          * @param {Number} y Y component
//          * @returns {vec2} out
//          */
//         function set(out, x, y) {
//           out[0] = x;
//           out[1] = y;
//           return out;
//         }
//       },
//       {},
//     ],
//     40: [
//       function (require, module, exports) {
//         module.exports = require("./squaredDistance");
//       },
//       { "./squaredDistance": 42 },
//     ],
//     41: [
//       function (require, module, exports) {
//         module.exports = require("./squaredLength");
//       },
//       { "./squaredLength": 43 },
//     ],
//     42: [
//       function (require, module, exports) {
//         module.exports = squaredDistance;

//         /**
//          * Calculates the squared euclidian distance between two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} squared distance between a and b
//          */
//         function squaredDistance(a, b) {
//           var x = b[0] - a[0],
//             y = b[1] - a[1];
//           return x * x + y * y;
//         }
//       },
//       {},
//     ],
//     43: [
//       function (require, module, exports) {
//         module.exports = squaredLength;

//         /**
//          * Calculates the squared length of a vec2
//          *
//          * @param {vec2} a vector to calculate squared length of
//          * @returns {Number} squared length of a
//          */
//         function squaredLength(a) {
//           var x = a[0],
//             y = a[1];
//           return x * x + y * y;
//         }
//       },
//       {},
//     ],
//     44: [
//       function (require, module, exports) {
//         module.exports = require("./subtract");
//       },
//       { "./subtract": 45 },
//     ],
//     45: [
//       function (require, module, exports) {
//         module.exports = subtract;

//         /**
//          * Subtracts vector b from vector a
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function subtract(out, a, b) {
//           out[0] = a[0] - b[0];
//           out[1] = a[1] - b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     46: [
//       function (require, module, exports) {
//         module.exports = transformMat2;

//         /**
//          * Transforms the vec2 with a mat2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat2} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat2(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[2] * y;
//           out[1] = m[1] * x + m[3] * y;
//           return out;
//         }
//       },
//       {},
//     ],
//     47: [
//       function (require, module, exports) {
//         module.exports = transformMat2d;

//         /**
//          * Transforms the vec2 with a mat2d
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat2d} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat2d(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[2] * y + m[4];
//           out[1] = m[1] * x + m[3] * y + m[5];
//           return out;
//         }
//       },
//       {},
//     ],
//     48: [
//       function (require, module, exports) {
//         module.exports = transformMat3;

//         /**
//          * Transforms the vec2 with a mat3
//          * 3rd vector component is implicitly '1'
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat3} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat3(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[3] * y + m[6];
//           out[1] = m[1] * x + m[4] * y + m[7];
//           return out;
//         }
//       },
//       {},
//     ],
//     49: [
//       function (require, module, exports) {
//         module.exports = transformMat4;

//         /**
//          * Transforms the vec2 with a mat4
//          * 3rd vector component is implicitly '0'
//          * 4th vector component is implicitly '1'
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat4} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat4(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[4] * y + m[12];
//           out[1] = m[1] * x + m[5] * y + m[13];
//           return out;
//         }
//       },
//       {},
//     ],
//     50: [
//       function (require, module, exports) {
//         function lerp(v0, v1, t) {
//           return v0 * (1 - t) + v1 * t;
//         }
//         module.exports = lerp;
//       },
//       {},
//     ],
//     51: [
//       function (require, module, exports) {
//         module.exports = newArray;

//         function newArray(n, value) {
//           n = n || 0;
//           var array = new Array(n);
//           for (var i = 0; i < n; i++) {
//             array[i] = value;
//           }
//           return array;
//         }
//       },
//       {},
//     ],
//     52: [
//       function (require, module, exports) {
//         /* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */

//         (function (root, factory) {
//           if (typeof exports === "object") {
//             // CommonJS like
//             module.exports = factory(root, root.document);
//           } else if (typeof define === "function" && define.amd) {
//             // AMD
//             define(function () {
//               return factory(root, root.document);
//             });
//           } else {
//             // Browser global
//             root.Sketch = factory(root, root.document);
//           }
//         })(typeof window !== "undefined" ? window : this, function (
//           window,
//           document
//         ) {
//           "use strict";

//           /*
//       ----------------------------------------------------------------------
    
//         Config
    
//       ----------------------------------------------------------------------
//       */

//           var MATH_PROPS = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(
//             " "
//           );
//           var HAS_SKETCH = "__hasSketch";
//           var M = Math;

//           var CANVAS = "canvas";
//           var WEBGL = "webgl";
//           var DOM = "dom";

//           var doc = document;
//           var win = window;

//           var instances = [];

//           var defaults = {
//             fullscreen: true,
//             autostart: true,
//             autoclear: true,
//             autopause: true,
//             container: doc.body,
//             interval: 1,
//             globals: true,
//             retina: false,
//             type: CANVAS,
//           };

//           var keyMap = {
//             8: "BACKSPACE",
//             9: "TAB",
//             13: "ENTER",
//             16: "SHIFT",
//             27: "ESCAPE",
//             32: "SPACE",
//             37: "LEFT",
//             38: "UP",
//             39: "RIGHT",
//             40: "DOWN",
//           };

//           /*
//       ----------------------------------------------------------------------
    
//         Utilities
    
//       ----------------------------------------------------------------------
//       */

//           function isArray(object) {
//             return Object.prototype.toString.call(object) == "[object Array]";
//           }

//           function isFunction(object) {
//             return typeof object == "function";
//           }

//           function isNumber(object) {
//             return typeof object == "number";
//           }

//           function isString(object) {
//             return typeof object == "string";
//           }

//           function keyName(code) {
//             return keyMap[code] || String.fromCharCode(code);
//           }

//           function extend(target, source, overwrite) {
//             for (var key in source)
//               if (overwrite || !(key in target)) target[key] = source[key];

//             return target;
//           }

//           function proxy(method, context) {
//             return function () {
//               method.apply(context, arguments);
//             };
//           }

//           function clone(target) {
//             var object = {};

//             for (var key in target) {
//               if (key === "webkitMovementX" || key === "webkitMovementY")
//                 continue;

//               if (isFunction(target[key]))
//                 object[key] = proxy(target[key], target);
//               else object[key] = target[key];
//             }

//             return object;
//           }

//           /*
//       ----------------------------------------------------------------------
    
//         Constructor
    
//       ----------------------------------------------------------------------
//       */

//           function constructor(context) {
//             var request,
//               handler,
//               target,
//               parent,
//               bounds,
//               index,
//               suffix,
//               clock,
//               node,
//               copy,
//               type,
//               key,
//               val,
//               min,
//               max,
//               w,
//               h;

//             var counter = 0;
//             var touches = [];
//             var resized = false;
//             var setup = false;
//             var ratio = win.devicePixelRatio || 1;
//             var isDiv = context.type == DOM;
//             var is2D = context.type == CANVAS;

//             var mouse = {
//               x: 0.0,
//               y: 0.0,
//               ox: 0.0,
//               oy: 0.0,
//               dx: 0.0,
//               dy: 0.0,
//             };

//             var eventMap = [
//               context.eventTarget || context.element,

//               pointer,
//               "mousedown",
//               "touchstart",
//               pointer,
//               "mousemove",
//               "touchmove",
//               pointer,
//               "mouseup",
//               "touchend",
//               pointer,
//               "click",
//               pointer,
//               "mouseout",
//               pointer,
//               "mouseover",

//               doc,

//               keypress,
//               "keydown",
//               "keyup",

//               win,

//               active,
//               "focus",
//               "blur",
//               resize,
//               "resize",
//             ];

//             var keys = {};
//             for (key in keyMap) keys[keyMap[key]] = false;

//             function trigger(method) {
//               if (isFunction(method))
//                 method.apply(context, [].splice.call(arguments, 1));
//             }

//             function bind(on) {
//               for (index = 0; index < eventMap.length; index++) {
//                 node = eventMap[index];

//                 if (isString(node))
//                   target[(on ? "add" : "remove") + "EventListener"].call(
//                     target,
//                     node,
//                     handler,
//                     false
//                   );
//                 else if (isFunction(node)) handler = node;
//                 else target = node;
//               }
//             }

//             function update() {
//               cAF(request);
//               request = rAF(update);

//               if (!setup) {
//                 trigger(context.setup);
//                 setup = isFunction(context.setup);
//               }

//               if (!resized) {
//                 trigger(context.resize);
//                 resized = isFunction(context.resize);
//               }

//               if (context.running && !counter) {
//                 context.dt = (clock = +new Date()) - context.now;
//                 context.millis += context.dt;
//                 context.now = clock;

//                 trigger(context.update);

//                 // Pre draw

//                 if (is2D) {
//                   if (context.retina) {
//                     context.save();

//                     if (context.autoclear) {
//                       context.scale(ratio, ratio);
//                     }
//                   }

//                   if (context.autoclear) context.clear();
//                 }

//                 // Draw

//                 trigger(context.draw);

//                 // Post draw

//                 if (is2D && context.retina) context.restore();
//               }

//               counter = ++counter % context.interval;
//             }

//             function resize() {
//               target = isDiv ? context.style : context.canvas;
//               suffix = isDiv ? "px" : "";

//               w = context.width;
//               h = context.height;

//               if (context.fullscreen) {
//                 h = context.height = win.innerHeight;
//                 w = context.width = win.innerWidth;
//               }

//               if (context.retina && is2D && ratio) {
//                 target.style.height = h + "px";
//                 target.style.width = w + "px";

//                 w *= ratio;
//                 h *= ratio;
//               }

//               if (target.height !== h) target.height = h + suffix;

//               if (target.width !== w) target.width = w + suffix;

//               if (is2D && !context.autoclear && context.retina)
//                 context.scale(ratio, ratio);

//               if (setup) trigger(context.resize);
//             }

//             function align(touch, target) {
//               bounds = target.getBoundingClientRect();

//               touch.x =
//                 touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);
//               touch.y =
//                 touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);

//               return touch;
//             }

//             function augment(touch, target) {
//               align(touch, context.element);

//               target = target || {};

//               target.ox = target.x || touch.x;
//               target.oy = target.y || touch.y;

//               target.x = touch.x;
//               target.y = touch.y;

//               target.dx = target.x - target.ox;
//               target.dy = target.y - target.oy;

//               return target;
//             }

//             function process(event) {
//               event.preventDefault();

//               copy = clone(event);
//               copy.originalEvent = event;

//               if (copy.touches) {
//                 touches.length = copy.touches.length;

//                 for (index = 0; index < copy.touches.length; index++)
//                   touches[index] = augment(copy.touches[index], touches[index]);
//               } else {
//                 touches.length = 0;
//                 touches[0] = augment(copy, mouse);
//               }

//               extend(mouse, touches[0], true);

//               return copy;
//             }

//             function pointer(event) {
//               event = process(event);

//               min = (max = eventMap.indexOf((type = event.type))) - 1;

//               context.dragging = /down|start/.test(type)
//                 ? true
//                 : /up|end/.test(type)
//                 ? false
//                 : context.dragging;

//               while (min)
//                 isString(eventMap[min])
//                   ? trigger(context[eventMap[min--]], event)
//                   : isString(eventMap[max])
//                   ? trigger(context[eventMap[max++]], event)
//                   : (min = 0);
//             }

//             function keypress(event) {
//               key = event.keyCode;
//               val = event.type == "keyup";
//               keys[key] = keys[keyName(key)] = !val;

//               trigger(context[event.type], event);
//             }

//             function active(event) {
//               if (context.autopause) (event.type == "blur" ? stop : start)();

//               trigger(context[event.type], event);
//             }

//             // Public API

//             function start() {
//               context.now = +new Date();
//               context.running = true;
//             }

//             function stop() {
//               context.running = false;
//             }

//             function toggle() {
//               (context.running ? stop : start)();
//             }

//             function clear() {
//               if (is2D)
//                 context.clearRect(
//                   0,
//                   0,
//                   context.width * ratio,
//                   context.height * ratio
//                 );
//             }

//             function destroy() {
//               parent = context.element.parentNode;
//               index = instances.indexOf(context);

//               if (parent) parent.removeChild(context.element);
//               if (~index) instances.splice(index, 1);

//               bind(false);
//               stop();
//             }

//             extend(context, {
//               touches: touches,
//               mouse: mouse,
//               keys: keys,

//               dragging: false,
//               running: false,
//               millis: 0,
//               now: NaN,
//               dt: NaN,

//               destroy: destroy,
//               toggle: toggle,
//               clear: clear,
//               start: start,
//               stop: stop,
//             });

//             instances.push(context);

//             return (
//               context.autostart && start(),
//               bind(true),
//               resize(),
//               update(),
//               context
//             );
//           }

//           /*
//       ----------------------------------------------------------------------
    
//         Global API
    
//       ----------------------------------------------------------------------
//       */

//           var element,
//             context,
//             Sketch = {
//               CANVAS: CANVAS,
//               WEB_GL: WEBGL,
//               WEBGL: WEBGL,
//               DOM: DOM,

//               instances: instances,

//               install: function (context) {
//                 if (!context[HAS_SKETCH]) {
//                   for (var i = 0; i < MATH_PROPS.length; i++)
//                     context[MATH_PROPS[i]] = M[MATH_PROPS[i]];

//                   extend(context, {
//                     TWO_PI: M.PI * 2,
//                     HALF_PI: M.PI / 2,
//                     QUARTER_PI: M.PI / 4,

//                     random: function (min, max) {
//                       if (isArray(min)) return min[~~(M.random() * min.length)];

//                       if (!isNumber(max)) (max = min || 1), (min = 0);

//                       return min + M.random() * (max - min);
//                     },

//                     lerp: function (min, max, amount) {
//                       return min + amount * (max - min);
//                     },

//                     map: function (num, minA, maxA, minB, maxB) {
//                       return (
//                         ((num - minA) / (maxA - minA)) * (maxB - minB) + minB
//                       );
//                     },
//                   });

//                   context[HAS_SKETCH] = true;
//                 }
//               },

//               create: function (options) {
//                 options = extend(options || {}, defaults);

//                 if (options.globals) Sketch.install(self);

//                 element = options.element =
//                   options.element ||
//                   doc.createElement(options.type === DOM ? "div" : "canvas");

//                 context = options.context =
//                   options.context ||
//                   (function () {
//                     switch (options.type) {
//                       case CANVAS:
//                         return element.getContext("2d", options);

//                       case WEBGL:
//                         return (
//                           element.getContext("webgl", options) ||
//                           element.getContext("experimental-webgl", options)
//                         );

//                       case DOM:
//                         return (element.canvas = element);
//                     }
//                   })();

//                 (options.container || doc.body).appendChild(element);

//                 return Sketch.augment(context, options);
//               },

//               augment: function (context, options) {
//                 options = extend(options || {}, defaults);

//                 options.element = context.canvas || context;
//                 options.element.className += " sketch";

//                 extend(context, options, true);

//                 return constructor(context);
//               },
//             };

//           /*
//       ----------------------------------------------------------------------
    
//         Shims
    
//       ----------------------------------------------------------------------
//       */

//           var vendors = ["ms", "moz", "webkit", "o"];
//           var scope = self;
//           var then = 0;

//           var a = "AnimationFrame";
//           var b = "request" + a;
//           var c = "cancel" + a;

//           var rAF = scope[b];
//           var cAF = scope[c];

//           for (var i = 0; i < vendors.length && !rAF; i++) {
//             rAF = scope[vendors[i] + "Request" + a];
//             cAF = scope[vendors[i] + "Cancel" + a];
//           }

//           scope[b] = rAF =
//             rAF ||
//             function (callback) {
//               var now = +new Date();
//               var dt = M.max(0, 16 - (now - then));
//               var id = setTimeout(function () {
//                 callback(now + dt);
//               }, dt);

//               then = now + dt;
//               return id;
//             };

//           scope[c] = cAF =
//             cAF ||
//             function (id) {
//               clearTimeout(id);
//             };

//           /*
//       ----------------------------------------------------------------------
    
//         Output
    
//       ----------------------------------------------------------------------
//       */

//           return Sketch;
//         });
//       },
//       {},
//     ],
//   },
//   {},
//   [1]
// );
