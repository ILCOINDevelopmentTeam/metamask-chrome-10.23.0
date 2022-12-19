LavaPack.loadBundle(
    [
        [
            5306,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            !(function (e, r) {
                                if ("function" == typeof define && define.amd) define("webextension-polyfill", ["module"], r);
                                else if (void 0 !== n) r(t);
                                else {
                                    var a = { exports: {} };
                                    r(a), (e.browser = a.exports);
                                }
                            })("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function (e) {
                                if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                                    const t = "The message port closed before a response was received.",
                                        n =
                                            "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                        r = (e) => {
                                            const r = {
                                                alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
                                                bookmarks: {
                                                    create: { minArgs: 1, maxArgs: 1 },
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getChildren: { minArgs: 1, maxArgs: 1 },
                                                    getRecent: { minArgs: 1, maxArgs: 1 },
                                                    getSubTree: { minArgs: 1, maxArgs: 1 },
                                                    getTree: { minArgs: 0, maxArgs: 0 },
                                                    move: { minArgs: 2, maxArgs: 2 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    removeTree: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                                browserAction: {
                                                    disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                                                    getBadgeText: { minArgs: 1, maxArgs: 1 },
                                                    getPopup: { minArgs: 1, maxArgs: 1 },
                                                    getTitle: { minArgs: 1, maxArgs: 1 },
                                                    openPopup: { minArgs: 0, maxArgs: 0 },
                                                    setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setIcon: { minArgs: 1, maxArgs: 1 },
                                                    setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                browsingData: {
                                                    remove: { minArgs: 2, maxArgs: 2 },
                                                    removeCache: { minArgs: 1, maxArgs: 1 },
                                                    removeCookies: { minArgs: 1, maxArgs: 1 },
                                                    removeDownloads: { minArgs: 1, maxArgs: 1 },
                                                    removeFormData: { minArgs: 1, maxArgs: 1 },
                                                    removeHistory: { minArgs: 1, maxArgs: 1 },
                                                    removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                                                    removePasswords: { minArgs: 1, maxArgs: 1 },
                                                    removePluginData: { minArgs: 1, maxArgs: 1 },
                                                    settings: { minArgs: 0, maxArgs: 0 },
                                                },
                                                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                                                contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
                                                cookies: {
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getAll: { minArgs: 1, maxArgs: 1 },
                                                    getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    set: { minArgs: 1, maxArgs: 1 },
                                                },
                                                devtools: {
                                                    inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                                                    panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } },
                                                },
                                                downloads: {
                                                    cancel: { minArgs: 1, maxArgs: 1 },
                                                    download: { minArgs: 1, maxArgs: 1 },
                                                    erase: { minArgs: 1, maxArgs: 1 },
                                                    getFileIcon: { minArgs: 1, maxArgs: 2 },
                                                    open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    pause: { minArgs: 1, maxArgs: 1 },
                                                    removeFile: { minArgs: 1, maxArgs: 1 },
                                                    resume: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
                                                history: {
                                                    addUrl: { minArgs: 1, maxArgs: 1 },
                                                    deleteAll: { minArgs: 0, maxArgs: 0 },
                                                    deleteRange: { minArgs: 1, maxArgs: 1 },
                                                    deleteUrl: { minArgs: 1, maxArgs: 1 },
                                                    getVisits: { minArgs: 1, maxArgs: 1 },
                                                    search: { minArgs: 1, maxArgs: 1 },
                                                },
                                                i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                                                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                                                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                                                management: {
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getAll: { minArgs: 0, maxArgs: 0 },
                                                    getSelf: { minArgs: 0, maxArgs: 0 },
                                                    setEnabled: { minArgs: 2, maxArgs: 2 },
                                                    uninstallSelf: { minArgs: 0, maxArgs: 1 },
                                                },
                                                notifications: {
                                                    clear: { minArgs: 1, maxArgs: 1 },
                                                    create: { minArgs: 1, maxArgs: 2 },
                                                    getAll: { minArgs: 0, maxArgs: 0 },
                                                    getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                                pageAction: {
                                                    getPopup: { minArgs: 1, maxArgs: 1 },
                                                    getTitle: { minArgs: 1, maxArgs: 1 },
                                                    hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setIcon: { minArgs: 1, maxArgs: 1 },
                                                    setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                                                },
                                                permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
                                                runtime: {
                                                    getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                                                    getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                                                    openOptionsPage: { minArgs: 0, maxArgs: 0 },
                                                    requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                                                    sendMessage: { minArgs: 1, maxArgs: 3 },
                                                    sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                                                    setUninstallURL: { minArgs: 1, maxArgs: 1 },
                                                },
                                                sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
                                                storage: {
                                                    local: {
                                                        clear: { minArgs: 0, maxArgs: 0 },
                                                        get: { minArgs: 0, maxArgs: 1 },
                                                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                                        remove: { minArgs: 1, maxArgs: 1 },
                                                        set: { minArgs: 1, maxArgs: 1 },
                                                    },
                                                    managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                                                    sync: {
                                                        clear: { minArgs: 0, maxArgs: 0 },
                                                        get: { minArgs: 0, maxArgs: 1 },
                                                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                                                        remove: { minArgs: 1, maxArgs: 1 },
                                                        set: { minArgs: 1, maxArgs: 1 },
                                                    },
                                                },
                                                tabs: {
                                                    captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                                                    create: { minArgs: 1, maxArgs: 1 },
                                                    detectLanguage: { minArgs: 0, maxArgs: 1 },
                                                    discard: { minArgs: 0, maxArgs: 1 },
                                                    duplicate: { minArgs: 1, maxArgs: 1 },
                                                    executeScript: { minArgs: 1, maxArgs: 2 },
                                                    get: { minArgs: 1, maxArgs: 1 },
                                                    getCurrent: { minArgs: 0, maxArgs: 0 },
                                                    getZoom: { minArgs: 0, maxArgs: 1 },
                                                    getZoomSettings: { minArgs: 0, maxArgs: 1 },
                                                    goBack: { minArgs: 0, maxArgs: 1 },
                                                    goForward: { minArgs: 0, maxArgs: 1 },
                                                    highlight: { minArgs: 1, maxArgs: 1 },
                                                    insertCSS: { minArgs: 1, maxArgs: 2 },
                                                    move: { minArgs: 2, maxArgs: 2 },
                                                    query: { minArgs: 1, maxArgs: 1 },
                                                    reload: { minArgs: 0, maxArgs: 2 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    removeCSS: { minArgs: 1, maxArgs: 2 },
                                                    sendMessage: { minArgs: 2, maxArgs: 3 },
                                                    setZoom: { minArgs: 1, maxArgs: 2 },
                                                    setZoomSettings: { minArgs: 1, maxArgs: 2 },
                                                    update: { minArgs: 1, maxArgs: 2 },
                                                },
                                                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                                                webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
                                                webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                                                windows: {
                                                    create: { minArgs: 0, maxArgs: 1 },
                                                    get: { minArgs: 1, maxArgs: 2 },
                                                    getAll: { minArgs: 0, maxArgs: 1 },
                                                    getCurrent: { minArgs: 0, maxArgs: 1 },
                                                    getLastFocused: { minArgs: 0, maxArgs: 1 },
                                                    remove: { minArgs: 1, maxArgs: 1 },
                                                    update: { minArgs: 2, maxArgs: 2 },
                                                },
                                            };
                                            if (0 === Object.keys(r).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                                            class a extends WeakMap {
                                                constructor(e, t = undefined) {
                                                    super(t), (this.createItem = e);
                                                }
                                                get(e) {
                                                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                                                }
                                            }
                                            const s = (t, n) => (...r) => {
                                                    e.runtime.lastError ? t.reject(new Error(e.runtime.lastError.message)) : n.singleCallbackArg || (r.length <= 1 && !1 !== n.singleCallbackArg) ? t.resolve(r[0]) : t.resolve(r);
                                                },
                                                o = (e) => (1 == e ? "argument" : "arguments"),
                                                i = (e, t, n) => new Proxy(t, { apply: (t, r, a) => n.call(r, e, ...a) });
                                            let c = Function.call.bind(Object.prototype.hasOwnProperty);
                                            const u = (e, t = {}, n = {}) => {
                                                    let r = Object.create(null),
                                                        a = {
                                                            has: (t, n) => n in e || n in r,
                                                            get(a, l, d) {
                                                                if (l in r) return r[l];
                                                                if (!(l in e)) return undefined;
                                                                let E = e[l];
                                                                if ("function" == typeof E)
                                                                    if ("function" == typeof t[l]) E = i(e, e[l], t[l]);
                                                                    else if (c(n, l)) {
                                                                        let t = ((e, t) =>
                                                                            function (n, ...r) {
                                                                                if (r.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${e}(), got ${r.length}`);
                                                                                if (r.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${e}(), got ${r.length}`);
                                                                                return new Promise((a, o) => {
                                                                                    if (t.fallbackToNoCallback)
                                                                                        try {
                                                                                            n[e](...r, s({ resolve: a, reject: o }, t));
                                                                                        } catch (s) {
                                                                                            console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s),
                                                                                                n[e](...r),
                                                                                                (t.fallbackToNoCallback = !1),
                                                                                                (t.noCallback = !0),
                                                                                                a();
                                                                                        }
                                                                                    else t.noCallback ? (n[e](...r), a()) : n[e](...r, s({ resolve: a, reject: o }, t));
                                                                                });
                                                                            })(l, n[l]);
                                                                        E = i(e, e[l], t);
                                                                    } else E = E.bind(e);
                                                                else if ("object" == typeof E && null !== E && (c(t, l) || c(n, l))) E = u(E, t[l], n[l]);
                                                                else {
                                                                    if (!c(n, "*"))
                                                                        return (
                                                                            Object.defineProperty(r, l, {
                                                                                configurable: !0,
                                                                                enumerable: !0,
                                                                                get: () => e[l],
                                                                                set(t) {
                                                                                    e[l] = t;
                                                                                },
                                                                            }),
                                                                            E
                                                                        );
                                                                    E = u(E, t[l], n["*"]);
                                                                }
                                                                return (r[l] = E), E;
                                                            },
                                                            set: (t, n, a, s) => (n in r ? (r[n] = a) : (e[n] = a), !0),
                                                            defineProperty: (e, t, n) => Reflect.defineProperty(r, t, n),
                                                            deleteProperty: (e, t) => Reflect.deleteProperty(r, t),
                                                        },
                                                        l = Object.create(e);
                                                    return new Proxy(l, a);
                                                },
                                                l = (e) => ({
                                                    addListener(t, n, ...r) {
                                                        t.addListener(e.get(n), ...r);
                                                    },
                                                    hasListener: (t, n) => t.hasListener(e.get(n)),
                                                    removeListener(t, n) {
                                                        t.removeListener(e.get(n));
                                                    },
                                                }),
                                                d = new a((e) =>
                                                    "function" != typeof e
                                                        ? e
                                                        : function (t) {
                                                              const n = u(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                                                              e(n);
                                                          }
                                                );
                                            let E = !1;
                                            const T = new a((e) =>
                                                    "function" != typeof e
                                                        ? e
                                                        : function (t, r, a) {
                                                              let s,
                                                                  o,
                                                                  i = !1,
                                                                  c = new Promise((e) => {
                                                                      s = function (t) {
                                                                          E || (console.warn(n, new Error().stack), (E = !0)), (i = !0), e(t);
                                                                      };
                                                                  });
                                                              try {
                                                                  o = e(t, r, s);
                                                              } catch (e) {
                                                                  o = Promise.reject(e);
                                                              }
                                                              const u = !0 !== o && (l = o) && "object" == typeof l && "function" == typeof l.then;
                                                              var l;
                                                              if (!0 !== o && !u && !i) return !1;
                                                              const d = (e) => {
                                                                  e.then(
                                                                      (e) => {
                                                                          a(e);
                                                                      },
                                                                      (e) => {
                                                                          let t;
                                                                          (t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"),
                                                                              a({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                                                      }
                                                                  ).catch((e) => {
                                                                      console.error("Failed to send onMessage rejected reply", e);
                                                                  });
                                                              };
                                                              return d(u ? o : c), !0;
                                                          }
                                                ),
                                                _ = ({ reject: n, resolve: r }, a) => {
                                                    e.runtime.lastError ? (e.runtime.lastError.message === t ? r() : n(new Error(e.runtime.lastError.message))) : a && a.__mozWebExtensionPolyfillReject__ ? n(new Error(a.message)) : r(a);
                                                },
                                                A = (e, t, n, ...r) => {
                                                    if (r.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${e}(), got ${r.length}`);
                                                    if (r.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${e}(), got ${r.length}`);
                                                    return new Promise((e, t) => {
                                                        const a = _.bind(null, { resolve: e, reject: t });
                                                        r.push(a), n.sendMessage(...r);
                                                    });
                                                },
                                                S = {
                                                    devtools: { network: { onRequestFinished: l(d) } },
                                                    runtime: { onMessage: l(T), onMessageExternal: l(T), sendMessage: A.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                                                    tabs: { sendMessage: A.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
                                                },
                                                m = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                                            return (r.privacy = { network: { "*": m }, services: { "*": m }, websites: { "*": m } }), u(e, S, r);
                                        };
                                    if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                                    e.exports = r(chrome);
                                } else e.exports = browser;
                            });
                        };
                    };
            },
            { package: "webextension-polyfill" },
        ],
        [
            5307,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            !(function (e, r) {
                                "object" == typeof n && void 0 !== t ? r(n) : "function" == typeof define && define.amd ? define(["exports"], r) : r((e.WHATWGFetch = {}));
                            })(this, function (e) {
                                var t = ("undefined" != typeof globalThis && globalThis) || ("undefined" != typeof self && self) || (void 0 !== t && t),
                                    n = "URLSearchParams" in t,
                                    r = "Symbol" in t && "iterator" in Symbol,
                                    a =
                                        "FileReader" in t &&
                                        "Blob" in t &&
                                        (function () {
                                            try {
                                                return new Blob(), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })(),
                                    s = "FormData" in t,
                                    o = "ArrayBuffer" in t;
                                if (o)
                                    var i = [
                                            "[object Int8Array]",
                                            "[object Uint8Array]",
                                            "[object Uint8ClampedArray]",
                                            "[object Int16Array]",
                                            "[object Uint16Array]",
                                            "[object Int32Array]",
                                            "[object Uint32Array]",
                                            "[object Float32Array]",
                                            "[object Float64Array]",
                                        ],
                                        c =
                                            ArrayBuffer.isView ||
                                            function (e) {
                                                return e && i.indexOf(Object.prototype.toString.call(e)) > -1;
                                            };
                                function u(e) {
                                    if (("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)) throw new TypeError('Invalid character in header field name: "' + e + '"');
                                    return e.toLowerCase();
                                }
                                function l(e) {
                                    return "string" != typeof e && (e = String(e)), e;
                                }
                                function d(e) {
                                    var t = {
                                        next: function () {
                                            var t = e.shift();
                                            return { done: t === undefined, value: t };
                                        },
                                    };
                                    return (
                                        r &&
                                            (t[Symbol.iterator] = function () {
                                                return t;
                                            }),
                                        t
                                    );
                                }
                                function E(e) {
                                    (this.map = {}),
                                        e instanceof E
                                            ? e.forEach(function (e, t) {
                                                  this.append(t, e);
                                              }, this)
                                            : Array.isArray(e)
                                            ? e.forEach(function (e) {
                                                  this.append(e[0], e[1]);
                                              }, this)
                                            : e &&
                                              Object.getOwnPropertyNames(e).forEach(function (t) {
                                                  this.append(t, e[t]);
                                              }, this);
                                }
                                function T(e) {
                                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                                    e.bodyUsed = !0;
                                }
                                function _(e) {
                                    return new Promise(function (t, n) {
                                        (e.onload = function () {
                                            t(e.result);
                                        }),
                                            (e.onerror = function () {
                                                n(e.error);
                                            });
                                    });
                                }
                                function A(e) {
                                    var t = new FileReader(),
                                        n = _(t);
                                    return t.readAsArrayBuffer(e), n;
                                }
                                function S(e) {
                                    if (e.slice) return e.slice(0);
                                    var t = new Uint8Array(e.byteLength);
                                    return t.set(new Uint8Array(e)), t.buffer;
                                }
                                function m() {
                                    return (
                                        (this.bodyUsed = !1),
                                        (this._initBody = function (e) {
                                            var t;
                                            (this.bodyUsed = this.bodyUsed),
                                                (this._bodyInit = e),
                                                e
                                                    ? "string" == typeof e
                                                        ? (this._bodyText = e)
                                                        : a && Blob.prototype.isPrototypeOf(e)
                                                        ? (this._bodyBlob = e)
                                                        : s && FormData.prototype.isPrototypeOf(e)
                                                        ? (this._bodyFormData = e)
                                                        : n && URLSearchParams.prototype.isPrototypeOf(e)
                                                        ? (this._bodyText = e.toString())
                                                        : o && a && (t = e) && DataView.prototype.isPrototypeOf(t)
                                                        ? ((this._bodyArrayBuffer = S(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                                        : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                                                        ? (this._bodyArrayBuffer = S(e))
                                                        : (this._bodyText = e = Object.prototype.toString.call(e))
                                                    : (this._bodyText = ""),
                                                this.headers.get("content-type") ||
                                                    ("string" == typeof e
                                                        ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                                                        : this._bodyBlob && this._bodyBlob.type
                                                        ? this.headers.set("content-type", this._bodyBlob.type)
                                                        : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                                        }),
                                        a &&
                                            ((this.blob = function () {
                                                var e = T(this);
                                                if (e) return e;
                                                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                                return Promise.resolve(new Blob([this._bodyText]));
                                            }),
                                            (this.arrayBuffer = function () {
                                                if (this._bodyArrayBuffer) {
                                                    var e = T(this);
                                                    return (
                                                        e ||
                                                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                                                            ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength))
                                                            : Promise.resolve(this._bodyArrayBuffer))
                                                    );
                                                }
                                                return this.blob().then(A);
                                            })),
                                        (this.text = function () {
                                            var e,
                                                t,
                                                n,
                                                r = T(this);
                                            if (r) return r;
                                            if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (n = _(t)), t.readAsText(e), n;
                                            if (this._bodyArrayBuffer)
                                                return Promise.resolve(
                                                    (function (e) {
                                                        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                                        return n.join("");
                                                    })(this._bodyArrayBuffer)
                                                );
                                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                            return Promise.resolve(this._bodyText);
                                        }),
                                        s &&
                                            (this.formData = function () {
                                                return this.text().then(I);
                                            }),
                                        (this.json = function () {
                                            return this.text().then(JSON.parse);
                                        }),
                                        this
                                    );
                                }
                                (E.prototype.append = function (e, t) {
                                    (e = u(e)), (t = l(t));
                                    var n = this.map[e];
                                    this.map[e] = n ? n + ", " + t : t;
                                }),
                                    (E.prototype.delete = function (e) {
                                        delete this.map[u(e)];
                                    }),
                                    (E.prototype.get = function (e) {
                                        return (e = u(e)), this.has(e) ? this.map[e] : null;
                                    }),
                                    (E.prototype.has = function (e) {
                                        return this.map.hasOwnProperty(u(e));
                                    }),
                                    (E.prototype.set = function (e, t) {
                                        this.map[u(e)] = l(t);
                                    }),
                                    (E.prototype.forEach = function (e, t) {
                                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
                                    }),
                                    (E.prototype.keys = function () {
                                        var e = [];
                                        return (
                                            this.forEach(function (t, n) {
                                                e.push(n);
                                            }),
                                            d(e)
                                        );
                                    }),
                                    (E.prototype.values = function () {
                                        var e = [];
                                        return (
                                            this.forEach(function (t) {
                                                e.push(t);
                                            }),
                                            d(e)
                                        );
                                    }),
                                    (E.prototype.entries = function () {
                                        var e = [];
                                        return (
                                            this.forEach(function (t, n) {
                                                e.push([n, t]);
                                            }),
                                            d(e)
                                        );
                                    }),
                                    r && (E.prototype[Symbol.iterator] = E.prototype.entries);
                                var N = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                                function p(e, t) {
                                    if (!(this instanceof p)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                                    var n,
                                        r,
                                        a = (t = t || {}).body;
                                    if (e instanceof p) {
                                        if (e.bodyUsed) throw new TypeError("Already read");
                                        (this.url = e.url),
                                            (this.credentials = e.credentials),
                                            t.headers || (this.headers = new E(e.headers)),
                                            (this.method = e.method),
                                            (this.mode = e.mode),
                                            (this.signal = e.signal),
                                            a || null == e._bodyInit || ((a = e._bodyInit), (e.bodyUsed = !0));
                                    } else this.url = String(e);
                                    if (
                                        ((this.credentials = t.credentials || this.credentials || "same-origin"),
                                        (!t.headers && this.headers) || (this.headers = new E(t.headers)),
                                        (this.method = ((n = t.method || this.method || "GET"), (r = n.toUpperCase()), N.indexOf(r) > -1 ? r : n)),
                                        (this.mode = t.mode || this.mode || null),
                                        (this.signal = t.signal || this.signal),
                                        (this.referrer = null),
                                        ("GET" === this.method || "HEAD" === this.method) && a)
                                    )
                                        throw new TypeError("Body not allowed for GET or HEAD requests");
                                    if ((this._initBody(a), !(("GET" !== this.method && "HEAD" !== this.method) || ("no-store" !== t.cache && "no-cache" !== t.cache)))) {
                                        var s = /([?&])_=[^&]*/;
                                        if (s.test(this.url)) this.url = this.url.replace(s, "$1_=" + new Date().getTime());
                                        else {
                                            this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
                                        }
                                    }
                                }
                                function I(e) {
                                    var t = new FormData();
                                    return (
                                        e
                                            .trim()
                                            .split("&")
                                            .forEach(function (e) {
                                                if (e) {
                                                    var n = e.split("="),
                                                        r = n.shift().replace(/\+/g, " "),
                                                        a = n.join("=").replace(/\+/g, " ");
                                                    t.append(decodeURIComponent(r), decodeURIComponent(a));
                                                }
                                            }),
                                        t
                                    );
                                }
                                function f(e, t) {
                                    if (!(this instanceof f)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                                    t || (t = {}),
                                        (this.type = "default"),
                                        (this.status = t.status === undefined ? 200 : t.status),
                                        (this.ok = this.status >= 200 && this.status < 300),
                                        (this.statusText = t.statusText === undefined ? "" : "" + t.statusText),
                                        (this.headers = new E(t.headers)),
                                        (this.url = t.url || ""),
                                        this._initBody(e);
                                }
                                (p.prototype.clone = function () {
                                    return new p(this, { body: this._bodyInit });
                                }),
                                    m.call(p.prototype),
                                    m.call(f.prototype),
                                    (f.prototype.clone = function () {
                                        return new f(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new E(this.headers), url: this.url });
                                    }),
                                    (f.error = function () {
                                        var e = new f(null, { status: 0, statusText: "" });
                                        return (e.type = "error"), e;
                                    });
                                var O = [301, 302, 303, 307, 308];
                                (f.redirect = function (e, t) {
                                    if (-1 === O.indexOf(t)) throw new RangeError("Invalid status code");
                                    return new f(null, { status: t, headers: { location: e } });
                                }),
                                    (e.DOMException = t.DOMException);
                                try {
                                    new e.DOMException();
                                } catch (t) {
                                    (e.DOMException = function (e, t) {
                                        (this.message = e), (this.name = t);
                                        var n = Error(e);
                                        this.stack = n.stack;
                                    }),
                                        (e.DOMException.prototype = Object.create(Error.prototype)),
                                        (e.DOMException.prototype.constructor = e.DOMException);
                                }
                                function R(n, r) {
                                    return new Promise(function (s, i) {
                                        var c = new p(n, r);
                                        if (c.signal && c.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                                        var u = new XMLHttpRequest();
                                        function d() {
                                            u.abort();
                                        }
                                        (u.onload = function () {
                                            var e,
                                                t,
                                                n = {
                                                    status: u.status,
                                                    statusText: u.statusText,
                                                    headers:
                                                        ((e = u.getAllResponseHeaders() || ""),
                                                        (t = new E()),
                                                        e
                                                            .replace(/\r?\n[\t ]+/g, " ")
                                                            .split("\r")
                                                            .map(function (e) {
                                                                return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                                                            })
                                                            .forEach(function (e) {
                                                                var n = e.split(":"),
                                                                    r = n.shift().trim();
                                                                if (r) {
                                                                    var a = n.join(":").trim();
                                                                    t.append(r, a);
                                                                }
                                                            }),
                                                        t),
                                                };
                                            n.url = "responseURL" in u ? u.responseURL : n.headers.get("X-Request-URL");
                                            var r = "response" in u ? u.response : u.responseText;
                                            setTimeout(function () {
                                                s(new f(r, n));
                                            }, 0);
                                        }),
                                            (u.onerror = function () {
                                                setTimeout(function () {
                                                    i(new TypeError("Network request failed"));
                                                }, 0);
                                            }),
                                            (u.ontimeout = function () {
                                                setTimeout(function () {
                                                    i(new TypeError("Network request failed"));
                                                }, 0);
                                            }),
                                            (u.onabort = function () {
                                                setTimeout(function () {
                                                    i(new e.DOMException("Aborted", "AbortError"));
                                                }, 0);
                                            }),
                                            u.open(
                                                c.method,
                                                (function (e) {
                                                    try {
                                                        return "" === e && t.location.href ? t.location.href : e;
                                                    } catch (t) {
                                                        return e;
                                                    }
                                                })(c.url),
                                                !0
                                            ),
                                            "include" === c.credentials ? (u.withCredentials = !0) : "omit" === c.credentials && (u.withCredentials = !1),
                                            "responseType" in u &&
                                                (a ? (u.responseType = "blob") : o && c.headers.get("Content-Type") && -1 !== c.headers.get("Content-Type").indexOf("application/octet-stream") && (u.responseType = "arraybuffer")),
                                            !r || "object" != typeof r.headers || r.headers instanceof E
                                                ? c.headers.forEach(function (e, t) {
                                                      u.setRequestHeader(t, e);
                                                  })
                                                : Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                                                      u.setRequestHeader(e, l(r.headers[e]));
                                                  }),
                                            c.signal &&
                                                (c.signal.addEventListener("abort", d),
                                                (u.onreadystatechange = function () {
                                                    4 === u.readyState && c.signal.removeEventListener("abort", d);
                                                })),
                                            u.send(void 0 === c._bodyInit ? null : c._bodyInit);
                                    });
                                }
                                (R.polyfill = !0),
                                    t.fetch || ((t.fetch = R), (t.Headers = E), (t.Request = p), (t.Response = f)),
                                    (e.Headers = E),
                                    (e.Request = p),
                                    (e.Response = f),
                                    (e.fetch = R),
                                    Object.defineProperty(e, "__esModule", { value: !0 });
                            });
                        };
                    };
            },
            { package: "@metamask/controllers>isomorphic-fetch>whatwg-fetch" },
        ],
        [
            5308,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            t.exports = function e(t, n) {
                                if (t && n) return e(t)(n);
                                if ("function" != typeof t) throw new TypeError("need wrapper function");
                                return (
                                    Object.keys(t).forEach(function (e) {
                                        r[e] = t[e];
                                    }),
                                    r
                                );
                                function r() {
                                    for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
                                    var r = t.apply(this, e),
                                        a = e[e.length - 1];
                                    return (
                                        "function" == typeof r &&
                                            r !== a &&
                                            Object.keys(a).forEach(function (e) {
                                                r[e] = a[e];
                                            }),
                                        r
                                    );
                                }
                            };
                        };
                    };
            },
            { package: "pump>once>wrappy" },
        ],
        [
            5309,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var r,
                                a =
                                    (this && this.__extends) ||
                                    ((r =
                                        Object.setPrototypeOf ||
                                        ({ __proto__: [] } instanceof Array &&
                                            function (e, t) {
                                                e.__proto__ = t;
                                            }) ||
                                        function (e, t) {
                                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                        }),
                                    function (e, t) {
                                        function n() {
                                            this.constructor = e;
                                        }
                                        r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                                    });
                            Object.defineProperty(n, "__esModule", { value: !0 });
                            var s = (function (e) {
                                function t() {
                                    return (null !== e && e.apply(this, arguments)) || this;
                                }
                                return a(t, e), t;
                            })(Error);
                            n.SecurityError = s;
                            var o = (function (e) {
                                function t() {
                                    return (null !== e && e.apply(this, arguments)) || this;
                                }
                                return a(t, e), t;
                            })(Error);
                            n.InvalidStateError = o;
                            var i = (function (e) {
                                function t() {
                                    return (null !== e && e.apply(this, arguments)) || this;
                                }
                                return a(t, e), t;
                            })(Error);
                            n.NetworkError = i;
                            var c = (function (e) {
                                function t() {
                                    return (null !== e && e.apply(this, arguments)) || this;
                                }
                                return a(t, e), t;
                            })(Error);
                            n.SyntaxError = c;
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5310,
            { "./xml-http-request": 5314, "./xml-http-request-event-target": 5312 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (function (e) {
                                    for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t]);
                                })(e("./xml-http-request"));
                            var r = e("./xml-http-request-event-target");
                            n.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5311,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 });
                            var r = function (e) {
                                (this.type = e), (this.bubbles = !1), (this.cancelable = !1), (this.loaded = 0), (this.lengthComputable = !1), (this.total = 0);
                            };
                            n.ProgressEvent = r;
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5312,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 });
                            var r = (function () {
                                function e() {
                                    this.listeners = {};
                                }
                                return (
                                    (e.prototype.addEventListener = function (e, t) {
                                        (e = e.toLowerCase()), (this.listeners[e] = this.listeners[e] || []), this.listeners[e].push(t.handleEvent || t);
                                    }),
                                    (e.prototype.removeEventListener = function (e, t) {
                                        if (((e = e.toLowerCase()), this.listeners[e])) {
                                            var n = this.listeners[e].indexOf(t.handleEvent || t);
                                            n < 0 || this.listeners[e].splice(n, 1);
                                        }
                                    }),
                                    (e.prototype.dispatchEvent = function (e) {
                                        var t = e.type.toLowerCase();
                                        if (((e.target = this), this.listeners[t]))
                                            for (var n = 0, r = this.listeners[t]; n < r.length; n++) {
                                                r[n].call(this, e);
                                            }
                                        var a = this["on" + t];
                                        return a && a.call(this, e), !0;
                                    }),
                                    e
                                );
                            })();
                            n.XMLHttpRequestEventTarget = r;
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5313,
            { "./xml-http-request-event-target": 5312, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            (function (t) {
                                (function () {
                                    var r,
                                        a =
                                            (this && this.__extends) ||
                                            ((r =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (e, t) {
                                                        e.__proto__ = t;
                                                    }) ||
                                                function (e, t) {
                                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                                }),
                                            function (e, t) {
                                                function n() {
                                                    this.constructor = e;
                                                }
                                                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                                            });
                                    Object.defineProperty(n, "__esModule", { value: !0 });
                                    var s = (function (e) {
                                        function n() {
                                            var t = e.call(this) || this;
                                            return (t._contentType = null), (t._body = null), t._reset(), t;
                                        }
                                        return (
                                            a(n, e),
                                            (n.prototype._reset = function () {
                                                (this._contentType = null), (this._body = null);
                                            }),
                                            (n.prototype._setData = function (e) {
                                                if (null != e)
                                                    if ("string" == typeof e) 0 !== e.length && (this._contentType = "text/plain;charset=UTF-8"), (this._body = new t(e, "utf-8"));
                                                    else if (t.isBuffer(e)) this._body = e;
                                                    else if (e instanceof ArrayBuffer) {
                                                        for (var n = new t(e.byteLength), r = new Uint8Array(e), a = 0; a < e.byteLength; a++) n[a] = r[a];
                                                        this._body = n;
                                                    } else {
                                                        if (!(e.buffer && e.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + e);
                                                        n = new t(e.byteLength);
                                                        var s = e.byteOffset;
                                                        for (r = new Uint8Array(e.buffer), a = 0; a < e.byteLength; a++) n[a] = r[a + s];
                                                        this._body = n;
                                                    }
                                            }),
                                            (n.prototype._finalizeHeaders = function (e, t) {
                                                this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString());
                                            }),
                                            (n.prototype._startUpload = function (e) {
                                                this._body && e.write(this._body), e.end();
                                            }),
                                            n
                                        );
                                    })(e("./xml-http-request-event-target").XMLHttpRequestEventTarget);
                                    n.XMLHttpRequestUpload = s;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5314,
            { "./errors": 5309, "./progress-event": 5311, "./xml-http-request-event-target": 5312, "./xml-http-request-upload": 5313, _process: 4801, buffer: 1728, cookiejar: 1799, http: 5084, https: 4451, os: 4778, url: 5174 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            (function (t, r) {
                                (function () {
                                    var a,
                                        s =
                                            (this && this.__extends) ||
                                            ((a =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (e, t) {
                                                        e.__proto__ = t;
                                                    }) ||
                                                function (e, t) {
                                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                                }),
                                            function (e, t) {
                                                function n() {
                                                    this.constructor = e;
                                                }
                                                a(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                                            }),
                                        o =
                                            (this && this.__assign) ||
                                            Object.assign ||
                                            function (e) {
                                                for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                                return e;
                                            };
                                    Object.defineProperty(n, "__esModule", { value: !0 });
                                    var i = e("http"),
                                        c = e("https"),
                                        u = e("os"),
                                        l = e("url"),
                                        d = e("./progress-event"),
                                        E = e("./errors"),
                                        T = e("./xml-http-request-event-target"),
                                        _ = e("./xml-http-request-upload"),
                                        A = e("cookiejar"),
                                        S = (function (e) {
                                            function n(r) {
                                                void 0 === r && (r = {});
                                                var a = e.call(this) || this;
                                                return (
                                                    (a.UNSENT = n.UNSENT),
                                                    (a.OPENED = n.OPENED),
                                                    (a.HEADERS_RECEIVED = n.HEADERS_RECEIVED),
                                                    (a.LOADING = n.LOADING),
                                                    (a.DONE = n.DONE),
                                                    (a.onreadystatechange = null),
                                                    (a.readyState = n.UNSENT),
                                                    (a.response = null),
                                                    (a.responseText = ""),
                                                    (a.responseType = ""),
                                                    (a.status = 0),
                                                    (a.statusText = ""),
                                                    (a.timeout = 0),
                                                    (a.upload = new _.XMLHttpRequestUpload()),
                                                    (a.responseUrl = ""),
                                                    (a.withCredentials = !1),
                                                    (a._method = null),
                                                    (a._url = null),
                                                    (a._sync = !1),
                                                    (a._headers = {}),
                                                    (a._loweredHeaders = {}),
                                                    (a._mimeOverride = null),
                                                    (a._request = null),
                                                    (a._response = null),
                                                    (a._responseParts = null),
                                                    (a._responseHeaders = null),
                                                    (a._aborting = null),
                                                    (a._error = null),
                                                    (a._loadedBytes = 0),
                                                    (a._totalBytes = 0),
                                                    (a._lengthComputable = !1),
                                                    (a._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }),
                                                    (a._restrictedHeaders = {
                                                        "accept-charset": !0,
                                                        "accept-encoding": !0,
                                                        "access-control-request-headers": !0,
                                                        "access-control-request-method": !0,
                                                        connection: !0,
                                                        "content-length": !0,
                                                        cookie: !0,
                                                        cookie2: !0,
                                                        date: !0,
                                                        dnt: !0,
                                                        expect: !0,
                                                        host: !0,
                                                        "keep-alive": !0,
                                                        origin: !0,
                                                        referer: !0,
                                                        te: !0,
                                                        trailer: !0,
                                                        "transfer-encoding": !0,
                                                        upgrade: !0,
                                                        "user-agent": !0,
                                                        via: !0,
                                                    }),
                                                    (a._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }),
                                                    (a._userAgent = "Mozilla/5.0 (" + u.type() + " " + u.arch() + ") node.js/" + t.versions.node + " v8/" + t.versions.v8),
                                                    (a._anonymous = r.anon || !1),
                                                    a
                                                );
                                            }
                                            return (
                                                s(n, e),
                                                (n.prototype.open = function (e, t, r, a, s) {
                                                    if ((void 0 === r && (r = !0), (e = e.toUpperCase()), this._restrictedMethods[e])) throw new n.SecurityError("HTTP method " + e + " is not allowed in XHR");
                                                    var o = this._parseUrl(t, a, s);
                                                    this.readyState === n.HEADERS_RECEIVED || (this.readyState, n.LOADING),
                                                        (this._method = e),
                                                        (this._url = o),
                                                        (this._sync = !r),
                                                        (this._headers = {}),
                                                        (this._loweredHeaders = {}),
                                                        (this._mimeOverride = null),
                                                        this._setReadyState(n.OPENED),
                                                        (this._request = null),
                                                        (this._response = null),
                                                        (this.status = 0),
                                                        (this.statusText = ""),
                                                        (this._responseParts = []),
                                                        (this._responseHeaders = null),
                                                        (this._loadedBytes = 0),
                                                        (this._totalBytes = 0),
                                                        (this._lengthComputable = !1);
                                                }),
                                                (n.prototype.setRequestHeader = function (e, t) {
                                                    if (this.readyState !== n.OPENED) throw new n.InvalidStateError("XHR readyState must be OPENED");
                                                    var r = e.toLowerCase();
                                                    this._restrictedHeaders[r] || /^sec-/.test(r) || /^proxy-/.test(r)
                                                        ? console.warn('Refused to set unsafe header "' + e + '"')
                                                        : ((t = t.toString()),
                                                          null != this._loweredHeaders[r] ? ((e = this._loweredHeaders[r]), (this._headers[e] = this._headers[e] + ", " + t)) : ((this._loweredHeaders[r] = e), (this._headers[e] = t)));
                                                }),
                                                (n.prototype.send = function (e) {
                                                    if (this.readyState !== n.OPENED) throw new n.InvalidStateError("XHR readyState must be OPENED");
                                                    if (this._request) throw new n.InvalidStateError("send() already called");
                                                    switch (this._url.protocol) {
                                                        case "file:":
                                                            return this._sendFile(e);
                                                        case "http:":
                                                        case "https:":
                                                            return this._sendHttp(e);
                                                        default:
                                                            throw new n.NetworkError("Unsupported protocol " + this._url.protocol);
                                                    }
                                                }),
                                                (n.prototype.abort = function () {
                                                    null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"));
                                                }),
                                                (n.prototype.getResponseHeader = function (e) {
                                                    if (null == this._responseHeaders || null == e) return null;
                                                    var t = e.toLowerCase();
                                                    return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null;
                                                }),
                                                (n.prototype.getAllResponseHeaders = function () {
                                                    var e = this;
                                                    return null == this._responseHeaders
                                                        ? ""
                                                        : Object.keys(this._responseHeaders)
                                                              .map(function (t) {
                                                                  return t + ": " + e._responseHeaders[t];
                                                              })
                                                              .join("\r\n");
                                                }),
                                                (n.prototype.overrideMimeType = function (e) {
                                                    if (this.readyState === n.LOADING || this.readyState === n.DONE) throw new n.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
                                                    this._mimeOverride = e.toLowerCase();
                                                }),
                                                (n.prototype.nodejsSet = function (e) {
                                                    if (((this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent), (this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent), e.hasOwnProperty("baseUrl"))) {
                                                        if (null != e.baseUrl) if (!l.parse(e.baseUrl, !1, !0).protocol) throw new n.SyntaxError("baseUrl must be an absolute URL");
                                                        this.nodejsBaseUrl = e.baseUrl;
                                                    }
                                                }),
                                                (n.nodejsSet = function (e) {
                                                    n.prototype.nodejsSet(e);
                                                }),
                                                (n.prototype._setReadyState = function (e) {
                                                    (this.readyState = e), this.dispatchEvent(new d.ProgressEvent("readystatechange"));
                                                }),
                                                (n.prototype._sendFile = function (e) {
                                                    throw new Error("Protocol file: not implemented");
                                                }),
                                                (n.prototype._sendHttp = function (e) {
                                                    if (this._sync) throw new Error("Synchronous XHR processing not implemented");
                                                    !e || ("GET" !== this._method && "HEAD" !== this._method) ? (e = e || "") : (console.warn("Discarding entity body for " + this._method + " requests"), (e = null)),
                                                        this.upload._setData(e),
                                                        this._finalizeHeaders(),
                                                        this._sendHxxpRequest();
                                                }),
                                                (n.prototype._sendHxxpRequest = function () {
                                                    var e = this;
                                                    if (this.withCredentials) {
                                                        var t = n.cookieJar.getCookies(A.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
                                                        this._headers.cookie = this._headers.cookie2 = t;
                                                    }
                                                    var r = "http:" === this._url.protocol ? [i, this.nodejsHttpAgent] : [c, this.nodejsHttpsAgent],
                                                        a = r[0],
                                                        s = r[1],
                                                        o = a.request.bind(a)({ hostname: this._url.hostname, port: +this._url.port, path: this._url.path, auth: this._url.auth, method: this._method, headers: this._headers, agent: s });
                                                    (this._request = o),
                                                        this.timeout &&
                                                            o.setTimeout(this.timeout, function () {
                                                                return e._onHttpTimeout(o);
                                                            }),
                                                        o.on("response", function (t) {
                                                            return e._onHttpResponse(o, t);
                                                        }),
                                                        o.on("error", function (t) {
                                                            return e._onHttpRequestError(o, t);
                                                        }),
                                                        this.upload._startUpload(o),
                                                        this._request === o && this._dispatchProgress("loadstart");
                                                }),
                                                (n.prototype._finalizeHeaders = function () {
                                                    (this._headers = o({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {})),
                                                        this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
                                                }),
                                                (n.prototype._onHttpResponse = function (e, t) {
                                                    var r = this;
                                                    if (this._request === e) {
                                                        if (
                                                            (this.withCredentials && (t.headers["set-cookie"] || t.headers["set-cookie2"]) && n.cookieJar.setCookies(t.headers["set-cookie"] || t.headers["set-cookie2"]),
                                                            [301, 302, 303, 307, 308].indexOf(t.statusCode) >= 0)
                                                        )
                                                            return (
                                                                (this._url = this._parseUrl(t.headers.location)),
                                                                (this._method = "GET"),
                                                                this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]),
                                                                null != this._headers["Content-Type"] && delete this._headers["Content-Type"],
                                                                delete this._headers["Content-Length"],
                                                                this.upload._reset(),
                                                                this._finalizeHeaders(),
                                                                void this._sendHxxpRequest()
                                                            );
                                                        (this._response = t),
                                                            this._response.on("data", function (e) {
                                                                return r._onHttpResponseData(t, e);
                                                            }),
                                                            this._response.on("end", function () {
                                                                return r._onHttpResponseEnd(t);
                                                            }),
                                                            this._response.on("close", function () {
                                                                return r._onHttpResponseClose(t);
                                                            }),
                                                            (this.responseUrl = this._url.href.split("#")[0]),
                                                            (this.status = t.statusCode),
                                                            (this.statusText = i.STATUS_CODES[this.status]),
                                                            this._parseResponseHeaders(t);
                                                        var a = this._responseHeaders["content-length"] || "";
                                                        (this._totalBytes = +a), (this._lengthComputable = !!a), this._setReadyState(n.HEADERS_RECEIVED);
                                                    }
                                                }),
                                                (n.prototype._onHttpResponseData = function (e, t) {
                                                    this._response === e &&
                                                        (this._responseParts.push(new r(t)), (this._loadedBytes += t.length), this.readyState !== n.LOADING && this._setReadyState(n.LOADING), this._dispatchProgress("progress"));
                                                }),
                                                (n.prototype._onHttpResponseEnd = function (e) {
                                                    this._response === e &&
                                                        (this._parseResponse(), (this._request = null), (this._response = null), this._setReadyState(n.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"));
                                                }),
                                                (n.prototype._onHttpResponseClose = function (e) {
                                                    if (this._response === e) {
                                                        var t = this._request;
                                                        this._setError(), t.abort(), this._setReadyState(n.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend");
                                                    }
                                                }),
                                                (n.prototype._onHttpTimeout = function (e) {
                                                    this._request === e && (this._setError(), e.abort(), this._setReadyState(n.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"));
                                                }),
                                                (n.prototype._onHttpRequestError = function (e, t) {
                                                    this._request === e && (this._setError(), e.abort(), this._setReadyState(n.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"));
                                                }),
                                                (n.prototype._dispatchProgress = function (e) {
                                                    var t = new n.ProgressEvent(e);
                                                    (t.lengthComputable = this._lengthComputable), (t.loaded = this._loadedBytes), (t.total = this._totalBytes), this.dispatchEvent(t);
                                                }),
                                                (n.prototype._setError = function () {
                                                    (this._request = null), (this._response = null), (this._responseHeaders = null), (this._responseParts = null);
                                                }),
                                                (n.prototype._parseUrl = function (e, t, n) {
                                                    var r = null == this.nodejsBaseUrl ? e : l.resolve(this.nodejsBaseUrl, e),
                                                        a = l.parse(r, !1, !0);
                                                    a.hash = null;
                                                    var s = (a.auth || "").split(":"),
                                                        o = s[0],
                                                        i = s[1];
                                                    return (o || i || t || n) && (a.auth = (t || o || "") + ":" + (n || i || "")), a;
                                                }),
                                                (n.prototype._parseResponseHeaders = function (e) {
                                                    for (var t in ((this._responseHeaders = {}), e.headers)) {
                                                        var n = t.toLowerCase();
                                                        this._privateHeaders[n] || (this._responseHeaders[n] = e.headers[t]);
                                                    }
                                                    null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride);
                                                }),
                                                (n.prototype._parseResponse = function () {
                                                    var e = r.concat(this._responseParts);
                                                    switch (((this._responseParts = null), this.responseType)) {
                                                        case "json":
                                                            this.responseText = null;
                                                            try {
                                                                this.response = JSON.parse(e.toString("utf-8"));
                                                            } catch (e) {
                                                                this.response = null;
                                                            }
                                                            return;
                                                        case "buffer":
                                                            return (this.responseText = null), void (this.response = e);
                                                        case "arraybuffer":
                                                            this.responseText = null;
                                                            for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), a = 0; a < e.length; a++) n[a] = e[a];
                                                            return void (this.response = t);
                                                        default:
                                                            try {
                                                                this.responseText = e.toString(this._parseResponseEncoding());
                                                            } catch (t) {
                                                                this.responseText = e.toString("binary");
                                                            }
                                                            this.response = this.responseText;
                                                    }
                                                }),
                                                (n.prototype._parseResponseEncoding = function () {
                                                    return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8";
                                                }),
                                                (n.ProgressEvent = d.ProgressEvent),
                                                (n.InvalidStateError = E.InvalidStateError),
                                                (n.NetworkError = E.NetworkError),
                                                (n.SecurityError = E.SecurityError),
                                                (n.SyntaxError = E.SyntaxError),
                                                (n.XMLHttpRequestUpload = _.XMLHttpRequestUpload),
                                                (n.UNSENT = 0),
                                                (n.OPENED = 1),
                                                (n.HEADERS_RECEIVED = 2),
                                                (n.LOADING = 3),
                                                (n.DONE = 4),
                                                (n.cookieJar = A.CookieJar()),
                                                n
                                            );
                                        })(T.XMLHttpRequestEventTarget);
                                    (n.XMLHttpRequest = S), (S.prototype.nodejsHttpAgent = i.globalAgent), (S.prototype.nodejsHttpsAgent = c.globalAgent), (S.prototype.nodejsBaseUrl = null);
                                }.call(this));
                            }.call(this, e("_process"), e("buffer").Buffer));
                        };
                    };
            },
            { package: "@metamask/controllers>web3>xhr2-cookies" },
        ],
        [
            5315,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            t.exports = XMLHttpRequest;
                        };
                    };
            },
            { package: "ethjs>ethjs-provider-http>xhr2" },
        ],
        [
            5316,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            t.exports = function () {
                                for (var e = {}, t = 0; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) r.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            };
                            var r = Object.prototype.hasOwnProperty;
                        };
                    };
            },
            { package: "watchify>xtend" },
        ],
        [
            5327,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.WEB3_SHIM_USAGE_ALERT_STATES = n.TOGGLEABLE_ALERT_TYPES = n.ALERT_TYPES = void 0);
                            const r = { unconnectedAccount: "unconnectedAccount", web3ShimUsage: "web3ShimUsage", invalidCustomNetwork: "invalidCustomNetwork" };
                            n.ALERT_TYPES = r;
                            const a = [r.unconnectedAccount, r.web3ShimUsage];
                            n.TOGGLEABLE_ALERT_TYPES = a;
                            n.WEB3_SHIM_USAGE_ALERT_STATES = { RECORDED: 1, DISMISSED: 2 };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5328,
            { "./permissions": 5334 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.UNKNOWN_TICKER_SYMBOL = n.SUBJECT_TYPES = n.POLLING_TOKEN_ENVIRONMENT_TYPES = n.PLATFORM_OPERA = n.PLATFORM_FIREFOX = n.PLATFORM_EDGE = n.PLATFORM_CHROME = n.PLATFORM_BRAVE = n.ORIGIN_METAMASK = n.METAMASK_PROD_CHROME_ID = n.METAMASK_FLASK_CHROME_ID = n.METAMASK_BETA_CHROME_ID = n.MESSAGE_TYPE = n.FIREFOX_BUILD_IDS = n.ENVIRONMENT_TYPE_POPUP = n.ENVIRONMENT_TYPE_NOTIFICATION = n.ENVIRONMENT_TYPE_FULLSCREEN = n.ENVIRONMENT_TYPE_BACKGROUND = n.CHROME_BUILD_IDS = n.BuildType = void 0);
                            var r = e("./permissions");
                            const a = "popup";
                            n.ENVIRONMENT_TYPE_POPUP = a;
                            const s = "notification";
                            n.ENVIRONMENT_TYPE_NOTIFICATION = s;
                            const o = "fullscreen";
                            n.ENVIRONMENT_TYPE_FULLSCREEN = o;
                            n.ENVIRONMENT_TYPE_BACKGROUND = "background";
                            n.BuildType = { beta: "beta", flask: "flask", main: "main" };
                            n.PLATFORM_BRAVE = "Brave";
                            n.PLATFORM_CHROME = "Chrome";
                            n.PLATFORM_EDGE = "Edge";
                            n.PLATFORM_FIREFOX = "Firefox";
                            n.PLATFORM_OPERA = "Opera";
                            const i = {
                                ADD_ETHEREUM_CHAIN: "wallet_addEthereumChain",
                                ETH_ACCOUNTS: r.RestrictedMethods.eth_accounts,
                                ETH_DECRYPT: "eth_decrypt",
                                ETH_GET_ENCRYPTION_PUBLIC_KEY: "eth_getEncryptionPublicKey",
                                ETH_REQUEST_ACCOUNTS: "eth_requestAccounts",
                                ETH_SIGN: "eth_sign",
                                ETH_SIGN_TYPED_DATA: "eth_signTypedData",
                                ETH_SIGN_TYPED_DATA_V3: "eth_signTypedData_v3",
                                ETH_SIGN_TYPED_DATA_V4: "eth_signTypedData_v4",
                                GET_PROVIDER_STATE: "metamask_getProviderState",
                                LOG_WEB3_SHIM_USAGE: "metamask_logWeb3ShimUsage",
                                PERSONAL_SIGN: "personal_sign",
                                SEND_METADATA: "metamask_sendDomainMetadata",
                                SWITCH_ETHEREUM_CHAIN: "wallet_switchEthereumChain",
                                WALLET_REQUEST_PERMISSIONS: "wallet_requestPermissions",
                                WATCH_ASSET: "wallet_watchAsset",
                                WATCH_ASSET_LEGACY: "metamask_watchAsset",
                                SNAP_CONFIRM: r.RestrictedMethods.snap_confirm,
                            };
                            n.MESSAGE_TYPE = i;
                            n.SUBJECT_TYPES = { EXTENSION: "extension", INTERNAL: "internal", UNKNOWN: "unknown", WEBSITE: "website", SNAP: "snap" };
                            const c = { [a]: "popupGasPollTokens", [s]: "notificationGasPollTokens", [o]: "fullScreenGasPollTokens" };
                            n.POLLING_TOKEN_ENVIRONMENT_TYPES = c;
                            n.ORIGIN_METAMASK = "metamask";
                            const u = "pbbkamfgmaedccnfkmjcofcecjhfgldn";
                            n.METAMASK_BETA_CHROME_ID = u;
                            const l = "nkbihfbeogaeaoehlefnkodbefgpgknn";
                            n.METAMASK_PROD_CHROME_ID = l;
                            const d = "ljfoeinjpaedjfecbmggjgodbgkmjkjk";
                            n.METAMASK_FLASK_CHROME_ID = d;
                            const E = [u, l, d];
                            n.CHROME_BUILD_IDS = E;
                            const T = ["webextension-beta@metamask.io", "webextension@metamask.io", "webextension-flask@metamask.io"];
                            n.FIREFOX_BUILD_IDS = T;
                            n.UNKNOWN_TICKER_SYMBOL = "UNKNOWN";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5329,
            { "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.PRIORITY_LEVELS = n.NETWORK_CONGESTION_THRESHOLDS = n.MIN_GAS_LIMIT_HEX = n.GAS_RECOMMENDATIONS = n.GAS_LIMITS = n.GAS_ESTIMATE_TYPES = n.EDIT_GAS_MODES = n.CUSTOM_GAS_ESTIMATE = void 0);
                            var r = e("ethereumjs-util");
                            const a = parseInt("21000", 10).toString(16);
                            n.MIN_GAS_LIMIT_HEX = a;
                            const s = { SIMPLE: (0, r.addHexPrefix)(a), BASE_TOKEN_ESTIMATE: (0, r.addHexPrefix)((1e5).toString(16)) };
                            n.GAS_LIMITS = s;
                            n.GAS_ESTIMATE_TYPES = { FEE_MARKET: "fee-market", LEGACY: "legacy", ETH_GASPRICE: "eth_gasPrice", NONE: "none" };
                            n.GAS_RECOMMENDATIONS = { LOW: "low", MEDIUM: "medium", HIGH: "high" };
                            n.PRIORITY_LEVELS = { TEN_PERCENT_INCREASED: "tenPercentIncreased", LOW: "low", MEDIUM: "medium", HIGH: "high", CUSTOM: "custom", DAPP_SUGGESTED: "dappSuggested" };
                            n.CUSTOM_GAS_ESTIMATE = "custom";
                            n.EDIT_GAS_MODES = { SPEED_UP: "speed-up", CANCEL: "cancel", MODIFY_IN_PLACE: "modify-in-place", SWAPS: "swaps" };
                            n.NETWORK_CONGESTION_THRESHOLDS = { NOT_BUSY: 0, STABLE: 0.33, BUSY: 0.66 };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5330,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.WEBHID_CONNECTED_STATUSES = n.TRANSPORT_STATES = n.LEDGER_USB_VENDOR_ID = n.LEDGER_TRANSPORT_TYPES = n.KEYRING_TYPES = n.KEYRING_NAMES = n.DEVICE_NAMES = n.AFFILIATE_TUTORIAL_LINKS = n.AFFILIATE_LINKS = void 0);
                            n.KEYRING_TYPES = { LEDGER: "Ledger Hardware", TREZOR: "Trezor Hardware", LATTICE: "Lattice Hardware", QR: "QR Hardware Wallet Device", IMPORTED: "Simple Key Pair" };
                            n.DEVICE_NAMES = { LEDGER: "ledger", TREZOR: "trezor", QR: "QR Hardware", LATTICE: "lattice" };
                            n.KEYRING_NAMES = { LEDGER: "Ledger", TREZOR: "Trezor", QR: "QR", LATTICE: "Lattice1" };
                            n.LEDGER_TRANSPORT_TYPES = { LIVE: "ledgerLive", WEBHID: "webhid", U2F: "u2f" };
                            n.LEDGER_USB_VENDOR_ID = "0x2c97";
                            n.WEBHID_CONNECTED_STATUSES = { CONNECTED: "connected", NOT_CONNECTED: "notConnected", UNKNOWN: "unknown" };
                            n.TRANSPORT_STATES = { NONE: "NONE", VERIFIED: "VERIFIED", DEVICE_OPEN_FAILURE: "DEVICE_OPEN_FAILURE", UNKNOWN_FAILURE: "UNKNOWN_FAILURE" };
                            n.AFFILIATE_LINKS = {
                                LEDGER: "https://shop.ledger.com/?r=17c4991a03fa",
                                GRIDPLUS: "https://gridplus.io/?afmc=7p",
                                TREZOR: "https://shop.trezor.io/product/trezor-one-black?offer_id=35&aff_id=11009",
                                KEYSTONE: "https://shop.keyst.one/?rfsn=6088257.656b3e9&utm_source=refersion&utm_medium=affiliate&utm_campaign=6088257.656b3e9",
                                AIRGAP: "https://airgap.it/",
                                COOLWALLET: "https://www.coolwallet.io/",
                                DCENT: "https://dcentwallet.com/",
                            };
                            n.AFFILIATE_TUTORIAL_LINKS = {
                                LEDGER: "https://support.ledger.com/hc/en-us/articles/4404366864657-Set-up-and-use-MetaMask-to-access-your-Ledger-Ethereum-ETH-account?docs=true",
                                GRIDPLUS: "https://docs.gridplus.io/setup/metamask",
                                TREZOR: "https://wiki.trezor.io/Apps:MetaMask",
                                KEYSTONE: "https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone",
                                AIRGAP: "https://support.airgap.it/guides/metamask/",
                                COOLWALLET: "https://www.coolwallet.io/metamask-step-by-step-guides/",
                                DCENT: "https://medium.com/dcentwallet/dcent-wallet-now-supports-qr-based-protocol-to-link-with-metamask-57555f02603f",
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5331,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.TRUNCATED_NAME_CHAR_LIMIT = n.TRUNCATED_ADDRESS_START_CHARS = n.TRUNCATED_ADDRESS_END_CHARS = void 0);
                            n.TRUNCATED_NAME_CHAR_LIMIT = 11;
                            n.TRUNCATED_ADDRESS_START_CHARS = 5;
                            n.TRUNCATED_ADDRESS_END_CHARS = 4;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5332,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TRAITS = n.REJECT_NOTFICIATION_CLOSE_SIG = n.REJECT_NOTFICIATION_CLOSE = n.METAMETRICS_BACKGROUND_PAGE_OBJECT = n.METAMETRICS_ANONYMOUS_ID = n.EVENT_NAMES = n.EVENT = n.CONTEXT_PROPS = void 0);
                            n.TRAITS = {
                                ADDRESS_BOOK_ENTRIES: "address_book_entries",
                                INSTALL_DATE_EXT: "install_date_ext",
                                LEDGER_CONNECTION_TYPE: "ledger_connection_type",
                                NETWORKS_ADDED: "networks_added",
                                NETWORKS_WITHOUT_TICKER: "networks_without_ticker",
                                NFT_AUTODETECTION_ENABLED: "nft_autodetection_enabled",
                                NUMBER_OF_ACCOUNTS: "number_of_accounts",
                                NUMBER_OF_NFT_COLLECTIONS: "number_of_nft_collections",
                                NUMBER_OF_NFTS: "number_of_nfts",
                                NUMBER_OF_TOKENS: "number_of_tokens",
                                OPENSEA_API_ENABLED: "opensea_api_enabled",
                                THEME: "theme",
                                THREE_BOX_ENABLED: "three_box_enabled",
                                TOKEN_DETECTION_ENABLED: "token_detection_enabled",
                            };
                            n.METAMETRICS_ANONYMOUS_ID = "0x0000000000000000";
                            n.METAMETRICS_BACKGROUND_PAGE_OBJECT = { path: "/background-process", title: "Background Process", url: "/background-process" };
                            n.REJECT_NOTFICIATION_CLOSE = "Cancel Via Notification Close";
                            n.REJECT_NOTFICIATION_CLOSE_SIG = "Cancel Sig Request Via Notification Close";
                            n.EVENT_NAMES = {
                                ACCOUNT_ADDED: "Account Added",
                                ACCOUNT_ADD_SELECTED: "Account Add Selected",
                                ACCOUNT_ADD_FAILED: "Account Add Failed",
                                ACCOUNT_PASSWORD_CREATED: "Wallet Password Created",
                                ACCOUNT_RESET: "Account Reset",
                                APP_INSTALLED: "App Installed",
                                APP_UNLOCKED: "App Unlocked",
                                APP_UNLOCKED_FAILED: "App Unlocked Failed",
                                APP_WINDOW_EXPANDED: "App Window Expanded",
                                DECRYPTION_APPROVED: "Decryption Approved",
                                DECRYPTION_REJECTED: "Decryption Rejected",
                                DECRYPTION_REQUESTED: "Decryption Requested",
                                ENCRYPTION_PUBLIC_KEY_APPROVED: "Encryption Approved",
                                ENCRYPTION_PUBLIC_KEY_REJECTED: "Encryption Rejected",
                                ENCRYPTION_PUBLIC_KEY_REQUESTED: "Encryption Requested",
                                EXTERNAL_LINK_CLICKED: "External Link Clicked",
                                KEY_EXPORT_SELECTED: "Key Export Selected",
                                KEY_EXPORT_REQUESTED: "Key Export Requested",
                                KEY_EXPORT_FAILED: "Key Export Failed",
                                KEY_EXPORT_CANCELED: "Key Export Canceled",
                                KEY_EXPORT_REVEALED: "Key Material Revealed",
                                KEY_EXPORT_COPIED: "Key Material Copied",
                                METRICS_OPT_IN: "Metrics Opt In",
                                METRICS_OPT_OUT: "Metrics Opt Out",
                                NAV_ACCOUNT_MENU_OPENED: "Account Menu Opened",
                                NAV_ACCOUNT_DETAILS_OPENED: "Account Details Opened",
                                NAV_CONNECTED_SITES_OPENED: "Connected Sites Opened",
                                NAV_MAIN_MENU_OPENED: "Main Menu Opened",
                                NAV_NETWORK_MENU_OPENED: "Network Menu Opened",
                                NAV_SETTINGS_OPENED: "Settings Opened",
                                NAV_ACCOUNT_SWITCHED: "Account Switched",
                                NAV_NETWORK_SWITCHED: "Network Switched",
                                NAV_BUY_BUTTON_CLICKED: "Buy Button Clicked",
                                NAV_SEND_BUTTON_CLICKED: "Send Button Clicked",
                                NAV_SWAP_BUTTON_CLICKED: "Swap Button Clicked",
                                SRP_TO_CONFIRM_BACKUP: "SRP Backup Confirm Displayed",
                                WALLET_SETUP_STARTED: "Wallet Setup Selected",
                                WALLET_SETUP_CANCELED: "Wallet Setup Canceled",
                                WALLET_SETUP_FAILED: "Wallet Setup Failed",
                                WALLET_CREATED: "Wallet Created",
                                NFT_ADDED: "NFT Added",
                                ONRAMP_PROVIDER_SELECTED: "On-ramp Provider Selected",
                                PERMISSIONS_APPROVED: "Permissions Approved",
                                PERMISSIONS_REJECTED: "Permissions Rejected",
                                PERMISSIONS_REQUESTED: "Permissions Requested",
                                PORTFOLIO_LINK_CLICKED: "Portfolio Link Clicked",
                                PUBLIC_ADDRESS_COPIED: "Public Address Copied",
                                PROVIDER_METHOD_CALLED: "Provider Method Called",
                                SIGNATURE_APPROVED: "Signature Approved",
                                SIGNATURE_REJECTED: "Signature Rejected",
                                SIGNATURE_REQUESTED: "Signature Requested",
                                TOKEN_IMPORT_BUTTON_CLICKED: "Import Token Button Clicked",
                                TOKEN_SCREEN_OPENED: "Token Screen Opened",
                                SUPPORT_LINK_CLICKED: "Support Link Clicked",
                                TOKEN_ADDED: "Token Added",
                                TOKEN_DETECTED: "Token Detected",
                                TOKEN_HIDDEN: "Token Hidden",
                                TOKEN_IMPORT_CANCELED: "Token Import Canceled",
                                TOKEN_IMPORT_CLICKED: "Token Import Clicked",
                            };
                            n.EVENT = {
                                ACCOUNT_TYPES: { DEFAULT: "metamask", IMPORTED: "imported", HARDWARE: "hardware" },
                                ACCOUNT_IMPORT_TYPES: { JSON: "json", PRIVATE_KEY: "private_key", SRP: "srp" },
                                CATEGORIES: {
                                    ACCOUNTS: "Accounts",
                                    APP: "App",
                                    AUTH: "Auth",
                                    BACKGROUND: "Background",
                                    ERROR: "Error",
                                    FOOTER: "Footer",
                                    HOME: "Home",
                                    INPAGE_PROVIDER: "inpage_provider",
                                    KEYS: "Keys",
                                    MESSAGES: "Messages",
                                    NAVIGATION: "Navigation",
                                    NETWORK: "Network",
                                    ONBOARDING: "Onboarding",
                                    RETENTION: "Retention",
                                    SETTINGS: "Settings",
                                    SNAPS: "Snaps",
                                    SWAPS: "Swaps",
                                    TRANSACTIONS: "Transactions",
                                    WALLET: "Wallet",
                                },
                                EXTERNAL_LINK_TYPES: { TRANSACTION_BLOCK_EXPLORER: "Transaction Block Explorer", BLOCK_EXPLORER: "Block Explorer", ACCOUNT_TRACKER: "Account Tracker", TOKEN_TRACKER: "Token Tracker" },
                                KEY_TYPES: { PKEY: "private_key", SRP: "srp" },
                                ONRAMP_PROVIDER_TYPES: { COINBASE: "coinbase", MOONPAY: "moonpay", WYRE: "wyre", TRANSAK: "transak", SELF_DEPOSIT: "direct_deposit" },
                                SOURCE: {
                                    NETWORK: { CUSTOM_NETWORK_FORM: "custom_network_form", POPULAR_NETWORK_LIST: "popular_network_list" },
                                    SWAPS: { MAIN_VIEW: "Main View", TOKEN_VIEW: "Token View" },
                                    TOKEN: { CUSTOM: "custom", DAPP: "dapp", DETECTED: "detected", LIST: "list" },
                                    TRANSACTION: { DAPP: "dapp", USER: "user" },
                                },
                                LOCATION: { TOKEN_DETAILS: "token_details", TOKEN_DETECTION: "token_detection", TOKEN_MENU: "token_menu" },
                            };
                            n.CONTEXT_PROPS = { PAGE_TITLE: "location" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5333,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.infuraProjectId = n.getRpcUrl = n.UNSUPPORTED_RPC_METHODS = n.TEST_NETWORK_TICKER_MAP = n.TEST_ETH_TOKEN_IMAGE_URL = n.TEST_CHAINS = n.SEPOLIA_RPC_URL = n.SEPOLIA_DISPLAY_NAME = n.POLYGON_DISPLAY_NAME = n.PALM_TOKEN_IMAGE_URL = n.PALM_DISPLAY_NAME = n.OPTIMISM_TOKEN_IMAGE_URL = n.OPTIMISM_DISPLAY_NAME = n.NETWORK_TYPES = n.NETWORK_TO_NAME_MAP = n.NETWORK_NAMES = n.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP = n.NETWORK_IDS = n.NATIVE_CURRENCY_TOKEN_IMAGE_MAP = n.MAX_SAFE_CHAIN_ID = n.MATIC_TOKEN_IMAGE_URL = n.MAINNET_RPC_URL = n.MAINNET_DISPLAY_NAME = n.LOCALHOST_RPC_URL = n.LOCALHOST_DISPLAY_NAME = n.IPFS_DEFAULT_GATEWAY_URL = n.INFURA_PROVIDER_TYPES = n.INFURA_BLOCKED_KEY = n.HARMONY_ONE_TOKEN_IMAGE_URL = n.HARMONY_DISPLAY_NAME = n.HARDFORKS = n.GOERLI_RPC_URL = n.GOERLI_DISPLAY_NAME = n.FTM_TOKEN_IMAGE_URL = n.FEATURED_RPCS = n.FANTOM_DISPLAY_NAME = n.ETH_TOKEN_IMAGE_URL = n.CURRENCY_SYMBOLS = n.CHAIN_ID_TO_TYPE_MAP = n.CHAIN_ID_TO_RPC_URL_MAP = n.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP = n.CHAIN_ID_TO_NETWORK_ID_MAP = n.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP = n.CHAIN_IDS = n.BUYABLE_CHAINS_MAP = n.BUILT_IN_NETWORKS = n.BSC_DISPLAY_NAME = n.BNB_TOKEN_IMAGE_URL = n.BNB_DISPLAY_NAME = n.AVAX_TOKEN_IMAGE_URL = n.AVALANCHE_DISPLAY_NAME = n.AURORA_TOKEN_IMAGE_URL = n.AURORA_DISPLAY_NAME = n.ARBITRUM_DISPLAY_NAME = n.AETH_TOKEN_IMAGE_URL = void 0);
                            var r = e("lodash");
                            const a = { GOERLI: "goerli", LOCALHOST: "localhost", MAINNET: "mainnet", RPC: "rpc", SEPOLIA: "sepolia" };
                            n.NETWORK_TYPES = a;
                            const s = { HOMESTEAD: "homestead" };
                            n.NETWORK_NAMES = s;
                            const o = { MAINNET: "1", GOERLI: "5", LOCALHOST: "1337", SEPOLIA: "11155111" };
                            n.NETWORK_IDS = o;
                            const i = {
                                MAINNET: "0x1",
                                GOERLI: "0x5",
                                LOCALHOST: "0x539",
                                BSC: "0x38",
                                OPTIMISM: "0xa",
                                OPTIMISM_TESTNET: "0x1a4",
                                POLYGON: "0x89",
                                AVALANCHE: "0xa86a",
                                FANTOM: "0xfa",
                                CELO: "0xa4ec",
                                ARBITRUM: "0xa4b1",
                                HARMONY: "0x63564c40",
                                PALM: "0x2a15c308d",
                                SEPOLIA: "0xaa36a7",
                                AURORA: "0x4e454152",
                            };
                            n.CHAIN_IDS = i;
                            n.MAX_SAFE_CHAIN_ID = 0xfffffffffffec;
                            const c = "Ethereum Mainnet";
                            n.MAINNET_DISPLAY_NAME = c;
                            const u = "Goerli";
                            n.GOERLI_DISPLAY_NAME = u;
                            const l = "Sepolia";
                            n.SEPOLIA_DISPLAY_NAME = l;
                            const d = "Localhost 8545";
                            n.LOCALHOST_DISPLAY_NAME = d;
                            n.BSC_DISPLAY_NAME = "Binance Smart Chain";
                            const E = "Polygon";
                            n.POLYGON_DISPLAY_NAME = E;
                            const T = "Avalanche Network C-Chain";
                            n.AVALANCHE_DISPLAY_NAME = T;
                            const _ = "Arbitrum One";
                            n.ARBITRUM_DISPLAY_NAME = _;
                            const A = "BNB Smart Chain (previously Binance Smart Chain Mainnet)";
                            n.BNB_DISPLAY_NAME = A;
                            const S = "Optimism";
                            n.OPTIMISM_DISPLAY_NAME = S;
                            const m = "Fantom Opera";
                            n.FANTOM_DISPLAY_NAME = m;
                            const N = "Harmony Mainnet Shard 0";
                            n.HARMONY_DISPLAY_NAME = N;
                            const p = "Palm";
                            n.PALM_DISPLAY_NAME = p;
                            const I = "Aurora Mainnet";
                            n.AURORA_DISPLAY_NAME = I;
                            const f = "b6bf7d3508c941499b10025c0776eaf8";
                            n.infuraProjectId = f;
                            const O = ({ network: e, excludeProjectId: t = !1 }) => `https://${e}.infura.io/v3/${t ? "" : f}`;
                            n.getRpcUrl = O;
                            const R = O({ network: a.MAINNET });
                            n.MAINNET_RPC_URL = R;
                            const g = O({ network: a.GOERLI });
                            n.GOERLI_RPC_URL = g;
                            const C = O({ network: a.SEPOLIA });
                            n.SEPOLIA_RPC_URL = C;
                            const h = "http://localhost:8545";
                            n.LOCALHOST_RPC_URL = h;
                            const P = {
                                ARBITRUM: "ETH",
                                AURORA: "Aurora ETH",
                                AVALANCHE: "AVAX",
                                BNB: "BNB",
                                BUSD: "BUSD",
                                CELO: "CELO",
                                DAI: "DAI",
                                ETH: "ETH",
                                FANTOM: "FTM",
                                HARMONY: "ONE",
                                PALM: "PALM",
                                MATIC: "MATIC",
                                TEST_ETH: "TESTETH",
                                USDC: "USDC",
                                USDT: "USDT",
                                WETH: "WETH",
                                OPTIMISM: "OP",
                            };
                            n.CURRENCY_SYMBOLS = P;
                            const D = {
                                    ...P,
                                    "1INCH": "1INCH",
                                    AAVE: "AAVE",
                                    ABT: "ABT",
                                    ACH: "ACH",
                                    AGEUR: "AGEUR",
                                    AGLD: "AGLD",
                                    AMP: "AMP",
                                    ANKR: "ANKR",
                                    APE: "APE",
                                    ARPA: "ARPA",
                                    ASM: "ASM",
                                    AUCTION: "AUCTION",
                                    AXS: "AXS",
                                    AVAX: "AVAX",
                                    AVAXC: "AVAXC",
                                    AVAXCUSDC: "AVAXCUSDC",
                                    BADGER: "BADGER",
                                    BAL: "BAL",
                                    BAND: "BAND",
                                    BAT: "BAT",
                                    BNT: "BNT",
                                    BOBA: "BOBA",
                                    BOND: "BOND",
                                    BTRST: "BTRST",
                                    CHAIN: "CHAIN",
                                    CHZ: "CHZ",
                                    CLV: "CLV",
                                    COMP: "COMP",
                                    COTI: "COTI",
                                    CRO: "CRO",
                                    CRV: "CRV",
                                    CTSI: "CTSI",
                                    CVC: "CVC",
                                    DAO: "DAO",
                                    DDX: "DDX",
                                    DNT: "DNT",
                                    ENJ: "ENJ",
                                    ENS: "ENS",
                                    EURT: "EURT",
                                    FARM: "FARM",
                                    FET: "FET",
                                    FORTH: "FORTH",
                                    FX: "FX",
                                    GNO: "GNO",
                                    GRT: "GRT",
                                    GTC: "GTC",
                                    GTH: "GTH",
                                    GUSD: "GUSD",
                                    GYEN: "GYEN",
                                    HEX: "HEX",
                                    IOTX: "IOTX",
                                    IMX: "IMX",
                                    JASMY: "JASMY",
                                    KEEP: "KEEP",
                                    KNC: "KNC",
                                    KRL: "KRL",
                                    LCX: "LCX",
                                    LINK: "LINK",
                                    LPT: "LPT",
                                    LRC: "LRC",
                                    MANA: "MANA",
                                    MASK: "MASK",
                                    MINDS: "MINDS",
                                    MIR: "MIR",
                                    MKR: "MKR",
                                    MLN: "MLN",
                                    MTL: "MTL",
                                    MUSDC: "mUSDC",
                                    NKN: "NKN",
                                    NMR: "NMR",
                                    NU: "NU",
                                    OGN: "OGN",
                                    OMG: "OMG",
                                    ORN: "ORN",
                                    OXT: "OXT",
                                    PAX: "PAX",
                                    PERP: "PERP",
                                    PLA: "PLA",
                                    POLS: "POLS",
                                    POLY: "POLY",
                                    QNT: "QNT",
                                    QUICK: "QUICK",
                                    RAD: "RAD",
                                    RAI: "RAI",
                                    RARI: "RARI",
                                    REN: "REN",
                                    REP: "REP",
                                    REQ: "REQ",
                                    RLC: "RLC",
                                    RLY: "RLY",
                                    SAND: "SAND",
                                    SHIB: "SHIB",
                                    SKL: "SKL",
                                    SNX: "SNX",
                                    SPA: "SPA",
                                    STETH: "STETH",
                                    STORJ: "STORJ",
                                    SUKU: "SUKU",
                                    SUSHI: "SUSHI",
                                    SWAP: "SWAP",
                                    SWFTC: "SWFTC",
                                    TRAC: "TRAC",
                                    TRB: "TRB",
                                    TRIBE: "TRIBE",
                                    TRU: "TRU",
                                    TXL: "TXL",
                                    UMA: "UMA",
                                    UNI: "UNI",
                                    USDS: "USDS",
                                    VRA: "VRA",
                                    WBTC: "WBTC",
                                    WCFG: "WCFG",
                                    XYO: "XYO",
                                    YFII: "YFII",
                                    YFI: "YFI",
                                    YLD: "YLD",
                                    ZRX: "ZRX",
                                    ZUSD: "ZUSD",
                                },
                                L = "./images/eth_logo.svg";
                            n.ETH_TOKEN_IMAGE_URL = L;
                            const v = "./images/black-eth-logo.svg";
                            n.TEST_ETH_TOKEN_IMAGE_URL = v;
                            const y = "./images/bnb.png";
                            n.BNB_TOKEN_IMAGE_URL = y;
                            const M = "./images/matic-token.png";
                            n.MATIC_TOKEN_IMAGE_URL = M;
                            const U = "./images/avax-token.png";
                            n.AVAX_TOKEN_IMAGE_URL = U;
                            const w = "./images/arbitrum.svg";
                            n.AETH_TOKEN_IMAGE_URL = w;
                            const b = "./images/fantom-opera.svg";
                            n.FTM_TOKEN_IMAGE_URL = b;
                            const k = "./images/harmony-one.svg";
                            n.HARMONY_ONE_TOKEN_IMAGE_URL = k;
                            const x = "./images/optimism.svg";
                            n.OPTIMISM_TOKEN_IMAGE_URL = x;
                            const H = "./images/palm.svg";
                            n.PALM_TOKEN_IMAGE_URL = H;
                            const G = "./images/aurora.png";
                            n.AURORA_TOKEN_IMAGE_URL = G;
                            const F = [a.MAINNET, a.GOERLI, a.SEPOLIA];
                            n.INFURA_PROVIDER_TYPES = F;
                            const B = [i.GOERLI, i.SEPOLIA, i.LOCALHOST];
                            n.TEST_CHAINS = B;
                            const W = (e) => (0, r.capitalize)(e),
                                Y = { [a.GOERLI]: `${W(a.GOERLI)}${P.ETH}`, [a.SEPOLIA]: `${W(a.SEPOLIA)}${P.ETH}` };
                            n.TEST_NETWORK_TICKER_MAP = Y;
                            const K = {
                                [a.GOERLI]: { networkId: o.GOERLI, chainId: i.GOERLI, ticker: Y[a.GOERLI] },
                                [a.SEPOLIA]: { networkId: o.SEPOLIA, chainId: i.SEPOLIA, ticker: Y[a.SEPOLIA] },
                                [a.MAINNET]: { networkId: o.MAINNET, chainId: i.MAINNET },
                                [a.LOCALHOST]: { networkId: o.LOCALHOST, chainId: i.LOCALHOST },
                            };
                            n.BUILT_IN_NETWORKS = K;
                            const V = { [a.MAINNET]: c, [a.GOERLI]: u, [a.SEPOLIA]: l, [a.LOCALHOST]: d, [o.GOERLI]: u, [o.SEPOLIA]: l, [o.MAINNET]: c, [o.LOCALHOST]: d, [i.GOERLI]: u, [i.SEPOLIA]: l, [i.MAINNET]: c, [i.LOCALHOST]: d };
                            n.NETWORK_TO_NAME_MAP = V;
                            const j = { [i.MAINNET]: a.MAINNET, [i.GOERLI]: a.GOERLI, [i.SEPOLIA]: a.SEPOLIA, [i.LOCALHOST]: a.LOCALHOST };
                            n.CHAIN_ID_TO_TYPE_MAP = j;
                            const $ = { [i.GOERLI]: g, [i.SEPOLIA]: C, [i.MAINNET]: R, [i.LOCALHOST]: h };
                            n.CHAIN_ID_TO_RPC_URL_MAP = $;
                            const X = { [i.MAINNET]: L, [i.AVALANCHE]: U, [i.BSC]: y, [i.POLYGON]: M, [i.ARBITRUM]: w, [i.FANTOM]: b, [i.HARMONY]: k, [i.OPTIMISM]: x, [i.PALM]: H, [i.AURORA]: G };
                            n.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP = X;
                            const q = { [o.GOERLI]: a.GOERLI, [o.SEPOLIA]: a.SEPOLIA, [o.MAINNET]: s.HOMESTEAD };
                            n.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP = q;
                            const z = { [i.MAINNET]: o.MAINNET, [i.GOERLI]: o.GOERLI, [i.SEPOLIA]: o.SEPOLIA, [i.LOCALHOST]: o.LOCALHOST };
                            n.CHAIN_ID_TO_NETWORK_ID_MAP = z;
                            const Q = { [P.ETH]: L, [P.TEST_ETH]: v, [P.BNB]: y, [P.MATIC]: M, [P.AVALANCHE]: U, [P.OPTIMISM]: x };
                            n.NATIVE_CURRENCY_TOKEN_IMAGE_MAP = Q;
                            n.INFURA_BLOCKED_KEY = "countryBlocked";
                            n.HARDFORKS = { BERLIN: "berlin", LONDON: "london" };
                            const Z = { [i.OPTIMISM]: 1, [i.OPTIMISM_TESTNET]: 1 };
                            n.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP = Z;
                            const J = new Set(["eth_signTransaction"]);
                            n.UNSUPPORTED_RPC_METHODS = J;
                            n.IPFS_DEFAULT_GATEWAY_URL = "dweb.link";
                            const ee = "ethereum",
                                te = {
                                    [i.MAINNET]: {
                                        nativeCurrency: P.ETH,
                                        network: ee,
                                        transakCurrencies: [
                                            D.ETH,
                                            D["1INCH"],
                                            D.AAVE,
                                            D.AGEUR,
                                            D.BUSD,
                                            D.CHAIN,
                                            D.CLV,
                                            D.COMP,
                                            D.CTSI,
                                            D.DAI,
                                            D.DAO,
                                            D.ENJ,
                                            D.EURT,
                                            D.GTH,
                                            D.HEX,
                                            D.LINK,
                                            D.MANA,
                                            D.MASK,
                                            D.MINDS,
                                            D.MKR,
                                            D.PLA,
                                            D.POLS,
                                            D.SAND,
                                            D.STETH,
                                            D.SUSHI,
                                            D.SWAP,
                                            D.TXL,
                                            D.UNI,
                                            D.USDC,
                                            D.USDT,
                                            D.VRA,
                                            D.WBTC,
                                            D.YLD,
                                        ],
                                        moonPay: { defaultCurrencyCode: D.ETH, showOnlyCurrencies: [D.ETH, D.USDT, D.USDC, D.DAI, D.MATIC, D.ORN, D.WETH, D.IMX] },
                                        wyre: {
                                            srn: "ethereum",
                                            currencyCode: P.ETH,
                                            currencies: [D.ETH, D.AAVE, D.BAT, D.BUSD, D.COMP, D.CRV, D.DAI, D.GUSD, D.GYEN, D.LINK, D.MKR, D.PAX, D.RAI, D.SNX, D.UMA, D.UNI, D.USDC, D.USDS, D.USDT, D.WBTC, D.WETH, D.YFI, D.ZUSD],
                                        },
                                        coinbasePayCurrencies: [
                                            D.ETH,
                                            D["1INCH"],
                                            D.AAVE,
                                            D.ABT,
                                            D.ACH,
                                            D.AGLD,
                                            D.AMP,
                                            D.ANKR,
                                            D.APE,
                                            D.ARPA,
                                            D.ASM,
                                            D.AUCTION,
                                            D.AXS,
                                            D.BADGER,
                                            D.BAL,
                                            D.BAND,
                                            D.BAT,
                                            D.BNT,
                                            D.BOBA,
                                            D.BOND,
                                            D.BTRST,
                                            D.CHZ,
                                            D.CLV,
                                            D.COMP,
                                            D.COTI,
                                            D.CRO,
                                            D.CRV,
                                            D.CTSI,
                                            D.CVC,
                                            D.DAI,
                                            D.DDX,
                                            D.DNT,
                                            D.ENJ,
                                            D.ENS,
                                            D.FARM,
                                            D.FET,
                                            D.FORTH,
                                            D.FX,
                                            D.GNO,
                                            D.GRT,
                                            D.GTC,
                                            D.IOTX,
                                            D.JASMY,
                                            D.KEEP,
                                            D.KNC,
                                            D.KRL,
                                            D.LCX,
                                            D.LINK,
                                            D.LPT,
                                            D.LRC,
                                            D.MANA,
                                            D.MASK,
                                            D.MATIC,
                                            D.MIR,
                                            D.MKR,
                                            D.MLN,
                                            D.MTL,
                                            D.NKN,
                                            D.NMR,
                                            D.NU,
                                            D.OGN,
                                            D.OMG,
                                            D.OXT,
                                            D.PAX,
                                            D.PERP,
                                            D.PLA,
                                            D.POLY,
                                            D.QNT,
                                            D.QUICK,
                                            D.RAD,
                                            D.RAI,
                                            D.RARI,
                                            D.REN,
                                            D.REP,
                                            D.REQ,
                                            D.RLC,
                                            D.RLY,
                                            D.SAND,
                                            D.SHIB,
                                            D.SKL,
                                            D.SNX,
                                            D.STORJ,
                                            D.SUKU,
                                            D.SUSHI,
                                            D.SWFTC,
                                            D.TRAC,
                                            D.TRB,
                                            D.TRIBE,
                                            D.TRU,
                                            D.UMA,
                                            D.UNI,
                                            D.USDC,
                                            D.USDT,
                                            D.WBTC,
                                            D.WCFG,
                                            D.XYO,
                                            D.YFII,
                                            D.ZRX,
                                        ],
                                    },
                                    [i.GOERLI]: { nativeCurrency: Y[a.GOERLI], network: ee },
                                    [i.SEPOLIA]: { nativeCurrency: Y[a.SEPOLIA], network: ee },
                                    [i.BSC]: { nativeCurrency: P.BNB, network: "bsc", transakCurrencies: [D.BNB, D.BUSD], moonPay: { defaultCurrencyCode: `${D.BNB}_BSC`, showOnlyCurrencies: [`${D.BNB}_BSC`, `${D.BUSD}_BSC`] } },
                                    [i.POLYGON]: {
                                        nativeCurrency: P.MATIC,
                                        network: "polygon",
                                        transakCurrencies: [D.MATIC, D.USDT, D.USDC, D.DAI],
                                        moonPay: { defaultCurrencyCode: `${D.BNB}_POLYGON`, showOnlyCurrencies: [`${D.MATIC}_POLYGON`, `${D.USDC}_POLYGON`] },
                                        wyre: { srn: "matic", currencyCode: P.MATIC, currencies: [D.MATIC, D.MUSDC] },
                                    },
                                    [i.AVALANCHE]: {
                                        nativeCurrency: P.AVALANCHE,
                                        network: "avaxcchain",
                                        transakCurrencies: [D.AVALANCHE],
                                        moonPay: { defaultCurrencyCode: `${D.AVAX}_CCHAIN`, showOnlyCurrencies: [`${D.AVAX}_CCHAIN`] },
                                        wyre: { srn: "avalanche", currencyCode: P.AVALANCHE, currencies: [D.AVALANCHE, D.AVAXC, D.AVAXCUSDC] },
                                        coinbasePayCurrencies: [D.AVALANCHE],
                                    },
                                    [i.FANTOM]: { nativeCurrency: P.FANTOM, network: "fantom", transakCurrencies: [D.FANTOM] },
                                    [i.CELO]: { nativeCurrency: P.CELO, network: "celo", transakCurrencies: [D.CELO], moonPay: { defaultCurrencyCode: D.CELO, showOnlyCurrencies: [D.CELO] } },
                                    [i.OPTIMISM]: { nativeCurrency: P.ETH, network: "optimism", transakCurrencies: [D.ETH, D.USDC] },
                                    [i.ARBITRUM]: { nativeCurrency: P.ARBITRUM, network: "arbitrum", transakCurrencies: [D.ARBITRUM, D.SPA, D.USDC, D.USDS] },
                                    [i.AURORA]: { nativeCurrency: P.AURORA, network: "aurora", transakCurrencies: [D.AURORA] },
                                };
                            n.BUYABLE_CHAINS_MAP = te;
                            const ne = [
                                { chainId: i.ARBITRUM, nickname: _, rpcUrl: `https://arbitrum-mainnet.infura.io/v3/${f}`, ticker: P.ARBITRUM, rpcPrefs: { blockExplorerUrl: "https://explorer.arbitrum.io", imageUrl: w } },
                                { chainId: i.AURORA, nickname: I, rpcUrl: `https://aurora-mainnet.infura.io/v3/${f}`, ticker: P.AURORA, rpcPrefs: { blockExplorerUrl: "https://aurorascan.dev/", imageUrl: G } },
                                { chainId: i.AVALANCHE, nickname: T, rpcUrl: `https://avalanche-mainnet.infura.io/v3/${f}`, ticker: P.AVALANCHE, rpcPrefs: { blockExplorerUrl: "https://snowtrace.io/", imageUrl: U } },
                                { chainId: i.BSC, nickname: A, rpcUrl: "https://bsc-dataseed.binance.org/", ticker: P.BNB, rpcPrefs: { blockExplorerUrl: "https://bscscan.com/", imageUrl: y } },
                                { chainId: i.FANTOM, nickname: m, rpcUrl: "https://rpc.ftm.tools/", ticker: P.FANTOM, rpcPrefs: { blockExplorerUrl: "https://ftmscan.com/", imageUrl: b } },
                                { chainId: i.HARMONY, nickname: N, rpcUrl: "https://api.harmony.one/", ticker: P.HARMONY, rpcPrefs: { blockExplorerUrl: "https://explorer.harmony.one/", imageUrl: k } },
                                { chainId: i.OPTIMISM, nickname: S, rpcUrl: `https://optimism-mainnet.infura.io/v3/${f}`, ticker: P.ETH, rpcPrefs: { blockExplorerUrl: "https://optimistic.etherscan.io/", imageUrl: x } },
                                { chainId: i.PALM, nickname: p, rpcUrl: `https://palm-mainnet.infura.io/v3/${f}`, ticker: P.PALM, rpcPrefs: { blockExplorerUrl: "https://explorer.palm.io/", imageUrl: H } },
                                {
                                    chainId: i.POLYGON,
                                    nickname: `Polygon ${(0, r.capitalize)(a.MAINNET)}`,
                                    rpcUrl: `https://polygon-mainnet.infura.io/v3/${f}`,
                                    ticker: P.MATIC,
                                    rpcPrefs: { blockExplorerUrl: "https://polygonscan.com/", imageUrl: M },
                                },
                            ];
                            n.FEATURED_RPCS = ne;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5334,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.RestrictedMethods = n.PermissionNamespaces = n.ExcludedSnapPermissions = n.ExcludedSnapEndowments = n.EndowmentPermissions = n.CaveatTypes = void 0);
                            const r = Object.freeze({ restrictReturnedAccounts: "restrictReturnedAccounts" });
                            n.CaveatTypes = r;
                            const a = Object.freeze({
                                eth_accounts: "eth_accounts",
                                snap_confirm: "snap_confirm",
                                snap_notify: "snap_notify",
                                snap_manageState: "snap_manageState",
                                snap_getBip32PublicKey: "snap_getBip32PublicKey",
                                snap_getBip32Entropy: "snap_getBip32Entropy",
                                snap_getBip44Entropy: "snap_getBip44Entropy",
                                "wallet_snap_*": "wallet_snap_*",
                            });
                            n.RestrictedMethods = a;
                            const s = Object.freeze({ wallet_snap_: "wallet_snap_*" });
                            n.PermissionNamespaces = s;
                            const o = Object.freeze({
                                "endowment:network-access": "endowment:network-access",
                                "endowment:long-running": "endowment:long-running",
                                "endowment:transaction-insight": "endowment:transaction-insight",
                                "endowment:cronjob": "endowment:cronjob",
                            });
                            n.EndowmentPermissions = o;
                            const i = new Set(["snap_dialog"]);
                            n.ExcludedSnapPermissions = i;
                            const c = new Set(["endowment:keyring"]);
                            n.ExcludedSnapEndowments = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5337,
            { "./network": 5333 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.WMATIC_CONTRACT_ADDRESS = n.WETH_OPTIMISM_CONTRACT_ADDRESS = n.WETH_GOERLI_CONTRACT_ADDRESS = n.WETH_CONTRACT_ADDRESS = n.WETH_ARBITRUM_CONTRACT_ADDRESS = n.WBNB_CONTRACT_ADDRESS = n.WAVAX_CONTRACT_ADDRESS = n.TOKEN_BUCKET_PRIORITY = n.TEST_ETH_SWAPS_TOKEN_OBJECT = n.SWAP_FAILED_ERROR = n.SWAPS_WRAPPED_TOKENS_ADDRESSES = n.SWAPS_FETCH_ORDER_CONFLICT = n.SWAPS_DEV_API_V2_BASE_URL = n.SWAPS_CLIENT_ID = n.SWAPS_CHAINID_DEFAULT_TOKEN_MAP = n.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP = n.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP = n.SWAPS_API_V2_BASE_URL = n.SLIPPAGE = n.QUOTES_NOT_AVAILABLE_ERROR = n.QUOTES_EXPIRED_ERROR = n.POLYGON = n.OPTIMISM_SWAPS_TOKEN_OBJECT = n.OPTIMISM = n.OFFLINE_FOR_MAINTENANCE = n.MATIC_SWAPS_TOKEN_OBJECT = n.GOERLI_SWAPS_TOKEN_OBJECT = n.GOERLI = n.GAS_DEV_API_BASE_URL = n.GAS_API_BASE_URL = n.ETH_SWAPS_TOKEN_OBJECT = n.ETHEREUM = n.ERROR_FETCHING_QUOTES = n.DEFAULT_ERC20_APPROVE_GAS = n.CONTRACT_DATA_DISABLED_ERROR = n.BSC = n.BNB_SWAPS_TOKEN_OBJECT = n.AVAX_SWAPS_TOKEN_OBJECT = n.AVALANCHE = n.ARBITRUM_SWAPS_TOKEN_OBJECT = n.ARBITRUM = n.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS = n.ALLOWED_PROD_SWAPS_CHAIN_IDS = n.ALLOWED_DEV_SWAPS_CHAIN_IDS = n.ALLOWED_CONTRACT_ADDRESSES = void 0);
                            var r = e("./network");
                            n.QUOTES_EXPIRED_ERROR = "quotes-expired";
                            n.SWAP_FAILED_ERROR = "swap-failed-error";
                            n.ERROR_FETCHING_QUOTES = "error-fetching-quotes";
                            n.QUOTES_NOT_AVAILABLE_ERROR = "quotes-not-avilable";
                            n.CONTRACT_DATA_DISABLED_ERROR = "contract-data-disabled";
                            n.OFFLINE_FOR_MAINTENANCE = "offline-for-maintenance";
                            n.SWAPS_FETCH_ORDER_CONFLICT = "swaps-fetch-order-conflict";
                            const a = "0x0000000000000000000000000000000000000000",
                                s = { symbol: r.CURRENCY_SYMBOLS.ETH, name: "Ether", address: a, decimals: 18, iconUrl: r.ETH_TOKEN_IMAGE_URL };
                            n.ETH_SWAPS_TOKEN_OBJECT = s;
                            const o = { symbol: r.CURRENCY_SYMBOLS.BNB, name: "Binance Coin", address: a, decimals: 18, iconUrl: r.BNB_TOKEN_IMAGE_URL };
                            n.BNB_SWAPS_TOKEN_OBJECT = o;
                            const i = { symbol: r.CURRENCY_SYMBOLS.MATIC, name: "Matic", address: a, decimals: 18, iconUrl: r.MATIC_TOKEN_IMAGE_URL };
                            n.MATIC_SWAPS_TOKEN_OBJECT = i;
                            const c = { symbol: r.CURRENCY_SYMBOLS.AVALANCHE, name: "Avalanche", address: a, decimals: 18, iconUrl: r.AVAX_TOKEN_IMAGE_URL };
                            n.AVAX_SWAPS_TOKEN_OBJECT = c;
                            const u = { symbol: r.CURRENCY_SYMBOLS.TEST_ETH, name: "Test Ether", address: a, decimals: 18, iconUrl: r.TEST_ETH_TOKEN_IMAGE_URL };
                            n.TEST_ETH_SWAPS_TOKEN_OBJECT = u;
                            const l = { symbol: r.CURRENCY_SYMBOLS.ETH, name: "Ether", address: a, decimals: 18, iconUrl: r.TEST_ETH_TOKEN_IMAGE_URL };
                            n.GOERLI_SWAPS_TOKEN_OBJECT = l;
                            const d = { ...s };
                            n.ARBITRUM_SWAPS_TOKEN_OBJECT = d;
                            const E = { ...s };
                            n.OPTIMISM_SWAPS_TOKEN_OBJECT = E;
                            n.DEFAULT_ERC20_APPROVE_GAS = "0x1d4c0";
                            const T = "0x881d40237659c251811cec9c364ef91dc08d300c",
                                _ = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
                            n.WETH_CONTRACT_ADDRESS = _;
                            const A = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
                            n.WETH_GOERLI_CONTRACT_ADDRESS = A;
                            const S = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
                            n.WBNB_CONTRACT_ADDRESS = S;
                            const m = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
                            n.WMATIC_CONTRACT_ADDRESS = m;
                            const N = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";
                            n.WAVAX_CONTRACT_ADDRESS = N;
                            const p = "0x4200000000000000000000000000000000000006";
                            n.WETH_OPTIMISM_CONTRACT_ADDRESS = p;
                            const I = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
                            n.WETH_ARBITRUM_CONTRACT_ADDRESS = I;
                            const f = "0x539";
                            n.SWAPS_API_V2_BASE_URL = "https://swap.metaswap.codefi.network";
                            n.SWAPS_DEV_API_V2_BASE_URL = "https://swap.metaswap-dev.codefi.network";
                            n.GAS_API_BASE_URL = "https://gas-api.metaswap.codefi.network";
                            n.GAS_DEV_API_BASE_URL = "https://gas-api.metaswap-dev.codefi.network";
                            const O = [r.CHAIN_IDS.MAINNET, f, r.CHAIN_IDS.BSC, r.CHAIN_IDS.POLYGON, r.CHAIN_IDS.AVALANCHE, r.CHAIN_IDS.OPTIMISM, r.CHAIN_IDS.ARBITRUM];
                            n.ALLOWED_PROD_SWAPS_CHAIN_IDS = O;
                            const R = [...O, r.CHAIN_IDS.GOERLI];
                            n.ALLOWED_DEV_SWAPS_CHAIN_IDS = R;
                            const g = [r.CHAIN_IDS.MAINNET, r.CHAIN_IDS.GOERLI];
                            n.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS = g;
                            const C = {
                                [r.CHAIN_IDS.MAINNET]: "0x881d40237659c251811cec9c364ef91dc08d300c",
                                [f]: T,
                                [r.CHAIN_IDS.BSC]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                                [r.CHAIN_IDS.POLYGON]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                                [r.CHAIN_IDS.GOERLI]: T,
                                [r.CHAIN_IDS.AVALANCHE]: "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",
                                [r.CHAIN_IDS.OPTIMISM]: "0x9dDA6Ef3D919c9bC8885D5560999A3640431e8e6",
                                [r.CHAIN_IDS.ARBITRUM]: "0x9dDA6Ef3D919c9bC8885D5560999A3640431e8e6",
                            };
                            n.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP = C;
                            const h = { [r.CHAIN_IDS.MAINNET]: _, [f]: _, [r.CHAIN_IDS.BSC]: S, [r.CHAIN_IDS.POLYGON]: m, [r.CHAIN_IDS.GOERLI]: A, [r.CHAIN_IDS.AVALANCHE]: N, [r.CHAIN_IDS.OPTIMISM]: p, [r.CHAIN_IDS.ARBITRUM]: I };
                            n.SWAPS_WRAPPED_TOKENS_ADDRESSES = h;
                            const P = {
                                [r.CHAIN_IDS.MAINNET]: [C[r.CHAIN_IDS.MAINNET], h[r.CHAIN_IDS.MAINNET]],
                                [f]: [C["0x539"], h["0x539"]],
                                [r.CHAIN_IDS.GOERLI]: [C[r.CHAIN_IDS.GOERLI], h[r.CHAIN_IDS.GOERLI]],
                                [r.CHAIN_IDS.BSC]: [C[r.CHAIN_IDS.BSC], h[r.CHAIN_IDS.BSC]],
                                [r.CHAIN_IDS.POLYGON]: [C[r.CHAIN_IDS.POLYGON], h[r.CHAIN_IDS.POLYGON]],
                                [r.CHAIN_IDS.AVALANCHE]: [C[r.CHAIN_IDS.AVALANCHE], h[r.CHAIN_IDS.AVALANCHE]],
                                [r.CHAIN_IDS.OPTIMISM]: [C[r.CHAIN_IDS.OPTIMISM], h[r.CHAIN_IDS.OPTIMISM]],
                                [r.CHAIN_IDS.ARBITRUM]: [C[r.CHAIN_IDS.ARBITRUM], h[r.CHAIN_IDS.ARBITRUM]],
                            };
                            n.ALLOWED_CONTRACT_ADDRESSES = P;
                            const D = { [r.CHAIN_IDS.MAINNET]: s, [f]: u, [r.CHAIN_IDS.BSC]: o, [r.CHAIN_IDS.POLYGON]: i, [r.CHAIN_IDS.GOERLI]: l, [r.CHAIN_IDS.AVALANCHE]: c, [r.CHAIN_IDS.OPTIMISM]: E, [r.CHAIN_IDS.ARBITRUM]: d };
                            n.SWAPS_CHAINID_DEFAULT_TOKEN_MAP = D;
                            const L = {
                                [r.CHAIN_IDS.BSC]: "https://bscscan.com/",
                                [r.CHAIN_IDS.MAINNET]: "https://etherscan.io/",
                                [r.CHAIN_IDS.POLYGON]: "https://polygonscan.com/",
                                [r.CHAIN_IDS.GOERLI]: "https://goerli.etherscan.io/",
                                [r.CHAIN_IDS.AVALANCHE]: "https://snowtrace.io/",
                                [r.CHAIN_IDS.OPTIMISM]: "https://optimistic.etherscan.io/",
                                [r.CHAIN_IDS.ARBITRUM]: "https://arbiscan.io/",
                            };
                            n.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP = L;
                            n.ETHEREUM = "ethereum";
                            n.POLYGON = "polygon";
                            n.BSC = "bsc";
                            n.GOERLI = "goerli";
                            n.AVALANCHE = "avalanche";
                            n.OPTIMISM = "optimism";
                            n.ARBITRUM = "arbitrum";
                            n.SWAPS_CLIENT_ID = "extension";
                            n.TOKEN_BUCKET_PRIORITY = { OWNED: "owned", TOP: "top" };
                            n.SLIPPAGE = { DEFAULT: 2, HIGH: 3 };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5338,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.SECOND = n.MINUTE = n.MILLISECOND = n.HOUR = n.DAY = void 0);
                            n.MILLISECOND = 1;
                            n.SECOND = 1e3;
                            n.MINUTE = 6e4;
                            const r = 36e5;
                            n.HOUR = r;
                            n.DAY = 864e5;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5339,
            { "@metamask/contract-metadata": 996 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.TOKEN_API_METASWAP_CODEFI_URL = n.STATIC_MAINNET_TOKEN_LIST = n.LISTED_CONTRACT_ADDRESSES = void 0);
                            var r,
                                a = (r = e("@metamask/contract-metadata")) && r.__esModule ? r : { default: r };
                            const s = Object.keys(a.default).map((e) => e.toLowerCase());
                            n.LISTED_CONTRACT_ADDRESSES = s;
                            const o = Object.keys(a.default).reduce((e, t) => {
                                const { logo: n, ...r } = a.default[t];
                                return { ...e, [t.toLowerCase()]: { ...r, address: t.toLowerCase(), iconUrl: `images/contract/${n}`, aggregators: [] } };
                            }, {});
                            n.STATIC_MAINNET_TOKEN_LIST = o;
                            n.TOKEN_API_METASWAP_CODEFI_URL = "https://token-api.metaswap.codefi.network/tokens/";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5340,
            { "./app": 5328 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TRANSACTION_TYPES = n.TRANSACTION_STATUSES = n.TRANSACTION_GROUP_STATUSES = n.TRANSACTION_GROUP_CATEGORIES = n.TRANSACTION_EVENTS = n.TRANSACTION_ENVELOPE_TYPES = n.TRANSACTION_APPROVAL_AMOUNT_TYPE = n.TOKEN_STANDARDS = n.SMART_TRANSACTION_STATUSES = n.IN_PROGRESS_TRANSACTION_STATUSES = n.ERC721 = n.ERC20 = n.ERC1155 = n.ASSET_TYPES = void 0);
                            var r = e("./app");
                            const a = {
                                CANCEL: "cancel",
                                CONTRACT_INTERACTION: "contractInteraction",
                                DEPLOY_CONTRACT: "contractDeployment",
                                ETH_DECRYPT: r.MESSAGE_TYPE.ETH_DECRYPT,
                                ETH_GET_ENCRYPTION_PUBLIC_KEY: r.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY,
                                INCOMING: "incoming",
                                PERSONAL_SIGN: r.MESSAGE_TYPE.PERSONAL_SIGN,
                                RETRY: "retry",
                                SIGN: r.MESSAGE_TYPE.ETH_SIGN,
                                SIGN_TYPED_DATA: r.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA,
                                SIMPLE_SEND: "simpleSend",
                                SMART: "smart",
                                SWAP: "swap",
                                SWAP_APPROVAL: "swapApproval",
                                TOKEN_METHOD_APPROVE: "approve",
                                TOKEN_METHOD_SAFE_TRANSFER_FROM: "safetransferfrom",
                                TOKEN_METHOD_TRANSFER: "transfer",
                                TOKEN_METHOD_TRANSFER_FROM: "transferfrom",
                                TOKEN_METHOD_SET_APPROVAL_FOR_ALL: "setapprovalforall",
                            };
                            n.TRANSACTION_TYPES = a;
                            n.TRANSACTION_ENVELOPE_TYPES = { LEGACY: "0x0", ACCESS_LIST: "0x1", FEE_MARKET: "0x2" };
                            const s = { UNAPPROVED: "unapproved", APPROVED: "approved", REJECTED: "rejected", SIGNED: "signed", SUBMITTED: "submitted", FAILED: "failed", DROPPED: "dropped", CONFIRMED: "confirmed", PENDING: "pending" };
                            n.TRANSACTION_STATUSES = s;
                            const o = [s.UNAPPROVED, s.APPROVED, s.SIGNED, s.SUBMITTED, s.PENDING];
                            n.IN_PROGRESS_TRANSACTION_STATUSES = o;
                            n.TRANSACTION_GROUP_STATUSES = { CANCELLED: "cancelled", PENDING: "pending" };
                            n.SMART_TRANSACTION_STATUSES = { CANCELLED: "cancelled", PENDING: "pending", SUCCESS: "success" };
                            n.TRANSACTION_APPROVAL_AMOUNT_TYPE = { CUSTOM: "custom", REVOKE: "revoke", DAPP_PROPOSED: "dapp_proposed" };
                            n.TRANSACTION_GROUP_CATEGORIES = { APPROVAL: "approval", INTERACTION: "interaction", RECEIVE: "receive", SEND: "send", SIGNATURE_REQUEST: "signature-request", SWAP: "swap" };
                            n.TRANSACTION_EVENTS = { ADDED: "Transaction Added", APPROVED: "Transaction Approved", FINALIZED: "Transaction Finalized", REJECTED: "Transaction Rejected", SUBMITTED: "Transaction Submitted" };
                            n.ASSET_TYPES = { NATIVE: "NATIVE", TOKEN: "TOKEN", COLLECTIBLE: "COLLECTIBLE", UNKNOWN: "UNKNOWN" };
                            const i = "ERC20";
                            n.ERC20 = i;
                            const c = "ERC721";
                            n.ERC721 = c;
                            const u = "ERC1155";
                            n.ERC1155 = u;
                            const l = { ERC20: i, ERC721: c, ERC1155: u, NONE: "NONE" };
                            n.TOKEN_STANDARDS = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5342,
            { "../constants/time": 5338, "../modules/fetch-with-timeout": 5352, "./storage-helpers": 5344 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r,
                                a = e("../constants/time"),
                                s = (r = e("../modules/fetch-with-timeout")) && r.__esModule ? r : { default: r },
                                o = e("./storage-helpers");
                            var i = async (e, t = {}, { cacheRefreshTime: n = 6 * a.MINUTE, timeout: r = 30 * a.SECOND } = {}) => {
                                if (t.body || (t.method && "GET" !== t.method)) throw new Error("fetchWithCache only supports GET requests");
                                if ((t.headers instanceof window.Headers || (t.headers = new window.Headers(t.headers)), t.headers.has("Content-Type") && "application/json" !== t.headers.get("Content-Type")))
                                    throw new Error("fetchWithCache only supports JSON responses");
                                const i = Date.now(),
                                    c = `cachedFetch:${e}`,
                                    { cachedResponse: u, cachedTime: l } = (await (0, o.getStorageItem)(c)) || {};
                                if (u && i - l < n) return u;
                                t.headers.set("Content-Type", "application/json");
                                const d = (0, s.default)(r),
                                    E = await d(e, { referrerPolicy: "no-referrer-when-downgrade", body: null, method: "GET", mode: "cors", ...t });
                                if (!E.ok) throw new Error(`Fetch failed with status '${E.status}': '${E.statusText}'`);
                                const T = await E.json(),
                                    _ = { cachedResponse: T, cachedTime: i };
                                return await (0, o.setStorageItem)(c, _), T;
                            };
                            n.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5343,
            { "../modules/conversion.utils": 5351 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getTokenValueParam = function (e = {}) {
                                    var t, n;
                                    return null == e || null === (t = e.args) || void 0 === t || null === (n = t._value) || void 0 === n ? void 0 : n.toString();
                                }),
                                (n.hexToDecimal = function (e) {
                                    return (0, r.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec" });
                                });
                            var r = e("../modules/conversion.utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5344,
            { localforage: 4513 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getStorageItem = async function (e) {
                                    try {
                                        const t = await a.default.getItem(e);
                                        return null === t ? undefined : JSON.parse(t);
                                    } catch (e) {
                                        return undefined;
                                    }
                                }),
                                (n.setStorageItem = async function (e, t) {
                                    try {
                                        const n = JSON.stringify(t);
                                        await a.default.setItem(e, n);
                                    } catch (e) {
                                        console.warn(e);
                                    }
                                });
                            var r,
                                a = (r = e("localforage")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5345,
            {
                "../../app/scripts/lib/util": 86,
                "../constants/network": 5333,
                "../constants/swaps": 5337,
                "../constants/time": 5338,
                "../modules/hexstring-utils": 5354,
                "./fetch-with-cache": 5342,
                "./transactions-controller-utils": 5347,
                "bignumber.js": 1637,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.QUOTE_VALIDATORS = void 0),
                                (n.addHexPrefixToObjectValues = R),
                                (n.calcTokenValue = f),
                                (n.constructTxParams = g),
                                (n.fetchTradesInfo = async function ({ slippage: e, sourceToken: t, sourceDecimals: n, destinationToken: r, value: a, fromAddress: s, exchangeList: o }, { chainId: c }) {
                                    const u = { destinationToken: r, sourceToken: t, sourceAmount: f(a, n).toString(10), slippage: e, timeout: 10 * i.SECOND, walletAddress: s };
                                    o && (u.exchangeList = o);
                                    O(c, t, r) && (u.enableDirectWrapping = !0);
                                    const E = new URLSearchParams(u).toString(),
                                        T = `${I("trade", c)}${E}`,
                                        A = await (0, l.default)(T, { method: "GET", headers: _ }, { cacheRefreshTime: 0, timeout: 15 * i.SECOND });
                                    return A.reduce((t, n) => {
                                        if (n.trade && !n.error && N(p, n, T)) {
                                            const r = g({ to: n.trade.to, from: n.trade.from, data: n.trade.data, amount: (0, d.decimalToHex)(n.trade.value), gas: (0, d.decimalToHex)(n.maxGas) });
                                            let { approvalNeeded: a } = n;
                                            return a && (a = g({ ...a })), { ...t, [n.aggregator]: { ...n, slippage: e, trade: r, approvalNeeded: a } };
                                        }
                                        return t;
                                    }, {});
                                }),
                                (n.validHex = n.truthyString = n.truthyDigitString = n.shouldEnableDirectWrapping = n.getBaseApi = void 0),
                                (n.validateData = N);
                            var r = E(e("bignumber.js")),
                                a = E(e("loglevel")),
                                s = e("../constants/network"),
                                o = e("../constants/swaps"),
                                i = e("../constants/time"),
                                c = e("../modules/hexstring-utils"),
                                u = e("../../app/scripts/lib/util"),
                                l = E(e("./fetch-with-cache")),
                                d = e("./transactions-controller-utils");
                            function E(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const T = [s.CHAIN_IDS.GOERLI, s.CHAIN_IDS.LOCALHOST],
                                _ = { "X-Client-Id": o.SWAPS_CLIENT_ID },
                                A = (e) => Boolean(null == e ? void 0 : e.match(/^0x[a-f0-9]+$/u));
                            n.validHex = A;
                            const S = (e) => Boolean(null == e ? void 0 : e.length);
                            n.truthyString = S;
                            const m = (e) => S(e) && Boolean(e.match(/^\d+$/u));
                            function N(e, t, n, r = !0) {
                                return e.every(({ property: e, type: s, validator: o }) => {
                                    const i = s.split("|").some((n) => typeof t[e] === n) && (!o || o(t[e]));
                                    return !i && r && a.default.error(`response to GET ${n} invalid for property ${e}; value was:`, t[e], "| type was: ", typeof t[e]), i;
                                });
                            }
                            n.truthyDigitString = m;
                            const p = [
                                { property: "trade", type: "object", validator: (e) => e && A(e.data) && (0, c.isValidHexAddress)(e.to, { allowNonPrefixed: !1 }) && (0, c.isValidHexAddress)(e.from, { allowNonPrefixed: !1 }) && S(e.value) },
                                {
                                    property: "approvalNeeded",
                                    type: "object",
                                    validator: (e) => null === e || (e && A(e.data) && (0, c.isValidHexAddress)(e.to, { allowNonPrefixed: !1 }) && (0, c.isValidHexAddress)(e.from, { allowNonPrefixed: !1 })),
                                },
                                { property: "sourceAmount", type: "string", validator: m },
                                { property: "destinationAmount", type: "string", validator: m },
                                { property: "sourceToken", type: "string", validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                                { property: "destinationToken", type: "string", validator: (e) => (0, c.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                                { property: "aggregator", type: "string", validator: S },
                                { property: "aggType", type: "string", validator: S },
                                { property: "error", type: "object", validator: (e) => null === e || "object" == typeof e },
                                { property: "averageGas", type: "number" },
                                { property: "maxGas", type: "number" },
                                { property: "gasEstimate", type: "number|undefined", validator: (e) => e === undefined || e > 0 },
                                { property: "fee", type: "number" },
                            ];
                            n.QUOTE_VALIDATORS = p;
                            const I = function (e, t = s.CHAIN_IDS.MAINNET) {
                                const n = ((e, t) => {
                                    const n = o.SWAPS_API_V2_BASE_URL,
                                        r = o.GAS_API_BASE_URL;
                                    if (["refreshTime"].includes(e)) return n;
                                    const a = t && parseInt(t, 16);
                                    return ["gasPrices"].includes(e) ? `${r}/networks/${a}` : `${n}/networks/${a}`;
                                })(e, (t = T.includes(t) ? s.CHAIN_IDS.MAINNET : t));
                                if (!n) throw new Error(`Swaps API calls are disabled for chainId: ${t}`);
                                switch (e) {
                                    case "trade":
                                        return `${n}/trades?`;
                                    case "tokens":
                                        return `${n}/tokens`;
                                    case "token":
                                        return `${n}/token`;
                                    case "topAssets":
                                        return `${n}/topAssets`;
                                    case "aggregatorMetadata":
                                        return `${n}/aggregatorMetadata`;
                                    case "gasPrices":
                                        return `${n}/gasPrices`;
                                    case "network":
                                        return n;
                                    default:
                                        throw new Error("getBaseApi requires an api call type");
                                }
                            };
                            function f(e, t) {
                                const n = Math.pow(10, Number(t || 0));
                                return new r.default(String(e)).times(n);
                            }
                            n.getBaseApi = I;
                            const O = (e, t, n) => {
                                var r;
                                if (!t || !n) return !1;
                                const a = o.SWAPS_WRAPPED_TOKENS_ADDRESSES[e],
                                    s = null === (r = o.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e]) || void 0 === r ? void 0 : r.address,
                                    i = t.toLowerCase(),
                                    c = n.toLowerCase();
                                return (i === a && c === s) || (i === s && c === a);
                            };
                            function R(e) {
                                return Object.keys(e).reduce((t, n) => ({ ...t, [n]: (0, u.addHexPrefix)(e[n]) }), {});
                            }
                            function g({ sendToken: e, data: t, to: n, amount: r, from: a, gas: s, gasPrice: o }) {
                                const i = { data: t, from: a, value: "0", gas: s, gasPrice: o };
                                return e || ((i.value = r), (i.to = n)), R(i);
                            }
                            n.shouldEnableDirectWrapping = O;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5346,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = async (e) => {
                                let t;
                                return (
                                    "auto" === e && (e = "ltr"),
                                    [...document.querySelectorAll("link[rel=stylesheet]")].forEach((n) => {
                                        n.title === e && n.disabled ? ((n.disabled = !1), (t = n)) : n.title === e || n.disabled || (n.disabled = !0);
                                    }),
                                    t
                                        ? new Promise((n, r) => {
                                              (t.onload = () => {
                                                  n();
                                              }),
                                                  (t.onerror = () => r(new Error(`Failed to load '${e}' stylesheet`)));
                                          })
                                        : undefined
                                );
                            };
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5347,
            { "../constants/transaction": 5340, "../modules/conversion.utils": 5351, "../modules/swaps.utils": 5362, "bignumber.js": 1637 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TRANSACTION_NO_CONTRACT_ERROR_KEY = n.TRANSACTION_ENVELOPE_TYPE_NAMES = n.TEN_SECONDS_IN_MILLISECONDS = void 0),
                                (n.calcGasTotal = c),
                                (n.calcTokenAmount = l),
                                (n.decimalToHex = function (e) {
                                    return (0, o.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "hex" });
                                }),
                                (n.getSwapsTokensReceivedFromTxMeta = function (e, t, n, r, d, E, T) {
                                    var _;
                                    const A = null == t ? void 0 : t.txReceipt,
                                        S = (null == t || null === (_ = t.txReceipt) || void 0 === _ ? void 0 : _.type) === s.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET;
                                    if ((0, i.isSwapsDefaultTokenSymbol)(e, T)) {
                                        if (!(A && t && t.postTxBalance && t.preTxBalance)) return null;
                                        if (t.swapMetaData && t.preTxBalance === t.postTxBalance) return t.swapMetaData.token_to_amount;
                                        let e = "0x0";
                                        E && E.txReceipt && (e = c(E.txReceipt.gasUsed, S ? E.txReceipt.effectiveGasPrice : E.txParams.gasPrice));
                                        const n = c(A.gasUsed, S ? A.effectiveGasPrice : t.txParams.gasPrice),
                                            r = new a.default(n, 16).plus(e, 16).toString(16),
                                            s = (0, o.subtractCurrencies)(t.preTxBalance, r, { aBase: 16, bBase: 16, toNumericBase: "hex" });
                                        return (0, o.subtractCurrencies)(t.postTxBalance, s, { aBase: 16, bBase: 16, fromDenomination: "WEI", toDenomination: "ETH", toNumericBase: "dec", numberOfDecimals: 6 });
                                    }
                                    const m = null == A ? void 0 : A.logs;
                                    if (m && "0x0" !== (null == A ? void 0 : A.status)) {
                                        const e = m.find((e) => {
                                            const t = e.topics && "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" === e.topics[0],
                                                a = e.address === n,
                                                s = e.topics && e.topics[2] && e.topics[2].match(r.slice(2));
                                            return t && a && s;
                                        });
                                        return e ? u(l(e.data, d).toString(10), 6) : "";
                                    }
                                    return null;
                                }),
                                (n.hexWEIToDecETH = function (e) {
                                    return (0, o.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", toDenomination: "ETH" });
                                }),
                                (n.hexWEIToDecGWEI = function (e) {
                                    return (0, o.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", toDenomination: "GWEI" });
                                }),
                                (n.toPrecisionWithoutTrailingZeros = u);
                            var r,
                                a = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                                s = e("../constants/transaction"),
                                o = e("../modules/conversion.utils"),
                                i = e("../modules/swaps.utils");
                            n.TRANSACTION_NO_CONTRACT_ERROR_KEY = "transactionErrorNoContract";
                            function c(e = "0", t = "0") {
                                return (0, o.multiplyCurrencies)(e, t, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 });
                            }
                            function u(e, t) {
                                return new a.default(e).toPrecision(t).replace(/(\.[0-9]*[1-9])0*|(\.0*)/u, "$1");
                            }
                            function l(e, t) {
                                const n = Math.pow(10, Number(t || 0));
                                return new a.default(String(e)).div(n);
                            }
                            n.TEN_SECONDS_IN_MILLISECONDS = 1e4;
                            n.TRANSACTION_ENVELOPE_TYPE_NAMES = { FEE_MARKET: "fee-market", LEGACY: "legacy" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5350,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.readAddressAsContract = void 0);
                            n.readAddressAsContract = async (e, t) => {
                                let n;
                                try {
                                    n = await e.getCode(t);
                                } catch (e) {
                                    n = null;
                                }
                                return { contractCode: n, isContractAddress: n && "0x" !== n && "0x0" !== n };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5351,
            { "./hexstring-utils": 5354, "bignumber.js": 1637, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.conversionUtil = n.conversionMax = n.conversionLessThan = n.conversionLTE = n.conversionGreaterThan = n.conversionGTE = n.addCurrencies = void 0),
                                (n.decGWEIToHexWEI = function (e) {
                                    return S(e, { fromNumericBase: "dec", toNumericBase: "hex", fromDenomination: "GWEI", toDenomination: "WEI" });
                                }),
                                (n.toNormalizedDenomination = n.toNegative = n.toBigNumber = n.subtractCurrencies = n.multiplyCurrencies = n.divideCurrencies = void 0);
                            var r,
                                a = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                                s = e("ethereumjs-util"),
                                o = e("./hexstring-utils");
                            const i = new a.default("1000000000000000000"),
                                c = new a.default("1000000000"),
                                u = new a.default("1"),
                                l = { hex: (e) => new a.default((0, o.stripHexPrefix)(e), 16), dec: (e) => new a.default(String(e), 10), BN: (e) => new a.default(e.toString(16), 16) };
                            n.toBigNumber = l;
                            const d = { WEI: (e) => e.div(i), GWEI: (e) => e.div(c), ETH: (e) => e.div(u) };
                            n.toNormalizedDenomination = d;
                            const E = { WEI: (e) => e.times(i).round(), GWEI: (e) => e.times(c).round(9), ETH: (e) => e.times(u).round(9) },
                                T = { hex: (e) => e.toString(16), dec: (e) => new a.default(e).toString(10), BN: (e) => new s.BN(e.toString(16)) },
                                _ = (e) => Number.isInteger(e) && e > 1,
                                A = ({
                                    value: e,
                                    fromNumericBase: t,
                                    fromDenomination: n,
                                    fromCurrency: r,
                                    toNumericBase: s,
                                    toDenomination: o,
                                    toCurrency: i,
                                    numberOfDecimals: c,
                                    conversionRate: u,
                                    invertConversionRate: _,
                                    roundDown: A,
                                }) => {
                                    let S = t ? l[t](e) : e;
                                    if ((n && (S = d[n](S)), r !== i)) {
                                        if (null === u || u === undefined) throw new Error(`Converting from ${r} to ${i} requires a conversionRate, but one was not provided`);
                                        let e = l.dec(u);
                                        _ && (e = new a.default(1).div(u)), (S = S.times(e));
                                    }
                                    return o && (S = E[o](S)), c !== undefined && null !== c && (S = S.round(c, a.default.ROUND_HALF_DOWN)), A && (S = S.round(A, a.default.ROUND_DOWN)), s && (S = T[s](S)), S;
                                },
                                S = (e, { fromCurrency: t = null, toCurrency: n = t, fromNumericBase: r, toNumericBase: a, fromDenomination: s, toDenomination: o, numberOfDecimals: i, conversionRate: c, invertConversionRate: u }) =>
                                    t === n || c
                                        ? A({ fromCurrency: t, toCurrency: n, fromNumericBase: r, toNumericBase: a, fromDenomination: s, toDenomination: o, numberOfDecimals: i, conversionRate: c, invertConversionRate: u, value: e || "0" })
                                        : 0;
                            n.conversionUtil = S;
                            const m = (e, t) => {
                                if (!_(t)) throw new Error("Must specify valid base");
                                return "string" == typeof e || e instanceof a.default ? new a.default(e, t) : new a.default(String(e), t);
                            };
                            n.addCurrencies = (e, t, n = {}) => {
                                const { aBase: r, bBase: a, ...s } = n;
                                if (!_(r) || !_(a)) throw new Error("Must specify valid aBase and bBase");
                                const o = m(e, r).add(m(t, a));
                                return A({ value: o, ...s });
                            };
                            n.subtractCurrencies = (e, t, n = {}) => {
                                const { aBase: r, bBase: a, ...s } = n;
                                if (!_(r) || !_(a)) throw new Error("Must specify valid aBase and bBase");
                                const o = m(e, r).minus(m(t, a));
                                return A({ value: o, ...s });
                            };
                            const N = (e, t, n = {}) => {
                                const { multiplicandBase: r, multiplierBase: a, ...s } = n;
                                if (!_(r) || !_(a)) throw new Error("Must specify valid multiplicandBase and multiplierBase");
                                const o = m(e, r).times(m(t, a));
                                return A({ value: o, ...s });
                            };
                            n.multiplyCurrencies = N;
                            n.divideCurrencies = (e, t, n = {}) => {
                                const { dividendBase: r, divisorBase: a, ...s } = n;
                                if (!_(r) || !_(a)) throw new Error("Must specify valid dividendBase and divisorBase");
                                const o = m(e, r).div(m(t, a));
                                return A({ value: o, ...s });
                            };
                            const p = ({ ...e }, { ...t }) => {
                                const n = A({ ...e }),
                                    r = A({ ...t });
                                return n.gt(r);
                            };
                            n.conversionGreaterThan = p;
                            n.conversionLessThan = ({ ...e }, { ...t }) => {
                                const n = A({ ...e }),
                                    r = A({ ...t });
                                return n.lt(r);
                            };
                            n.conversionMax = ({ ...e }, { ...t }) => (p({ ...e }, { ...t }) ? e.value : t.value);
                            n.conversionGTE = ({ ...e }, { ...t }) => {
                                const n = A({ ...e }),
                                    r = A({ ...t });
                                return n.greaterThanOrEqualTo(r);
                            };
                            n.conversionLTE = ({ ...e }, { ...t }) => {
                                const n = A({ ...e }),
                                    r = A({ ...t });
                                return n.lessThanOrEqualTo(r);
                            };
                            n.toNegative = (e, t = {}) => N(e, -1, t);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5352,
            { "../constants/time": 5338, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = e("lodash"),
                                a = e("../constants/time");
                            var s = (0, r.memoize)((e = 30 * a.SECOND) => {
                                if (!Number.isInteger(e) || e < 1) throw new Error("Must specify positive integer timeout.");
                                return async function (t, n) {
                                    const r = new window.AbortController(),
                                        { signal: a } = r,
                                        s = window.fetch(t, { ...n, signal: a }),
                                        o = setTimeout(() => r.abort(), e);
                                    try {
                                        const e = await s;
                                        return clearTimeout(o), e;
                                    } catch (e) {
                                        throw (clearTimeout(o), e);
                                    }
                                };
                            });
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5353,
            { "./conversion.utils": 5351, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getMaximumGasTotalInHexWei = s),
                                (n.getMinimumGasTotalInHexWei = function ({ gasLimit: e = "0x0", gasPrice: t, maxPriorityFeePerGas: n, maxFeePerGas: o, baseFeePerGas: i } = {}) {
                                    const c = Boolean(o || n || i);
                                    if (c && t) throw new Error("getMinimumGasTotalInHexWei expects either gasPrice OR the EIP-1559 gas fields, but both were provided");
                                    if (!1 === c && !t) throw new Error("getMinimumGasTotalInHexWei expects either gasPrice OR the EIP-1559 gas fields, but neither were provided");
                                    if (c && !i) throw new Error("getMinimumGasTotalInHexWei requires baseFeePerGas be provided when calculating EIP-1559 totals");
                                    if (c && (!o || !n)) throw new Error("getMinimumGasTotalInHexWei requires maxFeePerGas and maxPriorityFeePerGas be provided when calculating EIP-1559 totals");
                                    if (!1 === c) return s({ gasLimit: e, gasPrice: t });
                                    const u = (0, a.addCurrencies)(i, n, { toNumericBase: "hex", aBase: 16, bBase: 16 });
                                    if ((0, a.conversionGreaterThan)({ value: u, fromNumericBase: "hex" }, { value: o, fromNumericBase: "hex" })) return s({ gasLimit: e, maxFeePerGas: o });
                                    return (0, r.addHexPrefix)((0, a.multiplyCurrencies)(e, u, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 }));
                                });
                            var r = e("ethereumjs-util"),
                                a = e("./conversion.utils");
                            function s({ gasLimit: e = "0x0", gasPrice: t, maxFeePerGas: n } = {}) {
                                if (n) return (0, r.addHexPrefix)((0, a.multiplyCurrencies)(e, n, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 }));
                                if (!t) throw new Error("getMaximumGasTotalInHexWei requires gasPrice be provided to calculate legacy gas total");
                                return (0, r.addHexPrefix)((0, a.multiplyCurrencies)(e, t, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 }));
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5354,
            { "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.BURN_ADDRESS = void 0),
                                (n.isBurnAddress = function (e) {
                                    return e === a;
                                }),
                                (n.isValidHexAddress = function (e, { allowNonPrefixed: t = !0, mixedCaseUseChecksum: n = !1 } = {}) {
                                    const a = t ? (0, r.addHexPrefix)(e) : e;
                                    if (!(0, r.isHexString)(a)) return !1;
                                    if (n) {
                                        const e = a.slice(2),
                                            t = e.toLowerCase(),
                                            n = e.toUpperCase();
                                        if (!(e === t || e === n)) return (0, r.isValidChecksumAddress)(a);
                                    }
                                    return (0, r.isValidAddress)(a);
                                }),
                                (n.stripHexPrefix = function (e) {
                                    if ("string" != typeof e) return e;
                                    return (0, r.isHexPrefixed)(e) ? e.slice(2) : e;
                                }),
                                (n.toChecksumHexAddress = function (e) {
                                    if (!e) return "";
                                    const t = (0, r.addHexPrefix)(e);
                                    if (!(0, r.isHexString)(t)) return t;
                                    return (0, r.toChecksumAddress)(t);
                                });
                            var r = e("ethereumjs-util");
                            const a = (0, r.zeroAddress)();
                            n.BURN_ADDRESS = a;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5355,
            { "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var r;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.isManifestV3 = void 0);
                            const a = 3 === ((r = e("webextension-polyfill")) && r.__esModule ? r : { default: r }).default.runtime.getManifest().manifest_version;
                            n.isManifestV3 = a;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5356,
            { "../constants/network": 5333 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.isPrefixedFormattedHexString = function (e) {
                                    if ("string" != typeof e) return !1;
                                    return /^0x[1-9a-f]+[0-9a-f]*$/iu.test(e);
                                }),
                                (n.isSafeChainId = function (e) {
                                    return Number.isSafeInteger(e) && e > 0 && e <= r.MAX_SAFE_CHAIN_ID;
                                }),
                                (n.isTokenDetectionEnabledForNetwork = function (e) {
                                    switch (e) {
                                        case r.CHAIN_IDS.MAINNET:
                                        case r.CHAIN_IDS.BSC:
                                        case r.CHAIN_IDS.POLYGON:
                                        case r.CHAIN_IDS.AVALANCHE:
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                });
                            var r = e("../constants/network");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5357,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.maskObject = function e(t, n) {
                                    return Object.keys(t).reduce((r, a) => (!0 === n[a] ? (r[a] = t[a]) : n[a] && (r[a] = e(t[a], n[a])), r), {});
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5358,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    return (a %= r), a++;
                                });
                            const r = Number.MAX_SAFE_INTEGER;
                            let a = Math.round(Math.random() * r);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5359,
            { "./fetch-with-timeout": 5352, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            (function (t) {
                                (function () {
                                    var r;
                                    Object.defineProperty(n, "__esModule", { value: !0 }),
                                        (n.jsonRpcRequest = async function (e, n, r = []) {
                                            let s = e;
                                            const o = { "Content-Type": "application/json" },
                                                { origin: i, pathname: c, username: u, password: l, search: d } = new URL(e);
                                            if (u && l) {
                                                const e = t.from(`${u}:${l}`).toString("base64");
                                                (o.Authorization = `Basic ${e}`), (s = `${i}${c}${d}`);
                                            }
                                            const E = await a(s, { method: "POST", body: JSON.stringify({ id: Date.now().toString(), jsonrpc: "2.0", method: n, params: r }), headers: o, cache: "default" }).then((e) => e.json());
                                            if (!E || Array.isArray(E) || "object" != typeof E) throw new Error(`RPC endpoint ${e} returned non-object response.`);
                                            const { error: T, result: _ } = E;
                                            if (T) throw new Error((null == T ? void 0 : T.message) || T);
                                            return _;
                                        });
                                    const a = (0, ((r = e("./fetch-with-timeout")) && r.__esModule ? r : { default: r }).default)();
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5360,
            { "./hexstring-utils": 5354, "@spruceid/siwe-parser": 1305, buffer: 1728, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(n, "__esModule", { value: !0 }), (n.formatMessageParams = n.detectSIWE = void 0);
                                    var r,
                                        a = e("@spruceid/siwe-parser"),
                                        s = (r = e("loglevel")) && r.__esModule ? r : { default: r },
                                        o = e("./hexstring-utils");
                                    n.detectSIWE = (e) => {
                                        try {
                                            const { data: n } = e,
                                                r = ((e) => {
                                                    try {
                                                        const n = (0, o.stripHexPrefix)(e),
                                                            r = t.from(n, "hex");
                                                        return 32 === r.length ? e : r.toString("utf8");
                                                    } catch (t) {
                                                        return s.default.error(t), e;
                                                    }
                                                })(n);
                                            return { isSIWEMessage: !0, parsedMessage: new a.ParsedMessage(r) };
                                        } catch (e) {
                                            return { isSIWEMessage: !1, parsedMessage: null };
                                        }
                                    };
                                    n.formatMessageParams = (e, t) => {
                                        const n = [],
                                            { statement: r, uri: a, version: s, chainId: o, nonce: i, issuedAt: c, expirationTime: u, notBefore: l, requestId: d, resources: E } = e;
                                        return (
                                            r && n.push({ label: t("SIWELabelMessage"), value: r }),
                                            a && n.push({ label: t("SIWELabelURI"), value: a }),
                                            s && n.push({ label: t("SIWELabelVersion"), value: s }),
                                            o && n.push({ label: t("SIWELabelChainID"), value: o }),
                                            i && n.push({ label: t("SIWELabelNonce"), value: i }),
                                            c && n.push({ label: t("SIWELabelIssuedAt"), value: c }),
                                            u && n.push({ label: t("SIWELabelExpirationTime"), value: u }),
                                            l && n.push({ label: t("SIWELabelNotBefore"), value: l }),
                                            d && n.push({ label: t("SIWELabelRequestID"), value: d }),
                                            E && E.length > 0 && n.push({ label: t("SIWELabelResources", [E.length]), value: E.reduce((e, t) => `${e}${t}\n`, "").trim() }),
                                            n
                                        );
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5361,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.isEqualCaseInsensitive = function (e, t) {
                                    if ("string" != typeof e || "string" != typeof t) return !1;
                                    return e.toLowerCase() === t.toLowerCase();
                                }),
                                (n.prependZero = function (e, t) {
                                    return e.toString().padStart(t, "0");
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5362,
            { "../constants/swaps": 5337 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.isSwapsDefaultTokenAddress = function (e, t) {
                                    var n;
                                    if (!e || !t) return !1;
                                    return e === (null === (n = r.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[t]) || void 0 === n ? void 0 : n.address);
                                }),
                                (n.isSwapsDefaultTokenSymbol = function (e, t) {
                                    var n;
                                    if (!e || !t) return !1;
                                    return e === (null === (n = r.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[t]) || void 0 === n ? void 0 : n.symbol);
                                });
                            var r = e("../constants/swaps");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5363,
            { "../constants/transaction": 5340, "./contract-utils": 5350, "./string-utils": 5361, "@metamask/metamask-eth-abis": 1171, "ethereumjs-util": 2107, ethers: 2131, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.determineTransactionAssetType = async function (e, t, n) {
                                    let r = e.type;
                                    if (!1 === S.includes(e.type)) {
                                        const n = await A(e.txParams, t);
                                        r = n.type;
                                    }
                                    if (
                                        [c.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE, c.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL, c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER, c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM].find(
                                            (e) => e === r
                                        ) ||
                                        r === c.TRANSACTION_TYPES.CONTRACT_INTERACTION
                                    )
                                        try {
                                            const t = await n(e.txParams.to);
                                            if (t.standard) return { assetType: t.standard === c.TOKEN_STANDARDS.ERC20 ? c.ASSET_TYPES.TOKEN : c.ASSET_TYPES.COLLECTIBLE, tokenStandard: t.standard };
                                        } catch {}
                                    if (r === c.TRANSACTION_TYPES.CONTRACT_INTERACTION) return { assetType: c.ASSET_TYPES.UNKNOWN, tokenStandard: c.TOKEN_STANDARDS.NONE };
                                    return { assetType: c.ASSET_TYPES.NATIVE, tokenStandard: c.TOKEN_STANDARDS.NONE };
                                }),
                                (n.determineTransactionContractCode = async function (e, t) {
                                    const { to: n } = e,
                                        { contractCode: r } = await (0, u.readAddressAsContract)(t, n);
                                    return r;
                                }),
                                (n.determineTransactionType = A),
                                (n.isEIP1559Transaction = function (e) {
                                    var t, n;
                                    return (
                                        (0, a.isHexString)(null == e || null === (t = e.txParams) || void 0 === t ? void 0 : t.maxFeePerGas) &&
                                        (0, a.isHexString)(null == e || null === (n = e.txParams) || void 0 === n ? void 0 : n.maxPriorityFeePerGas)
                                    );
                                }),
                                (n.isLegacyTransaction = function (e) {
                                    return void 0 === e.txParams.maxFeePerGas && void 0 === e.txParams.maxPriorityFeePerGas && (void 0 === e.txParams.gasPrice || (0, a.isHexString)(e.txParams.gasPrice));
                                }),
                                (n.parseStandardTokenTransactionData = _),
                                (n.transactionMatchesNetwork = function (e, t, n) {
                                    if (void 0 !== e.chainId) return e.chainId === t;
                                    return e.metamaskNetworkId === n;
                                }),
                                (n.txParamsAreDappSuggested = function (e) {
                                    var t, n, r;
                                    const { gasPrice: a, maxPriorityFeePerGas: s, maxFeePerGas: o } = (null == e ? void 0 : e.txParams) || {};
                                    return (
                                        (a && a === (null == e || null === (t = e.dappSuggestedGasFees) || void 0 === t ? void 0 : t.gasPrice)) ||
                                        (s &&
                                            o &&
                                            (null == e || null === (n = e.dappSuggestedGasFees) || void 0 === n ? void 0 : n.maxPriorityFeePerGas) === s &&
                                            (null == e || null === (r = e.dappSuggestedGasFees) || void 0 === r ? void 0 : r.maxFeePerGas) === o)
                                    );
                                });
                            var r,
                                a = e("ethereumjs-util"),
                                s = e("ethers"),
                                o = e("@metamask/metamask-eth-abis"),
                                i = (r = e("loglevel")) && r.__esModule ? r : { default: r },
                                c = e("../constants/transaction"),
                                u = e("./contract-utils"),
                                l = e("./string-utils");
                            const d = new s.ethers.utils.Interface(o.abiERC20),
                                E = new s.ethers.utils.Interface(o.abiERC721),
                                T = new s.ethers.utils.Interface(o.abiERC1155);
                            function _(e) {
                                try {
                                    return d.parseTransaction({ data: e });
                                } catch {}
                                try {
                                    return E.parseTransaction({ data: e });
                                } catch {}
                                try {
                                    return T.parseTransaction({ data: e });
                                } catch {}
                                return undefined;
                            }
                            async function A(e, t) {
                                const { data: n, to: r } = e;
                                let a, s, o;
                                try {
                                    ({ name: a } = n && _(n));
                                } catch (e) {
                                    i.default.debug("Failed to parse transaction data.", e, n);
                                }
                                if (n && !r) s = c.TRANSACTION_TYPES.DEPLOY_CONTRACT;
                                else {
                                    const { contractCode: e, isContractAddress: i } = await (0, u.readAddressAsContract)(t, r);
                                    if (((o = e), i)) {
                                        const e = [
                                            c.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE,
                                            c.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL,
                                            c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER,
                                            c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM,
                                            c.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM,
                                        ].find((e) => (0, l.isEqualCaseInsensitive)(e, a));
                                        s = n && e ? e : c.TRANSACTION_TYPES.CONTRACT_INTERACTION;
                                    } else s = c.TRANSACTION_TYPES.SIMPLE_SEND;
                                }
                                return { type: s, getCodeResponse: o };
                            }
                            const S = [
                                c.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE,
                                c.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL,
                                c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER,
                                c.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM,
                                c.TRANSACTION_TYPES.CONTRACT_INTERACTION,
                                c.TRANSACTION_TYPES.SIMPLE_SEND,
                            ];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5364,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.getTranslatedUINotifications = n.UI_NOTIFICATIONS = void 0);
                            const r = {
                                1: { id: 1, date: "2021-03-17", image: { src: "images/mobile-link-qr.svg", height: "230px", width: "230px", placeImageBelowDescription: !0 } },
                                3: { id: 3, date: "2021-03-08" },
                                4: { id: 4, date: "2021-05-11", image: { src: "images/source-logos-bsc.svg", width: "100%" } },
                                5: { id: 5, date: "2021-06-09" },
                                6: { id: 6, date: "2021-05-26" },
                                7: { id: 7, date: "2021-09-17" },
                                8: { id: 8, date: "2021-11-01" },
                                9: { id: 9, date: "2021-12-07", image: { src: "images/txinsights.png", width: "80%" } },
                                10: { id: 10, date: "2022-09-15", image: { src: "images/token-detection.svg", width: "100%" } },
                                11: { id: 11, date: "2022-09-15" },
                                12: { id: 12, date: "2022-05-18", image: { src: "images/darkmode-banner.png", width: "100%" } },
                                13: { id: 13, date: "2022-09-15" },
                                14: { id: 14, date: "2022-09-15" },
                                15: { id: 15, date: "2022-09-15" },
                            };
                            n.UI_NOTIFICATIONS = r;
                            n.getTranslatedUINotifications = (e, t) => {
                                const n = t.replace("_", "-");
                                return {
                                    1: { ...r[1], title: e("notifications1Title"), description: e("notifications1Description"), date: new Intl.DateTimeFormat(n).format(new Date(r[1].date)) },
                                    3: { ...r[3], title: e("notifications3Title"), description: e("notifications3Description"), actionText: e("notifications3ActionText"), date: new Intl.DateTimeFormat(n).format(new Date(r[3].date)) },
                                    4: { ...r[4], title: e("notifications4Title"), description: e("notifications4Description"), actionText: e("notifications4ActionText"), date: new Intl.DateTimeFormat(n).format(new Date(r[4].date)) },
                                    5: { ...r[5], title: e("secretRecoveryPhrase"), description: e("notifications5Description"), actionText: e("notifications3ActionText"), date: new Intl.DateTimeFormat(n).format(new Date(r[5].date)) },
                                    6: {
                                        ...r[6],
                                        title: e("notifications6Title"),
                                        description: [e("notifications6DescriptionOne"), e("notifications6DescriptionTwo"), e("notifications6DescriptionThree")],
                                        date: new Intl.DateTimeFormat(n).format(new Date(r[6].date)),
                                    },
                                    7: { ...r[7], title: e("notifications7Title"), description: [e("notifications7DescriptionOne"), e("notifications7DescriptionTwo")], date: new Intl.DateTimeFormat(n).format(new Date(r[7].date)) },
                                    8: {
                                        ...r[8],
                                        title: e("notifications8Title"),
                                        description: [e("notifications8DescriptionOne"), e("notifications8DescriptionTwo")],
                                        date: new Intl.DateTimeFormat(n).format(new Date(r[8].date)),
                                        actionText: e("notifications8ActionText"),
                                    },
                                    9: { ...r[9], title: e("notifications9Title"), description: [e("notifications9DescriptionOne"), e("notifications9DescriptionTwo")], date: new Intl.DateTimeFormat(n).format(new Date(r[9].date)) },
                                    10: {
                                        ...r[10],
                                        title: e("notifications10Title"),
                                        description: [e("notifications10DescriptionOne"), e("notifications10DescriptionTwo"), e("notifications10DescriptionThree")],
                                        actionText: e("notifications10ActionText"),
                                        date: new Intl.DateTimeFormat(n).format(new Date(r[10].date)),
                                    },
                                    11: { ...r[11], title: e("notifications11Title"), description: e("notifications11Description"), date: new Intl.DateTimeFormat(n).format(new Date(r[11].date)) },
                                    12: { ...r[12], title: e("notifications12Title"), description: e("notifications12Description"), actionText: e("notifications12ActionText"), date: new Intl.DateTimeFormat(n).format(new Date(r[12].date)) },
                                    13: { ...r[13], title: e("notifications13Title"), description: e("notifications13Description"), actionText: e("notifications13ActionText"), date: new Intl.DateTimeFormat(n).format(new Date(r[13].date)) },
                                    14: {
                                        ...r[14],
                                        title: e("notifications14Title"),
                                        description: e("notifications14Description"),
                                        actionText: e("notifications14ActionText"),
                                        date: r[14].date ? new Intl.DateTimeFormat(n).format(new Date(r[14].date)) : "",
                                    },
                                    15: { ...r[15], title: e("notifications15Title"), description: e("notifications15Description"), date: r[15].date ? new Intl.DateTimeFormat(n).format(new Date(r[15].date)) : "" },
                                };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            58,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e) {
                                    if (e.includes(r)) {
                                        const t = e.slice(r.length);
                                        return t.slice(t.indexOf(a) + a.length);
                                    }
                                    return e;
                                });
                            const r = "Error: [ethjs-rpc] rpc error with payload ",
                                a = "Error: ";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5880,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.ALERT_STATE = void 0);
                            n.ALERT_STATE = { CLOSED: "CLOSED", ERROR: "ERROR", LOADING: "LOADING", OPEN: "OPEN" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5883,
            { "../../../shared/constants/alerts": 5327, "../../selectors": 6300, "../../store/actionConstants": 6306, "../../store/actions": 6307, "./enums": 5880, "@reduxjs/toolkit": 1220, "@sentry/browser": 1229 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.switchedToUnconnectedAccount = n.switchToAccount = n.getAlertState = n.dismissAndDisableAlert = n.dismissAlert = n.default = n.connectAccount = n.alertIsOpen = void 0);
                            var r = e("@reduxjs/toolkit"),
                                a = e("@sentry/browser"),
                                s = e("../../../shared/constants/alerts"),
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("../../store/actionConstants")),
                                i = e("../../store/actions"),
                                c = e("../../selectors"),
                                u = e("./enums");
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            const d = s.ALERT_TYPES.unconnectedAccount,
                                E = { state: u.ALERT_STATE.CLOSED },
                                T = (0, r.createSlice)({
                                    name: d,
                                    initialState: E,
                                    reducers: {
                                        connectAccountFailed: (e) => {
                                            e.state = u.ALERT_STATE.ERROR;
                                        },
                                        connectAccountRequested: (e) => {
                                            e.state = u.ALERT_STATE.LOADING;
                                        },
                                        connectAccountSucceeded: (e) => {
                                            e.state = u.ALERT_STATE.CLOSED;
                                        },
                                        disableAlertFailed: (e) => {
                                            e.state = u.ALERT_STATE.ERROR;
                                        },
                                        disableAlertRequested: (e) => {
                                            e.state = u.ALERT_STATE.LOADING;
                                        },
                                        disableAlertSucceeded: (e) => {
                                            e.state = u.ALERT_STATE.CLOSED;
                                        },
                                        dismissAlert: (e) => {
                                            e.state = u.ALERT_STATE.CLOSED;
                                        },
                                        switchAccountFailed: (e) => {
                                            e.state = u.ALERT_STATE.ERROR;
                                        },
                                        switchAccountRequested: (e) => {
                                            e.state = u.ALERT_STATE.LOADING;
                                        },
                                        switchAccountSucceeded: (e) => {
                                            e.state = u.ALERT_STATE.CLOSED;
                                        },
                                        switchedToUnconnectedAccount: (e) => {
                                            e.state = u.ALERT_STATE.OPEN;
                                        },
                                    },
                                    extraReducers: {
                                        [o.SELECTED_ADDRESS_CHANGED]: (e) => {
                                            e.state === u.ALERT_STATE.OPEN && (e.state = u.ALERT_STATE.CLOSED);
                                        },
                                    },
                                }),
                                { actions: _, reducer: A } = T;
                            var S = A;
                            n.default = S;
                            n.getAlertState = (e) => e[d].state;
                            n.alertIsOpen = (e) => e[d].state !== u.ALERT_STATE.CLOSED;
                            const {
                                connectAccountFailed: m,
                                connectAccountRequested: N,
                                connectAccountSucceeded: p,
                                disableAlertFailed: I,
                                disableAlertRequested: f,
                                disableAlertSucceeded: O,
                                dismissAlert: R,
                                switchAccountFailed: g,
                                switchAccountRequested: C,
                                switchAccountSucceeded: h,
                                switchedToUnconnectedAccount: P,
                            } = _;
                            (n.switchedToUnconnectedAccount = P), (n.dismissAlert = R);
                            n.dismissAndDisableAlert = () => async (e) => {
                                try {
                                    await e(f()), await (0, i.setAlertEnabledness)(d, !1), await e(O());
                                } catch (t) {
                                    console.error(t), (0, a.captureException)(t), await e(I());
                                }
                            };
                            n.switchToAccount = (e) => async (t) => {
                                try {
                                    await t(C()), await t((0, i.setSelectedAddress)(e)), await t(h());
                                } catch (e) {
                                    console.error(e), (0, a.captureException)(e), await t(g());
                                }
                            };
                            n.connectAccount = () => async (e, t) => {
                                const n = t(),
                                    r = (0, c.getSelectedAddress)(n),
                                    s = (0, c.getOriginOfCurrentTab)(n);
                                try {
                                    await e(N()), await e((0, i.addPermittedAccount)(s, r)), await e(p());
                                } catch (t) {
                                    console.error(t), (0, a.captureException)(t), await e(m());
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5884,
            { "../../../shared/constants/hardware-wallets": 5330, "../../store/actionConstants": 6306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e = {}, t) {
                                    const n = {
                                        shouldClose: !1,
                                        menuOpen: !1,
                                        modal: { open: !1, modalState: { name: null, props: {} }, previousModalState: { name: null } },
                                        alertOpen: !1,
                                        alertMessage: null,
                                        qrCodeData: null,
                                        networkDropdownOpen: !1,
                                        accountDetail: { subview: "transactions" },
                                        isLoading: !1,
                                        warning: null,
                                        buyView: {},
                                        isMouseUser: !1,
                                        defaultHdPaths: { trezor: "m/44'/60'/0'/0", ledger: "m/44'/60'/0'/0/0", lattice: "m/44'/60'/0'/0" },
                                        networksTabSelectedRpcUrl: "",
                                        loadingMethodData: !1,
                                        requestAccountTabs: {},
                                        openMetaMaskTabs: {},
                                        currentWindowTab: {},
                                        showWhatsNewPopup: !0,
                                        singleExceptions: { testKey: null },
                                        gasLoadingAnimationIsShowing: !1,
                                        smartTransactionsError: null,
                                        smartTransactionsErrorMessageDismissed: !1,
                                        ledgerWebHidConnectedStatus: r.WEBHID_CONNECTED_STATUSES.UNKNOWN,
                                        ledgerTransportStatus: r.TRANSPORT_STATES.NONE,
                                        newNetworkAdded: "",
                                        newCollectibleAddedMessage: "",
                                        portfolioTooltipWasShownInThisSession: !1,
                                        sendInputCurrencySwitched: !1,
                                        newTokensImported: "",
                                        newCustomNetworkAdded: {},
                                        onboardedInThisUISession: !1,
                                        customTokenAmount: "",
                                        ...e,
                                    };
                                    switch (t.type) {
                                        case a.NETWORK_DROPDOWN_OPEN:
                                            return { ...n, networkDropdownOpen: !0 };
                                        case a.NETWORK_DROPDOWN_CLOSE:
                                            return { ...n, networkDropdownOpen: !1 };
                                        case a.ALERT_OPEN:
                                            return { ...n, alertOpen: !0, alertMessage: t.value };
                                        case a.ALERT_CLOSE:
                                            return { ...n, alertOpen: !1, alertMessage: null };
                                        case a.QR_CODE_DETECTED:
                                            return { ...n, qrCodeData: t.value };
                                        case a.SET_SMART_TRANSACTIONS_ERROR:
                                            return { ...n, smartTransactionsError: t.payload };
                                        case a.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE:
                                            return { ...n, smartTransactionsErrorMessageDismissed: !0 };
                                        case a.MODAL_OPEN: {
                                            const { name: e, ...r } = t.payload;
                                            return { ...n, modal: { open: !0, modalState: { name: e, props: { ...r } }, previousModalState: { ...n.modal.modalState } } };
                                        }
                                        case a.MODAL_CLOSE:
                                            return { ...n, modal: Object.assign(n.modal, { open: !1 }, { modalState: { name: null, props: {} } }, { previousModalState: n.modal.modalState }) };
                                        case a.CLEAR_ACCOUNT_DETAILS:
                                            return { ...n, accountDetail: {} };
                                        case a.FORGOT_PASSWORD:
                                            return { ...n, forgottenPassword: t.value };
                                        case a.SHOW_SEND_TOKEN_PAGE:
                                        case a.LOCK_METAMASK:
                                            return { ...n, warning: null };
                                        case a.GO_HOME:
                                            return { ...n, accountDetail: { subview: "transactions", accountExport: "none", privateKey: "" }, warning: null };
                                        case a.SHOW_ACCOUNT_DETAIL:
                                            return { ...n, forgottenPassword: n.forgottenPassword ? !n.forgottenPassword : null, accountDetail: { subview: "transactions", accountExport: "none", privateKey: "" } };
                                        case a.SHOW_ACCOUNTS_PAGE:
                                            return { ...n, isLoading: !1, warning: null, scrollToBottom: !1, forgottenPassword: !1 };
                                        case a.SHOW_CONF_TX_PAGE:
                                            return { ...n, txId: t.id, warning: null, isLoading: !1 };
                                        case a.COMPLETED_TX:
                                            return t.value.unconfirmedActionsCount > 0 ? { ...n, txId: null, warning: null } : { ...n, shouldClose: !0, warning: null, txId: null, accountDetail: { subview: "transactions" } };
                                        case a.TRANSACTION_ERROR:
                                            return { ...n };
                                        case a.UNLOCK_FAILED:
                                            return { ...n, warning: t.value || "Incorrect password. Try again." };
                                        case a.UNLOCK_SUCCEEDED:
                                            return { ...n, warning: "" };
                                        case a.SET_HARDWARE_WALLET_DEFAULT_HD_PATH: {
                                            const { device: e, path: r } = t.value,
                                                a = { ...n.defaultHdPaths };
                                            return (a[e] = r), { ...n, defaultHdPaths: a };
                                        }
                                        case a.SHOW_LOADING:
                                            return { ...n, isLoading: !0, loadingMessage: t.value };
                                        case a.HIDE_LOADING:
                                            return { ...n, isLoading: !1 };
                                        case a.DISPLAY_WARNING:
                                            return { ...n, warning: t.value, isLoading: !1 };
                                        case a.HIDE_WARNING:
                                            return { ...n, warning: undefined };
                                        case a.SHOW_PRIVATE_KEY:
                                            return { ...n, accountDetail: { subview: "export", accountExport: "completed", privateKey: t.value } };
                                        case a.SET_MOUSE_USER_STATE:
                                            return { ...n, isMouseUser: t.value };
                                        case a.SET_SELECTED_SETTINGS_RPC_URL:
                                            return { ...n, networksTabSelectedRpcUrl: t.value };
                                        case a.SET_NEW_NETWORK_ADDED:
                                            return { ...n, newNetworkAdded: t.value };
                                        case a.SET_NEW_TOKENS_IMPORTED:
                                            return { ...n, newTokensImported: t.value };
                                        case a.SET_NEW_COLLECTIBLE_ADDED_MESSAGE:
                                            return { ...n, newCollectibleAddedMessage: t.value };
                                        case a.PORTFOLIO_TOOLTIP_WAS_SHOWN_IN_THIS_SESSION:
                                            return { ...n, portfolioTooltipWasShownInThisSession: !0 };
                                        case a.LOADING_METHOD_DATA_STARTED:
                                            return { ...n, loadingMethodData: !0 };
                                        case a.LOADING_METHOD_DATA_FINISHED:
                                            return { ...n, loadingMethodData: !1 };
                                        case a.SET_REQUEST_ACCOUNT_TABS:
                                            return { ...n, requestAccountTabs: t.value };
                                        case a.SET_OPEN_METAMASK_TAB_IDS:
                                            return { ...n, openMetaMaskTabs: t.value };
                                        case a.SET_CURRENT_WINDOW_TAB:
                                            return { ...n, currentWindowTab: t.value };
                                        case a.HIDE_WHATS_NEW_POPUP:
                                            return { ...n, showWhatsNewPopup: !1 };
                                        case a.CAPTURE_SINGLE_EXCEPTION:
                                            return { ...n, singleExceptions: { ...n.singleExceptions, [t.value]: null } };
                                        case a.TOGGLE_GAS_LOADING_ANIMATION:
                                            return { ...n, gasLoadingAnimationIsShowing: t.value };
                                        case a.SET_WEBHID_CONNECTED_STATUS:
                                            return { ...n, ledgerWebHidConnectedStatus: t.value };
                                        case a.SET_LEDGER_TRANSPORT_STATUS:
                                            return { ...n, ledgerTransportStatus: t.value };
                                        case a.TOGGLE_CURRENCY_INPUT_SWITCH:
                                            return { ...n, sendInputCurrencySwitched: !n.sendInputCurrencySwitched };
                                        case a.SET_NEW_CUSTOM_NETWORK_ADDED:
                                            return { ...n, newCustomNetworkAdded: t.value };
                                        case a.ONBOARDED_IN_THIS_UI_SESSION:
                                            return { ...n, onboardedInThisUISession: t.value };
                                        case a.SET_CUSTOM_TOKEN_AMOUNT:
                                            return { ...n, customTokenAmount: t.value };
                                        default:
                                            return n;
                                    }
                                }),
                                (n.getGasLoadingAnimationIsShowing = function (e) {
                                    return e.appState.gasLoadingAnimationIsShowing;
                                }),
                                (n.getLedgerTransportStatus = function (e) {
                                    return e.appState.ledgerTransportStatus;
                                }),
                                (n.getLedgerWebHidConnectedStatus = function (e) {
                                    return e.appState.ledgerWebHidConnectedStatus;
                                }),
                                (n.getPortfolioTooltipWasShownInThisSession = function (e) {
                                    return e.appState.portfolioTooltipWasShownInThisSession;
                                }),
                                (n.getQrCodeData = function (e) {
                                    return e.appState.qrCodeData;
                                }),
                                (n.hideWhatsNewPopup = function () {
                                    return { type: a.HIDE_WHATS_NEW_POPUP };
                                }),
                                (n.setCustomTokenAmount = function (e) {
                                    return { type: a.SET_CUSTOM_TOKEN_AMOUNT, value: e };
                                }),
                                (n.setLedgerTransportStatus = function (e) {
                                    return { type: a.SET_LEDGER_TRANSPORT_STATUS, value: e };
                                }),
                                (n.setLedgerWebHidConnectedStatus = function (e) {
                                    return { type: a.SET_WEBHID_CONNECTED_STATUS, value: e };
                                }),
                                (n.setNewCustomNetworkAdded = function (e) {
                                    return { type: a.SET_NEW_CUSTOM_NETWORK_ADDED, value: e };
                                }),
                                (n.setOnBoardedInThisUISession = function (e) {
                                    return { type: a.ONBOARDED_IN_THIS_UI_SESSION, value: e };
                                }),
                                (n.setPortfolioTooltipWasShownInThisSession = function () {
                                    return { type: a.PORTFOLIO_TOOLTIP_WAS_SHOWN_IN_THIS_SESSION };
                                }),
                                (n.toggleCurrencySwitch = function () {
                                    return { type: a.TOGGLE_CURRENCY_INPUT_SWITCH };
                                }),
                                (n.toggleGasLoadingAnimation = function (e) {
                                    return { type: a.TOGGLE_GAS_LOADING_ANIMATION, value: e };
                                });
                            var r = e("../../../shared/constants/hardware-wallets"),
                                a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = s(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("../../store/actionConstants"));
                            function s(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (s = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5886,
            {
                "../../shared/constants/network": 5333,
                "../../shared/modules/hexstring-utils": 5354,
                "../helpers/utils/util": 5937,
                "../pages/send/send.constants": 6175,
                "../selectors": 6300,
                "../store/actionConstants": 6306,
                "@reduxjs/toolkit": 1220,
                "ethereum-ens-network-map": 2086,
                "ethereumjs-util": 2107,
                ethers: 2131,
                loglevel: 4707,
                "unicode-confusables": 5171,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.ensInitialState = n.default = void 0),
                                (n.getEnsError = function (e) {
                                    return e.ENS.error;
                                }),
                                (n.getEnsResolution = function (e) {
                                    return e.ENS.resolution;
                                }),
                                (n.getEnsWarning = function (e) {
                                    return e.ENS.warning;
                                }),
                                (n.initializeEnsSlice = L),
                                (n.lookupEnsName = function (e) {
                                    return async (t, n) => {
                                        const r = e.trim();
                                        let s = n();
                                        if (
                                            ("UNINITIALIZED" === s.ENS.stage && (await t(L())),
                                            (s = n()),
                                            "NO_NETWORK_SUPPORT" !== s.ENS.stage || (!1 === (0, _.isBurnAddress)(r) && (0, _.isValidHexAddress)(r, { mixedCaseUseChecksum: !0 })) || (0, i.isHexString)(r))
                                        ) {
                                            let e, n;
                                            a.default.info(`ENS attempting to resolve name: ${r}`);
                                            try {
                                                var o;
                                                (null === (o = p.provider) || void 0 === o ? void 0 : o.writable) || (await t(L())), (e = await p.resolveName(r));
                                            } catch (e) {
                                                n = e;
                                            }
                                            const i = (0, u.getCurrentChainId)(s),
                                                c = l.CHAIN_ID_TO_NETWORK_ID_MAP[i];
                                            await t(C({ ensName: r, address: e, error: n, chainId: i, network: c }));
                                        } else await t(P());
                                    };
                                }),
                                (n.resetEnsResolution = void 0);
                            var r = e("@reduxjs/toolkit"),
                                a = A(e("loglevel")),
                                s = A(e("ethereum-ens-network-map")),
                                o = e("unicode-confusables"),
                                i = e("ethereumjs-util"),
                                c = e("ethers"),
                                u = e("../selectors"),
                                l = e("../../shared/constants/network"),
                                d = e("../pages/send/send.constants"),
                                E = e("../helpers/utils/util"),
                                T = e("../store/actionConstants"),
                                _ = e("../../shared/modules/hexstring-utils");
                            function A(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const S = { stage: "UNINITIALIZED", resolution: null, error: null, warning: null, network: null },
                                m = S;
                            n.ensInitialState = m;
                            const N = "ENS";
                            let p = null;
                            const I = (0, r.createSlice)({
                                    name: N,
                                    initialState: S,
                                    reducers: {
                                        ensLookup: (e, t) => {
                                            (e.resolution = null), (e.error = null), (e.warning = null);
                                            const { address: n, ensName: r, error: s, network: i } = t.payload;
                                            s
                                                ? (0, E.isValidDomainName)(r) && "ENS name not defined." === s.message
                                                    ? (e.error = i === l.NETWORK_IDS.MAINNET ? d.ENS_NO_ADDRESS_FOR_NAME : d.ENS_NOT_FOUND_ON_NETWORK)
                                                    : "Illegal character for ENS." === s.message
                                                    ? (e.error = d.ENS_ILLEGAL_CHARACTER)
                                                    : (a.default.error(s), (e.error = d.ENS_UNKNOWN_ERROR))
                                                : n
                                                ? (n === _.BURN_ADDRESS ? (e.error = d.ENS_NO_ADDRESS_FOR_NAME) : "0x" === n ? (e.error = d.ENS_REGISTRATION_ERROR) : (e.resolution = n),
                                                  (0, E.isValidDomainName)(n) && (0, o.isConfusing)(n) && (e.warning = d.CONFUSING_ENS_ERROR))
                                                : (e.error = d.ENS_NO_ADDRESS_FOR_NAME);
                                        },
                                        enableEnsLookup: (e, t) => {
                                            (e.stage = "INITIALIZED"), (e.error = null), (e.resolution = null), (e.warning = null), (e.network = t.payload);
                                        },
                                        disableEnsLookup: (e) => {
                                            (e.stage = "NO_NETWORK_SUPPORT"), (e.error = null), (e.warning = null), (e.resolution = null), (e.network = null);
                                        },
                                        ensNotSupported: (e) => {
                                            (e.resolution = null), (e.warning = null), (e.error = d.ENS_NOT_SUPPORTED_ON_NETWORK);
                                        },
                                        resetEnsResolution: (e) => {
                                            (e.resolution = null), (e.warning = null), (e.error = null);
                                        },
                                    },
                                    extraReducers: (e) => {
                                        e.addCase(T.CHAIN_CHANGED, (e, t) => {
                                            t.payload !== e.currentChainId && ((e.stage = "UNINITIALIZED"), (p = null));
                                        });
                                    },
                                }),
                                { reducer: f, actions: O } = I;
                            var R = f;
                            n.default = R;
                            const { disableEnsLookup: g, ensLookup: C, enableEnsLookup: h, ensNotSupported: P, resetEnsResolution: D } = O;
                            function L() {
                                return (e, t) => {
                                    const n = t(),
                                        r = (0, u.getCurrentChainId)(n),
                                        a = l.CHAIN_ID_TO_NETWORK_ID_MAP[r],
                                        o = l.NETWORK_ID_TO_ETHERS_NETWORK_NAME_MAP[a],
                                        i = s.default[a];
                                    Boolean(i) ? ((p = new c.ethers.providers.Web3Provider(global.ethereumProvider, { chainId: parseInt(a, 10), name: o, ensAddress: i })), e(h(a))) : ((p = null), e(g()));
                                };
                            }
                            n.resetEnsResolution = D;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5887,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.SET_CUSTOM_GAS_PRICE = n.SET_CUSTOM_GAS_LIMIT = n.RESET_CUSTOM_DATA = void 0);
                            n.RESET_CUSTOM_DATA = "metamask/gas/RESET_CUSTOM_DATA";
                            n.SET_CUSTOM_GAS_LIMIT = "metamask/gas/SET_CUSTOM_GAS_LIMIT";
                            n.SET_CUSTOM_GAS_PRICE = "metamask/gas/SET_CUSTOM_GAS_PRICE";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5888,
            { "./gas-action-constants": 5887, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e = s, t) {
                                    switch (t.type) {
                                        case a.SET_CUSTOM_GAS_PRICE:
                                            return { ...e, customData: { ...e.customData, price: t.value } };
                                        case a.SET_CUSTOM_GAS_LIMIT:
                                            return { ...e, customData: { ...e.customData, limit: t.value } };
                                        case a.RESET_CUSTOM_DATA:
                                            return { ...e, customData: (0, r.cloneDeep)(s.customData) };
                                        default:
                                            return e;
                                    }
                                }),
                                (n.setCustomGasLimit = function (e) {
                                    return { type: a.SET_CUSTOM_GAS_LIMIT, value: e };
                                }),
                                (n.setCustomGasPrice = function (e) {
                                    return { type: a.SET_CUSTOM_GAS_PRICE, value: e };
                                });
                            var r = e("lodash"),
                                a = e("./gas-action-constants");
                            const s = { customData: { price: null, limit: null } };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5892,
            {
                "../../../shared/constants/alerts": 5327,
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/hardware-wallets": 5330,
                "../../../shared/constants/network": 5333,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/string-utils": 5361,
                "../../helpers/utils/conversions.util": 5920,
                "../../selectors": 6300,
                "../../store/actionConstants": 6306,
                "../../store/actions": 6307,
                "../gas/gas.duck": 5888,
                "ethereumjs-util": 2107,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e = {}, t) {
                                    const n = {
                                        isInitialized: !1,
                                        isUnlocked: !1,
                                        isAccountMenuOpen: !1,
                                        identities: {},
                                        unapprovedTxs: {},
                                        frequentRpcList: [],
                                        addressBook: [],
                                        contractExchangeRates: {},
                                        pendingTokens: {},
                                        customNonceValue: "",
                                        useBlockie: !1,
                                        featureFlags: {},
                                        welcomeScreenSeen: !1,
                                        currentLocale: "",
                                        currentBlockGasLimit: "",
                                        preferences: { autoLockTimeLimit: undefined, showFiatInTestnets: !1, showTestNetworks: !1, useNativeCurrencyAsPrimaryCurrency: !0 },
                                        firstTimeFlowType: null,
                                        completedOnboarding: !1,
                                        knownMethodData: {},
                                        participateInMetaMetrics: null,
                                        nextNonce: null,
                                        conversionRate: null,
                                        nativeCurrency: "ETH",
                                        ...e,
                                    };
                                    switch (t.type) {
                                        case a.UPDATE_METAMASK_STATE:
                                            return { ...n, ...t.value };
                                        case a.LOCK_METAMASK:
                                            return { ...n, isUnlocked: !1 };
                                        case a.SET_RPC_TARGET:
                                            return { ...n, provider: { type: i.NETWORK_TYPES.RPC, rpcUrl: t.value } };
                                        case a.SET_PROVIDER_TYPE:
                                            return { ...n, provider: { type: t.value } };
                                        case a.SHOW_ACCOUNT_DETAIL:
                                            return { ...n, isUnlocked: !0, isInitialized: !0, selectedAddress: t.value };
                                        case a.SET_ACCOUNT_LABEL: {
                                            const { account: e } = t.value,
                                                r = t.value.label,
                                                a = {};
                                            a[e] = { ...n.identities[e], name: r };
                                            const s = { ...n.identities, ...a };
                                            return Object.assign(n, { identities: s });
                                        }
                                        case a.UPDATE_CUSTOM_NONCE:
                                            return { ...n, customNonceValue: t.value };
                                        case a.TOGGLE_ACCOUNT_MENU:
                                            return { ...n, isAccountMenuOpen: !n.isAccountMenuOpen };
                                        case a.UPDATE_TRANSACTION_PARAMS: {
                                            const { id: e, value: r } = t;
                                            let { currentNetworkTxList: a } = n;
                                            return (
                                                (a = a.map((t) => {
                                                    if (t.id === e) {
                                                        const e = { ...t };
                                                        return (e.txParams = r), e;
                                                    }
                                                    return t;
                                                })),
                                                { ...n, currentNetworkTxList: a }
                                            );
                                        }
                                        case a.SET_PARTICIPATE_IN_METAMETRICS:
                                            return { ...n, participateInMetaMetrics: t.value };
                                        case a.SET_USE_BLOCKIE:
                                            return { ...n, useBlockie: t.value };
                                        case a.UPDATE_FEATURE_FLAGS:
                                            return { ...n, featureFlags: t.value };
                                        case a.CLOSE_WELCOME_SCREEN:
                                            return { ...n, welcomeScreenSeen: !0 };
                                        case a.SET_CURRENT_LOCALE:
                                            return { ...n, currentLocale: t.value.locale };
                                        case a.SET_PENDING_TOKENS:
                                            return { ...n, pendingTokens: { ...t.payload } };
                                        case a.CLEAR_PENDING_TOKENS:
                                            return { ...n, pendingTokens: {} };
                                        case a.UPDATE_PREFERENCES:
                                            return { ...n, preferences: { ...n.preferences, ...t.payload } };
                                        case a.COMPLETE_ONBOARDING:
                                            return { ...n, completedOnboarding: !0 };
                                        case a.SET_FIRST_TIME_FLOW_TYPE:
                                            return { ...n, firstTimeFlowType: t.value };
                                        case a.SET_NEXT_NONCE:
                                            return { ...n, nextNonce: t.value };
                                        default:
                                            return n;
                                    }
                                }),
                                (n.doesUserHaveALedgerAccount = function (e) {
                                    return e.metamask.keyrings.some((e) => e.type === E.KEYRING_TYPES.LEDGER);
                                }),
                                (n.findKeyringForAddress = I),
                                (n.getAlertEnabledness = void 0),
                                (n.getBlockGasLimit = function (e) {
                                    return e.metamask.currentBlockGasLimit;
                                }),
                                (n.getCollectibles = n.getCollectibleContracts = void 0),
                                (n.getCollectiblesDetectionNoticeDismissed = function (e) {
                                    return e.metamask.collectiblesDetectionNoticeDismissed;
                                }),
                                (n.getCollectiblesDropdownState = function (e) {
                                    return e.metamask.collectiblesDropdownState;
                                }),
                                (n.getCompletedOnboarding = function (e) {
                                    return e.metamask.completedOnboarding;
                                }),
                                (n.getConversionRate = function (e) {
                                    return e.metamask.conversionRate;
                                }),
                                (n.getCurrentLocale = void 0),
                                (n.getEnableEIP1559V2NoticeDismissed = function (e) {
                                    return e.metamask.enableEIP1559V2NoticeDismissed;
                                }),
                                (n.getEstimatedGasFeeTimeBounds = function (e) {
                                    return e.metamask.estimatedGasFeeTimeBounds;
                                }),
                                (n.getGasEstimateType = N),
                                (n.getGasFeeEstimates = p),
                                (n.getIsGasEstimatesLoading = function (e) {
                                    const t = (0, c.checkNetworkAndAccountSupports1559)(e),
                                        n = N(e),
                                        r = n === o.GAS_ESTIMATE_TYPES.FEE_MARKET || n === o.GAS_ESTIMATE_TYPES.ETH_GASPRICE;
                                    return n === o.GAS_ESTIMATE_TYPES.NONE || (t && !r) || (!t && n === o.GAS_ESTIMATE_TYPES.FEE_MARKET);
                                }),
                                (n.getIsInitialized = function (e) {
                                    return e.metamask.isInitialized;
                                }),
                                (n.getIsNetworkBusy = function (e) {
                                    const t = p(e);
                                    return (null == t ? void 0 : t.networkCongestion) >= o.NETWORK_CONGESTION_THRESHOLDS.BUSY;
                                }),
                                (n.getIsUnlocked = function (e) {
                                    return e.metamask.isUnlocked;
                                }),
                                (n.getLedgerTransportType = function (e) {
                                    return e.metamask.ledgerTransportType;
                                }),
                                (n.getNativeCurrency = function (e) {
                                    return e.metamask.nativeCurrency;
                                }),
                                (n.getPendingTokens = void 0),
                                (n.getSeedPhraseBackedUp = function (e) {
                                    return e.metamask.seedPhraseBackedUp;
                                }),
                                (n.getSendHexDataFeatureFlagState = function (e) {
                                    return e.metamask.featureFlags.sendHexData;
                                }),
                                (n.getSendToAccounts = function (e) {
                                    const t = (0, c.accountsWithSendEtherInfoSelector)(e),
                                        n = (0, c.getAddressBook)(e);
                                    return [...t, ...n];
                                }),
                                (n.getTokens = void 0),
                                (n.getUnapprovedTxs = function (e) {
                                    return e.metamask.unapprovedTxs;
                                }),
                                (n.getWeb3ShimUsageAlertEnabledness = n.getUnconnectedAccountAlertShown = n.getUnconnectedAccountAlertEnabledness = void 0),
                                (n.isAddressLedger = function (e, t) {
                                    const n = I(e, t);
                                    return (null == n ? void 0 : n.type) === E.KEYRING_TYPES.LEDGER;
                                }),
                                (n.isEIP1559Network = function (e) {
                                    var t;
                                    return !0 === (null === (t = e.metamask.networkDetails) || void 0 === t ? void 0 : t.EIPS[1559]);
                                }),
                                (n.isNotEIP1559Network = function (e) {
                                    var t;
                                    return !1 === (null === (t = e.metamask.networkDetails) || void 0 === t ? void 0 : t.EIPS[1559]);
                                }),
                                (n.updateGasFees = function ({ gasPrice: e, gasLimit: t, maxPriorityFeePerGas: n, maxFeePerGas: a, transaction: s, expectHexWei: o = !1 }) {
                                    return async (i) => {
                                        const c = { ...s.txParams, gas: t };
                                        e ? (i((0, l.setCustomGasPrice)(S(c.gasPrice, o))), (c.gasPrice = S(e, o))) : a && n && ((c.maxFeePerGas = S(a, o)), (c.maxPriorityFeePerGas = (0, r.addHexPrefix)((0, d.decGWEIToHexWEI)(n))));
                                        const E = { ...s, txParams: c },
                                            T = (0, r.isHexString)((0, r.addHexPrefix)(t)) ? (0, r.addHexPrefix)(t) : (0, r.addHexPrefix)(t.toString(16));
                                        i((0, l.setCustomGasLimit)(T)), await i((0, u.updateTransactionGasFees)(E.id, E));
                                    };
                                });
                            var r = e("ethereumjs-util"),
                                a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = A(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("../../store/actionConstants")),
                                s = e("../../../shared/constants/alerts"),
                                o = e("../../../shared/constants/gas"),
                                i = e("../../../shared/constants/network"),
                                c = e("../../selectors"),
                                u = e("../../store/actions"),
                                l = e("../gas/gas.duck"),
                                d = e("../../helpers/utils/conversions.util"),
                                E = e("../../../shared/constants/hardware-wallets"),
                                T = e("../../../shared/modules/string-utils"),
                                _ = e("../../../shared/modules/hexstring-utils");
                            function A(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (A = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            const S = (e, t) => (0, r.addHexPrefix)(t ? e : (0, d.decGWEIToHexWEI)(e));
                            n.getCurrentLocale = (e) => e.metamask.currentLocale;
                            const m = (e) => e.metamask.alertEnabledness;
                            n.getAlertEnabledness = m;
                            n.getUnconnectedAccountAlertEnabledness = (e) => m(e)[s.ALERT_TYPES.unconnectedAccount];
                            n.getWeb3ShimUsageAlertEnabledness = (e) => m(e)[s.ALERT_TYPES.web3ShimUsage];
                            n.getUnconnectedAccountAlertShown = (e) => e.metamask.unconnectedAccountAlertShownOrigins;
                            n.getPendingTokens = (e) => e.metamask.pendingTokens;
                            n.getTokens = (e) => e.metamask.tokens;
                            n.getCollectibles = (e) => {
                                var t, n;
                                const {
                                    metamask: {
                                        allCollectibles: r,
                                        provider: { chainId: a },
                                        selectedAddress: s,
                                    },
                                } = e;
                                return null !== (t = null == r || null === (n = r[s]) || void 0 === n ? void 0 : n[a]) && void 0 !== t ? t : [];
                            };
                            function N(e) {
                                return e.metamask.gasEstimateType;
                            }
                            function p(e) {
                                return e.metamask.gasFeeEstimates;
                            }
                            function I(e, t) {
                                return e.metamask.keyrings.find((e) => e.accounts.some((e) => (0, T.isEqualCaseInsensitive)(e, (0, r.addHexPrefix)(t)) || (0, T.isEqualCaseInsensitive)(e, (0, _.stripHexPrefix)(t))));
                            }
                            n.getCollectibleContracts = (e) => {
                                var t, n;
                                const {
                                    metamask: {
                                        allCollectibleContracts: r,
                                        provider: { chainId: a },
                                        selectedAddress: s,
                                    },
                                } = e;
                                return null !== (t = null == r || null === (n = r[s]) || void 0 === n ? void 0 : n[a]) && void 0 !== t ? t : [];
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5893,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/network": 5333,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/contract-utils": 5350,
                "../../../shared/modules/conversion.utils": 5351,
                "../../helpers/constants/common": 5898,
                "../../pages/send/send.utils": 6177,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "ethereumjs-util": 2107,
                "human-standard-token-abi": 4452,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.estimateGasLimitForSend = async function ({ selectedAddress: e, value: t, gasPrice: n, sendToken: r, to: s, data: i, isNonStandardEthChain: u, chainId: E, gasLimit: _, ...S }) {
                                    let m = !1,
                                        N = o.MIN_GAS_LIMIT_HEX;
                                    S.blockGasLimit ? (N = S.blockGasLimit) : r && (N = o.GAS_LIMITS.BASE_TOKEN_ESTIMATE);
                                    const p = { from: e, value: t, gasPrice: n };
                                    if (r) {
                                        if (!s) return o.GAS_LIMITS.BASE_TOKEN_ESTIMATE;
                                        (p.value = "0x0"), (p.data = (0, T.getAssetTransferData)({ sendToken: r, fromAddress: e, toAddress: s, amount: t })), (p.to = r.address);
                                    } else {
                                        if (!i) {
                                            const { isContractAddress: e } = s ? await (0, l.readAddressAsContract)(global.eth, s) : {};
                                            if (!e && !u) return o.GAS_LIMITS.SIMPLE;
                                            !e && u && (m = !0);
                                        }
                                        (p.data = i), s && (p.to = s), (t && "0" !== t) || (p.value = "0xff");
                                    }
                                    m || (p.gas = (0, a.addHexPrefix)((0, d.multiplyCurrencies)(N, 0.95, { multiplicandBase: 16, multiplierBase: 10, roundDown: "0", toNumericBase: "hex" })));
                                    let I = 1.5;
                                    m ? (I = 1) : c.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[E] && (I = c.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[E]);
                                    try {
                                        const e = await (0, A.estimateGas)(p),
                                            t = (0, T.addGasBuffer)(e, N, I);
                                        return (0, a.addHexPrefix)(t);
                                    } catch (e) {
                                        if (
                                            e.message.includes("Transaction execution error.") ||
                                            e.message.includes("gas required exceeds allowance or always failing transaction") ||
                                            (c.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[E] && e.message.includes("gas required exceeds allowance"))
                                        ) {
                                            var f;
                                            const e = (0, T.addGasBuffer)(null !== (f = null == p ? void 0 : p.gas) && void 0 !== f ? f : _, N, I);
                                            return (0, a.addHexPrefix)(e);
                                        }
                                        throw e;
                                    }
                                }),
                                (n.generateTransactionParams = function (e) {
                                    var t, n, r, a;
                                    const s = e.draftTransactions[e.currentTransactionUUID],
                                        o = { from: (null === (t = s.fromAccount) || void 0 === t ? void 0 : t.address) || e.selectedAccount.address, gas: s.gas.gasLimit };
                                    switch (s.asset.type) {
                                        case u.ASSET_TYPES.TOKEN:
                                            (o.to = s.asset.details.address), (o.value = "0x0"), (o.data = (0, T.generateERC20TransferData)({ toAddress: s.recipient.address, amount: s.amount.value, sendToken: s.asset.details }));
                                            break;
                                        case u.ASSET_TYPES.COLLECTIBLE:
                                            (o.to = s.asset.details.address),
                                                (o.value = "0x0"),
                                                (o.data = (0, T.generateERC721TransferData)({
                                                    toAddress: s.recipient.address,
                                                    fromAddress: null !== (n = null === (r = s.fromAccount) || void 0 === r ? void 0 : r.address) && void 0 !== n ? n : e.selectedAccount.address,
                                                    tokenId: s.asset.details.tokenId,
                                                }));
                                            break;
                                        case u.ASSET_TYPES.NATIVE:
                                        default:
                                            (o.to = s.recipient.address), (o.value = s.amount.value), (o.data = null !== (a = s.userInputHexData) && void 0 !== a ? a : undefined);
                                    }
                                    e.eip1559support
                                        ? ((o.type = u.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET),
                                          (o.maxFeePerGas = s.gas.maxFeePerGas),
                                          (o.maxPriorityFeePerGas = s.gas.maxPriorityFeePerGas),
                                          (o.maxFeePerGas && "0x0" !== o.maxFeePerGas) || (o.maxFeePerGas = s.gas.gasPrice),
                                          (o.maxPriorityFeePerGas && "0x0" !== o.maxPriorityFeePerGas) || (o.maxPriorityFeePerGas = o.maxFeePerGas))
                                        : ((o.gasPrice = s.gas.gasPrice), (o.type = u.TRANSACTION_ENVELOPE_TYPES.LEGACY));
                                    return o;
                                }),
                                (n.getERC20Balance = async function (e, t) {
                                    var n;
                                    const r = global.eth.contract(s.default).at(e.address),
                                        o = null !== (n = await r.balanceOf(t)) && void 0 !== n ? n : null;
                                    if (!o) return "0x0";
                                    const c = (0, i.calcTokenAmount)(o.balance.toString(), e.decimals).toString(16);
                                    return (0, a.addHexPrefix)(c);
                                }),
                                (n.getRoundedGasPrice = function (e) {
                                    const t = (0, d.conversionUtil)(e, { numberOfDecimals: 9, toDenomination: E.GWEI, fromNumericBase: "dec", toNumericBase: "dec", fromCurrency: E.ETH, fromDenomination: E.GWEI }),
                                        n = Number(t);
                                    return (0, _.getGasPriceInHexWei)(n);
                                });
                            var r,
                                a = e("ethereumjs-util"),
                                s = (r = e("human-standard-token-abi")) && r.__esModule ? r : { default: r },
                                o = e("../../../shared/constants/gas"),
                                i = e("../../../shared/lib/transactions-controller-utils"),
                                c = e("../../../shared/constants/network"),
                                u = e("../../../shared/constants/transaction"),
                                l = e("../../../shared/modules/contract-utils"),
                                d = e("../../../shared/modules/conversion.utils"),
                                E = e("../../helpers/constants/common"),
                                T = e("../../pages/send/send.utils"),
                                _ = e("../../selectors"),
                                A = e("../../store/actions");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5894,
            { "./send": 5895 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 });
                            var r = e("./send");
                            Object.keys(r).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === r[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return r[e];
                                            },
                                        }));
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5895,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/metamask-controller-utils": 5343,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/string-utils": 5361,
                "../../../shared/modules/transaction.utils": 5363,
                "../../helpers/constants/common": 5898,
                "../../helpers/constants/error-keys": 5901,
                "../../helpers/utils/confirm-tx.util": 5919,
                "../../helpers/utils/optimism/fetchEstimatedL1Fee": 5931,
                "../../helpers/utils/token-util": 5934,
                "../../helpers/utils/transactions.util": 5935,
                "../../helpers/utils/util": 5937,
                "../../pages/send/send.constants": 6175,
                "../../pages/send/send.utils": 6177,
                "../../selectors": 6300,
                "../../store/actionConstants": 6306,
                "../../store/actions": 6307,
                "../ens": 5886,
                "../gas/gas.duck": 5888,
                "../metamask/metamask": 5892,
                "./helpers": 5893,
                "@reduxjs/toolkit": 1220,
                "bignumber.js": 1637,
                "ethereumjs-util": 2107,
                lodash: 4694,
                uuid: 5178,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.draftTransactionInitialState = n.default = n.computeEstimatedGasLimit = n.addHistoryEntry = n.acknowledgeRecipientWarning = n.SEND_STATUSES = n.SEND_STAGES = n.RECIPIENT_SEARCH_MODES = n.GAS_INPUT_MODES = n.AMOUNT_MODES = void 0),
                                (n.editExistingTransaction = function (e, t) {
                                    return async (n, r) => {
                                        await n(Y.clearPreviousDrafts());
                                        const a = r(),
                                            o = (0, N.getUnapprovedTxs)(a)[t],
                                            i = (0, E.getTargetAccount)(a, o.txParams.from);
                                        if (e === g.ASSET_TYPES.NATIVE) {
                                            var u;
                                            await n(
                                                Y.addNewDraft({
                                                    ...x,
                                                    id: t,
                                                    fromAccount: i,
                                                    gas: { ...x.gas, gasLimit: o.txParams.gas, gasPrice: o.txParams.gasPrice },
                                                    userInputHexData: o.txParams.data,
                                                    recipient: { ...x.recipient, address: o.txParams.to, nickname: null !== (u = (0, E.getAddressBookEntryOrAccountName)(a, o.txParams.to)) && void 0 !== u ? u : "" },
                                                    amount: { ...x.amount, value: o.txParams.value },
                                                    history: [`sendFlow - user clicked edit on transaction with id ${t}`],
                                                })
                                            ),
                                                await n(ne({ type: g.ASSET_TYPES.NATIVE }, { initialAssetSet: !0 }));
                                        } else {
                                            var l, d;
                                            const r = (0, P.parseStandardTokenTransactionData)(o.txParams.data),
                                                u = e === g.ASSET_TYPES.TOKEN ? (0, D.getTokenValueParam)(r) : "1",
                                                T = (0, S.getTokenAddressParam)(r),
                                                _ = null !== (l = (0, E.getAddressBookEntryOrAccountName)(a, T)) && void 0 !== l ? l : "",
                                                A = (0, s.addHexPrefix)((0, c.conversionUtil)(u, { fromNumericBase: "dec", toNumericBase: "hex" }));
                                            await n(
                                                Y.addNewDraft({
                                                    ...x,
                                                    id: t,
                                                    fromAccount: i,
                                                    gas: { ...x.gas, gasLimit: o.txParams.gas, gasPrice: o.txParams.gasPrice },
                                                    userInputHexData: o.txParams.data,
                                                    recipient: { ...x.recipient, address: T, nickname: _ },
                                                    amount: { ...x.amount, value: A },
                                                    history: [`sendFlow - user clicked edit on transaction with id ${t}`],
                                                })
                                            ),
                                                await n(
                                                    ne(
                                                        {
                                                            type: e,
                                                            details: {
                                                                address: o.txParams.to,
                                                                ...(e === g.ASSET_TYPES.COLLECTIBLE ? { tokenId: null !== (d = (0, S.getTokenIdParam)(r)) && void 0 !== d ? d : (0, D.getTokenValueParam)(r) } : {}),
                                                            },
                                                        },
                                                        { initialAssetSet: !0 }
                                                    )
                                                );
                                        }
                                        await n(B());
                                    };
                                }),
                                (n.gasFeeIsInError = function (e) {
                                    var t;
                                    return Boolean(null === (t = ae(e).gas) || void 0 === t ? void 0 : t.error);
                                }),
                                (n.getAssetError = function (e) {
                                    return se(e).error;
                                }),
                                (n.getCurrentDraftTransaction = ae),
                                (n.getCurrentTransactionUUID = re),
                                (n.getDraftTransactionExists = function (e) {
                                    const t = ae(e);
                                    if (0 === Object.keys(t).length) return !1;
                                    return !0;
                                }),
                                (n.getDraftTransactionID = function (e) {
                                    return ae(e).id;
                                }),
                                (n.getGasInputMode = function (e) {
                                    const t = (0, E.getIsMainnet)(e),
                                        n = (0, N.getGasEstimateType)(e),
                                        r = (0, E.getAdvancedInlineGasShown)(e);
                                    if (e.send.gasIsSetInModal) return w.CUSTOM;
                                    if (!t || r) return w.INLINE;
                                    if (t && n === u.GAS_ESTIMATE_TYPES.ETH_GASPRICE) return w.INLINE;
                                    return w.BASIC;
                                }),
                                (n.getGasLimit = function (e) {
                                    var t;
                                    return null === (t = ae(e).gas) || void 0 === t ? void 0 : t.gasLimit;
                                }),
                                (n.getGasPrice = function (e) {
                                    var t;
                                    return null === (t = ae(e).gas) || void 0 === t ? void 0 : t.gasPrice;
                                }),
                                (n.getGasTotal = function (e) {
                                    var t;
                                    return null === (t = ae(e).gas) || void 0 === t ? void 0 : t.gasTotal;
                                }),
                                (n.getIsAssetSendable = function (e) {
                                    var t, n, r;
                                    if ((null === (t = se(e)) || void 0 === t ? void 0 : t.type) === g.ASSET_TYPES.NATIVE) return !0;
                                    return !1 === (null === (n = se(e)) || void 0 === n || null === (r = n.details) || void 0 === r ? void 0 : r.isERC721);
                                }),
                                (n.getIsBalanceInsufficient = function (e) {
                                    var t;
                                    return (null === (t = ae(e).gas) || void 0 === t ? void 0 : t.error) === l.INSUFFICIENT_FUNDS_ERROR;
                                }),
                                (n.getIsUsingMyAccountForRecipientSearch = function (e) {
                                    return e.send.recipientMode === k.MY_ACCOUNTS;
                                }),
                                (n.getMinimumGasLimitForSend = function (e) {
                                    return e.send.gasLimitMinimum;
                                }),
                                (n.getRecipient = oe),
                                (n.getRecipientUserInput = function (e) {
                                    return e.send.recipientInput;
                                }),
                                (n.getRecipientWarningAcknowledgement = function (e) {
                                    var t, n;
                                    return null !== (t = null === (n = ae(e).recipient) || void 0 === n ? void 0 : n.recipientWarningAcknowledged) && void 0 !== t && t;
                                }),
                                (n.getSendAmount = function (e) {
                                    var t;
                                    return null === (t = ae(e).amount) || void 0 === t ? void 0 : t.value;
                                }),
                                (n.getSendAsset = se),
                                (n.getSendAssetAddress = function (e) {
                                    var t, n;
                                    return null === (t = se(e)) || void 0 === t || null === (n = t.details) || void 0 === n ? void 0 : n.address;
                                }),
                                (n.getSendErrors = function (e) {
                                    var t, n;
                                    return { gasFee: null === (t = ae(e).gas) || void 0 === t ? void 0 : t.error, amount: null === (n = ae(e).amount) || void 0 === n ? void 0 : n.error };
                                }),
                                (n.getSendHexData = function (e) {
                                    return ae(e).userInputHexData;
                                }),
                                (n.getSendMaxModeState = function (e) {
                                    return e.send.amountMode === b.MAX;
                                }),
                                (n.getSendStage = function (e) {
                                    return e.send.stage;
                                }),
                                (n.getSendTo = function (e) {
                                    var t;
                                    return null === (t = oe(e)) || void 0 === t ? void 0 : t.address;
                                }),
                                (n.initializeSendState = n.initialState = void 0),
                                (n.isSendFormInvalid = function (e) {
                                    const t = ae(e);
                                    if (!t) return !0;
                                    return t.status === U.INVALID;
                                }),
                                (n.isSendStateInitialized = function (e) {
                                    return e.send.stage !== M.INACTIVE;
                                }),
                                (n.resetRecipientInput = function () {
                                    return async (e, t) => {
                                        const n = t(),
                                            r = (0, E.getCurrentChainId)(n);
                                        await e(Q("sendFlow - user cleared recipient input")), await e(te("")), await e(ee({ address: "", nickname: "" })), await e((0, p.resetEnsResolution)()), await e(q({ chainId: r }));
                                    };
                                }),
                                (n.resetSendState = function () {
                                    return async (e, t) => {
                                        const n = t();
                                        e(Y.resetSendState()), n.send.gasEstimatePollToken && (await (0, T.disconnectGasFeeEstimatePoller)(n.send.gasEstimatePollToken), (0, T.removePollingTokenFromAppState)(n.send.gasEstimatePollToken));
                                    };
                                }),
                                (n.sendAmountIsInError = function (e) {
                                    var t;
                                    return Boolean(null === (t = ae(e).amount) || void 0 === t ? void 0 : t.error);
                                }),
                                (n.signTransaction = function () {
                                    return async (e, t) => {
                                        const n = t(),
                                            { stage: r, eip1559support: a } = n.send,
                                            s = (0, v.generateTransactionParams)(n.send),
                                            o = n.send.draftTransactions[n.send.currentTransactionUUID];
                                        if (r === M.EDIT) {
                                            var i;
                                            const t = (0, N.getUnapprovedTxs)(n)[o.id],
                                                r = { data: s.data, from: s.from, to: s.to, value: s.value, gas: t.userEditedGasLimit ? t.txParams.gas : s.gas };
                                            t.originalGasEstimate = r.gas;
                                            const c = { ...t, txParams: Object.assign(t.txParams, a ? r : s) };
                                            await e(Q("sendFlow - user clicked next and transaction should be updated in controller")),
                                                await e((0, T.updateTransactionSendFlowHistory)(o.id, (null === (i = t.sendFlowHistory) || void 0 === i ? void 0 : i.length) || 0, o.history)),
                                                await e((0, T.updateEditableParams)(o.id, c.txParams)),
                                                await e((0, T.updateTransactionGasFees)(o.id, c.txParams));
                                        } else {
                                            let t = o.recipient.type === l.RECIPIENT_TYPES.SMART_CONTRACT ? g.TRANSACTION_TYPES.CONTRACT_INTERACTION : g.TRANSACTION_TYPES.SIMPLE_SEND;
                                            o.asset.type !== g.ASSET_TYPES.NATIVE && (t = o.asset.type === g.ASSET_TYPES.COLLECTIBLE ? g.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM : g.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER),
                                                await e(Q("sendFlow - user clicked next and transaction should be added to controller")),
                                                e((0, T.addUnapprovedTransactionAndRouteToConfirmationPage)(s, t, o.history));
                                        }
                                    };
                                }),
                                (n.startNewDraftTransaction = function (e) {
                                    return async (t) => {
                                        var n;
                                        await t(Y.clearPreviousDrafts()),
                                            await t(Y.addNewDraft({ ...x, history: ["sendFlow - User started new draft transaction"] })),
                                            await t(ne({ type: null !== (n = e.type) && void 0 !== n ? n : g.ASSET_TYPES.NATIVE, details: e.details })),
                                            await t(B());
                                    };
                                }),
                                (n.toggleSendMaxMode = function () {
                                    return async (e, t) => {
                                        t().send.amountMode === b.MAX
                                            ? (await e(Y.updateAmountMode(b.INPUT)), await e(Y.updateSendAmount("0x0")), await e(Q("sendFlow - user toggled max mode off")))
                                            : (await e(Y.updateAmountMode(b.MAX)), await e(Y.updateAmountToMax()), await e(Q("sendFlow - user toggled max mode on"))),
                                            await e(F());
                                    };
                                }),
                                (n.updateGasLimit = void 0),
                                (n.updateGasPrice = function (e) {
                                    return (t) => {
                                        t(Q(`sendFlow - user set legacy gasPrice to ${e}`)), t(Y.updateGasFees({ gasPrice: e, transactionType: g.TRANSACTION_ENVELOPE_TYPES.LEGACY, manuallyEdited: !0 }));
                                    };
                                }),
                                (n.updateRecipient = ee),
                                (n.updateRecipientUserInput = te),
                                (n.updateSendAmount = function (e) {
                                    return async (t, n) => {
                                        const r = n(),
                                            { metamask: a } = r,
                                            o = r.send.draftTransactions[r.send.currentTransactionUUID];
                                        let i = e;
                                        if (o.asset.type === g.ASSET_TYPES.TOKEN) {
                                            var u, l, d;
                                            const t = Math.pow(10, Number((null === (u = o.asset.details) || void 0 === u ? void 0 : u.decimals) || 0)),
                                                n = (0, c.conversionUtil)((0, s.addHexPrefix)(e), {
                                                    fromNumericBase: "hex",
                                                    toNumericBase: "dec",
                                                    toCurrency: null === (l = o.asset.details) || void 0 === l ? void 0 : l.symbol,
                                                    conversionRate: t,
                                                    invertConversionRate: !0,
                                                });
                                            i = `${Number(n) ? n : ""} ${null === (d = o.asset.details) || void 0 === d ? void 0 : d.symbol}`;
                                        } else {
                                            var E;
                                            i = `${(0, h.getValueFromWeiHex)({ value: e, toCurrency: R.ETH, numberOfDecimals: 8 })} ${(null == a || null === (E = a.provider) || void 0 === E ? void 0 : E.ticker) || R.ETH}`;
                                        }
                                        await t(Q(`sendFlow - user set amount to ${i}`)), await t(Y.updateSendAmount(e)), r.send.amountMode === b.MAX && (await t(Y.updateAmountMode(b.INPUT))), await t(F());
                                    };
                                }),
                                (n.updateSendAsset = ne),
                                (n.updateSendHexData = function (e) {
                                    return async (t, n) => {
                                        await t(Q(`sendFlow - user added custom hexData ${e}`)), await t(Y.updateUserInputHexData(e));
                                        const r = n();
                                        r.send.draftTransactions[r.send.currentTransactionUUID].asset.type === g.ASSET_TYPES.NATIVE && (await t(F()));
                                    };
                                }),
                                (n.useContactListForRecipientSearch = function () {
                                    return (e) => {
                                        e(Q("sendFlow - user selected back to all on recipient screen")), e(z(k.CONTACT_LIST));
                                    };
                                }),
                                (n.useDefaultGas = n.useCustomGas = void 0),
                                (n.useMyAccountsForRecipientSearch = function () {
                                    return (e) => {
                                        e(Q("sendFlow - user selected transfer to my accounts on recipient screen")), e(z(k.MY_ACCOUNTS));
                                    };
                                });
                            var r = e("@reduxjs/toolkit"),
                                a = y(e("bignumber.js")),
                                s = e("ethereumjs-util"),
                                o = e("lodash"),
                                i = e("uuid"),
                                c = e("../../../shared/modules/conversion.utils"),
                                u = e("../../../shared/constants/gas"),
                                l = e("../../pages/send/send.constants"),
                                d = e("../../pages/send/send.utils"),
                                E = e("../../selectors"),
                                T = e("../../store/actions"),
                                _ = e("../gas/gas.duck"),
                                A = e("../../store/actionConstants"),
                                S = e("../../helpers/utils/token-util"),
                                m = e("../../helpers/utils/util"),
                                N = e("../metamask/metamask"),
                                p = e("../ens"),
                                I = e("../../../shared/modules/hexstring-utils"),
                                f = e("../../helpers/utils/transactions.util"),
                                O = y(e("../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                                R = e("../../helpers/constants/common"),
                                g = e("../../../shared/constants/transaction"),
                                C = (e("../../helpers/constants/error-keys"), e("../../../shared/modules/string-utils")),
                                h = e("../../helpers/utils/confirm-tx.util"),
                                P = e("../../../shared/modules/transaction.utils"),
                                D = e("../../../shared/lib/metamask-controller-utils"),
                                L = e("../../../shared/lib/transactions-controller-utils"),
                                v = e("./helpers");
                            function y(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const M = { ADD_RECIPIENT: "ADD_RECIPIENT", DRAFT: "DRAFT", EDIT: "EDIT", INACTIVE: "INACTIVE" };
                            n.SEND_STAGES = M;
                            const U = { INVALID: "INVALID", VALID: "VALID" };
                            n.SEND_STATUSES = U;
                            const w = { BASIC: "BASIC", CUSTOM: "CUSTOM", INLINE: "INLINE" };
                            n.GAS_INPUT_MODES = w;
                            const b = { INPUT: "INPUT", MAX: "MAX" };
                            n.AMOUNT_MODES = b;
                            const k = { CONTACT_LIST: "CONTACT_LIST", MY_ACCOUNTS: "MY_ACCOUNTS" };
                            n.RECIPIENT_SEARCH_MODES = k;
                            const x = {
                                amount: { error: null, value: "0x0" },
                                asset: { balance: "0x0", details: null, error: null, type: g.ASSET_TYPES.NATIVE },
                                fromAccount: null,
                                gas: { error: null, gasLimit: "0x0", gasPrice: "0x0", gasTotal: "0x0", maxFeePerGas: "0x0", maxPriorityFeePerGas: "0x0", wasManuallyEdited: !1 },
                                history: [],
                                id: null,
                                recipient: { address: "", error: null, nickname: "", warning: null, type: "", recipientWarningAcknowledged: !1 },
                                status: U.VALID,
                                transactionType: g.TRANSACTION_ENVELOPE_TYPES.LEGACY,
                                userInputHexData: null,
                            };
                            n.draftTransactionInitialState = x;
                            const H = {
                                amountMode: b.INPUT,
                                currentTransactionUUID: null,
                                draftTransactions: {},
                                eip1559support: !1,
                                gasEstimateIsLoading: !0,
                                gasEstimatePollToken: null,
                                gasIsSetInModal: !1,
                                gasPriceEstimate: "0x0",
                                gasLimitMinimum: u.GAS_LIMITS.SIMPLE,
                                gasTotalForLayer1: "0x0",
                                recipientMode: k.CONTACT_LIST,
                                recipientInput: "",
                                selectedAccount: { address: null, balance: "0x0" },
                                stage: M.INACTIVE,
                            };
                            n.initialState = H;
                            const G = "send",
                                F = (0, r.createAsyncThunk)("send/computeEstimatedGasLimit", async (e, t) => {
                                    var n;
                                    const r = t.getState(),
                                        { send: a, metamask: s } = r,
                                        o = a.draftTransactions[a.currentTransactionUUID],
                                        i = (0, N.getUnapprovedTxs)(r),
                                        c = (0, E.getIsMultiLayerFeeNetwork)(r),
                                        u = i[o.id],
                                        l = (0, E.getIsNonStandardEthChain)(r),
                                        d = (0, E.getCurrentChainId)(r);
                                    let T;
                                    var A;
                                    c &&
                                        (T = await (0, O.default)(global.eth, {
                                            txParams: {
                                                gasPrice: o.gas.gasPrice,
                                                gas: o.gas.gasLimit,
                                                to: null === (A = o.recipient.address) || void 0 === A ? void 0 : A.toLowerCase(),
                                                value: a.amountMode === b.MAX ? a.selectedAccount.balance : o.amount.value,
                                                from: a.selectedAccount.address,
                                                data: o.userInputHexData,
                                                type: "0x0",
                                            },
                                        }));
                                    if (a.stage !== M.EDIT || null === (n = u.dappSuggestedGasFees) || void 0 === n || !n.gas || !u.userEditedGasLimit) {
                                        var S;
                                        const e = await (0, v.estimateGasLimitForSend)({
                                            gasPrice: o.gas.gasPrice,
                                            blockGasLimit: s.currentBlockGasLimit,
                                            selectedAddress: s.selectedAddress,
                                            sendToken: o.asset.details,
                                            to: null === (S = o.recipient.address) || void 0 === S ? void 0 : S.toLowerCase(),
                                            value: o.amount.value,
                                            data: o.userInputHexData,
                                            isNonStandardEthChain: l,
                                            chainId: d,
                                            gasLimit: o.gas.gasLimit,
                                        });
                                        return await t.dispatch((0, _.setCustomGasLimit)(e)), { gasLimit: e, gasTotalForLayer1: T };
                                    }
                                    return null;
                                });
                            n.computeEstimatedGasLimit = F;
                            const B = (0, r.createAsyncThunk)("send/initializeSendState", async ({ chainHasChanged: e = !1 } = {}, t) => {
                                const n = t.getState(),
                                    r = (0, E.getIsNonStandardEthChain)(n),
                                    a = (0, E.getCurrentChainId)(n),
                                    o = (0, E.checkNetworkAndAccountSupports1559)(n),
                                    i = (0, E.getSelectedAccount)(n),
                                    { send: c, metamask: l } = n,
                                    d = c.draftTransactions[c.currentTransactionUUID];
                                if (!d) return t.rejectWithValue("draftTransaction not found, possibly not on send flow");
                                let A = c.stage === M.EDIT ? d.gas.gasPrice : "0x1",
                                    S = null;
                                (S = await (0, T.getGasFeeEstimatesAndStartPolling)()), (0, T.addPollingTokenToAppState)(S);
                                const {
                                    metamask: { gasFeeEstimates: m, gasEstimateType: p },
                                } = t.getState();
                                c.stage !== M.EDIT &&
                                    (A =
                                        p === u.GAS_ESTIMATE_TYPES.LEGACY
                                            ? (0, E.getGasPriceInHexWei)(m.medium)
                                            : p === u.GAS_ESTIMATE_TYPES.ETH_GASPRICE
                                            ? (0, v.getRoundedGasPrice)(m.gasPrice)
                                            : p === u.GAS_ESTIMATE_TYPES.FEE_MARKET
                                            ? (0, E.getGasPriceInHexWei)(m.medium.suggestedMaxFeePerGas)
                                            : m.gasPrice
                                            ? (0, v.getRoundedGasPrice)(m.gasPrice)
                                            : "0x0");
                                let { gasLimit: I } = d.gas;
                                if (p !== u.GAS_ESTIMATE_TYPES.NONE && c.stage !== M.EDIT && d.recipient.address) {
                                    var f, O;
                                    I = d.asset.type === g.ASSET_TYPES.TOKEN || d.asset.type === g.ASSET_TYPES.COLLECTIBLE ? u.GAS_LIMITS.BASE_TOKEN_ESTIMATE : u.GAS_LIMITS.SIMPLE;
                                    I =
                                        (await (0, v.estimateGasLimitForSend)({
                                            gasPrice: A,
                                            blockGasLimit: l.currentBlockGasLimit,
                                            selectedAddress: null !== (f = null === (O = d.fromAccount) || void 0 === O ? void 0 : O.address) && void 0 !== f ? f : c.selectedAccount.address,
                                            sendToken: d.asset.details,
                                            to: d.recipient.address.toLowerCase(),
                                            value: d.amount.value,
                                            data: d.userInputHexData,
                                            isNonStandardEthChain: r,
                                            chainId: a,
                                        })) || I;
                                }
                                await t.dispatch((0, _.setCustomGasLimit)(I));
                                return t.getState().send.currentTransactionUUID !== c.currentTransactionUUID
                                    ? t.rejectWithValue("draftTransaction changed during initialization.\n        A new initializeSendState action must be dispatched.")
                                    : {
                                          account: i,
                                          chainId: (0, E.getCurrentChainId)(n),
                                          tokens: (0, N.getTokens)(n),
                                          chainHasChanged: e,
                                          gasFeeEstimates: m,
                                          gasEstimateType: p,
                                          gasLimit: I,
                                          gasTotal: (0, s.addHexPrefix)((0, L.calcGasTotal)(I, A)),
                                          gasEstimatePollToken: S,
                                          eip1559support: o,
                                          useTokenDetection: (0, E.getUseTokenDetection)(n),
                                          tokenAddressList: Object.keys((0, E.getTokenList)(n)),
                                      };
                            });
                            n.initializeSendState = B;
                            const W = (0, r.createSlice)({
                                    name: G,
                                    initialState: H,
                                    reducers: {
                                        addNewDraft: (e, t) => {
                                            (e.currentTransactionUUID = (0, i.v4)()), (e.draftTransactions[e.currentTransactionUUID] = t.payload), t.payload.id ? (e.stage = M.EDIT) : (e.stage = M.ADD_RECIPIENT);
                                        },
                                        addHistoryEntry: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            n && n.history.push({ entry: t.payload, timestamp: Date.now() });
                                        },
                                        calculateGasTotal: (e) => {
                                            const t = e.draftTransactions[e.currentTransactionUUID];
                                            t.transactionType === g.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET
                                                ? (t.gas.gasTotal = (0, s.addHexPrefix)((0, L.calcGasTotal)(t.gas.gasLimit, t.gas.maxFeePerGas)))
                                                : (t.gas.gasTotal = (0, s.addHexPrefix)((0, L.calcGasTotal)(t.gas.gasLimit, t.gas.gasPrice))),
                                                e.amountMode === b.MAX && t.asset.type === g.ASSET_TYPES.NATIVE && W.caseReducers.updateAmountToMax(e),
                                                W.caseReducers.validateAmountField(e),
                                                W.caseReducers.validateGasField(e),
                                                W.caseReducers.validateSendState(e);
                                        },
                                        clearPreviousDrafts: (e) => {
                                            (e.currentTransactionUUID = null), (e.draftTransactions = {});
                                        },
                                        resetSendState: () => H,
                                        updateAmountMode: (e, t) => {
                                            Object.values(b).includes(t.payload) && (e.amountMode = t.payload);
                                        },
                                        updateAmountToMax: (e) => {
                                            const t = e.draftTransactions[e.currentTransactionUUID];
                                            let n = "0x0";
                                            if (t.asset.type === g.ASSET_TYPES.TOKEN) {
                                                var r, a;
                                                const e = null !== (r = null === (a = t.asset.details) || void 0 === a ? void 0 : a.decimals) && void 0 !== r ? r : 0,
                                                    s = Math.pow(10, Number(e));
                                                n = (0, c.multiplyCurrencies)(t.asset.balance, s, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 10 });
                                            } else {
                                                const r = (0, f.sumHexes)(t.gas.gasTotal || "0x0", e.gasTotalForLayer1 || "0x0");
                                                n = (0, c.subtractCurrencies)((0, s.addHexPrefix)(t.asset.balance), (0, s.addHexPrefix)(r), { toNumericBase: "hex", aBase: 16, bBase: 16 });
                                            }
                                            W.caseReducers.updateSendAmount(e, { payload: n });
                                        },
                                        updateAsset: (e, t) => {
                                            const { asset: n, initialAssetSet: r } = t.payload,
                                                a = e.draftTransactions[e.currentTransactionUUID];
                                            (a.asset.type = n.type),
                                                (a.asset.balance = n.balance),
                                                (a.asset.error = n.error),
                                                a.asset.type === g.ASSET_TYPES.TOKEN || a.asset.type === g.ASSET_TYPES.COLLECTIBLE
                                                    ? (a.asset.details = n.details)
                                                    : ((a.asset.details = null), a.recipient.error === l.CONTRACT_ADDRESS_ERROR && (a.recipient.error = null)),
                                                e.amountMode === b.MAX ? W.caseReducers.updateAmountToMax(e) : !1 === r && W.caseReducers.updateSendAmount(e, { payload: "0x0" }),
                                                W.caseReducers.validateSendState(e);
                                        },
                                        updateGasFeeEstimates: (e, t) => {
                                            const { gasFeeEstimates: n, gasEstimateType: r } = t.payload;
                                            let a = "0x0";
                                            switch (r) {
                                                case u.GAS_ESTIMATE_TYPES.FEE_MARKET:
                                                    W.caseReducers.updateGasFees(e, {
                                                        payload: {
                                                            transactionType: g.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET,
                                                            maxFeePerGas: (0, E.getGasPriceInHexWei)(n.medium.suggestedMaxFeePerGas),
                                                            maxPriorityFeePerGas: (0, E.getGasPriceInHexWei)(n.medium.suggestedMaxPriorityFeePerGas),
                                                        },
                                                    });
                                                    break;
                                                case u.GAS_ESTIMATE_TYPES.LEGACY:
                                                    (a = (0, v.getRoundedGasPrice)(n.medium)), W.caseReducers.updateGasFees(e, { payload: { gasPrice: a, type: g.TRANSACTION_ENVELOPE_TYPES.LEGACY, isAutomaticUpdate: !0 } });
                                                    break;
                                                case u.GAS_ESTIMATE_TYPES.ETH_GASPRICE:
                                                    (a = (0, v.getRoundedGasPrice)(n.gasPrice)),
                                                        W.caseReducers.updateGasFees(e, { payload: { gasPrice: (0, v.getRoundedGasPrice)(n.gasPrice), type: g.TRANSACTION_ENVELOPE_TYPES.LEGACY, isAutomaticUpdate: !0 } });
                                                case u.GAS_ESTIMATE_TYPES.NONE:
                                            }
                                            e.gasPriceEstimate = (0, s.addHexPrefix)(a);
                                        },
                                        updateGasFees: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            n &&
                                                (t.payload.transactionType === g.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET
                                                    ? ((n.gas.maxFeePerGas = (0, s.addHexPrefix)(t.payload.maxFeePerGas)),
                                                      (n.gas.maxPriorityFeePerGas = (0, s.addHexPrefix)(t.payload.maxPriorityFeePerGas)),
                                                      (n.transactionType = g.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET))
                                                    : (t.payload.manuallyEdited && (n.gas.wasManuallyEdited = !0),
                                                      (n.gas.wasManuallyEdited && !t.payload.manuallyEdited) || (n.gas.gasPrice = (0, s.addHexPrefix)(t.payload.gasPrice)),
                                                      (n.transactionType = g.TRANSACTION_ENVELOPE_TYPES.LEGACY)),
                                                W.caseReducers.calculateGasTotal(e));
                                        },
                                        updateGasLimit: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            n && ((n.gas.gasLimit = (0, s.addHexPrefix)(t.payload)), W.caseReducers.calculateGasTotal(e));
                                        },
                                        updateLayer1Fees: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            (e.gasTotalForLayer1 = t.payload), e.amountMode === b.MAX && n.asset.type === g.ASSET_TYPES.NATIVE && W.caseReducers.updateAmountToMax(e);
                                        },
                                        updateRecipient: (e, t) => {
                                            var n, r;
                                            const a = e.draftTransactions[e.currentTransactionUUID];
                                            (a.recipient.error = null),
                                                (e.recipientInput = ""),
                                                (a.recipient.address = null !== (n = t.payload.address) && void 0 !== n ? n : ""),
                                                (a.recipient.nickname = null !== (r = t.payload.nickname) && void 0 !== r ? r : ""),
                                                "" === a.recipient.address ? (e.stage = M.ADD_RECIPIENT) : ((e.stage = null === a.id ? M.DRAFT : M.EDIT), (e.recipientMode = k.CONTACT_LIST)),
                                                W.caseReducers.validateSendState(e);
                                        },
                                        updateRecipientSearchMode: (e, t) => {
                                            (e.recipientInput = ""), (e.recipientMode = t.payload);
                                        },
                                        updateRecipientWarning: (e, t) => {
                                            e.draftTransactions[e.currentTransactionUUID].recipient.warning = t.payload;
                                        },
                                        updateRecipientType: (e, t) => {
                                            e.draftTransactions[e.currentTransactionUUID].recipient.type = t.payload;
                                        },
                                        updateDraftTransactionStatus: (e, t) => {
                                            e.draftTransactions[e.currentTransactionUUID].status = t.payload;
                                        },
                                        acknowledgeRecipientWarning: (e) => {
                                            (e.draftTransactions[e.currentTransactionUUID].recipient.recipientWarningAcknowledged = !0), W.caseReducers.validateSendState(e);
                                        },
                                        updateRecipientUserInput: (e, t) => {
                                            e.recipientInput = t.payload;
                                        },
                                        updateSendAmount: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            (n.amount.value = (0, s.addHexPrefix)(t.payload)),
                                                W.caseReducers.validateAmountField(e),
                                                n.asset.type === g.ASSET_TYPES.NATIVE && W.caseReducers.validateGasField(e),
                                                W.caseReducers.validateSendState(e);
                                        },
                                        updateUserInputHexData: (e, t) => {
                                            e.draftTransactions[e.currentTransactionUUID].userInputHexData = t.payload;
                                        },
                                        useCustomGas: (e) => {
                                            e.gasIsSetInModal = !0;
                                        },
                                        useDefaultGas: (e) => {
                                            e.gasIsSetInModal = !1;
                                        },
                                        validateAmountField: (e) => {
                                            var t, n;
                                            const r = e.draftTransactions[e.currentTransactionUUID];
                                            switch (!0) {
                                                case r.asset.type === g.ASSET_TYPES.NATIVE &&
                                                    !(0, d.isBalanceSufficient)({ amount: r.amount.value, balance: r.asset.balance, gasTotal: null !== (t = r.gas.gasTotal) && void 0 !== t ? t : "0x0" }):
                                                    r.amount.error = l.INSUFFICIENT_FUNDS_ERROR;
                                                    break;
                                                case r.asset.type === g.ASSET_TYPES.TOKEN &&
                                                    !(0, d.isTokenBalanceSufficient)({ tokenBalance: null !== (n = r.asset.balance) && void 0 !== n ? n : "0x0", amount: r.amount.value, decimals: r.asset.details.decimals }):
                                                    r.amount.error = l.INSUFFICIENT_TOKENS_ERROR;
                                                    break;
                                                case (0, c.conversionGreaterThan)({ value: 0, fromNumericBase: "dec" }, { value: r.amount.value, fromNumericBase: "hex" }):
                                                    r.amount.error = l.NEGATIVE_ETH_ERROR;
                                                    break;
                                                default:
                                                    r.amount.error = null;
                                            }
                                        },
                                        validateGasField: (e) => {
                                            var t, n, r;
                                            const a = e.draftTransactions[e.currentTransactionUUID],
                                                s = !(0, d.isBalanceSufficient)({
                                                    amount: a.asset.type === g.ASSET_TYPES.NATIVE ? a.amount.value : "0x0",
                                                    balance: null !== (t = null === (n = a.fromAccount) || void 0 === n ? void 0 : n.balance) && void 0 !== t ? t : e.selectedAccount.balance,
                                                    gasTotal: null !== (r = a.gas.gasTotal) && void 0 !== r ? r : "0x0",
                                                });
                                            a.gas.error = s ? l.INSUFFICIENT_FUNDS_ERROR : null;
                                        },
                                        validateRecipientUserInput: (e, t) => {
                                            const n = e.draftTransactions[e.currentTransactionUUID];
                                            if (n)
                                                if (e.recipientMode === k.MY_ACCOUNTS || "" === e.recipientInput || null === e.recipientInput) (n.recipient.error = null), (n.recipient.warning = null);
                                                else {
                                                    var r, a;
                                                    const { chainId: s, tokens: o, tokenAddressList: i, isProbablyAnAssetContract: c } = t.payload;
                                                    (0, I.isBurnAddress)(e.recipientInput) || (!(0, I.isValidHexAddress)(e.recipientInput, { mixedCaseUseChecksum: !0 }) && !(0, m.isValidDomainName)(e.recipientInput))
                                                        ? (n.recipient.error = (0, m.isDefaultMetaMaskChain)(s) ? l.INVALID_RECIPIENT_ADDRESS_ERROR : l.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR)
                                                        : (0, m.isOriginContractAddress)(e.recipientInput, null === (r = n.asset) || void 0 === r || null === (a = r.details) || void 0 === a ? void 0 : a.address)
                                                        ? (n.recipient.error = l.CONTRACT_ADDRESS_ERROR)
                                                        : (n.recipient.error = null),
                                                        ((0, I.isValidHexAddress)(e.recipientInput) && (i.find((t) => (0, C.isEqualCaseInsensitive)(t, e.recipientInput)) || (0, m.checkExistingAddresses)(e.recipientInput, o))) || c
                                                            ? (n.recipient.warning = l.KNOWN_RECIPIENT_ADDRESS_WARNING)
                                                            : (n.recipient.warning = null);
                                                }
                                            W.caseReducers.validateSendState(e);
                                        },
                                        validateSendState: (e) => {
                                            const t = e.draftTransactions[e.currentTransactionUUID];
                                            if (t)
                                                switch (!0) {
                                                    case Boolean(t.amount.error):
                                                    case Boolean(t.gas.error):
                                                    case Boolean(t.asset.error):
                                                    case t.asset.type === g.ASSET_TYPES.TOKEN && null === t.asset.details:
                                                    case e.stage === M.ADD_RECIPIENT:
                                                    case e.stage === M.INACTIVE:
                                                    case e.gasEstimateIsLoading:
                                                    case new a.default(t.gas.gasLimit, 16).lessThan(new a.default(e.gasLimitMinimum)):
                                                    case "loading" === t.recipient.warning:
                                                    case t.recipient.warning === l.KNOWN_RECIPIENT_ADDRESS_WARNING && !1 === t.recipient.recipientWarningAcknowledged:
                                                        t.status = U.INVALID;
                                                        break;
                                                    default:
                                                        t.status = U.VALID;
                                                }
                                        },
                                    },
                                    extraReducers: (e) => {
                                        e.addCase(A.ACCOUNT_CHANGED, (e, t) => {
                                            if (e.stage === M.EDIT && t.payload.account) {
                                                const n = e.draftTransactions[e.currentTransactionUUID];
                                                n &&
                                                    n.fromAccount &&
                                                    n.fromAccount.address === t.payload.account.address &&
                                                    ((n.fromAccount.balance = t.payload.account.balance),
                                                    n.asset.type === g.ASSET_TYPES.NATIVE && (n.asset.balance = t.payload.account.balance),
                                                    W.caseReducers.validateAmountField(e),
                                                    W.caseReducers.validateGasField(e),
                                                    W.caseReducers.validateSendState(e));
                                            }
                                        })
                                            .addCase(A.ADDRESS_BOOK_UPDATED, (e, t) => {
                                                var n;
                                                const { addressBook: r } = t.payload,
                                                    a = e.draftTransactions[e.currentTransactionUUID];
                                                a && null !== (n = r[a.recipient.address]) && void 0 !== n && n.name && (a.recipient.nickname = r[a.recipient.address].name);
                                            })
                                            .addCase(F.pending, (e) => {
                                                e.gasEstimateIsLoading = !0;
                                            })
                                            .addCase(F.fulfilled, (e, t) => {
                                                var n, r;
                                                (e.gasEstimateIsLoading = !1),
                                                    null !== (n = t.payload) && void 0 !== n && n.gasLimit && W.caseReducers.updateGasLimit(e, { payload: t.payload.gasLimit }),
                                                    null !== (r = t.payload) && void 0 !== r && r.gasTotalForLayer1 && W.caseReducers.updateLayer1Fees(e, { payload: t.payload.gasTotalForLayer1 });
                                            })
                                            .addCase(F.rejected, (e) => {
                                                e.gasEstimateIsLoading = !1;
                                            })
                                            .addCase(A.GAS_FEE_ESTIMATES_UPDATED, (e, t) => {
                                                W.caseReducers.updateGasFeeEstimates(e, { payload: t.payload });
                                            })
                                            .addCase(B.pending, (e) => {
                                                e.gasEstimateIsLoading = !0;
                                            })
                                            .addCase(B.fulfilled, (e, t) => {
                                                (e.eip1559support = t.payload.eip1559support), (e.selectedAccount.address = t.payload.account.address), (e.selectedAccount.balance = t.payload.account.balance);
                                                const n = e.draftTransactions[e.currentTransactionUUID];
                                                var r, a;
                                                n &&
                                                    ((n.gas.gasLimit = t.payload.gasLimit),
                                                    (n.gas.gasTotal = t.payload.gasTotal),
                                                    t.payload.chainHasChanged &&
                                                        ((n.asset.type = g.ASSET_TYPES.NATIVE),
                                                        (n.asset.balance = null !== (r = null === (a = n.fromAccount) || void 0 === a ? void 0 : a.balance) && void 0 !== r ? r : e.selectedAccount.balance),
                                                        (n.asset.details = null)));
                                                W.caseReducers.updateGasFeeEstimates(e, { payload: { gasFeeEstimates: t.payload.gasFeeEstimates, gasEstimateType: t.payload.gasEstimateType } }),
                                                    (e.gasEstimatePollToken = t.payload.gasEstimatePollToken),
                                                    t.payload.gasEstimatePollToken && (e.gasEstimateIsLoading = !1),
                                                    e.stage !== M.INACTIVE &&
                                                        W.caseReducers.validateRecipientUserInput(e, {
                                                            payload: { chainId: t.payload.chainId, tokens: t.payload.tokens, useTokenDetection: t.payload.useTokenDetection, tokenAddressList: t.payload.tokenAddressList },
                                                        }),
                                                    e.amountMode === b.MAX && W.caseReducers.updateAmountToMax(e),
                                                    W.caseReducers.validateAmountField(e),
                                                    W.caseReducers.validateGasField(e),
                                                    W.caseReducers.validateSendState(e);
                                            })
                                            .addCase(A.SELECTED_ACCOUNT_CHANGED, (e, t) => {
                                                if (e.stage !== M.EDIT && t.payload.account) {
                                                    (e.selectedAccount.balance = t.payload.account.balance), (e.selectedAccount.address = t.payload.account.address);
                                                    const n = e.draftTransactions[e.currentTransactionUUID];
                                                    n &&
                                                        ((null == n ? void 0 : n.asset.type) === g.ASSET_TYPES.NATIVE && (n.asset.balance = t.payload.account.balance),
                                                        W.caseReducers.validateAmountField(e),
                                                        W.caseReducers.validateGasField(e),
                                                        W.caseReducers.validateSendState(e));
                                                }
                                            })
                                            .addCase(A.QR_CODE_DETECTED, (e, t) => {
                                                const n = t.value,
                                                    r = e.draftTransactions[e.currentTransactionUUID];
                                                if (n && r && "address" === n.type) {
                                                    const t = n.values.address.toLowerCase();
                                                    (0, I.isValidHexAddress)(t, { allowNonPrefixed: !1 })
                                                        ? r.recipient.address !== t && W.caseReducers.updateRecipient(e, { payload: { address: t } })
                                                        : (r.recipient.error = l.INVALID_RECIPIENT_ADDRESS_ERROR);
                                                }
                                            });
                                    },
                                }),
                                { actions: Y, reducer: K } = W;
                            var V = K;
                            n.default = V;
                            const { useDefaultGas: j, useCustomGas: $, updateGasLimit: X, validateRecipientUserInput: q, updateRecipientSearchMode: z, addHistoryEntry: Q, acknowledgeRecipientWarning: Z } = Y;
                            (n.acknowledgeRecipientWarning = Z), (n.addHistoryEntry = Q), (n.updateGasLimit = X), (n.useCustomGas = $), (n.useDefaultGas = j);
                            const J = (0, o.debounce)((e, t, n) => {
                                e(Q(`sendFlow - user typed ${t.userInput} into recipient input field`)), e(q(t)), n();
                            }, 300);
                            function ee({ address: e, nickname: t }) {
                                return async (n, r) => {
                                    var a;
                                    const s = r(),
                                        o = null !== (a = (0, E.getAddressBookEntryOrAccountName)(s, e)) && void 0 !== a ? a : "";
                                    await n(Y.updateRecipient({ address: e, nickname: t || o })), await n(F());
                                };
                            }
                            function te(e) {
                                return async (t, n) => {
                                    var r, a, s;
                                    t(Y.updateRecipientWarning("loading")), t(Y.updateDraftTransactionStatus(U.INVALID)), await t(Y.updateRecipientUserInput(e));
                                    const o = n(),
                                        i =
                                            null !==
                                                (r =
                                                    null !== (a = null === (s = o.send.draftTransactions[o.send.currentTransactionUUID].fromAccount) || void 0 === s ? void 0 : s.address) && void 0 !== a
                                                        ? a
                                                        : o.send.selectedAccount.address) && void 0 !== r
                                                ? r
                                                : (0, E.getSelectedAddress)(o),
                                        c = (0, E.getCurrentChainId)(o),
                                        u = (0, N.getTokens)(o),
                                        d = (0, E.getUseTokenDetection)(o),
                                        _ = (0, E.getTokenList)(o),
                                        A = Object.keys(_),
                                        m = (0, I.isValidHexAddress)(e);
                                    let p = !1;
                                    if (m) {
                                        if (await (0, f.isSmartContractAddress)(e)) {
                                            t(Y.updateRecipientType(l.RECIPIENT_TYPES.SMART_CONTRACT));
                                            const { symbol: n, decimals: r } = (0, S.getTokenMetadata)(e, _) || {};
                                            if (((p = n && r !== undefined), !p))
                                                try {
                                                    const { standard: t } = await (0, T.getTokenStandardAndDetails)(e, i);
                                                    p = Boolean(t);
                                                } catch (e) {
                                                    console.log(e);
                                                }
                                        }
                                    }
                                    return new Promise((n) => {
                                        J(t, { userInput: e, chainId: c, tokens: u, useTokenDetection: d, tokenAddressList: A, isProbablyAnAssetContract: p }, n);
                                    });
                                };
                            }
                            function ne({ type: e, details: t }, { initialAssetSet: n = !1 } = {}) {
                                return async (r, a) => {
                                    var o, i, c;
                                    const u = a(),
                                        l = u.send.draftTransactions[u.send.currentTransactionUUID],
                                        d =
                                            null !== (o = null !== (i = null === (c = l.fromAccount) || void 0 === c ? void 0 : c.address) && void 0 !== i ? i : u.send.selectedAccount.address) && void 0 !== o
                                                ? o
                                                : (0, E.getSelectedAddress)(u),
                                        _ = (0, E.getTargetAccount)(u, d);
                                    if (e === g.ASSET_TYPES.NATIVE) {
                                        var A, S;
                                        const t = (0, N.getUnapprovedTxs)(u),
                                            a = null == t ? void 0 : t[l.id];
                                        await r(
                                            Q(`sendFlow - user set asset of type ${g.ASSET_TYPES.NATIVE} with symbol ${null !== (A = null === (S = u.metamask.provider) || void 0 === S ? void 0 : S.ticker) && void 0 !== A ? A : R.ETH}`)
                                        ),
                                            await r(Y.updateAsset({ asset: { type: e, details: null, balance: _.balance, error: null }, initialAssetSet: n })),
                                            ((null == a ? void 0 : a.type) !== g.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM &&
                                                (null == a ? void 0 : a.type) !== g.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER &&
                                                (null == a ? void 0 : a.type) !== g.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM) ||
                                                (await r(Y.updateUserInputHexData("")));
                                    } else {
                                        await r((0, T.showLoadingIndication)());
                                        const a = { ...t, ...(await (0, T.getTokenStandardAndDetails)(t.address, d, t.tokenId)) };
                                        await r((0, T.hideLoadingIndication)());
                                        const o = { type: e, details: a, error: null };
                                        if (a.standard === g.TOKEN_STANDARDS.ERC20)
                                            (o.balance = (0, s.addHexPrefix)((0, L.calcTokenAmount)(a.balance, a.decimals).toString(16))),
                                                await r(Q(`sendFlow - user set asset to ERC20 token with symbol ${a.symbol} and address ${a.address}`));
                                        else {
                                            if (a.standard === g.TOKEN_STANDARDS.ERC1155 && e === g.ASSET_TYPES.COLLECTIBLE) throw new Error("Sends of ERC1155 tokens are not currently supported");
                                            if (a.standard === g.TOKEN_STANDARDS.ERC1155 || a.standard === g.TOKEN_STANDARDS.ERC721) {
                                                g.ASSET_TYPES.TOKEN;
                                                {
                                                    let e = !0;
                                                    try {
                                                        e = await (0, T.isCollectibleOwner)(d, a.address, a.tokenId);
                                                    } catch (e) {
                                                        e.message.includes("Unable to verify ownership.") || r((0, T.displayWarning)(e.message));
                                                    }
                                                    if (!e) throw new Error("Send slice initialized as collectible send with a collectible not currently owned by the select account");
                                                    (o.error = null), (o.balance = "0x1"), await r(Q(`sendFlow - user set asset to NFT with tokenId ${a.tokenId} and address ${a.address}`));
                                                }
                                            }
                                        }
                                        await r(Y.updateAsset({ asset: o, initialAssetSet: n }));
                                    }
                                    !1 === n && (await r(F()));
                                };
                            }
                            function re(e) {
                                return e.send.currentTransactionUUID;
                            }
                            function ae(e) {
                                var t;
                                return null !== (t = e.send.draftTransactions[re(e)]) && void 0 !== t ? t : {};
                            }
                            function se(e) {
                                return ae(e).asset;
                            }
                            function oe(e) {
                                const t = ae(e);
                                if (!t.recipient) return { address: "", nickname: "", error: null, warning: null };
                                const n = (0, I.toChecksumHexAddress)(t.recipient.address);
                                return e.metamask.ensResolutionsByAddress ? { ...t.recipient, nickname: t.recipient.nickname || (0, E.getEnsResolutionByAddress)(e, n) } : t.recipient;
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5898,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.WEI = n.SUPPORT_REQUEST_LINK = n.SECONDARY = n.PRIMARY = n.GWEI = n.GAS_ESTIMATE_TYPES = n.ETH = n.CONTRACT_ADDRESS_LINK = void 0);
                            n.ETH = "ETH";
                            n.GWEI = "GWEI";
                            n.WEI = "WEI";
                            n.PRIMARY = "PRIMARY";
                            n.SECONDARY = "SECONDARY";
                            n.GAS_ESTIMATE_TYPES = { SLOW: "SLOW", AVERAGE: "AVERAGE", FAST: "FAST", FASTEST: "FASTEST" };
                            n.SUPPORT_REQUEST_LINK = "https://metamask.zendesk.com/hc/en-us";
                            n.CONTRACT_ADDRESS_LINK = "https://metamask.zendesk.com/hc/en-us/articles/360020028092-What-is-the-known-contract-address-warning-";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            59,
            { "../../_locales/index.json": 2, "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = async function () {
                                    let e;
                                    try {
                                        e = await r.default.i18n.getAcceptLanguages();
                                    } catch (t) {
                                        e = [];
                                    }
                                    e || (e = []);
                                    let t = e.map((e) => e.toLowerCase().replace("_", "-")).find((e) => o[e] !== undefined || o[e.split("-")[0]] !== undefined);
                                    t !== undefined && o[t] === undefined && (t = t.split("-")[0]);
                                    return o[t] || "en";
                                });
                            var r = s(e("webextension-polyfill")),
                                a = s(e("../../_locales/index.json"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const o = { zh: "zh_CN" };
                            a.default.forEach((e) => {
                                e && e.code && (o[e.code.toLowerCase().replace("_", "-")] = e.code);
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5900,
            { lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TYPOGRAPHY = n.TEXT_TRANSFORM = n.TEXT_COLORS = n.TEXT_ALIGN = n.TEXT = n.SIZES = n.SEVERITIES = n.RESIZE = n.OVERFLOW_WRAP = n.JUSTIFY_CONTENT = n.ICON_COLORS = n.FRACTIONS = n.FONT_WEIGHT = n.FONT_STYLE = n.FLEX_WRAP = n.FLEX_DIRECTION = n.DISPLAY = n.COLORS = n.BREAKPOINTS = n.BORDER_STYLE = n.BORDER_RADIUS = n.BORDER_COLORS = n.BLOCK_SIZES = n.BACKGROUND_COLORS = n.ALIGN_ITEMS = void 0);
                            var r = e("lodash");
                            const a = {
                                BACKGROUND_DEFAULT: "background-default",
                                BACKGROUND_ALTERNATIVE: "background-alternative",
                                TEXT_DEFAULT: "text-default",
                                TEXT_ALTERNATIVE: "text-alternative",
                                TEXT_MUTED: "text-muted",
                                ICON_DEFAULT: "icon-default",
                                ICON_ALTERNATIVE: "icon-alternative",
                                ICON_MUTED: "icon-muted",
                                BORDER_DEFAULT: "border-default",
                                BORDER_MUTED: "border-muted",
                                OVERLAY_DEFAULT: "overlay-default",
                                OVERLAY_INVERSE: "overlay-inverse",
                                PRIMARY_DEFAULT: "primary-default",
                                PRIMARY_ALTERNATIVE: "primary-alternative",
                                PRIMARY_MUTED: "primary-muted",
                                PRIMARY_INVERSE: "primary-inverse",
                                PRIMARY_DISABLED: "primary-disabled",
                                ERROR_DEFAULT: "error-default",
                                ERROR_ALTERNATIVE: "error-alternative",
                                ERROR_MUTED: "error-muted",
                                ERROR_INVERSE: "error-inverse",
                                ERROR_DISABLED: "error-disabled",
                                WARNING_DEFAULT: "warning-default",
                                WARNING_ALTERNATIVE: "warning-alternative",
                                WARNING_MUTED: "warning-muted",
                                WARNING_INVERSE: "warning-inverse",
                                WARNING_DISABLED: "warning-disabled",
                                SUCCESS_DEFAULT: "success-default",
                                SUCCESS_ALTERNATIVE: "success-alternative",
                                SUCCESS_MUTED: "success-muted",
                                SUCCESS_INVERSE: "success-inverse",
                                SUCCESS_DISABLED: "success-disabled",
                                INFO_DEFAULT: "info-default",
                                INFO_ALTERNATIVE: "info-alternative",
                                INFO_MUTED: "info-muted",
                                INFO_INVERSE: "info-inverse",
                                INFO_DISABLED: "info-disabled",
                                MAINNET: "mainnet",
                                GOERLI: "goerli",
                                SEPOLIA: "sepolia",
                                LOCALHOST: "localhost",
                                TRANSPARENT: "transparent",
                                INHERIT: "inherit",
                            };
                            n.COLORS = a;
                            const s = (0, r.pick)(a, [
                                "BACKGROUND_DEFAULT",
                                "BACKGROUND_ALTERNATIVE",
                                "OVERLAY_DEFAULT",
                                "PRIMARY_DEFAULT",
                                "PRIMARY_ALTERNATIVE",
                                "PRIMARY_MUTED",
                                "ERROR_DEFAULT",
                                "ERROR_ALTERNATIVE",
                                "ERROR_MUTED",
                                "WARNING_DEFAULT",
                                "WARNING_ALTERNATIVE",
                                "WARNING_MUTED",
                                "SUCCESS_DEFAULT",
                                "SUCCESS_ALTERNATIVE",
                                "SUCCESS_MUTED",
                                "INFO_DEFAULT",
                                "INFO_ALTERNATIVE",
                                "INFO_MUTED",
                                "MAINNET",
                                "GOERLI",
                                "SEPOLIA",
                                "TRANSPARENT",
                                "LOCALHOST",
                            ]);
                            n.BACKGROUND_COLORS = s;
                            const o = (0, r.pick)(a, [
                                "BORDER_DEFAULT",
                                "BORDER_MUTED",
                                "PRIMARY_DEFAULT",
                                "PRIMARY_ALTERNATIVE",
                                "PRIMARY_MUTED",
                                "ERROR_DEFAULT",
                                "ERROR_ALTERNATIVE",
                                "ERROR_MUTED",
                                "WARNING_DEFAULT",
                                "WARNING_ALTERNATIVE",
                                "WARNING_MUTED",
                                "SUCCESS_DEFAULT",
                                "SUCCESS_ALTERNATIVE",
                                "SUCCESS_MUTED",
                                "INFO_DEFAULT",
                                "INFO_ALTERNATIVE",
                                "INFO_MUTED",
                                "MAINNET",
                                "GOERLI",
                                "SEPOLIA",
                                "TRANSPARENT",
                                "LOCALHOST",
                            ]);
                            n.BORDER_COLORS = o;
                            const i = (0, r.pick)(a, [
                                "TEXT_DEFAULT",
                                "TEXT_ALTERNATIVE",
                                "TEXT_MUTED",
                                "OVERLAY_INVERSE",
                                "PRIMARY_DEFAULT",
                                "PRIMARY_INVERSE",
                                "ERROR_DEFAULT",
                                "ERROR_INVERSE",
                                "SUCCESS_DEFAULT",
                                "SUCCESS_INVERSE",
                                "WARNING_DEFAULT",
                                "WARNING_INVERSE",
                                "INFO_DEFAULT",
                                "INFO_INVERSE",
                                "INHERIT",
                            ]);
                            n.TEXT_COLORS = i;
                            const c = (0, r.pick)(a, [
                                "ICON_DEFAULT",
                                "ICON_ALTERNATIVE",
                                "ICON_MUTED",
                                "OVERLAY_INVERSE",
                                "PRIMARY_DEFAULT",
                                "PRIMARY_INVERSE",
                                "ERROR_DEFAULT",
                                "ERROR_INVERSE",
                                "SUCCESS_DEFAULT",
                                "SUCCESS_INVERSE",
                                "WARNING_DEFAULT",
                                "WARNING_INVERSE",
                                "INFO_DEFAULT",
                                "INFO_INVERSE",
                                "INHERIT",
                            ]);
                            n.ICON_COLORS = c;
                            n.TYPOGRAPHY = { H1: "h1", H2: "h2", H3: "h3", H4: "h4", H5: "h5", H6: "h6", H7: "h7", H8: "h8", H9: "h9", Paragraph: "p" };
                            n.TEXT = {
                                DISPLAY_MD: "display-md",
                                HEADING_LG: "heading-lg",
                                HEADING_MD: "heading-md",
                                HEADING_SM: "heading-sm",
                                BODY_LG: "body-lg-medium",
                                BODY_MD: "body-md",
                                BODY_SM: "body-sm",
                                BODY_XS: "body-xs",
                                INHERIT: "inherit",
                            };
                            const u = "none",
                                l = { XXS: "xxs", XS: "xs", SM: "sm", MD: "md", LG: "lg", XL: "xl", AUTO: "auto", NONE: u };
                            n.SIZES = l;
                            const d = { DASHED: "dashed", SOLID: "solid", DOTTED: "dotted", DOUBLE: "double", NONE: u };
                            n.BORDER_STYLE = d;
                            const E = { XS: l.XS, SM: l.SM, MD: l.MD, LG: l.LG, XL: l.XL, NONE: u, PILL: "pill" };
                            n.BORDER_RADIUS = E;
                            const T = "flex-end",
                                _ = "flex-start",
                                A = "center",
                                S = { FLEX_START: _, FLEX_END: T, CENTER: A, BASELINE: "baseline", STRETCH: "stretch" };
                            n.ALIGN_ITEMS = S;
                            const m = { FLEX_START: _, FLEX_END: T, CENTER: A, SPACE_AROUND: "space-around", SPACE_BETWEEN: "space-between", SPACE_EVENLY: "space-evenly" };
                            n.JUSTIFY_CONTENT = m;
                            n.FLEX_DIRECTION = { ROW: "row", ROW_REVERSE: "row-reverse", COLUMN: "column", COLUMN_REVERSE: "column-reverse" };
                            n.FLEX_WRAP = { WRAP: "wrap", WRAP_REVERSE: "wrap-reverse", NO_WRAP: "nowrap" };
                            n.DISPLAY = { BLOCK: "block", FLEX: "flex", GRID: "grid", INLINE_BLOCK: "inline-block", INLINE: "inline", INLINE_FLEX: "inline-flex", INLINE_GRID: "inline-grid", LIST_ITEM: "list-item", NONE: "none" };
                            const N = {
                                HALF: "1/2",
                                ONE_THIRD: "1/3",
                                TWO_THIRDS: "2/3",
                                ONE_FOURTH: "1/4",
                                TWO_FOURTHS: "2/4",
                                THREE_FOURTHS: "3/4",
                                ONE_FIFTH: "1/5",
                                TWO_FIFTHS: "2/5",
                                THREE_FIFTHS: "3/5",
                                FOUR_FIFTHS: "4/5",
                                ONE_SIXTH: "1/6",
                                TWO_SIXTHS: "2/6",
                                THREE_SIXTHS: "3/6",
                                FOUR_SIXTHS: "4/6",
                                FIVE_SIXTHS: "5/6",
                                ONE_TWELFTH: "1/12",
                                TWO_TWELFTHS: "2/12",
                                THREE_TWELFTHS: "3/12",
                                FOUR_TWELFTHS: "4/12",
                                FIVE_TWELFTHS: "5/12",
                                SIX_TWELFTHS: "6/12",
                                SEVEN_TWELFTHS: "7/12",
                                EIGHT_TWELFTHS: "8/12",
                                NINE_TWELFTHS: "9/12",
                                TEN_TWELFTHS: "10/12",
                                ELEVEN_TWELFTHS: "11/12",
                            };
                            n.FRACTIONS = N;
                            const p = { ...N, SCREEN: "screen", MAX: "max", MIN: "min", FULL: "full" };
                            n.BLOCK_SIZES = p;
                            n.TEXT_ALIGN = { LEFT: "left", CENTER: "center", RIGHT: "right", JUSTIFY: "justify", END: "end" };
                            n.TEXT_TRANSFORM = { UPPERCASE: "uppercase", LOWERCASE: "lowercase", CAPITALIZE: "capitalize" };
                            n.FONT_WEIGHT = { BOLD: "bold", MEDIUM: "medium", NORMAL: "normal" };
                            n.OVERFLOW_WRAP = { BREAK_WORD: "break-word", NORMAL: "normal" };
                            n.FONT_STYLE = { ITALIC: "italic", NORMAL: "normal" };
                            n.SEVERITIES = { DANGER: "danger", WARNING: "warning", INFO: "info", SUCCESS: "success" };
                            n.RESIZE = { NONE: "none", BOTH: "both", HORIZONTAL: "horizontal", VERTICAL: "vertical", INITIAL: "initial", INHERIT: "inherit" };
                            n.BREAKPOINTS = ["base", "sm", "md", "lg"];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5901,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.UNSENDABLE_ASSET_ERROR_KEY = n.TRANSACTION_ERROR_KEY = n.INVALID_ASSET_TYPE = n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY = n.INSUFFICIENT_FUNDS_ERROR_KEY = n.GAS_PRICE_FETCH_FAILURE_ERROR_KEY = n.GAS_PRICE_EXCESSIVE_ERROR_KEY = n.GAS_LIMIT_TOO_LOW_ERROR_KEY = n.ETH_GAS_PRICE_FETCH_WARNING_KEY = void 0);
                            n.INSUFFICIENT_FUNDS_ERROR_KEY = "insufficientFunds";
                            n.GAS_LIMIT_TOO_LOW_ERROR_KEY = "gasLimitTooLow";
                            n.TRANSACTION_ERROR_KEY = "transactionError";
                            n.ETH_GAS_PRICE_FETCH_WARNING_KEY = "ethGasPriceFetchWarning";
                            n.GAS_PRICE_FETCH_FAILURE_ERROR_KEY = "gasPriceFetchFailed";
                            n.GAS_PRICE_EXCESSIVE_ERROR_KEY = "gasPriceExcessive";
                            n.UNSENDABLE_ASSET_ERROR_KEY = "unsendableAsset";
                            n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY = "insufficientFundsForGas";
                            n.INVALID_ASSET_TYPE = "invalidAssetType";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5904,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.VIEW_QUOTE_ROUTE = n.UNLOCK_ROUTE = n.TOKEN_DETAILS = n.SWAPS_ROUTE = n.SWAPS_MAINTENANCE_ROUTE = n.SWAPS_ERROR_ROUTE = n.SNAPS_VIEW_ROUTE = n.SNAPS_LIST_ROUTE = n.SMART_TRANSACTION_STATUS_ROUTE = n.SIGNATURE_REQUEST_PATH = n.SETTINGS_ROUTE = n.SEND_ROUTE = n.SECURITY_ROUTE = n.REVEAL_SEED_ROUTE = n.RESTORE_VAULT_ROUTE = n.PATH_NAME_MAP = n.ONBOARDING_WELCOME_ROUTE = n.ONBOARDING_UNLOCK_ROUTE = n.ONBOARDING_SECURE_YOUR_WALLET_ROUTE = n.ONBOARDING_ROUTE = n.ONBOARDING_REVIEW_SRP_ROUTE = n.ONBOARDING_PRIVACY_SETTINGS_ROUTE = n.ONBOARDING_PIN_EXTENSION_ROUTE = n.ONBOARDING_METAMETRICS = n.ONBOARDING_IMPORT_WITH_SRP_ROUTE = n.ONBOARDING_IMPORT_MOBILE_ROUTE = n.ONBOARDING_HELP_US_IMPROVE_ROUTE = n.ONBOARDING_CREATE_PASSWORD_ROUTE = n.ONBOARDING_CONFIRM_SRP_ROUTE = n.ONBOARDING_COMPLETION_ROUTE = n.NEW_ACCOUNT_ROUTE = n.NETWORKS_ROUTE = n.NETWORKS_FORM_ROUTE = n.MOBILE_SYNC_ROUTE = n.LOCK_ROUTE = n.LOADING_QUOTES_ROUTE = n.INITIALIZE_WELCOME_ROUTE = n.INITIALIZE_UNLOCK_ROUTE = n.INITIALIZE_SELECT_ACTION_ROUTE = n.INITIALIZE_SEED_PHRASE_ROUTE = n.INITIALIZE_SEED_PHRASE_INTRO_ROUTE = n.INITIALIZE_ROUTE = n.INITIALIZE_METAMETRICS_OPT_IN_ROUTE = n.INITIALIZE_IMPORT_WITH_SEED_PHRASE_ROUTE = n.INITIALIZE_END_OF_FLOW_ROUTE = n.INITIALIZE_CREATE_PASSWORD_ROUTE = n.INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE = n.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE = n.IMPORT_TOKEN_ROUTE = n.IMPORT_ACCOUNT_ROUTE = n.GENERAL_ROUTE = n.EXPERIMENTAL_ROUTE = n.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH = n.DEFAULT_ROUTE = n.DECRYPT_MESSAGE_REQUEST_PATH = n.CONTACT_VIEW_ROUTE = n.CONTACT_LIST_ROUTE = n.CONTACT_EDIT_ROUTE = n.CONTACT_ADD_ROUTE = n.CONNECT_ROUTE = n.CONNECT_HARDWARE_ROUTE = n.CONNECT_CONFIRM_PERMISSIONS_ROUTE = n.CONNECTED_ROUTE = n.CONNECTED_ACCOUNTS_ROUTE = n.CONFIRM_TRANSFER_FROM_PATH = n.CONFIRM_TRANSACTION_ROUTE = n.CONFIRM_TOKEN_METHOD_PATH = n.CONFIRM_SET_APPROVAL_FOR_ALL_PATH = n.CONFIRM_SEND_TOKEN_PATH = n.CONFIRM_SEND_ETHER_PATH = n.CONFIRM_SAFE_TRANSFER_FROM_PATH = n.CONFIRM_IMPORT_TOKEN_ROUTE = n.CONFIRM_DEPLOY_CONTRACT_PATH = n.CONFIRM_APPROVE_PATH = n.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE = n.CONFIRMATION_V_NEXT_ROUTE = n.BUILD_QUOTE_ROUTE = n.AWAITING_SWAP_ROUTE = n.AWAITING_SIGNATURES_ROUTE = n.ASSET_ROUTE = n.ALERTS_ROUTE = n.ADVANCED_ROUTE = n.ADD_POPULAR_CUSTOM_NETWORK = n.ADD_NETWORK_ROUTE = n.ADD_COLLECTIBLE_ROUTE = n.ABOUT_US_ROUTE = void 0);
                            n.DEFAULT_ROUTE = "/";
                            const r = "/unlock";
                            n.UNLOCK_ROUTE = r;
                            const a = "/lock";
                            n.LOCK_ROUTE = a;
                            const s = "/asset";
                            n.ASSET_ROUTE = s;
                            const o = "/settings";
                            n.SETTINGS_ROUTE = o;
                            const i = "/settings/general";
                            n.GENERAL_ROUTE = i;
                            const c = "/settings/advanced";
                            n.ADVANCED_ROUTE = c;
                            const u = "/settings/experimental";
                            n.EXPERIMENTAL_ROUTE = u;
                            const l = "/settings/security";
                            n.SECURITY_ROUTE = l;
                            const d = "/settings/about-us";
                            n.ABOUT_US_ROUTE = d;
                            const E = "/settings/alerts";
                            n.ALERTS_ROUTE = E;
                            const T = "/settings/networks";
                            n.NETWORKS_ROUTE = T;
                            const _ = "/settings/networks/form";
                            n.NETWORKS_FORM_ROUTE = _;
                            const A = "/settings/networks/add-network";
                            n.ADD_NETWORK_ROUTE = A;
                            const S = "/settings/networks/add-popular-custom-network";
                            n.ADD_POPULAR_CUSTOM_NETWORK = S;
                            n.SNAPS_LIST_ROUTE = "/settings/snaps-list";
                            n.SNAPS_VIEW_ROUTE = "/settings/snaps-view";
                            const m = "/settings/contact-list";
                            n.CONTACT_LIST_ROUTE = m;
                            const N = "/settings/contact-list/edit-contact";
                            n.CONTACT_EDIT_ROUTE = N;
                            const p = "/settings/contact-list/add-contact";
                            n.CONTACT_ADD_ROUTE = p;
                            const I = "/settings/contact-list/view-contact";
                            n.CONTACT_VIEW_ROUTE = I;
                            const f = "/seed";
                            n.REVEAL_SEED_ROUTE = f;
                            const O = "/mobile-sync";
                            n.MOBILE_SYNC_ROUTE = O;
                            const R = "/restore-vault";
                            n.RESTORE_VAULT_ROUTE = R;
                            const g = "/import-token";
                            n.IMPORT_TOKEN_ROUTE = g;
                            const C = "/confirm-import-token";
                            n.CONFIRM_IMPORT_TOKEN_ROUTE = C;
                            const h = "/confirm-add-suggested-token";
                            n.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE = h;
                            const P = "/new-account";
                            n.NEW_ACCOUNT_ROUTE = P;
                            const D = "/new-account/import";
                            n.IMPORT_ACCOUNT_ROUTE = D;
                            const L = "/new-account/connect";
                            n.CONNECT_HARDWARE_ROUTE = L;
                            const v = "/send";
                            n.SEND_ROUTE = v;
                            const y = "/token-details";
                            n.TOKEN_DETAILS = y;
                            const M = "/connect";
                            n.CONNECT_ROUTE = M;
                            const U = "/confirm-permissions";
                            n.CONNECT_CONFIRM_PERMISSIONS_ROUTE = U;
                            const w = "/connected";
                            n.CONNECTED_ROUTE = w;
                            const b = "/connected/accounts";
                            n.CONNECTED_ACCOUNTS_ROUTE = b;
                            n.SWAPS_ROUTE = "/swaps";
                            const k = "/swaps/build-quote";
                            n.BUILD_QUOTE_ROUTE = k;
                            const x = "/swaps/view-quote";
                            n.VIEW_QUOTE_ROUTE = x;
                            const H = "/swaps/loading-quotes";
                            n.LOADING_QUOTES_ROUTE = H;
                            n.AWAITING_SIGNATURES_ROUTE = "/swaps/awaiting-signatures";
                            n.SMART_TRANSACTION_STATUS_ROUTE = "/swaps/smart-transaction-status";
                            const G = "/swaps/awaiting-swap";
                            n.AWAITING_SWAP_ROUTE = G;
                            const F = "/swaps/swaps-error";
                            n.SWAPS_ERROR_ROUTE = F;
                            n.SWAPS_MAINTENANCE_ROUTE = "/swaps/maintenance";
                            n.ADD_COLLECTIBLE_ROUTE = "/add-collectible";
                            const B = "/initialize";
                            n.INITIALIZE_ROUTE = B;
                            const W = "/initialize/welcome";
                            n.INITIALIZE_WELCOME_ROUTE = W;
                            const Y = "/initialize/unlock";
                            n.INITIALIZE_UNLOCK_ROUTE = Y;
                            const K = "/initialize/create-password";
                            n.INITIALIZE_CREATE_PASSWORD_ROUTE = K;
                            const V = "/initialize/create-password/import-with-seed-phrase";
                            n.INITIALIZE_IMPORT_WITH_SEED_PHRASE_ROUTE = V;
                            const j = "/initialize/select-action";
                            n.INITIALIZE_SELECT_ACTION_ROUTE = j;
                            const $ = "/initialize/seed-phrase";
                            n.INITIALIZE_SEED_PHRASE_ROUTE = $;
                            const X = "/initialize/backup-seed-phrase";
                            n.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE = X;
                            const q = "/initialize/seed-phrase-intro";
                            n.INITIALIZE_SEED_PHRASE_INTRO_ROUTE = q;
                            const z = "/initialize/end-of-flow";
                            n.INITIALIZE_END_OF_FLOW_ROUTE = z;
                            const Q = "/initialize/seed-phrase/confirm";
                            n.INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE = Q;
                            const Z = "/initialize/metametrics-opt-in";
                            n.INITIALIZE_METAMETRICS_OPT_IN_ROUTE = Z;
                            n.ONBOARDING_ROUTE = "/onboarding";
                            n.ONBOARDING_REVIEW_SRP_ROUTE = "/onboarding/review-recovery-phrase";
                            n.ONBOARDING_CONFIRM_SRP_ROUTE = "/onboarding/confirm-recovery-phrase";
                            n.ONBOARDING_CREATE_PASSWORD_ROUTE = "/onboarding/create-password";
                            n.ONBOARDING_COMPLETION_ROUTE = "/onboarding/completion";
                            n.ONBOARDING_UNLOCK_ROUTE = "/onboarding/unlock";
                            n.ONBOARDING_HELP_US_IMPROVE_ROUTE = "/onboarding/help-us-improve";
                            n.ONBOARDING_IMPORT_WITH_SRP_ROUTE = "/onboarding/import-with-recovery-phrase";
                            n.ONBOARDING_IMPORT_MOBILE_ROUTE = "/onboarding/import-mobile";
                            n.ONBOARDING_SECURE_YOUR_WALLET_ROUTE = "/onboarding/secure-your-wallet";
                            n.ONBOARDING_PRIVACY_SETTINGS_ROUTE = "/onboarding/privacy-settings";
                            n.ONBOARDING_PIN_EXTENSION_ROUTE = "/onboarding/pin-extension";
                            n.ONBOARDING_WELCOME_ROUTE = "/onboarding/welcome";
                            n.ONBOARDING_METAMETRICS = "/onboarding/metametrics";
                            const J = "/confirm-transaction";
                            n.CONFIRM_TRANSACTION_ROUTE = J;
                            const ee = "/send-ether";
                            n.CONFIRM_SEND_ETHER_PATH = ee;
                            const te = "/send-token";
                            n.CONFIRM_SEND_TOKEN_PATH = te;
                            const ne = "/deploy-contract";
                            n.CONFIRM_DEPLOY_CONTRACT_PATH = ne;
                            const re = "/approve";
                            n.CONFIRM_APPROVE_PATH = re;
                            const ae = "/set-approval-for-all";
                            n.CONFIRM_SET_APPROVAL_FOR_ALL_PATH = ae;
                            const se = "/transfer-from";
                            n.CONFIRM_TRANSFER_FROM_PATH = se;
                            const oe = "/safe-transfer-from";
                            n.CONFIRM_SAFE_TRANSFER_FROM_PATH = oe;
                            const ie = "/token-method";
                            n.CONFIRM_TOKEN_METHOD_PATH = ie;
                            const ce = "/signature-request";
                            n.SIGNATURE_REQUEST_PATH = ce;
                            const ue = "/decrypt-message-request";
                            n.DECRYPT_MESSAGE_REQUEST_PATH = ue;
                            const le = "/encryption-public-key-request";
                            n.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH = le;
                            const de = "/confirmation";
                            n.CONFIRMATION_V_NEXT_ROUTE = de;
                            const Ee = {
                                "/": "Home",
                                [r]: "Unlock Page",
                                [a]: "Lock Page",
                                "/asset/:asset/:id": "Asset Page",
                                [o]: "Settings Page",
                                [i]: "General Settings Page",
                                [c]: "Advanced Settings Page",
                                [u]: "Experimental Settings Page",
                                [l]: "Security Settings Page",
                                [d]: "About Us Page",
                                [E]: "Alerts Settings Page",
                                [T]: "Network Settings Page",
                                [_]: "Network Settings Page Form",
                                [A]: "Add Network From Settings Page Form",
                                [S]: "Add Network From A List Of Popular Custom Networks",
                                [m]: "Contact List Settings Page",
                                [`${N}/:address`]: "Edit Contact Settings Page",
                                [p]: "Add Contact Settings Page",
                                [`${I}/:address`]: "View Contact Settings Page",
                                [f]: "Reveal Secret Recovery Phrase Page",
                                [O]: "Sync With Mobile Page",
                                [R]: "Restore Vault Page",
                                [g]: "Import Token Page",
                                [C]: "Confirm Import Token Page",
                                [h]: "Confirm Add Suggested Token Page",
                                [P]: "New Account Page",
                                [D]: "Import Account Page",
                                [L]: "Connect Hardware Wallet Page",
                                [v]: "Send Page",
                                "/token-details/:address": "Token Details Page",
                                "/connect/:id": "Connect To Site Confirmation Page",
                                "/connect/:id/confirm-permissions": "Grant Connected Site Permissions Confirmation Page",
                                [w]: "Sites Connected To This Account Page",
                                [b]: "Accounts Connected To This Site Page",
                                "/confirm-transaction/:id": "Confirmation Root Page",
                                [J]: "Confirmation Root Page",
                                [de]: "New Confirmation Page",
                                "/confirm-transaction/:id/token-method": "Confirm Token Method Transaction Page",
                                "/confirm-transaction/:id/send-ether": "Confirm Send Ether Transaction Page",
                                "/confirm-transaction/:id/send-token": "Confirm Send Token Transaction Page",
                                "/confirm-transaction/:id/deploy-contract": "Confirm Deploy Contract Transaction Page",
                                "/confirm-transaction/:id/approve": "Confirm Approve Transaction Page",
                                "/confirm-transaction/:id/set-approval-for-all": "Confirm Set Approval For All Transaction Page",
                                "/confirm-transaction/:id/transfer-from": "Confirm Transfer From Transaction Page",
                                "/confirm-transaction/:id/safe-transfer-from": "Confirm Safe Transfer From Transaction Page",
                                "/confirm-transaction/:id/signature-request": "Signature Request Page",
                                "/confirm-transaction/:id/decrypt-message-request": "Decrypt Message Request Page",
                                "/confirm-transaction/:id/encryption-public-key-request": "Encryption Public Key Request Page",
                                [B]: "Initialization Page",
                                [W]: "Install Welcome Page",
                                [Y]: "Initialization Unlock page",
                                [K]: "Initialization Create Password Page",
                                [V]: "Initialization Import Account With Secret Recovery Phrase Page",
                                [j]: "Initialization Choose Restore or New Account Page",
                                [$]: "Initialization Secret Recovery Phrase Page",
                                [X]: "Initialization Backup Secret Recovery Phrase Page",
                                [q]: "Initialization Secret Recovery Phrase Intro Page",
                                [z]: "End of Initialization Page",
                                [Q]: "Initialization Confirm Secret Recovery Phrase Page",
                                [Z]: "MetaMetrics Opt In Page",
                                [k]: "Swaps Build Quote Page",
                                [x]: "Swaps View Quotes Page",
                                [H]: "Swaps Loading Quotes Page",
                                [G]: "Swaps Awaiting Swaps Page",
                                [F]: "Swaps Error Page",
                            };
                            n.PATH_NAME_MAP = Ee;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5906,
            { "../../../shared/constants/transaction": 5340 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.TOKEN_CATEGORY_HASH = n.PRIORITY_STATUS_HASH = n.PENDING_STATUS_HASH = void 0);
                            var r = e("../../../shared/constants/transaction");
                            const a = { [r.TRANSACTION_STATUSES.UNAPPROVED]: !0, [r.TRANSACTION_STATUSES.APPROVED]: !0, [r.TRANSACTION_STATUSES.SUBMITTED]: !0, [r.TRANSACTION_STATUSES.PENDING]: !0 };
                            n.PENDING_STATUS_HASH = a;
                            const s = { ...a, [r.TRANSACTION_STATUSES.CONFIRMED]: !0 };
                            n.PRIORITY_STATUS_HASH = s;
                            const o = {
                                [r.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE]: !0,
                                [r.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL]: !0,
                                [r.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER]: !0,
                                [r.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM]: !0,
                            };
                            n.TOKEN_CATEGORY_HASH = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5907,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = {
                                ADD_CUSTOM_TOKENS: "https://metamask.zendesk.com/hc/en-us/articles/360015489031",
                                ADD_MISSING_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015489271",
                                BASIC_SAFETY: "https://metamask.zendesk.com/hc/en-us/articles/360015489591-Basic-Safety-Tips",
                                CUSTOMIZE_NONCE: "https://metamask.zendesk.com/hc/en-us/articles/7417499333531-How-to-customize-a-transaction-nonce",
                                HARDWARE_CONNECTION: "https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet",
                                IMPORT_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015489331",
                                IMPORTED_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015289932",
                                INFURA_BLOCKAGE: "https://metamask.zendesk.com/hc/en-us/articles/360059386712",
                                LEGACY_WEB3: "https://metamask.zendesk.com/hc/en-us/articles/360053147012",
                                NFT_TOKENS: "https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-MetaMask-wallet",
                                PASSWORD_ARTICLE: "https://metamask.zendesk.com/hc/en-us/articles/4404722782107",
                                SECRET_RECOVERY_PHRASE: "https://metamask.zendesk.com/hc/en-us/articles/360060826432-What-is-a-Secret-Recovery-Phrase-and-how-to-keep-your-crypto-wallet-secure",
                                SPEEDUP_CANCEL: "https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction",
                                TOKEN_SAFETY_PRACTICES: "https://metamask.zendesk.com/hc/en-us/articles/4403988839451",
                                UNKNOWN_NETWORK: "https://metamask.zendesk.com/hc/en-us/articles/4417500466971",
                                USER_GUIDE_CUSTOM_NETWORKS: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995",
                                USER_GUIDE_DAPPS: "https://metamask.zendesk.com/hc/en-us/articles/4405506066331-User-guide-Dapps",
                                USER_GUIDE_GAS: "https://metamask.zendesk.com/hc/en-us/articles/4404600179227-User-Guide-Gas",
                                VERIFY_CUSTOM_NETWORK: "https://metamask.zendesk.com/hc/en-us/articles/360057142392",
                            };
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5917,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getBuildSpecificAsset = function (e) {
                                    if (!r.main || !Object.keys(r.main).includes(e)) return console.error(`Cannot find asset "${e}" for build "main", returning main build asset.`), r.main[e];
                                    return r.main[e];
                                }),
                                (n.isBeta = function () {
                                    return !1;
                                });
                            const r = { main: { foxMeshJson: undefined } };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5919,
            { "../../../app/scripts/lib/util": 86, "../../../shared/modules/conversion.utils": 5351, "../../selectors": 6300, "bignumber.js": 1637, "currency-formatter": 1872, "currency-formatter/currencies": 1871 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.addEth = function (...e) {
                                    return e.reduce((e, t) => (0, c.addCurrencies)(e, t, { toNumericBase: "dec", numberOfDecimals: 6, aBase: 10, bBase: 10 }));
                                }),
                                (n.addFiat = function (...e) {
                                    return e.reduce((e, t) => (0, c.addCurrencies)(e, t, { toNumericBase: "dec", numberOfDecimals: 2, aBase: 10, bBase: 10 }));
                                }),
                                (n.areDappSuggestedAndTxParamGasFeesTheSame = function (e = {}) {
                                    const { txParams: t, dappSuggestedGasFees: n } = e,
                                        { gasPrice: r, maxFeePerGas: a, maxPriorityFeePerGas: s } = t || {},
                                        { gasPrice: o, maxFeePerGas: i, maxPriorityFeePerGas: c } = n || {},
                                        u = !o && !i && !c;
                                    if ((!r && !a && !s) || u) return !1;
                                    const l = r && r === o,
                                        d = [a, s].every((e) => e === o),
                                        E = a && a === i && s === c;
                                    return l || d || E;
                                }),
                                (n.convertTokenToFiat = function ({ value: e, fromCurrency: t = "ETH", toCurrency: n, conversionRate: r, contractExchangeRate: a }) {
                                    const s = r * a;
                                    return (0, c.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "dec", fromCurrency: t, toCurrency: n, numberOfDecimals: 2, conversionRate: s });
                                }),
                                (n.formatCurrency = function (e, t) {
                                    const n = t.toUpperCase();
                                    return a.default.find((e) => e.code === n) ? r.default.format(Number(e), { code: n, style: "currency" }) : e;
                                }),
                                (n.getHexGasTotal = function ({ gasLimit: e, gasPrice: t }) {
                                    return (0, o.addHexPrefix)((0, c.multiplyCurrencies)(e || "0x0", t || "0x0", { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 }));
                                }),
                                (n.getTransactionFee = function ({ value: e, fromCurrency: t = "ETH", toCurrency: n, conversionRate: r, numberOfDecimals: a }) {
                                    return (0, c.conversionUtil)(e, { fromNumericBase: "BN", toNumericBase: "dec", fromDenomination: "WEI", fromCurrency: t, toCurrency: n, numberOfDecimals: a, conversionRate: r });
                                }),
                                (n.getValueFromWeiHex = function ({ value: e, fromCurrency: t = "ETH", toCurrency: n, conversionRate: r, numberOfDecimals: a, toDenomination: s }) {
                                    return (0, c.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromCurrency: t, toCurrency: n, numberOfDecimals: a, fromDenomination: "WEI", toDenomination: s, conversionRate: r });
                                }),
                                (n.hasUnconfirmedTransactions = function (e) {
                                    return (0, i.unconfirmedTransactionsCountSelector)(e) > 0;
                                }),
                                (n.hexGreaterThan = function (e, t) {
                                    return (0, c.conversionGreaterThan)({ value: e, fromNumericBase: "hex" }, { value: t, fromNumericBase: "hex" });
                                }),
                                (n.increaseLastGasPrice = function (e) {
                                    return (0, o.addHexPrefix)((0, c.multiplyCurrencies)(e || "0x0", 1.1, { multiplicandBase: 16, multiplierBase: 10, toNumericBase: "hex" }));
                                }),
                                (n.roundExponential = function (e) {
                                    const t = new s.default(e);
                                    return t.e > 20 ? t.toPrecision(4) : e;
                                });
                            var r = u(e("currency-formatter")),
                                a = u(e("currency-formatter/currencies")),
                                s = u(e("bignumber.js")),
                                o = e("../../../app/scripts/lib/util"),
                                i = e("../../selectors"),
                                c = e("../../../shared/modules/conversion.utils");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5920,
            { "../../../app/scripts/lib/util": 86, "../../../shared/modules/conversion.utils": 5351, "../constants/common": 5898, "./confirm-tx.util": 5919 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.addHexWEIsToDec = function (e, t) {
                                    return (0, s.addCurrencies)(e, t, { aBase: 16, bBase: 16, fromDenomination: "WEI", numberOfDecimals: 6 });
                                }),
                                (n.addHexes = u),
                                (n.bnToHex = function (e) {
                                    return (0, a.addHexPrefix)(e.toString(16));
                                }),
                                (n.decETHToDecWEI = function (e) {
                                    return (0, s.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "dec", fromDenomination: "ETH", toDenomination: "WEI" });
                                }),
                                (n.decEthToConvertedCurrency = c),
                                (n.decGWEIToHexWEI = function (e) {
                                    return (0, s.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "hex", fromDenomination: "GWEI", toDenomination: "WEI" });
                                }),
                                (n.decWEIToDecETH = function (e) {
                                    return (0, s.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "dec", fromDenomination: "WEI", toDenomination: "ETH" });
                                }),
                                (n.getEthConversionFromWeiHex = function ({ value: e, fromCurrency: t = r.ETH, conversionRate: n, numberOfDecimals: a = 6 }) {
                                    const s = [t, r.GWEI, r.WEI];
                                    let o;
                                    for (let r = 0; r < s.length; r++) {
                                        const c = i({ value: e, conversionRate: n, fromCurrency: t, toCurrency: t, numberOfDecimals: a, toDenomination: s[r] });
                                        if ("0" !== c || r === s.length - 1) {
                                            o = `${c} ${s[r]}`;
                                            break;
                                        }
                                    }
                                    return o;
                                }),
                                (n.getValueFromWeiHex = i),
                                (n.getWeiHexFromDecimalValue = function ({ value: e, fromCurrency: t, conversionRate: n, fromDenomination: a, invertConversionRate: o }) {
                                    return (0, s.conversionUtil)(e, {
                                        fromNumericBase: "dec",
                                        toNumericBase: "hex",
                                        toCurrency: r.ETH,
                                        fromCurrency: t,
                                        conversionRate: n,
                                        invertConversionRate: o,
                                        fromDenomination: a,
                                        toDenomination: r.WEI,
                                    });
                                }),
                                (n.hexWEIToDecETH = function (e) {
                                    return (0, s.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", toDenomination: "ETH" });
                                }),
                                (n.subtractHexWEIsToDec = function (e, t) {
                                    return (0, s.subtractCurrencies)(e, t, { aBase: 16, bBase: 16, fromDenomination: "WEI", numberOfDecimals: 6 });
                                }),
                                (n.subtractHexes = function (e, t) {
                                    return (0, s.subtractCurrencies)(e, t, { aBase: 16, bBase: 16, toNumericBase: "hex", numberOfDecimals: 6 });
                                }),
                                (n.sumHexWEIs = l),
                                (n.sumHexWEIsToRenderableFiat = function (e, t, n) {
                                    const r = d(e, t, n);
                                    return (0, o.formatCurrency)(r, t);
                                }),
                                (n.sumHexWEIsToUnformattedFiat = d);
                            var r = e("../constants/common"),
                                a = e("../../../app/scripts/lib/util"),
                                s = e("../../../shared/modules/conversion.utils"),
                                o = e("./confirm-tx.util");
                            function i({ value: e, fromCurrency: t = r.ETH, toCurrency: n, conversionRate: a, numberOfDecimals: o, toDenomination: i }) {
                                return (0, s.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromCurrency: t, toCurrency: n, numberOfDecimals: o, fromDenomination: r.WEI, toDenomination: i, conversionRate: a });
                            }
                            function c(e, t, n) {
                                return (0, s.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "dec", fromCurrency: "ETH", toCurrency: t, numberOfDecimals: 2, conversionRate: n });
                            }
                            function u(e, t) {
                                return (0, s.addCurrencies)(e, t, { aBase: 16, bBase: 16, toNumericBase: "hex", numberOfDecimals: 6 });
                            }
                            function l(e) {
                                return e.filter(Boolean).reduce(u);
                            }
                            function d(e, t, n) {
                                return c(i({ value: l(e), toCurrency: "ETH", numberOfDecimals: 4 }), t, n);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5922,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.formatETHFee = function (e, t = "ETH") {
                                    return `${e} ${t}`;
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5925,
            { "../../../shared/modules/fetch-with-timeout": 5352, "@sentry/browser": 1229, loglevel: 4707, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.fetchLocale = async function (e) {
                                    try {
                                        const t = await c(`./_locales/${e}/messages.json`);
                                        return await t.json();
                                    } catch (t) {
                                        return a.default.error(`failed to fetch ${e} locale because of ${t}`), {};
                                    }
                                }),
                                (n.getMessage = void 0),
                                (n.loadRelativeTimeFormatLocaleData = async function (e) {
                                    const t = e.split("_")[0];
                                    if (Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && !E.has(t)) {
                                        const e = await (async function (e) {
                                            const t = await c(`./intl/${e}/relative-time-format-data.json`);
                                            return await t.json();
                                        })(t);
                                        Intl.RelativeTimeFormat.__addLocaleData(e);
                                    }
                                });
                            var r = i(e("react")),
                                a = i(e("loglevel")),
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = o(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(r, s, i) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("@sentry/browser"));
                            function o(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (o = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const c = (0, i(e("../../../shared/modules/fetch-with-timeout")).default)(),
                                u = {},
                                l = {},
                                d = {};
                            n.getMessage = (e, t, n, o) => {
                                if (!t) return null;
                                if (!t[n])
                                    return (
                                        "en" === e
                                            ? l[n] || ((l[n] = new Error(`Unable to find value of key "${n}" for locale "${e}"`)), s.captureException(l[n]), a.default.error(l[n]))
                                            : (u[e] && u[e][n]) || (u[e] || (u[e] = {}), (u[e][n] = !0), a.default.warn(`Translator - Unable to find value of key "${n}" for locale "${e}"`)),
                                        null
                                    );
                                let i = t[n].message;
                                const c = Boolean(o && o.length),
                                    E = c && o.some((e) => null !== e && ("function" == typeof e || "object" == typeof e));
                                if (c) {
                                    const t = i.split(/(\$\d)/gu).map((t) => {
                                        var r;
                                        const i = t.match(/\$(\d)/u);
                                        if (!i) return t;
                                        const c = Number(i[1]) - 1;
                                        if (!((null !== o[c] && o[c] !== undefined) || (null !== (r = d[e]) && void 0 !== r && r[n]))) {
                                            d[e] || (d[e] = {}), (d[e][n] = !0);
                                            const t = new Error(`Insufficient number of substitutions for key "${n}" with locale "${e}"`);
                                            a.default.error(t), s.captureException(t);
                                        }
                                        return o[c];
                                    });
                                    i = E ? r.default.createElement("span", null, " ", t, " ") : t.join("");
                                }
                                return i;
                            };
                            const E = new Set();
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5929,
            { "../../../shared/constants/network": 5333 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.formatMoonpaySymbol = void 0);
                            var r = e("../../../shared/constants/network");
                            n.formatMoonpaySymbol = (e, t = r.CHAIN_IDS.MAINNET) => {
                                if (!e) return e;
                                let n = e;
                                var a;
                                t === r.CHAIN_IDS.POLYGON || t === r.CHAIN_IDS.BSC
                                    ? (n = `${n}_${null === r.BUYABLE_CHAINS_MAP || void 0 === r.BUYABLE_CHAINS_MAP || null === (a = r.BUYABLE_CHAINS_MAP[t]) || void 0 === a ? void 0 : a.network.toUpperCase()}`)
                                    : t === r.CHAIN_IDS.AVALANCHE && (n = `${n}_CCHAIN`);
                                return n;
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5930,
            { "../../../../shared/modules/hexstring-utils": 5354, "@ethereumjs/common": 323, "@ethereumjs/tx": 328, "ethereumjs-util": 2107, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e) {
                                    const t = (function (e) {
                                            return { ...(0, r.omit)(e.txParams, "gas"), gasLimit: e.txParams.gas };
                                        })(e),
                                        n = (function (e) {
                                            return s.default.forCustomChain(s.Chain.Mainnet, {
                                                chainId: new a.BN((0, i.stripHexPrefix)(e.chainId), 16),
                                                networkId: new a.BN(e.metamaskNetworkId, 10),
                                                defaultHardfork: s.Hardfork.SpuriousDragon,
                                            });
                                        })(e);
                                    return o.TransactionFactory.fromTxData(t, { common: n });
                                });
                            var r = e("lodash"),
                                a = e("ethereumjs-util"),
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("@ethereumjs/common")),
                                o = e("@ethereumjs/tx"),
                                i = e("../../../../shared/modules/hexstring-utils");
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5931,
            { "./buildUnserializedTransaction": 5930, "@eth-optimism/contracts/dist/contract-defs": 267, "@eth-optimism/contracts/dist/predeploys": 268, ethers: 2131 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = async function (e, t) {
                                    var n;
                                    const r = (function (e) {
                                            const t = (0, s.getContractFactory)("OVM_GasPriceOracle").attach(o.predeploys.OVM_GasPriceOracle),
                                                n = JSON.parse(t.interface.format(a.utils.FormatTypes.json));
                                            return e.contract(n).at(t.address);
                                        })(e),
                                        c = (0, i.default)(t).serialize(),
                                        u = await r.getL1Fee(c);
                                    return null == u || null === (n = u[0]) || void 0 === n ? void 0 : n.toString(16);
                                });
                            var r,
                                a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("ethers")),
                                s = e("@eth-optimism/contracts/dist/contract-defs"),
                                o = e("@eth-optimism/contracts/dist/predeploys"),
                                i = (r = e("./buildUnserializedTransaction")) && r.__esModule ? r : { default: r };
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5934,
            {
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/metamask-controller-utils": 5343,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "../../../shared/modules/string-utils": 5361,
                "../../../shared/modules/transaction.utils": 5363,
                "../../store/actions": 6307,
                "./confirm-tx.util": 5919,
                "./util": 5937,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getAssetDetails = async function (e, t, n, r) {
                                    var s, E, T, _, A, S, m;
                                    const N = (0, c.parseStandardTokenTransactionData)(n);
                                    if (!N) throw new Error("Unable to detect valid token data");
                                    let f = null !== (s = null === (E = I(N)) || void 0 === E ? void 0 : E.toString()) && void 0 !== s ? s : (0, l.getTokenValueParam)(N);
                                    const O = p(N);
                                    let R;
                                    if (null != r && r.length && f) {
                                        const t = r.find(({ address: t, tokenId: n }) => (0, i.isEqualCaseInsensitive)(e, t) && n === f);
                                        if (t) return { toAddress: O, ...t };
                                    }
                                    try {
                                        R = await (0, o.getTokenStandardAndDetails)(e, t, f);
                                    } catch (e) {
                                        return a.default.warn(e), { toAddress: O, tokenId: f };
                                    }
                                    const g = N && (null === (T = R) || void 0 === T ? void 0 : T.decimals) && (0, d.calcTokenAmount)((0, l.getTokenValueParam)(N), null === (_ = R) || void 0 === _ ? void 0 : _.decimals).toString(10),
                                        C = (null === (A = R) || void 0 === A ? void 0 : A.decimals) && Number(null === (S = R.decimals) || void 0 === S ? void 0 : S.toString(10));
                                    (null === (m = R) || void 0 === m ? void 0 : m.standard) === u.ERC20 && (f = undefined);
                                    return { tokenAmount: g, toAddress: O, decimals: C, tokenId: f, ...R };
                                }),
                                (n.getSymbolAndDecimals = N),
                                (n.getTokenAddressParam = p),
                                (n.getTokenApprovedParam = function (e = {}) {
                                    var t;
                                    return null == e || null === (t = e.args) || void 0 === t ? void 0 : t._approved;
                                }),
                                (n.getTokenFiatAmount = function (e, t, n, r, a, o = !0, i = !1) {
                                    if (t <= 0 || !e || r === undefined) return undefined;
                                    const c = (0, s.multiplyCurrencies)(e, t, { multiplicandBase: 10, multiplierBase: 10 }),
                                        u = (0, s.conversionUtil)(r, { fromNumericBase: "dec", fromCurrency: a, toCurrency: n.toUpperCase(), numberOfDecimals: 2, conversionRate: c });
                                    let l;
                                    l = i ? (0, T.formatCurrency)(u, n) : o ? `${(0, T.formatCurrency)(u, n)} ${n.toUpperCase()}` : u;
                                    return l;
                                }),
                                (n.getTokenIdParam = I),
                                (n.getTokenMetadata = A),
                                (n.tokenInfoGetter = function () {
                                    const e = {};
                                    return async (t, n) => (e[t] || (e[t] = await N(t, n)), e[t]);
                                });
                            var r,
                                a = (r = e("loglevel")) && r.__esModule ? r : { default: r },
                                s = e("../../../shared/modules/conversion.utils"),
                                o = e("../../store/actions"),
                                i = e("../../../shared/modules/string-utils"),
                                c = e("../../../shared/modules/transaction.utils"),
                                u = e("../../../shared/constants/transaction"),
                                l = e("../../../shared/lib/metamask-controller-utils"),
                                d = e("../../../shared/lib/transactions-controller-utils"),
                                E = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = _(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("./util")),
                                T = e("./confirm-tx.util");
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (_ = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function A(e, t) {
                                return e && t[e.toLowerCase()];
                            }
                            async function S(e, t) {
                                let n = await (async function (e) {
                                    const t = E.getContractAtAddress(e);
                                    try {
                                        return (await t.symbol())[0];
                                    } catch (t) {
                                        return a.default.warn(`symbol() call for token at address ${e} resulted in error:`, t), undefined;
                                    }
                                })(e);
                                if (!n) {
                                    const r = A(e, t);
                                    r && (n = r.symbol);
                                }
                                return n;
                            }
                            async function m(e, t) {
                                let n = await (async function (e) {
                                    const t = E.getContractAtAddress(e);
                                    try {
                                        const e = (await t.decimals())[0];
                                        return null == e ? void 0 : e.toString();
                                    } catch (t) {
                                        return a.default.warn(`decimals() call for token at address ${e} resulted in error:`, t), undefined;
                                    }
                                })(e);
                                if (!n || "0" === n) {
                                    const a = A(e, t);
                                    var r;
                                    if (a) n = null === (r = a.decimals) || void 0 === r ? void 0 : r.toString();
                                }
                                return n;
                            }
                            async function N(e, t) {
                                let n, r;
                                try {
                                    (n = await S(e, t)), (r = await m(e, t));
                                } catch (t) {
                                    a.default.warn(`symbol() and decimal() calls for token at address ${e} resulted in error:`, t);
                                }
                                return { symbol: n || "", decimals: r };
                            }
                            function p(e = {}) {
                                var t, n, r;
                                const a =
                                    (null == e || null === (t = e.args) || void 0 === t ? void 0 : t._to) ||
                                    (null == e || null === (n = e.args) || void 0 === n ? void 0 : n.to) ||
                                    (null == e || null === (r = e.args) || void 0 === r ? void 0 : r[0]);
                                return null == a ? void 0 : a.toString().toLowerCase();
                            }
                            function I(e = {}) {
                                var t, n, r, a, s;
                                return null !== (t = null == e || null === (n = e.args) || void 0 === n || null === (r = n._tokenId) || void 0 === r ? void 0 : r.toString()) && void 0 !== t
                                    ? t
                                    : null == e || null === (a = e.args) || void 0 === a || null === (s = a.id) || void 0 === s
                                    ? void 0
                                    : s.toString();
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5935,
            {
                "../../../app/scripts/lib/util": 86,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/fetch-with-cache": 5342,
                "../../../shared/modules/contract-utils": 5350,
                "../../../shared/modules/conversion.utils": 5351,
                "eth-method-registry": 2024,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getFourBytePrefix = function (e = "") {
                                    const t = (0, s.addHexPrefix)(e);
                                    return t.slice(0, 10);
                                }),
                                (n.getLatestSubmittedTxWithNonce = function (e = [], t = "0x0") {
                                    if (!e.length) return {};
                                    return e.reduce((e, n) => {
                                        const { submittedTime: r, txParams: { nonce: a } = {} } = n;
                                        return a === t ? (e.submittedTime ? (r > e.submittedTime ? n : e) : n) : e;
                                    }, {});
                                }),
                                (n.getMethodDataAsync = async function (e) {
                                    try {
                                        const t = await (async function (e) {
                                            const t = await (0, u.default)(`https://www.4byte.directory/api/v1/signatures/?hex_signature=${e}`, { referrerPolicy: "no-referrer-when-downgrade", body: null, method: "GET", mode: "cors" });
                                            return t.results.sort((e, t) => (new Date(e.created_at).getTime() < new Date(t.created_at).getTime() ? -1 : 1)), t.results[0].text_signature;
                                        })(e).catch((e) => (a.default.error(e), null));
                                        if ((d || (d = new r.MethodRegistry({ provider: global.ethereumProvider })), !t)) return {};
                                        const n = d.parse(t);
                                        return { name: n.name, params: n.args };
                                    } catch (e) {
                                        return a.default.error(e), {};
                                    }
                                }),
                                (n.getStatusKey = function (e) {
                                    const { txReceipt: { status: t } = {}, type: n, status: r } = e;
                                    if ("0x0" === t) return o.TRANSACTION_STATUSES.FAILED;
                                    if (r === o.TRANSACTION_STATUSES.CONFIRMED && n === o.TRANSACTION_TYPES.CANCEL) return o.TRANSACTION_GROUP_STATUSES.CANCELLED;
                                    return e.status;
                                }),
                                (n.getTransactionTypeTitle = function (e, t, n = "ETH") {
                                    switch (t) {
                                        case o.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER:
                                            return e("transfer");
                                        case o.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM:
                                            return e("transferFrom");
                                        case o.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM:
                                            return e("safeTransferFrom");
                                        case o.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE:
                                            return e("approve");
                                        case o.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL:
                                            return e("setApprovalForAll");
                                        case o.TRANSACTION_TYPES.SIMPLE_SEND:
                                            return e("sendingNativeAsset", [n]);
                                        case o.TRANSACTION_TYPES.CONTRACT_INTERACTION:
                                            return e("contractInteraction");
                                        case o.TRANSACTION_TYPES.DEPLOY_CONTRACT:
                                            return e("contractDeployment");
                                        case o.TRANSACTION_TYPES.SWAP:
                                            return e("swap");
                                        case o.TRANSACTION_TYPES.SWAP_APPROVAL:
                                            return e("swapApproval");
                                        default:
                                            throw new Error(`Unrecognized transaction type: ${t}`);
                                    }
                                }),
                                (n.isLegacyTransaction = function (e) {
                                    return (null == e ? void 0 : e.type) === o.TRANSACTION_ENVELOPE_TYPES.LEGACY;
                                }),
                                (n.isSmartContractAddress = async function (e) {
                                    const { isContractAddress: t } = await (0, c.readAddressAsContract)(global.eth, e);
                                    return t;
                                }),
                                (n.isTokenMethodAction = function (e) {
                                    return [
                                        o.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER,
                                        o.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE,
                                        o.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL,
                                        o.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM,
                                        o.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM,
                                    ].includes(e);
                                }),
                                (n.sumHexes = function (...e) {
                                    const t = e.reduce((e, t) => (0, i.addCurrencies)(e, t, { toNumericBase: "hex", aBase: 16, bBase: 16 }));
                                    return (0, s.addHexPrefix)(t);
                                });
                            var r = e("eth-method-registry"),
                                a = l(e("loglevel")),
                                s = e("../../../app/scripts/lib/util"),
                                o = e("../../../shared/constants/transaction"),
                                i = e("../../../shared/modules/conversion.utils"),
                                c = e("../../../shared/modules/contract-utils"),
                                u = l(e("../../../shared/lib/fetch-with-cache"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            let d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5936,
            { "../../../shared/modules/transaction.utils": 5363, "./util": 5937, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function (e, t, n, r, i, c, u, l) {
                                    a.default.debug("tx-helper called with params:"),
                                        a.default.debug({ unapprovedTxs: e, unapprovedMsgs: t, personalMsgs: n, decryptMsgs: r, encryptionPublicKeyMsgs: i, typedMessages: c, network: u, chainId: l });
                                    const d = u ? (0, o.valuesFor)(e).filter((e) => (0, s.transactionMatchesNetwork)(e, l, u)) : (0, o.valuesFor)(e);
                                    a.default.debug(`tx helper found ${d.length} unapproved txs`);
                                    const E = (0, o.valuesFor)(t);
                                    a.default.debug(`tx helper found ${E.length} unsigned messages`);
                                    let T = d.concat(E);
                                    const _ = (0, o.valuesFor)(n);
                                    a.default.debug(`tx helper found ${_.length} unsigned personal messages`), (T = T.concat(_));
                                    const A = (0, o.valuesFor)(r);
                                    a.default.debug(`tx helper found ${A.length} decrypt requests`), (T = T.concat(A));
                                    const S = (0, o.valuesFor)(i);
                                    a.default.debug(`tx helper found ${S.length} encryptionPublicKey requests`), (T = T.concat(S));
                                    const m = (0, o.valuesFor)(c);
                                    return a.default.debug(`tx helper found ${m.length} unsigned typed messages`), (T = T.concat(m)), (T = T.sort((e, t) => e.time - t.time)), T;
                                });
                            var r,
                                a = (r = e("loglevel")) && r.__esModule ? r : { default: r },
                                s = e("../../../shared/modules/transaction.utils"),
                                o = e("./util");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5937,
            {
                "../../../shared/constants/labels": 5331,
                "../../../shared/constants/network": 5333,
                "../../../shared/modules/conversion.utils": 5351,
                "../../../shared/modules/hexstring-utils": 5354,
                "@metamask/assets-controllers": 977,
                "@metamask/slip44": 1182,
                "bignumber.js": 1637,
                "ethereumjs-util": 2107,
                "human-standard-token-abi": 4452,
                luxon: 4710,
                "punycode/punycode": 4817,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.addressSummary = function (e, t = 10, n = 4, r = !0) {
                                    if (!e) return "";
                                    let a = (0, d.toChecksumHexAddress)(e);
                                    r || (a = (0, d.stripHexPrefix)(a));
                                    return a ? `${a.slice(0, t)}...${a.slice(a.length - n)}` : "...";
                                }),
                                (n.bnGreaterThan = function (e, t) {
                                    if (null === e || e === undefined || null === t || t === undefined) return null;
                                    return new s.default(e, 10).gt(t, 10);
                                }),
                                (n.bnGreaterThanEqualTo = function (e, t) {
                                    if (null === e || e === undefined || null === t || t === undefined) return null;
                                    return new s.default(e, 10).gte(t, 10);
                                }),
                                (n.bnLessThan = function (e, t) {
                                    if (null === e || e === undefined || null === t || t === undefined) return null;
                                    return new s.default(e, 10).lt(t, 10);
                                }),
                                (n.bnLessThanEqualTo = function (e, t) {
                                    if (null === e || e === undefined || null === t || t === undefined) return null;
                                    return new s.default(e, 10).lte(t, 10);
                                }),
                                (n.checkExistingAddresses = function (e, t = []) {
                                    if (!e) return !1;
                                    return t.some((t) => t.address.toLowerCase() === e.toLowerCase());
                                }),
                                (n.clearClipboard = function () {
                                    window.navigator.clipboard.writeText("");
                                }),
                                (n.coinTypeToProtocolName = function (e) {
                                    var t;
                                    if ("1" === String(e)) return "Test Networks";
                                    return (null === (t = u.default[e]) || void 0 === t ? void 0 : t.name) || undefined;
                                }),
                                (n.formatBalance = function (e, t, n = !0, r = "ETH") {
                                    const a = n ? m(e) : e.split("."),
                                        s = a[0];
                                    let o = a[1],
                                        i = "None";
                                    if (t === undefined)
                                        if ("0" === s) {
                                            if ("0" !== o) {
                                                const e = o.match(/^0*(.{2})/u);
                                                e && (o = e[0]), (i = `0.${o} ${r}`);
                                            }
                                        } else i = `${s}.${o.slice(0, 3)} ${r}`;
                                    else (o += Array(t).join("0")), (i = `${s}.${o.slice(0, t)} ${r}`);
                                    return i;
                                }),
                                (n.formatDate = function (e, t = "M/d/y 'at' T") {
                                    if (!e) return "";
                                    return i.DateTime.fromMillis(e).toFormat(t);
                                }),
                                (n.formatDateWithYearContext = function (e, t = "MMM d", n = "MMM d, y") {
                                    if (!e) return "";
                                    const r = i.DateTime.fromMillis(e),
                                        a = i.DateTime.local();
                                    return r.toFormat(a.year === r.year ? t : n);
                                }),
                                (n.getAccountByAddress = function (e = [], t) {
                                    return e.find(({ address: e }) => e === t);
                                }),
                                (n.getAssetImageURL = function (e, t) {
                                    if (!e || !t || "string" != typeof e) return "";
                                    if (e.startsWith("ipfs://")) return (0, c.getFormattedIpfsUrl)(t, e, !0);
                                    return e;
                                }),
                                (n.getContractAtAddress = function (e) {
                                    return global.eth.contract(a.default).at(e);
                                }),
                                (n.getRandomFileName = function () {
                                    let e = "";
                                    const t = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"],
                                        n = Math.floor(7 * Math.random() + 6);
                                    for (let r = 0; r < n; r++) e += t[Math.floor(Math.random() * t.length)];
                                    return e;
                                }),
                                (n.getURL = p),
                                (n.getURLHost = function (e) {
                                    var t;
                                    return (null === (t = p(e)) || void 0 === t ? void 0 : t.host) || "";
                                }),
                                (n.getURLHostName = function (e) {
                                    var t;
                                    return (null === (t = p(e)) || void 0 === t ? void 0 : t.hostname) || "";
                                }),
                                (n.isDefaultMetaMaskChain = function (e) {
                                    if (!e || e === l.CHAIN_IDS.MAINNET || e === l.CHAIN_IDS.GOERLI || e === l.CHAIN_IDS.SEPOLIA || e === l.CHAIN_IDS.LOCALHOST) return !0;
                                    return !1;
                                }),
                                (n.isExtensionUrl = function (e) {
                                    const t = ["chrome-extension:", "moz-extension:"];
                                    if ("string" == typeof e) for (const n of t) if (e.startsWith(n)) return !0;
                                    if (null != e && e.protocol) return t.includes(e.protocol);
                                    return !1;
                                }),
                                (n.isNullish = function (e) {
                                    return null === e || e === undefined;
                                }),
                                (n.isOriginContractAddress = function (e, t) {
                                    if (!e || !t) return !1;
                                    return e.toLowerCase() === t.toLowerCase();
                                }),
                                (n.isValidDomainName = function (e) {
                                    return (
                                        null !==
                                        r.default
                                            .toASCII(e)
                                            .toLowerCase()
                                            .match(/^(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+[a-z0-9][-a-z0-9]*[a-z0-9]$/u)
                                    );
                                }),
                                (n.numericBalance = S),
                                (n.parseBalance = m),
                                (n.roundToDecimalPlacesRemovingExtraZeroes = function (e, t) {
                                    if (e === undefined || null === e) return "";
                                    return T.toBigNumber.dec(T.toBigNumber.dec(e).toFixed(t)).toNumber();
                                }),
                                (n.sanitizeMessage = void 0),
                                (n.shortenAddress = function (e = "") {
                                    if (e.length < E.TRUNCATED_NAME_CHAR_LIMIT) return e;
                                    return `${e.slice(0, E.TRUNCATED_ADDRESS_START_CHARS)}...${e.slice(-E.TRUNCATED_ADDRESS_END_CHARS)}`;
                                }),
                                (n.stripHttpSchemes = function (e) {
                                    return e.replace(/^https?:\/\//u, "");
                                }),
                                (n.stripHttpsScheme = N),
                                (n.stripHttpsSchemeWithoutPort = function (e) {
                                    if (p(e).port) return e;
                                    return N(e);
                                }),
                                (n.toHumanReadableTime = void 0),
                                (n.valuesFor = function (e) {
                                    if (!e) return [];
                                    return Object.keys(e).map(function (t) {
                                        return e[t];
                                    });
                                });
                            var r = A(e("punycode/punycode")),
                                a = A(e("human-standard-token-abi")),
                                s = A(e("bignumber.js")),
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = _(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var r = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var s in e)
                                        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                            var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                                            o && (o.get || o.set) ? Object.defineProperty(r, s, o) : (r[s] = e[s]);
                                        }
                                    (r.default = e), n && n.set(e, r);
                                    return r;
                                })(e("ethereumjs-util")),
                                i = e("luxon"),
                                c = e("@metamask/assets-controllers"),
                                u = A(e("@metamask/slip44")),
                                l = e("../../../shared/constants/network"),
                                d = e("../../../shared/modules/hexstring-utils"),
                                E = e("../../../shared/constants/labels"),
                                T = e("../../../shared/modules/conversion.utils");
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (_ = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function A(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function S(e) {
                                if (!e) return new o.BN(0, 16);
                                const t = (0, d.stripHexPrefix)(e);
                                return new o.BN(t, 16);
                            }
                            function m(e) {
                                let t;
                                const n = S(e),
                                    r = n.toString(),
                                    a = r.length > 18 ? r.slice(0, r.length - 18) : "0";
                                return (t = `000000000000000000${n}`.slice(-18).replace(/0+$/u, "")), "" === t && (t = "0"), [a, t];
                            }
                            function N(e) {
                                return e.replace(/^https:\/\//u, "");
                            }
                            function p(e) {
                                try {
                                    return new URL(e);
                                } catch (e) {
                                    return "";
                                }
                            }
                            n.toHumanReadableTime = (e, t) => {
                                if (t === undefined || null === t) return "";
                                const n = Math.ceil(t / 1e3);
                                return n <= 90 ? e("gasTimingSecondsShort", [n]) : n <= 5400 ? e("gasTimingMinutesShort", [Math.ceil(n / 60)]) : e("gasTimingHoursShort", [Math.ceil(n / 3600)]);
                            };
                            const I = (e, t, n) => {
                                if (!n) throw new Error("Invalid types definition");
                                const r = n[t];
                                if (!r) throw new Error("Invalid primary type definition");
                                const a = {};
                                return (
                                    Object.keys(e).forEach((t) => {
                                        const s = Object.values(r).find((e) => e.name === t);
                                        if (!s) return;
                                        const o = s.type.replace(/\[\]$/u, "");
                                        if (n[o]) s.type.endsWith("[]") > 0 ? (a[t] = e[t].map((e) => I(e, o, n))) : (a[t] = I(e[t], s.type, n));
                                        else {
                                            (() => {
                                                const e = Array.from(new Array(32)).map((e, t) => "int" + 8 * (t + 1)),
                                                    t = Array.from(new Array(32)).map((e, t) => "uint" + 8 * (t + 1)),
                                                    n = Array.from(new Array(32)).map((e, t) => `bytes${t + 1}`),
                                                    r = Array.from(new Array(32)).map((e, t) => "fixed" + 8 * (t + 1)),
                                                    a = Array.from(new Array(32)).map((e, t) => "ufixed" + 8 * (t + 1)),
                                                    s = Array.from(new Array(80)).map((e, t) => r.map((e) => `${e}x${t + 1}`)),
                                                    o = Array.from(new Array(80)).map((e, t) => a.map((e) => `${e}x${t + 1}`));
                                                return ["bool", "address", "string", "bytes", "int", "uint", "fixed", "ufixed", ...e, ...t, ...n, ...s.flat(), ...o.flat()];
                                            })().includes(o) && (a[t] = e[t]);
                                        }
                                    }),
                                    a
                                );
                            };
                            n.sanitizeMessage = I;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.TRANSAK_API_KEY = n.MOONPAY_API_KEY = n.COINBASEPAY_API_KEY = void 0);
                            n.TRANSAK_API_KEY = "25ac1309-a49b-4411-b20e-5e56c61a5b1c";
                            n.MOONPAY_API_KEY = "pk_live_WbCpe6PxSIcGPCSd6lKCbJNRht7uy";
                            n.COINBASEPAY_API_KEY = "ab4b8829-a59d-44d3-accc-de77e4f18df2";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6031,
            {
                "../../../../shared/constants/network": 5333,
                "../../../../shared/lib/fetch-with-cache": 5342,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/constants/zendesk-url": 5907,
                "eth-rpc-errors": 2032,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = e("eth-rpc-errors"),
                                a = l(e("react")),
                                s = e("../../../../shared/constants/network"),
                                o = e("../../../helpers/constants/design-system"),
                                i = e("../../../helpers/constants/routes"),
                                c = l(e("../../../helpers/constants/zendesk-url")),
                                u = l(e("../../../../shared/lib/fetch-with-cache"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const d = { id: "UNRECOGNIZED_CHAIN", severity: o.SEVERITIES.WARNING, content: { element: "span", children: { element: "MetaMaskTranslation", props: { translationKey: "unrecognizedChain" } } } },
                                E = {
                                    id: "MISMATCHED_CHAIN_RECOMMENDATION",
                                    content: {
                                        element: "span",
                                        children: {
                                            element: "MetaMaskTranslation",
                                            props: {
                                                translationKey: "mismatchedChainRecommendation",
                                                variables: [
                                                    {
                                                        element: "a",
                                                        key: "mismatchedChainLink",
                                                        props: { href: c.default.VERIFY_CUSTOM_NETWORK, target: "__blank", tabIndex: 0 },
                                                        children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedChainLinkText" } },
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                                T = { id: "MISMATCHED_NETWORK_NAME", severity: o.SEVERITIES.WARNING, content: { element: "span", children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedNetworkName" } } } },
                                _ = { id: "MISMATCHED_NETWORK_SYMBOL", severity: o.SEVERITIES.DANGER, content: { element: "span", children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedNetworkSymbol" } } } },
                                A = { id: "MISMATCHED_NETWORK_RPC", severity: o.SEVERITIES.DANGER, content: { element: "span", children: { element: "MetaMaskTranslation", props: { translationKey: "mismatchedRpcUrl" } } } };
                            var S = {
                                getAlerts: async function (e) {
                                    const t = [],
                                        n = ((await (0, u.default)("https://chainid.network/chains.json")) || []).find((t) => t.chainId === parseInt(e.requestData.chainId, 16));
                                    if ("metamask" === e.origin && Boolean(n)) return [];
                                    if (n) {
                                        var r;
                                        n.name.toLowerCase() !== e.requestData.chainName.toLowerCase() && t.push(T), (null === (r = n.nativeCurrency) || void 0 === r ? void 0 : r.symbol) !== e.requestData.ticker && t.push(_);
                                        const { origin: a } = new URL(e.requestData.rpcUrl);
                                        n.rpc.map((e) => new URL(e).origin).includes(a) || t.push(A);
                                    }
                                    return n || t.push(d), t.length && t.push(E), t;
                                },
                                getValues: function (e, t, n, u) {
                                    var l;
                                    const d = "metamask" === e.origin;
                                    return {
                                        content: [
                                            {
                                                hide: !d,
                                                element: "Box",
                                                key: "network-box",
                                                props: { textAlign: o.TEXT_ALIGN.CENTER, display: o.DISPLAY.FLEX, justifyContent: o.JUSTIFY_CONTENT.CENTER, marginTop: 4, marginBottom: 2 },
                                                children: [{ element: "Chip", key: "network-chip", props: { label: e.requestData.chainName, backgroundColor: o.COLORS.BACKGROUND_ALTERNATIVE, leftIconUrl: e.requestData.imageUrl } }],
                                            },
                                            {
                                                element: "Typography",
                                                key: "title",
                                                children: t(d ? "wantToAddThisNetwork" : "addEthereumChainConfirmationTitle"),
                                                props: { variant: o.TYPOGRAPHY.H3, align: "center", fontWeight: "bold", boxProps: { margin: [0, 0, 4] } },
                                            },
                                            {
                                                element: "Typography",
                                                key: "description",
                                                children: t("addEthereumChainConfirmationDescription"),
                                                props: { variant: o.TYPOGRAPHY.H7, align: "center", boxProps: { margin: d ? [0, 8, 4] : [0, 0, 4] } },
                                            },
                                            {
                                                element: "Typography",
                                                key: "only-add-networks-you-trust",
                                                children: [
                                                    {
                                                        element: "b",
                                                        key: "bolded-text",
                                                        props: { style: { display: d && "-webkit-box" } },
                                                        children: [
                                                            `${t("addEthereumChainConfirmationRisks")} `,
                                                            {
                                                                hide: !d,
                                                                element: "Tooltip",
                                                                key: "tooltip-info",
                                                                props: {
                                                                    position: "bottom",
                                                                    interactive: !0,
                                                                    trigger: "mouseenter",
                                                                    html: a.default.createElement(
                                                                        "div",
                                                                        { style: { width: "180px", margin: "16px", textAlign: "left" } },
                                                                        t("someNetworksMayPoseSecurity"),
                                                                        " ",
                                                                        a.default.createElement(
                                                                            "a",
                                                                            { key: "zendesk_page_link", href: c.default.UNKNOWN_NETWORK, rel: "noreferrer", target: "_blank", style: { color: "var(--color-primary-default)" } },
                                                                            t("learnMoreUpperCase")
                                                                        )
                                                                    ),
                                                                },
                                                                children: [{ element: "i", key: "info-circle", props: { className: "fas fa-info-circle", style: { marginLeft: "4px", color: "var(--color-icon-default)" } } }],
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        element: "MetaMaskTranslation",
                                                        key: "learn-about-risks",
                                                        props: {
                                                            translationKey: "addEthereumChainConfirmationRisksLearnMore",
                                                            variables: [
                                                                {
                                                                    element: "a",
                                                                    children: t("addEthereumChainConfirmationRisksLearnMoreLink"),
                                                                    key: "addEthereumChainConfirmationRisksLearnMoreLink",
                                                                    props: { href: c.default.USER_GUIDE_CUSTOM_NETWORKS, target: "__blank" },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                                props: { variant: o.TYPOGRAPHY.H7, boxProps: { margin: d ? [0, 8] : 0, display: o.DISPLAY.FLEX, flexDirection: o.FLEX_DIRECTION.COLUMN, alignItems: o.ALIGN_ITEMS.CENTER } },
                                            },
                                            {
                                                element: "TruncatedDefinitionList",
                                                key: "network-details",
                                                props: {
                                                    title: t("networkDetails"),
                                                    tooltips: {
                                                        [t("networkName")]: t("networkNameDefinition"),
                                                        [t("networkURL")]: t("networkURLDefinition"),
                                                        [t("chainId")]: t("chainIdDefinition"),
                                                        [t("currencySymbol")]: t("currencySymbolDefinition"),
                                                        [t("blockExplorerUrl")]: t("blockExplorerUrlDefinition"),
                                                    },
                                                    dictionary: {
                                                        [t("networkName")]: e.requestData.chainName,
                                                        [t("networkURL")]:
                                                            null !== (l = e.requestData.rpcUrl) && void 0 !== l && l.includes(`/v3/${s.infuraProjectId}`) ? e.requestData.rpcUrl.replace(`/v3/${s.infuraProjectId}`, "") : e.requestData.rpcUrl,
                                                        [t("chainId")]: parseInt(e.requestData.chainId, 16),
                                                        [t("currencySymbol")]: e.requestData.ticker,
                                                        [t("blockExplorerUrl")]: e.requestData.blockExplorerUrl,
                                                    },
                                                    prefaceKeys: [t("networkName"), t("networkURL"), t("chainId"), t("currencySymbol")],
                                                },
                                            },
                                        ],
                                        approvalText: t("approveButtonText"),
                                        cancelText: t("cancel"),
                                        onApprove: async () => {
                                            await n.resolvePendingApproval(e.id, e.requestData), d && (n.addCustomNetwork(e.requestData), u.push(i.DEFAULT_ROUTE));
                                        },
                                        onCancel: () => n.rejectPendingApproval(e.id, r.ethErrors.provider.userRejectedRequest().serialize()),
                                        networkDisplay: !d,
                                    };
                                },
                            };
                            n.default = S;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6032,
            { "../../../../shared/constants/app": 5328, "../../../store/actions": 6307, "./add-ethereum-chain": 6031, "./switch-ethereum-chain": 6033, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TEMPLATED_CONFIRMATION_MESSAGE_TYPES = void 0),
                                (n.getTemplateAlerts = async function (e) {
                                    var t;
                                    const n = null === (t = u[e.type]) || void 0 === t ? void 0 : t.getAlerts,
                                        r = n ? await n(e) : [];
                                    if (!Array.isArray(r)) throw new Error(`Template alerts must be an array, received: ${r}`);
                                    if (r.some((e) => (null == e ? void 0 : e.id) === undefined)) throw new Error(`Template alert entries must be objects with an id key. Received: ${r}`);
                                    return r;
                                }),
                                (n.getTemplateState = async function (e) {
                                    var t, n;
                                    const r = null !== (t = null === (n = u[e.type]) || void 0 === n ? void 0 : n.getState) && void 0 !== t ? t : E,
                                        a = await r(e);
                                    if ("object" != typeof a || Array.isArray(a)) throw new Error(`Template state must be an object, received: ${a}`);
                                    if (null === a || a === undefined) return {};
                                    return a;
                                }),
                                (n.getTemplateValues = function (e, t, n, a) {
                                    var o;
                                    const i = null === (o = u[e.type]) || void 0 === o ? void 0 : o.getValues;
                                    if (!i) throw new Error(`MESSAGE_TYPE: '${e.type}' is not specified in approval templates`);
                                    const c = (function (e) {
                                            return {
                                                rejectPendingApproval: (...t) => e((0, s.rejectPendingApproval)(...t)),
                                                resolvePendingApproval: (...t) => e((0, s.resolvePendingApproval)(...t)),
                                                addCustomNetwork: (...t) => e((0, s.addCustomNetwork)(...t)),
                                            };
                                        })(n),
                                        l = i(e, t, c, a),
                                        E = (0, r.omit)(l, d),
                                        T = (0, r.pick)(l, d);
                                    if (E.length > 0) throw new Error(`Received extraneous keys from ${e.type}.getValues. These keys are not passed to the confirmation page: ${Object.keys(E)}`);
                                    return T;
                                });
                            var r = e("lodash"),
                                a = e("../../../../shared/constants/app"),
                                s = e("../../../store/actions"),
                                o = c(e("./add-ethereum-chain")),
                                i = c(e("./switch-ethereum-chain"));
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const u = { [a.MESSAGE_TYPE.ADD_ETHEREUM_CHAIN]: o.default, [a.MESSAGE_TYPE.SWITCH_ETHEREUM_CHAIN]: i.default },
                                l = Object.keys(u);
                            n.TEMPLATED_CONFIRMATION_MESSAGE_TYPES = l;
                            const d = ["content", "approvalText", "cancelText", "onApprove", "onCancel", "networkDisplay"];
                            async function E() {
                                return {};
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6033,
            { "../../../helpers/constants/design-system": 5900, "eth-rpc-errors": 2032 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = e("eth-rpc-errors"),
                                a = e("../../../helpers/constants/design-system");
                            const s = {
                                id: "PENDING_TX_DROP_NOTICE",
                                severity: a.SEVERITIES.WARNING,
                                content: { element: "span", children: { element: "MetaMaskTranslation", props: { translationKey: "switchingNetworksCancelsPendingConfirmations" } } },
                            };
                            var o = {
                                getAlerts: async function () {
                                    return [s];
                                },
                                getValues: function (e, t, n) {
                                    return {
                                        content: [
                                            {
                                                element: "Typography",
                                                key: "title",
                                                children: t("switchEthereumChainConfirmationTitle"),
                                                props: { variant: a.TYPOGRAPHY.H3, align: "center", fontWeight: "normal", boxProps: { margin: [0, 0, 2], padding: [0, 4, 0, 4] } },
                                            },
                                            {
                                                element: "Typography",
                                                key: "description",
                                                children: t("switchEthereumChainConfirmationDescription"),
                                                props: { variant: a.TYPOGRAPHY.H7, color: a.COLORS.TEXT_ALTERNATIVE, align: "center", boxProps: { padding: [0, 4, 0, 4] } },
                                            },
                                            {
                                                element: "Box",
                                                key: "status-box",
                                                props: { justifyContent: a.JUSTIFY_CONTENT.CENTER },
                                                children: { element: "ConfirmationNetworkSwitch", key: "network-being-switched", props: { newNetwork: { chainId: e.requestData.chainId, name: e.requestData.nickname } } },
                                            },
                                        ],
                                        approvalText: t("switchNetwork"),
                                        cancelText: t("cancel"),
                                        onApprove: () => n.resolvePendingApproval(e.id, e.requestData),
                                        onCancel: () => n.rejectPendingApproval(e.id, r.ethErrors.provider.userRejectedRequest().serialize()),
                                        networkDisplay: !0,
                                    };
                                },
                            };
                            n.default = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6175,
            { "../../../app/scripts/lib/util": 86, "../../../shared/constants/gas": 5329, "../../../shared/modules/conversion.utils": 5351 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.TOKEN_TRANSFER_FUNCTION_SIGNATURE = n.REQUIRED_ERROR = n.RECIPIENT_TYPES = n.NEGATIVE_ETH_ERROR = n.MIN_GAS_TOTAL = n.MIN_GAS_PRICE_HEX = n.MIN_GAS_PRICE_GWEI = n.MIN_GAS_PRICE_DEC = n.MIN_GAS_LIMIT_DEC = n.MAX_GAS_LIMIT_DEC = n.KNOWN_RECIPIENT_ADDRESS_WARNING = n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR = n.INVALID_RECIPIENT_ADDRESS_ERROR = n.INSUFFICIENT_TOKENS_ERROR = n.INSUFFICIENT_FUNDS_ERROR = n.HIGH_FEE_WARNING_MULTIPLIER = n.ENS_UNKNOWN_ERROR = n.ENS_REGISTRATION_ERROR = n.ENS_NO_ADDRESS_FOR_NAME = n.ENS_NOT_SUPPORTED_ON_NETWORK = n.ENS_NOT_FOUND_ON_NETWORK = n.ENS_ILLEGAL_CHARACTER = n.CONTRACT_ADDRESS_ERROR = n.CONFUSING_ENS_ERROR = n.COLLECTIBLE_TRANSFER_FROM_FUNCTION_SIGNATURE = void 0);
                            var r = e("../../../shared/modules/conversion.utils"),
                                a = e("../../../app/scripts/lib/util"),
                                s = e("../../../shared/constants/gas");
                            n.MIN_GAS_PRICE_DEC = "0";
                            const o = parseInt("0", 10).toString(16);
                            n.MIN_GAS_PRICE_HEX = o;
                            n.MIN_GAS_LIMIT_DEC = "21000";
                            n.MAX_GAS_LIMIT_DEC = "7920027";
                            n.HIGH_FEE_WARNING_MULTIPLIER = 1.5;
                            const i = (0, a.addHexPrefix)((0, r.conversionUtil)(o, { fromDenomination: "WEI", toDenomination: "GWEI", fromNumericBase: "hex", toNumericBase: "hex", numberOfDecimals: 1 }));
                            n.MIN_GAS_PRICE_GWEI = i;
                            const c = (0, r.multiplyCurrencies)(s.MIN_GAS_LIMIT_HEX, o, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 16 });
                            n.MIN_GAS_TOTAL = c;
                            n.TOKEN_TRANSFER_FUNCTION_SIGNATURE = "0xa9059cbb";
                            n.COLLECTIBLE_TRANSFER_FROM_FUNCTION_SIGNATURE = "0x23b872dd";
                            n.INSUFFICIENT_FUNDS_ERROR = "insufficientFunds";
                            n.INSUFFICIENT_TOKENS_ERROR = "insufficientTokens";
                            n.NEGATIVE_ETH_ERROR = "negativeETH";
                            n.INVALID_RECIPIENT_ADDRESS_ERROR = "invalidAddressRecipient";
                            n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR = "invalidAddressRecipientNotEthNetwork";
                            n.REQUIRED_ERROR = "required";
                            n.KNOWN_RECIPIENT_ADDRESS_WARNING = "knownAddressRecipient";
                            n.CONTRACT_ADDRESS_ERROR = "contractAddressError";
                            n.CONFUSING_ENS_ERROR = "confusingEnsDomain";
                            n.ENS_NO_ADDRESS_FOR_NAME = "noAddressForName";
                            n.ENS_NOT_FOUND_ON_NETWORK = "ensNotFoundOnCurrentNetwork";
                            n.ENS_NOT_SUPPORTED_ON_NETWORK = "ensNotSupportedOnNetwork";
                            n.ENS_ILLEGAL_CHARACTER = "ensIllegalCharacter";
                            n.ENS_UNKNOWN_ERROR = "ensUnknownError";
                            n.ENS_REGISTRATION_ERROR = "ensRegistrationError";
                            n.RECIPIENT_TYPES = { SMART_CONTRACT: "SMART_CONTRACT", NON_CONTRACT: "NON_CONTRACT" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6177,
            {
                "../../../app/scripts/lib/util": 86,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "./send.constants": 6175,
                "ethereumjs-abi": 2087,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.addGasBuffer = function (e, t, n = 1.5) {
                                    const r = (0, s.multiplyCurrencies)(t, 0.9, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 10, numberOfDecimals: "0" }),
                                        a = (0, s.multiplyCurrencies)(e, n, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 10, numberOfDecimals: "0" });
                                    if ((0, s.conversionGreaterThan)({ value: e, fromNumericBase: "hex" }, { value: r, fromNumericBase: "hex" })) return e;
                                    if ((0, s.conversionLessThan)({ value: a, fromNumericBase: "hex" }, { value: r, fromNumericBase: "hex" })) return a;
                                    return r;
                                }),
                                (n.ellipsify = function (e, t = 6, n = 4) {
                                    return `${e.slice(0, t)}...${e.slice(-n)}`;
                                }),
                                (n.generateERC20TransferData = l),
                                (n.generateERC721TransferData = d),
                                (n.getAssetTransferData = function ({ sendToken: e, fromAddress: t, toAddress: n, amount: r }) {
                                    switch (e.standard) {
                                        case i.ERC721:
                                            return d({ toAddress: n, fromAddress: t, tokenId: e.tokenId });
                                        case i.ERC20:
                                        default:
                                            return l({ toAddress: n, amount: r, sendToken: e });
                                    }
                                }),
                                (n.isBalanceSufficient = function ({ amount: e = "0x0", balance: t = "0x0", conversionRate: n = 1, gasTotal: r = "0x0", primaryCurrency: a }) {
                                    const o = (0, s.addCurrencies)(e, r, { aBase: 16, bBase: 16, toNumericBase: "hex" });
                                    return (0, s.conversionGTE)({ value: t, fromNumericBase: "hex", fromCurrency: a, conversionRate: n }, { value: o, fromNumericBase: "hex", conversionRate: n, fromCurrency: a });
                                }),
                                (n.isTokenBalanceSufficient = function ({ amount: e = "0x0", tokenBalance: t, decimals: n }) {
                                    const r = (0, s.conversionUtil)(e, { fromNumericBase: "hex" });
                                    return (0, s.conversionGTE)({ value: t, fromNumericBase: "hex" }, { value: (0, c.calcTokenAmount)(r, n) });
                                });
                            var r,
                                a = (r = e("ethereumjs-abi")) && r.__esModule ? r : { default: r },
                                s = e("../../../shared/modules/conversion.utils"),
                                o = e("../../../app/scripts/lib/util"),
                                i = e("../../../shared/constants/transaction"),
                                c = e("../../../shared/lib/transactions-controller-utils"),
                                u = e("./send.constants");
                            function l({ toAddress: e = "0x0", amount: t = "0x0", sendToken: n }) {
                                return n
                                    ? u.TOKEN_TRANSFER_FUNCTION_SIGNATURE +
                                          Array.prototype.map.call(a.default.rawEncode(["address", "uint256"], [(0, o.addHexPrefix)(e), (0, o.addHexPrefix)(t)]), (e) => `00${e.toString(16)}`.slice(-2)).join("")
                                    : undefined;
                            }
                            function d({ toAddress: e = "0x0", fromAddress: t = "0x0", tokenId: n }) {
                                return n
                                    ? u.COLLECTIBLE_TRANSFER_FROM_FUNCTION_SIGNATURE +
                                          Array.prototype.map.call(a.default.rawEncode(["address", "address", "uint256"], [(0, o.addHexPrefix)(t), (0, o.addHexPrefix)(e), n]), (e) => `00${e.toString(16)}`.slice(-2)).join("")
                                    : undefined;
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6285,
            {
                "../../../shared/constants/network": 5333,
                "../../../shared/constants/swaps": 5337,
                "../../../shared/constants/time": 5338,
                "../../../shared/lib/fetch-with-cache": 5342,
                "../../../shared/lib/swaps-utils": 5345,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/swaps.utils": 5362,
                "../../helpers/utils/confirm-tx.util": 5919,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/transactions.util": 5935,
                "bignumber.js": 1637,
                "human-standard-token-abi": 4452,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.countDecimals = void 0),
                                (n.fetchAggregatorMetadata = async function (e) {
                                    const t = (0, T.getBaseApi)("aggregatorMetadata", e),
                                        n = await (0, l.default)(t, { method: "GET", headers: p }, { cacheRefreshTime: m }),
                                        r = {};
                                    for (const e in n) (0, T.validateData)(O, n[e], t) && (r[e] = n[e]);
                                    return r;
                                }),
                                (n.fetchSwapsFeatureFlags = async function () {
                                    const e = s.SWAPS_API_V2_BASE_URL;
                                    return await (0, l.default)(`${e}/featureFlags`, { method: "GET", headers: p }, { cacheRefreshTime: 6e5 });
                                }),
                                (n.fetchSwapsGasPrices = async function (e) {
                                    const t = (0, T.getBaseApi)("gasPrices", e),
                                        n = await (0, l.default)(t, { method: "GET", headers: p }, { cacheRefreshTime: 3e4 });
                                    if (!(0, T.validateData)(g, n, t)) throw new Error(`${t} response is invalid`);
                                    const { SafeGasPrice: r, ProposeGasPrice: a, FastGasPrice: s } = n;
                                    return { safeLow: r, average: a, fast: s };
                                }),
                                (n.fetchToken = async function (e, t) {
                                    const n = (0, T.getBaseApi)("token", t);
                                    return await (0, l.default)(`${n}?address=${e}`, { method: "GET", headers: p }, { cacheRefreshTime: m });
                                }),
                                (n.fetchTokenBalance = async function (e, t) {
                                    const n = global.eth.contract(a.default).at(e),
                                        r = n ? n.balanceOf(t) : Promise.resolve();
                                    return await r;
                                }),
                                (n.fetchTokenPrice = async function (e) {
                                    var t;
                                    const n = `contract_addresses=${e}&vs_currencies=eth`,
                                        r = await (0, l.default)(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?${n}`, { method: "GET" }, { cacheRefreshTime: 6e4 });
                                    return r && (null === (t = r[e]) || void 0 === t ? void 0 : t.eth);
                                }),
                                (n.fetchTokens = async function (e) {
                                    const t = (0, T.getBaseApi)("tokens", e),
                                        n = await (0, l.default)(t, { method: "GET", headers: p }, { cacheRefreshTime: m });
                                    return [
                                        s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e],
                                        ...n.filter((n) => (0, T.validateData)(I, n, t, false) && !((0, o.isSwapsDefaultTokenSymbol)(n.symbol, e) || (0, o.isSwapsDefaultTokenAddress)(n.address, e))),
                                    ];
                                }),
                                (n.fetchTopAssets = async function (e) {
                                    const t = (0, T.getBaseApi)("topAssets", e),
                                        n = (await (0, l.default)(t, { method: "GET", headers: p }, { cacheRefreshTime: m })) || [];
                                    return n.reduce((e, n, r) => ((0, T.validateData)(f, n, t) ? { ...e, [n.address]: { index: String(r) } } : e), {});
                                }),
                                (n.fetchTradesInfo = async function ({ slippage: e, sourceToken: t, sourceDecimals: n, destinationToken: r, value: a, fromAddress: s, exchangeList: o }, { chainId: i }) {
                                    const c = { destinationToken: r, sourceToken: t, sourceAmount: (0, T.calcTokenValue)(a, n).toString(10), slippage: e, timeout: 10 * _.SECOND, walletAddress: s };
                                    o && (c.exchangeList = o);
                                    C(i, t, r) && (c.enableDirectWrapping = !0);
                                    const u = new URLSearchParams(c).toString(),
                                        d = `${(0, T.getBaseApi)("trade", i)}${u}`,
                                        A = await (0, l.default)(d, { method: "GET", headers: p }, { cacheRefreshTime: 0, timeout: 15 * _.SECOND });
                                    return A.reduce((t, n) => {
                                        if (n.trade && !n.error && (0, T.validateData)(T.QUOTE_VALIDATORS, n, d)) {
                                            const r = (0, T.constructTxParams)({ to: n.trade.to, from: n.trade.from, data: n.trade.data, amount: (0, E.decimalToHex)(n.trade.value), gas: (0, E.decimalToHex)(n.maxGas) });
                                            let { approvalNeeded: a } = n;
                                            return a && (a = (0, T.constructTxParams)({ ...a })), { ...t, [n.aggregator]: { ...n, slippage: e, trade: r, approvalNeeded: a } };
                                        }
                                        return t;
                                    }, {});
                                }),
                                (n.formatSwapsValueForDisplay = D),
                                (n.getNetworkNameByChainId = n.getFeeForSmartTransaction = void 0),
                                (n.getRenderableNetworkFeesForQuote = P),
                                (n.parseSmartTransactionsError = n.isContractAddressValid = n.getTranslatedStxErrorMessage = n.getSwapsLivenessForNetwork = void 0),
                                (n.quotesToRenderableData = function (e, t, n, a, s, i, c, u, l, d) {
                                    return Object.values(e).map((e) => {
                                        const {
                                                destinationAmount: T = 0,
                                                sourceAmount: _ = 0,
                                                sourceTokenInfo: A,
                                                destinationTokenInfo: S,
                                                slippage: m,
                                                aggType: N,
                                                aggregator: p,
                                                gasEstimateWithRefund: I,
                                                averageGas: f,
                                                fee: O,
                                                trade: R,
                                            } = e,
                                            g = (0, E.calcTokenAmount)(_, A.decimals).toString(10),
                                            C = (0, E.calcTokenAmount)(T, S.decimals).toPrecision(8);
                                        let L = null,
                                            v = null,
                                            y = null,
                                            M = null;
                                        ({ feeInFiat: L, feeInEth: v, rawNetworkFees: y, rawEthFee: M } = P({
                                            tradeGas: I || (0, E.decimalToHex)(f || 8e5),
                                            approveGas: s,
                                            gasPrice: t,
                                            currentCurrency: a,
                                            conversionRate: n,
                                            tradeValue: R.value,
                                            sourceSymbol: A.symbol,
                                            sourceAmount: _,
                                            chainId: c,
                                            multiLayerL1FeeTotal: d,
                                        })),
                                            u && ({ feeInFiat: L, feeInEth: v } = h({ chainId: c, currentCurrency: a, conversionRate: n, nativeCurrencySymbol: l, estimatedFeeInWeiDec: u.feeEstimate }));
                                        const U = new r.default(100 - m).div(100),
                                            w = new r.default(C).times(U).toFixed(6),
                                            b = i[S.address],
                                            k = (0, o.isSwapsDefaultTokenSymbol)(S.symbol, c) ? (0, E.calcTokenAmount)(T, S.decimals).minus(M, 10) : new r.default(b || 0, 10).times((0, E.calcTokenAmount)(T, S.decimals), 10).minus(M, 10);
                                        let x,
                                            H = m;
                                        return (
                                            "AGG" === N
                                                ? (x = "swapAggregator")
                                                : "RFQ" === N
                                                ? ((x = "swapRequestForQuotation"), (H = 0))
                                                : (x = "DEX" === N ? "swapDecentralizedExchange" : "CONTRACT" === N ? "swapDirectContract" : "swapUnknown"),
                                            {
                                                aggId: p,
                                                amountReceiving: `${C} ${S.symbol}`,
                                                destinationTokenDecimals: S.decimals,
                                                destinationTokenSymbol: S.symbol,
                                                destinationTokenValue: D(C),
                                                destinationIconUrl: S.iconUrl,
                                                isBestQuote: e.isBestQuote,
                                                liquiditySourceKey: x,
                                                feeInEth: v,
                                                detailedNetworkFees: `${v} (${L})`,
                                                networkFees: L,
                                                quoteSource: N,
                                                rawNetworkFees: y,
                                                slippage: H,
                                                sourceTokenDecimals: A.decimals,
                                                sourceTokenSymbol: A.symbol,
                                                sourceTokenValue: g,
                                                sourceTokenIconUrl: A.iconUrl,
                                                ethValueOfTrade: k,
                                                minimumAmountReceived: w,
                                                metaMaskFee: O,
                                            }
                                        );
                                    });
                                }),
                                (n.stxErrorTypes = n.showRemainingTimeInMinAndSec = n.shouldEnableDirectWrapping = void 0);
                            var r = S(e("bignumber.js")),
                                a = S(e("human-standard-token-abi")),
                                s = e("../../../shared/constants/swaps"),
                                o = e("../../../shared/modules/swaps.utils"),
                                i = e("../../../shared/constants/network"),
                                c = e("../../helpers/utils/conversions.util"),
                                u = e("../../helpers/utils/confirm-tx.util"),
                                l = S(e("../../../shared/lib/fetch-with-cache")),
                                d = e("../../../shared/modules/hexstring-utils"),
                                E = e("../../../shared/lib/transactions-controller-utils"),
                                T = e("../../../shared/lib/swaps-utils"),
                                _ = e("../../../shared/constants/time"),
                                A = e("../../helpers/utils/transactions.util");
                            function S(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const m = 3e5,
                                N = "usd",
                                p = { "X-Client-Id": s.SWAPS_CLIENT_ID },
                                I = [
                                    { property: "address", type: "string", validator: (e) => (0, d.isValidHexAddress)(e, { allowNonPrefixed: !1 }) },
                                    { property: "symbol", type: "string", validator: (e) => (0, T.truthyString)(e) && e.length <= 12 },
                                    { property: "decimals", type: "string|number", validator: (e) => Number(e) >= 0 && Number(e) <= 36 },
                                ],
                                f = I.slice(0, 2),
                                O = [
                                    { property: "color", type: "string", validator: (e) => Boolean(e.match(/^#[A-Fa-f0-9]+$/u)) },
                                    { property: "title", type: "string", validator: T.truthyString },
                                    { property: "icon", type: "string", validator: (e) => Boolean(e.match(/^data:image/u)) },
                                ],
                                R = (e) => !isNaN(e) && e.match(/^[.0-9]+$/u) && !isNaN(parseFloat(e)),
                                g = [
                                    { property: "SafeGasPrice", type: "string", validator: R },
                                    { property: "ProposeGasPrice", type: "string", validator: R },
                                    { property: "FastGasPrice", type: "string", validator: R },
                                ],
                                C = (e, t, n) => {
                                    var r;
                                    if (!t || !n) return !1;
                                    const a = s.SWAPS_WRAPPED_TOKENS_ADDRESSES[e],
                                        o = null === (r = s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e]) || void 0 === r ? void 0 : r.address,
                                        i = t.toLowerCase(),
                                        c = n.toLowerCase();
                                    return (i === a && c === o) || (i === o && c === a);
                                };
                            n.shouldEnableDirectWrapping = C;
                            const h = ({ chainId: e, currentCurrency: t, conversionRate: n, USDConversionRate: r, nativeCurrencySymbol: a, feeInWeiDec: o }) => {
                                const l = (0, E.decimalToHex)(o),
                                    d = (0, c.getValueFromWeiHex)({ value: l, toDenomination: i.CURRENCY_SYMBOLS.ETH, numberOfDecimals: 5 }),
                                    T = (0, c.getValueFromWeiHex)({ value: l, toCurrency: t, conversionRate: n, numberOfDecimals: 2 });
                                let _;
                                _ = t === N ? T : (0, c.getValueFromWeiHex)({ value: l, toCurrency: N, conversionRate: r, numberOfDecimals: 2 });
                                return { feeInUsd: _, feeInFiat: (0, u.formatCurrency)(T, t), feeInEth: `${d} ${a || s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[e].symbol}`, rawEthFee: d };
                            };
                            function P({
                                tradeGas: e,
                                approveGas: t,
                                gasPrice: n,
                                currentCurrency: a,
                                conversionRate: i,
                                USDConversionRate: l,
                                tradeValue: d,
                                sourceSymbol: T,
                                sourceAmount: _,
                                chainId: S,
                                nativeCurrencySymbol: m,
                                multiLayerL1FeeTotal: p,
                            }) {
                                const I = new r.default(e || "0x0", 16).plus(t || "0x0", 16).toString(16);
                                let f = (0, E.calcGasTotal)(I, n);
                                null !== p && (f = (0, A.sumHexes)(f || "0x0", p || "0x0"));
                                const O = new r.default(d, 16).minus((0, o.isSwapsDefaultTokenSymbol)(T, S) ? _ : 0, 10).toString(16),
                                    R = new r.default(f, 16).plus(O, 16).toString(16),
                                    g = (0, c.getValueFromWeiHex)({ value: R, toDenomination: "ETH", numberOfDecimals: 5 }),
                                    C = (0, c.getValueFromWeiHex)({ value: R, toCurrency: a, conversionRate: i, numberOfDecimals: 2 }),
                                    h = (0, u.formatCurrency)(C, a);
                                let P;
                                P = a === N ? C : (0, c.getValueFromWeiHex)({ value: R, toCurrency: N, conversionRate: l, numberOfDecimals: 2 });
                                return { rawNetworkFees: C, feeInUsd: P, rawEthFee: g, feeInFiat: h, feeInEth: `${g} ${m || s.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[S].symbol}`, nonGasFee: O };
                            }
                            function D(e) {
                                let t = (0, E.toPrecisionWithoutTrailingZeros)(e, 12);
                                return t.match(/e[+-]/u) && (t = new r.default(t).toFixed()), t;
                            }
                            n.getFeeForSmartTransaction = h;
                            n.isContractAddressValid = (e, t = i.CHAIN_IDS.MAINNET) => !(!e || !s.ALLOWED_CONTRACT_ADDRESSES[t]) && s.ALLOWED_CONTRACT_ADDRESSES[t].some((t) => e.toLowerCase() === t.toLowerCase());
                            const L = (e) => {
                                switch (e) {
                                    case i.CHAIN_IDS.MAINNET:
                                        return s.ETHEREUM;
                                    case i.CHAIN_IDS.BSC:
                                        return s.BSC;
                                    case i.CHAIN_IDS.POLYGON:
                                        return s.POLYGON;
                                    case i.CHAIN_IDS.GOERLI:
                                        return s.GOERLI;
                                    case i.CHAIN_IDS.AVALANCHE:
                                        return s.AVALANCHE;
                                    case i.CHAIN_IDS.OPTIMISM:
                                        return s.OPTIMISM;
                                    case i.CHAIN_IDS.ARBITRUM:
                                        return s.ARBITRUM;
                                    default:
                                        return "";
                                }
                            };
                            n.getNetworkNameByChainId = L;
                            n.getSwapsLivenessForNetwork = (e = {}, t) => {
                                const n = L(t);
                                if ([i.CHAIN_IDS.LOCALHOST, i.CHAIN_IDS.GOERLI].includes(t)) return { swapsFeatureIsLive: !0 };
                                if (!e[n]) return { swapsFeatureIsLive: !1 };
                                return e[n].extensionActive ? { swapsFeatureIsLive: !0 } : { swapsFeatureIsLive: e[n].fallbackToV1 };
                            };
                            n.countDecimals = (e) => {
                                var t;
                                return (e && Math.floor(e) !== e && (null === (t = e.toString().split(".")[1]) || void 0 === t ? void 0 : t.length)) || 0;
                            };
                            n.showRemainingTimeInMinAndSec = (e) => {
                                if (!Number.isInteger(e)) return "0:00";
                                return `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, "0")}`;
                            };
                            const v = { UNAVAILABLE: "unavailable", NOT_ENOUGH_FUNDS: "not_enough_funds", REGULAR_TX_IN_PROGRESS: "regular_tx_pending" };
                            n.stxErrorTypes = v;
                            n.getTranslatedStxErrorMessage = (e, t) => {
                                switch (e) {
                                    case v.UNAVAILABLE:
                                    case v.REGULAR_TX_IN_PROGRESS:
                                        return t("stxErrorUnavailable");
                                    case v.NOT_ENOUGH_FUNDS:
                                        return t("stxErrorNotEnoughFunds");
                                    default:
                                        return t("stxErrorUnavailable");
                                }
                            };
                            n.parseSmartTransactionsError = (e) => {
                                const t = e.slice(12);
                                return JSON.parse(t.trim());
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6297,
            {
                ".": 6300,
                "../../shared/constants/gas": 5329,
                "../../shared/constants/transaction": 5340,
                "../../shared/lib/transactions-controller-utils": 5347,
                "../../shared/modules/gas.utils": 5353,
                "../../shared/modules/string-utils": 5361,
                "../../shared/modules/transaction.utils": 5363,
                "../ducks/metamask/metamask": 5892,
                "../helpers/utils/confirm-tx.util": 5919,
                "../helpers/utils/conversions.util": 5920,
                "../helpers/utils/transactions.util": 5935,
                "../helpers/utils/tx-helper": 5936,
                "./custom-gas": 6298,
                "./selectors": 6303,
                reselect: 5005,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.unconfirmedTransactionsListSelector = n.unconfirmedTransactionsHashSelector = n.unconfirmedTransactionsCountSelector = n.unconfirmedMessagesHashSelector = n.txDataSelector = n.transactionFeeSelector = n.tokenAddressSelector = n.sendTokenTokenAmountAndToAddressSelector = n.currentCurrencySelector = n.conversionRateSelector = n.contractExchangeRateSelector = void 0);
                            var r,
                                a = e("reselect"),
                                s = (r = e("../helpers/utils/tx-helper")) && r.__esModule ? r : { default: r },
                                o = e("../helpers/utils/confirm-tx.util"),
                                i = e("../helpers/utils/transactions.util"),
                                c = e("../../shared/modules/transaction.utils"),
                                u = e("../ducks/metamask/metamask"),
                                l = e("../../shared/constants/transaction"),
                                d = e("../helpers/utils/conversions.util"),
                                E = e("../../shared/constants/gas"),
                                T = e("../../shared/modules/gas.utils"),
                                _ = e("../../shared/modules/string-utils"),
                                A = e("../../shared/lib/transactions-controller-utils"),
                                S = e("./custom-gas"),
                                m = e("./selectors"),
                                N = e(".");
                            const p = (e) => e.metamask.unapprovedTxs,
                                I = (e) => e.metamask.unapprovedMsgs,
                                f = (e) => e.metamask.unapprovedPersonalMsgs,
                                O = (e) => e.metamask.unapprovedDecryptMsgs,
                                R = (e) => e.metamask.unapprovedEncryptionPublicKeyMsgs,
                                g = (e) => e.metamask.unapprovedTypedMessages,
                                C = (0, a.createSelector)(p, I, f, O, R, g, m.deprecatedGetCurrentNetworkId, m.getCurrentChainId, (e = {}, t = {}, n = {}, r = {}, a = {}, o = {}, i, c) => (0, s.default)(e, t, n, r, a, o, i, c) || []);
                            n.unconfirmedTransactionsListSelector = C;
                            const h = (0, a.createSelector)(p, I, f, O, R, g, m.deprecatedGetCurrentNetworkId, m.getCurrentChainId, (e = {}, t = {}, n = {}, r = {}, a = {}, s = {}, o, i) => ({
                                ...Object.keys(e).reduce((t, n) => {
                                    const r = { ...t };
                                    return (0, c.transactionMatchesNetwork)(e[n], i, o) && (r[n] = e[n]), r;
                                }, {}),
                                ...t,
                                ...n,
                                ...r,
                                ...a,
                                ...s,
                            }));
                            n.unconfirmedTransactionsHashSelector = h;
                            const P = (0, a.createSelector)(I, f, O, R, g, (e = {}, t = {}, n = {}, r = {}, a = {}) => ({ ...e, ...t, ...n, ...r, ...a }));
                            n.unconfirmedMessagesHashSelector = P;
                            const D = (0, a.createSelector)(
                                p,
                                (e) => e.metamask.unapprovedMsgCount,
                                (e) => e.metamask.unapprovedPersonalMsgCount,
                                (e) => e.metamask.unapprovedDecryptMsgCount,
                                (e) => e.metamask.unapprovedEncryptionPublicKeyMsgCount,
                                (e) => e.metamask.unapprovedTypedMessagesCount,
                                m.deprecatedGetCurrentNetworkId,
                                m.getCurrentChainId,
                                (e = {}, t = 0, n = 0, r = 0, a = 0, s = 0, o, i) => Object.keys(e).filter((t) => (0, c.transactionMatchesNetwork)(e[t], i, o)).length + s + t + n + r + a
                            );
                            n.unconfirmedTransactionsCountSelector = D;
                            const L = (e) => e.metamask.currentCurrency;
                            n.currentCurrencySelector = L;
                            const v = (e) => e.metamask.conversionRate;
                            n.conversionRateSelector = v;
                            const y = (e) => e.confirmTransaction.txData;
                            n.txDataSelector = y;
                            const M = (0, a.createSelector)(
                                    (e) => e.confirmTransaction.tokenProps,
                                    (e) => e && e.decimals
                                ),
                                U = (0, a.createSelector)(
                                    (e) => e.confirmTransaction.tokenData,
                                    (e) => (e && e.args) || []
                                ),
                                w = (0, a.createSelector)(y, (e) => (e && e.txParams) || {}),
                                b = (0, a.createSelector)(w, (e) => e && e.to);
                            n.tokenAddressSelector = b;
                            const k = (0, a.createSelector)(U, M, (e, t) => {
                                let n = "",
                                    r = "0";
                                if (e && e.length) {
                                    n = e._to;
                                    let a = e._value.toString();
                                    t && (a = (0, A.calcTokenAmount)(a, t).toFixed()), (r = (0, o.roundExponential)(a));
                                }
                                return { toAddress: n, tokenAmount: r };
                            });
                            n.sendTokenTokenAmountAndToAddressSelector = k;
                            const x = (0, a.createSelector)(
                                (e) => e.metamask.contractExchangeRates,
                                b,
                                (e, t) => e[Object.keys(e).find((e) => (0, _.isEqualCaseInsensitive)(e, t))]
                            );
                            n.contractExchangeRateSelector = x;
                            n.transactionFeeSelector = function (e, t) {
                                var n, r, a, s, c, _, A, m;
                                const p = L(e),
                                    I = v(e),
                                    f = (0, u.getNativeCurrency)(e),
                                    O = (0, u.getGasFeeEstimates)(e) || {},
                                    R = (0, u.getGasEstimateType)(e),
                                    g = (0, N.checkNetworkAndAccountSupports1559)(e),
                                    C = { gasLimit: null !== (n = null === (r = t.txParams) || void 0 === r ? void 0 : r.gas) && void 0 !== n ? n : "0x0" };
                                if (g) {
                                    var h;
                                    const { gasPrice: e = "0" } = O,
                                        n = O[t.userFeeLevel] || {};
                                    if ((null === (h = t.txParams) || void 0 === h ? void 0 : h.type) === l.TRANSACTION_ENVELOPE_TYPES.LEGACY) {
                                        var P, D;
                                        C.gasPrice = null !== (P = null === (D = t.txParams) || void 0 === D ? void 0 : D.gasPrice) && void 0 !== P ? P : (0, d.decGWEIToHexWEI)(e);
                                    } else {
                                        var y, M, U, w;
                                        const { suggestedMaxPriorityFeePerGas: r, suggestedMaxFeePerGas: a } = n;
                                        (C.maxFeePerGas =
                                            null === (y = t.txParams) || void 0 === y || !y.maxFeePerGas || (t.userFeeLevel !== E.CUSTOM_GAS_ESTIMATE && a)
                                                ? (0, d.decGWEIToHexWEI)(a || e)
                                                : null === (M = t.txParams) || void 0 === M
                                                ? void 0
                                                : M.maxFeePerGas),
                                            (C.maxPriorityFeePerGas =
                                                null === (U = t.txParams) || void 0 === U || !U.maxPriorityFeePerGas || (t.userFeeLevel !== E.CUSTOM_GAS_ESTIMATE && r)
                                                    ? (r && (0, d.decGWEIToHexWEI)(r)) || C.maxFeePerGas
                                                    : null === (w = t.txParams) || void 0 === w
                                                    ? void 0
                                                    : w.maxPriorityFeePerGas),
                                            (C.baseFeePerGas = (0, d.decGWEIToHexWEI)(O.estimatedBaseFee));
                                    }
                                } else
                                    switch (R) {
                                        case E.GAS_ESTIMATE_TYPES.NONE:
                                            C.gasPrice = null !== (a = null === (s = t.txParams) || void 0 === s ? void 0 : s.gasPrice) && void 0 !== a ? a : "0x0";
                                            break;
                                        case E.GAS_ESTIMATE_TYPES.ETH_GASPRICE:
                                            C.gasPrice = null !== (c = null === (_ = t.txParams) || void 0 === _ ? void 0 : _.gasPrice) && void 0 !== c ? c : (0, d.decGWEIToHexWEI)(O.gasPrice);
                                            break;
                                        case E.GAS_ESTIMATE_TYPES.LEGACY:
                                            C.gasPrice = null !== (A = null === (m = t.txParams) || void 0 === m ? void 0 : m.gasPrice) && void 0 !== A ? A : (0, S.getAveragePriceEstimateInHexWEI)(e);
                                        case E.GAS_ESTIMATE_TYPES.FEE_MARKET:
                                    }
                                const { txParams: { value: b = "0x0" } = {} } = t,
                                    k = (0, o.getValueFromWeiHex)({ value: b, fromCurrency: f, toCurrency: p, conversionRate: I, numberOfDecimals: 2 }),
                                    x = (0, o.getValueFromWeiHex)({ value: b, fromCurrency: f, toCurrency: f, conversionRate: I, numberOfDecimals: 6 }),
                                    H = (0, T.getMinimumGasTotalInHexWei)(C),
                                    G = (0, T.getMaximumGasTotalInHexWei)(C),
                                    F = (0, o.getTransactionFee)({ value: H, fromCurrency: f, toCurrency: p, numberOfDecimals: 2, conversionRate: I }),
                                    B = (0, o.getTransactionFee)({ value: G, fromCurrency: f, toCurrency: p, numberOfDecimals: 2, conversionRate: I }),
                                    W = (0, o.getTransactionFee)({ value: H, fromCurrency: f, toCurrency: f, numberOfDecimals: 6, conversionRate: I });
                                return {
                                    hexTransactionAmount: b,
                                    fiatTransactionAmount: k,
                                    ethTransactionAmount: x,
                                    hexMinimumTransactionFee: H,
                                    fiatMinimumTransactionFee: F,
                                    hexMaximumTransactionFee: G,
                                    fiatMaximumTransactionFee: B,
                                    ethTransactionFee: W,
                                    fiatTransactionTotal: (0, o.addFiat)(F, k),
                                    ethTransactionTotal: (0, o.addEth)(W, x),
                                    hexTransactionTotal: (0, i.sumHexes)(b, H),
                                    gasEstimationObject: C,
                                };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6298,
            {
                ".": 6300,
                "../../app/scripts/lib/util": 86,
                "../../shared/constants/gas": 5329,
                "../../shared/lib/transactions-controller-utils": 5347,
                "../../shared/modules/conversion.utils": 5351,
                "../ducks/metamask/metamask": 5892,
                "../ducks/send": 5894,
                "../helpers/utils/confirm-tx.util": 5919,
                "../helpers/utils/conversions.util": 5920,
                "../helpers/utils/formatters": 5922,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.basicPriceEstimateToETHTotal = m),
                                (n.getAverageEstimate = A),
                                (n.getAveragePriceEstimateInHexWEI = function (e) {
                                    return p(A(e));
                                }),
                                (n.getBasicGasEstimateLoadingStatus = function (e) {
                                    return !1 === I(e);
                                }),
                                (n.getCustomGasLimit = function (e) {
                                    return e.gas.customData.limit;
                                }),
                                (n.getCustomGasPrice = T),
                                (n.getDefaultActiveButtonIndex = function (e, t, n) {
                                    return e.map(({ priceInHexWei: e }) => e).lastIndexOf((0, r.addHexPrefix)(t || n));
                                }),
                                (n.getFastPriceEstimate = S),
                                (n.getFastPriceEstimateInHexWEI = function (e) {
                                    return p(S(e) || "0x0");
                                }),
                                (n.getGasPriceInHexWei = p),
                                (n.getIsCustomNetworkGasPriceFetched = function (e) {
                                    return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.ETH_GASPRICE && !(0, E.getIsMainnet)(e);
                                }),
                                (n.getIsEthGasPriceFetched = function (e) {
                                    return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.ETH_GASPRICE && (0, E.getIsMainnet)(e);
                                }),
                                (n.getIsGasEstimatesFetched = I),
                                (n.getNoGasPriceFetched = function (e) {
                                    return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.NONE;
                                }),
                                (n.getRenderableConvertedCurrencyFee = function (e, t, n, r) {
                                    const i = m((0, a.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "hex" }), t),
                                        c = (0, o.decEthToConvertedCurrency)(i, n, r);
                                    return (0, s.formatCurrency)(c, n);
                                }),
                                (n.getRenderableEthFee = function (e, t, n = 9, r = "ETH") {
                                    const s = m((0, a.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "hex" }), t, n);
                                    return (0, i.formatETHFee)(s, r);
                                }),
                                (n.getSafeLowEstimate = _),
                                (n.isCustomPriceExcessive = function (e, t = !1) {
                                    const n = t ? (0, c.getGasPrice)(e) : T(e),
                                        r = S(e);
                                    if (!n || !r) return !1;
                                    return (0, a.conversionGreaterThan)({ value: n, fromNumericBase: "hex", fromDenomination: "WEI", toDenomination: "GWEI" }, { fromNumericBase: "dec", value: Math.floor(1.5 * r) });
                                }),
                                (n.isCustomPriceSafe = function (e) {
                                    const t = _(e),
                                        n = T(e);
                                    if (!n) return !0;
                                    if (!t) return !1;
                                    return (0, a.conversionGreaterThan)({ value: n, fromNumericBase: "hex", fromDenomination: "WEI", toDenomination: "GWEI" }, { value: t, fromNumericBase: "dec" });
                                }),
                                (n.isCustomPriceSafeForCustomNetwork = function (e) {
                                    const t = A(e),
                                        n = T(e);
                                    if (!n) return !0;
                                    if (!t) return !1;
                                    return (0, a.conversionGreaterThan)({ value: n, fromNumericBase: "hex", fromDenomination: "WEI", toDenomination: "GWEI" }, { value: t, fromNumericBase: "dec" });
                                }),
                                (n.priceEstimateToWei = N);
                            var r = e("../../app/scripts/lib/util"),
                                a = e("../../shared/modules/conversion.utils"),
                                s = e("../helpers/utils/confirm-tx.util"),
                                o = e("../helpers/utils/conversions.util"),
                                i = e("../helpers/utils/formatters"),
                                c = e("../ducks/send"),
                                u = e("../../shared/constants/gas"),
                                l = e("../ducks/metamask/metamask"),
                                d = e("../../shared/lib/transactions-controller-utils"),
                                E = e(".");
                            function T(e) {
                                return e.gas.customData.price;
                            }
                            function _(e) {
                                const t = (0, l.getGasFeeEstimates)(e);
                                return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.LEGACY ? (null == t ? void 0 : t.low) : null;
                            }
                            function A(e) {
                                const t = (0, l.getGasFeeEstimates)(e);
                                return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.LEGACY ? (null == t ? void 0 : t.medium) : null;
                            }
                            function S(e) {
                                const t = (0, l.getGasFeeEstimates)(e);
                                return (0, l.getGasEstimateType)(e) === u.GAS_ESTIMATE_TYPES.LEGACY ? (null == t ? void 0 : t.high) : null;
                            }
                            function m(e, t, n = 9) {
                                return (0, a.conversionUtil)((0, d.calcGasTotal)(t, e), { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "GWEI", numberOfDecimals: n });
                            }
                            function N(e) {
                                return (0, a.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "hex", fromDenomination: "GWEI", toDenomination: "WEI", numberOfDecimals: 9 });
                            }
                            function p(e) {
                                const t = (0, a.conversionUtil)(e, { fromNumericBase: "dec", toNumericBase: "hex" });
                                return (0, r.addHexPrefix)(N(t));
                            }
                            function I(e) {
                                const t = (0, l.getGasEstimateType)(e);
                                return !(0, l.isEIP1559Network)(e) && t !== u.GAS_ESTIMATE_TYPES.NONE;
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6299,
            { "../helpers/constants/routes": 5904 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getFirstTimeFlowType = void 0),
                                (n.getFirstTimeFlowTypeRoute = function (e) {
                                    const { firstTimeFlowType: t } = e.metamask;
                                    let n;
                                    n = "create" === t ? r.INITIALIZE_CREATE_PASSWORD_ROUTE : "import" === t ? r.INITIALIZE_IMPORT_WITH_SEED_PHRASE_ROUTE : r.DEFAULT_ROUTE;
                                    return n;
                                }),
                                (n.getOnboardingInitiator = void 0);
                            var r = e("../helpers/constants/routes");
                            n.getFirstTimeFlowType = (e) => e.metamask.firstTimeFlowType;
                            n.getOnboardingInitiator = (e) => {
                                const { onboardingTabs: t } = e.metamask;
                                if (!t || 1 !== Object.keys(t).length) return null;
                                const n = Object.keys(t)[0];
                                return { location: n, tabId: t[n] };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6300,
            { "./confirm-transaction": 6297, "./custom-gas": 6298, "./first-time-flow": 6299, "./metametrics": 6301, "./permissions": 6302, "./selectors": 6303, "./transactions": 6304 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 });
                            var r = e("./confirm-transaction");
                            Object.keys(r).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === r[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return r[e];
                                            },
                                        }));
                            });
                            var a = e("./custom-gas");
                            Object.keys(a).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === a[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return a[e];
                                            },
                                        }));
                            });
                            var s = e("./first-time-flow");
                            Object.keys(s).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === s[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return s[e];
                                            },
                                        }));
                            });
                            var o = e("./metametrics");
                            Object.keys(o).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === o[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return o[e];
                                            },
                                        }));
                            });
                            var i = e("./permissions");
                            Object.keys(i).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === i[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return i[e];
                                            },
                                        }));
                            });
                            var c = e("./selectors");
                            Object.keys(c).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === c[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return c[e];
                                            },
                                        }));
                            });
                            var u = e("./transactions");
                            Object.keys(u).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in n && n[e] === u[e]) ||
                                        Object.defineProperty(n, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return u[e];
                                            },
                                        }));
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6301,
            { reselect: 5005 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.selectMatchingFragment = n.selectFragments = n.selectFragmentBySuccessEvent = n.selectFragmentById = void 0);
                            var r = e("reselect");
                            const a = (e) => e.metamask.fragments;
                            n.selectFragments = a;
                            const s = (0, r.createSelector)(
                                a,
                                (e, t) => t,
                                (e, t) => (t.persist ? Object.values(e).find((e) => e.successEvent === t.successEvent) : undefined)
                            );
                            n.selectFragmentBySuccessEvent = s;
                            const o = (0, r.createSelector)(
                                a,
                                (e, t) => t,
                                (e, t) => (t && null != e && e[t] ? e[t] : undefined)
                            );
                            n.selectFragmentById = o;
                            const i = (0, r.createSelector)(
                                (e, t) => s(e, t.fragmentOptions),
                                (e, t) => o(e, t.existingId),
                                (e, t) => (null != t ? t : e)
                            );
                            n.selectMatchingFragment = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6302,
            { ".": 6300, "../../shared/constants/permissions": 5334 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.activeTabHasPermissions = function (e) {
                                    var t;
                                    const { activeTab: n, metamask: r } = e,
                                        { subjects: a = {} } = r;
                                    return Boolean(Object.keys((null === (t = a[n.origin]) || void 0 === t ? void 0 : t.permissions) || {}).length > 0);
                                }),
                                (n.getAccountToConnectToActiveTab = function (e) {
                                    const t = (0, a.getSelectedAddress)(e),
                                        n = i(e),
                                        {
                                            metamask: { identities: r },
                                        } = e,
                                        s = Object.keys(r).length;
                                    if (n.length && n.length !== s && -1 === n.findIndex((e) => e === t)) return r[t];
                                    return undefined;
                                }),
                                (n.getAddressConnectedSubjectMap = function (e) {
                                    const t = (0, a.getSubjectMetadata)(e),
                                        n = c(e),
                                        r = {};
                                    return (
                                        Object.keys(n).forEach((e) => {
                                            const { iconUrl: a, name: s } = t[e] || {};
                                            n[e].forEach((t) => {
                                                const n = s || e;
                                                r[t] = r[t] ? { ...r[t], [e]: { iconUrl: a, name: n } } : { [e]: { iconUrl: a, name: n } };
                                            });
                                        }),
                                        r
                                    );
                                }),
                                (n.getConnectedSubjectsForSelectedAddress = function (e) {
                                    const { selectedAddress: t } = e.metamask,
                                        n = s(e),
                                        r = (0, a.getSubjectMetadata)(e),
                                        o = [];
                                    return (
                                        Object.entries(n).forEach(([e, n]) => {
                                            if (!u(n).includes(t)) return;
                                            const { extensionId: a, name: s, iconUrl: i } = r[e] || {};
                                            o.push({ extensionId: a, origin: e, name: s, iconUrl: i });
                                        }),
                                        o
                                    );
                                }),
                                (n.getFirstPermissionRequest = function (e) {
                                    const t = E(e);
                                    return t && t[0] ? t[0] : null;
                                }),
                                (n.getLastConnectedInfo = function (e) {
                                    const { permissionHistory: t = {} } = e.metamask;
                                    return Object.keys(t).reduce((e, n) => (t[n].eth_accounts && (e[n] = JSON.parse(JSON.stringify(t[n].eth_accounts))), e), {});
                                }),
                                (n.getOrderedConnectedAccountsForActiveTab = function (e) {
                                    var t, n;
                                    const {
                                            activeTab: r,
                                            metamask: { permissionHistory: s },
                                        } = e,
                                        o = null === (t = s[r.origin]) || void 0 === t || null === (n = t.eth_accounts) || void 0 === n ? void 0 : n.accounts,
                                        c = (0, a.getMetaMaskAccountsOrdered)(e),
                                        u = i(e);
                                    return c
                                        .filter((e) => u.includes(e.address))
                                        .map((e) => ({ ...e, lastActive: null == o ? void 0 : o[e.address] }))
                                        .sort(({ lastSelected: e }, { lastSelected: t }) => (e === t ? 0 : e === undefined ? 1 : t === undefined ? -1 : t - e));
                                }),
                                (n.getPermissionSubjects = s),
                                (n.getPermissions = function (e, t) {
                                    var n;
                                    return null === (n = s(e)[t]) || void 0 === n ? void 0 : n.permissions;
                                }),
                                (n.getPermissionsForActiveTab = function (e) {
                                    var t;
                                    const { activeTab: n, metamask: r } = e,
                                        { subjects: a = {} } = r;
                                    return Object.keys((null === (t = a[n.origin]) || void 0 === t ? void 0 : t.permissions) || {}).map((e) => ({ key: e }));
                                }),
                                (n.getPermissionsRequests = E),
                                (n.getPermittedAccounts = o),
                                (n.getPermittedAccountsByOrigin = c),
                                (n.getPermittedAccountsForCurrentTab = i),
                                (n.getSubjectsWithPermission = function (e, t) {
                                    const n = s(e),
                                        r = [];
                                    return (
                                        Object.entries(n).forEach(([n, { permissions: s }]) => {
                                            if (s[t]) {
                                                const { extensionId: t, name: s, iconUrl: o } = (0, a.getTargetSubjectMetadata)(e, n) || {};
                                                r.push({ extensionId: t, origin: n, name: s, iconUrl: o });
                                            }
                                        }),
                                        r
                                    );
                                });
                            var r = e("../../shared/constants/permissions"),
                                a = e(".");
                            function s(e) {
                                return e.metamask.subjects || {};
                            }
                            function o(e, t) {
                                return d(
                                    l(
                                        (function (e, t) {
                                            var n;
                                            return t && (null === (n = e.metamask.subjects) || void 0 === n ? void 0 : n[t]);
                                        })(e, t)
                                    )
                                );
                            }
                            function i(e) {
                                return o(e, (0, a.getOriginOfCurrentTab)(e));
                            }
                            function c(e) {
                                const t = s(e);
                                return Object.keys(t).reduce((e, n) => {
                                    const r = u(t[n]);
                                    return r.length > 0 && (e[n] = r), e;
                                }, {});
                            }
                            function u(e) {
                                return d(l(e));
                            }
                            function l(e = {}) {
                                var t;
                                return (null === (t = e.permissions) || void 0 === t ? void 0 : t.eth_accounts) || {};
                            }
                            function d(e) {
                                const t = (function (e = {}) {
                                    return Array.isArray(e.caveats) && e.caveats.find((e) => e.type === r.CaveatTypes.restrictReturnedAccounts);
                                })(e);
                                return t && Array.isArray(t.value) ? t.value : [];
                            }
                            function E(e) {
                                return Object.values(e.metamask.pendingApprovals)
                                    .filter(({ type: e }) => "wallet_requestPermissions" === e)
                                    .map(({ requestData: e }) => e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6303,
            {
                "../../app/scripts/lib/util": 86,
                "../../shared/constants/app": 5328,
                "../../shared/constants/hardware-wallets": 5330,
                "../../shared/constants/labels": 5331,
                "../../shared/constants/network": 5333,
                "../../shared/constants/swaps": 5337,
                "../../shared/constants/time": 5338,
                "../../shared/constants/tokens": 5339,
                "../../shared/constants/transaction": 5340,
                "../../shared/lib/metamask-controller-utils": 5343,
                "../../shared/modules/hexstring-utils": 5354,
                "../../shared/modules/string-utils": 5361,
                "../ducks/app/app": 5884,
                "../ducks/metamask/metamask": 5892,
                "../helpers/utils/conversions.util": 5920,
                "../helpers/utils/moonpay": 5929,
                "../helpers/utils/util": 5937,
                "../pages/confirmation/templates": 6032,
                lodash: 4694,
                reselect: 5005,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.accountsWithSendEtherInfoSelector = W),
                                (n.checkNetworkAndAccountSupports1559 = function (e) {
                                    const t = (0, m.isEIP1559Network)(e);
                                    return t && true;
                                }),
                                (n.checkNetworkOrAccountNotSupports1559 = function (e) {
                                    const t = (0, m.isNotEIP1559Network)(e);
                                    return t || !1;
                                }),
                                (n.deprecatedGetCurrentNetworkId = P),
                                (n.doesAddressRequireLedgerHidConnection = function (e, t) {
                                    const n = (0, m.isAddressLedger)(e, t),
                                        r = (0, m.getLedgerTransportType)(e) === i.LEDGER_TRANSPORT_TYPES.WEBHID,
                                        a = (0, N.getLedgerWebHidConnectedStatus)(e) !== i.WEBHID_CONNECTED_STATUSES.CONNECTED,
                                        s = (0, N.getLedgerTransportStatus)(e) !== i.TRANSPORT_STATES.VERIFIED;
                                    return n && r && (a || s);
                                }),
                                (n.getAccountName = function (e, t) {
                                    const n = Object.values(e).find((e) => (0, p.isEqualCaseInsensitive)(e.address, (0, A.toChecksumHexAddress)(t)));
                                    return n && "" !== n.name ? n.name : "";
                                }),
                                (n.getAccountType = function (e) {
                                    const t = g(e);
                                    switch (t && t.type) {
                                        case i.KEYRING_TYPES.TREZOR:
                                        case i.KEYRING_TYPES.LEDGER:
                                        case i.KEYRING_TYPES.LATTICE:
                                            return "hardware";
                                        case "Simple Key Pair":
                                            return "imported";
                                        default:
                                            return "default";
                                    }
                                }),
                                (n.getAccountsWithLabels = function (e) {
                                    return k(e).map(({ address: e, name: t, balance: n }) => ({
                                        address: e,
                                        addressLabel: `${t.length < u.TRUNCATED_NAME_CHAR_LIMIT ? t : `${t.slice(0, u.TRUNCATED_NAME_CHAR_LIMIT - 1)}...`} (${(0, d.shortenAddress)(e)})`,
                                        label: t,
                                        balance: n,
                                    }));
                                }),
                                (n.getAddressBook = F),
                                (n.getAddressBookEntry = B),
                                (n.getAddressBookEntryOrAccountName = function (e, t) {
                                    const n = B(e, t) || Object.values(e.metamask.identities).find((e) => (0, p.isEqualCaseInsensitive)(e.address, (0, A.toChecksumHexAddress)(t)));
                                    return n && "" !== n.name ? n.name : t;
                                }),
                                (n.getAdvancedGasFeeValues = function (e) {
                                    return e.metamask.advancedGasFee;
                                }),
                                (n.getAdvancedInlineGasShown = function (e) {
                                    return Boolean(e.metamask.featureFlags.advancedInlineGas);
                                }),
                                (n.getAllAccountsOnNetworkAreEmpty = function (e) {
                                    var t;
                                    const n = null !== (t = b(e)) && void 0 !== t ? t : {},
                                        r = Object.values(n).every((e) => "0x0" === e || "0x00" === e),
                                        a = 0 === y(e);
                                    return r && a;
                                }),
                                (n.getAppIsLoading = function (e) {
                                    return e.appState.isLoading;
                                }),
                                (n.getBlockExplorerLinkText = function (e, t = !1) {
                                    const n = ue(e),
                                        r = z(e);
                                    let a = { firstPart: "addBlockExplorer", secondPart: "" };
                                    r.blockExplorerUrl
                                        ? (a = t ? { firstPart: "blockExplorerView", secondPart: (0, d.getURLHostName)(r.blockExplorerUrl) } : { firstPart: "viewinExplorer", secondPart: "blockExplorerAccountAction" })
                                        : !1 === n && (a = t ? { firstPart: "etherscanViewOn", secondPart: "" } : { firstPart: "viewOnEtherscan", secondPart: "blockExplorerAccountAction" });
                                    return a;
                                }),
                                (n.getCurrentAccountWithSendEtherInfo = Y),
                                (n.getCurrentChainId = R),
                                (n.getCurrentCurrency = function (e) {
                                    return e.metamask.currentCurrency;
                                }),
                                (n.getCurrentEthBalance = K),
                                (n.getCurrentKeyring = g),
                                (n.getCurrentQRHardwareState = function (e) {
                                    const { qrHardware: t } = e.metamask;
                                    return t || {};
                                }),
                                (n.getCustomNonceValue = function (e) {
                                    return String(e.metamask.customNonceValue);
                                }),
                                (n.getCustomTokenAmount = function (e) {
                                    return e.appState.customTokenAmount;
                                }),
                                (n.getDetectedTokensInCurrentNetwork = function (e) {
                                    return e.metamask.detectedTokens;
                                }),
                                (n.getEIP1559V2Enabled = function (e) {
                                    return e.metamask.eip1559V2Enabled;
                                }),
                                (n.getEnsResolutionByAddress = function (e, t) {
                                    return e.metamask.ensResolutionsByAddress[t] || "";
                                }),
                                (n.getFeatureFlags = function (e) {
                                    return e.metamask.featureFlags;
                                }),
                                (n.getFrequentRpcListDetail = function (e) {
                                    return e.metamask.frequentRpcListDetail;
                                }),
                                (n.getFullTxData = void 0),
                                (n.getGasIsLoading = function (e) {
                                    return e.appState.gasIsLoading;
                                }),
                                (n.getHardwareWalletType = function (e) {
                                    const t = g(e);
                                    return h(e) ? t.type : undefined;
                                }),
                                (n.getInfuraBlocked = function (e) {
                                    return Boolean(e.metamask.infuraBlocked);
                                }),
                                (n.getIpfsGateway = function (e) {
                                    return e.metamask.ipfsGateway;
                                }),
                                (n.getIsAdvancedGasFeeDefault = function (e) {
                                    const { advancedGasFee: t } = e.metamask;
                                    return Boolean(null == t ? void 0 : t.maxBaseFee) && Boolean(null == t ? void 0 : t.priorityFee);
                                }),
                                (n.getIsBuyableChain = function (e) {
                                    const t = R(e);
                                    return Object.keys(o.BUYABLE_CHAINS_MAP).includes(t);
                                }),
                                (n.getIsBuyableCoinbasePayChain = function (e) {
                                    var t;
                                    const n = R(e);
                                    return Boolean(null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (t = o.BUYABLE_CHAINS_MAP[n]) || void 0 === t ? void 0 : t.coinbasePayCurrencies);
                                }),
                                (n.getIsBuyableCoinbasePayToken = function (e, t) {
                                    var n, r;
                                    const a = R(e);
                                    return Boolean(
                                        null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (n = o.BUYABLE_CHAINS_MAP[a]) || void 0 === n || null === (r = n.coinbasePayCurrencies) || void 0 === r
                                            ? void 0
                                            : r.includes(t)
                                    );
                                }),
                                (n.getIsBuyableMoonPayChain = function (e) {
                                    var t;
                                    const n = R(e);
                                    return Boolean(null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (t = o.BUYABLE_CHAINS_MAP[n]) || void 0 === t ? void 0 : t.moonPay);
                                }),
                                (n.getIsBuyableMoonpayToken = function (e, t) {
                                    var n, r, a;
                                    const s = R(e),
                                        i = (0, f.formatMoonpaySymbol)(t, s);
                                    return Boolean(
                                        null === o.BUYABLE_CHAINS_MAP ||
                                            void 0 === o.BUYABLE_CHAINS_MAP ||
                                            null === (n = o.BUYABLE_CHAINS_MAP[s]) ||
                                            void 0 === n ||
                                            null === (r = n.moonPay) ||
                                            void 0 === r ||
                                            null === (a = r.showOnlyCurrencies) ||
                                            void 0 === a
                                            ? void 0
                                            : a.includes(i)
                                    );
                                }),
                                (n.getIsBuyableTransakChain = function (e) {
                                    var t;
                                    const n = R(e);
                                    return Boolean(null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (t = o.BUYABLE_CHAINS_MAP[n]) || void 0 === t ? void 0 : t.transakCurrencies);
                                }),
                                (n.getIsBuyableTransakToken = function (e, t) {
                                    var n, r;
                                    const a = R(e);
                                    return Boolean(
                                        null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (n = o.BUYABLE_CHAINS_MAP[a]) || void 0 === n || null === (r = n.transakCurrencies) || void 0 === r
                                            ? void 0
                                            : r.includes(t)
                                    );
                                }),
                                (n.getIsBuyableWyreChain = function (e) {
                                    var t;
                                    const n = R(e);
                                    return Boolean(null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (t = o.BUYABLE_CHAINS_MAP[n]) || void 0 === t ? void 0 : t.wyre);
                                }),
                                (n.getIsBuyableWyreToken = function (e, t) {
                                    var n, r;
                                    const a = R(e);
                                    return Boolean(
                                        null === o.BUYABLE_CHAINS_MAP || void 0 === o.BUYABLE_CHAINS_MAP || null === (n = o.BUYABLE_CHAINS_MAP[a]) || void 0 === n || null === (r = n.wyre) || void 0 === r ? void 0 : r.currencies.includes(t)
                                    );
                                }),
                                (n.getIsCustomNetwork = ue),
                                (n.getIsDynamicTokenListAvailable = ie),
                                (n.getIsMainnet = j),
                                (n.getIsMultiLayerFeeNetwork = function (e) {
                                    return oe(e);
                                }),
                                (n.getIsNetworkUsed = function (e) {
                                    const t = R(e),
                                        { usedNetworks: n } = e.metamask;
                                    return Boolean(n[t]);
                                }),
                                (n.getIsNonStandardEthChain = function (e) {
                                    return !(j(e) || $(e));
                                }),
                                (n.getIsOptimism = oe),
                                (n.getIsSwapsChain = function (e) {
                                    const t = R(e);
                                    return l.ALLOWED_PROD_SWAPS_CHAIN_IDS.includes(t);
                                }),
                                (n.getIsTestnet = $),
                                (n.getIsTokenDetectionInactiveOnMainnet = ce),
                                (n.getIsTokenDetectionSupported = function (e) {
                                    const t = re(e),
                                        n = ie(e);
                                    return t && n;
                                }),
                                (n.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork = function (e) {
                                    const t = re(e),
                                        n = j(e);
                                    return ie(e) && !t && !n;
                                }),
                                (n.getKnownMethodData = function (e, t) {
                                    if (!t) return null;
                                    const n = (0, s.addHexPrefix)(t).slice(0, 10),
                                        { knownMethodData: r } = e.metamask;
                                    return r && r[n];
                                }),
                                (n.getMetaMaskAccountsOrdered = n.getMetaMaskAccountsConnected = n.getMetaMaskAccounts = void 0),
                                (n.getMetaMaskAccountsRaw = w),
                                (n.getMetaMaskCachedBalances = b),
                                (n.getMetaMaskIdentities = U),
                                (n.getMetaMaskKeyrings = M),
                                (n.getMetadataContractName = function (e, t) {
                                    const n = ae(e),
                                        r = Object.values(n).find((e) => (0, p.isEqualCaseInsensitive)(e.address, (0, A.toChecksumHexAddress)(t)));
                                    return r && "" !== r.name ? r.name : "";
                                }),
                                (n.getMetricsNetworkIdentifier = function (e) {
                                    const { provider: t } = e.metamask;
                                    return t.type === o.NETWORK_TYPES.RPC ? t.rpcUrl : t.type;
                                }),
                                (n.getNativeCurrencyImage = function (e) {
                                    var t;
                                    const n = null === (t = (0, m.getNativeCurrency)(e)) || void 0 === t ? void 0 : t.toUpperCase();
                                    return o.NATIVE_CURRENCY_TOKEN_IMAGE_MAP[n];
                                }),
                                (n.getNetworkIdentifier = function (e) {
                                    const {
                                        metamask: {
                                            provider: { type: t, nickname: n, rpcUrl: r },
                                        },
                                    } = e;
                                    return n || r || t;
                                }),
                                (n.getNetworkSupportsSettingGasFees = function (e) {
                                    return !oe(e);
                                }),
                                (n.getNetworksTabSelectedRpcUrl = function (e) {
                                    return e.appState.networksTabSelectedRpcUrl;
                                }),
                                (n.getNewCollectibleAddedMessage = function (e) {
                                    return e.appState.newCollectibleAddedMessage;
                                }),
                                (n.getNewNetworkAdded = function (e) {
                                    return e.appState.newNetworkAdded;
                                }),
                                (n.getNewTokensImported = function (e) {
                                    return e.appState.newTokensImported;
                                }),
                                (n.getNextSuggestedNonce = function (e) {
                                    return Number(e.metamask.nextNonce);
                                }),
                                (n.getNumberOfAccounts = function (e) {
                                    return Object.keys(e.metamask.accounts).length;
                                }),
                                (n.getNumberOfTokens = y),
                                (n.getOpenSeaEnabled = function (e) {
                                    return Boolean(e.metamask.openSeaEnabled);
                                }),
                                (n.getOriginOfCurrentTab = function (e) {
                                    return e.activeTab.origin;
                                }),
                                (n.getParticipateInMetaMetrics = function (e) {
                                    return Boolean(e.metamask.participateInMetaMetrics);
                                }),
                                (n.getPreferences = X),
                                (n.getProvider = se),
                                (n.getRpcPrefsForCurrentProvider = z),
                                (n.getSelectedAccount = G),
                                (n.getSelectedAccountCachedBalance = H),
                                (n.getSelectedAddress = L),
                                (n.getSelectedIdentity = v),
                                (n.getShouldHideZeroBalanceTokens = function (e) {
                                    const { hideZeroBalanceTokens: t } = X(e);
                                    return t;
                                }),
                                (n.getShouldShowFiat = function (e) {
                                    const t = j(e),
                                        n = ue(e),
                                        r = (0, m.getConversionRate)(e),
                                        { showFiatInTestnets: a } = X(e);
                                    return Boolean((t || n || a) && r);
                                }),
                                (n.getShouldShowSeedPhraseReminder = function (e) {
                                    var t;
                                    const { tokens: n, seedPhraseBackedUp: r, dismissSeedBackUpReminder: a } = e.metamask,
                                        s = null !== (t = K(e)) && void 0 !== t ? t : 0;
                                    return !1 === r && (parseInt(s, 16) > 0 || n.length > 0) && !1 === a;
                                }),
                                (n.getShowBetaHeader = function (e) {
                                    return e.metamask.showBetaHeader;
                                }),
                                (n.getShowPortfolioTooltip = function (e) {
                                    return e.metamask.showPortfolioTooltip;
                                }),
                                (n.getShowRecoveryPhraseReminder = function (e) {
                                    const { recoveryPhraseReminderLastShown: t, recoveryPhraseReminderHasBeenShown: n } = e.metamask,
                                        r = new Date().getTime(),
                                        a = n ? 90 * S.DAY : 2 * S.DAY;
                                    return r - t >= a;
                                }),
                                (n.getShowTestNetworks = function (e) {
                                    const { showTestNetworks: t } = X(e);
                                    return Boolean(t);
                                }),
                                (n.getShowWhatsNewPopup = function (e) {
                                    return e.appState.showWhatsNewPopup;
                                }),
                                (n.getSortedAnnouncementsToShow = function (e) {
                                    const t = Object.values(e.metamask.announcements),
                                        n = (function (e) {
                                            const t = g(e),
                                                n = (null == t ? void 0 : t.type) === i.KEYRING_TYPES.LEDGER,
                                                r = window.navigator.hid !== undefined,
                                                a = (0, m.getLedgerTransportType)(e) === i.LEDGER_TRANSPORT_TYPES.LIVE;
                                            return { 1: !1, 2: !1, 3: !1, 4: !1, 5: !1, 6: !1, 7: !1, 8: r && n && a, 9: !1, 10: !0, 11: !0, 12: !1, 13: !1, 14: !1, 15: !0 };
                                        })(e),
                                        r = t.filter((e) => !e.isShown && n[e.id]);
                                    return r.sort((e, t) => new Date(t.date) - new Date(e.date));
                                }),
                                (n.getSubjectMetadata = q),
                                (n.getSuggestedAssets = function (e) {
                                    return e.metamask.suggestedAssets;
                                }),
                                (n.getSwapsDefaultToken = function (e) {
                                    const t = G(e),
                                        { balance: n } = t,
                                        r = R(e);
                                    return { ...l.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[r], balance: (0, I.hexToDecimal)(n), string: (0, E.getValueFromWeiHex)({ value: n, numberOfDecimals: 4, toDenomination: "ETH" }) };
                                }),
                                (n.getTargetAccount = function (e, t) {
                                    return D(e)[t];
                                }),
                                (n.getTargetAccountWithSendEtherInfo = function (e, t) {
                                    const n = W(e);
                                    return (0, d.getAccountByAddress)(n, t);
                                }),
                                (n.getTargetSubjectMetadata = function (e, t) {
                                    return q(e)[t];
                                }),
                                (n.getTheme = function (e) {
                                    return e.metamask.theme;
                                }),
                                (n.getTokenExchangeRates = n.getTokenDetectionSupportNetworkByChainId = void 0),
                                (n.getTokenList = ae),
                                (n.getTotalUnapprovedCount = function (e) {
                                    const {
                                        unapprovedMsgCount: t = 0,
                                        unapprovedPersonalMsgCount: n = 0,
                                        unapprovedDecryptMsgCount: r = 0,
                                        unapprovedEncryptionPublicKeyMsgCount: a = 0,
                                        unapprovedTypedMessagesCount: s = 0,
                                        pendingApprovalCount: o = 0,
                                    } = e.metamask;
                                    return (
                                        t +
                                        n +
                                        r +
                                        a +
                                        s +
                                        (function (e) {
                                            const { unapprovedTxs: t = {} } = e.metamask;
                                            return Object.keys(t).length;
                                        })(e) +
                                        o +
                                        (function (e) {
                                            const { suggestedAssets: t = [] } = e.metamask;
                                            return t.length;
                                        })(e)
                                    );
                                }),
                                (n.getTotalUnapprovedMessagesCount = function (e) {
                                    const { unapprovedMsgCount: t = 0, unapprovedPersonalMsgCount: n = 0, unapprovedDecryptMsgCount: r = 0, unapprovedEncryptionPublicKeyMsgCount: a = 0, unapprovedTypedMessagesCount: s = 0 } = e.metamask;
                                    return t + n + r + a + s;
                                }),
                                (n.getTxData = n.getTransaction = void 0),
                                (n.getUSDConversionRate = function (e) {
                                    return e.metamask.usdConversionRate;
                                }),
                                (n.getUnapprovedConfirmations = V),
                                (n.getUnapprovedTemplatedConfirmations = function (e) {
                                    return V(e).filter((e) => T.TEMPLATED_CONFIRMATION_MESSAGE_TYPES.includes(e.type));
                                }),
                                (n.getUnapprovedTransactions = n.getUnapprovedTransaction = void 0),
                                (n.getUseCollectibleDetection = function (e) {
                                    return Boolean(e.metamask.useCollectibleDetection);
                                }),
                                (n.getUseNonceField = function (e) {
                                    return Boolean(e.metamask.useNonceField);
                                }),
                                (n.getUseTokenDetection = re),
                                (n.getWeb3ShimUsageStateForOrigin = function (e, t) {
                                    return e.metamask.web3ShimUsageOrigins[t];
                                }),
                                (n.hasUnsignedQRHardwareMessage = function (e) {
                                    const { type: t, msgParams: n } = e.confirmTransaction.txData;
                                    if (!t || !n) return !1;
                                    const { from: r } = n,
                                        { keyrings: a } = e.metamask,
                                        s = a.find((e) => e.type === i.KEYRING_TYPES.QR);
                                    if (!s) return !1;
                                    switch (t) {
                                        case c.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA:
                                        case c.MESSAGE_TYPE.ETH_SIGN:
                                        case c.MESSAGE_TYPE.PERSONAL_SIGN:
                                            return Boolean(s.accounts.find((e) => e.toLowerCase() === r.toLowerCase()));
                                        default:
                                            return !1;
                                    }
                                }),
                                (n.hasUnsignedQRHardwareTransaction = function (e) {
                                    const { txParams: t } = e.confirmTransaction.txData;
                                    if (!t) return !1;
                                    const { from: n } = t,
                                        { keyrings: r } = e.metamask,
                                        a = r.find((e) => e.type === i.KEYRING_TYPES.QR);
                                    if (!a) return !1;
                                    return Boolean(a.accounts.find((e) => e.toLowerCase() === n.toLowerCase()));
                                }),
                                (n.isBalanceCached = function (e) {
                                    const t = e.metamask.accounts[L(e)].balance,
                                        n = H(e);
                                    return Boolean(!t && n);
                                }),
                                (n.isCurrentProviderCustom = function (e) {
                                    const t = se(e);
                                    return t.type === o.NETWORK_TYPES.RPC && !Object.values(o.CHAIN_IDS).includes(t.chainId);
                                }),
                                (n.isEIP1559Account = C),
                                (n.isHardwareWallet = h),
                                (n.isNetworkLoading = function (e) {
                                    return "loading" === e.metamask.network;
                                });
                            var r = e("reselect"),
                                a = e("lodash"),
                                s = e("../../app/scripts/lib/util"),
                                o = e("../../shared/constants/network"),
                                i = e("../../shared/constants/hardware-wallets"),
                                c = e("../../shared/constants/app"),
                                u = e("../../shared/constants/labels"),
                                l = e("../../shared/constants/swaps"),
                                d = e("../helpers/utils/util"),
                                E = e("../helpers/utils/conversions.util"),
                                T = e("../pages/confirmation/templates"),
                                _ = e("../../shared/constants/tokens"),
                                A = e("../../shared/modules/hexstring-utils"),
                                S = e("../../shared/constants/time"),
                                m = e("../ducks/metamask/metamask"),
                                N = e("../ducks/app/app"),
                                p = e("../../shared/modules/string-utils"),
                                I = e("../../shared/lib/metamask-controller-utils"),
                                f = e("../helpers/utils/moonpay"),
                                O = e("../../shared/constants/transaction");
                            function R(e) {
                                const { chainId: t } = e.metamask.provider;
                                return t;
                            }
                            function g(e) {
                                const t = v(e);
                                if (!t) return null;
                                return (0, m.findKeyringForAddress)(e, t.address);
                            }
                            function C() {
                                return !0;
                            }
                            function h(e) {
                                var t;
                                const n = g(e);
                                return Boolean(null == n || null === (t = n.type) || void 0 === t ? void 0 : t.includes("Hardware"));
                            }
                            function P(e) {
                                return e.metamask.network;
                            }
                            const D = (0, r.createSelector)(w, b, (e, t) => Object.entries(e).reduce((e, [n, r]) => (null === r.balance || r.balance === undefined ? { ...e, [n]: { ...r, balance: t && t[n] } } : { ...e, [n]: r }), {}));
                            function L(e) {
                                return e.metamask.selectedAddress;
                            }
                            function v(e) {
                                const t = L(e),
                                    { identities: n } = e.metamask;
                                return n[t];
                            }
                            function y(e) {
                                const { tokens: t } = e.metamask;
                                return t ? t.length : 0;
                            }
                            function M(e) {
                                return e.metamask.keyrings;
                            }
                            function U(e) {
                                return e.metamask.identities;
                            }
                            function w(e) {
                                return e.metamask.accounts;
                            }
                            function b(e) {
                                var t;
                                const n = R(e),
                                    r = P(e);
                                return null !== (t = e.metamask.cachedBalances[n]) && void 0 !== t ? t : e.metamask.cachedBalances[r];
                            }
                            n.getMetaMaskAccounts = D;
                            const k = (0, r.createSelector)(M, U, D, (e, t, n) =>
                                e
                                    .reduce((e, t) => e.concat(t.accounts), [])
                                    .filter((e) => Boolean(t[e]))
                                    .map((e) => ({ ...t[e], ...n[e] }))
                            );
                            n.getMetaMaskAccountsOrdered = k;
                            const x = (0, r.createSelector)(k, (e) => e.map(({ address: e }) => e.toLowerCase()));
                            function H(e) {
                                const t = b(e),
                                    n = L(e);
                                return t && t[n];
                            }
                            function G(e) {
                                return D(e)[L(e)];
                            }
                            n.getMetaMaskAccountsConnected = x;
                            function F(e) {
                                const t = R(e);
                                return e.metamask.addressBook[t] ? Object.values(e.metamask.addressBook[t]) : [];
                            }
                            function B(e, t) {
                                return F(e).find((e) => (0, p.isEqualCaseInsensitive)(e.address, (0, A.toChecksumHexAddress)(t)));
                            }
                            function W(e) {
                                const t = D(e),
                                    n = U(e);
                                return Object.entries(n).map(([e, n]) => ({ ...n, ...t[e] }));
                            }
                            function Y(e) {
                                const t = L(e),
                                    n = W(e);
                                return (0, d.getAccountByAddress)(n, t);
                            }
                            function K(e) {
                                var t;
                                return null === (t = Y(e)) || void 0 === t ? void 0 : t.balance;
                            }
                            function V(e) {
                                const { pendingApprovals: t } = e.metamask;
                                return Object.values(t);
                            }
                            function j(e) {
                                return R(e) === o.CHAIN_IDS.MAINNET;
                            }
                            function $(e) {
                                const t = R(e);
                                return o.TEST_CHAINS.includes(t);
                            }
                            function X({ metamask: e }) {
                                return e.preferences;
                            }
                            function q(e) {
                                return e.metamask.subjectMetadata;
                            }
                            function z(e) {
                                const { frequentRpcListDetail: t, provider: n } = e.metamask,
                                    r = t.find((e) => e.rpcUrl === n.rpcUrl),
                                    { rpcPrefs: a = {} } = r || {};
                                return a;
                            }
                            n.getTokenExchangeRates = (e) => e.metamask.contractExchangeRates;
                            const Q = (0, r.createSelectorCreator)(r.defaultMemoize, a.isEqual),
                                Z = (e) => e.metamask.unapprovedTxs;
                            n.getUnapprovedTransactions = Z;
                            const J = (e) => e.confirmTransaction.txData;
                            n.getTxData = J;
                            const ee = Q(
                                Z,
                                (e, t) => t,
                                (e, t) => Object.values(e).find(({ id: e }) => e === t) || {}
                            );
                            n.getUnapprovedTransaction = ee;
                            const te = Q(
                                (e) => e.metamask.currentNetworkTxList,
                                (e, t) => t,
                                (e, t) => Object.values(e).find(({ id: e }) => e === t) || {}
                            );
                            n.getTransaction = te;
                            const ne = Q(
                                J,
                                (e, t, n) => (n === O.TRANSACTION_STATUSES.UNAPPROVED ? ee(e, t) : te(e, t)),
                                (e, t, n, r) => r,
                                (e, t, n) => {
                                    let r = { ...e, ...t };
                                    return t && t.simulationFails && (e.simulationFails = t.simulationFails), n && (r = { ...r, txParams: { ...r.txParams, data: n } }), r;
                                }
                            );
                            function re(e) {
                                return Boolean(e.metamask.useTokenDetection);
                            }
                            function ae(e) {
                                return ce(e) ? _.STATIC_MAINNET_TOKEN_LIST : e.metamask.tokenList;
                            }
                            function se(e) {
                                return e.metamask.provider;
                            }
                            function oe(e) {
                                return R(e) === o.CHAIN_IDS.OPTIMISM || R(e) === o.CHAIN_IDS.OPTIMISM_TESTNET;
                            }
                            n.getFullTxData = ne;
                            function ie(e) {
                                const t = R(e);
                                return [o.CHAIN_IDS.MAINNET, o.CHAIN_IDS.BSC, o.CHAIN_IDS.POLYGON, o.CHAIN_IDS.AVALANCHE].includes(t);
                            }
                            function ce(e) {
                                const t = j(e);
                                return !re(e) && t;
                            }
                            function ue(e) {
                                const t = R(e);
                                return !o.CHAIN_ID_TO_RPC_URL_MAP[t];
                            }
                            n.getTokenDetectionSupportNetworkByChainId = (e) => {
                                switch (R(e)) {
                                    case o.CHAIN_IDS.MAINNET:
                                        return o.MAINNET_DISPLAY_NAME;
                                    case o.CHAIN_IDS.BSC:
                                        return o.BSC_DISPLAY_NAME;
                                    case o.CHAIN_IDS.POLYGON:
                                        return o.POLYGON_DISPLAY_NAME;
                                    case o.CHAIN_IDS.AVALANCHE:
                                        return o.AVALANCHE_DISPLAY_NAME;
                                    default:
                                        return "";
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6304,
            {
                "../../shared/constants/transaction": 5340,
                "../../shared/lib/metamask-controller-utils": 5343,
                "../../shared/modules/transaction.utils": 5363,
                "../helpers/constants/transactions": 5906,
                "../helpers/utils/tx-helper": 5936,
                "./selectors": 6303,
                reselect: 5005,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.unapprovedTypedMessagesSelector = n.unapprovedPersonalMsgsSelector = n.unapprovedMsgsSelector = n.unapprovedMessagesSelector = n.unapprovedEncryptionPublicKeyMsgsSelector = n.unapprovedDecryptMsgsSelector = n.transactionsSelector = n.transactionSubSelector = n.submittedPendingTransactionsSelector = n.smartTransactionsListSelector = n.selectedAddressTxListSelector = n.nonceSortedTransactionsSelector = n.nonceSortedPendingTransactionsSelector = n.nonceSortedCompletedTransactionsSelector = n.incomingTxListSelector = n.currentNetworkTxListSelector = void 0);
                            var r,
                                a = e("reselect"),
                                s = e("../helpers/constants/transactions"),
                                o = (r = e("../helpers/utils/tx-helper")) && r.__esModule ? r : { default: r },
                                i = e("../../shared/constants/transaction"),
                                c = e("../../shared/modules/transaction.utils"),
                                u = e("../../shared/lib/metamask-controller-utils"),
                                l = e("./selectors");
                            const d = [i.TRANSACTION_TYPES.CANCEL, i.TRANSACTION_TYPES.RETRY],
                                E = (e) => {
                                    const { showIncomingTransactions: t } = e.metamask.featureFlags;
                                    if (!t) return [];
                                    const {
                                            network: n,
                                            provider: { chainId: r },
                                        } = e.metamask,
                                        a = (0, l.getSelectedAddress)(e);
                                    return Object.values(e.metamask.incomingTransactions).filter((e) => e.txParams.to === a && (0, c.transactionMatchesNetwork)(e, r, n));
                                };
                            n.incomingTxListSelector = E;
                            const T = (e) => e.metamask.unapprovedMsgs;
                            n.unapprovedMsgsSelector = T;
                            const _ = (e) => e.metamask.currentNetworkTxList;
                            n.currentNetworkTxListSelector = _;
                            const A = (e) => e.metamask.unapprovedPersonalMsgs;
                            n.unapprovedPersonalMsgsSelector = A;
                            const S = (e) => e.metamask.unapprovedDecryptMsgs;
                            n.unapprovedDecryptMsgsSelector = S;
                            const m = (e) => e.metamask.unapprovedEncryptionPublicKeyMsgs;
                            n.unapprovedEncryptionPublicKeyMsgsSelector = m;
                            const N = (e) => e.metamask.unapprovedTypedMessages;
                            n.unapprovedTypedMessagesSelector = N;
                            const p = (e) => {
                                var t, n, r;
                                return null === (t = e.metamask.smartTransactionsState) || void 0 === t || null === (n = t.smartTransactions) || void 0 === n || null === (r = n[(0, l.getCurrentChainId)(e)]) || void 0 === r
                                    ? void 0
                                    : r
                                          .filter((e) => !e.confirmed)
                                          .map((e) => {
                                              var t;
                                              return { ...e, transactionType: i.TRANSACTION_TYPES.SMART, status: null !== (t = e.status) && void 0 !== t && t.startsWith("cancelled") ? i.SMART_TRANSACTION_STATUSES.CANCELLED : e.status };
                                          });
                            };
                            n.smartTransactionsListSelector = p;
                            const I = (0, a.createSelector)(l.getSelectedAddress, _, p, (e, t = [], n = []) => t.filter(({ txParams: t }) => t.from === e).concat(n));
                            n.selectedAddressTxListSelector = I;
                            const f = (0, a.createSelector)(T, A, S, m, N, l.deprecatedGetCurrentNetworkId, l.getCurrentChainId, (e = {}, t = {}, n = {}, r = {}, a = {}, s, i) => (0, o.default)({}, e, t, n, r, a, s, i) || []);
                            n.unapprovedMessagesSelector = f;
                            const O = (0, a.createSelector)(f, E, (e = [], t = []) => e.concat(t));
                            n.transactionSubSelector = O;
                            const R = (0, a.createSelector)(O, I, (e = [], t = []) => t.concat(e).sort((e, t) => t.time - e.time));
                            n.transactionsSelector = R;
                            const g = (e, t) => {
                                    const { primaryTransaction: { time: n } = {} } = t;
                                    let r = e.length;
                                    for (let t = 0; t < e.length; t++) {
                                        const a = e[t],
                                            { primaryTransaction: { time: s } = {} } = a;
                                        if (s > n) {
                                            r = t;
                                            break;
                                        }
                                    }
                                    e.splice(r, 0, t);
                                },
                                C = (0, a.createSelector)(R, (e = []) => {
                                    const t = [],
                                        n = [],
                                        r = [],
                                        a = {};
                                    e.forEach((e) => {
                                        const { txParams: { nonce: o } = {}, status: c, type: l, time: E, txReceipt: T } = e;
                                        if (void 0 === o || l === i.TRANSACTION_TYPES.INCOMING) {
                                            const r = { transactions: [e], initialTransaction: e, primaryTransaction: e, hasRetried: !1, hasCancelled: !1, nonce: o };
                                            l === i.TRANSACTION_TYPES.INCOMING ? n.push(r) : g(t, r);
                                        } else if (o in a) {
                                            var _, A, S;
                                            const t = a[o];
                                            ((e, t) => {
                                                const { time: n } = t;
                                                let r = e.length;
                                                for (let t = 0; t < e.length; t++)
                                                    if (e[t].time > n) {
                                                        r = t;
                                                        break;
                                                    }
                                                e.splice(r, 0, t);
                                            })(t.transactions, e);
                                            const { primaryTransaction: { time: n = 0 } = {}, initialTransaction: { time: r = 0 } = {} } = t,
                                                u = {
                                                    isOnChainFailure: "0x0" === (null == T ? void 0 : T.status),
                                                    isEphemeral: c === i.TRANSACTION_STATUSES.FAILED && "0x0" !== (null == T ? void 0 : T.status),
                                                    isRetryOrCancel: d.includes(l),
                                                    occurredAfterPrimary: E > n,
                                                    hasPriorityStatus: c in s.PRIORITY_STATUS_HASH,
                                                    isConfirmed: c === i.TRANSACTION_STATUSES.CONFIRMED,
                                                    occurredBeforeInitial: E < r,
                                                    isValidRetry: l === i.TRANSACTION_TYPES.RETRY && (c in s.PRIORITY_STATUS_HASH || c === i.TRANSACTION_STATUSES.DROPPED),
                                                    isValidCancel: l === i.TRANSACTION_TYPES.CANCEL && (c in s.PRIORITY_STATUS_HASH || c === i.TRANSACTION_STATUSES.DROPPED),
                                                };
                                            (u.eligibleForInitial = !u.isRetryOrCancel && !u.isEphemeral), (u.shouldBePrimary = u.isConfirmed || u.isOnChainFailure);
                                            const m = {
                                                    isEphemeral:
                                                        t.primaryTransaction.status === i.TRANSACTION_STATUSES.FAILED &&
                                                        "0x0" !== (null === (_ = t.primaryTransaction) || void 0 === _ || null === (A = _.txReceipt) || void 0 === A ? void 0 : A.status),
                                                },
                                                N = { isEphemeral: t.initialTransaction.status === i.TRANSACTION_STATUSES.FAILED && "0x0" !== (null === (S = t.initialTransaction.txReceipt) || void 0 === S ? void 0 : S.status) };
                                            (u.shouldBePrimary || m.isEphemeral || (u.occurredAfterPrimary && u.hasPriorityStatus)) && (t.primaryTransaction = e),
                                                ((u.occurredBeforeInitial && u.eligibleForInitial) || (N.isEphemeral && u.eligibleForInitial)) && (t.initialTransaction = e),
                                                u.isValidRetry && (t.hasRetried = !0),
                                                u.isValidCancel && (t.hasCancelled = !0);
                                        } else
                                            (a[o] = {
                                                nonce: o,
                                                transactions: [e],
                                                initialTransaction: e,
                                                primaryTransaction: e,
                                                hasRetried: e.type === i.TRANSACTION_TYPES.RETRY && (e.status in s.PRIORITY_STATUS_HASH || e.status === i.TRANSACTION_STATUSES.DROPPED),
                                                hasCancelled: e.type === i.TRANSACTION_TYPES.CANCEL && (e.status in s.PRIORITY_STATUS_HASH || e.status === i.TRANSACTION_STATUSES.DROPPED),
                                            }),
                                                ((e, t) => {
                                                    let n = e.length;
                                                    for (let r = 0; r < e.length; r++) {
                                                        const a = e[r];
                                                        if (Number((0, u.hexToDecimal)(a)) > Number((0, u.hexToDecimal)(t))) {
                                                            n = r;
                                                            break;
                                                        }
                                                    }
                                                    e.splice(n, 0, t);
                                                })(r, o);
                                    });
                                    const o = r.map((e) => a[e]);
                                    return (
                                        ((e, t) => {
                                            t.forEach((t) => {
                                                g(e, t);
                                            });
                                        })(o, n),
                                        t.concat(o).map((e) => {
                                            var t;
                                            if (d.includes(null === (t = e.initialTransaction) || void 0 === t ? void 0 : t.type)) {
                                                const t = e.transactions.find((e) => !d.includes(e.type));
                                                if (t) return { ...e, initialTransaction: t };
                                            }
                                            return e;
                                        })
                                    );
                                });
                            n.nonceSortedTransactionsSelector = C;
                            const h = (0, a.createSelector)(C, (e = []) => e.filter(({ primaryTransaction: e }) => e.status in s.PENDING_STATUS_HASH));
                            n.nonceSortedPendingTransactionsSelector = h;
                            const P = (0, a.createSelector)(C, (e = []) => e.filter(({ primaryTransaction: e }) => !(e.status in s.PENDING_STATUS_HASH)).reverse());
                            n.nonceSortedCompletedTransactionsSelector = P;
                            const D = (0, a.createSelector)(R, (e = []) => e.filter((e) => e.status === i.TRANSACTION_STATUSES.SUBMITTED));
                            n.submittedPendingTransactionsSelector = D;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6305,
            { "../../../shared/modules/mv3.utils": 5355, pify: 4796 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n._setBackgroundConnection = async function (e) {
                                    (o = e),
                                        (i = (0, a.default)(o)),
                                        s.isManifestV3 &&
                                            (E && console.warn("_setBackgroundConnection called while a queue was processing and not disconnected yet"),
                                            (async function () {
                                                if (E) return;
                                                E = !0;
                                                try {
                                                    for (; o.connectionStream.readable && c.length > 0; ) {
                                                        const e = c.shift();
                                                        await d({ action: e, disconnectSideeffect: () => c.unshift(e) });
                                                    }
                                                } catch (e) {
                                                    console.error(e);
                                                }
                                                E = !1;
                                            })());
                                }),
                                (n.callBackgroundMethod = void 0),
                                (n.dropQueue = function (e) {
                                    e || c.forEach(({ reject: e }) => e(Error("Background operation cancelled while waiting for connection.")));
                                    c.length = 0;
                                }),
                                (n.generateActionId = void 0),
                                (n.submitRequestToBackground = function (e, t = [], n = u()) {
                                    if (s.isManifestV3)
                                        return new Promise((r, a) => {
                                            l({ actionId: n, request: { method: e, args: t }, resolve: r, reject: a });
                                        });
                                    return i[e](...t);
                                });
                            var r,
                                a = (r = e("pify")) && r.__esModule ? r : { default: r },
                                s = e("../../../shared/modules/mv3.utils");
                            let o = null,
                                i = null;
                            const c = [],
                                u = () => Date.now() + Math.random();
                            n.generateActionId = u;
                            const l = (e) => {
                                c.some((t) => t.actionId === e.actionId) || (o.connectionStream.readable ? d({ action: e, disconnectSideeffect: () => c.push(e) }) : c.push(e));
                            };
                            async function d({ action: e, disconnectSideeffect: t }) {
                                const {
                                    request: { method: n, args: r },
                                    resolve: a,
                                    reject: s,
                                } = e;
                                try {
                                    a(await i[n](...r));
                                } catch (n) {
                                    o.DisconnectError && n instanceof o.DisconnectError ? t(e) : s(n);
                                }
                            }
                            n.callBackgroundMethod = (e, t = [], n, r = u()) => {
                                if (s.isManifestV3) {
                                    l({ actionId: r, request: { method: e, args: t }, resolve: (e) => n(null, e), reject: (e) => n(e) });
                                } else o[e](...t, n);
                            };
                            let E = !1;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6306,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.UPDATE_TRANSACTION_PARAMS = n.UPDATE_PREFERENCES = n.UPDATE_METAMASK_STATE = n.UPDATE_FEATURE_FLAGS = n.UPDATE_CUSTOM_NONCE = n.UNLOCK_SUCCEEDED = n.UNLOCK_IN_PROGRESS = n.UNLOCK_FAILED = n.TRANSACTION_ERROR = n.TOGGLE_GAS_LOADING_ANIMATION = n.TOGGLE_CURRENCY_INPUT_SWITCH = n.TOGGLE_ACCOUNT_MENU = n.SHOW_SEND_TOKEN_PAGE = n.SHOW_PRIVATE_KEY = n.SHOW_LOADING = n.SHOW_CONF_TX_PAGE = n.SHOW_ACCOUNT_DETAIL = n.SHOW_ACCOUNTS_PAGE = n.SET_WEBHID_CONNECTED_STATUS = n.SET_USE_NONCEFIELD = n.SET_USE_BLOCKIE = n.SET_SMART_TRANSACTIONS_ERROR = n.SET_SELECTED_SETTINGS_RPC_URL = n.SET_RPC_TARGET = n.SET_REQUEST_ACCOUNT_TABS = n.SET_PROVIDER_TYPE = n.SET_PENDING_TOKENS = n.SET_PARTICIPATE_IN_METAMETRICS = n.SET_OPEN_METAMASK_TAB_IDS = n.SET_NEXT_NONCE = n.SET_NEW_TOKENS_IMPORTED = n.SET_NEW_NETWORK_ADDED = n.SET_NEW_CUSTOM_NETWORK_ADDED = n.SET_NEW_COLLECTIBLE_ADDED_MESSAGE = n.SET_MOUSE_USER_STATE = n.SET_LEDGER_TRANSPORT_STATUS = n.SET_IPFS_GATEWAY = n.SET_HARDWARE_WALLET_DEFAULT_HD_PATH = n.SET_FIRST_TIME_FLOW_TYPE = n.SET_CUSTOM_TOKEN_AMOUNT = n.SET_CURRENT_WINDOW_TAB = n.SET_CURRENT_LOCALE = n.SET_ACCOUNT_LABEL = n.SELECTED_ADDRESS_CHANGED = n.SELECTED_ACCOUNT_CHANGED = n.QR_CODE_DETECTED = n.PORTFOLIO_TOOLTIP_WAS_SHOWN_IN_THIS_SESSION = n.ONBOARDED_IN_THIS_UI_SESSION = n.NETWORK_DROPDOWN_OPEN = n.NETWORK_DROPDOWN_CLOSE = n.MODAL_OPEN = n.MODAL_CLOSE = n.LOCK_METAMASK = n.LOADING_TOKEN_PARAMS_STARTED = n.LOADING_TOKEN_PARAMS_FINISHED = n.LOADING_METHOD_DATA_STARTED = n.LOADING_METHOD_DATA_FINISHED = n.HIDE_WHATS_NEW_POPUP = n.HIDE_WARNING = n.HIDE_LOADING = n.GO_HOME = n.GAS_FEE_ESTIMATES_UPDATED = n.FORGOT_PASSWORD = n.DISPLAY_WARNING = n.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE = n.COMPLETE_ONBOARDING = n.COMPLETED_TX = n.CLOSE_WELCOME_SCREEN = n.CLEAR_PENDING_TOKENS = n.CLEAR_ACCOUNT_DETAILS = n.CHAIN_CHANGED = n.CAPTURE_SINGLE_EXCEPTION = n.BUY = n.ALERT_OPEN = n.ALERT_CLOSE = n.ADDRESS_BOOK_UPDATED = n.ACCOUNT_CHANGED = void 0);
                            n.GO_HOME = "GO_HOME";
                            n.MODAL_OPEN = "UI_MODAL_OPEN";
                            n.MODAL_CLOSE = "UI_MODAL_CLOSE";
                            n.ALERT_OPEN = "UI_ALERT_OPEN";
                            n.ALERT_CLOSE = "UI_ALERT_CLOSE";
                            n.QR_CODE_DETECTED = "UI_QR_CODE_DETECTED";
                            n.NETWORK_DROPDOWN_OPEN = "UI_NETWORK_DROPDOWN_OPEN";
                            n.NETWORK_DROPDOWN_CLOSE = "UI_NETWORK_DROPDOWN_CLOSE";
                            n.UPDATE_METAMASK_STATE = "UPDATE_METAMASK_STATE";
                            n.SELECTED_ADDRESS_CHANGED = "SELECTED_ADDRESS_CHANGED";
                            n.SELECTED_ACCOUNT_CHANGED = "SELECTED_ACCOUNT_CHANGED";
                            n.ACCOUNT_CHANGED = "ACCOUNT_CHANGED";
                            n.CHAIN_CHANGED = "CHAIN_CHANGED";
                            n.ADDRESS_BOOK_UPDATED = "ADDRESS_BOOK_UPDATED";
                            n.GAS_FEE_ESTIMATES_UPDATED = "GAS_FEE_ESTIMATES_UPDATED";
                            n.FORGOT_PASSWORD = "FORGOT_PASSWORD";
                            n.CLOSE_WELCOME_SCREEN = "CLOSE_WELCOME_SCREEN";
                            n.UNLOCK_IN_PROGRESS = "UNLOCK_IN_PROGRESS";
                            n.UNLOCK_FAILED = "UNLOCK_FAILED";
                            n.UNLOCK_SUCCEEDED = "UNLOCK_SUCCEEDED";
                            n.LOCK_METAMASK = "LOCK_METAMASK";
                            n.DISPLAY_WARNING = "DISPLAY_WARNING";
                            n.HIDE_WARNING = "HIDE_WARNING";
                            n.CAPTURE_SINGLE_EXCEPTION = "CAPTURE_SINGLE_EXCEPTION";
                            n.SHOW_ACCOUNT_DETAIL = "SHOW_ACCOUNT_DETAIL";
                            n.SHOW_ACCOUNTS_PAGE = "SHOW_ACCOUNTS_PAGE";
                            n.SHOW_CONF_TX_PAGE = "SHOW_CONF_TX_PAGE";
                            n.SHOW_SEND_TOKEN_PAGE = "SHOW_SEND_TOKEN_PAGE";
                            n.SHOW_PRIVATE_KEY = "SHOW_PRIVATE_KEY";
                            n.SET_ACCOUNT_LABEL = "SET_ACCOUNT_LABEL";
                            n.CLEAR_ACCOUNT_DETAILS = "CLEAR_ACCOUNT_DETAILS";
                            n.COMPLETED_TX = "COMPLETED_TX";
                            n.TRANSACTION_ERROR = "TRANSACTION_ERROR";
                            n.UPDATE_TRANSACTION_PARAMS = "UPDATE_TRANSACTION_PARAMS";
                            n.SET_NEXT_NONCE = "SET_NEXT_NONCE";
                            n.SET_RPC_TARGET = "SET_RPC_TARGET";
                            n.SET_PROVIDER_TYPE = "SET_PROVIDER_TYPE";
                            n.SET_HARDWARE_WALLET_DEFAULT_HD_PATH = "SET_HARDWARE_WALLET_DEFAULT_HD_PATH";
                            n.SHOW_LOADING = "SHOW_LOADING_INDICATION";
                            n.HIDE_LOADING = "HIDE_LOADING_INDICATION";
                            n.BUY = "BUY";
                            n.TOGGLE_ACCOUNT_MENU = "TOGGLE_ACCOUNT_MENU";
                            n.SET_USE_BLOCKIE = "SET_USE_BLOCKIE";
                            n.SET_USE_NONCEFIELD = "SET_USE_NONCEFIELD";
                            n.UPDATE_CUSTOM_NONCE = "UPDATE_CUSTOM_NONCE";
                            n.SET_IPFS_GATEWAY = "SET_IPFS_GATEWAY";
                            n.SET_PARTICIPATE_IN_METAMETRICS = "SET_PARTICIPATE_IN_METAMETRICS";
                            n.SET_CURRENT_LOCALE = "SET_CURRENT_LOCALE";
                            n.UPDATE_FEATURE_FLAGS = "UPDATE_FEATURE_FLAGS";
                            n.UPDATE_PREFERENCES = "UPDATE_PREFERENCES";
                            n.COMPLETE_ONBOARDING = "COMPLETE_ONBOARDING";
                            n.ONBOARDED_IN_THIS_UI_SESSION = "ONBOARDED_IN_THIS_UI_SESSION";
                            n.SET_MOUSE_USER_STATE = "SET_MOUSE_USER_STATE";
                            n.SET_WEBHID_CONNECTED_STATUS = "SET_WEBHID_CONNECTED_STATUS";
                            n.SET_LEDGER_TRANSPORT_STATUS = "SET_LEDGER_TRANSPORT_STATUS";
                            n.SET_PENDING_TOKENS = "SET_PENDING_TOKENS";
                            n.CLEAR_PENDING_TOKENS = "CLEAR_PENDING_TOKENS";
                            n.SET_FIRST_TIME_FLOW_TYPE = "SET_FIRST_TIME_FLOW_TYPE";
                            n.SET_SELECTED_SETTINGS_RPC_URL = "SET_SELECTED_SETTINGS_RPC_URL";
                            n.SET_NEW_NETWORK_ADDED = "SET_NEW_NETWORK_ADDED";
                            n.SET_NEW_COLLECTIBLE_ADDED_MESSAGE = "SET_NEW_COLLECTIBLE_ADDED_MESSAGE";
                            n.SET_NEW_CUSTOM_NETWORK_ADDED = "SET_NEW_CUSTOM_NETWORK_ADDED";
                            n.LOADING_METHOD_DATA_STARTED = "LOADING_METHOD_DATA_STARTED";
                            n.LOADING_METHOD_DATA_FINISHED = "LOADING_METHOD_DATA_FINISHED";
                            n.LOADING_TOKEN_PARAMS_STARTED = "LOADING_TOKEN_PARAMS_STARTED";
                            n.LOADING_TOKEN_PARAMS_FINISHED = "LOADING_TOKEN_PARAMS_FINISHED";
                            n.SET_REQUEST_ACCOUNT_TABS = "SET_REQUEST_ACCOUNT_TABS";
                            n.SET_CURRENT_WINDOW_TAB = "SET_CURRENT_WINDOW_TAB";
                            n.SET_OPEN_METAMASK_TAB_IDS = "SET_OPEN_METAMASK_TAB_IDS";
                            n.HIDE_WHATS_NEW_POPUP = "HIDE_WHATS_NEW_POPUP";
                            n.PORTFOLIO_TOOLTIP_WAS_SHOWN_IN_THIS_SESSION = "PORTFOLIO_TOOLTIP_WAS_SHOWN_IN_THIS_SESSION";
                            n.TOGGLE_GAS_LOADING_ANIMATION = "TOGGLE_GAS_LOADING_ANIMATION";
                            n.SET_SMART_TRANSACTIONS_ERROR = "SET_SMART_TRANSACTIONS_ERROR";
                            n.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE = "DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE";
                            n.TOGGLE_CURRENCY_INPUT_SWITCH = "TOGGLE_CURRENCY_INPUT_SWITCH";
                            n.SET_NEW_TOKENS_IMPORTED = "SET_NEW_TOKENS_IMPORTED";
                            n.SET_CUSTOM_TOKEN_AMOUNT = "SET_CUSTOM_TOKEN_AMOUNT";
                        };
                    };
            },
            { package: "$root$" },
        ],
    ],
    [],
    {}
);
