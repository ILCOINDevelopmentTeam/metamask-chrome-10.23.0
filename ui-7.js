LavaPack.loadBundle(
    [
        [
            5985,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/modules/string-utils": 5361,
                "../../components/ui/actionable-message/actionable-message": 5703,
                "../../components/ui/button": 5711,
                "../../components/ui/identicon": 5785,
                "../../components/ui/token-balance": 5860,
                "../../contexts/i18n": 5877,
                "../../contexts/metametrics": 5878,
                "../../ducks/history/history": 5889,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/zendesk-url": 5907,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = b(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = v(e("../../components/ui/actionable-message/actionable-message")),
                                i = v(e("../../components/ui/button")),
                                c = v(e("../../components/ui/identicon")),
                                l = v(e("../../components/ui/token-balance")),
                                u = e("../../contexts/i18n"),
                                d = e("../../contexts/metametrics"),
                                p = e("../../ducks/history/history"),
                                f = e("../../ducks/metamask/metamask"),
                                m = v(e("../../helpers/constants/zendesk-url")),
                                h = e("../../../shared/modules/string-utils"),
                                E = e("../../selectors"),
                                g = e("../../store/actions"),
                                _ = e("../../../shared/constants/metametrics"),
                                y = e("../../../shared/constants/transaction");
                            function v(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function b(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (b = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            var T = () => {
                                const e = (0, a.useContext)(u.I18nContext),
                                    t = (0, r.useDispatch)(),
                                    n = (0, o.useHistory)(),
                                    v = (0, r.useSelector)(p.getMostRecentOverviewPage),
                                    b = (0, r.useSelector)(E.getSuggestedAssets),
                                    T = (0, r.useSelector)(f.getTokens),
                                    k = (0, a.useContext)(d.MetaMetricsContext),
                                    N = (0, a.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                const n = e.find(({ asset: e }) => {
                                                    const n = t.find(({ address: t }) => (0, h.isEqualCaseInsensitive)(t, e.address));
                                                    return Boolean(n);
                                                });
                                                return Boolean(n);
                                            })(b, T) &&
                                            a.default.createElement(s.default, {
                                                message: e("knownTokenWarning", [
                                                    a.default.createElement(
                                                        i.default,
                                                        {
                                                            type: "link",
                                                            key: "confirm-add-suggested-token-duplicate-warning",
                                                            className: "confirm-add-suggested-token__link",
                                                            rel: "noopener noreferrer",
                                                            target: "_blank",
                                                            href: m.default.TOKEN_SAFETY_PRACTICES,
                                                        },
                                                        e("learnScamRisk")
                                                    ),
                                                ]),
                                                type: "warning",
                                                withRightButton: !0,
                                                useIcon: !0,
                                                iconFillColor: "#f8c000",
                                            }),
                                        [b, T, e]
                                    ),
                                    w = (0, a.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                const n = e.find(({ asset: e }) => {
                                                    const n = t.find((t) => (0, h.isEqualCaseInsensitive)(t.symbol, e.symbol) && !(0, h.isEqualCaseInsensitive)(t.address, e.address));
                                                    return Boolean(n);
                                                });
                                                return Boolean(n);
                                            })(b, T) && a.default.createElement(s.default, { message: e("reusedTokenNameWarning"), type: "warning", withRightButton: !0, useIcon: !0, iconFillColor: "#f8c000" }),
                                        [b, T, e]
                                    ),
                                    O = (0, a.useCallback)(async () => {
                                        await Promise.all(
                                            b.map(async ({ asset: e, id: n }) => {
                                                await t((0, g.acceptWatchAsset)(n)),
                                                    k({
                                                        event: _.EVENT_NAMES.TOKEN_ADDED,
                                                        category: _.EVENT.CATEGORIES.WALLET,
                                                        sensitiveProperties: {
                                                            token_symbol: e.symbol,
                                                            token_contract_address: e.address,
                                                            token_decimal_precision: e.decimals,
                                                            unlisted: e.unlisted,
                                                            source: _.EVENT.SOURCE.TOKEN.DAPP,
                                                            token_standard: y.TOKEN_STANDARDS.ERC20,
                                                            asset_type: y.ASSET_TYPES.TOKEN,
                                                        },
                                                    });
                                            })
                                        ),
                                            n.push(v);
                                    }, [t, n, k, v, b]);
                                return (
                                    (0, a.useEffect)(() => {
                                        b.length || n.push(v);
                                    }, []),
                                    a.default.createElement(
                                        "div",
                                        { className: "page-container" },
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__header" },
                                            a.default.createElement("div", { className: "page-container__title" }, e("addSuggestedTokens")),
                                            a.default.createElement("div", { className: "page-container__subtitle" }, e("likeToImportTokens")),
                                            N,
                                            w
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__content" },
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-add-suggested-token" },
                                                a.default.createElement(
                                                    "div",
                                                    { className: "confirm-add-suggested-token__header" },
                                                    a.default.createElement("div", { className: "confirm-add-suggested-token__token" }, e("token")),
                                                    a.default.createElement("div", { className: "confirm-add-suggested-token__balance" }, e("balance"))
                                                ),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "confirm-add-suggested-token__token-list" },
                                                    b.map(({ asset: e }) => {
                                                        return a.default.createElement(
                                                            "div",
                                                            { className: "confirm-add-suggested-token__token-list-item", key: e.address },
                                                            a.default.createElement(
                                                                "div",
                                                                { className: "confirm-add-suggested-token__token confirm-add-suggested-token__data" },
                                                                a.default.createElement(c.default, { className: "confirm-add-suggested-token__token-icon", diameter: 48, address: e.address, image: e.image }),
                                                                a.default.createElement("div", { className: "confirm-add-suggested-token__name" }, ((t = e.name), (n = e.symbol), t === undefined ? n : `${t} (${n})`))
                                                            ),
                                                            a.default.createElement("div", { className: "confirm-add-suggested-token__balance" }, a.default.createElement(l.default, { token: e }))
                                                        );
                                                        var t, n;
                                                    })
                                                )
                                            )
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__footer" },
                                            a.default.createElement(
                                                "footer",
                                                null,
                                                a.default.createElement(
                                                    i.default,
                                                    {
                                                        type: "secondary",
                                                        large: !0,
                                                        className: "page-container__footer-button",
                                                        onClick: async () => {
                                                            await Promise.all(b.map(({ id: e }) => t((0, g.rejectWatchAsset)(e)))), n.push(v);
                                                        },
                                                    },
                                                    e("cancel")
                                                ),
                                                a.default.createElement(i.default, { type: "primary", large: !0, className: "page-container__footer-button", disabled: 0 === b.length, onClick: O }, e("addToken"))
                                            )
                                        )
                                    )
                                );
                            };
                            n.default = T;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5986,
            { "./confirm-add-suggested-token": 5985 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-add-suggested-token")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5987,
            {
                "../../../../shared/constants/network": 5333,
                "../../../../shared/constants/time": 5338,
                "../../../../shared/constants/transaction": 5340,
                "../../../components/app/confirm-page-container/confirm-page-container-content": 5432,
                "../../../components/app/edit-gas-fee-button": 5480,
                "../../../components/app/gas-details-item": 5498,
                "../../../components/app/ledger-instruction-field": 5505,
                "../../../components/app/multilayer-fee-message": 5575,
                "../../../components/ui/box": 5707,
                "../../../components/ui/button": 5711,
                "../../../components/ui/icon/copy-icon.component": 5753,
                "../../../components/ui/identicon": 5785,
                "../../../components/ui/typography": 5869,
                "../../../components/ui/url-icon": 5874,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/utils/confirm-tx.util": 5919,
                "../../../helpers/utils/util": 5937,
                "../../send/send.utils": 6177,
                "@metamask/etherscan-link": 1158,
                classnames: 1772,
                "copy-to-clipboard": 1800,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = P(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = O(e("prop-types")),
                                o = O(e("classnames")),
                                s = O(e("copy-to-clipboard")),
                                i = e("@metamask/etherscan-link"),
                                c = O(e("../../../components/ui/url-icon")),
                                l = e("../../../helpers/utils/util"),
                                u = e("../../../helpers/utils/confirm-tx.util"),
                                d = e("../../send/send.utils"),
                                p = O(e("../../../components/ui/typography")),
                                f = O(e("../../../components/ui/box")),
                                m = O(e("../../../components/ui/button")),
                                h = O(e("../../../components/app/edit-gas-fee-button")),
                                E = O(e("../../../components/ui/identicon")),
                                g = O(e("../../../components/app/multilayer-fee-message")),
                                _ = O(e("../../../components/ui/icon/copy-icon.component")),
                                y = e("../../../helpers/constants/design-system"),
                                v = e("../../../../shared/constants/time"),
                                b = e("../../../components/app/confirm-page-container/confirm-page-container-content"),
                                T = O(e("../../../components/app/gas-details-item")),
                                k = O(e("../../../components/app/ledger-instruction-field")),
                                N = e("../../../../shared/constants/transaction"),
                                w = e("../../../../shared/constants/network");
                            function O(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function P(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (P = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function A(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class S extends a.Component {
                                constructor(...e) {
                                    super(...e), A(this, "state", { showFullTxDetails: !1, copied: !1 });
                                }
                                renderApproveContentCard({ showHeader: e = !0, symbol: t, title: n, showEdit: r, showAdvanceGasFeeOptions: s = !1, onEditClick: i, content: c, footer: l, noBorder: u }) {
                                    const { supportsEIP1559V2: d } = this.props,
                                        { t: p } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        { className: (0, o.default)({ "confirm-approve-content__card": !u, "confirm-approve-content__card--no-border": u }) },
                                        e &&
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-approve-content__card-header" },
                                                d && n === p("transactionFee")
                                                    ? null
                                                    : a.default.createElement(
                                                          a.default.Fragment,
                                                          null,
                                                          a.default.createElement("div", { className: "confirm-approve-content__card-header__symbol" }, t),
                                                          a.default.createElement("div", { className: "confirm-approve-content__card-header__title" }, n)
                                                      ),
                                                r &&
                                                    (!s || !d) &&
                                                    a.default.createElement(
                                                        f.default,
                                                        { width: y.BLOCK_SIZES.ONE_SIXTH },
                                                        a.default.createElement(m.default, { type: "link", className: "confirm-approve-content__small-blue-text", onClick: () => i() }, p("edit"))
                                                    ),
                                                r && s && d && a.default.createElement(h.default, null)
                                            ),
                                        a.default.createElement("div", { className: "confirm-approve-content__card-content" }, c),
                                        l
                                    );
                                }
                                renderTransactionDetailsContent() {
                                    const { t: e } = this.context,
                                        { currentCurrency: t, nativeCurrency: n, ethTransactionTotal: r, fiatTransactionTotal: o, hexTransactionTotal: s, txData: i, isMultiLayerFeeNetwork: c, supportsEIP1559V2: l } = this.props;
                                    return !c && l
                                        ? a.default.createElement(T.default, null)
                                        : a.default.createElement(
                                              "div",
                                              { className: "confirm-approve-content__transaction-details-content" },
                                              c
                                                  ? a.default.createElement(
                                                        "div",
                                                        { className: "confirm-approve-content__transaction-details-extra-content" },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "confirm-approve-content__transaction-details-content__labelled-fee" },
                                                            a.default.createElement("span", null, e("transactionDetailLayer2GasHeading")),
                                                            `${r} ${n}`
                                                        ),
                                                        a.default.createElement(g.default, { transaction: i, layer2fee: s, nativeCurrency: n, plainStyle: !0 })
                                                    )
                                                  : a.default.createElement(
                                                        a.default.Fragment,
                                                        null,
                                                        a.default.createElement("div", { className: "confirm-approve-content__small-text" }, e("feeAssociatedRequest")),
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "confirm-approve-content__transaction-details-content__fee" },
                                                            a.default.createElement("div", { className: "confirm-approve-content__transaction-details-content__primary-fee" }, (0, u.formatCurrency)(o, t)),
                                                            a.default.createElement("div", { className: "confirm-approve-content__transaction-details-content__secondary-fee" }, `${r} ${n}`)
                                                        )
                                                    )
                                          );
                                }
                                renderERC721OrERC1155PermissionContent() {
                                    const { t: e } = this.context,
                                        { origin: t, toAddress: n, isContract: r, isSetApproveForAll: o } = this.props,
                                        i = this.getTitleTokenDescription(),
                                        c = r ? `${e("contract")} (${(0, l.addressSummary)(n)})` : (0, l.addressSummary)(n);
                                    return a.default.createElement(
                                        "div",
                                        { className: "flex-column" },
                                        a.default.createElement("div", { className: "confirm-approve-content__small-text" }, e("accessAndSpendNoticeNFT", [t])),
                                        a.default.createElement(
                                            "div",
                                            { className: "flex-row" },
                                            a.default.createElement("div", { className: "confirm-approve-content__label" }, e("approvedAsset"), ":"),
                                            a.default.createElement("div", { className: "confirm-approve-content__medium-text" }, o ? e("allOfYour", [i]) : i)
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "flex-row" },
                                            a.default.createElement("div", { className: "confirm-approve-content__label" }, e("grantedToWithColon")),
                                            a.default.createElement("div", { className: "confirm-approve-content__medium-text" }, c),
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-approve-content__medium-text" },
                                                a.default.createElement(
                                                    m.default,
                                                    {
                                                        type: "link",
                                                        className: "confirm-approve-content__copy-address",
                                                        onClick: () => {
                                                            this.setState({ copied: !0 }), (this.copyTimeout = setTimeout(() => this.setState({ copied: !1 }), 3 * v.SECOND)), (0, s.default)(n);
                                                        },
                                                        title: this.state.copied ? e("copiedExclamation") : e("copyToClipboard"),
                                                    },
                                                    a.default.createElement(_.default, { size: 14, color: "var(--color-icon-default)" })
                                                )
                                            )
                                        )
                                    );
                                }
                                renderERC20PermissionContent() {
                                    const { t: e } = this.context,
                                        { customTokenAmount: t, tokenAmount: n, tokenSymbol: r, origin: o, toAddress: i, isContract: c } = this.props,
                                        u = c ? `${e("contract")} (${(0, l.addressSummary)(i)})` : (0, l.addressSummary)(i);
                                    return a.default.createElement(
                                        "div",
                                        { className: "flex-column" },
                                        a.default.createElement("div", { className: "confirm-approve-content__small-text" }, e("accessAndSpendNotice", [o])),
                                        a.default.createElement(
                                            "div",
                                            { className: "flex-row" },
                                            a.default.createElement("div", { className: "confirm-approve-content__label" }, e("approvedAmountWithColon")),
                                            a.default.createElement("div", { className: "confirm-approve-content__medium-text" }, `${Number(t || n)} ${r}`)
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "flex-row" },
                                            a.default.createElement("div", { className: "confirm-approve-content__label" }, e("grantedToWithColon")),
                                            a.default.createElement("div", { className: "confirm-approve-content__medium-text" }, `${u}`),
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-approve-content__medium-text" },
                                                a.default.createElement(
                                                    m.default,
                                                    {
                                                        type: "link",
                                                        className: "confirm-approve-content__copy-address",
                                                        onClick: () => {
                                                            this.setState({ copied: !0 }), (this.copyTimeout = setTimeout(() => this.setState({ copied: !1 }), 3 * v.SECOND)), (0, s.default)(i);
                                                        },
                                                        title: this.state.copied ? e("copiedExclamation") : e("copyToClipboard"),
                                                    },
                                                    a.default.createElement(_.default, { size: 14, color: "var(--color-icon-default)" })
                                                )
                                            )
                                        )
                                    );
                                }
                                renderDataContent() {
                                    const { t: e } = this.context,
                                        { data: t, isSetApproveForAll: n, isApprovalOrRejection: r } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "flex-column" },
                                        a.default.createElement("div", { className: "confirm-approve-content__small-text" }, e(n ? "functionSetApprovalForAll" : "functionApprove")),
                                        n && r !== undefined ? a.default.createElement("div", { className: "confirm-approve-content__small-text" }, `${e("parameters")}: ${r}`) : null,
                                        a.default.createElement("div", { className: "confirm-approve-content__small-text confirm-approve-content__data__data-block" }, t)
                                    );
                                }
                                renderFullDetails() {
                                    const { t: e } = this.context,
                                        { assetStandard: t, showEditApprovalPermissionModal: n, customTokenAmount: r, tokenAmount: o, decimals: s, origin: i, setCustomAmount: c, tokenSymbol: l, tokenBalance: u } = this.props;
                                    return t === N.ERC20
                                        ? a.default.createElement(
                                              "div",
                                              { className: "confirm-approve-content__full-tx-content" },
                                              a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__permission" },
                                                  this.renderApproveContentCard({
                                                      symbol: a.default.createElement("i", { className: "fa fa-user-check" }),
                                                      title: e("permissionRequest"),
                                                      content: this.renderERC20PermissionContent(),
                                                      showEdit: !0,
                                                      onEditClick: () => n({ customTokenAmount: r, decimals: s, origin: i, setCustomAmount: c, tokenAmount: o, tokenSymbol: l, tokenBalance: u }),
                                                  })
                                              ),
                                              a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__data" },
                                                  this.renderApproveContentCard({ symbol: a.default.createElement("i", { className: "fa fa-file" }), title: "Data", content: this.renderDataContent(), noBorder: !0 })
                                              )
                                          )
                                        : t === N.ERC721 || t === N.ERC1155
                                        ? a.default.createElement(
                                              "div",
                                              { className: "confirm-approve-content__full-tx-content" },
                                              a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__permission" },
                                                  this.renderApproveContentCard({
                                                      symbol: a.default.createElement("i", { className: "fas fa-user-check" }),
                                                      title: e("permissionRequest"),
                                                      content: this.renderERC721OrERC1155PermissionContent(),
                                                      showEdit: !1,
                                                  })
                                              ),
                                              a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__data" },
                                                  this.renderApproveContentCard({ symbol: a.default.createElement("i", { className: "fa fa-file" }), title: e("data"), content: this.renderDataContent(), noBorder: !0 })
                                              )
                                          )
                                        : null;
                                }
                                renderCustomNonceContent() {
                                    const { t: e } = this.context,
                                        { useNonceField: t, customNonceValue: n, updateCustomNonce: r, getNextNonce: o, nextNonce: s, showCustomizeNonceModal: i } = this.props;
                                    return a.default.createElement(
                                        a.default.Fragment,
                                        null,
                                        t &&
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-approve-content__custom-nonce-content" },
                                                a.default.createElement(
                                                    f.default,
                                                    { className: "confirm-approve-content__custom-nonce-header", justifyContent: y.JUSTIFY_CONTENT.FLEX_START },
                                                    a.default.createElement(p.default, { variant: y.TYPOGRAPHY.H6, fontWeight: y.FONT_WEIGHT.NORMAL }, e("nonce")),
                                                    a.default.createElement(
                                                        m.default,
                                                        { type: "link", className: "confirm-approve-content__custom-nonce-edit", onClick: () => i({ nextNonce: s, customNonceValue: n, updateCustomNonce: r, getNextNonce: o }) },
                                                        e("edit")
                                                    )
                                                ),
                                                a.default.createElement(p.default, { className: "confirm-approve-content__custom-nonce-value", variant: y.TYPOGRAPHY.H6, fontWeight: y.FONT_WEIGHT.BOLD }, n || s)
                                            )
                                    );
                                }
                                getTitleTokenDescription() {
                                    const { tokenId: e, assetName: t, tokenAddress: n, rpcPrefs: r, chainId: o, assetStandard: c, tokenSymbol: l, isSetApproveForAll: u, userAddress: d } = this.props,
                                        { t: p } = this.context,
                                        f = (null == r ? void 0 : r.blockExplorerUrl) || [...w.TEST_CHAINS, w.CHAIN_IDS.MAINNET].includes(o);
                                    let m = p("token");
                                    const h = e ? ` (#${e})` : "";
                                    if (c === N.ERC20 || (l && !e && !u)) m = l;
                                    else if ((c === N.ERC721 || c === N.ERC1155 || (t && e) || (l && e)) && ((m = t || l ? `${null != t ? t : l}` : p("nft")), f)) {
                                        var E;
                                        const e = (0, i.getTokenTrackerLink)(n, o, null, d, { blockExplorerUrl: null !== (E = null == r ? void 0 : r.blockExplorerUrl) && void 0 !== E ? E : null });
                                        return a.default.createElement(
                                            a.default.Fragment,
                                            null,
                                            a.default.createElement("a", { href: e, target: "_blank", rel: "noopener noreferrer", title: n, className: "confirm-approve-content__approval-asset-link" }, m),
                                            h && a.default.createElement("span", null, h)
                                        );
                                    }
                                    return a.default.createElement(
                                        a.default.Fragment,
                                        null,
                                        a.default.createElement(
                                            "span",
                                            {
                                                className: "confirm-approve-content__approval-asset-title",
                                                onClick: () => {
                                                    (0, s.default)(n);
                                                },
                                                title: n,
                                            },
                                            m
                                        ),
                                        h && a.default.createElement("span", null, h)
                                    );
                                }
                                renderTitle() {
                                    const { t: e } = this.context,
                                        { isSetApproveForAll: t, isApprovalOrRejection: n } = this.props,
                                        a = this.getTitleTokenDescription();
                                    let r;
                                    return t && ((r = e("approveAllTokensTitle", [a])), !1 === n && (r = e("revokeAllTokensTitle", [a]))), r || e("allowSpendToken", [a]);
                                }
                                renderDescription() {
                                    const { t: e } = this.context,
                                        { isContract: t, isSetApproveForAll: n, isApprovalOrRejection: a } = this.props,
                                        r = t ? e("contract").toLowerCase() : e("account").toLowerCase();
                                    let o = e("trustSiteApprovePermission", [r]);
                                    return n && !1 === a && (o = e("revokeApproveForAllDescription", [r, this.getTitleTokenDescription()])), o;
                                }
                                render() {
                                    var e;
                                    const { t: t } = this.context,
                                        {
                                            decimals: n,
                                            siteImage: r,
                                            tokenAmount: l,
                                            customTokenAmount: u,
                                            origin: h,
                                            tokenSymbol: g,
                                            showCustomizeGasModal: T,
                                            showEditApprovalPermissionModal: w,
                                            setCustomAmount: O,
                                            tokenBalance: P,
                                            useNonceField: A,
                                            warning: S,
                                            txData: C,
                                            fromAddressIsLedger: R,
                                            toAddress: x,
                                            chainId: I,
                                            rpcPrefs: M,
                                            isContract: D,
                                            assetStandard: j,
                                            userAddress: L,
                                        } = this.props,
                                        { showFullTxDetails: W } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: (0, o.default)("confirm-approve-content", { "confirm-approve-content--full": W }) },
                                        S && a.default.createElement("div", { className: "confirm-approve-content__custom-nonce-warning" }, a.default.createElement(b.ConfirmPageContainerWarning, { warning: S })),
                                        a.default.createElement(
                                            f.default,
                                            { display: y.DISPLAY.FLEX, className: "confirm-approve-content__icon-display-content" },
                                            a.default.createElement(
                                                f.default,
                                                { display: y.DISPLAY.FLEX },
                                                a.default.createElement(c.default, { className: "confirm-approve-content__siteimage-identicon", fallbackClassName: "confirm-approve-content__siteimage-identicon", name: h, url: r }),
                                                a.default.createElement(p.default, { variant: y.TYPOGRAPHY.H6, fontWeight: y.FONT_WEIGHT.NORMAL, color: y.COLORS.TEXT_ALTERNATIVE, boxProps: { marginLeft: 1, marginTop: 2 } }, h)
                                            )
                                        ),
                                        a.default.createElement("div", { className: "confirm-approve-content__title", "data-testid": "confirm-approve-title" }, this.renderTitle()),
                                        a.default.createElement("div", { className: "confirm-approve-content__description" }, this.renderDescription()),
                                        a.default.createElement(
                                            f.default,
                                            { className: "confirm-approve-content__address-display-content" },
                                            a.default.createElement(
                                                f.default,
                                                { display: y.DISPLAY.FLEX },
                                                a.default.createElement(E.default, { className: "confirm-approve-content__address-identicon", diameter: 20, address: x }),
                                                a.default.createElement(p.default, { variant: y.TYPOGRAPHY.H6, fontWeight: y.FONT_WEIGHT.NORMAL, color: y.COLORS.TEXT_ALTERNATIVE, boxProps: { marginBottom: 0 } }, (0, d.ellipsify)(x)),
                                                a.default.createElement(
                                                    m.default,
                                                    {
                                                        type: "link",
                                                        className: "confirm-approve-content__copy-address",
                                                        onClick: () => {
                                                            this.setState({ copied: !0 }), (this.copyTimeout = setTimeout(() => this.setState({ copied: !1 }), 3 * v.SECOND)), (0, s.default)(x);
                                                        },
                                                        title: this.state.copied ? t("copiedExclamation") : t("copyToClipboard"),
                                                    },
                                                    a.default.createElement(_.default, { size: 9, color: "var(--color-icon-default)" })
                                                ),
                                                a.default.createElement(
                                                    m.default,
                                                    {
                                                        type: "link",
                                                        className: "confirm-approve-content__etherscan-link",
                                                        onClick: () => {
                                                            var e, t;
                                                            const n = D
                                                                ? (0, i.getTokenTrackerLink)(x, I, null, L, { blockExplorerUrl: null !== (e = null == M ? void 0 : M.blockExplorerUrl) && void 0 !== e ? e : null })
                                                                : (0, i.getAccountLink)(x, I, { blockExplorerUrl: null !== (t = null == M ? void 0 : M.blockExplorerUrl) && void 0 !== t ? t : null }, null);
                                                            global.platform.openTab({ url: n });
                                                        },
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: t("etherscanView"),
                                                    },
                                                    a.default.createElement("i", { className: "fa fa-share-square fa-sm", style: { color: "var(--color-icon-default)", fontSize: 11 }, title: t("etherscanView") })
                                                )
                                            )
                                        ),
                                        j === N.ERC20
                                            ? a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__edit-submission-button-container" },
                                                  a.default.createElement(
                                                      "div",
                                                      {
                                                          className: "confirm-approve-content__medium-link-text cursor-pointer",
                                                          onClick: () => w({ customTokenAmount: u, decimals: n, origin: h, setCustomAmount: O, tokenAmount: l, tokenSymbol: g, tokenBalance: P }),
                                                      },
                                                      t("editPermission")
                                                  )
                                              )
                                            : null,
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-approve-content__card-wrapper" },
                                            this.renderApproveContentCard({
                                                symbol: a.default.createElement("i", { className: "fa fa-tag" }),
                                                title: t("transactionFee"),
                                                showEdit: !0,
                                                showAdvanceGasFeeOptions: !0,
                                                onEditClick: T,
                                                content: this.renderTransactionDetailsContent(),
                                                noBorder: A || !W,
                                                footer:
                                                    !A &&
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "confirm-approve-content__view-full-tx-button-wrapper", onClick: () => this.setState({ showFullTxDetails: !this.state.showFullTxDetails }) },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "confirm-approve-content__view-full-tx-button cursor-pointer" },
                                                            a.default.createElement(
                                                                "div",
                                                                { className: "confirm-approve-content__small-blue-text" },
                                                                this.state.showFullTxDetails ? t("hideFullTransactionDetails") : t("viewFullTransactionDetails")
                                                            ),
                                                            a.default.createElement("i", { className: (0, o.default)({ "fa fa-caret-up": W, "fa fa-caret-down": !W }) })
                                                        )
                                                    ),
                                            }),
                                            A &&
                                                this.renderApproveContentCard({
                                                    showHeader: !1,
                                                    content: this.renderCustomNonceContent(),
                                                    useNonceField: A,
                                                    noBorder: !W,
                                                    footer: a.default.createElement(
                                                        "div",
                                                        { className: "confirm-approve-content__view-full-tx-button-wrapper", onClick: () => this.setState({ showFullTxDetails: !this.state.showFullTxDetails }) },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "confirm-approve-content__view-full-tx-button cursor-pointer" },
                                                            a.default.createElement(
                                                                "div",
                                                                { className: "confirm-approve-content__small-blue-text" },
                                                                this.state.showFullTxDetails ? t("hideFullTransactionDetails") : t("viewFullTransactionDetails")
                                                            ),
                                                            a.default.createElement("i", { className: (0, o.default)({ "fa fa-caret-up": W, "fa fa-caret-down": !W }) })
                                                        )
                                                    ),
                                                })
                                        ),
                                        R
                                            ? a.default.createElement(
                                                  "div",
                                                  { className: "confirm-approve-content__ledger-instruction-wrapper" },
                                                  a.default.createElement(k.default, { showDataInstruction: Boolean(null === (e = C.txParams) || void 0 === e ? void 0 : e.data) })
                                              )
                                            : null,
                                        W ? this.renderFullDetails() : null
                                    );
                                }
                            }
                            (n.default = S),
                                A(S, "contextTypes", { t: r.default.func }),
                                A(S, "propTypes", {
                                    decimals: r.default.number,
                                    tokenAmount: r.default.string,
                                    customTokenAmount: r.default.string,
                                    tokenSymbol: r.default.string,
                                    siteImage: r.default.string,
                                    showCustomizeGasModal: r.default.func,
                                    showEditApprovalPermissionModal: r.default.func,
                                    origin: r.default.string,
                                    setCustomAmount: r.default.func,
                                    tokenBalance: r.default.string,
                                    data: r.default.string,
                                    toAddress: r.default.string,
                                    currentCurrency: r.default.string,
                                    nativeCurrency: r.default.string,
                                    fiatTransactionTotal: r.default.string,
                                    ethTransactionTotal: r.default.string,
                                    useNonceField: r.default.bool,
                                    customNonceValue: r.default.string,
                                    updateCustomNonce: r.default.func,
                                    getNextNonce: r.default.func,
                                    nextNonce: r.default.number,
                                    showCustomizeNonceModal: r.default.func,
                                    warning: r.default.string,
                                    txData: r.default.object,
                                    fromAddressIsLedger: r.default.bool,
                                    chainId: r.default.string,
                                    tokenAddress: r.default.string,
                                    rpcPrefs: r.default.object,
                                    isContract: r.default.bool,
                                    hexTransactionTotal: r.default.string,
                                    isMultiLayerFeeNetwork: r.default.bool,
                                    supportsEIP1559V2: r.default.bool,
                                    assetName: r.default.string,
                                    tokenId: r.default.string,
                                    assetStandard: r.default.string,
                                    isSetApproveForAll: r.default.bool,
                                    isApprovalOrRejection: r.default.bool,
                                    userAddress: r.default.string,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5988,
            { "./confirm-approve-content.component": 5987 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-approve-content.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5989,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/contract-utils": 5350,
                "../../../shared/modules/transaction.utils": 5363,
                "../../components/app/advanced-gas-fee-popover": 5390,
                "../../components/app/edit-gas-fee-popover": 5487,
                "../../components/app/edit-gas-popover/edit-gas-popover.component": 5493,
                "../../components/ui/loading-screen": 5796,
                "../../contexts/gasFee": 5876,
                "../../contexts/transaction-modal": 5879,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/utils/token-util": 5934,
                "../../hooks/useApproveTransaction": 5948,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "../confirm-transaction-base": 6014,
                "../token-allowance/token-allowance": 6291,
                "./confirm-approve-content": 5988,
                "./confirm-approve.util": 5990,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = P);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = O(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = w(e("prop-types")),
                                o = e("react-redux"),
                                s = w(e("../confirm-transaction-base")),
                                i = e("../../../shared/constants/gas"),
                                c = e("../../store/actions"),
                                l = e("../../helpers/utils/token-util"),
                                u = e("../../../shared/modules/contract-utils"),
                                d = e("../../contexts/gasFee"),
                                p = e("../../contexts/transaction-modal"),
                                f = e("../../ducks/metamask/metamask"),
                                m = e("../../selectors"),
                                h = e("../../hooks/useApproveTransaction"),
                                E = w(e("../../components/app/advanced-gas-fee-popover")),
                                g = w(e("../../components/app/edit-gas-fee-popover")),
                                _ = w(e("../../components/app/edit-gas-popover/edit-gas-popover.component")),
                                y = w(e("../../components/ui/loading-screen")),
                                v = e("../../../shared/modules/transaction.utils"),
                                b = e("../../../shared/constants/transaction"),
                                T = e("../../../shared/lib/transactions-controller-utils"),
                                k = (w(e("../token-allowance/token-allowance")), e("./confirm-approve.util")),
                                N = w(e("./confirm-approve-content"));
                            function w(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function O(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (O = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function P({
                                assetStandard: e,
                                assetName: t,
                                userBalance: n,
                                tokenSymbol: r,
                                decimals: w,
                                tokenImage: O,
                                tokenAmount: P,
                                tokenId: A,
                                userAddress: S,
                                toAddress: C,
                                tokenAddress: R,
                                transaction: x,
                                ethTransactionTotal: I,
                                fiatTransactionTotal: M,
                                hexTransactionTotal: D,
                                isSetApproveForAll: j,
                            }) {
                                const L = (0, o.useDispatch)(),
                                    { txParams: { data: W } = {} } = x,
                                    F = (0, o.useSelector)(m.getCurrentCurrency),
                                    U = (0, o.useSelector)(f.getNativeCurrency),
                                    $ = (0, o.useSelector)(m.getSubjectMetadata),
                                    G = (0, o.useSelector)(m.getUseNonceField),
                                    H = (0, o.useSelector)(m.getNextSuggestedNonce),
                                    B = (0, o.useSelector)(m.getCustomNonceValue),
                                    q = (0, o.useSelector)(m.getCurrentChainId),
                                    V = (0, o.useSelector)(m.getRpcPrefsForCurrentProvider),
                                    Y = (0, o.useSelector)(m.getIsMultiLayerFeeNetwork),
                                    K = (0, o.useSelector)(m.checkNetworkAndAccountSupports1559),
                                    z = (0, o.useSelector)(((Z = S), (e) => (0, f.isAddressLedger)(e, Z)));
                                var Z;
                                const [X, Q] = (0, a.useState)(""),
                                    [J, ee] = (0, a.useState)(""),
                                    [te, ne] = (0, a.useState)(!1),
                                    ae = (0, o.useSelector)(m.getEIP1559V2Enabled) && K,
                                    re = (0, a.useRef)(P),
                                    { approveTransaction: oe, showCustomizeGasPopover: se, closeCustomizeGasPopover: ie } = (0, h.useApproveTransaction)();
                                (0, a.useEffect)(() => {
                                    X && re.current !== P && Q(P), (re.current = P);
                                }, [X, P]);
                                const ce = (0, a.useRef)(H),
                                    le = (0, a.useRef)(B);
                                (0, a.useEffect)(() => {
                                    (ce.current === H && le.current === B) || ee(null !== H && B > H ? `Nonce is higher than suggested nonce of ${H}` : ""), (le.current = B), (ce.current = H);
                                }, [B, H]);
                                const ue = (0, a.useCallback)(async () => {
                                    const { isContractAddress: e } = await (0, u.readAddressAsContract)(global.eth, C);
                                    ne(e);
                                }, [ne, C]);
                                (0, a.useEffect)(() => {
                                    ue();
                                }, [ue]);
                                const { origin: de } = x,
                                    pe = de || "",
                                    { iconUrl: fe = "" } = $[de] || {};
                                let me;
                                e === b.ERC20 ? (me = `${Number(P)} ${r}`) : (e !== b.ERC721 && e !== b.ERC1155) || (me = t);
                                const he = n ? (0, T.calcTokenAmount)(n, w).toString(10) : "",
                                    Ee = X ? (0, k.getCustomTxParamsData)(W, { customPermissionAmount: X, decimals: w }) : null,
                                    ge = (0, v.parseStandardTokenTransactionData)(W),
                                    _e = (0, l.getTokenApprovedParam)(ge);
                                return r === undefined && t === undefined
                                    ? a.default.createElement(y.default, null)
                                    : a.default.createElement(
                                          d.GasFeeContextProvider,
                                          { transaction: x },
                                          a.default.createElement(s.default, {
                                              toAddress: C,
                                              identiconAddress: C,
                                              showAccountInHeader: !0,
                                              title: me,
                                              customTokenAmount: String(X),
                                              dappProposedTokenAmount: P,
                                              currentTokenBalance: he,
                                              isApprovalOrRejection: _e,
                                              contentComponent: a.default.createElement(
                                                  p.TransactionModalContextProvider,
                                                  null,
                                                  a.default.createElement(N.default, {
                                                      userAddress: S,
                                                      isSetApproveForAll: j,
                                                      isApprovalOrRejection: _e,
                                                      decimals: w,
                                                      siteImage: fe,
                                                      setCustomAmount: Q,
                                                      customTokenAmount: String(X),
                                                      tokenAmount: P,
                                                      origin: pe,
                                                      tokenSymbol: r,
                                                      tokenImage: O,
                                                      tokenBalance: he,
                                                      tokenId: A,
                                                      assetName: t,
                                                      assetStandard: e,
                                                      tokenAddress: R,
                                                      showCustomizeGasModal: oe,
                                                      showEditApprovalPermissionModal: ({ customTokenAmount: t, decimals: n, origin: a, setCustomAmount: r, tokenAmount: o, tokenBalance: s, tokenSymbol: i }) =>
                                                          L(
                                                              (0, c.showModal)({
                                                                  name: "EDIT_APPROVAL_PERMISSION",
                                                                  customTokenAmount: t,
                                                                  decimals: n,
                                                                  origin: a,
                                                                  setCustomAmount: r,
                                                                  tokenAmount: o,
                                                                  tokenBalance: s,
                                                                  tokenSymbol: i,
                                                                  tokenId: A,
                                                                  assetStandard: e,
                                                              })
                                                          ),
                                                      data: Ee || W,
                                                      toAddress: C,
                                                      currentCurrency: F,
                                                      nativeCurrency: U,
                                                      ethTransactionTotal: I,
                                                      fiatTransactionTotal: M,
                                                      hexTransactionTotal: D,
                                                      useNonceField: G,
                                                      nextNonce: H,
                                                      customNonceValue: B,
                                                      updateCustomNonce: (e) => {
                                                          L((0, c.updateCustomNonce)(e));
                                                      },
                                                      getNextNonce: () => L((0, c.getNextNonce)()),
                                                      showCustomizeNonceModal: ({ useNonceField: e, nextNonce: t, customNonceValue: n, updateCustomNonce: a, getNextNonce: r }) =>
                                                          L((0, c.showModal)({ name: "CUSTOMIZE_NONCE", useNonceField: e, nextNonce: t, customNonceValue: n, updateCustomNonce: a, getNextNonce: r })),
                                                      warning: J,
                                                      txData: x,
                                                      fromAddressIsLedger: z,
                                                      chainId: q,
                                                      rpcPrefs: V,
                                                      isContract: te,
                                                      isMultiLayerFeeNetwork: Y,
                                                      supportsEIP1559V2: ae,
                                                  }),
                                                  se && !ae && a.default.createElement(_.default, { onClose: ie, mode: i.EDIT_GAS_MODES.MODIFY_IN_PLACE, transaction: x }),
                                                  ae && a.default.createElement(a.default.Fragment, null, a.default.createElement(g.default, null), a.default.createElement(E.default, null))
                                              ),
                                              hideSenderToRecipient: !0,
                                              customTxParamsData: Ee,
                                              assetStandard: e,
                                          })
                                      );
                            }
                            P.propTypes = {
                                assetStandard: r.default.string,
                                assetName: r.default.string,
                                tokenAddress: r.default.string,
                                userBalance: r.default.string,
                                tokenSymbol: r.default.string,
                                decimals: r.default.string,
                                tokenImage: r.default.string,
                                tokenAmount: r.default.string,
                                tokenId: r.default.string,
                                userAddress: r.default.string,
                                toAddress: r.default.string,
                                transaction: r.default.shape({ origin: r.default.string, txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string }) }),
                                ethTransactionTotal: r.default.string,
                                fiatTransactionTotal: r.default.string,
                                hexTransactionTotal: r.default.string,
                                isSetApproveForAll: r.default.bool,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            599,
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
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = a(e("react")),
                                c = (r(e("prop-types")), r(e("clsx"))),
                                l = r(e("../styles/withStyles")),
                                u = { root: { display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end", flex: "0 0 auto" }, spacing: { "& > :not(:first-child)": { marginLeft: 8 } } };
                            n.styles = u;
                            var d = i.forwardRef(function (e, t) {
                                    var n = e.disableSpacing,
                                        a = void 0 !== n && n,
                                        r = e.classes,
                                        l = e.className,
                                        u = (0, s.default)(e, ["disableSpacing", "classes", "className"]);
                                    return i.createElement("div", (0, o.default)({ className: (0, c.default)(r.root, l, !a && r.spacing), ref: t }, u));
                                }),
                                p = (0, l.default)(u, { name: "MuiDialogActions" })(d);
                            n.default = p;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            5990,
            {
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/swaps-utils": 5345,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/transaction.utils": 5363,
                "../../helpers/utils/token-util": 5934,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.getCustomTxParamsData = function (e, { customPermissionAmount: t, decimals: n }) {
                                    const c = (0, s.parseStandardTokenTransactionData)(e);
                                    if (!c) throw new Error("Invalid data");
                                    if (c.name !== o.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE) throw new Error(`Invalid data; should be 'approve' method, but instead is '${c.name}'`);
                                    let l = (0, i.getTokenAddressParam)(c);
                                    l.startsWith("0x") && (l = l.substring(2));
                                    const [u, d] = e.split(l);
                                    if (!u || !d) throw new Error("Invalid data");
                                    if (64 !== d.length) throw new Error("Invalid token value; should be exactly 64 hex digits long (u256)");
                                    let p = (0, r.decimalToHex)((0, a.calcTokenValue)(t, n));
                                    if (p.length > 64) throw new Error("Custom value is larger than u256");
                                    p = p.padStart(d.length, "0");
                                    return `${u}${l}${p}`;
                                });
                            var a = e("../../../shared/lib/swaps-utils"),
                                r = e("../../../shared/lib/transactions-controller-utils"),
                                o = e("../../../shared/constants/transaction"),
                                s = e("../../../shared/modules/transaction.utils"),
                                i = e("../../helpers/utils/token-util");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5991,
            { "./confirm-approve": 5989 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-approve")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5992,
            {
                "../../../shared/constants/transaction": 5340,
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/send": 5894,
                "../../helpers/constants/routes": 5904,
                "../confirm-transaction-base": 6014,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, r.useDispatch)(),
                                        t = (0, o.useHistory)(),
                                        n = (n) => {
                                            (async ({ txData: t }) => {
                                                const { id: n } = t;
                                                await e((0, c.editExistingTransaction)(u.ASSET_TYPES.NATIVE, n.toString())), e((0, l.clearConfirmTransaction)());
                                            })(n).then(() => {
                                                t.push(i.SEND_ROUTE);
                                            });
                                        };
                                    return a.default.createElement(s.default, { actionKey: "confirm", onEdit: (e) => n(e) });
                                });
                            var a = d(e("react")),
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = d(e("../confirm-transaction-base")),
                                i = e("../../helpers/constants/routes"),
                                c = e("../../ducks/send"),
                                l = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                u = e("../../../shared/constants/transaction");
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5993,
            { "./confirm-contract-interaction": 5992 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-contract-interaction")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5994,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/time": 5338,
                "../../../shared/modules/conversion.utils": 5351,
                "../../components/app/account-list-item": 5366,
                "../../components/ui/button": 5711,
                "../../components/ui/icon/copy-icon.component": 5753,
                "../../components/ui/identicon": 5785,
                "../../components/ui/tooltip": 5865,
                classnames: 1772,
                "copy-to-clipboard": 1800,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = E(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = h(e("prop-types")),
                                o = h(e("copy-to-clipboard")),
                                s = h(e("classnames")),
                                i = h(e("../../components/app/account-list-item")),
                                c = h(e("../../components/ui/button")),
                                l = h(e("../../components/ui/identicon")),
                                u = h(e("../../components/ui/tooltip")),
                                d = h(e("../../components/ui/icon/copy-icon.component")),
                                p = e("../../../shared/constants/metametrics"),
                                f = e("../../../shared/constants/time"),
                                m = e("../../../shared/modules/conversion.utils");
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (E = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function g(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class _ extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        g(this, "state", { fromAccount: this.props.fromAccount, copyToClipboardPressed: !1, hasCopied: !1 }),
                                        g(this, "copyMessage", () => {
                                            (0, o.default)(this.state.rawMessage),
                                                this.context.trackEvent({ category: p.EVENT.CATEGORIES.MESSAGES, event: "Copy", properties: { action: "Decrypt Message Copy", legacy_event: !0 } }),
                                                this.setState({ hasCopied: !0 }),
                                                setTimeout(() => this.setState({ hasCopied: !1 }), 3 * f.SECOND);
                                        }),
                                        g(this, "renderHeader", () =>
                                            a.default.createElement(
                                                "div",
                                                { className: "request-decrypt-message__header" },
                                                a.default.createElement("div", { className: "request-decrypt-message__header-background" }),
                                                a.default.createElement("div", { className: "request-decrypt-message__header__text" }, this.context.t("decryptRequest")),
                                                a.default.createElement("div", { className: "request-decrypt-message__header__tip-container" }, a.default.createElement("div", { className: "request-decrypt-message__header__tip" }))
                                            )
                                        ),
                                        g(this, "renderAccount", () => {
                                            const { fromAccount: e } = this.state,
                                                { t: t } = this.context;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-decrypt-message__account" },
                                                a.default.createElement("div", { className: "request-decrypt-message__account-text" }, `${t("account")}:`),
                                                a.default.createElement("div", { className: "request-decrypt-message__account-item" }, a.default.createElement(i.default, { account: e }))
                                            );
                                        }),
                                        g(this, "renderBalance", () => {
                                            const { conversionRate: e, nativeCurrency: t } = this.props,
                                                {
                                                    fromAccount: { balance: n },
                                                } = this.state,
                                                { t: r } = this.context,
                                                o = (0, m.conversionUtil)(n, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", numberOfDecimals: 6, conversionRate: e });
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-decrypt-message__balance" },
                                                a.default.createElement("div", { className: "request-decrypt-message__balance-text" }, `${r("balance")}:`),
                                                a.default.createElement("div", { className: "request-decrypt-message__balance-value" }, `${o} ${t}`)
                                            );
                                        }),
                                        g(this, "renderRequestIcon", () => {
                                            const { requesterAddress: e } = this.props;
                                            return a.default.createElement("div", { className: "request-decrypt-message__request-icon" }, a.default.createElement(l.default, { diameter: 40, address: e }));
                                        }),
                                        g(this, "renderAccountInfo", () => a.default.createElement("div", { className: "request-decrypt-message__account-info" }, this.renderAccount(), this.renderRequestIcon(), this.renderBalance())),
                                        g(this, "renderBody", () => {
                                            const { decryptMessageInline: e, subjectMetadata: t, txData: n } = this.props,
                                                { t: r } = this.context,
                                                o = t[n.msgParams.origin],
                                                i = (null == o ? void 0 : o.name) || n.msgParams.origin,
                                                c = r("decryptMessageNotice", [n.msgParams.origin]),
                                                { hasCopied: l, hasDecrypted: p, hasError: f, rawMessage: m, errorMessage: h, copyToClipboardPressed: E } = this.state;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-decrypt-message__body" },
                                                this.renderAccountInfo(),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "request-decrypt-message__visual" },
                                                    a.default.createElement(
                                                        "section",
                                                        null,
                                                        null != o && o.iconUrl
                                                            ? a.default.createElement("img", { className: "request-decrypt-message__visual-identicon", src: o.iconUrl, alt: "" })
                                                            : a.default.createElement("i", { className: "request-decrypt-message__visual-identicon--default" }, i.charAt(0).toUpperCase()),
                                                        a.default.createElement("div", { className: "request-decrypt-message__notice" }, c)
                                                    )
                                                ),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "request-decrypt-message__message" },
                                                    a.default.createElement("div", { className: "request-decrypt-message__message-text" }, p || f ? m : n.msgParams.data, f ? h : ""),
                                                    a.default.createElement("div", { className: (0, s.default)("request-decrypt-message__message-cover", { "request-decrypt-message__message-lock--pressed": p || f }) }),
                                                    a.default.createElement(
                                                        "div",
                                                        {
                                                            className: (0, s.default)("request-decrypt-message__message-lock", { "request-decrypt-message__message-lock--pressed": p || f }),
                                                            onClick: (t) => {
                                                                e(n, t).then((e) => {
                                                                    e.error ? this.setState({ hasError: !0, errorMessage: this.context.t("decryptInlineError", [e.error]) }) : this.setState({ hasDecrypted: !0, rawMessage: e.rawData });
                                                                });
                                                            },
                                                        },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "request-decrypt-message__message-lock__container" },
                                                            a.default.createElement("i", { className: "fa fa-lock fa-lg request-decrypt-message__message-lock__container__icon" }),
                                                            a.default.createElement("div", { className: "request-decrypt-message__message-lock__container__text" }, r("decryptMetamask"))
                                                        )
                                                    )
                                                ),
                                                p
                                                    ? a.default.createElement(
                                                          "div",
                                                          {
                                                              className: (0, s.default)({ "request-decrypt-message__message-copy": !0, "request-decrypt-message__message-copy--pressed": E }),
                                                              onClick: () => this.copyMessage(),
                                                              onMouseDown: () => this.setState({ copyToClipboardPressed: !0 }),
                                                              onMouseUp: () => this.setState({ copyToClipboardPressed: !1 }),
                                                          },
                                                          a.default.createElement(
                                                              u.default,
                                                              {
                                                                  position: "bottom",
                                                                  title: r(l ? "copiedExclamation" : "copyToClipboard"),
                                                                  wrapperClassName: "request-decrypt-message__message-copy-tooltip",
                                                                  style: { display: "flex", alignItems: "center" },
                                                              },
                                                              a.default.createElement("div", { className: "request-decrypt-message__message-copy-text" }, r("decryptCopy")),
                                                              a.default.createElement(d.default, { size: 17, color: "var(--color-primary-default)" })
                                                          )
                                                      )
                                                    : a.default.createElement("div", null)
                                            );
                                        }),
                                        g(this, "renderFooter", () => {
                                            const { cancelDecryptMessage: e, clearConfirmTransaction: t, decryptMessage: n, history: r, mostRecentOverviewPage: o, txData: s } = this.props,
                                                { trackEvent: i, t: l } = this.context;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-decrypt-message__footer" },
                                                a.default.createElement(
                                                    c.default,
                                                    {
                                                        type: "secondary",
                                                        large: !0,
                                                        className: "request-decrypt-message__footer__cancel-button",
                                                        onClick: async (n) => {
                                                            await e(s, n), i({ category: p.EVENT.CATEGORIES.MESSAGES, event: "Cancel", properties: { action: "Decrypt Message Request", legacy_event: !0 } }), t(), r.push(o);
                                                        },
                                                    },
                                                    l("cancel")
                                                ),
                                                a.default.createElement(
                                                    c.default,
                                                    {
                                                        type: "primary",
                                                        large: !0,
                                                        className: "request-decrypt-message__footer__sign-button",
                                                        onClick: async (e) => {
                                                            await n(s, e), i({ category: p.EVENT.CATEGORIES.MESSAGES, event: "Confirm", properties: { action: "Decrypt Message Request", legacy_event: !0 } }), t(), r.push(o);
                                                        },
                                                    },
                                                    l("decrypt")
                                                )
                                            );
                                        }),
                                        g(this, "render", () => a.default.createElement("div", { className: "request-decrypt-message__container" }, this.renderHeader(), this.renderBody(), this.renderFooter()));
                                }
                            }
                            (n.default = _),
                                g(_, "contextTypes", { t: r.default.func.isRequired, trackEvent: r.default.func.isRequired }),
                                g(_, "propTypes", {
                                    fromAccount: r.default.shape({ address: r.default.string.isRequired, balance: r.default.string, name: r.default.string }).isRequired,
                                    clearConfirmTransaction: r.default.func.isRequired,
                                    cancelDecryptMessage: r.default.func.isRequired,
                                    decryptMessage: r.default.func.isRequired,
                                    decryptMessageInline: r.default.func.isRequired,
                                    conversionRate: r.default.number,
                                    history: r.default.object.isRequired,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    requesterAddress: r.default.string,
                                    txData: r.default.object,
                                    subjectMetadata: r.default.object,
                                    nativeCurrency: r.default.string.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5995,
            {
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/history/history": 5889,
                "../../ducks/metamask/metamask": 5892,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "./confirm-decrypt-message.component": 5994,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("redux"),
                                s = e("react-router-dom"),
                                i = e("../../store/actions"),
                                c = e("../../selectors"),
                                l = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                u = e("../../ducks/history/history"),
                                d = e("../../ducks/metamask/metamask"),
                                p = (a = e("./confirm-decrypt-message.component")) && a.__esModule ? a : { default: a };
                            var f = (0, o.compose)(
                                s.withRouter,
                                (0, r.connect)(
                                    function (e) {
                                        const {
                                                metamask: { subjectMetadata: t = {} },
                                            } = e,
                                            n = (0, c.unconfirmedTransactionsListSelector)(e)[0],
                                            {
                                                msgParams: { from: a },
                                            } = n;
                                        return {
                                            txData: n,
                                            subjectMetadata: t,
                                            fromAccount: (0, c.getTargetAccountWithSendEtherInfo)(e, a),
                                            requester: null,
                                            requesterAddress: null,
                                            conversionRate: (0, c.conversionRateSelector)(e),
                                            mostRecentOverviewPage: (0, u.getMostRecentOverviewPage)(e),
                                            nativeCurrency: (0, d.getNativeCurrency)(e),
                                        };
                                    },
                                    function (e) {
                                        return {
                                            goHome: () => e((0, i.goHome)()),
                                            clearConfirmTransaction: () => e((0, l.clearConfirmTransaction)()),
                                            decryptMessage: (t, n) => {
                                                const a = t.msgParams;
                                                return (a.metamaskId = t.id), n.stopPropagation(n), e((0, i.decryptMsg)(a));
                                            },
                                            cancelDecryptMessage: (t, n) => (n.stopPropagation(n), e((0, i.cancelDecryptMsg)(t))),
                                            decryptMessageInline: (t, n) => {
                                                const a = t.msgParams;
                                                return (a.metamaskId = t.id), n.stopPropagation(n), e((0, i.decryptMsgInline)(a));
                                            },
                                        };
                                    }
                                )
                            )(p.default);
                            n.default = f;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5996,
            { "./confirm-decrypt-message.container": 5995 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-decrypt-message.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5997,
            { "../../../shared/modules/buffer-utils": 5349, "../confirm-transaction-base": 6014, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = i(e("prop-types")),
                                o = i(e("../confirm-transaction-base")),
                                s = e("../../../shared/modules/buffer-utils");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function l(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class u extends a.Component {
                                renderData() {
                                    const { t: e } = this.context,
                                        { txData: { origin: t, txParams: { data: n } = {} } = {} } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "confirm-page-container-content__data" },
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-page-container-content__data-box" },
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-page-container-content__data-field" },
                                                a.default.createElement("div", { className: "confirm-page-container-content__data-field-label" }, `${e("origin")}:`),
                                                a.default.createElement("div", null, t)
                                            ),
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-page-container-content__data-field" },
                                                a.default.createElement("div", { className: "confirm-page-container-content__data-field-label" }, `${e("bytes")}:`),
                                                a.default.createElement("div", null, (0, s.toBuffer)(n).length)
                                            )
                                        ),
                                        a.default.createElement("div", { className: "confirm-page-container-content__data-box-label" }, `${e("hexData")}:`),
                                        a.default.createElement("div", { className: "confirm-page-container-content__data-box" }, n)
                                    );
                                }
                                render() {
                                    return a.default.createElement(o.default, { actionKey: "contractDeployment", dataComponent: this.renderData() });
                                }
                            }
                            (n.default = u), l(u, "contextTypes", { t: r.default.func }), l(u, "propTypes", { txData: r.default.object });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5998,
            { "./confirm-deploy-contract.component": 5997, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = (a = e("./confirm-deploy-contract.component")) && a.__esModule ? a : { default: a };
                            var s = (0, r.connect)((e) => {
                                const { confirmTransaction: { txData: t } = {} } = e;
                                return { txData: t };
                            })(o.default);
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            5999,
            { "./confirm-deploy-contract.container": 5998 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-deploy-contract.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            600,
            { "./DialogActions": 599, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./DialogActions"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6e3,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/modules/conversion.utils": 5351,
                "../../components/app/account-list-item": 5366,
                "../../components/ui/button": 5711,
                "../../components/ui/identicon": 5785,
                "../../components/ui/site-origin": 5843,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = d(e("prop-types")),
                                o = d(e("../../components/app/account-list-item")),
                                s = d(e("../../components/ui/button")),
                                i = d(e("../../components/ui/identicon")),
                                c = e("../../../shared/constants/metametrics"),
                                l = e("../../../shared/modules/conversion.utils"),
                                u = d(e("../../components/ui/site-origin"));
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function f(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class m extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        f(this, "renderHeader", () =>
                                            a.default.createElement(
                                                "div",
                                                { className: "request-encryption-public-key__header" },
                                                a.default.createElement("div", { className: "request-encryption-public-key__header-background" }),
                                                a.default.createElement("div", { className: "request-encryption-public-key__header__text" }, this.context.t("encryptionPublicKeyRequest")),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "request-encryption-public-key__header__tip-container" },
                                                    a.default.createElement("div", { className: "request-encryption-public-key__header__tip" })
                                                )
                                            )
                                        ),
                                        f(this, "renderAccount", () => {
                                            const { fromAccount: e } = this.props,
                                                { t: t } = this.context;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-encryption-public-key__account" },
                                                a.default.createElement("div", { className: "request-encryption-public-key__account-text" }, `${t("account")}:`),
                                                a.default.createElement("div", { className: "request-encryption-public-key__account-item" }, a.default.createElement(o.default, { account: e }))
                                            );
                                        }),
                                        f(this, "renderBalance", () => {
                                            const {
                                                    conversionRate: e,
                                                    nativeCurrency: t,
                                                    fromAccount: { balance: n },
                                                } = this.props,
                                                { t: r } = this.context,
                                                o = (0, l.conversionUtil)(n, { fromNumericBase: "hex", toNumericBase: "dec", fromDenomination: "WEI", numberOfDecimals: 6, conversionRate: e });
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-encryption-public-key__balance" },
                                                a.default.createElement("div", { className: "request-encryption-public-key__balance-text" }, `${r("balance")}:`),
                                                a.default.createElement("div", { className: "request-encryption-public-key__balance-value" }, `${o} ${t}`)
                                            );
                                        }),
                                        f(this, "renderRequestIcon", () => {
                                            const { requesterAddress: e } = this.props;
                                            return a.default.createElement("div", { className: "request-encryption-public-key__request-icon" }, a.default.createElement(i.default, { diameter: 40, address: e }));
                                        }),
                                        f(this, "renderAccountInfo", () => a.default.createElement("div", { className: "request-encryption-public-key__account-info" }, this.renderAccount(), this.renderRequestIcon(), this.renderBalance())),
                                        f(this, "renderBody", () => {
                                            const { subjectMetadata: e, txData: t } = this.props,
                                                { t: n } = this.context,
                                                r = e[t.origin],
                                                o = n("encryptionPublicKeyNotice", [a.default.createElement(u.default, { siteOrigin: t.origin, key: t.origin })]),
                                                s = (null == r ? void 0 : r.hostname) || t.origin;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-encryption-public-key__body" },
                                                this.renderAccountInfo(),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "request-encryption-public-key__visual" },
                                                    a.default.createElement(
                                                        "section",
                                                        null,
                                                        null != r && r.iconUrl
                                                            ? a.default.createElement("img", { className: "request-encryption-public-key__visual-identicon", src: r.iconUrl, alt: "" })
                                                            : a.default.createElement("i", { className: "request-encryption-public-key__visual-identicon--default" }, s.charAt(0).toUpperCase()),
                                                        a.default.createElement("div", { className: "request-encryption-public-key__notice" }, o)
                                                    )
                                                )
                                            );
                                        }),
                                        f(this, "renderFooter", () => {
                                            const { cancelEncryptionPublicKey: e, clearConfirmTransaction: t, encryptionPublicKey: n, history: r, mostRecentOverviewPage: o, txData: i } = this.props,
                                                { t: l, trackEvent: u } = this.context;
                                            return a.default.createElement(
                                                "div",
                                                { className: "request-encryption-public-key__footer" },
                                                a.default.createElement(
                                                    s.default,
                                                    {
                                                        type: "secondary",
                                                        large: !0,
                                                        className: "request-encryption-public-key__footer__cancel-button",
                                                        onClick: async (n) => {
                                                            await e(i, n), u({ category: c.EVENT.CATEGORIES.MESSAGES, event: "Cancel", properties: { action: "Encryption public key Request", legacy_event: !0 } }), t(), r.push(o);
                                                        },
                                                    },
                                                    this.context.t("cancel")
                                                ),
                                                a.default.createElement(
                                                    s.default,
                                                    {
                                                        type: "primary",
                                                        large: !0,
                                                        className: "request-encryption-public-key__footer__sign-button",
                                                        onClick: async (e) => {
                                                            await n(i, e),
                                                                this.context.trackEvent({ category: c.EVENT.CATEGORIES.MESSAGES, event: "Confirm", properties: { action: "Encryption public key Request", legacy_event: !0 } }),
                                                                t(),
                                                                r.push(o);
                                                        },
                                                    },
                                                    l("provide")
                                                )
                                            );
                                        }),
                                        f(this, "render", () => a.default.createElement("div", { className: "request-encryption-public-key__container" }, this.renderHeader(), this.renderBody(), this.renderFooter()));
                                }
                            }
                            (n.default = m),
                                f(m, "contextTypes", { t: r.default.func.isRequired, trackEvent: r.default.func.isRequired }),
                                f(m, "propTypes", {
                                    fromAccount: r.default.shape({ address: r.default.string.isRequired, balance: r.default.string, name: r.default.string }).isRequired,
                                    clearConfirmTransaction: r.default.func.isRequired,
                                    cancelEncryptionPublicKey: r.default.func.isRequired,
                                    encryptionPublicKey: r.default.func.isRequired,
                                    conversionRate: r.default.number,
                                    history: r.default.object.isRequired,
                                    requesterAddress: r.default.string,
                                    txData: r.default.object,
                                    subjectMetadata: r.default.object,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    nativeCurrency: r.default.string.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6001,
            {
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/history/history": 5889,
                "../../ducks/metamask/metamask": 5892,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "./confirm-encryption-public-key.component": 6e3,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("redux"),
                                s = e("react-router-dom"),
                                i = e("../../store/actions"),
                                c = e("../../selectors"),
                                l = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                u = e("../../ducks/history/history"),
                                d = e("../../ducks/metamask/metamask"),
                                p = (a = e("./confirm-encryption-public-key.component")) && a.__esModule ? a : { default: a };
                            var f = (0, o.compose)(
                                s.withRouter,
                                (0, r.connect)(
                                    function (e) {
                                        const {
                                                metamask: { subjectMetadata: t = {} },
                                            } = e,
                                            n = (0, c.unconfirmedTransactionsListSelector)(e)[0],
                                            { msgParams: a } = n;
                                        return {
                                            txData: n,
                                            subjectMetadata: t,
                                            fromAccount: (0, c.getTargetAccountWithSendEtherInfo)(e, a),
                                            requester: null,
                                            requesterAddress: null,
                                            conversionRate: (0, c.conversionRateSelector)(e),
                                            mostRecentOverviewPage: (0, u.getMostRecentOverviewPage)(e),
                                            nativeCurrency: (0, d.getNativeCurrency)(e),
                                        };
                                    },
                                    function (e) {
                                        return {
                                            goHome: () => e((0, i.goHome)()),
                                            clearConfirmTransaction: () => e((0, l.clearConfirmTransaction)()),
                                            encryptionPublicKey: (t, n) => {
                                                const a = { data: t.msgParams, metamaskId: t.id };
                                                return n.stopPropagation(), e((0, i.encryptionPublicKeyMsg)(a));
                                            },
                                            cancelEncryptionPublicKey: (t, n) => (n.stopPropagation(), e((0, i.cancelEncryptionPublicKeyMsg)(t))),
                                        };
                                    }
                                )
                            )(p.default);
                            n.default = f;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6002,
            { "./confirm-encryption-public-key.container": 6001 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-encryption-public-key.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6003,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/transaction": 5340,
                "../../components/ui/button": 5711,
                "../../components/ui/identicon": 5785,
                "../../components/ui/token-balance": 5860,
                "../../contexts/i18n": 5877,
                "../../contexts/metametrics": 5878,
                "../../ducks/history/history": 5889,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/routes": 5904,
                "../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = _(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = e("../../helpers/constants/routes"),
                                i = g(e("../../components/ui/button")),
                                c = g(e("../../components/ui/identicon")),
                                l = g(e("../../components/ui/token-balance")),
                                u = e("../../contexts/i18n"),
                                d = e("../../contexts/metametrics"),
                                p = e("../../ducks/history/history"),
                                f = e("../../ducks/metamask/metamask"),
                                m = e("../../store/actions"),
                                h = e("../../../shared/constants/metametrics"),
                                E = e("../../../shared/constants/transaction");
                            function g(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (_ = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            var y = () => {
                                const e = (0, a.useContext)(u.I18nContext),
                                    t = (0, r.useDispatch)(),
                                    n = (0, o.useHistory)(),
                                    g = (0, a.useContext)(d.MetaMetricsContext),
                                    _ = (0, r.useSelector)(p.getMostRecentOverviewPage),
                                    y = (0, r.useSelector)(f.getPendingTokens),
                                    v = (0, a.useCallback)(async () => {
                                        var e;
                                        await t((0, m.addTokens)(y));
                                        const a = Object.values(y),
                                            r = null == a || null === (e = a[0].address) || void 0 === e ? void 0 : e.toLowerCase();
                                        a.forEach((e) => {
                                            g({
                                                event: h.EVENT_NAMES.TOKEN_ADDED,
                                                category: h.EVENT.CATEGORIES.WALLET,
                                                sensitiveProperties: {
                                                    token_symbol: e.symbol,
                                                    token_contract_address: e.address,
                                                    token_decimal_precision: e.decimals,
                                                    unlisted: e.unlisted,
                                                    source: e.isCustom ? h.EVENT.SOURCE.TOKEN.CUSTOM : h.EVENT.SOURCE.TOKEN.LIST,
                                                    token_standard: E.TOKEN_STANDARDS.ERC20,
                                                    asset_type: E.ASSET_TYPES.TOKEN,
                                                },
                                            });
                                        }),
                                            t((0, m.clearPendingTokens)()),
                                            r ? n.push(`${s.ASSET_ROUTE}/${r}`) : n.push(_);
                                    }, [t, n, _, y, g]);
                                return (
                                    (0, a.useEffect)(() => {
                                        0 === Object.keys(y).length && n.push(_);
                                    }, []),
                                    a.default.createElement(
                                        "div",
                                        { className: "page-container" },
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__header" },
                                            a.default.createElement("div", { className: "page-container__title" }, e("importTokensCamelCase")),
                                            a.default.createElement("div", { className: "page-container__subtitle" }, e("likeToImportTokens"))
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__content" },
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-import-token" },
                                                a.default.createElement(
                                                    "div",
                                                    { className: "confirm-import-token__header" },
                                                    a.default.createElement("div", { className: "confirm-import-token__token" }, e("token")),
                                                    a.default.createElement("div", { className: "confirm-import-token__balance" }, e("balance"))
                                                ),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "confirm-import-token__token-list" },
                                                    Object.entries(y).map(([e, t]) => {
                                                        const { name: n, symbol: r } = t;
                                                        return a.default.createElement(
                                                            "div",
                                                            { className: "confirm-import-token__token-list-item", key: e },
                                                            a.default.createElement(
                                                                "div",
                                                                { className: "confirm-import-token__token confirm-import-token__data" },
                                                                a.default.createElement(c.default, { className: "confirm-import-token__token-icon", diameter: 48, address: e }),
                                                                a.default.createElement("div", { className: "confirm-import-token__name" }, ((e, t) => (e === undefined ? t : `${e} (${t})`))(n, r))
                                                            ),
                                                            a.default.createElement("div", { className: "confirm-import-token__balance" }, a.default.createElement(l.default, { token: t }))
                                                        );
                                                    })
                                                )
                                            )
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__footer" },
                                            a.default.createElement(
                                                "footer",
                                                null,
                                                a.default.createElement(
                                                    i.default,
                                                    {
                                                        type: "secondary",
                                                        large: !0,
                                                        className: "page-container__footer-button",
                                                        onClick: () => {
                                                            t((0, m.clearPendingTokens)()), n.push(s.IMPORT_TOKEN_ROUTE);
                                                        },
                                                    },
                                                    e("back")
                                                ),
                                                a.default.createElement(i.default, { type: "primary", large: !0, className: "page-container__footer-button", onClick: v }, e("importTokensCamelCase"))
                                            )
                                        )
                                    )
                                );
                            };
                            n.default = y;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6004,
            { "./confirm-import-token": 6003 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./confirm-import-token")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6005,
            { "../../helpers/constants/routes": 5904, "../confirm-transaction-base": 6014, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = i(e("prop-types")),
                                o = i(e("../confirm-transaction-base")),
                                s = e("../../helpers/constants/routes");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function l(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class u extends a.Component {
                                handleEdit({ txData: e }) {
                                    const { editTransaction: t, history: n } = this.props;
                                    t(e).then(() => {
                                        n.push(s.SEND_ROUTE);
                                    });
                                }
                                shouldHideData() {
                                    const { txParams: e = {} } = this.props;
                                    return !e.data;
                                }
                                render() {
                                    const e = this.shouldHideData();
                                    return a.default.createElement(o.default, { actionKey: "confirm", hideData: e, onEdit: (e) => this.handleEdit(e) });
                                }
                            }
                            (n.default = u), l(u, "contextTypes", { t: r.default.func }), l(u, "propTypes", { editTransaction: r.default.func, history: r.default.object, txParams: r.default.object });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6006,
            {
                "../../../shared/constants/transaction": 5340,
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/send": 5894,
                "./confirm-send-ether.component": 6005,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("redux"),
                                s = e("react-router-dom"),
                                i = e("../../ducks/send"),
                                c = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                l = e("../../../shared/constants/transaction"),
                                u = (a = e("./confirm-send-ether.component")) && a.__esModule ? a : { default: a };
                            var d = (0, o.compose)(
                                s.withRouter,
                                (0, r.connect)(
                                    (e) => {
                                        const {
                                            confirmTransaction: { txData: { txParams: t } = {} },
                                        } = e;
                                        return { txParams: t };
                                    },
                                    (e) => ({
                                        editTransaction: async (t) => {
                                            const { id: n } = t;
                                            await e((0, i.editExistingTransaction)(l.ASSET_TYPES.NATIVE, n.toString())), e((0, c.clearConfirmTransaction)());
                                        },
                                    })
                                )
                            )(u.default);
                            n.default = d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6007,
            { "./confirm-send-ether.container": 6006 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-send-ether.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6008,
            {
                "../../../shared/constants/transaction": 5340,
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/metamask/metamask": 5892,
                "../../ducks/send": 5894,
                "../../helpers/constants/routes": 5904,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "../confirm-token-transaction-base/confirm-token-transaction-base": 6010,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                            var a = h(e("react")),
                                r = h(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = h(e("../confirm-token-transaction-base/confirm-token-transaction-base")),
                                c = e("../../helpers/constants/routes"),
                                l = e("../../ducks/send"),
                                u = e("../../selectors"),
                                d = e("../../ducks/metamask/metamask"),
                                p = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                f = e("../../store/actions"),
                                m = e("../../../shared/constants/transaction");
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E({
                                assetStandard: e,
                                toAddress: t,
                                tokenAddress: n,
                                assetName: r,
                                tokenSymbol: h,
                                tokenAmount: E,
                                tokenId: g,
                                transaction: _,
                                image: y,
                                ethTransactionTotal: v,
                                fiatTransactionTotal: b,
                                hexMaximumTransactionFee: T,
                            }) {
                                const k = (0, o.useDispatch)(),
                                    N = (0, s.useHistory)(),
                                    w = (0, o.useSelector)(d.getConversionRate),
                                    O = (0, o.useSelector)(d.getNativeCurrency),
                                    P = (0, o.useSelector)(u.getCurrentCurrency),
                                    A = (0, o.useSelector)(u.contractExchangeRateSelector);
                                let S, C;
                                return (
                                    e === m.ERC721 ? ((S = r), (C = `#${g}`)) : e === m.ERC20 && (S = `${E} ${h}`),
                                    a.default.createElement(i.default, {
                                        onEdit: (e) => {
                                            (async ({ txData: e }) => {
                                                const { id: t } = e;
                                                await k((0, l.editExistingTransaction)(m.ASSET_TYPES.TOKEN, t.toString())), k((0, p.clearConfirmTransaction)()), k((0, f.showSendTokenPage)());
                                            })(e).then(() => {
                                                N.push(c.SEND_ROUTE);
                                            });
                                        },
                                        conversionRate: w,
                                        currentCurrency: P,
                                        nativeCurrency: O,
                                        contractExchangeRate: A,
                                        title: S,
                                        subtitle: C,
                                        assetStandard: e,
                                        assetName: r,
                                        tokenSymbol: h,
                                        tokenAmount: E,
                                        tokenId: g,
                                        transaction: _,
                                        image: y,
                                        toAddress: t,
                                        tokenAddress: n,
                                        ethTransactionTotal: v,
                                        fiatTransactionTotal: b,
                                        hexMaximumTransactionFee: T,
                                    })
                                );
                            }
                            E.propTypes = {
                                tokenAmount: r.default.string,
                                assetStandard: r.default.string,
                                assetName: r.default.string,
                                tokenSymbol: r.default.string,
                                image: r.default.string,
                                tokenId: r.default.string,
                                toAddress: r.default.string,
                                tokenAddress: r.default.string,
                                transaction: r.default.shape({ origin: r.default.string, txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string }) }),
                                ethTransactionTotal: r.default.string,
                                fiatTransactionTotal: r.default.string,
                                hexMaximumTransactionFee: r.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6009,
            { "./confirm-send-token": 6008 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-send-token")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            601,
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
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = a(e("react")),
                                c = (r(e("prop-types")), r(e("clsx"))),
                                l = r(e("../styles/withStyles")),
                                u = function (e) {
                                    return {
                                        root: { flex: "1 1 auto", WebkitOverflowScrolling: "touch", overflowY: "auto", padding: "8px 24px", "&:first-child": { paddingTop: 20 } },
                                        dividers: { padding: "16px 24px", borderTop: "1px solid ".concat(e.palette.divider), borderBottom: "1px solid ".concat(e.palette.divider) },
                                    };
                                };
                            n.styles = u;
                            var d = i.forwardRef(function (e, t) {
                                    var n = e.classes,
                                        a = e.className,
                                        r = e.dividers,
                                        l = void 0 !== r && r,
                                        u = (0, s.default)(e, ["classes", "className", "dividers"]);
                                    return i.createElement("div", (0, o.default)({ className: (0, c.default)(n.root, a, l && n.dividers), ref: t }, u));
                                }),
                                p = (0, l.default)(u, { name: "MuiDialogContent" })(d);
                            n.default = p;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6010,
            {
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../components/app/user-preferenced-currency-display": 5679,
                "../../contexts/i18n": 5877,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/common": 5898,
                "../../helpers/utils/confirm-tx.util": 5919,
                "../../helpers/utils/conversions.util": 5920,
                "../../selectors": 6300,
                "../confirm-transaction-base": 6014,
                "bignumber.js": 1637,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = y);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = _(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = g(e("prop-types")),
                                o = g(e("bignumber.js")),
                                s = e("react-redux"),
                                i = e("../../contexts/i18n"),
                                c = g(e("../confirm-transaction-base")),
                                l = g(e("../../components/app/user-preferenced-currency-display")),
                                u = e("../../helpers/utils/confirm-tx.util"),
                                d = e("../../helpers/constants/common"),
                                p = e("../../helpers/utils/conversions.util"),
                                f = e("../../selectors"),
                                m = e("../../ducks/metamask/metamask"),
                                h = e("../../../shared/constants/transaction"),
                                E = e("../../../shared/lib/transactions-controller-utils");
                            function g(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (_ = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function y({
                                image: e = "",
                                assetName: t,
                                toAddress: n,
                                tokenAddress: r,
                                tokenAmount: g = "0",
                                tokenSymbol: _,
                                tokenId: y,
                                assetStandard: v,
                                onEdit: b,
                                ethTransactionTotal: T,
                                fiatTransactionTotal: k,
                                hexMaximumTransactionFee: N,
                            }) {
                                const w = (0, a.useContext)(i.I18nContext),
                                    O = (0, s.useSelector)(f.contractExchangeRateSelector),
                                    P = (0, s.useSelector)(m.getNativeCurrency),
                                    A = (0, s.useSelector)(f.getCurrentCurrency),
                                    S = (0, s.useSelector)(m.getConversionRate),
                                    C = Number((0, E.hexWEIToDecETH)(N));
                                let R, x;
                                v === h.ERC721 || v === h.ERC1155 ? ((R = t), (x = `#${y}`)) : v === h.ERC20 && (R = `${g} ${_}`);
                                const I = (0, a.useMemo)(() => {
                                        if ("0" === g || !O) return "0";
                                        const e = new o.default(g).times(new o.default(O ? String(O) : 0)).toFixed();
                                        return (0, p.getWeiHexFromDecimalValue)({ value: e, fromCurrency: d.ETH, fromDenomination: d.ETH });
                                    }, [g, O]),
                                    M = (0, a.useMemo)(() => {
                                        if (void 0 === O) return (0, u.formatCurrency)(k, A);
                                        const e = (0, u.convertTokenToFiat)({ value: g, toCurrency: A, conversionRate: S, contractExchangeRate: O }),
                                            t = (0, u.addFiat)(e, k),
                                            n = (0, u.roundExponential)(t);
                                        return (0, u.formatCurrency)(n, A);
                                    }, [A, S, O, k, g]);
                                return a.default.createElement(c.default, {
                                    toAddress: n,
                                    image: e,
                                    onEdit: b,
                                    tokenAddress: r,
                                    title: R,
                                    subtitleComponent:
                                        O === undefined && x === undefined
                                            ? a.default.createElement("span", null, w("noConversionRateAvailable"))
                                            : x
                                            ? a.default.createElement("span", null, x)
                                            : a.default.createElement(l.default, { value: I, type: d.PRIMARY, showEthLogo: !0, hideLabel: !0 }),
                                    primaryTotalTextOverride: `${R} + ${T} ${P}`,
                                    primaryTotalTextOverrideMaxAmount: `${R} + ${C} ${P}`,
                                    secondaryTotalTextOverride: M,
                                });
                            }
                            y.propTypes = {
                                image: r.default.string,
                                assetName: r.default.string,
                                toAddress: r.default.string,
                                tokenAddress: r.default.string,
                                tokenAmount: r.default.string,
                                tokenSymbol: r.default.string,
                                tokenId: r.default.string,
                                assetStandard: r.default.string,
                                onEdit: r.default.func,
                                ethTransactionTotal: r.default.string,
                                fiatTransactionTotal: r.default.string,
                                hexMaximumTransactionFee: r.default.string,
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6011,
            { "./confirm-token-transaction-base": 6010 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-token-transaction-base")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6012,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/constants/network": 5333,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/metamask-controller-utils": 5343,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/buffer-utils": 5349,
                "../../components/app/confirm-page-container": 5441,
                "../../components/app/gas-details-item": 5498,
                "../../components/app/gas-timing/gas-timing.component": 5499,
                "../../components/app/ledger-instruction-field": 5505,
                "../../components/app/multilayer-fee-message": 5575,
                "../../components/app/transaction-decoding": 5662,
                "../../components/app/transaction-decoding/components/ui/copy-raw-data": 5660,
                "../../components/app/transaction-detail-item/transaction-detail-item.component": 5665,
                "../../components/app/transaction-detail/transaction-detail.component": 5666,
                "../../components/app/user-preferenced-currency-display": 5679,
                "../../components/ui/actionable-message": 5704,
                "../../components/ui/disclosure": 5733,
                "../../components/ui/info-tooltip/info-tooltip": 5788,
                "../../components/ui/loading-heartbeat": 5793,
                "../../components/ui/text-field": 5855,
                "../../components/ui/typography/typography": 5870,
                "../../contexts/transaction-modal": 5879,
                "../../helpers/constants/common": 5898,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/error-keys": 5901,
                "../../helpers/constants/routes": 5904,
                "../../helpers/utils/conversions.util": 5920,
                "../../helpers/utils/metrics": 5928,
                "../../helpers/utils/transactions.util": 5935,
                "../../store/actions": 6307,
                "../send/send.constants": 6175,
                "../send/send.utils": 6177,
                "./transaction-alerts": 6015,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = U(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = F(e("prop-types")),
                                o = F(e("../../components/app/confirm-page-container")),
                                s = F(e("../../components/app/transaction-decoding")),
                                i = e("../send/send.utils"),
                                c = e("../../helpers/utils/conversions.util"),
                                l = e("../../helpers/constants/routes"),
                                u = e("../../helpers/constants/error-keys"),
                                d = F(e("../../components/app/user-preferenced-currency-display")),
                                p = F(e("../../components/app/transaction-decoding/components/ui/copy-raw-data")),
                                f = e("../../helpers/constants/common"),
                                m = F(e("../../components/ui/text-field")),
                                h = F(e("../../components/ui/actionable-message")),
                                E = F(e("../../components/ui/disclosure")),
                                g = e("../../../shared/constants/metametrics"),
                                _ = e("../../../shared/constants/transaction"),
                                y = e("../../helpers/utils/metrics"),
                                v = e("../../helpers/utils/transactions.util"),
                                b = e("../../../shared/modules/buffer-utils"),
                                T = e("../../contexts/transaction-modal"),
                                k = F(e("../../components/app/transaction-detail/transaction-detail.component")),
                                N = F(e("../../components/app/transaction-detail-item/transaction-detail-item.component")),
                                w = F(e("../../components/ui/info-tooltip/info-tooltip")),
                                O = F(e("../../components/ui/loading-heartbeat")),
                                P = F(e("../../components/app/gas-details-item")),
                                A = F(e("../../components/app/gas-timing/gas-timing.component")),
                                S = F(e("../../components/app/ledger-instruction-field")),
                                C = F(e("../../components/app/multilayer-fee-message")),
                                R = F(e("../../components/ui/typography/typography")),
                                x = e("../../helpers/constants/design-system"),
                                I = e("../../store/actions"),
                                M = e("../send/send.constants"),
                                D = e("../../../shared/lib/metamask-controller-utils"),
                                j = e("../../../shared/lib/transactions-controller-utils"),
                                L = e("../../../shared/constants/network"),
                                W = F(e("./transaction-alerts"));
                            function F(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function U(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (U = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function $(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            const G = () => a.default.createElement(O.default, null);
                            class H extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        $(this, "state", { submitting: !1, submitError: null, submitWarning: "", ethGasPriceWarning: "", editingGas: !1, userAcknowledgedGasMissing: !1 }),
                                        $(this, "_beforeUnloadForGasPolling", () => {
                                            (this._isMounted = !1), this.state.pollingToken && ((0, I.disconnectGasFeeEstimatePoller)(this.state.pollingToken), (0, I.removePollingTokenFromAppState)(this.state.pollingToken));
                                        }),
                                        $(this, "_removeBeforeUnload", () => {
                                            window.removeEventListener("beforeunload", this._beforeUnloadForGasPolling);
                                        }),
                                        $(this, "supportsEIP1559V2", this.props.eip1559V2Enabled && this.props.supportsEIP1559 && !(0, v.isLegacyTransaction)(this.props.txData));
                                }
                                componentDidUpdate(e) {
                                    const {
                                            transactionStatus: t,
                                            showTransactionConfirmedModal: n,
                                            history: a,
                                            clearConfirmTransaction: r,
                                            nextNonce: o,
                                            customNonceValue: s,
                                            toAddress: i,
                                            tryReverseResolveAddress: c,
                                            isEthGasPrice: d,
                                            setDefaultHomeActiveTabName: p,
                                        } = this.props,
                                        { customNonceValue: f, nextNonce: m, toAddress: h, transactionStatus: E, isEthGasPrice: g } = e,
                                        y = t !== E,
                                        v = t === _.TRANSACTION_STATUSES.DROPPED || t === _.TRANSACTION_STATUSES.CONFIRMED;
                                    (o === m && s === f) || (null !== o && s > o ? this.setState({ submitWarning: this.context.t("nextNonceWarning", [o]) }) : this.setState({ submitWarning: "" })),
                                        y &&
                                            v &&
                                            n({
                                                onSubmit: () => {
                                                    r(),
                                                        p("Activity").then(() => {
                                                            a.push(l.DEFAULT_ROUTE);
                                                        });
                                                },
                                            }),
                                        i && i !== h && c(i),
                                        d !== g && (d ? this.setState({ ethGasPriceWarning: this.context.t(u.ETH_GAS_PRICE_FETCH_WARNING_KEY) }) : this.setState({ ethGasPriceWarning: "" }));
                                }
                                getErrorKey() {
                                    const { balance: e, conversionRate: t, hexMaximumTransactionFee: n, txData: { txParams: { value: a } = {} } = {}, customGas: r, noGasPrice: o, gasFeeIsCustom: s } = this.props;
                                    return e && !(0, i.isBalanceSufficient)({ amount: a, gasTotal: n || "0x0", balance: e, conversionRate: t })
                                        ? { valid: !1, errorKey: u.INSUFFICIENT_FUNDS_ERROR_KEY }
                                        : (0, D.hexToDecimal)(r.gasLimit) < Number(M.MIN_GAS_LIMIT_DEC)
                                        ? { valid: !1, errorKey: u.GAS_LIMIT_TOO_LOW_ERROR_KEY }
                                        : o && !s
                                        ? { valid: !1, errorKey: u.GAS_PRICE_FETCH_FAILURE_ERROR_KEY }
                                        : { valid: !0 };
                                }
                                handleEditGas() {
                                    const {
                                        actionKey: e,
                                        txData: { origin: t },
                                        methodData: n = {},
                                    } = this.props;
                                    this.context.trackEvent({
                                        category: g.EVENT.CATEGORIES.TRANSACTIONS,
                                        event: 'User clicks "Edit" on gas',
                                        properties: { action: "Confirm Screen", legacy_event: !0, recipientKnown: null, functionType: e || (0, y.getMethodName)(n.name) || _.TRANSACTION_TYPES.CONTRACT_INTERACTION, origin: t },
                                    }),
                                        this.setState({ editingGas: !0 });
                                }
                                handleCloseEditGas() {
                                    this.setState({ editingGas: !1 });
                                }
                                setUserAcknowledgedGasMissing() {
                                    this.setState({ userAcknowledgedGasMissing: !0 });
                                }
                                renderDetails() {
                                    var e, t;
                                    const {
                                            primaryTotalTextOverride: n,
                                            secondaryTotalTextOverride: r,
                                            hexMinimumTransactionFee: o,
                                            hexMaximumTransactionFee: s,
                                            hexTransactionTotal: i,
                                            useNonceField: l,
                                            customNonceValue: u,
                                            updateCustomNonce: p,
                                            nextNonce: E,
                                            getNextNonce: g,
                                            txData: _,
                                            useNativeCurrencyAsPrimaryCurrency: y,
                                            primaryTotalTextOverrideMaxAmount: v,
                                            maxFeePerGas: b,
                                            maxPriorityFeePerGas: T,
                                            isMainnet: I,
                                            showLedgerSteps: M,
                                            supportsEIP1559: D,
                                            isMultiLayerFeeNetwork: F,
                                            nativeCurrency: U,
                                            isBuyableChain: $,
                                        } = this.props,
                                        { t: H } = this.context,
                                        { userAcknowledgedGasMissing: B } = this.state,
                                        { valid: q } = this.getErrorKey(),
                                        V = Boolean(_.simulationFails) && !B,
                                        Y = L.NETWORK_TO_NAME_MAP[_.chainId],
                                        K = l
                                            ? a.default.createElement(
                                                  "div",
                                                  null,
                                                  a.default.createElement(
                                                      "div",
                                                      { className: "confirm-detail-row" },
                                                      a.default.createElement("div", { className: "confirm-detail-row__label" }, H("nonceFieldHeading")),
                                                      a.default.createElement(
                                                          "div",
                                                          { className: "custom-nonce-input" },
                                                          a.default.createElement(m.default, {
                                                              type: "number",
                                                              min: 0,
                                                              placeholder: "number" == typeof E ? E.toString() : null,
                                                              onChange: ({ target: { value: e } }) => {
                                                                  !e.length || Number(e) < 0 ? p("") : p(String(Math.floor(e))), g();
                                                              },
                                                              fullWidth: !0,
                                                              margin: "dense",
                                                              value: u || "",
                                                          })
                                                      )
                                                  )
                                              )
                                            : null;
                                    return a.default.createElement(
                                        "div",
                                        { className: "confirm-page-container-content__details" },
                                        a.default.createElement(W.default, {
                                            setUserAcknowledgedGasMissing: () => this.setUserAcknowledgedGasMissing(),
                                            userAcknowledgedGasMissing: B,
                                            nativeCurrency: U,
                                            networkName: Y,
                                            type: _.type,
                                            isBuyableChain: $,
                                        }),
                                        a.default.createElement(k.default, {
                                            disabled: !B && !q,
                                            userAcknowledgedGasMissing: B,
                                            onEdit: V || F ? null : () => this.handleEditGas(),
                                            rows: [
                                                V &&
                                                    !this.supportsEIP1559V2 &&
                                                    (() =>
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "confirm-page-container-content__error-container" },
                                                            a.default.createElement(h.default, {
                                                                message: H("simulationErrorMessageV2"),
                                                                useIcon: !0,
                                                                iconFillColor: "var(--color-error-default)",
                                                                type: "danger",
                                                                primaryActionV2: !0 === B ? undefined : { label: H("proceedWithTransaction"), onClick: () => this.setUserAcknowledgedGasMissing() },
                                                            })
                                                        ))(),
                                                !V &&
                                                    !F &&
                                                    (() =>
                                                        this.supportsEIP1559V2
                                                            ? a.default.createElement(P.default, { key: "gas_details", userAcknowledgedGasMissing: B })
                                                            : a.default.createElement(N.default, {
                                                                  key: "gas-item",
                                                                  detailTitle: _.dappSuggestedGasFees
                                                                      ? a.default.createElement(
                                                                            a.default.Fragment,
                                                                            null,
                                                                            H("transactionDetailGasHeading"),
                                                                            a.default.createElement(
                                                                                w.default,
                                                                                { contentText: H("transactionDetailDappGasTooltip"), position: "top" },
                                                                                a.default.createElement("i", { className: "fa fa-info-circle" })
                                                                            )
                                                                        )
                                                                      : a.default.createElement(
                                                                            a.default.Fragment,
                                                                            null,
                                                                            H("transactionDetailGasHeading"),
                                                                            a.default.createElement(
                                                                                w.default,
                                                                                {
                                                                                    contentText: a.default.createElement(
                                                                                        a.default.Fragment,
                                                                                        null,
                                                                                        a.default.createElement("p", null, H("transactionDetailGasTooltipIntro", [I ? H("networkNameEthereum") : ""])),
                                                                                        a.default.createElement("p", null, H("transactionDetailGasTooltipExplanation")),
                                                                                        a.default.createElement(
                                                                                            "p",
                                                                                            null,
                                                                                            a.default.createElement(
                                                                                                "a",
                                                                                                { href: "https://community.metamask.io/t/what-is-gas-why-do-transactions-take-so-long/3172", target: "_blank", rel: "noopener noreferrer" },
                                                                                                H("transactionDetailGasTooltipConversion")
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                    position: "top",
                                                                                },
                                                                                a.default.createElement("i", { className: "fa fa-info-circle" })
                                                                            )
                                                                        ),
                                                                  detailText: a.default.createElement(
                                                                      "div",
                                                                      { className: "confirm-page-container-content__currency-container test" },
                                                                      G(),
                                                                      a.default.createElement(d.default, { type: f.SECONDARY, value: o, hideLabel: Boolean(y) })
                                                                  ),
                                                                  detailTotal: a.default.createElement(
                                                                      "div",
                                                                      { className: "confirm-page-container-content__currency-container" },
                                                                      G(),
                                                                      a.default.createElement(d.default, { type: f.PRIMARY, value: o, hideLabel: !y, numberOfDecimals: 6 })
                                                                  ),
                                                                  subText: a.default.createElement(
                                                                      a.default.Fragment,
                                                                      null,
                                                                      a.default.createElement("strong", { key: "editGasSubTextFeeLabel" }, H("editGasSubTextFeeLabel")),
                                                                      a.default.createElement(
                                                                          "div",
                                                                          { key: "editGasSubTextFeeValue", className: "confirm-page-container-content__currency-container" },
                                                                          G(),
                                                                          a.default.createElement(d.default, { key: "editGasSubTextFeeAmount", type: f.PRIMARY, value: s, hideLabel: !y })
                                                                      )
                                                                  ),
                                                                  subTitle: a.default.createElement(
                                                                      a.default.Fragment,
                                                                      null,
                                                                      _.dappSuggestedGasFees
                                                                          ? a.default.createElement(
                                                                                R.default,
                                                                                { variant: x.TYPOGRAPHY.H7, fontStyle: x.FONT_STYLE.ITALIC, color: x.COLORS.TEXT_ALTERNATIVE },
                                                                                H("transactionDetailDappGasMoreInfo")
                                                                            )
                                                                          : "",
                                                                      D &&
                                                                          a.default.createElement(A.default, {
                                                                              maxPriorityFeePerGas: (0, j.hexWEIToDecGWEI)(T || _.txParams.maxPriorityFeePerGas).toString(),
                                                                              maxFeePerGas: (0, j.hexWEIToDecGWEI)(b || _.txParams.maxFeePerGas).toString(),
                                                                          })
                                                                  ),
                                                              }))(),
                                                !V && F && a.default.createElement(C.default, { transaction: _, layer2fee: o, nativeCurrency: U }),
                                                !F &&
                                                    a.default.createElement(N.default, {
                                                        key: "total-item",
                                                        detailTitle: H("total"),
                                                        detailText: (() => {
                                                            var e;
                                                            return n === undefined && r === undefined
                                                                ? a.default.createElement(
                                                                      "div",
                                                                      { className: "confirm-page-container-content__total-value" },
                                                                      a.default.createElement(O.default, { estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel }),
                                                                      a.default.createElement(d.default, { type: f.SECONDARY, key: "total-detail-text", value: i, hideLabel: Boolean(y) })
                                                                  )
                                                                : y
                                                                ? r
                                                                : n;
                                                        })(),
                                                        detailTotal: (() => {
                                                            var e;
                                                            return n === undefined && r === undefined
                                                                ? a.default.createElement(
                                                                      "div",
                                                                      { className: "confirm-page-container-content__total-value" },
                                                                      a.default.createElement(O.default, { estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel }),
                                                                      a.default.createElement(d.default, { type: f.PRIMARY, key: "total-detail-value", value: i, hideLabel: !y })
                                                                  )
                                                                : y
                                                                ? n
                                                                : r;
                                                        })(),
                                                        subTitle: H("transactionDetailGasTotalSubtitle"),
                                                        subText: a.default.createElement(
                                                            "div",
                                                            { className: "confirm-page-container-content__total-amount" },
                                                            a.default.createElement(O.default, { estimateUsed: null === (e = this.props.txData) || void 0 === e ? void 0 : e.userFeeLevel }),
                                                            a.default.createElement("strong", { key: "editGasSubTextAmountLabel" }, H("editGasSubTextAmountLabel")),
                                                            " ",
                                                            v === undefined && r === undefined
                                                                ? a.default.createElement(d.default, { type: f.PRIMARY, key: "total-max-amount", value: (0, c.addHexes)(_.txParams.value, s), hideLabel: !y })
                                                                : y
                                                                ? v
                                                                : r
                                                        ),
                                                    }),
                                            ],
                                        }),
                                        K,
                                        M ? a.default.createElement(S.default, { showDataInstruction: Boolean(null === (t = _.txParams) || void 0 === t ? void 0 : t.data) }) : null
                                    );
                                }
                                renderData(e) {
                                    const { t: t } = this.context,
                                        { txData: { txParams: n } = {}, methodData: { params: r } = {}, hideData: o, dataComponent: i } = this.props;
                                    if (o) return null;
                                    const c = null != r && r.length ? `(${r.map(({ type: e }) => e).join(", ")})` : "";
                                    return (
                                        i ||
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-page-container-content__data" },
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-page-container-content__data-box-label" },
                                                `${t("functionType")}:`,
                                                a.default.createElement("span", { className: "confirm-page-container-content__function-type" }, `${e} ${c}`)
                                            ),
                                            a.default.createElement(E.default, null, a.default.createElement(s.default, { to: null == n ? void 0 : n.to, inputData: null == n ? void 0 : n.data }))
                                        )
                                    );
                                }
                                renderDataHex(e) {
                                    const { t: t } = this.context,
                                        { txData: { txParams: n } = {}, methodData: { params: r } = {}, hideData: o, dataHexComponent: s } = this.props;
                                    if (o || !n.to) return null;
                                    const i = null != r && r.length ? `(${r.map(({ type: e }) => e).join(", ")})` : "";
                                    return (
                                        s ||
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-page-container-content__data" },
                                            a.default.createElement(
                                                "div",
                                                { className: "confirm-page-container-content__data-box-label" },
                                                `${t("functionType")}:`,
                                                a.default.createElement("span", { className: "confirm-page-container-content__function-type" }, `${e} ${i}`)
                                            ),
                                            r &&
                                                a.default.createElement(
                                                    "div",
                                                    { className: "confirm-page-container-content__data-box" },
                                                    a.default.createElement("div", { className: "confirm-page-container-content__data-field-label" }, `${t("parameters")}:`),
                                                    a.default.createElement("div", null, a.default.createElement("pre", null, JSON.stringify(r, null, 2)))
                                                ),
                                            a.default.createElement("div", { className: "confirm-page-container-content__data-box-label" }, `${t("hexData")}: ${(0, b.toBuffer)(null == n ? void 0 : n.data).length} bytes`),
                                            a.default.createElement("div", { className: "confirm-page-container-content__data-box" }, null == n ? void 0 : n.data),
                                            a.default.createElement(p.default, { data: null == n ? void 0 : n.data })
                                        )
                                    );
                                }
                                handleEdit() {
                                    const {
                                        txData: e,
                                        tokenData: t,
                                        tokenProps: n,
                                        onEdit: a,
                                        actionKey: r,
                                        txData: { origin: o },
                                        methodData: s = {},
                                    } = this.props;
                                    this.context.trackEvent({
                                        category: g.EVENT.CATEGORIES.TRANSACTIONS,
                                        event: "Edit Transaction",
                                        properties: { action: "Confirm Screen", legacy_event: !0, recipientKnown: null, functionType: r || (0, y.getMethodName)(s.name) || _.TRANSACTION_TYPES.CONTRACT_INTERACTION, origin: o },
                                    }),
                                        a({ txData: e, tokenData: t, tokenProps: n });
                                }
                                handleCancelAll() {
                                    const { cancelAllTransactions: e, clearConfirmTransaction: t, history: n, mostRecentOverviewPage: a, showRejectTransactionsConfirmationModal: r, unapprovedTxCount: o } = this.props;
                                    r({
                                        unapprovedTxCount: o,
                                        onSubmit: async () => {
                                            this._removeBeforeUnload(), await e(), t(), n.push(a);
                                        },
                                    });
                                }
                                handleCancel() {
                                    const { txData: e, cancelTransaction: t, history: n, mostRecentOverviewPage: a, clearConfirmTransaction: r, updateCustomNonce: o } = this.props;
                                    this._removeBeforeUnload(),
                                        o(""),
                                        t(e).then(() => {
                                            r(), n.push(a);
                                        });
                                }
                                handleSubmit() {
                                    const {
                                            sendTransaction: e,
                                            clearConfirmTransaction: t,
                                            txData: n,
                                            history: a,
                                            mostRecentOverviewPage: r,
                                            updateCustomNonce: o,
                                            maxFeePerGas: s,
                                            customTokenAmount: i,
                                            dappProposedTokenAmount: c,
                                            currentTokenBalance: l,
                                            maxPriorityFeePerGas: u,
                                            baseFeePerGas: d,
                                            methodData: p,
                                        } = this.props,
                                        { submitting: f } = this.state,
                                        { name: m } = p;
                                    f ||
                                        (d && (n.estimatedBaseFee = d),
                                        m && (n.contractMethodName = m),
                                        c && ((n.dappProposedTokenAmount = c), (n.originalApprovalAmount = c)),
                                        i ? ((n.customTokenAmount = i), (n.finalApprovalAmount = i)) : c !== undefined && (n.finalApprovalAmount = c),
                                        l && (n.currentTokenBalance = l),
                                        s && (n.txParams = { ...n.txParams, maxFeePerGas: s }),
                                        u && (n.txParams = { ...n.txParams, maxPriorityFeePerGas: u }),
                                        this.setState({ submitting: !0, submitError: null }, () => {
                                            this._removeBeforeUnload(),
                                                e(n)
                                                    .then(() => {
                                                        t(),
                                                            this.setState({ submitting: !1 }, () => {
                                                                a.push(r), o("");
                                                            });
                                                    })
                                                    .catch((e) => {
                                                        this.setState({ submitting: !1, submitError: e.message }), o("");
                                                    });
                                        }));
                                }
                                renderTitleComponent() {
                                    const { title: e, hexTransactionAmount: t, txData: n } = this.props;
                                    if (e) return null;
                                    const r = n.type === _.TRANSACTION_TYPES.CONTRACT_INTERACTION;
                                    return a.default.createElement(d.default, { value: t, type: f.PRIMARY, showEthLogo: !0, ethLogoHeight: 24, hideLabel: !r, showCurrencySuffix: r });
                                }
                                renderSubtitleComponent() {
                                    const { subtitleComponent: e, hexTransactionAmount: t } = this.props;
                                    return e || a.default.createElement(d.default, { value: t, type: f.SECONDARY, showEthLogo: !0, hideLabel: !0 });
                                }
                                handleNextTx(e) {
                                    const { history: t, clearConfirmTransaction: n } = this.props;
                                    e && (n(), t.push(`${l.CONFIRM_TRANSACTION_ROUTE}/${e}`));
                                }
                                getNavigateTxData() {
                                    const { currentNetworkUnapprovedTxs: e, txData: { id: t } = {} } = this.props,
                                        n = Object.keys(e),
                                        a = n.indexOf(t ? t.toString() : "");
                                    return {
                                        totalTx: n.length,
                                        positionOfCurrentTx: a + 1,
                                        nextTxId: n[a + 1],
                                        prevTxId: n[a - 1],
                                        showNavigation: n.length > 1,
                                        firstTx: n[0],
                                        lastTx: n[n.length - 1],
                                        ofText: this.context.t("ofTextNofM"),
                                        requestsWaitingText: this.context.t("requestsAwaitingAcknowledgement"),
                                    };
                                }
                                componentDidMount() {
                                    this._isMounted = !0;
                                    const { toAddress: e, txData: { origin: t } = {}, getNextNonce: n, tryReverseResolveAddress: a } = this.props,
                                        { trackEvent: r } = this.context;
                                    r({ category: g.EVENT.CATEGORIES.TRANSACTIONS, event: "Confirm: Started", properties: { action: "Confirm Screen", legacy_event: !0, origin: t } }),
                                        n(),
                                        e && a(e),
                                        (0, I.getGasFeeEstimatesAndStartPolling)().then((e) => {
                                            this._isMounted
                                                ? ((0, I.addPollingTokenToAppState)(e), this.setState({ pollingToken: e }))
                                                : ((0, I.disconnectGasFeeEstimatePoller)(e), (0, I.removePollingTokenFromAppState)(this.state.pollingToken));
                                        }),
                                        window.addEventListener("beforeunload", this._beforeUnloadForGasPolling);
                                }
                                componentWillUnmount() {
                                    this._beforeUnloadForGasPolling(), this._removeBeforeUnload();
                                }
                                render() {
                                    const { t: e } = this.context,
                                        {
                                            fromName: t,
                                            fromAddress: n,
                                            toName: r,
                                            toAddress: s,
                                            toEns: i,
                                            toNickname: c,
                                            methodData: l,
                                            title: u,
                                            hideSubtitle: d,
                                            tokenAddress: p,
                                            contentComponent: f,
                                            onEdit: m,
                                            nonce: h,
                                            customNonceValue: E,
                                            unapprovedTxCount: g,
                                            type: b,
                                            hideSenderToRecipient: k,
                                            showAccountInHeader: N,
                                            txData: w,
                                            gasIsLoading: O,
                                            gasFeeIsCustom: P,
                                            nativeCurrency: A,
                                            hardwareWalletRequiresConnection: S,
                                            image: C,
                                            isApprovalOrRejection: R,
                                            assetStandard: x,
                                        } = this.props,
                                        { submitting: I, submitError: M, submitWarning: D, ethGasPriceWarning: j, editingGas: L, userAcknowledgedGasMissing: W } = this.state,
                                        { name: F } = l,
                                        { valid: U, errorKey: $ } = this.getErrorKey(),
                                        G = Boolean(w.simulationFails),
                                        H = G && !W,
                                        { totalTx: B, positionOfCurrentTx: q, nextTxId: V, prevTxId: Y, showNavigation: K, firstTx: z, lastTx: Z, ofText: X, requestsWaitingText: Q } = this.getNavigateTxData(),
                                        J = w.type === _.TRANSACTION_TYPES.CONTRACT_INTERACTION && "metamask" !== w.origin;
                                    let ee;
                                    return (
                                        J && (ee = (0, y.getMethodName)(F)),
                                        ee || (ee = b ? (0, v.getTransactionTypeTitle)(e, b, A) : e("contractInteraction")),
                                        a.default.createElement(
                                            T.TransactionModalContextProvider,
                                            null,
                                            a.default.createElement(o.default, {
                                                fromName: t,
                                                fromAddress: n,
                                                showAccountInHeader: N,
                                                toName: r,
                                                toAddress: s,
                                                toEns: i,
                                                toNickname: c,
                                                showEdit: !J && Boolean(m),
                                                action: ee,
                                                title: u,
                                                image: C,
                                                titleComponent: this.renderTitleComponent(),
                                                subtitleComponent: this.renderSubtitleComponent(),
                                                hideSubtitle: d,
                                                detailsComponent: this.renderDetails(),
                                                dataComponent: this.renderData(ee),
                                                dataHexComponent: this.renderDataHex(ee),
                                                contentComponent: f,
                                                nonce: E || h,
                                                unapprovedTxCount: g,
                                                tokenAddress: p,
                                                errorMessage: M,
                                                errorKey: $,
                                                hasSimulationError: G,
                                                warning: D,
                                                totalTx: B,
                                                positionOfCurrentTx: q,
                                                nextTxId: V,
                                                prevTxId: Y,
                                                showNavigation: K,
                                                onNextTx: (e) => this.handleNextTx(e),
                                                firstTx: z,
                                                lastTx: Z,
                                                ofText: X,
                                                requestsWaitingText: Q,
                                                disabled: H || !U || I || S || (O && !P),
                                                onEdit: () => this.handleEdit(),
                                                onCancelAll: () => this.handleCancelAll(),
                                                onCancel: () => this.handleCancel(),
                                                onSubmit: () => this.handleSubmit(),
                                                hideSenderToRecipient: k,
                                                origin: w.origin,
                                                ethGasPriceWarning: j,
                                                editingGas: L,
                                                handleCloseEditGas: () => this.handleCloseEditGas(),
                                                currentTransaction: w,
                                                supportsEIP1559V2: this.supportsEIP1559V2,
                                                nativeCurrency: A,
                                                isApprovalOrRejection: R,
                                                assetStandard: x,
                                            })
                                        )
                                    );
                                }
                            }
                            (n.default = H),
                                $(H, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                $(H, "propTypes", {
                                    history: r.default.object,
                                    balance: r.default.string,
                                    cancelTransaction: r.default.func,
                                    cancelAllTransactions: r.default.func,
                                    clearConfirmTransaction: r.default.func,
                                    conversionRate: r.default.number,
                                    fromAddress: r.default.string,
                                    fromName: r.default.string,
                                    hexTransactionAmount: r.default.string,
                                    hexMinimumTransactionFee: r.default.string,
                                    hexMaximumTransactionFee: r.default.string,
                                    hexTransactionTotal: r.default.string,
                                    methodData: r.default.object,
                                    nonce: r.default.string,
                                    useNonceField: r.default.bool,
                                    customNonceValue: r.default.string,
                                    updateCustomNonce: r.default.func,
                                    sendTransaction: r.default.func,
                                    showTransactionConfirmedModal: r.default.func,
                                    showRejectTransactionsConfirmationModal: r.default.func,
                                    toAddress: r.default.string,
                                    tokenData: r.default.object,
                                    tokenProps: r.default.object,
                                    toName: r.default.string,
                                    toEns: r.default.string,
                                    toNickname: r.default.string,
                                    transactionStatus: r.default.string,
                                    txData: r.default.object,
                                    unapprovedTxCount: r.default.number,
                                    currentNetworkUnapprovedTxs: r.default.object,
                                    customGas: r.default.object,
                                    actionKey: r.default.string,
                                    contentComponent: r.default.node,
                                    dataComponent: r.default.node,
                                    dataHexComponent: r.default.node,
                                    hideData: r.default.bool,
                                    hideSubtitle: r.default.bool,
                                    tokenAddress: r.default.string,
                                    customTokenAmount: r.default.string,
                                    dappProposedTokenAmount: r.default.string,
                                    currentTokenBalance: r.default.string,
                                    onEdit: r.default.func,
                                    subtitleComponent: r.default.node,
                                    title: r.default.string,
                                    image: r.default.string,
                                    type: r.default.string,
                                    getNextNonce: r.default.func,
                                    nextNonce: r.default.number,
                                    tryReverseResolveAddress: r.default.func.isRequired,
                                    hideSenderToRecipient: r.default.bool,
                                    showAccountInHeader: r.default.bool,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    isEthGasPrice: r.default.bool,
                                    noGasPrice: r.default.bool,
                                    setDefaultHomeActiveTabName: r.default.func,
                                    primaryTotalTextOverride: r.default.string,
                                    secondaryTotalTextOverride: r.default.string,
                                    gasIsLoading: r.default.bool,
                                    primaryTotalTextOverrideMaxAmount: r.default.string,
                                    useNativeCurrencyAsPrimaryCurrency: r.default.bool,
                                    maxFeePerGas: r.default.string,
                                    maxPriorityFeePerGas: r.default.string,
                                    baseFeePerGas: r.default.string,
                                    isMainnet: r.default.bool,
                                    gasFeeIsCustom: r.default.bool,
                                    showLedgerSteps: r.default.bool.isRequired,
                                    nativeCurrency: r.default.string,
                                    supportsEIP1559: r.default.bool,
                                    hardwareWalletRequiresConnection: r.default.bool,
                                    isMultiLayerFeeNetwork: r.default.bool,
                                    eip1559V2Enabled: r.default.bool,
                                    isBuyableChain: r.default.bool,
                                    isApprovalOrRejection: r.default.bool,
                                    assetStandard: r.default.string,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6013,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../../shared/modules/string-utils": 5361,
                "../../../shared/modules/transaction.utils": 5363,
                "../../ducks/app/app": 5884,
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/history/history": 5889,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/utils/token-util": 5934,
                "../../helpers/utils/transactions.util": 5935,
                "../../helpers/utils/util": 5937,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "../send/send.utils": 6177,
                "./confirm-transaction-base.component": 6012,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.mapDispatchToProps = n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("redux"),
                                s = e("react-router-dom"),
                                i = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                c = e("../../store/actions"),
                                l = e("../send/send.utils"),
                                u = e("../../helpers/utils/util"),
                                d = e("../../selectors"),
                                p = e("../../ducks/history/history"),
                                f = e("../../ducks/metamask/metamask"),
                                m = e("../../../shared/modules/transaction.utils"),
                                h = e("../../../shared/modules/hexstring-utils"),
                                E = e("../../ducks/app/app"),
                                g = e("../../helpers/utils/transactions.util"),
                                _ = e("../../../shared/constants/gas"),
                                y = e("../../../shared/constants/transaction"),
                                v = e("../../../shared/modules/string-utils"),
                                b = e("../../helpers/utils/token-util"),
                                T = e("../../../shared/lib/transactions-controller-utils"),
                                k = (a = e("./confirm-transaction-base.component")) && a.__esModule ? a : { default: a };
                            let N = "";
                            const w = (e) => ({
                                tryReverseResolveAddress: (t) => e((0, c.tryReverseResolveAddress)(t)),
                                updateCustomNonce: (t) => {
                                    (N = t), e((0, c.updateCustomNonce)(t));
                                },
                                clearConfirmTransaction: () => e((0, i.clearConfirmTransaction)()),
                                showTransactionConfirmedModal: ({ onSubmit: t }) => e((0, c.showModal)({ name: "TRANSACTION_CONFIRMED", onSubmit: t })),
                                showRejectTransactionsConfirmationModal: ({ onSubmit: t, unapprovedTxCount: n }) => e((0, c.showModal)({ name: "REJECT_TRANSACTIONS", onSubmit: t, unapprovedTxCount: n })),
                                cancelTransaction: ({ id: t }) => e((0, c.cancelTx)({ id: t })),
                                cancelAllTransactions: (t) => e((0, c.cancelTxs)(t)),
                                sendTransaction: (t) => e((0, c.updateAndApproveTx)(((e) => (N ? { ...e, customNonceValue: N } : e))(t))),
                                getNextNonce: () => e((0, c.getNextNonce)()),
                                setDefaultHomeActiveTabName: (t) => e((0, c.setDefaultHomeActiveTabName)(t)),
                                updateTransactionGasFees: (t) => {
                                    e((0, f.updateGasFees)({ ...t, expectHexWei: !0 }));
                                },
                            });
                            n.mapDispatchToProps = w;
                            var O = (0, o.compose)(
                                s.withRouter,
                                (0, r.connect)(
                                    (e, t) => {
                                        var n, a, r, o, s;
                                        const {
                                                toAddress: i,
                                                customTxParamsData: c,
                                                match: { params: k = {} },
                                            } = t,
                                            { id: w } = k,
                                            O = (0, d.getIsMainnet)(e),
                                            P = (0, f.getIsGasEstimatesLoading)(e),
                                            A = (0, E.getGasLoadingAnimationIsShowing)(e),
                                            S = (0, d.getIsBuyableChain)(e),
                                            { confirmTransaction: C, metamask: R } = e,
                                            {
                                                conversionRate: x,
                                                identities: I,
                                                addressBook: M,
                                                network: D,
                                                unapprovedTxs: j,
                                                nextNonce: L,
                                                allCollectibleContracts: W,
                                                selectedAddress: F,
                                                provider: { chainId: U },
                                            } = R,
                                            { tokenData: $, txData: G, tokenProps: H, nonce: B } = C,
                                            { txParams: q = {}, id: V, type: Y } = G,
                                            K = V || Number(w),
                                            z = (0, d.getUnapprovedTransaction)(e, K),
                                            { from: Z, to: X, gasPrice: Q, gas: J, value: ee, data: te } = (z && z.txParams) || q,
                                            ne = (0, d.getMetaMaskAccounts)(e),
                                            ae = (0, m.parseStandardTokenTransactionData)(te),
                                            re = (0, b.getTokenAddressParam)(ae),
                                            { balance: oe } = ne[Z],
                                            { name: se } = I[Z];
                                        let ie = X;
                                        Y !== y.TRANSACTION_TYPES.SIMPLE_SEND && (ie = i || re || X);
                                        const ce = (0, d.getTokenList)(e),
                                            le =
                                                (null === (n = I[ie]) || void 0 === n ? void 0 : n.name) ||
                                                (null === (a = ce[null === (r = ie) || void 0 === r ? void 0 : r.toLowerCase()]) || void 0 === a ? void 0 : a.name) ||
                                                (0, u.shortenAddress)((0, h.toChecksumHexAddress)(ie)),
                                            ue = (0, h.toChecksumHexAddress)(ie),
                                            de = M && M[U] && M[U][ue],
                                            pe = (0, d.getEnsResolutionByAddress)(e, ue),
                                            fe = de ? de.name : "",
                                            me = z ? z.status : "",
                                            he = (0, d.checkNetworkAndAccountSupports1559)(e) && !(0, g.isLegacyTransaction)(q),
                                            { hexTransactionAmount: Ee, hexMinimumTransactionFee: ge, hexMaximumTransactionFee: _e, hexTransactionTotal: ye, gasEstimationObject: ve } = (0, d.transactionFeeSelector)(e, z),
                                            be = Object.keys(j)
                                                .filter((e) => (0, m.transactionMatchesNetwork)(j[e], U, D))
                                                .reduce((e, t) => ({ ...e, [t]: j[t] }), {}),
                                            Te = (0, u.valuesFor)(be).length,
                                            ke = !(0, l.isBalanceSufficient)({ amount: ee, gasTotal: (0, T.calcGasTotal)(J, Q), balance: oe, conversionRate: x }),
                                            Ne = (0, d.getKnownMethodData)(e, te) || {},
                                            we = (0, d.getFullTxData)(e, K, y.TRANSACTION_STATUSES.UNAPPROVED, c),
                                            Oe = Boolean(null == W || null === (o = W[F]) || void 0 === o || null === (s = o[U]) || void 0 === s ? void 0 : s.find((e) => (0, v.isEqualCaseInsensitive)(e.address, we.txParams.to)));
                                        N = (0, d.getCustomNonceValue)(e);
                                        const Pe = (0, d.getIsEthGasPriceFetched)(e),
                                            Ae = !he && (0, d.getNoGasPriceFetched)(e),
                                            { useNativeCurrencyAsPrimaryCurrency: Se } = (0, d.getPreferences)(e),
                                            Ce = we.userFeeLevel === _.CUSTOM_GAS_ESTIMATE || (0, m.txParamsAreDappSuggested)(we),
                                            Re = (0, f.isAddressLedger)(e, Z),
                                            xe = (0, f.getNativeCurrency)(e),
                                            Ie = (0, d.doesAddressRequireLedgerHidConnection)(e, Z),
                                            Me = (0, d.getIsMultiLayerFeeNetwork)(e),
                                            De = (0, d.getEIP1559V2Enabled)(e);
                                        return {
                                            balance: oe,
                                            fromAddress: Z,
                                            fromName: se,
                                            toAddress: ie,
                                            toEns: pe,
                                            toName: le,
                                            toNickname: fe,
                                            hexTransactionAmount: Ee,
                                            hexMinimumTransactionFee: ge,
                                            hexMaximumTransactionFee: _e,
                                            hexTransactionTotal: ye,
                                            txData: we,
                                            tokenData: $,
                                            methodData: Ne,
                                            tokenProps: H,
                                            conversionRate: x,
                                            transactionStatus: me,
                                            nonce: B,
                                            unapprovedTxs: j,
                                            unapprovedTxCount: Te,
                                            currentNetworkUnapprovedTxs: be,
                                            customGas: { gasLimit: J, gasPrice: Q },
                                            advancedInlineGasShown: (0, d.getAdvancedInlineGasShown)(e),
                                            useNonceField: (0, d.getUseNonceField)(e),
                                            customNonceValue: N,
                                            insufficientBalance: ke,
                                            hideSubtitle: !(0, d.getShouldShowFiat)(e) && !Oe,
                                            hideFiatConversion: !(0, d.getShouldShowFiat)(e),
                                            type: Y,
                                            nextNonce: L,
                                            mostRecentOverviewPage: (0, p.getMostRecentOverviewPage)(e),
                                            isMainnet: O,
                                            isEthGasPrice: Pe,
                                            noGasPrice: Ae,
                                            supportsEIP1559: he,
                                            gasIsLoading: P || A,
                                            useNativeCurrencyAsPrimaryCurrency: Se,
                                            maxFeePerGas: ve.maxFeePerGas,
                                            maxPriorityFeePerGas: ve.maxPriorityFeePerGas,
                                            baseFeePerGas: ve.baseFeePerGas,
                                            gasFeeIsCustom: Ce,
                                            showLedgerSteps: Re,
                                            nativeCurrency: xe,
                                            hardwareWalletRequiresConnection: Ie,
                                            isMultiLayerFeeNetwork: Me,
                                            chainId: U,
                                            eip1559V2Enabled: De,
                                            isBuyableChain: S,
                                        };
                                    },
                                    w,
                                    (e, t, n) => {
                                        const { txData: a, unapprovedTxs: r } = e,
                                            { cancelAllTransactions: o, updateTransactionGasFees: s, ...i } = t;
                                        return {
                                            ...e,
                                            ...i,
                                            ...n,
                                            cancelAllTransactions: () => o((0, u.valuesFor)(r)),
                                            updateGasAndCalculate: ({ gasLimit: e, gasPrice: t }) => {
                                                s({ gasLimit: e, gasPrice: t, transaction: a });
                                            },
                                        };
                                    }
                                )
                            )(k.default);
                            n.default = O;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6014,
            { "./confirm-transaction-base.container": 6013 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-transaction-base.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6015,
            { "./transaction-alerts": 6016 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./transaction-alerts")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6016,
            {
                "../../../../shared/constants/gas": 5329,
                "../../../components/ui/actionable-message/actionable-message": 5703,
                "../../../components/ui/typography": 5869,
                "../../../contexts/gasFee": 5876,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/zendesk-url": 5907,
                "../../../hooks/useI18nContext": 5957,
                "../../../selectors/transactions": 6304,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = m(e("react")),
                                r = m(e("prop-types")),
                                o = e("react-redux"),
                                s = e("../../../../shared/constants/gas"),
                                i = e("../../../selectors/transactions"),
                                c = e("../../../contexts/gasFee"),
                                l = e("../../../hooks/useI18nContext"),
                                u = m(e("../../../components/ui/actionable-message/actionable-message")),
                                d = m(e("../../../components/ui/typography")),
                                p = e("../../../helpers/constants/design-system"),
                                f = m(e("../../../helpers/constants/zendesk-url"));
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const h = ({ userAcknowledgedGasMissing: e, setUserAcknowledgedGasMissing: t }) => {
                                const { estimateUsed: n, hasSimulationError: r, supportsEIP1559V2: m, isNetworkBusy: h } = (0, c.useGasFeeContext)(),
                                    E = (0, o.useSelector)(i.submittedPendingTransactionsSelector),
                                    g = (0, l.useI18nContext)();
                                return m
                                    ? a.default.createElement(
                                          "div",
                                          { className: "transaction-alerts" },
                                          r &&
                                              a.default.createElement(u.default, {
                                                  message: g("simulationErrorMessageV2"),
                                                  useIcon: !0,
                                                  iconFillColor: "var(--color-error-default)",
                                                  type: "danger",
                                                  primaryActionV2: !0 === e ? undefined : { label: g("proceedWithTransaction"), onClick: t },
                                              }),
                                          (null == E ? void 0 : E.length) > 0 &&
                                              a.default.createElement(u.default, {
                                                  message: a.default.createElement(
                                                      d.default,
                                                      { align: "left", className: "transaction-alerts__pending-transactions", margin: 0, tag: p.TYPOGRAPHY.Paragraph, variant: p.TYPOGRAPHY.H7 },
                                                      a.default.createElement(
                                                          "strong",
                                                          null,
                                                          1 === (null == E ? void 0 : E.length) ? g("pendingTransactionSingle", [null == E ? void 0 : E.length]) : g("pendingTransactionMultiple", [null == E ? void 0 : E.length])
                                                      ),
                                                      " ",
                                                      g("pendingTransactionInfo"),
                                                      g("learnCancelSpeeedup", [a.default.createElement("a", { key: "cancelSpeedUpInfo", href: f.default.SPEEDUP_CANCEL, rel: "noopener noreferrer", target: "_blank" }, g("cancelSpeedUp"))])
                                                  ),
                                                  useIcon: !0,
                                                  iconFillColor: "var(--color-warning-default)",
                                                  type: "warning",
                                              }),
                                          n === s.PRIORITY_LEVELS.LOW &&
                                              a.default.createElement(u.default, {
                                                  dataTestId: "low-gas-fee-alert",
                                                  message: a.default.createElement(d.default, { align: "left", margin: 0, tag: p.TYPOGRAPHY.Paragraph, variant: p.TYPOGRAPHY.H7 }, g("lowPriorityMessage")),
                                                  useIcon: !0,
                                                  iconFillColor: "var(--color-warning-default)",
                                                  type: "warning",
                                              }),
                                          h
                                              ? a.default.createElement(u.default, {
                                                    message: a.default.createElement(d.default, { align: "left", margin: 0, tag: p.TYPOGRAPHY.Paragraph, variant: p.TYPOGRAPHY.H7 }, g("networkIsBusy")),
                                                    iconFillColor: "var(--color-warning-default)",
                                                    type: "warning",
                                                    useIcon: !0,
                                                })
                                              : null
                                      )
                                    : null;
                            };
                            h.propTypes = { userAcknowledgedGasMissing: r.default.bool, setUserAcknowledgedGasMissing: r.default.func };
                            var E = h;
                            n.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6017,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/transaction": 5340,
                "../../components/ui/loading-screen": 5796,
                "../../helpers/constants/routes": 5904,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r,
                                o,
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = m(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                i = f(e("prop-types")),
                                c = e("react-router-dom"),
                                l = f(e("../../components/ui/loading-screen")),
                                u = e("../../helpers/constants/routes"),
                                d = e("../../../shared/constants/app"),
                                p = e("../../../shared/constants/transaction");
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            class h extends s.Component {
                                redirectToTransaction() {
                                    const { txData: e } = this.props,
                                        { id: t, txParams: { data: n } = {}, type: a } = e;
                                    if (a === p.TRANSACTION_TYPES.DEPLOY_CONTRACT) {
                                        const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_DEPLOY_CONTRACT_PATH}`;
                                        return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                    }
                                    if (a === p.TRANSACTION_TYPES.SIMPLE_SEND) {
                                        const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_ETHER_PATH}`;
                                        return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                    }
                                    if (n)
                                        switch (a) {
                                            case p.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_TOKEN_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                            case p.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_APPROVE_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                            case p.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SET_APPROVAL_FOR_ALL_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                            case p.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_TRANSFER_FROM_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                            case p.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SAFE_TRANSFER_FROM_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                            default: {
                                                const e = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_TOKEN_METHOD_PATH}`;
                                                return s.default.createElement(c.Redirect, { to: { pathname: e } });
                                            }
                                        }
                                    const r = `${u.CONFIRM_TRANSACTION_ROUTE}/${t}${u.CONFIRM_SEND_ETHER_PATH}`;
                                    return s.default.createElement(c.Redirect, { to: { pathname: r } });
                                }
                                render() {
                                    const { txData: e } = this.props;
                                    if (e.txParams) return this.redirectToTransaction();
                                    if (e.msgParams) {
                                        let t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.SIGNATURE_REQUEST_PATH}`;
                                        return (
                                            e.type === d.MESSAGE_TYPE.ETH_DECRYPT
                                                ? (t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.DECRYPT_MESSAGE_REQUEST_PATH}`)
                                                : e.type === d.MESSAGE_TYPE.ETH_GET_ENCRYPTION_PUBLIC_KEY && (t = `${u.CONFIRM_TRANSACTION_ROUTE}/${e.id}${u.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH}`),
                                            s.default.createElement(c.Redirect, { to: { pathname: t } })
                                        );
                                    }
                                    return s.default.createElement(l.default, null);
                                }
                            }
                            (n.default = h), (a = h), (r = "propTypes"), (o = { txData: i.default.object }), r in a ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = o);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6018,
            { "../../selectors": 6300, "./confirm-transaction-switch.component": 6017, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../selectors"),
                                s = (a = e("./confirm-transaction-switch.component")) && a.__esModule ? a : { default: a };
                            var i = (0, r.connect)((e, t) => {
                                const {
                                        metamask: { unapprovedTxs: n },
                                    } = e,
                                    {
                                        match: { params: a = {}, url: r },
                                    } = t,
                                    s = (null == r ? void 0 : r.match(/\d+/u)) && (null == r ? void 0 : r.match(/\d+/u)[0]),
                                    { id: i } = a,
                                    c = i || s,
                                    l = (0, o.unconfirmedTransactionsListSelector)(e);
                                return { txData: l.length ? n[c] || l[0] : {} };
                            })(s.default);
                            n.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6019,
            { "./confirm-transaction-switch.container": 6018 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./confirm-transaction-switch.container")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            602,
            { "./DialogContent": 601, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./DialogContent"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6020,
            {
                "../../../shared/constants/app": 5328,
                "../../../shared/constants/transaction": 5340,
                "../../components/app/signature-request": 5619,
                "../../components/app/signature-request-original": 5608,
                "../../components/app/signature-request-siwe": 5611,
                "../../components/ui/loading-screen": 5796,
                "../../ducks/history/history": 5889,
                "../../ducks/send": 5894,
                "../../helpers/utils/tx-helper": 5936,
                "../../store/actions": 6307,
                loglevel: 4707,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r,
                                o,
                                s = k(e("prop-types")),
                                i = T(e("react")),
                                c = e("react-redux"),
                                l = e("react-router-dom"),
                                u = e("redux"),
                                d = k(e("loglevel")),
                                p = T(e("../../store/actions")),
                                f = k(e("../../helpers/utils/tx-helper")),
                                m = k(e("../../components/app/signature-request")),
                                h = (k(e("../../components/app/signature-request-siwe")), k(e("../../components/app/signature-request-original"))),
                                E = k(e("../../components/ui/loading-screen")),
                                g = e("../../ducks/history/history"),
                                _ = e("../../../shared/constants/app"),
                                y = e("../../../shared/constants/transaction"),
                                v = e("../../ducks/send");
                            function b(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (b = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function T(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var n = b(t);
                                if (n && n.has(e)) return n.get(e);
                                var a = {},
                                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                    }
                                return (a.default = e), n && n.set(e, a), a;
                            }
                            function k(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            class N extends i.Component {
                                getUnapprovedMessagesTotal() {
                                    const { unapprovedMsgCount: e = 0, unapprovedPersonalMsgCount: t = 0, unapprovedTypedMessagesCount: n = 0 } = this.props;
                                    return n + e + t;
                                }
                                getTxData() {
                                    const {
                                            network: e,
                                            index: t,
                                            unapprovedTxs: n,
                                            unapprovedMsgs: a,
                                            unapprovedPersonalMsgs: r,
                                            unapprovedTypedMessages: o,
                                            match: { params: { id: s } = {} },
                                            chainId: i,
                                        } = this.props,
                                        c = (0, f.default)(n, a, r, o, e, i);
                                    return d.default.info(`rendering a combined ${c.length} unconf msgs & txs`), s ? c.find(({ id: e }) => `${e}` === s) : c[t];
                                }
                                signatureSelect(e) {
                                    const {
                                        type: t,
                                        msgParams: { version: n, siwe: a },
                                    } = e;
                                    return t !== _.MESSAGE_TYPE.ETH_SIGN_TYPED_DATA || ("V3" !== n && "V4" !== n) ? h.default : m.default;
                                }
                                signMessage(e, t) {
                                    d.default.info("conf-tx.js: signing message");
                                    const n = e.msgParams;
                                    return (n.metamaskId = e.id), this.stopPropagation(t), this.props.dispatch(p.signMsg(n));
                                }
                                stopPropagation(e) {
                                    null != e && e.stopPropagation && e.stopPropagation();
                                }
                                signPersonalMessage(e, t) {
                                    d.default.info("conf-tx.js: signing personal message");
                                    const n = e.msgParams;
                                    return (n.metamaskId = e.id), this.stopPropagation(t), this.props.dispatch(p.signPersonalMsg(n));
                                }
                                signTypedMessage(e, t) {
                                    d.default.info("conf-tx.js: signing typed message");
                                    const n = e.msgParams;
                                    return (n.metamaskId = e.id), this.stopPropagation(t), this.props.dispatch(p.signTypedMsg(n));
                                }
                                cancelMessage(e, t) {
                                    return d.default.info("canceling message"), this.stopPropagation(t), this.props.dispatch(p.cancelMsg(e));
                                }
                                cancelPersonalMessage(e, t) {
                                    return d.default.info("canceling personal message"), this.stopPropagation(t), this.props.dispatch(p.cancelPersonalMsg(e));
                                }
                                cancelTypedMessage(e, t) {
                                    return d.default.info("canceling typed message"), this.stopPropagation(t), this.props.dispatch(p.cancelTypedMsg(e));
                                }
                                componentDidMount() {
                                    const { unapprovedTxs: e = {}, history: t, mostRecentOverviewPage: n, network: a, chainId: r, sendTo: o } = this.props;
                                    0 !== (0, f.default)(e, {}, {}, {}, a, r).length || o || 0 !== this.getUnapprovedMessagesTotal() || t.push(n);
                                }
                                componentDidUpdate(e) {
                                    const {
                                        unapprovedTxs: t = {},
                                        network: n,
                                        chainId: a,
                                        currentNetworkTxList: r,
                                        sendTo: o,
                                        history: s,
                                        match: { params: { id: i } = {} },
                                        mostRecentOverviewPage: c,
                                    } = this.props;
                                    let l;
                                    if (i) l = r.find(({ id: e }) => `${e}` === i);
                                    else {
                                        const { index: t, unapprovedTxs: o } = e,
                                            s = (0, f.default)(o, {}, {}, {}, n, a)[t] || {};
                                        l = r.find(({ id: e }) => e === s.id) || {};
                                    }
                                    const u = (0, f.default)(t, {}, {}, {}, n, a);
                                    l && l.status === y.TRANSACTION_STATUSES.DROPPED
                                        ? this.props.dispatch(p.showModal({ name: "TRANSACTION_CONFIRMED", onSubmit: () => s.push(c) }))
                                        : 0 !== u.length || o || 0 !== this.getUnapprovedMessagesTotal() || this.props.history.push(c);
                                }
                                render() {
                                    const { currentCurrency: e, blockGasLimit: t } = this.props,
                                        n = this.getTxData() || {},
                                        { msgParams: a } = n;
                                    if ((d.default.debug("msgParams detected, rendering pending msg"), !a)) return i.default.createElement(E.default, null);
                                    const r = this.signatureSelect(n);
                                    return i.default.createElement(r, {
                                        txData: n,
                                        key: n.id,
                                        identities: this.props.identities,
                                        currentCurrency: e,
                                        blockGasLimit: t,
                                        signMessage: this.signMessage.bind(this, n),
                                        signPersonalMessage: this.signPersonalMessage.bind(this, n),
                                        signTypedMessage: this.signTypedMessage.bind(this, n),
                                        cancelMessage: this.cancelMessage.bind(this, n),
                                        cancelPersonalMessage: this.cancelPersonalMessage.bind(this, n),
                                        cancelTypedMessage: this.cancelTypedMessage.bind(this, n),
                                    });
                                }
                            }
                            (a = N),
                                (r = "propTypes"),
                                (o = {
                                    mostRecentOverviewPage: s.default.string.isRequired,
                                    unapprovedMsgCount: s.default.number,
                                    unapprovedPersonalMsgCount: s.default.number,
                                    unapprovedTypedMessagesCount: s.default.number,
                                    network: s.default.string,
                                    chainId: s.default.string,
                                    index: s.default.number,
                                    unapprovedTxs: s.default.object,
                                    unapprovedMsgs: s.default.object,
                                    unapprovedPersonalMsgs: s.default.object,
                                    unapprovedTypedMessages: s.default.object,
                                    match: s.default.shape({ params: s.default.shape({ id: s.default.string }) }),
                                    currentNetworkTxList: s.default.array,
                                    currentCurrency: s.default.string,
                                    blockGasLimit: s.default.string,
                                    history: s.default.object,
                                    identities: s.default.object,
                                    dispatch: s.default.func.isRequired,
                                    sendTo: s.default.string,
                                }),
                                r in a ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = o);
                            var w = (0, u.compose)(
                                l.withRouter,
                                (0, c.connect)(function (e) {
                                    const { metamask: t, appState: n } = e,
                                        { unapprovedMsgCount: a, unapprovedPersonalMsgCount: r, unapprovedTypedMessagesCount: o } = t,
                                        { txId: s } = n;
                                    return {
                                        identities: e.metamask.identities,
                                        mostRecentOverviewPage: (0, g.getMostRecentOverviewPage)(e),
                                        unapprovedTxs: e.metamask.unapprovedTxs,
                                        unapprovedMsgs: e.metamask.unapprovedMsgs,
                                        unapprovedPersonalMsgs: e.metamask.unapprovedPersonalMsgs,
                                        unapprovedTypedMessages: e.metamask.unapprovedTypedMessages,
                                        index: s,
                                        warning: e.appState.warning,
                                        network: e.metamask.network,
                                        chainId: e.metamask.provider.chainId,
                                        currentCurrency: e.metamask.currentCurrency,
                                        blockGasLimit: e.metamask.currentBlockGasLimit,
                                        unapprovedMsgCount: a,
                                        unapprovedPersonalMsgCount: r,
                                        unapprovedTypedMessagesCount: o,
                                        sendTo: (0, v.getSendTo)(e),
                                        currentNetworkTxList: e.metamask.currentNetworkTxList,
                                    };
                                })
                            )(N);
                            n.default = w;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6021,
            {
                "../../helpers/constants/routes": 5904,
                "../../hooks/useAssetDetails": 5949,
                "../../selectors": 6300,
                "../confirm-approve": 5991,
                "../confirm-send-token": 6009,
                "../confirm-token-transaction-base": 6011,
                "../confirm-transaction-switch": 6019,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                            var a = m(e("react")),
                                r = m(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("../../helpers/constants/routes"),
                                c = e("../../selectors"),
                                l = m(e("../confirm-approve")),
                                u = m(e("../confirm-send-token")),
                                d = m(e("../confirm-token-transaction-base")),
                                p = m(e("../confirm-transaction-switch")),
                                f = e("../../hooks/useAssetDetails");
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function h({ transaction: e }) {
                                const { txParams: { data: t, to: n, from: r } = {} } = e,
                                    { assetStandard: m, assetName: h, userBalance: E, tokenSymbol: g, decimals: _, tokenImage: y, tokenAmount: v, tokenId: b, toAddress: T } = (0, f.useAssetDetails)(n, r, t),
                                    { ethTransactionTotal: k, fiatTransactionTotal: N, hexTransactionTotal: w, hexMaximumTransactionFee: O } = (0, o.useSelector)((t) => (0, c.transactionFeeSelector)(t, e));
                                return a.default.createElement(
                                    s.Switch,
                                    null,
                                    a.default.createElement(s.Route, {
                                        exact: !0,
                                        path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_APPROVE_PATH}`,
                                        render: () =>
                                            a.default.createElement(l.default, {
                                                assetStandard: m,
                                                assetName: h,
                                                userBalance: E,
                                                tokenSymbol: g,
                                                decimals: _,
                                                tokenImage: y,
                                                tokenAmount: v,
                                                tokenId: b,
                                                userAddress: r,
                                                tokenAddress: n,
                                                toAddress: T,
                                                transaction: e,
                                                ethTransactionTotal: k,
                                                fiatTransactionTotal: N,
                                                hexTransactionTotal: w,
                                            }),
                                    }),
                                    a.default.createElement(s.Route, {
                                        exact: !0,
                                        path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SET_APPROVAL_FOR_ALL_PATH}`,
                                        render: () =>
                                            a.default.createElement(l.default, {
                                                isSetApproveForAll: !0,
                                                assetStandard: m,
                                                assetName: h,
                                                userBalance: E,
                                                tokenSymbol: g,
                                                decimals: _,
                                                tokenImage: y,
                                                tokenAmount: v,
                                                tokenId: b,
                                                userAddress: r,
                                                tokenAddress: n,
                                                toAddress: T,
                                                transaction: e,
                                                ethTransactionTotal: k,
                                                fiatTransactionTotal: N,
                                                hexTransactionTotal: w,
                                            }),
                                    }),
                                    a.default.createElement(s.Route, {
                                        exact: !0,
                                        path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_TRANSFER_FROM_PATH}`,
                                        render: () =>
                                            a.default.createElement(d.default, {
                                                assetStandard: m,
                                                assetName: h,
                                                userBalance: E,
                                                tokenSymbol: g,
                                                decimals: _,
                                                image: y,
                                                tokenAddress: n,
                                                toAddress: T,
                                                tokenAmount: v,
                                                tokenId: b,
                                                userAddress: r,
                                                transaction: e,
                                                ethTransactionTotal: k,
                                                fiatTransactionTotal: N,
                                                hexMaximumTransactionFee: O,
                                            }),
                                    }),
                                    a.default.createElement(s.Route, {
                                        exact: !0,
                                        path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SAFE_TRANSFER_FROM_PATH}`,
                                        render: () =>
                                            a.default.createElement(d.default, {
                                                assetStandard: m,
                                                assetName: h,
                                                userBalance: E,
                                                tokenSymbol: g,
                                                decimals: _,
                                                image: y,
                                                tokenAddress: n,
                                                toAddress: T,
                                                tokenAmount: v,
                                                tokenId: b,
                                                userAddress: r,
                                                transaction: e,
                                                ethTransactionTotal: k,
                                                fiatTransactionTotal: N,
                                                hexMaximumTransactionFee: O,
                                            }),
                                    }),
                                    a.default.createElement(s.Route, {
                                        exact: !0,
                                        path: `${i.CONFIRM_TRANSACTION_ROUTE}/:id?${i.CONFIRM_SEND_TOKEN_PATH}`,
                                        render: () =>
                                            a.default.createElement(u.default, {
                                                assetStandard: m,
                                                assetName: h,
                                                tokenSymbol: g,
                                                image: y,
                                                tokenAddress: n,
                                                toAddress: T,
                                                tokenAmount: v,
                                                tokenId: b,
                                                transaction: e,
                                                ethTransactionTotal: k,
                                                fiatTransactionTotal: N,
                                                hexMaximumTransactionFee: O,
                                            }),
                                    }),
                                    a.default.createElement(s.Route, { path: "*", component: p.default })
                                );
                            }
                            h.propTypes = { transaction: r.default.shape({ origin: r.default.string, txParams: r.default.shape({ data: r.default.string, to: r.default.string, from: r.default.string }) }) };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6022,
            {
                "../../components/ui/loading-screen": 5796,
                "../../helpers/constants/routes": 5904,
                "../../store/actions": 6307,
                "../confirm-contract-interaction": 5993,
                "../confirm-decrypt-message": 5996,
                "../confirm-deploy-contract": 5999,
                "../confirm-encryption-public-key": 6002,
                "../confirm-send-ether": 6007,
                "../confirm-transaction-switch": 6019,
                "./conf-tx": 6020,
                "./confirm-token-transaction-switch": 6021,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = _(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = g(e("prop-types")),
                                o = e("react-router-dom"),
                                s = g(e("../../components/ui/loading-screen")),
                                i = g(e("../confirm-transaction-switch")),
                                c = g(e("../confirm-contract-interaction")),
                                l = g(e("../confirm-send-ether")),
                                u = g(e("../confirm-deploy-contract")),
                                d = g(e("../confirm-decrypt-message")),
                                p = g(e("../confirm-encryption-public-key")),
                                f = e("../../helpers/constants/routes"),
                                m = e("../../store/actions"),
                                h = g(e("./confirm-token-transaction-switch")),
                                E = g(e("./conf-tx"));
                            function g(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function _(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (_ = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function y(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class v extends a.Component {
                                constructor(e) {
                                    super(e),
                                        y(this, "_beforeUnload", () => {
                                            (this._isMounted = !1), this.state.pollingToken && ((0, m.disconnectGasFeeEstimatePoller)(this.state.pollingToken), (0, m.removePollingTokenFromAppState)(this.state.pollingToken));
                                        }),
                                        (this.state = {});
                                }
                                componentDidMount() {
                                    this._isMounted = !0;
                                    const {
                                        totalUnapprovedCount: e = 0,
                                        sendTo: t,
                                        history: n,
                                        mostRecentOverviewPage: a,
                                        transaction: { txParams: { data: r } = {}, origin: o } = {},
                                        getContractMethodData: s,
                                        transactionId: i,
                                        paramsTransactionId: c,
                                    } = this.props;
                                    if (
                                        ((0, m.getGasFeeEstimatesAndStartPolling)().then((e) => {
                                            this._isMounted ? (this.setState({ pollingToken: e }), (0, m.addPollingTokenToAppState)(e)) : ((0, m.disconnectGasFeeEstimatePoller)(e), (0, m.removePollingTokenFromAppState)(e));
                                        }),
                                        window.addEventListener("beforeunload", this._beforeUnload),
                                        !e && !t)
                                    )
                                        return void n.replace(a);
                                    "metamask" !== o && s(r);
                                    const l = i || c;
                                    l && this.props.setTransactionToConfirm(l);
                                }
                                componentWillUnmount() {
                                    this._beforeUnload(), window.removeEventListener("beforeunload", this._beforeUnload);
                                }
                                componentDidUpdate(e) {
                                    const {
                                        setTransactionToConfirm: t,
                                        transaction: { txData: { txParams: { data: n } = {}, origin: a } = {} },
                                        clearConfirmTransaction: r,
                                        getContractMethodData: o,
                                        paramsTransactionId: s,
                                        transactionId: i,
                                        history: c,
                                        mostRecentOverviewPage: l,
                                        totalUnapprovedCount: u,
                                        setDefaultHomeActiveTabName: d,
                                    } = this.props;
                                    s && i && e.paramsTransactionId !== s
                                        ? (r(), t(s), "metamask" !== a && o(n))
                                        : !e.transactionId || i || u
                                        ? e.transactionId && i && e.transactionId !== i && c.replace(l)
                                        : d("Activity").then(() => {
                                              c.replace(f.DEFAULT_ROUTE);
                                          });
                                }
                                render() {
                                    const { transactionId: e, paramsTransactionId: t, isTokenMethodAction: n, transaction: r } = this.props,
                                        m = e && (!t || t === e);
                                    return n && m
                                        ? a.default.createElement(h.default, { transaction: r })
                                        : m
                                        ? a.default.createElement(
                                              o.Switch,
                                              null,
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.CONFIRM_DEPLOY_CONTRACT_PATH}`, component: u.default }),
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.CONFIRM_SEND_ETHER_PATH}`, component: l.default }),
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.CONFIRM_TOKEN_METHOD_PATH}`, component: c.default }),
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.SIGNATURE_REQUEST_PATH}`, component: E.default }),
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.DECRYPT_MESSAGE_REQUEST_PATH}`, component: d.default }),
                                              a.default.createElement(o.Route, { exact: !0, path: `${f.CONFIRM_TRANSACTION_ROUTE}/:id?${f.ENCRYPTION_PUBLIC_KEY_REQUEST_PATH}`, component: p.default }),
                                              a.default.createElement(o.Route, { path: "*", component: i.default })
                                          )
                                        : a.default.createElement(s.default, null);
                                }
                            }
                            (n.default = v),
                                y(v, "contextTypes", { metricsEvent: r.default.func }),
                                y(v, "propTypes", {
                                    history: r.default.object.isRequired,
                                    totalUnapprovedCount: r.default.number.isRequired,
                                    sendTo: r.default.string,
                                    setTransactionToConfirm: r.default.func,
                                    clearConfirmTransaction: r.default.func,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    transaction: r.default.object,
                                    getContractMethodData: r.default.func,
                                    transactionId: r.default.string,
                                    paramsTransactionId: r.default.string,
                                    isTokenMethodAction: r.default.bool,
                                    setDefaultHomeActiveTabName: r.default.func,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6023,
            {
                "../../ducks/confirm-transaction/confirm-transaction.duck": 5885,
                "../../ducks/history/history": 5889,
                "../../ducks/send": 5894,
                "../../helpers/utils/transactions.util": 5935,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "./confirm-transaction.component": 6022,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("redux"),
                                s = e("react-router-dom"),
                                i = e("../../ducks/confirm-transaction/confirm-transaction.duck"),
                                c = e("../../helpers/utils/transactions.util"),
                                l = e("../../store/actions"),
                                u = e("../../selectors"),
                                d = e("../../ducks/history/history"),
                                p = e("../../ducks/send"),
                                f = (a = e("./confirm-transaction.component")) && a.__esModule ? a : { default: a };
                            var m = (0, o.compose)(
                                s.withRouter,
                                (0, r.connect)(
                                    (e, t) => {
                                        const {
                                                metamask: { unapprovedTxs: n },
                                            } = e,
                                            {
                                                match: { params: a = {} },
                                            } = t,
                                            { id: r } = a,
                                            o = (0, p.getSendTo)(e),
                                            s = (0, u.unconfirmedTransactionsListSelector)(e),
                                            i = s.length,
                                            l = i ? n[r] || s[0] : {},
                                            { id: f, type: m } = l;
                                        return {
                                            totalUnapprovedCount: i,
                                            sendTo: o,
                                            unapprovedTxs: n,
                                            id: r,
                                            mostRecentOverviewPage: (0, d.getMostRecentOverviewPage)(e),
                                            paramsTransactionId: r && String(r),
                                            transactionId: f && String(f),
                                            transaction: l,
                                            isTokenMethodAction: (0, c.isTokenMethodAction)(m),
                                        };
                                    },
                                    (e) => ({
                                        setTransactionToConfirm: (t) => {
                                            e((0, i.setTransactionToConfirm)(t));
                                        },
                                        clearConfirmTransaction: () => e((0, i.clearConfirmTransaction)()),
                                        getContractMethodData: (t) => e((0, l.getContractMethodData)(t)),
                                        setDefaultHomeActiveTabName: (t) => e((0, l.setDefaultHomeActiveTabName)(t)),
                                    })
                                )
                            )(f.default);
                            n.default = m;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6024,
            { "./confirm-transaction.container": 6023 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./confirm-transaction.container")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6025,
            { "../../../../components/ui/button": 5711, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = i);
                            var a = s(e("react")),
                                r = s(e("prop-types")),
                                o = s(e("../../../../components/ui/button"));
                            function s(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function i({ onApprove: e, onCancel: t, approveText: n, cancelText: r, alerts: s }) {
                                return a.default.createElement(
                                    "div",
                                    { className: "confirmation-footer" },
                                    s,
                                    a.default.createElement(
                                        "div",
                                        { className: "confirmation-footer__actions" },
                                        a.default.createElement(o.default, { type: "secondary", onClick: t }, r),
                                        a.default.createElement(o.default, { type: "primary", onClick: e }, n)
                                    )
                                );
                            }
                            i.propTypes = { alerts: r.default.node, onApprove: r.default.func.isRequired, onCancel: r.default.func.isRequired, approveText: r.default.string.isRequired, cancelText: r.default.string.isRequired };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6026,
            { "./confirmation-footer": 6025 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirmation-footer")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6027,
            {
                "../../../../../shared/constants/network": 5333,
                "../../../../components/ui/box": 5707,
                "../../../../components/ui/site-icon": 5841,
                "../../../../components/ui/typography/typography": 5870,
                "../../../../helpers/constants/design-system": 5900,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                            var a = d(e("react")),
                                r = d(e("prop-types")),
                                o = e("react-redux"),
                                s = d(e("../../../../components/ui/box")),
                                i = d(e("../../../../components/ui/site-icon")),
                                c = d(e("../../../../components/ui/typography/typography")),
                                l = e("../../../../helpers/constants/design-system"),
                                u = e("../../../../../shared/constants/network");
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p({ newNetwork: e }) {
                                const t = (0, o.useSelector)((e) => ({ nickname: e.metamask.provider.nickname, type: e.metamask.provider.type, chainId: e.metamask.provider.chainId }));
                                return a.default.createElement(
                                    s.default,
                                    { className: "confirmation-network-switch", display: l.DISPLAY.FLEX, height: l.BLOCK_SIZES.FULL, justifyContent: l.JUSTIFY_CONTENT.CENTER, marginTop: 8 },
                                    a.default.createElement(
                                        s.default,
                                        { className: "confirmation-network-switch__icon", display: l.DISPLAY.BLOCK },
                                        t.chainId in u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                                            ? a.default.createElement(i.default, { icon: u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[t.chainId], name: t.nickname, size: 64 })
                                            : a.default.createElement("div", { className: "confirmation-network-switch__unknown-icon" }, a.default.createElement("i", { className: "fa fa-question fa-2x" })),
                                        a.default.createElement(
                                            c.default,
                                            {
                                                color: l.COLORS.TEXT_DEFAULT,
                                                variant: l.TYPOGRAPHY.H6,
                                                fontWeight: l.FONT_WEIGHT.NORMAL,
                                                align: l.TEXT_ALIGN.CENTER,
                                                boxProps: { display: l.DISPLAY.FLEX, justifyContent: l.JUSTIFY_CONTENT.CENTER },
                                            },
                                            t.nickname || u.NETWORK_TO_NAME_MAP[t.type]
                                        )
                                    ),
                                    a.default.createElement(
                                        s.default,
                                        { className: "confirmation-network-switch__center-icon", display: l.DISPLAY.FLEX, alignItems: l.ALIGN_ITEMS.CENTER, justifyContent: l.JUSTIFY_CONTENT.CENTER },
                                        a.default.createElement("i", { className: "fa fa-angle-right fa-lg confirmation-network-switch__check" }),
                                        a.default.createElement("div", { className: "confirmation-network-switch__dashed-line" })
                                    ),
                                    a.default.createElement(
                                        s.default,
                                        { className: "confirmation-network-switch__icon", display: l.DISPLAY.BLOCK },
                                        e.chainId in u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                                            ? a.default.createElement(i.default, { icon: u.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId], name: e.name, size: 64 })
                                            : a.default.createElement("div", { className: "confirmation-network-switch__unknown-icon" }, a.default.createElement("i", { className: "fa fa-question fa-2x" })),
                                        a.default.createElement(
                                            c.default,
                                            {
                                                color: l.COLORS.TEXT_DEFAULT,
                                                variant: l.TYPOGRAPHY.H6,
                                                fontWeight: l.FONT_WEIGHT.NORMAL,
                                                align: l.TEXT_ALIGN.CENTER,
                                                boxProps: { display: l.DISPLAY.FLEX, justifyContent: l.JUSTIFY_CONTENT.CENTER },
                                            },
                                            e.name
                                        )
                                    )
                                );
                            }
                            p.propTypes = { newNetwork: r.default.shape({ chainId: r.default.string.isRequired, name: r.default.string.isRequired }) };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6028,
            { "./confirmation-network-switch": 6027 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirmation-network-switch")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6029,
            {
                "../../components/app/metamask-template-renderer": 5514,
                "../../components/app/network-display/network-display": 5581,
                "../../components/ui/box": 5707,
                "../../components/ui/callout": 5713,
                "../../components/ui/site-origin": 5843,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/routes": 5904,
                "../../hooks/useI18nContext": 5957,
                "../../hooks/useOriginMetadata": 5959,
                "../../selectors": 6300,
                "./components/confirmation-footer": 6026,
                "./templates": 6032,
                immer: 4459,
                lodash: 4694,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = N);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = T(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = b(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("lodash"),
                                c = e("immer"),
                                l = b(e("../../components/ui/box")),
                                u = b(e("../../components/app/metamask-template-renderer")),
                                d = e("../../helpers/constants/routes"),
                                p = e("../../helpers/constants/design-system"),
                                f = e("../../hooks/useI18nContext"),
                                m = e("../../hooks/useOriginMetadata"),
                                h = e("../../selectors"),
                                E = b(e("../../components/app/network-display/network-display")),
                                g = b(e("../../components/ui/callout")),
                                _ = b(e("../../components/ui/site-origin")),
                                y = b(e("./components/confirmation-footer")),
                                v = e("./templates");
                            function b(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function T(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (T = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            const k = (0, c.produce)((e, t) => {
                                var n;
                                switch (t.type) {
                                    case "dismiss":
                                        null != e && null !== (n = e[t.confirmationId]) && void 0 !== n && n[t.alertId] && (e[t.confirmationId][t.alertId].dismissed = !0);
                                        break;
                                    case "set":
                                        e[t.confirmationId] || (e[t.confirmationId] = {}),
                                            t.alerts.forEach((n) => {
                                                e[t.confirmationId][n.id] = { ...n, dismissed: !1 };
                                            });
                                        break;
                                    default:
                                        throw new Error("You must provide a type when dispatching an action for alertState");
                                }
                            });
                            function N({ redirectToHomeOnZeroConfirmations: e = !0 }) {
                                const t = (0, f.useI18nContext)(),
                                    n = (0, o.useDispatch)(),
                                    r = (0, s.useHistory)(),
                                    c = (0, o.useSelector)(h.getUnapprovedTemplatedConfirmations, i.isEqual),
                                    [b, T] = (0, a.useState)(0),
                                    N = c[b],
                                    w = (0, m.useOriginMetadata)(null == N ? void 0 : N.origin) || {},
                                    [O, P] = (function (e) {
                                        const [t, n] = (0, a.useReducer)(k, {});
                                        return (
                                            (0, a.useEffect)(() => {
                                                let t = !0;
                                                return (
                                                    e &&
                                                        (0, v.getTemplateAlerts)(e).then((a) => {
                                                            t && a.length > 0 && n({ type: "set", confirmationId: e.id, alerts: a });
                                                        }),
                                                    () => {
                                                        t = !1;
                                                    }
                                                );
                                            }, [e]),
                                            [
                                                t,
                                                (0, a.useCallback)(
                                                    (t) => {
                                                        n({ type: "dismiss", confirmationId: e.id, alertId: t });
                                                    },
                                                    [e]
                                                ),
                                            ]
                                        );
                                    })(N),
                                    A = (0, a.useMemo)(() => (N ? (0, v.getTemplateValues)(N, t, n, r) : {}), [N, t, n, r]);
                                return (
                                    (0, a.useEffect)(() => {
                                        0 === c.length && e ? r.push(d.DEFAULT_ROUTE) : c.length <= b && T(c.length - 1);
                                    }, [c, r, b, e]),
                                    N
                                        ? a.default.createElement(
                                              "div",
                                              { className: "confirmation-page" },
                                              c.length > 1 &&
                                                  a.default.createElement(
                                                      "div",
                                                      { className: "confirmation-page__navigation" },
                                                      a.default.createElement("p", null, t("xOfYPending", [b + 1, c.length])),
                                                      b > 0 &&
                                                          a.default.createElement("button", { className: "confirmation-page__navigation-button", onClick: () => T(b - 1) }, a.default.createElement("i", { className: "fas fa-chevron-left" })),
                                                      a.default.createElement(
                                                          "button",
                                                          { className: "confirmation-page__navigation-button", disabled: b + 1 === c.length, onClick: () => T(b + 1) },
                                                          a.default.createElement("i", { className: "fas fa-chevron-right" })
                                                      )
                                                  ),
                                              a.default.createElement(
                                                  "div",
                                                  { className: "confirmation-page__content" },
                                                  A.networkDisplay
                                                      ? a.default.createElement(
                                                            l.default,
                                                            { justifyContent: "center", marginTop: 2 },
                                                            a.default.createElement(E.default, { indicatorSize: p.SIZES.XS, labelProps: { color: p.COLORS.TEXT_DEFAULT } })
                                                        )
                                                      : null,
                                                  "metamask" === N.origin
                                                      ? null
                                                      : a.default.createElement(
                                                            l.default,
                                                            { alignItems: "center", marginTop: 1, paddingTop: 1, paddingRight: 4, paddingLeft: 4, paddingBottom: 4, flexDirection: p.FLEX_DIRECTION.COLUMN },
                                                            a.default.createElement(_.default, { chip: !0, siteOrigin: w.origin, title: w.origin, iconSrc: w.iconUrl, iconName: w.hostname })
                                                        ),
                                                  a.default.createElement(u.default, { sections: A.content })
                                              ),
                                              a.default.createElement(y.default, {
                                                  alerts:
                                                      O[N.id] &&
                                                      Object.values(O[N.id])
                                                          .filter((e) => !1 === e.dismissed)
                                                          .map((e, t, n) =>
                                                              a.default.createElement(
                                                                  g.default,
                                                                  { key: e.id, severity: e.severity, dismiss: () => P(e.id), isFirst: 0 === t, isLast: t === n.length - 1, isMultiple: n.length > 1 },
                                                                  a.default.createElement(u.default, { sections: e.content })
                                                              )
                                                          ),
                                                  onApprove: A.onApprove,
                                                  onCancel: A.onCancel,
                                                  approveText: A.approvalText,
                                                  cancelText: A.cancelText,
                                              })
                                          )
                                        : null
                                );
                            }
                            N.propTypes = { redirectToHomeOnZeroConfirmations: r.default.bool };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            603,
            {
                "../Typography": 793,
                "../styles/withStyles": 868,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = a(e("react")),
                                i = (r(e("prop-types")), r(e("../styles/withStyles"))),
                                c = r(e("../Typography")),
                                l = { root: { marginBottom: 12 } };
                            n.styles = l;
                            var u = s.forwardRef(function (e, t) {
                                    return s.createElement(c.default, (0, o.default)({ component: "p", variant: "body1", color: "textSecondary", ref: t }, e));
                                }),
                                d = (0, i.default)(l, { name: "MuiDialogContentText" })(u);
                            n.default = d;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6030,
            { "./confirmation": 6029 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirmation")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6034,
            { "../../components/app/connected-accounts-list": 5447, "../../components/app/connected-accounts-permissions": 5449, "../../components/ui/popover": 5828, "../../helpers/utils/util": 5937, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = u(e("prop-types")),
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = u(e("../../components/ui/popover")),
                                s = u(e("../../components/app/connected-accounts-list")),
                                i = u(e("../../components/app/connected-accounts-permissions")),
                                c = e("../../helpers/utils/util");
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends r.PureComponent {
                                render() {
                                    const {
                                            accountToConnect: e,
                                            activeTabOrigin: t,
                                            isActiveTabExtension: n,
                                            connectAccount: a,
                                            connectedAccounts: l,
                                            history: u,
                                            mostRecentOverviewPage: d,
                                            permissions: p,
                                            selectedAddress: f,
                                            removePermittedAccount: m,
                                            setSelectedAddress: h,
                                        } = this.props,
                                        { t: E } = this.context,
                                        g = l.length > 1 ? E("connectedAccountsDescriptionPlural", [l.length]) : E("connectedAccountsDescriptionSingular");
                                    return r.default.createElement(
                                        o.default,
                                        {
                                            title: n ? E("currentExtension") : (0, c.getURLHost)(t),
                                            subtitle: l.length ? g : E("connectedAccountsEmptyDescription"),
                                            onClose: () => u.push(d),
                                            footerClassName: "connected-accounts__footer",
                                            footer: r.default.createElement(i.default, { permissions: p }),
                                        },
                                        r.default.createElement(s.default, { accountToConnect: e, connectAccount: a, connectedAccounts: l, selectedAddress: f, removePermittedAccount: m, setSelectedAddress: h, shouldRenderListOptions: !0 })
                                    );
                                }
                            }
                            (n.default = p),
                                d(p, "contextTypes", { t: a.default.func.isRequired }),
                                d(p, "defaultProps", { accountToConnect: null, permissions: undefined }),
                                d(p, "propTypes", {
                                    accountToConnect: a.default.object,
                                    activeTabOrigin: a.default.string.isRequired,
                                    connectAccount: a.default.func.isRequired,
                                    connectedAccounts: a.default.array.isRequired,
                                    mostRecentOverviewPage: a.default.string.isRequired,
                                    permissions: a.default.array,
                                    isActiveTabExtension: a.default.bool.isRequired,
                                    selectedAddress: a.default.string.isRequired,
                                    removePermittedAccount: a.default.func.isRequired,
                                    setSelectedAddress: a.default.func.isRequired,
                                    history: a.default.object.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6035,
            { "../../ducks/history/history": 5889, "../../helpers/utils/util": 5937, "../../selectors": 6300, "../../store/actions": 6307, "./connected-accounts.component": 6034, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../selectors"),
                                s = e("../../helpers/utils/util"),
                                i = e("../../store/actions"),
                                c = e("../../ducks/history/history"),
                                l = (a = e("./connected-accounts.component")) && a.__esModule ? a : { default: a };
                            var u = (0, r.connect)(
                                (e) => {
                                    const { activeTab: t } = e,
                                        n = (0, o.getAccountToConnectToActiveTab)(e),
                                        a = (0, o.getOrderedConnectedAccountsForActiveTab)(e),
                                        r = (0, o.getPermissionsForActiveTab)(e),
                                        i = (0, o.getSelectedAddress)(e);
                                    return {
                                        accountToConnect: n,
                                        isActiveTabExtension: (0, s.isExtensionUrl)(t),
                                        activeTabOrigin: t.origin,
                                        connectedAccounts: a,
                                        mostRecentOverviewPage: (0, c.getMostRecentOverviewPage)(e),
                                        permissions: r,
                                        selectedAddress: i,
                                    };
                                },
                                (e) => ({
                                    addPermittedAccount: (t, n) => e((0, i.addPermittedAccount)(t, n)),
                                    removePermittedAccount: (t, n) => e((0, i.removePermittedAccount)(t, n)),
                                    setSelectedAddress: (t) => e((0, i.setSelectedAddress)(t)),
                                }),
                                (e, t, n) => {
                                    const { activeTabOrigin: a } = e;
                                    return { ...n, ...e, ...t, connectAccount: (e) => t.addPermittedAccount(a, e), removePermittedAccount: (e) => t.removePermittedAccount(a, e) };
                                }
                            )(l.default);
                            n.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6036,
            { "./connected-accounts.container": 6035 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./connected-accounts.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6037,
            { "../../components/app/connected-sites-list": 5451, "../../components/ui/button": 5711, "../../components/ui/popover/popover.component": 5829, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = l(e("prop-types")),
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = l(e("../../components/app/connected-sites-list")),
                                s = l(e("../../components/ui/popover/popover.component")),
                                i = l(e("../../components/ui/button"));
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class d extends r.Component {
                                constructor(...e) {
                                    super(...e),
                                        u(this, "state", { sitePendingDisconnect: null }),
                                        u(this, "setPendingDisconnect", (e) => {
                                            this.setState({ sitePendingDisconnect: { subjectKey: e } });
                                        }),
                                        u(this, "clearPendingDisconnect", () => {
                                            this.setState({ sitePendingDisconnect: null });
                                        }),
                                        u(this, "disconnectAccount", () => {
                                            const { disconnectAccount: e } = this.props,
                                                { sitePendingDisconnect: t } = this.state;
                                            e(t.subjectKey), this.clearPendingDisconnect();
                                        }),
                                        u(this, "disconnectAllAccounts", () => {
                                            const { disconnectAllAccounts: e } = this.props,
                                                { sitePendingDisconnect: t } = this.state;
                                            e(t.subjectKey), this.clearPendingDisconnect();
                                        });
                                }
                                componentDidMount() {
                                    const { getOpenMetamaskTabsIds: e } = this.props;
                                    e();
                                }
                                renderConnectedSitesList() {
                                    return r.default.createElement(o.default, { connectedSubjects: this.props.connectedSubjects, onDisconnect: this.setPendingDisconnect });
                                }
                                renderConnectedSitesPopover() {
                                    const { accountLabel: e, closePopover: t, connectedSubjects: n, tabToConnect: a, requestAccountsPermission: o } = this.props,
                                        { t: i } = this.context;
                                    return r.default.createElement(
                                        s.default,
                                        {
                                            className: "connected-sites",
                                            title: i("connectedSites"),
                                            subtitle: n.length ? i("connectedSitesDescription", [e]) : i("connectedSitesEmptyDescription", [e]),
                                            onClose: t,
                                            footer: a ? r.default.createElement("a", { className: "connected-sites__text-button", onClick: o }, i("connectManually")) : null,
                                            footerClassName: "connected-sites__add-site-manually",
                                        },
                                        this.renderConnectedSitesList()
                                    );
                                }
                                renderDisconnectPopover() {
                                    const { closePopover: e, permittedAccountsByOrigin: t } = this.props,
                                        { t: n } = this.context,
                                        {
                                            sitePendingDisconnect: { subjectKey: a },
                                        } = this.state,
                                        o = t[a].length;
                                    return r.default.createElement(s.default, {
                                        className: "connected-sites",
                                        title: n("disconnectPrompt", [a]),
                                        subtitle: n("disconnectAllAccountsConfirmationDescription"),
                                        onClose: e,
                                        footer: r.default.createElement(
                                            r.default.Fragment,
                                            null,
                                            r.default.createElement(
                                                "div",
                                                { className: "connected-sites__footer-row" },
                                                r.default.createElement(i.default, { type: "secondary", onClick: this.clearPendingDisconnect }, n("cancel")),
                                                r.default.createElement(i.default, { type: "primary", onClick: this.disconnectAccount }, n("disconnect"))
                                            ),
                                            o > 1
                                                ? r.default.createElement(
                                                      "div",
                                                      { className: "connected-sites__footer-row" },
                                                      r.default.createElement("a", { className: "connected-sites__text-button", onClick: this.disconnectAllAccounts }, n("disconnectAllAccounts"))
                                                  )
                                                : null
                                        ),
                                        footerClassName: "connected-sites__confirmation",
                                    });
                                }
                                render() {
                                    const { sitePendingDisconnect: e } = this.state;
                                    return e ? this.renderDisconnectPopover() : this.renderConnectedSitesPopover();
                                }
                            }
                            (n.default = d),
                                u(d, "contextTypes", { t: a.default.func }),
                                u(d, "defaultProps", { tabToConnect: null }),
                                u(d, "propTypes", {
                                    accountLabel: a.default.string.isRequired,
                                    closePopover: a.default.func.isRequired,
                                    connectedSubjects: a.default.arrayOf(a.default.object).isRequired,
                                    disconnectAllAccounts: a.default.func.isRequired,
                                    disconnectAccount: a.default.func.isRequired,
                                    getOpenMetamaskTabsIds: a.default.func.isRequired,
                                    permittedAccountsByOrigin: a.default.objectOf(a.default.arrayOf(a.default.string)).isRequired,
                                    tabToConnect: a.default.object,
                                    requestAccountsPermission: a.default.func.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6038,
            { "../../ducks/history/history": 5889, "../../helpers/constants/routes": 5904, "../../selectors": 6300, "../../store/actions": 6307, "./connected-sites.component": 6037, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../store/actions"),
                                s = e("../../selectors"),
                                i = e("../../helpers/constants/routes"),
                                c = e("../../ducks/history/history"),
                                l = (a = e("./connected-sites.component")) && a.__esModule ? a : { default: a };
                            var u = (0, r.connect)(
                                (e) => {
                                    var t;
                                    const { openMetaMaskTabs: n } = e.appState,
                                        { id: a } = e.activeTab,
                                        r = (0, s.getConnectedSubjectsForSelectedAddress)(e),
                                        o = (0, s.getOriginOfCurrentTab)(e),
                                        i = (0, s.getPermittedAccountsByOrigin)(e),
                                        l = (0, s.getSelectedAddress)(e),
                                        u = !(null !== (t = i[o]) && void 0 !== t && t.length);
                                    let d;
                                    return (
                                        o && u && !n[a] && (d = { origin: o }),
                                        {
                                            accountLabel: (0, s.getCurrentAccountWithSendEtherInfo)(e).name,
                                            connectedSubjects: r,
                                            subjects: (0, s.getPermissionSubjects)(e),
                                            mostRecentOverviewPage: (0, c.getMostRecentOverviewPage)(e),
                                            permittedAccountsByOrigin: i,
                                            selectedAddress: l,
                                            tabToConnect: d,
                                        }
                                    );
                                },
                                (e) => ({
                                    getOpenMetamaskTabsIds: () => e((0, o.getOpenMetamaskTabsIds)()),
                                    disconnectAccount: (t, n) => {
                                        e((0, o.removePermittedAccount)(t, n));
                                    },
                                    disconnectAllAccounts: (t, n) => {
                                        const a = Object.values(n.permissions).map(({ parentCapability: e }) => e);
                                        e((0, o.removePermissionsFor)({ [t]: a }));
                                    },
                                    requestAccountsPermissionWithId: (t) => e((0, o.requestAccountsPermissionWithId)(t)),
                                }),
                                (e, t, n) => {
                                    const { connectedSubjects: a, subjects: r, mostRecentOverviewPage: o, selectedAddress: s, tabToConnect: c } = e,
                                        { disconnectAccount: l, disconnectAllAccounts: u, requestAccountsPermissionWithId: d } = t,
                                        { history: p } = n,
                                        f = () => p.push(o);
                                    return {
                                        ...n,
                                        ...e,
                                        ...t,
                                        closePopover: f,
                                        disconnectAccount: (e) => {
                                            l(e, s), 1 === a.length && f();
                                        },
                                        disconnectAllAccounts: (e) => {
                                            u(e, r[e]), 1 === a.length && f();
                                        },
                                        requestAccountsPermission: async () => {
                                            const e = await d(c.origin);
                                            p.push(`${i.CONNECT_ROUTE}/${e}`);
                                        },
                                    };
                                }
                            )(l.default);
                            n.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6039,
            { "./connected-sites.container": 6038 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./connected-sites.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            604,
            { "./DialogContentText": 603, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./DialogContentText"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6040,
            {
                "../../../../shared/constants/hardware-wallets": 5330,
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../components/ui/check-box": 5717,
                "../../../components/ui/dropdown": 5735,
                "../../../helpers/utils/util": 5937,
                "@metamask/etherscan-link": 1158,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = f(e("prop-types")),
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = e("@metamask/etherscan-link"),
                                s = f(e("../../../components/ui/button")),
                                i = f(e("../../../components/ui/check-box")),
                                c = f(e("../../../components/ui/dropdown")),
                                l = e("../../../helpers/utils/util"),
                                u = e("../../../../shared/constants/hardware-wallets"),
                                d = e("../../../../shared/constants/metametrics");
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class h extends r.Component {
                                constructor(...e) {
                                    super(...e),
                                        m(this, "state", { pathValue: null }),
                                        m(this, "goToNextPage", () => {
                                            5 === this.props.accounts.length ? this.props.getPage(this.props.device, 1, this.props.selectedPath) : this.props.onAccountRestriction();
                                        }),
                                        m(this, "goToPreviousPage", () => {
                                            this.props.getPage(this.props.device, -1, this.props.selectedPath);
                                        });
                                }
                                setPath(e) {
                                    this.setState({ pathValue: e });
                                }
                                renderHdPathSelector() {
                                    const { device: e, selectedPath: t, hdPaths: n, onPathChange: a } = this.props,
                                        { pathValue: o } = this.state;
                                    return r.default.createElement(
                                        "div",
                                        null,
                                        r.default.createElement("h3", { className: "hw-connect__hdPath__title" }, this.context.t("selectHdPath")),
                                        r.default.createElement("p", { className: "hw-connect__msg" }, this.context.t("selectPathHelp")),
                                        r.default.createElement(
                                            "div",
                                            { className: "hw-connect__hdPath" },
                                            r.default.createElement(c.default, {
                                                className: "hw-connect__hdPath__select",
                                                options: n[e.toLowerCase()],
                                                selectedOption: o || t,
                                                onChange: (e) => {
                                                    this.setPath(e), a(e);
                                                },
                                            })
                                        )
                                    );
                                }
                                capitalizeDevice(e) {
                                    return e.slice(0, 1).toUpperCase() + e.slice(1);
                                }
                                renderHeader() {
                                    const { device: e } = this.props,
                                        t = [u.DEVICE_NAMES.LEDGER, u.DEVICE_NAMES.LATTICE, u.DEVICE_NAMES.TREZOR].includes(e.toLowerCase());
                                    return r.default.createElement(
                                        "div",
                                        { className: "hw-connect" },
                                        r.default.createElement("h3", { className: "hw-connect__unlock-title" }, this.context.t("selectAnAccount")),
                                        t ? this.renderHdPathSelector() : null,
                                        r.default.createElement("h3", { className: "hw-connect__hdPath__title" }, this.context.t("selectAnAccount"))
                                    );
                                }
                                renderAccounts() {
                                    const { accounts: e, connectedAccounts: t, rpcPrefs: n, chainId: a } = this.props;
                                    return r.default.createElement(
                                        "div",
                                        { className: "hw-account-list" },
                                        e.map((e, s) => {
                                            const c = t.includes(e.address.toLowerCase()),
                                                u = e.index,
                                                p = this.props.selectedAccounts.includes(e.index) || c;
                                            return r.default.createElement(
                                                "div",
                                                { className: "hw-account-list__item", key: e.address, title: c ? this.context.t("selectAnAccountAlreadyConnected") : "" },
                                                r.default.createElement(
                                                    "div",
                                                    { className: "hw-account-list__item__checkbox" },
                                                    r.default.createElement(i.default, {
                                                        id: `address-${s}`,
                                                        checked: p,
                                                        disabled: c,
                                                        onClick: () => {
                                                            this.props.onAccountChange(u);
                                                        },
                                                    }),
                                                    r.default.createElement(
                                                        "label",
                                                        { className: "hw-account-list__item__label", htmlFor: `address-${s}` },
                                                        r.default.createElement("span", { className: "hw-account-list__item__index" }, e.index + 1),
                                                        `${e.address.slice(0, 4)}...${e.address.slice(-4)}`,
                                                        r.default.createElement("span", { className: "hw-account-list__item__balance" }, `${e.balance}`)
                                                    )
                                                ),
                                                r.default.createElement(
                                                    "a",
                                                    {
                                                        className: "hw-account-list__item__link",
                                                        onClick: () => {
                                                            const t = (0, o.getAccountLink)(e.address, a, n);
                                                            this.context.trackEvent({
                                                                category: d.EVENT.CATEGORIES.ACCOUNTS,
                                                                event: "Clicked Block Explorer Link",
                                                                properties: { actions: "Hardware Connect", link_type: "Account Tracker", block_explorer_domain: (0, l.getURLHostName)(t) },
                                                            }),
                                                                global.platform.openTab({ url: t });
                                                        },
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: this.context.t("etherscanView"),
                                                    },
                                                    r.default.createElement("i", { className: "fa fa-share-square", style: { color: "var(--color-icon-default)" } })
                                                )
                                            );
                                        })
                                    );
                                }
                                renderPagination() {
                                    return r.default.createElement(
                                        "div",
                                        { className: "hw-list-pagination" },
                                        r.default.createElement("button", { className: "hw-list-pagination__button", onClick: this.goToPreviousPage }, `< ${this.context.t("prev")}`),
                                        r.default.createElement("button", { className: "hw-list-pagination__button", onClick: this.goToNextPage }, `${this.context.t("next")} >`)
                                    );
                                }
                                renderButtons() {
                                    const e = 0 === this.props.selectedAccounts.length;
                                    return (
                                        e && ({}.disabled = !0),
                                        r.default.createElement(
                                            "div",
                                            { className: "new-external-account-form__buttons" },
                                            r.default.createElement(s.default, { type: "secondary", large: !0, className: "new-external-account-form__button", onClick: this.props.onCancel.bind(this) }, this.context.t("cancel")),
                                            r.default.createElement(
                                                s.default,
                                                { type: "primary", large: !0, className: "new-external-account-form__button unlock", disabled: e, onClick: this.props.onUnlockAccounts.bind(this, this.props.device, this.props.selectedPath) },
                                                this.context.t("unlock")
                                            )
                                        )
                                    );
                                }
                                renderForgetDevice() {
                                    return r.default.createElement(
                                        "div",
                                        { className: "hw-forget-device-container" },
                                        r.default.createElement("a", { onClick: this.props.onForgetDevice.bind(this, this.props.device) }, this.context.t("forgetDevice"))
                                    );
                                }
                                render() {
                                    return r.default.createElement(
                                        "div",
                                        { className: "new-external-account-form account-list" },
                                        this.renderHeader(),
                                        this.renderAccounts(),
                                        this.renderPagination(),
                                        this.renderButtons(),
                                        this.renderForgetDevice()
                                    );
                                }
                            }
                            (h.propTypes = {
                                onPathChange: a.default.func.isRequired,
                                selectedPath: a.default.string.isRequired,
                                device: a.default.string.isRequired,
                                accounts: a.default.array.isRequired,
                                connectedAccounts: a.default.array.isRequired,
                                onAccountChange: a.default.func.isRequired,
                                onForgetDevice: a.default.func.isRequired,
                                getPage: a.default.func.isRequired,
                                chainId: a.default.string,
                                rpcPrefs: a.default.object,
                                selectedAccounts: a.default.array.isRequired,
                                onUnlockAccounts: a.default.func,
                                onCancel: a.default.func,
                                onAccountRestriction: a.default.func,
                                hdPaths: a.default.array.isRequired,
                            }),
                                (h.contextTypes = { t: a.default.func, trackEvent: a.default.func });
                            var E = h;
                            n.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6041,
            {
                "../../../../shared/constants/hardware-wallets": 5330,
                "../../../../shared/constants/metametrics": 5332,
                "../../../../shared/constants/time": 5338,
                "../../../ducks/history/history": 5889,
                "../../../helpers/constants/zendesk-url": 5907,
                "../../../helpers/utils/util": 5937,
                "../../../selectors": 6300,
                "../../../store/actions": 6307,
                "./account-list": 6040,
                "./select-hardware": 6042,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = _(e("react")),
                                r = E(e("prop-types")),
                                o = e("react-redux"),
                                s = _(e("../../../store/actions")),
                                i = e("../../../selectors"),
                                c = e("../../../helpers/utils/util"),
                                l = e("../../../ducks/history/history"),
                                u = e("../../../../shared/constants/metametrics"),
                                d = e("../../../../shared/constants/time"),
                                p = e("../../../../shared/constants/hardware-wallets"),
                                f = E(e("../../../helpers/constants/zendesk-url")),
                                m = E(e("./select-hardware")),
                                h = E(e("./account-list"));
                            function E(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function g(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (g = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function _(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var n = g(t);
                                if (n && n.has(e)) return n.get(e);
                                var a = {},
                                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                    }
                                return (a.default = e), n && n.set(e, a), a;
                            }
                            function y(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            const v = "U2F",
                                b = "m/44'/60'/0'",
                                T = "m/44'/60'/0'/0",
                                k = "m/44'/60'/0'/0/x",
                                N = "m/44'/60'/x'/0/0",
                                w = "m/44'/60'/0'/x",
                                O = {
                                    ledger: [
                                        { name: "Ledger Live", value: "m/44'/60'/0'/0/0" },
                                        { name: "Legacy (MEW / MyCrypto)", value: b },
                                        { name: "BIP44 Standard (e.g. MetaMask, Trezor)", value: T },
                                    ],
                                    lattice: [
                                        { name: "Standard (m/44'/60'/0'/0/x)", value: k },
                                        { name: "Ledger Live (m/44'/60'/x'/0/0)", value: N },
                                        { name: "Ledger Legacy (m/44'/60'/0'/x)", value: w },
                                    ],
                                    trezor: [
                                        { name: "BIP44 Standard (e.g. MetaMask, Trezor)", value: T },
                                        { name: "Trezor Testnets", value: "m/44'/1'/0'/0" },
                                    ],
                                };
                            class P extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        y(this, "state", { error: null, selectedAccounts: [], accounts: [], browserSupported: !0, unlocked: !1, device: null }),
                                        y(this, "connectToHardwareWallet", (e) => {
                                            this.setState({ device: e }), this.state.accounts.length || this.getPage(e, 0, this.props.defaultHdPaths[e]);
                                        }),
                                        y(this, "onPathChange", (e) => {
                                            this.props.setHardwareWalletDefaultHdPath({ device: this.state.device, path: e }), this.setState({ selectedAccounts: [] }), this.getPage(this.state.device, 0, e);
                                        }),
                                        y(this, "onAccountChange", (e) => {
                                            let { selectedAccounts: t } = this.state;
                                            t.includes(e) ? (t = t.filter((t) => e !== t)) : t.push(e), this.setState({ selectedAccounts: t, error: null });
                                        }),
                                        y(this, "onAccountRestriction", () => {
                                            this.setState({ error: this.context.t("ledgerAccountRestriction") });
                                        }),
                                        y(this, "getPage", (e, t, n) => {
                                            this.props
                                                .connectHardware(e, t, n, this.context.t)
                                                .then((t) => {
                                                    if (t.length) {
                                                        0 !== this.state.accounts.length || this.state.unlocked || this.showTemporaryAlert();
                                                        const n = t.map((e) => {
                                                            var t;
                                                            const n = e.address.toLowerCase(),
                                                                a = (null === (t = this.props.accounts[n]) || void 0 === t ? void 0 : t.balance) || null;
                                                            return (e.balance = a ? (0, c.formatBalance)(a, 6) : "..."), e;
                                                        });
                                                        this.setState({ accounts: n, unlocked: !0, device: e, error: null });
                                                    }
                                                })
                                                .catch((e) => {
                                                    const t = "string" == typeof e ? e : e.message;
                                                    "Window blocked" === t
                                                        ? this.setState({ browserSupported: !1, error: null })
                                                        : t.includes(v)
                                                        ? this.setState({ error: v })
                                                        : "LEDGER_LOCKED" === t || "LEDGER_WRONG_APP" === t
                                                        ? this.setState({ error: this.context.t("ledgerLocked") })
                                                        : t.includes("timeout")
                                                        ? this.setState({ error: this.context.t("ledgerTimeout") })
                                                        : t.toLowerCase().includes("KeystoneError#pubkey_account.no_expected_account".toLowerCase())
                                                        ? this.setState({ error: this.context.t("QRHardwarePubkeyAccountOutOfRange") })
                                                        : "Window closed" !== t && "Popup closed" !== t && !1 === t.toLowerCase().includes("KeystoneError#sync_cancel".toLowerCase()) && this.setState({ error: t });
                                                });
                                        }),
                                        y(this, "onForgetDevice", (e) => {
                                            this.props
                                                .forgetDevice(e)
                                                .then((e) => {
                                                    this.setState({ error: null, selectedAccounts: [], accounts: [], unlocked: !1 });
                                                })
                                                .catch((e) => {
                                                    this.setState({ error: e.message });
                                                });
                                        }),
                                        y(this, "onUnlockAccounts", (e, t) => {
                                            const { history: n, mostRecentOverviewPage: a, unlockHardwareWalletAccounts: r } = this.props,
                                                { selectedAccounts: o } = this.state;
                                            0 === o.length && this.setState({ error: this.context.t("accountSelectionRequired") });
                                            const s = b === t ? this.context.t("hardwareWalletLegacyDescription") : "";
                                            return r(o, e, t || null, s)
                                                .then((t) => {
                                                    this.context.trackEvent({
                                                        category: u.EVENT.CATEGORIES.ACCOUNTS,
                                                        event: u.EVENT_NAMES.ACCOUNT_ADDED,
                                                        properties: { account_type: u.EVENT.ACCOUNT_TYPES.HARDWARE, account_hardware_type: e },
                                                    }),
                                                        n.push(a);
                                                })
                                                .catch((t) => {
                                                    this.context.trackEvent({
                                                        category: u.EVENT.CATEGORIES.ACCOUNTS,
                                                        event: u.EVENT_NAMES.ACCOUNT_ADD_FAILED,
                                                        properties: { account_type: u.EVENT.ACCOUNT_TYPES.HARDWARE, account_hardware_type: e, error: t.message },
                                                    }),
                                                        this.setState({ error: t.message });
                                                });
                                        }),
                                        y(this, "onCancel", () => {
                                            const { history: e, mostRecentOverviewPage: t } = this.props;
                                            e.push(t);
                                        });
                                }
                                UNSAFE_componentWillReceiveProps(e) {
                                    const { accounts: t } = e,
                                        n = this.state.accounts.map((e) => {
                                            var n;
                                            const a = e.address.toLowerCase(),
                                                r = (null === (n = t[a]) || void 0 === n ? void 0 : n.balance) || null;
                                            return (e.balance = r ? (0, c.formatBalance)(r, 6) : "..."), e;
                                        });
                                    this.setState({ accounts: n });
                                }
                                componentDidMount() {
                                    this.checkIfUnlocked();
                                }
                                async checkIfUnlocked() {
                                    for (const e of [p.DEVICE_NAMES.TREZOR, p.DEVICE_NAMES.LEDGER, p.DEVICE_NAMES.LATTICE]) {
                                        const t = this.props.defaultHdPaths[e];
                                        (await this.props.checkHardwareStatus(e, t)) && (this.setState({ unlocked: !0 }), this.getPage(e, 0, t));
                                    }
                                }
                                showTemporaryAlert() {
                                    this.props.showAlert(this.context.t("hardwareWalletConnected")),
                                        setTimeout((e) => {
                                            this.props.hideAlert();
                                        }, 5 * d.SECOND);
                                }
                                renderError() {
                                    return this.state.error === v
                                        ? a.default.createElement(
                                              "p",
                                              { className: "hw-connect__error" },
                                              this.context.t("troubleConnectingToWallet", [
                                                  this.state.device,
                                                  a.default.createElement(
                                                      "a",
                                                      {
                                                          href: f.default.HARDWARE_CONNECTION,
                                                          key: "hardware-connection-guide",
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          className: "hw-connect__link",
                                                          style: { marginLeft: "5px", marginRight: "5px" },
                                                      },
                                                      this.context.t("walletConnectionGuide")
                                                  ),
                                              ])
                                          )
                                        : this.state.error
                                        ? a.default.createElement("span", { className: "hw-connect__error" }, this.state.error)
                                        : null;
                                }
                                renderContent() {
                                    return this.state.accounts.length
                                        ? a.default.createElement(h.default, {
                                              onPathChange: this.onPathChange,
                                              selectedPath: this.props.defaultHdPaths[this.state.device],
                                              device: this.state.device,
                                              accounts: this.state.accounts,
                                              connectedAccounts: this.props.connectedAccounts,
                                              selectedAccounts: this.state.selectedAccounts,
                                              onAccountChange: this.onAccountChange,
                                              chainId: this.props.chainId,
                                              rpcPrefs: this.props.rpcPrefs,
                                              getPage: this.getPage,
                                              onUnlockAccounts: this.onUnlockAccounts,
                                              onForgetDevice: this.onForgetDevice,
                                              onCancel: this.onCancel,
                                              onAccountRestriction: this.onAccountRestriction,
                                              hdPaths: O,
                                          })
                                        : a.default.createElement(m.default, { connectToHardwareWallet: this.connectToHardwareWallet, browserSupported: this.state.browserSupported, ledgerTransportType: this.props.ledgerTransportType });
                                }
                                render() {
                                    return a.default.createElement(a.default.Fragment, null, this.renderError(), this.renderContent());
                                }
                            }
                            y(P, "contextTypes", { t: r.default.func }),
                                (P.propTypes = {
                                    connectHardware: r.default.func,
                                    checkHardwareStatus: r.default.func,
                                    forgetDevice: r.default.func,
                                    showAlert: r.default.func,
                                    hideAlert: r.default.func,
                                    unlockHardwareWalletAccounts: r.default.func,
                                    setHardwareWalletDefaultHdPath: r.default.func,
                                    history: r.default.object,
                                    chainId: r.default.string,
                                    rpcPrefs: r.default.object,
                                    accounts: r.default.object,
                                    connectedAccounts: r.default.array.isRequired,
                                    defaultHdPaths: r.default.object,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    ledgerTransportType: r.default.oneOf(Object.values(p.LEDGER_TRANSPORT_TYPES)),
                                });
                            P.contextTypes = { t: r.default.func, trackEvent: r.default.func };
                            var A = (0, o.connect)(
                                (e) => ({
                                    chainId: (0, i.getCurrentChainId)(e),
                                    rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e),
                                    accounts: (0, i.getMetaMaskAccounts)(e),
                                    connectedAccounts: (0, i.getMetaMaskAccountsConnected)(e),
                                    defaultHdPaths: e.appState.defaultHdPaths,
                                    mostRecentOverviewPage: (0, l.getMostRecentOverviewPage)(e),
                                    ledgerTransportType: e.metamask.ledgerTransportType,
                                }),
                                (e) => ({
                                    setHardwareWalletDefaultHdPath: ({ device: t, path: n }) => e(s.setHardwareWalletDefaultHdPath({ device: t, path: n })),
                                    connectHardware: (t, n, a, r) => e(s.connectHardware(t, n, a, r)),
                                    checkHardwareStatus: (t, n) => e(s.checkHardwareStatus(t, n)),
                                    forgetDevice: (t) => e(s.forgetDevice(t)),
                                    unlockHardwareWalletAccounts: (t, n, a, r) => e(s.unlockHardwareWalletAccounts(t, n, a, r)),
                                    showAlert: (t) => e(s.showAlert(t)),
                                    hideAlert: () => e(s.hideAlert()),
                                })
                            )(P);
                            n.default = A;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6042,
            {
                "../../../../shared/constants/hardware-wallets": 5330,
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../components/ui/logo/logo-lattice": 5802,
                "../../../components/ui/logo/logo-ledger": 5803,
                "../../../components/ui/logo/logo-qr-based": 5805,
                "../../../components/ui/logo/logo-trezor": 5807,
                "../../../helpers/constants/zendesk-url": 5907,
                classnames: 1772,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = h(e("classnames")),
                                r = h(e("prop-types")),
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = m(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                s = h(e("../../../components/ui/button")),
                                i = h(e("../../../components/ui/logo/logo-ledger")),
                                c = h(e("../../../components/ui/logo/logo-qr-based")),
                                l = h(e("../../../components/ui/logo/logo-trezor")),
                                u = h(e("../../../components/ui/logo/logo-lattice")),
                                d = e("../../../../shared/constants/hardware-wallets"),
                                p = h(e("../../../helpers/constants/zendesk-url")),
                                f = e("../../../../shared/constants/metametrics");
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E() {
                                return (
                                    (E = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = arguments[t];
                                                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                              }
                                              return e;
                                          }),
                                    E.apply(this, arguments)
                                );
                            }
                            function g(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class _ extends o.Component {
                                constructor(...e) {
                                    super(...e), g(this, "state", { selectedDevice: null }), g(this, "connect", () => (this.state.selectedDevice && this.props.connectToHardwareWallet(this.state.selectedDevice), null));
                                }
                                renderConnectToTrezorButton() {
                                    return o.default.createElement(
                                        "button",
                                        { className: (0, a.default)("hw-connect__btn", { selected: this.state.selectedDevice === d.DEVICE_NAMES.TREZOR }), onClick: (e) => this.setState({ selectedDevice: d.DEVICE_NAMES.TREZOR }) },
                                        o.default.createElement(l.default, { className: "hw-connect__btn__img", ariaLabel: "Trezor" })
                                    );
                                }
                                renderConnectToLatticeButton() {
                                    return o.default.createElement(
                                        "button",
                                        { className: (0, a.default)("hw-connect__btn", { selected: this.state.selectedDevice === d.DEVICE_NAMES.LATTICE }), onClick: (e) => this.setState({ selectedDevice: d.DEVICE_NAMES.LATTICE }) },
                                        o.default.createElement(u.default, { className: "hw-connect__btn__img", ariaLabel: "Lattice" })
                                    );
                                }
                                renderConnectToLedgerButton() {
                                    return o.default.createElement(
                                        "button",
                                        { className: (0, a.default)("hw-connect__btn", { selected: this.state.selectedDevice === d.DEVICE_NAMES.LEDGER }), onClick: (e) => this.setState({ selectedDevice: d.DEVICE_NAMES.LEDGER }) },
                                        o.default.createElement(i.default, { className: "hw-connect__btn__img", ariaLabel: "Ledger" })
                                    );
                                }
                                renderConnectToQRButton() {
                                    return o.default.createElement(
                                        "button",
                                        { className: (0, a.default)("hw-connect__btn", { selected: this.state.selectedDevice === d.DEVICE_NAMES.QR }), onClick: (e) => this.setState({ selectedDevice: d.DEVICE_NAMES.QR }) },
                                        o.default.createElement(c.default, { className: "hw-connect__btn__img", ariaLabel: "QRCode" })
                                    );
                                }
                                renderButtons() {
                                    return o.default.createElement(
                                        o.default.Fragment,
                                        null,
                                        o.default.createElement("div", { className: "hw-connect__btn-wrapper" }, this.renderConnectToLedgerButton(), this.renderConnectToTrezorButton()),
                                        o.default.createElement("div", { className: "hw-connect__btn-wrapper", style: { margin: "10px 0 0 0" } }, this.renderConnectToLatticeButton(), this.renderConnectToQRButton())
                                    );
                                }
                                renderContinueButton() {
                                    return o.default.createElement(s.default, { type: "primary", large: !0, className: "hw-connect__connect-btn", onClick: this.connect, disabled: !this.state.selectedDevice }, this.context.t("continue"));
                                }
                                renderUnsupportedBrowser() {
                                    return o.default.createElement(
                                        "div",
                                        { className: "new-external-account-form unsupported-browser" },
                                        o.default.createElement(
                                            "div",
                                            { className: "hw-connect" },
                                            o.default.createElement("h3", { className: "hw-connect__title" }, this.context.t("browserNotSupported")),
                                            o.default.createElement("p", { className: "hw-connect__msg" }, this.context.t("chromeRequiredForHardwareWallets"))
                                        ),
                                        o.default.createElement(s.default, { type: "primary", large: !0, onClick: () => global.platform.openTab({ url: "https://google.com/chrome" }) }, this.context.t("downloadGoogleChrome"))
                                    );
                                }
                                renderHeader() {
                                    return o.default.createElement(
                                        "div",
                                        { className: "hw-connect__header" },
                                        o.default.createElement("h3", { className: "hw-connect__header__title" }, this.context.t("hardwareWallets")),
                                        o.default.createElement("p", { className: "hw-connect__header__msg" }, this.context.t("hardwareWalletsMsg"))
                                    );
                                }
                                renderTutorialsteps() {
                                    switch (this.state.selectedDevice) {
                                        case d.DEVICE_NAMES.LEDGER:
                                            return this.renderLedgerTutorialSteps();
                                        case d.DEVICE_NAMES.TREZOR:
                                            return this.renderTrezorTutorialSteps();
                                        case d.DEVICE_NAMES.LATTICE:
                                            return this.renderLatticeTutorialSteps();
                                        case d.DEVICE_NAMES.QR:
                                            return this.renderQRHardwareWalletSteps();
                                        default:
                                            return "";
                                    }
                                }
                                renderLedgerTutorialSteps() {
                                    const e = [];
                                    return (
                                        this.props.ledgerTransportType === d.LEDGER_TRANSPORT_TYPES.LIVE &&
                                            e.push({
                                                title: this.context.t("step1LedgerWallet"),
                                                message: this.context.t("step1LedgerWalletMsg", [
                                                    o.default.createElement(
                                                        "a",
                                                        { className: "hw-connect__msg-link", href: "https://www.ledger.com/ledger-live", rel: "noopener noreferrer", target: "_blank", key: "ledger-live-app-link" },
                                                        this.context.t("ledgerLiveApp")
                                                    ),
                                                ]),
                                            }),
                                        e.push({
                                            asset: "plug-in-wallet",
                                            dimensions: { width: "225px", height: "75px" },
                                            title: this.context.t("step2LedgerWallet"),
                                            message: this.context.t("step2LedgerWalletMsg", [
                                                o.default.createElement(
                                                    "a",
                                                    { className: "hw-connect__msg-link", href: p.default.HARDWARE_CONNECTION, rel: "noopener noreferrer", target: "_blank", key: "ledger-support-link" },
                                                    this.context.t("hardwareWalletSupportLinkConversion")
                                                ),
                                            ]),
                                        }),
                                        o.default.createElement(
                                            "div",
                                            { className: "hw-tutorial" },
                                            e.map((e, t) =>
                                                o.default.createElement(
                                                    "div",
                                                    { className: "hw-connect", key: t },
                                                    o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn-first",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Ledger Buy Now" }), window.open(d.AFFILIATE_LINKS.LEDGER, "_blank");
                                                            },
                                                        },
                                                        this.context.t("buyNow")
                                                    ),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Ledger Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.LEDGER, "_blank");
                                                            },
                                                        },
                                                        this.context.t("tutorial")
                                                    ),
                                                    o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                                                    e.asset && o.default.createElement("img", E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" }))
                                                )
                                            )
                                        )
                                    );
                                }
                                renderLatticeTutorialSteps() {
                                    const e = [
                                        {
                                            asset: "connect-lattice",
                                            dimensions: { width: "225px", height: "75px" },
                                            title: this.context.t("step1LatticeWallet"),
                                            message: this.context.t("step1LatticeWalletMsg", [
                                                o.default.createElement(
                                                    "a",
                                                    { className: "hw-connect__msg-link", href: p.default.HARDWARE_CONNECTION, rel: "noopener noreferrer", target: "_blank", key: "lattice-setup-link" },
                                                    this.context.t("hardwareWalletSupportLinkConversion")
                                                ),
                                            ]),
                                        },
                                    ];
                                    return o.default.createElement(
                                        "div",
                                        { className: "hw-tutorial" },
                                        e.map((e, t) =>
                                            o.default.createElement(
                                                "div",
                                                { className: "hw-connect", key: t },
                                                o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                                                o.default.createElement(
                                                    s.default,
                                                    {
                                                        className: "hw-connect__external-btn-first",
                                                        type: "secondary",
                                                        onClick: () => {
                                                            this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked GridPlus Buy Now" }), window.open(d.AFFILIATE_LINKS.GRIDPLUS, "_blank");
                                                        },
                                                    },
                                                    this.context.t("buyNow")
                                                ),
                                                o.default.createElement(
                                                    s.default,
                                                    {
                                                        className: "hw-connect__external-btn",
                                                        type: "secondary",
                                                        onClick: () => {
                                                            this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked GidPlus Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.GRIDPLUS, "_blank");
                                                        },
                                                    },
                                                    this.context.t("tutorial")
                                                ),
                                                o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                                                e.asset && o.default.createElement("img", E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" }))
                                            )
                                        )
                                    );
                                }
                                renderTrezorTutorialSteps() {
                                    const e = [
                                        {
                                            asset: "plug-in-wallet",
                                            dimensions: { width: "225px", height: "75px" },
                                            title: this.context.t("step1TrezorWallet"),
                                            message: this.context.t("step1TrezorWalletMsg", [
                                                o.default.createElement(
                                                    "a",
                                                    { className: "hw-connect__msg-link", href: p.default.HARDWARE_CONNECTION, rel: "noopener noreferrer", target: "_blank", key: "trezor-support-link" },
                                                    this.context.t("hardwareWalletSupportLinkConversion")
                                                ),
                                            ]),
                                        },
                                    ];
                                    return o.default.createElement(
                                        "div",
                                        { className: "hw-tutorial" },
                                        e.map((e, t) =>
                                            o.default.createElement(
                                                "div",
                                                { className: "hw-connect", key: t },
                                                o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                                                o.default.createElement(
                                                    s.default,
                                                    {
                                                        className: "hw-connect__external-btn-first",
                                                        type: "secondary",
                                                        onClick: () => {
                                                            this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Trezor Buy Now" }), window.open(d.AFFILIATE_LINKS.TREZOR, "_blank");
                                                        },
                                                    },
                                                    this.context.t("buyNow")
                                                ),
                                                o.default.createElement(
                                                    s.default,
                                                    {
                                                        className: "hw-connect__external-btn",
                                                        type: "secondary",
                                                        onClick: () => {
                                                            this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Trezor Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.TREZOR, "_blank");
                                                        },
                                                    },
                                                    this.context.t("tutorial")
                                                ),
                                                o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                                                e.asset && o.default.createElement("img", E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" }))
                                            )
                                        )
                                    );
                                }
                                renderQRHardwareWalletSteps() {
                                    const e = [];
                                    return (
                                        e.push(
                                            { title: this.context.t("QRHardwareWalletSteps1Title"), message: this.context.t("QRHardwareWalletSteps1Description") },
                                            {
                                                message: o.default.createElement(
                                                    o.default.Fragment,
                                                    null,
                                                    o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("keystone")),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn-first",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Keystone Buy Now" }), window.open(d.AFFILIATE_LINKS.KEYSTONE, "_blank");
                                                            },
                                                        },
                                                        this.context.t("buyNow")
                                                    ),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked Keystone Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.KEYSTONE, "_blank");
                                                            },
                                                        },
                                                        this.context.t("tutorial")
                                                    )
                                                ),
                                            },
                                            {
                                                message: o.default.createElement(
                                                    o.default.Fragment,
                                                    null,
                                                    o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("airgapVault")),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn-first",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked AirGap Vault Buy Now" }), window.open(d.AFFILIATE_LINKS.AIRGAP, "_blank");
                                                            },
                                                        },
                                                        this.context.t("downloadNow")
                                                    ),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked AirGap Vault Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.AIRGAP, "_blank");
                                                            },
                                                        },
                                                        this.context.t("tutorial")
                                                    )
                                                ),
                                            },
                                            {
                                                message: o.default.createElement(
                                                    o.default.Fragment,
                                                    null,
                                                    o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("coolWallet")),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn-first",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked CoolWallet Buy Now" }), window.open(d.AFFILIATE_LINKS.COOLWALLET, "_blank");
                                                            },
                                                        },
                                                        this.context.t("buyNow")
                                                    ),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked CoolWallet Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.COOLWALLET, "_blank");
                                                            },
                                                        },
                                                        this.context.t("tutorial")
                                                    )
                                                ),
                                            },
                                            {
                                                message: o.default.createElement(
                                                    o.default.Fragment,
                                                    null,
                                                    o.default.createElement("p", { className: "hw-connect__QR-subtitle" }, this.context.t("dcent")),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn-first",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked DCent Buy Now" }), window.open(d.AFFILIATE_LINKS.DCENT, "_blank");
                                                            },
                                                        },
                                                        this.context.t("buyNow")
                                                    ),
                                                    o.default.createElement(
                                                        s.default,
                                                        {
                                                            className: "hw-connect__external-btn",
                                                            type: "secondary",
                                                            onClick: () => {
                                                                this.context.trackEvent({ category: f.EVENT.CATEGORIES.NAVIGATION, event: "Clicked DCent Tutorial" }), window.open(d.AFFILIATE_TUTORIAL_LINKS.DCENT, "_blank");
                                                            },
                                                        },
                                                        this.context.t("tutorial")
                                                    )
                                                ),
                                            },
                                            { message: this.context.t("QRHardwareWalletSteps2Description") },
                                            { asset: "qrcode-wallet-demo", dimensions: { width: "225px", height: "75px" } }
                                        ),
                                        o.default.createElement(
                                            "div",
                                            { className: "hw-tutorial" },
                                            e.map((e, t) =>
                                                o.default.createElement(
                                                    "div",
                                                    { className: "hw-connect", key: t },
                                                    e.title && o.default.createElement("h3", { className: "hw-connect__title" }, e.title),
                                                    o.default.createElement("p", { className: "hw-connect__msg" }, e.message),
                                                    e.asset && o.default.createElement("img", E({ className: "hw-connect__step-asset", src: `images/${e.asset}.svg` }, e.dimensions, { alt: "" }))
                                                )
                                            )
                                        )
                                    );
                                }
                                renderConnectScreen() {
                                    return o.default.createElement(
                                        "div",
                                        { className: "new-external-account-form" },
                                        this.renderHeader(),
                                        this.renderButtons(),
                                        this.state.selectedDevice ? this.renderTutorialsteps() : null,
                                        this.renderContinueButton()
                                    );
                                }
                                render() {
                                    return this.props.browserSupported ? this.renderConnectScreen() : this.renderUnsupportedBrowser();
                                }
                            }
                            (n.default = _),
                                g(_, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                g(_, "propTypes", { connectToHardwareWallet: r.default.func.isRequired, browserSupported: r.default.bool.isRequired, ledgerTransportType: r.default.oneOf(Object.values(d.LEDGER_TRANSPORT_TYPES)) });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6043,
            { "../../helpers/constants/routes": 5904, "./connect-hardware": 6041, "./import-account": 6044, "./new-account.container": 6049, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-router-dom"),
                                o = e("../../helpers/constants/routes"),
                                s = l(e("./new-account.container")),
                                i = l(e("./import-account")),
                                c = l(e("./connect-hardware"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            class d extends a.Component {
                                render() {
                                    return a.default.createElement(
                                        "div",
                                        { className: "new-account" },
                                        a.default.createElement(
                                            "div",
                                            { className: "new-account__form" },
                                            a.default.createElement(
                                                r.Switch,
                                                null,
                                                a.default.createElement(r.Route, { exact: !0, path: o.NEW_ACCOUNT_ROUTE, component: s.default }),
                                                a.default.createElement(r.Route, { exact: !0, path: o.IMPORT_ACCOUNT_ROUTE, component: i.default }),
                                                a.default.createElement(r.Route, { exact: !0, path: o.CONNECT_HARDWARE_ROUTE, component: c.default })
                                            )
                                        )
                                    );
                                }
                            }
                            n.default = d;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6044,
            { "../../../components/ui/dropdown": 5735, "../../../helpers/constants/zendesk-url": 5907, "./json": 6045, "./private-key": 6046, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = l(e("prop-types")),
                                o = l(e("../../../components/ui/dropdown")),
                                s = l(e("../../../helpers/constants/zendesk-url")),
                                i = l(e("./json")),
                                c = l(e("./private-key"));
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends a.Component {
                                constructor(...e) {
                                    super(...e), d(this, "state", {});
                                }
                                getMenuItemTexts() {
                                    return [this.context.t("privateKey"), this.context.t("jsonFile")];
                                }
                                renderImportView() {
                                    const { type: e } = this.state,
                                        t = this.getMenuItemTexts();
                                    switch (e || t[0]) {
                                        case this.context.t("privateKey"):
                                            return a.default.createElement(c.default, null);
                                        case this.context.t("jsonFile"):
                                        default:
                                            return a.default.createElement(i.default, null);
                                    }
                                }
                                render() {
                                    const e = this.getMenuItemTexts(),
                                        { type: t } = this.state,
                                        { t: n } = this.context;
                                    return a.default.createElement(
                                        a.default.Fragment,
                                        null,
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__header" },
                                            a.default.createElement("div", { className: "page-container__title" }, n("importAccount")),
                                            a.default.createElement(
                                                "div",
                                                { className: "page-container__subtitle" },
                                                n("importAccountMsg"),
                                                a.default.createElement(
                                                    "span",
                                                    {
                                                        className: "new-account-info-link",
                                                        onClick: () => {
                                                            global.platform.openTab({ url: s.default.IMPORTED_ACCOUNTS });
                                                        },
                                                    },
                                                    n("here")
                                                )
                                            )
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "new-account-import-form" },
                                            a.default.createElement(
                                                "div",
                                                { className: "new-account-import-form__select-section" },
                                                a.default.createElement("div", { className: "new-account-import-form__select-label" }, n("selectType")),
                                                a.default.createElement(o.default, {
                                                    className: "new-account-import-form__select",
                                                    options: e.map((e) => ({ value: e })),
                                                    selectedOption: t || e[0],
                                                    onChange: (e) => {
                                                        this.setState({ type: e });
                                                    },
                                                })
                                            ),
                                            this.renderImportView()
                                        )
                                    );
                                }
                            }
                            (n.default = p), d(p, "contextTypes", { t: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6045,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../ducks/history/history": 5889,
                "../../../helpers/constants/zendesk-url": 5907,
                "../../../selectors": 6300,
                "../../../store/actions": 6307,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
                "react-simple-file-input": 4969,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = g(e("react")),
                                r = h(e("prop-types")),
                                o = e("react-router-dom"),
                                s = e("redux"),
                                i = e("react-redux"),
                                c = h(e("react-simple-file-input")),
                                l = g(e("../../../store/actions")),
                                u = e("../../../selectors"),
                                d = h(e("../../../components/ui/button")),
                                p = e("../../../../shared/constants/metametrics"),
                                f = e("../../../ducks/history/history"),
                                m = h(e("../../../helpers/constants/zendesk-url"));
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (E = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function g(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var n = E(t);
                                if (n && n.has(e)) return n.get(e);
                                var a = {},
                                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                    }
                                return (a.default = e), n && n.set(e, a), a;
                            }
                            function _(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class y extends a.Component {
                                constructor(...e) {
                                    super(...e), _(this, "state", { fileContents: "", isEmpty: !0 }), _(this, "inputRef", a.default.createRef());
                                }
                                render() {
                                    const { error: e, history: t, mostRecentOverviewPage: n } = this.props,
                                        r = !this.state.isEmpty && "" !== this.state.fileContents;
                                    return a.default.createElement(
                                        "div",
                                        { className: "new-account-import-form__json" },
                                        a.default.createElement("p", null, this.context.t("usedByClients")),
                                        a.default.createElement("a", { className: "new-account-import-form__help-link", href: m.default.IMPORTED_ACCOUNTS, target: "_blank", rel: "noopener noreferrer" }, this.context.t("fileImportFail")),
                                        a.default.createElement(c.default, {
                                            readAs: "text",
                                            onLoad: this.onLoad.bind(this),
                                            style: { padding: "20px 0px 12px 15%", fontSize: "15px", display: "flex", justifyContent: "center", width: "100%" },
                                        }),
                                        a.default.createElement("input", {
                                            className: "new-account-import-form__input-password",
                                            type: "password",
                                            placeholder: this.context.t("enterPassword"),
                                            id: "json-password-box",
                                            onKeyPress: this.createKeyringOnEnter.bind(this),
                                            onChange: () => this.checkInputEmpty(),
                                            ref: this.inputRef,
                                        }),
                                        a.default.createElement(
                                            "div",
                                            { className: "new-account-create-form__buttons" },
                                            a.default.createElement(d.default, { type: "secondary", large: !0, className: "new-account-create-form__button", onClick: () => t.push(n) }, this.context.t("cancel")),
                                            a.default.createElement(d.default, { type: "primary", large: !0, className: "new-account-create-form__button", onClick: () => this.createNewKeychain(), disabled: !r }, this.context.t("import"))
                                        ),
                                        e ? a.default.createElement("span", { className: "error" }, e) : null
                                    );
                                }
                                onLoad(e) {
                                    this.setState({ fileContents: e.target.result });
                                }
                                createKeyringOnEnter(e) {
                                    "Enter" === e.key && (e.preventDefault(), this.createNewKeychain());
                                }
                                createNewKeychain() {
                                    const { firstAddress: e, displayWarning: t, history: n, importNewJsonAccount: a, mostRecentOverviewPage: r, setSelectedAddress: o } = this.props,
                                        { fileContents: s } = this.state,
                                        { t: i } = this.context;
                                    if (!s) {
                                        const e = i("needImportFile");
                                        return void t(e);
                                    }
                                    a([s, this.inputRef.current.value])
                                        .then(({ selectedAddress: a }) => {
                                            a
                                                ? (n.push(r),
                                                  this.context.trackEvent({
                                                      category: p.EVENT.CATEGORIES.ACCOUNTS,
                                                      event: p.EVENT_NAMES.ACCOUNT_ADDED,
                                                      properties: { account_type: p.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: p.EVENT.ACCOUNT_IMPORT_TYPES.JSON },
                                                  }),
                                                  t(null))
                                                : (t(i("importAccountError")),
                                                  this.context.trackEvent({
                                                      category: p.EVENT.CATEGORIES.ACCOUNTS,
                                                      event: p.EVENT_NAMES.ACCOUNT_ADD_FAILED,
                                                      properties: { account_type: p.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: p.EVENT.ACCOUNT_IMPORT_TYPES.JSON },
                                                  }),
                                                  o(e));
                                        })
                                        .catch((e) => e && t(e.message || e));
                                }
                                checkInputEmpty() {
                                    let e = !0;
                                    "" !== this.inputRef.current.value && (e = !1), this.setState({ isEmpty: e });
                                }
                            }
                            y.propTypes = {
                                error: r.default.string,
                                displayWarning: r.default.func,
                                firstAddress: r.default.string,
                                importNewJsonAccount: r.default.func,
                                history: r.default.object,
                                setSelectedAddress: r.default.func,
                                mostRecentOverviewPage: r.default.string.isRequired,
                            };
                            y.contextTypes = { t: r.default.func, trackEvent: r.default.func };
                            var v = (0, s.compose)(
                                o.withRouter,
                                (0, i.connect)(
                                    (e) => ({ error: e.appState.warning, firstAddress: Object.keys((0, u.getMetaMaskAccounts)(e))[0], mostRecentOverviewPage: (0, f.getMostRecentOverviewPage)(e) }),
                                    (e) => ({ displayWarning: (t) => e(l.displayWarning(t)), importNewJsonAccount: (t) => e(l.importNewAccount("JSON File", t)), setSelectedAddress: (t) => e(l.setSelectedAddress(t)) })
                                )
                            )(y);
                            n.default = v;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6046,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../ducks/history/history": 5889,
                "../../../selectors": 6300,
                "../../../store/actions": 6307,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = h(e("react")),
                                r = e("react-router-dom"),
                                o = e("redux"),
                                s = f(e("prop-types")),
                                i = e("react-redux"),
                                c = h(e("../../../store/actions")),
                                l = e("../../../selectors"),
                                u = f(e("../../../components/ui/button")),
                                d = e("../../../ducks/history/history"),
                                p = e("../../../../shared/constants/metametrics");
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function h(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var n = m(t);
                                if (n && n.has(e)) return n.get(e);
                                var a = {},
                                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                    }
                                return (a.default = e), n && n.set(e, a), a;
                            }
                            function E(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class g extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        E(this, "inputRef", a.default.createRef()),
                                        E(this, "state", { isEmpty: !0 }),
                                        E(this, "createKeyringOnEnter", (e) => {
                                            "Enter" === e.key && (e.preventDefault(), this.createNewKeychain());
                                        });
                                }
                                createNewKeychain() {
                                    const e = this.inputRef.current.value,
                                        { importNewAccount: t, history: n, displayWarning: a, mostRecentOverviewPage: r, setSelectedAddress: o, firstAddress: s } = this.props,
                                        { t: i } = this.context;
                                    t("Private Key", [e])
                                        .then(({ selectedAddress: e }) => {
                                            e
                                                ? (this.context.trackEvent({
                                                      category: p.EVENT.CATEGORIES.ACCOUNTS,
                                                      event: p.EVENT_NAMES.ACCOUNT_ADDED,
                                                      properties: { account_type: p.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: p.EVENT.ACCOUNT_IMPORT_TYPES.PRIVATE_KEY },
                                                  }),
                                                  n.push(r),
                                                  a(null))
                                                : (a(i("importAccountError")),
                                                  this.context.trackEvent({
                                                      category: p.EVENT.CATEGORIES.ACCOUNTS,
                                                      event: p.EVENT_NAMES.ACCOUNT_ADD_FAILED,
                                                      properties: { account_type: p.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: p.EVENT.ACCOUNT_IMPORT_TYPES.PRIVATE_KEY },
                                                  }),
                                                  o(s));
                                        })
                                        .catch((e) => e && a(e.message || e));
                                }
                                checkInputEmpty() {
                                    let e = !0;
                                    "" !== this.inputRef.current.value && (e = !1), this.setState({ isEmpty: e });
                                }
                                render() {
                                    const { error: e, displayWarning: t } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "new-account-import-form__private-key" },
                                        a.default.createElement("span", { className: "new-account-import-form__instruction" }, this.context.t("pastePrivateKey")),
                                        a.default.createElement(
                                            "div",
                                            { className: "new-account-import-form__private-key-password-container" },
                                            a.default.createElement("input", {
                                                className: "new-account-import-form__input-password",
                                                type: "password",
                                                id: "private-key-box",
                                                onKeyPress: (e) => this.createKeyringOnEnter(e),
                                                onChange: () => this.checkInputEmpty(),
                                                ref: this.inputRef,
                                                autoFocus: !0,
                                            })
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "new-account-import-form__buttons" },
                                            a.default.createElement(
                                                u.default,
                                                {
                                                    type: "secondary",
                                                    large: !0,
                                                    className: "new-account-create-form__button",
                                                    onClick: () => {
                                                        const { history: e, mostRecentOverviewPage: n } = this.props;
                                                        t(null), e.push(n);
                                                    },
                                                },
                                                this.context.t("cancel")
                                            ),
                                            a.default.createElement(
                                                u.default,
                                                { type: "primary", large: !0, className: "new-account-create-form__button", onClick: () => this.createNewKeychain(), disabled: this.state.isEmpty },
                                                this.context.t("import")
                                            )
                                        ),
                                        e ? a.default.createElement("span", { className: "error" }, e) : null
                                    );
                                }
                            }
                            E(g, "contextTypes", { t: s.default.func, trackEvent: s.default.func }),
                                E(g, "propTypes", {
                                    importNewAccount: s.default.func.isRequired,
                                    history: s.default.object.isRequired,
                                    displayWarning: s.default.func.isRequired,
                                    setSelectedAddress: s.default.func.isRequired,
                                    firstAddress: s.default.string.isRequired,
                                    error: s.default.node,
                                    mostRecentOverviewPage: s.default.string.isRequired,
                                });
                            var _ = (0, o.compose)(
                                r.withRouter,
                                (0, i.connect)(
                                    function (e) {
                                        return { error: e.appState.warning, firstAddress: Object.keys((0, l.getMetaMaskAccounts)(e))[0], mostRecentOverviewPage: (0, d.getMostRecentOverviewPage)(e) };
                                    },
                                    function (e) {
                                        return { importNewAccount: (t, [n]) => e(c.importNewAccount(t, [n])), displayWarning: (t) => e(c.displayWarning(t || null)), setSelectedAddress: (t) => e(c.setSelectedAddress(t)) };
                                    }
                                )
                            )(g);
                            n.default = _;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6047,
            { "./create-account.component": 6043 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./create-account.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6048,
            { "../../../shared/constants/metametrics": 5332, "../../components/ui/button": 5711, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = c(e("prop-types")),
                                o = c(e("classnames")),
                                s = c(e("../../components/ui/button")),
                                i = e("../../../shared/constants/metametrics");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function u(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class d extends a.Component {
                                constructor(...e) {
                                    super(...e), u(this, "state", { newAccountName: "", defaultAccountName: this.context.t("newAccountNumberName", [this.props.newAccountNumber]) });
                                }
                                render() {
                                    const { newAccountName: e, defaultAccountName: t } = this.state,
                                        { history: n, createAccount: r, mostRecentOverviewPage: c, accounts: l } = this.props,
                                        u = ((d = e), Boolean(l.find((e) => e.name === d)));
                                    var d;
                                    return a.default.createElement(
                                        "div",
                                        { className: "new-account-create-form" },
                                        a.default.createElement("div", { className: "new-account-create-form__input-label" }, this.context.t("accountName")),
                                        a.default.createElement(
                                            "div",
                                            null,
                                            a.default.createElement("input", {
                                                className: (0, o.default)("new-account-create-form__input", { "new-account-create-form__input__error": u }),
                                                value: e,
                                                placeholder: t,
                                                onChange: (e) => this.setState({ newAccountName: e.target.value }),
                                                autoFocus: !0,
                                            }),
                                            u ? a.default.createElement("div", { className: (0, o.default)(" new-account-create-form__error", " new-account-create-form__error-amount") }, this.context.t("accountNameDuplicate")) : null,
                                            a.default.createElement(
                                                "div",
                                                { className: "new-account-create-form__buttons" },
                                                a.default.createElement(s.default, { type: "secondary", large: !0, className: "new-account-create-form__button", onClick: () => n.push(c) }, this.context.t("cancel")),
                                                a.default.createElement(
                                                    s.default,
                                                    {
                                                        type: "primary",
                                                        large: !0,
                                                        className: "new-account-create-form__button",
                                                        onClick: (a) => {
                                                            a.preventDefault(),
                                                                r(e || t)
                                                                    .then(() => {
                                                                        this.context.trackEvent({ category: i.EVENT.CATEGORIES.ACCOUNTS, event: i.EVENT_NAMES.ACCOUNT_ADDED, properties: { account_type: i.EVENT.ACCOUNT_TYPES.DEFAULT } }),
                                                                            n.push(c);
                                                                    })
                                                                    .catch((e) => {
                                                                        this.context.trackEvent({
                                                                            category: i.EVENT.CATEGORIES.ACCOUNTS,
                                                                            event: i.EVENT_NAMES.ACCOUNT_ADD_FAILED,
                                                                            properties: { account_type: i.EVENT.ACCOUNT_TYPES.DEFAULT, error: e.message },
                                                                        });
                                                                    });
                                                        },
                                                        disabled: u,
                                                    },
                                                    this.context.t("create")
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                            (n.default = d),
                                u(d, "defaultProps", { newAccountNumber: 0 }),
                                (d.propTypes = { createAccount: r.default.func, newAccountNumber: r.default.number, history: r.default.object, mostRecentOverviewPage: r.default.string.isRequired, accounts: r.default.array }),
                                (d.contextTypes = { t: r.default.func, trackEvent: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6049,
            { "../../ducks/history/history": 5889, "../../selectors": 6300, "../../store/actions": 6307, "./new-account.component": 6048, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("../../store/actions")),
                                s = e("../../ducks/history/history"),
                                i = e("../../selectors"),
                                c = (a = e("./new-account.component")) && a.__esModule ? a : { default: a };
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            var u = (0, r.connect)(
                                (e) => {
                                    const {
                                        metamask: { identities: t = {} },
                                    } = e;
                                    return { newAccountNumber: Object.keys(t).length + 1, mostRecentOverviewPage: (0, s.getMostRecentOverviewPage)(e), accounts: (0, i.getMetaMaskAccountsOrdered)(e) };
                                },
                                (e) => ({
                                    createAccount: (t) =>
                                        e(o.addNewAccount()).then((n) => {
                                            t && e(o.setAccountLabel(n, t));
                                        }),
                                })
                            )(c.default);
                            n.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            605,
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
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = a(e("react")),
                                c = (r(e("prop-types")), r(e("clsx"))),
                                l = r(e("../styles/withStyles")),
                                u = r(e("../Typography")),
                                d = { root: { margin: 0, padding: "16px 24px", flex: "0 0 auto" } };
                            n.styles = d;
                            var p = i.forwardRef(function (e, t) {
                                    var n = e.children,
                                        a = e.classes,
                                        r = e.className,
                                        l = e.disableTypography,
                                        d = void 0 !== l && l,
                                        p = (0, s.default)(e, ["children", "classes", "className", "disableTypography"]);
                                    return i.createElement("div", (0, o.default)({ className: (0, c.default)(a.root, r), ref: t }, p), d ? n : i.createElement(u.default, { component: "h2", variant: "h6" }, n));
                                }),
                                f = (0, l.default)(d, { name: "MuiDialogTitle" })(p);
                            n.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6050,
            { "../../../app/scripts/lib/util": 86, "../../../shared/constants/app": 5328, "../../../shared/constants/metametrics": 5332, "../../helpers/constants/common": 5898, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = (a = e("prop-types")) && a.__esModule ? a : { default: a },
                                s = e("../../../app/scripts/lib/util"),
                                i = e("../../../shared/constants/app"),
                                c = e("../../helpers/constants/common"),
                                l = e("../../../shared/constants/metametrics");
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends r.PureComponent {
                                renderErrorDetail(e) {
                                    return r.default.createElement("li", null, r.default.createElement("p", null, e));
                                }
                                renderErrorStack(e, t) {
                                    return r.default.createElement("li", null, r.default.createElement("span", null, e), r.default.createElement("pre", { className: "error-page__stack" }, t));
                                }
                                render() {
                                    const { error: e } = this.props,
                                        { t: t } = this.context,
                                        n = (0, s.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP,
                                        a = r.default.createElement(
                                            "a",
                                            {
                                                target: "_blank",
                                                key: "metamaskSupportLink",
                                                rel: "noopener noreferrer",
                                                href: c.SUPPORT_REQUEST_LINK,
                                                onClick: () => {
                                                    this.context.trackEvent(
                                                        { category: l.EVENT.CATEGORIES.ERROR, event: l.EVENT_NAMES.SUPPORT_LINK_CLICKED, properties: { url: c.SUPPORT_REQUEST_LINK } },
                                                        { contextPropsIntoEventProperties: [l.CONTEXT_PROPS.PAGE_TITLE] }
                                                    );
                                                },
                                            },
                                            r.default.createElement("span", { className: "error-page__link-text" }, this.context.t("here"))
                                        ),
                                        o = t(n ? "errorPagePopupMessage" : "errorPageMessage", [a]);
                                    return r.default.createElement(
                                        "section",
                                        { className: "error-page" },
                                        r.default.createElement("h1", { className: "error-page__header" }, t("errorPageTitle")),
                                        r.default.createElement("h2", { className: "error-page__subheader" }, o),
                                        r.default.createElement(
                                            "section",
                                            { className: "error-page__details" },
                                            r.default.createElement(
                                                "details",
                                                null,
                                                r.default.createElement("summary", null, t("errorDetails")),
                                                r.default.createElement(
                                                    "ul",
                                                    null,
                                                    e.message ? this.renderErrorDetail(t("errorMessage", [e.message])) : null,
                                                    e.code ? this.renderErrorDetail(t("errorCode", [e.code])) : null,
                                                    e.name ? this.renderErrorDetail(t("errorName", [e.name])) : null,
                                                    e.stack ? this.renderErrorStack(t("errorStack"), e.stack) : null
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                            d(p, "contextTypes", { t: o.default.func.isRequired, trackEvent: o.default.func }), d(p, "propTypes", { error: o.default.object.isRequired });
                            var f = p;
                            n.default = f;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6051,
            { "./error.component": 6050 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./error.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6052,
            { "../../../components/ui/metafox-logo": 5815, "../../../helpers/constants/routes": 5904, "./import-with-seed-phrase": 6056, "./new-account": 6058, "prop-types": 4806, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r,
                                o,
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = m(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                i = f(e("prop-types")),
                                c = e("react-router-dom"),
                                l = f(e("../../../components/ui/metafox-logo")),
                                u = e("../../../helpers/constants/routes"),
                                d = f(e("./new-account")),
                                p = f(e("./import-with-seed-phrase"));
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function h() {
                                return (
                                    (h = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = arguments[t];
                                                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                              }
                                              return e;
                                          }),
                                    h.apply(this, arguments)
                                );
                            }
                            class E extends s.PureComponent {
                                componentDidMount() {
                                    const { isInitialized: e, history: t } = this.props;
                                    e && t.push(u.INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
                                }
                                render() {
                                    const { onCreateNewAccount: e, onCreateNewAccountFromSeed: t } = this.props;
                                    return s.default.createElement(
                                        "div",
                                        { className: "first-time-flow__wrapper" },
                                        s.default.createElement(l.default, null),
                                        s.default.createElement(
                                            c.Switch,
                                            null,
                                            s.default.createElement(c.Route, { exact: !0, path: u.INITIALIZE_IMPORT_WITH_SEED_PHRASE_ROUTE, render: (e) => s.default.createElement(p.default, h({}, e, { onSubmit: t })) }),
                                            s.default.createElement(c.Route, { exact: !0, path: u.INITIALIZE_CREATE_PASSWORD_ROUTE, render: (t) => s.default.createElement(d.default, h({}, t, { onSubmit: e })) })
                                        )
                                    );
                                }
                            }
                            (n.default = E),
                                (a = E),
                                (r = "propTypes"),
                                (o = { history: i.default.object, isInitialized: i.default.bool, onCreateNewAccount: i.default.func, onCreateNewAccountFromSeed: i.default.func }),
                                r in a ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = o);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6053,
            { "./create-password.component": 6052, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = (a = e("./create-password.component")) && a.__esModule ? a : { default: a };
                            var s = (0, r.connect)((e) => {
                                const {
                                    metamask: { isInitialized: t },
                                } = e;
                                return { isInitialized: t };
                            })(o.default);
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6054,
            { "../../../../../shared/constants/metametrics": 5332, "../../../../components/app/create-new-vault": 5458, "../../../../helpers/constants/routes": 5904, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = c(e("prop-types")),
                                o = e("../../../../helpers/constants/routes"),
                                s = c(e("../../../../components/app/create-new-vault")),
                                i = e("../../../../../shared/constants/metametrics");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function u(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class d extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        u(this, "handleImport", async (e, t) => {
                                            const { history: n, onSubmit: a, setSeedPhraseBackedUp: r } = this.props;
                                            await a(e, t),
                                                this.context.trackEvent({
                                                    category: i.EVENT.CATEGORIES.ONBOARDING,
                                                    event: i.EVENT_NAMES.WALLET_CREATED,
                                                    properties: { account_type: i.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: i.EVENT.ACCOUNT_IMPORT_TYPES.SRP },
                                                }),
                                                await r(!0),
                                                n.replace(o.INITIALIZE_END_OF_FLOW_ROUTE);
                                        });
                                }
                                UNSAFE_componentWillMount() {
                                    (this._onBeforeUnload = () =>
                                        this.context.trackEvent({
                                            category: i.EVENT.CATEGORIES.ONBOARDING,
                                            event: i.EVENT_NAMES.WALLET_SETUP_FAILED,
                                            properties: { account_type: i.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: i.EVENT.ACCOUNT_IMPORT_TYPES.SRP, reason: "Seed Phrase Error", error: this.state.seedPhraseError },
                                        })),
                                        window.addEventListener("beforeunload", this._onBeforeUnload);
                                }
                                componentWillUnmount() {
                                    window.removeEventListener("beforeunload", this._onBeforeUnload);
                                }
                                render() {
                                    const { t: e } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        { className: "first-time-flow__import" },
                                        a.default.createElement(
                                            "div",
                                            { className: "first-time-flow__create-back" },
                                            a.default.createElement(
                                                "a",
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            this.context.trackEvent({
                                                                category: i.EVENT.CATEGORIES.ONBOARDING,
                                                                event: i.EVENT_NAMES.WALLET_SETUP_CANCELED,
                                                                properties: { account_type: i.EVENT.ACCOUNT_TYPES.IMPORTED, account_import_type: i.EVENT.ACCOUNT_IMPORT_TYPES.SRP, text: "Back" },
                                                            }),
                                                            this.props.history.push(o.INITIALIZE_SELECT_ACTION_ROUTE);
                                                    },
                                                    href: "#",
                                                },
                                                `< ${e("back")}`
                                            )
                                        ),
                                        a.default.createElement("div", { className: "first-time-flow__header" }, e("importAccountSeedPhrase")),
                                        a.default.createElement("div", { className: "first-time-flow__text-block" }, e("secretPhrase")),
                                        a.default.createElement(s.default, { includeTerms: !0, onSubmit: this.handleImport, submitText: e("import") })
                                    );
                                }
                            }
                            (n.default = d),
                                u(d, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                u(d, "propTypes", { history: r.default.object, onSubmit: r.default.func.isRequired, setSeedPhraseBackedUp: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6055,
            { "../../../../store/actions": 6307, "./import-with-seed-phrase.component": 6054, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../../../store/actions"),
                                s = (a = e("./import-with-seed-phrase.component")) && a.__esModule ? a : { default: a };
                            var i = (0, r.connect)(null, (e) => ({ setSeedPhraseBackedUp: (t) => e((0, o.setSeedPhraseBackedUp)(t)) }))(s.default);
                            n.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6056,
            { "./import-with-seed-phrase.container": 6055 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./import-with-seed-phrase.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6057,
            { "./create-password.container": 6053 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./create-password.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6058,
            { "./new-account.component": 6059 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./new-account.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6059,
            { "../../../../../shared/constants/metametrics": 5332, "../../../../components/ui/button": 5711, "../../../../components/ui/text-field": 5855, "../../../../helpers/constants/routes": 5904, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = l(e("prop-types")),
                                o = l(e("../../../../components/ui/button")),
                                s = e("../../../../helpers/constants/routes"),
                                i = l(e("../../../../components/ui/text-field")),
                                c = e("../../../../../shared/constants/metametrics");
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        d(this, "state", { password: "", confirmPassword: "", passwordError: "", confirmPasswordError: "", termsChecked: !1 }),
                                        d(this, "handleCreate", async (e) => {
                                            if ((e.preventDefault(), !this.isValid())) return;
                                            const { password: t } = this.state,
                                                { onSubmit: n, history: a } = this.props;
                                            try {
                                                await n(t), this.context.trackEvent({ category: c.EVENT.CATEGORIES.ONBOARDING, event: c.EVENT_NAMES.ACCOUNT_PASSWORD_CREATED, properties: {} }), a.push(s.INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
                                            } catch (e) {
                                                this.setState({ passwordError: e.message });
                                            }
                                        }),
                                        d(this, "toggleTermsCheck", () => {
                                            this.setState((e) => ({ termsChecked: !e.termsChecked }));
                                        }),
                                        d(this, "onTermsKeyPress", ({ key: e }) => {
                                            (" " !== e && "Enter" !== e) || this.toggleTermsCheck();
                                        });
                                }
                                isValid() {
                                    const { password: e, confirmPassword: t, passwordError: n, confirmPasswordError: a } = this.state;
                                    return !(!e || !t || e !== t) && !(e.length < 8) && !n && !a;
                                }
                                handlePasswordChange(e) {
                                    const { t: t } = this.context;
                                    this.setState((n) => {
                                        const { confirmPassword: a } = n;
                                        let r = "",
                                            o = "";
                                        return e && e.length < 8 && (r = t("passwordNotLongEnough")), a && e !== a && (o = t("passwordsDontMatch")), { password: e, passwordError: r, confirmPasswordError: o };
                                    });
                                }
                                handleConfirmPasswordChange(e) {
                                    const { t: t } = this.context;
                                    this.setState((n) => {
                                        const { password: a } = n;
                                        let r = "";
                                        return a !== e && (r = t("passwordsDontMatch")), { confirmPassword: e, confirmPasswordError: r };
                                    });
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { password: t, confirmPassword: n, passwordError: r, confirmPasswordError: c, termsChecked: l } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        null,
                                        a.default.createElement(
                                            "div",
                                            { className: "first-time-flow__create-back" },
                                            a.default.createElement(
                                                "a",
                                                {
                                                    "data-testid": "onboarding-back-button",
                                                    onClick: (e) => {
                                                        e.preventDefault(), this.props.history.push(s.INITIALIZE_SELECT_ACTION_ROUTE);
                                                    },
                                                    href: "#",
                                                },
                                                `< ${e("back")}`
                                            )
                                        ),
                                        a.default.createElement("div", { className: "first-time-flow__header" }, e("createPassword")),
                                        a.default.createElement(
                                            "form",
                                            { className: "first-time-flow__form", onSubmit: this.handleCreate },
                                            a.default.createElement(i.default, {
                                                "data-testid": "create-password",
                                                id: "create-password",
                                                label: e("newPassword"),
                                                type: "password",
                                                className: "first-time-flow__input",
                                                value: t,
                                                onChange: (e) => this.handlePasswordChange(e.target.value),
                                                error: r,
                                                autoFocus: !0,
                                                autoComplete: "new-password",
                                                margin: "normal",
                                                fullWidth: !0,
                                                largeLabel: !0,
                                            }),
                                            a.default.createElement(i.default, {
                                                "data-testid": "confirm-password",
                                                id: "confirm-password",
                                                label: e("confirmPassword"),
                                                type: "password",
                                                className: "first-time-flow__input",
                                                value: n,
                                                onChange: (e) => this.handleConfirmPasswordChange(e.target.value),
                                                error: c,
                                                autoComplete: "confirm-password",
                                                margin: "normal",
                                                fullWidth: !0,
                                                largeLabel: !0,
                                            }),
                                            a.default.createElement(
                                                "div",
                                                { className: "first-time-flow__checkbox-container", onClick: this.toggleTermsCheck },
                                                a.default.createElement(
                                                    "div",
                                                    { className: "first-time-flow__checkbox", tabIndex: "0", role: "checkbox", onKeyPress: this.onTermsKeyPress, "aria-checked": l, "aria-labelledby": "ftf-chk1-label" },
                                                    l ? a.default.createElement("i", { className: "fa fa-check fa-2x" }) : null
                                                ),
                                                a.default.createElement(
                                                    "span",
                                                    { id: "ftf-chk1-label", className: "first-time-flow__checkbox-label" },
                                                    e("acceptTermsOfUse", [
                                                        a.default.createElement(
                                                            "a",
                                                            { onClick: (e) => e.stopPropagation(), key: "first-time-flow__link-text", href: "https://metamask.io/terms.html", target: "_blank", rel: "noopener noreferrer" },
                                                            a.default.createElement("span", { className: "first-time-flow__link-text" }, e("terms"))
                                                        ),
                                                    ])
                                                )
                                            ),
                                            a.default.createElement(o.default, { type: "primary", className: "first-time-flow__button", disabled: !this.isValid() || !l, onClick: this.handleCreate }, e("create"))
                                        )
                                    );
                                }
                            }
                            (n.default = p), d(p, "contextTypes", { trackEvent: r.default.func, t: r.default.func }), d(p, "propTypes", { onSubmit: r.default.func.isRequired, history: r.default.object.isRequired });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            606,
            { "./DialogTitle": 605, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./DialogTitle"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6060,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../components/ui/metafox-logo": 5815,
                "../../../components/ui/snackbar": 5845,
                "../../../helpers/constants/common": 5898,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/constants/zendesk-url": 5907,
                "../onboarding-initiator-util": 6072,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = m(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = f(e("prop-types")),
                                o = f(e("../../../components/ui/button")),
                                s = f(e("../../../components/ui/snackbar")),
                                i = f(e("../../../components/ui/metafox-logo")),
                                c = e("../../../helpers/constants/common"),
                                l = e("../../../helpers/constants/routes"),
                                u = e("../onboarding-initiator-util"),
                                d = e("../../../../shared/constants/metametrics"),
                                p = f(e("../../../helpers/constants/zendesk-url"));
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function h(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class E extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        h(this, "onComplete", async () => {
                                            const { history: e, onboardingInitiator: t } = this.props;
                                            this._removeBeforeUnload(), await this._onOnboardingComplete(), t && (await (0, u.returnToOnboardingInitiatorTab)(t)), e.push(l.DEFAULT_ROUTE);
                                        }),
                                        h(this, "componentWillUnmount", () => {
                                            this._removeBeforeUnload();
                                        });
                                }
                                async _beforeUnload() {
                                    await this._onOnboardingComplete();
                                }
                                _removeBeforeUnload() {
                                    window.removeEventListener("beforeunload", this._beforeUnload);
                                }
                                async _onOnboardingComplete() {
                                    const { setCompletedOnboarding: e, setOnBoardedInThisUISession: t } = this.props;
                                    t(!0), await e();
                                }
                                componentDidMount() {
                                    window.addEventListener("beforeunload", this._beforeUnload.bind(this));
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { onboardingInitiator: t } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "end-of-flow", "data-testid": "end-of-flow" },
                                        a.default.createElement(i.default, null),
                                        a.default.createElement("div", { className: "end-of-flow__emoji" }, "🎉"),
                                        a.default.createElement("div", { className: "first-time-flow__header" }, e("congratulations")),
                                        a.default.createElement("div", { className: "first-time-flow__text-block end-of-flow__text-1" }, e("endOfFlowMessage1")),
                                        a.default.createElement("div", { className: "first-time-flow__text-block end-of-flow__text-2" }, e("endOfFlowMessage2")),
                                        a.default.createElement("div", { className: "end-of-flow__text-3" }, `• ${e("endOfFlowMessage3")}`),
                                        a.default.createElement("div", { className: "end-of-flow__text-3" }, `• ${e("endOfFlowMessage4")}`),
                                        a.default.createElement("div", { className: "end-of-flow__text-3" }, `• ${e("endOfFlowMessage5")}`),
                                        a.default.createElement("div", { className: "end-of-flow__text-3" }, `• ${e("endOfFlowMessage6")}`),
                                        a.default.createElement(
                                            "div",
                                            { className: "end-of-flow__text-3" },
                                            "•",
                                            " ",
                                            e("endOfFlowMessage7", [
                                                a.default.createElement(
                                                    "a",
                                                    {
                                                        target: "_blank",
                                                        key: "metamaskSupportLink",
                                                        rel: "noopener noreferrer",
                                                        href: c.SUPPORT_REQUEST_LINK,
                                                        onClick: () => {
                                                            this.context.trackEvent(
                                                                { category: d.EVENT.CATEGORIES.ONBOARDING, event: d.EVENT_NAMES.SUPPORT_LINK_CLICKED, properties: { url: c.SUPPORT_REQUEST_LINK } },
                                                                { contextPropsIntoEventProperties: [d.CONTEXT_PROPS.PAGE_TITLE] }
                                                            );
                                                        },
                                                    },
                                                    a.default.createElement("span", { className: "first-time-flow__link-text" }, this.context.t("here"))
                                                ),
                                            ])
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "first-time-flow__text-block end-of-flow__text-4" },
                                            `*${e("endOfFlowMessage8")}`,
                                            " ",
                                            a.default.createElement(
                                                "a",
                                                { href: p.default.BASIC_SAFETY, target: "_blank", rel: "noopener noreferrer" },
                                                a.default.createElement("span", { className: "first-time-flow__link-text" }, e("endOfFlowMessage9"))
                                            )
                                        ),
                                        a.default.createElement(o.default, { type: "primary", className: "first-time-flow__button", onClick: this.onComplete, "data-testid": "EOF-complete-button" }, e("endOfFlowMessage10")),
                                        t ? a.default.createElement(s.default, { content: e("onboardingReturnNotice", [e("endOfFlowMessage10"), t.location]) }) : null
                                    );
                                }
                            }
                            (n.default = E),
                                h(E, "contextTypes", { t: r.default.func, trackEvent: r.default.func, setOnBoardedInThisUISession: r.default.func }),
                                h(E, "propTypes", {
                                    history: r.default.object,
                                    setCompletedOnboarding: r.default.func,
                                    onboardingInitiator: r.default.exact({ location: r.default.string, tabId: r.default.number }),
                                    setOnBoardedInThisUISession: r.default.func,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6061,
            { "../../../ducks/app/app": 5884, "../../../selectors": 6300, "../../../store/actions": 6307, "./end-of-flow.component": 6060, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../../selectors"),
                                s = e("../../../store/actions"),
                                i = e("../../../ducks/app/app"),
                                c = (a = e("./end-of-flow.component")) && a.__esModule ? a : { default: a };
                            var l = (0, r.connect)(
                                (e) => ({ onboardingInitiator: (0, o.getOnboardingInitiator)(e) }),
                                (e) => ({ setCompletedOnboarding: () => e((0, s.setCompletedOnboarding)()), setOnBoardedInThisUISession: (t) => e((0, i.setOnBoardedInThisUISession)(t)) })
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6062,
            { "./end-of-flow.container": 6061 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./end-of-flow.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6063,
            { "../../../helpers/constants/routes": 5904, "prop-types": 4806, react: 4980, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = (a = e("prop-types")) && a.__esModule ? a : { default: a },
                                s = e("react-router-dom"),
                                i = e("../../../helpers/constants/routes");
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            class l extends r.PureComponent {
                                render() {
                                    const { completedOnboarding: e, isInitialized: t, isUnlocked: n, seedPhraseBackedUp: a } = this.props;
                                    if (e) return r.default.createElement(s.Redirect, { to: { pathname: i.DEFAULT_ROUTE } });
                                    if (null !== a) return r.default.createElement(s.Redirect, { to: { pathname: i.INITIALIZE_END_OF_FLOW_ROUTE } });
                                    if (n) return r.default.createElement(s.Redirect, { to: { pathname: i.LOCK_ROUTE } });
                                    if (!t) {
                                        let e;
                                        return (e = r.default.createElement(s.Redirect, { to: { pathname: i.INITIALIZE_WELCOME_ROUTE } })), e;
                                    }
                                    return r.default.createElement(s.Redirect, { to: { pathname: i.INITIALIZE_UNLOCK_ROUTE } });
                                }
                            }
                            (n.default = l),
                                (function (e, t, n) {
                                    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                })(l, "propTypes", { completedOnboarding: o.default.bool, isInitialized: o.default.bool, isUnlocked: o.default.bool, seedPhraseBackedUp: o.default.bool });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6064,
            { "./first-time-flow-switch.component": 6063, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = (a = e("./first-time-flow-switch.component")) && a.__esModule ? a : { default: a };
                            var s = (0, r.connect)(({ metamask: e }) => {
                                const { completedOnboarding: t, isInitialized: n, isUnlocked: a, seedPhraseBackedUp: r } = e;
                                return { completedOnboarding: t, isInitialized: n, isUnlocked: a, seedPhraseBackedUp: r };
                            })(o.default);
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6065,
            { "./first-time-flow-switch.container": 6064 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./first-time-flow-switch.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6066,
            {
                "../../helpers/constants/routes": 5904,
                "../unlock-page": 6294,
                "./create-password": 6057,
                "./end-of-flow": 6062,
                "./first-time-flow-switch": 6065,
                "./metametrics-opt-in": 6069,
                "./seed-phrase": 6077,
                "./select-action": 6084,
                "./welcome": 6088,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = E(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = h(e("prop-types")),
                                o = e("react-router-dom"),
                                s = h(e("../unlock-page")),
                                i = e("../../helpers/constants/routes"),
                                c = h(e("./first-time-flow-switch")),
                                l = h(e("./welcome")),
                                u = h(e("./select-action")),
                                d = h(e("./end-of-flow")),
                                p = h(e("./create-password")),
                                f = h(e("./seed-phrase")),
                                m = h(e("./metametrics-opt-in"));
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (E = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function g() {
                                return (
                                    (g = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = arguments[t];
                                                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                              }
                                              return e;
                                          }),
                                    g.apply(this, arguments)
                                );
                            }
                            function _(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class y extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        _(this, "state", { seedPhrase: "" }),
                                        _(this, "handleCreateNewAccount", async (e) => {
                                            const { createNewAccount: t } = this.props;
                                            try {
                                                const n = await t(e);
                                                this.setState({ seedPhrase: n });
                                            } catch (e) {
                                                throw new Error(e.message);
                                            }
                                        }),
                                        _(this, "handleImportWithSeedPhrase", async (e, t) => {
                                            const { createNewAccountFromSeed: n } = this.props;
                                            try {
                                                return await n(e, t);
                                            } catch (e) {
                                                throw new Error(e.message);
                                            }
                                        }),
                                        _(this, "handleUnlock", async (e) => {
                                            const { unlockAccount: t, history: n, nextRoute: a } = this.props;
                                            try {
                                                const r = await t(e);
                                                this.setState({ seedPhrase: r }, () => {
                                                    n.push(a);
                                                });
                                            } catch (e) {
                                                throw new Error(e.message);
                                            }
                                        });
                                }
                                componentDidMount() {
                                    const { completedOnboarding: e, history: t, isInitialized: n, isUnlocked: a, showingSeedPhraseBackupAfterOnboarding: r, seedPhraseBackedUp: o } = this.props;
                                    !e || (r && !o) ? n && !a && t.push(i.INITIALIZE_UNLOCK_ROUTE) : t.push(i.DEFAULT_ROUTE);
                                }
                                render() {
                                    const { seedPhrase: e } = this.state,
                                        { verifySeedPhrase: t } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "first-time-flow" },
                                        a.default.createElement(
                                            o.Switch,
                                            null,
                                            a.default.createElement(o.Route, { path: i.INITIALIZE_SEED_PHRASE_ROUTE, render: (n) => a.default.createElement(f.default, g({}, n, { seedPhrase: e, verifySeedPhrase: t })) }),
                                            a.default.createElement(o.Route, { path: i.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE, render: (n) => a.default.createElement(f.default, g({}, n, { seedPhrase: e, verifySeedPhrase: t })) }),
                                            a.default.createElement(o.Route, { path: i.INITIALIZE_SEED_PHRASE_INTRO_ROUTE, render: (n) => a.default.createElement(f.default, g({}, n, { seedPhrase: e, verifySeedPhrase: t })) }),
                                            a.default.createElement(o.Route, {
                                                path: i.INITIALIZE_CREATE_PASSWORD_ROUTE,
                                                render: (e) => a.default.createElement(p.default, g({}, e, { onCreateNewAccount: this.handleCreateNewAccount, onCreateNewAccountFromSeed: this.handleImportWithSeedPhrase })),
                                            }),
                                            a.default.createElement(o.Route, { path: i.INITIALIZE_SELECT_ACTION_ROUTE, component: u.default }),
                                            a.default.createElement(o.Route, { path: i.INITIALIZE_UNLOCK_ROUTE, render: (e) => a.default.createElement(s.default, g({}, e, { onSubmit: this.handleUnlock })) }),
                                            a.default.createElement(o.Route, { exact: !0, path: i.INITIALIZE_END_OF_FLOW_ROUTE, component: d.default }),
                                            a.default.createElement(o.Route, { exact: !0, path: i.INITIALIZE_WELCOME_ROUTE, component: l.default }),
                                            a.default.createElement(o.Route, { exact: !0, path: i.INITIALIZE_METAMETRICS_OPT_IN_ROUTE, component: m.default }),
                                            a.default.createElement(o.Route, { exact: !0, path: "*", component: c.default })
                                        )
                                    );
                                }
                            }
                            (n.default = y),
                                _(y, "propTypes", {
                                    completedOnboarding: r.default.bool,
                                    createNewAccount: r.default.func,
                                    createNewAccountFromSeed: r.default.func,
                                    history: r.default.object,
                                    isInitialized: r.default.bool,
                                    isUnlocked: r.default.bool,
                                    unlockAccount: r.default.func,
                                    nextRoute: r.default.string,
                                    showingSeedPhraseBackupAfterOnboarding: r.default.bool,
                                    seedPhraseBackedUp: r.default.bool,
                                    verifySeedPhrase: r.default.func,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6067,
            { "../../helpers/constants/routes": 5904, "../../selectors": 6300, "../../store/actions": 6307, "./first-time-flow.component": 6066, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../selectors"),
                                s = e("../../store/actions"),
                                i = e("../../helpers/constants/routes"),
                                c = (a = e("./first-time-flow.component")) && a.__esModule ? a : { default: a };
                            var l = (0, r.connect)(
                                (e, t) => {
                                    const {
                                            metamask: { completedOnboarding: n, isInitialized: a, isUnlocked: r, seedPhraseBackedUp: s },
                                        } = e,
                                        c = Boolean(t.location.pathname.match(i.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE));
                                    return { completedOnboarding: n, isInitialized: a, isUnlocked: r, nextRoute: (0, o.getFirstTimeFlowTypeRoute)(e), showingSeedPhraseBackupAfterOnboarding: c, seedPhraseBackedUp: s };
                                },
                                (e) => ({
                                    createNewAccount: (t) => e((0, s.createNewVaultAndGetSeedPhrase)(t)),
                                    createNewAccountFromSeed: (t, n) => e((0, s.createNewVaultAndRestore)(t, n)),
                                    unlockAccount: (t) => e((0, s.unlockAndGetSeedPhrase)(t)),
                                    verifySeedPhrase: () => (0, s.verifySeedPhrase)(),
                                })
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6068,
            { "./first-time-flow.container": 6067 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./first-time-flow.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6069,
            { "./metametrics-opt-in.container": 6071 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./metametrics-opt-in.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            607,
            {
                "../styles/colorManipulator": 849,
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
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = a(e("react")),
                                c = (r(e("prop-types")), r(e("clsx"))),
                                l = r(e("../styles/withStyles")),
                                u = e("../styles/colorManipulator"),
                                d = function (e) {
                                    return {
                                        root: { height: 1, margin: 0, border: "none", flexShrink: 0, backgroundColor: e.palette.divider },
                                        absolute: { position: "absolute", bottom: 0, left: 0, width: "100%" },
                                        inset: { marginLeft: 72 },
                                        light: { backgroundColor: (0, u.fade)(e.palette.divider, 0.08) },
                                        middle: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
                                        vertical: { height: "100%", width: 1 },
                                        flexItem: { alignSelf: "stretch", height: "auto" },
                                    };
                                };
                            n.styles = d;
                            var p = i.forwardRef(function (e, t) {
                                    var n = e.absolute,
                                        a = void 0 !== n && n,
                                        r = e.classes,
                                        l = e.className,
                                        u = e.component,
                                        d = void 0 === u ? "hr" : u,
                                        p = e.flexItem,
                                        f = void 0 !== p && p,
                                        m = e.light,
                                        h = void 0 !== m && m,
                                        E = e.orientation,
                                        g = void 0 === E ? "horizontal" : E,
                                        _ = e.role,
                                        y = void 0 === _ ? ("hr" !== d ? "separator" : undefined) : _,
                                        v = e.variant,
                                        b = void 0 === v ? "fullWidth" : v,
                                        T = (0, s.default)(e, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);
                                    return i.createElement(
                                        d,
                                        (0, o.default)({ className: (0, c.default)(r.root, l, "fullWidth" !== b && r[b], a && r.absolute, f && r.flexItem, h && r.light, "vertical" === g && r.vertical), role: y, ref: t }, T)
                                    );
                                }),
                                f = (0, l.default)(d, { name: "MuiDivider" })(p);
                            n.default = f;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6070,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/metafox-logo": 5815,
                "../../../components/ui/page-container/page-container-footer": 5823,
                "../../../helpers/constants/routes": 5904,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = l(e("prop-types")),
                                o = l(e("../../../components/ui/metafox-logo")),
                                s = l(e("../../../components/ui/page-container/page-container-footer")),
                                i = e("../../../../shared/constants/metametrics"),
                                c = e("../../../helpers/constants/routes");
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends a.Component {
                                render() {
                                    const { trackEvent: e, t: t } = this.context,
                                        { history: n, setParticipateInMetaMetrics: r, participateInMetaMetrics: l } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "metametrics-opt-in" },
                                        a.default.createElement(
                                            "div",
                                            { className: "metametrics-opt-in__main" },
                                            a.default.createElement(o.default, null),
                                            a.default.createElement("div", { className: "metametrics-opt-in__body-graphic" }, a.default.createElement("img", { src: "images/metrics-chart.svg", alt: "" })),
                                            a.default.createElement("div", { className: "metametrics-opt-in__title" }, t("metametricsHelpImproveMetaMask")),
                                            a.default.createElement(
                                                "div",
                                                { className: "metametrics-opt-in__body" },
                                                a.default.createElement("div", { className: "metametrics-opt-in__description" }, t("metametricsOptInDescription")),
                                                a.default.createElement("div", { className: "metametrics-opt-in__description" }, t("metametricsCommitmentsIntro")),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "metametrics-opt-in__committments" },
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "metametrics-opt-in__row" },
                                                        a.default.createElement("i", { className: "fa fa-check" }),
                                                        a.default.createElement("div", { className: "metametrics-opt-in__row-description" }, t("metametricsCommitmentsAllowOptOut"))
                                                    ),
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "metametrics-opt-in__row" },
                                                        a.default.createElement("i", { className: "fa fa-check" }),
                                                        a.default.createElement("div", { className: "metametrics-opt-in__row-description" }, t("metametricsCommitmentsSendAnonymizedEvents"))
                                                    ),
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "metametrics-opt-in__row metametrics-opt-in__break-row" },
                                                        a.default.createElement("i", { className: "fa fa-times" }),
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "metametrics-opt-in__row-description" },
                                                            t("metametricsCommitmentsNeverCollectKeysEtc", [
                                                                a.default.createElement("span", { className: "metametrics-opt-in__bold", key: "neverCollectKeys" }, t("metametricsCommitmentsBoldNever")),
                                                            ])
                                                        )
                                                    ),
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "metametrics-opt-in__row" },
                                                        a.default.createElement("i", { className: "fa fa-times" }),
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "metametrics-opt-in__row-description" },
                                                            t("metametricsCommitmentsNeverCollectIP", [a.default.createElement("span", { className: "metametrics-opt-in__bold", key: "neverCollectIP" }, t("metametricsCommitmentsBoldNever"))])
                                                        )
                                                    ),
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "metametrics-opt-in__row" },
                                                        a.default.createElement("i", { className: "fa fa-times" }),
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "metametrics-opt-in__row-description" },
                                                            t("metametricsCommitmentsNeverSellDataForProfit", [
                                                                a.default.createElement("span", { className: "metametrics-opt-in__bold", key: "neverSellData" }, t("metametricsCommitmentsBoldNever")),
                                                            ])
                                                        )
                                                    )
                                                )
                                            ),
                                            a.default.createElement(
                                                "div",
                                                { className: "metametrics-opt-in__footer" },
                                                a.default.createElement(s.default, {
                                                    onCancel: async () => {
                                                        await r(!1), n.push(c.INITIALIZE_SELECT_ACTION_ROUTE);
                                                    },
                                                    cancelText: t("noThanks"),
                                                    hideCancel: !1,
                                                    onSubmit: async () => {
                                                        await r(!0);
                                                        try {
                                                            (null !== l && !1 !== l) ||
                                                                (await e(
                                                                    { category: i.EVENT.CATEGORIES.ONBOARDING, event: i.EVENT_NAMES.METRICS_OPT_IN, properties: { action: "Metrics Option", legacy_event: !0 } },
                                                                    { isOptIn: !0, flushImmediately: !0 }
                                                                ));
                                                        } finally {
                                                            n.push(c.INITIALIZE_SELECT_ACTION_ROUTE);
                                                        }
                                                    },
                                                    submitText: t("affirmAgree"),
                                                    disabled: !1,
                                                }),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "metametrics-opt-in__bottom-text" },
                                                    t("gdprMessage", [
                                                        a.default.createElement(
                                                            "a",
                                                            { key: "metametrics-bottom-text-wrapper", href: "https://metamask.io/privacy.html", target: "_blank", rel: "noopener noreferrer" },
                                                            t("gdprMessagePrivacyPolicy")
                                                        ),
                                                    ])
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                            (n.default = p),
                                d(p, "propTypes", { history: r.default.object, setParticipateInMetaMetrics: r.default.func, participateInMetaMetrics: r.default.bool }),
                                d(p, "contextTypes", { trackEvent: r.default.func, t: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6071,
            { "../../../store/actions": 6307, "./metametrics-opt-in.component": 6070, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../../store/actions"),
                                s = (a = e("./metametrics-opt-in.component")) && a.__esModule ? a : { default: a };
                            const i = { create: "Selected Create New Wallet", import: "Selected Import Wallet" };
                            var c = (0, r.connect)(
                                (e) => {
                                    const { firstTimeFlowType: t, participateInMetaMetrics: n } = e.metamask;
                                    return { firstTimeSelectionMetaMetricsName: i[t], participateInMetaMetrics: n };
                                },
                                (e) => ({ setParticipateInMetaMetrics: (t) => e((0, o.setParticipateInMetaMetrics)(t)) })
                            )(s.default);
                            n.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6072,
            { loglevel: 4707, "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.returnToOnboardingInitiatorTab = void 0);
                            var a = o(e("webextension-polyfill")),
                                r = o(e("loglevel"));
                            function o(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            n.returnToOnboardingInitiatorTab = async (e) => {
                                let t;
                                try {
                                    t = await a.default.tabs.update(e.id, { active: !0 });
                                } catch (e) {
                                    r.default.debug(`An error occurred while updating tabs in returnToOnboardingInitiatorTab: ${e.message}`);
                                }
                                t ? window.close() : (r.default.warn("Setting current tab to onboarding initiator has failed; falling back to redirect"), window.location.assign(e.location));
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6073,
            {
                "../../../../../shared/constants/metametrics": 5332,
                "../../../../components/ui/button": 5711,
                "../../../../helpers/constants/routes": 5904,
                "../../../../helpers/utils/export-utils": 5921,
                "./draggable-seed.component": 6075,
                classnames: 1772,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = d(e("prop-types")),
                                o = d(e("classnames")),
                                s = d(e("../../../../components/ui/button")),
                                i = e("../../../../helpers/constants/routes"),
                                c = e("../../../../../shared/constants/metametrics"),
                                l = e("../../../../helpers/utils/export-utils"),
                                u = d(e("./draggable-seed.component"));
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function f(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            const m = Array(12).fill(null);
                            class h extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        f(this, "state", { selectedSeedIndices: [], sortedSeedWords: [], pendingSeedIndices: [], draggingSeedIndex: -1, hoveringIndex: -1 }),
                                        f(this, "setDraggingSeedIndex", (e) => this.setState({ draggingSeedIndex: e })),
                                        f(this, "setHoveringIndex", (e) => this.setState({ hoveringIndex: e })),
                                        f(this, "onDrop", (e) => {
                                            const { selectedSeedIndices: t, draggingSeedIndex: n } = this.state,
                                                a = E(t, n, e, !0);
                                            this.setState({ selectedSeedIndices: a, pendingSeedIndices: a, draggingSeedIndex: -1, hoveringIndex: -1 });
                                        }),
                                        f(this, "handleExport", () => {
                                            (0, l.exportAsFile)("", this.props.seedPhrase, "text/plain");
                                        }),
                                        f(this, "handleSubmit", async () => {
                                            const { history: e, setSeedPhraseBackedUp: t } = this.props;
                                            if (this.isValid())
                                                try {
                                                    t(!0).then(async () => {
                                                        this.context.trackEvent({
                                                            category: c.EVENT.CATEGORIES.ONBOARDING,
                                                            event: c.EVENT_NAMES.WALLET_CREATED,
                                                            properties: { account_type: c.EVENT.ACCOUNT_TYPES.DEFAULT, is_backup_skipped: !1 },
                                                        }),
                                                            e.replace(i.INITIALIZE_END_OF_FLOW_ROUTE);
                                                    });
                                                } catch (e) {
                                                    console.error(e.message),
                                                        this.context.trackEvent({
                                                            category: c.EVENT.CATEGORIES.ONBOARDING,
                                                            event: c.EVENT_NAMES.WALLET_SETUP_FAILED,
                                                            properties: { account_type: c.EVENT.ACCOUNT_TYPES.DEFAULT, is_backup_skipped: !1, reason: "Seed Phrase Creation Error", error: e.message },
                                                        });
                                                }
                                        }),
                                        f(this, "handleSelectSeedWord", (e) => {
                                            this.setState({ selectedSeedIndices: [...this.state.selectedSeedIndices, e], pendingSeedIndices: [...this.state.pendingSeedIndices, e] });
                                        }),
                                        f(this, "handleDeselectSeedWord", (e) => {
                                            this.setState({ selectedSeedIndices: this.state.selectedSeedIndices.filter((t) => e !== t), pendingSeedIndices: this.state.pendingSeedIndices.filter((t) => e !== t) });
                                        });
                                }
                                componentDidMount() {
                                    const { seedPhrase: e = "" } = this.props,
                                        t = (e.split(" ") || []).sort();
                                    this.setState({ sortedSeedWords: t });
                                }
                                isValid() {
                                    const { seedPhrase: e } = this.props,
                                        { selectedSeedIndices: t, sortedSeedWords: n } = this.state;
                                    return e === t.map((e) => n[e]).join(" ");
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { history: t } = this.props,
                                        { selectedSeedIndices: n, sortedSeedWords: r, draggingSeedIndex: c } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: "confirm-seed-phrase", "data-testid": "confirm-seed-phrase" },
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-seed-phrase__back-button" },
                                            a.default.createElement(
                                                "a",
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(), t.push(i.INITIALIZE_SEED_PHRASE_ROUTE);
                                                    },
                                                    href: "#",
                                                },
                                                `< ${e("back")}`
                                            )
                                        ),
                                        a.default.createElement("div", { className: "first-time-flow__header" }, e("confirmSecretBackupPhrase")),
                                        a.default.createElement("div", { className: "first-time-flow__text-block" }, e("selectEachPhrase")),
                                        a.default.createElement(
                                            "div",
                                            { className: (0, o.default)("confirm-seed-phrase__selected-seed-words", { "confirm-seed-phrase__selected-seed-words--dragging": c > -1 }) },
                                            this.renderPendingSeeds(),
                                            this.renderSelectedSeeds()
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "confirm-seed-phrase__sorted-seed-words", "data-testid": "seed-phrase-sorted" },
                                            r.map((e, t) => {
                                                const r = n.includes(t);
                                                return a.default.createElement(u.default, {
                                                    key: t,
                                                    seedIndex: t,
                                                    index: t,
                                                    setHoveringIndex: this.setHoveringIndex,
                                                    onDrop: this.onDrop,
                                                    className: "confirm-seed-phrase__seed-word--sorted",
                                                    selected: r,
                                                    onClick: () => {
                                                        r ? this.handleDeselectSeedWord(t) : this.handleSelectSeedWord(t);
                                                    },
                                                    word: e,
                                                });
                                            })
                                        ),
                                        a.default.createElement(s.default, { type: "primary", className: "first-time-flow__button", onClick: this.handleSubmit, disabled: !this.isValid() }, e("confirm"))
                                    );
                                }
                                renderSelectedSeeds() {
                                    const { sortedSeedWords: e, selectedSeedIndices: t, draggingSeedIndex: n } = this.state;
                                    return m.map((r, o) => {
                                        const s = t[o],
                                            i = e[s];
                                        return a.default.createElement(u.default, {
                                            key: `selected-${s}-${o}`,
                                            className: "confirm-seed-phrase__selected-seed-words__selected-seed",
                                            index: o,
                                            seedIndex: s,
                                            word: i,
                                            draggingSeedIndex: n,
                                            setDraggingSeedIndex: this.setDraggingSeedIndex,
                                            setHoveringIndex: this.setHoveringIndex,
                                            onDrop: this.onDrop,
                                            draggable: !0,
                                        });
                                    });
                                }
                                renderPendingSeeds() {
                                    const { pendingSeedIndices: e, sortedSeedWords: t, draggingSeedIndex: n, hoveringIndex: r } = this.state,
                                        s = E(e, n, r);
                                    return m.map((e, i) => {
                                        const c = s[i],
                                            l = t[c];
                                        return a.default.createElement(u.default, {
                                            key: `pending-${c}-${i}`,
                                            index: i,
                                            className: (0, o.default)("confirm-seed-phrase__selected-seed-words__pending-seed", { "confirm-seed-phrase__seed-word--hidden": n === c && i !== r }),
                                            seedIndex: c,
                                            word: l,
                                            draggingSeedIndex: n,
                                            setDraggingSeedIndex: this.setDraggingSeedIndex,
                                            setHoveringIndex: this.setHoveringIndex,
                                            onDrop: this.onDrop,
                                            droppable: Boolean(l),
                                        });
                                    });
                                }
                            }
                            function E(e, t, n, a) {
                                let r = [...e];
                                return "number" == typeof e[n] && (r = [...e.slice(0, n), t, ...e.slice(n)]), a && (r = r.filter((e, a) => e !== t || a === n)), r;
                            }
                            (n.default = h),
                                f(h, "contextTypes", { trackEvent: r.default.func, t: r.default.func }),
                                f(h, "defaultProps", { seedPhrase: "" }),
                                f(h, "propTypes", { history: r.default.object, seedPhrase: r.default.string, setSeedPhraseBackedUp: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6074,
            { "../../../../store/actions": 6307, "./confirm-seed-phrase.component": 6073, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../../../store/actions"),
                                s = (a = e("./confirm-seed-phrase.component")) && a.__esModule ? a : { default: a };
                            var i = (0, r.connect)(null, (e) => ({ setSeedPhraseBackedUp: (t) => e((0, o.setSeedPhraseBackedUp)(t)) }))(s.default);
                            n.default = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6075,
            { classnames: 1772, "prop-types": 4806, react: 4980, "react-dnd": 4875 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = c(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = i(e("prop-types")),
                                o = i(e("classnames")),
                                s = e("react-dnd");
                            function i(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function c(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (c = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function l(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class u extends a.Component {
                                UNSAFE_componentWillReceiveProps(e) {
                                    const { isOver: t, setHoveringIndex: n } = this.props;
                                    t && !e.isOver && n(-1);
                                }
                                render() {
                                    const { connectDragSource: e, connectDropTarget: t, isDragging: n, index: r, word: s, selected: i, className: c, onClick: l, isOver: u, canDrop: d } = this.props;
                                    return t(
                                        e(
                                            a.default.createElement(
                                                "div",
                                                {
                                                    key: r,
                                                    className: (0, o.default)("btn-secondary notranslate confirm-seed-phrase__seed-word", c, {
                                                        "confirm-seed-phrase__seed-word--selected btn-primary": i,
                                                        "confirm-seed-phrase__seed-word--dragging": n,
                                                        "confirm-seed-phrase__seed-word--empty": !s,
                                                        "confirm-seed-phrase__seed-word--active-drop": !u && d,
                                                        "confirm-seed-phrase__seed-word--drop-hover": u && d,
                                                    }),
                                                    onClick: l,
                                                    "data-testid": `draggable-seed-${i ? "selected-" : ""}${s}`,
                                                },
                                                s
                                            )
                                        )
                                    );
                                }
                            }
                            l(u, "propTypes", {
                                connectDragSource: r.default.func.isRequired,
                                connectDropTarget: r.default.func.isRequired,
                                isDragging: r.default.bool,
                                isOver: r.default.bool,
                                canDrop: r.default.bool,
                                onClick: r.default.func,
                                setHoveringIndex: r.default.func.isRequired,
                                index: r.default.number,
                                word: r.default.string,
                                className: r.default.string,
                                selected: r.default.bool,
                            }),
                                l(u, "defaultProps", { className: "", onClick: undefined });
                            const d = "SEEDWORD",
                                p = {
                                    beginDrag: (e) => (setTimeout(() => e.setDraggingSeedIndex(e.seedIndex), 0), { seedIndex: e.seedIndex, word: e.word }),
                                    canDrag: (e) => e.draggable,
                                    endDrag(e, t) {
                                        const n = t.getDropResult();
                                        n ? e.onDrop(n.targetIndex) : setTimeout(() => e.setDraggingSeedIndex(-1), 0);
                                    },
                                },
                                f = {
                                    drop: (e) => ({ targetIndex: e.index }),
                                    canDrop: (e) => e.droppable,
                                    hover(e) {
                                        e.setHoveringIndex(e.index);
                                    },
                                };
                            var m = (0, s.DropTarget)(d, f, (e, t) => ({ connectDropTarget: e.dropTarget(), isOver: t.isOver(), canDrop: t.canDrop() }))(
                                (0, s.DragSource)(d, p, (e, t) => ({ connectDragSource: e.dragSource(), isDragging: t.isDragging() }))(u)
                            );
                            n.default = m;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6076,
            { "./confirm-seed-phrase.container": 6074 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./confirm-seed-phrase.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6077,
            { "./seed-phrase.component": 6083 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./seed-phrase.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6078,
            { "./reveal-seed-phrase.container": 6080 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./reveal-seed-phrase.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6079,
            {
                "../../../../../shared/constants/metametrics": 5332,
                "../../../../components/ui/box": 5707,
                "../../../../components/ui/button": 5711,
                "../../../../components/ui/lock-icon": 5798,
                "../../../../components/ui/snackbar": 5845,
                "../../../../helpers/constants/routes": 5904,
                "../../../../helpers/utils/export-utils": 5921,
                "../../onboarding-initiator-util": 6072,
                classnames: 1772,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = h(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = m(e("prop-types")),
                                o = m(e("classnames")),
                                s = m(e("../../../../components/ui/box")),
                                i = m(e("../../../../components/ui/lock-icon")),
                                c = m(e("../../../../components/ui/button")),
                                l = m(e("../../../../components/ui/snackbar")),
                                u = e("../../../../helpers/constants/routes"),
                                d = e("../../../../../shared/constants/metametrics"),
                                p = e("../../onboarding-initiator-util"),
                                f = e("../../../../helpers/utils/export-utils");
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function h(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (h = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function E(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class g extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        E(this, "state", { isShowingSeedPhrase: !1 }),
                                        E(this, "handleExport", () => {
                                            (0, f.exportAsFile)("", this.props.seedPhrase, "text/plain");
                                        }),
                                        E(this, "handleNext", () => {
                                            const { isShowingSeedPhrase: e } = this.state,
                                                { history: t } = this.props;
                                            this.context.trackEvent({ category: d.EVENT.CATEGORIES.ONBOARDING, event: d.EVENT_NAMES.SRP_TO_CONFIRM_BACKUP, properties: {} }), e && t.replace(u.INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE);
                                        }),
                                        E(this, "handleSkip", async () => {
                                            const { history: e, setSeedPhraseBackedUp: t, setCompletedOnboarding: n, onboardingInitiator: a } = this.props;
                                            await Promise.all([n(), t(!1)])
                                                .then(() => {
                                                    this.context.trackEvent({
                                                        category: d.EVENT.CATEGORIES.ONBOARDING,
                                                        event: d.EVENT_NAMES.WALLET_CREATED,
                                                        properties: { account_type: d.EVENT.ACCOUNT_TYPES.DEFAULT, is_backup_skipped: !0 },
                                                    });
                                                })
                                                .catch((e) => {
                                                    console.error(e.message),
                                                        this.context.trackEvent({
                                                            category: d.EVENT.CATEGORIES.ONBOARDING,
                                                            event: d.EVENT_NAMES.WALLET_SETUP_FAILED,
                                                            properties: { account_type: d.EVENT.ACCOUNT_TYPES.DEFAULT, is_backup_skipped: !0, reason: "Seed Phrase Creation Error", error: e.message },
                                                        });
                                                }),
                                                a && (await (0, p.returnToOnboardingInitiatorTab)(a)),
                                                e.replace(u.DEFAULT_ROUTE);
                                        });
                                }
                                renderSecretWordsContainer() {
                                    const { t: e } = this.context,
                                        { seedPhrase: t } = this.props,
                                        { isShowingSeedPhrase: n } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: "reveal-seed-phrase__secret" },
                                        a.default.createElement(
                                            "div",
                                            { className: (0, o.default)("reveal-seed-phrase__secret-words notranslate", { "reveal-seed-phrase__secret-words--hidden": !n }), "data-testid": n ? "showing-seed-phrase" : "hidden-seed-phrase" },
                                            t
                                        ),
                                        !n &&
                                            a.default.createElement(
                                                "div",
                                                {
                                                    className: "reveal-seed-phrase__secret-blocker",
                                                    "data-testid": "reveal-seed-blocker",
                                                    onClick: () => {
                                                        this.context.trackEvent({ category: d.EVENT.CATEGORIES.ONBOARDING, event: d.EVENT_NAMES.KEY_EXPORT_REVEALED, properties: {} }), this.setState({ isShowingSeedPhrase: !0 });
                                                    },
                                                },
                                                a.default.createElement(i.default, { width: "28px", height: "35px", fill: "var(--color-overlay-inverse)" }),
                                                a.default.createElement("div", { className: "reveal-seed-phrase__reveal-button" }, e("clickToRevealSeed"))
                                            )
                                    );
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { isShowingSeedPhrase: t } = this.state,
                                        { history: n, onboardingInitiator: r } = this.props;
                                    return a.default.createElement(
                                        "div",
                                        { className: "reveal-seed-phrase", "data-testid": "reveal-seed-phrase" },
                                        a.default.createElement(
                                            "div",
                                            { className: "seed-phrase__sections" },
                                            a.default.createElement(
                                                "div",
                                                { className: "seed-phrase__main" },
                                                a.default.createElement(
                                                    s.default,
                                                    { marginBottom: 4 },
                                                    a.default.createElement(
                                                        "a",
                                                        {
                                                            href: "#",
                                                            onClick: (e) => {
                                                                e.preventDefault(), n.push(u.INITIALIZE_SEED_PHRASE_INTRO_ROUTE);
                                                            },
                                                        },
                                                        `< ${e("back")}`
                                                    )
                                                ),
                                                a.default.createElement("div", { className: "first-time-flow__header" }, e("secretRecoveryPhrase")),
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, e("secretBackupPhraseDescription")),
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, e("secretBackupPhraseWarning")),
                                                this.renderSecretWordsContainer()
                                            ),
                                            a.default.createElement(
                                                "div",
                                                { className: "seed-phrase__side" },
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, `${e("tips")}:`),
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, e("storePhrase")),
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, e("writePhrase")),
                                                a.default.createElement("div", { className: "first-time-flow__text-block" }, e("memorizePhrase")),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "first-time-flow__text-block" },
                                                    a.default.createElement("a", { className: "reveal-seed-phrase__export-text", onClick: this.handleExport }, e("downloadSecretBackup"))
                                                )
                                            )
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "reveal-seed-phrase__buttons" },
                                            a.default.createElement(c.default, { type: "secondary", className: "first-time-flow__button", onClick: this.handleSkip }, e("remindMeLater")),
                                            a.default.createElement(c.default, { type: "primary", className: "first-time-flow__button", onClick: this.handleNext, disabled: !t }, e("next"))
                                        ),
                                        r ? a.default.createElement(l.default, { content: e("onboardingReturnNotice", [e("remindMeLater"), r.location]) }) : null
                                    );
                                }
                            }
                            (n.default = g),
                                E(g, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                E(g, "propTypes", {
                                    history: r.default.object,
                                    seedPhrase: r.default.string,
                                    setSeedPhraseBackedUp: r.default.func,
                                    setCompletedOnboarding: r.default.func,
                                    onboardingInitiator: r.default.exact({ location: r.default.string, tabId: r.default.number }),
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            608,
            { "./Divider": 607, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./Divider"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6080,
            { "../../../../selectors": 6300, "../../../../store/actions": 6307, "./reveal-seed-phrase.component": 6079, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../../../store/actions"),
                                s = e("../../../../selectors"),
                                i = (a = e("./reveal-seed-phrase.component")) && a.__esModule ? a : { default: a };
                            var c = (0, r.connect)(
                                (e) => ({ onboardingInitiator: (0, s.getOnboardingInitiator)(e) }),
                                (e) => ({ setSeedPhraseBackedUp: (t) => e((0, o.setSeedPhraseBackedUp)(t)), setCompletedOnboarding: () => e((0, o.setCompletedOnboarding)()) })
                            )(i.default);
                            n.default = c;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6081,
            { "./seed-phrase-intro.component": 6082 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./seed-phrase-intro.component")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6082,
            {
                "../../../../components/ui/box": 5707,
                "../../../../components/ui/button": 5711,
                "../../../../components/ui/typography": 5869,
                "../../../../helpers/constants/design-system": 5900,
                "../../../../helpers/constants/routes": 5904,
                "../../../../hooks/useI18nContext": 5957,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, o.useI18nContext)(),
                                        t = (0, r.useHistory)(),
                                        n = {
                                            en: "English",
                                            es: "Spanish",
                                            hi: "Hindi",
                                            id: "Indonesian",
                                            ja: "Japanese",
                                            ko: "Korean",
                                            pt: "Portuguese",
                                            ru: "Russian",
                                            tl: "Tagalog",
                                            vi: "Vietnamese",
                                            de: "German",
                                            el: "Greek",
                                            fr: "French",
                                            tr: "Turkish",
                                            zh: "Chinese - China",
                                        };
                                    return a.default.createElement(
                                        "div",
                                        { className: "seed-phrase-intro", "data-testid": "seed-phrase-intro" },
                                        a.default.createElement(
                                            "div",
                                            { className: "seed-phrase-intro__sections" },
                                            a.default.createElement(
                                                "div",
                                                { className: "seed-phrase-intro__left" },
                                                a.default.createElement(c.default, { color: l.COLORS.TEXT_DEFAULT, variant: l.TYPOGRAPHY.H1, boxProps: { marginTop: 0, marginBottom: 4 } }, e("seedPhraseIntroTitle")),
                                                a.default.createElement(
                                                    c.default,
                                                    { color: l.COLORS.TEXT_DEFAULT, boxProps: { marginBottom: 4 }, variant: l.TYPOGRAPHY.Paragraph, className: "seed-phrase-intro__copy" },
                                                    e("seedPhraseIntroTitleCopy")
                                                ),
                                                a.default.createElement(
                                                    s.default,
                                                    { marginBottom: 4 },
                                                    a.default.createElement(
                                                        "video",
                                                        { controls: !0 },
                                                        a.default.createElement("source", { type: "video/webm", src: "./images/videos/recovery-onboarding/video.webm" }),
                                                        Object.keys(n).map((e) =>
                                                            a.default.createElement("track", { default: !0, srcLang: e, label: n[e], key: `${e}-subtitles`, kind: "subtitles", src: `./images/videos/recovery-onboarding/subtitles/${e}.vtt` })
                                                        )
                                                    )
                                                ),
                                                a.default.createElement(
                                                    s.default,
                                                    { width: l.BLOCK_SIZES.ONE_THIRD },
                                                    a.default.createElement(
                                                        i.default,
                                                        {
                                                            type: "primary",
                                                            onClick: () => {
                                                                t.push(u.INITIALIZE_SEED_PHRASE_ROUTE);
                                                            },
                                                        },
                                                        e("next")
                                                    )
                                                )
                                            ),
                                            a.default.createElement(
                                                "div",
                                                { className: "seed-phrase-intro__right" },
                                                a.default.createElement(
                                                    s.default,
                                                    { padding: 4, borderWidth: 1, borderRadius: l.SIZES.MD, borderColor: l.COLORS.BORDER_MUTED, borderStyle: l.BORDER_STYLE.SOLID },
                                                    a.default.createElement(
                                                        s.default,
                                                        { marginBottom: 4 },
                                                        a.default.createElement(c.default, { as: "span", color: l.COLORS.TEXT_DEFAULT, fontWeight: l.FONT_WEIGHT.BOLD, boxProps: { display: "block" } }, e("seedPhraseIntroSidebarTitleOne")),
                                                        a.default.createElement("span", null, e("seedPhraseIntroSidebarCopyOne"))
                                                    ),
                                                    a.default.createElement(
                                                        s.default,
                                                        { marginBottom: 4 },
                                                        a.default.createElement(c.default, { as: "span", color: l.COLORS.TEXT_DEFAULT, fontWeight: l.FONT_WEIGHT.BOLD, boxProps: { display: "block" } }, e("seedPhraseIntroSidebarTitleTwo")),
                                                        a.default.createElement(
                                                            "ul",
                                                            { className: "seed-phrase-intro__sidebar_list" },
                                                            a.default.createElement("li", null, e("seedPhraseIntroSidebarBulletOne")),
                                                            a.default.createElement("li", null, e("seedPhraseIntroSidebarBulletTwo")),
                                                            a.default.createElement("li", null, e("seedPhraseIntroSidebarBulletThree")),
                                                            a.default.createElement("li", null, e("seedPhraseIntroSidebarBulletFour"))
                                                        )
                                                    ),
                                                    a.default.createElement(
                                                        s.default,
                                                        { marginBottom: 4 },
                                                        a.default.createElement(c.default, { as: "span", color: l.COLORS.TEXT_DEFAULT, fontWeight: l.FONT_WEIGHT.BOLD, boxProps: { display: "block" } }, e("seedPhraseIntroSidebarTitleThree")),
                                                        a.default.createElement("span", null, e("seedPhraseIntroSidebarCopyTwo"))
                                                    ),
                                                    a.default.createElement(s.default, { marginBottom: 4 }, a.default.createElement("span", null, e("seedPhraseIntroSidebarCopyThree")))
                                                )
                                            )
                                        )
                                    );
                                });
                            var a = d(e("react")),
                                r = e("react-router-dom"),
                                o = e("../../../../hooks/useI18nContext"),
                                s = d(e("../../../../components/ui/box")),
                                i = d(e("../../../../components/ui/button")),
                                c = d(e("../../../../components/ui/typography")),
                                l = e("../../../../helpers/constants/design-system"),
                                u = e("../../../../helpers/constants/routes");
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6083,
            {
                "../../../components/ui/metafox-logo": 5815,
                "../../../helpers/constants/routes": 5904,
                "./confirm-seed-phrase": 6076,
                "./reveal-seed-phrase": 6078,
                "./seed-phrase-intro": 6081,
                "prop-types": 4806,
                react: 4980,
                "react-dnd": 4875,
                "react-dnd-html5-backend": 4861,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = m(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = f(e("prop-types")),
                                o = e("react-router-dom"),
                                s = f(e("react-dnd-html5-backend")),
                                i = e("react-dnd"),
                                c = e("../../../helpers/constants/routes"),
                                l = f(e("../../../components/ui/metafox-logo")),
                                u = f(e("./confirm-seed-phrase")),
                                d = f(e("./reveal-seed-phrase")),
                                p = f(e("./seed-phrase-intro"));
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (m = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function h() {
                                return (
                                    (h = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = arguments[t];
                                                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                              }
                                              return e;
                                          }),
                                    h.apply(this, arguments)
                                );
                            }
                            function E(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class g extends a.PureComponent {
                                constructor(...e) {
                                    super(...e), E(this, "state", { verifiedSeedPhrase: "" });
                                }
                                componentDidMount() {
                                    const { seedPhrase: e, history: t, verifySeedPhrase: n } = this.props;
                                    e ||
                                        n().then((e) => {
                                            e ? this.setState({ verifiedSeedPhrase: e }) : t.push(c.DEFAULT_ROUTE);
                                        });
                                }
                                render() {
                                    var e;
                                    const { seedPhrase: t, history: n } = this.props,
                                        { verifiedSeedPhrase: r } = this.state,
                                        f = (null == n || null === (e = n.location) || void 0 === e ? void 0 : e.pathname) === c.INITIALIZE_SEED_PHRASE_INTRO_ROUTE ? "intro" : "";
                                    return a.default.createElement(
                                        i.DragDropContextProvider,
                                        { backend: s.default },
                                        a.default.createElement(
                                            "div",
                                            { className: `first-time-flow__wrapper ${f}` },
                                            a.default.createElement(l.default, null),
                                            a.default.createElement(
                                                o.Switch,
                                                null,
                                                a.default.createElement(o.Route, { exact: !0, path: c.INITIALIZE_CONFIRM_SEED_PHRASE_ROUTE, render: (e) => a.default.createElement(u.default, h({}, e, { seedPhrase: t || r })) }),
                                                a.default.createElement(o.Route, { exact: !0, path: c.INITIALIZE_SEED_PHRASE_ROUTE, render: (e) => a.default.createElement(d.default, h({}, e, { seedPhrase: t || r })) }),
                                                a.default.createElement(o.Route, { exact: !0, path: c.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE, render: (e) => a.default.createElement(d.default, h({}, e, { seedPhrase: t || r })) }),
                                                a.default.createElement(o.Route, { exact: !0, path: c.INITIALIZE_SEED_PHRASE_INTRO_ROUTE, render: (e) => a.default.createElement(p.default, h({}, e, { seedPhrase: t || r })) })
                                            )
                                        )
                                    );
                                }
                            }
                            (n.default = g), E(g, "propTypes", { history: r.default.object, seedPhrase: r.default.string, verifySeedPhrase: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6084,
            { "./select-action.container": 6086 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./select-action.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6085,
            { "../../../../shared/constants/metametrics": 5332, "../../../components/ui/button": 5711, "../../../components/ui/metafox-logo": 5815, "../../../helpers/constants/routes": 5904, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = u(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = l(e("prop-types")),
                                o = l(e("../../../components/ui/button")),
                                s = l(e("../../../components/ui/metafox-logo")),
                                i = e("../../../../shared/constants/metametrics"),
                                c = e("../../../helpers/constants/routes");
                            function l(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (u = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function d(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class p extends a.PureComponent {
                                constructor(...e) {
                                    super(...e),
                                        d(this, "handleCreate", () => {
                                            const { metaMetricsId: e } = this.props,
                                                { trackEvent: t } = this.context;
                                            this.props.setFirstTimeFlowType("create"),
                                                t(
                                                    { category: i.EVENT.CATEGORIES.ONBOARDING, event: i.EVENT_NAMES.WALLET_SETUP_STARTED, properties: { account_type: i.EVENT.ACCOUNT_TYPES.DEFAULT } },
                                                    { isOptIn: !0, metaMetricsId: e, flushImmediately: !0 }
                                                ),
                                                this.props.history.push(c.INITIALIZE_CREATE_PASSWORD_ROUTE);
                                        }),
                                        d(this, "handleImport", () => {
                                            const { metaMetricsId: e } = this.props,
                                                { trackEvent: t } = this.context;
                                            this.props.setFirstTimeFlowType("import"),
                                                t(
                                                    { category: i.EVENT.CATEGORIES.ONBOARDING, event: i.EVENT_NAMES.WALLET_SETUP_STARTED, properties: { account_type: i.EVENT.ACCOUNT_TYPES.IMPORTED } },
                                                    { isOptIn: !0, metaMetricsId: e, flushImmediately: !0 }
                                                ),
                                                this.props.history.push(c.INITIALIZE_IMPORT_WITH_SEED_PHRASE_ROUTE);
                                        });
                                }
                                componentDidMount() {
                                    const { history: e, isInitialized: t, nextRoute: n } = this.props;
                                    t && e.push(n);
                                }
                                render() {
                                    const { t: e } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        { className: "select-action" },
                                        a.default.createElement(s.default, null),
                                        a.default.createElement(
                                            "div",
                                            { className: "select-action__wrapper" },
                                            a.default.createElement(
                                                "div",
                                                { className: "select-action__body" },
                                                a.default.createElement("div", { className: "select-action__body-header" }, e("newToMetaMask")),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "select-action__select-buttons" },
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "select-action__select-button" },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "select-action__button-content" },
                                                            a.default.createElement("div", { className: "select-action__button-symbol" }, a.default.createElement("i", { className: "fa fa-download fa-2x" })),
                                                            a.default.createElement("div", { className: "select-action__button-text-big" }, e("noAlreadyHaveSeed")),
                                                            a.default.createElement("div", { className: "select-action__button-text-small" }, e("importYourExisting"))
                                                        ),
                                                        a.default.createElement(o.default, { type: "primary", className: "first-time-flow__button", onClick: this.handleImport, "data-testid": "import-wallet-button" }, e("importWallet"))
                                                    ),
                                                    a.default.createElement(
                                                        "div",
                                                        { className: "select-action__select-button" },
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "select-action__button-content" },
                                                            a.default.createElement("div", { className: "select-action__button-symbol" }, a.default.createElement("i", { className: "fa fa-plus fa-2x" })),
                                                            a.default.createElement("div", { className: "select-action__button-text-big" }, e("letsGoSetUp")),
                                                            a.default.createElement("div", { className: "select-action__button-text-small" }, e("thisWillCreate"))
                                                        ),
                                                        a.default.createElement(o.default, { type: "primary", className: "first-time-flow__button", onClick: this.handleCreate, "data-testid": "create-wallet-button" }, e("createAWallet"))
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                            (n.default = p),
                                d(p, "propTypes", { history: r.default.object, isInitialized: r.default.bool, setFirstTimeFlowType: r.default.func, nextRoute: r.default.string, metaMetricsId: r.default.string }),
                                d(p, "contextTypes", { trackEvent: r.default.func, t: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6086,
            { "../../../selectors": 6300, "../../../store/actions": 6307, "./select-action.component": 6085, "react-redux": 4939, "react-router-dom": 4959, redux: 4998 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = e("redux"),
                                i = e("../../../store/actions"),
                                c = e("../../../selectors"),
                                l = (a = e("./select-action.component")) && a.__esModule ? a : { default: a };
                            var u = (0, s.compose)(
                                o.withRouter,
                                (0, r.connect)(
                                    (e) => ({ nextRoute: (0, c.getFirstTimeFlowTypeRoute)(e), metaMetricsId: e.metamask.metaMetricsId }),
                                    (e) => ({ setFirstTimeFlowType: (t) => e((0, i.setFirstTimeFlowType)(t)) })
                                )
                            )(l.default);
                            n.default = u;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6087,
            { "../../../hooks/useI18nContext": 5957, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = (a = e("react")) && a.__esModule ? a : { default: a },
                                o = e("../../../hooks/useI18nContext");
                            var s = () => {
                                const e = (0, o.useI18nContext)();
                                return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    r.default.createElement("div", { className: "welcome-page__header" }, e("betaWelcome")),
                                    r.default.createElement(
                                        "div",
                                        { className: "welcome-page__description" },
                                        r.default.createElement("p", null, e("betaMetamaskDescription")),
                                        r.default.createElement(
                                            "p",
                                            null,
                                            e("betaMetamaskDescriptionExplanation", [
                                                r.default.createElement("a", { href: "https://metamask.io/terms.html", key: "terms-link" }, e("betaMetamaskDescriptionExplanationTermsLinkText")),
                                                r.default.createElement("a", { href: "https://metamask.io/beta-terms.html", key: "beta-terms-link" }, e("betaMetamaskDescriptionExplanationBetaTermsLinkText")),
                                            ])
                                        )
                                    )
                                );
                            };
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6088,
            { "./welcome.container": 6091 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./welcome.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6089,
            { "../../../hooks/useI18nContext": 5957, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = (a = e("react")) && a.__esModule ? a : { default: a },
                                o = e("../../../hooks/useI18nContext");
                            var s = () => {
                                const e = (0, o.useI18nContext)();
                                return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    r.default.createElement("div", { className: "welcome-page__header" }, e("welcome")),
                                    r.default.createElement("div", { className: "welcome-page__description" }, r.default.createElement("p", null, e("metamaskDescription")), r.default.createElement("p", null, e("happyToSeeYou")))
                                );
                            };
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            609,
            {
                "../Backdrop": 551,
                "../Modal": 696,
                "../Paper": 706,
                "../Slide": 726,
                "../styles/transitions": 866,
                "../styles/useTheme": 867,
                "../styles/withStyles": 868,
                "../utils/capitalize": 876,
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
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.isHorizontal = y), (n.getAnchor = v), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                i = a(e("react")),
                                c = (r(e("prop-types")), r(e("clsx"))),
                                l = r(e("../Modal")),
                                u = r(e("../Backdrop")),
                                d = r(e("../styles/withStyles")),
                                p = r(e("../Slide")),
                                f = r(e("../Paper")),
                                m = r(e("../utils/capitalize")),
                                h = e("../styles/transitions"),
                                E = r(e("../styles/useTheme")),
                                g = function (e) {
                                    return {
                                        root: {},
                                        docked: { flex: "0 0 auto" },
                                        paper: {
                                            overflowY: "auto",
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                            flex: "1 0 auto",
                                            zIndex: e.zIndex.drawer,
                                            WebkitOverflowScrolling: "touch",
                                            position: "fixed",
                                            top: 0,
                                            outline: 0,
                                        },
                                        paperAnchorLeft: { left: 0, right: "auto" },
                                        paperAnchorRight: { left: "auto", right: 0 },
                                        paperAnchorTop: { top: 0, left: 0, bottom: "auto", right: 0, height: "auto", maxHeight: "100%" },
                                        paperAnchorBottom: { top: "auto", left: 0, bottom: 0, right: 0, height: "auto", maxHeight: "100%" },
                                        paperAnchorDockedLeft: { borderRight: "1px solid ".concat(e.palette.divider) },
                                        paperAnchorDockedTop: { borderBottom: "1px solid ".concat(e.palette.divider) },
                                        paperAnchorDockedRight: { borderLeft: "1px solid ".concat(e.palette.divider) },
                                        paperAnchorDockedBottom: { borderTop: "1px solid ".concat(e.palette.divider) },
                                        modal: {},
                                    };
                                };
                            n.styles = g;
                            var _ = { left: "right", right: "left", top: "down", bottom: "up" };
                            function y(e) {
                                return -1 !== ["left", "right"].indexOf(e);
                            }
                            function v(e, t) {
                                return "rtl" === e.direction && y(t) ? _[t] : t;
                            }
                            var b = { enter: h.duration.enteringScreen, exit: h.duration.leavingScreen },
                                T = i.forwardRef(function (e, t) {
                                    var n = e.anchor,
                                        a = void 0 === n ? "left" : n,
                                        r = e.BackdropProps,
                                        d = e.children,
                                        h = e.classes,
                                        g = e.className,
                                        y = e.elevation,
                                        T = void 0 === y ? 16 : y,
                                        k = e.ModalProps,
                                        N = (k = void 0 === k ? {} : k).BackdropProps,
                                        w = (0, s.default)(k, ["BackdropProps"]),
                                        O = e.onClose,
                                        P = e.open,
                                        A = void 0 !== P && P,
                                        S = e.PaperProps,
                                        C = void 0 === S ? {} : S,
                                        R = e.SlideProps,
                                        x = e.TransitionComponent,
                                        I = void 0 === x ? p.default : x,
                                        M = e.transitionDuration,
                                        D = void 0 === M ? b : M,
                                        j = e.variant,
                                        L = void 0 === j ? "temporary" : j,
                                        W = (0, s.default)(e, [
                                            "anchor",
                                            "BackdropProps",
                                            "children",
                                            "classes",
                                            "className",
                                            "elevation",
                                            "ModalProps",
                                            "onClose",
                                            "open",
                                            "PaperProps",
                                            "SlideProps",
                                            "TransitionComponent",
                                            "transitionDuration",
                                            "variant",
                                        ]),
                                        F = (0, E.default)(),
                                        U = i.useRef(!1);
                                    i.useEffect(function () {
                                        U.current = !0;
                                    }, []);
                                    var $ = v(F, a),
                                        G = i.createElement(
                                            f.default,
                                            (0, o.default)({ elevation: "temporary" === L ? T : 0, square: !0 }, C, {
                                                className: (0, c.default)(h.paper, h["paperAnchor".concat((0, m.default)($))], C.className, "temporary" !== L && h["paperAnchorDocked".concat((0, m.default)($))]),
                                            }),
                                            d
                                        );
                                    if ("permanent" === L) return i.createElement("div", (0, o.default)({ className: (0, c.default)(h.root, h.docked, g), ref: t }, W), G);
                                    var H = i.createElement(I, (0, o.default)({ in: A, direction: _[$], timeout: D, appear: U.current }, R), G);
                                    return "persistent" === L
                                        ? i.createElement("div", (0, o.default)({ className: (0, c.default)(h.root, h.docked, g), ref: t }, W), H)
                                        : i.createElement(
                                              l.default,
                                              (0, o.default)(
                                                  { BackdropProps: (0, o.default)({}, r, N, { transitionDuration: D }), BackdropComponent: u.default, className: (0, c.default)(h.root, h.modal, g), open: A, onClose: O, ref: t },
                                                  W,
                                                  w
                                              ),
                                              H
                                          );
                                }),
                                k = (0, d.default)(g, { name: "MuiDrawer", flip: !1 })(T);
                            n.default = k;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6090,
            {
                "../../../components/ui/button": 5711,
                "../../../components/ui/mascot": 5809,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/utils/build-types": 5917,
                "./beta-welcome-footer.component": 6087,
                "./welcome-footer.component": 6089,
                events: 1729,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = f(e("events")),
                                r = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                o = f(e("prop-types")),
                                s = f(e("../../../components/ui/mascot")),
                                i = f(e("../../../components/ui/button")),
                                c = e("../../../helpers/constants/routes"),
                                l = e("../../../helpers/utils/build-types"),
                                u = f(e("./welcome-footer.component")),
                                d = f(e("./beta-welcome-footer.component"));
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function f(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function m(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class h extends r.PureComponent {
                                constructor(e) {
                                    super(e),
                                        m(this, "handleContinue", () => {
                                            this.props.history.push(c.INITIALIZE_METAMETRICS_OPT_IN_ROUTE);
                                        }),
                                        (this.animationEventEmitter = new a.default());
                                }
                                componentDidMount() {
                                    const { history: e, participateInMetaMetrics: t, welcomeScreenSeen: n, isInitialized: a } = this.props;
                                    n && a && null !== t ? e.push(c.INITIALIZE_CREATE_PASSWORD_ROUTE) : n && null !== t ? e.push(c.INITIALIZE_SELECT_ACTION_ROUTE) : n && e.push(c.INITIALIZE_METAMETRICS_OPT_IN_ROUTE);
                                }
                                render() {
                                    const { t: e } = this.context;
                                    return r.default.createElement(
                                        "div",
                                        { className: "welcome-page__wrapper" },
                                        r.default.createElement(
                                            "div",
                                            { className: "welcome-page" },
                                            r.default.createElement(s.default, { animationEventEmitter: this.animationEventEmitter, width: "125", height: "125" }),
                                            (0, l.isBeta)() ? r.default.createElement(d.default, null) : r.default.createElement(u.default, null),
                                            r.default.createElement(i.default, { type: "primary", className: "first-time-flow__button", onClick: this.handleContinue, "data-testid": "first-time-flow__button" }, e("getStarted"))
                                        )
                                    );
                                }
                            }
                            (n.default = h),
                                m(h, "propTypes", { history: o.default.object, participateInMetaMetrics: o.default.bool, welcomeScreenSeen: o.default.bool, isInitialized: o.default.bool }),
                                m(h, "contextTypes", { t: o.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6091,
            { "../../../store/actions": 6307, "./welcome.component": 6090, "react-redux": 4939, "react-router-dom": 4959, redux: 4998 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = e("redux"),
                                i = e("../../../store/actions"),
                                c = (a = e("./welcome.component")) && a.__esModule ? a : { default: a };
                            var l = (0, s.compose)(
                                o.withRouter,
                                (0, r.connect)(
                                    ({ metamask: e }) => {
                                        const { welcomeScreenSeen: t, participateInMetaMetrics: n, isInitialized: a } = e;
                                        return { welcomeScreenSeen: t, participateInMetaMetrics: n, isInitialized: a };
                                    },
                                    (e) => ({ closeWelcomeScreen: () => e((0, i.closeWelcomeScreen)()) })
                                )
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6092,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../../shared/lib/ui-utils": 5348,
                "../../components/app/asset-list": 5410,
                "../../components/app/collectibles-tab": 5424,
                "../../components/app/home-notification": 5502,
                "../../components/app/menu-bar": 5511,
                "../../components/app/multiple-notifications": 5577,
                "../../components/app/recovery-phrase-reminder": 5603,
                "../../components/app/transaction-list": 5675,
                "../../components/app/wallet-overview": 5688,
                "../../components/app/whats-new-popup": 5691,
                "../../components/ui/actionable-message/actionable-message": 5703,
                "../../components/ui/box": 5707,
                "../../components/ui/button": 5711,
                "../../components/ui/icon/icon-chart": 5758,
                "../../components/ui/popover": 5828,
                "../../components/ui/tabs": 5851,
                "../../components/ui/tooltip": 5865,
                "../../components/ui/typography/typography": 5870,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/routes": 5904,
                "../../helpers/constants/zendesk-url": 5907,
                "../connected-accounts": 6036,
                "../connected-sites": 6039,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = C(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = S(e("prop-types")),
                                o = e("react-router-dom"),
                                s = e("../../../shared/constants/metametrics"),
                                i = S(e("../../components/app/asset-list")),
                                c = (S(e("../../components/app/collectibles-tab")), S(e("../../components/app/home-notification"))),
                                l = S(e("../../components/app/multiple-notifications")),
                                u = S(e("../../components/app/transaction-list")),
                                d = S(e("../../components/app/menu-bar")),
                                p = S(e("../../components/ui/popover")),
                                f = S(e("../../components/ui/button")),
                                m = S(e("../../components/ui/box")),
                                h = S(e("../connected-sites")),
                                E = S(e("../connected-accounts")),
                                g = e("../../components/ui/tabs"),
                                _ = e("../../components/app/wallet-overview"),
                                y = S(e("../../components/app/whats-new-popup")),
                                v = S(e("../../components/app/recovery-phrase-reminder")),
                                b = S(e("../../components/ui/actionable-message/actionable-message")),
                                T = S(e("../../components/ui/typography/typography")),
                                k = S(e("../../components/ui/icon/icon-chart")),
                                N = e("../../helpers/constants/design-system"),
                                w = e("../../helpers/constants/routes"),
                                O = S(e("../../helpers/constants/zendesk-url")),
                                P = S(e("../../components/ui/tooltip")),
                                A = e("../../../shared/lib/ui-utils");
                            function S(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function C(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (C = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function R(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            function x({ isNotification: e, totalUnapprovedCount: t, isSigningQRHardwareTransaction: n }) {
                                return e && 0 === t && !n;
                            }
                            class I extends a.PureComponent {
                                constructor(e) {
                                    super(e),
                                        R(this, "state", { canShowBlockageNotification: !0, notificationClosing: !1, redirecting: !1 }),
                                        R(this, "onRecoveryPhraseReminderClose", () => {
                                            const { setRecoveryPhraseReminderHasBeenShown: e, setRecoveryPhraseReminderLastShown: t } = this.props;
                                            e(!0), t(new Date().getTime());
                                        }),
                                        R(this, "renderPopover", () => {
                                            const { setConnectedStatusPopoverHasBeenShown: e } = this.props,
                                                { t: t } = this.context;
                                            return a.default.createElement(
                                                p.default,
                                                {
                                                    title: t("whatsThis"),
                                                    onClose: e,
                                                    className: "home__connected-status-popover",
                                                    showArrow: !0,
                                                    CustomBackground: ({ onClose: e }) =>
                                                        a.default.createElement(
                                                            "div",
                                                            { className: "home__connected-status-popover-bg-container", onClick: e },
                                                            a.default.createElement("div", { className: "home__connected-status-popover-bg" })
                                                        ),
                                                    footer: a.default.createElement(
                                                        a.default.Fragment,
                                                        null,
                                                        a.default.createElement("a", { href: O.default.USER_GUIDE_DAPPS, target: "_blank", rel: "noopener noreferrer" }, t("learnMoreUpperCase")),
                                                        a.default.createElement(f.default, { type: "primary", onClick: e }, t("dismiss"))
                                                    ),
                                                },
                                                a.default.createElement(
                                                    "main",
                                                    { className: "home__connect-status-text" },
                                                    a.default.createElement("div", null, t("metaMaskConnectStatusParagraphOne")),
                                                    a.default.createElement("div", null, t("metaMaskConnectStatusParagraphTwo")),
                                                    a.default.createElement("div", null, t("metaMaskConnectStatusParagraphThree"))
                                                )
                                            );
                                        });
                                    const {
                                        closeNotificationPopup: t,
                                        firstPermissionsRequestId: n,
                                        haveSwapsQuotes: r,
                                        isNotification: o,
                                        showAwaitingSwapScreen: s,
                                        suggestedAssets: i = [],
                                        swapsFetchParams: c,
                                        unconfirmedTransactionsCount: l,
                                    } = this.props;
                                    x(e) ? ((this.state.notificationClosing = !0), t()) : (n || l > 0 || i.length > 0 || (!o && (s || r || c))) && (this.state.redirecting = !0);
                                }
                                checkStatusAndNavigate() {
                                    const {
                                        firstPermissionsRequestId: e,
                                        history: t,
                                        isNotification: n,
                                        suggestedAssets: a = [],
                                        unconfirmedTransactionsCount: r,
                                        haveSwapsQuotes: o,
                                        showAwaitingSwapScreen: s,
                                        swapsFetchParams: i,
                                        pendingConfirmations: c,
                                    } = this.props;
                                    !n && s
                                        ? t.push(w.AWAITING_SWAP_ROUTE)
                                        : !n && o
                                        ? t.push(w.VIEW_QUOTE_ROUTE)
                                        : !n && i
                                        ? t.push(w.BUILD_QUOTE_ROUTE)
                                        : e
                                        ? t.push(`${w.CONNECT_ROUTE}/${e}`)
                                        : r > 0
                                        ? t.push(w.CONFIRM_TRANSACTION_ROUTE)
                                        : a.length > 0
                                        ? t.push(w.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE)
                                        : c.length > 0 && t.push(w.CONFIRMATION_V_NEXT_ROUTE);
                                }
                                componentDidMount() {
                                    const { setPortfolioTooltipWasShownInThisSession: e, showPortfolioTooltip: t } = this.props;
                                    this.checkStatusAndNavigate(), t && e();
                                }
                                static getDerivedStateFromProps(e) {
                                    return x(e) ? { notificationClosing: !0 } : null;
                                }
                                componentDidUpdate(e, t) {
                                    const { closeNotificationPopup: n, isNotification: a } = this.props,
                                        { notificationClosing: r } = this.state;
                                    r && !t.notificationClosing ? n() : a && this.checkStatusAndNavigate();
                                }
                                renderNotifications() {
                                    const { t: e } = this.context,
                                        {
                                            history: t,
                                            shouldShowSeedPhraseReminder: n,
                                            isPopup: r,
                                            shouldShowWeb3ShimUsageNotification: o,
                                            setWeb3ShimUsageAlertDismissed: s,
                                            originOfCurrentTab: i,
                                            disableWeb3ShimUsageAlert: u,
                                            infuraBlocked: d,
                                            newNetworkAdded: h,
                                            setNewNetworkAdded: E,
                                            newCollectibleAddedMessage: g,
                                            setNewCollectibleAddedMessage: _,
                                            newTokensImported: y,
                                            setNewTokensImported: v,
                                            newCustomNetworkAdded: k,
                                            clearNewCustomNetworkAdded: P,
                                            setRpcTarget: A,
                                        } = this.props;
                                    return a.default.createElement(
                                        l.default,
                                        null,
                                        "success" === g
                                            ? a.default.createElement(b.default, {
                                                  type: "success",
                                                  className: "home__new-network-notification",
                                                  message: a.default.createElement(
                                                      m.default,
                                                      { display: N.DISPLAY.INLINE_FLEX },
                                                      a.default.createElement("i", { className: "fa fa-check-circle home__new-nft-notification-icon" }),
                                                      a.default.createElement(T.default, { variant: N.TYPOGRAPHY.H7, fontWeight: N.FONT_WEIGHT.NORMAL }, e("newCollectibleAddedMessage")),
                                                      a.default.createElement("button", { className: "fas fa-times home__new-nft-notification-close", title: e("close"), onClick: () => _("") })
                                                  ),
                                              })
                                            : null,
                                        h
                                            ? a.default.createElement(b.default, {
                                                  type: "success",
                                                  className: "home__new-network-notification",
                                                  message: a.default.createElement(
                                                      m.default,
                                                      { display: N.DISPLAY.INLINE_FLEX },
                                                      a.default.createElement("i", { className: "fa fa-check-circle home__new-network-notification-icon" }),
                                                      a.default.createElement(T.default, { variant: N.TYPOGRAPHY.H7, fontWeight: N.FONT_WEIGHT.NORMAL }, e("newNetworkAdded", [h])),
                                                      a.default.createElement("button", { className: "fas fa-times home__new-network-notification-close", title: e("close"), onClick: () => E("") })
                                                  ),
                                              })
                                            : null,
                                        y
                                            ? a.default.createElement(b.default, {
                                                  type: "success",
                                                  className: "home__new-tokens-imported-notification",
                                                  message: a.default.createElement(
                                                      m.default,
                                                      { display: N.DISPLAY.INLINE_FLEX },
                                                      a.default.createElement("i", { className: "fa fa-check-circle home__new-tokens-imported-notification-icon" }),
                                                      a.default.createElement(
                                                          m.default,
                                                          null,
                                                          a.default.createElement(
                                                              T.default,
                                                              { className: "home__new-tokens-imported-notification-title", variant: N.TYPOGRAPHY.H6, fontWeight: N.FONT_WEIGHT.BOLD },
                                                              e("newTokensImportedTitle")
                                                          ),
                                                          a.default.createElement(
                                                              T.default,
                                                              { className: "home__new-tokens-imported-notification-message", variant: N.TYPOGRAPHY.H7, fontWeight: N.FONT_WEIGHT.NORMAL },
                                                              e("newTokensImportedMessage", [y])
                                                          )
                                                      ),
                                                      a.default.createElement("button", { className: "fas fa-times home__new-tokens-imported-notification-close", title: e("close"), onClick: () => v("") })
                                                  ),
                                              })
                                            : null,
                                        o
                                            ? a.default.createElement(c.default, {
                                                  descriptionText: e("web3ShimUsageNotification", [
                                                      a.default.createElement(
                                                          "span",
                                                          { key: "web3ShimUsageNotificationLink", className: "home-notification__text-link", onClick: () => global.platform.openTab({ url: O.default.LEGACY_WEB3 }) },
                                                          e("here")
                                                      ),
                                                  ]),
                                                  ignoreText: e("dismiss"),
                                                  onIgnore: (e) => {
                                                      s(i), e && u();
                                                  },
                                                  checkboxText: e("dontShowThisAgain"),
                                                  checkboxTooltipText: e("canToggleInSettings"),
                                                  key: "home-web3ShimUsageNotification",
                                              })
                                            : null,
                                        n
                                            ? a.default.createElement(c.default, {
                                                  descriptionText: e("backupApprovalNotice"),
                                                  acceptText: e("backupNow"),
                                                  onAccept: () => {
                                                      r ? global.platform.openExtensionInBrowser(w.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE) : t.push(w.INITIALIZE_BACKUP_SEED_PHRASE_ROUTE);
                                                  },
                                                  infoText: e("backupApprovalInfo"),
                                                  key: "home-backupApprovalNotice",
                                              })
                                            : null,
                                        d && this.state.canShowBlockageNotification
                                            ? a.default.createElement(c.default, {
                                                  descriptionText: e("infuraBlockedNotification", [
                                                      a.default.createElement(
                                                          "span",
                                                          { key: "infuraBlockedNotificationLink", className: "home-notification__text-link", onClick: () => global.platform.openTab({ url: O.default.INFURA_BLOCKAGE }) },
                                                          e("here")
                                                      ),
                                                  ]),
                                                  ignoreText: e("dismiss"),
                                                  onIgnore: () => {
                                                      this.setState({ canShowBlockageNotification: !1 });
                                                  },
                                                  key: "home-infuraBlockedNotification",
                                              })
                                            : null,
                                        0 !== Object.keys(k).length &&
                                            a.default.createElement(
                                                p.default,
                                                { className: "home__new-network-added" },
                                                a.default.createElement("i", { className: "fa fa-check-circle fa-2x home__new-network-added__check-circle" }),
                                                a.default.createElement(T.default, { variant: N.TYPOGRAPHY.H4, marginTop: 5, marginRight: 9, marginLeft: 9, marginBottom: 0, fontWeight: N.FONT_WEIGHT.BOLD }, e("networkAddedSuccessfully")),
                                                a.default.createElement(
                                                    m.default,
                                                    { marginTop: 8, marginRight: 8, marginLeft: 8, marginBottom: 5 },
                                                    a.default.createElement(
                                                        f.default,
                                                        {
                                                            type: "primary",
                                                            className: "home__new-network-added__switch-to-button",
                                                            onClick: () => {
                                                                A(k.rpcUrl, k.chainId, k.ticker, k.chainName), P();
                                                            },
                                                        },
                                                        a.default.createElement(T.default, { variant: N.TYPOGRAPHY.H6, fontWeight: N.FONT_WEIGHT.NORMAL, color: N.COLORS.PRIMARY_INVERSE }, e("switchToNetwork", [k.chainName]))
                                                    ),
                                                    a.default.createElement(
                                                        f.default,
                                                        { type: "secondary", onClick: () => P() },
                                                        a.default.createElement(T.default, { variant: N.TYPOGRAPHY.H6, fontWeight: N.FONT_WEIGHT.NORMAL, color: N.COLORS.PRIMARY_DEFAULT }, e("dismiss"))
                                                    )
                                                )
                                            )
                                    );
                                }
                                render() {
                                    const { t: e } = this.context,
                                        {
                                            defaultHomeActiveTabName: t,
                                            onTabClick: n,
                                            forgottenPassword: r,
                                            history: c,
                                            connectedStatusPopoverHasBeenShown: l,
                                            isPopup: p,
                                            announcementsToShow: f,
                                            showWhatsNewPopup: m,
                                            hideWhatsNewPopup: b,
                                            showPortfolioTooltip: T,
                                            hidePortfolioTooltip: N,
                                            portfolioTooltipWasShownInThisSession: O,
                                            seedPhraseBackedUp: S,
                                            showRecoveryPhraseReminder: C,
                                            firstTimeFlowType: R,
                                            completedOnboarding: x,
                                            shouldShowSeedPhraseReminder: I,
                                            onboardedInThisUISession: M,
                                            newCustomNetworkAdded: D,
                                        } = this.props;
                                    if (r) return a.default.createElement(o.Redirect, { to: { pathname: w.RESTORE_VAULT_ROUTE } });
                                    if (this.state.notificationClosing || this.state.redirecting) return null;
                                    const j = x && (!M || "import" === R) && f && m && !T && !O && 0 === Object.keys(D).length;
                                    return a.default.createElement(
                                        "div",
                                        { className: "main-container" },
                                        a.default.createElement(o.Route, { path: w.CONNECTED_ROUTE, component: h.default, exact: !0 }),
                                        a.default.createElement(o.Route, { path: w.CONNECTED_ACCOUNTS_ROUTE, component: E.default, exact: !0 }),
                                        a.default.createElement(
                                            "div",
                                            { className: "home__container" },
                                            j ? a.default.createElement(y.default, { onClose: b }) : null,
                                            !j && C ? a.default.createElement(v.default, { hasBackedUp: S, onConfirm: this.onRecoveryPhraseReminderClose }) : null,
                                            p && !l ? this.renderPopover() : null,
                                            a.default.createElement(
                                                "div",
                                                { className: "home__main-view" },
                                                a.default.createElement(d.default, null),
                                                a.default.createElement("div", { className: "home__balance-wrapper" }, a.default.createElement(_.EthOverview, null)),
                                                a.default.createElement(
                                                    g.Tabs,
                                                    {
                                                        defaultActiveTabName: t,
                                                        onTabClick: n,
                                                        tabsClassName: "home__tabs",
                                                        subHeader: a.default.createElement(
                                                            P.default,
                                                            {
                                                                position: "bottom",
                                                                open: !I && T,
                                                                interactive: !0,
                                                                theme: "home__subheader-link--tooltip",
                                                                html: a.default.createElement(
                                                                    "div",
                                                                    null,
                                                                    a.default.createElement(
                                                                        "div",
                                                                        { className: "home__subheader-link--tooltip-content-header" },
                                                                        a.default.createElement("div", { className: "home__subheader-link--tooltip-content-header-text" }, e("new")),
                                                                        a.default.createElement(
                                                                            "button",
                                                                            {
                                                                                className: "home__subheader-link--tooltip-content-header-button",
                                                                                onClick: () => {
                                                                                    N();
                                                                                },
                                                                            },
                                                                            a.default.createElement("i", { className: "fa fa-times" })
                                                                        )
                                                                    ),
                                                                    a.default.createElement(
                                                                        "div",
                                                                        null,
                                                                        e("tryOur"),
                                                                        " ",
                                                                        a.default.createElement("span", { className: "home__subheader-link--tooltip-content-text-bold" }, e("betaPortfolioSite")),
                                                                        " ",
                                                                        e("keepTapsOnTokens")
                                                                    )
                                                                ),
                                                            },
                                                            a.default.createElement(
                                                                "div",
                                                                {
                                                                    className: "home__subheader-link",
                                                                    onClick: async () => {
                                                                        const e = "https://portfolio.metamask.io";
                                                                        global.platform.openTab({ url: `${e}?metamaskEntry=ext` }),
                                                                            this.context.trackEvent(
                                                                                { category: s.EVENT.CATEGORIES.HOME, event: s.EVENT_NAMES.PORTFOLIO_LINK_CLICKED, properties: { url: e } },
                                                                                { contextPropsIntoEventProperties: [s.CONTEXT_PROPS.PAGE_TITLE] }
                                                                            );
                                                                    },
                                                                },
                                                                a.default.createElement(k.default, null),
                                                                a.default.createElement("div", { className: "home__subheader-link--text", "data-testid": "home__portfolio-site" }, e("portfolioSite"))
                                                            )
                                                        ),
                                                    },
                                                    a.default.createElement(
                                                        g.Tab,
                                                        { activeClassName: "home__tab--active", className: "home__tab", "data-testid": "home__asset-tab", name: e("assets") },
                                                        a.default.createElement(i.default, { onClickAsset: (e) => c.push(`${w.ASSET_ROUTE}/${e}`) })
                                                    ),
                                                    null,
                                                    a.default.createElement(
                                                        g.Tab,
                                                        { activeClassName: "home__tab--active", className: "home__tab", "data-testid": "home__activity-tab", name: e("activity") },
                                                        a.default.createElement(u.default, null)
                                                    )
                                                ),
                                                a.default.createElement(
                                                    "div",
                                                    { className: "home__support" },
                                                    e("needHelp", [
                                                        a.default.createElement(
                                                            "a",
                                                            {
                                                                href: A.SUPPORT_LINK,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                key: "need-help-link",
                                                                onClick: () => {
                                                                    this.context.trackEvent(
                                                                        { category: s.EVENT.CATEGORIES.HOME, event: s.EVENT_NAMES.SUPPORT_LINK_CLICKED, properties: { url: A.SUPPORT_LINK } },
                                                                        { contextPropsIntoEventProperties: [s.CONTEXT_PROPS.PAGE_TITLE] }
                                                                    );
                                                                },
                                                            },
                                                            e("needHelpLinkText")
                                                        ),
                                                    ])
                                                )
                                            ),
                                            this.renderNotifications()
                                        )
                                    );
                                }
                            }
                            (n.default = I),
                                R(I, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                R(I, "propTypes", {
                                    history: r.default.object,
                                    forgottenPassword: r.default.bool,
                                    suggestedAssets: r.default.array,
                                    unconfirmedTransactionsCount: r.default.number,
                                    shouldShowSeedPhraseReminder: r.default.bool.isRequired,
                                    isPopup: r.default.bool,
                                    isNotification: r.default.bool.isRequired,
                                    firstPermissionsRequestId: r.default.string,
                                    totalUnapprovedCount: r.default.number.isRequired,
                                    setConnectedStatusPopoverHasBeenShown: r.default.func,
                                    connectedStatusPopoverHasBeenShown: r.default.bool,
                                    defaultHomeActiveTabName: r.default.string,
                                    firstTimeFlowType: r.default.string,
                                    completedOnboarding: r.default.bool,
                                    onTabClick: r.default.func.isRequired,
                                    haveSwapsQuotes: r.default.bool.isRequired,
                                    showAwaitingSwapScreen: r.default.bool.isRequired,
                                    swapsFetchParams: r.default.object,
                                    shouldShowWeb3ShimUsageNotification: r.default.bool.isRequired,
                                    setWeb3ShimUsageAlertDismissed: r.default.func.isRequired,
                                    originOfCurrentTab: r.default.string,
                                    disableWeb3ShimUsageAlert: r.default.func.isRequired,
                                    pendingConfirmations: r.default.arrayOf(r.default.object).isRequired,
                                    infuraBlocked: r.default.bool.isRequired,
                                    showWhatsNewPopup: r.default.bool.isRequired,
                                    hideWhatsNewPopup: r.default.func.isRequired,
                                    showPortfolioTooltip: r.default.bool.isRequired,
                                    hidePortfolioTooltip: r.default.func.isRequired,
                                    portfolioTooltipWasShownInThisSession: r.default.bool.isRequired,
                                    setPortfolioTooltipWasShownInThisSession: r.default.func.isRequired,
                                    announcementsToShow: r.default.bool.isRequired,
                                    showRecoveryPhraseReminder: r.default.bool.isRequired,
                                    setRecoveryPhraseReminderHasBeenShown: r.default.func.isRequired,
                                    setRecoveryPhraseReminderLastShown: r.default.func.isRequired,
                                    seedPhraseBackedUp: (e) => {
                                        if (null !== e.seedPhraseBackedUp && "boolean" != typeof e.seedPhraseBackedUp) throw new Error(`seedPhraseBackedUp is required to be null or boolean. Received ${e.seedPhraseBackedUp}`);
                                    },
                                    newNetworkAdded: r.default.string,
                                    setNewNetworkAdded: r.default.func.isRequired,
                                    isSigningQRHardwareTransaction: r.default.bool.isRequired,
                                    newCollectibleAddedMessage: r.default.string,
                                    setNewCollectibleAddedMessage: r.default.func.isRequired,
                                    closeNotificationPopup: r.default.func.isRequired,
                                    newTokensImported: r.default.string,
                                    setNewTokensImported: r.default.func.isRequired,
                                    newCustomNetworkAdded: r.default.object,
                                    clearNewCustomNetworkAdded: r.default.func,
                                    setRpcTarget: r.default.func,
                                    onboardedInThisUISession: r.default.bool,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6093,
            {
                "../../../app/scripts/lib/util": 86,
                "../../../shared/constants/alerts": 5327,
                "../../../shared/constants/app": 5328,
                "../../ducks/app/app": 5884,
                "../../ducks/metamask/metamask": 5892,
                "../../ducks/swaps/swaps": 5896,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "./home.component": 6092,
                "react-redux": 4939,
                "react-router-dom": 4959,
                redux: 4998,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("redux"),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("../../selectors"),
                                c = e("../../store/actions"),
                                l = e("../../ducks/app/app"),
                                u = e("../../ducks/metamask/metamask"),
                                d = e("../../ducks/swaps/swaps"),
                                p = e("../../../app/scripts/lib/util"),
                                f = e("../../../shared/constants/app"),
                                m = e("../../../shared/constants/alerts"),
                                h = (a = e("./home.component")) && a.__esModule ? a : { default: a };
                            var E = (0, r.compose)(
                                s.withRouter,
                                (0, o.connect)(
                                    (e) => {
                                        var t;
                                        const { metamask: n, appState: a } = e,
                                            {
                                                suggestedAssets: r,
                                                seedPhraseBackedUp: o,
                                                selectedAddress: s,
                                                connectedStatusPopoverHasBeenShown: c,
                                                defaultHomeActiveTabName: h,
                                                swapsState: E,
                                                firstTimeFlowType: g,
                                                completedOnboarding: _,
                                            } = n,
                                            { forgottenPassword: y } = a,
                                            v = (0, i.getTotalUnapprovedCount)(e),
                                            b = (0, d.getSwapsFeatureIsLive)(e),
                                            T = (0, i.getUnapprovedTemplatedConfirmations)(e),
                                            k = (0, p.getEnvironmentType)(),
                                            N = k === f.ENVIRONMENT_TYPE_POPUP,
                                            w = k === f.ENVIRONMENT_TYPE_NOTIFICATION;
                                        let O, P;
                                        (O = (0, i.getFirstPermissionRequest)(e)), (P = (null === (t = O) || void 0 === t ? void 0 : t.metadata.id) || null);
                                        const A = (0, i.getOriginOfCurrentTab)(e),
                                            S = N && (0, u.getWeb3ShimUsageAlertEnabledness)(e) && (0, i.activeTabHasPermissions)(e) && (0, i.getWeb3ShimUsageStateForOrigin)(e, A) === m.WEB3_SHIM_USAGE_ALERT_STATES.RECORDED,
                                            C = (0, i.hasUnsignedQRHardwareTransaction)(e) || (0, i.hasUnsignedQRHardwareMessage)(e);
                                        return {
                                            forgottenPassword: y,
                                            suggestedAssets: r,
                                            swapsEnabled: b,
                                            unconfirmedTransactionsCount: (0, i.unconfirmedTransactionsCountSelector)(e),
                                            shouldShowSeedPhraseReminder: (0, i.getShouldShowSeedPhraseReminder)(e),
                                            isPopup: N,
                                            isNotification: w,
                                            selectedAddress: s,
                                            firstPermissionsRequestId: P,
                                            totalUnapprovedCount: v,
                                            connectedStatusPopoverHasBeenShown: c,
                                            defaultHomeActiveTabName: h,
                                            firstTimeFlowType: g,
                                            completedOnboarding: _,
                                            haveSwapsQuotes: Boolean(Object.values(E.quotes || {}).length),
                                            swapsFetchParams: E.fetchParams,
                                            showAwaitingSwapScreen: "awaiting" === E.routeState,
                                            isMainnet: (0, i.getIsMainnet)(e),
                                            originOfCurrentTab: A,
                                            shouldShowWeb3ShimUsageNotification: S,
                                            pendingConfirmations: T,
                                            infuraBlocked: (0, i.getInfuraBlocked)(e),
                                            announcementsToShow: (0, i.getSortedAnnouncementsToShow)(e).length > 0,
                                            showWhatsNewPopup: (0, i.getShowWhatsNewPopup)(e),
                                            showPortfolioTooltip: (0, i.getShowPortfolioTooltip)(e),
                                            portfolioTooltipWasShownInThisSession: (0, l.getPortfolioTooltipWasShownInThisSession)(e),
                                            showRecoveryPhraseReminder: (0, i.getShowRecoveryPhraseReminder)(e),
                                            seedPhraseBackedUp: o,
                                            newNetworkAdded: (0, i.getNewNetworkAdded)(e),
                                            isSigningQRHardwareTransaction: C,
                                            newCollectibleAddedMessage: (0, i.getNewCollectibleAddedMessage)(e),
                                            newTokensImported: (0, i.getNewTokensImported)(e),
                                            newCustomNetworkAdded: a.newCustomNetworkAdded,
                                            onboardedInThisUISession: a.onboardedInThisUISession,
                                        };
                                    },
                                    (e) => ({
                                        closeNotificationPopup: () => (0, c.closeNotificationPopup)(),
                                        setConnectedStatusPopoverHasBeenShown: () => e((0, c.setConnectedStatusPopoverHasBeenShown)()),
                                        onTabClick: (t) => e((0, c.setDefaultHomeActiveTabName)(t)),
                                        setWeb3ShimUsageAlertDismissed: (e) => (0, c.setWeb3ShimUsageAlertDismissed)(e),
                                        disableWeb3ShimUsageAlert: () => (0, c.setAlertEnabledness)(m.ALERT_TYPES.web3ShimUsage, !1),
                                        hideWhatsNewPopup: () => e((0, l.hideWhatsNewPopup)()),
                                        hidePortfolioTooltip: c.hidePortfolioTooltip,
                                        setRecoveryPhraseReminderHasBeenShown: () => e((0, c.setRecoveryPhraseReminderHasBeenShown)()),
                                        setRecoveryPhraseReminderLastShown: (t) => e((0, c.setRecoveryPhraseReminderLastShown)(t)),
                                        setNewNetworkAdded: (t) => {
                                            e((0, c.setNewNetworkAdded)(t));
                                        },
                                        setNewCollectibleAddedMessage: (t) => {
                                            e((0, c.setNewCollectibleAddedMessage)(t));
                                        },
                                        setNewTokensImported: (t) => {
                                            e((0, c.setNewTokensImported)(t));
                                        },
                                        clearNewCustomNetworkAdded: () => {
                                            e((0, l.setNewCustomNetworkAdded)({}));
                                        },
                                        setRpcTarget: (t, n, a, r) => {
                                            e((0, c.setRpcTarget)(t, n, a, r));
                                        },
                                        setPortfolioTooltipWasShownInThisSession: () => e((0, l.setPortfolioTooltipWasShownInThisSession)()),
                                    })
                                )
                            )(h.default);
                            n.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6094,
            { "./home.container": 6093 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./home.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6095,
            {
                "../../../app/scripts/lib/util": 86,
                "../../../shared/constants/tokens": 5339,
                "../../../shared/constants/transaction": 5340,
                "../../../shared/modules/hexstring-utils": 5354,
                "../../components/ui/actionable-message/actionable-message": 5703,
                "../../components/ui/button": 5711,
                "../../components/ui/page-container": 5821,
                "../../components/ui/tabs": 5851,
                "../../components/ui/text-field": 5855,
                "../../components/ui/typography": 5869,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/routes": 5904,
                "../../helpers/constants/zendesk-url": 5907,
                "../../helpers/utils/token-util": 5934,
                "../../helpers/utils/util": 5937,
                "./token-list": 6098,
                "./token-search": 6103,
                "@metamask/etherscan-link": 1158,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = N(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = k(e("prop-types")),
                                o = e("@metamask/etherscan-link"),
                                s = k(e("../../helpers/constants/zendesk-url")),
                                i = e("../../helpers/utils/util"),
                                c = e("../../helpers/utils/token-util"),
                                l = e("../../helpers/constants/routes"),
                                u = k(e("../../components/ui/text-field")),
                                d = k(e("../../components/ui/page-container")),
                                p = e("../../components/ui/tabs"),
                                f = e("../../../app/scripts/lib/util"),
                                m = e("../../../shared/modules/hexstring-utils"),
                                h = k(e("../../components/ui/actionable-message/actionable-message")),
                                E = k(e("../../components/ui/typography")),
                                g = e("../../helpers/constants/design-system"),
                                _ = k(e("../../components/ui/button")),
                                y = e("../../../shared/constants/transaction"),
                                v = e("../../../shared/constants/tokens"),
                                b = k(e("./token-search")),
                                T = k(e("./token-list"));
                            function k(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function N(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (N = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function w(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class O extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        w(this, "state", {
                                            customAddress: "",
                                            customSymbol: "",
                                            customDecimals: 0,
                                            searchResults: [],
                                            selectedTokens: {},
                                            standard: y.TOKEN_STANDARDS.NONE,
                                            tokenSelectorError: null,
                                            customAddressError: null,
                                            customSymbolError: null,
                                            customDecimalsError: null,
                                            collectibleAddressError: null,
                                            forceEditSymbol: !1,
                                            symbolAutoFilled: !1,
                                            decimalAutoFilled: !1,
                                            mainnetTokenWarning: null,
                                        });
                                }
                                componentDidMount() {
                                    this.tokenInfoGetter = (0, c.tokenInfoGetter)();
                                    const { pendingTokens: e = {} } = this.props,
                                        t = Object.keys(e);
                                    if (t.length > 0) {
                                        let n = {},
                                            a = {};
                                        t.forEach((t) => {
                                            const r = e[t],
                                                { isCustom: o } = r;
                                            o ? (a = { ...r }) : (n = { ...n, [t]: { ...r } });
                                        });
                                        const { address: r = "", symbol: o = "", decimals: s = 0 } = a;
                                        this.setState({ selectedTokens: n, customAddress: r, customSymbol: o, customDecimals: s });
                                    }
                                }
                                handleToggleToken(e) {
                                    const { address: t } = e,
                                        { selectedTokens: n = {} } = this.state,
                                        a = { ...n };
                                    t in a ? delete a[t] : (a[t] = e), this.setState({ selectedTokens: a, tokenSelectorError: null });
                                }
                                hasError() {
                                    const { tokenSelectorError: e, customAddressError: t, customSymbolError: n, customDecimalsError: a, collectibleAddressError: r } = this.state;
                                    return e || t || n || a || r;
                                }
                                hasSelected() {
                                    const { customAddress: e = "", selectedTokens: t = {} } = this.state;
                                    return e || Object.keys(t).length > 0;
                                }
                                handleNext() {
                                    if (this.hasError()) return;
                                    if (!this.hasSelected()) return void this.setState({ tokenSelectorError: this.context.t("mustSelectOne") });
                                    const { setPendingTokens: e, history: t, tokenList: n } = this.props,
                                        a = Object.keys(n),
                                        { customAddress: r, customSymbol: o, customDecimals: s, selectedTokens: i, standard: c } = this.state;
                                    e({ customToken: { address: r, symbol: o, decimals: s, standard: c }, selectedTokens: i, tokenAddressList: a }), t.push(l.CONFIRM_IMPORT_TOKEN_ROUTE);
                                }
                                async attemptToAutoFillTokenParams(e) {
                                    const { tokenList: t } = this.props,
                                        { symbol: n = "", decimals: a } = await this.tokenInfoGetter(e, t),
                                        r = Boolean(n),
                                        o = Boolean(a);
                                    this.setState({ symbolAutoFilled: r, decimalAutoFilled: o }), this.handleCustomSymbolChange(n || ""), this.handleCustomDecimalsChange(a);
                                }
                                async handleCustomAddressChange(e) {
                                    const t = e.trim();
                                    this.setState({ customAddress: t, customAddressError: null, collectibleAddressError: null, tokenSelectorError: null, symbolAutoFilled: !1, decimalAutoFilled: !1, mainnetTokenWarning: null });
                                    const n = (0, m.isValidHexAddress)(t, { allowNonPrefixed: !1 }),
                                        a = (0, f.addHexPrefix)(t).toLowerCase(),
                                        r = Object.keys(v.STATIC_MAINNET_TOKEN_LIST).some((e) => e.toLowerCase() === t.toLowerCase()),
                                        o = "0x1" === this.props.chainId;
                                    let s;
                                    if (n)
                                        try {
                                            ({ standard: s } = await this.props.getTokenStandardAndDetails(a, this.props.selectedAddress));
                                        } catch (e) {}
                                    const c = 0 === t.length || "0x0000000000000000000000000000000000000000" === t;
                                    switch (!0) {
                                        case !n && !c:
                                            this.setState({ customAddressError: this.context.t("invalidAddress"), customSymbol: "", customDecimals: 0, customSymbolError: null, customDecimalsError: null });
                                            break;
                                        case r && !o:
                                            this.setState({ mainnetTokenWarning: this.context.t("mainnetToken"), customSymbol: "", customDecimals: 0, customSymbolError: null, customDecimalsError: null });
                                            break;
                                        case Boolean(this.props.identities[a]):
                                            this.setState({ customAddressError: this.context.t("personalAddressDetected") });
                                            break;
                                        case (0, i.checkExistingAddresses)(t, this.props.tokens):
                                            this.setState({ customAddressError: this.context.t("tokenAlreadyAdded") });
                                            break;
                                        default:
                                            c || (this.attemptToAutoFillTokenParams(t), s && this.setState({ standard: s }));
                                    }
                                }
                                handleCustomSymbolChange(e) {
                                    const t = e.trim(),
                                        n = t.length;
                                    let a = null;
                                    (n <= 0 || n >= 12) && (a = this.context.t("symbolBetweenZeroTwelve")), this.setState({ customSymbol: t, customSymbolError: a });
                                }
                                handleCustomDecimalsChange(e) {
                                    let t,
                                        n = null;
                                    e ? ((t = Number(e.trim())), (n = e < 0 || e > 36 ? this.context.t("decimalsMustZerotoTen") : null)) : ((t = ""), (n = this.context.t("tokenDecimalFetchFailed"))),
                                        this.setState({ customDecimals: t, customDecimalsError: n });
                                }
                                renderCustomTokenForm() {
                                    var e;
                                    const { t: t } = this.context,
                                        {
                                            customAddress: n,
                                            customSymbol: r,
                                            customDecimals: c,
                                            customAddressError: d,
                                            customSymbolError: p,
                                            customDecimalsError: f,
                                            forceEditSymbol: m,
                                            symbolAutoFilled: y,
                                            decimalAutoFilled: v,
                                            mainnetTokenWarning: b,
                                            collectibleAddressError: T,
                                        } = this.state,
                                        { chainId: k, rpcPrefs: N, isDynamicTokenListAvailable: w, tokenDetectionInactiveOnNonMainnetSupportedNetwork: O, history: P } = this.props,
                                        A = (0, o.getTokenTrackerLink)(n, k, null, null, { blockExplorerUrl: null !== (e = null == N ? void 0 : N.blockExplorerUrl) && void 0 !== e ? e : null }),
                                        S = null != N && N.blockExplorerUrl ? (0, i.getURLHostName)(A) : t("etherscan");
                                    return a.default.createElement(
                                        "div",
                                        { className: "import-token__custom-token-form" },
                                        O
                                            ? a.default.createElement(h.default, {
                                                  type: "warning",
                                                  message: t("customTokenWarningInTokenDetectionNetworkWithTDOFF", [
                                                      a.default.createElement(
                                                          _.default,
                                                          { type: "link", key: "import-token-security-risk", className: "import-token__link", rel: "noopener noreferrer", target: "_blank", href: s.default.TOKEN_SAFETY_PRACTICES },
                                                          t("tokenScamSecurityRisk")
                                                      ),
                                                      a.default.createElement(
                                                          _.default,
                                                          { type: "link", key: "import-token-token-detection-announcement", className: "import-token__link", onClick: () => P.push(`${l.ADVANCED_ROUTE}#token-description`) },
                                                          t("inYourSettings")
                                                      ),
                                                  ]),
                                                  withRightButton: !0,
                                                  useIcon: !0,
                                                  iconFillColor: "var(--color-warning-default)",
                                              })
                                            : a.default.createElement(h.default, {
                                                  type: w ? "warning" : "default",
                                                  message: t(w ? "customTokenWarningInTokenDetectionNetwork" : "customTokenWarningInNonTokenDetectionNetwork", [
                                                      a.default.createElement(
                                                          _.default,
                                                          { type: "link", key: "import-token-fake-token-warning", className: "import-token__link", rel: "noopener noreferrer", target: "_blank", href: s.default.TOKEN_SAFETY_PRACTICES },
                                                          t("learnScamRisk")
                                                      ),
                                                  ]),
                                                  withRightButton: !0,
                                                  useIcon: !0,
                                                  iconFillColor: w ? "var(--color-warning-default)" : "var(--color-info-default)",
                                              }),
                                        a.default.createElement(u.default, {
                                            id: "custom-address",
                                            label: t("tokenContractAddress"),
                                            type: "text",
                                            value: n,
                                            onChange: (e) => this.handleCustomAddressChange(e.target.value),
                                            error: d || b || T,
                                            fullWidth: !0,
                                            autoFocus: !0,
                                            margin: "normal",
                                        }),
                                        a.default.createElement(u.default, {
                                            id: "custom-symbol",
                                            label: a.default.createElement(
                                                "div",
                                                { className: "import-token__custom-symbol__label-wrapper" },
                                                a.default.createElement("span", { className: "import-token__custom-symbol__label" }, t("tokenSymbol")),
                                                y && !m && a.default.createElement("div", { className: "import-token__custom-symbol__edit", onClick: () => this.setState({ forceEditSymbol: !0 }) }, t("edit"))
                                            ),
                                            type: "text",
                                            value: r,
                                            onChange: (e) => this.handleCustomSymbolChange(e.target.value),
                                            error: p,
                                            fullWidth: !0,
                                            margin: "normal",
                                            disabled: y && !m,
                                        }),
                                        a.default.createElement(u.default, {
                                            id: "custom-decimals",
                                            label: t("decimal"),
                                            type: "number",
                                            value: c,
                                            onChange: (e) => this.handleCustomDecimalsChange(e.target.value),
                                            error: c ? f : null,
                                            fullWidth: !0,
                                            margin: "normal",
                                            disabled: v,
                                            min: 0,
                                            max: 36,
                                        }),
                                        "" === c &&
                                            a.default.createElement(h.default, {
                                                message: a.default.createElement(
                                                    a.default.Fragment,
                                                    null,
                                                    a.default.createElement(E.default, { variant: g.TYPOGRAPHY.H7, fontWeight: g.FONT_WEIGHT.BOLD }, t("tokenDecimalFetchFailed")),
                                                    a.default.createElement(
                                                        E.default,
                                                        { variant: g.TYPOGRAPHY.H7, fontWeight: g.FONT_WEIGHT.NORMAL },
                                                        t("verifyThisTokenDecimalOn", [
                                                            a.default.createElement(
                                                                _.default,
                                                                { type: "link", key: "import-token-verify-token-decimal", className: "import-token__link", rel: "noopener noreferrer", target: "_blank", href: A },
                                                                S
                                                            ),
                                                        ])
                                                    )
                                                ),
                                                type: "warning",
                                                withRightButton: !0,
                                                className: "import-token__decimal-warning",
                                            })
                                    );
                                }
                                renderSearchToken() {
                                    const { t: e } = this.context,
                                        { tokenList: t, history: n, useTokenDetection: r, networkName: o } = this.props,
                                        { tokenSelectorError: s, selectedTokens: i, searchResults: c } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: "import-token__search-token" },
                                        !r &&
                                            a.default.createElement(h.default, {
                                                message: e("enhancedTokenDetectionAlertMessage", [
                                                    o,
                                                    a.default.createElement(
                                                        _.default,
                                                        { type: "link", key: "token-detection-announcement", className: "import-token__link", onClick: () => n.push(`${l.ADVANCED_ROUTE}#token-description`) },
                                                        e("enableFromSettings")
                                                    ),
                                                ]),
                                                withRightButton: !0,
                                                useIcon: !0,
                                                iconFillColor: "var(--color-primary-default)",
                                                className: "import-token__token-detection-announcement",
                                            }),
                                        a.default.createElement(b.default, { onSearch: ({ results: e = [] }) => this.setState({ searchResults: e }), error: s, tokenList: t }),
                                        a.default.createElement("div", { className: "import-token__token-list" }, a.default.createElement(T.default, { results: c, selectedTokens: i, onToggleToken: (e) => this.handleToggleToken(e) }))
                                    );
                                }
                                renderTabs() {
                                    const { t: e } = this.context,
                                        { showSearchTab: t } = this.props,
                                        n = [];
                                    return (
                                        t && n.push(a.default.createElement(p.Tab, { name: e("search"), key: "search-tab" }, this.renderSearchToken())),
                                        n.push(a.default.createElement(p.Tab, { name: e("customToken"), key: "custom-tab" }, this.renderCustomTokenForm())),
                                        a.default.createElement(p.Tabs, null, n)
                                    );
                                }
                                render() {
                                    const { history: e, clearPendingTokens: t, mostRecentOverviewPage: n } = this.props;
                                    return a.default.createElement(d.default, {
                                        title: this.context.t("importTokensCamelCase"),
                                        tabsComponent: this.renderTabs(),
                                        onSubmit: () => this.handleNext(),
                                        hideCancel: !0,
                                        disabled: Boolean(this.hasError()) || !this.hasSelected(),
                                        onClose: () => {
                                            t(), e.push(n);
                                        },
                                    });
                                }
                            }
                            w(O, "contextTypes", { t: r.default.func }),
                                w(O, "propTypes", {
                                    history: r.default.object,
                                    setPendingTokens: r.default.func,
                                    pendingTokens: r.default.object,
                                    clearPendingTokens: r.default.func,
                                    tokens: r.default.array,
                                    identities: r.default.object,
                                    showSearchTab: r.default.bool.isRequired,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    chainId: r.default.string,
                                    rpcPrefs: r.default.object,
                                    tokenList: r.default.object,
                                    useTokenDetection: r.default.bool,
                                    getTokenStandardAndDetails: r.default.func,
                                    selectedAddress: r.default.string,
                                    isDynamicTokenListAvailable: r.default.bool.isRequired,
                                    tokenDetectionInactiveOnNonMainnetSupportedNetwork: r.default.bool.isRequired,
                                    networkName: r.default.string.isRequired,
                                }),
                                w(O, "defaultProps", { tokenList: {} });
                            var P = O;
                            n.default = P;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6096,
            { "../../ducks/history/history": 5889, "../../selectors/selectors": 6303, "../../store/actions": 6307, "./import-token.component": 6095, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../store/actions"),
                                s = e("../../ducks/history/history"),
                                i = e("../../selectors/selectors"),
                                c = (a = e("./import-token.component")) && a.__esModule ? a : { default: a };
                            var l = (0, r.connect)(
                                (e) => {
                                    const {
                                            metamask: {
                                                identities: t,
                                                tokens: n,
                                                pendingTokens: a,
                                                provider: { chainId: r },
                                                useTokenDetection: o,
                                                selectedAddress: c,
                                            },
                                        } = e,
                                        l = (0, i.getIsTokenDetectionInactiveOnMainnet)(e),
                                        u = (0, i.getIsTokenDetectionSupported)(e) || l || Boolean(!1);
                                    return {
                                        identities: t,
                                        mostRecentOverviewPage: (0, s.getMostRecentOverviewPage)(e),
                                        tokens: n,
                                        pendingTokens: a,
                                        showSearchTab: u,
                                        chainId: r,
                                        rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e),
                                        tokenList: (0, i.getTokenList)(e),
                                        useTokenDetection: o,
                                        selectedAddress: c,
                                        isDynamicTokenListAvailable: (0, i.getIsDynamicTokenListAvailable)(e),
                                        networkName: (0, i.getTokenDetectionSupportNetworkByChainId)(e),
                                        tokenDetectionInactiveOnNonMainnetSupportedNetwork: (0, i.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork)(e),
                                    };
                                },
                                (e) => ({
                                    setPendingTokens: (t) => e((0, o.setPendingTokens)(t)),
                                    clearPendingTokens: () => e((0, o.clearPendingTokens)()),
                                    getTokenStandardAndDetails: (e, t) => (0, o.getTokenStandardAndDetails)(e, t, null),
                                })
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6097,
            { "./import-token.container": 6096 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./import-token.container")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6098,
            { "./token-list.container": 6102 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./token-list.container")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6099,
            { "./token-list-placeholder.component": 6100 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./token-list-placeholder.component")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            610,
            { "./Drawer": 609, "@babel/runtime/helpers/interopRequireDefault": 181 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var r = a(e("./Drawer"));
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6100,
            { "../../../../components/ui/button": 5711, "../../../../components/ui/icon/icon-token-search": 5768, "../../../../helpers/constants/zendesk-url": 5907, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r,
                                o,
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                i = d(e("prop-types")),
                                c = d(e("../../../../components/ui/button")),
                                l = d(e("../../../../components/ui/icon/icon-token-search")),
                                u = d(e("../../../../helpers/constants/zendesk-url"));
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            class f extends s.Component {
                                render() {
                                    return s.default.createElement(
                                        "div",
                                        { className: "token-list-placeholder" },
                                        s.default.createElement(l.default, { size: 64, color: "var(--color-icon-muted)" }),
                                        s.default.createElement("div", { className: "token-list-placeholder__text" }, this.context.t("addAcquiredTokens")),
                                        s.default.createElement(
                                            c.default,
                                            { type: "link", className: "token-list-placeholder__link", href: u.default.ADD_CUSTOM_TOKENS, target: "_blank", rel: "noopener noreferrer" },
                                            this.context.t("learnMoreUpperCase")
                                        )
                                    );
                                }
                            }
                            (n.default = f), (a = f), (r = "contextTypes"), (o = { t: i.default.func }), r in a ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = o);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6101,
            { "../../../helpers/utils/util": 5937, "./token-list-placeholder": 6099, classnames: 1772, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = l(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = c(e("prop-types")),
                                o = c(e("classnames")),
                                s = e("../../../helpers/utils/util"),
                                i = c(e("./token-list-placeholder"));
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function l(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (l = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function u(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class d extends a.Component {
                                render() {
                                    const { results: e = [], selectedTokens: t = {}, onToggleToken: n, tokens: r = [] } = this.props;
                                    return 0 === e.length
                                        ? a.default.createElement(i.default, null)
                                        : a.default.createElement(
                                              "div",
                                              { className: "token-list" },
                                              a.default.createElement("div", { className: "token-list__title" }, this.context.t("searchResults")),
                                              a.default.createElement(
                                                  "div",
                                                  { className: "token-list__tokens-container" },
                                                  Array(6)
                                                      .fill(undefined)
                                                      .map((i, c) => {
                                                          var l, u, d;
                                                          const { symbol: p, name: f, address: m } = e[c] || {},
                                                              h = (0, s.checkExistingAddresses)(m, r),
                                                              E = () => !h && n(e[c]);
                                                          return (
                                                              Boolean((null === (l = e[c]) || void 0 === l ? void 0 : l.iconUrl) || p || f) &&
                                                              a.default.createElement(
                                                                  "div",
                                                                  {
                                                                      className: (0, o.default)("token-list__token", { "token-list__token--selected": t[m], "token-list__token--disabled": h }),
                                                                      onClick: E,
                                                                      onKeyPress: (e) => "Enter" === e.key && E(),
                                                                      key: c,
                                                                      tabIndex: "0",
                                                                  },
                                                                  a.default.createElement("div", {
                                                                      className: "token-list__token-icon",
                                                                      style: { backgroundImage: (null === (u = e[c]) || void 0 === u ? void 0 : u.iconUrl) && `url(${null === (d = e[c]) || void 0 === d ? void 0 : d.iconUrl})` },
                                                                  }),
                                                                  a.default.createElement("div", { className: "token-list__token-data" }, a.default.createElement("span", { className: "token-list__token-name" }, `${f} (${p})`))
                                                              )
                                                          );
                                                      })
                                              )
                                          );
                                }
                            }
                            (n.default = d), u(d, "contextTypes", { t: r.default.func }), u(d, "propTypes", { tokens: r.default.array, results: r.default.array, selectedTokens: r.default.object, onToggleToken: r.default.func });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6102,
            { "./token-list.component": 6101, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = (a = e("./token-list.component")) && a.__esModule ? a : { default: a };
                            var s = (0, r.connect)((e) => {
                                const { tokens: t } = e.metamask;
                                return { tokens: t };
                            })(o.default);
                            n.default = s;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6103,
            { "./token-search.component": 6104 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a;
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = ((a = e("./token-search.component")) && a.__esModule ? a : { default: a }).default;
                            n.default = r;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6104,
            {
                "../../../../shared/modules/string-utils": 5361,
                "../../../components/ui/icon/search-icon": 5775,
                "../../../components/ui/text-field": 5855,
                "@material-ui/core/InputAdornment": 660,
                "fuse.js": 4275,
                "prop-types": 4806,
                react: 4980,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = d(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = u(e("prop-types")),
                                o = u(e("fuse.js")),
                                s = u(e("@material-ui/core/InputAdornment")),
                                i = u(e("../../../components/ui/text-field")),
                                c = e("../../../../shared/modules/string-utils"),
                                l = u(e("../../../components/ui/icon/search-icon"));
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (d = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function p(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class f extends a.Component {
                                constructor(e) {
                                    super(e), p(this, "state", { searchQuery: "" });
                                    const { tokenList: t } = this.props;
                                    (this.tokenList = Object.values(t)),
                                        (this.tokenSearchFuse = new o.default(this.tokenList, {
                                            shouldSort: !0,
                                            threshold: 0.45,
                                            location: 0,
                                            distance: 100,
                                            maxPatternLength: 32,
                                            minMatchCharLength: 1,
                                            keys: [
                                                { name: "name", weight: 0.5 },
                                                { name: "symbol", weight: 0.5 },
                                            ],
                                        }));
                                }
                                handleSearch(e) {
                                    this.setState({ searchQuery: e });
                                    const t = this.tokenSearchFuse.search(e),
                                        n = [...this.tokenList.filter((t) => t.address && e && (0, c.isEqualCaseInsensitive)(t.address, e)), ...t];
                                    this.props.onSearch({ searchQuery: e, results: n });
                                }
                                renderAdornment() {
                                    return a.default.createElement(s.default, { position: "start", style: { marginRight: "12px" } }, a.default.createElement(l.default, { color: "var(--color-icon-muted)" }));
                                }
                                render() {
                                    const { error: e } = this.props,
                                        { searchQuery: t } = this.state;
                                    return a.default.createElement(i.default, {
                                        id: "search-tokens",
                                        placeholder: this.context.t("searchTokens"),
                                        type: "text",
                                        value: t,
                                        onChange: (e) => this.handleSearch(e.target.value),
                                        error: e,
                                        fullWidth: !0,
                                        autoFocus: !0,
                                        autoComplete: "off",
                                        startAdornment: this.renderAdornment(),
                                    });
                                }
                            }
                            (n.default = f), p(f, "contextTypes", { t: r.default.func }), p(f, "defaultProps", { error: null }), p(f, "propTypes", { onSearch: r.default.func, error: r.default.string, tokenList: r.default.object });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6105,
            { "../contexts/i18n": 5877, "../contexts/metametrics": 5878, "./error": 6051, "./routes": 6138, "@sentry/browser": 1229, "prop-types": 4806, react: 4980, "react-redux": 4939, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = m(e("react")),
                                r = p(e("prop-types")),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = m(e("@sentry/browser")),
                                c = e("../contexts/i18n"),
                                l = e("../contexts/metametrics"),
                                u = p(e("./error")),
                                d = p(e("./routes"));
                            function p(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function f(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (f = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function m(e, t) {
                                if (!t && e && e.__esModule) return e;
                                if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                var n = f(t);
                                if (n && n.has(e)) return n.get(e);
                                var a = {},
                                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var o in e)
                                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                        var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                        s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                    }
                                return (a.default = e), n && n.set(e, a), a;
                            }
                            class h extends a.PureComponent {
                                constructor(...e) {
                                    var t, n, a;
                                    super(...e), (a = {}), (n = "state") in (t = this) ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = a);
                                }
                                static getDerivedStateFromError(e) {
                                    return { error: e };
                                }
                                componentDidCatch(e) {
                                    i.captureException(e);
                                }
                                render() {
                                    const { error: e, errorId: t } = this.state,
                                        { store: n } = this.props;
                                    return e
                                        ? a.default.createElement(
                                              o.Provider,
                                              { store: n },
                                              a.default.createElement(c.I18nProvider, null, a.default.createElement(c.LegacyI18nProvider, null, a.default.createElement(u.default, { error: e, errorId: t })))
                                          )
                                        : a.default.createElement(
                                              o.Provider,
                                              { store: n },
                                              a.default.createElement(
                                                  s.HashRouter,
                                                  { hashType: "noslash" },
                                                  a.default.createElement(
                                                      l.MetaMetricsProvider,
                                                      null,
                                                      a.default.createElement(
                                                          l.LegacyMetaMetricsProvider,
                                                          null,
                                                          a.default.createElement(c.I18nProvider, null, a.default.createElement(c.LegacyI18nProvider, null, a.default.createElement(d.default, null)))
                                                      )
                                                  )
                                              )
                                          );
                                }
                            }
                            h.propTypes = { store: r.default.object };
                            var E = h;
                            n.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6106,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../components/app/create-new-vault": 5458,
                "../../components/ui/box": 5707,
                "../../components/ui/button": 5711,
                "../../components/ui/typography": 5869,
                "../../helpers/constants/design-system": 5900,
                "../../helpers/constants/routes": 5904,
                "../../helpers/constants/zendesk-url": 5907,
                "../../store/actions": 6307,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = E(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = h(e("prop-types")),
                                o = e("react-redux"),
                                s = e("../../store/actions"),
                                i = e("../../helpers/constants/routes"),
                                c = h(e("../../components/app/create-new-vault")),
                                l = h(e("../../components/ui/button")),
                                u = h(e("../../components/ui/box")),
                                d = h(e("../../components/ui/typography")),
                                p = h(e("../../helpers/constants/zendesk-url")),
                                f = e("../../helpers/constants/design-system"),
                                m = e("../../../shared/constants/metametrics");
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (E = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function g(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            class _ extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        g(this, "handleImport", async (e, t) => {
                                            const { createNewVaultAndRestore: n, leaveImportSeedScreenState: a, history: r } = this.props;
                                            a(),
                                                await n(e, t),
                                                this.context.trackEvent({ category: m.EVENT.CATEGORIES.RETENTION, event: "onboardingRestoredVault", properties: { action: "userEntersSeedPhrase", legacy_event: !0 } }),
                                                r.push(i.DEFAULT_ROUTE);
                                        });
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { isLoading: t } = this.props;
                                    return a.default.createElement(
                                        u.default,
                                        { className: "first-view-main-wrapper" },
                                        a.default.createElement(
                                            u.default,
                                            { className: "first-view-main" },
                                            a.default.createElement(
                                                u.default,
                                                { className: "import-account" },
                                                a.default.createElement(
                                                    "a",
                                                    {
                                                        className: "import-account__back-button",
                                                        onClick: (e) => {
                                                            e.preventDefault(), this.props.leaveImportSeedScreenState(), this.props.history.goBack();
                                                        },
                                                        href: "#",
                                                    },
                                                    `< ${e("back")}`
                                                ),
                                                a.default.createElement(d.default, { variant: f.TYPOGRAPHY.H1, color: f.COLORS.TEXT_DEFAULT }, e("resetWallet")),
                                                a.default.createElement(d.default, { color: f.COLORS.TEXT_DEFAULT }, e("resetWalletSubHeader")),
                                                a.default.createElement(
                                                    d.default,
                                                    { color: f.COLORS.TEXT_DEFAULT, marginTop: 4, marginBottom: 4 },
                                                    e("resetWalletUsingSRP", [
                                                        a.default.createElement(
                                                            l.default,
                                                            { type: "link", target: "_blank", rel: "noopener noreferrer", href: p.default.ADD_MISSING_ACCOUNTS, key: "import-account-secretphase", className: "import-account__link" },
                                                            e("reAddAccounts")
                                                        ),
                                                        a.default.createElement(
                                                            l.default,
                                                            { type: "link", target: "_blank", rel: "noopener noreferrer", href: p.default.IMPORT_ACCOUNTS, key: "import-account-reimport-accounts", className: "import-account__link" },
                                                            e("reAdded")
                                                        ),
                                                        a.default.createElement(
                                                            l.default,
                                                            { type: "link", target: "_blank", rel: "noopener noreferrer", href: p.default.ADD_CUSTOM_TOKENS, key: "import-account-readd-tokens", className: "import-account__link" },
                                                            e("reAdded")
                                                        ),
                                                    ])
                                                ),
                                                a.default.createElement(d.default, { color: f.COLORS.TEXT_DEFAULT, margin: 0, marginBottom: 4 }, e("resetWalletWarning")),
                                                a.default.createElement(c.default, { disabled: t, onSubmit: this.handleImport, submitText: e("restore") })
                                            )
                                        )
                                    );
                                }
                            }
                            g(_, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                                g(_, "propTypes", { createNewVaultAndRestore: r.default.func.isRequired, leaveImportSeedScreenState: r.default.func, history: r.default.object, isLoading: r.default.bool });
                            var y = (0, o.connect)(
                                ({ appState: { isLoading: e } }) => ({ isLoading: e }),
                                (e) => ({
                                    leaveImportSeedScreenState: () => {
                                        e((0, s.unMarkPasswordForgotten)());
                                    },
                                    createNewVaultAndRestore: (t, n) => e((0, s.createNewVaultAndRestore)(t, n)),
                                })
                            )(_);
                            n.default = y;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6107,
            {
                "../../../shared/constants/metametrics": 5332,
                "../../components/ui/button": 5711,
                "../../components/ui/export-text-container": 5741,
                "../../ducks/history/history": 5889,
                "../../store/actions": 6307,
                classnames: 1772,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = f(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-redux"),
                                o = p(e("prop-types")),
                                s = p(e("classnames")),
                                i = e("../../store/actions"),
                                c = p(e("../../components/ui/export-text-container")),
                                l = e("../../ducks/history/history"),
                                u = e("../../../shared/constants/metametrics"),
                                d = p(e("../../components/ui/button"));
                            function p(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function f(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (f = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            const m = "PASSWORD_PROMPT_SCREEN";
                            class h extends a.Component {
                                constructor(...e) {
                                    var t, n, a;
                                    super(...e),
                                        (a = { screen: m, password: "", seedWords: null, error: null }),
                                        (n = "state") in (t = this) ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = a);
                                }
                                componentDidMount() {
                                    const e = document.getElementById("password-box");
                                    e && e.focus();
                                }
                                handleSubmit(e) {
                                    e.preventDefault(),
                                        this.setState({ seedWords: null, error: null }),
                                        this.props
                                            .requestRevealSeedWords(this.state.password)
                                            .then((e) => {
                                                this.context.trackEvent({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_REVEALED, properties: { key_type: u.EVENT.KEY_TYPES.SRP } }),
                                                    this.setState({ seedWords: e, screen: "REVEAL_SEED_SCREEN" });
                                            })
                                            .catch((e) => {
                                                this.context.trackEvent({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_FAILED, properties: { key_type: u.EVENT.KEY_TYPES.SRP, reason: e.message } }),
                                                    this.setState({ error: e.message });
                                            });
                                }
                                renderWarning() {
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container__warning-container" },
                                        a.default.createElement("i", { className: "fa fa-exclamation-triangle fa-2x page-container__warning-icon" }),
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__warning-message" },
                                            a.default.createElement("div", { className: "page-container__warning-title" }, this.context.t("revealSeedWordsWarningTitle")),
                                            a.default.createElement("div", null, this.context.t("revealSeedWordsWarning"))
                                        )
                                    );
                                }
                                renderContent() {
                                    return this.state.screen === m ? this.renderPasswordPromptContent() : this.renderRevealSeedContent();
                                }
                                renderPasswordPromptContent() {
                                    const { t: e } = this.context;
                                    return a.default.createElement(
                                        "form",
                                        { onSubmit: (e) => this.handleSubmit(e) },
                                        a.default.createElement("label", { className: "input-label", htmlFor: "password-box" }, e("enterPasswordContinue")),
                                        a.default.createElement(
                                            "div",
                                            { className: "input-group" },
                                            a.default.createElement("input", {
                                                "data-testid": "input-password",
                                                type: "password",
                                                placeholder: e("password"),
                                                id: "password-box",
                                                value: this.state.password,
                                                onChange: (e) => this.setState({ password: e.target.value }),
                                                className: (0, s.default)("form-control", { "form-control--error": this.state.error }),
                                            })
                                        ),
                                        this.state.error && a.default.createElement("div", { className: "reveal-seed__error" }, this.state.error)
                                    );
                                }
                                renderRevealSeedContent() {
                                    const { t: e, trackEvent: t } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        null,
                                        a.default.createElement("label", { className: "reveal-seed__label" }, e("yourPrivateSeedPhrase")),
                                        a.default.createElement(c.default, {
                                            text: this.state.seedWords,
                                            onClickCopy: () => {
                                                t({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_COPIED, properties: { key_type: u.EVENT.KEY_TYPES.SRP, copy_method: "clipboard" } });
                                            },
                                            onClickDownload: () => {
                                                t({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_COPIED, properties: { key_type: u.EVENT.KEY_TYPES.SRP, copy_method: "file_download" } });
                                            },
                                        })
                                    );
                                }
                                renderFooter() {
                                    return this.state.screen === m ? this.renderPasswordPromptFooter() : this.renderRevealSeedFooter();
                                }
                                renderPasswordPromptFooter() {
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container__footer" },
                                        a.default.createElement(
                                            "footer",
                                            null,
                                            a.default.createElement(
                                                d.default,
                                                {
                                                    type: "secondary",
                                                    large: !0,
                                                    className: "page-container__footer-button",
                                                    onClick: () => {
                                                        this.context.trackEvent({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_CANCELED, properties: { key_type: u.EVENT.KEY_TYPES.SRP } }),
                                                            this.props.history.push(this.props.mostRecentOverviewPage);
                                                    },
                                                },
                                                this.context.t("cancel")
                                            ),
                                            a.default.createElement(
                                                d.default,
                                                {
                                                    type: "primary",
                                                    large: !0,
                                                    className: "page-container__footer-button",
                                                    onClick: (e) => {
                                                        this.context.trackEvent({ category: u.EVENT.CATEGORIES.KEYS, event: u.EVENT_NAMES.KEY_EXPORT_REQUESTED, properties: { key_type: u.EVENT.KEY_TYPES.SRP } }), this.handleSubmit(e);
                                                    },
                                                    disabled: "" === this.state.password,
                                                },
                                                this.context.t("next")
                                            )
                                        )
                                    );
                                }
                                renderRevealSeedFooter() {
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container__footer" },
                                        a.default.createElement(
                                            d.default,
                                            { type: "secondary", large: !0, className: "page-container__footer-single-button", onClick: () => this.props.history.push(this.props.mostRecentOverviewPage) },
                                            this.context.t("close")
                                        )
                                    );
                                }
                                render() {
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container" },
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__header" },
                                            a.default.createElement("div", { className: "page-container__title" }, this.context.t("secretRecoveryPhrase")),
                                            a.default.createElement("div", { className: "page-container__subtitle" }, this.context.t("revealSeedWordsDescription"))
                                        ),
                                        a.default.createElement("div", { className: "page-container__content" }, this.renderWarning(), a.default.createElement("div", { className: "reveal-seed__content" }, this.renderContent())),
                                        this.renderFooter()
                                    );
                                }
                            }
                            (h.propTypes = { requestRevealSeedWords: o.default.func, history: o.default.object, mostRecentOverviewPage: o.default.string.isRequired }), (h.contextTypes = { t: o.default.func, trackEvent: o.default.func });
                            var E = (0, r.connect)(
                                (e) => ({ mostRecentOverviewPage: (0, l.getMostRecentOverviewPage)(e) }),
                                (e) => ({ requestRevealSeedWords: (t) => e((0, i.requestRevealSeedWords)(t)) })
                            )(h);
                            n.default = E;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6108,
            { "./lock.container": 6110 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./lock.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6109,
            { "../../components/ui/loading-screen": 5796, "../../helpers/constants/routes": 5904, "prop-types": 4806, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r,
                                o,
                                s = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = d(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                i = u(e("prop-types")),
                                c = u(e("../../components/ui/loading-screen")),
                                l = e("../../helpers/constants/routes");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function d(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (d = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            class p extends s.PureComponent {
                                componentDidMount() {
                                    const { lockMetamask: e, isUnlocked: t, history: n } = this.props;
                                    t ? e().then(() => n.push(l.DEFAULT_ROUTE)) : n.replace(l.DEFAULT_ROUTE);
                                }
                                render() {
                                    return s.default.createElement(c.default, null);
                                }
                            }
                            (n.default = p),
                                (a = p),
                                (r = "propTypes"),
                                (o = { history: i.default.object, isUnlocked: i.default.bool, lockMetamask: i.default.func }),
                                r in a ? Object.defineProperty(a, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (a[r] = o);
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            611,
            {
                "../Collapse": 592,
                "../Paper": 706,
                "../styles/withStyles": 868,
                "../utils/useControlled": 891,
                "./ExpansionPanelContext": 612,
                "@babel/runtime/helpers/extends": 177,
                "@babel/runtime/helpers/interopRequireDefault": 181,
                "@babel/runtime/helpers/interopRequireWildcard": 182,
                "@babel/runtime/helpers/objectWithoutProperties": 189,
                "@babel/runtime/helpers/slicedToArray": 194,
                "@babel/runtime/helpers/toArray": 195,
                "@material-ui/utils": 959,
                clsx: 1774,
                "prop-types": 4806,
                react: 4980,
                "react-is": 4917,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                                r = e("@babel/runtime/helpers/interopRequireDefault");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                            var o = r(e("@babel/runtime/helpers/extends")),
                                s = r(e("@babel/runtime/helpers/toArray")),
                                i = r(e("@babel/runtime/helpers/slicedToArray")),
                                c = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                                l = a(e("react")),
                                u = (e("react-is"), r(e("prop-types")), r(e("clsx"))),
                                d = (e("@material-ui/utils"), r(e("../Collapse"))),
                                p = r(e("../Paper")),
                                f = r(e("../styles/withStyles")),
                                m = r(e("./ExpansionPanelContext")),
                                h = r(e("../utils/useControlled")),
                                E = function (e) {
                                    var t = { duration: e.transitions.duration.shortest };
                                    return {
                                        root: {
                                            position: "relative",
                                            transition: e.transitions.create(["margin"], t),
                                            "&:before": {
                                                position: "absolute",
                                                left: 0,
                                                top: -1,
                                                right: 0,
                                                height: 1,
                                                content: '""',
                                                opacity: 1,
                                                backgroundColor: e.palette.divider,
                                                transition: e.transitions.create(["opacity", "background-color"], t),
                                            },
                                            "&:first-child": { "&:before": { display: "none" } },
                                            "&$expanded": { margin: "16px 0", "&:first-child": { marginTop: 0 }, "&:last-child": { marginBottom: 0 }, "&:before": { opacity: 0 } },
                                            "&$expanded + &": { "&:before": { display: "none" } },
                                            "&$disabled": { backgroundColor: e.palette.action.disabledBackground },
                                        },
                                        rounded: {
                                            borderRadius: 0,
                                            "&:first-child": { borderTopLeftRadius: e.shape.borderRadius, borderTopRightRadius: e.shape.borderRadius },
                                            "&:last-child": {
                                                borderBottomLeftRadius: e.shape.borderRadius,
                                                borderBottomRightRadius: e.shape.borderRadius,
                                                "@supports (-ms-ime-align: auto)": { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                                            },
                                        },
                                        expanded: {},
                                        disabled: {},
                                    };
                                };
                            n.styles = E;
                            var g = l.forwardRef(function (e, t) {
                                    var n = e.children,
                                        a = e.classes,
                                        r = e.className,
                                        f = e.defaultExpanded,
                                        E = void 0 !== f && f,
                                        g = e.disabled,
                                        _ = void 0 !== g && g,
                                        y = e.expanded,
                                        v = e.onChange,
                                        b = e.square,
                                        T = void 0 !== b && b,
                                        k = e.TransitionComponent,
                                        N = void 0 === k ? d.default : k,
                                        w = e.TransitionProps,
                                        O = (0, c.default)(e, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]),
                                        P = (0, h.default)({ controlled: y, default: E, name: "ExpansionPanel", state: "expanded" }),
                                        A = (0, i.default)(P, 2),
                                        S = A[0],
                                        C = A[1],
                                        R = l.useCallback(
                                            function (e) {
                                                C(!S), v && v(e, !S);
                                            },
                                            [S, v, C]
                                        ),
                                        x = l.Children.toArray(n),
                                        I = (0, s.default)(x),
                                        M = I[0],
                                        D = I.slice(1),
                                        j = l.useMemo(
                                            function () {
                                                return { expanded: S, disabled: _, toggle: R };
                                            },
                                            [S, _, R]
                                        );
                                    return l.createElement(
                                        p.default,
                                        (0, o.default)({ className: (0, u.default)(a.root, r, S && a.expanded, _ && a.disabled, !T && a.rounded), ref: t, square: T }, O),
                                        l.createElement(m.default.Provider, { value: j }, M),
                                        l.createElement(N, (0, o.default)({ in: S, timeout: "auto" }, w), l.createElement("div", { "aria-labelledby": M.props.id, id: M.props["aria-controls"], role: "region" }, D))
                                    );
                                }),
                                _ = (0, f.default)(E, { name: "MuiExpansionPanel" })(g);
                            n.default = _;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6110,
            { "../../store/actions": 6307, "./lock.component": 6109, "react-redux": 4939, "react-router-dom": 4959, redux: 4998 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("redux"),
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("../../store/actions"),
                                c = (a = e("./lock.component")) && a.__esModule ? a : { default: a };
                            var l = (0, r.compose)(
                                s.withRouter,
                                (0, o.connect)(
                                    (e) => {
                                        const {
                                            metamask: { isUnlocked: t },
                                        } = e;
                                        return { isUnlocked: t };
                                    },
                                    (e) => ({ lockMetamask: () => e((0, i.lockMetamask)()) })
                                )
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6111,
            { "./mobile-sync.container": 6113 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    get: function () {
                                        return r.default;
                                    },
                                });
                            var a,
                                r = (a = e("./mobile-sync.container")) && a.__esModule ? a : { default: a };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6112,
            { "../../../shared/constants/time": 5338, "../../components/ui/button": 5711, "../../components/ui/loading-screen": 5796, classnames: 1772, "prop-types": 4806, pubnub: 4815, "qrcode-generator": 4843, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = p(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = d(e("prop-types")),
                                o = d(e("classnames")),
                                s = d(e("pubnub")),
                                i = d(e("qrcode-generator")),
                                c = d(e("../../components/ui/button")),
                                l = d(e("../../components/ui/loading-screen")),
                                u = e("../../../shared/constants/time");
                            function d(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function p(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (p = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function f(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            const m = "PASSWORD_PROMPT_SCREEN",
                                h = 30 * u.SECOND,
                                E = 2 * u.MINUTE;
                            class g extends a.Component {
                                constructor(...e) {
                                    super(...e),
                                        f(this, "state", { screen: m, password: "", seedWords: null, importedAccounts: [], error: null, syncing: !1, completed: !1, channelName: undefined, cipherKey: undefined }),
                                        f(this, "syncing", !1);
                                }
                                componentDidMount() {
                                    const e = document.getElementById("password-box");
                                    e && e.focus();
                                }
                                startIdleTimeout() {
                                    this.idleTimeout = setTimeout(() => {
                                        this.clearTimeouts(), this.goBack();
                                    }, E);
                                }
                                handleSubmit(e) {
                                    e.preventDefault(),
                                        this.setState({ seedWords: null, error: null }),
                                        this.props
                                            .requestRevealSeedWords(this.state.password)
                                            .then((e) => {
                                                this.startKeysGeneration(),
                                                    this.startIdleTimeout(),
                                                    this.exportAccounts().then((t) => {
                                                        this.setState({ seedWords: e, importedAccounts: t, screen: "REVEAL_SEED_SCREEN" });
                                                    });
                                            })
                                            .catch((e) => this.setState({ error: e.message }));
                                }
                                async exportAccounts() {
                                    const e = [];
                                    this.props.keyrings.forEach((t) => {
                                        "Simple Key Pair" === t.type && e.push(t.accounts[0]);
                                    });
                                    return await this.props.exportAccounts(this.state.password, e);
                                }
                                startKeysGeneration() {
                                    this.keysGenerationTimeout && clearTimeout(this.keysGenerationTimeout),
                                        this.disconnectWebsockets(),
                                        this.generateCipherKeyAndChannelName(),
                                        this.initWebsockets(),
                                        (this.keysGenerationTimeout = setTimeout(() => {
                                            this.startKeysGeneration();
                                        }, h));
                                }
                                goBack() {
                                    const { history: e, mostRecentOverviewPage: t } = this.props;
                                    e.push(t);
                                }
                                clearTimeouts() {
                                    this.keysGenerationTimeout && clearTimeout(this.keysGenerationTimeout), this.idleTimeout && clearTimeout(this.idleTimeout);
                                }
                                generateCipherKeyAndChannelName() {
                                    (this.cipherKey = `${this.props.selectedAddress.substr(-4)}-${s.default.generateUUID()}`),
                                        (this.channelName = `mm-${s.default.generateUUID()}`),
                                        this.setState({ cipherKey: this.cipherKey, channelName: this.channelName });
                                }
                                initWithCipherKeyAndChannelName(e, t) {
                                    (this.cipherKey = e), (this.channelName = t);
                                }
                                initWebsockets() {
                                    this.disconnectWebsockets(),
                                        (this.pubnub = new s.default({ subscribeKey: "sub-c-16009c7a-31b6-11e9-a223-2ae0221900a7", publishKey: "pub-c-c839b707-d27a-442d-b273-df1cb0c69e9e", cipherKey: this.cipherKey, ssl: !0 })),
                                        (this.pubnubListener = {
                                            message: (e) => {
                                                const { channel: t, message: n } = e;
                                                t === this.channelName &&
                                                    n &&
                                                    ("start-sync" === n.event
                                                        ? this.startSyncing()
                                                        : "connection-info" === n.event
                                                        ? (this.keysGenerationTimeout && clearTimeout(this.keysGenerationTimeout),
                                                          this.disconnectWebsockets(),
                                                          this.initWithCipherKeyAndChannelName(n.cipher, n.channel),
                                                          this.initWebsockets())
                                                        : "end-sync" === n.event && (this.disconnectWebsockets(), this.setState({ syncing: !1, completed: !0 })));
                                            },
                                        }),
                                        this.pubnub.addListener(this.pubnubListener),
                                        this.pubnub.subscribe({ channels: [this.channelName], withPresence: !1 });
                                }
                                disconnectWebsockets() {
                                    this.pubnub && this.pubnubListener && this.pubnub.removeListener(this.pubnubListener);
                                }
                                calculatePayloadSize(e, t) {
                                    return encodeURIComponent(e + JSON.stringify(t)).length + 100;
                                }
                                chunkString(e, t) {
                                    const n = Math.ceil(e.length / t),
                                        a = new Array(n);
                                    let r = 0;
                                    for (let o = 0; o < n; o += 1) (a[o] = e.substr(r, t)), (r += t);
                                    return a;
                                }
                                notifyError(e) {
                                    return new Promise((t, n) => {
                                        this.pubnub.publish({ message: { event: "error-sync", data: e }, channel: this.channelName, sendByPost: !1, storeInHistory: !1 }, (e, a) => {
                                            e.error ? n(e.errorData) : t();
                                        });
                                    });
                                }
                                async startSyncing() {
                                    if (this.syncing) return;
                                    (this.syncing = !0), this.setState({ syncing: !0 });
                                    const { accounts: e, network: t, preferences: n, transactions: a, tokens: r } = await this.props.fetchInfoToSync(),
                                        { t: o } = this.context,
                                        s = JSON.stringify({
                                            accounts: e,
                                            network: t,
                                            preferences: n,
                                            transactions: a,
                                            tokens: r,
                                            udata: { pwd: this.state.password, seed: this.state.seedWords, importedAccounts: this.state.importedAccounts },
                                        }),
                                        i = this.chunkString(s, 17e3),
                                        c = i.length;
                                    try {
                                        for (let e = 0; e < c; e++) await this.sendMessage(i[e], e + 1, c);
                                    } catch (e) {
                                        this.props.displayWarning(`${o("syncFailed")} :(`), this.setState({ syncing: !1 }), (this.syncing = !1), this.notifyError(e.toString());
                                    }
                                }
                                sendMessage(e, t, n) {
                                    return new Promise((a, r) => {
                                        this.pubnub.publish({ message: { event: "syncing-data", data: e, totalPkg: n, currentPkg: t }, channel: this.channelName, sendByPost: !1, storeInHistory: !1 }, (e, t) => {
                                            e.error ? r(e.errorData) : a();
                                        });
                                    });
                                }
                                componentWillUnmount() {
                                    this.state.error && this.props.hideWarning(), this.clearTimeouts(), this.disconnectWebsockets();
                                }
                                renderWarning(e) {
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container__warning-container" },
                                        a.default.createElement("div", { className: "page-container__warning-message" }, a.default.createElement("div", null, e))
                                    );
                                }
                                renderContent() {
                                    const { syncing: e, completed: t, screen: n } = this.state,
                                        { t: r } = this.context;
                                    return e
                                        ? a.default.createElement(l.default, { loadingMessage: r("syncInProgress") })
                                        : t
                                        ? a.default.createElement(
                                              "div",
                                              { className: "reveal-seed__content" },
                                              a.default.createElement("label", { className: "reveal-seed__label", style: { width: "100%", textAlign: "center" } }, r("syncWithMobileComplete"))
                                          )
                                        : n === m
                                        ? a.default.createElement("div", null, this.renderWarning(this.context.t("mobileSyncWarning")))
                                        : a.default.createElement(
                                              "div",
                                              null,
                                              this.renderWarning(this.context.t("syncWithMobileBeCareful")),
                                              a.default.createElement("div", { className: "reveal-seed__content" }, this.renderRevealSeedContent())
                                          );
                                }
                                renderPasswordPromptContent() {
                                    const { t: e } = this.context;
                                    return a.default.createElement(
                                        "form",
                                        { onSubmit: (e) => this.handleSubmit(e) },
                                        a.default.createElement("label", { className: "input-label", htmlFor: "password-box" }, e("enterPasswordContinue")),
                                        a.default.createElement(
                                            "div",
                                            { className: "input-group" },
                                            a.default.createElement("input", {
                                                type: "password",
                                                placeholder: e("password"),
                                                id: "password-box",
                                                value: this.state.password,
                                                onChange: (e) => this.setState({ password: e.target.value }),
                                                className: (0, o.default)("form-control", { "form-control--error": this.state.error }),
                                            })
                                        ),
                                        this.state.error && a.default.createElement("div", { className: "reveal-seed__error" }, this.state.error)
                                    );
                                }
                                renderRevealSeedContent() {
                                    const e = (0, i.default)(0, "M");
                                    e.addData(`metamask-sync:${this.state.channelName}|@|${this.state.cipherKey}`), e.make();
                                    const { t: t } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        null,
                                        a.default.createElement("label", { className: "reveal-seed__label", style: { width: "100%", textAlign: "center" } }, t("syncWithMobileScanThisCode")),
                                        a.default.createElement("div", { style: { display: "flex", justifyContent: "center" }, dangerouslySetInnerHTML: { __html: e.createTableTag(4) } })
                                    );
                                }
                                renderFooter() {
                                    return this.state.screen === m ? this.renderPasswordPromptFooter() : this.renderRevealSeedFooter();
                                }
                                renderPasswordPromptFooter() {
                                    const { t: e } = this.context,
                                        { password: t } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: "new-account-import-form__buttons", style: { padding: "30px 15px 30px 15px", marginTop: 0 } },
                                        a.default.createElement(c.default, { type: "secondary", large: !0, className: "new-account-create-form__button", onClick: () => this.goBack() }, e("cancel")),
                                        a.default.createElement(c.default, { type: "primary", large: !0, className: "new-account-create-form__button", onClick: (e) => this.handleSubmit(e), disabled: "" === t }, e("next"))
                                    );
                                }
                                renderRevealSeedFooter() {
                                    const { t: e } = this.context;
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container__footer", style: { padding: 30 } },
                                        a.default.createElement(c.default, { type: "secondary", large: !0, className: "page-container__footer-button", onClick: () => this.goBack() }, e("close"))
                                    );
                                }
                                render() {
                                    const { t: e } = this.context,
                                        { screen: t } = this.state;
                                    return a.default.createElement(
                                        "div",
                                        { className: "page-container" },
                                        a.default.createElement(
                                            "div",
                                            { className: "page-container__header" },
                                            a.default.createElement("div", { className: "page-container__title" }, e("syncWithMobileTitle")),
                                            t === m ? a.default.createElement("div", { className: "page-container__subtitle" }, e("syncWithMobileDesc")) : null,
                                            t === m ? a.default.createElement("div", { className: "page-container__subtitle" }, e("syncWithMobileDescNewUsers")) : null
                                        ),
                                        a.default.createElement("div", { className: "page-container__content" }, this.renderContent()),
                                        this.renderFooter()
                                    );
                                }
                            }
                            (n.default = g),
                                f(g, "contextTypes", { t: r.default.func }),
                                f(g, "propTypes", {
                                    history: r.default.object.isRequired,
                                    selectedAddress: r.default.string.isRequired,
                                    displayWarning: r.default.func.isRequired,
                                    fetchInfoToSync: r.default.func.isRequired,
                                    mostRecentOverviewPage: r.default.string.isRequired,
                                    requestRevealSeedWords: r.default.func.isRequired,
                                    exportAccounts: r.default.func.isRequired,
                                    keyrings: r.default.array,
                                    hideWarning: r.default.func.isRequired,
                                });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6113,
            { "../../ducks/history/history": 5889, "../../selectors": 6300, "../../store/actions": 6307, "./mobile-sync.component": 6112, "react-redux": 4939 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var a,
                                r = e("react-redux"),
                                o = e("../../store/actions"),
                                s = e("../../ducks/history/history"),
                                i = e("../../selectors"),
                                c = (a = e("./mobile-sync.component")) && a.__esModule ? a : { default: a };
                            var l = (0, r.connect)(
                                (e) => {
                                    const {
                                        metamask: { selectedAddress: t },
                                    } = e;
                                    return { mostRecentOverviewPage: (0, s.getMostRecentOverviewPage)(e), selectedAddress: t, keyrings: (0, i.getMetaMaskKeyrings)(e) };
                                },
                                (e) => ({
                                    requestRevealSeedWords: (t) => e((0, o.requestRevealSeedWords)(t)),
                                    fetchInfoToSync: () => e((0, o.fetchInfoToSync)()),
                                    displayWarning: (t) => e((0, o.displayWarning)(t || null)),
                                    exportAccounts: (t, n) => e((0, o.exportAccounts)(t, n)),
                                    hideWarning: () => e((0, o.hideWarning)()),
                                })
                            )(c.default);
                            n.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6114,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/app/step-progress-bar": 5633,
                "../../../components/ui/box": 5707,
                "../../../components/ui/button": 5711,
                "../../../components/ui/check-box": 5717,
                "../../../components/ui/form-field": 5743,
                "../../../components/ui/typography": 5869,
                "../../../contexts/metametrics": 5878,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/onboarding": 5903,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/constants/zendesk-url": 5907,
                "../../../hooks/useI18nContext": 5957,
                "../../../selectors": 6300,
                "prop-types": 4806,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
                zxcvbn: 5322,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = N);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = k(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = T(e("prop-types")),
                                o = e("react-router-dom"),
                                s = T(e("zxcvbn")),
                                i = e("react-redux"),
                                c = e("../../../hooks/useI18nContext"),
                                l = T(e("../../../components/ui/button")),
                                u = T(e("../../../components/ui/typography")),
                                d = e("../../../helpers/constants/design-system"),
                                p = e("../../../helpers/constants/routes"),
                                f = T(e("../../../components/ui/form-field")),
                                m = T(e("../../../components/ui/box")),
                                h = T(e("../../../components/ui/check-box")),
                                E = e("../../../components/app/step-progress-bar"),
                                g = T(e("../../../helpers/constants/zendesk-url")),
                                _ = e("../../../selectors"),
                                y = e("../../../helpers/constants/onboarding"),
                                v = e("../../../contexts/metametrics"),
                                b = e("../../../../shared/constants/metametrics");
                            function T(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function k(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (k = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function N({ createNewAccount: e, importWithRecoveryPhrase: t, secretRecoveryPhrase: n }) {
                                const r = (0, c.useI18nContext)(),
                                    [T, k] = (0, a.useState)(""),
                                    [N, w] = (0, a.useState)(""),
                                    [O, P] = (0, a.useState)(""),
                                    [A, S] = (0, a.useState)(""),
                                    [C, R] = (0, a.useState)(""),
                                    [x, I] = (0, a.useState)(""),
                                    [M, D] = (0, a.useState)(!1),
                                    [j, L] = (0, a.useState)(!1),
                                    W = (0, o.useHistory)(),
                                    F = (0, i.useSelector)(_.getFirstTimeFlowType),
                                    U = (0, a.useContext)(v.MetaMetricsContext),
                                    $ = (0, a.useMemo)(() => !(!N || !T || N !== T) && !(N.length < 8) && !O && !x, [N, T, O, x]),
                                    G = async (a) => {
                                        if ((a.preventDefault(), $))
                                            if (n && F === y.FIRST_TIME_FLOW_TYPES.IMPORT) await t(N, n), W.push(p.ONBOARDING_COMPLETION_ROUTE);
                                            else
                                                try {
                                                    e && (await e(N)), U({ event: b.EVENT_NAMES.ACCOUNT_PASSWORD_CREATED, category: b.EVENT.CATEGORIES.ONBOARDING }), W.push(p.ONBOARDING_SECURE_YOUR_WALLET_ROUTE);
                                                } catch (e) {
                                                    P(e.message);
                                                }
                                    };
                                return a.default.createElement(
                                    "div",
                                    { className: "create-password__wrapper", "data-testid": "create-password" },
                                    n && F === y.FIRST_TIME_FLOW_TYPES.IMPORT
                                        ? a.default.createElement(E.TwoStepProgressBar, { stage: E.twoStepStages.PASSWORD_CREATE, marginBottom: 4 })
                                        : a.default.createElement(E.ThreeStepProgressBar, { stage: E.threeStepStages.PASSWORD_CREATE, marginBottom: 4 }),
                                    a.default.createElement(u.default, { variant: d.TYPOGRAPHY.H2, fontWeight: d.FONT_WEIGHT.BOLD }, r("createPassword")),
                                    a.default.createElement(u.default, { variant: d.TYPOGRAPHY.H4, align: d.TEXT_ALIGN.CENTER }, r("passwordSetupDetails")),
                                    a.default.createElement(
                                        m.default,
                                        { justifyContent: d.JUSTIFY_CONTENT.CENTER, marginTop: 3 },
                                        a.default.createElement(
                                            "form",
                                            { className: "create-password__form", onSubmit: G },
                                            a.default.createElement(f.default, {
                                                dataTestId: "create-password-new",
                                                autoFocus: !0,
                                                passwordStrength: A,
                                                passwordStrengthText: C,
                                                onChange: (e) => {
                                                    let t = "";
                                                    const n = (0, s.default)(e),
                                                        o =
                                                            ((i = n.score),
                                                            (c = r),
                                                            i >= 4
                                                                ? { className: "create-password__strong", text: c("strong"), description: "" }
                                                                : 3 === i
                                                                ? { className: "create-password__average", text: c("average"), description: r("passwordStrengthDescription") }
                                                                : { className: "create-password__weak", text: c("weak"), description: r("passwordStrengthDescription") });
                                                    var i, c;
                                                    const l = o.description,
                                                        u = r("passwordStrength", [a.default.createElement("span", { key: n.score, className: o.className }, o.text)]);
                                                    T && e !== T && (t = r("passwordsDontMatch")), w(e), S(u), R(l), I(t);
                                                },
                                                password: !j,
                                                titleText: r("newPassword"),
                                                value: N,
                                                titleDetail: a.default.createElement(
                                                    "button",
                                                    {
                                                        className: "create-password__form--password-button",
                                                        type: "button",
                                                        onClick: (e) => {
                                                            e.preventDefault(), L(!j);
                                                        },
                                                    },
                                                    r(j ? "hide" : "show")
                                                ),
                                            }),
                                            a.default.createElement(f.default, {
                                                dataTestId: "create-password-confirm",
                                                onChange: (e) => {
                                                    let t = "";
                                                    N !== e && (t = r("passwordsDontMatch")), k(e), I(t);
                                                },
                                                password: !j,
                                                error: x,
                                                titleText: r("confirmPassword"),
                                                value: T,
                                                titleDetail: $ && a.default.createElement("div", { className: "create-password__form--checkmark" }, a.default.createElement("i", { className: "fas fa-check" })),
                                            }),
                                            a.default.createElement(
                                                m.default,
                                                { alignItems: d.ALIGN_ITEMS.CENTER, justifyContent: d.JUSTIFY_CONTENT.SPACE_BETWEEN, marginBottom: 4 },
                                                a.default.createElement(
                                                    "label",
                                                    { className: "create-password__form__terms-label" },
                                                    a.default.createElement(h.default, { dataTestId: "create-password-terms", onClick: () => D(!M), checked: M }),
                                                    a.default.createElement(
                                                        u.default,
                                                        { variant: d.TYPOGRAPHY.H5, boxProps: { marginLeft: 3 } },
                                                        r("passwordTermsWarning", [
                                                            a.default.createElement(
                                                                "a",
                                                                { onClick: (e) => e.stopPropagation(), key: "create-password__link-text", href: g.default.PASSWORD_ARTICLE, target: "_blank", rel: "noopener noreferrer" },
                                                                a.default.createElement("span", { className: "create-password__link-text" }, r("learnMoreUpperCase"))
                                                            ),
                                                        ])
                                                    )
                                                )
                                            ),
                                            a.default.createElement(
                                                l.default,
                                                {
                                                    "data-testid": n && F === y.FIRST_TIME_FLOW_TYPES.IMPORT ? "create-password-import" : "create-password-wallet",
                                                    type: "primary",
                                                    large: !0,
                                                    className: "create-password__form--submit-button",
                                                    disabled: !$ || !M,
                                                    onClick: G,
                                                },
                                                n && F === y.FIRST_TIME_FLOW_TYPES.IMPORT ? r("importMyWallet") : r("createNewWallet")
                                            )
                                        )
                                    )
                                );
                            }
                            N.propTypes = { createNewAccount: r.default.func, importWithRecoveryPhrase: r.default.func, secretRecoveryPhrase: r.default.string };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6115,
            {
                "../../../components/ui/box": 5707,
                "../../../components/ui/button": 5711,
                "../../../components/ui/typography": 5869,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/utils/build-types": 5917,
                "../../../hooks/useI18nContext": 5957,
                "../../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, r.useHistory)(),
                                        t = (0, u.useI18nContext)(),
                                        n = (0, o.useDispatch)();
                                    return a.default.createElement(
                                        "div",
                                        { className: "creation-successful", "data-testid": "creation-successful" },
                                        a.default.createElement(
                                            s.default,
                                            { textAlign: l.TEXT_ALIGN.CENTER },
                                            a.default.createElement("img", { src: "./images/tada.png" }),
                                            a.default.createElement(i.default, { variant: l.TYPOGRAPHY.H2, fontWeight: l.FONT_WEIGHT.BOLD, margin: 6 }, t("walletCreationSuccessTitle")),
                                            a.default.createElement(i.default, { variant: l.TYPOGRAPHY.H4 }, t("walletCreationSuccessDetail"))
                                        ),
                                        a.default.createElement(i.default, { variant: l.TYPOGRAPHY.H4, boxProps: { align: l.ALIGN_ITEMS.LEFT }, marginLeft: 12 }, t("remember")),
                                        a.default.createElement(
                                            "ul",
                                            null,
                                            a.default.createElement(
                                                "li",
                                                null,
                                                a.default.createElement(i.default, { variant: l.TYPOGRAPHY.H4 }, (0, f.isBeta)() ? t("betaWalletCreationSuccessReminder1") : t("walletCreationSuccessReminder1"))
                                            ),
                                            a.default.createElement(
                                                "li",
                                                null,
                                                a.default.createElement(i.default, { variant: l.TYPOGRAPHY.H4 }, (0, f.isBeta)() ? t("betaWalletCreationSuccessReminder2") : t("walletCreationSuccessReminder2"))
                                            ),
                                            a.default.createElement(
                                                "li",
                                                null,
                                                a.default.createElement(
                                                    i.default,
                                                    { variant: l.TYPOGRAPHY.H4 },
                                                    t("walletCreationSuccessReminder3", [
                                                        a.default.createElement("span", { key: "creation-successful__bold", className: "creation-successful__bold" }, t("walletCreationSuccessReminder3BoldSection")),
                                                    ])
                                                )
                                            ),
                                            a.default.createElement(
                                                "li",
                                                null,
                                                a.default.createElement(
                                                    c.default,
                                                    { href: "https://community.metamask.io/t/what-is-a-secret-recovery-phrase-and-how-to-keep-your-crypto-wallet-secure/3440", target: "_blank", type: "link", rel: "noopener noreferrer" },
                                                    t("learnMoreUpperCase")
                                                )
                                            )
                                        ),
                                        a.default.createElement(
                                            s.default,
                                            { marginTop: 6, className: "creation-successful__actions" },
                                            a.default.createElement(c.default, { type: "link", onClick: () => e.push(d.ONBOARDING_PRIVACY_SETTINGS_ROUTE) }, t("setAdvancedPrivacySettings")),
                                            a.default.createElement(
                                                c.default,
                                                {
                                                    "data-testid": "onboarding-complete-done",
                                                    type: "primary",
                                                    large: !0,
                                                    rounded: !0,
                                                    onClick: async () => {
                                                        await n((0, p.setCompletedOnboarding)()), e.push(d.ONBOARDING_PIN_EXTENSION_ROUTE);
                                                    },
                                                },
                                                t("gotIt")
                                            )
                                        )
                                    );
                                });
                            var a = m(e("react")),
                                r = e("react-router-dom"),
                                o = e("react-redux"),
                                s = m(e("../../../components/ui/box")),
                                i = m(e("../../../components/ui/typography")),
                                c = m(e("../../../components/ui/button")),
                                l = e("../../../helpers/constants/design-system"),
                                u = e("../../../hooks/useI18nContext"),
                                d = e("../../../helpers/constants/routes"),
                                p = e("../../../store/actions"),
                                f = e("../../../helpers/utils/build-types");
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6116,
            {
                "../../../components/app/srp-input": 5630,
                "../../../components/app/step-progress-bar": 5633,
                "../../../components/ui/box": 5707,
                "../../../components/ui/button": 5711,
                "../../../components/ui/typography": 5869,
                "../../../helpers/constants/design-system": 5900,
                "../../../helpers/constants/routes": 5904,
                "../../../helpers/constants/zendesk-url": 5907,
                "../../../hooks/useI18nContext": 5957,
                "prop-types": 4806,
                react: 4980,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = E(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-router-dom"),
                                o = h(e("prop-types")),
                                s = e("../../../components/app/step-progress-bar"),
                                i = h(e("../../../components/ui/box")),
                                c = h(e("../../../components/ui/button")),
                                l = h(e("../../../components/ui/typography")),
                                u = e("../../../helpers/constants/design-system"),
                                d = e("../../../helpers/constants/routes"),
                                p = e("../../../hooks/useI18nContext"),
                                f = h(e("../../../helpers/constants/zendesk-url")),
                                m = h(e("../../../components/app/srp-input"));
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function E(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (E = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function g({ submitSecretRecoveryPhrase: e }) {
                                const [t, n] = (0, a.useState)(""),
                                    o = (0, r.useHistory)(),
                                    h = (0, p.useI18nContext)();
                                return a.default.createElement(
                                    "div",
                                    { className: "import-srp", "data-testid": "import-srp" },
                                    a.default.createElement(s.TwoStepProgressBar, { stage: s.twoStepStages.RECOVERY_PHRASE_CONFIRM, marginBottom: 4 }),
                                    a.default.createElement("div", { className: "import-srp__header" }, a.default.createElement(l.default, { variant: u.TYPOGRAPHY.H2, fontWeight: u.FONT_WEIGHT.BOLD }, h("accessYourWalletWithSRP"))),
                                    a.default.createElement(
                                        "div",
                                        { className: "import-srp__description" },
                                        a.default.createElement(
                                            l.default,
                                            { variant: u.TYPOGRAPHY.H4 },
                                            h("accessYourWalletWithSRPDescription", [
                                                a.default.createElement("a", { key: "learnMore", type: "link", href: f.default.SECRET_RECOVERY_PHRASE, target: "_blank", rel: "noopener noreferrer" }, h("learnMoreUpperCase")),
                                            ])
                                        )
                                    ),
                                    a.default.createElement(
                                        "div",
                                        { className: "import-srp__actions" },
                                        a.default.createElement(
                                            i.default,
                                            { textAlign: u.TEXT_ALIGN.LEFT },
                                            a.default.createElement(m.default, { onChange: n, srpText: h("typeYourSRP") }),
                                            a.default.createElement(
                                                c.default,
                                                {
                                                    className: "import-srp__confirm-button",
                                                    type: "primary",
                                                    "data-testid": "import-srp-confirm",
                                                    large: !0,
                                                    onClick: () => {
                                                        e(t), o.replace(d.ONBOARDING_CREATE_PASSWORD_ROUTE);
                                                    },
                                                    disabled: !t.trim(),
                                                },
                                                h("confirmRecoveryPhrase")
                                            )
                                        )
                                    )
                                );
                            }
                            g.propTypes = { submitSecretRecoveryPhrase: o.default.func };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6117,
            {
                "../../../../shared/constants/metametrics": 5332,
                "../../../components/ui/button": 5711,
                "../../../components/ui/typography/typography": 5870,
                "../../../contexts/metametrics": 5878,
                "../../../helpers/constants/design-system": 5900,
                "../../../hooks/useI18nContext": 5957,
                "../../../selectors": 6300,
                "../../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, l.useI18nContext)(),
                                        t = (0, r.useDispatch)(),
                                        n = (0, o.useHistory)(),
                                        m = (0, r.useSelector)(d.getFirstTimeFlowTypeRoute),
                                        h = (0, r.useSelector)(d.getFirstTimeFlowType),
                                        E = (0, r.useSelector)(d.getParticipateInMetaMetrics),
                                        g = (0, a.useContext)(f.MetaMetricsContext);
                                    return a.default.createElement(
                                        "div",
                                        { className: "onboarding-metametrics", "data-testid": "onboarding-metametrics" },
                                        a.default.createElement(s.default, { variant: i.TYPOGRAPHY.H2, align: i.TEXT_ALIGN.CENTER, fontWeight: i.FONT_WEIGHT.BOLD }, e("metametricsTitle")),
                                        a.default.createElement(s.default, { className: "onboarding-metametrics__desc", align: i.TEXT_ALIGN.CENTER }, e("metametricsOptInDescription2")),
                                        a.default.createElement(
                                            "ul",
                                            null,
                                            a.default.createElement("li", null, a.default.createElement("i", { className: "fa fa-check" }), e("metametricsCommitmentsAllowOptOut2")),
                                            a.default.createElement("li", null, a.default.createElement("i", { className: "fa fa-check" }), e("metametricsCommitmentsSendAnonymizedEvents")),
                                            a.default.createElement("li", null, a.default.createElement("i", { className: "fa fa-times" }), e("metametricsCommitmentsNeverCollect")),
                                            a.default.createElement("li", null, a.default.createElement("i", { className: "fa fa-times" }), e("metametricsCommitmentsNeverIP")),
                                            a.default.createElement("li", null, a.default.createElement("i", { className: "fa fa-times" }), e("metametricsCommitmentsNeverSell"))
                                        ),
                                        a.default.createElement(
                                            s.default,
                                            { color: i.COLORS.TEXT_ALTERNATIVE, align: i.TEXT_ALIGN.CENTER, variant: i.TYPOGRAPHY.H6, className: "onboarding-metametrics__terms" },
                                            e("gdprMessage", [
                                                a.default.createElement("a", { key: "metametrics-bottom-text-wrapper", href: "https://metamask.io/privacy.html", target: "_blank", rel: "noopener noreferrer" }, e("gdprMessagePrivacyPolicy")),
                                            ])
                                        ),
                                        a.default.createElement(
                                            "div",
                                            { className: "onboarding-metametrics__buttons" },
                                            a.default.createElement(
                                                c.default,
                                                {
                                                    "data-testid": "metametrics-no-thanks",
                                                    type: "secondary",
                                                    onClick: async () => {
                                                        await t((0, u.setParticipateInMetaMetrics)(!1));
                                                        const e = null === E || E;
                                                        try {
                                                            e &&
                                                                g(
                                                                    { category: p.EVENT.CATEGORIES.ONBOARDING, event: p.EVENT_NAMES.METRICS_OPT_OUT, properties: { action: "Metrics Option", legacy_event: !0 } },
                                                                    { isOptIn: !0, flushImmediately: !0 }
                                                                );
                                                        } finally {
                                                            n.push(m);
                                                        }
                                                    },
                                                },
                                                e("noThanks")
                                            ),
                                            a.default.createElement(
                                                c.default,
                                                {
                                                    "data-testid": "metametrics-i-agree",
                                                    type: "primary",
                                                    onClick: async () => {
                                                        const [, e] = await t((0, u.setParticipateInMetaMetrics)(!0)),
                                                            a = !E;
                                                        try {
                                                            a &&
                                                                g(
                                                                    { category: p.EVENT.CATEGORIES.ONBOARDING, event: p.EVENT_NAMES.METRICS_OPT_IN, properties: { action: "Metrics Option", legacy_event: !0 } },
                                                                    { isOptIn: !0, flushImmediately: !0 }
                                                                ),
                                                                g(
                                                                    {
                                                                        category: p.EVENT.CATEGORIES.ONBOARDING,
                                                                        event: p.EVENT_NAMES.WALLET_SETUP_STARTED,
                                                                        properties: { account_type: "create" === h ? p.EVENT.ACCOUNT_TYPES.DEFAULT : p.EVENT.ACCOUNT_TYPES.IMPORTED },
                                                                    },
                                                                    { isOptIn: !0, metaMetricsId: e, flushImmediately: !0 }
                                                                );
                                                        } finally {
                                                            n.push(m);
                                                        }
                                                    },
                                                },
                                                e("affirmAgree")
                                            )
                                        )
                                    );
                                });
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = h(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-redux"),
                                o = e("react-router-dom"),
                                s = m(e("../../../components/ui/typography/typography")),
                                i = e("../../../helpers/constants/design-system"),
                                c = m(e("../../../components/ui/button")),
                                l = e("../../../hooks/useI18nContext"),
                                u = e("../../../store/actions"),
                                d = e("../../../selectors"),
                                p = e("../../../../shared/constants/metametrics"),
                                f = e("../../../contexts/metametrics");
                            function m(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function h(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (h = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6118,
            {
                "../../../../app/_locales/index.json": 2,
                "../../../components/ui/dropdown": 5735,
                "../../../components/ui/metafox-logo": 5815,
                "../../../ducks/metamask/metamask": 5892,
                "../../../store/actions": 6307,
                react: 4980,
                "react-redux": 4939,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, r.useDispatch)(),
                                        t = (0, r.useSelector)(i.getCurrentLocale),
                                        n = l.default.map((e) => ({ name: e.name, value: e.code }));
                                    return a.default.createElement(
                                        "div",
                                        { className: "onboarding-app-header" },
                                        a.default.createElement(
                                            "div",
                                            { className: "onboarding-app-header__contents" },
                                            a.default.createElement(o.default, { unsetIconHeight: !0, isOnboarding: !0 }),
                                            a.default.createElement(s.default, { id: "select-locale", options: n, selectedOption: t, onChange: async (t) => e((0, c.updateCurrentLocale)(t)) })
                                        )
                                    );
                                });
                            var a = u(e("react")),
                                r = e("react-redux"),
                                o = u(e("../../../components/ui/metafox-logo")),
                                s = u(e("../../../components/ui/dropdown")),
                                i = e("../../../ducks/metamask/metamask"),
                                c = e("../../../store/actions"),
                                l = u(e("../../../../app/_locales/index.json"));
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            6119,
            { "../../../ducks/metamask/metamask": 5892, "../../../helpers/constants/routes": 5904, react: 4980, "react-redux": 4939, "react-router-dom": 4959 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const e = (0, o.useSelector)(c.getCompletedOnboarding),
                                        t = (0, o.useSelector)(c.getIsInitialized),
                                        n = (0, o.useSelector)(c.getSeedPhraseBackedUp),
                                        a = (0, o.useSelector)(c.getIsUnlocked);
                                    if (e) return r.default.createElement(s.Redirect, { to: { pathname: i.DEFAULT_ROUTE } });
                                    if (null !== n) return r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_COMPLETION_ROUTE } });
                                    if (a) return r.default.createElement(s.Redirect, { to: { pathname: i.LOCK_ROUTE } });
                                    if (!t) {
                                        let e;
                                        return (e = r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_WELCOME_ROUTE } })), e;
                                    }
                                    return r.default.createElement(s.Redirect, { to: { pathname: i.ONBOARDING_UNLOCK_ROUTE } });
                                });
                            var a,
                                r = (a = e("react")) && a.__esModule ? a : { default: a },
                                o = e("react-redux"),
                                s = e("react-router-dom"),
                                i = e("../../../helpers/constants/routes"),
                                c = e("../../../ducks/metamask/metamask");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            612,
            { "@babel/runtime/helpers/interopRequireWildcard": 182, react: 4980 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            var a = e("@babel/runtime/helpers/interopRequireWildcard");
                            Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                            var r = a(e("react")).createContext({});
                            var o = r;
                            n.default = o;
                        };
                    };
            },
            { package: "@material-ui/core" },
        ],
        [
            6120,
            {
                "../../components/ui/button": 5711,
                "../../ducks/metamask/metamask": 5892,
                "../../helpers/constants/routes": 5904,
                "../../hooks/useI18nContext": 5957,
                "../../selectors": 6300,
                "../../store/actions": 6307,
                "../unlock-page": 6294,
                "./create-password/create-password": 6114,
                "./creation-successful/creation-successful": 6115,
                "./import-srp/import-srp": 6116,
                "./metametrics/metametrics": 6117,
                "./onboarding-flow-switch/onboarding-flow-switch": 6119,
                "./pin-extension/pin-extension": 6122,
                "./privacy-settings/privacy-settings": 6123,
                "./recovery-phrase/confirm-recovery-phrase": 6125,
                "./recovery-phrase/review-recovery-phrase": 6127,
                "./secure-your-wallet/secure-your-wallet": 6128,
                "./welcome/welcome": 6130,
                react: 4980,
                "react-redux": 4939,
                "react-router-dom": 4959,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, n) {
                            Object.defineProperty(n, "__esModule", { value: !0 }),
                                (n.default = function () {
                                    const [e, t] = (0, a.useState)(""),
                                        n = (0, o.useDispatch)(),
                                        N = (0, r.useLocation)(),
                                        w = (0, r.useHistory)(),
                                        P = (0, p.useI18nContext)(),
                                        A = (0, o.useSelector)(c.getCompletedOnboarding),
                                        S = (0, o.useSelector)(c.getSeedPhraseBackedUp),
                                        C = (0, o.useSelector)(u.getFirstTimeFlowTypeRoute);
                                    (0, a.useEffect)(() => {
                                        A && S && w.push(i.DEFAULT_ROUTE);
                                    }, [w, A, S]);
                                    const R = async (e) => {
                                            const a = await n((0, l.createNewVaultAndGetSeedPhrase)(e));
                                            t(a);
                                        },
                                        x = async (e) => {
                                            const a = await n((0, l.unlockAndGetSeedPhrase)(e));
                                            t(a), w.push(C);
                                        },
                                        I = async (e, t) => await n((0, l.createNewVaultAndRestore)(e, t));
                                    return a.default.createElement(
                                        "div",
                                        { className: "onboarding-flow" },
                                        a.default.createElement(
                                            "div",
                                            { className: "onboarding-flow__wrapper" },
                                            a.default.createElement(
                                                r.Switch,
                                                null,
                                                a.default.createElement(r.Route, {
                                                    path: i.ONBOARDING_CREATE_PASSWORD_ROUTE,
                                                    render: (t) => a.default.createElement(m.default, O({}, t, { createNewAccount: R, importWithRecoveryPhrase: I, secretRecoveryPhrase: e })),
                                                }),
                                                a.default.createElement(r.Route, { exact: !0, path: i.ONBOARDING_SECURE_YOUR_WALLET_ROUTE, component: E.default }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_REVIEW_SRP_ROUTE, render: () => a.default.createElement(h.default, { secretRecoveryPhrase: e }) }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_CONFIRM_SRP_ROUTE, render: () => a.default.createElement(g.default, { secretRecoveryPhrase: e }) }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_IMPORT_WITH_SRP_ROUTE, render: (e) => a.default.createElement(b.default, O({}, e, { submitSecretRecoveryPhrase: t })) }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_UNLOCK_ROUTE, render: (e) => a.default.createElement(s.default, O({}, e, { onSubmit: x })) }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_PRIVACY_SETTINGS_ROUTE, component: _.default }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_COMPLETION_ROUTE, component: y.default }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_WELCOME_ROUTE, component: v.default }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_PIN_EXTENSION_ROUTE, component: T.default }),
                                                a.default.createElement(r.Route, { path: i.ONBOARDING_METAMETRICS, component: k.default }),
                                                a.default.createElement(r.Route, { exact: !0, path: "*", component: f.default })
                                            )
                                        ),
                                        (null == N ? void 0 : N.pathname) === i.ONBOARDING_COMPLETION_ROUTE &&
                                            a.default.createElement(
                                                d.default,
                                                { className: "onboarding-flow__twitter-button", type: "link", href: "https://twitter.com/MetaMask", target: "_blank" },
                                                a.default.createElement("span", null, P("followUsOnTwitter")),
                                                a.default.createElement("i", { className: "fab fa-twitter onboarding-flow__twitter-button__icon" })
                                            )
                                    );
                                });
                            var a = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var n = w(t);
                                    if (n && n.has(e)) return n.get(e);
                                    var a = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                                            var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(a, o, s) : (a[o] = e[o]);
                                        }
                                    (a.default = e), n && n.set(e, a);
                                    return a;
                                })(e("react")),
                                r = e("react-router-dom"),
                                o = e("react-redux"),
                                s = N(e("../unlock-page")),
                                i = e("../../helpers/constants/routes"),
                                c = e("../../ducks/metamask/metamask"),
                                l = e("../../store/actions"),
                                u = e("../../selectors"),
                                d = N(e("../../components/ui/button")),
                                p = e("../../hooks/useI18nContext"),
                                f = N(e("./onboarding-flow-switch/onboarding-flow-switch")),
                                m = N(e("./create-password/create-password")),
                                h = N(e("./recovery-phrase/review-recovery-phrase")),
                                E = N(e("./secure-your-wallet/secure-your-wallet")),
                                g = N(e("./recovery-phrase/confirm-recovery-phrase")),
                                _ = N(e("./privacy-settings/privacy-settings")),
                                y = N(e("./creation-successful/creation-successful")),
                                v = N(e("./welcome/welcome")),
                                b = N(e("./import-srp/import-srp")),
                                T = N(e("./pin-extension/pin-extension")),
                                k = N(e("./metametrics/metametrics"));
                            function N(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function w(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    n = new WeakMap();
                                return (w = function (e) {
                                    return e ? n : t;
                                })(e);
                            }
                            function O() {
                                return (
                                    (O = Object.assign
                                        ? Object.assign.bind()
                                        : function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = arguments[t];
                                                  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                              }
                                              return e;
                                          }),
                                    O.apply(this, arguments)
                                );
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
    ],
    [],
    {}
);
