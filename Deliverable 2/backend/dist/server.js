"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
var _require = require('mongodb'),
  MongoClient = _require.MongoClient;
var url = "mongodb+srv://u21439631:aExeTfai05o4TaHm@imy220.jxnkm.mongodb.net/";
var client = new MongoClient(url);

// Create app
var app = express();
app.use(express.json());

// Serve static files from the React app
app.use(express["static"]('./frontend/public'));
function startServer() {
  return _startServer.apply(this, arguments);
}
function _startServer() {
  _startServer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var db, SongCollection, PlaylistCollection, UserCollection, PORT;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return client.connect();
        case 2:
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

          // This gets a spevific playlist on the playlist ID
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
                      hashedPassword: hashedPassword,
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
            // Send a response indicating successful logout
            res.status(200).send("Logged out successfully");
          });

          // Get the playlists of all the users that the logged in user is following
          app.get('/api/user/:userId/following/playlists', /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
              var userId, user, friends, playlists;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    userId = req.params.userId;
                    _context8.next = 4;
                    return UserCollection.findOne({
                      _id: userId
                    });
                  case 4:
                    user = _context8.sent;
                    if (user) {
                      _context8.next = 7;
                      break;
                    }
                    return _context8.abrupt("return", res.status(404).send('User not found'));
                  case 7:
                    friends = user.followingIDs || [];
                    _context8.next = 10;
                    return PlaylistCollection.find({
                      userID: {
                        $in: friends
                      }
                    }).toArray();
                  case 10:
                    playlists = _context8.sent;
                    res.json(playlists);
                    _context8.next = 18;
                    break;
                  case 14:
                    _context8.prev = 14;
                    _context8.t0 = _context8["catch"](0);
                    console.error('Error fetching playlists:', _context8.t0);
                    res.status(500).send(_context8.t0);
                  case 18:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, null, [[0, 14]]);
            }));
            return function (_x15, _x16) {
              return _ref8.apply(this, arguments);
            };
          }());

          // Get the followers of the logged in user
          app.get('/api/users/:id/followers', /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
              var id, user, followers;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    id = req.params.id;
                    _context9.prev = 1;
                    _context9.next = 4;
                    return UserCollection.findOne({
                      _id: id
                    });
                  case 4:
                    user = _context9.sent;
                    if (user) {
                      _context9.next = 7;
                      break;
                    }
                    return _context9.abrupt("return", res.status(404).send("User not found"));
                  case 7:
                    _context9.next = 9;
                    return UserCollection.find({
                      _id: {
                        $in: user.followerIDs
                      }
                    }).toArray();
                  case 9:
                    followers = _context9.sent;
                    res.json(followers);
                    _context9.next = 16;
                    break;
                  case 13:
                    _context9.prev = 13;
                    _context9.t0 = _context9["catch"](1);
                    res.status(500).send(_context9.t0);
                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, null, [[1, 13]]);
            }));
            return function (_x17, _x18) {
              return _ref9.apply(this, arguments);
            };
          }());

          // Get the following of the logged in user
          app.get('/api/users/:id/following', /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
              var id, user, following;
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
                        $in: user.followingIDs
                      }
                    }).toArray();
                  case 9:
                    following = _context10.sent;
                    res.json(following);
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

          // Updates the username / description of the logged in user
          app.put('/api/users/:id', /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
              var id, _req$body3, username, description, result;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    id = req.params.id;
                    _req$body3 = req.body, username = _req$body3.username, description = _req$body3.description;
                    _context11.prev = 2;
                    _context11.next = 5;
                    return UserCollection.updateOne({
                      _id: id
                    }, {
                      $set: {
                        username: username,
                        description: description
                      }
                    });
                  case 5:
                    result = _context11.sent;
                    if (!(result.matchedCount === 0)) {
                      _context11.next = 8;
                      break;
                    }
                    return _context11.abrupt("return", res.status(404).json({
                      message: "User not found"
                    }));
                  case 8:
                    res.status(200).json({
                      message: "Profile updated successfully"
                    });
                    _context11.next = 14;
                    break;
                  case 11:
                    _context11.prev = 11;
                    _context11.t0 = _context11["catch"](2);
                    res.status(500).json({
                      error: _context11.t0.message
                    });
                  case 14:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[2, 11]]);
            }));
            return function (_x21, _x22) {
              return _ref11.apply(this, arguments);
            };
          }());

          // Updates the playlist name / description of the logged in user
          app.put('/api/playlist/:id', /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
              var id, _req$body4, name, description, loggedInUserId, playlist, result;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    id = req.params.id;
                    _req$body4 = req.body, name = _req$body4.name, description = _req$body4.description;
                    loggedInUserId = req.headers['user-id']; // Assuming user ID is sent in cookies or headers
                    console.log(loggedInUserId);
                    _context12.prev = 4;
                    _context12.next = 7;
                    return PlaylistCollection.findOne({
                      playlistID: id
                    });
                  case 7:
                    playlist = _context12.sent;
                    if (playlist) {
                      _context12.next = 10;
                      break;
                    }
                    return _context12.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 10:
                    if (playlist.userID.includes(loggedInUserId)) {
                      _context12.next = 12;
                      break;
                    }
                    return _context12.abrupt("return", res.status(403).json({
                      message: "You are not the owner of this playlist"
                    }));
                  case 12:
                    _context12.next = 14;
                    return PlaylistCollection.updateOne({
                      playlistID: id
                    }, {
                      $set: {
                        name: name,
                        description: description
                      }
                    });
                  case 14:
                    result = _context12.sent;
                    if (!(result.matchedCount === 0)) {
                      _context12.next = 17;
                      break;
                    }
                    return _context12.abrupt("return", res.status(404).json({
                      message: "Playlist not found"
                    }));
                  case 17:
                    res.status(200).json({
                      message: "Playlist updated successfully"
                    });
                    _context12.next = 23;
                    break;
                  case 20:
                    _context12.prev = 20;
                    _context12.t0 = _context12["catch"](4);
                    res.status(500).json({
                      error: _context12.t0.message
                    });
                  case 23:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, null, [[4, 20]]);
            }));
            return function (_x23, _x24) {
              return _ref12.apply(this, arguments);
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
        case 23:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _startServer.apply(this, arguments);
}
;
startServer();