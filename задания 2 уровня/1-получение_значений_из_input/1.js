(function () {
    function Rb(aa) { var Ja = 0; return function () { return Ja < aa.length ? { done: !1, value: aa[Ja++] } : { done: !0 } } } var hc = "function" == typeof Object.defineProperties ? Object.defineProperty : function (aa, Ja, pb) { aa != Array.prototype && aa != Object.prototype && (aa[Ja] = pb.value) };
    function oe(aa) { aa = ["object" == typeof globalThis && globalThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, aa]; for (var Ja = 0; Ja < aa.length; ++Ja) { var pb = aa[Ja]; if (pb && pb.Math == Math) return pb } throw Error("Cannot find global object"); } var ag = oe(this); function bg() { bg = function () { }; ag.Symbol || (ag.Symbol = Oj) } function Pj(aa, Ja) { this.ii = aa; hc(this, "description", { configurable: !0, writable: !0, value: Ja }) } Pj.prototype.toString = function () { return this.ii };
    var Oj = function () { function aa(pb) { if (this instanceof aa) throw new TypeError("Symbol is not a constructor"); return new Pj("jscomp_symbol_" + (pb || "") + "_" + Ja++, pb) } var Ja = 0; return aa }(); function Qj() { bg(); var aa = ag.Symbol.iterator; aa || (aa = ag.Symbol.iterator = ag.Symbol("Symbol.iterator")); "function" != typeof Array.prototype[aa] && hc(Array.prototype, aa, { configurable: !0, writable: !0, value: function () { return Rj(Rb(this)) } }); Qj = function () { } }
    function Rj(aa) { Qj(); aa = { next: aa }; aa[ag.Symbol.iterator] = function () { return this }; return aa }
    try {
        (function (aa) {
            function Ja(a, c) { if (!c) return !1; var b = R(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function pb(a, c) { return Ga(a, c, function (b) { b = w(b, "settings.dr"); return Sj(a, b) }) } function Tj(a, c) {
                function b() { var r = p + "0", t = p + "1"; k[r] ? k[t] ? (p = p.slice(0, -1), --m) : (g[t] = e(8), k[t] = 1) : (g[r] = e(8), k[r] = 1) } function d() { var r = p + "1"; k[p + "0"] ? k[r] ? (p = p.slice(0, -1), --m) : (p += "1", k[p] = 1) : (p += "0", k[p] = 1) } function e(r) { void 0 === r && (r = 1); var t = f.slice(m, m + r); m += r; return t } for (var f = cg(a, c, ""),
                    g = {}, k = {}, m = 1, p = ""; m < f.length - 1;)("0" === e() ? d : b)(); return g
            } function Uj(a, c, b, d, e) { b = pe(a, a.document.body, b); d = pe(a, a.document.body, d); J(e.target, [b, d]) && qe(a, c) } function dg(a, c, b, d) { (b = Vj(a, d, b)) && qe(a, c, b) } function eg(a, c) { var b = fg(a, c); return Wj(a, b) } function fg(a, c) { var b = pe(a, a.document.body, c); return b ? Xj(a, b) : "" } function qe(a, c, b) { (c = La(a, c)) && c.params(Bc(["__ym", "dr", b || x(gg, hg)(a)])) } function pe(a, c, b) { var d = null; try { d = b ? ic(a, c, b) : d } catch (e) { } return d } function cg(a, c, b) {
                try {
                    var d = ha(a.atob(c));
                    return B(function (e) { e = e.charCodeAt(0).toString(2); return ig("0", 8 - e.length) + e }, d).join(b)
                } catch (e) { return "" }
            } function gg(a) { return Ya(a, 10, 99) } function Xj(a, c) { if (!c) return ""; var b = [], d = w(a, "document"); re(a, c, function (e) { e.nodeType === d.TEXT_NODE && e.textContent ? b.push(e.textContent.trim()) : e instanceof HTMLImageElement && e.alt && b.push(e.alt.trim()) }); return 0 === b.length ? "" : b.join(" ") } function Yj(a, c, b, d) {
                d = w(d, "target"); (d = Bb("button,input", a, d)) && "submit" === d.type && (d = jg(a, d)) && (b.push(d), Z(a, M([!1,
                    a, c, b, d], kg), 300))
            } function kg(a, c, b, d, e) { var f = tb(c)(e, d), g = -1 !== f; if (a || g) g && d.splice(f, 1), a = lg(c, e), a = "?" + Cc(a), d = M([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], mg), se(c, b, "form", d)(a) } function mg(a, c, b) { return Zj(a, c).then(function (d) { d && Cb(a, c, b)() }) } function ak(a) { a = bk(a); return ea(a) ? H("x", a) : a } function ck(a) { return H("x", dk(a) || []) } function dk(a) { var c = w(a, "speechSynthesis.getVoices"); if (!c) return ""; a = D(c, a.speechSynthesis); return Sb(function (b) { return B(A(b, w), ek) }, a()) } function fk(a) {
                if (a =
                    gk(a)) try { for (var c = [], b = 0; b < ng.length; b += 1) { var d = a(ng[b]); c.push(d) } var e = c } catch (f) { e = [] } else e = []; return e ? H("x", e) : ""
            } function hk(a) { var c = ik(a); return c ? H("x", B(function (b) { b = c[b]; return H("x", B(x(N, fa("concat", ""), A(b, w)), ["matches", "media"])) }, qa(c))) : "" } function jk(a, c) {
                var b = c.gj; if (!kk(a, b)) return ""; var d = []; var e = lk(a, b); if (null != e) try { var f = e.toDataURL() } catch (n) { f = "" } else f = ""; (e = f) && d.push(e); var g = b.getContextAttributes(); try {
                    var k = ma(b.getSupportedExtensions, "getSupportedExtensions") ?
                        b.getSupportedExtensions() || [] : []
                } catch (n) { k = [] } k = H(";", k); e = te(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); f = te(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); var m = b.getParameter(b.ALPHA_BITS); g = g && g.antialias ? "yes" : "no"; var p = b.getParameter(b.BLUE_BITS), r = b.getParameter(b.DEPTH_BITS), t = b.getParameter(b.GREEN_BITS), v = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (v) {
                    var q = b.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === q && (q = 2)
                } q = {
                    $l: k, "webgl aliased line width range": e, "webgl aliased point size range": f, "webgl alpha bits": m, "webgl antialiasing": g, "webgl blue bits": p, "webgl depth bits": r, "webgl green bits": t, "webgl max anisotropy": v ? q : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS), "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": te(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS), "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
                }; ue(d, q, ": "); a: { try { var l = b.getExtension("WEBGL_debug_renderer_info"); if (l) { var h = { "webgl unmasked vendor": b.getParameter(l.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(l.UNMASKED_RENDERER_WEBGL) }; break a } } catch (n) { } h = {} } ue(d, h);
                if (!b.getShaderPrecisionFormat) return H("~", d); ue(d, mk(b)); return H("~", d)
            } function ue(a, c, b) { void 0 === b && (b = ":"); E(function (d) { return a.push("" + d[0] + b + d[1]) }, Ha(c)) } function nk(a) { var c = ok(a); return c ? K(function (b, d, e) { d = "" + (e + 1); var f = c.supportsVersion; return V(f) ? f.call(c, e + 1) ? b + d : b + "0" : b }, "", pk(19)) + c.canMakePayments() : "" } function ok(a) { var c = w(a, "ApplePaySession"), b = R(a).protocol; return !c || "https:" !== b || ub(a) ? "" : c } function qk(a, c) {
                var b = Ma(a), d = "wv2rf:" + X(c), e = c.hc, f = ve(a), g = b.o(d), k = c.ml; return S(f) ||
                    Za(g) ? na(function (m, p) { Ga(a, c, function (r) { var t = w(r, "settings.webvisor.forms"); f = ve(a) || w(r, "settings.eu"); b.C(d, og(t)); p({ hc: e, Zg: !!f, uh: !!t, Uh: k }) }) }) : kd({ hc: e, Zg: f, uh: !!parseInt(g, 10), Uh: k })
            } function rk() {
                var a = K(function (c, b) { c[b[0]] = { fe: 0, dj: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442],
                ["touchstart", .027], ["zoom", .0014]]); return { $i: function (c) { if (c.length) return { type: "activity", data: K(function (b, d) { var e = a[d]; return Math.round(b + e.fe * e.dj) }, 0, qa(a)) } }, Dk: function (c) { c && (c = a[c.data.type]) && (c.fe += 1) } }
            } function sk(a, c, b, d) {
                function e() { p || (p = !0, pg(a, r, function (v) { f(v[0], v[1]) }, 20, 200, "s.w2.sf.ms"), r = []) } function f(v, q) { k(v, c, q)["catch"](C(a, "s.w2.p")) } function g() {
                    var v = !1; return K(function (q, l, h) {
                        t = we(function (n, u) { return n[2].partNum - u[2].partNum }, t); l = l[2]; v = v || l.end; return q &&
                            h + 1 === l.partNum
                    }, !0, t) && v
                } void 0 === d && (d = jc); var k = ra(a, "W", c), m = !1, p = !1, r = [], t = []; Z(a, e, 5E3); return function (v, q, l, h) {
                    q = { M: d(l), Y: wa(), oa: q, Yg: b }; if ("m" === v) if (q.Y.C("bt", 1), m) f(q, h); else {
                        var n = K(function (O, y) { var L = "page" === y.type && !y.ca, T = "eof" === y.data.type, Db = L && !!y.partNum; return { me: O.me || Db, le: O.le || L, ke: O.ke || T } }, { le: !1, ke: !1, me: !1 }, l); v = n.le; var u = n.ke; n = n.me; v && (n ? (t.push([q, h, l[0]]), g() && (E(function (O) { return f(O[0], O[1]) }, t), m = !0, t = [])) : (m = !0, f(q, h))); p ? v || f(q, h) : (v || r.push([q, h]), (m ||
                            u) && e())
                    } else f(q, h)
                }
            } function tk(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page": var c = a.data, b = c.Fa, d = c.Yb, e = c.content; delete c.Fa; delete c.Yb; delete c.content; c = { type: "page", data: { ca: a.ca || 0, content: e, Fa: b, Yb: d, ga: c } }; a.$ && (c.$ = a.$); return c; case "event": a: {
                        c = { type: "event", $: a.$, data: { ca: a.ca, type: a.event, ga: {} } }; b = F({}, a.data); switch (a.event) {
                            case "zoom": c.data.ga = { Wd: { x: 0, y: 0, level: 0 }, Xd: b, duration: 1 }; break; case "keystroke": c.data.ga = b.Za; break; case "deviceRotation": case "resize": c.data.ga =
                                b; break; case "windowfocus": case "windowblur": case "focus": c.data.target = b.target; c.data.ga = null; break; case "touchmove": case "touchstart": case "touchend": case "touchcancel": case "touchforcechange": case "scroll": case "change": case "click": case "mousemove": case "mousedown": case "mouseup": case "selection": case "stylechange": c.data.target = b.target; delete b.target; c.data.ga = b; break; case "srcset": a = { type: "mutation", $: a.$, data: { ca: a.ca, ga: { qa: [{ Sa: [{ id: b.target, za: { src: { hb: "", n: b.value, r: !1 } }, ra: 0 }] }], index: 0 } } };
                                break a
                        }a = c
                    } break; case "mutation": return uk(a)
                }return a
            } function uk(a) {
                var c = F({}, a.data), b = []; switch (a.event) {
                    case "tc": b = [{ d: [{ id: c.target, bb: { hb: "", n: c.value }, ra: c.index }] }]; break; case "ac": b = [{ Sa: [{ id: c.target, za: K(function (d, e) { var f = e[1]; d[e[0]] = { hb: "", n: f, r: sa(f) }; return d }, {}, Ha(c.attributes)), ra: c.index }] }]; break; case "re": b = [{ qb: B(function (d) { return { id: d, ra: c.index } }, c.gb) }]; break; case "ad": b = [{
                        sb: B(function (d) {
                            return {
                                id: d.id, ud: d.name, xd: d.hh, xb: d.parent, yb: d.wc, vb: d.next, za: d.attributes,
                                ra: c.index, bb: d.content, Va: d.hidden
                            }
                        }, c.gb)
                    }]
                }return { type: "mutation", $: a.$, data: { ca: a.ca, ga: { qa: b, index: c.index } } }
            } function vk(a) {
                return {
                    Kj: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, Mj: function () { if (a.document.doctype) { var c = F({ name: "html", publicId: "", systemId: "" }, a.document.doctype), b = c.publicId, d = c.systemId; return "<!DOCTYPE " + H("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">" } return null }, Wj: function () {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"), b = !1; try { var d = a.opener ? a.opener.sessionStorage : null; b = !!d && c === d.getItem("__vw_tab_guid") } catch (e) { b = !0 } if (!c || b) c = qg(), a.sessionStorage.setItem("__vw_tab_guid", c); return c
                        } catch (e) { return null }
                    }
                }
            } function wk(a, c, b) {
                var d = Dc(a), e = ia(a), f = ub(a), g = c.He(), k = !w(a, "postMessage") || f && !w(a, "parent.postMessage"), m = A(d, N); if (k) { if (!g) return Z(a, D(d.ea, d, "i", { Ka: !1 }), 10), { Ge: m, Fh: I, stop: I }; vb(hb()) } d.D("sr", function (q) {
                    var l, h = rg(a, q.source); h && xe(a, q.source,
                        (l = {}, l.type = "\u043d", l.frameId = c.Ia().ma(h), l))
                }); d.D("sd", function (q) { var l = q.data; q = q.source; (a === q || rg(a, q)) && d.ea("sdr", { data: l.data, ca: l.frameId }) }); if (f && !g) {
                    var p = !1, r = 0, t = function () { var q; xe(a, a.parent, (q = {}, q.type = "sr", q)); r = Z(a, t, 100, "if.i") }; t(); var v = function (q) { d.wa("\u043d", v); oa(a, r); var l = Eb(a, q.origin).host; p || q.source !== a.parent || !q.data.frameId || "about:blank" !== R(a).host && !J(l, b) || (p = !0, d.ea("i", { ca: q.data.frameId, Ka: !0 })) }; d.D("\u043d", v); Z(a, function () {
                        d.wa("\u043d", v); oa(a,
                            r); p || (p = !0, d.ea("i", { Ka: !1 }))
                    }, 2E3, "if.r")
                } e = e.D(a, ["message"], function (q) { var l = ib(a, q.data); l && l.type && J(l.type, xk) && d.ea(l.type, { data: l, source: q.source, origin: q.origin }) }); return { Ge: m, Fh: function (q) { var l; return xe(a, a.parent, (l = {}, l.frameId = c.He(), l.data = q, l.type = "sd", l)) }, stop: e }
            } function rg(a, c) { try { return Ta(x(W("contentWindow"), ta(c)), ha(a.document.querySelectorAll("iframe"))) } catch (b) { return null } } function xe(a, c, b) { a = cb(a, b); c.postMessage(a, "*") } function qg() {
                return Fb() + Fb() + "-" + Fb() +
                    "-" + Fb() + "-" + Fb() + "-" + Fb() + Fb() + Fb()
            } function Fb() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } function yk(a, c) { if (Oa(c)) return c; var b = a.textContent; if (Oa(b)) return b; b = a.data; if (Oa(b)) return b; b = a.nodeValue; return Oa(b) ? b : "" } function zk(a, c, b, d, e) {
                void 0 === d && (d = {}); void 0 === e && (e = za(c)); var f = F(K(function (g, k) { g[k.name] = k.value; return g }, {}, ha(c.attributes)), d); F(f, Ak(c, e, f)); if (d = K(function (g, k) {
                    var m = k[0], p = ld(a, c, m, k[1], b, e), r = p.value; sa(r) ? delete f[m] : f[m] = r; return g ||
                        p.Ue
                }, !1, Ha(f)) && Ec(c)) f.width = d.width, f.height = d.height; return f
            } function Ak(a, c, b) { var d = {}; md(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function ld(a, c, b, d, e, f) {
                void 0 === f && (f = za(c)); var g = { Ue: !1, value: d }; if (md(c)) "value" === b ? !sa(d) && "" !== d && (b = e.Zg, e = e.uh, f = Fc(a, c), (e ? kc(a, c, b) : !nd(c)) || f) && (g.Ue = f, g.value = H("", B(A("\u2022", N), ("" + d).split("")))) : "checked" === b && J((c.getAttribute("type") || "").toLowerCase(), Bk) && (g.value = c.checked ? "checked" : null); else if ("IMG" === f && "src" ===
                    b) (f = Fc(a, c)) ? (g.Ue = f, g.value = Ck) : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : ""; else if (J(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === sg(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && J(b, ["src", "type"])) g.value = null; return g
            } function ye(a, c, b, d) { void 0 === d && (d = "wv2"); return { N: function (e, f) { return C(a, d + "." + b + "." + f, e, void 0, c) } } } function Dk(a, c) {
                var b = a.document; if (J(b.readyState, ["interactive", "complete"])) Gb(a, c);
                else { var d = ia(a), e = d.D, f = d.Fc, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) }
            } function Ek(a, c) { var b = Fk(a), d = ra(a, "r", c), e = C(a, "rts.p"); return Ga(a, c, D(K, null, function (f, g) { var k = { id: g.mj, sa: g.sa }; k = d({ oa: g.Kk, Y: wa(g.cj), M: g.ia, Ac: g.Ac }, k, g.Qk)["catch"](e); return f.then(A(k, N)) }, Q.resolve(""), b))["catch"](e) } function tg(a, c, b) {
                c = Tb(a, void 0, c); c = ug(a, c.o("phc_settings") || ""); var d = w(c, "clientId"), e = w(c, "orderId"), f = w(c, "service_id"), g = w(c,
                    "phones") || []; return d && e && g ? Gk(a, b.xg, { Sh: Hk }).zc(g).then(function (k) { return Ik(b, { jc: d, uc: e, Kh: f }, k.Ca, g, k.Ma) })["catch"](function () { }) : Q.resolve()
            } function Hk(a, c, b) { a = Jk(b.Gd); if ("href" === b.Af) { var d = b.Ub; c = d.href; b = c.replace(a, b.Bb); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.Ub.textContent) || void 0 === d ? void 0 : d.replace(a, b.Bb)) && a !== b.Ub.textContent) return b.Ub.textContent = a, !0; return !1 } function Ik(a, c, b, d, e) {
                var f; c.jc && c.uc && (c.jc === a.jc && c.uc === a.uc || F(a, c, { Ca: {}, Nb: !0 }), 0 < e && Ua(a.Ma,
                    [e]), E(function (g) { var k, m, p = g[0]; g = g[1]; var r = +(a.Ca[p] && a.Ca[p][g] ? a.Ca[p][g] : 0); F(a.Ca, (k = {}, k[p] = (m = {}, m[g] = r, m), k)) }, d), E(function (g) { var k, m, p = g[0]; g = g[1]; var r = 1 + (a.Ca[p] ? a.Ca[p][g] : 0); F(a.Ca, (k = {}, k[p] = (m = {}, m[g] = r, m), k)) }, b), a.$g && (a.Nb || b.length) && ((c = La(a.b, a.xg)) && c.params("__ym", "phc", (f = {}, f.clientId = a.jc, f.orderId = a.uc, f.service_id = a.Kh, f.phones = a.Ca, f.performance = a.Ma, f)), a.Nb = !1))
            } function Kk(a, c) { return ia(a).D(a, ["load"], D(ze, null, a, c, !0)) } function ze(a, c, b) {
                void 0 === b && (b = !1);
                c = Tb(a, void 0, c); c = ib(a, decodeURIComponent(c.o("mp2_substs") || "")); a = vg(a); return c && 0 < c.length && a.zc(c, b)
            } function Lk(a, c, b) { if ("adv" === b.type) return Mk(a, b, c); var d = a.document.referrer; return Eb(a, d || "").host === R(a).host ? !1 : Ca(function (e) { return (e = d.match(new RegExp(e, "i"))) && Nk(b.params || [], e[1]) }, b.patterns || []) } function Nk(a, c) { if (!a.length) return !0; var b = x(function (d) { return (d || "").replace(/\+/g, "%20") }, od)(c); b = ta(b); return Ca(x(od, b), a) } function Mk(a, c, b) {
                function d(r) {
                    return $a(new RegExp(r,
                        "i"))
                } var e = Eb(a, R(a).href), f = e.query, g = e.hash; a = a.document.referrer; e = Ae(f || ""); f = Ok(f || "", g || ""); g = Pk(e); var k = (b = b.sj) ? c.direct_orders : c.direct_camp, m = c.ServiceNamePattern, p = c.RefererPattern; m = Ca(x(d, na(b && "direct.yandex.ru" || f.service || g.source)), m || []); c.yandex_direct || (m = m || Ca(d(a), p || [])); return (m = m || c.google_adwords && e.gclid) && k && k.length ? Ca(x(hg, ta("" + (b || f.campaign || g.campaign))), k) : m
            } function Ok(a, c) {
                var b = ["service", "campaign", "ad", "source"], d = Ae(a)._openstat || ""; d || (d = Ta(x(Ae, W("_openstat"),
                    Boolean), c.replace("#", "").split("?") || []) || ""); var e = ""; return (e = -1 === d.indexOf(";") ? x(Be, wg, function (f) { return f ? xg(f) : f || "" })(d || "") : od(d)) ? K(function (f, g, k) { f[b[k]] = g; return f }, {}, e.split(";")) : {}
            } function Pk(a) { return K(function (c, b) { a["utm_" + b] && (c[b] = a["utm_" + b]); return c }, {}, ["source", "medium", "campaign", "term", "content"]) } function Qk(a, c) { var b = c.substr(1), d = c[0], e = []; "#" === d ? (b = a.document.getElementById(b)) && e.push(b) : "." === d && (e = ha(a.document.getElementsByClassName(b))); return e } function Rk(a,
                c) { try { var b = c.origin } catch (e) { } if (b) { var d = Ca(x($a, na(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]); b = J(b.replace(/\/?$/, "/"), Sk); if (d || b) d = ib(a, c.data), "appendremote" === w(d, "action") && ("3" === w(d, "version") || b ? yg(a, c, d, !1) : zg(w(d, "resource") || "") && yg(a, c, d, !0)) } } function Tk(a, c) {
                    var b = db(a); if (b) {
                        b = b("div"); var d = Ub(a); if (d) {
                            b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                            var e = b.firstChild; e.onload = function () { Gc(e.contentWindow, { src: c }) }; a._ym__remoteIframeEl = e; d.appendChild(b); b.removeChild(e); var f = null; b.attachShadow ? f = b.attachShadow({ mode: "open" }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot()); f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                        }
                    }
                } function Ag(a, c, b) {
                    var d; c = Bg(a, c, { Sh: Uk, vk: (d = {}, d.href = !0, d) }); b = Y(Boolean, B(function (f) { return "*" === f ? f : Hc(f) }, b)); var e = B(x(N, fa("concat", [""]),
                        Vk("reverse"), Ka), b); b = wb(a); d = Cg(a, b, 1E3); c = D(c.zc, c, e, !1); d.D(c); Wk(a, b); Dg(a, b); c()
                } function Uk(a, c, b) { var d = db(a), e = b.Ub, f = b.Gd, g = e.parentNode, k = e.textContent; if ("text" === b.Af && k && d && g) { b = d("SPAN"); Eg(b); var m = k.split(""), p = k.replace(/\s/g, "").length; E(fa("appendChild", b), K(function (r, t) { var v = r.Lf, q = r.bi, l = d("SPAN"); l.innerHTML = t; var h = Xk.test(t); Eg(l); h && (l.style.opacity = "" + (p - q - 1) / p); v.push(l); return { Lf: v, bi: q + (h ? 1 : 0) } }, { Lf: [], bi: 0 }, m).Lf); Yk(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0 } return !1 }
            function Yk(a, c, b, d) { function e() { E(A(["style", "opacity", ""], Bc), ha(b.childNodes)); if (c) { var m = La(a, c); m && m.extLink("tel:" + d, {}) } g(); k() } var f = ia(a), g = I, k = I; g = f.D(b, ["mouseenter"], function (m) { m.target === b && (m = Z(a, e, 200, "ph.h.e"), (k || I)(), k = f.D(b, ["mouseleave"], M([a, m], oa))) }) } function Dg(a, c) { return pd(a).then(function () { var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); ua("MutationObserver", a.MutationObserver) && (new MutationObserver(c.ea)).observe(d, e) }) } function Wk(a,
                c) { return ia(a).D(a, ["load"], c.ea) } function Bg(a, c, b) { function d(m) { var p; return f(a, c, m) ? null === (p = k[m.Gd]) || void 0 === p ? void 0 : p.Sd : null } var e, f = b.Sh; b = b.vk; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, k; return { zc: function (m) { return new Q(function (p, r) { m && m.length || r(); k = Fg()(m); p(pd(a).then(function () { var t = da(a), v = t(ba), q = g.href ? Zk(a, k) : [], l = g.text ? Gg(a, k) : []; return { Ca: Y(ea, Y(Boolean, B(d, q.concat(l)))), Ma: t(ba) - v } })["catch"](function () { return { Ca: [], Ma: 0 } })) }) } } } function Zk(a, c) {
                    var b = a.document.body;
                    if (!b) return []; var d = Hg(c); return K(function (e, f) { var g = w(f, "href"), k = decodeURI(g || ""); if ("tel:" === k.slice(0, 4)) { var m = (d.exec(k) || [])[0], p = m ? Hc(m) : "", r = c[p]; S(r) || !p && "*" !== r.Sd[0] || (e.push({ Af: "href", Ub: f, Gd: p, Bb: Ig(m, c[p].Bb), al: g }), g = Hc(k.slice(4)), p = Fg()([p ? r.Sd : [g, ""]]), e.push.apply(e, Gg(a, p, f))) } return e }, [], ha(b.querySelectorAll("a")))
                } function Gg(a, c, b) {
                    void 0 === b && (b = a.document.body); if (!b) return []; var d = [], e = Hg(c); re(a, b, function (f) {
                        if (f !== b && "script" !== (w(f, "parentNode.nodeName") || "").toLowerCase()) {
                            var g =
                                Y(Boolean, e.exec(f.textContent || "") || []); E(function (k) { var m = Hc(k); S(c[m]) || d.push({ Af: "text", Ub: f, Gd: m, Bb: Ig(k, c[m].Bb), al: f.textContent || "" }) }, g)
                        }
                    }, function (f) { return e.test(f.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
                } function Fg() { return Vb(function (a, c) { var b = B(Hc, c), d = b[0]; b = b[1]; a[d] = { Bb: b, Sd: c }; var e = Jg(d); e !== d && (a[e] = { Bb: Jg(b), Sd: c }); return a }, {}) } function Ig(a, c) {
                    for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                        var k = d[g]; "0" <= k && "9" >= k ? (b.push(e[f]),
                            f += 1) : b.push(d[g])
                    } return H("", b) + c.slice(f + 1)
                } function Jg(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function Hg(a) { return new RegExp("(?:" + H("|", B(Kg, qa(a))) + ")") } function Lg(a, c, b, d) { if (c) { var e = []; c && (a.document.documentElement.contains(c) ? re(a, c, fa("push", e), d) : Ua(e, Mg(a, c, d))); E(b, e) } } function re(a, c, b, d, e) {
                    function f(g) { return V(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT } void 0 === e && (e = -1); if (V(b) && f(c) === a.NodeFilter.FILTER_ACCEPT &&
                        (b(c), !Ce(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: f } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
                } function Mg(a, c, b) { var d = [], e = x(N, fa("push", d)); V(b) ? (b = b(c), (sa(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) { c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) { var g = Mg(a, c[b]); E(e, g) } } return d } function pd(a, c) { function b(e) { w(c, d) ? e() : Z(a, A(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return new Q(b) } function $k(a,
                    c) { function b(e) { w(c, d) ? e() : Z(a, A(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return na(function (e, f) { b(f) }) } function lg(a, c, b) { return Ng(a, c, ["i", "n", "p"], void 0, b) } function al(a, c, b) { var d, e; var f = w(b, "ecommerce") || {}; var g = w(b, "event") || ""; f = (g = Og[g]) ? De(g, f, "items") : void 0; if (!f) a: { f = b; !ea(b) && qd(a, Hb(b)) && (f = Da(f)); if (ea(f) && (a = Og[f[1]], "event" === f[0] && a)) { f = De(a, f[2], "items"); break a } f = void 0 } (b = f || bl(b)) && c && c((d = {}, d.__ym = (e = {}, e.ecommerce = [b], e), d)) }
            function bl(a) { var c = w(a, "ecommerce") || {}; a = Y(Ib(cl), qa(c)); a = K(function (b, d) { b[d] = c[d]; return b }, {}, a); return qa(a).length ? a : void 0 } function dl(a, c, b) {
                var d = !1, e = ""; if (!lc(c)) return xb(b, "Ecommerce data should be an object"), d; var f = c.goods; switch (a) {
                    case "detail": case "add": case "remove": ea(f) && f.length ? (d = rd(function (g) { return lc(g) && (Oa(g.id) || qd(b, g.id) || Oa(g.name)) }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break; case "purchase": qd(b, c.id) || Oa(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }xb(b, e); return d
            } function De(a, c, b) { var d, e; if (c) { var f = c.purchase || c; c = qa(f); var g = f[b]; if (g) { var k = (d = {}, d[a] = (e = {}, e.products = B(el, g), e), d); 1 < c.length && (k[a].actionField = K(function (m, p) { if (p === b) return m; if ("currency" === p) return k.currencyCode = f.currency, m; m[Ee[p] || p] = f[p]; return m }, {}, c)); return k } } } function el(a) {
                var c = {}; E(function (b) {
                    var d = Ee[b] || b; -1 !== b.indexOf("item_category") ?
                        (d = Ee.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, qa(a)); return c
            } function fl(a, c) { var b = Pg(a), d = X(c), e = b[d]; e || (e = {}, b[d] = e); e.dk = !0; if (b = e.Lh) d = Qg(a), E(d, b) } function gl(a, c, b, d) { var e; if (a = La(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); J(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Ih((e = {}, e.type = "params", e.data = f, e))) } } function hl(a, c, b) {
                if (b && (b = Rg(a, b), b = Sg(a, b))) {
                    b = "?" + Cc(b); var d = Cb(a, c, "Button goal. Counter " + c.id +
                        ". Button: " + b + "."); se(a, c, "btn", d)(b)
                }
            } function il(a, c) { var b = Ma(a); if ("" !== b.o("cc")) return 0; var d = A("cc", b.C); d(0); var e = da(a), f = U(a); f = x(W(Pa({ Id: 1 }) + ".c"), mc(function (g) { d(g + "&" + e(jb)) }), A("cc", f.C)); ra(a, "6", c)({}).then(f)["catch"](x(mc(function () { var g = e(jb); b.C("cc", "&" + g) }), C(a, "cc"))) } function jl(a, c) { var b; a((b = {}, b.clickmap = S(c) ? !0 : c, b)) } function kl(a, c, b, d, e) {
                function f() { m && m.stop() } if (!c.Eb) return Q.resolve(I); var g = ra(a, "4", c), k = { M: { "wv-type": "0" }, Y: wa() }; b = new ll(a, b, function (p,
                    r, t) { if (g) { r = "wv-data=" + Tg(p, !0); for (var v = p.length, q = 0, l = 255, h = 255, n, u, O; v;) { n = 21 < v ? 21 : v; v -= n; do u = "string" === typeof p ? p.charCodeAt(q) : p[q], q += 1, 255 < u && (O = u >> 8, u &= 255, u ^= O), l += u, h += l; while (--n); l = (l & 255) + (l >> 8); h = (h & 255) + (h >> 8) } p = (l & 255) + (l >> 8) << 8 | (h & 255) + (h >> 8); g(F({}, k, { oa: r, M: { "wv-check": 65535 === p ? 0 : p, "wv-type": "0" } }), c, t)["catch"](C(a, "m.n.m.s")) } }); var m = ml(a, b, d, e); return Ga(a, c, function (p) { p && U(a).C("isEU", w(p, "settings.eu")); !Fe(a) && m && Ug(a, p) && m.start(); return f })
            } function Ug(a, c) {
                var b =
                    Wb(a), d = b.o("visorc"); J(d, ["w", "b"]) || (d = ""); Vg(a) && Wg(a, Ic, "visorc") && !nl.test(qb(a) || "") || (d = "b"); var e = w(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = U(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.C("visorc", d, 30); return "w" === d
            } function ml(a, c, b, d) {
                var e = a.document, f = [], g = ia(a), k = ":submit" + Math.random(), m = [], p = D(c.flush, c), r = Ea(function (q, l) { C(a, "hfv." + q, function () { try { var h = l.type } catch (n) { return } h = J(h, d); c.push(l, { type: q }); h && p() })() }), t = C(a, "sfv", function () {
                    if (!Ge(a)) {
                        var q = b(a),
                            l = ol(a); E(function (h) { f.push(g.D(h.target, [h.event], r(h.type))) }, q); E(function (h) { f.push(g.D(h.target, [h.event], C(a, "hff." + h.type + "." + h.event, function (n) { E(na({ b: a, Ea: n, flush: p }), h.ha) }))) }, l); m = Xg(a, "form", e); e.attachEvent && (q = Xg(a, "form *", e), E(function (h) { f.push(g.D(h, ["submit"], r("form"))) }, m), E(function (h) { He(h) && f.push(g.D(h, ["change"], r("formInput"))) }, q)); E(function (h) {
                                var n = h.submit; if (V(n) || "object" === typeof n && pl.test("" + n)) h[k] = n, h.submit = C(a, "fv", function () {
                                    var u = { target: h, type: "submit" };
                                    r("document")(u); return h[k]()
                                })
                            }, m)
                    }
                }), v = C(a, "ufv", function () { E(Ka, f); E(function (q) { q && (q.submit = q[k]) }, m); c.flush() }); return { start: t, stop: v }
            } function ql(a, c) { var b = Y(function (e) { return 0 < e.ha.length }, c), d = Yg({ target: a.document, type: "document" }); return B(x(N, d, rl(a)), b) } function Zg(a, c) { var b = a.b, d = [], e = c.form; if (!c[Na] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var k = f[g]; sd(k) && !k[Na] && Ua(d, Xb(b, k)) } } else Ua(d, Xb(b, c)); return d } function Ie(a) {
                if (Jc) {
                    Jc = !1; var c = kb(a.b), b = []; ab(a.b, b,
                        15) ? a = [] : (P(b, c), a = b); return a
                }
            } function $g(a) { if (!Jc) { Jc = !0; a = kb(a.b); var c = []; yb(c, 14); P(c, a); return c } } function sl(a, c, b) { var d = c[Na]; if (d) { a: { var e = kb(a), f = c[Na]; if (0 < f) { var g = []; c = Je(a, c); var k = Yb[f], m = c[0] + "x" + c[1], p = c[2] + "x" + c[3]; if (m !== k.H) { k.H = m; if (ab(a, g, 9)) { a = []; break a } P(g, e); P(g, f); P(g, c[0]); P(g, c[1]) } if (p !== k.size) { k.size = p; if (ab(a, g, 10)) { a = []; break a } P(g, e); P(g, f); P(g, c[2]); P(g, c[3]) } if (g.length) { a = g; break a } } a = [] } Ua(b, a) } return d } function kc(a, c, b) {
                void 0 === b && (b = !1); if ("button" ===
                    c.getAttribute("type")) return !1; var d = nd(c), e = td(c); a = ah(a, c) || b && e; return !d && a
            } function ah(a, c) { return bh(a, c) || Kc(a, c) ? !0 : Fc(a, c) } function td(a) { if (!a) return !1; var c = a.placeholder; a = Y(ch, [a.className, a.id, a.name]); return Ca($a(tl), a) || ch(c) && ul.test(c) } function ch(a) { return !!(a && 2 < a.length) } function md(a) { try { var c = za(a); if (J(c, Ke)) { if ("INPUT" === c) { var b = a.type; return !b || J(b.toLocaleLowerCase(), vl) } return !0 } } catch (d) { } return !1 } function dh(a, c) {
                return c && Zb("(ym-disable-submit|-metrika-noform)",
                    c)
            } function nd(a) { return a && Zb("ym-record-keys", a) } function wl(a, c) { return H("", B(function (b) { return a.isNaN(b) ? xl.test(b) ? (b = b.toUpperCase() === b ? yl : zl, String.fromCharCode(Ya(a, b[0], b[1]))) : b : "" + Ya(a, 0, 9) }, c.split(""))) } function Fc(a, c) {
                if (sa(c)) return !1; if (Ce(c)) { var b = c.parentNode; return (sa(b) ? 0 : 11 === b.nodeType) ? !1 : Fc(a, c.parentNode) } if (Al.test(c.className)) return !0; b = eh(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content *"); return d && (Bl.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ?
                    !1 : d
            } function Cl(a, c, b, d, e) { var f; c = { Y: wa(), M: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f) }; d(c, e)["catch"](C(a, "c.s.c")) } function Dl(a, c, b, d, e) {
                if (Lc(a, "ymDisabledClickmap") || Ge(a) || !c || !c.element) return !1; a = za(c.element); if (e && !e(c.element, a) || J(c.button, [2, 3]) && "A" !== a || Ca(ta(a), d)) return !1; d = c.element; if (c && b) { if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1 } for (; d;) {
                    if (El(d)) return !1;
                    d = d.parentElement
                } return !0
            } function Fl(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function Gl(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function fh(a, c) { var b = Ub(a), d = Le(a); return { x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0 } } function Hl(a) {
                var c = C(a, "i.clch", Il); ia(a).D(a.document, ["click"], D(c,
                    null, a), { passive: !1 }); return function (b) { var d = Aa.Ib, e = a.Ya[Aa.Qc], f = !!e._informer; e._informer = F({ domain: "informer.yandex.ru" }, b); f || Gc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" }) }
            } function Jl(a, c, b, d, e) {
                var f = e(ba); return Kl(a, b, c)($b(function (g) { d.C("ds", e(jb) - 60 + 15); Me(a, "d.s", g) }, function (g) {
                    if (!g) return vb(hb("ds.h")); var k = g.Id, m = g.host; if (w(k, "settings")) return vb(hb("ds.e")); d.C("ds", e(jb)); g = e(ba) - f; m = m[1]; var p, r; k = wa((p = {}, p.di = k, p.dit = g, p.dip = m, p)); p = (r = {}, r["page-url"] = R(a).href,
                        r); return ra(a, "S", gh)({ Y: k, M: p }, gh)["catch"](C(a, "ds.rs"))
                }))
            } function Ll(a, c, b, d, e) { return new Q(function (f, g) { var k = U(a); if (k.o("dSync", !1)) return g(); k.C("dSync", !0); k = d.o("ds", 0); k = parseInt("" + k, 10); return 60 >= c(jb) - k ? g() : Ml(a) ? f(void 0) : hh(e) ? g() : f(ih(a, b)) }) } function Kl(a, c, b) {
                var d = ra(a, "s", c); return jh(B(function (e) {
                    return Nl(d(Ol, B(function (f) {
                        var g = f[1], k = f[2]; f = H("", B(function (m) { m = m.charCodeAt(0); return String.fromCharCode(m + 10) }, f[0].split(""))); return "http" + (k ? "s" : "") + "://" + f + ":" + g +
                            "/p"
                    }, e), { ci: !1, Sk: !0 }).then(function (f) { return F({}, f, { host: e[f.rl] }) }, A(!1, N)))
                }, b))(Ne(A(Boolean, Ta)))
            } function Pl(a, c, b) { var d = c || {}, e = ra(a, "u", b), f = Ma(a); return { o: function (g, k) { return S(d[g]) ? f.o(g, k) : d[g] }, C: function (g, k) { var m, p = "" + k; d[g] = p; f.C(g, p); return e({ M: (m = {}, m.key = g, m.value = p, m) }, [Aa.Ib + "//mc.yandex.ru/user_storage_set"], {})["catch"](C(a, "u.d.s.s")) } } } function Ql(a, c) {
                if (a.kl()) {
                    var b = null; try { b = c.target || c.srcElement } catch (l) { } if (b) {
                        3 === b.nodeType && (b = b.parentNode); for (var d = b && b.nodeName &&
                            ("" + b.nodeName).toLowerCase(); w(b, "parentNode.nodeName") && ("a" !== d && "area" !== d || !b.href && !b.getAttribute("xlink:href"));)d = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase(); var e = b.href ? b : null
                    } else e = null; if (e && !Zb("ym-disable-tracklink", e)) {
                        var f = a.b, g = a.globalStorage; b = a.nj; var k = a.oj, m = a.bk, p = a.sender, r = a.Aj, t = k.cd, v = e.href; d = ac(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, "")); d = v === d ? "" : d; if (Zb("ym-external-link", e)) ud(f, k, { url: v, Te: !0, title: d, sender: p }); else {
                            t = t ? Eb(f, t).hostname :
                                R(f).hostname; r = RegExp("\\.(" + H("|", B(Rl, r)) + ")$", "i"); var q = e.protocol + "//" + e.hostname + e.pathname; r = kh.test(q) || kh.test(v) || r.test(v) || r.test(q); e = e.hostname; lh(t) === lh(e) ? r ? ud(f, k, { url: v, Se: !0, title: d, sender: p }) : ((m = (f = g.o("pai", I)()) && f + "-" + m) && b.C("pai", m), d && b.C("il", ac(d).slice(0, 100))) : v && Sl.test(v) || ud(f, k, { url: v, vd: !0, Te: !0, Se: r, title: d, sender: p })
                        }
                    }
                }
            } function ud(a, c, b, d) {
                var e, f = wa(); b.Se && f.C("dl", "1"); b.Te && f.C("ln", "1"); f = {
                    Y: f, title: b.title, vd: !!b.vd, ia: b.ia, M: (e = {}, e["page-url"] = b.url,
                        e["page-ref"] = c.cd || R(a).href, e)
                }; b.sender(f, c).then(d || I)["catch"](C(a, "cl.p.s")).then(M([a, b.Jb || I, b.b], Jb))
            } function Tl(a, c) { var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks = e, d)) } function vd(a, c) { return x(mh(c), Oe(a)) } function Mc(a, c) { return x(Ul(c), Oe(a)) } function Oe(a) { a = U(a); var c = a.o("dsjf") || na({}); a.Db("dsjf", c); return c } function nh(a) {
                var c = Pe(a).isEnabled, b = !1; try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1,
                        2])])).size
                } catch (d) { } return rd(Boolean, [!c, b, a.Uint8Array, w(a, "Uint8Array.prototype.slice")])
            } function wd(a) { return ea(a) ? B(wd, a) : sa(a) || "object" !== typeof a ? a : K(function (c, b) { var d = b[0], e = b[1], f = Vl[d]; S(f) && (f = d); e = J(f, Wl) ? e : wd(e); f ? c[f] = e : c[d] = e; return c }, {}, Ha(a)) } function Cb(a, c, b, d) { return oh(c) ? I : A(M(ja([a], d ? [b + ". Params:", d] : [b]), xb), Ka) } function xb() { var a = Da(arguments), c = a.slice(1); xd(a[0]).log.apply(xb, c) } function Pe(a) {
                var c = Wb(a), b = R(a); c = "1" === c.o("debug"); b = -1 < b.href.indexOf("_ym_debug=1");
                a = a._ym_debug; return { $j: c, gk: a || b, isEnabled: Ca(Boolean, [c, a, b]) }
            } function Xl(a, c, b) { var d; (d = xa[c]) || (d = Ia); d = d.slice(); d.unshift(Yl); d.unshift(Zl); return B(x(ph([a, c, b]), Ka), d) } function $l(a) { var c = void 0; void 0 === c && (c = am); var b = w(a, "navigator") || {}; c = B(A(b, w), c); c = H("x", c); try { var d = w(a, "navigator.getGamepads"); var e = ma(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + Hb(e) } function bm(a) {
                try {
                    var c = Hb(a) ? a : []; return H(",", [a.name, a.description, x(ha, nc(Boolean), Va(cm),
                        oc(","))(c)])
                } catch (b) { return "" }
            } function cm(a) { return H(",", [a.description, a.suffixes, a.type]) } function mk(a) {
                return K(function (c, b) { var d = b[0], e = b[1]; c[d + " precision"] = w(e, "precision") || "n"; c[d + " precision rangeMin"] = w(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = w(e, "rangeMax") || "n"; return c }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float",
                    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                        a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            } function lk(a, c) {
                var b = c.createBuffer(); if (!b || !c.getParameter || !ua("getParameter", c.getParameter)) return ""; c.bindBuffer(c.ARRAY_BUFFER,
                    b); var d = new a.Float32Array(dm); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.jk = 3; b.Ak = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); if (!d || !e) return ""; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"); c.compileShader(e); c.attachShader(d, e); e = c.createShader(c.FRAGMENT_SHADER); if (!e) return ""; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); d.vl = c.getAttribLocation(d, "attrVertex"); d.Ck = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Fm); c.vertexAttribPointer(d.vl, b.jk, c.FLOAT, !1, 0, 0); c.uniform2f(d.Ck, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.Ak); return c.canvas
            } function kk(a, c) { if (!V(a.Float32Array)) return !1; var b = w(c, "canvas"); if (!b || !ua("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function te(a, c) {
                c.clearColor(0,
                    0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + w(a, "0") + ", " + w(a, "1") + "]"
            } function em(a) { a = w(a, "screen") || {}; return H("x", B(A(a, w), fm)) } function ik(a) { var c = w(a, "matchMedia"); if (!c || !ua("matchMedia", c)) return ""; var b = fa("matchMedia", a); return K(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, gm) } function bk(a) {
                a = db(a); if (!a) return ""; a = a("video"); try {
                    var c = fa("canPlayType", a), b = Sb(function (d) { return B(x(N, fa("concat", d + "; codecs=")), hm) }, qh);
                    return B(c, [].concat(qh, b))
                } catch (d) { return "canPlayType" }
            } function im(a) { a = w(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" } function rh(a, c) {
                var b = R(a), d = b.href, e = b.host, f = -1; if (!Oa(c) || S(c)) return d; b = c.replace(sh, ""); if (-1 !== b.search(jm)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length -
                    1] = b, H("/", d); return ""
            } function th(a) { return { va: function (c, b) { var d = c.Y; if (!d) return b(); var e = U(a).o("fid"); !uh && e && (d.C("fid", e), uh = !0); return b() } } } function vh(a) { return { va: function (c, b) { var d = c.Y; if (d) { var e = U(a).o("adBlockEnabled"); e && d.C("adb", e) } b() } } } function Zl(a) { return { va: function (c, b) { Fe(a) || b() } } } function Fe(a) { var c; return c = (c = !!U(a).o("oo")) || Ge(a) } function km(a) { a = lm(a); return mm[a] || a } function nm(a) { a = wh(a); return om[a] || "ru" } function La(a, c) { var b = U(a).o("counters", {}), d = X(c); return b[d] }
            function Yl(a, c, b) { return { va: function (d, e) { pm(a, d, b, e) } } } function pm(a, c, b, d) {
                var e = c.Y; if (b.Al || !e) d(); else {
                    var f = Qe(a), g = Tb(a, ""); c = x(function () { var v = xh(f); e.C("gdpr", "" + v + qm(v, g)) }, d); if (3 === b.id) c(); else {
                        var k = U(a); if (d = k.o("f1")) d(c); else if (d = (d = xh(f)) ? B(A(yd, w), d.split(",")) : [], yh(d)) c(); else {
                            var m = zh(a), p = R(a), r = m && (-1 !== p.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck")); p = g.o("gdpr"); g.o("yandex_login") ? (d.push("13"), g.C("gdpr", pc, 525600)) : m ? J(p, Kb) ? p === Re ? d.push("12") : d.push("3") : Ah(a) ||
                                zd(a) ? d.push("17") : rm(a) && d.push("28") : d.push("14"); var t = A(f, sm); yh(d) ? (E(t, d), c()) : (Ad.push(c), k.C("f1", function (v, q) { var l = 0; if (q) { var h = cb(a, q) || ""; l += h.length } Ad.push(v); 1E6 >= l && Ad.push(v) }), (0, Se[0])(a).then(W("params.eu")).then(function (v) { if (v || r) { g.C("gdpr_popup", Re); tm(a, b); if (ub(a)) return um(a, t, b); var q = Bh(a, f); if (q) return vm(a, t, q, b) } v || t("8"); return Q.resolve({ value: pc, Ve: !0 }) }).then(function (v) {
                                    g.Lb("gdpr_popup"); if (v) { var q = v.value; v = v.Ve; J(q, Kb) && g.C("gdpr", q, v ? void 0 : 525600) } q = Nc(Ad,
                                        Ka); Te(a, q, 20)($b(C(a, "gdr"), I)); k.C("f1", Ka)
                                })["catch"](C(a, "gdp.a")))
                        }
                    }
                }
            } function um(a, c, b) { var d = Bd(a, b); return new Q(function (e) { var f; if (d) { var g = d.na, k = x(A("4", c), A(null, e)), m = Z(a, k, 2E3, "gdp.f.t"); d.Ih((f = {}, f.type = "isYandex", f)).then(function (p) { p.isYandex ? (c("5"), g.D(H(",", ja(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ue)), function (r) { e({ value: Ch(r[1].type) }) })) : (c("6"), e(null)) })["catch"](k).then(M([a, m], oa)) } else e({ value: Re, Ve: !0 }) }) } function tm(a, c) {
                var b = Bd(a, c); b && b.na.D("isYandex",
                    function () { var d; return d = { type: "isYandex" }, d.isYandex = zh(a), d }); return b
            } function vm(a, c, b, d) {
                var e = wm(a, d.Bl), f = Bd(a, d); if (!f) return Q.resolve({ value: pc, Ve: !0 }); var g = Gc(a, { src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js" }); return new Q(function (k, m) {
                    g ? (c("7"), g.onerror = function () { var p; c("9"); f.Hh((p = {}, p.type = "GDPR-ok-view-default", p)); k(null) }, g.onload = function () {
                        c("10"); b.D(H(",", ja(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ue)), function (p) {
                            var r; p = p.type; f.Hh((r = {}, r.type = p, r));
                            k({ value: Ch(p) })
                        })
                    }) : (c("9"), m(hb("gdp.e")))
                })
            } function wm(a, c) { var b = c || wh(a); return J(b, xm) ? b : "en" } function Dh(a, c) {
                var b = Eh(a, c), d = [], e = []; if (!b) return null; var f = zm(a, b.Gf), g = Am(f); b.na.D("initToParent", function (k) { g(d, b.ic[k[1].counterId]) }).D("parentConnect", function (k) { g(e, b.vc[k[1].counterId]) }); return {
                    na: b.na, Bm: function (k, m) { return new Q(function (p, r) { b.Gf(k, m, function (t, v) { p([t, v]) }); Z(a, A(hb(), r), 5100, "is.o") }) }, Hh: function (k) { var m = { Jh: [], Xf: [], data: k }; d.push(m); return f(b.ic, m, k) }, Ih: function (k) {
                        var m =
                            { Jh: [], Xf: [], data: k }; e.push(m); return f(b.vc, m, k)
                    }
                }
            } function Cd() { return function (a, c, b) { return { va: function (d, e) { var f, g = d.Y, k = d.M; if (g && k) { var m = J(k["wv-type"], Bm); if (!k["wv-type"] || m) { var p = da(a); g.Kf("rqnl", 1); g = g.b(); for (var r = Oc(a), t = 1; r[t];)t += 1; d.Ac = t; r[t] = (f = {}, f.protocol = Aa.Ib, f.host = "mc.yandex.ru", f.resource = m ? "webvisor" : "watch", f.postParams = d.oa, f.time = p(ba), f.counterType = b.sa, f.params = k, f.browserInfo = g, f.counterId = b.id, f.ghid = qc(a), f); Ve(a) } } e() }, rb: function (d, e) { Fh(a, d); e() } } } } function Fh(a,
                c) { var b = Oc(a); c.Y && !Za(b) && (delete b[c.Ac], Ve(a)) } function Ve(a) { var c = Oc(a); Ma(a).C("retryReqs", c) } function Dd(a, c, b) {
                    var d = Ed(a, c, b); return function (e, f, g) {
                        var k = F({ Y: wa() }, e); k.M || (k.M = {}); var m = k.M; m.wmode = "0"; m["wv-part"] = "" + g; m["wv-hit"] = m["wv-hit"] || "" + qc(a); m["page-url"] = m["page-url"] || a.location.href; e = m["wv-type"] ? Q.resolve(m["wv-type"]) : Cm(a, f, k); m.rn = m.rn || "" + Ya(a); return e.then(function (p) {
                            var r; m["wv-type"] = p; p = "webvisor/" + f.id; return d(F(k, { M: m }), p, {
                                xc: (r = {}, r["Content-Type"] = "text/plain",
                                    r), ai: "POST"
                            })
                        })
                    }
                } function Cm(a, c, b) { return Ga(a, c, function (d) { var e = b.Yg; d = !!w(d, "settings.publisher.schema"); var f = "4", g = "2"; e && (f = "5", g = "3"); e = !!b.Y.o("bt"); return d && !e ? f : g }) } function Dm(a, c, b, d) { c = d.o("cc"); d = M(["cc", ""], d.C); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && parseInt(e, 10)) && 1440 < da(a)(jb) - e) return d(); b.C("cc", c) } else ta(0)(c) || d() } function Em(a, c, b, d) {
                    return Ga(a, c, function (e) {
                        if ("0" === w(e, "settings.pcs") && !rc(a)) if (e = d.o("zzlc"), S(e) || Za(e) || "na" === e) {
                            e = "ru"; var f = Gh(a, 68),
                                g = Hh(a, 79); if (f || g) e = "md"; if (f = db(a)) { var k = f("iframe"); F(k.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); k.src = "https://mc.yandex." + e + wg("L21ldHJpa2EvenpsYy5odG1s"); if (e = Ub(a)) { e.appendChild(k); var m = 0, p = ia(a).D(a, ["message"], C(a, "zz.m", function (r) { (r = w(r, "data")) && r.substr && "__ym__zz" === r.substr(0, 8) && (sc(k), r = r.substr(8), d.C("zzlc", r), b.C("zzlc", r), p(), oa(a, m)) })); m = Z(a, x(p, A(k, sc)), 3E3) } }
                        } else b.C("zzlc", e)
                    })
                } function Ga(a, c, b) {
                    var d = X(c); return new Q(function (e) {
                        Ih(a)(Fm(d)).D(x(b,
                            e))
                    })
                } function Gm(a, c, b) { c = X(c); var d = We(a); b = F({ Cj: d(ba) }, b); return Ih(a)(Hm(c, b)) } function Jh(a, c, b) { var d = wb(a), e = []; c.D(function (f) { e.push(f); e.length > b && e.shift(); return d.ea(f) }); d.D = Kh(e); return d } function Lh(a, c, b) { var d = wb(a); c.fh.push(function (e) { return d.ea(e) }); d.D = x(mc(c.D), d.D); d.ea = function (e) { pg(a, d.fh, function (f) { return f(e) }, b) }; return d } function Im(a, c, b) {
                    var d, e; c = Ta(A(a, w), Jm); c = S(c) ? null : w(a, c); if (w(a, "navigator.onLine") && c && c && w(c, "prototype.constructor.name")) {
                        var f = new c((d =
                            {}, d.iceServers = [], d)); a = w(f, "createDataChannel"); V(a) && (D(a, f, "y.metrika")(), a = w(f, "createOffer"), V(a) && !a.length && (a = D(a, f)(), d = w(a, "then"), V(d) && D(d, a, function (g) { var k = w(f, "setLocalDescription"); V(k) && D(k, f, g, I, I)() })(), F(f, (e = {}, e.onicecandidate = function () {
                                var g, k = w(f, "close"); if (V(k)) {
                                    k = D(k, f); try { var m = (g = w(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (p) { f.onicecandidate = I; "closed" !== f.iceConnectionState && k(); return } m && 0 < m.length && (g = tc(m[1]), b.C("pp", g)); f.onicecandidate =
                                        I; k()
                                }
                            }, e))))
                    }
                } function Km(a, c, b) { var d, e = Eh(a, c); if (e) { e.na.D("gpu-get", function () { var k; return k = {}, k.type = "gpu-get", k.pu = b.o("pu"), k }); var f = w(a, "opener"); if (f) { var g = Z(a, M([a, c, b], Mh), 200, "pu.m"); e.Gf(f, (d = {}, d.type = "gpu-get", d), function (k, m) { var p = w(m, "pu"); p && (oa(a, g), b.C("pu", p)) }) } else Mh(a, c, b) } } function Mh(a, c, b) { var d = w(a, "location.host"); a = Xe(a, c); b.C("pu", "" + tc(d) + a) } function Lm(a, c) {
                    var b = Fd(a); c.D("initToParent", function (d) { var e = d[1]; b.ic[e.counterId] = { info: e, window: d[0].source } }).D("initToChild",
                        function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.ea("parentConnect", [e, d]) }).D("parentConnect", function (d) { var e = d[1]; e.counterId && (b.vc[e.counterId] = { info: e, window: d[0].source }) })
                } function Ye(a, c, b) { return { va: function (d, e) { var f = d.Y; if (f && (!b || b.Gh)) { var g = a.document.title; d.title && (g = d.title); var k = Lb("getElementsByTagName", a.document); "string" !== typeof g && k && (g = k("title"), g = (g = w(g, "0.innerHtml")) ? g : ""); g = g.slice(0, Aa.Fi); f.C("t", g) } e() } } } function bc(a) {
                    void 0 === a && (a = Mm); return function (c,
                        b, d) { return { va: function (e, f) { var g = e.Y, k = e.M; g && k && E(function (m) { C(c, "bi:" + m, x(M([c, d, e], lb[m]), D(g.Kf, g, m)))() }, a); f() } } }
                } function qc(a) { var c = U(a), b = c.o("hitId"); b || (b = Ya(a), c.C("hitId", b)); return b } function Nm(a, c, b, d, e, f, g, k) { var m = b.o(f); sa(m) && (b.C(f, g), e(a, c, b, d), m = b.o(f, g)); S(k) || k.Kf(f, "" + m); return m } function Om(a, c) { if (Pc(a)) { var b = qb(a).match(Pm); if (b && b.length) return b[1] === c } return !1 } function Gh(a, c) { if (Qc(a) && c) { var b = qb(a).match(Qm); if (b && b.length) return +b[1] >= c } return !1 } function Hh(a,
                    c) { var b = qb(a); return b && (b = b.match(Rm)) && 1 < b.length ? parseInt(b[1], 10) >= c : !1 } function xg(a) { for (var c = "", b = 0; b < a.length;) { var d = a.charCodeAt(b); if (128 > d) c += String.fromCharCode(d), b++; else if (191 < d && 224 > d) { var e = a.charCodeAt(b + 1); c += String.fromCharCode((d & 31) << 6 | e & 63); b += 2 } else { e = a.charCodeAt(b + 1); var f = a.charCodeAt(b + 2); c += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63); b += 3 } } return c } function Tg(a, c) {
                        void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                            var g = (a[f] << 16) + (a[f + 1] << 8) + a[f +
                                2]; e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63]])
                        } switch (b - d) {
                            case 1: b = a[d] << 4; e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b &
                                63], "=", "="]); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "="])
                        }e = e.join(""); return c ? Be(e, !0) : e
                    } function wg(a, c) {
                        void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = Be(b)); b.length % 4;)b += "="; do {
                            var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                                g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)); if (0 > f || 0 > g || 0 > k || 0 > m) return null; var p = f << 18 | g << 12 | k << 6 | m; f = p >> 16 & 255; g = p >> 8 & 255; p &= 255; d = 64 === k ? d + String.fromCharCode(f) : 64 === m ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, p)
                        } while (e < b.length); return d
                    } function Be(a,
                        c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return Sm[b] || b }) : "" } function Nh(a, c) { var b = a.length ? B(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; E(x(N, fa("push", a)), c); return Y(ta(null), b).length === a.length ? null : b } function Oh(a, c, b) {
                            return B(function (d) {
                                var e = d[0], f = d[1]; if (V(e)) return e(a, c) || null; if (V(f)) return null; var g = !(!c[e] || !c[f]); !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ph[d[0]] || Ph[g])); return g ? (d = Math.round(c[e]) - Math.round(c[f]),
                                    0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                            }, b)
                        } function Rc(a, c, b) { return { va: function (d, e) { var f = Qh(b), g = d.Y; g ? g.o("pv") && !g.o("ar") ? (f.Qg = g, e()) : (f = f.ze, !0 === f ? e() : f.push(e)) : e() }, rb: function (d, e) { var f = d.Y, g = d.Rk, k = Qh(b); if (f) { var m = k.ze; k.Qg === f && !0 !== m && (g && U(a).C("isEU", w(g, "settings.eu")), E(Ka, m), k.ze = !0) } e() } } } function Ze(a) { return { va: function (c, b) { var d = a.document, e = c.Y; if (e && $e(a)) { var f = ia(a), g = function (k) { $e(a) || (f.Fc(d, Rh, g), b()); return k }; f.D(d, Rh, g); e.C("pr", "1") } else b() } } }
            function Qa(a, c, b) { var d = Ed(a, c, b); return function (e, f) { var g, k = F({ Y: wa() }, e), m = k.M, p = k.Y; m = (g = {}, g["page-url"] = m && m["page-url"] || "", g.charset = "utf-8", g); "0" !== f.sa && (m["cnt-class"] = f.sa); g = F(k, { M: F(k.M || {}, m) }); k = ""; m = X(f); Sh(f)[m] && (k = tc(Xe(a, f)) + ".", g.Y && g.Y.C("rt", 1)); F(g, { Rg: k }); return d(g, "watch/" + f.id, { fg: !(!p.o("pv") || p.o("ar") || p.o("wh")) }) } } function Ed(a, c, b) {
                var d = uc(a, c); return function (e, f, g) {
                    void 0 === g && (g = {}); var k = Tm(a); e.Rg && (k = "" + e.Rg + k); f = [Aa.Ib + "//" + (k || "mc.yandex.ru") + "/" + f];
                    return af(a, b, e, !0).then(M([e, f, g], d)).then(function (m) { e.Rk = m.Id; return af(a, b, e).then(A(m.Id, N)) })
                }
            } function Tm(a) { var c = "mc.yandex.ru", b = w(a, "document.referrer"); if (!b) return c; (a = Eb(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (a = a[0].split("yandex").reverse()[0].substring(1), a = J(a, Th) ? a : !1) : a = !1; return "mc.yandex." + (a || "ru") } function Um(a, c) { return a && c ? Uh(a) === Uh(c) : a || c ? !1 : !0 } function Uh(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function af(a,
                c, b, d) { void 0 === d && (d = !1); return new Q(function (e, f) { function g(p, r) { r(); e() } var k = c.slice(); k.push({ va: g, rb: g }); var m = Nc(k, function (p, r) { var t = d ? p.va : p.rb; if (t) try { t(b, r) } catch (v) { m(Vm), f(v) } else r() }); m(Vh) }) } function Gb(a, c, b) { var d = b || "as"; if (a.postMessage && !a.attachEvent) { b = ia(a); var e = "__ym__promise_" + Ya(a) + "_" + Ya(a), f = I; d = C(a, d, function (g) { try { var k = g.data } catch (m) { return } k === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.D(a, ["message"], d); a.postMessage(e, "*") } else Z(a, c, 0, d) } function pg(a,
                    c, b, d, e, f) { void 0 === d && (d = 1); void 0 === e && (e = 200); void 0 === f && (f = "itc"); c = Nc(c, b); Te(a, c, d, e)($b(C(a, f), I)) } function Wm(a) { a.flush = !0 } function Te(a, c, b, d) { function e(f, g) { function k() { try { var p = c(bf(a, b)); m = m.concat(p) } catch (r) { f(r) } c(Xm); if (c(Gd)) return g(m); e.flush ? (c(bf(a, 1E4)), g(m)) : Z(a, k, d) } var m = []; k() } void 0 === b && (b = 1); void 0 === d && (d = 200); return na(e) } function kd(a) { return na(function (c, b) { b(a) }) } function Nl(a) { return na(function (c, b) { a.then(b, c) }) } function jh(a) {
                        var c = [], b = 0; return na(function (d,
                            e) { E(function (f, g) { f($b(d, function (k) { try { c[g] = k, b += 1, b === a.length && e(c) } catch (m) { d(m) } })) }, a) })
                    } function Nc(a, c) { void 0 === c && (c = N); return na({ sd: a, dh: c, Of: !1, La: 0 }) } function Vh(a) { function c() { function d() { b = !0; a.La += 1 } b = !1; a.dh(a.sd[a.La], function () { d() }); b || (a.La += 1, d = D(Vh, null, a)) } for (var b = !0; !Gd(a) && b;)c() } function bf(a, c) { return function (b) { var d = da(a), e = d(ba); return Wh(function (f, g) { d(ba) - e >= c && g(Ym) }, b) } } function Zm(a) { Gd(a) && vb(Hd("i")); var c = a.dh(a.sd[a.La]); a.La += 1; return c } function Xm(a) {
                        a.Of =
                            !1
                    } function Ym(a) { a.Of = !0 } function Vm(a) { a.La = a.sd.length } function Gd(a) { return a.Of || a.sd.length <= a.La } function uc(a, c) { return function (b, d, e) { void 0 === e && (e = {}); return Xh(a, c, d, b, F(e, { cb: b.cb || [], oa: e.oa || b.oa })) } } function Xh(a, c, b, d, e, f, g) {
                        var k; void 0 === f && (f = 0); void 0 === g && (g = 0); var m = F({}, e), p = c[g], r = p[0]; p = p[1]; var t = F({}, d.M), v = da(a); d.Y && (t["browser-info"] = wa(d.Y.b()).C("ti", r).C("st", v(Id)).Cb()); v = b[f]; m.xc && m.xc["Content-Type"] || !m.oa || (m.xc = F({}, m.xc, (k = {}, k["Content-Type"] = "application/x-www-form-urlencoded",
                            k)), m.oa = "site-info=" + cf(m.oa)); m.ai = m.oa ? "POST" : "GET"; m.yc = t; m.cb.push(r); return p("" + v + (d.xk ? "/1" : ""), m).then(function (q) { return { Id: q, rl: f } })["catch"](function (q) { var l = g + 1 >= c.length, h = f + 1 >= b.length; l && h && vb(q); return Xh(a, c, b, d, e, !h && l ? f + 1 : f, l ? 0 : g + 1) })
                    } function Yh(a, c) {
                        var b = c.$e, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = Wb(a), f = Ma(a), g = da(a), k = g(Id), m = Zh(a, c), p = m[0]; m = m[1]; var r = e.o("d"); $h(a, c); var t = !1; !m && p && (m = p, t = !0); if (!m) m = H("", [g(Id), Ya(a)]), t = !0; else if (!r || 15768E3 < k - parseInt(r,
                            10)) t = !0; t && !c.Sb && (e.C(d, m, 525600, b), e.C("d", "" + k, 525600, b)); f.C(d, m); return m
                    } function Zh(a, c) { var b = Ma(a), d = Wb(a), e = c.$e || "uid"; return [b.o(e), d.o(e)] } function kb(a) { a = da(a); return Math.round(a(df) / 50) } function df(a) { var c = a.Ma, b = c[1]; a = c[0] && b ? b() : ba(a) - a.ck; return Math.round(a) } function Id(a) { return Math.round(ba(a) / 1E3) } function jb(a) { return Math.floor(ba(a) / 1E3 / 60) } function ba(a) { var c = a.Zf; return 0 !== c ? c : ef(a.b, a.Ma) } function We(a) {
                        var c = ia(a), b = ai(a), d = { b: a, Zf: 0, Ma: b, ck: ef(a, b) }, e = b[1]; b[0] &&
                            e || c.D(a, ["beforeunload", "unload"], function () { 0 === d.Zf && (d.Zf = ef(a, d.Ma)) }); return na(d)
                    } function $m(a) { return (10 >= a ? "0" : "") + a } function bi(a, c, b) { void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d = "" + b + c + "_"; return { Re: an(a), o: function (e, f) { var g = ci(a, "" + d + e); return Za(g) && !S(f) ? f : g }, C: function (e, f) { di(a, "" + d + e, f); return this }, Lb: function (e) { ei(a, "" + d + e); return this } } } function di(a, c, b) { var d = ff(a); a = cb(a, b); if (!Za(a)) try { d.setItem(c, a) } catch (e) { } } function ci(a, c) { var b = ff(a); try { return ib(a, b.getItem(c)) } catch (d) { } return null }
            function ei(a, c) { var b = ff(a); try { b.removeItem(c) } catch (d) { } } function ff(a) { try { return a.localStorage } catch (c) { } return null } function Vg(a, c, b) { Jd(a, "metrika_enabled", "1", 0, c, b); (b = Ic(a, "metrika_enabled")) && Jd(a, "metrika_enabled", "", -100, c, void 0); return !!b } function Ic(a, c) { var b = null; try { b = a.document.cookie } catch (d) { return null } return (b = (new RegExp("(?:^|;\\s*)" + c + "=([^;]*)")).exec(b)) && 2 <= b.length ? decodeURIComponent(b[1]) : null } function Wg(a, c, b) {
                J(b, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? a = !0 : (b =
                    Qe(a), b = fi(b), a = c(a, "gdpr"), a = Y(Ib(bn), b).length ? !0 : J(a, [pc, cn])); return a
            } function Ch(a) { if (J(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return pc; a = a.replace("GDPR-ok-view-detailed-", ""); return J(a, Kb) ? a : pc } function Bh(a, c, b) { void 0 === b && (b = N); var d = Dc(a); b(d); var e = A(d, dn); Kd(a, c, function (f) { f.D(e) }); return d } function dn(a, c) { var b = w(c, "ymetrikaEvent"); b && a.ea(w(b, "type"), b) } function Kd(a, c, b, d) {
                void 0 === b && (b = I); void 0 === d && (d = !1); var e = wb(a); if (c && V(c.push)) {
                    var f = c.push; c.push = function () {
                        var g =
                            Da(arguments), k = g[0]; d && e.ea(k); g = f.apply(c, g); d || e.ea(k); return g
                    }; b(e); E(e.ea, c); return e
                }
            } function Qe(a) { a = U(a); var c = a.o("dataLayer", []); a.C("dataLayer", c); return c } function sm(a, c) { var b, d; a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function Cg(a, c, b) { function d() { f = 0; g && (g = !1, f = Z(a, d, b), e.ea(k)) } var e = wb(a), f, g = !1, k; c.D(function (m) { g = !0; k = m; f || d(); return I }); return e } function en(a, c) { return a.clearInterval(c) } function fn(a, c, b, d) { return a.setInterval(C(a, "i.err." + (d || "def"), c), b) } function Z(a,
                c, b, d) { return Ld(a, C(a, "d.err." + (d || "def"), c), b) } function Dc(a) { var c = {}; return { D: function (b, d) { E(function (e) { w(c, e) || (c[e] = wb(a)); c[e].D(d) }, b.split(",")); return this }, wa: function (b, d) { E(function (e) { w(c, e) && c[e].wa(d) }, b.split(",")); return this }, ea: function (b, d) { return K(function (e, f) { return w(c, f) ? e.concat(C(a, "e." + f, c[f].ea)(d)) : e }, [], b.split(",")) } } } function wb(a) { var c = [], b = {}; b.fh = c; b.D = x(fa("push", c), A(b, N)); b.wa = x(gf(tb(a))(c), gf(fa("splice", c))(1), A(b, N)); b.ea = x(N, gf(Ka), Kh(c)); return b }
            function G(a, c, b) { return function () { return C(arguments[0], a, c, b).apply(this, arguments) } } function C(a, c, b, d, e) { var f = b || vb; return function () { var g = d; try { g = f.apply(e || null, arguments) } catch (k) { Me(a, c, k) } return g } } function ef(a, c) { var b = c || ai(a), d = b[0]; b = b[1]; return !isNaN(d) && V(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function ai(a) { a = hf(a); var c = w(a, "timing.navigationStart"), b = w(a, "now"); b && (b = D(b, a)); return [c, b] } function hf(a) { return w(a, "performance") || w(a, "webkitPerformance") }
            function Me(a, c, b) {
                var d, e, f, g, k; if (!(.01 >= a.Math.random())) {
                    var m = "u.a.e", p = ""; b && ("object" === typeof b ? (m = b.message, p = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : m = "" + b); if (!gn(m) && !Ca(x(fa("indexOf", m), ta(-1), cc), hn)) {
                        c = (d = {}, d.jserrs = (e = {}, e[Aa.Nc] = (f = {}, f[m] = (g = {}, g[c] = (k = {}, k[a.location.href] = p, k), g), f), e), d); a: {
                            var r; d = Aa.Ib + "//mc.yandex.ru/watch/" + Aa.yi; try { var t = jf(a, "er")[0]; var v = void 0 === t ? [] : t; var q = v[1]; var l = void 0 === q ? null : q } catch (h) { break a } t = (r = {}, r["browser-info"] =
                                "ar:1:pv:1:v:" + Aa.Nc + ":vf:" + Sc.version, r["page-url"] = a.location && "" + a.location.href, r); a = cb(a, c); if (l && a) l(d, { yc: t, cb: [], oa: "site-info=" + cf(a) })["catch"](I)
                        }
                    }
                }
            } function zb(a) { return B(function (c) { return !c || J(c, a) ? c : 0 }, dc) } function gi(a) { var c = w(a, "navigator.sendBeacon"); return c && ua("sendBeacon", c) && !zd(a) ? jn(a, D(c, w(a, "navigator"))) : !1 } function kf(a) { return db(a) ? kn(a) : !1 } function wa(a) {
                var c = a || {}; return {
                    b: A(c, N), o: function (b, d) { var e = c[b]; return S(e) && !S(d) ? d : e }, C: function (b, d) { c[b] = d; return this },
                    Kf: function (b, d) { return "" === d || sa(d) ? this : this.C(b, d) }, Cb: A(c, x(Ha, hi(function (b, d) { return "t" === b[0] ? 1 : "t" === d[0] ? -1 : 0 }), Vb(function (b, d) { b.push(H(":", d)); return b }, []), oc(":")))
                }
            } function ln(a, c) { try { delete a[c] } catch (b) { a[c] = void 0 } } function Ya(a, c, b) { var d = S(b); S(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function qd(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === lf(c) } function Tc(a) { var c = db(a); return c ? mn(a, c) : !1 } function Sg(a, c, b) {
                var d =
                    za(c); return d && Ng(a, c, Y(Boolean, ["p", nn[d], "c"]), ii(a), b)
            } function Rg(a, c) { var b = Bb(mf, a, c); if (!b) { var d = Bb("div", a, c); d && (Ab(mf + ",div", a, d).length || (b = d)) } return b } function Ng(a, c, b, d, e) { return K(function (f, g) { var k = null; g in ji ? k = c.getAttribute && c.getAttribute(ji[g]) : g in vc && (k = "p" === g ? vc[g](a, c, e) : "c" === g ? vc[g](a, c, d) : vc[g](a, c)); k && (k = k.slice(0, ki[g] || 100), f[g] = nf[g] ? "" + tc(k) : k); return f }, {}, b) } function Xg(a, c, b) {
                if (a.document.querySelectorAll && ua("querySelectorAll", w(a, "Element.prototype.querySelectorAll"))) return ha(b.querySelectorAll(c));
                var d = li(c.split(" "), b); return Y(function (e, f) { return tb(a)(e, d) === f }, d)
            } function li(a, c) { var b = ja(a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ? Sb(A(b, li), ha(d)) : ha(d) } function ic(a, c, b) { return (a = Ab(b, a, c)) && a.length ? a[0] : null } function Ab(a, c, b) { return b ? (a = b.querySelectorAll(a)) ? ha(a) : [] : [] } function Gc(a, c) {
                var b = a.document, d = F({ type: "text/javascript", charset: "utf-8", async: !0 }, c), e = db(a); if (e) {
                    var f = e("script"); of(Ha, Va(function (p) {
                        var r = p[0]; p = p[1]; "async" === r && p ? f.async =
                            !0 : f[r] = p
                    }))(d); try { var g = Lb("getElementsByTagName", b), k = g("head")[0]; if (!k) { var m = g("html")[0]; k = e("head"); m && m.appendChild(k) } k.insertBefore(f, k.firstChild); return f } catch (p) { }
                }
            } function on(a, c) { var b = ea(a) ? a : [a]; c = c || document; if (c.querySelectorAll) { var d = H(", ", B(function (e) { return "." + e }, b)); return ha(c.querySelectorAll(d)) } if (c.getElementsByClassName) return Sb(x(fa("getElementsByClassName", c), ha), b); d = c.getElementsByTagName("*"); b = "(" + H("|", b) + ")"; return Y(A(b, Zb), ha(d)) } function mi(a, c, b) {
                for (var d =
                    "", e = ni(), f = za(c) || "*"; c && c.parentNode && !J(f, ["BODY", "HTML"]);)d += e[f] || "*", d += oi(a, c, b) || "", c = c.parentElement, f = za(c) || "*"; return ac(d, 128)
            } function oi(a, c, b) { if (a = Md(a, c)) { a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) } } return 0 } function Md(a, c) { var b = w(a, "document"); if (!c || c === b.documentElement) return null; if (c === ec(a)) return b.documentElement; b = null; try { b = c.parentNode } catch (d) { } return b } function Je(a, c) {
                var b =
                    pf(a, c), d = b.left; b = b.top; var e = Nd(a, c); return [d, b, e[0], e[1]]
            } function Nd(a, c) { var b = w(a, "document"); if (c === ec(a) || c === b.documentElement) { b = Ub(a); var d = Uc(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = Ec(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight] } function pf(a, c) {
                var b = c, d = w(a, "document"), e = za(b); if (!b || !b.ownerDocument || "PARAM" === e || b === ec(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = b.getBoundingClientRect && Ec(b)) return b = Le(a), {
                    left: Math.round(d.left +
                        b.x), top: Math.round(d.top + b.y)
                }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e }
            } function Bb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document)) return null; if (c.Element.prototype.closest && ua("closest", c.Element.prototype.closest) && b.closest) return b.closest(a); var d = eh(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (c.document.querySelectorAll && ua("querySelectorAll", w(c, "Element.prototype.querySelectorAll"))) {
                    for (a =
                        ha((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === tb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null
                } return null
            } function pi(a) { return Od(a) && !Ca(ta(a.type), pn) ? Pd(a) ? !a.checked : !a.value : qn(a) ? !a.value : rn(a) ? 0 > a.selectedIndex : !0 } function za(a) { if (a) try { var c = a.nodeName; if (Oa(c)) return c; c = a.tagName; if (Oa(c)) return c } catch (b) { } } function qi(a, c) { var b = a.document.getElementsByTagName("form"); return tb(a)(c, ha(b)) } function sn(a, c, b) {
                b = Lb("dispatchEvent",
                    b || a.document); var d = null, e = w(a, "Event.prototype.constructor"); if (e && (ua("(Event|Object|constructor)", e) || Qd(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) { if ((a = Lb("createEvent", w(a, "document"))) && V(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) } } d && b(d)
            } function Ec(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) { return "object" === typeof c && null !== c && 16389 === (c.ih && c.ih & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function Le(a) {
                var c =
                    ec(a), b = w(a, "document"); return { x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0 }
            } function Uc(a) { var c = qf(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = Ub(a); return [w(c, "clientWidth") || a.innerWidth, w(c, "clientHeight") || a.innerHeight] } function qf(a) {
                var c = w(a, "visualViewport.width"), b = w(a, "visualViewport.height"); a = w(a, "visualViewport.scale"); return sa(c) ||
                    sa(b) ? null : [Math.floor(c), Math.floor(b), a]
            } function Ub(a) { var c = w(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : ec(a) || b } function ec(a) { a = w(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } } function Zb(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function fc(a) { var c; try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c }
            function sc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Ce(a) { if (sa(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function Mb(a) { var c; if (c = w(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) { a: { if (tn.test(a.location.host) && a.opera && V(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1 } c = !c } return c ? un(a) : !1 } function vn(a, c, b, d, e, f, g, k) {
                if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g("s." +
                    c.status + ".st." + c.statusText + ".rt." + c.responseText); else { e = null; if (d) try { (e = ib(a, c.responseText)) || g(b) } catch (m) { g(b) } f(e) } return k
            } function ri(a, c, b) { (b = Cc(b)) && (a += "?" + b); c.oa && (a += (b ? "&" : "?") + c.oa); return a } function cb(a, c) { try { return a.JSON.stringify(c) } catch (b) { return null } } function Cc(a) { return a ? x(Ha, Vb(function (c, b) { var d = b[0], e = b[1]; S(e) || sa(e) || c.push(d + "=" + cf(e)); return c }, []), oc("&"))(a) : "" } function Ae(a) {
                return a ? x(Va(function (c) { c = c.split("="); var b = c[1]; return [c[0], sa(b) ? void 0 : od(b)] }),
                    Vb(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {}
            } function od(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function cf(a) { try { return encodeURIComponent(a) } catch (c) { } a = H("", Y(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) } function rf() { var a = Da(arguments); return vb(hb(a)) } function hb(a) { var c = ""; ea(a) ? c = H(".", a) : Oa(a) && (c = a); return Hd("err.kn(" + Aa.Nc + ")" + c) } function wn(a) { this.message = a } function si(a, c, b, d, e) {
                var f = a.addEventListener &&
                    a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b)
            } function R(a) { return K(function (c, b) { var d = w(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, xn) } function yn(a, c, b, d, e) { var f = "object" === typeof a ? a : { id: a, sa: d, Rc: e, ia: b }; a = K(function (g, k) { var m = k[1], p = m.yk; m = f[m.mh]; g[k[0]] = p ? p(m) : m; return g }, {}, Ha(c)); ti(a, a.ia || {}); return a } function zn(a, c) {
                return K(function (b, d) {
                    b[c[d[0]].mh] =
                        d[1]; return b
                }, {}, Ha(a))
            } function ui(a) { a = X(a); return Nb[a] && Nb[a].gl } function ti(a, c) { var b = X(a), d = w(c, "__ym.turbo_page"), e = w(c, "__ym.turbo_page_id"); Nb[b] || (Nb[b] = {}); if (d || e) Nb[b].gl = d, Nb[b].hl = e } function An(a) { return Rd(a) || Vc(a) || !S(w(a, "orientation")) } function $e(a) { return J("prerender", B(A(w(a, "document"), w), ["webkitVisibilityState", "visibilityState"])) } function Bn(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function Ua(a, c) { E(x(N, fa("push", a)), c); return a } function we(a,
                c) { return Array.prototype.sort.call(c, a) } function ha(a) { if (a) { if (!ea(a)) { bg(); if ("undefined" === typeof Symbol) var c = !1; else try { bg(), Qj(), c = V(a[Symbol.iterator]) } catch (b) { c = !1 } a = c && Sd ? Sd(a) : "number" === typeof a.length && 0 <= a.length ? vi(a) : [] } } else a = []; return a } function pk(a) { if (0 > a) return []; for (var c = [], b = 0; b <= a; b += 1)c.push(b); return c } function Cn(a, c) { if (!Qc(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function Td(a, c, b) { return b ? a : c } function Jb(a,
                    c, b) { try { if (V(c)) { var d = Da(arguments).slice(3); sa(b) ? c.apply(void 0, d) : D.apply(void 0, ja([c, b], d))() } } catch (e) { Ld(a, A(e, vb), 0) } } function vb(a) { throw a; } function Ld(a, c, b) { return Lb("setTimeout", a)(c, b) } function oa(a, c) { return Lb("clearTimeout", a)(c) } function Ud() { return [] } function jc() { return {} } function Lb(a, c) { var b = w(c, a), d = w(c, "constructor.prototype." + a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d } function Vd(a, c) {
                        return function () {
                            var b = Da(arguments),
                                d = b[0]; b = b.slice(1); var e = U(d), f = e.o("m631", {}), g = w(f, a); g || (g = z(c), f[a] = g, e.C("m631", f)); return g.apply(void 0, ja([d], b))
                        }
                    } function Ka(a, c) { return c ? a(c) : a() } function z(a, c) { var b = [], d = []; var e = c ? c : N; return function () { var f = Da(arguments), g = e.apply(void 0, f), k = wi(g, d); if (-1 !== k) return b[k]; f = a.apply(void 0, f); b.push(f); d.push(g); return f } } function cc(a) { return !a } function rb(a, c) { return c } function N(a) { return a } function tb(a) {
                        if (sf) return sf; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b =
                            a.Array && a.Array.prototype && ma(a.Array.prototype.indexOf, "indexOf"); return sf = a = c && b ? function (d, e) { return b.call(e, d) } : Dn
                    } function Dn(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function En(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function Fn(a) { return S(a) ? [] : Wc(function (c, b) { c.push([b, a[b]]); return c }, [], xi(a)) } function Gn(a, c) { return Wc(function (b, d, e) { d = a(d, e); return b.concat(ea(d) ? d : [d]) }, [], c) } function Hn(a, c) { return Wc(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function In() {
                        var a =
                            Da(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) Lc(b, d) && (c[d] = b[d]); Lc(b, "toString") && (c.toString = b.toString) } return c
                    } function xi(a) { var c = [], b; for (b in a) Lc(a, b) && c.push(b); return c } function Jn(a, c) { return 1 <= yi(ta(a), c).length } function yi(a, c) { return Wc(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Lc(a, c) { return sa(a) ? !1 : tf.call(a, c) } function ea(a) { if (Xc) return Xc(a); (Xc = ma(Array.isArray, "isArray")) || (Xc = Kn); return Xc(a) } function x() {
                        var a = Da(arguments),
                            c = a.shift(); return function () { var b = c.apply(void 0, arguments); return K(zi, b, a) }
                    } function Bc(a, c) { void 0 === c && (c = {}); if (!a || 1 > a.length) return c; K(function (b, d, e) { if (e === a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {}); return b[d] }, c, a); return c } function w(a, c) { return a ? K(function (b, d) { if (sa(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function Vb(a, c) { return M([a, c], K) } function $a(a) { return fa("test", a) } function fa(a, c) { return D(c[a], c) } function A(a, c) {
                        return M([a],
                            c)
                    } function M(a, c) { return D.apply(void 0, ja([c, null], a)) } function Ln() { var a = Da(arguments), c = a[0], b = a[1], d = a.slice(2); return function () { var e = ja(d, Da(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(c, ja([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Ai(f, e, b); delete b[f]; return e } return Ai(c, e) } } function Ai(a, c, b) {
                        void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; V(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1],
                            c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e](); return f
                    } function Wc(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function lc(a) { return !Za(a) && !S(a) && "[object Object]" === lf(a) } function sa(a) { return S(a) || Za(a) } function V(a) { return "function" === typeof a } function gf(a) { return ka(function (c, b) { return a(b, c) }) } function ka() { var a = Da(arguments), c = a.shift(); return function () { var b = Da(arguments); return c.length > b.length + a.length ? ka.apply(void 0, ja([c], a, b)) : c.apply(void 0, ja(a, b)) } }
            function Wd(a) { return function (c) { return function (b) { return a(b, c) } } } function Ea(a) { return function (c) { return function (b) { return a(c, b) } } } function zi(a, c) { return c(a) } function Mn(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function Da(a) { if (Sd) try { return Sd(a) } catch (c) { } return vi(a) } function vi(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function uf(a, c) {
                uf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) {
                    for (var e in d) d.hasOwnProperty(e) &&
                        (b[e] = d[e])
                }; return uf(a, c)
            } function Rl(a) { return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}") } function ac(a, c) { if (a) { var b = ("" + a).replace(sh, ""); return c && b.length > c ? b.substr(0, c) : b } return "" } function hg(a) { return "" + a } function vf(a, c) { return a && -1 !== sg(a, c) } function sg(a,
                c) { if (Bi) var b = Bi.call(a, c); else a: { b = 0; for (var d = a.length - c.length, e = 0; e < a.length; e += 1) { b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) { b = e - c.length + 1; break a } if (!b && e > d) break } b = -1 } return b } function Oa(a) { return "string" === typeof a } function lf(a) { return Object.prototype.toString.call(a) } function ma(a, c) { return ua(c, a) && a } function ua(a, c) { var b = Xd(a, c); c && !b && wf.push([a, c]); return b } function Xd(a, c) {
                    if (!c || "function" !== typeof c) return !1; var b = new RegExp("function\\s*(" + a + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}",
                        "i"); try { return b.test("" + c) } catch (d) { } return !1
                } function I() { } function Ba(a, c) { function b() { this.constructor = a } uf(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } function ja() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function Nn() { } function On(a, c) { return function () { a.apply(c, arguments) } } function ya(a) {
                    if (!(this instanceof ya)) throw new TypeError("Promises must be constructed via new");
                    if ("function" !== typeof a) throw new TypeError("not a function"); this.ab = 0; this.qg = !1; this.pb = void 0; this.cc = []; Ci(a, this)
                } function Di(a, c) { for (; 3 === a.ab;)a = a.pb; 0 === a.ab ? a.cc.push(c) : (a.qg = !0, ya.rg(function () { var b = 1 === a.ab ? c.Ek : c.Gk; if (null === b) (1 === a.ab ? xf : Yc)(c.wf, a.pb); else { try { var d = b(a.pb) } catch (e) { Yc(c.wf, e); return } xf(c.wf, d) } })) } function xf(a, c) {
                    try {
                        if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) {
                            var b = c.then; if (c instanceof
                                ya) { a.ab = 3; a.pb = c; yf(a); return } if ("function" === typeof b) { Ci(On(b, c), a); return }
                        } a.ab = 1; a.pb = c; yf(a)
                    } catch (d) { Yc(a, d) }
                } function Yc(a, c) { a.ab = 2; a.pb = c; yf(a) } function yf(a) { 2 === a.ab && 0 === a.cc.length && ya.rg(function () { a.qg || ya.Yi(a.pb) }); for (var c = 0, b = a.cc.length; c < b; c++)Di(a, a.cc[c]); a.cc = null } function Pn(a, c, b) { this.Ek = "function" === typeof a ? a : null; this.Gk = "function" === typeof c ? c : null; this.wf = b } function Ci(a, c) {
                    var b = !1; try { a(function (d) { b || (b = !0, xf(c, d)) }, function (d) { b || (b = !0, Yc(c, d)) }) } catch (d) {
                        b ||
                            (b = !0, Yc(c, d))
                    }
                } function ib(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function tc(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function Jd(a, c, b, d, e, f) {
                    if (Wg(a, Ic, c)) {
                        c = [c + "=" + encodeURIComponent(b)]; c = c.concat(Qn(a)); d && (b = new Date, b.setTime(b.getTime() + 6E4 * d), c.push("expires=" + b.toUTCString())); e && (d = e.replace(Rn, ""), c.push("domain=" + d)); c.push("path=" + (f || "/")); f = H(";", c); try {
                            a.document.cookie =
                                f
                        } catch (g) { }
                    }
                } function Tb(a, c, b) { void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = Sn(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return { Lb: function (g, k, m) { Jd(a, "" + c + g + f, "", -100, k || e, m); return this }, o: function (g) { return Ic(a, "" + c + g + f) }, C: function (g, k, m, p, r) { Jd(a, "" + c + g + f, k, m, p || e, r); return this } } } function Eb(a, c) {
                    var b = Tn(a); return b ? (b.href = c, {
                        protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname ||
                            "/", path: (b.pathname || "/") + b.search, href: b.href
                    }) : {}
                } function eb(a, c) {
                    a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] <<
                        16 | b[1], b[2] << 16 | b[3]]
                } function Ob(a, c) { a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]] } function wc(a, c) {
                    c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 -
                        c]
                } function bb(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function la(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function Ei(a) { a = la(a, [0, a[0] >>> 1]); a = eb(a, [4283543511, 3981806797]); a = la(a, [0, a[0] >>> 1]); a = eb(a, [3301882366, 444984403]); return a = la(a, [0, a[0] >>> 1]) } function Un(a, c) {
                    void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length % 16, f = b.length - e, g = [0, d]; d = [0, d]; var k = [2277735313, 289559509], m = [1291169091, 658871167], p; for (p = 0; p < f; p += 16) {
                        var r = [b.charCodeAt(p + 4) & 255 | (b.charCodeAt(p +
                            5) & 255) << 8 | (b.charCodeAt(p + 6) & 255) << 16 | (b.charCodeAt(p + 7) & 255) << 24, b.charCodeAt(p) & 255 | (b.charCodeAt(p + 1) & 255) << 8 | (b.charCodeAt(p + 2) & 255) << 16 | (b.charCodeAt(p + 3) & 255) << 24]; var t = [b.charCodeAt(p + 12) & 255 | (b.charCodeAt(p + 13) & 255) << 8 | (b.charCodeAt(p + 14) & 255) << 16 | (b.charCodeAt(p + 15) & 255) << 24, b.charCodeAt(p + 8) & 255 | (b.charCodeAt(p + 9) & 255) << 8 | (b.charCodeAt(p + 10) & 255) << 16 | (b.charCodeAt(p + 11) & 255) << 24]; r = eb(r, k); r = wc(r, 31); r = eb(r, m); g = la(g, r); g = wc(g, 27); g = Ob(g, d); g = Ob(eb(g, [0, 5]), [0, 1390208809]); t = eb(t, m); t =
                                wc(t, 33); t = eb(t, k); d = la(d, t); d = wc(d, 31); d = Ob(d, g); d = Ob(eb(d, [0, 5]), [0, 944331445])
                    } r = [0, 0]; t = [0, 0]; switch (e) {
                        case 15: t = la(t, bb([0, b.charCodeAt(p + 14)], 48)); case 14: t = la(t, bb([0, b.charCodeAt(p + 13)], 40)); case 13: t = la(t, bb([0, b.charCodeAt(p + 12)], 32)); case 12: t = la(t, bb([0, b.charCodeAt(p + 11)], 24)); case 11: t = la(t, bb([0, b.charCodeAt(p + 10)], 16)); case 10: t = la(t, bb([0, b.charCodeAt(p + 9)], 8)); case 9: t = la(t, [0, b.charCodeAt(p + 8)]), t = eb(t, m), t = wc(t, 33), t = eb(t, k), d = la(d, t); case 8: r = la(r, bb([0, b.charCodeAt(p + 7)], 56));
                        case 7: r = la(r, bb([0, b.charCodeAt(p + 6)], 48)); case 6: r = la(r, bb([0, b.charCodeAt(p + 5)], 40)); case 5: r = la(r, bb([0, b.charCodeAt(p + 4)], 32)); case 4: r = la(r, bb([0, b.charCodeAt(p + 3)], 24)); case 3: r = la(r, bb([0, b.charCodeAt(p + 2)], 16)); case 2: r = la(r, bb([0, b.charCodeAt(p + 1)], 8)); case 1: r = la(r, [0, b.charCodeAt(p)]), r = eb(r, k), r = wc(r, 31), r = eb(r, m), g = la(g, r)
                    }g = la(g, [0, b.length]); d = la(d, [0, b.length]); g = Ob(g, d); d = Ob(d, g); g = Ei(g); d = Ei(d); g = Ob(g, d); d = Ob(d, g); return ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) + ("00000000" +
                        (g[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                } function Zc(a, c, b) { var d = c.getAttribute("itemtype"); b = Ab('[itemprop~="' + b + '"]', a, c); return d ? Y(function (e) { return e.parentNode && Bb("[itemtype]", a, e.parentNode) === c }, b) : b } function Wa(a, c, b) { return (a = Zc(a, c, b)) && a.length ? a[0] : null } function Ra(a) { if (!a) return ""; a = ea(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || a[0].innerText || "" : "" } function Fi(a) {
                    return a ? a.attributes &&
                        a.getAttribute("datetime") ? a.getAttribute("datetime") : Ra(a) : ""
                } function Gi(a) { return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] : "" } function Vn(a, c) { var b = Gi(a); Hi = fn(a, function () { var d = Gi(a); d !== b && (c(), b = d) }, 200, "t.h"); return D(en, null, a, Hi) } function Wn(a, c, b) {
                    var d, e, f = c.sa, g = c.ag, k = c.cd, m = U(a), p = wa((d = {}, d.wh = "1", d.pv = "1", d)); "1" === f && a.Xi && a.Xi.Fl && p.C("ad", "1"); g && p.C("ut", "1"); f = m.o("lastReferrer"); d = R(a).href; k = { M: (e = {}, e["page-url"] = k || d, e["page-ref"] = f, e), Y: p }; b(k, c)["catch"](C(a, "g.s"));
                    m.C("lastReferrer", d)
                } function Xn(a, c) { if (Qd(a)) return oa(a, c); zf[c] = !0; return oa(a, Yd[c] || 0) } function Yn(a, c, b) {
                    function d() { zf[l] = !0; f(!1); c() } function e() { oa(a, Yd[l]); if (zf[l]) f(!1); else { var n = Math.max(0, b - (r ? t : t + k(ba) - v)); n ? Yd[l] = Z(a, d, n, "u.t.d.c") : d() } } function f(n) { E(function (u) { var O = u[0], y = u[1]; u = u[2]; n ? q.D(O, y, u) : q.Fc(O, y, u) }, h) } var g = A(!1, f); if (Qd(a)) return { id: Z(a, c, b, "u.t.d"), Ag: g }; var k = da(a), m = !1, p = !1, r = !0, t = 0, v = k(ba), q = ia(a), l = Ii; Ii += 1; Yd[l] = 0; var h = [[a, ["blur"], function () {
                        r = m = p = !0;
                        t += k(ba) - v; v = k(ba); e()
                    }], [a, ["focus"], function () { m || p || (t = 0); v = k(ba); m = p = !0; r = !1; e() }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () { p || (m = !0, r = !1, p = !0, e()) }]]; f(!0); e(); return { id: l, Ag: g }
                } function Il(a, c) { var b, d = fc(c), e = Aa.Qc; if (d && Zb("ym-advanced-informer", d)) { var f = d.getAttribute("data-lang"), g = parseInt(d.getAttribute("data-cid") || "", 10); if (g || 0 === g) w(a, "Ya." + e + ".informer")((b = {}, b.i = d, b.id = g, b.lang = f, b)), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1 } }
            function Kc(a, c, b) { a = c && (vf(c.className, "ym-disable-keys") || vf(c.className, "-metrika-nokeys")); return b && c ? a || !!on(["ym-disable-keys", "-metrika-nokeys"], c).length : a } function bh(a, c) { return Od(c) ? "password" === c.type || c.name && J(c.name.toLowerCase(), Ji) || c.id && J(c.id.toLowerCase(), Ji) : !1 } function Ki(a, c) { var b = Math.max(0, Math.min(c, 65535)); Ua(a, [b >> 8, b & 255]) } function yb(a, c) { Ua(a, [c & 255]) } function ab(a, c, b) { return -1 !== tb(a)(b, Zn) ? (yb(c, b), !1) : !0 } function P(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;)Ua(a,
                    [b & 127 | 128]), b >>= 7; Ua(a, [b])
            } function Af(a, c) { P(a, c.length); for (var b = 0; b < c.length; b += 1)P(a, c.charCodeAt(b)) } function Bf(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)Ki(a, b.charCodeAt(d)) } function $n(a, c) { var b = []; if (ab(a, b, 27)) return []; P(b, c); return b } function ao(a, c) {
                var b = za(c); if (!b) return c[Na] = -1, null; var d = +c[Na]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.Ol) return null; e = e.parentElement } e = 64; var f = Md(a, c),
                    g = f && f[Na] ? f[Na] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var k = bo()[b]; k || (e |= 2); var m = oi(a, c); m || (e |= 4); var p = Je(a, c); (f = f ? Je(a, f) : null) && p[0] === f[0] && p[1] === f[1] && p[2] === f[2] && p[3] === f[3] && (e |= 8); Yb[d].H = p[0] + "x" + p[1]; Yb[d].size = p[2] + "x" + p[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if (ab(a, f, 1)) return null; P(f, d); yb(f, e); P(f, g); k ? yb(f, k) : Bf(f, b); m && P(f, m); e & 8 || (P(f, p[0]), P(f, p[1]), P(f, p[2]), P(f, p[3])); e & 32 && Bf(f, c.id); yb(f, 0); return f
            } function co(a, c) {
                var b = c[Na]; if (!b || 0 > b || !He(c) || !c.form || dh(a,
                    c.form)) return []; var d = qi(a, c.form); if (0 > d) return []; if (Od(c)) { var e = { text: 0, color: 0, Wc: 0, Yl: 0, "datetime-local": 0, email: 0, ih: 0, ym: 0, search: 0, Dm: 0, time: 0, url: 0, month: 0, Gm: 0, password: 2, xm: 3, Ul: 4, file: 6, image: 7 }; e = e[c.type] } else { e = { Kl: 1, Ml: 5 }; var f = za(c); e = S(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, k = g.length, m = 0, p = 0; m < k; m += 1)if (g[m].name === c.name) { if (g[m] === c) { f = p; break } p += 1 } if (0 > f) return []; g = []; if (ab(a, g, 7)) return []; P(g, b); P(g, d); P(g, e); Af(g, c.name || ""); P(g, f); return g
            }
            function eo(a, c, b) { var d = qi(a, b); if (0 > d) return []; var e = b.elements, f = e.length; b = []; for (var g = 0; g < f; g += 1)if (!pi(e[g])) { var k = e[g][Na]; k && 0 < k && b.push(k) } e = []; if (ab(a, e, 11)) return []; P(e, c); P(e, d); P(e, b.length); for (a = 0; a < b.length; a += 1)P(e, b[a]); return e } function Xb(a, c, b) { void 0 === b && (b = []); for (var d = []; c && !sl(a, c, b); c = Md(a, c))d.push(c); E(function (e) { Yb.ne += 1; var f = Yb.ne; e[Na] = f; Yb[f] = {}; f = ao(a, e); e = co(a, e); f && e && (Ua(b, f), Ua(b, e)) }, fo(d)); return b } function go(a) { var c = a.Ea; if (!Jc || c && !c.fromElement) return $g(a) }
            function ho(a) { var c = a.Ea; if (c && !c.toElement) return Ie(a) } function Li(a) { var c = fc(a.Ea); if (c && sd(c)) { var b = Zg(a, c); var d = kb(a.b), e = []; ab(a.b, e, 17) ? a = [] : (P(e, d), P(e, c[Na]), a = e); return ja(b, a) } } function Mi(a) { var c = a.b, b = a.Ea.target; if (b && sd(b)) { c = Xb(c, b); var d = kb(a.b), e = []; ab(a.b, e, 18) ? a = [] : (P(e, d), P(e, b[Na]), a = e); return ja(c, a) } } function Ni(a) {
                var c = a.b, b = fc(a.Ea); if (!b || bh(c, b) || Kc(c, b)) return []; if (He(b)) {
                    var d = U(c).o("isEU"), e = kc(c, b, d); d = kc(c, b); if (Pd(b)) var f = b.checked; else f = b.value, f = e ? H("",
                        Oi(f.split(""))) : f; c = Xb(c, b); e = kb(a.b); var g = []; ab(a.b, g, 39) ? a = [] : (P(g, e), P(g, b[Na]), Bf(g, String(f)), yb(g, d ? 1 : 0), a = g); return ja(c, a)
                }
            } function Zd(a) {
                var c = a.b, b = a.Ea, d = fc(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = A(e, Ua); d && sd(d) ? f(Zg(a, d)) : f(Xb(c, d)); var g = fh(c, b); a = kb(a.b); f = b.type; var k = [g.x, g.y]; g = b.which; b = b.button; var m; var p = Nd(c, d); var r = p[0]; for (p = p[1]; d && (!r || !p);)if (d = Md(c, d)) p = Nd(c, d), r = p[0], p = p[1]; d ? (r = d[Na], !r || 0 > r ? c = [] : (p = (m = {}, m.mousemove = 2, m.click = 32, m.dblclick = 33, m.mousedown =
                    4, m.mouseup = 30, m.touch = 12, m)[f]) ? (m = [], d = pf(c, d), ab(c, m, p) ? c = [] : (P(m, a), P(m, r), P(m, Math.max(0, k[0] - d.left)), P(m, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, yb(m, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = m)) : c = []) : c = []; return ja(e, c)
            } function io(a) {
                var c = null, b = a.b, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Za(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !==
                    typeof e) return []; try { for (; c && 1 !== c.nodeType;)c = c.parentNode } catch (g) { return [] } if (!c) return []; d = kc(b, c) || Kc(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = kc(b, d) || Kc(b, d, !0), f += 1; if (e !== Cf) return Cf = e, d = d ? H("", Oi(e.split(""))) : e, e = kb(a.b), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], ab(a.b, c, 29) ? a = [] : (P(c, e), Af(c, b), Af(c, d), a = c), a
            } function jo(a) { return ja(Zd(a), io(a) || []) }
            function Pi(a) { return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0) } function Qi(a) { var c = []; Df || (Df = !0, Cf && c.push.apply(c, $n(a.b, kb(a.b))), Gb(a.b, function () { Df = !1 }, "fv.c")); return c } function Ri(a, c, b, d) { var e = fc(c); if (!e || ah(a, e)) return []; var f = nd(e), g = td(e); c = kc(a, e); var k = U(a); if (!f && (g && k.o("isEU") || Kc(a, e))) a = []; else { f = Xb(a, e); k = kb(a); g = []; if (ab(a, g, 38)) a = []; else { P(g, k); Ki(g, b); yb(g, d); a = e[Na]; if (!a || 0 > a) a = 0; P(g, a); yb(g, c ? 1 : 0); a = g } a = ja(f, a) } return a }
            function ko(a) { var c = a.b, b = a.Ea, d = b.keyCode, e = Pi(b), f = [], g = A(f, Ua); if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Ri(c, b, d, e | 16)), Ef = !1, Gb(c, function () { Ef = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Qi(a)); return f } function lo(a) {
                var c = a.b; a = a.Ea; var b = []; Ef && !Ff && 0 !== a.which && (b.push.apply(b, Ri(c, a, a.charCode || a.keyCode, Pi(a))), Ff =
                    !0, Gb(c, function () { Ff = !1 }, "fv.kp")); return b
            } function Si(a) { var c = a.b, b = fc(a.Ea); if (!b || dh(c, b)) return []; var d = []; if ("FORM" === b.nodeName) { for (var e = b.elements, f = 0; f < e.length; f += 1)pi(e[f]) || d.push.apply(d, Xb(c, e[f])); d.push.apply(d, eo(c, kb(a.b), b)) } return d } function mo(a) { var c = a.flush; a = fc(a.Ea); "BODY" === za(a) && c() } function $d(a, c, b) { return function () { var d = La(a, c), e = Da(arguments); if (d) return b.apply(void 0, e) } } function no(a, c, b) { return function () { var d = La(a, c), e = Da(arguments); b.apply(void 0, e); return d } }
            function oo(a, c, b, d) { return function () { for (var e = [], f = 0; f < arguments.length; f++)e[f] = arguments[f]; f = rd(function (g) { return !1 === g }, e); return 0 < e.length && f || !b.length || !d ? d : x.apply(void 0, K(function (g, k, m) { return !1 === e[m] ? g : g.concat(function () { for (var p = [], r = 0; r < arguments.length; r++)p[r] = arguments[r]; return k.apply(void 0, ja([a, c], p)) }) }, [], b))(d) } } var Sc = { construct: "Metrika2", callbackPostfix: "2", version: "25rt5xty9ed9wej4vp" }, wf = [], Bi = ma(String.prototype.indexOf, "indexOf"), sh = /^\s+|\s+$/g, Sd = ma(Array.from,
                "from"), Ti = ma(Array.prototype.join, "join"), H = Ti ? function (a, c) { return Ti.call(c, a) } : Mn, ta = Ea(function (a, c) { return a === c }), mc = Ea(function (a, c) { a(c); return c }), oc = Ea(H), na = Ea(zi), Za = ta(null), S = ta(void 0), Ui = ma(Function.prototype.bind, "bind"), D = Ui ? function () { var a = Da(arguments); return Ui.apply(a[0], ja([a[1]], a.slice(2))) } : Ln, ph = Ea(M), Vk = Ea(fa), Vi = ma(Array.prototype.reduce, "reduce"), K = Vi ? function (a, c, b) { return Vi.call(b, a, c) } : Wc, W = Wd(w), Hb = W("length"), of = x, Xc, Kn = x(lf, ta("[object Array]")), tf = Object.prototype.hasOwnProperty,
                Ha = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : Fn, qa = Object.keys ? Object.keys : xi, F = Object.assign || In, Yg = Ea(function (a, c) { return F({}, a, c) }), sf, wi = tb(window), po = Wd(wi), U = z(function (a) { a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return { Db: function (b, d) { tf.call(c, b) || (c[b] = d); return this }, C: function (b, d) { c[b] = d; return this }, o: function (b, d) { var e = c[b]; return tf.call(c, b) || S(d) ? e : d } } }), rd = Array.prototype.every ? function (a, c) { return Array.prototype.every.call(c, a) } : function (a, c) {
                    return K(function (b,
                        d) { return b ? a(d) : !1 }, !0, c)
                }, Wi = ma(Array.prototype.filter, "filter"), Y = Wi ? function (a, c) { return Wi.call(c, a) } : yi, nc = Ea(Y), Ta = Td(function (a, c) { return Array.prototype.find.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] }, ua("find", Array.prototype.find)), J = Array.prototype.includes ? function (a, c) { return Array.prototype.includes.call(c, a) } : Jn, Ib = Wd(J), Xi = z(function (a) { a = w(a, "navigator") || {}; var c = w(a, "userAgent") || ""; return { Xg: -1 < (w(a, "vendor") || "").indexOf("Apple"), Xh: c } }),
                Qc = z(function (a) { var c = w(a, "document.documentElement.style"); a = w(a, "InstallTrigger"); return !(!(c && "MozAppearance" in c) || sa(a)) }), Yi = ma(Array.prototype.map, "map"), B = Yi && Cn(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? Yi.call(c, a) : [] } : Hn, E = B, Sb = Array.prototype.flatMap ? function (a, c) { return Array.prototype.flatMap.call(c, a) } : Gn, Va = Ea(B), Kh = Wd(B), Ca = Td(function (a, c) { return Array.prototype.some.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 },
                    ua("some", Array.prototype.some)), ae = z(tb), hi = Ea(we), Zi = ma(Array.prototype.reverse, "reverse"), fo = Zi ? function (a) { return Zi.call(a) } : Bn, rc = z(x(W("String.fromCharCode"), A("fromCharCode", ua), cc)), qb = z(W("navigator.userAgent")), Rd = z(x(qb, $a(/ipad|iphone|ipod/i))), Gf = z(function (a) { return w(a, "navigator.platform") || "" }), Ah = z(function (a) {
                        a = Xi(a); var c = a.Xh; return a.Xg && (!c.match(/Safari/) && c.match(/Mobile/) || c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== c.indexOf("FB_IAB") || -1 !== c.indexOf("FBAV") ||
                            -1 !== c.indexOf("OKApp") || -1 !== c.indexOf("GSA/"))
                    }), Pc = z(function (a) { a = Xi(a); var c = a.Xh; return a.Xg && !c.match("CriOS") }), zd = z(x(qb, fa("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))), qo = /Chrome\/(\d+)\./, ro = z(function (a) { return (a = (w(a, "navigator.userAgent") || "").match(qo)) && a.length ? 76 <= parseInt(a[1], 10) : !1 }), Vc = z(function (a) {
                        var c = (qb(a) || "").toLowerCase(); a =
                            Gf(a); return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                    }), so = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), to = z(function (a) { var c = w(a, "navigator.connection.type"); if (S(c)) return null; a = ae(a)(c, so); return -1 === a ? c : "" + a }), Qd = z(x(W("document.addEventListener"), cc)), $i = z(function (a) { var c = w(a, "navigator") || {}; return K(function (b, d) { return b || w(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), wh = z(function (a) {
                        var c =
                            w(a, "navigator") || {}; a = $i(a); Oa(a) || (a = "", c = w(c, "languages.0"), Oa(c) && (a = c)); return a.toLowerCase().split("-")[0]
                    }), ub = z(function (a) { var c = !1; try { c = a.top !== a } catch (b) { } return c }), uo = z(function (a) { var c = !1; try { c = a.top.contentWindow } catch (b) { } return c }), vo = z(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }), wo = z(function (a) {
                        var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                            b = w(a, "external"); b = -1 !== (w(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum"); var d = w(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(Ca(A(a, w), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ca(A(w(a, "document"), w), c) || b || d && Ca(D(d.getAttribute, d), e))
                    }), xo = z(function (a) { return !!(Ca(A(a, w), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(qb(a)) || w(a, "navigator.webdriver") || w(a, "isChrome") && !w(a, "chrome")) }), yo = z(function (a) {
                        return rd(A(a,
                            w), ["ia_document.shareURL", "ia_document.referrer"])
                    }), zo = z(function (a) { a = w(a, "navigator.plugins"); return !!(a && Hb(a) && Ca(x(W("name"), $a(/Chrome PDF Viewer/)), a)) }), Ao = new RegExp(H("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), rm = z(x(W("navigator.userAgent"), $a(Ao))), Hf =
                    z(function (a) { var c = qb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (c ? +c[1] : 0) ? !0 : (Rd(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Pc(a) }), Bo = Sc.construct, If = Qd(window), Aa = { Hi: 24226447, yi: 26302566, Mi: 51533966, Gl: 65446441, Ib: "https:", Nc: "631", Qc: Bo, Gi: If ? 512 : 2048, Ei: If ? 512 : 2048, Fi: If ? 100 : 400, Hl: 100, Il: "noindex" }, Nb = {}, X = z(function (a) { return a.id + ":" + a.sa }), Fa = { id: "id", ag: "ut", sa: "type", $e: "ldc", Sb: "nck", cd: "url", Gj: "referrer" }, Co =
                    /^\d+$/, Pb = { id: function (a) { a = "" + (a || "0"); Co.test(a) || (a = "0"); try { var c = parseInt(a, 10) } catch (b) { c = 0 } return c }, sa: function (a) { return "" + (a || 0 === a ? a : "0") }, Sb: Boolean, ag: Boolean }; Fa.Rc = "defer"; Pb.Rc = Boolean; Fa.Al = "yaDisableGDPR"; Fa.Bl = "yaGDPRLang"; Fa.exp = "experiments"; Fa.ve = "ecommerce"; Pb.ve = function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }; Fa.ia = "params"; Fa.Vd = "userParams"; Fa.Kc = "accurateTrackBounce"; Fa.Th = "triggerEvent"; Pb.Th = Boolean; Fa.Gh = "sendTitle"; Pb.Gh = function (a) { return !!a || S(a) }; Fa.Wf = "trackHash";
            Pb.Wf = Boolean; Fa.sj = "directCampaign"; Fa.jj = "clickmap"; Fa.Eb = "webvisor"; Pb.Eb = Boolean; Fa.ml = "trustedDomains"; Fa.hc = "childIframe"; Pb.hc = Boolean; Fa.Rd = "trackLinks"; Fa.uj = "enableAll"; var aj = K(function (a, c) { var b = c[0]; a[b] = { mh: c[1], yk: Pb[b] }; return a }, {}, Ha(Fa)), xn = "hash host hostname href pathname port protocol search".split(" "), Th = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "), lm = z(function (a) { a = R(a).hostname.split("."); return a[a.length - 1] }), bj = z(function (a) {
                return -1 !==
                    R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
            }), lh = z(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), Do = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/, zh = z(function (a) { a = R(a).hostname; var c = !1; a && (c = -1 !== a.search(Do)); return c }), Eo = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Ml = z(function (a) { a = R(a).hostname; var c = !1; a && (c = -1 !== a.search(Eo)); return c }), Fo = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/, Go = z(function (a) { a = R(a).hostname; var c = !1; a && (c = -1 !== a.search(Fo)); return c }), Qn = z(function (a) { var c = []; ro(a) && "https:" === R(a).protocol && (c.push("SameSite=None"), c.push("Secure")); return c }), Ho = z(function (a) { var c = !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", I, b) } catch (d) { } return c }),
                Io = Ea(function (a, c) { return a ? F({ capture: !0, passive: !0 }, c || {}) : !!c }), ia = z(function (a) { a = Ho(a); var c = Io(a), b = {}; return F(b, { D: function (d, e, f, g) { E(function (k) { var m = c(g); si(d, k, f, m, !1) }, e); return D(b.Fc, b, d, e, f, g) }, Fc: function (d, e, f, g) { E(function (k) { var m = c(g); si(d, k, f, m, !0) }, e) } }) }), Jo = setTimeout; ya.prototype["catch"] = function (a) { return this.then(null, a) }; ya.prototype.then = function (a, c) { var b = new this.constructor(Nn); Di(this, new Pn(a, c, b)); return b }; ya.prototype["finally"] = function (a) {
                    var c = this.constructor;
                    return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) })
                }; ya.all = function (a) {
                    return new ya(function (c, b) {
                        function d(k, m) { try { if (m && ("object" === typeof m || "function" === typeof m)) { var p = m.then; if ("function" === typeof p) { p.call(m, function (r) { d(k, r) }, b); return } } e[k] = m; 0 === --f && c(e) } catch (r) { b(r) } } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array")); var e = Array.prototype.slice.call(a);
                        if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
                    })
                }; ya.resolve = function (a) { return a && "object" === typeof a && a.constructor === ya ? a : new ya(function (c) { c(a) }) }; ya.reject = function (a) { return new ya(function (c, b) { b(a) }) }; ya.race = function (a) { return new ya(function (c, b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)ya.resolve(a[d]).then(c, b) }) }; ya.rg = "function" === typeof setImmediate && function (a) { setImmediate(a) } ||
                    function (a) { Jo(a, 0) }; ya.Yi = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var Q = window.Promise, Ko = ma(Q, "Promise"), cj = ma(w(Q, "resolve"), "resolve"), dj = ma(w(Q, "reject"), "reject"), ej = ma(w(Q, "all"), "all"); if (J(!1, [Ko, cj, dj, ej])) Q = ya; else { var be = function (a) { return new Promise(a) }; be.resolve = D(cj, Q); be.reject = D(dj, Q); be.all = D(ej, Q); Q = be } var hn = ["network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], $c, Hd = function (a) {
                        return function (c) {
                            if ($c) return new $c(c);
                            if (ua("Error", a.Error)) return $c = a.Error, new a.Error(c); $c = wn; return new $c(c)
                        }
                    }(window), gn = $a(/^err.kn/), tn = /[^a-z0-9.:-]/, un = ka(function (a, c, b) { var d, e = new a.XMLHttpRequest, f = b.oa, g = F(b.fg ? (d = {}, d.wmode = "7", d) : {}, b.yc); return new Q(function (k, m) { e.open(b.ai || "GET", c + "?" + Cc(g), !0); e.withCredentials = !1 !== b.ci; b.Qf && (e.timeout = b.Qf); of(Ha, Va(function (r) { e.setRequestHeader(r[0], r[1]) }))(b.xc); var p = ka(vn)(a, e, hb(b.cb), b.fg, b.Sk, k, m); e.onreadystatechange = p; try { e.send(f) } catch (r) { } }) }), Lo = z(function (a) {
                        a =
                            w(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                    }), db = z(x(W("document"), A("createElement", Lb))), eh = z(function (a) { var c = w(a, "Element.prototype"); return c ? (a = Ta(function (b) { return ua(b, c[b]) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null }), Mo = ta("INPUT"), Od = x(za, Mo), No = ta("TEXTAREA"), qn = x(za, No), Oo = ta("SELECT"), rn = x(za, Oo), Pd = x(W("type"), $a(/^(checkbox|radio)$/)), He = x(za, $a(/^INPUT|SELECT|TEXTAREA$/)), sd =
                            x(za, $a(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Ke = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), pn = ["submit", "image", "hidden"], Po = ka(Bb), fj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                        ni = z(function () { for (var a = 59, c = {}, b = 0; b < fj.length; b += 1)c[fj[b]] = String.fromCharCode(a), a += 1; return c }), gj = ka(Ab), ki = {}, nf = {}; ki.p = 500; var ji = { i: "id", n: "name", h: "href", ty: "type" }; nf.h = !0; nf.c = !0; var vc = {}; vc.p = mi; vc.c = function (a, c, b) { (a = ac(w(c, "textContent"))) && b && (b = b(c), b.length && Ca(x(W("textContent"), ac, ta(a)), b) && (a = "")); Od(c) && (a = ac(c.getAttribute && c.getAttribute("value") || a)); return a }; var xc, mf = "button," + B(function (a) { return 'input[type="' + a + '"]' }, ["button", "submit", "reset", "file"]).join(",") +
                            ",a", ii = gj(mf), nn = (xc = {}, xc.A = "h", xc.BUTTON = "i", xc.DIV = "i", xc.INPUT = "ty", xc), mn = ka(function (a, c, b, d) { return new Q(function (e, f) { var g = Ub(a), k = c("img"), m = x(A(k, sc), A(hb(d.cb), f)), p = Ld(a, m, d.Qf || 3E3); k.onerror = m; k.onload = x(A(k, sc), A(null, e), M([a, p], oa)); m = F({}, d.yc); delete m.wmode; k.src = ri(b, d, m); Pc(a) && (F(k.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(k)) }) }), kn = ka(function (a, c, b) {
                                return new Q(function (d, e) {
                                    var f, g, k = "_ymjsp" + Ya(a), m = F((f = {}, f.callback = k,
                                        f), b.yc), p = M([a, k], ln); a[k] = function (t) { try { p(), sc(r), d(t) } catch (v) { e(v) } }; m.wmode = "5"; var r = Gc(a, (g = {}, g.src = ri(c, b, m), g)); if (!r) return p(), e(Hd("jp.s")); f = A(r, sc); f = x(f, A(hb(b.cb), e)); g = Ld(a, f, b.Qf || 1E4); g = M([a, g], oa); r.onload = g; r.onerror = x(p, g, f)
                                })
                            }), jn = ka(function (a, c, b, d) { return new Q(function (e, f) { if (!w(a, "navigator.onLine")) return f(); var g = F(d.yc, { "force-urlencoded": 1 }); return c(b + "?" + Cc(g), d.oa) ? e("") : f() }) }), ad; var dc = [gi, 0, Mb, kf, Tc]; var hj = [Mb]; hj.push(kf); var ij = zb(hj), bd = zb([Tc]), Qo =
                                zb([gi, Tc]), ce = zb([0, Mb, kf, Tc]); var va = (ad = {}, ad.h = ij, ad.f = ij, ad.er = bd, ad); va.d = bd; va.s = zb([Mb]); va.S = va.s; va.u = bd; va.m = Qo; va["2"] = dc; va["6"] = zb([0, Mb]); va.t = dc; va.a = ce; va.n = dc; va.p = zb([0, Mb]); va["4"] = zb([0, Mb, Tc]); va.r = ce; va["1"] = ce; va.g = ce; va.c = bd; va.e = dc; va.adb = bd; va.W = zb([0, Mb]); va["5"] = dc; var jf = z(function (a, c) { var b; (b = c ? va[c] : dc) || (b = []); b = K(function (d, e, f) { (e = e && e(a)) && d.push([f, e]); return d }, [], b); b.length || rf(); return b }, rb), Kb = ["0", "1", "2", "3"], pc = Kb[0], Re = Kb[1], cn = Kb[2], Ue = B(x(N, fa("concat",
                                    "GDPR-ok-view-detailed-")), Kb), yd = ja("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Ue, ["28"]), bn = "3 13 14 15 16 17 28".split(" "), fi = x(Va(W("ymetrikaEvent.type")), nc(Ib(yd))), Rn = /:\d+$/, Sn = z(function (a) { var c = (R(a).host || "").split("."); return 1 === c.length ? c[0] : K(function (b, d, e) { e += 1; 2 <= e && !b && (e = H(".", c.slice(-e)), Vg(a, e) && (b = e)); return b }, "", c) }), Wb = z(Tb), an = z(function (a) {
                                        di(a, "_ymBRC", "1"); var c =
                                            "1" !== ci(a, "_ymBRC"); c || ei(a, "_ymBRC"); return c
                                    }), Ma = z(bi), cd = z(bi, function (a, c, b) { return "" + c + b }), da = z(We), $h = Vd("r", function (a, c) { var b = Zh(a, c), d = b[0]; return !b[1] && d }), Xe = z(Yh, function (a, c) { return "{" + c.$e + c.Sb }), Sh = z(jc, X), Wh = ka(function (a, c) { for (var b = []; !Gd(c);) { var d = Zm(c); a(d, function (e) { return e(c) }); b.push(d) } return b }), $b = ka(function (a, c, b) { return b(a, c) }), Ne = ka(function (a, c) { return na(function (b, d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) }) }), Ro = ka(function (a, c) {
                                        return na(function (b,
                                            d) { return c(b, function (e) { try { a(e)($b(b, d)) } catch (f) { b(f) } }) })
                                    }), Tn = z(function (a) { if (a = db(a)) return a("a") }), Rh = ["webkitvisibilitychange", "visibilitychange"], sb = M([1, null], Td), og = M([1, 0], Td), Qh = z(function () { return { Qg: null, ze: [] } }, X), fb, So = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd",
                                        "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Ph = (fb = {}, fb.responseEnd = 1, fb.domInteractive = 1, fb.domContentLoadedEventStart = 1, fb.domContentLoadedEventEnd = 1, fb.domComplete = 1, fb.loadEventStart = 1, fb.loadEventEnd = 1, fb.unloadEventStart = 1, fb.unloadEventEnd = 1, fb.secureConnectionStart = 1, fb), To = z(Ud), Uo = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"],
                                        ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return w(c, "redirectCount") || w(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], Vo = z(Ud), Sm = { "*": "+", "-": "/", Nl: "=", "+": "*", "/": "-", "=": "_" }, dd = z(function (a) {
                                            a = w(a, "console"); var c = w(a, "log"); c =
                                                Xd("log", c) ? c : I; var b = w(a, "warn"), d = w(a, "error"); c = D(c, a); return { log: c, error: Xd("error", d) ? D(d, a) : c, warn: Xd("warn", b) ? D(b, a) : c }
                                        }), Wo = G("p.cd", function (a) { if (Vc(a) || Rd(a)) { var c = Ma(a); if (sa(c.o("jn"))) { c.C("jn", !1); var b = a.Vl || Pc(a) ? function () { } : /./; a = dd(a); b.toString = function () { c.C("jn", !0); return "Yandex.Metrika counter is initialized" }; a.log("%c%s", "color: inherit", b) } } }), Qm = /Firefox\/([0-9]+)/, Pm = /([0-9\\.]+) Safari/, Xo = /\sYptp\/\d\.(\d+)\s/, Rm = /Edg\/(\d+)\./, jj = z(function (a) {
                                            var c; a: {
                                                if ((c = qb(a)) &&
                                                    (c = Xo.exec(c)) && 1 < c.length) { c = parseInt(c[1], 10); break a } c = 0
                                            } return 50 <= c && 99 >= c || Hh(a, 79) ? !1 : !Hf(a) || Ah(a)
                                        }), ng = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                                    gk = z(function (a) { a = db(a)("canvas"); var c = w(a, "getContext"); if (!c) return null; try { var b = D(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), kj = ma(String.prototype.repeat, "repeat"), ig = kj ? function (a, c) { return kj.call(a, c) } : En, lj = /\/$/, Yo = z(x(da, na(function (a) { return -(new a.b.Date).getTimezoneOffset() }))), Zo = x(da, na(function (a) {
                                        a = new a.b.Date; return H("", B($m, [a.getFullYear(),
                                        a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                                    })), $o = x(da, na(Id)), mj = z(x(da, na(function (a) { return a.Ma[0] }))), ap = z(jc), bp = z(jc), cp = z(function (a) {
                                        var c = w(a, "webkitRequestFileSystem"); if (V(c) && !Vc(a)) return (new Q(D(c, a, 0, 0))).then(function () { var d = w(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {} }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](A(!0, N)); if (Qc(a)) return c = w(a, "navigator.serviceWorker"), Q.resolve(S(c)); c = w(a, "openDatabase"); if (Pc(a) &&
                                            V(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return Q.resolve(b) } return Q.resolve(!w(a, "indexedDB") && (w(a, "PointerEvent") || w(a, "MSPointerEvent")))
                                    }), dp = /(\?|&)turbo_uid=([\w\d]+)($|&)/, ep = z(function (a, c) { var b = Wb(a), d = R(a).search.match(dp); return d && 2 <= d.length ? (d = d[2], c.Sb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : "" }), fp = z(function (a) { return V(w(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null }), ca, mb, gp = z(function (a) { a = U(a); var c = a.o("counterNum", 0) + 1; a.C("counterNum", c); return c },
                                        x(rb, X)), lb = (ca = {}, ca.vf = A(Sc.version, N), ca.nt = to, ca.fp = function (a, c, b) {
                                            if (b.M && b.M.nohit) return null; c = X(c); b = ap(a); if (b[c]) return null; a: { var d = mj(a), e = w(a, "performance.getEntriesByType"); if (V(e)) { if (a = Y(x(N, W("name"), ta("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else { e = w(a, "chrome.loadTimes"); if (V(e) && (e = e.call(a.chrome), e = w(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = w(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0 } return a ?
                                                (b[c] = a, Math.round(a)) : null
                                        }, ca.fu = function (a, c, b) { var d = b.M; if (!d) return null; c = (w(a, "document.referrer") || "").replace(lj, ""); b = (d["page-ref"] || "").replace(lj, ""); d = d["page-url"]; a = R(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b }, ca.en = Lo, ca.la = $i, ca.ut = function (a, c, b) { var d = b.vd; (b = b.M) && (Go(a) || c.ag || d) && (b.ut = "noindex"); return null }, ca.v = A(Aa.Nc, N), ca.cn = gp, ca.dp = function (a) {
                                            var c = U(a), b = c.o("bt", {}); if (S(c.o("bt"))) {
                                                var d = w(a, "navigator.getBattery"); try { b.p = d ? d.call(a.navigator) : null } catch (e) { } c.C("bt",
                                                    b); b.p && b.p.then && b.p.then(function (e) { b.tl = e.charging && 0 === e.chargingTime })
                                            } return b.tl ? "1" : "0"
                                        }, ca.ls = z(function (a, c) { var b = cd(a, c.id), d = da(a), e = b.o("lsid"); return +e ? e : (d = Ya(a, 0, d(ba)), b.C("lsid", d), d) }, rb), ca.hid = qc, ca.z = Yo, ca.i = Zo, ca.et = $o, ca.c = x(W("navigator.cookieEnabled"), sb), ca.rn = x(N, Ya), ca.rqn = function (a, c, b) { b = b.M; if (!b || b.nohit) return null; a = cd(a, c.id); c = (a.o("reqNum", 0) || 0) + 1; a.C("reqNum", c); if (a.o("reqNum") === c) return c; a.Lb("reqNum"); return null }, ca.u = Xe, ca.tp = x(rb, ui, sb), ca.tpid = x(rb,
                                            function (a) { a = X(a); return Nb[a] && Nb[a].hl || null }), ca.w = function (a) { a = Uc(a); return a[0] + "x" + a[1] }, ca.s = function (a) { var c = w(a, "screen"); if (c) { a = w(c, "width"); var b = w(c, "height"); c = w(c, "colorDepth") || w(c, "pixelDepth"); return H("x", [a, b, c]) } return null }, ca.sk = W("devicePixelRatio"), ca.ifr = x(ub, sb), ca.j = x(vo, sb), ca.sti = function (a) { return ub(a) ? uo(a) ? "1" : null : null }, ca); lb.pri = function (a) { if (zd(a)) return null; var c = bp(a), b = c.ph; S(b) && (c.ph = null, cp(a).then(function (d) { c.ph = d })); return b ? 1 : null }; F(lb, (mb = {},
                                                mb.iss = x(wo, sb), mb.hdl = x(xo, sb), mb.iia = x(yo, sb), mb.cpf = x(zo, sb), mb.ntf = z(function (a) { a: switch (w(a, "Notification.permission")) { case "denied": a = !1; break a; case "granted": a = !0; break a; default: a = null }return Za(a) ? null : a ? 2 : 1 }), mb.eu = function (a) { return U(a).o("isEU") }, mb.ns = mj, mb.np = function (a) { if (Ya(a, 0, 100)) a = null; else { a = ac(Gf(a), 100); for (var c = [], b = 0; b < a.length; b++) { var d = a.charCodeAt(b); 128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128)) } a = Tg(c) } return a },
                                                mb.re = x(function (a, c) { return !c.Sb && $h(a, c) }, sb), mb)); lb.ds = function (a, c, b) { b = b.M; if ((void 0 === b ? {} : b).nohit) return null; a = hf(a); c = X(c); if (!a) return null; b = w(a, "timing"); if (!b) return null; a = Oh(a, b, Uo); c = Vo(c); return (c = Nh(c, a)) && H(",", c) }; lb.dsn = function (a, c, b) { b = b.M; if ((void 0 === b ? {} : b).nohit) return null; a = hf(a); c = X(c); if (!a) return null; b = null; if (V(a.getEntriesByType)) { var d = w(a.getEntriesByType("navigation"), "0"); d && (b = d) } if (!b) return null; a = Oh(a, b, So); c = To(c); return (c = Nh(c, a)) && H(",", c) }; lb.bu = fp;
            lb.td = ep; lb.wv = A(2, N); var Mm = qa(lb); lb.we = function (a, c) { return sb(c.Eb) }; lb.co = function (a) { return og(U(a).o("jn")) }; var Jm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Fd = z(function () { return { vc: {}, pending: {}, ic: {} } }), Jf = W("postMessage"), hp = ka(function (a, c, b, d) {
                var e, f = { Wc: da(a)(ba), key: a.Math.random(), dir: 0 }; b.length && (f.Wc = parseInt(b[0], 10), f.key = parseFloat(b[1]), f.dir = parseInt(b[2], 10)); F(d, c); c = (e = { data: d }, e.__yminfo = H(":", ["__yminfo", f.Wc, f.key, f.dir]), e); return {
                    ga: f,
                    L: cb(a, c) || ""
                }
            }), ip = ka(function (a, c, b, d, e) { c = c(d); var f = Fd(a), g = H(":", [c.ga.Wc, c.ga.key]); if (Jf(b)) { f.pending[g] = e; try { b.postMessage(c.L, "*") } catch (k) { delete f.pending[g]; return } Z(a, function () { delete f.pending[g] }, 5E3, "if.s") } }), jp = G("s.f", ip), kp = ka(function (a, c, b, d, e, f) {
                var g = null, k = null, m = Fd(a), p = null; try { g = ib(a, f.data), k = g.__yminfo, p = g.data } catch (r) { return } if (!sa(k) && k.substring && "__yminfo" === k.substring(0, 8) && !sa(p) && (g = k.split(":"), 4 === g.length)) if (k = c.id, c = g[1], a = g[2], g = g[3], !ea(p) && p.type &&
                    "0" === g && p.counterId) { if (!p.toCounter || p.toCounter == k) { m = null; try { m = f.source } catch (r) { } !Za(m) && Jf(m) && (f = d.ea(p.type, [f, p]), e = B(x(N, Yg(e)), f.concat([{}])), p = b([c, a, p.counterId], e), m.postMessage(p.L, "*")) } } else g === "" + k && ea(p) && Y(function (r) { return !(!r.hid || !r.counterId) }, p).length === p.length && (b = m.pending[H(":", [c, a])]) && b.apply(null, [f].concat(p))
            }), lp = G("s.fh", kp), Eh = z(function (a, c) {
                var b, d = Lb("getElementsByTagName", w(a, "document")), e = Fd(a), f = Jf(a), g = Dc(a), k = ia(a); if (!d || !f) return null; d = d.call(a.document,
                    "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + qc(a), b); Lm(a, g); b = hp(a, f); var m = jp(a, b([])); E(function (p) { var r = null; try { r = p.contentWindow } catch (t) { } r && m(r, { type: "initToChild" }, function (t, v) { g.ea("initToParent", [t, v]) }) }, d); ub(a) && m(a.parent, { type: "initToParent" }, function (p, r) { g.ea("parentConnect", [p, r]) }); k.D(a, ["message"], lp(a, c, b, g, f)); return { na: g, vc: e.vc, ic: e.ic, Gf: m }
            }, x(rb, X)), Hm = ka(function (a, c, b) { var d = b.b, e = b[a]; if (e) e.nh.ea(c); else { e = wb(d); var f = Jh(d, e, 1); d = Lh(d, f, 20); b[a] = { nh: e, wb: d }; e.ea(c) } }),
                Fm = ka(function (a, c) { var b = c.b, d = c[a]; if (!d) { d = wb(b); var e = Jh(b, d, 1); b = Lh(b, e, 5); c[a] = { nh: d, wb: b }; return b } return d.wb }), Ih = z(function (a) { return na({ b: a }) }), Kf = z(function (a, c, b) {
                    var d = U(a); c = Ma(a); var e = []; b = M([a, b, d, c], Nm); zd(a) || Om(a, "14.1") || e.push(M([Im, "pp", ""], b)); var f = jj(a) && !Gh(a, 68); f || e.push(M([Km, "pu", ""], b)); f || c.Re || Hf(a) || (e.push(M([Em, "zzlc", "na"], b)), e.push(M([Dm, "cc", ""], b))); return e.length ? {
                        rb: function (g, k) { if (0 === d.o("isEU")) try { E(x(N, Ka), e) } catch (m) { } k() }, va: function (g, k) {
                            var m =
                                g.Y; if (m && 0 === d.o("isEU")) try { E(na(m), e) } catch (p) { } k()
                        }
                    } : {}
                }, function (a, c, b) { return X(b) }), Oc = Vd("retryReqs", function (a) { return Ma(a).o("retryReqs", {}) }), Bm = ["0"], Fk = G("g.r", function (a) {
                    var c = da(a), b = Oc(a), d = c(ba), e = qc(a); return K(function (f, g) {
                        var k = g[0], m = g[1]; m && !m.d && m.ghid && m.ghid !== e && m.time && 500 < d - m.time && m.time + 864E5 > d && 2 >= m.browserInfo.rqnl && (m.d = 1, f.push({
                            protocol: m.protocol, host: m.host, Qk: m.resource, Kk: m.postParams, ia: m.params, cj: m.browserInfo, em: m.ghid, time: m.time, Ac: parseInt(k, 10), mj: m.counterId,
                            sa: m.counterType
                        })); return f
                    }, [], Ha(b))
                }), Se = [], zm = ka(function (a, c, b, d, e) { return (new Q(function (f, g) { var k = qa(b), m = x(d.resolve ? d.resolve : N, mc(f)), p = x(d.reject ? d.reject : N, mc(g)); d.resolve = m; d.reject = p; E(function (r) { var t; d.Xf.push(r); var v = b[r], q = Z(a, A(hb(), p), 5100, "is.m"); c(v.window, F(e, (t = {}, t.toCounter = parseInt(r, 10), t)), function (l, h) { oa(a, q); d.Jh.push(r); d.resolve && d.resolve(h) }) }, k) }))["catch"](C(a, "if.b")) }), Am = ka(function (a, c, b) {
                    c = Y(function (d) { return !J(b.info.counterId, d.Xf) }, c); E(function (d) {
                        var e;
                        b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                    }, c)
                }), Bd = z(Dh, x(rb, X)), xm = "ru en et fi lt lv pl fr no sr".split(" "), Ad = [], xh = x(fi, Va(po(yd)), oc(",")), yh = x(nc(Ib(yd)), Hb, Boolean), qm = z(function (a, c) { var b = c.o("gdpr"); return J(b, Kb) ? "-" + b : "" }), nj = z(Ud), gb, Xa, mm = (gb = {}, gb.am = "com.am", gb.tr = "com.tr", gb.ge = "com.ge", gb.il = "co.il", gb["\u0440\u0444"] = "ru", gb["xn--p1ai"] = "ru", gb["\u0443\u043a\u0440"] = "ua", gb["xn--j1amh"] = "ua", gb["\u0431\u0435\u043b"] = "by", gb["xn--90ais"] = "by", gb), oj = {
                    "mc.edadeal.ru": {
                        Ed: /^([^/]+\.)?edadeal\.ru$/,
                        Sf: "ru"
                    }, "mc.yandexsport.ru": { Ed: /^([^/]+\.)?yandexsport\.ru$/, Sf: "ru" }, "mc.beru.ru": { Ed: /^([^/]+\.)?beru\.ru$/, Sf: "ru" }, "mc.kinopoisk.ru": { Ed: /^([^/]+\.)?kinopoisk\.ru$/, Sf: "ru" }
                }, om = (Xa = {}, Xa.ka = "ge", Xa.ro = "md", Xa.tg = "tj", Xa.tk = "tm", Xa.et = "ee", Xa.hy = "com.am", Xa.he = "co.li", Xa.ky = "kg", Xa.uk = "ua", Xa.be = "by", Xa.tr = "com.tr", Xa.kk = "kz", Xa), pj = z(Ud), mp = z(function () { var a = x(nc(x(N, ta("ru"), cc)), Vb(function (c, b) { c[b] = ["mc.yandex." + b]; return c }, {}))(Th); of(Ha, Va(function (c) { c = c[0]; a[c] = [c] }))(oj); return a }),
                np = z(function (a) { var c = R(a).hostname; return (a = Ta(function (b) { return b[1].Ed.test(c) }, Ha(oj))) ? a[0] : "" }), op = Ea(function (a, c) { var b = bj(c), d = nm(c), e = np(c) || km(c), f = da(c), g = Ma(c), k = g.o("synced", {}); b = b ? [e, d] : []; k && (b = Y(function (m) { var p = (k[m] || 1) + 1440 < f(jb); p && delete k[m]; return p }, b)); g.C("synced", k); return K(function (m, p) { E(function (r) { m.push({ domain: r, pk: p }) }, a[p] || []); return m }, [], b) }), pp = function (a, c) {
                    return function (b) {
                        var d = mp(), e = op(d); return Hf(b) || Qc(b) ? {} : {
                            va: function (f, g) {
                                var k = f.Y, m = U(b);
                                if (!bj(b) || ub(b) || !k || !k.o("pv")) return g(); k = e(b); if (!k.length) return g(); if (m.o("startSync")) pj(b).push(g); else { m.C("startSync", !0); m = Se[0]; if (!m) return g(); m(b).then(M([b, k], a)).then(g, x(mc(g), C(b, c)))["catch"](I) }
                            }
                        }
                    }
                }(function (a, c) {
                    var b = da(a), d = U(a), e = Ma(a), f = jf(a, "c"), g = uc(a, f); return K(function (k, m) {
                        function p() { var v = e.o("synced"); d.C("startSync", !1); v && (v[m.pk] = t, e.C("synced", v)); E(Ka, pj(a)) } var r = g({ cb: ["sync.cook"] }, [Aa.Ib + "//" + m.domain + "/sync_cookie_image_check"]), t; r.then(function () {
                            t =
                                b(jb); p()
                        })["catch"](function () { t = b(jb) - 1435; p() }); r = A(r, N); return k.then(r)
                    }, Q.resolve(""), c)["catch"](C(a, "ctl"))
                }, "sy.c"), qp = $a(/^.+\.mtproxy\.yandex\.net$/), Ge = z(function (a) { if ("MetrikaPlayer" === a.name) return !0; a = R(a).hostname; return qp(a) }), rp = G("fid", function (a) {
                    var c, b = I; if (!V(a.PerformanceObserver)) return b; var d = U(a); if (d.o("fido")) return b; d.C("fido", !0); var e = new a.PerformanceObserver(C(a, "fid", function (f) {
                        f = f.getEntries()[0]; d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    })); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                }), uh = !1, jm = /^[a-z][\w.+-]+:/i, qj = {}, sp = G("fip", function (a, c) { if (!jj(a) || Qc(a)) { var b = Ma(a); if (!b.o("fip")) { var d = x(Va(x(function (e, f) { return G("fip." + f, e)(a) }, D(Un, null))), oc("-"))(c); b.C("fip", d) } } }), tp = z(x(W("performance.memory.jsHeapSizeLimit"), fa("concat", ""))), qh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                hm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), gm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), fm =
                    ["availWidth", "availHeight", "availTop"], up = ["webgl", "experimental-webgl"], dm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], am = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), de, Ia = [Ze, Rc, bc(), Ye], rj = "et w v z i u vf".split(" "); rj.push("we"); var Lf = bc(rj); Ia.push(pp); Ia.unshift(function (a, c, b) { return { rb: function (d, e) { var f = La(a, b); (f = f && f.userParams) && d.Vd && f(d.Vd); e() } } }); Ia.unshift(function (a, c, b) {
                        return {
                            va: function (d, e) {
                                if (d.ia && (ti(b,
                                    d.ia), !d.oa && d.Y && d.M)) { var f = cb(a, d.ia), g = nj(a), k = d.Y.o("pv"); f && !d.M.nohit && (k ? encodeURIComponent(f).length > Aa.Ei ? g.push([d.Y, d.ia]) : d.M["site-info"] = f : (d.oa = f, d.xk = !0)) } e()
                            }, rb: function (d, e) { var f = nj(a), g = La(a, b), k = g && g.params; k && (g = Y(x(W("0"), ta(d.Y)), f), E(function (m) { k(m[1]); m = ae(a)(m, f); f.splice(m, 1) }, g)); e() }
                        }
                    }); Ia.push(vh); Ia.push(th); Ia.push(Kf); Ia.push(function (a) { return { va: function (c, b) { var d = c.Y, e = Ma(a).o("fip"); e && d && d.C("fip", e); b() } } }); Ia.push(Cd()); var xa = (de = {}, de.h = Ia, de.er = [], de);
            xa.adb = []; var sj = [bc(), Ye]; sj.push(Kf); xa.f = sj; xa["2"] = Ia; xa["1"] = function (a, c) { return Y(x(Ib(c), cc), a) }(Ia, [Ye]); xa.a = Ia; xa.g = Ia; xa.e = Ia; var tj = [Rc]; tj.push(function () { return function (a) { return { va: function (c, b) { var d = c.Y, e = void 0 === d ? wa() : d, f = c.Ac, g = Oc(a); d = e.o("rqnl", 0) + 1; e.C("rqnl", d); if (e = w(g, H(".", [f, "browserInfo"]))) e.rqnl = d, Ve(a); b() }, rb: function (c, b) { Fh(a, c); b() } } } }()); xa.r = tj; var Mf = []; Mf.push(Lf); Mf.push(Cd()); xa.p = Mf; xa["6"] = [Rc]; xa.t = Ia; xa["4"] = [Lf]; xa.W = [Lf]; var ed = [Ze, Rc, bc()]; ed.push(vh);
            ed.push(Kf); ed.push(th); ed.push(Cd()); xa.n = ed; xa.d = [bc(["hid", "u", "v", "vf"])]; xa.m = [bc(["u", "v", "vf"]), Cd()]; xa.s = []; xa.u = []; xa.S = [bc(["v", "hid", "u", "vf", "rn"])]; Ia.unshift(function (a, c, b) { return { va: function (d, e) { var f = d.Y, g = d.M; if (!f || !g) return e(); !qj[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp, qj[b.id] = !0); f = g["page-ref"]; var k = g["page-url"]; f && k !== f ? g["page-ref"] = rh(a, f) : delete g["page-ref"]; g["page-url"] = rh(a, k).slice(0, Aa.Gi); return e() } } }); xa["5"] = Y(x(Ib([Ze, Rc]), cc), Ia); var ee, uj = D(Q.reject,
                Q, hb()), pa = (ee = {}, ee.h = Qa, ee.er = A(uj, N), ee); pa.a = Qa; pa.p = Dd; pa["4"] = Dd; pa.f = Qa; pa.n = Qa; pa["6"] = function (a, c, b) { var d = uc(a, c); return function (e) { return af(a, b, e, !0).then(M([e, ["https://mc.yandex.md/cc"], { fg: !0, ci: !1 }], d)) } }; pa["1"] = Qa; pa.n = Qa; pa.c = uc; pa.g = Qa; pa.e = Qa; pa["2"] = Qa; pa.r = function (a, c, b) { var d = Dd(a, c, b), e = Qa(a, c, b); return function (f, g, k) { return "webvisor" === k ? d(f, g, f.M["wv-part"]) : e(f, g) } }; pa.adb = Ed; pa.s = uc; pa.S = Qa; pa.u = uc; pa.m = function (a, c, b) {
                    return function (d, e) {
                        var f, g = d.M; g = (f = {}, f["page-url"] =
                            g && g["page-url"] || "", f); f = F(d, { M: F(d.M || {}, g) }); return Ed(a, c, b)(f, "clmap/" + e.id)["catch"](C(a, "c.m"))
                    }
                }; pa.d = Qa; pa.t = Qa; pa.W = Dd; pa["5"] = Qa; var ra = G("g.sen", function (a, c, b) { var d = jf(a, c); b = Xl(a, c, b); var e = pa[c], f = e ? e(a, d, b) : Qa(a, d, b); return function () { var g = Da(arguments), k = g.slice(1); g = F(g[0], { cb: [c] }); return f.apply(void 0, ja([g], k)) } }, uj), oh = z(x(W("id"), Ib([26812653])), X), vp = { log: I, warn: I, error: I }, wp = G("dc.init", function (a) {
                    var c = R(a), b = dd(a), d = Wb(a), e = Pe(a), f = e.gk; e = e.$j; f && !e && d.C("debug", "1",
                        void 0, c.host); return Fe(a) || !f && !e ? vp : b
                }), xd = z(wp), xp = C(window, "h.p", function (a, c) { var b, d, e = ra(a, "h", c), f = c.cd || "" + R(a).href, g = c.Gj || a.document.referrer, k = { Y: wa((b = {}, b.pv = 1, b)), M: (d = {}, d["page-url"] = f, d["page-ref"] = g, d) }; k.ia = c.ia; k.Vd = c.Vd; c.Rc && k.M && (k.M.nohit = "1"); return e(k, c).then(function (m) { m && (c.Rc || Cb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.ia)(), Gb(a, M([a, c, m], Gm))) })["catch"](C(a, "h.g.s")) }), fd = z(jc, X), yp = G("p.ar", function (a, c) {
                    var b = ra(a, "a", c); return function (d,
                        e, f, g, k, m) { var p, r, t = { M: {}, Y: wa((p = {}, p.pv = 1, p.ar = 1, p)) }; d && (e = lc(e) ? { title: e.title, vh: e.referer, ia: e.params, Jb: e.callback, b: e.ctx } : { title: e, vh: f, ia: g, Jb: k, b: m }, f = fd(c), f.url !== d && (f.Pk = f.url, f.url = d), d = d || R(a).href, f = e.vh || f.Pk || a.document.referrer, g = Cb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.ia), b(F(t, { ia: e.ia, title: e.title, M: F(t.M, (r = {}, r["page-url"] = d, r["page-ref"] = f, r)) }), c).then(g)["catch"](C(a, "p.ar.s")).then(M([a, e.Jb || I, e.b], Jb))) }
                }), Vl = {
                    $: "stamp", ca: "frameId", ga: "meta",
                    Mc: "base", md: "hasBase", Lc: "address", Td: "ua", wc: "prev", hh: "namespace", Za: "keystrokes", pd: "isMeta", Rb: "modifier", jb: "pageWidth", ib: "pageHeight", Pd: "startNode", Yc: "endNode", Wd: "zoomFrom", Xd: "zoomTo", level: "level", duration: "duration", ra: "i", hb: "o", n: "n", r: "r", bb: "ct", za: "at", ud: "nm", xd: "ns", xb: "pa", yb: "pr", vb: "nx", Va: "h", qa: "changes", qb: "a", sb: "b", Sa: "c", tc: "op"
                }, Wl = ["attributes", "attrs"], fe = function () {
                    function a(c) { this.b = c } a.prototype.Cb = function (c) {
                        var b = wd(c); c = B(D(this.kb, this), b); return kd(cb(this.b,
                            B(function (d, e) { var f; return F({}, b[e], (f = {}, f.data = d, f)) }, c)))
                    }; a.prototype.kb = function (c) { var b = c.data; "string" !== typeof b && (b = cb(this.b, wd(c.data))); return b }; a.prototype.ub = function (c) { return encodeURIComponent(c).length }; a.prototype.Od = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return !!this.b.JSON }; return a
                }(), vj = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !==
                    typeof global ? global : "undefined" !== typeof self ? self : {}, Nf = function (a) { return a && a.pg && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a }(function (a, c) { return c = { exports: {} }, a(c, c.exports), c.exports }(function (a) {
                        try {
                            a.exports = function (c) {
                                function b(e) { if (d[e]) return d[e].exports; var f = d[e] = { ra: e, mk: !1, exports: {} }; c[e].call(f.exports, f, f.exports, b); f.mk = !0; return f.exports } var d = {}; b.tm = c; b.Sa = d; b.d = function (e, f, g) { b.hb(e, f) || Object.defineProperty(e, f, { enumerable: !0, get: g }) }; b.r = function (e) {
                                    bg();
                                    bg(); bg(); "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }); Object.defineProperty(e, "__esModule", { value: !0 })
                                }; b.t = function (e, f) { 1 & f && (e = b(e)); if (8 & f || 4 & f && "object" == typeof e && e && e.pg) return e; var g = Object.create(null); b.r(g); Object.defineProperty(g, "default", { enumerable: !0, value: e }); if (2 & f && "string" != typeof e) for (var k in e) b.d(g, k, function (m) { return e[m] }.bind(null, k)); return g }; b.n = function (e) {
                                    var f = e && e.pg ? function () { return e["default"] } :
                                        function () { return e }; b.d(f, "a", f); return f
                                }; b.hb = function (e, f) { return Object.prototype.hasOwnProperty.call(e, f) }; b.p = ""; return b(b.Am = 4)
                            }([function (c, b, d) {
                                function e(g, k, m) { for (var p = Object.keys(k), r = 0; r < p.length; ++r)void 0 !== g[p[r]] && m || (g[p[r]] = k[p[r]]); return g } function f(g) {
                                    function k(m, p) {
                                        if (!(this instanceof k)) return new k(m, p); Object.defineProperty(this, "message", { get: function () { return m } }); Error.captureStackTrace ? Error.captureStackTrace(this, k) : Object.defineProperty(this, "stack", {
                                            value: Error().stack ||
                                                ""
                                        }); p && e(this, p)
                                    } (k.prototype = Object.create(Error.prototype)).constructor = k; Object.defineProperty(k.prototype, "name", { get: function () { return g } }); k.prototype.toString = function () { return this.name + ": " + this.message }; return k
                                } b.Rl = d(6); b.aj = d(7); b.kg = d(8); b.Ta = d(9); b.Ug = d(10); b.bg = d(11); b.Jk = d(12); b.bc = d(13); b.global = "undefined" != typeof window && window || "undefined" != typeof vj && vj || "undefined" != typeof self && self || this; b.ta = Object.freeze ? Object.freeze([]) : []; b.xe = Object.freeze ? Object.freeze({}) : {}; b.im =
                                    !!(b.global.qh && b.global.qh.ul && b.global.qh.ul.node); b.isInteger = Number.isInteger || function (g) { return "number" == typeof g && isFinite(g) && Math.floor(g) === g }; b.We = function (g) { return "string" == typeof g || g instanceof String }; b.jm = function (g) { return g && "object" == typeof g }; b.lm = b.km = function (g, k) { var m = g[k]; return !(null == m || !g.hasOwnProperty(k)) && ("object" != typeof m || 0 < (Array.isArray(m) ? m.length : Object.keys(m).length)) }; b.ua = function () { try { var g = b.Ug("buffer").ua; return g.prototype.Yh ? g : null } catch (k) { return null } }();
                                b.Jc = null; b.Ic = null; b.wk = function () { var g = []; return "number" == typeof g ? b.ua ? b.Ic(g) : new b.Array(g) : b.ua ? b.Jc(g) : "undefined" == typeof Uint8Array ? g : new Uint8Array(g) }; b.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array; b.Pa = b.global.rj && b.global.rj.Pa || b.global.Pa || b.Ug("long"); b.mm = /^true|false|0|1$/; b.nm = /^-?(?:0|[1-9][0-9]*)$/; b.om = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/; b.rm = function (g) { return g ? b.bc.from(g).el() : b.bc.Cl }; b.qm = function (g, k) {
                                    var m = b.bc.Ij(g); return b.Pa ? b.Pa.Hj(m.ba, m.fa,
                                        k) : m.Rh(!!k)
                                }; b.qk = e; b.pm = function (g) { return g.charAt(0).toLowerCase() + g.substring(1) }; b.um = f; b.Jl = f("ProtocolError"); b.jh = function (g) { for (var k = {}, m = 0; m < g.length; ++m)k[g[m]] = 1; return function () { for (var p = Object.keys(this), r = p.length - 1; -1 < r; --r)if (1 === k[p[r]] && void 0 !== this[p[r]] && null !== this[p[r]]) return p[r] } }; b.kh = function (g) { return function (k) { for (var m = 0; m < g.length; ++m)g[m] !== k && delete this[g[m]] } }; b.Em = { sm: String, Zl: String, fc: String, json: !0 }; b.Da = function () {
                                    var g = b.ua; g ? (b.Jc = g.from !== Uint8Array.from &&
                                        g.from || function (k, m) { return new g(k, m) }, b.Ic = g.Pl || function (k) { return new g(k) }) : b.Jc = b.Ic = null
                                }
                            }, function (c, b, d) { c.exports = d(5) }, function (c, b, d) {
                                function e() { return l.ua ? function () { return (m.create = function () { return new q })() } : function () { return new m } } function f(y, L, T) { this.tb = y; this.da = L; this.next = void 0; this.$h = T } function g() { } function k(y) { this.head = y.head; this.Ba = y.Ba; this.da = y.da; this.next = y.lb } function m() { this.da = 0; this.Ba = this.head = new f(g, 0, 0); this.lb = null } function p(y, L, T) { L[T] = 255 & y } function r(y,
                                    L) { this.da = y; this.next = void 0; this.$h = L } function t(y, L, T) { for (; y.fa;)L[T++] = 127 & y.ba | 128, y.ba = (y.ba >>> 7 | y.fa << 25) >>> 0, y.fa >>>= 7; for (; 127 < y.ba;)L[T++] = 127 & y.ba | 128, y.ba >>>= 7; L[T++] = y.ba } function v(y, L, T) { L[T] = 255 & y; L[T + 1] = y >>> 8 & 255; L[T + 2] = y >>> 16 & 255; L[T + 3] = y >>> 24 } c.exports = m; var q, l = d(0), h = l.bc, n = l.aj, u = l.bg; m.create = e(); m.ec = function (y) { return new l.Array(y) }; l.Array !== Array && (m.ec = l.Jk(m.ec, l.Array.prototype.subarray)); m.prototype.ya = function (y, L, T) { this.Ba = this.Ba.next = new f(y, L, T); this.da += L; return this };
                                r.prototype = Object.create(f.prototype); r.prototype.tb = function (y, L, T) { for (; 127 < y;)L[T++] = 127 & y | 128, y >>>= 7; L[T] = y }; m.prototype.l = function (y) { this.da += (this.Ba = this.Ba.next = new r(128 > (y >>>= 0) ? 1 : 16384 > y ? 2 : 2097152 > y ? 3 : 268435456 > y ? 4 : 5, y)).da; return this }; m.prototype.G = function (y) { 0 > y ? this.ya(t, 10, h.De(y)) : this.l(y) }; m.prototype.Cc = function (y) { this.l((y << 1 ^ y >> 31) >>> 0) }; m.prototype.Vh = function (y) { y = h.from(y); return this.ya(t, y.length(), y) }; m.prototype.Vg = m.prototype.Vh; m.prototype.Yk = function (y) {
                                    y = h.from(y).hi();
                                    return this.ya(t, y.length(), y)
                                }; m.prototype.Ha = function (y) { this.ya(p, 1, y ? 1 : 0) }; m.prototype.Fg = function (y) { y = h.from(y); return this.ya(v, 4, y.ba).ya(v, 4, y.fa) }; m.prototype.Xk = m.prototype.Fg; m.prototype.Ta = function (y) { return this.ya(l.Ta.ei, 4, y) }; var O = l.Array.prototype.set ? function (y, L, T) { L.set(y, T) } : function (y, L, T) { for (var Db = 0; Db < y.length; ++Db)L[T + Db] = y[Db] }; m.prototype.fc = function (y) {
                                    var L = y.length >>> 0; if (!L) return this.ya(p, 1, 0); if (l.We(y)) { var T = m.ec(L = n.length(y)); n.decode(y, T, 0); y = T } return this.l(L).ya(O,
                                        L, y)
                                }; m.prototype.L = function (y) { var L = u.length(y); return L ? this.l(L).ya(u.write, L, y) : this.ya(p, 1, 0) }; m.prototype.J = function () { this.lb = new k(this); this.head = this.Ba = new f(g, 0, 0); this.da = 0; return this }; m.prototype.reset = function () { this.lb ? (this.head = this.lb.head, this.Ba = this.lb.Ba, this.da = this.lb.da, this.lb = this.lb.next) : (this.head = this.Ba = new f(g, 0, 0), this.da = 0); return this }; m.prototype.K = function () {
                                    var y = this.head, L = this.Ba, T = this.da; this.reset().l(T); T && (this.Ba.next = y.next, this.Ba = L, this.da += T);
                                    return this
                                }; m.prototype.finish = function () { for (var y = this.head.next, L = this.constructor.ec(this.da), T = 0; y;)y.tb(y.$h, L, T), T += y.da, y = y.next; return L }; m.Da = function (y) { q = y; m.create = e(); q.Da() }
                            }, function (c, b, d) {
                                function e() { return t.ua ? function (n) { return (g.create = function (u) { return t.ua.isBuffer(u) ? new r(u) : h(u) })(n) } : h } function f(n, u) { return RangeError("index out of range: " + n.H + " + " + (u || 1) + " > " + n.da) } function g(n) { this.aa = n; this.H = 0; this.da = n.length } function k() {
                                    var n = new v(0, 0), u = 0; if (!(4 < this.da -
                                        this.H)) { for (; 3 > u; ++u) { if (this.H >= this.da) throw f(this); n.ba = (n.ba | (127 & this.aa[this.H]) << 7 * u) >>> 0; if (128 > this.aa[this.H++]) return n } n.ba = (n.ba | (127 & this.aa[this.H++]) << 7 * u) >>> 0; return n } for (; 4 > u; ++u)if (n.ba = (n.ba | (127 & this.aa[this.H]) << 7 * u) >>> 0, 128 > this.aa[this.H++]) return n; n.ba = (n.ba | (127 & this.aa[this.H]) << 28) >>> 0; n.fa = (n.fa | (127 & this.aa[this.H]) >> 4) >>> 0; if (128 > this.aa[this.H++]) return n; u = 0; if (4 < this.da - this.H) for (; 5 > u; ++u) { if (n.fa = (n.fa | (127 & this.aa[this.H]) << 7 * u + 3) >>> 0, 128 > this.aa[this.H++]) return n } else for (; 5 >
                                            u; ++u) { if (this.H >= this.da) throw f(this); n.fa = (n.fa | (127 & this.aa[this.H]) << 7 * u + 3) >>> 0; if (128 > this.aa[this.H++]) return n } throw Error("invalid varint encoding");
                                } function m(n, u) { return (n[u - 4] | n[u - 3] << 8 | n[u - 2] << 16 | n[u - 1] << 24) >>> 0 } function p() { if (this.H + 8 > this.da) throw f(this, 8); return new v(m(this.aa, this.H += 4), m(this.aa, this.H += 4)) } c.exports = g; var r, t = d(0), v = t.bc, q = t.bg, l, h = "undefined" != typeof Uint8Array ? function (n) {
                                    if (n instanceof Uint8Array || Array.isArray(n)) return new g(n); throw Error("illegal buffer");
                                } : function (n) { if (Array.isArray(n)) return new g(n); throw Error("illegal buffer"); }; g.create = e(); g.prototype.sg = t.Array.prototype.subarray || t.Array.prototype.slice; g.prototype.l = (l = 4294967295, function () {
                                    l = (127 & this.aa[this.H]) >>> 0; if (128 > this.aa[this.H++]) return l; l = (l | (127 & this.aa[this.H]) << 7) >>> 0; if (128 > this.aa[this.H++]) return l; l = (l | (127 & this.aa[this.H]) << 14) >>> 0; if (128 > this.aa[this.H++]) return l; l = (l | (127 & this.aa[this.H]) << 21) >>> 0; if (128 > this.aa[this.H++]) return l; l = (l | (15 & this.aa[this.H]) << 28) >>>
                                        0; if (128 > this.aa[this.H++]) return l; if ((this.H += 5) > this.da) throw this.H = this.da, f(this, 10); return l
                                }); g.prototype.G = function () { this.l() }; g.prototype.Cc = function () { this.l() }; g.prototype.Ha = function () { this.l() }; g.prototype.Ta = function () { if (this.H + 4 > this.da) throw f(this, 4); var n = t.Ta.th(this.aa, this.H); this.H += 4; return n }; g.prototype.fc = function () {
                                    var n = this.l(), u = this.H, O = this.H + n; if (O > this.da) throw f(this, n); this.H += n; return Array.isArray(this.aa) ? this.aa.slice(u, O) : u === O ? new this.aa.constructor(0) :
                                        this.sg.call(this.aa, u, O)
                                }; g.prototype.L = function () { var n = this.fc(); return q.read(n, 0, n.length) }; g.Da = function (n) { r = n; g.create = e(); r.Da(); var u = t.Pa ? "toLong" : "toNumber"; t.qk(g.prototype, { Vg: function () { return k.call(this)[u](!1) }, Vh: function () { return k.call(this)[u](!0) }, Yk: function () { return k.call(this).gi()[u](!1) }, Fg: function () { return p.call(this)[u](!0) }, Xk: function () { return p.call(this)[u](!1) } }) }
                            }, function (c, b, d) {
                                d.r(b); d.d(b, "ru", function () { return k }); d.d(b, "default", function () { return g }); c =
                                    d(1); var e = c.ng, f = c.Zh, g = c.zh["default"] || (c.zh["default"] = {}), k = g.X = function () {
                                        var m = {}; m.V = function () {
                                            var p = {}; p.O = function () {
                                                var r = {}; r.T = function () {
                                                    var t = {}; t.R = function () {
                                                        var v = {}; v.jg = function () {
                                                            function q(l) { this.buffer = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.buffer = f.ta; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); if (null != l.buffer && l.buffer.length) for (var n = 0; n < l.buffer.length; ++n)g.X.V.O.T.R.ua.encode(l.buffer[n],
                                                                    h.l(10).J()).K(); return h
                                                            }; return q
                                                        }(); v.ua = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.$ = 0; q.prototype.data = null; q.prototype.page = 0; q.prototype.je = f.wk(); q.prototype.end = !1; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); null != l.$ && h.l(8).G(l.$); null != l.data && g.X.V.O.T.R.mg.encode(l.data, h.l(18).J()).K(); null != l.page && h.l(24).G(l.page); null != l.je && h.l(34).fc(l.je); null != l.end && h.l(40).Ha(l.end);
                                                                return h
                                                            }; return q
                                                        }(); v.mg = function () {
                                                            function q(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } q.prototype.page = null; q.prototype.df = null; q.prototype.event = null; q.prototype.de = null; q.prototype.yf = null; q.prototype.ae = 0; var l; Object.defineProperty(q.prototype, "data", { get: f.jh(l = "page mutation event articleInfo publishersHeader activity".split(" ")), set: f.kh(l) }); q.create = function (h) { return new q(h) }; q.encode = function (h, n) {
                                                                n || (n = e.create()); null != h.page && g.X.V.O.T.R.ob.encode(h.page,
                                                                    n.l(10).J()).K(); null != h.df && g.X.V.O.T.R.Qa.encode(h.df, n.l(18).J()).K(); null != h.event && g.X.V.O.T.R.Event.encode(h.event, n.l(26).J()).K(); null != h.de && g.X.V.O.T.R.li.encode(h.de, n.l(34).J()).K(); null != h.yf && g.X.V.O.T.R.Li.encode(h.yf, n.l(42).J()).K(); null != h.ae && n.l(48).l(h.ae); return n
                                                            }; return q
                                                        }(); v.ob = function () {
                                                            function q(l) { this.content = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.ga = null; q.prototype.content = f.ta; q.prototype.ca = 0; q.prototype.Yb =
                                                                ""; q.prototype.Fa = f.Pa ? f.Pa.Hj(0, 0, !1) : 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.ga && g.X.V.O.T.R.ob.Zd.encode(l.ga, h.l(10).J()).K(); if (null != l.content && l.content.length) for (var n = 0; n < l.content.length; ++n)g.X.V.O.T.R.ob.vi.encode(l.content[n], h.l(18).J()).K(); null != l.ca && h.l(24).Cc(l.ca); null != l.Yb && h.l(34).L(l.Yb); null != l.Fa && h.l(40).Vg(l.Fa); return h }; q.ig = function () {
                                                                    function l(h) {
                                                                        if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] =
                                                                            h[n[u]])
                                                                    } l.prototype.width = 0; l.prototype.height = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) { n || (n = e.create()); null != h.width && n.l(8).G(h.width); null != h.height && n.l(16).G(h.height); return n }; return l
                                                                }(); q.Location = function () {
                                                                    function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.host = ""; l.prototype.protocol = ""; l.prototype.path = ""; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                        n || (n = e.create()); null != h.host && n.l(10).L(h.host);
                                                                        null != h.protocol && n.l(18).L(h.protocol); null != h.path && n.l(26).L(h.path); return n
                                                                    }; return l
                                                                }(); q.Pi = function () { function l(h) { this.scroll = []; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.target = 0; l.prototype.scroll = f.ta; l.create = function (h) { return new l(h) }; l.encode = function (h, n) { n || (n = e.create()); null != h.target && n.l(8).G(h.target); if (null != h.scroll && h.scroll.length) { n.l(18).J(); for (var u = 0; u < h.scroll.length; ++u)n.G(h.scroll[u]); n.K() } return n }; return l }();
                                                            q.Zd = function () {
                                                                function l(h) { this.pc = []; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.doctype = ""; l.prototype.title = ""; l.prototype.Lc = ""; l.prototype.Td = ""; l.prototype.referrer = ""; l.prototype.Mc = ""; l.prototype.md = !1; l.prototype.screen = null; l.prototype.viewport = null; l.prototype.location = null; l.prototype.pc = f.ta; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); null != h.doctype && n.l(10).L(h.doctype); null != h.title && n.l(18).L(h.title);
                                                                    null != h.Lc && n.l(26).L(h.Lc); null != h.Td && n.l(34).L(h.Td); null != h.referrer && n.l(42).L(h.referrer); null != h.Mc && n.l(50).L(h.Mc); null != h.md && n.l(56).Ha(h.md); null != h.screen && g.X.V.O.T.R.ob.ig.encode(h.screen, n.l(66).J()).K(); null != h.viewport && g.X.V.O.T.R.ob.ig.encode(h.viewport, n.l(74).J()).K(); null != h.location && g.X.V.O.T.R.ob.Location.encode(h.location, n.l(82).J()).K(); if (null != h.pc && h.pc.length) for (var u = 0; u < h.pc.length; ++u)g.X.V.O.T.R.ob.Pi.encode(h.pc[u], n.l(90).J()).K(); return n
                                                                }; return l
                                                            }(); q.vi =
                                                                function () {
                                                                    function l(h) { this.attributes = {}; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.name = ""; l.prototype.attributes = f.xe; l.prototype.parent = 0; l.prototype.content = ""; l.prototype.next = 0; l.prototype.wc = 0; l.prototype.hidden = !1; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                        n || (n = e.create()); null != h.id && n.l(8).G(h.id); null != h.name && n.l(18).L(h.name); if (null != h.attributes) for (var u = Object.keys(h.attributes), O = 0; O < u.length; ++O)n.l(26).J().l(10).L(u[O]).l(18).L(h.attributes[u[O]]).K();
                                                                        null != h.parent && n.l(32).G(h.parent); null != h.content && n.l(42).L(h.content); null != h.next && n.l(48).G(h.next); null != h.wc && n.l(56).G(h.wc); null != h.hidden && n.l(64).Ha(h.hidden); return n
                                                                    }; return l
                                                                }(); return q
                                                        }(); v.Qa = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.target = 0; q.prototype.$ = 0; q.prototype.ga = null; q.prototype.ca = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); null != l.target && h.l(8).G(l.target);
                                                                null != l.$ && h.l(16).G(l.$); null != l.ga && g.X.V.O.T.R.Qa.Zd.encode(l.ga, h.l(26).J()).K(); null != l.ca && h.l(32).Cc(l.ca); return h
                                                            }; q.wi = function () {
                                                                function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.yb = 0; l.prototype.vb = 0; l.prototype.xb = 0; l.prototype.ra = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); null != h.id && n.l(8).G(h.id); null != h.yb && n.l(16).G(h.yb); null != h.vb && n.l(24).G(h.vb); null != h.xb && n.l(32).G(h.xb);
                                                                    null != h.ra && n.l(40).G(h.ra); return n
                                                                }; return l
                                                            }(); q.ji = function () {
                                                                function l(h) { this.za = {}; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.ud = ""; l.prototype.xb = 0; l.prototype.xd = ""; l.prototype.yb = 0; l.prototype.za = f.xe; l.prototype.bb = ""; l.prototype.vb = 0; l.prototype.ra = 0; l.prototype.Va = !1; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); null != h.id && n.l(8).G(h.id); null != h.ud && n.l(18).L(h.ud); null != h.xb && n.l(24).G(h.xb);
                                                                    null != h.xd && n.l(34).L(h.xd); null != h.yb && n.l(40).G(h.yb); if (null != h.za) for (var u = Object.keys(h.za), O = 0; O < u.length; ++O)n.l(50).J().l(10).L(u[O]).l(18).L(h.za[u[O]]).K(); null != h.bb && n.l(58).L(h.bb); null != h.vb && n.l(64).G(h.vb); null != h.ra && n.l(72).G(h.ra); null != h.Va && n.l(80).Ha(h.Va); return n
                                                                }; return l
                                                            }(); q.hg = function () {
                                                                function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.hb = ""; l.prototype.n = ""; l.prototype.r = !1; l.create = function (h) { return new l(h) };
                                                                l.encode = function (h, n) { n || (n = e.create()); null != h.hb && n.l(10).L(h.hb); null != h.n && n.l(18).L(h.n); null != h.r && n.l(24).Ha(h.r); return n }; return l
                                                            }(); q.pi = function () {
                                                                function l(h) { this.za = {}; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.za = f.xe; l.prototype.ra = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); null != h.id && n.l(8).G(h.id); if (null != h.za) for (var u = Object.keys(h.za), O = 0; O < u.length; ++O)n.l(18).J().l(10).L(u[O]),
                                                                        g.X.V.O.T.R.Qa.hg.encode(h.za[u[O]], n.l(18).J()).K().K(); null != h.ra && n.l(24).G(h.ra); return n
                                                                }; return l
                                                            }(); q.Vi = function () { function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.bb = null; l.prototype.ra = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) { n || (n = e.create()); null != h.id && n.l(8).G(h.id); null != h.bb && g.X.V.O.T.R.Qa.hg.encode(h.bb, n.l(18).J()).K(); null != h.ra && n.l(24).G(h.ra); return n }; return l }(); q.ui = function () {
                                                                function l(h) {
                                                                    this.qb =
                                                                        []; this.sb = []; this.Sa = []; this.d = []; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]])
                                                                } l.prototype.qb = f.ta; l.prototype.sb = f.ta; l.prototype.Sa = f.ta; l.prototype.d = f.ta; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); if (null != h.qb && h.qb.length) for (var u = 0; u < h.qb.length; ++u)g.X.V.O.T.R.Qa.wi.encode(h.qb[u], n.l(10).J()).K(); if (null != h.sb && h.sb.length) for (u = 0; u < h.sb.length; ++u)g.X.V.O.T.R.Qa.ji.encode(h.sb[u], n.l(18).J()).K(); if (null != h.Sa &&
                                                                        h.Sa.length) for (u = 0; u < h.Sa.length; ++u)g.X.V.O.T.R.Qa.pi.encode(h.Sa[u], n.l(26).J()).K(); if (null != h.d && h.d.length) for (u = 0; u < h.d.length; ++u)g.X.V.O.T.R.Qa.Vi.encode(h.d[u], n.l(34).J()).K(); return n
                                                                }; return l
                                                            }(); q.Zd = function () {
                                                                function l(h) { this.qa = []; if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.index = 0; l.prototype.qa = f.ta; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                    n || (n = e.create()); null != h.index && n.l(8).G(h.index); if (null != h.qa &&
                                                                        h.qa.length) for (var u = 0; u < h.qa.length; ++u)g.X.V.O.T.R.Qa.ui.encode(h.qa[u], n.l(18).J()).K(); return n
                                                                }; return l
                                                            }(); return q
                                                        }(); v.Event = function () {
                                                            function q(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } q.prototype.type = 0; q.prototype.target = 0; q.prototype.ca = 0; q.prototype.cf = null; q.prototype.Df = null; q.prototype.dg = null; q.prototype.Ef = null; q.prototype.ie = null; q.prototype.Vf = null; q.prototype.gh = null; q.prototype.sh = null; q.prototype.gg = null; q.prototype.Bf = null;
                                                            q.prototype.Ye = null; q.prototype.ue = null; q.prototype.Ae = null; q.prototype.Oe = null; q.prototype.Pf = null; var l; Object.defineProperty(q.prototype, "meta", { get: f.jh(l = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent stylechangeEvent".split(" ")), set: f.kh(l) }); q.create = function (h) { return new q(h) }; q.encode = function (h, n) {
                                                                n || (n = e.create()); null != h.type && n.l(8).G(h.type);
                                                                null != h.target && n.l(16).Cc(h.target); null != h.ca && n.l(24).Cc(h.ca); null != h.cf && g.X.V.O.T.R.MouseEvent.encode(h.cf, n.l(34).J()).K(); null != h.Df && g.X.V.O.T.R.Qi.encode(h.Df, n.l(42).J()).K(); null != h.dg && g.X.V.O.T.R.Wi.encode(h.dg, n.l(50).J()).K(); null != h.Ef && g.X.V.O.T.R.Ri.encode(h.Ef, n.l(58).J()).K(); null != h.ie && g.X.V.O.T.R.ti.encode(h.ie, n.l(66).J()).K(); null != h.Vf && g.X.V.O.T.R.TouchEvent.encode(h.Vf, n.l(74).J()).K(); null != h.gh && g.X.V.O.T.R.Ii.encode(h.gh, n.l(82).J()).K(); null != h.sh && g.X.V.O.T.R.Ki.encode(h.sh,
                                                                    n.l(90).J()).K(); null != h.gg && g.X.V.O.T.R.$d.encode(h.gg, n.l(98).J()).K(); null != h.Bf && g.X.V.O.T.R.Oi.encode(h.Bf, n.l(106).J()).K(); null != h.Ye && g.X.V.O.T.R.lg.encode(h.Ye, n.l(114).J()).K(); null != h.ue && g.X.V.O.T.R.xi.encode(h.ue, n.l(122).J()).K(); null != h.Ae && g.X.V.O.T.R.Ai.encode(h.Ae, n.l(130).J()).K(); null != h.Oe && g.X.V.O.T.R.Bi.encode(h.Oe, n.l(138).J()).K(); null != h.Pf && g.X.V.O.T.R.Si.encode(h.Pf, n.l(146).J()).K(); return n
                                                            }; return q
                                                        }(); v.Ti = function () {
                                                            function q(l) {
                                                                if (l) for (var h = Object.keys(l), n = 0; n <
                                                                    h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.target = 0; q.prototype.style = ""; q.prototype.tc = ""; q.prototype.index = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.target && h.l(8).G(l.target); null != l.style && h.l(18).L(l.style); null != l.tc && h.l(26).L(l.tc); null != l.index && h.l(32).G(l.index); return h }; return q
                                                        }(); v.Si = function () {
                                                            function q(l) { this.qa = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.qa =
                                                                f.ta; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); if (null != l.qa && l.qa.length) for (var n = 0; n < l.qa.length; ++n)g.X.V.O.T.R.Ti.encode(l.qa[n], h.l(10).J()).K(); return h }; return q
                                                        }(); v.MouseEvent = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.x = 0; q.prototype.y = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.x && h.l(8).G(l.x); null != l.y && h.l(16).G(l.y); return h };
                                                            return q
                                                        }(); v.Qi = function () { function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.x = 0; q.prototype.y = 0; q.prototype.page = !1; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.x && h.l(8).G(l.x); null != l.y && h.l(16).G(l.y); null != l.page && h.l(24).Ha(l.page); return h }; return q }(); v.Wi = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.create = function (l) { return new q(l) };
                                                            q.encode = function (l, h) { h || (h = e.create()); return h }; return q
                                                        }(); v.Ri = function () { function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.start = 0; q.prototype.end = 0; q.prototype.Pd = 0; q.prototype.Yc = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.start && h.l(8).G(l.start); null != l.end && h.l(16).G(l.end); null != l.Pd && h.l(24).G(l.Pd); null != l.Yc && h.l(32).G(l.Yc); return h }; return q }(); v.ti = function () {
                                                            function q(l) {
                                                                if (l) for (var h =
                                                                    Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.value = ""; q.prototype.checked = !1; q.prototype.hidden = !1; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.value && h.l(10).L(l.value); null != l.checked && h.l(16).Ha(l.checked); null != l.hidden && h.l(24).Ha(l.hidden); return h }; return q
                                                        }(); v.TouchEvent = function () {
                                                            function q(l) { this.touches = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.touches =
                                                                f.ta; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); if (null != l.touches && l.touches.length) for (var n = 0; n < l.touches.length; ++n)g.X.V.O.T.R.TouchEvent.Ui.encode(l.touches[n], h.l(10).J()).K(); return h }; q.Ui = function () {
                                                                    function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = ""; l.prototype.x = 0; l.prototype.y = 0; l.prototype.force = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) {
                                                                        n || (n = e.create()); null != h.id &&
                                                                            n.l(10).L(h.id); null != h.x && n.l(21).Ta(h.x); null != h.y && n.l(29).Ta(h.y); null != h.force && n.l(37).Ta(h.force); return n
                                                                    }; return l
                                                                }(); return q
                                                        }(); v.$d = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.Wd = null; q.prototype.Xd = null; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.Wd && g.X.V.O.T.R.$d.og.encode(l.Wd, h.l(10).J()).K(); null != l.Xd && g.X.V.O.T.R.$d.og.encode(l.Xd, h.l(18).J()).K(); return h };
                                                            q.og = function () { function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.level = 0; l.prototype.x = 0; l.prototype.y = 0; l.create = function (h) { return new l(h) }; l.encode = function (h, n) { n || (n = e.create()); null != h.level && n.l(13).Ta(h.level); null != h.x && n.l(16).G(h.x); null != h.y && n.l(24).G(h.y); return n }; return l }(); return q
                                                        }(); v.Oi = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.width = 0;
                                                            q.prototype.height = 0; q.prototype.jb = 0; q.prototype.ib = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.width && h.l(8).G(l.width); null != l.height && h.l(16).G(l.height); null != l.jb && h.l(24).G(l.jb); null != l.ib && h.l(32).G(l.ib); return h }; return q
                                                        }(); v.Ii = function () {
                                                            function q(l) { this.Ra = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.method = ""; q.prototype.Ra = f.ta; q.create = function (l) { return new q(l) }; q.encode = function (l,
                                                                h) { h || (h = e.create()); null != l.method && h.l(10).L(l.method); if (null != l.Ra && l.Ra.length) for (var n = 0; n < l.Ra.length; ++n)h.l(18).L(l.Ra[n]); return h }; return q
                                                        }(); v.Ki = function () { function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.rh = ""; q.prototype.value = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.rh && h.l(10).L(l.rh); null != l.value && h.l(18).L(l.value); return h }; return q }(); v.lg = function () {
                                                            function q(l) {
                                                                this.Za =
                                                                    []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.Za = f.ta; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); if (null != l.Za && l.Za.length) for (var n = 0; n < l.Za.length; ++n)g.X.V.O.T.R.lg.Ci.encode(l.Za[n], h.l(10).J()).K(); return h }; q.Ci = function () {
                                                                function l(h) { if (h) for (var n = Object.keys(h), u = 0; u < n.length; ++u)null != h[n[u]] && (this[n[u]] = h[n[u]]) } l.prototype.id = 0; l.prototype.key = ""; l.prototype.pd = !1; l.prototype.Rb = ""; l.create = function (h) { return new l(h) };
                                                                l.encode = function (h, n) { n || (n = e.create()); null != h.id && n.l(8).G(h.id); null != h.key && n.l(18).L(h.key); null != h.pd && n.l(24).Ha(h.pd); null != h.Rb && n.l(34).L(h.Rb); return n }; return l
                                                            }(); return q
                                                        }(); v.xi = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.width = 0; q.prototype.height = 0; q.prototype.orientation = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); null != l.width && h.l(8).G(l.width); null != l.height && h.l(16).G(l.height);
                                                                null != l.orientation && h.l(24).G(l.orientation); return h
                                                            }; return q
                                                        }(); v.Ai = function () { function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.code = ""; q.prototype.Dg = ""; q.prototype.stack = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.code && h.l(10).L(l.code); null != l.Dg && h.l(18).L(l.Dg); null != l.stack && h.l(26).L(l.stack); return h }; return q }(); v.Bi = function () {
                                                            function q(l) {
                                                                if (l) for (var h = Object.keys(l), n = 0; n <
                                                                    h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.hash = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.hash && h.l(10).L(l.hash); return h }; return q
                                                        }(); v.zi = function () {
                                                            var q = {}, l = Object.create(q); l[q[0] = "mousemove"] = 0; l[q[1] = "mouseup"] = 1; l[q[2] = "mousedown"] = 2; l[q[3] = "click"] = 3; l[q[4] = "scroll"] = 4; l[q[5] = "windowblur"] = 5; l[q[6] = "windowfocus"] = 6; l[q[7] = "focus"] = 7; l[q[8] = "blur"] = 8; l[q[9] = "eof"] = 9; l[q[10] = "selection"] = 10; l[q[11] = "change"] = 11; l[q[12] = "input"] =
                                                                12; l[q[13] = "touchmove"] = 13; l[q[14] = "touchstart"] = 14; l[q[15] = "touchend"] = 15; l[q[16] = "touchcancel"] = 16; l[q[17] = "touchforcechange"] = 17; l[q[18] = "canvasMethod"] = 18; l[q[19] = "canvasProperty"] = 19; l[q[20] = "zoom"] = 20; l[q[21] = "resize"] = 21; l[q[22] = "mediaMethod"] = 22; l[q[23] = "mediaProperty"] = 23; l[q[24] = "keystroke"] = 24; l[q[25] = "deviceRotation"] = 25; l[q[26] = "fatalError"] = 26; l[q[27] = "hashchange"] = 27; l[q[28] = "stylechange"] = 28; return l
                                                        }(); v.Li = function () {
                                                            function q(l) {
                                                                this.Gb = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null !=
                                                                    l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.Gb = f.ta; q.prototype.Ja = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); if (null != l.Gb && l.Gb.length) for (var n = 0; n < l.Gb.length; ++n)g.X.V.O.T.R.mi.encode(l.Gb[n], h.l(10).J()).K(); null != l.Ja && h.l(16).G(l.Ja); return h }; return q
                                                        }(); v.mi = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.id = 0; q.prototype.x = 0; q.prototype.y = 0; q.prototype.width = 0; q.prototype.height =
                                                                0; q.prototype.Ja = 0; q.prototype.bf = 0; q.prototype.Kb = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.id && h.l(8).l(l.id); null != l.x && h.l(16).G(l.x); null != l.y && h.l(24).G(l.y); null != l.width && h.l(32).G(l.width); null != l.height && h.l(40).G(l.height); null != l.Ja && h.l(48).G(l.Ja); null != l.bf && h.l(61).Ta(l.bf); null != l.Kb && h.l(64).G(l.Kb); return h }; return q
                                                        }(); v.li = function () {
                                                            function q(l) {
                                                                this.Hb = []; this.$b = []; this.Vb = []; if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null !=
                                                                    l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.id = 0; q.prototype.mf = ""; q.prototype.lf = ""; q.prototype.Hb = f.ta; q.prototype.$b = f.ta; q.prototype.xf = ""; q.prototype.Kb = 0; q.prototype.Vb = f.ta; q.prototype.$f = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); null != l.id && h.l(8).l(l.id); null != l.mf && h.l(18).L(l.mf); null != l.lf && h.l(26).L(l.lf); if (null != l.Hb && l.Hb.length) for (var n = 0; n < l.Hb.length; ++n)g.X.V.O.T.R.ki.encode(l.Hb[n], h.l(34).J()).K(); if (null != l.$b && l.$b.length) for (n = 0; n < l.$b.length; ++n)g.X.V.O.T.R.oi.encode(l.$b[n],
                                                                    h.l(42).J()).K(); null != l.xf && h.l(50).L(l.xf); null != l.Kb && h.l(56).G(l.Kb); if (null != l.Vb && l.Vb.length) for (n = 0; n < l.Vb.length; ++n)g.X.V.O.T.R.ni.encode(l.Vb[n], h.l(66).J()).K(); null != l.$f && h.l(74).L(l.$f); return h
                                                            }; return q
                                                        }(); v.ki = function () { function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.name = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.name && h.l(10).L(l.name); return h }; return q }(); v.oi = function () {
                                                            function q(l) {
                                                                if (l) for (var h =
                                                                    Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]])
                                                            } q.prototype.name = ""; q.create = function (l) { return new q(l) }; q.encode = function (l, h) { h || (h = e.create()); null != l.name && h.l(10).L(l.name); return h }; return q
                                                        }(); v.ni = function () {
                                                            function q(l) { if (l) for (var h = Object.keys(l), n = 0; n < h.length; ++n)null != l[h[n]] && (this[h[n]] = l[h[n]]) } q.prototype.name = ""; q.prototype.position = 0; q.create = function (l) { return new q(l) }; q.encode = function (l, h) {
                                                                h || (h = e.create()); null != l.name && h.l(10).L(l.name); null != l.position &&
                                                                    h.l(16).G(l.position); return h
                                                            }; return q
                                                        }(); return v
                                                    }(); return t
                                                }(); return r
                                            }(); return p
                                        }(); return m
                                    }()
                            }, function (c, b, d) { function e() { f.Zh.Da(); f.ng.Da(f.si); f.Ni.Da(f.ri) } var f = b; f.Tl = "minimal"; f.ng = d(2); f.si = d(14); f.Ni = d(3); f.ri = d(15); f.Zh = d(0); f.zm = d(16); f.zh = d(18); f.Wl = e; e() }, function (c) {
                                c.exports = function (b, d) {
                                    for (var e = Array(arguments.length - 1), f = 0, g = 2, k = !0; g < arguments.length;)e[f++] = arguments[g++]; return new Promise(function (m, p) {
                                        e[f] = function (r) {
                                            if (k) if (k = !1, r) p(r); else {
                                                for (var t = Array(arguments.length -
                                                    1), v = 0; v < t.length;)t[v++] = arguments[v]; m.apply(null, t)
                                            }
                                        }; try { b.apply(d || null, e) } catch (r) { k && (k = !1, p(r)) }
                                    })
                                }
                            }, function (c, b) {
                                b.length = function (g) { var k = g.length; if (!k) return 0; for (var m = 0; 1 < --k % 4 && "=" === g.charAt(k);)++m; return Math.ceil(3 * g.length) / 4 - m }; for (var d = Array(64), e = Array(123), f = 0; 64 > f;)e[d[f] = 26 > f ? f + 65 : 52 > f ? f + 71 : 62 > f ? f - 4 : f - 59 | 43] = f++; b.encode = function (g, k, m) {
                                    for (var p, r = null, t = [], v = 0, q = 0; k < m;) {
                                        var l = g[k++]; switch (q) {
                                            case 0: t[v++] = d[l >> 2]; p = (3 & l) << 4; q = 1; break; case 1: t[v++] = d[p | l >> 4]; p = (15 &
                                                l) << 2; q = 2; break; case 2: t[v++] = d[p | l >> 6], t[v++] = d[63 & l], q = 0
                                        }8191 < v && ((r || (r = [])).push(String.fromCharCode.apply(String, t)), v = 0)
                                    } q && (t[v++] = d[p], t[v++] = 61, 1 === q && (t[v++] = 61)); return r ? (v && r.push(String.fromCharCode.apply(String, t.slice(0, v))), r.join("")) : String.fromCharCode.apply(String, t.slice(0, v))
                                }; b.decode = function (g, k, m) {
                                    for (var p, r = m, t = 0, v = 0; v < g.length;) {
                                        var q = g.charCodeAt(v++); if (61 === q && 1 < t) break; if (void 0 === (q = e[q])) throw Error("invalid encoding"); switch (t) {
                                            case 0: p = q; t = 1; break; case 1: k[m++] =
                                                p << 2 | (48 & q) >> 4; p = q; t = 2; break; case 2: k[m++] = (15 & p) << 4 | (60 & q) >> 2; p = q; t = 3; break; case 3: k[m++] = (3 & p) << 6 | q, t = 0
                                        }
                                    } if (1 === t) throw Error("invalid encoding"); return m - r
                                }; b.test = function (g) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g) }
                            }, function (c) {
                                function b() { this.Fb = {} } c.exports = b; b.prototype.D = function (d, e, f) { (this.Fb[d] || (this.Fb[d] = [])).push({ tb: e, b: f || this }); return this }; b.prototype.wa = function (d, e) {
                                    if (void 0 === d) this.Fb = {}; else if (void 0 === e) this.Fb[d] = []; else for (var f =
                                        this.Fb[d], g = 0; g < f.length;)f[g].tb === e ? f.splice(g, 1) : ++g; return this
                                }; b.prototype.tj = function (d) { var e = this.Fb[d]; if (e) { for (var f = [], g = 1; g < arguments.length;)f.push(arguments[g++]); for (g = 0; g < e.length;)e[g].tb.apply(e[g++].b, f) } return this }
                            }, function (c) {
                                function b(k) {
                                    "undefined" != typeof Float32Array ? function () {
                                        function m(h, n, u) { v[0] = h; n[u] = q[0]; n[u + 1] = q[1]; n[u + 2] = q[2]; n[u + 3] = q[3] } function p(h, n, u) { v[0] = h; n[u] = q[3]; n[u + 1] = q[2]; n[u + 2] = q[1]; n[u + 3] = q[0] } function r(h, n) {
                                            q[0] = h[n]; q[1] = h[n + 1]; q[2] = h[n + 2];
                                            q[3] = h[n + 3]; return v[0]
                                        } function t(h, n) { q[3] = h[n]; q[2] = h[n + 1]; q[1] = h[n + 2]; q[0] = h[n + 3]; return v[0] } var v = new Float32Array([-0]), q = new Uint8Array(v.buffer), l = 128 === q[3]; k.ei = l ? m : p; k.zl = l ? p : m; k.th = l ? r : t; k.Ok = l ? t : r
                                    }() : function () {
                                        function m(r, t, v, q) {
                                            var l = 0 > t ? 1 : 0; l && (t = -t); if (0 === t) r(0 < 1 / t ? 0 : 2147483648, v, q); else if (isNaN(t)) r(2143289344, v, q); else if (3.4028234663852886E38 < t) r((l << 31 | 2139095040) >>> 0, v, q); else if (1.1754943508222875E-38 > t) r((l << 31 | Math.round(t / 1.401298464324817E-45)) >>> 0, v, q); else {
                                                var h = Math.floor(Math.log(t) /
                                                    Math.LN2); r((l << 31 | h + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -h) * 8388608)) >>> 0, v, q)
                                            }
                                        } function p(r, t, v) { v = r(t, v); r = 2 * (v >> 31) + 1; t = v >>> 23 & 255; v &= 8388607; return 255 === t ? v ? NaN : 1 / 0 * r : 0 === t ? 1.401298464324817E-45 * r * v : r * Math.pow(2, t - 150) * (v + 8388608) } k.ei = m.bind(null, d); k.zl = m.bind(null, e); k.th = p.bind(null, f); k.Ok = p.bind(null, g)
                                    }(); "undefined" != typeof Float64Array ? function () {
                                        function m(h, n, u) { v[0] = h; n[u] = q[0]; n[u + 1] = q[1]; n[u + 2] = q[2]; n[u + 3] = q[3]; n[u + 4] = q[4]; n[u + 5] = q[5]; n[u + 6] = q[6]; n[u + 7] = q[7] } function p(h, n,
                                            u) { v[0] = h; n[u] = q[7]; n[u + 1] = q[6]; n[u + 2] = q[5]; n[u + 3] = q[4]; n[u + 4] = q[3]; n[u + 5] = q[2]; n[u + 6] = q[1]; n[u + 7] = q[0] } function r(h, n) { q[0] = h[n]; q[1] = h[n + 1]; q[2] = h[n + 2]; q[3] = h[n + 3]; q[4] = h[n + 4]; q[5] = h[n + 5]; q[6] = h[n + 6]; q[7] = h[n + 7]; return v[0] } function t(h, n) { q[7] = h[n]; q[6] = h[n + 1]; q[5] = h[n + 2]; q[4] = h[n + 3]; q[3] = h[n + 4]; q[2] = h[n + 5]; q[1] = h[n + 6]; q[0] = h[n + 7]; return v[0] } var v = new Float64Array([-0]), q = new Uint8Array(v.buffer), l = 128 === q[7]; k.yl = l ? m : p; k.xl = l ? p : m; k.Nk = l ? r : t; k.Mk = l ? t : r
                                    }() : function () {
                                        function m(r, t, v, q, l, h) {
                                            var n =
                                                0 > q ? 1 : 0; n && (q = -q); if (0 === q) r(0, l, h + t), r(0 < 1 / q ? 0 : 2147483648, l, h + v); else if (isNaN(q)) r(0, l, h + t), r(2146959360, l, h + v); else if (1.7976931348623157E308 < q) r(0, l, h + t), r((n << 31 | 2146435072) >>> 0, l, h + v); else if (2.2250738585072014E-308 > q) q /= 4.9E-324, r(q >>> 0, l, h + t), r((n << 31 | q / 4294967296) >>> 0, l, h + v); else { var u = Math.floor(Math.log(q) / Math.LN2); 1024 === u && (u = 1023); q *= Math.pow(2, -u); r(4503599627370496 * q >>> 0, l, h + t); r((n << 31 | u + 1023 << 20 | 1048576 * q & 1048575) >>> 0, l, h + v) }
                                        } function p(r, t, v, q, l) {
                                            t = r(q, l + t); q = r(q, l + v); r = 2 * (q >>
                                                31) + 1; v = q >>> 20 & 2047; t = 4294967296 * (1048575 & q) + t; return 2047 === v ? t ? NaN : 1 / 0 * r : 0 === v ? 4.9E-324 * r * t : r * Math.pow(2, v - 1075) * (t + 4503599627370496)
                                        } k.yl = m.bind(null, d, 0, 4); k.xl = m.bind(null, e, 4, 0); k.Nk = p.bind(null, f, 0, 4); k.Mk = p.bind(null, g, 4, 0)
                                    }(); return k
                                } function d(k, m, p) { m[p] = 255 & k; m[p + 1] = k >>> 8 & 255; m[p + 2] = k >>> 16 & 255; m[p + 3] = k >>> 24 } function e(k, m, p) { m[p] = k >>> 24; m[p + 1] = k >>> 16 & 255; m[p + 2] = k >>> 8 & 255; m[p + 3] = 255 & k } function f(k, m) { return (k[m] | k[m + 1] << 8 | k[m + 2] << 16 | k[m + 3] << 24) >>> 0 } function g(k, m) {
                                    return (k[m] << 24 | k[m +
                                        1] << 16 | k[m + 2] << 8 | k[m + 3]) >>> 0
                                } c.exports = b(b)
                            }, function (c) { c.exports = function () { return null } }, function (c, b) {
                                b.length = function (d) { for (var e = 0, f, g = 0; g < d.length; ++g)f = d.charCodeAt(g), 128 > f ? e += 1 : 2048 > f ? e += 2 : 55296 == (64512 & f) && 56320 == (64512 & d.charCodeAt(g + 1)) ? (++g, e += 4) : e += 3; return e }; b.read = function (d, e, f) {
                                    if (1 > f - e) return ""; for (var g, k = null, m = [], p = 0; e < f;)g = d[e++], 128 > g ? m[p++] = g : 191 < g && 224 > g ? m[p++] = (31 & g) << 6 | 63 & d[e++] : 239 < g && 365 > g ? (g = ((7 & g) << 18 | (63 & d[e++]) << 12 | (63 & d[e++]) << 6 | 63 & d[e++]) - 65536, m[p++] = 55296 +
                                        (g >> 10), m[p++] = 56320 + (1023 & g)) : m[p++] = (15 & g) << 12 | (63 & d[e++]) << 6 | 63 & d[e++], 8191 < p && ((k || (k = [])).push(String.fromCharCode.apply(String, m)), p = 0); return k ? (p && k.push(String.fromCharCode.apply(String, m.slice(0, p))), k.join("")) : String.fromCharCode.apply(String, m.slice(0, p))
                                }; b.write = function (d, e, f) {
                                    for (var g, k, m = f, p = 0; p < d.length; ++p)g = d.charCodeAt(p), 128 > g ? e[f++] = g : (2048 > g ? e[f++] = g >> 6 | 192 : (55296 == (64512 & g) && 56320 == (64512 & (k = d.charCodeAt(p + 1))) ? (g = 65536 + ((1023 & g) << 10) + (1023 & k), ++p, e[f++] = g >> 18 | 240, e[f++] =
                                        g >> 12 & 63 | 128) : e[f++] = g >> 12 | 224, e[f++] = g >> 6 & 63 | 128), e[f++] = 63 & g | 128); return f - m
                                }
                            }, function (c) { c.exports = function (b, d, e) { var f = e || 8192, g = f >>> 1, k = null, m = f; return function (p) { if (1 > p || p > g) return b(p); m + p > f && (k = b(f), m = 0); p = d.call(k, m, m += p); 7 & m && (m = 1 + (7 | m)); return p } } }, function (c, b, d) {
                                function e(p, r) { this.ba = p >>> 0; this.fa = r >>> 0 } c.exports = e; var f = d(0), g = e.Hm = new e(0, 0); g.Rh = function () { return 0 }; g.hi = g.gi = function () { return this }; g.length = function () { return 1 }; var k = e.Cl = "\x00\x00\x00\x00\x00\x00\x00\x00"; e.De =
                                    function (p) { if (0 === p) return g; var r = 0 > p; r && (p = -p); var t = p >>> 0; p = (p - t) / 4294967296 >>> 0; r && (p = ~p >>> 0, t = ~t >>> 0, 4294967295 < ++t && (t = 0, 4294967295 < ++p && (p = 0))); return new e(t, p) }; e.from = function (p) { if ("number" == typeof p) return e.De(p); if (f.We(p)) { if (!f.Pa) return e.De(parseInt(p, 10)); p = f.Pa.cm(p) } return p.low || p.high ? new e(p.low >>> 0, p.high >>> 0) : g }; e.prototype.Rh = function (p) { if (!p && this.fa >>> 31) { p = 1 + ~this.ba >>> 0; var r = ~this.fa >>> 0; p || (r = r + 1 >>> 0); return -(p + 4294967296 * r) } return this.ba + 4294967296 * this.fa }; var m =
                                        String.prototype.charCodeAt; e.Ij = function (p) { return p === k ? g : new e((m.call(p, 0) | m.call(p, 1) << 8 | m.call(p, 2) << 16 | m.call(p, 3) << 24) >>> 0, (m.call(p, 4) | m.call(p, 5) << 8 | m.call(p, 6) << 16 | m.call(p, 7) << 24) >>> 0) }; e.prototype.el = function () { return String.fromCharCode(255 & this.ba, this.ba >>> 8 & 255, this.ba >>> 16 & 255, this.ba >>> 24, 255 & this.fa, this.fa >>> 8 & 255, this.fa >>> 16 & 255, this.fa >>> 24) }; e.prototype.hi = function () { var p = this.fa >> 31; this.fa = ((this.fa << 1 | this.ba >>> 31) ^ p) >>> 0; this.ba = (this.ba << 1 ^ p) >>> 0; return this }; e.prototype.gi =
                                            function () { var p = -(1 & this.ba); this.ba = ((this.ba >>> 1 | this.fa << 31) ^ p) >>> 0; this.fa = (this.fa >>> 1 ^ p) >>> 0; return this }; e.prototype.length = function () { var p = this.ba, r = (this.ba >>> 28 | this.fa << 4) >>> 0, t = this.fa >>> 24; return 0 === t ? 0 === r ? 16384 > p ? 128 > p ? 1 : 2 : 2097152 > p ? 3 : 4 : 16384 > r ? 128 > r ? 5 : 6 : 2097152 > r ? 7 : 8 : 128 > t ? 9 : 10 }
                            }, function (c, b, d) {
                                function e() { g.call(this) } function f(m, p, r) { 40 > m.length ? k.bg.write(m, p, r) : p.Yh ? p.Yh(m, r) : p.write(m, r) } c.exports = e; var g = d(2); (e.prototype = Object.create(g.prototype)).constructor = e; var k =
                                    d(0); e.Da = function () { e.ec = k.Ic; e.wl = k.ua && k.ua.prototype instanceof Uint8Array && "set" === k.ua.prototype.set.name ? function (m, p, r) { p.set(m, r) } : function (m, p, r) { if (m.lj) m.lj(p, r, 0, m.length); else for (var t = 0; t < m.length;)p[r++] = m[t++] } }; e.prototype.fc = function (m) { k.We(m) && (m = k.Jc(m, "base64")); var p = m.length >>> 0; this.l(p); p && this.ya(e.wl, p, m); return this }; e.prototype.L = function (m) { var p = k.ua.byteLength(m); this.l(p); p && this.ya(f, p, m); return this }; e.Da()
                            }, function (c, b, d) {
                                function e(k) { f.call(this, k) } c.exports =
                                    e; var f = d(3); (e.prototype = Object.create(f.prototype)).constructor = e; var g = d(0); e.Da = function () { g.ua && (e.prototype.sg = g.ua.prototype.slice) }; e.prototype.L = function () { var k = this.l(); return this.aa.sl ? this.aa.sl(this.H, this.H = Math.min(this.H + k, this.da)) : this.aa.toString("utf-8", this.H, this.H = Math.min(this.H + k, this.da)) }; e.Da()
                            }, function (c, b, d) { b.Ll = d(17) }, function (c, b, d) {
                                function e(g) { if ("function" != typeof g) throw TypeError("rpcImpl must be a function"); f.kg.call(this); this.Cf = g } c.exports = e; var f = d(0);
                                (e.prototype = Object.create(f.kg.prototype)).constructor = e; e.prototype.end = function (g) { this.Cf && (g || this.Cf(null, null, null), this.Cf = null, this.tj("end").wa()); return this }
                            }, function (c) { c.exports = {} }])
                        } catch (c) { }
                    })), zp = { $b: "topics", xf: "publicationDate", mf: "pageUrlCanonical", $f: "updateDate", Hb: "authors", de: "articleInfo", Vb: "rubric", yf: "publishersHeader", Ja: "involvedTime", lf: "pageTitle", bf: "maxScrolled", Kb: "chars", Gb: "articleMeta" }, Ap = function () {
                        function a(c) {
                            this.b = c; this.qc = x(Ha, Vb(function (b, d) {
                                b[d[1]] =
                                    d[0]; return b
                            }, {}))(zp); if ("undefined" === typeof Nf) return this; try { this.$a = w(Nf, "ru").V.O.T.R } catch (b) { }
                        } a.prototype.Oh = function (c) { var b, d = this.qf(c.data); return { $: da(this.b)(df), data: (b = {}, b[this.qc[c.type]] = d, b) } }; a.prototype.qf = function (c) { var b = this; return ea(c) ? B(D(this.qf, this), c) : lc(c) ? x(Ha, Vb(function (d, e) { var f = e[0]; d[b.qc[f] || f] = b.qf(e[1]); return d }, {}))(c) : sa(c) ? "" : c }; a.prototype.kb = function (c) { return this.$a.ua.encode(this.Oh(c)).finish() }; a.prototype.ub = function (c) { return (new this.b.Blob([c])).size };
                        a.prototype.Od = function (c) { return [c] }; a.prototype.Cb = function (c) { c = this.$a.jg.encode({ buffer: B(D(this.Oh, this), c) }); return kd(c.finish()) }; a.prototype.isEnabled = function () { return this.$a && nh(this.b) }; return a
                    }(), wj = function () {
                        function a(c, b, d) { this.zg = 0; this.pf = 1; this.Yd = 5E3; this.b = c; this.Na = b; this.If = d } a.prototype.Nd = function () { this.zg = Z(this.b, x(D(this.flush, this), D(this.Nd, this)), this.Yd, "b.f") }; a.prototype.send = function (c, b) { this.If(c, b || [], this.pf); this.pf += 1 }; a.prototype.push = function () { }; a.prototype.flush =
                            function () { }; return a
                    }(), Of, Pf = (Of = function (a) {
                        function c(b, d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.Uf = 0; d.dc = 0; d.Tf = 0; d.buffer = []; d.Yd = 2E3; d.na = Dc(b); d.Nd(); d.Tf = f; return d } Ba(c, a); c.prototype.Jg = function (b) { return Y(Boolean, this.na.ea("ag", b)) }; c.prototype.Ig = function (b, d) { var e = this; b($b(C(this.b, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.Zk = function (b, d) {
                            var e = this; oa(this.b, this.zg); var f = Math.ceil(this.Na.ub(d) / 63E4), g = this.Na.Od(d, f); E(function (k, m) {
                                var p, r = F({}, b, (p =
                                    {}, p.data = k, p.partNum = m + 1, p.end = m + 1 === f, p)); p = e.Na.Cb([r], !1); e.Ig(p, [r])
                            }, g); this.Nd()
                        }; c.prototype.send = function (b, d) { this.na.ea("se", d); a.prototype.send.call(this, b, d) }; c.Fe = function (b, d, e, f, g) { c.ee["" + b + d] || (this.ee[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.ee[d] }; c.prototype.ik = function () { return this.Tf && this.Uf >= this.Tf }; c.prototype.push = function (b) {
                            var d = this; if (!this.ik()) {
                                this.na.ea("p", b); var e = this.Na.kb(b), f = this.Na.ub(e); 7E5 < f ? this.Zk(b, e) : (e = this.Jg(this.buffer.concat([b])), e =
                                    K(function (g, k) { return g + d.Na.ub(d.Na.kb(k)) }, 0, e), this.dc + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.dc += f)
                            }
                        }; c.prototype.D = function (b, d) { this.na.D(b, d) }; c.prototype.wa = function (b, d) { this.na.wa(b, d) }; c.prototype.flush = function () { var b = this.buffer.concat(this.Jg(this.buffer)); if (b.length) { this.buffer = []; this.Uf += this.dc; this.dc = 0; var d = this.Na.Cb(b); this.Ig(d, b) } }; return c
                    }(wj), Of.ee = {}, Of), gd, Qf = (gd = {}, gd[1] = 500, gd[2] = 500, gd[3] = 0, gd), Rf = function () {
                        function a(c) {
                            var b, d = this; this.id = "a"; this.Qe =
                                !1; this.lc = {}; this.Wb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), lh: ["article"] }; this.Yf = (b = {}, b.Answer = 3, b.Review = 2, b); this.kj = z(function (e, f) { xb(d.b, "Warning: content has only " + f.chars + " chars. Required " + Qf[f.type], f) }); this.b = c; this.root = Ub(c)
                        } a.prototype.eb = function (c) { return c.element }; a.prototype.Kg = function (c, b) { var d = this, e; C(this.b, "P.s." + b, function () { e = d.lc[b].call(d, c) })(); return e }; a.prototype.Lk = function (c) {
                            var b = F({}, c); this.Qe && !b.id && J(c.type,
                                [3, 2]) && (c = H(", ", B(W("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle = this.Xj(b.kc)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Uj()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                        }; a.prototype.Ua = function (c) {
                            var b = this, d = {}, e = this.eb(c); if (!e) return null; d.type = c.type; E(function (g) { d[g] = b.Kg(c, g) }, qa(this.lc)); var f = da(this.b); d.stamp = f(df); d.element = c.element; d.kc = e; d = this.Lk(d); d.id = d.id ? tc(d.id) :
                                1; d.update = function (g) { return b.eb(c) ? b.Kg(c, g) : void 0 }; return d
                        }; a.prototype.Xj = function (c) { for (var b = 1; 5 >= b; b += 1) { var d = Ra(ic(this.b, c, "h" + b)); if (d) return d } }; a.prototype.Uj = function () { var c = ic(this.b, this.root, '[rel="canonical"]'); if (c) return c.href }; a.prototype.Og = function () { return 1 }; a.prototype.bd = function () { return [] }; a.prototype.Bj = function () {
                            var c = this, b = this.bd(), d = 1; return K(function (e, f) {
                                var g = c.Ua({ element: f, type: c.Og(f) }) || []; ea(g) || (g = [g]); g = K(function (k, m) {
                                    var p = k.values, r = k.Sg; m &&
                                        m.chars > Qf[m.type] && !J(m.id, r) ? (p.push(m), r.push(m.id)) : m && m.chars <= Qf[m.type] && c.kj(m.id, m); return { values: p, Sg: r }
                                }, { values: [], Sg: B(W("id"), e) }, g).values; return e.concat(B(function (k) { var m; k = F((m = { index: d, Hf: !1 }, m.involvedTime = 0, m), k); d += 1; return k }, g))
                            }, [], b)
                        }; return a
                    }(), xj = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Qe = !0; d.yg = H(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                            d.lc = (b = {}, b.id = function (e) { var f = e.data["@id"]; e = e.data.mainEntity || e.data.mainEntityOfPage; !f && e && (f = e["@id"]); return f }, b.chars = function (e) { return "string" === typeof e.data.text ? e.data.text.length : this.eb(e).innerText.length }, b.authors = function (e) { var f = []; f = f.concat(this.ad(e.data, "author")); f = f.concat(this.ad(e.data.mainEntity, "author")); return f.concat(this.ad(e.data.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                var f = e.data.headline || ""; e.data.Ql && (f += " " + e.data.alternativeHeadline); "" ===
                                    f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed)); 3 === e.type && e.data.parentItem && (f = e.data.parentItem.text); return f
                            }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.ad(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                var f = this, g = this.eb(e); e = Y(Boolean, B(function (k) {
                                    if (k = ib(f.b, k.innerText)) {
                                        var m = f.Lg(k);
                                        if (m) return K(function (p, r) { return p ? p : "BreadcrumbList" === r["@type"] ? r : p }, null, m); if ("BreadcrumbList" === k["@type"]) return k
                                    } return null
                                }, [e.element].concat(ha(Ab(this.yg, this.b, document.body === g ? document.documentElement : g))))); return e.length && (e = e[0].itemListElement, ea(e)) ? Y(Boolean, B(function (k) { return k.item && !f.b.isNaN(k.position) ? { name: k.item.name || k.name, position: k.position } : null }, e)) : []
                            }, b); return d
                        } Ba(c, a); c.prototype.ad = function (b, d, e) {
                            void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = ea(b[d]) ?
                                b[d] : [b[d]]; b = Y(Boolean, B(function (f) { return f ? "string" === typeof f ? f : K(function (g, k) { return g || f[k] }, "", e) : null }, b)); return B(function (f) { var g; return g = {}, g.name = f, g }, b)
                        }; c.prototype.eb = function (b) { var d = b.element, e = b.data["@id"], f = b.data.url; b = null; f && "string" === typeof f && (b = this.Eg(f)); !b && e && "string" === typeof e && (b = this.Eg(e)); b || (b = e = d.parentNode, !Bb("head", this.b, d) && e && 0 !== e.innerText.length) || (b = this.b.document.body); return b }; c.prototype.Eg = function (b) {
                            try {
                                var d = Eb(this.b, b).hash; if (d) {
                                    var e =
                                        ic(this.b, this.b.document.body, d); if (e) return e
                                }
                            } catch (f) { } return null
                        }; c.prototype.nf = function (b) { return this.Yf[b["@type"]] || 1 }; c.prototype.Ua = function (b) {
                            var d = this, e = b.element; if (!b.data && (b.data = ib(this.b, e.innerText), !b.data || !/schema\.org/.test(b.data["@context"]) && !ea(b.data))) return null; var f = this.Lg(b.data); if (f) return B(function (k) { if (!J(k["@type"], d.Wb["schema.org"])) return null; k = { element: e, data: k, type: d.nf(k) }; return a.prototype.Ua.call(d, k) }, f); if ("QAPage" === b.data["@type"]) {
                                var g =
                                    b.data.mainEntity || b.data.mainEntityOfPage; if (!g) return null
                            } "Question" === b.data["@type"] && (g = b.data); return g ? (b = Sb(A(g, w), ["acceptedAnswer", "suggestedAnswer"]), B(function (k) { var m; if (!k || !J(k["@type"], d.Wb["schema.org"])) return null; k = { element: e, type: d.nf(k), data: F((m = {}, m.parentItem = g, m), k) }; return a.prototype.Ua.call(d, k) }, b)) : J(b.data["@type"], this.Wb["schema.org"]) ? a.prototype.Ua.call(this, F(b, { type: this.nf(b.data) })) : null
                        }; c.prototype.bd = function () { return Ab(this.yg, this.b, this.root) }; c.prototype.Lg =
                            function (b) { return ea(b) && b || b && ea(b["@graph"]) && b["@graph"] }; return c
                    }(Rf), Sf = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Qe = !0; d.nl = fa("exec", new RegExp("schema.org\\/(" + H("|", qa(d.Yf)) + ")$")); d.lc = (b = {}, b.id = function (e) { e = e.element; var f = Wa(this.b, e, "identifier"); return f ? Ra(f) : (f = Wa(this.b, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) {
                                var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions",
                                    "description", "text"], k = 0; k < g.length; k += 1) { var m = Wa(this.b, e, g[k]); if (m) { f = Ra(m).length; break } } 0 === f && e.innerText && (f += e.innerText.length); return f
                            }, b.topics = function (e) { var f = this, g = Zc(this.b, e.element, "about"); return B(function (k) { var m = { name: Ra(k) }; if (g = Wa(f.b, k, "name")) m.name = Ra(g); return m }, g) }, b.rubric = function (e) {
                                var f = this; (e = ic(this.b, e.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (e = ic(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]')); return e ? B(function (g) {
                                    return {
                                        name: Ra(Wa(f.b,
                                            g, "name")), position: Ra(Wa(f.b, g, "position"))
                                    }
                                }, Zc(this.b, e, "itemListElement")) : []
                            }, b.updateDate = function (e) { return (e = Wa(this.b, e.element, "dateModified")) ? Fi(e) : "" }, b.publicationDate = function (e) { return (e = Wa(this.b, e.element, "datePublished")) ? Fi(e) : "" }, b.pageUrlCanonical = function (e) { e = Zc(this.b, e.element, "url"); return e.length ? e[0].href ? e[0].href : Ra(e) : null }, b.pageTitle = function (e) {
                                var f = "", g = e.element, k = Wa(this.b, g, "headline"); k && (f += Ra(k)); (k = Wa(this.b, g, "alternativeHeadline")) && (f += " " + Ra(k)); "" ===
                                    f && ((k = Wa(this.b, g, "name")) || (k = Wa(this.b, g, "itemReviewed")), k && (f += Ra(k))); 3 === e.type && (e = Bb('[itemtype$="schema.org/Question"]', this.b, g)) && (e = Wa(this.b, e, "text")) && (f += Ra(e)); return f
                            }, b.authors = function (e) {
                                var f = this; e = Zc(this.b, e.element, "author"); return B(function (g) { var k, m = (k = {}, k.name = "", k); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (k = Wa(f.b, g, "name")) && (m.name = Ra(k)); m.name || (m.name = g.getAttribute("content") || g.innerText || g.getAttribute("href")); return m },
                                    e)
                            }, b); return d
                        } Ba(c, a); c.prototype.Og = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.nl(b)) ? this.Yf[b[1]] : 1 }; c.prototype.Ua = function (b) { return b.element && b.element.innerText && b.element.innerText.length ? a.prototype.Ua.call(this, b) : null }; c.prototype.bd = function () { var b = H(",", B(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.Wb["schema.org"])); return Ab(b, this.b, this.root) }; return c
                    }(Rf), yj = function (a) {
                        function c(b) {
                            var d; b = a.call(this, b) || this; b.id = "o"; b.lc = (d = {}, d.chars = function (e) {
                                e =
                                    this.eb(e); return e.innerText ? e.innerText.length : 0
                            }, d.authors = function (e) { return this.Ee(e.data.author) }, d.pageTitle = function (e) { return this.hd(e.data.title) || "" }, d.updateDate = function (e) { return this.hd(e.data.modified_time) }, d.publicationDate = function (e) { return this.hd(e.data.published_time) }, d.pageUrlCanonical = function (e) { return this.hd(e.data.url) }, d.rubric = function (e) { return this.Ee(e.data.section) }, d.topics = function (e) { return this.Ee(e.data.tag) }, d); b.vj = new RegExp("^(og:)?((" + H("|", b.Wb.lh) +
                                "):)?"); return b
                        } Ba(c, a); c.prototype.Ee = function (b) { var d; return b ? ea(b) ? B(function (e) { var f; return f = {}, f.name = e, f }, b) : [(d = {}, d.name = b, d)] : [] }; c.prototype.hd = function (b) { return ea(b) ? b.length ? b[0] : null : b }; c.prototype.bd = function () { var b = Ab('meta[property="og:type"]', this.b, this.b.document.body); return [this.b.document.head].concat(b) }; c.prototype.Nj = function (b) {
                            var d = this, e = b.element, f = {}, g = this.eb(b); e = Ab("meta[property]", this.b, e === this.b.document.head ? e : g); if (e.length) E(function (k) {
                                try {
                                    if (k.parentNode ===
                                        g || k.parentNode === d.b.document.head) { var m = k.getAttribute("property").replace(d.vj, ""), p = Ra(k); f[m] ? ea(f[m]) ? f[m].push(p) : f[m] = [f[m], p] : f[m] = p }
                                } catch (r) { Me(d.b, "og.ed", r) }
                            }, e); else return null; return J(f.type, this.Wb.lh) ? F(b, { data: f }) : null
                        }; c.prototype.eb = function (b) { b = b.element; var d = this.b.document; return b === d.head ? d.body : b.parentNode }; c.prototype.Ua = function (b) { return (b = this.Nj(b)) ? a.prototype.Ua.call(this, b) : null }; return c
                    }(Rf), zj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                    Bp = function () {
                        function a(c, b, d) { this.qd = !1; this.ga = {}; this.scroll = { x: 0, y: 0 }; this.Ja = this.eh = 0; this.ef = this.oh = ""; this.Aa = []; this.mb = 0; this.ac = { Va: 0, cg: 0 }; this.buffer = d; this.Hc = D(this.Hc, this); this.dd = D(this.dd, this); this.yd = D(this.yd, this); this.b = c; this.Jd = b; this.Xe = "pai" + b.id; this.mc(); this.Bg = ia(this.b); this.time = da(this.b); this.Wh(); this.jd = U(this.b) } a.prototype.start = function () {
                            var c = this; if (!this.qd) {
                                this.buffer.D("ag", this.dd); this.buffer.D("se", this.yd); this.$k(); var b = this.jd.o(this.Xe, []),
                                    d = !b.length; b.push(D(this.lk, this)); this.jd.Db(this.Xe, b); d && this.Ah(); this.jd.Db("pai", function () { return c.Aa.length ? K(function (e, f) { return (e.Kd || 0) <= (f.Kd || 0) ? f : e }, c.Aa[0], c.Aa.slice(1)).id : 0 }); this.Hc({ type: "page", target: this.b })
                            }
                        }; a.prototype.stop = function () { this.buffer.wa("se", this.yd); this.buffer.wa("ag", this.dd); this.ol(); this.qd = !0 }; a.prototype.ah = function (c) { return Bb("html", this.b, c) !== this.b.document.documentElement }; a.prototype.Ah = function () {
                            var c = this; C(this.b, "p.ic" + this.Jd.id, function () {
                                if (!c.qd) {
                                    var b =
                                        c.jd.o(c.Xe), d = c.Jd.Bj(); E(function (e) { var f = B(function (g) { return F({}, g) }, d); V(e) && e(f) }, b); c.mb = Z(c.b, D(c.Ah, c), 1E3, "p")
                                }
                            })()
                        }; a.prototype.lk = function (c) { this.qd || (this.pl(c), this.ql(), this.Uk()) }; a.prototype.Hc = function (c) {
                            var b = this; C(this.b, "p.ec." + this.Jd.id, function () {
                                try { var d = c.type; var e = c.target } catch (p) { return } var f = "page" === d; if ("scroll" === d || f) { var g = [b.b, b.b.document, b.b.document.documentElement, ec(b.b)]; J(e, g) && b.mc() } ("resize" === d || f) && b.Wh(); d = b.time(ba); var k = Math.min(d - b.eh, 5E3);
                                b.Ja += Math.round(k); b.eh = d; if (b.ga && b.scroll && b.ac) { var m = b.ac.Va * b.ac.cg; b.Aa = B(function (p) { var r = F({}, p), t = b.ga[r.id], v = Ec(p.kc); if (!t || b.ah(r.element) || !v) return r; p = b.b.Math; t = p.max((b.scroll.y + b.ac.Va - t.y) / t.height, 0); var q = v.height * v.width; v = b.ej(v); r.Kd = v / m; r.visibility = v / q; if (.9 <= r.visibility || .1 <= r.Kd) r.involvedTime += k; r.maxScrolled = p.round(1E4 * t) / 1E4; return r }, b.Aa) }
                            })()
                        }; a.prototype.ej = function (c) {
                            var b = c.top, d = c.bottom, e = c.left, f = this.ac, g = f.cg; f = f.Va; var k = this.b.Math; c = k.min(k.max(c.right,
                                0), g) - k.min(k.max(e, 0), g); return (k.min(k.max(d, 0), f) - k.min(k.max(b, 0), f)) * c
                        }; a.prototype.pl = function (c) { var b = B(function (d) { return d.id }, this.Aa); this.Aa = this.Aa.concat(Y(function (d) { return !J(d.id, b) }, c)) }; a.prototype.Wh = function () { var c = qf(this.b) || Uc(this.b); this.ac = { cg: c[0], Va: c[1] } }; a.prototype.ql = function () {
                            var c = this; C(this.b, "p.um." + this.Jd.id, function () {
                                var b = []; c.mc(); c.ga = K(function (d, e) {
                                    var f; if (c.ah(e.element)) b.push(e), delete d[e.id]; else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime,
                                            0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.kc && (f = Ec(e.kc)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g
                                    } return d
                                }, {}, c.Aa); E(function (d) { d = ae(c.b)(d, c.Aa); c.Aa.splice(d, 1) }, b)
                            })()
                        }; a.prototype.yd = function () { this.oh = this.ef }; a.prototype.dd = function () {
                            var c, b, d = B(A(this.ga, w), qa(this.ga)); return d.length && (this.ef = cb(this.b, d), this.oh !== this.ef) ? (c =
                                {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Ja, b), c) : null
                        }; a.prototype.Uk = function () {
                            var c = this; if (this.Aa.length) {
                                var b = Y(function (d) { return !d.Hf }, this.Aa); E(function (d) { var e, f = F({}, d); delete f.kc; delete f.Hf; delete f.index; delete f.involvedTime; delete f.visibility; delete f.Kd; delete f.maxScrolled; delete f.update; delete f.element; delete f.type; c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e)); d.Hf = !0 }, b); b.length && xb(this.b, "Publisher content info found: ",
                                    b)
                            }
                        }; a.prototype.$k = function () { this.Bg.D(this.b, zj, this.Hc) }; a.prototype.ol = function () { this.Bg.Fc(this.b, zj, this.Hc) }; a.prototype.mc = function () { this.scroll = { x: this.b.pageXOffset || w(this.b, "document.documentElement.scrollLeft") || 0, y: this.b.pageYOffset || w(this.b, "document.documentElement.scrollLeft") || 0 } }; return a
                    }(), hd = {}; xj && (hd.json_ld = xj); Sf && (hd.schema = Sf, hd.microdata = Sf); yj && (hd.opengraph = yj); var Cp = G("p.p", function (a, c) {
                        function b(p, r, t) { e(F({}, m, { oa: p }), c, t)["catch"](C(a, "s.ww.p")) } if (!ua("querySelectorAll",
                            a.document.querySelectorAll)) return Q.resolve(); var d = [new fe(a)]; d.unshift(new Ap(a)); var e = ra(a, "p", c), f = Ta(function (p) { return p.isEnabled() }, d); d = wa(); var g = cd(a, c.id), k = g.o("pai"); k && (g.Lb("pai"), d.C("pai", k)); var m = { M: {}, Y: d, Yg: !(f instanceof fe) }; return Ga(a, c, C(a, "ps.s", function (p) { if (p = w(p, "settings.publisher.schema")) { p = ui(c) ? "microdata" : p; var r = hd[p]; if (r && f) { var t = Pf.Fe(X(c), "e", b, f, a); r = new r(a); (new Bp(a, r, t)).start(); xb(a, 'Publishers analytics schema "' + p + '"') } } }))
                    }), mh = ka(function (a,
                        c) { return c[a] || {} }), Ul = ka(function (a, c, b) { var d = mh(a, b); b[a] = F(d, c) }), Dp = ka(function (a, c) { delete c[a] }), Ep = G("c.c.cc", function (a) { var c = U(a), b = x(A(a, vd), Ka, function (d) { var e; return F({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = d.clickmap && !!d.clickmap, e)) }); return C(a, "g.c.cc", x(D(c.o, c, "counters", {}), qa, Va(b))) }), Fp = G("gt.c.rs", function (a, c) { var b, d = X(c), e = Mc(a, d), f = c.id, g = c.sa, k = c.jj, m = c.Eb, p = c.Wf; d = x(A(d, Dp), Oe(a)); e((b = {}, b.id = f, b.type = +g, b.clickmap = k, b.webvisor = !!m, b.trackHash = !!p, b)); return d }),
                        Hi, Gp = G("th.e", function (a, c) { function b() { f || (k = Lc(a, "onhashchange") ? ia(a).D(a, ["hashchange"], g) : Vn(a, g)) } var d = ra(a, "t", c), e = Mc(a, X(c)), f = !1, g = C(a, "h.h.ch", D(Wn, null, a, c, d)), k = I; c.Wf && (b(), f = !0); return { jl: C(a, "tr.hs.h", function (m) { var p; m ? b() : k(); f = !!m; e((p = {}, p.trackHash = f, p)) }), unsubscribe: k } }), Hp = {
                            1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1,
                            1555719328: 1, 1417229093: 1, 138396985: 1
                        }, Ii = 1, zf = {}, Yd = {}, Jp = G("nb.p", function (a, c) {
                            function b(n) { m() || (n = "number" === typeof n ? n : 15E3, n = Yn(a, d(!1), n), q = n.id, h = n.Ag, p()) } function d(n) {
                                return function (u) {
                                    var O, y, L; void 0 === u && (u = (O = {}, O.ctx = {}, O.callback = I, O)); if (n || !v && !k.Re) {
                                        v = !0; p(); q && Xn(a, q); var T = r(ba); O = (parseInt(k.o("lastHit"), 10) || 0) < T - 18E5; var Db = .1 > Math.random(); k.C("lastHit", T); T = wa((y = {}, y.nb = "1", y.cl = l, y.ar = "1", y)); y = fd(c); y = { M: (L = {}, L["page-url"] = y.url || R(a).href, L), Y: T }; L = dd(a).warn; !u.callback &&
                                            u.ctx && L('"callback" argument missing'); (n || O || Db || !Um(a.location.href, a.document.referrer)) && f(y, c).then(function () {
                                                if (!n) {
                                                    var yc = .002, zc = c.id === Aa.Hi ? 1 : .002, Ac, ge, Tf, he, Uf; void 0 === yc && (yc = 1); void 0 === zc && (zc = 1); var id = a.performance; if (id && V(id.getEntriesByType) && (yc = Math.random() > yc, zc = Math.random() > zc, !yc || !zc)) {
                                                        id = a.performance.getEntriesByType("resource"); for (var ie = {}, Vf = {}, je = {}, Wf = 0; Wf < id.length; Wf += 1) {
                                                            var nb = id[Wf], ke = nb.name.replace(/^https?:\/\//, "").split("?")[0], Ip = tc(ke), Aj = (Ac = {},
                                                                Ac.dns = Math.round(nb.domainLookupEnd - nb.domainLookupStart), Ac.tcp = Math.round(nb.connectEnd - nb.connectStart), Ac.duration = Math.round(nb.duration), Ac.response = Math.round(nb.responseEnd - nb.requestStart), Ac); "script" !== nb.initiatorType || yc || (Vf[ke] = F(Aj, (ge = {}, ge.name = nb.name, ge.decodedBodySize = nb.decodedBodySize, ge))); !Hp[Ip] || ie[ke] || zc || (ie[ke] = F(Aj, (Tf = {}, Tf.pages = a.location.href, Tf)))
                                                        } qa(ie).length && (je.timings8 = ie); qa(Vf).length && (je.scripts = Vf); if (qa(je).length) ra(a, "d", c)({
                                                            Y: wa((he = {}, he.ar = "1",
                                                                he.pv = "1", he)), oa: cb(a, je) || void 0, M: (Uf = {}, Uf["page-url"] = a.location && "" + a.location.href, Uf)
                                                        }, { id: Aa.Mi, sa: "0" })["catch"](C(a, "r.tim.ng2"))
                                                    }
                                                }
                                            }).then(M([a, u.callback, u.ctx], Jb), C(a, "l.o.l"))
                                    }
                                }
                            } var e, f = ra(a, "n", c), g = X(c), k = cd(a, c.id), m = A(vd(a, g), x(Ka, W("accurateTrackBounce"))), p = A((e = {}, e.accurateTrackBounce = !0, e), Mc(a, g)), r = da(a), t = r(ba), v = !1, q = 0, l = 0, h; Ga(a, c, function (n) { l = n.Cj - t }); c.Kc && b(c.Kc); return { zk: d(!0), Kc: b, te: h }
                        }), Xf = ["yandex_metrika_callback" + Sc.callbackPostfix, "yandex_metrika_callbacks" +
                            Sc.callbackPostfix], Kp = G("cb.i", function (a) { var c = Xf[0], b = Xf[1]; if (V(a[c])) a[c](); "object" === typeof a[b] && E(function (d, e) { a[b][e] = null; Jb(a, d) }, a[b]); E(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, Xf) }), Bj = { fm: $a(/[/&=?#]/) }, se = G("go.in", function (a, c, b, d) {
                                void 0 === b && (b = "goal"); return function (e, f, g, k) {
                                    var m, p; if (!(!e || Bj[b] && Bj[b](e))) {
                                        var r = f, t = g || I; V(f) && (t = f, r = void 0, k = g); f = Cb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, r); g = "goal" === b; var v = ra(a, "g", c); var q = b; var l = R(a); var h = l.hostname;
                                        l = l.href; var n = fd(c).url; n && (l = Eb(a, n), h = l.hostname, l = l.href); q = [q + "://" + h + "/" + e, l || ""]; e = q[0]; q = q[1]; v({ ia: r, Y: wa((m = {}, m.ar = 1, m)), M: (p = {}, p["page-url"] = e, p["page-ref"] = q, p) }, c).then(x(g ? f || I : I, d || I))["catch"](C(a, "g.s")).then(D(Jb, null, a, t, k))
                                    }
                                }
                            }), Sl = /^ *(data|javascript):/i, kh = new RegExp(H("", ["\\.(" + H("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) +
                                ")$"]), "i"), Lp = Ea(function (a, c) { Oa(c) ? a.push(c) : E(x(N, fa("push", a)), c) }), Mp = G("cl.p", function (a, c) {
                                    function b(r, t, v, q) { void 0 === q && (q = {}); v ? ud(a, c, { url: v, Te: !0, Se: r, vd: t, sender: d, b: q.ctx, Jb: q.callback, title: q.title, ia: q.params }, Cb(a, c, (r ? "File" : "Ext link") + ". Counter " + c.id + ". Url: " + v, q)) : f.warn("Empty link") } var d = ra(a, "2", c), e = [], f = dd(a), g = X(c), k = C(a, "s.s.tr", A(Mc(a, g), Tl)); g = { b: a, oj: c, Aj: e, sender: d, globalStorage: U(a), nj: cd(a, c.id), bk: qc(a), kl: A(vd(a, g), x(Ka, W("trackLinks"))) }; g = C(a, "cl.p.c", A(g,
                                        Ql)); g = ia(a).D(a, ["click"], g); c.Rd && k(c.Rd); var m = C(a, "file.clc", M([!0, !1], b)), p = C(a, "e.l.l.clc", M([!1, !0], b)); e = C(a, "add.f.e.clc", Lp(e)); return { file: m, xj: p, Zi: e, Rd: k, te: g }
                                }), Np = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Op = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Ol = { M: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, gh = { id: 42822899, sa: "0" }, ih = Vd("csp", function (a, c) { return ra(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }),
                        hh = x(W("settings.pcs"), ta("1")), Pp = G("s", function (a, c) { return Ga(a, c, function (b) { var d = da(a), e = Pl(a, b.userData, c), f = Vc(a), g = x(Gf, Ib(["iPhone", "iPad"]))(a); return (f || g) && Ll(a, d, c, e, b).then(function () { if (f) var k = Np; else if (g) k = Op; else return; return Jl(a, k, c, e, d) }, I) }) }), El = Ea(Zb)("(ym-disable-clickmap|ym-clickmap-ignore)"), Qp = G("clm.p", function (a, c) {
                            if (rc(a)) return I; var b = ra(a, "m", c), d = X(c), e = da(a), f = e(ba), g = A(vd(a, d), x(Ka, W("clickmap"))), k, m = null; d = C(a, "clm.p.c", function (p) {
                                var r = g(); if (r) {
                                    var t =
                                        "object" === typeof r ? r : {}, v = t.filter; r = t.isTrackHash || !1; var q = B(function (h) { return ("" + h).toUpperCase() }, t.ignoreTags || []); S(k) && (k = t.quota || null); var l = !!t.quota; p = { element: Fl(a, p), position: fh(a, p), button: Gl(p), time: e(ba) }; t = R(a).href; if (Dl(a, p, m, q, v)) {
                                            if (l) { if (!k) return; --k } q = Nd(a, p.element); v = q[0]; q = q[1]; l = pf(a, p.element); v = ["rn", Ya(a), "x", Math.floor(65535 * (p.position.x - l.left) / (v || 1)), "y", Math.floor(65535 * (p.position.y - l.top) / (q || 1)), "t", Math.floor((p.time - f) / 100), "p", mi(a, p.element), "X", p.position.x,
                                                "Y", p.position.y]; v = H(":", v); r && (v += ":wh:1"); Cl(a, t, v, b, c); m = p
                                        }
                                }
                            }); return ia(a).D(w(a, "document"), ["click"], d)
                        }), Rp = z(function (a) { var c = U(a), b = c.o("isEU"); if (S(b)) { var d = parseInt(Ic(a, "is_gdpr") || "", 10); if (J(d, [0, 1])) c.C("isEU", d), b = !!d; else if (a = Ma(a).o("wasSynced"), a = w(a, "params.eu")) c.C("isEU", a), b = !!a } return b }, function (a) { return U(a).o("isEU") }), ve = G("i.e", Rp), Sp = function () {
                            function a(c, b) { this.b = c; this.Lj = b } a.prototype.Cb = function (c) { return kd(Sb(D(this.kb, this), c)) }; a.prototype.kb = function (c,
                                b) { var d = this, e = [], f = this.Lj(this.b, b && b.type, c.type); f && (e = Sb(function (g) { return g({ b: d.b, Ea: c }) || [] }, f)); return e }; a.prototype.ub = function (c) { return c.length }; a.prototype.Od = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
                        }(), ll = function (a) {
                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.Di = 7500; b.Yd = 3E4; b.Nd(); return b } Ba(c, a); c.prototype.push = function (b, d) { var e = this.Na.kb(b, d); Ua(this.buffer, e); this.Na.ub(this.buffer) > this.Di && this.flush() }; c.prototype.flush =
                                function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c
                        }(wj), Na = "metrikaId_" + Math.random(), Yb = { ne: 0 }, Cj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                        Al = /ym-hide-content/, Bl = /ym-show-content/, xl = /^[\w\u0410-\u042f\u0430-\u044f]$/, yl = [65, 90], zl = [97, 122], vl = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), tl = new RegExp("(" + H("|", Cj) + ")", "i"), Ji = ["password", "passwd", "pswd"], ul = new RegExp("(" + H("|", Cj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                            ")", "i"), bo = z(function () {
                                var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT =
                                    47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a
                            }), Zn = [17, 18, 38, 32, 39, 15, 11, 7, 1], Tp =
                            function () {
                                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                                return {
                                    dm: new RegExp("(" + H("|", a) + ")", "i"), wm: new RegExp("(" + H("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                        ")", "i"), bm: /ym-record-keys/i, Bk: "\u2022", vm: 88
                                }
                            }(), Oi = Va(A(Tp.Bk, N)), Jc = !0, Cf = "", Df = !1, Ef = !0, Ff = !1, rl = Ea(function (a, c) { var b = M([a, "efv." + c.event], C); c.ha = B(x(N, b), c.ha); return c }), Dj = z(function (a) {
                                var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(Ie), b.push(go), b.push(ho)); a.document.addEventListener ? c.push(Mi) : (b.push(Li), d.push(Mi)); c = ja([{ target: a, type: "window", event: "beforeunload", ha: [I] }, { target: a, type: "window", event: "unload", ha: [I] }, { event: "click", ha: [Zd] }, { event: "dblclick", ha: [Zd] },
                                { event: "mousedown", ha: [Zd] }, { event: "mouseup", ha: [jo] }, { event: "keydown", ha: [ko] }, { event: "keypress", ha: [lo] }, { event: "copy", ha: [Qi] }, { event: "blur", ha: c }, { event: "focusin", ha: b }, { event: "focusout", ha: d }], !a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", ha: [$g] }, { target: a, type: "window", event: "blur", ha: [Ie] }] : [], a.document.addEventListener ? [{ event: "focus", ha: [Li] }, { event: "change", ha: [Ni] }, { event: "submit", ha: [Si] }] : [{ type: "formInput", event: "change", ha: [Ni] }, {
                                    type: "form", event: "submit",
                                    ha: [Si]
                                }]); return ql(a, c)
                            }), ol = z(function (a) { return ja(ec(a) ? [{ target: a, type: "document", event: "mouseleave", ha: [mo] }] : []) }), Up = ["submit", "beforeunload", "unload"], Vp = z(function (a, c) { var b = c(a); return K(function (d, e) { d[e.type + ":" + e.event] = e.ha; return d }, {}, b) }), Wp = A(Dj, function (a, c, b, d) { return Vp(c, a)[b + ":" + d] || [] }), pl = /^\s*function submit\(\)/, nl = /opera mini/i, Xp = G("fw.p", function (a, c) { if (!c.Eb) return Q.resolve(I); var b = new Sp(a, Wp); return kl(a, c, b, Dj, Up) }), Yp = G("pr.p", function (a, c) {
                                var b, d; if ($e(a)) {
                                    var e =
                                        ra(a, "5", c), f = wa((b = {}, b.pq = 1, b.ar = 1, b)); e({ Y: f, M: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = w(a, "document.referrer") || "", d) }, c)["catch"](C(a, "pr.p.s"))
                                }
                            }), Pa = x(qa, W("0")), Zp = G("c.m.p", function (a, c) { var b = X(c); return A(Mc(a, b), jl) }), $p = G("e.a.p", function (a, c) { var b = La(a, c); b = M([x(N, na(!0)), Y(Boolean, B(A(b, w), ["clickmap", "trackLinks", "accurateTrackBounce"]))], B); c.uj && b(); return b }), aq = G("cc.i", function (a, c) { var b = M([a, c], il); b = M([a, b, 300], Z); Ga(a, c, b) }), bq = G("s.f.i", function (a, c) {
                                return Ga(a, c, function (b) {
                                    if (w(b,
                                        "settings.button_goals") || -1 !== R(a).href.indexOf("yagoalsbuttons=1")) ia(a).D(a, ["click"], C(a, "c.t.c", x(W("target"), M([a, c], $d(a, c, hl))))), Cb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                                })
                            }), cq = G("p.fh", function (a, c) {
                                var b, d; void 0 === c && (c = !0); var e = Ma(a), f = da(a), g = e.o("wasSynced"), k = { id: 3, sa: "0" }; return c && g && g.time + 864E5 > f(ba) ? Q.resolve(g) : ra(a, "f", k)({ Y: wa((b = {}, b.pv = 1, b)), M: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = a.document.referrer, d) }, k).then(function (m) {
                                    var p; m = (p = {}, p.time = f(ba), p.params =
                                        w(m, "settings"), p.bkParams = w(m, "userData"), p); e.C("wasSynced", m); return m
                                })["catch"](C(a, "f.h"))
                            }), dq = G("pa.int", function (a, c) {
                                return C(a, "pa.c", function () {
                                    var b, d; var e = Da(arguments), f = I; var g = null; var k = e.length; if (0 !== e.length && e[0]) { var m = e.slice(-1)[0]; V(m) && (f = m, k = e.length + -1); var p = e.slice(-2)[0]; V(p) && (f = p, g = m, k = e.length + -2); k = e.slice(0, k); g = { pj: g, Jb: f, ia: 1 === k.length ? e[0] : Bc(k) } } else g = void 0; if (g && (e = g.pj, f = g.ia, g = g.Jb, lc(f) || ea(f))) {
                                        k = ra(a, "1", c); m = fd(c).url; p = w(f, "__ym.user_id"); var r =
                                            qa(f), t = J("__ymu", r), v = J("__ym", r) && p; r = !oh(c); p = Cb(a, c, v ? "Set user id " + p : (t ? "User p" : "P") + "arams. Counter " + c.id, v ? void 0 : JSON.stringify(f)); k({ ia: f, Y: wa((b = {}, b.pa = 1, b.ar = 1, b)), M: (d = {}, d["page-url"] = m || R(a).href, d) }, c).then(r ? p : I)["catch"](C(a, "p.s")).then(D(Jb, null, a, g, e))
                                    }
                                })
                            }), eq = G("exps.int", function (a, c) {
                                return C(a, "e.m", function (b, d, e) {
                                    var f, g; void 0 === d && (d = I); if (b && 0 < b.length) {
                                        var k = ra(a, "e", c), m = fd(c).url; return k({
                                            Y: wa((f = {}, f.ex = 1, f.ar = 1, f)), M: (g = {}, g["page-url"] = m || R(a).href, g.exp = b,
                                                g)
                                        }, c).then(D(Jb, null, a, d, e), C(a, "exps.s"))
                                    }
                                })
                            }), fq = G("y.p", function (a, c) { var b = Dh(a, c); if (b) { var d = Qe(a), e = M([a, b, c], gl); Bh(a, d, function (f) { f.D("params", e) }); b.na.D("params", x(W("1"), e)) } }), Pg = z(jc), gq = x(fa("exec", /counterID=(\d+)/), W("1")), Qg = Ea(function (a, c) {
                                var b = Pg(a), d = ha(c), e = d[0], f = d[1]; d = d.slice(2); if (f) {
                                    var g = "" + e; var k = { id: 1, sa: "0" }, m = gq(g); m ? k.id = m : -1 === g.indexOf(":") ? k.id = parseInt(g, 10) : (g = g.split(":"), m = g[1], k.id = parseInt(g[0], 10), k.sa = m); g = [La(a, k), k]; k = g[0]; g = g[1]; m = X(g); b[m] || (b[m] =
                                        {}); b = b[m]; "init" === f ? (e = "yaCounter" + g.id, a[e] || (a[e] = new a.Ya[Aa.Qc](F({}, d[0], g)))) : k && k[f] && b.dk ? k[f].apply(k, d) : (k = b.Lh, k || (k = [], b.Lh = k), k.push(ja([e, f], d)))
                                }
                            }), ob, gc, Ee = (ob = {}, ob.transaction_id = "id", ob.item_id = "id", ob.item_name = "name", ob.item_brand = "brand", ob.promotion_name = "coupon", ob.index = "position", ob.item_variant = "variant", ob.value = "revenue", ob.item_category = "category", ob), Og = (gc = {}, gc.view_item = "detail", gc.add_to_cart = "add", gc.remove_from_cart = "remove", gc.begin_checkout = "checkout", gc.purchase =
                                "purchase", gc), cl = "currencyCode add delete remove purchase checkout detail".split(" "), Ej = G("dl.w", function (a, c, b) { var d; Kd(a, a[c], function (e) { b(e) }) || (d = Z(a, function () { Ej(a, c, b) }, 1E3, "ec.dl")); return D(oa, null, a, d) }), hq = G("p.e", function (a, c) { var b = La(a, c); if (b && c.ve) { b = D(b.params, b); var d = C(a, "h.ee", M([a, b], al)); return Ej(a, c.ve, function (e) { e.D(d) }) } }), le = ka(function (a, c, b, d) { var e, f; (b = La(c, b)) && dl(a, d, c) && (c = D(b.params, b), (a = De(a, d, "goods")) && c && c((e = {}, e.__ym = (f = {}, f.ecommerce = [a], f), e))) }), iq =
                            G("ecm.a", le("add")), jq = G("ecm.r", le("remove")), kq = G("ecm.d", le("detail")), lq = G("ecm.p", le("purchase")), jg = Po("form"), mq = gj("form"), Kg = z(function (a) { return H("[^\\d<>]*", a.split("")) }), Jk = z(function (a) { return new RegExp(Kg(a), "g") }), Hc = x(A("replace", fa), ph([/\D/g, ""]), Ka), Xk = /\S/, Eg = A(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Bc), Sk = ["https://iframe-toloka.com/"], zg = $a(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                        nq = ["form", "button", "phone"], yg = z(function (a, c, b, d) {
                            var e, f, g, k = b.resource, m = b.data; m = void 0 === m ? "" : m; if (b.inline) {
                                c = U(a); var p = {}; p.getCachedTags = ni; p.form = (e = {}, e.closest = A(a, jg), e.select = A(a, mq), e.getData = A(a, lg), e); p.button = (f = {}, f.closest = A(a, Rg), f.select = A(a, ii), f.getData = A(a, Sg), f); p.phone = (g = {}, g.hidePhones = M([a, null, [m]], Ag), g); c.C("_u", p); d ? b = k : (d = b.lang, d = void 0 === d ? "" : d, e = b.appVersion, e = void 0 === e ? "" : e, f = b.fileId, f = void 0 === f ? "" : f, b = b.beta, b = void 0 === b ? !1 : b, e = H(".", x(Va(x(N, parseInt)),
                                    nc(Boolean))(e.split("."))), J(f, nq) && J(d, ["ru", "en", "tr"]) ? (b = (b ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (e ? "/" + e : "") + "/form-selector/" + (f + "_" + d + ".js"), b = zg(b) ? b : "") : b = ""); b && Gc(a, { src: b })
                            } else a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Tk(a, b.resource)
                        }, function (a, c, b) { return b.id }), vg = z(function (a) {
                            function c(d, e, f) { f && (e && b.push([f, f.innerHTML]), f.innerHTML = d) } var b = []; return {
                                zc: function (d, e) {
                                    void 0 ===
                                        e && (e = !1); return K(function (f, g) { var k = g.text; return !!x(D(Qk, null, a), Va(D(c, null, k, e)), Hb)(g.selector) || f }, !1, d || [])
                                }, Tk: function () { E(function (d) { d[0].innerHTML = d[1] }, b) }
                            }
                        }), oq = G("ph.p", function (a, c) {
                            if (rc(a)) return I; var b = vg(a), d = c.id, e = Tb(a, void 0, d); Kk(a, d); ze(a, d, !0); Ga(a, c, function (f) {
                                var g = w(f, "settings.mp2.conditions"); f = w(f, "settings.mp2.substs"); var k = (g = (g = Ta(D(Lk, null, a, c), g || [])) && g.track_id) && f && f[g]; g && k || (k = (g = e.o("mp2_track") || "") && f && f[g]); g && k ? (e.C("mp2_substs", cb(a, k) || "").C("mp2_track",
                                    "" + g, 43200), f = b.zc(k), La(a, c).params("__ym", f ? "mp_trackid" : "mp_trackid_bad", g)) : (b.Tk(), e.Lb("mp2_substs").Lb("mp2_track"))
                            }); return D(G("ph.fc", ze), null, a, c.id, !1)
                        }), Fj = z(function (a) { return rc(a) || !ua("querySelectorAll", a.document.querySelectorAll) }), Gk = z(Bg), ug = z(ib, rb), pq = G("phc.p", function (a, c) {
                            return Fj(a) ? I : Ga(a, c, function (b) {
                                var d = c.id, e = Tb(a, void 0, d), f = e.o("phc_settings") || ""; if (b = w(b, "settings.phchange")) { var g = cb(a, b) || ""; g !== f && e.C("phc_settings", g) } else f && (b = ug(a, f)); e = w(b, "clientId");
                                f = w(b, "orderId"); b = w(b, "phones") || []; e && f && b.length && (f = { jc: "", uc: "", Kh: 0, Ca: {}, Ma: [], $g: !1, Nb: !0, b: a, xg: c }, F(f, { $g: !0 }), tg(a, d, f), b = wb(a), e = Cg(a, b, 1E3), d = D(tg, null, a, d, f), e.D(d), Dg(a, b))
                            })
                        }), qq = G("phc.h", function (a, c) { return An(a) || Fj(a) ? null : Ga(a, c, function (b) { if (!w(b, "settings.phchange")) { var d = Tb(a, "").o("yaHidePhones"); d = d ? ib(a, d) : ""; (b = w(b, "settings.phhide") || d) && Ag(a, c, b) } }) }), rq = G("up.int", function (a, c) {
                            return C(a, "up.c", function (b, d, e) {
                                var f, g = La(a, c), k = xd(a).warn; g ? lc(b) ? (b = (f = {}, f.__ymu =
                                    b, f), (f = g.params) && f(b, d || I, e)) : k("Wrong user params") : k("No counter instance found")
                            })
                        }), sq = G("trigger.in", function (a, c) { c.Th && Gb(a, M([a, "yacounter" + c.id + "inited"], sn), "t.i") }), tq = G("destruct.e", function (a, c, b) { return function () { var d = U(a), e = c.id; E(function (f, g) { return V(f) && C(a, "dest.fr." + g, f)() }, b); delete d.o("counters")[X(c)]; delete a["yaCounter" + e] } }), uq = A("9-d5ve+.r%7", N), vq = G("ad", function (a, c) {
                            if (!c.Sb) {
                                var b = U(a); if (!b.o("adBlockEnabled")) {
                                    var d = function (r) {
                                        J(r, ["2", "1"]) && b.C("adBlockEnabled",
                                            r)
                                    }, e = Wb(a), f = e.o("isad"); if (f) d(f); else { var g = A("adStatus", b.C), k = function (r) { r = r ? "1" : "2"; d(r); g("complete"); e.C("isad", r, 1200); return r }, m = ra(a, "adb", c); if (!b.o("adStatus")) { g("process"); var p = "metrika/a" + uq().replace(/[^a-v]+/g, "") + "t.gif"; Dk(a, function () { return m({}, p).then(A(!1, k))["catch"](A(!0, k)) }) } }
                                }
                            }
                        }), wq = G("pa.plgn", function (a, c) { var b = Bd(a, c); b && b.na.D("pluginInfo", C(a, "c.plgn", function () { return zn(c, aj) })) }), xq = G("suid.int", function (a, c) {
                            return C(a, "suid.c", function (b, d, e) {
                                var f = La(a,
                                    c), g = dd(a); Oa(b) || qd(a, b) ? (b = Bc(["__ym", "user_id", b]), f.params(b, d || I, e)) : g.error("Incorrect user ID")
                            })
                        }), yq = G("guid.int", function (a, c) { return C(a, "guid.c", function (b) { var d = Yh(a, c); b && Jb(a, b, null, d); return d }) }), Sa = function () {
                            function a(c, b, d) { this.nk = "wv2.c"; this.sc = []; this.Wa = {}; this.b = c; this.Z = ye(c, this, d, this.nk); this.F = b; this.Mb = this.F.Pj(); this.start = this.Z.N(this.start, "st"); this.stop = this.Z.N(this.stop, "sp") } a.prototype.start = function () {
                                var c = this; this.sc = B(function (b) {
                                    var d = b[0], e = b[1];
                                    b = V(e) ? e : e.Me; e = V(e) ? c.b : e.target; b = D(c.Z.N(b, d), c); return c.Mb.D(e, [d], b)
                                }, Ha(this.Wa))
                            }; a.prototype.stop = function () { E(Ka, this.sc) }; a.prototype.ma = function (c) { return this.F.Ia().ma(c) }; return a
                        }(), Ck = H("", ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA", "AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="]), Bk = ["checkbox", "radio"], Yf = W("location.href"), zq = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this; d.Ga = { elements: [], attributes: [] }; d.index = 0; d.gf = d.Z.N(d.gf, "o"); d.pe =
                                    d.Z.N(d.pe, "io"); d.ce = d.Z.N(d.ce, "ao"); d.tf = d.Z.N(d.tf, "a"); d.rf = d.Z.N(d.rf, "at"); d.uf = d.Z.N(d.uf, "r"); d.sf = d.Z.N(d.sf, "c"); d.wb = new b.MutationObserver(d.gf); return d
                            } Ba(c, a); c.prototype.start = function () { this.wb.observe(this.b.document.documentElement, { attributes: !0, characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0 }) }; c.prototype.stop = function () { this.wb.disconnect() }; c.prototype.ce = function (b) {
                                var d = b.target; b = b.attributeName; var e = this.Ga.elements.indexOf(d);
                                -1 === e && (e = this.Ga.elements.push(d) - 1, this.Ga.attributes[e] = {}); this.Ga.attributes[e] || (this.Ga.attributes[e] = {}); e = this.Ga.attributes[e]; var f = d.getAttribute(b); e[b] = ld(this.b, d, b, f, this.F.fd()).value
                            }; c.prototype.pe = function (b) {
                                function d(m) { var p = tb(e.b)(m, f); return -1 === p ? (f.push(m), m = { Be: {} }, g.push(m), m) : g[p] } var e = this, f = [], g = []; E(function (m) {
                                    var p = m.attributeName, r = m.removedNodes, t = m.oldValue, v = m.target, q = m.nextSibling, l = m.previousSibling; switch (m.type) {
                                        case "attributes": e.ce(m); var h = d(v);
                                            h.Be[p] || (h.Be[p] = ld(e.b, v, p, t, e.F.fd()).value); break; case "childList": r && E(function (n) { h = d(n); h.Gg || F(h, { Gg: v, Ej: q ? q : void 0, Fj: l ? l : void 0 }) }, ha(r)); break; case "characterData": h = d(v), h.Hg || (h.Hg = t)
                                    }
                                }, b); var k = this.F.Ia(); E(function (m, p) { k.Jf(m, g[p]) }, f)
                            }; c.prototype.gf = function (b) {
                                var d = this; if (Yf(this.b)) {
                                    var e = this.F.$(); this.pe(b); E(function (f) {
                                        var g = f.addedNodes, k = f.removedNodes, m = f.target; switch (f.type) {
                                            case "childList": k && k.length && d.uf(ha(k), e); g && g.length && d.tf(ha(g), e); break; case "characterData": d.sf(m,
                                                e)
                                        }
                                    }, b); this.rf(e)
                                } else this.stop()
                            }; c.prototype.rf = function (b) { var d = this; E(function (e, f) { var g = d.ed(); d.F.ja("mutation", { index: g, attributes: d.Ga.attributes[f], target: d.ma(e) }, "ac", b) }, this.Ga.elements); this.Ga.elements = []; this.Ga.attributes = [] }; c.prototype.tf = function (b, d) { var e = this, f = this.ed(); this.F.Ia().ld({ gb: b, Md: function (g) { g = B(function (k) { k = F({}, k); delete k.node; return k }, g); e.F.ja("mutation", { index: f, gb: g }, "ad", d) } }) }; c.prototype.uf = function (b, d) {
                                var e = this, f = this.ed(), g = this.F.Ia(), k =
                                    B(function (m) { var p = g.removeNode(m); Lg(e.b, m, function (r) { g.removeNode(r) }); return p }, b); this.F.ja("mutation", { index: f, gb: k }, "re", d)
                            }; c.prototype.sf = function (b, d) { var e = this.ed(); this.F.ja("mutation", { value: b.textContent, target: this.ma(b), index: e }, "tc", d) }; c.prototype.ed = function () { var b = this.index; this.index += 1; return b }; return c
                        }(Sa), Aq = function () {
                            function a(c, b) {
                                var d = this; this.Zc = []; this.$c = {}; this.ff = 1; this.mb = 0; this.Tb = {}; this.od = {}; this.removeNode = function (f) {
                                    var g = d.ma(f), k = za(f); if (k) return k =
                                        "NR:" + k.toLowerCase(), d.$c[k] && d.na.ea(k, { data: { node: f, id: g } }), g
                                }; this.Pb = function (f) { var g = za(f); if (g) { var k = f.__ym_indexer; k || (k = d.ff, f.__ym_indexer = k, d.ff += 1, g = "NA:" + g.toLowerCase(), d.$c[g] && d.na.ea(g, { data: { node: f, id: k } })); return k } return null }; this.b = c; var e = ye(c, this, "i"); this.na = Dc(c); this.options = b; this.start = e.N(this.start, "st"); this.stop = e.N(this.stop, "sp"); this.ma = e.N(this.ma, "i"); this.Jf = e.N(this.Jf, "o"); this.ld = e.N(this.ld, "a"); this.removeNode = e.N(this.removeNode, "r"); this.xa = e.N(this.xa,
                                    "s")
                            } a.prototype.Jf = function (c, b) { var d = this.Pb(c); Za(d) || (this.od[d] && this.ma(c), this.od[d] = b) }; a.prototype.D = function (c, b, d) { c = "" + b + c; this.$c[c] = !0; this.na.D(c, d) }; a.prototype.wa = function (c, b, d) { c = "" + b + c; delete this.$c[c]; this.na.wa(c, d) }; a.prototype.start = function () { this.mb = Z(this.b, x(D(this.xa, this, !1), this.start), 50, "i.s") }; a.prototype.stop = function () { this.flush(); oa(this.b, this.mb); this.Zc = [] }; a.prototype.ld = function (c) {
                                var b = this, d = [], e = 0, f = { Md: c.Md, result: [], nd: 0, gb: d }; this.Zc.push(f); E(function (g) {
                                    Lg(b.b,
                                        g, function (k) { var m = b.Pb(k); Za(m) || (d.push(k), b.Tb[m] && b.ma(k), b.Tb[m] = { node: k, event: f, ll: e }, e += 1) })
                                }, c.gb)
                            }; a.prototype.ma = function (c) {
                                if (c === this.b) return 0; var b = this.Pb(c), d = this.Tb[b], e = this.Jj(b), f = e.Gg, g = e.Be, k = e.Hg, m = e.Ej, p = e.Fj; if (d) {
                                    e = d.event; d = d.ll; var r = this.b.document.documentElement === c; m = m || c.nextSibling; var t = p || c.previousSibling; p = !r && m ? this.Pb(m) : null; t = !r && t ? this.Pb(t) : null; r = this.b; m = this.options; f = this.Pb(f || c.parentNode || c.parentElement) || 0; var v = void 0; void 0 === t && (t = null);
                                    void 0 === p && (p = null); void 0 === g && (g = {}); void 0 === v && (v = za(c)); if (S(v)) c = void 0; else { f = { id: b, wc: t !== f ? t : null, next: p !== f ? p : null, parent: f, name: v.toLowerCase(), node: c }; if (Ce(c)) { if (k = yk(c, k), f.attributes = {}, f.content = k) if (c = Fc(r, c)) f.content = "" !== k.trim() ? wl(r, k) : k, f.hidden = c } else { f.attributes = zk(r, c, m, g, v); if (k = md(c) && td(c)) f.hidden = k; c.namespaceURI && vf(c.namespaceURI, "svg") && (f.hh = c.namespaceURI) } c = f } if (S(c)) return; delete this.Tb[b]; e.result[d] = c; e.nd += 1; e.gb.length === e.nd && e.Md(e.result)
                                } return b
                            };
                            a.prototype.flush = function () { this.xa(!0) }; a.prototype.xa = function (c) { var b = this; if (Yf(this.b)) { var d = qa(this.Tb); d = B(function (e) { return b.Tb[e].node }, d); d = Nc(d, this.ma); c = c ? Wh(I) : bf(this.b, 20); d(c); this.Zc = Y(function (e) { return e.nd !== e.result.length }, this.Zc) } }; a.prototype.Jj = function (c) { if (Za(c)) return {}; var b = this.od[c]; return b ? (delete this.od[c], b) : {} }; return a
                        }(), Bq = ["input", "change", "keyup", "paste", "cut"], Cq = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this; b.inputs = {}; b.se = !1; b.zd = b.Z.N(b.zd,
                                    "ii"); b.Ad = b.Z.N(b.Ad, "ir"); b.Fd = b.Z.N(b.Fd, "ri"); b.Ud = b.Z.N(b.Ud, "ur"); b.Le = b.Z.N(b.Le, "ce"); b.kd = b.Z.N(b.kd, "vc"); return b
                            } Ba(c, a); c.prototype.start = function () { var b = this, d = this.F.Ia(); this.se = this.hj(); E(function (e) { e = e.toLowerCase(); d.D(e, "NA:", D(b.zd, b)); d.D(e, "NR:", D(b.Ad, b)) }, Ke); this.sc = [this.Mb.D(this.b.document, Bq, D(this.Le, this)), function () { E(function (e) { e = e.toLowerCase(); d.wa(e, "NA:", b.zd); d.wa(e, "NR:", b.Ad) }, Ke); E(b.Ud, qa(b.inputs)) }] }; c.prototype.Ud = function (b) {
                                if (this.se) {
                                    var d = this.inputs[b];
                                    d && (b = d.Hk, d = d.element, b && this.b.Object.defineProperty(d, this.gd(d), b))
                                }
                            }; c.prototype.Ad = function (b) { b && this.Ud(b.data.id) }; c.prototype.zd = function (b) { b && (b = b.data, this.Fd(b.node, b.id)) }; c.prototype.gd = function (b) { return Pd(b) ? "checked" : "value" }; c.prototype.Le = function (b) { if (b = b.target) { var d = this.gd(b); this.kd(b[d], b) } }; c.prototype.kd = function (b, d) {
                                var e = this.ma(d), f = this.inputs[e]; if (!f && (f = this.Fd(f, e), !f)) return; e = f.ij; var g = f.value, k = this.gd(d); b && !J(typeof b, ["string", "boolean", "number"]) ||
                                    b === g || (g = ld(this.b, d, k, b, this.F.fd()).value, e ? this.F.ja("event", { target: this.ma(d), checked: !!b }, "change") : (e = nd(d), k = td(d), this.F.ja("event", { value: g, hidden: k && !e, target: this.ma(d) }, "change")), f.value = b)
                            }; c.prototype.Fd = function (b, d) {
                                var e = this; if (!md(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null; var f = Pd(b), g = this.gd(b), k = { element: b, ij: f, value: b[g] }; this.inputs[d] = k; this.se && Gb(this.b, function () {
                                    var m = e.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),
                                        g) || {}, p = e.b.Object.getOwnPropertyDescriptor(b, g) || {}, r = F({}, m, p); if (ua("((set)?(\\s?" + g + ")?)?", r.set)) { try { e.b.Object.defineProperty(b, g, F({}, r, { configurable: !0, set: function (t) { e.kd(t, this); return r.set.call(this, t) } })) } catch (t) { } k.Hk = r }
                                }); return k
                            }; c.prototype.hj = function () {
                                var b = !0, d = db(this.b)("input"); try {
                                    d = db(this.b)("input"); d.value = "INPUT_VALUE"; d.style.setProperty("display", "none", "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d),
                                        "value") || {}, f = this.b.Object.getOwnPropertyDescriptor(d, "value") || {}, g = F({}, e, f); this.b.Object.defineProperty(d, "value", F({}, g, { configurable: !0, set: function (k) { return g.set.call(d, k) } })); "INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
                                } catch (k) { b = !1 } return b
                            }; return c
                        }(Sa), Dq = function (a) {
                            function c() {
                                var b, d = null !== a && a.apply(this, arguments) || this; d.zb = { width: 0, height: 0, ib: 0, jb: 0, orientation: 0 }; d.Wa = (b = {}, b.resize = function () {
                                    var e = this.Ke(); this.ak(e) && (this.zb =
                                        e, this.Eh(e))
                                }, b.orientationchange = function () { var e = this.Ke(); this.zb.orientation !== e.orientation && (this.zb = e, this.Vk(e)) }, b); return d
                            } Ba(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.Dh() }; c.prototype.bh = function (b) { return !b.height || !b.width || !b.jb || !b.ib }; c.prototype.ak = function (b) { return b.height !== this.zb.height || b.width !== this.zb.width }; c.prototype.Ke = function () {
                                var b = this.F.Ob(), d = Uc(this.b), e = d[0]; d = d[1]; b = b.Je(); return {
                                    width: e, height: d, jb: b ? b.scrollWidth : 0, ib: b ? b.scrollHeight :
                                        0, orientation: this.F.Ob().Rj()
                                }
                            }; c.prototype.Vk = function (b) { var d; void 0 === d && (d = this.F.$()); this.F.ja("event", { width: b.width, height: b.height, orientation: b.orientation }, "deviceRotation", d) }; c.prototype.Eh = function (b, d) { void 0 === d && (d = this.F.$()); this.F.ja("event", { width: b.width, height: b.height, jb: b.jb, ib: b.ib }, "resize", d) }; c.prototype.Dh = function () { var b = this.Ke(); this.bh(b) ? Z(this.b, D(this.Dh, this), 300) : (this.bh(this.zb) && (this.zb = b), this.Eh(b, 0)) }; return c
                        }(Sa), me = function () {
                            function a(c) {
                                this.index =
                                    0; this.Zb = {}; this.b = c
                            } a.prototype.Tc = function (c, b, d) { void 0 === d && (d = {}); var e = da(this.b), f = this.index; this.index += 1; this.Zb[f] = { mb: 0, Bc: !1, tb: c, Ra: [], Ze: e(ba) }; var g = this; return function () { var k = Da(arguments), m = d.Nb && !g.Zb[f].Bc, p = g.Zb[f]; oa(g.b, p.mb); p.Ra = k; p.Bc = !0; var r = e(ba); if (m || r - p.Ze >= b) c.apply(void 0, k), p.Ze = r; p.mb = Z(g.b, function () { m || (c.apply(void 0, k), p.Ze = e(ba)); p.Bc = !1; p.Ra = [] }, b, "th") } }; a.prototype.flush = function () {
                                var c = this; E(function (b) {
                                    var d = c.Zb[b], e = d.mb, f = d.tb, g = d.Ra; d.Bc && (c.Zb[b].Bc =
                                        !1, f.apply(void 0, g), oa(c.b, e))
                                }, qa(this.Zb))
                            }; return a
                        }(), Eq = function (a) {
                            function c(b, d, e) { var f; d = a.call(this, b, d, e) || this; d.Ph = []; d.eg = { x: 0, y: 0 }; d.Wa = (f = {}, f.scroll = function (g) { if (this.F.Ob().Wg()) this.Dd(g); else { var k = g.target, m = Y(function (p) { return p[0] === k }, this.Ph).pop(); m ? m = m[1] : (m = this.Oa.Tc(D(this.Dd, this), 100, { Nb: !0 }), this.Ph.push([k, m])); m(g) } }, f); d.Oa = new me(b); d.Dd = d.Z.N(d.Dd, "o"); return d } Ba(c, a); c.prototype.start = function () {
                                a.prototype.start.call(this); this.F.ja("event", {
                                    x: Math.max(this.b.scrollX,
                                        0), y: Math.max(this.b.scrollY, 0), page: !0, target: -1
                                }, "scroll", 0)
                            }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Oa.flush() }; c.prototype.Dd = function (b) { var d = this.F.Ob().Je(); b = b.target; var e = this.mc(b); d = Ca(ta(b), [d, this.b, this.b.document]); var f = Math.max(e.left, 0); e = Math.max(e.top, 0); if (d) { if (this.eg.x === f && this.eg.y === e) return; this.eg = { x: f, y: e } } this.F.ja("event", { x: f, y: e, page: d, target: d ? -1 : this.ma(b) }, "scroll") }; c.prototype.mc = function (b) {
                                var d = { left: 0, top: 0 }; if (!b) return d; if (b.window ===
                                    b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView || e.parentWindow, k = e.body; return b !== e || (b = this.F.Ob().Je(), b) ? J(b, [f, k]) ? { top: b.scrollTop || g.scrollY, left: b.scrollLeft || g.scrollX } : { top: b.scrollTop || 0, left: b.scrollLeft || 0 } : d
                            }; return c
                        }(Sa), Fq = ["mousemove", "mousedown", "mouseup", "click"], Gq = function (a) {
                            function c(b, d, e) {
                                var f = a.call(this, b, d, e) || this; f.Wa = K(function (g, k) { g[k] = f.Fk; return g }, {}, Fq); f.Oa = new me(b); f.wd = f.Z.N(f.wd, "n"); f.bl = f.Z.N(f.Oa.Tc(D(f.wd,
                                    f), 100), "t"); return f
                            } Ba(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.Oa.flush() }; c.prototype.Fk = function (b) { var d = null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.bl(b) : this.wd(b) }; c.prototype.wd = function (b) { var d = b.type, e = b.clientX; e = void 0 === e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.b.document.elementFromPoint(e, f); this.F.ja("event", { x: e || 0, y: f || 0, target: this.ma(b) }, d) }; return c
                        }(Sa), Hq = ["focus", "blur"], Iq = function (a) {
                            function c() {
                                var b = null !== a &&
                                    a.apply(this, arguments) || this; b.Wa = K(function (d, e) { d[e] = b.Dj; return d }, {}, Hq); return b
                            } Ba(c, a); c.prototype.Dj = function (b) { var d = b.target; b = b.type; this.F.ja("event", { target: this.ma(d === this.b ? this.b.document.documentElement : d) }, b) }; return c
                        }(Sa), Jq = z(function (a) { var c = ma(a.getSelection, "getSelection"); return c ? D(c, a) : I }), Kq = x(Jq, Ka), Lq = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Mq = /text|search|password|tel|url/, Nq = function (a) {
                            function c() {
                                var b = null !== a && a.apply(this, arguments) || this;
                                b.Ne = !1; b.Wa = K(function (d, e) { d[e] = b.Zj; return d }, {}, Lq); return b
                            } Ba(c, a); c.prototype.Zj = function (b) { var d = this.F, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.Vj(b) : this.Tj()) && e.start !== e.end ? (this.Ne = !0, d.ja("event", e, "selection")) : this.Ne && (this.Ne = !1, d.ja("event", { start: 0, end: 0 }, "selection")) }; c.prototype.Tj = function () {
                                var b = Kq(this.b); if (b && 0 < b.rangeCount) {
                                    b = b.getRangeAt(0) || this.b.document.createRange(); var d = this.ma(b.startContainer), e = this.ma(b.endContainer);
                                    if (!S(d) && !S(e)) return { start: b.startOffset, end: b.endOffset, Pd: d, Yc: e }
                                }
                            }; c.prototype.Vj = function (b) { if (Mq.test(b.type || "")) { var d = this.ma(b); if (!S(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
                        }(Sa), Oq = { focus: "windowfocus", blur: "windowblur" }, Pq = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this; b.visibility = null; S(b.b.document.hidden) ? S(b.b.document.msHidden) ? S(b.b.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility =
                                    { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.Z.N(b.handleEvent, "e"); return b
                            } Ba(c, a); c.prototype.start = function () { this.sc = [this.Mb.D(this.b, this.visibility ? [this.visibility.event] : ["focus", "blur"], D(this.handleEvent, this))] }; c.prototype.handleEvent = function (b) { this.F.ja("event", {}, Oq[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : b.type]) }; return c
                        }(Sa), Qq = ["touchmove", "touchstart", "touchend", "touchcancel",
                            "touchforcechange"], Rq = function (a) {
                                function c(b, d, e) { var f, g = a.call(this, b, d, e) || this; g.Qd = {}; g.scrolling = !1; g.Bh = 0; g.Wa = K(function (k, m) { k[m] = { Me: g.fl, target: g.b.document }; return k }, (f = {}, f.scroll = { Me: function () { var k = this; this.scrolling = !0; oa(this.b, this.Bh); this.Bh = Z(this.b, function () { k.scrolling = !1 }, 150) }, target: g.b.document }, f), Qq); g.Oa = new me(b); g.rc = g.Z.N(g.rc, "nh"); g.dl = g.Z.N(g.Oa.Tc(g.rc, g.F.Ob().Wg() ? 0 : 50, { Nb: !0 }), "th"); return g } Ba(c, a); c.prototype.fl = function (b) {
                                    var d = this, e = "touchcancel" ===
                                        b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && E(function (f) { var g = d.Yj(f); f.__ym_touch_id = g; e && delete d.Qd[f.identifier] }, ha(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.rc(b) : this.dl(b, this.F.$()) : this.rc(b)
                                }; c.prototype.Yj = function (b) { this.Qd[b.identifier] || (this.Qd[b.identifier] = qg()); return this.Qd[b.identifier] }; c.prototype.rc = function (b, d) {
                                    void 0 === d && (d = this.F.$()); var e = b.type, f = B(function (g) {
                                        return {
                                            id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY),
                                            force: g.force
                                        }
                                    }, ha(b.changedTouches)); 0 < f.length && this.F.ja("event", { touches: f, target: this.ma(b.target) }, e, d)
                                }; return c
                            }(Sa), Sq = function (a) { function c() { var b, d = null !== a && a.apply(this, arguments) || this; d.Wa = (b = {}, b.load = { Me: function (e) { e = e.target; "IMG" === za(e) && e.getAttribute("srcset") && this.F.ja("event", { target: this.ma(e), value: e.currentSrc }, "srcset") }, target: d.b.document }, b); return d } Ba(c, a); return c }(Sa), Tq = function (a) {
                                function c(b, d, e) {
                                    d = a.call(this, b, d, e) || this; d.fi = 1; d.Oa = new me(b); d.Pc = d.Z.N(d.Pc,
                                        "z"); return d
                                } Ba(c, a); c.prototype.start = function () { if (this.Pg()) { a.prototype.start.call(this); this.Pc(); var b = this.Mb.D(w(this.b, "visualViewport"), ["resize"], this.Oa.Tc(this.Pc, 10)); this.sc.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Oa.flush() }; c.prototype.Pc = function () { var b = this.Pg(); b && b !== this.fi && (this.fi = b, this.Wk(b)) }; c.prototype.Pg = function () { var b = qf(this.b); return b ? b[2] : null }; c.prototype.Wk = function (b) {
                                    var d = Le(this.b); this.F.ja("event", { x: d.x, y: d.y, level: b },
                                        "zoom")
                                }; return c
                            }(Sa), jd, ne = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, Gj = { "super": 1, Xl: 2, alt: 3, shift: 4, Cm: 5, "delete": 6, Sl: 6 }, Uq = [4, 9, 8, 32, 37, 38, 39, 40, 46], Hj = (jd = {}, jd["1"] = { 91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;" }, jd["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, jd.rk = {
                                32: "SPACEBAR", 37: "&larr;", 38: "&uarr;",
                                39: "&rarr;", 40: "&darr;", 13: "Enter"
                            }, jd), Vq = /flash/, Wq = /ym-disable-keys/, Xq = /^&#/, Yq = function (a) {
                                function c(b, d, e) {
                                    var f; d = a.call(this, b, d, e) || this; d.Qb = {}; d.fb = 0; d.Xa = []; d.Nh = []; d.Xc = 0; d.xh = 0; d.Wa = (f = {}, f.keydown = function (g) { if (this.rd(g) && !this.hk(g)) { var k = g.keyCode; g.repeat || this.Qb[k] || (this.Qb[g.keyCode] = !0, ne[g.keyCode] && !this.fb ? (this.fb += 1, this.Mf(g), this.reset(300)) : this.fb ? (this.fj(), this.zf(g), this.ye()) : (this.reset(), this.zf(g))) } }, f.keyup = function (g) {
                                        if (this.rd(g)) {
                                            var k = g.keyCode, m =
                                                ne[g.keyCode]; this.Qb[g.keyCode] && (this.Qb[k] = !1); m && this.fb && (this.fb = 0, this.Qb = {}); 1 === this.Xa.length && (g = this.Xa[0], J(g.keyCode, Uq) && (this.Ld([g], !0), this.reset())); this.Xa = Y(x(ta(k), cc), this.Xa); oa(this.b, this.Xc)
                                        }
                                    }, f); d.Ji = -1 !== (w(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2"; d.rd = d.Z.N(d.rd, "v"); d.ye = d.Z.N(d.ye, "ec"); d.Ld = d.Z.N(d.Ld, "sk"); d.Ie = d.Z.N(d.Ie, "gk"); d.Mf = d.Z.N(d.Mf, "sc"); d.Oc = d.Z.N(d.Oc, "cc"); d.reset = d.Z.N(d.reset, "r"); d.Hd = d.Z.N(d.Hd, "rs"); return d
                                } Ba(c, a); c.prototype.rd =
                                    function (b) { var d = this.b.document.activeElement; b = b.target; return !Ca(Boolean, [d && "OBJECT" === d.nodeName && Vq.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Wq.test(b.className)]) }; c.prototype.ye = function () { this.Nh = this.Xa.slice(0); oa(this.b, this.Xc); this.Xc = Z(this.b, A(this.Nh, D(this.Ld, this)), 0, "e.c") }; c.prototype.Ld = function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.Ie(b); this.F.ja("event", { Za: e }, "keystroke") } }; c.prototype.Ie = function (b) {
                                        var d =
                                            this; b = B(function (e) { e = e.keyCode; var f = ne[e], g = d.Qj(e); return { id: e, key: g, pd: !!f && Xq.test(g), Rb: f } }, b); return we(function (e, f) { return (Gj[e.Rb] || 100) - (Gj[f.Rb] || 100) }, b)
                                    }; c.prototype.Qj = function (b) { return Hj[this.Ji][b] || Hj.rk[b] || String.fromCharCode(b) }; c.prototype.zf = function (b) { J(b, this.Xa) || this.Xa.push(b) }; c.prototype.Mf = function (b) { this.zf(b); this.Oc() }; c.prototype.Oc = function () { this.fb ? Z(this.b, this.Oc, 100) : this.Xa = [] }; c.prototype.fj = function () { oa(this.b, this.xh) }; c.prototype.reset = function (b) {
                                        b ?
                                            this.xh = Z(this.b, D(this.Hd, this), b) : this.Hd()
                                    }; c.prototype.Hd = function () { this.fb = 0; this.Xa = []; this.Qb = {}; oa(this.b, this.Xc) }; c.prototype.hk = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === ne[b.keyCode] : !1 }; return c
                            }(Sa), xk = ["sr", "sd", "\u043d"], Zq = /allow-same-origin/, $q = function (a) {
                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Dc = []; b.Ce = {}; b.hf = b.Z.N(b.hf, "fi"); b.jf = b.Z.N(b.jf, "sd"); b.kf = b.Z.N(b.kf, "src"); b.wb = new MutationObserver(b.kf); return b } Ba(c,
                                    a); c.prototype.start = function () { a.prototype.start.call(this); this.F.fd().hc && this.F.Ia().D("iframe", "NA:", D(this.hf, this)); this.F.Mg().Ge().D("sdr", D(this.jf, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); E(function (b) { b.F.stop() }, this.Dc) }; c.prototype.kf = function (b) { var d = b.pop().target; if (b = Ta(function (f) { return f.Tg === d }, this.Dc)) { this.Dc = Y(function (f) { return f.Tg !== d }, this.Dc); var e = b.F.He(); try { b.F.stop() } catch (f) { } this.Sc(d, e) } }; c.prototype.hf = function (b) {
                                        if (b) {
                                            var d = b.data.node;
                                            this.wb.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.Sc(d, b.data.id)
                                        }
                                    }; c.prototype.Sc = function (b, d) { var e = this; if (this.fk(b)) pd(this.b, b).then(function () { var f = e.F.Sc(b.contentWindow, d); e.Dc.push({ F: f, Tg: b }) })["catch"](I) }; c.prototype.jf = function (b) {
                                        var d = this, e = b.ca; b = b.data; this.Ce[e] || (this.Ce[e] = { data: [] }); var f = this.Ce[e]; f.data = f.data.concat(b); this.b.isNaN(f.qe) && E(function (g) { "page" === g.type && (f.qe = g.data.Fa - d.F.Ng()) }, f.data); this.b.isNaN(f.qe) || (this.F.xa(B(function (g) {
                                            g.$ += f.qe;
                                            g.$ = d.b.Math.max(0, g.$); return g
                                        }, f.data)), f.data = [])
                                    }; c.prototype.fk = function (b) { var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return e && !e.match(Zq) || d && "about:blank" !== d && (d = Eb(this.b, d).host) && R(this.b).host !== d ? !1 : w(b, "contentWindow.location.href") }; return c
                            }(Sa), ar = function (a) {
                                function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ff = b.Z.N(b.Ff, "ps"); return b } Ba(c, a); c.prototype.start = function () { this.F.Ia().ld({ gb: [this.b.document.documentElement], Md: this.Ff }) }; c.prototype.Ff = function (b) {
                                    var d =
                                        this.F.Sj(), e = d.Kj(), f = R(this.b), g = f.host, k = f.protocol; f = f.pathname; var m = Uc(this.b), p = m[0]; m = m[1]; this.F.ja("page", { content: B(function (r) { r = F({}, r); delete r.node; return r }, b), Mc: e || "", md: !!e, viewport: { width: p, height: m }, title: this.b.document.title, doctype: d.Mj() || "", Lc: this.b.location.href, Td: this.b.navigator.userAgent, referrer: this.b.document.referrer, screen: { width: this.b.screen.width, height: this.b.screen.height }, location: { host: g, protocol: k, path: f }, Fa: this.F.Ng(), Yb: d.Wj() }, "page", 0)
                                }; return c
                            }(Sa),
                        br = ["addRule", "removeRule", "insertRule", "deleteRule"], cr = function (a) {
                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ab = {}; b.Ec = {}; b.ug = 0; b.Bd = b.Z.N(b.Bd, "a"); b.Xb = b.Z.N(b.Xb, "sr"); b.Cd = b.Z.N(b.Cd, "r"); b.xa = b.Z.N(b.xa, "d"); return b } Ba(c, a); c.prototype.start = function () { var b = this.F.Ia(); b.D("style", "NA:", this.Bd); b.D("style", "NR:", this.Cd); this.xa() }; c.prototype.stop = function () {
                                var b = this; a.prototype.stop.call(this); var d = this.F.Ia(); d.wa("style", "NA:", this.Bd); d.wa("style", "NR:", this.Cd); this.xa();
                                oa(this.b, this.ug); E(function (e) { b.Ab[e].sheet && b.yh(b.Ab[e].sheet) }, qa(this.Ab)); this.Ab = {}
                            }; c.prototype.xa = function () { var b = this; E(function (d) { var e = d[0]; d = d[1]; if (d.length) { for (var f = [], g = d[0].$, k = [], m = 0; m < d.length; m += 1) { var p = d[m], r = p.$; delete p.$; r <= g + 10 ? f.push(d[m]) : (k.push(f), f = [p]) } f.length && k.push(f); k.length && E(function (t) { b.F.ja("event", { target: parseInt(e, 10), qa: t }, "stylechange", g) }, k); delete b.Ec[e] } }, Ha(this.Ec)); this.ug = Z(this.b, this.xa, 100) }; c.prototype.Xb = function (b, d, e, f, g) {
                                void 0 ===
                                    f && (f = ""); void 0 === g && (g = -1); this.Ec[b] || (this.Ec[b] = []); this.Ec[b].push({ tc: d, style: f, index: g, $: e })
                            }; c.prototype.Ik = function (b, d) {
                                var e = this, f = ma(b.addRule, "addRule"); f && (b.addRule = function (p, r, t) { e.Xb(d, "a", e.F.$(), p + "{" + r + "}", t); return f.call(b, p, r, t) }); var g = ma(b.removeRule, "removeRule"); g && (b.removeRule = function (p) { e.Xb(d, "r", e.F.$(), "", p); return g.call(b, p) }); var k = ma(b.insertRule, "insertRule"); k && (b.insertRule = function (p, r) { e.Xb(d, "a", e.F.$(), p, r); return k.call(b, p, r) }); var m = ma(b.deleteRule,
                                    "deleteRule"); m && (b.deleteRule = function (p) { e.Xb(d, "r", e.F.$(), "", p); return m.call(b, p) })
                            }; c.prototype.yh = function (b) { var d = this; E(function (e) { var f = ma(d.b.CSSStyleSheet.prototype[e], e); f && (b[e] = D(f, b)) }, br) }; c.prototype.yj = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Bd = function (b) {
                                var d = b.data; b = d.id; d = d.node; if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                    var e = d.sheet, f = this.yj(e); if (f && f.length) {
                                        for (var g = [], k = 0; k < f.length; k += 1)g.push({
                                            style: f[k].cssText, index: k,
                                            tc: "a"
                                        }); this.F.ja("event", { qa: g, target: b }, "stylechange")
                                    } this.Ik(e, b); this.Ab[b] = d
                                }
                            }; c.prototype.Cd = function (b) { b = b.data.id; var d = this.Ab[b]; d && (delete this.Ab[b], d.sheet && this.yh(d.sheet)) }; return c
                        }(Sa), Zf = [[zq, "mu"], [Cq, "in"], [Dq, "r"], [Eq, "sc"], [Gq, "mo"], [Iq, "f"], [Nq, "se"], [Pq, "wf"], [Rq, "t"], [Sq, "src"], [Tq, "z"], [Yq, "ks"], [cr, "ss"]]; Zf.push([$q, "if"]); Zf.push([ar, "pa"]); var dr = z(function (a) {
                            var c = a.document; return {
                                Je: function () {
                                    if (c.scrollingElement) return c.scrollingElement; var b = 0 === c.compatMode.indexOf("CSS1") ?
                                        c.documentElement : c.body; return w(c, "documentElement.scrollHeight") >= w(c, "body.scrollHeight") ? b : null
                                }, Rj: function () { var b = a.screen; if (!b) return 0; var d = Ta(A(b, w), ["orientation", "mozOrientation", "msOrientation"]); return w(b, d + ".angle") || 0 }, hm: A(a, ub), Wg: A(a, Vc), gm: A(a, Rd)
                            }
                        }), er = function () {
                            function a(c, b) {
                                var d = this; this.oc = 0; this.Vc = []; this.nc = null; this.Ka = this.Gc = this.Mh = !1; this.Fa = 0; this.Sj = function () { return d.page }; this.He = function () { return d.oc }; this.Ng = function () { return d.Fa }; this.Pj = function () { return d.Mb };
                                this.Mg = function () { return d.nc }; this.Ia = function () { return d.Pe }; this.$ = function () { return d.Rf ? d.b.Math.max(d.Rf(ba) - d.Fa, 0) : 0 }; this.fd = function () { return d.options }; this.Ob = function () { return d.bj }; this.ja = function (f, g, k, m) { void 0 === m && (m = d.$()); f = d.Oj(f, g, k, m); d.xa(f) }; this.Oj = function (f, g, k, m) { void 0 === m && (m = d.$()); return { type: f, data: g, $: m, ca: d.oc, event: k } }; this.xa = function (f) { f = ea(f) ? f : [f]; d.Mh && !d.Gc ? d.Ka ? (f = B(function (g) { return g.ca ? g : F(g, { ca: d.oc }) }, f), d.Mg().Fh(f)) : (f = B(tk, f), d.If(f)) : d.Vc = d.Vc.concat(f) };
                                this.b = c; var e = ye(c, this, "R"); this.Nf = e.N(this.Nf, "s"); this.xa = e.N(this.xa, "sd"); e = U(c); e.o("wv2e") && rf(); e.C("wv2e", !0); this.options = b; this.Mb = ia(c); this.Pe = new Aq(this.b, b); this.bj = dr(c); this.vg = B(function (f) { return new f[0](c, d, f[1]) }, Zf); this.ek(); this.page = vk(this.b); this.Nf()
                            } a.prototype.start = function (c) { this.Mh = !0; this.If = c; this.Ch() }; a.prototype.stop = function () { Yf(this.b) && (E(function (c) { return c.stop() }, this.vg), this.Pe.stop(), this.nc && this.nc.stop(), this.Ka || this.ja("event", {}, "eof")) };
                            a.prototype.Sc = function (c, b) { var d = new a(c, F({}, this.options, { ca: b })); d.start(I); return d }; a.prototype.ek = function () { var c = this; this.Ka = !!this.options.ca; this.oc = this.options.ca || 0; this.Gc = !this.Ka; var b = this.options.Uh || []; b.push(R(this.b).host); this.nc = wk(this.b, this, b); b = this.nc.Ge(); ub(this.b) ? this.Gc && b.D("i", function (d) { c.Ka = d.Ka; c.Gc = !1; d.ca && (c.oc = d.ca); c.Ch() }) : this.Gc = this.Ka = !1 }; a.prototype.Ch = function () { var c = this.Vc.splice(0, this.Vc.length); this.xa(c) }; a.prototype.Nf = function () {
                                this.Rf =
                                    We(this.b); this.Fa = this.Rf(ba); E(function (c) { c.start() }, this.vg); this.Pe.start()
                            }; return a
                        }(), $f = Ea(function (a, c) { var b; return b = {}, b[Pa(a)] = c, b }), fr = function () {
                            function a(c) {
                                var b; this.isSync = !1; this.Uc = []; this.Cg = []; this.ub = Hb; this.b = c; this.qc = (b = {}, b.event = D(this.wj, this), b.page = $f({ page: 1 }), b.mutation = $f({ df: 1 }), b.activity = $f({ ae: 1 }), b); try { this.$a = w(Nf, "ru").V.O.T.R } catch (d) { } this.$a && (this.Cg = [[["scroll"], { Df: 1 }], [["selection"], { Ef: 1 }], [["change", "input"], { ie: 1 }], [["keystroke"], { Ye: 1 }, { Za: 1 }],
                                [["zoom"], { gg: 1 }], [["resize"], { Bf: 1 }], [["windowfocus", "windowblur", "focus", "blur", "eof"], { dg: 1 }], [["mousemove", "mouseup", "mousedown", "click"], { cf: 1 }], [["deviceRotation"], { ue: 1 }], [["fatalError"], { Ae: 1 }], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], { Vf: 1 }, { touches: 1 }, { touches: 1 }], [["hashchange"], { Oe: 1 }], [["stylechange"], { Pf: 1 }, { qa: 1 }, { qa: 1 }]])
                            } a.prototype.wj = function (c) {
                                var b, d, e = c.type, f = Ta(x(W("0"), A(e, J)), this.Cg); f || vb(Hd("vem." + e)); "eof" === e && (this.isSync = !0, E(na(Wm),
                                    this.Uc)); var g = f[1], k = f[2]; f = f[3]; var m = c.ga; return { event: (b = { type: this.$a.zi[e], target: c.target, ca: c.ca }, b[Pa(g)] = k ? (d = {}, d[Pa(k)] = f ? m[Pa(f)] : m, d) : m, b) }
                            }; a.prototype.Cb = function (c, b) { var d = this; void 0 === b && (b = !1); var e = Nc(c, function (g) { var k = !S(g.partNum); return { data: k ? null : d.qc[g.type](g.data), je: k ? g.data : null, page: g.partNum, end: g.end, $: g.$ } }), f = Te(this.b, e, this.isSync || b ? Infinity : 20); this.Uc.push(f); return f(Ne(function (g) { g = d.$a.jg.encode({ buffer: g }); var k = ae(d.b)(f, d.Uc); d.Uc.splice(k, 1); return g.finish() })) };
                            a.prototype.kb = function (c) { return this.$a.mg.encode(this.qc[c.type](c.data)).finish() }; a.prototype.Od = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return this.$a && nh(this.b) }; return a
                        }(), gr = G("w2", function (a, c) {
                            var b = U(a), d = X(c); if (c.Eb && !rc(a) && a.MutationObserver && ua("Element", a.Element)) {
                                ua("MutationObserver", a.MutationObserver) || xd(a).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                                var e = na(function (g, k) { Ga(a, c, k)["catch"](g) }), f = $k(a)(Ro(M([a, c], qk)))(Ne(function (g) { return new er(a, g) })); jh([f, e])($b(C(a, "wv2.R.c"), function (g) {
                                    function k() { p || (p = !0, m && m.stop()) } var m = g[0]; g = g[1]; var p = !1, r = b.o("wv2Counter"); if (!Ug(a, g) || r) k(); else if (ia(a).D(a, ["beforeunload", "unload"], k), b.C("wv2Counter", d), b.C("stopRecorder", k), g = [new fe(a)], g.unshift(new fr(a)), g = Ta(function (l) { return l.isEnabled() }, g)) {
                                        r = sk(a, c, !(g instanceof fe), function () { return {} }); var t = Pf.Fe(d, "m", A("m", r), g, a), v =
                                            Pf.Fe(d, "e", A("e", r), g, a); g = rk(); r = g.Dk; v.D("ag", g.$i); v.D("p", r); var q = Va(function (l) { "eof" === w(l, "data.type") ? (v.push(l), t.push(l), v.flush(), t.flush()) : ("event" === l.type ? v : t).push(l) }); Z(a, k, 864E5); Gb(a, function () { m.start(q) })
                                    }
                                }))
                            }
                        }), hr = Ea(function (a, c) { 0 === parseFloat(w(c, "settings.c_recp")) && (a.af.C("ymoo" + a.wg, a.Qh(jb)), a.oe && a.oe.destruct && a.oe.destruct()) }), ir = G("wsa", function (a, c) {
                            var b = { wg: X(c), oe: La(a, c), Qh: da(a), af: Ma(a) }, d = b.Qh(jb); if (b.af.Re) return !1; var e = b.af.o("ymoo" + b.wg); if (e && 30 >
                                d - e) return !0; Ga(a, c, hr(b))["catch"](C(a, "d.f")); return !1
                        }), jr = x(function (a) { a = w(a, "navigator.plugins") || []; return Hb(a) ? x(ha, nc(Boolean), hi(function (c, b) { return c.name > b.name ? 1 : 2 }), Va(bm))(a) : "" }, oc(",")), kr = function (a) { return function (c) { var b = db(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.zj; e = e.qj; try { var g = fa("getContext", b); d = B(x(N, g), e) } catch (k) { return "" } return (g = Ta(N, d)) ? f(c, { canvas: b, gj: g }) : "" } }(function () { return { qj: up, zj: jk } }), ek = ["name", "lang", "localService", "voiceURI", "default"],
                            Zj = z(function (a, c) { return Ga(a, c, W("settings.form_goals")) }, rb), lr = A(!0, kg), mr = G("s.f.i", function (a, c) { var b = []; ia(a).D(a, ["click"], C(a, "s.f.c", M([a, c, b], Yj))); ia(a).D(a, ["submit"], C(a, "s.f.e", x(W("target"), M([a, c, b], lr)))); mg(a, c, "Form goal. Counter " + c.id + ". Init.") }), nr = Vd("rtg", function (a, c) { var b = X(c); Ga(a, c, function (d) { var e = w(d, "settings.rt"); d = hh(d); if (e && !d) return ih(a, c).then(function () { Sh(c)[b] = 1 }) })["catch"](C(a, "l.rtg")) }), Ij = /[^\d]/g, or = /[^\d.,]/g, pr = /[.,]$/, Wj = G("ep.pp", function (a,
                                c) { if (!c) return 0; a: { var b = c.replace(or, "").replace(pr, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (J(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(b[0].replace(Ij, "") + "." + d.replace(Ij, "")); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = Math.min(b, d), b = Math.max(b, 0)); return b }), qr = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                                    "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], rr = z(function (a) { return new RegExp(a.join("|"), "i") }), sr = G("ep.cp", function (a) { if (!a) return "643"; var c = a.replace(/\s/g, ""); return (a = Ta(function (b) { return rr(b[0]).test(c) }, qr)) ? a[1] : "643" }), Vj = G("ep.en", function (a, c, b) {
                                        a = gg(a); c = "" + 100 * c + b + a; b = 16 - c.length; if (0 > b) return ""; c = ig("0", b) + c; b = c.slice(0, 8); c = c.slice(-8);
                                        b = (+b ^ 92844).toString(35); c = (+c ^ 92844).toString(35); return "" + b + "z" + c
                                    }), Jj = x(fg, sr), Kj = G("ep.ctp", function (a, c, b, d) { var e = Jj(a, b), f = eg(a, d); dg(a, c, e, f); ua("MutationObserver", a.MutationObserver) && (new MutationObserver(function () { var g = Jj(a, b), k = eg(a, d); if (e !== g || f !== k) e = g, f = k, dg(a, c, e, f) })).observe(a.document.body, { attributes: !0, childList: !0, subtree: !0, characterData: !0 }) }), tr = G("ep.chp", function (a, c, b, d, e) { b && qe(a, c); return d || e ? ia(a).D(a.document, ["click"], C(a, "ep.chp.cl", M([a, c, d, e], Uj))) : I }), Sj =
                                G("ep.dec", function (a, c) {
                                    if (!c || rc(a)) return []; var b = cg(a, c, " ").split(" "), d = b[1], e = b[2], f = b.slice(3); b = parseInt(b[0], 2); if (1 === b) b = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o"; else if (2 === b) b = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==";
                                    else return []; b = Tj(a, b); f = f.join(""); d = parseInt(d + e, 2); for (var g = e = "", k = 0; g.length < d && f[k];)e += f[k], b[e] && (g += String.fromCharCode(parseInt(b[e], 2)), e = ""), k += 1; b = ib(a, xg(g)); return ea(b) ? b : []
                                }), ur = G("ep.i", function (a, c) {
                                    return ua("querySelectorAll", a.document.querySelectorAll) ? pb(a, c).then(function (b) {
                                        var d = b[0], e = b[1], f = b[2], g = b[3], k = b[4], m = b[5], p = b[6], r = b[7], t = b[8], v = b[9], q = Ja(a, d), l = Ja(a, g), h = Ja(a, p), n = Ja(a, t), u = "" + d + e + f === "" + g + k + m; return pd(a).then(function () {
                                            q && Kj(a, c, e, f); l && !u && Kj(a, c, k, m);
                                            return tr(a, c, h || n, r, v)
                                        })
                                    }) : Q.resolve(I)
                                }), vr = z(function (a, c, b) { try { xd(a).warn('Function "' + b + '" has been overriden, this may cause issues with Metrika counter') } catch (d) { } }, rb), wr = G("r.nn", function (a) { Pe(a).isEnabled && Kd(a, wf, function (c) { c.D(function (b) { vr(a, b[1], b[0]); wf.splice(100) }) }) }), Qb = U(window); Qb.Db("hitParam", {}); Qb.Db("lastReferrer", window.location.href); Qb.Db("getCounters", Ep(window)); Se.push(cq); var Lj = function () {
                                    return function (a, c, b, d) {
                                        var e = this; return C(window, "c.i", function () {
                                            function f(h) {
                                                return $d(k,
                                                    m, h)(k, m)
                                            } function g(h) { return oo(k, m, v, h) } (!window || isNaN(a) && !a) && rf(); var k = window, m = yn(a, aj, c, b, d); m.id || xb(k, "Invalid Metrika id: " + m.id); var p = X(m), r = Qb.o("counters", {}), t = [], v = [$d, no]; if (r[p]) return xb(k, "Duplicate counter " + p + " initialization"), r[p]; var q = !1, l = Qb.o("hitParam", {}); l[p] && (q = !("1" !== m.sa || r[p])); l[p] = 1; e._webvisor = m.Eb || !1; r[p] = e; Qb.C("counters", r); Qb.Db("counter", e); l = Fp(window, m); t.push(l); ve(window); ir(window, m) && delete r[p]; f(vq); sp(k, [kr, jr, nk, im, fk, $l, tp, em, ck, ak, hk]);
                                            f(Wo); f(xp); f(Ek); e.replacePhones = f(oq) || I; f(pq); f(qq); e.hit = g(yp(k, m))(); e.params = g(dq(k, m))(); p = f(Gp); t.push(w(p, Pa({ unsubscribe: 1 }))); e.trackHash = $d(k, m, w(p, Pa({ jl: 1 }))); e.reachGoal = g(se(k, m))(); e.experiments = g(eq(k, m))(); f(sq); f(Cp); q || f(Xp); q = f(Jp); t.push(w(q, Pa({ te: 1 }))); e.notBounce = g(w(q, Pa({ zk: 1 })))(); e.accurateTrackBounce = g(w(q, Pa({ Kc: 1 })))(); f(fq); q = f(Mp); t.push(w(q, Pa({ te: 1 }))); e.extLink = g(w(q, Pa({ xj: 1 })))(); e.addFileExtension = g(w(q, Pa({ Zi: 1 })))(); e.file = g(w(q, Pa({ file: 1 })))(); e.trackLinks =
                                                g(w(q, Pa({ Rd: 1 })))(); t.push(hq(k, m)); t.push(rp(k)); e.ecommerceAdd = g(iq(k, m))(); e.ecommerceRemove = g(jq(k, m))(); e.ecommerceDetail = g(kq(k, m))(); e.ecommercePurchase = g(lq(k, m))(); q = f(rq); e.userParams = g(q || I)(); e.destruct = g(tq(k, m, t))(!0, !1); f(wq); f(Pp); q = f(xq); e.setUserID = g(q || I)(); e.getClientID = f(yq) || I; t.push(f(Qp)); e.clickmap = g(Zp(k, m))(); (q = f(ur)) && q.then(fa("push", t)); f(Yp); e.enableAll = g($p(k, m))(); f(mr); f(nr); f(aq); f(bq); f(fl); f(gr); wr(k)
                                        })()
                                    }
                                }(); (function (a) {
                                    var c = U(a); c.o("i") || (c.C("i", !0), ia(a).D(a,
                                        ["message"], A(a, Rk)))
                                })(window); if (window.Ya && Lj) { var Mj = Aa.Qc; window.Ya[Mj] = Lj; Kp(window); var Nj = window.Ya[Mj]; Nj.informer = Hl(window); Nj.counters = Qb.o("getCounters") } (function (a) { var c = w(a, "ym"); if (c) { var b = w(c, "a"); b || (c.a = [], b = c.a); var d = Qg(a); Kd(a, b, function (e) { e.D(d) }, !0) } })(window); aa.Dl = 1; aa.El = 10; return aa
        })({})
    } catch (aa) { };
}).call(this)
