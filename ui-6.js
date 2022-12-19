LavaPack.loadBundle(
    [
        [
            5734,
            { "../icon/icon-caret-down": 5755, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = i(e("../icon/icon-caret-down"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const u = ({ className: e, disabled: t = !1, onChange: a, options: n, selectedOption: i = "", style: l, title: u, "data-testid": c }) => {
                                const d = (0, r.useCallback)(
                                    (e) => {
                                        e.preventDefault(), e.stopPropagation(), a(e.target.value);
                                    },
                                    [a]
                                );
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("dropdown", e) },
                                    r.default.createElement(
                                        "select",
                                        { className: "dropdown__select", "data-testid": c, disabled: t, title: u, onChange: d, style: l, value: i },
                                        n.map((e) => r.default.createElement("option", { key: e.value, value: e.value }, e.name || e.value))
                                    ),
                                    r.default.createElement(s.default, { size: 16, className: "dropdown__icon-caret-down" })
                                );
                            };
                            u.propTypes = {
                                className: n.default.string,
                                disabled: n.default.bool,
                                title: n.default.string,
                                onChange: n.default.func.isRequired,
                                options: n.default.arrayOf(n.default.exact({ name: n.default.string, value: n.default.string.isRequired })).isRequired,
                                selectedOption: n.default.string,
                                style: n.default.object,
                                "data-testid": n.default.string,
                            };
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5735,
            { "./dropdown": 5734 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./dropdown")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5736,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = i(e("classnames")),
                                n = i(e("prop-types")),
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = s(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react"));
                            function s(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (s = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class u extends o.Component {
                                constructor(...e) {
                                    super(...e), l(this, "state", { isEditing: !1, value: this.props.defaultValue || "" });
                                }
                                handleSubmit() {
                                    const { value: e } = this.state,
                                        { accountsNames: t } = this.props;
                                    "" === e || t.includes(e) || Promise.resolve(this.props.onSubmit(e)).then(() => this.setState({ isEditing: !1 }));
                                }
                                renderEditing() {
                                    const { value: e } = this.state,
                                        { accountsNames: t } = this.props;
                                    return [
                                        o.default.createElement("input", {
                                            key: 1,
                                            type: "text",
                                            required: !0,
                                            dir: "auto",
                                            value: this.state.value,
                                            onKeyPress: (e) => {
                                                "Enter" === e.key && this.handleSubmit();
                                            },
                                            onChange: (e) => this.setState({ value: e.target.value }),
                                            "data-testid": "editable-input",
                                            className: (0, r.default)("large-input", "editable-label__input", { "editable-label__input--error": "" === e || t.includes(e) }),
                                            autoFocus: !0,
                                        }),
                                        o.default.createElement(
                                            "button",
                                            { className: "editable-label__icon-button", key: 2, onClick: () => this.handleSubmit() },
                                            o.default.createElement("i", { className: "fa fa-check editable-label__icon" })
                                        ),
                                    ];
                                }
                                renderReadonly() {
                                    return [
                                        o.default.createElement("div", { key: 1, className: "editable-label__value" }, this.state.value),
                                        o.default.createElement(
                                            "button",
                                            { key: 2, className: "editable-label__icon-button", "data-testid": "editable-label-button", onClick: () => this.setState({ isEditing: !0 }) },
                                            o.default.createElement("i", { className: "fas fa-pencil-alt editable-label__icon" })
                                        ),
                                    ];
                                }
                                render() {
                                    const { isEditing: e, value: t } = this.state,
                                        { className: a, accountsNames: n } = this.props;
                                    return o.default.createElement(
                                        o.default.Fragment,
                                        null,
                                        o.default.createElement("div", { className: (0, r.default)("editable-label", a) }, e ? this.renderEditing() : this.renderReadonly()),
                                        n.includes(t) ? o.default.createElement("div", { className: (0, r.default)("editable-label__error", "editable-label__error-amount") }, this.context.t("accountNameDuplicate")) : null
                                    );
                                }
                            }
                            l(u, "propTypes", { onSubmit: n.default.func.isRequired, defaultValue: n.default.string, className: n.default.string, accountsNames: n.default.array }), l(u, "contextTypes", { t: n.default.func });
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5737,
            { "./editable-label": 5736 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./editable-label")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5738,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = (e, t) => {
                                const { errorMessage: a, errorKey: n } = e,
                                    o = n ? t.t(n) : a;
                                return r.default.createElement(
                                    "div",
                                    { className: "error-message" },
                                    r.default.createElement("i", { className: "fa fa-exclamation-circle error-message__icon" }),
                                    r.default.createElement("div", { className: "error-message__text" }, o)
                                );
                            };
                            (s.propTypes = { errorMessage: n.default.string, errorKey: n.default.string }), (s.contextTypes = { t: n.default.func });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5739,
            { "./error-message.component": 5738 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./error-message.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            574,
            { "./CardActionArea": 573, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CardActionArea"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5740,
            { "../../../helpers/utils/export-utils": 5921, "../../../hooks/useCopyToClipboard": 5951, "../../../hooks/useI18nContext": 5957, "../icon/copy-icon.component": 5753, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = u(e("react")),
                                n = u(e("prop-types")),
                                o = u(e("../icon/copy-icon.component")),
                                s = e("../../../hooks/useI18nContext"),
                                i = e("../../../hooks/useCopyToClipboard"),
                                l = e("../../../helpers/utils/export-utils");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c({ text: e = "", onClickCopy: t = null, onClickDownload: a = null }) {
                                const n = (0, s.useI18nContext)(),
                                    [u, c] = (0, i.useCopyToClipboard)();
                                return r.default.createElement(
                                    "div",
                                    { className: "export-text-container" },
                                    r.default.createElement("div", { className: "export-text-container__text-container" }, r.default.createElement("div", { className: "export-text-container__text notranslate" }, e)),
                                    r.default.createElement(
                                        "div",
                                        { className: "export-text-container__buttons-container" },
                                        r.default.createElement(
                                            "div",
                                            {
                                                className: "export-text-container__button export-text-container__button--copy",
                                                onClick: () => {
                                                    t && t(), c(e);
                                                },
                                            },
                                            r.default.createElement(o.default, { size: 17, color: "var(--color-primary-default)" }),
                                            r.default.createElement("div", { className: "export-text-container__button-text" }, n(u ? "copiedExclamation" : "copyToClipboard"))
                                        ),
                                        r.default.createElement(
                                            "div",
                                            {
                                                className: "export-text-container__button",
                                                onClick: () => {
                                                    a && a(), (0, l.exportAsFile)("", e);
                                                },
                                            },
                                            r.default.createElement("img", { src: "images/download.svg", alt: "" }),
                                            r.default.createElement("div", { className: "export-text-container__button-text" }, n("saveAsCsvFile"))
                                        )
                                    )
                                );
                            }
                            c.propTypes = { text: n.default.string, onClickCopy: n.default.func, onClickDownload: n.default.func };
                            var d = r.default.memo(c);
                            a.default = d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5741,
            { "./export-text-container.component": 5740 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./export-text-container.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5742,
            {
                "../../../helpers/constants/design-system": 5900,
                "../box/box": 5706,
                "../info-tooltip/info-tooltip": 5788,
                "../numeric-input/numeric-input.component": 5820,
                "../typography/typography": 5870,
                classnames: 1772,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                            var r = d(e("react")),
                                n = d(e("prop-types")),
                                o = d(e("classnames")),
                                s = d(e("../typography/typography")),
                                i = d(e("../box/box")),
                                l = e("../../../helpers/constants/design-system"),
                                u = d(e("../numeric-input/numeric-input.component")),
                                c = d(e("../info-tooltip/info-tooltip"));
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function f() {
                                return (
                                    (f = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    f.apply(this, arguments)
                                );
                            }
                            function p({
                                dataTestId: e,
                                titleText: t = "",
                                TitleTextCustomComponent: a,
                                titleUnit: n = "",
                                TitleUnitCustomComponent: d,
                                tooltipText: p = "",
                                TooltipCustomComponent: m,
                                titleDetail: g = "",
                                titleDetailWrapperProps: h,
                                error: v,
                                onChange: C = undefined,
                                value: b = 0,
                                numeric: y,
                                detailText: _ = "",
                                autoFocus: E = !1,
                                password: T = !1,
                                allowDecimals: w = !1,
                                disabled: k = !1,
                                placeholder: O,
                                warning: P,
                                passwordStrength: M,
                                passwordStrengthText: S,
                                id: x,
                                inputProps: N,
                                wrappingLabelProps: A,
                            }) {
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("form-field", { "form-field__row--error": v }) },
                                    r.default.createElement(
                                        i.default,
                                        f({ as: "label" }, A),
                                        r.default.createElement(
                                            "div",
                                            { className: "form-field__heading" },
                                            r.default.createElement(
                                                i.default,
                                                { className: "form-field__heading-title", display: l.DISPLAY.FLEX, alignItems: l.ALIGN_ITEMS.CENTER },
                                                a ||
                                                    (t &&
                                                        r.default.createElement(s.default, { tag: "label", htmlFor: x, html: !0, fontWeight: l.FONT_WEIGHT.BOLD, variant: l.TYPOGRAPHY.H6, boxProps: { display: l.DISPLAY.INLINE_BLOCK } }, t)),
                                                d || (n && r.default.createElement(s.default, { tag: l.TYPOGRAPHY.H6, variant: l.TYPOGRAPHY.H6, color: l.COLORS.TEXT_ALTERNATIVE, boxProps: { display: l.DISPLAY.INLINE_BLOCK } }, n)),
                                                m || (p && r.default.createElement(c.default, { position: "top", contentText: p }))
                                            ),
                                            g && r.default.createElement(i.default, f({ className: "form-field__heading-detail", textAlign: l.TEXT_ALIGN.END, marginBottom: 3, marginRight: 2 }, h), g)
                                        ),
                                        y
                                            ? r.default.createElement(u.default, { error: v, onChange: C, value: b, detailText: _, autoFocus: E, allowDecimals: w, disabled: k, dataTestId: e, placeholder: O, id: x })
                                            : r.default.createElement(
                                                  "input",
                                                  f(
                                                      {
                                                          className: (0, o.default)("form-field__input", { "form-field__input--error": v, "form-field__input--warning": P }),
                                                          onChange: (e) => C(e.target.value),
                                                          value: b,
                                                          type: T ? "password" : "text",
                                                          autoFocus: E,
                                                          disabled: k,
                                                          "data-testid": e,
                                                          placeholder: O,
                                                          id: x,
                                                      },
                                                      N
                                                  )
                                              ),
                                        v && r.default.createElement(s.default, { color: l.COLORS.ERROR_DEFAULT, variant: l.TYPOGRAPHY.H7, className: "form-field__error" }, v),
                                        P && r.default.createElement(s.default, { color: l.COLORS.TEXT_ALTERNATIVE, variant: l.TYPOGRAPHY.H7, className: "form-field__warning" }, P),
                                        M && r.default.createElement(s.default, { color: l.COLORS.TEXT_DEFAULT, variant: l.TYPOGRAPHY.H7, className: "form-field__password-strength" }, M),
                                        S && r.default.createElement(s.default, { color: l.COLORS.TEXT_ALTERNATIVE, variant: l.TYPOGRAPHY.H8, className: "form-field__password-strength-text" }, S)
                                    )
                                );
                            }
                            p.propTypes = {
                                dataTestId: n.default.string,
                                titleText: n.default.oneOfType([n.default.string, n.default.node]),
                                TitleTextCustomComponent: n.default.node,
                                titleUnit: n.default.string,
                                TitleUnitCustomComponent: n.default.node,
                                tooltipText: n.default.oneOfType([n.default.string, n.default.node]),
                                TooltipCustomComponent: n.default.node,
                                titleDetail: n.default.oneOfType([n.default.string, n.default.node]),
                                titleDetailWrapperProps: n.default.shape({ ...i.default.propTypes }),
                                error: n.default.string,
                                warning: n.default.string,
                                onChange: n.default.func,
                                value: n.default.oneOfType([n.default.number, n.default.string]),
                                detailText: n.default.string,
                                autoFocus: n.default.bool,
                                numeric: n.default.bool,
                                password: n.default.bool,
                                allowDecimals: n.default.bool,
                                disabled: n.default.bool,
                                placeholder: n.default.string,
                                passwordStrength: n.default.oneOfType([n.default.string, n.default.node]),
                                passwordStrengthText: n.default.string,
                                id: n.default.string,
                                inputProps: n.default.object,
                                wrappingLabelProps: n.default.object,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5743,
            { "./form-field": 5742 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./form-field")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5744,
            { "../../../../shared/lib/metamask-controller-utils": 5343, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("../../../../shared/lib/metamask-controller-utils");
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            class l extends n.PureComponent {
                                render() {
                                    const { className: e, value: t } = this.props,
                                        a = (0, s.hexToDecimal)(t);
                                    return n.default.createElement("div", { className: e }, a);
                                }
                            }
                            (a.default = l),
                                (function (e, t, a) {
                                    t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a);
                                })(l, "propTypes", { className: o.default.string, value: o.default.string });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5745,
            { "./hex-to-decimal.component": 5744 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./hex-to-decimal.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5746,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = i);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i({ children: e, size: t, className: a }) {
                                const n = { height: `${t}px`, width: `${t}px` };
                                return r.default.createElement("div", { className: (0, o.default)("icon-border", a), style: n }, e);
                            }
                            i.propTypes = { className: n.default.string, children: n.default.node.isRequired, size: n.default.number.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5747,
            { "./icon-border": 5746 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./icon-border")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5748,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = (e) => e;
                            function l({ onClick: e, Icon: t, disabled: a, label: n, tooltipRender: s, className: l, ...u }) {
                                var c;
                                const d = null != s ? s : i;
                                return r.default.createElement(
                                    "button",
                                    { className: (0, o.default)("icon-button", l, { "icon-button--disabled": a }), "data-testid": null !== (c = u["data-testid"]) && void 0 !== c ? c : undefined, onClick: e, disabled: a },
                                    d(r.default.createElement(r.default.Fragment, null, r.default.createElement("div", { className: "icon-button__circle" }, r.default.createElement(t, null)), r.default.createElement("span", null, n)))
                                );
                            }
                            l.propTypes = {
                                onClick: n.default.func.isRequired,
                                Icon: n.default.func.isRequired,
                                disabled: n.default.bool,
                                label: n.default.string.isRequired,
                                tooltipRender: n.default.func,
                                className: n.default.string,
                                "data-testid": n.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5749,
            { "./icon-button": 5748 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./icon-button")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            575,
            {
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = n(e("../styles/withStyles")),
                                c = { root: { display: "flex", alignItems: "center", padding: 8 }, spacing: { "& > :not(:first-child)": { marginLeft: 8 } } };
                            a.styles = c;
                            var d = i.forwardRef(function (e, t) {
                                    var a = e.disableSpacing,
                                        r = void 0 !== a && a,
                                        n = e.classes,
                                        u = e.className,
                                        c = (0, s.default)(e, ["disableSpacing", "classes", "className"]);
                                    return i.createElement("div", (0, o.default)({ className: (0, l.default)(n.root, u, !r && n.spacing), ref: t }, c));
                                }),
                                f = (0, u.default)(c, { name: "MuiCardActions" })(d);
                            a.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5750,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function l() {
                                return (
                                    (l = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    l.apply(this, arguments)
                                );
                            }
                            const u = ({ name: e = "", icon: t = null, size: a, className: n, fallbackClassName: s, wrapperClassName: i, ...u }) => {
                                const [c, d] = (0, r.useState)(!1),
                                    f = a ? { height: `${a}px`, width: `${a}px` } : {};
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)(i) },
                                    !c && t
                                        ? r.default.createElement(
                                              "img",
                                              l(
                                                  {
                                                      onError: () => {
                                                          d(!0);
                                                      },
                                                      src: t,
                                                      style: f,
                                                      className: n,
                                                      alt: e || "icon",
                                                  },
                                                  u
                                              )
                                          )
                                        : r.default.createElement("span", { className: (0, o.default)("icon-with-fallback__fallback", s) }, (null == e ? void 0 : e.charAt(0).toUpperCase()) || "")
                                );
                            };
                            u.propTypes = { icon: n.default.string, name: n.default.string, size: n.default.number, className: n.default.string, wrapperClassName: n.default.string, fallbackClassName: n.default.string };
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5751,
            { "./icon-with-fallback.component": 5750 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./icon-with-fallback.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5752,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z",
                                        stroke: a,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M5.34426 16.0923C5.15708 16.2694 5.15656 16.5672 5.34311 16.745L9.49708 20.7032C9.67134 20.8692 9.94541 20.8687 10.1191 20.7021L10.682 20.1619C10.867 19.9844 10.8665 19.6883 10.6808 19.5114L6.53084 15.557C6.35747 15.3918 6.08509 15.3914 5.91113 15.556L5.34426 16.0923ZM24.0891 10.2959C23.9152 10.1303 23.6419 10.1303 23.4681 10.2961L14.9882 18.3839C14.8143 18.5498 14.5407 18.5497 14.3668 18.3837L11.4072 15.5567C11.2343 15.3916 10.9625 15.3905 10.7882 15.5542L10.2154 16.0924C10.0272 16.2692 10.0261 16.5679 10.2131 16.7461L14.367 20.7042C14.5408 20.8698 14.814 20.8698 14.9878 20.7042L24.6581 11.4897C24.8442 11.3124 24.8442 11.0155 24.6581 10.8382L24.0891 10.2959ZM19.7905 11.4886C19.9761 11.3117 19.9767 11.0156 19.7916 10.8381L19.2288 10.2979C19.0551 10.1313 18.781 10.1308 18.6068 10.2968L13.799 14.878C13.6125 15.0557 13.613 15.3535 13.8002 15.5306L14.367 16.067C14.541 16.2316 14.8134 16.2311 14.9868 16.0659L19.7905 11.4886Z",
                                        fill: a,
                                    })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5753,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0H1H9V1H1V9H0V0ZM2 2H11V11H2V2ZM3 3H10V10H3V3Z", fill: a })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5754,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n, onClick: o }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, onClick: o, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m316 444l-106 0c-96 0-141-43-141-140l0-107c0-96 45-140 141-140l35 0c5 0 9 2 12 5 3 3 4 7 4 11 0 4-1 8-4 11-3 3-7 5-12 5l-35 0c-80 0-109 28-109 108l0 107c0 80 29 108 109 108l106 0c80 0 109-28 109-108l0-36c0-4 1-8 4-11 3-3 8-5 12-5 4 0 8 2 11 5 3 3 5 7 5 11l0 36c0 97-44 140-141 140z m-35-195c-4 0-9-2-12-5-3-3-4-7-4-11 0-4 1-8 4-11l133-133-47 0c-4 0-8-2-11-5-3-3-5-7-5-11 0-4 2-8 5-11 3-3 7-5 11-5l86 0c2 0 4 0 6 1 2 1 4 2 5 3 2 2 3 4 4 6 0 2 1 4 1 6l0 85c0 4-2 9-5 12-3 3-7 4-11 4-4 0-9-1-12-4-3-3-4-8-4-12l0-47-133 133c-3 3-7 5-11 5z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, onClick: n.default.func, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5755,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", { d: "m399 177c-8-8-22-8-30 0l-113 113-113-113c-8-8-22-8-30 0-8 8-8 22 0 30l128 128c8 8 22 8 30 0l128-128c8-8 8-22 0-30z" })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5756,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n, onClick: o }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, onClick: o, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", { d: "m335 113c8 8 8 22 0 30l-113 113 113 113c8 8 8 22 0 30-8 8-22 8-30 0l-128-128c-8-8-8-22 0-30l128-128c8-8 22-8 30 0z" })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, onClick: n.default.func, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5757,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", { d: "m177 113c-8 8-8 22 0 30l113 113-113 113c-8 8-8 22 0 30 8 8 22 8 30 0l128-128c8-8 8-22 0-30l-128-128c-8-8-22-8-30 0z" })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5758,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 12, color: t = "var(--color-primary-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, viewBox: "0 0 12 12", fill: "none", className: a, "aria-label": n, xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M1.5 9.375C1.5 9.58125 1.66781 9.75 1.875 9.75H11.25C11.6648 9.75 12 10.0852 12 10.5C12 10.9148 11.6648 11.25 11.25 11.25H1.875C0.839531 11.25 0 10.4109 0 9.375V1.5C0 1.08586 0.335859 0.75 0.75 0.75C1.16414 0.75 1.5 1.08586 1.5 1.5V9.375ZM8.02969 6.52969C7.73672 6.82266 7.26328 6.82266 6.97031 6.52969L5.625 5.18672L3.52969 7.27969C3.23672 7.57266 2.76328 7.57266 2.47031 7.27969C2.17688 6.98672 2.17688 6.51328 2.47031 6.22031L5.09531 3.59531C5.38828 3.30234 5.86172 3.30234 6.15469 3.59531L7.5 4.93828L9.97031 2.47031C10.2633 2.17687 10.7367 2.17687 11.0297 2.47031C11.3227 2.76328 11.3227 3.23672 11.0297 3.52969L8.02969 6.52969Z",
                                        fill: t,
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5759,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", { d: "m420 134c9 9 9 22 0 30l-213 214c-8 8-22 8-30 0l-85-86c-9-8-9-21 0-30 8-8 21-8 30 0l70 70 198-198c9-8 22-8 30 0z" })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            576,
            { "./CardActions": 575, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CardActions"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5760,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m256 326c-9 0-18-2-27-5-8-4-16-9-23-15-6-7-11-15-15-23-3-9-5-18-5-27 0-9 2-18 5-27 4-8 9-16 15-23 7-6 15-11 23-15 9-3 18-5 27-5 19 0 37 7 50 20 13 13 20 31 20 50 0 19-7 37-20 50-13 13-31 20-50 20z m176-35c3 0 7-2 10-4 2-2 4-6 5-9 0 0 1-10 1-22 0-12-1-22-1-22-1-3-3-7-5-9-3-2-7-4-10-4l-37 0c-7 0-15-4-17-10-2-6-4-23 1-29l26-26c2-2 4-6 4-9 0-4-1-7-3-10l-31-31c-3-2-6-3-10-3-3 0-7 2-9 4l-26 26c-6 5-14 7-19 5-6-3-20-14-20-21l0-37c0-3-2-7-4-10-2-2-6-4-9-5 0 0-10-1-22-1-12 0-22 1-22 1-3 1-7 3-9 5-2 3-4 7-4 10l0 37c0 7-4 15-10 17-6 2-23 4-29-1l-26-26c-2-2-6-4-9-4-4 0-7 1-10 3l-31 31c-2 3-3 6-3 10 0 3 2 7 4 9l26 26c5 6 7 14 5 19-3 6-14 20-21 20l-37 0c-3 0-7 2-10 4-2 2-4 6-5 9 0 0-1 10-1 22 0 12 1 22 1 22 1 7 8 13 15 13l37 0c7 0 15 4 17 10 2 6 4 23-1 29l-26 26c-2 2-4 6-4 9 0 4 1 7 3 10l31 31c3 2 6 3 10 3 3 0 7-2 9-4l26-26c6-5 14-7 19-5 6 3 20 14 20 21l0 37c0 7 6 14 13 15 0 0 10 1 22 1 12 0 22-1 22-1 3-1 7-3 9-5 2-3 4-7 4-10l0-37c0-7 4-15 10-17 6-2 23-4 29 1l26 26c2 2 6 4 9 4 4 0 7-1 10-3l31-31c2-3 3-6 3-10 0-3-2-7-4-9l-26-26c-5-6-7-14-5-19 3-6 14-20 21-20z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5761,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m213 79l22-31c6-7 15-7 21 0l23 33c6 7 3 15-7 15l-18 0 0 175c0 4 4 4 7 1l37-37c6-6 8-15 8-24l0-35c-10 0-17-8-17-18l0-18c0-9 7-18 17-18l18 0c10 0 17 8 17 18l0 18c0 10-7 18-17 18l0 35c0 15-4 27-15 37l-45 46c-6 6-10 9-10 24l0 73c18 4 31 19 31 38 0 23-18 40-40 40-21 0-39-17-39-40 0-19 13-34 31-38l0-20c0-14-5-19-11-25l-45-46c-8-9-14-20-14-35l0-37c-10-3-18-14-18-26 0-14 12-26 27-26 14 0 26 12 26 26 0 12-8 23-18 26l0 37c0 10 5 18 10 23l37 38c3 2 6 2 6-2l0-228-18 0c-10 0-13-8-6-17z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5762,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n, onClick: o }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, onClick: o, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m333 274l0 86c0 72-28 101-100 101l-86 0c-72 0-100-29-100-101l0-86c0-71 28-100 100-100l86 0c72 0 100 29 100 100z m23-223l-86 0c-63 0-93 23-99 77-1 11 8 20 20 20l42 0c86 0 126 40 126 126l0 43c0 11 9 21 21 19 54-6 76-35 76-98l0-86c0-72-28-101-100-101z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, onClick: n.default.func, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5763,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5764,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5765,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m256 85c12 0 21 10 21 22l0 183 71-70c8-9 21-9 30 0 8 8 8 21 0 30l-107 106 0 1c-4 3-9 6-15 6l0 0c-3 0-6-1-8-2-3-1-5-3-7-5l-107-106c-8-9-8-22 0-30 9-9 22-9 30 0l71 70 0-183c0-12 9-22 21-22z m-149 299c-12 0-22 10-22 21 0 12 10 22 22 22l298 0c12 0 22-10 22-22 0-11-10-21-22-21z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5766,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d: "m277 107c0-12-9-22-21-22-12 0-21 10-21 22l0 128-128 0c-12 0-22 9-22 21 0 12 10 21 22 21l128 0 0 128c0 12 9 22 21 22 12 0 21-10 21-22l0-128 128 0c12 0 22-9 22-21 0-12-10-21-22-21l-128 0z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5767,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m357 221c0-63-66-114-146-114-81 0-146 51-146 114 0 25 10 47 27 66-10 22-25 39-25 39-2 1-3 4-2 6 2 3 3 3 6 3 25 0 46-8 61-18 23 12 50 18 79 18 80 0 146-50 146-114z m86 157c16-18 26-41 26-66 0-47-38-88-91-105 1 5 2 10 2 14 0 76-76 137-169 137-8 0-15 0-22-1 21 41 73 70 134 70 29 0 56-7 78-18 16 9 37 18 63 18 2 0 4-1 5-3 0-2 0-5-2-7 0 0-15-17-24-39z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5768,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m233 103c82 0 151 40 152 88-1 47-70 87-152 87-83 0-152-40-152-87 0-48 69-88 152-88z m0 212c-76 0-141-34-151-76 28 34 84 57 151 57 66 0 123-23 150-57-10 42-75 76-150 76z m0 110c-76 0-141-34-151-77 28 35 84 58 151 58 27 0 53-4 76-12 4-1 6-5 6-9 0 0-1-1-1-1 0-5-5-8-10-7-21 7-46 11-71 11-76 0-141-34-151-76 28 34 84 57 151 57 28 0 55-4 78-12 3-1 5-3 6-6l0 0c1-7-4-13-11-11-22 7-47 12-73 12-76 0-141-34-151-77 28 34 84 58 151 58 66 0 123-24 150-58l0 20c0 5 4 10 9 10 5 0 9-5 9-10 0-44 0-104 0-104 0 0 0 0 0 0 0 0 0-1 0-1l0 0c-1-59-74-105-168-105-95 0-168 46-169 105l0 0c0 0 0 1 0 1 0 0 0 0 0 0l0 36 0 0c0 0 0 1 0 1 0 11 0 23 0 35l0 0c0 1 0 3 0 4 0 11 0 23 0 33l0 0c0 2 0 3 0 5l0 32 0 0c0 2 0 4 0 5l0 1c0 1 1 2 1 3 0 1 0 1 0 2 0 1 0 2 1 3 0 1 0 1 0 2 0 1 0 1 0 2 10 35 46 64 96 78l0 0c2 0 4 1 5 1 21 6 43 9 66 9 23 0 45-3 65-9 2 0 3-1 5-1 7-2 13-4 19-6 5-2 6-9 4-13l-1-1c-1-1-2-3-4-3-2-1-4-1-6 0-24 9-52 15-82 15m211 0l-23-24c6-8 9-18 9-29 1-33-30-59-62-48-17 6-29 22-32 41-1 7 0 15 1 22 2 7 6 13 10 19 5 5 10 10 17 13 6 3 13 4 20 4 8 0 17-3 24-8l23 25c1 0 2 1 3 2 1 0 2 0 3 0 2 0 3 0 4 0 1-1 2-2 3-2 1-1 2-2 2-4 1-1 1-2 1-3 0-2 0-3-1-4 0-1-1-3-2-4z m-94-53c0-19 15-35 34-35 18 0 33 15 33 35 0 5-1 10-3 14-1 4-4 8-7 11-3 4-7 6-11 8-4 2-8 3-12 3-20 0-34-16-34-36z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5769,
            { "../../../helpers/constants/design-system": 5900, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("classnames")),
                                o = i(e("prop-types")),
                                s = e("../../../helpers/constants/design-system");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l({ severity: e }) {
                                const t = (0, n.default)("info-icon", {
                                    "info-icon--success": e === s.SEVERITIES.SUCCESS,
                                    "info-icon--warning": e === s.SEVERITIES.WARNING,
                                    "info-icon--danger": e === s.SEVERITIES.DANGER,
                                    "info-icon--info": e === s.SEVERITIES.INFO,
                                });
                                return r.default.createElement(
                                    "svg",
                                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M15.75 8C15.75 3.75 12.25 0.25 8 0.25C3.71875 0.25 0.25 3.75 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.25 15.75 15.75 12.2812 15.75 8ZM8 9.5625C8.78125 9.5625 9.4375 10.2188 9.4375 11C9.4375 11.8125 8.78125 12.4375 8 12.4375C7.1875 12.4375 6.5625 11.8125 6.5625 11C6.5625 10.2188 7.1875 9.5625 8 9.5625ZM6.625 4.40625C6.59375 4.1875 6.78125 4 7 4H8.96875C9.1875 4 9.375 4.1875 9.34375 4.40625L9.125 8.65625C9.09375 8.875 8.9375 9 8.75 9H7.21875C7.03125 9 6.875 8.875 6.84375 8.65625L6.625 4.40625Z",
                                    })
                                );
                            }
                            l.propTypes = { severity: o.default.oneOf(Object.values(s.SEVERITIES)) };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            577,
            {
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = n(e("../styles/withStyles")),
                                c = { root: { padding: 16, "&:last-child": { paddingBottom: 24 } } };
                            a.styles = c;
                            var d = i.forwardRef(function (e, t) {
                                    var a = e.classes,
                                        r = e.className,
                                        n = e.component,
                                        u = void 0 === n ? "div" : n,
                                        c = (0, s.default)(e, ["classes", "className", "component"]);
                                    return i.createElement(u, (0, o.default)({ className: (0, l.default)(a.root, r), ref: t }, c));
                                }),
                                f = (0, u.default)(c, { name: "MuiCardContent" })(d);
                            a.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5770,
            { "../../../helpers/constants/design-system": 5900, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("classnames")),
                                o = i(e("prop-types")),
                                s = e("../../../helpers/constants/design-system");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l({ severity: e }) {
                                const t = (0, n.default)("info-icon", {
                                    "info-icon--success": e === s.SEVERITIES.SUCCESS,
                                    "info-icon--warning": e === s.SEVERITIES.WARNING,
                                    "info-icon--danger": e === s.SEVERITIES.DANGER,
                                    "info-icon--info": e === s.SEVERITIES.INFO,
                                });
                                return r.default.createElement(
                                    "svg",
                                    { className: t, width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M7.2 5.6H8.8V4H7.2V5.6ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM7.2 12H8.8V7.2H7.2V12Z",
                                    })
                                );
                            }
                            l.propTypes = { severity: o.default.oneOf(Object.values(s.SEVERITIES)) };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5771,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z",
                                        stroke: a,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M18.8889 18.65C18.8889 18.8433 18.7322 19 18.5389 19H11.4611C11.2678 19 11.1111 18.8433 11.1111 18.65V17.4621C11.1111 17.1479 10.7292 16.9928 10.5102 17.2181L8.2372 19.556C8.10513 19.6919 8.10513 19.9081 8.2372 20.044L10.5102 22.3819C10.7292 22.6072 11.1111 22.4521 11.1111 22.1379V20.95C11.1111 20.7567 11.2678 20.6 11.4611 20.6H20.0944C20.2877 20.6 20.4444 20.4433 20.4444 20.25V16.15C20.4444 15.9567 20.2877 15.8 20.0944 15.8H19.2389C19.0456 15.8 18.8889 15.9567 18.8889 16.15V18.65ZM11.1111 12.35C11.1111 12.1567 11.2678 12 11.4611 12H18.5389C18.7322 12 18.8889 12.1567 18.8889 12.35V13.5379C18.8889 13.8521 19.2708 14.0072 19.4898 13.7819L21.7628 11.444C21.8949 11.3081 21.8949 11.0919 21.7628 10.956L19.4898 8.61812C19.2708 8.39284 18.8889 8.5479 18.8889 8.8621V10.05C18.8889 10.2433 18.7322 10.4 18.5389 10.4H9.90556C9.71226 10.4 9.55556 10.5567 9.55556 10.75V14.85C9.55556 15.0433 9.71226 15.2 9.90556 15.2H10.7611C10.9544 15.2 11.1111 15.0433 11.1111 14.85V12.35Z",
                                        fill: a,
                                    })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5772,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ width: e = "17", height: t = "21", fill: a = "white" }) {
                                return r.default.createElement(
                                    "svg",
                                    { width: e, height: t, viewBox: `0 0 ${e} ${t}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M8.62829 14.3216C8.65369 14.2947 8.67756 14.2664 8.69978 14.2368L12.8311 10.1286C13.0886 9.87975 13.1913 9.51233 13.1 9.16703C13.0087 8.82174 12.7375 8.55207 12.3903 8.46129C12.0431 8.37051 11.6736 8.47268 11.4233 8.72869L8.89913 11.2387L8.89913 1.3293C8.90647 0.970874 8.71837 0.636511 8.40739 0.455161C8.0964 0.273811 7.71112 0.27381 7.40014 0.45516C7.08915 0.636511 6.90105 0.970873 6.90839 1.3293L6.90839 11.2387L4.38422 8.72869C4.13396 8.47268 3.76446 8.37051 3.41722 8.46129C3.06998 8.55207 2.79879 8.82174 2.7075 9.16703C2.61621 9.51233 2.71896 9.87975 2.97641 10.1286L7.11049 14.2395C7.28724 14.4717 7.55784 14.6148 7.85026 14.6306C8.14268 14.6464 8.42727 14.5333 8.62829 14.3216Z",
                                        fill: a,
                                    }),
                                    r.default.createElement("rect", { x: "0.260986", y: "15.75", width: "15.8387", height: "2.25", rx: "1", fill: "white" })
                                );
                            }
                            s.propTypes = { width: n.default.string, height: n.default.string, fill: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5773,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ width: e = "15", height: t = "15", fill: a = "white" }) {
                                return r.default.createElement(
                                    "svg",
                                    { width: e, height: t, viewBox: `0 0 ${e} ${t}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z",
                                        fill: a,
                                    })
                                );
                            }
                            s.propTypes = { width: n.default.string, height: n.default.string, fill: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5774,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("rect", { x: "0.5", y: "0.5", width: "27", height: "27", rx: "13.5", stroke: a }),
                                    r.default.createElement("path", {
                                        d:
                                            "M14.3465 17.3611C14.3661 17.3402 14.3846 17.3181 14.4018 17.2952L17.597 14.0999C17.7961 13.9063 17.8756 13.6206 17.805 13.352C17.7344 13.0834 17.5246 12.8737 17.2561 12.8031C16.9875 12.7325 16.7017 12.812 16.5082 13.0111L14.5559 14.9633L14.5559 7.25598C14.5616 6.97721 14.4161 6.71715 14.1756 6.5761C13.9351 6.43505 13.6371 6.43505 13.3966 6.5761C13.1561 6.71715 13.0106 6.97721 13.0163 7.25598L13.0163 14.9633L11.064 13.0111C10.8705 12.812 10.5847 12.7325 10.3161 12.8031C10.0476 12.8737 9.83782 13.0834 9.76721 13.352C9.69661 13.6206 9.77608 13.9063 9.97519 14.0999L13.1726 17.2973C13.3093 17.4779 13.5186 17.5891 13.7447 17.6014C13.9709 17.6137 14.191 17.5258 14.3465 17.3611Z",
                                        fill: a,
                                    }),
                                    r.default.createElement("rect", { x: "7.875", y: "19.25", width: "12.25", height: "1.75", rx: "0.875", fill: a })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5775,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ size: e = 24, color: t = "currentColor", ariaLabel: a, className: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, height: e, fill: t, className: n, "aria-label": a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    r.default.createElement("path", {
                                        d:
                                            "m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z",
                                    })
                                );
                            s.propTypes = { size: n.default.number, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5776,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("rect", { x: "0.5", y: "0.5", width: "29", height: "29", rx: "14.5", stroke: a }),
                                    r.default.createElement("path", {
                                        d:
                                            "M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z",
                                        fill: a,
                                    })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5777,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ className: e, size: t, color: a }) {
                                return r.default.createElement(
                                    "svg",
                                    { className: e, width: t, height: t, viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z",
                                        stroke: a,
                                    }),
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d:
                                            "M21.2073 9.65858C21.2854 9.58047 21.4121 9.58047 21.4902 9.65858L23.8722 12.0406C23.9503 12.1187 23.9503 12.2453 23.8722 12.3234L22.3941 13.8015L19.7293 11.1367L21.2073 9.65858ZM18.5979 12.268L10.7361 20.1299C10.7086 20.1573 10.6898 20.1921 10.6818 20.2301L10.0466 23.2473C10.0168 23.3886 10.1421 23.5139 10.2835 23.4842L13.3007 22.849C13.3386 22.841 13.3734 22.8221 13.4009 22.7947L21.2627 14.9328L18.5979 12.268ZM22.6215 8.52721C21.9186 7.82426 20.7789 7.82427 20.076 8.52721L9.60469 18.9985C9.35778 19.2454 9.18802 19.5588 9.11609 19.9005L8.48089 22.9176C8.21306 24.1898 9.34091 25.3177 10.6131 25.0498L13.6303 24.4146C13.972 24.3427 14.2853 24.173 14.5323 23.9261L25.0035 13.4548C25.7065 12.7518 25.7065 11.6121 25.0035 10.9092L22.6215 8.52721Z",
                                        fill: a,
                                    })
                                );
                            }
                            s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5778,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ reverseColors: e }) {
                                const t = e ? "var(--color-primary-default)" : "var(--color-primary-inverse)",
                                    a = e ? "var(--color-primary-inverse)" : "var(--color-primary-default)";
                                return r.default.createElement(
                                    "svg",
                                    { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M13.2148 9.05384C13.432 8.40203 14.8878 7.92403 14.8878 7.20703C14.8878 6.49003 13.432 6.01204 13.2148 5.36022C12.9975 4.68668 13.8883 3.44823 13.4755 2.88332C13.0627 2.31842 11.607 2.77469 11.0421 2.3836C10.4771 1.97078 10.4771 0.449879 9.80361 0.232608C9.15179 0.0153358 8.26098 1.25378 7.54398 1.25378C6.82698 1.25378 5.91444 0.0153358 5.28435 0.232608C4.61081 0.449879 4.61081 1.99251 4.04591 2.3836C3.481 2.79641 2.02528 2.31842 1.61246 2.88332C1.19965 3.44823 2.09046 4.68668 1.87319 5.36022C1.65592 6.01204 0.200195 6.49003 0.200195 7.20703C0.200195 7.92403 1.65592 8.40203 1.87319 9.05384C2.09046 9.72738 1.19965 10.9658 1.61246 11.5307C2.02528 12.0956 3.481 11.6394 4.04591 12.0305C4.61081 12.4433 4.61081 13.9642 5.28435 14.1815C5.93617 14.3987 6.82698 13.1603 7.54398 13.1603C8.26098 13.1603 9.17352 14.3987 9.80361 14.1815C10.4771 13.9642 10.4771 12.4216 11.0421 12.0305C11.607 11.6176 13.0627 12.0956 13.4755 11.5307C13.8883 10.9658 12.9975 9.70566 13.2148 9.05384Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M6.42285 10.084L4.13965 7.81445C4.07585 7.75065 4.04395 7.66862 4.04395 7.56836C4.04395 7.4681 4.07585 7.38607 4.13965 7.32227L4.64551 6.83008C4.70931 6.75716 4.78678 6.7207 4.87793 6.7207C4.97819 6.7207 5.06478 6.75716 5.1377 6.83008L6.66895 8.36133L9.9502 5.08008C10.0231 5.00716 10.1051 4.9707 10.1963 4.9707C10.2965 4.9707 10.3786 5.00716 10.4424 5.08008L10.9482 5.57227C11.012 5.63607 11.0439 5.7181 11.0439 5.81836C11.0439 5.91862 11.012 6.00065 10.9482 6.06445L6.91504 10.084C6.85124 10.1569 6.76921 10.1934 6.66895 10.1934C6.56868 10.1934 6.48665 10.1569 6.42285 10.084Z",
                                        fill: a,
                                    })
                                );
                            }
                            s.propTypes = { reverseColors: n.default.bool };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5779,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e, size: t, color: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: t, height: t, viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e },
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z",
                                        stroke: a,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M21.4444 21.2214C21.4444 21.4147 21.2877 21.5714 21.0944 21.5714H12.9056C12.7123 21.5714 12.5556 21.4147 12.5556 21.2214V19.6907C12.5556 19.3765 12.1736 19.2214 11.9546 19.4467L9.2372 22.2417C9.10513 22.3776 9.10513 22.5938 9.2372 22.7297L11.9546 25.5247C12.1736 25.75 12.5556 25.595 12.5556 25.2808V23.75C12.5556 23.5567 12.7123 23.4 12.9056 23.4H22.8722C23.0655 23.4 23.2222 23.2433 23.2222 23.05V18.2643C23.2222 18.071 23.0655 17.9143 22.8722 17.9143H21.7944C21.6011 17.9143 21.4444 18.071 21.4444 18.2643V21.2214ZM12.5556 13.9214C12.5556 13.7281 12.7123 13.5714 12.9056 13.5714H21.0944C21.2877 13.5714 21.4444 13.7281 21.4444 13.9214V15.4522C21.4444 15.7664 21.8264 15.9214 22.0454 15.6962L24.7628 12.9011C24.8949 12.7653 24.8949 12.549 24.7628 12.4132L22.0454 9.61812C21.8264 9.39284 21.4444 9.5479 21.4444 9.8621V11.3929C21.4444 11.5862 21.2877 11.7429 21.0944 11.7429H11.1278C10.9345 11.7429 10.7778 11.8996 10.7778 12.0929V16.8786C10.7778 17.0719 10.9345 17.2286 11.1278 17.2286H12.2056C12.3989 17.2286 12.5556 17.0719 12.5556 16.8786V13.9214Z",
                                        fill: a,
                                    })
                                );
                            (s.defaultProps = { className: undefined }), (s.propTypes = { className: n.default.string, size: n.default.number.isRequired, color: n.default.string.isRequired });
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            578,
            { "./CardContent": 577, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CardContent"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5780,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ width: e = "17", height: t = "17", color: a = "white" }) {
                                return r.default.createElement(
                                    "svg",
                                    { width: e, height: t, viewBox: `0 0 ${e} ${t}`, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z",
                                        fill: a,
                                        stroke: a,
                                        strokeWidth: "0.1",
                                    })
                                );
                            }
                            s.propTypes = { width: n.default.string, height: n.default.string, color: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5781,
            { "@download/blockies": 201, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("@download/blockies");
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const l = ({ address: e, diameter: t, alt: a = "", borderRadius: r }) => {
                                const [o, i] = (0, n.useState)(null),
                                    l = (0, n.useRef)(null);
                                return (
                                    (0, n.useEffect)(() => {
                                        const t = l.current;
                                        (0, s.renderIcon)({ seed: e.toLowerCase() }, t);
                                        const a = t.toDataURL();
                                        a !== o && i(a);
                                    }, [o, e]),
                                    n.default.createElement(
                                        n.default.Fragment,
                                        null,
                                        n.default.createElement("canvas", { ref: l, style: { display: "none" } }),
                                        n.default.createElement("img", { src: o, height: t, width: t, style: { borderRadius: r }, alt: a })
                                    )
                                );
                            };
                            l.propTypes = { address: o.default.string.isRequired, diameter: o.default.number.isRequired, alt: o.default.string, borderRadius: o.default.string };
                            var u = l;
                            a.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5782,
            { "./blockieIdenticon.component": 5781 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./blockieIdenticon.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5783,
            { "../../../helpers/utils/util": 5937, "../jazzicon": 5789, "./blockieIdenticon": 5782, classnames: 1772, lodash: 4694, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = d(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = c(e("prop-types")),
                                o = c(e("classnames")),
                                s = e("lodash"),
                                i = c(e("../jazzicon")),
                                l = e("../../../helpers/utils/util"),
                                u = c(e("./blockieIdenticon"));
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (d = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function f(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            const p = (e) => ({ height: e, width: e, borderRadius: e / 2 });
                            class m extends r.Component {
                                renderImage() {
                                    const { className: e, diameter: t, alt: a, imageBorder: n, ipfsGateway: s } = this.props;
                                    let { image: i } = this.props;
                                    return (
                                        Array.isArray(i) && i.length && (i = i[0]),
                                        "string" == typeof i && i.toLowerCase().startsWith("ipfs://") && (i = (0, l.getAssetImageURL)(i, s)),
                                        r.default.createElement("img", { className: (0, o.default)("identicon", e, { "identicon__image-border": n }), src: i, style: p(t), alt: a })
                                    );
                                }
                                renderJazzicon() {
                                    const { address: e, className: t, diameter: a, alt: n, tokenList: s } = this.props;
                                    return r.default.createElement(i.default, { address: e, diameter: a, className: (0, o.default)("identicon", t), style: p(a), alt: n, tokenList: s });
                                }
                                renderBlockie() {
                                    const { address: e, className: t, diameter: a, alt: n } = this.props;
                                    return r.default.createElement("div", { className: (0, o.default)("identicon", t), style: p(a) }, r.default.createElement(u.default, { address: e, diameter: a, alt: n }));
                                }
                                shouldComponentUpdate(e) {
                                    return !(0, s.isEqual)(e, this.props);
                                }
                                render() {
                                    const { address: e, image: t, useBlockie: a, addBorder: n, diameter: s, tokenList: i } = this.props,
                                        l = s + 8;
                                    return t
                                        ? this.renderImage()
                                        : e
                                        ? null !== (u = i[e.toLowerCase()]) && void 0 !== u && u.iconUrl
                                            ? this.renderJazzicon()
                                            : r.default.createElement("div", { className: (0, o.default)({ "identicon__address-wrapper": n }), style: n ? p(l) : null }, a ? this.renderBlockie() : this.renderJazzicon())
                                        : r.default.createElement("div", { style: p(s), className: "identicon__image-border" });
                                    var u;
                                }
                            }
                            (a.default = m),
                                f(m, "propTypes", {
                                    addBorder: n.default.bool,
                                    address: n.default.string,
                                    className: n.default.string,
                                    diameter: n.default.number,
                                    image: n.default.oneOfType([n.default.string, n.default.array]),
                                    useBlockie: n.default.bool,
                                    alt: n.default.string,
                                    imageBorder: n.default.bool,
                                    tokenList: n.default.object,
                                    ipfsGateway: n.default.string,
                                }),
                                f(m, "defaultProps", { addBorder: !1, address: undefined, className: undefined, diameter: 46, image: undefined, useBlockie: !1, alt: "", tokenList: {} });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5784,
            { "../../../selectors": 6300, "./identicon.component": 5783, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = e("react-redux"),
                                o = e("../../../selectors"),
                                s = (r = e("./identicon.component")) && r.__esModule ? r : { default: r };
                            var i = (0, n.connect)((e) => {
                                const {
                                    metamask: { useBlockie: t, ipfsGateway: a },
                                } = e;
                                return { useBlockie: t, tokenList: (0, o.getTokenList)(e), ipfsGateway: a };
                            })(s.default);
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5785,
            { "./identicon.container": 5784 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./identicon.container")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5786,
            { "./info-tooltip": 5788 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./info-tooltip")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5787,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ fillColor: e = "var(--color-icon-default)" }) {
                                return r.default.createElement(
                                    "svg",
                                    { viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", { d: "M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z", fill: e })
                                );
                            }
                            s.propTypes = { fillColor: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5788,
            { "../tooltip": 5865, "./info-tooltip-icon": 5787, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                            var r = l(e("react")),
                                n = l(e("prop-types")),
                                o = l(e("classnames")),
                                s = l(e("../tooltip")),
                                i = l(e("./info-tooltip-icon"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const u = { top: "info-tooltip__top-tooltip-arrow", bottom: "info-tooltip__bottom-tooltip-arrow", left: "info-tooltip__left-tooltip-arrow", right: "info-tooltip__right-tooltip-arrow" };
                            function c({ contentText: e = "", position: t = "", containerClassName: a, wrapperClassName: n, iconFillColor: l = "var(--color-icon-alternative)" }) {
                                return r.default.createElement(
                                    "div",
                                    { className: "info-tooltip" },
                                    r.default.createElement(
                                        s.default,
                                        {
                                            interactive: !0,
                                            position: t,
                                            containerClassName: (0, o.default)("info-tooltip__tooltip-container", a),
                                            wrapperClassName: n,
                                            tooltipInnerClassName: "info-tooltip__tooltip-content",
                                            tooltipArrowClassName: u[t],
                                            html: e,
                                            theme: "tippy-tooltip-info",
                                        },
                                        r.default.createElement(i.default, { fillColor: l })
                                    )
                                );
                            }
                            c.propTypes = {
                                contentText: n.default.node,
                                position: n.default.oneOf(["top", "left", "bottom", "right"]),
                                containerClassName: n.default.string,
                                wrapperClassName: n.default.string,
                                iconFillColor: n.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5789,
            { "./jazzicon.component": 5790 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./jazzicon.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            579,
            {
                "../Typography": 793,
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = n(e("../styles/withStyles")),
                                c = n(e("../Typography")),
                                d = {
                                    root: { display: "flex", alignItems: "center", padding: 16 },
                                    avatar: { flex: "0 0 auto", marginRight: 16 },
                                    action: { flex: "0 0 auto", alignSelf: "flex-start", marginTop: -8, marginRight: -8 },
                                    content: { flex: "1 1 auto" },
                                    title: {},
                                    subheader: {},
                                };
                            a.styles = d;
                            var f = i.forwardRef(function (e, t) {
                                    var a = e.action,
                                        r = e.avatar,
                                        n = e.classes,
                                        u = e.className,
                                        d = e.component,
                                        f = void 0 === d ? "div" : d,
                                        p = e.disableTypography,
                                        m = void 0 !== p && p,
                                        g = e.subheader,
                                        h = e.subheaderTypographyProps,
                                        v = e.title,
                                        C = e.titleTypographyProps,
                                        b = (0, s.default)(e, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]),
                                        y = v;
                                    null == y || y.type === c.default || m || (y = i.createElement(c.default, (0, o.default)({ variant: r ? "body2" : "h5", className: n.title, component: "span", display: "block" }, C), y));
                                    var _ = g;
                                    return (
                                        null == _ ||
                                            _.type === c.default ||
                                            m ||
                                            (_ = i.createElement(c.default, (0, o.default)({ variant: r ? "body2" : "body1", className: n.subheader, color: "textSecondary", component: "span", display: "block" }, h), _)),
                                        i.createElement(
                                            f,
                                            (0, o.default)({ className: (0, l.default)(n.root, u), ref: t }, b),
                                            r && i.createElement("div", { className: n.avatar }, r),
                                            i.createElement("div", { className: n.content }, y, _),
                                            a && i.createElement("div", { className: n.action }, a)
                                        )
                                    );
                                }),
                                p = (0, u.default)(d, { name: "MuiCardHeader" })(f);
                            a.default = p;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5790,
            { "../../../helpers/utils/icon-factory": 5926, "@metamask/jazzicon": 1163, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("@metamask/jazzicon"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const l = (0, s(e("../../../helpers/utils/icon-factory")).default)(o.default);
                            function u({ address: e, className: t, diameter: a = 46, style: n, tokenList: o = {} }) {
                                const s = (0, r.useRef)();
                                return (
                                    (0, r.useEffect)(() => {
                                        const t = s.current,
                                            r = l.iconForAddress(e, a, o[null == e ? void 0 : e.toLowerCase()]);
                                        return (
                                            null == t || t.appendChild(r),
                                            () => {
                                                for (; t.firstChild; ) t.firstChild.remove();
                                            }
                                        );
                                    }, [e, a, o]),
                                    r.default.createElement("div", { ref: s, className: t, style: n })
                                );
                            }
                            u.propTypes = { address: n.default.string.isRequired, className: n.default.string, diameter: n.default.number, style: n.default.object, tokenList: n.default.object };
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5791,
            { "./list-item.component": 5792 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./list-item.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5792,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = i);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i({ title: e, subtitle: t, onClick: a, children: n, titleIcon: s, icon: i, rightContent: l, midContent: u, className: c, "data-testid": d }) {
                                const f = (0, o.default)("list-item", c, t || n ? "" : "list-item--single-content-row");
                                return r.default.createElement(
                                    "div",
                                    {
                                        className: f,
                                        onClick: a,
                                        "data-testid": d,
                                        role: "button",
                                        tabIndex: 0,
                                        onKeyPress: (e) => {
                                            "Enter" === e.key && a();
                                        },
                                    },
                                    i ? r.default.createElement("div", { className: "list-item__icon" }, i) : null,
                                    r.default.createElement(
                                        "div",
                                        { className: "list-item__heading" },
                                        r.default.isValidElement(e) ? e : r.default.createElement("h2", { className: "list-item__title" }, e),
                                        s && r.default.createElement("div", { className: "list-item__heading-wrap" }, s)
                                    ),
                                    t ? r.default.createElement("div", { className: "list-item__subheading" }, t) : null,
                                    n ? r.default.createElement("div", { className: "list-item__actions" }, n) : null,
                                    u ? r.default.createElement("div", { className: "list-item__mid-content" }, u) : null,
                                    l ? r.default.createElement("div", { className: "list-item__right-content" }, l) : null
                                );
                            }
                            i.propTypes = {
                                title: n.default.oneOfType([n.default.string, n.default.node]),
                                titleIcon: n.default.node,
                                subtitle: n.default.node,
                                children: n.default.node,
                                icon: n.default.node,
                                rightContent: n.default.node,
                                midContent: n.default.node,
                                className: n.default.string,
                                onClick: n.default.func,
                                "data-testid": n.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5793,
            { "../../../ducks/app/app": 5884, "../../../helpers/utils/gas": 5923, "../../../hooks/useShouldAnimateGasEstimations": 5963, classnames: 1772, "prop-types": 4806, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = d);
                            var r = e("react-redux"),
                                n = c(e("classnames")),
                                o = c(e("prop-types")),
                                s = c(e("react")),
                                i = e("../../../helpers/utils/gas"),
                                l = e("../../../ducks/app/app"),
                                u = e("../../../hooks/useShouldAnimateGasEstimations");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d({ estimateUsed: e, backgroundColor: t = "var(--color-background-default)" }) {
                                (0, u.useShouldAnimateGasEstimations)();
                                const a = (0, r.useSelector)(l.getGasLoadingAnimationIsShowing);
                                return e && !(0, i.isMetamaskSuggestedGasEstimate)(e)
                                    ? null
                                    : s.default.createElement("div", {
                                          className: (0, n.default)("loading-heartbeat", { "loading-heartbeat--active": a }),
                                          onClick: (e) => {
                                              e.preventDefault(), e.stopPropagation();
                                          },
                                          style: { backgroundColor: t },
                                      });
                            }
                            d.propTypes = { backgroundColor: o.default.string, estimateUsed: o.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5794,
            { "./loading-indicator": 5795 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./loading-indicator")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5795,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = s);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function s({ alt: e, title: t, isLoading: a, children: n = null }) {
                                return a ? r.default.createElement("span", { className: "loading-indicator" }, r.default.createElement("img", { className: "loading-indicator__spinner", alt: e, title: t, src: "images/loading.svg" })) : n;
                            }
                            s.propTypes = { isLoading: n.default.bool.isRequired, alt: n.default.string.isRequired, title: n.default.string.isRequired, children: n.default.node };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5796,
            { "./loading-screen.component": 5797 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./loading-screen.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5797,
            { "../spinner": 5847, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("../spinner"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class u extends r.Component {
                                renderMessage() {
                                    const { loadingMessage: e } = this.props;
                                    return e ? ((0, r.isValidElement)(e) ? e : r.default.createElement("span", null, e)) : null;
                                }
                                render() {
                                    return r.default.createElement(
                                        "div",
                                        { className: "loading-overlay" },
                                        this.props.header,
                                        r.default.createElement(
                                            "div",
                                            { className: "loading-overlay__container" },
                                            this.props.showLoadingSpinner && r.default.createElement(o.default, { color: "var(--color-warning-default)", className: "loading-overlay__spinner" }),
                                            this.renderMessage()
                                        )
                                    );
                                }
                            }
                            l(u, "defaultProps", { loadingMessage: null, showLoadingSpinner: !0 }),
                                l(u, "propTypes", { loadingMessage: n.default.oneOfType([n.default.string, n.default.element]), showLoadingSpinner: n.default.bool, header: n.default.element });
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5798,
            { "./lock-icon.component": 5799 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./lock-icon.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5799,
            { react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function (e) {
                                    return n.default.createElement(
                                        "svg",
                                        o(
                                            {
                                                version: "1.1",
                                                id: "Capa_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                width: "401.998px",
                                                height: "401.998px",
                                                viewBox: "0 0 401.998 401.998",
                                                style: { enableBackground: "new 0 0 401.998 401.998" },
                                                xmlSpace: "preserve",
                                            },
                                            e
                                        ),
                                        n.default.createElement(
                                            "g",
                                            null,
                                            n.default.createElement("path", {
                                                d:
                                                    "M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218 C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821 h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417 c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135 C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728 z",
                                            })
                                        )
                                    );
                                });
                            var r,
                                n = (r = e("react")) && r.__esModule ? r : { default: r };
                            function o() {
                                return (
                                    (o = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    o.apply(this, arguments)
                                );
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            580,
            { "./CardHeader": 579, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CardHeader"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5800,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", className: t, ariaLabel: a, color: n = "var(--color-text-default)" }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, viewBox: "0 0 125 24", xmlns: "http://www.w3.org/2000/svg", fill: "none", className: `logo-coinbasepay ${t}`, "aria-label": a },
                                    r.default.createElement("path", {
                                        d:
                                            "M28.4278 4.10732C28.2105 4.09956 27.9938 4.13626 27.7911 4.21515C27.5885 4.29405 27.404 4.41349 27.2491 4.56615C27.0942 4.71882 26.9721 4.9015 26.8903 5.103C26.8085 5.3045 26.7686 5.52059 26.7732 5.73803C26.7913 6.1643 26.9734 6.56711 27.2815 6.86233C27.5895 7.15755 27.9996 7.32237 28.4263 7.32237C28.853 7.32237 29.2631 7.15755 29.5712 6.86233C29.8792 6.56711 30.0613 6.1643 30.0794 5.73803C30.0844 5.52074 30.0449 5.30471 29.9634 5.10322C29.8819 4.90172 29.7601 4.71901 29.6055 4.5663C29.4508 4.41359 29.2666 4.2941 29.064 4.21517C28.8615 4.13625 28.645 4.09955 28.4278 4.10732ZM84.799 8.47177C81.4928 8.47177 79.0661 10.9611 79.0661 14.2433C79.0661 17.7015 81.6657 19.997 84.8407 19.997C87.5238 19.997 89.6285 18.408 90.1651 16.1543H87.482C87.0945 17.141 86.1494 17.7015 84.8854 17.7015C83.2309 17.7015 81.9877 16.67 81.7075 14.8664H90.2277V13.8737C90.2277 10.6957 87.9113 8.47177 84.799 8.47177ZM81.8565 13.0211C82.265 11.4768 83.4246 10.7255 84.7542 10.7255C86.215 10.7255 87.33 11.5603 87.5894 13.0211H81.8565ZM19.0102 8.47177C18.2476 8.45519 17.4894 8.59283 16.7812 8.87644C16.0731 9.16005 15.4295 9.58378 14.8891 10.1222C14.3487 10.6607 13.9227 11.3027 13.6365 12.0099C13.3503 12.717 13.2099 13.4747 13.2238 14.2374C13.2238 17.5435 15.6922 19.9911 18.9983 19.9911C19.7652 20.0134 20.5287 19.8797 21.2423 19.5982C21.956 19.3166 22.6051 18.8929 23.1501 18.3529C23.6951 17.8129 24.1247 17.1678 24.4129 16.4568C24.7011 15.7458 24.8418 14.9836 24.8265 14.2165C24.8265 10.9551 22.3581 8.47177 19.0102 8.47177ZM19.0311 17.6151C17.1858 17.6151 15.8323 16.1751 15.8323 14.2433C15.8323 12.3115 17.1649 10.8567 19.0102 10.8567C20.8556 10.8567 22.2299 12.3145 22.2299 14.2463C22.2299 16.1781 20.8765 17.6091 19.0311 17.6091V17.6151ZM37.7917 8.47177C36.1163 8.47177 35.0222 9.15744 34.3782 10.1233V8.68045H31.8234V19.7764H34.3902V13.7455C34.3902 12.0492 35.4723 10.8567 37.0732 10.8567C38.5638 10.8567 39.4761 11.9091 39.4761 13.4325V19.7764H42.0518V13.2417C42.0399 10.4394 40.6029 8.47177 37.7917 8.47177ZM6.75461 10.8567C7.38882 10.8516 8.0076 11.0523 8.51819 11.4285C9.02879 11.8047 9.4037 12.3363 9.58673 12.9435H12.3115C11.8196 10.2813 9.62847 8.47177 6.77548 8.47177C6.0138 8.45681 5.25693 8.59565 4.55016 8.87999C3.84338 9.16433 3.20123 9.58832 2.66212 10.1266C2.12302 10.6649 1.69803 11.3064 1.4126 12.0127C1.12716 12.719 0.987147 13.4757 1.00093 14.2374C1.00093 17.5435 3.46935 19.9911 6.77548 19.9911C9.56586 19.9911 11.7988 18.2023 12.2907 15.5193H9.58673C9.41182 16.1287 9.04244 16.6642 8.5349 17.0442C8.02735 17.4242 7.40949 17.6278 6.77548 17.624C4.90628 17.624 3.59754 16.1841 3.59754 14.2523C3.59754 12.3205 4.87646 10.8567 6.75461 10.8567ZM25.5361 10.9849H27.1459V19.7764H29.7216V8.68045H25.548L25.5361 10.9849ZM66.2322 12.4755C66.2322 10.0727 64.7714 8.46283 61.6799 8.46283C58.7613 8.46283 57.1306 9.95342 56.8087 12.2191H59.3635C59.4917 11.3248 60.1774 10.6093 61.6382 10.6093C62.9469 10.6093 63.5908 11.1876 63.5908 11.8971C63.5908 12.8183 62.3984 13.0538 60.9525 13.2059C58.976 13.4205 56.5284 14.1002 56.5284 16.6819C56.5284 18.6793 58.019 19.9612 60.3712 19.9612C62.2165 19.9612 63.3762 19.1891 63.9486 17.9639C64.0321 19.0579 64.8429 19.7675 65.9877 19.7675H67.4783V17.472H66.2113L66.2322 12.4755ZM63.6982 15.2659C63.6982 16.7565 62.4103 17.8416 60.8452 17.8416C59.8793 17.8416 59.0565 17.4332 59.0565 16.5746C59.0565 15.4805 60.3652 15.1794 61.5666 15.0512C62.768 14.923 63.3553 14.6875 63.6922 14.1927L63.6982 15.2659ZM74.4751 13.1612L72.5851 12.8839C71.6907 12.7557 71.0408 12.4546 71.0408 11.7451C71.0408 10.973 71.8755 10.5854 73.0144 10.5854C74.2605 10.5854 75.0535 11.122 75.2264 12.0045H77.7157C77.4354 9.77157 75.7183 8.46283 73.0799 8.46283C70.3522 8.46283 68.5485 9.85802 68.5485 11.8316C68.5485 13.7216 69.741 14.8127 72.126 15.1586L74.0131 15.4388C74.9372 15.567 75.453 15.9307 75.453 16.6313C75.453 17.5107 74.5586 17.8744 73.3065 17.8744C71.7801 17.8744 70.9216 17.2514 70.7934 16.3093H68.2624C68.4979 18.4766 70.1942 20 73.2827 20C76.0969 20 77.9631 18.7121 77.9631 16.5001C77.9512 14.5176 76.5977 13.4861 74.4751 13.1642V13.1612ZM50.0265 8.47177C49.36 8.4623 48.6998 8.60194 48.0943 8.88048C47.4887 9.15901 46.9531 9.5694 46.5266 10.0816V4H43.9508V19.7764H46.4848V18.3097C46.9093 18.8394 47.4488 19.2656 48.0624 19.5559C48.676 19.8462 49.3477 19.993 50.0265 19.9851C53.1179 19.9851 55.4552 17.5375 55.4552 14.2314C55.4552 10.9253 53.0732 8.47177 50.0265 8.47177ZM49.6389 17.6151C47.7936 17.6151 46.4401 16.1751 46.4401 14.2433C46.4401 12.3115 47.8055 10.8567 49.6598 10.8567C51.5141 10.8567 52.8377 12.2936 52.8377 14.2463C52.8377 16.199 51.4843 17.6091 49.6389 17.6091V17.6151Z",
                                        fill: "#0052FF",
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M97.314 8.67746H102.111C104.496 8.67746 105.846 10.016 105.846 11.9568C105.846 13.8975 104.508 15.2689 102.111 15.2689H98.9864V19.7794H97.314V8.67746ZM104.15 11.8792C104.15 10.7911 103.455 10.1114 102.063 10.1114H98.9864V13.8379H102.063C103.449 13.8379 104.15 13.1582 104.15 12.0492V11.8792Z",
                                        fill: n,
                                    }),
                                    r.default.createElement("path", {
                                        d: "M113.025 17.1172H108.055L107.077 19.7675H105.342L109.602 8.66556H111.51L115.815 19.7675H114.026L113.025 17.1172ZM108.577 15.6833H112.497L110.541 10.4483H110.509L108.577 15.6833Z",
                                        fill: n,
                                    }),
                                    r.default.createElement("path", { d: "M118.543 15.4269L114.602 8.67746H116.429L119.381 13.7872H119.41L122.362 8.67746H124.174L120.215 15.4269V19.7794H118.543V15.4269Z", fill: n })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5801,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 80 78", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M46.82 37.7L34.405 44.9489L22 37.7L34.407 55L46.82 37.7ZM34.405 44.9489L34.407 44.95H34.403L34.405 44.9489Z" }),
                                    r.default.createElement("path", { d: "M22.187 35.37L34.593 15L47 35.378L34.593 42.628L22.187 35.37Z" }),
                                    r.default.createElement("path", { d: "M71.5 59.423H65.077V53H60.923V59.423H54.5V63.577H60.923V70H65.077V63.577H71.5V59.423Z" }),
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d:
                                            "M34 68C38.4608 68 42.7208 67.141 46.6239 65.5793C48.6231 72.7439 55.1978 78 63 78C72.3889 78 80 70.3889 80 61C80 52.7752 74.1592 45.9147 66.3992 44.3399C67.4389 41.0794 68 37.6052 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68ZM34 3C16.8792 3 3 16.8792 3 34C3 51.1208 16.8792 65 34 65C38.2818 65 42.3609 64.1319 46.0708 62.5621C46.0239 62.0477 46 61.5266 46 61C46 51.6111 53.6111 44 63 44C63.1171 44 63.2339 44.0012 63.3505 44.0035C64.4199 40.8651 65 37.5003 65 34C65 16.8792 51.1208 3 34 3ZM63 47C55.268 47 49 53.268 49 61C49 68.732 55.268 75 63 75C70.732 75 77 68.732 77 61C77 53.268 70.732 47 63 47Z",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5802,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 2546 491", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d:
                                            "M2460 15V30H2488H2516V140V250H2531H2546V125V0H2503H2460V15ZM1861 116.038C1796.99 123.881 1741.39 163.865 1712.97 222.5C1680.8 288.855 1690.83 365.835 1739.17 423.5C1778.97 470.987 1839.99 496.383 1898.79 489.935C1937.49 485.692 1976.26 467.949 2005.03 441.315L2010.98 435.803L1997.36 421.444L1983.74 407.085L1974.62 415.109C1953.06 434.078 1931.7 444.965 1904.88 450.669C1893.48 453.093 1867.95 453.103 1855.82 450.689C1837.26 446.995 1819.5 439.522 1802.54 428.264C1790.63 420.354 1773.3 403.429 1764.69 391.295C1752.74 374.459 1743.39 352.909 1738.81 331.648C1735.63 316.902 1735.66 289.005 1738.87 274C1751.85 213.28 1797.55 166.907 1855.82 155.311C1867.95 152.897 1893.48 152.907 1904.88 155.331C1931.7 161.035 1953.06 171.922 1974.62 190.891L1983.74 198.915L1997.38 184.534L2011.02 170.153L2003.26 163.053C1977.39 139.393 1945.42 123.844 1909.5 117.465C1898.75 115.555 1871.49 114.753 1861 116.038ZM0 303V485H120H240V465.5V446H140.5H41V283.5V121H20.5H0V303ZM407.496 297.75C364.676 394.963 328.599 476.871 327.325 479.769L325.009 485.038L347.632 484.769L370.256 484.5L386.106 448.5C394.823 428.7 403.087 410.135 404.469 407.245L406.983 401.99L508.152 402.245L609.321 402.5L627.41 443.719L645.5 484.938L668.135 484.969L690.769 485L655.85 405.75C636.645 362.163 600.584 280.269 575.716 223.763L530.5 121.027L507.925 121.013L485.35 121L407.496 297.75ZM749 140.5V160H810H871V322.5V485H891.5H912V322.5V160H973H1034V140.5V121H891.5H749V140.5ZM1133 140.5V160H1194H1255V322.5V485H1275.5H1296V322.5V160H1357H1418V140.5V121H1275.5H1133V140.5ZM1534 303V485H1554.5H1575V303V121H1554.5H1534V303ZM2120 303V485H2250.5H2381V465.5V446H2271.5H2162V382.5V319H2260.5H2359V299.5V280H2260.5H2162V220V160H2271.5H2381V140.5V121H2250.5H2120V303ZM550.073 267.125C572.858 318.894 591.65 361.644 591.833 362.125C592.022 362.621 555.677 363 507.976 363C428.21 363 423.821 362.908 424.447 361.25C426.983 354.537 507.62 173.036 508.073 173.02C508.388 173.009 527.288 215.356 550.073 267.125Z",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5803,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 198 49", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M34.1 0H15.5V25.1H40.6V6.5C40.6 2.9 37.7 0 34.1 0ZM9.7 0H6.5C2.9 0 0 2.9 0 6.5V9.7H9.7V0ZM0 15.5H9.7V25.2H0V15.5ZM31 40.6H34.2C37.8 40.6 40.7 37.7 40.7 34.1V31H31V40.6ZM15.5 31H25.2V40.7H15.5V31ZM0 31V34.2C0 37.8 2.9 40.7 6.5 40.7H9.7V31H0ZM65.4 2.6H61.6V38.1H81.7V34.7H65.4V2.6ZM93.9 12C86.5 12 81.3 17.5 81.3 25.4V26.3C81.4 29.7 82.9 32.9 85.4 35.3C87.8 37.5 90.9 38.8 94.2 38.8H94.7C98.2 38.8 101.5 37.5 104.1 35.3L104.2 35.2L102.5 32.4L102.3 32.5C100.2 34.4 97.6 35.5 94.8 35.5C90.2 35.5 85.5 32.5 85.2 25.8H104.4V25.6C104.4 25.6 104.5 24.4 104.5 23.8C104.5 16.6 100.3 12 93.9 12ZM85.3 22.6C86.1 18.1 89.4 15.2 93.7 15.2C96.9 15.2 100.4 17.1 100.7 22.6H85.3ZM126.5 15V16.3C124.9 13.6 121.9 11.9 118.8 11.9H118.5C111.7 11.9 107 17.3 107 25.2C107 33.2 111.5 38.6 118.2 38.6C123.5 38.6 125.9 35.4 126.7 34V37.9H130.3V2.6H126.6V15H126.5ZM118.7 35.3C114 35.3 110.9 31.3 110.9 25.3C110.9 19.5 114.2 15.4 118.8 15.4C122.7 15.4 126.6 18.5 126.6 25.3C126.6 32.7 122.5 35.3 118.7 35.3ZM152.2 15.5V15.7C151.5 14.5 149.3 11.9 144 11.9C137.3 11.9 132.9 17 132.9 24.8C132.9 32.6 137.5 37.9 144.3 37.9C148 37.9 150.5 36.6 152.2 33.9V37.4C152.2 42.3 149.1 45.1 143.6 45.1C141.3 45.1 138.9 44.5 136.8 43.4L136.6 43.3L135.2 46.4L135.4 46.5C138 47.8 140.9 48.5 143.7 48.5C149.6 48.5 155.9 45.5 155.9 37.2V12.6H152.2V15.5ZM144.8 34.6C139.9 34.6 136.7 30.8 136.7 24.9C136.7 18.9 139.5 15.5 144.3 15.5C149.6 15.5 152.1 18.6 152.1 24.9C152.2 31.1 149.6 34.6 144.8 34.6ZM171 12C163.6 12 158.5 17.5 158.5 25.3V26.2C158.6 29.6 160.1 32.8 162.6 35.2C165 37.4 168.1 38.7 171.4 38.7H171.9C175.4 38.7 178.7 37.4 181.3 35.2L181.4 35.1L179.6 32.3L179.4 32.4C177.3 34.3 174.7 35.4 171.9 35.4C167.3 35.4 162.6 32.4 162.3 25.7H181.6V25.5C181.6 25.5 181.7 24.3 181.7 23.7C181.7 16.6 177.5 12 171 12V12ZM162.5 22.6C163.3 18.1 166.6 15.2 170.9 15.2C174.1 15.2 177.6 17.1 177.9 22.6H162.5ZM197.3 12.5C196.8 12.4 196.4 12.4 195.9 12.3C192.4 12.3 189.5 14.5 188 18.2V12.5H184.3L184.4 37.8V38H188.2V27.3C188.2 25.7 188.4 24 188.9 22.5C190.1 18.6 192.8 16.1 196 16.1C196.4 16.1 196.8 16.1 197.2 16.2H197.4V12.5H197.3Z",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5804,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 1920 350", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M1790.37 287.486L1718.37 122.098H1766.58L1815.75 240.711L1872.58 122.098H1920L1807.93 349.906H1759.72L1790.37 287.486ZM1615.05 253.243C1619.31 252.274 1623.41 250.744 1627.26 248.693C1630.99 246.712 1634.45 244.272 1637.56 241.43C1640.67 238.581 1643.36 235.301 1645.54 231.691C1647.83 227.899 1649.6 223.819 1650.81 219.559C1652.12 214.91 1652.76 210.1 1652.73 205.271C1652.77 200.389 1652.13 195.525 1650.81 190.823C1649.6 186.563 1647.83 182.483 1645.54 178.691C1643.35 175.066 1640.66 171.762 1637.56 168.873C1634.48 166.006 1631.02 163.587 1627.26 161.689C1623.39 159.737 1619.28 158.263 1615.05 157.299C1610.6 156.279 1606.05 155.77 1601.48 155.782C1596.94 155.767 1592.42 156.275 1587.99 157.299C1583.81 158.263 1579.76 159.738 1575.94 161.689C1572.2 163.613 1568.74 166.029 1565.64 168.873C1562.5 171.746 1559.79 175.052 1557.58 178.691C1555.3 182.475 1553.55 186.558 1552.39 190.823C1551.13 195.534 1550.51 200.394 1550.56 205.271C1550.52 210.095 1551.14 214.901 1552.39 219.559C1553.55 223.824 1555.3 227.907 1557.58 231.691C1559.77 235.316 1562.49 238.597 1565.64 241.43C1568.78 244.248 1572.23 246.687 1575.94 248.693C1579.73 250.743 1583.79 252.274 1587.99 253.243C1592.41 254.268 1596.94 254.777 1601.48 254.76C1606.05 254.774 1610.6 254.265 1615.05 253.243V253.243ZM1566.44 290.28C1559.05 288.399 1551.94 285.554 1545.29 281.819C1532.34 274.536 1521.65 263.819 1514.4 250.849C1510.66 244.143 1507.82 236.979 1505.94 229.537C1502 213.546 1502 196.838 1505.94 180.846C1507.81 173.427 1510.65 166.288 1514.4 159.614C1521.68 146.69 1532.36 136.007 1545.29 128.723C1551.94 124.989 1559.05 122.144 1566.44 120.262C1574.34 118.258 1582.47 117.265 1590.63 117.309C1595.03 117.299 1599.43 117.566 1603.8 118.107C1607.81 118.605 1611.79 119.405 1615.69 120.502C1619.3 121.527 1622.85 122.78 1626.31 124.253C1629.54 125.63 1632.66 127.258 1635.64 129.122C1638.45 130.878 1641.07 132.91 1643.47 135.189C1645.71 137.318 1647.79 139.613 1649.69 142.053V122.098H1695.51V288.444H1649.69V268.489C1646.76 272.164 1643.41 275.486 1639.71 278.387C1635.63 281.598 1631.15 284.28 1626.39 286.369C1621.09 288.695 1615.55 290.408 1609.86 291.477C1603.52 292.678 1597.08 293.266 1590.63 293.233C1582.47 293.277 1574.34 292.285 1566.44 290.28V290.28ZM1400.11 164.243C1406.67 164.363 1413.22 163.612 1419.58 162.008C1424.54 160.755 1429.17 158.44 1433.15 155.223C1436.74 152.228 1439.49 148.349 1441.13 143.969C1442.92 139.005 1443.79 133.758 1443.69 128.484C1443.79 123.235 1442.92 118.013 1441.13 113.078C1439.49 108.745 1436.74 104.919 1433.15 101.983C1429.15 98.8142 1424.53 96.529 1419.58 95.2782C1413.22 93.6764 1406.67 92.9249 1400.11 93.0432H1355.09V164.243L1400.11 164.243ZM1307.67 53.7714H1404.58C1419.8 53.7714 1432.99 55.6339 1444.17 59.3589C1455.34 63.0839 1464.55 68.2456 1471.79 74.8441C1478.98 81.3866 1484.54 89.5366 1487.99 98.6307C1491.61 108.218 1493.43 118.394 1493.34 128.643C1493.45 138.868 1491.64 149.023 1487.99 158.576C1484.48 167.594 1478.93 175.68 1471.79 182.203C1464.55 188.856 1455.34 194.045 1444.17 197.768C1432.99 201.496 1419.8 203.358 1404.58 203.355H1355.09V288.444H1307.67V53.7714ZM1104.08 122.098H1149.57V142.053C1152.38 138.18 1155.71 134.715 1159.47 131.756C1163.45 128.635 1167.79 126.008 1172.4 123.934C1177.48 121.662 1182.82 120.001 1188.29 118.985C1194.37 117.842 1200.54 117.28 1206.73 117.309C1216.36 117.171 1225.93 118.794 1234.98 122.098C1243.04 125.068 1250.35 129.783 1256.37 135.907C1262.43 142.253 1267.01 149.857 1269.78 158.177C1272.99 167.743 1274.55 177.782 1274.41 187.87V288.444H1228.92V199.684C1229.03 193.195 1228.11 186.73 1226.2 180.527C1224.62 175.405 1221.99 170.673 1218.46 166.638C1215.07 162.889 1210.83 160.014 1206.09 158.257C1200.72 156.314 1195.04 155.367 1189.33 155.463C1183.59 155.372 1177.88 156.319 1172.48 158.257C1167.71 159.999 1163.44 162.876 1160.03 166.638C1156.51 170.673 1153.87 175.405 1152.29 180.527C1150.38 186.73 1149.47 193.195 1149.57 199.684V288.444H1104.08V122.098ZM992.117 252.764C996.46 251.714 1000.67 250.161 1004.65 248.134C1008.44 246.197 1011.91 243.694 1014.95 240.711C1017.95 237.768 1020.55 234.439 1022.69 230.813C1024.86 227.079 1026.48 223.044 1027.48 218.84C1028.56 214.291 1029.1 209.628 1029.07 204.951C1029.1 200.301 1028.57 195.664 1027.48 191.142C1025.46 182.809 1021.12 175.222 1014.95 169.272C1011.87 166.315 1008.41 163.79 1004.65 161.768C1000.7 159.649 996.485 158.066 992.117 157.059C987.379 155.971 982.531 155.435 977.669 155.463C972.861 155.441 968.066 155.977 963.381 157.059C959.036 158.056 954.847 159.64 950.929 161.768C947.205 163.804 943.769 166.327 940.712 169.272C937.701 172.17 935.145 175.507 933.129 179.169C931.07 182.931 929.462 186.924 928.34 191.063C927.134 195.593 926.543 200.264 926.584 204.952C926.557 209.638 927.147 214.308 928.34 218.841C929.433 223.015 931.041 227.037 933.129 230.814C935.17 234.459 937.724 237.792 940.712 240.711C943.729 243.681 947.173 246.183 950.929 248.135C954.88 250.17 959.061 251.724 963.381 252.765C968.058 253.901 972.856 254.463 977.669 254.441C982.535 254.469 987.387 253.907 992.117 252.765V252.764ZM950.849 290.2C942.64 288.29 934.684 285.423 927.142 281.659C920.049 278.123 913.47 273.639 907.586 268.329C901.884 263.17 896.94 257.232 892.899 250.689C888.804 244.029 885.66 236.829 883.56 229.297C879.197 213.36 879.197 196.543 883.56 180.607C885.651 173.097 888.796 165.922 892.899 159.294C896.969 152.773 901.91 146.838 907.586 141.654C913.454 136.303 920.036 131.79 927.142 128.244C934.684 124.482 942.641 121.616 950.849 119.704C968.608 115.659 987.049 115.659 1004.81 119.704C1012.97 121.599 1020.88 124.466 1028.36 128.244C1035.43 131.842 1042.01 136.351 1047.91 141.654C1053.68 146.819 1058.7 152.755 1062.84 159.294C1066.99 165.908 1070.16 173.086 1072.26 180.607C1076.62 196.543 1076.62 213.36 1072.26 229.297C1070.15 236.84 1066.98 244.043 1062.84 250.689C1058.73 257.25 1053.7 263.19 1047.91 268.329C1041.99 273.591 1035.42 278.071 1028.36 281.659C1020.9 285.431 1013.02 288.298 1004.89 290.2C987.102 294.244 968.635 294.244 950.849 290.2V290.2ZM773.31 252.764C777.653 251.715 781.859 250.161 785.842 248.134C789.631 246.197 793.103 243.694 796.139 240.711C799.145 237.768 801.748 234.439 803.881 230.813C806.058 227.079 807.672 223.045 808.671 218.84C809.756 214.291 810.292 209.628 810.267 204.951C810.295 200.301 809.759 195.664 808.671 191.142C806.658 182.809 802.311 175.222 796.139 169.272C793.063 166.315 789.599 163.79 785.842 161.768C781.892 159.649 777.678 158.065 773.31 157.059C768.572 155.971 763.724 155.435 758.862 155.463C754.054 155.441 749.26 155.977 744.575 157.059C740.229 158.056 736.04 159.64 732.122 161.768C728.399 163.805 724.963 166.328 721.906 169.272C718.894 172.171 716.338 175.507 714.323 179.169C712.265 182.932 710.657 186.924 709.533 191.063C708.327 195.592 707.737 200.264 707.777 204.951C707.75 209.638 708.34 214.308 709.533 218.84C710.628 223.014 712.236 227.036 714.323 230.813C716.363 234.459 718.917 237.792 721.906 240.711C724.923 243.68 728.366 246.182 732.122 248.134C736.073 250.169 740.254 251.724 744.575 252.764C749.252 253.9 754.05 254.463 758.862 254.441C763.728 254.469 768.58 253.906 773.31 252.764V252.764ZM732.043 290.2C723.834 288.29 715.877 285.424 708.336 281.66C701.243 278.124 694.664 273.639 688.78 268.33C683.078 263.171 678.134 257.232 674.093 250.69C669.997 244.03 666.854 236.829 664.754 229.298C660.39 213.361 660.39 196.544 664.754 180.607C666.845 173.098 669.989 165.923 674.093 159.295C678.163 152.774 683.104 146.839 688.78 141.655C694.648 136.304 701.23 131.791 708.336 128.245C715.878 124.483 723.834 121.617 732.043 119.704C749.802 115.66 768.243 115.66 786.002 119.704C794.164 121.599 802.069 124.467 809.549 128.245C816.625 131.843 823.199 136.351 829.105 141.655C834.869 146.819 839.892 152.756 844.031 159.295C848.182 165.908 851.354 173.086 853.45 180.607C857.813 196.544 857.813 213.361 853.45 229.298C851.345 236.841 848.174 244.044 844.031 250.69C839.921 257.251 834.895 263.191 829.105 268.33C823.183 273.592 816.611 278.072 809.549 281.66C802.094 285.431 794.216 288.299 786.081 290.2C768.295 294.244 749.829 294.244 732.043 290.2V290.2ZM372.943 53.7714H420.836L502.732 178.93L584.947 53.7714H632.84V288.444H585.426V127.526L517.419 231.293H488.364L420.357 127.526V288.444H372.943V53.7714Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M263.588 95.7848C273.06 95.7848 282.32 92.976 290.195 87.7135C298.071 82.451 304.21 74.9712 307.835 66.2201C311.46 57.4689 312.408 47.8393 310.56 38.5491C308.712 29.2589 304.151 20.7253 297.453 14.0274C290.755 7.32951 282.221 2.7682 272.931 0.920261C263.641 -0.927678 254.011 0.020751 245.26 3.64561C236.509 7.27048 229.029 13.409 223.767 21.2848C218.504 29.1607 215.695 38.4202 215.695 47.8924C215.695 54.1819 216.934 60.4098 219.34 66.2205C221.747 72.0313 225.275 77.311 229.722 81.7583C234.169 86.2056 239.449 89.7334 245.26 92.14C251.071 94.5467 257.298 95.7852 263.588 95.7848V95.7848ZM116.738 311.48C93.6492 311.48 71.0791 304.634 51.8817 291.806C32.6842 278.979 17.7216 260.747 8.88603 239.416C0.050415 218.085 -2.26137 194.613 2.243 171.968C6.74738 149.323 17.8656 128.522 34.1917 112.196C50.5178 95.87 71.3185 84.7518 93.9635 80.2475C116.608 75.7432 140.081 78.055 161.412 86.8907C182.743 95.7263 200.975 110.689 213.802 129.886C226.629 149.084 233.476 171.654 233.475 194.743C233.476 210.073 230.457 225.253 224.59 239.417C218.724 253.58 210.125 266.449 199.285 277.289C188.445 288.13 175.575 296.728 161.412 302.595C147.248 308.461 132.068 311.48 116.738 311.48",
                                        fill: "#7D00FF",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5805,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 107 24", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M1.3333 8H6.6667C7.403 8 8 7.403 8 6.6667V1.3333C8 0.597002 7.403 0 6.6667 0H1.3333C0.597 0 0 0.597002 0 1.3333V6.6667C0 7.403 0.597 8 1.3333 8ZM2.6667 2.6667H5.3333V5.3333H2.6667V2.6667ZM0.6667 13.3333H2C2.3682 13.3333 2.6667 13.0349 2.6667 12.6667V11.3333C2.6667 10.9651 2.3682 10.6667 2 10.6667H0.6667C0.2985 10.6667 0 10.9651 0 11.3333V12.6667C0 13.0349 0.2985 13.3333 0.6667 13.3333ZM6.6667 16H1.3333C0.597 16 0 16.597 0 17.3333V22.6667C0 23.403 0.597 24 1.3333 24H6.6667C7.403 24 8 23.403 8 22.6667V17.3333C8 16.597 7.403 16 6.6667 16ZM5.3333 21.3333H2.6667V18.6667H5.3333V21.3333ZM19.3333 24H23.3333C23.7015 24 24 23.7015 24 23.3333V19.3333C24 18.9651 23.7015 18.6667 23.3333 18.6667H22C21.6318 18.6667 21.3333 18.9651 21.3333 19.3333V21.3333H18.6667V23.3333C18.6667 23.7015 18.9651 24 19.3333 24ZM22.6667 0H17.3333C16.597 0 16 0.597002 16 1.3333V6.6667C16 7.403 16.597 8 17.3333 8H22.6667C23.403 8 24 7.403 24 6.6667V1.3333C24 0.597002 23.403 0 22.6667 0ZM21.3333 5.3333H18.6667V2.6667H21.3333V5.3333ZM6 10.6667C5.6318 10.6667 5.3333 10.9651 5.3333 11.3333V12.6667C5.3333 13.0349 5.6318 13.3333 6 13.3333H10.6667V10.6667H6ZM10.6667 15.3333C10.6667 15.7015 10.9651 16 11.3333 16H13.3333V18C13.3333 18.3682 13.6318 18.6667 14 18.6667H16V13.3333H10.6667V15.3333ZM10.6667 22V23.3333C10.6667 23.7015 10.9651 24 11.3333 24H15.3333C15.7015 24 16 23.7015 16 23.3333V21.3333H11.3333C10.9651 21.3333 10.6667 21.6318 10.6667 22ZM23.3333 10.6667H16.6667C16.2985 10.6667 16 10.9651 16 11.3333V13.3333H18.6667V15.3333C18.6667 15.7015 18.9651 16 19.3333 16H20.6667C21.0349 16 21.3333 15.7015 21.3333 15.3333V13.3333H23.3333C23.7015 13.3333 24 13.0349 24 12.6667V11.3333C24 10.9651 23.7015 10.6667 23.3333 10.6667ZM18.6667 21.3333V18.6667H16V21.3333H18.6667ZM11.3333 5.3333H12.6667C13.0349 5.3333 13.3333 5.0349 13.3333 4.6667V0.666698C13.3333 0.298498 13.0349 0 12.6667 0H11.3333C10.9651 0 10.6667 0.298498 10.6667 0.666698V4.6667C10.6667 5.0349 10.9651 5.3333 11.3333 5.3333ZM13.3333 10V8.6667C13.3333 8.2985 13.0349 8 12.6667 8H11.3333C10.9651 8 10.6667 8.2985 10.6667 8.6667V10.6667H12.6667C13.0349 10.6667 13.3333 10.3682 13.3333 10Z",
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M38.592 18.192C37.7707 18.192 37.0027 18.0427 36.288 17.744C35.584 17.4347 34.9653 17.0187 34.432 16.496C33.8987 15.9627 33.4773 15.3387 33.168 14.624C32.8693 13.9093 32.72 13.1413 32.72 12.32C32.72 11.4987 32.8693 10.7307 33.168 10.016C33.4773 9.3013 33.8987 8.6827 34.432 8.16C34.9653 7.6267 35.584 7.2107 36.288 6.912C37.0027 6.6027 37.7707 6.448 38.592 6.448C39.4133 6.448 40.1813 6.6027 40.896 6.912C41.6107 7.2107 42.2293 7.6267 42.752 8.16C43.2853 8.6827 43.7013 9.3013 44 10.016C44.3093 10.7307 44.464 11.4987 44.464 12.32C44.464 13.0347 44.3467 13.7067 44.112 14.336C43.888 14.9653 43.5733 15.536 43.168 16.048L45.28 18H43.248L42.16 17.008C41.6693 17.3813 41.12 17.6747 40.512 17.888C39.904 18.0907 39.264 18.192 38.592 18.192ZM38.592 16.784C39.5413 16.784 40.3787 16.528 41.104 16.016L39.296 14.336L40.208 13.312L42.08 15.056C42.3573 14.6827 42.576 14.2667 42.736 13.808C42.896 13.3387 42.976 12.8427 42.976 12.32C42.976 11.7013 42.864 11.12 42.64 10.576C42.416 10.032 42.1067 9.5573 41.712 9.152C41.328 8.7467 40.864 8.432 40.32 8.208C39.7867 7.9733 39.2107 7.856 38.592 7.856C37.9733 7.856 37.3973 7.9733 36.864 8.208C36.3307 8.432 35.8667 8.7467 35.472 9.152C35.088 9.5573 34.784 10.032 34.56 10.576C34.336 11.12 34.224 11.7013 34.224 12.32C34.224 12.9493 34.336 13.536 34.56 14.08C34.784 14.6133 35.088 15.0827 35.472 15.488C35.8667 15.8933 36.3307 16.2133 36.864 16.448C37.3973 16.672 37.9733 16.784 38.592 16.784ZM46.9259 6.64H50.7979C51.3205 6.64 51.7899 6.7147 52.2059 6.864C52.6325 7.0133 52.9899 7.2267 53.2779 7.504C53.5765 7.7813 53.8005 8.112 53.9499 8.496C54.1099 8.88 54.1899 9.3067 54.1899 9.776C54.1899 10.608 53.9392 11.2907 53.4379 11.824C52.9472 12.3573 52.2592 12.688 51.3739 12.816L55.7579 18H53.8859L49.5179 12.832H48.4139V18H46.9259V6.64ZM50.6219 11.504C51.2725 11.504 51.7792 11.36 52.1419 11.072C52.5152 10.784 52.7019 10.352 52.7019 9.776C52.7019 9.2 52.5152 8.7627 52.1419 8.464C51.7792 8.1653 51.2725 8.016 50.6219 8.016H48.4139V11.504H50.6219ZM55.8681 12.832H59.948V14.208H55.8681V12.832ZM66.488 18.16C65.88 18.16 65.325 18.0267 64.824 17.76C64.323 17.4827 63.939 17.152 63.672 16.768V18H62.296V6H63.672V11.232C63.939 10.848 64.323 10.5227 64.824 10.256C65.325 9.9787 65.88 9.84 66.488 9.84C67.043 9.84 67.56 9.952 68.04 10.176C68.52 10.3893 68.936 10.688 69.288 11.072C69.64 11.4453 69.912 11.8827 70.104 12.384C70.307 12.8853 70.408 13.424 70.408 14C70.408 14.576 70.307 15.1147 70.104 15.616C69.912 16.1173 69.64 16.56 69.288 16.944C68.936 17.3173 68.52 17.616 68.04 17.84C67.56 18.0533 67.043 18.16 66.488 18.16ZM66.28 16.896C66.685 16.896 67.053 16.8213 67.384 16.672C67.715 16.5227 67.997 16.32 68.232 16.064C68.477 15.7973 68.664 15.488 68.792 15.136C68.931 14.784 69 14.4053 69 14C69 13.5947 68.931 13.216 68.792 12.864C68.664 12.512 68.477 12.208 68.232 11.952C67.997 11.6853 67.715 11.4773 67.384 11.328C67.053 11.1787 66.685 11.104 66.28 11.104C65.875 11.104 65.507 11.1787 65.176 11.328C64.845 11.4773 64.557 11.6853 64.312 11.952C64.077 12.208 63.891 12.512 63.752 12.864C63.624 13.216 63.56 13.5947 63.56 14C63.56 14.4053 63.624 14.784 63.752 15.136C63.891 15.488 64.077 15.7973 64.312 16.064C64.557 16.32 64.845 16.5227 65.176 16.672C65.507 16.8213 65.875 16.896 66.28 16.896ZM75.67 18.16C75.105 18.16 74.582 18.0533 74.102 17.84C73.633 17.616 73.222 17.3173 72.87 16.944C72.518 16.56 72.241 16.1173 72.038 15.616C71.846 15.1147 71.75 14.576 71.75 14C71.75 13.424 71.846 12.8853 72.038 12.384C72.241 11.8827 72.518 11.4453 72.87 11.072C73.222 10.688 73.633 10.3893 74.102 10.176C74.582 9.952 75.105 9.84 75.67 9.84C76.278 9.84 76.833 9.9787 77.334 10.256C77.835 10.5227 78.219 10.848 78.486 11.232V10H79.862V18H78.486V16.768C78.219 17.152 77.835 17.4827 77.334 17.76C76.833 18.0267 76.278 18.16 75.67 18.16ZM75.878 16.896C76.283 16.896 76.651 16.8213 76.982 16.672C77.313 16.5227 77.595 16.32 77.83 16.064C78.075 15.7973 78.262 15.488 78.39 15.136C78.529 14.784 78.598 14.4053 78.598 14C78.598 13.5947 78.529 13.216 78.39 12.864C78.262 12.512 78.075 12.208 77.83 11.952C77.595 11.6853 77.313 11.4773 76.982 11.328C76.651 11.1787 76.283 11.104 75.878 11.104C75.473 11.104 75.099 11.1787 74.758 11.328C74.427 11.4773 74.139 11.6853 73.894 11.952C73.659 12.208 73.473 12.512 73.334 12.864C73.206 13.216 73.142 13.5947 73.142 14C73.142 14.4053 73.206 14.784 73.334 15.136C73.473 15.488 73.659 15.7973 73.894 16.064C74.139 16.32 74.427 16.5227 74.758 16.672C75.099 16.8213 75.473 16.896 75.878 16.896ZM85.028 18.16C84.602 18.16 84.196 18.1067 83.812 18C83.428 17.8933 83.092 17.7387 82.804 17.536C82.516 17.3227 82.282 17.0613 82.1 16.752C81.919 16.4427 81.812 16.0853 81.78 15.68H83.188C83.231 15.9253 83.311 16.1333 83.428 16.304C83.556 16.464 83.706 16.5973 83.876 16.704C84.047 16.8107 84.228 16.8853 84.42 16.928C84.623 16.9707 84.831 16.992 85.044 16.992C85.482 16.992 85.844 16.9067 86.132 16.736C86.431 16.5547 86.58 16.288 86.58 15.936C86.58 15.616 86.479 15.3547 86.276 15.152C86.074 14.9493 85.732 14.784 85.252 14.656L84.1 14.352C83.407 14.1707 82.89 13.8773 82.548 13.472C82.207 13.0667 82.036 12.576 82.036 12C82.036 11.6693 82.106 11.3707 82.244 11.104C82.383 10.8373 82.575 10.6133 82.82 10.432C83.066 10.24 83.354 10.096 83.684 10C84.026 9.8933 84.399 9.84 84.804 9.84C85.231 9.84 85.615 9.8987 85.956 10.016C86.298 10.1333 86.591 10.2987 86.836 10.512C87.092 10.7147 87.295 10.9547 87.444 11.232C87.594 11.5093 87.684 11.808 87.716 12.128H86.34C86.234 11.776 86.042 11.4987 85.764 11.296C85.498 11.0933 85.178 10.992 84.804 10.992C84.42 10.992 84.095 11.0827 83.828 11.264C83.562 11.4347 83.428 11.6747 83.428 11.984C83.428 12.2827 83.524 12.5227 83.716 12.704C83.908 12.8747 84.218 13.0187 84.644 13.136L85.924 13.472C86.596 13.6427 87.103 13.9307 87.444 14.336C87.796 14.7307 87.972 15.232 87.972 15.84C87.972 16.2347 87.898 16.5813 87.748 16.88C87.599 17.168 87.391 17.408 87.124 17.6C86.858 17.792 86.543 17.9307 86.18 18.016C85.828 18.112 85.444 18.16 85.028 18.16ZM93.329 18.16C92.742 18.16 92.204 18.0587 91.713 17.856C91.222 17.6427 90.796 17.3493 90.433 16.976C90.081 16.6027 89.804 16.1653 89.601 15.664C89.398 15.152 89.297 14.5973 89.297 14C89.297 13.4133 89.388 12.8693 89.569 12.368C89.761 11.856 90.033 11.4133 90.385 11.04C90.737 10.6667 91.164 10.3733 91.665 10.16C92.166 9.9467 92.732 9.84 93.361 9.84C93.99 9.84 94.55 9.9627 95.041 10.208C95.542 10.4427 95.958 10.768 96.289 11.184C96.63 11.5893 96.876 12.0693 97.025 12.624C97.185 13.168 97.244 13.7493 97.201 14.368H90.689C90.7 14.7307 90.774 15.0667 90.913 15.376C91.062 15.6853 91.254 15.9573 91.489 16.192C91.724 16.416 92.001 16.592 92.321 16.72C92.641 16.848 92.982 16.912 93.345 16.912C93.846 16.912 94.294 16.8107 94.689 16.608C95.094 16.3947 95.42 16.048 95.665 15.568H97.073C96.977 15.92 96.822 16.256 96.609 16.576C96.396 16.8853 96.129 17.1573 95.809 17.392C95.5 17.6267 95.137 17.8133 94.721 17.952C94.305 18.0907 93.841 18.16 93.329 18.16ZM93.313 11.056C93.025 11.056 92.742 11.0987 92.465 11.184C92.188 11.2693 91.932 11.4027 91.697 11.584C91.473 11.7653 91.276 11.9947 91.105 12.272C90.934 12.5493 90.817 12.8853 90.753 13.28H95.745C95.617 12.5333 95.329 11.9787 94.881 11.616C94.433 11.2427 93.91 11.056 93.313 11.056ZM102.483 18.16C101.917 18.16 101.395 18.0533 100.915 17.84C100.445 17.616 100.035 17.3173 99.683 16.944C99.331 16.56 99.053 16.1173 98.851 15.616C98.659 15.1147 98.563 14.576 98.563 14C98.563 13.424 98.659 12.8853 98.851 12.384C99.053 11.8827 99.331 11.4453 99.683 11.072C100.035 10.688 100.445 10.3893 100.915 10.176C101.395 9.952 101.917 9.84 102.483 9.84C103.091 9.84 103.645 9.9787 104.147 10.256C104.648 10.5227 105.032 10.848 105.299 11.232V6H106.675V18H105.299V16.768C105.032 17.152 104.648 17.4827 104.147 17.76C103.645 18.0267 103.091 18.16 102.483 18.16ZM102.691 16.896C103.096 16.896 103.464 16.8213 103.795 16.672C104.125 16.5227 104.408 16.32 104.643 16.064C104.888 15.7973 105.075 15.488 105.203 15.136C105.341 14.784 105.411 14.4053 105.411 14C105.411 13.5947 105.341 13.216 105.203 12.864C105.075 12.512 104.888 12.208 104.643 11.952C104.408 11.6853 104.125 11.4773 103.795 11.328C103.464 11.1787 103.096 11.104 102.691 11.104C102.285 11.104 101.912 11.1787 101.571 11.328C101.24 11.4773 100.952 11.6853 100.707 11.952C100.472 12.208 100.285 12.512 100.147 12.864C100.019 13.216 99.955 13.5947 99.955 14C99.955 14.4053 100.019 14.784 100.147 15.136C100.285 15.488 100.472 15.7973 100.707 16.064C100.952 16.32 101.24 16.5227 101.571 16.672C101.912 16.8213 102.285 16.896 102.691 16.896Z",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5806,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", className: t, ariaLabel: a }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, viewBox: "0 0 1813 480", xmlns: "http://www.w3.org/2000/svg", className: t, "aria-label": a },
                                    r.default.createElement("path", {
                                        d: "M431.4 479.4H40.3C18.3 479.4 0.5 461.6 0.5 439.6V40.5C0.5 18.5 18.3 0.699997 40.3 0.699997H431.5C453.5 0.699997 471.3 18.5 471.3 40.5V439.6C471.3 461.5 453.5 479.4 431.4 479.4Z",
                                        fill: "url(#paint0_linear_9_13)",
                                    }),
                                    r.default.createElement("path", { d: "M471.3 290.6V439.5C471.3 461.5 453.5 479.3 431.5 479.3H282.6L471.3 290.6Z", fill: "#2970E2" }),
                                    r.default.createElement("path", {
                                        d:
                                            "M158.4 288.7L297.3 144.3C307.9 133.7 324.5 134.5 335.6 145.5L415.9 222.9C424.4 231.1 424.2 247.3 416.3 256C406 266.3 394.4 267 378.8 256.4L320.6 193.4L174.3 332.5C164.5 340.1 154.5 346.5 139.1 336.6C133.8 329.5 144.3 315.6 140.2 311.5L158.4 288.7Z",
                                        fill: "#D1D9E6",
                                    }),
                                    r.default.createElement("path", {
                                        d: "M152.1 337.2C140.2 336.8 130.9 329.1 130.9 319.9L131.6 154.8C131.6 145.7 140.1 134.6 152 134.2C167.8 134.2 174.7 147 174.7 156.5V320.3C174.8 329.8 164.5 337.5 152.1 337.2Z",
                                        fill: "#D1D9E6",
                                    }),
                                    r.default.createElement("path", {
                                        d: "M314.1 341.7C299.4 341.7 293.2 330.8 293.2 322.2V170.8C293.2 162.3 302.3 151.9 314.1 151.5C326.4 151.1 336.6 161.5 336.6 170.4V320.1C336.6 330.7 329.3 341.7 314.1 341.7Z",
                                        fill: "#D1D9E6",
                                    }),
                                    r.default.createElement("path", {
                                        d: "M147.1 339C138 338.6 130.9 330.9 130.9 321.7V156.6C130.9 147.5 138 136.4 147.1 136C156.6 135.6 164.6 146.6 164.6 156.2V322.2C164.6 331.7 156.7 339.4 147.1 339Z",
                                        fill: "white",
                                    }),
                                    r.default.createElement("path", {
                                        d: "M309.5 340.7C300.2 340.7 292.6 329.9 292.6 320.5V157.9C292.6 148.6 300.2 141 309.5 141C318.8 141 326.4 148.6 326.4 157.9V320.6C326.3 329.8 318.8 340.7 309.5 340.7Z",
                                        fill: "white",
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M147.8 337.4C142.3 337.4 136.8 335.3 132.7 331.1L56.2 254.4C47.9 246 47.9 232.5 56.3 224.1C64.7 215.8 78.2 215.8 86.6 224.2L148.2 286.2L295.6 145.9C303.9 138 316.9 138 325.2 146L405.4 223.4C413.9 231.6 414.1 245.1 406 253.7C397.9 262.2 384.3 262.4 375.7 254.3L310.2 191.2L162.5 331.5C158.4 335.4 153.1 337.4 147.8 337.4Z",
                                        fill: "white",
                                    }),
                                    r.default.createElement("path", { d: "M294.7 217.8L285.4 226.6C285.4 226.6 288 211.9 280.5 219C272.9 226.2 292.1 200.8 292.1 200.8L296 205.7L294.7 217.8Z", fill: "white" }),
                                    r.default.createElement("path", { d: "M326.3 215.6C326.3 215.6 326.8 206.6 336.6 222V209.9L326 204.4L326.3 215.6Z", fill: "white" }),
                                    r.default.createElement("path", { d: "M164.7 258.2C164.7 258.2 166.1 268.2 174.9 255.3V267.4L164.3 272.9L164.7 258.2Z", fill: "white" }),
                                    r.default.createElement("path", {
                                        d:
                                            "M674.3 176.3L676.4 177C676.7 182.7 676.9 193.4 676.9 209.1C676.9 210.1 675.4 210.5 672.4 210.5H651.7C649.8 210.5 648.8 212 648.8 215V337.8C648.8 338 648.4 338.3 647.6 338.9C646.8 339.5 646.3 339.7 645.9 339.7H608.5L606.8 338.3C606.3 337.8 606.1 300.5 606.1 226.4V211.6C586.9 211.6 577.3 210.4 577.3 208V177.5C577.3 177.3 577.9 176.9 579.2 176.1H622C624.2 176.4 625.6 176.7 626 176.8C626.5 176.8 626.7 176.6 626.7 176.1H674.3V176.3ZM733.1 175.9H799C814.1 175.9 827.4 181.4 838.9 192.4C850.4 203.4 856.2 216.6 856.2 231.8C856.2 243.7 852.8 254 846.1 262.7C839.4 271.4 830.3 278.2 818.8 282.9C818.3 282.9 818.1 283.3 818.1 284.1V284.3C818.3 284.5 818.3 284.6 818.3 284.8L859 334.5C859.5 335.3 860 336.2 860.4 337.1C860.8 338 861.2 338.7 861.5 339.1C861.7 339.5 861.9 339.8 861.9 339.9C861.9 340.4 859.3 340.8 854 341.2C848.8 341.6 845.3 341.8 843.5 341.8C842.2 341.8 841.4 341.6 840.9 341.1H815.4C813.8 340.9 812.5 340.1 811.4 338.5L778.3 299.5C778.1 299.3 777.8 298.9 777.3 298.3C776.8 297.7 776.3 297.2 775.9 296.9C775.4 296.6 774.9 296.4 774.5 296.4C774.2 296.4 773.8 297.4 773.3 299.5V338.1C773.3 339.4 772.8 340 771.9 340H739.5C736.6 340 734.7 339.4 733.8 338.1C732.8 336.8 732.2 334.7 731.9 331.7C731.9 317.6 732 299.7 732.3 278C732.5 256.3 732.7 240 732.7 229.1C732.7 227.4 732.6 221 732.5 210.1L732 193.7C732.4 182.1 732.8 176.2 733.1 175.9ZM813.3 231.3C813.3 226.9 812.3 223 810.2 219.6C806.2 213.4 798 210.3 785.4 210.3C783.2 210.3 779.8 210.5 775.4 210.8L773.3 213.2C773.3 215.3 773.2 218.5 773.1 222.8C772.9 227.2 772.8 230.9 772.7 233.9C772.6 236.9 772.6 239.1 772.6 240.3C772.6 250.9 773.6 256.9 775.5 258.2H778.1C791.3 257.9 800.4 256.1 805.6 252.7C810.8 249.4 813.3 242.3 813.3 231.3ZM967.8 174H996.1C996.9 174 999.2 178.4 1002.9 187.1C1006.6 195.8 1008.5 200.7 1008.5 201.6C1011.8 210.3 1029.8 254.7 1062.5 334.6C1062.5 336.8 1061.5 338.2 1059.6 338.8C1057.7 339.4 1054.2 339.6 1049.1 339.6L1037 339.4C1028.9 339.2 1022.8 339.2 1018.7 339.2C1018.4 338.2 1017.7 336.6 1016.8 334.2C1015.8 331.8 1015.1 330 1014.5 328.7C1013.9 327.4 1013.1 325.8 1012 323.9C1010.9 322 1009.7 320.3 1008.4 318.7C1007.3 318.7 1005.1 318.5 1001.7 318.1C998.4 317.7 995.4 317.5 992.7 317.5L962.9 318C962.4 318 961 317.9 958.6 317.8C956.2 317.6 954.9 317.6 954.8 317.6C951.9 317.6 949.5 321.3 947.4 328.8C945.3 336.3 943.6 340.5 942.2 341.4C937.9 341.6 932.6 341.4 926.4 341C920.1 340.6 914.9 340.4 910.6 340.4C903.9 340.4 900.6 339.4 900.6 337.5C900.6 337.2 900.6 336.8 900.7 336.3C900.8 335.8 900.8 335.5 900.8 335.3L914.6 295.3C916.7 291.2 919.2 285 922.1 276.7C925 268.5 926.9 263.4 927.7 261.5C930.9 253.3 936.3 239.5 944 220.3C951.7 201.1 957.5 186.3 961.5 175.8C961.8 174.6 963.8 174 967.8 174ZM970.2 285.1H976.4C987.8 284.8 993.5 284.1 993.5 283.2C993.5 280.3 991 273.1 986.1 261.5C984.2 256.9 983.1 254.4 982.8 253.9L979.7 246.5C978.9 246.5 976.2 252 971.7 262.9C967.2 273.8 964.9 280.3 964.9 282.2C964.9 284.1 966.7 285.1 970.2 285.1ZM1253.2 265.3C1253.2 265.6 1253.1 266.3 1253 267.4C1252.8 268.5 1252.7 269.6 1252.5 270.7L1252.3 272.1C1252.3 278.9 1252.5 289.2 1252.8 302.8C1253.1 316.4 1253.3 326.6 1253.3 333.3C1253.3 337.9 1252.3 340.2 1250.4 340.2H1219.5C1217 340.2 1215.1 339.3 1214 337.6L1184.7 293.8C1184.5 293.2 1183.8 292.1 1182.6 290.7C1181.3 289.3 1180.7 288.5 1180.7 288.3L1156.7 253.6L1153.8 250.5L1153.3 251.5C1153.3 310.4 1152.6 339.8 1151.2 339.8H1113.6L1112.2 339.1C1112.2 326.9 1112.4 305.9 1112.7 276.1C1113 246.3 1113.2 224.3 1113.2 209.8C1113.2 198.9 1113 190.6 1112.7 185L1113.7 178.1L1118.5 177.1L1148.5 178.1C1149.3 178.1 1150.2 178.9 1151.4 180.5C1152.5 182.1 1153.2 183.4 1153.5 184.3L1175.9 216.7C1176.2 217.3 1176.8 218.2 1177.7 219.4C1178.6 220.6 1179.2 221.5 1179.5 222.1L1210.2 264.2C1210.7 265.3 1211.3 265.9 1212.1 265.9C1212.6 265.9 1212.8 265.7 1212.8 265.2V179.3L1214.2 178.1C1214.4 177.9 1217.8 177.9 1224.4 177.9C1243.1 177.9 1252.5 178.2 1252.5 178.9L1253.5 180.3V265.3H1253.2ZM1378.3 287.5C1375.9 285.1 1372.9 282.7 1369.1 280.2C1365.4 277.7 1361.1 275.1 1356.2 272.3C1351.4 269.5 1348.4 267.7 1347.3 266.9C1326.8 253.9 1316.6 238.2 1316.6 219.8C1316.6 204.4 1322 192.9 1332.8 185.3C1343.6 177.7 1357.6 173.9 1374.7 173.9C1384.1 173.9 1393.5 175.8 1403 179.6C1404.7 180.2 1407.6 181.5 1411.4 183.4C1415.3 185.3 1417.2 186.7 1417.2 187.4L1417 188.6C1417 188.8 1416.8 189 1416.5 189.4C1416.2 189.8 1416 190.2 1416 190.5C1411.1 200.7 1406.3 208.9 1401.7 215.3C1401.5 215.8 1401.1 216 1400.5 216C1399.9 216 1396.2 214.7 1389.6 212.1C1382.9 209.5 1377.8 208.2 1374.1 208.2C1370.6 208.2 1367.4 209.2 1364.3 211.1C1361.3 213 1359.8 215.6 1359.8 219C1359.8 223.3 1362.2 227.3 1366.9 231.1C1370.1 233.5 1376.4 237.7 1385.9 243.7C1388 245.1 1390.7 247 1394 249.3C1397.3 251.6 1399.9 253.4 1401.9 254.8C1403.8 256.1 1405.9 257.8 1408.3 259.8C1410.7 261.8 1412.7 263.7 1414.2 265.6C1418 270.5 1420.6 275 1421.9 278.9C1423.2 282.9 1423.9 287.7 1423.9 293.4C1423.9 308.3 1418.3 320.6 1407 330.2C1395.7 339.8 1382.3 344.6 1366.8 344.6C1349.8 344.6 1333.9 340.5 1319 332.2C1312.3 328.1 1309 325.6 1309 324.8V323.8C1316 311.1 1321.8 301.3 1326.4 294.3C1328.6 294.3 1331.2 295.4 1334.1 297.6C1337 299.8 1338.7 301 1339.2 301.2C1347.6 305.5 1357.2 307.6 1368 307.6C1377.4 307.6 1382 304.1 1382 297.1C1382.4 294.2 1381 291 1378.3 287.5ZM1536.1 174H1564.4C1565.2 174 1567.5 178.4 1571.2 187.1C1574.9 195.8 1576.8 200.7 1576.8 201.6C1580.1 210.3 1598.1 254.7 1630.8 334.6C1630.8 336.8 1629.8 338.2 1627.9 338.8C1626 339.4 1622.5 339.6 1617.4 339.6L1605.3 339.4C1597.2 339.2 1591.1 339.2 1587 339.2C1586.7 338.2 1586 336.6 1585.1 334.2C1584.1 331.8 1583.4 330 1582.8 328.7C1582.2 327.4 1581.4 325.8 1580.3 323.9C1579.2 322 1578 320.3 1576.7 318.7C1575.6 318.7 1573.4 318.5 1570 318.1C1566.7 317.7 1563.7 317.5 1561 317.5L1531.2 318C1530.7 318 1529.3 317.9 1526.9 317.8C1524.5 317.6 1523.2 317.6 1523.1 317.6C1520.2 317.6 1517.8 321.3 1515.7 328.8C1513.6 336.3 1511.9 340.5 1510.5 341.4C1506.2 341.6 1500.9 341.4 1494.7 341C1488.4 340.6 1483.2 340.4 1478.9 340.4C1472.2 340.4 1468.9 339.4 1468.9 337.5C1468.9 337.2 1468.9 336.8 1469 336.3C1469.1 335.8 1469.1 335.5 1469.1 335.3L1482.9 295.3C1485 291.2 1487.5 285 1490.4 276.7C1493.3 268.5 1495.2 263.4 1496 261.5C1499.2 253.3 1504.6 239.5 1512.3 220.3C1520 201.1 1525.8 186.3 1529.8 175.8C1530.1 174.6 1532.2 174 1536.1 174ZM1538.5 285.1H1544.7C1556.1 284.8 1561.8 284.1 1561.8 283.2C1561.8 280.3 1559.3 273.1 1554.4 261.5C1552.5 256.9 1551.4 254.4 1551.1 253.9L1548 246.5C1547.2 246.5 1544.5 252 1540 262.9C1535.5 273.8 1533.2 280.3 1533.2 282.2C1533.3 284.1 1535 285.1 1538.5 285.1ZM1716.1 173C1721 173 1723.5 173.9 1723.5 175.6V224.2C1723.5 225.8 1723.7 226.6 1724 226.6C1725.1 226.6 1726.5 225.6 1728.2 223.5C1729.9 221.4 1731.6 219.1 1733.3 216.5C1735 213.9 1736.4 212.2 1737.3 211.4L1764 175.2C1764.8 174.2 1765.9 173.8 1767.3 173.8H1802.5L1808.2 174.8C1808.5 174.8 1808.7 175.1 1808.7 175.8C1808.7 176.9 1808.5 177.6 1808.2 177.9L1798 194.1L1796.6 195.1L1766.1 235.8C1765.6 236.3 1765.4 236.9 1765.4 237.7C1765.4 238.8 1765.6 239.8 1766.1 240.6L1812.3 336C1812.3 336.2 1812.3 336.4 1812.3 336.7L1812.5 337.4C1812.5 340.1 1807.7 341.4 1798.2 341.4C1792.6 341.4 1786.2 341.2 1778.8 340.7C1771.4 340.2 1767.3 340 1766.5 340L1764.8 338.8C1763.8 337.8 1755 319.5 1738.1 283.8C1737.9 282.5 1736.8 280 1734.8 276.2C1734.3 276.2 1732.5 278.4 1729.2 282.9C1725.9 287.3 1724.2 290 1723.8 290.8C1723.8 293.7 1723.8 298.3 1723.9 304.6C1724 310.9 1724 316.9 1724 322.4C1724 333.7 1722.7 339.5 1720.2 340C1717 340 1713.1 340.1 1708.3 340.4C1703.5 340.6 1700.3 340.8 1698.5 340.8C1695.8 340.8 1692.2 340.5 1687.6 339.8C1683 339.2 1680.7 338.6 1680.7 338.1V256.2C1681.7 248.6 1682.1 244.2 1682.1 243.1C1682.1 236 1681.8 225.3 1681.1 211C1680.5 196.7 1680.1 186.1 1680.1 179.1C1680.1 176.2 1680.7 174.5 1682 173.9C1690.4 173.2 1701.6 173 1716.1 173Z",
                                        fill: "url(#paint1_linear_9_13)",
                                    }),
                                    r.default.createElement(
                                        "defs",
                                        null,
                                        r.default.createElement(
                                            "linearGradient",
                                            { id: "paint0_linear_9_13", x1: "-15.068", y1: "44.9459", x2: "489.022", y2: "436.843", gradientUnits: "userSpaceOnUse" },
                                            r.default.createElement("stop", { offset: "0.1304", stopColor: "#3495F7" }),
                                            r.default.createElement("stop", { offset: "0.3063", stopColor: "#2B87F2" }),
                                            r.default.createElement("stop", { offset: "0.6392", stopColor: "#1461E5" }),
                                            r.default.createElement("stop", { offset: "0.7232", stopColor: "#0E57E1" })
                                        ),
                                        r.default.createElement(
                                            "linearGradient",
                                            { id: "paint1_linear_9_13", x1: "577.482", y1: "258.803", x2: "1812.46", y2: "258.803", gradientUnits: "userSpaceOnUse" },
                                            r.default.createElement("stop", { stopColor: "#3495F7" }),
                                            r.default.createElement("stop", { offset: "0.4939", stopColor: "#1461E5" }),
                                            r.default.createElement("stop", { offset: "1", stopColor: "#0E57E1" })
                                        )
                                    )
                                );
                            s.propTypes = { width: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5807,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)", className: a, ariaLabel: n }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, fill: t, className: a, "aria-label": n, viewBox: "0 0 2568 723", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M249 0C149.9 0 69.7 80.2 69.7 179.3V246.5C34.9 252.8 0 261.2 0 272.1V622.8C0 622.8 0 632.5 10.9 637.1C50.4 653.1 205.8 708.1 241.5 720.7C246.1 722.4 247.4 722.4 248.6 722.4C250.3 722.4 251.1 722.4 255.7 720.7C291.4 708.1 447.2 653.1 486.7 637.1C496.8 632.9 497.2 623.2 497.2 623.2V272.1C497.2 261.2 462.8 252.4 427.9 246.5V179.3C428.4 80.2 347.7 0 249 0ZM249 85.7C307.4 85.7 342.7 121 342.7 179.4V237.8C277.2 233.2 221.3 233.2 155.4 237.8V179.4C155.4 120.9 190.7 85.7 249 85.7V85.7ZM248.6 323.8C330.1 323.8 398.5 330.1 398.5 341.4V560.2C398.5 563.6 398.1 564 395.1 565.2C392.2 566.5 256.1 615.6 256.1 615.6C256.1 615.6 250.6 617.3 249 617.3C247.3 617.3 241.9 615.2 241.9 615.2C241.9 615.2 105.8 566.1 102.9 564.8C100 563.5 99.5 563.1 99.5 559.8V341C98.7 329.7 167.1 323.8 248.6 323.8V323.8ZM728.466 563.183V323.577H640.919V237.655H913.881V323.577H827.195V563.183H728.466ZM1135.04 563.183L1090.12 460.823H1054.38V563.183H955.647V237.655H1129.4C1205.67 237.655 1246.58 288.215 1246.58 349.191C1246.58 405.389 1214.08 435.113 1187.99 447.92L1246.96 563.088H1135.04V563.183ZM1146.7 349.191C1146.7 331.51 1131.03 323.864 1114.59 323.864H1054.38V375.283H1114.59C1131.03 374.901 1146.7 367.255 1146.7 349.191ZM1298.38 563.183V237.655H1545.25V323.577H1396.73V355.69H1541.62V441.612H1396.73V477.357H1545.25V563.183H1298.38ZM1596.57 563.566V485.29L1720.63 323.96H1596.57V238.037H1850.61V315.549L1726.17 477.739H1854.24V563.661L1596.57 563.566ZM1878.33 400.993C1878.33 301.021 1955.84 232.398 2056.58 232.398C2156.93 232.398 2234.82 300.639 2234.82 400.993C2234.82 500.964 2157.31 569.205 2056.58 569.205C1955.84 569.205 1878.33 500.965 1878.33 400.993V400.993ZM2134.47 400.993C2134.47 355.595 2103.6 319.467 2056.19 319.467C2008.79 319.467 1977.92 355.595 1977.92 400.993C1977.92 446.391 2008.79 482.518 2056.19 482.518C2103.98 482.518 2134.47 446.391 2134.47 400.993H2134.47ZM2455.51 563.566L2410.59 461.205H2374.84V563.565H2276.11V238.038H2449.87C2526.14 238.038 2567.04 288.598 2567.04 349.574C2567.04 405.772 2534.55 435.496 2508.46 448.304L2567.43 563.471H2455.51V563.566ZM2467.55 349.191C2467.55 331.51 2451.87 323.864 2435.44 323.864H2375.22V375.283H2435.44C2451.97 374.901 2467.55 367.255 2467.55 349.191Z",
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string, className: n.default.string, ariaLabel: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5808,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ width: e = "100%", color: t = "var(--color-text-default)" }) =>
                                r.default.createElement(
                                    "svg",
                                    { width: e, viewBox: "0 0 261 61", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    r.default.createElement("path", {
                                        d:
                                            "M126.836 10.6396L122.859 29.3287C122.696 30.0922 122.614 30.8707 122.614 31.6514V40.6187H118.34V32.1939C118.34 31.1775 118.2 30.1659 117.924 29.1875L112.714 10.6396H102.145L96.9868 29.0463C96.7113 30.0247 96.5712 31.0363 96.5706 32.0527V40.6001H92.2969V31.8223C92.2964 31.0419 92.2155 30.2635 92.0554 29.4997L88.0342 10.6396H77.3464V11.7545L87.2391 50.032H99.4284L104.739 31.1497C105.014 30.1662 105.155 29.1497 105.155 28.1284V20.1644H109.429V28.1061C109.428 29.1251 109.568 30.1394 109.845 31.1199L115.155 50.032H127.315L137.241 11.7545V10.6396H126.836Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M260.142 28.8865C260.142 16.7752 252.917 9.73291 240.914 9.73291C230.88 9.73291 223.611 14.408 221.385 23.7692C221.277 24.2073 221.271 24.6642 221.366 25.1053C221.461 25.5464 221.655 25.96 221.933 26.3149C222.212 26.6698 222.568 26.9566 222.974 27.1536C223.38 27.3506 223.825 27.4527 224.276 27.452H229.137V31.7257H223.983C223.551 31.7254 223.125 31.819 222.733 32C222.341 32.181 221.994 32.4451 221.714 32.774C221.435 33.1028 221.23 33.4886 221.115 33.9044C221 34.3202 220.976 34.7561 221.047 35.1819C222.782 45.6803 230.337 50.9351 241.021 50.9351C253.255 50.9351 258.146 43.9374 259.387 38.5228V37.4079H249.755C249.156 39.816 246.745 42.789 240.836 42.789C234.849 42.789 231.385 38.7272 231.24 33.3832H260.138L260.142 28.8865ZM231.352 25.8429C231.805 21.5097 234.89 17.786 240.758 17.786C246.819 17.786 249.718 21.3982 249.792 25.8429H231.352Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M212.172 10.4834C207.293 10.4834 203.87 15.203 202.138 20.1828H197.53C197.53 20.1828 201.51 15.2105 201.904 10.6395H191.164V50.0318H202.228V29.4884C202.228 22.5278 205.234 19.5176 211.332 19.5176H216.977V10.4834H212.172Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M173.761 10.6396L166.488 31.0791C166.06 32.2803 165.842 33.5461 165.842 34.8213V40.6261H161.568V34.8176C161.568 33.5512 161.35 32.2942 160.925 31.1014L153.671 10.6619H142.151V11.7768L156.153 46.364L160.316 46.4049L158.424 51.4702L146.16 51.4367V60.876H157.989C160.087 60.8757 162.137 60.2515 163.878 59.0829C165.62 57.9142 166.975 56.2539 167.77 54.3131L185.014 11.7545V10.6396H173.761Z",
                                        fill: t,
                                    }),
                                    r.default.createElement("path", {
                                        d:
                                            "M51.4405 30.2466L54.681 22.4759V14.4897H43.7478L46.442 8.0011V0H16.1769L6.10352e-05 39.0988V46.5313H11.1078L8.23898 53.4361V60.5862L34.2045 60.471H42.9711L61.5896 36.5828V30.2652L51.4405 30.2466ZM51.8938 21.9185L48.4228 30.2466H33.595L15.5191 53.4955H11.2343L26.2813 17.2769H51.8976L51.8938 21.9185ZM18.0424 2.78719H43.6548V7.44739L40.7301 14.4897L24.4306 14.5083L7.2542 39.1619H2.99158L18.0424 2.78719Z",
                                        fill: t,
                                    })
                                );
                            s.propTypes = { width: n.default.string, color: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5809,
            { "./mascot.component": 5810 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./mascot.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            581,
            {
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                "@material-ui/utils": 959,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = n(e("../styles/withStyles")),
                                c = (e("@material-ui/utils"), { root: { display: "block", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }, media: { width: "100%" }, img: { objectFit: "cover" } });
                            a.styles = c;
                            var d = ["video", "audio", "picture", "iframe", "img"],
                                f = i.forwardRef(function (e, t) {
                                    var a = e.children,
                                        r = e.classes,
                                        n = e.className,
                                        u = e.component,
                                        c = void 0 === u ? "div" : u,
                                        f = e.image,
                                        p = e.src,
                                        m = e.style,
                                        g = (0, s.default)(e, ["children", "classes", "className", "component", "image", "src", "style"]),
                                        h = -1 !== d.indexOf(c),
                                        v = !h && f ? (0, o.default)({ backgroundImage: 'url("'.concat(f, '")') }, m) : m;
                                    return i.createElement(c, (0, o.default)({ className: (0, l.default)(r.root, n, h && r.media, -1 !== "picture img".indexOf(c) && r.img), ref: t, style: v, src: h ? f || p : undefined }, g), a);
                                }),
                                p = (0, u.default)(c, { name: "MuiCardMedia" })(f);
                            a.default = p;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5810,
            { "../../../helpers/utils/build-types": 5917, "@metamask/logo": 1166, lodash: 4694, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = u(e("prop-types")),
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = u(e("@metamask/logo")),
                                s = e("lodash"),
                                i = e("../../../helpers/utils/build-types");
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class d extends n.Component {
                                constructor(e) {
                                    super(e);
                                    const { width: t, height: a, followMouse: r } = e;
                                    (this.logo = (0, o.default)({ followMouse: r, pxNotRatio: !0, width: t, height: a, meshJson: (0, i.getBuildSpecificAsset)("foxMeshJson") })),
                                        (this.mascotContainer = (0, n.createRef)()),
                                        (this.refollowMouse = (0, s.debounce)(this.logo.setFollowMouse.bind(this.logo, !0), 1e3)),
                                        (this.unfollowMouse = this.logo.setFollowMouse.bind(this.logo, !1));
                                }
                                handleAnimationEvents() {
                                    this.animations ||
                                        ((this.animations = this.props.animationEventEmitter), this.animations.on("point", this.lookAt.bind(this)), this.animations.on("setFollowMouse", this.logo.setFollowMouse.bind(this.logo)));
                                }
                                lookAt(e) {
                                    this.unfollowMouse(), this.logo.lookAt(e), this.refollowMouse();
                                }
                                componentDidMount() {
                                    this.mascotContainer.current.appendChild(this.logo.container),
                                        (this.directionTargetMap = (({ top: e, left: t, height: a, width: r }) => {
                                            const n = t + r / 2,
                                                o = e + a / 2;
                                            return { up: { x: n, y: e - a }, down: { x: n, y: e + 2 * a }, left: { x: t - r, y: o }, right: { x: t + 2 * r, y: o }, middle: { x: n, y: o } };
                                        })(this.mascotContainer.current.getBoundingClientRect()));
                                    const { lookAtTarget: e, lookAtDirection: t } = this.props;
                                    null != e && e.x && null != e && e.y ? this.logo.lookAtAndRender(e) : t && this.logo.lookAtAndRender(this.directionTargetMap[t]);
                                }
                                componentDidUpdate(e) {
                                    const { lookAtTarget: t = {}, lookAtDirection: a = null, followMouse: r } = e,
                                        { lookAtTarget: n = {}, followMouse: o, lookAtDirection: s } = this.props;
                                    s && a !== s
                                        ? this.logo.lookAtAndRender(this.directionTargetMap[s])
                                        : ((null == n ? void 0 : n.x) === (null == t ? void 0 : t.x) && (null == n ? void 0 : n.y) === (null == t ? void 0 : t.y)) || this.logo.lookAtAndRender(n),
                                        r !== o && (this.unfollowMouse(), o && this.refollowMouse());
                                }
                                componentWillUnmount() {
                                    (this.animations = this.props.animationEventEmitter), this.animations.removeAllListeners(), this.logo.container.remove(), this.logo.stopAnimation();
                                }
                                render() {
                                    return this.handleAnimationEvents(), n.default.createElement("div", { ref: this.mascotContainer, style: { zIndex: 0 } });
                                }
                            }
                            (a.default = d),
                                c(d, "propTypes", {
                                    animationEventEmitter: r.default.object.isRequired,
                                    width: r.default.string,
                                    height: r.default.string,
                                    followMouse: r.default.bool,
                                    lookAtTarget: r.default.object,
                                    lookAtDirection: r.default.oneOf(["up", "down", "left", "right", "middle"]),
                                }),
                                c(d, "defaultProps", { width: "200", height: "200", followMouse: !0, lookAtTarget: {}, lookAtDirection: null });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5811,
            { "./menu": 5813, "./menu-item": 5812 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "Menu", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                }),
                                Object.defineProperty(a, "MenuItem", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r = o(e("./menu")),
                                n = o(e("./menu-item"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5812,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = ({ children: e, className: t, "data-testid": a, iconClassName: n, onClick: s, subtitle: i }) =>
                                r.default.createElement(
                                    "button",
                                    { className: (0, o.default)("menu-item", t), "data-testid": a, onClick: s },
                                    n ? r.default.createElement("i", { className: (0, o.default)("menu-item__icon", n) }) : null,
                                    r.default.createElement("span", null, e),
                                    i
                                );
                            (i.propTypes = { children: n.default.node.isRequired, className: n.default.string, "data-testid": n.default.string, iconClassName: n.default.string, onClick: n.default.func, subtitle: n.default.node }),
                                (i.defaultProps = { className: undefined, "data-testid": undefined, iconClassName: undefined, onClick: undefined, subtitle: undefined });
                            var l = i;
                            a.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5813,
            { classnames: 1772, "prop-types": 4806, react: 4980, "react-dom": 4885, "react-popper": 4921 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = u(e("prop-types")),
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = e("react-dom"),
                                s = e("react-popper"),
                                i = u(e("classnames"));
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c() {
                                return (
                                    (c = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    c.apply(this, arguments)
                                );
                            }
                            const d = ({ anchorElement: e, children: t, className: a, onHide: r, popperOptions: l }) => {
                                const [u, d] = (0, n.useState)(null),
                                    f = (0, n.useRef)(document.getElementById("popover-content")),
                                    { attributes: p, styles: m } = (0, s.usePopper)(e, u, l);
                                return (0, o.createPortal)(
                                    n.default.createElement(
                                        n.default.Fragment,
                                        null,
                                        n.default.createElement("div", { className: "menu__background", onClick: r }),
                                        n.default.createElement("div", c({ className: (0, i.default)("menu__container", a), "data-testid": a, ref: d, style: m.popper }, p.popper), t)
                                    ),
                                    f.current
                                );
                            };
                            (d.propTypes = { anchorElement: r.default.instanceOf(window.Element), children: r.default.node.isRequired, className: r.default.string, onHide: r.default.func.isRequired, popperOptions: r.default.object }),
                                (d.defaultProps = { anchorElement: undefined, className: undefined, popperOptions: undefined });
                            var f = d;
                            a.default = f;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5814,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = i);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = "var(--color-text-default)";
                            function i({ className: e }) {
                                return r.default.createElement(
                                    "svg",
                                    { height: 30, viewBox: "0 0 1311 242", width: 162, xmlns: "http://www.w3.org/2000/svg", className: e },
                                    r.default.createElement(
                                        "g",
                                        { fill: "none" },
                                        r.default.createElement(
                                            "g",
                                            { fill: s, transform: "translate(361 61)" },
                                            r.default.createElement("path", {
                                                d:
                                                    "m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z",
                                            }),
                                            r.default.createElement("path", {
                                                d: "m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z",
                                            }),
                                            r.default.createElement("path", {
                                                d:
                                                    "m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z",
                                            })
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(1 1)" },
                                            r.default.createElement("path", { d: "m246.1.2-101.1 75 18.8-44.2z", fill: "#e17726", stroke: "#e17726" }),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#e27625", stroke: "#e27625", transform: "translate(2)" },
                                                r.default.createElement("path", { d: "m10.9.2 100.2 75.7-17.9-44.9z" }),
                                                r.default.createElement("path", { d: "m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z" }),
                                                r.default.createElement("path", { d: "m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z" }),
                                                r.default.createElement("path", { d: "m71 104.5-16 24.2 57 2.6-1.9-61.5z" }),
                                                r.default.createElement("path", { d: "m184 104.5-39.7-35.4-1.3 62.2 57-2.6z" }),
                                                r.default.createElement("path", { d: "m74.1 215.3 34.5-16.7-29.7-23.2z" }),
                                                r.default.createElement("path", { d: "m146.4 198.6 34.4 16.7-4.7-39.9z" })
                                            ),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#d5bfb2", stroke: "#d5bfb2", transform: "translate(76 198)" },
                                                r.default.createElement("path", { d: "m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z" }),
                                                r.default.createElement("path", { d: "m.1 17.3 32 15.2-.2-9.5 2.7-22.4z" })
                                            ),
                                            r.default.createElement("path", { d: "m108.7 160.6-28.6-8.4 20.2-9.3z", fill: "#233447", stroke: "#233447" }),
                                            r.default.createElement("path", { d: "m150.3 160.6 8.4-17.7 20.3 9.3z", fill: "#233447", stroke: "#233447" }),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#cc6228", stroke: "#cc6228", transform: "translate(49 128)" },
                                                r.default.createElement("path", { d: "m27.1 87.3 5-41.2-31.8.9z" }),
                                                r.default.createElement("path", { d: "m128.9 46.1 4.9 41.2 26.9-40.3z" }),
                                                r.default.createElement("path", { d: "m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z" }),
                                                r.default.createElement("path", { d: "m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z" })
                                            ),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#e27525", stroke: "#e27525", transform: "translate(57 128)" },
                                                r.default.createElement("path", { d: "m0 .7 23.9 46.7-.8-23.2z" }),
                                                r.default.createElement("path", { d: "m122 24.2-.9 23.2 23.9-46.7z" }),
                                                r.default.createElement("path", { d: "m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z" }),
                                                r.default.createElement("path", { d: "m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z" })
                                            ),
                                            r.default.createElement("path", { d: "m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z", fill: "#f5841f", stroke: "#f5841f" }),
                                            r.default.createElement("path", { d: "m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z", fill: "#f5841f", stroke: "#f5841f" }),
                                            r.default.createElement("path", { d: "m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
                                            r.default.createElement("path", { d: "m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z", fill: "#161616", stroke: "#161616" }),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#763e1a", stroke: "#763e1a" },
                                                r.default.createElement("path", { d: "m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z" }),
                                                r.default.createElement("path", { d: "m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z" })
                                            ),
                                            r.default.createElement(
                                                "g",
                                                { fill: "#f5841f", stroke: "#f5841f" },
                                                r.default.createElement("path", { d: "m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z" }),
                                                r.default.createElement("path", { d: "m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z" }),
                                                r.default.createElement("path", { d: "m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z" })
                                            )
                                        )
                                    )
                                );
                            }
                            i.propTypes = { className: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5815,
            { "./metafox-logo.component": 5816 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./metafox-logo.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5816,
            { "./horizontal-logo": 5814, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = i(e("./horizontal-logo"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u() {
                                return (
                                    (u = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    u.apply(this, arguments)
                                );
                            }
                            function c(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class d extends r.PureComponent {
                                render() {
                                    const { onClick: e, unsetIconHeight: t, isOnboarding: a } = this.props,
                                        n = t ? {} : { height: 42, width: 42 };
                                    return r.default.createElement(
                                        "div",
                                        {
                                            onClick: e,
                                            className: (0, o.default)({ "app-header__logo-container": !a, "onboarding-app-header__logo-container": a, "app-header__logo-container--clickable": Boolean(e) }),
                                            "data-testid": "app-header-logo",
                                        },
                                        r.default.createElement(s.default, { className: (0, o.default)({ "app-header__metafox-logo--horizontal": !a, "onboarding-app-header__metafox-logo--horizontal": a }) }),
                                        r.default.createElement(
                                            "img",
                                            u({}, n, { src: "./images/logo/metamask-fox.svg", className: (0, o.default)({ "app-header__metafox-logo--icon": !a, "onboarding-app-header__metafox-logo--icon": a }), alt: "" })
                                        )
                                    );
                                }
                            }
                            (a.default = d), c(d, "propTypes", { onClick: n.default.func, unsetIconHeight: n.default.bool, isOnboarding: n.default.bool }), c(d, "defaultProps", { onClick: undefined });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5817,
            {
                "../../../../shared/constants/network": 5333,
                "../../../../shared/constants/tokens": 5339,
                "../../../../shared/lib/fetch-with-cache": 5342,
                "../../../contexts/i18n": 5877,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/routes": 5904,
                "../../../selectors": 6300,
                "../../../store/actions": 6307,
                "../box": 5707,
                "../button": 5711,
                "../chip/chip": 5719,
                "../identicon": 5785,
                "../popover": 5828,
                "../typography": 5869,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = _(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = e("react-redux"),
                                o = e("react-router-dom"),
                                s = e("../../../contexts/i18n"),
                                i = y(e("../popover")),
                                l = y(e("../button")),
                                u = y(e("../identicon")),
                                c = y(e("../box")),
                                d = e("../../../helpers/constants/design-system"),
                                f = y(e("../typography")),
                                p = e("../../../../shared/constants/tokens"),
                                m = y(e("../../../../shared/lib/fetch-with-cache")),
                                g = e("../../../selectors"),
                                h = e("../../../helpers/constants/routes"),
                                v = y(e("../chip/chip")),
                                C = e("../../../store/actions"),
                                b = e("../../../../shared/constants/network");
                            function y(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (_ = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            var E = () => {
                                var e;
                                const t = (0, r.useContext)(s.I18nContext),
                                    a = (0, o.useHistory)(),
                                    [y, _] = (0, r.useState)(!1),
                                    [E, T] = (0, r.useState)(!0),
                                    w = (0, n.useSelector)(g.getUseTokenDetection),
                                    k = (0, n.useSelector)(g.getNativeCurrencyImage),
                                    O = (0, n.useSelector)(g.getProvider),
                                    P = () => {
                                        T(!1), (0, C.setFirstTimeUsedNetwork)(O.chainId);
                                    },
                                    M = async () => {
                                        const e = await (async () => !(await (0, m.default)(`${p.TOKEN_API_METASWAP_CODEFI_URL}${O.chainId}`)).error)();
                                        _(e);
                                    };
                                return (
                                    (0, r.useEffect)(() => {
                                        M();
                                    }),
                                    E
                                        ? r.default.createElement(
                                              i.default,
                                              { onClose: P, className: "new-network-info__wrapper", footer: r.default.createElement(l.default, { type: "primary", onClick: P }, t("recoveryPhraseReminderConfirm")) },
                                              r.default.createElement(f.default, { variant: d.TYPOGRAPHY.H4, color: d.COLORS.TEXT_DEFAULT, fontWeight: d.FONT_WEIGHT.BOLD, align: d.TEXT_ALIGN.CENTER }, t("switchedTo")),
                                              r.default.createElement(v.default, {
                                                  className: "new-network-info__token-box",
                                                  backgroundColor: d.COLORS.BACKGROUND_ALTERNATIVE,
                                                  maxContent: !1,
                                                  label: O.type === b.NETWORK_TYPES.RPC ? (null !== (e = O.nickname) && void 0 !== e ? e : t("privateNetwork")) : t(O.type),
                                                  labelProps: { color: d.COLORS.TEXT_DEFAULT },
                                                  leftIcon: k ? r.default.createElement(u.default, { image: k, diameter: 14 }) : r.default.createElement("i", { className: "fa fa-question-circle" }),
                                              }),
                                              r.default.createElement(
                                                  f.default,
                                                  { variant: d.TYPOGRAPHY.H7, color: d.COLORS.TEXT_DEFAULT, fontWeight: d.FONT_WEIGHT.BOLD, align: d.TEXT_ALIGN.CENTER, margin: [8, 0, 0, 0] },
                                                  t("thingsToKeep")
                                              ),
                                              r.default.createElement(
                                                  c.default,
                                                  { marginRight: 4, marginLeft: 5, marginTop: 6 },
                                                  O.ticker
                                                      ? r.default.createElement(
                                                            c.default,
                                                            { display: d.DISPLAY.FLEX, alignItems: d.ALIGN_ITEMS.CENTER, marginBottom: 2, paddingBottom: 2, className: "new-network-info__bullet-paragraph" },
                                                            r.default.createElement(c.default, { marginRight: 4, color: d.COLORS.TEXT_DEFAULT }, "•"),
                                                            r.default.createElement(
                                                                f.default,
                                                                { variant: d.TYPOGRAPHY.H7, color: d.COLORS.TEXT_DEFAULT, boxProps: { display: d.DISPLAY.INLINE_BLOCK }, key: "nativeTokenInfo" },
                                                                t("nativeToken", [
                                                                    r.default.createElement(f.default, { variant: d.TYPOGRAPHY.H7, boxProps: { display: d.DISPLAY.INLINE_BLOCK }, fontWeight: d.FONT_WEIGHT.BOLD, key: "ticker" }, O.ticker),
                                                                ])
                                                            )
                                                        )
                                                      : null,
                                                  r.default.createElement(
                                                      c.default,
                                                      { display: d.DISPLAY.FLEX, alignItems: d.ALIGN_ITEMS.CENTER, marginBottom: 2, paddingBottom: 2, className: w && y ? null : "new-network-info__bullet-paragraph" },
                                                      r.default.createElement(c.default, { marginRight: 4, color: d.COLORS.TEXT_DEFAULT }, "•"),
                                                      r.default.createElement(
                                                          f.default,
                                                          { variant: d.TYPOGRAPHY.H7, color: d.COLORS.TEXT_DEFAULT, boxProps: { display: d.DISPLAY.INLINE_BLOCK }, className: "new-network-info__bullet-paragraph__text" },
                                                          t("attemptSendingAssets"),
                                                          " ",
                                                          r.default.createElement(
                                                              "a",
                                                              { href: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995", target: "_blank", rel: "noreferrer" },
                                                              r.default.createElement(f.default, { variant: d.TYPOGRAPHY.H7, color: d.COLORS.INFO_DEFAULT, boxProps: { display: d.DISPLAY.INLINE_BLOCK } }, t("learnMoreUpperCase"))
                                                          )
                                                      )
                                                  ),
                                                  w && y
                                                      ? null
                                                      : r.default.createElement(
                                                            c.default,
                                                            { display: d.DISPLAY.FLEX, alignItems: d.ALIGN_ITEMS.CENTER, marginBottom: 2, paddingBottom: 2 },
                                                            r.default.createElement(c.default, { marginRight: 4, color: d.COLORS.TEXT_DEFAULT }, "•"),
                                                            r.default.createElement(
                                                                c.default,
                                                                null,
                                                                r.default.createElement(
                                                                    f.default,
                                                                    { variant: d.TYPOGRAPHY.H7, color: d.COLORS.TEXT_DEFAULT, className: "new-network-info__token-show-up" },
                                                                    t("tokenShowUp"),
                                                                    " ",
                                                                    r.default.createElement(
                                                                        l.default,
                                                                        {
                                                                            type: "link",
                                                                            onClick: () => {
                                                                                a.push(h.IMPORT_TOKEN_ROUTE), T(!1), (0, C.setFirstTimeUsedNetwork)(O.chainId);
                                                                            },
                                                                            className: "new-network-info__button",
                                                                        },
                                                                        r.default.createElement(
                                                                            f.default,
                                                                            { variant: d.TYPOGRAPHY.H7, color: d.COLORS.INFO_DEFAULT, className: "new-network-info__manually-add-tokens" },
                                                                            t("clickToManuallyAdd")
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                              )
                                          )
                                        : null
                                );
                            };
                            a.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5818,
            { "./nickname-popover.component": 5819 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./nickname-popover.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5819,
            {
                "../../../contexts/i18n": 5877,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/utils/util": 5937,
                "../../../hooks/useCopyToClipboard": 5951,
                "../../../selectors": 6300,
                "../button": 5711,
                "../icon/copy-icon.component": 5753,
                "../identicon": 5785,
                "../popover": 5828,
                "../tooltip": 5865,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = C(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = e("react-redux"),
                                o = v(e("prop-types")),
                                s = e("react-router-dom"),
                                i = e("../../../contexts/i18n"),
                                l = v(e("../tooltip")),
                                u = v(e("../popover")),
                                c = v(e("../button")),
                                d = v(e("../identicon")),
                                f = e("../../../helpers/utils/util"),
                                p = v(e("../icon/copy-icon.component")),
                                m = e("../../../hooks/useCopyToClipboard"),
                                g = e("../../../selectors"),
                                h = e("../../../helpers/constants/routes");
                            function v(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function C(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (C = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const b = ({ address: e, nickname: t, onClose: a = null, onAdd: o = null, explorerLink: v }) => {
                                var C;
                                const b = (0, r.useContext)(i.I18nContext),
                                    y = (0, s.useHistory)(),
                                    _ = (0, r.useCallback)(() => {
                                        o();
                                    }, [o]),
                                    [E, T] = (0, m.useCopyToClipboard)(),
                                    w = (0, n.useSelector)(g.getTokenList),
                                    k = (0, n.useSelector)(g.getBlockExplorerLinkText);
                                return r.default.createElement(
                                    "div",
                                    { className: "nickname-popover" },
                                    r.default.createElement(
                                        u.default,
                                        { onClose: a, className: "nickname-popover__popover-wrap" },
                                        r.default.createElement(d.default, { address: e, diameter: 36, className: "nickname-popover__identicon", image: null === (C = w[e.toLowerCase()]) || void 0 === C ? void 0 : C.iconUrl }),
                                        r.default.createElement("div", { className: "nickname-popover__address" }, t || (0, f.shortenAddress)(e)),
                                        r.default.createElement(
                                            "div",
                                            { className: "nickname-popover__public-address" },
                                            r.default.createElement("div", { className: "nickname-popover__public-address__constant" }, e),
                                            r.default.createElement(
                                                l.default,
                                                { position: "bottom", title: b(E ? "copiedExclamation" : "copyToClipboard") },
                                                r.default.createElement(
                                                    "button",
                                                    {
                                                        type: "link",
                                                        onClick: () => {
                                                            T(e);
                                                        },
                                                        title: "",
                                                    },
                                                    r.default.createElement(p.default, { size: 11, color: "var(--color-icon-default)" })
                                                )
                                            )
                                        ),
                                        r.default.createElement(
                                            "div",
                                            { className: "nickname-popover__view-on-block-explorer" },
                                            r.default.createElement(
                                                c.default,
                                                {
                                                    type: "link",
                                                    className: "nickname-popover__etherscan-link",
                                                    onClick:
                                                        "addBlockExplorer" === k.firstPart
                                                            ? () => {
                                                                  y.push(`${h.NETWORKS_ROUTE}#blockExplorerUrl`);
                                                              }
                                                            : () => {
                                                                  global.platform.openTab({ url: v });
                                                              },
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    title: "addBlockExplorer" === k.firstPart ? b("addBlockExplorer") : b("etherscanView"),
                                                },
                                                "addBlockExplorer" === k.firstPart ? b("addBlockExplorer") : b("viewOnBlockExplorer")
                                            )
                                        ),
                                        r.default.createElement(c.default, { type: "primary", className: "nickname-popover__footer-button", onClick: _ }, b(t ? "editANickname" : "addANickname"))
                                    )
                                );
                            };
                            b.propTypes = { address: o.default.string, nickname: o.default.string, onClose: o.default.func, onAdd: o.default.func, explorerLink: o.default.string };
                            var y = b;
                            a.default = y;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            582,
            { "./CardMedia": 581, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CardMedia"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5820,
            { "../../../helpers/constants/design-system": 5900, "../typography/typography": 5870, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                            var r = l(e("react")),
                                n = l(e("classnames")),
                                o = l(e("prop-types")),
                                s = l(e("../typography/typography")),
                                i = e("../../../helpers/constants/design-system");
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const u = /\.(\d*)/u;
                            function c({ detailText: e = "", value: t = 0, onChange: a, error: o = "", autoFocus: l = !1, allowDecimals: c = !0, disabled: d = !1, dataTestId: f, placeholder: p, id: m, name: g }) {
                                return r.default.createElement(
                                    "div",
                                    { className: (0, n.default)("numeric-input", { "numeric-input--error": o }) },
                                    r.default.createElement("input", {
                                        type: "number",
                                        value: t,
                                        onKeyDown: (e) => {
                                            c || "." !== e.key || e.preventDefault();
                                        },
                                        onChange: (e) => {
                                            var t;
                                            const r = e.target.value,
                                                n = u.exec(r);
                                            (null == n || null === (t = n[1]) || void 0 === t ? void 0 : t.length) >= 15 || null == a || a(parseFloat(r || 0, 10));
                                        },
                                        min: "0",
                                        autoFocus: l,
                                        disabled: d,
                                        "data-testid": f,
                                        placeholder: p,
                                        id: m,
                                        name: g,
                                    }),
                                    e && r.default.createElement(s.default, { color: i.COLORS.TEXT_ALTERNATIVE, variant: i.TYPOGRAPHY.H7, as: "span" }, e)
                                );
                            }
                            c.propTypes = {
                                value: o.default.oneOfType([o.default.number, o.default.string]),
                                detailText: o.default.string,
                                onChange: o.default.func,
                                error: o.default.string,
                                autoFocus: o.default.bool,
                                allowDecimals: o.default.bool,
                                disabled: o.default.bool,
                                dataTestId: o.default.string,
                                placeholder: o.default.string,
                                name: o.default.string,
                                id: o.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5821,
            { "./page-container-footer": 5823, "./page-container-header": 5825, "./page-container.component": 5827 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "PageContainerFooter", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                }),
                                Object.defineProperty(a, "PageContainerHeader", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return o.default;
                                    },
                                });
                            var r = s(e("./page-container-header")),
                                n = s(e("./page-container-footer")),
                                o = s(e("./page-container.component"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5822,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = s(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                            function s(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (s = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            class i extends n.Component {
                                render() {
                                    return n.default.createElement("div", { className: "page-container__content" }, this.props.children);
                                }
                            }
                            (a.default = i),
                                (function (e, t, a) {
                                    t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a);
                                })(i, "propTypes", { children: o.default.node.isRequired });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5823,
            { "./page-container-footer.component": 5824 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./page-container-footer.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5824,
            { "../../button": 5711, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = i(e("../../button"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class c extends r.Component {
                                render() {
                                    const {
                                        children: e,
                                        onCancel: t,
                                        cancelText: a,
                                        onSubmit: n,
                                        submitText: i,
                                        disabled: l,
                                        submitButtonType: u,
                                        hideCancel: c,
                                        cancelButtonType: d,
                                        buttonSizeLarge: f = !1,
                                        footerClassName: p,
                                        footerButtonClassName: m,
                                    } = this.props;
                                    return r.default.createElement(
                                        "div",
                                        { className: (0, o.default)("page-container__footer", p) },
                                        r.default.createElement(
                                            "footer",
                                            null,
                                            !c &&
                                                r.default.createElement(
                                                    s.default,
                                                    { type: d || "secondary", large: f, className: (0, o.default)("page-container__footer-button", m), onClick: (e) => t(e), "data-testid": "page-container-footer-cancel" },
                                                    a || this.context.t("cancel")
                                                ),
                                            r.default.createElement(
                                                s.default,
                                                { type: u || "primary", large: f, className: (0, o.default)("page-container__footer-button", m), disabled: l, onClick: (e) => n(e), "data-testid": "page-container-footer-next" },
                                                i || this.context.t("next")
                                            )
                                        ),
                                        e && r.default.createElement("div", { className: "page-container__footer-secondary" }, e)
                                    );
                                }
                            }
                            (a.default = c),
                                u(c, "propTypes", {
                                    children: n.default.node,
                                    onCancel: n.default.func,
                                    cancelText: n.default.string,
                                    cancelButtonType: n.default.string,
                                    onSubmit: n.default.func,
                                    submitText: n.default.string,
                                    disabled: n.default.bool,
                                    submitButtonType: n.default.string,
                                    hideCancel: n.default.bool,
                                    buttonSizeLarge: n.default.bool,
                                    footerClassName: n.default.string,
                                    footerButtonClassName: n.default.string,
                                }),
                                u(c, "contextTypes", { t: n.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5825,
            { "./page-container-header.component": 5826 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./page-container-header.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5826,
            { "../../button": 5711, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n,
                                o,
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = d(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                i = c(e("prop-types")),
                                l = c(e("classnames")),
                                u = c(e("../../button"));
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (d = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            class f extends s.Component {
                                renderTabs() {
                                    const { tabs: e } = this.props;
                                    return e ? s.default.createElement("ul", { className: "page-container__tabs" }, e) : null;
                                }
                                renderCloseAction() {
                                    const { hideClose: e, onClose: t, headerCloseText: a } = this.props;
                                    return e
                                        ? null
                                        : a
                                        ? t && s.default.createElement(u.default, { type: "link", className: "page-container__header-close-text", onClick: () => t() }, a)
                                        : t && s.default.createElement("button", { className: "page-container__header-close", onClick: () => t(), "aria-label": "close" });
                                }
                                renderHeaderRow() {
                                    const { showBackButton: e, onBackButtonClick: t, backButtonStyles: a, backButtonString: r } = this.props;
                                    return e && s.default.createElement("div", { className: "page-container__header-row" }, s.default.createElement("span", { className: "page-container__back-button", onClick: t, style: a }, r || "Back"));
                                }
                                render() {
                                    const { title: e, subtitle: t, tabs: a, className: r, hideClose: n } = this.props;
                                    return s.default.createElement(
                                        "div",
                                        { className: (0, l.default)("page-container__header", r, { "page-container__header--no-padding-bottom": Boolean(a) }), "data-testid": "page-container__header" },
                                        this.renderHeaderRow(),
                                        e && s.default.createElement("div", { className: (0, l.default)("page-container__title", { "page-container__title--no-margin-right": n }) }, e),
                                        t ? s.default.createElement("div", { className: "page-container__subtitle" }, t) : null,
                                        this.renderCloseAction(),
                                        this.renderTabs()
                                    );
                                }
                            }
                            (a.default = f),
                                (r = f),
                                (n = "propTypes"),
                                (o = {
                                    title: i.default.string,
                                    subtitle: i.default.string,
                                    onClose: i.default.func,
                                    showBackButton: i.default.bool,
                                    onBackButtonClick: i.default.func,
                                    backButtonStyles: i.default.object,
                                    backButtonString: i.default.string,
                                    tabs: i.default.node,
                                    headerCloseText: i.default.string,
                                    className: i.default.string,
                                    hideClose: i.default.bool,
                                }),
                                n in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (r[n] = o);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5827,
            { "./page-container-footer": 5823, "./page-container-header": 5825, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("./page-container-header")),
                                s = i(e("./page-container-footer"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class c extends r.PureComponent {
                                constructor(...e) {
                                    super(...e), u(this, "state", { activeTabIndex: this.props.defaultActiveTabIndex || 0 });
                                }
                                handleTabClick(e) {
                                    this.setState({ activeTabIndex: e });
                                }
                                renderTabs() {
                                    const { tabsComponent: e } = this.props;
                                    if (!e) return null;
                                    const t = r.default.Children.count(e.props.children);
                                    return r.default.Children.map(
                                        e.props.children,
                                        (e, a) => e && r.default.cloneElement(e, { onClick: (e) => this.handleTabClick(e), tabIndex: a, isActive: t > 1 && a === this.state.activeTabIndex, key: a, className: "page-container__tab" })
                                    );
                                }
                                renderActiveTabContent() {
                                    const { tabsComponent: e } = this.props;
                                    let { children: t } = e.props;
                                    t = t.filter(Boolean);
                                    const { activeTabIndex: a } = this.state;
                                    return (t[a] || t[0]).props.children;
                                }
                                renderContent() {
                                    const { contentComponent: e, tabsComponent: t } = this.props;
                                    return e || (t ? this.renderActiveTabContent() : null);
                                }
                                getTabSubmitText() {
                                    const { tabsComponent: e } = this.props,
                                        { activeTabIndex: t } = this.state;
                                    if (e) {
                                        var a;
                                        let { children: r } = e.props;
                                        if (((r = r.filter(Boolean)), "custom-tab" === (null === (a = r[t]) || void 0 === a ? void 0 : a.key))) return this.context.t("addCustomToken");
                                    }
                                    return null;
                                }
                                render() {
                                    const {
                                            title: e,
                                            subtitle: t,
                                            onClose: a,
                                            showBackButton: n,
                                            onBackButtonClick: i,
                                            backButtonStyles: l,
                                            backButtonString: u,
                                            onCancel: c,
                                            cancelText: d,
                                            onSubmit: f,
                                            submitText: p,
                                            disabled: m,
                                            headerCloseText: g,
                                            hideCancel: h,
                                        } = this.props,
                                        v = this.getTabSubmitText();
                                    return r.default.createElement(
                                        "div",
                                        { className: "page-container" },
                                        r.default.createElement(o.default, {
                                            title: e,
                                            subtitle: t,
                                            onClose: a,
                                            showBackButton: n,
                                            onBackButtonClick: i,
                                            backButtonStyles: l,
                                            backButtonString: u,
                                            tabs: this.renderTabs(),
                                            headerCloseText: g,
                                        }),
                                        r.default.createElement(
                                            "div",
                                            { className: "page-container__bottom" },
                                            r.default.createElement("div", { className: "page-container__content" }, this.renderContent()),
                                            r.default.createElement(s.default, { onCancel: c, cancelText: d, hideCancel: h, onSubmit: f, submitText: v || p, disabled: m })
                                        )
                                    );
                                }
                            }
                            (a.default = c),
                                u(c, "contextTypes", { t: n.default.func }),
                                u(c, "propTypes", {
                                    backButtonString: n.default.string,
                                    backButtonStyles: n.default.object,
                                    headerCloseText: n.default.string,
                                    onBackButtonClick: n.default.func,
                                    onClose: n.default.func,
                                    showBackButton: n.default.bool,
                                    subtitle: n.default.string,
                                    title: n.default.string.isRequired,
                                    defaultActiveTabIndex: n.default.number,
                                    tabsComponent: n.default.node,
                                    contentComponent: n.default.node,
                                    cancelText: n.default.string,
                                    disabled: n.default.bool,
                                    hideCancel: n.default.bool,
                                    onCancel: n.default.func,
                                    onSubmit: n.default.func,
                                    submitText: n.default.string,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5828,
            { "./popover.component": 5829 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./popover.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5829,
            { "../../../helpers/constants/design-system": 5900, "../../../hooks/useI18nContext": 5957, "../box": 5707, classnames: 1772, "prop-types": 4806, react: 4980, "react-dom": 4885 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = d(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = c(e("react-dom")),
                                o = c(e("prop-types")),
                                s = c(e("classnames")),
                                i = e("../../../hooks/useI18nContext"),
                                l = c(e("../box")),
                                u = e("../../../helpers/constants/design-system");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (d = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function f(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            function p() {
                                return (
                                    (p = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    p.apply(this, arguments)
                                );
                            }
                            const m = { padding: [6, 4, 4], display: "flex", flexDirection: u.FLEX_DIRECTION.COLUMN, backgroundColor: u.COLORS.BACKGROUND_DEFAULT, borderRadius: "xl" },
                                g = { display: "flex", flexDirection: u.FLEX_DIRECTION.COLUMN, justifyContent: u.JUSTIFY_CONTENT.FLEX_START, alignItems: u.ALIGN_ITEMS.STRETCH, borderRadius: "xl" },
                                h = { display: "flex", justifyContent: u.JUSTIFY_CONTENT.SPACE_BETWEEN, padding: [4, 6, 6] },
                                v = ({
                                    title: e,
                                    subtitle: t = "",
                                    children: a,
                                    footer: n,
                                    footerClassName: o,
                                    onBack: u,
                                    onClose: c,
                                    className: d,
                                    contentClassName: f,
                                    showArrow: v,
                                    CustomBackground: C,
                                    popoverRef: b,
                                    centerTitle: y,
                                    headerProps: _ = m,
                                    contentProps: E = g,
                                    footerProps: T = h,
                                }) => {
                                    const w = (0, i.useI18nContext)(),
                                        k = e || u || t || c,
                                        O = () =>
                                            r.default.createElement(
                                                l.default,
                                                p({}, m, _, { className: "popover-header" }),
                                                r.default.createElement(
                                                    "div",
                                                    { className: (0, s.default)("popover-header__title", y ? "center" : "") },
                                                    r.default.createElement(
                                                        "h2",
                                                        { title: "popover" },
                                                        u ? r.default.createElement("button", { className: "fas fa-chevron-left popover-header__button", title: w("back"), onClick: u }) : null,
                                                        e
                                                    ),
                                                    c ? r.default.createElement("button", { className: "fas fa-times popover-header__button", title: w("close"), "data-testid": "popover-close", onClick: c }) : null
                                                ),
                                                t ? r.default.createElement("p", { className: "popover-header__subtitle" }, t) : null
                                            );
                                    return r.default.createElement(
                                        "div",
                                        { className: "popover-container" },
                                        C ? r.default.createElement(C, { onClose: c }) : r.default.createElement("div", { className: "popover-bg", onClick: c }),
                                        r.default.createElement(
                                            "section",
                                            { className: (0, s.default)("popover-wrap", d), ref: b },
                                            v ? r.default.createElement("div", { className: "popover-arrow" }) : null,
                                            k && r.default.createElement(O, null),
                                            a ? r.default.createElement(l.default, p({ className: (0, s.default)("popover-content", f) }, g, E), a) : null,
                                            n ? r.default.createElement(l.default, p({ className: (0, s.default)("popover-footer", o) }, h, T), n) : null
                                        )
                                    );
                                };
                            v.propTypes = {
                                title: o.default.node,
                                subtitle: o.default.string,
                                children: o.default.node,
                                footer: o.default.node,
                                footerClassName: o.default.string,
                                onBack: o.default.func,
                                onClose: o.default.func,
                                CustomBackground: o.default.func,
                                contentClassName: o.default.string,
                                className: o.default.string,
                                showArrow: o.default.bool,
                                popoverRef: o.default.shape({ current: o.default.instanceOf(window.Element) }),
                                centerTitle: o.default.bool,
                                headerProps: o.default.shape({ ...l.default.propTypes }),
                                contentProps: o.default.shape({ ...l.default.propTypes }),
                                footerProps: o.default.shape({ ...l.default.propTypes }),
                            };
                            class C extends r.PureComponent {
                                constructor(...e) {
                                    super(...e), f(this, "rootNode", document.getElementById("popover-content")), f(this, "instanceNode", document.createElement("div"));
                                }
                                componentDidMount() {
                                    this.rootNode && this.rootNode.appendChild(this.instanceNode);
                                }
                                componentWillUnmount() {
                                    this.rootNode && this.rootNode.removeChild(this.instanceNode);
                                }
                                render() {
                                    const e = r.default.createElement(v, this.props);
                                    return this.rootNode ? n.default.createPortal(e, this.instanceNode) : e;
                                }
                            }
                            (a.default = C), f(C, "propTypes", v.propTypes);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            583,
            {
                "../internal/SwitchBase": 820,
                "../internal/svg-icons/CheckBox": 825,
                "../internal/svg-icons/CheckBoxOutlineBlank": 826,
                "../internal/svg-icons/IndeterminateCheckBox": 828,
                "../styles/colorManipulator": 849,
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                "@material-ui/utils": 959,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = (e("@material-ui/utils"), n(e("../internal/SwitchBase"))),
                                c = n(e("../internal/svg-icons/CheckBoxOutlineBlank")),
                                d = n(e("../internal/svg-icons/CheckBox")),
                                f = e("../styles/colorManipulator"),
                                p = n(e("../internal/svg-icons/IndeterminateCheckBox")),
                                m = n(e("../utils/capitalize")),
                                g = n(e("../styles/withStyles")),
                                h = function (e) {
                                    return {
                                        root: { color: e.palette.text.secondary },
                                        checked: {},
                                        disabled: {},
                                        indeterminate: {},
                                        colorPrimary: {
                                            "&$checked": {
                                                color: e.palette.primary.main,
                                                "&:hover": { backgroundColor: (0, f.fade)(e.palette.primary.main, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } },
                                            },
                                            "&$disabled": { color: e.palette.action.disabled },
                                        },
                                        colorSecondary: {
                                            "&$checked": {
                                                color: e.palette.secondary.main,
                                                "&:hover": { backgroundColor: (0, f.fade)(e.palette.secondary.main, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } },
                                            },
                                            "&$disabled": { color: e.palette.action.disabled },
                                        },
                                    };
                                };
                            a.styles = h;
                            var v = i.createElement(d.default, null),
                                C = i.createElement(c.default, null),
                                b = i.createElement(p.default, null),
                                y = i.forwardRef(function (e, t) {
                                    var a = e.checkedIcon,
                                        r = void 0 === a ? v : a,
                                        n = e.classes,
                                        c = e.color,
                                        d = void 0 === c ? "secondary" : c,
                                        f = e.icon,
                                        p = void 0 === f ? C : f,
                                        g = e.indeterminate,
                                        h = void 0 !== g && g,
                                        y = e.indeterminateIcon,
                                        _ = void 0 === y ? b : y,
                                        E = e.inputProps,
                                        T = e.size,
                                        w = void 0 === T ? "medium" : T,
                                        k = (0, s.default)(e, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]),
                                        O = h ? _ : p,
                                        P = h ? _ : r;
                                    return i.createElement(
                                        u.default,
                                        (0, o.default)(
                                            {
                                                type: "checkbox",
                                                classes: { root: (0, l.default)(n.root, n["color".concat((0, m.default)(d))], h && n.indeterminate), checked: n.checked, disabled: n.disabled },
                                                color: d,
                                                inputProps: (0, o.default)({ "data-indeterminate": h }, E),
                                                icon: i.cloneElement(O, { fontSize: O.props.fontSize === undefined && "small" === w ? w : O.props.fontSize }),
                                                checkedIcon: i.cloneElement(P, { fontSize: P.props.fontSize === undefined && "small" === w ? w : P.props.fontSize }),
                                                ref: t,
                                            },
                                            k
                                        )
                                    );
                                }),
                                _ = (0, g.default)(h, { name: "MuiCheckbox" })(y);
                            a.default = _;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5830,
            { "./pulse-loader": 5831 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./pulse-loader")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5831,
            { react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function () {
                                    return n.default.createElement(
                                        "div",
                                        { className: "pulse-loader" },
                                        n.default.createElement("div", { className: "pulse-loader__loading-dot-one" }),
                                        n.default.createElement("div", { className: "pulse-loader__loading-dot-two" }),
                                        n.default.createElement("div", { className: "pulse-loader__loading-dot-three" })
                                    );
                                });
                            var r,
                                n = (r = e("react")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5832,
            { "./qr-code": 5833 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./qr-code")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5833,
            {
                "../../../../shared/modules/hexstring-utils": 5354,
                "../../../hooks/useCopyToClipboard": 5951,
                "../../../hooks/useI18nContext": 5957,
                "../icon/copy-icon.component": 5753,
                "../tooltip": 5865,
                "ethereumjs-util": 2107,
                "prop-types": 4806,
                "qrcode-generator": 4843,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = p(e("prop-types")),
                                n = p(e("react")),
                                o = p(e("qrcode-generator")),
                                s = e("react-redux"),
                                i = e("ethereumjs-util"),
                                l = e("../../../hooks/useCopyToClipboard"),
                                u = e("../../../../shared/modules/hexstring-utils"),
                                c = p(e("../tooltip")),
                                d = p(e("../icon/copy-icon.component")),
                                f = e("../../../hooks/useI18nContext");
                            function p(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            var m = (0, s.connect)(function (e) {
                                const { buyView: t, warning: a } = e.appState;
                                return { buyView: t, warning: a };
                            })(g);
                            function g(e) {
                                const { Qr: t, warning: a } = e,
                                    { message: r, data: s } = t,
                                    p = `${(0, i.isHexPrefixed)(s) ? "ethereum:" : ""}${(0, u.toChecksumHexAddress)(s)}`,
                                    [m, g] = (0, l.useCopyToClipboard)(),
                                    h = (0, f.useI18nContext)(),
                                    v = (0, o.default)(4, "M");
                                v.addData(p), v.make();
                                const C = r ? n.default.createElement("div", { className: "qr-code__header" }, r) : null;
                                return n.default.createElement(
                                    "div",
                                    { className: "qr-code" },
                                    Array.isArray(r)
                                        ? n.default.createElement(
                                              "div",
                                              { className: "qr-code__message-container" },
                                              r.map((e, t) => n.default.createElement("div", { className: "qr_code__message", key: t }, e))
                                          )
                                        : C,
                                    a ? n.default.createElement("span", { className: "qr-code__error" }, a) : null,
                                    n.default.createElement("div", { className: "qr-code__wrapper", dangerouslySetInnerHTML: { __html: v.createTableTag(4) } }),
                                    n.default.createElement(
                                        c.default,
                                        { wrapperClassName: "qr-code__address-container__tooltip-wrapper", position: "bottom", title: h(m ? "copiedExclamation" : "copyToClipboard") },
                                        n.default.createElement(
                                            "div",
                                            {
                                                className: "qr-code__address-container",
                                                onClick: () => {
                                                    g((0, u.toChecksumHexAddress)(s));
                                                },
                                            },
                                            n.default.createElement("div", { className: "qr-code__address" }, (0, u.toChecksumHexAddress)(s)),
                                            n.default.createElement("div", { className: "qr-code__copy-icon" }, n.default.createElement(d.default, { size: 11, className: "qr-code__copy-icon__svg", color: "" }))
                                        )
                                    )
                                );
                            }
                            (a.default = m),
                                (g.propTypes = { warning: r.default.node, Qr: r.default.shape({ message: r.default.oneOfType([r.default.arrayOf(r.default.node), r.default.node]), data: r.default.string.isRequired }).isRequired });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5834,
            { "../../../contexts/i18n": 5877, "../../../helpers/constants/design-system": 5900, "../typography/typography": 5870, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = f);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = c(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = u(e("prop-types")),
                                o = u(e("classnames")),
                                s = e("../../../contexts/i18n"),
                                i = u(e("../typography/typography")),
                                l = e("../../../helpers/constants/design-system");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (c = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function d({ isFirst: e, isLast: t }) {
                                return e
                                    ? r.default.createElement("div", { className: "radio-group__column-start-connector" })
                                    : t
                                    ? r.default.createElement("div", { className: "radio-group__column-end-connector" })
                                    : r.default.createElement(
                                          r.default.Fragment,
                                          null,
                                          r.default.createElement("div", { className: "radio-group__column-vertical-line" }),
                                          r.default.createElement("div", { className: "radio-group__column-horizontal-line" })
                                      );
                            }
                            function f({ options: e, name: t, selectedValue: a, onChange: n }) {
                                const u = (0, r.useContext)(s.I18nContext),
                                    c = Boolean(e.find((e) => e.recommended));
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("radio-group", { "radio-group--has-recommendation": c }) },
                                    e.map((o, s) => {
                                        const f = o.value === a;
                                        return r.default.createElement(
                                            "div",
                                            { className: "radio-group__column", key: `${t}-${o.value}` },
                                            r.default.createElement(
                                                "label",
                                                { className: "radio-group__column-inner" },
                                                c &&
                                                    r.default.createElement(
                                                        i.default,
                                                        { color: l.COLORS.SUCCESS_DEFAULT, className: "radio-group__column-recommended", variant: l.TYPOGRAPHY.H7 },
                                                        o.recommended ? u("recommendedGasLabel") : ""
                                                    ),
                                                r.default.createElement(
                                                    "div",
                                                    { className: "radio-group__column-radio" },
                                                    r.default.createElement("input", { type: "radio", name: t, checked: f, value: o.value, onChange: () => (null == n ? void 0 : n(o.value)) })
                                                ),
                                                r.default.createElement(d, { isFirst: 0 === s, isLast: s === e.length - 1 }),
                                                r.default.createElement(
                                                    i.default,
                                                    { color: f ? l.COLORS.TEXT_DEFAULT : l.COLORS.TEXT_MUTED, fontWeight: l.FONT_WEIGHT.BOLD, variant: l.TYPOGRAPHY.H7, className: "radio-group__column-label" },
                                                    o.label
                                                )
                                            )
                                        );
                                    })
                                );
                            }
                            (d.propTypes = { isFirst: n.default.bool, isLast: n.default.bool }),
                                (f.propTypes = { options: n.default.array, selectedValue: n.default.string, name: n.default.string, onChange: n.default.func }),
                                (f.defaultProps = { options: [] });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5835,
            { "../../../contexts/i18n": 5877, "../../../helpers/constants/design-system": 5900, "../box": 5707, "../tooltip": 5865, "../typography": 5869, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = f);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = d(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = c(e("prop-types")),
                                o = e("../../../contexts/i18n"),
                                s = c(e("../box")),
                                i = c(e("../tooltip")),
                                l = c(e("../typography")),
                                u = e("../../../helpers/constants/design-system");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (d = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function f({ tokenName: e, currentTokenBalance: t, tokenValue: a, onEdit: n }) {
                                const c = (0, r.useContext)(o.I18nContext);
                                return r.default.createElement(
                                    s.default,
                                    {
                                        className: "review-spending-cap",
                                        borderRadius: u.SIZES.SM,
                                        paddingTop: 4,
                                        paddingRight: 4,
                                        paddingLeft: 4,
                                        display: u.DISPLAY.FLEX,
                                        alignItems: u.ALIGN_ITEMS.FLEX_START,
                                        flexDirection: u.FLEX_DIRECTION.COLUMN,
                                        backgroundColor: u.COLORS.BACKGROUND_ALTERNATIVE,
                                        gap: 1,
                                    },
                                    r.default.createElement(
                                        s.default,
                                        { flexDirection: u.FLEX_DIRECTION.ROW, display: u.DISPLAY.FLEX, alignItems: u.ALIGN_ITEMS.CENTER, className: "review-spending-cap__heading" },
                                        r.default.createElement(
                                            s.default,
                                            { flexDirection: u.FLEX_DIRECTION.ROW, className: "review-spending-cap__heading-title" },
                                            r.default.createElement(l.default, { as: u.TYPOGRAPHY.H6, fontWeight: u.FONT_WEIGHT.BOLD, variant: u.TYPOGRAPHY.H6, boxProps: { display: u.DISPLAY.INLINE_BLOCK } }, c("customSpendingCap")),
                                            r.default.createElement(
                                                s.default,
                                                { marginLeft: 2, display: u.DISPLAY.INLINE_BLOCK },
                                                r.default.createElement(
                                                    i.default,
                                                    {
                                                        interactive: !0,
                                                        position: "top",
                                                        html: r.default.createElement(
                                                            l.default,
                                                            { variant: u.TYPOGRAPHY.H7, color: u.COLORS.TEXT_ALTERNATIVE, className: "review-spending-cap__heading-title__tooltip" },
                                                            a > t &&
                                                                c("warningTooltipText", [
                                                                    r.default.createElement(
                                                                        l.default,
                                                                        { key: "tooltip-text", variant: u.TYPOGRAPHY.H7, fontWeight: u.FONT_WEIGHT.BOLD, color: u.COLORS.ERROR_DEFAULT },
                                                                        r.default.createElement("i", { className: "fa fa-exclamation-circle" }),
                                                                        " ",
                                                                        c("beCareful")
                                                                    ),
                                                                ]),
                                                            0 === a && c("revokeSpendingCapTooltipText")
                                                        ),
                                                    },
                                                    a > t && r.default.createElement("i", { className: "fa fa-exclamation-triangle review-spending-cap__heading-title__tooltip__warning-icon" }),
                                                    0 === a && r.default.createElement("i", { className: "far fa-question-circle review-spending-cap__heading-title__tooltip__question-icon" })
                                                )
                                            )
                                        ),
                                        r.default.createElement(
                                            s.default,
                                            { className: "review-spending-cap__heading-detail", textAlign: u.TEXT_ALIGN.END },
                                            r.default.createElement(
                                                "button",
                                                {
                                                    className: "review-spending-cap__heading-detail__button",
                                                    type: "link",
                                                    onClick: (e) => {
                                                        e.preventDefault(), n();
                                                    },
                                                },
                                                c("edit")
                                            )
                                        )
                                    ),
                                    r.default.createElement(
                                        s.default,
                                        null,
                                        r.default.createElement(l.default, { as: u.TYPOGRAPHY.H6, color: a > t ? u.COLORS.ERROR_DEFAULT : u.COLORS.TEXT_DEFAULT, variant: u.TYPOGRAPHY.H6, marginBottom: 3 }, a, " ", e)
                                    )
                                );
                            }
                            f.propTypes = { tokenName: n.default.string, currentTokenBalance: n.default.number, tokenValue: n.default.number, onEdit: n.default.func };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5836,
            { "./sender-to-recipient.component": 5837 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./sender-to-recipient.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5837,
            {
                "../../../../shared/modules/hexstring-utils": 5354,
                "../../../helpers/utils/util": 5937,
                "../../../hooks/useI18nContext": 5957,
                "../../app/modals/nickname-popovers": 5564,
                "../account-mismatch-warning/account-mismatch-warning.component": 5702,
                "../icon/icon-caret-right": 5757,
                "../identicon": 5785,
                "../tooltip": 5865,
                "./sender-to-recipient.constants": 5838,
                classnames: 1772,
                "copy-to-clipboard": 1800,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.RecipientWithAddress = y), (a.default = E);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = v(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = h(e("prop-types")),
                                o = h(e("classnames")),
                                s = h(e("copy-to-clipboard")),
                                i = h(e("../tooltip")),
                                l = h(e("../icon/icon-caret-right")),
                                u = h(e("../identicon")),
                                c = e("../../../helpers/utils/util"),
                                d = h(e("../account-mismatch-warning/account-mismatch-warning.component")),
                                f = e("../../../hooks/useI18nContext"),
                                p = e("../../../../shared/modules/hexstring-utils"),
                                m = h(e("../../app/modals/nickname-popovers")),
                                g = e("./sender-to-recipient.constants");
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function v(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (v = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const C = { [g.DEFAULT_VARIANT]: "sender-to-recipient--default", [g.CARDS_VARIANT]: "sender-to-recipient--cards", [g.FLAT_VARIANT]: "sender-to-recipient--flat" };
                            function b({ addressOnly: e, checksummedSenderAddress: t, senderName: a, onSenderClick: n, senderAddress: l, warnUserOnAccountMismatch: m }) {
                                const g = (0, f.useI18nContext)(),
                                    [h, v] = (0, r.useState)(!1);
                                let C = r.default.createElement("p", null, g("copiedExclamation"));
                                return (
                                    h || (C = e ? r.default.createElement("p", null, g("copyAddress")) : r.default.createElement("p", null, (0, c.shortenAddress)(t), r.default.createElement("br", null), g("copyAddress"))),
                                    r.default.createElement(
                                        "div",
                                        {
                                            className: (0, o.default)("sender-to-recipient__party sender-to-recipient__party--sender"),
                                            onClick: () => {
                                                v(!0), (0, s.default)(t), n && n();
                                            },
                                        },
                                        r.default.createElement("div", { className: "sender-to-recipient__sender-icon" }, r.default.createElement(u.default, { address: (0, p.toChecksumHexAddress)(l), diameter: 24 })),
                                        r.default.createElement(
                                            i.default,
                                            { position: "bottom", html: C, wrapperClassName: "sender-to-recipient__tooltip-wrapper", containerClassName: "sender-to-recipient__tooltip-container", onHidden: () => v(!1) },
                                            r.default.createElement("div", { className: "sender-to-recipient__name" }, e ? r.default.createElement("span", null, `${a || (0, c.shortenAddress)(t)}`) : a)
                                        ),
                                        m && r.default.createElement(d.default, { address: l })
                                    )
                                );
                            }
                            function y({ checksummedRecipientAddress: e, onRecipientClick: t, addressOnly: a, recipientNickname: n, recipientEns: o, recipientName: l, recipientMetadataName: d }) {
                                const p = (0, f.useI18nContext)(),
                                    [g, h] = (0, r.useState)(!1),
                                    [v, C] = (0, r.useState)(!1);
                                let b = r.default.createElement("p", null, p("copiedExclamation"));
                                return (
                                    v || (b = a ? r.default.createElement("p", null, p("copyAddress")) : r.default.createElement("p", null, (0, c.shortenAddress)(e), r.default.createElement("br", null), p("copyAddress"))),
                                    r.default.createElement(
                                        r.default.Fragment,
                                        null,
                                        r.default.createElement(
                                            "div",
                                            {
                                                className: "sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address",
                                                onClick: () => {
                                                    l ? (C(!0), (0, s.default)(e)) : (h(!0), t && t());
                                                },
                                            },
                                            r.default.createElement("div", { className: "sender-to-recipient__sender-icon" }, r.default.createElement(u.default, { address: e, diameter: 24 })),
                                            r.default.createElement(
                                                i.default,
                                                { position: "bottom", disabled: !l, html: b, wrapperClassName: "sender-to-recipient__tooltip-wrapper", containerClassName: "sender-to-recipient__tooltip-container", onHidden: () => C(!1) },
                                                r.default.createElement(
                                                    "div",
                                                    { className: "sender-to-recipient__name", "data-testid": "sender-to-recipient__name" },
                                                    a ? l || n || d || o || (0, c.shortenAddress)(e) : l || n || d || o || p("newContract")
                                                )
                                            )
                                        ),
                                        g ? r.default.createElement(m.default, { onClose: () => h(!1), address: e }) : null
                                    )
                                );
                            }
                            function _({ variant: e }) {
                                return e === g.DEFAULT_VARIANT
                                    ? r.default.createElement(
                                          "div",
                                          { className: "sender-to-recipient__arrow-container" },
                                          r.default.createElement("div", { className: "sender-to-recipient__arrow-circle" }, r.default.createElement("i", { className: "fa fa-arrow-right sender-to-recipient__arrow-circle__icon" }))
                                      )
                                    : r.default.createElement("div", { className: "sender-to-recipient__arrow-container" }, r.default.createElement(l.default, null));
                            }
                            function E({
                                senderAddress: e,
                                addressOnly: t,
                                senderName: a,
                                recipientNickname: n,
                                recipientName: s,
                                recipientMetadataName: i,
                                recipientEns: l,
                                onRecipientClick: u,
                                onSenderClick: c,
                                recipientAddress: d,
                                variant: m,
                                warnUserOnAccountMismatch: g,
                            }) {
                                const h = (0, f.useI18nContext)(),
                                    v = (0, p.toChecksumHexAddress)(e),
                                    E = (0, p.toChecksumHexAddress)(d);
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("sender-to-recipient", C[m]), "data-testid": "sender-to-recipient" },
                                    r.default.createElement(b, { checksummedSenderAddress: v, addressOnly: t, senderName: a, onSenderClick: c, senderAddress: e, warnUserOnAccountMismatch: g }),
                                    r.default.createElement(_, { variant: m }),
                                    d
                                        ? r.default.createElement(y, { checksummedRecipientAddress: E, onRecipientClick: u, addressOnly: t, recipientNickname: n, recipientEns: l, recipientName: s, recipientMetadataName: i })
                                        : r.default.createElement(
                                              "div",
                                              { className: "sender-to-recipient__party sender-to-recipient__party--recipient" },
                                              r.default.createElement("i", { className: "fa fa-file-text-o" }),
                                              r.default.createElement("div", { className: "sender-to-recipient__name" }, h("newContract"))
                                          )
                                );
                            }
                            (b.propTypes = {
                                senderName: n.default.string,
                                checksummedSenderAddress: n.default.string,
                                addressOnly: n.default.bool,
                                senderAddress: n.default.string,
                                onSenderClick: n.default.func,
                                warnUserOnAccountMismatch: n.default.bool,
                            }),
                                (y.propTypes = {
                                    checksummedRecipientAddress: n.default.string,
                                    recipientName: n.default.string,
                                    recipientMetadataName: n.default.string,
                                    recipientEns: n.default.string,
                                    recipientNickname: n.default.string,
                                    addressOnly: n.default.bool,
                                    onRecipientClick: n.default.func,
                                }),
                                (_.propTypes = { variant: n.default.oneOf([g.DEFAULT_VARIANT, g.CARDS_VARIANT, g.FLAT_VARIANT]) }),
                                (E.defaultProps = { variant: g.DEFAULT_VARIANT, warnUserOnAccountMismatch: !0 }),
                                (E.propTypes = {
                                    senderName: n.default.string,
                                    senderAddress: n.default.string,
                                    recipientName: n.default.string,
                                    recipientMetadataName: n.default.string,
                                    recipientEns: n.default.string,
                                    recipientAddress: n.default.string,
                                    recipientNickname: n.default.string,
                                    variant: n.default.oneOf([g.DEFAULT_VARIANT, g.CARDS_VARIANT, g.FLAT_VARIANT]),
                                    addressOnly: n.default.bool,
                                    onRecipientClick: n.default.func,
                                    onSenderClick: n.default.func,
                                    warnUserOnAccountMismatch: n.default.bool,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5838,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.FLAT_VARIANT = a.DEFAULT_VARIANT = a.CARDS_VARIANT = void 0);
                            a.DEFAULT_VARIANT = "DEFAULT_VARIANT";
                            a.CARDS_VARIANT = "CARDS_VARIANT";
                            a.FLAT_VARIANT = "FLAT_VARIANT";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5839,
            { "./show-hide-toggle": 5840 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./show-hide-toggle")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            584,
            { "./Checkbox": 583, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./Checkbox"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5840,
            { "../icon/icon-eye": 5764, "../icon/icon-eye-slash": 5763, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = l(e("react")),
                                n = l(e("prop-types")),
                                o = l(e("classnames")),
                                s = l(e("../icon/icon-eye")),
                                i = l(e("../icon/icon-eye-slash"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const u = ({ id: e, shown: t, onChange: a, ariaLabelHidden: n, ariaLabelShown: l, className: u, "data-testid": c, disabled: d, title: f }) =>
                                r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("show-hide-toggle", u) },
                                    r.default.createElement("input", { className: "show-hide-toggle__input", id: e, type: "checkbox", checked: t, onChange: a, "data-testid": c, disabled: d }),
                                    r.default.createElement(
                                        "label",
                                        { htmlFor: e, className: "show-hide-toggle__label", title: f },
                                        t ? r.default.createElement(s.default, { ariaLabel: l, className: "show-hide-toggle__icon" }) : r.default.createElement(i.default, { ariaLabel: n, className: "show-hide-toggle__icon" })
                                    )
                                );
                            u.propTypes = {
                                id: n.default.string.isRequired,
                                shown: n.default.bool.isRequired,
                                onChange: n.default.func.isRequired,
                                ariaLabelHidden: n.default.string.isRequired,
                                ariaLabelShown: n.default.string.isRequired,
                                className: n.default.string,
                                "data-testid": n.default.string,
                                disabled: n.default.bool,
                                title: n.default.string,
                            };
                            var c = u;
                            a.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5841,
            { "./site-icon": 5842 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./site-icon")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5842,
            { "../icon-border": 5747, "../icon-with-fallback": 5751, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("../icon-border")),
                                s = i(e("../icon-with-fallback"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l({ icon: e = null, name: t = "", size: a, className: n }) {
                                const i = Math.floor(0.75 * a);
                                return r.default.createElement(o.default, { size: a, className: n }, r.default.createElement(s.default, { icon: e, name: t, size: i }));
                            }
                            l.propTypes = { className: n.default.string, icon: n.default.string, name: n.default.string, size: n.default.number.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5843,
            { "./site-origin": 5844 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./site-origin")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5844,
            { "../../../helpers/constants/design-system": 5900, "../chip": 5720, "../icon-with-fallback": 5751, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                            var r = u(e("react")),
                                n = u(e("prop-types")),
                                o = u(e("classnames")),
                                s = u(e("../chip")),
                                i = u(e("../icon-with-fallback")),
                                l = e("../../../helpers/constants/design-system");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c({ siteOrigin: e, iconSrc: t, iconName: a, chip: n, className: u, title: c, leftIcon: d, rightIcon: f }) {
                                return r.default.createElement(
                                    "div",
                                    { className: (0, o.default)("site-origin", u), title: c },
                                    n
                                        ? r.default.createElement(s.default, { borderColor: l.COLORS.BORDER_MUTED, label: e, maxContent: !1, leftIcon: d || r.default.createElement(i.default, { icon: t, name: a, size: 24 }), rightIcon: f })
                                        : r.default.createElement("bdi", { dir: "ltr" }, e)
                                );
                            }
                            c.propTypes = {
                                siteOrigin: n.default.string.isRequired,
                                iconName: n.default.string,
                                iconSrc: n.default.string,
                                className: n.default.string,
                                title: n.default.string,
                                chip: n.default.bool,
                                leftIcon: n.default.node,
                                rightIcon: n.default.node,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5845,
            { "./snackbar.component": 5846 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./snackbar.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5846,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = ({ className: e = "", content: t }) => r.default.createElement("div", { className: (0, o.default)("snackbar", e) }, t);
                            i.propTypes = { className: n.default.string, content: n.default.string.isRequired };
                            var l = i;
                            a.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5847,
            { "./spinner.component": 5848 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./spinner.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5848,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ className: e = "", color: t = "var(--color-text-default)" }) =>
                                r.default.createElement(
                                    "div",
                                    { className: `spinner ${e}` },
                                    r.default.createElement(
                                        "svg",
                                        {
                                            className: "lds-spinner",
                                            width: "100%",
                                            height: "100%",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                            viewBox: "0 0 100 100",
                                            preserveAspectRatio: "xMidYMid",
                                            style: { background: "none" },
                                        },
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(0 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.9166666666666666s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(30 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.8333333333333334s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(60 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.75s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(90 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.6666666666666666s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(120 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.5833333333333334s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(150 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.5s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(180 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.4166666666666667s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(210 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.3333333333333333s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(240 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.25s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(270 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.16666666666666666s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(300 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.08333333333333333s", repeatCount: "indefinite" })
                                            )
                                        ),
                                        r.default.createElement(
                                            "g",
                                            { transform: "rotate(330 50 50)" },
                                            r.default.createElement(
                                                "rect",
                                                { x: 45, y: 0, rx: 0, ry: 0, width: 10, height: 30, fill: t },
                                                r.default.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "0s", repeatCount: "indefinite" })
                                            )
                                        )
                                    )
                                );
                            s.propTypes = { className: n.default.string, color: n.default.string };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5849,
            { "../../dropdown": 5735, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.DropdownTab = void 0);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = i(e("../../dropdown"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const l = (e) => {
                                const { activeClassName: t, className: a, "data-testid": n, isActive: i, onClick: l, onChange: u, tabIndex: c, options: d, selectedOption: f } = e;
                                return r.default.createElement(
                                    "li",
                                    {
                                        className: (0, o.default)("tab", a, { "tab--active": i, [t]: t && i }),
                                        "data-testid": n,
                                        onClick: (e) => {
                                            e.preventDefault(), l(c);
                                        },
                                    },
                                    r.default.createElement(s.default, { options: d, selectedOption: f, onChange: u })
                                );
                            };
                            (a.DropdownTab = l),
                                (l.propTypes = {
                                    activeClassName: n.default.string,
                                    className: n.default.string,
                                    "data-testid": n.default.string,
                                    isActive: n.default.bool,
                                    options: n.default.arrayOf(n.default.exact({ name: n.default.string, value: n.default.string.isRequired })).isRequired,
                                    selectedOption: n.default.string,
                                    onChange: n.default.func,
                                    onClick: n.default.func,
                                    tabIndex: n.default.number,
                                }),
                                (l.defaultProps = { activeClassName: undefined, className: undefined, onChange: undefined, onClick: undefined, selectedOption: undefined });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            585,
            {
                "../ButtonBase": 568,
                "../internal/svg-icons/Cancel": 824,
                "../styles/colorManipulator": 849,
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
                "../utils/unsupportedProp": 890,
                "../utils/useForkRef": 893,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = n(e("../internal/svg-icons/Cancel")),
                                c = n(e("../styles/withStyles")),
                                d = e("../styles/colorManipulator"),
                                f = n(e("../utils/useForkRef")),
                                p = (n(e("../utils/unsupportedProp")), n(e("../utils/capitalize"))),
                                m = n(e("../ButtonBase")),
                                g = function (e) {
                                    var t = "light" === e.palette.type ? e.palette.grey[300] : e.palette.grey[700],
                                        a = (0, d.fade)(e.palette.text.primary, 0.26);
                                    return {
                                        root: {
                                            fontFamily: e.typography.fontFamily,
                                            fontSize: e.typography.pxToRem(13),
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: 32,
                                            color: e.palette.getContrastText(t),
                                            backgroundColor: t,
                                            borderRadius: 16,
                                            whiteSpace: "nowrap",
                                            transition: e.transitions.create(["background-color", "box-shadow"]),
                                            cursor: "default",
                                            outline: 0,
                                            textDecoration: "none",
                                            border: "none",
                                            padding: 0,
                                            verticalAlign: "middle",
                                            boxSizing: "border-box",
                                            "&$disabled": { opacity: 0.5, pointerEvents: "none" },
                                            "& $avatar": { marginLeft: 5, marginRight: -6, width: 24, height: 24, color: "light" === e.palette.type ? e.palette.grey[700] : e.palette.grey[300], fontSize: e.typography.pxToRem(12) },
                                            "& $avatarColorPrimary": { color: e.palette.primary.contrastText, backgroundColor: e.palette.primary.dark },
                                            "& $avatarColorSecondary": { color: e.palette.secondary.contrastText, backgroundColor: e.palette.secondary.dark },
                                            "& $avatarSmall": { marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: e.typography.pxToRem(10) },
                                        },
                                        sizeSmall: { height: 24 },
                                        colorPrimary: { backgroundColor: e.palette.primary.main, color: e.palette.primary.contrastText },
                                        colorSecondary: { backgroundColor: e.palette.secondary.main, color: e.palette.secondary.contrastText },
                                        disabled: {},
                                        clickable: {
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "transparent",
                                            cursor: "pointer",
                                            "&:hover, &:focus": { backgroundColor: (0, d.emphasize)(t, 0.08) },
                                            "&:active": { boxShadow: e.shadows[1] },
                                        },
                                        clickableColorPrimary: { "&:hover, &:focus": { backgroundColor: (0, d.emphasize)(e.palette.primary.main, 0.08) } },
                                        clickableColorSecondary: { "&:hover, &:focus": { backgroundColor: (0, d.emphasize)(e.palette.secondary.main, 0.08) } },
                                        deletable: { "&:focus": { backgroundColor: (0, d.emphasize)(t, 0.08) } },
                                        deletableColorPrimary: { "&:focus": { backgroundColor: (0, d.emphasize)(e.palette.primary.main, 0.2) } },
                                        deletableColorSecondary: { "&:focus": { backgroundColor: (0, d.emphasize)(e.palette.secondary.main, 0.2) } },
                                        outlined: {
                                            backgroundColor: "transparent",
                                            border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
                                            "$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: (0, d.fade)(e.palette.text.primary, e.palette.action.hoverOpacity) },
                                            "& $avatar": { marginLeft: 4 },
                                            "& $avatarSmall": { marginLeft: 2 },
                                            "& $icon": { marginLeft: 4 },
                                            "& $iconSmall": { marginLeft: 2 },
                                            "& $deleteIcon": { marginRight: 5 },
                                            "& $deleteIconSmall": { marginRight: 3 },
                                        },
                                        outlinedPrimary: {
                                            color: e.palette.primary.main,
                                            border: "1px solid ".concat(e.palette.primary.main),
                                            "$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: (0, d.fade)(e.palette.primary.main, e.palette.action.hoverOpacity) },
                                        },
                                        outlinedSecondary: {
                                            color: e.palette.secondary.main,
                                            border: "1px solid ".concat(e.palette.secondary.main),
                                            "$clickable&:hover, $clickable&:focus, $deletable&:focus": { backgroundColor: (0, d.fade)(e.palette.secondary.main, e.palette.action.hoverOpacity) },
                                        },
                                        avatar: {},
                                        avatarSmall: {},
                                        avatarColorPrimary: {},
                                        avatarColorSecondary: {},
                                        icon: { color: "light" === e.palette.type ? e.palette.grey[700] : e.palette.grey[300], marginLeft: 5, marginRight: -6 },
                                        iconSmall: { width: 18, height: 18, marginLeft: 4, marginRight: -4 },
                                        iconColorPrimary: { color: "inherit" },
                                        iconColorSecondary: { color: "inherit" },
                                        label: { overflow: "hidden", textOverflow: "ellipsis", paddingLeft: 12, paddingRight: 12, whiteSpace: "nowrap" },
                                        labelSmall: { paddingLeft: 8, paddingRight: 8 },
                                        deleteIcon: { WebkitTapHighlightColor: "transparent", color: a, height: 22, width: 22, cursor: "pointer", margin: "0 5px 0 -6px", "&:hover": { color: (0, d.fade)(a, 0.4) } },
                                        deleteIconSmall: { height: 16, width: 16, marginRight: 4, marginLeft: -4 },
                                        deleteIconColorPrimary: { color: (0, d.fade)(e.palette.primary.contrastText, 0.7), "&:hover, &:active": { color: e.palette.primary.contrastText } },
                                        deleteIconColorSecondary: { color: (0, d.fade)(e.palette.secondary.contrastText, 0.7), "&:hover, &:active": { color: e.palette.secondary.contrastText } },
                                        deleteIconOutlinedColorPrimary: { color: (0, d.fade)(e.palette.primary.main, 0.7), "&:hover, &:active": { color: e.palette.primary.main } },
                                        deleteIconOutlinedColorSecondary: { color: (0, d.fade)(e.palette.secondary.main, 0.7), "&:hover, &:active": { color: e.palette.secondary.main } },
                                    };
                                };
                            function h(e) {
                                return "Backspace" === e.key || "Delete" === e.key;
                            }
                            a.styles = g;
                            var v = i.forwardRef(function (e, t) {
                                    var a = e.avatar,
                                        r = e.classes,
                                        n = e.className,
                                        c = e.clickable,
                                        d = e.color,
                                        g = void 0 === d ? "default" : d,
                                        v = e.component,
                                        C = e.deleteIcon,
                                        b = e.disabled,
                                        y = void 0 !== b && b,
                                        _ = e.icon,
                                        E = e.label,
                                        T = e.onClick,
                                        w = e.onDelete,
                                        k = e.onKeyDown,
                                        O = e.onKeyUp,
                                        P = e.size,
                                        M = void 0 === P ? "medium" : P,
                                        S = e.variant,
                                        x = void 0 === S ? "default" : S,
                                        N = (0, s.default)(e, [
                                            "avatar",
                                            "classes",
                                            "className",
                                            "clickable",
                                            "color",
                                            "component",
                                            "deleteIcon",
                                            "disabled",
                                            "icon",
                                            "label",
                                            "onClick",
                                            "onDelete",
                                            "onKeyDown",
                                            "onKeyUp",
                                            "size",
                                            "variant",
                                        ]),
                                        A = i.useRef(null),
                                        R = (0, f.default)(A, t),
                                        L = function (e) {
                                            e.stopPropagation(), w && w(e);
                                        },
                                        I = !(!1 === c || !T) || c,
                                        F = "small" === M,
                                        D = v || (I ? m.default : "div"),
                                        j = D === m.default ? { component: "div" } : {},
                                        $ = null;
                                    if (w) {
                                        var H = (0, l.default)("default" !== g && ("default" === x ? r["deleteIconColor".concat((0, p.default)(g))] : r["deleteIconOutlinedColor".concat((0, p.default)(g))]), F && r.deleteIconSmall);
                                        $ =
                                            C && i.isValidElement(C)
                                                ? i.cloneElement(C, { className: (0, l.default)(C.props.className, r.deleteIcon, H), onClick: L })
                                                : i.createElement(u.default, { className: (0, l.default)(r.deleteIcon, H), onClick: L });
                                    }
                                    var G = null;
                                    a && i.isValidElement(a) && (G = i.cloneElement(a, { className: (0, l.default)(r.avatar, a.props.className, F && r.avatarSmall, "default" !== g && r["avatarColor".concat((0, p.default)(g))]) }));
                                    var V = null;
                                    return (
                                        _ && i.isValidElement(_) && (V = i.cloneElement(_, { className: (0, l.default)(r.icon, _.props.className, F && r.iconSmall, "default" !== g && r["iconColor".concat((0, p.default)(g))]) })),
                                        i.createElement(
                                            D,
                                            (0, o.default)(
                                                {
                                                    role: I || w ? "button" : undefined,
                                                    className: (0, l.default)(
                                                        r.root,
                                                        n,
                                                        "default" !== g && [r["color".concat((0, p.default)(g))], I && r["clickableColor".concat((0, p.default)(g))], w && r["deletableColor".concat((0, p.default)(g))]],
                                                        "default" !== x && [r.outlined, { primary: r.outlinedPrimary, secondary: r.outlinedSecondary }[g]],
                                                        y && r.disabled,
                                                        F && r.sizeSmall,
                                                        I && r.clickable,
                                                        w && r.deletable
                                                    ),
                                                    "aria-disabled": !!y || undefined,
                                                    tabIndex: I || w ? 0 : undefined,
                                                    onClick: T,
                                                    onKeyDown: function (e) {
                                                        e.currentTarget === e.target && h(e) && e.preventDefault(), k && k(e);
                                                    },
                                                    onKeyUp: function (e) {
                                                        e.currentTarget === e.target && (w && h(e) ? w(e) : "Escape" === e.key && A.current && A.current.blur()), O && O(e);
                                                    },
                                                    ref: R,
                                                },
                                                j,
                                                N
                                            ),
                                            G || V,
                                            i.createElement("span", { className: (0, l.default)(r.label, F && r.labelSmall) }, E),
                                            $
                                        )
                                    );
                                }),
                                C = (0, c.default)(g, { name: "MuiChip" })(v);
                            a.default = C;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5850,
            { "./dropdown-tab": 5849 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = e("./dropdown-tab").DropdownTab;
                            a.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5851,
            { "./dropdown-tab": 5850, "./tab": 5852, "./tabs.component": 5854 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "DropdownTab", {
                                    enumerable: !0,
                                    get: function () {
                                        return o.default;
                                    },
                                }),
                                Object.defineProperty(a, "Tab", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                }),
                                Object.defineProperty(a, "Tabs", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = s(e("./tabs.component")),
                                n = s(e("./tab")),
                                o = s(e("./dropdown-tab"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5852,
            { "./tab.component": 5853 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./tab.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5853,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = (e) => {
                                const { activeClassName: t, className: a, "data-testid": n, isActive: s, name: i, onClick: l, tabIndex: u } = e;
                                return r.default.createElement(
                                    "li",
                                    {
                                        className: (0, o.default)("tab", a, { "tab--active": s, [t]: t && s }),
                                        "data-testid": n,
                                        onClick: (e) => {
                                            e.preventDefault(), l(u);
                                        },
                                    },
                                    r.default.createElement("button", null, i)
                                );
                            };
                            (i.propTypes = {
                                activeClassName: n.default.string,
                                className: n.default.string,
                                "data-testid": n.default.string,
                                isActive: n.default.bool,
                                name: n.default.string.isRequired,
                                onClick: n.default.func,
                                tabIndex: n.default.number,
                            }),
                                (i.defaultProps = { activeClassName: undefined, className: undefined, onClick: undefined });
                            var l = i;
                            a.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5854,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class u extends r.Component {
                                constructor(...e) {
                                    super(...e), l(this, "state", { activeTabIndex: Math.max(this._findChildByName(this.props.defaultActiveTabName), 0) });
                                }
                                handleTabClick(e, t) {
                                    const { onTabClick: a } = this.props,
                                        { activeTabIndex: r } = this.state;
                                    e !== r &&
                                        this.setState({ activeTabIndex: e }, () => {
                                            a && a(t);
                                        });
                                }
                                renderTabs() {
                                    const e = r.default.Children.count(this._getValidChildren());
                                    return r.default.Children.map(this._getValidChildren(), (t, a) => {
                                        const n = null == t ? void 0 : t.props.name;
                                        return t && r.default.cloneElement(t, { onClick: (e) => this.handleTabClick(e, n), tabIndex: a, isActive: e > 1 && a === this.state.activeTabIndex });
                                    });
                                }
                                renderActiveTabContent() {
                                    const e = this._getValidChildren(),
                                        { activeTabIndex: t } = this.state;
                                    if ((Array.isArray(e) && !e[t]) || (!Array.isArray(e) && 0 !== t)) throw new Error(`Tab at index '${t}' does not exist`);
                                    return e[t] ? e[t].props.children : e.props.children;
                                }
                                render() {
                                    const { tabsClassName: e, subHeader: t } = this.props;
                                    return r.default.createElement(
                                        "div",
                                        { className: "tabs" },
                                        r.default.createElement("ul", { className: (0, o.default)("tabs__list", e) }, this.renderTabs()),
                                        t,
                                        r.default.createElement("div", { className: "tabs__content" }, this.renderActiveTabContent())
                                    );
                                }
                                _findChildByName(e) {
                                    return this._getValidChildren().findIndex((t) => (null == t ? void 0 : t.props.name) === e);
                                }
                                _getValidChildren() {
                                    return r.default.Children.toArray(this.props.children).filter(Boolean);
                                }
                            }
                            (a.default = u),
                                l(u, "defaultProps", { defaultActiveTabName: null, onTabClick: null, tabsClassName: undefined, subHeader: null }),
                                l(u, "propTypes", { defaultActiveTabName: n.default.string, onTabClick: n.default.func, children: n.default.node.isRequired, tabsClassName: n.default.string, subHeader: n.default.node });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5855,
            { "./text-field.component": 5856 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./text-field.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5856,
            { "@material-ui/core/TextField": 785, "@material-ui/core/styles": 860, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = e("@material-ui/core/styles"),
                                s = i(e("@material-ui/core/TextField"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l() {
                                return (
                                    (l = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    l.apply(this, arguments)
                                );
                            }
                            const u = { transform: "none", transition: "none", position: "initial", color: "var(--color-text-default)" },
                                c = {
                                    materialLabel: {
                                        "&$materialFocused": { color: "var(--color-text-alternative)" },
                                        "&$materialError": { color: "var(--color-text-alternative)" },
                                        fontWeight: "400",
                                        color: "var(--color-text-alternative)",
                                    },
                                    materialFocused: {},
                                    materialUnderline: { "&:before": { borderBottom: "1px solid var(--color-text-default) !important" }, "&:after": { borderBottom: "2px solid var(--color-primary-default)" } },
                                    materialError: {},
                                    materialWhitePaddedRoot: { color: "var(--color-text-alternative)" },
                                    materialWhitePaddedInput: { padding: "8px", "&::placeholder": { color: "var(--color-text-alternative)" } },
                                    materialWhitePaddedFocused: { color: "var(--color-background-default)" },
                                    materialWhitePaddedUnderline: { "&:after": { borderBottom: "2px solid var(--color-background-default)" } },
                                    formLabel: { "&$formLabelFocused": { color: "var(--color-text-alternative)" }, "&$materialError": { color: "var(--color-text-alternative)" } },
                                    formLabelFocused: {},
                                    inputFocused: {},
                                    inputRoot: {
                                        "label + &": { marginTop: "9px" },
                                        backgroundColor: "var(--color-background-default)",
                                        border: "1px solid var(--color-border-default)",
                                        color: "var(--color-text-default)",
                                        height: "48px",
                                        borderRadius: "6px",
                                        padding: "0 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        "&$inputFocused": { border: "1px solid var(--color-primary-default)" },
                                    },
                                    largeInputLabel: { ...u, fontSize: "1rem" },
                                    inputLabel: { ...u, fontSize: ".75rem" },
                                    inputMultiline: { lineHeight: "initial !important" },
                                },
                                d = {
                                    material: ({ dir: e, classes: { materialLabel: t, materialFocused: a, materialError: r, materialUnderline: n }, startAdornment: o, endAdornment: s, min: i, max: l, autoComplete: u }) => ({
                                        InputLabelProps: { classes: { root: t, focused: a, error: r } },
                                        InputProps: { startAdornment: o, endAdornment: s, classes: { underline: n }, inputProps: { dir: e, min: i, max: l, autoComplete: u } },
                                    }),
                                    bordered: ({
                                        dir: e,
                                        classes: { formLabel: t, formLabelFocused: a, materialError: r, largeInputLabel: n, inputLabel: o, inputRoot: s, input: i, inputFocused: l },
                                        largeLabel: u,
                                        startAdornment: c,
                                        endAdornment: d,
                                        min: f,
                                        max: p,
                                        autoComplete: m,
                                    }) => ({
                                        InputLabelProps: { shrink: !0, className: u ? n : o, classes: { root: t, focused: a, error: r } },
                                        InputProps: { startAdornment: c, endAdornment: d, disableUnderline: !0, classes: { root: s, input: i, focused: l }, inputProps: { dir: e, min: f, max: p, autoComplete: m } },
                                    }),
                                    "material-white-padded": ({
                                        dir: e,
                                        classes: { materialWhitePaddedRoot: t, materialWhitePaddedFocused: a, materialWhitePaddedInput: r, materialWhitePaddedUnderline: n },
                                        startAdornment: o,
                                        endAdornment: s,
                                        min: i,
                                        max: l,
                                        autoComplete: u,
                                    }) => ({ InputProps: { startAdornment: o, endAdornment: s, classes: { root: t, focused: a, input: r, underline: n }, inputProps: { dir: e, min: i, max: l, autoComplete: u } } }),
                                },
                                f = ({ "data-testid": e, error: t, classes: a, theme: n, startAdornment: o, endAdornment: i, largeLabel: u, dir: c, min: f, max: p, autoComplete: m, onPaste: g, ...h }) => {
                                    const v = d[n]({ classes: a, startAdornment: o, endAdornment: i, largeLabel: u, dir: c, min: f, max: p, autoComplete: m });
                                    return (
                                        (g || e) && (v.InputProps || (v.InputProps = {}), v.InputProps.inputProps || (v.InputProps.inputProps = {}), (v.InputProps.inputProps.onPaste = g), (v.InputProps.inputProps["data-testid"] = e)),
                                        r.default.createElement(s.default, l({ error: Boolean(t), helperText: t }, v, h))
                                    );
                                };
                            (f.defaultProps = { error: null, dir: "auto", theme: "bordered" }),
                                (f.propTypes = {
                                    "data-testid": n.default.string,
                                    error: n.default.oneOfType([n.default.string, n.default.element]),
                                    classes: n.default.object,
                                    dir: n.default.string,
                                    theme: n.default.oneOf(["bordered", "material", "material-white-padded"]),
                                    startAdornment: n.default.element,
                                    endAdornment: n.default.element,
                                    largeLabel: n.default.bool,
                                    min: n.default.number,
                                    max: n.default.number,
                                    autoComplete: n.default.string,
                                    onPaste: n.default.func,
                                });
                            var p = (0, o.withStyles)(c)(f);
                            a.default = p;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5857,
            { "../../../helpers/constants/design-system": 5900, "../box": 5707, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = l(e("react")),
                                n = l(e("prop-types")),
                                o = l(e("classnames")),
                                s = e("../../../helpers/constants/design-system"),
                                i = l(e("../box"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u() {
                                return (
                                    (u = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    u.apply(this, arguments)
                                );
                            }
                            const c = ({ className: e, value: t, onChange: a, resize: n = s.RESIZE.BOTH, scrollable: l = !1, height: c, boxProps: d, ...f }) => {
                                const p = (0, o.default)("textarea", e, `textarea--resize-${n}`, { "textarea--scrollable": l, "textarea--not-scrollable": !l });
                                return r.default.createElement(
                                    i.default,
                                    u({ backgroundColor: s.COLORS.BACKGROUND_DEFAULT, borderColor: s.COLORS.BORDER_DEFAULT, borderRadius: s.SIZES.SM, borderStyle: s.BORDER_STYLE.SOLID, padding: 4, width: s.BLOCK_SIZES.FULL }, d),
                                    (e) => r.default.createElement("textarea", u({ required: !0, style: { height: c }, className: (0, o.default)(e, p), value: t, onChange: a }, f))
                                );
                            };
                            c.propTypes = {
                                height: n.default.oneOfType([n.default.string, n.default.number]),
                                className: n.default.string,
                                value: n.default.string,
                                onChange: n.default.func,
                                resize: n.default.oneOf(Object.values(s.RESIZE)),
                                scrollable: n.default.bool,
                                boxProps: n.default.shape({ ...i.default.propTypes }),
                            };
                            var d = c;
                            a.default = d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5858,
            { "./toggle-button.component": 5859 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r;
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var n = ((r = e("./toggle-button.component")) && r.__esModule ? r : { default: r }).default;
                            a.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5859,
            { classnames: 1772, "prop-types": 4806, react: 4980, "react-toggle-button": 4972 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("react-toggle-button")),
                                s = i(e("classnames"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const l = { width: "40px", height: "24px", padding: "0px", borderRadius: "26px", border: "2px solid var(--color-primary-default)", display: "flex", alignItems: "center", justifyContent: "center" },
                                u = { ...l, border: "2px solid var(--color-border-default)" },
                                c = { width: "18px", height: "18px", display: "flex", boxShadow: "none", alignSelf: "center", borderRadius: "50%", position: "relative" },
                                d = { activeThumb: { base: "#037DD6" }, inactiveThumb: { base: "#6A737D" }, active: { base: "#F2F4F6", hover: "#F2F4F6" }, inactive: { base: "#F2F4F6", hover: "#F2F4F6" } },
                                f = (e) => {
                                    const { value: t, onToggle: a, offLabel: n, onLabel: i, disabled: f, className: p } = e,
                                        m = t ? "on" : "off";
                                    return r.default.createElement(
                                        "label",
                                        {
                                            tabIndex: "0",
                                            onKeyDown: (e) => {
                                                "Enter" === e.key && a(t);
                                            },
                                            className: (0, s.default)("toggle-button", `toggle-button--${m}`, { "toggle-button--disabled": f }, p),
                                        },
                                        r.default.createElement(o.default, { value: t, onToggle: f ? undefined : a, activeLabel: "", inactiveLabel: "", trackStyle: t ? l : u, thumbStyle: c, thumbAnimateRange: [3, 18], colors: d }),
                                        r.default.createElement(
                                            "div",
                                            { className: "toggle-button__status" },
                                            r.default.createElement("span", { className: "toggle-button__label-off" }, n),
                                            r.default.createElement("span", { className: "toggle-button__label-on" }, i)
                                        )
                                    );
                                };
                            f.propTypes = { value: n.default.bool, onToggle: n.default.func, offLabel: n.default.string, onLabel: n.default.string, disabled: n.default.bool, className: n.default.string };
                            var p = f;
                            a.default = p;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            586,
            { "./Chip": 585, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./Chip"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5860,
            { "./token-balance": 5861 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./token-balance")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5861,
            { "../../../hooks/useTokenTracker": 5970, "../currency-display": 5727, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("../currency-display")),
                                s = e("../../../hooks/useTokenTracker");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l({ className: e, token: t }) {
                                const { tokensWithBalances: a } = (0, s.useTokenTracker)([t]),
                                    { string: n, symbol: i } = a[0] || {};
                                return r.default.createElement(o.default, { className: e, displayValue: n || "", suffix: i || "" });
                            }
                            (l.propTypes = { className: n.default.string, token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string }).isRequired }),
                                (l.defaultProps = { className: undefined });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5862,
            { "./token-input.container": 5864 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./token-input.container")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5863,
            {
                "../../../../app/scripts/lib/util": 86,
                "../../../../shared/modules/conversion.utils": 5351,
                "../../../../shared/modules/string-utils": 5361,
                "../../../helpers/constants/common": 5898,
                "../../../helpers/utils/conversions.util": 5920,
                "../currency-display": 5727,
                "../unit-input": 5871,
                "bignumber.js": 1637,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = m(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = p(e("prop-types")),
                                o = p(e("bignumber.js")),
                                s = p(e("../unit-input")),
                                i = p(e("../currency-display")),
                                l = e("../../../helpers/utils/conversions.util"),
                                u = e("../../../../shared/modules/conversion.utils"),
                                c = e("../../../helpers/constants/common"),
                                d = e("../../../../app/scripts/lib/util"),
                                f = e("../../../../shared/modules/string-utils");
                            function p(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (m = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function g() {
                                return (
                                    (g = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    g.apply(this, arguments)
                                );
                            }
                            function h(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class v extends r.PureComponent {
                                constructor(e) {
                                    super(e),
                                        h(this, "handleChange", (e, t = !1) => {
                                            const { token: { decimals: a } = {}, onChange: r } = this.props;
                                            let n = e;
                                            a && e && t && (n = new o.default(e, 10).toFixed(a));
                                            const s = Math.pow(10, Number(a || 0)),
                                                i = (0, u.multiplyCurrencies)(n || 0, s, { multiplicandBase: 10, multiplierBase: 10, toNumericBase: "hex" });
                                            this.setState({ hexValue: i, decimalValue: e }), r(i);
                                        }),
                                        h(this, "handleBlur", (e) => {
                                            this.handleChange(e, !0);
                                        });
                                    const { value: t } = e,
                                        a = t ? this.getValue(e) : 0;
                                    this.state = { decimalValue: a, hexValue: t };
                                }
                                componentDidUpdate(e) {
                                    const { value: t } = e,
                                        { value: a } = this.props,
                                        { hexValue: r } = this.state;
                                    if (t !== a && a !== r) {
                                        const e = this.getValue(this.props);
                                        this.setState({ hexValue: a, decimalValue: e });
                                    }
                                }
                                getValue(e) {
                                    const { value: t, token: { decimals: a, symbol: r } = {} } = e,
                                        n = Math.pow(10, Number(a || 0)),
                                        o = (0, u.conversionUtil)((0, d.addHexPrefix)(t), { fromNumericBase: "hex", toNumericBase: "dec", toCurrency: r, conversionRate: n, invertConversionRate: !0 });
                                    return Number(o) ? o : "";
                                }
                                renderConversionComponent() {
                                    var e;
                                    const { tokenExchangeRates: t, showFiat: a, currentCurrency: n, hideConversion: o, token: s, tokens: u } = this.props,
                                        { decimalValue: d } = this.state,
                                        p = u.find(({ address: e }) => (0, f.isEqualCaseInsensitive)(e, s.address)),
                                        m = null !== (e = null == t ? void 0 : t[null == p ? void 0 : p.address]) && void 0 !== e ? e : 0;
                                    let g, h;
                                    if (o) return r.default.createElement("div", { className: "currency-input__conversion-component" }, this.context.t("noConversionRateAvailable"));
                                    a ? ((g = n), (h = 2)) : ((g = c.ETH), (h = 6));
                                    const v = d * m || 0,
                                        C = (0, l.getWeiHexFromDecimalValue)({ value: v, fromCurrency: c.ETH, fromDenomination: c.ETH });
                                    return m
                                        ? r.default.createElement(i.default, { className: "currency-input__conversion-component", currency: g, value: C, numberOfDecimals: h })
                                        : r.default.createElement("div", { className: "currency-input__conversion-component" }, this.context.t("noConversionRateAvailable"));
                                }
                                render() {
                                    const { token: e, ...t } = this.props,
                                        { decimalValue: a } = this.state;
                                    return r.default.createElement(s.default, g({}, t, { suffix: e.symbol, onChange: this.handleChange, onBlur: this.handleBlur, value: a }), this.renderConversionComponent());
                                }
                            }
                            (a.default = v),
                                h(v, "contextTypes", { t: n.default.func }),
                                h(v, "propTypes", {
                                    currentCurrency: n.default.string,
                                    onChange: n.default.func,
                                    value: n.default.string,
                                    showFiat: n.default.bool,
                                    hideConversion: n.default.bool,
                                    token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string }).isRequired,
                                    tokenExchangeRates: n.default.object,
                                    tokens: n.default.array.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5864,
            { "../../../selectors": 6300, "./token-input.component": 5863, "prop-types": 4806, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = e("react-redux"),
                                n = i(e("prop-types")),
                                o = e("../../../selectors"),
                                s = i(e("./token-input.component"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const l = (0, r.connect)((e) => {
                                const {
                                    metamask: { currentCurrency: t, tokens: a },
                                } = e;
                                return { currentCurrency: t, tokenExchangeRates: (0, o.getTokenExchangeRates)(e), hideConversion: !(0, o.getShouldShowFiat)(e), tokens: a };
                            })(s.default);
                            l.propTypes = { token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string }).isRequired };
                            var u = l;
                            a.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5865,
            { "./tooltip": 5866 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./tooltip")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5866,
            { "prop-types": 4806, react: 4980, "react-tippy": 4970 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                s = e("react-tippy");
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class u extends o.PureComponent {
                                render() {
                                    const {
                                        arrow: e,
                                        children: t,
                                        containerClassName: a,
                                        disabled: r,
                                        position: n,
                                        html: i,
                                        interactive: l,
                                        size: u,
                                        title: c,
                                        trigger: d,
                                        onHidden: f,
                                        offset: p,
                                        open: m,
                                        wrapperClassName: g,
                                        style: h,
                                        theme: v,
                                        tabIndex: C,
                                        tag: b,
                                    } = this.props;
                                    return c || i
                                        ? o.default.createElement(
                                              b,
                                              { className: g },
                                              o.default.createElement(
                                                  s.Tooltip,
                                                  {
                                                      arrow: e,
                                                      className: a,
                                                      disabled: r,
                                                      hideOnClick: !1,
                                                      html: i,
                                                      interactive: l,
                                                      onHidden: f,
                                                      position: n,
                                                      size: u,
                                                      offset: p,
                                                      style: h,
                                                      title: r ? "" : c,
                                                      trigger: d,
                                                      open: m,
                                                      theme: `tippy-tooltip--mm-custom ${v}`,
                                                      tabIndex: C || 0,
                                                      tag: b,
                                                  },
                                                  t
                                              )
                                          )
                                        : o.default.createElement("div", { className: g }, t);
                                }
                            }
                            (a.default = u),
                                l(u, "defaultProps", {
                                    arrow: !0,
                                    children: null,
                                    containerClassName: "",
                                    html: null,
                                    interactive: undefined,
                                    onHidden: null,
                                    position: "left",
                                    offset: 0,
                                    open: undefined,
                                    size: "small",
                                    title: null,
                                    trigger: "mouseenter focus",
                                    wrapperClassName: undefined,
                                    theme: "",
                                    tag: "div",
                                }),
                                l(u, "propTypes", {
                                    arrow: n.default.bool,
                                    children: n.default.node,
                                    containerClassName: n.default.string,
                                    disabled: n.default.bool,
                                    html: n.default.node,
                                    interactive: n.default.bool,
                                    offset: n.default.number,
                                    onHidden: n.default.func,
                                    open: n.default.bool,
                                    position: n.default.oneOf(["top", "right", "bottom", "left"]),
                                    size: n.default.oneOf(["small", "regular", "big"]),
                                    title: n.default.string,
                                    trigger: n.default.any,
                                    wrapperClassName: n.default.string,
                                    style: n.default.object,
                                    theme: n.default.string,
                                    tabIndex: n.default.number,
                                    tag: n.default.string,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5867,
            { "./truncated-definition-list": 5868 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./truncated-definition-list")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5868,
            {
                "../../../helpers/constants/design-system": 5900,
                "../../../hooks/useI18nContext": 5957,
                "../box": 5707,
                "../button": 5711,
                "../definition-list/definition-list": 5728,
                "../popover": 5828,
                lodash: 4694,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = m);
                            var r = e("lodash"),
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = p(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = f(e("prop-types")),
                                s = e("../../../helpers/constants/design-system"),
                                i = f(e("../box")),
                                l = f(e("../button")),
                                u = f(e("../definition-list/definition-list")),
                                c = f(e("../popover")),
                                d = e("../../../hooks/useI18nContext");
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (p = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function m({ dictionary: e, tooltips: t, prefaceKeys: a, title: o }) {
                                const [f, p] = (0, n.useState)(!1),
                                    m = (0, d.useI18nContext)();
                                return n.default.createElement(
                                    n.default.Fragment,
                                    null,
                                    n.default.createElement(
                                        i.default,
                                        { margin: 6, padding: 4, paddingBottom: 3, borderRadius: s.SIZES.LG, borderColor: s.COLORS.BORDER_MUTED },
                                        n.default.createElement(u.default, { dictionary: (0, r.pick)(e, a), tooltips: t }),
                                        n.default.createElement(l.default, { className: "truncated-definition-list__view-more", type: "link", onClick: () => p(!0) }, m("viewAllDetails"))
                                    ),
                                    f &&
                                        n.default.createElement(
                                            c.default,
                                            {
                                                title: o,
                                                open: f,
                                                onClose: () => p(!1),
                                                footer: n.default.createElement(
                                                    n.default.Fragment,
                                                    null,
                                                    n.default.createElement("div", null),
                                                    n.default.createElement(l.default, { type: "primary", style: { width: "50%" }, onClick: () => p(!1) }, "Close")
                                                ),
                                            },
                                            n.default.createElement(i.default, { padding: 6, paddingTop: 0 }, n.default.createElement(u.default, { gap: s.SIZES.MD, tooltips: t, dictionary: e }))
                                        )
                                );
                            }
                            m.propTypes = { dictionary: u.default.propTypes.dictionary, tooltips: u.default.propTypes.dictionary, title: o.default.string, prefaceKeys: o.default.arrayOf(o.default.string) };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5869,
            { "./typography": 5870 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./typography")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            587,
            {
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                "@material-ui/utils": 959,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = r(e("react")),
                                l = (n(e("prop-types")), n(e("clsx"))),
                                u = (e("@material-ui/utils"), n(e("../styles/withStyles"))),
                                c = n(e("../utils/capitalize")),
                                d = 44;
                            function f(e) {
                                var t, a, r;
                                return (t = e), (a = 0), (r = 1), (e = (Math.min(Math.max(a, t), r) - a) / (r - a)), (e = (e -= 1) * e * e + 1);
                            }
                            var p = function (e) {
                                return {
                                    root: { display: "inline-block" },
                                    static: { transition: e.transitions.create("transform") },
                                    indeterminate: { animation: "$circular-rotate 1.4s linear infinite" },
                                    colorPrimary: { color: e.palette.primary.main },
                                    colorSecondary: { color: e.palette.secondary.main },
                                    svg: { display: "block" },
                                    circle: { stroke: "currentColor" },
                                    circleStatic: { transition: e.transitions.create("stroke-dashoffset") },
                                    circleIndeterminate: { animation: "$circular-dash 1.4s ease-in-out infinite", strokeDasharray: "80px, 200px", strokeDashoffset: "0px" },
                                    "@keyframes circular-rotate": { "0%": { transformOrigin: "50% 50%" }, "100%": { transform: "rotate(360deg)" } },
                                    "@keyframes circular-dash": {
                                        "0%": { strokeDasharray: "1px, 200px", strokeDashoffset: "0px" },
                                        "50%": { strokeDasharray: "100px, 200px", strokeDashoffset: "-15px" },
                                        "100%": { strokeDasharray: "100px, 200px", strokeDashoffset: "-125px" },
                                    },
                                    circleDisableShrink: { animation: "none" },
                                };
                            };
                            a.styles = p;
                            var m = i.forwardRef(function (e, t) {
                                    var a,
                                        r = e.classes,
                                        n = e.className,
                                        u = e.color,
                                        p = void 0 === u ? "primary" : u,
                                        m = e.disableShrink,
                                        g = void 0 !== m && m,
                                        h = e.size,
                                        v = void 0 === h ? 40 : h,
                                        C = e.style,
                                        b = e.thickness,
                                        y = void 0 === b ? 3.6 : b,
                                        _ = e.value,
                                        E = void 0 === _ ? 0 : _,
                                        T = e.variant,
                                        w = void 0 === T ? "indeterminate" : T,
                                        k = (0, s.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                                        O = {},
                                        P = {},
                                        M = {};
                                    if ("determinate" === w || "static" === w) {
                                        var S = 2 * Math.PI * ((d - y) / 2);
                                        (O.strokeDasharray = S.toFixed(3)),
                                            (M["aria-valuenow"] = Math.round(E)),
                                            "static" === w
                                                ? ((O.strokeDashoffset = "".concat((((100 - E) / 100) * S).toFixed(3), "px")), (P.transform = "rotate(-90deg)"))
                                                : ((O.strokeDashoffset = "".concat(((a = (100 - E) / 100), a * a * S).toFixed(3), "px")), (P.transform = "rotate(".concat((270 * f(E / 70)).toFixed(3), "deg)")));
                                    }
                                    return i.createElement(
                                        "div",
                                        (0, o.default)(
                                            {
                                                className: (0, l.default)(r.root, n, "inherit" !== p && r["color".concat((0, c.default)(p))], { indeterminate: r.indeterminate, static: r.static }[w]),
                                                style: (0, o.default)({ width: v, height: v }, P, C),
                                                ref: t,
                                                role: "progressbar",
                                            },
                                            M,
                                            k
                                        ),
                                        i.createElement(
                                            "svg",
                                            { className: r.svg, viewBox: "".concat(22, " ").concat(22, " ").concat(d, " ").concat(d) },
                                            i.createElement("circle", {
                                                className: (0, l.default)(r.circle, g && r.circleDisableShrink, { indeterminate: r.circleIndeterminate, static: r.circleStatic }[w]),
                                                style: O,
                                                cx: d,
                                                cy: d,
                                                r: (d - y) / 2,
                                                fill: "none",
                                                strokeWidth: y,
                                            })
                                        )
                                    );
                                }),
                                g = (0, u.default)(p, { name: "MuiCircularProgress", flip: !1 })(m);
                            a.default = g;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5870,
            { "../../../helpers/constants/design-system": 5900, "../box": 5707, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.ValidTags = a.ValidColors = void 0), (a.default = v);
                            var r = u(e("react")),
                                n = u(e("classnames")),
                                o = u(e("prop-types")),
                                s = e("../../../helpers/constants/design-system"),
                                i = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = l(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("../box"));
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (l = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c() {
                                return (
                                    (c = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var a = arguments[t];
                                                  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                              }
                                              return e;
                                          }),
                                    c.apply(this, arguments)
                                );
                            }
                            const { H6: d, H7: f, H8: p, H9: m } = s.TYPOGRAPHY,
                                g = [
                                    s.COLORS.TEXT_DEFAULT,
                                    s.COLORS.TEXT_ALTERNATIVE,
                                    s.COLORS.TEXT_MUTED,
                                    s.COLORS.OVERLAY_INVERSE,
                                    s.COLORS.PRIMARY_DEFAULT,
                                    s.COLORS.PRIMARY_INVERSE,
                                    s.COLORS.ERROR_DEFAULT,
                                    s.COLORS.ERROR_INVERSE,
                                    s.COLORS.SUCCESS_DEFAULT,
                                    s.COLORS.SUCCESS_INVERSE,
                                    s.COLORS.WARNING_DEFAULT,
                                    s.COLORS.WARNING_INVERSE,
                                    s.COLORS.INFO_DEFAULT,
                                    s.COLORS.INFO_INVERSE,
                                ];
                            a.ValidColors = g;
                            const h = ["dd", "div", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "span", "strong", "ul", "label"];
                            function v({
                                variant: e = s.TYPOGRAPHY.Paragraph,
                                color: t = s.COLORS.TEXT_DEFAULT,
                                fontWeight: a = "normal",
                                fontStyle: o = "normal",
                                align: l,
                                overflowWrap: u,
                                title: g,
                                as: h,
                                margin: v,
                                marginTop: C = 1,
                                marginRight: b,
                                marginBottom: y = 1,
                                marginLeft: _,
                                boxProps: E = {},
                                className: T,
                                children: w,
                            }) {
                                let k,
                                    O = null != h ? h : e;
                                "strong" === O && (k = s.FONT_WEIGHT.BOLD);
                                const P = (0, n.default)("typography", T, `typography--${e}`, `typography--weight-${k || a}`, `typography--style-${o}`, {
                                    [`typography--align-${l}`]: Boolean(l),
                                    [`typography--color-${t}`]: Boolean(t),
                                    [`typography--overflowwrap-${u}`]: Boolean(u),
                                });
                                return (
                                    O === s.TYPOGRAPHY.Paragraph ? (O = "p") : [f, p, m].includes(O) && (O = d),
                                    r.default.createElement(i.default, c({ margin: v, marginTop: C, marginRight: b, marginBottom: y, marginLeft: _ }, E), (e) => r.default.createElement(O, { className: (0, n.default)(e, P), title: g }, w))
                                );
                            }
                            (a.ValidTags = h),
                                (v.propTypes = {
                                    variant: o.default.oneOf(Object.values(s.TYPOGRAPHY)),
                                    color: o.default.oneOf(g),
                                    fontWeight: o.default.oneOf(Object.values(s.FONT_WEIGHT)),
                                    fontStyle: o.default.oneOf(Object.values(s.FONT_STYLE)),
                                    align: o.default.oneOf(Object.values(s.TEXT_ALIGN)),
                                    overflowWrap: o.default.oneOf(Object.values(s.OVERFLOW_WRAP)),
                                    as: o.default.oneOf(h),
                                    margin: i.MultipleSizesAndAuto,
                                    marginTop: i.MultipleSizesAndAuto,
                                    marginBottom: i.MultipleSizesAndAuto,
                                    marginRight: i.MultipleSizesAndAuto,
                                    marginLeft: i.MultipleSizesAndAuto,
                                    boxProps: o.default.shape({ ...i.default.propTypes }),
                                    className: o.default.string,
                                    title: o.default.string,
                                    children: o.default.node.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5871,
            { "./unit-input.component": 5872 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./unit-input.component")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5872,
            { classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("classnames"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            class u extends r.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        l(this, "state", { value: this.props.value }),
                                        l(this, "handleFocus", () => {
                                            this.unitInput.focus();
                                        }),
                                        l(this, "handleInputFocus", ({ target: { value: e } }) => {
                                            "0" === e && this.setState({ value: "" });
                                        }),
                                        l(this, "handleInputBlur", ({ target: { value: e } }) => {
                                            "" === e && this.setState({ value: "0" }), this.props.onBlur && this.props.onBlur(e);
                                        }),
                                        l(this, "handleChange", (e) => {
                                            const { value: t } = e.target;
                                            let a = t;
                                            t.length && t.length > 1 && (a = t.replace(/^0*(?=\d)/u, "")), this.setState({ value: a }), this.props.onChange(a);
                                        });
                                }
                                componentDidUpdate(e) {
                                    const { value: t } = e,
                                        { value: a } = this.props,
                                        { value: r } = this.state;
                                    t !== a && a !== r && this.setState({ value: a });
                                }
                                getInputWidth(e) {
                                    const t = String(e);
                                    return `${(t.length || 1) + (t.match(/\./u) ? -0.5 : 0) + 0.5}ch`;
                                }
                                render() {
                                    const { error: e, placeholder: t, suffix: a, actionComponent: n, children: s, dataTestId: i } = this.props,
                                        { value: l } = this.state;
                                    return r.default.createElement(
                                        "div",
                                        { className: (0, o.default)("unit-input", { "unit-input--error": e }), onClick: this.handleFocus },
                                        r.default.createElement(
                                            "div",
                                            { className: "unit-input__inputs" },
                                            r.default.createElement(
                                                "div",
                                                { className: "unit-input__input-container" },
                                                r.default.createElement("input", {
                                                    "data-testid": i,
                                                    type: "number",
                                                    dir: "ltr",
                                                    className: (0, o.default)("unit-input__input"),
                                                    value: l,
                                                    placeholder: t,
                                                    onChange: this.handleChange,
                                                    onBlur: this.handleInputBlur,
                                                    onFocus: this.handleInputFocus,
                                                    style: { width: this.getInputWidth(l) },
                                                    ref: (e) => {
                                                        this.unitInput = e;
                                                    },
                                                    autoFocus: !0,
                                                }),
                                                a ? r.default.createElement("div", { className: "unit-input__suffix" }, a) : null
                                            ),
                                            s
                                        ),
                                        n
                                    );
                                }
                            }
                            (a.default = u),
                                l(u, "propTypes", {
                                    dataTestId: n.default.string,
                                    children: n.default.node,
                                    actionComponent: n.default.node,
                                    error: n.default.bool,
                                    onChange: n.default.func,
                                    onBlur: n.default.func,
                                    placeholder: n.default.string,
                                    suffix: n.default.string,
                                    value: n.default.oneOfType([n.default.string, n.default.number]),
                                }),
                                l(u, "defaultProps", { value: "", placeholder: "0" });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5873,
            { "../../../contexts/i18n": 5877, "../../../selectors": 6300, "../button": 5711, "../identicon": 5785, "../popover": 5828, "../text-field": 5855, "prop-types": 4806, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = m);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = p(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = e("react-redux"),
                                o = f(e("prop-types")),
                                s = f(e("../popover")),
                                i = f(e("../button")),
                                l = f(e("../text-field")),
                                u = e("../../../contexts/i18n"),
                                c = f(e("../identicon")),
                                d = e("../../../selectors");
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (p = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function m({ address: e, nickname: t = "", memo: a = "", onAdd: o, onClose: f }) {
                                var p;
                                const m = (0, r.useContext)(u.I18nContext),
                                    [g, h] = (0, r.useState)(null === t ? "" : t),
                                    [v, C] = (0, r.useState)(null === a ? "" : a),
                                    b = (0, r.useCallback)(() => {
                                        f();
                                    }, [f]),
                                    y = (0, n.useSelector)(d.getTokenList);
                                return r.default.createElement(
                                    s.default,
                                    {
                                        title: m(t ? "editAddressNickname" : "addANickname"),
                                        onClose: b,
                                        className: "update-nickname__wrapper",
                                        footer: r.default.createElement(
                                            r.default.Fragment,
                                            null,
                                            r.default.createElement(
                                                i.default,
                                                {
                                                    className: "update-nickname__cancel",
                                                    type: "secondary",
                                                    onClick: () => {
                                                        f();
                                                    },
                                                },
                                                m("cancel")
                                            ),
                                            r.default.createElement(
                                                i.default,
                                                {
                                                    className: "update-nickname__save",
                                                    type: "primary",
                                                    onClick: () => {
                                                        o(e, g, v), f();
                                                    },
                                                    disabled: !g,
                                                },
                                                m("save")
                                            )
                                        ),
                                    },
                                    r.default.createElement(
                                        "div",
                                        { className: "update-nickname__content" },
                                        r.default.createElement(c.default, { className: "update-nickname__content__indenticon", address: e, diameter: 36, image: null === (p = y[e.toLowerCase()]) || void 0 === p ? void 0 : p.iconUrl }),
                                        r.default.createElement("label", { className: "update-nickname__content__label--capitalized" }, m("address")),
                                        r.default.createElement("div", { className: "update-nickname__content__address" }, e),
                                        r.default.createElement("div", { className: "update-nickname__content__nickname-label" }, m("nickname")),
                                        r.default.createElement(l.default, {
                                            className: "update-nickname__content__text-field",
                                            value: g,
                                            onChange: (e) => {
                                                h(e.target.value);
                                            },
                                            placeholder: m("addANickname"),
                                            fullWidth: !0,
                                        }),
                                        r.default.createElement("div", { className: "update-nickname__content__label--capitalized" }, m("memo")),
                                        r.default.createElement(l.default, {
                                            type: "text",
                                            id: "memo",
                                            value: v,
                                            onChange: (e) => {
                                                C(e.target.value);
                                            },
                                            placeholder: m("addMemo"),
                                            fullWidth: !0,
                                            margin: "dense",
                                            multiline: !0,
                                            rows: 3,
                                            classes: { inputMultiline: "update-nickname__content__text-area", inputRoot: "update-nickname__content__text-area-wrapper" },
                                        })
                                    )
                                );
                            }
                            m.propTypes = { nickname: o.default.string, address: o.default.string, memo: o.default.string, onAdd: o.default.func, onClose: o.default.func };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5874,
            { "./url-icon": 5875 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./url-icon")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5875,
            { "../icon-with-fallback": 5751, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = i(e("../icon-with-fallback"));
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l({ url: e, className: t, name: a, fallbackClassName: n }) {
                                return r.default.createElement(s.default, { className: (0, o.default)("url-icon", t), icon: e, name: a, fallbackClassName: (0, o.default)("url-icon__fallback", n) });
                            }
                            l.propTypes = { url: n.default.string, className: n.default.string, name: n.default.string, fallbackClassName: n.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5876,
            { "../hooks/gasFeeInput/useGasFeeInputs": 5941, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.GasFeeContextProvider = a.GasFeeContext = void 0),
                                (a.useGasFeeContext = function () {
                                    return (0, n.useContext)(l);
                                });
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = i(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("../hooks/gasFeeInput/useGasFeeInputs");
                            function i(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (i = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const l = (0, n.createContext)({});
                            a.GasFeeContext = l;
                            const u = ({ children: e, defaultEstimateToUse: t, transaction: a, minimumGasLimit: r, editGasMode: o }) => {
                                const i = (0, s.useGasFeeInputs)(t, a, r, o);
                                return n.default.createElement(l.Provider, { value: i }, e);
                            };
                            (a.GasFeeContextProvider = u),
                                (u.propTypes = { children: o.default.node.isRequired, defaultEstimateToUse: o.default.string, transaction: o.default.object, minimumGasLimit: o.default.string, editGasMode: o.default.string });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5877,
            { "../ducks/locale/locale": 5891, "../ducks/metamask/metamask": 5892, "../helpers/utils/i18n-helper": 5925, "prop-types": 4806, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.LegacyI18nProvider = a.I18nProvider = a.I18nContext = void 0);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = c(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("react-redux"),
                                i = e("../helpers/utils/i18n-helper"),
                                l = e("../ducks/metamask/metamask"),
                                u = e("../ducks/locale/locale");
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (c = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function d(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            const f = (0, n.createContext)((e) => `[${e}]`);
                            a.I18nContext = f;
                            const p = (e) => {
                                const t = (0, s.useSelector)(l.getCurrentLocale),
                                    a = (0, s.useSelector)(u.getCurrentLocaleMessages),
                                    r = (0, s.useSelector)(u.getEnLocaleMessages),
                                    o = (0, n.useMemo)(() => (e, ...n) => (0, i.getMessage)(t, a, e, ...n) || (0, i.getMessage)(t, r, e, ...n), [t, a, r]);
                                return n.default.createElement(f.Provider, { value: o }, e.children);
                            };
                            (a.I18nProvider = p), (p.propTypes = { children: o.default.node }), (p.defaultProps = { children: undefined });
                            class m extends n.Component {
                                getChildContext() {
                                    return { t: this.context };
                                }
                                render() {
                                    return this.props.children;
                                }
                            }
                            (a.LegacyI18nProvider = m), d(m, "propTypes", { children: o.default.node }), d(m, "defaultProps", { children: undefined }), d(m, "contextType", f), d(m, "childContextTypes", { t: o.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5878,
            {
                "../../app/scripts/lib/util": 86,
                "../../shared/constants/metametrics": 5332,
                "../helpers/constants/routes": 5904,
                "../hooks/useSegmentContext": 5962,
                "../store/actions": 6307,
                "@sentry/browser": 1229,
                lodash: 4694,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.MetaMetricsContext = a.LegacyMetaMetricsProvider = void 0), (a.MetaMetricsProvider = C);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = m(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("react-router-dom"),
                                i = e("@sentry/browser"),
                                l = e("lodash"),
                                u = e("../../app/scripts/lib/util"),
                                c = e("../helpers/constants/routes"),
                                d = e("../../shared/constants/metametrics"),
                                f = e("../hooks/useSegmentContext"),
                                p = e("../store/actions");
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (m = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function g(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
                            }
                            const h = (0, n.createContext)(() => {
                                (0, i.captureException)(Error("MetaMetrics context function was called from a react node that is not a descendant of a MetaMetrics context provider"));
                            });
                            a.MetaMetricsContext = h;
                            const v = Object.keys(c.PATH_NAME_MAP);
                            function C({ children: e }) {
                                const t = (0, s.useLocation)(),
                                    a = (0, f.useSegmentContext)(),
                                    r = (0, n.useCallback)(
                                        (e, t) => {
                                            ((e, t) => {
                                                const r = null == t ? void 0 : t.contextPropsIntoEventProperties;
                                                var n;
                                                r &&
                                                    0 !== r.length &&
                                                    (e.properties || (e.properties = {}), r.includes(d.CONTEXT_PROPS.PAGE_TITLE) && (e.properties[d.CONTEXT_PROPS.PAGE_TITLE] = null === (n = a.page) || void 0 === n ? void 0 : n.title));
                                            })(e, t),
                                                (0, p.trackMetaMetricsEvent)({ ...e, environmentType: (0, u.getEnvironmentType)(), ...a }, t);
                                        },
                                        [a]
                                    ),
                                    o = (0, n.useRef)();
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = (0, u.getEnvironmentType)(),
                                            r = (0, s.matchPath)(t.pathname, { path: v, exact: !0, strict: !0 });
                                        if (r) {
                                            if (o.current !== r.path && ("notification" !== e || "/" !== r.path || o.current !== undefined)) {
                                                const { path: n, params: o } = r,
                                                    s = c.PATH_NAME_MAP[n];
                                                (0, p.trackMetaMetricsPage)(
                                                    { name: s, params: (0, l.omit)(o, ["account", "address"]), environmentType: e, page: a.page, referrer: a.referrer },
                                                    { isOptInPath: t.pathname.startsWith("/initialize") }
                                                );
                                            }
                                        } else (0, i.captureMessage)("Segment page tracking found unmatched route", { extra: { previousMatch: o, currentPath: t.pathname } });
                                        o.current = null == r ? void 0 : r.path;
                                    }, [t, a]),
                                    n.default.createElement(h.Provider, { value: r }, e)
                                );
                            }
                            C.propTypes = { children: o.default.node };
                            class b extends n.Component {
                                getChildContext() {
                                    return { trackEvent: this.context };
                                }
                                render() {
                                    return this.props.children;
                                }
                            }
                            (a.LegacyMetaMetricsProvider = b),
                                g(b, "propTypes", { children: o.default.node }),
                                g(b, "defaultProps", { children: undefined }),
                                g(b, "contextType", h),
                                g(b, "childContextTypes", { trackEvent: o.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5879,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.TransactionModalContextProvider = a.TransactionModalContext = void 0),
                                (a.useTransactionModalContext = function () {
                                    return (0, n.useContext)(i);
                                });
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = s(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r };
                            function s(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (s = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const i = (0, n.createContext)({});
                            a.TransactionModalContext = i;
                            const l = ({ children: e }) => {
                                const [t, a] = (0, n.useState)([]);
                                return n.default.createElement(
                                    i.Provider,
                                    {
                                        value: {
                                            closeModal: (e) => {
                                                if (t < 0) return;
                                                const r = [...t];
                                                e.forEach((e) => {
                                                    const a = t.indexOf(e);
                                                    r.splice(a, 1);
                                                }),
                                                    a(r);
                                            },
                                            closeAllModals: () => {
                                                a([]);
                                            },
                                            currentModal: t[t.length - 1],
                                            openModal: (e) => {
                                                if (t.includes(e)) return;
                                                const r = [...t];
                                                r.push(e), a(r);
                                            },
                                            openModalCount: t.length,
                                        },
                                    },
                                    e
                                );
                            };
                            (a.TransactionModalContextProvider = l), (l.propTypes = { children: o.default.node.isRequired });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            588,
            { "./CircularProgress": 587, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CircularProgress"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5881,
            { "./enums": 5880, "./invalid-custom-network": 5882, "./unconnected-account": 5883 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "ALERT_STATE", {
                                    enumerable: !0,
                                    get: function () {
                                        return o.ALERT_STATE;
                                    },
                                }),
                                Object.defineProperty(a, "invalidCustomNetwork", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                }),
                                Object.defineProperty(a, "unconnectedAccount", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = s(e("./unconnected-account")),
                                n = s(e("./invalid-custom-network")),
                                o = e("./enums");
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5882,
            { "../../../shared/constants/alerts": 5327, "./enums": 5880, "@reduxjs/toolkit": 1220 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.openAlert = a.getNetworkName = a.getAlertState = a.dismissAlert = a.default = a.alertIsOpen = void 0);
                            var r = e("@reduxjs/toolkit"),
                                n = e("../../../shared/constants/alerts"),
                                o = e("./enums");
                            const s = n.ALERT_TYPES.invalidCustomNetwork,
                                i = { state: o.ALERT_STATE.CLOSED, networkName: "" },
                                l = (0, r.createSlice)({
                                    name: s,
                                    initialState: i,
                                    reducers: {
                                        openAlert: (e, t) => {
                                            (e.state = o.ALERT_STATE.OPEN), (e.networkName = t.payload);
                                        },
                                        dismissAlert: (e) => {
                                            (e.state = o.ALERT_STATE.CLOSED), (e.networkName = "");
                                        },
                                    },
                                }),
                                { actions: u, reducer: c } = l;
                            var d = c;
                            a.default = d;
                            a.getAlertState = (e) => e[s].state;
                            a.getNetworkName = (e) => e[s].networkName;
                            a.alertIsOpen = (e) => e[s].state !== o.ALERT_STATE.CLOSED;
                            const { openAlert: f, dismissAlert: p } = u;
                            (a.dismissAlert = p), (a.openAlert = f);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5885,
            {
                "../../../shared/modules/conversion.utils": 5351,
                "../../../shared/modules/string-utils": 5361,
                "../../../shared/modules/transaction.utils": 5363,
                "../../helpers/utils/confirm-tx.util": 5919,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../../selectors/custom-gas": 6298,
                "../metamask/metamask": 5892,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.clearConfirmTransaction = function () {
                                    return { type: g };
                                }),
                                (a.default = function (e = y, t = {}) {
                                    switch (t.type) {
                                        case f:
                                            return { ...e, txData: { ...t.payload } };
                                        case p:
                                            return { ...e, tokenData: { ...t.payload } };
                                        case m:
                                            return { ...e, tokenProps: { ...t.payload } };
                                        case h: {
                                            const { fiatTransactionAmount: a, ethTransactionAmount: r, hexTransactionAmount: n } = t.payload;
                                            return { ...e, fiatTransactionAmount: a || e.fiatTransactionAmount, ethTransactionAmount: r || e.ethTransactionAmount, hexTransactionAmount: n || e.hexTransactionAmount };
                                        }
                                        case v: {
                                            const { fiatTransactionFee: a, ethTransactionFee: r, hexTransactionFee: n } = t.payload;
                                            return { ...e, fiatTransactionFee: a || e.fiatTransactionFee, ethTransactionFee: r || e.ethTransactionFee, hexTransactionFee: n || e.hexTransactionFee };
                                        }
                                        case C: {
                                            const { fiatTransactionTotal: a, ethTransactionTotal: r, hexTransactionTotal: n } = t.payload;
                                            return { ...e, fiatTransactionTotal: a || e.fiatTransactionTotal, ethTransactionTotal: r || e.ethTransactionTotal, hexTransactionTotal: n || e.hexTransactionTotal };
                                        }
                                        case b:
                                            return { ...e, nonce: t.payload };
                                        case g:
                                            return y;
                                        default:
                                            return e;
                                    }
                                }),
                                (a.setTransactionToConfirm = function (e) {
                                    return (t, a) => {
                                        const o = a(),
                                            s = (0, r.unconfirmedTransactionsHashSelector)(o)[e];
                                        if (s)
                                            if (s.txParams) {
                                                t(M(s));
                                                const { txParams: e } = s;
                                                if (e.data) {
                                                    const { to: a, data: r } = e,
                                                        s = (0, c.parseStandardTokenTransactionData)(r),
                                                        i = (0, n.getTokens)(o),
                                                        l = null == i ? void 0 : i.find(({ address: e }) => (0, u.isEqualCaseInsensitive)(a, e));
                                                    t(T({ decimals: null == l ? void 0 : l.decimals, symbol: null == l ? void 0 : l.symbol })), t(E(s));
                                                }
                                                if (e.nonce) {
                                                    t(P((0, i.conversionUtil)(e.nonce, { fromNumericBase: "hex", toNumericBase: "dec" })));
                                                }
                                            } else t(_(s));
                                        else console.error(`Transaction with id ${e} not found`);
                                    };
                                }),
                                (a.updateNonce = P),
                                (a.updateTokenData = E),
                                (a.updateTokenProps = T),
                                (a.updateTransactionAmounts = w),
                                (a.updateTransactionFees = k),
                                (a.updateTransactionTotals = O),
                                (a.updateTxData = _),
                                (a.updateTxDataAndCalculate = M);
                            var r = e("../../selectors"),
                                n = e("../metamask/metamask"),
                                o = e("../../helpers/utils/confirm-tx.util"),
                                s = e("../../helpers/utils/transactions.util"),
                                i = e("../../../shared/modules/conversion.utils"),
                                l = e("../../selectors/custom-gas"),
                                u = e("../../../shared/modules/string-utils"),
                                c = e("../../../shared/modules/transaction.utils");
                            const d = (e) => `metamask/confirm-transaction/${e}`,
                                f = d("UPDATE_TX_DATA"),
                                p = d("UPDATE_TOKEN_DATA"),
                                m = d("UPDATE_TOKEN_PROPS"),
                                g = d("CLEAR_CONFIRM_TRANSACTION"),
                                h = d("UPDATE_TRANSACTION_AMOUNTS"),
                                v = d("UPDATE_TRANSACTION_FEES"),
                                C = d("UPDATE_TRANSACTION_TOTALS"),
                                b = d("UPDATE_NONCE"),
                                y = {
                                    txData: {},
                                    tokenData: {},
                                    tokenProps: {},
                                    fiatTransactionAmount: "",
                                    fiatTransactionFee: "",
                                    fiatTransactionTotal: "",
                                    ethTransactionAmount: "",
                                    ethTransactionFee: "",
                                    ethTransactionTotal: "",
                                    hexTransactionAmount: "",
                                    hexTransactionFee: "",
                                    hexTransactionTotal: "",
                                    nonce: "",
                                };
                            function _(e) {
                                return { type: f, payload: e };
                            }
                            function E(e) {
                                return { type: p, payload: e };
                            }
                            function T(e) {
                                return { type: m, payload: e };
                            }
                            function w(e) {
                                return { type: h, payload: e };
                            }
                            function k(e) {
                                return { type: v, payload: e };
                            }
                            function O(e) {
                                return { type: C, payload: e };
                            }
                            function P(e) {
                                return { type: b, payload: e };
                            }
                            function M(e) {
                                return (t, a) => {
                                    const i = a(),
                                        u = (0, r.currentCurrencySelector)(i),
                                        c = (0, r.conversionRateSelector)(i),
                                        d = (0, n.getNativeCurrency)(i);
                                    t(_(e));
                                    const { txParams: { value: f = "0x0", gas: p = "0x0" } = {} } = e;
                                    let { txParams: { gasPrice: m } = {} } = e;
                                    m || (m = (0, l.getAveragePriceEstimateInHexWEI)(i) || "0x0");
                                    const g = (0, o.getValueFromWeiHex)({ value: f, fromCurrency: d, toCurrency: u, conversionRate: c, numberOfDecimals: 2 }),
                                        h = (0, o.getValueFromWeiHex)({ value: f, fromCurrency: d, toCurrency: d, conversionRate: c, numberOfDecimals: 6 });
                                    t(w({ fiatTransactionAmount: g, ethTransactionAmount: h, hexTransactionAmount: f }));
                                    const v = (0, o.getHexGasTotal)({ gasLimit: p, gasPrice: m }),
                                        C = (0, o.getTransactionFee)({ value: v, fromCurrency: d, toCurrency: u, numberOfDecimals: 2, conversionRate: c }),
                                        b = (0, o.getTransactionFee)({ value: v, fromCurrency: d, toCurrency: d, numberOfDecimals: 6, conversionRate: c });
                                    t(k({ fiatTransactionFee: C, ethTransactionFee: b, hexTransactionFee: v }));
                                    t(O({ fiatTransactionTotal: (0, o.addFiat)(C, g), ethTransactionTotal: (0, o.addEth)(b, h), hexTransactionTotal: (0, s.sumHexes)(f, v) }));
                                };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5889,
            { "../../helpers/constants/routes": 5904, "@reduxjs/toolkit": 1220 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.pageChanged = a.getMostRecentOverviewPage = a.default = void 0);
                            var r = e("@reduxjs/toolkit"),
                                n = e("../../helpers/constants/routes");
                            const o = { mostRecentOverviewPage: n.DEFAULT_ROUTE },
                                s = "history",
                                i = (0, r.createSlice)({
                                    name: s,
                                    initialState: o,
                                    reducers: {
                                        pageChanged: (e, t) => {
                                            const a = t.payload;
                                            (a === n.DEFAULT_ROUTE || a.startsWith(n.ASSET_ROUTE)) && (e.mostRecentOverviewPage = a);
                                        },
                                    },
                                }),
                                { actions: l, reducer: u } = i;
                            var c = u;
                            a.default = c;
                            a.getMostRecentOverviewPage = (e) => e[s].mostRecentOverviewPage;
                            const { pageChanged: d } = l;
                            a.pageChanged = d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            589,
            {
                "../utils/ownerDocument": 884,
                "../utils/useEventCallback": 892,
                "../utils/useForkRef": 893,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@material-ui/utils": 959,
                "prop-types": 4806,
                react: 4980,
                "react-dom": 4885,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault"),
                                n = e("@babel/runtime/helpers/interopRequireWildcard");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var o = n(e("react")),
                                s = n(e("react-dom")),
                                i = (r(e("prop-types")), r(e("../utils/ownerDocument"))),
                                l = r(e("../utils/useForkRef")),
                                u = r(e("../utils/useEventCallback"));
                            e("@material-ui/utils");
                            function c(e) {
                                return e.substring(2).toLowerCase();
                            }
                            function d(e) {
                                var t = e.children,
                                    a = e.disableReactTree,
                                    r = void 0 !== a && a,
                                    n = e.mouseEvent,
                                    d = void 0 === n ? "onClick" : n,
                                    f = e.onClickAway,
                                    p = e.touchEvent,
                                    m = void 0 === p ? "onTouchEnd" : p,
                                    g = o.useRef(!1),
                                    h = o.useRef(null),
                                    v = o.useRef(!1),
                                    C = o.useRef(!1);
                                o.useEffect(function () {
                                    return (
                                        (v.current = !0),
                                        function () {
                                            v.current = !1;
                                        }
                                    );
                                }, []);
                                var b = o.useCallback(function (e) {
                                        h.current = s.findDOMNode(e);
                                    }, []),
                                    y = (0, l.default)(t.ref, b),
                                    _ = (0, u.default)(function (e) {
                                        var t = C.current;
                                        if (
                                            ((C.current = !1),
                                            v.current &&
                                                h.current &&
                                                !(function (e) {
                                                    return document.documentElement.clientWidth < e.clientX || document.documentElement.clientHeight < e.clientY;
                                                })(e))
                                        )
                                            if (g.current) g.current = !1;
                                            else {
                                                var a;
                                                if (e.composedPath) a = e.composedPath().indexOf(h.current) > -1;
                                                else a = !(0, i.default)(h.current).documentElement.contains(e.target) || h.current.contains(e.target);
                                                a || (!r && t) || f(e);
                                            }
                                    }),
                                    E = function (e) {
                                        return function (a) {
                                            C.current = !0;
                                            var r = t.props[e];
                                            r && r(a);
                                        };
                                    },
                                    T = { ref: y };
                                return (
                                    !1 !== m && (T[m] = E(m)),
                                    o.useEffect(
                                        function () {
                                            if (!1 !== m) {
                                                var e = c(m),
                                                    t = (0, i.default)(h.current),
                                                    a = function () {
                                                        g.current = !0;
                                                    };
                                                return (
                                                    t.addEventListener(e, _),
                                                    t.addEventListener("touchmove", a),
                                                    function () {
                                                        t.removeEventListener(e, _), t.removeEventListener("touchmove", a);
                                                    }
                                                );
                                            }
                                            return undefined;
                                        },
                                        [_, m]
                                    ),
                                    !1 !== d && (T[d] = E(d)),
                                    o.useEffect(
                                        function () {
                                            if (!1 !== d) {
                                                var e = c(d),
                                                    t = (0, i.default)(h.current);
                                                return (
                                                    t.addEventListener(e, _),
                                                    function () {
                                                        t.removeEventListener(e, _);
                                                    }
                                                );
                                            }
                                            return undefined;
                                        },
                                        [_, d]
                                    ),
                                    o.createElement(o.Fragment, null, o.cloneElement(t, T))
                                );
                            }
                            var f = d;
                            a.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5890,
            {
                "../../shared/constants/alerts": 5327,
                "./alerts": 5881,
                "./app/app": 5884,
                "./confirm-transaction/confirm-transaction.duck": 5885,
                "./ens": 5886,
                "./gas/gas.duck": 5888,
                "./history/history": 5889,
                "./locale/locale": 5891,
                "./metamask/metamask": 5892,
                "./send/send": 5895,
                "./swaps/swaps": 5896,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = e("redux"),
                                n = e("../../shared/constants/alerts"),
                                o = g(e("./metamask/metamask")),
                                s = g(e("./locale/locale")),
                                i = g(e("./send/send")),
                                l = g(e("./ens")),
                                u = g(e("./app/app")),
                                c = g(e("./confirm-transaction/confirm-transaction.duck")),
                                d = g(e("./gas/gas.duck")),
                                f = e("./alerts"),
                                p = g(e("./swaps/swaps")),
                                m = g(e("./history/history"));
                            function g(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            var h = (0, r.combineReducers)({
                                [n.ALERT_TYPES.invalidCustomNetwork]: f.invalidCustomNetwork,
                                [n.ALERT_TYPES.unconnectedAccount]: f.unconnectedAccount,
                                activeTab: (e) => (e === undefined ? null : e),
                                metamask: o.default,
                                appState: u.default,
                                ENS: l.default,
                                history: m.default,
                                send: i.default,
                                confirmTransaction: c.default,
                                swaps: p.default,
                                gas: d.default,
                                localeMessages: s.default,
                            });
                            a.default = h;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5891,
            { "../../store/actionConstants": 6306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function (e = {}, { type: t, value: a }) {
                                    if (t === r.SET_CURRENT_LOCALE) return { ...e, current: a.messages };
                                    return e;
                                }),
                                (a.getEnLocaleMessages = a.getCurrentLocaleMessages = void 0);
                            var r = (function (e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var a = n(t);
                                if (a && a.has(e)) return a.get(e);
                                var r = {},
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var s in e)
                                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                                        var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
                                        i && (i.get || i.set) ? Object.defineProperty(r, s, i) : (r[s] = e[s]);
                                    }
                                (r.default = e), a && a.set(e, r);
                                return r;
                            })(e("../../store/actionConstants"));
                            function n(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (n = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            a.getCurrentLocaleMessages = (e) => e.localeMessages.current;
                            a.getEnLocaleMessages = (e) => e.localeMessages.en;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5896,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/swaps": 5337,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "../../helpers/constants/routes": 5904,
                "../../helpers/utils/conversions.util": 5920,
                "../../pages/swaps/swaps.util": 6285,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "../metamask/metamask": 5892,
                "@reduxjs/toolkit": 1220,
                "@sentry/browser": 1229,
                "bignumber.js": 1637,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.GAS_PRICES_LOADING_STATES = a.FALLBACK_GAS_MULTIPLIER = void 0),
                                (a.cancelSwapsSmartTransaction = function (e) {
                                    return async (t, a) => {
                                        try {
                                            await t((0, i.cancelSmartTransaction)(e));
                                        } catch (e) {
                                            const {
                                                swaps: { isFeatureFlagLoaded: r },
                                            } = a();
                                            if (e.message.startsWith("Fetch error:") && r) {
                                                const a = (0, u.parseSmartTransactionsError)(e.message);
                                                t(be(null == a ? void 0 : a.error));
                                            }
                                        }
                                    };
                                }),
                                (a.fetchAndSetSwapsGasPriceInfo = a.dismissCurrentSmartTransactionsErrorMessage = a.default = a.clearSwapsState = void 0),
                                (a.fetchMetaSwapsGasPriceEstimates = Te),
                                (a.fetchSwapsLivenessAndFeatureFlags = a.fetchQuotesAndSetQuoteState = void 0),
                                (a.fetchSwapsSmartTransactionFees = we),
                                (a.setTopAssets = a.setSwapsFromToken = a.setSwapToToken = a.setSwapQuotesFetchStartTime = a.setReviewSwapClickedTimestamp = a.setMaxSlippage = a.setIsFeatureFlagLoaded = a.setFromTokenInputValue = a.setFromTokenError = a.setFetchingQuotes = a.setBalanceError = a.setAggregatorMetadata = a.prepareToLeaveSwaps = a.prepareForRetryGetQuotes = a.navigateBackToBuildQuote = a.getUsedSwapsGasPrice = a.getUsedQuote = a.getTradeTxId = a.getTopQuote = a.getTopAssets = a.getToToken = a.getSwapsWelcomeMessageSeenStatus = a.getSwapsUserFeeLevel = a.getSwapsTokens = a.getSwapsSTXLoading = a.getSwapsQuoteRefreshTime = a.getSwapsQuotePrefetchingRefreshTime = a.getSwapsNetworkConfig = a.getSwapsFeatureIsLive = a.getSwapsFallbackGasPrice = a.getSwapsErrorKey = a.getSwapsCustomizationModalPrice = a.getSwapsCustomizationModalLimit = a.getSwapGasPriceEstimateData = a.getSmartTransactionsOptInStatus = a.getSmartTransactionsErrorMessageDismissed = a.getSmartTransactionsError = a.getSmartTransactionsEnabled = a.getSmartTransactionFees = a.getSmartTransactionEstimatedGas = a.getShowQuoteLoadingScreen = a.getSelectedQuote = a.getReviewSwapClickedTimestamp = a.getQuotesLastFetched = a.getQuotesFetchStartTime = a.getQuotes = a.getPendingSmartTransactions = a.getMaxSlippage = a.getIsFeatureFlagLoaded = a.getFromTokenInputValue = a.getFromTokenError = a.getFromToken = a.getFetchingQuotes = a.getFetchParams = a.getDestinationTokenInfo = a.getCustomSwapsGasPrice = a.getCustomSwapsGas = a.getCustomMaxPriorityFeePerGas = a.getCustomMaxFeePerGas = a.getCurrentSmartTransactionsErrorMessageDismissed = a.getCurrentSmartTransactionsError = a.getCurrentSmartTransactionsEnabled = a.getCurrentSmartTransactions = a.getBalanceError = a.getBackgroundSwapRouteState = a.getApproveTxParams = a.getApproveTxId = a.getAggregatorMetadata = void 0),
                                (a.shouldShowCustomPriceTooLowWarning = function (e) {
                                    const { average: t } = x(e),
                                        a = S(e);
                                    if (!a || t === undefined) return !1;
                                    return (0, d.conversionLessThan)({ value: a, fromNumericBase: "hex", fromDenomination: "WEI", toDenomination: "GWEI" }, { value: t, fromNumericBase: "dec" });
                                }),
                                (a.swapsQuoteSelected = a.swapGasPriceEstimateIsLoading = a.swapGasEstimateLoadingHasFailed = a.swapCustomGasModalPriceEdited = a.swapCustomGasModalLimitEdited = a.swapCustomGasModalClosed = a.signAndSendTransactions = a.signAndSendSwapsSmartTransaction = void 0);
                            var r = e("@reduxjs/toolkit"),
                                n = b(e("bignumber.js")),
                                o = b(e("loglevel")),
                                s = e("@sentry/browser"),
                                i = e("../../store/actions"),
                                l = e("../../helpers/constants/routes"),
                                u = e("../../pages/swaps/swaps.util"),
                                c = e("../../helpers/utils/conversions.util"),
                                d = e("../../../shared/modules/conversion.utils"),
                                f = e("../../selectors"),
                                p = e("../../../shared/constants/metametrics"),
                                m = e("../../../shared/constants/swaps"),
                                g = e("../../../shared/constants/transaction"),
                                h = e("../metamask/metamask"),
                                v = e("../../../shared/constants/app"),
                                C = e("../../../shared/lib/transactions-controller-utils");
                            function b(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const y = { INITIAL: "INITIAL", LOADING: "LOADING", FAILED: "FAILED", COMPLETED: "COMPLETED" };
                            a.GAS_PRICES_LOADING_STATES = y;
                            a.FALLBACK_GAS_MULTIPLIER = 1.5;
                            const _ = {
                                    aggregatorMetadata: null,
                                    approveTxId: null,
                                    tradeTxId: null,
                                    balanceError: !1,
                                    fetchingQuotes: !1,
                                    fromToken: null,
                                    fromTokenInputValue: "",
                                    fromTokenError: null,
                                    isFeatureFlagLoaded: !1,
                                    maxSlippage: m.SLIPPAGE.DEFAULT,
                                    quotesFetchStartTime: null,
                                    reviewSwapClickedTimestamp: null,
                                    topAssets: {},
                                    toToken: null,
                                    customGas: { price: null, limit: null, loading: y.INITIAL, priceEstimates: {}, fallBackPrice: null },
                                    currentSmartTransactionsError: "",
                                    currentSmartTransactionsErrorMessageDismissed: !1,
                                    swapsSTXLoading: !1,
                                },
                                E = (0, r.createSlice)({
                                    name: "swaps",
                                    initialState: _,
                                    reducers: {
                                        clearSwapsState: () => _,
                                        navigatedBackToBuildQuote: (e) => {
                                            (e.approveTxId = null), (e.tradeTxId = null), (e.balanceError = !1), (e.fetchingQuotes = !1), (e.customGas.limit = null), (e.customGas.price = null);
                                        },
                                        retriedGetQuotes: (e) => {
                                            (e.approveTxId = null), (e.balanceError = !1), (e.fetchingQuotes = !1);
                                        },
                                        setAggregatorMetadata: (e, t) => {
                                            e.aggregatorMetadata = t.payload;
                                        },
                                        setBalanceError: (e, t) => {
                                            e.balanceError = t.payload;
                                        },
                                        setFetchingQuotes: (e, t) => {
                                            e.fetchingQuotes = t.payload;
                                        },
                                        setFromToken: (e, t) => {
                                            e.fromToken = t.payload;
                                        },
                                        setFromTokenInputValue: (e, t) => {
                                            e.fromTokenInputValue = t.payload;
                                        },
                                        setFromTokenError: (e, t) => {
                                            e.fromTokenError = t.payload;
                                        },
                                        setIsFeatureFlagLoaded: (e, t) => {
                                            e.isFeatureFlagLoaded = t.payload;
                                        },
                                        setMaxSlippage: (e, t) => {
                                            e.maxSlippage = t.payload;
                                        },
                                        setQuotesFetchStartTime: (e, t) => {
                                            e.quotesFetchStartTime = t.payload;
                                        },
                                        setReviewSwapClickedTimestamp: (e, t) => {
                                            e.reviewSwapClickedTimestamp = t.payload;
                                        },
                                        setTopAssets: (e, t) => {
                                            e.topAssets = t.payload;
                                        },
                                        setToToken: (e, t) => {
                                            e.toToken = t.payload;
                                        },
                                        swapCustomGasModalClosed: (e) => {
                                            (e.customGas.price = null), (e.customGas.limit = null);
                                        },
                                        swapCustomGasModalPriceEdited: (e, t) => {
                                            e.customGas.price = t.payload;
                                        },
                                        swapCustomGasModalLimitEdited: (e, t) => {
                                            e.customGas.limit = t.payload;
                                        },
                                        swapGasPriceEstimatesFetchStarted: (e) => {
                                            e.customGas.loading = y.LOADING;
                                        },
                                        swapGasPriceEstimatesFetchFailed: (e) => {
                                            e.customGas.loading = y.FAILED;
                                        },
                                        swapGasPriceEstimatesFetchCompleted: (e, t) => {
                                            (e.customGas.priceEstimates = t.payload.priceEstimates), (e.customGas.loading = y.COMPLETED);
                                        },
                                        retrievedFallbackSwapsGasPrice: (e, t) => {
                                            e.customGas.fallBackPrice = t.payload;
                                        },
                                        setCurrentSmartTransactionsError: (e, t) => {
                                            const a = Object.values(u.stxErrorTypes).includes(t.payload) ? t.payload : u.stxErrorTypes.UNAVAILABLE;
                                            e.currentSmartTransactionsError = a;
                                        },
                                        dismissCurrentSmartTransactionsErrorMessage: (e) => {
                                            e.currentSmartTransactionsErrorMessageDismissed = !0;
                                        },
                                        setSwapsSTXSubmitLoading: (e, t) => {
                                            e.swapsSTXLoading = t.payload || !1;
                                        },
                                    },
                                }),
                                { actions: T, reducer: w } = E;
                            var k = w;
                            a.default = k;
                            a.getAggregatorMetadata = (e) => e.swaps.aggregatorMetadata;
                            const O = (e) => e.swaps.balanceError;
                            a.getBalanceError = O;
                            const P = (e) => e.swaps.fromToken;
                            a.getFromToken = P;
                            a.getFromTokenError = (e) => e.swaps.fromTokenError;
                            a.getFromTokenInputValue = (e) => e.swaps.fromTokenInputValue;
                            a.getIsFeatureFlagLoaded = (e) => e.swaps.isFeatureFlagLoaded;
                            a.getSwapsSTXLoading = (e) => e.swaps.swapsSTXLoading;
                            a.getMaxSlippage = (e) => e.swaps.maxSlippage;
                            a.getTopAssets = (e) => e.swaps.topAssets;
                            const M = (e) => e.swaps.toToken;
                            a.getToToken = M;
                            a.getFetchingQuotes = (e) => e.swaps.fetchingQuotes;
                            a.getQuotesFetchStartTime = (e) => e.swaps.quotesFetchStartTime;
                            a.getReviewSwapClickedTimestamp = (e) => e.swaps.reviewSwapClickedTimestamp;
                            const S = (e) => e.swaps.customGas.price;
                            a.getSwapsCustomizationModalPrice = S;
                            a.getSwapsCustomizationModalLimit = (e) => e.swaps.customGas.limit;
                            a.swapGasPriceEstimateIsLoading = (e) => e.swaps.customGas.loading === y.LOADING;
                            a.swapGasEstimateLoadingHasFailed = (e) => e.swaps.customGas.loading === y.INITIAL;
                            const x = (e) => e.swaps.customGas.priceEstimates;
                            a.getSwapGasPriceEstimateData = x;
                            const N = (e) => e.swaps.customGas.fallBackPrice;
                            a.getSwapsFallbackGasPrice = N;
                            const A = (e) => e.swaps.currentSmartTransactionsError;
                            a.getCurrentSmartTransactionsError = A;
                            a.getCurrentSmartTransactionsErrorMessageDismissed = (e) => e.swaps.currentSmartTransactionsErrorMessageDismissed;
                            const R = (e) => e.metamask.swapsState;
                            a.getSwapsFeatureIsLive = (e) => e.metamask.swapsState.swapsFeatureIsLive;
                            a.getSmartTransactionsError = (e) => e.appState.smartTransactionsError;
                            a.getSmartTransactionsErrorMessageDismissed = (e) => e.appState.smartTransactionsErrorMessageDismissed;
                            const L = (e) => {
                                var t, a, r, n;
                                const o = (0, f.isHardwareWallet)(e),
                                    s = (0, f.getCurrentChainId)(e),
                                    i = m.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS.includes(s),
                                    l = null === (t = e.metamask.swapsState) || void 0 === t || null === (a = t.swapsFeatureFlags) || void 0 === a || null === (r = a.smartTransactions) || void 0 === r ? void 0 : r.extensionActive,
                                    u = null === (n = e.metamask.smartTransactionsState) || void 0 === n ? void 0 : n.liveness;
                                return Boolean(i && !o && l && u);
                            };
                            a.getSmartTransactionsEnabled = L;
                            const I = (e) => {
                                const t = L(e),
                                    a = A(e);
                                return t && !a;
                            };
                            a.getCurrentSmartTransactionsEnabled = I;
                            a.getSwapsQuoteRefreshTime = (e) => e.metamask.swapsState.swapsQuoteRefreshTime;
                            a.getSwapsQuotePrefetchingRefreshTime = (e) => e.metamask.swapsState.swapsQuotePrefetchingRefreshTime;
                            a.getBackgroundSwapRouteState = (e) => e.metamask.swapsState.routeState;
                            const F = (e) => e.metamask.swapsState.customMaxGas;
                            a.getCustomSwapsGas = F;
                            const D = (e) => e.metamask.swapsState.customGasPrice;
                            a.getCustomSwapsGasPrice = D;
                            const j = (e) => e.metamask.swapsState.customMaxFeePerGas;
                            a.getCustomMaxFeePerGas = j;
                            const $ = (e) => e.metamask.swapsState.customMaxPriorityFeePerGas;
                            a.getCustomMaxPriorityFeePerGas = $;
                            a.getSwapsUserFeeLevel = (e) => e.metamask.swapsState.swapsUserFeeLevel;
                            const H = (e) => e.metamask.swapsState.fetchParams;
                            a.getFetchParams = H;
                            const G = (e) => e.metamask.swapsState.quotes;
                            a.getQuotes = G;
                            a.getQuotesLastFetched = (e) => e.metamask.swapsState.quotesLastFetched;
                            const V = (e) => {
                                const { selectedAggId: t, quotes: a } = R(e);
                                return a[t];
                            };
                            a.getSelectedQuote = V;
                            a.getSwapsErrorKey = (e) => {
                                var t;
                                return null === (t = R(e)) || void 0 === t ? void 0 : t.errorKey;
                            };
                            a.getShowQuoteLoadingScreen = (e) => e.swaps.showQuoteLoadingScreen;
                            const W = (e) => e.metamask.swapsState.tokens;
                            a.getSwapsTokens = W;
                            a.getSwapsWelcomeMessageSeenStatus = (e) => e.metamask.swapsWelcomeMessageHasBeenShown;
                            const U = (e) => {
                                const { topAggId: t, quotes: a } = R(e);
                                return a[t];
                            };
                            a.getTopQuote = U;
                            a.getApproveTxId = (e) => e.metamask.swapsState.approveTxId;
                            a.getTradeTxId = (e) => e.metamask.swapsState.tradeTxId;
                            const B = (e) => V(e) || U(e);
                            a.getUsedQuote = B;
                            a.getDestinationTokenInfo = (e) => {
                                var t, a;
                                return null === (t = H(e)) || void 0 === t || null === (a = t.metaData) || void 0 === a ? void 0 : a.destinationTokenInfo;
                            };
                            const q = (e) => D(e) || N(e);
                            a.getUsedSwapsGasPrice = q;
                            const z = (e) => {
                                var t;
                                const { approvalNeeded: a } = V(e) || U(e) || {};
                                if (!a) return null;
                                const r = (null === (t = R(e)) || void 0 === t ? void 0 : t.customApproveTxData) || a.data,
                                    n = q(e);
                                return { ...a, gasPrice: n, data: r };
                            };
                            a.getApproveTxParams = z;
                            const Y = (e) => {
                                var t;
                                return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.userOptIn;
                            };
                            a.getSmartTransactionsOptInStatus = Y;
                            const Z = (e) => {
                                var t, a;
                                return null === (t = e.metamask.smartTransactionsState) || void 0 === t || null === (a = t.smartTransactions) || void 0 === a ? void 0 : a[(0, f.getCurrentChainId)(e)];
                            };
                            a.getCurrentSmartTransactions = Z;
                            a.getPendingSmartTransactions = (e) => {
                                const t = Z(e);
                                return t && 0 !== t.length ? t.filter((e) => e.status === g.SMART_TRANSACTION_STATUSES.PENDING) : [];
                            };
                            a.getSmartTransactionFees = (e) => {
                                var t;
                                return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.fees;
                            };
                            a.getSmartTransactionEstimatedGas = (e) => {
                                var t;
                                return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.estimatedGas;
                            };
                            const K = (e) => {
                                const {
                                    swapsQuoteRefreshTime: t,
                                    swapsQuotePrefetchingRefreshTime: a,
                                    swapsStxGetTransactionsRefreshTime: r,
                                    swapsStxBatchStatusRefreshTime: n,
                                    swapsStxStatusDeadline: o,
                                    swapsStxMaxFeeMultiplier: s,
                                } = e.metamask.swapsState;
                                return { quoteRefreshTime: t, quotePrefetchingRefreshTime: a, stxGetTransactionsRefreshTime: r, stxBatchStatusRefreshTime: n, stxStatusDeadline: o, stxMaxFeeMultiplier: s };
                            };
                            a.getSwapsNetworkConfig = K;
                            const {
                                clearSwapsState: X,
                                navigatedBackToBuildQuote: Q,
                                retriedGetQuotes: J,
                                swapGasPriceEstimatesFetchCompleted: ee,
                                swapGasPriceEstimatesFetchStarted: te,
                                swapGasPriceEstimatesFetchFailed: ae,
                                setAggregatorMetadata: re,
                                setBalanceError: ne,
                                setFetchingQuotes: oe,
                                setFromToken: se,
                                setFromTokenError: ie,
                                setFromTokenInputValue: le,
                                setIsFeatureFlagLoaded: ue,
                                setMaxSlippage: ce,
                                setQuotesFetchStartTime: de,
                                setReviewSwapClickedTimestamp: fe,
                                setTopAssets: pe,
                                setToToken: me,
                                swapCustomGasModalPriceEdited: ge,
                                swapCustomGasModalLimitEdited: he,
                                retrievedFallbackSwapsGasPrice: ve,
                                swapCustomGasModalClosed: Ce,
                                setCurrentSmartTransactionsError: be,
                                dismissCurrentSmartTransactionsErrorMessage: ye,
                                setSwapsSTXSubmitLoading: _e,
                            } = T;
                            (a.dismissCurrentSmartTransactionsErrorMessage = ye),
                                (a.swapCustomGasModalClosed = Ce),
                                (a.swapCustomGasModalLimitEdited = he),
                                (a.swapCustomGasModalPriceEdited = ge),
                                (a.setSwapToToken = me),
                                (a.setTopAssets = pe),
                                (a.setReviewSwapClickedTimestamp = fe),
                                (a.setSwapQuotesFetchStartTime = de),
                                (a.setMaxSlippage = ce),
                                (a.setIsFeatureFlagLoaded = ue),
                                (a.setFromTokenInputValue = le),
                                (a.setFromTokenError = ie),
                                (a.setSwapsFromToken = se),
                                (a.setFetchingQuotes = oe),
                                (a.setBalanceError = ne),
                                (a.setAggregatorMetadata = re),
                                (a.clearSwapsState = X);
                            a.navigateBackToBuildQuote = (e) => async (t) => {
                                await t((0, i.setBackgroundSwapRouteState)("")), t(Q()), e.push(l.BUILD_QUOTE_ROUTE);
                            };
                            a.prepareForRetryGetQuotes = () => async (e) => {
                                await e((0, i.resetSwapsPostFetchState)()), e(J());
                            };
                            a.prepareToLeaveSwaps = () => async (e) => {
                                e(X()), await e((0, i.resetBackgroundSwapsState)());
                            };
                            a.swapsQuoteSelected = (e) => (t) => {
                                t(he(null)), t((0, i.setSelectedQuoteAggId)(e)), t((0, i.setSwapsTxGasLimit)(""));
                            };
                            const Ee = () => async (e) => {
                                const t = await e(Te());
                                null != t && t.fast && e((0, i.setSwapsTxGasPrice)((0, c.decGWEIToHexWEI)(t.fast)));
                            };
                            a.fetchAndSetSwapsGasPriceInfo = Ee;
                            a.fetchSwapsLivenessAndFeatureFlags = () => async (e, t) => {
                                let a = { swapsFeatureIsLive: !1 };
                                const r = t(),
                                    n = (0, f.getCurrentChainId)(r);
                                try {
                                    const t = await (0, u.fetchSwapsFeatureFlags)();
                                    if ((await e((0, i.setSwapsFeatureFlags)(t)), m.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS.includes(n))) {
                                        var s;
                                        await e((0, i.fetchSmartTransactionsLiveness)());
                                        ((e, t) => {
                                            if (!((null == t ? void 0 : t.length) <= 0))
                                                for (const a of t)
                                                    if (g.IN_PROGRESS_TRANSACTION_STATUSES.includes(a.status)) {
                                                        e(be(u.stxErrorTypes.REGULAR_TX_IN_PROGRESS));
                                                        break;
                                                    }
                                        })(e, await (0, i.getTransactions)({ searchCriteria: { from: null === (s = r.metamask) || void 0 === s ? void 0 : s.selectedAddress } }));
                                    }
                                    a = (0, u.getSwapsLivenessForNetwork)(t, n);
                                } catch (e) {
                                    o.default.error("Failed to fetch Swaps feature flags and Swaps liveness, defaulting to false.", e);
                                }
                                return await e((0, i.setSwapsLiveness)(a)), e(ue(!0)), a;
                            };
                            a.fetchQuotesAndSetQuoteState = (e, t, a, r, s) => async (c, d) => {
                                var g, v, b, y;
                                const _ = d(),
                                    E = (0, f.getCurrentChainId)(_);
                                let T = { swapsFeatureIsLive: !1 };
                                try {
                                    const e = await (0, u.fetchSwapsFeatureFlags)();
                                    T = (0, u.getSwapsLivenessForNetwork)(e, E);
                                } catch (e) {
                                    o.default.error("Failed to fetch Swaps liveness, defaulting to false.", e);
                                }
                                if ((await c((0, i.setSwapsLiveness)(T)), !T.swapsFeatureIsLive)) return void (await e.push(l.SWAPS_MAINTENANCE_ROUTE));
                                const w = H(_),
                                    k = (0, f.getSelectedAccount)(_),
                                    S = O(_),
                                    x = (0, f.getSwapsDefaultToken)(_),
                                    N =
                                        (null == w || null === (g = w.metaData) || void 0 === g || null === (v = g.sourceTokenInfo) || void 0 === v ? void 0 : v.symbol) === x.symbol
                                            ? x
                                            : null == w || null === (b = w.metaData) || void 0 === b
                                            ? void 0
                                            : b.sourceTokenInfo,
                                    A = P(_) || N || {},
                                    R = M(_) || (null == w || null === (y = w.metaData) || void 0 === y ? void 0 : y.destinationTokenInfo) || {},
                                    { address: F, symbol: D, decimals: j, iconUrl: $, balance: G } = A,
                                    { address: V, symbol: U, decimals: B, iconUrl: q } = R;
                                s || (await c((0, i.setBackgroundSwapRouteState)("loading")), e.push(l.LOADING_QUOTES_ROUTE)), c(oe(!0));
                                const z = (0, f.getTokenExchangeRates)(_);
                                let Z = !1;
                                var K, X;
                                !V ||
                                    U === x.symbol ||
                                    z[V] !== undefined ||
                                    ((K = V), (X = (0, h.getTokens)(_)), Array.isArray(X) && X.find((e) => e.address.toLowerCase() === K.toLowerCase())) ||
                                    ((Z = !0), await c((0, i.addToken)(V, U, B, q, !0))),
                                    F && D !== x.symbol && !z[F] && G && new n.default(G, 16).gt(0) && c((0, i.addToken)(F, D, j, $, !0));
                                const Q = W(_),
                                    J = (null == Q ? void 0 : Q.find(({ address: e }) => e === F)) || A,
                                    ee = (null == Q ? void 0 : Q.find(({ address: e }) => e === V)) || R;
                                c(se(A));
                                const te = (0, f.isHardwareWallet)(_),
                                    ae = (0, f.getHardwareWalletType)(_),
                                    re = (0, f.checkNetworkAndAccountSupports1559)(_),
                                    ne = Y(_),
                                    ie = L(_),
                                    le = I(_);
                                r({
                                    event: "Quotes Requested",
                                    category: p.EVENT.CATEGORIES.SWAPS,
                                    sensitiveProperties: {
                                        token_from: D,
                                        token_from_amount: String(t),
                                        token_to: U,
                                        request_type: S ? "Quote" : "Order",
                                        slippage: a,
                                        custom_slippage: a !== m.SLIPPAGE.DEFAULT,
                                        is_hardware_wallet: te,
                                        hardware_wallet_type: ae,
                                        stx_enabled: ie,
                                        current_stx_enabled: le,
                                        stx_user_opt_in: ne,
                                        anonymizedData: !0,
                                    },
                                });
                                try {
                                    var ue;
                                    const e = Date.now();
                                    c(de(e));
                                    const n = c(
                                            (0, i.fetchAndSetQuotes)(
                                                { slippage: a, sourceToken: F, destinationToken: V, value: t, fromAddress: k.address, destinationTokenAddedForSwap: Z, balanceError: S, sourceDecimals: j },
                                                { sourceTokenInfo: J, destinationTokenInfo: ee, accountBalance: k.balance, chainId: E }
                                            )
                                        ),
                                        o = re ? null : c(Ee()),
                                        [[s, l]] = await Promise.all([n, o]);
                                    if (0 === (null === (ue = Object.values(s)) || void 0 === ue ? void 0 : ue.length))
                                        r({
                                            event: "No Quotes Available",
                                            category: p.EVENT.CATEGORIES.SWAPS,
                                            sensitiveProperties: {
                                                token_from: D,
                                                token_from_amount: String(t),
                                                token_to: U,
                                                request_type: S ? "Quote" : "Order",
                                                slippage: a,
                                                custom_slippage: a !== m.SLIPPAGE.DEFAULT,
                                                is_hardware_wallet: te,
                                                hardware_wallet_type: ae,
                                                stx_enabled: ie,
                                                current_stx_enabled: le,
                                                stx_user_opt_in: ne,
                                            },
                                        }),
                                            c((0, i.setSwapsErrorKey)(m.QUOTES_NOT_AVAILABLE_ERROR));
                                    else {
                                        var ce;
                                        const n = s[l];
                                        r({
                                            event: "Quotes Received",
                                            category: p.EVENT.CATEGORIES.SWAPS,
                                            sensitiveProperties: {
                                                token_from: D,
                                                token_from_amount: String(t),
                                                token_to: U,
                                                token_to_amount: (0, C.calcTokenAmount)(n.destinationAmount, n.decimals || 18),
                                                request_type: S ? "Quote" : "Order",
                                                slippage: a,
                                                custom_slippage: a !== m.SLIPPAGE.DEFAULT,
                                                response_time: Date.now() - e,
                                                best_quote_source: n.aggregator,
                                                available_quotes: null === (ce = Object.values(s)) || void 0 === ce ? void 0 : ce.length,
                                                is_hardware_wallet: te,
                                                hardware_wallet_type: ae,
                                                stx_enabled: ie,
                                                current_stx_enabled: le,
                                                stx_user_opt_in: ne,
                                                anonymizedData: !0,
                                            },
                                        }),
                                            c((0, i.setInitialGasEstimate)(l));
                                    }
                                } catch (e) {
                                    if (e.message === m.SWAPS_FETCH_ORDER_CONFLICT) return void o.default.debug("Swap fetch order conflict detected; ignoring older request");
                                    o.default.error("Error fetching quotes: ", e), c((0, i.setSwapsErrorKey)(m.ERROR_FETCHING_QUOTES));
                                }
                                c(oe(!1));
                            };
                            a.signAndSendSwapsSmartTransaction = ({ unsignedTransaction: e, trackEvent: t, history: a, additionalTrackingParams: r }) => async (n, c) => {
                                var d, h, b, y, _, E, T, w;
                                n(_e(!0));
                                const k = c(),
                                    O = H(k),
                                    { metaData: P, value: M, slippage: S } = O,
                                    { sourceTokenInfo: x = {}, destinationTokenInfo: N = {} } = P,
                                    A = B(k),
                                    R = K(k),
                                    F = (0, f.getCurrentChainId)(k);
                                n((0, i.setSmartTransactionsRefreshInterval)(null == R ? void 0 : R.stxBatchStatusRefreshTime));
                                const D = A.trade,
                                    j = (0, C.calcTokenAmount)(A.destinationAmount, N.decimals || 18).toPrecision(8),
                                    $ = Y(k),
                                    V = L(k),
                                    W = I(k),
                                    q = {
                                        token_from: x.symbol,
                                        token_from_amount: String(M),
                                        token_to: N.symbol,
                                        token_to_amount: j,
                                        slippage: S,
                                        custom_slippage: 2 !== S,
                                        best_quote_source: null === (d = U(k)) || void 0 === d ? void 0 : d.aggregator,
                                        available_quotes: null === (h = G(k)) || void 0 === h ? void 0 : h.length,
                                        other_quote_selected: A.aggregator !== (null === (b = U(k)) || void 0 === b ? void 0 : b.aggregator),
                                        other_quote_selected_source: A.aggregator === (null === (y = U(k)) || void 0 === y ? void 0 : y.aggregator) ? "" : A.aggregator,
                                        average_savings: null === (_ = A.savings) || void 0 === _ ? void 0 : _.total,
                                        performance_savings: null === (E = A.savings) || void 0 === E ? void 0 : E.performance,
                                        fee_savings: null === (T = A.savings) || void 0 === T ? void 0 : T.fee,
                                        median_metamask_fee: null === (w = A.savings) || void 0 === w ? void 0 : w.medianMetaMaskFee,
                                        stx_enabled: V,
                                        current_stx_enabled: W,
                                        stx_user_opt_in: $,
                                        ...r,
                                    };
                                if ((t({ event: "STX Swap Started", category: p.EVENT.CATEGORIES.SWAPS, sensitiveProperties: q }), !(0, u.isContractAddressValid)(D.to, F)))
                                    return (
                                        (0, s.captureMessage)("Invalid contract address", { extra: { token_from: q.token_from, token_to: q.token_to, contract_address: D.to } }),
                                        await n((0, i.setSwapsErrorKey)(m.SWAP_FAILED_ERROR)),
                                        void a.push(l.SWAPS_ERROR_ROUTE)
                                    );
                                const Z = z(k);
                                let X, Q;
                                try {
                                    var J;
                                    Z && (Q = { ...Z, value: "0x0" });
                                    const t = await n(we({ unsignedTransaction: e, approveTxParams: Q, fallbackOnNotEnoughFunds: !0 }));
                                    if (!t) return o.default.error('"fetchSwapsSmartTransactionFees" failed'), n(_e(!1)), void n(be(u.stxErrorTypes.UNAVAILABLE));
                                    var ee;
                                    if (Z)
                                        (Q.gas = `0x${(0, C.decimalToHex)((null === (ee = t.approvalTxFees) || void 0 === ee ? void 0 : ee.gasLimit) || 0)}`),
                                            (X = await n((0, i.signAndSendSmartTransaction)({ unsignedTransaction: Q, smartTransactionFees: t.approvalTxFees })));
                                    e.gas = `0x${(0, C.decimalToHex)((null === (J = t.tradeTxFees) || void 0 === J ? void 0 : J.gasLimit) || 0)}`;
                                    const r = await n((0, i.signAndSendSmartTransaction)({ unsignedTransaction: e, smartTransactionFees: t.tradeTxFees })),
                                        s = N.address,
                                        c = N.decimals,
                                        d = N.symbol,
                                        f = x.symbol;
                                    await n(
                                        (0, i.updateSmartTransaction)(r, {
                                            origin: v.ORIGIN_METAMASK,
                                            destinationTokenAddress: s,
                                            destinationTokenDecimals: c,
                                            destinationTokenSymbol: d,
                                            sourceTokenSymbol: f,
                                            swapMetaData: q,
                                            swapTokenValue: M,
                                            type: g.TRANSACTION_TYPES.SWAP,
                                        })
                                    ),
                                        X && (await n((0, i.updateSmartTransaction)(X, { origin: v.ORIGIN_METAMASK, type: g.TRANSACTION_TYPES.SWAP_APPROVAL, sourceTokenSymbol: f }))),
                                        a.push(l.SMART_TRANSACTION_STATUS_ROUTE),
                                        n(_e(!1));
                                } catch (e) {
                                    console.log("signAndSendSwapsSmartTransaction error", e);
                                    const {
                                        swaps: { isFeatureFlagLoaded: t },
                                    } = c();
                                    if (e.message.startsWith("Fetch error:") && t) {
                                        const t = (0, u.parseSmartTransactionsError)(e.message);
                                        n(be(null == t ? void 0 : t.error));
                                    }
                                }
                            };
                            function Te() {
                                return async (e, t) => {
                                    const a = t(),
                                        r = (0, f.getCurrentChainId)(a);
                                    let n;
                                    e(te());
                                    try {
                                        n = await (0, u.fetchSwapsGasPrices)(r);
                                    } catch (t) {
                                        var s;
                                        if ((o.default.warn("Fetching swaps gas prices failed:", t), null === (s = t.message) || void 0 === s || !s.match(/NetworkError|Fetch failed with status:/u))) throw t;
                                        e(ae());
                                        try {
                                            const t = await global.ethQuery.gasPrice(),
                                                a = (0, C.hexWEIToDecGWEI)(t.toString(10));
                                            return e(ve(a)), null;
                                        } catch (e) {
                                            return console.error("Failed to retrieve fallback gas price: ", e), null;
                                        }
                                    }
                                    return e(ee({ priceEstimates: n })), n;
                                };
                            }
                            function we({ unsignedTransaction: e, approveTxParams: t, fallbackOnNotEnoughFunds: a = !1 }) {
                                return async (r, n) => {
                                    const {
                                        swaps: { isFeatureFlagLoaded: o },
                                    } = n();
                                    try {
                                        return await r((0, i.fetchSmartTransactionFees)(e, t));
                                    } catch (e) {
                                        if (e.message.startsWith("Fetch error:") && o) {
                                            const t = (0, u.parseSmartTransactionsError)(e.message);
                                            (a || (null == t ? void 0 : t.error) !== u.stxErrorTypes.NOT_ENOUGH_FUNDS) && r(be(null == t ? void 0 : t.error));
                                        }
                                    }
                                    return null;
                                };
                            }
                            a.signAndSendTransactions = (e, t, a) => async (r, d) => {
                                var v, b, y, _, E, T, w, k, O, P;
                                const M = d(),
                                    S = (0, f.getCurrentChainId)(M),
                                    N = (0, f.isHardwareWallet)(M),
                                    A = (0, f.checkNetworkAndAccountSupports1559)(M);
                                let R = { swapsFeatureIsLive: !1 };
                                try {
                                    const e = await (0, u.fetchSwapsFeatureFlags)();
                                    R = (0, u.getSwapsLivenessForNetwork)(e, S);
                                } catch (e) {
                                    o.default.error("Failed to fetch Swaps liveness, defaulting to false.", e);
                                }
                                if ((await r((0, i.setSwapsLiveness)(R)), !R.swapsFeatureIsLive)) return void (await e.push(l.SWAPS_MAINTENANCE_ROUTE));
                                const D = F(M),
                                    V = j(M),
                                    W = $(M),
                                    Z = H(M),
                                    { metaData: K, value: X, slippage: Q } = Z,
                                    { sourceTokenInfo: J = {}, destinationTokenInfo: ee = {} } = K;
                                await r((0, i.setBackgroundSwapRouteState)("awaiting")), await r((0, i.stopPollingForQuotes)()), N || e.push(l.AWAITING_SWAP_ROUTE);
                                const { fast: te } = x(M);
                                let ae, re, ne, oe;
                                if (A) {
                                    const {
                                        high: { suggestedMaxFeePerGas: e, suggestedMaxPriorityFeePerGas: t },
                                        estimatedBaseFee: a = "0",
                                    } = (0, h.getGasFeeEstimates)(M);
                                    (oe = (0, c.decGWEIToHexWEI)(a)), (ae = V || (0, c.decGWEIToHexWEI)(e)), (re = W || (0, c.decGWEIToHexWEI)(t)), (ne = (0, c.addHexes)(oe, re));
                                }
                                const se = B(M),
                                    ie = se.trade,
                                    le = new n.default((null == se ? void 0 : se.gasEstimate) || "0x0", 16),
                                    ue = le
                                        .times((null == se ? void 0 : se.gasMultiplier) || 1.5, 10)
                                        .round(0)
                                        .toString(16),
                                    ce = D || (null != se && se.gasEstimate ? ue : `0x${(0, C.decimalToHex)((null == se ? void 0 : se.maxGas) || 0)}`),
                                    de = q(M);
                                (ie.gas = ce), A ? ((ie.maxFeePerGas = ae), (ie.maxPriorityFeePerGas = re), delete ie.gasPrice) : (ie.gasPrice = de);
                                const fe = (0, f.getUSDConversionRate)(M),
                                    pe = (0, C.calcTokenAmount)(se.destinationAmount, ee.decimals || 18).toPrecision(8),
                                    me = (null == se ? void 0 : se.gasEstimateWithRefund) || `0x${(0, C.decimalToHex)((null == se ? void 0 : se.averageGas) || 0)}`,
                                    ge = new n.default(me, 16).plus((null === (v = se.approvalNeeded) || void 0 === v ? void 0 : v.gas) || "0x0", 16).toString(16),
                                    he = (0, c.getValueFromWeiHex)({ value: (0, C.calcGasTotal)(ge, A ? ne : de), toCurrency: "usd", conversionRate: fe, numberOfDecimals: 6 }),
                                    ve = Y(M),
                                    Ce = L(M),
                                    be = I(M),
                                    ye = {
                                        token_from: J.symbol,
                                        token_from_amount: String(X),
                                        token_to: ee.symbol,
                                        token_to_amount: pe,
                                        slippage: Q,
                                        custom_slippage: 2 !== Q,
                                        best_quote_source: null === (b = U(M)) || void 0 === b ? void 0 : b.aggregator,
                                        available_quotes: null === (y = G(M)) || void 0 === y ? void 0 : y.length,
                                        other_quote_selected: se.aggregator !== (null === (_ = U(M)) || void 0 === _ ? void 0 : _.aggregator),
                                        other_quote_selected_source: se.aggregator === (null === (E = U(M)) || void 0 === E ? void 0 : E.aggregator) ? "" : se.aggregator,
                                        gas_fees: he,
                                        estimated_gas: le.toString(10),
                                        suggested_gas_price: te,
                                        used_gas_price: (0, C.hexWEIToDecGWEI)(de),
                                        average_savings: null === (T = se.savings) || void 0 === T ? void 0 : T.total,
                                        performance_savings: null === (w = se.savings) || void 0 === w ? void 0 : w.performance,
                                        fee_savings: null === (k = se.savings) || void 0 === k ? void 0 : k.fee,
                                        median_metamask_fee: null === (O = se.savings) || void 0 === O ? void 0 : O.medianMetaMaskFee,
                                        is_hardware_wallet: N,
                                        hardware_wallet_type: (0, f.getHardwareWalletType)(M),
                                        stx_enabled: Ce,
                                        current_stx_enabled: be,
                                        stx_user_opt_in: ve,
                                        ...a,
                                    };
                                if (
                                    (A && ((ye.max_fee_per_gas = ae), (ye.max_priority_fee_per_gas = re), (ye.base_and_priority_fee_per_gas = ne)),
                                    t({ event: "Swap Started", category: p.EVENT.CATEGORIES.SWAPS, sensitiveProperties: ye }),
                                    !(0, u.isContractAddressValid)(ie.to, S))
                                )
                                    return (
                                        (0, s.captureMessage)("Invalid contract address", { extra: { token_from: ye.token_from, token_to: ye.token_to, contract_address: ie.to } }),
                                        await r((0, i.setSwapsErrorKey)(m.SWAP_FAILED_ERROR)),
                                        void e.push(l.SWAPS_ERROR_ROUTE)
                                    );
                                let _e;
                                const Ee = z(M);
                                if ((N && e.push(l.AWAITING_SIGNATURES_ROUTE), Ee)) {
                                    A && ((Ee.maxFeePerGas = ae), (Ee.maxPriorityFeePerGas = re), delete Ee.gasPrice);
                                    const t = await (0, i.addUnapprovedTransaction)({ ...Ee, amount: "0x0" }, g.TRANSACTION_TYPES.SWAP_APPROVAL);
                                    await r((0, i.setApproveTxId)(t.id)), (_e = await r((0, i.updateSwapApprovalTransaction)(t.id, { type: g.TRANSACTION_TYPES.SWAP_APPROVAL, sourceTokenSymbol: J.symbol })));
                                    try {
                                        await r((0, i.updateAndApproveTx)(_e, !0));
                                    } catch (t) {
                                        return await r((0, i.setSwapsErrorKey)(m.SWAP_FAILED_ERROR)), void e.push(l.SWAPS_ERROR_ROUTE);
                                    }
                                }
                                const Te = await (0, i.addUnapprovedTransaction)(ie, g.TRANSACTION_TYPES.SWAP);
                                if ((r((0, i.setTradeTxId)(Te.id)), !Ee && Te.simulationFails)) return await r((0, i.cancelTx)(Te, !1)), await r((0, i.setSwapsErrorKey)(m.SWAP_FAILED_ERROR)), void e.push(l.SWAPS_ERROR_ROUTE);
                                const we = await r(
                                    (0, i.updateSwapTransaction)(Te.id, {
                                        estimatedBaseFee: oe,
                                        sourceTokenSymbol: J.symbol,
                                        destinationTokenSymbol: ee.symbol,
                                        type: g.TRANSACTION_TYPES.SWAP,
                                        destinationTokenDecimals: ee.decimals,
                                        destinationTokenAddress: ee.address,
                                        swapMetaData: ye,
                                        swapTokenValue: X,
                                        approvalTxId: null === (P = _e) || void 0 === P ? void 0 : P.id,
                                    })
                                );
                                try {
                                    await r((0, i.updateAndApproveTx)(we, !0));
                                } catch (t) {
                                    const a = t.message.includes("EthAppPleaseEnableContractData") ? m.CONTRACT_DATA_DISABLED_ERROR : m.SWAP_FAILED_ERROR;
                                    return await r((0, i.setSwapsErrorKey)(a)), void e.push(l.SWAPS_ERROR_ROUTE);
                                }
                                N && e.push(l.AWAITING_SWAP_ROUTE), await (0, i.forceUpdateMetamaskState)(r);
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5897,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            t.exports = [
                                { code: "aud", name: "Australian Dollar" },
                                { code: "hkd", name: "Hong Kong Dollar" },
                                { code: "sgd", name: "Singapore Dollar" },
                                { code: "idr", name: "Indonesian Rupiah" },
                                { code: "inr", name: "Indian Rupee" },
                                { code: "nzd", name: "New Zealand Dollar" },
                                { code: "php", name: "Philippine Peso" },
                                { code: "1st", name: "FirstBlood" },
                                { code: "adt", name: "adToken" },
                                { code: "adx", name: "AdEx" },
                                { code: "ant", name: "Aragon" },
                                { code: "bat", name: "Basic Attention Token" },
                                { code: "bnt", name: "Bancor" },
                                { code: "btc", name: "Bitcoin" },
                                { code: "cad", name: "Canadian Dollar" },
                                { code: "cfi", name: "Cofound.it" },
                                { code: "crb", name: "CreditBit" },
                                { code: "cvc", name: "Civic" },
                                { code: "dash", name: "Dash" },
                                { code: "dgd", name: "DigixDAO" },
                                { code: "etc", name: "Ethereum Classic" },
                                { code: "eur", name: "Euro" },
                                { code: "fun", name: "FunFair" },
                                { code: "gbp", name: "Pound Sterling" },
                                { code: "gno", name: "Gnosis" },
                                { code: "gnt", name: "Golem" },
                                { code: "gup", name: "Matchpool" },
                                { code: "hmq", name: "Humaniq" },
                                { code: "jpy", name: "Japanese Yen" },
                                { code: "lgd", name: "Legends Room" },
                                { code: "lsk", name: "Lisk" },
                                { code: "ltc", name: "Litecoin" },
                                { code: "lun", name: "Lunyr" },
                                { code: "mco", name: "Monaco" },
                                { code: "mtl", name: "Metal" },
                                { code: "myst", name: "Mysterium" },
                                { code: "nmr", name: "Numeraire" },
                                { code: "omg", name: "OmiseGO" },
                                { code: "pay", name: "TenX" },
                                { code: "ptoy", name: "Patientory" },
                                { code: "qrl", name: "Quantum-Resistant Ledger" },
                                { code: "qtum", name: "Qtum" },
                                { code: "rep", name: "Augur" },
                                { code: "rlc", name: "iEx.ec" },
                                { code: "rub", name: "Russian Ruble" },
                                { code: "sc", name: "Siacoin" },
                                { code: "sngls", name: "SingularDTV" },
                                { code: "snt", name: "Status" },
                                { code: "steem", name: "Steem" },
                                { code: "storj", name: "Storj" },
                                { code: "time", name: "ChronoBank" },
                                { code: "tkn", name: "TokenCard" },
                                { code: "trst", name: "WeTrust" },
                                { code: "uah", name: "Ukrainian Hryvnia" },
                                { code: "usd", name: "United States Dollar" },
                                { code: "wings", name: "Wings" },
                                { code: "xem", name: "NEM" },
                                { code: "xlm", name: "Stellar Lumen" },
                                { code: "xmr", name: "Monero" },
                                { code: "xrp", name: "Ripple" },
                                { code: "zec", name: "Zcash" },
                                { code: "dai", name: "DAI" },
                                { code: "sai", name: "SAI" },
                            ];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5899,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.STATUS_NOT_CONNECTED = a.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT = a.STATUS_CONNECTED = void 0);
                            a.STATUS_CONNECTED = "STATUS_CONNECTED";
                            a.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT = "STATUS_CONNECTED_TO_ANOTHER_ACCOUNT";
                            a.STATUS_NOT_CONNECTED = "STATUS_NOT_CONNECTED";
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            590,
            { "./ClickAwayListener": 589, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./ClickAwayListener"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5902,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.PRIORITY_LEVEL_ICON_MAP = a.GAS_FORM_ERRORS = void 0),
                                (a.getGasFormErrorText = function (e, t, { minimumGasLimit: a } = {}) {
                                    switch (e) {
                                        case r.GAS_LIMIT_OUT_OF_BOUNDS:
                                            return t("editGasLimitOutOfBounds", [a]);
                                        case r.MAX_PRIORITY_FEE_TOO_LOW:
                                            return t("editGasMaxPriorityFeeLow");
                                        case r.MAX_FEE_TOO_LOW:
                                            return t("editGasMaxFeeLow");
                                        case r.MAX_PRIORITY_FEE_BELOW_MINIMUM:
                                            return t("editGasMaxPriorityFeeBelowMinimum");
                                        case r.MAX_PRIORITY_FEE_HIGH_WARNING:
                                            return t("editGasMaxPriorityFeeHigh");
                                        case r.MAX_FEE_HIGH_WARNING:
                                            return t("editGasMaxFeeHigh");
                                        case r.MAX_FEE_IMBALANCE:
                                            return t("editGasMaxFeePriorityImbalance");
                                        case r.GAS_PRICE_TOO_LOW:
                                            return t("editGasPriceTooLow");
                                        default:
                                            return "";
                                    }
                                });
                            const r = {
                                GAS_LIMIT_OUT_OF_BOUNDS: "editGasLimitOutOfBounds",
                                MAX_PRIORITY_FEE_TOO_LOW: "editGasMaxPriorityFeeLow",
                                MAX_FEE_TOO_LOW: "editGasMaxFeeLow",
                                MAX_PRIORITY_FEE_BELOW_MINIMUM: "editGasMaxPriorityFeeBelowMinimum",
                                MAX_PRIORITY_FEE_HIGH_WARNING: "editGasMaxPriorityFeeHigh",
                                MAX_FEE_HIGH_WARNING: "editGasMaxFeeHigh",
                                MAX_FEE_IMBALANCE: "editGasMaxFeeImbalance",
                                GAS_PRICE_TOO_LOW: "editGasPriceTooLow",
                            };
                            a.GAS_FORM_ERRORS = r;
                            a.PRIORITY_LEVEL_ICON_MAP = { low: "🐢", medium: "🦊", high: "🦍", dappSuggested: "🌐", swapSuggested: "🔄", custom: "⚙️" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5903,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.FIRST_TIME_FLOW_TYPES = void 0);
                            a.FIRST_TIME_FLOW_TYPES = { IMPORT: "import", CREATE: "create" };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5905,
            { "./routes": 5904 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.SETTINGS_CONSTANTS = void 0);
                            var r = e("./routes");
                            const n = [
                                { tabMessage: (e) => e("general"), sectionMessage: (e) => e("currencyConversion"), descriptionMessage: (e) => e("currencyConversion"), route: `${r.GENERAL_ROUTE}#currency-conversion`, icon: "fa fa-cog" },
                                {
                                    tabMessage: (e) => e("general"),
                                    sectionMessage: (e) => e("primaryCurrencySetting"),
                                    descriptionMessage: (e) => e("primaryCurrencySettingDescription"),
                                    route: `${r.GENERAL_ROUTE}#primary-currency`,
                                    icon: "fa fa-cog",
                                },
                                { tabMessage: (e) => e("general"), sectionMessage: (e) => e("currentLanguage"), descriptionMessage: (e) => e("currentLanguage"), route: `${r.GENERAL_ROUTE}#current-language`, icon: "fa fa-cog" },
                                { tabMessage: (e) => e("general"), sectionMessage: (e) => e("theme"), descriptionMessage: (e) => e("themeDescription"), route: `${r.GENERAL_ROUTE}#theme`, icon: "fa fa-flask" },
                                { tabMessage: (e) => e("general"), sectionMessage: (e) => e("accountIdenticon"), descriptionMessage: (e) => e("accountIdenticon"), route: `${r.GENERAL_ROUTE}#account-identicon`, icon: "fa fa-cog" },
                                {
                                    tabMessage: (e) => e("general"),
                                    sectionMessage: (e) => e("hideZeroBalanceTokens"),
                                    descriptionMessage: (e) => e("hideZeroBalanceTokens"),
                                    route: `${r.GENERAL_ROUTE}#zero-balancetokens`,
                                    icon: "fa fa-cog",
                                },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("stateLogs"), descriptionMessage: (e) => e("stateLogsDescription"), route: `${r.ADVANCED_ROUTE}#state-logs`, icon: "fas fa-sliders-h" },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("syncWithMobile"), descriptionMessage: (e) => e("syncWithMobile"), route: `${r.ADVANCED_ROUTE}#sync-withmobile`, icon: "fas fa-sliders-h" },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("resetAccount"), descriptionMessage: (e) => e("resetAccountDescription"), route: `${r.ADVANCED_ROUTE}#reset-account`, icon: "fas fa-sliders-h" },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("showAdvancedGasInline"),
                                    descriptionMessage: (e) => e("showAdvancedGasInlineDescription"),
                                    route: `${r.ADVANCED_ROUTE}#advanced-gascontrols`,
                                    icon: "fas fa-sliders-h",
                                },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("showHexData"), descriptionMessage: (e) => e("showHexDataDescription"), route: `${r.ADVANCED_ROUTE}#show-hexdata`, icon: "fas fa-sliders-h" },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("showFiatConversionInTestnets"),
                                    descriptionMessage: (e) => e("showFiatConversionInTestnetsDescription"),
                                    route: `${r.ADVANCED_ROUTE}#conversion-testnetworks`,
                                    icon: "fas fa-sliders-h",
                                },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("showTestnetNetworks"),
                                    descriptionMessage: (e) => e("showTestnetNetworksDescription"),
                                    route: `${r.ADVANCED_ROUTE}#show-testnets`,
                                    icon: "fas fa-sliders-h",
                                },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("nonceField"), descriptionMessage: (e) => e("nonceFieldDescription"), route: `${r.ADVANCED_ROUTE}#customize-nonce`, icon: "fas fa-sliders-h" },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("autoLockTimeLimit"),
                                    descriptionMessage: (e) => e("autoLockTimeLimitDescription"),
                                    route: `${r.ADVANCED_ROUTE}#autolock-timer`,
                                    icon: "fas fa-sliders-h",
                                },
                                { tabMessage: (e) => e("advanced"), sectionMessage: (e) => e("ipfsGateway"), descriptionMessage: (e) => e("ipfsGatewayDescription"), route: `${r.ADVANCED_ROUTE}#ipfs-gateway`, icon: "fas fa-sliders-h" },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("preferredLedgerConnectionType"),
                                    descriptionMessage: (e) => e("preferredLedgerConnectionType"),
                                    route: `${r.ADVANCED_ROUTE}#ledger-connection`,
                                    icon: "fas fa-sliders-h",
                                },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("dismissReminderField"),
                                    descriptionMessage: (e) => e("dismissReminderDescriptionField"),
                                    route: `${r.ADVANCED_ROUTE}#dimiss-secretrecovery`,
                                    icon: "fas fa-sliders-h",
                                },
                                { tabMessage: (e) => e("contacts"), sectionMessage: (e) => e("contacts"), descriptionMessage: (e) => e("contacts"), route: r.CONTACT_LIST_ROUTE, icon: "fa fa-address-book" },
                                {
                                    tabMessage: (e) => e("securityAndPrivacy"),
                                    sectionMessage: (e) => e("revealSeedWords"),
                                    descriptionMessage: (e) => e("revealSeedWords"),
                                    route: `${r.SECURITY_ROUTE}#reveal-secretrecovery`,
                                    icon: "fa fa-lock",
                                },
                                {
                                    tabMessage: (e) => e("securityAndPrivacy"),
                                    sectionMessage: (e) => e("showIncomingTransactions"),
                                    descriptionMessage: (e) => e("showIncomingTransactionsDescription"),
                                    route: `${r.SECURITY_ROUTE}#incoming-transaction`,
                                    icon: "fa fa-lock",
                                },
                                {
                                    tabMessage: (e) => e("securityAndPrivacy"),
                                    sectionMessage: (e) => e("usePhishingDetection"),
                                    descriptionMessage: (e) => e("usePhishingDetectionDescription"),
                                    route: `${r.SECURITY_ROUTE}#phishing-detection`,
                                    icon: "fa fa-lock",
                                },
                                {
                                    tabMessage: (e) => e("securityAndPrivacy"),
                                    sectionMessage: (e) => e("participateInMetaMetrics"),
                                    descriptionMessage: (e) => e("participateInMetaMetricsDescription"),
                                    route: `${r.SECURITY_ROUTE}#metrametrics`,
                                    icon: "fa fa-lock",
                                },
                                {
                                    tabMessage: (e) => e("alerts"),
                                    sectionMessage: (e) => e("alertSettingsUnconnectedAccount"),
                                    descriptionMessage: (e) => e("alertSettingsUnconnectedAccount"),
                                    route: `${r.ALERTS_ROUTE}#unconnected-account`,
                                    icon: "fa fa-bell",
                                },
                                {
                                    tabMessage: (e) => e("alerts"),
                                    sectionMessage: (e) => e("alertSettingsWeb3ShimUsage"),
                                    descriptionMessage: (e) => e("alertSettingsWeb3ShimUsage"),
                                    route: `${r.ALERTS_ROUTE}#web3-shimusage`,
                                    icon: "fa fa-bell",
                                },
                                { tabMessage: (e) => e("networks"), sectionMessage: (e) => e("mainnet"), descriptionMessage: (e) => e("mainnet"), route: `${r.NETWORKS_ROUTE}#networks-mainnet`, icon: "fa fa-plug" },
                                { tabMessage: (e) => e("networks"), sectionMessage: (e) => e("goerli"), descriptionMessage: (e) => e("goerli"), route: `${r.NETWORKS_ROUTE}#networks-goerli`, icon: "fa fa-plug" },
                                { tabMessage: (e) => e("networks"), sectionMessage: (e) => e("sepolia"), descriptionMessage: (e) => e("sepolia"), route: `${r.NETWORKS_ROUTE}#networks-sepolia`, icon: "fa fa-plug" },
                                { tabMessage: (e) => e("networks"), sectionMessage: (e) => e("localhost"), descriptionMessage: (e) => e("localhost"), route: `${r.NETWORKS_ROUTE}#networks-localhost`, icon: "fa fa-plug" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("metamaskVersion"), descriptionMessage: (e) => e("builtAroundTheWorld"), route: `${r.ABOUT_US_ROUTE}#version`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("links"), descriptionMessage: (e) => e("links"), route: `${r.ABOUT_US_ROUTE}#links`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("privacyMsg"), descriptionMessage: (e) => e("privacyMsg"), route: `${r.ABOUT_US_ROUTE}#privacy-policy`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("terms"), descriptionMessage: (e) => e("terms"), route: `${r.ABOUT_US_ROUTE}#terms`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("attributions"), descriptionMessage: (e) => e("attributions"), route: `${r.ABOUT_US_ROUTE}#attributions`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("supportCenter"), descriptionMessage: (e) => e("supportCenter"), route: `${r.ABOUT_US_ROUTE}#supportcenter`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("visitWebSite"), descriptionMessage: (e) => e("visitWebSite"), route: `${r.ABOUT_US_ROUTE}#visitwebsite`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("contactUs"), descriptionMessage: (e) => e("contactUs"), route: `${r.ABOUT_US_ROUTE}#contactus`, icon: "fa fa-info-circle" },
                                { tabMessage: (e) => e("about"), sectionMessage: (e) => e("betaTerms"), descriptionMessage: (e) => e("betaTerms"), route: `${r.ABOUT_US_ROUTE}#beta-terms`, icon: "fa fa-info-circle" },
                                {
                                    tabMessage: (e) => e("experimental"),
                                    sectionMessage: (e) => e("enableEIP1559V2"),
                                    descriptionMessage: (e) => e("enableEIP1559V2Description"),
                                    route: `${r.EXPERIMENTAL_ROUTE}#enable-advanced-gas`,
                                    icon: "fa fa-flask",
                                },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("enhancedTokenDetection"),
                                    descriptionMessage: (e) => e("enhancedTokenDetectionDescription"),
                                    route: `${r.ADVANCED_ROUTE}#token-description`,
                                    icon: "fas fa-sliders-h",
                                },
                                {
                                    tabMessage: (e) => e("experimental"),
                                    sectionMessage: (e) => e("enableOpenSeaAPI"),
                                    descriptionMessage: (e) => e("enableOpenSeaAPIDescription"),
                                    route: `${r.EXPERIMENTAL_ROUTE}#opensea-api`,
                                    icon: "fa fa-flask",
                                    featureFlag: "COLLECTIBLES_V1",
                                },
                                {
                                    tabMessage: (e) => e("experimental"),
                                    sectionMessage: (e) => e("useCollectibleDetection"),
                                    descriptionMessage: (e) => e("useCollectibleDetectionDescription"),
                                    route: `${r.EXPERIMENTAL_ROUTE}#autodetect-nfts`,
                                    icon: "fa fa-flask",
                                    featureFlag: "COLLECTIBLES_V1",
                                },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("backupUserData"),
                                    descriptionMessage: (e) => e("backupUserDataDescription"),
                                    route: `${r.ADVANCED_ROUTE}#backup-userdata`,
                                    icon: "fas fa-download",
                                },
                                {
                                    tabMessage: (e) => e("advanced"),
                                    sectionMessage: (e) => e("restoreUserData"),
                                    descriptionMessage: (e) => e("restoreUserDataDescription"),
                                    route: `${r.ADVANCED_ROUTE}#restore-userdata`,
                                    icon: "fas fa-upload",
                                },
                            ];
                            a.SETTINGS_CONSTANTS = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5908,
            { "../../constants/routes": 5904, "prop-types": 4806, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = e("react-router-dom"),
                                s = e("../../constants/routes");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                const { isUnlocked: t, completedOnboarding: a } = e;
                                switch (!0) {
                                    case t && a:
                                        return r.default.createElement(o.Route, e);
                                    case !a:
                                        return r.default.createElement(o.Redirect, { to: { pathname: s.INITIALIZE_ROUTE } });
                                    default:
                                        return r.default.createElement(o.Redirect, { to: { pathname: s.UNLOCK_ROUTE } });
                                }
                            }
                            l.propTypes = { isUnlocked: n.default.bool, completedOnboarding: n.default.bool };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5909,
            { "./authenticated.component": 5908, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = e("react-redux"),
                                o = (r = e("./authenticated.component")) && r.__esModule ? r : { default: r };
                            var s = (0, n.connect)((e) => {
                                const {
                                    metamask: { isUnlocked: t, completedOnboarding: a },
                                } = e;
                                return { isUnlocked: t, completedOnboarding: a };
                            })(o.default);
                            a.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            591,
            {
                "../styles/transitions": 866,
                "../styles/useTheme": 867,
                "../styles/withStyles": 868,
                "../transitions/utils": 871,
                "../utils": 882,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                "@babel/runtime/helpers/slicedToArray": 194,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
                "react-transition-group": 846,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/slicedToArray")),
                                i = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                l = r(e("react")),
                                u = n(e("clsx")),
                                c = (n(e("prop-types")), e("react-transition-group")),
                                d = n(e("../styles/withStyles")),
                                f = e("../styles/transitions"),
                                p = e("../transitions/utils"),
                                m = n(e("../styles/useTheme")),
                                g = e("../utils"),
                                h = function (e) {
                                    return {
                                        container: { height: 0, overflow: "hidden", transition: e.transitions.create("height") },
                                        entered: { height: "auto", overflow: "visible" },
                                        hidden: { visibility: "hidden" },
                                        wrapper: { display: "flex" },
                                        wrapperInner: { width: "100%" },
                                    };
                                };
                            a.styles = h;
                            var v = l.forwardRef(function (e, t) {
                                var a = e.children,
                                    r = e.classes,
                                    n = e.className,
                                    d = e.collapsedHeight,
                                    h = void 0 === d ? "0px" : d,
                                    v = e.component,
                                    C = void 0 === v ? "div" : v,
                                    b = e.disableStrictModeCompat,
                                    y = void 0 !== b && b,
                                    _ = e.in,
                                    E = e.onEnter,
                                    T = e.onEntered,
                                    w = e.onEntering,
                                    k = e.onExit,
                                    O = e.onExited,
                                    P = e.onExiting,
                                    M = e.style,
                                    S = e.timeout,
                                    x = void 0 === S ? f.duration.standard : S,
                                    N = e.TransitionComponent,
                                    A = void 0 === N ? c.Transition : N,
                                    R = (0, i.default)(e, [
                                        "children",
                                        "classes",
                                        "className",
                                        "collapsedHeight",
                                        "component",
                                        "disableStrictModeCompat",
                                        "in",
                                        "onEnter",
                                        "onEntered",
                                        "onEntering",
                                        "onExit",
                                        "onExited",
                                        "onExiting",
                                        "style",
                                        "timeout",
                                        "TransitionComponent",
                                    ]),
                                    L = (0, m.default)(),
                                    I = l.useRef(),
                                    F = l.useRef(null),
                                    D = l.useRef(),
                                    j = "number" == typeof h ? "".concat(h, "px") : h;
                                l.useEffect(function () {
                                    return function () {
                                        clearTimeout(I.current);
                                    };
                                }, []);
                                var $ = L.unstable_strictMode && !y,
                                    H = l.useRef(null),
                                    G = (0, g.useForkRef)(t, $ ? H : undefined),
                                    V = function (e) {
                                        return function (t, a) {
                                            if (e) {
                                                var r = $ ? [H.current, t] : [t, a],
                                                    n = (0, s.default)(r, 2),
                                                    o = n[0],
                                                    i = n[1];
                                                i === undefined ? e(o) : e(o, i);
                                            }
                                        };
                                    },
                                    W = V(function (e, t) {
                                        (e.style.height = j), E && E(e, t);
                                    }),
                                    U = V(function (e, t) {
                                        var a = F.current ? F.current.clientHeight : 0,
                                            r = (0, p.getTransitionProps)({ style: M, timeout: x }, { mode: "enter" }).duration;
                                        if ("auto" === x) {
                                            var n = L.transitions.getAutoHeightDuration(a);
                                            (e.style.transitionDuration = "".concat(n, "ms")), (D.current = n);
                                        } else e.style.transitionDuration = "string" == typeof r ? r : "".concat(r, "ms");
                                        (e.style.height = "".concat(a, "px")), w && w(e, t);
                                    }),
                                    B = V(function (e, t) {
                                        (e.style.height = "auto"), T && T(e, t);
                                    }),
                                    q = V(function (e) {
                                        var t = F.current ? F.current.clientHeight : 0;
                                        (e.style.height = "".concat(t, "px")), k && k(e);
                                    }),
                                    z = V(O),
                                    Y = V(function (e) {
                                        var t = F.current ? F.current.clientHeight : 0,
                                            a = (0, p.getTransitionProps)({ style: M, timeout: x }, { mode: "exit" }).duration;
                                        if ("auto" === x) {
                                            var r = L.transitions.getAutoHeightDuration(t);
                                            (e.style.transitionDuration = "".concat(r, "ms")), (D.current = r);
                                        } else e.style.transitionDuration = "string" == typeof a ? a : "".concat(a, "ms");
                                        (e.style.height = j), P && P(e);
                                    });
                                return l.createElement(
                                    A,
                                    (0, o.default)(
                                        {
                                            in: _,
                                            onEnter: W,
                                            onEntered: B,
                                            onEntering: U,
                                            onExit: q,
                                            onExited: z,
                                            onExiting: Y,
                                            addEndListener: function (e, t) {
                                                var a = $ ? e : t;
                                                "auto" === x && (I.current = setTimeout(a, D.current || 0));
                                            },
                                            nodeRef: $ ? H : undefined,
                                            timeout: "auto" === x ? null : x,
                                        },
                                        R
                                    ),
                                    function (e, t) {
                                        return l.createElement(
                                            C,
                                            (0, o.default)({ className: (0, u.default)(r.container, n, { entered: r.entered, exited: !_ && "0px" === j && r.hidden }[e]), style: (0, o.default)({ minHeight: j }, M), ref: G }, t),
                                            l.createElement("div", { className: r.wrapper, ref: F }, l.createElement("div", { className: r.wrapperInner }, a))
                                        );
                                    }
                                );
                            });
                            v.muiSupportAuto = !0;
                            var C = (0, d.default)(h, { name: "MuiCollapse" })(v);
                            a.default = C;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5910,
            { "./authenticated.container": 5909 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./authenticated.container")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5911,
            { "prop-types": 4806, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = i);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = e("react-router-dom");
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i({ flag: e, redirectRoute: t, ...a }) {
                                return e ? r.default.createElement(o.Route, a) : r.default.createElement(o.Redirect, { to: { pathname: t } });
                            }
                            i.propTypes = { flag: n.default.bool.isRequired, redirectRoute: n.default.string.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5912,
            { "./initialized.container": 5914 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./initialized.container")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5913,
            { "../../constants/routes": 5904, "prop-types": 4806, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = l);
                            var r = i(e("react")),
                                n = i(e("prop-types")),
                                o = e("react-router-dom"),
                                s = e("../../constants/routes");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                return e.completedOnboarding ? r.default.createElement(o.Route, e) : r.default.createElement(o.Redirect, { to: { pathname: s.INITIALIZE_ROUTE } });
                            }
                            l.propTypes = { completedOnboarding: n.default.bool };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5914,
            { "./initialized.component": 5913, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = e("react-redux"),
                                o = (r = e("./initialized.component")) && r.__esModule ? r : { default: r };
                            var s = (0, n.connect)((e) => {
                                const {
                                    metamask: { completedOnboarding: t },
                                } = e;
                                return { completedOnboarding: t };
                            })(o.default);
                            a.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5915,
            { "./with-modal-props": 5916 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./with-modal-props")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5916,
            { "../../../store/actions": 6307, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function (e) {
                                    return (0, r.connect)(o, s)(e);
                                });
                            var r = e("react-redux"),
                                n = e("../../../store/actions");
                            const o = (e) => {
                                    const { appState: t } = e,
                                        { props: a } = t.modal.modalState;
                                    return { ...a };
                                },
                                s = (e) => ({ hideModal: () => e((0, n.hideModal)()) });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5918,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.camelCaseToCapitalize = function (e = "") {
                                    return e.replace(/([A-Z])/gu, " $1").replace(/^./u, (e) => e.toUpperCase());
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            592,
            { "./Collapse": 591, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./Collapse"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5921,
            { "./util": 5937 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.exportAsFile = function (e, t, a = "text/csv") {
                                    e = e || (0, r.getRandomFileName)();
                                    const n = new window.Blob([t], { type: a });
                                    if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(n, e);
                                    else {
                                        const t = window.document.createElement("a");
                                        (t.target = "_blank"), (t.href = window.URL.createObjectURL(n)), (t.download = e), document.body.appendChild(t), t.click(), document.body.removeChild(t);
                                    }
                                });
                            var r = e("./util");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5923,
            { "../../../shared/constants/gas": 5329, "../../../shared/lib/transactions-controller-utils": 5347, "../../../shared/modules/conversion.utils": 5351, "./util": 5937, "bignumber.js": 1637, "ethereumjs-util": 2107, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.addTenPercent = d),
                                (a.addTenPercentAndRound = f),
                                (a.editGasModeIsSpeedUpOrCancel = function (e) {
                                    return e === i.EDIT_GAS_MODES.CANCEL || e === i.EDIT_GAS_MODES.SPEED_UP;
                                }),
                                (a.formatGasFeeOrFeeRange = function (e, { precision: t = 2 } = {}) {
                                    if ((0, c.isNullish)(e) || (Array.isArray(e) && 0 === e.length)) return null;
                                    const a = Array.isArray(e) ? e.slice(0, 2) : [e],
                                        r = Array.isArray(t) ? t.slice(0, 2) : (0, n.times)(a.length, (0, n.constant)(t));
                                    return `${(0, n.uniq)((0, n.zip)(a, r).map(([e, t]) => (t === undefined ? e : (0, c.roundToDecimalPlacesRemovingExtraZeroes)(e, t)))).join(" - ")} GWEI`;
                                }),
                                (a.gasEstimateGreaterThanGasUsedPlusTenPercent = void 0),
                                (a.isMetamaskSuggestedGasEstimate = function (e) {
                                    return [i.GAS_RECOMMENDATIONS.HIGH, i.GAS_RECOMMENDATIONS.MEDIUM, i.GAS_RECOMMENDATIONS.LOW].includes(e);
                                });
                            var r,
                                n = e("lodash"),
                                o = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                                s = e("ethereumjs-util"),
                                i = e("../../../shared/constants/gas"),
                                l = e("../../../shared/modules/conversion.utils"),
                                u = e("../../../shared/lib/transactions-controller-utils"),
                                c = e("./util");
                            function d(e, t = {}) {
                                return e === undefined ? undefined : (0, s.addHexPrefix)((0, l.multiplyCurrencies)(e, 1.1, { toNumericBase: "hex", multiplicandBase: 16, multiplierBase: 10, numberOfDecimals: 0, ...t }));
                            }
                            function f(e) {
                                return d(e, { numberOfDecimals: 0 });
                            }
                            a.gasEstimateGreaterThanGasUsedPlusTenPercent = (e, t, a) => {
                                var r;
                                let { maxFeePerGas: n } = e;
                                n = new o.default((0, u.hexWEIToDecGWEI)(f(n)));
                                const s = null === (r = t[a]) || void 0 === r ? void 0 : r.suggestedMaxFeePerGas;
                                return (0, c.bnGreaterThan)(s, n);
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5924,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.isHardwareKeyring = function (e = "") {
                                    return e.includes("Hardware");
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5926,
            { "../../../shared/modules/hexstring-utils": 5354 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function (e) {
                                    n || (n = new o(e));
                                    return n;
                                });
                            var r = e("../../../shared/modules/hexstring-utils");
                            let n;
                            function o(e) {
                                (this.jazzicon = e), (this.cache = {});
                            }
                            (o.prototype.iconForAddress = function (e, t, a) {
                                return (function (e, t) {
                                    return (0, r.isValidHexAddress)(e, { allowNonPrefixed: !1 }) && t && t.iconUrl;
                                })(e, a)
                                    ? (function (e = {}) {
                                          const t = document.createElement("img");
                                          return (t.src = null == e ? void 0 : e.iconUrl), (t.style.width = "100%"), t;
                                      })(a)
                                    : this.generateIdenticonSvg(e, t);
                            }),
                                (o.prototype.generateIdenticonSvg = function (e, t) {
                                    const a = `${e}:${t}`;
                                    return (this.cache[a] || (this.cache[a] = this.generateNewIdenticon(e, t))).cloneNode(!0);
                                }),
                                (o.prototype.generateNewIdenticon = function (e, t) {
                                    const a = (function (e) {
                                        const t = e.slice(2, 10);
                                        return parseInt(t, 16);
                                    })(e);
                                    return this.jazzicon(t, a);
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5927,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = () => window.matchMedia("screen and (max-width: 575px)").matches;
                            a.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5928,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.getMethodName = function (e) {
                                    if (!e || "string" != typeof e) return "";
                                    return e
                                        .replace(/([a-z])([A-Z])/gu, "$1 $2")
                                        .replace(/([A-Z])([a-z])/gu, " $1$2")
                                        .replace(/ +/gu, " ");
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            593,
            {
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
                "@babel/runtime/helpers/defineProperty": 176,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = n(e("@babel/runtime/helpers/defineProperty")),
                                l = r(e("react")),
                                u = (n(e("prop-types")), n(e("clsx"))),
                                c = n(e("../styles/withStyles")),
                                d = n(e("../utils/capitalize")),
                                f = function (e) {
                                    return {
                                        root: (0, i.default)(
                                            { width: "100%", marginLeft: "auto", boxSizing: "border-box", marginRight: "auto", paddingLeft: e.spacing(2), paddingRight: e.spacing(2), display: "block" },
                                            e.breakpoints.up("sm"),
                                            { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) }
                                        ),
                                        disableGutters: { paddingLeft: 0, paddingRight: 0 },
                                        fixed: Object.keys(e.breakpoints.values).reduce(function (t, a) {
                                            var r = e.breakpoints.values[a];
                                            return 0 !== r && (t[e.breakpoints.up(a)] = { maxWidth: r }), t;
                                        }, {}),
                                        maxWidthXs: (0, i.default)({}, e.breakpoints.up("xs"), { maxWidth: Math.max(e.breakpoints.values.xs, 444) }),
                                        maxWidthSm: (0, i.default)({}, e.breakpoints.up("sm"), { maxWidth: e.breakpoints.values.sm }),
                                        maxWidthMd: (0, i.default)({}, e.breakpoints.up("md"), { maxWidth: e.breakpoints.values.md }),
                                        maxWidthLg: (0, i.default)({}, e.breakpoints.up("lg"), { maxWidth: e.breakpoints.values.lg }),
                                        maxWidthXl: (0, i.default)({}, e.breakpoints.up("xl"), { maxWidth: e.breakpoints.values.xl }),
                                    };
                                };
                            a.styles = f;
                            var p = l.forwardRef(function (e, t) {
                                    var a = e.classes,
                                        r = e.className,
                                        n = e.component,
                                        i = void 0 === n ? "div" : n,
                                        c = e.disableGutters,
                                        f = void 0 !== c && c,
                                        p = e.fixed,
                                        m = void 0 !== p && p,
                                        g = e.maxWidth,
                                        h = void 0 === g ? "lg" : g,
                                        v = (0, s.default)(e, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
                                    return l.createElement(i, (0, o.default)({ className: (0, u.default)(a.root, r, m && a.fixed, f && a.disableGutters, !1 !== h && a["maxWidth".concat((0, d.default)(String(h)))]), ref: t }, v));
                                }),
                                m = (0, c.default)(f, { name: "MuiContainer" })(p);
                            a.default = m;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5932,
            { "../../../shared/constants/permissions": 5334, "deep-freeze-strict": 1880 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.getPermissionDescription = void 0);
                            var r,
                                n = (r = e("deep-freeze-strict")) && r.__esModule ? r : { default: r },
                                o = e("../../../shared/constants/permissions");
                            const s = Symbol("unknown"),
                                i = (0, n.default)({
                                    [o.RestrictedMethods.eth_accounts]: { label: (e) => e("permission_ethereumAccounts"), leftIcon: "fas fa-eye", rightIcon: null },
                                    [s]: { label: (e, t) => e("permission_unknown", [null != t ? t : "undefined"]), leftIcon: "fas fa-times-circle", rightIcon: null },
                                });
                            a.getPermissionDescription = (e, t, a) => {
                                let r = i[s];
                                return Object.hasOwnProperty.call(i, t) && (r = i[t]), { ...r, label: r.label(e, t, a) };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5933,
            { "../constants/settings": 5905, _process: 4801 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(a, "__esModule", { value: !0 }),
                                        (a.getNumberOfSettingsInSection = function (e, t) {
                                            return s(e, t).length;
                                        }),
                                        (a.getSettingsRoutes = o),
                                        (a.handleSettingsRefs = function (e, t, a) {
                                            const r = s(e, t),
                                                n = r.findIndex((e) => e.route.substring(1) === window.location.hash.substring(1));
                                            if (-1 === n) return;
                                            const o = 1 === r.length ? a : a[n];
                                            if (null != o && o.current) {
                                                o.current.scrollIntoView({ behavior: "smooth" }), o.current.focus();
                                                const e = window.location.hash.split("#")[1];
                                                window.location.hash = e;
                                            }
                                        }),
                                        (a.highlightSearchedText = function () {
                                            const e = document.getElementById("search-settings"),
                                                t = new RegExp(e.value, "gi");
                                            [...document.querySelectorAll(".settings-page__header__search__list__item")].forEach((e) => {
                                                const a = e.querySelector(".settings-page__header__search__list__item__tab"),
                                                    r = e.querySelector(".settings-page__header__search__list__item__section");
                                                i(a, t), i(r, t);
                                            });
                                        });
                                    var r = e("../constants/settings");
                                    let n;
                                    function o() {
                                        return n || ((n = r.SETTINGS_CONSTANTS.filter((e) => !e.featureFlag || t.env[e.featureFlag])), n);
                                    }
                                    function s(e, t) {
                                        return o().filter((a) => a.tabMessage(e) === t);
                                    }
                                    function i(e, t) {
                                        if (null !== e) {
                                            let a = e.innerHTML;
                                            (a = a.replace("&amp;", "&")), (a = a.replace(/(<span style="background:#ffd33d">|<\/span>)/gim, "")), (e.innerHTML = a.replace(t, '<span style="background:#ffd33d">$&</span>'));
                                        }
                                    }
                                }.call(this));
                            }.call(this, e("_process")));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5938,
            { "../../../app/scripts/lib/util": 86, "../../../shared/constants/app": 5328 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = e("../../../shared/constants/app"),
                                n = e("../../../app/scripts/lib/util");
                            var o = class {
                                static async checkStatus() {
                                    const e = (0, n.getEnvironmentType)() === r.ENVIRONMENT_TYPE_POPUP,
                                        t = (0, n.getPlatform)() === (r.PLATFORM_FIREFOX || r.PLATFORM_BRAVE),
                                        a = (await window.navigator.mediaDevices.enumerateDevices()).filter((e) => "videoinput" === e.kind),
                                        o = a.length > 0,
                                        s = a.some((e) => e.label && e.label.length > 0);
                                    if (o) {
                                        let a = !0;
                                        return ((t && e) || (e && !s)) && (a = !1), { permissions: s, environmentReady: a };
                                    }
                                    const i = new Error("No webcam found");
                                    throw ((i.type = "NO_WEBCAM_FOUND"), i);
                                }
                            };
                            a.default = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5939,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/gas.utils": 5353,
                "../../helpers/constants/common": 5898,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../useCurrencyDisplay": 5952,
                "../useUserPreferencedCurrency": 5974,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useGasEstimates = function ({ editGasMode: e, gasEstimateType: t, gasFeeEstimates: a, gasLimit: p, gasPrice: m, maxFeePerGas: g, maxPriorityFeePerGas: h, minimumGasLimit: v, transaction: C }) {
                                    var b;
                                    const y = (0, r.useSelector)(i.checkNetworkAndAccountSupports1559) && !(0, u.isLegacyTransaction)(null == C ? void 0 : C.txParams),
                                        { currency: _, numberOfDecimals: E } = (0, d.useUserPreferencedCurrency)(s.SECONDARY),
                                        T = (0, r.useSelector)(i.getShouldShowFiat),
                                        { currency: w, numberOfDecimals: k } = (0, d.useUserPreferencedCurrency)(s.PRIMARY);
                                    let O = { gasLimit: (0, f.decimalToHex)(p) };
                                    var P;
                                    O = y
                                        ? {
                                              ...O,
                                              maxFeePerGas: (0, l.decGWEIToHexWEI)(g || m || "0"),
                                              maxPriorityFeePerGas: (0, l.decGWEIToHexWEI)(h || g || m || "0"),
                                              baseFeePerGas: (0, l.decGWEIToHexWEI)(null !== (P = a.estimatedBaseFee) && void 0 !== P ? P : "0"),
                                          }
                                        : t === n.GAS_ESTIMATE_TYPES.NONE
                                        ? { ...O, gasPrice: "0x0" }
                                        : { ...O, gasPrice: (0, l.decGWEIToHexWEI)(m) };
                                    const M = (0, o.getMaximumGasTotalInHexWei)(O);
                                    e === n.EDIT_GAS_MODES.SWAPS && (O = { ...O, gasLimit: v });
                                    const S = (0, o.getMinimumGasTotalInHexWei)(O),
                                        [x] = (0, c.useCurrencyDisplay)(M, { numberOfDecimals: k, currency: w }),
                                        [, { value: N }] = (0, c.useCurrencyDisplay)(M, { numberOfDecimals: E, currency: _ }),
                                        [A] = (0, c.useCurrencyDisplay)(S, { numberOfDecimals: k, currency: w }),
                                        [, { value: R }] = (0, c.useCurrencyDisplay)(S, { numberOfDecimals: E, currency: _ });
                                    return {
                                        estimatedMaximumFiat: T ? N : "",
                                        estimatedMinimumFiat: T ? R : "",
                                        estimatedMaximumNative: x,
                                        estimatedMinimumNative: A,
                                        estimatedBaseFee: y ? (0, l.decGWEIToHexWEI)(null !== (b = a.estimatedBaseFee) && void 0 !== b ? b : "0") : undefined,
                                        maximumCostInHexWei: M,
                                        minimumCostInHexWei: S,
                                    };
                                });
                            var r = e("react-redux"),
                                n = e("../../../shared/constants/gas"),
                                o = e("../../../shared/modules/gas.utils"),
                                s = e("../../helpers/constants/common"),
                                i = e("../../selectors"),
                                l = e("../../helpers/utils/conversions.util"),
                                u = e("../../helpers/utils/transactions.util"),
                                c = e("../useCurrencyDisplay"),
                                d = e("../useUserPreferencedCurrency"),
                                f = e("../../../shared/lib/transactions-controller-utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            594,
            { "./Container": 593, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./Container"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5940,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/modules/conversion.utils": 5351,
                "../../helpers/constants/gas": 5902,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/transactions.util": 5935,
                "../../helpers/utils/util": 5937,
                "../../selectors": 6300,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useGasFeeErrors = function ({
                                    gasEstimateType: e,
                                    gasFeeEstimates: t,
                                    isGasEstimatesLoading: a,
                                    gasLimit: p,
                                    gasPrice: m,
                                    maxPriorityFeePerGas: g,
                                    maxFeePerGas: h,
                                    minimumCostInHexWei: v,
                                    minimumGasLimit: C,
                                    transaction: b,
                                }) {
                                    const y = (0, n.useSelector)(i.checkNetworkAndAccountSupports1559) && !(0, u.isLegacyTransaction)(null == b ? void 0 : b.txParams),
                                        _ = e === o.GAS_ESTIMATE_TYPES.FEE_MARKET,
                                        E = ((e, t) => {
                                            if ((0, s.conversionLessThan)({ value: e, fromNumericBase: "dec" }, { value: t || o.GAS_LIMITS.SIMPLE, fromNumericBase: "hex" })) return d.GAS_FORM_ERRORS.GAS_LIMIT_OUT_OF_BOUNDS;
                                            return undefined;
                                        })(p, C),
                                        T = ((e, t) => {
                                            if (!t) return undefined;
                                            if ((0, c.bnLessThanEqualTo)(e, 0)) return d.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_BELOW_MINIMUM;
                                            return undefined;
                                        })(g, y),
                                        w = ((e, t, a, r) => {
                                            if (t || !r) return undefined;
                                            if ((0, c.bnGreaterThan)(a, e)) return d.GAS_FORM_ERRORS.MAX_FEE_IMBALANCE;
                                            return undefined;
                                        })(h, T, g, y),
                                        k = ((e, t, a, r) => {
                                            var n;
                                            if (a && e) return undefined;
                                            if ((!a || (null != r && null !== (n = r.txParams) && void 0 !== n && n.gasPrice)) && (0, c.bnLessThanEqualTo)(t, 0)) return d.GAS_FORM_ERRORS.GAS_PRICE_TOO_LOW;
                                            return undefined;
                                        })(_, m, y, b),
                                        O = ((e, t, a, r, n) => {
                                            var o;
                                            if (!n || !t || a) return undefined;
                                            if ((0, c.bnLessThan)(r, null == e || null === (o = e.low) || void 0 === o ? void 0 : o.suggestedMaxPriorityFeePerGas)) return d.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_TOO_LOW;
                                            if (null != e && e.high && (0, c.bnGreaterThan)(r, 1.5 * e.high.suggestedMaxPriorityFeePerGas)) return d.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_HIGH_WARNING;
                                            return undefined;
                                        })(t, _, a, g, y),
                                        P = ((e, t, a, r, n, o, s) => {
                                            var i;
                                            if (n || r || !a || !s || t) return undefined;
                                            if ((0, c.bnLessThan)(o, null == e || null === (i = e.low) || void 0 === i ? void 0 : i.suggestedMaxFeePerGas)) return d.GAS_FORM_ERRORS.MAX_FEE_TOO_LOW;
                                            if (null != e && e.high && (0, c.bnGreaterThan)(o, e.high.suggestedMaxFeePerGas * f)) return d.GAS_FORM_ERRORS.MAX_FEE_HIGH_WARNING;
                                            return undefined;
                                        })(t, a, _, w, T, h, y),
                                        M = (0, r.useMemo)(() => {
                                            const e = {};
                                            return E && (e.gasLimit = E), T && (e.maxPriorityFee = T), w && (e.maxFee = w), k && (e.gasPrice = k), e;
                                        }, [E, T, w, k]),
                                        S = (0, r.useMemo)(() => {
                                            const e = {};
                                            return O && (e.maxPriorityFee = O), P && (e.maxFee = P), e;
                                        }, [O, P]),
                                        x = y && !_,
                                        N = Boolean(Object.keys(M).length),
                                        A = (0, r.useMemo)(() => ({ ...S, ...M }), [M, S]),
                                        { balance: R } = (0, n.useSelector)(i.getSelectedAccount, n.shallowEqual),
                                        L = ((e, t, a) => {
                                            var r;
                                            if (e === undefined || a === undefined) return !1;
                                            const n = (0, l.addHexes)(e, (null == t || null === (r = t.txParams) || void 0 === r ? void 0 : r.value) || "0x0");
                                            return (0, s.conversionGreaterThan)({ value: n, fromNumericBase: "hex" }, { value: a, fromNumericBase: "hex" });
                                        })(v, b, R);
                                    return { gasErrors: A, hasGasErrors: N, gasWarnings: S, balanceError: L, estimatesUnavailableWarning: x, hasSimulationError: Boolean(null == b ? void 0 : b.simulationFails) };
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../../../shared/constants/gas"),
                                s = e("../../../shared/modules/conversion.utils"),
                                i = e("../../selectors"),
                                l = e("../../helpers/utils/conversions.util"),
                                u = e("../../helpers/utils/transactions.util"),
                                c = e("../../helpers/utils/util"),
                                d = e("../../helpers/constants/gas");
                            const f = 1.5;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5941,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/lib/metamask-controller-utils": 5343,
                "../../helpers/constants/gas": 5902,
                "../../helpers/utils/gas": 5923,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../useGasFeeEstimates": 5956,
                "./useGasEstimates": 5939,
                "./useGasFeeErrors": 5940,
                "./useGasPriceInput": 5942,
                "./useMaxFeePerGasInput": 5943,
                "./useMaxPriorityFeePerGasInput": 5944,
                "./useTransactionFunctions": 5945,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useGasFeeInputs = function (e = o.GAS_RECOMMENDATIONS.MEDIUM, t, a = "0x5208", C = o.EDIT_GAS_MODES.MODIFY_IN_PLACE) {
                                    const b = {
                                        txParams: null == t ? void 0 : t.txParams,
                                        id: null == t ? void 0 : t.id,
                                        userFeeLevel: null == t ? void 0 : t.userFeeLevel,
                                        originalGasEstimate: null == t ? void 0 : t.originalGasEstimate,
                                        userEditedGasLimit: null == t ? void 0 : t.userEditedGasLimit,
                                    };
                                    null != t && t.previousGas && (b.previousGas = null == t ? void 0 : t.previousGas);
                                    const [y, _] = (0, r.useState)(b),
                                        E = (0, c.editGasModeIsSpeedUpOrCancel)(C) ? y : t,
                                        T = (0, n.useSelector)(i.getEIP1559V2Enabled),
                                        w = (0, n.useSelector)(i.checkNetworkAndAccountSupports1559) && !(0, l.isLegacyTransaction)(null == E ? void 0 : E.txParams),
                                        k = w && T,
                                        { gasEstimateType: O, gasFeeEstimates: P, isGasEstimatesLoading: M, estimatedGasFeeTimeBounds: S, isNetworkBusy: x } = (0, u.useGasFeeEstimates)(),
                                        N = (0, n.useSelector)(i.getAdvancedInlineGasShown),
                                        [A, R] = (0, r.useState)(() => {
                                            var t, a;
                                            return N && null != E && null !== (t = E.txParams) && void 0 !== t && t.maxPriorityFeePerGas && null != E && null !== (a = E.txParams) && void 0 !== a && a.maxFeePerGas
                                                ? null
                                                : E
                                                ? (null == E ? void 0 : E.userFeeLevel) || null
                                                : e;
                                        }),
                                        [L, I] = (0, r.useState)(() => A || o.PRIORITY_LEVELS.CUSTOM),
                                        [F, D] = (0, r.useState)(() => {
                                            var e, t;
                                            return Number((0, d.hexToDecimal)(null !== (e = null == E || null === (t = E.txParams) || void 0 === t ? void 0 : t.gas) && void 0 !== e ? e : "0x0"));
                                        }),
                                        j = Number((0, d.hexToDecimal)(null == E ? void 0 : E.originalGasEstimate)),
                                        [$, H] = (0, r.useState)(() => Boolean(null == E ? void 0 : E.userEditedGasLimit));
                                    (0, r.useEffect)(() => {
                                        var e, t;
                                        k &&
                                            (null != E && E.userFeeLevel && (I(null == E ? void 0 : E.userFeeLevel), R(null == E ? void 0 : E.userFeeLevel)),
                                            D(Number((0, d.hexToDecimal)(null !== (e = null == E || null === (t = E.txParams) || void 0 === t ? void 0 : t.gas) && void 0 !== e ? e : "0x0"))));
                                    }, [I, D, R, k, E]);
                                    const { gasPrice: G, setGasPrice: V, setGasPriceHasBeenManuallySet: W } = (0, p.useGasPriceInput)({ estimateToUse: A, gasEstimateType: O, gasFeeEstimates: P, transaction: E }),
                                        { maxFeePerGas: U, maxFeePerGasFiat: B, setMaxFeePerGas: q } = (0, m.useMaxFeePerGasInput)({
                                            estimateToUse: A,
                                            gasEstimateType: O,
                                            gasFeeEstimates: P,
                                            gasLimit: F,
                                            gasPrice: G,
                                            supportsEIP1559V2: k,
                                            transaction: E,
                                        }),
                                        { maxPriorityFeePerGas: z, maxPriorityFeePerGasFiat: Y, setMaxPriorityFeePerGas: Z } = (0, g.useMaxPriorityFeePerGasInput)({
                                            estimateToUse: A,
                                            gasEstimateType: O,
                                            gasFeeEstimates: P,
                                            gasLimit: F,
                                            supportsEIP1559V2: k,
                                            transaction: E,
                                        }),
                                        { estimatedBaseFee: K, estimatedMaximumFiat: X, estimatedMinimumFiat: Q, estimatedMaximumNative: J, estimatedMinimumNative: ee, maximumCostInHexWei: te, minimumCostInHexWei: ae } = (0,
                                        h.useGasEstimates)({ editGasMode: C, gasEstimateType: O, gasFeeEstimates: P, gasLimit: F, gasPrice: G, maxFeePerGas: U, maxPriorityFeePerGas: z, minimumGasLimit: a, transaction: E }),
                                        { balanceError: re, estimatesUnavailableWarning: ne, gasErrors: oe, gasWarnings: se, hasGasErrors: ie, hasSimulationError: le } = (0, f.useGasFeeErrors)({
                                            gasEstimateType: O,
                                            gasFeeEstimates: P,
                                            isGasEstimatesLoading: M,
                                            gasLimit: F,
                                            gasPrice: G,
                                            maxPriorityFeePerGas: z,
                                            maxFeePerGas: U,
                                            minimumCostInHexWei: ae,
                                            minimumGasLimit: a,
                                            transaction: E,
                                        }),
                                        ue = (0, r.useCallback)(() => {
                                            if (oe.gasLimit === s.GAS_FORM_ERRORS.GAS_LIMIT_OUT_OF_BOUNDS) {
                                                var e;
                                                const t = (0, d.hexToDecimal)(null == E || null === (e = E.txParams) || void 0 === e ? void 0 : e.gas),
                                                    r = (0, d.hexToDecimal)(a);
                                                D(t > r ? t : r);
                                            }
                                        }, [a, oe.gasLimit, E]),
                                        {
                                            cancelTransaction: ce,
                                            speedUpTransaction: de,
                                            updateTransaction: fe,
                                            updateTransactionToTenPercentIncreasedGasFee: pe,
                                            updateTransactionUsingDAPPSuggestedValues: me,
                                            updateTransactionUsingEstimate: ge,
                                        } = (0, v.useTransactionFunctions)({ defaultEstimateToUse: e, editGasMode: C, gasFeeEstimates: P, gasLimit: F, maxPriorityFeePerGas: z, minimumGasLimit: a, transaction: E, setRetryTxMeta: _ }),
                                        he = (0, r.useCallback)(
                                            (e) => {
                                                R(e), ue(), q(null), Z(null), V(null), W(!1), I(e);
                                            },
                                            [R, ue, q, Z, V, W, I]
                                        ),
                                        ve = (0, r.useCallback)(() => {
                                            R(o.CUSTOM_GAS_ESTIMATE), ue(), V(G), D(F), H(!0), q(U), Z(z), W(!0), I("custom");
                                        }, [R, ue, V, G, D, F, H, q, U, Z, z, W]);
                                    return {
                                        transaction: E,
                                        maxFeePerGas: U,
                                        maxFeePerGasFiat: B,
                                        setMaxFeePerGas: q,
                                        maxPriorityFeePerGas: z,
                                        maxPriorityFeePerGasFiat: Y,
                                        setMaxPriorityFeePerGas: Z,
                                        gasPrice: G,
                                        setGasPrice: V,
                                        gasLimit: F,
                                        setGasLimit: D,
                                        properGasLimit: j,
                                        userEditedGasLimit: $,
                                        editGasMode: C,
                                        estimateToUse: A,
                                        setEstimateToUse: he,
                                        estimatedMinimumFiat: Q,
                                        estimatedMaximumFiat: X,
                                        estimatedMaximumNative: J,
                                        estimatedMinimumNative: ee,
                                        isGasEstimatesLoading: M,
                                        maximumCostInHexWei: te,
                                        minimumCostInHexWei: ae,
                                        estimateUsed: L,
                                        gasFeeEstimates: P,
                                        gasEstimateType: O,
                                        estimatedGasFeeTimeBounds: S,
                                        isNetworkBusy: x,
                                        onManualChange: ve,
                                        estimatedBaseFee: K,
                                        balanceError: re,
                                        estimatesUnavailableWarning: ne,
                                        gasErrors: oe,
                                        gasWarnings: se,
                                        hasGasErrors: ie,
                                        hasSimulationError: le,
                                        minimumGasLimitDec: (0, d.hexToDecimal)(a),
                                        supportsEIP1559: w,
                                        supportsEIP1559V2: k,
                                        cancelTransaction: ce,
                                        speedUpTransaction: de,
                                        updateTransaction: fe,
                                        updateTransactionToTenPercentIncreasedGasFee: pe,
                                        updateTransactionUsingDAPPSuggestedValues: me,
                                        updateTransactionUsingEstimate: ge,
                                    };
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../../../shared/constants/gas"),
                                s = e("../../helpers/constants/gas"),
                                i = e("../../selectors"),
                                l = e("../../helpers/utils/transactions.util"),
                                u = e("../useGasFeeEstimates"),
                                c = e("../../helpers/utils/gas"),
                                d = e("../../../shared/lib/metamask-controller-utils"),
                                f = e("./useGasFeeErrors"),
                                p = e("./useGasPriceInput"),
                                m = e("./useMaxFeePerGasInput"),
                                g = e("./useMaxPriorityFeePerGasInput"),
                                h = e("./useGasEstimates"),
                                v = e("./useTransactionFunctions");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5942,
            { "../../../shared/constants/gas": 5329, "../../../shared/lib/transactions-controller-utils": 5347, "../../helpers/utils/transactions.util": 5935, "./utils": 5946, lodash: 4694, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useGasPriceInput = function ({ estimateToUse: e, gasEstimateType: t, gasFeeEstimates: a, transaction: c }) {
                                    const [d, f] = (0, r.useState)((null == c ? void 0 : c.userFeeLevel) === o.CUSTOM_GAS_ESTIMATE),
                                        [p, m] = (0, r.useState)(() => {
                                            const { gasPrice: e } = (null == c ? void 0 : c.txParams) || {};
                                            return e && (0, l.feeParamsAreCustom)(c) ? Number((0, i.hexWEIToDecGWEI)(e)) : null;
                                        }),
                                        [g] = (0, r.useState)(a),
                                        h = (0, n.isEqual)(g, a);
                                    return { gasPrice: null !== p && (d || h || (0, s.isLegacyTransaction)(null == c ? void 0 : c.txParams)) ? p : u(a, t, e), setGasPrice: m, setGasPriceHasBeenManuallySet: f };
                                });
                            var r = e("react"),
                                n = e("lodash"),
                                o = e("../../../shared/constants/gas"),
                                s = e("../../helpers/utils/transactions.util"),
                                i = e("../../../shared/lib/transactions-controller-utils"),
                                l = e("./utils");
                            function u(e, t, a) {
                                var r, n;
                                return t === o.GAS_ESTIMATE_TYPES.LEGACY
                                    ? null !== (r = null == e ? void 0 : e[a]) && void 0 !== r
                                        ? r
                                        : "0"
                                    : t === o.GAS_ESTIMATE_TYPES.ETH_GASPRICE && null !== (n = null == e ? void 0 : e.gasPrice) && void 0 !== n
                                    ? n
                                    : "0";
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5943,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/gas.utils": 5353,
                "../../helpers/constants/common": 5898,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../useCurrencyDisplay": 5952,
                "../useUserPreferencedCurrency": 5974,
                "./utils": 5946,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useMaxFeePerGasInput = function ({ estimateToUse: e, gasEstimateType: t, gasFeeEstimates: a, gasLimit: g, gasPrice: h, supportsEIP1559V2: v, transaction: C }) {
                                    const b = (0, n.useSelector)(u.checkNetworkAndAccountSupports1559) && !(0, c.isLegacyTransaction)(null == C ? void 0 : C.txParams),
                                        { currency: y, numberOfDecimals: _ } = (0, f.useUserPreferencedCurrency)(s.SECONDARY),
                                        E = (0, n.useSelector)(u.getShouldShowFiat),
                                        T = b
                                            ? ((e, t) => {
                                                  if (null != t && t[null == e ? void 0 : e.userFeeLevel]) return t[e.userFeeLevel].suggestedMaxFeePerGas;
                                                  const { maxFeePerGas: a, gasPrice: r } = (null == e ? void 0 : e.txParams) || {};
                                                  return Number((0, p.hexWEIToDecGWEI)(a || r));
                                              })(C, a)
                                            : 0,
                                        [w, k] = (0, r.useState)(() => (T && (0, m.feeParamsAreCustom)(C) ? T : null));
                                    (0, r.useEffect)(() => {
                                        v && T && k(T);
                                    }, [T, k, v]);
                                    let O = { gasLimit: (0, p.decimalToHex)(g) };
                                    O = b ? { ...O, maxFeePerGas: (0, l.decGWEIToHexWEI)(w || h || "0") } : t === o.GAS_ESTIMATE_TYPES.NONE ? { ...O, gasPrice: "0x0" } : { ...O, gasPrice: (0, l.decGWEIToHexWEI)(h) };
                                    const P = (0, i.getMaximumGasTotalInHexWei)(O),
                                        [, { value: M }] = (0, d.useCurrencyDisplay)(P, { numberOfDecimals: _, currency: y });
                                    return { maxFeePerGas: null != w ? w : (0, m.getGasFeeEstimate)("suggestedMaxFeePerGas", a, t, e, T || 0), maxFeePerGasFiat: E ? M : "", setMaxFeePerGas: k };
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../../../shared/constants/gas"),
                                s = e("../../helpers/constants/common"),
                                i = e("../../../shared/modules/gas.utils"),
                                l = e("../../helpers/utils/conversions.util"),
                                u = e("../../selectors"),
                                c = e("../../helpers/utils/transactions.util"),
                                d = e("../useCurrencyDisplay"),
                                f = e("../useUserPreferencedCurrency"),
                                p = e("../../../shared/lib/transactions-controller-utils"),
                                m = e("./utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5944,
            {
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "../../helpers/constants/common": 5898,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../useCurrencyDisplay": 5952,
                "../useUserPreferencedCurrency": 5974,
                "./utils": 5946,
                "ethereumjs-util": 2107,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useMaxPriorityFeePerGasInput = function ({ estimateToUse: e, gasEstimateType: t, gasFeeEstimates: a, gasLimit: m, supportsEIP1559V2: g, transaction: h }) {
                                    const v = (0, r.useSelector)(i.checkNetworkAndAccountSupports1559) && !(0, l.isLegacyTransaction)(null == h ? void 0 : h.txParams),
                                        { currency: C, numberOfDecimals: b } = (0, d.useUserPreferencedCurrency)(s.SECONDARY),
                                        y = (0, r.useSelector)(i.getShouldShowFiat),
                                        _ = v
                                            ? ((e, t) => {
                                                  if (null != t && t[null == e ? void 0 : e.userFeeLevel]) return t[e.userFeeLevel].suggestedMaxPriorityFeePerGas;
                                                  const { maxPriorityFeePerGas: a, maxFeePerGas: r, gasPrice: n } = (null == e ? void 0 : e.txParams) || {};
                                                  return Number((0, f.hexWEIToDecGWEI)(a || r || n));
                                              })(h, a)
                                            : 0,
                                        [E, T] = (0, n.useState)(() => (_ && (0, p.feeParamsAreCustom)(h) ? _ : null));
                                    (0, n.useEffect)(() => {
                                        g && _ && T(_);
                                    }, [_, T, g]);
                                    const w = null != E ? E : (0, p.getGasFeeEstimate)("suggestedMaxPriorityFeePerGas", a, t, e, _ || 0),
                                        [, { value: k }] = (0, c.useCurrencyDisplay)(
                                            (0, o.addHexPrefix)((0, u.multiplyCurrencies)(w, m, { toNumericBase: "hex", fromDenomination: "GWEI", toDenomination: "WEI", multiplicandBase: 10, multiplierBase: 10 })),
                                            { numberOfDecimals: b, currency: C }
                                        );
                                    return { maxPriorityFeePerGas: w, maxPriorityFeePerGasFiat: y ? k : "", setMaxPriorityFeePerGas: T };
                                });
                            var r = e("react-redux"),
                                n = e("react"),
                                o = e("ethereumjs-util"),
                                s = e("../../helpers/constants/common"),
                                i = e("../../selectors"),
                                l = e("../../helpers/utils/transactions.util"),
                                u = e("../../../shared/modules/conversion.utils"),
                                c = e("../useCurrencyDisplay"),
                                d = e("../useUserPreferencedCurrency"),
                                f = e("../../../shared/lib/transactions-controller-utils"),
                                p = e("./utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5945,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/gas": 5923,
                "../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionFunctions = void 0);
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../../../shared/lib/transactions-controller-utils"),
                                s = e("../../../shared/constants/gas"),
                                i = e("../../helpers/utils/conversions.util"),
                                l = e("../../helpers/utils/gas"),
                                u = e("../../store/actions");
                            a.useTransactionFunctions = ({ defaultEstimateToUse: e, editGasMode: t, estimatedBaseFee: a, gasFeeEstimates: c, gasLimit: d, maxPriorityFeePerGas: f, transaction: p, setRetryTxMeta: m }) => {
                                const g = (0, n.useDispatch)(),
                                    h = (0, r.useCallback)(() => {
                                        var e;
                                        if ((t !== s.EDIT_GAS_MODES.CANCEL && t !== s.EDIT_GAS_MODES.SPEED_UP) || p.previousGas) return {};
                                        const { maxFeePerGas: a, maxPriorityFeePerGas: r, gasLimit: n } = null !== (e = null == p ? void 0 : p.txParams) && void 0 !== e ? e : {};
                                        return { previousGas: { maxFeePerGas: a, maxPriorityFeePerGas: r, gasLimit: n } };
                                    }, [t, null == p ? void 0 : p.previousGas, null == p ? void 0 : p.txParams]),
                                    v = (0, r.useCallback)(
                                        async ({ estimateUsed: a, gasLimit: r, maxFeePerGas: n, maxPriorityFeePerGas: c, estimateSuggested: v }) => {
                                            const C = { gas: (0, o.decimalToHex)(r || d), gasLimit: (0, o.decimalToHex)(r || d), estimateSuggested: v || e, estimateUsed: a };
                                            n && (C.maxFeePerGas = n), c && (C.maxPriorityFeePerGas = c || (0, i.decGWEIToHexWEI)(f));
                                            const b = h(),
                                                y = { ...p, userFeeLevel: a || s.PRIORITY_LEVELS.CUSTOM, txParams: { ...p.txParams, ...C }, ...b };
                                            t === s.EDIT_GAS_MODES.SWAPS
                                                ? (g((0, u.updateSwapsUserFeeLevel)(a || s.PRIORITY_LEVELS.CUSTOM)), g((0, u.updateCustomSwapsEIP1559GasParams)(C)))
                                                : (0, l.editGasModeIsSpeedUpOrCancel)(t)
                                                ? m(y)
                                                : ((C.userEditedGasLimit = y.userEditedGasLimit),
                                                  (C.userFeeLevel = y.userFeeLevel),
                                                  b && b.previousGas && (await g((0, u.updatePreviousGasParams)(y.id, b.previousGas))),
                                                  await g((0, u.updateTransactionGasFees)(y.id, C)));
                                        },
                                        [e, g, t, d, h, f, p, m]
                                    ),
                                    C = (0, r.useCallback)(() => {
                                        g((0, u.createCancelTransaction)(p.id, p.txParams, { estimatedBaseFee: a }));
                                    }, [g, a, p]),
                                    b = (0, r.useCallback)(() => {
                                        g((0, u.createSpeedUpTransaction)(p.id, p.txParams, { estimatedBaseFee: a }));
                                    }, [g, a, p]),
                                    y = (0, r.useCallback)(
                                        (t = !1) => {
                                            const { gas: a, maxFeePerGas: r, maxPriorityFeePerGas: n } = p.previousGas || p.txParams;
                                            v({
                                                estimateSuggested: t ? e : s.PRIORITY_LEVELS.TEN_PERCENT_INCREASED,
                                                estimateUsed: s.PRIORITY_LEVELS.TEN_PERCENT_INCREASED,
                                                gasLimit: a,
                                                maxFeePerGas: (0, l.addTenPercentAndRound)(r),
                                                maxPriorityFeePerGas: (0, l.addTenPercentAndRound)(n),
                                            });
                                        },
                                        [e, p, v]
                                    ),
                                    _ = (0, r.useCallback)(
                                        (e) => {
                                            if (!c[e]) return;
                                            const { suggestedMaxFeePerGas: t, suggestedMaxPriorityFeePerGas: a } = c[e];
                                            v({ estimateUsed: e, maxFeePerGas: (0, i.decGWEIToHexWEI)(t), maxPriorityFeePerGas: (0, i.decGWEIToHexWEI)(a) });
                                        },
                                        [c, v]
                                    ),
                                    E = (0, r.useCallback)(() => {
                                        var e;
                                        const { maxFeePerGas: t, maxPriorityFeePerGas: a } = null !== (e = null == p ? void 0 : p.dappSuggestedGasFees) && void 0 !== e ? e : {};
                                        v({ estimateUsed: s.PRIORITY_LEVELS.DAPP_SUGGESTED, maxFeePerGas: t, maxPriorityFeePerGas: a });
                                    }, [p, v]);
                                return { cancelTransaction: C, speedUpTransaction: b, updateTransaction: v, updateTransactionToTenPercentIncreasedGasFee: y, updateTransactionUsingDAPPSuggestedValues: E, updateTransactionUsingEstimate: _ };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5946,
            { "../../../shared/constants/gas": 5329 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.feeParamsAreCustom = void 0),
                                (a.getGasFeeEstimate = function (e, t, a, n, o = "0") {
                                    var s, i;
                                    return a === r.GAS_ESTIMATE_TYPES.FEE_MARKET && null !== (s = null == t || null === (i = t[n]) || void 0 === i ? void 0 : i[e]) && void 0 !== s ? s : String(o);
                                });
                            var r = e("../../../shared/constants/gas");
                            a.feeParamsAreCustom = (e) => !(null != e && e.userFeeLevel) || (null == e ? void 0 : e.userFeeLevel) === r.CUSTOM_GAS_ESTIMATE;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5947,
            { "../../shared/modules/hexstring-utils": 5354, "../helpers/utils/util": 5937, "../selectors": 6300, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = e("react-redux"),
                                n = e("../../shared/modules/hexstring-utils"),
                                o = e("../selectors"),
                                s = e("../helpers/utils/util");
                            var i = (e) => {
                                var t, a;
                                const i = (0, r.useSelector)(o.getAddressBook),
                                    l = (0, r.useSelector)(o.getMetaMaskIdentities),
                                    u = (0, r.useSelector)(o.getTokenList),
                                    c = (0, n.toChecksumHexAddress)(e);
                                if (!e) return {};
                                const d = i.find((e) => e.address === c);
                                return null != d && d.name
                                    ? { toName: d.name, isTrusted: !0 }
                                    : null !== (t = l[e]) && void 0 !== t && t.name
                                    ? { toName: l[e].name, isTrusted: !0 }
                                    : null !== (a = u[null == e ? void 0 : e.toLowerCase()]) && void 0 !== a && a.name
                                    ? { toName: u[null == e ? void 0 : e.toLowerCase()].name, isTrusted: !0 }
                                    : { toName: (0, s.shortenAddress)(c), isTrusted: !1 };
                            };
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5948,
            { react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useApproveTransaction = function () {
                                    const [e, t] = (0, r.useState)(!1);
                                    return { approveTransaction: (0, r.useCallback)(() => t(!0), []), showCustomizeGasPopover: e, closeCustomizeGasPopover: () => t(!1) };
                                });
                            var r = e("react");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5949,
            { "../ducks/metamask/metamask": 5892, "../helpers/utils/token-util": 5934, "../store/actions": 6307, "./usePrevious": 5960, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useAssetDetails = function (e, t, a) {
                                    const u = (0, n.useDispatch)(),
                                        c = (0, n.useSelector)(o.getCollectibles),
                                        [d, f] = (0, r.useState)(null),
                                        p = (0, l.usePrevious)(e),
                                        m = (0, l.usePrevious)(t),
                                        g = (0, l.usePrevious)(a);
                                    if (
                                        ((0, r.useEffect)(() => {
                                            (e === p && t === m && a === g) ||
                                                (async function () {
                                                    u((0, i.showLoadingIndication)());
                                                    const r = await (0, s.getAssetDetails)(e, t, a, c);
                                                    f(r), u((0, i.hideLoadingIndication)());
                                                })();
                                        }, [u, p, g, m, e, t, a, c]),
                                        d)
                                    ) {
                                        const { standard: t, symbol: a, image: r, name: n, balance: o, tokenId: s, toAddress: i, tokenAmount: l, decimals: u } = d;
                                        return { toAddress: i, tokenId: s, decimals: u, tokenAmount: l, assetAddress: e, assetStandard: t, tokenSymbol: null != a ? a : "", tokenImage: r, userBalance: o, assetName: n };
                                    }
                                    return {};
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../ducks/metamask/metamask"),
                                s = e("../helpers/utils/token-util"),
                                i = e("../store/actions"),
                                l = e("./usePrevious");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            595,
            {
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@material-ui/utils": 959,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = a.body = a.html = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = r(e("react")),
                                i = (n(e("prop-types")), n(e("../styles/withStyles"))),
                                l = (e("@material-ui/utils"), { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", boxSizing: "border-box" });
                            a.html = l;
                            var u = function (e) {
                                return (0, o.default)({ color: e.palette.text.primary }, e.typography.body2, { backgroundColor: e.palette.background.default, "@media print": { backgroundColor: e.palette.common.white } });
                            };
                            a.body = u;
                            var c = function (e) {
                                return {
                                    "@global": {
                                        html: l,
                                        "*, *::before, *::after": { boxSizing: "inherit" },
                                        "strong, b": { fontWeight: e.typography.fontWeightBold },
                                        body: (0, o.default)({ margin: 0 }, u(e), { "&::backdrop": { backgroundColor: e.palette.background.default } }),
                                    },
                                };
                            };
                            function d(e) {
                                var t = e.children,
                                    a = void 0 === t ? null : t;
                                e.classes;
                                return s.createElement(s.Fragment, null, a);
                            }
                            a.styles = c;
                            var f = (0, i.default)(c, { name: "MuiCssBaseline" })(d);
                            a.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5950,
            { "../ducks/metamask/metamask": 5892, "../selectors": 6300, "./usePrevious": 5960, lodash: 4694, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useCollectiblesCollections = function () {
                                    const [e, t] = (0, r.useState)({}),
                                        [a, u] = (0, r.useState)({ collectionName: "Previously Owned", collectibles: [] }),
                                        c = (0, n.useSelector)(s.getCollectibles),
                                        [d, f] = (0, r.useState)(() => (null == c ? void 0 : c.length) >= 0),
                                        p = (0, n.useSelector)(i.getSelectedAddress),
                                        m = (0, n.useSelector)(i.getCurrentChainId),
                                        g = (0, n.useSelector)(s.getCollectibleContracts),
                                        h = (0, l.usePrevious)(c),
                                        v = (0, l.usePrevious)(m),
                                        C = (0, l.usePrevious)(p);
                                    return (
                                        (0, r.useEffect)(() => {
                                            ((0, o.isEqual)(h, c) && (0, o.isEqual)(C, p) && (0, o.isEqual)(v, m)) ||
                                                (() => {
                                                    if ((f(!0), p === undefined || m === undefined)) return;
                                                    const e = {},
                                                        a = { collectionName: "Previously Owned", collectibles: [] };
                                                    c.forEach((t) => {
                                                        if (!1 === (null == t ? void 0 : t.isCurrentlyOwned)) a.collectibles.push(t);
                                                        else if (e[t.address]) e[t.address].collectibles.push(t);
                                                        else {
                                                            const a = g.find(({ address: e }) => e === t.address);
                                                            e[t.address] = { collectionName: (null == a ? void 0 : a.name) || t.name, collectionImage: (null == a ? void 0 : a.logo) || t.collectionImage, collectibles: [t] };
                                                        }
                                                    }),
                                                        t(e),
                                                        u(a),
                                                        f(!1);
                                                })();
                                        }, [c, h, g, f, m, v, p, C]),
                                        { collectiblesLoading: d, collections: e, previouslyOwnedCollection: a }
                                    );
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("lodash"),
                                s = e("../ducks/metamask/metamask"),
                                i = e("../selectors"),
                                l = e("./usePrevious");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5951,
            { "../../shared/constants/time": 5338, "./useTimeout": 5966, "copy-to-clipboard": 1800, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useCopyToClipboard = function (e = l) {
                                    const [t, a] = (0, n.useState)(!1),
                                        r = (0, i.useTimeout)(() => a(!1), e, !1),
                                        s = (0, n.useCallback)(
                                            (e) => {
                                                a(!0), r(), (0, o.default)(e);
                                            },
                                            [r]
                                        );
                                    return [t, s];
                                });
                            var r,
                                n = e("react"),
                                o = (r = e("copy-to-clipboard")) && r.__esModule ? r : { default: r },
                                s = e("../../shared/constants/time"),
                                i = e("./useTimeout");
                            const l = 3 * s.SECOND;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5952,
            { "../../shared/constants/network": 5333, "../../shared/modules/conversion.utils": 5351, "../ducks/metamask/metamask": 5892, "../helpers/utils/confirm-tx.util": 5919, "../selectors": 6300, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useCurrencyDisplay = function (e, { displayValue: t, prefix: a, numberOfDecimals: c, denomination: d, currency: f, ...p }) {
                                    const m = (0, n.useSelector)(s.getCurrentCurrency),
                                        g = (0, n.useSelector)(i.getNativeCurrency),
                                        h = (0, n.useSelector)(i.getConversionRate),
                                        v = f === m,
                                        C = (0, r.useMemo)(
                                            () =>
                                                t ||
                                                (f === g || (!v && !g)
                                                    ? (0, l.conversionUtil)(e, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", numberOfDecimals: c || 2, toDenomination: d })
                                                    : v && h
                                                    ? (0, o.formatCurrency)((0, o.getValueFromWeiHex)({ value: e, fromCurrency: g, toCurrency: f, conversionRate: h, numberOfDecimals: c || 2, toDenomination: d }), f)
                                                    : null),
                                            [e, g, h, t, c, d, f, v]
                                        );
                                    let b;
                                    if (!p.hideLabel) {
                                        const e = Object.values(u.TEST_NETWORK_TICKER_MAP).includes(f) ? f : null == f ? void 0 : f.toUpperCase();
                                        b = p.suffix || e;
                                    }
                                    return [`${a || ""}${C}${b ? ` ${b}` : ""}`, { prefix: a, value: C, suffix: b }];
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../helpers/utils/confirm-tx.util"),
                                s = e("../selectors"),
                                i = e("../ducks/metamask/metamask"),
                                l = e("../../shared/modules/conversion.utils"),
                                u = e("../../shared/constants/network");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5953,
            { "../../shared/constants/swaps": 5337, "../../shared/modules/string-utils": 5361, "../ducks/metamask/metamask": 5892, "../helpers/constants/routes": 5904, "../selectors": 6300, "react-redux": 4939, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useCurrentAsset = function () {
                                    var e;
                                    const t = (0, n.useRouteMatch)({ path: `${i.ASSET_ROUTE}/:asset`, exact: !0, strict: !0 }),
                                        a = null == t || null === (e = t.params) || void 0 === e ? void 0 : e.asset,
                                        c = (0, r.useSelector)(o.getTokens),
                                        d = a && c.find(({ address: e }) => (0, u.isEqualCaseInsensitive)(e, a)),
                                        f = (0, r.useSelector)(s.getCurrentChainId);
                                    return null != d ? d : l.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[f] || l.ETH_SWAPS_TOKEN_OBJECT;
                                });
                            var r = e("react-redux"),
                                n = e("react-router-dom"),
                                o = e("../ducks/metamask/metamask"),
                                s = e("../selectors"),
                                i = e("../helpers/constants/routes"),
                                l = e("../../shared/constants/swaps"),
                                u = e("../../shared/modules/string-utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5954,
            { lodash: 4694, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useEqualityCheck = function (e, t = n.isEqual) {
                                    const [a, o] = (0, r.useState)(e);
                                    return (
                                        (0, r.useLayoutEffect)(() => {
                                            t(e, a) || o(e);
                                        }, [e, t, a]),
                                        a
                                    );
                                });
                            var r = e("react"),
                                n = e("lodash");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5955,
            { "../ducks/metamask/metamask": 5892, "../helpers/utils/confirm-tx.util": 5919, "../helpers/utils/conversions.util": 5920, "../selectors": 6300, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useEthFiatAmount = function (e, t = {}, a) {
                                    var u;
                                    const c = (0, n.useSelector)(l.getConversionRate),
                                        d = (0, n.useSelector)(o.getCurrentCurrency),
                                        f = (0, n.useSelector)(o.getShouldShowFiat),
                                        p = null !== (u = t.showFiat) && void 0 !== u ? u : f,
                                        m = (0, r.useMemo)(() => (0, s.decEthToConvertedCurrency)(e, d, c), [c, d, e]);
                                    if (!p || "ETH" === d.toUpperCase() || c <= 0 || e === undefined) return undefined;
                                    return a ? (0, i.formatCurrency)(m, d) : `${(0, i.formatCurrency)(m, d)} ${d.toUpperCase()}`;
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../selectors"),
                                s = e("../helpers/utils/conversions.util"),
                                i = e("../helpers/utils/confirm-tx.util"),
                                l = e("../ducks/metamask/metamask");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5956,
            { "../ducks/metamask/metamask": 5892, "./useSafeGasEstimatePolling": 5961, "lodash/isEqual": 4681, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useGasFeeEstimates = function () {
                                    const e = (0, o.useSelector)(s.getGasEstimateType),
                                        t = (0, o.useSelector)(s.getGasFeeEstimates, n.default),
                                        a = (0, o.useSelector)(s.getEstimatedGasFeeTimeBounds, o.shallowEqual),
                                        r = (0, o.useSelector)(s.getIsGasEstimatesLoading),
                                        l = (0, o.useSelector)(s.getIsNetworkBusy);
                                    return (0, i.useSafeGasEstimatePolling)(), { gasFeeEstimates: t, gasEstimateType: e, estimatedGasFeeTimeBounds: a, isGasEstimatesLoading: r, isNetworkBusy: l };
                                });
                            var r,
                                n = (r = e("lodash/isEqual")) && r.__esModule ? r : { default: r },
                                o = e("react-redux"),
                                s = e("../ducks/metamask/metamask"),
                                i = e("./useSafeGasEstimatePolling");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5957,
            { "../contexts/i18n": 5877, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useI18nContext = function () {
                                    return (0, r.useContext)(n.I18nContext);
                                });
                            var r = e("react"),
                                n = e("../contexts/i18n");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5958,
            { "../../shared/modules/transaction.utils": 5363, "../helpers/utils/conversions.util": 5920, "../helpers/utils/gas": 5923, "./useGasFeeEstimates": 5956, "bignumber.js": 1637, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useIncrementedGasFees = function (e) {
                                    const { gasFeeEstimates: t = {} } = (0, u.useGasFeeEstimates)();
                                    return (0, o.useMemo)(() => {
                                        var a, r, n, o, i, l;
                                        const u = { gasLimit: null === (a = e.txParams) || void 0 === a ? void 0 : a.gas, gas: null === (r = e.txParams) || void 0 === r ? void 0 : r.gas },
                                            d = null !== (n = null == t || null === (o = t.medium) || void 0 === o ? void 0 : o.suggestedMaxFeePerGas) && void 0 !== n ? n : "0",
                                            f = null !== (i = null == t || null === (l = t.medium) || void 0 === l ? void 0 : l.suggestedMaxPriorityFeePerGas) && void 0 !== i ? i : "0";
                                        if ((0, s.isEIP1559Transaction)(e)) {
                                            var p, m;
                                            const t = null === (p = e.txParams) || void 0 === p ? void 0 : p.maxFeePerGas,
                                                a = null === (m = e.txParams) || void 0 === m ? void 0 : m.maxPriorityFeePerGas;
                                            (u.maxFeePerGas = t === undefined || t.startsWith("-") ? "0x0" : c(t, d)), (u.maxPriorityFeePerGas = a === undefined || a.startsWith("-") ? "0x0" : c(a, f));
                                        } else {
                                            var g;
                                            const t = null === (g = e.txParams) || void 0 === g ? void 0 : g.gasPrice;
                                            u.gasPrice = t === undefined || t.startsWith("-") ? "0x0" : c(t, d);
                                        }
                                        return u;
                                    }, [e, t]);
                                });
                            var r,
                                n = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                                o = e("react"),
                                s = e("../../shared/modules/transaction.utils"),
                                i = e("../helpers/utils/conversions.util"),
                                l = e("../helpers/utils/gas"),
                                u = e("./useGasFeeEstimates");
                            function c(e, t) {
                                const a = (0, l.addTenPercent)(e),
                                    r = (0, i.decGWEIToHexWEI)(t);
                                return new n.default(a, 16).greaterThan(new n.default(r, 16)) ? a : r;
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5959,
            { "../../shared/constants/app": 5328, "../selectors": 6300, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useOriginMetadata = function (e) {
                                    const t = (0, r.useSelector)((t) => (0, n.getTargetSubjectMetadata)(t, e));
                                    if (!e) return null;
                                    let a = null;
                                    try {
                                        const t = new URL(e);
                                        a = { host: t.host, hostname: t.hostname, origin: e, subjectType: o.SUBJECT_TYPES.UNKNOWN };
                                    } catch (e) {}
                                    if (t && a) return { ...a, ...t };
                                    if (t) return t;
                                    return a;
                                });
                            var r = e("react-redux"),
                                n = e("../selectors"),
                                o = e("../../shared/constants/app");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            596,
            { "./CssBaseline": 595, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./CssBaseline"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5960,
            { react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.usePrevious = function (e) {
                                    const t = (0, r.useRef)();
                                    return (
                                        (0, r.useEffect)(() => {
                                            t.current = e;
                                        }, [e]),
                                        t.current
                                    );
                                });
                            var r = e("react");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5961,
            { "../store/actions": 6307, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useSafeGasEstimatePolling = function () {
                                    (0, r.useEffect)(() => {
                                        let e,
                                            t = !0;
                                        const a = () => {
                                            (t = !1), e && ((0, n.disconnectGasFeeEstimatePoller)(e), (0, n.removePollingTokenFromAppState)(e));
                                        };
                                        return (
                                            (0, n.getGasFeeEstimatesAndStartPolling)().then((a) => {
                                                t ? ((e = a), (0, n.addPollingTokenToAppState)(e)) : ((0, n.disconnectGasFeeEstimatePoller)(a), (0, n.removePollingTokenFromAppState)(e));
                                            }),
                                            window.addEventListener("beforeunload", a),
                                            () => {
                                                a(), window.removeEventListener("beforeunload", a);
                                            }
                                        );
                                    }, []);
                                });
                            var r = e("react"),
                                n = e("../store/actions");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5962,
            { "../helpers/constants/routes": 5904, "../selectors": 6300, "react-redux": 4939, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useSegmentContext = function () {
                                    const e = (0, n.useRouteMatch)({ path: i, exact: !0, strict: !0 }),
                                        t = ((0, r.useSelector)(s.txDataSelector) || {}).origin,
                                        a = t ? { url: t } : undefined;
                                    return { page: e ? { path: e.path, title: o.PATH_NAME_MAP[e.path], url: e.path } : undefined, referrer: a };
                                });
                            var r = e("react-redux"),
                                n = e("react-router-dom"),
                                o = e("../helpers/constants/routes"),
                                s = e("../selectors");
                            const i = Object.keys(o.PATH_NAME_MAP);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5963,
            { "../ducks/app/app": 5884, "./useGasFeeEstimates": 5956, lodash: 4694, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useShouldAnimateGasEstimations = function () {
                                    const { isGasEstimatesLoading: e, gasFeeEstimates: t } = (0, i.useGasFeeEstimates)(),
                                        a = (0, n.useDispatch)(),
                                        l = (0, n.useSelector)(s.getGasLoadingAnimationIsShowing),
                                        u = (0, r.useRef)(t),
                                        c = !(0, o.isEqual)(u.current, t),
                                        d = (0, o.isEqual)(u.current, {});
                                    c && (u.current = t);
                                    const f = e || (c && !d);
                                    (0, r.useEffect)(() => {
                                        !1 === l && !0 === f && a((0, s.toggleGasLoadingAnimation)(!0));
                                    }, [a, l, f]),
                                        (0, r.useEffect)(() => {
                                            !0 === l &&
                                                !1 === f &&
                                                setTimeout(() => {
                                                    a((0, s.toggleGasLoadingAnimation)(!1));
                                                }, 2e3);
                                        }, [a, l, f]);
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("lodash"),
                                s = e("../ducks/app/app"),
                                i = e("./useGasFeeEstimates");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5964,
            { "../../shared/constants/time": 5338, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useShouldShowSpeedUp = function (e, t) {
                                    const { transactions: a, hasRetried: o } = e,
                                        [s = {}] = a,
                                        { submittedTime: i } = s,
                                        [l, u] = (0, r.useState)(() => Date.now() - i > 5e3 && t && !o);
                                    return (
                                        (0, r.useEffect)(() => {
                                            let e;
                                            return (
                                                o ||
                                                    !t ||
                                                    l ||
                                                    (Date.now() - i > 5 * n.SECOND
                                                        ? u(!0)
                                                        : (e = setTimeout(() => {
                                                              u(!0), clearTimeout(e);
                                                          }, 5001 - (Date.now() - i)))),
                                                () => {
                                                    e && clearTimeout(e);
                                                }
                                            );
                                        }, [i, l, o, t]),
                                        l
                                    );
                                });
                            var r = e("react"),
                                n = e("../../shared/constants/time");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5965,
            { "../../shared/constants/transaction": 5340, "../../shared/lib/transactions-controller-utils": 5347, "../../shared/modules/swaps.utils": 5362, "../selectors": 6300, "./useTokenFiatAmount": 5969, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useSwappedTokenValue = function (e, t) {
                                    const { symbol: a, decimals: u, address: c } = t,
                                        { primaryTransaction: d, initialTransaction: f } = e,
                                        { type: p } = f,
                                        { from: m } = f.txParams || {},
                                        g = (0, r.useSelector)(i.getCurrentChainId),
                                        h = (null == t ? void 0 : t.symbol) === d.destinationTokenSymbol || ((0, s.isSwapsDefaultTokenAddress)(t.address, g) && (0, s.isSwapsDefaultTokenSymbol)(d.destinationTokenSymbol, g)),
                                        v = p === o.TRANSACTION_TYPES.SWAP && h ? (0, n.getSwapsTokensReceivedFromTxMeta)(d.destinationTokenSymbol, f, c, m, u, null, g) : p === o.TRANSACTION_TYPES.SWAP && d.swapTokenValue,
                                        C = "string" == typeof v && -1 === Math.sign(v),
                                        b = (0, l.useTokenFiatAmount)(c, v || "", a);
                                    return { swapTokenValue: v, swapTokenFiatAmount: v && h && b, isViewingReceivedTokenFromSwap: h, isNegative: C };
                                });
                            var r = e("react-redux"),
                                n = e("../../shared/lib/transactions-controller-utils"),
                                o = e("../../shared/constants/transaction"),
                                s = e("../../shared/modules/swaps.utils"),
                                i = e("../selectors"),
                                l = e("./useTokenFiatAmount");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5966,
            { react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTimeout = function (e, t, a = !0) {
                                    const n = (0, r.useRef)(),
                                        [o, s] = (0, r.useState)(null);
                                    (0, r.useEffect)(() => {
                                        n.current = e;
                                    }, [e]),
                                        (0, r.useEffect)(() => {
                                            if ("start" !== o) return undefined;
                                            const e = setTimeout(() => {
                                                n.current();
                                            }, t);
                                            return (
                                                s(e),
                                                () => {
                                                    clearTimeout(o);
                                                }
                                            );
                                        }, [t, o]);
                                    const i = (0, r.useCallback)(() => {
                                        clearTimeout(o), s("start");
                                    }, [o]);
                                    a && i();
                                    return i;
                                });
                            var r = e("react");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5967,
            { "../../shared/modules/transaction.utils": 5363, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTokenData = function (e, t = !0) {
                                    return (0, r.useMemo)(() => (t && e ? (0, n.parseStandardTokenTransactionData)(e) : null), [t, e]);
                                });
                            var r = e("react"),
                                n = e("../../shared/modules/transaction.utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5968,
            { "../../shared/lib/metamask-controller-utils": 5343, "../../shared/lib/transactions-controller-utils": 5347, "./useTokenData": 5967, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTokenDisplayValue = function (e, t, a = !0) {
                                    const i = (0, s.useTokenData)(e, a),
                                        l = (0, n.getTokenValueParam)(i),
                                        u = Boolean(a && e && t && t.decimals && l);
                                    return (0, r.useMemo)(() => (u ? (0, o.calcTokenAmount)(l, t.decimals).toString(10) : null), [u, l, t]);
                                });
                            var r = e("react"),
                                n = e("../../shared/lib/metamask-controller-utils"),
                                o = e("../../shared/lib/transactions-controller-utils"),
                                s = e("./useTokenData");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5969,
            { "../../shared/modules/string-utils": 5361, "../ducks/metamask/metamask": 5892, "../helpers/utils/token-util": 5934, "../selectors": 6300, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTokenFiatAmount = function (e, t, a, u = {}, c) {
                                    var d, f;
                                    const p = (0, n.useSelector)(o.getTokenExchangeRates, n.shallowEqual),
                                        m = (0, n.useSelector)(i.getConversionRate),
                                        g = (0, n.useSelector)(o.getCurrentCurrency),
                                        h = (0, n.useSelector)(o.getShouldShowFiat),
                                        v = null !== (d = u.showFiat) && void 0 !== d ? d : h,
                                        C = Object.keys(p).find((t) => (0, l.isEqualCaseInsensitive)(t, e)),
                                        b = null !== (f = u.exchangeRate) && void 0 !== f ? f : C && p[C],
                                        y = (0, r.useMemo)(() => (0, s.getTokenFiatAmount)(b, m, g, t, a, !0, c), [b, m, g, t, a, c]);
                                    if (!v || g.toUpperCase() === a) return undefined;
                                    return y;
                                });
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../selectors"),
                                s = e("../helpers/utils/token-util"),
                                i = e("../ducks/metamask/metamask"),
                                l = e("../../shared/modules/string-utils");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            597,
            {
                "../Backdrop": 551,
                "../Fade": 623,
                "../Modal": 696,
                "../Paper": 706,
                "../styles/transitions": 866,
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
                "@babel/runtime/helpers/defineProperty": 176,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireWildcard"),
                                n = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = a.styles = void 0);
                            var o = n(e("@babel/runtime/helpers/extends")),
                                s = n(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = n(e("@babel/runtime/helpers/defineProperty")),
                                l = r(e("react")),
                                u = (n(e("prop-types")), n(e("clsx"))),
                                c = n(e("../styles/withStyles")),
                                d = n(e("../utils/capitalize")),
                                f = n(e("../Modal")),
                                p = n(e("../Backdrop")),
                                m = n(e("../Fade")),
                                g = e("../styles/transitions"),
                                h = n(e("../Paper")),
                                v = function (e) {
                                    return {
                                        root: { "@media print": { position: "absolute !important" } },
                                        scrollPaper: { display: "flex", justifyContent: "center", alignItems: "center" },
                                        scrollBody: { overflowY: "auto", overflowX: "hidden", textAlign: "center", "&:after": { content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0" } },
                                        container: { height: "100%", "@media print": { height: "auto" }, outline: 0 },
                                        paper: { margin: 32, position: "relative", overflowY: "auto", "@media print": { overflowY: "visible", boxShadow: "none" } },
                                        paperScrollPaper: { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" },
                                        paperScrollBody: { display: "inline-block", verticalAlign: "middle", textAlign: "left" },
                                        paperWidthFalse: { maxWidth: "calc(100% - 64px)" },
                                        paperWidthXs: {
                                            maxWidth: Math.max(e.breakpoints.values.xs, 444),
                                            "&$paperScrollBody": (0, i.default)({}, e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64), { maxWidth: "calc(100% - 64px)" }),
                                        },
                                        paperWidthSm: { maxWidth: e.breakpoints.values.sm, "&$paperScrollBody": (0, i.default)({}, e.breakpoints.down(e.breakpoints.values.sm + 64), { maxWidth: "calc(100% - 64px)" }) },
                                        paperWidthMd: { maxWidth: e.breakpoints.values.md, "&$paperScrollBody": (0, i.default)({}, e.breakpoints.down(e.breakpoints.values.md + 64), { maxWidth: "calc(100% - 64px)" }) },
                                        paperWidthLg: { maxWidth: e.breakpoints.values.lg, "&$paperScrollBody": (0, i.default)({}, e.breakpoints.down(e.breakpoints.values.lg + 64), { maxWidth: "calc(100% - 64px)" }) },
                                        paperWidthXl: { maxWidth: e.breakpoints.values.xl, "&$paperScrollBody": (0, i.default)({}, e.breakpoints.down(e.breakpoints.values.xl + 64), { maxWidth: "calc(100% - 64px)" }) },
                                        paperFullWidth: { width: "calc(100% - 64px)" },
                                        paperFullScreen: { margin: 0, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "none", borderRadius: 0, "&$paperScrollBody": { margin: 0, maxWidth: "100%" } },
                                    };
                                };
                            a.styles = v;
                            var C = { enter: g.duration.enteringScreen, exit: g.duration.leavingScreen },
                                b = l.forwardRef(function (e, t) {
                                    var a = e.BackdropProps,
                                        r = e.children,
                                        n = e.classes,
                                        i = e.className,
                                        c = e.disableBackdropClick,
                                        g = void 0 !== c && c,
                                        v = e.disableEscapeKeyDown,
                                        b = void 0 !== v && v,
                                        y = e.fullScreen,
                                        _ = void 0 !== y && y,
                                        E = e.fullWidth,
                                        T = void 0 !== E && E,
                                        w = e.maxWidth,
                                        k = void 0 === w ? "sm" : w,
                                        O = e.onBackdropClick,
                                        P = e.onClose,
                                        M = e.onEnter,
                                        S = e.onEntered,
                                        x = e.onEntering,
                                        N = e.onEscapeKeyDown,
                                        A = e.onExit,
                                        R = e.onExited,
                                        L = e.onExiting,
                                        I = e.open,
                                        F = e.PaperComponent,
                                        D = void 0 === F ? h.default : F,
                                        j = e.PaperProps,
                                        $ = void 0 === j ? {} : j,
                                        H = e.scroll,
                                        G = void 0 === H ? "paper" : H,
                                        V = e.TransitionComponent,
                                        W = void 0 === V ? m.default : V,
                                        U = e.transitionDuration,
                                        B = void 0 === U ? C : U,
                                        q = e.TransitionProps,
                                        z = e["aria-describedby"],
                                        Y = e["aria-labelledby"],
                                        Z = (0, s.default)(e, [
                                            "BackdropProps",
                                            "children",
                                            "classes",
                                            "className",
                                            "disableBackdropClick",
                                            "disableEscapeKeyDown",
                                            "fullScreen",
                                            "fullWidth",
                                            "maxWidth",
                                            "onBackdropClick",
                                            "onClose",
                                            "onEnter",
                                            "onEntered",
                                            "onEntering",
                                            "onEscapeKeyDown",
                                            "onExit",
                                            "onExited",
                                            "onExiting",
                                            "open",
                                            "PaperComponent",
                                            "PaperProps",
                                            "scroll",
                                            "TransitionComponent",
                                            "transitionDuration",
                                            "TransitionProps",
                                            "aria-describedby",
                                            "aria-labelledby",
                                        ]),
                                        K = l.useRef();
                                    return l.createElement(
                                        f.default,
                                        (0, o.default)(
                                            {
                                                className: (0, u.default)(n.root, i),
                                                BackdropComponent: p.default,
                                                BackdropProps: (0, o.default)({ transitionDuration: B }, a),
                                                closeAfterTransition: !0,
                                                disableBackdropClick: g,
                                                disableEscapeKeyDown: b,
                                                onEscapeKeyDown: N,
                                                onClose: P,
                                                open: I,
                                                ref: t,
                                            },
                                            Z
                                        ),
                                        l.createElement(
                                            W,
                                            (0, o.default)({ appear: !0, in: I, timeout: B, onEnter: M, onEntering: x, onEntered: S, onExit: A, onExiting: L, onExited: R, role: "none presentation" }, q),
                                            l.createElement(
                                                "div",
                                                {
                                                    className: (0, u.default)(n.container, n["scroll".concat((0, d.default)(G))]),
                                                    onMouseUp: function (e) {
                                                        e.target === e.currentTarget && e.target === K.current && ((K.current = null), O && O(e), !g && P && P(e, "backdropClick"));
                                                    },
                                                    onMouseDown: function (e) {
                                                        K.current = e.target;
                                                    },
                                                },
                                                l.createElement(
                                                    D,
                                                    (0, o.default)({ elevation: 24, role: "dialog", "aria-describedby": z, "aria-labelledby": Y }, $, {
                                                        className: (0, u.default)(
                                                            n.paper,
                                                            n["paperScroll".concat((0, d.default)(G))],
                                                            n["paperWidth".concat((0, d.default)(String(k)))],
                                                            $.className,
                                                            _ && n.paperFullScreen,
                                                            T && n.paperFullWidth
                                                        ),
                                                    }),
                                                    r
                                                )
                                            )
                                        )
                                    );
                                }),
                                y = (0, c.default)(v, { name: "MuiDialog" })(b);
                            a.default = y;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5970,
            { "../../shared/constants/time": 5338, "../../shared/modules/string-utils": 5361, "../selectors": 6300, "./useEqualityCheck": 5954, "@metamask/eth-token-tracker": 1137, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTokenTracker = function (e, t = !1, a = !1) {
                                    const r = (0, s.useSelector)(i.getCurrentChainId),
                                        d = (0, s.useSelector)(i.getSelectedAddress, s.shallowEqual),
                                        [f, p] = (0, n.useState)(() => (null == e ? void 0 : e.length) >= 0),
                                        [m, g] = (0, n.useState)([]),
                                        [h, v] = (0, n.useState)(null),
                                        C = (0, n.useRef)(null),
                                        b = (0, c.useEqualityCheck)(e),
                                        y = (0, n.useCallback)(
                                            (e) => {
                                                const t = (a ? e.filter((e) => Number(e.balance) > 0) : e).map((e) => {
                                                    const t = b.find((t) => (0, u.isEqualCaseInsensitive)(t.address, e.address));
                                                    return { ...e, isERC721: null == t ? void 0 : t.isERC721, image: null == t ? void 0 : t.image };
                                                });
                                                g(t), p(!1), v(null);
                                            },
                                            [a, b]
                                        ),
                                        _ = (0, n.useCallback)((e) => {
                                            v(e), p(!1);
                                        }, []),
                                        E = (0, n.useCallback)(() => {
                                            C.current && (C.current.stop(), C.current.removeAllListeners("update"), C.current.removeAllListeners("error"), (C.current = null));
                                        }, []),
                                        T = (0, n.useCallback)(
                                            (e, a) => {
                                                E(),
                                                    (C.current = new o.default({ userAddress: e, provider: global.ethereumProvider, tokens: a, includeFailedTokens: t, pollingInterval: 8 * l.SECOND, balanceDecimals: 5 })),
                                                    C.current.on("update", y),
                                                    C.current.on("error", _),
                                                    C.current.updateBalances();
                                            },
                                            [y, t, _, E]
                                        );
                                    return (
                                        (0, n.useEffect)(() => E, [E]),
                                        (0, n.useEffect)(() => {
                                            p(!0), d && r !== undefined && global.ethereumProvider ? (0 === b.length && y([]), T(d, b)) : E();
                                        }, [d, E, r, b, y, T]),
                                        { loading: f, tokensWithBalances: m, error: h }
                                    );
                                });
                            var r,
                                n = e("react"),
                                o = (r = e("@metamask/eth-token-tracker")) && r.__esModule ? r : { default: r },
                                s = e("react-redux"),
                                i = e("../selectors"),
                                l = e("../../shared/constants/time"),
                                u = e("../../shared/modules/string-utils"),
                                c = e("./useEqualityCheck");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5971,
            {
                "../../shared/constants/network": 5333,
                "../../shared/constants/swaps": 5337,
                "../../shared/modules/hexstring-utils": 5354,
                "../../shared/modules/swaps.utils": 5362,
                "../ducks/metamask/metamask": 5892,
                "../ducks/swaps/swaps": 5896,
                "../helpers/utils/token-util": 5934,
                "../selectors": 6300,
                "./useEqualityCheck": 5954,
                "@metamask/assets-controllers": 977,
                "bignumber.js": 1637,
                lodash: 4694,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.getRenderableTokenData = C),
                                (a.useTokensToSearch = function ({ usersTokens: e = [], topTokens: t = {}, shuffledTokensList: a, tokenBucketPriority: r = g.TOKEN_BUCKET_PRIORITY.OWNED }) {
                                    const l = (0, o.useSelector)(c.getCurrentChainId),
                                        u = (0, o.useSelector)(c.getTokenExchangeRates, i.isEqual),
                                        m = (0, o.useSelector)(d.getConversionRate),
                                        h = (0, o.useSelector)(c.getCurrentCurrency),
                                        b = (0, o.useSelector)(c.getSwapsDefaultToken, o.shallowEqual),
                                        y = (0, o.useSelector)(c.getTokenList, i.isEqual),
                                        _ = (0, v.useEqualityCheck)(t),
                                        E = (0, v.useEqualityCheck)(e),
                                        T = C(b, u, m, h, l, y),
                                        w = (0, v.useEqualityCheck)(T),
                                        k = (0, o.useSelector)(f.getSwapsTokens, i.isEqual) || [],
                                        O = k.length ? k : [w, ...a.filter((e) => e.symbol !== w.symbol)],
                                        P = (0, v.useEqualityCheck)(O);
                                    return (0, n.useMemo)(() => {
                                        const e = E.reduce((e, t) => ({ ...e, [t.address.toLowerCase()]: t }), {}),
                                            t = { owned: [], top: [], others: [] };
                                        return (
                                            (0, i.uniqBy)([w, ...P, ...E], (e) => e.address.toLowerCase()).forEach((a) => {
                                                const n = C({ ...e[a.address.toLowerCase()], ...a }, u, m, h, l, y);
                                                r === g.TOKEN_BUCKET_PRIORITY.OWNED
                                                    ? (0, p.isSwapsDefaultTokenSymbol)(n.symbol, l) || e[a.address.toLowerCase()]
                                                        ? t.owned.push(n)
                                                        : _[a.address.toLowerCase()]
                                                        ? (t.top[_[a.address.toLowerCase()].index] = n)
                                                        : t.others.push(n)
                                                    : _[a.address.toLowerCase()]
                                                    ? (t.top[_[a.address.toLowerCase()].index] = n)
                                                    : (0, p.isSwapsDefaultTokenSymbol)(n.symbol, l) || e[a.address.toLowerCase()]
                                                    ? t.owned.push(n)
                                                    : t.others.push(n);
                                            }),
                                            (t.owned = t.owned.sort(({ rawFiat: e }, { rawFiat: t }) => (new s.default(e || 0).gt(t || 0) ? -1 : 1))),
                                            (t.top = t.top.filter(Boolean)),
                                            r === g.TOKEN_BUCKET_PRIORITY.OWNED ? [...t.owned, ...t.top, ...t.others] : [...t.top, ...t.owned, ...t.others]
                                        );
                                    }, [P, E, _, u, m, h, w, l, y, r]);
                                });
                            var r,
                                n = e("react"),
                                o = e("react-redux"),
                                s = (r = e("bignumber.js")) && r.__esModule ? r : { default: r },
                                i = e("lodash"),
                                l = e("@metamask/assets-controllers"),
                                u = e("../helpers/utils/token-util"),
                                c = e("../selectors"),
                                d = e("../ducks/metamask/metamask"),
                                f = e("../ducks/swaps/swaps"),
                                p = e("../../shared/modules/swaps.utils"),
                                m = e("../../shared/modules/hexstring-utils"),
                                g = e("../../shared/constants/swaps"),
                                h = e("../../shared/constants/network"),
                                v = e("./useEqualityCheck");
                            function C(e, t, a, r, n, o) {
                                var i, c;
                                const { symbol: d, name: f, address: g, iconUrl: v, string: C, balance: b, decimals: y } = e;
                                let _;
                                (0, p.isSwapsDefaultTokenSymbol)(d, n) ? (_ = 1) : C && a > 0 && (_ = t[(0, m.toChecksumHexAddress)(g)]);
                                const E = (0, u.getTokenFiatAmount)(_, a, r, C, d, !0) || "",
                                    T = E ? (0, u.getTokenFiatAmount)(_, a, r, C, d, !1) : "",
                                    w = n === h.CHAIN_IDS.GOERLI ? h.CHAIN_IDS.MAINNET : n,
                                    k =
                                        ((d === h.CURRENCY_SYMBOLS.ETH && n === h.CHAIN_IDS.MAINNET) ||
                                        (d === h.CURRENCY_SYMBOLS.ETH && n === h.CHAIN_IDS.GOERLI) ||
                                        (d === h.CURRENCY_SYMBOLS.BNB && n === h.CHAIN_IDS.BSC) ||
                                        (d === h.CURRENCY_SYMBOLS.MATIC && n === h.CHAIN_IDS.POLYGON) ||
                                        (d === h.CURRENCY_SYMBOLS.AVALANCHE && n === h.CHAIN_IDS.AVALANCHE) ||
                                        (d === h.CURRENCY_SYMBOLS.ETH && n === h.CHAIN_IDS.OPTIMISM) ||
                                        (d === h.CURRENCY_SYMBOLS.ETH && n === h.CHAIN_IDS.ARBITRUM)
                                            ? v
                                            : (0, l.formatIconUrlWithProxy)({ chainId: w, tokenAddress: g || "" })) || (null == e ? void 0 : e.image);
                                return {
                                    ...e,
                                    primaryLabel: d,
                                    secondaryLabel: f || (null === (i = o[null == g ? void 0 : g.toLowerCase()]) || void 0 === i ? void 0 : i.name),
                                    rightPrimaryLabel: C && `${new s.default(C).round(6).toString()} ${d}`,
                                    rightSecondaryLabel: E,
                                    iconUrl: k,
                                    identiconAddress: k ? null : g,
                                    balance: b,
                                    decimals: y,
                                    name: f || (null === (c = o[null == g ? void 0 : g.toLowerCase()]) || void 0 === c ? void 0 : c.name),
                                    rawFiat: T,
                                };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5972,
            {
                "../../shared/constants/transaction": 5340,
                "../../shared/lib/metamask-controller-utils": 5343,
                "../../shared/modules/string-utils": 5361,
                "../ducks/metamask/metamask": 5892,
                "../helpers/constants/common": 5898,
                "../helpers/constants/transactions": 5906,
                "../helpers/utils/common.util": 5918,
                "../helpers/utils/token-util": 5934,
                "../helpers/utils/transactions.util": 5935,
                "../helpers/utils/util": 5937,
                "../selectors/selectors": 6303,
                "../store/actions": 6307,
                "./useCurrencyDisplay": 5952,
                "./useCurrentAsset": 5953,
                "./useI18nContext": 5957,
                "./useSwappedTokenValue": 5965,
                "./useTokenData": 5967,
                "./useTokenDisplayValue": 5968,
                "./useTokenFiatAmount": 5969,
                "./useUserPreferencedCurrency": 5974,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useTransactionDisplayData = function (e) {
                                    var t, a, k, O, P;
                                    const M = (0, r.useDispatch)(),
                                        S = (0, T.useCurrentAsset)(),
                                        x = (0, r.useSelector)(d.getTokens),
                                        N = (0, r.useSelector)(d.getCollectibles),
                                        A = (0, h.useI18nContext)(),
                                        { initialTransaction: R, primaryTransaction: L } = e,
                                        { type: I } = R,
                                        { from: F, to: D } = R.txParams || {},
                                        j =
                                            (0, r.useSelector)((e) => {
                                                var t;
                                                return (0, n.getKnownMethodData)(e, null == R || null === (t = R.txParams) || void 0 === t ? void 0 : t.data);
                                            }) || {},
                                        $ = (0, o.getStatusKey)(L),
                                        H = $ in c.PENDING_STATUS_HASH,
                                        G = $ === f.TRANSACTION_STATUSES.SUBMITTED,
                                        V = null === (t = L.txParams) || void 0 === t ? void 0 : t.value,
                                        W = (0, u.formatDateWithYearContext)(R.time);
                                    let U,
                                        B = "-",
                                        q = !1,
                                        z = D;
                                    const Y = c.TOKEN_CATEGORY_HASH[I],
                                        Z = Y && x.find(({ address: e }) => (0, m.isEqualCaseInsensitive)(e, z)),
                                        K = (0, _.useTokenData)(null == R || null === (a = R.txParams) || void 0 === a ? void 0 : a.data, Y),
                                        X = null !== (k = (0, l.getTokenIdParam)(K)) && void 0 !== k ? k : (0, g.getTokenValueParam)(K),
                                        Q = Y && N.find(({ address: e, tokenId: t }) => (0, m.isEqualCaseInsensitive)(e, z) && t === X),
                                        J = (0, y.useTokenDisplayValue)(null == R || null === (O = R.txParams) || void 0 === O ? void 0 : O.data, Z, Y),
                                        ee = (0, v.useTokenFiatAmount)(null == Z ? void 0 : Z.address, J, null == Z ? void 0 : Z.symbol),
                                        te = (0, u.stripHttpSchemes)(R.origin || (null === (P = R.msgParams) || void 0 === P ? void 0 : P.origin) || "");
                                    let ae,
                                        re,
                                        ne = Y ? (null == Z ? void 0 : Z.symbol) : undefined,
                                        oe = Y ? J : undefined,
                                        se = Y ? ee : undefined;
                                    const { swapTokenValue: ie, isNegative: le, swapTokenFiatAmount: ue, isViewingReceivedTokenFromSwap: ce } = (0, E.useSwappedTokenValue)(e, S);
                                    if (w.includes(I)) (ae = f.TRANSACTION_GROUP_CATEGORIES.SIGNATURE_REQUEST), (re = A("signatureRequest")), (U = te), (q = !0);
                                    else if (I === f.TRANSACTION_TYPES.SWAP)
                                        (ae = f.TRANSACTION_GROUP_CATEGORIES.SWAP),
                                            (re = A("swapTokenToToken", [R.sourceTokenSymbol, R.destinationTokenSymbol])),
                                            (U = te),
                                            (q = !0),
                                            (ne = ce ? S.symbol : R.sourceTokenSymbol),
                                            (oe = ie),
                                            (se = ue),
                                            (B = le ? "" : ce ? "+" : "-");
                                    else if (I === f.TRANSACTION_TYPES.SWAP_APPROVAL) (ae = f.TRANSACTION_GROUP_CATEGORIES.APPROVAL), (re = A("swapApproval", [L.sourceTokenSymbol])), (U = te), (q = !0), (ne = L.sourceTokenSymbol);
                                    else if (I === f.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE)
                                        (ae = f.TRANSACTION_GROUP_CATEGORIES.APPROVAL), (B = ""), (re = A("approveSpendLimit", [(null == Z ? void 0 : Z.symbol) || A("token")])), (U = te), (q = !0);
                                    else if (I === f.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL)
                                        (ae = f.TRANSACTION_GROUP_CATEGORIES.APPROVAL), (B = ""), (re = A("setApprovalForAllTitle", [(null == Z ? void 0 : Z.symbol) || A("token")])), (U = te), (q = !0);
                                    else if (I === f.TRANSACTION_TYPES.CONTRACT_INTERACTION) {
                                        ae = f.TRANSACTION_GROUP_CATEGORIES.INTERACTION;
                                        const e = (0, o.getTransactionTypeTitle)(A, I);
                                        (re = ((null == j ? void 0 : j.name) && (0, s.camelCaseToCapitalize)(j.name)) || e), (U = te), (q = !0);
                                    } else
                                        I === f.TRANSACTION_TYPES.DEPLOY_CONTRACT
                                            ? ((ae = f.TRANSACTION_GROUP_CATEGORIES.INTERACTION), (re = (0, o.getTransactionTypeTitle)(A, I)), (U = te), (q = !0))
                                            : I === f.TRANSACTION_TYPES.INCOMING
                                            ? ((ae = f.TRANSACTION_GROUP_CATEGORIES.RECEIVE), (re = A("receive")), (B = ""), (U = A("fromAddress", [(0, u.shortenAddress)(F)])))
                                            : I === f.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM || I === f.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER
                                            ? ((ae = f.TRANSACTION_GROUP_CATEGORIES.SEND),
                                              (re = A("sendSpecifiedTokens", [(null == Z ? void 0 : Z.symbol) || (null == Q ? void 0 : Q.name) || A("token")])),
                                              (z = (0, l.getTokenAddressParam)(K)),
                                              (U = A("toAddress", [(0, u.shortenAddress)(z)])))
                                            : I === f.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM
                                            ? ((ae = f.TRANSACTION_GROUP_CATEGORIES.SEND), (re = A("safeTransferFrom")), (z = (0, l.getTokenAddressParam)(K)), (U = A("toAddress", [(0, u.shortenAddress)(z)])))
                                            : I === f.TRANSACTION_TYPES.SIMPLE_SEND
                                            ? ((ae = f.TRANSACTION_GROUP_CATEGORIES.SEND), (re = A("send")), (U = A("toAddress", [(0, u.shortenAddress)(z)])))
                                            : M((0, p.captureSingleException)(`useTransactionDisplayData does not recognize transaction type. Type received is: ${I}`));
                                    const de = (0, C.useUserPreferencedCurrency)(i.PRIMARY),
                                        fe = (0, C.useUserPreferencedCurrency)(i.SECONDARY),
                                        [pe] = (0, b.useCurrencyDisplay)(V, { prefix: B, displayValue: oe, suffix: ne, ...de }),
                                        [me] = (0, b.useCurrencyDisplay)(V, { prefix: B, displayValue: se, hideLabel: Y || Boolean(ie), ...fe });
                                    return {
                                        title: re,
                                        category: ae,
                                        date: W,
                                        subtitle: U,
                                        subtitleContainsOrigin: q,
                                        primaryCurrency: I === f.TRANSACTION_TYPES.SWAP && H ? "" : pe,
                                        senderAddress: F,
                                        recipientAddress: z,
                                        secondaryCurrency: (Y && !ee) || (I === f.TRANSACTION_TYPES.SWAP && !ue) ? undefined : me,
                                        displayedStatusKey: $,
                                        isPending: H,
                                        isSubmitted: G,
                                    };
                                });
                            var r = e("react-redux"),
                                n = e("../selectors/selectors"),
                                o = e("../helpers/utils/transactions.util"),
                                s = e("../helpers/utils/common.util"),
                                i = e("../helpers/constants/common"),
                                l = e("../helpers/utils/token-util"),
                                u = e("../helpers/utils/util"),
                                c = e("../helpers/constants/transactions"),
                                d = e("../ducks/metamask/metamask"),
                                f = e("../../shared/constants/transaction"),
                                p = e("../store/actions"),
                                m = e("../../shared/modules/string-utils"),
                                g = e("../../shared/lib/metamask-controller-utils"),
                                h = e("./useI18nContext"),
                                v = e("./useTokenFiatAmount"),
                                C = e("./useUserPreferencedCurrency"),
                                b = e("./useCurrencyDisplay"),
                                y = e("./useTokenDisplayValue"),
                                _ = e("./useTokenData"),
                                E = e("./useSwappedTokenValue"),
                                T = e("./useCurrentAsset");
                            const w = [null, undefined, f.TRANSACTION_TYPES.SIGN, f.TRANSACTION_TYPES.PERSONAL_SIGN, f.TRANSACTION_TYPES.SIGN_TYPED_DATA, f.TRANSACTION_TYPES.ETH_DECRYPT, f.TRANSACTION_TYPES.ETH_GET_ENCRYPTION_PUBLIC_KEY];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5973,
            { "../../shared/constants/transaction": 5340, "../contexts/gasFee": 5876, "../selectors": 6300, "../store/actions": 6307, react: 4980, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionEventFragment = void 0);
                            var r = e("react"),
                                n = e("react-redux"),
                                o = e("../contexts/gasFee"),
                                s = e("../store/actions"),
                                i = e("../selectors"),
                                l = e("../../shared/constants/transaction");
                            a.useTransactionEventFragment = () => {
                                const { transaction: e } = (0, o.useGasFeeContext)(),
                                    t = (0, n.useSelector)((t) => (0, i.selectMatchingFragment)(t, { fragmentOptions: {}, existingId: `transaction-added-${null == e ? void 0 : e.id}` }));
                                return {
                                    updateTransactionEventFragment: (0, r.useCallback)(
                                        async (a) => {
                                            e && e.id && (t || (await (0, s.createTransactionEventFragment)(e.id, l.TRANSACTION_EVENTS.APPROVED)), (0, s.updateEventFragment)(`transaction-added-${e.id}`, a));
                                        },
                                        [t, e]
                                    ),
                                };
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5974,
            { "../ducks/metamask/metamask": 5892, "../helpers/constants/common": 5898, "../selectors": 6300, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.useUserPreferencedCurrency = function (e, t = {}) {
                                    const a = (0, r.useSelector)(o.getNativeCurrency),
                                        { useNativeCurrencyAsPrimaryCurrency: i } = (0, r.useSelector)(n.getPreferences, r.shallowEqual),
                                        l = (0, r.useSelector)(n.getShouldShowFiat) || t.showFiatOverride,
                                        u = (0, r.useSelector)(n.getCurrentCurrency);
                                    let c, d;
                                    !l || (e === s.PRIMARY && i) || (e === s.SECONDARY && !i)
                                        ? ((c = a || s.ETH), (d = t.numberOfDecimals || t.ethNumberOfDecimals || 8))
                                        : ((e === s.SECONDARY && i) || (e === s.PRIMARY && !i)) && ((c = u), (d = t.numberOfDecimals || t.fiatNumberOfDecimals || 2));
                                    return { currency: c, numberOfDecimals: d };
                                });
                            var r = e("react-redux"),
                                n = e("../selectors"),
                                o = e("../ducks/metamask/metamask"),
                                s = e("../helpers/constants/common");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5975,
            {
                "../app/scripts/lib/setupSentry": 83,
                "../app/scripts/lib/util": 86,
                "../shared/constants/alerts": 5327,
                "../shared/constants/app": 5328,
                "../shared/lib/error-utils": 5341,
                "../shared/lib/switch-direction": 5346,
                "../shared/modules/object.utils": 5357,
                "./ducks/alerts": 5881,
                "./ducks/metamask/metamask": 5892,
                "./helpers/utils/tx-helper": 5936,
                "./pages": 6105,
                "./selectors": 6300,
                "./store/action-queue": 6305,
                "./store/actions": 6307,
                "./store/store": 6308,
                "copy-to-clipboard": 1800,
                lodash: 4694,
                loglevel: 4707,
                react: 4980,
                "react-dom": 4885,
                "webextension-polyfill": 5306,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function (e, t) {
                                    const { backgroundConnection: a } = e;
                                    a.getState(function (r, n) {
                                        r
                                            ? t(r, n)
                                            : (async function (e, t, a) {
                                                  e.featureFlags || (e.featureFlags = {});
                                                  const { currentLocaleMessages: r, enLocaleMessages: n } = await (0, g.setupLocale)(e.currentLocale);
                                                  "rtl" === e.textDirection && (await (0, m.default)("rtl"));
                                                  const o = { activeTab: a.activeTab, metamask: e, appState: {}, localeMessages: { current: r, en: n } };
                                                  if ((P(t), (0, u.getEnvironmentType)() === p.ENVIRONMENT_TYPE_POPUP)) {
                                                      const { origin: e } = o.activeTab,
                                                          t = (0, C.getPermittedAccountsForCurrentTab)(o),
                                                          a = (0, C.getSelectedAddress)(o),
                                                          r = (0, y.getUnconnectedAccountAlertShown)(o),
                                                          n = (0, y.getUnconnectedAccountAlertEnabledness)(o);
                                                      e && n && !r[e] && t.length > 0 && !t.includes(a) && ((o[c.ALERT_TYPES.unconnectedAccount] = { state: b.ALERT_STATE.OPEN }), h.setUnconnectedAccountAlertShown(e));
                                                  }
                                                  const l = (0, v.default)(o);
                                                  O = l;
                                                  const d = (0, E.default)(
                                                      e.unapprovedTxs,
                                                      e.unapprovedMsgs,
                                                      e.unapprovedPersonalMsgs,
                                                      e.unapprovedDecryptMsgs,
                                                      e.unapprovedEncryptionPublicKeyMsgs,
                                                      e.unapprovedTypedMessages,
                                                      e.network,
                                                      e.provider.chainId
                                                  );
                                                  d.length > 0 && l.dispatch(h.showConfTxPage({ id: d[0].id }));
                                                  return (
                                                      (global.metamask = {
                                                          updateCurrentLocale: (e) => {
                                                              l.dispatch(h.updateCurrentLocale(e));
                                                          },
                                                          setProviderType: (e) => {
                                                              l.dispatch(h.setProviderType(e));
                                                          },
                                                          setFeatureFlag: (e, t) => {
                                                              l.dispatch(h.setFeatureFlag(e, t));
                                                          },
                                                      }),
                                                      (0, i.render)(s.default.createElement(_.default, { store: l }), a.container),
                                                      l
                                                  );
                                              })(n, a, e).then((e) => {
                                                  !(function (e) {
                                                      (window.stateHooks.getCleanAppState = async function () {
                                                          const t = (0, o.clone)(e.getState());
                                                          return (t.version = global.platform.getVersion()), (t.browser = window.navigator.userAgent), (t.completeTxList = await h.getTransactions({ filterToCurrentNetwork: !1 })), t;
                                                      }),
                                                          (window.stateHooks.getSentryState = function () {
                                                              const t = e.getState(),
                                                                  a = (0, d.maskObject)(t, f.SENTRY_STATE);
                                                              return { browser: window.navigator.userAgent, store: a, version: global.platform.getVersion() };
                                                          });
                                                  })(e),
                                                      t(null, e);
                                              });
                                    });
                                }),
                                (a.updateBackgroundConnection = void 0);
                            var r = k(e("copy-to-clipboard")),
                                n = k(e("loglevel")),
                                o = e("lodash"),
                                s = k(e("react")),
                                i = e("react-dom"),
                                l = k(e("webextension-polyfill")),
                                u = e("../app/scripts/lib/util"),
                                c = e("../shared/constants/alerts"),
                                d = e("../shared/modules/object.utils"),
                                f = e("../app/scripts/lib/setupSentry"),
                                p = e("../shared/constants/app"),
                                m = k(e("../shared/lib/switch-direction")),
                                g = e("../shared/lib/error-utils"),
                                h = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = w(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("./store/actions")),
                                v = k(e("./store/store")),
                                C = e("./selectors"),
                                b = e("./ducks/alerts"),
                                y = e("./ducks/metamask/metamask"),
                                _ = k(e("./pages")),
                                E = k(e("./helpers/utils/tx-helper")),
                                T = e("./store/action-queue");
                            function w(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (w = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function k(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            let O;
                            n.default.setLevel(global.METAMASK_DEBUG ? "debug" : "warn");
                            const P = (e) => {
                                (0, T._setBackgroundConnection)(e),
                                    e.onNotification((e) => {
                                        if ("sendUpdate" !== e.method) throw new Error(`Internal JSON-RPC Notification Not Handled:\n\n ${JSON.stringify(e)}`);
                                        O.dispatch(h.updateMetamaskState(e.params[0]));
                                    });
                            };
                            (a.updateBackgroundConnection = P),
                                (window.logStateString = async function (e) {
                                    const t = await window.stateHooks.getCleanAppState();
                                    l.default.runtime
                                        .getPlatformInfo()
                                        .then((a) => {
                                            t.platform = a;
                                            const r = JSON.stringify(t, null, 2);
                                            e(null, r);
                                        })
                                        .catch((t) => {
                                            e(t);
                                        });
                                }),
                                (window.logState = function (e) {
                                    return window.logStateString((t, a) => {
                                        t ? console.error(t.message) : e ? ((0, r.default)(a), console.log("State log copied")) : console.log(a);
                                    });
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5976,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/transaction": 5340,
                "../../components/app/collectibles-detection-notice": 5420,
                "../../components/ui/actionable-message": 5704,
                "../../components/ui/box": 5707,
                "../../components/ui/form-field": 5743,
                "../../components/ui/page-container": 5821,
                "../../components/ui/typography": 5869,
                "../../contexts/metametrics": 5878,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/routes": 5904,
                "../../hooks/useI18nContext": 5957,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "@metamask/controllers": 1034,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                (a.default = function () {
                                    var e, t, a, E, T;
                                    const w = (0, i.useI18nContext)(),
                                        k = (0, n.useHistory)(),
                                        O = (0, o.useDispatch)(),
                                        P = (0, o.useSelector)(h.getUseCollectibleDetection),
                                        M = (0, o.useSelector)(h.getIsMainnet),
                                        S = (0, o.useSelector)(v.getCollectiblesDetectionNoticeDismissed),
                                        x = null == k || null === (e = k.location) || void 0 === e || null === (t = e.state) || void 0 === t ? void 0 : t.addressEnteredOnImportTokensPage,
                                        N = null == k || null === (a = k.location) || void 0 === a || null === (E = a.state) || void 0 === E ? void 0 : E.tokenAddress,
                                        [A, R] = (0, r.useState)(null !== (T = null != x ? x : N) && void 0 !== T ? T : ""),
                                        [L, I] = (0, r.useState)(""),
                                        [F, D] = (0, r.useState)(!0),
                                        [j, $] = (0, r.useState)(!1),
                                        H = (0, r.useContext)(b.MetaMetricsContext);
                                    return r.default.createElement(p.default, {
                                        title: w("importNFT"),
                                        onSubmit: () => {
                                            (async () => {
                                                try {
                                                    await O((0, m.addCollectibleVerifyOwnership)(A, L));
                                                } catch (e) {
                                                    const { message: t } = e;
                                                    return O((0, m.setNewCollectibleAddedMessage)(t)), void $(!0);
                                                }
                                                N && (await O((0, m.ignoreTokens)({ tokensToIgnore: N, dontShowLoadingIndicator: !0 }))), O((0, m.setNewCollectibleAddedMessage)("success"));
                                                const e = await (0, m.getTokenStandardAndDetails)(A, null, L.toString());
                                                H({
                                                    event: _.EVENT_NAMES.TOKEN_ADDED,
                                                    category: "Wallet",
                                                    sensitiveProperties: {
                                                        token_contract_address: A,
                                                        token_symbol: null == e ? void 0 : e.symbol,
                                                        tokenId: L.toString(),
                                                        asset_type: y.ASSET_TYPES.COLLECTIBLE,
                                                        token_standard: null == e ? void 0 : e.standard,
                                                        source: _.EVENT.SOURCE.TOKEN.CUSTOM,
                                                    },
                                                }),
                                                    k.push(l.DEFAULT_ROUTE);
                                            })();
                                        },
                                        submitText: w("add"),
                                        onCancel: () => {
                                            k.push(l.DEFAULT_ROUTE);
                                        },
                                        onClose: () => {
                                            k.push(l.DEFAULT_ROUTE);
                                        },
                                        disabled: F,
                                        contentComponent: r.default.createElement(
                                            c.default,
                                            null,
                                            !M || P || S ? null : r.default.createElement(C.default, null),
                                            j &&
                                                r.default.createElement(f.default, {
                                                    type: "danger",
                                                    useIcon: !0,
                                                    iconFillColor: "var(--color-error-default)",
                                                    message: r.default.createElement(
                                                        c.default,
                                                        { display: u.DISPLAY.INLINE_FLEX },
                                                        r.default.createElement(d.default, { variant: u.TYPOGRAPHY.H7, fontWeight: u.FONT_WEIGHT.NORMAL, margin: 0 }, w("collectibleAddFailedMessage")),
                                                        r.default.createElement("button", { className: "fas fa-times add-collectible__close", title: w("close"), onClick: () => $(!1) })
                                                    ),
                                                }),
                                            r.default.createElement(
                                                c.default,
                                                { margin: 4 },
                                                r.default.createElement(g.default, {
                                                    dataTestId: "address",
                                                    titleText: w("address"),
                                                    placeholder: "0x...",
                                                    value: A,
                                                    onChange: (e) => {
                                                        ((e) => {
                                                            D(!s.util.isValidHexAddress(e) || !L), R(e);
                                                        })(e),
                                                            $(!1);
                                                    },
                                                    tooltipText: w("importNFTAddressToolTip"),
                                                    autoFocus: !0,
                                                }),
                                                r.default.createElement(g.default, {
                                                    dataTestId: "token-id",
                                                    titleText: w("tokenId"),
                                                    placeholder: w("nftTokenIdPlaceholder"),
                                                    value: L,
                                                    onChange: (e) => {
                                                        ((e) => {
                                                            D(!s.util.isValidHexAddress(A) || !e || isNaN(Number(e))), I(e);
                                                        })(e),
                                                            $(!1);
                                                    },
                                                    tooltipText: w("importNFTTokenIdToolTip"),
                                                })
                                            )
                                        ),
                                    });
                                });
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = T(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = e("react-router-dom"),
                                o = e("react-redux"),
                                s = e("@metamask/controllers"),
                                i = e("../../hooks/useI18nContext"),
                                l = e("../../helpers/constants/routes"),
                                u = e("../../helpers/constants/design-system"),
                                c = E(e("../../components/ui/box")),
                                d = E(e("../../components/ui/typography")),
                                f = E(e("../../components/ui/actionable-message")),
                                p = E(e("../../components/ui/page-container")),
                                m = e("../../store/actions"),
                                g = E(e("../../components/ui/form-field")),
                                h = e("../../selectors"),
                                v = e("../../ducks/metamask/metamask"),
                                C = E(e("../../components/app/collectibles-detection-notice")),
                                b = e("../../contexts/metametrics"),
                                y = e("../../../shared/constants/transaction"),
                                _ = e("../../../shared/constants/metametrics");
                            function E(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function T(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (T = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5977,
            { "./add-collectible": 5976 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./add-collectible")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5978,
            {
                "../../../shared/modules/string-utils": 5361,
                "../../components/app/collectible-details/collectible-details": 5417,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/routes": 5904,
                "./components/native-asset": 5982,
                "./components/token-asset": 5983,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = p(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = e("react-redux"),
                                o = e("react-router-dom"),
                                s = e("../../../shared/modules/string-utils"),
                                i = f(e("../../components/app/collectible-details/collectible-details")),
                                l = e("../../ducks/metamask/metamask"),
                                u = e("../../helpers/constants/routes"),
                                c = f(e("./components/native-asset")),
                                d = f(e("./components/token-asset"));
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (p = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            var m = () => {
                                const e = (0, n.useSelector)((e) => e.metamask.nativeCurrency),
                                    t = (0, n.useSelector)(l.getTokens),
                                    a = (0, n.useSelector)(l.getCollectibles),
                                    { asset: f, id: p } = (0, o.useParams)(),
                                    m = t.find(({ address: e }) => (0, s.isEqualCaseInsensitive)(e, f)),
                                    g = a.find(({ address: e, tokenId: t }) => (0, s.isEqualCaseInsensitive)(e, f) && p === t.toString());
                                let h;
                                return (
                                    (0, r.useEffect)(() => {
                                        document.querySelector(".app").scroll(0, 0);
                                    }, []),
                                    (h = g
                                        ? r.default.createElement(i.default, { collectible: g })
                                        : m
                                        ? r.default.createElement(d.default, { token: m })
                                        : f === e
                                        ? r.default.createElement(c.default, { nativeCurrency: e })
                                        : r.default.createElement(o.Redirect, { to: { pathname: u.DEFAULT_ROUTE } })),
                                    r.default.createElement("div", { className: "main-container asset__container" }, h)
                                );
                            };
                            a.default = m;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5979,
            { "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = o(e("react")),
                                n = o(e("prop-types"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const s = ({ accountName: e, assetName: t, onBack: a }) =>
                                r.default.createElement(
                                    "button",
                                    { className: "asset-breadcrumb", onClick: a },
                                    r.default.createElement("i", { className: "fas fa-chevron-left asset-breadcrumb__chevron", "data-testid": "asset__back" }),
                                    r.default.createElement("span", null, e),
                                    " / ",
                                    r.default.createElement("span", { className: "asset-breadcrumb__asset" }, t)
                                );
                            s.propTypes = { accountName: n.default.string.isRequired, assetName: n.default.string.isRequired, onBack: n.default.func.isRequired };
                            var i = s;
                            a.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            598,
            { "./Dialog": 597, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            var r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var n = r(e("./Dialog"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5980,
            { "./asset-breadcrumb": 5979, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r = s(e("react")),
                                n = s(e("prop-types")),
                                o = s(e("./asset-breadcrumb"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const i = ({ accountName: e, assetName: t, onBack: a, optionsButton: n }) =>
                                r.default.createElement("div", { className: "asset-navigation" }, r.default.createElement(o.default, { accountName: e, assetName: t, onBack: a }), n);
                            (i.propTypes = { accountName: n.default.string.isRequired, assetName: n.default.string.isRequired, onBack: n.default.func.isRequired, optionsButton: n.default.element }),
                                (i.defaultProps = { optionsButton: undefined });
                            var l = i;
                            a.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5981,
            { "../../../components/ui/menu": 5811, "../../../contexts/i18n": 5877, "../../../helpers/constants/routes": 5904, "../../../selectors": 6300, "prop-types": 4806, react: 4980, "react-redux": 4939, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                            var r,
                                n = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = f(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                o = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                                s = e("react-router-dom"),
                                i = e("react-redux"),
                                l = e("../../../contexts/i18n"),
                                u = e("../../../components/ui/menu"),
                                c = e("../../../selectors"),
                                d = e("../../../helpers/constants/routes");
                            function f(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (f = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            const p = ({ onRemove: e, onClickBlockExplorer: t, onViewAccountDetails: a, onViewTokenDetails: r, tokenSymbol: o, isNativeAsset: f }) => {
                                    const p = (0, n.useContext)(l.I18nContext),
                                        [m, g] = (0, n.useState)(null),
                                        [h, v] = (0, n.useState)(!1),
                                        C = (0, s.useHistory)(),
                                        b = (0, i.useSelector)(c.getBlockExplorerLinkText);
                                    return n.default.createElement(
                                        n.default.Fragment,
                                        null,
                                        n.default.createElement("button", { className: "fas fa-ellipsis-v asset-options__button", "data-testid": "asset-options__button", onClick: () => v(!0), ref: g, title: p("assetOptions") }),
                                        h
                                            ? n.default.createElement(
                                                  u.Menu,
                                                  { anchorElement: m, onHide: () => v(!1) },
                                                  n.default.createElement(
                                                      u.MenuItem,
                                                      {
                                                          iconClassName: "fas fa-qrcode",
                                                          "data-testid": "asset-options__account-details",
                                                          onClick: () => {
                                                              v(!1), a();
                                                          },
                                                      },
                                                      p("accountDetails")
                                                  ),
                                                  n.default.createElement(
                                                      u.MenuItem,
                                                      {
                                                          iconClassName: "fas fa-external-link-alt asset-options__icon",
                                                          "data-testid": "asset-options__etherscan",
                                                          onClick:
                                                              "addBlockExplorer" === b.firstPart
                                                                  ? () => {
                                                                        C.push(`${d.NETWORKS_ROUTE}#blockExplorerUrl`);
                                                                    }
                                                                  : () => {
                                                                        v(!1), t();
                                                                    },
                                                      },
                                                      p(b.firstPart, "" === b.secondPart ? null : [p("blockExplorerAssetAction")])
                                                  ),
                                                  f
                                                      ? null
                                                      : n.default.createElement(
                                                            u.MenuItem,
                                                            {
                                                                iconClassName: "fas fa-trash-alt asset-options__icon",
                                                                "data-testid": "asset-options__hide",
                                                                onClick: () => {
                                                                    v(!1), e();
                                                                },
                                                            },
                                                            p("hideTokenSymbol", [o])
                                                        ),
                                                  f
                                                      ? null
                                                      : n.default.createElement(
                                                            u.MenuItem,
                                                            {
                                                                iconClassName: "fas fa-info-circle asset-options__icon",
                                                                "data-testid": "asset-options__token-details",
                                                                onClick: () => {
                                                                    v(!1), r();
                                                                },
                                                            },
                                                            p("tokenDetails")
                                                        )
                                              )
                                            : null
                                    );
                                },
                                m = (e) => "function" != typeof e;
                            p.propTypes = {
                                isNativeAsset: o.default.bool,
                                onClickBlockExplorer: o.default.func.isRequired,
                                onViewAccountDetails: o.default.func.isRequired,
                                onRemove: (e) => {
                                    if (!1 === e.isNativeAsset && m(e.onRemove)) throw new Error("When isNativeAsset is true, onRemove is a required prop");
                                },
                                onViewTokenDetails: (e) => {
                                    if (!1 === e.isNativeAsset && m(e.onViewTokenDetails)) throw new Error("When isNativeAsset is true, onViewTokenDetails is a required prop");
                                },
                                tokenSymbol: (e) => {
                                    if (!1 === e.isNativeAsset && "string" != typeof e.tokenSymbol) throw new Error("When isNativeAsset is true, tokenSymbol is a required prop");
                                },
                            };
                            var g = p;
                            a.default = g;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5982,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/app/transaction-list": 5675,
                "../../../components/app/wallet-overview": 5688,
                "../../../contexts/metametrics": 5878,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/utils/util": 5937,
                "../../../selectors/selectors": 6303,
                "../../../store/actions": 6307,
                "./asset-navigation": 5980,
                "./asset-options": 5981,
                "@metamask/etherscan-link": 1158,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = b(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = C(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("@metamask/etherscan-link"),
                                l = C(e("../../../components/app/transaction-list")),
                                u = e("../../../components/app/wallet-overview"),
                                c = e("../../../selectors/selectors"),
                                d = e("../../../store/actions"),
                                f = e("../../../helpers/constants/routes"),
                                p = e("../../../helpers/utils/util"),
                                m = e("../../../contexts/metametrics"),
                                g = e("../../../../shared/constants/metametrics"),
                                h = C(e("./asset-navigation")),
                                v = C(e("./asset-options"));
                            function C(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function b(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (b = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function y({ nativeCurrency: e }) {
                                const t = (0, o.useSelector)((e) => (0, c.getSelectedIdentity)(e).name),
                                    a = (0, o.useDispatch)(),
                                    n = (0, o.useSelector)(c.getCurrentChainId),
                                    C = (0, o.useSelector)(c.getRpcPrefsForCurrentProvider),
                                    b = (0, o.useSelector)(c.getSelectedAddress),
                                    y = (0, s.useHistory)(),
                                    _ = (0, i.getAccountLink)(b, n, C),
                                    E = (0, r.useContext)(m.MetaMetricsContext),
                                    T = (0, o.useSelector)(c.getIsCustomNetwork);
                                return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    r.default.createElement(h.default, {
                                        accountName: t,
                                        assetName: e,
                                        onBack: () => y.push(f.DEFAULT_ROUTE),
                                        optionsButton: r.default.createElement(v.default, {
                                            isNativeAsset: !0,
                                            onClickBlockExplorer: () => {
                                                E({
                                                    event: "Clicked Block Explorer Link",
                                                    category: g.EVENT.CATEGORIES.NAVIGATION,
                                                    properties: { link_type: "Account Tracker", action: "Asset Options", block_explorer_domain: (0, p.getURLHostName)(_) },
                                                }),
                                                    global.platform.openTab({ url: _ });
                                            },
                                            onViewAccountDetails: () => {
                                                a((0, d.showModal)({ name: "ACCOUNT_DETAILS" }));
                                            },
                                            isCustomNetwork: T,
                                        }),
                                    }),
                                    r.default.createElement(u.EthOverview, { className: "asset__overview" }),
                                    r.default.createElement(l.default, { hideTokenTransactions: !0 })
                                );
                            }
                            y.propTypes = { nativeCurrency: n.default.string.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5983,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/app/transaction-list": 5675,
                "../../../components/app/wallet-overview": 5688,
                "../../../contexts/metametrics": 5878,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/utils/util": 5937,
                "../../../selectors/selectors": 6303,
                "../../../store/actions": 6307,
                "./asset-navigation": 5980,
                "./asset-options": 5981,
                "@metamask/etherscan-link": 1158,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                            var r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var a = b(t);
                                    if (a && a.has(e)) return a.get(e);
                                    var r = {},
                                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                                        }
                                    (r.default = e), a && a.set(e, r);
                                    return r;
                                })(e("react")),
                                n = C(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("@metamask/etherscan-link"),
                                l = C(e("../../../components/app/transaction-list")),
                                u = e("../../../components/app/wallet-overview"),
                                c = e("../../../selectors/selectors"),
                                d = e("../../../helpers/constants/routes"),
                                f = e("../../../helpers/utils/util"),
                                p = e("../../../store/actions"),
                                m = e("../../../contexts/metametrics"),
                                g = e("../../../../shared/constants/metametrics"),
                                h = C(e("./asset-navigation")),
                                v = C(e("./asset-options"));
                            function C(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function b(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    a = new WeakMap();
                                return (b = function (e) {
                                    return e ? a : t;
                                })(e);
                            }
                            function y({ token: e }) {
                                const t = (0, o.useDispatch)(),
                                    a = (0, o.useSelector)(c.getCurrentChainId),
                                    n = (0, o.useSelector)(c.getRpcPrefsForCurrentProvider),
                                    C = (0, o.useSelector)(c.getSelectedIdentity),
                                    b = C.name,
                                    y = C.address,
                                    _ = (0, s.useHistory)(),
                                    E = (0, i.getTokenTrackerLink)(e.address, a, null, y, n),
                                    T = (0, r.useContext)(m.MetaMetricsContext),
                                    w = (0, o.useSelector)(c.getIsCustomNetwork);
                                return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    r.default.createElement(h.default, {
                                        accountName: b,
                                        assetName: e.symbol,
                                        onBack: () => _.push(d.DEFAULT_ROUTE),
                                        optionsButton: r.default.createElement(v.default, {
                                            onRemove: () => t((0, p.showModal)({ name: "HIDE_TOKEN_CONFIRMATION", token: e, history: _ })),
                                            isCustomNetwork: w,
                                            onClickBlockExplorer: () => {
                                                T({
                                                    event: "Clicked Block Explorer Link",
                                                    category: g.EVENT.CATEGORIES.NAVIGATION,
                                                    properties: { link_type: "Token Tracker", action: "Token Options", block_explorer_domain: (0, f.getURLHostName)(E) },
                                                }),
                                                    global.platform.openTab({ url: E });
                                            },
                                            onViewAccountDetails: () => {
                                                t((0, p.showModal)({ name: "ACCOUNT_DETAILS" }));
                                            },
                                            onViewTokenDetails: () => {
                                                _.push(`${d.TOKEN_DETAILS}/${e.address}`);
                                            },
                                            tokenSymbol: e.symbol,
                                        }),
                                    }),
                                    r.default.createElement(u.TokenOverview, { className: "asset__overview", token: e }),
                                    r.default.createElement(l.default, { tokenAddress: e.address })
                                );
                            }
                            y.propTypes = { token: n.default.shape({ address: n.default.string.isRequired, decimals: n.default.number, symbol: n.default.string }).isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5984,
            { "./asset": 5978 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, a) {
                            Object.defineProperty(a, "__esModule", { value: !0 }),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return n.default;
                                    },
                                });
                            var r,
                                n = (r = e("./asset")) && r.__esModule ? r : { default: r };
                        };
                    };
            },
            { package: "$root$" },
        ],
    ],
    [],
    {}
);
