'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [215],
  {
    6075: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return j;
        }
      });
      var t = r(4051),
        o = r.n(t),
        i = r(5893),
        l = r(8790),
        u = r(6886),
        a = r(5021),
        c = r(9727),
        s = r(331),
        d = r(7294),
        p = r(1163);
      function f(e) {
        var n = e.rText,
          r = e.lText,
          t = e.width,
          o = e.rBold,
          u = e.lBold;
        return (0, i.jsxs)(l.kC, {
          align: 'center',
          gap: '1',
          wrap: 'wrap',
          justify: 'space-between',
          w: null !== t && void 0 !== t ? t : '100%',
          children: [
            (0, i.jsxs)(l.xv, {
              fontWeight: o ? 'bold' : 'normal',
              children: [' ', n]
            }),
            (0, i.jsx)(l.xv, { fontWeight: u ? 'bold' : 'normal', children: r })
          ]
        });
      }
      var x = r(4781),
        h = r(6107),
        v = r(7470);
      function g(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
        return t;
      }
      function m(e, n, r, t, o, i, l) {
        try {
          var u = e[i](l),
            a = u.value;
        } catch (c) {
          return void r(c);
        }
        u.done ? n(a) : Promise.resolve(a).then(t, o);
      }
      function b(e) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (t, o) {
            var i = e.apply(n, r);
            function l(e) {
              m(i, t, o, l, u, 'next', e);
            }
            function u(e) {
              m(i, t, o, l, u, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      function y(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var t,
                o,
                i = [],
                l = !0,
                u = !1;
              try {
                for (
                  r = r.call(e);
                  !(l = (t = r.next()).done) &&
                  (i.push(t.value), !n || i.length !== n);
                  l = !0
                );
              } catch (a) {
                (u = !0), (o = a);
              } finally {
                try {
                  l || null == r.return || r.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ('string' === typeof e) return g(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(r);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return g(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function j(e) {
        var n = e.plan,
          r = e.setCheckout;
        return (0, i.jsxs)(l.kC, {
          flexDir: 'column',
          gap: '4',
          children: [
            n &&
              (0, i.jsxs)(l.kC, {
                flexDir: 'column',
                w: { base: '200px', md: '500px' },
                py: '2',
                px: { base: '2', md: '6' },
                bg: 'green.100',
                boxShadow: 'md',
                borderRadius: 'lg',
                gap: '2',
                color: 'green.900',
                fontSize: { base: 'lg', md: 'xl' },
                children: [
                  (0, i.jsx)(l.xv, {
                    fontWeight: 'bold',
                    fontSize: { base: 'xl', md: '2xl' },
                    textAlign: 'center',
                    children: null === n || void 0 === n ? void 0 : n.label
                  }),
                  (0, i.jsx)(f, {
                    lBold: !0,
                    lText: n.price,
                    rText:
                      '\u0631\u064a\u0627\u0644 \u0633\u0639\u0648\u062f\u064a'
                  }),
                  (0, i.jsx)('hr', { style: { border: '1px solid white' } }),
                  (0, i.jsx)(f, {
                    lBold: !0,
                    lText: n.usd,
                    rText:
                      '\u062f\u0648\u0644\u0627\u0631 \u0627\u0645\u0631\u064a\u0643\u064a'
                  })
                ]
              }),
            (0, i.jsxs)(u.bZ, {
              fontSize: 'lg',
              variant: 'solid',
              borderRadius: 'xl',
              status: 'warning',
              children: [
                (0, i.jsx)(u.zM, {}),
                '\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0627\u0644\u063a\u0629 \u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629',
                ' '
              ]
            }),
            (0, i.jsx)(a.Vv, {
              options: {
                'client-id':
                  'AYTCP0tc6Sc1UURcx0uQtvtuUOhQJIXBoTyuBxShH5IllqUuYKYvgz6mTc3qS543O-6MqVNSk-M40s-P',
                locale: 'ar_SA',
                intent: 'subscription',
                vault: !0
              },
              children: (0, i.jsx)(w, { plan: n, setCheckout: r })
            })
          ]
        });
      }
      function w(e) {
        var n = e.setCheckout,
          r = e.plan,
          t = y((0, a.Up)(), 1)[0].isPending,
          l = (0, s.oR)(function (e) {
            return e.user;
          }),
          u = (0, s.oR)(function (e) {
            return e.setUser;
          }),
          f = function () {
            return n(null);
          },
          g = (0, d.useState)(!1),
          m = g[0],
          j = g[1],
          w = (0, p.useRouter)();
        function S(e) {
          return k.apply(this, arguments);
        }
        function k() {
          return (
            (k = b(
              o().mark(function e(n) {
                var t,
                  i,
                  a = arguments;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                          (i =
                            a.length > 2 && void 0 !== a[2]
                              ? a[2]
                              : r.usd.toString()),
                          j(!0),
                          (e.next = 4),
                          (0, h._)({
                            url: '/payments/'.concat(
                              null === l || void 0 === l ? void 0 : l._id
                            ),
                            data: {
                              priceId:
                                null === r || void 0 === r ? void 0 : r._id,
                              category:
                                null === r || void 0 === r
                                  ? void 0
                                  : r.category,
                              userId:
                                null === l || void 0 === l ? void 0 : l._id,
                              paid: +i,
                              paypal: t,
                              isFailed: n
                            },
                            method: 'post',
                            successToast:
                              '\u062a\u0645 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0628\u0646\u062c\u0627\u062d'
                          })
                        );
                      case 4:
                        return j(!1), (e.next = 7), (0, v.BT)(l._id, u);
                      case 7:
                        'meal' ===
                        (null === r || void 0 === r ? void 0 : r.category)
                          ? w.replace('/expectation')
                          : f();
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            k.apply(this, arguments)
          );
        }
        function C() {
          return (C = b(
            o().mark(function e(n) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      S(!0);
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (t || m) && (0, i.jsx)(x.Z, {}),
            (0, i.jsx)(c.x, { onClick: f, client: !0, path: '/pricing' }),
            (0, i.jsx)(a.ch, {
              style: { layout: 'vertical', shape: 'pill' },
              onCancel: f,
              onError: function (e) {
                return C.apply(this, arguments);
              },
              createSubscription: function (e, n) {
                return n.subscription.create({ plan_id: r.planId });
              },
              onApprove: (function () {
                var e = b(
                  o().mark(function e(n, r) {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            S(!1, {
                              method: n.paymentSource,
                              orderID: n.orderID,
                              payerID: n.payerID,
                              paymentID: n.paymentID,
                              subscriptionID: n.subscriptionID
                            });
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, r) {
                  return e.apply(this, arguments);
                };
              })()
            })
          ]
        });
      }
    },
    3412: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return s;
        }
      });
      var t = r(5893),
        o = r(1163),
        i = r(7294),
        l = r(4781),
        u = r(331),
        a = r(5110),
        c = r(5832);
      function s(e, n) {
        return function () {
          var r = (0, o.useRouter)(),
            s = (0, i.useState)(!0),
            d = s[0],
            p = s[1],
            f = (0, i.useState)(!1),
            x = f[0],
            h = f[1],
            v = (0, i.useState)(!1),
            g = v[0],
            m = v[1],
            b = (0, u.oR)(function (e) {
              return e.user;
            }),
            y = (0, u.oR)(function (e) {
              return e.prices;
            });
          return (
            (0, i.useEffect)(
              function () {
                if (b && (null === y || void 0 === y ? void 0 : y.length))
                  if ('pricing' === n)
                    (0, a.b)(b, 'meal') ? r.replace('/') : p(!1);
                  else if ('meal' === n) {
                    if (!(0, a.b)(b, 'meal'))
                      return (
                        r.replace('/pricing'),
                        void (0, c.Z)(
                          '\u064a\u062c\u0628 \u0639\u0644\u064a\u0643 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0641\u064a \u0628\u0627\u0642\u0627\u062a \u0627\u0644\u0643\u064a\u062a\u0648',
                          'info'
                        )
                      );
                    p(!1);
                  } else (0, a.b)(b, n) ? h(!0) : h(!1), p(!1);
                (null === y || void 0 === y ? void 0 : y.length) &&
                  !b &&
                  ('pricing' === n ? (m(!0), p(!1)) : r.replace('/'));
              },
              [b, y]
            ),
            d
              ? (0, t.jsx)(l.Z, {})
              : (0, t.jsx)(e, { user: b, isSubscriped: x, vistor: g })
          );
        };
      }
    },
    9508: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return l;
        }
      });
      var t = r(5893),
        o = r(8790),
        i = r(5054);
      function l(e) {
        var n = e.title,
          r = e.subTitle,
          l = e.children,
          u = e.submitButton;
        return (0, t.jsxs)(o.kC, {
          gap: '2',
          flexDir: 'column',
          w: '100%',
          align: 'center',
          children: [
            (0, t.jsx)(o.xv, {
              fontWeight: 'bold',
              fontSize: 'lg',
              children: r
            }),
            (0, t.jsxs)(o.kC, {
              flexDir: 'column',
              w: '100%',
              align: 'center',
              color: 'orange.800',
              bg: 'orange.100',
              p: '4',
              borderRadius: 'lg',
              gap: '3',
              children: [
                (0, t.jsx)(o.xv, {
                  fontSize: { base: 'lg', md: '2xl' },
                  fontWeight: 'bold',
                  children: n
                }),
                l,
                (0, t.jsxs)(i.zx, {
                  my: '3',
                  bg: 'white',
                  _hover: { bg: 'orange.600', color: 'orange.50' },
                  _active: { bg: 'orange.600', color: 'orange.50' },
                  isLoading: !u.price || u.isLoading,
                  onClick: u.onClick,
                  children: [
                    '\u0627\u0634\u062a\u0631\u0643 \u0627\u0644\u0627\u0646 \u0628 ',
                    u.price,
                    ' \u0631\u064a\u0627\u0644/\u0634\u0647\u0631\u064a\u064b\u0627'
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    9727: function (e, n, r) {
      r.d(n, {
        x: function () {
          return u;
        }
      });
      var t = r(5893),
        o = r(5054),
        i = r(1163),
        l = r(155);
      function u(e) {
        var n = e.path,
          r = e.client,
          u = e.onClick,
          a = (0, i.useRouter)();
        return (0, t.jsx)(o.zx, {
          onClick: function () {
            return u ? u() : a.replace(n);
          },
          position: 'absolute',
          dir: 'ltr',
          size: { base: 'sm', md: 'md' },
          width: { base: '100px', md: '120px' },
          leftIcon: (0, t.jsx)(l.Eg1, { fontSize: '25px' }),
          top: { base: r ? '120px' : '-1', md: r ? '80px' : '30px' },
          left: { base: '12px', md: '15px' },
          colorScheme: 'yellow',
          color: 'yellow.800',
          children: '\u0631\u062c\u0648\u0639'
        });
      }
    },
    4781: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return l;
        }
      });
      var t = r(5893),
        o = r(8790),
        i = r(9609);
      function l(e) {
        var n = e.text;
        return (0, t.jsxs)(o.kC, {
          p: '3',
          flex: '1',
          justifyContent: 'center',
          flexDir: 'column',
          alignItems: 'center',
          children: [
            (0, t.jsx)(i.$, {
              transform: 'translate(-50%, -50%)',
              thickness: '7px',
              speed: '0.65s',
              w: '8rem',
              h: '8rem',
              emptyColor: 'orange.200',
              color: 'orange.700'
            }),
            n && (0, t.jsx)(o.xv, { children: n })
          ]
        });
      }
    },
    1228: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return u;
        }
      });
      var t = r(5893),
        o = r(8790),
        i = r(894),
        l = r(8428);
      function u(e) {
        var n = e.text,
          r = e.icon,
          u = e.image;
        return (0, t.jsxs)(o.kC, {
          w: { base: '200px', md: '300px' },
          align: 'center',
          gap: '2',
          children: [
            r &&
              (0, t.jsx)(i.JO, {
                as: r,
                w: { base: 8, md: 12 },
                h: { base: 8, md: 12 },
                color: 'orange.800'
              }),
            u &&
              (0, t.jsx)(l.Ee, {
                src: u,
                w: { base: 8, md: 12 },
                borderRadius: 'full',
                h: { base: 8, md: 12 },
                alt: 'keto'
              }),
            (0, t.jsx)(o.xv, {
              fontSize: { base: 'lg', md: 'xl' },
              fontWeight: 'bold',
              children: n
            })
          ]
        });
      }
    }
  }
]);
