"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scmp";
exports.ids = ["vendor-chunks/scmp"];
exports.modules = {

/***/ "(rsc)/./node_modules/scmp/index.js":
/*!************************************!*\
  !*** ./node_modules/scmp/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\")\nconst scmpCompare = __webpack_require__(/*! ./lib/scmpCompare */ \"(rsc)/./node_modules/scmp/lib/scmpCompare.js\")\n\n/**\n * Does a constant-time Buffer comparison by not short-circuiting\n * on first sign of non-equivalency.\n *\n * @param {Buffer} a The first Buffer to be compared against the second\n * @param {Buffer} b The second Buffer to be compared against the first\n * @return {Boolean}\n */\nmodule.exports = function scmp (a, b) {\n  // check that both inputs are buffers\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new Error('Both scmp args must be Buffers')\n  }\n\n  // return early here if buffer lengths are not equal since timingSafeEqual\n  // will throw if buffer lengths are not equal\n  if (a.length !== b.length) {\n    return false\n  }\n\n  // use crypto.timingSafeEqual if available (since Node.js v6.6.0),\n  // otherwise use our own scmp-internal function.\n  if (crypto.timingSafeEqual) {\n    return crypto.timingSafeEqual(a, b)\n  }\n\n  return scmpCompare(a, b)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2NtcC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0Isb0JBQW9CLG1CQUFPLENBQUMsdUVBQW1COztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxQT0NcXGN0cm1hXFxub2RlX21vZHVsZXNcXHNjbXBcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuY29uc3Qgc2NtcENvbXBhcmUgPSByZXF1aXJlKCcuL2xpYi9zY21wQ29tcGFyZScpXG5cbi8qKlxuICogRG9lcyBhIGNvbnN0YW50LXRpbWUgQnVmZmVyIGNvbXBhcmlzb24gYnkgbm90IHNob3J0LWNpcmN1aXRpbmdcbiAqIG9uIGZpcnN0IHNpZ24gb2Ygbm9uLWVxdWl2YWxlbmN5LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyfSBhIFRoZSBmaXJzdCBCdWZmZXIgdG8gYmUgY29tcGFyZWQgYWdhaW5zdCB0aGUgc2Vjb25kXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYiBUaGUgc2Vjb25kIEJ1ZmZlciB0byBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBmaXJzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzY21wIChhLCBiKSB7XG4gIC8vIGNoZWNrIHRoYXQgYm90aCBpbnB1dHMgYXJlIGJ1ZmZlcnNcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQm90aCBzY21wIGFyZ3MgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIC8vIHJldHVybiBlYXJseSBoZXJlIGlmIGJ1ZmZlciBsZW5ndGhzIGFyZSBub3QgZXF1YWwgc2luY2UgdGltaW5nU2FmZUVxdWFsXG4gIC8vIHdpbGwgdGhyb3cgaWYgYnVmZmVyIGxlbmd0aHMgYXJlIG5vdCBlcXVhbFxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyB1c2UgY3J5cHRvLnRpbWluZ1NhZmVFcXVhbCBpZiBhdmFpbGFibGUgKHNpbmNlIE5vZGUuanMgdjYuNi4wKSxcbiAgLy8gb3RoZXJ3aXNlIHVzZSBvdXIgb3duIHNjbXAtaW50ZXJuYWwgZnVuY3Rpb24uXG4gIGlmIChjcnlwdG8udGltaW5nU2FmZUVxdWFsKSB7XG4gICAgcmV0dXJuIGNyeXB0by50aW1pbmdTYWZlRXF1YWwoYSwgYilcbiAgfVxuXG4gIHJldHVybiBzY21wQ29tcGFyZShhLCBiKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/scmp/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/scmp/lib/scmpCompare.js":
/*!**********************************************!*\
  !*** ./node_modules/scmp/lib/scmpCompare.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function scmpCompare (a, b) {\n  const len = a.length\n  let result = 0\n  for (let i = 0; i < len; ++i) {\n    result |= a[i] ^ b[i]\n  }\n  return result === 0\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2NtcC9saWIvc2NtcENvbXBhcmUuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcUE9DXFxjdHJtYVxcbm9kZV9tb2R1bGVzXFxzY21wXFxsaWJcXHNjbXBDb21wYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjbXBDb21wYXJlIChhLCBiKSB7XG4gIGNvbnN0IGxlbiA9IGEubGVuZ3RoXG4gIGxldCByZXN1bHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICByZXN1bHQgfD0gYVtpXSBeIGJbaV1cbiAgfVxuICByZXR1cm4gcmVzdWx0ID09PSAwXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/scmp/lib/scmpCompare.js\n");

/***/ })

};
;