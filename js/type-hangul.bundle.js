/*!
 * type-hangul v0.2.4
 * https://github.com/SDuck4/type-hangul
 *
 * MIT License
 * Copyright (c) 2020 Chae SeungWoo
 */ !(function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((e.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & n && 'string' != typeof t))
        for (var o in t)
          e.d(
            r,
            o,
            function (n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ''),
    e((e.s = 1));
})([
  function (t, n, e) {
    var r;
    !(function () {
      'use strict';
      var o,
        i,
        u,
        f,
        a,
        c,
        s = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
        l = [
          'ㅏ',
          'ㅐ',
          'ㅑ',
          'ㅒ',
          'ㅓ',
          'ㅔ',
          'ㅕ',
          'ㅖ',
          'ㅗ',
          ['ㅗ', 'ㅏ'],
          ['ㅗ', 'ㅐ'],
          ['ㅗ', 'ㅣ'],
          'ㅛ',
          'ㅜ',
          ['ㅜ', 'ㅓ'],
          ['ㅜ', 'ㅔ'],
          ['ㅜ', 'ㅣ'],
          'ㅠ',
          'ㅡ',
          ['ㅡ', 'ㅣ'],
          'ㅣ',
        ],
        h = [
          '',
          'ㄱ',
          'ㄲ',
          ['ㄱ', 'ㅅ'],
          'ㄴ',
          ['ㄴ', 'ㅈ'],
          ['ㄴ', 'ㅎ'],
          'ㄷ',
          'ㄹ',
          ['ㄹ', 'ㄱ'],
          ['ㄹ', 'ㅁ'],
          ['ㄹ', 'ㅂ'],
          ['ㄹ', 'ㅅ'],
          ['ㄹ', 'ㅌ'],
          ['ㄹ', 'ㅍ'],
          ['ㄹ', 'ㅎ'],
          'ㅁ',
          'ㅂ',
          ['ㅂ', 'ㅅ'],
          'ㅅ',
          'ㅆ',
          'ㅇ',
          'ㅈ',
          'ㅊ',
          'ㅋ',
          'ㅌ',
          'ㅍ',
          'ㅎ',
        ];
      function d(t) {
        for (var n = t.length, e = { 0: 0 }, r = 0; r < n; r++) t[r] && (e[t[r].charCodeAt(0)] = r);
        return e;
      }
      function p(t) {
        for (var n, e, r = t.length, o = {}, i = 0; i < r; i++)
          (n = t[i][0].charCodeAt(0)), (e = t[i][1].charCodeAt(0)), void 0 === o[n] && (o[n] = {}), (o[n][e] = t[i][2].charCodeAt(0));
        return o;
      }
      function g(t) {
        return void 0 !== o[t];
      }
      function v(t) {
        return void 0 !== i[t];
      }
      function C(t) {
        return void 0 !== u[t];
      }
      function y(t) {
        return void 0 !== f[t];
      }
      function m(t) {
        return 44032 <= t && t <= 55203;
      }
      function A(t, n) {
        return !(!c[t] || !c[t][n]) && c[t][n];
      }
      function b(t, n) {
        return !(!a[t] || !a[t][n]) && a[t][n];
      }
      (o = d([
        'ㄱ',
        'ㄲ',
        'ㄳ',
        'ㄴ',
        'ㄵ',
        'ㄶ',
        'ㄷ',
        'ㄸ',
        'ㄹ',
        'ㄺ',
        'ㄻ',
        'ㄼ',
        'ㄽ',
        'ㄾ',
        'ㄿ',
        'ㅀ',
        'ㅁ',
        'ㅂ',
        'ㅃ',
        'ㅄ',
        'ㅅ',
        'ㅆ',
        'ㅇ',
        'ㅈ',
        'ㅉ',
        'ㅊ',
        'ㅋ',
        'ㅌ',
        'ㅍ',
        'ㅎ',
      ])),
        (i = d(['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'])),
        (u = d(['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'])),
        (f = d([
          '',
          'ㄱ',
          'ㄲ',
          'ㄳ',
          'ㄴ',
          'ㄵ',
          'ㄶ',
          'ㄷ',
          'ㄹ',
          'ㄺ',
          'ㄻ',
          'ㄼ',
          'ㄽ',
          'ㄾ',
          'ㄿ',
          'ㅀ',
          'ㅁ',
          'ㅂ',
          'ㅄ',
          'ㅅ',
          'ㅆ',
          'ㅇ',
          'ㅈ',
          'ㅊ',
          'ㅋ',
          'ㅌ',
          'ㅍ',
          'ㅎ',
        ])),
        (a = p([
          ['ㄱ', 'ㅅ', 'ㄳ'],
          ['ㄴ', 'ㅈ', 'ㄵ'],
          ['ㄴ', 'ㅎ', 'ㄶ'],
          ['ㄹ', 'ㄱ', 'ㄺ'],
          ['ㄹ', 'ㅁ', 'ㄻ'],
          ['ㄹ', 'ㅂ', 'ㄼ'],
          ['ㄹ', 'ㅅ', 'ㄽ'],
          ['ㄹ', 'ㅌ', 'ㄾ'],
          ['ㄹ', 'ㅍ', 'ㄿ'],
          ['ㄹ', 'ㅎ', 'ㅀ'],
          ['ㅂ', 'ㅅ', 'ㅄ'],
        ])),
        (c = p([
          ['ㅗ', 'ㅏ', 'ㅘ'],
          ['ㅗ', 'ㅐ', 'ㅙ'],
          ['ㅗ', 'ㅣ', 'ㅚ'],
          ['ㅜ', 'ㅓ', 'ㅝ'],
          ['ㅜ', 'ㅔ', 'ㅞ'],
          ['ㅜ', 'ㅣ', 'ㅟ'],
          ['ㅡ', 'ㅣ', 'ㅢ'],
        ]));
      var j = function (t, n) {
          if (null === t) throw new Error('Arguments cannot be null');
          'object' == typeof t && (t = t.join(''));
          for (var e, r, o, a, c, d = [], p = t.length, y = 0; y < p; y++) {
            var A = [];
            m((a = t.charCodeAt(y)))
              ? ((r = (((a -= 44032) - (o = a % 28)) / 28) % 21),
                (e = parseInt((a - o) / 28 / 21)),
                A.push(s[e]),
                'object' == typeof l[r] ? (A = A.concat(l[r])) : A.push(l[r]),
                o > 0 && ('object' == typeof h[o] ? (A = A.concat(h[o])) : A.push(h[o])))
              : g(a)
              ? 'string' == typeof (c = v(a) ? s[i[a]] : h[f[a]])
                ? A.push(c)
                : (A = A.concat(c))
              : C(a)
              ? 'string' == typeof (c = l[u[a]])
                ? A.push(c)
                : (A = A.concat(c))
              : A.push(t.charAt(y)),
              n ? d.push(A) : (d = d.concat(A));
          }
          return d;
        },
        w = function (t) {
          return 'string' != typeof t ? '' : (t = j(t)).join('');
        },
        x = function (t) {
          'string' == typeof t && (t = j(t));
          var n,
            e,
            r = [],
            o = t.length,
            a = 0,
            c = -1,
            s = !1;
          function l(n) {
            var e,
              o,
              a,
              l,
              h = 0,
              d = '';
            if (((s = !1), !(c + 1 > n)))
              for (var p = 1; ; p++) {
                if (1 === p) {
                  if (C((e = t[c + p].charCodeAt(0))))
                    return c + p + 1 <= n && C((o = t[c + p + 1].charCodeAt(0)))
                      ? (r.push(String.fromCharCode(A(e, o))), void (c = n))
                      : (r.push(t[c + p]), void (c = n));
                  if (!v(e)) return r.push(t[c + p]), void (c = n);
                  d = t[c + p];
                } else if (2 === p) {
                  if (v((o = t[c + p].charCodeAt(0)))) return (e = b(e, o)), (d = String.fromCharCode(e)), r.push(d), void (c = n);
                  d = String.fromCharCode(28 * (21 * i[e] + u[o]) + 44032);
                } else
                  3 === p
                    ? (A(o, (a = t[c + p].charCodeAt(0))) ? (o = A(o, a)) : (h = a), (d = String.fromCharCode(28 * (21 * i[e] + u[o]) + f[h] + 44032)))
                    : 4 === p
                    ? ((h = b(h, (l = t[c + p].charCodeAt(0))) ? b(h, l) : l), (d = String.fromCharCode(28 * (21 * i[e] + u[o]) + f[h] + 44032)))
                    : 5 === p && ((h = b(h, (l = t[c + p].charCodeAt(0)))), (d = String.fromCharCode(28 * (21 * i[e] + u[o]) + f[h] + 44032)));
                if (c + p >= n) return r.push(d), void (c = n);
              }
          }
          for (var h = 0; h < o; h++)
            v((n = t[h].charCodeAt(0))) || C(n) || y(n)
              ? (0 === a
                  ? v(n)
                    ? (a = 1)
                    : C(n) && (a = 4)
                  : 1 == a
                  ? C(n)
                    ? (a = 2)
                    : b(e, n)
                    ? (a = 5)
                    : l(h - 1)
                  : 2 == a
                  ? y(n)
                    ? (a = 3)
                    : C(n)
                    ? A(e, n) || (l(h - 1), (a = 4))
                    : (l(h - 1), (a = 1))
                  : 3 == a
                  ? y(n)
                    ? !s && b(e, n)
                      ? (s = !0)
                      : (l(h - 1), (a = 1))
                    : v(n)
                    ? (l(h - 1), (a = 1))
                    : C(n) && (l(h - 2), (a = 2))
                  : 4 == a
                  ? C(n)
                    ? A(e, n)
                      ? (l(h), (a = 0))
                      : l(h - 1)
                    : (l(h - 1), (a = 1))
                  : 5 == a && (C(n) ? (l(h - 2), (a = 2)) : (l(h - 1), (a = 1))),
                (e = n))
              : (l(h - 1), l(h), (a = 0));
          return l(h - 1), r.join('');
        };
      function S(t) {
        (this.string = t), (this.disassembled = j(t).join(''));
      }
      S.prototype.search = function (t) {
        return j(t).join('').indexOf(this.disassembled);
      };
      var T = {
        disassemble: j,
        d: j,
        disassembleToString: w,
        ds: w,
        assemble: x,
        a: x,
        search: function (t, n) {
          var e = j(t).join(''),
            r = j(n).join('');
          return e.indexOf(r);
        },
        rangeSearch: function (t, n) {
          var e,
            r = j(t).join(''),
            o = j(n).join(''),
            i = j(t, !0),
            u = new RegExp(o, 'gi'),
            f = [];
          if (!n.length) return [];
          for (; (e = u.exec(r)); ) f.push(e.index);
          function a(t) {
            for (var n = 0, e = 0; n < i.length; ++n) if (t < (e += i[n].length)) return n;
          }
          function c(t) {
            for (var n = 0, e = 0; n < i.length; ++n) if (((e += i[n].length), t + o.length <= e)) return n;
          }
          return f.map(function (t) {
            return [a(t), c(t)];
          });
        },
        Searcher: S,
        endsWithConsonant: function (t) {
          'object' == typeof t && (t = t.join(''));
          var n = t.charCodeAt(t.length - 1);
          if (m(n)) {
            if ((n -= 44032) % 28 > 0) return !0;
          } else if (g(n)) return !0;
          return !1;
        },
        endsWith: function (t, n) {
          return j(t).pop() === n;
        },
        isHangul: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), m(t);
        },
        isComplete: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), m(t);
        },
        isConsonant: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), g(t);
        },
        isVowel: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), C(t);
        },
        isCho: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), v(t);
        },
        isJong: function (t) {
          return 'string' == typeof t && (t = t.charCodeAt(0)), y(t);
        },
        isHangulAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!m(t.charCodeAt(n))) return !1;
          return !0;
        },
        isCompleteAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!m(t.charCodeAt(n))) return !1;
          return !0;
        },
        isConsonantAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!g(t.charCodeAt(n))) return !1;
          return !0;
        },
        isVowelAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!C(t.charCodeAt(n))) return !1;
          return !0;
        },
        isChoAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!v(t.charCodeAt(n))) return !1;
          return !0;
        },
        isJongAll: function (t) {
          if ('string' != typeof t) return !1;
          for (var n = 0; n < t.length; n++) if (!y(t.charCodeAt(n))) return !1;
          return !0;
        },
      };
      void 0 ===
        (r = function () {
          return T;
        }.call(n, e, n, t)) || (t.exports = r);
    })();
  },
  function (t, n, e) {
    'use strict';
    e.r(n);
    var r = e(0);
    const o = { text: null, append: !1, intervalType: 120, humanize: null };
    function i(t, n) {
      null ===
        (n = (function (t, n) {
          let e = JSON.parse(JSON.stringify(t));
          for (let t in n) e[t] = n[t];
          return e;
        })(o, n)).text && (n.text = u(t));
      let e,
        i = (function (t) {
          let n = Object(r.d)(t, !0),
            e = [],
            o = [];
          for (let t in n) {
            let r = n[t];
            r.length > 1 ? (o = o.concat(r)) : (o.length > 0 && (e.push(o), (o = [])), e.push(r));
          }
          return o.length > 0 && e.push(o), e;
        })(n.text),
        f = 0,
        a = 0,
        c = n.append ? u(t) : '',
        s = c;
      function l() {
        if (null === n.humanize) return n.intervalType;
        if ('number' == typeof n.humanize)
          return (function (t, n) {
            let e = t - t * n,
              r = t + t * n;
            return Math.round(Math.random() * (r - e) + e);
          })(n.intervalType, n.humanize);
        if ('function' == typeof n.humanize) return n.humanize(n.intervalType);
        throw new Error("'humanize' cannnot be " + typeof n.humanize);
      }
      const h = new CustomEvent('th.startType', { detail: { target: t, options: n } });
      t.dispatchEvent(h),
        (function o() {
          let h = i[f];
          if (a >= h.length) {
            if (((f += 1), (a = 0), (c = u(t)), f >= i.length)) {
              const e = new CustomEvent('th.endType', { detail: { target: t, options: n } });
              return void t.dispatchEvent(e);
            }
            return (e = l()), void setTimeout(o, e);
          }
          let d = Object(r.a)(h.slice(0, a + 1)),
            p = h[a];
          const g = new CustomEvent('th.beforeType', { detail: { target: t, options: n, progress: s, typeChar: p } });
          t.dispatchEvent(g),
            (s = c + d),
            (function (t, n) {
              'INPUT' === t.nodeName ? (t.value = n) : (t.textContent = n);
            })(t, s),
            (a += 1);
          const v = new CustomEvent('th.afterType', { detail: { target: t, options: n, progress: s, typeChar: p } });
          t.dispatchEvent(v), (e = l()), setTimeout(o, e);
        })();
    }
    function u(t) {
      return 'INPUT' === t.nodeName ? t.value : t.textContent;
    }
    const f = {
      type: function (t, n) {
        if (void 0 === t) throw new Error("'selector' cannnot be undefined");
        if (null === t) throw new Error("'selector' cannnot be null");
        let e = document.querySelectorAll(t);
        for (let t = 0; t < e.length; t++) i(e[t], n);
      },
    };
    (window.TypeHangul = f), (n.default = f);
  },
]);
