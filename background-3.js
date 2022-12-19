LavaPack.loadBundle(
    [
        [
            5137,
            {
                "../constants/iframe": 5122,
                "../constants/popup": 5125,
                "../constants/ui": 5127,
                "../env/browser/networkUtils": 5130,
                "../utils/deferred": 5161,
                "./showPopupRequest": 5138,
                "@babel/runtime/helpers/assertThisInitialized": 171,
                "@babel/runtime/helpers/asyncToGenerator": 172,
                "@babel/runtime/helpers/defineProperty": 176,
                "@babel/runtime/helpers/inheritsLoose": 180,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/regenerator": 200,
                events: 1729,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = e("@babel/runtime/helpers/interopRequireDefault");
                            (r.__esModule = !0), (r.default = void 0);
                            var s = n(e("@babel/runtime/regenerator")),
                                o = n(e("@babel/runtime/helpers/asyncToGenerator")),
                                i = n(e("@babel/runtime/helpers/assertThisInitialized")),
                                a = n(e("@babel/runtime/helpers/inheritsLoose")),
                                c = n(e("@babel/runtime/helpers/defineProperty")),
                                l = n(e("events")),
                                d = y(e("../constants/popup")),
                                u = y(e("../constants/iframe")),
                                h = y(e("../constants/ui")),
                                p = e("./showPopupRequest"),
                                g = e("../env/browser/networkUtils"),
                                m = e("../utils/deferred");
                            function f(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    r = new WeakMap();
                                return (f = function (e) {
                                    return e ? r : t;
                                })(e);
                            }
                            function y(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var r = f(t);
                                if (r && r.has(e)) return r.get(e);
                                var n = {},
                                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                                    }
                                return (n.default = e), r && r.set(e, n), n;
                            }
                            var b = (function (e) {
                                function t(t) {
                                    var r;
                                    return (
                                        (r = e.call(this) || this),
                                        (0, c.default)((0, i.default)(r), "requestTimeout", 0),
                                        (0, c.default)((0, i.default)(r), "closeInterval", 0),
                                        (0, c.default)((0, i.default)(r), "extensionTabId", 0),
                                        (r.settings = t),
                                        (r.origin = (0, g.getOrigin)(t.popupSrc)),
                                        (r.handleMessage = r.handleMessage.bind((0, i.default)(r))),
                                        (r.iframeHandshake = (0, m.create)(u.LOADED)),
                                        "webextension" === r.settings.env &&
                                            ((r.handleExtensionConnect = r.handleExtensionConnect.bind((0, i.default)(r))),
                                            (r.handleExtensionMessage = r.handleExtensionMessage.bind((0, i.default)(r))),
                                            chrome.runtime.onConnect.addListener(r.handleExtensionConnect)),
                                        window.addEventListener("message", r.handleMessage, !1),
                                        r
                                    );
                                }
                                (0, a.default)(t, e);
                                var r = t.prototype;
                                return (
                                    (r.request = function (e) {
                                        var t = this;
                                        if ((void 0 === e && (e = !1), this.locked)) this._window && ("webextension" === this.settings.env ? chrome.tabs.update(this._window.id, { active: !0 }) : this._window.focus());
                                        else {
                                            var r = this.open.bind(this);
                                            if (((this.locked = !0), this.settings.supportedBrowser)) {
                                                var n = e || "webextension" === this.settings.env ? 1 : 850;
                                                this.requestTimeout = window.setTimeout(function () {
                                                    (t.requestTimeout = 0), r(e);
                                                }, n);
                                            } else r();
                                        }
                                    }),
                                    (r.cancel = function () {
                                        this.close();
                                    }),
                                    (r.unlock = function () {
                                        this.locked = !1;
                                    }),
                                    (r.open = function (e) {
                                        var t = this,
                                            r = this.settings.popupSrc;
                                        this.settings.supportedBrowser
                                            ? ((this.popupPromise = (0, m.create)(d.LOADED)),
                                              this.openWrapper(e ? r + "#loading" : r),
                                              (this.closeInterval = window.setInterval(function () {
                                                  t._window &&
                                                      ("webextension" === t.settings.env
                                                          ? chrome.tabs.get(t._window.id, function (e) {
                                                                e || (t.close(), t.emit(d.CLOSED));
                                                            })
                                                          : t._window.closed && (t.close(), t.emit(d.CLOSED)));
                                              }, 500)),
                                              (this.openTimeout = window.setTimeout(function () {
                                                  t.close(),
                                                      (0, p.showPopupRequest)(t.open.bind(t), function () {
                                                          t.emit(d.CLOSED);
                                                      });
                                              }, 3e3)))
                                            : this.openWrapper(r + "#unsupported");
                                    }),
                                    (r.openWrapper = function (e) {
                                        var t = this;
                                        "webextension" === this.settings.env
                                            ? chrome.windows.getCurrent(null, function (r) {
                                                  "normal" !== r.type
                                                      ? chrome.windows.create({ url: e }, function (e) {
                                                            chrome.tabs.query({ windowId: e.id, active: !0 }, function (e) {
                                                                t._window = e[0];
                                                            });
                                                        })
                                                      : chrome.tabs.query({ currentWindow: !0, active: !0 }, function (r) {
                                                            (t.extensionTabId = r[0].id),
                                                                chrome.tabs.create({ url: e, index: r[0].index + 1 }, function (e) {
                                                                    t._window = e;
                                                                });
                                                        });
                                              })
                                            : "electron" === this.settings.env
                                            ? (this._window = window.open(e, "modal"))
                                            : ((this._window = window.open("", "_blank")), this._window && (this._window.location.href = e));
                                    }),
                                    (r.handleExtensionConnect = function (e) {
                                        "trezor-connect" === e.name &&
                                            (!this._window || (this._window && this._window.id !== e.sender.tab.id)
                                                ? e.disconnect()
                                                : (window.clearTimeout(this.openTimeout), (this.extensionPort = e), this.extensionPort.onMessage.addListener(this.handleExtensionMessage)));
                                    }),
                                    (r.handleExtensionMessage = function (e) {
                                        var t = this;
                                        if (this.extensionPort) {
                                            var r = this.extensionPort,
                                                n = e.data;
                                            if (n && "object" == typeof n)
                                                if (n.type === d.ERROR) {
                                                    var s = n.payload && "string" == typeof n.payload.error ? n.payload.error : null;
                                                    this.emit(d.CLOSED, s ? "Popup error: " + s : null), this.close();
                                                } else
                                                    n.type === d.LOADED
                                                        ? (this.popupPromise && this.popupPromise.resolve(),
                                                          this.iframeHandshake.promise.then(function (e) {
                                                              r.postMessage({ type: d.INIT, payload: { settings: t.settings, useBroadcastChannel: e } });
                                                          }))
                                                        : n.type === d.EXTENSION_USB_PERMISSIONS
                                                        ? chrome.tabs.query({ currentWindow: !0, active: !0 }, function (e) {
                                                              chrome.tabs.create({ url: "trezor-usb-permissions.html", index: e[0].index + 1 }, function (e) {});
                                                          })
                                                        : n.type === d.CLOSE_WINDOW && (this.emit(d.CLOSED), this.close());
                                        }
                                    }),
                                    (r.handleMessage = function (e) {
                                        var t = this,
                                            r = e.data;
                                        if ((0, g.getOrigin)(e.origin) === this.origin && r && "object" == typeof r)
                                            if (r.type === u.LOADED) {
                                                var n = !(!r.payload || "boolean" != typeof r.payload.useBroadcastChannel) && r.payload.useBroadcastChannel;
                                                this.iframeHandshake.resolve(n);
                                            } else if (r.type === d.BOOTSTRAP) window.clearTimeout(this.openTimeout);
                                            else if (r.type === d.ERROR && this._window) {
                                                var s = r.payload && "string" == typeof r.payload.error ? r.payload.error : null;
                                                this.emit(d.CLOSED, s ? "Popup error: " + s : null), this.close();
                                            } else
                                                r.type === d.LOADED
                                                    ? (this.popupPromise && this.popupPromise.resolve(),
                                                      this.iframeHandshake.promise.then(function (e) {
                                                          t._window.postMessage({ type: d.INIT, payload: { settings: t.settings, useBroadcastChannel: e } }, t.origin);
                                                      }))
                                                    : (r.type !== d.CANCEL_POPUP_REQUEST && r.type !== h.CLOSE_UI_WINDOW) || this.close();
                                    }),
                                    (r.close = function () {
                                        if (
                                            ((this.locked = !1),
                                            (this.popupPromise = undefined),
                                            this.requestTimeout && (window.clearTimeout(this.requestTimeout), (this.requestTimeout = 0)),
                                            this.openTimeout && (window.clearTimeout(this.openTimeout), (this.openTimeout = 0)),
                                            this.closeInterval && (window.clearInterval(this.closeInterval), (this.closeInterval = 0)),
                                            this.extensionPort && (this.extensionPort.disconnect(), (this.extensionPort = null)),
                                            this.extensionTabId && (chrome.tabs.update(this.extensionTabId, { active: !0 }), (this.extensionTabId = 0)),
                                            this._window)
                                        ) {
                                            if ("webextension" === this.settings.env) {
                                                chrome.runtime.lastError;
                                                chrome.tabs.remove(this._window.id, function () {
                                                    chrome.runtime.lastError;
                                                });
                                            } else this._window.close();
                                            this._window = null;
                                        }
                                    }),
                                    (r.postMessage = (function () {
                                        var e = (0, o.default)(
                                            s.default.mark(function e(t) {
                                                var r = this;
                                                return s.default.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    if (this._window || t.type === h.REQUEST_UI_WINDOW || !this.openTimeout) {
                                                                        e.next = 4;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        this.close(),
                                                                        (0, p.showPopupRequest)(this.open.bind(this), function () {
                                                                            r.emit(d.CLOSED);
                                                                        }),
                                                                        e.abrupt("return")
                                                                    );
                                                                case 4:
                                                                    if (!this.popupPromise) {
                                                                        e.next = 7;
                                                                        break;
                                                                    }
                                                                    return (e.next = 7), this.popupPromise.promise;
                                                                case 7:
                                                                    this._window && this._window.postMessage(t, this.origin);
                                                                case 8:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    this
                                                );
                                            })
                                        );
                                        return function (t) {
                                            return e.apply(this, arguments);
                                        };
                                    })()),
                                    t
                                );
                            })(l.default);
                            r.default = b;
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5138,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.__esModule = !0), (r.showPopupRequest = void 0);
                            var n = "TrezorConnectInteractionLayer",
                                s =
                                    '\n    <div class="trezorconnect-container" id="' +
                                    n +
                                    '">\n        <div class="trezorconnect-window">\n            <div class="trezorconnect-head">\n                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">\n                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>\n                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>\n                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>\n                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>\n                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>\n                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>\n                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>\n                </svg>\n                <div class="trezorconnect-close">\n                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">\n                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>\n                    </svg>\n                </div>\n            </div>\n            <div class="trezorconnect-body">\n                <h3>Popup was blocked</h3>\n                <p>Please click to “Continue” to open popup manually</p>\n                <button class="trezorconnect-open">Continue</button>\n            </div>\n        </div>\n    </div>\n';
                            r.showPopupRequest = function (e, t) {
                                if (!document.getElementById(n)) {
                                    var r = document.createElement("div");
                                    (r.id = n),
                                        (r.className = "trezorconnect-container"),
                                        (r.innerHTML = s),
                                        document.body && document.body.appendChild(r),
                                        (r.getElementsByClassName("trezorconnect-open")[0].onclick = function () {
                                            e(), document.body && document.body.removeChild(r);
                                        }),
                                        (r.getElementsByClassName("trezorconnect-close")[0].onclick = function () {
                                            t(), document.body && document.body.removeChild(r);
                                        });
                                }
                            };
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5139,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5140,
            {
                "../constants": 5123,
                "./account": 5139,
                "./backend/blockchain": 5141,
                "./events": 5143,
                "./misc": 5145,
                "./networks/binance": 5146,
                "./networks/bitcoin": 5147,
                "./networks/cardano": 5148,
                "./networks/coinInfo": 5149,
                "./networks/eos": 5150,
                "./networks/ethereum": 5151,
                "./networks/nem": 5152,
                "./networks/ripple": 5153,
                "./networks/stellar": 5154,
                "./networks/tezos": 5155,
                "./params": 5156,
                "./trezor/device": 5157,
                "./trezor/management": 5158,
                "./trezor/protobuf": 5159,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            s(e("../constants")),
                                s(e("./params")),
                                s(e("./trezor/device")),
                                s(e("./trezor/management")),
                                s(e("./trezor/protobuf")),
                                s(e("./account")),
                                s(e("./networks/bitcoin")),
                                s(e("./networks/binance")),
                                s(e("./networks/cardano")),
                                s(e("./networks/coinInfo")),
                                s(e("./networks/eos")),
                                s(e("./networks/ethereum")),
                                s(e("./networks/nem")),
                                s(e("./networks/ripple")),
                                s(e("./networks/stellar")),
                                s(e("./networks/tezos")),
                                s(e("./misc")),
                                s(e("./events")),
                                s(e("./backend/blockchain"));
                            function n(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    r = new WeakMap();
                                return (n = function (e) {
                                    return e ? r : t;
                                })(e);
                            }
                            function s(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var r = n(t);
                                if (r && r.has(e)) return r.get(e);
                                var s = {},
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var i in e)
                                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                                        a && (a.get || a.set) ? Object.defineProperty(s, i, a) : (s[i] = e[i]);
                                    }
                                return (s.default = e), r && r.set(e, s), s;
                            }
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5141,
            { "../../constants": 5123 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            e("../../constants");
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5142,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5143,
            { "../constants": 5123 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            e("../constants");
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5144,
            {
                "./account": 5139,
                "./api": 5140,
                "./backend/blockchain": 5141,
                "./backend/transactions": 5142,
                "./events": 5143,
                "./misc": 5145,
                "./networks/binance": 5146,
                "./networks/bitcoin": 5147,
                "./networks/cardano": 5148,
                "./networks/coinInfo": 5149,
                "./networks/eos": 5150,
                "./networks/ethereum": 5151,
                "./networks/nem": 5152,
                "./networks/ripple": 5153,
                "./networks/stellar": 5154,
                "./networks/tezos": 5155,
                "./params": 5156,
                "./trezor/device": 5157,
                "./trezor/management": 5158,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            r.__esModule = !0;
                            var n = e("./api");
                            Object.keys(n).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === n[e]) || (r[e] = n[e]));
                            });
                            var s = e("./events");
                            Object.keys(s).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === s[e]) || (r[e] = s[e]));
                            });
                            var o = e("./misc");
                            Object.keys(o).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === o[e]) || (r[e] = o[e]));
                            });
                            var i = e("./params");
                            Object.keys(i).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === i[e]) || (r[e] = i[e]));
                            });
                            var a = e("./account");
                            Object.keys(a).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === a[e]) || (r[e] = a[e]));
                            });
                            var c = e("./trezor/device");
                            Object.keys(c).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === c[e]) || (r[e] = c[e]));
                            });
                            var l = e("./trezor/management");
                            Object.keys(l).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === l[e]) || (r[e] = l[e]));
                            });
                            var d = e("./networks/bitcoin");
                            Object.keys(d).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === d[e]) || (r[e] = d[e]));
                            });
                            var u = e("./networks/binance");
                            Object.keys(u).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === u[e]) || (r[e] = u[e]));
                            });
                            var h = e("./networks/cardano");
                            Object.keys(h).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === h[e]) || (r[e] = h[e]));
                            });
                            var p = e("./networks/coinInfo");
                            Object.keys(p).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === p[e]) || (r[e] = p[e]));
                            });
                            var g = e("./networks/eos");
                            Object.keys(g).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === g[e]) || (r[e] = g[e]));
                            });
                            var m = e("./networks/ethereum");
                            Object.keys(m).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === m[e]) || (r[e] = m[e]));
                            });
                            var f = e("./networks/nem");
                            Object.keys(f).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === f[e]) || (r[e] = f[e]));
                            });
                            var y = e("./networks/ripple");
                            Object.keys(y).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === y[e]) || (r[e] = y[e]));
                            });
                            var b = e("./networks/stellar");
                            Object.keys(b).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === b[e]) || (r[e] = b[e]));
                            });
                            var C = e("./networks/tezos");
                            Object.keys(C).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === C[e]) || (r[e] = C[e]));
                            });
                            var v = e("./backend/blockchain");
                            Object.keys(v).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === v[e]) || (r[e] = v[e]));
                            });
                            var w = e("./backend/transactions");
                            Object.keys(w).forEach(function (e) {
                                "default" !== e && "__esModule" !== e && ((e in r && r[e] === w[e]) || (r[e] = w[e]));
                            });
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5145,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5146,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5147,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5148,
            { "../trezor/protobuf": 5159 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.__esModule = !0),
                                (r.CardanoTxWitnessType = r.CardanoTxSigningMode = r.CardanoPoolRelayType = r.CardanoNativeScriptHashDisplayFormat = r.CardanoNativeScriptType = r.CardanoCertificateType = r.CardanoAddressType = void 0);
                            var n = e("../trezor/protobuf");
                            (r.CardanoAddressType = n.Enum_CardanoAddressType),
                                (r.CardanoCertificateType = n.Enum_CardanoCertificateType),
                                (r.CardanoNativeScriptType = n.Enum_CardanoNativeScriptType),
                                (r.CardanoNativeScriptHashDisplayFormat = n.Enum_CardanoNativeScriptHashDisplayFormat),
                                (r.CardanoPoolRelayType = n.Enum_CardanoPoolRelayType),
                                (r.CardanoTxSigningMode = n.Enum_CardanoTxSigningMode),
                                (r.CardanoTxWitnessType = n.Enum_CardanoTxWitnessType);
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5149,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5150,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5151,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5152,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5153,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5154,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5155,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5156,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5157,
            { "../../constants": 5123 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            e("../../constants");
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5158,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {};
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5159,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.__esModule = !0),
                                (r.Enum_TezosBallotType = r.Enum_TezosContractType = r.Enum_StellarSignerType = r.Enum_StellarMemoType = r.Enum_StellarAssetType = r.Enum_NEMImportanceTransferMode = r.Enum_NEMModificationType = r.Enum_NEMSupplyChangeType = r.Enum_NEMMosaicLevy = r.Enum_WordRequestType = r.Enum_RecoveryDeviceType = r.Enum_SdProtectOperationType = r.Enum_Capability = r.Enum_SafetyCheckLevel = r.Enum_BackupType = r.Enum_EthereumDataType = r.Enum_PinMatrixRequestType = r.Enum_ButtonRequestType = r.Enum_FailureType = r.Enum_CardanoTxWitnessType = r.Enum_CardanoTxSigningMode = r.Enum_CardanoTxAuxiliaryDataSupplementType = r.Enum_CardanoPoolRelayType = r.Enum_CardanoCertificateType = r.Enum_CardanoNativeScriptHashDisplayFormat = r.Enum_CardanoNativeScriptType = r.Enum_CardanoAddressType = r.Enum_CardanoDerivationType = r.Enum_RequestType = r.Enum_AmountUnit = r.Enum_DecredStakingSpendType = r.Enum_OutputScriptType = r.Enum_InputScriptType = r.Enum_BinanceTimeInForce = r.Enum_BinanceOrderSide = r.Enum_BinanceOrderType = void 0);
                            var n = Object.freeze({ OT_UNKNOWN: 0, MARKET: 1, LIMIT: 2, OT_RESERVED: 3 });
                            r.Enum_BinanceOrderType = n;
                            var s = Object.freeze({ SIDE_UNKNOWN: 0, BUY: 1, SELL: 2 });
                            r.Enum_BinanceOrderSide = s;
                            var o = Object.freeze({ TIF_UNKNOWN: 0, GTE: 1, TIF_RESERVED: 2, IOC: 3 });
                            r.Enum_BinanceTimeInForce = o;
                            var i = Object.freeze({ SPENDADDRESS: 0, SPENDMULTISIG: 1, EXTERNAL: 2, SPENDWITNESS: 3, SPENDP2SHWITNESS: 4, SPENDTAPROOT: 5 });
                            r.Enum_InputScriptType = i;
                            var a = Object.freeze({ PAYTOADDRESS: 0, PAYTOSCRIPTHASH: 1, PAYTOMULTISIG: 2, PAYTOOPRETURN: 3, PAYTOWITNESS: 4, PAYTOP2SHWITNESS: 5, PAYTOTAPROOT: 6 });
                            r.Enum_OutputScriptType = a;
                            var c = Object.freeze({ SSGen: 0, SSRTX: 1 });
                            r.Enum_DecredStakingSpendType = c;
                            var l = Object.freeze({ BITCOIN: 0, MILLIBITCOIN: 1, MICROBITCOIN: 2, SATOSHI: 3 });
                            r.Enum_AmountUnit = l;
                            var d = Object.freeze({ TXINPUT: 0, TXOUTPUT: 1, TXMETA: 2, TXFINISHED: 3, TXEXTRADATA: 4, TXORIGINPUT: 5, TXORIGOUTPUT: 6 });
                            r.Enum_RequestType = d;
                            var u = Object.freeze({ LEDGER: 0, ICARUS: 1, ICARUS_TREZOR: 2 });
                            r.Enum_CardanoDerivationType = u;
                            var h = Object.freeze({ BASE: 0, BASE_SCRIPT_KEY: 1, BASE_KEY_SCRIPT: 2, BASE_SCRIPT_SCRIPT: 3, POINTER: 4, POINTER_SCRIPT: 5, ENTERPRISE: 6, ENTERPRISE_SCRIPT: 7, BYRON: 8, REWARD: 14, REWARD_SCRIPT: 15 });
                            r.Enum_CardanoAddressType = h;
                            var p = Object.freeze({ PUB_KEY: 0, ALL: 1, ANY: 2, N_OF_K: 3, INVALID_BEFORE: 4, INVALID_HEREAFTER: 5 });
                            r.Enum_CardanoNativeScriptType = p;
                            var g = Object.freeze({ HIDE: 0, BECH32: 1, POLICY_ID: 2 });
                            r.Enum_CardanoNativeScriptHashDisplayFormat = g;
                            var m = Object.freeze({ STAKE_REGISTRATION: 0, STAKE_DEREGISTRATION: 1, STAKE_DELEGATION: 2, STAKE_POOL_REGISTRATION: 3 });
                            r.Enum_CardanoCertificateType = m;
                            var f = Object.freeze({ SINGLE_HOST_IP: 0, SINGLE_HOST_NAME: 1, MULTIPLE_HOST_NAME: 2 });
                            r.Enum_CardanoPoolRelayType = f;
                            var y = Object.freeze({ NONE: 0, CATALYST_REGISTRATION_SIGNATURE: 1 });
                            r.Enum_CardanoTxAuxiliaryDataSupplementType = y;
                            var b = Object.freeze({ ORDINARY_TRANSACTION: 0, POOL_REGISTRATION_AS_OWNER: 1, MULTISIG_TRANSACTION: 2 });
                            r.Enum_CardanoTxSigningMode = b;
                            var C = Object.freeze({ BYRON_WITNESS: 0, SHELLEY_WITNESS: 1 });
                            r.Enum_CardanoTxWitnessType = C;
                            var v = Object.freeze({
                                Failure_UnexpectedMessage: 1,
                                Failure_ButtonExpected: 2,
                                Failure_DataError: 3,
                                Failure_ActionCancelled: 4,
                                Failure_PinExpected: 5,
                                Failure_PinCancelled: 6,
                                Failure_PinInvalid: 7,
                                Failure_InvalidSignature: 8,
                                Failure_ProcessError: 9,
                                Failure_NotEnoughFunds: 10,
                                Failure_NotInitialized: 11,
                                Failure_PinMismatch: 12,
                                Failure_WipeCodeMismatch: 13,
                                Failure_InvalidSession: 14,
                                Failure_FirmwareError: 99,
                            });
                            r.Enum_FailureType = v;
                            var w = Object.freeze({
                                ButtonRequest_Other: 1,
                                ButtonRequest_FeeOverThreshold: 2,
                                ButtonRequest_ConfirmOutput: 3,
                                ButtonRequest_ResetDevice: 4,
                                ButtonRequest_ConfirmWord: 5,
                                ButtonRequest_WipeDevice: 6,
                                ButtonRequest_ProtectCall: 7,
                                ButtonRequest_SignTx: 8,
                                ButtonRequest_FirmwareCheck: 9,
                                ButtonRequest_Address: 10,
                                ButtonRequest_PublicKey: 11,
                                ButtonRequest_MnemonicWordCount: 12,
                                ButtonRequest_MnemonicInput: 13,
                                _Deprecated_ButtonRequest_PassphraseType: 14,
                                ButtonRequest_UnknownDerivationPath: 15,
                                ButtonRequest_RecoveryHomepage: 16,
                                ButtonRequest_Success: 17,
                                ButtonRequest_Warning: 18,
                                ButtonRequest_PassphraseEntry: 19,
                                ButtonRequest_PinEntry: 20,
                            });
                            r.Enum_ButtonRequestType = w;
                            var E = Object.freeze({ PinMatrixRequestType_Current: 1, PinMatrixRequestType_NewFirst: 2, PinMatrixRequestType_NewSecond: 3, PinMatrixRequestType_WipeCodeFirst: 4, PinMatrixRequestType_WipeCodeSecond: 5 });
                            r.Enum_PinMatrixRequestType = E;
                            var M = Object.freeze({ UINT: 1, INT: 2, BYTES: 3, STRING: 4, BOOL: 5, ADDRESS: 6, ARRAY: 7, STRUCT: 8 });
                            r.Enum_EthereumDataType = M;
                            var S = Object.freeze({ Bip39: 0, Slip39_Basic: 1, Slip39_Advanced: 2 });
                            r.Enum_BackupType = S;
                            var k = Object.freeze({ Strict: 0, PromptAlways: 1, PromptTemporarily: 2 });
                            r.Enum_SafetyCheckLevel = k;
                            var T = Object.freeze({
                                Capability_Bitcoin: 1,
                                Capability_Bitcoin_like: 2,
                                Capability_Binance: 3,
                                Capability_Cardano: 4,
                                Capability_Crypto: 5,
                                Capability_EOS: 6,
                                Capability_Ethereum: 7,
                                Capability_Lisk: 8,
                                Capability_Monero: 9,
                                Capability_NEM: 10,
                                Capability_Ripple: 11,
                                Capability_Stellar: 12,
                                Capability_Tezos: 13,
                                Capability_U2F: 14,
                                Capability_Shamir: 15,
                                Capability_ShamirGroups: 16,
                                Capability_PassphraseEntry: 17,
                            });
                            r.Enum_Capability = T;
                            var _ = Object.freeze({ DISABLE: 0, ENABLE: 1, REFRESH: 2 });
                            r.Enum_SdProtectOperationType = _;
                            var A = Object.freeze({ RecoveryDeviceType_ScrambledWords: 0, RecoveryDeviceType_Matrix: 1 });
                            r.Enum_RecoveryDeviceType = A;
                            var P = Object.freeze({ WordRequestType_Plain: 0, WordRequestType_Matrix9: 1, WordRequestType_Matrix6: 2 });
                            r.Enum_WordRequestType = P;
                            var I = Object.freeze({ MosaicLevy_Absolute: 1, MosaicLevy_Percentile: 2 });
                            r.Enum_NEMMosaicLevy = I;
                            var R = Object.freeze({ SupplyChange_Increase: 1, SupplyChange_Decrease: 2 });
                            r.Enum_NEMSupplyChangeType = R;
                            var O = Object.freeze({ CosignatoryModification_Add: 1, CosignatoryModification_Delete: 2 });
                            r.Enum_NEMModificationType = O;
                            var N = Object.freeze({ ImportanceTransfer_Activate: 1, ImportanceTransfer_Deactivate: 2 });
                            r.Enum_NEMImportanceTransferMode = N;
                            var x = Object.freeze({ NATIVE: 0, ALPHANUM4: 1, ALPHANUM12: 2 });
                            r.Enum_StellarAssetType = x;
                            var D = Object.freeze({ NONE: 0, TEXT: 1, ID: 2, HASH: 3, RETURN: 4 });
                            r.Enum_StellarMemoType = D;
                            var L = Object.freeze({ ACCOUNT: 0, PRE_AUTH: 1, HASH: 2 });
                            r.Enum_StellarSignerType = L;
                            var U = Object.freeze({ Implicit: 0, Originated: 1 });
                            r.Enum_TezosContractType = U;
                            var j = Object.freeze({ Yay: 0, Nay: 1, Pass: 2 });
                            r.Enum_TezosBallotType = j;
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5160,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.__esModule = !0), (r.getLog = r.enableLogByPrefix = r.enableLog = r.initLog = void 0);
                            var n = { DescriptorStream: "color: #77ab59", DeviceList: "color: #36802d", Device: "color: #bada55", Core: "color: #c9df8a", IFrame: "color: #FFFFFF; background: #f4a742;", Popup: "color: #f48a00" },
                                s = (function () {
                                    function e(e, t) {
                                        (this.prefix = e), (this.enabled = t), (this.messages = []), (this.css = n[e] || "color: #000000; background: #FFFFFF;");
                                    }
                                    var t = e.prototype;
                                    return (
                                        (t.addMessage = function (e, t) {
                                            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                                            this.messages.push({ level: e, prefix: t, message: n, timestamp: new Date().getTime() }), this.messages.length > 100 && this.messages.shift();
                                        }),
                                        (t.log = function () {
                                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            var n;
                                            (this.addMessage.apply(this, ["log", this.prefix].concat(t)), this.enabled) && (n = console).log.apply(n, [this.prefix].concat(t));
                                        }),
                                        (t.error = function () {
                                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            var n;
                                            (this.addMessage.apply(this, ["error", this.prefix].concat(t)), this.enabled) && (n = console).error.apply(n, [this.prefix].concat(t));
                                        }),
                                        (t.warn = function () {
                                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            var n;
                                            (this.addMessage.apply(this, ["warn", this.prefix].concat(t)), this.enabled) && (n = console).warn.apply(n, [this.prefix].concat(t));
                                        }),
                                        (t.debug = function () {
                                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                            var n;
                                            (this.addMessage.apply(this, ["debug", this.prefix].concat(t)), this.enabled) && (n = console).log.apply(n, ["%c" + this.prefix, this.css].concat(t));
                                        }),
                                        e
                                    );
                                })(),
                                o = {};
                            r.initLog = function (e, t) {
                                var r = new s(e, !!t);
                                return (o[e] = r), r;
                            };
                            r.enableLog = function (e) {
                                Object.keys(o).forEach(function (t) {
                                    o[t].enabled = e;
                                });
                            };
                            r.enableLogByPrefix = function (e, t) {
                                o[e] && (o[e].enabled = t);
                            };
                            r.getLog = function () {
                                var e = [];
                                return (
                                    Object.keys(o).forEach(function (t) {
                                        e = e.concat(o[t].messages);
                                    }),
                                    e.sort(function (e, t) {
                                        return e.timestamp - t.timestamp;
                                    }),
                                    e
                                );
                            };
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5161,
            { "@babel/runtime/helpers/asyncToGenerator": 172, "@babel/runtime/helpers/interopRequireDefault": 181, "@babel/runtime/regenerator": 200 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = e("@babel/runtime/helpers/interopRequireDefault");
                            (r.__esModule = !0),
                                (r.create = function (e, t) {
                                    var r,
                                        n = function (e) {},
                                        i = function (e) {},
                                        a = new Promise(
                                            (function () {
                                                var t = (0, o.default)(
                                                    s.default.mark(function t(o, a) {
                                                        return s.default.wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch ((t.prev = t.next)) {
                                                                        case 0:
                                                                            if (((n = o), (i = a), "function" != typeof e)) {
                                                                                t.next = 11;
                                                                                break;
                                                                            }
                                                                            return (t.prev = 3), (t.next = 6), e();
                                                                        case 6:
                                                                            t.next = 11;
                                                                            break;
                                                                        case 8:
                                                                            (t.prev = 8), (t.t0 = t.catch(3)), a(t.t0);
                                                                        case 11:
                                                                            "string" == typeof e && (r = e);
                                                                        case 12:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t,
                                                            null,
                                                            [[3, 8]]
                                                        );
                                                    })
                                                );
                                                return function (e, r) {
                                                    return t.apply(this, arguments);
                                                };
                                            })()
                                        );
                                    return { id: r, device: t, resolve: n, reject: i, promise: a };
                                }),
                                (r.createAsync = function (e) {
                                    var t = function (e) {},
                                        r = function (e) {},
                                        n = new Promise(function (e, n) {
                                            (t = e), (r = n);
                                        }),
                                        i = (function () {
                                            var t = (0, o.default)(
                                                s.default.mark(function t() {
                                                    return s.default.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), e();
                                                                case 2:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            );
                                            return function () {
                                                return t.apply(this, arguments);
                                            };
                                        })();
                                    return {
                                        resolve: t,
                                        reject: r,
                                        promise: n,
                                        run: function () {
                                            return i(), n;
                                        },
                                    };
                                }),
                                (r.resolveTimeoutPromise = function (e, t) {
                                    return new Promise(function (r) {
                                        setTimeout(function () {
                                            r(t);
                                        }, e);
                                    });
                                }),
                                (r.rejectTimeoutPromise = void 0);
                            var s = n(e("@babel/runtime/regenerator")),
                                o = n(e("@babel/runtime/helpers/asyncToGenerator"));
                            r.rejectTimeoutPromise = function (e, t) {
                                return new Promise(function (r, n) {
                                    setTimeout(function () {
                                        n(t);
                                    }, e);
                                });
                            };
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5162,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.__esModule = !0), (r.default = void 0);
                            var n = function (e, t, r) {
                                var n = e || ".trezor-webusb-button",
                                    s = document.querySelectorAll(n),
                                    o = t + "?" + Date.now();
                                s.forEach(function (e) {
                                    if (e.getElementsByTagName("iframe").length < 1) {
                                        var t = e.getBoundingClientRect(),
                                            n = document.createElement("iframe");
                                        (n.frameBorder = "0"),
                                            (n.width = Math.round(t.width) + "px"),
                                            (n.height = Math.round(t.height) + "px"),
                                            (n.style.position = "absolute"),
                                            (n.style.top = "0px"),
                                            (n.style.left = "0px"),
                                            (n.style.zIndex = "1"),
                                            n.setAttribute("allow", "usb"),
                                            n.setAttribute("scrolling", "no"),
                                            (n.onload = function () {
                                                n.contentWindow.postMessage({}, r);
                                            }),
                                            (n.src = o),
                                            e.append(n);
                                    }
                                });
                            };
                            r.default = n;
                        };
                    };
            },
            { package: "eth-trezor-keyring>trezor-connect" },
        ],
        [
            5166,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = function (e, t) {
                                t || (t = e.reduce((e, t) => e + t.length, 0));
                                const r = new Uint8Array(t);
                                let n = 0;
                                for (const t of e) r.set(t, n), (n += t.length);
                                return r;
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>cids>uint8arrays" },
        ],
        [
            5167,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = function (e, t) {
                                if (e === t) return !0;
                                if (e.byteLength !== t.byteLength) return !1;
                                for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
                                return !0;
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>cids>uint8arrays" },
        ],
        [
            5168,
            { multibase: 4719 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            const { encoding: n } = e("multibase"),
                                s = new TextEncoder();
                            t.exports = function (e, t = "utf8") {
                                return "utf8" === t || "utf-8" === t
                                    ? s.encode(e)
                                    : "ascii" === t
                                    ? (function (e) {
                                          const t = new Uint8Array(e.length);
                                          for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                                          return t;
                                      })(e)
                                    : n(t).decode(e);
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>cids>uint8arrays" },
        ],
        [
            5169,
            { multibase: 4719 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            const { encoding: n } = e("multibase"),
                                s = new TextDecoder("utf8");
                            t.exports = function (e, t = "utf8") {
                                return "utf8" === t || "utf-8" === t
                                    ? s.decode(e)
                                    : "ascii" === t
                                    ? (function (e) {
                                          let t = "";
                                          for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                                          return t;
                                      })(e)
                                    : n(t).encode(e);
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>cids>uint8arrays" },
        ],
        [
            5197,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = function e(t, r) {
                                var n,
                                    s = 0,
                                    o = 0,
                                    i = (r = r || 0),
                                    a = t.length;
                                do {
                                    if (i >= a) throw ((e.bytes = 0), new RangeError("Could not decode varint"));
                                    (n = t[i++]), (s += o < 28 ? (127 & n) << o : (127 & n) * Math.pow(2, o)), (o += 7);
                                } while (n >= 128);
                                return (e.bytes = i - r), s;
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>multihashes>varint" },
        ],
        [
            5198,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = function e(t, r, s) {
                                r = r || [];
                                var o = (s = s || 0);
                                for (; t >= n; ) (r[s++] = (255 & t) | 128), (t /= 128);
                                for (; -128 & t; ) (r[s++] = (255 & t) | 128), (t >>>= 7);
                                return (r[s] = 0 | t), (e.bytes = s - o + 1), r;
                            };
                            var n = Math.pow(2, 31);
                        };
                    };
            },
            { package: "@ensdomains/content-hash>multihashes>varint" },
        ],
        [
            5199,
            { "./decode.js": 5197, "./encode.js": 5198, "./length.js": 5200 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = { encode: e("./encode.js"), decode: e("./decode.js"), encodingLength: e("./length.js") };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>multihashes>varint" },
        ],
        [
            52,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/random-id": 5358,
                "../metamask-controller": 87,
                "./util": 86,
                "@metamask/obs-store": 1177,
                buffer: 1728,
                "eth-rpc-errors": 2032,
                "ethereumjs-util": 2107,
                events: 1729,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                                    var n = g(e("events")),
                                        s = e("@metamask/obs-store"),
                                        o = e("ethereumjs-util"),
                                        i = e("eth-rpc-errors"),
                                        a = g(e("loglevel")),
                                        c = e("../../../shared/constants/app"),
                                        l = e("../../../shared/constants/metametrics"),
                                        d = e("../metamask-controller"),
                                        u = g(e("../../../shared/modules/random-id")),
                                        h = e("../../../shared/modules/hexstring-utils"),
                                        p = e("./util");
                                    function g(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    const m = /^[0-9A-Fa-f]+$/gu;
                                    class f extends n.default {
                                        constructor(e) {
                                            super(), (this.memStore = new s.ObservableStore({ unapprovedDecryptMsgs: {}, unapprovedDecryptMsgCount: 0 })), (this.messages = []), (this.metricsEvent = e.metricsEvent);
                                        }
                                        get unapprovedDecryptMsgCount() {
                                            return Object.keys(this.getUnapprovedMsgs()).length;
                                        }
                                        getUnapprovedMsgs() {
                                            return this.messages.filter((e) => "unapproved" === e.status).reduce((e, t) => ((e[t.id] = t), e), {});
                                        }
                                        addUnapprovedMessageAsync(e, t) {
                                            return new Promise((r, n) => {
                                                if (!e.from) return void n(new Error("MetaMask Decryption: from field is required."));
                                                const s = this.addUnapprovedMessage(e, t);
                                                this.once(`${s}:finished`, (t) => {
                                                    switch (t.status) {
                                                        case "decrypted":
                                                            return void r(t.rawData);
                                                        case "rejected":
                                                            return void n(i.ethErrors.provider.userRejectedRequest("MetaMask Decryption: User denied message decryption."));
                                                        case "errored":
                                                            return void n(new Error("This message cannot be decrypted"));
                                                        default:
                                                            n(new Error(`MetaMask Decryption: Unknown problem: ${JSON.stringify(e)}`));
                                                    }
                                                });
                                            });
                                        }
                                        addUnapprovedMessage(e, t) {
                                            a.default.debug(`DecryptMessageManager addUnapprovedMessage: ${JSON.stringify(e)}`), t && (e.origin = t.origin), (e.data = this.normalizeMsgData(e.data));
                                            const r = new Date().getTime(),
                                                n = (0, u.default)(),
                                                s = { id: n, msgParams: e, time: r, status: "unapproved", type: c.MESSAGE_TYPE.ETH_DECRYPT };
                                            return this.addMsg(s), this.emit("update"), n;
                                        }
                                        addMsg(e) {
                                            this.messages.push(e), this._saveMsgList();
                                        }
                                        getMsg(e) {
                                            return this.messages.find((t) => t.id === e);
                                        }
                                        approveMessage(e) {
                                            return this.setMsgStatusApproved(e.metamaskId), this.prepMsgForDecryption(e);
                                        }
                                        setMsgStatusApproved(e) {
                                            this._setMsgStatus(e, "approved");
                                        }
                                        setMsgStatusDecrypted(e, t) {
                                            const r = this.getMsg(e);
                                            (r.rawData = t), this._updateMsg(r), this._setMsgStatus(e, "decrypted");
                                        }
                                        prepMsgForDecryption(e) {
                                            return delete e.metamaskId, Promise.resolve(e);
                                        }
                                        rejectMsg(e, t = undefined) {
                                            t && this.metricsEvent({ event: t, category: l.EVENT.CATEGORIES.MESSAGES, properties: { action: "Decrypt Message Request" } }), this._setMsgStatus(e, "rejected");
                                        }
                                        errorMessage(e, t) {
                                            const r = this.getMsg(e);
                                            (r.error = t), this._updateMsg(r), this._setMsgStatus(e, "errored");
                                        }
                                        clearUnapproved() {
                                            (this.messages = this.messages.filter((e) => "unapproved" !== e.status)), this._saveMsgList();
                                        }
                                        _setMsgStatus(e, t) {
                                            const r = this.getMsg(e);
                                            if (!r) throw new Error(`DecryptMessageManager - Message not found for id: "${e}".`);
                                            (r.status = t), this._updateMsg(r), this.emit(`${e}:${t}`, r), ("rejected" !== t && "decrypted" !== t && "errored" !== t) || this.emit(`${e}:finished`, r);
                                        }
                                        _updateMsg(e) {
                                            const t = this.messages.findIndex((t) => t.id === e.id);
                                            -1 !== t && (this.messages[t] = e), this._saveMsgList();
                                        }
                                        _saveMsgList() {
                                            const e = this.getUnapprovedMsgs(),
                                                t = Object.keys(e).length;
                                            this.memStore.updateState({ unapprovedDecryptMsgs: e, unapprovedDecryptMsgCount: t }), this.emit(d.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                        }
                                        normalizeMsgData(e) {
                                            try {
                                                const t = (0, h.stripHexPrefix)(e);
                                                if (t.match(m)) return (0, p.addHexPrefix)(t);
                                            } catch (e) {
                                                a.default.debug("Message was not hex encoded, interpreting as utf8.");
                                            }
                                            return (0, o.bufferToHex)(t.from(e, "utf8"));
                                        }
                                    }
                                    r.default = f;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5200,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = Math.pow(2, 7),
                                s = Math.pow(2, 14),
                                o = Math.pow(2, 21),
                                i = Math.pow(2, 28),
                                a = Math.pow(2, 35),
                                c = Math.pow(2, 42),
                                l = Math.pow(2, 49),
                                d = Math.pow(2, 56),
                                u = Math.pow(2, 63);
                            t.exports = function (e) {
                                return e < n ? 1 : e < s ? 2 : e < o ? 3 : e < i ? 4 : e < a ? 5 : e < c ? 6 : e < l ? 7 : e < d ? 8 : e < u ? 9 : 10;
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash>multihashes>varint" },
        ],
        [
            5203,
            { util: 1734 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (r.TextEncoder = "undefined" != typeof TextEncoder ? TextEncoder : e("util").TextEncoder), (r.TextDecoder = "undefined" != typeof TextDecoder ? TextDecoder : e("util").TextDecoder);
                        };
                    };
            },
            { package: "@ensdomains/content-hash>multihashes>web-encoding" },
        ],
        [
            527,
            { "./metamask-airgapped-keyring.cjs.development.js": 528, "./metamask-airgapped-keyring.cjs.production.min.js": 529 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            t.exports = e("./metamask-airgapped-keyring.cjs.production.min.js");
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring" },
        ],
        [
            528,
            { "@ethereumjs/tx": 328, "@keystonehq/base-eth-keyring": 491, "@keystonehq/bc-ur-registry-eth": 499, "@metamask/obs-store": 534, buffer: 1728, events: 1729, rlp: 5010, uuid: 5178 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var n,
                                        s = e("@keystonehq/base-eth-keyring"),
                                        o = e("events"),
                                        i = e("@metamask/obs-store"),
                                        a = e("@keystonehq/bc-ur-registry-eth"),
                                        c = e("uuid"),
                                        l = e("@ethereumjs/tx"),
                                        d = (n = e("rlp")) && "object" == typeof n && "default" in n ? n.default : n;
                                    class u extends o.EventEmitter {
                                        constructor() {
                                            if (
                                                (super(),
                                                (this.cleanSyncListeners = () => {
                                                    this.removeAllListeners("keystone-sync_success-hdkey"), this.removeAllListeners("keystone-sync_success-account"), this.removeAllListeners("keystone-sync_cancel");
                                                }),
                                                (this.cleanSignListeners = (e) => {
                                                    this.removeAllListeners(`${e}-signed`), this.removeAllListeners(`${e}-canceled`);
                                                }),
                                                (this.readCryptoHDKeyOrCryptoAccount = () =>
                                                    new Promise((e, r) => {
                                                        this.memStore.updateState({ sync: { reading: !0 } }),
                                                            this.on("keystone-sync_success-hdkey", (r) => {
                                                                const n = a.CryptoHDKey.fromCBOR(t.from(r, "hex"));
                                                                this.resetState(), e(n);
                                                            }),
                                                            this.on("keystone-sync_success-account", (r) => {
                                                                const n = a.CryptoAccount.fromCBOR(t.from(r, "hex"));
                                                                this.resetState(), e(n);
                                                            }),
                                                            this.on("keystone-sync_cancel", () => {
                                                                this.resetState(), r(new Error("KeystoneError#sync_cancel. Sync process canceled, please retry"));
                                                            });
                                                    })),
                                                (this.submitCryptoHDKey = (e) => {
                                                    this.emit("keystone-sync_success-hdkey", e);
                                                }),
                                                (this.submitCryptoAccount = (e) => {
                                                    this.emit("keystone-sync_success-account", e);
                                                }),
                                                (this.cancelSync = () => {
                                                    this.emit("keystone-sync_cancel");
                                                }),
                                                (this.requestSignature = (e, r, n) =>
                                                    new Promise((s, o) => {
                                                        const i = e.toUR(),
                                                            l = e.getRequestId(),
                                                            d = c.stringify(l),
                                                            u = { requestId: d, payload: { type: i.type, cbor: i.cbor.toString("hex") }, title: r, description: n };
                                                        this.memStore.updateState({ sign: { request: u } }),
                                                            this.once(`${d}-signed`, (e) => {
                                                                const r = a.ETHSignature.fromCBOR(t.from(e, "hex"));
                                                                this.resetState(), s(r);
                                                            }),
                                                            this.once(`${d}-canceled`, () => {
                                                                this.resetState(), o(new Error("KeystoneError#Tx_canceled. Signing canceled, please retry"));
                                                            });
                                                    })),
                                                (this.submitSignature = (e, t) => {
                                                    this.emit(`${e}-signed`, t);
                                                }),
                                                (this.cancelRequestSignature = () => {
                                                    const e = this.memStore.getState().sign.request;
                                                    if (e) {
                                                        const { requestId: t } = e;
                                                        this.memStore.updateState({ sign: {} }), this.emit(`${t}-canceled`);
                                                    }
                                                }),
                                                (this.reset = () => {
                                                    this.cleanSyncListeners();
                                                    const e = this.memStore.getState().sign.request;
                                                    if (e) {
                                                        const { requestId: t } = e;
                                                        this.cleanSignListeners(t);
                                                    }
                                                    this.resetState();
                                                }),
                                                (this.resetState = () => {
                                                    this.memStore.updateState({ sync: { reading: !1 }, sign: {} });
                                                }),
                                                u.instance)
                                            )
                                                return u.instance;
                                            (this.memStore = new i.ObservableStore({ sync: { reading: !1 }, sign: {}, _version: 1 })), (u.instance = this);
                                        }
                                    }
                                    class h extends s.BaseKeyring {
                                        constructor(e) {
                                            if (
                                                (super(e),
                                                (this.getInteraction = () => new u()),
                                                (this.resetStore = () => {
                                                    this.getInteraction().reset();
                                                }),
                                                (this.getMemStore = () => this.getInteraction().memStore),
                                                (this.removeAccount = (e) => {
                                                    if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase())) throw new Error(`Address ${e} not found in this keyring`);
                                                    this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                                                }),
                                                (this.forgetDevice = () => {
                                                    (this.page = 0),
                                                        (this.perPage = 5),
                                                        (this.accounts = []),
                                                        (this.currentAccount = 0),
                                                        (this.name = "QR Hardware"),
                                                        (this.initialized = !1),
                                                        (this.xfp = ""),
                                                        (this.xpub = ""),
                                                        (this.hdPath = ""),
                                                        (this.indexes = {}),
                                                        (this.hdk = undefined),
                                                        (this.paths = {});
                                                }),
                                                (this.submitCryptoHDKey = this.getInteraction().submitCryptoHDKey),
                                                (this.submitCryptoAccount = this.getInteraction().submitCryptoAccount),
                                                (this.submitSignature = this.getInteraction().submitSignature),
                                                (this.cancelSync = this.getInteraction().cancelSync),
                                                (this.cancelSignRequest = this.getInteraction().cancelRequestSignature),
                                                h.instance)
                                            )
                                                return h.instance.deserialize(e), h.instance;
                                            h.instance = this;
                                        }
                                        async signTransaction(e, t) {
                                            const r = 0 === t.type ? a.DataType.transaction : a.DataType.typedTransaction;
                                            let n;
                                            n = 0 === t.type ? d.encode(t.getMessageToSign(!1)) : t.getMessageToSign(!1);
                                            const s = await this._pathFromAddress(e),
                                                o = t.common.chainId(),
                                                i = c.v4(),
                                                u = a.EthSignRequest.constructETHRequest(n, r, s, this.xfp, i, o, e),
                                                { r: h, s: p, v: g } = await this.requestSignature(i, u, "Scan with your Keystone", 'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'),
                                                m = t.toJSON();
                                            (m.v = g), (m.s = p), (m.r = h), (m.type = t.type);
                                            return l.TransactionFactory.fromTxData(m, { common: t.common });
                                        }
                                    }
                                    (h.type = s.BaseKeyring.type), (r.MetaMaskKeyring = h);
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring" },
        ],
        [
            529,
            { "@ethereumjs/tx": 328, "@keystonehq/base-eth-keyring": 491, "@keystonehq/bc-ur-registry-eth": 499, "@metamask/obs-store": 534, buffer: 1728, events: 1729, rlp: 5010, uuid: 5178 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var n,
                                        s = e("@keystonehq/base-eth-keyring"),
                                        o = e("events"),
                                        i = e("@metamask/obs-store"),
                                        a = e("@keystonehq/bc-ur-registry-eth"),
                                        c = e("uuid"),
                                        l = e("@ethereumjs/tx"),
                                        d = (n = e("rlp")) && "object" == typeof n && "default" in n ? n.default : n;
                                    class u extends o.EventEmitter {
                                        constructor() {
                                            if (
                                                (super(),
                                                (this.cleanSyncListeners = () => {
                                                    this.removeAllListeners("keystone-sync_success-hdkey"), this.removeAllListeners("keystone-sync_success-account"), this.removeAllListeners("keystone-sync_cancel");
                                                }),
                                                (this.cleanSignListeners = (e) => {
                                                    this.removeAllListeners(e + "-signed"), this.removeAllListeners(e + "-canceled");
                                                }),
                                                (this.readCryptoHDKeyOrCryptoAccount = () =>
                                                    new Promise((e, r) => {
                                                        this.memStore.updateState({ sync: { reading: !0 } }),
                                                            this.on("keystone-sync_success-hdkey", (r) => {
                                                                const n = a.CryptoHDKey.fromCBOR(t.from(r, "hex"));
                                                                this.resetState(), e(n);
                                                            }),
                                                            this.on("keystone-sync_success-account", (r) => {
                                                                const n = a.CryptoAccount.fromCBOR(t.from(r, "hex"));
                                                                this.resetState(), e(n);
                                                            }),
                                                            this.on("keystone-sync_cancel", () => {
                                                                this.resetState(), r(new Error("KeystoneError#sync_cancel. Sync process canceled, please retry"));
                                                            });
                                                    })),
                                                (this.submitCryptoHDKey = (e) => {
                                                    this.emit("keystone-sync_success-hdkey", e);
                                                }),
                                                (this.submitCryptoAccount = (e) => {
                                                    this.emit("keystone-sync_success-account", e);
                                                }),
                                                (this.cancelSync = () => {
                                                    this.emit("keystone-sync_cancel");
                                                }),
                                                (this.requestSignature = (e, r, n) =>
                                                    new Promise((s, o) => {
                                                        const i = e.toUR(),
                                                            l = e.getRequestId(),
                                                            d = c.stringify(l),
                                                            u = { requestId: d, payload: { type: i.type, cbor: i.cbor.toString("hex") }, title: r, description: n };
                                                        this.memStore.updateState({ sign: { request: u } }),
                                                            this.once(d + "-signed", (e) => {
                                                                const r = a.ETHSignature.fromCBOR(t.from(e, "hex"));
                                                                this.resetState(), s(r);
                                                            }),
                                                            this.once(d + "-canceled", () => {
                                                                this.resetState(), o(new Error("KeystoneError#Tx_canceled. Signing canceled, please retry"));
                                                            });
                                                    })),
                                                (this.submitSignature = (e, t) => {
                                                    this.emit(e + "-signed", t);
                                                }),
                                                (this.cancelRequestSignature = () => {
                                                    const e = this.memStore.getState().sign.request;
                                                    if (e) {
                                                        const { requestId: t } = e;
                                                        this.memStore.updateState({ sign: {} }), this.emit(t + "-canceled");
                                                    }
                                                }),
                                                (this.reset = () => {
                                                    this.cleanSyncListeners();
                                                    const e = this.memStore.getState().sign.request;
                                                    if (e) {
                                                        const { requestId: t } = e;
                                                        this.cleanSignListeners(t);
                                                    }
                                                    this.resetState();
                                                }),
                                                (this.resetState = () => {
                                                    this.memStore.updateState({ sync: { reading: !1 }, sign: {} });
                                                }),
                                                u.instance)
                                            )
                                                return u.instance;
                                            (this.memStore = new i.ObservableStore({ sync: { reading: !1 }, sign: {}, _version: 1 })), (u.instance = this);
                                        }
                                    }
                                    class h extends s.BaseKeyring {
                                        constructor(e) {
                                            if (
                                                (super(e),
                                                (this.getInteraction = () => new u()),
                                                (this.resetStore = () => {
                                                    this.getInteraction().reset();
                                                }),
                                                (this.getMemStore = () => this.getInteraction().memStore),
                                                (this.removeAccount = (e) => {
                                                    if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase())) throw new Error(`Address ${e} not found in this keyring`);
                                                    this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                                                }),
                                                (this.forgetDevice = () => {
                                                    (this.page = 0),
                                                        (this.perPage = 5),
                                                        (this.accounts = []),
                                                        (this.currentAccount = 0),
                                                        (this.name = "QR Hardware"),
                                                        (this.initialized = !1),
                                                        (this.xfp = ""),
                                                        (this.xpub = ""),
                                                        (this.hdPath = ""),
                                                        (this.indexes = {}),
                                                        (this.hdk = void 0),
                                                        (this.paths = {});
                                                }),
                                                (this.submitCryptoHDKey = this.getInteraction().submitCryptoHDKey),
                                                (this.submitCryptoAccount = this.getInteraction().submitCryptoAccount),
                                                (this.submitSignature = this.getInteraction().submitSignature),
                                                (this.cancelSync = this.getInteraction().cancelSync),
                                                (this.cancelSignRequest = this.getInteraction().cancelRequestSignature),
                                                h.instance)
                                            )
                                                return h.instance.deserialize(e), h.instance;
                                            h.instance = this;
                                        }
                                        async signTransaction(e, t) {
                                            const r = 0 === t.type ? a.DataType.transaction : a.DataType.typedTransaction;
                                            let n;
                                            n = 0 === t.type ? d.encode(t.getMessageToSign(!1)) : t.getMessageToSign(!1);
                                            const s = await this._pathFromAddress(e),
                                                o = t.common.chainId(),
                                                i = c.v4(),
                                                u = a.EthSignRequest.constructETHRequest(n, r, s, this.xfp, i, o, e),
                                                { r: h, s: p, v: g } = await this.requestSignature(i, u, "Scan with your Keystone", 'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'),
                                                m = t.toJSON();
                                            return (m.v = g), (m.s = p), (m.r = h), (m.type = t.type), l.TransactionFactory.fromTxData(m, { common: t.common });
                                        }
                                    }
                                    (h.type = s.BaseKeyring.type), (r.MetaMaskKeyring = h);
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring" },
        ],
        [
            53,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/random-id": 5358,
                "../metamask-controller": 87,
                "@metamask/obs-store": 1177,
                "eth-rpc-errors": 2032,
                events: 1729,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = u(e("events")),
                                s = e("@metamask/obs-store"),
                                o = e("eth-rpc-errors"),
                                i = u(e("loglevel")),
                                a = e("../../../shared/constants/app"),
                                c = e("../../../shared/constants/metametrics"),
                                l = e("../metamask-controller"),
                                d = u(e("../../../shared/modules/random-id"));
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            class h extends n.default {
                                constructor(e) {
                                    super(), (this.memStore = new s.ObservableStore({ unapprovedEncryptionPublicKeyMsgs: {}, unapprovedEncryptionPublicKeyMsgCount: 0 })), (this.messages = []), (this.metricsEvent = e.metricsEvent);
                                }
                                get unapprovedEncryptionPublicKeyMsgCount() {
                                    return Object.keys(this.getUnapprovedMsgs()).length;
                                }
                                getUnapprovedMsgs() {
                                    return this.messages.filter((e) => "unapproved" === e.status).reduce((e, t) => ((e[t.id] = t), e), {});
                                }
                                addUnapprovedMessageAsync(e, t) {
                                    return new Promise((r, n) => {
                                        if (!e) return void n(new Error("MetaMask Message: address field is required."));
                                        const s = this.addUnapprovedMessage(e, t);
                                        this.once(`${s}:finished`, (t) => {
                                            switch (t.status) {
                                                case "received":
                                                    return void r(t.rawData);
                                                case "rejected":
                                                    return void n(o.ethErrors.provider.userRejectedRequest("MetaMask EncryptionPublicKey: User denied message EncryptionPublicKey."));
                                                default:
                                                    n(new Error(`MetaMask EncryptionPublicKey: Unknown problem: ${JSON.stringify(e)}`));
                                            }
                                        });
                                    });
                                }
                                addUnapprovedMessage(e, t) {
                                    i.default.debug("EncryptionPublicKeyManager addUnapprovedMessage: address");
                                    const r = new Date().getTime(),
                                        n = (0, d.default)(),
                                        s = { id: n, msgParams: e, time: r, status: "unapproved", type: a.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY };
                                    return t && (s.origin = t.origin), this.addMsg(s), this.emit("update"), n;
                                }
                                addMsg(e) {
                                    this.messages.push(e), this._saveMsgList();
                                }
                                getMsg(e) {
                                    return this.messages.find((t) => t.id === e);
                                }
                                approveMessage(e) {
                                    return this.setMsgStatusApproved(e.metamaskId), this.prepMsgForEncryptionPublicKey(e);
                                }
                                setMsgStatusApproved(e) {
                                    this._setMsgStatus(e, "approved");
                                }
                                setMsgStatusReceived(e, t) {
                                    const r = this.getMsg(e);
                                    (r.rawData = t), this._updateMsg(r), this._setMsgStatus(e, "received");
                                }
                                prepMsgForEncryptionPublicKey(e) {
                                    return delete e.metamaskId, Promise.resolve(e);
                                }
                                rejectMsg(e, t = undefined) {
                                    t && this.metricsEvent({ event: t, category: c.EVENT.CATEGORIES.MESSAGES, properties: { action: "Encryption public key Request" } }), this._setMsgStatus(e, "rejected");
                                }
                                errorMessage(e, t) {
                                    const r = this.getMsg(e);
                                    (r.error = t), this._updateMsg(r), this._setMsgStatus(e, "errored");
                                }
                                clearUnapproved() {
                                    (this.messages = this.messages.filter((e) => "unapproved" !== e.status)), this._saveMsgList();
                                }
                                _setMsgStatus(e, t) {
                                    const r = this.getMsg(e);
                                    if (!r) throw new Error(`EncryptionPublicKeyManager - Message not found for id: "${e}".`);
                                    (r.status = t), this._updateMsg(r), this.emit(`${e}:${t}`, r), ("rejected" !== t && "received" !== t) || this.emit(`${e}:finished`, r);
                                }
                                _updateMsg(e) {
                                    const t = this.messages.findIndex((t) => t.id === e.id);
                                    -1 !== t && (this.messages[t] = e), this._saveMsgList();
                                }
                                _saveMsgList() {
                                    const e = this.getUnapprovedMsgs(),
                                        t = Object.keys(e).length;
                                    this.memStore.updateState({ unapprovedEncryptionPublicKeyMsgs: e, unapprovedEncryptionPublicKeyMsgCount: t }), this.emit(l.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                }
                            }
                            r.default = h;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            530,
            { "./ObservableStore": 532 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.ComposedStore = void 0);
                            const n = e("./ObservableStore");
                            class s extends n.ObservableStore {
                                constructor(e) {
                                    super({}),
                                        (this._children = e || {}),
                                        Object.keys(this._children).forEach((e) => {
                                            const t = this._children[e];
                                            this._addChild(e, t);
                                        });
                                }
                                _addChild(e, t) {
                                    const r = (t) => {
                                        const r = this.getState();
                                        (r[e] = t), this.putState(r);
                                    };
                                    t.subscribe(r), r(t.getState());
                                }
                            }
                            r.ComposedStore = s;
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            531,
            { "./ObservableStore": 532 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.MergedStore = void 0);
                            const n = e("./ObservableStore");
                            class s extends n.ObservableStore {
                                constructor(e = []) {
                                    super({}), (this._children = e), e.forEach((e) => this._addChild(e)), this._updateWholeState();
                                }
                                _addChild(e) {
                                    e.subscribe(() => this._updateWholeState());
                                }
                                _updateWholeState() {
                                    const e = this._children.map((e) => e.getState()),
                                        t = Object.assign({}, ...e);
                                    this.putState(t);
                                }
                            }
                            r.MergedStore = s;
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            532,
            { "@metamask/safe-event-emitter": 1181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                (this && this.__importDefault) ||
                                function (e) {
                                    return e && e.__esModule ? e : { default: e };
                                };
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.ObservableStore = void 0);
                            const s = n(e("@metamask/safe-event-emitter"));
                            class o extends s.default {
                                constructor(e) {
                                    super(), (this._state = e || {});
                                }
                                getState() {
                                    return this._getState();
                                }
                                putState(e) {
                                    this._putState(e), this.emit("update", e);
                                }
                                updateState(e) {
                                    if (e && "object" == typeof e) {
                                        const t = this.getState();
                                        this.putState(Object.assign(Object.assign({}, t), e));
                                    } else this.putState(e);
                                }
                                subscribe(e) {
                                    this.on("update", e);
                                }
                                unsubscribe(e) {
                                    this.removeListener("update", e);
                                }
                                _getState() {
                                    return this._state;
                                }
                                _putState(e) {
                                    this._state = e;
                                }
                            }
                            r.ObservableStore = o;
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            5326,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM = r.AUTO_LOCK_TIMEOUT_ALARM = void 0);
                            r.AUTO_LOCK_TIMEOUT_ALARM = "AUTO_LOCK_TIMEOUT_ALARM";
                            r.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM = "METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            533,
            { stream: 1731 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.storeAsStream = void 0);
                            const n = e("stream");
                            class s extends n.Duplex {
                                constructor(e) {
                                    super({ objectMode: !0 }), this.resume(), (this.handler = (e) => this.push(e)), (this.obsStore = e), this.obsStore.subscribe(this.handler);
                                }
                                pipe(e, t) {
                                    const r = super.pipe(e, t);
                                    return e.write(this.obsStore.getState()), r;
                                }
                                _write(e, t, r) {
                                    this.obsStore.putState(e), r();
                                }
                                _read(e) {
                                    return undefined;
                                }
                                _destroy(e, t) {
                                    this.obsStore.unsubscribe(this.handler), super._destroy(e, t);
                                }
                            }
                            r.storeAsStream = function (e) {
                                return new s(e);
                            };
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            5335,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.PHISHING_NEW_ISSUE_URLS = void 0);
                            r.PHISHING_NEW_ISSUE_URLS = { MetaMask: "https://github.com/metamask/eth-phishing-detect/issues/new", PhishFort: "https://github.com/phishfort/phishfort-lists/issues/new" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5336,
            { "./time": 5338 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME = r.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER = r.FALLBACK_SMART_TRANSACTIONS_DEADLINE = void 0);
                            const n = 10 * e("./time").SECOND;
                            r.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME = n;
                            r.FALLBACK_SMART_TRANSACTIONS_DEADLINE = 180;
                            r.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER = 2;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            534,
            { "./ComposedStore": 530, "./MergedStore": 531, "./ObservableStore": 532, "./asStream": 533, "./transform": 535 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    (this && this.__createBinding) ||
                                    (Object.create
                                        ? function (e, t, r, n) {
                                              n === undefined && (n = r),
                                                  Object.defineProperty(e, n, {
                                                      enumerable: !0,
                                                      get: function () {
                                                          return t[r];
                                                      },
                                                  });
                                          }
                                        : function (e, t, r, n) {
                                              n === undefined && (n = r), (e[n] = t[r]);
                                          }),
                                s =
                                    (this && this.__exportStar) ||
                                    function (e, t) {
                                        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 }), s(e("./asStream"), r), s(e("./ComposedStore"), r), s(e("./MergedStore"), r), s(e("./ObservableStore"), r), s(e("./transform"), r);
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            535,
            { through2: 536 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.storeTransformStream = void 0);
                            const n = e("through2");
                            r.storeTransformStream = function (e) {
                                return n.obj((t, r, n) => {
                                    try {
                                        return n(null, e(t)), undefined;
                                    } catch (e) {
                                        return n(e), undefined;
                                    }
                                });
                            };
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store" },
        ],
        [
            536,
            { _process: 4801, "readable-stream": 4994, util: 1734, xtend: 5316 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (r) {
                                (function () {
                                    var n = e("readable-stream").Transform,
                                        s = e("util").inherits,
                                        o = e("xtend");
                                    function i(e) {
                                        n.call(this, e), (this._destroyed = !1);
                                    }
                                    function a(e, t, r) {
                                        r(null, e);
                                    }
                                    function c(e) {
                                        return function (t, r, n) {
                                            return "function" == typeof t && ((n = r), (r = t), (t = {})), "function" != typeof r && (r = a), "function" != typeof n && (n = null), e(t, r, n);
                                        };
                                    }
                                    s(i, n),
                                        (i.prototype.destroy = function (e) {
                                            if (!this._destroyed) {
                                                this._destroyed = !0;
                                                var t = this;
                                                r.nextTick(function () {
                                                    e && t.emit("error", e), t.emit("close");
                                                });
                                            }
                                        }),
                                        (t.exports = c(function (e, t, r) {
                                            var n = new i(e);
                                            return (n._transform = t), r && (n._flush = r), n;
                                        })),
                                        (t.exports.ctor = c(function (e, t, r) {
                                            function n(t) {
                                                if (!(this instanceof n)) return new n(t);
                                                (this.options = o(e, t)), i.call(this, this.options);
                                            }
                                            return s(n, i), (n.prototype._transform = t), r && (n.prototype._flush = r), n;
                                        })),
                                        (t.exports.obj = c(function (e, t, r) {
                                            var n = new i(o({ objectMode: !0, highWaterMark: 16 }, e));
                                            return (n._transform = t), r && (n._flush = r), n;
                                        }));
                                }.call(this));
                            }.call(this, e("_process")));
                        };
                    };
            },
            { package: "@keystonehq/metamask-airgapped-keyring>@metamask/obs-store>through2" },
        ],
        [
            54,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = [
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "resolver", outputs: [{ name: "", type: "address" }], payable: !1, type: "function" },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "owner", outputs: [{ name: "", type: "address" }], payable: !1, type: "function" },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "label", type: "bytes32" },
                                        { name: "owner", type: "address" },
                                    ],
                                    name: "setSubnodeOwner",
                                    outputs: [],
                                    payable: !1,
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "ttl", type: "uint64" },
                                    ],
                                    name: "setTTL",
                                    outputs: [],
                                    payable: !1,
                                    type: "function",
                                },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "ttl", outputs: [{ name: "", type: "uint64" }], payable: !1, type: "function" },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "resolver", type: "address" },
                                    ],
                                    name: "setResolver",
                                    outputs: [],
                                    payable: !1,
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "owner", type: "address" },
                                    ],
                                    name: "setOwner",
                                    outputs: [],
                                    payable: !1,
                                    type: "function",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "owner", type: "address" },
                                    ],
                                    name: "Transfer",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !0, name: "label", type: "bytes32" },
                                        { indexed: !1, name: "owner", type: "address" },
                                    ],
                                    name: "NewOwner",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "resolver", type: "address" },
                                    ],
                                    name: "NewResolver",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "ttl", type: "uint64" },
                                    ],
                                    name: "NewTTL",
                                    type: "event",
                                },
                            ];
                            r.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            55,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = [
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "hash", type: "bytes32" },
                                    ],
                                    name: "setContent",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "content", outputs: [{ name: "", type: "bytes32" }], payable: !1, stateMutability: "view", type: "function" },
                                { constant: !0, inputs: [{ name: "interfaceID", type: "bytes4" }], name: "supportsInterface", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "pure", type: "function" },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "key", type: "string" },
                                        { name: "value", type: "string" },
                                    ],
                                    name: "setText",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                {
                                    constant: !0,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "contentTypes", type: "uint256" },
                                    ],
                                    name: "ABI",
                                    outputs: [
                                        { name: "contentType", type: "uint256" },
                                        { name: "data", type: "bytes" },
                                    ],
                                    payable: !1,
                                    stateMutability: "view",
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "x", type: "bytes32" },
                                        { name: "y", type: "bytes32" },
                                    ],
                                    name: "setPubkey",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "hash", type: "bytes" },
                                    ],
                                    name: "setContenthash",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "addr", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" },
                                {
                                    constant: !0,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "key", type: "string" },
                                    ],
                                    name: "text",
                                    outputs: [{ name: "", type: "string" }],
                                    payable: !1,
                                    stateMutability: "view",
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "contentType", type: "uint256" },
                                        { name: "data", type: "bytes" },
                                    ],
                                    name: "setABI",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "name", outputs: [{ name: "", type: "string" }], payable: !1, stateMutability: "view", type: "function" },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "name", type: "string" },
                                    ],
                                    name: "setName",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                { constant: !0, inputs: [{ name: "node", type: "bytes32" }], name: "contenthash", outputs: [{ name: "", type: "bytes" }], payable: !1, stateMutability: "view", type: "function" },
                                {
                                    constant: !0,
                                    inputs: [{ name: "node", type: "bytes32" }],
                                    name: "pubkey",
                                    outputs: [
                                        { name: "x", type: "bytes32" },
                                        { name: "y", type: "bytes32" },
                                    ],
                                    payable: !1,
                                    stateMutability: "view",
                                    type: "function",
                                },
                                {
                                    constant: !1,
                                    inputs: [
                                        { name: "node", type: "bytes32" },
                                        { name: "addr", type: "address" },
                                    ],
                                    name: "setAddr",
                                    outputs: [],
                                    payable: !1,
                                    stateMutability: "nonpayable",
                                    type: "function",
                                },
                                { inputs: [{ name: "ensAddr", type: "address" }], payable: !1, stateMutability: "nonpayable", type: "constructor" },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "a", type: "address" },
                                    ],
                                    name: "AddrChanged",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "name", type: "string" },
                                    ],
                                    name: "NameChanged",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !0, name: "contentType", type: "uint256" },
                                    ],
                                    name: "ABIChanged",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "x", type: "bytes32" },
                                        { indexed: !1, name: "y", type: "bytes32" },
                                    ],
                                    name: "PubkeyChanged",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "indexedKey", type: "string" },
                                        { indexed: !1, name: "key", type: "string" },
                                    ],
                                    name: "TextChanged",
                                    type: "event",
                                },
                                {
                                    anonymous: !1,
                                    inputs: [
                                        { indexed: !0, name: "node", type: "bytes32" },
                                        { indexed: !1, name: "hash", type: "bytes" },
                                    ],
                                    name: "ContenthashChanged",
                                    type: "event",
                                },
                            ];
                            r.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            56,
            { "./contracts/registry": 54, "./contracts/resolver": 55, "@ensdomains/content-hash": 203, "eth-ens-namehash": 1954, "ethjs-contract": 2539, "ethjs-query": 2543 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.default = async function ({ provider: e, name: t }) {
                                    const r = new s.default(e),
                                        l = n.default.hash(t),
                                        u = new o.default(r),
                                        h = Number.parseInt(await r.net_version(), 10),
                                        p = (function (e) {
                                            switch (e) {
                                                case 1:
                                                case 3:
                                                case 4:
                                                case 5:
                                                case 6:
                                                    return "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                                                default:
                                                    return null;
                                            }
                                        })(h);
                                    if (!p) throw new Error(`EnsIpfsResolver - no known ens-ipfs registry for chainId "${h}"`);
                                    const g = u(a.default).at(p),
                                        m = (await g.resolver(l))[0];
                                    if (d(m)) throw new Error(`EnsIpfsResolver - no resolver found for name "${t}"`);
                                    const f = u(c.default).at(m),
                                        y = await f.supportsInterface("0xbc1c58d1"),
                                        b = await f.supportsInterface("0xd8389dc5");
                                    if (y[0]) {
                                        const e = (await f.contenthash(l))[0];
                                        let t = i.default.decode(e);
                                        const r = i.default.getCodec(e);
                                        return ("ipfs-ns" !== r && "ipns-ns" !== r) || (t = i.default.helpers.cidV0ToV1Base32(t)), { type: r, hash: t };
                                    }
                                    if (b[0]) {
                                        const e = (await f.content(l))[0];
                                        if (d(e)) throw new Error(`EnsIpfsResolver - no content ID found for name "${t}"`);
                                        return { type: "swarm-ns", hash: e.slice(2) };
                                    }
                                    throw new Error(`EnsIpfsResolver - the resolver for name "${t}" is not standard, it should either supports contenthash() or content()`);
                                });
                            var n = l(e("eth-ens-namehash")),
                                s = l(e("ethjs-query")),
                                o = l(e("ethjs-contract")),
                                i = l(e("@ensdomains/content-hash")),
                                a = l(e("./contracts/registry")),
                                c = l(e("./contracts/resolver"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                return [undefined, null, "0x", "0x0", "0x0000000000000000000000000000000000000000000000000000000000000000"].includes(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            57,
            { "../../../../shared/modules/fetch-with-timeout": 5352, "./resolver": 56, "base32-encode": 1633, "base64-js": 1634, "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.default = function ({ provider: e, getCurrentChainId: t, getIpfsGateway: r }) {
                                    const i = d.map((e) => `*://*.${e}/*`);
                                    return (
                                        o.default.webRequest.onErrorOccurred.addListener(c, { urls: i, types: ["main_frame"] }),
                                        {
                                            remove() {
                                                o.default.webRequest.onErrorOccurred.removeListener(c);
                                            },
                                        }
                                    );
                                    async function c(i) {
                                        const { tabId: c, url: u } = i;
                                        if (-1 === c || "0x1" !== t()) return;
                                        const { hostname: h, pathname: p, search: g, hash: m } = new URL(u),
                                            f = h.split("."),
                                            y = f[f.length - 1];
                                        d.includes(y) &&
                                            (async function ({ tabId: t, name: i, pathname: c, search: d, fragment: u }) {
                                                const h = r();
                                                o.default.tabs.update(t, { url: "loading.html" });
                                                let p = `https://app.ens.domains/name/${i}`;
                                                try {
                                                    const { type: r, hash: g } = await (0, a.default)({ provider: e, name: i });
                                                    if ("ipfs-ns" === r || "ipns-ns" === r) {
                                                        const e = `https://${g}.${r.slice(0, 4)}.${h}${c}${d || ""}${u || ""}`;
                                                        try {
                                                            200 === (await l(e, { method: "HEAD" })).status && (p = e);
                                                        } catch (e) {
                                                            console.warn(e);
                                                        }
                                                    } else if ("swarm-ns" === r) p = `https://swarm-gateways.net/bzz:/${g}${c}${d || ""}${u || ""}`;
                                                    else if ("onion" === r || "onion3" === r) p = `http://${g}.onion${c}${d || ""}${u || ""}`;
                                                    else if ("zeronet" === r) p = `http://127.0.0.1:43110/${g}${c}${d || ""}${u || ""}`;
                                                    else if ("skynet-ns" === r) {
                                                        const e = g.padEnd(g.length + 4 - (g.length % 4), "="),
                                                            t = s.default.toByteArray(e),
                                                            r = { padding: !1 };
                                                        p = `https://${(0, n.default)(t, "RFC4648-HEX", r).toLowerCase()}.siasky.net${c}${d || ""}${u || ""}`;
                                                    }
                                                } catch (e) {
                                                    console.warn(e);
                                                } finally {
                                                    o.default.tabs.update(t, { url: p });
                                                }
                                            })({ tabId: c, name: h, pathname: p, search: g, fragment: m });
                                    }
                                });
                            var n = c(e("base32-encode")),
                                s = c(e("base64-js")),
                                o = c(e("webextension-polyfill")),
                                i = c(e("../../../../shared/modules/fetch-with-timeout")),
                                a = c(e("./resolver"));
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const l = (0, i.default)(),
                                d = ["eth"];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            60,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.default = function (e) {
                                    return s((0, n.cloneDeep)(e), (e) => (null === e ? "null" : typeof e));
                                });
                            var n = e("lodash");
                            function s(e = {}, t) {
                                return (
                                    Object.entries(e).forEach(([r, n]) => {
                                        e[r] = "object" == typeof n && null !== n ? s(n, t) : t(n);
                                    }),
                                    e
                                );
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            61,
            { "./util": 86, "@sentry/browser": 1229, loglevel: 4707, "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = a(e("webextension-polyfill")),
                                s = a(e("loglevel")),
                                o = e("@sentry/browser"),
                                i = e("./util");
                            function a(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            r.default = class {
                                constructor() {
                                    (this.isSupported = Boolean(n.default.storage.local)), this.isSupported || s.default.error("Storage local API not available."), (this.dataPersistenceFailing = !1);
                                }
                                setMetadata(e) {
                                    this.metadata = e;
                                }
                                async set(e) {
                                    if (!this.isSupported) throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                                    if (!e) throw new Error("MetaMask - updated state is missing");
                                    if (!this.metadata) throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                                    try {
                                        await this._set({ data: e, meta: this.metadata }), this.dataPersistenceFailing && (this.dataPersistenceFailing = !1);
                                    } catch (e) {
                                        this.dataPersistenceFailing || ((this.dataPersistenceFailing = !0), (0, o.captureException)(e)), s.default.error("error setting state in local store:", e);
                                    }
                                }
                                async get() {
                                    if (!this.isSupported) return undefined;
                                    const e = await this._get();
                                    return (t = e), 0 === Object.keys(t).length ? undefined : e;
                                    var t;
                                }
                                _get() {
                                    const { local: e } = n.default.storage;
                                    return new Promise((t, r) => {
                                        e.get(null).then((e) => {
                                            const n = (0, i.checkForError)();
                                            n ? r(n) : t(e);
                                        });
                                    });
                                }
                                _set(e) {
                                    const { local: t } = n.default.storage;
                                    return new Promise((r, n) => {
                                        t.set(e).then(() => {
                                            const e = (0, i.checkForError)();
                                            e ? n(e) : r();
                                        });
                                    });
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            62,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/random-id": 5358,
                "../metamask-controller": 87,
                "@metamask/obs-store": 1177,
                buffer: 1728,
                "eth-rpc-errors": 2032,
                "ethereumjs-util": 2107,
                events: 1729,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0), (r.normalizeMsgData = p);
                                    var n = u(e("events")),
                                        s = e("@metamask/obs-store"),
                                        o = e("ethereumjs-util"),
                                        i = e("eth-rpc-errors"),
                                        a = e("../../../shared/constants/app"),
                                        c = e("../metamask-controller"),
                                        l = u(e("../../../shared/modules/random-id")),
                                        d = e("../../../shared/constants/metametrics");
                                    function u(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    class h extends n.default {
                                        constructor({ metricsEvent: e }) {
                                            super(), (this.memStore = new s.ObservableStore({ unapprovedMsgs: {}, unapprovedMsgCount: 0 })), (this.messages = []), (this.metricsEvent = e);
                                        }
                                        get unapprovedMsgCount() {
                                            return Object.keys(this.getUnapprovedMsgs()).length;
                                        }
                                        getUnapprovedMsgs() {
                                            return this.messages.filter((e) => "unapproved" === e.status).reduce((e, t) => ((e[t.id] = t), e), {});
                                        }
                                        async addUnapprovedMessageAsync(e, t) {
                                            const r = this.addUnapprovedMessage(e, t);
                                            return await new Promise((t, n) => {
                                                this.once(`${r}:finished`, (r) => {
                                                    switch (r.status) {
                                                        case "signed":
                                                            return t(r.rawSig);
                                                        case "rejected":
                                                            return n(i.ethErrors.provider.userRejectedRequest("MetaMask Message Signature: User denied message signature."));
                                                        case "errored":
                                                            return n(new Error(`MetaMask Message Signature: ${r.error}`));
                                                        default:
                                                            return n(new Error(`MetaMask Message Signature: Unknown problem: ${JSON.stringify(e)}`));
                                                    }
                                                });
                                            });
                                        }
                                        addUnapprovedMessage(e, t) {
                                            t && (e.origin = t.origin), (e.data = p(e.data));
                                            const r = new Date().getTime(),
                                                n = (0, l.default)(),
                                                s = { id: n, msgParams: e, time: r, status: "unapproved", type: a.MESSAGE_TYPE.ETH_SIGN };
                                            return this.addMsg(s), this.emit("update"), n;
                                        }
                                        addMsg(e) {
                                            this.messages.push(e), this._saveMsgList();
                                        }
                                        getMsg(e) {
                                            return this.messages.find((t) => t.id === e);
                                        }
                                        approveMessage(e) {
                                            return this.setMsgStatusApproved(e.metamaskId), this.prepMsgForSigning(e);
                                        }
                                        setMsgStatusApproved(e) {
                                            this._setMsgStatus(e, "approved");
                                        }
                                        setMsgStatusSigned(e, t) {
                                            const r = this.getMsg(e);
                                            (r.rawSig = t), this._updateMsg(r), this._setMsgStatus(e, "signed");
                                        }
                                        prepMsgForSigning(e) {
                                            return delete e.metamaskId, Promise.resolve(e);
                                        }
                                        rejectMsg(e, t = undefined) {
                                            if (t) {
                                                const r = this.getMsg(e);
                                                this.metricsEvent({ event: t, category: d.EVENT.CATEGORIES.TRANSACTIONS, properties: { action: "Sign Request", type: r.type } });
                                            }
                                            this._setMsgStatus(e, "rejected");
                                        }
                                        errorMessage(e, t) {
                                            const r = this.getMsg(e);
                                            (r.error = t), this._updateMsg(r), this._setMsgStatus(e, "errored");
                                        }
                                        clearUnapproved() {
                                            (this.messages = this.messages.filter((e) => "unapproved" !== e.status)), this._saveMsgList();
                                        }
                                        _setMsgStatus(e, t) {
                                            const r = this.getMsg(e);
                                            if (!r) throw new Error(`MessageManager - Message not found for id: "${e}".`);
                                            (r.status = t), this._updateMsg(r), this.emit(`${e}:${t}`, r), ("rejected" !== t && "signed" !== t) || this.emit(`${e}:finished`, r);
                                        }
                                        _updateMsg(e) {
                                            const t = this.messages.findIndex((t) => t.id === e.id);
                                            -1 !== t && (this.messages[t] = e), this._saveMsgList();
                                        }
                                        _saveMsgList() {
                                            const e = this.getUnapprovedMsgs(),
                                                t = Object.keys(e).length;
                                            this.memStore.updateState({ unapprovedMsgs: e, unapprovedMsgCount: t }), this.emit(c.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                        }
                                    }
                                    function p(e) {
                                        return "0x" === e.slice(0, 2) ? e : (0, o.bufferToHex)(t.from(e, "utf8"));
                                    }
                                    r.default = h;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            64,
            { events: 1729 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n,
                                s = (n = e("events")) && n.__esModule ? n : { default: n };
                            class o extends s.default {
                                constructor(e = {}) {
                                    super();
                                    const t = e.migrations || [];
                                    this.migrations = t.sort((e, t) => e.version - t.version);
                                    const r = this.migrations.slice(-1)[0];
                                    this.defaultVersion = e.defaultVersion || (r && r.version) || 0;
                                }
                                async migrateData(e = this.generateInitialState()) {
                                    const t = this.migrations.filter(function (t) {
                                        return t.version > e.meta.version;
                                    });
                                    for (const r of t)
                                        try {
                                            const t = await r.migrate(e);
                                            if (!t.data) throw new Error("Migrator - migration returned empty data");
                                            if (t.version !== undefined && t.meta.version !== r.version) throw new Error("Migrator - Migration did not update version number correctly");
                                            e = t;
                                        } catch (t) {
                                            const n = t.message;
                                            return (t.message = `MetaMask Migration Error #${r.version}: ${n}`), this.emit("error", t), e;
                                        }
                                    return e;
                                }
                                generateInitialState(e) {
                                    return { meta: { version: this.defaultVersion }, data: e };
                                }
                            }
                            r.default = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            65,
            { "../../../shared/modules/fetch-with-timeout": 5352, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = s(e("loglevel"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const o = (0, s(e("../../../shared/modules/fetch-with-timeout")).default)();
                            r.default = class {
                                constructor() {
                                    var e, t, r;
                                    (r = !0),
                                        (t = "isSupported") in (e = this) ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                                        (this._initialized = !1),
                                        (this._initializing = this._init()),
                                        (this._state = undefined);
                                }
                                async _init() {
                                    try {
                                        const e = await o("http://localhost:12345/state.json");
                                        e.ok && (this._state = await e.json());
                                    } catch (e) {
                                        n.default.debug(`Error loading network state: '${e.message}'`);
                                    } finally {
                                        this._initialized = !0;
                                    }
                                }
                                async get() {
                                    return this._initialized || (await this._initializing), this._state;
                                }
                                setMetadata(e) {
                                    this.metadata = e;
                                }
                                async set(e) {
                                    if (!this.isSupported) throw new Error("Metamask- cannot persist state to local store as this browser does not support this action");
                                    if (!e) throw new Error("MetaMask - updated state is missing");
                                    if (!this.metadata) throw new Error('MetaMask - metadata must be set on instance of ExtensionStore before calling "set"');
                                    this._initialized || (await this._initializing), (this._state = { data: e, meta: this._metadata });
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            66,
            { "../platforms/extension": 164, "safe-event-emitter": 5013 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.NOTIFICATION_MANAGER_EVENTS = void 0);
                            var n = o(e("safe-event-emitter")),
                                s = o(e("../platforms/extension"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = { POPUP_CLOSED: "onPopupClosed" };
                            r.NOTIFICATION_MANAGER_EVENTS = i;
                            class a extends n.default {
                                constructor() {
                                    super(), (this.platform = new s.default()), this.platform.addOnRemovedListener(this._onWindowClosed.bind(this));
                                }
                                markAsAutomaticallyClosed() {
                                    this._popupAutomaticallyClosed = !0;
                                }
                                async showPopup() {
                                    const e = await this._getPopup();
                                    if (e) await this.platform.focusWindow(e.id);
                                    else {
                                        let e = 0,
                                            t = 0;
                                        try {
                                            const r = await this.platform.getLastFocusedWindow();
                                            (t = r.top), (e = r.left + (r.width - 360));
                                        } catch (r) {
                                            const { screenX: n, screenY: s, outerWidth: o } = window;
                                            (t = Math.max(s, 0)), (e = Math.max(n + (o - 360), 0));
                                        }
                                        const r = await this.platform.openWindow({ url: "notification.html", type: "popup", width: 360, height: 620, left: e, top: t });
                                        r.left !== e && "fullscreen" !== r.state && (await this.platform.updateWindowPosition(r.id, e, t)), (this._popupId = r.id);
                                    }
                                }
                                _onWindowClosed(e) {
                                    e === this._popupId && ((this._popupId = undefined), this.emit(i.POPUP_CLOSED, { automaticallyClosed: this._popupAutomaticallyClosed }), (this._popupAutomaticallyClosed = undefined));
                                }
                                async _getPopup() {
                                    const e = await this.platform.getAllWindows();
                                    return this._getPopupIn(e);
                                }
                                _getPopupIn(e) {
                                    return e ? e.find((e) => e && "popup" === e.type && e.id === this._popupId) : null;
                                }
                            }
                            r.default = a;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            67,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/random-id": 5358,
                "../../../shared/modules/siwe": 5360,
                "../metamask-controller": 87,
                "./util": 86,
                "@metamask/obs-store": 1177,
                buffer: 1728,
                "eth-rpc-errors": 2032,
                "ethereumjs-util": 2107,
                events: 1729,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                                    var n = m(e("events")),
                                        s = e("@metamask/obs-store"),
                                        o = e("ethereumjs-util"),
                                        i = e("eth-rpc-errors"),
                                        a = m(e("loglevel")),
                                        c = e("../../../shared/constants/app"),
                                        l = e("../metamask-controller"),
                                        d = m(e("../../../shared/modules/random-id")),
                                        u = e("../../../shared/constants/metametrics"),
                                        h = e("../../../shared/modules/siwe"),
                                        p = e("../../../shared/modules/hexstring-utils"),
                                        g = e("./util");
                                    function m(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    const f = /^[0-9A-Fa-f]+$/gu;
                                    class y extends n.default {
                                        constructor({ metricsEvent: e }) {
                                            super(), (this.memStore = new s.ObservableStore({ unapprovedPersonalMsgs: {}, unapprovedPersonalMsgCount: 0 })), (this.messages = []), (this.metricsEvent = e);
                                        }
                                        get unapprovedPersonalMsgCount() {
                                            return Object.keys(this.getUnapprovedMsgs()).length;
                                        }
                                        getUnapprovedMsgs() {
                                            return this.messages.filter((e) => "unapproved" === e.status).reduce((e, t) => ((e[t.id] = t), e), {});
                                        }
                                        addUnapprovedMessageAsync(e, t) {
                                            return new Promise((r, n) => {
                                                if (!e.from) return void n(new Error("MetaMask Message Signature: from field is required."));
                                                const s = this.addUnapprovedMessage(e, t);
                                                this.once(`${s}:finished`, (t) => {
                                                    switch (t.status) {
                                                        case "signed":
                                                            return void r(t.rawSig);
                                                        case "rejected":
                                                            return void n(i.ethErrors.provider.userRejectedRequest("MetaMask Message Signature: User denied message signature."));
                                                        case "errored":
                                                            return void n(new Error(`MetaMask Message Signature: ${t.error}`));
                                                        default:
                                                            n(new Error(`MetaMask Message Signature: Unknown problem: ${JSON.stringify(e)}`));
                                                    }
                                                });
                                            });
                                        }
                                        addUnapprovedMessage(e, t) {
                                            a.default.debug(`PersonalMessageManager addUnapprovedMessage: ${JSON.stringify(e)}`), t && (e.origin = t.origin), (e.data = this.normalizeMsgData(e.data));
                                            const r = (0, h.detectSIWE)(e);
                                            e.siwe = r;
                                            const n = new Date().getTime(),
                                                s = (0, d.default)(),
                                                o = { id: s, msgParams: e, time: n, status: "unapproved", type: c.MESSAGE_TYPE.PERSONAL_SIGN };
                                            return this.addMsg(o), this.emit("update"), s;
                                        }
                                        addMsg(e) {
                                            this.messages.push(e), this._saveMsgList();
                                        }
                                        getMsg(e) {
                                            return this.messages.find((t) => t.id === e);
                                        }
                                        approveMessage(e) {
                                            return this.setMsgStatusApproved(e.metamaskId), this.prepMsgForSigning(e);
                                        }
                                        setMsgStatusApproved(e) {
                                            this._setMsgStatus(e, "approved");
                                        }
                                        setMsgStatusSigned(e, t) {
                                            const r = this.getMsg(e);
                                            (r.rawSig = t), this._updateMsg(r), this._setMsgStatus(e, "signed");
                                        }
                                        prepMsgForSigning(e) {
                                            return delete e.metamaskId, Promise.resolve(e);
                                        }
                                        rejectMsg(e, t = undefined) {
                                            if (t) {
                                                const r = this.getMsg(e);
                                                this.metricsEvent({ event: t, category: u.EVENT.CATEGORIES.TRANSACTIONS, properties: { action: "Sign Request", type: r.type } });
                                            }
                                            this._setMsgStatus(e, "rejected");
                                        }
                                        errorMessage(e, t) {
                                            const r = this.getMsg(e);
                                            (r.error = t), this._updateMsg(r), this._setMsgStatus(e, "errored");
                                        }
                                        clearUnapproved() {
                                            (this.messages = this.messages.filter((e) => "unapproved" !== e.status)), this._saveMsgList();
                                        }
                                        _setMsgStatus(e, t) {
                                            const r = this.getMsg(e);
                                            if (!r) throw new Error(`PersonalMessageManager - Message not found for id: "${e}".`);
                                            (r.status = t), this._updateMsg(r), this.emit(`${e}:${t}`, r), ("rejected" !== t && "signed" !== t) || this.emit(`${e}:finished`, r);
                                        }
                                        _updateMsg(e) {
                                            const t = this.messages.findIndex((t) => t.id === e.id);
                                            -1 !== t && (this.messages[t] = e), this._saveMsgList();
                                        }
                                        _saveMsgList() {
                                            const e = this.getUnapprovedMsgs(),
                                                t = Object.keys(e).length;
                                            this.memStore.updateState({ unapprovedPersonalMsgs: e, unapprovedPersonalMsgCount: t }), this.emit(l.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                        }
                                        normalizeMsgData(e) {
                                            try {
                                                const t = (0, p.stripHexPrefix)(e);
                                                if (t.match(f)) return (0, g.addHexPrefix)(t);
                                            } catch (e) {
                                                a.default.debug("Message was not hex encoded, interpreting as utf8.");
                                            }
                                            return (0, o.bufferToHex)(t.from(e, "utf8"));
                                        }
                                    }
                                    r.default = y;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            68,
            { "../../../../shared/constants/network": 5333, "./handlers": 72, "@metamask/controllers": 1034, "@metamask/rpc-methods/dist/utils": 1180, "eth-rpc-errors": 2032, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.createMethodMiddleware = function (e) {
                                    const t = u.filter((t) => !Object.hasOwnProperty.call(e, t));
                                    if (t.length > 0) throw new Error(`Missing expected hooks:\n\n${t.join("\n")}\n`);
                                    return async function (t, r, n, s) {
                                        if (c.UNSUPPORTED_RPC_METHODS.has(t.method)) return s(i.ethErrors.rpc.methodNotSupported());
                                        const a = d.get(t.method);
                                        if (a) {
                                            const { implementation: i, hookNames: c } = a;
                                            try {
                                                return await i(t, r, n, s, (0, o.selectHooks)(e, c));
                                            } catch (e) {
                                                return console.error(e), s(e);
                                            }
                                        }
                                        return n();
                                    };
                                });
                            var n,
                                s = e("@metamask/controllers"),
                                o = e("@metamask/rpc-methods/dist/utils"),
                                i = e("eth-rpc-errors"),
                                a = e("lodash"),
                                c = e("../../../../shared/constants/network");
                            const l = [...((n = e("./handlers")) && n.__esModule ? n : { default: n }).default, ...s.permissionRpcMethods.handlers],
                                d = l.reduce((e, t) => {
                                    for (const r of t.methodNames) e.set(r, t);
                                    return e;
                                }, new Map()),
                                u = Array.from(new Set((0, a.flatten)(l.map(({ hookNames: e }) => Object.keys(e)))).values());
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            69,
            {
                "../../../../../shared/constants/app": 5328,
                "../../../../../shared/constants/metametrics": 5332,
                "../../../../../shared/constants/network": 5333,
                "../../../../../shared/modules/network.utils": 5356,
                "../../../../../shared/modules/rpc.utils": 5359,
                "eth-rpc-errors": 2032,
                lodash: 4694,
                "valid-url": 5193,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n,
                                s = e("eth-rpc-errors"),
                                o = (n = e("valid-url")) && n.__esModule ? n : { default: n },
                                i = e("lodash"),
                                a = e("../../../../../shared/constants/app"),
                                c = e("../../../../../shared/constants/metametrics"),
                                l = e("../../../../../shared/modules/network.utils"),
                                d = e("../../../../../shared/modules/rpc.utils"),
                                u = e("../../../../../shared/constants/network");
                            var h = {
                                methodNames: [a.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN],
                                implementation: async function (e, t, r, n, { addCustomRpc: h, getCurrentChainId: p, getCurrentRpcUrl: g, findCustomRpcBy: m, updateRpcTarget: f, requestUserApproval: y, sendMetrics: b }) {
                                    var C;
                                    if (null === (C = e.params) || void 0 === C || !C[0] || "object" != typeof e.params[0])
                                        return n(s.ethErrors.rpc.invalidParams({ message: `Expected single, object parameter. Received:\n${JSON.stringify(e.params)}` }));
                                    const { origin: v } = e,
                                        { chainId: w, chainName: E = null, blockExplorerUrls: M = null, nativeCurrency: S = null, rpcUrls: k } = e.params[0],
                                        T = Object.keys((0, i.omit)(e.params[0], ["chainId", "chainName", "blockExplorerUrls", "iconUrls", "rpcUrls", "nativeCurrency"]));
                                    if (T.length > 0) return n(s.ethErrors.rpc.invalidParams({ message: `Received unexpected keys on object parameter. Unsupported keys:\n${T}` }));
                                    const _ = (e) => {
                                            try {
                                                const t = new URL(e);
                                                return "localhost" === t.hostname || "127.0.0.1" === t.hostname;
                                            } catch (e) {
                                                return !1;
                                            }
                                        },
                                        A = Array.isArray(k) ? k.find((e) => _(e) || o.default.isHttpsUri(e)) : null,
                                        P = null !== M && Array.isArray(M) ? M.find((e) => _(e) || o.default.isHttpsUri(e)) : null;
                                    if (!A) return n(s.ethErrors.rpc.invalidParams({ message: `Expected an array with at least one valid string HTTPS url 'rpcUrls', Received:\n${k}` }));
                                    if (null !== M && !P) return n(s.ethErrors.rpc.invalidParams({ message: `Expected null or array with at least one valid string HTTPS URL 'blockExplorerUrl'. Received: ${M}` }));
                                    const I = "string" == typeof w && w.toLowerCase();
                                    if (!(0, l.isPrefixedFormattedHexString)(I)) return n(s.ethErrors.rpc.invalidParams({ message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${w}` }));
                                    if (!(0, l.isSafeChainId)(parseInt(I, 16))) return n(s.ethErrors.rpc.invalidParams({ message: `Invalid chain ID "${I}": numerical value greater than max safe value. Received:\n${w}` }));
                                    if (u.CHAIN_ID_TO_NETWORK_ID_MAP[I]) return n(s.ethErrors.rpc.invalidParams({ message: "May not specify default MetaMask chain." }));
                                    const R = m({ chainId: I });
                                    if (R && R.rpcUrl === A) {
                                        t.result = null;
                                        const e = p(),
                                            r = g();
                                        if (e === I && r === A) return n();
                                        try {
                                            await f(await y({ origin: v, type: a.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN, requestData: { rpcUrl: R.rpcUrl, chainId: R.chainId, nickname: R.nickname, ticker: R.ticker } })), (t.result = null);
                                        } catch (e) {
                                            if (e.code !== s.errorCodes.provider.userRejectedRequest) return n(e);
                                        }
                                        return n();
                                    }
                                    let O;
                                    try {
                                        O = await (0, d.jsonRpcRequest)(A, "eth_chainId");
                                    } catch (e) {
                                        return n(s.ethErrors.rpc.internal({ message: `Request for method 'eth_chainId on ${A} failed`, data: { networkErr: e } }));
                                    }
                                    if (I !== O) return n(s.ethErrors.rpc.invalidParams({ message: `Chain ID returned by RPC URL ${A} does not match ${I}`, data: { chainId: O } }));
                                    if ("string" != typeof E || !E) return n(s.ethErrors.rpc.invalidParams({ message: `Expected non-empty string 'chainName'. Received:\n${E}` }));
                                    const N = E.length > 100 ? E.substring(0, 100) : E;
                                    if (null !== S) {
                                        if ("object" != typeof S || Array.isArray(S)) return n(s.ethErrors.rpc.invalidParams({ message: `Expected null or object 'nativeCurrency'. Received:\n${S}` }));
                                        if (18 !== S.decimals) return n(s.ethErrors.rpc.invalidParams({ message: `Expected the number 18 for 'nativeCurrency.decimals' when 'nativeCurrency' is provided. Received: ${S.decimals}` }));
                                        if (!S.symbol || "string" != typeof S.symbol) return n(s.ethErrors.rpc.invalidParams({ message: `Expected a string 'nativeCurrency.symbol'. Received: ${S.symbol}` }));
                                    }
                                    const x = (null == S ? void 0 : S.symbol) || a.UNKNOWN_TICKER_SYMBOL;
                                    if (x !== a.UNKNOWN_TICKER_SYMBOL && ("string" != typeof x || x.length < 2 || x.length > 6))
                                        return n(s.ethErrors.rpc.invalidParams({ message: `Expected 2-6 character string 'nativeCurrency.symbol'. Received:\n${x}` }));
                                    if (R && R.chainId === I && R.ticker !== x)
                                        return n(s.ethErrors.rpc.invalidParams({ message: `nativeCurrency.symbol does not match currency symbol for a network the user already has added with the same chainId. Received:\n${x}` }));
                                    try {
                                        let e;
                                        await h(await y({ origin: v, type: a.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN, requestData: { chainId: I, blockExplorerUrl: P, chainName: N, rpcUrl: A, ticker: x } }));
                                        try {
                                            e = new URL(A).origin;
                                        } catch {}
                                        b({
                                            event: "Custom Network Added",
                                            category: c.EVENT.CATEGORIES.NETWORK,
                                            referrer: { url: v },
                                            properties: { chain_id: I, network_name: N, network: e, symbol: x, block_explorer_url: P, source: c.EVENT.SOURCE.TRANSACTION.DAPP },
                                            sensitiveProperties: { rpc_url: e },
                                        }),
                                            (t.result = null);
                                    } catch (e) {
                                        return n(e);
                                    }
                                    try {
                                        await f(await y({ origin: v, type: a.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN, requestData: { rpcUrl: A, chainId: I, nickname: N, ticker: x } }));
                                    } catch (e) {
                                        if (e.code !== s.errorCodes.provider.userRejectedRequest) return n(e);
                                    }
                                    return n();
                                },
                                hookNames: { addCustomRpc: !0, getCurrentChainId: !0, getCurrentRpcUrl: !0, findCustomRpcBy: !0, updateRpcTarget: !0, requestUserApproval: !0, sendMetrics: !0 },
                            };
                            r.default = h;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            7,
            { "../../../shared/constants/alerts": 5327, "@metamask/obs-store": 1177 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("@metamask/obs-store"),
                                s = e("../../../shared/constants/alerts");
                            const o = { alertEnabledness: s.TOGGLEABLE_ALERT_TYPES.reduce((e, t) => ((e[t] = !0), e), {}), unconnectedAccountAlertShownOrigins: {}, web3ShimUsageOrigins: {} };
                            r.default = class {
                                constructor(e = {}) {
                                    const { initState: t = {}, preferencesStore: r } = e,
                                        s = { ...o, alertEnabledness: { ...o.alertEnabledness, ...t.alertEnabledness } };
                                    (this.store = new n.ObservableStore(s)),
                                        (this.selectedAddress = r.getState().selectedAddress),
                                        r.subscribe(({ selectedAddress: e }) => {
                                            this.store.getState().unconnectedAccountAlertShownOrigins && this.selectedAddress !== e && ((this.selectedAddress = e), this.store.updateState({ unconnectedAccountAlertShownOrigins: {} }));
                                        });
                                }
                                setAlertEnabledness(e, t) {
                                    let { alertEnabledness: r } = this.store.getState();
                                    (r = { ...r }), (r[e] = t), this.store.updateState({ alertEnabledness: r });
                                }
                                setUnconnectedAccountAlertShown(e) {
                                    let { unconnectedAccountAlertShownOrigins: t } = this.store.getState();
                                    (t = { ...t }), (t[e] = !0), this.store.updateState({ unconnectedAccountAlertShownOrigins: t });
                                }
                                getWeb3ShimUsageState(e) {
                                    return this.store.getState().web3ShimUsageOrigins[e];
                                }
                                setWeb3ShimUsageRecorded(e) {
                                    this._setWeb3ShimUsageState(e, s.WEB3_SHIM_USAGE_ALERT_STATES.RECORDED);
                                }
                                setWeb3ShimUsageAlertDismissed(e) {
                                    this._setWeb3ShimUsageState(e, s.WEB3_SHIM_USAGE_ALERT_STATES.DISMISSED);
                                }
                                _setWeb3ShimUsageState(e, t) {
                                    let { web3ShimUsageOrigins: r } = this.store.getState();
                                    (r = { ...r }), (r[e] = t), this.store.updateState({ web3ShimUsageOrigins: r });
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            70,
            { "../../../../../shared/constants/app": 5328 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = {
                                methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.ETH_ACCOUNTS],
                                implementation: async function (e, t, r, n, { getAccounts: s }) {
                                    return (t.result = await s()), n();
                                },
                                hookNames: { getAccounts: !0 },
                            };
                            r.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            71,
            { "../../../../../shared/constants/app": 5328 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = {
                                methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.GET_PROVIDER_STATE],
                                implementation: async function (e, t, r, n, { getProviderState: s }) {
                                    return (t.result = { ...(await s(e.origin)) }), n();
                                },
                                hookNames: { getProviderState: !0 },
                            };
                            r.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            72,
            { "./add-ethereum-chain": 69, "./eth-accounts": 70, "./get-provider-state": 71, "./log-web3-shim-usage": 73, "./request-accounts": 74, "./send-metadata": 75, "./switch-ethereum-chain": 76, "./watch-asset": 77 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = u(e("./add-ethereum-chain")),
                                s = u(e("./eth-accounts")),
                                o = u(e("./get-provider-state")),
                                i = u(e("./log-web3-shim-usage")),
                                a = u(e("./request-accounts")),
                                c = u(e("./send-metadata")),
                                l = u(e("./switch-ethereum-chain")),
                                d = u(e("./watch-asset"));
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            var h = [n.default, s.default, o.default, i.default, a.default, c.default, l.default, d.default];
                            r.default = h;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            73,
            { "../../../../../shared/constants/app": 5328, "../../../../../shared/constants/metametrics": 5332 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("../../../../../shared/constants/app"),
                                s = e("../../../../../shared/constants/metametrics");
                            var o = {
                                methodNames: [n.MESSAGE_TYPE.LOG_WEB3_SHIM_USAGE],
                                implementation: function (e, t, r, n, { sendMetrics: o, getWeb3ShimUsageState: i, setWeb3ShimUsageRecorded: a }) {
                                    const { origin: c } = e;
                                    i(c) === undefined && (a(c), o({ event: "Website Accessed window.web3 Shim", category: s.EVENT.CATEGORIES.INPAGE_PROVIDER, referrer: { url: c } }, { excludeMetaMetricsId: !0 }));
                                    return (t.result = !0), n();
                                },
                                hookNames: { sendMetrics: !0, getWeb3ShimUsageState: !0, setWeb3ShimUsageRecorded: !0 },
                            };
                            r.default = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            74,
            { "../../../../../shared/constants/app": 5328, "eth-rpc-errors": 2032 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("eth-rpc-errors"),
                                s = e("../../../../../shared/constants/app");
                            var o = {
                                methodNames: [s.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS],
                                implementation: async function (e, t, r, o, { origin: a, getAccounts: c, getUnlockPromise: l, hasPermission: d, requestAccountsPermission: u }) {
                                    if (i.has(a)) return (t.error = n.ethErrors.rpc.resourceUnavailable(`Already processing ${s.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS}. Please wait.`)), o();
                                    if (d(s.MESSAGE_TYPE.ETH_ACCOUNTS)) {
                                        try {
                                            i.add(a), await l(!0), (t.result = await c()), o();
                                        } catch (e) {
                                            o(e);
                                        } finally {
                                            i.delete(a);
                                        }
                                        return undefined;
                                    }
                                    try {
                                        await u();
                                    } catch (e) {
                                        return (t.error = e), o();
                                    }
                                    const h = await c();
                                    h.length > 0 ? (t.result = h) : (t.error = n.ethErrors.rpc.internal("Accounts unexpectedly unavailable. Please report this bug."));
                                    return o();
                                },
                                hookNames: { origin: !0, getAccounts: !0, getUnlockPromise: !0, hasPermission: !0, requestAccountsPermission: !0 },
                            };
                            r.default = o;
                            const i = new Set();
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            75,
            { "../../../../../shared/constants/app": 5328, "eth-rpc-errors": 2032 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("eth-rpc-errors");
                            var s = {
                                methodNames: [e("../../../../../shared/constants/app").MESSAGE_TYPE.SEND_METADATA],
                                implementation: function (e, t, r, s, { addSubjectMetadata: o, subjectType: i }) {
                                    const { origin: a, params: c } = e;
                                    if (!c || "object" != typeof c || Array.isArray(c)) return s(n.ethErrors.rpc.invalidParams({ data: c }));
                                    {
                                        const { icon: e = null, name: t = null, ...r } = c;
                                        o({ ...r, iconUrl: e, name: t, subjectType: i, origin: a });
                                    }
                                    return (t.result = !0), s();
                                },
                                hookNames: { addSubjectMetadata: !0, subjectType: !0 },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            76,
            { "../../../../../shared/constants/app": 5328, "../../../../../shared/constants/network": 5333, "../../../../../shared/modules/network.utils": 5356, "eth-rpc-errors": 2032, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("eth-rpc-errors"),
                                s = e("lodash"),
                                o = e("../../../../../shared/constants/app"),
                                i = e("../../../../../shared/constants/network"),
                                a = e("../../../../../shared/modules/network.utils");
                            var c = {
                                methodNames: [o.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN],
                                implementation: async function (e, t, r, c, { getCurrentChainId: l, findCustomRpcBy: d, setProviderType: u, updateRpcTarget: h, requestUserApproval: p }) {
                                    var g;
                                    if (null === (g = e.params) || void 0 === g || !g[0] || "object" != typeof e.params[0])
                                        return c(n.ethErrors.rpc.invalidParams({ message: `Expected single, object parameter. Received:\n${JSON.stringify(e.params)}` }));
                                    const { origin: m } = e,
                                        { chainId: f } = e.params[0],
                                        y = Object.keys((0, s.omit)(e.params[0], ["chainId"]));
                                    if (y.length > 0) return c(n.ethErrors.rpc.invalidParams({ message: `Received unexpected keys on object parameter. Unsupported keys:\n${y}` }));
                                    const b = "string" == typeof f && f.toLowerCase();
                                    if (!(0, a.isPrefixedFormattedHexString)(b)) return c(n.ethErrors.rpc.invalidParams({ message: `Expected 0x-prefixed, unpadded, non-zero hexadecimal string 'chainId'. Received:\n${f}` }));
                                    if (!(0, a.isSafeChainId)(parseInt(b, 16))) return c(n.ethErrors.rpc.invalidParams({ message: `Invalid chain ID "${b}": numerical value greater than max safe value. Received:\n${f}` }));
                                    const C = (function (e, t) {
                                        if (e in i.CHAIN_ID_TO_TYPE_MAP) return { chainId: e, ticker: i.CURRENCY_SYMBOLS.ETH, nickname: i.NETWORK_TO_NAME_MAP[e], rpcUrl: i.CHAIN_ID_TO_RPC_URL_MAP[e], type: i.CHAIN_ID_TO_TYPE_MAP[e] };
                                        return t({ chainId: e });
                                    })(b, d);
                                    if (C) {
                                        if (l() === b) return (t.result = null), c();
                                        try {
                                            const e = await p({ origin: m, type: o.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN, requestData: C });
                                            f in i.CHAIN_ID_TO_TYPE_MAP ? u(e.type) : await h(e), (t.result = null);
                                        } catch (e) {
                                            return c(e);
                                        }
                                        return c();
                                    }
                                    return c(n.ethErrors.provider.custom({ code: 4902, message: `Unrecognized chain ID "${f}". Try adding the chain using ${o.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN} first.` }));
                                },
                                hookNames: { getCurrentChainId: !0, findCustomRpcBy: !0, setProviderType: !0, updateRpcTarget: !0, requestUserApproval: !0 },
                            };
                            r.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            77,
            { "../../../../../shared/constants/app": 5328, "eth-rpc-errors": 2032 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("eth-rpc-errors"),
                                s = e("../../../../../shared/constants/app");
                            var o = {
                                methodNames: [s.MESSAGE_TYPE.WATCH_ASSET, s.MESSAGE_TYPE.WATCH_ASSET_LEGACY],
                                implementation: async function (e, t, r, s, { handleWatchAssetRequest: o }) {
                                    try {
                                        const { options: r, type: n } = e.params,
                                            i = await o(r, n);
                                        return await i.result, (t.result = !0), s();
                                    } catch (e) {
                                        return "User rejected to watch the asset." === e.message ? s(n.ethErrors.provider.userRejectedRequest()) : s(e);
                                    }
                                },
                                hookNames: { handleWatchAssetRequest: !0 },
                            };
                            r.default = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            78,
            { "./createMethodMiddleware": 68 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            var n = e("./createMethodMiddleware");
                            Object.keys(n).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === n[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return n[e];
                                            },
                                        }));
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            79,
            { "eth-keyring-controller": 2010, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = o(e("eth-keyring-controller")),
                                s = o(e("loglevel"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            var i = {
                                async verifyAccounts(e, t) {
                                    if (!e || e.length < 1) throw new Error("No created accounts defined.");
                                    const r = new (new n.default({}).getKeyringClassForType("HD Key Tree"))({ mnemonic: t, numberOfAccounts: e.length }),
                                        o = await r.getAccounts();
                                    if ((s.default.debug(`Created accounts: ${JSON.stringify(e)}`), s.default.debug(`Restored accounts: ${JSON.stringify(o)}`), o.length !== e.length)) throw new Error("Wrong number of accounts");
                                    for (let t = 0; t < o.length; t++) if (o[t].toLowerCase() !== e[t].toLowerCase()) throw new Error(`Not identical accounts! Original: ${e[t]}, Restored: ${o[t]}`);
                                },
                            };
                            r.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            8,
            {
                "../../../shared/constants/alarms": 5326,
                "../../../shared/constants/time": 5338,
                "../../../shared/modules/mv3.utils": 5355,
                "../../../ui/helpers/utils/build-types": 5917,
                "../metamask-controller": 87,
                "@metamask/obs-store": 1177,
                events: 1729,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n,
                                s = (n = e("events")) && n.__esModule ? n : { default: n },
                                o = e("@metamask/obs-store"),
                                i = e("../metamask-controller"),
                                a = e("../../../shared/constants/time"),
                                c = e("../../../shared/constants/alarms"),
                                l = e("../../../shared/modules/mv3.utils"),
                                d = e("../../../ui/helpers/utils/build-types");
                            class u extends s.default {
                                constructor(e = {}) {
                                    const { addUnlockListener: t, isUnlocked: r, initState: n, onInactiveTimeout: s, showUnlockRequest: i, preferencesStore: a, qrHardwareStore: c } = e;
                                    super(),
                                        (this.onInactiveTimeout = s || (() => undefined)),
                                        (this.store = new o.ObservableStore({
                                            timeoutMinutes: 0,
                                            connectedStatusPopoverHasBeenShown: !0,
                                            defaultHomeActiveTabName: null,
                                            browserEnvironment: {},
                                            popupGasPollTokens: [],
                                            notificationGasPollTokens: [],
                                            fullScreenGasPollTokens: [],
                                            recoveryPhraseReminderHasBeenShown: !1,
                                            recoveryPhraseReminderLastShown: new Date().getTime(),
                                            collectiblesDetectionNoticeDismissed: !1,
                                            enableEIP1559V2NoticeDismissed: !1,
                                            showTestnetMessageInDropdown: !0,
                                            showPortfolioTooltip: !0,
                                            showBetaHeader: (0, d.isBeta)(),
                                            trezorModel: null,
                                            ...n,
                                            qrHardware: {},
                                            collectiblesDropdownState: {},
                                            usedNetworks: { "0x1": !0, "0x5": !0, "0x539": !0 },
                                        })),
                                        (this.timer = null),
                                        (this.isUnlocked = r),
                                        (this.waitingForUnlock = []),
                                        t(this.handleUnlock.bind(this)),
                                        (this._showUnlockRequest = i),
                                        a.subscribe(({ preferences: e }) => {
                                            this.store.getState().timeoutMinutes !== e.autoLockTimeLimit && this._setInactiveTimeout(e.autoLockTimeLimit);
                                        }),
                                        c.subscribe((e) => {
                                            this.store.updateState({ qrHardware: e });
                                        });
                                    const { preferences: l } = a.getState();
                                    this._setInactiveTimeout(l.autoLockTimeLimit);
                                }
                                getUnlockPromise(e) {
                                    return new Promise((t) => {
                                        this.isUnlocked() ? t() : this.waitForUnlock(t, e);
                                    });
                                }
                                waitForUnlock(e, t) {
                                    this.waitingForUnlock.push({ resolve: e }), this.emit(i.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE), t && this._showUnlockRequest();
                                }
                                handleUnlock() {
                                    if (this.waitingForUnlock.length > 0) {
                                        for (; this.waitingForUnlock.length > 0; ) this.waitingForUnlock.shift().resolve();
                                        this.emit(i.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                    }
                                }
                                setDefaultHomeActiveTabName(e) {
                                    this.store.updateState({ defaultHomeActiveTabName: e });
                                }
                                setConnectedStatusPopoverHasBeenShown() {
                                    this.store.updateState({ connectedStatusPopoverHasBeenShown: !0 });
                                }
                                setRecoveryPhraseReminderHasBeenShown() {
                                    this.store.updateState({ recoveryPhraseReminderHasBeenShown: !0 });
                                }
                                setRecoveryPhraseReminderLastShown(e) {
                                    this.store.updateState({ recoveryPhraseReminderLastShown: e });
                                }
                                setLastActiveTime() {
                                    this._resetTimer();
                                }
                                _setInactiveTimeout(e) {
                                    this.store.updateState({ timeoutMinutes: e }), this._resetTimer();
                                }
                                _resetTimer() {
                                    const { timeoutMinutes: e } = this.store.getState();
                                    this.timer ? clearTimeout(this.timer) : l.isManifestV3 && chrome.alarms.clear(c.AUTO_LOCK_TIMEOUT_ALARM),
                                        e &&
                                            (l.isManifestV3
                                                ? (chrome.alarms.create(c.AUTO_LOCK_TIMEOUT_ALARM, { delayInMinutes: e, periodInMinutes: e }),
                                                  chrome.alarms.onAlarm.addListener((e) => {
                                                      e.name === c.AUTO_LOCK_TIMEOUT_ALARM && (this.onInactiveTimeout(), chrome.alarms.clear(c.AUTO_LOCK_TIMEOUT_ALARM));
                                                  }))
                                                : (this.timer = setTimeout(() => this.onInactiveTimeout(), e * a.MINUTE)));
                                }
                                setBrowserEnvironment(e, t) {
                                    this.store.updateState({ browserEnvironment: { os: e, browser: t } });
                                }
                                addPollingToken(e, t) {
                                    const r = this.store.getState()[t];
                                    this.store.updateState({ [t]: [...r, e] });
                                }
                                removePollingToken(e, t) {
                                    const r = this.store.getState()[t];
                                    this.store.updateState({ [t]: r.filter((t) => t !== e) });
                                }
                                clearPollingTokens() {
                                    this.store.updateState({ popupGasPollTokens: [], notificationGasPollTokens: [], fullScreenGasPollTokens: [] });
                                }
                                setShowTestnetMessageInDropdown(e) {
                                    this.store.updateState({ showTestnetMessageInDropdown: e });
                                }
                                setShowPortfolioTooltip(e) {
                                    this.store.updateState({ showPortfolioTooltip: e });
                                }
                                setShowBetaHeader(e) {
                                    this.store.updateState({ showBetaHeader: e });
                                }
                                setTrezorModel(e) {
                                    this.store.updateState({ trezorModel: e });
                                }
                                setCollectiblesDetectionNoticeDismissed(e) {
                                    this.store.updateState({ collectiblesDetectionNoticeDismissed: e });
                                }
                                setEnableEIP1559V2NoticeDismissed(e) {
                                    this.store.updateState({ enableEIP1559V2NoticeDismissed: e });
                                }
                                updateCollectibleDropDownState(e) {
                                    this.store.updateState({ collectiblesDropdownState: e });
                                }
                                setFirstTimeUsedNetwork(e) {
                                    const t = this.store.getState(),
                                        { usedNetworks: r } = t;
                                    (r[e] = !0), this.store.updateState({ usedNetworks: r });
                                }
                            }
                            r.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            80,
            { "../util": 86, "@segment/loosely-validate-event": 1223, buffer: 1728, "is-retry-allowed": 4472, lodash: 4694, "remove-trailing-slash": 5004, timers: 5112 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t, n) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                                    var s = l(e("remove-trailing-slash")),
                                        o = l(e("@segment/loosely-validate-event")),
                                        i = e("lodash"),
                                        a = l(e("is-retry-allowed")),
                                        c = e("../util");
                                    function l(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    const d = () => ({});
                                    r.default = class {
                                        constructor(e, t = {}) {
                                            (this.writeKey = e),
                                                (this.host = (0, s.default)(t.host || "https://api.segment.io")),
                                                (this.flushInterval = t.flushInterval || 1e4),
                                                (this.flushAt = t.flushAt || Math.max(t.flushAt, 1) || 20),
                                                (this.queue = []),
                                                (this.path = "/v1/batch"),
                                                (this.maxQueueSize = 460800),
                                                (this.flushed = !1),
                                                (this.retryCount = 3),
                                                Object.defineProperty(this, "enable", { configurable: !1, writable: !1, enumerable: !0, value: !0 });
                                        }
                                        _validate(e, t) {
                                            (0, o.default)(e, t);
                                        }
                                        _message(e, t, r) {
                                            return this._validate(t, e), this.enqueue(e, t, r), this;
                                        }
                                        identify(e, t) {
                                            return this._message("identify", e, t);
                                        }
                                        track(e, t) {
                                            return this._message("track", e, t);
                                        }
                                        page(e, t) {
                                            return this._message("page", e, t);
                                        }
                                        enqueue(e, t, r = d) {
                                            if (!this.enable) return void n(r);
                                            const s = { ...t, type: e };
                                            if (
                                                ((s.context = { ...s.context, library: { name: "analytics-node" } }),
                                                s.timestamp || (s.timestamp = new Date()),
                                                s.messageId || (s.messageId = (0, c.generateRandomId)()),
                                                s.anonymousId && !(0, i.isString)(s.anonymousId) && (s.anonymousId = JSON.stringify(s.anonymousId)),
                                                s.userId && !(0, i.isString)(s.userId) && (s.userId = JSON.stringify(s.userId)),
                                                this.queue.push({ message: s, callback: r }),
                                                !this.flushed)
                                            )
                                                return (this.flushed = !0), void this.flush();
                                            const o = this.queue.length >= this.flushAt,
                                                a = this.queue.reduce((e, t) => e + JSON.stringify(t).length, 0) >= this.maxQueueSize;
                                            (o || a) && this.flush(), this.flushInterval && !this.timer && (this.timer = setTimeout(this.flush.bind(this), this.flushInterval));
                                        }
                                        flush(e = d) {
                                            if (!this.enable) return n(e), Promise.resolve();
                                            if ((this.timer && (clearTimeout(this.timer), (this.timer = null)), !this.queue.length)) return n(e), Promise.resolve();
                                            const r = this.queue.splice(0, this.flushAt),
                                                s = r.map((e) => e.callback),
                                                o = { batch: r.map((e) => e.message), timestamp: new Date(), sentAt: new Date() },
                                                i = { Authorization: `Basic ${t.from(this.writeKey, "utf8").toString("base64")}` };
                                            return this._sendRequest(
                                                `${this.host}${this.path}`,
                                                { method: "POST", body: JSON.stringify(o), headers: i },
                                                (t) => {
                                                    n(() => {
                                                        s.forEach((e) => e(t, o)), e(t, o);
                                                    });
                                                },
                                                0
                                            );
                                        }
                                        _retryRequest(e, t, r, n) {
                                            const s = 100 * Math.pow(2, n);
                                            setTimeout(() => {
                                                this._sendRequest(e, t, r, n + 1);
                                            }, s);
                                        }
                                        async _sendRequest(e, t, r, n) {
                                            return fetch(e, t)
                                                .then(async (s) => {
                                                    if (s.ok) r();
                                                    else if (this._isErrorRetryable({ response: s }) && n <= this.retryCount) this._retryRequest(e, t, r, n);
                                                    else {
                                                        const e = new Error(s.statusText);
                                                        r(e);
                                                    }
                                                })
                                                .catch((s) => {
                                                    this._isErrorRetryable(s) && n <= this.retryCount ? this._retryRequest(e, t, r, n) : r(s);
                                                });
                                        }
                                        _isErrorRetryable(e) {
                                            return (
                                                !!(function (e) {
                                                    return !e.response && Boolean(e.code) && "ECONNABORTED" !== e.code && (0, a.default)(e);
                                                })(e) ||
                                                (!!e.response && ((e.response.status >= 500 && e.response.status <= 599) || 429 === e.response.status))
                                            );
                                        }
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer, e("timers").setImmediate));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            81,
            { "../../../../shared/constants/time": 5338, "./analytics": 80, _process: 4801 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.segment = r.createSegmentMock = void 0);
                                    var n,
                                        s,
                                        o,
                                        i = e("../../../../shared/constants/time"),
                                        a = (n = e("./analytics")) && n.__esModule ? n : { default: n };
                                    const c = null !== (s = "XdGJ17zKf3NjBPCDQ2UDjJjkx6FYBMGP") ? s : null,
                                        l = null !== (o = t.env.SEGMENT_HOST) && void 0 !== o ? o : null,
                                        d = undefined,
                                        u = 5 * i.SECOND,
                                        h = (e = d) => {
                                            const t = {
                                                queue: [],
                                                flush() {
                                                    t.queue.forEach(([e, t]) => {
                                                        t();
                                                    }),
                                                        (t.queue = []);
                                                },
                                                track(r, n = () => undefined) {
                                                    t.queue.push([r, n]), t.queue.length >= e && t.flush();
                                                },
                                                page() {},
                                                identify() {},
                                            };
                                            return t;
                                        };
                                    r.createSegmentMock = h;
                                    const p = c ? new a.default(c, { host: l, flushAt: d, flushInterval: u }) : h(d);
                                    r.segment = p;
                                }.call(this));
                            }.call(this, e("_process")));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            85,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/random-id": 5358,
                "../metamask-controller": 87,
                "@metamask/obs-store": 1177,
                assert: 1463,
                "eth-rpc-errors": 2032,
                "eth-sig-util": 2034,
                events: 1729,
                jsonschema: 4500,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = m(e("events")),
                                s = e("assert"),
                                o = e("@metamask/obs-store"),
                                i = e("eth-rpc-errors"),
                                a = e("eth-sig-util"),
                                c = m(e("loglevel")),
                                l = m(e("jsonschema")),
                                d = e("../../../shared/constants/app"),
                                u = e("../metamask-controller"),
                                h = m(e("../../../shared/modules/random-id")),
                                p = e("../../../shared/constants/metametrics"),
                                g = e("../../../shared/modules/hexstring-utils");
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            class f extends n.default {
                                constructor({ getCurrentChainId: e, metricsEvent: t }) {
                                    super(), (this._getCurrentChainId = e), (this.memStore = new o.ObservableStore({ unapprovedTypedMessages: {}, unapprovedTypedMessagesCount: 0 })), (this.messages = []), (this.metricsEvent = t);
                                }
                                get unapprovedTypedMessagesCount() {
                                    return Object.keys(this.getUnapprovedMsgs()).length;
                                }
                                getUnapprovedMsgs() {
                                    return this.messages.filter((e) => "unapproved" === e.status).reduce((e, t) => ((e[t.id] = t), e), {});
                                }
                                addUnapprovedMessageAsync(e, t, r) {
                                    return new Promise((n, s) => {
                                        const o = this.addUnapprovedMessage(e, t, r);
                                        this.once(`${o}:finished`, (t) => {
                                            switch (t.status) {
                                                case "signed":
                                                    return n(t.rawSig);
                                                case "rejected":
                                                    return s(i.ethErrors.provider.userRejectedRequest("MetaMask Message Signature: User denied message signature."));
                                                case "errored":
                                                    return s(new Error(`MetaMask Message Signature: ${t.error}`));
                                                default:
                                                    return s(new Error(`MetaMask Message Signature: Unknown problem: ${JSON.stringify(e)}`));
                                            }
                                        });
                                    });
                                }
                                addUnapprovedMessage(e, t, r) {
                                    (e.version = r), t && (e.origin = t.origin), this.validateParams(e), c.default.debug(`TypedMessageManager addUnapprovedMessage: ${JSON.stringify(e)}`);
                                    const n = new Date().getTime(),
                                        s = (0, h.default)(),
                                        o = { id: s, msgParams: e, time: n, status: "unapproved", type: d.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA };
                                    return this.addMsg(o), this.emit("update"), s;
                                }
                                validateParams(e) {
                                    switch (
                                        (s.strict.ok(e && "object" == typeof e, "Params must be an object."),
                                        s.strict.ok("data" in e, 'Params must include a "data" field.'),
                                        s.strict.ok("from" in e, 'Params must include a "from" field.'),
                                        s.strict.ok("string" == typeof e.from && (0, g.isValidHexAddress)(e.from, { allowNonPrefixed: !1 }), '"from" field must be a valid, lowercase, hexadecimal Ethereum address string.'),
                                        e.version)
                                    ) {
                                        case "V1":
                                            s.strict.ok(Array.isArray(e.data), '"params.data" must be an array.'),
                                                s.strict.doesNotThrow(() => {
                                                    (0, a.typedSignatureHash)(e.data);
                                                }, "Signing data must be valid EIP-712 typed data.");
                                            break;
                                        case "V3":
                                        case "V4": {
                                            let t;
                                            s.strict.equal(typeof e.data, "string", '"params.data" must be a string.'),
                                                s.strict.doesNotThrow(() => {
                                                    t = JSON.parse(e.data);
                                                }, '"data" must be a valid JSON string.');
                                            const r = l.default.validate(t, a.TYPED_MESSAGE_SCHEMA);
                                            if ((s.strict.ok(t.primaryType in t.types, `Primary type of "${t.primaryType}" has no type definition.`), 0 !== r.errors.length))
                                                throw i.ethErrors.rpc.invalidParams({ message: "Signing data must conform to EIP-712 schema. See https://git.io/fNtcx.", data: r.errors.map((e) => e.message.toString()) });
                                            let { chainId: n } = t.domain;
                                            if (n) {
                                                const e = parseInt(this._getCurrentChainId(), 16);
                                                s.strict.ok(!Number.isNaN(e), `Cannot sign messages for chainId "${n}", because MetaMask is switching networks.`),
                                                    "string" == typeof n && (n = parseInt(n, n.startsWith("0x") ? 16 : 10)),
                                                    s.strict.equal(n, e, `Provided chainId "${n}" must match the active chainId "${e}"`);
                                            }
                                            break;
                                        }
                                        default:
                                            s.strict.fail(`Unknown typed data version "${e.version}"`);
                                    }
                                }
                                addMsg(e) {
                                    this.messages.push(e), this._saveMsgList();
                                }
                                getMsg(e) {
                                    return this.messages.find((t) => t.id === e);
                                }
                                approveMessage(e) {
                                    return this.setMsgStatusApproved(e.metamaskId), this.prepMsgForSigning(e);
                                }
                                setMsgStatusApproved(e) {
                                    this._setMsgStatus(e, "approved");
                                }
                                setMsgStatusSigned(e, t) {
                                    const r = this.getMsg(e);
                                    (r.rawSig = t), this._updateMsg(r), this._setMsgStatus(e, "signed");
                                }
                                prepMsgForSigning(e) {
                                    return delete e.metamaskId, delete e.version, Promise.resolve(e);
                                }
                                rejectMsg(e, t = undefined) {
                                    if (t) {
                                        const r = this.getMsg(e);
                                        this.metricsEvent({ event: t, category: p.EVENT.CATEGORIES.TRANSACTIONS, properties: { action: "Sign Request", version: r.msgParams.version, type: r.type } });
                                    }
                                    this._setMsgStatus(e, "rejected");
                                }
                                errorMessage(e, t) {
                                    const r = this.getMsg(e);
                                    (r.error = t), this._updateMsg(r), this._setMsgStatus(e, "errored");
                                }
                                clearUnapproved() {
                                    (this.messages = this.messages.filter((e) => "unapproved" !== e.status)), this._saveMsgList();
                                }
                                _setMsgStatus(e, t) {
                                    const r = this.getMsg(e);
                                    if (!r) throw new Error(`TypedMessageManager - Message not found for id: "${e}".`);
                                    (r.status = t), this._updateMsg(r), this.emit(`${e}:${t}`, r), ("rejected" !== t && "signed" !== t && "errored" !== t) || this.emit(`${e}:finished`, r);
                                }
                                _updateMsg(e) {
                                    const t = this.messages.findIndex((t) => t.id === e.id);
                                    -1 !== t && (this.messages[t] = e), this._saveMsgList();
                                }
                                _saveMsgList() {
                                    const e = this.getUnapprovedMsgs(),
                                        t = Object.keys(e).length;
                                    this.memStore.updateState({ unapprovedTypedMessages: e, unapprovedTypedMessagesCount: t }), this.emit(u.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                }
                            }
                            r.default = f;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            87,
            {
                "../../shared/constants/app": 5328,
                "../../shared/constants/hardware-wallets": 5330,
                "../../shared/constants/metametrics": 5332,
                "../../shared/constants/network": 5333,
                "../../shared/constants/permissions": 5334,
                "../../shared/constants/phishing": 5335,
                "../../shared/constants/swaps": 5337,
                "../../shared/constants/time": 5338,
                "../../shared/constants/tokens": 5339,
                "../../shared/constants/transaction": 5340,
                "../../shared/lib/metamask-controller-utils": 5343,
                "../../shared/modules/hexstring-utils": 5354,
                "../../shared/modules/string-utils": 5361,
                "../../shared/modules/transaction.utils": 5363,
                "../../shared/notifications": 5364,
                "../../ui/helpers/utils/token-util": 5934,
                "./account-import-strategies": 3,
                "./controllers/alert": 7,
                "./controllers/app-state": 8,
                "./controllers/backup": 9,
                "./controllers/cached-balances": 10,
                "./controllers/detect-tokens": 11,
                "./controllers/ens": 13,
                "./controllers/incoming-transactions": 14,
                "./controllers/metametrics": 15,
                "./controllers/network": 19,
                "./controllers/onboarding": 23,
                "./controllers/permissions": 27,
                "./controllers/preferences": 31,
                "./controllers/swaps": 32,
                "./controllers/transactions": 33,
                "./detect-multiple-instances": 39,
                "./lib/ComposableObservableStore": 41,
                "./lib/account-tracker": 42,
                "./lib/createLoggerMiddleware": 45,
                "./lib/createMetaRPCHandler": 46,
                "./lib/createOnboardingMiddleware": 47,
                "./lib/createOriginMiddleware": 48,
                "./lib/createRPCMethodTrackingMiddleware": 49,
                "./lib/createTabIdMiddleware": 51,
                "./lib/decrypt-message-manager": 52,
                "./lib/encryption-public-key-manager": 53,
                "./lib/message-manager": 62,
                "./lib/personal-message-manager": 67,
                "./lib/rpc-method-middleware": 78,
                "./lib/seed-phrase-verifier": 79,
                "./lib/segment": 81,
                "./lib/stream-utils": 84,
                "./lib/typed-message-manager": 85,
                "@keystonehq/metamask-airgapped-keyring": 527,
                "@metamask/assets-controllers": 977,
                "@metamask/controllers": 1034,
                "@metamask/eth-ledger-bridge-keyring": 1114,
                "@metamask/obs-store": 1177,
                "@metamask/obs-store/dist/asStream": 1176,
                "@metamask/smart-transactions-controller": 1185,
                "@sentry/browser": 1229,
                _process: 4801,
                "await-semaphore": 1495,
                buffer: 1728,
                "eth-json-rpc-filters": 1961,
                "eth-json-rpc-filters/subscriptionManager": 1967,
                "eth-json-rpc-middleware": 1985,
                "eth-keyring-controller": 2010,
                "eth-lattice-keyring": 2011,
                "eth-query": 2028,
                "eth-rpc-errors": 2032,
                "eth-trezor-keyring": 2047,
                events: 1729,
                "json-rpc-engine": 4490,
                "json-rpc-middleware-stream/engineStream": 4492,
                lodash: 4694,
                loglevel: 4707,
                nanoid: 4756,
                pump: 4816,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t, n) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.METAMASK_CONTROLLER_EVENTS = void 0);
                                    var s = ke(e("events")),
                                        o = ke(e("pump")),
                                        i = e("@metamask/obs-store"),
                                        a = e("@metamask/obs-store/dist/asStream"),
                                        c = e("json-rpc-engine"),
                                        l = e("lodash"),
                                        d = ke(e("json-rpc-middleware-stream/engineStream")),
                                        u = ke(e("eth-json-rpc-filters")),
                                        h = ke(e("eth-json-rpc-filters/subscriptionManager")),
                                        p = e("eth-json-rpc-middleware"),
                                        g = ke(e("eth-keyring-controller")),
                                        m = e("eth-rpc-errors"),
                                        f = e("await-semaphore"),
                                        y = ke(e("loglevel")),
                                        b = ke(e("eth-trezor-keyring")),
                                        C = ke(e("@metamask/eth-ledger-bridge-keyring")),
                                        v = ke(e("eth-lattice-keyring")),
                                        w = e("@keystonehq/metamask-airgapped-keyring"),
                                        E = ke(e("eth-query")),
                                        M = ke(e("nanoid")),
                                        S = e("@sentry/browser"),
                                        k = e("@metamask/controllers"),
                                        T = e("@metamask/assets-controllers"),
                                        _ = ke(e("@metamask/smart-transactions-controller")),
                                        A = e("../../shared/constants/transaction"),
                                        P = e("../../shared/constants/phishing"),
                                        I = e("../../shared/constants/swaps"),
                                        R = e("../../shared/constants/network"),
                                        O = e("../../shared/constants/hardware-wallets"),
                                        N = e("../../shared/constants/permissions"),
                                        x = e("../../shared/notifications"),
                                        D = e("../../shared/modules/hexstring-utils"),
                                        L = e("../../shared/constants/time"),
                                        U = e("../../shared/constants/app"),
                                        j = e("../../shared/constants/metametrics"),
                                        F = e("../../ui/helpers/utils/token-util"),
                                        B = e("../../shared/modules/string-utils"),
                                        $ = e("../../shared/modules/transaction.utils"),
                                        K = e("../../shared/constants/tokens"),
                                        q = e("../../shared/lib/metamask-controller-utils"),
                                        H = e("./detect-multiple-instances"),
                                        G = ke(e("./lib/ComposableObservableStore")),
                                        z = ke(e("./lib/account-tracker")),
                                        W = ke(e("./lib/createLoggerMiddleware")),
                                        V = e("./lib/rpc-method-middleware"),
                                        Y = ke(e("./lib/createOriginMiddleware")),
                                        J = ke(e("./lib/createTabIdMiddleware")),
                                        Q = ke(e("./lib/createOnboardingMiddleware")),
                                        X = e("./lib/stream-utils"),
                                        Z = ke(e("./controllers/ens")),
                                        ee = Se(e("./controllers/network")),
                                        te = ke(e("./controllers/preferences")),
                                        re = ke(e("./controllers/app-state")),
                                        ne = ke(e("./controllers/cached-balances")),
                                        se = ke(e("./controllers/alert")),
                                        oe = ke(e("./controllers/onboarding")),
                                        ie = ke(e("./controllers/backup")),
                                        ae = ke(e("./controllers/incoming-transactions")),
                                        ce = Se(e("./lib/message-manager")),
                                        le = ke(e("./lib/decrypt-message-manager")),
                                        de = ke(e("./lib/encryption-public-key-manager")),
                                        ue = ke(e("./lib/personal-message-manager")),
                                        he = ke(e("./lib/typed-message-manager")),
                                        pe = ke(e("./controllers/transactions")),
                                        ge = ke(e("./controllers/detect-tokens")),
                                        me = ke(e("./controllers/swaps")),
                                        fe = ke(e("./account-import-strategies")),
                                        ye = ke(e("./lib/seed-phrase-verifier")),
                                        be = ke(e("./controllers/metametrics")),
                                        Ce = e("./lib/segment"),
                                        ve = ke(e("./lib/createMetaRPCHandler")),
                                        we = e("./controllers/permissions"),
                                        Ee = ke(e("./lib/createRPCMethodTrackingMiddleware"));
                                    function Me(e) {
                                        if ("function" != typeof WeakMap) return null;
                                        var t = new WeakMap(),
                                            r = new WeakMap();
                                        return (Me = function (e) {
                                            return e ? r : t;
                                        })(e);
                                    }
                                    function Se(e, t) {
                                        if (!t && e && e.__esModule) return e;
                                        if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                        var r = Me(t);
                                        if (r && r.has(e)) return r.get(e);
                                        var n = {},
                                            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                        for (var o in e)
                                            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                                var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                                            }
                                        return (n.default = e), r && r.set(e, n), n;
                                    }
                                    function ke(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    function Te(e, t, r) {
                                        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                                    }
                                    r.METAMASK_CONTROLLER_EVENTS = { UPDATE_BADGE: "updateBadge", APPROVAL_STATE_CHANGE: "ApprovalController:stateChange" };
                                    class _e extends s.default {
                                        constructor(e) {
                                            var r;
                                            super(),
                                                Te(this, "removePermissionsFor", (e) => {
                                                    try {
                                                        this.permissionController.revokePermissions(e);
                                                    } catch (e) {
                                                        if (!(e instanceof k.PermissionsRequestNotFoundError)) throw e;
                                                    }
                                                }),
                                                Te(this, "rejectPermissionsRequest", (e) => {
                                                    try {
                                                        this.permissionController.rejectPermissionsRequest(e);
                                                    } catch (e) {
                                                        if (!(e instanceof k.PermissionsRequestNotFoundError)) throw e;
                                                    }
                                                }),
                                                Te(this, "acceptPermissionsRequest", (e) => {
                                                    try {
                                                        this.permissionController.acceptPermissionsRequest(e);
                                                    } catch (e) {
                                                        if (!(e instanceof k.PermissionsRequestNotFoundError)) throw e;
                                                    }
                                                }),
                                                Te(this, "resolvePendingApproval", (e, t) => {
                                                    try {
                                                        this.approvalController.accept(e, t);
                                                    } catch (e) {
                                                        if (!(e instanceof k.ApprovalRequestNotFoundError)) throw e;
                                                    }
                                                }),
                                                Te(this, "rejectPendingApproval", (e, t) => {
                                                    try {
                                                        this.approvalController.reject(e, new m.EthereumRpcError(t.code, t.message, t.data));
                                                    } catch (e) {
                                                        if (!(e instanceof k.ApprovalRequestNotFoundError)) throw e;
                                                    }
                                                }),
                                                (this.defaultMaxListeners = 20),
                                                (this.sendUpdate = (0, l.debounce)(this.privateSendUpdate.bind(this), 200 * L.MILLISECOND)),
                                                (this.opts = e),
                                                (this.extension = e.browser),
                                                (this.platform = e.platform),
                                                (this.notificationManager = e.notificationManager);
                                            const n = e.initState || {},
                                                s = this.platform.getVersion();
                                            this.recordFirstTimeInfo(n),
                                                (this.activeControllerConnections = 0),
                                                (this.getRequestAccountTabIds = e.getRequestAccountTabIds),
                                                (this.getOpenMetamaskTabsIds = e.getOpenMetamaskTabsIds),
                                                (this.controllerMessenger = new k.ControllerMessenger()),
                                                (this.localStoreApiWrapper = e.localStore),
                                                (this.store = new G.default({ state: n, controllerMessenger: this.controllerMessenger, persist: !0 })),
                                                (this.connections = {}),
                                                (this.createVaultMutex = new f.Mutex()),
                                                this.extension.runtime.onInstalled.addListener((e) => {
                                                    "update" === e.reason && "8.1.0" === s && this.platform.openExtensionInBrowser();
                                                }),
                                                (this.approvalController = new k.ApprovalController({ messenger: this.controllerMessenger.getRestricted({ name: "ApprovalController" }), showApprovalRequest: e.showUserConfirmation })),
                                                (this.networkController = new ee.default(n.NetworkController)),
                                                this.networkController.setInfuraProjectId(e.infuraProjectId),
                                                this.initializeProvider(),
                                                (this.provider = this.networkController.getProviderAndBlockTracker().provider),
                                                (this.blockTracker = this.networkController.getProviderAndBlockTracker().blockTracker);
                                            const o = this.controllerMessenger.getRestricted({ name: "TokenListController" });
                                            (this.tokenListController = new T.TokenListController({
                                                chainId: (0, q.hexToDecimal)(this.networkController.getCurrentChainId()),
                                                preventPollingOnNetworkRestart: !n.TokenListController || n.TokenListController.preventPollingOnNetworkRestart,
                                                onNetworkStateChange: (e) => {
                                                    this.networkController.store.subscribe((t) => {
                                                        const r = { ...t, provider: { ...t.provider, chainId: (0, q.hexToDecimal)(t.provider.chainId) } };
                                                        return e(r);
                                                    });
                                                },
                                                messenger: o,
                                                state: n.TokenListController,
                                            })),
                                                (this.preferencesController = new te.default({
                                                    initState: n.PreferencesController,
                                                    initLangCode: e.initLangCode,
                                                    openPopup: e.openPopup,
                                                    network: this.networkController,
                                                    tokenListController: this.tokenListController,
                                                    provider: this.provider,
                                                    migrateAddressBookState: this.migrateAddressBookState.bind(this),
                                                })),
                                                (this.tokensController = new T.TokensController({
                                                    onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                                                    onNetworkStateChange: this.networkController.store.subscribe.bind(this.networkController.store),
                                                    config: { provider: this.provider },
                                                    state: n.TokensController,
                                                })),
                                                (this.assetsContractController = new T.AssetsContractController(
                                                    {
                                                        onPreferencesStateChange: (e) => this.preferencesController.store.subscribe(e),
                                                        onNetworkStateChange: (e) =>
                                                            this.networkController.on(ee.NETWORK_EVENTS.NETWORK_DID_CHANGE, () => {
                                                                const t = this.networkController.store.getState(),
                                                                    r = { ...t, provider: { ...t.provider, chainId: (0, q.hexToDecimal)(t.provider.chainId) } };
                                                                return e(r);
                                                            }),
                                                    },
                                                    { provider: this.provider },
                                                    n.AssetsContractController
                                                )),
                                                (this.collectiblesController = new k.CollectiblesController(
                                                    {
                                                        onPreferencesStateChange: this.preferencesController.store.subscribe.bind(this.preferencesController.store),
                                                        onNetworkStateChange: this.networkController.store.subscribe.bind(this.networkController.store),
                                                        getERC721AssetName: this.assetsContractController.getERC721AssetName.bind(this.assetsContractController),
                                                        getERC721AssetSymbol: this.assetsContractController.getERC721AssetSymbol.bind(this.assetsContractController),
                                                        getERC721TokenURI: this.assetsContractController.getERC721TokenURI.bind(this.assetsContractController),
                                                        getERC721OwnerOf: this.assetsContractController.getERC721OwnerOf.bind(this.assetsContractController),
                                                        getERC1155BalanceOf: this.assetsContractController.getERC1155BalanceOf.bind(this.assetsContractController),
                                                        getERC1155TokenURI: this.assetsContractController.getERC1155TokenURI.bind(this.assetsContractController),
                                                        onCollectibleAdded: ({ address: e, symbol: t, tokenId: r, standard: n, source: s }) =>
                                                            this.metaMetricsController.trackEvent({
                                                                event: j.EVENT_NAMES.NFT_ADDED,
                                                                category: j.EVENT.CATEGORIES.WALLET,
                                                                properties: { token_contract_address: e, token_symbol: t, asset_type: A.ASSET_TYPES.COLLECTIBLE, token_standard: n, source: s },
                                                                sensitiveProperties: { tokenId: r },
                                                            }),
                                                    },
                                                    {},
                                                    n.CollectiblesController
                                                )),
                                                this.collectiblesController.setApiKey(t.env.OPENSEA_KEY),
                                                (this.metaMetricsController = new be.default({
                                                    segment: Ce.segment,
                                                    preferencesStore: this.preferencesController.store,
                                                    onNetworkDidChange: this.networkController.on.bind(this.networkController, ee.NETWORK_EVENTS.NETWORK_DID_CHANGE),
                                                    getNetworkIdentifier: this.networkController.getNetworkIdentifier.bind(this.networkController),
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    version: this.platform.getVersion(),
                                                    environment: "production",
                                                    extension: this.extension,
                                                    initState: n.MetaMetricsController,
                                                    captureException: S.captureException,
                                                })),
                                                this.on("update", (e) => {
                                                    this.metaMetricsController.handleMetaMaskStateUpdate(e);
                                                });
                                            const i = this.controllerMessenger.getRestricted({ name: "GasFeeController" }),
                                                a = I.GAS_API_BASE_URL;
                                            (this.gasFeeController = new k.GasFeeController({
                                                interval: 1e4,
                                                messenger: i,
                                                clientId: I.SWAPS_CLIENT_ID,
                                                getProvider: () => this.networkController.getProviderAndBlockTracker().provider,
                                                onNetworkStateChange: this.networkController.on.bind(this.networkController, ee.NETWORK_EVENTS.NETWORK_DID_CHANGE),
                                                getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(this.networkController),
                                                getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                                                legacyAPIEndpoint: `${a}/networks/<chain_id>/gasPrices`,
                                                EIP1559APIEndpoint: `${a}/networks/<chain_id>/suggestedGasFees`,
                                                getCurrentNetworkLegacyGasAPICompatibility: () => this.networkController.getCurrentChainId() === R.CHAIN_IDS.MAINNET,
                                                getChainId: () => this.networkController.getCurrentChainId(),
                                            })),
                                                (this.qrHardwareKeyring = new w.MetaMaskKeyring()),
                                                (this.appStateController = new re.default({
                                                    addUnlockListener: this.on.bind(this, "unlock"),
                                                    isUnlocked: this.isUnlocked.bind(this),
                                                    initState: n.AppStateController,
                                                    onInactiveTimeout: () => this.setLocked(),
                                                    showUnlockRequest: e.showUserConfirmation,
                                                    preferencesStore: this.preferencesController.store,
                                                    qrHardwareStore: this.qrHardwareKeyring.getMemStore(),
                                                }));
                                            const c = this.controllerMessenger.getRestricted({ name: "CurrencyRateController" });
                                            (this.currencyRateController = new T.CurrencyRateController({
                                                includeUsdRate: !0,
                                                messenger: c,
                                                state: { ...n.CurrencyController, nativeCurrency: this.networkController.providerStore.getState().ticker },
                                            })),
                                                (this.phishingController = new k.PhishingController()),
                                                this.phishingController.updatePhishingLists(),
                                                (this.announcementController = new k.AnnouncementController({ allAnnouncements: x.UI_NOTIFICATIONS }, n.AnnouncementController)),
                                                (this.tokenRatesController = new T.TokenRatesController({
                                                    onTokensStateChange: (e) => this.tokensController.subscribe(e),
                                                    onCurrencyRateStateChange: (e) => this.controllerMessenger.subscribe(`${this.currencyRateController.name}:stateChange`, e),
                                                    onNetworkStateChange: (e) =>
                                                        this.networkController.store.subscribe((t) => {
                                                            const r = { ...t, provider: { ...t.provider, chainId: (0, q.hexToDecimal)(t.provider.chainId) } };
                                                            return e(r);
                                                        }),
                                                })),
                                                (this.ensController = new Z.default({
                                                    provider: this.provider,
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    onNetworkDidChange: this.networkController.on.bind(this.networkController, ee.NETWORK_EVENTS.NETWORK_DID_CHANGE),
                                                })),
                                                (this.incomingTransactionsController = new ae.default({
                                                    blockTracker: this.blockTracker,
                                                    onNetworkDidChange: this.networkController.on.bind(this.networkController, ee.NETWORK_EVENTS.NETWORK_DID_CHANGE),
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    preferencesController: this.preferencesController,
                                                    initState: n.IncomingTransactionsController,
                                                })),
                                                (this.accountTracker = new z.default({
                                                    provider: this.provider,
                                                    blockTracker: this.blockTracker,
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    getNetworkIdentifier: this.networkController.getNetworkIdentifier.bind(this.networkController),
                                                })),
                                                this.on("controllerConnectionChanged", (e) => {
                                                    e > 0
                                                        ? (this.accountTracker.start(),
                                                          this.incomingTransactionsController.start(),
                                                          this.currencyRateController.start(),
                                                          this.preferencesController.store.getState().useTokenDetection && this.tokenListController.start())
                                                        : (this.accountTracker.stop(),
                                                          this.incomingTransactionsController.stop(),
                                                          this.currencyRateController.stop(),
                                                          this.preferencesController.store.getState().useTokenDetection && this.tokenListController.stop());
                                                }),
                                                (this.cachedBalancesController = new ne.default({
                                                    accountTracker: this.accountTracker,
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    initState: n.CachedBalancesController,
                                                })),
                                                (this.onboardingController = new oe.default({ initState: n.OnboardingController })),
                                                this.tokensController.hub.on("pendingSuggestedAsset", async () => {
                                                    await e.openPopup();
                                                });
                                            const d = [b.default, C.default, v.default, w.MetaMaskKeyring];
                                            (this.keyringController = new g.default({ keyringTypes: d, initState: n.KeyringController, encryptor: e.encryptor || undefined })),
                                                this.keyringController.memStore.subscribe((e) => this._onKeyringControllerUpdate(e)),
                                                this.keyringController.on("unlock", () => this._onUnlock()),
                                                this.keyringController.on("lock", () => this._onLock());
                                            const u = () => this.preferencesController.store.getState().identities;
                                            (this.permissionController = new k.PermissionController({
                                                messenger: this.controllerMessenger.getRestricted({
                                                    name: "PermissionController",
                                                    allowedActions: [
                                                        `${this.approvalController.name}:addRequest`,
                                                        `${this.approvalController.name}:hasRequest`,
                                                        `${this.approvalController.name}:acceptRequest`,
                                                        `${this.approvalController.name}:rejectRequest`,
                                                    ],
                                                }),
                                                state: n.PermissionController,
                                                caveatSpecifications: (0, we.getCaveatSpecifications)({ getIdentities: u }),
                                                permissionSpecifications: {
                                                    ...(0, we.getPermissionSpecifications)({
                                                        getIdentities: u,
                                                        getAllAccounts: this.keyringController.getAccounts.bind(this.keyringController),
                                                        captureKeyringTypesWithMissingIdentities: (e = {}, t = []) => {
                                                            const r = t
                                                                    .filter((t) => !e[t])
                                                                    .map((e) => {
                                                                        var t;
                                                                        return null === (t = this.keyringController.getKeyringForAccount(e)) || void 0 === t ? void 0 : t.type;
                                                                    }),
                                                                n = Object.keys(e || {}).length,
                                                                s = Object.keys(this.accountTracker.store.getState().accounts || {}).length;
                                                            (0, S.captureException)(
                                                                new Error(
                                                                    `Attempt to get permission specifications failed because their were ${t.length} accounts, but ${n} identities, and the ${r} keyrings included accounts with missing identities. Meanwhile, there are ${s} accounts in the account tracker.`
                                                                )
                                                            );
                                                        },
                                                    }),
                                                },
                                                unrestrictedMethods: we.unrestrictedMethods,
                                            })),
                                                (this.permissionLogController = new we.PermissionLogController({ restrictedMethods: new Set(Object.keys(N.RestrictedMethods)), initState: n.PermissionLogController })),
                                                (this.subjectMetadataController = new k.SubjectMetadataController({
                                                    messenger: this.controllerMessenger.getRestricted({ name: "SubjectMetadataController", allowedActions: [`${this.permissionController.name}:hasPermissions`] }),
                                                    state: n.SubjectMetadataController,
                                                    subjectCacheLimit: 100,
                                                })),
                                                (this.detectTokensController = new ge.default({
                                                    preferences: this.preferencesController,
                                                    tokensController: this.tokensController,
                                                    assetsContractController: this.assetsContractController,
                                                    network: this.networkController,
                                                    keyringMemStore: this.keyringController.memStore,
                                                    tokenList: this.tokenListController,
                                                    trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                })),
                                                (this.addressBookController = new k.AddressBookController(undefined, n.AddressBookController)),
                                                (this.alertController = new se.default({ initState: n.AlertController, preferencesStore: this.preferencesController.store })),
                                                (this.backupController = new ie.default({
                                                    preferencesController: this.preferencesController,
                                                    addressBookController: this.addressBookController,
                                                    trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                })),
                                                (this.txController = new pe.default({
                                                    initState: n.TransactionController || n.TransactionManager,
                                                    getPermittedAccounts: this.getPermittedAccounts.bind(this),
                                                    getProviderConfig: this.networkController.getProviderConfig.bind(this.networkController),
                                                    getCurrentNetworkEIP1559Compatibility: this.networkController.getEIP1559Compatibility.bind(this.networkController),
                                                    getCurrentAccountEIP1559Compatibility: this.getCurrentAccountEIP1559Compatibility.bind(this),
                                                    networkStore: this.networkController.networkStore,
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    preferencesStore: this.preferencesController.store,
                                                    txHistoryLimit: 60,
                                                    signTransaction: this.keyringController.signTransaction.bind(this.keyringController),
                                                    provider: this.provider,
                                                    blockTracker: this.blockTracker,
                                                    createEventFragment: this.metaMetricsController.createEventFragment.bind(this.metaMetricsController),
                                                    updateEventFragment: this.metaMetricsController.updateEventFragment.bind(this.metaMetricsController),
                                                    finalizeEventFragment: this.metaMetricsController.finalizeEventFragment.bind(this.metaMetricsController),
                                                    getEventFragmentById: this.metaMetricsController.getEventFragmentById.bind(this.metaMetricsController),
                                                    trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                    getParticipateInMetrics: () => this.metaMetricsController.state.participateInMetaMetrics,
                                                    getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                                                    getExternalPendingTransactions: this.getExternalPendingTransactions.bind(this),
                                                    getAccountType: this.getAccountType.bind(this),
                                                    getDeviceModel: this.getDeviceModel.bind(this),
                                                    getTokenStandardAndDetails: this.assetsContractController.getTokenStandardAndDetails.bind(this.assetsContractController),
                                                })),
                                                this.txController.on("newUnapprovedTx", () => e.showUserConfirmation()),
                                                this.txController.on("tx:status-update", async (e, t) => {
                                                    if (t === A.TRANSACTION_STATUSES.CONFIRMED || t === A.TRANSACTION_STATUSES.FAILED) {
                                                        const t = this.txController.txStateManager.getTransaction(e),
                                                            i = this.preferencesController.getFrequentRpcListDetail();
                                                        let a = {};
                                                        if (t.chainId) {
                                                            var r;
                                                            const e = i.find((e) => t.chainId === e.chainId);
                                                            a = null !== (r = null == e ? void 0 : e.rpcPrefs) && void 0 !== r ? r : {};
                                                        }
                                                        this.platform.showTransactionNotification(t, a);
                                                        const { txReceipt: c } = t;
                                                        if (t.type === A.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM && t.txParams !== undefined) {
                                                            var n, s;
                                                            const { data: e, to: r, from: o } = t.txParams,
                                                                { chainId: i } = t,
                                                                a = (0, $.parseStandardTokenTransactionData)(e),
                                                                c = null !== (n = (0, F.getTokenIdParam)(a)) && void 0 !== n ? n : (0, q.getTokenValueParam)(a),
                                                                { allCollectibles: l } = this.collectiblesController.state,
                                                                d = null == l || null === (s = l[o]) || void 0 === s ? void 0 : s[i].find(({ address: e, tokenId: t }) => (0, B.isEqualCaseInsensitive)(e, r) && t === c);
                                                            d && this.collectiblesController.checkAndUpdateSingleCollectibleOwnershipStatus(d, !1, { userAddress: o, chainId: i });
                                                        }
                                                        const l = await this.getState();
                                                        var o;
                                                        if (c && "0x0" === c.status)
                                                            this.metaMetricsController.trackEvent(
                                                                {
                                                                    event: "Tx Status Update: On-Chain Failure",
                                                                    category: j.EVENT.CATEGORIES.BACKGROUND,
                                                                    properties: {
                                                                        action: "Transactions",
                                                                        errorMessage: null === (o = t.simulationFails) || void 0 === o ? void 0 : o.reason,
                                                                        numberOfTokens: l.tokens.length,
                                                                        numberOfAccounts: Object.keys(l.accounts).length,
                                                                    },
                                                                },
                                                                { matomoEvent: !0 }
                                                            );
                                                    }
                                                }),
                                                this.networkController.on(ee.NETWORK_EVENTS.NETWORK_DID_CHANGE, async () => {
                                                    const { ticker: e } = this.networkController.getProviderConfig();
                                                    try {
                                                        await this.currencyRateController.setNativeCurrency(e);
                                                    } catch (e) {
                                                        console.error(e);
                                                    }
                                                }),
                                                this.networkController.lookupNetwork(),
                                                (this.messageManager = new ce.default({ metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController) })),
                                                (this.personalMessageManager = new ue.default({ metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController) })),
                                                (this.decryptMessageManager = new le.default({ metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController) })),
                                                (this.encryptionPublicKeyManager = new de.default({ metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController) })),
                                                (this.typedMessageManager = new he.default({
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    metricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                })),
                                                (this.swapsController = new me.default({
                                                    getBufferedGasLimit: this.txController.txGasUtil.getBufferedGasLimit.bind(this.txController.txGasUtil),
                                                    networkController: this.networkController,
                                                    provider: this.provider,
                                                    getProviderConfig: this.networkController.getProviderConfig.bind(this.networkController),
                                                    getTokenRatesState: () => this.tokenRatesController.state,
                                                    getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                    getEIP1559GasFeeEstimates: this.gasFeeController.fetchGasFeeEstimates.bind(this.gasFeeController),
                                                })),
                                                (this.smartTransactionsController = new _.default(
                                                    {
                                                        onNetworkStateChange: this.networkController.store.subscribe.bind(this.networkController.store),
                                                        getNetwork: this.networkController.getNetworkState.bind(this.networkController),
                                                        getNonceLock: this.txController.nonceTracker.getNonceLock.bind(this.txController.nonceTracker),
                                                        confirmExternalTransaction: this.txController.confirmExternalTransaction.bind(this.txController),
                                                        provider: this.provider,
                                                        trackMetaMetricsEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                    },
                                                    { supportedChainIds: [R.CHAIN_IDS.MAINNET, R.CHAIN_IDS.GOERLI] },
                                                    n.SmartTransactionsController
                                                )),
                                                this.networkController.on(ee.NETWORK_EVENTS.NETWORK_DID_CHANGE, () => {
                                                    this.accountTracker._updateAccounts();
                                                }),
                                                this.networkController.on(ee.NETWORK_EVENTS.NETWORK_WILL_CHANGE, () => {
                                                    this.txController.txStateManager.clearUnapprovedTxs(),
                                                        this.encryptionPublicKeyManager.clearUnapproved(),
                                                        this.personalMessageManager.clearUnapproved(),
                                                        this.typedMessageManager.clearUnapproved(),
                                                        this.decryptMessageManager.clearUnapproved(),
                                                        this.messageManager.clearUnapproved();
                                                }),
                                                this.on("update", (e) => this._onStateUpdate(e)),
                                                this.store.updateStructure({
                                                    AppStateController: this.appStateController.store,
                                                    TransactionController: this.txController.store,
                                                    KeyringController: this.keyringController.store,
                                                    PreferencesController: this.preferencesController.store,
                                                    MetaMetricsController: this.metaMetricsController.store,
                                                    AddressBookController: this.addressBookController,
                                                    CurrencyController: this.currencyRateController,
                                                    NetworkController: this.networkController.store,
                                                    CachedBalancesController: this.cachedBalancesController.store,
                                                    AlertController: this.alertController.store,
                                                    OnboardingController: this.onboardingController.store,
                                                    IncomingTransactionsController: this.incomingTransactionsController.store,
                                                    PermissionController: this.permissionController,
                                                    PermissionLogController: this.permissionLogController.store,
                                                    SubjectMetadataController: this.subjectMetadataController,
                                                    BackupController: this.backupController,
                                                    AnnouncementController: this.announcementController,
                                                    GasFeeController: this.gasFeeController,
                                                    TokenListController: this.tokenListController,
                                                    TokensController: this.tokensController,
                                                    SmartTransactionsController: this.smartTransactionsController,
                                                    CollectiblesController: this.collectiblesController,
                                                }),
                                                (this.memStore = new G.default({
                                                    config: {
                                                        AppStateController: this.appStateController.store,
                                                        NetworkController: this.networkController.store,
                                                        AccountTracker: this.accountTracker.store,
                                                        TxController: this.txController.memStore,
                                                        CachedBalancesController: this.cachedBalancesController.store,
                                                        TokenRatesController: this.tokenRatesController,
                                                        MessageManager: this.messageManager.memStore,
                                                        PersonalMessageManager: this.personalMessageManager.memStore,
                                                        DecryptMessageManager: this.decryptMessageManager.memStore,
                                                        EncryptionPublicKeyManager: this.encryptionPublicKeyManager.memStore,
                                                        TypesMessageManager: this.typedMessageManager.memStore,
                                                        KeyringController: this.keyringController.memStore,
                                                        PreferencesController: this.preferencesController.store,
                                                        MetaMetricsController: this.metaMetricsController.store,
                                                        AddressBookController: this.addressBookController,
                                                        CurrencyController: this.currencyRateController,
                                                        AlertController: this.alertController.store,
                                                        OnboardingController: this.onboardingController.store,
                                                        IncomingTransactionsController: this.incomingTransactionsController.store,
                                                        PermissionController: this.permissionController,
                                                        PermissionLogController: this.permissionLogController.store,
                                                        SubjectMetadataController: this.subjectMetadataController,
                                                        BackupController: this.backupController,
                                                        SwapsController: this.swapsController.store,
                                                        EnsController: this.ensController.store,
                                                        ApprovalController: this.approvalController,
                                                        AnnouncementController: this.announcementController,
                                                        GasFeeController: this.gasFeeController,
                                                        TokenListController: this.tokenListController,
                                                        TokensController: this.tokensController,
                                                        SmartTransactionsController: this.smartTransactionsController,
                                                        CollectiblesController: this.collectiblesController,
                                                    },
                                                    controllerMessenger: this.controllerMessenger,
                                                })),
                                                this.memStore.subscribe(this.sendUpdate.bind(this));
                                            const h = null === (r = {}) || void 0 === r ? void 0 : r.PASSWORD;
                                            h && !this.isUnlocked() && this.onboardingController.store.getState().completedOnboarding && this.submitPassword(h),
                                                this.extension.runtime.getPlatformInfo().then(({ os: e }) => {
                                                    this.appStateController.setBrowserEnvironment(e, this.extension.runtime.getBrowserInfo === undefined ? "chrome" : "firefox");
                                                }),
                                                this.setupControllerEventSubscriptions(),
                                                (this.publicConfigStore = this.createPublicConfigStore()),
                                                this.extension.runtime.onMessageExternal.addListener(H.onMessageReceived),
                                                (0, H.checkForMultipleVersionsRunning)();
                                        }
                                        setupControllerEventSubscriptions() {
                                            const e = async (e, t) => {
                                                this.isUnlocked() && this.notifyConnections(e, { method: we.NOTIFICATION_NAMES.accountsChanged, params: t.length < 2 ? t : await this.getPermittedAccounts(e) }),
                                                    this.permissionLogController.updateAccountsHistory(e, t);
                                            };
                                            let t;
                                            this.preferencesController.store.subscribe(async ({ selectedAddress: r }) => {
                                                if (r && r !== t) {
                                                    t = r;
                                                    const n = (0, we.getPermittedAccountsByOrigin)(this.permissionController.state);
                                                    for (const [t, s] of n.entries()) s.includes(r) && e(t, s);
                                                }
                                            }),
                                                this.controllerMessenger.subscribe(
                                                    `${this.permissionController.name}:stateChange`,
                                                    async (t, r) => {
                                                        const n = (0, we.getChangedAccounts)(t, r);
                                                        for (const [t, r] of n.entries()) e(t, r);
                                                    },
                                                    we.getPermittedAccountsByOrigin
                                                );
                                        }
                                        initializeProvider() {
                                            const e = this.platform.getVersion(),
                                                t = {
                                                    static: { eth_syncing: !1, web3_clientVersion: `MetaMask/v${e}` },
                                                    version: e,
                                                    getAccounts: async ({ origin: e }, { suppressUnauthorizedError: t = !0 } = {}) => {
                                                        if (e === U.ORIGIN_METAMASK) {
                                                            const e = this.preferencesController.getSelectedAddress();
                                                            return e ? [e] : [];
                                                        }
                                                        return this.isUnlocked() ? await this.getPermittedAccounts(e, { suppressUnauthorizedError: t }) : [];
                                                    },
                                                    processTransaction: this.newUnapprovedTransaction.bind(this),
                                                    processEthSignMessage: this.newUnsignedMessage.bind(this),
                                                    processTypedMessage: this.newUnsignedTypedMessage.bind(this),
                                                    processTypedMessageV3: this.newUnsignedTypedMessage.bind(this),
                                                    processTypedMessageV4: this.newUnsignedTypedMessage.bind(this),
                                                    processPersonalMessage: this.newUnsignedPersonalMessage.bind(this),
                                                    processDecryptMessage: this.newRequestDecryptMessage.bind(this),
                                                    processEncryptionPublicKey: this.newRequestEncryptionPublicKey.bind(this),
                                                    getPendingNonce: this.getPendingNonce.bind(this),
                                                    getPendingTransactionByHash: (e) => this.txController.getTransactions({ searchCriteria: { hash: e, status: A.TRANSACTION_STATUSES.SUBMITTED } })[0],
                                                };
                                            return this.networkController.initializeProvider(t);
                                        }
                                        createPublicConfigStore() {
                                            const e = new i.ObservableStore(),
                                                { networkController: t } = this;
                                            function r(r) {
                                                const n = t.getCurrentChainId();
                                                "loading" !== r.network &&
                                                    e.putState(
                                                        (function (e, { isUnlocked: t, network: r }) {
                                                            return { isUnlocked: t, chainId: e, networkVersion: r };
                                                        })(n, r)
                                                    );
                                            }
                                            return this.on("update", r), r(this.getState()), e;
                                        }
                                        async getProviderState(e) {
                                            return { isUnlocked: this.isUnlocked(), ...this.getProviderNetworkState(), accounts: await this.getPermittedAccounts(e) };
                                        }
                                        getProviderNetworkState(e) {
                                            const { network: t } = e || this.getState();
                                            return { chainId: this.networkController.getCurrentChainId(), networkVersion: t };
                                        }
                                        getState() {
                                            const { vault: e } = this.keyringController.store.getState();
                                            return { isInitialized: Boolean(e), ...this.memStore.getFlatState() };
                                        }
                                        getApi() {
                                            const {
                                                addressBookController: e,
                                                alertController: t,
                                                appStateController: r,
                                                collectiblesController: n,
                                                collectibleDetectionController: s,
                                                currencyRateController: o,
                                                detectTokensController: i,
                                                ensController: a,
                                                gasFeeController: c,
                                                keyringController: l,
                                                metaMetricsController: d,
                                                networkController: u,
                                                announcementController: h,
                                                onboardingController: p,
                                                permissionController: g,
                                                preferencesController: m,
                                                qrHardwareKeyring: f,
                                                swapsController: y,
                                                tokensController: b,
                                                smartTransactionsController: C,
                                                txController: v,
                                                assetsContractController: w,
                                                backupController: E,
                                            } = this;
                                            return {
                                                getState: this.getState.bind(this),
                                                setCurrentCurrency: o.setCurrentCurrency.bind(o),
                                                setUseBlockie: m.setUseBlockie.bind(m),
                                                setUseNonceField: m.setUseNonceField.bind(m),
                                                setUsePhishDetect: m.setUsePhishDetect.bind(m),
                                                setUseTokenDetection: m.setUseTokenDetection.bind(m),
                                                setUseCollectibleDetection: m.setUseCollectibleDetection.bind(m),
                                                setOpenSeaEnabled: m.setOpenSeaEnabled.bind(m),
                                                setIpfsGateway: m.setIpfsGateway.bind(m),
                                                setParticipateInMetaMetrics: d.setParticipateInMetaMetrics.bind(d),
                                                setCurrentLocale: m.setCurrentLocale.bind(m),
                                                markPasswordForgotten: this.markPasswordForgotten.bind(this),
                                                unMarkPasswordForgotten: this.unMarkPasswordForgotten.bind(this),
                                                getRequestAccountTabIds: this.getRequestAccountTabIds,
                                                getOpenMetamaskTabsIds: this.getOpenMetamaskTabsIds,
                                                markNotificationPopupAsAutomaticallyClosed: () => this.notificationManager.markAsAutomaticallyClosed(),
                                                addNewAccount: this.addNewAccount.bind(this),
                                                verifySeedPhrase: this.verifySeedPhrase.bind(this),
                                                resetAccount: this.resetAccount.bind(this),
                                                removeAccount: this.removeAccount.bind(this),
                                                importAccountWithStrategy: this.importAccountWithStrategy.bind(this),
                                                connectHardware: this.connectHardware.bind(this),
                                                forgetDevice: this.forgetDevice.bind(this),
                                                checkHardwareStatus: this.checkHardwareStatus.bind(this),
                                                unlockHardwareWalletAccount: this.unlockHardwareWalletAccount.bind(this),
                                                setLedgerTransportPreference: this.setLedgerTransportPreference.bind(this),
                                                attemptLedgerTransportCreation: this.attemptLedgerTransportCreation.bind(this),
                                                establishLedgerTransportPreference: this.establishLedgerTransportPreference.bind(this),
                                                submitQRHardwareCryptoHDKey: f.submitCryptoHDKey.bind(f),
                                                submitQRHardwareCryptoAccount: f.submitCryptoAccount.bind(f),
                                                cancelSyncQRHardware: f.cancelSync.bind(f),
                                                submitQRHardwareSignature: f.submitSignature.bind(f),
                                                cancelQRHardwareSignRequest: f.cancelSignRequest.bind(f),
                                                fetchInfoToSync: this.fetchInfoToSync.bind(this),
                                                submitPassword: this.submitPassword.bind(this),
                                                verifyPassword: this.verifyPassword.bind(this),
                                                setProviderType: u.setProviderType.bind(u),
                                                rollbackToPreviousProvider: u.rollbackToPreviousProvider.bind(u),
                                                setCustomRpc: this.setCustomRpc.bind(this),
                                                updateAndSetCustomRpc: this.updateAndSetCustomRpc.bind(this),
                                                delCustomRpc: this.delCustomRpc.bind(this),
                                                addCustomNetwork: this.addCustomNetwork.bind(this),
                                                requestAddNetworkApproval: this.requestAddNetworkApproval.bind(this),
                                                setSelectedAddress: m.setSelectedAddress.bind(m),
                                                addToken: b.addToken.bind(b),
                                                rejectWatchAsset: b.rejectWatchAsset.bind(b),
                                                acceptWatchAsset: b.acceptWatchAsset.bind(b),
                                                updateTokenType: b.updateTokenType.bind(b),
                                                setAccountLabel: m.setAccountLabel.bind(m),
                                                setFeatureFlag: m.setFeatureFlag.bind(m),
                                                setPreference: m.setPreference.bind(m),
                                                addKnownMethodData: m.addKnownMethodData.bind(m),
                                                setDismissSeedBackUpReminder: m.setDismissSeedBackUpReminder.bind(m),
                                                setAdvancedGasFee: m.setAdvancedGasFee.bind(m),
                                                setEIP1559V2Enabled: m.setEIP1559V2Enabled.bind(m),
                                                setTheme: m.setTheme.bind(m),
                                                getTokenStandardAndDetails: this.getTokenStandardAndDetails.bind(this),
                                                addCollectible: n.addCollectible.bind(n),
                                                addCollectibleVerifyOwnership: n.addCollectibleVerifyOwnership.bind(n),
                                                removeAndIgnoreCollectible: n.removeAndIgnoreCollectible.bind(n),
                                                removeCollectible: n.removeCollectible.bind(n),
                                                checkAndUpdateAllCollectiblesOwnershipStatus: n.checkAndUpdateAllCollectiblesOwnershipStatus.bind(n),
                                                checkAndUpdateSingleCollectibleOwnershipStatus: n.checkAndUpdateSingleCollectibleOwnershipStatus.bind(n),
                                                isCollectibleOwner: n.isCollectibleOwner.bind(n),
                                                setAddressBook: e.set.bind(e),
                                                removeFromAddressBook: e.delete.bind(e),
                                                setLastActiveTime: r.setLastActiveTime.bind(r),
                                                setDefaultHomeActiveTabName: r.setDefaultHomeActiveTabName.bind(r),
                                                setConnectedStatusPopoverHasBeenShown: r.setConnectedStatusPopoverHasBeenShown.bind(r),
                                                setRecoveryPhraseReminderHasBeenShown: r.setRecoveryPhraseReminderHasBeenShown.bind(r),
                                                setRecoveryPhraseReminderLastShown: r.setRecoveryPhraseReminderLastShown.bind(r),
                                                setShowTestnetMessageInDropdown: r.setShowTestnetMessageInDropdown.bind(r),
                                                setShowPortfolioTooltip: r.setShowPortfolioTooltip.bind(r),
                                                setShowBetaHeader: r.setShowBetaHeader.bind(r),
                                                setCollectiblesDetectionNoticeDismissed: r.setCollectiblesDetectionNoticeDismissed.bind(r),
                                                setEnableEIP1559V2NoticeDismissed: r.setEnableEIP1559V2NoticeDismissed.bind(r),
                                                updateCollectibleDropDownState: r.updateCollectibleDropDownState.bind(r),
                                                setFirstTimeUsedNetwork: r.setFirstTimeUsedNetwork.bind(r),
                                                tryReverseResolveAddress: a.reverseResolveAddress.bind(a),
                                                setLocked: this.setLocked.bind(this),
                                                createNewVaultAndKeychain: this.createNewVaultAndKeychain.bind(this),
                                                createNewVaultAndRestore: this.createNewVaultAndRestore.bind(this),
                                                exportAccount: l.exportAccount.bind(l),
                                                cancelTransaction: v.cancelTransaction.bind(v),
                                                updateTransaction: v.updateTransaction.bind(v),
                                                updateAndApproveTransaction: v.updateAndApproveTransaction.bind(v),
                                                approveTransactionsWithSameNonce: v.approveTransactionsWithSameNonce.bind(v),
                                                createCancelTransaction: this.createCancelTransaction.bind(this),
                                                createSpeedUpTransaction: this.createSpeedUpTransaction.bind(this),
                                                estimateGas: this.estimateGas.bind(this),
                                                getNextNonce: this.getNextNonce.bind(this),
                                                addUnapprovedTransaction: v.addUnapprovedTransaction.bind(v),
                                                createTransactionEventFragment: v.createTransactionEventFragment.bind(v),
                                                getTransactions: v.getTransactions.bind(v),
                                                updateEditableParams: v.updateEditableParams.bind(v),
                                                updateTransactionGasFees: v.updateTransactionGasFees.bind(v),
                                                updateTransactionSendFlowHistory: v.updateTransactionSendFlowHistory.bind(v),
                                                updateSwapApprovalTransaction: v.updateSwapApprovalTransaction.bind(v),
                                                updateSwapTransaction: v.updateSwapTransaction.bind(v),
                                                updatePreviousGasParams: v.updatePreviousGasParams.bind(v),
                                                signMessage: this.signMessage.bind(this),
                                                cancelMessage: this.cancelMessage.bind(this),
                                                signPersonalMessage: this.signPersonalMessage.bind(this),
                                                cancelPersonalMessage: this.cancelPersonalMessage.bind(this),
                                                signTypedMessage: this.signTypedMessage.bind(this),
                                                cancelTypedMessage: this.cancelTypedMessage.bind(this),
                                                decryptMessage: this.decryptMessage.bind(this),
                                                decryptMessageInline: this.decryptMessageInline.bind(this),
                                                cancelDecryptMessage: this.cancelDecryptMessage.bind(this),
                                                encryptionPublicKey: this.encryptionPublicKey.bind(this),
                                                cancelEncryptionPublicKey: this.cancelEncryptionPublicKey.bind(this),
                                                setSeedPhraseBackedUp: p.setSeedPhraseBackedUp.bind(p),
                                                completeOnboarding: p.completeOnboarding.bind(p),
                                                setFirstTimeFlowType: p.setFirstTimeFlowType.bind(p),
                                                setAlertEnabledness: t.setAlertEnabledness.bind(t),
                                                setUnconnectedAccountAlertShown: t.setUnconnectedAccountAlertShown.bind(t),
                                                setWeb3ShimUsageAlertDismissed: t.setWeb3ShimUsageAlertDismissed.bind(t),
                                                removePermissionsFor: this.removePermissionsFor,
                                                approvePermissionsRequest: this.acceptPermissionsRequest,
                                                rejectPermissionsRequest: this.rejectPermissionsRequest,
                                                ...(0, we.getPermissionBackgroundApiMethods)(g),
                                                fetchAndSetQuotes: y.fetchAndSetQuotes.bind(y),
                                                setSelectedQuoteAggId: y.setSelectedQuoteAggId.bind(y),
                                                resetSwapsState: y.resetSwapsState.bind(y),
                                                setSwapsTokens: y.setSwapsTokens.bind(y),
                                                clearSwapsQuotes: y.clearSwapsQuotes.bind(y),
                                                setApproveTxId: y.setApproveTxId.bind(y),
                                                setTradeTxId: y.setTradeTxId.bind(y),
                                                setSwapsTxGasPrice: y.setSwapsTxGasPrice.bind(y),
                                                setSwapsTxGasLimit: y.setSwapsTxGasLimit.bind(y),
                                                setSwapsTxMaxFeePerGas: y.setSwapsTxMaxFeePerGas.bind(y),
                                                setSwapsTxMaxFeePriorityPerGas: y.setSwapsTxMaxFeePriorityPerGas.bind(y),
                                                safeRefetchQuotes: y.safeRefetchQuotes.bind(y),
                                                stopPollingForQuotes: y.stopPollingForQuotes.bind(y),
                                                setBackgroundSwapRouteState: y.setBackgroundSwapRouteState.bind(y),
                                                resetPostFetchState: y.resetPostFetchState.bind(y),
                                                setSwapsErrorKey: y.setSwapsErrorKey.bind(y),
                                                setInitialGasEstimate: y.setInitialGasEstimate.bind(y),
                                                setCustomApproveTxData: y.setCustomApproveTxData.bind(y),
                                                setSwapsLiveness: y.setSwapsLiveness.bind(y),
                                                setSwapsFeatureFlags: y.setSwapsFeatureFlags.bind(y),
                                                setSwapsUserFeeLevel: y.setSwapsUserFeeLevel.bind(y),
                                                setSwapsQuotesPollingLimitEnabled: y.setSwapsQuotesPollingLimitEnabled.bind(y),
                                                setSmartTransactionsOptInStatus: C.setOptInState.bind(C),
                                                fetchSmartTransactionFees: C.getFees.bind(C),
                                                clearSmartTransactionFees: C.clearFees.bind(C),
                                                submitSignedTransactions: C.submitSignedTransactions.bind(C),
                                                cancelSmartTransaction: C.cancelSmartTransaction.bind(C),
                                                fetchSmartTransactionsLiveness: C.fetchLiveness.bind(C),
                                                updateSmartTransaction: C.updateSmartTransaction.bind(C),
                                                setStatusRefreshInterval: C.setStatusRefreshInterval.bind(C),
                                                trackMetaMetricsEvent: d.trackEvent.bind(d),
                                                trackMetaMetricsPage: d.trackPage.bind(d),
                                                createEventFragment: d.createEventFragment.bind(d),
                                                updateEventFragment: d.updateEventFragment.bind(d),
                                                finalizeEventFragment: d.finalizeEventFragment.bind(d),
                                                resolvePendingApproval: this.resolvePendingApproval,
                                                rejectPendingApproval: this.rejectPendingApproval,
                                                updateViewedNotifications: h.updateViewed.bind(h),
                                                getGasFeeEstimatesAndStartPolling: c.getGasFeeEstimatesAndStartPolling.bind(c),
                                                disconnectGasFeeEstimatePoller: c.disconnectPoller.bind(c),
                                                getGasFeeTimeEstimate: c.getTimeEstimate.bind(c),
                                                addPollingTokenToAppState: r.addPollingToken.bind(r),
                                                removePollingTokenFromAppState: r.removePollingToken.bind(r),
                                                backupUserData: E.backupUserData.bind(E),
                                                restoreUserData: E.restoreUserData.bind(E),
                                                detectNewTokens: i.detectNewTokens.bind(i),
                                                detectCollectibles: null,
                                                addDetectedTokens: b.addDetectedTokens.bind(b),
                                                addImportedTokens: b.addTokens.bind(b),
                                                ignoreTokens: b.ignoreTokens.bind(b),
                                                getBalancesInSingleCall: w.getBalancesInSingleCall.bind(w),
                                            };
                                        }
                                        async getTokenStandardAndDetails(e, t, r) {
                                            var n, s;
                                            const o = await this.assetsContractController.getTokenStandardAndDetails(e, t, r);
                                            return {
                                                ...o,
                                                decimals: null == o || null === (n = o.decimals) || void 0 === n ? void 0 : n.toString(10),
                                                balance: null == o || null === (s = o.balance) || void 0 === s ? void 0 : s.toString(10),
                                            };
                                        }
                                        async createNewVaultAndKeychain(e) {
                                            const t = await this.createVaultMutex.acquire();
                                            try {
                                                let r;
                                                if ((await this.keyringController.getAccounts()).length > 0) r = await this.keyringController.fullUpdate();
                                                else {
                                                    r = await this.keyringController.createNewVaultAndKeychain(e);
                                                    const t = await this.keyringController.getAccounts();
                                                    this.preferencesController.setAddresses(t), this.selectFirstIdentity();
                                                }
                                                return r;
                                            } finally {
                                                t();
                                            }
                                        }
                                        async requestAddNetworkApproval(e, t) {
                                            try {
                                                await this.approvalController.addAndShowApprovalRequest({
                                                    origin: "metamask",
                                                    type: "wallet_addEthereumChain",
                                                    requestData: { chainId: e.chainId, blockExplorerUrl: e.rpcPrefs.blockExplorerUrl, chainName: e.nickname, rpcUrl: e.rpcUrl, ticker: e.ticker, imageUrl: e.rpcPrefs.imageUrl },
                                                });
                                            } catch (e) {
                                                if (!t || "User rejected the request." !== e.message) throw e;
                                            }
                                        }
                                        async addCustomNetwork(e, t) {
                                            const { chainId: r, chainName: n, rpcUrl: s, ticker: o, blockExplorerUrl: i } = e;
                                            let a;
                                            await this.preferencesController.addToFrequentRpcList(s, r, o, n, { blockExplorerUrl: i });
                                            try {
                                                a = new URL(s).origin;
                                            } catch {}
                                            this.metaMetricsController.trackEvent({
                                                event: "Custom Network Added",
                                                category: j.EVENT.CATEGORIES.NETWORK,
                                                referrer: { url: a },
                                                properties: { chain_id: r, network_name: n, network: a, symbol: o, block_explorer_url: i, source: j.EVENT.SOURCE.NETWORK.POPULAR_NETWORK_LIST },
                                                sensitiveProperties: { rpc_url: a },
                                                actionId: t,
                                            });
                                        }
                                        async createNewVaultAndRestore(e, t) {
                                            const r = await this.createVaultMutex.acquire();
                                            try {
                                                let s, o;
                                                const i = n.from(t),
                                                    { keyringController: a } = this;
                                                this.preferencesController.setAddresses([]),
                                                    this.permissionController.clearState(),
                                                    this.accountTracker.clearAccounts(),
                                                    this.cachedBalancesController.clearCachedBalances(),
                                                    this.txController.txStateManager.clearUnapprovedTxs();
                                                const c = await a.createNewVaultAndRestore(e, i),
                                                    l = new E.default(this.provider);
                                                (s = await a.getAccounts()), (o = await this.getBalance(s[s.length - 1], l));
                                                const [d] = a.getKeyringsByType("HD Key Tree");
                                                if (!d) throw new Error("MetamaskController - No HD Key Tree found");
                                                for (; "0x0" !== o; ) await a.addNewAccount(d), (s = await a.getAccounts()), (o = await this.getBalance(s[s.length - 1], l));
                                                s.length > 1 && "0x0" === o && (await this.removeAccount(s[s.length - 1]), (s = await a.getAccounts()));
                                                const u = this.preferencesController.getLedgerTransportPreference();
                                                return this.setLedgerTransportPreference(u), this.preferencesController.setAddresses(s), this.selectFirstIdentity(), c;
                                            } finally {
                                                r();
                                            }
                                        }
                                        getBalance(e, t) {
                                            return new Promise((r, n) => {
                                                const s = this.accountTracker.store.getState().accounts[e];
                                                s && s.balance
                                                    ? r(s.balance)
                                                    : t.getBalance(e, (e, t) => {
                                                          e ? (n(e), y.default.error(e)) : r(t || "0x0");
                                                      });
                                            });
                                        }
                                        async fetchInfoToSync() {
                                            const { currentLocale: e, frequentRpcList: t, identities: r, selectedAddress: n, useTokenDetection: s } = this.preferencesController.store.getState(),
                                                o = !s && this.networkController.store.getState().provider.chainId === R.CHAIN_IDS.MAINNET,
                                                { tokenList: i } = this.tokenListController.state,
                                                a = o ? K.STATIC_MAINNET_TOKEN_LIST : i,
                                                c = { currentLocale: e, frequentRpcList: t, identities: r, selectedAddress: n },
                                                { allTokens: l, allIgnoredTokens: d } = this.tokensController.state,
                                                u = {};
                                            Object.keys(l).forEach((e) => {
                                                (u[e] = {}),
                                                    Object.keys(l[e]).forEach((t) => {
                                                        const r = (0, D.toChecksumHexAddress)(t);
                                                        u[e][r] = l[e][r].filter((e) => {
                                                            var t;
                                                            if (e.isERC721 === undefined) {
                                                                if (a[null === (t = e.address) || void 0 === t ? void 0 : t.toLowerCase()] !== undefined) return !0;
                                                            } else if (!1 === e.isERC721) return !0;
                                                            return !1;
                                                        });
                                                    });
                                            });
                                            const [h] = this.keyringController.getKeyringsByType("HD Key Tree"),
                                                p = this.keyringController.getKeyringsByType("Simple Key Pair"),
                                                g = await h.getAccounts(),
                                                m = (await Promise.all(p.map((e) => e.getAccounts()))).reduce((e, t) => [...e, ...t], []),
                                                f = {
                                                    hd: g.filter((e, t) => g.indexOf(e) === t).map((e) => (0, D.toChecksumHexAddress)(e)),
                                                    simpleKeyPair: m.filter((e, t) => m.indexOf(e) === t).map((e) => (0, D.toChecksumHexAddress)(e)),
                                                    ledger: [],
                                                    trezor: [],
                                                    lattice: [],
                                                };
                                            let { transactions: y } = this.txController.store.getState();
                                            return (
                                                (y = Object.values(y).filter((e) => {
                                                    const t = (0, D.toChecksumHexAddress)(e.txParams.from);
                                                    return f.hd.includes(t);
                                                })),
                                                { accounts: f, preferences: c, transactions: y, tokens: { allTokens: u, allIgnoredTokens: d }, network: this.networkController.store.getState() }
                                            );
                                        }
                                        async submitPassword(e) {
                                            await this.keyringController.submitPassword(e);
                                            try {
                                                await this.blockTracker.checkForLatestBlock();
                                            } catch (e) {
                                                y.default.error("Error while unlocking extension.", e);
                                            }
                                            const t = this.preferencesController.getLedgerTransportPreference();
                                            return this.setLedgerTransportPreference(t), this.keyringController.fullUpdate();
                                        }
                                        async verifyPassword(e) {
                                            await this.keyringController.verifyPassword(e);
                                        }
                                        selectFirstIdentity() {
                                            const { identities: e } = this.preferencesController.store.getState(),
                                                [t] = Object.keys(e);
                                            this.preferencesController.setSelectedAddress(t);
                                        }
                                        getPrimaryKeyringMnemonic() {
                                            const [e] = this.keyringController.getKeyringsByType("HD Key Tree");
                                            if (!e.mnemonic) throw new Error("Primary keyring mnemonic unavailable.");
                                            return e.mnemonic;
                                        }
                                        async getKeyringForDevice(e, t = null) {
                                            let r = null;
                                            switch (e) {
                                                case O.DEVICE_NAMES.TREZOR:
                                                    r = b.default.type;
                                                    break;
                                                case O.DEVICE_NAMES.LEDGER:
                                                    r = C.default.type;
                                                    break;
                                                case O.DEVICE_NAMES.QR:
                                                    r = w.MetaMaskKeyring.type;
                                                    break;
                                                case O.DEVICE_NAMES.LATTICE:
                                                    r = v.default.type;
                                                    break;
                                                default:
                                                    throw new Error("MetamaskController:getKeyringForDevice - Unknown device");
                                            }
                                            let [n] = await this.keyringController.getKeyringsByType(r);
                                            if ((n || (n = await this.keyringController.addNewKeyring(r)), t && n.setHdPath && n.setHdPath(t), e === O.DEVICE_NAMES.LATTICE && (n.appName = "MetaMask"), e === O.DEVICE_NAMES.TREZOR)) {
                                                const e = n.getModel();
                                                this.appStateController.setTrezorModel(e);
                                            }
                                            return (n.network = this.networkController.getProviderConfig().type), n;
                                        }
                                        async attemptLedgerTransportCreation() {
                                            const e = await this.getKeyringForDevice(O.DEVICE_NAMES.LEDGER);
                                            return await e.attemptMakeApp();
                                        }
                                        async establishLedgerTransportPreference() {
                                            const e = this.preferencesController.getLedgerTransportPreference();
                                            return await this.setLedgerTransportPreference(e);
                                        }
                                        async connectHardware(e, t, r) {
                                            const n = await this.getKeyringForDevice(e, r);
                                            let s = [];
                                            switch (t) {
                                                case -1:
                                                    s = await n.getPreviousPage();
                                                    break;
                                                case 1:
                                                    s = await n.getNextPage();
                                                    break;
                                                default:
                                                    s = await n.getFirstPage();
                                            }
                                            const o = await this.keyringController.getAccounts(),
                                                i = [...new Set(o.concat(s.map((e) => e.address.toLowerCase())))];
                                            return this.accountTracker.syncWithAddresses(i), s;
                                        }
                                        async checkHardwareStatus(e, t) {
                                            return (await this.getKeyringForDevice(e, t)).isUnlocked();
                                        }
                                        async forgetDevice(e) {
                                            return (await this.getKeyringForDevice(e)).forgetDevice(), !0;
                                        }
                                        async getAccountType(e) {
                                            switch ((await this.keyringController.getKeyringForAccount(e)).type) {
                                                case O.KEYRING_TYPES.TREZOR:
                                                case O.KEYRING_TYPES.LATTICE:
                                                case O.KEYRING_TYPES.QR:
                                                case O.KEYRING_TYPES.LEDGER:
                                                    return "hardware";
                                                case O.KEYRING_TYPES.IMPORTED:
                                                    return "imported";
                                                default:
                                                    return "MetaMask";
                                            }
                                        }
                                        async getDeviceModel(e) {
                                            const t = await this.keyringController.getKeyringForAccount(e);
                                            switch (t.type) {
                                                case O.KEYRING_TYPES.TREZOR:
                                                    return t.getModel();
                                                case O.KEYRING_TYPES.QR:
                                                    return t.getName();
                                                case O.KEYRING_TYPES.LEDGER:
                                                    return O.DEVICE_NAMES.LEDGER;
                                                case O.KEYRING_TYPES.LATTICE:
                                                    return O.DEVICE_NAMES.LATTICE;
                                                default:
                                                    return "N/A";
                                            }
                                        }
                                        getAccountLabel(e, t, r) {
                                            return `${e[0].toUpperCase()}${e.slice(1)} ${parseInt(t, 10) + 1} ${r || ""}`.trim();
                                        }
                                        async unlockHardwareWalletAccount(e, t, r, n) {
                                            const s = await this.getKeyringForDevice(t, r);
                                            s.setAccountToUnlock(e);
                                            const o = await this.keyringController.getAccounts(),
                                                i = await this.keyringController.addNewAccount(s),
                                                a = await this.keyringController.getAccounts();
                                            this.preferencesController.setAddresses(a),
                                                a.forEach((r) => {
                                                    if (!o.includes(r)) {
                                                        const o = this.getAccountLabel(t === O.DEVICE_NAMES.QR ? s.getName() : t, e, n);
                                                        this.preferencesController.setAccountLabel(r, o), this.preferencesController.setSelectedAddress(r);
                                                    }
                                                });
                                            const { identities: c } = this.preferencesController.store.getState();
                                            return { ...i, identities: c };
                                        }
                                        async addNewAccount(e) {
                                            const [t] = this.keyringController.getKeyringsByType("HD Key Tree");
                                            if (!t) throw new Error("MetamaskController - No HD Key Tree found");
                                            const { keyringController: r } = this,
                                                { identities: n } = this.preferencesController.store.getState();
                                            if (Object.keys(n).length === e) {
                                                const e = await r.getAccounts(),
                                                    n = await r.addNewAccount(t),
                                                    s = await r.getAccounts();
                                                await this.verifySeedPhrase(),
                                                    this.preferencesController.setAddresses(s),
                                                    s.forEach((t) => {
                                                        e.includes(t) || this.preferencesController.setSelectedAddress(t);
                                                    });
                                                const { identities: o } = this.preferencesController.store.getState();
                                                return { ...n, identities: o };
                                            }
                                            return { ...r.memStore.getState(), identities: n };
                                        }
                                        async verifySeedPhrase() {
                                            const [e] = this.keyringController.getKeyringsByType("HD Key Tree");
                                            if (!e) throw new Error("MetamaskController - No HD Key Tree found");
                                            const t = await e.serialize(),
                                                r = n.from(t.mnemonic),
                                                s = await e.getAccounts();
                                            if (s.length < 1) throw new Error("MetamaskController - No accounts found");
                                            try {
                                                return await ye.default.verifyAccounts(s, r), Array.from(r.values());
                                            } catch (e) {
                                                throw (y.default.error(e.message), e);
                                            }
                                        }
                                        async resetAccount() {
                                            const e = this.preferencesController.getSelectedAddress();
                                            return this.txController.wipeTransactions(e), this.networkController.resetConnection(), e;
                                        }
                                        async getPermittedAccounts(e, { suppressUnauthorizedError: t = !0 } = {}) {
                                            try {
                                                return await this.permissionController.executeRestrictedMethod(e, N.RestrictedMethods.eth_accounts);
                                            } catch (e) {
                                                if (t && e.code === m.errorCodes.provider.unauthorized) return [];
                                                throw e;
                                            }
                                        }
                                        removeAllAccountPermissions(e) {
                                            this.permissionController.updatePermissionsByCaveat(N.CaveatTypes.restrictReturnedAccounts, (t) => we.CaveatMutatorFactories[N.CaveatTypes.restrictReturnedAccounts].removeAccount(e, t));
                                        }
                                        async removeAccount(e) {
                                            this.removeAllAccountPermissions(e), this.preferencesController.removeAddress(e), this.accountTracker.removeAccount([e]);
                                            const t = await this.keyringController.getKeyringForAccount(e);
                                            await this.keyringController.removeAccount(e);
                                            const r = t ? await t.getAccounts() : {};
                                            var n;
                                            0 === (null == r ? void 0 : r.length) && (null === (n = t.destroy) || void 0 === n || n.call(t));
                                            return e;
                                        }
                                        async importAccountWithStrategy(e, t) {
                                            const r = await fe.default.importAccount(e, t),
                                                n = await this.keyringController.addNewKeyring("Simple Key Pair", [r]),
                                                [s] = await n.getAccounts(),
                                                o = await this.keyringController.getAccounts();
                                            this.preferencesController.setAddresses(o), await this.preferencesController.setSelectedAddress(s);
                                        }
                                        async newUnapprovedTransaction(e, t) {
                                            return await this.txController.newUnapprovedTransaction(e, t);
                                        }
                                        async newUnsignedMessage(e, t) {
                                            const r = (0, ce.normalizeMsgData)(e.data);
                                            let n;
                                            if (66 !== r.length && 67 !== r.length) throw m.ethErrors.rpc.invalidParams("eth_sign requires 32 byte message hash");
                                            return (n = this.messageManager.addUnapprovedMessageAsync(e, t)), this.sendUpdate(), this.opts.showUserConfirmation(), await n;
                                        }
                                        async signMessage(e) {
                                            y.default.info("MetaMaskController - signMessage");
                                            const t = e.metamaskId;
                                            try {
                                                const r = await this.messageManager.approveMessage(e),
                                                    n = await this.keyringController.signMessage(r);
                                                return this.messageManager.setMsgStatusSigned(t, n), this.getState();
                                            } catch (e) {
                                                throw (y.default.info("MetaMaskController - eth_sign failed", e), this.messageManager.errorMessage(t, e), e);
                                            }
                                        }
                                        cancelMessage(e) {
                                            const { messageManager: t } = this;
                                            return t.rejectMsg(e), this.getState();
                                        }
                                        async newUnsignedPersonalMessage(e, t) {
                                            const r = this.personalMessageManager.addUnapprovedMessageAsync(e, t);
                                            return this.sendUpdate(), this.opts.showUserConfirmation(), r;
                                        }
                                        async signPersonalMessage(e) {
                                            y.default.info("MetaMaskController - signPersonalMessage");
                                            const t = e.metamaskId;
                                            try {
                                                const r = await this.personalMessageManager.approveMessage(e),
                                                    n = await this.keyringController.signPersonalMessage(r);
                                                return this.personalMessageManager.setMsgStatusSigned(t, n), this.getState();
                                            } catch (e) {
                                                throw (y.default.info("MetaMaskController - eth_personalSign failed", e), this.personalMessageManager.errorMessage(t, e), e);
                                            }
                                        }
                                        cancelPersonalMessage(e) {
                                            return this.personalMessageManager.rejectMsg(e), this.getState();
                                        }
                                        async newRequestDecryptMessage(e, t) {
                                            const r = this.decryptMessageManager.addUnapprovedMessageAsync(e, t);
                                            return this.sendUpdate(), this.opts.showUserConfirmation(), r;
                                        }
                                        async decryptMessageInline(e) {
                                            y.default.info("MetaMaskController - decryptMessageInline");
                                            const t = e.metamaskId,
                                                r = this.decryptMessageManager.getMsg(t);
                                            try {
                                                const t = (0, D.stripHexPrefix)(e.data),
                                                    s = n.from(t, "hex");
                                                (e.data = JSON.parse(s.toString("utf8"))), (r.rawData = await this.keyringController.decryptMessage(e));
                                            } catch (e) {
                                                r.error = e.message;
                                            }
                                            return this.decryptMessageManager._updateMsg(r), this.getState();
                                        }
                                        async decryptMessage(e) {
                                            y.default.info("MetaMaskController - decryptMessage");
                                            const t = e.metamaskId;
                                            try {
                                                const r = await this.decryptMessageManager.approveMessage(e),
                                                    s = (0, D.stripHexPrefix)(r.data),
                                                    o = n.from(s, "hex");
                                                r.data = JSON.parse(o.toString("utf8"));
                                                const i = await this.keyringController.decryptMessage(r);
                                                this.decryptMessageManager.setMsgStatusDecrypted(t, i);
                                            } catch (e) {
                                                y.default.info("MetaMaskController - eth_decrypt failed.", e), this.decryptMessageManager.errorMessage(t, e);
                                            }
                                            return this.getState();
                                        }
                                        cancelDecryptMessage(e) {
                                            return this.decryptMessageManager.rejectMsg(e), this.getState();
                                        }
                                        async newRequestEncryptionPublicKey(e, t) {
                                            const r = e;
                                            switch ((await this.keyringController.getKeyringForAccount(r)).type) {
                                                case O.KEYRING_TYPES.LEDGER:
                                                    return new Promise((e, t) => {
                                                        t(new Error("Ledger does not support eth_getEncryptionPublicKey."));
                                                    });
                                                case O.KEYRING_TYPES.TREZOR:
                                                    return new Promise((e, t) => {
                                                        t(new Error("Trezor does not support eth_getEncryptionPublicKey."));
                                                    });
                                                case O.KEYRING_TYPES.LATTICE:
                                                    return new Promise((e, t) => {
                                                        t(new Error("Lattice does not support eth_getEncryptionPublicKey."));
                                                    });
                                                case O.KEYRING_TYPES.QR:
                                                    return Promise.reject(new Error("QR hardware does not support eth_getEncryptionPublicKey."));
                                                default: {
                                                    const r = this.encryptionPublicKeyManager.addUnapprovedMessageAsync(e, t);
                                                    return this.sendUpdate(), this.opts.showUserConfirmation(), r;
                                                }
                                            }
                                        }
                                        async encryptionPublicKey(e) {
                                            y.default.info("MetaMaskController - encryptionPublicKey");
                                            const t = e.metamaskId;
                                            try {
                                                const r = await this.encryptionPublicKeyManager.approveMessage(e),
                                                    n = await this.keyringController.getEncryptionPublicKey(r.data);
                                                this.encryptionPublicKeyManager.setMsgStatusReceived(t, n);
                                            } catch (e) {
                                                y.default.info("MetaMaskController - eth_getEncryptionPublicKey failed.", e), this.encryptionPublicKeyManager.errorMessage(t, e);
                                            }
                                            return this.getState();
                                        }
                                        cancelEncryptionPublicKey(e) {
                                            return this.encryptionPublicKeyManager.rejectMsg(e), this.getState();
                                        }
                                        newUnsignedTypedMessage(e, t, r) {
                                            const n = this.typedMessageManager.addUnapprovedMessageAsync(e, t, r);
                                            return this.sendUpdate(), this.opts.showUserConfirmation(), n;
                                        }
                                        async signTypedMessage(e) {
                                            y.default.info("MetaMaskController - eth_signTypedData");
                                            const t = e.metamaskId,
                                                { version: r } = e;
                                            try {
                                                const n = await this.typedMessageManager.approveMessage(e);
                                                "V1" !== r && "string" == typeof n.data && (n.data = JSON.parse(n.data));
                                                const s = await this.keyringController.signTypedMessage(n, { version: r });
                                                return this.typedMessageManager.setMsgStatusSigned(t, s), this.getState();
                                            } catch (e) {
                                                throw (y.default.info("MetaMaskController - eth_signTypedData failed.", e), this.typedMessageManager.errorMessage(t, e), e);
                                            }
                                        }
                                        cancelTypedMessage(e) {
                                            return this.typedMessageManager.rejectMsg(e), this.getState();
                                        }
                                        async getCurrentAccountEIP1559Compatibility() {
                                            return !0;
                                        }
                                        async createCancelTransaction(e, t, r) {
                                            await this.txController.createCancelTransaction(e, t, r);
                                            return await this.getState();
                                        }
                                        async createSpeedUpTransaction(e, t, r) {
                                            await this.txController.createSpeedUpTransaction(e, t, r);
                                            return await this.getState();
                                        }
                                        estimateGas(e) {
                                            return new Promise((t, r) => this.txController.txGasUtil.query.estimateGas(e, (e, n) => (e ? r(e) : t(n.toString(16)))));
                                        }
                                        markPasswordForgotten() {
                                            this.preferencesController.setPasswordForgotten(!0), this.sendUpdate();
                                        }
                                        unMarkPasswordForgotten() {
                                            this.preferencesController.setPasswordForgotten(!1), this.sendUpdate();
                                        }
                                        setupUntrustedCommunication({ connectionStream: e, sender: t, subjectType: r }) {
                                            const { usePhishDetect: n } = this.preferencesController.store.getState();
                                            let s;
                                            if (((s = r || (t.id && t.id !== this.extension.runtime.id ? U.SUBJECT_TYPES.EXTENSION : U.SUBJECT_TYPES.WEBSITE)), t.url)) {
                                                const { hostname: r } = new URL(t.url);
                                                this.phishingController.isOutOfDate() && this.phishingController.updatePhishingLists();
                                                const s = this.phishingController.test(r);
                                                if (n && null != s && s.result) return void this.sendPhishingWarning(e, r, s);
                                            }
                                            const o = (0, X.setupMultiplex)(e);
                                            this.setupProviderConnection(o.createStream("metamask-provider"), t, s), t.url && this.setupPublicConfig(o.createStream("publicConfig"));
                                        }
                                        setupTrustedCommunication(e, t) {
                                            const r = (0, X.setupMultiplex)(e);
                                            this.setupControllerConnection(r.createStream("controller")), this.setupProviderConnection(r.createStream("provider"), t, U.SUBJECT_TYPES.INTERNAL);
                                        }
                                        setupPhishingCommunication({ connectionStream: e }) {
                                            const { usePhishDetect: t } = this.preferencesController.store.getState();
                                            if (!t) return;
                                            const r = (0, X.setupMultiplex)(e).createStream("metamask-phishing-safelist");
                                            r.on("data", (0, ve.default)({ safelistPhishingDomain: this.safelistPhishingDomain.bind(this) }, r));
                                        }
                                        sendPhishingWarning(e, t, r) {
                                            const n = P.PHISHING_NEW_ISSUE_URLS[null == r ? void 0 : r.name];
                                            (0, X.setupMultiplex)(e).createStream("phishing").write({ hostname: t, newIssueUrl: n });
                                        }
                                        setupControllerConnection(e) {
                                            const t = this.getApi();
                                            (this.activeControllerConnections += 1), this.emit("controllerConnectionChanged", this.activeControllerConnections), e.on("data", (0, ve.default)(t, e, this.store, this.localStoreApiWrapper));
                                            const r = (t) => {
                                                e._writableState.ended || e.write({ jsonrpc: "2.0", method: "sendUpdate", params: [t] });
                                            };
                                            this.on("update", r),
                                                e.on("end", () => {
                                                    (this.activeControllerConnections -= 1), this.emit("controllerConnectionChanged", this.activeControllerConnections), this.removeListener("update", r);
                                                });
                                        }
                                        setupProviderConnection(e, t, r) {
                                            let n, s;
                                            (n = r === U.SUBJECT_TYPES.INTERNAL ? U.ORIGIN_METAMASK : new URL(t.url).origin),
                                                t.id && t.id !== this.extension.runtime.id && this.subjectMetadataController.addSubjectMetadata({ origin: n, extensionId: t.id, subjectType: U.SUBJECT_TYPES.EXTENSION }),
                                                t.tab && t.tab.id && (s = t.tab.id);
                                            const i = this.setupProviderEngine({ origin: n, sender: t, subjectType: r, tabId: s }),
                                                a = (0, d.default)({ engine: i }),
                                                c = this.addConnection(n, { engine: i });
                                            (0, o.default)(e, a, e, (e) => {
                                                i._middleware.forEach((e) => {
                                                    e.destroy && "function" == typeof e.destroy && e.destroy();
                                                }),
                                                    c && this.removeConnection(n, c),
                                                    e && y.default.error(e);
                                            });
                                        }
                                        setupProviderEngine({ origin: e, subjectType: t, sender: r, tabId: n }) {
                                            const s = new c.JsonRpcEngine(),
                                                { blockTracker: o, provider: i } = this,
                                                a = (0, u.default)({ provider: i, blockTracker: o }),
                                                l = (0, h.default)({ provider: i, blockTracker: o });
                                            return (
                                                l.events.on("notification", (e) => s.emit("notification", e)),
                                                s.push((0, Y.default)({ origin: e })),
                                                n && s.push((0, J.default)({ tabId: n })),
                                                s.push((0, W.default)({ origin: e })),
                                                s.push(this.permissionLogController.createMiddleware()),
                                                s.push(
                                                    (0, Ee.default)({
                                                        trackEvent: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                        getMetricsState: this.metaMetricsController.store.getState.bind(this.metaMetricsController.store),
                                                    })
                                                ),
                                                t === U.SUBJECT_TYPES.WEBSITE && s.push((0, Q.default)({ location: r.url, registerOnboarding: this.onboardingController.registerOnboarding })),
                                                s.push(
                                                    (0, V.createMethodMiddleware)({
                                                        origin: e,
                                                        subjectType: t,
                                                        addSubjectMetadata: this.subjectMetadataController.addSubjectMetadata.bind(this.subjectMetadataController),
                                                        getProviderState: this.getProviderState.bind(this),
                                                        getUnlockPromise: this.appStateController.getUnlockPromise.bind(this.appStateController),
                                                        handleWatchAssetRequest: this.tokensController.watchAsset.bind(this.tokensController),
                                                        requestUserApproval: this.approvalController.addAndShowApprovalRequest.bind(this.approvalController),
                                                        sendMetrics: this.metaMetricsController.trackEvent.bind(this.metaMetricsController),
                                                        getAccounts: this.getPermittedAccounts.bind(this, e),
                                                        getPermissionsForOrigin: this.permissionController.getPermissions.bind(this.permissionController, e),
                                                        hasPermission: this.permissionController.hasPermission.bind(this.permissionController, e),
                                                        requestAccountsPermission: this.permissionController.requestPermissions.bind(this.permissionController, { origin: e }, { eth_accounts: {} }),
                                                        requestPermissionsForOrigin: this.permissionController.requestPermissions.bind(this.permissionController, { origin: e }),
                                                        addCustomRpc: async ({ chainId: e, blockExplorerUrl: t, ticker: r, chainName: n, rpcUrl: s } = {}) => {
                                                            await this.preferencesController.addToFrequentRpcList(s, e, r, n, { blockExplorerUrl: t });
                                                        },
                                                        findCustomRpcBy: this.findCustomRpcBy.bind(this),
                                                        getCurrentChainId: this.networkController.getCurrentChainId.bind(this.networkController),
                                                        getCurrentRpcUrl: this.networkController.getCurrentRpcUrl.bind(this.networkController),
                                                        setProviderType: this.networkController.setProviderType.bind(this.networkController),
                                                        updateRpcTarget: ({ rpcUrl: e, chainId: t, ticker: r, nickname: n }) => {
                                                            this.networkController.setRpcTarget(e, t, r, n);
                                                        },
                                                        getWeb3ShimUsageState: this.alertController.getWeb3ShimUsageState.bind(this.alertController),
                                                        setWeb3ShimUsageRecorded: this.alertController.setWeb3ShimUsageRecorded.bind(this.alertController),
                                                    })
                                                ),
                                                s.push(a),
                                                s.push(l.middleware),
                                                t !== U.SUBJECT_TYPES.INTERNAL && s.push(this.permissionController.createPermissionMiddleware({ origin: e })),
                                                s.push((0, p.providerAsMiddleware)(i)),
                                                s
                                            );
                                        }
                                        setupPublicConfig(e) {
                                            const t = (0, a.storeAsStream)(this.publicConfigStore);
                                            (0, o.default)(t, e, (e) => {
                                                t.destroy(), e && y.default.error(e);
                                            });
                                        }
                                        addConnection(e, { engine: t }) {
                                            if (e === U.ORIGIN_METAMASK) return null;
                                            this.connections[e] || (this.connections[e] = {});
                                            const r = (0, M.default)();
                                            return (this.connections[e][r] = { engine: t }), r;
                                        }
                                        removeConnection(e, t) {
                                            const r = this.connections[e];
                                            r && (delete r[t], 0 === Object.keys(r).length && delete this.connections[e]);
                                        }
                                        removeAllConnections(e) {
                                            const t = this.connections[e];
                                            t &&
                                                Object.keys(t).forEach((t) => {
                                                    this.removeConnection(e, t);
                                                });
                                        }
                                        notifyConnections(e, t) {
                                            const r = this.connections[e];
                                            r &&
                                                Object.values(r).forEach((e) => {
                                                    e.engine && e.engine.emit("notification", t);
                                                });
                                        }
                                        notifyAllConnections(e) {
                                            const t = "function" == typeof e ? (t) => e(t) : () => e;
                                            Object.keys(this.connections).forEach((e) => {
                                                Object.values(this.connections[e]).forEach(async (r) => {
                                                    r.engine && r.engine.emit("notification", await t(e));
                                                });
                                            });
                                        }
                                        async _onKeyringControllerUpdate(e) {
                                            const { keyrings: t } = e,
                                                r = t.reduce((e, { accounts: t }) => e.concat(t), []);
                                            r.length && (this.preferencesController.syncAddresses(r), this.accountTracker.syncWithAddresses(r));
                                        }
                                        _onUnlock() {
                                            this.notifyAllConnections(async (e) => ({ method: we.NOTIFICATION_NAMES.unlockStateChanged, params: { isUnlocked: !0, accounts: await this.getPermittedAccounts(e) } })), this.emit("unlock");
                                        }
                                        _onLock() {
                                            this.notifyAllConnections({ method: we.NOTIFICATION_NAMES.unlockStateChanged, params: { isUnlocked: !1 } }), this.emit("lock");
                                        }
                                        _onStateUpdate(e) {
                                            (this.isClientOpenAndUnlocked = e.isUnlocked && this._isClientOpen), this.notifyAllConnections({ method: we.NOTIFICATION_NAMES.chainChanged, params: this.getProviderNetworkState(e) });
                                        }
                                        privateSendUpdate() {
                                            this.emit("update", this.getState());
                                        }
                                        isUnlocked() {
                                            return this.keyringController.memStore.getState().isUnlocked;
                                        }
                                        getExternalPendingTransactions(e) {
                                            return this.smartTransactionsController.getTransactions({ addressFrom: e, status: "pending" });
                                        }
                                        async getPendingNonce(e) {
                                            const { nonceDetails: t, releaseLock: r } = await this.txController.nonceTracker.getNonceLock(e),
                                                n = t.params.highestSuggested;
                                            return r(), n;
                                        }
                                        async getNextNonce(e) {
                                            const t = await this.txController.nonceTracker.getNonceLock(e);
                                            return t.releaseLock(), t.nextNonce;
                                        }
                                        async migrateAddressBookState(e, t, r = !1) {
                                            const { addressBook: n } = this.addressBookController.state;
                                            if (n[e])
                                                for (const s of Object.keys(n[e])) {
                                                    const o = n[e][s];
                                                    this.addressBookController.set(s, o.name, t, o.memo), r || this.addressBookController.delete(e, s);
                                                }
                                        }
                                        async updateAndSetCustomRpc(e, t, r = "ETH", n, s) {
                                            return this.networkController.setRpcTarget(e, t, r, n, s), await this.preferencesController.updateRpc({ rpcUrl: e, chainId: t, ticker: r, nickname: n, rpcPrefs: s }), e;
                                        }
                                        async setCustomRpc(e, t, r = "ETH", n = "", s = {}) {
                                            const o = this.preferencesController.getFrequentRpcListDetail().find((t) => e === t.rpcUrl);
                                            return (
                                                o
                                                    ? this.networkController.setRpcTarget(o.rpcUrl, o.chainId, o.ticker, o.nickname, s)
                                                    : (this.networkController.setRpcTarget(e, t, r, n, s), await this.preferencesController.addToFrequentRpcList(e, t, r, n, s)),
                                                e
                                            );
                                        }
                                        async delCustomRpc(e) {
                                            await this.preferencesController.removeFromFrequentRpcList(e);
                                        }
                                        findCustomRpcBy(e) {
                                            const t = this.preferencesController.getFrequentRpcListDetail();
                                            for (const r of t) for (const t of Object.keys(e)) if (r[t] === e[t]) return r;
                                            return null;
                                        }
                                        async setLedgerTransportPreference(e) {
                                            const t = this.preferencesController.getLedgerTransportPreference(),
                                                r = this.preferencesController.setLedgerTransportPreference(e),
                                                n = await this.getKeyringForDevice(O.DEVICE_NAMES.LEDGER);
                                            return null != n && n.updateTransportMethod
                                                ? n.updateTransportMethod(r).catch((e) => {
                                                      throw (this.preferencesController.setLedgerTransportPreference(t), e);
                                                  })
                                                : undefined;
                                        }
                                        recordFirstTimeInfo(e) {
                                            if (!("firstTimeInfo" in e)) {
                                                const t = this.platform.getVersion();
                                                e.firstTimeInfo = { version: t, date: Date.now() };
                                            }
                                        }
                                        set isClientOpen(e) {
                                            (this._isClientOpen = e), (this.detectTokensController.isOpen = e);
                                        }
                                        onClientClosed() {
                                            try {
                                                this.gasFeeController.stopPolling(), this.appStateController.clearPollingTokens();
                                            } catch (e) {
                                                console.error(e);
                                            }
                                        }
                                        onEnvironmentTypeClosed(e) {
                                            const t = U.POLLING_TOKEN_ENVIRONMENT_TYPES[e];
                                            this.appStateController.store.getState()[t].forEach((e) => {
                                                this.gasFeeController.disconnectPoller(e), this.appStateController.removePollingToken(e, t);
                                            });
                                        }
                                        safelistPhishingDomain(e) {
                                            return this.phishingController.bypass(e);
                                        }
                                        setLocked() {
                                            var e;
                                            const [t] = this.keyringController.getKeyringsByType(O.KEYRING_TYPES.TREZOR);
                                            t && t.dispose();
                                            const [r] = this.keyringController.getKeyringsByType(O.KEYRING_TYPES.LEDGER);
                                            return null == r || null === (e = r.destroy) || void 0 === e || e.call(r), this.keyringController.setLocked();
                                        }
                                    }
                                    r.default = _e;
                                }.call(this));
                            }.call(this, e("_process"), e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            88,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 2,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 2;
                                    try {
                                        "etherscan" === t.data.config.provider.type && ((t.data.config.provider.type = "rpc"), (t.data.config.provider.rpcTarget = "https://rpc.metamask.io/"));
                                    } catch (e) {}
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            89,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 3,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 3;
                                    try {
                                        "https://rawtestrpc.metamask.io/" === t.data.config.provider.rpcTarget && (t.data.config.provider.rpcTarget = "https://testrpc.metamask.io/");
                                    } catch (e) {}
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            9,
            { "../../../shared/modules/string-utils": 5361 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("../../../shared/modules/string-utils");
                            r.default = class {
                                constructor(e = {}) {
                                    const { preferencesController: t, addressBookController: r, trackMetaMetricsEvent: n } = e;
                                    (this.preferencesController = t), (this.addressBookController = r), (this._trackMetaMetricsEvent = n);
                                }
                                async restoreUserData(e) {
                                    const t = this.preferencesController.store.getState(),
                                        { preferences: r, addressBook: n } = JSON.parse(e);
                                    r && ((r.identities = t.identities), (r.lostIdentities = t.lostIdentities), (r.selectedAddress = t.selectedAddress), this.preferencesController.store.updateState(r)),
                                        n && this.addressBookController.update(n, !0),
                                        r && n && this._trackMetaMetricsEvent({ event: "User Data Imported", category: "Backup" });
                                }
                                async backupUserData() {
                                    const e = { preferences: { ...this.preferencesController.store.getState() }, addressBook: { ...this.addressBookController.state } };
                                    delete e.preferences.identities, delete e.preferences.lostIdentities, delete e.preferences.selectedAddress;
                                    const t = JSON.stringify(e),
                                        r = new Date(),
                                        s = (e) => (0, n.prependZero)(e, 2);
                                    return { fileName: `MetaMaskUserData.${r.getFullYear()}_${s(r.getMonth() + 1)}_${s(r.getDay())}_${s(r.getHours())}_${s(r.getMinutes())}_${s(r.getDay())}.json`, data: t };
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            90,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 4,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 4;
                                    try {
                                        if ("rpc" !== t.data.config.provider.type) return Promise.resolve(t);
                                        switch (t.data.config.provider.rpcTarget) {
                                            case "https://testrpc.metamask.io/":
                                                t.data.config.provider = { type: "testnet" };
                                                break;
                                            case "https://rpc.metamask.io/":
                                                t.data.config.provider = { type: "mainnet" };
                                        }
                                    } catch (e) {}
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            91,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 5,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 5;
                                    try {
                                        const e = (function (e) {
                                            const { config: t } = e,
                                                r = { ...e, KeyringController: { vault: e.vault, selectedAccount: t.selectedAccount, walletNicknames: e.walletNicknames } };
                                            return delete r.vault, delete r.walletNicknames, delete r.config.selectedAccount, r;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #5${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            92,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 6,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 6;
                                    try {
                                        const e = (function (e) {
                                            const t = e.KeyringController,
                                                r = { ...e, PreferencesController: { selectedAddress: t.selectedAccount } };
                                            return delete r.KeyringController.selectedAccount, r;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #6${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            93,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 7,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 7;
                                    try {
                                        const e = (function (e) {
                                            const t = { ...e, TransactionManager: { transactions: e.transactions || [], gasMultiplier: e.gasMultiplier || 1 } };
                                            return delete t.transactions, delete t.gasMultiplier, t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #7${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            94,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 8,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 8;
                                    try {
                                        const e = (function (e) {
                                            const t = { ...e, NoticeController: { noticesList: e.noticesList || [] } };
                                            return delete t.noticesList, t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #8${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            95,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 9,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 9;
                                    try {
                                        const e = (function (e) {
                                            const t = (0, n.merge)({}, e, { CurrencyController: { currentCurrency: e.currentFiat || e.fiatCurrency || "USD", conversionRate: e.conversionRate, conversionDate: e.conversionDate } });
                                            return delete t.currentFiat, delete t.fiatCurrency, delete t.conversionRate, delete t.conversionDate, t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #9${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            96,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 10,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 10;
                                    try {
                                        const e = (function (e) {
                                            const t = (0, n.merge)({}, e, { ShapeShiftController: { shapeShiftTxList: e.shapeShiftTxList || [] } });
                                            return delete t.shapeShiftTxList, t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #10${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            97,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 11,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 11;
                                    try {
                                        const e = (function (e) {
                                            const t = e;
                                            return delete t.TOSHash, delete t.isDisclaimerConfirmed, t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #11${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            98,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 12,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 12;
                                    try {
                                        const e = (function (e) {
                                            const t = e;
                                            return (
                                                t.NoticeController.noticesList.forEach((e) => {
                                                    e.read && (e.body = "");
                                                }),
                                                t
                                            );
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #12${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            99,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("lodash");
                            var s = {
                                version: 13,
                                migrate(e) {
                                    const t = (0, n.cloneDeep)(e);
                                    t.meta.version = 13;
                                    try {
                                        const e = (function (e) {
                                            const t = e,
                                                { config: r } = t;
                                            r && r.provider && "testnet" === r.provider.type && (t.config.provider.type = "ropsten");
                                            return t;
                                        })(t.data);
                                        t.data = e;
                                    } catch (e) {
                                        console.warn(`MetaMask Migration #13${e.stack}`);
                                    }
                                    return Promise.resolve(t);
                                },
                            };
                            r.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            4,
            {
                "../../shared/constants/app": 5328,
                "../../shared/constants/metametrics": 5332,
                "../../shared/constants/time": 5338,
                "../../shared/modules/mv3.utils": 5355,
                "../../shared/modules/object.utils": 5357,
                "./first-time-state": 40,
                "./lib/createStreamSink": 50,
                "./lib/ens-ipfs/setup": 57,
                "./lib/get-first-preferred-lang-code": 59,
                "./lib/getObjStructure": 60,
                "./lib/local-store": 61,
                "./lib/migrator": 64,
                "./lib/network-store": 65,
                "./lib/notification-manager": 66,
                "./lib/setupSentry": 83,
                "./lib/util": 86,
                "./metamask-controller": 87,
                "./migrations": 163,
                "./platforms/extension": 164,
                "@metamask/obs-store": 1177,
                "debounce-stream": 1874,
                "end-of-stream": 1941,
                "eth-rpc-errors": 2032,
                "extension-port-stream": 2556,
                loglevel: 4707,
                pump: 4816,
                "webextension-polyfill": 5306,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = R(e("end-of-stream")),
                                s = R(e("pump")),
                                o = R(e("debounce-stream")),
                                i = R(e("loglevel")),
                                a = R(e("webextension-polyfill")),
                                c = e("@metamask/obs-store"),
                                l = R(e("extension-port-stream")),
                                d = e("eth-rpc-errors"),
                                u = e("../../shared/constants/app"),
                                h = e("../../shared/constants/time"),
                                p = e("../../shared/constants/metametrics"),
                                g = e("../../shared/modules/mv3.utils"),
                                m = e("../../shared/modules/object.utils"),
                                f = R(e("./migrations")),
                                y = R(e("./lib/migrator")),
                                b = R(e("./platforms/extension")),
                                C = R(e("./lib/local-store")),
                                v = (R(e("./lib/network-store")), e("./lib/setupSentry")),
                                w = R(e("./lib/createStreamSink")),
                                E = I(e("./lib/notification-manager")),
                                M = I(e("./metamask-controller")),
                                S = R(e("./first-time-state")),
                                k = R(e("./lib/get-first-preferred-lang-code")),
                                T = R(e("./lib/getObjStructure")),
                                _ = R(e("./lib/ens-ipfs/setup")),
                                A = e("./lib/util");
                            function P(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    r = new WeakMap();
                                return (P = function (e) {
                                    return e ? r : t;
                                })(e);
                            }
                            function I(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var r = P(t);
                                if (r && r.has(e)) return r.get(e);
                                var n = {},
                                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                                    }
                                return (n.default = e), r && r.set(e, n), n;
                            }
                            function R(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const { sentry: O } = global,
                                N = { ...S.default },
                                x = { [u.ENVIRONMENT_TYPE_POPUP]: !0, [u.ENVIRONMENT_TYPE_NOTIFICATION]: !0, [u.ENVIRONMENT_TYPE_FULLSCREEN]: !0 },
                                D = ["trezor-connect"];
                            i.default.setDefaultLevel("info");
                            const L = new b.default(),
                                U = new E.default();
                            global.METAMASK_NOTIFIER = U;
                            let j = !1,
                                F = !1,
                                B = !1;
                            const $ = {},
                                K = {};
                            let q;
                            const H = new C.default();
                            let G;
                            const z = new URL("https://metamask.github.io/phishing-warning/v1.2.1/"),
                                W = "ACK_KEEP_ALIVE_MESSAGE",
                                V = "WORKER_KEEP_ALIVE_MESSAGE",
                                Y = async (e) => {
                                    a.default.runtime.onConnect.removeListener(Y), await J(e), i.default.info("MetaMask initialization complete.");
                                };
                            async function J(e) {
                                !(function (e, t, r) {
                                    (q = new M.default({
                                        infuraProjectId: "b6bf7d3508c941499b10025c0776eaf8",
                                        showUserConfirmation: X,
                                        openPopup: Z,
                                        initState: e,
                                        initLangCode: t,
                                        platform: L,
                                        notificationManager: U,
                                        browser: a.default,
                                        getRequestAccountTabIds: () => K,
                                        getOpenMetamaskTabsIds: () => $,
                                        localStore: H,
                                    })),
                                        (0, _.default)({
                                            getCurrentChainId: q.networkController.getCurrentChainId.bind(q.networkController),
                                            getIpfsGateway: q.preferencesController.getIpfsGateway.bind(q.preferencesController),
                                            provider: q.provider,
                                        }),
                                        (0, s.default)(
                                            (0, c.storeAsStream)(q.store),
                                            (0, o.default)(1e3),
                                            (0, w.default)((e) => H.set(e)),
                                            (e) => {
                                                i.default.error("MetaMask - Persistence pipeline failed", e);
                                            }
                                        ),
                                        (h = q),
                                        void (global.stateHooks.getSentryState = function () {
                                            const e = h.getState(),
                                                t = (0, m.maskObject)({ metamask: e }, v.SENTRY_STATE);
                                            return { browser: window.navigator.userAgent, store: t, version: L.getVersion() };
                                        }),
                                        g.isManifestV3 && r && b(r);
                                    var h;
                                    a.default.runtime.onConnect.addListener(b), a.default.runtime.onConnectExternal.addListener(C);
                                    const f = () => j || Boolean(Object.keys($).length) || F,
                                        y = (e, t) => {
                                            if (!1 === e) q.onClientClosed();
                                            else {
                                                if (t === u.ENVIRONMENT_TYPE_FULLSCREEN && Boolean(Object.keys($).length)) return;
                                                q.onEnvironmentTypeClosed(t);
                                            }
                                        };
                                    function b(e) {
                                        var t;
                                        const r = e.name;
                                        if (D.includes(e.name)) return;
                                        let s = !1;
                                        s = (0, A.getPlatform)() === u.PLATFORM_FIREFOX ? x[r] : e.sender.origin === `chrome-extension://${a.default.runtime.id}`;
                                        const o = null !== (t = e.sender) && void 0 !== t && t.url ? new URL(e.sender.url) : null;
                                        if (s) {
                                            const t = new l.default(e);
                                            if (
                                                ((q.isClientOpen = !0),
                                                q.setupTrustedCommunication(t, e.sender),
                                                g.isManifestV3 &&
                                                    (e.postMessage({ name: "CONNECTION_READY" }),
                                                    e.onMessage.addListener((t) => {
                                                        t.name === V && e.postMessage({ name: W });
                                                    })),
                                                r === u.ENVIRONMENT_TYPE_POPUP &&
                                                    ((j = !0),
                                                    (0, n.default)(t, () => {
                                                        j = !1;
                                                        const e = f();
                                                        (q.isClientOpen = e), y(e, u.ENVIRONMENT_TYPE_POPUP);
                                                    })),
                                                r === u.ENVIRONMENT_TYPE_NOTIFICATION &&
                                                    ((F = !0),
                                                    (0, n.default)(t, () => {
                                                        F = !1;
                                                        const e = f();
                                                        (q.isClientOpen = e), y(e, u.ENVIRONMENT_TYPE_NOTIFICATION);
                                                    })),
                                                r === u.ENVIRONMENT_TYPE_FULLSCREEN)
                                            ) {
                                                const r = e.sender.tab.id;
                                                ($[r] = !0),
                                                    (0, n.default)(t, () => {
                                                        delete $[r];
                                                        const e = f();
                                                        (q.isClientOpen = e), y(e, u.ENVIRONMENT_TYPE_FULLSCREEN);
                                                    });
                                            }
                                        } else if (o && o.origin === z.origin && o.pathname === z.pathname) {
                                            const t = new l.default(e);
                                            q.setupPhishingCommunication({ connectionStream: t });
                                        } else {
                                            if (e.sender && e.sender.tab && e.sender.url) {
                                                const t = e.sender.tab.id,
                                                    r = new URL(e.sender.url),
                                                    { origin: n } = r;
                                                e.onMessage.addListener((e) => {
                                                    e.data && "eth_requestAccounts" === e.data.method && (K[n] = t);
                                                });
                                            }
                                            C(e);
                                        }
                                    }
                                    function C(e) {
                                        const t = new l.default(e);
                                        q.setupUntrustedCommunication({ connectionStream: t, sender: e.sender });
                                    }
                                    function S() {
                                        let e = "";
                                        const t = k();
                                        t && (e = String(t)),
                                            g.isManifestV3
                                                ? (a.default.action.setBadgeText({ text: e }), a.default.action.setBadgeBackgroundColor({ color: "#037DD6" }))
                                                : (a.default.browserAction.setBadgeText({ text: e }), a.default.browserAction.setBadgeBackgroundColor({ color: "#037DD6" }));
                                    }
                                    function k() {
                                        const e = q.txController.getUnapprovedTxCount(),
                                            { unapprovedMsgCount: t } = q.messageManager,
                                            { unapprovedPersonalMsgCount: r } = q.personalMessageManager,
                                            { unapprovedDecryptMsgCount: n } = q.decryptMessageManager,
                                            { unapprovedEncryptionPublicKeyMsgCount: s } = q.encryptionPublicKeyManager,
                                            { unapprovedTypedMessagesCount: o } = q.typedMessageManager;
                                        return e + t + r + n + s + o + q.approvalController.getTotalApprovalCount() + q.appStateController.waitingForUnlock.length;
                                    }
                                    function T() {
                                        Object.keys(q.txController.txStateManager.getUnapprovedTxList()).forEach((e) => q.txController.txStateManager.setTxStatusRejected(e)),
                                            q.messageManager.messages.filter((e) => "unapproved" === e.status).forEach((e) => q.messageManager.rejectMsg(e.id, p.REJECT_NOTFICIATION_CLOSE_SIG)),
                                            q.personalMessageManager.messages.filter((e) => "unapproved" === e.status).forEach((e) => q.personalMessageManager.rejectMsg(e.id, p.REJECT_NOTFICIATION_CLOSE_SIG)),
                                            q.typedMessageManager.messages.filter((e) => "unapproved" === e.status).forEach((e) => q.typedMessageManager.rejectMsg(e.id, p.REJECT_NOTFICIATION_CLOSE_SIG)),
                                            q.decryptMessageManager.messages.filter((e) => "unapproved" === e.status).forEach((e) => q.decryptMessageManager.rejectMsg(e.id, p.REJECT_NOTFICIATION_CLOSE)),
                                            q.encryptionPublicKeyManager.messages.filter((e) => "unapproved" === e.status).forEach((e) => q.encryptionPublicKeyManager.rejectMsg(e.id, p.REJECT_NOTFICIATION_CLOSE)),
                                            q.approvalController.clear(d.ethErrors.provider.userRejectedRequest()),
                                            S();
                                    }
                                    S(),
                                        q.txController.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.messageManager.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.personalMessageManager.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.decryptMessageManager.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.encryptionPublicKeyManager.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.typedMessageManager.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.appStateController.on(M.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, S),
                                        q.controllerMessenger.subscribe(M.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE, S),
                                        U.on(E.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED, ({ automaticallyClosed: e }) => {
                                            e ? k() > 0 && X() : T();
                                        });
                                })(
                                    await (async function () {
                                        const e = new y.default({ migrations: f.default });
                                        e.on("error", console.warn),
                                            (G = (await H.get()) || e.generateInitialState(N)),
                                            G && !G.data && ((G = e.generateInitialState(N)), O.captureMessage("MetaMask - Empty vault found - unable to recover"));
                                        if (
                                            (e.on("error", (e) => {
                                                const t = (0, T.default)(G);
                                                O.captureException(e, { extra: { vaultStructure: t } });
                                            }),
                                            (G = await e.migrateData(G)),
                                            !G)
                                        )
                                            throw new Error("MetaMask - migrator returned undefined");
                                        return H.setMetadata(G.meta), H.set(G.data), G.data;
                                    })(),
                                    await (0, k.default)(),
                                    e
                                ),
                                    g.isManifestV3 ||
                                        (await (async function () {
                                            let e;
                                            try {
                                                const t = new URL("https://metamask.github.io/phishing-warning/v1.2.1/");
                                                let r, n;
                                                (t.hash = "#extensionStartup"), (e = window.document.createElement("iframe")), e.setAttribute("src", t.href), e.setAttribute("sandbox", "allow-scripts allow-same-origin");
                                                const s = new Promise((e, t) => {
                                                    (r = e), (n = t);
                                                });
                                                e.addEventListener("load", r), window.document.body.appendChild(e), setTimeout(() => n(new Q()), 1e3), await s;
                                            } catch (e) {
                                                e instanceof Q ? console.warn("Phishing warning page timeout; page not guaraneteed to work offline.") : console.error("Failed to initialize phishing warning page", e);
                                            } finally {
                                                e && e.remove();
                                            }
                                        })()),
                                    i.default.info("MetaMask initialization complete.");
                            }
                            g.isManifestV3 ? a.default.runtime.onConnect.addListener(Y) : J().catch(i.default.error);
                            class Q extends Error {
                                constructor() {
                                    super("Timeout failed");
                                }
                            }
                            async function X() {
                                const e = await L.getActiveTabs(),
                                    t = Boolean(e.find((e) => $[e.id])),
                                    r = e.length > 0 && e[0].extData && e[0].extData.indexOf("vivaldi_tab") > -1;
                                if (!B && (r || !j) && !t) {
                                    B = !0;
                                    try {
                                        await U.showPopup();
                                    } finally {
                                        B = !1;
                                    }
                                }
                            }
                            async function Z() {
                                await X(),
                                    await new Promise((e) => {
                                        const t = setInterval(() => {
                                            F || (clearInterval(t), e());
                                        }, h.SECOND);
                                    });
                            }
                            const ee = () => {
                                if (q)
                                    return (
                                        q.metaMetricsController.updateTraits({ [p.TRAITS.INSTALL_DATE_EXT]: new Date().toISOString().split("T")[0] }),
                                        void q.metaMetricsController.addEventBeforeMetricsOptIn({ category: p.EVENT.CATEGORIES.APP, event: p.EVENT_NAMES.APP_INSTALLED, properties: {} })
                                    );
                                setTimeout(() => {
                                    ee();
                                }, 1e3);
                            };
                            a.default.runtime.onInstalled.addListener(({ reason: e }) => {
                                "install" === e && (ee(), L.openExtensionInBrowser());
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
    ],
    [4],
    {}
);
