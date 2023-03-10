LavaPack.loadBundle(
    [
        [
            2011,
            { "@ethereumjs/tx": 2015, "@ethereumjs/util": 338, "bn.js": 2020, buffer: 1728, crypto: 1834, events: 1729, "gridplus-sdk": 4300, rlp: 2021 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (r) {
                                (function () {
                                    const n = e("crypto"),
                                        i = e("events").EventEmitter,
                                        a = e("bn.js"),
                                        s = e("gridplus-sdk"),
                                        o = e("@ethereumjs/tx"),
                                        { addHexPrefix: c } = e("@ethereumjs/util"),
                                        u = e("rlp"),
                                        l = "Lattice Hardware",
                                        h = 12e4;
                                    class d extends i {
                                        constructor(e = {}) {
                                            super(), (this.type = l), this._resetDefaults(), this.deserialize(e);
                                        }
                                        async deserialize(e = {}) {
                                            e.hdPath && (this.hdPath = e.hdPath),
                                                e.creds && (this.creds = e.creds),
                                                e.accounts && (this.accounts = e.accounts),
                                                e.accountIndices && (this.accountIndices = e.accountIndices),
                                                e.accountOpts && (this.accountOpts = e.accountOpts),
                                                e.walletUID && (this.walletUID = e.walletUID),
                                                e.name && (this.appName = e.name),
                                                e.appName && (this.appName = e.appName),
                                                e.network && (this.network = e.network),
                                                e.page && (this.page = e.page);
                                        }
                                        setHdPath(e) {
                                            this.hdPath = e;
                                        }
                                        async serialize() {
                                            return {
                                                creds: this.creds,
                                                accounts: this.accounts,
                                                accountIndices: this.accountIndices,
                                                accountOpts: this.accountOpts,
                                                walletUID: this.walletUID,
                                                appName: this.appName,
                                                name: this.name,
                                                network: this.network,
                                                page: this.page,
                                                hdPath: this.hdPath,
                                            };
                                        }
                                        isUnlocked() {
                                            return !!this._getCurrentWalletUID() && !!this.sdkSession;
                                        }
                                        async unlock(e = !1) {
                                            if (this.isUnlocked()) return "Unlocked";
                                            const t = await this._getCreds();
                                            t && ((this.creds.deviceID = t.deviceID), (this.creds.password = t.password), (this.creds.endpoint = t.endpoint || null));
                                            return ((await this._initSession()) && e) || (await this._connect()), "Unlocked";
                                        }
                                        async addAccounts(e = 1) {
                                            if (e <= 0) throw new Error("Number of accounts to add must be a positive number.");
                                            await this.unlock();
                                            const t = await this._fetchAddresses(e, this.unlockedAccount),
                                                r = this._getCurrentWalletUID();
                                            if (!r) throw (await this._connect(), new Error("No active wallet found in Lattice. Please retry."));
                                            return (
                                                t.forEach((e, t) => {
                                                    let n = !1;
                                                    for (let t = 0; t < this.accounts.length; t++) this.accounts[t] === e && this.accountOpts[t].walletUID === r && this.accountOpts[t].hdPath === this.hdPath && (n = !0);
                                                    n || (this.accounts.push(e), this.accountIndices.push(this.unlockedAccount + t), this.accountOpts.push({ walletUID: r, hdPath: this.hdPath }));
                                                }),
                                                this.accounts
                                            );
                                        }
                                        async getAccounts() {
                                            return this.accounts ? [...this.accounts] : [];
                                        }
                                        async signTransaction(e, t) {
                                            let r, n;
                                            const i = t.toJSON();
                                            i.type = t._type || null;
                                            const l = await this._findSignerIdx(e),
                                                h = (function (e) {
                                                    if (e && e.common && "function" == typeof e.common.chainIdBN) return e.common.chainIdBN();
                                                    if (e && e.chainId) return new a(e.chainId);
                                                    return new a(1);
                                                })(t).toNumber(),
                                                d = this.sdkSession.getFwVersion(),
                                                f = this.accountIndices[l],
                                                { hdPath: p } = this.accountOpts[l],
                                                g = this._getHDPathIndices(p, f);
                                            if (0 === d.major && d.minor <= 11) throw new Error("Please update Lattice firmware.");
                                            if (d.major > 0 || d.minor >= 15) {
                                                const e = {
                                                        payload: t._type ? t.getMessageToSign(!1) : u.encode(t.getMessageToSign(!1)),
                                                        curveType: s.Constants.SIGNING.CURVES.SECP256K1,
                                                        hashType: s.Constants.SIGNING.HASHES.KECCAK256,
                                                        encodingType: s.Constants.SIGNING.ENCODINGS.EVM,
                                                        signerPath: g,
                                                    },
                                                    n = d.major > 0 || d.minor >= 16,
                                                    { def: i } = await s.Utils.fetchCalldataDecoder(t.data, t.to, h, n);
                                                i && (e.decoder = i), (r = await this.sdkSession.sign({ data: e }));
                                            } else {
                                                const e = (function (e) {
                                                    let t;
                                                    try {
                                                        switch (
                                                            ((t = {
                                                                nonce: `0x${e.nonce.toString("hex")}` || 0,
                                                                gasLimit: `0x${e.gasLimit.toString("hex")}`,
                                                                to: e.to ? e.to.toString("hex") : null,
                                                                value: `0x${e.value.toString("hex")}`,
                                                                data: 0 === e.data.length ? null : `0x${e.data.toString("hex")}`,
                                                            }),
                                                            e._type)
                                                        ) {
                                                            case 2:
                                                                if (null === e.maxPriorityFeePerGas || null === e.maxFeePerGas || e.maxPriorityFeePerGas === undefined || e.maxFeePerGas === undefined)
                                                                    throw new Error("`maxPriorityFeePerGas` and `maxFeePerGas` must be included for EIP1559 transactions.");
                                                                (t.maxPriorityFeePerGas = `0x${e.maxPriorityFeePerGas.toString("hex")}`),
                                                                    (t.maxFeePerGas = `0x${e.maxFeePerGas.toString("hex")}`),
                                                                    (t.accessList = e.accessList || []),
                                                                    (t.type = 2);
                                                                break;
                                                            case 1:
                                                                (t.accessList = e.accessList || []), (t.gasPrice = `0x${e.gasPrice.toString("hex")}`), (t.type = 1);
                                                                break;
                                                            default:
                                                                (t.gasPrice = `0x${e.gasPrice.toString("hex")}`), (t.type = null);
                                                        }
                                                    } catch (e) {
                                                        throw new Error("Failed to build transaction.");
                                                    }
                                                    return t;
                                                })(t);
                                                (e.chainId = h), (e.signerPath = g), (r = await this.sdkSession.sign({ currency: "ETH", data: e }));
                                            }
                                            if (!r.sig || !r.sig.r || !r.sig.s) throw new Error("No signature returned.");
                                            (n = r.sig.v === undefined ? s.Utils.getV(t, r) : 0 === r.sig.v.length ? "0" : r.sig.v.toString("hex")), (i.r = c(r.sig.r.toString("hex"))), (i.s = c(r.sig.s.toString("hex"))), (i.v = c(n));
                                            if (null === (await this._accountIdxInCurrentWallet(e))) throw new Error("Wrong account. Please change your Lattice wallet or " + "switch to an account on your current active wallet.");
                                            return o.TransactionFactory.fromTxData(i, { common: t.common, freeze: Object.isFrozen(t) });
                                        }
                                        async signPersonalMessage(e, t) {
                                            return this.signMessage(e, { payload: t, protocol: "signPersonal" });
                                        }
                                        async signTypedData(e, t, r) {
                                            if (r.version && "V4" !== r.version && "V3" !== r.version) throw new Error(`Only signTypedData V3 and V4 messages (EIP712) are supported. Got version ${r.version}`);
                                            return this.signMessage(e, { payload: t, protocol: "eip712" });
                                        }
                                        async signMessage(e, t) {
                                            const r = await this._findSignerIdx(e);
                                            let { payload: n, protocol: i } = t;
                                            (n && i) || ((n = t), (i = "signPersonal"));
                                            const a = this.accountIndices[r],
                                                s = this.accountOpts[r].hdPath,
                                                o = { currency: "ETH_MSG", data: { protocol: i, payload: n, signerPath: this._getHDPathIndices(s, a) } },
                                                c = await this.sdkSession.sign(o);
                                            if (!c.sig) throw new Error("No signature returned");
                                            let u;
                                            try {
                                                (u = c.sig.v.toString("hex")), u.length < 2 && (u = `0${u}`);
                                            } catch (e) {
                                                throw new Error("Invalid signature format returned.");
                                            }
                                            if (null === (await this._accountIdxInCurrentWallet(e))) throw new Error("Wrong account. Please change your Lattice wallet or " + "switch to an account on your current active wallet.");
                                            return `0x${c.sig.r}${c.sig.s}${u}`;
                                        }
                                        async exportAccount(e) {
                                            throw new Error("exportAccount not supported by this device");
                                        }
                                        removeAccount(e) {
                                            this.accounts.forEach((t, r) => {
                                                if (t.toLowerCase() === e.toLowerCase()) return this.accounts.splice(r, 1), this.accountIndices.splice(r, 1), void this.accountOpts.splice(r, 1);
                                            });
                                        }
                                        async getFirstPage() {
                                            return (this.page = 0), this._getPage(0);
                                        }
                                        async getNextPage() {
                                            return this._getPage(1);
                                        }
                                        async getPreviousPage() {
                                            return this._getPage(-1);
                                        }
                                        setAccountToUnlock(e) {
                                            this.unlockedAccount = parseInt(e, 10);
                                        }
                                        forgetDevice() {
                                            this._resetDefaults();
                                        }
                                        async _findSignerIdx(e) {
                                            const t = this.isUnlocked();
                                            await this.unlock(!0);
                                            let r = await this._accountIdxInCurrentWallet(e);
                                            if (null !== r) return r;
                                            if (t && (await this._connect(), (r = await this._accountIdxInCurrentWallet(e)), null !== r)) return r;
                                            throw new Error("Account not found in active Lattice wallet. Please switch.");
                                        }
                                        async _accountIdxInCurrentWallet(e) {
                                            const t = await this._findAccountByAddress(e),
                                                { walletUID: r } = this.accountOpts[t],
                                                n = this.sdkSession.getActiveWallet();
                                            if (!n) throw (this._connect(), new Error("No active wallet in Lattice."));
                                            const i = n.uid.toString("hex");
                                            return r.toString("hex") === i ? t : null;
                                        }
                                        async _findAccountByAddress(e) {
                                            const t = await this.getAccounts();
                                            let r = -1;
                                            if (
                                                (t.forEach((t, n) => {
                                                    e.toLowerCase() === t.toLowerCase() && (r = n);
                                                }),
                                                r < 0)
                                            )
                                                throw new Error("Signer not present");
                                            return r;
                                        }
                                        _getHDPathIndices(e, t = 0) {
                                            const r = e.split("/").slice(1),
                                                n = [];
                                            let i = !1;
                                            if (
                                                (r.forEach((e) => {
                                                    const r = "'" === e[e.length - 1];
                                                    let a = r ? 2147483648 : 0;
                                                    e.indexOf("x") > -1 ? ((a += t), (i = !0)) : (a += Number(r ? e.slice(0, e.length - 1) : e)), n.push(a);
                                                }),
                                                !1 === i && n.push(t),
                                                n.length > 5)
                                            )
                                                throw new Error("Only HD paths with up to 5 indices are allowed.");
                                            return n;
                                        }
                                        _resetDefaults() {
                                            (this.accounts = []),
                                                (this.accountIndices = []),
                                                (this.accountOpts = []),
                                                (this.isLocked = !0),
                                                (this.creds = { deviceID: null, password: null, endpoint: null }),
                                                (this.walletUID = null),
                                                (this.sdkSession = null),
                                                (this.page = 0),
                                                (this.unlockedAccount = 0),
                                                (this.network = null),
                                                (this.hdPath = "m/44'/60'/0'/0/x");
                                        }
                                        async _openConnectorTab(e) {
                                            try {
                                                const t = window.open(e);
                                                if (t) return { chromium: t };
                                                if (browser && browser.tabs && browser.tabs.create) {
                                                    return { firefox: await browser.tabs.create({ url: e }) };
                                                }
                                                throw new Error("Unknown browser context. Cannot open Lattice connector.");
                                            } catch (e) {
                                                throw new Error("Failed to open Lattice connector.");
                                            }
                                        }
                                        async _findTabById(e) {
                                            return (await browser.tabs.query({})).find((t) => t.id === e);
                                        }
                                        _getCreds() {
                                            return new Promise((e, t) => {
                                                if (this._hasCreds()) return e();
                                                const n = this.appName ? this.appName : "Unknown",
                                                    i = "https://lattice.gridplus.io",
                                                    a = `${i}?keyring=${n}&forceLogin=true`;
                                                let s;
                                                function o(r) {
                                                    if (r.origin === i)
                                                        try {
                                                            clearInterval(s);
                                                            const n = JSON.parse(r.data);
                                                            return n.deviceID && n.password ? e(n) : t(new Error("Invalid credentials returned from Lattice."));
                                                        } catch (e) {
                                                            return t(e);
                                                        }
                                                }
                                                this._openConnectorTab(a).then((n) => {
                                                    if (n.chromium)
                                                        window.addEventListener("message", o, !1),
                                                            (s = setInterval(() => {
                                                                if (n.chromium.closed) return clearInterval(s), t(new Error("Lattice connector closed."));
                                                            }, 500));
                                                    else if (n.firefox) {
                                                        const i = "&loginCache=";
                                                        s = setInterval(() => {
                                                            this._findTabById(n.firefox.id).then((n) => {
                                                                if (!n || !n.url) return t(new Error("Lattice connector closed."));
                                                                const a = n.url.indexOf(i);
                                                                if (a < 0) return;
                                                                const o = a + i.length;
                                                                clearInterval(s);
                                                                try {
                                                                    const i = r.from(n.url.slice(o), "base64").toString();
                                                                    browser.tabs.remove(n.id).then(() => {
                                                                        const r = JSON.parse(i);
                                                                        return r.deviceID && r.password ? e(r) : t(new Error("Invalid credentials returned from Lattice."));
                                                                    });
                                                                } catch (e) {
                                                                    return t("Failed to get login data from Lattice. Please try again.");
                                                                }
                                                            });
                                                        }, 500);
                                                    }
                                                });
                                            });
                                        }
                                        async _connect() {
                                            try {
                                                return (this.sdkSession.timeout = 2e4), this.sdkSession.connect(this.creds.deviceID);
                                            } finally {
                                                this.sdkSession.timeout = h;
                                            }
                                        }
                                        async _initSession() {
                                            if (this.isUnlocked()) return;
                                            let e = "https://signing.gridpl.us";
                                            this.creds.endpoint && (e = this.creds.endpoint);
                                            let t = { name: this.appName, baseUrl: e, timeout: h, privKey: this._genSessionKey(), network: this.network, skipRetryOnWrongWallet: !0 };
                                            return (this.sdkSession = new s.Client(t)), !!t.stateData;
                                        }
                                        async _fetchAddresses(e = 1, t = 0, r = []) {
                                            if (!this.isUnlocked()) throw new Error("No connection to Lattice. Cannot fetch addresses.");
                                            return this.__fetchAddresses(e, t);
                                        }
                                        async __fetchAddresses(e = 1, t = 0, r = []) {
                                            if (0 === e) return r;
                                            const n = this._hdPathHasInternalVarIdx(),
                                                i = { currency: "ETH", startPath: this._getHDPathIndices(this.hdPath, t), n: n ? 1 : e },
                                                a = await this.sdkSession.getAddresses(i);
                                            if (a.length < 1) throw new Error("No addresses returned");
                                            return n ? await this.__fetchAddresses(e - 1, t + 1, r.concat(a)) : a;
                                        }
                                        async _getPage(e = 0) {
                                            try {
                                                (this.page += e), this.page < 0 && (this.page = 0);
                                                const t = 5 * this.page;
                                                await this.unlock();
                                                const r = await this._fetchAddresses(5, t);
                                                return r.map((e, r) => ({ address: e, balance: null, index: t + r }));
                                            } catch (e) {
                                                try {
                                                    if (!(await this._connect())) throw new Error("NOT_PAIRED");
                                                    return await this._getPage(0);
                                                } catch (e) {
                                                    throw (
                                                        (0 === this.accounts.length && this.forgetDevice(),
                                                        new Error("Failed to get accounts. Please forget the device and try again. " + "Make sure you do not have a locked SafeCard inserted."))
                                                    );
                                                }
                                            }
                                        }
                                        _hasCreds() {
                                            return null !== this.creds.deviceID && null !== this.creds.password && this.appName;
                                        }
                                        _genSessionKey() {
                                            if ((this.name && !this.appName && (this.appName = this.name), !this._hasCreds())) throw new Error("No credentials -- cannot create session key!");
                                            const e = r.concat([r.from(this.creds.password), r.from(this.creds.deviceID), r.from(this.appName)]);
                                            return n.createHash("sha256").update(e).digest();
                                        }
                                        _hdPathHasInternalVarIdx() {
                                            const e = this.hdPath.split("/").slice(1);
                                            for (let t = 0; t < e.length - 1; t++) if (e[t].indexOf("x") > -1) return !0;
                                            return !1;
                                        }
                                        _getCurrentWalletUID() {
                                            if (!this.sdkSession) return null;
                                            const e = this.sdkSession.getActiveWallet();
                                            return e && e.uid ? e.uid.toString("hex") : null;
                                        }
                                    }
                                    (d.type = l), (t.exports = d);
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring" },
        ],
        [
            2012,
            { "./types": 2018, "@ethereumjs/common": 323, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    (this && this.__values) ||
                                    function (e) {
                                        var t = "function" == typeof Symbol && Symbol.iterator,
                                            r = t && e[t],
                                            n = 0;
                                        if (r) return r.call(e);
                                        if (e && "number" == typeof e.length)
                                            return {
                                                next: function () {
                                                    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                                                },
                                            };
                                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                                    },
                                i =
                                    (this && this.__read) ||
                                    function (e, t) {
                                        var r = "function" == typeof Symbol && e[Symbol.iterator];
                                        if (!r) return e;
                                        var n,
                                            i,
                                            a = r.call(e),
                                            s = [];
                                        try {
                                            for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) s.push(n.value);
                                        } catch (e) {
                                            i = { error: e };
                                        } finally {
                                            try {
                                                n && !n.done && (r = a.return) && r.call(a);
                                            } finally {
                                                if (i) throw i.error;
                                            }
                                        }
                                        return s;
                                    },
                                a =
                                    (this && this.__importDefault) ||
                                    function (e) {
                                        return e && e.__esModule ? e : { default: e };
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseTransaction = void 0);
                            var s = a(e("@ethereumjs/common")),
                                o = e("ethereumjs-util"),
                                c = e("./types"),
                                u = (function () {
                                    function e(e) {
                                        (this.activeCapabilities = []), (this.DEFAULT_CHAIN = "mainnet"), (this.DEFAULT_HARDFORK = "istanbul");
                                        var t = e.nonce,
                                            r = e.gasLimit,
                                            n = e.to,
                                            i = e.value,
                                            a = e.data,
                                            s = e.v,
                                            c = e.r,
                                            u = e.s,
                                            l = e.type;
                                        this._type = new o.BN(o.toBuffer(l)).toNumber();
                                        var h = o.toBuffer("" === n ? "0x" : n),
                                            d = o.toBuffer("" === s ? "0x" : s),
                                            f = o.toBuffer("" === c ? "0x" : c),
                                            p = o.toBuffer("" === u ? "0x" : u);
                                        (this.nonce = new o.BN(o.toBuffer("" === t ? "0x" : t))),
                                            (this.gasLimit = new o.BN(o.toBuffer("" === r ? "0x" : r))),
                                            (this.to = h.length > 0 ? new o.Address(h) : undefined),
                                            (this.value = new o.BN(o.toBuffer("" === i ? "0x" : i))),
                                            (this.data = o.toBuffer("" === a ? "0x" : a)),
                                            (this.v = d.length > 0 ? new o.BN(d) : undefined),
                                            (this.r = f.length > 0 ? new o.BN(f) : undefined),
                                            (this.s = p.length > 0 ? new o.BN(p) : undefined),
                                            this._validateCannotExceedMaxInteger({ nonce: this.nonce, gasLimit: this.gasLimit, value: this.value, r: this.r, s: this.s });
                                    }
                                    return (
                                        Object.defineProperty(e.prototype, "transactionType", {
                                            get: function () {
                                                return this.type;
                                            },
                                            enumerable: !1,
                                            configurable: !0,
                                        }),
                                        Object.defineProperty(e.prototype, "type", {
                                            get: function () {
                                                return this._type;
                                            },
                                            enumerable: !1,
                                            configurable: !0,
                                        }),
                                        (e.prototype.supports = function (e) {
                                            return this.activeCapabilities.includes(e);
                                        }),
                                        (e.prototype.validate = function (e) {
                                            void 0 === e && (e = !1);
                                            var t = [];
                                            return (
                                                this.getBaseFee().gt(this.gasLimit) && t.push("gasLimit is too low. given " + this.gasLimit + ", need at least " + this.getBaseFee()),
                                                this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"),
                                                e ? t : 0 === t.length
                                            );
                                        }),
                                        (e.prototype.getBaseFee = function () {
                                            var e = this.getDataFee().addn(this.common.param("gasPrices", "tx"));
                                            return this.common.gteHardfork("homestead") && this.toCreationAddress() && e.iaddn(this.common.param("gasPrices", "txCreation")), e;
                                        }),
                                        (e.prototype.getDataFee = function () {
                                            for (var e = this.common.param("gasPrices", "txDataZero"), t = this.common.param("gasPrices", "txDataNonZero"), r = 0, n = 0; n < this.data.length; n++) 0 === this.data[n] ? (r += e) : (r += t);
                                            return new o.BN(r);
                                        }),
                                        (e.prototype.toCreationAddress = function () {
                                            return this.to === undefined || 0 === this.to.buf.length;
                                        }),
                                        (e.prototype.isSigned = function () {
                                            var e = this,
                                                t = e.v,
                                                r = e.r,
                                                n = e.s;
                                            return 0 === this.type ? !!(t && r && n) : !(t === undefined || !r || !n);
                                        }),
                                        (e.prototype.verifySignature = function () {
                                            try {
                                                var e = this.getSenderPublicKey();
                                                return 0 !== o.unpadBuffer(e).length;
                                            } catch (e) {
                                                return !1;
                                            }
                                        }),
                                        (e.prototype.getSenderAddress = function () {
                                            return new o.Address(o.publicToAddress(this.getSenderPublicKey()));
                                        }),
                                        (e.prototype.sign = function (e) {
                                            if (32 !== e.length) throw new Error("Private key must be 32 bytes in length.");
                                            var t = !1;
                                            0 === this.type &&
                                                this.common.gteHardfork("spuriousDragon")
                                                //  && !this.supports(c.Capability.EIP155ReplayProtection) &&
                                                // (this.activeCapabilities.push(c.Capability.EIP155ReplayProtection)
                                                // , (t = !0));
                                            var r = this.getMessageToSign(!0),
                                                n = o.ecsign(r, e),
                                                i = n.v,
                                                a = n.r,
                                                s = n.s,
                                                u = this._processSignature(i, a, s);
                                            if (t) {
                                                var l = this.activeCapabilities.indexOf(c.Capability.EIP155ReplayProtection);
                                                l > -1 && this.activeCapabilities.splice(l, 1);
                                            }
                                            return u;
                                        }),
                                        (e.prototype._getCommon = function (e, t) {
                                            var r;
                                            if (t) {
                                                var n = new o.BN(o.toBuffer(t));
                                                if (e) {
                                                    if (!e.chainIdBN().eq(n)) throw new Error("The chain ID does not match the chain ID of Common");
                                                    return e.copy();
                                                }
                                                return s.default.isSupportedChainId(n)
                                                    ? new s.default({ chain: n, hardfork: this.DEFAULT_HARDFORK })
                                                    : s.default.forCustomChain(this.DEFAULT_CHAIN, { name: "custom-chain", networkId: n, chainId: n }, this.DEFAULT_HARDFORK);
                                            }
                                            return null !== (r = null == e ? void 0 : e.copy()) && void 0 !== r ? r : new s.default({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
                                        }),
                                        (e.prototype._validateCannotExceedMaxInteger = function (e, t) {
                                            var r, a;
                                            void 0 === t && (t = 53);
                                            try {
                                                for (var s = n(Object.entries(e)), c = s.next(); !c.done; c = s.next()) {
                                                    var u = i(c.value, 2),
                                                        l = u[0],
                                                        h = u[1];
                                                    if (53 === t) {
                                                        if (null == h ? void 0 : h.gt(o.MAX_INTEGER)) throw new Error(l + " cannot exceed MAX_INTEGER, given " + h);
                                                    } else {
                                                        if (256 !== t) throw new Error("unimplemented bits value");
                                                        if (null == h ? void 0 : h.gte(o.TWO_POW256)) throw new Error(l + " must be less than 2^256, given " + h);
                                                    }
                                                }
                                            } catch (e) {
                                                r = { error: e };
                                            } finally {
                                                try {
                                                    c && !c.done && (a = s.return) && a.call(s);
                                                } finally {
                                                    if (r) throw r.error;
                                                }
                                            }
                                        }),
                                        e
                                    );
                                })();
                            r.BaseTransaction = u;
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2013,
            { "./baseTransaction": 2012, "./types": 2018, "./util": 2019, buffer: 1728, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n,
                                        i =
                                            (this && this.__extends) ||
                                            ((n = function (e, t) {
                                                return (
                                                    (n =
                                                        Object.setPrototypeOf ||
                                                        ({ __proto__: [] } instanceof Array &&
                                                            function (e, t) {
                                                                e.__proto__ = t;
                                                            }) ||
                                                        function (e, t) {
                                                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                                        }),
                                                    n(e, t)
                                                );
                                            }),
                                            function (e, t) {
                                                function r() {
                                                    this.constructor = e;
                                                }
                                                n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                                            }),
                                        a =
                                            (this && this.__assign) ||
                                            function () {
                                                return (
                                                    (a =
                                                        Object.assign ||
                                                        function (e) {
                                                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                            return e;
                                                        }),
                                                    a.apply(this, arguments)
                                                );
                                            },
                                        s =
                                            (this && this.__read) ||
                                            function (e, t) {
                                                var r = "function" == typeof Symbol && e[Symbol.iterator];
                                                if (!r) return e;
                                                var n,
                                                    i,
                                                    a = r.call(e),
                                                    s = [];
                                                try {
                                                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) s.push(n.value);
                                                } catch (e) {
                                                    i = { error: e };
                                                } finally {
                                                    try {
                                                        n && !n.done && (r = a.return) && r.call(a);
                                                    } finally {
                                                        if (i) throw i.error;
                                                    }
                                                }
                                                return s;
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var o = e("ethereumjs-util"),
                                        c = e("./baseTransaction"),
                                        u = e("./types"),
                                        l = e("./util"),
                                        h = t.from((2).toString(16).padStart(2, "0"), "hex"),
                                        d = (function (e) {
                                            function r(t, r) {
                                                var n, i;
                                                void 0 === r && (r = {});
                                                var s = e.call(this, a(a({}, t), { type: 2 })) || this;
                                                s.DEFAULT_HARDFORK = "london";
                                                var c = t.chainId,
                                                    h = t.accessList,
                                                    d = t.maxFeePerGas,
                                                    f = t.maxPriorityFeePerGas;
                                                if (((s.common = s._getCommon(r.common, c)), (s.chainId = s.common.chainIdBN()), !s.common.isActivatedEIP(1559))) throw new Error("EIP-1559 not enabled on Common");
                                                s.activeCapabilities = s.activeCapabilities.concat([1559, 2718, 2930]);
                                                var p = l.AccessLists.getAccessListData(null != h ? h : []);
                                                if (
                                                    ((s.accessList = p.accessList),
                                                    (s.AccessListJSON = p.AccessListJSON),
                                                    l.AccessLists.verifyAccessList(s.accessList),
                                                    (s.maxFeePerGas = new o.BN(o.toBuffer("" === d ? "0x" : d))),
                                                    (s.maxPriorityFeePerGas = new o.BN(o.toBuffer("" === f ? "0x" : f))),
                                                    s._validateCannotExceedMaxInteger({ maxFeePerGas: s.maxFeePerGas, maxPriorityFeePerGas: s.maxPriorityFeePerGas }, 256),
                                                    s.maxFeePerGas.lt(s.maxPriorityFeePerGas))
                                                )
                                                    throw new Error("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
                                                if (s.v && !s.v.eqn(0) && !s.v.eqn(1)) throw new Error("The y-parity of the transaction should either be 0 or 1");
                                                if (s.common.gteHardfork("homestead") && (null === (n = s.s) || void 0 === n ? void 0 : n.gt(u.N_DIV_2)))
                                                    throw new Error("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                                                return (null === (i = null == r ? void 0 : r.freeze) || void 0 === i || i) && Object.freeze(s), s;
                                            }
                                            return (
                                                i(r, e),
                                                Object.defineProperty(r.prototype, "senderR", {
                                                    get: function () {
                                                        return this.r;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                Object.defineProperty(r.prototype, "senderS", {
                                                    get: function () {
                                                        return this.s;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                Object.defineProperty(r.prototype, "yParity", {
                                                    get: function () {
                                                        return this.v;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                (r.fromTxData = function (e, t) {
                                                    return void 0 === t && (t = {}), new r(e, t);
                                                }),
                                                (r.fromSerializedTx = function (e, t) {
                                                    if ((void 0 === t && (t = {}), !e.slice(0, 1).equals(h)))
                                                        throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: " + 2 + ", received: " + e.slice(0, 1).toString("hex"));
                                                    var n = o.rlp.decode(e.slice(1));
                                                    if (!Array.isArray(n)) throw new Error("Invalid serialized tx input: must be array");
                                                    return r.fromValuesArray(n, t);
                                                }),
                                                (r.fromRlpSerializedTx = function (e, t) {
                                                    return void 0 === t && (t = {}), r.fromSerializedTx(e, t);
                                                }),
                                                (r.fromValuesArray = function (e, t) {
                                                    if ((void 0 === t && (t = {}), 9 !== e.length && 12 !== e.length)) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
                                                    var n = s(e, 12),
                                                        i = n[0],
                                                        a = n[1],
                                                        c = n[2],
                                                        u = n[3],
                                                        l = n[4],
                                                        h = n[5],
                                                        d = n[6],
                                                        f = n[7],
                                                        p = n[8],
                                                        g = n[9],
                                                        m = n[10],
                                                        v = n[11];
                                                    return new r(
                                                        {
                                                            chainId: new o.BN(i),
                                                            nonce: a,
                                                            maxPriorityFeePerGas: c,
                                                            maxFeePerGas: u,
                                                            gasLimit: l,
                                                            to: h,
                                                            value: d,
                                                            data: f,
                                                            accessList: null != p ? p : [],
                                                            v: g !== undefined ? new o.BN(g) : undefined,
                                                            r: m,
                                                            s: v,
                                                        },
                                                        t
                                                    );
                                                }),
                                                (r.prototype.getDataFee = function () {
                                                    var t = e.prototype.getDataFee.call(this);
                                                    return t.iaddn(l.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), t;
                                                }),
                                                (r.prototype.getUpfrontCost = function (e) {
                                                    void 0 === e && (e = new o.BN(0));
                                                    var t = o.BN.min(this.maxPriorityFeePerGas, this.maxFeePerGas.sub(e)).add(e);
                                                    return this.gasLimit.mul(t).add(this.value);
                                                }),
                                                (r.prototype.raw = function () {
                                                    return [
                                                        o.bnToUnpaddedBuffer(this.chainId),
                                                        o.bnToUnpaddedBuffer(this.nonce),
                                                        o.bnToUnpaddedBuffer(this.maxPriorityFeePerGas),
                                                        o.bnToUnpaddedBuffer(this.maxFeePerGas),
                                                        o.bnToUnpaddedBuffer(this.gasLimit),
                                                        this.to !== undefined ? this.to.buf : t.from([]),
                                                        o.bnToUnpaddedBuffer(this.value),
                                                        this.data,
                                                        this.accessList,
                                                        this.v !== undefined ? o.bnToUnpaddedBuffer(this.v) : t.from([]),
                                                        this.r !== undefined ? o.bnToUnpaddedBuffer(this.r) : t.from([]),
                                                        this.s !== undefined ? o.bnToUnpaddedBuffer(this.s) : t.from([]),
                                                    ];
                                                }),
                                                (r.prototype.serialize = function () {
                                                    var e = this.raw();
                                                    return t.concat([h, o.rlp.encode(e)]);
                                                }),
                                                (r.prototype.getMessageToSign = function (e) {
                                                    void 0 === e && (e = !0);
                                                    var r = this.raw().slice(0, 9),
                                                        n = t.concat([h, o.rlp.encode(r)]);
                                                    return e ? o.keccak256(n) : n;
                                                }),
                                                (r.prototype.hash = function () {
                                                    if (!this.isSigned()) throw new Error("Cannot call hash method if transaction is not signed");
                                                    return o.keccak256(this.serialize());
                                                }),
                                                (r.prototype.getMessageToVerifySignature = function () {
                                                    return this.getMessageToSign();
                                                }),
                                                (r.prototype.getSenderPublicKey = function () {
                                                    var e;
                                                    if (!this.isSigned()) throw new Error("Cannot call this method if transaction is not signed");
                                                    var t = this.getMessageToVerifySignature();
                                                    if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(u.N_DIV_2)))
                                                        throw new Error("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                                                    var r = this,
                                                        n = r.v,
                                                        i = r.r,
                                                        a = r.s;
                                                    try {
                                                        return o.ecrecover(t, n.addn(27), o.bnToUnpaddedBuffer(i), o.bnToUnpaddedBuffer(a));
                                                    } catch (e) {
                                                        throw new Error("Invalid Signature");
                                                    }
                                                }),
                                                (r.prototype._processSignature = function (e, t, n) {
                                                    var i = { common: this.common };
                                                    return r.fromTxData(
                                                        {
                                                            chainId: this.chainId,
                                                            nonce: this.nonce,
                                                            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                                                            maxFeePerGas: this.maxFeePerGas,
                                                            gasLimit: this.gasLimit,
                                                            to: this.to,
                                                            value: this.value,
                                                            data: this.data,
                                                            accessList: this.accessList,
                                                            v: new o.BN(e - 27),
                                                            r: new o.BN(t),
                                                            s: new o.BN(n),
                                                        },
                                                        i
                                                    );
                                                }),
                                                (r.prototype.toJSON = function () {
                                                    var e = l.AccessLists.getAccessListJSON(this.accessList);
                                                    return {
                                                        chainId: o.bnToHex(this.chainId),
                                                        nonce: o.bnToHex(this.nonce),
                                                        maxPriorityFeePerGas: o.bnToHex(this.maxPriorityFeePerGas),
                                                        maxFeePerGas: o.bnToHex(this.maxFeePerGas),
                                                        gasLimit: o.bnToHex(this.gasLimit),
                                                        to: this.to !== undefined ? this.to.toString() : undefined,
                                                        value: o.bnToHex(this.value),
                                                        data: "0x" + this.data.toString("hex"),
                                                        accessList: e,
                                                        v: this.v !== undefined ? o.bnToHex(this.v) : undefined,
                                                        r: this.r !== undefined ? o.bnToHex(this.r) : undefined,
                                                        s: this.s !== undefined ? o.bnToHex(this.s) : undefined,
                                                    };
                                                }),
                                                r
                                            );
                                        })(c.BaseTransaction);
                                    r.default = d;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2014,
            { "./baseTransaction": 2012, "./types": 2018, "./util": 2019, buffer: 1728, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n,
                                        i =
                                            (this && this.__extends) ||
                                            ((n = function (e, t) {
                                                return (
                                                    (n =
                                                        Object.setPrototypeOf ||
                                                        ({ __proto__: [] } instanceof Array &&
                                                            function (e, t) {
                                                                e.__proto__ = t;
                                                            }) ||
                                                        function (e, t) {
                                                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                                        }),
                                                    n(e, t)
                                                );
                                            }),
                                            function (e, t) {
                                                function r() {
                                                    this.constructor = e;
                                                }
                                                n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                                            }),
                                        a =
                                            (this && this.__assign) ||
                                            function () {
                                                return (
                                                    (a =
                                                        Object.assign ||
                                                        function (e) {
                                                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                            return e;
                                                        }),
                                                    a.apply(this, arguments)
                                                );
                                            },
                                        s =
                                            (this && this.__read) ||
                                            function (e, t) {
                                                var r = "function" == typeof Symbol && e[Symbol.iterator];
                                                if (!r) return e;
                                                var n,
                                                    i,
                                                    a = r.call(e),
                                                    s = [];
                                                try {
                                                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) s.push(n.value);
                                                } catch (e) {
                                                    i = { error: e };
                                                } finally {
                                                    try {
                                                        n && !n.done && (r = a.return) && r.call(a);
                                                    } finally {
                                                        if (i) throw i.error;
                                                    }
                                                }
                                                return s;
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var o = e("ethereumjs-util"),
                                        c = e("./baseTransaction"),
                                        u = e("./types"),
                                        l = e("./util"),
                                        h = t.from((1).toString(16).padStart(2, "0"), "hex"),
                                        d = (function (e) {
                                            function r(t, r) {
                                                var n, i;
                                                void 0 === r && (r = {});
                                                var s = e.call(this, a(a({}, t), { type: 1 })) || this;
                                                s.DEFAULT_HARDFORK = "berlin";
                                                var c = t.chainId,
                                                    h = t.accessList,
                                                    d = t.gasPrice;
                                                if (((s.common = s._getCommon(r.common, c)), (s.chainId = s.common.chainIdBN()), !s.common.isActivatedEIP(2930))) throw new Error("EIP-2930 not enabled on Common");
                                                s.activeCapabilities = s.activeCapabilities.concat([2718, 2930]);
                                                var f = l.AccessLists.getAccessListData(null != h ? h : []);
                                                if (
                                                    ((s.accessList = f.accessList),
                                                    (s.AccessListJSON = f.AccessListJSON),
                                                    l.AccessLists.verifyAccessList(s.accessList),
                                                    (s.gasPrice = new o.BN(o.toBuffer("" === d ? "0x" : d))),
                                                    s._validateCannotExceedMaxInteger({ gasPrice: s.gasPrice }),
                                                    s.v && !s.v.eqn(0) && !s.v.eqn(1))
                                                )
                                                    throw new Error("The y-parity of the transaction should either be 0 or 1");
                                                if (s.common.gteHardfork("homestead") && (null === (n = s.s) || void 0 === n ? void 0 : n.gt(u.N_DIV_2)))
                                                    throw new Error("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                                                return (null === (i = null == r ? void 0 : r.freeze) || void 0 === i || i) && Object.freeze(s), s;
                                            }
                                            return (
                                                i(r, e),
                                                Object.defineProperty(r.prototype, "senderR", {
                                                    get: function () {
                                                        return this.r;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                Object.defineProperty(r.prototype, "senderS", {
                                                    get: function () {
                                                        return this.s;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                Object.defineProperty(r.prototype, "yParity", {
                                                    get: function () {
                                                        return this.v;
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                (r.fromTxData = function (e, t) {
                                                    return void 0 === t && (t = {}), new r(e, t);
                                                }),
                                                (r.fromSerializedTx = function (e, t) {
                                                    if ((void 0 === t && (t = {}), !e.slice(0, 1).equals(h)))
                                                        throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: " + 1 + ", received: " + e.slice(0, 1).toString("hex"));
                                                    var n = o.rlp.decode(e.slice(1));
                                                    if (!Array.isArray(n)) throw new Error("Invalid serialized tx input: must be array");
                                                    return r.fromValuesArray(n, t);
                                                }),
                                                (r.fromRlpSerializedTx = function (e, t) {
                                                    return void 0 === t && (t = {}), r.fromSerializedTx(e, t);
                                                }),
                                                (r.fromValuesArray = function (e, t) {
                                                    if ((void 0 === t && (t = {}), 8 !== e.length && 11 !== e.length)) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
                                                    var n = s(e, 11),
                                                        i = n[0],
                                                        a = n[1],
                                                        c = n[2],
                                                        u = n[3],
                                                        l = n[4],
                                                        h = n[5],
                                                        d = n[6],
                                                        f = n[7],
                                                        p = n[8],
                                                        g = n[9],
                                                        m = n[10];
                                                    return new r(
                                                        { chainId: new o.BN(i), nonce: a, gasPrice: c, gasLimit: u, to: l, value: h, data: d, accessList: null != f ? f : [], v: p !== undefined ? new o.BN(p) : undefined, r: g, s: m },
                                                        t
                                                    );
                                                }),
                                                (r.prototype.getDataFee = function () {
                                                    var t = e.prototype.getDataFee.call(this);
                                                    return t.iaddn(l.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), t;
                                                }),
                                                (r.prototype.getUpfrontCost = function () {
                                                    return this.gasLimit.mul(this.gasPrice).add(this.value);
                                                }),
                                                (r.prototype.raw = function () {
                                                    return [
                                                        o.bnToUnpaddedBuffer(this.chainId),
                                                        o.bnToUnpaddedBuffer(this.nonce),
                                                        o.bnToUnpaddedBuffer(this.gasPrice),
                                                        o.bnToUnpaddedBuffer(this.gasLimit),
                                                        this.to !== undefined ? this.to.buf : t.from([]),
                                                        o.bnToUnpaddedBuffer(this.value),
                                                        this.data,
                                                        this.accessList,
                                                        this.v !== undefined ? o.bnToUnpaddedBuffer(this.v) : t.from([]),
                                                        this.r !== undefined ? o.bnToUnpaddedBuffer(this.r) : t.from([]),
                                                        this.s !== undefined ? o.bnToUnpaddedBuffer(this.s) : t.from([]),
                                                    ];
                                                }),
                                                (r.prototype.serialize = function () {
                                                    var e = this.raw();
                                                    return t.concat([h, o.rlp.encode(e)]);
                                                }),
                                                (r.prototype.getMessageToSign = function (e) {
                                                    void 0 === e && (e = !0);
                                                    var r = this.raw().slice(0, 8),
                                                        n = t.concat([h, o.rlp.encode(r)]);
                                                    return e ? o.keccak256(n) : n;
                                                }),
                                                (r.prototype.hash = function () {
                                                    if (!this.isSigned()) throw new Error("Cannot call hash method if transaction is not signed");
                                                    return o.keccak256(this.serialize());
                                                }),
                                                (r.prototype.getMessageToVerifySignature = function () {
                                                    return this.getMessageToSign();
                                                }),
                                                (r.prototype.getSenderPublicKey = function () {
                                                    var e;
                                                    if (!this.isSigned()) throw new Error("Cannot call this method if transaction is not signed");
                                                    var t = this.getMessageToVerifySignature();
                                                    if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(u.N_DIV_2)))
                                                        throw new Error("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                                                    var r = this,
                                                        n = r.yParity,
                                                        i = r.r,
                                                        a = r.s;
                                                    try {
                                                        return o.ecrecover(t, n.addn(27), o.bnToUnpaddedBuffer(i), o.bnToUnpaddedBuffer(a));
                                                    } catch (e) {
                                                        throw new Error("Invalid Signature");
                                                    }
                                                }),
                                                (r.prototype._processSignature = function (e, t, n) {
                                                    var i = { common: this.common };
                                                    return r.fromTxData(
                                                        {
                                                            chainId: this.chainId,
                                                            nonce: this.nonce,
                                                            gasPrice: this.gasPrice,
                                                            gasLimit: this.gasLimit,
                                                            to: this.to,
                                                            value: this.value,
                                                            data: this.data,
                                                            accessList: this.accessList,
                                                            v: new o.BN(e - 27),
                                                            r: new o.BN(t),
                                                            s: new o.BN(n),
                                                        },
                                                        i
                                                    );
                                                }),
                                                (r.prototype.toJSON = function () {
                                                    var e = l.AccessLists.getAccessListJSON(this.accessList);
                                                    return {
                                                        chainId: o.bnToHex(this.chainId),
                                                        nonce: o.bnToHex(this.nonce),
                                                        gasPrice: o.bnToHex(this.gasPrice),
                                                        gasLimit: o.bnToHex(this.gasLimit),
                                                        to: this.to !== undefined ? this.to.toString() : undefined,
                                                        value: o.bnToHex(this.value),
                                                        data: "0x" + this.data.toString("hex"),
                                                        accessList: e,
                                                        v: this.v !== undefined ? o.bnToHex(this.v) : undefined,
                                                        r: this.r !== undefined ? o.bnToHex(this.r) : undefined,
                                                        s: this.s !== undefined ? o.bnToHex(this.s) : undefined,
                                                    };
                                                }),
                                                r
                                            );
                                        })(c.BaseTransaction);
                                    r.default = d;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2015,
            { "./eip1559Transaction": 2013, "./eip2930Transaction": 2014, "./legacyTransaction": 2016, "./transactionFactory": 2017, "./types": 2018 },
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
                                i =
                                    (this && this.__exportStar) ||
                                    function (e, t) {
                                        for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r);
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            var a = e("./legacyTransaction");
                            Object.defineProperty(r, "Transaction", {
                                enumerable: !0,
                                get: function () {
                                    return a.default;
                                },
                            });
                            var s = e("./eip2930Transaction");
                            Object.defineProperty(r, "AccessListEIP2930Transaction", {
                                enumerable: !0,
                                get: function () {
                                    return s.default;
                                },
                            });
                            var o = e("./transactionFactory");
                            Object.defineProperty(r, "TransactionFactory", {
                                enumerable: !0,
                                get: function () {
                                    return o.default;
                                },
                            });
                            var c = e("./eip1559Transaction");
                            Object.defineProperty(r, "FeeMarketEIP1559Transaction", {
                                enumerable: !0,
                                get: function () {
                                    return c.default;
                                },
                            }),
                                i(e("./types"), r);
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2016,
            { "./baseTransaction": 2012, "./types": 2018, buffer: 1728, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n,
                                        i =
                                            (this && this.__extends) ||
                                            ((n = function (e, t) {
                                                return (
                                                    (n =
                                                        Object.setPrototypeOf ||
                                                        ({ __proto__: [] } instanceof Array &&
                                                            function (e, t) {
                                                                e.__proto__ = t;
                                                            }) ||
                                                        function (e, t) {
                                                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                                        }),
                                                    n(e, t)
                                                );
                                            }),
                                            function (e, t) {
                                                function r() {
                                                    this.constructor = e;
                                                }
                                                n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                                            }),
                                        a =
                                            (this && this.__assign) ||
                                            function () {
                                                return (
                                                    (a =
                                                        Object.assign ||
                                                        function (e) {
                                                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                            return e;
                                                        }),
                                                    a.apply(this, arguments)
                                                );
                                            },
                                        s =
                                            (this && this.__read) ||
                                            function (e, t) {
                                                var r = "function" == typeof Symbol && e[Symbol.iterator];
                                                if (!r) return e;
                                                var n,
                                                    i,
                                                    a = r.call(e),
                                                    s = [];
                                                try {
                                                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) s.push(n.value);
                                                } catch (e) {
                                                    i = { error: e };
                                                } finally {
                                                    try {
                                                        n && !n.done && (r = a.return) && r.call(a);
                                                    } finally {
                                                        if (i) throw i.error;
                                                    }
                                                }
                                                return s;
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var o = e("ethereumjs-util"),
                                        c = e("./types"),
                                        u = e("./baseTransaction"),
                                        l = (function (e) {
                                            function r(t, r) {
                                                var n;
                                                void 0 === r && (r = {});
                                                var i = e.call(this, a(a({}, t), { type: 0 })) || this;
                                                if (
                                                    ((i.common = i._validateTxV(i.v, r.common)),
                                                    (i.gasPrice = new o.BN(o.toBuffer("" === t.gasPrice ? "0x" : t.gasPrice))),
                                                    i._validateCannotExceedMaxInteger({ gasPrice: i.gasPrice }),
                                                    i.common.gteHardfork("spuriousDragon"))
                                                )
                                                    if (i.isSigned()) {
                                                        var s = i.v;
                                                        // ,u = i.common.chainIdBN().muln(2);
                                                        // (s.eq(u.addn(35)) || s.eq(u.addn(36)))
                                                        // && i.activeCapabilities.push(c.Capability.EIP155ReplayProtection);
                                                    }
                                                    // else i.activeCapabilities.push(c.Capability.EIP155ReplayProtection);
                                                return (null === (n = null == r ? void 0 : r.freeze) || void 0 === n || n) && Object.freeze(i), i;
                                            }
                                            return (
                                                i(r, e),
                                                (r.fromTxData = function (e, t) {
                                                    return void 0 === t && (t = {}), new r(e, t);
                                                }),
                                                (r.fromSerializedTx = function (e, t) {
                                                    void 0 === t && (t = {});
                                                    var r = o.rlp.decode(e);
                                                    if (!Array.isArray(r)) throw new Error("Invalid serialized tx input. Must be array");
                                                    return this.fromValuesArray(r, t);
                                                }),
                                                (r.fromRlpSerializedTx = function (e, t) {
                                                    return void 0 === t && (t = {}), r.fromSerializedTx(e, t);
                                                }),
                                                (r.fromValuesArray = function (e, t) {
                                                    if ((void 0 === t && (t = {}), 6 !== e.length && 9 !== e.length)) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
                                                    var n = s(e, 9);
                                                    return new r({ nonce: n[0], gasPrice: n[1], gasLimit: n[2], to: n[3], value: n[4], data: n[5], v: n[6], r: n[7], s: n[8] }, t);
                                                }),
                                                (r.prototype.raw = function () {
                                                    return [
                                                        o.bnToUnpaddedBuffer(this.nonce),
                                                        o.bnToUnpaddedBuffer(this.gasPrice),
                                                        o.bnToUnpaddedBuffer(this.gasLimit),
                                                        this.to !== undefined ? this.to.buf : t.from([]),
                                                        o.bnToUnpaddedBuffer(this.value),
                                                        this.data,
                                                        this.v !== undefined ? o.bnToUnpaddedBuffer(this.v) : t.from([]),
                                                        this.r !== undefined ? o.bnToUnpaddedBuffer(this.r) : t.from([]),
                                                        this.s !== undefined ? o.bnToUnpaddedBuffer(this.s) : t.from([]),
                                                    ];
                                                }),
                                                (r.prototype.serialize = function () {
                                                    return o.rlp.encode(this.raw());
                                                }),
                                                (r.prototype._getMessageToSign = function () {
                                                    var e = [
                                                        o.bnToUnpaddedBuffer(this.nonce),
                                                        o.bnToUnpaddedBuffer(this.gasPrice),
                                                        o.bnToUnpaddedBuffer(this.gasLimit),
                                                        this.to !== undefined ? this.to.buf : t.from([]),
                                                        o.bnToUnpaddedBuffer(this.value),
                                                        this.data,
                                                    ];
                                                    return this.supports(c.Capability.EIP155ReplayProtection) && (e.push(o.toBuffer(this.common.chainIdBN())), e.push(o.unpadBuffer(o.toBuffer(0))), e.push(o.unpadBuffer(o.toBuffer(0)))), e;
                                                }),
                                                (r.prototype.getMessageToSign = function (e) {
                                                    void 0 === e && (e = !0);
                                                    var t = this._getMessageToSign();
                                                    return e ? o.rlphash(t) : t;
                                                }),
                                                (r.prototype.getUpfrontCost = function () {
                                                    return this.gasLimit.mul(this.gasPrice).add(this.value);
                                                }),
                                                (r.prototype.hash = function () {
                                                    return o.rlphash(this.raw());
                                                }),
                                                (r.prototype.getMessageToVerifySignature = function () {
                                                    if (!this.isSigned()) throw Error("This transaction is not signed");
                                                    var e = this._getMessageToSign();
                                                    return o.rlphash(e);
                                                }),
                                                (r.prototype.getSenderPublicKey = function () {
                                                    var e,
                                                        t = this.getMessageToVerifySignature();
                                                    if (this.common.gteHardfork("homestead") && (null === (e = this.s) || void 0 === e ? void 0 : e.gt(c.N_DIV_2)))
                                                        throw new Error("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                                                    var r = this,
                                                        n = r.v,
                                                        i = r.r,
                                                        a = r.s;
                                                    try {
                                                        return o.ecrecover(t, n, o.bnToUnpaddedBuffer(i), o.bnToUnpaddedBuffer(a), this.supports(c.Capability.EIP155ReplayProtection) ? this.common.chainIdBN() : undefined);
                                                    } catch (e) {
                                                        throw new Error("Invalid Signature");
                                                    }
                                                }),
                                                (r.prototype._processSignature = function (e, t, n) {
                                                    var i = new o.BN(e);
                                                    // this.supports(c.Capability.EIP155ReplayProtection) && i.iadd(this.common.chainIdBN().muln(2).addn(8));
                                                    var a = { common: this.common };
                                                    return r.fromTxData({ nonce: this.nonce, gasPrice: this.gasPrice, gasLimit: this.gasLimit, to: this.to, value: this.value, data: this.data, v: i, r: new o.BN(t), s: new o.BN(n) }, a);
                                                }),
                                                (r.prototype.toJSON = function () {
                                                    return {
                                                        nonce: o.bnToHex(this.nonce),
                                                        gasPrice: o.bnToHex(this.gasPrice),
                                                        gasLimit: o.bnToHex(this.gasLimit),
                                                        to: this.to !== undefined ? this.to.toString() : undefined,
                                                        value: o.bnToHex(this.value),
                                                        data: "0x" + this.data.toString("hex"),
                                                        v: this.v !== undefined ? o.bnToHex(this.v) : undefined,
                                                        r: this.r !== undefined ? o.bnToHex(this.r) : undefined,
                                                        s: this.s !== undefined ? o.bnToHex(this.s) : undefined,
                                                    };
                                                }),
                                                (r.prototype._validateTxV = function (e, t) {
                                                    var r;
                                                    if (e !== undefined && !e.eqn(0) && (!t || t.gteHardfork("spuriousDragon")) && !e.eqn(27) && !e.eqn(28))
                                                        if (t) {
                                                            var n = t.chainIdBN().muln(2);
                                                            if (!(e.eq(n.addn(35)) || e.eq(n.addn(36))))
                                                                throw new Error(
                                                                    "Incompatible EIP155-based V " +
                                                                        e.toString() +
                                                                        " and chain id " +
                                                                        t.chainIdBN().toString() +
                                                                        ". See the Common parameter of the Transaction constructor to set the chain id."
                                                                );
                                                        } else {
                                                            var i = void 0;
                                                            (i = e.subn(35).isEven() ? 35 : 36), (r = e.subn(i).divn(2));
                                                        }
                                                    return this._getCommon(t, r);
                                                }),
                                                (r.prototype._unsignedTxImplementsEIP155 = function () {
                                                    return this.common.gteHardfork("spuriousDragon");
                                                }),
                                                (r.prototype._signedTxImplementsEIP155 = function () {
                                                    if (!this.isSigned()) throw Error("This transaction is not signed");
                                                    var e = this.common.gteHardfork("spuriousDragon"),
                                                        t = this.v,
                                                        r = this.common.chainIdBN().muln(2);
                                                    return (t.eq(r.addn(35)) || t.eq(r.addn(36))) && e;
                                                }),
                                                r
                                            );
                                        })(u.BaseTransaction);
                                    r.default = l;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2017,
            { ".": 2015, "../../../../../is-buffer/index.js": 4463, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var n = e("ethereumjs-util"),
                                        i = e("."),
                                        a = (function () {
                                            function e() {}
                                            return (
                                                (e.fromTxData = function (e, t) {
                                                    if ((void 0 === t && (t = {}), "type" in e && e.type !== undefined)) {
                                                        var r = new n.BN(n.toBuffer(e.type)).toNumber();
                                                        if (0 === r) return i.Transaction.fromTxData(e, t);
                                                        if (1 === r) return i.AccessListEIP2930Transaction.fromTxData(e, t);
                                                        if (2 === r) return i.FeeMarketEIP1559Transaction.fromTxData(e, t);
                                                        throw new Error("Tx instantiation with type " + r + " not supported");
                                                    }
                                                    return i.Transaction.fromTxData(e, t);
                                                }),
                                                (e.fromSerializedData = function (e, t) {
                                                    if ((void 0 === t && (t = {}), e[0] <= 127)) {
                                                        var r = void 0;
                                                        switch (e[0]) {
                                                            case 1:
                                                                r = 2930;
                                                                break;
                                                            case 2:
                                                                r = 1559;
                                                                break;
                                                            default:
                                                                throw new Error("TypedTransaction with ID " + e[0] + " unknown");
                                                        }
                                                        return 1559 === r ? i.FeeMarketEIP1559Transaction.fromSerializedTx(e, t) : i.AccessListEIP2930Transaction.fromSerializedTx(e, t);
                                                    }
                                                    return i.Transaction.fromSerializedTx(e, t);
                                                }),
                                                (e.fromBlockBodyData = function (e, r) {
                                                    if ((void 0 === r && (r = {}), t.isBuffer(e))) return this.fromSerializedData(e, r);
                                                    if (Array.isArray(e)) return i.Transaction.fromValuesArray(e, r);
                                                    throw new Error("Cannot decode transaction: unknown type input");
                                                }),
                                                (e.getTransactionClass = function (e, t) {
                                                    if ((void 0 === e && (e = 0), 0 == e || (e >= 128 && e <= 255))) return i.Transaction;
                                                    switch (e) {
                                                        case 1:
                                                            return i.AccessListEIP2930Transaction;
                                                        case 2:
                                                            return i.FeeMarketEIP1559Transaction;
                                                        default:
                                                            throw new Error("TypedTransaction with ID " + e + " unknown");
                                                    }
                                                }),
                                                e
                                            );
                                        })();
                                    r.default = a;
                                }.call(this));
                            }.call(this, { isBuffer: e("../../../../../is-buffer/index.js") }));
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2018,
            { "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.N_DIV_2 = r.isAccessList = r.isAccessListBuffer = r.Capability = void 0);
                            var n = e("ethereumjs-util");
                            function i(e) {
                                if (0 === e.length) return !0;
                                var t = e[0];
                                return !!Array.isArray(t);
                            }
                            !(function (e) {
                                    (e[(e.EIP1559FeeMarket = 1559)] = "EIP1559FeeMarket"),
                                    (e[(e.EIP2718TypedTransaction = 2718)] = "EIP2718TypedTransaction"),
                                    (e[(e.EIP2930AccessLists = 2930)] = "EIP2930AccessLists");
                            })(r.Capability || (r.Capability = {})),
                                (r.isAccessListBuffer = i),
                                (r.isAccessList = function (e) {
                                    return !i(e);
                                }),
                                (r.N_DIV_2 = new n.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16));
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            2019,
            { "./types": 2018, "ethereumjs-util": 2107 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.AccessLists = void 0);
                            var n = e("ethereumjs-util"),
                                i = e("./types"),
                                a = (function () {
                                    function e() {}
                                    return (
                                        (e.getAccessListData = function (e) {
                                            var t, r;
                                            if (e && i.isAccessList(e)) {
                                                t = e;
                                                for (var a = [], s = 0; s < e.length; s++) {
                                                    for (var o = e[s], c = n.toBuffer(o.address), u = [], l = 0; l < o.storageKeys.length; l++) u.push(n.toBuffer(o.storageKeys[l]));
                                                    a.push([c, u]);
                                                }
                                                r = a;
                                            } else {
                                                r = null != e ? e : [];
                                                var h = [];
                                                for (s = 0; s < r.length; s++) {
                                                    var d = r[s],
                                                        f = n.bufferToHex(d[0]),
                                                        p = [];
                                                    for (o = 0; o < d[1].length; o++) p.push(n.bufferToHex(d[1][o]));
                                                    var g = { address: f, storageKeys: p };
                                                    h.push(g);
                                                }
                                                t = h;
                                            }
                                            return { AccessListJSON: t, accessList: r };
                                        }),
                                        (e.verifyAccessList = function (e) {
                                            for (var t = 0; t < e.length; t++) {
                                                var r = e[t],
                                                    n = r[0],
                                                    i = r[1];
                                                if (r[2] !== undefined) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
                                                if (20 != n.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
                                                for (var a = 0; a < i.length; a++) if (32 != i[a].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
                                            }
                                        }),
                                        (e.getAccessListJSON = function (e) {
                                            for (var t = [], r = 0; r < e.length; r++) {
                                                for (var i = e[r], a = { address: "0x" + n.setLengthLeft(i[0], 20).toString("hex"), storageKeys: [] }, s = i[1], o = 0; o < s.length; o++) {
                                                    var c = s[o];
                                                    a.storageKeys.push("0x" + n.setLengthLeft(c, 32).toString("hex"));
                                                }
                                                t.push(a);
                                            }
                                            return t;
                                        }),
                                        (e.getDataFeeEIP2930 = function (e, t) {
                                            for (var r = t.param("gasPrices", "accessListStorageKeyCost"), n = t.param("gasPrices", "accessListAddressCost"), i = 0, a = 0; a < e.length; a++) {
                                                i += e[a][1].length;
                                            }
                                            return e.length * n + i * r;
                                        }),
                                        e
                                    );
                                })();
                            r.AccessLists = a;
                        };
                    };
            },
            { package: "eth-lattice-keyring>@ethereumjs/tx" },
        ],
        [
            202,
            { cids: 1770 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            const n = e("cids");
                            r.cidForWeb = (e) => {
                                let t = new n(e);
                                0 === t.version && (t = t.toV1());
                                let r = t.toString("base32");
                                if (r.length > 63) {
                                    const e = t.toString("base36");
                                    if (e.length <= 63) return e;
                                    throw new TypeError("CID is longer than DNS limit of 63 characters and is not compatible with public gateways");
                                }
                                return r;
                            };
                            r.cidV0ToV1Base32 = (e) => {
                                let t = new n(e);
                                return 0 === t.version && (t = t.toV1()), t.toString("base32");
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash" },
        ],
        [
            2020,
            { buffer: 1727 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            !(function (t, r) {
                                function n(e, t) {
                                    if (!e) throw new Error(t || "Assertion failed");
                                }
                                function i(e, t) {
                                    e.super_ = t;
                                    var r = function () {};
                                    (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
                                }
                                function a(e, t, r) {
                                    if (a.isBN(e)) return e;
                                    (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== e && (("le" !== t && "be" !== t) || ((r = t), (t = 10)), this._init(e || 0, t || 10, r || "be"));
                                }
                                var s;
                                "object" == typeof t ? (t.exports = a) : (r.BN = a), (a.BN = a), (a.wordSize = 26);
                                try {
                                    s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e("buffer").Buffer;
                                } catch (e) {}
                                function o(e, t) {
                                    var r = e.charCodeAt(t);
                                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + e);
                                }
                                function c(e, t, r) {
                                    var n = o(e, r);
                                    return r - 1 >= t && (n |= o(e, r - 1) << 4), n;
                                }
                                function u(e, t, r, i) {
                                    for (var a = 0, s = 0, o = Math.min(e.length, r), c = t; c < o; c++) {
                                        var u = e.charCodeAt(c) - 48;
                                        (a *= i), (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u), n(u >= 0 && s < i, "Invalid character"), (a += s);
                                    }
                                    return a;
                                }
                                function l(e, t) {
                                    (e.words = t.words), (e.length = t.length), (e.negative = t.negative), (e.red = t.red);
                                }
                                if (
                                    ((a.isBN = function (e) {
                                        return e instanceof a || (null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words));
                                    }),
                                    (a.max = function (e, t) {
                                        return e.cmp(t) > 0 ? e : t;
                                    }),
                                    (a.min = function (e, t) {
                                        return e.cmp(t) < 0 ? e : t;
                                    }),
                                    (a.prototype._init = function (e, t, r) {
                                        if ("number" == typeof e) return this._initNumber(e, t, r);
                                        if ("object" == typeof e) return this._initArray(e, t, r);
                                        "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                                        var i = 0;
                                        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, (this.negative = 1)),
                                            i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)));
                                    }),
                                    (a.prototype._initNumber = function (e, t, r) {
                                        e < 0 && ((this.negative = 1), (e = -e)),
                                            e < 67108864
                                                ? ((this.words = [67108863 & e]), (this.length = 1))
                                                : e < 4503599627370496
                                                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]), (this.length = 2))
                                                : (n(e < 9007199254740992), (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]), (this.length = 3)),
                                            "le" === r && this._initArray(this.toArray(), t, r);
                                    }),
                                    (a.prototype._initArray = function (e, t, r) {
                                        if ((n("number" == typeof e.length), e.length <= 0)) return (this.words = [0]), (this.length = 1), this;
                                        (this.length = Math.ceil(e.length / 3)), (this.words = new Array(this.length));
                                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                                        var a,
                                            s,
                                            o = 0;
                                        if ("be" === r)
                                            for (i = e.length - 1, a = 0; i >= 0; i -= 3)
                                                (s = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)), (this.words[a] |= (s << o) & 67108863), (this.words[a + 1] = (s >>> (26 - o)) & 67108863), (o += 24) >= 26 && ((o -= 26), a++);
                                        else if ("le" === r)
                                            for (i = 0, a = 0; i < e.length; i += 3)
                                                (s = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)), (this.words[a] |= (s << o) & 67108863), (this.words[a + 1] = (s >>> (26 - o)) & 67108863), (o += 24) >= 26 && ((o -= 26), a++);
                                        return this._strip();
                                    }),
                                    (a.prototype._parseHex = function (e, t, r) {
                                        (this.length = Math.ceil((e.length - t) / 6)), (this.words = new Array(this.length));
                                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                                        var i,
                                            a = 0,
                                            s = 0;
                                        if ("be" === r) for (n = e.length - 1; n >= t; n -= 2) (i = c(e, t, n) << a), (this.words[s] |= 67108863 & i), a >= 18 ? ((a -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (a += 8);
                                        else
                                            for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) (i = c(e, t, n) << a), (this.words[s] |= 67108863 & i), a >= 18 ? ((a -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (a += 8);
                                        this._strip();
                                    }),
                                    (a.prototype._parseBase = function (e, t, r) {
                                        (this.words = [0]), (this.length = 1);
                                        for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                                        n--, (i = (i / t) | 0);
                                        for (var a = e.length - r, s = a % n, o = Math.min(a, a - s) + r, c = 0, l = r; l < o; l += n)
                                            (c = u(e, l, l + n, t)), this.imuln(i), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
                                        if (0 !== s) {
                                            var h = 1;
                                            for (c = u(e, l, e.length, t), l = 0; l < s; l++) h *= t;
                                            this.imuln(h), this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
                                        }
                                        this._strip();
                                    }),
                                    (a.prototype.copy = function (e) {
                                        e.words = new Array(this.length);
                                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                                        (e.length = this.length), (e.negative = this.negative), (e.red = this.red);
                                    }),
                                    (a.prototype._move = function (e) {
                                        l(e, this);
                                    }),
                                    (a.prototype.clone = function () {
                                        var e = new a(null);
                                        return this.copy(e), e;
                                    }),
                                    (a.prototype._expand = function (e) {
                                        for (; this.length < e; ) this.words[this.length++] = 0;
                                        return this;
                                    }),
                                    (a.prototype._strip = function () {
                                        for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
                                        return this._normSign();
                                    }),
                                    (a.prototype._normSign = function () {
                                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
                                    }),
                                    "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                                )
                                    try {
                                        a.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
                                    } catch (e) {
                                        a.prototype.inspect = h;
                                    }
                                else a.prototype.inspect = h;
                                function h() {
                                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                                }
                                var d = [
                                        "",
                                        "0",
                                        "00",
                                        "000",
                                        "0000",
                                        "00000",
                                        "000000",
                                        "0000000",
                                        "00000000",
                                        "000000000",
                                        "0000000000",
                                        "00000000000",
                                        "000000000000",
                                        "0000000000000",
                                        "00000000000000",
                                        "000000000000000",
                                        "0000000000000000",
                                        "00000000000000000",
                                        "000000000000000000",
                                        "0000000000000000000",
                                        "00000000000000000000",
                                        "000000000000000000000",
                                        "0000000000000000000000",
                                        "00000000000000000000000",
                                        "000000000000000000000000",
                                        "0000000000000000000000000",
                                    ],
                                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                    p = [
                                        0,
                                        0,
                                        33554432,
                                        43046721,
                                        16777216,
                                        48828125,
                                        60466176,
                                        40353607,
                                        16777216,
                                        43046721,
                                        1e7,
                                        19487171,
                                        35831808,
                                        62748517,
                                        7529536,
                                        11390625,
                                        16777216,
                                        24137569,
                                        34012224,
                                        47045881,
                                        64e6,
                                        4084101,
                                        5153632,
                                        6436343,
                                        7962624,
                                        9765625,
                                        11881376,
                                        14348907,
                                        17210368,
                                        20511149,
                                        243e5,
                                        28629151,
                                        33554432,
                                        39135393,
                                        45435424,
                                        52521875,
                                        60466176,
                                    ];
                                (a.prototype.toString = function (e, t) {
                                    var r;
                                    if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
                                        r = "";
                                        for (var i = 0, a = 0, s = 0; s < this.length; s++) {
                                            var o = this.words[s],
                                                c = (16777215 & ((o << i) | a)).toString(16);
                                            (a = (o >>> (24 - i)) & 16777215), (i += 2) >= 26 && ((i -= 26), s--), (r = 0 !== a || s !== this.length - 1 ? d[6 - c.length] + c + r : c + r);
                                        }
                                        for (0 !== a && (r = a.toString(16) + r); r.length % t != 0; ) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r;
                                    }
                                    if (e === (0 | e) && e >= 2 && e <= 36) {
                                        var u = f[e],
                                            l = p[e];
                                        r = "";
                                        var h = this.clone();
                                        for (h.negative = 0; !h.isZero(); ) {
                                            var g = h.modrn(l).toString(e);
                                            r = (h = h.idivn(l)).isZero() ? g + r : d[u - g.length] + g + r;
                                        }
                                        for (this.isZero() && (r = "0" + r); r.length % t != 0; ) r = "0" + r;
                                        return 0 !== this.negative && (r = "-" + r), r;
                                    }
                                    n(!1, "Base should be between 2 and 36");
                                }),
                                    (a.prototype.toNumber = function () {
                                        var e = this.words[0];
                                        return (
                                            2 === this.length
                                                ? (e += 67108864 * this.words[1])
                                                : 3 === this.length && 1 === this.words[2]
                                                ? (e += 4503599627370496 + 67108864 * this.words[1])
                                                : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                                            0 !== this.negative ? -e : e
                                        );
                                    }),
                                    (a.prototype.toJSON = function () {
                                        return this.toString(16, 2);
                                    }),
                                    s &&
                                        (a.prototype.toBuffer = function (e, t) {
                                            return this.toArrayLike(s, e, t);
                                        }),
                                    (a.prototype.toArray = function (e, t) {
                                        return this.toArrayLike(Array, e, t);
                                    });
                                function g(e, t, r) {
                                    r.negative = t.negative ^ e.negative;
                                    var n = (e.length + t.length) | 0;
                                    (r.length = n), (n = (n - 1) | 0);
                                    var i = 0 | e.words[0],
                                        a = 0 | t.words[0],
                                        s = i * a,
                                        o = 67108863 & s,
                                        c = (s / 67108864) | 0;
                                    r.words[0] = o;
                                    for (var u = 1; u < n; u++) {
                                        for (var l = c >>> 26, h = 67108863 & c, d = Math.min(u, t.length - 1), f = Math.max(0, u - e.length + 1); f <= d; f++) {
                                            var p = (u - f) | 0;
                                            (l += ((s = (i = 0 | e.words[p]) * (a = 0 | t.words[f]) + h) / 67108864) | 0), (h = 67108863 & s);
                                        }
                                        (r.words[u] = 0 | h), (c = 0 | l);
                                    }
                                    return 0 !== c ? (r.words[u] = 0 | c) : r.length--, r._strip();
                                }
                                (a.prototype.toArrayLike = function (e, t, r) {
                                    this._strip();
                                    var i = this.byteLength(),
                                        a = r || Math.max(1, i);
                                    n(i <= a, "byte array longer than desired length"), n(a > 0, "Requested array length <= 0");
                                    var s = (function (e, t) {
                                        return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
                                    })(e, a);
                                    return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](s, i), s;
                                }),
                                    (a.prototype._toArrayLikeLE = function (e, t) {
                                        for (var r = 0, n = 0, i = 0, a = 0; i < this.length; i++) {
                                            var s = (this.words[i] << a) | n;
                                            (e[r++] = 255 & s),
                                                r < e.length && (e[r++] = (s >> 8) & 255),
                                                r < e.length && (e[r++] = (s >> 16) & 255),
                                                6 === a ? (r < e.length && (e[r++] = (s >> 24) & 255), (n = 0), (a = 0)) : ((n = s >>> 24), (a += 2));
                                        }
                                        if (r < e.length) for (e[r++] = n; r < e.length; ) e[r++] = 0;
                                    }),
                                    (a.prototype._toArrayLikeBE = function (e, t) {
                                        for (var r = e.length - 1, n = 0, i = 0, a = 0; i < this.length; i++) {
                                            var s = (this.words[i] << a) | n;
                                            (e[r--] = 255 & s), r >= 0 && (e[r--] = (s >> 8) & 255), r >= 0 && (e[r--] = (s >> 16) & 255), 6 === a ? (r >= 0 && (e[r--] = (s >> 24) & 255), (n = 0), (a = 0)) : ((n = s >>> 24), (a += 2));
                                        }
                                        if (r >= 0) for (e[r--] = n; r >= 0; ) e[r--] = 0;
                                    }),
                                    Math.clz32
                                        ? (a.prototype._countBits = function (e) {
                                              return 32 - Math.clz32(e);
                                          })
                                        : (a.prototype._countBits = function (e) {
                                              var t = e,
                                                  r = 0;
                                              return t >= 4096 && ((r += 13), (t >>>= 13)), t >= 64 && ((r += 7), (t >>>= 7)), t >= 8 && ((r += 4), (t >>>= 4)), t >= 2 && ((r += 2), (t >>>= 2)), r + t;
                                          }),
                                    (a.prototype._zeroBits = function (e) {
                                        if (0 === e) return 26;
                                        var t = e,
                                            r = 0;
                                        return 0 == (8191 & t) && ((r += 13), (t >>>= 13)), 0 == (127 & t) && ((r += 7), (t >>>= 7)), 0 == (15 & t) && ((r += 4), (t >>>= 4)), 0 == (3 & t) && ((r += 2), (t >>>= 2)), 0 == (1 & t) && r++, r;
                                    }),
                                    (a.prototype.bitLength = function () {
                                        var e = this.words[this.length - 1],
                                            t = this._countBits(e);
                                        return 26 * (this.length - 1) + t;
                                    }),
                                    (a.prototype.zeroBits = function () {
                                        if (this.isZero()) return 0;
                                        for (var e = 0, t = 0; t < this.length; t++) {
                                            var r = this._zeroBits(this.words[t]);
                                            if (((e += r), 26 !== r)) break;
                                        }
                                        return e;
                                    }),
                                    (a.prototype.byteLength = function () {
                                        return Math.ceil(this.bitLength() / 8);
                                    }),
                                    (a.prototype.toTwos = function (e) {
                                        return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
                                    }),
                                    (a.prototype.fromTwos = function (e) {
                                        return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
                                    }),
                                    (a.prototype.isNeg = function () {
                                        return 0 !== this.negative;
                                    }),
                                    (a.prototype.neg = function () {
                                        return this.clone().ineg();
                                    }),
                                    (a.prototype.ineg = function () {
                                        return this.isZero() || (this.negative ^= 1), this;
                                    }),
                                    (a.prototype.iuor = function (e) {
                                        for (; this.length < e.length; ) this.words[this.length++] = 0;
                                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                                        return this._strip();
                                    }),
                                    (a.prototype.ior = function (e) {
                                        return n(0 == (this.negative | e.negative)), this.iuor(e);
                                    }),
                                    (a.prototype.or = function (e) {
                                        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
                                    }),
                                    (a.prototype.uor = function (e) {
                                        return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
                                    }),
                                    (a.prototype.iuand = function (e) {
                                        var t;
                                        t = this.length > e.length ? e : this;
                                        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                                        return (this.length = t.length), this._strip();
                                    }),
                                    (a.prototype.iand = function (e) {
                                        return n(0 == (this.negative | e.negative)), this.iuand(e);
                                    }),
                                    (a.prototype.and = function (e) {
                                        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
                                    }),
                                    (a.prototype.uand = function (e) {
                                        return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
                                    }),
                                    (a.prototype.iuxor = function (e) {
                                        var t, r;
                                        this.length > e.length ? ((t = this), (r = e)) : ((t = e), (r = this));
                                        for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                                        if (this !== t) for (; n < t.length; n++) this.words[n] = t.words[n];
                                        return (this.length = t.length), this._strip();
                                    }),
                                    (a.prototype.ixor = function (e) {
                                        return n(0 == (this.negative | e.negative)), this.iuxor(e);
                                    }),
                                    (a.prototype.xor = function (e) {
                                        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
                                    }),
                                    (a.prototype.uxor = function (e) {
                                        return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
                                    }),
                                    (a.prototype.inotn = function (e) {
                                        n("number" == typeof e && e >= 0);
                                        var t = 0 | Math.ceil(e / 26),
                                            r = e % 26;
                                        this._expand(t), r > 0 && t--;
                                        for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                                        return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this._strip();
                                    }),
                                    (a.prototype.notn = function (e) {
                                        return this.clone().inotn(e);
                                    }),
                                    (a.prototype.setn = function (e, t) {
                                        n("number" == typeof e && e >= 0);
                                        var r = (e / 26) | 0,
                                            i = e % 26;
                                        return this._expand(r + 1), (this.words[r] = t ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)), this._strip();
                                    }),
                                    (a.prototype.iadd = function (e) {
                                        var t, r, n;
                                        if (0 !== this.negative && 0 === e.negative) return (this.negative = 0), (t = this.isub(e)), (this.negative ^= 1), this._normSign();
                                        if (0 === this.negative && 0 !== e.negative) return (e.negative = 0), (t = this.isub(e)), (e.negative = 1), t._normSign();
                                        this.length > e.length ? ((r = this), (n = e)) : ((r = e), (n = this));
                                        for (var i = 0, a = 0; a < n.length; a++) (t = (0 | r.words[a]) + (0 | n.words[a]) + i), (this.words[a] = 67108863 & t), (i = t >>> 26);
                                        for (; 0 !== i && a < r.length; a++) (t = (0 | r.words[a]) + i), (this.words[a] = 67108863 & t), (i = t >>> 26);
                                        if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++;
                                        else if (r !== this) for (; a < r.length; a++) this.words[a] = r.words[a];
                                        return this;
                                    }),
                                    (a.prototype.add = function (e) {
                                        var t;
                                        return 0 !== e.negative && 0 === this.negative
                                            ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                                            : 0 === e.negative && 0 !== this.negative
                                            ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
                                            : this.length > e.length
                                            ? this.clone().iadd(e)
                                            : e.clone().iadd(this);
                                    }),
                                    (a.prototype.isub = function (e) {
                                        if (0 !== e.negative) {
                                            e.negative = 0;
                                            var t = this.iadd(e);
                                            return (e.negative = 1), t._normSign();
                                        }
                                        if (0 !== this.negative) return (this.negative = 0), this.iadd(e), (this.negative = 1), this._normSign();
                                        var r,
                                            n,
                                            i = this.cmp(e);
                                        if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
                                        i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
                                        for (var a = 0, s = 0; s < n.length; s++) (a = (t = (0 | r.words[s]) - (0 | n.words[s]) + a) >> 26), (this.words[s] = 67108863 & t);
                                        for (; 0 !== a && s < r.length; s++) (a = (t = (0 | r.words[s]) + a) >> 26), (this.words[s] = 67108863 & t);
                                        if (0 === a && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                                        return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this._strip();
                                    }),
                                    (a.prototype.sub = function (e) {
                                        return this.clone().isub(e);
                                    });
                                var m = function (e, t, r) {
                                    var n,
                                        i,
                                        a,
                                        s = e.words,
                                        o = t.words,
                                        c = r.words,
                                        u = 0,
                                        l = 0 | s[0],
                                        h = 8191 & l,
                                        d = l >>> 13,
                                        f = 0 | s[1],
                                        p = 8191 & f,
                                        g = f >>> 13,
                                        m = 0 | s[2],
                                        v = 8191 & m,
                                        y = m >>> 13,
                                        w = 0 | s[3],
                                        E = 8191 & w,
                                        S = w >>> 13,
                                        T = 0 | s[4],
                                        _ = 8191 & T,
                                        b = T >>> 13,
                                        P = 0 | s[5],
                                        A = 8191 & P,
                                        x = P >>> 13,
                                        I = 0 | s[6],
                                        k = 8191 & I,
                                        R = I >>> 13,
                                        M = 0 | s[7],
                                        N = 8191 & M,
                                        C = M >>> 13,
                                        O = 0 | s[8],
                                        L = 8191 & O,
                                        D = O >>> 13,
                                        B = 0 | s[9],
                                        F = 8191 & B,
                                        U = B >>> 13,
                                        G = 0 | o[0],
                                        j = 8191 & G,
                                        H = G >>> 13,
                                        K = 0 | o[1],
                                        V = 8191 & K,
                                        q = K >>> 13,
                                        W = 0 | o[2],
                                        z = 8191 & W,
                                        Y = W >>> 13,
                                        $ = 0 | o[3],
                                        J = 8191 & $,
                                        Q = $ >>> 13,
                                        X = 0 | o[4],
                                        Z = 8191 & X,
                                        ee = X >>> 13,
                                        te = 0 | o[5],
                                        re = 8191 & te,
                                        ne = te >>> 13,
                                        ie = 0 | o[6],
                                        ae = 8191 & ie,
                                        se = ie >>> 13,
                                        oe = 0 | o[7],
                                        ce = 8191 & oe,
                                        ue = oe >>> 13,
                                        le = 0 | o[8],
                                        he = 8191 & le,
                                        de = le >>> 13,
                                        fe = 0 | o[9],
                                        pe = 8191 & fe,
                                        ge = fe >>> 13;
                                    (r.negative = e.negative ^ t.negative), (r.length = 19);
                                    var me = (((u + (n = Math.imul(h, j))) | 0) + ((8191 & (i = ((i = Math.imul(h, H)) + Math.imul(d, j)) | 0)) << 13)) | 0;
                                    (u = ((((a = Math.imul(d, H)) + (i >>> 13)) | 0) + (me >>> 26)) | 0), (me &= 67108863), (n = Math.imul(p, j)), (i = ((i = Math.imul(p, H)) + Math.imul(g, j)) | 0), (a = Math.imul(g, H));
                                    var ve = (((u + (n = (n + Math.imul(h, V)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, q)) | 0) + Math.imul(d, V)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, q)) | 0) + (i >>> 13)) | 0) + (ve >>> 26)) | 0),
                                        (ve &= 67108863),
                                        (n = Math.imul(v, j)),
                                        (i = ((i = Math.imul(v, H)) + Math.imul(y, j)) | 0),
                                        (a = Math.imul(y, H)),
                                        (n = (n + Math.imul(p, V)) | 0),
                                        (i = ((i = (i + Math.imul(p, q)) | 0) + Math.imul(g, V)) | 0),
                                        (a = (a + Math.imul(g, q)) | 0);
                                    var ye = (((u + (n = (n + Math.imul(h, z)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, Y)) | 0) + Math.imul(d, z)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, Y)) | 0) + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
                                        (ye &= 67108863),
                                        (n = Math.imul(E, j)),
                                        (i = ((i = Math.imul(E, H)) + Math.imul(S, j)) | 0),
                                        (a = Math.imul(S, H)),
                                        (n = (n + Math.imul(v, V)) | 0),
                                        (i = ((i = (i + Math.imul(v, q)) | 0) + Math.imul(y, V)) | 0),
                                        (a = (a + Math.imul(y, q)) | 0),
                                        (n = (n + Math.imul(p, z)) | 0),
                                        (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(g, z)) | 0),
                                        (a = (a + Math.imul(g, Y)) | 0);
                                    var we = (((u + (n = (n + Math.imul(h, J)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, Q)) | 0) + Math.imul(d, J)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, Q)) | 0) + (i >>> 13)) | 0) + (we >>> 26)) | 0),
                                        (we &= 67108863),
                                        (n = Math.imul(_, j)),
                                        (i = ((i = Math.imul(_, H)) + Math.imul(b, j)) | 0),
                                        (a = Math.imul(b, H)),
                                        (n = (n + Math.imul(E, V)) | 0),
                                        (i = ((i = (i + Math.imul(E, q)) | 0) + Math.imul(S, V)) | 0),
                                        (a = (a + Math.imul(S, q)) | 0),
                                        (n = (n + Math.imul(v, z)) | 0),
                                        (i = ((i = (i + Math.imul(v, Y)) | 0) + Math.imul(y, z)) | 0),
                                        (a = (a + Math.imul(y, Y)) | 0),
                                        (n = (n + Math.imul(p, J)) | 0),
                                        (i = ((i = (i + Math.imul(p, Q)) | 0) + Math.imul(g, J)) | 0),
                                        (a = (a + Math.imul(g, Q)) | 0);
                                    var Ee = (((u + (n = (n + Math.imul(h, Z)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ee)) | 0) + Math.imul(d, Z)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, ee)) | 0) + (i >>> 13)) | 0) + (Ee >>> 26)) | 0),
                                        (Ee &= 67108863),
                                        (n = Math.imul(A, j)),
                                        (i = ((i = Math.imul(A, H)) + Math.imul(x, j)) | 0),
                                        (a = Math.imul(x, H)),
                                        (n = (n + Math.imul(_, V)) | 0),
                                        (i = ((i = (i + Math.imul(_, q)) | 0) + Math.imul(b, V)) | 0),
                                        (a = (a + Math.imul(b, q)) | 0),
                                        (n = (n + Math.imul(E, z)) | 0),
                                        (i = ((i = (i + Math.imul(E, Y)) | 0) + Math.imul(S, z)) | 0),
                                        (a = (a + Math.imul(S, Y)) | 0),
                                        (n = (n + Math.imul(v, J)) | 0),
                                        (i = ((i = (i + Math.imul(v, Q)) | 0) + Math.imul(y, J)) | 0),
                                        (a = (a + Math.imul(y, Q)) | 0),
                                        (n = (n + Math.imul(p, Z)) | 0),
                                        (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(g, Z)) | 0),
                                        (a = (a + Math.imul(g, ee)) | 0);
                                    var Se = (((u + (n = (n + Math.imul(h, re)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ne)) | 0) + Math.imul(d, re)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, ne)) | 0) + (i >>> 13)) | 0) + (Se >>> 26)) | 0),
                                        (Se &= 67108863),
                                        (n = Math.imul(k, j)),
                                        (i = ((i = Math.imul(k, H)) + Math.imul(R, j)) | 0),
                                        (a = Math.imul(R, H)),
                                        (n = (n + Math.imul(A, V)) | 0),
                                        (i = ((i = (i + Math.imul(A, q)) | 0) + Math.imul(x, V)) | 0),
                                        (a = (a + Math.imul(x, q)) | 0),
                                        (n = (n + Math.imul(_, z)) | 0),
                                        (i = ((i = (i + Math.imul(_, Y)) | 0) + Math.imul(b, z)) | 0),
                                        (a = (a + Math.imul(b, Y)) | 0),
                                        (n = (n + Math.imul(E, J)) | 0),
                                        (i = ((i = (i + Math.imul(E, Q)) | 0) + Math.imul(S, J)) | 0),
                                        (a = (a + Math.imul(S, Q)) | 0),
                                        (n = (n + Math.imul(v, Z)) | 0),
                                        (i = ((i = (i + Math.imul(v, ee)) | 0) + Math.imul(y, Z)) | 0),
                                        (a = (a + Math.imul(y, ee)) | 0),
                                        (n = (n + Math.imul(p, re)) | 0),
                                        (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(g, re)) | 0),
                                        (a = (a + Math.imul(g, ne)) | 0);
                                    var Te = (((u + (n = (n + Math.imul(h, ae)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, se)) | 0) + Math.imul(d, ae)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, se)) | 0) + (i >>> 13)) | 0) + (Te >>> 26)) | 0),
                                        (Te &= 67108863),
                                        (n = Math.imul(N, j)),
                                        (i = ((i = Math.imul(N, H)) + Math.imul(C, j)) | 0),
                                        (a = Math.imul(C, H)),
                                        (n = (n + Math.imul(k, V)) | 0),
                                        (i = ((i = (i + Math.imul(k, q)) | 0) + Math.imul(R, V)) | 0),
                                        (a = (a + Math.imul(R, q)) | 0),
                                        (n = (n + Math.imul(A, z)) | 0),
                                        (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(x, z)) | 0),
                                        (a = (a + Math.imul(x, Y)) | 0),
                                        (n = (n + Math.imul(_, J)) | 0),
                                        (i = ((i = (i + Math.imul(_, Q)) | 0) + Math.imul(b, J)) | 0),
                                        (a = (a + Math.imul(b, Q)) | 0),
                                        (n = (n + Math.imul(E, Z)) | 0),
                                        (i = ((i = (i + Math.imul(E, ee)) | 0) + Math.imul(S, Z)) | 0),
                                        (a = (a + Math.imul(S, ee)) | 0),
                                        (n = (n + Math.imul(v, re)) | 0),
                                        (i = ((i = (i + Math.imul(v, ne)) | 0) + Math.imul(y, re)) | 0),
                                        (a = (a + Math.imul(y, ne)) | 0),
                                        (n = (n + Math.imul(p, ae)) | 0),
                                        (i = ((i = (i + Math.imul(p, se)) | 0) + Math.imul(g, ae)) | 0),
                                        (a = (a + Math.imul(g, se)) | 0);
                                    var _e = (((u + (n = (n + Math.imul(h, ce)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ue)) | 0) + Math.imul(d, ce)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, ue)) | 0) + (i >>> 13)) | 0) + (_e >>> 26)) | 0),
                                        (_e &= 67108863),
                                        (n = Math.imul(L, j)),
                                        (i = ((i = Math.imul(L, H)) + Math.imul(D, j)) | 0),
                                        (a = Math.imul(D, H)),
                                        (n = (n + Math.imul(N, V)) | 0),
                                        (i = ((i = (i + Math.imul(N, q)) | 0) + Math.imul(C, V)) | 0),
                                        (a = (a + Math.imul(C, q)) | 0),
                                        (n = (n + Math.imul(k, z)) | 0),
                                        (i = ((i = (i + Math.imul(k, Y)) | 0) + Math.imul(R, z)) | 0),
                                        (a = (a + Math.imul(R, Y)) | 0),
                                        (n = (n + Math.imul(A, J)) | 0),
                                        (i = ((i = (i + Math.imul(A, Q)) | 0) + Math.imul(x, J)) | 0),
                                        (a = (a + Math.imul(x, Q)) | 0),
                                        (n = (n + Math.imul(_, Z)) | 0),
                                        (i = ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(b, Z)) | 0),
                                        (a = (a + Math.imul(b, ee)) | 0),
                                        (n = (n + Math.imul(E, re)) | 0),
                                        (i = ((i = (i + Math.imul(E, ne)) | 0) + Math.imul(S, re)) | 0),
                                        (a = (a + Math.imul(S, ne)) | 0),
                                        (n = (n + Math.imul(v, ae)) | 0),
                                        (i = ((i = (i + Math.imul(v, se)) | 0) + Math.imul(y, ae)) | 0),
                                        (a = (a + Math.imul(y, se)) | 0),
                                        (n = (n + Math.imul(p, ce)) | 0),
                                        (i = ((i = (i + Math.imul(p, ue)) | 0) + Math.imul(g, ce)) | 0),
                                        (a = (a + Math.imul(g, ue)) | 0);
                                    var be = (((u + (n = (n + Math.imul(h, he)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, de)) | 0) + Math.imul(d, he)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, de)) | 0) + (i >>> 13)) | 0) + (be >>> 26)) | 0),
                                        (be &= 67108863),
                                        (n = Math.imul(F, j)),
                                        (i = ((i = Math.imul(F, H)) + Math.imul(U, j)) | 0),
                                        (a = Math.imul(U, H)),
                                        (n = (n + Math.imul(L, V)) | 0),
                                        (i = ((i = (i + Math.imul(L, q)) | 0) + Math.imul(D, V)) | 0),
                                        (a = (a + Math.imul(D, q)) | 0),
                                        (n = (n + Math.imul(N, z)) | 0),
                                        (i = ((i = (i + Math.imul(N, Y)) | 0) + Math.imul(C, z)) | 0),
                                        (a = (a + Math.imul(C, Y)) | 0),
                                        (n = (n + Math.imul(k, J)) | 0),
                                        (i = ((i = (i + Math.imul(k, Q)) | 0) + Math.imul(R, J)) | 0),
                                        (a = (a + Math.imul(R, Q)) | 0),
                                        (n = (n + Math.imul(A, Z)) | 0),
                                        (i = ((i = (i + Math.imul(A, ee)) | 0) + Math.imul(x, Z)) | 0),
                                        (a = (a + Math.imul(x, ee)) | 0),
                                        (n = (n + Math.imul(_, re)) | 0),
                                        (i = ((i = (i + Math.imul(_, ne)) | 0) + Math.imul(b, re)) | 0),
                                        (a = (a + Math.imul(b, ne)) | 0),
                                        (n = (n + Math.imul(E, ae)) | 0),
                                        (i = ((i = (i + Math.imul(E, se)) | 0) + Math.imul(S, ae)) | 0),
                                        (a = (a + Math.imul(S, se)) | 0),
                                        (n = (n + Math.imul(v, ce)) | 0),
                                        (i = ((i = (i + Math.imul(v, ue)) | 0) + Math.imul(y, ce)) | 0),
                                        (a = (a + Math.imul(y, ue)) | 0),
                                        (n = (n + Math.imul(p, he)) | 0),
                                        (i = ((i = (i + Math.imul(p, de)) | 0) + Math.imul(g, he)) | 0),
                                        (a = (a + Math.imul(g, de)) | 0);
                                    var Pe = (((u + (n = (n + Math.imul(h, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ge)) | 0) + Math.imul(d, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(d, ge)) | 0) + (i >>> 13)) | 0) + (Pe >>> 26)) | 0),
                                        (Pe &= 67108863),
                                        (n = Math.imul(F, V)),
                                        (i = ((i = Math.imul(F, q)) + Math.imul(U, V)) | 0),
                                        (a = Math.imul(U, q)),
                                        (n = (n + Math.imul(L, z)) | 0),
                                        (i = ((i = (i + Math.imul(L, Y)) | 0) + Math.imul(D, z)) | 0),
                                        (a = (a + Math.imul(D, Y)) | 0),
                                        (n = (n + Math.imul(N, J)) | 0),
                                        (i = ((i = (i + Math.imul(N, Q)) | 0) + Math.imul(C, J)) | 0),
                                        (a = (a + Math.imul(C, Q)) | 0),
                                        (n = (n + Math.imul(k, Z)) | 0),
                                        (i = ((i = (i + Math.imul(k, ee)) | 0) + Math.imul(R, Z)) | 0),
                                        (a = (a + Math.imul(R, ee)) | 0),
                                        (n = (n + Math.imul(A, re)) | 0),
                                        (i = ((i = (i + Math.imul(A, ne)) | 0) + Math.imul(x, re)) | 0),
                                        (a = (a + Math.imul(x, ne)) | 0),
                                        (n = (n + Math.imul(_, ae)) | 0),
                                        (i = ((i = (i + Math.imul(_, se)) | 0) + Math.imul(b, ae)) | 0),
                                        (a = (a + Math.imul(b, se)) | 0),
                                        (n = (n + Math.imul(E, ce)) | 0),
                                        (i = ((i = (i + Math.imul(E, ue)) | 0) + Math.imul(S, ce)) | 0),
                                        (a = (a + Math.imul(S, ue)) | 0),
                                        (n = (n + Math.imul(v, he)) | 0),
                                        (i = ((i = (i + Math.imul(v, de)) | 0) + Math.imul(y, he)) | 0),
                                        (a = (a + Math.imul(y, de)) | 0);
                                    var Ae = (((u + (n = (n + Math.imul(p, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(p, ge)) | 0) + Math.imul(g, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(g, ge)) | 0) + (i >>> 13)) | 0) + (Ae >>> 26)) | 0),
                                        (Ae &= 67108863),
                                        (n = Math.imul(F, z)),
                                        (i = ((i = Math.imul(F, Y)) + Math.imul(U, z)) | 0),
                                        (a = Math.imul(U, Y)),
                                        (n = (n + Math.imul(L, J)) | 0),
                                        (i = ((i = (i + Math.imul(L, Q)) | 0) + Math.imul(D, J)) | 0),
                                        (a = (a + Math.imul(D, Q)) | 0),
                                        (n = (n + Math.imul(N, Z)) | 0),
                                        (i = ((i = (i + Math.imul(N, ee)) | 0) + Math.imul(C, Z)) | 0),
                                        (a = (a + Math.imul(C, ee)) | 0),
                                        (n = (n + Math.imul(k, re)) | 0),
                                        (i = ((i = (i + Math.imul(k, ne)) | 0) + Math.imul(R, re)) | 0),
                                        (a = (a + Math.imul(R, ne)) | 0),
                                        (n = (n + Math.imul(A, ae)) | 0),
                                        (i = ((i = (i + Math.imul(A, se)) | 0) + Math.imul(x, ae)) | 0),
                                        (a = (a + Math.imul(x, se)) | 0),
                                        (n = (n + Math.imul(_, ce)) | 0),
                                        (i = ((i = (i + Math.imul(_, ue)) | 0) + Math.imul(b, ce)) | 0),
                                        (a = (a + Math.imul(b, ue)) | 0),
                                        (n = (n + Math.imul(E, he)) | 0),
                                        (i = ((i = (i + Math.imul(E, de)) | 0) + Math.imul(S, he)) | 0),
                                        (a = (a + Math.imul(S, de)) | 0);
                                    var xe = (((u + (n = (n + Math.imul(v, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(v, ge)) | 0) + Math.imul(y, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(y, ge)) | 0) + (i >>> 13)) | 0) + (xe >>> 26)) | 0),
                                        (xe &= 67108863),
                                        (n = Math.imul(F, J)),
                                        (i = ((i = Math.imul(F, Q)) + Math.imul(U, J)) | 0),
                                        (a = Math.imul(U, Q)),
                                        (n = (n + Math.imul(L, Z)) | 0),
                                        (i = ((i = (i + Math.imul(L, ee)) | 0) + Math.imul(D, Z)) | 0),
                                        (a = (a + Math.imul(D, ee)) | 0),
                                        (n = (n + Math.imul(N, re)) | 0),
                                        (i = ((i = (i + Math.imul(N, ne)) | 0) + Math.imul(C, re)) | 0),
                                        (a = (a + Math.imul(C, ne)) | 0),
                                        (n = (n + Math.imul(k, ae)) | 0),
                                        (i = ((i = (i + Math.imul(k, se)) | 0) + Math.imul(R, ae)) | 0),
                                        (a = (a + Math.imul(R, se)) | 0),
                                        (n = (n + Math.imul(A, ce)) | 0),
                                        (i = ((i = (i + Math.imul(A, ue)) | 0) + Math.imul(x, ce)) | 0),
                                        (a = (a + Math.imul(x, ue)) | 0),
                                        (n = (n + Math.imul(_, he)) | 0),
                                        (i = ((i = (i + Math.imul(_, de)) | 0) + Math.imul(b, he)) | 0),
                                        (a = (a + Math.imul(b, de)) | 0);
                                    var Ie = (((u + (n = (n + Math.imul(E, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(E, ge)) | 0) + Math.imul(S, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(S, ge)) | 0) + (i >>> 13)) | 0) + (Ie >>> 26)) | 0),
                                        (Ie &= 67108863),
                                        (n = Math.imul(F, Z)),
                                        (i = ((i = Math.imul(F, ee)) + Math.imul(U, Z)) | 0),
                                        (a = Math.imul(U, ee)),
                                        (n = (n + Math.imul(L, re)) | 0),
                                        (i = ((i = (i + Math.imul(L, ne)) | 0) + Math.imul(D, re)) | 0),
                                        (a = (a + Math.imul(D, ne)) | 0),
                                        (n = (n + Math.imul(N, ae)) | 0),
                                        (i = ((i = (i + Math.imul(N, se)) | 0) + Math.imul(C, ae)) | 0),
                                        (a = (a + Math.imul(C, se)) | 0),
                                        (n = (n + Math.imul(k, ce)) | 0),
                                        (i = ((i = (i + Math.imul(k, ue)) | 0) + Math.imul(R, ce)) | 0),
                                        (a = (a + Math.imul(R, ue)) | 0),
                                        (n = (n + Math.imul(A, he)) | 0),
                                        (i = ((i = (i + Math.imul(A, de)) | 0) + Math.imul(x, he)) | 0),
                                        (a = (a + Math.imul(x, de)) | 0);
                                    var ke = (((u + (n = (n + Math.imul(_, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(_, ge)) | 0) + Math.imul(b, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(b, ge)) | 0) + (i >>> 13)) | 0) + (ke >>> 26)) | 0),
                                        (ke &= 67108863),
                                        (n = Math.imul(F, re)),
                                        (i = ((i = Math.imul(F, ne)) + Math.imul(U, re)) | 0),
                                        (a = Math.imul(U, ne)),
                                        (n = (n + Math.imul(L, ae)) | 0),
                                        (i = ((i = (i + Math.imul(L, se)) | 0) + Math.imul(D, ae)) | 0),
                                        (a = (a + Math.imul(D, se)) | 0),
                                        (n = (n + Math.imul(N, ce)) | 0),
                                        (i = ((i = (i + Math.imul(N, ue)) | 0) + Math.imul(C, ce)) | 0),
                                        (a = (a + Math.imul(C, ue)) | 0),
                                        (n = (n + Math.imul(k, he)) | 0),
                                        (i = ((i = (i + Math.imul(k, de)) | 0) + Math.imul(R, he)) | 0),
                                        (a = (a + Math.imul(R, de)) | 0);
                                    var Re = (((u + (n = (n + Math.imul(A, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(A, ge)) | 0) + Math.imul(x, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(x, ge)) | 0) + (i >>> 13)) | 0) + (Re >>> 26)) | 0),
                                        (Re &= 67108863),
                                        (n = Math.imul(F, ae)),
                                        (i = ((i = Math.imul(F, se)) + Math.imul(U, ae)) | 0),
                                        (a = Math.imul(U, se)),
                                        (n = (n + Math.imul(L, ce)) | 0),
                                        (i = ((i = (i + Math.imul(L, ue)) | 0) + Math.imul(D, ce)) | 0),
                                        (a = (a + Math.imul(D, ue)) | 0),
                                        (n = (n + Math.imul(N, he)) | 0),
                                        (i = ((i = (i + Math.imul(N, de)) | 0) + Math.imul(C, he)) | 0),
                                        (a = (a + Math.imul(C, de)) | 0);
                                    var Me = (((u + (n = (n + Math.imul(k, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(k, ge)) | 0) + Math.imul(R, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(R, ge)) | 0) + (i >>> 13)) | 0) + (Me >>> 26)) | 0),
                                        (Me &= 67108863),
                                        (n = Math.imul(F, ce)),
                                        (i = ((i = Math.imul(F, ue)) + Math.imul(U, ce)) | 0),
                                        (a = Math.imul(U, ue)),
                                        (n = (n + Math.imul(L, he)) | 0),
                                        (i = ((i = (i + Math.imul(L, de)) | 0) + Math.imul(D, he)) | 0),
                                        (a = (a + Math.imul(D, de)) | 0);
                                    var Ne = (((u + (n = (n + Math.imul(N, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(N, ge)) | 0) + Math.imul(C, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(C, ge)) | 0) + (i >>> 13)) | 0) + (Ne >>> 26)) | 0), (Ne &= 67108863), (n = Math.imul(F, he)), (i = ((i = Math.imul(F, de)) + Math.imul(U, he)) | 0), (a = Math.imul(U, de));
                                    var Ce = (((u + (n = (n + Math.imul(L, pe)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(L, ge)) | 0) + Math.imul(D, pe)) | 0)) << 13)) | 0;
                                    (u = ((((a = (a + Math.imul(D, ge)) | 0) + (i >>> 13)) | 0) + (Ce >>> 26)) | 0), (Ce &= 67108863);
                                    var Oe = (((u + (n = Math.imul(F, pe))) | 0) + ((8191 & (i = ((i = Math.imul(F, ge)) + Math.imul(U, pe)) | 0)) << 13)) | 0;
                                    return (
                                        (u = ((((a = Math.imul(U, ge)) + (i >>> 13)) | 0) + (Oe >>> 26)) | 0),
                                        (Oe &= 67108863),
                                        (c[0] = me),
                                        (c[1] = ve),
                                        (c[2] = ye),
                                        (c[3] = we),
                                        (c[4] = Ee),
                                        (c[5] = Se),
                                        (c[6] = Te),
                                        (c[7] = _e),
                                        (c[8] = be),
                                        (c[9] = Pe),
                                        (c[10] = Ae),
                                        (c[11] = xe),
                                        (c[12] = Ie),
                                        (c[13] = ke),
                                        (c[14] = Re),
                                        (c[15] = Me),
                                        (c[16] = Ne),
                                        (c[17] = Ce),
                                        (c[18] = Oe),
                                        0 !== u && ((c[19] = u), r.length++),
                                        r
                                    );
                                };
                                function v(e, t, r) {
                                    (r.negative = t.negative ^ e.negative), (r.length = e.length + t.length);
                                    for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                                        var s = i;
                                        i = 0;
                                        for (var o = 67108863 & n, c = Math.min(a, t.length - 1), u = Math.max(0, a - e.length + 1); u <= c; u++) {
                                            var l = a - u,
                                                h = (0 | e.words[l]) * (0 | t.words[u]),
                                                d = 67108863 & h;
                                            (o = 67108863 & (d = (d + o) | 0)), (i += (s = ((s = (s + ((h / 67108864) | 0)) | 0) + (d >>> 26)) | 0) >>> 26), (s &= 67108863);
                                        }
                                        (r.words[a] = o), (n = s), (s = i);
                                    }
                                    return 0 !== n ? (r.words[a] = n) : r.length--, r._strip();
                                }
                                function y(e, t, r) {
                                    return v(e, t, r);
                                }
                                function w(e, t) {
                                    (this.x = e), (this.y = t);
                                }
                                Math.imul || (m = g),
                                    (a.prototype.mulTo = function (e, t) {
                                        var r = this.length + e.length;
                                        return 10 === this.length && 10 === e.length ? m(this, e, t) : r < 63 ? g(this, e, t) : r < 1024 ? v(this, e, t) : y(this, e, t);
                                    }),
                                    (w.prototype.makeRBT = function (e) {
                                        for (var t = new Array(e), r = a.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                                        return t;
                                    }),
                                    (w.prototype.revBin = function (e, t, r) {
                                        if (0 === e || e === r - 1) return e;
                                        for (var n = 0, i = 0; i < t; i++) (n |= (1 & e) << (t - i - 1)), (e >>= 1);
                                        return n;
                                    }),
                                    (w.prototype.permute = function (e, t, r, n, i, a) {
                                        for (var s = 0; s < a; s++) (n[s] = t[e[s]]), (i[s] = r[e[s]]);
                                    }),
                                    (w.prototype.transform = function (e, t, r, n, i, a) {
                                        this.permute(a, e, t, r, n, i);
                                        for (var s = 1; s < i; s <<= 1)
                                            for (var o = s << 1, c = Math.cos((2 * Math.PI) / o), u = Math.sin((2 * Math.PI) / o), l = 0; l < i; l += o)
                                                for (var h = c, d = u, f = 0; f < s; f++) {
                                                    var p = r[l + f],
                                                        g = n[l + f],
                                                        m = r[l + f + s],
                                                        v = n[l + f + s],
                                                        y = h * m - d * v;
                                                    (v = h * v + d * m), (m = y), (r[l + f] = p + m), (n[l + f] = g + v), (r[l + f + s] = p - m), (n[l + f + s] = g - v), f !== o && ((y = c * h - u * d), (d = c * d + u * h), (h = y));
                                                }
                                    }),
                                    (w.prototype.guessLen13b = function (e, t) {
                                        var r = 1 | Math.max(t, e),
                                            n = 1 & r,
                                            i = 0;
                                        for (r = (r / 2) | 0; r; r >>>= 1) i++;
                                        return 1 << (i + 1 + n);
                                    }),
                                    (w.prototype.conjugate = function (e, t, r) {
                                        if (!(r <= 1))
                                            for (var n = 0; n < r / 2; n++) {
                                                var i = e[n];
                                                (e[n] = e[r - n - 1]), (e[r - n - 1] = i), (i = t[n]), (t[n] = -t[r - n - 1]), (t[r - n - 1] = -i);
                                            }
                                    }),
                                    (w.prototype.normalize13b = function (e, t) {
                                        for (var r = 0, n = 0; n < t / 2; n++) {
                                            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                                            (e[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0);
                                        }
                                        return e;
                                    }),
                                    (w.prototype.convert13b = function (e, t, r, i) {
                                        for (var a = 0, s = 0; s < t; s++) (a += 0 | e[s]), (r[2 * s] = 8191 & a), (a >>>= 13), (r[2 * s + 1] = 8191 & a), (a >>>= 13);
                                        for (s = 2 * t; s < i; ++s) r[s] = 0;
                                        n(0 === a), n(0 == (-8192 & a));
                                    }),
                                    (w.prototype.stub = function (e) {
                                        for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                                        return t;
                                    }),
                                    (w.prototype.mulp = function (e, t, r) {
                                        var n = 2 * this.guessLen13b(e.length, t.length),
                                            i = this.makeRBT(n),
                                            a = this.stub(n),
                                            s = new Array(n),
                                            o = new Array(n),
                                            c = new Array(n),
                                            u = new Array(n),
                                            l = new Array(n),
                                            h = new Array(n),
                                            d = r.words;
                                        (d.length = n), this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, u, n), this.transform(s, a, o, c, n, i), this.transform(u, a, l, h, n, i);
                                        for (var f = 0; f < n; f++) {
                                            var p = o[f] * l[f] - c[f] * h[f];
                                            (c[f] = o[f] * h[f] + c[f] * l[f]), (o[f] = p);
                                        }
                                        return (
                                            this.conjugate(o, c, n), this.transform(o, c, d, a, n, i), this.conjugate(d, a, n), this.normalize13b(d, n), (r.negative = e.negative ^ t.negative), (r.length = e.length + t.length), r._strip()
                                        );
                                    }),
                                    (a.prototype.mul = function (e) {
                                        var t = new a(null);
                                        return (t.words = new Array(this.length + e.length)), this.mulTo(e, t);
                                    }),
                                    (a.prototype.mulf = function (e) {
                                        var t = new a(null);
                                        return (t.words = new Array(this.length + e.length)), y(this, e, t);
                                    }),
                                    (a.prototype.imul = function (e) {
                                        return this.clone().mulTo(e, this);
                                    }),
                                    (a.prototype.imuln = function (e) {
                                        var t = e < 0;
                                        t && (e = -e), n("number" == typeof e), n(e < 67108864);
                                        for (var r = 0, i = 0; i < this.length; i++) {
                                            var a = (0 | this.words[i]) * e,
                                                s = (67108863 & a) + (67108863 & r);
                                            (r >>= 26), (r += (a / 67108864) | 0), (r += s >>> 26), (this.words[i] = 67108863 & s);
                                        }
                                        return 0 !== r && ((this.words[i] = r), this.length++), t ? this.ineg() : this;
                                    }),
                                    (a.prototype.muln = function (e) {
                                        return this.clone().imuln(e);
                                    }),
                                    (a.prototype.sqr = function () {
                                        return this.mul(this);
                                    }),
                                    (a.prototype.isqr = function () {
                                        return this.imul(this.clone());
                                    }),
                                    (a.prototype.pow = function (e) {
                                        var t = (function (e) {
                                            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                                                var n = (r / 26) | 0,
                                                    i = r % 26;
                                                t[r] = (e.words[n] >>> i) & 1;
                                            }
                                            return t;
                                        })(e);
                                        if (0 === t.length) return new a(1);
                                        for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                                        if (++n < t.length) for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                                        return r;
                                    }),
                                    (a.prototype.iushln = function (e) {
                                        n("number" == typeof e && e >= 0);
                                        var t,
                                            r = e % 26,
                                            i = (e - r) / 26,
                                            a = (67108863 >>> (26 - r)) << (26 - r);
                                        if (0 !== r) {
                                            var s = 0;
                                            for (t = 0; t < this.length; t++) {
                                                var o = this.words[t] & a,
                                                    c = ((0 | this.words[t]) - o) << r;
                                                (this.words[t] = c | s), (s = o >>> (26 - r));
                                            }
                                            s && ((this.words[t] = s), this.length++);
                                        }
                                        if (0 !== i) {
                                            for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                                            for (t = 0; t < i; t++) this.words[t] = 0;
                                            this.length += i;
                                        }
                                        return this._strip();
                                    }),
                                    (a.prototype.ishln = function (e) {
                                        return n(0 === this.negative), this.iushln(e);
                                    }),
                                    (a.prototype.iushrn = function (e, t, r) {
                                        var i;
                                        n("number" == typeof e && e >= 0), (i = t ? (t - (t % 26)) / 26 : 0);
                                        var a = e % 26,
                                            s = Math.min((e - a) / 26, this.length),
                                            o = 67108863 ^ ((67108863 >>> a) << a),
                                            c = r;
                                        if (((i -= s), (i = Math.max(0, i)), c)) {
                                            for (var u = 0; u < s; u++) c.words[u] = this.words[u];
                                            c.length = s;
                                        }
                                        if (0 === s);
                                        else if (this.length > s) for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                                        else (this.words[0] = 0), (this.length = 1);
                                        var l = 0;
                                        for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
                                            var h = 0 | this.words[u];
                                            (this.words[u] = (l << (26 - a)) | (h >>> a)), (l = h & o);
                                        }
                                        return c && 0 !== l && (c.words[c.length++] = l), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this._strip();
                                    }),
                                    (a.prototype.ishrn = function (e, t, r) {
                                        return n(0 === this.negative), this.iushrn(e, t, r);
                                    }),
                                    (a.prototype.shln = function (e) {
                                        return this.clone().ishln(e);
                                    }),
                                    (a.prototype.ushln = function (e) {
                                        return this.clone().iushln(e);
                                    }),
                                    (a.prototype.shrn = function (e) {
                                        return this.clone().ishrn(e);
                                    }),
                                    (a.prototype.ushrn = function (e) {
                                        return this.clone().iushrn(e);
                                    }),
                                    (a.prototype.testn = function (e) {
                                        n("number" == typeof e && e >= 0);
                                        var t = e % 26,
                                            r = (e - t) / 26,
                                            i = 1 << t;
                                        return !(this.length <= r) && !!(this.words[r] & i);
                                    }),
                                    (a.prototype.imaskn = function (e) {
                                        n("number" == typeof e && e >= 0);
                                        var t = e % 26,
                                            r = (e - t) / 26;
                                        if ((n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)) return this;
                                        if ((0 !== t && r++, (this.length = Math.min(r, this.length)), 0 !== t)) {
                                            var i = 67108863 ^ ((67108863 >>> t) << t);
                                            this.words[this.length - 1] &= i;
                                        }
                                        return this._strip();
                                    }),
                                    (a.prototype.maskn = function (e) {
                                        return this.clone().imaskn(e);
                                    }),
                                    (a.prototype.iaddn = function (e) {
                                        return (
                                            n("number" == typeof e),
                                            n(e < 67108864),
                                            e < 0
                                                ? this.isubn(-e)
                                                : 0 !== this.negative
                                                ? 1 === this.length && (0 | this.words[0]) <= e
                                                    ? ((this.words[0] = e - (0 | this.words[0])), (this.negative = 0), this)
                                                    : ((this.negative = 0), this.isubn(e), (this.negative = 1), this)
                                                : this._iaddn(e)
                                        );
                                    }),
                                    (a.prototype._iaddn = function (e) {
                                        this.words[0] += e;
                                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) (this.words[t] -= 67108864), t === this.length - 1 ? (this.words[t + 1] = 1) : this.words[t + 1]++;
                                        return (this.length = Math.max(this.length, t + 1)), this;
                                    }),
                                    (a.prototype.isubn = function (e) {
                                        if ((n("number" == typeof e), n(e < 67108864), e < 0)) return this.iaddn(-e);
                                        if (0 !== this.negative) return (this.negative = 0), this.iaddn(e), (this.negative = 1), this;
                                        if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
                                        else for (var t = 0; t < this.length && this.words[t] < 0; t++) (this.words[t] += 67108864), (this.words[t + 1] -= 1);
                                        return this._strip();
                                    }),
                                    (a.prototype.addn = function (e) {
                                        return this.clone().iaddn(e);
                                    }),
                                    (a.prototype.subn = function (e) {
                                        return this.clone().isubn(e);
                                    }),
                                    (a.prototype.iabs = function () {
                                        return (this.negative = 0), this;
                                    }),
                                    (a.prototype.abs = function () {
                                        return this.clone().iabs();
                                    }),
                                    (a.prototype._ishlnsubmul = function (e, t, r) {
                                        var i,
                                            a,
                                            s = e.length + r;
                                        this._expand(s);
                                        var o = 0;
                                        for (i = 0; i < e.length; i++) {
                                            a = (0 | this.words[i + r]) + o;
                                            var c = (0 | e.words[i]) * t;
                                            (o = ((a -= 67108863 & c) >> 26) - ((c / 67108864) | 0)), (this.words[i + r] = 67108863 & a);
                                        }
                                        for (; i < this.length - r; i++) (o = (a = (0 | this.words[i + r]) + o) >> 26), (this.words[i + r] = 67108863 & a);
                                        if (0 === o) return this._strip();
                                        for (n(-1 === o), o = 0, i = 0; i < this.length; i++) (o = (a = -(0 | this.words[i]) + o) >> 26), (this.words[i] = 67108863 & a);
                                        return (this.negative = 1), this._strip();
                                    }),
                                    (a.prototype._wordDiv = function (e, t) {
                                        var r = (this.length, e.length),
                                            n = this.clone(),
                                            i = e,
                                            s = 0 | i.words[i.length - 1];
                                        0 !== (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
                                        var o,
                                            c = n.length - i.length;
                                        if ("mod" !== t) {
                                            ((o = new a(null)).length = c + 1), (o.words = new Array(o.length));
                                            for (var u = 0; u < o.length; u++) o.words[u] = 0;
                                        }
                                        var l = n.clone()._ishlnsubmul(i, 1, c);
                                        0 === l.negative && ((n = l), o && (o.words[c] = 1));
                                        for (var h = c - 1; h >= 0; h--) {
                                            var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                                            for (d = Math.min((d / s) | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative; ) d--, (n.negative = 0), n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                                            o && (o.words[h] = d);
                                        }
                                        return o && o._strip(), n._strip(), "div" !== t && 0 !== r && n.iushrn(r), { div: o || null, mod: n };
                                    }),
                                    (a.prototype.divmod = function (e, t, r) {
                                        return (
                                            n(!e.isZero()),
                                            this.isZero()
                                                ? { div: new a(0), mod: new a(0) }
                                                : 0 !== this.negative && 0 === e.negative
                                                ? ((o = this.neg().divmod(e, t)), "mod" !== t && (i = o.div.neg()), "div" !== t && ((s = o.mod.neg()), r && 0 !== s.negative && s.iadd(e)), { div: i, mod: s })
                                                : 0 === this.negative && 0 !== e.negative
                                                ? ((o = this.divmod(e.neg(), t)), "mod" !== t && (i = o.div.neg()), { div: i, mod: o.mod })
                                                : 0 != (this.negative & e.negative)
                                                ? ((o = this.neg().divmod(e.neg(), t)), "div" !== t && ((s = o.mod.neg()), r && 0 !== s.negative && s.isub(e)), { div: o.div, mod: s })
                                                : e.length > this.length || this.cmp(e) < 0
                                                ? { div: new a(0), mod: this }
                                                : 1 === e.length
                                                ? "div" === t
                                                    ? { div: this.divn(e.words[0]), mod: null }
                                                    : "mod" === t
                                                    ? { div: null, mod: new a(this.modrn(e.words[0])) }
                                                    : { div: this.divn(e.words[0]), mod: new a(this.modrn(e.words[0])) }
                                                : this._wordDiv(e, t)
                                        );
                                        var i, s, o;
                                    }),
                                    (a.prototype.div = function (e) {
                                        return this.divmod(e, "div", !1).div;
                                    }),
                                    (a.prototype.mod = function (e) {
                                        return this.divmod(e, "mod", !1).mod;
                                    }),
                                    (a.prototype.umod = function (e) {
                                        return this.divmod(e, "mod", !0).mod;
                                    }),
                                    (a.prototype.divRound = function (e) {
                                        var t = this.divmod(e);
                                        if (t.mod.isZero()) return t.div;
                                        var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                                            n = e.ushrn(1),
                                            i = e.andln(1),
                                            a = r.cmp(n);
                                        return a < 0 || (1 === i && 0 === a) ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
                                    }),
                                    (a.prototype.modrn = function (e) {
                                        var t = e < 0;
                                        t && (e = -e), n(e <= 67108863);
                                        for (var r = (1 << 26) % e, i = 0, a = this.length - 1; a >= 0; a--) i = (r * i + (0 | this.words[a])) % e;
                                        return t ? -i : i;
                                    }),
                                    (a.prototype.modn = function (e) {
                                        return this.modrn(e);
                                    }),
                                    (a.prototype.idivn = function (e) {
                                        var t = e < 0;
                                        t && (e = -e), n(e <= 67108863);
                                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                                            var a = (0 | this.words[i]) + 67108864 * r;
                                            (this.words[i] = (a / e) | 0), (r = a % e);
                                        }
                                        return this._strip(), t ? this.ineg() : this;
                                    }),
                                    (a.prototype.divn = function (e) {
                                        return this.clone().idivn(e);
                                    }),
                                    (a.prototype.egcd = function (e) {
                                        n(0 === e.negative), n(!e.isZero());
                                        var t = this,
                                            r = e.clone();
                                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                                        for (var i = new a(1), s = new a(0), o = new a(0), c = new a(1), u = 0; t.isEven() && r.isEven(); ) t.iushrn(1), r.iushrn(1), ++u;
                                        for (var l = r.clone(), h = t.clone(); !t.isZero(); ) {
                                            for (var d = 0, f = 1; 0 == (t.words[0] & f) && d < 26; ++d, f <<= 1);
                                            if (d > 0) for (t.iushrn(d); d-- > 0; ) (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)), i.iushrn(1), s.iushrn(1);
                                            for (var p = 0, g = 1; 0 == (r.words[0] & g) && p < 26; ++p, g <<= 1);
                                            if (p > 0) for (r.iushrn(p); p-- > 0; ) (o.isOdd() || c.isOdd()) && (o.iadd(l), c.isub(h)), o.iushrn(1), c.iushrn(1);
                                            t.cmp(r) >= 0 ? (t.isub(r), i.isub(o), s.isub(c)) : (r.isub(t), o.isub(i), c.isub(s));
                                        }
                                        return { a: o, b: c, gcd: r.iushln(u) };
                                    }),
                                    (a.prototype._invmp = function (e) {
                                        n(0 === e.negative), n(!e.isZero());
                                        var t = this,
                                            r = e.clone();
                                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                                        for (var i, s = new a(1), o = new a(0), c = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                                            for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u, l <<= 1);
                                            if (u > 0) for (t.iushrn(u); u-- > 0; ) s.isOdd() && s.iadd(c), s.iushrn(1);
                                            for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1);
                                            if (h > 0) for (r.iushrn(h); h-- > 0; ) o.isOdd() && o.iadd(c), o.iushrn(1);
                                            t.cmp(r) >= 0 ? (t.isub(r), s.isub(o)) : (r.isub(t), o.isub(s));
                                        }
                                        return (i = 0 === t.cmpn(1) ? s : o).cmpn(0) < 0 && i.iadd(e), i;
                                    }),
                                    (a.prototype.gcd = function (e) {
                                        if (this.isZero()) return e.abs();
                                        if (e.isZero()) return this.abs();
                                        var t = this.clone(),
                                            r = e.clone();
                                        (t.negative = 0), (r.negative = 0);
                                        for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                                        for (;;) {
                                            for (; t.isEven(); ) t.iushrn(1);
                                            for (; r.isEven(); ) r.iushrn(1);
                                            var i = t.cmp(r);
                                            if (i < 0) {
                                                var a = t;
                                                (t = r), (r = a);
                                            } else if (0 === i || 0 === r.cmpn(1)) break;
                                            t.isub(r);
                                        }
                                        return r.iushln(n);
                                    }),
                                    (a.prototype.invm = function (e) {
                                        return this.egcd(e).a.umod(e);
                                    }),
                                    (a.prototype.isEven = function () {
                                        return 0 == (1 & this.words[0]);
                                    }),
                                    (a.prototype.isOdd = function () {
                                        return 1 == (1 & this.words[0]);
                                    }),
                                    (a.prototype.andln = function (e) {
                                        return this.words[0] & e;
                                    }),
                                    (a.prototype.bincn = function (e) {
                                        n("number" == typeof e);
                                        var t = e % 26,
                                            r = (e - t) / 26,
                                            i = 1 << t;
                                        if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this;
                                        for (var a = i, s = r; 0 !== a && s < this.length; s++) {
                                            var o = 0 | this.words[s];
                                            (a = (o += a) >>> 26), (o &= 67108863), (this.words[s] = o);
                                        }
                                        return 0 !== a && ((this.words[s] = a), this.length++), this;
                                    }),
                                    (a.prototype.isZero = function () {
                                        return 1 === this.length && 0 === this.words[0];
                                    }),
                                    (a.prototype.cmpn = function (e) {
                                        var t,
                                            r = e < 0;
                                        if (0 !== this.negative && !r) return -1;
                                        if (0 === this.negative && r) return 1;
                                        if ((this._strip(), this.length > 1)) t = 1;
                                        else {
                                            r && (e = -e), n(e <= 67108863, "Number is too big");
                                            var i = 0 | this.words[0];
                                            t = i === e ? 0 : i < e ? -1 : 1;
                                        }
                                        return 0 !== this.negative ? 0 | -t : t;
                                    }),
                                    (a.prototype.cmp = function (e) {
                                        if (0 !== this.negative && 0 === e.negative) return -1;
                                        if (0 === this.negative && 0 !== e.negative) return 1;
                                        var t = this.ucmp(e);
                                        return 0 !== this.negative ? 0 | -t : t;
                                    }),
                                    (a.prototype.ucmp = function (e) {
                                        if (this.length > e.length) return 1;
                                        if (this.length < e.length) return -1;
                                        for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                            var n = 0 | this.words[r],
                                                i = 0 | e.words[r];
                                            if (n !== i) {
                                                n < i ? (t = -1) : n > i && (t = 1);
                                                break;
                                            }
                                        }
                                        return t;
                                    }),
                                    (a.prototype.gtn = function (e) {
                                        return 1 === this.cmpn(e);
                                    }),
                                    (a.prototype.gt = function (e) {
                                        return 1 === this.cmp(e);
                                    }),
                                    (a.prototype.gten = function (e) {
                                        return this.cmpn(e) >= 0;
                                    }),
                                    (a.prototype.gte = function (e) {
                                        return this.cmp(e) >= 0;
                                    }),
                                    (a.prototype.ltn = function (e) {
                                        return -1 === this.cmpn(e);
                                    }),
                                    (a.prototype.lt = function (e) {
                                        return -1 === this.cmp(e);
                                    }),
                                    (a.prototype.lten = function (e) {
                                        return this.cmpn(e) <= 0;
                                    }),
                                    (a.prototype.lte = function (e) {
                                        return this.cmp(e) <= 0;
                                    }),
                                    (a.prototype.eqn = function (e) {
                                        return 0 === this.cmpn(e);
                                    }),
                                    (a.prototype.eq = function (e) {
                                        return 0 === this.cmp(e);
                                    }),
                                    (a.red = function (e) {
                                        return new A(e);
                                    }),
                                    (a.prototype.toRed = function (e) {
                                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e);
                                    }),
                                    (a.prototype.fromRed = function () {
                                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
                                    }),
                                    (a.prototype._forceRed = function (e) {
                                        return (this.red = e), this;
                                    }),
                                    (a.prototype.forceRed = function (e) {
                                        return n(!this.red, "Already a number in reduction context"), this._forceRed(e);
                                    }),
                                    (a.prototype.redAdd = function (e) {
                                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
                                    }),
                                    (a.prototype.redIAdd = function (e) {
                                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
                                    }),
                                    (a.prototype.redSub = function (e) {
                                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
                                    }),
                                    (a.prototype.redISub = function (e) {
                                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
                                    }),
                                    (a.prototype.redShl = function (e) {
                                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
                                    }),
                                    (a.prototype.redMul = function (e) {
                                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
                                    }),
                                    (a.prototype.redIMul = function (e) {
                                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
                                    }),
                                    (a.prototype.redSqr = function () {
                                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
                                    }),
                                    (a.prototype.redISqr = function () {
                                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
                                    }),
                                    (a.prototype.redSqrt = function () {
                                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
                                    }),
                                    (a.prototype.redInvm = function () {
                                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
                                    }),
                                    (a.prototype.redNeg = function () {
                                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
                                    }),
                                    (a.prototype.redPow = function (e) {
                                        return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
                                    });
                                var E = { k256: null, p224: null, p192: null, p25519: null };
                                function S(e, t) {
                                    (this.name = e), (this.p = new a(t, 16)), (this.n = this.p.bitLength()), (this.k = new a(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
                                }
                                function T() {
                                    S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                                }
                                function _() {
                                    S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                                }
                                function b() {
                                    S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                                }
                                function P() {
                                    S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                                }
                                function A(e) {
                                    if ("string" == typeof e) {
                                        var t = a._prime(e);
                                        (this.m = t.p), (this.prime = t);
                                    } else n(e.gtn(1), "modulus must be greater than 1"), (this.m = e), (this.prime = null);
                                }
                                function x(e) {
                                    A.call(this, e),
                                        (this.shift = this.m.bitLength()),
                                        this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
                                        (this.r = new a(1).iushln(this.shift)),
                                        (this.r2 = this.imod(this.r.sqr())),
                                        (this.rinv = this.r._invmp(this.m)),
                                        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                                        (this.minv = this.minv.umod(this.r)),
                                        (this.minv = this.r.sub(this.minv));
                                }
                                (S.prototype._tmp = function () {
                                    var e = new a(null);
                                    return (e.words = new Array(Math.ceil(this.n / 13))), e;
                                }),
                                    (S.prototype.ireduce = function (e) {
                                        var t,
                                            r = e;
                                        do {
                                            this.split(r, this.tmp), (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
                                        } while (t > this.n);
                                        var n = t < this.n ? -1 : r.ucmp(this.p);
                                        return 0 === n ? ((r.words[0] = 0), (r.length = 1)) : n > 0 ? r.isub(this.p) : r.strip !== undefined ? r.strip() : r._strip(), r;
                                    }),
                                    (S.prototype.split = function (e, t) {
                                        e.iushrn(this.n, 0, t);
                                    }),
                                    (S.prototype.imulK = function (e) {
                                        return e.imul(this.k);
                                    }),
                                    i(T, S),
                                    (T.prototype.split = function (e, t) {
                                        for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i];
                                        if (((t.length = n), e.length <= 9)) return (e.words[0] = 0), void (e.length = 1);
                                        var a = e.words[9];
                                        for (t.words[t.length++] = a & r, i = 10; i < e.length; i++) {
                                            var s = 0 | e.words[i];
                                            (e.words[i - 10] = ((s & r) << 4) | (a >>> 22)), (a = s);
                                        }
                                        (a >>>= 22), (e.words[i - 10] = a), 0 === a && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
                                    }),
                                    (T.prototype.imulK = function (e) {
                                        (e.words[e.length] = 0), (e.words[e.length + 1] = 0), (e.length += 2);
                                        for (var t = 0, r = 0; r < e.length; r++) {
                                            var n = 0 | e.words[r];
                                            (t += 977 * n), (e.words[r] = 67108863 & t), (t = 64 * n + ((t / 67108864) | 0));
                                        }
                                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
                                    }),
                                    i(_, S),
                                    i(b, S),
                                    i(P, S),
                                    (P.prototype.imulK = function (e) {
                                        for (var t = 0, r = 0; r < e.length; r++) {
                                            var n = 19 * (0 | e.words[r]) + t,
                                                i = 67108863 & n;
                                            (n >>>= 26), (e.words[r] = i), (t = n);
                                        }
                                        return 0 !== t && (e.words[e.length++] = t), e;
                                    }),
                                    (a._prime = function (e) {
                                        if (E[e]) return E[e];
                                        var t;
                                        if ("k256" === e) t = new T();
                                        else if ("p224" === e) t = new _();
                                        else if ("p192" === e) t = new b();
                                        else {
                                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                                            t = new P();
                                        }
                                        return (E[e] = t), t;
                                    }),
                                    (A.prototype._verify1 = function (e) {
                                        n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers");
                                    }),
                                    (A.prototype._verify2 = function (e, t) {
                                        n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers");
                                    }),
                                    (A.prototype.imod = function (e) {
                                        return this.prime ? this.prime.ireduce(e)._forceRed(this) : (l(e, e.umod(this.m)._forceRed(this)), e);
                                    }),
                                    (A.prototype.neg = function (e) {
                                        return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
                                    }),
                                    (A.prototype.add = function (e, t) {
                                        this._verify2(e, t);
                                        var r = e.add(t);
                                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
                                    }),
                                    (A.prototype.iadd = function (e, t) {
                                        this._verify2(e, t);
                                        var r = e.iadd(t);
                                        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                                    }),
                                    (A.prototype.sub = function (e, t) {
                                        this._verify2(e, t);
                                        var r = e.sub(t);
                                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
                                    }),
                                    (A.prototype.isub = function (e, t) {
                                        this._verify2(e, t);
                                        var r = e.isub(t);
                                        return r.cmpn(0) < 0 && r.iadd(this.m), r;
                                    }),
                                    (A.prototype.shl = function (e, t) {
                                        return this._verify1(e), this.imod(e.ushln(t));
                                    }),
                                    (A.prototype.imul = function (e, t) {
                                        return this._verify2(e, t), this.imod(e.imul(t));
                                    }),
                                    (A.prototype.mul = function (e, t) {
                                        return this._verify2(e, t), this.imod(e.mul(t));
                                    }),
                                    (A.prototype.isqr = function (e) {
                                        return this.imul(e, e.clone());
                                    }),
                                    (A.prototype.sqr = function (e) {
                                        return this.mul(e, e);
                                    }),
                                    (A.prototype.sqrt = function (e) {
                                        if (e.isZero()) return e.clone();
                                        var t = this.m.andln(3);
                                        if ((n(t % 2 == 1), 3 === t)) {
                                            var r = this.m.add(new a(1)).iushrn(2);
                                            return this.pow(e, r);
                                        }
                                        for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1);
                                        n(!i.isZero());
                                        var o = new a(1).toRed(this),
                                            c = o.redNeg(),
                                            u = this.m.subn(1).iushrn(1),
                                            l = this.m.bitLength();
                                        for (l = new a(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(c); ) l.redIAdd(c);
                                        for (var h = this.pow(l, i), d = this.pow(e, i.addn(1).iushrn(1)), f = this.pow(e, i), p = s; 0 !== f.cmp(o); ) {
                                            for (var g = f, m = 0; 0 !== g.cmp(o); m++) g = g.redSqr();
                                            n(m < p);
                                            var v = this.pow(h, new a(1).iushln(p - m - 1));
                                            (d = d.redMul(v)), (h = v.redSqr()), (f = f.redMul(h)), (p = m);
                                        }
                                        return d;
                                    }),
                                    (A.prototype.invm = function (e) {
                                        var t = e._invmp(this.m);
                                        return 0 !== t.negative ? ((t.negative = 0), this.imod(t).redNeg()) : this.imod(t);
                                    }),
                                    (A.prototype.pow = function (e, t) {
                                        if (t.isZero()) return new a(1).toRed(this);
                                        if (0 === t.cmpn(1)) return e.clone();
                                        var r = new Array(16);
                                        (r[0] = new a(1).toRed(this)), (r[1] = e);
                                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                                        var i = r[0],
                                            s = 0,
                                            o = 0,
                                            c = t.bitLength() % 26;
                                        for (0 === c && (c = 26), n = t.length - 1; n >= 0; n--) {
                                            for (var u = t.words[n], l = c - 1; l >= 0; l--) {
                                                var h = (u >> l) & 1;
                                                i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? ((s <<= 1), (s |= h), (4 === ++o || (0 === n && 0 === l)) && ((i = this.mul(i, r[s])), (o = 0), (s = 0))) : (o = 0);
                                            }
                                            c = 26;
                                        }
                                        return i;
                                    }),
                                    (A.prototype.convertTo = function (e) {
                                        var t = e.umod(this.m);
                                        return t === e ? t.clone() : t;
                                    }),
                                    (A.prototype.convertFrom = function (e) {
                                        var t = e.clone();
                                        return (t.red = null), t;
                                    }),
                                    (a.mont = function (e) {
                                        return new x(e);
                                    }),
                                    i(x, A),
                                    (x.prototype.convertTo = function (e) {
                                        return this.imod(e.ushln(this.shift));
                                    }),
                                    (x.prototype.convertFrom = function (e) {
                                        var t = this.imod(e.mul(this.rinv));
                                        return (t.red = null), t;
                                    }),
                                    (x.prototype.imul = function (e, t) {
                                        if (e.isZero() || t.isZero()) return (e.words[0] = 0), (e.length = 1), e;
                                        var r = e.imul(t),
                                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                            i = r.isub(n).iushrn(this.shift),
                                            a = i;
                                        return i.cmp(this.m) >= 0 ? (a = i.isub(this.m)) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
                                    }),
                                    (x.prototype.mul = function (e, t) {
                                        if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
                                        var r = e.mul(t),
                                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                            i = r.isub(n).iushrn(this.shift),
                                            s = i;
                                        return i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
                                    }),
                                    (x.prototype.invm = function (e) {
                                        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
                                    });
                            })(void 0 === t || t, this);
                        };
                    };
            },
            { package: "eth-lattice-keyring>bn.js" },
        ],
        [
            2021,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            function n(e) {
                                if (Array.isArray(e)) {
                                    const t = [];
                                    for (let r = 0; r < e.length; r++) t.push(n(e[r]));
                                    const r = f(...t);
                                    return f(s(r.length, 192), r);
                                }
                                const t = v(e);
                                return 1 === t.length && t[0] < 128 ? t : f(s(t.length, 128), t);
                            }
                            function i(e, t, r) {
                                if (r > e.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                                return e.slice(t, r);
                            }
                            function a(e) {
                                if (0 === e[0]) throw new Error("invalid RLP: extra zeros");
                                return h(l(e));
                            }
                            function s(e, t) {
                                if (e < 56) return Uint8Array.from([e + t]);
                                const r = g(e),
                                    n = g(t + 55 + r.length / 2);
                                return Uint8Array.from(d(n + r));
                            }
                            function o(e, t = !1) {
                                if (!e || 0 === e.length) return Uint8Array.from([]);
                                const r = c(v(e));
                                if (t) return r;
                                if (0 !== r.remainder.length) throw new Error("invalid RLP: remainder must be zero");
                                return r.data;
                            }
                            function c(e) {
                                let t, r, n, s, o;
                                const u = [],
                                    l = e[0];
                                if (l <= 127) return { data: e.slice(0, 1), remainder: e.slice(1) };
                                if (l <= 183) {
                                    if (((t = l - 127), (n = 128 === l ? Uint8Array.from([]) : i(e, 1, t)), 2 === t && n[0] < 128)) throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                                    return { data: n, remainder: e.slice(t) };
                                }
                                if (l <= 191) {
                                    if (((r = l - 182), e.length - 1 < r)) throw new Error("invalid RLP: not enough bytes for string length");
                                    if (((t = a(i(e, 1, r))), t <= 55)) throw new Error("invalid RLP: expected string length to be greater than 55");
                                    return (n = i(e, r, t + r)), { data: n, remainder: e.slice(t + r) };
                                }
                                if (l <= 247) {
                                    for (t = l - 191, s = i(e, 1, t); s.length; ) (o = c(s)), u.push(o.data), (s = o.remainder);
                                    return { data: u, remainder: e.slice(t) };
                                }
                                {
                                    if (((r = l - 246), (t = a(i(e, 1, r))), t < 56)) throw new Error("invalid RLP: encoded list too short");
                                    const n = r + t;
                                    if (n > e.length) throw new Error("invalid RLP: total length is larger than the data");
                                    for (s = i(e, r, n); s.length; ) (o = c(s)), u.push(o.data), (s = o.remainder);
                                    return { data: u, remainder: e.slice(n) };
                                }
                            }
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.utils = r.decode = r.encode = void 0), (r.encode = n), (r.decode = o);
                            const u = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
                            function l(e) {
                                let t = "";
                                for (let r = 0; r < e.length; r++) t += u[e[r]];
                                return t;
                            }
                            function h(e) {
                                const t = Number.parseInt(e, 16);
                                if (Number.isNaN(t)) throw new Error("Invalid byte sequence");
                                return t;
                            }
                            function d(e) {
                                if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
                                if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                                const t = new Uint8Array(e.length / 2);
                                for (let r = 0; r < t.length; r++) {
                                    const n = 2 * r;
                                    t[r] = h(e.slice(n, n + 2));
                                }
                                return t;
                            }
                            function f(...e) {
                                if (1 === e.length) return e[0];
                                const t = e.reduce((e, t) => e + t.length, 0),
                                    r = new Uint8Array(t);
                                for (let t = 0, n = 0; t < e.length; t++) {
                                    const i = e[t];
                                    r.set(i, n), (n += i.length);
                                }
                                return r;
                            }
                            function p(e) {
                                return new TextEncoder().encode(e);
                            }
                            function g(e) {
                                if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                                const t = e.toString(16);
                                return t.length % 2 ? `0${t}` : t;
                            }
                            function m(e) {
                                return e.length >= 2 && "0" === e[0] && "x" === e[1];
                            }
                            function v(e) {
                                if (e instanceof Uint8Array) return e;
                                if ("string" == typeof e) return m(e) ? d((t = "string" != typeof (r = e) ? r : m(r) ? r.slice(2) : r).length % 2 ? `0${t}` : t) : p(e);
                                var t, r;
                                if ("number" == typeof e || "bigint" == typeof e) return e ? d(g(e)) : Uint8Array.from([]);
                                if (null === e || e === undefined) return Uint8Array.from([]);
                                throw new Error("toBytes: received unsupported type " + typeof e);
                            }
                            r.utils = { bytesToHex: l, concatBytes: f, hexToBytes: d, utf8ToBytes: p };
                            const y = { encode: n, decode: o };
                            r.default = y;
                        };
                    };
            },
            { package: "eth-lattice-keyring>rlp" },
        ],
        [
            203,
            { "./helpers": 202, "./profiles": 204, multicodec: 4735, multihashes: 4755 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            const n = e("multicodec"),
                                i = e("multihashes"),
                                { hexStringToBuffer: a, profiles: s } = e("./profiles"),
                                { cidForWeb: o, cidV0ToV1Base32: c } = e("./helpers");
                            t.exports = {
                                helpers: { cidForWeb: o, cidV0ToV1Base32: c },
                                decode: function (e) {
                                    const t = a(e),
                                        r = n.getCodec(t),
                                        i = n.rmPrefix(t);
                                    let o = s[r];
                                    return o || (o = s.default), o.decode(i);
                                },
                                fromIpfs: function (e) {
                                    return this.encode("ipfs-ns", e);
                                },
                                fromSkylink: function (e) {
                                    return this.encode("skynet-ns", e);
                                },
                                fromSwarm: function (e) {
                                    return this.encode("swarm-ns", e);
                                },
                                encode: function (e, t) {
                                    let r = s[e];
                                    r || (r = s.default);
                                    const a = r.encode(t);
                                    return i.toHexString(n.addPrefix(e, a));
                                },
                                getCodec: function (e) {
                                    let t = a(e);
                                    return n.getCodec(t);
                                },
                            };
                        };
                    };
            },
            { package: "@ensdomains/content-hash" },
        ],
        [
            204,
            { buffer: 1728, cids: 1770, "js-base64": 4481, multihashes: 4755 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    const n = e("cids"),
                                        i = e("multihashes"),
                                        a = e("js-base64"),
                                        s = (e) => {
                                            let t = e.slice(0, 2),
                                                r = e.slice(2),
                                                n = "";
                                            return (n = "0x" === t ? r : e), i.fromHexString(n);
                                        },
                                        o = (e) => {
                                            try {
                                                const { multihash: t } = e;
                                                if (t.length < 38) {
                                                    const e = i.decode(t);
                                                    if ("identity" === e.name && e.length < 36) return !1;
                                                }
                                                return !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                            return !1;
                                        },
                                        c = {
                                            skynet: (e) => a.toUint8Array(e),
                                            swarm: (e) => {
                                                const t = i.encode(s(e), "keccak-256");
                                                return new n(1, "swarm-manifest", t).bytes;
                                            },
                                            ipfs: (e) => new n(e).toV1().bytes,
                                            ipns: (e) => {
                                                const t = new n(e);
                                                if (!o(t)) throw Error("ipns-ns allows only valid cryptographic libp2p-key identifiers, try using ED25519 pubkey instead");
                                                return new n(1, "libp2p-key", t.multihash).bytes;
                                            },
                                            utf8: (e) => t.from(e, "utf8"),
                                        },
                                        u = {
                                            hexMultiHash: (e) => {
                                                const t = new n(e);
                                                return i.decode(t.multihash).digest.toString("hex");
                                            },
                                            ipfs: (e) => {
                                                const t = new n(e).toV1();
                                                return t.toString("libp2p-key" === t.codec ? "base36" : "base32");
                                            },
                                            ipns: (e) => {
                                                const t = new n(e).toV1();
                                                return o(t)
                                                    ? t.toString("base36")
                                                    : (console.warn("[ensdomains/content-hash] use of non-cryptographic identifiers in ipns-ns is deprecated and will be removed, migrate to ED25519 libp2p-key"),
                                                      String(i.decode(new n(e).multihash).digest));
                                            },
                                            utf8: (e) => e.toString("utf8"),
                                            base64: (e) => a.fromUint8Array(e, !0),
                                        },
                                        l = {
                                            "skynet-ns": { encode: c.skynet, decode: u.base64 },
                                            "swarm-ns": { encode: c.swarm, decode: u.hexMultiHash },
                                            "ipfs-ns": { encode: c.ipfs, decode: u.ipfs },
                                            "ipns-ns": { encode: c.ipns, decode: u.ipns },
                                            default: { encode: c.utf8, decode: u.utf8 },
                                        };
                                    (r.hexStringToBuffer = s), (r.profiles = l);
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "@ensdomains/content-hash" },
        ],
        [
            2047,
            { "@ethereumjs/tx": 328, buffer: 1728, "ethereumjs-util": 2107, events: 1729, hdkey: 4441, "trezor-connect": 5133, "trezor-connect/lib/plugins/ethereum/typedData": 5136 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (r) {
                                (function () {
                                    const { EventEmitter: n } = e("events"),
                                        i = e("ethereumjs-util"),
                                        a = e("hdkey"),
                                        s = e("trezor-connect").default,
                                        { TransactionFactory: o } = e("@ethereumjs/tx"),
                                        c = e("trezor-connect/lib/plugins/ethereum/typedData"),
                                        u = "m/44'/60'/0'/0",
                                        l = { [u]: !0, "m/44'/1'/0'/0": !0 },
                                        h = "Trezor Hardware",
                                        d = 1e3,
                                        f = { email: "support@metamask.io", appUrl: "https://metamask.io" };
                                    function p(e) {
                                        return new Promise((t) => setTimeout(t, e));
                                    }
                                    function g(e) {
                                        return "function" == typeof e.getChainId;
                                    }
                                    class m extends n {
                                        constructor(e = {}) {
                                            super(),
                                                (this.type = h),
                                                (this.accounts = []),
                                                (this.hdk = new a()),
                                                (this.page = 0),
                                                (this.perPage = 5),
                                                (this.unlockedAccount = 0),
                                                (this.paths = {}),
                                                this.deserialize(e),
                                                s.on("DEVICE_EVENT", (e) => {
                                                    e && e.payload && e.payload.features && (this.model = e.payload.features.model);
                                                }),
                                                s.init({ manifest: f });
                                        }
                                        getModel() {
                                            return this.model;
                                        }
                                        dispose() {
                                            s.dispose();
                                        }
                                        serialize() {
                                            return Promise.resolve({ hdPath: this.hdPath, accounts: this.accounts, page: this.page, paths: this.paths, perPage: this.perPage, unlockedAccount: this.unlockedAccount });
                                        }
                                        deserialize(e = {}) {
                                            return (this.hdPath = e.hdPath || u), (this.accounts = e.accounts || []), (this.page = e.page || 0), (this.perPage = e.perPage || 5), Promise.resolve();
                                        }
                                        isUnlocked() {
                                            return Boolean(this.hdk && this.hdk.publicKey);
                                        }
                                        unlock() {
                                            return this.isUnlocked()
                                                ? Promise.resolve("already unlocked")
                                                : new Promise((e, t) => {
                                                      s.getPublicKey({ path: this.hdPath, coin: "ETH" })
                                                          .then((n) => {
                                                              n.success
                                                                  ? ((this.hdk.publicKey = r.from(n.payload.publicKey, "hex")), (this.hdk.chainCode = r.from(n.payload.chainCode, "hex")), e("just unlocked"))
                                                                  : t(new Error((n.payload && n.payload.error) || "Unknown error"));
                                                          })
                                                          .catch((e) => {
                                                              t(new Error((e && e.toString()) || "Unknown error"));
                                                          });
                                                  });
                                        }
                                        setAccountToUnlock(e) {
                                            this.unlockedAccount = parseInt(e, 10);
                                        }
                                        addAccounts(e = 1) {
                                            return new Promise((t, r) => {
                                                this.unlock()
                                                    .then((r) => {
                                                        const n = this.unlockedAccount,
                                                            i = n + e;
                                                        for (let e = n; e < i; e++) {
                                                            const t = this._addressFromIndex("m", e);
                                                            this.accounts.includes(t) || this.accounts.push(t), (this.page = 0);
                                                        }
                                                        t(this.accounts);
                                                    })
                                                    .catch((e) => {
                                                        r(e);
                                                    });
                                            });
                                        }
                                        getFirstPage() {
                                            return (this.page = 0), this.__getPage(1);
                                        }
                                        getNextPage() {
                                            return this.__getPage(1);
                                        }
                                        getPreviousPage() {
                                            return this.__getPage(-1);
                                        }
                                        __getPage(e) {
                                            return (
                                                (this.page += e),
                                                this.page <= 0 && (this.page = 1),
                                                new Promise((e, t) => {
                                                    this.unlock()
                                                        .then((t) => {
                                                            const r = (this.page - 1) * this.perPage,
                                                                n = r + this.perPage,
                                                                a = [];
                                                            for (let e = r; e < n; e++) {
                                                                const t = this._addressFromIndex("m", e);
                                                                a.push({ address: t, balance: null, index: e }), (this.paths[i.toChecksumAddress(t)] = e);
                                                            }
                                                            e(a);
                                                        })
                                                        .catch((e) => {
                                                            t(e);
                                                        });
                                                })
                                            );
                                        }
                                        getAccounts() {
                                            return Promise.resolve(this.accounts.slice());
                                        }
                                        removeAccount(e) {
                                            if (!this.accounts.map((e) => e.toLowerCase()).includes(e.toLowerCase())) throw new Error(`Address ${e} not found in this keyring`);
                                            this.accounts = this.accounts.filter((t) => t.toLowerCase() !== e.toLowerCase());
                                        }
                                        signTransaction(e, t) {
                                            return g(t)
                                                ? this._signTransaction(e, t.getChainId(), t, (e) => ((t.v = r.from(e.v, "hex")), (t.r = r.from(e.r, "hex")), (t.s = r.from(e.s, "hex")), t))
                                                : this._signTransaction(e, t.common.chainIdBN().toNumber(), t, (e) => {
                                                      const r = t.toJSON();
                                                      return (r.type = t.type), (r.v = i.addHexPrefix(e.v)), (r.r = i.addHexPrefix(e.r)), (r.s = i.addHexPrefix(e.s)), o.fromTxData(r, { common: t.common, freeze: Object.isFrozen(t) });
                                                  });
                                        }
                                        async _signTransaction(e, t, r, n) {
                                            let a;
                                            a = g(r)
                                                ? {
                                                      to: this._normalize(r.to),
                                                      value: this._normalize(r.value),
                                                      data: this._normalize(r.data),
                                                      chainId: t,
                                                      nonce: this._normalize(r.nonce),
                                                      gasLimit: this._normalize(r.gasLimit),
                                                      gasPrice: this._normalize(r.gasPrice),
                                                  }
                                                : { ...r.toJSON(), chainId: t, to: this._normalize(r.to) };
                                            try {
                                                const t = await this.unlock();
                                                await p("just unlocked" === t ? d : 0);
                                                const r = await s.ethereumSignTransaction({ path: this._pathFromAddress(e), transaction: a });
                                                if (r.success) {
                                                    const t = n(r.payload),
                                                        a = i.toChecksumAddress(i.addHexPrefix(t.getSenderAddress().toString("hex")));
                                                    if (a !== i.toChecksumAddress(e)) throw new Error("signature doesn't match the right address");
                                                    return t;
                                                }
                                                throw new Error((r.payload && r.payload.error) || "Unknown error");
                                            } catch (e) {
                                                throw new Error((e && e.toString()) || "Unknown error");
                                            }
                                        }
                                        signMessage(e, t) {
                                            return this.signPersonalMessage(e, t);
                                        }
                                        signPersonalMessage(e, t) {
                                            return new Promise((r, n) => {
                                                this.unlock()
                                                    .then((a) => {
                                                        setTimeout(
                                                            (a) => {
                                                                s.ethereumSignMessage({ path: this._pathFromAddress(e), message: i.stripHexPrefix(t), hex: !0 })
                                                                    .then((t) => {
                                                                        if (t.success) {
                                                                            t.payload.address !== i.toChecksumAddress(e) && n(new Error("signature doesnt match the right address"));
                                                                            const a = `0x${t.payload.signature}`;
                                                                            r(a);
                                                                        } else n(new Error((t.payload && t.payload.error) || "Unknown error"));
                                                                    })
                                                                    .catch((e) => {
                                                                        n(new Error((e && e.toString()) || "Unknown error"));
                                                                    });
                                                            },
                                                            "just unlocked" === a ? d : 0
                                                        );
                                                    })
                                                    .catch((e) => {
                                                        n(new Error((e && e.toString()) || "Unknown error"));
                                                    });
                                            });
                                        }
                                        async signTypedData(e, t, { version: r }) {
                                            const n = c(t, "V4" === r),
                                                { types: { EIP712Domain: a = [], ...o } = {}, message: u = {}, domain: l = {}, primaryType: h, domain_separator_hash: f, message_hash: g } = n,
                                                m = await this.unlock();
                                            await p("just unlocked" === m ? d : 0);
                                            const v = await s.ethereumSignTypedData({
                                                path: this._pathFromAddress(e),
                                                data: { types: { EIP712Domain: a, ...o }, message: u, domain: l, primaryType: h },
                                                metamask_v4_compat: !0,
                                                domain_separator_hash: f,
                                                message_hash: g,
                                            });
                                            if (v.success) {
                                                if (i.toChecksumAddress(e) !== v.payload.address) throw new Error("signature doesnt match the right address");
                                                return v.payload.signature;
                                            }
                                            throw new Error((v.payload && v.payload.error) || "Unknown error");
                                        }
                                        exportAccount() {
                                            return Promise.reject(new Error("Not supported on this device"));
                                        }
                                        forgetDevice() {
                                            (this.accounts = []), (this.hdk = new a()), (this.page = 0), (this.unlockedAccount = 0), (this.paths = {});
                                        }
                                        setHdPath(e) {
                                            if (!l[e]) throw new Error(`The setHdPath method does not support setting HD Path to ${e}`);
                                            this.hdPath !== e && ((this.hdk = new a()), (this.accounts = []), (this.page = 0), (this.perPage = 5), (this.unlockedAccount = 0), (this.paths = {})), (this.hdPath = e);
                                        }
                                        _normalize(e) {
                                            return i.bufferToHex(e).toString();
                                        }
                                        _addressFromIndex(e, t) {
                                            const r = this.hdk.derive(`${e}/${t}`),
                                                n = i.publicToAddress(r.publicKey, !0).toString("hex");
                                            return i.toChecksumAddress(`0x${n}`);
                                        }
                                        _pathFromAddress(e) {
                                            const t = i.toChecksumAddress(e);
                                            let r = this.paths[t];
                                            if (void 0 === r)
                                                for (let e = 0; e < 1e3; e++)
                                                    if (t === this._addressFromIndex("m", e)) {
                                                        r = e;
                                                        break;
                                                    }
                                            if (void 0 === r) throw new Error("Unknown address");
                                            return `${this.hdPath}/${r}`;
                                        }
                                    }
                                    (m.type = h), (t.exports = m);
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-trezor-keyring" },
        ],
        [
            21,
            {
                "../../../../shared/constants/network": 5333,
                "../../../../shared/modules/fetch-with-timeout": 5352,
                "../../../../shared/modules/network.utils": 5356,
                "./createInfuraClient": 16,
                "./createJsonRpcClient": 17,
                "./createMetamaskMiddleware": 18,
                "@metamask/obs-store": 1177,
                _process: 4801,
                assert: 1463,
                "eth-json-rpc-middleware": 1985,
                "eth-query": 2028,
                events: 1729,
                "json-rpc-engine": 4490,
                loglevel: 4707,
                "swappable-obj-proxy": 5109,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.NETWORK_EVENTS = void 0);
                                    var n = e("assert"),
                                        i = v(e("events")),
                                        a = e("@metamask/obs-store"),
                                        s = e("json-rpc-engine"),
                                        o = e("eth-json-rpc-middleware"),
                                        c = v(e("loglevel")),
                                        u = e("swappable-obj-proxy"),
                                        l = v(e("eth-query")),
                                        h = e("../../../../shared/constants/network"),
                                        d = e("../../../../shared/modules/network.utils"),
                                        f = v(e("../../../../shared/modules/fetch-with-timeout")),
                                        p = v(e("./createMetamaskMiddleware")),
                                        g = v(e("./createInfuraClient")),
                                        m = v(e("./createJsonRpcClient"));
                                    function v(e) {
                                        return e && e.__esModule ? e : { default: e };
                                    }
                                    const y = t.env.METAMASK_ENV,
                                        w = (0, f.default)();
                                    let E;
                                    E = "test" === y ? { type: h.NETWORK_TYPES.GOERLI, chainId: h.CHAIN_IDS.GOERLI, ticker: h.TEST_NETWORK_TICKER_MAP.GOERLI } : { type: h.NETWORK_TYPES.MAINNET, chainId: h.CHAIN_IDS.MAINNET };
                                    const S = { ticker: "ETH", ...E },
                                        T = { EIPS: { 1559: undefined } },
                                        _ = { NETWORK_DID_CHANGE: "networkDidChange", NETWORK_WILL_CHANGE: "networkWillChange", INFURA_IS_BLOCKED: "infuraIsBlocked", INFURA_IS_UNBLOCKED: "infuraIsUnblocked" };
                                    r.NETWORK_EVENTS = _;
                                    class b extends i.default {
                                        constructor(e = {}) {
                                            super(),
                                                (this.providerStore = new a.ObservableStore(e.provider || { ...S })),
                                                (this.previousProviderStore = new a.ObservableStore(this.providerStore.getState())),
                                                (this.networkStore = new a.ObservableStore("loading")),
                                                (this.networkDetails = new a.ObservableStore(e.networkDetails || { ...T })),
                                                (this.store = new a.ComposedStore({ provider: this.providerStore, previousProviderStore: this.previousProviderStore, network: this.networkStore, networkDetails: this.networkDetails })),
                                                (this._provider = null),
                                                (this._blockTracker = null),
                                                (this._providerProxy = null),
                                                (this._blockTrackerProxy = null),
                                                this.on(_.NETWORK_DID_CHANGE, this.lookupNetwork);
                                        }
                                        setInfuraProjectId(e) {
                                            if (!e || "string" != typeof e) throw new Error("Invalid Infura project ID");
                                            this._infuraProjectId = e;
                                        }
                                        initializeProvider(e) {
                                            this._baseProviderParams = e;
                                            const { type: t, rpcUrl: r, chainId: n } = this.getProviderConfig();
                                            this._configureProvider({ type: t, rpcUrl: r, chainId: n }), this.lookupNetwork();
                                        }
                                        getProviderAndBlockTracker() {
                                            return { provider: this._providerProxy, blockTracker: this._blockTrackerProxy };
                                        }
                                        getLatestBlock() {
                                            return new Promise((e, t) => {
                                                const { provider: r } = this.getProviderAndBlockTracker();
                                                new l.default(r).sendAsync({ method: "eth_getBlockByNumber", params: ["latest", !1] }, (r, n) => (r ? t(r) : e(n)));
                                            });
                                        }
                                        async getEIP1559Compatibility() {
                                            const { EIPS: e } = this.networkDetails.getState();
                                            if (e[1559] !== undefined) return e[1559];
                                            const t = await this.getLatestBlock(),
                                                r = t && t.baseFeePerGas !== undefined;
                                            return this.setNetworkEIPSupport(1559, r), r;
                                        }
                                        verifyNetwork() {
                                            this.isNetworkLoading() && this.lookupNetwork();
                                        }
                                        getNetworkState() {
                                            return this.networkStore.getState();
                                        }
                                        setNetworkState(e) {
                                            this.networkStore.putState(e);
                                        }
                                        setNetworkEIPSupport(e, t) {
                                            this.networkDetails.updateState({ EIPS: { [e]: t } });
                                        }
                                        clearNetworkDetails() {
                                            this.networkDetails.putState({ ...T });
                                        }
                                        isNetworkLoading() {
                                            return "loading" === this.getNetworkState();
                                        }
                                        lookupNetwork() {
                                            if (!this._provider) return void c.default.warn("NetworkController - lookupNetwork aborted due to missing provider");
                                            if (!this.getCurrentChainId()) return c.default.warn("NetworkController - lookupNetwork aborted due to missing chainId"), this.setNetworkState("loading"), void this.clearNetworkDetails();
                                            const e = new l.default(this._provider),
                                                t = this.getNetworkState(),
                                                { type: r } = this.getProviderConfig();
                                            h.INFURA_PROVIDER_TYPES.includes(r) ? this._checkInfuraAvailability(r) : this.emit(_.INFURA_IS_UNBLOCKED),
                                                e.sendAsync({ method: "net_version" }, (e, r) => {
                                                    const n = this.getNetworkState();
                                                    if (t === n) {
                                                        if (e) return this.setNetworkState("loading"), void this.clearNetworkDetails();
                                                        this.setNetworkState(r), this.getEIP1559Compatibility();
                                                    }
                                                });
                                        }
                                        getCurrentChainId() {
                                            var e;
                                            const { type: t, chainId: r } = this.getProviderConfig();
                                            return (null === (e = h.BUILT_IN_NETWORKS[t]) || void 0 === e ? void 0 : e.chainId) || r;
                                        }
                                        getCurrentRpcUrl() {
                                            const { rpcUrl: e } = this.getProviderConfig();
                                            return e;
                                        }
                                        setRpcTarget(e, t, r = "ETH", i = "", a) {
                                            n.strict.ok((0, d.isPrefixedFormattedHexString)(t), `Invalid chain ID "${t}": invalid hex string.`),
                                                n.strict.ok((0, d.isSafeChainId)(parseInt(t, 16)), `Invalid chain ID "${t}": numerical value greater than max safe value.`),
                                                this.setProviderConfig({ type: h.NETWORK_TYPES.RPC, rpcUrl: e, chainId: t, ticker: r, nickname: i, rpcPrefs: a });
                                        }
                                        async setProviderType(e) {
                                            n.strict.notStrictEqual(e, h.NETWORK_TYPES.RPC, `NetworkController - cannot call "setProviderType" with type "${h.NETWORK_TYPES.RPC}". Use "setRpcTarget"`),
                                                n.strict.ok(h.INFURA_PROVIDER_TYPES.includes(e), `Unknown Infura provider type "${e}".`);
                                            const { chainId: t, ticker: r } = h.BUILT_IN_NETWORKS[e];
                                            this.setProviderConfig({ type: e, rpcUrl: "", chainId: t, ticker: null != r ? r : "ETH", nickname: "" });
                                        }
                                        resetConnection() {
                                            this.setProviderConfig(this.getProviderConfig());
                                        }
                                        setProviderConfig(e) {
                                            this.previousProviderStore.updateState(this.getProviderConfig()), this.providerStore.updateState(e), this._switchNetwork(e);
                                        }
                                        rollbackToPreviousProvider() {
                                            const e = this.previousProviderStore.getState();
                                            this.providerStore.updateState(e), this._switchNetwork(e);
                                        }
                                        getProviderConfig() {
                                            return this.providerStore.getState();
                                        }
                                        getNetworkIdentifier() {
                                            const e = this.providerStore.getState();
                                            return e.type === h.NETWORK_TYPES.RPC ? e.rpcUrl : e.type;
                                        }
                                        async _checkInfuraAvailability(e) {
                                            const t = `https://${e}.infura.io/v3/${this._infuraProjectId}`;
                                            let r = !1;
                                            this.once(_.NETWORK_DID_CHANGE, () => {
                                                r = !0;
                                            });
                                            try {
                                                const e = await w(t, { method: "POST", body: JSON.stringify({ jsonrpc: "2.0", method: "eth_blockNumber", params: [], id: 1 }) });
                                                if (r) return;
                                                if (e.ok) this.emit(_.INFURA_IS_UNBLOCKED);
                                                else {
                                                    const t = await e.json();
                                                    if (r) return;
                                                    t.error === h.INFURA_BLOCKED_KEY && this.emit(_.INFURA_IS_BLOCKED);
                                                }
                                            } catch (e) {
                                                c.default.warn("MetaMask - Infura availability check failed", e);
                                            }
                                        }
                                        _switchNetwork(e) {
                                            this.emit(_.NETWORK_WILL_CHANGE), this.setNetworkState("loading"), this.clearNetworkDetails(), this._configureProvider(e), this.emit(_.NETWORK_DID_CHANGE, e.type);
                                        }
                                        _configureProvider({ type: e, rpcUrl: t, chainId: r }) {
                                            if (h.INFURA_PROVIDER_TYPES.includes(e)) this._configureInfuraProvider(e, this._infuraProjectId);
                                            else {
                                                if (e !== h.NETWORK_TYPES.RPC) throw new Error(`NetworkController - _configureProvider - unknown type "${e}"`);
                                                this._configureStandardProvider(t, r);
                                            }
                                        }
                                        _configureInfuraProvider(e, t) {
                                            c.default.info("NetworkController - configureInfuraProvider", e);
                                            const r = (0, g.default)({ network: e, projectId: t });
                                            this._setNetworkClient(r);
                                        }
                                        _configureStandardProvider(e, t) {
                                            c.default.info("NetworkController - configureStandardProvider", e);
                                            const r = (0, m.default)({ rpcUrl: e, chainId: t });
                                            this._setNetworkClient(r);
                                        }
                                        _setNetworkClient({ networkMiddleware: e, blockTracker: t }) {
                                            const r = (0, p.default)(this._baseProviderParams),
                                                n = new s.JsonRpcEngine();
                                            n.push(r), n.push(e);
                                            const i = (0, o.providerFromEngine)(n);
                                            this._setProviderAndBlockTracker({ provider: i, blockTracker: t });
                                        }
                                        _setProviderAndBlockTracker({ provider: e, blockTracker: t }) {
                                            this._providerProxy ? this._providerProxy.setTarget(e) : (this._providerProxy = (0, u.createSwappableProxy)(e)),
                                                this._blockTrackerProxy ? this._blockTrackerProxy.setTarget(t) : (this._blockTrackerProxy = (0, u.createEventEmitterProxy)(t, { eventFilter: "skipInternal" })),
                                                (this._provider = e),
                                                (this._blockTracker = t);
                                        }
                                    }
                                    r.default = b;
                                }.call(this));
                            }.call(this, e("_process")));
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            2113,
            { bs58check: 1737, crypto: 1834, "ethereumjs-util": 2118, randombytes: 4848, "safe-buffer": 5012, scryptsy: 5021, "uuid/v4": 2127 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          },
                                i = e("safe-buffer").Buffer,
                                a = e("ethereumjs-util"),
                                s = e("crypto"),
                                o = e("randombytes"),
                                c = e("scryptsy"),
                                u = e("uuid/v4"),
                                l = e("bs58check");
                            function h(e, t) {
                                if (!e) throw new Error(t || "Assertion failed");
                            }
                            function d(e, t) {
                                return i.concat([e.update(t), e.final()]);
                            }
                            var f = function (e, t) {
                                if (e && t) throw new Error("Cannot supply both a private and a public key to the constructor");
                                if (e && !a.isValidPrivate(e)) throw new Error("Private key does not satisfy the curve requirements (ie. it is invalid)");
                                if (t && !a.isValidPublic(t)) throw new Error("Invalid public key");
                                (this._privKey = e), (this._pubKey = t);
                            };
                            Object.defineProperty(f.prototype, "privKey", {
                                get: function () {
                                    return h(this._privKey, "This is a public key only wallet"), this._privKey;
                                },
                            }),
                                Object.defineProperty(f.prototype, "pubKey", {
                                    get: function () {
                                        return this._pubKey || (this._pubKey = a.privateToPublic(this.privKey)), this._pubKey;
                                    },
                                }),
                                (f.generate = function (e) {
                                    if (!e) return new f(o(32));
                                    for (var t = new a.BN("088f924eeceeda7fe92e1f5b0fffffffffffffff", 16); ; ) {
                                        var r = o(32);
                                        if (new a.BN(a.privateToAddress(r)).lte(t)) return new f(r);
                                    }
                                }),
                                (f.generateVanityAddress = function (e) {
                                    for ("object" !== (void 0 === e ? "undefined" : n(e)) && (e = new RegExp(e)); ; ) {
                                        var t = o(32),
                                            r = a.privateToAddress(t);
                                        if (e.test(r.toString("hex"))) return new f(t);
                                    }
                                }),
                                (f.prototype.getPrivateKey = function () {
                                    return this.privKey;
                                }),
                                (f.prototype.getPrivateKeyString = function () {
                                    return a.bufferToHex(this.getPrivateKey());
                                }),
                                (f.prototype.getPublicKey = function () {
                                    return this.pubKey;
                                }),
                                (f.prototype.getPublicKeyString = function () {
                                    return a.bufferToHex(this.getPublicKey());
                                }),
                                (f.prototype.getAddress = function () {
                                    return a.publicToAddress(this.pubKey);
                                }),
                                (f.prototype.getAddressString = function () {
                                    return a.bufferToHex(this.getAddress());
                                }),
                                (f.prototype.getChecksumAddressString = function () {
                                    return a.toChecksumAddress(this.getAddressString());
                                }),
                                (f.prototype.toV3 = function (e, t) {
                                    h(this._privKey, "This is a public key only wallet");
                                    var r,
                                        n = (t = t || {}).salt || o(32),
                                        l = t.iv || o(16),
                                        f = t.kdf || "scrypt",
                                        p = { dklen: t.dklen || 32, salt: n.toString("hex") };
                                    if ("pbkdf2" === f) (p.c = t.c || 262144), (p.prf = "hmac-sha256"), (r = s.pbkdf2Sync(i.from(e), n, p.c, p.dklen, "sha256"));
                                    else {
                                        if ("scrypt" !== f) throw new Error("Unsupported kdf");
                                        (p.n = t.n || 262144), (p.r = t.r || 8), (p.p = t.p || 1), (r = c(i.from(e), n, p.n, p.r, p.p, p.dklen));
                                    }
                                    var g = s.createCipheriv(t.cipher || "aes-128-ctr", r.slice(0, 16), l);
                                    if (!g) throw new Error("Unsupported cipher");
                                    var m = d(g, this.privKey),
                                        v = a.keccak256(i.concat([r.slice(16, 32), i.from(m, "hex")]));
                                    return {
                                        version: 3,
                                        id: u({ random: t.uuid || o(16) }),
                                        address: this.getAddress().toString("hex"),
                                        crypto: { ciphertext: m.toString("hex"), cipherparams: { iv: l.toString("hex") }, cipher: t.cipher || "aes-128-ctr", kdf: f, kdfparams: p, mac: v.toString("hex") },
                                    };
                                }),
                                (f.prototype.getV3Filename = function (e) {
                                    return ["UTC--", (e ? new Date(e) : new Date()).toJSON().replace(/:/g, "-"), "--", this.getAddress().toString("hex")].join("");
                                }),
                                (f.prototype.toV3String = function (e, t) {
                                    return JSON.stringify(this.toV3(e, t));
                                }),
                                (f.fromPublicKey = function (e, t) {
                                    return t && (e = a.importPublic(e)), new f(null, e);
                                }),
                                (f.fromExtendedPublicKey = function (e) {
                                    return h("xpub" === e.slice(0, 4), "Not an extended public key"), (e = l.decode(e).slice(45)), f.fromPublicKey(e, !0);
                                }),
                                (f.fromPrivateKey = function (e) {
                                    return new f(e);
                                }),
                                (f.fromExtendedPrivateKey = function (e) {
                                    h("xprv" === e.slice(0, 4), "Not an extended private key");
                                    var t = l.decode(e);
                                    return h(0 === t[45], "Invalid extended private key"), f.fromPrivateKey(t.slice(46));
                                }),
                                (f.fromV1 = function (e, t) {
                                    h("string" == typeof t);
                                    var r = "object" === (void 0 === e ? "undefined" : n(e)) ? e : JSON.parse(e);
                                    if ("1" !== r.Version) throw new Error("Not a V1 wallet");
                                    if ("scrypt" !== r.Crypto.KeyHeader.Kdf) throw new Error("Unsupported key derivation scheme");
                                    var o = r.Crypto.KeyHeader.KdfParams,
                                        u = c(i.from(t), i.from(r.Crypto.Salt, "hex"), o.N, o.R, o.P, o.DkLen),
                                        l = i.from(r.Crypto.CipherText, "hex");
                                    if (a.keccak256(i.concat([u.slice(16, 32), l])).toString("hex") !== r.Crypto.MAC) throw new Error("Key derivation failed - possibly wrong passphrase");
                                    var p = d(s.createDecipheriv("aes-128-cbc", a.keccak256(u.slice(0, 16)).slice(0, 16), i.from(r.Crypto.IV, "hex")), l);
                                    return new f(p);
                                }),
                                (f.fromV3 = function (e, t, r) {
                                    h("string" == typeof t);
                                    var o,
                                        u,
                                        l = "object" === (void 0 === e ? "undefined" : n(e)) ? e : JSON.parse(r ? e.toLowerCase() : e);
                                    if (3 !== l.version) throw new Error("Not a V3 wallet");
                                    if ("scrypt" === l.crypto.kdf) (u = l.crypto.kdfparams), (o = c(i.from(t), i.from(u.salt, "hex"), u.n, u.r, u.p, u.dklen));
                                    else {
                                        if ("pbkdf2" !== l.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                                        if ("hmac-sha256" !== (u = l.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                                        o = s.pbkdf2Sync(i.from(t), i.from(u.salt, "hex"), u.c, u.dklen, "sha256");
                                    }
                                    var p = i.from(l.crypto.ciphertext, "hex");
                                    if (a.keccak256(i.concat([o.slice(16, 32), p])).toString("hex") !== l.crypto.mac) throw new Error("Key derivation failed - possibly wrong passphrase");
                                    var g = d(s.createDecipheriv(l.crypto.cipher, o.slice(0, 16), i.from(l.crypto.cipherparams.iv, "hex")), p);
                                    return new f(g);
                                }),
                                (f.fromEthSale = function (e, t) {
                                    h("string" == typeof t);
                                    var r = "object" === (void 0 === e ? "undefined" : n(e)) ? e : JSON.parse(e),
                                        o = i.from(r.encseed, "hex"),
                                        c = s.pbkdf2Sync(t, t, 2e3, 32, "sha256").slice(0, 16),
                                        u = d(s.createDecipheriv("aes-128-cbc", c, o.slice(0, 16)), o.slice(16)),
                                        l = new f(a.keccak256(u));
                                    if (l.getAddress().toString("hex") !== r.ethaddr) throw new Error("Decoded key mismatch - possibly wrong passphrase");
                                    return l;
                                }),
                                (t.exports = f);
                        };
                    };
            },
            { package: "ethereumjs-wallet" },
        ],
        [
            2114,
            { "./bytes": 2115, "./hash": 2117, "./secp256k1v3-adapter": 2120, assert: 1463, "bn.js": 1684, buffer: 1728, "ethjs-util": 2124 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.importPublic = r.privateToPublic = r.privateToAddress = r.publicToAddress = r.pubToAddress = r.isValidPublic = r.isValidPrivate = r.isPrecompiled = r.generateAddress2 = r.generateAddress = r.isValidChecksumAddress = r.toChecksumAddress = r.isZeroAddress = r.isValidAddress = r.zeroAddress = void 0);
                                    var n = e("assert"),
                                        i = e("ethjs-util"),
                                        a = e("./secp256k1v3-adapter"),
                                        s = e("bn.js"),
                                        o = e("./bytes"),
                                        c = e("./hash");
                                    (r.zeroAddress = function () {
                                        var e = o.zeros(20);
                                        return o.bufferToHex(e);
                                    }),
                                        (r.isValidAddress = function (e) {
                                            return /^0x[0-9a-fA-F]{40}$/.test(e);
                                        }),
                                        (r.isZeroAddress = function (e) {
                                            return r.zeroAddress() === o.addHexPrefix(e);
                                        }),
                                        (r.toChecksumAddress = function (e, t) {
                                            e = i.stripHexPrefix(e).toLowerCase();
                                            for (var r = t !== undefined ? t.toString() + "0x" : "", n = c.keccak(r + e).toString("hex"), a = "0x", s = 0; s < e.length; s++) parseInt(n[s], 16) >= 8 ? (a += e[s].toUpperCase()) : (a += e[s]);
                                            return a;
                                        }),
                                        (r.isValidChecksumAddress = function (e, t) {
                                            return r.isValidAddress(e) && r.toChecksumAddress(e, t) === e;
                                        }),
                                        (r.generateAddress = function (e, r) {
                                            e = o.toBuffer(e);
                                            var n = new s(r);
                                            return n.isZero() ? c.rlphash([e, null]).slice(-20) : c.rlphash([e, t.from(n.toArray())]).slice(-20);
                                        }),
                                        (r.generateAddress2 = function (e, r, i) {
                                            var a = o.toBuffer(e),
                                                s = o.toBuffer(r),
                                                u = o.toBuffer(i);
                                            return n(20 === a.length), n(32 === s.length), c.keccak256(t.concat([t.from("ff", "hex"), a, s, c.keccak256(u)])).slice(-20);
                                        }),
                                        (r.isPrecompiled = function (e) {
                                            var t = o.unpad(e);
                                            return 1 === t.length && t[0] >= 1 && t[0] <= 8;
                                        }),
                                        (r.isValidPrivate = function (e) {
                                            return a.privateKeyVerify(e);
                                        }),
                                        (r.isValidPublic = function (e, r) {
                                            return void 0 === r && (r = !1), 64 === e.length ? a.publicKeyVerify(t.concat([t.from([4]), e])) : !!r && a.publicKeyVerify(e);
                                        }),
                                        (r.pubToAddress = function (e, t) {
                                            return void 0 === t && (t = !1), (e = o.toBuffer(e)), t && 64 !== e.length && (e = a.publicKeyConvert(e, !1).slice(1)), n(64 === e.length), c.keccak(e).slice(-20);
                                        }),
                                        (r.publicToAddress = r.pubToAddress),
                                        (r.privateToAddress = function (e) {
                                            return r.publicToAddress(r.privateToPublic(e));
                                        }),
                                        (r.privateToPublic = function (e) {
                                            return (e = o.toBuffer(e)), a.publicKeyCreate(e, !1).slice(1);
                                        }),
                                        (r.importPublic = function (e) {
                                            return 64 !== (e = o.toBuffer(e)).length && (e = a.publicKeyConvert(e, !1).slice(1)), e;
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2115,
            { "bn.js": 1684, buffer: 1728, "ethjs-util": 2124 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.baToJSON = r.addHexPrefix = r.toUnsigned = r.fromSigned = r.bufferToHex = r.bufferToInt = r.toBuffer = r.stripZeros = r.unpad = r.setLengthRight = r.setLength = r.setLengthLeft = r.zeros = void 0);
                                    var n = e("ethjs-util"),
                                        i = e("bn.js");
                                    (r.zeros = function (e) {
                                        return t.allocUnsafe(e).fill(0);
                                    }),
                                        (r.setLengthLeft = function (e, t, n) {
                                            void 0 === n && (n = !1);
                                            var i = r.zeros(t);
                                            return (e = r.toBuffer(e)), n ? (e.length < t ? (e.copy(i), i) : e.slice(0, t)) : e.length < t ? (e.copy(i, t - e.length), i) : e.slice(-t);
                                        }),
                                        (r.setLength = r.setLengthLeft),
                                        (r.setLengthRight = function (e, t) {
                                            return r.setLength(e, t, !0);
                                        }),
                                        (r.unpad = function (e) {
                                            for (var t = (e = n.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
                                            return e;
                                        }),
                                        (r.stripZeros = r.unpad),
                                        (r.toBuffer = function (e) {
                                            if (!t.isBuffer(e))
                                                if (Array.isArray(e)) e = t.from(e);
                                                else if ("string" == typeof e) {
                                                    if (!n.isHexString(e)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + e);
                                                    e = t.from(n.padToEven(n.stripHexPrefix(e)), "hex");
                                                } else if ("number" == typeof e) e = n.intToBuffer(e);
                                                else if (null === e || e === undefined) e = t.allocUnsafe(0);
                                                else if (i.isBN(e)) e = e.toArrayLike(t);
                                                else {
                                                    if (!e.toArray) throw new Error("invalid type");
                                                    e = t.from(e.toArray());
                                                }
                                            return e;
                                        }),
                                        (r.bufferToInt = function (e) {
                                            return new i(r.toBuffer(e)).toNumber();
                                        }),
                                        (r.bufferToHex = function (e) {
                                            return "0x" + (e = r.toBuffer(e)).toString("hex");
                                        }),
                                        (r.fromSigned = function (e) {
                                            return new i(e).fromTwos(256);
                                        }),
                                        (r.toUnsigned = function (e) {
                                            return t.from(e.toTwos(256).toArray());
                                        }),
                                        (r.addHexPrefix = function (e) {
                                            return "string" != typeof e || n.isHexPrefixed(e) ? e : "0x" + e;
                                        }),
                                        (r.baToJSON = function (e) {
                                            if (t.isBuffer(e)) return "0x" + e.toString("hex");
                                            if (e instanceof Array) {
                                                for (var n = [], i = 0; i < e.length; i++) n.push(r.baToJSON(e[i]));
                                                return n;
                                            }
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2116,
            { "bn.js": 1684, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.KECCAK256_RLP = r.KECCAK256_RLP_S = r.KECCAK256_RLP_ARRAY = r.KECCAK256_RLP_ARRAY_S = r.KECCAK256_NULL = r.KECCAK256_NULL_S = r.TWO_POW256 = r.MAX_INTEGER = void 0);
                                    var n = e("bn.js");
                                    (r.MAX_INTEGER = new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)),
                                        (r.TWO_POW256 = new n("10000000000000000000000000000000000000000000000000000000000000000", 16)),
                                        (r.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
                                        (r.KECCAK256_NULL = t.from(r.KECCAK256_NULL_S, "hex")),
                                        (r.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
                                        (r.KECCAK256_RLP_ARRAY = t.from(r.KECCAK256_RLP_ARRAY_S, "hex")),
                                        (r.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                                        (r.KECCAK256_RLP = t.from(r.KECCAK256_RLP_S, "hex"));
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2117,
            { "./bytes": 2115, buffer: 1728, "create-hash": 1829, "ethereum-cryptography/keccak": 2052, "ethjs-util": 2124, rlp: 5010 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.rlphash = r.ripemd160 = r.sha256 = r.keccak256 = r.keccak = void 0);
                                    var n = e("ethereum-cryptography/keccak"),
                                        i = n.keccak224,
                                        a = n.keccak384,
                                        s = n.keccak256,
                                        o = n.keccak512,
                                        c = e("create-hash"),
                                        u = e("ethjs-util"),
                                        l = e("rlp"),
                                        h = e("./bytes");
                                    (r.keccak = function (e, r) {
                                        switch ((void 0 === r && (r = 256), (e = "string" != typeof e || u.isHexString(e) ? h.toBuffer(e) : t.from(e, "utf8")), r || (r = 256), r)) {
                                            case 224:
                                                return i(e);
                                            case 256:
                                                return s(e);
                                            case 384:
                                                return a(e);
                                            case 512:
                                                return o(e);
                                            default:
                                                throw new Error("Invald algorithm: keccak" + r);
                                        }
                                    }),
                                        (r.keccak256 = function (e) {
                                            return r.keccak(e);
                                        }),
                                        (r.sha256 = function (e) {
                                            return (e = h.toBuffer(e)), c("sha256").update(e).digest();
                                        }),
                                        (r.ripemd160 = function (e, t) {
                                            e = h.toBuffer(e);
                                            var r = c("rmd160").update(e).digest();
                                            return !0 === t ? h.setLength(r, 32) : r;
                                        }),
                                        (r.rlphash = function (e) {
                                            return r.keccak(l.encode(e));
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2118,
            { "./account": 2114, "./bytes": 2115, "./constants": 2116, "./hash": 2117, "./object": 2119, "./secp256k1v3-adapter": 2120, "./signature": 2123, "bn.js": 1684, "ethjs-util": 2124, rlp: 5010 },
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
                                i =
                                    (this && this.__exportStar) ||
                                    function (e, t) {
                                        for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r);
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.secp256k1 = r.rlp = r.BN = void 0);
                            var a = e("./secp256k1v3-adapter");
                            r.secp256k1 = a;
                            var s = e("ethjs-util"),
                                o = e("bn.js");
                            r.BN = o;
                            var c = e("rlp");
                            (r.rlp = c), Object.assign(r, s), i(e("./constants"), r), i(e("./account"), r), i(e("./hash"), r), i(e("./signature"), r), i(e("./bytes"), r), i(e("./object"), r);
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2119,
            { "./bytes": 2115, assert: 1463, buffer: 1728, "ethjs-util": 2124, rlp: 5010 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.defineProperties = void 0);
                                    var n = e("assert"),
                                        i = e("ethjs-util"),
                                        a = e("rlp"),
                                        s = e("./bytes");
                                    r.defineProperties = function (e, r, o) {
                                        if (
                                            ((e.raw = []),
                                            (e._fields = []),
                                            (e.toJSON = function (t) {
                                                if ((void 0 === t && (t = !1), t)) {
                                                    var r = {};
                                                    return (
                                                        e._fields.forEach(function (t) {
                                                            r[t] = "0x" + e[t].toString("hex");
                                                        }),
                                                        r
                                                    );
                                                }
                                                return s.baToJSON(e.raw);
                                            }),
                                            (e.serialize = function () {
                                                return a.encode(e.raw);
                                            }),
                                            r.forEach(function (r, i) {
                                                function a() {
                                                    return e.raw[i];
                                                }
                                                function o(a) {
                                                    "00" !== (a = s.toBuffer(a)).toString("hex") || r.allowZero || (a = t.allocUnsafe(0)),
                                                        r.allowLess && r.length
                                                            ? ((a = s.stripZeros(a)), n(r.length >= a.length, "The field " + r.name + " must not have more " + r.length + " bytes"))
                                                            : (r.allowZero && 0 === a.length) || !r.length || n(r.length === a.length, "The field " + r.name + " must have byte length of " + r.length),
                                                        (e.raw[i] = a);
                                                }
                                                e._fields.push(r.name),
                                                    Object.defineProperty(e, r.name, { enumerable: !0, configurable: !0, get: a, set: o }),
                                                    r.default && (e[r.name] = r.default),
                                                    r.alias && Object.defineProperty(e, r.alias, { enumerable: !1, configurable: !0, set: o, get: a });
                                            }),
                                            o)
                                        )
                                            if (("string" == typeof o && (o = t.from(i.stripHexPrefix(o), "hex")), t.isBuffer(o) && (o = a.decode(o)), Array.isArray(o))) {
                                                if (o.length > e._fields.length) throw new Error("wrong number of fields in data");
                                                o.forEach(function (t, r) {
                                                    e[e._fields[r]] = s.toBuffer(t);
                                                });
                                            } else {
                                                if ("object" != typeof o) throw new Error("invalid data");
                                                var c = Object.keys(o);
                                                r.forEach(function (t) {
                                                    -1 !== c.indexOf(t.name) && (e[t.name] = o[t.name]), -1 !== c.indexOf(t.alias) && (e[t.alias] = o[t.alias]);
                                                });
                                            }
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2120,
            { "./secp256k1v3-lib/der": 2121, "./secp256k1v3-lib/index": 2122, buffer: 1728, "ethereum-cryptography/secp256k1": 2084 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.ecdhUnsafe = r.ecdh = r.recover = r.verify = r.sign = r.signatureImportLax = r.signatureImport = r.signatureExport = r.signatureNormalize = r.publicKeyCombine = r.publicKeyTweakMul = r.publicKeyTweakAdd = r.publicKeyVerify = r.publicKeyConvert = r.publicKeyCreate = r.privateKeyTweakMul = r.privateKeyTweakAdd = r.privateKeyModInverse = r.privateKeyNegate = r.privateKeyImport = r.privateKeyExport = r.privateKeyVerify = void 0);
                                    var n = e("ethereum-cryptography/secp256k1"),
                                        i = e("./secp256k1v3-lib/index"),
                                        a = e("./secp256k1v3-lib/der");
                                    (r.privateKeyVerify = function (e) {
                                        return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e));
                                    }),
                                        (r.privateKeyExport = function (e, t) {
                                            if (32 !== e.length) throw new RangeError("private key length is invalid");
                                            var r = i.privateKeyExport(e, t);
                                            return a.privateKeyExport(e, r, t);
                                        }),
                                        (r.privateKeyImport = function (e) {
                                            if (null !== (e = a.privateKeyImport(e)) && 32 === e.length && r.privateKeyVerify(e)) return e;
                                            throw new Error("couldn't import from DER format");
                                        }),
                                        (r.privateKeyNegate = function (e) {
                                            return t.from(n.privateKeyNegate(Uint8Array.from(e)));
                                        }),
                                        (r.privateKeyModInverse = function (e) {
                                            if (32 !== e.length) throw new Error("private key length is invalid");
                                            return t.from(i.privateKeyModInverse(Uint8Array.from(e)));
                                        }),
                                        (r.privateKeyTweakAdd = function (e, r) {
                                            return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r));
                                        }),
                                        (r.privateKeyTweakMul = function (e, r) {
                                            return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)));
                                        }),
                                        (r.publicKeyCreate = function (e, r) {
                                            return t.from(n.publicKeyCreate(Uint8Array.from(e), r));
                                        }),
                                        (r.publicKeyConvert = function (e, r) {
                                            return t.from(n.publicKeyConvert(Uint8Array.from(e), r));
                                        }),
                                        (r.publicKeyVerify = function (e) {
                                            return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e));
                                        }),
                                        (r.publicKeyTweakAdd = function (e, r, i) {
                                            return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), i));
                                        }),
                                        (r.publicKeyTweakMul = function (e, r, i) {
                                            return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), i));
                                        }),
                                        (r.publicKeyCombine = function (e, r) {
                                            var i = [];
                                            return (
                                                e.forEach(function (e) {
                                                    i.push(Uint8Array.from(e));
                                                }),
                                                t.from(n.publicKeyCombine(i, r))
                                            );
                                        }),
                                        (r.signatureNormalize = function (e) {
                                            return t.from(n.signatureNormalize(Uint8Array.from(e)));
                                        }),
                                        (r.signatureExport = function (e) {
                                            return t.from(n.signatureExport(Uint8Array.from(e)));
                                        }),
                                        (r.signatureImport = function (e) {
                                            return t.from(n.signatureImport(Uint8Array.from(e)));
                                        }),
                                        (r.signatureImportLax = function (e) {
                                            if (0 === e.length) throw new RangeError("signature length is invalid");
                                            var t = a.signatureImportLax(e);
                                            if (null === t) throw new Error("couldn't parse DER signature");
                                            return i.signatureImport(t);
                                        }),
                                        (r.sign = function (e, r, i) {
                                            if (null === i) throw new TypeError("options should be an Object");
                                            var a = undefined;
                                            if (i) {
                                                if (((a = {}), null === i.data)) throw new TypeError("options.data should be a Buffer");
                                                if (i.data) {
                                                    if (32 != i.data.length) throw new RangeError("options.data length is invalid");
                                                    a.data = new Uint8Array(i.data);
                                                }
                                                if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                                                i.noncefn &&
                                                    (a.noncefn = function (e, r, n, a, s) {
                                                        var o = null != n ? t.from(n) : null,
                                                            c = null != a ? t.from(a) : null,
                                                            u = t.from("");
                                                        return i.noncefn && (u = i.noncefn(t.from(e), t.from(r), o, c, s)), new Uint8Array(u);
                                                    });
                                            }
                                            var s = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), a);
                                            return { signature: t.from(s.signature), recovery: s.recid };
                                        }),
                                        (r.verify = function (e, t, r) {
                                            return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r);
                                        }),
                                        (r.recover = function (e, r, i, a) {
                                            return t.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(e), a));
                                        }),
                                        (r.ecdh = function (e, r) {
                                            return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}));
                                        }),
                                        (r.ecdhUnsafe = function (e, r, n) {
                                            if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
                                            if (32 !== r.length) throw new RangeError("private key length is invalid");
                                            return t.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n));
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2121,
            { buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (e) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var t = e.from([
                                            48,
                                            129,
                                            211,
                                            2,
                                            1,
                                            1,
                                            4,
                                            32,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            160,
                                            129,
                                            133,
                                            48,
                                            129,
                                            130,
                                            2,
                                            1,
                                            1,
                                            48,
                                            44,
                                            6,
                                            7,
                                            42,
                                            134,
                                            72,
                                            206,
                                            61,
                                            1,
                                            1,
                                            2,
                                            33,
                                            0,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            254,
                                            255,
                                            255,
                                            252,
                                            47,
                                            48,
                                            6,
                                            4,
                                            1,
                                            0,
                                            4,
                                            1,
                                            7,
                                            4,
                                            33,
                                            2,
                                            121,
                                            190,
                                            102,
                                            126,
                                            249,
                                            220,
                                            187,
                                            172,
                                            85,
                                            160,
                                            98,
                                            149,
                                            206,
                                            135,
                                            11,
                                            7,
                                            2,
                                            155,
                                            252,
                                            219,
                                            45,
                                            206,
                                            40,
                                            217,
                                            89,
                                            242,
                                            129,
                                            91,
                                            22,
                                            248,
                                            23,
                                            152,
                                            2,
                                            33,
                                            0,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            254,
                                            186,
                                            174,
                                            220,
                                            230,
                                            175,
                                            72,
                                            160,
                                            59,
                                            191,
                                            210,
                                            94,
                                            140,
                                            208,
                                            54,
                                            65,
                                            65,
                                            2,
                                            1,
                                            1,
                                            161,
                                            36,
                                            3,
                                            34,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                        ]),
                                        n = e.from([
                                            48,
                                            130,
                                            1,
                                            19,
                                            2,
                                            1,
                                            1,
                                            4,
                                            32,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            160,
                                            129,
                                            165,
                                            48,
                                            129,
                                            162,
                                            2,
                                            1,
                                            1,
                                            48,
                                            44,
                                            6,
                                            7,
                                            42,
                                            134,
                                            72,
                                            206,
                                            61,
                                            1,
                                            1,
                                            2,
                                            33,
                                            0,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            254,
                                            255,
                                            255,
                                            252,
                                            47,
                                            48,
                                            6,
                                            4,
                                            1,
                                            0,
                                            4,
                                            1,
                                            7,
                                            4,
                                            65,
                                            4,
                                            121,
                                            190,
                                            102,
                                            126,
                                            249,
                                            220,
                                            187,
                                            172,
                                            85,
                                            160,
                                            98,
                                            149,
                                            206,
                                            135,
                                            11,
                                            7,
                                            2,
                                            155,
                                            252,
                                            219,
                                            45,
                                            206,
                                            40,
                                            217,
                                            89,
                                            242,
                                            129,
                                            91,
                                            22,
                                            248,
                                            23,
                                            152,
                                            72,
                                            58,
                                            218,
                                            119,
                                            38,
                                            163,
                                            196,
                                            101,
                                            93,
                                            164,
                                            251,
                                            252,
                                            14,
                                            17,
                                            8,
                                            168,
                                            253,
                                            23,
                                            180,
                                            72,
                                            166,
                                            133,
                                            84,
                                            25,
                                            156,
                                            71,
                                            208,
                                            143,
                                            251,
                                            16,
                                            212,
                                            184,
                                            2,
                                            33,
                                            0,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            255,
                                            254,
                                            186,
                                            174,
                                            220,
                                            230,
                                            175,
                                            72,
                                            160,
                                            59,
                                            191,
                                            210,
                                            94,
                                            140,
                                            208,
                                            54,
                                            65,
                                            65,
                                            2,
                                            1,
                                            1,
                                            161,
                                            68,
                                            3,
                                            66,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                            0,
                                        ]);
                                    (r.privateKeyExport = function (r, i, a) {
                                        void 0 === a && (a = !0);
                                        var s = e.from(a ? t : n);
                                        return r.copy(s, a ? 8 : 9), i.copy(s, a ? 181 : 214), s;
                                    }),
                                        (r.privateKeyImport = function (e) {
                                            var t = e.length,
                                                r = 0;
                                            if (t < r + 1 || 48 !== e[r]) return null;
                                            if (t < (r += 1) + 1 || !(128 & e[r])) return null;
                                            var n = 127 & e[r];
                                            if (n < 1 || n > 2) return null;
                                            if (t < (r += 1) + n) return null;
                                            var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                                            return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1]
                                                ? null
                                                : e.slice(r + 2, r + 2 + e[r + 1]);
                                        }),
                                        (r.signatureImportLax = function (t) {
                                            var r = e.alloc(32, 0),
                                                n = e.alloc(32, 0),
                                                i = t.length,
                                                a = 0;
                                            if (48 !== t[a++]) return null;
                                            var s = t[a++];
                                            if (128 & s && (a += s - 128) > i) return null;
                                            if (2 !== t[a++]) return null;
                                            var o = t[a++];
                                            if (128 & o) {
                                                if (a + (s = o - 128) > i) return null;
                                                for (; s > 0 && 0 === t[a]; a += 1, s -= 1);
                                                for (o = 0; s > 0; a += 1, s -= 1) o = (o << 8) + t[a];
                                            }
                                            if (o > i - a) return null;
                                            var c = a;
                                            if (((a += o), 2 !== t[a++])) return null;
                                            var u = t[a++];
                                            if (128 & u) {
                                                if (a + (s = u - 128) > i) return null;
                                                for (; s > 0 && 0 === t[a]; a += 1, s -= 1);
                                                for (u = 0; s > 0; a += 1, s -= 1) u = (u << 8) + t[a];
                                            }
                                            if (u > i - a) return null;
                                            var l = a;
                                            for (a += u; o > 0 && 0 === t[c]; o -= 1, c += 1);
                                            if (o > 32) return null;
                                            var h = t.slice(c, c + o);
                                            for (h.copy(r, 32 - h.length); u > 0 && 0 === t[l]; u -= 1, l += 1);
                                            if (u > 32) return null;
                                            var d = t.slice(l, l + u);
                                            return d.copy(n, 32 - d.length), { r: r, s: n };
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2122,
            { "bn.js": 1684, buffer: 1728, elliptic: 1925 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var n = e("bn.js"),
                                        i = new (0, e("elliptic").ec)("secp256k1"),
                                        a = i.curve;
                                    (r.privateKeyExport = function (e, t) {
                                        void 0 === t && (t = !0);
                                        var r = new n(e);
                                        if (r.ucmp(a.n) >= 0) throw new Error("couldn't export to DER format");
                                        var o = i.g.mul(r);
                                        return s(o.getX(), o.getY(), t);
                                    }),
                                        (r.privateKeyModInverse = function (e) {
                                            var r = new n(e);
                                            if (r.ucmp(a.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
                                            return r.invm(a.n).toArrayLike(t, "be", 32);
                                        }),
                                        (r.signatureImport = function (e) {
                                            var r = new n(e.r);
                                            r.ucmp(a.n) >= 0 && (r = new n(0));
                                            var i = new n(e.s);
                                            return i.ucmp(a.n) >= 0 && (i = new n(0)), t.concat([r.toArrayLike(t, "be", 32), i.toArrayLike(t, "be", 32)]);
                                        }),
                                        (r.ecdhUnsafe = function (e, t, r) {
                                            void 0 === r && (r = !0);
                                            var o = i.keyFromPublic(e),
                                                c = new n(t);
                                            if (c.ucmp(a.n) >= 0 || c.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                                            var u = o.pub.mul(c);
                                            return s(u.getX(), u.getY(), r);
                                        });
                                    var s = function (e, r, n) {
                                        var i;
                                        return (
                                            n
                                                ? (((i = t.alloc(33))[0] = r.isOdd() ? 3 : 2), e.toArrayLike(t, "be", 32).copy(i, 1))
                                                : (((i = t.alloc(65))[0] = 4), e.toArrayLike(t, "be", 32).copy(i, 1), r.toArrayLike(t, "be", 32).copy(i, 33)),
                                            i
                                        );
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2123,
            { "./bytes": 2115, "./hash": 2117, "./secp256k1v3-adapter": 2120, "bn.js": 1684, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.hashPersonalMessage = r.isValidSignature = r.fromRpcSig = r.toRpcSig = r.ecrecover = r.ecsign = void 0);
                                    var n = e("./secp256k1v3-adapter"),
                                        i = e("bn.js"),
                                        a = e("./bytes"),
                                        s = e("./hash");
                                    function o(e, t) {
                                        return t ? e - (2 * t + 35) : e - 27;
                                    }
                                    function c(e) {
                                        return 0 === e || 1 === e;
                                    }
                                    (r.ecsign = function (e, t, r) {
                                        var i = n.sign(e, t),
                                            a = i.recovery;
                                        return { r: i.signature.slice(0, 32), s: i.signature.slice(32, 64), v: r ? a + (2 * r + 35) : a + 27 };
                                    }),
                                        (r.ecrecover = function (e, r, i, s, u) {
                                            var l = t.concat([a.setLength(i, 32), a.setLength(s, 32)], 64),
                                                h = o(r, u);
                                            if (!c(h)) throw new Error("Invalid signature v value");
                                            var d = n.recover(e, l, h);
                                            return n.publicKeyConvert(d, !1).slice(1);
                                        }),
                                        (r.toRpcSig = function (e, r, n, i) {
                                            if (!c(o(e, i))) throw new Error("Invalid signature v value");
                                            return a.bufferToHex(t.concat([a.setLengthLeft(r, 32), a.setLengthLeft(n, 32), a.toBuffer(e)]));
                                        }),
                                        (r.fromRpcSig = function (e) {
                                            var t = a.toBuffer(e);
                                            if (65 !== t.length) throw new Error("Invalid signature length");
                                            var r = t[64];
                                            return r < 27 && (r += 27), { v: r, r: t.slice(0, 32), s: t.slice(32, 64) };
                                        }),
                                        (r.isValidSignature = function (e, t, r, n, a) {
                                            void 0 === n && (n = !0);
                                            var s = new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                                                u = new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                                            if (32 !== t.length || 32 !== r.length) return !1;
                                            if (!c(o(e, a))) return !1;
                                            var l = new i(t),
                                                h = new i(r);
                                            return !(l.isZero() || l.gt(u) || h.isZero() || h.gt(u)) && (!n || 1 !== h.cmp(s));
                                        }),
                                        (r.hashPersonalMessage = function (e) {
                                            var r = t.from("Ethereum Signed Message:\n" + e.length.toString(), "utf-8");
                                            return s.keccak(t.concat([r, e]));
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util" },
        ],
        [
            2124,
            { buffer: 1728, "is-hex-prefixed": 4467, "strip-hex-prefix": 5104 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (r) {
                                (function () {
                                    var n = e("is-hex-prefixed"),
                                        i = e("strip-hex-prefix");
                                    function a(e) {
                                        var t = e;
                                        if ("string" != typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
                                        return t.length % 2 && (t = "0" + t), t;
                                    }
                                    function s(e) {
                                        return "0x" + e.toString(16);
                                    }
                                    t.exports = {
                                        arrayContainsArray: function (e, t, r) {
                                            if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
                                            if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
                                            return t[Boolean(r) ? "some" : "every"](function (t) {
                                                return e.indexOf(t) >= 0;
                                            });
                                        },
                                        intToBuffer: function (e) {
                                            var t = s(e);
                                            return new r(a(t.slice(2)), "hex");
                                        },
                                        getBinarySize: function (e) {
                                            if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                                            return r.byteLength(e, "utf8");
                                        },
                                        isHexPrefixed: n,
                                        stripHexPrefix: i,
                                        padToEven: a,
                                        intToHex: s,
                                        fromAscii: function (e) {
                                            for (var t = "", r = 0; r < e.length; r++) {
                                                var n = e.charCodeAt(r).toString(16);
                                                t += n.length < 2 ? "0" + n : n;
                                            }
                                            return "0x" + t;
                                        },
                                        fromUtf8: function (e) {
                                            return "0x" + a(new r(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "");
                                        },
                                        toAscii: function (e) {
                                            var t = "",
                                                r = 0,
                                                n = e.length;
                                            for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
                                                var i = parseInt(e.substr(r, 2), 16);
                                                t += String.fromCharCode(i);
                                            }
                                            return t;
                                        },
                                        toUtf8: function (e) {
                                            return new r(a(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8");
                                        },
                                        getKeys: function (e, t, r) {
                                            if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
                                            if ("string" != typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
                                            for (var n = [], i = 0; i < e.length; i++) {
                                                var a = e[i][t];
                                                if (r && !a) a = "";
                                                else if ("string" != typeof a) throw new Error("invalid abi");
                                                n.push(a);
                                            }
                                            return n;
                                        },
                                        isHexString: function (e, t) {
                                            return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t);
                                        },
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "ethereumjs-wallet>ethereumjs-util>ethjs-util" },
        ],
        [
            2125,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
                            t.exports = function (e, t) {
                                var r = t || 0,
                                    i = n;
                                return [
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                    "-",
                                    i[e[r++]],
                                    i[e[r++]],
                                    "-",
                                    i[e[r++]],
                                    i[e[r++]],
                                    "-",
                                    i[e[r++]],
                                    i[e[r++]],
                                    "-",
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                    i[e[r++]],
                                ].join("");
                            };
                        };
                    };
            },
            { package: "ethereumjs-wallet>uuid" },
        ],
        [
            2126,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                                ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
                            if (n) {
                                var i = new Uint8Array(16);
                                t.exports = function () {
                                    return n(i), i;
                                };
                            } else {
                                var a = new Array(16);
                                t.exports = function () {
                                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (a[t] = (e >>> ((3 & t) << 3)) & 255);
                                    return a;
                                };
                            }
                        };
                    };
            },
            { package: "ethereumjs-wallet>uuid" },
        ],
        [
            2127,
            { "./lib/bytesToUuid": 2125, "./lib/rng": 2126 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = e("./lib/rng"),
                                i = e("./lib/bytesToUuid");
                            t.exports = function (e, t, r) {
                                var a = (t && r) || 0;
                                "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
                                var s = (e = e || {}).random || (e.rng || n)();
                                if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) for (var o = 0; o < 16; ++o) t[a + o] = s[o];
                                return t || i(s);
                            };
                        };
                    };
            },
            { package: "ethereumjs-wallet>uuid" },
        ],
        [
            2128,
            { "./index.js": 2113, "aes-js": 1422, crypto: 1834, "ethereumjs-util": 2118, "safe-buffer": 5012, scryptsy: 5021, utf8: 5176 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                          },
                                i = e("./index.js"),
                                a = e("ethereumjs-util"),
                                s = e("crypto"),
                                o = e("scryptsy"),
                                c = e("utf8"),
                                u = e("aes-js"),
                                l = e("safe-buffer").Buffer;
                            function h(e, t) {
                                if (!e) throw new Error(t || "Assertion failed");
                            }
                            var d = {};
                            (d.fromEtherWallet = function (e, t) {
                                var r,
                                    a = "object" === (void 0 === e ? "undefined" : n(e)) ? e : JSON.parse(e);
                                if (a.locked) {
                                    if ("string" != typeof t) throw new Error("Password required");
                                    if (t.length < 7) throw new Error("Password must be at least 7 characters");
                                    var o = a.encrypted ? a.private.slice(0, 128) : a.private;
                                    if (
                                        ((o = (function (e) {
                                            var t = l.from(e, "base64");
                                            return "Salted__" === t.slice(0, 8).toString() ? { salt: t.slice(8, 16), ciphertext: t.slice(16) } : { ciphertext: t };
                                        })(o)),
                                        !o.salt)
                                    )
                                        throw new Error("Unsupported EtherWallet key format");
                                    var u = (function (e, t, r) {
                                        function n(n) {
                                            var i = s.createHash(r.digest || "md5");
                                            i.update(n), i.update(e), i.update(t), (n = i.digest());
                                            for (var a = 1; a < (r.count || 1); a++) (i = s.createHash(r.digest || "md5")).update(n), (n = i.digest());
                                            return n;
                                        }
                                        for (var i = r.keysize || 16, a = r.ivsize || 16, o = [], c = 0; l.concat(o).length < i + a; ) (o[c] = n(0 === c ? l.alloc(0) : o[c - 1])), c++;
                                        var u = l.concat(o);
                                        return { key: u.slice(0, i), iv: u.slice(i, i + a) };
                                    })(l.from(t), o.salt, { keysize: 32, ivsize: 16 });
                                    (r = (function (e, t) {
                                        return l.concat([e.update(t), e.final()]);
                                    })(s.createDecipheriv("aes-256-cbc", u.key, u.iv), l.from(o.ciphertext))),
                                        (r = l.from(c.decode(r.toString()), "hex"));
                                } else {
                                    if (64 !== a.private.length) throw new Error("Invalid private key length");
                                    r = l.from(a.private, "hex");
                                }
                                var h = new i(r);
                                if (h.getAddressString() !== a.address) throw new Error("Invalid private key or address");
                                return h;
                            }),
                                (d.fromEtherCamp = function (e) {
                                    return new i(a.keccak256(l.from(e)));
                                }),
                                (d.fromKryptoKit = function (e, t) {
                                    "#" === e[0] && (e = e.slice(1));
                                    var r,
                                        n = e[0];
                                    if (((e = e.slice(1)), "d" === n)) r = a.sha256(l.from(e));
                                    else {
                                        if ("q" !== n) throw new Error("Unsupported or invalid entropy type");
                                        if ("string" != typeof t) throw new Error("Password required");
                                        var s = a.sha256(l.from(e.slice(0, 30))),
                                            c = e.slice(30, 46),
                                            h = (function (e) {
                                                function t(e) {
                                                    try {
                                                        return decodeURIComponent(e);
                                                    } catch (e) {
                                                        return String.fromCharCode(65533);
                                                    }
                                                }
                                                for (var r = "", n = "", i = 0; i < e.length; i++) e[i] <= 127 ? ((r += t(n) + String.fromCharCode(e[i])), (n = "")) : (n += "%" + e[i].toString(16));
                                                return l.from(r + t(n));
                                            })(s),
                                            d = o(l.from(t, "utf8"), h, 16384, 8, 1, 32),
                                            f = new u.ModeOfOperation.ecb(d);
                                        if (((r = l.concat([l.from(f.decrypt(s.slice(0, 16))), l.from(f.decrypt(s.slice(16, 32)))])), c.length > 0 && c !== a.sha256(a.sha256(r)).slice(0, 8).toString("hex")))
                                            throw new Error("Failed to decrypt input - possibly invalid passphrase");
                                    }
                                    return new i(r);
                                }),
                                (d.fromQuorumWallet = function (e, t) {
                                    h(e.length >= 10), h(t.length >= 10);
                                    var r = e + t;
                                    return (r = s.pbkdf2Sync(r, r, 2e3, 32, "sha256")), new i(r);
                                }),
                                (t.exports = d);
                        };
                    };
            },
            { package: "ethereumjs-wallet" },
        ],
        [
            22,
            { "../../../../shared/constants/network": 5333, "../../../../shared/constants/transaction": 5340 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.formatTxMetaForRpcResult = function (e) {
                                    const { r: t, s: r, v: n, hash: a, txReceipt: s, txParams: o } = e,
                                        { to: c, data: u, nonce: l, gas: h, from: d, value: f, gasPrice: p, accessList: g, maxFeePerGas: m, maxPriorityFeePerGas: v } = o,
                                        y = {
                                            v: n,
                                            r: t,
                                            s: r,
                                            to: c,
                                            gas: h,
                                            from: d,
                                            hash: a,
                                            nonce: l,
                                            input: u || "0x",
                                            value: f || "0x0",
                                            accessList: g || null,
                                            blockHash: (null == s ? void 0 : s.blockHash) || null,
                                            blockNumber: (null == s ? void 0 : s.blockNumber) || null,
                                            transactionIndex: (null == s ? void 0 : s.transactionIndex) || null,
                                        };
                                    m && v ? ((y.gasPrice = m), (y.maxFeePerGas = m), (y.maxPriorityFeePerGas = v), (y.type = i.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET)) : ((y.gasPrice = p), (y.type = i.TRANSACTION_ENVELOPE_TYPES.LEGACY));
                                    return y;
                                }),
                                (r.getNetworkDisplayName = void 0);
                            var n = e("../../../../shared/constants/network"),
                                i = e("../../../../shared/constants/transaction");
                            r.getNetworkDisplayName = (e) => n.NETWORK_TO_NAME_MAP[e];
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            23,
            { "@metamask/obs-store": 1177, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n,
                                i = e("@metamask/obs-store"),
                                a = (n = e("loglevel")) && n.__esModule ? n : { default: n };
                            r.default = class {
                                constructor(e = {}) {
                                    !(function (e, t, r) {
                                        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r);
                                    })(this, "registerOnboarding", async (e, t) => {
                                        if (this.store.getState().completedOnboarding) return void a.default.debug("Ignoring registerOnboarding; user already onboarded");
                                        const r = { ...this.store.getState().onboardingTabs };
                                        (r[e] && r[e] === t) || (a.default.debug(`Registering onboarding tab at location '${e}' with tabId '${t}'`), (r[e] = t), this.store.updateState({ onboardingTabs: r }));
                                    });
                                    const t = { seedPhraseBackedUp: null, firstTimeFlowType: null, completedOnboarding: !1, ...e.initState, onboardingTabs: {} };
                                    this.store = new i.ObservableStore(t);
                                }
                                setSeedPhraseBackedUp(e) {
                                    this.store.updateState({ seedPhraseBackedUp: e });
                                }
                                completeOnboarding() {
                                    return this.store.updateState({ completedOnboarding: !0 }), Promise.resolve(!0);
                                }
                                setFirstTimeFlowType(e) {
                                    this.store.updateState({ firstTimeFlowType: e });
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            24,
            { "../../../../shared/constants/permissions": 5334, nanoid: 4756 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.getPermissionBackgroundApiMethods = function (e) {
                                    return {
                                        addPermittedAccount: (t, r) => {
                                            const n = e.getCaveat(t, a.RestrictedMethods.eth_accounts, a.CaveatTypes.restrictReturnedAccounts);
                                            n.value.includes(r) || e.updateCaveat(t, a.RestrictedMethods.eth_accounts, a.CaveatTypes.restrictReturnedAccounts, [...n.value, r]);
                                        },
                                        removePermittedAccount: (t, r) => {
                                            const n = e.getCaveat(t, a.RestrictedMethods.eth_accounts, a.CaveatTypes.restrictReturnedAccounts);
                                            if (!n.value.includes(r)) return;
                                            const i = n.value.filter((e) => e !== r);
                                            0 === i.length ? e.revokePermission(t, a.RestrictedMethods.eth_accounts) : e.updateCaveat(t, a.RestrictedMethods.eth_accounts, a.CaveatTypes.restrictReturnedAccounts, i);
                                        },
                                        requestAccountsPermissionWithId: async (t) => {
                                            const r = (0, i.default)();
                                            return e.requestPermissions({ origin: t }, { eth_accounts: {} }, { id: r }), r;
                                        },
                                    };
                                });
                            var n,
                                i = (n = e("nanoid")) && n.__esModule ? n : { default: n },
                                a = e("../../../../shared/constants/permissions");
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            25,
            { "../../../../shared/constants/permissions": 5334, "@metamask/controllers": 1034 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.CaveatMutatorFactories = void 0);
                            var n = e("@metamask/controllers");
                            const i = {
                                [e("../../../../shared/constants/permissions").CaveatTypes.restrictReturnedAccounts]: {
                                    removeAccount: function (e, t) {
                                        const r = t.filter((t) => t !== e);
                                        if (r.length === t.length) return { operation: n.CaveatMutatorOperation.noop };
                                        if (r.length > 0) return { operation: n.CaveatMutatorOperation.updateValue, value: r };
                                        return { operation: n.CaveatMutatorOperation.revokePermission };
                                    },
                                },
                            };
                            r.CaveatMutatorFactories = i;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            26,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.WALLET_PREFIX = r.NOTIFICATION_NAMES = r.LOG_METHOD_TYPES = r.LOG_LIMIT = r.LOG_IGNORE_METHODS = void 0);
                            r.WALLET_PREFIX = "wallet_";
                            r.NOTIFICATION_NAMES = { accountsChanged: "metamask_accountsChanged", unlockStateChanged: "metamask_unlockStateChanged", chainChanged: "metamask_chainChanged" };
                            r.LOG_IGNORE_METHODS = ["wallet_registerOnboarding", "wallet_watchAsset"];
                            r.LOG_METHOD_TYPES = { restricted: "restricted", internal: "internal" };
                            r.LOG_LIMIT = 100;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            27,
            { "./background-api": 24, "./caveat-mutators": 25, "./enums": 26, "./permission-log": 28, "./selectors": 29, "./specifications": 30 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            var n = e("./caveat-mutators");
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
                            var i = e("./background-api");
                            Object.keys(i).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === i[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return i[e];
                                            },
                                        }));
                            });
                            var a = e("./enums");
                            Object.keys(a).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === a[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return a[e];
                                            },
                                        }));
                            });
                            var s = e("./permission-log");
                            Object.keys(s).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === s[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return s[e];
                                            },
                                        }));
                            });
                            var o = e("./specifications");
                            Object.keys(o).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === o[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return o[e];
                                            },
                                        }));
                            });
                            var c = e("./selectors");
                            Object.keys(c).forEach(function (e) {
                                "default" !== e &&
                                    "__esModule" !== e &&
                                    ((e in r && r[e] === c[e]) ||
                                        Object.defineProperty(r, e, {
                                            enumerable: !0,
                                            get: function () {
                                                return c[e];
                                            },
                                        }));
                            });
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            28,
            { "../../../../shared/constants/permissions": 5334, "./enums": 26, "@metamask/obs-store": 1177 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.PermissionLogController = void 0);
                            var n = e("@metamask/obs-store"),
                                i = e("../../../../shared/constants/permissions"),
                                a = e("./enums");
                            function s(e, t) {
                                return e.reduce((e, r) => ({ ...e, [r]: t }), {});
                            }
                            r.PermissionLogController = class {
                                constructor({ restrictedMethods: e, initState: t }) {
                                    (this.restrictedMethods = e), (this.store = new n.ObservableStore({ permissionHistory: {}, permissionActivityLog: [], ...t }));
                                }
                                getActivityLog() {
                                    return this.store.getState().permissionActivityLog;
                                }
                                updateActivityLog(e) {
                                    this.store.updateState({ permissionActivityLog: e });
                                }
                                getHistory() {
                                    return this.store.getState().permissionHistory;
                                }
                                updateHistory(e) {
                                    this.store.updateState({ permissionHistory: e });
                                }
                                updateAccountsHistory(e, t) {
                                    if (0 === t.length) return;
                                    const r = s(t, Date.now());
                                    this.commitNewHistory(e, { eth_accounts: { accounts: r } });
                                }
                                createMiddleware() {
                                    return (e, t, r, n) => {
                                        let i, s;
                                        const { origin: o, method: c } = e,
                                            u = c.startsWith(a.WALLET_PREFIX);
                                        if (a.LOG_IGNORE_METHODS.includes(c) || (!u && !this.restrictedMethods.has(c))) {
                                            if ("eth_requestAccounts" !== c) return void r();
                                            (i = this.logRequest(e, u)), (s = ["eth_accounts"]);
                                        } else (i = this.logRequest(e, u)), c === `${a.WALLET_PREFIX}requestPermissions` && (s = this.getRequestedMethods(e));
                                        r((e) => {
                                            const r = Date.now();
                                            this.logResponse(i, t, r), s && !t.error && t.result && this.logPermissionsHistory(s, o, t.result, r, "eth_requestAccounts" === c), e();
                                        });
                                    };
                                }
                                logRequest(e, t) {
                                    const r = { id: e.id, method: e.method, methodType: t ? a.LOG_METHOD_TYPES.internal : a.LOG_METHOD_TYPES.restricted, origin: e.origin, requestTime: Date.now(), responseTime: null, success: null };
                                    return this.commitNewActivity(r), r;
                                }
                                logResponse(e, t, r) {
                                    e && t && ((e.success = Object.hasOwnProperty.call(t, "result")), (e.responseTime = r));
                                }
                                commitNewActivity(e) {
                                    const t = this.getActivityLog();
                                    t.push(e), t.length > a.LOG_LIMIT && t.shift(), this.updateActivityLog(t);
                                }
                                logPermissionsHistory(e, t, r, n, i) {
                                    let a, o;
                                    if (i) {
                                        a = r;
                                        o = { eth_accounts: { accounts: s(a, n), lastApproved: n } };
                                    } else
                                        o = r
                                            .map((e) => ("eth_accounts" === e.parentCapability && (a = this.getAccountsFromPermission(e)), e.parentCapability))
                                            .reduce((t, r) => {
                                                if (e.includes(r))
                                                    if ("eth_accounts" === r) {
                                                        const e = s(a, n);
                                                        t[r] = { lastApproved: n, accounts: e };
                                                    } else t[r] = { lastApproved: n };
                                                return t;
                                            }, {});
                                    Object.keys(o).length > 0 && this.commitNewHistory(t, o);
                                }
                                commitNewHistory(e, t) {
                                    const r = this.getHistory(),
                                        n = { ...r[e], ...t },
                                        i = r[e] && r[e].eth_accounts,
                                        a = t.eth_accounts;
                                    if (i && a) {
                                        const e = a.lastApproved || i.lastApproved;
                                        n.eth_accounts = { lastApproved: e, accounts: { ...i.accounts, ...a.accounts } };
                                    }
                                    (r[e] = n), this.updateHistory(r);
                                }
                                getRequestedMethods(e) {
                                    return e.params && e.params[0] && "object" == typeof e.params[0] && !Array.isArray(e.params[0]) ? Object.keys(e.params[0]) : null;
                                }
                                getAccountsFromPermission(e) {
                                    if ("eth_accounts" !== e.parentCapability || !e.caveats) return [];
                                    const t = new Set();
                                    for (const r of e.caveats) if (r.type === i.CaveatTypes.restrictReturnedAccounts && Array.isArray(r.value)) for (const e of r.value) t.add(e);
                                    return [...t];
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            29,
            { "../../../../shared/constants/permissions": 5334, reselect: 5005 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.getPermittedAccountsByOrigin = r.getChangedAccounts = void 0);
                            var n = e("reselect"),
                                i = e("../../../../shared/constants/permissions");
                            const a = (0, n.createSelector)(
                                (e) => e.subjects,
                                (e) =>
                                    Object.values(e).reduce((e, t) => {
                                        var r, n;
                                        const a = null === (r = t.permissions) || void 0 === r || null === (n = r.eth_accounts) || void 0 === n ? void 0 : n.caveats.find(({ type: e }) => e === i.CaveatTypes.restrictReturnedAccounts);
                                        return a && e.set(t.origin, a.value), e;
                                    }, new Map())
                            );
                            r.getPermittedAccountsByOrigin = a;
                            r.getChangedAccounts = (e, t) => {
                                if (t === undefined) return e;
                                const r = new Map();
                                if (e === t) return r;
                                const n = new Set([...e.keys()]);
                                for (const a of t.keys()) {
                                    var i;
                                    const s = null !== (i = e.get(a)) && void 0 !== i ? i : [];
                                    t.get(a) !== s && r.set(a, s), n.delete(a);
                                }
                                for (const t of n.keys()) r.set(t, e.get(t));
                                return r;
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            3,
            { "../../../shared/modules/hexstring-utils": 5354, "../lib/util": 86, "ethereumjs-util": 2107, "ethereumjs-wallet": 2113, "ethereumjs-wallet/thirdparty": 2128, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = u(e("loglevel")),
                                i = u(e("ethereumjs-wallet")),
                                a = u(e("ethereumjs-wallet/thirdparty")),
                                s = e("ethereumjs-util"),
                                o = e("../lib/util"),
                                c = e("../../../shared/modules/hexstring-utils");
                            function u(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            var l = {
                                importAccount(e, t) {
                                    try {
                                        const r = (0, this.strategies[e])(...t);
                                        return Promise.resolve(r);
                                    } catch (e) {
                                        return Promise.reject(e);
                                    }
                                },
                                strategies: {
                                    "Private Key": (e) => {
                                        if (!e) throw new Error("Cannot import an empty key.");
                                        const t = (0, o.addHexPrefix)(e),
                                            r = (0, s.toBuffer)(t);
                                        if (!(0, s.isValidPrivate)(r)) throw new Error("Cannot import invalid private key.");
                                        return (0, c.stripHexPrefix)(t);
                                    },
                                    "JSON File": (e, t) => {
                                        let r;
                                        try {
                                            r = a.default.fromEtherWallet(e, t);
                                        } catch (a) {
                                            n.default.debug("Attempt to import as EtherWallet format failed, trying V3"), (r = i.default.fromV3(e, t, !0));
                                        }
                                        return (function (e) {
                                            const t = e.getPrivateKey();
                                            return (0, s.bufferToHex)(t);
                                        })(r);
                                    },
                                },
                            };
                            r.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            30,
            { "../../../../shared/constants/permissions": 5334, "@metamask/controllers": 1034 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.unrestrictedMethods = r.getPermissionSpecifications = r.getCaveatSpecifications = void 0);
                            var n = e("@metamask/controllers"),
                                i = e("../../../../shared/constants/permissions");
                            const a = Object.freeze({ ...i.RestrictedMethods }),
                                s = Object.freeze({ [i.CaveatTypes.restrictReturnedAccounts]: (e) => ({ type: i.CaveatTypes.restrictReturnedAccounts, value: e }) });
                            r.getCaveatSpecifications = ({ getIdentities: e }) => ({
                                [i.CaveatTypes.restrictReturnedAccounts]: {
                                    type: i.CaveatTypes.restrictReturnedAccounts,
                                    decorator: (e, t) => async (r) => (await e(r)).filter((e) => t.value.includes(e)).slice(0, 1),
                                    validator: (t, r, n) =>
                                        (function (e, t) {
                                            if (!Array.isArray(e) || 0 === e.length) throw new Error(`${a.eth_accounts} error: Expected non-empty array of Ethereum addresses.`);
                                            const r = t();
                                            e.forEach((e) => {
                                                if (!e || "string" != typeof e) throw new Error(`${a.eth_accounts} error: Expected an array of Ethereum addresses. Received: "${e}".`);
                                                if (!r[e]) throw new Error(`${a.eth_accounts} error: Received unrecognized address: "${e}".`);
                                            });
                                        })(t.value, e),
                                },
                            });
                            r.getPermissionSpecifications = ({ getAllAccounts: e, getIdentities: t, captureKeyringTypesWithMissingIdentities: r }) => ({
                                [a.eth_accounts]: {
                                    permissionType: n.PermissionType.RestrictedMethod,
                                    targetKey: a.eth_accounts,
                                    allowedCaveats: [i.CaveatTypes.restrictReturnedAccounts],
                                    factory: (e, t) => {
                                        if (Array.isArray(e.caveats)) throw new Error(`${a.eth_accounts} error: Received unexpected caveats. Any permitted caveats will be added automatically.`);
                                        if (!t.approvedAccounts) throw new Error(`${a.eth_accounts} error: No approved accounts specified.`);
                                        return (0, n.constructPermission)({ ...e, caveats: [s[i.CaveatTypes.restrictReturnedAccounts](t.approvedAccounts)] });
                                    },
                                    methodImplementation: async (n) => {
                                        const i = await e(),
                                            a = t();
                                        return i.sort((e, t) => {
                                            if (!a[e]) throw (r(a, i), new Error(`Missing identity for address: "${e}".`));
                                            if (!a[t]) throw (r(a, i), new Error(`Missing identity for address: "${t}".`));
                                            return a[e].lastSelected === a[t].lastSelected ? 0 : a[e].lastSelected === undefined ? 1 : a[t].lastSelected === undefined ? -1 : a[t].lastSelected - a[e].lastSelected;
                                        });
                                    },
                                    validator: (e, t, r) => {
                                        const { caveats: n } = e;
                                        if (!n || 1 !== n.length || n[0].type !== i.CaveatTypes.restrictReturnedAccounts)
                                            throw new Error(`${a.eth_accounts} error: Invalid caveats. There must be a single caveat of type "${i.CaveatTypes.restrictReturnedAccounts}".`);
                                    },
                                },
                            });
                            const o = Object.freeze([
                                "eth_blockNumber",
                                "eth_call",
                                "eth_chainId",
                                "eth_coinbase",
                                "eth_decrypt",
                                "eth_estimateGas",
                                "eth_feeHistory",
                                "eth_gasPrice",
                                "eth_getBalance",
                                "eth_getBlockByHash",
                                "eth_getBlockByNumber",
                                "eth_getBlockTransactionCountByHash",
                                "eth_getBlockTransactionCountByNumber",
                                "eth_getCode",
                                "eth_getEncryptionPublicKey",
                                "eth_getFilterChanges",
                                "eth_getFilterLogs",
                                "eth_getLogs",
                                "eth_getProof",
                                "eth_getStorageAt",
                                "eth_getTransactionByBlockHashAndIndex",
                                "eth_getTransactionByBlockNumberAndIndex",
                                "eth_getTransactionByHash",
                                "eth_getTransactionCount",
                                "eth_getTransactionReceipt",
                                "eth_getUncleByBlockHashAndIndex",
                                "eth_getUncleByBlockNumberAndIndex",
                                "eth_getUncleCountByBlockHash",
                                "eth_getUncleCountByBlockNumber",
                                "eth_getWork",
                                "eth_hashrate",
                                "eth_mining",
                                "eth_newBlockFilter",
                                "eth_newFilter",
                                "eth_newPendingTransactionFilter",
                                "eth_protocolVersion",
                                "eth_sendRawTransaction",
                                "eth_sendTransaction",
                                "eth_sign",
                                "eth_signTypedData",
                                "eth_signTypedData_v1",
                                "eth_signTypedData_v3",
                                "eth_signTypedData_v4",
                                "eth_submitHashrate",
                                "eth_submitWork",
                                "eth_syncing",
                                "eth_uninstallFilter",
                                "metamask_getProviderState",
                                "metamask_watchAsset",
                                "net_listening",
                                "net_peerCount",
                                "net_version",
                                "personal_ecRecover",
                                "personal_sign",
                                "wallet_watchAsset",
                                "web3_clientVersion",
                                "web3_sha3",
                            ]);
                            r.unrestrictedMethods = o;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            31,
            {
                "../../../shared/constants/hardware-wallets": 5330,
                "../../../shared/constants/network": 5333,
                "../../../shared/modules/network.utils": 5356,
                "./network": 19,
                "@metamask/obs-store": 1177,
                assert: 1463,
                "eth-sig-util": 2034,
                ethers: 2131,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n,
                                i = e("assert"),
                                a = e("@metamask/obs-store"),
                                s = e("eth-sig-util"),
                                o = e("ethers"),
                                c = (n = e("loglevel")) && n.__esModule ? n : { default: n },
                                u = e("../../../shared/constants/network"),
                                l = e("../../../shared/modules/network.utils"),
                                h = e("../../../shared/constants/hardware-wallets"),
                                d = e("./network");
                            r.default = class {
                                constructor(e = {}) {
                                    const t = {
                                        frequentRpcListDetail: [],
                                        useBlockie: !1,
                                        useNonceField: !1,
                                        usePhishDetect: !0,
                                        dismissSeedBackUpReminder: !1,
                                        useTokenDetection: !1,
                                        useCollectibleDetection: !1,
                                        openSeaEnabled: !1,
                                        advancedGasFee: null,
                                        featureFlags: { showIncomingTransactions: !0 },
                                        knownMethodData: {},
                                        currentLocale: e.initLangCode,
                                        identities: {},
                                        lostIdentities: {},
                                        forgottenPassword: !1,
                                        preferences: { autoLockTimeLimit: undefined, showFiatInTestnets: !1, showTestNetworks: !1, useNativeCurrencyAsPrimaryCurrency: !0, hideZeroBalanceTokens: !1 },
                                        ipfsGateway: u.IPFS_DEFAULT_GATEWAY_URL,
                                        infuraBlocked: null,
                                        ledgerTransportType: window.navigator.hid ? h.LEDGER_TRANSPORT_TYPES.WEBHID : h.LEDGER_TRANSPORT_TYPES.U2F,
                                        theme: "light",
                                        ...e.initState,
                                    };
                                    (this.network = e.network),
                                        (this.ethersProvider = new o.ethers.providers.Web3Provider(e.provider)),
                                        (this.store = new a.ObservableStore(t)),
                                        this.store.setMaxListeners(12),
                                        (this.openPopup = e.openPopup),
                                        (this.migrateAddressBookState = e.migrateAddressBookState),
                                        (this.tokenListController = e.tokenListController),
                                        this._subscribeToInfuraAvailability(),
                                        (global.setPreference = (e, t) => this.setFeatureFlag(e, t));
                                }
                                setPasswordForgotten(e) {
                                    this.store.updateState({ forgottenPassword: e });
                                }
                                setUseBlockie(e) {
                                    this.store.updateState({ useBlockie: e });
                                }
                                setUseNonceField(e) {
                                    this.store.updateState({ useNonceField: e });
                                }
                                setUsePhishDetect(e) {
                                    this.store.updateState({ usePhishDetect: e });
                                }
                                setUseTokenDetection(e) {
                                    this.store.updateState({ useTokenDetection: e }),
                                        this.tokenListController.updatePreventPollingOnNetworkRestart(!e),
                                        e ? this.tokenListController.start() : (this.tokenListController.clearingTokenListData(), this.tokenListController.stop());
                                }
                                setUseCollectibleDetection(e) {
                                    this.store.updateState({ useCollectibleDetection: e });
                                }
                                setOpenSeaEnabled(e) {
                                    this.store.updateState({ openSeaEnabled: e });
                                }
                                setAdvancedGasFee(e) {
                                    this.store.updateState({ advancedGasFee: e });
                                }
                                setEIP1559V2Enabled(e) {
                                    this.store.updateState({ eip1559V2Enabled: e });
                                }
                                setTheme(e) {
                                    this.store.updateState({ theme: e });
                                }
                                addKnownMethodData(e, t) {
                                    const { knownMethodData: r } = this.store.getState();
                                    (r[e] = t), this.store.updateState({ knownMethodData: r });
                                }
                                setCurrentLocale(e) {
                                    const t = ["ar", "dv", "fa", "he", "ku"].includes(e) ? "rtl" : "auto";
                                    return this.store.updateState({ currentLocale: e, textDirection: t }), t;
                                }
                                setAddresses(e) {
                                    const t = this.store.getState().identities,
                                        r = e.reduce((e, r, n) => {
                                            const i = t[r] || {};
                                            return (e[r] = { name: `Account ${n + 1}`, address: r, ...i }), e;
                                        }, {});
                                    this.store.updateState({ identities: r });
                                }
                                removeAddress(e) {
                                    const { identities: t } = this.store.getState();
                                    if (!t[e]) throw new Error(`${e} can't be deleted cause it was not found`);
                                    if ((delete t[e], this.store.updateState({ identities: t }), e === this.getSelectedAddress())) {
                                        const [e] = Object.keys(t);
                                        this.setSelectedAddress(e);
                                    }
                                    return e;
                                }
                                addAddresses(e) {
                                    const { identities: t } = this.store.getState();
                                    e.forEach((e) => {
                                        if (t[e]) return;
                                        const r = Object.keys(t).length;
                                        t[e] = { name: `Account ${r + 1}`, address: e };
                                    }),
                                        this.store.updateState({ identities: t });
                                }
                                syncAddresses(e) {
                                    if (!Array.isArray(e) || 0 === e.length) throw new Error("Expected non-empty array of addresses. Error #11201");
                                    const { identities: t, lostIdentities: r } = this.store.getState(),
                                        n = {};
                                    Object.keys(t).forEach((r) => {
                                        e.includes(r) || ((n[r] = t[r]), delete t[r]);
                                    }),
                                        Object.keys(n).length > 0 &&
                                            Object.keys(n).forEach((e) => {
                                                r[e] = n[e];
                                            }),
                                        this.store.updateState({ identities: t, lostIdentities: r }),
                                        this.addAddresses(e);
                                    let i = this.getSelectedAddress();
                                    return e.includes(i) || (([i] = e), this.setSelectedAddress(i)), i;
                                }
                                setSelectedAddress(e) {
                                    const t = (0, s.normalize)(e),
                                        { identities: r } = this.store.getState(),
                                        n = r[t];
                                    if (!n) throw new Error(`Identity for '${t} not found`);
                                    (n.lastSelected = Date.now()), this.store.updateState({ identities: r, selectedAddress: t });
                                }
                                getSelectedAddress() {
                                    return this.store.getState().selectedAddress;
                                }
                                setAccountLabel(e, t) {
                                    if (!e) throw new Error(`setAccountLabel requires a valid address, got ${String(e)}`);
                                    const r = (0, s.normalize)(e),
                                        { identities: n } = this.store.getState();
                                    return (n[r] = n[r] || {}), (n[r].name = t), this.store.updateState({ identities: n }), Promise.resolve(t);
                                }
                                async updateRpc(e) {
                                    const t = this.getFrequentRpcListDetail(),
                                        r = t.findIndex((t) => t.rpcUrl === e.rpcUrl);
                                    if (r > -1) {
                                        const n = t[r],
                                            a = { ...n, ...e };
                                        if (n.chainId !== a.chainId) {
                                            let r = n.chainId;
                                            if (!r)
                                                try {
                                                    (r = await this.ethersProvider.send("net_version")), (0, i.strict)("string" == typeof r);
                                                } catch (e) {
                                                    c.default.debug(e), c.default.warn(`Failed to get networkId from ${n.rpcUrl}; skipping address book migration`);
                                                }
                                            let s = !1;
                                            const o = Object.values(u.BUILT_IN_NETWORKS).map((e) => e.networkId),
                                                l = t.filter((t) => t.rpcUrl !== e.rpcUrl);
                                            (o.includes(r) || l.some((e) => e.chainId === r)) && (s = !0), this.migrateAddressBookState(r, a.chainId, s);
                                        }
                                        (t[r] = a), this.store.updateState({ frequentRpcListDetail: t });
                                    } else {
                                        const { rpcUrl: t, chainId: r, ticker: n, nickname: i, rpcPrefs: a = {} } = e;
                                        this.addToFrequentRpcList(t, r, n, i, a);
                                    }
                                }
                                addToFrequentRpcList(e, t, r = "ETH", n = "", i = {}) {
                                    const a = this.getFrequentRpcListDetail(),
                                        s = a.findIndex((t) => t.rpcUrl === e);
                                    if ((-1 !== s && a.splice(s, 1), !(0, l.isPrefixedFormattedHexString)(t))) throw new Error(`Invalid chainId: "${t}"`);
                                    a.push({ rpcUrl: e, chainId: t, ticker: r, nickname: n, rpcPrefs: i }), this.store.updateState({ frequentRpcListDetail: a });
                                }
                                removeFromFrequentRpcList(e) {
                                    const t = this.getFrequentRpcListDetail(),
                                        r = t.findIndex((t) => t.rpcUrl === e);
                                    return -1 !== r && t.splice(r, 1), this.store.updateState({ frequentRpcListDetail: t }), Promise.resolve(t);
                                }
                                getFrequentRpcListDetail() {
                                    return this.store.getState().frequentRpcListDetail;
                                }
                                setFeatureFlag(e, t) {
                                    const r = { ...this.store.getState().featureFlags, [e]: t };
                                    return this.store.updateState({ featureFlags: r }), Promise.resolve(r);
                                }
                                setPreference(e, t) {
                                    const r = { ...this.getPreferences(), [e]: t };
                                    return this.store.updateState({ preferences: r }), Promise.resolve(r);
                                }
                                getPreferences() {
                                    return this.store.getState().preferences;
                                }
                                getIpfsGateway() {
                                    return this.store.getState().ipfsGateway;
                                }
                                setIpfsGateway(e) {
                                    return this.store.updateState({ ipfsGateway: e }), Promise.resolve(e);
                                }
                                setLedgerTransportPreference(e) {
                                    return this.store.updateState({ ledgerTransportType: e }), e;
                                }
                                getLedgerTransportPreference() {
                                    return this.store.getState().ledgerTransportType;
                                }
                                async setDismissSeedBackUpReminder(e) {
                                    await this.store.updateState({ dismissSeedBackUpReminder: e });
                                }
                                _subscribeToInfuraAvailability() {
                                    this.network.on(d.NETWORK_EVENTS.INFURA_IS_BLOCKED, () => {
                                        this._setInfuraBlocked(!0);
                                    }),
                                        this.network.on(d.NETWORK_EVENTS.INFURA_IS_UNBLOCKED, () => {
                                            this._setInfuraBlocked(!1);
                                        });
                                }
                                _setInfuraBlocked(e) {
                                    const { infuraBlocked: t } = this.store.getState();
                                    t !== e && this.store.updateState({ infuraBlocked: e });
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            32,
            {
                "../../../shared/constants/gas": 5329,
                "../../../shared/constants/smartTransactions": 5336,
                "../../../shared/constants/swaps": 5337,
                "../../../shared/constants/time": 5338,
                "../../../shared/lib/fetch-with-cache": 5342,
                "../../../shared/lib/swaps-utils": 5345,
                "../../../shared/lib/transactions-controller-utils": 5347,
                "../../../shared/modules/conversion.utils": 5351,
                "../../../shared/modules/string-utils": 5361,
                "../../../shared/modules/swaps.utils": 5362,
                "./network": 19,
                "@metamask/obs-store": 1177,
                "bignumber.js": 1637,
                ethers: 2131,
                "human-standard-token-abi": 4452,
                lodash: 4694,
                loglevel: 4707,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.utils = r.default = void 0);
                            var n = e("ethers"),
                                i = E(e("loglevel")),
                                a = E(e("bignumber.js")),
                                s = e("@metamask/obs-store"),
                                o = e("lodash"),
                                c = E(e("human-standard-token-abi")),
                                u = e("../../../shared/modules/conversion.utils"),
                                l = e("../../../shared/constants/swaps"),
                                h = e("../../../shared/constants/gas"),
                                d = e("../../../shared/constants/smartTransactions"),
                                f = e("../../../shared/modules/swaps.utils"),
                                p = e("../../../shared/lib/swaps-utils"),
                                g = E(e("../../../shared/lib/fetch-with-cache")),
                                m = e("../../../shared/constants/time"),
                                v = e("../../../shared/modules/string-utils"),
                                y = e("../../../shared/lib/transactions-controller-utils"),
                                w = e("./network");
                            function E(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const S = 25e5,
                                T = m.MINUTE;
                            function _(e = 25e5, t = 0, r = 0) {
                                const n = new a.default(e, 10).minus(t, 10);
                                return !n.lt(0) && n.lt(r, 16) ? `0x${n.toString(16)}` : r;
                            }
                            const b = {
                                quotes: {},
                                quotesPollingLimitEnabled: !1,
                                fetchParams: null,
                                tokens: null,
                                tradeTxId: null,
                                approveTxId: null,
                                quotesLastFetched: null,
                                customMaxGas: "",
                                customGasPrice: null,
                                customMaxFeePerGas: null,
                                customMaxPriorityFeePerGas: null,
                                swapsUserFeeLevel: "",
                                selectedAggId: null,
                                customApproveTxData: "",
                                errorKey: "",
                                topAggId: null,
                                routeState: "",
                                swapsFeatureIsLive: !0,
                                saveFetchedQuotes: !1,
                                swapsQuoteRefreshTime: T,
                                swapsQuotePrefetchingRefreshTime: T,
                                swapsStxBatchStatusRefreshTime: d.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
                                swapsStxGetTransactionsRefreshTime: d.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
                                swapsStxMaxFeeMultiplier: d.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER,
                                swapsFeatureFlags: {},
                            };
                            function P(e) {
                                if (!Array.isArray(e) || 0 === e.length) throw new Error("Expected non-empty array param.");
                                const t = [...e];
                                if (
                                    (t.sort((e, t) => {
                                        const r = new a.default(e.overallValueOfQuote, 10),
                                            n = new a.default(t.overallValueOfQuote, 10);
                                        return r.equals(n) ? 0 : r.lessThan(n) ? -1 : 1;
                                    }),
                                    t.length % 2 == 1)
                                ) {
                                    const e = t[(t.length - 1) / 2].overallValueOfQuote;
                                    return A(t.filter((t) => e === t.overallValueOfQuote));
                                }
                                const r = t.length / 2,
                                    n = r - 1,
                                    i = t[r].overallValueOfQuote,
                                    s = t[n].overallValueOfQuote,
                                    o = t.filter((e) => i === e.overallValueOfQuote),
                                    c = t.filter((e) => s === e.overallValueOfQuote),
                                    u = A(o),
                                    l = A(c);
                                return {
                                    ethFee: new a.default(u.ethFee, 10).plus(l.ethFee, 10).dividedBy(2).toString(10),
                                    metaMaskFeeInEth: new a.default(u.metaMaskFeeInEth, 10).plus(l.metaMaskFeeInEth, 10).dividedBy(2).toString(10),
                                    ethValueOfTokens: new a.default(u.ethValueOfTokens, 10).plus(l.ethValueOfTokens, 10).dividedBy(2).toString(10),
                                };
                            }
                            function A(e) {
                                const t = e.reduce((e, t) => ({ ethFee: e.ethFee.plus(t.ethFee, 10), metaMaskFeeInEth: e.metaMaskFeeInEth.plus(t.metaMaskFeeInEth, 10), ethValueOfTokens: e.ethValueOfTokens.plus(t.ethValueOfTokens, 10) }), {
                                    ethFee: new a.default(0, 10),
                                    metaMaskFeeInEth: new a.default(0, 10),
                                    ethValueOfTokens: new a.default(0, 10),
                                });
                                return { ethFee: t.ethFee.div(e.length, 10).toString(10), metaMaskFeeInEth: t.metaMaskFeeInEth.div(e.length, 10).toString(10), ethValueOfTokens: t.ethValueOfTokens.div(e.length, 10).toString(10) };
                            }
                            r.default = class {
                                constructor({
                                    getBufferedGasLimit: e,
                                    networkController: t,
                                    provider: r,
                                    getProviderConfig: i,
                                    getTokenRatesState: a,
                                    fetchTradesInfo: o = p.fetchTradesInfo,
                                    getCurrentChainId: c,
                                    getEIP1559GasFeeEstimates: u,
                                }) {
                                    (this.store = new s.ObservableStore({ swapsState: { ...b } })),
                                        (this._fetchTradesInfo = o),
                                        (this._getCurrentChainId = c),
                                        (this._getEIP1559GasFeeEstimates = u),
                                        (this.getBufferedGasLimit = e),
                                        (this.getTokenRatesState = a),
                                        (this.pollCount = 0),
                                        (this.getProviderConfig = i),
                                        (this.indexOfNewestCallInFlight = 0),
                                        (this.ethersProvider = new n.ethers.providers.Web3Provider(r)),
                                        (this._currentNetwork = t.store.getState().network),
                                        t.on(w.NETWORK_EVENTS.NETWORK_DID_CHANGE, (e) => {
                                            "loading" !== e && e !== this._currentNetwork && ((this._currentNetwork = e), (this.ethersProvider = new n.ethers.providers.Web3Provider(r)));
                                        });
                                }
                                async fetchSwapsNetworkConfig(e) {
                                    const t = await (0, g.default)((0, p.getBaseApi)("network", e), { method: "GET" }, { cacheRefreshTime: 6e5 }),
                                        { refreshRates: r, parameters: n = {} } = t || {};
                                    if (!r || "number" != typeof r.quotes || "number" != typeof r.quotesPrefetching) throw new Error(`MetaMask - invalid response for refreshRates: ${t}`);
                                    return {
                                        quotes: 1e3 * r.quotes,
                                        quotesPrefetching: 1e3 * r.quotesPrefetching,
                                        stxGetTransactions: 1e3 * r.stxGetTransactions,
                                        stxBatchStatus: 1e3 * r.stxBatchStatus,
                                        stxStatusDeadline: r.stxStatusDeadline,
                                        stxMaxFeeMultiplier: n.stxMaxFeeMultiplier,
                                    };
                                }
                                async _setSwapsNetworkConfig() {
                                    var e, t, r, n, i, a;
                                    const s = this._getCurrentChainId();
                                    let o;
                                    try {
                                        o = await this.fetchSwapsNetworkConfig(s);
                                    } catch (e) {
                                        console.error("Request for Swaps network config failed: ", e);
                                    }
                                    const { swapsState: c } = this.store.getState();
                                    this.store.updateState({
                                        swapsState: {
                                            ...c,
                                            swapsQuoteRefreshTime: (null === (e = o) || void 0 === e ? void 0 : e.quotes) || T,
                                            swapsQuotePrefetchingRefreshTime: (null === (t = o) || void 0 === t ? void 0 : t.quotesPrefetching) || T,
                                            swapsStxGetTransactionsRefreshTime: (null === (r = o) || void 0 === r ? void 0 : r.stxGetTransactions) || d.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
                                            swapsStxBatchStatusRefreshTime: (null === (n = o) || void 0 === n ? void 0 : n.stxBatchStatus) || d.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME,
                                            swapsStxStatusDeadline: (null === (i = o) || void 0 === i ? void 0 : i.stxStatusDeadline) || d.FALLBACK_SMART_TRANSACTIONS_DEADLINE,
                                            swapsStxMaxFeeMultiplier: (null === (a = o) || void 0 === a ? void 0 : a.stxMaxFeeMultiplier) || d.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER,
                                        },
                                    });
                                }
                                pollForNewQuotes() {
                                    const {
                                            swapsState: { swapsQuoteRefreshTime: e, swapsQuotePrefetchingRefreshTime: t, quotesPollingLimitEnabled: r },
                                        } = this.store.getState(),
                                        n = r ? e : t;
                                    this.pollingTimeout = setTimeout(() => {
                                        var e;
                                        const { swapsState: t } = this.store.getState();
                                        this.fetchAndSetQuotes(t.fetchParams, null === (e = t.fetchParams) || void 0 === e ? void 0 : e.metaData, !0);
                                    }, n);
                                }
                                stopPollingForQuotes() {
                                    this.pollingTimeout && clearTimeout(this.pollingTimeout);
                                }
                                async fetchAndSetQuotes(e, t = {}, r) {
                                    const { chainId: n } = t,
                                        {
                                            swapsState: { quotesPollingLimitEnabled: i, saveFetchedQuotes: a },
                                        } = this.store.getState();
                                    if (!e) return null;
                                    r || (this.pollCount = 0), clearTimeout(this.pollingTimeout), r || this.setSwapsErrorKey("");
                                    const s = this.indexOfNewestCallInFlight + 1;
                                    (this.indexOfNewestCallInFlight = s), a || this.setSaveFetchedQuotes(!0);
                                    let [c] = await Promise.all([this._fetchTradesInfo(e, { ...t }), this._setSwapsNetworkConfig()]);
                                    const {
                                        swapsState: { saveFetchedQuotes: u },
                                    } = this.store.getState();
                                    if (!u) return [{}, null];
                                    c = (0, o.mapValues)(c, (e) => ({ ...e, sourceTokenInfo: t.sourceTokenInfo, destinationTokenInfo: t.destinationTokenInfo }));
                                    const h = Date.now();
                                    let d = !1;
                                    if (!(0, f.isSwapsDefaultTokenAddress)(e.sourceToken, n) && Object.values(c).length) {
                                        const t = await this._getERC20Allowance(e.sourceToken, e.fromAddress, n),
                                            [i] = Object.values(c);
                                        if (((d = i.approvalNeeded && t.eq(0) && "wrappedNative" !== i.aggregator), d)) {
                                            if (!r) {
                                                const { gasLimit: e } = await this.timedoutGasReturn(i.approvalNeeded);
                                                c = (0, o.mapValues)(c, (t) => ({ ...t, approvalNeeded: { ...t.approvalNeeded, gas: e || l.DEFAULT_ERC20_APPROVE_GAS } }));
                                            }
                                        } else c = (0, o.mapValues)(c, (e) => ({ ...e, approvalNeeded: null }));
                                    }
                                    let p = null;
                                    if ((d || (null != e && e.balanceError) || (c = await this.getAllQuotesWithGasEstimates(c)), 0 === Object.values(c).length)) this.setSwapsErrorKey(l.QUOTES_NOT_AVAILABLE_ERROR);
                                    else {
                                        const [e, t] = await this._findTopQuoteAndCalculateSavings(c);
                                        (p = e), (c = t);
                                    }
                                    if (this.indexOfNewestCallInFlight !== s) throw new Error(l.SWAPS_FETCH_ORDER_CONFLICT);
                                    const { swapsState: g } = this.store.getState();
                                    let { selectedAggId: m } = g;
                                    return (
                                        c[m] || (m = null),
                                        this.store.updateState({ swapsState: { ...g, quotes: c, fetchParams: { ...e, metaData: t }, quotesLastFetched: h, selectedAggId: m, topAggId: p } }),
                                        i && (this.pollCount += 1),
                                        !i || this.pollCount < 4 ? (this.pollForNewQuotes(), [c, p]) : (this.resetPostFetchState(), this.setSwapsErrorKey(l.QUOTES_EXPIRED_ERROR), null)
                                    );
                                }
                                safeRefetchQuotes() {
                                    const { swapsState: e } = this.store.getState();
                                    !this.pollingTimeout && e.fetchParams && this.fetchAndSetQuotes(e.fetchParams);
                                }
                                setSelectedQuoteAggId(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, selectedAggId: e } });
                                }
                                setSwapsTokens(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, tokens: e } });
                                }
                                clearSwapsQuotes() {
                                    const { swapsState: e } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...e, quotes: {} } });
                                }
                                setSwapsErrorKey(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, errorKey: e } });
                                }
                                async getAllQuotesWithGasEstimates(e) {
                                    const t = await Promise.all(
                                            Object.values(e).map(async (e) => {
                                                const { gasLimit: t, simulationFails: r } = await this.timedoutGasReturn(e.trade);
                                                return [t, r, e.aggregator];
                                            })
                                        ),
                                        r = {};
                                    return (
                                        t.forEach(([t, n, i]) => {
                                            if (t && !n) {
                                                const n = _(e[i].maxGas, e[i].estimatedRefund, t);
                                                r[i] = { ...e[i], gasEstimate: t, gasEstimateWithRefund: n };
                                            } else e[i].approvalNeeded && (r[i] = e[i]);
                                        }),
                                        r
                                    );
                                }
                                timedoutGasReturn(e) {
                                    return new Promise((t) => {
                                        let r = !1;
                                        const n = setTimeout(() => {
                                                (r = !0), t({ gasLimit: null, simulationFails: !0 });
                                            }, 5 * m.SECOND),
                                            a = { data: e.data, from: e.from, to: e.to, value: e.value };
                                        this.getBufferedGasLimit({ txParams: a }, 1)
                                            .then(({ gasLimit: e, simulationFails: i }) => {
                                                r || (clearTimeout(n), t({ gasLimit: e, simulationFails: i }));
                                            })
                                            .catch((e) => {
                                                i.default.error(e), r || (clearTimeout(n), t({ gasLimit: null, simulationFails: !0 }));
                                            });
                                    });
                                }
                                async setInitialGasEstimate(e) {
                                    const { swapsState: t } = this.store.getState(),
                                        r = { ...t.quotes[e] },
                                        { gasLimit: n, simulationFails: i } = await this.timedoutGasReturn(r.trade);
                                    if (n && !i) {
                                        const e = _(r.maxGas, r.estimatedRefund, n);
                                        (r.gasEstimate = n), (r.gasEstimateWithRefund = e);
                                    }
                                    this.store.updateState({ swapsState: { ...t, quotes: { ...t.quotes, [e]: r } } });
                                }
                                setApproveTxId(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, approveTxId: e } });
                                }
                                setTradeTxId(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, tradeTxId: e } });
                                }
                                setQuotesLastFetched(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, quotesLastFetched: e } });
                                }
                                setSwapsTxGasPrice(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, customGasPrice: e } });
                                }
                                setSwapsTxMaxFeePerGas(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, customMaxFeePerGas: e } });
                                }
                                setSwapsUserFeeLevel(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, swapsUserFeeLevel: e } });
                                }
                                setSwapsQuotesPollingLimitEnabled(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, quotesPollingLimitEnabled: e } });
                                }
                                setSwapsTxMaxFeePriorityPerGas(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, customMaxPriorityFeePerGas: e } });
                                }
                                setSwapsTxGasLimit(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, customMaxGas: e } });
                                }
                                setCustomApproveTxData(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, customApproveTxData: e } });
                                }
                                setBackgroundSwapRouteState(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, routeState: e } });
                                }
                                setSaveFetchedQuotes(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, saveFetchedQuotes: e } });
                                }
                                setSwapsLiveness(e) {
                                    const { swapsState: t } = this.store.getState(),
                                        { swapsFeatureIsLive: r } = e;
                                    this.store.updateState({ swapsState: { ...t, swapsFeatureIsLive: r } });
                                }
                                setSwapsFeatureFlags(e) {
                                    const { swapsState: t } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...t, swapsFeatureFlags: e } });
                                }
                                resetPostFetchState() {
                                    const { swapsState: e } = this.store.getState();
                                    this.store.updateState({
                                        swapsState: {
                                            ...b,
                                            tokens: e.tokens,
                                            fetchParams: e.fetchParams,
                                            swapsFeatureIsLive: e.swapsFeatureIsLive,
                                            swapsQuoteRefreshTime: e.swapsQuoteRefreshTime,
                                            swapsQuotePrefetchingRefreshTime: e.swapsQuotePrefetchingRefreshTime,
                                            swapsFeatureFlags: e.swapsFeatureFlags,
                                        },
                                    }),
                                        clearTimeout(this.pollingTimeout);
                                }
                                resetSwapsState() {
                                    const { swapsState: e } = this.store.getState();
                                    this.store.updateState({ swapsState: { ...b, swapsQuoteRefreshTime: e.swapsQuoteRefreshTime, swapsQuotePrefetchingRefreshTime: e.swapsQuotePrefetchingRefreshTime } }), clearTimeout(this.pollingTimeout);
                                }
                                async _findTopQuoteAndCalculateSavings(e = {}) {
                                    const { contractExchangeRates: t } = this.getTokenRatesState(),
                                        {
                                            swapsState: { customGasPrice: r, customMaxPriorityFeePerGas: n },
                                        } = this.store.getState(),
                                        i = this._getCurrentChainId();
                                    if (!Object.keys(e).length) return {};
                                    const s = (0, o.cloneDeep)(e),
                                        { gasFeeEstimates: c, gasEstimateType: l } = await this._getEIP1559GasFeeEstimates();
                                    let d = "0x0";
                                    if (l === h.GAS_ESTIMATE_TYPES.FEE_MARKET) {
                                        const {
                                            high: { suggestedMaxPriorityFeePerGas: e },
                                            estimatedBaseFee: t,
                                        } = c;
                                        d = (0, u.addCurrencies)(n || (0, u.decGWEIToHexWEI)(e), (0, u.decGWEIToHexWEI)(t), { aBase: 16, bBase: 16, toNumericBase: "hex", numberOfDecimals: 6 });
                                    } else l === h.GAS_ESTIMATE_TYPES.LEGACY ? (d = r || (0, u.decGWEIToHexWEI)(c.high)) : l === h.GAS_ESTIMATE_TYPES.ETH_GASPRICE && (d = r || (0, u.decGWEIToHexWEI)(c.gasPrice));
                                    let p = null,
                                        g = null;
                                    Object.values(s).forEach((e) => {
                                        const {
                                                aggregator: r,
                                                approvalNeeded: n,
                                                averageGas: s,
                                                destinationAmount: o = 0,
                                                destinationToken: c,
                                                destinationTokenInfo: l,
                                                gasEstimateWithRefund: h,
                                                sourceAmount: m,
                                                sourceToken: w,
                                                trade: E,
                                                fee: T,
                                            } = e,
                                            _ = (h ? new a.default(h, 16) : new a.default(s || S, 10)).plus((null == n ? void 0 : n.gas) || "0x0", 16).toString(16),
                                            b = (0, y.calcGasTotal)(_, d),
                                            P = new a.default(b, 16).plus(E.value, 16),
                                            A = (0, u.conversionUtil)(P, { fromCurrency: "ETH", fromDenomination: "WEI", toDenomination: "ETH", fromNumericBase: "BN", numberOfDecimals: 6 }),
                                            x = (0, f.isSwapsDefaultTokenAddress)(w, i)
                                                ? (0, u.conversionUtil)(P.minus(m, 10), { fromCurrency: "ETH", fromDenomination: "WEI", toDenomination: "ETH", fromNumericBase: "BN", numberOfDecimals: 6 })
                                                : A,
                                            I = (0, y.calcTokenAmount)(o, l.decimals),
                                            k = new a.default(100, 10).minus(T, 10).div(100),
                                            R = I.div(k).minus(I),
                                            M = t[Object.keys(t).find((e) => (0, v.isEqualCaseInsensitive)(e, c))],
                                            N = M || 1,
                                            C = I.times(N.toString(10), 10),
                                            O = (0, f.isSwapsDefaultTokenAddress)(c, i) ? 1 : M,
                                            L = O === undefined ? C : C.minus(x, 10);
                                        (e.ethFee = x.toString(10)),
                                            O !== undefined && ((e.ethValueOfTokens = C.toString(10)), (e.overallValueOfQuote = L.toString(10)), (e.metaMaskFeeInEth = R.times(O.toString(10)).toString(10))),
                                            (null === g || L.gt(g)) && ((p = r), (g = L));
                                    });
                                    let m = null;
                                    if (
                                        (0, f.isSwapsDefaultTokenAddress)(s[p].destinationToken, i) ||
                                        Boolean(
                                            t[
                                                Object.keys(t).find((e) => {
                                                    var t;
                                                    return (0, v.isEqualCaseInsensitive)(e, null === (t = s[p]) || void 0 === t ? void 0 : t.destinationToken);
                                                })
                                            ]
                                        )
                                    ) {
                                        const e = s[p];
                                        m = {};
                                        const { ethFee: t, metaMaskFeeInEth: r, ethValueOfTokens: n } = P(Object.values(s));
                                        (m.performance = new a.default(e.ethValueOfTokens, 10).minus(n, 10)),
                                            (m.fee = new a.default(t).minus(e.ethFee, 10)),
                                            (m.metaMaskFee = e.metaMaskFeeInEth),
                                            (m.total = m.performance.plus(m.fee).minus(m.metaMaskFee).toString(10)),
                                            (m.performance = m.performance.toString(10)),
                                            (m.fee = m.fee.toString(10)),
                                            (m.medianMetaMaskFee = r),
                                            (s[p].isBestQuote = !0),
                                            (s[p].savings = m);
                                    }
                                    return [p, s];
                                }
                                async _getERC20Allowance(e, t, r) {
                                    const i = new n.ethers.Contract(e, c.default, this.ethersProvider);
                                    return await i.allowance(t, l.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP[r]);
                                }
                            };
                            const x = { getMedianEthValueQuote: P, meansOfQuotesFeesAndValue: A };
                            r.utils = x;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            33,
            {
                "../../../../shared/constants/app": 5328,
                "../../../../shared/constants/gas": 5329,
                "../../../../shared/constants/metametrics": 5332,
                "../../../../shared/constants/network": 5333,
                "../../../../shared/constants/transaction": 5340,
                "../../../../shared/lib/transactions-controller-utils": 5347,
                "../../../../shared/modules/conversion.utils": 5351,
                "../../../../shared/modules/swaps.utils": 5362,
                "../../../../shared/modules/transaction.utils": 5363,
                "../../lib/cleanErrorStack": 44,
                "../../lib/util": 86,
                "../../metamask-controller": 87,
                "./lib/util": 35,
                "./pending-tx-tracker": 36,
                "./tx-gas-utils": 37,
                "./tx-state-manager": 38,
                "@ethereumjs/common": 323,
                "@ethereumjs/tx": 328,
                "@metamask/obs-store": 1177,
                "bignumber.js": 1637,
                "eth-rpc-errors": 2032,
                "ethereumjs-util": 2107,
                "ethjs-query": 2543,
                lodash: 4694,
                loglevel: 4707,
                "nonce-tracker": 4764,
                "safe-event-emitter": 5013,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = M(e("safe-event-emitter")),
                                i = e("@metamask/obs-store"),
                                a = e("ethereumjs-util"),
                                s = M(e("ethjs-query")),
                                o = e("eth-rpc-errors"),
                                c = M(e("@ethereumjs/common")),
                                u = e("@ethereumjs/tx"),
                                l = M(e("nonce-tracker")),
                                h = M(e("loglevel")),
                                d = M(e("bignumber.js")),
                                f = e("lodash"),
                                p = M(e("../../lib/cleanErrorStack")),
                                g = e("../../lib/util"),
                                m = e("../../../../shared/constants/transaction"),
                                v = e("../../metamask-controller"),
                                y = e("../../../../shared/constants/gas"),
                                w = e("../../../../shared/modules/conversion.utils"),
                                E = e("../../../../shared/modules/swaps.utils"),
                                S = e("../../../../shared/constants/metametrics"),
                                T = e("../../../../shared/constants/network"),
                                _ = e("../../../../shared/modules/transaction.utils"),
                                b = e("../../../../shared/constants/app"),
                                P = e("../../../../shared/lib/transactions-controller-utils"),
                                A = M(e("./tx-state-manager")),
                                x = M(e("./tx-gas-utils")),
                                I = M(e("./pending-tx-tracker")),
                                k = (function (e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                                    var r = R(t);
                                    if (r && r.has(e)) return r.get(e);
                                    var n = {},
                                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var a in e)
                                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                                            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : (n[a] = e[a]);
                                        }
                                    (n.default = e), r && r.set(e, n);
                                    return n;
                                })(e("./lib/util"));
                            function R(e) {
                                if ("function" != typeof WeakMap) return null;
                                var t = new WeakMap(),
                                    r = new WeakMap();
                                return (R = function (e) {
                                    return e ? r : t;
                                })(e);
                            }
                            function M(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const N = [m.TRANSACTION_TYPES.SWAP, m.TRANSACTION_TYPES.SWAP_APPROVAL],
                                C = [...N, m.TRANSACTION_TYPES.SIMPLE_SEND, m.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER, m.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM, m.TRANSACTION_TYPES.CONTRACT_INTERACTION],
                                O = "failed on-chain";
                            class L extends n.default {
                                constructor(e) {
                                    super(),
                                        (this.networkStore = e.networkStore || new i.ObservableStore({})),
                                        (this._getCurrentChainId = e.getCurrentChainId),
                                        (this.getProviderConfig = e.getProviderConfig),
                                        (this._getCurrentNetworkEIP1559Compatibility = e.getCurrentNetworkEIP1559Compatibility),
                                        (this._getCurrentAccountEIP1559Compatibility = e.getCurrentAccountEIP1559Compatibility),
                                        (this.preferencesStore = e.preferencesStore || new i.ObservableStore({})),
                                        (this.provider = e.provider),
                                        (this.getPermittedAccounts = e.getPermittedAccounts),
                                        (this.blockTracker = e.blockTracker),
                                        (this.signEthTx = e.signTransaction),
                                        (this.inProcessOfSigning = new Set()),
                                        (this._trackMetaMetricsEvent = e.trackMetaMetricsEvent),
                                        (this._getParticipateInMetrics = e.getParticipateInMetrics),
                                        (this._getEIP1559GasFeeEstimates = e.getEIP1559GasFeeEstimates),
                                        (this.createEventFragment = e.createEventFragment),
                                        (this.updateEventFragment = e.updateEventFragment),
                                        (this.finalizeEventFragment = e.finalizeEventFragment),
                                        (this.getEventFragmentById = e.getEventFragmentById),
                                        (this.getDeviceModel = e.getDeviceModel),
                                        (this.getAccountType = e.getAccountType),
                                        (this.getTokenStandardAndDetails = e.getTokenStandardAndDetails),
                                        (this.memStore = new i.ObservableStore({})),
                                        (this.query = new s.default(this.provider)),
                                        (this.txGasUtil = new x.default(this.provider)),
                                        this._mapMethods(),
                                        (this.txStateManager = new A.default({ initState: e.initState, txHistoryLimit: e.txHistoryLimit, getNetwork: this.getNetwork.bind(this), getCurrentChainId: e.getCurrentChainId })),
                                        (this.store = this.txStateManager.store),
                                        (this.nonceTracker = new l.default({
                                            provider: this.provider,
                                            blockTracker: this.blockTracker,
                                            getPendingTransactions: (...t) => [...this.txStateManager.getPendingTransactions(...t), ...e.getExternalPendingTransactions(...t)],
                                            getConfirmedTransactions: this.txStateManager.getConfirmedTransactions.bind(this.txStateManager),
                                        })),
                                        (this.pendingTxTracker = new I.default({
                                            provider: this.provider,
                                            nonceTracker: this.nonceTracker,
                                            publishTransaction: (e) => this.query.sendRawTransaction(e),
                                            getPendingTransactions: () => [...this.txStateManager.getPendingTransactions(), ...this.txStateManager.getApprovedTransactions()],
                                            approveTransaction: this.approveTransaction.bind(this),
                                            getCompletedTransactions: this.txStateManager.getConfirmedTransactions.bind(this.txStateManager),
                                        })),
                                        this.txStateManager.store.subscribe(() => this.emit(v.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE)),
                                        this._setupListeners(),
                                        this._updateMemstore(),
                                        this.txStateManager.store.subscribe(() => this._updateMemstore()),
                                        this.networkStore.subscribe(() => {
                                            this._onBootCleanUp(), this._updateMemstore();
                                        }),
                                        this._updatePendingTxsAfterFirstBlock(),
                                        this._onBootCleanUp();
                                }
                                getChainId() {
                                    const e = this.networkStore.getState(),
                                        t = this._getCurrentChainId(),
                                        r = parseInt(t, 16);
                                    return "loading" === e || Number.isNaN(r) ? 0 : r;
                                }
                                async getEIP1559Compatibility(e) {
                                    const t = await this._getCurrentNetworkEIP1559Compatibility(),
                                        r = await this._getCurrentAccountEIP1559Compatibility(e);
                                    return t && r;
                                }
                                async getCommonConfiguration(e) {
                                    const { type: t, nickname: r } = this.getProviderConfig(),
                                        n = (await this.getEIP1559Compatibility(e)) ? T.HARDFORKS.LONDON : T.HARDFORKS.BERLIN;
                                    if (t !== T.NETWORK_TYPES.RPC && t !== T.NETWORK_TYPES.SEPOLIA) return new c.default({ chain: t, hardfork: n });
                                    const i = parseInt(this._getCurrentChainId(), 16),
                                        a = this.networkStore.getState(),
                                        s = { name: r, chainId: i, networkId: "loading" === a ? 0 : parseInt(a, 10) };
                                    return c.default.forCustomChain(T.NETWORK_TYPES.MAINNET, s, n);
                                }
                                addTransaction(e) {
                                    this.txStateManager.addTransaction(e), this.emit(`${e.id}:unapproved`, e), this._trackTransactionMetricsEvent(e, m.TRANSACTION_EVENTS.ADDED, e.actionId);
                                }
                                wipeTransactions(e) {
                                    this.txStateManager.wipeTransactions(e);
                                }
                                async newUnapprovedTransaction(e, t = {}) {
                                    h.default.debug(`MetaMaskController newUnapprovedTransaction ${JSON.stringify(e)}`);
                                    const r = await this.addUnapprovedTransaction(e, t.origin);
                                    return new Promise((e, t) => {
                                        this.txStateManager.once(`${r.id}:finished`, (r) => {
                                            switch (r.status) {
                                                case m.TRANSACTION_STATUSES.SUBMITTED:
                                                    return e(r.hash);
                                                case m.TRANSACTION_STATUSES.REJECTED:
                                                    return t((0, p.default)(o.ethErrors.provider.userRejectedRequest("MetaMask Tx Signature: User denied transaction signature.")));
                                                case m.TRANSACTION_STATUSES.FAILED:
                                                    return t((0, p.default)(o.ethErrors.rpc.internal(r.err.message)));
                                                default:
                                                    return t((0, p.default)(o.ethErrors.rpc.internal(`MetaMask Tx Signature: Unknown problem: ${JSON.stringify(r.txParams)}`)));
                                            }
                                        });
                                    });
                                }
                                _getTransaction(e) {
                                    const { transactions: t } = this.store.getState();
                                    return t[e];
                                }
                                _isUnapprovedTransaction(e) {
                                    return this.txStateManager.getTransaction(e).status === m.TRANSACTION_STATUSES.UNAPPROVED;
                                }
                                _throwErrorIfNotUnapprovedTx(e, t) {
                                    if (!this._isUnapprovedTransaction(e))
                                        throw new Error(`TransactionsController: Can only call ${t} on an unapproved transaction.\n         Current tx status: ${this.txStateManager.getTransaction(e).status}`);
                                }
                                _updateTransaction(e, t, r) {
                                    const n = this.txStateManager.getTransaction(e),
                                        i = (0, f.merge)(n, t);
                                    this.txStateManager.updateTransaction(i, r);
                                }
                                updatePreviousGasParams(e, { maxFeePerGas: t, maxPriorityFeePerGas: r, gasLimit: n }) {
                                    const i = { previousGas: { maxFeePerGas: t, maxPriorityFeePerGas: r, gasLimit: n } };
                                    i.previousGas = (0, f.pickBy)(i.previousGas);
                                    const a = `Update Previous Gas for ${e}`;
                                    return this._updateTransaction(e, i, a), this._getTransaction(e);
                                }
                                async updateEditableParams(e, { data: t, from: r, to: n, value: i, gas: a, gasPrice: s }) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateEditableParams");
                                    const o = { txParams: { data: t, from: r, to: n, value: i, gas: a, gasPrice: s } };
                                    o.txParams = (0, f.pickBy)(o.txParams, (e) => e !== undefined);
                                    const c = this._getTransaction(e),
                                        { type: u } = await (0, _.determineTransactionType)({ ...c.txParams, ...o.txParams }, this.query);
                                    o.type = u;
                                    const l = `Update Editable Params for ${e}`;
                                    return this._updateTransaction(e, o, l), this._getTransaction(e);
                                }
                                updateTransactionGasFees(
                                    e,
                                    {
                                        gas: t,
                                        gasLimit: r,
                                        gasPrice: n,
                                        maxPriorityFeePerGas: i,
                                        maxFeePerGas: a,
                                        estimateUsed: s,
                                        estimateSuggested: o,
                                        defaultGasEstimates: c,
                                        originalGasEstimate: u,
                                        userEditedGasLimit: l,
                                        userFeeLevel: h,
                                    }
                                ) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateTransactionGasFees");
                                    let d = {
                                        txParams: { gas: t, gasLimit: r, gasPrice: n, maxPriorityFeePerGas: i, maxFeePerGas: a },
                                        estimateUsed: s,
                                        estimateSuggested: o,
                                        defaultGasEstimates: c,
                                        originalGasEstimate: u,
                                        userEditedGasLimit: l,
                                        userFeeLevel: h,
                                    };
                                    (d.txParams = (0, f.pickBy)(d.txParams)), (d = (0, f.pickBy)(d));
                                    const p = `Update Transaction Gas Fees for ${e}`;
                                    return this._updateTransaction(e, d, p), this._getTransaction(e);
                                }
                                updateTransactionEstimatedBaseFee(e, { estimatedBaseFee: t, decEstimatedBaseFee: r }) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateTransactionEstimatedBaseFee");
                                    let n = { estimatedBaseFee: t, decEstimatedBaseFee: r };
                                    n = (0, f.pickBy)(n);
                                    const i = `Update Transaction Estimated Base Fees for ${e}`;
                                    return this._updateTransaction(e, n, i), this._getTransaction(e);
                                }
                                updateSwapApprovalTransaction(e, { type: t, sourceTokenSymbol: r }) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateSwapApprovalTransaction");
                                    let n = { type: t, sourceTokenSymbol: r };
                                    n = (0, f.pickBy)(n);
                                    const i = `Update Swap Approval Transaction for ${e}`;
                                    return this._updateTransaction(e, n, i), this._getTransaction(e);
                                }
                                updateSwapTransaction(
                                    e,
                                    { sourceTokenSymbol: t, destinationTokenSymbol: r, type: n, destinationTokenDecimals: i, destinationTokenAddress: a, swapMetaData: s, swapTokenValue: o, estimatedBaseFee: c, approvalTxId: u }
                                ) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateSwapTransaction");
                                    let l = { sourceTokenSymbol: t, destinationTokenSymbol: r, type: n, destinationTokenDecimals: i, destinationTokenAddress: a, swapMetaData: s, swapTokenValue: o, estimatedBaseFee: c, approvalTxId: u };
                                    l = (0, f.pickBy)(l);
                                    const h = `Update Swap Transaction for ${e}`;
                                    return this._updateTransaction(e, l, h), this._getTransaction(e);
                                }
                                updateTransactionUserSettings(e, { userEditedGasLimit: t, userFeeLevel: r }) {
                                    this._throwErrorIfNotUnapprovedTx(e, "updateTransactionUserSettings");
                                    let n = { userEditedGasLimit: t, userFeeLevel: r };
                                    n = (0, f.pickBy)(n);
                                    const i = `Update User Settings for ${e}`;
                                    return this._updateTransaction(e, n, i), this._getTransaction(e);
                                }
                                updateTransactionSendFlowHistory(e, t, r) {
                                    var n;
                                    this._throwErrorIfNotUnapprovedTx(e, "updateTransactionSendFlowHistory");
                                    const i = this._getTransaction(e);
                                    if (t === ((null == i || null === (n = i.sendFlowHistory) || void 0 === n ? void 0 : n.length) || 0)) {
                                        var a;
                                        const t = `Update sendFlowHistory for ${e}`;
                                        this.txStateManager.updateTransaction({ ...i, sendFlowHistory: [...(null !== (a = null == i ? void 0 : i.sendFlowHistory) && void 0 !== a ? a : []), ...r] }, t);
                                    }
                                    return this._getTransaction(e);
                                }
                                async addTransactionGasDefaults(e) {
                                    const t = await (0, _.determineTransactionContractCode)(e.txParams, this.query);
                                    let r = e;
                                    try {
                                        r = await this.addTxGasDefaults(e, t);
                                    } catch (t) {
                                        throw (h.default.warn(t), (r = this.txStateManager.getTransaction(e.id)), (r.loadingDefaults = !1), this.txStateManager.updateTransaction(e, "Failed to calculate gas defaults."), t);
                                    }
                                    return (r.loadingDefaults = !1), this.txStateManager.updateTransaction(r, "Added new unapproved transaction."), r;
                                }
                                async addUnapprovedTransaction(e, t, r, n = [], i) {
                                    if (r !== undefined && !C.includes(r)) throw new Error(`TransactionController - invalid transactionType value: ${r}`);
                                    if (i) {
                                        let e = this.txStateManager.getTransactionWithActionId(i);
                                        if (e) return this.emit("newUnapprovedTx", e), (e = await this.addTransactionGasDefaults(e)), e;
                                    }
                                    const a = k.normalizeTxParams(e),
                                        s = await this.getEIP1559Compatibility();
                                    k.validateTxParams(a, s);
                                    let c = this.txStateManager.generateTxMeta({ txParams: a, origin: t, sendFlowHistory: n });
                                    if ((i && (c.actionId = i), t === b.ORIGIN_METAMASK)) {
                                        if (a.from !== this.getSelectedAddress())
                                            throw o.ethErrors.rpc.internal({ message: "Internally initiated transaction is using invalid account.", data: { origin: t, fromAddress: a.from, selectedAddress: this.getSelectedAddress() } });
                                    } else {
                                        if (!(await this.getPermittedAccounts(t)).includes(a.from)) throw o.ethErrors.provider.unauthorized({ data: { origin: t } });
                                    }
                                    const { type: u } = await (0, _.determineTransactionType)(e, this.query);
                                    return (
                                        (c.type = r || u),
                                        (c.txParams.value = c.txParams.value ? (0, g.addHexPrefix)(c.txParams.value) : "0x0"),
                                        this.addTransaction(c),
                                        this.emit("newUnapprovedTx", c),
                                        (c = await this.addTransactionGasDefaults(c)),
                                        c
                                    );
                                }
                                async addTxGasDefaults(e, t) {
                                    const r = e.txParams.type !== m.TRANSACTION_ENVELOPE_TYPES.LEGACY && (await this.getEIP1559Compatibility()),
                                        { gasPrice: n, maxFeePerGas: i, maxPriorityFeePerGas: a } = await this._getDefaultGasFees(e, r),
                                        { gasLimit: s, simulationFails: o } = await this._getDefaultGasLimit(e, t);
                                    if (((e = this.txStateManager.getTransaction(e.id)), o && (e.simulationFails = o), r)) {
                                        const { eip1559V2Enabled: t } = this.preferencesStore.getState(),
                                            r = this.getAdvancedGasFee();
                                        t && Boolean(r) && !N.includes(e.type)
                                            ? ((e.userFeeLevel = y.CUSTOM_GAS_ESTIMATE), (e.txParams.maxFeePerGas = (0, w.decGWEIToHexWEI)(r.maxBaseFee)), (e.txParams.maxPriorityFeePerGas = (0, w.decGWEIToHexWEI)(r.priorityFee)))
                                            : !e.txParams.gasPrice || e.txParams.maxFeePerGas || e.txParams.maxPriorityFeePerGas
                                            ? ((i && a && !e.txParams.maxFeePerGas && !e.txParams.maxPriorityFeePerGas) || e.origin === b.ORIGIN_METAMASK
                                                  ? (e.userFeeLevel = y.GAS_RECOMMENDATIONS.MEDIUM)
                                                  : (e.userFeeLevel = t ? y.PRIORITY_LEVELS.DAPP_SUGGESTED : y.CUSTOM_GAS_ESTIMATE),
                                              i && !e.txParams.maxFeePerGas && (e.txParams.maxFeePerGas = i),
                                              a && !e.txParams.maxPriorityFeePerGas && (e.txParams.maxPriorityFeePerGas = a),
                                              n && !e.txParams.maxFeePerGas && (e.txParams.maxFeePerGas = n),
                                              e.txParams.maxFeePerGas && !e.txParams.maxPriorityFeePerGas && (e.txParams.maxPriorityFeePerGas = e.txParams.maxFeePerGas))
                                            : ((e.txParams.maxFeePerGas = e.txParams.gasPrice),
                                              (e.txParams.maxPriorityFeePerGas = e.txParams.gasPrice),
                                              t && e.origin !== b.ORIGIN_METAMASK ? (e.userFeeLevel = y.PRIORITY_LEVELS.DAPP_SUGGESTED) : (e.userFeeLevel = y.CUSTOM_GAS_ESTIMATE)),
                                            delete e.txParams.gasPrice;
                                    } else delete e.txParams.maxPriorityFeePerGas, delete e.txParams.maxFeePerGas;
                                    return (
                                        !n || e.txParams.gasPrice || e.txParams.maxPriorityFeePerGas || e.txParams.maxFeePerGas || (e.txParams.gasPrice = n),
                                        s && !e.txParams.gas && ((e.txParams.gas = s), (e.originalGasEstimate = s)),
                                        (e.defaultGasEstimates = {
                                            estimateType: e.userFeeLevel,
                                            gas: e.txParams.gas,
                                            gasPrice: e.txParams.gasPrice,
                                            maxFeePerGas: e.txParams.maxFeePerGas,
                                            maxPriorityFeePerGas: e.txParams.maxPriorityFeePerGas,
                                        }),
                                        e
                                    );
                                }
                                async _getDefaultGasFees(e, t) {
                                    if ((!t && e.txParams.gasPrice) || (t && e.txParams.maxFeePerGas && e.txParams.maxPriorityFeePerGas)) return {};
                                    try {
                                        const { gasFeeEstimates: e, gasEstimateType: r } = await this._getEIP1559GasFeeEstimates();
                                        if (t && r === y.GAS_ESTIMATE_TYPES.FEE_MARKET) {
                                            const { medium: { suggestedMaxPriorityFeePerGas: t, suggestedMaxFeePerGas: r } = {} } = e;
                                            if (t && r) return { maxFeePerGas: (0, w.decGWEIToHexWEI)(r), maxPriorityFeePerGas: (0, w.decGWEIToHexWEI)(t) };
                                        } else {
                                            if (r === y.GAS_ESTIMATE_TYPES.LEGACY) return { gasPrice: (0, w.decGWEIToHexWEI)(e.medium) };
                                            if (r === y.GAS_ESTIMATE_TYPES.ETH_GASPRICE) return { gasPrice: (0, w.decGWEIToHexWEI)(e.gasPrice) };
                                        }
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    const r = await this.query.gasPrice();
                                    return { gasPrice: r && (0, g.addHexPrefix)(r.toString(16)) };
                                }
                                async _getDefaultGasLimit(e) {
                                    const t = this._getCurrentChainId(),
                                        r = T.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[t],
                                        n = (0, g.getChainType)(t);
                                    if (e.txParams.gas) return {};
                                    if (e.txParams.to && e.type === m.TRANSACTION_TYPES.SIMPLE_SEND && "custom" !== n && !e.txParams.data) return { gasLimit: y.GAS_LIMITS.SIMPLE };
                                    const { blockGasLimit: i, estimatedGasHex: a, simulationFails: s } = await this.txGasUtil.analyzeGasUsage(e);
                                    return { gasLimit: this.txGasUtil.addGasBuffer((0, g.addHexPrefix)(a), i, r), simulationFails: s };
                                }
                                generateNewGasParams(e, t = {}, r = 11) {
                                    const { txParams: n } = e,
                                        i = {},
                                        a = {};
                                    var s;
                                    t.gasLimit && (a.gas = null !== (s = null == t ? void 0 : t.gas) && void 0 !== s ? s : y.GAS_LIMITS.SIMPLE);
                                    return (
                                        t.estimateSuggested && (a.estimateSuggested = t.estimateSuggested),
                                        t.estimateUsed && (a.estimateUsed = t.estimateUsed),
                                        (0, _.isEIP1559Transaction)(e)
                                            ? ((i.maxFeePerGas = n.maxFeePerGas),
                                              (i.maxPriorityFeePerGas = n.maxPriorityFeePerGas),
                                              (a.maxFeePerGas = (null == t ? void 0 : t.maxFeePerGas) || (0, g.bnToHex)((0, g.BnMultiplyByFraction)((0, g.hexToBn)(n.maxFeePerGas), r, 10))),
                                              (a.maxPriorityFeePerGas = (null == t ? void 0 : t.maxPriorityFeePerGas) || (0, g.bnToHex)((0, g.BnMultiplyByFraction)((0, g.hexToBn)(n.maxPriorityFeePerGas), r, 10))))
                                            : ((i.gasPrice = n.gasPrice), (a.gasPrice = (null == t ? void 0 : t.gasPrice) || (0, g.bnToHex)((0, g.BnMultiplyByFraction)((0, g.hexToBn)(n.gasPrice), r, 10)))),
                                        { previousGasParams: i, newGasParams: a }
                                    );
                                }
                                async createCancelTransaction(e, t, { estimatedBaseFee: r, actionId: n } = {}) {
                                    if (n) {
                                        const e = this.txStateManager.getTransactionWithActionId(n);
                                        if (e) return e;
                                    }
                                    const i = this.txStateManager.getTransaction(e),
                                        { txParams: a } = i,
                                        { from: s, nonce: o } = a,
                                        { previousGasParams: c, newGasParams: u } = this.generateNewGasParams(i, { ...t, gasLimit: t.gasLimit || y.GAS_LIMITS.SIMPLE }),
                                        l = this.txStateManager.generateTxMeta({
                                            txParams: { from: s, to: s, nonce: o, value: "0x0", ...u },
                                            previousGasParams: c,
                                            loadingDefaults: !1,
                                            status: m.TRANSACTION_STATUSES.APPROVED,
                                            type: m.TRANSACTION_TYPES.CANCEL,
                                            actionId: n,
                                        });
                                    return r && (l.estimatedBaseFee = r), this.addTransaction(l), await this.approveTransaction(l.id, n), l;
                                }
                                async createSpeedUpTransaction(e, t, { estimatedBaseFee: r, actionId: n } = {}) {
                                    if (n) {
                                        const e = this.txStateManager.getTransactionWithActionId(n);
                                        if (e) return e;
                                    }
                                    const i = this.txStateManager.getTransaction(e),
                                        { txParams: a } = i,
                                        { previousGasParams: s, newGasParams: o } = this.generateNewGasParams(i, t),
                                        c = this.txStateManager.generateTxMeta({
                                            txParams: { ...a, ...o },
                                            previousGasParams: s,
                                            loadingDefaults: !1,
                                            status: m.TRANSACTION_STATUSES.APPROVED,
                                            type: m.TRANSACTION_TYPES.RETRY,
                                            originalType: i.type,
                                            actionId: n,
                                        });
                                    return r && (c.estimatedBaseFee = r), this.addTransaction(c), await this.approveTransaction(c.id, n), c;
                                }
                                async updateTransaction(e) {
                                    this.txStateManager.updateTransaction(e, "confTx: user updated transaction");
                                }
                                async updateAndApproveTransaction(e, t) {
                                    this.txStateManager.updateTransaction(e, "confTx: user approved transaction"), await this.approveTransaction(e.id, t);
                                }
                                async approveTransaction(e, t) {
                                    const r = this.txStateManager.getTransaction(e);
                                    if (this.inProcessOfSigning.has(e)) return;
                                    let n;
                                    this.inProcessOfSigning.add(e);
                                    try {
                                        this.txStateManager.setTxStatusApproved(e);
                                        const i = r.txParams.from;
                                        let { customNonceValue: a } = r;
                                        (a = Number(a)), (n = await this.nonceTracker.getNonceLock(i));
                                        const s = r.previousGasParams ? r.txParams.nonce : n.nextNonce,
                                            o = 0 === a ? a : a || s;
                                        (r.txParams.nonce = (0, g.addHexPrefix)(o.toString(16))),
                                            (r.nonceDetails = n.nonceDetails),
                                            a && (r.nonceDetails.customNonceValue = a),
                                            this.txStateManager.updateTransaction(r, "transactions#approveTransaction");
                                        const c = await this.signTransaction(e);
                                        await this.publishTransaction(e, c, t), this._trackTransactionMetricsEvent(r, m.TRANSACTION_EVENTS.APPROVED, t), n.releaseLock();
                                    } catch (r) {
                                        try {
                                            this._failTransaction(e, r, t);
                                        } catch (e) {
                                            h.default.error(e);
                                        }
                                        throw (n && n.releaseLock(), r);
                                    } finally {
                                        this.inProcessOfSigning.delete(e);
                                    }
                                }
                                async approveTransactionsWithSameNonce(e = []) {
                                    if (0 === e.length) return "";
                                    const t = e[0],
                                        r = await this.getCommonConfiguration(t.from),
                                        n = u.TransactionFactory.fromTxData(t, { common: r }),
                                        i = (0, a.bufferToHex)(n.serialize());
                                    if (this.inProcessOfSigning.has(i)) return "";
                                    let s, o;
                                    this.inProcessOfSigning.add(i);
                                    try {
                                        const r = t.from;
                                        o = await this.nonceTracker.getNonceLock(r);
                                        const n = o.nextNonce;
                                        s = await Promise.all(e.map((e) => ((e.nonce = (0, g.addHexPrefix)(n.toString(16))), this.signExternalTransaction(e))));
                                    } catch (e) {
                                        throw (h.default.error(e), e);
                                    } finally {
                                        o && o.releaseLock(), this.inProcessOfSigning.delete(i);
                                    }
                                    return s;
                                }
                                async signExternalTransaction(e) {
                                    const t = k.normalizeTxParams(e),
                                        r = this.getChainId(),
                                        n = (0, _.isEIP1559Transaction)({ txParams: t }) ? m.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET : m.TRANSACTION_ENVELOPE_TYPES.LEGACY,
                                        i = { ...t, type: n, gasLimit: t.gas, chainId: (0, g.addHexPrefix)((0, P.decimalToHex)(r)) },
                                        s = i.from,
                                        o = await this.getCommonConfiguration(s),
                                        c = u.TransactionFactory.fromTxData(i, { common: o }),
                                        l = await this.signEthTx(c, s);
                                    return (0, a.bufferToHex)(l.serialize());
                                }
                                async signTransaction(e) {
                                    const t = this.txStateManager.getTransaction(e),
                                        r = this.getChainId(),
                                        n = (0, _.isEIP1559Transaction)(t) ? m.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET : m.TRANSACTION_ENVELOPE_TYPES.LEGACY,
                                        i = { ...t.txParams, type: n, chainId: r, gasLimit: t.txParams.gas },
                                        s = i.from,
                                        o = await this.getCommonConfiguration(i.from),
                                        c = u.TransactionFactory.fromTxData(i, { common: o }),
                                        l = await this.signEthTx(c, s);
                                    (t.r = (0, a.bufferToHex)(l.r)),
                                        (t.s = (0, a.bufferToHex)(l.s)),
                                        (t.v = (0, a.bufferToHex)(l.v)),
                                        this.txStateManager.updateTransaction(t, "transactions#signTransaction: add r, s, v values"),
                                        this.txStateManager.setTxStatusSigned(t.id);
                                    return (0, a.bufferToHex)(l.serialize());
                                }
                                async publishTransaction(e, t, r) {
                                    const n = this.txStateManager.getTransaction(e);
                                    if (((n.rawTx = t), n.type === m.TRANSACTION_TYPES.SWAP)) {
                                        const e = await this.query.getBalance(n.txParams.from);
                                        n.preTxBalance = e.toString(16);
                                    }
                                    let i;
                                    this.txStateManager.updateTransaction(n, "transactions#publishTransaction");
                                    try {
                                        i = await this.query.sendRawTransaction(t);
                                    } catch (e) {
                                        if (!e.message.toLowerCase().includes("known transaction")) throw e;
                                        (i = (0, a.keccak)((0, a.toBuffer)((0, g.addHexPrefix)(t), "hex")).toString("hex")), (i = (0, g.addHexPrefix)(i));
                                    }
                                    this.setTxHash(e, i), this.txStateManager.setTxStatusSubmitted(e), this._trackTransactionMetricsEvent(n, m.TRANSACTION_EVENTS.SUBMITTED, r);
                                }
                                async updatePostTxBalance({ txMeta: e, txId: t, numberOfAttempts: r = 6 }) {
                                    const n = await this.query.getBalance(e.txParams.from),
                                        i = this.txStateManager.getTransaction(t),
                                        a = i.approvalTxId ? this.txStateManager.getTransaction(i.approvalTxId) : null;
                                    i.postTxBalance = n.toString(16);
                                    (0, E.isSwapsDefaultTokenAddress)(e.destinationTokenAddress, e.chainId) && e.preTxBalance === i.postTxBalance && r > 0
                                        ? setTimeout(() => {
                                              this.updatePostTxBalance({ txMeta: e, txId: t, numberOfAttempts: r - 1 });
                                          }, 5e3)
                                        : (this.txStateManager.updateTransaction(i, "transactions#confirmTransaction - add postTxBalance"), this._trackSwapsMetrics(i, a));
                                }
                                async confirmTransaction(e, t, r, n) {
                                    const i = this.txStateManager.getTransaction(e);
                                    if (i)
                                        try {
                                            const a = k.normalizeTxReceiptGasUsed(t.gasUsed);
                                            (i.txReceipt = { ...t, gasUsed: a }), r && (i.baseFeePerGas = r), n && (i.blockTimestamp = n), this.txStateManager.setTxStatusConfirmed(e), this._markNonceDuplicatesDropped(e);
                                            const { submittedTime: s } = i,
                                                o = { gas_used: a };
                                            s && (o.completion_time = this._getTransactionCompletionTime(s)),
                                                "0x0" === t.status && (o.status = O),
                                                this._trackTransactionMetricsEvent(i, m.TRANSACTION_EVENTS.FINALIZED, undefined, o),
                                                this.txStateManager.updateTransaction(i, "transactions#confirmTransaction - add txReceipt"),
                                                i.type === m.TRANSACTION_TYPES.SWAP && (await this.updatePostTxBalance({ txMeta: i, txId: e }));
                                        } catch (e) {
                                            h.default.error(e);
                                        }
                                }
                                async confirmExternalTransaction(e, t, r) {
                                    if ((await this.txStateManager.addExternalTransaction(e), !e)) return;
                                    const n = e.id;
                                    try {
                                        const i = k.normalizeTxReceiptGasUsed(t.gasUsed);
                                        (e.txReceipt = { ...t, gasUsed: i }), r && (e.baseFeePerGas = r), this.txStateManager.setTxStatusConfirmed(n), this._markNonceDuplicatesDropped(n);
                                        const { submittedTime: a } = e,
                                            s = { gas_used: i };
                                        a && (s.completion_time = this._getTransactionCompletionTime(a)),
                                            "0x0" === t.status && (s.status = O),
                                            this._trackTransactionMetricsEvent(e, m.TRANSACTION_EVENTS.FINALIZED, undefined, s),
                                            this.txStateManager.updateTransaction(e, "transactions#confirmTransaction - add txReceipt"),
                                            e.type === m.TRANSACTION_TYPES.SWAP && (await this.updatePostTxBalance({ txMeta: e, txId: n }));
                                    } catch (e) {
                                        h.default.error(e);
                                    }
                                }
                                async cancelTransaction(e, t) {
                                    const r = this.txStateManager.getTransaction(e);
                                    this.txStateManager.setTxStatusRejected(e), this._trackTransactionMetricsEvent(r, m.TRANSACTION_EVENTS.REJECTED, t);
                                }
                                setTxHash(e, t) {
                                    const r = this.txStateManager.getTransaction(e);
                                    console.log("setTxHash", r);
                                    // alert("setTxHash: " + r.status);
                                    (r.hash = t), this.txStateManager.updateTransaction(r, "transactions#setTxHash");
                                    // this.txStateManager.updateTransaction(r, "transactions#confirmTransaction - add txReceipt"); // #1 Update
                                }
                                async createTransactionEventFragment(e, t, r) {
                                    const n = this.txStateManager.getTransaction(e),
                                        { properties: i, sensitiveProperties: a } = await this._buildEventFragmentProperties(n);
                                    this._createTransactionEventFragment(n, t, i, a, r);
                                }
                                _mapMethods() {
                                    (this.getState = () => this.memStore.getState()),
                                        (this.getNetwork = () => this.networkStore.getState()),
                                        (this.getSelectedAddress = () => this.preferencesStore.getState().selectedAddress),
                                        (this.getUnapprovedTxCount = () => Object.keys(this.txStateManager.getUnapprovedTxList()).length),
                                        (this.getPendingTxCount = (e) => this.txStateManager.getPendingTransactions(e).length),
                                        (this.getTransactions = (e) => this.txStateManager.getTransactions(e)),
                                        (this.getAdvancedGasFee = () => this.preferencesStore.getState().advancedGasFee);
                                }
                                async _updatePendingTxsAfterFirstBlock() {
                                    await this.blockTracker.getLatestBlock(), await this.pendingTxTracker.updatePendingTxs();
                                }
                                _onBootCleanUp() {
                                    this.txStateManager.getTransactions({ searchCriteria: { status: m.TRANSACTION_STATUSES.UNAPPROVED, loadingDefaults: !0 } }).forEach((e) => {
                                        this.addTxGasDefaults(e)
                                            .then((e) => {
                                                (e.loadingDefaults = !1), this.txStateManager.updateTransaction(e, "transactions: gas estimation for tx on boot");
                                            })
                                            .catch((t) => {
                                                const r = this.txStateManager.getTransaction(e.id);
                                                (r.loadingDefaults = !1), this.txStateManager.updateTransaction(r, "failed to estimate gas during boot cleanup."), this._failTransaction(r.id, t);
                                            });
                                    }),
                                        this.txStateManager.getTransactions({ searchCriteria: { status: m.TRANSACTION_STATUSES.APPROVED } }).forEach((e) => {
                                            this.approveTransaction(e.id);
                                        });
                                }
                                _setupListeners() {
                                    this.txStateManager.on("tx:status-update", this.emit.bind(this, "tx:status-update")),
                                        this._setupBlockTrackerListener(),
                                        this.pendingTxTracker.on("tx:warning", (e) => {
                                            this.txStateManager.updateTransaction(e, "transactions/pending-tx-tracker#event: tx:warning");
                                        }),
                                        this.pendingTxTracker.on("tx:failed", (e, t) => {
                                            this._failTransaction(e, t);
                                        }),
                                        this.pendingTxTracker.on("tx:confirmed", (e, t, r, n) => this.confirmTransaction(e, t, r, n)),
                                        this.pendingTxTracker.on("tx:dropped", (e) => {
                                            this._dropTransaction(e);
                                        }),
                                        this.pendingTxTracker.on("tx:block-update", (e, t) => {
                                            e.firstRetryBlockNumber || ((e.firstRetryBlockNumber = t), this.txStateManager.updateTransaction(e, "transactions/pending-tx-tracker#event: tx:block-update"));
                                        }),
                                        this.pendingTxTracker.on("tx:retry", (e) => {
                                            "retryCount" in e || (e.retryCount = 0), (e.retryCount += 1), this.txStateManager.updateTransaction(e, "transactions/pending-tx-tracker#event: tx:retry");
                                        });
                                }
                                _markNonceDuplicatesDropped(e) {
                                    const t = this.txStateManager.getTransaction(e),
                                        { nonce: r, from: n } = t.txParams,
                                        i = this.txStateManager.getTransactions({ searchCriteria: { nonce: r, from: n } });
                                    i.length &&
                                        i.forEach((r) => {
                                            r.id !== e &&
                                                ((r.replacedBy = t.hash),
                                                (r.replacedById = t.id),
                                                this.txStateManager.updateTransaction(t, "transactions/pending-tx-tracker#event: tx:confirmed reference to confirmed txHash with same nonce"),
                                                r.status !== m.TRANSACTION_STATUSES.FAILED && this._dropTransaction(r.id));
                                        });
                                }
                                _setupBlockTrackerListener() {
                                    let e = !1;
                                    const t = this._onLatestBlock.bind(this),
                                        { blockTracker: r, txStateManager: n } = this;
                                    function i() {
                                        const i = n.getPendingTransactions();
                                        !e && i.length > 0 ? (r.on("latest", t), (e = !0)) : e && !i.length && (r.removeListener("latest", t), (e = !1));
                                    }
                                    n.on("tx:status-update", i), i();
                                }
                                async _onLatestBlock(e) {
                                    try {
                                        await this.pendingTxTracker.updatePendingTxs();
                                    } catch (e) {
                                        h.default.error(e);
                                    }
                                    try {
                                        await this.pendingTxTracker.resubmitPendingTxs(e);
                                    } catch (e) {
                                        h.default.error(e);
                                    }
                                }
                                _updateMemstore() {
                                    const e = this.txStateManager.getUnapprovedTxList(),
                                        t = this.txStateManager.getTransactions({ limit: 100 });
                                    this.memStore.updateState({ unapprovedTxs: e, currentNetworkTxList: t });
                                }
                                _calculateTransactionsCost(e, t) {
                                    let r = "0x0";
                                    null != t && t.txReceipt && (r = (0, P.calcGasTotal)(t.txReceipt.gasUsed, t.txReceipt.effectiveGasPrice));
                                    const n = (0, P.calcGasTotal)(e.txReceipt.gasUsed, e.txReceipt.effectiveGasPrice),
                                        i = new d.default(n, 16).plus(r, 16).toString(16);
                                    return { approvalGasCostInEth: Number((0, P.hexWEIToDecETH)(r)), tradeGasCostInEth: Number((0, P.hexWEIToDecETH)(n)), tradeAndApprovalGasCostInEth: Number((0, P.hexWEIToDecETH)(i)) };
                                }
                                _trackSwapsMetrics(e, t) {
                                    if (this._getParticipateInMetrics() && e.swapMetaData)
                                        if ("0x0" === e.txReceipt.status) this._trackMetaMetricsEvent({ event: "Swap Failed", sensitiveProperties: { ...e.swapMetaData }, category: S.EVENT.CATEGORIES.SWAPS });
                                        else {
                                            const r = (0, P.getSwapsTokensReceivedFromTxMeta)(e.destinationTokenSymbol, e, e.destinationTokenAddress, e.txParams.from, e.destinationTokenDecimals, t, e.chainId),
                                                n = r ? `${new d.default(r, 10).div(e.swapMetaData.token_to_amount, 10).times(100).round(2)}%` : null,
                                                i = e.txReceipt.gasUsed && e.swapMetaData.estimated_gas ? `${new d.default(e.txReceipt.gasUsed, 16).div(e.swapMetaData.estimated_gas, 10).times(100).round(2)}%` : null,
                                                a = this._calculateTransactionsCost(e, t);
                                            this._trackMetaMetricsEvent({
                                                event: "Swap Completed",
                                                category: S.EVENT.CATEGORIES.SWAPS,
                                                sensitiveProperties: {
                                                    ...e.swapMetaData,
                                                    token_to_amount_received: r,
                                                    quote_vs_executionRatio: n,
                                                    estimated_vs_used_gasRatio: i,
                                                    approval_gas_cost_in_eth: a.approvalGasCostInEth,
                                                    trade_gas_cost_in_eth: a.tradeGasCostInEth,
                                                    trade_and_approval_gas_cost_in_eth: a.tradeAndApprovalGasCostInEth,
                                                },
                                            });
                                        }
                                }
                                _allowanceAmountInRelationToDappProposedValue(e, t, r) {
                                    return e === m.TRANSACTION_APPROVAL_AMOUNT_TYPE.CUSTOM && t && r ? `${new d.default(t, 10).div(r, 10).times(100).round(2)}` : null;
                                }
                                _allowanceAmountInRelationToTokenBalance(e, t, r) {
                                    return (e === m.TRANSACTION_APPROVAL_AMOUNT_TYPE.CUSTOM || e === m.TRANSACTION_APPROVAL_AMOUNT_TYPE.DAPP_PROPOSED) && t && r ? `${new d.default(t, 16).div(r, 10).times(100).round(2)}` : null;
                                }
                                async _buildEventFragmentProperties(e, t) {
                                    const {
                                            type: r,
                                            time: n,
                                            status: i,
                                            chainId: a,
                                            origin: s,
                                            txParams: { gasPrice: o, gas: c, maxFeePerGas: u, maxPriorityFeePerGas: l, estimateSuggested: h, estimateUsed: d },
                                            defaultGasEstimates: f,
                                            originalType: p,
                                            replacedById: g,
                                            metamaskNetworkId: v,
                                            customTokenAmount: w,
                                            dappProposedTokenAmount: E,
                                            currentTokenBalance: S,
                                            originalApprovalAmount: T,
                                            finalApprovalAmount: A,
                                            contractMethodName: x,
                                        } = e,
                                        I = s === b.ORIGIN_METAMASK ? "user" : "dapp",
                                        { assetType: k, tokenStandard: R } = await (0, _.determineTransactionAssetType)(e, this.query, this.getTokenStandardAndDetails),
                                        M = {};
                                    if (((0, _.isEIP1559Transaction)(e) ? ((M.max_fee_per_gas = u), (M.max_priority_fee_per_gas = l)) : (M.gas_price = o), f)) {
                                        const { estimateType: t } = f;
                                        if (t) {
                                            M.default_estimate = t;
                                            let r = e.defaultGasEstimates.maxFeePerGas,
                                                n = e.defaultGasEstimates.maxPriorityFeePerGas;
                                            if ([y.GAS_RECOMMENDATIONS.LOW, y.GAS_RECOMMENDATIONS.MEDIUM, y.GAS_RECOMMENDATIONS.MEDIUM.HIGH].includes(t)) {
                                                var N, C;
                                                const { gasFeeEstimates: e } = await this._getEIP1559GasFeeEstimates();
                                                var O, L;
                                                if (null != e && null !== (N = e[t]) && void 0 !== N && N.suggestedMaxFeePerGas) (r = null === (O = e[t]) || void 0 === O ? void 0 : O.suggestedMaxFeePerGas), (M.default_max_fee_per_gas = r);
                                                if (null != e && null !== (C = e[t]) && void 0 !== C && C.suggestedMaxPriorityFeePerGas)
                                                    (n = null === (L = e[t]) || void 0 === L ? void 0 : L.suggestedMaxPriorityFeePerGas), (M.default_max_priority_fee_per_gas = n);
                                            }
                                        }
                                        e.defaultGasEstimates.gas && (M.default_gas = e.defaultGasEstimates.gas), e.defaultGasEstimates.gasPrice && (M.default_gas_price = e.defaultGasEstimates.gasPrice);
                                    }
                                    h && (M.estimate_suggested = h), d && (M.estimate_used = d), null != t && t.gas_used && (M.gas_used = t.gas_used);
                                    const D = this._getGasValuesInGWEI(M);
                                    let B = "0";
                                    if (e.txParams.maxFeePerGas) {
                                        const { eip1559V2Enabled: e } = this.preferencesStore.getState();
                                        B = e ? "2" : "1";
                                    }
                                    const F = [
                                            m.TRANSACTION_TYPES.CONTRACT_INTERACTION,
                                            m.TRANSACTION_TYPES.TOKEN_METHOD_APPROVE,
                                            m.TRANSACTION_TYPES.TOKEN_METHOD_SAFE_TRANSFER_FROM,
                                            m.TRANSACTION_TYPES.TOKEN_METHOD_SET_APPROVAL_FOR_ALL,
                                            m.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER,
                                            m.TRANSACTION_TYPES.TOKEN_METHOD_TRANSFER_FROM,
                                            m.TRANSACTION_TYPES.SMART,
                                            m.TRANSACTION_TYPES.SWAP,
                                            m.TRANSACTION_TYPES.SWAP_APPROVAL,
                                        ].includes(r),
                                        U = "Approve";
                                    let G,
                                        j,
                                        H,
                                        K,
                                        V = m.TRANSACTION_TYPES.SIMPLE_SEND;
                                    r === m.TRANSACTION_TYPES.CANCEL
                                        ? (V = m.TRANSACTION_TYPES.CANCEL)
                                        : r === m.TRANSACTION_TYPES.RETRY
                                        ? (V = p)
                                        : r === m.TRANSACTION_TYPES.DEPLOY_CONTRACT
                                        ? (V = m.TRANSACTION_TYPES.DEPLOY_CONTRACT)
                                        : F &&
                                          ((V = m.TRANSACTION_TYPES.CONTRACT_INTERACTION),
                                          (j = x),
                                          j === U &&
                                              R === m.TOKEN_STANDARDS.ERC20 &&
                                              ("0" === E || "0" === w ? (G = m.TRANSACTION_APPROVAL_AMOUNT_TYPE.REVOKE) : w ? (G = m.TRANSACTION_APPROVAL_AMOUNT_TYPE.CUSTOM) : E && (G = m.TRANSACTION_APPROVAL_AMOUNT_TYPE.DAPP_PROPOSED),
                                              (H = this._allowanceAmountInRelationToDappProposedValue(G, T, A)),
                                              (K = this._allowanceAmountInRelationToTokenBalance(G, E, S))));
                                    const q = this._getTransaction(g),
                                        W = { RETRY: m.TRANSACTION_TYPES.RETRY, CANCEL: m.TRANSACTION_TYPES.CANCEL, SAME_NONCE: "other" };
                                    let z;
                                    null != t &&
                                        t.dropped &&
                                        ((z = W.SAME_NONCE), (null == q ? void 0 : q.type) === m.TRANSACTION_TYPES.CANCEL ? (z = W.CANCEL) : (null == q ? void 0 : q.type) === m.TRANSACTION_TYPES.RETRY && (z = W.RETRY));
                                    let Y = {
                                        chain_id: a,
                                        referrer: s,
                                        source: I,
                                        network: v,
                                        eip_1559_version: B,
                                        gas_edit_type: "none",
                                        gas_edit_attempted: "none",
                                        account_type: await this.getAccountType(this.getSelectedAddress()),
                                        device_model: await this.getDeviceModel(this.getSelectedAddress()),
                                        asset_type: k,
                                        token_standard: R,
                                        transaction_type: V,
                                        transaction_speed_up: r === m.TRANSACTION_TYPES.RETRY,
                                    };
                                    j === U && (Y = { ...Y, transaction_approval_amount_type: G });
                                    let $ = {
                                        status: i,
                                        transaction_envelope_type: (0, _.isEIP1559Transaction)(e) ? P.TRANSACTION_ENVELOPE_TYPE_NAMES.FEE_MARKET : P.TRANSACTION_ENVELOPE_TYPE_NAMES.LEGACY,
                                        first_seen: n,
                                        gas_limit: c,
                                        transaction_contract_method: j,
                                        transaction_replaced: z,
                                        ...t,
                                        ...D,
                                    };
                                    return j === U && ($ = { ...$, transaction_approval_amount_vs_balance_ratio: K, transaction_approval_amount_vs_proposed_ratio: H }), { properties: Y, sensitiveProperties: $ };
                                }
                                _createTransactionEventFragment(e, t, r, n, i) {
                                    const a = `transaction-${[m.TRANSACTION_EVENTS.FINALIZED, m.TRANSACTION_EVENTS.SUBMITTED].includes(t) ? "submitted" : "added"}-${e.id}`;
                                    if (void 0 === this.getEventFragmentById(a))
                                        switch (t) {
                                            case m.TRANSACTION_EVENTS.ADDED:
                                                this.createEventFragment({
                                                    category: S.EVENT.CATEGORIES.TRANSACTIONS,
                                                    initialEvent: m.TRANSACTION_EVENTS.ADDED,
                                                    successEvent: m.TRANSACTION_EVENTS.APPROVED,
                                                    failureEvent: m.TRANSACTION_EVENTS.REJECTED,
                                                    properties: r,
                                                    sensitiveProperties: n,
                                                    persist: !0,
                                                    uniqueIdentifier: a,
                                                    actionId: i,
                                                });
                                                break;
                                            case m.TRANSACTION_EVENTS.APPROVED:
                                            case m.TRANSACTION_EVENTS.REJECTED:
                                                this.createEventFragment({
                                                    category: S.EVENT.CATEGORIES.TRANSACTIONS,
                                                    successEvent: m.TRANSACTION_EVENTS.APPROVED,
                                                    failureEvent: m.TRANSACTION_EVENTS.REJECTED,
                                                    properties: r,
                                                    sensitiveProperties: n,
                                                    persist: !0,
                                                    uniqueIdentifier: a,
                                                    actionId: i,
                                                });
                                                break;
                                            case m.TRANSACTION_EVENTS.SUBMITTED:
                                                this.createEventFragment({
                                                    category: S.EVENT.CATEGORIES.TRANSACTIONS,
                                                    initialEvent: m.TRANSACTION_EVENTS.SUBMITTED,
                                                    successEvent: m.TRANSACTION_EVENTS.FINALIZED,
                                                    properties: r,
                                                    sensitiveProperties: n,
                                                    persist: !0,
                                                    uniqueIdentifier: a,
                                                    actionId: i,
                                                });
                                                break;
                                            case m.TRANSACTION_EVENTS.FINALIZED:
                                                this.createEventFragment({
                                                    category: S.EVENT.CATEGORIES.TRANSACTIONS,
                                                    successEvent: m.TRANSACTION_EVENTS.FINALIZED,
                                                    properties: r,
                                                    sensitiveProperties: n,
                                                    persist: !0,
                                                    uniqueIdentifier: a,
                                                    actionId: i,
                                                });
                                        }
                                }
                                async _trackTransactionMetricsEvent(e, t, r, n = {}) {
                                    if (!e) return;
                                    const { properties: i, sensitiveProperties: a } = await this._buildEventFragmentProperties(e, n);
                                    let s;
                                    switch ((this._createTransactionEventFragment(e, t, i, a, r), t)) {
                                        case m.TRANSACTION_EVENTS.APPROVED:
                                            (s = `transaction-added-${e.id}`), this.updateEventFragment(s, { properties: i, sensitiveProperties: a }), this.finalizeEventFragment(s);
                                            break;
                                        case m.TRANSACTION_EVENTS.REJECTED:
                                            (s = `transaction-added-${e.id}`), this.updateEventFragment(s, { properties: i, sensitiveProperties: a }), this.finalizeEventFragment(s, { abandoned: !0 });
                                            break;
                                        case m.TRANSACTION_EVENTS.FINALIZED:
                                            (s = `transaction-submitted-${e.id}`), this.updateEventFragment(s, { properties: i, sensitiveProperties: a }), this.finalizeEventFragment(`transaction-submitted-${e.id}`);
                                    }
                                }
                                _getTransactionCompletionTime(e) {
                                    return Math.round((Date.now() - e) / 1e3).toString();
                                }
                                _getGasValuesInGWEI(e) {
                                    const t = {};
                                    for (const r in e) (0, a.isHexString)(e[r]) ? (t[r] = (0, P.hexWEIToDecGWEI)(e[r])) : (t[r] = e[r]);
                                    return t;
                                }
                                _failTransaction(e, t, r) {
                                    this.txStateManager.setTxStatusFailed(e, t);
                                    const n = this.txStateManager.getTransaction(e);
                                    this._trackTransactionMetricsEvent(n, m.TRANSACTION_EVENTS.FINALIZED, r, { error: t.message });
                                }
                                _dropTransaction(e) {
                                    this.txStateManager.setTxStatusDropped(e);
                                    const t = this.txStateManager.getTransaction(e);
                                    this._trackTransactionMetricsEvent(t, m.TRANSACTION_EVENTS.FINALIZED, undefined, { dropped: !0 });
                                }
                            }
                            r.default = L;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            34,
            { "fast-json-patch": 4266, lodash: 4694 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.generateHistoryEntry = s),
                                (r.migrateFromSnapshotsToDiffs = function (e) {
                                    return e.map((t, r) => (0 === r ? t : s(e[r - 1], t)));
                                }),
                                (r.replayHistory = function (e) {
                                    return (0, a.cloneDeep)(e).reduce((e, t) => i.default.applyPatch(e, t).newDocument);
                                }),
                                (r.snapshotFromTxMeta = function (e) {
                                    const t = { ...e };
                                    return delete t.history, (0, a.cloneDeep)(t);
                                });
                            var n,
                                i = (n = e("fast-json-patch")) && n.__esModule ? n : { default: n },
                                a = e("lodash");
                            function s(e, t, r) {
                                const n = i.default.compare(e, t);
                                return n[0] && (r && (n[0].note = r), (n[0].timestamp = Date.now())), n;
                            }
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            35,
            { "../../../../../shared/constants/transaction": 5340, "../../../../../shared/modules/hexstring-utils": 5354, "../../../../../shared/modules/transaction.utils": 5363, "../../../lib/util": 86, "eth-rpc-errors": 2032 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.getFinalStates = function () {
                                    return [a.TRANSACTION_STATUSES.REJECTED, a.TRANSACTION_STATUSES.CONFIRMED, a.TRANSACTION_STATUSES.FAILED, a.TRANSACTION_STATUSES.DROPPED];
                                }),
                                (r.normalizeAndValidateTxParams = function (e, t = !0) {
                                    const r = u(e, t);
                                    return f(r), r;
                                }),
                                (r.normalizeTxParams = u),
                                (r.normalizeTxReceiptGasUsed = function (e) {
                                    return "string" == typeof e ? e : e.toString(16);
                                }),
                                (r.validateConfirmedExternalTransaction = void 0),
                                (r.validateFrom = p),
                                (r.validateRecipient = g),
                                (r.validateTxParams = f);
                            var n = e("eth-rpc-errors"),
                                i = e("../../../lib/util"),
                                a = e("../../../../../shared/constants/transaction"),
                                s = e("../../../../../shared/modules/transaction.utils"),
                                o = e("../../../../../shared/modules/hexstring-utils");
                            const c = {
                                from: i.addHexPrefix,
                                to: (e, t) => (t ? (0, i.addHexPrefix)(e).toLowerCase() : (0, i.addHexPrefix)(e)),
                                nonce: i.addHexPrefix,
                                value: i.addHexPrefix,
                                data: i.addHexPrefix,
                                gas: i.addHexPrefix,
                                gasPrice: i.addHexPrefix,
                                maxFeePerGas: i.addHexPrefix,
                                maxPriorityFeePerGas: i.addHexPrefix,
                                type: i.addHexPrefix,
                                estimateSuggested: (e) => e,
                                estimateUsed: (e) => e,
                            };
                            function u(e, t = !0) {
                                const r = {};
                                for (const n in c) e[n] && (r[n] = c[n](e[n], t));
                                return r;
                            }
                            function l(e, t, r) {
                                if (void 0 !== e[r]) throw n.ethErrors.rpc.invalidParams(`Invalid transaction params: specified ${t} but also included ${r}, these cannot be mixed`);
                            }
                            function h(e, t) {
                                if ("string" != typeof e[t]) throw n.ethErrors.rpc.invalidParams(`Invalid transaction params: ${t} is not a string. got: (${e[t]})`);
                            }
                            function d(e, t) {
                                switch (t) {
                                    case "maxFeePerGas":
                                    case "maxPriorityFeePerGas":
                                        if (e.type && e.type !== a.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET)
                                            throw n.ethErrors.rpc.invalidParams(
                                                `Invalid transaction envelope type: specified type "${e.type}" but including maxFeePerGas and maxPriorityFeePerGas requires type: "${a.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET}"`
                                            );
                                        break;
                                    default:
                                        if (e.type && e.type === a.TRANSACTION_ENVELOPE_TYPES.FEE_MARKET)
                                            throw n.ethErrors.rpc.invalidParams(`Invalid transaction envelope type: specified type "${e.type}" but included a gasPrice instead of maxFeePerGas and maxPriorityFeePerGas`);
                                }
                            }
                            function f(e, t = !0) {
                                if (!e || "object" != typeof e || Array.isArray(e)) throw n.ethErrors.rpc.invalidParams("Invalid transaction params: must be an object.");
                                if (!e.to && !e.data) throw n.ethErrors.rpc.invalidParams('Invalid transaction params: must specify "data" for contract deployments, or "to" (and optionally "data") for all other types of transactions.');
                                if ((0, s.isEIP1559Transaction)({ txParams: e }) && !t)
                                    throw n.ethErrors.rpc.invalidParams("Invalid transaction params: params specify an EIP-1559 transaction but the current network does not support EIP-1559");
                                Object.entries(e).forEach(([t, r]) => {
                                    switch (t) {
                                        case "from":
                                            p(e);
                                            break;
                                        case "to":
                                            g(e);
                                            break;
                                        case "gasPrice":
                                            d(e, "gasPrice"), l(e, "gasPrice", "maxFeePerGas"), l(e, "gasPrice", "maxPriorityFeePerGas"), h(e, "gasPrice");
                                            break;
                                        case "maxFeePerGas":
                                            d(e, "maxFeePerGas"), l(e, "maxFeePerGas", "gasPrice"), h(e, "maxFeePerGas");
                                            break;
                                        case "maxPriorityFeePerGas":
                                            d(e, "maxPriorityFeePerGas"), l(e, "maxPriorityFeePerGas", "gasPrice"), h(e, "maxPriorityFeePerGas");
                                            break;
                                        case "value":
                                            if ((h(e, "value"), r.toString().includes("-"))) throw n.ethErrors.rpc.invalidParams(`Invalid transaction value "${r}": not a positive number.`);
                                            if (r.toString().includes(".")) throw n.ethErrors.rpc.invalidParams(`Invalid transaction value of "${r}": number must be in wei.`);
                                            if (!r.match(/^0x[a-fA-F0-9]+$/u)) throw n.ethErrors.rpc.invalidParams(`Invalid transaction value of "${r}": not a valid hex string.`);
                                            break;
                                        case "chainId":
                                            if ("number" != typeof r && "string" != typeof r) throw n.ethErrors.rpc.invalidParams(`Invalid transaction params: ${t} is not a Number or hex string. got: (${r})`);
                                            break;
                                        default:
                                            h(e, t);
                                    }
                                });
                            }
                            function p(e) {
                                if ("string" != typeof e.from) throw n.ethErrors.rpc.invalidParams(`Invalid "from" address "${e.from}": not a string.`);
                                if (!(0, o.isValidHexAddress)(e.from, { allowNonPrefixed: !1 })) throw n.ethErrors.rpc.invalidParams('Invalid "from" address.');
                            }
                            function g(e) {
                                if ("0x" === e.to || null === e.to) {
                                    if (!e.data) throw n.ethErrors.rpc.invalidParams('Invalid "to" address.');
                                    delete e.to;
                                } else if (e.to !== undefined && !(0, o.isValidHexAddress)(e.to, { allowNonPrefixed: !1 })) throw n.ethErrors.rpc.invalidParams('Invalid "to" address.');
                                return e;
                            }
                            r.validateConfirmedExternalTransaction = ({ txMeta: e, pendingTransactions: t, confirmedTransactions: r } = {}) => {
                                if (!e || !e.txParams) throw n.ethErrors.rpc.invalidParams('"txMeta" or "txMeta.txParams" is missing');
                                if (e.status !== a.TRANSACTION_STATUSES.CONFIRMED) throw n.ethErrors.rpc.invalidParams('External transaction status should be "confirmed"');
                                const i = e.txParams.nonce;
                                if (t && t.length > 0) {
                                    if (
                                        t.find((e) => {
                                            var t;
                                            return (null === (t = e.txParams) || void 0 === t ? void 0 : t.nonce) === i;
                                        })
                                    )
                                        throw n.ethErrors.rpc.invalidParams("External transaction nonce should not be in pending txs");
                                }
                                if (r && r.length > 0) {
                                    if (
                                        r.find((e) => {
                                            var t;
                                            return (null === (t = e.txParams) || void 0 === t ? void 0 : t.nonce) === i;
                                        })
                                    )
                                        throw n.ethErrors.rpc.invalidParams("External transaction nonce should not be in confirmed txs");
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            36,
            { "../../../../shared/constants/transaction": 5340, "./tx-state-manager": 38, "ethjs-query": 2543, loglevel: 4707, "safe-event-emitter": 5013 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = c(e("safe-event-emitter")),
                                i = c(e("loglevel")),
                                a = c(e("ethjs-query")),
                                s = e("../../../../shared/constants/transaction"),
                                o = e("./tx-state-manager");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            function u(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                            }
                            class l extends n.default {
                                constructor(e) {
                                    super(),
                                        u(this, "DROPPED_BUFFER_COUNT", 3),
                                        u(this, "droppedBlocksBufferByHash", new Map()),
                                        (this.query = e.query || new a.default(e.provider)),
                                        (this.nonceTracker = e.nonceTracker),
                                        (this.getPendingTransactions = e.getPendingTransactions),
                                        (this.getCompletedTransactions = e.getCompletedTransactions),
                                        (this.publishTransaction = e.publishTransaction),
                                        (this.approveTransaction = e.approveTransaction),
                                        (this.confirmTransaction = e.confirmTransaction);
                                }
                                async updatePendingTxs() {
                                    console.info('background-1 updatePendingTxs');
                                    const e = await this.nonceTracker.getGlobalLock();
                                    try {
                                        const e = this.getPendingTransactions();
                                        await Promise.all(e.map((e) => this._checkPendingTx(e)));
                                    } catch (e) {
                                        i.default.error("PendingTransactionTracker - Error updating pending transactions"), i.default.error(e);
                                    }
                                    e.releaseLock();
                                }
                                async resubmitPendingTxs(e) {
                                    console.info('background-1 resubmitPendingTxs', e);
                                    const t = this.getPendingTransactions();
                                    if (t.length)
                                        for (const i of t)
                                            try {
                                                await this._resubmitTx(i, e);
                                            } catch (e) {
                                                var r, n;
                                                const t = (null === (r = e.value) || void 0 === r || null === (n = r.message) || void 0 === n ? void 0 : n.toLowerCase()) || e.message.toLowerCase();
                                                if (
                                                    t.includes("replacement transaction underpriced") ||
                                                    t.includes("known transaction") ||
                                                    t.includes("gas price too low to replace") ||
                                                    t.includes("transaction with the same hash was already imported") ||
                                                    t.includes("gateway timeout") ||
                                                    t.includes("nonce too low")
                                                )
                                                    return;
                                                (i.warning = { error: t, message: o.ERROR_SUBMITTING }), this.emit("tx:warning", i, e);
                                            }
                                }
                                async _resubmitTx(e, t) {
                                    console.info('background-1 _resubmitTx', e);
                                    return;
                                    e.firstRetryBlockNumber || this.emit("tx:block-update", e, t);
                                    const r = e.firstRetryBlockNumber || t,
                                        n = Number.parseInt(t, 16) - Number.parseInt(r, 16),
                                        i = e.retryCount || 0;
                                    if (n < Math.min(50, Math.pow(2, i))) return undefined;
                                    if (!("rawTx" in e)) return this.approveTransaction(e.id);
                                    const { rawTx: a } = e,
                                        s = await this.publishTransaction(a);
                                    return this.emit("tx:retry", e), s;
                                }
                                async _checkPendingTx(e) {
                                    console.info('background-1 _checkPendingTx hash', e.hash);
                                    console.info('background-1 _checkPendingTx id', e.id);
                                    console.info('background-1 _checkPendingTx status', e.status);
                                    const t = e.hash,
                                        r = e.id;
                                    if (e.status === s.TRANSACTION_STATUSES.SUBMITTED) {
                                        if (!t) {
                                            const e = new Error("We had an error while submitting this transaction, please try again.");
                                            return (e.name = "NoTxHashError"), void this.emit("tx:failed", r, e);
                                        }
                                        try {
                                            // Need to get the data from ilcoin explorer to be sure if the tx is confirmed.
                                            const e = await this.query.getTransactionReceipt(t);
                                            console.info('background-1 getTransactionReceipt e', e);
                                            if (null != e && e.blockNumber) {
                                            // if (null != e && e.blockNumber) {
                                                // const { baseFeePerGas: t, timestamp: n } = await this.query.getBlockByHash(null == e ? void 0 : e.blockHash, !1);
                                                console.info('background-1 _checkPendingTx e', e);
                                                return void this.emit("tx:confirmed", r, e, t, n);
                                            }
                                        } catch (t) {
                                            return (e.warning = { error: t.message, message: "There was a problem loading this transaction." }), void this.emit("tx:warning", e, t);
                                        }
                                        // if (await this._checkIfNonceIsTaken(e)) this.emit("tx:dropped", r);
                                        // else {
                                        //     try {
                                        //         const e = await this.query.getTransactionReceipt(t);
                                        //         if (null != e && e.blockNumber) {
                                        //             const { baseFeePerGas: t, timestamp: n } = await this.query.getBlockByHash(null == e ? void 0 : e.blockHash, !1);
                                        //             return void this.emit("tx:confirmed", r, e, t, n);
                                        //         }
                                        //     } catch (t) {
                                        //         return (e.warning = { error: t.message, message: "There was a problem loading this transaction." }), void this.emit("tx:warning", e, t);
                                        //     }
                                        //     (await this._checkIfTxWasDropped(e)) && this.emit("tx:dropped", r);
                                        // }
                                    }
                                }
                                async _checkIfTxWasDropped(e) {
                                    console.info('background-1 _checkIfTxWasDropped', e);
                                    const {
                                            hash: t,
                                            txParams: { nonce: r, from: n },
                                        } = e,
                                        i = await this.query.getTransactionCount(n);
                                    if (parseInt(r, 16) >= i.toNumber()) return !1;
                                    this.droppedBlocksBufferByHash.has(t) || this.droppedBlocksBufferByHash.set(t, 0);
                                    const a = this.droppedBlocksBufferByHash.get(t);
                                    return a < this.DROPPED_BUFFER_COUNT ? (this.droppedBlocksBufferByHash.set(t, a + 1), !1) : (this.droppedBlocksBufferByHash.delete(t), !0);
                                }
                                async _checkIfNonceIsTaken(e) {
                                    console.info('background-1 _checkIfNonceIsTaken');
                                    const t = e.txParams.from;
                                    return this.getCompletedTransactions(t).some((t) => !(t.id === e.id) && t.txParams.nonce === e.txParams.nonce);
                                }
                            }
                            r.default = l;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            37,
            { "../../lib/util": 86, "ethereumjs-util": 2107, "ethjs-query": 2543, lodash: 4694, loglevel: 4707 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = c(e("ethjs-query")),
                                i = c(e("loglevel")),
                                a = e("ethereumjs-util"),
                                s = e("lodash"),
                                o = e("../../lib/util");
                            function c(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            r.default = class {
                                constructor(e) {
                                    this.query = new n.default(e);
                                }
                                async analyzeGasUsage(e) {
                                    const t = await this.query.getBlockByNumber("latest", !1),
                                        r = (0, o.hexToBn)(t.gasLimit),
                                        n = (0, o.BnMultiplyByFraction)(r, 19, 20);
                                    let a,
                                        s = (0, o.bnToHex)(n);
                                    try {
                                        s = await this.estimateTxGas(e);
                                    } catch (e) {
                                        i.default.warn(e), (a = { reason: e.message, errorKey: e.errorKey, debug: { blockNumber: t.number, blockGasLimit: t.gasLimit } });
                                    }
                                    return { blockGasLimit: t.gasLimit, estimatedGasHex: s, simulationFails: a };
                                }
                                async estimateTxGas(e) {
                                    const t = (0, s.cloneDeep)(e.txParams);
                                    return delete t.gasPrice, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, await this.query.estimateGas(t);
                                }
                                addGasBuffer(e, t, r = 1.5) {
                                    const n = (0, o.hexToBn)(e),
                                        i = (0, o.hexToBn)(t).muln(0.9),
                                        a = n.muln(r);
                                    return n.gt(i) ? (0, o.bnToHex)(n) : a.lt(i) ? (0, o.bnToHex)(a) : (0, o.bnToHex)(i);
                                }
                                async getBufferedGasLimit(e, t) {
                                    const { blockGasLimit: r, estimatedGasHex: n, simulationFails: i } = await this.analyzeGasUsage(e);
                                    return { gasLimit: this.addGasBuffer((0, a.addHexPrefix)(n), r, t), simulationFails: i };
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            38,
            {
                "../../../../shared/constants/app": 5328,
                "../../../../shared/constants/transaction": 5340,
                "../../../../shared/modules/random-id": 5358,
                "../../../../shared/modules/transaction.utils": 5363,
                "../../metamask-controller": 87,
                "./lib/tx-state-history-helpers": 34,
                "./lib/util": 35,
                "@metamask/obs-store": 1177,
                lodash: 4694,
                loglevel: 4707,
                "safe-event-emitter": 5013,
            },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.ERROR_SUBMITTING = void 0);
                            var n = p(e("safe-event-emitter")),
                                i = e("@metamask/obs-store"),
                                a = p(e("loglevel")),
                                s = e("lodash"),
                                o = p(e("../../../../shared/modules/random-id")),
                                c = e("../../../../shared/constants/transaction"),
                                u = e("../../metamask-controller"),
                                l = e("../../../../shared/modules/transaction.utils"),
                                h = e("../../../../shared/constants/app"),
                                d = e("./lib/tx-state-history-helpers"),
                                f = e("./lib/util");
                            function p(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            const g = "There was an error when resubmitting this transaction.";
                            r.ERROR_SUBMITTING = g;
                            class m extends n.default {
                                constructor({ initState: e, txHistoryLimit: t, getNetwork: r, getCurrentChainId: n }) {
                                    super(), (this.store = new i.ObservableStore({ transactions: {}, ...e })), (this.txHistoryLimit = t), (this.getNetwork = r), (this.getCurrentChainId = n);
                                }
                                generateTxMeta(e = {}) {
                                    var t;
                                    const r = this.getNetwork(),
                                        n = this.getCurrentChainId();
                                    if ("loading" === r) throw new Error("MetaMask is having trouble connecting to the network");
                                    let i = null;
                                    return (
                                        e.txParams &&
                                            "string" == typeof e.origin &&
                                            e.origin !== h.ORIGIN_METAMASK &&
                                            (void 0 !== e.txParams.gasPrice
                                                ? (i = { gasPrice: e.txParams.gasPrice })
                                                : (void 0 === e.txParams.maxFeePerGas && void 0 === e.txParams.maxPriorityFeePerGas) || (i = { maxPriorityFeePerGas: e.txParams.maxPriorityFeePerGas, maxFeePerGas: e.txParams.maxFeePerGas }),
                                            void 0 !== e.txParams.gas && (i = { ...i, gas: e.txParams.gas })),
                                        {
                                            id: (0, o.default)(),
                                            time: new Date().getTime(),
                                            status: c.TRANSACTION_STATUSES.UNAPPROVED,
                                            metamaskNetworkId: r,
                                            originalGasEstimate: null === (t = e.txParams) || void 0 === t ? void 0 : t.gas,
                                            userEditedGasLimit: !1,
                                            chainId: n,
                                            loadingDefaults: !0,
                                            dappSuggestedGasFees: i,
                                            sendFlowHistory: [],
                                            ...e,
                                        }
                                    );
                                }
                                getUnapprovedTxList() {
                                    const e = this.getCurrentChainId(),
                                        t = this.getNetwork();
                                    return (0, s.pickBy)(this.store.getState().transactions, (r) => r.status === c.TRANSACTION_STATUSES.UNAPPROVED && (0, l.transactionMatchesNetwork)(r, e, t));
                                }
                                getApprovedTransactions(e) {
                                    const t = { status: c.TRANSACTION_STATUSES.APPROVED };
                                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                                }
                                getPendingTransactions(e) {
                                    const t = { status: c.TRANSACTION_STATUSES.SUBMITTED };
                                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                                }
                                getConfirmedTransactions(e) {
                                    const t = { status: c.TRANSACTION_STATUSES.CONFIRMED };
                                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                                }
                                getTransactionWithActionId(e) {
                                    return (0, s.values)((0, s.pickBy)(this.store.getState().transactions, (t) => t.actionId === e))[0];
                                }
                                addTransaction(e) {
                                    e.txParams && (e.txParams = (0, f.normalizeAndValidateTxParams)(e.txParams, !1)),
                                        this.once(`${e.id}:signed`, () => {
                                            this.removeAllListeners(`${e.id}:rejected`);
                                        }),
                                        this.once(`${e.id}:rejected`, () => {
                                            this.removeAllListeners(`${e.id}:signed`);
                                        }),
                                        (e.history = []);
                                    const t = (0, d.snapshotFromTxMeta)(e);
                                    e.history.push(t);
                                    const r = this.getTransactions({ filterToCurrentNetwork: !1 }),
                                        { txHistoryLimit: n } = this,
                                        i = new Set(),
                                        a = r
                                            .reverse()
                                            .filter((e) => {
                                                const { nonce: t, from: r } = e.txParams,
                                                    { chainId: a, metamaskNetworkId: s, status: o } = e,
                                                    c = `${t}-${null != a ? a : s}-${r}`;
                                                return !i.has(c) && (!(i.size < n - 1 || !1 === (0, f.getFinalStates)().includes(o)) || (i.add(c), !1));
                                            })
                                            .map((e) => e.id);
                                    return this._deleteTransactions(a), this._addTransactionsToState([e]), e;
                                }
                                addExternalTransaction(e) {
                                    var t;
                                    const r = null == e || null === (t = e.txParams) || void 0 === t ? void 0 : t.from,
                                        n = this.getConfirmedTransactions(r),
                                        i = this.getPendingTransactions(r);
                                    return (0, f.validateConfirmedExternalTransaction)({ txMeta: e, pendingTransactions: i, confirmedTransactions: n }), this._addTransactionsToState([e]), e;
                                }
                                getTransaction(e) {
                                    const { transactions: t } = this.store.getState();
                                    return t[e];
                                }
                                updateTransaction(e, t) {
                                    if (e.txParams)
                                        try {
                                            e.txParams = (0, f.normalizeAndValidateTxParams)(e.txParams, !1);
                                        } catch (t) {
                                            if (e.warning.message !== g) throw t;
                                            return void this.setTxStatusFailed(e.id, t);
                                        }
                                    this._updateTransactionHistory(e, t);
                                }
                                _updateTransactionHistory(e, t) {
                                    const r = (0, d.snapshotFromTxMeta)(e),
                                        n = (0, d.replayHistory)(e.history),
                                        i = (0, d.generateHistoryEntry)(n, r, t);
                                    i.length && e.history.push(i);
                                    const a = e.id;
                                    this.store.updateState({ transactions: { ...this.store.getState().transactions, [a]: e } });
                                }
                                getTransactions({ searchCriteria: e = {}, initialList: t, filterToCurrentNetwork: r = !0, limit: n } = {}) {
                                    const i = this.getCurrentChainId(),
                                        a = this.getNetwork(),
                                        o = (0, s.mapValues)(e, (e) => ("function" == typeof e ? e : (t) => t === e)),
                                        c = t ? (0, s.keyBy)(t, "id") : this.store.getState().transactions,
                                        u = (0, s.sortBy)(
                                            (0, s.pickBy)(c, (e) => {
                                                if (r && !1 === (0, l.transactionMatchesNetwork)(e, i, a)) return !1;
                                                for (const [t, r] of Object.entries(o))
                                                    if (t in e.txParams) {
                                                        if (!1 === r(e.txParams[t])) return !1;
                                                    } else if (!1 === r(e[t])) return !1;
                                                return !0;
                                            }),
                                            "time"
                                        );
                                    if (n !== undefined) {
                                        const e = new Set(),
                                            t = [];
                                        for (let r = u.length - 1; r > -1; r--) {
                                            const i = u[r],
                                                { nonce: a } = i.txParams;
                                            if (!e.has(a)) {
                                                if (!(e.size < n)) continue;
                                                e.add(a);
                                            }
                                            t.unshift(i);
                                        }
                                        return t;
                                    }
                                    return u;
                                }
                                setTxStatusRejected(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.REJECTED), this._deleteTransaction(e);
                                }
                                setTxStatusUnapproved(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.UNAPPROVED);
                                }
                                setTxStatusApproved(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.APPROVED);
                                }
                                setTxStatusSigned(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.SIGNED);
                                }
                                setTxStatusSubmitted(e) {
                                    const t = this.getTransaction(e);
                                    (t.submittedTime = new Date().getTime()), this.updateTransaction(t, "txStateManager - add submitted time stamp"), this._setTransactionStatus(e, c.TRANSACTION_STATUSES.SUBMITTED);
                                }
                                setTxStatusConfirmed(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.CONFIRMED);
                                }
                                setTxStatusDropped(e) {
                                    this._setTransactionStatus(e, c.TRANSACTION_STATUSES.DROPPED);
                                }
                                setTxStatusFailed(e, t) {
                                    var r;
                                    const n = t || new Error("Internal metamask failure"),
                                        i = this.getTransaction(e);
                                    (i.err = { message: (null === (r = n.message) || void 0 === r ? void 0 : r.toString()) || n.toString(), rpc: n.value, stack: n.stack }),
                                        this._updateTransactionHistory(i, "transactions:tx-state-manager#fail - add error"),
                                        this._setTransactionStatus(e, c.TRANSACTION_STATUSES.FAILED);
                                }
                                wipeTransactions(e) {
                                    const { transactions: t } = this.store.getState(),
                                        r = this.getNetwork(),
                                        n = this.getCurrentChainId();
                                    this.store.updateState({ transactions: (0, s.omitBy)(t, (t) => t.txParams.from === e && (0, l.transactionMatchesNetwork)(t, n, r)) });
                                }
                                clearUnapprovedTxs() {
                                    this.store.updateState({ transactions: (0, s.omitBy)(this.store.getState().transactions, (e) => e.status === c.TRANSACTION_STATUSES.UNAPPROVED) });
                                }
                                _setTransactionStatus(e, t) {
                                    const r = this.getTransaction(e);
                                    if (r) {
                                        r.status = t;
                                        try {
                                            this._updateTransactionHistory(r, `txStateManager: setting status to ${t}`),
                                                this.emit(`${r.id}:${t}`, e),
                                                this.emit("tx:status-update", e, t),
                                                [c.TRANSACTION_STATUSES.SUBMITTED, c.TRANSACTION_STATUSES.REJECTED, c.TRANSACTION_STATUSES.FAILED].includes(t) && this.emit(`${r.id}:finished`, r),
                                                this.emit(u.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                                        } catch (e) {
                                            a.default.error(e);
                                        }
                                    }
                                }
                                _addTransactionsToState(e) {
                                    this.store.updateState({ transactions: e.reduce((e, t) => ((e[t.id] = t), e), this.store.getState().transactions) });
                                }
                                _deleteTransaction(e) {
                                    const { transactions: t } = this.store.getState();
                                    delete t[e], this.store.updateState({ transactions: t });
                                }
                                _deleteTransactions(e) {
                                    const { transactions: t } = this.store.getState();
                                    e.forEach((e) => {
                                        delete t[e];
                                    }),
                                        this.store.updateState({ transactions: t });
                                }
                            }
                            r.default = m;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            39,
            { "../../shared/constants/app": 5328, "./lib/util": 86, "webextension-polyfill": 5306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.onMessageReceived = r.checkForMultipleVersionsRunning = void 0);
                            var n,
                                i = (n = e("webextension-polyfill")) && n.__esModule ? n : { default: n },
                                a = e("../../shared/constants/app"),
                                s = e("./lib/util");
                            const o = "isRunning";
                            r.onMessageReceived = (e) => {
                                e === o && console.warn("Warning! You have multiple instances of MetaMask running!");
                            };
                            r.checkForMultipleVersionsRunning = async () => {
                                if ((0, s.getPlatform)() !== a.PLATFORM_CHROME && (0, s.getPlatform)() !== a.PLATFORM_FIREFOX) return;
                                const e = (0, s.getPlatform)() === a.PLATFORM_CHROME ? a.CHROME_BUILD_IDS : a.FIREFOX_BUILD_IDS,
                                    t = i.default.runtime.id;
                                for (const r of e)
                                    if (r !== t)
                                        try {
                                            await i.default.runtime.sendMessage(r, o);
                                        } catch (e) {}
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            40,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = { config: {}, PreferencesController: { frequentRpcListDetail: [{ rpcUrl: "http://localhost:8545", chainId: "0x539", ticker: "ETH", nickname: "Localhost 8545", rpcPrefs: {} }] } };
                            r.default = n;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            41,
            { "@metamask/controllers": 1034, "@metamask/obs-store": 1177 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = e("@metamask/obs-store"),
                                i = e("@metamask/controllers");
                            class a extends n.ObservableStore {
                                constructor({ config: e, controllerMessenger: t, state: r, persist: n }) {
                                    var i, a, s;
                                    super(r),
                                        (s = {}),
                                        (a = "config") in (i = this) ? Object.defineProperty(i, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (i[a] = s),
                                        (this.persist = n),
                                        (this.controllerMessenger = t),
                                        e && this.updateStructure(e);
                                }
                                updateStructure(e) {
                                    (this.config = e), this.removeAllListeners();
                                    for (const t of Object.keys(e)) {
                                        if (!e[t]) throw new Error(`Undefined '${t}'`);
                                        const r = e[t];
                                        r.subscribe
                                            ? e[t].subscribe((e) => {
                                                  this.updateState({ [t]: e });
                                              })
                                            : this.controllerMessenger.subscribe(`${r.name}:stateChange`, (r) => {
                                                  let n = r;
                                                  this.persist && (n = (0, i.getPersistentState)(r, e[t].metadata)), this.updateState({ [t]: n });
                                              });
                                    }
                                }
                                getFlatState() {
                                    if (!this.config) return {};
                                    let e = {};
                                    for (const t of Object.keys(this.config)) {
                                        const r = this.config[t],
                                            n = r.getState ? r.getState() : r.state;
                                        e = { ...e, ...n };
                                    }
                                    return e;
                                }
                            }
                            r.default = a;
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            42,
            { "../../../shared/constants/network": 5333, "../constants/contracts": 5, "@metamask/obs-store": 1177, "eth-query": 2028, ethers: 2131, loglevel: 4707, pify: 4796, "single-call-balance-checker-abi": 5082 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                            var n = h(e("eth-query")),
                                i = e("@metamask/obs-store"),
                                a = h(e("loglevel")),
                                s = h(e("pify")),
                                o = e("ethers"),
                                c = h(e("single-call-balance-checker-abi")),
                                u = e("../../../shared/constants/network"),
                                l = e("../constants/contracts");
                            function h(e) {
                                return e && e.__esModule ? e : { default: e };
                            }
                            r.default = class {
                                constructor(e = {}) {
                                    (this.store = new i.ObservableStore({ accounts: {}, currentBlockGasLimit: "" })),
                                        (this._provider = e.provider),
                                        (this._query = (0, s.default)(new n.default(this._provider))),
                                        (this._blockTracker = e.blockTracker),
                                        (this._currentBlockNumber = this._blockTracker.getCurrentBlock()),
                                        this._blockTracker.once("latest", (e) => {
                                            this._currentBlockNumber = e;
                                        }),
                                        (this._updateForBlock = this._updateForBlock.bind(this)),
                                        (this.getCurrentChainId = e.getCurrentChainId),
                                        (this.getNetworkIdentifier = e.getNetworkIdentifier),
                                        (this.ethersProvider = new o.ethers.providers.Web3Provider(this._provider));
                                }
                                start() {
                                    this._blockTracker.removeListener("latest", this._updateForBlock), this._blockTracker.addListener("latest", this._updateForBlock), this._updateAccounts();
                                }
                                stop() {
                                    this._blockTracker.removeListener("latest", this._updateForBlock);
                                }
                                syncWithAddresses(e) {
                                    const { accounts: t } = this.store.getState(),
                                        r = Object.keys(t),
                                        n = [];
                                    e.forEach((e) => {
                                        r.includes(e) || n.push(e);
                                    });
                                    const i = [];
                                    r.forEach((t) => {
                                        e.includes(t) || i.push(t);
                                    }),
                                        this.addAccounts(n),
                                        this.removeAccount(i);
                                }
                                addAccounts(e) {
                                    const { accounts: t } = this.store.getState();
                                    e.forEach((e) => {
                                        t[e] = {};
                                    }),
                                        this.store.updateState({ accounts: t }),
                                        this._currentBlockNumber && this._updateAccounts();
                                }
                                removeAccount(e) {
                                    const { accounts: t } = this.store.getState();
                                    e.forEach((e) => {
                                        delete t[e];
                                    }),
                                        this.store.updateState({ accounts: t });
                                }
                                clearAccounts() {
                                    this.store.updateState({ accounts: {} });
                                }
                                async _updateForBlock(e) {
                                    console.info('background-1 _updateForBlock', e);
                                    this._currentBlockNumber = e;
                                    const t = await this._query.getBlockByNumber(e, !1);
                                    if (t){
                                      const r = t.gasLimit;
                                      this.store.updateState({ currentBlockGasLimit: r });
                                    }
                                    try {
                                        await this._updateAccounts();
                                    } catch (e) {
                                        a.default.error(e);
                                    }
                                }
                                async _updateAccounts() {
                                    const { accounts: e } = this.store.getState(),
                                        t = Object.keys(e),
                                        r = this.getCurrentChainId(),
                                        n = this.getNetworkIdentifier();
                                    if (n === u.LOCALHOST_RPC_URL || "http://127.0.0.1:8545" === n) await Promise.all(t.map(this._updateAccount.bind(this)));
                                    else
                                        switch (r) {
                                            case u.CHAIN_IDS.MAINNET:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS);
                                                break;
                                            case u.CHAIN_IDS.GOERLI:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_GOERLI);
                                                break;
                                            case u.CHAIN_IDS.SEPOLIA:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_SEPOLIA);
                                                break;
                                            case u.CHAIN_IDS.BSC:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_BSC);
                                                break;
                                            case u.CHAIN_IDS.OPTIMISM:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_OPTIMISM);
                                                break;
                                            case u.CHAIN_IDS.POLYGON:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_POLYGON);
                                                break;
                                            case u.CHAIN_IDS.AVALANCHE:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_AVALANCHE);
                                                break;
                                            case u.CHAIN_IDS.FANTOM:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_FANTOM);
                                                break;
                                            case u.CHAIN_IDS.ARBITRUM:
                                                await this._updateAccountsViaBalanceChecker(t, l.SINGLE_CALL_BALANCES_ADDRESS_ARBITRUM);
                                                break;
                                            default:
                                                await Promise.all(t.map(this._updateAccount.bind(this)));
                                        }
                                }
                                async _updateAccount(e) {
                                    let t = "0x0";
                                    try {
                                        console.info('background-1 _updateAccount', e);
                                        t = await this._query.getBalance(e);
                                    } catch (e) {
                                        var r, n;
                                        if ("eth_getBalance" !== (null === (r = e.data) || void 0 === r || null === (n = r.request) || void 0 === n ? void 0 : n.method)) throw e;
                                    }
                                    const i = { address: e, balance: t },
                                        { accounts: a } = this.store.getState();
                                    a[e] && ((a[e] = i), this.store.updateState({ accounts: a }));
                                }
                                async _updateAccountsViaBalanceChecker(e, t) {
                                    console.info('background-1 _updateAccountsViaBalanceChecker', e);
                                    const { accounts: r } = this.store.getState();
                                    this.ethersProvider = new o.ethers.providers.Web3Provider(this._provider);
                                    const n = await new o.ethers.Contract(t, c.default, this.ethersProvider),
                                        i = ["0x0000000000000000000000000000000000000000"];
                                    try {
                                        const t = await n.balances(e, i);
                                        e.forEach((e, n) => {
                                            const i = t[n] ? t[n].toHexString() : "0x0";
                                            r[e] = { address: e, balance: i };
                                        }),
                                            this.store.updateState({ accounts: r });
                                    } catch (t) {
                                        a.default.warn("MetaMask - Account Tracker single call balance fetch failed", t), Promise.all(e.map(this._updateAccount.bind(this)));
                                    }
                                }
                            };
                        };
                    };
            },
            { package: "$root$" },
        ],
        [
            4265,
            { "./helpers": 4267, "fast-deep-equal": 4268 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            var n = e("fast-deep-equal"),
                                i = e("./helpers");
                            (r.JsonPatchError = i.PatchError), (r.deepClone = i._deepClone);
                            var a = {
                                    add: function (e, t, r) {
                                        return (e[t] = this.value), { newDocument: r };
                                    },
                                    remove: function (e, t, r) {
                                        var n = e[t];
                                        return delete e[t], { newDocument: r, removed: n };
                                    },
                                    replace: function (e, t, r) {
                                        var n = e[t];
                                        return (e[t] = this.value), { newDocument: r, removed: n };
                                    },
                                    move: function (e, t, r) {
                                        var n = o(r, this.path);
                                        n && (n = i._deepClone(n));
                                        var a = c(r, { op: "remove", path: this.from }).removed;
                                        return c(r, { op: "add", path: this.path, value: a }), { newDocument: r, removed: n };
                                    },
                                    copy: function (e, t, r) {
                                        var n = o(r, this.from);
                                        return c(r, { op: "add", path: this.path, value: i._deepClone(n) }), { newDocument: r };
                                    },
                                    test: function (e, t, r) {
                                        return { newDocument: r, test: n(e[t], this.value) };
                                    },
                                    _get: function (e, t, r) {
                                        return (this.value = e[t]), { newDocument: r };
                                    },
                                },
                                s = {
                                    add: function (e, t, r) {
                                        return i.isInteger(t) ? e.splice(t, 0, this.value) : (e[t] = this.value), { newDocument: r, index: t };
                                    },
                                    remove: function (e, t, r) {
                                        return { newDocument: r, removed: e.splice(t, 1)[0] };
                                    },
                                    replace: function (e, t, r) {
                                        var n = e[t];
                                        return (e[t] = this.value), { newDocument: r, removed: n };
                                    },
                                    move: a.move,
                                    copy: a.copy,
                                    test: a.test,
                                    _get: a._get,
                                };
                            function o(e, t) {
                                if ("" == t) return e;
                                var r = { op: "_get", path: t };
                                return c(e, r), r.value;
                            }
                            function c(e, t, c, u, l, d) {
                                if ((void 0 === c && (c = !1), void 0 === u && (u = !0), void 0 === l && (l = !0), void 0 === d && (d = 0), c && ("function" == typeof c ? c(t, 0, e, t.path) : h(t, 0)), "" === t.path)) {
                                    var f = { newDocument: e };
                                    if ("add" === t.op) return (f.newDocument = t.value), f;
                                    if ("replace" === t.op) return (f.newDocument = t.value), (f.removed = e), f;
                                    if ("move" === t.op || "copy" === t.op) return (f.newDocument = o(e, t.from)), "move" === t.op && (f.removed = e), f;
                                    if ("test" === t.op) {
                                        if (((f.test = n(e, t.value)), !1 === f.test)) throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", d, t, e);
                                        return (f.newDocument = e), f;
                                    }
                                    if ("remove" === t.op) return (f.removed = e), (f.newDocument = null), f;
                                    if ("_get" === t.op) return (t.value = e), f;
                                    if (c) throw new r.JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", d, t, e);
                                    return f;
                                }
                                u || (e = i._deepClone(e));
                                var p = (t.path || "").split("/"),
                                    g = e,
                                    m = 1,
                                    v = p.length,
                                    y = undefined,
                                    w = void 0,
                                    E = void 0;
                                for (E = "function" == typeof c ? c : h; ; ) {
                                    if (((w = p[m]), l && "__proto__" == w))
                                        throw new TypeError(
                                            "JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
                                        );
                                    if ((c && y === undefined && (g[w] === undefined ? (y = p.slice(0, m).join("/")) : m == v - 1 && (y = t.path), y !== undefined && E(t, 0, e, y)), m++, Array.isArray(g))) {
                                        if ("-" === w) w = g.length;
                                        else {
                                            if (c && !i.isInteger(w))
                                                throw new r.JsonPatchError(
                                                    "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
                                                    "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
                                                    d,
                                                    t,
                                                    e
                                                );
                                            i.isInteger(w) && (w = ~~w);
                                        }
                                        if (m >= v) {
                                            if (c && "add" === t.op && w > g.length) throw new r.JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", d, t, e);
                                            if (!1 === (f = s[t.op].call(t, g, w, e)).test) throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", d, t, e);
                                            return f;
                                        }
                                    } else if ((w && -1 != w.indexOf("~") && (w = i.unescapePathComponent(w)), m >= v)) {
                                        if (!1 === (f = a[t.op].call(t, g, w, e)).test) throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", d, t, e);
                                        return f;
                                    }
                                    g = g[w];
                                }
                            }
                            function u(e, t, n, a, s) {
                                if ((void 0 === a && (a = !0), void 0 === s && (s = !0), n && !Array.isArray(t))) throw new r.JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
                                a || (e = i._deepClone(e));
                                for (var o = new Array(t.length), u = 0, l = t.length; u < l; u++) (o[u] = c(e, t[u], n, !0, s, u)), (e = o[u].newDocument);
                                return (o.newDocument = e), o;
                            }
                            function l(e, t, n) {
                                var i = c(e, t);
                                if (!1 === i.test) throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
                                return i.newDocument;
                            }
                            function h(e, t, n, s) {
                                if ("object" != typeof e || null === e || Array.isArray(e)) throw new r.JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, n);
                                if (!a[e.op]) throw new r.JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, n);
                                if ("string" != typeof e.path) throw new r.JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, n);
                                if (0 !== e.path.indexOf("/") && e.path.length > 0) throw new r.JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, n);
                                if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from)
                                    throw new r.JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, n);
                                if (("add" === e.op || "replace" === e.op || "test" === e.op) && e.value === undefined)
                                    throw new r.JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, n);
                                if (("add" === e.op || "replace" === e.op || "test" === e.op) && i.hasUndefined(e.value))
                                    throw new r.JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, n);
                                if (n)
                                    if ("add" == e.op) {
                                        var o = e.path.split("/").length,
                                            c = s.split("/").length;
                                        if (o !== c + 1 && o !== c) throw new r.JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, n);
                                    } else if ("replace" === e.op || "remove" === e.op || "_get" === e.op) {
                                        if (e.path !== s) throw new r.JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, n);
                                    } else if ("move" === e.op || "copy" === e.op) {
                                        var u = d([{ op: "_get", path: e.from, value: undefined }], n);
                                        if (u && "OPERATION_PATH_UNRESOLVABLE" === u.name) throw new r.JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, n);
                                    }
                            }
                            function d(e, t, n) {
                                try {
                                    if (!Array.isArray(e)) throw new r.JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
                                    if (t) u(i._deepClone(t), i._deepClone(e), n || !0);
                                    else {
                                        n = n || h;
                                        for (var a = 0; a < e.length; a++) n(e[a], a, t, undefined);
                                    }
                                } catch (e) {
                                    if (e instanceof r.JsonPatchError) return e;
                                    throw e;
                                }
                            }
                            (r.getValueByPointer = o),
                                (r.applyOperation = c),
                                (r.applyPatch = u),
                                (r.applyReducer = l),
                                (r.validator = h),
                                (r.validate = d),
                                (r.default = { JsonPatchError: r.JsonPatchError, deepClone: r.deepClone, getValueByPointer: o, applyOperation: c, applyPatch: u, applyReducer: l, validator: h, validate: d });
                        };
                    };
            },
            { package: "fast-json-patch" },
        ],
        [
            4266,
            { "./core": 4265, "./helpers": 4267 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                (this && this.__assign) ||
                                function () {
                                    return (
                                        (n =
                                            Object.assign ||
                                            function (e) {
                                                for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                return e;
                                            }),
                                        n.apply(this, arguments)
                                    );
                                };
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            /*!
                             * https://github.com/Starcounter-Jack/JSON-Patch
                             * (c) 2017 Joachim Wester
                             * MIT license
                             */
                            var i = e("./helpers"),
                                a = e("./core"),
                                s = e("./core");
                            (r.applyOperation = s.applyOperation), (r.applyPatch = s.applyPatch), (r.applyReducer = s.applyReducer), (r.getValueByPointer = s.getValueByPointer), (r.validate = s.validate), (r.validator = s.validator);
                            var o = e("./helpers");
                            (r.JsonPatchError = o.PatchError), (r.deepClone = o._deepClone), (r.escapePathComponent = o.escapePathComponent), (r.unescapePathComponent = o.unescapePathComponent);
                            var c = new WeakMap(),
                                u = function (e) {
                                    (this.observers = new Map()), (this.obj = e);
                                },
                                l = function (e, t) {
                                    (this.callback = e), (this.observer = t);
                                };
                            function h(e, t) {
                                t.unobserve();
                            }
                            function d(e, t) {
                                var r,
                                    n = (function (e) {
                                        return c.get(e);
                                    })(e);
                                if (n) {
                                    var a = (function (e, t) {
                                        return e.observers.get(t);
                                    })(n, t);
                                    r = a && a.observer;
                                } else (n = new u(e)), c.set(e, n);
                                if (r) return r;
                                if (((r = {}), (n.value = i._deepClone(e)), t)) {
                                    (r.callback = t), (r.next = null);
                                    var s = function () {
                                            f(r);
                                        },
                                        o = function () {
                                            clearTimeout(r.next), (r.next = setTimeout(s));
                                        };
                                    "undefined" != typeof window &&
                                        (window.addEventListener("mouseup", o), window.addEventListener("keyup", o), window.addEventListener("mousedown", o), window.addEventListener("keydown", o), window.addEventListener("change", o));
                                }
                                return (
                                    (r.patches = []),
                                    (r.object = e),
                                    (r.unobserve = function () {
                                        f(r),
                                            clearTimeout(r.next),
                                            (function (e, t) {
                                                e.observers.delete(t.callback);
                                            })(n, r),
                                            "undefined" != typeof window &&
                                                (window.removeEventListener("mouseup", o),
                                                window.removeEventListener("keyup", o),
                                                window.removeEventListener("mousedown", o),
                                                window.removeEventListener("keydown", o),
                                                window.removeEventListener("change", o));
                                    }),
                                    n.observers.set(t, new l(t, r)),
                                    r
                                );
                            }
                            function f(e, t) {
                                void 0 === t && (t = !1);
                                var r = c.get(e.object);
                                p(r.value, e.object, e.patches, "", t), e.patches.length && a.applyPatch(r.value, e.patches);
                                var n = e.patches;
                                return n.length > 0 && ((e.patches = []), e.callback && e.callback(n)), n;
                            }
                            function p(e, t, r, n, a) {
                                if (t !== e) {
                                    "function" == typeof t.toJSON && (t = t.toJSON());
                                    for (var s = i._objectKeys(t), o = i._objectKeys(e), c = !1, u = o.length - 1; u >= 0; u--) {
                                        var l = e[(d = o[u])];
                                        if (!i.hasOwnProperty(t, d) || (t[d] === undefined && l !== undefined && !1 === Array.isArray(t)))
                                            Array.isArray(e) === Array.isArray(t)
                                                ? (a && r.push({ op: "test", path: n + "/" + i.escapePathComponent(d), value: i._deepClone(l) }), r.push({ op: "remove", path: n + "/" + i.escapePathComponent(d) }), (c = !0))
                                                : (a && r.push({ op: "test", path: n, value: e }), r.push({ op: "replace", path: n, value: t }), !0);
                                        else {
                                            var h = t[d];
                                            "object" == typeof l && null != l && "object" == typeof h && null != h
                                                ? p(l, h, r, n + "/" + i.escapePathComponent(d), a)
                                                : l !== h &&
                                                  (!0,
                                                  a && r.push({ op: "test", path: n + "/" + i.escapePathComponent(d), value: i._deepClone(l) }),
                                                  r.push({ op: "replace", path: n + "/" + i.escapePathComponent(d), value: i._deepClone(h) }));
                                        }
                                    }
                                    if (c || s.length != o.length)
                                        for (u = 0; u < s.length; u++) {
                                            var d = s[u];
                                            i.hasOwnProperty(e, d) || t[d] === undefined || r.push({ op: "add", path: n + "/" + i.escapePathComponent(d), value: i._deepClone(t[d]) });
                                        }
                                }
                            }
                            function g(e, t, r) {
                                void 0 === r && (r = !1);
                                var n = [];
                                return p(e, t, n, "", r), n;
                            }
                            (r.unobserve = h), (r.observe = d), (r.generate = f), (r.compare = g);
                            var m = e("./core"),
                                v = e("./helpers");
                            r.default = n({}, m, {
                                unobserve: h,
                                observe: d,
                                generate: f,
                                compare: g,
                                JsonPatchError: v.PatchError,
                                deepClone: i._deepClone,
                                escapePathComponent: i.escapePathComponent,
                                unescapePathComponent: v.unescapePathComponent,
                            });
                        };
                    };
            },
            { package: "fast-json-patch" },
        ],
        [
            4267,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            /*!
                             * https://github.com/Starcounter-Jack/JSON-Patch
                             * (c) 2017 Joachim Wester
                             * MIT license
                             */
                            var n,
                                i =
                                    (this && this.__extends) ||
                                    ((n = function (e, t) {
                                        return (
                                            (n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (e, t) {
                                                        e.__proto__ = t;
                                                    }) ||
                                                function (e, t) {
                                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                                }),
                                            n(e, t)
                                        );
                                    }),
                                    function (e, t) {
                                        function r() {
                                            this.constructor = e;
                                        }
                                        n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                                    });
                            Object.defineProperty(r, "__esModule", { value: !0 });
                            var a = Object.prototype.hasOwnProperty;
                            function s(e, t) {
                                return a.call(e, t);
                            }
                            function o(e) {
                                if (Array.isArray(e)) {
                                    for (var t = new Array(e.length), r = 0; r < t.length; r++) t[r] = "" + r;
                                    return t;
                                }
                                if (Object.keys) return Object.keys(e);
                                t = [];
                                for (var n in e) s(e, n) && t.push(n);
                                return t;
                            }
                            function c(e) {
                                return -1 === e.indexOf("/") && -1 === e.indexOf("~") ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
                            }
                            function u(e, t) {
                                var r;
                                for (var n in e)
                                    if (s(e, n)) {
                                        if (e[n] === t) return c(n) + "/";
                                        if ("object" == typeof e[n] && "" != (r = u(e[n], t))) return c(n) + "/" + r;
                                    }
                                return "";
                            }
                            function l(e, t) {
                                var r = [e];
                                for (var n in t) {
                                    var i = "object" == typeof t[n] ? JSON.stringify(t[n], null, 2) : t[n];
                                    void 0 !== i && r.push(n + ": " + i);
                                }
                                return r.join("\n");
                            }
                            Object.defineProperty(r, "hasOwnProperty", { value: s }),
                                (r._objectKeys = o),
                                (r._deepClone = function (e) {
                                    switch (typeof e) {
                                        case "object":
                                            return JSON.parse(JSON.stringify(e));
                                        case "undefined":
                                            return null;
                                        default:
                                            return e;
                                    }
                                }),
                                (r.isInteger = function (e) {
                                    for (var t, r = 0, n = e.length; r < n; ) {
                                        if (!((t = e.charCodeAt(r)) >= 48 && t <= 57)) return !1;
                                        r++;
                                    }
                                    return !0;
                                }),
                                (r.escapePathComponent = c),
                                (r.unescapePathComponent = function (e) {
                                    return e.replace(/~1/g, "/").replace(/~0/g, "~");
                                }),
                                (r._getPathRecursive = u),
                                (r.getPath = function (e, t) {
                                    if (e === t) return "/";
                                    var r = u(e, t);
                                    if ("" === r) throw new Error("Object not found in root");
                                    return "/" + r;
                                }),
                                (r.hasUndefined = function e(t) {
                                    if (t === undefined) return !0;
                                    if (t)
                                        if (Array.isArray(t)) {
                                            for (var r = 0, n = t.length; r < n; r++) if (e(t[r])) return !0;
                                        } else if ("object" == typeof t) {
                                            var i = o(t),
                                                a = i.length;
                                            for (r = 0; r < a; r++) if (e(t[i[r]])) return !0;
                                        }
                                    return !1;
                                });
                            var h = (function (e) {
                                function t(t, r, n, i, a) {
                                    var s = this.constructor,
                                        o = e.call(this, l(t, { name: r, index: n, operation: i, tree: a })) || this;
                                    return (o.name = r), (o.index = n), (o.operation = i), (o.tree = a), Object.setPrototypeOf(o, s.prototype), (o.message = l(t, { name: r, index: n, operation: i, tree: a })), o;
                                }
                                return i(t, e), t;
                            })(Error);
                            r.PatchError = h;
                        };
                    };
            },
            { package: "fast-json-patch" },
        ],
        [
            4268,
            {},
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n = Array.isArray,
                                i = Object.keys,
                                a = Object.prototype.hasOwnProperty;
                            t.exports = function e(t, r) {
                                if (t === r) return !0;
                                if (t && r && "object" == typeof t && "object" == typeof r) {
                                    var s,
                                        o,
                                        c,
                                        u = n(t),
                                        l = n(r);
                                    if (u && l) {
                                        if ((o = t.length) != r.length) return !1;
                                        for (s = o; 0 != s--; ) if (!e(t[s], r[s])) return !1;
                                        return !0;
                                    }
                                    if (u != l) return !1;
                                    var h = t instanceof Date,
                                        d = r instanceof Date;
                                    if (h != d) return !1;
                                    if (h && d) return t.getTime() == r.getTime();
                                    var f = t instanceof RegExp,
                                        p = r instanceof RegExp;
                                    if (f != p) return !1;
                                    if (f && p) return t.toString() == r.toString();
                                    var g = i(t);
                                    if ((o = g.length) !== i(r).length) return !1;
                                    for (s = o; 0 != s--; ) if (!a.call(r, g[s])) return !1;
                                    for (s = o; 0 != s--; ) if (!e(t[(c = g[s])], r[c])) return !1;
                                    return !0;
                                }
                                return t != t && r != r;
                            };
                        };
                    };
            },
            { package: "fast-json-patch>fast-deep-equal" },
        ],
        [
            4284,
            { "./constants": 4288, bech32: 4403, bs58check: 1737, buffer: 1728, "hash.js/lib/hash/ripemd": 4432, "hash.js/lib/hash/sha": 4433 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                        (this && this.__importDefault) ||
                                        function (e) {
                                            return e && e.__esModule ? e : { default: e };
                                        };
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var i = e("bech32"),
                                        a = n(e("bs58check")),
                                        s = e("hash.js/lib/hash/ripemd"),
                                        o = e("hash.js/lib/hash/sha"),
                                        c = e("./constants"),
                                        u = t.from("01", "hex"),
                                        l = c.BIP_CONSTANTS.PURPOSES,
                                        h = c.BIP_CONSTANTS.COINS,
                                        d = 0,
                                        f = 169,
                                        p = 118,
                                        g = 135,
                                        m = 136,
                                        v = 172,
                                        y = 208,
                                        w = 240;
                                    function E(e, r) {
                                        return t.concat([e, r]);
                                    }
                                    function S(e) {
                                        var r = t.alloc(4);
                                        return r.writeUInt32LE(e, 0), r;
                                    }
                                    function T(e) {
                                        var r;
                                        return (
                                            e < 253
                                                ? (r = t.alloc(1)).writeUInt8(e, 0)
                                                : e <= 65535
                                                ? ((r = t.alloc(3)).writeUInt8(253, 0), r.writeUInt16LE(e, 1))
                                                : e < 4294967295
                                                ? ((r = t.alloc(5)).writeUInt8(254, 0), r.writeUInt32LE(e, 1))
                                                : ((r = t.alloc(9)).writeUInt8(255, 0), r.writeUInt32LE(e >>> 0, 1), r.writeUInt32LE((e / 4294967296) | 0, 5)),
                                            r
                                        );
                                    }
                                    function _(e, r, n) {
                                        "number" == typeof e && (e = e.toString(16));
                                        var i = t.alloc(8),
                                            a = e.length % 2 == 0 ? e.toString(16) : "0".concat(e.toString(16));
                                        return t.from(a, "hex").reverse().copy(i, 0), i.copy(r, n), i;
                                    }
                                    function b(e) {
                                        var r, n;
                                        try {
                                            (r = a.default.decode(e)[0]), (n = a.default.decode(e).slice(1));
                                        } catch (a) {
                                            try {
                                                var s = i.bech32.decode(e);
                                                if ("bc" === s.prefix) r = y;
                                                else {
                                                    if ("tb" !== s.prefix) throw new Error("Unsupported prefix: must be bc or tb.");
                                                    r = w;
                                                }
                                                if (0 !== s.words[0]) throw new Error("Unsupported segwit version: must be 0, got ".concat(s.words[0]));
                                                n = t.from(i.bech32.fromWords(s.words.slice(1)));
                                            } catch (t) {
                                                throw new Error("Unable to decode address: ".concat(e, ": ").concat(t.message));
                                            }
                                        }
                                        return { versionByte: r, pkh: n };
                                    }
                                    function P(e) {
                                        if (e.length < 2) throw new Error("Path must be >1 index");
                                        var t = e[0],
                                            r = e[1];
                                        if (t === l.BTC_SEGWIT && r === h.BTC) return y;
                                        if (t === l.BTC_SEGWIT && r === h.BTC_TESTNET) return w;
                                        if (t === l.BTC_WRAPPED_SEGWIT && r === h.BTC) return 5;
                                        if (t === l.BTC_WRAPPED_SEGWIT && r === h.BTC_TESTNET) return 196;
                                        if (t === l.BTC_LEGACY && r === h.BTC) return 0;
                                        if (t === l.BTC_LEGACY && r === h.BTC_TESTNET) return 111;
                                        throw new Error("Invalid Bitcoin path provided. Cannot determine address format.");
                                    }
                                    function A(e) {
                                        switch (e.signerPath[0]) {
                                            case l.BTC_LEGACY:
                                                return 1;
                                            case l.BTC_WRAPPED_SEGWIT:
                                                return 3;
                                            case l.BTC_SEGWIT:
                                                return 4;
                                            default:
                                                throw new Error("Unsupported path purpose (".concat(e.signerPath[0], "): cannot determine BTC script type."));
                                        }
                                    }
                                    r.default = {
                                        buildBitcoinTxRequest: function (e) {
                                            try {
                                                var r = e.prevOuts,
                                                    n = e.recipient,
                                                    i = e.value,
                                                    a = e.changePath,
                                                    s = e.fee;
                                                if (!a) throw new Error("No changePath provided.");
                                                if (5 !== a.length) throw new Error("Please provide a full change path.");
                                                var o = t.alloc(59 + 69 * r.length),
                                                    u = 0,
                                                    l = P(a);
                                                o.writeUInt8(l, 0), u++, o.writeUInt32LE(a.length, u), (u += 4);
                                                for (var h = 0; h < a.length; h++) o.writeUInt32LE(a[h], u), (u += 4);
                                                o.writeUInt32LE(s, u), (u += 4);
                                                var d = b(n);
                                                o.writeUInt8(d.versionByte, u), u++, d.pkh.copy(o, u), (u += d.pkh.length), _(i, o, u), (u += 8), o.writeUInt8(r.length, u), u++;
                                                var f = 0;
                                                return (
                                                    r.forEach(function (e) {
                                                        if (!e.signerPath || 5 !== e.signerPath.length) throw new Error("Full recipient path not specified ");
                                                        o.writeUInt32LE(e.signerPath.length, u), (u += 4);
                                                        for (var r = 0; r < e.signerPath.length; r++) o.writeUInt32LE(e.signerPath[r], u), (u += 4);
                                                        o.writeUInt32LE(e.index, u), (u += 4), _(e.value, o, u), (u += 8), (f += e.value);
                                                        var n = A(e);
                                                        o.writeUInt8(n, u), u++, t.isBuffer(e.txHash) || (e.txHash = t.from(e.txHash, "hex")), e.txHash.copy(o, u), (u += e.txHash.length);
                                                    }),
                                                    { payload: o, schema: c.signingSchema.BTC_TRANSFER, origData: e, changeData: { value: f - (i + s) } }
                                                );
                                            } catch (e) {
                                                return { err: e };
                                            }
                                        },
                                        serializeTx: function (e) {
                                            var r = e.inputs,
                                                n = e.outputs,
                                                i = e.lockTime,
                                                a = void 0 === i ? 0 : i,
                                                c = t.alloc(4),
                                                h = 0,
                                                P = (function (e) {
                                                    var t = !1;
                                                    return (
                                                        e.forEach(function (e) {
                                                            (e.signerPath[0] !== l.BTC_SEGWIT && e.signerPath[0] !== l.BTC_WRAPPED_SEGWIT) || (t = !0);
                                                        }),
                                                        t
                                                    );
                                                })(r);
                                            c.writeUInt32LE(2, h), (h += 4), P && ((c = E(c, t.from("00", "hex"))), (c = E(c, t.from("01", "hex"))));
                                            var x = T(r.length);
                                            (c = E(c, x)),
                                                (h += x.length),
                                                r.forEach(function (e) {
                                                    (c = E(c, e.hash.reverse())), (h += e.hash.length);
                                                    var r = S(e.index);
                                                    (c = E(c, r)), (h += r.length);
                                                    var n = A(e);
                                                    if (3 === n) {
                                                        var i = (function (e) {
                                                                var r = t.alloc(22),
                                                                    n = t.from((0, o.sha256)().update(e).digest("hex"), "hex"),
                                                                    i = t.from((0, s.ripemd160)().update(n).digest("hex"), "hex");
                                                                return r.writeUInt8(d, 0), r.writeUInt8(i.length, 1), i.copy(r, 2), r;
                                                            })(e.pubkey),
                                                            a = T(i.length),
                                                            l = T((f = t.concat([a, i])).length);
                                                        (c = E(c, l)), (h += l.length), (c = E(c, f)), (h += f.length);
                                                    } else if (1 === n) {
                                                        var f = (function (e, r) {
                                                            var n = T((e = t.concat([e, u])).length),
                                                                i = T(r.length),
                                                                a = t.concat([n, e, i, r]),
                                                                s = T(a.length);
                                                            return t.concat([s, a]);
                                                        })(e.sig, e.pubkey);
                                                        (c = E(c, f)), (h += f.length);
                                                    } else if (4 === n) {
                                                        var p = t.from("00", "hex");
                                                        (c = E(c, p)), (h += 1);
                                                    }
                                                    var g = S(4294967295);
                                                    (c = E(c, g)), (h += g.length);
                                                });
                                            var I = T(n.length);
                                            if (
                                                ((c = E(c, I)),
                                                (h += I.length),
                                                n.forEach(function (e) {
                                                    var r,
                                                        n,
                                                        i = ((r = e.value), (n = t.alloc(8)), _(r, n, 0), n);
                                                    (c = E(c, i)), (h += i.length);
                                                    var a = (function (e) {
                                                            var r = b(e);
                                                            switch (r.versionByte) {
                                                                case y:
                                                                case w:
                                                                    return (n = r.pkh), (i = t.alloc(2 + n.length)).writeUInt8(d, 0), i.writeUInt8(n.length, 1), n.copy(i, 2), i;
                                                                case 5:
                                                                case 196:
                                                                    return (function (e) {
                                                                        var r = t.alloc(3 + e.length),
                                                                            n = 0;
                                                                        return r.writeUInt8(f, n), n++, r.writeUInt8(e.length, n), n++, e.copy(r, n), (n += e.length), r.writeUInt8(g, n), n++, r;
                                                                    })(r.pkh);
                                                                case 0:
                                                                case 111:
                                                                    return (function (e) {
                                                                        var r = t.alloc(5 + e.length),
                                                                            n = 0;
                                                                        return (
                                                                            r.writeUInt8(p, n), n++, r.writeUInt8(f, n), n++, r.writeUInt8(e.length, n), n++, e.copy(r, n), (n += e.length), r.writeUInt8(m, n), n++, r.writeUInt8(v, n), n++, r
                                                                        );
                                                                    })(r.pkh);
                                                                default:
                                                                    throw new Error("Unknown version byte: ".concat(r.versionByte, ". Cannot build BTC transaction."));
                                                            }
                                                            var n, i;
                                                        })(e.recipient),
                                                        s = T(a.length);
                                                    (c = E(c, s)), (h += s.length), (c = E(c, a)), (h += a.length);
                                                }),
                                                P)
                                            ) {
                                                for (var k = [], R = [], M = 0; M < r.length; M++) k.push(r[M].sig), R.push(r[M].pubkey);
                                                var N = (function (e, r) {
                                                    var n = t.alloc(0),
                                                        i = t.alloc(1);
                                                    i.writeUInt8(2, 0);
                                                    for (var a = 0; a < e.length; a++) {
                                                        var s = t.concat([e[a], u]),
                                                            o = T(s.length),
                                                            c = r[a],
                                                            l = T(c.length);
                                                        n = t.concat([n, i, o, s, l, c]);
                                                    }
                                                    return n;
                                                })(k, R);
                                                (c = E(c, N)), (h += N.length);
                                            }
                                            return t.concat([c, S(a)]).toString("hex");
                                        },
                                        getBitcoinAddress: function (e, r) {
                                            var n = null,
                                                s = null;
                                            if ((r === y ? ((n = "bc"), (s = 0)) : r === w && ((n = "tb"), (s = 0)), null !== n && null !== s)) {
                                                var o = i.bech32.toWords(e);
                                                return o.unshift(s), i.bech32.encode(n, o);
                                            }
                                            return a.default.encode(t.concat([t.from([r]), e]));
                                        },
                                        getAddressFormat: P,
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4285,
            { "@ethersproject/abi": 367, buffer: 1728, "js-sha3": 4405 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.replaceNestedDefs = r.getNestedCalldata = r.parseCanonicalName = r.parseSolidityJSONABI = void 0);
                                    var n = e("js-sha3"),
                                        i = e("@ethersproject/abi");
                                    r.parseSolidityJSONABI = function (e, t) {
                                        e = s(e);
                                        var r = t
                                            .filter(function (e) {
                                                return "function" === e.type;
                                            })
                                            .find(function (t) {
                                                return a(l(t).canonicalName) === e;
                                            });
                                        if (r) return { def: l(r).def };
                                        throw new Error("Unable to find matching function in ABI");
                                    };
                                    r.parseCanonicalName = function (e, t) {
                                        if ((e = s(e)) !== a(t)) throw new Error("Name does not match provided sig.");
                                        var r = [],
                                            n = t.indexOf("(");
                                        if (n < 0) throw new Error(y);
                                        r.push(t.slice(0, n)), (t = t.slice(n + 1));
                                        for (var i = []; t.length > 1; ) {
                                            var u = o(t);
                                            (i = i.concat(c(u))), (t = t.slice(u.length + 1));
                                        }
                                        var l = h(i);
                                        return r.concat(l);
                                    };
                                    r.getNestedCalldata = function (e, r) {
                                        var n = [],
                                            a = e.slice(1),
                                            s = (function (e) {
                                                for (
                                                    var t = [],
                                                        r = function (r) {
                                                            var n = e[r],
                                                                i = w[n[1]];
                                                            n[2] && (i = "".concat(i).concat(8 * n[2])),
                                                                n[3].length > 0 &&
                                                                    n[3].forEach(function (e) {
                                                                        i = 0 === n[3][e] ? "".concat(i, "[]") : "".concat(i, "[").concat(n[3][e], "]");
                                                                    }),
                                                                t.push(i);
                                                        },
                                                        n = 0;
                                                    n < e.length;
                                                    n++
                                                )
                                                    r(n);
                                                return t;
                                            })(a);
                                        function o(e) {
                                            return (e.length - 4) % 32 == 0;
                                        }
                                        return (
                                            new i.AbiCoder().decode(s, "0x" + r.slice(4).toString("hex")).forEach(function (e, r) {
                                                if (g(a[r])) {
                                                    var i = !0;
                                                    if (v(a[r]))
                                                        e.forEach(function (e) {
                                                            o(t.from(e.slice(2), "hex")) || (i = !1);
                                                        });
                                                    else if (m(a[r])) {
                                                        var s = t.from(e.slice(2), "hex");
                                                        i = o(s);
                                                    } else i = !1;
                                                    n.push(i ? e : null);
                                                } else n.push(null);
                                            }),
                                            n
                                        );
                                    };
                                    function a(e) {
                                        return "0x".concat((0, n.keccak256)(e).slice(0, 8));
                                    }
                                    function s(e) {
                                        if ("string" != typeof e || (10 !== e.length && 8 !== e.length)) throw new Error("`sig` must be a hex string with 4 bytes of data.");
                                        return 8 === e.length && (e = "0x".concat(e)), e;
                                    }
                                    function o(e) {
                                        if (p(e)) return f(e);
                                        if (e.indexOf(",") > -1) return e.slice(0, e.indexOf(","));
                                        if (e.indexOf(")") > -1) return e.slice(0, e.indexOf(")"));
                                        throw new Error(y);
                                    }
                                    function c(e) {
                                        if (!p(e)) return [u(e)];
                                        var t = { szBytes: 0, typeIdx: w.indexOf("tuple"), arraySzs: [] },
                                            r = f(e, !1),
                                            n = e.slice(r.length);
                                        (t.arraySzs = d(n)), (r = r.slice(1));
                                        for (var i = []; r.length > 0; ) {
                                            var a = o(r);
                                            (r = r.slice(a.length + 1)), (i = i.concat(c(a)));
                                        }
                                        if (!i.length) throw new Error(y);
                                        return [t, i];
                                    }
                                    function u(e) {
                                        var t = { szBytes: 0, typeIdx: 0, arraySzs: [] },
                                            r = !1;
                                        if (
                                            (w.forEach(function (n, i) {
                                                if (e.indexOf(n) > -1 && !r) {
                                                    (t.typeIdx = i), (t.arraySzs = d(e));
                                                    var a = t.arraySzs.length > 0 ? e.indexOf("[") : e.length,
                                                        s = e.slice(n.length, a);
                                                    if (parseInt(s) && ((t.szBytes = parseInt(s) / 8), t.szBytes > 32)) throw new Error(y);
                                                    r = !0;
                                                }
                                            }),
                                            !r)
                                        )
                                            throw new Error(y);
                                        return t;
                                    }
                                    function l(e, t, r, n) {
                                        if ((void 0 === t && (t = ""), void 0 === r && (r = []), void 0 === n && (n = !1), !n)) {
                                            var i = e.name || "";
                                            r.push(i), (t += i);
                                        }
                                        return (
                                            e.inputs &&
                                                ((t += "("),
                                                e.inputs.forEach(function (e) {
                                                    var n = (function (e) {
                                                        if (!e.type) throw new Error("No type in input");
                                                        var t = [e.name],
                                                            r = (function (e) {
                                                                var t,
                                                                    r = { szBytes: 0, typeIdx: 0, arraySzs: [] };
                                                                w.forEach(function (n, i) {
                                                                    e.indexOf(n) > -1 && !t && ((t = n), (r.typeIdx = i));
                                                                }),
                                                                    (r.arraySzs = d(e));
                                                                var n = r.arraySzs.length > 0 ? e.indexOf("[") : e.length;
                                                                if (["uint", "int", "bytes"].indexOf(t) > -1) {
                                                                    var i = parseInt(e.slice(t.length, n)) || 0;
                                                                    if (i > 256) throw new Error("Invalid param size");
                                                                    r.szBytes = i / 8;
                                                                } else r.szBytes = 0;
                                                                return r;
                                                            })(e.type),
                                                            n = r.typeIdx,
                                                            i = r.szBytes,
                                                            a = r.arraySzs;
                                                        return t.push(n), t.push(i), t.push(a), t;
                                                    })(e);
                                                    if (e.type.indexOf("tuple") > -1 && e.components) {
                                                        var i = l({ inputs: e.components }, t, [], !0);
                                                        (t = i.canonicalName), (t += "".concat(e.type.slice(5), ",")), n.push(i.def);
                                                    } else (t += e.type), (t += ",");
                                                    r.push(n);
                                                }),
                                                "," === t[t.length - 1] && (t = t.slice(0, t.length - 1)),
                                                (t += ")")),
                                            { def: r, canonicalName: t }
                                        );
                                    }
                                    function h(e, t) {
                                        void 0 === t && (t = "");
                                        var r = [],
                                            n = 0;
                                        return (
                                            e.forEach(function (e, i) {
                                                Array.isArray(e) ? r[r.length - 1].push(h(e, "".concat(i, "-"))) : r.push(["#".concat(t).concat(i + 1 - n), e.typeIdx, e.szBytes, e.arraySzs]), e.typeIdx === w.indexOf("tuple") && (n += 1);
                                            }),
                                            r
                                        );
                                    }
                                    function d(e) {
                                        if ("string" != typeof e) throw new Error("Invalid type");
                                        for (var t = [], r = e; r.length > 0; ) {
                                            var n = r.indexOf("[");
                                            if (n < 0) return t;
                                            var i = r.slice(n),
                                                a = i.indexOf("]");
                                            if (a < 0) throw new Error("Bad param type");
                                            var s = i.slice(1, a);
                                            0 === s.length ? t.push(0) : t.push(parseInt(s)), (r = i.slice(a + 1));
                                        }
                                        return t;
                                    }
                                    function f(e, t) {
                                        void 0 === t && (t = !0);
                                        for (var r = 0, n = !1, i = 0; i < e.length; i++) {
                                            "(" === e[i] ? ((r += 1), (n = !0)) : ")" === e[i] && (r -= 1);
                                            var a = "," === e[i + 1] || ")" === e[i + 1] || i === e.length - 1;
                                            if ((t || "[" !== e[i + 1] || (a = !0), !r && n && a)) return e.slice(0, i + 1);
                                        }
                                        throw new Error(y);
                                    }
                                    function p(e) {
                                        return "(" === e[0];
                                    }
                                    function g(e) {
                                        return "bytes" === w[e[1]];
                                    }
                                    function m(e) {
                                        return g(e) && 0 === e[3].length;
                                    }
                                    function v(e) {
                                        return g(e) && 1 === e[3].length && 0 === e[3][0];
                                    }
                                    r.replaceNestedDefs = function (e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = v(e[1 + r]),
                                                i = m(e[1 + r]);
                                            if (null !== t[r] && (n || i)) {
                                                e[1 + r][1] = w.indexOf("nestedDef");
                                                var a = n ? t[r] : [t[r]];
                                                e[1 + r] = e[1 + r].concat([a]);
                                            }
                                        }
                                        return e;
                                    };
                                    var y = "Could not parse canonical function name.",
                                        w = [null, "address", "bool", "uint", "int", "bytes", "string", "tuple", "nestedDef"];
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4286,
            { "./evm": 4285 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.CALLDATA = void 0);
                            var n = e("./evm");
                            r.CALLDATA = {
                                EVM: {
                                    type: 1,
                                    parsers: { parseSolidityJSONABI: n.parseSolidityJSONABI, parseCanonicalName: n.parseCanonicalName },
                                    processors: { getNestedCalldata: n.getNestedCalldata, replaceNestedDefs: n.replaceNestedDefs },
                                },
                            };
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4287,
            { "./constants": 4288, "./functions/index": 4295, "./shared/functions": 4302, "./shared/validators": 4305, "./util": 4306, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.Client = void 0);
                                    var a = e("./constants"),
                                        s = e("./functions/index"),
                                        o = e("./shared/functions"),
                                        c = e("./shared/validators"),
                                        u = e("./util"),
                                        l = (function () {
                                            function e(e) {
                                                var t = e.baseUrl,
                                                    r = e.name,
                                                    n = e.privKey,
                                                    i = e.stateData,
                                                    s = e.timeout,
                                                    c = e.retryCount,
                                                    l = e.skipRetryOnWrongWallet;
                                                (this.name = r || "Unknown"),
                                                    (this.baseUrl = t || a.BASE_URL),
                                                    (this.deviceId = null),
                                                    (this.isPaired = !1),
                                                    (this.activeWallets = a.DEFAULT_ACTIVE_WALLETS),
                                                    (this.timeout = s || 6e4),
                                                    (this.retryCount = c || 3),
                                                    (this.skipRetryOnWrongWallet = l || !1),
                                                    (this.privKey = n || (0, u.randomBytes)(32)),
                                                    (this.key = (0, u.getP256KeyPair)(this.privKey)),
                                                    (this.retryWrapper = (0, o.buildRetryWrapper)(this, this.retryCount)),
                                                    i && this.unpackAndApplyStateData(i);
                                            }
                                            return (
                                                Object.defineProperty(e.prototype, "sharedSecret", {
                                                    get: function () {
                                                        return t.from(this.key.derive(this.ephemeralPub.getPublic()).toArray("be", 32));
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                Object.defineProperty(e.prototype, "ephemeralPub", {
                                                    get: function () {
                                                        return this._ephemeralPub;
                                                    },
                                                    set: function (e) {
                                                        (0, c.validateEphemeralPub)(e), (this._ephemeralPub = e);
                                                    },
                                                    enumerable: !1,
                                                    configurable: !0,
                                                }),
                                                (e.prototype.connect = function (e) {
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (t) {
                                                            return [2, this.retryWrapper(s.connect, { id: e })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.pair = function (e) {
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (t) {
                                                            return [2, this.retryWrapper(s.pair, { pairingSecret: e })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.getAddresses = function (e) {
                                                    var t = e.startPath,
                                                        r = e.n,
                                                        a = void 0 === r ? 1 : r,
                                                        o = e.flag,
                                                        c = void 0 === o ? 0 : o;
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.getAddresses, { startPath: t, n: a, flag: c })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.sign = function (e) {
                                                    var t = e.data,
                                                        r = e.currency,
                                                        a = e.cachedData,
                                                        o = e.nextCode;
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.sign, { data: t, currency: r, cachedData: a, nextCode: o })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.fetchActiveWallet = function () {
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.fetchActiveWallet)];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.addKvRecords = function (e) {
                                                    var t = e.type,
                                                        r = void 0 === t ? 0 : t,
                                                        a = e.records,
                                                        o = e.caseSensitive,
                                                        c = void 0 !== o && o;
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.addKvRecords, { type: r, records: a, caseSensitive: c })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.getKvRecords = function (e) {
                                                    var t = e.type,
                                                        r = void 0 === t ? 0 : t,
                                                        a = e.n,
                                                        o = void 0 === a ? 1 : a,
                                                        c = e.start,
                                                        u = void 0 === c ? 0 : c;
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.getKvRecords, { type: r, n: o, start: u })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.removeKvRecords = function (e) {
                                                    var t = e.type,
                                                        r = void 0 === t ? 0 : t,
                                                        a = e.ids,
                                                        o = void 0 === a ? [] : a;
                                                    return n(this, void 0, void 0, function () {
                                                        return i(this, function (e) {
                                                            return [2, this.retryWrapper(s.removeKvRecords, { type: r, ids: o })];
                                                        });
                                                    });
                                                }),
                                                (e.prototype.getActiveWallet = function () {
                                                    return this.activeWallets.external.uid && !a.EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)
                                                        ? this.activeWallets.external
                                                        : this.activeWallets.internal.uid && !a.EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)
                                                        ? this.activeWallets.internal
                                                        : undefined;
                                                }),
                                                (e.prototype.hasActiveWallet = function () {
                                                    return !!this.getActiveWallet();
                                                }),
                                                (e.prototype.resetActiveWallets = function () {
                                                    this.activeWallets = a.DEFAULT_ACTIVE_WALLETS;
                                                }),
                                                (e.prototype.getStateData = function () {
                                                    return this.packStateData();
                                                }),
                                                (e.prototype.getFwConstants = function () {
                                                    var e;
                                                    return (0, a.getFwVersionConst)(null !== (e = this.fwVersion) && void 0 !== e ? e : t.alloc(0));
                                                }),
                                                (e.prototype.getFwVersion = function () {
                                                    return this.fwVersion && this.fwVersion.length >= 3 ? { fix: this.fwVersion[0], minor: this.fwVersion[1], major: this.fwVersion[2] } : { fix: 0, minor: 0, major: 0 };
                                                }),
                                                (e.prototype.getAppName = function () {
                                                    return this.name;
                                                }),
                                                (e.prototype.packStateData = function () {
                                                    var e, t, r, n, i;
                                                    try {
                                                        var a = {
                                                            activeWallets: {
                                                                internal: {
                                                                    uid: null === (e = this.activeWallets.internal.uid) || void 0 === e ? void 0 : e.toString("hex"),
                                                                    name: null === (t = this.activeWallets.internal.name) || void 0 === t ? void 0 : t.toString(),
                                                                    capabilities: this.activeWallets.internal.capabilities,
                                                                },
                                                                external: {
                                                                    uid: null === (r = this.activeWallets.external.uid) || void 0 === r ? void 0 : r.toString("hex"),
                                                                    name: null === (n = this.activeWallets.external.name) || void 0 === n ? void 0 : n.toString(),
                                                                    capabilities: this.activeWallets.external.capabilities,
                                                                },
                                                            },
                                                            ephemeralPub: this.ephemeralPub.getPublic().encode("hex"),
                                                            fwVersion: null === (i = this.fwVersion) || void 0 === i ? void 0 : i.toString("hex"),
                                                            deviceId: this.deviceId,
                                                            name: this.name,
                                                            baseUrl: this.baseUrl,
                                                            privKey: this.privKey.toString("hex"),
                                                            retryCount: this.retryCount,
                                                            timeout: this.timeout,
                                                        };
                                                        return JSON.stringify(a);
                                                    } catch (e) {
                                                        return console.warn("Could not pack state data."), null;
                                                    }
                                                }),
                                                (e.prototype.unpackAndApplyStateData = function (e) {
                                                    try {
                                                        var r = JSON.parse(e),
                                                            n = { uid: t.from(r.activeWallets.internal.uid, "hex"), name: t.from(r.activeWallets.internal.name), capabilities: r.activeWallets.internal.capabilities, external: !1 },
                                                            i = { uid: t.from(r.activeWallets.external.uid, "hex"), name: t.from(r.activeWallets.external.name), capabilities: r.activeWallets.external.capabilities, external: !0 },
                                                            a = t.from(r.ephemeralPub, "hex"),
                                                            s = t.from(r.fwVersion, "hex"),
                                                            c = t.from(r.privKey, "hex");
                                                        (this.activeWallets.internal = n),
                                                            (this.activeWallets.external = i),
                                                            (this.ephemeralPub = (0, u.getP256KeyPairFromPub)(a)),
                                                            (this.fwVersion = s),
                                                            (this.deviceId = r.deviceId),
                                                            (this.name = r.name),
                                                            (this.baseUrl = r.baseUrl),
                                                            (this.url = "".concat(this.baseUrl, "/").concat(this.deviceId)),
                                                            (this.privKey = c),
                                                            (this.key = (0, u.getP256KeyPair)(this.privKey)),
                                                            (this.retryCount = r.retryCount),
                                                            (this.timeout = r.timeout),
                                                            (this.retryWrapper = (0, o.buildRetryWrapper)(this, this.retryCount));
                                                    } catch (e) {
                                                        console.warn("Could not apply state data.");
                                                    }
                                                }),
                                                e
                                            );
                                        })();
                                    r.Client = l;
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4288,
            { buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (e) {
                                (function () {
                                    var t,
                                        n =
                                            (this && this.__assign) ||
                                            function () {
                                                return (
                                                    (n =
                                                        Object.assign ||
                                                        function (e) {
                                                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                            return e;
                                                        }),
                                                    n.apply(this, arguments)
                                                );
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.ETH_ABI_LATTICE_FW_TYPE_MAP = r.MAX_CHAIN_ID_BYTES = r.HANDLE_LARGER_CHAIN_ID = r.HARDENED_OFFSET = r.VERSION_BYTE = r.REQUEST_TYPE_BYTE = r.signingSchema = r.responseMsgs = r.responseCodes = r.messageConstants = r.ethMsgProtocol = r.encReqCodes = r.deviceCodes = r.decResLengths = r.addressSizes = r.ENC_MSG_LEN = r.EXTERNAL_NETWORKS_BY_CHAIN_ID_URL = r.NETWORKS_BY_CHAIN_ID = r.MAX_ADDR = r.CURRENCIES = r.BASE_URL = r.BIP_CONSTANTS = r.AES_IV = r.ADDR_STR_LEN = r.getFwVersionConst = r.ASCII_REGEX = r.DEFAULT_ACTIVE_WALLETS = r.EMPTY_WALLET_UID = r.EXTERNAL = void 0);
                                    r.AES_IV = [109, 121, 115, 101, 99, 114, 101, 116, 112, 97, 115, 115, 119, 111, 114, 100];
                                    r.ADDR_STR_LEN = 129;
                                    var i = { empty: 0, getAddresses: 1290, sign: 1090, getWallets: 142, getKvRecords: 1395, getDecoders: 1608, removeDecoders: 4, test: 1646 };
                                    r.decResLengths = i;
                                    var a = 0;
                                    (r.ENC_MSG_LEN = a),
                                        Object.keys(i).forEach(function (e) {
                                            i[e] + 82 > a && (r.ENC_MSG_LEN = a = i[e] + 82);
                                        });
                                    r.deviceCodes = { CONNECT: 1, ENCRYPTED_REQUEST: 2 };
                                    r.encReqCodes = {
                                        FINALIZE_PAIRING: 0,
                                        GET_ADDRESSES: 1,
                                        ADD_PERMISSION: 2,
                                        SIGN_TRANSACTION: 3,
                                        GET_WALLETS: 4,
                                        ADD_PERMISSION_V0: 5,
                                        ADD_DECODERS: 6,
                                        GET_KV_RECORDS: 7,
                                        ADD_KV_RECORDS: 8,
                                        REMOVE_KV_RECORDS: 9,
                                        GET_DECODERS: 10,
                                        REMOVE_DECODERS: 11,
                                        TEST: 12,
                                    };
                                    r.messageConstants = { NOT_PAIRED: 0, PAIRED: 1 };
                                    r.addressSizes = { BTC: 20, ETH: 20 };
                                    var s = {
                                        RESP_SUCCESS: 0,
                                        RESP_ERR_INVALID_MSG: 128,
                                        RESP_ERR_UNSUPPORTED_VER: 129,
                                        RESP_ERR_DEV_BUSY: 130,
                                        RESP_ERR_USER_TIMEOUT: 131,
                                        RESP_ERR_USER_DECLINED: 132,
                                        RESP_ERR_PAIR_FAIL: 133,
                                        RESP_ERR_PAIR_DISABLED: 134,
                                        RESP_ERR_PERMISSION_DISABLED: 135,
                                        RESP_ERR_INTERNAL: 136,
                                        RESP_ERR_GCE_TIMEOUT: 137,
                                        RESP_ERR_WRONG_WALLET: 138,
                                        RESP_ERR_DEV_LOCKED: 139,
                                        RESP_ERR_DISABLED: 140,
                                        RESP_ERR_ALREADY: 141,
                                        RESP_ERR_INVALID_EPHEM_ID: 142,
                                    };
                                    r.responseCodes = s;
                                    r.CURRENCIES = { ETH: "ETH", BTC: "BTC", ETH_MSG: "ETH_MSG" };
                                    var o =
                                        (((t = {})[s.RESP_SUCCESS] = 0),
                                        (t[s.RESP_ERR_INVALID_MSG] = "Invalid request"),
                                        (t[s.RESP_ERR_UNSUPPORTED_VER] = "Unsupported version"),
                                        (t[s.RESP_ERR_DEV_BUSY] = "Device busy"),
                                        (t[s.RESP_ERR_USER_TIMEOUT] = "Timeout waiting for user"),
                                        (t[s.RESP_ERR_USER_DECLINED] = "Request declined by user"),
                                        (t[s.RESP_ERR_PAIR_FAIL] = "Pairing failed"),
                                        (t[s.RESP_ERR_PAIR_DISABLED] = "Pairing is currently disabled"),
                                        (t[s.RESP_ERR_PERMISSION_DISABLED] = "Automated signing is currently disabled"),
                                        (t[s.RESP_ERR_INTERNAL] = "Device error"),
                                        (t[s.RESP_ERR_GCE_TIMEOUT] = "Timeout"),
                                        (t[s.RESP_ERR_WRONG_WALLET] = "Active wallet does not match request"),
                                        (t[s.RESP_ERR_DEV_LOCKED] = "Device locked"),
                                        (t[s.RESP_ERR_DISABLED] = "Disabled"),
                                        (t[s.RESP_ERR_ALREADY] = "Record already exists. You must first remove it on your device."),
                                        (t[s.RESP_ERR_INVALID_EPHEM_ID] = "Could not find requester. Please reconnect."),
                                        t);
                                    r.responseMsgs = o;
                                    r.signingSchema = { BTC_TRANSFER: 0, ETH_TRANSFER: 1, ERC20_TRANSFER: 2, ETH_MSG: 3, EXTRA_DATA: 4, GENERAL_SIGNING: 5 };
                                    var c = 2147483648;
                                    r.HARDENED_OFFSET = c;
                                    var u = { PURPOSES: { ETH: 2147483692, BTC_LEGACY: 2147483692, BTC_WRAPPED_SEGWIT: 2147483697, BTC_SEGWIT: 2147483732 }, COINS: { ETH: 2147483708, BTC: c, BTC_TESTNET: 2147483649 } };
                                    r.BIP_CONSTANTS = u;
                                    r.REQUEST_TYPE_BYTE = 2;
                                    r.VERSION_BYTE = 1;
                                    r.HANDLE_LARGER_CHAIN_ID = 255;
                                    r.MAX_CHAIN_ID_BYTES = 8;
                                    r.BASE_URL = "https://signing.gridpl.us";
                                    var l = {
                                            address: 1,
                                            bool: 2,
                                            uint8: 3,
                                            uint16: 4,
                                            uint24: 5,
                                            uint32: 6,
                                            uint40: 7,
                                            uint48: 8,
                                            uint56: 9,
                                            uint64: 10,
                                            uint72: 11,
                                            uint80: 12,
                                            uint88: 13,
                                            uint96: 14,
                                            uint104: 15,
                                            uint112: 16,
                                            uint120: 17,
                                            uint128: 18,
                                            uint136: 19,
                                            uint144: 20,
                                            uint152: 21,
                                            uint160: 22,
                                            uint168: 23,
                                            uint176: 24,
                                            uint184: 25,
                                            uint192: 26,
                                            uint200: 27,
                                            uint208: 28,
                                            uint216: 29,
                                            uint224: 30,
                                            uint232: 31,
                                            uint240: 32,
                                            uint248: 33,
                                            uint256: 34,
                                            int8: 35,
                                            int16: 36,
                                            int24: 37,
                                            int32: 38,
                                            int40: 39,
                                            int48: 40,
                                            int56: 41,
                                            int64: 42,
                                            int72: 43,
                                            int80: 44,
                                            int88: 45,
                                            int96: 46,
                                            int104: 47,
                                            int112: 48,
                                            int120: 49,
                                            int128: 50,
                                            int136: 51,
                                            int144: 52,
                                            int152: 53,
                                            int160: 54,
                                            int168: 55,
                                            int176: 56,
                                            int184: 57,
                                            int192: 58,
                                            int200: 59,
                                            int208: 60,
                                            int216: 61,
                                            int224: 62,
                                            int232: 63,
                                            int240: 64,
                                            int248: 65,
                                            int256: 66,
                                            uint: 67,
                                            bytes1: 69,
                                            bytes2: 70,
                                            bytes3: 71,
                                            bytes4: 72,
                                            bytes5: 73,
                                            bytes6: 74,
                                            bytes7: 75,
                                            bytes8: 76,
                                            bytes9: 77,
                                            bytes10: 78,
                                            bytes11: 79,
                                            bytes12: 80,
                                            bytes13: 81,
                                            bytes14: 82,
                                            bytes15: 83,
                                            bytes16: 84,
                                            bytes17: 85,
                                            bytes18: 86,
                                            bytes19: 87,
                                            bytes20: 88,
                                            bytes21: 89,
                                            bytes22: 90,
                                            bytes23: 91,
                                            bytes24: 92,
                                            bytes25: 93,
                                            bytes26: 94,
                                            bytes27: 95,
                                            bytes28: 96,
                                            bytes29: 97,
                                            bytes30: 98,
                                            bytes31: 99,
                                            bytes32: 100,
                                            bytes: 101,
                                            string: 102,
                                        },
                                        h = n(n({}, l), {
                                            tuple1: 103,
                                            tuple2: 104,
                                            tuple3: 105,
                                            tuple4: 106,
                                            tuple5: 107,
                                            tuple6: 108,
                                            tuple7: 109,
                                            tuple8: 110,
                                            tuple9: 111,
                                            tuple10: 112,
                                            tuple11: 113,
                                            tuple12: 114,
                                            tuple13: 115,
                                            tuple14: 116,
                                            tuple15: 117,
                                            tuple16: 118,
                                            tuple17: 119,
                                        });
                                    r.ETH_ABI_LATTICE_FW_TYPE_MAP = h;
                                    var d = { SIGN_PERSONAL: { str: "signPersonal", enumIdx: 0 }, TYPED_DATA: { str: "typedData", enumIdx: 1, rawDataMaxLen: 1629, typeCodes: l } };
                                    (r.ethMsgProtocol = d),
                                        (r.EXTERNAL = {
                                            GET_ADDR_FLAGS: { SECP256K1_PUB: 3, ED25519_PUB: 4 },
                                            SIGNING: { HASHES: { NONE: 0, KECCAK256: 1, SHA256: 2 }, CURVES: { SECP256K1: 0, ED25519: 1 }, ENCODINGS: { NONE: 1, SOLANA: 2, EVM: 4 } },
                                        }),
                                        (r.getFwVersionConst = function (e) {
                                            var t = { extraDataFrameSz: 0, extraDataMaxFrames: 0, genericSigning: {} };
                                            function n(e, t) {
                                                return e[2] > t[0] || (e[2] === t[0] && e[1] > t[1]) || (e[2] === t[0] && e[1] === t[1] && e[0] > t[2]) || (e[2] === t[0] && e[1] === t[1] && e[0] === t[2]);
                                            }
                                            var i = 0 === e.length;
                                            return (
                                                (!i && n(e, [0, 10, 4])) || (!i && n(e, [0, 10, 0]))
                                                    ? ((t.reqMaxDataSz = 1678), (t.ethMaxGasPrice = 2e13), (t.addrFlagsAllowed = !0))
                                                    : ((t.reqMaxDataSz = 1152), (t.ethMaxGasPrice = 5e11), (t.addrFlagsAllowed = !1)),
                                                (t.ethMaxDataSz = t.reqMaxDataSz - 128),
                                                (t.ethMaxMsgSz = t.ethMaxDataSz),
                                                (t.eip712MaxTypeParams = 18),
                                                !i && n(e, [0, 10, 4]) && ((t.extraDataFrameSz = 1500), (t.extraDataMaxFrames = 1)),
                                                !i && n(e, [0, 10, 5]) && ((t.varAddrPathSzAllowed = !0), (t.eip712Supported = !0)),
                                                !i && n(e, [0, 10, 8]) && (t.prehashAllowed = !0),
                                                !i && n(e, [0, 10, 10]) && (t.ethMsgPreHashAllowed = !0),
                                                !i && n(e, [0, 11, 0]) && ((t.allowedEthTxTypes = [1, 2]), (t.ethMaxDataSz -= 10), (t.ethMaxMsgSz = t.ethMaxDataSz)),
                                                !i && n(e, [0, 11, 2]) && (t.personalSignHeaderSz = 72),
                                                !i && n(e, [0, 12, 0]) && ((t.kvActionsAllowed = !0), (t.kvKeyMaxStrSz = 63), (t.kvValMaxStrSz = 63), (t.kvActionMaxNum = 10), (t.kvRemoveMaxNum = 100)),
                                                !i && n(e, [0, 13, 0]) && ((t.allowBtcLegacyAndSegwitAddrs = !0), (t.contractDeployKey = "0x08002e0fec8e6acf00835f43c9764f7364fa3f42")),
                                                !i &&
                                                    n(e, [0, 14, 0]) &&
                                                    ((t.abiCategorySz = 32),
                                                    (t.abiMaxRmv = 200),
                                                    (t.genericSigning.baseReqSz = 1552),
                                                    (t.genericSigning.baseDataSz = 1519),
                                                    (t.genericSigning.hashTypes = r.EXTERNAL.SIGNING.HASHES),
                                                    (t.genericSigning.curveTypes = r.EXTERNAL.SIGNING.CURVES),
                                                    (t.genericSigning.encodingTypes = { NONE: r.EXTERNAL.SIGNING.ENCODINGS.NONE, SOLANA: r.EXTERNAL.SIGNING.ENCODINGS.SOLANA }),
                                                    (t.getAddressFlags = [r.EXTERNAL.GET_ADDR_FLAGS.ED25519_PUB, r.EXTERNAL.GET_ADDR_FLAGS.SECP256K1_PUB]),
                                                    (t.eip712MaxTypeParams = 36)),
                                                !i &&
                                                    n(e, [0, 15, 0]) &&
                                                    ((t.genericSigning.encodingTypes.EVM = r.EXTERNAL.SIGNING.ENCODINGS.EVM),
                                                    (t.ethMaxDataSz = 1519),
                                                    (t.maxDecoderBufSz = 1600),
                                                    (t.genericSigning.calldataDecoding = { reserved: 2895728, maxSz: 1024 })),
                                                t
                                            );
                                        });
                                    r.ASCII_REGEX = /^[\x00-\x7F]+$/;
                                    r.EXTERNAL_NETWORKS_BY_CHAIN_ID_URL = "https://gridplus.github.io/chains/chains.json";
                                    r.MAX_ADDR = 10;
                                    (r.NETWORKS_BY_CHAIN_ID = {
                                        1: { name: "ethereum", baseUrl: "https://api.etherscan.io", apiRoute: "api?module=contract&action=getabi" },
                                        137: { name: "polygon", baseUrl: "https://api.polygonscan.com", apiRoute: "api?module=contract&action=getabi" },
                                        56: { name: "binance", baseUrl: "https://api.bscscan.com", apiRoute: "api?module=contract&action=getabi" },
                                        43114: { name: "avalanche", baseUrl: "https://api.snowtrace.io", apiRoute: "api?module=contract&action=getabi" },
                                    }),
                                        (r.EMPTY_WALLET_UID = e.alloc(32)),
                                        (r.DEFAULT_ACTIVE_WALLETS = {
                                            internal: { uid: r.EMPTY_WALLET_UID, external: !1, name: e.alloc(0), capabilities: 0 },
                                            external: { uid: r.EMPTY_WALLET_UID, external: !0, name: e.alloc(0), capabilities: 0 },
                                        });
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4289,
            { "./constants": 4288, "./util": 4306, "@ethereumjs/common": 4339, "@ethereumjs/tx": 4343, "bignumber.js": 4404, borc: 1691, buffer: 1728, "eth-eip712-util-browser": 1949, "js-sha3": 4405, rlp: 4406, secp256k1: 5022 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__createBinding) ||
                                            (Object.create
                                                ? function (e, t, r, n) {
                                                      n === undefined && (n = r);
                                                      var i = Object.getOwnPropertyDescriptor(t, r);
                                                      (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                                                          (i = {
                                                              enumerable: !0,
                                                              get: function () {
                                                                  return t[r];
                                                              },
                                                          }),
                                                          Object.defineProperty(e, n, i);
                                                  }
                                                : function (e, t, r, n) {
                                                      n === undefined && (n = r), (e[n] = t[r]);
                                                  }),
                                        i =
                                            (this && this.__setModuleDefault) ||
                                            (Object.create
                                                ? function (e, t) {
                                                      Object.defineProperty(e, "default", { enumerable: !0, value: t });
                                                  }
                                                : function (e, t) {
                                                      e.default = t;
                                                  }),
                                        a =
                                            (this && this.__importStar) ||
                                            function (e) {
                                                if (e && e.__esModule) return e;
                                                var t = {};
                                                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                                return i(t, e), t;
                                            },
                                        s =
                                            (this && this.__importDefault) ||
                                            function (e) {
                                                return e && e.__esModule ? e : { default: e };
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 });
                                    var o = a(e("@ethereumjs/common")),
                                        c = e("@ethereumjs/tx"),
                                        u = s(e("bignumber.js")),
                                        l = s(e("borc")),
                                        h = e("eth-eip712-util-browser"),
                                        d = e("js-sha3"),
                                        f = e("rlp"),
                                        p = s(e("secp256k1")),
                                        g = e("./constants"),
                                        m = e("./util");
                                    function v(e) {
                                        for (var t = e[0]; e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
                                        return e;
                                    }
                                    function y(e, r, n, i) {
                                        void 0 === i && (i = {});
                                        try {
                                            var a = new Uint8Array(e),
                                                s = 0,
                                                o = (0, m.fixLen)(r.r, 32);
                                            r.r = o;
                                            var c = (0, m.fixLen)(r.s, 32);
                                            r.s = c;
                                            var u = new Uint8Array(t.concat([o, c])),
                                                l = p.default.ecdsaRecover(u, s, a, !1).slice(1);
                                            if (w(l) === n.toString("hex")) return (r.v = E(s, i)), r;
                                            if (((s = 1), w((l = p.default.ecdsaRecover(u, s, a, !1).slice(1))) === n.toString("hex"))) return (r.v = E(s, i)), r;
                                            throw new Error("Invalid Ethereum signature returned.");
                                        } catch (e) {
                                            throw new Error(e);
                                        }
                                    }
                                    function w(e) {
                                        return (0, d.keccak256)(e).slice(-40);
                                    }
                                    function E(e, r) {
                                        void 0 === r && (r = {});
                                        var n = r.chainId,
                                            i = r.useEIP155,
                                            a = r.type;
                                        if (1 === a || 2 === a) return (0, m.ensureHexBuffer)(e, !0);
                                        if (!1 === i || null === n) return t.from(new u.default(e).plus(27).toString(16), "hex");
                                        var s = T(n),
                                            o = new u.default(s.toString("hex"), 16);
                                        return (0, m.ensureHexBuffer)("0x".concat(o.times(2).plus(35).plus(e).toString(16)));
                                    }
                                    var S = { mainnet: 1, roptsten: 3, rinkeby: 4, kovan: 42, goerli: 5 };
                                    function T(e) {
                                        var r, n;
                                        if ((r = !0 === _(e) ? (0, m.ensureHexBuffer)(e) : (0, m.ensureHexBuffer)("0x".concat(new u.default(e).toString(16)))).length > 8) throw new Error("ChainID provided is too large.");
                                        return r.length <= 2 || 4 === r.length || 8 === r.length ? r : (3 === r.length ? (n = t.alloc(4)).writeUInt32BE(e) : r.length <= 8 && ((n = t.alloc(8)), r.copy(n, 8 - r.length)), n);
                                    }
                                    function _(e) {
                                        if ("string" != typeof e) return !1;
                                        if ("0x" !== e.slice(0, 2)) return !1;
                                        try {
                                            return !1 === new u.default(e, 16).isNaN();
                                        } catch (e) {
                                            return !1;
                                        }
                                    }
                                    function b(e, r) {
                                        var n = r.fwConstants,
                                            i = n.ethMaxMsgSz,
                                            a = n.extraDataFrameSz,
                                            s = n.extraDataMaxFrames,
                                            o = i,
                                            c = a > 0 && s > 0,
                                            u = [];
                                        if (e.length > o) {
                                            var l = o + s * a;
                                            if (!c) throw new Error("Your message is ".concat(e.length, " bytes, but can only be a maximum of ").concat(o));
                                            if (c && e.length > l) throw new Error("Your message is ".concat(e.length, " bytes, but can only be a maximum of ").concat(l));
                                            (0, m.splitFrames)(e.slice(o), a).forEach(function (e) {
                                                var r = t.alloc(4);
                                                r.writeUInt32LE(e.length, 0), u.push(t.concat([r, e]));
                                            });
                                        }
                                        return u;
                                    }
                                    function P(e, t, r, n) {
                                        return (
                                            void 0 === n && (n = !1),
                                            r[t].forEach(function (t) {
                                                var i = t.type.indexOf("[") > -1,
                                                    a = i ? t.type.slice(0, t.type.indexOf("[")) : t.type,
                                                    s = Object.keys(r).indexOf(a) > -1;
                                                if (s && Array.isArray(e)) for (var o = 0; o < e.length; o++) e[o][t.name] = P(e[o][t.name], a, r, n);
                                                else if (s) e[t.name] = P(e[t.name], a, r, n);
                                                else if (Array.isArray(e))
                                                    for (o = 0; o < e.length; o++)
                                                        if (i) for (var c = 0; c < e[o][t.name].length; c++) e[o][t.name][c] = A(e[o][t.name][c], a, n);
                                                        else e[o][t.name] = A(e[o][t.name], a, n);
                                                else if (i) for (o = 0; o < e[t.name].length; o++) e[t.name][o] = A(e[t.name][o], a, n);
                                                else e[t.name] = A(e[t.name], a, n);
                                            }),
                                            e
                                        );
                                    }
                                    function A(e, r, n) {
                                        if ((void 0 === n && (n = !1), "bytes" === r)) (e = (0, m.ensureHexBuffer)(e)), n && (e = "0x".concat(e.toString("hex")));
                                        else if ("bytes" === r.slice(0, 5)) {
                                            var i = parseInt(r.slice(5));
                                            if ((e = (0, m.ensureHexBuffer)(e)).length !== i) throw new Error("Expected ".concat(r, " type, but got ").concat(e.length, " bytes"));
                                            n && (e = "0x".concat(e.toString("hex")));
                                        } else if ("address" === r) {
                                            if ((0 === (e = (0, m.ensureHexBuffer)(e)).length && (e = t.alloc(20)), 20 !== e.length)) throw new Error("Address type must be 20 bytes, but got ".concat(e.length, " bytes"));
                                            n && (e = "0x".concat(e.toString("hex")));
                                        } else if (g.ethMsgProtocol.TYPED_DATA.typeCodes[r] && (r.indexOf("uint") > -1 || r.indexOf("int") > -1)) {
                                            var a = (0, m.ensureHexBuffer)(e);
                                            0 === a.length && (a = t.from("00", "hex")), (e = n ? "0x".concat(a.toString("hex")) : new l.default.Encoder().semanticTypes[1][0](a.toString("hex"), 16));
                                        } else "bool" === r && (e = !0 === e ? 1 : 0);
                                        return e;
                                    }
                                    function x(e) {
                                        return t.from("Ethereum Signed Message:\n".concat(e.toString()), "utf-8");
                                    }
                                    function I(e, r) {
                                        return r ? t.concat([t.from([r]), t.from((0, f.encode)(e))]) : t.from((0, f.encode)(e));
                                    }
                                    r.default = {
                                        buildEthereumMsgRequest: function (e) {
                                            if (!e.payload || !e.protocol || !e.signerPath) throw new Error("You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request");
                                            if (e.signerPath.length > 5 || e.signerPath.length < 2) throw new Error("Please provide a signer path with 2-5 indices");
                                            var r = { schema: g.signingSchema.ETH_MSG, payload: null, input: e, msg: null };
                                            switch (e.protocol) {
                                                case "signPersonal":
                                                    return (function (e, r) {
                                                        var n = r.fwConstants.ethMaxMsgSz,
                                                            i = r.fwConstants.varAddrPathSzAllowed,
                                                            a = 24 + n + 4,
                                                            s = 0;
                                                        (e.payload = t.alloc(a)), e.payload.writeUInt8(g.ethMsgProtocol.SIGN_PERSONAL, 0), (s += 1);
                                                        var o = (0, m.buildSignerPathBuf)(r.signerPath, i);
                                                        o.copy(e.payload, s), (s += o.length);
                                                        var c = r.payload,
                                                            u = !1;
                                                        if ("string" == typeof r.payload)
                                                            if ("0x" === r.payload.slice(0, 2)) (c = (0, m.ensureHexBuffer)(r.payload)), (u = !1 === g.ASCII_REGEX.test(t.from(r.payload.slice(2), "hex").toString()));
                                                            else {
                                                                if (!1 === (0, m.isAsciiStr)(r.payload)) throw new Error("Currently, the Lattice can only display ASCII strings.");
                                                                c = t.from(r.payload);
                                                            }
                                                        else if ("boolean" == typeof r.displayHex) u = r.displayHex;
                                                        else {
                                                            if (!r.payload.toString) throw new Error("Unsupported input data type");
                                                            u = !1 === g.ASCII_REGEX.test(r.payload.toString());
                                                        }
                                                        var l = r.fwConstants,
                                                            h = n + l.extraDataMaxFrames * l.extraDataFrameSz;
                                                        l.personalSignHeaderSz && (h -= l.personalSignHeaderSz);
                                                        if (l.ethMsgPreHashAllowed && c.length > h) {
                                                            e.payload.writeUInt8(u, s), (s += 1), e.payload.writeUInt16LE(c.length, s), (s += 2);
                                                            var f = t.from((0, d.keccak256)(t.concat([x(c.length), c])), "hex");
                                                            f.copy(e.payload, s), (e.prehash = f);
                                                        } else {
                                                            var p = b(c, r);
                                                            (e.extraDataPayloads = p), (e.msg = c), e.payload.writeUInt8(u, s), (s += 1), e.payload.writeUInt16LE(c.length, s), (s += 2), c.copy(e.payload, s);
                                                        }
                                                        return e;
                                                    })(r, e);
                                                case "eip712":
                                                    if (!e.fwConstants.eip712Supported) throw new Error("EIP712 is not supported by your Lattice firmware version. Please upgrade.");
                                                    return (function (e, r) {
                                                        var n = r.fwConstants,
                                                            i = n.ethMaxMsgSz,
                                                            a = n.varAddrPathSzAllowed,
                                                            s = n.eip712MaxTypeParams,
                                                            o = g.ethMsgProtocol.TYPED_DATA,
                                                            c = 24 + i + 4,
                                                            u = 0;
                                                        (e.payload = t.alloc(c)), e.payload.writeUInt8(o.enumIdx, 0), (u += 1);
                                                        var d = (0, m.buildSignerPathBuf)(r.signerPath, a);
                                                        d.copy(e.payload, u), (u += d.length);
                                                        var f = JSON.parse(JSON.stringify(r.payload));
                                                        if (!f.primaryType || !f.types[f.primaryType]) throw new Error("primaryType must be specified and the type must be included.");
                                                        if (!f.message || !f.domain) throw new Error("message and domain must be specified.");
                                                        if (0 > Object.keys(f.types).indexOf("EIP712Domain")) throw new Error("EIP712Domain type must be defined.");
                                                        (r.payload.message = P(JSON.parse(JSON.stringify(f.message)), JSON.parse(JSON.stringify(f.primaryType)), JSON.parse(JSON.stringify(f.types)), !0)),
                                                            (r.payload.domain = P(JSON.parse(JSON.stringify(f.domain)), "EIP712Domain", JSON.parse(JSON.stringify(f.types)), !0)),
                                                            (f.domain = P(f.domain, "EIP712Domain", f.types, !1)),
                                                            (f.message = P(f.message, f.primaryType, f.types, !1));
                                                        var p = t.from(l.default.encode(f)),
                                                            v = r.fwConstants,
                                                            y = i + v.extraDataMaxFrames * v.extraDataFrameSz,
                                                            w = p.length > y;
                                                        if (
                                                            (Object.keys(f.types).forEach(function (e) {
                                                                f.types[e].length > s && (w = !0);
                                                            }),
                                                            v.ethMsgPreHashAllowed && w)
                                                        ) {
                                                            e.payload.writeUInt16LE(p.length, u), (u += 2);
                                                            var E = h.TypedDataUtils.hash(e.input.payload);
                                                            t.from(E).copy(e.payload, u), (e.prehash = E);
                                                        } else {
                                                            var S = b(p, r);
                                                            (e.extraDataPayloads = S), e.payload.writeUInt16LE(p.length, u), (u += 2), p.copy(e.payload, u), (u += p.length), (e.payload = e.payload.slice(0, u));
                                                        }
                                                        return e;
                                                    })(r, e);
                                                default:
                                                    throw new Error("Unsupported protocol");
                                            }
                                        },
                                        validateEthereumMsgResponse: function (e, r) {
                                            var n = e.signer,
                                                i = e.sig,
                                                a = r.input,
                                                s = r.msg,
                                                o = r.prehash,
                                                c = void 0 === o ? null : o;
                                            if ("signPersonal" === a.protocol) return y(c || t.from((0, d.keccak256)(t.concat([x(s.length), s])), "hex"), i, n, { chainId: 1, useEIP155: !1 });
                                            if ("eip712" === a.protocol) {
                                                var u = h.TypedDataUtils.hash(r.input.payload);
                                                return y(c || u, i, n, { useEIP155: !1 });
                                            }
                                            throw new Error("Unsupported protocol");
                                        },
                                        buildEthereumTxRequest: function (e) {
                                            try {
                                                var r = e.chainId,
                                                    n = void 0 === r ? 1 : r,
                                                    i = e.signerPath,
                                                    a = e.eip155,
                                                    s = void 0 === a ? null : a,
                                                    o = e.fwConstants,
                                                    c = e.type,
                                                    u = void 0 === c ? null : c,
                                                    l = o.contractDeployKey,
                                                    h = o.extraDataFrameSz,
                                                    f = o.extraDataMaxFrames,
                                                    p = o.prehashAllowed,
                                                    v = h > 0 && f > 0,
                                                    y = o.ethMaxDataSz,
                                                    w = o.varAddrPathSzAllowed;
                                                if (("number" != typeof n && !1 === _(n) && (n = S[n]), !n)) throw new Error("Unsupported chain ID or name");
                                                if (!i) throw new Error("`signerPath` not provided");
                                                if (null === e.to && !l) throw new Error("Contract deployment not supported. Please update your Lattice firmware.");
                                                var E = null === e.to && l,
                                                    b = o.allowedEthTxTypes && o.allowedEthTxTypes.indexOf(2) > -1,
                                                    P = o.allowedEthTxTypes && o.allowedEthTxTypes.indexOf(1) > -1,
                                                    A = b && (2 === u || "eip1559" === u),
                                                    x = P && (1 === u || "eip2930" === u);
                                                if (null !== u && !A && !x) throw new Error("Unsupported Ethereum transaction type");
                                                var k = (function (e) {
                                                    switch (e) {
                                                        case 3:
                                                        case 4:
                                                            return !1;
                                                        default:
                                                            return !0;
                                                    }
                                                })(n);
                                                null !== s && "boolean" == typeof s ? (k = s) : (A || x) && (k = !1), e.value || (e.value = 0);
                                                var R = [],
                                                    M = (0, m.ensureHexBuffer)(n),
                                                    N = (0, m.ensureHexBuffer)(e.nonce),
                                                    C = void 0,
                                                    O = (0, m.ensureHexBuffer)(e.gasLimit),
                                                    L = void 0,
                                                    D = void 0;
                                                E ? ((L = t.alloc(0)), (D = (0, m.ensureHexBuffer)(l))) : ((L = (0, m.ensureHexBuffer)(e.to)), (D = (0, m.ensureHexBuffer)(e.to)));
                                                var B = (0, m.ensureHexBuffer)(e.value),
                                                    F = (0, m.ensureHexBuffer)(e.data);
                                                (A || x) && R.push(M), R.push(N);
                                                var U = void 0,
                                                    G = void 0;
                                                if (A) {
                                                    if (!e.maxPriorityFeePerGas) throw new Error("EIP1559 transactions must include `maxPriorityFeePerGas`");
                                                    (U = (0, m.ensureHexBuffer)(e.maxPriorityFeePerGas)), R.push(U), (G = (0, m.ensureHexBuffer)(e.maxFeePerGas)), R.push(G), (C = G);
                                                } else (C = (0, m.ensureHexBuffer)(e.gasPrice)), R.push(C);
                                                R.push(O), R.push(L), R.push(B), R.push(F);
                                                var j = !1;
                                                if (A || x) {
                                                    var H = [];
                                                    Array.isArray(e.accessList) &&
                                                        e.accessList.forEach(function (e) {
                                                            var t = [];
                                                            e.storageKeys.forEach(function (e) {
                                                                t.push((0, m.ensureHexBuffer)(e));
                                                            }),
                                                                H.push([(0, m.ensureHexBuffer)(e.address), t]),
                                                                (j = !0);
                                                        }),
                                                        R.push(H);
                                                } else !0 === k && (R.push(M), R.push((0, m.ensureHexBuffer)(null)), R.push((0, m.ensureHexBuffer)(null)));
                                                var K = t.alloc(y + 122),
                                                    V = 0;
                                                K.writeUInt8(Number(k), V), V++;
                                                var q = void 0,
                                                    W = 0;
                                                if (!0 == (1 !== (re = T(n)).length || 255 === re.readUInt8(0))) {
                                                    if ((W = (q = T(n)).length) > g.MAX_CHAIN_ID_BYTES) throw new Error("ChainID provided is too large.");
                                                    K.writeUInt8(g.HANDLE_LARGER_CHAIN_ID, V), V++;
                                                } else {
                                                    if (1 !== (q = (0, m.ensureHexBuffer)(n)).length) throw new Error("Error parsing chainID");
                                                    q.copy(K, V), (V += q.length);
                                                }
                                                var z = (0, m.buildSignerPathBuf)(i, w);
                                                if ((z.copy(K, V), (V += z.length), N.length > 4)) throw new Error("Nonce too large");
                                                if ((N.copy(K, V + (4 - N.length)), (V += 4), C.length > 8)) throw new Error("Gas price too large");
                                                if ((C.copy(K, V + (8 - C.length)), (V += 8), O.length > 4)) throw new Error("Gas limit too large");
                                                if ((O.copy(K, V + (4 - O.length)), (V += 4), 20 !== D.length)) throw new Error("Invalid `to` address");
                                                if ((D.copy(K, V), (V += 20), B.length > 32)) throw new Error("Value too large");
                                                B.copy(K, V + (32 - B.length)), (V += 32);
                                                var Y = !1;
                                                if (o.allowedEthTxTypes)
                                                    if ((j && (Y = !0), K.writeUInt8(Y ? 1 : 0, V), (V += 1), A)) {
                                                        if ((K.writeUInt8(2, V), (V += 1), U.length > 8)) throw new Error("maxPriorityFeePerGasBytes too large");
                                                        U.copy(K, V + (8 - U.length)), (V += 8);
                                                    } else x ? (K.writeUInt8(1, V), (V += 1), (V += 8)) : (V += 9);
                                                var $ = [],
                                                    J = null,
                                                    Q = F.length || 0,
                                                    X = W > 0 ? W + 1 : 0,
                                                    Z = t.alloc(Q + X);
                                                if ((X > 0 && (Z.writeUInt8(W, 0), q.copy(Z, 1)), F.copy(Z, X), Q > y)) {
                                                    var ee = Q + X,
                                                        te = y + f * h;
                                                    if (p && ee > te) J = t.from((0, d.keccak256)(I(R, u)), "hex");
                                                    else {
                                                        if (!v || (v && ee > te)) throw new Error("Data field too large (got ".concat(F.length, "; must be <=").concat(te - X, " bytes)"));
                                                        (0, m.splitFrames)(Z.slice(y), h).forEach(function (e) {
                                                            var r = t.alloc(4);
                                                            r.writeUInt32LE(e.length, 0), $.push(t.concat([r, e]));
                                                        });
                                                    }
                                                } else Y && (J = t.from((0, d.keccak256)(I(R, u)), "hex"));
                                                return (
                                                    K.writeUInt16BE(F.length, V),
                                                    (V += 2),
                                                    W > 0 && (K.writeUInt8(W, V), V++, q.copy(K, V), (V += W)),
                                                    J ? (J.copy(K, V), (V += y)) : (F.slice(0, y).copy(K, V), (V += y)),
                                                    { rawTx: R, type: u, payload: K.slice(0, V), extraDataPayloads: $, schema: g.signingSchema.ETH_TRANSFER, chainId: n, useEIP155: k, signerPath: i }
                                                );
                                            } catch (e) {
                                                return { err: e.message };
                                            }
                                            var re;
                                        },
                                        buildEthRawTx: function (e, r, n) {
                                            var i = y(t.from((0, d.keccak256)(I(e.rawTx, e.type)), "hex"), r, n, e),
                                                a = e.useEIP155 ? e.rawTx.slice(0, -3) : e.rawTx;
                                            a.push(i.v), a.push(v(i.r)), a.push(v(i.s));
                                            var s = t.from((0, f.encode)(a));
                                            return e.type && (s = t.concat([t.from([e.type]), s])), { rawTx: s.toString("hex"), sigWithV: i };
                                        },
                                        hashTransaction: function (e) {
                                            return (0, d.keccak256)(t.from(e, "hex"));
                                        },
                                        chainIds: S,
                                        ensureHexBuffer: m.ensureHexBuffer,
                                        ethConvertLegacyToGenericReq: function (e) {
                                            var r;
                                            r =
                                                e.chainId && "01" !== (0, m.ensureHexBuffer)(e.chainId).toString("hex")
                                                    ? o.default.custom({ chainId: Number(e.chainId) }, { hardfork: o.Hardfork.London, eips: [1559, 2930] })
                                                    : new o.default({ chain: o.Chain.Mainnet, hardfork: o.Hardfork.London });
                                            var n = c.TransactionFactory.fromTxData(e, { common: r });
                                            return e.type ? n.getMessageToSign(!1) : t.from((0, f.encode)(n.getMessageToSign(!1)));
                                        },
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4290,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/validators": 4305, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decryptAddKvRecordsResponse = r.requestAddKvRecords = r.encryptAddKvRecordsRequest = r.encodeAddKvRecordsRequest = r.validateAddKvRequest = r.addKvRecords = void 0);
                                    var a = e("../constants"),
                                        s = e("../shared/functions"),
                                        o = e("../shared/validators");
                                    r.addKvRecords = function (e) {
                                        var t = e.type,
                                            a = void 0 === t ? 0 : t,
                                            s = e.records,
                                            o = e.caseSensitive,
                                            c = void 0 !== o && o,
                                            u = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, t, n, o, l, h, d, f, p, g, m;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateAddKvRequest)({ url: u.url, fwConstants: u.getFwConstants(), sharedSecret: u.sharedSecret, records: s })),
                                                            (t = e.url),
                                                            (n = e.sharedSecret),
                                                            (o = e.fwConstants),
                                                            (l = e.validRecords),
                                                            (h = (0, r.encodeAddKvRecordsRequest)({ records: l, fwConstants: o, type: a, caseSensitive: c })),
                                                            (d = (0, r.encryptAddKvRecordsRequest)({ payload: h, sharedSecret: n })),
                                                            [4, (0, r.requestAddKvRecords)(d, t)]
                                                        );
                                                    case 1:
                                                        return (f = i.sent()), (p = (0, r.decryptAddKvRecordsResponse)(f, n)), (g = p.decryptedData), (m = p.newEphemeralPub), (u.ephemeralPub = m), [2, g];
                                                }
                                            });
                                        });
                                    };
                                    r.validateAddKvRequest = function (e) {
                                        var t = e.url,
                                            r = e.fwConstants,
                                            n = e.sharedSecret,
                                            i = e.records,
                                            a = (0, o.validateUrl)(t),
                                            s = (0, o.validateFwConstants)(r);
                                        return { url: a, fwConstants: s, sharedSecret: (0, o.validateSharedSecret)(n), validRecords: (0, o.validateKvRecords)(i, s) };
                                    };
                                    r.encodeAddKvRecordsRequest = function (e) {
                                        var r = e.records,
                                            n = e.fwConstants,
                                            i = e.type,
                                            a = e.caseSensitive,
                                            s = t.alloc(1 + 139 * n.kvActionMaxNum);
                                        s.writeUInt8(Object.keys(r).length, 0);
                                        var c = 1;
                                        return (
                                            Object.entries(r).forEach(function (e) {
                                                var r = e[0],
                                                    u = e[1],
                                                    l = (0, o.validateKvRecord)({ key: r, val: u }, n),
                                                    h = l.key,
                                                    d = l.val;
                                                s.writeUInt32LE(0, c),
                                                    (c += 4),
                                                    s.writeUInt32LE(i, c),
                                                    (c += 4),
                                                    s.writeUInt8(a ? 1 : 0, c),
                                                    (c += 1),
                                                    s.writeUInt8(String(h).length + 1, c),
                                                    (c += 1),
                                                    t.from(String(h)).copy(s, c),
                                                    (c += n.kvKeyMaxStrSz + 1),
                                                    s.writeUInt8(String(d).length + 1, c),
                                                    (c += 1),
                                                    t.from(String(d)).copy(s, c),
                                                    (c += n.kvValMaxStrSz + 1);
                                            }),
                                            s
                                        );
                                    };
                                    r.encryptAddKvRecordsRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, s.encryptRequest)({ requestCode: "ADD_KV_RECORDS", payload: t, sharedSecret: r });
                                    };
                                    r.requestAddKvRecords = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, s.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decryptAddKvRecordsResponse = function (e, t) {
                                        var r = (0, s.decryptResponse)(e, a.decResLengths.empty, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4291,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/predicates": 4303, "../shared/utilities": 4304, "../shared/validators": 4305, "../util": 4306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    (this && this.__awaiter) ||
                                    function (e, t, r, n) {
                                        return new (r || (r = Promise))(function (i, a) {
                                            function s(e) {
                                                try {
                                                    c(n.next(e));
                                                } catch (e) {
                                                    a(e);
                                                }
                                            }
                                            function o(e) {
                                                try {
                                                    c(n.throw(e));
                                                } catch (e) {
                                                    a(e);
                                                }
                                            }
                                            function c(e) {
                                                var t;
                                                e.done
                                                    ? i(e.value)
                                                    : ((t = e.value),
                                                      t instanceof r
                                                          ? t
                                                          : new r(function (e) {
                                                                e(t);
                                                            })).then(s, o);
                                            }
                                            c((n = n.apply(e, t || [])).next());
                                        });
                                    },
                                i =
                                    (this && this.__generator) ||
                                    function (e, t) {
                                        var r,
                                            n,
                                            i,
                                            a,
                                            s = {
                                                label: 0,
                                                sent: function () {
                                                    if (1 & i[0]) throw i[1];
                                                    return i[1];
                                                },
                                                trys: [],
                                                ops: [],
                                            };
                                        return (
                                            (a = { next: o(0), throw: o(1), return: o(2) }),
                                            "function" == typeof Symbol &&
                                                (a[Symbol.iterator] = function () {
                                                    return this;
                                                }),
                                            a
                                        );
                                        function o(a) {
                                            return function (o) {
                                                return (function (a) {
                                                    if (r) throw new TypeError("Generator is already executing.");
                                                    for (; s; )
                                                        try {
                                                            if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                            switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                case 0:
                                                                case 1:
                                                                    i = a;
                                                                    break;
                                                                case 4:
                                                                    return s.label++, { value: a[1], done: !1 };
                                                                case 5:
                                                                    s.label++, (n = a[1]), (a = [0]);
                                                                    continue;
                                                                case 7:
                                                                    (a = s.ops.pop()), s.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                        s = 0;
                                                                        continue;
                                                                    }
                                                                    if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                        s.label = a[1];
                                                                        break;
                                                                    }
                                                                    if (6 === a[0] && s.label < i[1]) {
                                                                        (s.label = i[1]), (i = a);
                                                                        break;
                                                                    }
                                                                    if (i && s.label < i[2]) {
                                                                        (s.label = i[2]), s.ops.push(a);
                                                                        break;
                                                                    }
                                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                                    continue;
                                                            }
                                                            a = t.call(e, s);
                                                        } catch (e) {
                                                            (a = [6, e]), (n = 0);
                                                        } finally {
                                                            r = i = 0;
                                                        }
                                                    if (5 & a[0]) throw a[1];
                                                    return { value: a[0] ? a[1] : void 0, done: !0 };
                                                })([a, o]);
                                            };
                                        }
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.decodeConnectResponse = r.requestConnect = r.encodeConnectRequest = r.validateConnectRequest = r.connect = void 0);
                            var a = e("../constants"),
                                s = e("../shared/functions"),
                                o = e("../shared/predicates"),
                                c = e("../shared/utilities"),
                                u = e("../shared/validators"),
                                l = e("../util");
                            r.connect = function (e) {
                                var t = e.id,
                                    a = e.client;
                                return n(this, void 0, void 0, function () {
                                    var e, n, s, c, u, l, h, d, f, p, g, m;
                                    return i(this, function (i) {
                                        switch (i.label) {
                                            case 0:
                                                return (
                                                    (e = (0, r.validateConnectRequest)({ deviceId: t, key: a.key, baseUrl: a.baseUrl })),
                                                    (n = e.deviceId),
                                                    (s = e.key),
                                                    (c = e.baseUrl),
                                                    (u = "".concat(c, "/").concat(n)),
                                                    [4, (0, r.encodeConnectRequest)(s)]
                                                );
                                            case 1:
                                                return (l = i.sent()), [4, (0, r.requestConnect)(l, u)];
                                            case 2:
                                                return (h = i.sent()), [4, (0, r.decodeConnectResponse)(h, s)];
                                            case 3:
                                                return (
                                                    (d = i.sent()),
                                                    (f = d.isPaired),
                                                    (p = d.fwVersion),
                                                    (g = d.activeWallets),
                                                    (m = d.ephemeralPub),
                                                    (a.deviceId = n),
                                                    (a.ephemeralPub = m),
                                                    (a.url = "".concat(a.baseUrl, "/").concat(n)),
                                                    (a.isPaired = f),
                                                    (a.fwVersion = p),
                                                    g && (a.activeWallets = g),
                                                    !f || (0, o.doesFetchWalletsOnLoad)(a.getFwVersion()) ? [3, 5] : [4, a.fetchActiveWallet()]
                                                );
                                            case 4:
                                                i.sent(), (i.label = 5);
                                            case 5:
                                                return [2, f];
                                        }
                                    });
                                });
                            };
                            r.validateConnectRequest = function (e) {
                                var t = e.deviceId,
                                    r = e.key,
                                    n = e.baseUrl;
                                return { deviceId: (0, u.validateDeviceId)(t), key: (0, u.validateKey)(r), baseUrl: (0, u.validateBaseUrl)(n) };
                            };
                            r.encodeConnectRequest = function (e) {
                                var t = a.deviceCodes.CONNECT,
                                    r = (0, c.getPubKeyBytes)(e);
                                return (0, s.buildRequest)(t, r);
                            };
                            r.requestConnect = function (e, t) {
                                return n(void 0, void 0, void 0, function () {
                                    return i(this, function (r) {
                                        return [2, (0, s.request)({ payload: e, url: t })];
                                    });
                                });
                            };
                            r.decodeConnectResponse = function (e, t) {
                                var r = 0,
                                    n = e.readUInt8(r) === a.messageConstants.PAIRED;
                                r++;
                                var i = e.slice(r, r + 65).toString("hex");
                                r += 65;
                                var s = (0, l.getP256KeyPairFromPub)(i),
                                    o = e.slice(r, r + 4);
                                if (((r += 4), n)) {
                                    var u = e.slice(r, r + 160);
                                    r += 160;
                                    var h = (0, c.getSharedSecret)(t, s),
                                        d = (0, l.aes256_decrypt)(u, h);
                                    if (0 !== d[d.length - 2] || 0 !== d[d.length - 1]) throw new Error("Failed to connect to Lattice.");
                                    return { isPaired: n, fwVersion: o, activeWallets: (0, c.parseWallets)(d), ephemeralPub: s };
                                }
                                return { isPaired: n, fwVersion: o, activeWallets: undefined, ephemeralPub: s };
                            };
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4292,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/validators": 4305, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decryptFetchActiveWalletResponse = r.decodeFetchActiveWalletResponse = r.requestFetchActiveWallet = r.encryptFetchActiveWalletRequest = r.validateFetchActiveWallet = r.fetchActiveWallet = void 0);
                                    var a = e("../constants"),
                                        s = e("../shared/functions"),
                                        o = e("../shared/validators");
                                    r.fetchActiveWallet = function (e) {
                                        var t = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, a, s, c, u, l, h, d, f;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateFetchActiveWallet)({ url: t.url, sharedSecret: t.sharedSecret })),
                                                            (n = e.url),
                                                            (a = e.sharedSecret),
                                                            (s = (0, r.encryptFetchActiveWalletRequest)({ sharedSecret: a })),
                                                            [
                                                                4,
                                                                (0, r.requestFetchActiveWallet)(s, n).catch(function (e) {
                                                                    throw (t.resetActiveWallets(), e);
                                                                }),
                                                            ]
                                                        );
                                                    case 1:
                                                        return (
                                                            (c = i.sent()),
                                                            (u = (0, r.decryptFetchActiveWalletResponse)(c, a)),
                                                            (l = u.decryptedData),
                                                            (h = u.newEphemeralPub),
                                                            (d = (0, r.decodeFetchActiveWalletResponse)(l)),
                                                            (f = (0, o.validateActiveWallets)(d)),
                                                            (t.activeWallets = f),
                                                            (t.ephemeralPub = h),
                                                            [2, f]
                                                        );
                                                }
                                            });
                                        });
                                    };
                                    r.validateFetchActiveWallet = function (e) {
                                        var t = e.url,
                                            r = e.sharedSecret;
                                        return { url: (0, o.validateUrl)(t), sharedSecret: (0, o.validateSharedSecret)(r) };
                                    };
                                    r.encryptFetchActiveWalletRequest = function (e) {
                                        var r = e.sharedSecret;
                                        return (0, s.encryptRequest)({ requestCode: "GET_WALLETS", payload: t.alloc(0), sharedSecret: r });
                                    };
                                    r.requestFetchActiveWallet = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, s.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decodeFetchActiveWalletResponse = function (e) {
                                        var r = e.slice(65),
                                            n = { internal: { uid: a.EMPTY_WALLET_UID, external: !1, name: t.alloc(0), capabilities: 0 }, external: { uid: a.EMPTY_WALLET_UID, external: !0, name: t.alloc(0), capabilities: 0 } },
                                            i = 0;
                                        return (
                                            (n.internal.uid = r.slice(i, i + 32)),
                                            (n.internal.capabilities = r.readUInt32BE(i + 32)),
                                            (n.internal.name = r.slice(i + 36, i + 71)),
                                            (i += 71),
                                            (n.external.uid = r.slice(i, i + 32)),
                                            (n.external.capabilities = r.readUInt32BE(i + 32)),
                                            (n.external.name = r.slice(i + 36, i + 71)),
                                            n
                                        );
                                    };
                                    r.decryptFetchActiveWalletResponse = function (e, t) {
                                        var r = (0, s.decryptResponse)(e, a.decResLengths.getWallets, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4293,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/validators": 4305, "../util": 4306, bitwise: 1673, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            },
                                        a =
                                            (this && this.__importDefault) ||
                                            function (e) {
                                                return e && e.__esModule ? e : { default: e };
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decryptGetAddressesResponse = r.decodeGetAddresses = r.requestGetAddresses = r.encryptGetAddressesRequest = r.encodeGetAddressesRequest = r.validateGetAddressesRequest = r.getAddresses = void 0);
                                    var s = a(e("bitwise")),
                                        o = e("../constants"),
                                        c = e("../shared/functions"),
                                        u = e("../shared/validators"),
                                        l = e("../util");
                                    r.getAddresses = function (e) {
                                        var t = e.startPath,
                                            a = e.n,
                                            s = e.flag,
                                            o = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, c, u, l, h, d, f, p, g, m;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateGetAddressesRequest)({ startPath: t, n: a, flag: s, url: o.url, fwVersion: o.fwVersion, wallet: o.getActiveWallet(), sharedSecret: o.sharedSecret })),
                                                            (n = e.url),
                                                            (c = e.fwVersion),
                                                            (u = e.wallet),
                                                            (l = e.sharedSecret),
                                                            (h = (0, r.encodeGetAddressesRequest)({ startPath: t, n: a, flag: s, fwVersion: c, wallet: u })),
                                                            (d = (0, r.encryptGetAddressesRequest)({ payload: h, sharedSecret: l })),
                                                            [4, (0, r.requestGetAddresses)(d, n)]
                                                        );
                                                    case 1:
                                                        return (f = i.sent()), (p = (0, r.decryptGetAddressesResponse)(f, l)), (g = p.decryptedData), (m = p.newEphemeralPub), (o.ephemeralPub = m), [2, (0, r.decodeGetAddresses)(g, s)];
                                                }
                                            });
                                        });
                                    };
                                    r.validateGetAddressesRequest = function (e) {
                                        var t = e.startPath,
                                            r = e.n,
                                            n = e.flag,
                                            i = e.url,
                                            a = e.fwVersion,
                                            s = e.wallet,
                                            o = e.sharedSecret;
                                        return (
                                            (0, u.validateStartPath)(t),
                                            (0, u.validateNAddresses)(r),
                                            (0, u.validateIsUInt4)(n),
                                            { url: (0, u.validateUrl)(i), fwVersion: (0, u.validateFwVersion)(a), wallet: (0, u.validateWallet)(s), sharedSecret: (0, u.validateSharedSecret)(o) }
                                        );
                                    };
                                    r.encodeGetAddressesRequest = function (e) {
                                        var r,
                                            n = e.fwVersion,
                                            i = e.startPath,
                                            a = e.n,
                                            c = e.wallet,
                                            u = e.flag,
                                            h = (0, o.getFwVersionConst)(n);
                                        if (!((h.getAddressFlags || []).indexOf(u) > -1 && (u === o.EXTERNAL.GET_ADDR_FLAGS.ED25519_PUB || u === o.EXTERNAL.GET_ADDR_FLAGS.SECP256K1_PUB)) && !(0, l.isValidAssetPath)(i, h))
                                            throw new Error("Parent derivation path is not supported");
                                        var d = 53;
                                        if (h.varAddrPathSzAllowed) d += 1;
                                        else if (5 !== i.length) throw new Error("Your Lattice firmware only supports derivation paths with 5 indices. Please upgrade.");
                                        var f = t.alloc(d),
                                            p = 0;
                                        c.uid.copy(f, p), (p += 32), h.varAddrPathSzAllowed && (f.writeUInt8(i.length, p), (p += 1));
                                        for (var g = 0; g < 5; g++) {
                                            if (g <= i.length) {
                                                var m = null !== (r = i[g]) && void 0 !== r ? r : 0;
                                                f.writeUInt32BE(m, p);
                                            }
                                            p += 4;
                                        }
                                        var v,
                                            y = 0;
                                        if (h.addrFlagsAllowed) {
                                            y = h.getAddressFlags && h.getAddressFlags.indexOf(u) > -1 ? u : 0;
                                            var w = s.default.nibble.read(y),
                                                E = s.default.nibble.read(a);
                                            v = s.default.byte.write(w.concat(E));
                                        } else v = a;
                                        return f.writeUInt8(v, p), p++, f;
                                    };
                                    r.encryptGetAddressesRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, c.encryptRequest)({ requestCode: "GET_ADDRESSES", payload: t, sharedSecret: r });
                                    };
                                    r.requestGetAddresses = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, c.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decodeGetAddresses = function (e, t) {
                                        var r = 65,
                                            n = [],
                                            i = o.EXTERNAL.GET_ADDR_FLAGS,
                                            a = i.ED25519_PUB,
                                            s = i.SECP256K1_PUB,
                                            c = t === a || t === s;
                                        for (c && (r += 1); r + 4 < o.decResLengths.getAddresses; )
                                            if (c) {
                                                var u = e.slice(r, r + 65),
                                                    l = u.every(function (e) {
                                                        return 0 === e;
                                                    });
                                                l || t !== a ? l || n.push(u) : n.push(u.slice(0, 32)), (r += 65);
                                            } else {
                                                var h = e.slice(r, r + o.ADDR_STR_LEN);
                                                r += o.ADDR_STR_LEN;
                                                var d = h.indexOf(0);
                                                d > 0 && n.push(h.slice(0, d).toString());
                                            }
                                        return n;
                                    };
                                    r.decryptGetAddressesResponse = function (e, t) {
                                        var r = (0, c.decryptResponse)(e, o.decResLengths.getAddresses, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4294,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/validators": 4305, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decodeGetKvRecordsResponse = r.decryptGetKvRecordsResponse = r.requestGetKvRecords = r.encryptGetKvRecordsRequest = r.encodeGetKvRecordsRequest = r.validateGetKvRequest = r.getKvRecords = void 0);
                                    var a = e("../constants"),
                                        s = e("../shared/functions"),
                                        o = e("../shared/validators");
                                    r.getKvRecords = function (e) {
                                        var t = e.type,
                                            a = e.n,
                                            s = e.start,
                                            o = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, c, u, l, h, d, f, p, g, m, v, y;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateGetKvRequest)({ url: o.url, fwConstants: o.getFwConstants(), sharedSecret: o.sharedSecret, type: t, n: a, start: s })),
                                                            (n = e.url),
                                                            (c = e.sharedSecret),
                                                            (u = e.fwConstants),
                                                            (l = e.type),
                                                            (h = e.n),
                                                            (d = e.start),
                                                            (f = (0, r.encodeGetKvRecordsRequest)({ type: l, n: h, start: d })),
                                                            (p = (0, r.encryptGetKvRecordsRequest)({ payload: f, sharedSecret: c })),
                                                            [4, (0, r.requestGetKvRecords)(p, n)]
                                                        );
                                                    case 1:
                                                        return (
                                                            (g = i.sent()), (m = (0, r.decryptGetKvRecordsResponse)(g, c)), (v = m.decryptedData), (y = m.newEphemeralPub), (o.ephemeralPub = y), [2, (0, r.decodeGetKvRecordsResponse)(v, u)]
                                                        );
                                                }
                                            });
                                        });
                                    };
                                    r.validateGetKvRequest = function (e) {
                                        var t = e.url,
                                            r = e.fwConstants,
                                            n = e.sharedSecret,
                                            i = e.n,
                                            a = e.type,
                                            s = e.start,
                                            c = (0, o.validateUrl)(t),
                                            u = (0, o.validateFwConstants)(r),
                                            l = (0, o.validateSharedSecret)(n);
                                        if (!u.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                                        if (!i || i < 1) throw new Error("You must request at least one record.");
                                        if (i > u.kvActionMaxNum) throw new Error("You may only request up to ".concat(u.kvActionMaxNum, " records at once."));
                                        if (0 !== a && !a) throw new Error("You must specify a type.");
                                        if (0 !== s && !s) throw new Error("You must specify a type.");
                                        return { url: c, fwConstants: u, sharedSecret: l, type: a, n: i, start: s };
                                    };
                                    r.encodeGetKvRecordsRequest = function (e) {
                                        var r = e.type,
                                            n = e.n,
                                            i = e.start,
                                            a = t.alloc(9);
                                        return a.writeUInt32LE(r, 0), a.writeUInt8(n, 4), a.writeUInt32LE(i, 5), a;
                                    };
                                    r.encryptGetKvRecordsRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, s.encryptRequest)({ requestCode: "GET_KV_RECORDS", payload: t, sharedSecret: r });
                                    };
                                    r.requestGetKvRecords = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, s.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decryptGetKvRecordsResponse = function (e, t) {
                                        var r = (0, s.decryptResponse)(e, a.decResLengths.getKvRecords, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                    r.decodeGetKvRecordsResponse = function (e, t) {
                                        var r = 65,
                                            n = parseInt(e.slice(r, r + 4).toString("hex"), 16);
                                        r += 4;
                                        var i = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                                        if (((r += 1), i > t.kvActionMaxNum)) throw new Error("Too many records fetched. Firmware error.");
                                        for (var a = [], s = 0; s < i; s++) {
                                            var o = {};
                                            (o.id = parseInt(e.slice(r, r + 4).toString("hex"), 16)),
                                                (r += 4),
                                                (o.type = parseInt(e.slice(r, r + 4).toString("hex"), 16)),
                                                (r += 4),
                                                (o.caseSensitive = 1 === parseInt(e.slice(r, r + 1).toString("hex"), 16)),
                                                (r += 1);
                                            var c = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                                            (r += 1), (o.key = e.slice(r, r + c - 1).toString()), (r += t.kvKeyMaxStrSz + 1);
                                            var u = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                                            (r += 1), (o.val = e.slice(r, r + u - 1).toString()), (r += t.kvValMaxStrSz + 1), a.push(o);
                                        }
                                        return { records: a, total: n, fetched: i };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4295,
            { "./addKvRecords": 4290, "./connect": 4291, "./fetchActiveWallet": 4292, "./getAddresses": 4293, "./getKvRecords": 4294, "./pair": 4296, "./removeKvRecords": 4297, "./sign": 4298 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n =
                                    (this && this.__createBinding) ||
                                    (Object.create
                                        ? function (e, t, r, n) {
                                              n === undefined && (n = r);
                                              var i = Object.getOwnPropertyDescriptor(t, r);
                                              (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                                                  (i = {
                                                      enumerable: !0,
                                                      get: function () {
                                                          return t[r];
                                                      },
                                                  }),
                                                  Object.defineProperty(e, n, i);
                                          }
                                        : function (e, t, r, n) {
                                              n === undefined && (n = r), (e[n] = t[r]);
                                          }),
                                i =
                                    (this && this.__exportStar) ||
                                    function (e, t) {
                                        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                                    };
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                i(e("./addKvRecords"), r),
                                i(e("./connect"), r),
                                i(e("./fetchActiveWallet"), r),
                                i(e("./getAddresses"), r),
                                i(e("./getKvRecords"), r),
                                i(e("./pair"), r),
                                i(e("./removeKvRecords"), r),
                                i(e("./sign"), r);
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4296,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/utilities": 4304, "../shared/validators": 4305, "../util": 4306, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.decryptPairResponse = r.requestPair = r.encryptPairRequest = r.encodePairRequest = r.pair = void 0);
                                    var a = e("../constants"),
                                        s = e("../shared/functions"),
                                        o = e("../shared/utilities"),
                                        c = e("../shared/validators"),
                                        u = e("../util");
                                    r.pair = function (e) {
                                        var t = e.pairingSecret,
                                            a = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, s, o, u, l;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, c.validateAppName)(a.name)),
                                                            (n = (0, c.validateUrl)(a.url)),
                                                            (s = (0, r.encodePairRequest)(a.key, t, e)),
                                                            (o = (0, r.encryptPairRequest)({ payload: s, sharedSecret: a.sharedSecret })),
                                                            [4, (0, r.requestPair)(o, n)]
                                                        );
                                                    case 1:
                                                        return (u = i.sent()), (l = (0, r.decryptPairResponse)(u, a.sharedSecret).newEphemeralPub), (a.isPaired = !0), (a.ephemeralPub = l), [4, a.fetchActiveWallet()];
                                                    case 2:
                                                        return i.sent(), [2, a.hasActiveWallet()];
                                                }
                                            });
                                        });
                                    };
                                    r.encodePairRequest = function (e, r, n) {
                                        var i = (0, o.getPubKeyBytes)(e),
                                            a = t.alloc(25);
                                        r.length > 0 && a.write(n);
                                        var s = (0, u.generateAppSecret)(i, a, t.from(r)),
                                            c = e.sign(s),
                                            l = (0, u.toPaddedDER)(c);
                                        return t.concat([a, l]);
                                    };
                                    r.encryptPairRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, s.encryptRequest)({ requestCode: "FINALIZE_PAIRING", payload: t, sharedSecret: r });
                                    };
                                    r.requestPair = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, s.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decryptPairResponse = function (e, t) {
                                        return (0, s.decryptResponse)(e, a.decResLengths.empty, t);
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4297,
            { "../constants": 4288, "../shared/functions": 4302, "../shared/validators": 4305, buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decryptRemoveKvRecordsResponse = r.requestRemoveKvRecords = r.encryptRemoveKvRecordsRequest = r.encodeRemoveKvRecordsRequest = r.validateRemoveKvRequest = r.removeKvRecords = void 0);
                                    var a = e("../constants"),
                                        s = e("../shared/functions"),
                                        o = e("../shared/validators");
                                    r.removeKvRecords = function (e) {
                                        var t = e.type,
                                            a = e.ids,
                                            s = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, o, c, u, l, h, d, f, p, g, m;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateRemoveKvRequest)({ url: s.url, fwConstants: s.getFwConstants(), sharedSecret: s.sharedSecret, type: t, ids: a })),
                                                            (n = e.url),
                                                            (o = e.sharedSecret),
                                                            (c = e.fwConstants),
                                                            (u = e.type),
                                                            (l = e.ids),
                                                            (h = (0, r.encodeRemoveKvRecordsRequest)({ type: u, ids: l, fwConstants: c })),
                                                            (d = (0, r.encryptRemoveKvRecordsRequest)({ payload: h, sharedSecret: o })),
                                                            [4, (0, r.requestRemoveKvRecords)(d, n)]
                                                        );
                                                    case 1:
                                                        return (f = i.sent()), (p = (0, r.decryptRemoveKvRecordsResponse)(f, o)), (g = p.decryptedData), (m = p.newEphemeralPub), (s.ephemeralPub = m), [2, g];
                                                }
                                            });
                                        });
                                    };
                                    r.validateRemoveKvRequest = function (e) {
                                        var t = e.url,
                                            r = e.fwConstants,
                                            n = e.sharedSecret,
                                            i = e.ids,
                                            a = e.type,
                                            s = (0, o.validateUrl)(t),
                                            c = (0, o.validateFwConstants)(r),
                                            u = (0, o.validateSharedSecret)(n);
                                        if (!c.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                                        if (!Array.isArray(i) || i.length < 1) throw new Error("You must include one or more `ids` to removed.");
                                        if (i.length > c.kvRemoveMaxNum) throw new Error("Only up to ".concat(c.kvRemoveMaxNum, " records may be removed at once."));
                                        if (0 !== a && !a) throw new Error("You must specify a type.");
                                        return { url: s, fwConstants: c, sharedSecret: u, type: a, ids: i };
                                    };
                                    r.encodeRemoveKvRecordsRequest = function (e) {
                                        var r = e.type,
                                            n = e.ids,
                                            i = e.fwConstants,
                                            a = t.alloc(5 + 4 * i.kvRemoveMaxNum);
                                        a.writeUInt32LE(r, 0), a.writeUInt8(n.length, 4);
                                        for (var s = 0; s < n.length; s++) {
                                            var o = parseInt(n[s]);
                                            a.writeUInt32LE(o, 5 + 4 * s);
                                        }
                                        return a;
                                    };
                                    r.encryptRemoveKvRecordsRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, s.encryptRequest)({ requestCode: "REMOVE_KV_RECORDS", payload: t, sharedSecret: r });
                                    };
                                    r.requestRemoveKvRecords = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, s.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decryptRemoveKvRecordsResponse = function (e, t) {
                                        var r = (0, s.decryptResponse)(e, a.decResLengths.empty, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4298,
            { "../bitcoin": 4284, "../constants": 4288, "../ethereum": 4289, "../genericSigning": 4299, "../shared/functions": 4302, "../shared/validators": 4305, "../util": 4306, buffer: 1728, "hash.js": 4429 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        i =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            },
                                        a =
                                            (this && this.__importDefault) ||
                                            function (e) {
                                                return e && e.__esModule ? e : { default: e };
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.decryptSignResponse = r.decodeSignResponse = r.requestSign = r.encryptSignRequest = r.encodeSignRequest = r.validateSignRequest = r.sign = void 0);
                                    var s = e("hash.js"),
                                        o = a(e("../bitcoin")),
                                        c = e("../constants"),
                                        u = a(e("../ethereum")),
                                        l = e("../genericSigning"),
                                        h = e("../shared/functions"),
                                        d = e("../shared/validators"),
                                        f = e("../util");
                                    r.sign = function (e) {
                                        var t = e.data,
                                            a = e.currency,
                                            s = e.cachedData,
                                            o = e.nextCode,
                                            c = e.client;
                                        return n(this, void 0, void 0, function () {
                                            var e, n, u, l, d, f, p, g, m, v, y, w, E, S, T, _, b, P, A;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return (
                                                            (e = (0, r.validateSignRequest)({ url: c.url, fwConstants: c.getFwConstants(), wallet: c.getActiveWallet(), sharedSecret: c.sharedSecret })),
                                                            (n = e.url),
                                                            (u = e.wallet),
                                                            (l = e.sharedSecret),
                                                            (d = e.fwConstants),
                                                            (f = (0, h.buildTransaction)({ data: t, currency: a, fwConstants: d })),
                                                            (p = f.request),
                                                            (g = f.isGeneric),
                                                            (m = (0, r.encodeSignRequest)({ request: p, fwConstants: d, wallet: u, cachedData: s, nextCode: o })),
                                                            (v = m.payload),
                                                            (y = m.hasExtraPayloads),
                                                            (w = (0, r.encryptSignRequest)({ payload: v, sharedSecret: l })),
                                                            [4, (0, r.requestSign)(w, n)]
                                                        );
                                                    case 1:
                                                        return (
                                                            (E = i.sent()),
                                                            y
                                                                ? ((S = (0, r.decryptSignResponse)(E, l)),
                                                                  (T = S.decryptedData),
                                                                  (_ = S.newEphemeralPub),
                                                                  (c.ephemeralPub = _),
                                                                  [2, c.sign({ data: t, currency: a, cachedData: p, nextCode: T.slice(65, 73) })])
                                                                : ((b = (0, r.decryptSignResponse)(E, l)),
                                                                  (P = b.decryptedData),
                                                                  (A = b.newEphemeralPub),
                                                                  (c.ephemeralPub = A),
                                                                  [2, (0, r.decodeSignResponse)({ data: P, request: p, isGeneric: g, currency: a })])
                                                        );
                                                }
                                            });
                                        });
                                    };
                                    r.validateSignRequest = function (e) {
                                        var t = e.url,
                                            r = e.fwConstants,
                                            n = e.sharedSecret,
                                            i = e.wallet;
                                        return { url: (0, d.validateUrl)(t), fwConstants: (0, d.validateFwConstants)(r), sharedSecret: (0, d.validateSharedSecret)(n), wallet: (0, d.validateWallet)(i) };
                                    };
                                    r.encodeSignRequest = function (e) {
                                        var r,
                                            n,
                                            i,
                                            a,
                                            s,
                                            o = e.request,
                                            u = e.fwConstants,
                                            l = e.wallet,
                                            h = e.cachedData,
                                            f = e.nextCode;
                                        h && f ? ((o = h), (a = t.concat([f, o.extraDataPayloads.shift()])), (s = c.signingSchema.EXTRA_DATA)) : ((a = o.payload), (s = o.schema));
                                        var p = t.alloc(2 + u.reqMaxDataSz),
                                            g = 0,
                                            m = o.extraDataPayloads && Number(o.extraDataPayloads.length > 0);
                                        p.writeUInt8(m, g), (g += 1), p.writeUInt8(s, g), (g += 1);
                                        var v = (0, d.validateWallet)(l);
                                        return (
                                            null === (r = v.uid) || void 0 === r || r.copy(p, g),
                                            (g += null !== (i = null === (n = v.uid) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0),
                                            a.copy(p, g),
                                            { payload: p, hasExtraPayloads: m }
                                        );
                                    };
                                    r.encryptSignRequest = function (e) {
                                        var t = e.payload,
                                            r = e.sharedSecret;
                                        return (0, h.encryptRequest)({ requestCode: "SIGN_TRANSACTION", payload: t, sharedSecret: r });
                                    };
                                    r.requestSign = function (e, t) {
                                        return n(void 0, void 0, void 0, function () {
                                            return i(this, function (r) {
                                                return [2, (0, h.request)({ payload: e, url: t })];
                                            });
                                        });
                                    };
                                    r.decodeSignResponse = function (e) {
                                        var r,
                                            n = e.data,
                                            i = e.request,
                                            a = e.isGeneric,
                                            h = e.currency,
                                            d = 65;
                                        if (h === c.CURRENCIES.BTC) {
                                            var p = i,
                                                g = o.default.getAddressFormat(p.origData.changePath),
                                                m = n.slice(d, d + 20);
                                            (d += 20), (r = o.default.getBitcoinAddress(m, g));
                                            for (var v = [], y = [], w = 0; d < n.length && 48 === n[d]; ) {
                                                var E = d,
                                                    S = d + 2 + n[d + 1];
                                                y.push(n.slice(E, S));
                                                var T = 33 * w + 825,
                                                    _ = 33 * (w + 1) + 825;
                                                v.push(n.slice(T, _)), (d += 74), (w += 1);
                                            }
                                            var b = { inputs: [], outputs: [] };
                                            b.outputs.push({ value: p.origData.value, recipient: p.origData.recipient }), p.changeData.value > 0 && b.outputs.push({ value: p.changeData.value, recipient: r });
                                            for (var P = 0; P < y.length; P++)
                                                b.inputs.push({ hash: p.origData.prevOuts[P].txHash, index: p.origData.prevOuts[P].index, sig: y[P], pubkey: v[P], signerPath: p.origData.prevOuts[P].signerPath });
                                            var A = o.default.serializeTx(b),
                                                x = A,
                                                I = t.from((0, s.sha256)().update(t.from(x, "hex")).digest("hex"), "hex");
                                            return { tx: A, txHash: (0, s.sha256)().update(I).digest("hex"), changeRecipient: r, sigs: y };
                                        }
                                        if (h !== c.CURRENCIES.ETH || a) {
                                            if (h === c.CURRENCIES.ETH_MSG) {
                                                M = (0, f.parseDER)(n.slice(d, d + 2 + n[d + 1]));
                                                d += 74;
                                                var k = n.slice(d, d + 20),
                                                    R = u.default.validateEthereumMsgResponse({ signer: k, sig: M }, i);
                                                return { sig: { v: R.v, r: R.r.toString("hex"), s: R.s.toString("hex") }, signer: k };
                                            }
                                            return (0, l.parseGenericSigningResponse)(n, d, i);
                                        }
                                        var M = (0, f.parseDER)(n.slice(d, d + 2 + n[d + 1]));
                                        d += 74;
                                        var N = n.slice(d, d + 20),
                                            C = u.default.buildEthRawTx(i, M, N),
                                            O = C.rawTx,
                                            L = C.sigWithV;
                                        return { tx: "0x".concat(O), txHash: "0x".concat(u.default.hashTransaction(O)), sig: { v: L.v, r: L.r.toString("hex"), s: L.s.toString("hex") }, signer: N };
                                    };
                                    r.decryptSignResponse = function (e, t) {
                                        var r = (0, h.decryptResponse)(e, c.decResLengths.sign, t);
                                        return { decryptedData: r.decryptedData, newEphemeralPub: r.newEphemeralPub };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4299,
            { "./constants": 4288, "./index": 4300, "./util": 4306, buffer: 1728, "hash.js/lib/hash/sha": 4433, "js-sha3": 4405 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.getEncodedPayload = r.parseGenericSigningResponse = r.buildGenericSigningMsgRequest = void 0);
                                    var n = e("hash.js/lib/hash/sha"),
                                        i = e("js-sha3"),
                                        a = e("./constants"),
                                        s = e("./index"),
                                        o = e("./util");
                                    r.buildGenericSigningMsgRequest = function (e) {
                                        var s = e.signerPath,
                                            c = e.curveType,
                                            u = e.hashType,
                                            l = e.encodingType,
                                            h = void 0 === l ? null : l,
                                            d = e.decoder,
                                            f = void 0 === d ? null : d,
                                            p = e.omitPubkey,
                                            g = void 0 !== p && p,
                                            m = e.fwConstants,
                                            v = m.extraDataFrameSz,
                                            y = m.extraDataMaxFrames,
                                            w = m.prehashAllowed,
                                            E = m.genericSigning,
                                            S = m.varAddrPathSzAllowed,
                                            T = E.curveTypes,
                                            _ = E.encodingTypes,
                                            b = E.hashTypes,
                                            P = E.baseDataSz,
                                            A = E.baseReqSz,
                                            x = E.calldataDecoding,
                                            I = (0, r.getEncodedPayload)(e.payload, h, _),
                                            k = I.encoding,
                                            R = I.payloadBuf,
                                            M = R,
                                            N = R.length,
                                            C = P + y * v;
                                        if (!N) throw new Error("Payload could not be handled.");
                                        if (!(E && v && y && w)) throw new Error("Unsupported. Please update your Lattice firmware.");
                                        if (!(0, o.existsIn)(c, T)) throw new Error("Unsupported curve type.");
                                        if (!(0, o.existsIn)(u, b)) throw new Error("Unsupported hash type.");
                                        var O = f && x && f.length <= x.maxSz,
                                            L = O && R.length + f.length <= C;
                                        if (O && L) {
                                            var D = t.alloc(8 + f.length);
                                            D.writeUInt32LE(x.reserved, 0), D.writeUInt32LE(f.length, 4), t.from(f).copy(D, 8), (R = t.concat([R, D]));
                                        }
                                        if (c === T.ED25519) {
                                            if (u !== b.NONE) throw new Error("Signing on ed25519 requires unhashed message");
                                            s.forEach(function (e) {
                                                if (e < a.HARDENED_OFFSET) throw new Error("Signing on ed25519 requires all signer path indices be hardened.");
                                            });
                                        }
                                        var B = t.alloc(A),
                                            F = 0;
                                        B.writeUInt32LE(k, F), (F += 4), B.writeUInt8(u, F), (F += 1), B.writeUInt8(c, F), (F += 1);
                                        var U = (0, o.buildSignerPathBuf)(s, S);
                                        U.copy(B, F), (F += U.length), B.writeUInt8(g ? 1 : 0, F), (F += 1);
                                        var G = [],
                                            j = null,
                                            H = !1;
                                        if (R.length > P)
                                            if (w && R.length > C) {
                                                B.writeUInt16LE(R.length, F), (F += 2), (H = !0);
                                                var K = R.slice(0, N);
                                                if (u === b.NONE) throw new Error("Message too large to send and could not be prehashed (hashType=NONE).");
                                                if (u === b.KECCAK256) j = t.from((0, i.keccak256)(K), "hex");
                                                else {
                                                    if (u !== b.SHA256) throw new Error("Unsupported hash type.");
                                                    j = t.from((0, n.sha256)().update(K).digest("hex"), "hex");
                                                }
                                            } else {
                                                (0, o.splitFrames)(R.slice(P), v).forEach(function (e) {
                                                    var r = t.alloc(4);
                                                    r.writeUInt32LE(e.length, 0), G.push(t.concat([r, e]));
                                                });
                                            }
                                        return (
                                            H || (B.writeUInt16LE(N, F), (F += 2)),
                                            (j || R).copy(B, F),
                                            { payload: B, extraDataPayloads: G, schema: a.signingSchema.GENERAL_SIGNING, curveType: c, encodingType: h, hashType: u, omitPubkey: g, origPayloadBuf: M }
                                        );
                                    };
                                    r.parseGenericSigningResponse = function (e, r, n) {
                                        var i = { pubkey: null, sig: null };
                                        if (n.curveType === s.Constants.SIGNING.CURVES.SECP256K1) {
                                            if (n.omitPubkey) r += 65;
                                            else {
                                                var a = e.readUInt8(r);
                                                if (((r += 1), 2 === a || 3 === a)) (i.pubkey = t.alloc(33)), i.pubkey.writeUInt8(a, 0), e.slice(r, r + 32).copy(i.pubkey, 1);
                                                else {
                                                    if (4 !== a) throw new Error("Bad compression byte in signing response.");
                                                    (i.pubkey = t.alloc(65)), i.pubkey.writeUInt8(a, 0), e.slice(r).copy(i.pubkey, 1);
                                                }
                                                r += 64;
                                            }
                                            if (
                                                ((i.sig = (0, o.parseDER)(e.slice(r, r + 2 + e[r + 1]))), (i.sig.r = (0, o.fixLen)(i.sig.r, 32)), (i.sig.s = (0, o.fixLen)(i.sig.s, 32)), n.encodingType === s.Constants.SIGNING.ENCODINGS.EVM)
                                            ) {
                                                var c = (0, o.getV)(n.origPayloadBuf, i);
                                                i.sig.v = c.toArrayLike(t);
                                            }
                                        } else {
                                            if (n.curveType !== s.Constants.SIGNING.CURVES.ED25519) throw new Error("Unsupported curve.");
                                            n.omitPubkey || ((i.pubkey = t.alloc(32)), e.slice(r, r + 32).copy(i.pubkey)), (r += 32), (i.sig = { r: e.slice(r, r + 32), s: e.slice(r + 32, r + 64) });
                                        }
                                        return i;
                                    };
                                    r.getEncodedPayload = function (e, r, n) {
                                        if ((r || (r = s.Constants.SIGNING.ENCODINGS.NONE), !(0, o.existsIn)(r, n))) throw new Error("Encoding not supported by Lattice firmware. You may want to update.");
                                        return { payloadBuf: "string" == typeof e && "0x" === e.slice(0, 2) ? t.from(e.slice(2), "hex") : t.from(e), encoding: r };
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4300,
            { "./calldata/index": 4286, "./client": 4287, "./constants": 4288, "./util": 4306 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.Utils = r.Constants = r.Client = r.Calldata = void 0);
                            var n = e("./calldata/index");
                            Object.defineProperty(r, "Calldata", {
                                enumerable: !0,
                                get: function () {
                                    return n.CALLDATA;
                                },
                            });
                            var i = e("./client");
                            Object.defineProperty(r, "Client", {
                                enumerable: !0,
                                get: function () {
                                    return i.Client;
                                },
                            });
                            var a = e("./constants");
                            Object.defineProperty(r, "Constants", {
                                enumerable: !0,
                                get: function () {
                                    return a.EXTERNAL;
                                },
                            });
                            var s = e("./util");
                            Object.defineProperty(r, "Utils", {
                                enumerable: !0,
                                get: function () {
                                    return s.EXTERNAL;
                                },
                            });
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4301,
            { "../constants": 4288 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            var n,
                                i =
                                    (this && this.__extends) ||
                                    ((n = function (e, t) {
                                        return (
                                            (n =
                                                Object.setPrototypeOf ||
                                                ({ __proto__: [] } instanceof Array &&
                                                    function (e, t) {
                                                        e.__proto__ = t;
                                                    }) ||
                                                function (e, t) {
                                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                                }),
                                            n(e, t)
                                        );
                                    }),
                                    function (e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                                        function r() {
                                            this.constructor = e;
                                        }
                                        n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                                    });
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.LatticeResponseError = void 0);
                            var a = e("../constants"),
                                s = (function (e) {
                                    function t(t, r) {
                                        var n = this,
                                            i = (function (e) {
                                                var t = e.responseCode,
                                                    r = e.errorMessage,
                                                    n = [];
                                                return t && n.push("".concat(a.responseMsgs[t])), r && (n.push("Error Message: "), n.push(r)), n.join("\n");
                                            })({ responseCode: t, errorMessage: r });
                                        return ((n = e.call(this, i) || this).responseCode = t), (n.errorMessage = r), (n.name = "LatticeResponseError"), (n.responseCode = t), (n.errorMessage = r), n;
                                    }
                                    return i(t, e), t;
                                })(Error);
                            r.LatticeResponseError = s;
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4302,
            { "../bitcoin": 4284, "../constants": 4288, "../ethereum": 4289, "../genericSigning": 4299, "../util": 4306, "./errors": 4301, "./predicates": 4303, "./validators": 4305, buffer: 1728, "hash.js/lib/hash/sha": 4433 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (t) {
                                (function () {
                                    var n =
                                            (this && this.__assign) ||
                                            function () {
                                                return (
                                                    (n =
                                                        Object.assign ||
                                                        function (e) {
                                                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                                            return e;
                                                        }),
                                                    n.apply(this, arguments)
                                                );
                                            },
                                        i =
                                            (this && this.__awaiter) ||
                                            function (e, t, r, n) {
                                                return new (r || (r = Promise))(function (i, a) {
                                                    function s(e) {
                                                        try {
                                                            c(n.next(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function o(e) {
                                                        try {
                                                            c(n.throw(e));
                                                        } catch (e) {
                                                            a(e);
                                                        }
                                                    }
                                                    function c(e) {
                                                        var t;
                                                        e.done
                                                            ? i(e.value)
                                                            : ((t = e.value),
                                                              t instanceof r
                                                                  ? t
                                                                  : new r(function (e) {
                                                                        e(t);
                                                                    })).then(s, o);
                                                    }
                                                    c((n = n.apply(e, t || [])).next());
                                                });
                                            },
                                        a =
                                            (this && this.__generator) ||
                                            function (e, t) {
                                                var r,
                                                    n,
                                                    i,
                                                    a,
                                                    s = {
                                                        label: 0,
                                                        sent: function () {
                                                            if (1 & i[0]) throw i[1];
                                                            return i[1];
                                                        },
                                                        trys: [],
                                                        ops: [],
                                                    };
                                                return (
                                                    (a = { next: o(0), throw: o(1), return: o(2) }),
                                                    "function" == typeof Symbol &&
                                                        (a[Symbol.iterator] = function () {
                                                            return this;
                                                        }),
                                                    a
                                                );
                                                function o(a) {
                                                    return function (o) {
                                                        return (function (a) {
                                                            if (r) throw new TypeError("Generator is already executing.");
                                                            for (; s; )
                                                                try {
                                                                    if (((r = 1), n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)) return i;
                                                                    switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                                                                        case 0:
                                                                        case 1:
                                                                            i = a;
                                                                            break;
                                                                        case 4:
                                                                            return s.label++, { value: a[1], done: !1 };
                                                                        case 5:
                                                                            s.label++, (n = a[1]), (a = [0]);
                                                                            continue;
                                                                        case 7:
                                                                            (a = s.ops.pop()), s.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                                                                                s = 0;
                                                                                continue;
                                                                            }
                                                                            if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                                                                                s.label = a[1];
                                                                                break;
                                                                            }
                                                                            if (6 === a[0] && s.label < i[1]) {
                                                                                (s.label = i[1]), (i = a);
                                                                                break;
                                                                            }
                                                                            if (i && s.label < i[2]) {
                                                                                (s.label = i[2]), s.ops.push(a);
                                                                                break;
                                                                            }
                                                                            i[2] && s.ops.pop(), s.trys.pop();
                                                                            continue;
                                                                    }
                                                                    a = t.call(e, s);
                                                                } catch (e) {
                                                                    (a = [6, e]), (n = 0);
                                                                } finally {
                                                                    r = i = 0;
                                                                }
                                                            if (5 & a[0]) throw a[1];
                                                            return { value: a[0] ? a[1] : void 0, done: !0 };
                                                        })([a, o]);
                                                    };
                                                }
                                            },
                                        s =
                                            (this && this.__importDefault) ||
                                            function (e) {
                                                return e && e.__esModule ? e : { default: e };
                                            };
                                    Object.defineProperty(r, "__esModule", { value: !0 }),
                                        (r.getEphemeralId = r.decryptResponse = r.retryWrapper = r.buildRetryWrapper = r.request = r.buildTransaction = r.encryptRequest = r.buildRequest = void 0);
                                    var o = e("hash.js/lib/hash/sha"),
                                        c = s(e("../bitcoin")),
                                        u = e("../constants"),
                                        l = s(e("../ethereum")),
                                        h = e("../genericSigning"),
                                        d = e("../util"),
                                        f = e("./errors"),
                                        p = e("./predicates"),
                                        g = e("./validators");
                                    r.buildRequest = function (e, r) {
                                        var n = r && t.isBuffer(r) ? r.length + 1 : 1;
                                        e === u.deviceCodes.ENCRYPTED_REQUEST && (n = 1 + r.length);
                                        var i = 0,
                                            a = t.alloc(n + 8);
                                        (i = a.writeUInt8(u.VERSION_BYTE, i)), (i = a.writeUInt8(u.REQUEST_TYPE_BYTE, i));
                                        var s = (0, d.randomBytes)(4);
                                        (i = a.writeUInt32BE(parseInt("0x".concat(s.toString("hex"))), i)), (i = a.writeUInt16BE(n, i)), (i = a.writeUInt8(e, i)), n > 1 && (i = r.copy(a, i));
                                        var o = (0, d.checksum)(a),
                                            c = t.alloc(a.length + 4);
                                        return (i = a.copy(c)), c.writeUInt32BE(o, i), c;
                                    };
                                    r.encryptRequest = function (e) {
                                        var n = e.payload,
                                            i = e.requestCode,
                                            a = e.sharedSecret,
                                            s = (0, r.getEphemeralId)(a),
                                            o = u.encReqCodes[i],
                                            c = t.concat([t.from([o]), n]),
                                            l = (0, d.checksum)(c),
                                            h = t.alloc(c.length + 4);
                                        c.copy(h, 0), h.writeUInt32LE(l, c.length);
                                        var f = (0, d.aes256_encrypt)(h, a),
                                            p = t.alloc(u.ENC_MSG_LEN + 4);
                                        return p.writeUInt32LE(s, 0), f.copy(p, 4), (0, r.buildRequest)(u.deviceCodes.ENCRYPTED_REQUEST, p);
                                    };
                                    r.buildTransaction = function (e) {
                                        var t = e.data,
                                            r = e.currency,
                                            i = e.fwConstants;
                                        if ("ETH" === r && (0, p.shouldUseEVMLegacyConverter)(i)) {
                                            console.log("Using the legacy ETH signing path. This will soon be deprecated. " + "Please switch to general signing request.");
                                            var a = void 0;
                                            try {
                                                a = l.default.ethConvertLegacyToGenericReq(t);
                                            } catch (e) {
                                                throw new Error("Could not convert legacy request. Please switch to a general signing " + "request. See gridplus-sdk docs for more information.");
                                            }
                                            return (
                                                (t = {
                                                    fwConstants: i,
                                                    encodingType: u.EXTERNAL.SIGNING.ENCODINGS.EVM,
                                                    curveType: u.EXTERNAL.SIGNING.CURVES.SECP256K1,
                                                    hashType: u.EXTERNAL.SIGNING.HASHES.KECCAK256,
                                                    signerPath: t.signerPath,
                                                    payload: a,
                                                }),
                                                { request: (0, h.buildGenericSigningMsgRequest)(n(n({}, t), { fwConstants: i })), isGeneric: !0 }
                                            );
                                        }
                                        return "ETH" === r
                                            ? { request: l.default.buildEthereumTxRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                                            : "ETH_MSG" === r
                                            ? { request: l.default.buildEthereumMsgRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                                            : "BTC" === r
                                            ? { request: c.default.buildBitcoinTxRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                                            : { request: (0, h.buildGenericSigningMsgRequest)(n(n({}, t), { fwConstants: i })), isGeneric: !0 };
                                    };
                                    r.request = function (e) {
                                        var t = e.url,
                                            r = e.payload,
                                            n = e.timeout,
                                            s = void 0 === n ? 6e4 : n;
                                        return i(void 0, void 0, void 0, function () {
                                            return a(this, function (e) {
                                                return [
                                                    2,
                                                    (0, d.fetchWithTimeout)(t, { method: "POST", body: JSON.stringify({ data: r }), headers: { "Content-Type": "application/json" }, timeout: s })
                                                        .catch(g.validateRequestError)
                                                        .then(function (e) {
                                                            return e.json();
                                                        })
                                                        .then(function (e) {
                                                            if (!e || !e.message) throw new Error("Invalid response");
                                                            if (200 !== e.status) throw new Error("Error code ".concat(e.status, ": ").concat(e.message));
                                                            var t = (0, d.parseLattice1Response)(e.message),
                                                                r = t.data,
                                                                n = t.errorMessage,
                                                                i = t.responseCode;
                                                            if (n || i) throw new f.LatticeResponseError(i, n);
                                                            return r;
                                                        }),
                                                ];
                                            });
                                        });
                                    };
                                    r.buildRetryWrapper = function (e, t) {
                                        return function (i, a) {
                                            return (0, r.retryWrapper)({ fn: i, params: n(n({}, a), { client: e }), retries: t, client: e });
                                        };
                                    };
                                    r.retryWrapper = function (e) {
                                        var t = e.fn,
                                            s = e.params,
                                            o = e.retries,
                                            c = e.client;
                                        return i(void 0, void 0, void 0, function () {
                                            return a(this, function (e) {
                                                return [
                                                    2,
                                                    t(n({}, s)).catch(function (e) {
                                                        return i(void 0, void 0, void 0, function () {
                                                            var n, i;
                                                            return a(this, function (a) {
                                                                switch (a.label) {
                                                                    case 0:
                                                                        return (
                                                                            (n = e.errorMessage),
                                                                            (i = e.responseCode),
                                                                            (n || i) && o
                                                                                ? (0, p.isDeviceBusy)(i)
                                                                                    ? [
                                                                                          4,
                                                                                          ((u = 3e3),
                                                                                          new Promise(function (e) {
                                                                                              return setTimeout(e, u);
                                                                                          })),
                                                                                      ]
                                                                                    : [3, 2]
                                                                                : [3, 8]
                                                                        );
                                                                    case 1:
                                                                    case 3:
                                                                    case 5:
                                                                        return a.sent(), [3, 7];
                                                                    case 2:
                                                                        return !(0, p.isWrongWallet)(i) || c.skipRetryOnWrongWallet ? [3, 4] : [4, c.fetchActiveWallet()];
                                                                    case 4:
                                                                        return (0, p.isInvalidEphemeralId)(i) ? [4, c.connect(c.deviceId)] : [3, 6];
                                                                    case 6:
                                                                    case 8:
                                                                        throw e;
                                                                    case 7:
                                                                        return [2, (0, r.retryWrapper)({ fn: t, params: s, retries: o - 1, client: c })];
                                                                }
                                                                var u;
                                                            });
                                                        });
                                                    }),
                                                ];
                                            });
                                        });
                                    };
                                    r.decryptResponse = function (e, t, r) {
                                        if (!e || e.length < t) return { decryptedData: null, newEphemeralPub: null };
                                        var n = e.slice(0, u.ENC_MSG_LEN),
                                            i = (0, d.aes256_decrypt)(n, r);
                                        (0, g.validateResponse)(i), (t += 65), (0, g.validateChecksum)(i, t);
                                        var a = i.slice(0, 65).toString("hex");
                                        return { decryptedData: i, newEphemeralPub: (0, d.getP256KeyPairFromPub)(a) };
                                    };
                                    r.getEphemeralId = function (e) {
                                        var r = t.from((0, o.sha256)().update(e).digest("hex"), "hex");
                                        return parseInt(r.slice(0, 4).toString("hex"), 16);
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4303,
            { "../constants": 4288, "./utilities": 4304 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            Object.defineProperty(r, "__esModule", { value: !0 }), (r.shouldUseEVMLegacyConverter = r.doesFetchWalletsOnLoad = r.isInvalidEphemeralId = r.isWrongWallet = r.isDeviceBusy = void 0);
                            var n = e("../constants"),
                                i = e("./utilities");
                            r.isDeviceBusy = function (e) {
                                return e === n.responseCodes.RESP_ERR_DEV_BUSY || e === n.responseCodes.RESP_ERR_GCE_TIMEOUT;
                            };
                            r.isWrongWallet = function (e) {
                                return e === n.responseCodes.RESP_ERR_WRONG_WALLET;
                            };
                            r.isInvalidEphemeralId = function (e) {
                                return e === n.responseCodes.RESP_ERR_INVALID_EPHEM_ID;
                            };
                            r.doesFetchWalletsOnLoad = function (e) {
                                return (0, i.isFWSupported)(e, { major: 0, minor: 14, fix: 1 });
                            };
                            r.shouldUseEVMLegacyConverter = function (e) {
                                return e.genericSigning && e.genericSigning.encodingTypes && e.genericSigning.encodingTypes.EVM;
                            };
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4304,
            { buffer: 1728 },
            function () {
                with (this)
                    return function () {
                        "use strict";
                        return function (e, t, r) {
                            (function (e) {
                                (function () {
                                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.isFWSupported = r.parseWallets = r.getSharedSecret = r.getPubKeyBytes = void 0);
                                    r.getPubKeyBytes = function (t, r) {
                                        void 0 === r && (r = !1);
                                        var n = t.getPublic().encode("hex"),
                                            i = e.from(n, "hex");
                                        if (!0 === r) {
                                            var a = i.slice(1, 33).reverse(),
                                                s = i.slice(33, 65).reverse();
                                            return e.concat([i[0], a, s]);
                                        }
                                        return i;
                                    };
                                    r.getSharedSecret = function (t, r) {
                                        return e.from(t.derive(r.getPublic()).toArray("be", 32));
                                    };
                                    r.parseWallets = function (e) {
                                        var t = 0,
                                            r = { internal: { uid: undefined, capabilities: undefined, name: undefined, external: !1 }, external: { uid: undefined, capabilities: undefined, name: undefined, external: !0 } };
                                        return (
                                            (r.internal.uid = e.slice(t, t + 32)),
                                            (r.internal.capabilities = e.readUInt32BE(t + 32)),
                                            (r.internal.name = e.slice(t + 36, t + 71)),
                                            (t += 71),
                                            (r.external.uid = e.slice(t, t + 32)),
                                            (r.external.capabilities = e.readUInt32BE(t + 32)),
                                            (r.external.name = e.slice(t + 36, t + 71)),
                                            r
                                        );
                                    };
                                    r.isFWSupported = function (e, t) {
                                        var r = e.major,
                                            n = e.minor,
                                            i = e.fix,
                                            a = t.major,
                                            s = t.minor,
                                            o = t.fix;
                                        return r > a || (r >= a && n > s) || (r >= a && n >= s && i >= o);
                                    };
                                }.call(this));
                            }.call(this, e("buffer").Buffer));
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
        [
            4305,
            { "../constants": 4288, "../util": 4306, "lodash/isEmpty": 4680 },
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
                            Object.defineProperty(r, "__esModule", { value: !0 }),
                                (r.isValid4ByteResponse = r.isValidBlockExplorerResponse = r.validateRequestLength = r.validateKvRecord = r.validateKvRecords = r.validateActiveWallets = r.validateKey = r.validateSharedSecret = r.validateEphemeralPub = r.validateWallet = r.validateRequestError = r.validateChecksum = r.validateFwVersion = r.validateFwConstants = r.validateBaseUrl = r.validateUrl = r.validateResponse = r.validateAppName = r.validateEncryptRequestCode = r.validateDeviceId = r.validateStartPath = r.validateNAddresses = r.validateIsUInt4 = r.validateValueExists = void 0);
                            var i = e("../constants"),
                                a = e("../util"),
                                s = n(e("lodash/isEmpty"));
                            r.validateValueExists = function (e) {
                                var t = Object.entries(e),
                                    r = t[0];
                                if (!t[1][1]) throw new Error("".concat(r, " must be provided"));
                            };
                            r.validateIsUInt4 = function (e) {
                                if ("number" != typeof e || !(0, a.isUInt4)(e)) throw new Error("Must be an integer between 0 and 15 inclusive");
                                return e;
                            };
                            r.validateNAddresses = function (e) {
                                if (e > i.MAX_ADDR) throw new Error("You may only request ".concat(i.MAX_ADDR, " addresses at once."));
                            };
                            r.validateStartPath = function (e) {
                                if (!e) throw new Error("Start path is required");
                                if (e.length < 2 || e.length > 5) throw new Error("Path must include between 2 and 5 indices");
                            };
                            r.validateDeviceId = function (e) {
                                if (!e) throw new Error("No device ID has been stored. Please connect with your device ID first.");
                                return e;
                            };
                            r.validateEncryptRequestCode = function (e) {
                                if (e && i.encReqCodes[e] === undefined) throw new Error("Unknown encrypted request code.");
                            };
                            r.validateAppName = function (e) {
                                if (!e) throw new Error("Name is required.");
                                if (e.length < 5 || e.length > 24) throw new Error("Invalid length for name provided. Must be 5-24 characters.");
                                return e;
                            };
                            r.validateResponse = function (e) {
                                if (!e) throw new Error("Error decrypting response");
                            };
                            r.validateUrl = function (e) {
                                if (!e) throw new Error("Url does not exist. Please reconnect.");
                                return e;
                            };
                            r.validateBaseUrl = function (e) {
                                if (!e) throw new Error("Base URL is required.");
                                return e;
                            };
                            r.validateFwConstants = function (e) {
                                if (!e) throw new Error("Firmware constants do not exist. Please reconnect.");
                                return e;
                            };
                            r.validateFwVersion = function (e) {
                                if (!e || e.byteLength > 4) throw new Error("Firmware version does not exist. Please reconnect.");
                                return e;
                            };
                            r.validateChecksum = function (e, t) {
                                var r = e.slice(0, t),
                                    n = parseInt("0x".concat(e.slice(t, t + 4).toString("hex"))),
                                    i = (0, a.checksum)(r);
                                if (n !== i) throw new Error("Checksum mismatch in response from Lattice (calculated ".concat(i, ", wanted ").concat(n, ")"));
                            };
                            r.validateRequestError = function (e) {
                                if ("ECONNABORTED" === e.code && "ETIME" === e.errno) throw new Error("Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.");
                                throw new Error("Failed to make request to device:\n".concat(e.message));
                            };
                            r.validateWallet = function (e) {
                                if (!e || null === e) throw new Error("No active wallet.");
                                return e;
                            };
                            r.validateEphemeralPub = function (e) {
                                if (!e) throw new Error("`ephemeralPub` (ephemeral public key) is required. Please reconnect.");
                                return e;
                            };
                            r.validateSharedSecret = function (e) {
                                if (!e) throw new Error("Shared secret required. Please reconnect.");
                                return e;
                            };
                            r.validateKey = function (e) {
                                if (!e) throw new Error("Key is required. Please reconnect.");
                                return e;
                            };
                            r.validateActiveWallets = function (e) {
                                var t, r, n, a;
                                if (
                                    !e ||
                                    ((null === (r = null === (t = null == e ? void 0 : e.internal) || void 0 === t ? void 0 : t.uid) || void 0 === r ? void 0 : r.equals(i.EMPTY_WALLET_UID)) &&
                                        (null === (a = null === (n = null == e ? void 0 : e.external) || void 0 === n ? void 0 : n.uid) || void 0 === a ? void 0 : a.equals(i.EMPTY_WALLET_UID)))
                                )
                                    throw new Error("No active wallet.");
                                return e;
                            };
                            r.validateKvRecords = function (e, t) {
                                if (!t || !t.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                                if ("object" != typeof e || Object.keys(e).length < 1) throw new Error("One or more key-value mapping must be provided in `records` param.");
                                if (Object.keys(e).length > t.kvActionMaxNum) throw new Error("Too many keys provided. Please only provide up to ".concat(t.kvActionMaxNum, "."));
                                return e;
                            };
                            r.validateKvRecord = function (e, t) {
                                var r = e.key,
                                    n = e.val;
                                if ("string" != typeof r || String(r).length > t.kvKeyMaxStrSz) throw new Error("Key ".concat(r, " too large. Must be <=").concat(t.kvKeyMaxStrSz, " characters."));
                                if ("string" != typeof n || String(n).length > t.kvValMaxStrSz) throw new Error("Value ".concat(n, " too large. Must be <=").concat(t.kvValMaxStrSz, " characters."));
                                if (0 === String(r).length || 0 === String(n).length) throw new Error("Keys and values must be >0 characters.");
                                if (!i.ASCII_REGEX.test(r) || !i.ASCII_REGEX.test(n)) throw new Error("Unicode characters are not supported.");
                                return { key: r, val: n };
                            };
                            r.validateRequestLength = function (e, t) {
                                if (e.payload.length > t.reqMaxDataSz) throw new Error("Transaction is too large");
                            };
                            r.isValidBlockExplorerResponse = function (e) {
                                try {
                                    var t = JSON.parse(e.result);
                                    return !(0, s.default)(t);
                                } catch (e) {
                                    return !1;
                                }
                            };
                            r.isValid4ByteResponse = function (e) {
                                try {
                                    return !(0, s.default)(e.results);
                                } catch (e) {
                                    return !1;
                                }
                            };
                        };
                    };
            },
            { package: "eth-lattice-keyring>gridplus-sdk" },
        ],
    ],
    [],
    {}
);
