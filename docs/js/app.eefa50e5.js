(function(e) {
  function t(t) {
    for (
      var a, i, o = t[0], c = t[1], l = t[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (i = o[d]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]),
        (r[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    u && u(t);
    while (f.length) f.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], a = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== r[c] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { app: 0 },
    s = [];
  function i(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          i.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  4678: function(e, t, n) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea"
    };
    function r(e) {
      var t = s(e);
      return n(t);
    }
    function s(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (r.keys = function() {
      return Object.keys(a);
    }),
      (r.resolve = s),
      (e.exports = r),
      (r.id = "4678");
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("99af"),
      n("d3b7"),
      n("ac1f"),
      n("5319"),
      n("e260"),
      n("e6cf"),
      n("cca6"),
      n("a79d");
    var a = n("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-app",
          [
            n(
              "v-app-bar",
              { attrs: { app: "", color: "primary", dark: "" } },
              [
                n(
                  "div",
                  {
                    staticClass: "d-flex align-center",
                    on: {
                      click: function(t) {
                        return e.$router.push("/");
                      }
                    }
                  },
                  [
                    n("v-icon", [e._v("mdi-heart-outline")]),
                    n("span", { staticClass: "mr-2 headline" }, [e._v("طبيبي")])
                  ],
                  1
                ),
                n("v-spacer"),
                e.isAdmin
                  ? [
                      n(
                        "v-btn",
                        {
                          staticClass: "ml-1",
                          attrs: { color: "success" },
                          on: {
                            click: function(t) {
                              return e.$router.push({ name: "Topics" });
                            }
                          }
                        },
                        [
                          n("span", { staticClass: "ml-2" }, [
                            e._v("المواضيع")
                          ]),
                          n("v-icon", { attrs: { small: "" } }, [
                            e._v("mdi-grid")
                          ])
                        ],
                        1
                      )
                    ]
                  : e._e(),
                e.isAuthenticated
                  ? n(
                      "v-btn",
                      {
                        staticClass: "accent",
                        on: {
                          click: function(t) {
                            return e.$router.push({ name: "Consultations" });
                          }
                        }
                      },
                      [
                        n("span", { staticClass: "ml-2" }, [e._v("استشارات")]),
                        n("v-icon", { attrs: { small: "" } }, [
                          e._v("mdi-chat")
                        ])
                      ],
                      1
                    )
                  : e._e(),
                e.isAuthenticated
                  ? [
                      n(
                        "v-btn",
                        { staticClass: "accent mr-1", on: { click: e.logout } },
                        [n("span", [e._v("تسجيل الخروج")])]
                      )
                    ]
                  : [
                      n(
                        "v-btn",
                        {
                          staticClass: "mr-1",
                          attrs: { text: "" },
                          on: {
                            click: function(t) {
                              e.loginDialog = !0;
                            }
                          }
                        },
                        [n("span", [e._v("تسجيل دخول")])]
                      ),
                      n(
                        "v-btn",
                        {
                          staticClass: "warning mr-1",
                          on: {
                            click: function(t) {
                              e.registerDialog = !0;
                            }
                          }
                        },
                        [n("span", [e._v("تسجيل جديد")])]
                      )
                    ]
              ],
              2
            ),
            n("v-content", [n("router-view")], 1),
            n("login", {
              attrs: { dialog: e.loginDialog },
              on: {
                close: function(t) {
                  e.loginDialog = !1;
                }
              }
            }),
            n("register", {
              attrs: { dialog: e.registerDialog },
              on: {
                close: function(t) {
                  e.registerDialog = !1;
                }
              }
            }),
            n("vue-snotify"),
            n("vue-recaptcha", {
              attrs: { sitekey: "6LdMu_4UAAAAAM1DJI0sunz5V0DNxDWArNA3qo6L" }
            })
          ],
          1
        );
      },
      s = [],
      i = n("5530"),
      o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n(
            "div",
            [
              n(
                "v-dialog",
                {
                  attrs: { "max-width": "290" },
                  on: { "click:outside": e.close },
                  model: {
                    value: e.dialog,
                    callback: function(t) {
                      e.dialog = t;
                    },
                    expression: "dialog"
                  }
                },
                [
                  n(
                    "v-card",
                    [
                      n("v-card-title", { staticClass: "headline" }, [
                        e._v("تسجيل الدخول")
                      ]),
                      n(
                        "v-form",
                        {
                          ref: "form",
                          on: { submit: e.submit },
                          model: {
                            value: e.valid,
                            callback: function(t) {
                              e.valid = t;
                            },
                            expression: "valid"
                          }
                        },
                        [
                          n(
                            "v-card-text",
                            [
                              n("v-text-field", {
                                attrs: {
                                  counter: 10,
                                  rules: e.nameRules,
                                  loading: e.loading,
                                  label: "اسم المستخدم",
                                  required: ""
                                },
                                model: {
                                  value: e.name,
                                  callback: function(t) {
                                    e.name = t;
                                  },
                                  expression: "name"
                                }
                              }),
                              n("v-text-field", {
                                attrs: {
                                  rules: e.passwordRules,
                                  type: "password",
                                  label: "كلمة السر",
                                  loading: e.loading,
                                  required: ""
                                },
                                model: {
                                  value: e.password,
                                  callback: function(t) {
                                    e.password = t;
                                  },
                                  expression: "password"
                                }
                              })
                            ],
                            1
                          ),
                          n(
                            "v-card-actions",
                            [
                              n("v-spacer"),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: { color: "primary", text: "" },
                                  on: { click: e.close }
                                },
                                [e._v(" إغلاق ")]
                              ),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    disabled: !e.valid,
                                    color: "primary",
                                    loading: e.loading,
                                    type: "submit"
                                  }
                                },
                                [e._v(" تسجيل دخول ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]);
      },
      c = [],
      l = (n("b0c0"), n("96cf"), n("1da1")),
      u = n("d4ec"),
      d = n("bee2"),
      f = n("bc3a"),
      m = n.n(f),
      v = m.a,
      p = "http://mohamedkhair-001-site1.atempurl.com";
    v.defaults.baseURL = p;
    var h = localStorage.getItem("accessToken");
    (v.defaults.headers.Authorization = "Bearer TEST"),
      h && (v.defaults.headers.Authorization = "Bearer ".concat(h)),
      (v.defaults.headers["Content-Type"] = "application/json"),
      (v.defaults.headers["Accept"] = "application/json");
    var b = v,
      g = (function() {
        function e() {
          Object(u["a"])(this, e);
        }
        return (
          Object(d["a"])(e, null, [
            {
              key: "register",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t, n, a, r) {
                    var s;
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = {
                                username: t,
                                password: n,
                                email: a,
                                phoneNumber: r
                              }),
                              (e.next = 3),
                              b.post("/api/users/register", s)
                            );
                          case 3:
                            return e.abrupt("return", e.sent.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t, n, a, r) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "login",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t, n) {
                    var a;
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = { Username: t, Password: n }),
                              (e.next = 3),
                              b.post("/api/users/login", a)
                            );
                          case 3:
                            return e.abrupt("return", e.sent.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "user",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.setAuthorizationHeader(t),
                                (e.next = 3),
                                b.get("/api/users/user")
                              );
                            case 3:
                              return e.abrupt("return", e.sent.data);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "logout",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              localStorage.removeItem("accessToken"),
                              e.abrupt("return", !0)
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "setAuthorizationHeader",
              value: function(e) {
                b.defaults.headers.Authorization = "Bearer ".concat(e);
              }
            }
          ]),
          e
        );
      })(),
      j = {
        name: "Login",
        props: ["dialog"],
        data: function() {
          return {
            valid: !0,
            loading: !1,
            name: "",
            nameRules: [
              function(e) {
                return !!e || "اسم المستخدم ضروري";
              },
              function(e) {
                return (
                  (e && e.length <= 10) ||
                  "يجب على الأسم ألا يحتوي أكثر من 10 محارف على الأكثر"
                );
              }
            ],
            password: "",
            passwordRules: [
              function(e) {
                return !!e || "كلمة السر ضرورية";
              },
              function(e) {
                return (
                  (e && e.length >= 3) ||
                  "كلمة السر يجب أن يحتوى على 3 محارف او أكثر"
                );
              }
            ]
          };
        },
        methods: {
          validate: function() {
            this.$refs.form.validate();
          },
          reset: function() {
            this.$refs.form.reset();
          },
          resetValidation: function() {
            this.$refs.form.resetValidation();
          },
          submit: function(e) {
            var t = this;
            e.preventDefault(),
              this.$refs.form.validate(),
              this.valid &&
                ((this.loading = !0),
                g
                  .login(this.name, this.password)
                  .then(function(e) {
                    localStorage.setItem("accessToken", e.token),
                      g.setAuthorizationHeader(e.token),
                      t.$store.commit("user", e),
                      t.$refs.form.reset(),
                      t.$emit("close"),
                      t.$snotify.success("تم تسجيل الدخول بنجاح");
                  })
                  .catch(function(e) {
                    return t.$snotify.error(e.message);
                  })
                  .finally(function() {
                    return (t.loading = !1);
                  }));
          },
          close: function() {
            this.$refs.form.reset(), this.$emit("close");
          }
        }
      },
      y = j,
      k = n("2877"),
      w = Object(k["a"])(y, o, c, !1, null, "cb98c40c", null),
      x = w.exports,
      _ = n("2f62"),
      $ = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n(
            "div",
            [
              n(
                "v-dialog",
                {
                  attrs: { "max-width": "290" },
                  on: { "click:outside": e.close },
                  model: {
                    value: e.dialog,
                    callback: function(t) {
                      e.dialog = t;
                    },
                    expression: "dialog"
                  }
                },
                [
                  n(
                    "v-card",
                    [
                      n("v-card-title", { staticClass: "headline" }, [
                        e._v("تسجيل مستخدم جديد")
                      ]),
                      n(
                        "v-form",
                        {
                          ref: "form",
                          on: { submit: e.submit },
                          model: {
                            value: e.valid,
                            callback: function(t) {
                              e.valid = t;
                            },
                            expression: "valid"
                          }
                        },
                        [
                          n(
                            "v-card-text",
                            [
                              n("v-text-field", {
                                attrs: {
                                  counter: 10,
                                  rules: e.nameRules,
                                  label: "اسم المستخدم *",
                                  loading: e.loading,
                                  required: ""
                                },
                                model: {
                                  value: e.name,
                                  callback: function(t) {
                                    e.name = t;
                                  },
                                  expression: "name"
                                }
                              }),
                              n("v-text-field", {
                                attrs: {
                                  rules: e.emailRules,
                                  label: "الايميل",
                                  loading: e.loading,
                                  type: "email"
                                },
                                model: {
                                  value: e.email,
                                  callback: function(t) {
                                    e.email = t;
                                  },
                                  expression: "email"
                                }
                              }),
                              n("v-text-field", {
                                attrs: {
                                  label: "رقم الهاتف",
                                  loading: e.loading
                                },
                                model: {
                                  value: e.phoneNumber,
                                  callback: function(t) {
                                    e.phoneNumber = t;
                                  },
                                  expression: "phoneNumber"
                                }
                              }),
                              n("v-text-field", {
                                attrs: {
                                  rules: e.passwordRules,
                                  type: "password",
                                  label: "كلمة السر *",
                                  loading: e.loading,
                                  required: ""
                                },
                                model: {
                                  value: e.password,
                                  callback: function(t) {
                                    e.password = t;
                                  },
                                  expression: "password"
                                }
                              })
                            ],
                            1
                          ),
                          n(
                            "v-card-actions",
                            [
                              n("v-spacer"),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: { color: "primary", text: "" },
                                  on: { click: e.close }
                                },
                                [e._v(" إغلاق ")]
                              ),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    disabled: !e.valid,
                                    color: "primary",
                                    type: "submit",
                                    loading: e.loading
                                  }
                                },
                                [e._v(" انشاء ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]);
      },
      C = [],
      A = {
        name: "Register",
        props: ["dialog"],
        data: function() {
          return {
            valid: !0,
            birthDate: "",
            email: "",
            phoneNumber: "",
            loading: !1,
            name: "",
            nameRules: [
              function(e) {
                return !!e || "اسم المستخدم ضروري";
              },
              function(e) {
                return (
                  (e && e.length <= 10) ||
                  "يجب على الأسم ألا يحتوي أكثر من 10 محارف على الأكثر"
                );
              }
            ],
            password: "",
            passwordRules: [
              function(e) {
                return !!e || "كلمة السر ضرورية";
              },
              function(e) {
                return (
                  (e && e.length >= 3) ||
                  "كلمة السر يجب أن يحتوى على 3 محارف او أكثر"
                );
              }
            ],
            emailRules: [
              function(e) {
                return (
                  !e ||
                  /.+@.+\..+/.test(e) ||
                  "يجب أن يكون البريد الالكتروني صالح"
                );
              }
            ]
          };
        },
        methods: {
          validate: function() {
            this.$refs.form.validate();
          },
          reset: function() {
            this.$refs.form.reset();
          },
          resetValidation: function() {
            this.$refs.form.resetValidation();
          },
          submit: function(e) {
            var t = this;
            e.preventDefault(),
              this.$refs.form.validate(),
              this.valid &&
                ((this.loading = !0),
                g
                  .register(
                    this.username,
                    this.password,
                    this.email,
                    this.phoneNumber
                  )
                  .then(function(e) {
                    localStorage.setItem("accessToken", e.token),
                      g.setAuthorizationHeader(e.token),
                      t.$store.commit("user", e),
                      t.$emit("close"),
                      t.$snotify.success("تم التسجيل بنجاح");
                  })
                  .catch(function(e) {
                    return t.$snotify.error(e.message);
                  })
                  .finally(function() {
                    return (t.loading = !1);
                  }));
          },
          close: function() {
            this.$refs.form.reset(), this.$emit("close");
          }
        }
      },
      O = A,
      R = Object(k["a"])(O, $, C, !1, null, "36a1d1d8", null),
      T = R.exports,
      z = n("e096"),
      I = {
        name: "App",
        components: { Register: T, Login: x, VueRecaptcha: z["a"] },
        data: function() {
          return { loginDialog: !1, registerDialog: !1 };
        },
        computed: Object(i["a"])(
          {},
          Object(_["b"])(["isAuthenticated", "userName", "isAdmin"])
        ),
        methods: {
          logout: function() {
            var e = this;
            g.logout()
              .then(function() {
                localStorage.removeItem("accessToken"),
                  g.setAuthorizationHeader(""),
                  e.$store.commit("user", {}),
                  e.$router.push("/");
              })
              .catch(function(t) {
                e.$snotify.error(t.message);
              });
          }
        }
      },
      S = I,
      q = Object(k["a"])(S, r, s, !1, null, null, null),
      D = q.exports,
      E = n("8c4f"),
      L = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "home" }, [n("topics")], 1);
      },
      F = [],
      P = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-container",
          [
            n(
              "v-overlay",
              { attrs: { value: e.overlay, opacity: ".8" } },
              [
                n("v-progress-circular", {
                  attrs: { indeterminate: "", size: "64" }
                })
              ],
              1
            ),
            n(
              "v-row",
              e._l(e.items, function(t) {
                return n(
                  "v-col",
                  { key: t.id, attrs: { sm: "4", cols: "6", md: "3" } },
                  [
                    n(
                      "v-card",
                      { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                      [
                        n(
                          "v-img",
                          {
                            staticClass: "white--text align-end",
                            attrs: { height: "200px", src: e.$url(t.cover) }
                          },
                          [
                            n("v-card-title", {
                              domProps: { innerHTML: e._s(t.title) }
                            })
                          ],
                          1
                        ),
                        n("v-card-text", {
                          staticClass: "text--primary",
                          domProps: {
                            innerHTML: e._s(t.content.substring(0, 120))
                          }
                        }),
                        n(
                          "v-card-actions",
                          [
                            n(
                              "v-btn",
                              {
                                attrs: { color: "primary", text: "" },
                                on: {
                                  click: function(n) {
                                    return e.open(t);
                                  }
                                }
                              },
                              [e._v("مشاهدة كامل المقالة")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                );
              }),
              1
            ),
            n(
              "v-dialog",
              {
                attrs: { fullscreen: "" },
                model: {
                  value: e.dialog,
                  callback: function(t) {
                    e.dialog = t;
                  },
                  expression: "dialog"
                }
              },
              [
                n(
                  "v-card",
                  { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                  [
                    n(
                      "v-toolbar",
                      { attrs: { dark: "", color: "primary" } },
                      [
                        n(
                          "v-btn",
                          {
                            attrs: { icon: "", dark: "" },
                            on: {
                              click: function(t) {
                                e.dialog = !1;
                              }
                            }
                          },
                          [n("v-icon", [e._v("mdi-close")])],
                          1
                        ),
                        n("v-toolbar-title", [e._v(e._s(e.selectedItem.title))])
                      ],
                      1
                    ),
                    n(
                      "v-img",
                      {
                        staticClass: "white--text align-end",
                        attrs: {
                          height: "300px",
                          src: e.$url(e.selectedItem.cover)
                        }
                      },
                      [
                        n("v-card-title", {
                          domProps: { innerHTML: e._s(e.selectedItem.title) }
                        })
                      ],
                      1
                    ),
                    n("v-card-text", { staticClass: "p-2 text--primary" }, [
                      n("div", { staticClass: "my-2" }, [
                        n("div", [
                          e._v("عدد المشاهدات: " + e._s(e.selectedItem.views))
                        ]),
                        n("div", [
                          e._v(
                            " تاريخ الكتابة: " +
                              e._s(
                                e
                                  .$moment(e.selectedItem.createdAt)
                                  .format("LLL")
                              ) +
                              " "
                          )
                        ])
                      ]),
                      n("div", {
                        domProps: { innerHTML: e._s(e.selectedItem.content) }
                      })
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      N = [],
      H = (function() {
        function e() {
          Object(u["a"])(this, e);
        }
        return (
          Object(d["a"])(e, null, [
            {
              key: "fetch",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), b.get("/api/topics");
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "show",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), b.get("/api/topics/" + t);
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "create",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = {
                                headers: {
                                  "Content-Type": "multipart/form-data"
                                }
                              }),
                              (e.next = 3),
                              b.post("/api/topics", t, n)
                            );
                          case 3:
                            return e.abrupt("return", e.sent.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "update",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t, n) {
                    var a;
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = {
                                headers: {
                                  "Content-Type": "multipart/form-data"
                                }
                              }),
                              (e.next = 3),
                              b.put("/api/topics/" + t, n, a)
                            );
                          case 3:
                            return e.abrupt("return", e.sent.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "delete",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              b.get("/api/topics/" + t + "/delete")
                            );
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            }
          ]),
          e
        );
      })(),
      M = H,
      V = {
        name: "Topics",
        data: function() {
          return { overlay: !1, items: [], selectedItem: {}, dialog: !1 };
        },
        mounted: function() {
          this.fetch();
        },
        methods: {
          fetch: function() {
            var e = this;
            (this.overlay = !0),
              M.fetch()
                .then(function(t) {
                  return (e.items = t);
                })
                .catch(function(t) {
                  return e.$snotify.error(t.message);
                })
                .finally(function() {
                  return (e.overlay = !1);
                });
          },
          open: function(e) {
            var t = this;
            (this.selectedItem = e),
              (this.dialog = !0),
              M.show(e.id).then(function(e) {
                return (t.selectedItem = e);
              });
          },
          close: function() {
            (this.selectedItem = {}), (this.dialog = !1);
          }
        }
      },
      U = V,
      B = Object(k["a"])(U, P, N, !1, null, "7220c1d2", null),
      J = B.exports,
      W = { name: "Home", components: { Topics: J } },
      G = W,
      K = Object(k["a"])(G, L, F, !1, null, null, null),
      Q = K.exports,
      X = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "mt-5" },
          [
            n(
              "v-container",
              [
                n(
                  "v-row",
                  [
                    n("div", { staticClass: "headline" }, [
                      e._v("الاستشارات الطبية")
                    ]),
                    n("v-spacer"),
                    n(
                      "div",
                      [
                        e.isAdmin
                          ? e._e()
                          : n(
                              "v-btn",
                              {
                                on: {
                                  click: function(t) {
                                    e.dialog = !0;
                                  }
                                }
                              },
                              [e._v("إضافة استشارة جديد")]
                            )
                      ],
                      1
                    )
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "mt-4" },
                  [
                    n("consultations-table", {
                      ref: "table",
                      on: { update: e.openEditDialog }
                    })
                  ],
                  1
                ),
                n("consultation-form", {
                  ref: "form",
                  attrs: { id: e.itemId, dialog: e.dialog },
                  on: { close: e.handleClose, submit: e.handleSubmit }
                })
              ],
              1
            )
          ],
          1
        );
      },
      Y = [],
      Z = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: e.headers,
                items: e.items,
                loading: e.loading,
                "multi-sort": "",
                "items-per-page": 20
              },
              scopedSlots: e._u([
                {
                  key: "item.answeredAt",
                  fn: function(t) {
                    var n = t.item;
                    return [
                      e._v(
                        " " +
                          e._s(
                            n.answeredAt
                              ? e.$moment(n.answeredAt).format("L")
                              : ""
                          ) +
                          " "
                      )
                    ];
                  }
                },
                {
                  key: "item.createdAt",
                  fn: function(t) {
                    var n = t.item;
                    return [
                      e._v(" " + e._s(e.$moment(n.createdAt).format("L")) + " ")
                    ];
                  }
                },
                {
                  key: "item.actions",
                  fn: function(t) {
                    var a = t.item;
                    return [
                      e.isAdmin
                        ? n(
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: { color: "success" },
                              on: {
                                click: function(t) {
                                  return e.editItem(a);
                                }
                              }
                            },
                            [e._v(" رد ")]
                          )
                        : n(
                            "v-btn",
                            {
                              staticClass: "mr-2",
                              attrs: { color: "success" },
                              on: {
                                click: function(t) {
                                  return e.editItem(a);
                                }
                              }
                            },
                            [e._v(" مشاهدة ")]
                          )
                    ];
                  }
                }
              ])
            })
          ],
          1
        );
      },
      ee = [],
      te = (function() {
        function e() {
          Object(u["a"])(this, e);
        }
        return (
          Object(d["a"])(e, null, [
            {
              key: "fetch",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), b.get("/api/consultations");
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "create",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), b.post("/api/consultations", t)
                            );
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "update",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t, n) {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              b.put("/api/consultations/" + t + "?answer=" + n)
                            );
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "delete",
              value: (function() {
                var e = Object(l["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              b.get("/api/consultations/" + t + "/delete")
                            );
                          case 2:
                            return e.abrupt("return", e.sent.data);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            }
          ]),
          e
        );
      })(),
      ne = te,
      ae = {
        name: "ConsultationsTable",
        computed: Object(i["a"])(
          {},
          Object(_["b"])(["isAuthenticated", "isAdmin"])
        ),
        data: function() {
          return {
            loading: !1,
            items: [],
            headers: [
              { text: "#", value: "id", sortable: !1 },
              { text: "السؤال", value: "question", sortable: !1 },
              { text: "الرد", value: "answer", sortable: !1 },
              { text: "تاريخ السؤال", value: "createdAt", sortable: !1 },
              { text: "تاريخ الاجابة", value: "answeredAt", sortable: !1 },
              { text: "الاجراءات", value: "actions", sortable: !1 }
            ]
          };
        },
        mounted: function() {
          this.fetch();
        },
        methods: {
          fetch: function() {
            var e = this;
            (this.loading = !0),
              ne
                .fetch()
                .then(function(t) {
                  return (e.items = t);
                })
                .catch(function(t) {
                  return e.$snotify.error(t.message);
                })
                .finally(function() {
                  return (e.loading = !1);
                });
          },
          editItem: function(e) {
            this.$emit("update", e);
          },
          deleteItem: function(e) {
            var t = this;
            confirm("هل تريد الحذف؟") &&
              ne
                .delete(e)
                .then(function() {
                  t.fetch(), t.$snotify.success("تم الحذف بنجاح");
                })
                .catch(function(e) {
                  return t.$snotify.error(e.message);
                })
                .finally(function() {
                  return (t.loading = !1);
                });
          }
        }
      },
      re = ae,
      se = Object(k["a"])(re, Z, ee, !1, null, "2cd10ae6", null),
      ie = se.exports,
      oe = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.isAuthenticated
          ? n("div", [
              n(
                "div",
                [
                  n(
                    "v-dialog",
                    {
                      attrs: { "max-width": "500" },
                      on: { "click:outside": e.close },
                      model: {
                        value: e.dialog,
                        callback: function(t) {
                          e.dialog = t;
                        },
                        expression: "dialog"
                      }
                    },
                    [
                      n(
                        "v-card",
                        [
                          n("v-card-title", { staticClass: "headline" }, [
                            e._v("استشارة طبية")
                          ]),
                          n(
                            "v-form",
                            {
                              ref: "form",
                              model: {
                                value: e.valid,
                                callback: function(t) {
                                  e.valid = t;
                                },
                                expression: "valid"
                              }
                            },
                            [
                              n(
                                "v-card-text",
                                [
                                  n("v-textarea", {
                                    attrs: {
                                      readonly: e.isAdmin,
                                      counter: 300,
                                      rules: e.questionRules,
                                      label: "نص الاستشارة",
                                      required: ""
                                    },
                                    model: {
                                      value: e.question,
                                      callback: function(t) {
                                        e.question = t;
                                      },
                                      expression: "question"
                                    }
                                  }),
                                  n("v-textarea", {
                                    attrs: {
                                      readonly: !e.isAdmin,
                                      counter: 300,
                                      rules: e.answerRules,
                                      label: "الجواب"
                                    },
                                    model: {
                                      value: e.answer,
                                      callback: function(t) {
                                        e.answer = t;
                                      },
                                      expression: "answer"
                                    }
                                  })
                                ],
                                1
                              ),
                              !e.id || e.isAdmin
                                ? n(
                                    "v-card-actions",
                                    [
                                      n("v-spacer"),
                                      n(
                                        "v-btn",
                                        {
                                          staticClass: "mr-4",
                                          attrs: { color: "primary", text: "" },
                                          on: { click: e.close }
                                        },
                                        [e._v(" إغلاق ")]
                                      ),
                                      n(
                                        "v-btn",
                                        {
                                          staticClass: "mr-4",
                                          attrs: {
                                            disabled: !e.valid,
                                            color: "primary",
                                            loading: e.loading
                                          },
                                          on: { click: e.submit }
                                        },
                                        [e._v(" إرسال ")]
                                      )
                                    ],
                                    1
                                  )
                                : e._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          : e._e();
      },
      ce = [],
      le = {
        name: "ConsultationForm",
        props: ["dialog", "id"],
        computed: Object(i["a"])(
          {},
          Object(_["b"])(["isAuthenticated", "isAdmin"])
        ),
        data: function() {
          return {
            loading: !1,
            valid: !0,
            question: "",
            answer: "",
            questionRules: [
              function(e) {
                return !!e || "نص الاستشارة ضرورية";
              },
              function(e) {
                return (
                  (e && e.length >= 10) ||
                  "محتوى الاستشارة يجب ان يحوي على 10 محارف او أكثر."
                );
              },
              function(e) {
                return (
                  (e && e.length <= 300) ||
                  "محتوى الاستشارة يجب ان يحوي على 300 محرف او اقل."
                );
              }
            ],
            answerRules: [
              function(e) {
                return !!e || "رد الاستشارة ضروري";
              },
              function(e) {
                return (
                  (e && e.length >= 10) ||
                  "محتوى الرد يجب ان يحوي على 10 محارف او أكثر."
                );
              },
              function(e) {
                return (
                  (e && e.length <= 300) ||
                  "محتوى الرد يجب ان يحوي على 300 محرف أو اقل."
                );
              }
            ]
          };
        },
        methods: {
          validate: function() {
            this.$refs.form.validate();
          },
          reset: function() {
            (this.question = ""), (this.answer = ""), this.$refs.form.reset();
          },
          resetValidation: function() {
            this.$refs.form.resetValidation();
          },
          close: function() {
            this.reset(), this.$emit("close");
          },
          setForm: function(e, t) {
            (this.question = e), (this.answer = t);
          },
          submit: function() {
            var e = this,
              t = this.question,
              n = this.answer,
              a = { question: t, answer: n };
            (this.loading = !0),
              this.id
                ? ne
                    .update(this.id, n)
                    .then(function() {
                      e.$refs.form.reset(), e.$emit("submit");
                    })
                    .catch(function(t) {
                      return e.$snotify.error(t.message);
                    })
                    .finally(function() {
                      return (e.loading = !1);
                    })
                : ne
                    .create(a)
                    .then(function() {
                      e.$refs.form.reset(), e.$emit("submit");
                    })
                    .catch(function(t) {
                      return e.$snotify.error(t.message);
                    })
                    .finally(function() {
                      return (e.loading = !1);
                    });
          }
        }
      },
      ue = le,
      de = Object(k["a"])(ue, oe, ce, !1, null, "6cac98d4", null),
      fe = de.exports,
      me = {
        name: "Consultations",
        components: { ConsultationForm: fe, ConsultationsTable: ie },
        computed: Object(i["a"])(
          {},
          Object(_["b"])(["isAuthenticated", "isAdmin"])
        ),
        data: function() {
          return { dialog: !1, itemId: null };
        },
        methods: {
          openEditDialog: function(e) {
            (this.dialog = !0),
              (this.itemId = e.id),
              this.$refs.form.setForm(e.question, e.answer);
          },
          handleClose: function() {
            (this.dialog = !1), (this.itemId = null);
          },
          handleSubmit: function() {
            (this.dialog = !1), (this.itemId = null), this.$refs.table.fetch();
          }
        }
      },
      ve = me,
      pe = Object(k["a"])(ve, X, Y, !1, null, "031bfdec", null),
      he = pe.exports,
      be = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "my-4" },
          [
            n(
              "v-container",
              [
                n(
                  "v-row",
                  [
                    n("div", { staticClass: "headline" }, [
                      e._v("المواضيع الطبية")
                    ]),
                    n("v-spacer"),
                    n(
                      "div",
                      [
                        n(
                          "v-btn",
                          {
                            on: {
                              click: function(t) {
                                e.dialog = !0;
                              }
                            }
                          },
                          [e._v("إضافة موضوع جديد")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "mt-4" },
                  [
                    n("topics-table", {
                      ref: "table",
                      on: { update: e.openEditDialog }
                    })
                  ],
                  1
                ),
                n("topic-form", {
                  ref: "dialog",
                  attrs: { id: e.itemId, dialog: e.dialog },
                  on: { close: e.handleClose, submit: e.handleSubmit }
                })
              ],
              1
            )
          ],
          1
        );
      },
      ge = [],
      je = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n("v-data-table", {
              staticClass: "elevation-5",
              attrs: {
                headers: e.headers,
                items: e.items,
                "items-per-page": 20,
                loading: e.loading
              },
              scopedSlots: e._u([
                {
                  key: "item.createdAt",
                  fn: function(t) {
                    var n = t.item;
                    return [
                      e._v(
                        " " + e._s(e.$moment(n.createdAt).format("LLL")) + " "
                      )
                    ];
                  }
                },
                {
                  key: "item.actions",
                  fn: function(t) {
                    var a = t.item;
                    return [
                      n(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function(t) {
                              return e.editItem(a);
                            }
                          }
                        },
                        [e._v(" mdi-pencil ")]
                      ),
                      n(
                        "v-icon",
                        {
                          attrs: { small: "", color: "danger" },
                          on: {
                            click: function(t) {
                              return e.deleteItem(a.id);
                            }
                          }
                        },
                        [e._v(" mdi-delete ")]
                      )
                    ];
                  }
                }
              ])
            })
          ],
          1
        );
      },
      ye = [],
      ke = {
        name: "TopicsTable",
        data: function() {
          return {
            loading: !1,
            items: [],
            headers: [
              { text: "#", value: "id" },
              { text: "العنوان", value: "title" },
              { text: "المشاهدات", value: "views" },
              { text: "تاريخ التحرير", value: "createdAt" },
              { text: "الاجراءات", value: "actions", sortable: !1 }
            ]
          };
        },
        mounted: function() {
          this.fetch();
        },
        methods: {
          fetch: function() {
            var e = this;
            (this.loading = !0),
              M.fetch()
                .then(function(t) {
                  return (e.items = t);
                })
                .catch(function(t) {
                  return e.$snotify.error(t.message);
                })
                .finally(function() {
                  return (e.loading = !1);
                });
          },
          editItem: function(e) {
            this.$emit("update", e);
          },
          deleteItem: function(e) {
            var t = this;
            confirm("هل تريد الحذف؟") &&
              M.delete(e)
                .then(function() {
                  t.fetch(), t.$snotify.success("تم الحذف بنجاح");
                })
                .catch(function(e) {
                  return t.$snotify.error(e.message);
                })
                .finally(function() {
                  return (t.loading = !1);
                });
          }
        }
      },
      we = ke,
      xe = Object(k["a"])(we, je, ye, !1, null, "89234102", null),
      _e = xe.exports,
      $e = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n(
            "div",
            [
              n(
                "v-dialog",
                {
                  attrs: { "max-width": "590" },
                  on: { "click:outside": e.close },
                  model: {
                    value: e.dialog,
                    callback: function(t) {
                      e.dialog = t;
                    },
                    expression: "dialog"
                  }
                },
                [
                  n(
                    "v-card",
                    [
                      n("v-card-title", { staticClass: "headline" }, [
                        e._v("موضوع طبي")
                      ]),
                      n(
                        "v-form",
                        {
                          ref: "form",
                          model: {
                            value: e.valid,
                            callback: function(t) {
                              e.valid = t;
                            },
                            expression: "valid"
                          }
                        },
                        [
                          n(
                            "v-card-text",
                            [
                              n("v-text-field", {
                                attrs: {
                                  counter: 50,
                                  label: "عنوان الموضوع",
                                  required: ""
                                },
                                model: {
                                  value: e.title,
                                  callback: function(t) {
                                    e.title = t;
                                  },
                                  expression: "title"
                                }
                              }),
                              n("v-file-input", {
                                attrs: {
                                  rules: e.fileRules,
                                  accept: "image/png, image/jpeg, image/bmp",
                                  placeholder: "الصورة الاساسية للموضوع",
                                  "prepend-icon": "mdi-camera",
                                  label: "صورة الخلفية"
                                },
                                model: {
                                  value: e.cover,
                                  callback: function(t) {
                                    e.cover = t;
                                  },
                                  expression: "cover"
                                }
                              }),
                              n("VueTrix", {
                                attrs: { placeholder: "محتوى الموضوع" },
                                model: {
                                  value: e.content,
                                  callback: function(t) {
                                    e.content = t;
                                  },
                                  expression: "content"
                                }
                              })
                            ],
                            1
                          ),
                          n(
                            "v-card-actions",
                            [
                              n("v-spacer"),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: { color: "primary", text: "" },
                                  on: { click: e.close }
                                },
                                [e._v(" اغلاق ")]
                              ),
                              n(
                                "v-btn",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    disabled: !e.valid,
                                    color: "primary",
                                    loading: e.loading
                                  },
                                  on: { click: e.submit }
                                },
                                [e._v(" ارسال ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]);
      },
      Ce = [],
      Ae = n("ff0b"),
      Oe = {
        name: "TopicForm",
        props: ["dialog", "id"],
        components: { VueTrix: Ae["a"] },
        data: function() {
          return {
            loading: !1,
            valid: !0,
            title: "",
            content: "",
            cover: null,
            fileRules: [
              function(e) {
                return (
                  !e || e.size < 2e6 || "الصورة يجب ألا تتجاوز ال 2 ميغابايت"
                );
              }
            ]
          };
        },
        methods: {
          submit: function() {
            var e = this;
            this.loading = !0;
            var t = this.cover,
              n = this.title,
              a = this.content,
              r = new FormData();
            t && r.append("cover", t, t.name),
              r.append("title", n),
              r.append("content", a),
              this.id
                ? M.update(this.id, r)
                    .then(function() {
                      return e.closeAfterSubmit();
                    })
                    .catch(function(t) {
                      return e.$snotify.error(t.message);
                    })
                    .finally(function() {
                      return (e.loading = !1);
                    })
                : M.create(r)
                    .then(function() {
                      return e.closeAfterSubmit();
                    })
                    .catch(function(t) {
                      return e.$snotify.error(t.message);
                    })
                    .finally(function() {
                      return (e.loading = !1);
                    });
          },
          closeAfterSubmit: function() {
            var e = "تم الإضافة بنجاح";
            this.id && (e = "تم التعديل بنجاح"),
              this.$snotify.success(e),
              this.$emit("close"),
              this.$emit("submit");
          },
          close: function() {
            this.$emit("close");
          },
          setForm: function(e, t) {
            (this.title = e), (this.content = t), (this.cover = null);
          }
        }
      },
      Re = Oe,
      Te = Object(k["a"])(Re, $e, Ce, !1, null, "c258b6ec", null),
      ze = Te.exports,
      Ie = {
        name: "Topics",
        components: { TopicForm: ze, TopicsTable: _e },
        data: function() {
          return { dialog: !1, itemId: null };
        },
        methods: {
          openEditDialog: function(e) {
            (this.dialog = !0),
              (this.itemId = e.id),
              this.$refs.dialog.setForm(e.title, e.content);
          },
          handleClose: function() {
            (this.dialog = !1), (this.itemId = null);
          },
          handleSubmit: function() {
            this.$refs.table.fetch();
          }
        }
      },
      Se = Ie,
      qe = Object(k["a"])(Se, be, ge, !1, null, "60f75beb", null),
      De = qe.exports,
      Ee = {
        state: { user: {} },
        mutations: {
          user: function(e, t) {
            e.user = t;
          }
        },
        actions: {
          checkToken: function(e) {
            var t = e.commit;
            return new Promise(function(e, n) {
              var a,
                r =
                  null !== (a = localStorage.getItem("accessToken")) &&
                  void 0 !== a
                    ? a
                    : "";
              r || n(),
                g
                  .user(r)
                  .then(function(n) {
                    t("user", n), e(n);
                  })
                  .catch(function(e) {
                    return n(e);
                  });
            });
          }
        },
        getters: {
          userName: function(e) {
            return !!e.user.username;
          },
          isAuthenticated: function(e) {
            var t;
            return !(null === (t = e.user.id) || void 0 === t || !t);
          },
          isAdmin: function(e) {
            var t;
            return !(null === (t = e.user.isAdmin) || void 0 === t || !t);
          }
        }
      },
      Le = Ee;
    a["default"].use(_["a"]);
    var Fe = new _["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: { auth: Le }
    });
    a["default"].use(E["a"]);
    var Pe = [
        { path: "/", name: "Home", component: Q },
        {
          path: "/consultations",
          name: "Consultations",
          component: he,
          beforeEnter: function(e, t, n) {
            var a = Fe.getters.isAuthenticated;
            a ? n() : n("/");
          }
        },
        { path: "/topics", name: "Topics", component: De }
      ],
      Ne = new E["a"]({ routes: Pe }),
      He = Ne,
      Me = n("ce5b"),
      Ve = n.n(Me);
    n("bf40");
    a["default"].use(Ve.a);
    var Ue = new Ve.a({
        rtl: !0,
        theme: {
          themes: {
            light: {
              primary: "#142850",
              secondary: "#dae1e7",
              accent: "#00909e",
              error: "#FF5252",
              info: "#27496d",
              success: "#4CAF50",
              warning: "#FFC107"
            }
          }
        }
      }),
      Be = Ue,
      Je = (n("d5e8"), n("5363"), n("f213")),
      We = (n("26e8"), n("c1df")),
      Ge = n.n(We);
    a["default"].use(Je["b"], { toast: { position: Je["a"].leftBottom } }),
      Ge.a.locale("ar"),
      (a["default"].prototype.$moment = Ge.a),
      (a["default"].prototype.$url = function(e) {
        return e
          ? ((e = e.replace("\\", "/")),
            ""
              .concat("http://mohamedkhair-001-site1.atempurl.com", "/")
              .concat(e))
          : "";
      }),
      (a["default"].config.productionTip = !1),
      Fe.dispatch("checkToken").finally(function() {
        new a["default"]({
          router: He,
          store: Fe,
          vuetify: Be,
          render: function(e) {
            return e(D);
          }
        }).$mount("#app");
      });
  }
});
//# sourceMappingURL=app.eefa50e5.js.map
