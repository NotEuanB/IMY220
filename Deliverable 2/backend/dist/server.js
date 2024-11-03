"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
var _require = require('mongodb'),
  MongoClient = _require.MongoClient;
var path = require('path');
var fileUpload = require('express-fileupload');
var url = "mongodb+srv://u21439631:aExeTfai05o4TaHm@imy220.jxnkm.mongodb.net/";
var client = new MongoClient(url);

// Create app
var app = express();
app.use(express.json());
app.use(fileUpload());

// Serve static files from the React app
app.use(express["static"]('./frontend/public'));
function startServer() {
  return _startServer.apply(this, arguments);
}
function _startServer() {
  _startServer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    var db, SongCollection, PlaylistCollection, UserCollection, generateSongID, PORT;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          generateSongID = function _generateSongID(title) {
            return title.split(' ').map(function (word) {
              return word[0].toLowerCase();
            }).join('');
          };
          _context23.next = 3;
          return client.connect();
        case 3:
          console.info("Connected to MongoDB");
          db = client.db('Project');
          SongCollection = db.collection('Songs');
          PlaylistCollection = db.collection('Playlists');
          UserCollection = db.collection('Users'); // Get all of the songs in the SONG document
          app.get('/api/songs', /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
              var songs;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return SongCollection.find().sort({
                      dateAdded: -1
                    }).toArray();
                  case 3:
                    songs = _context.sent;
                    res.json(songs);
                    _context.next = 10;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    res.status(500).send(_context.t0);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 7]]);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());

          // Get a specific user with the given ID
          app.get('/api/users/:id', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
              var id, user;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    id = req.params.id;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 4:
                    user = _context2.sent;
                    if (user) {
                      _context2.next = 7;
                      break;
                    }
                    return _context2.abrupt("return", res.status(404).json({
                      error: 'User not found'
                    }));
                  case 7:
                    res.status(200).json(user);
                    _context2.next = 13;
                    break;
                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](1);
                    res.status(500).json({
                      error: _context2.t0.message
                    });
                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[1, 10]]);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());

          // This gets the playlists of a specific user
          app.get('/api/playlists/:id', /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
              var id, user, playlistIDs, playlists;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    id = req.params.id;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 4:
                    user = _context3.sent;
                    if (user) {
                      _context3.next = 7;
                      break;
                    }
                    return _context3.abrupt("return", res.status(404).send("User not found"));
                  case 7:
                    // Get the user's playlist IDs
                    playlistIDs = user.playlistIDs || []; // Find the playlists by their IDs
                    _context3.next = 10;
                    return PlaylistCollection.find({
                      playlistID: {
                        $in: playlistIDs
                      }
                    }).toArray();
                  case 10:
                    playlists = _context3.sent;
                    res.json(playlists);
                    _context3.next = 17;
                    break;
                  case 14:
                    _context3.prev = 14;
                    _context3.t0 = _context3["catch"](1);
                    res.status(500).send(_context3.t0);
                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[1, 14]]);
            }));
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          }());

          // This gets a specific playlist on the playlist ID
          app.get('/api/playlist/:id', /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
              var id, playlist;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    id = req.params.id;
                    _context4.prev = 1;
                    _context4.next = 4;
                    return PlaylistCollection.findOne({
                      playlistID: id
                    });
                  case 4:
                    playlist = _context4.sent;
                    if (playlist) {
                      _context4.next = 7;
                      break;
                    }
                    return _context4.abrupt("return", res.status(404).send("playlist not found"));
                  case 7:
                    res.json(playlist);
                    _context4.next = 13;
                    break;
                  case 10:
                    _context4.prev = 10;
                    _context4.t0 = _context4["catch"](1);
                    res.status(500).send(_context4.t0);
                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[1, 10]]);
            }));
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          }());

          // This finds the songs from the specific playlist with the user ID
          app.get('/api/playlist/:id/songs', /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
              var id, playlist, songIDs, songs;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    id = req.params.id;
                    _context5.prev = 1;
                    _context5.next = 4;
                    return PlaylistCollection.findOne({
                      playlistID: id
                    });
                  case 4:
                    playlist = _context5.sent;
                    if (playlist) {
                      _context5.next = 7;
                      break;
                    }
                    return _context5.abrupt("return", res.status(404).send("Playlist not found"));
                  case 7:
                    // Assuming the playlist document contains an array of song IDs
                    songIDs = playlist.songIDs || []; // Fetch the songs by their IDs
                    _context5.next = 10;
                    return SongCollection.find({
                      songID: {
                        $in: songIDs
                      }
                    }).toArray();
                  case 10:
                    songs = _context5.sent;
                    res.json(songs);
                    _context5.next = 17;
                    break;
                  case 14:
                    _context5.prev = 14;
                    _context5.t0 = _context5["catch"](1);
                    res.status(500).send(_context5.t0);
                  case 17:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[1, 14]]);
            }));
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          }());

          // Register
          app.post('/api/register', /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
              var _req$body, username, password, email, count, newId, newUser;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email;
                    _context6.prev = 1;
                    _context6.next = 4;
                    return UserCollection.countDocuments();
                  case 4:
                    count = _context6.sent;
                    newId = "user0".concat(count + 1);
                    newUser = {
                      _id: newId.toString(),
                      description: '',
                      imageUrl: '/assets/images/placeholder.png',
                      username: username,
                      email: email,
                      password: password,
                      playlistIDs: [],
                      followerIDs: [],
                      followingIDs: []
                    };
                    _context6.next = 9;
                    return UserCollection.insertOne(newUser);
                  case 9:
                    res.status(201).send("User registered successfully");
                    _context6.next = 15;
                    break;
                  case 12:
                    _context6.prev = 12;
                    _context6.t0 = _context6["catch"](1);
                    res.status(500).send(_context6.t0);
                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[1, 12]]);
            }));
            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          }());

          // Login
          app.post('/api/login', /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
              var _req$body2, email, password, user, isPasswordValid;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                    _context7.prev = 1;
                    _context7.next = 4;
                    return UserCollection.findOne({
                      email: email
                    });
                  case 4:
                    user = _context7.sent;
                    if (user) {
                      _context7.next = 7;
                      break;
                    }
                    return _context7.abrupt("return", res.status(401).send("Invalid email or password"));
                  case 7:
                    isPasswordValid = password === user.password;
                    if (isPasswordValid) {
                      _context7.next = 10;
                      break;
                    }
                    return _context7.abrupt("return", res.status(401).send("Invalid email or password"));
                  case 10:
                    res.status(200).json({
                      userId: user._id.toString()
                    });
                    _context7.next = 16;
                    break;
                  case 13:
                    _context7.prev = 13;
                    _context7.t0 = _context7["catch"](1);
                    res.status(500).send(_context7.t0);
                  case 16:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, null, [[1, 13]]);
            }));
            return function (_x13, _x14) {
              return _ref7.apply(this, arguments);
            };
          }());

          // Logout
          app.post('/api/logout', function (req, res) {
            res.status(200).send("Logged out successfully");
          });

          // Delete logged in user's account
          app["delete"]('/api/user/:id', /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
              var id, loggedInUserId, result;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    id = req.params.id;
                    loggedInUserId = req.headers['user-id']; // Assuming user ID is sent in headers
                    if (!(id !== loggedInUserId)) {
                      _context8.next = 4;
                      break;
                    }
                    return _context8.abrupt("return", res.status(403).json({
                      message: "You can only delete your own account"
                    }));
                  case 4:
                    _context8.prev = 4;
                    _context8.next = 7;
                    return UserCollection.deleteOne({
                      _id: id
                    });
                  case 7:
                    result = _context8.sent;
                    if (!(result.deletedCount === 0)) {
                      _context8.next = 10;
                      break;
                    }
                    return _context8.abrupt("return", res.status(404).json({
                      message: "User not found"
                    }));
                  case 10:
                    res.status(200).json({
                      message: "Account deleted successfully"
                    });
                    _context8.next = 16;
                    break;
                  case 13:
                    _context8.prev = 13;
                    _context8.t0 = _context8["catch"](4);
                    res.status(500).json({
                      error: _context8.t0.message
                    });
                  case 16:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, null, [[4, 13]]);
            }));
            return function (_x15, _x16) {
              return _ref8.apply(this, arguments);
            };
          }());

          // Get the playlists of all the users that the logged in user is following
          app.get('/api/user/:userId/following/playlists', /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
              var userId, user, friends, playlists;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    userId = req.params.userId;
                    _context9.next = 4;
                    return UserCollection.findOne({
                      _id: userId
                    });
                  case 4:
                    user = _context9.sent;
                    if (user) {
                      _context9.next = 7;
                      break;
                    }
                    return _context9.abrupt("return", res.status(404).send('User not found'));
                  case 7:
                    friends = user.followingIDs || [];
                    _context9.next = 10;
                    return PlaylistCollection.find({
                      userIDs: {
                        $in: friends
                      }
                    }).toArray();
                  case 10:
                    playlists = _context9.sent;
                    res.json(playlists);
                    _context9.next = 18;
                    break;
                  case 14:
                    _context9.prev = 14;
                    _context9.t0 = _context9["catch"](0);
                    console.error('Error fetching playlists:', _context9.t0);
                    res.status(500).send(_context9.t0);
                  case 18:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, null, [[0, 14]]);
            }));
            return function (_x17, _x18) {
              return _ref9.apply(this, arguments);
            };
          }());

          // Get the followers of the logged in user
          app.get('/api/users/:id/followers', /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
              var id, user, followers;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    id = req.params.id;
                    _context10.prev = 1;
                    _context10.next = 4;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 4:
                    user = _context10.sent;
                    if (user) {
                      _context10.next = 7;
                      break;
                    }
                    return _context10.abrupt("return", res.status(404).send("User not found"));
                  case 7:
                    _context10.next = 9;
                    return UserCollection.find({
                      _id: {
                        $in: user.followerIDs
                      }
                    }).toArray();
                  case 9:
                    followers = _context10.sent;
                    res.json(followers);
                    _context10.next = 16;
                    break;
                  case 13:
                    _context10.prev = 13;
                    _context10.t0 = _context10["catch"](1);
                    res.status(500).send(_context10.t0);
                  case 16:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, null, [[1, 13]]);
            }));
            return function (_x19, _x20) {
              return _ref10.apply(this, arguments);
            };
          }());

          // Get the following of the logged in user
          app.get('/api/users/:id/following', /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
              var id, user, following;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    id = req.params.id;
                    _context11.prev = 1;
                    _context11.next = 4;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 4:
                    user = _context11.sent;
                    if (user) {
                      _context11.next = 7;
                      break;
                    }
                    return _context11.abrupt("return", res.status(404).send("User not found"));
                  case 7:
                    _context11.next = 9;
                    return UserCollection.find({
                      _id: {
                        $in: user.followingIDs
                      }
                    }).toArray();
                  case 9:
                    following = _context11.sent;
                    res.json(following);
                    _context11.next = 16;
                    break;
                  case 13:
                    _context11.prev = 13;
                    _context11.t0 = _context11["catch"](1);
                    res.status(500).send(_context11.t0);
                  case 16:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[1, 13]]);
            }));
            return function (_x21, _x22) {
              return _ref11.apply(this, arguments);
            };
          }());

          // Updates the username / description of the logged in user
          app.put('/api/users/:id', /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
              var id, _req$body3, username, description, result;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    id = req.params.id;
                    _req$body3 = req.body, username = _req$body3.username, description = _req$body3.description;
                    _context12.prev = 2;
                    _context12.next = 5;
                    return UserCollection.updateOne({
                      _id: id
                    }, {
                      $set: {
                        username: username,
                        description: description
                      }
                    });
                  case 5:
                    result = _context12.sent;
                    if (!(result.matchedCount === 0)) {
                      _context12.next = 8;
                      break;
                    }
                    return _context12.abrupt("return", res.status(404).json({
                      message: "User not found"
                    }));
                  case 8:
                    res.status(200).json({
                      message: "Profile updated successfully"
                    });
                    _context12.next = 14;
                    break;
                  case 11:
                    _context12.prev = 11;
                    _context12.t0 = _context12["catch"](2);
                    res.status(500).json({
                      error: _context12.t0.message
                    });
                  case 14:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, null, [[2, 11]]);
            }));
            return function (_x23, _x24) {
              return _ref12.apply(this, arguments);
            };
          }());

          // Updates the playlist name / description of the logged in user
          app.put('/api/playlist/:id', /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
              var id, _req$body4, name, description, loggedInUserId, playlist, result;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    id = req.params.id;
                    _req$body4 = req.body, name = _req$body4.name, description = _req$body4.description;
                    loggedInUserId = req.headers['user-id']; // Assuming user ID is sent in cookies or headers
                    _context13.prev = 3;
                    _context13.next = 6;
                    return PlaylistCollection.findOne({
                      playlistID: id
                    });
                  case 6:
                    playlist = _context13.sent;
                    if (playlist) {
                      _context13.next = 9;
                      break;
                    }
                    return _context13.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 9:
                    if (playlist.userID.includes(loggedInUserId)) {
                      _context13.next = 11;
                      break;
                    }
                    return _context13.abrupt("return", res.status(403).json({
                      message: "You are not the owner of this playlist"
                    }));
                  case 11:
                    _context13.next = 13;
                    return PlaylistCollection.updateOne({
                      playlistID: id
                    }, {
                      $set: {
                        name: name,
                        description: description
                      }
                    });
                  case 13:
                    result = _context13.sent;
                    if (!(result.matchedCount === 0)) {
                      _context13.next = 16;
                      break;
                    }
                    return _context13.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 16:
                    res.status(200).json({
                      message: "Playlist updated successfully"
                    });
                    _context13.next = 22;
                    break;
                  case 19:
                    _context13.prev = 19;
                    _context13.t0 = _context13["catch"](3);
                    res.status(500).json({
                      error: _context13.t0.message
                    });
                  case 22:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, null, [[3, 19]]);
            }));
            return function (_x25, _x26) {
              return _ref13.apply(this, arguments);
            };
          }());

          // Create playlist for logged in user
          app.put('/api/:id/createplaylist', /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
              var id, _req$body5, name, description, user, count, newId, newPlaylist;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    id = req.params.id;
                    _req$body5 = req.body, name = _req$body5.name, description = _req$body5.description;
                    _context14.prev = 2;
                    _context14.next = 5;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 5:
                    user = _context14.sent;
                    if (user) {
                      _context14.next = 8;
                      break;
                    }
                    return _context14.abrupt("return", res.status(404).json({
                      message: "User not found"
                    }));
                  case 8:
                    _context14.next = 10;
                    return PlaylistCollection.countDocuments();
                  case 10:
                    count = _context14.sent;
                    newId = "PL0".concat(count + 1);
                    newPlaylist = {
                      playlistID: newId.toString(),
                      name: name,
                      description: description,
                      imageUrl: '/assets/images/placeholder.png',
                      comments: [],
                      userIDs: [id],
                      songIDs: []
                    };
                    _context14.next = 15;
                    return PlaylistCollection.insertOne(newPlaylist);
                  case 15:
                    _context14.next = 17;
                    return UserCollection.updateOne({
                      _id: id
                    }, {
                      $push: {
                        playlistIDs: newId.toString()
                      }
                    });
                  case 17:
                    res.status(201).send("Playlist created successfully");
                    _context14.next = 23;
                    break;
                  case 20:
                    _context14.prev = 20;
                    _context14.t0 = _context14["catch"](2);
                    res.status(500).json({
                      error: _context14.t0.message
                    });
                  case 23:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, null, [[2, 20]]);
            }));
            return function (_x27, _x28) {
              return _ref14.apply(this, arguments);
            };
          }());

          // Remove playlist from logged-in user's library
          app["delete"]('/api/playlists/:playlistId/remove', /*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
              var playlistId, loggedInUserId, playlist;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    playlistId = req.params.playlistId;
                    loggedInUserId = req.headers['user-id'];
                    _context15.prev = 2;
                    _context15.next = 5;
                    return PlaylistCollection.findOne({
                      playlistID: playlistId
                    });
                  case 5:
                    playlist = _context15.sent;
                    if (playlist) {
                      _context15.next = 8;
                      break;
                    }
                    return _context15.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 8:
                    if (playlist.userIDs.includes(loggedInUserId)) {
                      _context15.next = 10;
                      break;
                    }
                    return _context15.abrupt("return", res.status(403).json({
                      message: "You do not have this playlist in your library"
                    }));
                  case 10:
                    _context15.next = 12;
                    return UserCollection.updateOne({
                      _id: loggedInUserId
                    }, {
                      $pull: {
                        playlistIDs: playlistId
                      }
                    });
                  case 12:
                    res.status(200).json({
                      message: "Playlist removed from user library successfully"
                    });
                    _context15.next = 18;
                    break;
                  case 15:
                    _context15.prev = 15;
                    _context15.t0 = _context15["catch"](2);
                    res.status(500).json({
                      error: _context15.t0.message
                    });
                  case 18:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, null, [[2, 15]]);
            }));
            return function (_x29, _x30) {
              return _ref15.apply(this, arguments);
            };
          }());

          // Add song to playlist
          app.post('/api/playlists/:playlistId/add', /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
              var playlistId, trackId, playlist;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    playlistId = req.params.playlistId;
                    trackId = req.body.trackId;
                    _context16.prev = 2;
                    _context16.next = 5;
                    return PlaylistCollection.findOne({
                      playlistID: playlistId
                    });
                  case 5:
                    playlist = _context16.sent;
                    if (playlist) {
                      _context16.next = 8;
                      break;
                    }
                    return _context16.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 8:
                    _context16.next = 10;
                    return PlaylistCollection.updateOne({
                      playlistID: playlistId
                    }, {
                      $push: {
                        songIDs: trackId
                      }
                    });
                  case 10:
                    _context16.next = 12;
                    return SongCollection.updateOne({
                      songID: trackId
                    }, {
                      $addToSet: {
                        playlistIDs: playlistId
                      }
                    });
                  case 12:
                    res.status(200).json({
                      message: "Song added to playlist successfully"
                    });
                    _context16.next = 18;
                    break;
                  case 15:
                    _context16.prev = 15;
                    _context16.t0 = _context16["catch"](2);
                    res.status(500).json({
                      error: _context16.t0.message
                    });
                  case 18:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, null, [[2, 15]]);
            }));
            return function (_x31, _x32) {
              return _ref16.apply(this, arguments);
            };
          }());

          // Add song to website
          app.put('/api/createsong', /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
              var _req$body6, title, link, songID, newSong;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _req$body6 = req.body, title = _req$body6.title, link = _req$body6.link;
                    if (!(!title || !link)) {
                      _context17.next = 3;
                      break;
                    }
                    return _context17.abrupt("return", res.status(400).json({
                      message: 'Title and link are required'
                    }));
                  case 3:
                    _context17.prev = 3;
                    songID = generateSongID(title);
                    newSong = {
                      songID: songID,
                      title: title,
                      link: link,
                      playlistIDs: [],
                      userIDs: [],
                      dateAdded: new Date()
                    };
                    _context17.next = 8;
                    return SongCollection.insertOne(newSong);
                  case 8:
                    res.status(201).json({
                      message: 'Song created successfully',
                      song: newSong
                    });
                    _context17.next = 15;
                    break;
                  case 11:
                    _context17.prev = 11;
                    _context17.t0 = _context17["catch"](3);
                    console.error('Error creating song:', _context17.t0);
                    res.status(500).json({
                      message: 'Internal server error'
                    });
                  case 15:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, null, [[3, 11]]);
            }));
            return function (_x33, _x34) {
              return _ref17.apply(this, arguments);
            };
          }());

          // Function to generate a songID from the title

          // Delete song form document
          app["delete"]('/api/songs/:songID', /*#__PURE__*/function () {
            var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
              var songID, result;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    songID = req.params.songID;
                    _context18.prev = 1;
                    _context18.next = 4;
                    return SongCollection.deleteOne({
                      songID: songID
                    });
                  case 4:
                    result = _context18.sent;
                    if (!(result.deletedCount === 0)) {
                      _context18.next = 7;
                      break;
                    }
                    return _context18.abrupt("return", res.status(404).json({
                      message: 'Song not found'
                    }));
                  case 7:
                    res.status(200).json({
                      message: 'Song deleted successfully'
                    });
                    _context18.next = 14;
                    break;
                  case 10:
                    _context18.prev = 10;
                    _context18.t0 = _context18["catch"](1);
                    console.error('Error deleting song:', _context18.t0);
                    res.status(500).json({
                      message: 'Internal server error'
                    });
                  case 14:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, null, [[1, 10]]);
            }));
            return function (_x35, _x36) {
              return _ref18.apply(this, arguments);
            };
          }());

          // Search all
          app.get('/api/search', /*#__PURE__*/function () {
            var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
              var _req$query, term, type, results;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    _req$query = req.query, term = _req$query.term, type = _req$query.type;
                    _context19.prev = 1;
                    _context19.t0 = type;
                    _context19.next = _context19.t0 === 'playlists' ? 5 : _context19.t0 === 'songs' ? 9 : _context19.t0 === 'users' ? 13 : 17;
                    break;
                  case 5:
                    _context19.next = 7;
                    return PlaylistCollection.find({
                      name: {
                        $regex: term,
                        $options: 'i'
                      }
                    }).toArray();
                  case 7:
                    results = _context19.sent;
                    return _context19.abrupt("break", 18);
                  case 9:
                    _context19.next = 11;
                    return SongCollection.find({
                      title: {
                        $regex: term,
                        $options: 'i'
                      }
                    }).toArray();
                  case 11:
                    results = _context19.sent;
                    return _context19.abrupt("break", 18);
                  case 13:
                    _context19.next = 15;
                    return UserCollection.find({
                      username: {
                        $regex: term,
                        $options: 'i'
                      }
                    }).toArray();
                  case 15:
                    results = _context19.sent;
                    return _context19.abrupt("break", 18);
                  case 17:
                    return _context19.abrupt("return", res.status(400).json({
                      message: 'Invalid search type'
                    }));
                  case 18:
                    res.status(200).json(results);
                    _context19.next = 25;
                    break;
                  case 21:
                    _context19.prev = 21;
                    _context19.t1 = _context19["catch"](1);
                    console.error('Error searching:', _context19.t1);
                    res.status(500).json({
                      message: 'Internal server error'
                    });
                  case 25:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, null, [[1, 21]]);
            }));
            return function (_x37, _x38) {
              return _ref19.apply(this, arguments);
            };
          }());

          // Uploading and changing profile picture
          app.post('/api/uploadProfilePicture', /*#__PURE__*/function () {
            var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
              var userId, profilePicture, filePath;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!(!req.files || Object.keys(req.files).length === 0)) {
                      _context21.next = 3;
                      break;
                    }
                    console.error('No files were uploaded.');
                    return _context21.abrupt("return", res.status(400).json({
                      error: 'No files were uploaded.'
                    }));
                  case 3:
                    userId = req.body.userId;
                    profilePicture = req.files.profilePicture;
                    filePath = path.join(__dirname, '../../frontend/public/assets/images', "".concat(userId, "-").concat(Date.now()).concat(path.extname(profilePicture.name)));
                    console.log('File Path:', filePath);
                    try {
                      profilePicture.mv(filePath, /*#__PURE__*/function () {
                        var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(err) {
                          var imageUrl;
                          return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                            while (1) switch (_context20.prev = _context20.next) {
                              case 0:
                                if (!err) {
                                  _context20.next = 3;
                                  break;
                                }
                                console.error('Error moving file:', err);
                                return _context20.abrupt("return", res.status(500).json({
                                  error: err.message
                                }));
                              case 3:
                                imageUrl = "/assets/images/".concat(path.basename(filePath));
                                console.log('Image URL:', imageUrl);
                                _context20.next = 7;
                                return UserCollection.updateOne({
                                  _id: userId
                                }, {
                                  $set: {
                                    imageUrl: imageUrl
                                  }
                                });
                              case 7:
                                res.status(200).json({
                                  imageUrl: imageUrl
                                });
                              case 8:
                              case "end":
                                return _context20.stop();
                            }
                          }, _callee20);
                        }));
                        return function (_x41) {
                          return _ref21.apply(this, arguments);
                        };
                      }());
                    } catch (err) {
                      console.error('Error uploading profile picture:', err);
                      res.status(500).json({
                        error: err.message
                      });
                    }
                  case 8:
                  case "end":
                    return _context21.stop();
                }
              }, _callee21);
            }));
            return function (_x39, _x40) {
              return _ref20.apply(this, arguments);
            };
          }());

          // Check if the logged-in user is following the profile they are viewing
          app.get('/api/users/:id/isFollowing', /*#__PURE__*/function () {
            var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
              var id, loggedInUserId, user;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    id = req.params.id;
                    loggedInUserId = req.headers['user-id'];
                    _context22.prev = 2;
                    _context22.next = 5;
                    return UserCollection.findOne({
                      _id: loggedInUserId,
                      followingIDs: id
                    });
                  case 5:
                    user = _context22.sent;
                    if (!user) {
                      _context22.next = 10;
                      break;
                    }
                    return _context22.abrupt("return", res.status(200).json({
                      isFollowing: true
                    }));
                  case 10:
                    return _context22.abrupt("return", res.status(200).json({
                      isFollowing: false
                    }));
                  case 11:
                    _context22.next = 17;
                    break;
                  case 13:
                    _context22.prev = 13;
                    _context22.t0 = _context22["catch"](2);
                    console.error('Error checking following status:', _context22.t0);
                    res.status(500).json({
                      error: _context22.t0.message
                    });
                  case 17:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, null, [[2, 13]]);
            }));
            return function (_x42, _x43) {
              return _ref22.apply(this, arguments);
            };
          }());

          // Catch-all route to serve index.html for all pages
          app.get('*', function (req, res) {
            res.sendFile('index.html', {
              root: './frontend/public'
            });
          });

          // Port to listen to
          PORT = process.env.PORT || 3000;
          app.listen(PORT, function () {
            console.log("Server is running on port ".concat(PORT));
          });
        case 33:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return _startServer.apply(this, arguments);
}
;
startServer();