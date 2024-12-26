"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [856], {
        9205: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = r(2265);
            let i = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                s = function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return e.filter((t, e, r) => !!t && "" !== t.trim() && r.indexOf(t) === e).join(" ").trim()
                };
            var a = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let o = (0, n.forwardRef)((t, e) => {
                    let {
                        color: r = "currentColor",
                        size: i = 24,
                        strokeWidth: o = 2,
                        absoluteStrokeWidth: l,
                        className: u = "",
                        children: h,
                        iconNode: c,
                        ...d
                    } = t;
                    return (0, n.createElement)("svg", {
                        ref: e,
                        ...a,
                        width: i,
                        height: i,
                        stroke: r,
                        strokeWidth: l ? 24 * Number(o) / Number(i) : o,
                        className: s("lucide", u),
                        ...d
                    }, [...c.map(t => {
                        let [e, r] = t;
                        return (0, n.createElement)(e, r)
                    }), ...Array.isArray(h) ? h : [h]])
                }),
                l = (t, e) => {
                    let r = (0, n.forwardRef)((r, a) => {
                        let {
                            className: l,
                            ...u
                        } = r;
                        return (0, n.createElement)(o, {
                            ref: a,
                            iconNode: e,
                            className: s("lucide-".concat(i(t)), l),
                            ...u
                        })
                    });
                    return r.displayName = "".concat(t), r
                }
        },
        8335: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Link", [
                ["path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                    key: "1cjeqo"
                }],
                ["path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                    key: "19qd67"
                }]
            ])
        },
        3247: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Search", [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8",
                    key: "4ej97u"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3",
                    key: "1qie3q"
                }]
            ])
        },
        4743: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Send", [
                ["path", {
                    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                    key: "1ffxy3"
                }],
                ["path", {
                    d: "m21.854 2.147-10.94 10.939",
                    key: "12cjpa"
                }]
            ])
        },
        8919: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Share2", [
                ["circle", {
                    cx: "18",
                    cy: "5",
                    r: "3",
                    key: "gq8acd"
                }],
                ["circle", {
                    cx: "6",
                    cy: "12",
                    r: "3",
                    key: "w7nqdw"
                }],
                ["circle", {
                    cx: "18",
                    cy: "19",
                    r: "3",
                    key: "1xt0gg"
                }],
                ["line", {
                    x1: "8.59",
                    x2: "15.42",
                    y1: "13.51",
                    y2: "17.49",
                    key: "47mynk"
                }],
                ["line", {
                    x1: "15.41",
                    x2: "8.59",
                    y1: "6.51",
                    y2: "10.49",
                    key: "1n3mei"
                }]
            ])
        },
        2351: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Twitter", [
                ["path", {
                    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                    key: "pff0z6"
                }]
            ])
        },
        3145: function(t, e, r) {
            r.d(e, {
                default: function() {
                    return i.a
                }
            });
            var n = r(8461),
                i = r.n(n)
        },
        5878: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let n = r(7043),
                i = r(3099),
                s = r(7437),
                a = i._(r(2265)),
                o = n._(r(4887)),
                l = n._(r(8293)),
                u = r(5346),
                h = r(128),
                c = r(2589);
            r(1765);
            let d = r(5523),
                f = n._(r(5084)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function g(t, e, r, n, i, s, a) {
                let o = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== o && (t["data-loaded-src"] = o, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && i(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function m(t) {
                return a.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let y = (0, a.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: o,
                    width: l,
                    decoding: u,
                    className: h,
                    style: c,
                    fetchPriority: d,
                    placeholder: f,
                    loading: p,
                    unoptimized: y,
                    fill: v,
                    onLoadRef: w,
                    onLoadingCompleteRef: A,
                    setBlurComplete: b,
                    setShowAltText: E,
                    sizesInput: x,
                    onLoad: P,
                    onError: k,
                    ...C
                } = t;
                return (0, s.jsx)("img", { ...C,
                    ...m(d),
                    loading: p,
                    width: l,
                    height: o,
                    decoding: u,
                    "data-nimg": v ? "fill" : "1",
                    className: h,
                    style: c,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, a.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (k && (t.src = t.src), t.complete && g(t, f, w, A, b, y, x))
                    }, [r, f, w, A, b, k, y, x, e]),
                    onLoad: t => {
                        g(t.currentTarget, f, w, A, b, y, x)
                    },
                    onError: t => {
                        E(!0), "empty" !== f && b(!0), k && k(t)
                    }
                })
            });

            function v(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...m(r.fetchPriority)
                };
                return e && o.default.preload ? (o.default.preload(r.src, n), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let w = (0, a.forwardRef)((t, e) => {
                let r = (0, a.useContext)(d.RouterContext),
                    n = (0, a.useContext)(c.ImageConfigContext),
                    i = (0, a.useMemo)(() => {
                        let t = p || n || h.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            r = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: o,
                        onLoadingComplete: l
                    } = t,
                    g = (0, a.useRef)(o);
                (0, a.useEffect)(() => {
                    g.current = o
                }, [o]);
                let m = (0, a.useRef)(l);
                (0, a.useEffect)(() => {
                    m.current = l
                }, [l]);
                let [w, A] = (0, a.useState)(!1), [b, E] = (0, a.useState)(!1), {
                    props: x,
                    meta: P
                } = (0, u.getImgProps)(t, {
                    defaultLoader: f.default,
                    imgConf: i,
                    blurComplete: w,
                    showAltText: b
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(y, { ...x,
                        unoptimized: P.unoptimized,
                        placeholder: P.placeholder,
                        fill: P.fill,
                        onLoadRef: g,
                        onLoadingCompleteRef: m,
                        setBlurComplete: A,
                        setShowAltText: E,
                        sizesInput: t.sizes,
                        ref: e
                    }), P.priority ? (0, s.jsx)(v, {
                        isAppRouter: !r,
                        imgAttributes: x
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1436: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(7043)._(r(2265)).default.createContext({})
        },
        3964: function(t, e) {
            function r(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || r && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        5346: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return o
                }
            }), r(1765);
            let n = r(6496),
                i = r(128);

            function s(t) {
                return void 0 !== t.default
            }

            function a(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function o(t, e) {
                var r;
                let o, l, u, {
                        src: h,
                        sizes: c,
                        unoptimized: d = !1,
                        priority: f = !1,
                        loading: p,
                        className: g,
                        quality: m,
                        width: y,
                        height: v,
                        fill: w = !1,
                        style: A,
                        overrideSrc: b,
                        onLoad: E,
                        onLoadingComplete: x,
                        placeholder: P = "empty",
                        blurDataURL: k,
                        fetchPriority: C,
                        decoding: T = "async",
                        layout: S,
                        objectFit: R,
                        objectPosition: B,
                        lazyBoundary: N,
                        lazyRoot: O,
                        ...I
                    } = t,
                    {
                        imgConf: D,
                        showAltText: F,
                        blurComplete: M,
                        defaultLoader: L
                    } = e,
                    U = D || i.imageConfigDefault;
                if ("allSizes" in U) o = U;
                else {
                    let t = [...U.deviceSizes, ...U.imageSizes].sort((t, e) => t - e),
                        e = U.deviceSizes.sort((t, e) => t - e);
                    o = { ...U,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === L) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let V = I.loader || L;
                delete I.loader, delete I.srcSet;
                let j = "__next_img_default" in V;
                if (j) {
                    if ("custom" === o.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = V;
                    V = e => {
                        let {
                            config: r,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (S) {
                    "fill" === S && (w = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[S];
                    t && (A = { ...A,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[S];
                    e && !c && (c = e)
                }
                let G = "",
                    H = a(y),
                    Q = a(v);
                if ("object" == typeof(r = h) && (s(r) || void 0 !== r.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, k = k || t.blurDataURL, G = t.src, !w) {
                        if (H || Q) {
                            if (H && !Q) {
                                let e = H / t.width;
                                Q = Math.round(t.height * e)
                            } else if (!H && Q) {
                                let e = Q / t.height;
                                H = Math.round(t.width * e)
                            }
                        } else H = t.width, Q = t.height
                    }
                }
                let z = !f && ("lazy" === p || void 0 === p);
                (!(h = "string" == typeof h ? h : G) || h.startsWith("data:") || h.startsWith("blob:")) && (d = !0, z = !1), o.unoptimized && (d = !0), j && h.endsWith(".svg") && !o.dangerouslyAllowSVG && (d = !0), f && (C = "high");
                let J = a(m),
                    K = Object.assign(w ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: R,
                        objectPosition: B
                    } : {}, F ? {} : {
                        color: "transparent"
                    }, A),
                    _ = M || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: H,
                        heightInt: Q,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: k || "",
                        objectFit: K.objectFit
                    }) + '")' : 'url("' + P + '")',
                    q = _ ? {
                        backgroundSize: K.objectFit || "cover",
                        backgroundPosition: K.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: _
                    } : {},
                    W = function(t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: s,
                            sizes: a,
                            loader: o
                        } = t;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, r) {
                            let {
                                deviceSizes: n,
                                allSizes: i
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(r); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: i.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => i.find(e => e >= t) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(e, i, a), h = l.length - 1;
                        return {
                            sizes: a || "w" !== u ? a : "100vw",
                            srcSet: l.map((t, n) => o({
                                config: e,
                                src: r,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: o({
                                config: e,
                                src: r,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: o,
                        src: h,
                        unoptimized: d,
                        width: H,
                        quality: J,
                        sizes: c,
                        loader: V
                    });
                return {
                    props: { ...I,
                        loading: z ? "lazy" : p,
                        fetchPriority: C,
                        width: H,
                        height: Q,
                        decoding: T,
                        className: g,
                        style: { ...K,
                            ...q
                        },
                        sizes: W.sizes,
                        srcSet: W.srcSet,
                        src: b || W.src
                    },
                    meta: {
                        unoptimized: d,
                        priority: f,
                        placeholder: P,
                        fill: w
                    }
                }
            }
        },
        8293: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    default: function() {
                        return g
                    },
                    defaultHead: function() {
                        return c
                    }
                });
            let n = r(7043),
                i = r(3099),
                s = r(7437),
                a = i._(r(2265)),
                o = n._(r(7421)),
                l = r(1436),
                u = r(8701),
                h = r(3964);

            function c(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function d(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            r(1765);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(t, e) {
                let {
                    inAmpMode: r
                } = e;
                return t.reduce(d, []).reverse().concat(c(r).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        r = new Set,
                        n = {};
                    return i => {
                        let s = !0,
                            a = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            a = !0;
                            let e = i.key.slice(i.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                e.has(i.type) ? s = !1 : e.add(i.type);
                                break;
                            case "meta":
                                for (let t = 0, e = f.length; t < e; t++) {
                                    let e = f[t];
                                    if (i.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) r.has(e) ? s = !1 : r.add(e);
                                        else {
                                            let t = i.props[e],
                                                r = n[e] || new Set;
                                            ("name" !== e || !a) && r.has(t) ? s = !1 : (r.add(t), n[e] = r)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, a.default.cloneElement(t, e)
                    }
                    return a.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let g = function(t) {
                let {
                    children: e
                } = t, r = (0, a.useContext)(l.AmpStateContext), n = (0, a.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(o.default, {
                    reduceComponentsToState: p,
                    headManager: n,
                    inAmpMode: (0, h.isInAmpMode)(r),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6496: function(t, e) {
            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: s,
                    objectFit: a
                } = t, o = n ? 40 * n : e, l = i ? 40 * i : r, u = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        2589: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(7043)._(r(2265)),
                i = r(128),
                s = n.default.createContext(i.imageConfigDefault)
        },
        128: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    localPatterns: void 0,
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        8461: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return o
                    }
                });
            let n = r(7043),
                i = r(5346),
                s = r(5878),
                a = n._(r(5084));

            function o(t) {
                let {
                    props: e
                } = (0, i.getImgProps)(t, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        5084: function(t, e) {
            function r(t) {
                let {
                    config: e,
                    src: r,
                    width: n,
                    quality: i
                } = t;
                return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        5523: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(7043)._(r(2265)).default.createContext(null)
        },
        7421: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(2265),
                i = "undefined" == typeof window,
                s = i ? () => {} : n.useLayoutEffect,
                a = i ? () => {} : n.useEffect;

            function o(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: r
                } = t;

                function o() {
                    if (e && e.mountedInstances) {
                        let i = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(r(i, t))
                    }
                }
                if (i) {
                    var l;
                    null == e || null == (l = e.mountedInstances) || l.add(t.children), o()
                }
                return s(() => {
                    var r;
                    return null == e || null == (r = e.mountedInstances) || r.add(t.children), () => {
                        var r;
                        null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = o), () => {
                    e && (e._pendingUpdate = o)
                })), a(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        6702: function(t, e, r) {
            let n, i, s, a, o, l, u, h, c, d, f, p, g, m, y;
            r.d(e, {
                Q: function() {
                    return aM
                }
            });
            var v = {};
            async function w(t) {
                let e = Object.keys(t);
                return (await Promise.all(e.map(e => Promise.resolve(t[e])))).reduce((t, r, n) => (t[e[n]] = r, t), {})
            }

            function A(t, e, r) {
                for (let n in e) {
                    let i = e[n],
                        s = r ? r[n] : null;
                    s && function(t, e, r) {
                        let n = e.split("|").map(t => t.trim());
                        for (let r = 0; r < n.length; r++) switch (e) {
                            case "any":
                                return;
                            case "bigint":
                            case "boolean":
                            case "number":
                            case "string":
                                if (typeof t === e) return
                        }
                        let i = Error(`invalid value for type ${e}`);
                        throw i.code = "INVALID_ARGUMENT", i.argument = `value.${r}`, i.value = t, i
                    }(i, s, n), Object.defineProperty(t, n, {
                        enumerable: !0,
                        value: i,
                        writable: !1
                    })
                }
            }

            function b(t) {
                if (null == t) return "null";
                if (Array.isArray(t)) return "[ " + t.map(b).join(", ") + " ]";
                if (t instanceof Uint8Array) {
                    let e = "0123456789abcdef",
                        r = "0x";
                    for (let n = 0; n < t.length; n++) r += e[t[n] >> 4] + e[15 & t[n]];
                    return r
                }
                if ("object" == typeof t && "function" == typeof t.toJSON) return b(t.toJSON());
                switch (typeof t) {
                    case "boolean":
                    case "symbol":
                    case "number":
                        return t.toString();
                    case "bigint":
                        return BigInt(t).toString();
                    case "string":
                        return JSON.stringify(t);
                    case "object":
                        {
                            let e = Object.keys(t);
                            return e.sort(),
                            "{ " + e.map(e => `${b(e)}: ${b(t[e])}`).join(", ") + " }"
                        }
                }
                return "[ COULD NOT SERIALIZE ]"
            }

            function E(t, e) {
                return t && t.code === e
            }

            function x(t) {
                return E(t, "CALL_EXCEPTION")
            }

            function P(t, e, r) {
                let n, i = t; {
                    let n = [];
                    if (r) {
                        if ("message" in r || "code" in r || "name" in r) throw Error(`value will overwrite populated values: ${b(r)}`);
                        for (let t in r) {
                            if ("shortMessage" === t) continue;
                            let e = r[t];
                            n.push(t + "=" + b(e))
                        }
                    }
                    n.push(`code=${e}`), n.push("version=6.13.4"), n.length && (t += " (" + n.join(", ") + ")")
                }
                switch (e) {
                    case "INVALID_ARGUMENT":
                        n = TypeError(t);
                        break;
                    case "NUMERIC_FAULT":
                    case "BUFFER_OVERRUN":
                        n = RangeError(t);
                        break;
                    default:
                        n = Error(t)
                }
                return A(n, {
                    code: e
                }), r && Object.assign(n, r), null == n.shortMessage && A(n, {
                    shortMessage: i
                }), n
            }

            function k(t, e, r, n) {
                if (!t) throw P(e, r, n)
            }

            function C(t, e, r, n) {
                k(t, e, "INVALID_ARGUMENT", {
                    argument: r,
                    value: n
                })
            }

            function T(t, e, r) {
                null == r && (r = ""), r && (r = ": " + r), k(t >= e, "missing arguemnt" + r, "MISSING_ARGUMENT", {
                    count: t,
                    expectedCount: e
                }), k(t <= e, "too many arguments" + r, "UNEXPECTED_ARGUMENT", {
                    count: t,
                    expectedCount: e
                })
            }
            r.r(v), r.d(v, {
                dQ: function() {
                    return iH
                },
                ci: function() {
                    return iI
                },
                bytesToNumberBE: function() {
                    return iM
                },
                ty: function() {
                    return iL
                },
                eV: function() {
                    return iG
                },
                n$: function() {
                    return iJ
                },
                ql: function() {
                    return ij
                },
                hexToBytes: function() {
                    return iF
                },
                tL: function() {
                    return iU
                },
                S5: function() {
                    return iV
                },
                FF: function() {
                    return i_
                }
            });
            let S = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
                try {
                    if ("test" !== "test".normalize(e)) throw Error("bad");
                    if ("NFD" === e) {
                        let t = String.fromCharCode(233).normalize("NFD"),
                            e = String.fromCharCode(101, 769);
                        if (t !== e) throw Error("broken")
                    }
                    t.push(e)
                } catch (t) {}
                return t
            }, []);

            function R(t, e, r) {
                if (null == r && (r = ""), t !== e) {
                    let t = r,
                        e = "new";
                    r && (t += ".", e += " " + r), k(!1, `private constructor; use ${t}from* methods`, "UNSUPPORTED_OPERATION", {
                        operation: e
                    })
                }
            }

            function B(t, e, r) {
                if (t instanceof Uint8Array) return r ? new Uint8Array(t) : t;
                if ("string" == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
                    let e = new Uint8Array((t.length - 2) / 2),
                        r = 2;
                    for (let n = 0; n < e.length; n++) e[n] = parseInt(t.substring(r, r + 2), 16), r += 2;
                    return e
                }
                C(!1, "invalid BytesLike value", e || "value", t)
            }

            function N(t, e) {
                return B(t, e, !1)
            }

            function O(t, e) {
                return B(t, e, !0)
            }

            function I(t, e) {
                return !!("string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/)) && ("number" != typeof e || t.length === 2 + 2 * e) && (!0 !== e || t.length % 2 == 0)
            }

            function D(t) {
                return I(t, !0) || t instanceof Uint8Array
            }
            let F = "0123456789abcdef";

            function M(t) {
                let e = N(t),
                    r = "0x";
                for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    r += F[(240 & n) >> 4] + F[15 & n]
                }
                return r
            }

            function L(t) {
                return "0x" + t.map(t => M(t).substring(2)).join("")
            }

            function U(t) {
                return I(t, !0) ? (t.length - 2) / 2 : N(t).length
            }

            function V(t, e, r) {
                let n = N(t);
                return null != r && r > n.length && k(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
                    buffer: n,
                    length: n.length,
                    offset: r
                }), M(n.slice(null == e ? 0 : e, null == r ? n.length : r))
            }

            function j(t, e, r) {
                let n = N(t);
                k(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
                    buffer: new Uint8Array(n),
                    length: e,
                    offset: e + 1
                });
                let i = new Uint8Array(e);
                return i.fill(0), r ? i.set(n, e - n.length) : i.set(n, 0), M(i)
            }

            function G(t, e) {
                return j(t, e, !0)
            }
            let H = BigInt(0),
                Q = BigInt(1);

            function z(t, e) {
                let r = K(t, "value"),
                    n = BigInt(Z(e, "width")),
                    i = Q << n - Q;
                return r < H ? (k((r = -r) <= i, "too low", "NUMERIC_FAULT", {
                    operation: "toTwos",
                    fault: "overflow",
                    value: t
                }), (~r & (Q << n) - Q) + Q) : (k(r < i, "too high", "NUMERIC_FAULT", {
                    operation: "toTwos",
                    fault: "overflow",
                    value: t
                }), r)
            }

            function J(t, e) {
                return _(t, "value") & (Q << BigInt(Z(e, "bits"))) - Q
            }

            function K(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return t;
                    case "number":
                        return C(Number.isInteger(t), "underflow", e || "value", t), C(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), BigInt(t);
                    case "string":
                        try {
                            if ("" === t) throw Error("empty string");
                            if ("-" === t[0] && "-" !== t[1]) return -BigInt(t.substring(1));
                            return BigInt(t)
                        } catch (r) {
                            C(!1, `invalid BigNumberish string: ${r.message}`, e || "value", t)
                        }
                }
                C(!1, "invalid BigNumberish value", e || "value", t)
            }

            function _(t, e) {
                let r = K(t, e);
                return k(r >= H, "unsigned value cannot be negative", "NUMERIC_FAULT", {
                    fault: "overflow",
                    operation: "getUint",
                    value: t
                }), r
            }
            let q = "0123456789abcdef";

            function W(t) {
                if (t instanceof Uint8Array) {
                    let e = "0x0";
                    for (let r of t) e += q[r >> 4] + q[15 & r];
                    return BigInt(e)
                }
                return K(t)
            }

            function Z(t, e) {
                switch (typeof t) {
                    case "bigint":
                        return C(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), Number(t);
                    case "number":
                        return C(Number.isInteger(t), "underflow", e || "value", t), C(t >= -9007199254740991 && t <= 9007199254740991, "overflow", e || "value", t), t;
                    case "string":
                        try {
                            if ("" === t) throw Error("empty string");
                            return Z(BigInt(t), e)
                        } catch (r) {
                            C(!1, `invalid numeric string: ${r.message}`, e || "value", t)
                        }
                }
                C(!1, "invalid numeric value", e || "value", t)
            }

            function Y(t, e) {
                let r = _(t, "value").toString(16);
                if (null == e) r.length % 2 && (r = "0" + r);
                else {
                    let n = Z(e, "width");
                    for (k(2 * n >= r.length, `value exceeds width (${n} bytes)`, "NUMERIC_FAULT", {
                            operation: "toBeHex",
                            fault: "overflow",
                            value: t
                        }); r.length < 2 * n;) r = "0" + r
                }
                return "0x" + r
            }

            function X(t) {
                let e = _(t, "value");
                if (e === H) return new Uint8Array([]);
                let r = e.toString(16);
                r.length % 2 && (r = "0" + r);
                let n = new Uint8Array(r.length / 2);
                for (let t = 0; t < n.length; t++) {
                    let e = 2 * t;
                    n[t] = parseInt(r.substring(e, e + 2), 16)
                }
                return n
            }

            function $(t) {
                let e = M(D(t) ? t : X(t)).substring(2);
                for (; e.startsWith("0");) e = e.substring(1);
                return "" === e && (e = "0"), "0x" + e
            }
            let tt = new Uint8Array(32),
                te = ["then"],
                tr = {},
                tn = new WeakMap;

            function ti(t) {
                return tn.get(t)
            }

            function ts(t, e) {
                let r = Error(`deferred error during ABI decoding triggered accessing ${t}`);
                throw r.error = e, r
            }
            class ta extends Array {#
                t;
                constructor(...t) {
                    var e, r;
                    let n = t[0],
                        i = t[1],
                        s = (t[2] || []).slice(),
                        a = !0;
                    n !== tr && (i = t, s = [], a = !1), super(i.length), i.forEach((t, e) => {
                        this[e] = t
                    });
                    let o = s.reduce((t, e) => ("string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t), new Map);
                    if (e = Object.freeze(i.map((t, e) => {
                            let r = s[e];
                            return null != r && 1 === o.get(r) ? r : null
                        })), tn.set(this, e), this.#t = [], null == this.#t && this.#t, !a) return;
                    Object.freeze(this);
                    let l = new Proxy(this, {
                        get: (t, e, r) => {
                            if ("string" == typeof e) {
                                if (e.match(/^[0-9]+$/)) {
                                    let r = Z(e, "%index");
                                    if (r < 0 || r >= this.length) throw RangeError("out of result range");
                                    let n = t[r];
                                    return n instanceof Error && ts(`index ${r}`, n), n
                                }
                                if (te.indexOf(e) >= 0) return Reflect.get(t, e, r);
                                let n = t[e];
                                if (n instanceof Function) return function(...e) {
                                    return n.apply(this === r ? t : this, e)
                                };
                                if (!(e in t)) return t.getValue.apply(this === r ? t : this, [e])
                            }
                            return Reflect.get(t, e, r)
                        }
                    });
                    return r = ti(this), tn.set(l, r), l
                }
                toArray(t) {
                    let e = [];
                    return this.forEach((r, n) => {
                        r instanceof Error && ts(`index ${n}`, r), t && r instanceof ta && (r = r.toArray(t)), e.push(r)
                    }), e
                }
                toObject(t) {
                    let e = ti(this);
                    return e.reduce((r, n, i) => (k(null != n, `value at index ${i} unnamed`, "UNSUPPORTED_OPERATION", {
                        operation: "toObject()"
                    }), function t(e, r, n) {
                        return e.indexOf(null) >= 0 ? r.map((e, r) => e instanceof ta ? t(ti(e), e, n) : e) : e.reduce((e, i, s) => {
                            let a = r.getValue(i);
                            return i in e || (n && a instanceof ta && (a = t(ti(a), a, n)), e[i] = a), e
                        }, {})
                    }(e, this, t)), {})
                }
                slice(t, e) {
                    null == t && (t = 0), t < 0 && (t += this.length) < 0 && (t = 0), null == e && (e = this.length), e < 0 && (e += this.length) < 0 && (e = 0), e > this.length && (e = this.length);
                    let r = ti(this),
                        n = [],
                        i = [];
                    for (let s = t; s < e; s++) n.push(this[s]), i.push(r[s]);
                    return new ta(tr, n, i)
                }
                filter(t, e) {
                    let r = ti(this),
                        n = [],
                        i = [];
                    for (let s = 0; s < this.length; s++) {
                        let a = this[s];
                        a instanceof Error && ts(`index ${s}`, a), t.call(e, a, s, this) && (n.push(a), i.push(r[s]))
                    }
                    return new ta(tr, n, i)
                }
                map(t, e) {
                    let r = [];
                    for (let n = 0; n < this.length; n++) {
                        let i = this[n];
                        i instanceof Error && ts(`index ${n}`, i), r.push(t.call(e, i, n, this))
                    }
                    return r
                }
                getValue(t) {
                    let e = ti(this).indexOf(t);
                    if (-1 === e) return;
                    let r = this[e];
                    return r instanceof Error && ts(`property ${JSON.stringify(t)}`, r.error), r
                }
                static fromItems(t, e) {
                    return new ta(tr, t, e)
                }
            }

            function to(t) {
                let e = X(t);
                return k(e.length <= 32, "value out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: e,
                    length: 32,
                    offset: e.length
                }), 32 !== e.length && (e = O(L([tt.slice(e.length % 32), e]))), e
            }
            class tl {
                name;
                type;
                localName;
                dynamic;
                constructor(t, e, r, n) {
                    A(this, {
                        name: t,
                        type: e,
                        localName: r,
                        dynamic: n
                    }, {
                        name: "string",
                        type: "string",
                        localName: "string",
                        dynamic: "boolean"
                    })
                }
                _throwError(t, e) {
                    C(!1, t, this.localName, e)
                }
            }
            class tu {#
                e;#
                r;
                constructor() {
                    this.#e = [], this.#r = 0
                }
                get data() {
                    return L(this.#e)
                }
                get length() {
                    return this.#r
                }#
                n(t) {
                    return this.#e.push(t), this.#r += t.length, t.length
                }
                appendWriter(t) {
                    return this.#n(O(t.data))
                }
                writeBytes(t) {
                    let e = O(t),
                        r = e.length % 32;
                    return r && (e = O(L([e, tt.slice(r)]))), this.#n(e)
                }
                writeValue(t) {
                    return this.#n(to(t))
                }
                writeUpdatableValue() {
                    let t = this.#e.length;
                    return this.#e.push(tt), this.#r += 32, e => {
                        this.#e[t] = to(e)
                    }
                }
            }
            class th {
                allowLoose;#
                e;#
                i;#
                s;#
                a;#
                o;
                constructor(t, e, r) {
                    A(this, {
                        allowLoose: !!e
                    }), this.#e = O(t), this.#s = 0, this.#a = null, this.#o = null != r ? r : 1024, this.#i = 0
                }
                get data() {
                    return M(this.#e)
                }
                get dataLength() {
                    return this.#e.length
                }
                get consumed() {
                    return this.#i
                }
                get bytes() {
                    return new Uint8Array(this.#e)
                }#
                l(t) {
                    if (this.#a) return this.#a.#l(t);
                    this.#s += t, k(this.#o < 1 || this.#s <= this.#o * this.dataLength, `compressed ABI data exceeds inflation ratio of ${this.#o} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
                        buffer: O(this.#e),
                        offset: this.#i,
                        length: t,
                        info: {
                            bytesRead: this.#s,
                            dataLength: this.dataLength
                        }
                    })
                }#
                u(t, e, r) {
                    let n = 32 * Math.ceil(e / 32);
                    return this.#i + n > this.#e.length && (this.allowLoose && r && this.#i + e <= this.#e.length ? n = e : k(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                        buffer: O(this.#e),
                        length: this.#e.length,
                        offset: this.#i + n
                    })), this.#e.slice(this.#i, this.#i + n)
                }
                subReader(t) {
                    let e = new th(this.#e.slice(this.#i + t), this.allowLoose, this.#o);
                    return e.#a = this, e
                }
                readBytes(t, e) {
                    let r = this.#u(0, t, !!e);
                    return this.#l(t), this.#i += r.length, r.slice(0, t)
                }
                readValue() {
                    return W(this.readBytes(32))
                }
                readIndex() {
                    return Z(W(this.readBytes(32)))
                }
            }

            function tc(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw Error(`Wrong positive integer: ${t}`)
            }

            function td(t, ...e) {
                if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
                if (e.length > 0 && !e.includes(t.length)) throw Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
            }

            function tf(t, e = !0) {
                if (t.destroyed) throw Error("Hash instance has been destroyed");
                if (e && t.finished) throw Error("Hash#digest() has already been called")
            }

            function tp(t, e) {
                td(t);
                let r = e.outputLen;
                if (t.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            let tg = BigInt(4294967296 - 1),
                tm = BigInt(32);

            function ty(t, e = !1) {
                let r = new Uint32Array(t.length),
                    n = new Uint32Array(t.length);
                for (let i = 0; i < t.length; i++) {
                    let {
                        h: s,
                        l: a
                    } = function(t, e = !1) {
                        return e ? {
                            h: Number(t & tg),
                            l: Number(t >> tm & tg)
                        } : {
                            h: 0 | Number(t >> tm & tg),
                            l: 0 | Number(t & tg)
                        }
                    }(t[i], e);
                    [r[i], n[i]] = [s, a]
                }
                return [r, n]
            }
            let tv = (t, e, r) => t << r | e >>> 32 - r,
                tw = (t, e, r) => e << r | t >>> 32 - r,
                tA = (t, e, r) => e << r - 32 | t >>> 64 - r,
                tb = (t, e, r) => t << r - 32 | e >>> 64 - r;
            var tE = {
                split: ty,
                shrSH: (t, e, r) => t >>> r,
                shrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrSH: (t, e, r) => t >>> r | e << 32 - r,
                rotrSL: (t, e, r) => t << 32 - r | e >>> r,
                rotrBH: (t, e, r) => t << 64 - r | e >>> r - 32,
                rotrBL: (t, e, r) => t >>> r - 32 | e << 64 - r,
                add: function(t, e, r, n) {
                    let i = (e >>> 0) + (n >>> 0);
                    return {
                        h: t + r + (i / 4294967296 | 0) | 0,
                        l: 0 | i
                    }
                },
                add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
                add3H: (t, e, r, n) => e + r + n + (t / 4294967296 | 0) | 0,
                add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
                add4H: (t, e, r, n, i) => e + r + n + i + (t / 4294967296 | 0) | 0,
                add5H: (t, e, r, n, i, s) => e + r + n + i + s + (t / 4294967296 | 0) | 0,
                add5L: (t, e, r, n, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
            };
            let tx = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
                tP = t => t instanceof Uint8Array,
                tk = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
                tC = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
                tT = (t, e) => t << 32 - e | t >>> e;
            if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");

            function tS(t) {
                if ("string" == typeof t && (t = function(t) {
                        if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                        return new Uint8Array(new TextEncoder().encode(t))
                    }(t)), !tP(t)) throw Error(`expected Uint8Array, got ${typeof t}`);
                return t
            }
            class tR {
                clone() {
                    return this._cloneInto()
                }
            }

            function tB(t) {
                let e = e => t().update(tS(e)).digest(),
                    r = t();
                return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e
            }

            function tN(t = 32) {
                if (tx && "function" == typeof tx.getRandomValues) return tx.getRandomValues(new Uint8Array(t));
                throw Error("crypto.getRandomValues must be defined")
            }
            let [tO, tI, tD] = [
                [],
                [],
                []
            ], tF = BigInt(0), tM = BigInt(1), tL = BigInt(2), tU = BigInt(7), tV = BigInt(256), tj = BigInt(113);
            for (let t = 0, e = tM, r = 1, n = 0; t < 24; t++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], tO.push(2 * (5 * n + r)), tI.push((t + 1) * (t + 2) / 2 % 64);
                let i = tF;
                for (let t = 0; t < 7; t++)(e = (e << tM ^ (e >> tU) * tj) % tV) & tL && (i ^= tM << (tM << BigInt(t)) - tM);
                tD.push(i)
            }
            let [tG, tH] = ty(tD, !0), tQ = (t, e, r) => r > 32 ? tA(t, e, r) : tv(t, e, r), tz = (t, e, r) => r > 32 ? tb(t, e, r) : tw(t, e, r);
            class tJ extends tR {
                constructor(t, e, r, n = !1, i = 24) {
                    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = r, this.enableXOF = n, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, tc(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = tk(this.state)
                }
                keccak() {
                    ! function(t, e = 24) {
                        let r = new Uint32Array(10);
                        for (let n = 24 - e; n < 24; n++) {
                            for (let e = 0; e < 10; e++) r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                            for (let e = 0; e < 10; e += 2) {
                                let n = (e + 8) % 10,
                                    i = (e + 2) % 10,
                                    s = r[i],
                                    a = r[i + 1],
                                    o = tQ(s, a, 1) ^ r[n],
                                    l = tz(s, a, 1) ^ r[n + 1];
                                for (let r = 0; r < 50; r += 10) t[e + r] ^= o, t[e + r + 1] ^= l
                            }
                            let e = t[2],
                                i = t[3];
                            for (let r = 0; r < 24; r++) {
                                let n = tI[r],
                                    s = tQ(e, i, n),
                                    a = tz(e, i, n),
                                    o = tO[r];
                                e = t[o], i = t[o + 1], t[o] = s, t[o + 1] = a
                            }
                            for (let e = 0; e < 50; e += 10) {
                                for (let n = 0; n < 10; n++) r[n] = t[e + n];
                                for (let n = 0; n < 10; n++) t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                            }
                            t[0] ^= tG[n], t[1] ^= tH[n]
                        }
                        r.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(t) {
                    tf(this);
                    let {
                        blockLen: e,
                        state: r
                    } = this, n = (t = tS(t)).length;
                    for (let i = 0; i < n;) {
                        let s = Math.min(e - this.pos, n - i);
                        for (let e = 0; e < s; e++) r[this.pos++] ^= t[i++];
                        this.pos === e && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: t,
                        suffix: e,
                        pos: r,
                        blockLen: n
                    } = this;
                    t[r] ^= e, (128 & e) != 0 && r === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
                }
                writeInto(t) {
                    tf(this, !1), td(t), this.finish();
                    let e = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, i = t.length; n < i;) {
                        this.posOut >= r && this.keccak();
                        let s = Math.min(r - this.posOut, i - n);
                        t.set(e.subarray(this.posOut, this.posOut + s), n), this.posOut += s, n += s
                    }
                    return t
                }
                xofInto(t) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(t)
                }
                xof(t) {
                    return tc(t), this.xofInto(new Uint8Array(t))
                }
                digestInto(t) {
                    if (tp(t, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(t), this.destroy(), t
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(t) {
                    let {
                        blockLen: e,
                        suffix: r,
                        outputLen: n,
                        rounds: i,
                        enableXOF: s
                    } = this;
                    return t || (t = new tJ(e, r, n, s, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = n, t.enableXOF = s, t.destroyed = this.destroyed, t
                }
            }
            let tK = tB(() => new tJ(136, 1, 32)),
                t_ = !1,
                tq = function(t) {
                    return tK(t)
                },
                tW = tq;

            function tZ(t) {
                let e = N(t, "data");
                return M(tW(e))
            }
            tZ._ = tq, tZ.lock = function() {
                t_ = !0
            }, tZ.register = function(t) {
                if (t_) throw TypeError("keccak256 is locked");
                tW = t
            }, Object.freeze(tZ);
            let tY = BigInt(0),
                tX = BigInt(36);

            function t$(t) {
                let e = (t = t.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
                let n = N(tZ(r));
                for (let t = 0; t < 40; t += 2) n[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & n[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let t0 = {};
            for (let t = 0; t < 10; t++) t0[String(t)] = String(t);
            for (let t = 0; t < 26; t++) t0[String.fromCharCode(65 + t)] = String(10 + t);
            let t1 = function() {
                let t = {};
                for (let e = 0; e < 36; e++) t["0123456789abcdefghijklmnopqrstuvwxyz" [e]] = BigInt(e);
                return t
            }();

            function t2(t) {
                if (C("string" == typeof t, "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
                    t.startsWith("0x") || (t = "0x" + t);
                    let e = t$(t);
                    return C(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e
                }
                if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    C(t.substring(2, 4) === function(t) {
                        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => t0[t]).join("");
                        for (; e.length >= 15;) {
                            let t = e.substring(0, 15);
                            e = parseInt(t, 10) % 97 + e.substring(t.length)
                        }
                        let r = String(98 - parseInt(e, 10) % 97);
                        for (; r.length < 2;) r = "0" + r;
                        return r
                    }(t), "bad icap checksum", "address", t);
                    let e = (function(t) {
                        t = t.toLowerCase();
                        let e = tY;
                        for (let r = 0; r < t.length; r++) e = e * tX + t1[t[r]];
                        return e
                    })(t.substring(4)).toString(16);
                    for (; e.length < 40;) e = "0" + e;
                    return t$("0x" + e)
                }
                C(!1, "invalid address", "address", t)
            }
            let t3 = {};

            function t4(t, e) {
                let r = !1;
                return e < 0 && (r = !0, e *= -1), new t6(t3, `${r?"":"u"}int${e}`, t, {
                    signed: r,
                    width: e
                })
            }

            function t8(t, e) {
                return new t6(t3, `bytes${e||""}`, t, {
                    size: e
                })
            }
            let t5 = Symbol.for("_ethers_typed");
            class t6 {
                type;
                value;#
                h;
                _typedSymbol;
                constructor(t, e, r, n) {
                    null == n && (n = null), R(t3, t, "Typed"), A(this, {
                        _typedSymbol: t5,
                        type: e,
                        value: r
                    }), this.#h = n, this.format()
                }
                format() {
                    if ("array" === this.type || "dynamicArray" === this.type) throw Error("");
                    return "tuple" === this.type ? `tuple(${this.value.map(t=>t.format()).join(",")})` : this.type
                }
                defaultValue() {
                    return 0
                }
                minValue() {
                    return 0
                }
                maxValue() {
                    return 0
                }
                isBigInt() {
                    return !!this.type.match(/^u?int[0-9]+$/)
                }
                isData() {
                    return this.type.startsWith("bytes")
                }
                isString() {
                    return "string" === this.type
                }
                get tupleName() {
                    if ("tuple" !== this.type) throw TypeError("not a tuple");
                    return this.#h
                }
                get arrayLength() {
                    if ("array" !== this.type) throw TypeError("not an array");
                    return !0 === this.#h ? -1 : !1 === this.#h ? this.value.length : null
                }
                static from(t, e) {
                    return new t6(t3, t, e)
                }
                static uint8(t) {
                    return t4(t, 8)
                }
                static uint16(t) {
                    return t4(t, 16)
                }
                static uint24(t) {
                    return t4(t, 24)
                }
                static uint32(t) {
                    return t4(t, 32)
                }
                static uint40(t) {
                    return t4(t, 40)
                }
                static uint48(t) {
                    return t4(t, 48)
                }
                static uint56(t) {
                    return t4(t, 56)
                }
                static uint64(t) {
                    return t4(t, 64)
                }
                static uint72(t) {
                    return t4(t, 72)
                }
                static uint80(t) {
                    return t4(t, 80)
                }
                static uint88(t) {
                    return t4(t, 88)
                }
                static uint96(t) {
                    return t4(t, 96)
                }
                static uint104(t) {
                    return t4(t, 104)
                }
                static uint112(t) {
                    return t4(t, 112)
                }
                static uint120(t) {
                    return t4(t, 120)
                }
                static uint128(t) {
                    return t4(t, 128)
                }
                static uint136(t) {
                    return t4(t, 136)
                }
                static uint144(t) {
                    return t4(t, 144)
                }
                static uint152(t) {
                    return t4(t, 152)
                }
                static uint160(t) {
                    return t4(t, 160)
                }
                static uint168(t) {
                    return t4(t, 168)
                }
                static uint176(t) {
                    return t4(t, 176)
                }
                static uint184(t) {
                    return t4(t, 184)
                }
                static uint192(t) {
                    return t4(t, 192)
                }
                static uint200(t) {
                    return t4(t, 200)
                }
                static uint208(t) {
                    return t4(t, 208)
                }
                static uint216(t) {
                    return t4(t, 216)
                }
                static uint224(t) {
                    return t4(t, 224)
                }
                static uint232(t) {
                    return t4(t, 232)
                }
                static uint240(t) {
                    return t4(t, 240)
                }
                static uint248(t) {
                    return t4(t, 248)
                }
                static uint256(t) {
                    return t4(t, 256)
                }
                static uint(t) {
                    return t4(t, 256)
                }
                static int8(t) {
                    return t4(t, -8)
                }
                static int16(t) {
                    return t4(t, -16)
                }
                static int24(t) {
                    return t4(t, -24)
                }
                static int32(t) {
                    return t4(t, -32)
                }
                static int40(t) {
                    return t4(t, -40)
                }
                static int48(t) {
                    return t4(t, -48)
                }
                static int56(t) {
                    return t4(t, -56)
                }
                static int64(t) {
                    return t4(t, -64)
                }
                static int72(t) {
                    return t4(t, -72)
                }
                static int80(t) {
                    return t4(t, -80)
                }
                static int88(t) {
                    return t4(t, -88)
                }
                static int96(t) {
                    return t4(t, -96)
                }
                static int104(t) {
                    return t4(t, -104)
                }
                static int112(t) {
                    return t4(t, -112)
                }
                static int120(t) {
                    return t4(t, -120)
                }
                static int128(t) {
                    return t4(t, -128)
                }
                static int136(t) {
                    return t4(t, -136)
                }
                static int144(t) {
                    return t4(t, -144)
                }
                static int152(t) {
                    return t4(t, -152)
                }
                static int160(t) {
                    return t4(t, -160)
                }
                static int168(t) {
                    return t4(t, -168)
                }
                static int176(t) {
                    return t4(t, -176)
                }
                static int184(t) {
                    return t4(t, -184)
                }
                static int192(t) {
                    return t4(t, -192)
                }
                static int200(t) {
                    return t4(t, -200)
                }
                static int208(t) {
                    return t4(t, -208)
                }
                static int216(t) {
                    return t4(t, -216)
                }
                static int224(t) {
                    return t4(t, -224)
                }
                static int232(t) {
                    return t4(t, -232)
                }
                static int240(t) {
                    return t4(t, -240)
                }
                static int248(t) {
                    return t4(t, -248)
                }
                static int256(t) {
                    return t4(t, -256)
                }
                static int(t) {
                    return t4(t, -256)
                }
                static bytes1(t) {
                    return t8(t, 1)
                }
                static bytes2(t) {
                    return t8(t, 2)
                }
                static bytes3(t) {
                    return t8(t, 3)
                }
                static bytes4(t) {
                    return t8(t, 4)
                }
                static bytes5(t) {
                    return t8(t, 5)
                }
                static bytes6(t) {
                    return t8(t, 6)
                }
                static bytes7(t) {
                    return t8(t, 7)
                }
                static bytes8(t) {
                    return t8(t, 8)
                }
                static bytes9(t) {
                    return t8(t, 9)
                }
                static bytes10(t) {
                    return t8(t, 10)
                }
                static bytes11(t) {
                    return t8(t, 11)
                }
                static bytes12(t) {
                    return t8(t, 12)
                }
                static bytes13(t) {
                    return t8(t, 13)
                }
                static bytes14(t) {
                    return t8(t, 14)
                }
                static bytes15(t) {
                    return t8(t, 15)
                }
                static bytes16(t) {
                    return t8(t, 16)
                }
                static bytes17(t) {
                    return t8(t, 17)
                }
                static bytes18(t) {
                    return t8(t, 18)
                }
                static bytes19(t) {
                    return t8(t, 19)
                }
                static bytes20(t) {
                    return t8(t, 20)
                }
                static bytes21(t) {
                    return t8(t, 21)
                }
                static bytes22(t) {
                    return t8(t, 22)
                }
                static bytes23(t) {
                    return t8(t, 23)
                }
                static bytes24(t) {
                    return t8(t, 24)
                }
                static bytes25(t) {
                    return t8(t, 25)
                }
                static bytes26(t) {
                    return t8(t, 26)
                }
                static bytes27(t) {
                    return t8(t, 27)
                }
                static bytes28(t) {
                    return t8(t, 28)
                }
                static bytes29(t) {
                    return t8(t, 29)
                }
                static bytes30(t) {
                    return t8(t, 30)
                }
                static bytes31(t) {
                    return t8(t, 31)
                }
                static bytes32(t) {
                    return t8(t, 32)
                }
                static address(t) {
                    return new t6(t3, "address", t)
                }
                static bool(t) {
                    return new t6(t3, "bool", !!t)
                }
                static bytes(t) {
                    return new t6(t3, "bytes", t)
                }
                static string(t) {
                    return new t6(t3, "string", t)
                }
                static array(t, e) {
                    throw Error("not implemented yet")
                }
                static tuple(t, e) {
                    throw Error("not implemented yet")
                }
                static overrides(t) {
                    return new t6(t3, "overrides", Object.assign({}, t))
                }
                static isTyped(t) {
                    return t && "object" == typeof t && "_typedSymbol" in t && t._typedSymbol === t5
                }
                static dereference(t, e) {
                    if (t6.isTyped(t)) {
                        if (t.type !== e) throw Error(`invalid type: expecetd ${e}, got ${t.type}`);
                        return t.value
                    }
                    return t
                }
            }
            class t9 extends tl {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, e) {
                    let r = t6.dereference(e, "string");
                    try {
                        r = t2(r)
                    } catch (t) {
                        return this._throwError(t.message, e)
                    }
                    return t.writeValue(r)
                }
                decode(t) {
                    return t2(Y(t.readValue(), 20))
                }
            }
            class t7 extends tl {
                coder;
                constructor(t) {
                    super(t.name, t.type, "_", t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            }

            function et(t, e, r) {
                let n = [];
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let t = {};
                    n = e.map(e => {
                        let n = e.localName;
                        return k(n, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: e
                            },
                            value: r
                        }), k(!t[n], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                            argument: "values",
                            info: {
                                coder: e
                            },
                            value: r
                        }), t[n] = !0, r[n]
                    })
                } else C(!1, "invalid tuple value", "tuple", r);
                C(e.length === n.length, "types/value length mismatch", "tuple", r);
                let i = new tu,
                    s = new tu,
                    a = [];
                return e.forEach((t, e) => {
                    let r = n[e];
                    if (t.dynamic) {
                        let e = s.length;
                        t.encode(s, r);
                        let n = i.writeUpdatableValue();
                        a.push(t => {
                            n(t + e)
                        })
                    } else t.encode(i, r)
                }), a.forEach(t => {
                    t(i.length)
                }), t.appendWriter(i) + t.appendWriter(s)
            }

            function ee(t, e) {
                let r = [],
                    n = [],
                    i = t.subReader(0);
                return e.forEach(e => {
                    let s = null;
                    if (e.dynamic) {
                        let r = t.readIndex(),
                            n = i.subReader(r);
                        try {
                            s = e.decode(n)
                        } catch (t) {
                            if (E(t, "BUFFER_OVERRUN")) throw t;
                            (s = t).baseType = e.name, s.name = e.localName, s.type = e.type
                        }
                    } else try {
                        s = e.decode(t)
                    } catch (t) {
                        if (E(t, "BUFFER_OVERRUN")) throw t;
                        (s = t).baseType = e.name, s.name = e.localName, s.type = e.type
                    }
                    if (void 0 == s) throw Error("investigate");
                    r.push(s), n.push(e.localName || null)
                }), ta.fromItems(r, n)
            }
            class er extends tl {
                coder;
                length;
                constructor(t, e, r) {
                    super("array", t.type + "[" + (e >= 0 ? e : "") + "]", r, -1 === e || t.dynamic), A(this, {
                        coder: t,
                        length: e
                    })
                }
                defaultValue() {
                    let t = this.coder.defaultValue(),
                        e = [];
                    for (let r = 0; r < this.length; r++) e.push(t);
                    return e
                }
                encode(t, e) {
                    let r = t6.dereference(e, "array");
                    Array.isArray(r) || this._throwError("expected array value", r);
                    let n = this.length; - 1 === n && (n = r.length, t.writeValue(r.length)), T(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
                    let i = [];
                    for (let t = 0; t < r.length; t++) i.push(this.coder);
                    return et(t, i, r)
                }
                decode(t) {
                    let e = this.length; - 1 === e && k(32 * (e = t.readIndex()) <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
                        buffer: t.bytes,
                        offset: 32 * e,
                        length: t.dataLength
                    });
                    let r = [];
                    for (let t = 0; t < e; t++) r.push(new t7(this.coder));
                    return ee(t, r)
                }
            }
            class en extends tl {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, e) {
                    let r = t6.dereference(e, "bool");
                    return t.writeValue(r ? 1 : 0)
                }
                decode(t) {
                    return !!t.readValue()
                }
            }
            class ei extends tl {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, e) {
                    return e = O(e), t.writeValue(e.length) + t.writeBytes(e)
                }
                decode(t) {
                    return t.readBytes(t.readIndex(), !0)
                }
            }
            class es extends ei {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return M(super.decode(t))
                }
            }
            class ea extends tl {
                size;
                constructor(t, e) {
                    let r = "bytes" + String(t);
                    super(r, r, e, !1), A(this, {
                        size: t
                    }, {
                        size: "number"
                    })
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, e) {
                    let r = O(t6.dereference(e, this.type));
                    return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
                }
                decode(t) {
                    return M(t.readBytes(this.size))
                }
            }
            let eo = new Uint8Array([]);
            class el extends tl {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes(eo)
                }
                decode(t) {
                    return t.readBytes(0), null
                }
            }
            let eu = BigInt(0),
                eh = BigInt(1),
                ec = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            class ed extends tl {
                size;
                signed;
                constructor(t, e, r) {
                    let n = (e ? "int" : "uint") + 8 * t;
                    super(n, n, r, !1), A(this, {
                        size: t,
                        signed: e
                    }, {
                        size: "number",
                        signed: "boolean"
                    })
                }
                defaultValue() {
                    return 0
                }
                encode(t, e) {
                    let r = K(t6.dereference(e, this.type)),
                        n = J(ec, 256);
                    if (this.signed) {
                        let t = J(n, 8 * this.size - 1);
                        (r > t || r < -(t + eh)) && this._throwError("value out-of-bounds", e), r = z(r, 256)
                    } else(r < eu || r > J(n, 8 * this.size)) && this._throwError("value out-of-bounds", e);
                    return t.writeValue(r)
                }
                decode(t) {
                    let e = J(t.readValue(), 8 * this.size);
                    return this.signed && (e = function(t, e) {
                        let r = _(t, "value"),
                            n = BigInt(Z(e, "width"));
                        return (k(r >> n === H, "overflow", "NUMERIC_FAULT", {
                            operation: "fromTwos",
                            fault: "overflow",
                            value: t
                        }), r >> n - Q) ? -((~r & (Q << n) - Q) + Q) : r
                    }(e, 8 * this.size)), e
                }
            }

            function ef(t, e, r, n, i) {
                if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
                    let t = 0;
                    for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
                    return t
                }
                return "OVERRUN" === t ? r.length - e - 1 : 0
            }
            let ep = Object.freeze({
                error: function(t, e, r, n, i) {
                    C(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: ef,
                replace: function(t, e, r, n, i) {
                    return "OVERLONG" === t ? (C("number" == typeof i, "invalid bad code point for replacement", "badCodepoint", i), n.push(i), 0) : (n.push(65533), ef(t, e, r, n, i))
                }
            });

            function eg(t, e) {
                C("string" == typeof t, "invalid string value", "str", t), null != e && (k(S.indexOf(e) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
                    operation: "String.prototype.normalize",
                    info: {
                        form: e
                    }
                }), t = t.normalize(e));
                let r = [];
                for (let e = 0; e < t.length; e++) {
                    let n = t.charCodeAt(e);
                    if (n < 128) r.push(n);
                    else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
                    else if ((64512 & n) == 55296) {
                        e++;
                        let i = t.charCodeAt(e);
                        C(e < t.length && (64512 & i) == 56320, "invalid surrogate pair", "str", t);
                        let s = 65536 + ((1023 & n) << 10) + (1023 & i);
                        r.push(s >> 18 | 240), r.push(s >> 12 & 63 | 128), r.push(s >> 6 & 63 | 128), r.push(63 & s | 128)
                    } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
                }
                return new Uint8Array(r)
            }

            function em(t, e) {
                return (function(t, e) {
                    null == e && (e = ep.error);
                    let r = N(t, "bytes"),
                        n = [],
                        i = 0;
                    for (; i < r.length;) {
                        let t = r[i++];
                        if (t >> 7 == 0) {
                            n.push(t);
                            continue
                        }
                        let s = null,
                            a = null;
                        if ((224 & t) == 192) s = 1, a = 127;
                        else if ((240 & t) == 224) s = 2, a = 2047;
                        else if ((248 & t) == 240) s = 3, a = 65535;
                        else {
                            (192 & t) == 128 ? i += e("UNEXPECTED_CONTINUE", i - 1, r, n) : i += e("BAD_PREFIX", i - 1, r, n);
                            continue
                        }
                        if (i - 1 + s >= r.length) {
                            i += e("OVERRUN", i - 1, r, n);
                            continue
                        }
                        let o = t & (1 << 8 - s - 1) - 1;
                        for (let t = 0; t < s; t++) {
                            let t = r[i];
                            if ((192 & t) != 128) {
                                i += e("MISSING_CONTINUE", i, r, n), o = null;
                                break
                            }
                            o = o << 6 | 63 & t, i++
                        }
                        if (null !== o) {
                            if (o > 1114111) {
                                i += e("OUT_OF_RANGE", i - 1 - s, r, n, o);
                                continue
                            }
                            if (o >= 55296 && o <= 57343) {
                                i += e("UTF16_SURROGATE", i - 1 - s, r, n, o);
                                continue
                            }
                            if (o <= a) {
                                i += e("OVERLONG", i - 1 - s, r, n, o);
                                continue
                            }
                            n.push(o)
                        }
                    }
                    return n
                })(t, e).map(t => t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)).join("")
            }
            class ey extends ei {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, e) {
                    return super.encode(t, eg(t6.dereference(e, "string")))
                }
                decode(t) {
                    return em(super.decode(t))
                }
            }
            class ev extends tl {
                coders;
                constructor(t, e) {
                    let r = !1,
                        n = [];
                    t.forEach(t => {
                        t.dynamic && (r = !0), n.push(t.type)
                    }), super("tuple", "tuple(" + n.join(",") + ")", e, r), A(this, {
                        coders: Object.freeze(t.slice())
                    })
                }
                defaultValue() {
                    let t = [];
                    this.coders.forEach(e => {
                        t.push(e.defaultValue())
                    });
                    let e = this.coders.reduce((t, e) => {
                        let r = e.localName;
                        return r && (t[r] || (t[r] = 0), t[r]++), t
                    }, {});
                    return this.coders.forEach((r, n) => {
                        let i = r.localName;
                        i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                    }), Object.freeze(t)
                }
                encode(t, e) {
                    let r = t6.dereference(e, "tuple");
                    return et(t, this.coders, r)
                }
                decode(t) {
                    return ee(t, this.coders)
                }
            }

            function ew(t) {
                return tZ(eg(t))
            }

            function eA(t) {
                let e = new Set;
                return t.forEach(t => e.add(t)), Object.freeze(e)
            }
            let eb = eA("external public payable override".split(" ")),
                eE = "constant external internal payable private public pure view override",
                ex = eA(eE.split(" ")),
                eP = "constructor error event fallback function receive struct",
                ek = eA(eP.split(" ")),
                eC = "calldata memory storage payable indexed",
                eT = eA(eC.split(" ")),
                eS = eA([eP, eC, "tuple returns", eE].join(" ").split(" ")),
                eR = {
                    "(": "OPEN_PAREN",
                    ")": "CLOSE_PAREN",
                    "[": "OPEN_BRACKET",
                    "]": "CLOSE_BRACKET",
                    ",": "COMMA",
                    "@": "AT"
                },
                eB = RegExp("^(\\s*)"),
                eN = RegExp("^([0-9]+)"),
                eO = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
                eI = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
                eD = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
            class eF {#
                i;#
                c;
                get offset() {
                    return this.#i
                }
                get length() {
                    return this.#c.length - this.#i
                }
                constructor(t) {
                    this.#i = 0, this.#c = t.slice()
                }
                clone() {
                    return new eF(this.#c)
                }
                reset() {
                    this.#i = 0
                }#
                d(t = 0, e = 0) {
                    return new eF(this.#c.slice(t, e).map(e => Object.freeze(Object.assign({}, e, {
                        match: e.match - t,
                        linkBack: e.linkBack - t,
                        linkNext: e.linkNext - t
                    }))))
                }
                popKeyword(t) {
                    let e = this.peek();
                    if ("KEYWORD" !== e.type || !t.has(e.text)) throw Error(`expected keyword ${e.text}`);
                    return this.pop().text
                }
                popType(t) {
                    if (this.peek().type !== t) {
                        let e = this.peek();
                        throw Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`)
                    }
                    return this.pop().text
                }
                popParen() {
                    let t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw Error("bad start");
                    let e = this.#d(this.#i + 1, t.match + 1);
                    return this.#i = t.match + 1, e
                }
                popParams() {
                    let t = this.peek();
                    if ("OPEN_PAREN" !== t.type) throw Error("bad start");
                    let e = [];
                    for (; this.#i < t.match - 1;) {
                        let t = this.peek().linkNext;
                        e.push(this.#d(this.#i + 1, t)), this.#i = t
                    }
                    return this.#i = t.match + 1, e
                }
                peek() {
                    if (this.#i >= this.#c.length) throw Error("out-of-bounds");
                    return this.#c[this.#i]
                }
                peekKeyword(t) {
                    let e = this.peekType("KEYWORD");
                    return null != e && t.has(e) ? e : null
                }
                peekType(t) {
                    if (0 === this.length) return null;
                    let e = this.peek();
                    return e.type === t ? e.text : null
                }
                pop() {
                    let t = this.peek();
                    return this.#i++, t
                }
                toString() {
                    let t = [];
                    for (let e = this.#i; e < this.#c.length; e++) {
                        let r = this.#c[e];
                        t.push(`${r.type}:${r.text}`)
                    }
                    return `<TokenString ${t.join(" ")}>`
                }
            }

            function eM(t) {
                let e = [],
                    r = e => {
                        let r = s < t.length ? JSON.stringify(t[s]) : "$EOI";
                        throw Error(`invalid token ${r} at ${s}: ${e}`)
                    },
                    n = [],
                    i = [],
                    s = 0;
                for (; s < t.length;) {
                    let a = t.substring(s),
                        o = a.match(eB);
                    o && (s += o[1].length, a = t.substring(s));
                    let l = {
                        depth: n.length,
                        linkBack: -1,
                        linkNext: -1,
                        match: -1,
                        type: "",
                        text: "",
                        offset: s,
                        value: -1
                    };
                    e.push(l);
                    let u = eR[a[0]] || "";
                    if (u) {
                        if (l.type = u, l.text = a[0], s++, "OPEN_PAREN" === u) n.push(e.length - 1), i.push(e.length - 1);
                        else if ("CLOSE_PAREN" == u) 0 === n.length && r("no matching open bracket"), l.match = n.pop(), e[l.match].match = e.length - 1, l.depth--, l.linkBack = i.pop(), e[l.linkBack].linkNext = e.length - 1;
                        else if ("COMMA" === u) l.linkBack = i.pop(), e[l.linkBack].linkNext = e.length - 1, i.push(e.length - 1);
                        else if ("OPEN_BRACKET" === u) l.type = "BRACKET";
                        else if ("CLOSE_BRACKET" === u) {
                            let t = e.pop().text;
                            if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                                let r = e.pop().text;
                                t = r + t, e[e.length - 1].value = Z(r)
                            }
                            if (0 === e.length || "BRACKET" !== e[e.length - 1].type) throw Error("missing opening bracket");
                            e[e.length - 1].text += t
                        }
                        continue
                    }
                    if (o = a.match(eO)) {
                        if (l.text = o[1], s += l.text.length, eS.has(l.text)) {
                            l.type = "KEYWORD";
                            continue
                        }
                        if (l.text.match(eD)) {
                            l.type = "TYPE";
                            continue
                        }
                        l.type = "ID";
                        continue
                    }
                    if (o = a.match(eN)) {
                        l.text = o[1], l.type = "NUMBER", s += l.text.length;
                        continue
                    }
                    throw Error(`unexpected token ${JSON.stringify(a[0])} at position ${s}`)
                }
                return new eF(e.map(t => Object.freeze(t)))
            }

            function eL(t, e) {
                let r = [];
                for (let n in e.keys()) t.has(n) && r.push(n);
                if (r.length > 1) throw Error(`conflicting types: ${r.join(", ")}`)
            }

            function eU(t, e) {
                if (e.peekKeyword(ek)) {
                    let r = e.pop().text;
                    if (r !== t) throw Error(`expected ${t}, got ${r}`)
                }
                return e.popType("ID")
            }

            function eV(t, e) {
                let r = new Set;
                for (;;) {
                    let n = t.peekType("KEYWORD");
                    if (null == n || e && !e.has(n)) break;
                    if (t.pop(), r.has(n)) throw Error(`duplicate keywords: ${JSON.stringify(n)}`);
                    r.add(n)
                }
                return Object.freeze(r)
            }

            function ej(t) {
                let e = eV(t, ex);
                return (eL(e, eA("constant payable nonpayable".split(" "))), eL(e, eA("pure view payable nonpayable".split(" "))), e.has("view")) ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
            }

            function eG(t, e) {
                return t.popParams().map(t => e1.from(t, e))
            }

            function eH(t) {
                if (t.peekType("AT")) {
                    if (t.pop(), t.peekType("NUMBER")) return K(t.pop().text);
                    throw Error("invalid gas")
                }
                return null
            }

            function eQ(t) {
                if (t.length) throw Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)
            }
            let ez = new RegExp(/^(.*)\[([0-9]*)\]$/);

            function eJ(t) {
                let e = t.match(eD);
                if (C(e, "invalid type", "type", t), "uint" === t) return "uint256";
                if ("int" === t) return "int256";
                if (e[2]) {
                    let r = parseInt(e[2]);
                    C(0 !== r && r <= 32, "invalid bytes length", "type", t)
                } else if (e[3]) {
                    let r = parseInt(e[3]);
                    C(0 !== r && r <= 256 && r % 8 == 0, "invalid numeric width", "type", t)
                }
                return t
            }
            let eK = {},
                e_ = Symbol.for("_ethers_internal"),
                eq = "_ParamTypeInternal",
                eW = "_ErrorInternal",
                eZ = "_EventInternal",
                eY = "_ConstructorInternal",
                eX = "_FallbackInternal",
                e$ = "_FunctionInternal",
                e0 = "_StructInternal";
            class e1 {
                name;
                type;
                baseType;
                indexed;
                components;
                arrayLength;
                arrayChildren;
                constructor(t, e, r, n, i, s, a, o) {
                    if (R(t, eK, "ParamType"), Object.defineProperty(this, e_, {
                            value: eq
                        }), s && (s = Object.freeze(s.slice())), "array" === n) {
                        if (null == a || null == o) throw Error("")
                    } else if (null != a || null != o) throw Error("");
                    if ("tuple" === n) {
                        if (null == s) throw Error("")
                    } else if (null != s) throw Error("");
                    A(this, {
                        name: e,
                        type: r,
                        baseType: n,
                        indexed: i,
                        components: s,
                        arrayLength: a,
                        arrayChildren: o
                    })
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) {
                        let e = this.name || "";
                        if (this.isArray()) {
                            let t = JSON.parse(this.arrayChildren.format("json"));
                            return t.name = e, t.type += `[${this.arrayLength<0?"":String(this.arrayLength)}]`, JSON.stringify(t)
                        }
                        let r = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: e
                        };
                        return "boolean" == typeof this.indexed && (r.indexed = this.indexed), this.isTuple() && (r.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(r)
                    }
                    let e = "";
                    return this.isArray() ? e += this.arrayChildren.format(t) + `[${this.arrayLength<0?"":String(this.arrayLength)}]` : this.isTuple() ? e += "(" + this.components.map(e => e.format(t)).join("full" === t ? ", " : ",") + ")" : e += this.type, "sighash" !== t && (!0 === this.indexed && (e += " indexed"), "full" === t && this.name && (e += " " + this.name)), e
                }
                isArray() {
                    return "array" === this.baseType
                }
                isTuple() {
                    return "tuple" === this.baseType
                }
                isIndexable() {
                    return null != this.indexed
                }
                walk(t, e) {
                    if (this.isArray()) {
                        if (!Array.isArray(t)) throw Error("invalid array value");
                        if (-1 !== this.arrayLength && t.length !== this.arrayLength) throw Error("array is wrong length");
                        let r = this;
                        return t.map(t => r.arrayChildren.walk(t, e))
                    }
                    if (this.isTuple()) {
                        if (!Array.isArray(t)) throw Error("invalid tuple value");
                        if (t.length !== this.components.length) throw Error("array is wrong length");
                        let r = this;
                        return t.map((t, n) => r.components[n].walk(t, e))
                    }
                    return e(this.type, t)
                }#
                f(t, e, r, n) {
                    if (this.isArray()) {
                        if (!Array.isArray(e)) throw Error("invalid array value");
                        if (-1 !== this.arrayLength && e.length !== this.arrayLength) throw Error("array is wrong length");
                        let i = this.arrayChildren,
                            s = e.slice();
                        s.forEach((e, n) => {
                            i.#f(t, e, r, t => {
                                s[n] = t
                            })
                        }), n(s);
                        return
                    }
                    if (this.isTuple()) {
                        let i;
                        let s = this.components;
                        if (Array.isArray(e)) i = e.slice();
                        else {
                            if (null == e || "object" != typeof e) throw Error("invalid tuple value");
                            i = s.map(t => {
                                if (!t.name) throw Error("cannot use object value with unnamed components");
                                if (!(t.name in e)) throw Error(`missing value for component ${t.name}`);
                                return e[t.name]
                            })
                        }
                        if (i.length !== this.components.length) throw Error("array is wrong length");
                        i.forEach((e, n) => {
                            s[n].#f(t, e, r, t => {
                                i[n] = t
                            })
                        }), n(i);
                        return
                    }
                    let i = r(this.type, e);
                    i.then ? t.push(async function() {
                        n(await i)
                    }()) : n(i)
                }
                async walkAsync(t, e) {
                    let r = [],
                        n = [t];
                    return this.#f(r, t, e, t => {
                        n[0] = t
                    }), r.length && await Promise.all(r), n[0]
                }
                static from(t, e) {
                    if (e1.isParamType(t)) return t;
                    if ("string" == typeof t) try {
                        return e1.from(eM(t), e)
                    } catch (e) {
                        C(!1, "invalid param type", "obj", t)
                    } else if (t instanceof eF) {
                        let r = "",
                            n = "",
                            i = null;
                        eV(t, eA(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (n = "tuple", i = t.popParams().map(t => e1.from(t)), r = `tuple(${i.map(t=>t.format()).join(",")})`) : n = r = eJ(t.popType("TYPE"));
                        let s = null,
                            a = null;
                        for (; t.length && t.peekType("BRACKET");) {
                            let e = t.pop();
                            s = new e1(eK, "", r, n, null, i, a, s), a = e.value, r += e.text, n = "array", i = null
                        }
                        let o = null;
                        if (eV(t, eT).has("indexed")) {
                            if (!e) throw Error("");
                            o = !0
                        }
                        let l = t.peekType("ID") ? t.pop().text : "";
                        if (t.length) throw Error("leftover tokens");
                        return new e1(eK, l, r, n, o, i, a, s)
                    }
                    let r = t.name;
                    C(!r || "string" == typeof r && r.match(eI), "invalid name", "obj.name", r);
                    let n = t.indexed;
                    null != n && (C(e, "parameter cannot be indexed", "obj.indexed", t.indexed), n = !!n);
                    let i = t.type,
                        s = i.match(ez);
                    if (s) {
                        let e = parseInt(s[2] || "-1"),
                            a = e1.from({
                                type: s[1],
                                components: t.components
                            });
                        return new e1(eK, r || "", i, "array", n, null, e, a)
                    }
                    if ("tuple" === i || i.startsWith("tuple(") || i.startsWith("(")) {
                        let e = null != t.components ? t.components.map(t => e1.from(t)) : null;
                        return new e1(eK, r || "", i, "tuple", n, e, null, null)
                    }
                    return new e1(eK, r || "", i = eJ(t.type), i, n, null, null, null)
                }
                static isParamType(t) {
                    return t && t[e_] === eq
                }
            }
            class e2 {
                type;
                inputs;
                constructor(t, e, r) {
                    R(t, eK, "Fragment"), A(this, {
                        type: e,
                        inputs: r = Object.freeze(r.slice())
                    })
                }
                static from(t) {
                    if ("string" == typeof t) {
                        try {
                            e2.from(JSON.parse(t))
                        } catch (t) {}
                        return e2.from(eM(t))
                    }
                    if (t instanceof eF) switch (t.peekKeyword(ek)) {
                        case "constructor":
                            return e6.from(t);
                        case "error":
                            return e8.from(t);
                        case "event":
                            return e5.from(t);
                        case "fallback":
                        case "receive":
                            return e9.from(t);
                        case "function":
                            return e7.from(t);
                        case "struct":
                            return rt.from(t)
                    } else if ("object" == typeof t) {
                        switch (t.type) {
                            case "constructor":
                                return e6.from(t);
                            case "error":
                                return e8.from(t);
                            case "event":
                                return e5.from(t);
                            case "fallback":
                            case "receive":
                                return e9.from(t);
                            case "function":
                                return e7.from(t);
                            case "struct":
                                return rt.from(t)
                        }
                        k(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
                            operation: "Fragment.from"
                        })
                    }
                    C(!1, "unsupported frgament object", "obj", t)
                }
                static isConstructor(t) {
                    return e6.isFragment(t)
                }
                static isError(t) {
                    return e8.isFragment(t)
                }
                static isEvent(t) {
                    return e5.isFragment(t)
                }
                static isFunction(t) {
                    return e7.isFragment(t)
                }
                static isStruct(t) {
                    return rt.isFragment(t)
                }
            }
            class e3 extends e2 {
                name;
                constructor(t, e, r, n) {
                    super(t, e, n), C("string" == typeof r && r.match(eI), "invalid identifier", "name", r), n = Object.freeze(n.slice()), A(this, {
                        name: r
                    })
                }
            }

            function e4(t, e) {
                return "(" + e.map(e => e.format(t)).join("full" === t ? ", " : ",") + ")"
            }
            class e8 extends e3 {
                constructor(t, e, r) {
                    super(t, "error", e, r), Object.defineProperty(this, e_, {
                        value: eW
                    })
                }
                get selector() {
                    return ew(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("error"), e.push(this.name + e4(t, this.inputs)), e.join(" ")
                }
                static from(t) {
                    if (e8.isFragment(t)) return t;
                    if ("string" == typeof t) return e8.from(eM(t));
                    if (t instanceof eF) {
                        let e = eU("error", t),
                            r = eG(t);
                        return eQ(t), new e8(eK, e, r)
                    }
                    return new e8(eK, t.name, t.inputs ? t.inputs.map(e1.from) : [])
                }
                static isFragment(t) {
                    return t && t[e_] === eW
                }
            }
            class e5 extends e3 {
                anonymous;
                constructor(t, e, r, n) {
                    super(t, "event", e, r), Object.defineProperty(this, e_, {
                        value: eZ
                    }), A(this, {
                        anonymous: n
                    })
                }
                get topicHash() {
                    return ew(this.format("sighash"))
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("event"), e.push(this.name + e4(t, this.inputs)), "sighash" !== t && this.anonymous && e.push("anonymous"), e.join(" ")
                }
                static getTopicHash(t, e) {
                    return new e5(eK, t, e = (e || []).map(t => e1.from(t)), !1).topicHash
                }
                static from(t) {
                    if (e5.isFragment(t)) return t;
                    if ("string" == typeof t) try {
                        return e5.from(eM(t))
                    } catch (e) {
                        C(!1, "invalid event fragment", "obj", t)
                    } else if (t instanceof eF) {
                        let e = eU("event", t),
                            r = eG(t, !0),
                            n = !!eV(t, eA(["anonymous"])).has("anonymous");
                        return eQ(t), new e5(eK, e, r, n)
                    }
                    return new e5(eK, t.name, t.inputs ? t.inputs.map(t => e1.from(t, !0)) : [], !!t.anonymous)
                }
                static isFragment(t) {
                    return t && t[e_] === eZ
                }
            }
            class e6 extends e2 {
                payable;
                gas;
                constructor(t, e, r, n, i) {
                    super(t, e, r), Object.defineProperty(this, e_, {
                        value: eY
                    }), A(this, {
                        payable: n,
                        gas: i
                    })
                }
                format(t) {
                    if (k(null != t && "sighash" !== t, "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
                            operation: "format(sighash)"
                        }), "json" === t) return JSON.stringify({
                        type: "constructor",
                        stateMutability: this.payable ? "payable" : "undefined",
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [`constructor${e4(t,this.inputs)}`];
                    return this.payable && e.push("payable"), null != this.gas && e.push(`@${this.gas.toString()}`), e.join(" ")
                }
                static from(t) {
                    if (e6.isFragment(t)) return t;
                    if ("string" == typeof t) try {
                        return e6.from(eM(t))
                    } catch (e) {
                        C(!1, "invalid constuctor fragment", "obj", t)
                    } else if (t instanceof eF) {
                        eV(t, eA(["constructor"]));
                        let e = eG(t),
                            r = !!eV(t, eb).has("payable"),
                            n = eH(t);
                        return eQ(t), new e6(eK, "constructor", e, r, n)
                    }
                    return new e6(eK, "constructor", t.inputs ? t.inputs.map(e1.from) : [], !!t.payable, null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[e_] === eY
                }
            }
            class e9 extends e2 {
                payable;
                constructor(t, e, r) {
                    super(t, "fallback", e), Object.defineProperty(this, e_, {
                        value: eX
                    }), A(this, {
                        payable: r
                    })
                }
                format(t) {
                    let e = 0 === this.inputs.length ? "receive" : "fallback";
                    return "json" === t ? JSON.stringify({
                        type: e,
                        stateMutability: this.payable ? "payable" : "nonpayable"
                    }) : `${e}()${this.payable?" payable":""}`
                }
                static from(t) {
                    if (e9.isFragment(t)) return t;
                    if ("string" == typeof t) try {
                        return e9.from(eM(t))
                    } catch (e) {
                        C(!1, "invalid fallback fragment", "obj", t)
                    } else if (t instanceof eF) {
                        let e = t.toString();
                        if (C(t.peekKeyword(eA(["fallback", "receive"])), "type must be fallback or receive", "obj", e), "receive" === t.popKeyword(eA(["fallback", "receive"]))) {
                            let e = eG(t);
                            return C(0 === e.length, "receive cannot have arguments", "obj.inputs", e), eV(t, eA(["payable"])), eQ(t), new e9(eK, [], !0)
                        }
                        let r = eG(t);
                        r.length ? C(1 === r.length && "bytes" === r[0].type, "invalid fallback inputs", "obj.inputs", r.map(t => t.format("minimal")).join(", ")) : r = [e1.from("bytes")];
                        let n = ej(t);
                        if (C("nonpayable" === n || "payable" === n, "fallback cannot be constants", "obj.stateMutability", n), eV(t, eA(["returns"])).has("returns")) {
                            let e = eG(t);
                            C(1 === e.length && "bytes" === e[0].type, "invalid fallback outputs", "obj.outputs", e.map(t => t.format("minimal")).join(", "))
                        }
                        return eQ(t), new e9(eK, r, "payable" === n)
                    }
                    return "receive" === t.type ? new e9(eK, [], !0) : "fallback" === t.type ? new e9(eK, [e1.from("bytes")], "payable" === t.stateMutability) : void C(!1, "invalid fallback description", "obj", t)
                }
                static isFragment(t) {
                    return t && t[e_] === eX
                }
            }
            class e7 extends e3 {
                constant;
                outputs;
                stateMutability;
                payable;
                gas;
                constructor(t, e, r, n, i, s) {
                    super(t, "function", e, n), Object.defineProperty(this, e_, {
                        value: e$
                    }), A(this, {
                        constant: "view" === r || "pure" === r,
                        gas: s,
                        outputs: i = Object.freeze(i.slice()),
                        payable: "payable" === r,
                        stateMutability: r
                    })
                }
                get selector() {
                    return ew(this.format("sighash")).substring(0, 10)
                }
                format(t) {
                    if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: null != this.gas ? this.gas : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t))),
                        outputs: this.outputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = [];
                    return "sighash" !== t && e.push("function"), e.push(this.name + e4(t, this.inputs)), "sighash" !== t && ("nonpayable" !== this.stateMutability && e.push(this.stateMutability), this.outputs && this.outputs.length && (e.push("returns"), e.push(e4(t, this.outputs))), null != this.gas && e.push(`@${this.gas.toString()}`)), e.join(" ")
                }
                static getSelector(t, e) {
                    return new e7(eK, t, "view", e = (e || []).map(t => e1.from(t)), [], null).selector
                }
                static from(t) {
                    if (e7.isFragment(t)) return t;
                    if ("string" == typeof t) try {
                        return e7.from(eM(t))
                    } catch (e) {
                        C(!1, "invalid function fragment", "obj", t)
                    } else if (t instanceof eF) {
                        let e = eU("function", t),
                            r = eG(t),
                            n = ej(t),
                            i = [];
                        eV(t, eA(["returns"])).has("returns") && (i = eG(t));
                        let s = eH(t);
                        return eQ(t), new e7(eK, e, n, r, i, s)
                    }
                    let e = t.stateMutability;
                    return null != e || (e = "payable", "boolean" == typeof t.constant ? (e = "view", t.constant || (e = "payable", "boolean" != typeof t.payable || t.payable || (e = "nonpayable"))) : "boolean" != typeof t.payable || t.payable || (e = "nonpayable")), new e7(eK, t.name, e, t.inputs ? t.inputs.map(e1.from) : [], t.outputs ? t.outputs.map(e1.from) : [], null != t.gas ? t.gas : null)
                }
                static isFragment(t) {
                    return t && t[e_] === e$
                }
            }
            class rt extends e3 {
                constructor(t, e, r) {
                    super(t, "struct", e, r), Object.defineProperty(this, e_, {
                        value: e0
                    })
                }
                format() {
                    throw Error("@TODO")
                }
                static from(t) {
                    if ("string" == typeof t) try {
                        return rt.from(eM(t))
                    } catch (e) {
                        C(!1, "invalid struct fragment", "obj", t)
                    } else if (t instanceof eF) {
                        let e = eU("struct", t),
                            r = eG(t);
                        return eQ(t), new rt(eK, e, r)
                    }
                    return new rt(eK, t.name, t.inputs ? t.inputs.map(e1.from) : [])
                }
                static isFragment(t) {
                    return t && t[e_] === e0
                }
            }
            let re = new Map;
            re.set(0, "GENERIC_PANIC"), re.set(1, "ASSERT_FALSE"), re.set(17, "OVERFLOW"), re.set(18, "DIVIDE_BY_ZERO"), re.set(33, "ENUM_RANGE_ERROR"), re.set(34, "BAD_STORAGE_DATA"), re.set(49, "STACK_UNDERFLOW"), re.set(50, "ARRAY_RANGE_ERROR"), re.set(65, "OUT_OF_MEMORY"), re.set(81, "UNINITIALIZED_FUNCTION_CALL");
            let rr = new RegExp(/^bytes([0-9]*)$/),
                rn = new RegExp(/^(u?int)([0-9]*)$/),
                ri = null,
                rs = 1024;
            class ra {#
                p(t) {
                    if (t.isArray()) return new er(this.#p(t.arrayChildren), t.arrayLength, t.name);
                    if (t.isTuple()) return new ev(t.components.map(t => this.#p(t)), t.name);
                    switch (t.baseType) {
                        case "address":
                            return new t9(t.name);
                        case "bool":
                            return new en(t.name);
                        case "string":
                            return new ey(t.name);
                        case "bytes":
                            return new es(t.name);
                        case "":
                            return new el(t.name)
                    }
                    let e = t.type.match(rn);
                    if (e) {
                        let r = parseInt(e[2] || "256");
                        return C(0 !== r && r <= 256 && r % 8 == 0, "invalid " + e[1] + " bit length", "param", t), new ed(r / 8, "int" === e[1], t.name)
                    }
                    if (e = t.type.match(rr)) {
                        let r = parseInt(e[1]);
                        return C(0 !== r && r <= 32, "invalid bytes length", "param", t), new ea(r, t.name)
                    }
                    C(!1, "invalid type", "type", t.type)
                }
                getDefaultValue(t) {
                    return new ev(t.map(t => this.#p(e1.from(t))), "_").defaultValue()
                }
                encode(t, e) {
                    T(e.length, t.length, "types/values length mismatch");
                    let r = new ev(t.map(t => this.#p(e1.from(t))), "_"),
                        n = new tu;
                    return r.encode(n, e), n.data
                }
                decode(t, e, r) {
                    return new ev(t.map(t => this.#p(e1.from(t))), "_").decode(new th(e, r, rs))
                }
                static _setDefaultMaxInflation(t) {
                    C("number" == typeof t && Number.isInteger(t), "invalid defaultMaxInflation factor", "value", t), rs = t
                }
                static defaultAbiCoder() {
                    return null == ri && (ri = new ra), ri
                }
                static getBuiltinCallException(t, e, r) {
                    return function(t, e, r, n) {
                        let i = "missing revert data",
                            s = null,
                            a = null;
                        if (r) {
                            i = "execution reverted";
                            let t = N(r);
                            if (r = M(r), 0 === t.length) i += " (no data present; likely require(false) occurred", s = "require(false)";
                            else if (t.length % 32 != 4) i += " (could not decode reason; invalid data length)";
                            else if ("0x08c379a0" === M(t.slice(0, 4))) try {
                                s = n.decode(["string"], t.slice(4))[0], a = {
                                    signature: "Error(string)",
                                    name: "Error",
                                    args: [s]
                                }, i += `: ${JSON.stringify(s)}`
                            } catch (t) {
                                i += " (could not decode reason; invalid string data)"
                            } else if ("0x4e487b71" === M(t.slice(0, 4))) try {
                                let e = Number(n.decode(["uint256"], t.slice(4))[0]);
                                a = {
                                    signature: "Panic(uint256)",
                                    name: "Panic",
                                    args: [e]
                                }, s = `Panic due to ${re.get(e)||"UNKNOWN"}(${e})`, i += `: ${s}`
                            } catch (t) {
                                i += " (could not decode panic code)"
                            } else i += " (unknown custom error)"
                        }
                        let o = {
                            to: e.to ? t2(e.to) : null,
                            data: e.data || "0x"
                        };
                        return e.from && (o.from = t2(e.from)), P(i, "CALL_EXCEPTION", {
                            action: t,
                            data: r,
                            reason: s,
                            transaction: o,
                            invocation: null,
                            revert: a
                        })
                    }(t, e, r, ra.defaultAbiCoder())
                }
            }

            function ro(t) {
                return t && "function" == typeof t.getAddress
            }
            async function rl(t, e) {
                let r = await e;
                return (null == r || "0x0000000000000000000000000000000000000000" === r) && (k("string" != typeof t, "unconfigured name", "UNCONFIGURED_NAME", {
                    value: t
                }), C(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), t2(r)
            }

            function ru(t, e) {
                return "string" == typeof t ? t.match(/^0x[0-9a-f]{40}$/i) ? t2(t) : (k(null != e, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
                    operation: "resolveName"
                }), rl(t, e.resolveName(t))) : ro(t) ? rl(t, t.getAddress()) : t && "function" == typeof t.then ? rl(t, t) : void C(!1, "unsupported addressable value", "target", t)
            }
            let rh = new Uint8Array(32);
            rh.fill(0);
            let rc = BigInt(-1),
                rd = BigInt(0),
                rf = BigInt(1),
                rp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                rg = Y(rf, 32),
                rm = Y(rd, 32),
                ry = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                rv = ["name", "version", "chainId", "verifyingContract", "salt"];

            function rw(t) {
                return function(e) {
                    return C("string" == typeof e, `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            let rA = {
                name: rw("name"),
                version: rw("version"),
                chainId: function(t) {
                    let e = K(t, "domain.chainId");
                    return (C(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e)) ? Number(e) : $(e)
                },
                verifyingContract: function(t) {
                    try {
                        return t2(t).toLowerCase()
                    } catch (t) {}
                    C(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    let e = N(t, "domain.salt");
                    return C(32 === e.length, 'invalid domain value "salt"', "domain.salt", t), M(e)
                }
            };

            function rb(t) {
                {
                    let e = t.match(/^(u?)int(\d+)$/);
                    if (e) {
                        let r = "" === e[1],
                            n = parseInt(e[2]);
                        C(n % 8 == 0 && 0 !== n && n <= 256 && e[2] === String(n), "invalid numeric width", "type", t);
                        let i = J(rp, r ? n - 1 : n),
                            s = r ? (i + rf) * rc : rd;
                        return function(e) {
                            let n = K(e, "value");
                            return C(n >= s && n <= i, `value out-of-bounds for ${t}`, "value", n), Y(r ? z(n, 256) : n, 32)
                        }
                    }
                } {
                    let e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        let r = parseInt(e[1]);
                        return C(0 !== r && r <= 32 && e[1] === String(r), "invalid bytes width", "type", t),
                            function(e) {
                                return C(N(e).length === r, `invalid length for ${t}`, "value", e),
                                    function(t) {
                                        let e = N(t),
                                            r = e.length % 32;
                                        return r ? L([e, rh.slice(r)]) : M(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return G(t2(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? rg : rm
                        };
                    case "bytes":
                        return function(t) {
                            return tZ(t)
                        };
                    case "string":
                        return function(t) {
                            return ew(t)
                        }
                }
                return null
            }

            function rE(t, e) {
                return `${t}(${e.map(({name:t,type:e})=>e+" "+t).join(",")})`
            }

            function rx(t) {
                let e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
                return e ? {
                    base: e[1],
                    index: e[2] + e[4],
                    array: {
                        base: e[1],
                        prefix: e[1] + e[2],
                        count: e[5] ? parseInt(e[5]) : -1
                    }
                } : {
                    base: t
                }
            }
            class rP {
                primaryType;#
                g;
                get types() {
                    return JSON.parse(this.#g)
                }#
                m;#
                y;
                constructor(t) {
                    this.#m = new Map, this.#y = new Map;
                    let e = new Map,
                        r = new Map,
                        n = new Map,
                        i = {};
                    for (let s in Object.keys(t).forEach(s => {
                            i[s] = t[s].map(({
                                name: e,
                                type: r
                            }) => {
                                let {
                                    base: n,
                                    index: i
                                } = rx(r);
                                return "int" !== n || t.int || (n = "int256"), "uint" !== n || t.uint || (n = "uint256"), {
                                    name: e,
                                    type: n + (i || "")
                                }
                            }), e.set(s, new Set), r.set(s, []), n.set(s, new Set)
                        }), this.#g = JSON.stringify(i), i) {
                        let n = new Set;
                        for (let a of i[s]) {
                            C(!n.has(a.name), `duplicate variable name ${JSON.stringify(a.name)} in ${JSON.stringify(s)}`, "types", t), n.add(a.name);
                            let i = rx(a.type).base;
                            C(i !== s, `circular type reference to ${JSON.stringify(i)}`, "types", t), rb(i) || (C(r.has(i), `unknown type ${JSON.stringify(i)}`, "types", t), r.get(i).push(s), e.get(s).add(i))
                        }
                    }
                    let s = Array.from(r.keys()).filter(t => 0 === r.get(t).length);
                    for (let [a, o] of (C(0 !== s.length, "missing primary type", "types", t), C(1 === s.length, `ambiguous primary types or unused types: ${s.map(t=>JSON.stringify(t)).join(", ")}`, "types", t), A(this, {
                            primaryType: s[0]
                        }), ! function i(s, a) {
                            for (let o of (C(!a.has(s), `circular type reference to ${JSON.stringify(s)}`, "types", t), a.add(s), e.get(s)))
                                if (r.has(o))
                                    for (let t of (i(o, a), a)) n.get(t).add(o);
                            a.delete(s)
                        }(this.primaryType, new Set), n)) {
                        let t = Array.from(o);
                        t.sort(), this.#m.set(a, rE(a, i[a]) + t.map(t => rE(t, i[t])).join(""))
                    }
                }
                getEncoder(t) {
                    let e = this.#y.get(t);
                    return e || (e = this.#v(t), this.#y.set(t, e)), e
                }#
                v(t) {
                    {
                        let e = rb(t);
                        if (e) return e
                    }
                    let e = rx(t).array;
                    if (e) {
                        let t = e.prefix,
                            r = this.getEncoder(t);
                        return n => {
                            C(-1 === e.count || e.count === n.length, `array length mismatch; expected length ${e.count}`, "value", n);
                            let i = n.map(r);
                            return this.#m.has(t) && (i = i.map(tZ)), tZ(L(i))
                        }
                    }
                    let r = this.types[t];
                    if (r) {
                        let e = ew(this.#m.get(t));
                        return t => {
                            let n = r.map(({
                                name: e,
                                type: r
                            }) => {
                                let n = this.getEncoder(r)(t[e]);
                                return this.#m.has(r) ? tZ(n) : n
                            });
                            return n.unshift(e), L(n)
                        }
                    }
                    C(!1, `unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    let e = this.#m.get(t);
                    return C(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return tZ(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    if (rb(t)) return r(t, e);
                    let n = rx(t).array;
                    if (n) return C(-1 === n.count || n.count === e.length, `array length mismatch; expected length ${n.count}`, "value", e), e.map(t => this._visit(n.prefix, t, r));
                    let i = this.types[t];
                    if (i) return i.reduce((t, {
                        name: n,
                        type: i
                    }) => (t[n] = this._visit(i, e[n], r), t), {});
                    C(!1, `unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new rP(t)
                }
                static getPrimaryType(t) {
                    return rP.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return rP.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    let e = [];
                    for (let r in t) {
                        if (null == t[r]) continue;
                        let n = ry[r];
                        C(n, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: n
                        })
                    }
                    return e.sort((t, e) => rv.indexOf(t.name) - rv.indexOf(e.name)), rP.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return L(["0x1901", rP.hashDomain(t), rP.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return tZ(rP.encode(t, e, r))
                }
                static async resolveNames(t, e, r, n) {
                    for (let e in t = Object.assign({}, t)) null == t[e] && delete t[e];
                    let i = {};
                    t.verifyingContract && !I(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                    let s = rP.from(e);
                    for (let t in s.visit(r, (t, e) => ("address" !== t || I(e, 20) || (i[e] = "0x"), e)), i) i[t] = await n(t);
                    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), r = s.visit(r, (t, e) => "address" === t && i[e] ? i[e] : e), {
                        domain: t,
                        value: r
                    }
                }
                static getPayload(t, e, r) {
                    rP.hashDomain(t);
                    let n = {},
                        i = [];
                    rv.forEach(e => {
                        let r = t[e];
                        null != r && (n[e] = rA[e](r), i.push({
                            name: e,
                            type: ry[e]
                        }))
                    });
                    let s = rP.from(e),
                        a = Object.assign({}, e = s.types);
                    return C(null == a.EIP712Domain, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, s.encode(r), {
                        types: a,
                        domain: n,
                        primaryType: s.primaryType,
                        message: s.visit(r, (t, e) => {
                            if (t.match(/^bytes(\d*)/)) return M(N(e));
                            if (t.match(/^u?int/)) return K(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return C("string" == typeof e, "invalid string", "value", e), e
                            }
                            C(!1, "unsupported type", "type", t)
                        })
                    }
                }
            }

            function rk(t, e) {
                return {
                    address: t2(t),
                    storageKeys: e.map((t, e) => (C(I(t, 32), "invalid slot", `storageKeys[${e}]`, t), t.toLowerCase()))
                }
            }

            function rC(t) {
                if (Array.isArray(t)) return t.map((e, r) => Array.isArray(e) ? (C(2 === e.length, "invalid slot set", `value[${r}]`, e), rk(e[0], e[1])) : (C(null != e && "object" == typeof e, "invalid address-slot set", "value", t), rk(e.address, e.storageKeys)));
                C(null != t && "object" == typeof t, "invalid access list", "value", t);
                let e = Object.keys(t).map(e => {
                    let r = t[e].reduce((t, e) => (t[e] = !0, t), {});
                    return rk(e, Object.keys(r).sort())
                });
                return e.sort((t, e) => t.address.localeCompare(e.address)), e
            }

            function rT(t) {
                return async function(t, e) {
                    let r;
                    k(null == e || !e.cancelled, "request cancelled before sending", "CANCELLED");
                    let n = t.url.split(":")[0].toLowerCase();
                    k("http" === n || "https" === n, `unsupported protocol ${n}`, "UNSUPPORTED_OPERATION", {
                        info: {
                            protocol: n
                        },
                        operation: "request"
                    }), k("https" === n || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
                        operation: "request"
                    });
                    let i = null,
                        s = new AbortController,
                        a = setTimeout(() => {
                            i = P("request timeout", "TIMEOUT"), s.abort()
                        }, t.timeout);
                    e && e.addListener(() => {
                        i = P("request cancelled", "CANCELLED"), s.abort()
                    });
                    let o = {
                        method: t.method,
                        headers: new Headers(Array.from(t)),
                        body: t.body || void 0,
                        signal: s.signal
                    };
                    try {
                        r = await fetch(t.url, o)
                    } catch (t) {
                        if (clearTimeout(a), i) throw i;
                        throw t
                    }
                    clearTimeout(a);
                    let l = {};
                    r.headers.forEach((t, e) => {
                        l[e.toLowerCase()] = t
                    });
                    let u = await r.arrayBuffer(),
                        h = null == u ? null : new Uint8Array(u);
                    return {
                        statusCode: r.status,
                        statusMessage: r.statusText,
                        headers: l,
                        body: h
                    }
                }
            }
            rT({});
            let rS = rT(),
                rR = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                rB = RegExp("^ipfs://(ipfs/)?(.*)$", "i"),
                rN = !1;
            async function rO(t, e) {
                try {
                    var r;
                    let e = t.match(rR);
                    if (!e) throw Error("invalid data");
                    return new rV(200, "OK", {
                        "content-type": e[1] || "text/plain"
                    }, e[2] ? function(t) {
                        let e = new Uint8Array((t = atob(t)).length);
                        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                        return N(e)
                    }(e[3]) : (r = e[3], eg(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))))))
                } catch (e) {
                    return new rV(599, "BAD REQUEST (invalid data: URI)", {}, null, new rU(t))
                }
            }

            function rI(t) {
                return async function(e, r) {
                    try {
                        let r = e.match(rB);
                        if (!r) throw Error("invalid link");
                        return new rU(`${t}${r[2]}`)
                    } catch (t) {
                        return new rV(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new rU(e))
                    }
                }
            }
            let rD = {
                    data: rO,
                    ipfs: rI("https://gateway.ipfs.io/ipfs/")
                },
                rF = new WeakMap;
            class rM {#
                w;#
                A;
                constructor(t) {
                    this.#w = [], this.#A = !1, rF.set(t, () => {
                        if (!this.#A) {
                            for (let t of (this.#A = !0, this.#w)) setTimeout(() => {
                                t()
                            }, 0);
                            this.#w = []
                        }
                    })
                }
                addListener(t) {
                    k(!this.#A, "singal already cancelled", "UNSUPPORTED_OPERATION", {
                        operation: "fetchCancelSignal.addCancelListener"
                    }), this.#w.push(t)
                }
                get cancelled() {
                    return this.#A
                }
                checkSignal() {
                    k(!this.cancelled, "cancelled", "CANCELLED", {})
                }
            }

            function rL(t) {
                if (null == t) throw Error("missing signal; should not happen");
                return t.checkSignal(), t
            }
            class rU {#
                b;#
                E;#
                x;#
                P;#
                k;#
                C;#
                T;#
                S;#
                R;#
                B;#
                N;#
                O;#
                I;#
                D;#
                F;
                get url() {
                    return this.#C
                }
                set url(t) {
                    this.#C = String(t)
                }
                get body() {
                    return null == this.#T ? null : new Uint8Array(this.#T)
                }
                set body(t) {
                    if (null == t) this.#T = void 0, this.#S = void 0;
                    else if ("string" == typeof t) this.#T = eg(t), this.#S = "text/plain";
                    else if (t instanceof Uint8Array) this.#T = t, this.#S = "application/octet-stream";
                    else if ("object" == typeof t) this.#T = eg(JSON.stringify(t)), this.#S = "application/json";
                    else throw Error("invalid body")
                }
                hasBody() {
                    return null != this.#T
                }
                get method() {
                    return this.#P ? this.#P : this.hasBody() ? "POST" : "GET"
                }
                set method(t) {
                    null == t && (t = ""), this.#P = String(t).toUpperCase()
                }
                get headers() {
                    let t = Object.assign({}, this.#x);
                    return this.#R && (t.authorization = `Basic ${function(t){let e=N(t),r="";for(let t=0;t<e.length;t++)r+=String.fromCharCode(e[t]);return btoa(r)}(eg(this.#R))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), null == t["content-type"] && this.#S && (t["content-type"] = this.#S), this.body && (t["content-length"] = String(this.body.length)), t
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                setHeader(t, e) {
                    this.#x[String(t).toLowerCase()] = String(e)
                }
                clearHeaders() {
                    this.#x = {}
                }[Symbol.iterator]() {
                    let t = this.headers,
                        e = Object.keys(t),
                        r = 0;
                    return {
                        next: () => {
                            if (r < e.length) {
                                let n = e[r++];
                                return {
                                    value: [n, t[n]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                get credentials() {
                    return this.#R || null
                }
                setCredentials(t, e) {
                    C(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), this.#R = `${t}:${e}`
                }
                get allowGzip() {
                    return this.#E
                }
                set allowGzip(t) {
                    this.#E = !!t
                }
                get allowInsecureAuthentication() {
                    return !!this.#b
                }
                set allowInsecureAuthentication(t) {
                    this.#b = !!t
                }
                get timeout() {
                    return this.#k
                }
                set timeout(t) {
                    C(t >= 0, "timeout must be non-zero", "timeout", t), this.#k = t
                }
                get preflightFunc() {
                    return this.#B || null
                }
                set preflightFunc(t) {
                    this.#B = t
                }
                get processFunc() {
                    return this.#N || null
                }
                set processFunc(t) {
                    this.#N = t
                }
                get retryFunc() {
                    return this.#O || null
                }
                set retryFunc(t) {
                    this.#O = t
                }
                get getUrlFunc() {
                    return this.#F || rS
                }
                set getUrlFunc(t) {
                    this.#F = t
                }
                constructor(t) {
                    this.#C = String(t), this.#b = !1, this.#E = !0, this.#x = {}, this.#P = "", this.#k = 3e5, this.#D = {
                        slotInterval: 250,
                        maxAttempts: 12
                    }, this.#F = null
                }
                toString() {
                    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#T?M(this.#T):"null"}>`
                }
                setThrottleParams(t) {
                    null != t.slotInterval && (this.#D.slotInterval = t.slotInterval), null != t.maxAttempts && (this.#D.maxAttempts = t.maxAttempts)
                }
                async# M(t, e, r, n, i) {
                    if (t >= this.#D.maxAttempts) return i.makeServerError("exceeded maximum retry limit");
                    k(rj() <= e, "timeout", "TIMEOUT", {
                        operation: "request.send",
                        reason: "timeout",
                        request: n
                    }), r > 0 && await new Promise(t => setTimeout(t, r));
                    let s = this.clone(),
                        a = (s.url.split(":")[0] || "").toLowerCase();
                    if (a in rD) {
                        let t = await rD[a](s.url, rL(n.#I));
                        if (t instanceof rV) {
                            let e = t;
                            if (this.processFunc) {
                                rL(n.#I);
                                try {
                                    e = await this.processFunc(s, e)
                                } catch (t) {
                                    (null == t.throttle || "number" != typeof t.stall) && e.makeServerError("error in post-processing function", t).assertOk()
                                }
                            }
                            return e
                        }
                        s = t
                    }
                    this.preflightFunc && (s = await this.preflightFunc(s));
                    let o = await this.getUrlFunc(s, rL(n.#I)),
                        l = new rV(o.statusCode, o.statusMessage, o.headers, o.body, n);
                    if (301 === l.statusCode || 302 === l.statusCode) {
                        try {
                            let r = l.headers.location || "";
                            return s.redirect(r).#M(t + 1, e, 0, n, l)
                        } catch (t) {}
                        return l
                    }
                    if (429 === l.statusCode && (null == this.retryFunc || await this.retryFunc(s, l, t))) {
                        let r = l.headers["retry-after"],
                            i = this.#D.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
                        return "string" == typeof r && r.match(/^[1-9][0-9]*$/) && (i = parseInt(r)), s.clone().#M(t + 1, e, i, n, l)
                    }
                    if (this.processFunc) {
                        rL(n.#I);
                        try {
                            l = await this.processFunc(s, l)
                        } catch (i) {
                            (null == i.throttle || "number" != typeof i.stall) && l.makeServerError("error in post-processing function", i).assertOk();
                            let r = this.#D.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
                            return i.stall >= 0 && (r = i.stall), s.clone().#M(t + 1, e, r, n, l)
                        }
                    }
                    return l
                }
                send() {
                    return k(null == this.#I, "request already sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.send"
                    }), this.#I = new rM(this), this.#M(0, rj() + this.timeout, 0, this, new rV(0, "", {}, null, this))
                }
                cancel() {
                    k(null != this.#I, "request has not been sent", "UNSUPPORTED_OPERATION", {
                        operation: "fetchRequest.cancel"
                    });
                    let t = rF.get(this);
                    if (!t) throw Error("missing signal; should not happen");
                    t()
                }
                redirect(t) {
                    let e = this.url.split(":")[0].toLowerCase(),
                        r = t.split(":")[0].toLowerCase();
                    k("GET" === this.method && ("https" !== e || "http" !== r) && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
                        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
                    });
                    let n = new rU(t);
                    return n.method = "GET", n.allowGzip = this.allowGzip, n.timeout = this.timeout, n.#x = Object.assign({}, this.#x), this.#T && (n.#T = new Uint8Array(this.#T)), n.#S = this.#S, n
                }
                clone() {
                    let t = new rU(this.url);
                    return t.#P = this.#P, this.#T && (t.#T = this.#T), t.#S = this.#S, t.#x = Object.assign({}, this.#x), t.#R = this.#R, this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), t.#B = this.#B, t.#N = this.#N, t.#O = this.#O, t.#D = Object.assign({}, this.#D), t.#F = this.#F, t
                }
                static lockConfig() {
                    rN = !0
                }
                static getGateway(t) {
                    return rD[t.toLowerCase()] || null
                }
                static registerGateway(t, e) {
                    if ("http" === (t = t.toLowerCase()) || "https" === t) throw Error(`cannot intercept ${t}; use registerGetUrl`);
                    if (rN) throw Error("gateways locked");
                    rD[t] = e
                }
                static registerGetUrl(t) {
                    if (rN) throw Error("gateways locked");
                    rS = t
                }
                static createGetUrlFunc(t) {
                    return rT(t)
                }
                static createDataGateway() {
                    return rO
                }
                static createIpfsGatewayFunc(t) {
                    return rI(t)
                }
            }
            class rV {#
                L;#
                U;#
                x;#
                T;#
                V;#
                j;
                toString() {
                    return `<FetchResponse status=${this.statusCode} body=${this.#T?M(this.#T):"null"}>`
                }
                get statusCode() {
                    return this.#L
                }
                get statusMessage() {
                    return this.#U
                }
                get headers() {
                    return Object.assign({}, this.#x)
                }
                get body() {
                    return null == this.#T ? null : new Uint8Array(this.#T)
                }
                get bodyText() {
                    try {
                        return null == this.#T ? "" : em(this.#T)
                    } catch (t) {
                        k(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                            operation: "bodyText",
                            info: {
                                response: this
                            }
                        })
                    }
                }
                get bodyJson() {
                    try {
                        return JSON.parse(this.bodyText)
                    } catch (t) {
                        k(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                            operation: "bodyJson",
                            info: {
                                response: this
                            }
                        })
                    }
                }[Symbol.iterator]() {
                    let t = this.headers,
                        e = Object.keys(t),
                        r = 0;
                    return {
                        next: () => {
                            if (r < e.length) {
                                let n = e[r++];
                                return {
                                    value: [n, t[n]],
                                    done: !1
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                    }
                }
                constructor(t, e, r, n, i) {
                    this.#L = t, this.#U = e, this.#x = Object.keys(r).reduce((t, e) => (t[e.toLowerCase()] = String(r[e]), t), {}), this.#T = null == n ? null : new Uint8Array(n), this.#V = i || null, this.#j = {
                        message: ""
                    }
                }
                makeServerError(t, e) {
                    let r;
                    t ? r = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : (t = `${this.statusCode} ${this.statusMessage}`, r = `CLIENT ESCALATED SERVER ERROR (${t})`);
                    let n = new rV(599, r, this.headers, this.body, this.#V || void 0);
                    return n.#j = {
                        message: t,
                        error: e
                    }, n
                }
                throwThrottleError(t, e) {
                    null == e ? e = -1 : C(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
                    let r = Error(t || "throttling requests");
                    throw A(r, {
                        stall: e,
                        throttle: !0
                    }), r
                }
                getHeader(t) {
                    return this.headers[t.toLowerCase()]
                }
                hasBody() {
                    return null != this.#T
                }
                get request() {
                    return this.#V
                }
                ok() {
                    return "" === this.#j.message && this.statusCode >= 200 && this.statusCode < 300
                }
                assertOk() {
                    if (this.ok()) return;
                    let {
                        message: t,
                        error: e
                    } = this.#j;
                    "" === t && (t = `server response ${this.statusCode} ${this.statusMessage}`);
                    let r = null;
                    this.request && (r = this.request.url);
                    let n = null;
                    try {
                        this.#T && (n = em(this.#T))
                    } catch (t) {}
                    k(!1, t, "SERVER_ERROR", {
                        request: this.request || "unknown request",
                        response: this,
                        error: e,
                        info: {
                            requestUrl: r,
                            responseBody: n,
                            responseStatus: `${this.statusCode} ${this.statusMessage}`
                        }
                    })
                }
            }

            function rj() {
                return new Date().getTime()
            }
            let rG = "0x0000000000000000000000000000000000000000";
            class rH {
                fragment;
                name;
                signature;
                topic;
                args;
                constructor(t, e, r) {
                    let n = t.name,
                        i = t.format();
                    A(this, {
                        fragment: t,
                        name: n,
                        signature: i,
                        topic: e,
                        args: r
                    })
                }
            }
            class rQ {
                fragment;
                name;
                args;
                signature;
                selector;
                value;
                constructor(t, e, r, n) {
                    let i = t.name,
                        s = t.format();
                    A(this, {
                        fragment: t,
                        name: i,
                        args: r,
                        signature: s,
                        selector: e,
                        value: n
                    })
                }
            }
            class rz {
                fragment;
                name;
                args;
                signature;
                selector;
                constructor(t, e, r) {
                    let n = t.name,
                        i = t.format();
                    A(this, {
                        fragment: t,
                        name: n,
                        args: r,
                        signature: i,
                        selector: e
                    })
                }
            }
            class rJ {
                hash;
                _isIndexed;
                static isIndexed(t) {
                    return !!(t && t._isIndexed)
                }
                constructor(t) {
                    A(this, {
                        hash: t,
                        _isIndexed: !0
                    })
                }
            }
            let rK = {
                    0: "generic panic",
                    1: "assert(false)",
                    17: "arithmetic overflow",
                    18: "division or modulo by zero",
                    33: "enum overflow",
                    34: "invalid encoded storage byte array accessed",
                    49: "out-of-bounds array access; popping on an empty array",
                    50: "out-of-bounds access of an array or bytesN",
                    65: "out of memory",
                    81: "uninitialized function"
                },
                r_ = {
                    "0x08c379a0": {
                        signature: "Error(string)",
                        name: "Error",
                        inputs: ["string"],
                        reason: t => `reverted with reason string ${JSON.stringify(t)}`
                    },
                    "0x4e487b71": {
                        signature: "Panic(uint256)",
                        name: "Panic",
                        inputs: ["uint256"],
                        reason: t => {
                            let e = "unknown panic code";
                            return t >= 0 && t <= 255 && rK[t.toString()] && (e = rK[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`
                        }
                    }
                };
            class rq {
                fragments;
                deploy;
                fallback;
                receive;#
                G;#
                H;#
                Q;#
                z;
                constructor(t) {
                    let e = [];
                    e = "string" == typeof t ? JSON.parse(t) : t, this.#Q = new Map, this.#G = new Map, this.#H = new Map;
                    let r = [];
                    for (let t of e) try {
                        r.push(e2.from(t))
                    } catch (e) {
                        console.log(`[Warning] Invalid Fragment ${JSON.stringify(t)}:`, e.message)
                    }
                    A(this, {
                        fragments: Object.freeze(r)
                    });
                    let n = null,
                        i = !1;
                    this.#z = this.getAbiCoder(), this.fragments.forEach((t, e) => {
                        let r;
                        switch (t.type) {
                            case "constructor":
                                if (this.deploy) {
                                    console.log("duplicate definition - constructor");
                                    return
                                }
                                A(this, {
                                    deploy: t
                                });
                                return;
                            case "fallback":
                                0 === t.inputs.length ? i = !0 : (C(!n || t.payable !== n.payable, "conflicting fallback fragments", `fragments[${e}]`, t), i = (n = t).payable);
                                return;
                            case "function":
                                r = this.#Q;
                                break;
                            case "event":
                                r = this.#H;
                                break;
                            case "error":
                                r = this.#G;
                                break;
                            default:
                                return
                        }
                        let s = t.format();
                        r.has(s) || r.set(s, t)
                    }), this.deploy || A(this, {
                        deploy: e6.from("constructor()")
                    }), A(this, {
                        fallback: n,
                        receive: i
                    })
                }
                format(t) {
                    let e = t ? "minimal" : "full";
                    return this.fragments.map(t => t.format(e))
                }
                formatJson() {
                    return JSON.stringify(this.fragments.map(t => t.format("json")).map(t => JSON.parse(t)))
                }
                getAbiCoder() {
                    return ra.defaultAbiCoder()
                }#
                J(t, e, r) {
                    if (I(t)) {
                        let e = t.toLowerCase();
                        for (let t of this.#Q.values())
                            if (e === t.selector) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        let n = [];
                        for (let [e, r] of this.#Q) e.split("(")[0] === t && n.push(r);
                        if (e) {
                            let t = e.length > 0 ? e[e.length - 1] : null,
                                r = e.length,
                                i = !0;
                            t6.isTyped(t) && "overrides" === t.type && (i = !1, r--);
                            for (let t = n.length - 1; t >= 0; t--) {
                                let e = n[t].inputs.length;
                                e === r || i && e === r - 1 || n.splice(t, 1)
                            }
                            for (let t = n.length - 1; t >= 0; t--) {
                                let r = n[t].inputs;
                                for (let i = 0; i < e.length; i++)
                                    if (t6.isTyped(e[i])) {
                                        if (i >= r.length) {
                                            if ("overrides" === e[i].type) continue;
                                            n.splice(t, 1);
                                            break
                                        }
                                        if (e[i].type !== r[i].baseType) {
                                            n.splice(t, 1);
                                            break
                                        }
                                    }
                            }
                        }
                        if (1 === n.length && e && e.length !== n[0].inputs.length) {
                            let t = e[e.length - 1];
                            (null == t || Array.isArray(t) || "object" != typeof t) && n.splice(0, 1)
                        }
                        if (0 === n.length) return null;
                        if (n.length > 1 && r) {
                            let e = n.map(t => JSON.stringify(t.format())).join(", ");
                            C(!1, `ambiguous function description (i.e. matches ${e})`, "key", t)
                        }
                        return n[0]
                    }
                    return this.#Q.get(e7.from(t).format()) || null
                }
                getFunctionName(t) {
                    let e = this.#J(t, null, !1);
                    return C(e, "no matching function", "key", t), e.name
                }
                hasFunction(t) {
                    return !!this.#J(t, null, !1)
                }
                getFunction(t, e) {
                    return this.#J(t, e || null, !0)
                }
                forEachFunction(t) {
                    let e = Array.from(this.#Q.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#Q.get(n), r)
                    }
                }#
                K(t, e, r) {
                    if (I(t)) {
                        let e = t.toLowerCase();
                        for (let t of this.#H.values())
                            if (e === t.topicHash) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        let n = [];
                        for (let [e, r] of this.#H) e.split("(")[0] === t && n.push(r);
                        if (e) {
                            for (let t = n.length - 1; t >= 0; t--) n[t].inputs.length < e.length && n.splice(t, 1);
                            for (let t = n.length - 1; t >= 0; t--) {
                                let r = n[t].inputs;
                                for (let i = 0; i < e.length; i++)
                                    if (t6.isTyped(e[i]) && e[i].type !== r[i].baseType) {
                                        n.splice(t, 1);
                                        break
                                    }
                            }
                        }
                        if (0 === n.length) return null;
                        if (n.length > 1 && r) {
                            let e = n.map(t => JSON.stringify(t.format())).join(", ");
                            C(!1, `ambiguous event description (i.e. matches ${e})`, "key", t)
                        }
                        return n[0]
                    }
                    return this.#H.get(e5.from(t).format()) || null
                }
                getEventName(t) {
                    let e = this.#K(t, null, !1);
                    return C(e, "no matching event", "key", t), e.name
                }
                hasEvent(t) {
                    return !!this.#K(t, null, !1)
                }
                getEvent(t, e) {
                    return this.#K(t, e || null, !0)
                }
                forEachEvent(t) {
                    let e = Array.from(this.#H.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#H.get(n), r)
                    }
                }
                getError(t, e) {
                    if (I(t)) {
                        let e = t.toLowerCase();
                        if (r_[e]) return e8.from(r_[e].signature);
                        for (let t of this.#G.values())
                            if (e === t.selector) return t;
                        return null
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = [];
                        for (let [r, n] of this.#G) r.split("(")[0] === t && e.push(n);
                        if (0 === e.length) return "Error" === t ? e8.from("error Error(string)") : "Panic" === t ? e8.from("error Panic(uint256)") : null;
                        if (e.length > 1) {
                            let r = e.map(t => JSON.stringify(t.format())).join(", ");
                            C(!1, `ambiguous error description (i.e. ${r})`, "name", t)
                        }
                        return e[0]
                    }
                    return "Error(string)" === (t = e8.from(t).format()) ? e8.from("error Error(string)") : "Panic(uint256)" === t ? e8.from("error Panic(uint256)") : this.#G.get(t) || null
                }
                forEachError(t) {
                    let e = Array.from(this.#G.keys());
                    e.sort((t, e) => t.localeCompare(e));
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r];
                        t(this.#G.get(n), r)
                    }
                }
                _decodeParams(t, e) {
                    return this.#z.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this.#z.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getError(t);
                        C(e, "unknown error", "fragment", t), t = e
                    }
                    return C(V(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, V(e, 4))
                }
                encodeErrorResult(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getError(t);
                        C(e, "unknown error", "fragment", t), t = e
                    }
                    return L([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionData(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getFunction(t);
                        C(e, "unknown function", "fragment", t), t = e
                    }
                    return C(V(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, V(e, 4))
                }
                encodeFunctionData(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getFunction(t);
                        C(e, "unknown function", "fragment", t), t = e
                    }
                    return L([t.selector, this._encodeParams(t.inputs, e || [])])
                }
                decodeFunctionResult(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getFunction(t);
                        C(e, "unknown function", "fragment", t), t = e
                    }
                    let r = "invalid length for result data",
                        n = O(e);
                    if (n.length % 32 == 0) try {
                        return this.#z.decode(t.outputs, n)
                    } catch (t) {
                        r = "could not decode result data"
                    }
                    k(!1, r, "BAD_DATA", {
                        value: M(n),
                        info: {
                            method: t.name,
                            signature: t.format()
                        }
                    })
                }
                makeError(t, e) {
                    let r = N(t, "data"),
                        n = ra.getBuiltinCallException("call", e, r);
                    if (n.message.startsWith("execution reverted (unknown custom error)")) {
                        let t = M(r.slice(0, 4)),
                            e = this.getError(t);
                        if (e) try {
                            let t = this.#z.decode(e.inputs, r.slice(4));
                            n.revert = {
                                name: e.name,
                                signature: e.format(),
                                args: t
                            }, n.reason = n.revert.signature, n.message = `execution reverted: ${n.reason}`
                        } catch (t) {
                            n.message = "execution reverted (coult not decode custom error)"
                        }
                    }
                    let i = this.parseTransaction(e);
                    return i && (n.invocation = {
                        method: i.name,
                        signature: i.signature,
                        args: i.args
                    }), n
                }
                encodeFunctionResult(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getFunction(t);
                        C(e, "unknown function", "fragment", t), t = e
                    }
                    return M(this.#z.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getEvent(t);
                        C(e, "unknown event", "eventFragment", t), t = e
                    }
                    k(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", {
                        count: e.length,
                        expectedCount: t.inputs.length
                    });
                    let r = [];
                    t.anonymous || r.push(t.topicHash);
                    let n = (t, e) => "string" === t.type ? ew(e) : "bytes" === t.type ? tZ(M(e)) : ("bool" === t.type && "boolean" == typeof e ? e = e ? "0x01" : "0x00" : t.type.match(/^u?int/) ? e = Y(e) : t.type.match(/^bytes/) ? e = j(e, 32, !1) : "address" === t.type && this.#z.encode(["address"], [e]), G(M(e), 32));
                    for (e.forEach((e, i) => {
                            let s = t.inputs[i];
                            if (!s.indexed) {
                                C(null == e, "cannot filter non-indexed parameters; must be null", "contract." + s.name, e);
                                return
                            }
                            null == e ? r.push(null) : "array" === s.baseType || "tuple" === s.baseType ? C(!1, "filtering with tuples or arrays not supported", "contract." + s.name, e) : Array.isArray(e) ? r.push(e.map(t => n(s, t))) : r.push(n(s, e))
                        }); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(t, e) {
                    if ("string" == typeof t) {
                        let e = this.getEvent(t);
                        C(e, "unknown event", "eventFragment", t), t = e
                    }
                    let r = [],
                        n = [],
                        i = [];
                    return t.anonymous || r.push(t.topicHash), C(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((t, s) => {
                        let a = e[s];
                        if (t.indexed) {
                            if ("string" === t.type) r.push(ew(a));
                            else if ("bytes" === t.type) r.push(tZ(a));
                            else if ("tuple" === t.baseType || "array" === t.baseType) throw Error("not implemented");
                            else r.push(this.#z.encode([t.type], [a]))
                        } else n.push(t), i.push(a)
                    }), {
                        data: this.#z.encode(n, i),
                        topics: r
                    }
                }
                decodeEventLog(t, e, r) {
                    if ("string" == typeof t) {
                        let e = this.getEvent(t);
                        C(e, "unknown event", "eventFragment", t), t = e
                    }
                    if (null != r && !t.anonymous) {
                        let e = t.topicHash;
                        C(I(r[0], 32) && r[0].toLowerCase() === e, "fragment/topic mismatch", "topics[0]", r[0]), r = r.slice(1)
                    }
                    let n = [],
                        i = [],
                        s = [];
                    t.inputs.forEach((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (n.push(e1.from({
                            type: "bytes32",
                            name: t.name
                        })), s.push(!0)) : (n.push(t), s.push(!1)) : (i.push(t), s.push(!1))
                    });
                    let a = null != r ? this.#z.decode(n, L(r)) : null,
                        o = this.#z.decode(i, e, !0),
                        l = [],
                        u = [],
                        h = 0,
                        c = 0;
                    return t.inputs.forEach((t, e) => {
                        let r = null;
                        if (t.indexed) {
                            if (null == a) r = new rJ(null);
                            else if (s[e]) r = new rJ(a[c++]);
                            else try {
                                r = a[c++]
                            } catch (t) {
                                r = t
                            }
                        } else try {
                            r = o[h++]
                        } catch (t) {
                            r = t
                        }
                        l.push(r), u.push(t.name || null)
                    }), ta.fromItems(l, u)
                }
                parseTransaction(t) {
                    let e = N(t.data, "tx.data"),
                        r = K(null != t.value ? t.value : 0, "tx.value"),
                        n = this.getFunction(M(e.slice(0, 4)));
                    if (!n) return null;
                    let i = this.#z.decode(n.inputs, e.slice(4));
                    return new rQ(n, n.selector, i, r)
                }
                parseCallResult(t) {
                    throw Error("@TODO")
                }
                parseLog(t) {
                    let e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new rH(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics))
                }
                parseError(t) {
                    let e = M(t),
                        r = this.getError(V(e, 0, 4));
                    if (!r) return null;
                    let n = this.#z.decode(r.inputs, V(e, 4));
                    return new rz(r, r.selector, n)
                }
                static from(t) {
                    return t instanceof rq ? t : new rq("string" == typeof t ? JSON.parse(t) : "function" == typeof t.formatJson ? t.formatJson() : "function" == typeof t.format ? t.format("json") : t)
                }
            }
            let rW = BigInt(0);

            function rZ(t) {
                return null == t ? null : t
            }

            function rY(t) {
                return null == t ? null : t.toString()
            }
            class rX {
                gasPrice;
                maxFeePerGas;
                maxPriorityFeePerGas;
                constructor(t, e, r) {
                    A(this, {
                        gasPrice: rZ(t),
                        maxFeePerGas: rZ(e),
                        maxPriorityFeePerGas: rZ(r)
                    })
                }
                toJSON() {
                    let {
                        gasPrice: t,
                        maxFeePerGas: e,
                        maxPriorityFeePerGas: r
                    } = this;
                    return {
                        _type: "FeeData",
                        gasPrice: rY(t),
                        maxFeePerGas: rY(e),
                        maxPriorityFeePerGas: rY(r)
                    }
                }
            }

            function r$(t) {
                let e = {};
                for (let r of (t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = M(t.data)), "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/))) r in t && null != t[r] && (e[r] = K(t[r], `request.${r}`));
                for (let r of "type,nonce".split(/,/)) r in t && null != t[r] && (e[r] = Z(t[r], `request.${r}`));
                return t.accessList && (e.accessList = rC(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), "blobVersionedHashes" in t && t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.slice()), "kzg" in t && (e.kzg = t.kzg), "blobs" in t && t.blobs && (e.blobs = t.blobs.map(t => D(t) ? M(t) : Object.assign({}, t))), e
            }
            class r0 {
                provider;
                number;
                hash;
                timestamp;
                parentHash;
                parentBeaconBlockRoot;
                nonce;
                difficulty;
                gasLimit;
                gasUsed;
                stateRoot;
                receiptsRoot;
                blobGasUsed;
                excessBlobGas;
                miner;
                prevRandao;
                extraData;
                baseFeePerGas;#
                _;
                constructor(t, e) {
                    this.#_ = t.transactions.map(t => "string" != typeof t ? new r3(t, e) : t), A(this, {
                        provider: e,
                        hash: rZ(t.hash),
                        number: t.number,
                        timestamp: t.timestamp,
                        parentHash: t.parentHash,
                        parentBeaconBlockRoot: t.parentBeaconBlockRoot,
                        nonce: t.nonce,
                        difficulty: t.difficulty,
                        gasLimit: t.gasLimit,
                        gasUsed: t.gasUsed,
                        blobGasUsed: t.blobGasUsed,
                        excessBlobGas: t.excessBlobGas,
                        miner: t.miner,
                        prevRandao: rZ(t.prevRandao),
                        extraData: t.extraData,
                        baseFeePerGas: rZ(t.baseFeePerGas),
                        stateRoot: t.stateRoot,
                        receiptsRoot: t.receiptsRoot
                    })
                }
                get transactions() {
                    return this.#_.map(t => "string" == typeof t ? t : t.hash)
                }
                get prefetchedTransactions() {
                    let t = this.#_.slice();
                    return 0 === t.length ? [] : (k("object" == typeof t[0], "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
                        operation: "transactionResponses()"
                    }), t)
                }
                toJSON() {
                    let {
                        baseFeePerGas: t,
                        difficulty: e,
                        extraData: r,
                        gasLimit: n,
                        gasUsed: i,
                        hash: s,
                        miner: a,
                        prevRandao: o,
                        nonce: l,
                        number: u,
                        parentHash: h,
                        parentBeaconBlockRoot: c,
                        stateRoot: d,
                        receiptsRoot: f,
                        timestamp: p,
                        transactions: g
                    } = this;
                    return {
                        _type: "Block",
                        baseFeePerGas: rY(t),
                        difficulty: rY(e),
                        extraData: r,
                        gasLimit: rY(n),
                        gasUsed: rY(i),
                        blobGasUsed: rY(this.blobGasUsed),
                        excessBlobGas: rY(this.excessBlobGas),
                        hash: s,
                        miner: a,
                        prevRandao: o,
                        nonce: l,
                        number: u,
                        parentHash: h,
                        timestamp: p,
                        parentBeaconBlockRoot: c,
                        stateRoot: d,
                        receiptsRoot: f,
                        transactions: g
                    }
                }[Symbol.iterator]() {
                    let t = 0,
                        e = this.transactions;
                    return {
                        next: () => t < this.length ? {
                            value: e[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get length() {
                    return this.#_.length
                }
                get date() {
                    return null == this.timestamp ? null : new Date(1e3 * this.timestamp)
                }
                async getTransaction(t) {
                    let e;
                    if ("number" == typeof t) e = this.#_[t];
                    else {
                        let r = t.toLowerCase();
                        for (let t of this.#_) {
                            if ("string" == typeof t) {
                                if (t !== r) continue;
                                e = t;
                                break
                            }
                            if (t.hash !== r) {
                                e = t;
                                break
                            }
                        }
                    }
                    if (null == e) throw Error("no such tx");
                    return "string" == typeof e ? await this.provider.getTransaction(e) : e
                }
                getPrefetchedTransaction(t) {
                    let e = this.prefetchedTransactions;
                    if ("number" == typeof t) return e[t];
                    for (let r of (t = t.toLowerCase(), e))
                        if (r.hash === t) return r;
                    C(!1, "no matching transaction", "indexOrHash", t)
                }
                isMined() {
                    return !!this.hash
                }
                isLondon() {
                    return !!this.baseFeePerGas
                }
                orphanedEvent() {
                    if (!this.isMined()) throw Error("");
                    return {
                        orphan: "drop-block",
                        hash: this.hash,
                        number: this.number
                    }
                }
            }
            class r1 {
                provider;
                transactionHash;
                blockHash;
                blockNumber;
                removed;
                address;
                data;
                topics;
                index;
                transactionIndex;
                constructor(t, e) {
                    this.provider = e;
                    let r = Object.freeze(t.topics.slice());
                    A(this, {
                        transactionHash: t.transactionHash,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        removed: t.removed,
                        address: t.address,
                        data: t.data,
                        topics: r,
                        index: t.index,
                        transactionIndex: t.transactionIndex
                    })
                }
                toJSON() {
                    let {
                        address: t,
                        blockHash: e,
                        blockNumber: r,
                        data: n,
                        index: i,
                        removed: s,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: l
                    } = this;
                    return {
                        _type: "log",
                        address: t,
                        blockHash: e,
                        blockNumber: r,
                        data: n,
                        index: i,
                        removed: s,
                        topics: a,
                        transactionHash: o,
                        transactionIndex: l
                    }
                }
                async getBlock() {
                    let t = await this.provider.getBlock(this.blockHash);
                    return k(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransaction() {
                    let t = await this.provider.getTransaction(this.transactionHash);
                    return k(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
                }
                async getTransactionReceipt() {
                    let t = await this.provider.getTransactionReceipt(this.transactionHash);
                    return k(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t
                }
                removedEvent() {
                    return {
                        orphan: "drop-log",
                        log: {
                            transactionHash: this.transactionHash,
                            blockHash: this.blockHash,
                            blockNumber: this.blockNumber,
                            address: this.address,
                            data: this.data,
                            topics: Object.freeze(this.topics.slice()),
                            index: this.index
                        }
                    }
                }
            }
            class r2 {
                provider;
                to;
                from;
                contractAddress;
                hash;
                index;
                blockHash;
                blockNumber;
                logsBloom;
                gasUsed;
                blobGasUsed;
                cumulativeGasUsed;
                gasPrice;
                blobGasPrice;
                type;
                status;
                root;#
                q;
                constructor(t, e) {
                    this.#q = Object.freeze(t.logs.map(t => new r1(t, e)));
                    let r = rW;
                    null != t.effectiveGasPrice ? r = t.effectiveGasPrice : null != t.gasPrice && (r = t.gasPrice), A(this, {
                        provider: e,
                        to: t.to,
                        from: t.from,
                        contractAddress: t.contractAddress,
                        hash: t.hash,
                        index: t.index,
                        blockHash: t.blockHash,
                        blockNumber: t.blockNumber,
                        logsBloom: t.logsBloom,
                        gasUsed: t.gasUsed,
                        cumulativeGasUsed: t.cumulativeGasUsed,
                        blobGasUsed: t.blobGasUsed,
                        gasPrice: r,
                        blobGasPrice: t.blobGasPrice,
                        type: t.type,
                        status: t.status,
                        root: t.root
                    })
                }
                get logs() {
                    return this.#q
                }
                toJSON() {
                    let {
                        to: t,
                        from: e,
                        contractAddress: r,
                        hash: n,
                        index: i,
                        blockHash: s,
                        blockNumber: a,
                        logsBloom: o,
                        logs: l,
                        status: u,
                        root: h
                    } = this;
                    return {
                        _type: "TransactionReceipt",
                        blockHash: s,
                        blockNumber: a,
                        contractAddress: r,
                        cumulativeGasUsed: rY(this.cumulativeGasUsed),
                        from: e,
                        gasPrice: rY(this.gasPrice),
                        blobGasUsed: rY(this.blobGasUsed),
                        blobGasPrice: rY(this.blobGasPrice),
                        gasUsed: rY(this.gasUsed),
                        hash: n,
                        index: i,
                        logs: l,
                        logsBloom: o,
                        root: h,
                        status: u,
                        to: t
                    }
                }
                get length() {
                    return this.logs.length
                }[Symbol.iterator]() {
                    let t = 0;
                    return {
                        next: () => t < this.length ? {
                            value: this.logs[t++],
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        }
                    }
                }
                get fee() {
                    return this.gasUsed * this.gasPrice
                }
                async getBlock() {
                    let t = await this.provider.getBlock(this.blockHash);
                    if (null == t) throw Error("TODO");
                    return t
                }
                async getTransaction() {
                    let t = await this.provider.getTransaction(this.hash);
                    if (null == t) throw Error("TODO");
                    return t
                }
                async getResult() {
                    return await this.provider.getTransactionResult(this.hash)
                }
                async confirmations() {
                    return await this.provider.getBlockNumber() - this.blockNumber + 1
                }
                removedEvent() {
                    return r8(this)
                }
                reorderedEvent(t) {
                    return k(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "reorderedEvent(other)"
                    }), r4(this, t)
                }
            }
            class r3 {
                provider;
                blockNumber;
                blockHash;
                index;
                hash;
                type;
                to;
                from;
                nonce;
                gasLimit;
                gasPrice;
                maxPriorityFeePerGas;
                maxFeePerGas;
                maxFeePerBlobGas;
                data;
                value;
                chainId;
                signature;
                accessList;
                blobVersionedHashes;#
                W;
                constructor(t, e) {
                    this.provider = e, this.blockNumber = null != t.blockNumber ? t.blockNumber : null, this.blockHash = null != t.blockHash ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = null != t.maxFeePerGas ? t.maxFeePerGas : null, this.maxFeePerBlobGas = null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = null != t.accessList ? t.accessList : null, this.blobVersionedHashes = null != t.blobVersionedHashes ? t.blobVersionedHashes : null, this.#W = -1
                }
                toJSON() {
                    let {
                        blockNumber: t,
                        blockHash: e,
                        index: r,
                        hash: n,
                        type: i,
                        to: s,
                        from: a,
                        nonce: o,
                        data: l,
                        signature: u,
                        accessList: h,
                        blobVersionedHashes: c
                    } = this;
                    return {
                        _type: "TransactionResponse",
                        accessList: h,
                        blockNumber: t,
                        blockHash: e,
                        blobVersionedHashes: c,
                        chainId: rY(this.chainId),
                        data: l,
                        from: a,
                        gasLimit: rY(this.gasLimit),
                        gasPrice: rY(this.gasPrice),
                        hash: n,
                        maxFeePerGas: rY(this.maxFeePerGas),
                        maxPriorityFeePerGas: rY(this.maxPriorityFeePerGas),
                        maxFeePerBlobGas: rY(this.maxFeePerBlobGas),
                        nonce: o,
                        signature: u,
                        to: s,
                        index: r,
                        type: i,
                        value: rY(this.value)
                    }
                }
                async getBlock() {
                    let t = this.blockNumber;
                    if (null == t) {
                        let e = await this.getTransaction();
                        e && (t = e.blockNumber)
                    }
                    if (null == t) return null;
                    let e = this.provider.getBlock(t);
                    if (null == e) throw Error("TODO");
                    return e
                }
                async getTransaction() {
                    return this.provider.getTransaction(this.hash)
                }
                async confirmations() {
                    if (null == this.blockNumber) {
                        let {
                            tx: t,
                            blockNumber: e
                        } = await w({
                            tx: this.getTransaction(),
                            blockNumber: this.provider.getBlockNumber()
                        });
                        return null == t || null == t.blockNumber ? 0 : e - t.blockNumber + 1
                    }
                    return await this.provider.getBlockNumber() - this.blockNumber + 1
                }
                async wait(t, e) {
                    let r = null == t ? 1 : t,
                        n = null == e ? 0 : e,
                        i = this.#W,
                        s = -1,
                        a = -1 === i,
                        o = async () => {
                            if (a) return null;
                            let {
                                blockNumber: t,
                                nonce: e
                            } = await w({
                                blockNumber: this.provider.getBlockNumber(),
                                nonce: this.provider.getTransactionCount(this.from)
                            });
                            if (e < this.nonce) {
                                i = t;
                                return
                            }
                            if (a) return null;
                            let n = await this.getTransaction();
                            if (!n || null == n.blockNumber)
                                for (-1 === s && (s = i - 3) < this.#W && (s = this.#W); s <= t;) {
                                    if (a) return null;
                                    let e = await this.provider.getBlock(s, !0);
                                    if (null == e) break;
                                    for (let t of e)
                                        if (t === this.hash) return;
                                    for (let n = 0; n < e.length; n++) {
                                        let s = await e.getTransaction(n);
                                        if (s.from === this.from && s.nonce === this.nonce) {
                                            if (a) return null;
                                            let e = await this.provider.getTransactionReceipt(s.hash);
                                            if (null == e || t - e.blockNumber + 1 < r) return;
                                            let n = "replaced";
                                            s.data === this.data && s.to === this.to && s.value === this.value ? n = "repriced" : "0x" === s.data && s.from === s.to && s.value === rW && (n = "cancelled"), k(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                                cancelled: "replaced" === n || "cancelled" === n,
                                                reason: n,
                                                replacement: s.replaceableTransaction(i),
                                                hash: s.hash,
                                                receipt: e
                                            })
                                        }
                                    }
                                    s++
                                }
                        },
                        l = t => {
                            if (null == t || 0 !== t.status) return t;
                            k(!1, "transaction execution reverted", "CALL_EXCEPTION", {
                                action: "sendTransaction",
                                data: null,
                                reason: null,
                                invocation: null,
                                revert: null,
                                transaction: {
                                    to: t.to,
                                    from: t.from,
                                    data: ""
                                },
                                receipt: t
                            })
                        },
                        u = await this.provider.getTransactionReceipt(this.hash);
                    if (0 === r) return l(u);
                    if (u) {
                        if (await u.confirmations() >= r) return l(u)
                    } else if (await o(), 0 === r) return null;
                    let h = new Promise((t, e) => {
                        let s = [],
                            u = () => {
                                s.forEach(t => t())
                            };
                        if (s.push(() => {
                                a = !0
                            }), n > 0) {
                            let t = setTimeout(() => {
                                u(), e(P("wait for transaction timeout", "TIMEOUT"))
                            }, n);
                            s.push(() => {
                                clearTimeout(t)
                            })
                        }
                        let h = async n => {
                            if (await n.confirmations() >= r) {
                                u();
                                try {
                                    t(l(n))
                                } catch (t) {
                                    e(t)
                                }
                            }
                        };
                        if (s.push(() => {
                                this.provider.off(this.hash, h)
                            }), this.provider.on(this.hash, h), i >= 0) {
                            let t = async () => {
                                try {
                                    await o()
                                } catch (t) {
                                    if (E(t, "TRANSACTION_REPLACED")) {
                                        u(), e(t);
                                        return
                                    }
                                }
                                a || this.provider.once("block", t)
                            };
                            s.push(() => {
                                this.provider.off("block", t)
                            }), this.provider.once("block", t)
                        }
                    });
                    return await h
                }
                isMined() {
                    return null != this.blockHash
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                isCancun() {
                    return 3 === this.type
                }
                removedEvent() {
                    return k(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), r8(this)
                }
                reorderedEvent(t) {
                    return k(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), k(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
                        operation: "removeEvent()"
                    }), r4(this, t)
                }
                replaceableTransaction(t) {
                    C(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
                    let e = new r3(this, this.provider);
                    return e.#W = t, e
                }
            }

            function r4(t, e) {
                return {
                    orphan: "reorder-transaction",
                    tx: t,
                    other: e
                }
            }

            function r8(t) {
                return {
                    orphan: "drop-transaction",
                    tx: t
                }
            }
            class r5 {
                filter;
                emitter;#
                Z;
                constructor(t, e, r) {
                    this.#Z = e, A(this, {
                        emitter: t,
                        filter: r
                    })
                }
                async removeListener() {
                    null != this.#Z && await this.emitter.off(this.filter, this.#Z)
                }
            }
            class r6 extends r1 {
                interface;
                fragment;
                args;
                constructor(t, e, r) {
                    super(t, t.provider), A(this, {
                        args: e.decodeEventLog(r, t.data, t.topics),
                        fragment: r,
                        interface: e
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            class r9 extends r1 {
                error;
                constructor(t, e) {
                    super(t, t.provider), A(this, {
                        error: e
                    })
                }
            }
            class r7 extends r2 {#
                Y;
                constructor(t, e, r) {
                    super(r, e), this.#Y = t
                }
                get logs() {
                    return super.logs.map(t => {
                        let e = t.topics.length ? this.#Y.getEvent(t.topics[0]) : null;
                        if (e) try {
                            return new r6(t, this.#Y, e)
                        } catch (e) {
                            return new r9(t, e)
                        }
                        return t
                    })
                }
            }
            class nt extends r3 {#
                Y;
                constructor(t, e, r) {
                    super(r, e), this.#Y = t
                }
                async wait(t, e) {
                    let r = await super.wait(t, e);
                    return null == r ? null : new r7(this.#Y, this.provider, r)
                }
            }
            class ne extends r5 {
                log;
                constructor(t, e, r, n) {
                    super(t, e, r), A(this, {
                        log: n
                    })
                }
                async getBlock() {
                    return await this.log.getBlock()
                }
                async getTransaction() {
                    return await this.log.getTransaction()
                }
                async getTransactionReceipt() {
                    return await this.log.getTransactionReceipt()
                }
            }
            class nr extends ne {
                constructor(t, e, r, n, i) {
                    super(t, e, r, new r6(i, t.interface, n)), A(this, {
                        args: t.interface.decodeEventLog(n, this.log.data, this.log.topics),
                        fragment: n
                    })
                }
                get eventName() {
                    return this.fragment.name
                }
                get eventSignature() {
                    return this.fragment.format()
                }
            }
            let nn = BigInt(0);

            function ni(t) {
                return t && "function" == typeof t.call
            }

            function ns(t) {
                return t && "function" == typeof t.estimateGas
            }

            function na(t) {
                return t && "function" == typeof t.resolveName
            }

            function no(t) {
                return t && "function" == typeof t.sendTransaction
            }

            function nl(t) {
                if (null != t) {
                    if (na(t)) return t;
                    if (t.provider) return t.provider
                }
            }
            class nu {#
                X;
                fragment;
                constructor(t, e, r) {
                    if (A(this, {
                            fragment: e
                        }), e.inputs.length < r.length) throw Error("too many arguments");
                    let n = nh(t.runner, "resolveName"),
                        i = na(n) ? n : null;
                    this.#X = async function() {
                        let n = await Promise.all(e.inputs.map((t, e) => null == r[e] ? null : t.walkAsync(r[e], (t, e) => "address" === t ? Array.isArray(e) ? Promise.all(e.map(t => ru(t, i))) : ru(e, i) : e)));
                        return t.interface.encodeFilterTopics(e, n)
                    }()
                }
                getTopicFilter() {
                    return this.#X
                }
            }

            function nh(t, e) {
                return null == t ? null : "function" == typeof t[e] ? t : t.provider && "function" == typeof t.provider[e] ? t.provider : null
            }

            function nc(t) {
                return null == t ? null : t.provider || null
            }
            async function nd(t, e) {
                let r = t6.dereference(t, "overrides");
                C("object" == typeof r, "invalid overrides parameter", "overrides", t);
                let n = r$(r);
                return C(null == n.to || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), C(null == n.data || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n
            }
            async function nf(t, e, r) {
                let n = nh(t, "resolveName"),
                    i = na(n) ? n : null;
                return await Promise.all(e.map((t, e) => t.walkAsync(r[e], (t, e) => (e = t6.dereference(e, t), "address" === t) ? ru(e, i) : e)))
            }
            let np = Symbol.for("_ethersInternal_contract"),
                ng = new WeakMap;

            function nm(t) {
                return ng.get(t[np])
            }
            async function ny(t, e) {
                let r;
                let n = null;
                if (Array.isArray(e)) {
                    let n = function(e) {
                        if (I(e, 32)) return e;
                        let r = t.interface.getEvent(e);
                        return C(r, "unknown fragment", "name", e), r.topicHash
                    };
                    r = e.map(t => null == t ? null : Array.isArray(t) ? t.map(n) : n(t))
                } else "*" === e ? r = [null] : "string" == typeof e ? I(e, 32) ? r = [e] : (C(n = t.interface.getEvent(e), "unknown fragment", "event", e), r = [n.topicHash]) : e && "object" == typeof e && "getTopicFilter" in e && "function" == typeof e.getTopicFilter && e.fragment ? r = await e.getTopicFilter() : "fragment" in e ? r = [(n = e.fragment).topicHash] : C(!1, "unknown event name", "event", e);
                return {
                    fragment: n,
                    tag: (r = r.map(t => {
                        if (null == t) return null;
                        if (Array.isArray(t)) {
                            let e = Array.from(new Set(t.map(t => t.toLowerCase())).values());
                            return 1 === e.length ? e[0] : (e.sort(), e)
                        }
                        return t.toLowerCase()
                    })).map(t => null == t ? "null" : Array.isArray(t) ? t.join("|") : t).join("&"),
                    topics: r
                }
            }
            async function nv(t, e) {
                let {
                    subs: r
                } = nm(t);
                return r.get((await ny(t, e)).tag) || null
            }
            async function nw(t, e, r) {
                let n = nc(t.runner);
                k(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
                    operation: e
                });
                let {
                    fragment: i,
                    tag: s,
                    topics: a
                } = await ny(t, r), {
                    addr: o,
                    subs: l
                } = nm(t), u = l.get(s);
                if (!u) {
                    let e = {
                            address: o || t,
                            topics: a
                        },
                        h = e => {
                            let n = i;
                            if (null == n) try {
                                n = t.interface.getEvent(e.topics[0])
                            } catch (t) {}
                            if (n) {
                                let s = n,
                                    a = i ? t.interface.decodeEventLog(i, e.data, e.topics) : [];
                                nE(t, r, a, n => new nr(t, n, r, s, e))
                            } else nE(t, r, [], n => new ne(t, n, r, e))
                        },
                        c = [];
                    u = {
                        tag: s,
                        listeners: [],
                        start: () => {
                            c.length || c.push(n.on(e, h))
                        },
                        stop: async () => {
                            if (0 == c.length) return;
                            let t = c;
                            c = [], await Promise.all(t), n.off(e, h)
                        }
                    }, l.set(s, u)
                }
                return u
            }
            let nA = Promise.resolve();
            async function nb(t, e, r, n) {
                await nA;
                let i = await nv(t, e);
                if (!i) return !1;
                let s = i.listeners.length;
                return i.listeners = i.listeners.filter(({
                    listener: e,
                    once: i
                }) => {
                    let s = Array.from(r);
                    n && s.push(n(i ? null : e));
                    try {
                        e.call(t, ...s)
                    } catch (t) {}
                    return !i
                }), 0 === i.listeners.length && (i.stop(), nm(t).subs.delete(i.tag)), s > 0
            }
            async function nE(t, e, r, n) {
                try {
                    await nA
                } catch (t) {}
                let i = nb(t, e, r, n);
                return nA = i, await i
            }
            let nx = ["then"];
            class nP {
                target;
                interface;
                runner;
                filters;
                [np];
                fallback;
                constructor(t, e, r, n) {
                    var i;
                    let s;
                    C("string" == typeof t || ro(t), "invalid value for Contract target", "target", t), null == r && (r = null);
                    let a = rq.from(e);
                    A(this, {
                        target: t,
                        runner: r,
                        interface: a
                    }), Object.defineProperty(this, np, {
                        value: {}
                    });
                    let o = null,
                        l = null;
                    if (n) {
                        let t = nc(r);
                        l = new nt(this.interface, t, n)
                    }
                    let u = new Map;
                    if ("string" == typeof t) {
                        if (I(t)) o = t, s = Promise.resolve(t);
                        else {
                            let e = nh(r, "resolveName");
                            if (!na(e)) throw P("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                                operation: "resolveName"
                            });
                            s = e.resolveName(t).then(e => {
                                if (null == e) throw P("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                                    value: t
                                });
                                return nm(this).addr = e, e
                            })
                        }
                    } else s = t.getAddress().then(t => {
                        if (null == t) throw Error("TODO");
                        return nm(this).addr = t, t
                    });
                    return i = {
                        addrPromise: s,
                        addr: o,
                        deployTx: l,
                        subs: u
                    }, ng.set(this[np], i), A(this, {
                        filters: new Proxy({}, {
                            get: (t, e, r) => {
                                if ("symbol" == typeof e || nx.indexOf(e) >= 0) return Reflect.get(t, e, r);
                                try {
                                    return this.getEvent(e)
                                } catch (t) {
                                    if (!E(t, "INVALID_ARGUMENT") || "key" !== t.argument) throw t
                                }
                            },
                            has: (t, e) => nx.indexOf(e) >= 0 ? Reflect.has(t, e) : Reflect.has(t, e) || this.interface.hasEvent(String(e))
                        })
                    }), A(this, {
                        fallback: a.receive || a.fallback ? function(t) {
                            let e = async function(e) {
                                    let r = await nd(e, ["data"]);
                                    r.to = await t.getAddress(), r.from && (r.from = await ru(r.from, nl(t.runner)));
                                    let n = t.interface,
                                        i = K(r.value || nn, "overrides.value") === nn,
                                        s = "0x" === (r.data || "0x");
                                    return !n.fallback || n.fallback.payable || !n.receive || s || i || C(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", e), C(n.fallback || s, "cannot send data to receive-only contract", "overrides.data", r.data), C(n.receive || n.fallback && n.fallback.payable || i, "cannot send value to non-payable fallback", "overrides.value", r.value), C(n.fallback || s, "cannot send data to receive-only contract", "overrides.data", r.data), r
                                },
                                r = async function(r) {
                                    let n = nh(t.runner, "call");
                                    k(ni(n), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                                        operation: "call"
                                    });
                                    let i = await e(r);
                                    try {
                                        return await n.call(i)
                                    } catch (e) {
                                        if (x(e) && e.data) throw t.interface.makeError(e.data, i);
                                        throw e
                                    }
                                },
                                n = async function(r) {
                                    let n = t.runner;
                                    k(no(n), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                                        operation: "sendTransaction"
                                    });
                                    let i = await n.sendTransaction(await e(r)),
                                        s = nc(t.runner);
                                    return new nt(t.interface, s, i)
                                },
                                i = async function(r) {
                                    let n = nh(t.runner, "estimateGas");
                                    return k(ns(n), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                                        operation: "estimateGas"
                                    }), await n.estimateGas(await e(r))
                                },
                                s = async t => await n(t);
                            return A(s, {
                                _contract: t,
                                estimateGas: i,
                                populateTransaction: e,
                                send: n,
                                staticCall: r
                            }), s
                        }(this) : null
                    }), new Proxy(this, {
                        get: (t, e, r) => {
                            if ("symbol" == typeof e || e in t || nx.indexOf(e) >= 0) return Reflect.get(t, e, r);
                            try {
                                return t.getFunction(e)
                            } catch (t) {
                                if (!E(t, "INVALID_ARGUMENT") || "key" !== t.argument) throw t
                            }
                        },
                        has: (t, e) => "symbol" == typeof e || e in t || nx.indexOf(e) >= 0 ? Reflect.has(t, e) : t.interface.hasFunction(e)
                    })
                }
                connect(t) {
                    return new nP(this.target, this.interface, t)
                }
                attach(t) {
                    return new nP(t, this.interface, this.runner)
                }
                async getAddress() {
                    return await nm(this).addrPromise
                }
                async getDeployedCode() {
                    let t = nc(this.runner);
                    k(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "getDeployedCode"
                    });
                    let e = await t.getCode(await this.getAddress());
                    return "0x" === e ? null : e
                }
                async waitForDeployment() {
                    let t = this.deploymentTransaction();
                    if (t) return await t.wait(), this;
                    if (null != await this.getDeployedCode()) return this;
                    let e = nc(this.runner);
                    return k(null != e, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
                        operation: "waitForDeployment"
                    }), new Promise((t, r) => {
                        let n = async () => {
                            try {
                                let r = await this.getDeployedCode();
                                if (null != r) return t(this);
                                e.once("block", n)
                            } catch (t) {
                                r(t)
                            }
                        };
                        n()
                    })
                }
                deploymentTransaction() {
                    return nm(this).deployTx
                }
                getFunction(t) {
                    return "string" != typeof t && (t = t.format()),
                        function(t, e) {
                            let r = function(...r) {
                                    let n = t.interface.getFunction(e, r);
                                    return k(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e,
                                            args: r
                                        }
                                    }), n
                                },
                                n = async function(...e) {
                                    let n = r(...e),
                                        i = {};
                                    if (n.inputs.length + 1 === e.length && (i = await nd(e.pop())).from && (i.from = await ru(i.from, nl(t.runner))), n.inputs.length !== e.length) throw Error("internal error: fragment inputs doesn't match arguments; should not happen");
                                    let s = await nf(t.runner, n.inputs, e);
                                    return Object.assign({}, i, await w({
                                        to: t.getAddress(),
                                        data: t.interface.encodeFunctionData(n, s)
                                    }))
                                },
                                i = async function(...t) {
                                    let e = await o(...t);
                                    return 1 === e.length ? e[0] : e
                                },
                                s = async function(...e) {
                                    let r = t.runner;
                                    k(no(r), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                                        operation: "sendTransaction"
                                    });
                                    let i = await r.sendTransaction(await n(...e)),
                                        s = nc(t.runner);
                                    return new nt(t.interface, s, i)
                                },
                                a = async function(...e) {
                                    let r = nh(t.runner, "estimateGas");
                                    return k(ns(r), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                                        operation: "estimateGas"
                                    }), await r.estimateGas(await n(...e))
                                },
                                o = async function(...e) {
                                    let i = nh(t.runner, "call");
                                    k(ni(i), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                                        operation: "call"
                                    });
                                    let s = await n(...e),
                                        a = "0x";
                                    try {
                                        a = await i.call(s)
                                    } catch (e) {
                                        if (x(e) && e.data) throw t.interface.makeError(e.data, s);
                                        throw e
                                    }
                                    let o = r(...e);
                                    return t.interface.decodeFunctionResult(o, a)
                                },
                                l = async (...t) => r(...t).constant ? await i(...t) : await s(...t);
                            return A(l, {
                                name: t.interface.getFunctionName(e),
                                _contract: t,
                                _key: e,
                                getFragment: r,
                                estimateGas: a,
                                populateTransaction: n,
                                send: s,
                                staticCall: i,
                                staticCallResult: o
                            }), Object.defineProperty(l, "fragment", {
                                configurable: !1,
                                enumerable: !0,
                                get: () => {
                                    let r = t.interface.getFunction(e);
                                    return k(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e
                                        }
                                    }), r
                                }
                            }), l
                        }(this, t)
                }
                getEvent(t) {
                    return "string" != typeof t && (t = t.format()),
                        function(t, e) {
                            let r = function(...r) {
                                    let n = t.interface.getEvent(e, r);
                                    return k(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e,
                                            args: r
                                        }
                                    }), n
                                },
                                n = function(...e) {
                                    return new nu(t, r(...e), e)
                                };
                            return A(n, {
                                name: t.interface.getEventName(e),
                                _contract: t,
                                _key: e,
                                getFragment: r
                            }), Object.defineProperty(n, "fragment", {
                                configurable: !1,
                                enumerable: !0,
                                get: () => {
                                    let r = t.interface.getEvent(e);
                                    return k(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                                        operation: "fragment",
                                        info: {
                                            key: e
                                        }
                                    }), r
                                }
                            }), n
                        }(this, t)
                }
                async queryTransaction(t) {
                    throw Error("@TODO")
                }
                async queryFilter(t, e, r) {
                    null == e && (e = 0), null == r && (r = "latest");
                    let {
                        addr: n,
                        addrPromise: i
                    } = nm(this), s = n || await i, {
                        fragment: a,
                        topics: o
                    } = await ny(this, t), l = {
                        address: s,
                        topics: o,
                        fromBlock: e,
                        toBlock: r
                    }, u = nc(this.runner);
                    return k(u, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
                        operation: "queryFilter"
                    }), (await u.getLogs(l)).map(t => {
                        let e = a;
                        if (null == e) try {
                            e = this.interface.getEvent(t.topics[0])
                        } catch (t) {}
                        if (e) try {
                            return new r6(t, this.interface, e)
                        } catch (e) {
                            return new r9(t, e)
                        }
                        return new r1(t, u)
                    })
                }
                async on(t, e) {
                    let r = await nw(this, "on", t);
                    return r.listeners.push({
                        listener: e,
                        once: !1
                    }), r.start(), this
                }
                async once(t, e) {
                    let r = await nw(this, "once", t);
                    return r.listeners.push({
                        listener: e,
                        once: !0
                    }), r.start(), this
                }
                async emit(t, ...e) {
                    return await nE(this, t, e, null)
                }
                async listenerCount(t) {
                    if (t) {
                        let e = await nv(this, t);
                        return e ? e.listeners.length : 0
                    }
                    let {
                        subs: e
                    } = nm(this), r = 0;
                    for (let {
                            listeners: t
                        } of e.values()) r += t.length;
                    return r
                }
                async listeners(t) {
                    if (t) {
                        let e = await nv(this, t);
                        return e ? e.listeners.map(({
                            listener: t
                        }) => t) : []
                    }
                    let {
                        subs: e
                    } = nm(this), r = [];
                    for (let {
                            listeners: t
                        } of e.values()) r = r.concat(t.map(({
                        listener: t
                    }) => t));
                    return r
                }
                async off(t, e) {
                    let r = await nv(this, t);
                    if (!r) return this;
                    if (e) {
                        let t = r.listeners.map(({
                            listener: t
                        }) => t).indexOf(e);
                        t >= 0 && r.listeners.splice(t, 1)
                    }
                    return (null == e || 0 === r.listeners.length) && (r.stop(), nm(this).subs.delete(r.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        let e = await nv(this, t);
                        if (!e) return this;
                        e.stop(), nm(this).subs.delete(e.tag)
                    } else {
                        let {
                            subs: t
                        } = nm(this);
                        for (let {
                                tag: e,
                                stop: r
                            } of t.values()) r(), t.delete(e)
                    }
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return await this.off(t, e)
                }
                static buildClass(t) {
                    class e extends nP {
                        constructor(e, r = null) {
                            super(e, t, r)
                        }
                    }
                    return e
                }
                static from(t, e, r) {
                    return null == r && (r = null), new this(t, e, r)
                }
            }

            function nk() {
                return nP
            }
            class nC extends nk() {}
            let nT = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function nS(t) {
                var e;
                let r;
                return e = function(t) {
                    let e = 0;

                    function r() {
                        return t[e++] << 8 | t[e++]
                    }
                    let n = r(),
                        i = 1,
                        s = [0, 1];
                    for (let t = 1; t < n; t++) s.push(i += r());
                    let a = r(),
                        o = e;
                    e += a;
                    let l = 0,
                        u = 0;

                    function h() {
                        return 0 == l && (u = u << 8 | t[e++], l = 8), u >> --l & 1
                    }
                    let c = 2147483648 - 1,
                        d = 0;
                    for (let t = 0; t < 31; t++) d = d << 1 | h();
                    let f = [],
                        p = 0,
                        g = 2147483648;
                    for (;;) {
                        let t = Math.floor(((d - p + 1) * i - 1) / g),
                            e = 0,
                            r = n;
                        for (; r - e > 1;) {
                            let n = e + r >>> 1;
                            t < s[n] ? r = n : e = n
                        }
                        if (0 == e) break;
                        f.push(e);
                        let a = p + Math.floor(g * s[e] / i),
                            o = p + Math.floor(g * s[e + 1] / i) - 1;
                        for (;
                            ((a ^ o) & 1073741824) == 0;) d = d << 1 & c | h(), a = a << 1 & c, o = o << 1 & c | 1;
                        for (; a & ~o & 536870912;) d = 1073741824 & d | d << 1 & c >>> 1 | h(), a = a << 1 ^ 1073741824, o = (1073741824 ^ o) << 1 | 1073741825;
                        p = a, g = 1 + o - a
                    }
                    let m = n - 4;
                    return f.map(e => {
                        switch (e - m) {
                            case 3:
                                return m + 65792 + (t[o++] << 16 | t[o++] << 8 | t[o++]);
                            case 2:
                                return m + 256 + (t[o++] << 8 | t[o++]);
                            case 1:
                                return m + t[o++];
                            default:
                                return e - 1
                        }
                    })
                }(function(t) {
                    let e = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((t, r) => e[t.charCodeAt(0)] = r);
                    let r = t.length,
                        n = new Uint8Array(6 * r >> 3);
                    for (let i = 0, s = 0, a = 0, o = 0; i < r; i++) o = o << 6 | e[t.charCodeAt(i)], (a += 6) >= 8 && (n[s++] = o >> (a -= 8));
                    return n
                }(t)), r = 0, () => e[r++]
            }

            function nR(t, e = 0) {
                let r = [];
                for (;;) {
                    let n = t(),
                        i = t();
                    if (!i) break;
                    e += n;
                    for (let t = 0; t < i; t++) r.push(e + t);
                    e += i + 1
                }
                return r
            }

            function nB(t) {
                return nO(() => {
                    let e = nR(t);
                    if (e.length) return e
                })
            }

            function nN(t) {
                let e = [];
                for (;;) {
                    let r = t();
                    if (0 == r) break;
                    e.push(function(t, e) {
                        let r = 1 + e(),
                            n = e(),
                            i = nO(e);
                        return nI(i.length, 1 + t, e).flatMap((t, e) => {
                            let [s, ...a] = t;
                            return Array(i[e]).fill().map((t, e) => {
                                let i = e * n;
                                return [s + e * r, a.map(t => t + i)]
                            })
                        })
                    }(r, t))
                }
                for (;;) {
                    let r = t() - 1;
                    if (r < 0) break;
                    e.push(nI(1 + t(), 1 + r, t).map(t => [t[0], t.slice(1)]))
                }
                return e.flat()
            }

            function nO(t) {
                let e = [];
                for (;;) {
                    let r = t(e.length);
                    if (!r) break;
                    e.push(r)
                }
                return e
            }

            function nI(t, e, r) {
                let n = Array(t).fill().map(() => []);
                for (let i = 0; i < e; i++)(function(t, e) {
                    let r = Array(t);
                    for (let i = 0, s = 0; i < t; i++) {
                        var n;
                        r[i] = s += 1 & (n = e()) ? ~n >> 1 : n >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => n[e].push(t));
                return n
            }

            function nD(t) {
                return `{${t.toString(16).toUpperCase().padStart(2,"0")}}`
            }

            function nF(t) {
                let e = t.length;
                if (e < 4096) return String.fromCodePoint(...t);
                let r = [];
                for (let n = 0; n < e;) r.push(String.fromCodePoint(...t.slice(n, n += 4096)));
                return r.join("")
            }

            function nM(t, e) {
                let r = t.length,
                    n = r - e.length;
                for (let i = 0; 0 == n && i < r; i++) n = t[i] - e[i];
                return n
            }

            function nL(t) {
                return t >> 24 & 255
            }

            function nU(t) {
                return 16777215 & t
            }

            function nV(t) {
                return t >= 44032 && t < 55204
            }

            function nj(t) {
                n || function() {
                    let t = nS("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");
                    for (let [e, r] of (n = new Map(nB(t).flatMap((t, e) => t.map(t => [t, e + 1 << 24]))), i = new Set(nR(t)), s = new Map, a = new Map, nN(t))) {
                        if (!i.has(e) && 2 == r.length) {
                            let [t, n] = r, i = a.get(t);
                            i || (i = new Map, a.set(t, i)), i.set(n, e)
                        }
                        s.set(e, r.reverse())
                    }
                }();
                let e = [],
                    r = [],
                    o = !1;

                function l(t) {
                    let r = n.get(t);
                    r && (o = !0, t |= r), e.push(t)
                }
                for (let n of t)
                    for (;;) {
                        if (n < 128) e.push(n);
                        else if (nV(n)) {
                            let t = n - 44032,
                                e = t / 588 | 0,
                                r = t % 588 / 28 | 0,
                                i = t % 28;
                            l(4352 + e), l(4449 + r), i > 0 && l(4519 + i)
                        } else {
                            let t = s.get(n);
                            t ? r.push(...t) : l(n)
                        }
                        if (!r.length) break;
                        n = r.pop()
                    }
                if (o && e.length > 1) {
                    let t = nL(e[0]);
                    for (let r = 1; r < e.length; r++) {
                        let n = nL(e[r]);
                        if (0 == n || t <= n) {
                            t = n;
                            continue
                        }
                        let i = r - 1;
                        for (;;) {
                            let r = e[i + 1];
                            if (e[i + 1] = e[i], e[i] = r, !i || (t = nL(e[--i])) <= n) break
                        }
                        t = nL(e[r])
                    }
                }
                return e
            }

            function nG(t) {
                return function(t) {
                    let e = [],
                        r = [],
                        n = -1,
                        i = 0;
                    for (let s of t) {
                        let t = nL(s),
                            o = nU(s);
                        if (-1 == n) 0 == t ? n = o : e.push(o);
                        else if (i > 0 && i >= t) 0 == t ? (e.push(n, ...r), r.length = 0, n = o) : r.push(o), i = t;
                        else {
                            let s = function(t, e) {
                                if (t >= 4352 && t < 4371 && e >= 4449 && e < 4470) return 44032 + (t - 4352) * 588 + (e - 4449) * 28;
                                if (nV(t) && e > 4519 && e < 4547 && (t - 44032) % 28 == 0) return t + (e - 4519); {
                                    let r = a.get(t);
                                    return r && (r = r.get(e)) ? r : -1
                                }
                            }(n, o);
                            s >= 0 ? n = s : 0 == i && 0 == t ? (e.push(n), n = o) : (r.push(o), i = t)
                        }
                    }
                    return n >= 0 && e.push(n, ...r), e
                }(nj(t))
            }
            let nH = t => Array.from(t);

            function nQ(t, e) {
                return t.P.has(e) || t.Q.has(e)
            }
            class nz extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function nJ() {
                let t, e;
                if (o) return;
                let r = nS("AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI"),
                    n = () => nR(r),
                    i = () => new Set(n()),
                    s = (t, e) => e.forEach(e => t.add(e));
                o = new Map(nN(r)), l = i(), u = n(), h = new Set(n().map(t => u[t])), u = new Set(u), c = i(), i();
                let a = nB(r),
                    v = r(),
                    w = () => {
                        let t = new Set;
                        return n().forEach(e => s(t, a[e])), s(t, n()), t
                    };
                d = nO(t => {
                    let e = nO(r).map(t => t + 96);
                    if (e.length) {
                        let n = t >= v;
                        return e[0] -= 32, e = nF(e), n && (e = `Restricted[${e}]`), {
                            N: e,
                            P: w(),
                            Q: w(),
                            M: !r(),
                            R: n
                        }
                    }
                }), f = i(), p = new Map;
                let A = n().concat(nH(f)).sort((t, e) => t - e);
                for (let {
                        V: t,
                        M: e
                    } of (A.forEach((t, e) => {
                        let n = r(),
                            i = A[e] = n ? A[e - n] : {
                                V: [],
                                M: new Map
                            };
                        i.V.push(t), f.has(t) || p.set(t, i)
                    }), new Set(p.values()))) {
                    let r = [];
                    for (let e of t) {
                        let t = d.filter(t => nQ(t, e)),
                            n = r.find(({
                                G: e
                            }) => t.some(t => e.has(t)));
                        n || (n = {
                            G: new Set,
                            V: []
                        }, r.push(n)), n.V.push(e), s(n.G, t)
                    }
                    let n = r.flatMap(t => nH(t.G));
                    for (let {
                            G: t,
                            V: i
                        } of r) {
                        let r = new Set(n.filter(e => !t.has(e)));
                        for (let t of i) e.set(t, r)
                    }
                }
                g = new Set;
                let b = new Set,
                    E = t => g.has(t) ? b.add(t) : g.add(t);
                for (let t of d) {
                    for (let e of t.P) E(e);
                    for (let e of t.Q) E(e)
                }
                for (let t of g) p.has(t) || b.has(t) || p.set(t, 1);
                for (let n of (s(g, nj(g).map(nU)), m = (t = [], e = nR(r), function e({
                        S: r,
                        B: n
                    }, i, s) {
                        if (!(4 & r) || s !== i[i.length - 1])
                            for (let a of (2 & r && (s = i[i.length - 1]), 1 & r && t.push(i), n))
                                for (let t of a.Q) e(a, [...i, t], s)
                    }(function t(n) {
                        return {
                            S: r(),
                            B: nO(() => {
                                let n = nR(r).map(t => e[t]);
                                if (n.length) return t(n)
                            }),
                            Q: n
                        }
                    }([]), []), t).map(t => nz.from(t)).sort(nM), y = new Map, m)) {
                    let t = [y];
                    for (let e of n) {
                        let r = t.map(t => {
                            let r = t.get(e);
                            return r || (r = new Map, t.set(e, r)), r
                        });
                        65039 === e ? t.push(...r) : t = r
                    }
                    for (let e of t) e.V = n
                }
            }

            function nK(t) {
                return (nW(t) ? "" : `${n_(nq([t]))} `) + nD(t)
            }

            function n_(t) {
                return `"${t}"\u200E`
            }

            function nq(t, e = 1 / 0, r = nD) {
                var n;
                let i = [];
                n = t[0], nJ(), u.has(n) && i.push("◌"), t.length > e && (e >>= 1, t = [...t.slice(0, e), 8230, ...t.slice(-e)]);
                let s = 0,
                    a = t.length;
                for (let e = 0; e < a; e++) {
                    let n = t[e];
                    nW(n) && (i.push(nF(t.slice(s, e))), i.push(r(n)), s = e + 1)
                }
                return i.push(nF(t.slice(s, a))), i.join("")
            }

            function nW(t) {
                return nJ(), c.has(t)
            }

            function nZ(t) {
                return Error(`disallowed character: ${nK(t)}`)
            }

            function nY(t, e) {
                let r = nK(e),
                    n = d.find(t => t.P.has(e));
                return n && (r = `${n.N} ${r}`), Error(`illegal mixture: ${t.N} + ${r}`)
            }

            function nX(t) {
                return Error(`illegal placement: ${t}`)
            }

            function n$(t) {
                return t.filter(t => 65039 != t)
            }
            let n0 = new Uint8Array(32);

            function n1(t) {
                return C(0 !== t.length, "invalid ENS name; empty component", "comp", t), t
            }

            function n2(t) {
                let e = eg(function(t) {
                        try {
                            var e;
                            if (0 === t.length) throw Error("empty label");
                            return (e = function(t, e, r) {
                                if (!t) return [];
                                nJ();
                                let n = 0;
                                return t.split(".").map(t => {
                                    let i = function(t) {
                                            let e = [];
                                            for (let r = 0, n = t.length; r < n;) {
                                                let n = t.codePointAt(r);
                                                r += n < 65536 ? 1 : 2, e.push(n)
                                            }
                                            return e
                                        }(t),
                                        s = {
                                            input: i,
                                            offset: n
                                        };
                                    n += i.length + 1;
                                    try {
                                        let t, n = s.tokens = function(t, e, r) {
                                                let n = [],
                                                    i = [];
                                                for (t = t.slice().reverse(); t.length;) {
                                                    let s = function(t, e) {
                                                        let r, n = y,
                                                            i = t.length;
                                                        for (; i && (n = n.get(t[--i]));) {
                                                            let {
                                                                V: e
                                                            } = n;
                                                            e && (r = e, t.length = i)
                                                        }
                                                        return r
                                                    }(t);
                                                    if (s) i.length && (n.push(e(i)), i = []), n.push(r(s));
                                                    else {
                                                        let e = t.pop();
                                                        if (g.has(e)) i.push(e);
                                                        else {
                                                            let t = o.get(e);
                                                            if (t) i.push(...t);
                                                            else if (!l.has(e)) throw nZ(e)
                                                        }
                                                    }
                                                }
                                                return i.length && n.push(e(i)), n
                                            }(i, e, r),
                                            a = n.length;
                                        if (!a) throw Error("empty label");
                                        let c = s.output = n.flat();
                                        if (function(t) {
                                                for (let e = t.lastIndexOf(95); e > 0;)
                                                    if (95 !== t[--e]) throw Error("underscore allowed only at start")
                                            }(c), !(s.emoji = a > 1 || n[0].is_emoji) && c.every(t => t < 128))(function(t) {
                                            if (t.length >= 4 && 45 == t[2] && 45 == t[3]) throw Error(`invalid label extension: "${nF(t.slice(0,4))}"`)
                                        })(c), t = "ASCII";
                                        else {
                                            let e = n.flatMap(t => t.is_emoji ? [] : t);
                                            if (e.length) {
                                                if (u.has(c[0])) throw nX("leading combining mark");
                                                for (let t = 1; t < a; t++) {
                                                    let e = n[t];
                                                    if (!e.is_emoji && u.has(e[0])) throw nX(`emoji + combining mark: "${nF(n[t-1])} + ${nq([e[0]])}"`)
                                                }! function(t) {
                                                    let e = t[0],
                                                        r = nT.get(e);
                                                    if (r) throw nX(`leading ${r}`);
                                                    let n = t.length,
                                                        i = -1;
                                                    for (let s = 1; s < n; s++) {
                                                        e = t[s];
                                                        let n = nT.get(e);
                                                        if (n) {
                                                            if (i == s) throw nX(`${r} + ${n}`);
                                                            i = s + 1, r = n
                                                        }
                                                    }
                                                    if (i == n) throw nX(`trailing ${r}`)
                                                }(c);
                                                let r = nH(new Set(e)),
                                                    [i] = function(t) {
                                                        let e = d;
                                                        for (let r of t) {
                                                            let t = e.filter(t => nQ(t, r));
                                                            if (!t.length) {
                                                                if (d.some(t => nQ(t, r))) throw nY(e[0], r);
                                                                throw nZ(r)
                                                            }
                                                            if (e = t, 1 == t.length) break
                                                        }
                                                        return e
                                                    }(r);
                                                (function(t, e) {
                                                    for (let r of e)
                                                        if (!nQ(t, r)) throw nY(t, r);
                                                    if (t.M) {
                                                        let t = nj(e).map(nU);
                                                        for (let e = 1, r = t.length; e < r; e++)
                                                            if (h.has(t[e])) {
                                                                let n = e + 1;
                                                                for (let i; n < r && h.has(i = t[n]); n++)
                                                                    for (let r = e; r < n; r++)
                                                                        if (t[r] == i) throw Error(`duplicate non-spacing marks: ${nK(i)}`);
                                                                if (n - e > 4) throw Error(`excessive non-spacing marks: ${n_(nq(t.slice(e-1,n)))} (${n-e}/4)`);
                                                                e = n
                                                            }
                                                    }
                                                })(i, e),
                                                function(t, e) {
                                                    let r;
                                                    let n = [];
                                                    for (let t of e) {
                                                        let e = p.get(t);
                                                        if (1 === e) return;
                                                        if (e) {
                                                            let n = e.M.get(t);
                                                            if (!(r = r ? r.filter(t => n.has(t)) : nH(n)).length) return
                                                        } else n.push(t)
                                                    }
                                                    if (r) {
                                                        for (let e of r)
                                                            if (n.every(t => nQ(e, t))) throw Error(`whole-script confusable: ${t.N}/${e.N}`)
                                                    }
                                                }(i, r), t = i.N
                                            } else t = "Emoji"
                                        }
                                        s.type = t
                                    } catch (t) {
                                        s.error = t
                                    }
                                    return s
                                })
                            }(t, nG, n$)).map(({
                                input: t,
                                error: r,
                                output: n
                            }) => {
                                if (r) {
                                    let n = r.message;
                                    throw Error(1 == e.length ? n : `Invalid label ${n_(nq(t,63))}: ${n}`)
                                }
                                return nF(n)
                            }).join(".")
                        } catch (e) {
                            C(!1, `invalid ENS name (${e.message})`, "name", t)
                        }
                    }(t)),
                    r = [];
                if (0 === t.length) return r;
                let n = 0;
                for (let t = 0; t < e.length; t++) 46 === e[t] && (r.push(n1(e.slice(n, t))), n = t + 1);
                return C(n < e.length, "invalid ENS name; empty component", "name", t), r.push(n1(e.slice(n))), r
            }

            function n3(t) {
                C("string" == typeof t, "invalid ENS name; not a string", "name", t), C(t.length, "invalid ENS name (empty label)", "name", t);
                let e = n0,
                    r = n2(t);
                for (; r.length;) e = tZ(L([e, tZ(r.pop())]));
                return M(e)
            }
            n0.fill(0);
            class n4 extends tR {
                constructor(t, e, r, n) {
                    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = tC(this.buffer)
                }
                update(t) {
                    tf(this);
                    let {
                        view: e,
                        buffer: r,
                        blockLen: n
                    } = this, i = (t = tS(t)).length;
                    for (let s = 0; s < i;) {
                        let a = Math.min(n - this.pos, i - s);
                        if (a === n) {
                            let e = tC(t);
                            for (; n <= i - s; s += n) this.process(e, s);
                            continue
                        }
                        r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === n && (this.process(e, 0), this.pos = 0)
                    }
                    return this.length += t.length, this.roundClean(), this
                }
                digestInto(t) {
                    tf(this), tp(t, this), this.finished = !0;
                    let {
                        buffer: e,
                        view: r,
                        blockLen: n,
                        isLE: i
                    } = this, {
                        pos: s
                    } = this;
                    e[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > n - s && (this.process(r, 0), s = 0);
                    for (let t = s; t < n; t++) e[t] = 0;
                    ! function(t, e, r, n) {
                        if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, n);
                        let i = BigInt(32),
                            s = BigInt(4294967295),
                            a = Number(r >> i & s),
                            o = Number(r & s),
                            l = n ? 4 : 0,
                            u = n ? 0 : 4;
                        t.setUint32(e + l, a, n), t.setUint32(e + u, o, n)
                    }(r, n - 8, BigInt(8 * this.length), i), this.process(r, 0);
                    let a = tC(t),
                        o = this.outputLen;
                    if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = o / 4,
                        u = this.get();
                    if (l > u.length) throw Error("_sha2: outputLen bigger than state");
                    for (let t = 0; t < l; t++) a.setUint32(4 * t, u[t], i)
                }
                digest() {
                    let {
                        buffer: t,
                        outputLen: e
                    } = this;
                    this.digestInto(t);
                    let r = t.slice(0, e);
                    return this.destroy(), r
                }
                _cloneInto(t) {
                    t || (t = new this.constructor), t.set(...this.get());
                    let {
                        blockLen: e,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: s,
                        pos: a
                    } = this;
                    return t.length = n, t.pos = a, t.finished = i, t.destroyed = s, n % e && t.buffer.set(r), t
                }
            }
            let n8 = (t, e, r) => t & e ^ ~t & r,
                n5 = (t, e, r) => t & e ^ t & r ^ e & r,
                n6 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                n9 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                n7 = new Uint32Array(64);
            class it extends n4 {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | n9[0], this.B = 0 | n9[1], this.C = 0 | n9[2], this.D = 0 | n9[3], this.E = 0 | n9[4], this.F = 0 | n9[5], this.G = 0 | n9[6], this.H = 0 | n9[7]
                }
                get() {
                    let {
                        A: t,
                        B: e,
                        C: r,
                        D: n,
                        E: i,
                        F: s,
                        G: a,
                        H: o
                    } = this;
                    return [t, e, r, n, i, s, a, o]
                }
                set(t, e, r, n, i, s, a, o) {
                    this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | s, this.G = 0 | a, this.H = 0 | o
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) n7[r] = t.getUint32(e, !1);
                    for (let t = 16; t < 64; t++) {
                        let e = n7[t - 15],
                            r = n7[t - 2],
                            n = tT(e, 7) ^ tT(e, 18) ^ e >>> 3,
                            i = tT(r, 17) ^ tT(r, 19) ^ r >>> 10;
                        n7[t] = i + n7[t - 7] + n + n7[t - 16] | 0
                    }
                    let {
                        A: r,
                        B: n,
                        C: i,
                        D: s,
                        E: a,
                        F: o,
                        G: l,
                        H: u
                    } = this;
                    for (let t = 0; t < 64; t++) {
                        let e = u + (tT(a, 6) ^ tT(a, 11) ^ tT(a, 25)) + n8(a, o, l) + n6[t] + n7[t] | 0,
                            h = (tT(r, 2) ^ tT(r, 13) ^ tT(r, 22)) + n5(r, n, i) | 0;
                        u = l, l = o, o = a, a = s + e | 0, s = i, i = n, n = r, r = e + h | 0
                    }
                    r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, o = o + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(r, n, i, s, a, o, l, u)
                }
                roundClean() {
                    n7.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let ie = tB(() => new it),
                [ir, ii] = tE.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
                is = new Uint32Array(80),
                ia = new Uint32Array(80);
            class io extends n4 {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    let {
                        Ah: t,
                        Al: e,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: s,
                        Dh: a,
                        Dl: o,
                        Eh: l,
                        El: u,
                        Fh: h,
                        Fl: c,
                        Gh: d,
                        Gl: f,
                        Hh: p,
                        Hl: g
                    } = this;
                    return [t, e, r, n, i, s, a, o, l, u, h, c, d, f, p, g]
                }
                set(t, e, r, n, i, s, a, o, l, u, h, c, d, f, p, g) {
                    this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | s, this.Dh = 0 | a, this.Dl = 0 | o, this.Eh = 0 | l, this.El = 0 | u, this.Fh = 0 | h, this.Fl = 0 | c, this.Gh = 0 | d, this.Gl = 0 | f, this.Hh = 0 | p, this.Hl = 0 | g
                }
                process(t, e) {
                    for (let r = 0; r < 16; r++, e += 4) is[r] = t.getUint32(e), ia[r] = t.getUint32(e += 4);
                    for (let t = 16; t < 80; t++) {
                        let e = 0 | is[t - 15],
                            r = 0 | ia[t - 15],
                            n = tE.rotrSH(e, r, 1) ^ tE.rotrSH(e, r, 8) ^ tE.shrSH(e, r, 7),
                            i = tE.rotrSL(e, r, 1) ^ tE.rotrSL(e, r, 8) ^ tE.shrSL(e, r, 7),
                            s = 0 | is[t - 2],
                            a = 0 | ia[t - 2],
                            o = tE.rotrSH(s, a, 19) ^ tE.rotrBH(s, a, 61) ^ tE.shrSH(s, a, 6),
                            l = tE.rotrSL(s, a, 19) ^ tE.rotrBL(s, a, 61) ^ tE.shrSL(s, a, 6),
                            u = tE.add4L(i, l, ia[t - 7], ia[t - 16]),
                            h = tE.add4H(u, n, o, is[t - 7], is[t - 16]);
                        is[t] = 0 | h, ia[t] = 0 | u
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: i,
                        Bl: s,
                        Ch: a,
                        Cl: o,
                        Dh: l,
                        Dl: u,
                        Eh: h,
                        El: c,
                        Fh: d,
                        Fl: f,
                        Gh: p,
                        Gl: g,
                        Hh: m,
                        Hl: y
                    } = this;
                    for (let t = 0; t < 80; t++) {
                        let e = tE.rotrSH(h, c, 14) ^ tE.rotrSH(h, c, 18) ^ tE.rotrBH(h, c, 41),
                            v = tE.rotrSL(h, c, 14) ^ tE.rotrSL(h, c, 18) ^ tE.rotrBL(h, c, 41),
                            w = h & d ^ ~h & p,
                            A = c & f ^ ~c & g,
                            b = tE.add5L(y, v, A, ii[t], ia[t]),
                            E = tE.add5H(b, m, e, w, ir[t], is[t]),
                            x = 0 | b,
                            P = tE.rotrSH(r, n, 28) ^ tE.rotrBH(r, n, 34) ^ tE.rotrBH(r, n, 39),
                            k = tE.rotrSL(r, n, 28) ^ tE.rotrBL(r, n, 34) ^ tE.rotrBL(r, n, 39),
                            C = r & i ^ r & a ^ i & a,
                            T = n & s ^ n & o ^ s & o;
                        m = 0 | p, y = 0 | g, p = 0 | d, g = 0 | f, d = 0 | h, f = 0 | c, ({
                            h: h,
                            l: c
                        } = tE.add(0 | l, 0 | u, 0 | E, 0 | x)), l = 0 | a, u = 0 | o, a = 0 | i, o = 0 | s, i = 0 | r, s = 0 | n;
                        let S = tE.add3L(x, k, T);
                        r = tE.add3H(S, E, P, C), n = 0 | S
                    }({
                        h: r,
                        l: n
                    } = tE.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: i,
                        l: s
                    } = tE.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)), ({
                        h: a,
                        l: o
                    } = tE.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)), ({
                        h: l,
                        l: u
                    } = tE.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | u)), ({
                        h: h,
                        l: c
                    } = tE.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | c)), ({
                        h: d,
                        l: f
                    } = tE.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | f)), ({
                        h: p,
                        l: g
                    } = tE.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)), ({
                        h: m,
                        l: y
                    } = tE.add(0 | this.Hh, 0 | this.Hl, 0 | m, 0 | y)), this.set(r, n, i, s, a, o, l, u, h, c, d, f, p, g, m, y)
                }
                roundClean() {
                    is.fill(0), ia.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            let il = tB(() => new io),
                iu = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if ("undefined" != typeof global) return global;
                    throw Error("unable to locate global object")
                }();

            function ih(t) {
                switch (t) {
                    case "sha256":
                        return ie.create();
                    case "sha512":
                        return il.create()
                }
                C(!1, "invalid hashing algorithm name", "algorithm", t)
            }
            iu.crypto || iu.msCrypto;
            let ic = function(t) {
                    return ih("sha256").update(t).digest()
                },
                id = function(t) {
                    return ih("sha512").update(t).digest()
                },
                ip = ic,
                ig = id,
                im = !1,
                iy = !1;

            function iv(t) {
                let e = N(t, "data");
                return M(ip(e))
            }

            function iw(t) {
                let e = N(t, "data");
                return M(ig(e))
            }
            iv._ = ic, iv.lock = function() {
                im = !0
            }, iv.register = function(t) {
                if (im) throw Error("sha256 is locked");
                ip = t
            }, Object.freeze(iv), iw._ = id, iw.lock = function() {
                iy = !0
            }, iw.register = function(t) {
                if (iy) throw Error("sha512 is locked");
                ig = t
            }, Object.freeze(iv);
            let iA = "0x0000000000000000000000000000000000000000000000000000000000000000",
                ib = BigInt(0),
                iE = BigInt(1),
                ix = BigInt(2),
                iP = BigInt(27),
                ik = BigInt(28),
                iC = BigInt(35),
                iT = {};
            class iS {#
                $;#
                tt;#
                te;#
                tr;
                get r() {
                    return this.#$
                }
                set r(t) {
                    C(32 === U(t), "invalid r", "value", t), this.#$ = M(t)
                }
                get s() {
                    return this.#tt
                }
                set s(t) {
                    C(32 === U(t), "invalid s", "value", t);
                    let e = M(t);
                    C(8 > parseInt(e.substring(0, 3)), "non-canonical s", "value", e), this.#tt = e
                }
                get v() {
                    return this.#te
                }
                set v(t) {
                    let e = Z(t, "value");
                    C(27 === e || 28 === e, "invalid v", "v", t), this.#te = e
                }
                get networkV() {
                    return this.#tr
                }
                get legacyChainId() {
                    let t = this.networkV;
                    return null == t ? null : iS.getChainId(t)
                }
                get yParity() {
                    return 27 === this.v ? 0 : 1
                }
                get yParityAndS() {
                    let t = N(this.s);
                    return this.yParity && (t[0] |= 128), M(t)
                }
                get compactSerialized() {
                    return L([this.r, this.yParityAndS])
                }
                get serialized() {
                    return L([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
                }
                constructor(t, e, r, n) {
                    R(t, iT, "Signature"), this.#$ = e, this.#tt = r, this.#te = n, this.#tr = null
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
                }
                clone() {
                    let t = new iS(iT, this.r, this.s, this.v);
                    return this.networkV && (t.#tr = this.networkV), t
                }
                toJSON() {
                    let t = this.networkV;
                    return {
                        _type: "signature",
                        networkV: null != t ? t.toString() : null,
                        r: this.r,
                        s: this.s,
                        v: this.v
                    }
                }
                static getChainId(t) {
                    let e = K(t, "v");
                    return e == iP || e == ik ? ib : (C(e >= iC, "invalid EIP-155 v", "v", t), (e - iC) / ix)
                }
                static getChainIdV(t, e) {
                    return K(t) * ix + BigInt(35 + e - 27)
                }
                static getNormalizedV(t) {
                    let e = K(t);
                    return e === ib || e === iP ? 27 : e === iE || e === ik ? 28 : (C(e >= iC, "invalid v", "v", t), e & iE ? 27 : 28)
                }
                static from(t) {
                    function e(e, r) {
                        C(e, r, "signature", t)
                    }
                    if (null == t) return new iS(iT, iA, iA, 27);
                    if ("string" == typeof t) {
                        let r = N(t, "signature");
                        if (64 === r.length) {
                            let t = M(r.slice(0, 32)),
                                e = r.slice(32, 64),
                                n = 128 & e[0] ? 28 : 27;
                            return e[0] &= 127, new iS(iT, t, M(e), n)
                        }
                        if (65 === r.length) {
                            let t = M(r.slice(0, 32)),
                                n = r.slice(32, 64);
                            e((128 & n[0]) == 0, "non-canonical s");
                            let i = iS.getNormalizedV(r[64]);
                            return new iS(iT, t, M(n), i)
                        }
                        e(!1, "invalid raw signature length")
                    }
                    if (t instanceof iS) return t.clone();
                    let r = t.r;
                    e(null != r, "missing r");
                    let n = G(X(r), 32),
                        i = function(t, r) {
                            if (null != t) return G(X(t), 32);
                            if (null != r) {
                                e(I(r, 32), "invalid yParityAndS");
                                let t = N(r);
                                return t[0] &= 127, M(t)
                            }
                            e(!1, "missing s")
                        }(t.s, t.yParityAndS);
                    e((128 & N(i)[0]) == 0, "non-canonical s");
                    let {
                        networkV: s,
                        v: a
                    } = function(t, r, n) {
                        if (null != t) {
                            let e = K(t);
                            return {
                                networkV: e >= iC ? e : void 0,
                                v: iS.getNormalizedV(e)
                            }
                        }
                        if (null != r) return e(I(r, 32), "invalid yParityAndS"), {
                            v: 128 & N(r)[0] ? 28 : 27
                        };
                        if (null != n) {
                            switch (Z(n, "sig.yParity")) {
                                case 0:
                                    return {
                                        v: 27
                                    };
                                case 1:
                                    return {
                                        v: 28
                                    }
                            }
                            e(!1, "invalid yParity")
                        }
                        e(!1, "missing v")
                    }(t.v, t.yParityAndS, t.yParity), o = new iS(iT, n, i, a);
                    return s && (o.#tr = s), e(null == t.yParity || Z(t.yParity, "sig.yParity") === o.yParity, "yParity mismatch"), e(null == t.yParityAndS || t.yParityAndS === o.yParityAndS, "yParityAndS mismatch"), o
                }
            }
            BigInt(0);
            let iR = BigInt(1),
                iB = BigInt(2),
                iN = t => t instanceof Uint8Array,
                iO = Array.from({
                    length: 256
                }, (t, e) => e.toString(16).padStart(2, "0"));

            function iI(t) {
                if (!iN(t)) throw Error("Uint8Array expected");
                let e = "";
                for (let r = 0; r < t.length; r++) e += iO[t[r]];
                return e
            }

            function iD(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                return BigInt("" === t ? "0" : `0x${t}`)
            }

            function iF(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                let e = t.length;
                if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
                let r = new Uint8Array(e / 2);
                for (let e = 0; e < r.length; e++) {
                    let n = 2 * e,
                        i = Number.parseInt(t.slice(n, n + 2), 16);
                    if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
                    r[e] = i
                }
                return r
            }

            function iM(t) {
                return iD(iI(t))
            }

            function iL(t) {
                if (!iN(t)) throw Error("Uint8Array expected");
                return iD(iI(Uint8Array.from(t).reverse()))
            }

            function iU(t, e) {
                return iF(t.toString(16).padStart(2 * e, "0"))
            }

            function iV(t, e) {
                return iU(t, e).reverse()
            }

            function ij(t, e, r) {
                let n;
                if ("string" == typeof e) try {
                        n = iF(e)
                    } catch (r) {
                        throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
                    } else if (iN(e)) n = Uint8Array.from(e);
                    else throw Error(`${t} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${t} expected ${r} bytes, got ${i}`);
                return n
            }

            function iG(...t) {
                let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                    r = 0;
                return t.forEach(t => {
                    if (!iN(t)) throw Error("Uint8Array expected");
                    e.set(t, r), r += t.length
                }), e
            }
            let iH = t => (iB << BigInt(t - 1)) - iR,
                iQ = t => new Uint8Array(t),
                iz = t => Uint8Array.from(t);

            function iJ(t, e, r) {
                if ("number" != typeof t || t < 2) throw Error("hashLen must be a number");
                if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = iQ(t),
                    i = iQ(t),
                    s = 0,
                    a = () => {
                        n.fill(1), i.fill(0), s = 0
                    },
                    o = (...t) => r(i, n, ...t),
                    l = (t = iQ()) => {
                        i = o(iz([0]), t), n = o(), 0 !== t.length && (i = o(iz([1]), t), n = o())
                    },
                    u = () => {
                        if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let t = 0,
                            r = [];
                        for (; t < e;) {
                            let e = (n = o()).slice();
                            r.push(e), t += n.length
                        }
                        return iG(...r)
                    };
                return (t, e) => {
                    let r;
                    for (a(), l(t); !(r = e(u()));) l();
                    return a(), r
                }
            }
            let iK = {
                bigint: t => "bigint" == typeof t,
                function: t => "function" == typeof t,
                boolean: t => "boolean" == typeof t,
                string: t => "string" == typeof t,
                stringOrUint8Array: t => "string" == typeof t || t instanceof Uint8Array,
                isSafeInteger: t => Number.isSafeInteger(t),
                array: t => Array.isArray(t),
                field: (t, e) => e.Fp.isValid(t),
                hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
            };

            function i_(t, e, r = {}) {
                let n = (e, r, n) => {
                    let i = iK[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let s = t[e];
                    if ((!n || void 0 !== s) && !i(s, t)) throw Error(`Invalid param ${String(e)}=${s} (${typeof s}), expected ${r}`)
                };
                for (let [t, r] of Object.entries(e)) n(t, r, !1);
                for (let [t, e] of Object.entries(r)) n(t, e, !0);
                return t
            }
            let iq = BigInt(0),
                iW = BigInt(1),
                iZ = BigInt(2),
                iY = BigInt(3),
                iX = BigInt(4),
                i$ = BigInt(5),
                i0 = BigInt(8);

            function i1(t, e) {
                let r = t % e;
                return r >= iq ? r : e + r
            }

            function i2(t, e, r) {
                let n = t;
                for (; e-- > iq;) n *= n, n %= r;
                return n
            }

            function i3(t, e) {
                if (t === iq || e <= iq) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = i1(t, e),
                    n = e,
                    i = iq,
                    s = iW,
                    a = iW,
                    o = iq;
                for (; r !== iq;) {
                    let t = n / r,
                        e = n % r,
                        l = i - a * t,
                        u = s - o * t;
                    n = r, r = e, i = a, s = o, a = l, o = u
                }
                if (n !== iW) throw Error("invert: does not exist");
                return i1(i, e)
            }
            BigInt(9), BigInt(16);
            let i4 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function i8(t, e) {
                let r = void 0 !== e ? e : t.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function i5(t) {
                if ("bigint" != typeof t) throw Error("field order must be bigint");
                return Math.ceil(t.toString(2).length / 8)
            }

            function i6(t) {
                let e = i5(t);
                return e + Math.ceil(e / 2)
            }
            class i9 extends tR {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1,
                        function(t) {
                            if ("function" != typeof t || "function" != typeof t.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                            tc(t.outputLen), tc(t.blockLen)
                        }(t);
                    let r = tS(e);
                    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        i = new Uint8Array(n);
                    i.set(r.length > n ? t.create().update(r).digest() : r);
                    for (let t = 0; t < i.length; t++) i[t] ^= 54;
                    this.iHash.update(i), this.oHash = t.create();
                    for (let t = 0; t < i.length; t++) i[t] ^= 106;
                    this.oHash.update(i), i.fill(0)
                }
                update(t) {
                    return tf(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    tf(this), td(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    let t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: s,
                        outputLen: a
                    } = this;
                    return t.finished = n, t.destroyed = i, t.blockLen = s, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let i7 = (t, e, r) => new i9(t, e).update(r).digest();
            i7.create = (t, e) => new i9(t, e);
            let st = BigInt(0),
                se = BigInt(1);

            function sr(t) {
                return i_(t.Fp, i4.reduce((t, e) => (t[e] = "function", t), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                })), i_(t, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...i8(t.n, t.nBitLength),
                    ...t,
                    p: t.Fp.ORDER
                })
            }
            let {
                bytesToNumberBE: sn,
                hexToBytes: si
            } = v, ss = {
                Err: class extends Error {
                    constructor(t = "") {
                        super(t)
                    }
                },
                _parseInt(t) {
                    let {
                        Err: e
                    } = ss;
                    if (t.length < 2 || 2 !== t[0]) throw new e("Invalid signature integer tag");
                    let r = t[1],
                        n = t.subarray(2, r + 2);
                    if (!r || n.length !== r) throw new e("Invalid signature integer: wrong length");
                    if (128 & n[0]) throw new e("Invalid signature integer: negative");
                    if (0 === n[0] && !(128 & n[1])) throw new e("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: sn(n),
                        l: t.subarray(r + 2)
                    }
                },
                toSig(t) {
                    let {
                        Err: e
                    } = ss, r = "string" == typeof t ? si(t) : t;
                    if (!(r instanceof Uint8Array)) throw Error("ui8a expected");
                    let n = r.length;
                    if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
                    if (r[1] !== n - 2) throw new e("Invalid signature: incorrect length");
                    let {
                        d: i,
                        l: s
                    } = ss._parseInt(r.subarray(2)), {
                        d: a,
                        l: o
                    } = ss._parseInt(s);
                    if (o.length) throw new e("Invalid signature: left bytes after parsing");
                    return {
                        r: i,
                        s: a
                    }
                },
                hexFromSig(t) {
                    let e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t,
                        r = t => {
                            let e = t.toString(16);
                            return 1 & e.length ? `0${e}` : e
                        },
                        n = e(r(t.s)),
                        i = e(r(t.r)),
                        s = n.length / 2,
                        a = i.length / 2,
                        o = r(s),
                        l = r(a);
                    return `30${r(a+s+4)}02${l}${i}02${o}${n}`
                }
            }, sa = BigInt(0), so = BigInt(1), sl = (BigInt(2), BigInt(3));
            BigInt(4);
            let su = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                sh = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                sc = BigInt(1),
                sd = BigInt(2),
                sf = (t, e) => (t + e / sd) / e,
                sp = function(t, e, r = !1, n = {}) {
                    if (t <= iq) throw Error(`Expected Field ORDER > 0, got ${t}`);
                    let {
                        nBitLength: i,
                        nByteLength: s
                    } = i8(t, e);
                    if (s > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                    let a = function(t) {
                            if (t % iX === iY) {
                                let e = (t + iW) / iX;
                                return function(t, r) {
                                    let n = t.pow(r, e);
                                    if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            if (t % i0 === i$) {
                                let e = (t - i$) / i0;
                                return function(t, r) {
                                    let n = t.mul(r, iZ),
                                        i = t.pow(n, e),
                                        s = t.mul(r, i),
                                        a = t.mul(t.mul(s, iZ), i),
                                        o = t.mul(s, t.sub(a, t.ONE));
                                    if (!t.eql(t.sqr(o), r)) throw Error("Cannot find square root");
                                    return o
                                }
                            }
                            return function(t) {
                                let e, r, n;
                                let i = (t - iW) / iZ;
                                for (e = t - iW, r = 0; e % iZ === iq; e /= iZ, r++);
                                for (n = iZ; n < t && function(t, e, r) {
                                        if (r <= iq || e < iq) throw Error("Expected power/modulo > 0");
                                        if (r === iW) return iq;
                                        let n = iW;
                                        for (; e > iq;) e & iW && (n = n * t % r), t = t * t % r, e >>= iW;
                                        return n
                                    }(n, i, t) !== t - iW; n++);
                                if (1 === r) {
                                    let e = (t + iW) / iX;
                                    return function(t, r) {
                                        let n = t.pow(r, e);
                                        if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                        return n
                                    }
                                }
                                let s = (e + iW) / iZ;
                                return function(t, a) {
                                    if (t.pow(a, i) === t.neg(t.ONE)) throw Error("Cannot find square root");
                                    let o = r,
                                        l = t.pow(t.mul(t.ONE, n), e),
                                        u = t.pow(a, s),
                                        h = t.pow(a, e);
                                    for (; !t.eql(h, t.ONE);) {
                                        if (t.eql(h, t.ZERO)) return t.ZERO;
                                        let e = 1;
                                        for (let r = t.sqr(h); e < o && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                                        let r = t.pow(l, iW << BigInt(o - e - 1));
                                        l = t.sqr(r), u = t.mul(u, r), h = t.mul(h, l), o = e
                                    }
                                    return u
                                }
                            }(t)
                        }(t),
                        o = Object.freeze({
                            ORDER: t,
                            BITS: i,
                            BYTES: s,
                            MASK: iH(i),
                            ZERO: iq,
                            ONE: iW,
                            create: e => i1(e, t),
                            isValid: e => {
                                if ("bigint" != typeof e) throw Error(`Invalid field element: expected bigint, got ${typeof e}`);
                                return iq <= e && e < t
                            },
                            is0: t => t === iq,
                            isOdd: t => (t & iW) === iW,
                            neg: e => i1(-e, t),
                            eql: (t, e) => t === e,
                            sqr: e => i1(e * e, t),
                            add: (e, r) => i1(e + r, t),
                            sub: (e, r) => i1(e - r, t),
                            mul: (e, r) => i1(e * r, t),
                            pow: (t, e) => (function(t, e, r) {
                                if (r < iq) throw Error("Expected power > 0");
                                if (r === iq) return t.ONE;
                                if (r === iW) return e;
                                let n = t.ONE,
                                    i = e;
                                for (; r > iq;) r & iW && (n = t.mul(n, i)), i = t.sqr(i), r >>= iW;
                                return n
                            })(o, t, e),
                            div: (e, r) => i1(e * i3(r, t), t),
                            sqrN: t => t * t,
                            addN: (t, e) => t + e,
                            subN: (t, e) => t - e,
                            mulN: (t, e) => t * e,
                            inv: e => i3(e, t),
                            sqrt: n.sqrt || (t => a(o, t)),
                            invertBatch: t => (function(t, e) {
                                let r = Array(e.length),
                                    n = e.reduce((e, n, i) => t.is0(n) ? e : (r[i] = e, t.mul(e, n)), t.ONE),
                                    i = t.inv(n);
                                return e.reduceRight((e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]), t.mul(e, n)), i), r
                            })(o, t),
                            cmov: (t, e, r) => r ? e : t,
                            toBytes: t => r ? iV(t, s) : iU(t, s),
                            fromBytes: t => {
                                if (t.length !== s) throw Error(`Fp.fromBytes: expected ${s}, got ${t.length}`);
                                return r ? iL(t) : iM(t)
                            }
                        });
                    return Object.freeze(o)
                }(su, void 0, void 0, {
                    sqrt: function(t) {
                        let e = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            i = BigInt(22),
                            s = BigInt(23),
                            a = BigInt(44),
                            o = BigInt(88),
                            l = t * t * t % su,
                            u = l * l * t % su,
                            h = i2(u, e, su) * u % su,
                            c = i2(h, e, su) * u % su,
                            d = i2(c, sd, su) * l % su,
                            f = i2(d, n, su) * d % su,
                            p = i2(f, i, su) * f % su,
                            g = i2(p, a, su) * p % su,
                            m = i2(g, o, su) * g % su,
                            y = i2(m, a, su) * p % su,
                            v = i2(y, e, su) * u % su,
                            w = i2(v, s, su) * f % su,
                            A = i2(w, r, su) * l % su,
                            b = i2(A, sd, su);
                        if (!sp.eql(sp.sqr(b), t)) throw Error("Cannot find square root");
                        return b
                    }
                }),
                sg = function(t, e) {
                    let r = e => (function(t) {
                        let e = function(t) {
                                let e = sr(t);
                                return i_(e, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...e
                                })
                            }(t),
                            {
                                Fp: r,
                                n: n
                            } = e,
                            i = r.BYTES + 1,
                            s = 2 * r.BYTES + 1;

                        function a(t) {
                            return i1(t, n)
                        }
                        let {
                            ProjectivePoint: o,
                            normPrivateKeyToScalar: l,
                            weierstrassEquation: u,
                            isWithinCurveOrder: h
                        } = function(t) {
                            let e = function(t) {
                                    let e = sr(t);
                                    i_(e, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a: i
                                    } = e;
                                    if (r) {
                                        if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...e
                                    })
                                }(t),
                                {
                                    Fp: r
                                } = e,
                                n = e.toBytes || ((t, e, n) => {
                                    let i = e.toAffine();
                                    return iG(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                                }),
                                i = e.fromBytes || (t => {
                                    let e = t.subarray(1);
                                    return {
                                        x: r.fromBytes(e.subarray(0, r.BYTES)),
                                        y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
                                    }
                                });

                            function s(t) {
                                let {
                                    a: n,
                                    b: i
                                } = e, s = r.sqr(t), a = r.mul(s, t);
                                return r.add(r.add(a, r.mul(t, n)), i)
                            }
                            if (!r.eql(r.sqr(e.Gy), s(e.Gx))) throw Error("bad generator point: equation left != right");

                            function a(t) {
                                return "bigint" == typeof t && sa < t && t < e.n
                            }

                            function o(t) {
                                if (!a(t)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                            }

                            function l(t) {
                                let r;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: i,
                                    wrapPrivateKey: s,
                                    n: a
                                } = e;
                                if (n && "bigint" != typeof t) {
                                    if (t instanceof Uint8Array && (t = iI(t)), "string" != typeof t || !n.includes(t.length)) throw Error("Invalid key");
                                    t = t.padStart(2 * i, "0")
                                }
                                try {
                                    r = "bigint" == typeof t ? t : iM(ij("private key", t, i))
                                } catch (e) {
                                    throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof t}`)
                                }
                                return s && (r = i1(r, a)), o(r), r
                            }
                            let u = new Map;

                            function h(t) {
                                if (!(t instanceof c)) throw Error("ProjectivePoint expected")
                            }
                            class c {
                                constructor(t, e, n) {
                                    if (this.px = t, this.py = e, this.pz = n, null == t || !r.isValid(t)) throw Error("x required");
                                    if (null == e || !r.isValid(e)) throw Error("y required");
                                    if (null == n || !r.isValid(n)) throw Error("z required")
                                }
                                static fromAffine(t) {
                                    let {
                                        x: e,
                                        y: n
                                    } = t || {};
                                    if (!t || !r.isValid(e) || !r.isValid(n)) throw Error("invalid affine point");
                                    if (t instanceof c) throw Error("projective point not allowed");
                                    let i = t => r.eql(t, r.ZERO);
                                    return i(e) && i(n) ? c.ZERO : new c(e, n, r.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(t) {
                                    let e = r.invertBatch(t.map(t => t.pz));
                                    return t.map((t, r) => t.toAffine(e[r])).map(c.fromAffine)
                                }
                                static fromHex(t) {
                                    let e = c.fromAffine(i(ij("pointHex", t)));
                                    return e.assertValidity(), e
                                }
                                static fromPrivateKey(t) {
                                    return c.BASE.multiply(l(t))
                                }
                                _setWindowSize(t) {
                                    this._WINDOW_SIZE = t, u.delete(this)
                                }
                                assertValidity() {
                                    if (this.is0()) {
                                        if (e.allowInfinityPoint && !r.is0(this.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: t,
                                        y: n
                                    } = this.toAffine();
                                    if (!r.isValid(t) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                                    let i = r.sqr(n),
                                        a = s(t);
                                    if (!r.eql(i, a)) throw Error("bad point: equation left != right");
                                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                                }
                                hasEvenY() {
                                    let {
                                        y: t
                                    } = this.toAffine();
                                    if (r.isOdd) return !r.isOdd(t);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(t) {
                                    h(t);
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, {
                                        px: s,
                                        py: a,
                                        pz: o
                                    } = t, l = r.eql(r.mul(e, o), r.mul(s, i)), u = r.eql(r.mul(n, o), r.mul(a, i));
                                    return l && u
                                }
                                negate() {
                                    return new c(this.px, r.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: t,
                                        b: n
                                    } = e, i = r.mul(n, sl), {
                                        px: s,
                                        py: a,
                                        pz: o
                                    } = this, l = r.ZERO, u = r.ZERO, h = r.ZERO, d = r.mul(s, s), f = r.mul(a, a), p = r.mul(o, o), g = r.mul(s, a);
                                    return g = r.add(g, g), h = r.mul(s, o), h = r.add(h, h), l = r.mul(t, h), u = r.mul(i, p), u = r.add(l, u), l = r.sub(f, u), u = r.add(f, u), u = r.mul(l, u), l = r.mul(g, l), h = r.mul(i, h), p = r.mul(t, p), g = r.sub(d, p), g = r.mul(t, g), g = r.add(g, h), h = r.add(d, d), d = r.add(h, d), d = r.add(d, p), d = r.mul(d, g), u = r.add(u, d), p = r.mul(a, o), p = r.add(p, p), d = r.mul(p, g), l = r.sub(l, d), h = r.mul(p, f), h = r.add(h, h), new c(l, u, h = r.add(h, h))
                                }
                                add(t) {
                                    h(t);
                                    let {
                                        px: n,
                                        py: i,
                                        pz: s
                                    } = this, {
                                        px: a,
                                        py: o,
                                        pz: l
                                    } = t, u = r.ZERO, d = r.ZERO, f = r.ZERO, p = e.a, g = r.mul(e.b, sl), m = r.mul(n, a), y = r.mul(i, o), v = r.mul(s, l), w = r.add(n, i), A = r.add(a, o);
                                    w = r.mul(w, A), A = r.add(m, y), w = r.sub(w, A), A = r.add(n, s);
                                    let b = r.add(a, l);
                                    return A = r.mul(A, b), b = r.add(m, v), A = r.sub(A, b), b = r.add(i, s), u = r.add(o, l), b = r.mul(b, u), u = r.add(y, v), b = r.sub(b, u), f = r.mul(p, A), u = r.mul(g, v), f = r.add(u, f), u = r.sub(y, f), f = r.add(y, f), d = r.mul(u, f), y = r.add(m, m), y = r.add(y, m), v = r.mul(p, v), A = r.mul(g, A), y = r.add(y, v), v = r.sub(m, v), v = r.mul(p, v), A = r.add(A, v), m = r.mul(y, A), d = r.add(d, m), m = r.mul(b, A), u = r.mul(w, u), u = r.sub(u, m), m = r.mul(w, y), f = r.mul(b, f), new c(u, d, f = r.add(f, m))
                                }
                                subtract(t) {
                                    return this.add(t.negate())
                                }
                                is0() {
                                    return this.equals(c.ZERO)
                                }
                                wNAF(t) {
                                    return f.wNAFCached(this, u, t, t => {
                                        let e = r.invertBatch(t.map(t => t.pz));
                                        return t.map((t, r) => t.toAffine(e[r])).map(c.fromAffine)
                                    })
                                }
                                multiplyUnsafe(t) {
                                    let n = c.ZERO;
                                    if (t === sa) return n;
                                    if (o(t), t === so) return this;
                                    let {
                                        endo: i
                                    } = e;
                                    if (!i) return f.unsafeLadder(this, t);
                                    let {
                                        k1neg: s,
                                        k1: a,
                                        k2neg: l,
                                        k2: u
                                    } = i.splitScalar(t), h = n, d = n, p = this;
                                    for (; a > sa || u > sa;) a & so && (h = h.add(p)), u & so && (d = d.add(p)), p = p.double(), a >>= so, u >>= so;
                                    return s && (h = h.negate()), l && (d = d.negate()), d = new c(r.mul(d.px, i.beta), d.py, d.pz), h.add(d)
                                }
                                multiply(t) {
                                    let n, i;
                                    o(t);
                                    let {
                                        endo: s
                                    } = e;
                                    if (s) {
                                        let {
                                            k1neg: e,
                                            k1: a,
                                            k2neg: o,
                                            k2: l
                                        } = s.splitScalar(t), {
                                            p: u,
                                            f: h
                                        } = this.wNAF(a), {
                                            p: d,
                                            f: p
                                        } = this.wNAF(l);
                                        u = f.constTimeNegate(e, u), d = f.constTimeNegate(o, d), d = new c(r.mul(d.px, s.beta), d.py, d.pz), n = u.add(d), i = h.add(p)
                                    } else {
                                        let {
                                            p: e,
                                            f: r
                                        } = this.wNAF(t);
                                        n = e, i = r
                                    }
                                    return c.normalizeZ([n, i])[0]
                                }
                                multiplyAndAddUnsafe(t, e, r) {
                                    let n = c.BASE,
                                        i = (t, e) => e !== sa && e !== so && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e),
                                        s = i(this, e).add(i(t, r));
                                    return s.is0() ? void 0 : s
                                }
                                toAffine(t) {
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, s = this.is0();
                                    null == t && (t = s ? r.ONE : r.inv(i));
                                    let a = r.mul(e, t),
                                        o = r.mul(n, t),
                                        l = r.mul(i, t);
                                    if (s) return {
                                        x: r.ZERO,
                                        y: r.ZERO
                                    };
                                    if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: a,
                                        y: o
                                    }
                                }
                                isTorsionFree() {
                                    let {
                                        h: t,
                                        isTorsionFree: r
                                    } = e;
                                    if (t === so) return !0;
                                    if (r) return r(c, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: t,
                                        clearCofactor: r
                                    } = e;
                                    return t === so ? this : r ? r(c, this) : this.multiplyUnsafe(e.h)
                                }
                                toRawBytes(t = !0) {
                                    return this.assertValidity(), n(c, this, t)
                                }
                                toHex(t = !0) {
                                    return iI(this.toRawBytes(t))
                                }
                            }
                            c.BASE = new c(e.Gx, e.Gy, r.ONE), c.ZERO = new c(r.ZERO, r.ONE, r.ZERO);
                            let d = e.nBitLength,
                                f = function(t, e) {
                                    let r = (t, e) => {
                                            let r = e.negate();
                                            return t ? r : e
                                        },
                                        n = t => ({
                                            windows: Math.ceil(e / t) + 1,
                                            windowSize: 2 ** (t - 1)
                                        });
                                    return {
                                        constTimeNegate: r,
                                        unsafeLadder(e, r) {
                                            let n = t.ZERO,
                                                i = e;
                                            for (; r > st;) r & se && (n = n.add(i)), i = i.double(), r >>= se;
                                            return n
                                        },
                                        precomputeWindow(t, e) {
                                            let {
                                                windows: r,
                                                windowSize: i
                                            } = n(e), s = [], a = t, o = a;
                                            for (let t = 0; t < r; t++) {
                                                o = a, s.push(o);
                                                for (let t = 1; t < i; t++) o = o.add(a), s.push(o);
                                                a = o.double()
                                            }
                                            return s
                                        },
                                        wNAF(e, i, s) {
                                            let {
                                                windows: a,
                                                windowSize: o
                                            } = n(e), l = t.ZERO, u = t.BASE, h = BigInt(2 ** e - 1), c = 2 ** e, d = BigInt(e);
                                            for (let t = 0; t < a; t++) {
                                                let e = t * o,
                                                    n = Number(s & h);
                                                s >>= d, n > o && (n -= c, s += se);
                                                let a = e + Math.abs(n) - 1,
                                                    f = t % 2 != 0,
                                                    p = n < 0;
                                                0 === n ? u = u.add(r(f, i[e])) : l = l.add(r(p, i[a]))
                                            }
                                            return {
                                                p: l,
                                                f: u
                                            }
                                        },
                                        wNAFCached(t, e, r, n) {
                                            let i = t._WINDOW_SIZE || 1,
                                                s = e.get(t);
                                            return s || (s = this.precomputeWindow(t, i), 1 !== i && e.set(t, n(s))), this.wNAF(i, s, r)
                                        }
                                    }
                                }(c, e.endo ? Math.ceil(d / 2) : d);
                            return {
                                CURVE: e,
                                ProjectivePoint: c,
                                normPrivateKeyToScalar: l,
                                weierstrassEquation: s,
                                isWithinCurveOrder: a
                            }
                        }({ ...e,
                            toBytes(t, e, n) {
                                let i = e.toAffine(),
                                    s = r.toBytes(i.x),
                                    a = iG;
                                return n ? a(Uint8Array.from([e.hasEvenY() ? 2 : 3]), s) : a(Uint8Array.from([4]), s, r.toBytes(i.y))
                            },
                            fromBytes(t) {
                                let e = t.length,
                                    n = t[0],
                                    a = t.subarray(1);
                                if (e === i && (2 === n || 3 === n)) {
                                    let t = iM(a);
                                    if (!(sa < t && t < r.ORDER)) throw Error("Point is not on curve");
                                    let e = u(t),
                                        i = r.sqrt(e);
                                    return (1 & n) == 1 != ((i & so) === so) && (i = r.neg(i)), {
                                        x: t,
                                        y: i
                                    }
                                }
                                if (e === s && 4 === n) return {
                                    x: r.fromBytes(a.subarray(0, r.BYTES)),
                                    y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES))
                                };
                                throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)
                            }
                        }), c = t => iI(iU(t, e.nByteLength)), d = (t, e, r) => iM(t.slice(e, r));
                        class f {
                            constructor(t, e, r) {
                                this.r = t, this.s = e, this.recovery = r, this.assertValidity()
                            }
                            static fromCompact(t) {
                                let r = e.nByteLength;
                                return new f(d(t = ij("compactSignature", t, 2 * r), 0, r), d(t, r, 2 * r))
                            }
                            static fromDER(t) {
                                let {
                                    r: e,
                                    s: r
                                } = ss.toSig(ij("DER", t));
                                return new f(e, r)
                            }
                            assertValidity() {
                                if (!h(this.r)) throw Error("r must be 0 < r < CURVE.n");
                                if (!h(this.s)) throw Error("s must be 0 < s < CURVE.n")
                            }
                            addRecoveryBit(t) {
                                return new f(this.r, this.s, t)
                            }
                            recoverPublicKey(t) {
                                let {
                                    r: i,
                                    s,
                                    recovery: l
                                } = this, u = m(ij("msgHash", t));
                                if (null == l || ![0, 1, 2, 3].includes(l)) throw Error("recovery id invalid");
                                let h = 2 === l || 3 === l ? i + e.n : i;
                                if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let d = (1 & l) == 0 ? "02" : "03",
                                    f = o.fromHex(d + c(h)),
                                    p = i3(h, n),
                                    g = a(-u * p),
                                    y = a(s * p),
                                    v = o.BASE.multiplyAndAddUnsafe(f, g, y);
                                if (!v) throw Error("point at infinify");
                                return v.assertValidity(), v
                            }
                            hasHighS() {
                                return this.s > n >> so
                            }
                            normalizeS() {
                                return this.hasHighS() ? new f(this.r, a(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return iF(this.toDERHex())
                            }
                            toDERHex() {
                                return ss.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return iF(this.toCompactHex())
                            }
                            toCompactHex() {
                                return c(this.r) + c(this.s)
                            }
                        }

                        function p(t) {
                            let e = t instanceof Uint8Array,
                                r = "string" == typeof t,
                                n = (e || r) && t.length;
                            return e ? n === i || n === s : r ? n === 2 * i || n === 2 * s : t instanceof o
                        }
                        let g = e.bits2int || function(t) {
                                let r = iM(t),
                                    n = 8 * t.length - e.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            m = e.bits2int_modN || function(t) {
                                return a(g(t))
                            },
                            y = iH(e.nBitLength);

                        function v(t) {
                            if ("bigint" != typeof t) throw Error("bigint expected");
                            if (!(sa <= t && t < y)) throw Error(`bigint expected < 2^${e.nBitLength}`);
                            return iU(t, e.nByteLength)
                        }
                        let w = {
                                lowS: e.lowS,
                                prehash: !1
                            },
                            A = {
                                lowS: e.lowS,
                                prehash: !1
                            };
                        return o.BASE._setWindowSize(8), {
                            CURVE: e,
                            getPublicKey: function(t, e = !0) {
                                return o.fromPrivateKey(t).toRawBytes(e)
                            },
                            getSharedSecret: function(t, e, r = !0) {
                                if (p(t)) throw Error("first arg must be private key");
                                if (!p(e)) throw Error("second arg must be public key");
                                return o.fromHex(e).multiply(l(t)).toRawBytes(r)
                            },
                            sign: function(t, i, s = w) {
                                let {
                                    seed: u,
                                    k2sig: c
                                } = function(t, i, s = w) {
                                    if (["recovered", "canonical"].some(t => t in s)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: u,
                                        randomBytes: c
                                    } = e, {
                                        lowS: d,
                                        prehash: p,
                                        extraEntropy: y
                                    } = s;
                                    null == d && (d = !0), t = ij("msgHash", t), p && (t = ij("prehashed msgHash", u(t)));
                                    let A = m(t),
                                        b = l(i),
                                        E = [v(b), v(A)];
                                    if (null != y) {
                                        let t = !0 === y ? c(r.BYTES) : y;
                                        E.push(ij("extraEntropy", t))
                                    }
                                    return {
                                        seed: iG(...E),
                                        k2sig: function(t) {
                                            let e = g(t);
                                            if (!h(e)) return;
                                            let r = i3(e, n),
                                                i = o.BASE.multiply(e).toAffine(),
                                                s = a(i.x);
                                            if (s === sa) return;
                                            let l = a(r * a(A + s * b));
                                            if (l === sa) return;
                                            let u = (i.x === s ? 0 : 2) | Number(i.y & so),
                                                c = l;
                                            if (d && l > n >> so) c = l > n >> so ? a(-l) : l, u ^= 1;
                                            return new f(s, c, u)
                                        }
                                    }
                                }(t, i, s);
                                return iJ(e.hash.outputLen, e.nByteLength, e.hmac)(u, c)
                            },
                            verify: function(t, r, i, s = A) {
                                let l, u;
                                if (r = ij("msgHash", r), i = ij("publicKey", i), "strict" in s) throw Error("options.strict was renamed to lowS");
                                let {
                                    lowS: h,
                                    prehash: c
                                } = s;
                                try {
                                    if ("string" == typeof t || t instanceof Uint8Array) try {
                                        u = f.fromDER(t)
                                    } catch (e) {
                                        if (!(e instanceof ss.Err)) throw e;
                                        u = f.fromCompact(t)
                                    } else if ("object" == typeof t && "bigint" == typeof t.r && "bigint" == typeof t.s) {
                                        let {
                                            r: e,
                                            s: r
                                        } = t;
                                        u = new f(e, r)
                                    } else throw Error("PARSE");
                                    l = o.fromHex(i)
                                } catch (t) {
                                    if ("PARSE" === t.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (h && u.hasHighS()) return !1;
                                c && (r = e.hash(r));
                                let {
                                    r: d,
                                    s: p
                                } = u, g = m(r), y = i3(p, n), v = a(g * y), w = a(d * y), b = o.BASE.multiplyAndAddUnsafe(l, v, w) ? .toAffine();
                                return !!b && a(b.x) === d
                            },
                            ProjectivePoint: o,
                            Signature: f,
                            utils: {
                                isValidPrivateKey(t) {
                                    try {
                                        return l(t), !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: l,
                                randomPrivateKey: () => {
                                    let t = i6(e.n);
                                    return function(t, e, r = !1) {
                                        let n = t.length,
                                            i = i5(e),
                                            s = i6(e);
                                        if (n < 16 || n < s || n > 1024) throw Error(`expected ${s}-1024 bytes of input, got ${n}`);
                                        let a = i1(r ? iM(t) : iL(t), e - iW) + iW;
                                        return r ? iV(a, i) : iU(a, i)
                                    }(e.randomBytes(t), e.n)
                                },
                                precompute: (t = 8, e = o.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                            }
                        }
                    })({ ...t,
                        hash: e,
                        hmac: (t, ...r) => i7(e, t, function(...t) {
                            let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
                                r = 0;
                            return t.forEach(t => {
                                if (!tP(t)) throw Error("Uint8Array expected");
                                e.set(t, r), r += t.length
                            }), e
                        }(...r)),
                        randomBytes: tN
                    });
                    return Object.freeze({ ...r(e),
                        create: r
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: sp,
                    n: sh,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: t => {
                            let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -sc * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                i = BigInt("0x100000000000000000000000000000000"),
                                s = sf(e * t, sh),
                                a = sf(-r * t, sh),
                                o = i1(t - s * e - a * n, sh),
                                l = i1(-s * r - a * e, sh),
                                u = o > i,
                                h = l > i;
                            if (u && (o = sh - o), h && (l = sh - l), o > i || l > i) throw Error("splitScalar: Endomorphism failed, k=" + t);
                            return {
                                k1neg: u,
                                k1: o,
                                k2neg: h,
                                k2: l
                            }
                        }
                    }
                }, ie);
            BigInt(0), sg.ProjectivePoint;
            class sm {#
                tn;
                constructor(t) {
                    C(32 === U(t), "invalid private key", "privateKey", "[REDACTED]"), this.#tn = M(t)
                }
                get privateKey() {
                    return this.#tn
                }
                get publicKey() {
                    return sm.computePublicKey(this.#tn)
                }
                get compressedPublicKey() {
                    return sm.computePublicKey(this.#tn, !0)
                }
                sign(t) {
                    C(32 === U(t), "invalid digest length", "digest", t);
                    let e = sg.sign(O(t), O(this.#tn), {
                        lowS: !0
                    });
                    return iS.from({
                        r: Y(e.r, 32),
                        s: Y(e.s, 32),
                        v: e.recovery ? 28 : 27
                    })
                }
                computeSharedSecret(t) {
                    let e = sm.computePublicKey(t);
                    return M(sg.getSharedSecret(O(this.#tn), N(e), !1))
                }
                static computePublicKey(t, e) {
                    let r = N(t, "key");
                    if (32 === r.length) return M(sg.getPublicKey(r, !!e));
                    if (64 === r.length) {
                        let t = new Uint8Array(65);
                        t[0] = 4, t.set(r, 1), r = t
                    }
                    return M(sg.ProjectivePoint.fromHex(r).toRawBytes(e))
                }
                static recoverPublicKey(t, e) {
                    C(32 === U(t), "invalid digest length", "digest", t);
                    let r = iS.from(e),
                        n = sg.Signature.fromCompact(O(L([r.r, r.s]))),
                        i = (n = n.addRecoveryBit(r.yParity)).recoverPublicKey(O(t));
                    return C(null != i, "invalid signautre for digest", "signature", e), "0x" + i.toHex(!1)
                }
                static addPoints(t, e, r) {
                    let n = sg.ProjectivePoint.fromHex(sm.computePublicKey(t).substring(2)),
                        i = sg.ProjectivePoint.fromHex(sm.computePublicKey(e).substring(2));
                    return "0x" + n.add(i).toHex(!!r)
                }
            }

            function sy(t, e, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
                return n
            }

            function sv(t, e, r, n) {
                let i = [];
                for (; r < e + 1 + n;) {
                    let s = sw(t, r);
                    i.push(s.result), k((r += s.consumed) <= e + 1 + n, "child data too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: n,
                        offset: e
                    })
                }
                return {
                    consumed: 1 + n,
                    result: i
                }
            }

            function sw(t, e) {
                k(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
                    buffer: t,
                    length: 0,
                    offset: 1
                });
                let r = e => {
                    k(e <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
                        buffer: t,
                        length: t.length,
                        offset: e
                    })
                };
                if (t[e] >= 248) {
                    let n = t[e] - 247;
                    r(e + 1 + n);
                    let i = sy(t, e + 1, n);
                    return r(e + 1 + n + i), sv(t, e, e + 1 + n, n + i)
                }
                if (t[e] >= 192) {
                    let n = t[e] - 192;
                    return r(e + 1 + n), sv(t, e, e + 1, n)
                }
                if (t[e] >= 184) {
                    let n = t[e] - 183;
                    r(e + 1 + n);
                    let i = sy(t, e + 1, n);
                    r(e + 1 + n + i);
                    let s = M(t.slice(e + 1 + n, e + 1 + n + i));
                    return {
                        consumed: 1 + n + i,
                        result: s
                    }
                }
                if (t[e] >= 128) {
                    let n = t[e] - 128;
                    r(e + 1 + n);
                    let i = M(t.slice(e + 1, e + 1 + n));
                    return {
                        consumed: 1 + n,
                        result: i
                    }
                }
                return {
                    consumed: 1,
                    result: function(t) {
                        let e = t.toString(16);
                        for (; e.length < 2;) e = "0" + e;
                        return "0x" + e
                    }(t[e])
                }
            }

            function sA(t) {
                let e = N(t, "data"),
                    r = sw(e, 0);
                return C(r.consumed === e.length, "unexpected junk after rlp payload", "data", t), r.result
            }

            function sb(t) {
                let e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }
            let sE = "0123456789abcdef";

            function sx(t) {
                let e = "0x";
                for (let r of function t(e) {
                        if (Array.isArray(e)) {
                            let r = [];
                            if (e.forEach(function(e) {
                                    r = r.concat(t(e))
                                }), r.length <= 55) return r.unshift(192 + r.length), r;
                            let n = sb(r.length);
                            return n.unshift(247 + n.length), n.concat(r)
                        }
                        let r = Array.prototype.slice.call(N(e, "object"));
                        if (1 === r.length && r[0] <= 127) return r;
                        if (r.length <= 55) return r.unshift(128 + r.length), r;
                        let n = sb(r.length);
                        return n.unshift(183 + n.length), n.concat(r)
                    }(t)) e += sE[r >> 4] + sE[15 & r];
                return e
            }
            let sP = BigInt(0),
                sk = BigInt(2),
                sC = BigInt(27),
                sT = BigInt(28),
                sS = BigInt(35),
                sR = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            function sB(t, e) {
                let r = t.toString(16);
                for (; r.length < 2;) r = "0" + r;
                return "0x" + (r += iv(e).substring(4))
            }

            function sN(t) {
                return "0x" === t ? null : t2(t)
            }

            function sO(t, e) {
                try {
                    return rC(t)
                } catch (r) {
                    C(!1, r.message, e, t)
                }
            }

            function sI(t, e) {
                return "0x" === t ? 0 : Z(t, e)
            }

            function sD(t, e) {
                if ("0x" === t) return sP;
                let r = K(t, e);
                return C(r <= sR, "value exceeds uint size", e, r), r
            }

            function sF(t, e) {
                let r = K(t, "value"),
                    n = X(r);
                return C(n.length <= 32, "value too large", `tx.${e}`, r), n
            }

            function sM(t) {
                return rC(t).map(t => [t.address, t.storageKeys])
            }

            function sL(t, e) {
                let r;
                try {
                    if (r = sI(e[0], "yParity"), 0 !== r && 1 !== r) throw Error("bad yParity")
                } catch (t) {
                    C(!1, "invalid yParity", "yParity", e[0])
                }
                let n = G(e[1], 32),
                    i = G(e[2], 32),
                    s = iS.from({
                        r: n,
                        s: i,
                        yParity: r
                    });
                t.signature = s
            }
            class sU {#
                ti;#
                ts;#
                e;#
                ta;#
                to;#
                tl;#
                tu;#
                th;#
                tc;#
                td;#
                tf;#
                tp;#
                tg;#
                tm;#
                ty;#
                tv;
                get type() {
                    return this.#ti
                }
                set type(t) {
                    switch (t) {
                        case null:
                            this.#ti = null;
                            break;
                        case 0:
                        case "legacy":
                            this.#ti = 0;
                            break;
                        case 1:
                        case "berlin":
                        case "eip-2930":
                            this.#ti = 1;
                            break;
                        case 2:
                        case "london":
                        case "eip-1559":
                            this.#ti = 2;
                            break;
                        case 3:
                        case "cancun":
                        case "eip-4844":
                            this.#ti = 3;
                            break;
                        default:
                            C(!1, "unsupported transaction type", "type", t)
                    }
                }
                get typeName() {
                    switch (this.type) {
                        case 0:
                            return "legacy";
                        case 1:
                            return "eip-2930";
                        case 2:
                            return "eip-1559";
                        case 3:
                            return "eip-4844"
                    }
                    return null
                }
                get to() {
                    let t = this.#ts;
                    return null == t && 3 === this.type ? rG : t
                }
                set to(t) {
                    this.#ts = null == t ? null : t2(t)
                }
                get nonce() {
                    return this.#ta
                }
                set nonce(t) {
                    this.#ta = Z(t, "value")
                }
                get gasLimit() {
                    return this.#to
                }
                set gasLimit(t) {
                    this.#to = K(t)
                }
                get gasPrice() {
                    let t = this.#tl;
                    return null == t && (0 === this.type || 1 === this.type) ? sP : t
                }
                set gasPrice(t) {
                    this.#tl = null == t ? null : K(t, "gasPrice")
                }
                get maxPriorityFeePerGas() {
                    let t = this.#tu;
                    return null == t ? 2 === this.type || 3 === this.type ? sP : null : t
                }
                set maxPriorityFeePerGas(t) {
                    this.#tu = null == t ? null : K(t, "maxPriorityFeePerGas")
                }
                get maxFeePerGas() {
                    let t = this.#th;
                    return null == t ? 2 === this.type || 3 === this.type ? sP : null : t
                }
                set maxFeePerGas(t) {
                    this.#th = null == t ? null : K(t, "maxFeePerGas")
                }
                get data() {
                    return this.#e
                }
                set data(t) {
                    this.#e = M(t)
                }
                get value() {
                    return this.#tc
                }
                set value(t) {
                    this.#tc = K(t, "value")
                }
                get chainId() {
                    return this.#td
                }
                set chainId(t) {
                    this.#td = K(t)
                }
                get signature() {
                    return this.#tf || null
                }
                set signature(t) {
                    this.#tf = null == t ? null : iS.from(t)
                }
                get accessList() {
                    let t = this.#tp || null;
                    return null == t ? 1 === this.type || 2 === this.type || 3 === this.type ? [] : null : t
                }
                set accessList(t) {
                    this.#tp = null == t ? null : rC(t)
                }
                get maxFeePerBlobGas() {
                    let t = this.#tg;
                    return null == t && 3 === this.type ? sP : t
                }
                set maxFeePerBlobGas(t) {
                    this.#tg = null == t ? null : K(t, "maxFeePerBlobGas")
                }
                get blobVersionedHashes() {
                    let t = this.#tm;
                    return null == t && 3 === this.type ? [] : t
                }
                set blobVersionedHashes(t) {
                    if (null != t) {
                        C(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t), t = t.slice();
                        for (let e = 0; e < t.length; e++) C(I(t[e], 32), "invalid blobVersionedHash", `value[${e}]`, t[e])
                    }
                    this.#tm = t
                }
                get blobs() {
                    return null == this.#tv ? null : this.#tv.map(t => Object.assign({}, t))
                }
                set blobs(t) {
                    if (null == t) {
                        this.#tv = null;
                        return
                    }
                    let e = [],
                        r = [];
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if (D(i)) {
                            k(this.#ty, "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
                                operation: "set blobs()"
                            });
                            let t = N(i);
                            if (C(t.length <= 131072, "blob is too large", `blobs[${n}]`, i), 131072 !== t.length) {
                                let e = new Uint8Array(131072);
                                e.set(t), t = e
                            }
                            let s = this.#ty.blobToKzgCommitment(t),
                                a = M(this.#ty.computeBlobKzgProof(t, s));
                            e.push({
                                data: M(t),
                                commitment: M(s),
                                proof: a
                            }), r.push(sB(1, s))
                        } else {
                            let t = M(i.commitment);
                            e.push({
                                data: M(i.data),
                                commitment: t,
                                proof: M(i.proof)
                            }), r.push(sB(1, t))
                        }
                    }
                    this.#tv = e, this.#tm = r
                }
                get kzg() {
                    return this.#ty
                }
                set kzg(t) {
                    this.#ty = t
                }
                constructor() {
                    this.#ti = null, this.#ts = null, this.#ta = 0, this.#to = sP, this.#tl = null, this.#tu = null, this.#th = null, this.#e = "0x", this.#tc = sP, this.#td = sP, this.#tf = null, this.#tp = null, this.#tg = null, this.#tm = null, this.#tv = null, this.#ty = null
                }
                get hash() {
                    return null == this.signature ? null : tZ(this.#tw(!0, !1))
                }
                get unsignedHash() {
                    return tZ(this.unsignedSerialized)
                }
                get from() {
                    var t, e, r;
                    return null == this.signature ? null : (t = this.unsignedHash, e = this.signature, t2(tZ("0x" + ("string" == typeof(r = sm.recoverPublicKey(t, e)) ? sm.computePublicKey(r, !1) : r.publicKey).substring(4)).substring(26)))
                }
                get fromPublicKey() {
                    return null == this.signature ? null : sm.recoverPublicKey(this.unsignedHash, this.signature)
                }
                isSigned() {
                    return null != this.signature
                }#
                tw(t, e) {
                    k(!t || null != this.signature, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    });
                    let r = t ? this.signature : null;
                    switch (this.inferType()) {
                        case 0:
                            return function(t, e) {
                                let r = [sF(t.nonce, "nonce"), sF(t.gasPrice || 0, "gasPrice"), sF(t.gasLimit, "gasLimit"), t.to || "0x", sF(t.value, "value"), t.data],
                                    n = sP;
                                if (t.chainId != sP) n = K(t.chainId, "tx.chainId"), C(!e || null == e.networkV || e.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", e);
                                else if (t.signature) {
                                    let e = t.signature.legacyChainId;
                                    null != e && (n = e)
                                }
                                if (!e) return n !== sP && (r.push(X(n)), r.push("0x"), r.push("0x")), sx(r);
                                let i = BigInt(27 + e.yParity);
                                return n !== sP ? i = iS.getChainIdV(n, e.v) : BigInt(e.v) !== i && C(!1, "tx.chainId/sig.v mismatch", "sig", e), r.push(X(i)), r.push(X(e.r)), r.push(X(e.s)), sx(r)
                            }(this, r);
                        case 1:
                            return function(t, e) {
                                let r = [sF(t.chainId, "chainId"), sF(t.nonce, "nonce"), sF(t.gasPrice || 0, "gasPrice"), sF(t.gasLimit, "gasLimit"), t.to || "0x", sF(t.value, "value"), t.data, sM(t.accessList || [])];
                                return e && (r.push(sF(e.yParity, "recoveryParam")), r.push(X(e.r)), r.push(X(e.s))), L(["0x01", sx(r)])
                            }(this, r);
                        case 2:
                            return function(t, e) {
                                let r = [sF(t.chainId, "chainId"), sF(t.nonce, "nonce"), sF(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), sF(t.maxFeePerGas || 0, "maxFeePerGas"), sF(t.gasLimit, "gasLimit"), t.to || "0x", sF(t.value, "value"), t.data, sM(t.accessList || [])];
                                return e && (r.push(sF(e.yParity, "yParity")), r.push(X(e.r)), r.push(X(e.s))), L(["0x02", sx(r)])
                            }(this, r);
                        case 3:
                            return function(t, e, r) {
                                let n = [sF(t.chainId, "chainId"), sF(t.nonce, "nonce"), sF(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), sF(t.maxFeePerGas || 0, "maxFeePerGas"), sF(t.gasLimit, "gasLimit"), t.to || rG, sF(t.value, "value"), t.data, sM(t.accessList || []), sF(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"), function(t, e) {
                                    C(Array.isArray(t), `invalid ${e}`, "value", t);
                                    for (let e = 0; e < t.length; e++) C(I(t[e], 32), "invalid ${ param } hash", `value[${e}]`, t[e]);
                                    return t
                                }(t.blobVersionedHashes || [], "blobVersionedHashes")];
                                return e && (n.push(sF(e.yParity, "yParity")), n.push(X(e.r)), n.push(X(e.s)), r) ? L(["0x03", sx([n, r.map(t => t.data), r.map(t => t.commitment), r.map(t => t.proof)])]) : L(["0x03", sx(n)])
                            }(this, r, e ? this.blobs : null)
                    }
                    k(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                        operation: ".serialized"
                    })
                }
                get serialized() {
                    return this.#tw(!0, !0)
                }
                get unsignedSerialized() {
                    return this.#tw(!1, !1)
                }
                inferType() {
                    let t = this.inferTypes();
                    return t.indexOf(2) >= 0 ? 2 : t.pop()
                }
                inferTypes() {
                    let t = null != this.gasPrice,
                        e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
                        r = null != this.accessList,
                        n = null != this.#tg || this.#tm;
                    null != this.maxFeePerGas && null != this.maxPriorityFeePerGas && k(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
                        value: this
                    }), k(!e || 0 !== this.type && 1 !== this.type, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
                        value: this
                    }), k(0 !== this.type || !r, "legacy transaction cannot have accessList", "BAD_DATA", {
                        value: this
                    });
                    let i = [];
                    return null != this.type ? i.push(this.type) : e ? i.push(2) : t ? (i.push(1), r || i.push(0)) : r ? (i.push(1), i.push(2)) : (n && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i
                }
                isLegacy() {
                    return 0 === this.type
                }
                isBerlin() {
                    return 1 === this.type
                }
                isLondon() {
                    return 2 === this.type
                }
                isCancun() {
                    return 3 === this.type
                }
                clone() {
                    return sU.from(this)
                }
                toJSON() {
                    let t = t => null == t ? null : t.toString();
                    return {
                        type: this.type,
                        to: this.to,
                        data: this.data,
                        nonce: this.nonce,
                        gasLimit: t(this.gasLimit),
                        gasPrice: t(this.gasPrice),
                        maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
                        maxFeePerGas: t(this.maxFeePerGas),
                        value: t(this.value),
                        chainId: t(this.chainId),
                        sig: this.signature ? this.signature.toJSON() : null,
                        accessList: this.accessList
                    }
                }
                static from(t) {
                    if (null == t) return new sU;
                    if ("string" == typeof t) {
                        let e = N(t);
                        if (e[0] >= 127) return sU.from(function(t) {
                            let e = sA(t);
                            C(Array.isArray(e) && (9 === e.length || 6 === e.length), "invalid field count for legacy transaction", "data", t);
                            let r = {
                                type: 0,
                                nonce: sI(e[0], "nonce"),
                                gasPrice: sD(e[1], "gasPrice"),
                                gasLimit: sD(e[2], "gasLimit"),
                                to: sN(e[3]),
                                value: sD(e[4], "value"),
                                data: M(e[5]),
                                chainId: sP
                            };
                            if (6 === e.length) return r;
                            let n = sD(e[6], "v"),
                                i = sD(e[7], "r"),
                                s = sD(e[8], "s");
                            if (i === sP && s === sP) r.chainId = n;
                            else {
                                let t = (n - sS) / sk;
                                t < sP && (t = sP), r.chainId = t, C(t !== sP || n === sC || n === sT, "non-canonical legacy v", "v", e[6]), r.signature = iS.from({
                                    r: G(e[7], 32),
                                    s: G(e[8], 32),
                                    v: n
                                })
                            }
                            return r
                        }(e));
                        switch (e[0]) {
                            case 1:
                                return sU.from(function(t) {
                                    let e = sA(N(t).slice(1));
                                    C(Array.isArray(e) && (8 === e.length || 11 === e.length), "invalid field count for transaction type: 1", "data", M(t));
                                    let r = {
                                        type: 1,
                                        chainId: sD(e[0], "chainId"),
                                        nonce: sI(e[1], "nonce"),
                                        gasPrice: sD(e[2], "gasPrice"),
                                        gasLimit: sD(e[3], "gasLimit"),
                                        to: sN(e[4]),
                                        value: sD(e[5], "value"),
                                        data: M(e[6]),
                                        accessList: sO(e[7], "accessList")
                                    };
                                    return 8 === e.length || sL(r, e.slice(8)), r
                                }(e));
                            case 2:
                                return sU.from(function(t) {
                                    let e = sA(N(t).slice(1));
                                    C(Array.isArray(e) && (9 === e.length || 12 === e.length), "invalid field count for transaction type: 2", "data", M(t));
                                    let r = {
                                        type: 2,
                                        chainId: sD(e[0], "chainId"),
                                        nonce: sI(e[1], "nonce"),
                                        maxPriorityFeePerGas: sD(e[2], "maxPriorityFeePerGas"),
                                        maxFeePerGas: sD(e[3], "maxFeePerGas"),
                                        gasPrice: null,
                                        gasLimit: sD(e[4], "gasLimit"),
                                        to: sN(e[5]),
                                        value: sD(e[6], "value"),
                                        data: M(e[7]),
                                        accessList: sO(e[8], "accessList")
                                    };
                                    return 9 === e.length || sL(r, e.slice(9)), r
                                }(e));
                            case 3:
                                return sU.from(function(t) {
                                    let e = sA(N(t).slice(1)),
                                        r = "3",
                                        n = null;
                                    if (4 === e.length && Array.isArray(e[0])) {
                                        r = "3 (network format)";
                                        let t = e[1],
                                            i = e[2],
                                            s = e[3];
                                        C(Array.isArray(t), "invalid network format: blobs not an array", "fields[1]", t), C(Array.isArray(i), "invalid network format: commitments not an array", "fields[2]", i), C(Array.isArray(s), "invalid network format: proofs not an array", "fields[3]", s), C(t.length === i.length, "invalid network format: blobs/commitments length mismatch", "fields", e), C(t.length === s.length, "invalid network format: blobs/proofs length mismatch", "fields", e), n = [];
                                        for (let r = 0; r < e[1].length; r++) n.push({
                                            data: t[r],
                                            commitment: i[r],
                                            proof: s[r]
                                        });
                                        e = e[0]
                                    }
                                    C(Array.isArray(e) && (11 === e.length || 14 === e.length), `invalid field count for transaction type: ${r}`, "data", M(t));
                                    let i = {
                                        type: 3,
                                        chainId: sD(e[0], "chainId"),
                                        nonce: sI(e[1], "nonce"),
                                        maxPriorityFeePerGas: sD(e[2], "maxPriorityFeePerGas"),
                                        maxFeePerGas: sD(e[3], "maxFeePerGas"),
                                        gasPrice: null,
                                        gasLimit: sD(e[4], "gasLimit"),
                                        to: sN(e[5]),
                                        value: sD(e[6], "value"),
                                        data: M(e[7]),
                                        accessList: sO(e[8], "accessList"),
                                        maxFeePerBlobGas: sD(e[9], "maxFeePerBlobGas"),
                                        blobVersionedHashes: e[10]
                                    };
                                    n && (i.blobs = n), C(null != i.to, `invalid address for transaction type: ${r}`, "data", t), C(Array.isArray(i.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t);
                                    for (let e = 0; e < i.blobVersionedHashes.length; e++) C(I(i.blobVersionedHashes[e], 32), `invalid blobVersionedHash at index ${e}: must be length 32`, "data", t);
                                    return 11 === e.length || sL(i, e.slice(11)), i
                                }(e))
                        }
                        k(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                            operation: "from"
                        })
                    }
                    let e = new sU;
                    return null != t.type && (e.type = t.type), null != t.to && (e.to = t.to), null != t.nonce && (e.nonce = t.nonce), null != t.gasLimit && (e.gasLimit = t.gasLimit), null != t.gasPrice && (e.gasPrice = t.gasPrice), null != t.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null != t.maxFeePerBlobGas && (e.maxFeePerBlobGas = t.maxFeePerBlobGas), null != t.data && (e.data = t.data), null != t.value && (e.value = t.value), null != t.chainId && (e.chainId = t.chainId), null != t.signature && (e.signature = iS.from(t.signature)), null != t.accessList && (e.accessList = t.accessList), null != t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes), null != t.kzg && (e.kzg = t.kzg), null != t.blobs && (e.blobs = t.blobs), null != t.hash && (C(e.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t), C(e.hash === t.hash, "hash mismatch", "tx", t)), null != t.from && (C(e.isSigned(), "unsigned transaction cannot define '.from'", "tx", t), C(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e
                }
            }
            let sV = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            BigInt(0);
            let sj = BigInt(58);

            function sG(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : C(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }
            class sH {
                name;
                constructor(t) {
                    A(this, {
                        name: t
                    })
                }
                connect(t) {
                    return this
                }
                supportsCoinType(t) {
                    return !1
                }
                async encodeAddress(t, e) {
                    throw Error("unsupported coin")
                }
                async decodeAddress(t, e) {
                    throw Error("unsupported coin")
                }
            }
            let sQ = RegExp("^(ipfs)://(.*)$", "i"),
                sz = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), sQ, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
            class sJ {
                provider;
                address;
                name;#
                tA;#
                tb;
                constructor(t, e, r) {
                    A(this, {
                        provider: t,
                        address: e,
                        name: r
                    }), this.#tA = null, this.#tb = new nC(e, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], t)
                }
                async supportsWildcard() {
                    return null == this.#tA && (this.#tA = (async () => {
                        try {
                            return await this.#tb.supportsInterface("0x9061b923")
                        } catch (t) {
                            if (E(t, "CALL_EXCEPTION")) return !1;
                            throw this.#tA = null, t
                        }
                    })()), await this.#tA
                }
                async# tE(t, e) {
                    var r;
                    e = (e || []).slice();
                    let n = this.#tb.interface;
                    e.unshift(n3(this.name));
                    let i = null;
                    await this.supportsWildcard() && (k(i = n.getFunction(t), "missing fragment", "UNKNOWN_ERROR", {
                        info: {
                            funcName: t
                        }
                    }), e = [(r = this.name, C(!0, "DNS encoded label cannot exceed 255", "length", 255), M(L(n2(r).map(t => {
                        C(t.length <= 255, `label ${JSON.stringify(r)} exceeds 255 bytes`, "name", r);
                        let e = new Uint8Array(t.length + 1);
                        return e.set(t, 1), e[0] = e.length - 1, e
                    }))) + "00"), n.encodeFunctionData(i, e)], t = "resolve(bytes,bytes)"), e.push({
                        enableCcipRead: !0
                    });
                    try {
                        let r = await this.#tb[t](...e);
                        if (i) return n.decodeFunctionResult(i, r)[0];
                        return r
                    } catch (t) {
                        if (!E(t, "CALL_EXCEPTION")) throw t
                    }
                    return null
                }
                async getAddress(t) {
                    if (null == t && (t = 60), 60 === t) try {
                        let t = await this.#tE("addr(bytes32)");
                        if (null == t || t === rG) return null;
                        return t
                    } catch (t) {
                        if (E(t, "CALL_EXCEPTION")) return null;
                        throw t
                    }
                    if (t >= 0 && t < 2147483648) {
                        let e = t + 2147483648,
                            r = await this.#tE("addr(bytes32,uint)", [e]);
                        if (I(r, 20)) return t2(r)
                    }
                    let e = null;
                    for (let r of this.provider.plugins)
                        if (r instanceof sH && r.supportsCoinType(t)) {
                            e = r;
                            break
                        }
                    if (null == e) return null;
                    let r = await this.#tE("addr(bytes32,uint)", [t]);
                    if (null == r || "0x" === r) return null;
                    let n = await e.decodeAddress(t, r);
                    if (null != n) return n;
                    k(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
                        operation: `getAddress(${t})`,
                        info: {
                            coinType: t,
                            data: r
                        }
                    })
                }
                async getText(t) {
                    let e = await this.#tE("text(bytes32,string)", [t]);
                    return null == e || "0x" === e ? null : e
                }
                async getContentHash() {
                    let t = await this.#tE("contenthash(bytes32)");
                    if (null == t || "0x" === t) return null;
                    let e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (e) {
                        let t = "e3010170" === e[1] ? "ipfs" : "ipns",
                            r = parseInt(e[4], 16);
                        if (e[5].length === 2 * r) return `${t}://${function(t){let e=N(t),r=W(e),n="";for(;r;)n=sV[Number(r%sj)]+n,r/=sj;for(let t=0;t<e.length&&!e[t];t++)n=sV[0]+n;return n}("0x"+e[2])}`
                    }
                    let r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    if (r && 64 === r[1].length) return `bzz://${r[1]}`;
                    k(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
                        operation: "getContentHash()",
                        info: {
                            data: t
                        }
                    })
                }
                async getAvatar() {
                    return (await this._getAvatar()).url
                }
                async _getAvatar() {
                    let t = [{
                        type: "name",
                        value: this.name
                    }];
                    try {
                        let e = await this.getText("avatar");
                        if (null == e) return t.push({
                            type: "!avatar",
                            value: ""
                        }), {
                            url: null,
                            linkage: t
                        };
                        t.push({
                            type: "avatar",
                            value: e
                        });
                        for (let r = 0; r < sz.length; r++) {
                            let n = e.match(sz[r]);
                            if (null == n) continue;
                            let i = n[1].toLowerCase();
                            switch (i) {
                                case "https":
                                case "data":
                                    return t.push({
                                        type: "url",
                                        value: e
                                    }), {
                                        linkage: t,
                                        url: e
                                    };
                                case "ipfs":
                                    {
                                        let r = sG(e);
                                        return t.push({
                                            type: "ipfs",
                                            value: e
                                        }),
                                        t.push({
                                            type: "url",
                                            value: r
                                        }),
                                        {
                                            linkage: t,
                                            url: r
                                        }
                                    }
                                case "erc721":
                                case "erc1155":
                                    {
                                        let r = "erc721" === i ? "tokenURI(uint256)" : "uri(uint256)";t.push({
                                            type: i,
                                            value: e
                                        });
                                        let s = await this.getAddress();
                                        if (null == s) return t.push({
                                            type: "!owner",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        let a = (n[2] || "").split("/");
                                        if (2 !== a.length) return t.push({
                                            type: `!${i}caip`,
                                            value: n[2] || ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        let o = a[1],
                                            l = new nC(a[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                                        if ("erc721" === i) {
                                            let e = await l.ownerOf(o);
                                            if (s !== e) return t.push({
                                                type: "!owner",
                                                value: e
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "owner",
                                                value: e
                                            })
                                        } else if ("erc1155" === i) {
                                            let e = await l.balanceOf(s, o);
                                            if (!e) return t.push({
                                                type: "!balance",
                                                value: "0"
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "balance",
                                                value: e.toString()
                                            })
                                        }
                                        let u = await l[r](o);
                                        if (null == u || "0x" === u) return t.push({
                                            type: "!metadata-url",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata-url-base",
                                            value: u
                                        }),
                                        "erc1155" === i && (u = u.replace("{id}", Y(o, 32).substring(2)), t.push({
                                            type: "metadata-url-expanded",
                                            value: u
                                        })),
                                        u.match(/^ipfs:/i) && (u = sG(u)),
                                        t.push({
                                            type: "metadata-url",
                                            value: u
                                        });
                                        let h = {},
                                            c = await new rU(u).send();c.assertOk();
                                        try {
                                            h = c.bodyJson
                                        } catch (e) {
                                            try {
                                                t.push({
                                                    type: "!metadata",
                                                    value: c.bodyText
                                                })
                                            } catch (r) {
                                                let e = c.body;
                                                e && t.push({
                                                    type: "!metadata",
                                                    value: M(e)
                                                })
                                            }
                                            return {
                                                url: null,
                                                linkage: t
                                            }
                                        }
                                        if (!h) return t.push({
                                            type: "!metadata",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };t.push({
                                            type: "metadata",
                                            value: JSON.stringify(h)
                                        });
                                        let d = h.image;
                                        if ("string" != typeof d) return t.push({
                                            type: "!imageUrl",
                                            value: ""
                                        }), {
                                            url: null,
                                            linkage: t
                                        };
                                        if (d.match(/^(https:\/\/|data:)/i));
                                        else {
                                            let e = d.match(sQ);
                                            if (null == e) return t.push({
                                                type: "!imageUrl-ipfs",
                                                value: d
                                            }), {
                                                url: null,
                                                linkage: t
                                            };
                                            t.push({
                                                type: "imageUrl-ipfs",
                                                value: d
                                            }), d = sG(d)
                                        }
                                        return t.push({
                                            type: "url",
                                            value: d
                                        }),
                                        {
                                            linkage: t,
                                            url: d
                                        }
                                    }
                            }
                        }
                    } catch (t) {}
                    return {
                        linkage: t,
                        url: null
                    }
                }
                static async getEnsAddress(t) {
                    let e = await t.getNetwork(),
                        r = e.getPlugin("org.ethers.plugins.network.Ens");
                    return k(r, "network does not support ENS", "UNSUPPORTED_OPERATION", {
                        operation: "getEnsAddress",
                        info: {
                            network: e
                        }
                    }), r.address
                }
                static async# tx(t, e) {
                    let r = await sJ.getEnsAddress(t);
                    try {
                        let n = new nC(r, ["function resolver(bytes32) view returns (address)"], t),
                            i = await n.resolver(n3(e), {
                                enableCcipRead: !0
                            });
                        if (i === rG) return null;
                        return i
                    } catch (t) {
                        throw t
                    }
                    return null
                }
                static async fromName(t, e) {
                    let r = e;
                    for (;;) {
                        if ("" === r || "." === r || "eth" !== e && "eth" === r) return null;
                        let n = await sJ.#tx(t, r);
                        if (null != n) {
                            let i = new sJ(t, n, e);
                            if (r !== e && !await i.supportsWildcard()) return null;
                            return i
                        }
                        r = r.split(".").slice(1).join(".")
                    }
                }
            }
            let sK = BigInt(0);

            function s_(t, e) {
                return function(r) {
                    return null == r ? e : t(r)
                }
            }

            function sq(t, e) {
                return r => {
                    if (e && null == r) return null;
                    if (!Array.isArray(r)) throw Error("not an array");
                    return r.map(e => t(e))
                }
            }

            function sW(t, e) {
                return r => {
                    let n = {};
                    for (let i in t) {
                        let s = i;
                        if (e && i in e && !(s in r)) {
                            for (let t of e[i])
                                if (t in r) {
                                    s = t;
                                    break
                                }
                        }
                        try {
                            let e = t[i](r[s]);
                            void 0 !== e && (n[i] = e)
                        } catch (e) {
                            let t = e instanceof Error ? e.message : "not-an-error";
                            k(!1, `invalid value for value.${i} (${t})`, "BAD_DATA", {
                                value: r
                            })
                        }
                    }
                    return n
                }
            }

            function sZ(t) {
                return C(I(t, !0), "invalid data", "value", t), t
            }

            function sY(t) {
                return C(I(t, 32), "invalid hash", "value", t), t
            }
            let sX = sW({
                    address: t2,
                    blockHash: sY,
                    blockNumber: Z,
                    data: sZ,
                    index: Z,
                    removed: s_(function(t) {
                        switch (t) {
                            case !0:
                            case "true":
                                return !0;
                            case !1:
                            case "false":
                                return !1
                        }
                        C(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
                    }, !1),
                    topics: sq(sY),
                    transactionHash: sY,
                    transactionIndex: Z
                }, {
                    index: ["logIndex"]
                }),
                s$ = sW({
                    hash: s_(sY),
                    parentHash: sY,
                    parentBeaconBlockRoot: s_(sY, null),
                    number: Z,
                    timestamp: Z,
                    nonce: s_(sZ),
                    difficulty: K,
                    gasLimit: K,
                    gasUsed: K,
                    stateRoot: s_(sY, null),
                    receiptsRoot: s_(sY, null),
                    blobGasUsed: s_(K, null),
                    excessBlobGas: s_(K, null),
                    miner: s_(t2),
                    prevRandao: s_(sY, null),
                    extraData: sZ,
                    baseFeePerGas: s_(K)
                }, {
                    prevRandao: ["mixHash"]
                }),
                s0 = sW({
                    transactionIndex: Z,
                    blockNumber: Z,
                    transactionHash: sY,
                    address: t2,
                    topics: sq(sY),
                    data: sZ,
                    index: Z,
                    blockHash: sY
                }, {
                    index: ["logIndex"]
                }),
                s1 = sW({
                    to: s_(t2, null),
                    from: s_(t2, null),
                    contractAddress: s_(t2, null),
                    index: Z,
                    root: s_(M),
                    gasUsed: K,
                    blobGasUsed: s_(K, null),
                    logsBloom: s_(sZ),
                    blockHash: sY,
                    hash: sY,
                    logs: sq(function(t) {
                        return s0(t)
                    }),
                    blockNumber: Z,
                    cumulativeGasUsed: K,
                    effectiveGasPrice: s_(K),
                    blobGasPrice: s_(K, null),
                    status: s_(Z),
                    type: s_(Z, 0)
                }, {
                    effectiveGasPrice: ["gasPrice"],
                    hash: ["transactionHash"],
                    index: ["transactionIndex"]
                });

            function s2(t) {
                t.to && K(t.to) === sK && (t.to = "0x0000000000000000000000000000000000000000");
                let e = sW({
                    hash: sY,
                    index: s_(Z, void 0),
                    type: t => "0x" === t || null == t ? 0 : Z(t),
                    accessList: s_(rC, null),
                    blobVersionedHashes: s_(sq(sY, !0), null),
                    blockHash: s_(sY, null),
                    blockNumber: s_(Z, null),
                    transactionIndex: s_(Z, null),
                    from: t2,
                    gasPrice: s_(K),
                    maxPriorityFeePerGas: s_(K),
                    maxFeePerGas: s_(K),
                    maxFeePerBlobGas: s_(K, null),
                    gasLimit: K,
                    to: s_(t2, null),
                    value: K,
                    nonce: Z,
                    data: sZ,
                    creates: s_(t2, null),
                    chainId: s_(K, null)
                }, {
                    data: ["input"],
                    gasLimit: ["gas"],
                    index: ["transactionIndex"]
                })(t);
                if (null == e.to && null == e.creates && (e.creates = function(t) {
                        let e = t2(t.from),
                            r = K(t.nonce, "tx.nonce").toString(16);
                        return t2(V(tZ(sx([e, r = "0" === r ? "0x" : r.length % 2 ? "0x0" + r : "0x" + r])), 12))
                    }(e)), (1 === t.type || 2 === t.type) && null == t.accessList && (e.accessList = []), t.signature ? e.signature = iS.from(t.signature) : e.signature = iS.from(t), null == e.chainId) {
                    let t = e.signature.legacyChainId;
                    null != t && (e.chainId = t)
                }
                return e.blockHash && K(e.blockHash) === sK && (e.blockHash = null), e
            }
            class s3 {
                name;
                constructor(t) {
                    A(this, {
                        name: t
                    })
                }
                clone() {
                    return new s3(this.name)
                }
            }
            class s4 extends s3 {
                effectiveBlock;
                txBase;
                txCreate;
                txDataZero;
                txDataNonzero;
                txAccessListStorageKey;
                txAccessListAddress;
                constructor(t, e) {
                    null == t && (t = 0), super(`org.ethers.network.plugins.GasCost#${t||0}`);
                    let r = {
                        effectiveBlock: t
                    };

                    function n(t, n) {
                        let i = (e || {})[t];
                        null == i && (i = n), C("number" == typeof i, `invalud value for ${t}`, "costs", e), r[t] = i
                    }
                    n("txBase", 21e3), n("txCreate", 32e3), n("txDataZero", 4), n("txDataNonzero", 16), n("txAccessListStorageKey", 1900), n("txAccessListAddress", 2400), A(this, r)
                }
                clone() {
                    return new s4(this.effectiveBlock, this)
                }
            }
            class s8 extends s3 {
                address;
                targetNetwork;
                constructor(t, e) {
                    super("org.ethers.plugins.network.Ens"), A(this, {
                        address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        targetNetwork: null == e ? 1 : e
                    })
                }
                clone() {
                    return new s8(this.address, this.targetNetwork)
                }
            }
            class s5 extends s3 {#
                C;#
                tP;
                get url() {
                    return this.#C
                }
                get processFunc() {
                    return this.#tP
                }
                constructor(t, e) {
                    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"), this.#C = t, this.#tP = e
                }
                clone() {
                    return this
                }
            }
            let s6 = new Map;
            class s9 {#
                tk;#
                td;#
                tC;
                constructor(t, e) {
                    this.#tk = t, this.#td = K(e), this.#tC = new Map
                }
                toJSON() {
                    return {
                        name: this.name,
                        chainId: String(this.chainId)
                    }
                }
                get name() {
                    return this.#tk
                }
                set name(t) {
                    this.#tk = t
                }
                get chainId() {
                    return this.#td
                }
                set chainId(t) {
                    this.#td = K(t, "chainId")
                }
                matches(t) {
                    if (null == t) return !1;
                    if ("string" == typeof t) {
                        try {
                            return this.chainId === K(t)
                        } catch (t) {}
                        return this.name === t
                    }
                    if ("number" == typeof t || "bigint" == typeof t) {
                        try {
                            return this.chainId === K(t)
                        } catch (t) {}
                        return !1
                    }
                    if ("object" == typeof t) {
                        if (null != t.chainId) {
                            try {
                                return this.chainId === K(t.chainId)
                            } catch (t) {}
                            return !1
                        }
                        if (null != t.name) return this.name === t.name
                    }
                    return !1
                }
                get plugins() {
                    return Array.from(this.#tC.values())
                }
                attachPlugin(t) {
                    if (this.#tC.get(t.name)) throw Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#tC.set(t.name, t.clone()), this
                }
                getPlugin(t) {
                    return this.#tC.get(t) || null
                }
                getPlugins(t) {
                    return this.plugins.filter(e => e.name.split("#")[0] === t)
                }
                clone() {
                    let t = new s9(this.name, this.chainId);
                    return this.plugins.forEach(e => {
                        t.attachPlugin(e.clone())
                    }), t
                }
                computeIntrinsicGas(t) {
                    let e = this.getPlugin("org.ethers.plugins.network.GasCost") || new s4,
                        r = e.txBase;
                    if (null == t.to && (r += e.txCreate), t.data)
                        for (let n = 2; n < t.data.length; n += 2) "00" === t.data.substring(n, n + 2) ? r += e.txDataZero : r += e.txDataNonzero;
                    if (t.accessList) {
                        let n = rC(t.accessList);
                        for (let t in n) r += e.txAccessListAddress + e.txAccessListStorageKey * n[t].storageKeys.length
                    }
                    return r
                }
                static from(t) {
                    if (function() {
                            ae || (ae = !0, t("mainnet", 1, {
                                ensNetwork: 1,
                                altNames: ["homestead"]
                            }), t("ropsten", 3, {
                                ensNetwork: 3
                            }), t("rinkeby", 4, {
                                ensNetwork: 4
                            }), t("goerli", 5, {
                                ensNetwork: 5
                            }), t("kovan", 42, {
                                ensNetwork: 42
                            }), t("sepolia", 11155111, {
                                ensNetwork: 11155111
                            }), t("holesky", 17e3, {
                                ensNetwork: 17e3
                            }), t("classic", 61, {}), t("classicKotti", 6, {}), t("arbitrum", 42161, {
                                ensNetwork: 1
                            }), t("arbitrum-goerli", 421613, {}), t("arbitrum-sepolia", 421614, {}), t("base", 8453, {
                                ensNetwork: 1
                            }), t("base-goerli", 84531, {}), t("base-sepolia", 84532, {}), t("bnb", 56, {
                                ensNetwork: 1
                            }), t("bnbt", 97, {}), t("linea", 59144, {
                                ensNetwork: 1
                            }), t("linea-goerli", 59140, {}), t("linea-sepolia", 59141, {}), t("matic", 137, {
                                ensNetwork: 1,
                                plugins: [at("https://gasstation.polygon.technology/v2")]
                            }), t("matic-amoy", 80002, {}), t("matic-mumbai", 80001, {
                                altNames: ["maticMumbai", "maticmum"],
                                plugins: [at("https://gasstation-testnet.polygon.technology/v2")]
                            }), t("optimism", 10, {
                                ensNetwork: 1,
                                plugins: []
                            }), t("optimism-goerli", 420, {}), t("optimism-sepolia", 11155420, {}), t("xdai", 100, {
                                ensNetwork: 1
                            }));

                            function t(t, e, r) {
                                let n = function() {
                                    let n = new s9(t, e);
                                    return null != r.ensNetwork && n.attachPlugin(new s8(null, r.ensNetwork)), n.attachPlugin(new s4), (r.plugins || []).forEach(t => {
                                        n.attachPlugin(t)
                                    }), n
                                };
                                s9.register(t, n), s9.register(e, n), r.altNames && r.altNames.forEach(t => {
                                    s9.register(t, n)
                                })
                            }
                        }(), null == t) return s9.from("mainnet");
                    if ("number" == typeof t && (t = BigInt(t)), "string" == typeof t || "bigint" == typeof t) {
                        let e = s6.get(t);
                        if (e) return e();
                        if ("bigint" == typeof t) return new s9("unknown", t);
                        C(!1, "unknown network", "network", t)
                    }
                    if ("function" == typeof t.clone) return t.clone();
                    if ("object" == typeof t) {
                        C("string" == typeof t.name && "number" == typeof t.chainId, "invalid network object name or chainId", "network", t);
                        let e = new s9(t.name, t.chainId);
                        return (t.ensAddress || null != t.ensNetwork) && e.attachPlugin(new s8(t.ensAddress, t.ensNetwork)), e
                    }
                    C(!1, "invalid network", "network", t)
                }
                static register(t, e) {
                    "number" == typeof t && (t = BigInt(t));
                    let r = s6.get(t);
                    r && C(!1, `conflicting network for ${JSON.stringify(r.name)}`, "nameOrChainId", t), s6.set(t, e)
                }
            }

            function s7(t, e) {
                let r = String(t);
                if (!r.match(/^[0-9.]+$/)) throw Error(`invalid gwei value: ${t}`);
                let n = r.split(".");
                if (1 === n.length && n.push(""), 2 !== n.length) throw Error(`invalid gwei value: ${t}`);
                for (; n[1].length < e;) n[1] += "0";
                if (n[1].length > 9) {
                    let t = BigInt(n[1].substring(0, 9));
                    !n[1].substring(9).match(/^0+$/) && t++, n[1] = t.toString()
                }
                return BigInt(n[0] + n[1])
            }

            function at(t) {
                return new s5(t, async (t, e, r) => {
                    let n;
                    r.setHeader("User-Agent", "ethers");
                    try {
                        let [e, i] = await Promise.all([r.send(), t()]), s = (n = e).bodyJson.standard;
                        return {
                            gasPrice: i.gasPrice,
                            maxFeePerGas: s7(s.maxFee, 9),
                            maxPriorityFeePerGas: s7(s.maxPriorityFee, 9)
                        }
                    } catch (t) {
                        k(!1, `error encountered with polygon gas station (${JSON.stringify(r.url)})`, "SERVER_ERROR", {
                            request: r,
                            response: n,
                            error: t
                        })
                    }
                })
            }
            let ae = !1;

            function ar(t) {
                return JSON.parse(JSON.stringify(t))
            }
            class an {#
                tT;#
                tS;#
                tR;#
                tB;
                constructor(t) {
                    this.#tT = t, this.#tS = null, this.#tR = 4e3, this.#tB = -2
                }
                get pollingInterval() {
                    return this.#tR
                }
                set pollingInterval(t) {
                    this.#tR = t
                }
                async# tN() {
                    try {
                        let t = await this.#tT.getBlockNumber();
                        if (-2 === this.#tB) {
                            this.#tB = t;
                            return
                        }
                        if (t !== this.#tB) {
                            for (let e = this.#tB + 1; e <= t; e++) {
                                if (null == this.#tS) return;
                                await this.#tT.emit("block", e)
                            }
                            this.#tB = t
                        }
                    } catch (t) {}
                    null != this.#tS && (this.#tS = this.#tT._setTimeout(this.#tN.bind(this), this.#tR))
                }
                start() {
                    this.#tS || (this.#tS = this.#tT._setTimeout(this.#tN.bind(this), this.#tR), this.#tN())
                }
                stop() {
                    this.#tS && (this.#tT._clearTimeout(this.#tS), this.#tS = null)
                }
                pause(t) {
                    this.stop(), t && (this.#tB = -2)
                }
                resume() {
                    this.start()
                }
            }
            class ai {#
                tT;#
                tN;#
                tO;
                constructor(t) {
                    this.#tT = t, this.#tO = !1, this.#tN = t => {
                        this._poll(t, this.#tT)
                    }
                }
                async _poll(t, e) {
                    throw Error("sub-classes must override this")
                }
                start() {
                    this.#tO || (this.#tO = !0, this.#tN(-2), this.#tT.on("block", this.#tN))
                }
                stop() {
                    this.#tO && (this.#tO = !1, this.#tT.off("block", this.#tN))
                }
                pause(t) {
                    this.stop()
                }
                resume() {
                    this.start()
                }
            }
            class as extends ai {#
                tI;#
                tD;
                constructor(t, e) {
                    super(t), this.#tI = e, this.#tD = -2
                }
                pause(t) {
                    t && (this.#tD = -2), super.pause(t)
                }
                async _poll(t, e) {
                    let r = await e.getBlock(this.#tI);
                    null != r && (-2 === this.#tD ? this.#tD = r.number : r.number > this.#tD && (e.emit(this.#tI, r.number), this.#tD = r.number))
                }
            }
            class aa extends ai {#
                X;
                constructor(t, e) {
                    super(t), this.#X = ar(e)
                }
                async _poll(t, e) {
                    throw Error("@TODO")
                }
            }
            class ao extends ai {#
                tF;
                constructor(t, e) {
                    super(t), this.#tF = e
                }
                async _poll(t, e) {
                    let r = await e.getTransactionReceipt(this.#tF);
                    r && e.emit(this.#tF, r)
                }
            }
            class al {#
                tT;#
                X;#
                tS;#
                tO;#
                tB;
                constructor(t, e) {
                    this.#tT = t, this.#X = ar(e), this.#tS = this.#tN.bind(this), this.#tO = !1, this.#tB = -2
                }
                async# tN(t) {
                    if (-2 === this.#tB) return;
                    let e = ar(this.#X);
                    e.fromBlock = this.#tB + 1, e.toBlock = t;
                    let r = await this.#tT.getLogs(e);
                    if (0 === r.length) {
                        this.#tB < t - 60 && (this.#tB = t - 60);
                        return
                    }
                    for (let t of r) this.#tT.emit(this.#X, t), this.#tB = t.blockNumber
                }
                start() {
                    this.#tO || (this.#tO = !0, -2 === this.#tB && this.#tT.getBlockNumber().then(t => {
                        this.#tB = t
                    }), this.#tT.on("block", this.#tS))
                }
                stop() {
                    this.#tO && (this.#tO = !1, this.#tT.off("block", this.#tS))
                }
                pause(t) {
                    this.stop(), t && (this.#tB = -2)
                }
                resume() {
                    this.start()
                }
            }
            let au = BigInt(2);

            function ah(t) {
                return t && "function" == typeof t.then
            }

            function ac(t, e) {
                return t + ":" + JSON.stringify(e, (t, e) => {
                    if (null == e) return "null";
                    if ("bigint" == typeof e) return `bigint:${e.toString()}`;
                    if ("string" == typeof e) return e.toLowerCase();
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let t = Object.keys(e);
                        return t.sort(), t.reduce((t, r) => (t[r] = e[r], t), {})
                    }
                    return e
                })
            }
            class ad {
                name;
                constructor(t) {
                    A(this, {
                        name: t
                    })
                }
                start() {}
                stop() {}
                pause(t) {}
                resume() {}
            }

            function af(t) {
                return (t = Array.from(new Set(t).values())).sort(), t
            }
            async function ap(t, e) {
                if (null == t) throw Error("invalid event");
                if (Array.isArray(t) && (t = {
                        topics: t
                    }), "string" == typeof t) switch (t) {
                    case "block":
                    case "debug":
                    case "error":
                    case "finalized":
                    case "network":
                    case "pending":
                    case "safe":
                        return {
                            type: t,
                            tag: t
                        }
                }
                if (I(t, 32)) {
                    let e = t.toLowerCase();
                    return {
                        type: "transaction",
                        tag: ac("tx", {
                            hash: e
                        }),
                        hash: e
                    }
                }
                if (t.orphan) {
                    let e = t;
                    return {
                        type: "orphan",
                        tag: ac("orphan", e),
                        filter: JSON.parse(JSON.stringify(e))
                    }
                }
                if (t.address || t.topics) {
                    let r = t,
                        n = {
                            topics: (r.topics || []).map(t => null == t ? null : Array.isArray(t) ? af(t.map(t => t.toLowerCase())) : t.toLowerCase())
                        };
                    if (r.address) {
                        let t = [],
                            i = [],
                            s = r => {
                                I(r) ? t.push(r) : i.push((async () => {
                                    t.push(await ru(r, e))
                                })())
                            };
                        Array.isArray(r.address) ? r.address.forEach(s) : s(r.address), i.length && await Promise.all(i), n.address = af(t.map(t => t.toLowerCase()))
                    }
                    return {
                        filter: n,
                        tag: ac("event", n),
                        type: "event"
                    }
                }
                C(!1, "unknown ProviderEvent", "event", t)
            }

            function ag() {
                return new Date().getTime()
            }
            let am = {
                cacheTimeout: 250,
                pollingInterval: 4e3
            };
            class ay {#
                tM;#
                tC;#
                tL;#
                tU;#
                tV;#
                tj;#
                tG;#
                tH;#
                tQ;#
                tz;#
                tJ;#
                h;
                constructor(t, e) {
                    if (this.#h = Object.assign({}, am, e || {}), "any" === t) this.#tj = !0, this.#tV = null;
                    else if (t) {
                        let e = s9.from(t);
                        this.#tj = !1, this.#tV = Promise.resolve(e), setTimeout(() => {
                            this.emit("network", e, null)
                        }, 0)
                    } else this.#tj = !1, this.#tV = null;
                    this.#tH = -1, this.#tG = new Map, this.#tM = new Map, this.#tC = new Map, this.#tL = null, this.#tU = !1, this.#tQ = 1, this.#tz = new Map, this.#tJ = !1
                }
                get pollingInterval() {
                    return this.#h.pollingInterval
                }
                get provider() {
                    return this
                }
                get plugins() {
                    return Array.from(this.#tC.values())
                }
                attachPlugin(t) {
                    if (this.#tC.get(t.name)) throw Error(`cannot replace existing plugin: ${t.name} `);
                    return this.#tC.set(t.name, t.connect(this)), this
                }
                getPlugin(t) {
                    return this.#tC.get(t) || null
                }
                get disableCcipRead() {
                    return this.#tJ
                }
                set disableCcipRead(t) {
                    this.#tJ = !!t
                }
                async# tK(t) {
                    let e = this.#h.cacheTimeout;
                    if (e < 0) return await this._perform(t);
                    let r = ac(t.method, t),
                        n = this.#tG.get(r);
                    return n || (n = this._perform(t), this.#tG.set(r, n), setTimeout(() => {
                        this.#tG.get(r) === n && this.#tG.delete(r)
                    }, e)), await n
                }
                async ccipReadFetch(t, e, r) {
                    if (this.disableCcipRead || 0 === r.length || null == t.to) return null;
                    let n = t.to.toLowerCase(),
                        i = e.toLowerCase(),
                        s = [];
                    for (let e = 0; e < r.length; e++) {
                        let a;
                        let o = r[e],
                            l = new rU(o.replace("{sender}", n).replace("{data}", i)); - 1 === o.indexOf("{data}") && (l.body = {
                            data: i,
                            sender: n
                        }), this.emit("debug", {
                            action: "sendCcipReadFetchRequest",
                            request: l,
                            index: e,
                            urls: r
                        });
                        let u = "unknown error";
                        try {
                            a = await l.send()
                        } catch (t) {
                            s.push(t.message), this.emit("debug", {
                                action: "receiveCcipReadFetchError",
                                request: l,
                                result: {
                                    error: t
                                }
                            });
                            continue
                        }
                        try {
                            let t = a.bodyJson;
                            if (t.data) return this.emit("debug", {
                                action: "receiveCcipReadFetchResult",
                                request: l,
                                result: t
                            }), t.data;
                            t.message && (u = t.message), this.emit("debug", {
                                action: "receiveCcipReadFetchError",
                                request: l,
                                result: t
                            })
                        } catch (t) {}
                        k(a.statusCode < 400 || a.statusCode >= 500, `response not found during CCIP fetch: ${u}`, "OFFCHAIN_FAULT", {
                            reason: "404_MISSING_RESOURCE",
                            transaction: t,
                            info: {
                                url: o,
                                errorMessage: u
                            }
                        }), s.push(u)
                    }
                    k(!1, `error encountered during CCIP fetch: ${s.map(t=>JSON.stringify(t)).join(", ")}`, "OFFCHAIN_FAULT", {
                        reason: "500_SERVER_ERROR",
                        transaction: t,
                        info: {
                            urls: r,
                            errorMessages: s
                        }
                    })
                }
                _wrapBlock(t, e) {
                    return new r0(function(t) {
                        let e = s$(t);
                        return e.transactions = t.transactions.map(t => "string" == typeof t ? t : s2(t)), e
                    }(t), this)
                }
                _wrapLog(t, e) {
                    return new r1(sX(t), this)
                }
                _wrapTransactionReceipt(t, e) {
                    return new r2(s1(t), this)
                }
                _wrapTransactionResponse(t, e) {
                    return new r3(s2(t), this)
                }
                _detectNetwork() {
                    k(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
                        operation: "_detectNetwork"
                    })
                }
                async _perform(t) {
                    k(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: t
                    })
                }
                async getBlockNumber() {
                    let t = Z(await this.#tK({
                        method: "getBlockNumber"
                    }), "%response");
                    return this.#tH >= 0 && (this.#tH = t), t
                }
                _getAddress(t) {
                    return ru(t, this)
                }
                _getBlockTag(t) {
                    if (null == t) return "latest";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "finalized":
                        case "latest":
                        case "pending":
                        case "safe":
                            return t
                    }
                    return I(t) ? I(t, 32) ? t : $(t) : ("bigint" == typeof t && (t = Z(t, "blockTag")), "number" == typeof t) ? t >= 0 ? $(t) : this.#tH >= 0 ? $(this.#tH + t) : this.getBlockNumber().then(e => $(e + t)) : void C(!1, "invalid blockTag", "blockTag", t)
                }
                _getFilter(t) {
                    let e, r;
                    let n = (t.topics || []).map(t => null == t ? null : Array.isArray(t) ? af(t.map(t => t.toLowerCase())) : t.toLowerCase()),
                        i = "blockHash" in t ? t.blockHash : void 0,
                        s = (t, e, r) => {
                            let s;
                            switch (t.length) {
                                case 0:
                                    break;
                                case 1:
                                    s = t[0];
                                    break;
                                default:
                                    t.sort(), s = t
                            }
                            if (i && (null != e || null != r)) throw Error("invalid filter");
                            let a = {};
                            return s && (a.address = s), n.length && (a.topics = n), e && (a.fromBlock = e), r && (a.toBlock = r), i && (a.blockHash = i), a
                        },
                        a = [];
                    if (t.address) {
                        if (Array.isArray(t.address))
                            for (let e of t.address) a.push(this._getAddress(e));
                        else a.push(this._getAddress(t.address))
                    }
                    return "fromBlock" in t && (e = this._getBlockTag(t.fromBlock)), ("toBlock" in t && (r = this._getBlockTag(t.toBlock)), a.filter(t => "string" != typeof t).length || null != e && "string" != typeof e || null != r && "string" != typeof r) ? Promise.all([Promise.all(a), e, r]).then(t => s(t[0], t[1], t[2])) : s(a, e, r)
                }
                _getTransactionRequest(t) {
                    let e = r$(t),
                        r = [];
                    if (["to", "from"].forEach(t => {
                            if (null == e[t]) return;
                            let n = ru(e[t], this);
                            ah(n) ? r.push(async function() {
                                e[t] = await n
                            }()) : e[t] = n
                        }), null != e.blockTag) {
                        let t = this._getBlockTag(e.blockTag);
                        ah(t) ? r.push(async function() {
                            e.blockTag = await t
                        }()) : e.blockTag = t
                    }
                    return r.length ? async function() {
                        return await Promise.all(r), e
                    }() : e
                }
                async getNetwork() {
                    if (null == this.#tV) {
                        let t = (async () => {
                            try {
                                let t = await this._detectNetwork();
                                return this.emit("network", t, null), t
                            } catch (e) {
                                throw this.#tV === t && (this.#tV = null), e
                            }
                        })();
                        return this.#tV = t, (await t).clone()
                    }
                    let t = this.#tV,
                        [e, r] = await Promise.all([t, this._detectNetwork()]);
                    return e.chainId !== r.chainId && (this.#tj ? (this.emit("network", r, e), this.#tV === t && (this.#tV = Promise.resolve(r))) : k(!1, `network changed: ${e.chainId} => ${r.chainId} `, "NETWORK_ERROR", {
                        event: "changed"
                    })), e.clone()
                }
                async getFeeData() {
                    let t = await this.getNetwork(),
                        e = async () => {
                            let {
                                _block: e,
                                gasPrice: r,
                                priorityFee: n
                            } = await w({
                                _block: this.#t_("latest", !1),
                                gasPrice: (async () => {
                                    try {
                                        let t = await this.#tK({
                                            method: "getGasPrice"
                                        });
                                        return K(t, "%response")
                                    } catch (t) {}
                                    return null
                                })(),
                                priorityFee: (async () => {
                                    try {
                                        let t = await this.#tK({
                                            method: "getPriorityFee"
                                        });
                                        return K(t, "%response")
                                    } catch (t) {}
                                    return null
                                })()
                            }), i = null, s = null, a = this._wrapBlock(e, t);
                            return a && a.baseFeePerGas && (s = null != n ? n : BigInt("1000000000"), i = a.baseFeePerGas * au + s), new rX(r, i, s)
                        },
                        r = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
                    if (r) {
                        let t = new rU(r.url),
                            n = await r.processFunc(e, this, t);
                        return new rX(n.gasPrice, n.maxFeePerGas, n.maxPriorityFeePerGas)
                    }
                    return await e()
                }
                async estimateGas(t) {
                    let e = this._getTransactionRequest(t);
                    return ah(e) && (e = await e), K(await this.#tK({
                        method: "estimateGas",
                        transaction: e
                    }), "%response")
                }
                async# tq(t, e, r) {
                    k(r < 10, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
                        reason: "TOO_MANY_REDIRECTS",
                        transaction: Object.assign({}, t, {
                            blockTag: e,
                            enableCcipRead: !0
                        })
                    });
                    let n = r$(t);
                    try {
                        return M(await this._perform({
                            method: "call",
                            transaction: n,
                            blockTag: e
                        }))
                    } catch (t) {
                        if (!this.disableCcipRead && x(t) && t.data && r >= 0 && "latest" === e && null != n.to && "0x556f1830" === V(t.data, 0, 4)) {
                            let i;
                            let s = t.data,
                                a = await ru(n.to, this);
                            try {
                                i = function(t) {
                                    let e = {
                                        sender: "",
                                        urls: [],
                                        calldata: "",
                                        selector: "",
                                        extraData: "",
                                        errorArgs: []
                                    };
                                    k(U(t) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
                                        reason: "insufficient OffchainLookup data"
                                    });
                                    let r = V(t, 0, 32);
                                    k(V(r, 0, 12) === V(ab, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup sender"
                                    }), e.sender = V(r, 12);
                                    try {
                                        let r = [],
                                            n = Z(V(t, 32, 64)),
                                            i = Z(V(t, n, n + 32)),
                                            s = V(t, n + 32);
                                        for (let t = 0; t < i; t++) {
                                            let e = function(t, e) {
                                                try {
                                                    let r = av(t, e);
                                                    if (r) return em(r)
                                                } catch (t) {}
                                                return null
                                            }(s, 32 * t);
                                            if (null == e) throw Error("abort");
                                            r.push(e)
                                        }
                                        e.urls = r
                                    } catch (t) {
                                        k(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup urls"
                                        })
                                    }
                                    try {
                                        let r = av(t, 64);
                                        if (null == r) throw Error("abort");
                                        e.calldata = r
                                    } catch (t) {
                                        k(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup calldata"
                                        })
                                    }
                                    k(V(t, 100, 128) === V(ab, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
                                        reason: "corrupt OffchainLookup callbaackSelector"
                                    }), e.selector = V(t, 96, 100);
                                    try {
                                        let r = av(t, 128);
                                        if (null == r) throw Error("abort");
                                        e.extraData = r
                                    } catch (t) {
                                        k(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
                                            reason: "corrupt OffchainLookup extraData"
                                        })
                                    }
                                    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map(t => e[t]), e
                                }(V(t.data, 4))
                            } catch (t) {
                                k(!1, t.message, "OFFCHAIN_FAULT", {
                                    reason: "BAD_DATA",
                                    transaction: n,
                                    info: {
                                        data: s
                                    }
                                })
                            }
                            k(i.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                                action: "call",
                                data: s,
                                reason: "OffchainLookup",
                                transaction: n,
                                invocation: null,
                                revert: {
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    name: "OffchainLookup",
                                    args: i.errorArgs
                                }
                            });
                            let o = await this.ccipReadFetch(n, i.calldata, i.urls);
                            k(null != o, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                                reason: "FETCH_FAILED",
                                transaction: n,
                                info: {
                                    data: t.data,
                                    errorArgs: i.errorArgs
                                }
                            });
                            let l = {
                                to: a,
                                data: L([i.selector, function(t) {
                                    let e = [],
                                        r = 0;
                                    for (let n = 0; n < t.length; n++) e.push(aA), r += 32;
                                    for (let n = 0; n < t.length; n++) {
                                        let i = N(t[n]);
                                        e[n] = aw(r), e.push(aw(i.length)), e.push(function(t) {
                                            if (t.length % 32 == 0) return t;
                                            let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                                            return e.set(t), e
                                        }(i)), r += 32 + 32 * Math.ceil(i.length / 32)
                                    }
                                    return L(e)
                                }([o, i.extraData])])
                            };
                            this.emit("debug", {
                                action: "sendCcipReadCall",
                                transaction: l
                            });
                            try {
                                let t = await this.#tq(l, e, r + 1);
                                return this.emit("debug", {
                                    action: "receiveCcipReadCallResult",
                                    transaction: Object.assign({}, l),
                                    result: t
                                }), t
                            } catch (t) {
                                throw this.emit("debug", {
                                    action: "receiveCcipReadCallError",
                                    transaction: Object.assign({}, l),
                                    error: t
                                }), t
                            }
                        }
                        throw t
                    }
                }
                async# tW(t) {
                    let {
                        value: e
                    } = await w({
                        network: this.getNetwork(),
                        value: t
                    });
                    return e
                }
                async call(t) {
                    let {
                        tx: e,
                        blockTag: r
                    } = await w({
                        tx: this._getTransactionRequest(t),
                        blockTag: this._getBlockTag(t.blockTag)
                    });
                    return await this.#tW(this.#tq(e, r, t.enableCcipRead ? 0 : -1))
                }
                async# tZ(t, e, r) {
                    let n = this._getAddress(e),
                        i = this._getBlockTag(r);
                    return ("string" != typeof n || "string" != typeof i) && ([n, i] = await Promise.all([n, i])), await this.#tW(this.#tK(Object.assign(t, {
                        address: n,
                        blockTag: i
                    })))
                }
                async getBalance(t, e) {
                    return K(await this.#tZ({
                        method: "getBalance"
                    }, t, e), "%response")
                }
                async getTransactionCount(t, e) {
                    return Z(await this.#tZ({
                        method: "getTransactionCount"
                    }, t, e), "%response")
                }
                async getCode(t, e) {
                    return M(await this.#tZ({
                        method: "getCode"
                    }, t, e))
                }
                async getStorage(t, e, r) {
                    let n = K(e, "position");
                    return M(await this.#tZ({
                        method: "getStorage",
                        position: n
                    }, t, r))
                }
                async broadcastTransaction(t) {
                    let {
                        blockNumber: e,
                        hash: r,
                        network: n
                    } = await w({
                        blockNumber: this.getBlockNumber(),
                        hash: this._perform({
                            method: "broadcastTransaction",
                            signedTransaction: t
                        }),
                        network: this.getNetwork()
                    }), i = sU.from(t);
                    if (i.hash !== r) throw Error("@TODO: the returned hash did not match");
                    return this._wrapTransactionResponse(i, n).replaceableTransaction(e)
                }
                async# t_(t, e) {
                    if (I(t, 32)) return await this.#tK({
                        method: "getBlock",
                        blockHash: t,
                        includeTransactions: e
                    });
                    let r = this._getBlockTag(t);
                    return "string" != typeof r && (r = await r), await this.#tK({
                        method: "getBlock",
                        blockTag: r,
                        includeTransactions: e
                    })
                }
                async getBlock(t, e) {
                    let {
                        network: r,
                        params: n
                    } = await w({
                        network: this.getNetwork(),
                        params: this.#t_(t, !!e)
                    });
                    return null == n ? null : this._wrapBlock(n, r)
                }
                async getTransaction(t) {
                    let {
                        network: e,
                        params: r
                    } = await w({
                        network: this.getNetwork(),
                        params: this.#tK({
                            method: "getTransaction",
                            hash: t
                        })
                    });
                    return null == r ? null : this._wrapTransactionResponse(r, e)
                }
                async getTransactionReceipt(t) {
                    let {
                        network: e,
                        params: r
                    } = await w({
                        network: this.getNetwork(),
                        params: this.#tK({
                            method: "getTransactionReceipt",
                            hash: t
                        })
                    });
                    if (null == r) return null;
                    if (null == r.gasPrice && null == r.effectiveGasPrice) {
                        let e = await this.#tK({
                            method: "getTransaction",
                            hash: t
                        });
                        if (null == e) throw Error("report this; could not find tx or effectiveGasPrice");
                        r.effectiveGasPrice = e.gasPrice
                    }
                    return this._wrapTransactionReceipt(r, e)
                }
                async getTransactionResult(t) {
                    let {
                        result: e
                    } = await w({
                        network: this.getNetwork(),
                        result: this.#tK({
                            method: "getTransactionResult",
                            hash: t
                        })
                    });
                    return null == e ? null : M(e)
                }
                async getLogs(t) {
                    let e = this._getFilter(t);
                    ah(e) && (e = await e);
                    let {
                        network: r,
                        params: n
                    } = await w({
                        network: this.getNetwork(),
                        params: this.#tK({
                            method: "getLogs",
                            filter: e
                        })
                    });
                    return n.map(t => this._wrapLog(t, r))
                }
                _getProvider(t) {
                    k(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
                        operation: "_getProvider()"
                    })
                }
                async getResolver(t) {
                    return await sJ.fromName(this, t)
                }
                async getAvatar(t) {
                    let e = await this.getResolver(t);
                    return e ? await e.getAvatar() : null
                }
                async resolveName(t) {
                    let e = await this.getResolver(t);
                    return e ? await e.getAddress() : null
                }
                async lookupAddress(t) {
                    let e = n3((t = t2(t)).substring(2).toLowerCase() + ".addr.reverse");
                    try {
                        let r = await sJ.getEnsAddress(this),
                            n = new nC(r, ["function resolver(bytes32) view returns (address)"], this),
                            i = await n.resolver(e);
                        if (null == i || i === rG) return null;
                        let s = new nC(i, ["function name(bytes32) view returns (string)"], this),
                            a = await s.name(e);
                        if (await this.resolveName(a) !== t) return null;
                        return a
                    } catch (t) {
                        if (E(t, "BAD_DATA") && "0x" === t.value || E(t, "CALL_EXCEPTION")) return null;
                        throw t
                    }
                    return null
                }
                async waitForTransaction(t, e, r) {
                    let n = null != e ? e : 1;
                    return 0 === n ? this.getTransactionReceipt(t) : new Promise(async (e, i) => {
                        let s = null,
                            a = async r => {
                                try {
                                    let i = await this.getTransactionReceipt(t);
                                    if (null != i && r - i.blockNumber + 1 >= n) {
                                        e(i), s && (clearTimeout(s), s = null);
                                        return
                                    }
                                } catch (t) {
                                    console.log("EEE", t)
                                }
                                this.once("block", a)
                            };
                        null != r && (s = setTimeout(() => {
                            null != s && (s = null, this.off("block", a), i(P("timeout", "TIMEOUT", {
                                reason: "timeout"
                            })))
                        }, r)), a(await this.getBlockNumber())
                    })
                }
                async waitForBlock(t) {
                    k(!1, "not implemented yet", "NOT_IMPLEMENTED", {
                        operation: "waitForBlock"
                    })
                }
                _clearTimeout(t) {
                    let e = this.#tz.get(t);
                    e && (e.timer && clearTimeout(e.timer), this.#tz.delete(t))
                }
                _setTimeout(t, e) {
                    null == e && (e = 0);
                    let r = this.#tQ++,
                        n = () => {
                            this.#tz.delete(r), t()
                        };
                    if (this.paused) this.#tz.set(r, {
                        timer: null,
                        func: n,
                        time: e
                    });
                    else {
                        let t = setTimeout(n, e);
                        this.#tz.set(r, {
                            timer: t,
                            func: n,
                            time: ag()
                        })
                    }
                    return r
                }
                _forEachSubscriber(t) {
                    for (let e of this.#tM.values()) t(e.subscriber)
                }
                _getSubscriber(t) {
                    switch (t.type) {
                        case "debug":
                        case "error":
                        case "network":
                            return new ad(t.type);
                        case "block":
                            {
                                let t = new an(this);
                                return t.pollingInterval = this.pollingInterval,
                                t
                            }
                        case "safe":
                        case "finalized":
                            return new as(this, t.type);
                        case "event":
                            return new al(this, t.filter);
                        case "transaction":
                            return new ao(this, t.hash);
                        case "orphan":
                            return new aa(this, t.filter)
                    }
                    throw Error(`unsupported event: ${t.type}`)
                }
                _recoverSubscriber(t, e) {
                    for (let r of this.#tM.values())
                        if (r.subscriber === t) {
                            r.started && r.subscriber.stop(), r.subscriber = e, r.started && e.start(), null != this.#tL && e.pause(this.#tL);
                            break
                        }
                }
                async# tY(t, e) {
                    let r = await ap(t, this);
                    return "event" === r.type && e && e.length > 0 && !0 === e[0].removed && (r = await ap({
                        orphan: "drop-log",
                        log: e[0]
                    }, this)), this.#tM.get(r.tag) || null
                }
                async# tX(t) {
                    let e = await ap(t, this),
                        r = e.tag,
                        n = this.#tM.get(r);
                    return !n && (n = {
                        subscriber: this._getSubscriber(e),
                        tag: r,
                        addressableMap: new WeakMap,
                        nameMap: new Map,
                        started: !1,
                        listeners: []
                    }, this.#tM.set(r, n)), n
                }
                async on(t, e) {
                    let r = await this.#tX(t);
                    return r.listeners.push({
                        listener: e,
                        once: !1
                    }), r.started || (r.subscriber.start(), r.started = !0, null != this.#tL && r.subscriber.pause(this.#tL)), this
                }
                async once(t, e) {
                    let r = await this.#tX(t);
                    return r.listeners.push({
                        listener: e,
                        once: !0
                    }), r.started || (r.subscriber.start(), r.started = !0, null != this.#tL && r.subscriber.pause(this.#tL)), this
                }
                async emit(t, ...e) {
                    let r = await this.#tY(t, e);
                    if (!r || 0 === r.listeners.length) return !1;
                    let n = r.listeners.length;
                    return r.listeners = r.listeners.filter(({
                        listener: r,
                        once: n
                    }) => {
                        let i = new r5(this, n ? null : r, t);
                        try {
                            r.call(this, ...e, i)
                        } catch (t) {}
                        return !n
                    }), 0 === r.listeners.length && (r.started && r.subscriber.stop(), this.#tM.delete(r.tag)), n > 0
                }
                async listenerCount(t) {
                    if (t) {
                        let e = await this.#tY(t);
                        return e ? e.listeners.length : 0
                    }
                    let e = 0;
                    for (let {
                            listeners: t
                        } of this.#tM.values()) e += t.length;
                    return e
                }
                async listeners(t) {
                    if (t) {
                        let e = await this.#tY(t);
                        return e ? e.listeners.map(({
                            listener: t
                        }) => t) : []
                    }
                    let e = [];
                    for (let {
                            listeners: t
                        } of this.#tM.values()) e = e.concat(t.map(({
                        listener: t
                    }) => t));
                    return e
                }
                async off(t, e) {
                    let r = await this.#tY(t);
                    if (!r) return this;
                    if (e) {
                        let t = r.listeners.map(({
                            listener: t
                        }) => t).indexOf(e);
                        t >= 0 && r.listeners.splice(t, 1)
                    }
                    return e && 0 !== r.listeners.length || (r.started && r.subscriber.stop(), this.#tM.delete(r.tag)), this
                }
                async removeAllListeners(t) {
                    if (t) {
                        let {
                            tag: e,
                            started: r,
                            subscriber: n
                        } = await this.#tX(t);
                        r && n.stop(), this.#tM.delete(e)
                    } else
                        for (let [t, {
                                started: e,
                                subscriber: r
                            }] of this.#tM) e && r.stop(), this.#tM.delete(t);
                    return this
                }
                async addListener(t, e) {
                    return await this.on(t, e)
                }
                async removeListener(t, e) {
                    return this.off(t, e)
                }
                get destroyed() {
                    return this.#tU
                }
                destroy() {
                    for (let t of (this.removeAllListeners(), this.#tz.keys())) this._clearTimeout(t);
                    this.#tU = !0
                }
                get paused() {
                    return null != this.#tL
                }
                set paused(t) {
                    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1))
                }
                pause(t) {
                    if (this.#tH = -1, null != this.#tL) {
                        if (!!t == this.#tL) return;
                        k(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                            operation: "pause"
                        })
                    }
                    for (let e of (this._forEachSubscriber(e => e.pause(t)), this.#tL = !!t, this.#tz.values())) e.timer && clearTimeout(e.timer), e.time = ag() - e.time
                }
                resume() {
                    if (null != this.#tL)
                        for (let t of (this._forEachSubscriber(t => t.resume()), this.#tL = null, this.#tz.values())) {
                            let e = t.time;
                            e < 0 && (e = 0), t.time = ag(), setTimeout(t.func, e)
                        }
                }
            }

            function av(t, e) {
                if ("0x" === t) return null;
                try {
                    let r = Z(V(t, e, e + 32)),
                        n = Z(V(t, r, r + 32));
                    return V(t, r + 32, r + 32 + n)
                } catch (t) {}
                return null
            }

            function aw(t) {
                let e = X(t);
                if (e.length > 32) throw Error("internal; should not happen");
                let r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }
            let aA = new Uint8Array([]),
                ab = "0x0000000000000000000000000000000000000000000000000000000000000000";

            function aE(t, e) {
                if (t.provider) return t.provider;
                k(!1, "missing provider", "UNSUPPORTED_OPERATION", {
                    operation: e
                })
            }
            async function ax(t, e) {
                let r = r$(e);
                if (null != r.to && (r.to = ru(r.to, t)), null != r.from) {
                    let e = r.from;
                    r.from = Promise.all([t.getAddress(), ru(e, t)]).then(([t, e]) => (C(t.toLowerCase() === e.toLowerCase(), "transaction from mismatch", "tx.from", e), t))
                } else r.from = t.getAddress();
                return await w(r)
            }
            class aP {
                provider;
                constructor(t) {
                    A(this, {
                        provider: t || null
                    })
                }
                async getNonce(t) {
                    return aE(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t)
                }
                async populateCall(t) {
                    return await ax(this, t)
                }
                async populateTransaction(t) {
                    let e = aE(this, "populateTransaction"),
                        r = await ax(this, t);
                    null == r.nonce && (r.nonce = await this.getNonce("pending")), null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
                    let n = await this.provider.getNetwork();
                    null != r.chainId ? C(K(r.chainId) === n.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId) : r.chainId = n.chainId;
                    let i = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
                    if (null != r.gasPrice && (2 === r.type || i) ? C(!1, "eip-1559 transaction do not support gasPrice", "tx", t) : (0 === r.type || 1 === r.type) && i && C(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (2 === r.type || null == r.type) && null != r.maxFeePerGas && null != r.maxPriorityFeePerGas) r.type = 2;
                    else if (0 === r.type || 1 === r.type) {
                        let t = await e.getFeeData();
                        k(null != t.gasPrice, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                            operation: "getGasPrice"
                        }), null == r.gasPrice && (r.gasPrice = t.gasPrice)
                    } else {
                        let t = await e.getFeeData();
                        if (null == r.type) {
                            if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                                if (r.type = 2, null != r.gasPrice) {
                                    let t = r.gasPrice;
                                    delete r.gasPrice, r.maxFeePerGas = t, r.maxPriorityFeePerGas = t
                                } else null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                            } else null != t.gasPrice ? (k(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                                operation: "populateTransaction"
                            }), null == r.gasPrice && (r.gasPrice = t.gasPrice), r.type = 0) : k(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                                operation: "signer.getFeeData"
                            })
                        } else(2 === r.type || 3 === r.type) && (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                    }
                    return await w(r)
                }
                async estimateGas(t) {
                    return aE(this, "estimateGas").estimateGas(await this.populateCall(t))
                }
                async call(t) {
                    return aE(this, "call").call(await this.populateCall(t))
                }
                async resolveName(t) {
                    let e = aE(this, "resolveName");
                    return await e.resolveName(t)
                }
                async sendTransaction(t) {
                    let e = aE(this, "sendTransaction"),
                        r = await this.populateTransaction(t);
                    delete r.from;
                    let n = sU.from(r);
                    return await e.broadcastTransaction(await this.signTransaction(n))
                }
            }
            class ak {#
                tT;#
                t$;#
                tS;#
                tO;#
                t0;#
                t1;
                constructor(t) {
                    this.#tT = t, this.#t$ = null, this.#tS = this.#tN.bind(this), this.#tO = !1, this.#t0 = null, this.#t1 = !1
                }
                _subscribe(t) {
                    throw Error("subclasses must override this")
                }
                _emitResults(t, e) {
                    throw Error("subclasses must override this")
                }
                _recover(t) {
                    throw Error("subclasses must override this")
                }
                async# tN(t) {
                    try {
                        null == this.#t$ && (this.#t$ = this._subscribe(this.#tT));
                        let t = null;
                        try {
                            t = await this.#t$
                        } catch (t) {
                            if (!E(t, "UNSUPPORTED_OPERATION") || "eth_newFilter" !== t.operation) throw t
                        }
                        if (null == t) {
                            this.#t$ = null, this.#tT._recoverSubscriber(this, this._recover(this.#tT));
                            return
                        }
                        let e = await this.#tT.getNetwork();
                        if (this.#t0 || (this.#t0 = e), this.#t0.chainId !== e.chainId) throw Error("chaid changed");
                        if (this.#t1) return;
                        let r = await this.#tT.send("eth_getFilterChanges", [t]);
                        await this._emitResults(this.#tT, r)
                    } catch (t) {
                        console.log("@TODO", t)
                    }
                    this.#tT.once("block", this.#tS)
                }#
                t2() {
                    let t = this.#t$;
                    t && (this.#t$ = null, t.then(t => {
                        this.#tT.destroyed || this.#tT.send("eth_uninstallFilter", [t])
                    }))
                }
                start() {
                    this.#tO || (this.#tO = !0, this.#tN(-2))
                }
                stop() {
                    this.#tO && (this.#tO = !1, this.#t1 = !0, this.#t2(), this.#tT.off("block", this.#tS))
                }
                pause(t) {
                    t && this.#t2(), this.#tT.off("block", this.#tS)
                }
                resume() {
                    this.start()
                }
            }
            class aC extends ak {#
                t3;
                constructor(t, e) {
                    super(t), this.#t3 = JSON.parse(JSON.stringify(e))
                }
                _recover(t) {
                    return new al(t, this.#t3)
                }
                async _subscribe(t) {
                    return await t.send("eth_newFilter", [this.#t3])
                }
                async _emitResults(t, e) {
                    for (let r of e) t.emit(this.#t3, t._wrapLog(r, t._network))
                }
            }
            class aT extends ak {
                async _subscribe(t) {
                    return await t.send("eth_newPendingTransactionFilter", [])
                }
                async _emitResults(t, e) {
                    for (let r of e) t.emit("pending", r)
                }
            }
            let aS = "bigint,boolean,function,number,string,symbol".split(/,/g);

            function aR(t) {
                if (null == t || aS.indexOf(typeof t) >= 0 || "function" == typeof t.getAddress) return t;
                if (Array.isArray(t)) return t.map(aR);
                if ("object" == typeof t) return Object.keys(t).reduce((e, r) => (e[r] = t[r], e), {});
                throw Error(`should not happen: ${t} (${typeof t})`)
            }

            function aB(t) {
                return t ? t.toLowerCase() : t
            }

            function aN(t) {
                return t && "number" == typeof t.pollingInterval
            }
            let aO = {
                polling: !1,
                staticNetwork: null,
                batchStallTime: 10,
                batchMaxSize: 1048576,
                batchMaxCount: 100,
                cacheTimeout: 250,
                pollingInterval: 4e3
            };
            class aI extends aP {
                address;
                constructor(t, e) {
                    super(t), A(this, {
                        address: e = t2(e)
                    })
                }
                connect(t) {
                    k(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
                        operation: "signer.connect"
                    })
                }
                async getAddress() {
                    return this.address
                }
                async populateTransaction(t) {
                    return await this.populateCall(t)
                }
                async sendUncheckedTransaction(t) {
                    let e = aR(t),
                        r = [];
                    if (e.from) {
                        let n = e.from;
                        r.push((async () => {
                            let r = await ru(n, this.provider);
                            C(null != r && r.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = r
                        })())
                    } else e.from = this.address;
                    if (null == e.gasLimit && r.push((async () => {
                            e.gasLimit = await this.provider.estimateGas({ ...e,
                                from: this.address
                            })
                        })()), null != e.to) {
                        let t = e.to;
                        r.push((async () => {
                            e.to = await ru(t, this.provider)
                        })())
                    }
                    r.length && await Promise.all(r);
                    let n = this.provider.getRpcTransaction(e);
                    return this.provider.send("eth_sendTransaction", [n])
                }
                async sendTransaction(t) {
                    let e = await this.provider.getBlockNumber(),
                        r = await this.sendUncheckedTransaction(t);
                    return await new Promise((t, n) => {
                        let i = [1e3, 100],
                            s = 0,
                            a = async () => {
                                try {
                                    let n = await this.provider.getTransaction(r);
                                    if (null != n) {
                                        t(n.replaceableTransaction(e));
                                        return
                                    }
                                } catch (t) {
                                    if (E(t, "CANCELLED") || E(t, "BAD_DATA") || E(t, "NETWORK_ERROR") || E(t, "UNSUPPORTED_OPERATION")) {
                                        null == t.info && (t.info = {}), t.info.sendTransactionHash = r, n(t);
                                        return
                                    }
                                    if (E(t, "INVALID_ARGUMENT") && (s++, null == t.info && (t.info = {}), t.info.sendTransactionHash = r, s > 10)) {
                                        n(t);
                                        return
                                    }
                                    this.provider.emit("error", P("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", {
                                        error: t
                                    }))
                                }
                                this.provider._setTimeout(() => {
                                    a()
                                }, i.pop() || 4e3)
                            };
                        a()
                    })
                }
                async signTransaction(t) {
                    let e = aR(t);
                    if (e.from) {
                        let r = await ru(e.from, this.provider);
                        C(null != r && r.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = r
                    } else e.from = this.address;
                    let r = this.provider.getRpcTransaction(e);
                    return await this.provider.send("eth_signTransaction", [r])
                }
                async signMessage(t) {
                    let e = "string" == typeof t ? eg(t) : t;
                    return await this.provider.send("personal_sign", [M(e), this.address.toLowerCase()])
                }
                async signTypedData(t, e, r) {
                    let n = aR(r),
                        i = await rP.resolveNames(t, e, n, async t => {
                            let e = await ru(t);
                            return C(null != e, "TypedData does not support null address", "value", t), e
                        });
                    return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(rP.getPayload(i.domain, e, i.value))])
                }
                async unlock(t) {
                    return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), t, null])
                }
                async _legacySignMessage(t) {
                    let e = "string" == typeof t ? eg(t) : t;
                    return await this.provider.send("eth_sign", [this.address.toLowerCase(), M(e)])
                }
            }
            class aD extends ay {#
                h;#
                t4;#
                t8;#
                t5;#
                t6;#
                t0;#
                t9;#
                t7() {
                    if (this.#t5) return;
                    let t = 1 === this._getOption("batchMaxCount") ? 0 : this._getOption("batchStallTime");
                    this.#t5 = setTimeout(() => {
                        this.#t5 = null;
                        let t = this.#t8;
                        for (this.#t8 = []; t.length;) {
                            let e = [t.shift()];
                            for (; t.length && e.length !== this.#h.batchMaxCount;)
                                if (e.push(t.shift()), JSON.stringify(e.map(t => t.payload)).length > this.#h.batchMaxSize) {
                                    t.unshift(e.pop());
                                    break
                                }(async () => {
                                    let t = 1 === e.length ? e[0].payload : e.map(t => t.payload);
                                    this.emit("debug", {
                                        action: "sendRpcPayload",
                                        payload: t
                                    });
                                    try {
                                        let r = await this._send(t);
                                        for (let {
                                                resolve: t,
                                                reject: n,
                                                payload: i
                                            } of (this.emit("debug", {
                                                action: "receiveRpcResult",
                                                result: r
                                            }), e)) {
                                            if (this.destroyed) {
                                                n(P("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                                    operation: i.method
                                                }));
                                                continue
                                            }
                                            let e = r.filter(t => t.id === i.id)[0];
                                            if (null == e) {
                                                let t = P("missing response for request", "BAD_DATA", {
                                                    value: r,
                                                    info: {
                                                        payload: i
                                                    }
                                                });
                                                this.emit("error", t), n(t);
                                                continue
                                            }
                                            if ("error" in e) {
                                                n(this.getRpcError(i, e));
                                                continue
                                            }
                                            t(e.result)
                                        }
                                    } catch (t) {
                                        for (let {
                                                reject: r
                                            } of (this.emit("debug", {
                                                action: "receiveRpcError",
                                                error: t
                                            }), e)) r(t)
                                    }
                                })()
                        }
                    }, t)
                }
                constructor(t, e) {
                    super(t, e), this.#t4 = 1, this.#h = Object.assign({}, aO, e || {}), this.#t8 = [], this.#t5 = null, this.#t0 = null, this.#t9 = null; {
                        let t = null,
                            e = new Promise(e => {
                                t = e
                            });
                        this.#t6 = {
                            promise: e,
                            resolve: t
                        }
                    }
                    let r = this._getOption("staticNetwork");
                    "boolean" == typeof r ? (C(!r || "any" !== t, "staticNetwork cannot be used on special network 'any'", "options", e), r && null != t && (this.#t0 = s9.from(t))) : r && (C(null == t || r.matches(t), "staticNetwork MUST match network object", "options", e), this.#t0 = r)
                }
                _getOption(t) {
                    return this.#h[t]
                }
                get _network() {
                    return k(this.#t0, "network is not available yet", "NETWORK_ERROR"), this.#t0
                }
                async _perform(t) {
                    if ("call" === t.method || "estimateGas" === t.method) {
                        let e = t.transaction;
                        if (e && null != e.type && K(e.type) && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                            let r = await this.getFeeData();
                            null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && (t = Object.assign({}, t, {
                                transaction: Object.assign({}, e, {
                                    type: void 0
                                })
                            }))
                        }
                    }
                    let e = this.getRpcRequest(t);
                    return null != e ? await this.send(e.method, e.args) : super._perform(t)
                }
                async _detectNetwork() {
                    let t = this._getOption("staticNetwork");
                    if (t) {
                        if (!0 !== t) return t;
                        if (this.#t0) return this.#t0
                    }
                    return this.#t9 || (this.ready ? this.#t9 = (async () => {
                        try {
                            let t = s9.from(K(await this.send("eth_chainId", [])));
                            return this.#t9 = null, t
                        } catch (t) {
                            throw this.#t9 = null, t
                        }
                    })() : this.#t9 = (async () => {
                        let t;
                        let e = {
                            id: this.#t4++,
                            method: "eth_chainId",
                            params: [],
                            jsonrpc: "2.0"
                        };
                        this.emit("debug", {
                            action: "sendRpcPayload",
                            payload: e
                        });
                        try {
                            t = (await this._send(e))[0], this.#t9 = null
                        } catch (t) {
                            throw this.#t9 = null, this.emit("debug", {
                                action: "receiveRpcError",
                                error: t
                            }), t
                        }
                        if (this.emit("debug", {
                                action: "receiveRpcResult",
                                result: t
                            }), "result" in t) return s9.from(K(t.result));
                        throw this.getRpcError(e, t)
                    })()), await this.#t9
                }
                _start() {
                    null != this.#t6 && null != this.#t6.resolve && (this.#t6.resolve(), this.#t6 = null, (async () => {
                        for (; null == this.#t0 && !this.destroyed;) try {
                            this.#t0 = await this._detectNetwork()
                        } catch (t) {
                            if (this.destroyed) break;
                            console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", P("failed to bootstrap network detection", "NETWORK_ERROR", {
                                event: "initial-network-discovery",
                                info: {
                                    error: t
                                }
                            })), await new Promise(t => {
                                setTimeout(t, 1e3)
                            })
                        }
                        this.#t7()
                    })())
                }
                async _waitUntilReady() {
                    if (null != this.#t6) return await this.#t6.promise
                }
                _getSubscriber(t) {
                    return "pending" === t.type ? new aT(this) : "event" === t.type ? this._getOption("polling") ? new al(this, t.filter) : new aC(this, t.filter) : "orphan" === t.type && "drop-log" === t.filter.orphan ? new ad("orphan") : super._getSubscriber(t)
                }
                get ready() {
                    return null == this.#t6
                }
                getRpcTransaction(t) {
                    let e = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(r => {
                        if (null == t[r]) return;
                        let n = r;
                        "gasLimit" === r && (n = "gas"), e[n] = $(K(t[r], `tx.${r}`))
                    }), ["from", "to", "data"].forEach(r => {
                        null != t[r] && (e[r] = M(t[r]))
                    }), t.accessList && (e.accessList = rC(t.accessList)), t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.map(t => t.toLowerCase())), e
                }
                getRpcRequest(t) {
                    switch (t.method) {
                        case "chainId":
                            return {
                                method: "eth_chainId",
                                args: []
                            };
                        case "getBlockNumber":
                            return {
                                method: "eth_blockNumber",
                                args: []
                            };
                        case "getGasPrice":
                            return {
                                method: "eth_gasPrice",
                                args: []
                            };
                        case "getPriorityFee":
                            return {
                                method: "eth_maxPriorityFeePerGas",
                                args: []
                            };
                        case "getBalance":
                            return {
                                method: "eth_getBalance",
                                args: [aB(t.address), t.blockTag]
                            };
                        case "getTransactionCount":
                            return {
                                method: "eth_getTransactionCount",
                                args: [aB(t.address), t.blockTag]
                            };
                        case "getCode":
                            return {
                                method: "eth_getCode",
                                args: [aB(t.address), t.blockTag]
                            };
                        case "getStorage":
                            return {
                                method: "eth_getStorageAt",
                                args: [aB(t.address), "0x" + t.position.toString(16), t.blockTag]
                            };
                        case "broadcastTransaction":
                            return {
                                method: "eth_sendRawTransaction",
                                args: [t.signedTransaction]
                            };
                        case "getBlock":
                            if ("blockTag" in t) return {
                                method: "eth_getBlockByNumber",
                                args: [t.blockTag, !!t.includeTransactions]
                            };
                            if ("blockHash" in t) return {
                                method: "eth_getBlockByHash",
                                args: [t.blockHash, !!t.includeTransactions]
                            };
                            break;
                        case "getTransaction":
                            return {
                                method: "eth_getTransactionByHash",
                                args: [t.hash]
                            };
                        case "getTransactionReceipt":
                            return {
                                method: "eth_getTransactionReceipt",
                                args: [t.hash]
                            };
                        case "call":
                            return {
                                method: "eth_call",
                                args: [this.getRpcTransaction(t.transaction), t.blockTag]
                            };
                        case "estimateGas":
                            return {
                                method: "eth_estimateGas",
                                args: [this.getRpcTransaction(t.transaction)]
                            };
                        case "getLogs":
                            return t.filter && null != t.filter.address && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(aB) : t.filter.address = aB(t.filter.address)), {
                                method: "eth_getLogs",
                                args: [t.filter]
                            }
                    }
                    return null
                }
                getRpcError(t, e) {
                    let {
                        method: r
                    } = t, {
                        error: n
                    } = e;
                    if ("eth_estimateGas" === r && n.message) {
                        let e = n.message;
                        if (!e.match(/revert/i) && e.match(/insufficient funds/i)) return P("insufficient funds", "INSUFFICIENT_FUNDS", {
                            transaction: t.params[0],
                            info: {
                                payload: t,
                                error: n
                            }
                        })
                    }
                    if ("eth_call" === r || "eth_estimateGas" === r) {
                        let e = function t(e) {
                                if (null == e) return null;
                                if ("string" == typeof e.message && e.message.match(/revert/i) && I(e.data)) return {
                                    message: e.message,
                                    data: e.data
                                };
                                if ("object" == typeof e) {
                                    for (let r in e) {
                                        let n = t(e[r]);
                                        if (n) return n
                                    }
                                    return null
                                }
                                if ("string" == typeof e) try {
                                    return t(JSON.parse(e))
                                } catch (t) {}
                                return null
                            }(n),
                            i = ra.getBuiltinCallException("eth_call" === r ? "call" : "estimateGas", t.params[0], e ? e.data : null);
                        return i.info = {
                            error: n,
                            payload: t
                        }, i
                    }
                    let i = JSON.stringify(function(t) {
                        let e = [];
                        return ! function t(e, r) {
                            if (null != e) {
                                if ("string" == typeof e.message && r.push(e.message), "object" == typeof e)
                                    for (let n in e) t(e[n], r);
                                if ("string" == typeof e) try {
                                    return t(JSON.parse(e), r)
                                } catch (t) {}
                            }
                        }(t, e), e
                    }(n));
                    if ("string" == typeof n.message && n.message.match(/user denied|ethers-user-denied/i)) return P("user rejected action", "ACTION_REJECTED", {
                        action: {
                            eth_sign: "signMessage",
                            personal_sign: "signMessage",
                            eth_signTypedData_v4: "signTypedData",
                            eth_signTransaction: "signTransaction",
                            eth_sendTransaction: "sendTransaction",
                            eth_requestAccounts: "requestAccess",
                            wallet_requestAccounts: "requestAccess"
                        }[r] || "unknown",
                        reason: "rejected",
                        info: {
                            payload: t,
                            error: n
                        }
                    });
                    if ("eth_sendRawTransaction" === r || "eth_sendTransaction" === r) {
                        let e = t.params[0];
                        if (i.match(/insufficient funds|base fee exceeds gas limit/i)) return P("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                            transaction: e,
                            info: {
                                error: n
                            }
                        });
                        if (i.match(/nonce/i) && i.match(/too low/i)) return P("nonce has already been used", "NONCE_EXPIRED", {
                            transaction: e,
                            info: {
                                error: n
                            }
                        });
                        if (i.match(/replacement transaction/i) && i.match(/underpriced/i)) return P("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                            transaction: e,
                            info: {
                                error: n
                            }
                        });
                        if (i.match(/only replay-protected/i)) return P("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                            operation: r,
                            info: {
                                transaction: e,
                                info: {
                                    error: n
                                }
                            }
                        })
                    }
                    let s = !!i.match(/the method .* does not exist/i);
                    return (!s && n && n.details && n.details.startsWith("Unauthorized method:") && (s = !0), s) ? P("unsupported operation", "UNSUPPORTED_OPERATION", {
                        operation: t.method,
                        info: {
                            error: n,
                            payload: t
                        }
                    }) : P("could not coalesce error", "UNKNOWN_ERROR", {
                        error: n,
                        payload: t
                    })
                }
                send(t, e) {
                    if (this.destroyed) return Promise.reject(P("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t
                    }));
                    let r = this.#t4++,
                        n = new Promise((n, i) => {
                            this.#t8.push({
                                resolve: n,
                                reject: i,
                                payload: {
                                    method: t,
                                    params: e,
                                    id: r,
                                    jsonrpc: "2.0"
                                }
                            })
                        });
                    return this.#t7(), n
                }
                async getSigner(t) {
                    null == t && (t = 0);
                    let e = this.send("eth_accounts", []);
                    if ("number" == typeof t) {
                        let r = await e;
                        if (t >= r.length) throw Error("no such account");
                        return new aI(this, r[t])
                    }
                    let {
                        accounts: r
                    } = await w({
                        network: this.getNetwork(),
                        accounts: e
                    });
                    for (let e of (t = t2(t), r))
                        if (t2(e) === t) return new aI(this, t);
                    throw Error("invalid account")
                }
                async listAccounts() {
                    return (await this.send("eth_accounts", [])).map(t => new aI(this, t))
                }
                destroy() {
                    for (let {
                            payload: t,
                            reject: e
                        } of (this.#t5 && (clearTimeout(this.#t5), this.#t5 = null), this.#t8)) e(P("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                        operation: t.method
                    }));
                    this.#t8 = [], super.destroy()
                }
            }
            class aF extends aD {#
                et;
                constructor(t, e) {
                    super(t, e);
                    let r = this._getOption("pollingInterval");
                    null == r && (r = aO.pollingInterval), this.#et = r
                }
                _getSubscriber(t) {
                    let e = super._getSubscriber(t);
                    return aN(e) && (e.pollingInterval = this.#et), e
                }
                get pollingInterval() {
                    return this.#et
                }
                set pollingInterval(t) {
                    if (!Number.isInteger(t) || t < 0) throw Error("invalid interval");
                    this.#et = t, this._forEachSubscriber(t => {
                        aN(t) && (t.pollingInterval = this.#et)
                    })
                }
            }
            class aM extends aF {#
                V;
                constructor(t, e, r) {
                    let n = Object.assign({}, null != r ? r : {}, {
                        batchMaxCount: 1
                    });
                    C(t && t.request, "invalid EIP-1193 provider", "ethereum", t), super(e, n), this.#V = async (e, r) => {
                        let n = {
                            method: e,
                            params: r
                        };
                        this.emit("debug", {
                            action: "sendEip1193Request",
                            payload: n
                        });
                        try {
                            let e = await t.request(n);
                            return this.emit("debug", {
                                action: "receiveEip1193Result",
                                result: e
                            }), e
                        } catch (e) {
                            let t = Error(e.message);
                            throw t.code = e.code, t.data = e.data, t.payload = n, this.emit("debug", {
                                action: "receiveEip1193Error",
                                error: t
                            }), t
                        }
                    }
                }
                async send(t, e) {
                    return await this._start(), await super.send(t, e)
                }
                async _send(t) {
                    C(!Array.isArray(t), "EIP-1193 does not support batch request", "payload", t);
                    try {
                        let e = await this.#V(t.method, t.params || []);
                        return [{
                            id: t.id,
                            result: e
                        }]
                    } catch (e) {
                        return [{
                            id: t.id,
                            error: {
                                code: e.code,
                                data: e.data,
                                message: e.message
                            }
                        }]
                    }
                }
                getRpcError(t, e) {
                    switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
                        case 4001:
                            e.error.message = `ethers-user-denied: ${e.error.message}`;
                            break;
                        case 4200:
                            e.error.message = `ethers-unsupported: ${e.error.message}`
                    }
                    return super.getRpcError(t, e)
                }
                async hasSigner(t) {
                    null == t && (t = 0);
                    let e = await this.send("eth_accounts", []);
                    return "number" == typeof t ? e.length > t : (t = t.toLowerCase(), 0 !== e.filter(e => e.toLowerCase() === t).length)
                }
                async getSigner(t) {
                    if (null == t && (t = 0), !await this.hasSigner(t)) try {
                        await this.#V("eth_requestAccounts", [])
                    } catch (e) {
                        let t = e.payload;
                        throw this.getRpcError(t, {
                            id: t.id,
                            error: e
                        })
                    }
                    return await super.getSigner(t)
                }
            }
        },
        8614: function(t, e, r) {
            r.d(e, {
                M: function() {
                    return y
                }
            });
            var n = r(7437),
                i = r(2265),
                s = r(4252),
                a = r(3576),
                o = r(5750);
            class l extends i.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function u(t) {
                let {
                    children: e,
                    isPresent: r
                } = t, s = (0, i.useId)(), a = (0, i.useRef)(null), u = (0, i.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                }), {
                    nonce: h
                } = (0, i.useContext)(o._);
                return (0, i.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: e,
                        top: n,
                        left: i
                    } = u.current;
                    if (r || !a.current || !t || !e) return;
                    a.current.dataset.motionPopId = s;
                    let o = document.createElement("style");
                    return h && (o.nonce = h), document.head.appendChild(o), o.sheet && o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            top: ").concat(n, "px !important;\n            left: ").concat(i, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(o)
                    }
                }, [r]), (0, n.jsx)(l, {
                    isPresent: r,
                    childRef: a,
                    sizeRef: u,
                    children: i.cloneElement(e, {
                        ref: a
                    })
                })
            }
            let h = t => {
                let {
                    children: e,
                    initial: r,
                    isPresent: o,
                    onExitComplete: l,
                    custom: h,
                    presenceAffectsLayout: d,
                    mode: f
                } = t, p = (0, a.h)(c), g = (0, i.useId)(), m = (0, i.useCallback)(t => {
                    for (let e of (p.set(t, !0), p.values()))
                        if (!e) return;
                    l && l()
                }, [p, l]), y = (0, i.useMemo)(() => ({
                    id: g,
                    initial: r,
                    isPresent: o,
                    custom: h,
                    onExitComplete: m,
                    register: t => (p.set(t, !1), () => p.delete(t))
                }), d ? [Math.random(), m] : [o, m]);
                return (0, i.useMemo)(() => {
                    p.forEach((t, e) => p.set(e, !1))
                }, [o]), i.useEffect(() => {
                    o || p.size || !l || l()
                }, [o]), "popLayout" === f && (e = (0, n.jsx)(u, {
                    isPresent: o,
                    children: e
                })), (0, n.jsx)(s.O.Provider, {
                    value: y,
                    children: e
                })
            };

            function c() {
                return new Map
            }
            var d = r(8881),
                f = r(2035);
            let p = t => t.key || "";

            function g(t) {
                let e = [];
                return i.Children.forEach(t, t => {
                    (0, i.isValidElement)(t) && e.push(t)
                }), e
            }
            var m = r(1534);
            let y = t => {
                let {
                    children: e,
                    exitBeforeEnter: r,
                    custom: s,
                    initial: o = !0,
                    onExitComplete: l,
                    presenceAffectsLayout: u = !0,
                    mode: c = "sync"
                } = t;
                (0, f.k)(!r, "Replace exitBeforeEnter with mode='wait'");
                let y = (0, i.useMemo)(() => g(e), [e]),
                    v = y.map(p),
                    w = (0, i.useRef)(!0),
                    A = (0, i.useRef)(y),
                    b = (0, a.h)(() => new Map),
                    [E, x] = (0, i.useState)(y),
                    [P, k] = (0, i.useState)(y);
                (0, m.L)(() => {
                    w.current = !1, A.current = y;
                    for (let t = 0; t < P.length; t++) {
                        let e = p(P[t]);
                        v.includes(e) ? b.delete(e) : !0 !== b.get(e) && b.set(e, !1)
                    }
                }, [P, v.length, v.join("-")]);
                let C = [];
                if (y !== E) {
                    let t = [...y];
                    for (let e = 0; e < P.length; e++) {
                        let r = P[e],
                            n = p(r);
                        v.includes(n) || (t.splice(e, 0, r), C.push(r))
                    }
                    "wait" === c && C.length && (t = C), k(g(t)), x(y);
                    return
                }
                let {
                    forceRender: T
                } = (0, i.useContext)(d.p);
                return (0, n.jsx)(n.Fragment, {
                    children: P.map(t => {
                        let e = p(t),
                            r = y === P || v.includes(e);
                        return (0, n.jsx)(h, {
                            isPresent: r,
                            initial: (!w.current || !!o) && void 0,
                            custom: r ? void 0 : s,
                            presenceAffectsLayout: u,
                            mode: c,
                            onExitComplete: r ? void 0 : () => {
                                if (!b.has(e)) return;
                                b.set(e, !0);
                                let t = !0;
                                b.forEach(e => {
                                    e || (t = !1)
                                }), t && (null == T || T(), k(A.current), l && l())
                            },
                            children: t
                        }, e)
                    })
                })
            }
        },
        8881: function(t, e, r) {
            r.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)({})
        },
        5750: function(t, e, r) {
            r.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        4252: function(t, e, r) {
            r.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)(null)
        },
        7500: function(t, e, r) {
            let n;

            function i(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            r.d(e, {
                E: function() {
                    return sp
                }
            });
            let s = t => Array.isArray(t);

            function a(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function o(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function l(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function u(t, e, r, n) {
                if ("function" == typeof e) {
                    let [i, s] = l(n);
                    e = e(void 0 !== r ? r : t.custom, i, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [i, s] = l(n);
                    e = e(void 0 !== r ? r : t.custom, i, s)
                }
                return e
            }

            function h(t, e, r) {
                let n = t.getProps();
                return u(n, e, void 0 !== r ? r : n.custom, t)
            }
            let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                d = ["initial", ...c],
                f = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                p = new Set(f),
                g = t => 1e3 * t,
                m = t => t / 1e3,
                y = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                v = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                w = {
                    type: "keyframes",
                    duration: .8
                },
                A = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                b = (t, {
                    keyframes: e
                }) => e.length > 2 ? w : p.has(t) ? t.startsWith("scale") ? v(e[1]) : y : A;

            function E(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let x = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                P = {
                    current: !1
                },
                k = t => null !== t;

            function C(t, {
                repeat: e,
                repeatType: r = "loop"
            }, n) {
                let i = t.filter(k),
                    s = e && "loop" !== r && e % 2 == 1 ? 0 : i.length - 1;
                return s && void 0 !== n ? n : i[s]
            }
            var T, S, R, B = r(6277);
            let N = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function O(t, e) {
                let r = !1,
                    n = !0,
                    i = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => r = !0,
                    a = N.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            r = new Set,
                            n = !1,
                            i = !1,
                            s = new WeakSet,
                            a = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function o(e) {
                            s.has(e) && (l.schedule(e), t()), e(a)
                        }
                        let l = {
                            schedule: (t, i = !1, a = !1) => {
                                let o = a && n ? e : r;
                                return i && s.add(t), o.has(t) || o.add(t), t
                            },
                            cancel: t => {
                                r.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (a = t, n) {
                                    i = !0;
                                    return
                                }
                                n = !0, [e, r] = [r, e], e.forEach(o), e.clear(), n = !1, i && (i = !1, l.process(t))
                            }
                        };
                        return l
                    }(s), t), {}),
                    {
                        read: o,
                        resolveKeyframes: l,
                        update: u,
                        preRender: h,
                        render: c,
                        postRender: d
                    } = a,
                    f = () => {
                        let s = x.useManualTiming ? i.timestamp : performance.now();
                        r = !1, i.delta = n ? 1e3 / 60 : Math.max(Math.min(s - i.timestamp, 40), 1), i.timestamp = s, i.isProcessing = !0, o.process(i), l.process(i), u.process(i), h.process(i), c.process(i), d.process(i), i.isProcessing = !1, r && e && (n = !1, t(f))
                    },
                    p = () => {
                        r = !0, n = !0, i.isProcessing || t(f)
                    };
                return {
                    schedule: N.reduce((t, e) => {
                        let n = a[e];
                        return t[e] = (t, e = !1, i = !1) => (r || p(), n.schedule(t, e, i)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < N.length; e++) a[N[e]].cancel(t)
                    },
                    state: i,
                    steps: a
                }
            }
            let {
                schedule: I,
                cancel: D,
                state: F,
                steps: M
            } = O("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : B.Z, !0), L = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function U(t, e, r, n) {
                if (t === e && r === n) return B.Z;
                let i = e => (function(t, e, r, n, i) {
                    let s, a;
                    let o = 0;
                    do(s = L(a = e + (r - e) / 2, n, i) - t) > 0 ? r = a : e = a; while (Math.abs(s) > 1e-7 && ++o < 12);
                    return a
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : L(i(t), e, n)
            }
            let V = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                j = t => e => 1 - t(1 - e),
                G = U(.33, 1.53, .69, .99),
                H = j(G),
                Q = V(H),
                z = t => (t *= 2) < 1 ? .5 * H(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                J = t => 1 - Math.sin(Math.acos(t)),
                K = j(J),
                _ = V(J),
                q = t => /^0[^.\s]+$/u.test(t);
            var W = r(2035);
            let Z = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                Y = t => e => "string" == typeof e && e.startsWith(t),
                X = Y("--"),
                $ = Y("var(--"),
                tt = t => !!$(t) && te.test(t.split("/*")[0].trim()),
                te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                tr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                tn = (t, e, r) => r > e ? e : r < t ? t : r,
                ti = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                ts = { ...ti,
                    transform: t => tn(0, 1, t)
                },
                ta = { ...ti,
                    default: 1
                },
                to = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tl = to("deg"),
                tu = to("%"),
                th = to("px"),
                tc = to("vh"),
                td = to("vw"),
                tf = { ...tu,
                    parse: t => tu.parse(t) / 100,
                    transform: t => tu.transform(100 * t)
                },
                tp = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                tg = t => t === ti || t === th,
                tm = (t, e) => parseFloat(t.split(", ")[e]),
                ty = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/u);
                    if (i) return tm(i[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? tm(e[1], t) : 0
                    }
                },
                tv = new Set(["x", "y", "z"]),
                tw = f.filter(t => !tv.has(t)),
                tA = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: ty(4, 13),
                    y: ty(5, 14)
                };
            tA.translateX = tA.x, tA.translateY = tA.y;
            let tb = t => e => e.test(t),
                tE = [ti, th, tu, tl, td, tc, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                tx = t => tE.find(tb(t)),
                tP = new Set,
                tk = !1,
                tC = !1;

            function tT() {
                if (tC) {
                    let t = Array.from(tP).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        r = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return tw.forEach(r => {
                                let n = t.getValue(r);
                                void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (r.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = r.get(t);
                        e && e.forEach(([e, r]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                tC = !1, tk = !1, tP.forEach(t => t.complete()), tP.clear()
            }

            function tS() {
                tP.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (tC = !0)
                })
            }
            class tR {
                constructor(t, e, r, n, i, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = n, this.element = i, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (tP.add(this), tk || (tk = !0, I.read(tS), I.resolveKeyframes(tT))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: r,
                        motionValue: n
                    } = this;
                    for (let i = 0; i < t.length; i++)
                        if (null === t[i]) {
                            if (0 === i) {
                                let i = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== i) t[0] = i;
                                else if (r && e) {
                                    let n = r.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === i && n.set(t[0])
                            } else t[i] = t[i - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tP.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, tP.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let tB = t => Math.round(1e5 * t) / 1e5,
                tN = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                tI = (t, e) => r => !!("string" == typeof r && tO.test(r) && r.startsWith(t) || e && null != r && Object.prototype.hasOwnProperty.call(r, e)),
                tD = (t, e, r) => n => {
                    if ("string" != typeof n) return n;
                    let [i, s, a, o] = n.match(tN);
                    return {
                        [t]: parseFloat(i),
                        [e]: parseFloat(s),
                        [r]: parseFloat(a),
                        alpha: void 0 !== o ? parseFloat(o) : 1
                    }
                },
                tF = t => tn(0, 255, t),
                tM = { ...ti,
                    transform: t => Math.round(tF(t))
                },
                tL = {
                    test: tI("rgb", "red"),
                    parse: tD("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + tM.transform(t) + ", " + tM.transform(e) + ", " + tM.transform(r) + ", " + tB(ts.transform(n)) + ")"
                },
                tU = {
                    test: tI("#"),
                    parse: function(t) {
                        let e = "",
                            r = "",
                            n = "",
                            i = "";
                        return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(n, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: tL.transform
                },
                tV = {
                    test: tI("hsl", "hue"),
                    parse: tD("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: r,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + tu.transform(tB(e)) + ", " + tu.transform(tB(r)) + ", " + tB(ts.transform(n)) + ")"
                },
                tj = {
                    test: t => tL.test(t) || tU.test(t) || tV.test(t),
                    parse: t => tL.test(t) ? tL.parse(t) : tV.test(t) ? tV.parse(t) : tU.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tL.transform(t) : tV.transform(t)
                },
                tG = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tH = "number",
                tQ = "color",
                tz = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tJ(t) {
                let e = t.toString(),
                    r = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    i = [],
                    s = 0,
                    a = e.replace(tz, t => (tj.test(t) ? (n.color.push(s), i.push(tQ), r.push(tj.parse(t))) : t.startsWith("var(") ? (n.var.push(s), i.push("var"), r.push(t)) : (n.number.push(s), i.push(tH), r.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: r,
                    split: a,
                    indexes: n,
                    types: i
                }
            }

            function tK(t) {
                return tJ(t).values
            }

            function t_(t) {
                let {
                    split: e,
                    types: r
                } = tJ(t), n = e.length;
                return t => {
                    let i = "";
                    for (let s = 0; s < n; s++)
                        if (i += e[s], void 0 !== t[s]) {
                            let e = r[s];
                            e === tH ? i += tB(t[s]) : e === tQ ? i += tj.transform(t[s]) : i += t[s]
                        }
                    return i
                }
            }
            let tq = t => "number" == typeof t ? 0 : t,
                tW = {
                    test: function(t) {
                        var e, r;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tN)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(tG)) || void 0 === r ? void 0 : r.length) || 0) > 0
                    },
                    parse: tK,
                    createTransformer: t_,
                    getAnimatableNone: function(t) {
                        let e = tK(t);
                        return t_(t)(e.map(tq))
                    }
                },
                tZ = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tY(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = r.match(tN) || [];
                if (!n) return t;
                let i = r.replace(n, ""),
                    s = tZ.has(e) ? 1 : 0;
                return n !== r && (s *= 100), e + "(" + s + i + ")"
            }
            let tX = /\b([a-z-]*)\(.*?\)/gu,
                t$ = { ...tW,
                    getAnimatableNone: t => {
                        let e = t.match(tX);
                        return e ? e.map(tY).join(" ") : t
                    }
                },
                t0 = { ...ti,
                    transform: Math.round
                },
                t1 = {
                    borderWidth: th,
                    borderTopWidth: th,
                    borderRightWidth: th,
                    borderBottomWidth: th,
                    borderLeftWidth: th,
                    borderRadius: th,
                    radius: th,
                    borderTopLeftRadius: th,
                    borderTopRightRadius: th,
                    borderBottomRightRadius: th,
                    borderBottomLeftRadius: th,
                    width: th,
                    maxWidth: th,
                    height: th,
                    maxHeight: th,
                    top: th,
                    right: th,
                    bottom: th,
                    left: th,
                    padding: th,
                    paddingTop: th,
                    paddingRight: th,
                    paddingBottom: th,
                    paddingLeft: th,
                    margin: th,
                    marginTop: th,
                    marginRight: th,
                    marginBottom: th,
                    marginLeft: th,
                    backgroundPositionX: th,
                    backgroundPositionY: th,
                    rotate: tl,
                    rotateX: tl,
                    rotateY: tl,
                    rotateZ: tl,
                    scale: ta,
                    scaleX: ta,
                    scaleY: ta,
                    scaleZ: ta,
                    skew: tl,
                    skewX: tl,
                    skewY: tl,
                    distance: th,
                    translateX: th,
                    translateY: th,
                    translateZ: th,
                    x: th,
                    y: th,
                    z: th,
                    perspective: th,
                    transformPerspective: th,
                    opacity: ts,
                    originX: tf,
                    originY: tf,
                    originZ: th,
                    zIndex: t0,
                    size: th,
                    fillOpacity: ts,
                    strokeOpacity: ts,
                    numOctaves: t0
                },
                t2 = { ...t1,
                    color: tj,
                    backgroundColor: tj,
                    outlineColor: tj,
                    fill: tj,
                    stroke: tj,
                    borderColor: tj,
                    borderTopColor: tj,
                    borderRightColor: tj,
                    borderBottomColor: tj,
                    borderLeftColor: tj,
                    filter: t$,
                    WebkitFilter: t$
                },
                t3 = t => t2[t];

            function t4(t, e) {
                let r = t3(t);
                return r !== t$ && (r = tW), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
            let t8 = new Set(["auto", "none", "0"]);
            class t5 extends tR {
                constructor(t, e, r, n, i) {
                    super(t, e, r, n, i, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: r
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if ("string" == typeof n && tt(n = n.trim())) {
                            let i = function t(e, r, n = 1) {
                                (0, W.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [i, s] = function(t) {
                                    let e = tr.exec(t);
                                    if (!e) return [, ];
                                    let [, r, n, i] = e;
                                    return [`--${null!=r?r:n}`, i]
                                }(e);
                                if (!i) return;
                                let a = window.getComputedStyle(r).getPropertyValue(i);
                                if (a) {
                                    let t = a.trim();
                                    return Z(t) ? parseFloat(t) : t
                                }
                                return tt(s) ? t(s, r, n + 1) : s
                            }(n, e.current);
                            void 0 !== i && (t[r] = i), r === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !tp.has(r) || 2 !== t.length) return;
                    let [n, i] = t, s = tx(n), a = tx(i);
                    if (s !== a) {
                        if (tg(s) && tg(a))
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                "string" == typeof r && (t[e] = parseFloat(r))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, r = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || q(n)) && r.push(e)
                    }
                    r.length && function(t, e, r) {
                        let n, i = 0;
                        for (; i < t.length && !n;) {
                            let e = t[i];
                            "string" == typeof e && !t8.has(e) && tJ(e).values.length && (n = t[i]), i++
                        }
                        if (n && r)
                            for (let i of e) t[i] = t4(r, n)
                    }(t, r, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: r
                    } = this;
                    if (!t || !t.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tA[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(r, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: r,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let i = e.getValue(r);
                    i && i.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        a = n[s];
                    n[s] = tA[r](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, r]) => {
                        e.getValue(t).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }

            function t6(t) {
                return "function" == typeof t
            }

            function t9() {
                n = void 0
            }
            let t7 = {
                    now: () => (void 0 === n && t7.set(F.isProcessing || x.useManualTiming ? F.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(t9)
                    }
                },
                et = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tW.test(t) || "0" === t) && !t.startsWith("url("));
            class ee {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: r = "keyframes",
                    repeat: n = 0,
                    repeatDelay: i = 0,
                    repeatType: s = "loop",
                    ...a
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = t7.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: r,
                        repeat: n,
                        repeatDelay: i,
                        repeatType: s,
                        ...a
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (tS(), tT()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = t7.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: r,
                        type: n,
                        velocity: i,
                        delay: s,
                        onComplete: a,
                        onUpdate: o,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, r, n) {
                            let i = t[0];
                            if (null === i) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                a = et(i, e),
                                o = et(s, e);
                            return (0, W.K)(a === o, `You are trying to animate ${e} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`), !!a && !!o && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let r = 0; r < t.length; r++)
                                    if (t[r] !== e) return !0
                            }(t) || ("spring" === r || t6(r)) && n)
                        }(t, r, n, i)) {
                        if (P.current || !s) {
                            null == o || o(C(t, this.options, e)), null == a || a(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
            let er = (t, e, r) => {
                    let n = e - t;
                    return 0 === n ? 1 : (r - t) / n
                },
                en = (t, e, r = 10) => {
                    let n = "",
                        i = Math.max(Math.round(e / r), 2);
                    for (let e = 0; e < i; e++) n += t(er(0, i - 1, e)) + ", ";
                    return `linear(${n.substring(0,n.length-2)})`
                };

            function ei(t, e, r) {
                var n, i;
                let s = Math.max(e - 5, 0);
                return n = r - t(s), (i = e - s) ? 1e3 / i * n : 0
            }
            let es = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function ea(t, e) {
                return t * Math.sqrt(1 - e * e)
            }

            function eo(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < 2e4;) e += 50, r = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let el = ["duration", "bounce"],
                eu = ["stiffness", "damping", "mass"];

            function eh(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ec(t = es.visualDuration, e = es.bounce) {
                let r;
                let n = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: i,
                        restDelta: s
                    } = n,
                    a = n.keyframes[0],
                    o = n.keyframes[n.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: a
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: c,
                        duration: d,
                        velocity: f,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: es.velocity,
                            stiffness: es.stiffness,
                            damping: es.damping,
                            mass: es.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!eh(t, eu) && eh(t, el)) {
                            if (t.visualDuration) {
                                let r = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = r * r,
                                    i = 2 * tn(.05, 1, 1 - t.bounce) * Math.sqrt(n);
                                e = { ...e,
                                    mass: es.mass,
                                    stiffness: n,
                                    damping: i
                                }
                            } else {
                                let r = function({
                                    duration: t = es.duration,
                                    bounce: e = es.bounce,
                                    velocity: r = es.velocity,
                                    mass: n = es.mass
                                }) {
                                    let i, s;
                                    (0, W.K)(t <= g(es.maxDuration), "Spring duration must be 10 seconds or less");
                                    let a = 1 - e;
                                    a = tn(es.minDamping, es.maxDamping, a), t = tn(es.minDuration, es.maxDuration, m(t)), a < 1 ? (i = e => {
                                        let n = e * a,
                                            i = n * t;
                                        return .001 - (n - r) / ea(e, a) * Math.exp(-i)
                                    }, s = e => {
                                        let n = e * a * t,
                                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                            o = ea(Math.pow(e, 2), a);
                                        return (n * r + r - s) * Math.exp(-n) * (-i(e) + .001 > 0 ? -1 : 1) / o
                                    }) : (i = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), s = e => t * t * (r - e) * Math.exp(-e * t));
                                    let o = function(t, e, r) {
                                        let n = r;
                                        for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                        return n
                                    }(i, s, 5 / t);
                                    if (t = g(t), isNaN(o)) return {
                                        stiffness: es.stiffness,
                                        damping: es.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(o, 2) * n;
                                        return {
                                            stiffness: e,
                                            damping: 2 * a * Math.sqrt(n * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...r,
                                    mass: es.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({ ...n,
                        velocity: -m(n.velocity || 0)
                    }),
                    y = f || 0,
                    v = h / (2 * Math.sqrt(u * c)),
                    w = o - a,
                    A = m(Math.sqrt(u / c)),
                    b = 5 > Math.abs(w);
                if (i || (i = b ? es.restSpeed.granular : es.restSpeed.default), s || (s = b ? es.restDelta.granular : es.restDelta.default), v < 1) {
                    let t = ea(A, v);
                    r = e => o - Math.exp(-v * A * e) * ((y + v * A * w) / t * Math.sin(t * e) + w * Math.cos(t * e))
                } else if (1 === v) r = t => o - Math.exp(-A * t) * (w + (y + A * w) * t);
                else {
                    let t = A * Math.sqrt(v * v - 1);
                    r = e => {
                        let r = Math.exp(-v * A * e),
                            n = Math.min(t * e, 300);
                        return o - r * ((y + v * A * w) * Math.sinh(n) + t * w * Math.cosh(n)) / t
                    }
                }
                let E = {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let e = r(t);
                        if (p) l.done = t >= d;
                        else {
                            let n = 0;
                            v < 1 && (n = 0 === t ? g(y) : ei(r, t, e));
                            let a = Math.abs(n) <= i,
                                u = Math.abs(o - e) <= s;
                            l.done = a && u
                        }
                        return l.value = l.done ? o : e, l
                    },
                    toString: () => {
                        let t = Math.min(eo(E), 2e4),
                            e = en(e => E.next(t * e).value, t, 30);
                        return t + "ms " + e
                    }
                };
                return E
            }

            function ed({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: n = 325,
                bounceDamping: i = 10,
                bounceStiffness: s = 500,
                modifyTarget: a,
                min: o,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let f = t[0],
                    p = {
                        done: !1,
                        value: f
                    },
                    g = t => void 0 !== o && t < o || void 0 !== l && t > l,
                    m = t => void 0 === o ? l : void 0 === l ? o : Math.abs(o - t) < Math.abs(l - t) ? o : l,
                    y = r * e,
                    v = f + y,
                    w = void 0 === a ? v : a(v);
                w !== v && (y = w - f);
                let A = t => -y * Math.exp(-t / n),
                    b = t => w + A(t),
                    E = t => {
                        let e = A(t),
                            r = b(t);
                        p.done = Math.abs(e) <= u, p.value = p.done ? w : r
                    },
                    x = t => {
                        g(p.value) && (c = t, d = ec({
                            keyframes: [p.value, m(p.value)],
                            velocity: ei(b, t, p.value),
                            damping: i,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return x(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, E(t), x(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || E(t), p)
                    }
                }
            }
            let ef = U(.42, 0, 1, 1),
                ep = U(0, 0, .58, 1),
                eg = U(.42, 0, .58, 1),
                em = t => Array.isArray(t) && "number" != typeof t[0],
                ey = t => Array.isArray(t) && "number" == typeof t[0],
                ev = {
                    linear: B.Z,
                    easeIn: ef,
                    easeInOut: eg,
                    easeOut: ep,
                    circIn: J,
                    circInOut: _,
                    circOut: K,
                    backIn: H,
                    backInOut: Q,
                    backOut: G,
                    anticipate: z
                },
                ew = t => {
                    if (ey(t)) {
                        (0, W.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, n, i] = t;
                        return U(e, r, n, i)
                    }
                    return "string" == typeof t ? ((0, W.k)(void 0 !== ev[t], `Invalid easing type '${t}'`), ev[t]) : t
                },
                eA = (t, e) => r => e(t(r)),
                eb = (...t) => t.reduce(eA),
                eE = (t, e, r) => t + (e - t) * r;

            function ex(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function eP(t, e) {
                return r => r > 0 ? e : t
            }
            let ek = (t, e, r) => {
                    let n = t * t,
                        i = r * (e * e - n) + n;
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                eC = [tU, tL, tV],
                eT = t => eC.find(e => e.test(t));

            function eS(t) {
                let e = eT(t);
                if ((0, W.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let r = e.parse(t);
                return e === tV && (r = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: n
                }) {
                    t /= 360, r /= 100;
                    let i = 0,
                        s = 0,
                        a = 0;
                    if (e /= 100) {
                        let n = r < .5 ? r * (1 + e) : r + e - r * e,
                            o = 2 * r - n;
                        i = ex(o, n, t + 1 / 3), s = ex(o, n, t), a = ex(o, n, t - 1 / 3)
                    } else i = s = a = r;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: n
                    }
                }(r)), r
            }
            let eR = (t, e) => {
                    let r = eS(t),
                        n = eS(e);
                    if (!r || !n) return eP(t, e);
                    let i = { ...r
                    };
                    return t => (i.red = ek(r.red, n.red, t), i.green = ek(r.green, n.green, t), i.blue = ek(r.blue, n.blue, t), i.alpha = eE(r.alpha, n.alpha, t), tL.transform(i))
                },
                eB = new Set(["none", "hidden"]);

            function eN(t, e) {
                return r => eE(t, e, r)
            }

            function eO(t) {
                return "number" == typeof t ? eN : "string" == typeof t ? tt(t) ? eP : tj.test(t) ? eR : eF : Array.isArray(t) ? eI : "object" == typeof t ? tj.test(t) ? eR : eD : eP
            }

            function eI(t, e) {
                let r = [...t],
                    n = r.length,
                    i = t.map((t, r) => eO(t)(t, e[r]));
                return t => {
                    for (let e = 0; e < n; e++) r[e] = i[e](t);
                    return r
                }
            }

            function eD(t, e) {
                let r = { ...t,
                        ...e
                    },
                    n = {};
                for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = eO(t[i])(t[i], e[i]));
                return t => {
                    for (let e in n) r[e] = n[e](t);
                    return r
                }
            }
            let eF = (t, e) => {
                let r = tW.createTransformer(e),
                    n = tJ(t),
                    i = tJ(e);
                return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? eB.has(t) && !i.values.length || eB.has(e) && !n.values.length ? eB.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t : eb(eI(function(t, e) {
                    var r;
                    let n = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let a = e.types[s],
                            o = t.indexes[a][i[a]],
                            l = null !== (r = t.values[o]) && void 0 !== r ? r : 0;
                        n[s] = l, i[a]++
                    }
                    return n
                }(n, i), i.values), r) : ((0, W.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eP(t, e))
            };

            function eM(t, e, r) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof r ? eE(t, e, r) : eO(t)(t, e)
            }

            function eL({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: n = "easeInOut"
            }) {
                let i = em(n) ? n.map(ew) : ew(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    a = function(t, e, {
                        clamp: r = !0,
                        ease: n,
                        mixer: i
                    } = {}) {
                        let s = t.length;
                        if ((0, W.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let a = function(t, e, r) {
                                let n = [],
                                    i = r || eM,
                                    s = t.length - 1;
                                for (let r = 0; r < s; r++) {
                                    let s = i(t[r], t[r + 1]);
                                    e && (s = eb(Array.isArray(e) ? e[r] || B.Z : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, i),
                            o = a.length,
                            l = e => {
                                let r = 0;
                                if (o > 1)
                                    for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                                let n = er(t[r], t[r + 1], e);
                                return a[r](n)
                            };
                        return r ? e => l(tn(t[0], t[s - 1], e)) : l
                    }((r && r.length === e.length ? r : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let r = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let i = er(0, e, n);
                                t.push(eE(r, 1, i))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(i) ? i : e.map(() => i || eg).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }
            let eU = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => I.update(e, !0),
                        stop: () => D(e),
                        now: () => F.isProcessing ? F.timestamp : t7.now()
                    }
                },
                eV = {
                    decay: ed,
                    inertia: ed,
                    tween: eL,
                    keyframes: eL,
                    spring: ec
                },
                ej = t => t / 100;
            class eG extends ee {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: r,
                        element: n,
                        keyframes: i
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || tR;
                    this.resolver = new s(i, (t, e) => this.onKeyframesResolved(t, e), e, r, n), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, r;
                    let {
                        type: n = "keyframes",
                        repeat: i = 0,
                        repeatDelay: s = 0,
                        repeatType: a,
                        velocity: o = 0
                    } = this.options, l = t6(n) ? n : eV[n] || eL;
                    l !== eL && "number" != typeof t[0] && (e = eb(ej, eM(t[0], t[1])), t = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === a && (r = l({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -o
                    })), null === u.calculatedDuration && (u.calculatedDuration = eo(u));
                    let {
                        calculatedDuration: h
                    } = u, c = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: c,
                        totalDuration: c * (i + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: r
                    } = this;
                    if (!r) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: i,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: a,
                        keyframes: o,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = r;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: c,
                        repeat: d,
                        repeatType: f,
                        repeatDelay: p,
                        onUpdate: g
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let m = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? m < 0 : m > u;
                    this.currentTime = Math.max(m, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let v = this.currentTime,
                        w = i;
                    if (d) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            r = t % 1;
                        !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === f ? (r = 1 - r, p && (r -= p / h)) : "mirror" === f && (w = s)), v = tn(0, 1, r) * h
                    }
                    let A = y ? {
                        done: !1,
                        value: o[0]
                    } : w.next(v);
                    a && (A.value = a(A.value));
                    let {
                        done: b
                    } = A;
                    y || null === l || (b = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let E = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
                    return E && void 0 !== n && (A.value = C(o, this.options, n)), g && g(A.value), E && this.finish(), A
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? m(t.calculatedDuration) : 0
                }
                get time() {
                    return m(this.currentTime)
                }
                set time(t) {
                    t = g(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = m(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = eU,
                        onPlay: e,
                        startTime: r
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != r ? r : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let eH = new Set(["opacity", "clipPath", "filter", "transform"]);

            function eQ(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let ez = {
                    linearEasing: void 0
                },
                eJ = function(t, e) {
                    let r = eQ(t);
                    return () => {
                        var t;
                        return null !== (t = ez[e]) && void 0 !== t ? t : r()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                eK = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                e_ = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: eK([0, .65, .55, 1]),
                    circOut: eK([.55, 0, 1, .45]),
                    backIn: eK([.31, .01, .66, -.59]),
                    backOut: eK([.33, 1.53, .69, .99])
                };

            function eq(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let eW = eQ(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                eZ = {
                    anticipate: z,
                    backInOut: Q,
                    circInOut: _
                };
            class eY extends ee {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: r,
                        element: n,
                        keyframes: i
                    } = this.options;
                    this.resolver = new t5(i, (t, e) => this.onKeyframesResolved(t, e), e, r, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var r, n;
                    let {
                        duration: i = 300,
                        times: s,
                        ease: a,
                        type: o,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (r = l.owner) || void 0 === r ? void 0 : r.current)) return !1;
                    if ("string" == typeof a && eJ() && a in eZ && (a = eZ[a]), t6((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && eJ() || !e || "string" == typeof e && (e in e_ || eJ()) || ey(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: r,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let r = new eG({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                i = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) i.push((n = r.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: i,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), i = h.duration, s = h.times, a = h.ease, o = "keyframes"
                    }
                    let c = function(t, e, r, {
                        delay: n = 0,
                        duration: i = 300,
                        repeat: s = 0,
                        repeatType: a = "loop",
                        ease: o = "easeInOut",
                        times: l
                    } = {}) {
                        let u = {
                            [e]: r
                        };
                        l && (u.offset = l);
                        let h = function t(e, r) {
                            if (e) return "function" == typeof e && eJ() ? en(e, r) : ey(e) ? eK(e) : Array.isArray(e) ? e.map(e => t(e, r) || e_.easeOut) : e_[e]
                        }(o, i);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: i,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, t, { ...this.options,
                        duration: i,
                        times: s,
                        ease: a
                    });
                    return c.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (eq(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: r
                        } = this.options;
                        l.set(C(t, this.options, e)), r && r(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: i,
                        times: s,
                        type: o,
                        ease: a,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return m(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return m(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.currentTime = g(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return B.Z;
                        let {
                            animation: r
                        } = e;
                        eq(r, t)
                    } else this.pendingTimeline = t;
                    return B.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: r,
                        duration: n,
                        type: i,
                        ease: s,
                        times: a
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: o,
                            element: l,
                            ...u
                        } = this.options, h = new eG({ ...u,
                            keyframes: r,
                            duration: n,
                            type: i,
                            ease: s,
                            times: a,
                            isGenerator: !0
                        }), c = g(this.time);
                        t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10)
                    }
                    let {
                        onStop: o
                    } = this.options;
                    o && o(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: r,
                        repeatDelay: n,
                        repeatType: i,
                        damping: s,
                        type: a
                    } = t;
                    return eW() && r && eH.has(r) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== i && 0 !== s && "inertia" !== a
                }
            }
            let eX = eQ(() => void 0 !== window.ScrollTimeline);
            class e$ {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = e
                }
                attachTimeline(t, e) {
                    let r = this.animations.map(r => eX() && r.attachTimeline ? r.attachTimeline(t) : e(r));
                    return () => {
                        r.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let e0 = (t, e, r, n = {}, i, s) => a => {
                    let o = E(n, t) || {},
                        l = o.delay || n.delay || 0,
                        {
                            elapsed: u = 0
                        } = n;
                    u -= g(l);
                    let h = {
                        keyframes: Array.isArray(r) ? r : [null, r],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...o,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), o.onUpdate && o.onUpdate(t)
                        },
                        onComplete: () => {
                            a(), o.onComplete && o.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : i
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: n,
                        staggerDirection: i,
                        repeat: s,
                        repeatType: a,
                        repeatDelay: o,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(o) && (h = { ...h,
                        ...b(t, h)
                    }), h.duration && (h.duration = g(h.duration)), h.repeatDelay && (h.repeatDelay = g(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let c = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (c = !0)), (P.current || x.skipAnimations) && (c = !0, h.duration = 0, h.delay = 0), c && !s && void 0 !== e.get()) {
                        let t = C(h.keyframes, o);
                        if (void 0 !== t) return I.update(() => {
                            h.onUpdate(t), h.onComplete()
                        }), new e$([])
                    }
                    return !s && eY.supports(h) ? new eY(h) : new eG(h)
                },
                e1 = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                e2 = t => s(t) ? t[t.length - 1] || 0 : t;

            function e3(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function e4(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            class e8 {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return e3(this.subscriptions, t), () => e4(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let e5 = t => !isNaN(parseFloat(t)),
                e6 = {
                    current: void 0
                };
            class e9 {
                constructor(t, e = {}) {
                    this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let r = t7.now();
                        this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = t7.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = e5(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new e8);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), I.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return e6.current && e6.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = t7.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), r ? 1e3 / r * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function e7(t, e) {
                return new e9(t, e)
            }
            let rt = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                re = "data-" + rt("framerAppearId"),
                rr = t => !!(t && t.getVelocity);

            function rn(t, e) {
                let r = t.getValue("willChange");
                if (rr(r) && r.add) return r.add(e)
            }

            function ri(t, e, {
                delay: r = 0,
                transitionOverride: n,
                type: i
            } = {}) {
                var s;
                let {
                    transition: a = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...l
                } = e;
                n && (a = n);
                let u = [],
                    c = i && t.animationState && t.animationState.getState()[i];
                for (let e in l) {
                    let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        i = l[e];
                    if (void 0 === i || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let n = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, n
                        }(c, e)) continue;
                    let o = {
                            delay: r,
                            ...E(a || {}, e)
                        },
                        h = !1;
                    if (window.MotionHandoffAnimation) {
                        let r = t.props[re];
                        if (r) {
                            let t = window.MotionHandoffAnimation(r, e, I);
                            null !== t && (o.startTime = t, h = !0)
                        }
                    }
                    rn(t, e), n.start(e0(e, n, i, t.shouldReduceMotion && p.has(e) ? {
                        type: !1
                    } : o, t, h));
                    let d = n.animation;
                    d && u.push(d)
                }
                return o && Promise.all(u).then(() => {
                    I.update(() => {
                        o && function(t, e) {
                            let {
                                transitionEnd: r = {},
                                transition: n = {},
                                ...i
                            } = h(t, e) || {};
                            for (let e in i = { ...i,
                                    ...r
                                }) {
                                let r = e2(i[e]);
                                t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, e7(r))
                            }
                        }(t, o)
                    })
                }), u
            }

            function rs(t, e, r = {}) {
                var n;
                let i = h(t, e, "exit" === r.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = i || {};
                r.transitionOverride && (s = r.transitionOverride);
                let a = i ? () => Promise.all(ri(t, i, r)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: a,
                            staggerDirection: o
                        } = s;
                        return function(t, e, r = 0, n = 0, i = 1, s) {
                            let a = [],
                                o = (t.variantChildren.size - 1) * n,
                                l = 1 === i ? (t = 0) => t * n : (t = 0) => o - t * n;
                            return Array.from(t.variantChildren).sort(ra).forEach((t, n) => {
                                t.notify("AnimationStart", e), a.push(rs(t, e, { ...s,
                                    delay: r + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(a)
                        }(t, e, i + n, a, o, r)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([a(), o(r.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [a, o] : [o, a];
                    return t().then(() => e())
                }
            }

            function ra(t, e) {
                return t.sortNodePosition(e)
            }
            let ro = d.length,
                rl = [...c].reverse(),
                ru = c.length;

            function rh(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function rc() {
                return {
                    animate: rh(!0),
                    whileInView: rh(),
                    whileHover: rh(),
                    whileTap: rh(),
                    whileDrag: rh(),
                    whileFocus: rh(),
                    exit: rh()
                }
            }
            class rd {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class rf extends rd {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: r
                            }) => (function(t, e, r = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => rs(t, e, r)));
                                else if ("string" == typeof e) n = rs(t, e, r);
                                else {
                                    let i = "function" == typeof e ? h(t, e, r.custom) : e;
                                    n = Promise.all(ri(t, i, r))
                                }
                                return n.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, r))),
                            r = rc(),
                            n = !0,
                            l = e => (r, n) => {
                                var i;
                                let s = h(t, n, "exit" === e ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    r = { ...r,
                                        ...n,
                                        ...e
                                    }
                                }
                                return r
                            };

                        function u(u) {
                            let {
                                props: h
                            } = t, c = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let r = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (r.initial = e.props.initial), r
                                }
                                let r = {};
                                for (let t = 0; t < ro; t++) {
                                    let n = d[t],
                                        i = e.props[n];
                                    (o(i) || !1 === i) && (r[n] = i)
                                }
                                return r
                            }(t.parent) || {}, f = [], p = new Set, g = {}, m = 1 / 0;
                            for (let e = 0; e < ru; e++) {
                                var y;
                                let d = rl[e],
                                    v = r[d],
                                    w = void 0 !== h[d] ? h[d] : c[d],
                                    A = o(w),
                                    b = d === u ? v.isActive : null;
                                !1 === b && (m = e);
                                let E = w === c[d] && w !== h[d] && A;
                                if (E && n && t.manuallyAnimateOnMount && (E = !1), v.protectedKeys = { ...g
                                    }, !v.isActive && null === b || !w && !v.prevProp || i(w) || "boolean" == typeof w) continue;
                                let x = (y = v.prevProp, "string" == typeof w ? w !== y : !!Array.isArray(w) && !a(w, y)),
                                    P = x || d === u && v.isActive && !E && A || e > m && A,
                                    k = !1,
                                    C = Array.isArray(w) ? w : [w],
                                    T = C.reduce(l(d), {});
                                !1 === b && (T = {});
                                let {
                                    prevResolvedValues: S = {}
                                } = v, R = { ...S,
                                    ...T
                                }, B = e => {
                                    P = !0, p.has(e) && (k = !0, p.delete(e)), v.needsAnimating[e] = !0;
                                    let r = t.getValue(e);
                                    r && (r.liveStyle = !1)
                                };
                                for (let t in R) {
                                    let e = T[t],
                                        r = S[t];
                                    if (!g.hasOwnProperty(t))(s(e) && s(r) ? a(e, r) : e === r) ? void 0 !== e && p.has(t) ? B(t) : v.protectedKeys[t] = !0 : null != e ? B(t) : p.add(t)
                                }
                                v.prevProp = w, v.prevResolvedValues = T, v.isActive && (g = { ...g,
                                    ...T
                                }), n && t.blockInitialAnimation && (P = !1);
                                let N = !(E && x) || k;
                                P && N && f.push(...C.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (p.size) {
                                let e = {};
                                p.forEach(r => {
                                    let n = t.getBaseTarget(r),
                                        i = t.getValue(r);
                                    i && (i.liveStyle = !0), e[r] = null != n ? n : null
                                }), f.push({
                                    animation: e
                                })
                            }
                            let v = !!f.length;
                            return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (v = !1), n = !1, v ? e(f) : Promise.resolve()
                        }
                        return {
                            animateChanges: u,
                            setActive: function(e, n) {
                                var i;
                                if (r[e].isActive === n) return Promise.resolve();
                                null === (i = t.variantChildren) || void 0 === i || i.forEach(t => {
                                    var r;
                                    return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                }), r[e].isActive = n;
                                let s = u(e);
                                for (let t in r) r[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(r) {
                                e = r(t)
                            },
                            getState: () => r,
                            reset: () => {
                                r = rc(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    i(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let rp = 0;
            class rg extends rd {
                constructor() {
                    super(...arguments), this.id = rp++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: r
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === r) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let rm = {
                x: !1,
                y: !1
            };

            function ry(t, e) {
                let r = function(t, e, r) {
                        if (t instanceof Element) return [t];
                        if ("string" == typeof t) {
                            let e = document.querySelectorAll(t);
                            return e ? Array.from(e) : []
                        }
                        return Array.from(t)
                    }(t),
                    n = new AbortController;
                return [r, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function rv(t) {
                return e => {
                    "touch" === e.pointerType || rm.x || rm.y || t(e)
                }
            }
            let rw = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
                rA = new WeakSet;

            function rb(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function rE(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let rx = (t, e) => {
                    let r = t.currentTarget;
                    if (!r) return;
                    let n = rb(() => {
                        if (rA.has(r)) return;
                        rE(r, "down");
                        let t = rb(() => {
                            rE(r, "up")
                        });
                        r.addEventListener("keyup", t, e), r.addEventListener("blur", () => rE(r, "cancel"), e)
                    });
                    r.addEventListener("keydown", n, e), r.addEventListener("blur", () => r.removeEventListener("keydown", n), e)
                },
                rP = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                rk = (t, e) => !!e && (t === e || rk(t, e.parentElement));

            function rC(t) {
                return rw(t) && !(rm.x || rm.y)
            }

            function rT(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let rS = t => e => rw(e) && t(e, rT(e));

            function rR(t, e, r, n = {
                passive: !0
            }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r)
            }

            function rB(t, e, r, n) {
                return rR(t, e, rS(r), n)
            }
            let rN = (t, e) => Math.abs(t - e);
            class rO {
                constructor(t, e, {
                    transformPagePoint: r,
                    contextWindow: n,
                    dragSnapToOrigin: i = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = rF(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                i = (t = r.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(rN(t.x, e.x) ** 2 + rN(t.y, e.y) ** 2) >= 3);
                            if (!n && !i) return;
                            let {
                                point: s
                            } = r, {
                                timestamp: a
                            } = F;
                            this.history.push({ ...s,
                                timestamp: a
                            });
                            let {
                                onStart: o,
                                onMove: l
                            } = this.handlers;
                            n || (o && o(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, r)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = rI(e, this.transformPagePoint), I.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: n,
                                resumeAnimation: i
                            } = this.handlers;
                            if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = rF("pointercancel" === t.type ? this.lastMoveEventInfo : rI(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, s), n && n(t, s)
                        }, !rw(t)) return;
                    this.dragSnapToOrigin = i, this.handlers = e, this.transformPagePoint = r, this.contextWindow = n || window;
                    let s = rI(rT(t), this.transformPagePoint),
                        {
                            point: a
                        } = s,
                        {
                            timestamp: o
                        } = F;
                    this.history = [{ ...a,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, rF(s, this.history)), this.removeListeners = eb(rB(this.contextWindow, "pointermove", this.handlePointerMove), rB(this.contextWindow, "pointerup", this.handlePointerUp), rB(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), D(this.updatePoint)
                }
            }

            function rI(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function rD(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function rF({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: rD(t, rM(e)),
                    offset: rD(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = t.length - 1,
                            n = null,
                            i = rM(t);
                        for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > g(.1)));) r--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = m(i.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (i.x - n.x) / s,
                            y: (i.y - n.y) / s
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function rM(t) {
                return t[t.length - 1]
            }

            function rL(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function rU(t) {
                return t.max - t.min
            }

            function rV(t, e, r, n = .5) {
                t.origin = n, t.originPoint = eE(e.min, e.max, t.origin), t.scale = rU(r) / rU(e), t.translate = eE(r.min, r.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function rj(t, e, r, n) {
                rV(t.x, e.x, r.x, n ? n.originX : void 0), rV(t.y, e.y, r.y, n ? n.originY : void 0)
            }

            function rG(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + rU(e)
            }

            function rH(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + rU(e)
            }

            function rQ(t, e, r) {
                rH(t.x, e.x, r.x), rH(t.y, e.y, r.y)
            }

            function rz(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function rJ(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }

            function rK(t, e, r) {
                return {
                    min: r_(t, e),
                    max: r_(t, r)
                }
            }

            function r_(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let rq = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                rW = () => ({
                    x: rq(),
                    y: rq()
                }),
                rZ = () => ({
                    min: 0,
                    max: 0
                }),
                rY = () => ({
                    x: rZ(),
                    y: rZ()
                });

            function rX(t) {
                return [t("x"), t("y")]
            }

            function r$({
                top: t,
                left: e,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function r0(t) {
                return void 0 === t || 1 === t
            }

            function r1({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !r0(t) || !r0(e) || !r0(r)
            }

            function r2(t) {
                return r1(t) || r3(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function r3(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }

            function r4(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
            }

            function r8(t, e = 0, r = 1, n, i) {
                t.min = r4(t.min, e, r, n, i), t.max = r4(t.max, e, r, n, i)
            }

            function r5(t, {
                x: e,
                y: r
            }) {
                r8(t.x, e.translate, e.scale, e.originPoint), r8(t.y, r.translate, r.scale, r.originPoint)
            }

            function r6(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function r9(t, e, r, n, i = .5) {
                let s = eE(t.min, t.max, i);
                r8(t, e, r, s, n)
            }

            function r7(t, e) {
                r9(t.x, e.x, e.scaleX, e.scale, e.originX), r9(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function nt(t, e) {
                return r$(function(t, e) {
                    if (!e) return t;
                    let r = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let ne = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                nr = new WeakMap;
            class nn {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = rY(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new rO(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: r
                            } = this.getProps();
                            r ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(rT(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: i
                            } = this.getProps();
                            if (r && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === r || "y" === r ? rm[r] ? null : (rm[r] = !0, () => {
                                    rm[r] = !1
                                }) : rm.x || rm.y ? null : (rm.x = rm.y = !0, () => {
                                    rm.x = rm.y = !1
                                }), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rX(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tu.test(e)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let n = r.layout.layoutBox[t];
                                        if (n) {
                                            let t = rU(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), i && I.postRender(() => i(t, e)), rn(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: s
                            } = this.getProps();
                            if (!r && !this.openDragLock) return;
                            let {
                                offset: a
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                }(a), null !== this.currentDirection && i && i(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => rX(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: ne(this.visualElement)
                    })
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    i && I.postRender(() => i(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, r) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!r || !ni(t, n, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: r
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? eE(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? eE(r, t, n.max) : Math.min(t, r)), t
                    }(s, this.constraints[t], this.elastic[t])), i.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: r
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, i = this.constraints;
                    e && rL(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: r,
                        bottom: n,
                        right: i
                    }) {
                        return {
                            x: rz(t.x, r, i),
                            y: rz(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: rK(t, "left", "right"),
                            y: rK(t, "top", "bottom")
                        }
                    }(r), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && rX(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!e || !rL(e)) return !1;
                    let n = e.current;
                    (0, W.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let s = function(t, e, r) {
                            let n = nt(t, r),
                                {
                                    scroll: i
                                } = e;
                            return i && (r6(n.x, i.offset.x), r6(n.y, i.offset.y)), n
                        }(n, i.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: rJ((t = i.layout.layoutBox).x, s.x),
                            y: rJ(t.y, s.y)
                        };
                    if (r) {
                        let t = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!t, t && (a = r$(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: i,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: a
                    } = this.getProps(), o = this.constraints || {};
                    return Promise.all(rX(a => {
                        if (!ni(a, e, this.currentDirection)) return;
                        let l = o && o[a] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: r ? t[a] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    })).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return rn(this.visualElement, t), r.start(e0(t, r, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    rX(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    rX(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        r = this.visualElement.getProps();
                    return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    rX(e => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!ni(e, r, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: r,
                                max: s
                            } = n.layout.layoutBox[e];
                            i.set(t[e] - eE(r, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!rL(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    rX(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let r = e.get();
                            n[t] = function(t, e) {
                                let r = .5,
                                    n = rU(t),
                                    i = rU(e);
                                return i > n ? r = er(e.min, e.max - n, t.min) : n > i && (r = er(t.min, t.max - i, e.min)), tn(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: i
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), rX(e => {
                        if (!ni(e, t, null)) return;
                        let r = this.getAxisMotionValue(e),
                            {
                                min: i,
                                max: s
                            } = this.constraints[e];
                        r.set(eE(i, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nr.set(this.visualElement, this);
                    let t = rB(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            rL(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", e);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), I.read(e);
                    let i = rR(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (rX(e => {
                                let r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        i(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: s = .35,
                            dragMomentum: a = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: s,
                        dragMomentum: a
                    }
                }
            }

            function ni(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            class ns extends rd {
                constructor(t) {
                    super(t), this.removeGroupControls = B.Z, this.removeListeners = B.Z, this.controls = new nn(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || B.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let na = t => (e, r) => {
                t && I.postRender(() => t(e, r))
            };
            class no extends rd {
                constructor() {
                    super(...arguments), this.removePointerDownListener = B.Z
                }
                onPointerDown(t) {
                    this.session = new rO(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: ne(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: r,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: na(t),
                        onStart: na(e),
                        onMove: r,
                        onEnd: (t, e) => {
                            delete this.session, n && I.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = rB(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var nl = r(7437),
                nu = r(2265),
                nh = r(4252),
                nc = r(8881);
            let nd = (0, nu.createContext)({}),
                nf = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function np(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let ng = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!th.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let r = np(t, e.target.x),
                            n = np(t, e.target.y);
                        return `${r}% ${n}%`
                    }
                },
                nm = {},
                {
                    schedule: ny,
                    cancel: nv
                } = O(queueMicrotask, !1);
            class nw extends nu.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: i
                    } = t;
                    Object.assign(nm, nb), i && (e.group && e.group.add(i), r && r.register && n && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({ ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nf.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: r,
                        drag: n,
                        isPresent: i
                    } = this.props, s = r.projection;
                    return s && (s.isPresent = i, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === i || (i ? s.promote() : s.relegate() || I.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), ny.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nA(t) {
                let [e, r] = function() {
                    let t = (0, nu.useContext)(nh.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: r,
                        register: n
                    } = t, i = (0, nu.useId)();
                    (0, nu.useEffect)(() => n(i), []);
                    let s = (0, nu.useCallback)(() => r && r(i), [i, r]);
                    return !e && r ? [!1, s] : [!0]
                }(), n = (0, nu.useContext)(nc.p);
                return (0, nl.jsx)(nw, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, nu.useContext)(nd),
                    isPresent: e,
                    safeToRemove: r
                })
            }
            let nb = {
                    borderRadius: { ...ng,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: ng,
                    borderTopRightRadius: ng,
                    borderBottomLeftRadius: ng,
                    borderBottomRightRadius: ng,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: r
                        }) => {
                            let n = tW.parse(t);
                            if (n.length > 5) return t;
                            let i = tW.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                a = r.x.scale * e.x,
                                o = r.y.scale * e.y;
                            n[0 + s] /= a, n[1 + s] /= o;
                            let l = eE(a, o, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), i(n)
                        }
                    }
                },
                nE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nx = nE.length,
                nP = t => "string" == typeof t ? parseFloat(t) : t,
                nk = t => "number" == typeof t || th.test(t);

            function nC(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nT = nR(0, .5, K),
                nS = nR(.5, .95, B.Z);

            function nR(t, e, r) {
                return n => n < t ? 0 : n > e ? 1 : r(er(t, e, n))
            }

            function nB(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nN(t, e) {
                nB(t.x, e.x), nB(t.y, e.y)
            }

            function nO(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function nI(t, e, r, n, i) {
                return t -= e, t = n + 1 / r * (t - n), void 0 !== i && (t = n + 1 / i * (t - n)), t
            }

            function nD(t, e, [r, n, i], s, a) {
                ! function(t, e = 0, r = 1, n = .5, i, s = t, a = t) {
                    if (tu.test(e) && (e = parseFloat(e), e = eE(a.min, a.max, e / 100) - a.min), "number" != typeof e) return;
                    let o = eE(s.min, s.max, n);
                    t === s && (o -= e), t.min = nI(t.min, e, r, o, i), t.max = nI(t.max, e, r, o, i)
                }(t, e[r], e[n], e[i], e.scale, s, a)
            }
            let nF = ["x", "scaleX", "originX"],
                nM = ["y", "scaleY", "originY"];

            function nL(t, e, r, n) {
                nD(t.x, e, nF, r ? r.x : void 0, n ? n.x : void 0), nD(t.y, e, nM, r ? r.y : void 0, n ? n.y : void 0)
            }

            function nU(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nV(t) {
                return nU(t.x) && nU(t.y)
            }

            function nj(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function nG(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function nH(t, e) {
                return nG(t.x, e.x) && nG(t.y, e.y)
            }

            function nQ(t) {
                return rU(t.x) / rU(t.y)
            }

            function nz(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class nJ {
                constructor() {
                    this.members = []
                }
                add(t) {
                    e3(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (e4(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let r = this.members.findIndex(e => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: r
                        } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let nK = (t, e) => t.depth - e.depth;
            class n_ {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    e3(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    e4(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(nK), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function nq(t) {
                let e = rr(t) ? t.get() : t;
                return e1(e) ? e.toValue() : e
            }
            let nW = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                nZ = "undefined" != typeof window && void 0 !== window.MotionDebug,
                nY = ["", "X", "Y", "Z"],
                nX = {
                    visibility: "hidden"
                },
                n$ = 0;

            function n0(t, e, r, n) {
                let {
                    latestValues: i
                } = e;
                i[t] && (r[t] = i[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function n1({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i
            }) {
                return class {
                    constructor(t = {}, r = null == e ? void 0 : e()) {
                        this.id = n$++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, nZ && (nW.totalNodes = nW.resolvedTargetDeltas = nW.recalculatedProjection = 0), this.nodes.forEach(n4), this.nodes.forEach(ie), this.nodes.forEach(ir), this.nodes.forEach(n8), nZ && window.MotionDebug.record(nW)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new n_)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new e8), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: i,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (i || n) && (this.isLayoutDirty = !0), t) {
                            let r;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(t, e) {
                                    let r = t7.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let i = e - r;
                                            i >= 250 && (D(n), t(i - 250))
                                        };
                                    return I.read(n, !0), () => D(n)
                                }(n, 0), nf.hasAnimatedSinceResize && (nf.hasAnimatedSinceResize = !1, this.nodes.forEach(it))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let i = this.options.transition || s.getDefaultTransition() || iu,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: o
                                } = s.getProps(),
                                l = !this.targetLayout || !nH(this.targetLayout, n) || r,
                                u = !e && r;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...E(i, "layout"),
                                    onPlay: a,
                                    onComplete: o
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || it(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, D(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(ii), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: r
                                } = e.options;
                                if (!r) return;
                                let n = r.props[re];
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: r
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", I, !(t || r))
                                }
                                let {
                                    parent: i
                                } = e;
                                i && !i.hasCheckedOptimisedAppear && t(i)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: r
                        } = this.options;
                        if (void 0 === e && !r) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n6);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(n9), this.isUpdating = !1, this.nodes.forEach(n7), this.nodes.forEach(n2), this.nodes.forEach(n3), this.clearAllSnapshots();
                        let t = t7.now();
                        F.delta = tn(0, 1e3 / 60, t - F.timestamp), F.timestamp = t, F.isProcessing = !0, M.update.process(F), M.preRender.process(F), M.render.process(F), F.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, ny.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(n5), this.sharedNodes.forEach(is)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, I.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        I.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = rY(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: r(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !nV(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || r2(this.latestValues) || s) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return t && (n = this.removeTransform(n)), id((e = n).x), id(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return rY();
                        let r = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(ig))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (r6(r.x, t.offset.x), r6(r.y, t.offset.y))
                        }
                        return r
                    }
                    removeElementScroll(t) {
                        var e;
                        let r = rY();
                        if (nN(r, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return r;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: i,
                                    options: s
                                } = n;
                            n !== this.root && i && s.layoutScroll && (i.wasRoot && nN(r, t), r6(r.x, i.offset.x), r6(r.y, i.offset.y))
                        }
                        return r
                    }
                    applyTransform(t, e = !1) {
                        let r = rY();
                        nN(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && r7(r, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), r2(n.latestValues) && r7(r, n.latestValues)
                        }
                        return r2(this.latestValues) && r7(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        let e = rY();
                        nN(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !r2(r.latestValues)) continue;
                            r1(r.latestValues) && r.updateSnapshot();
                            let n = rY();
                            nN(n, r.measurePageBox()), nL(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                        }
                        return r2(this.latestValues) && nL(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, r, n, i;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let a = !!this.resumingFrom || this !== s;
                        if (!(t || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: o,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (o || l)) {
                            if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rY(), this.relativeTargetOrigin = rY(), rQ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nN(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = rY(), this.targetWithTransforms = rY()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), r = this.target, n = this.relativeTarget, i = this.relativeParent.target, rG(r.x, n.x, i.x), rG(r.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nN(this.target, this.layout.layoutBox), r5(this.target, this.targetDelta)) : nN(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rY(), this.relativeTargetOrigin = rY(), rQ(this.relativeTargetOrigin, this.target, t.target), nN(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                nZ && nW.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || r1(this.parent.latestValues) || r3(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            r = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === F.timestamp && (n = !1), n) return;
                        let {
                            layout: i,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || s)) return;
                        nN(this.layoutCorrected, this.layout.layoutBox);
                        let a = this.treeScale.x,
                            o = this.treeScale.y;
                        ! function(t, e, r, n = !1) {
                            let i, s;
                            let a = r.length;
                            if (a) {
                                e.x = e.y = 1;
                                for (let o = 0; o < a; o++) {
                                    s = (i = r[o]).projectionDelta;
                                    let {
                                        visualElement: a
                                    } = i.options;
                                    (!a || !a.props.style || "contents" !== a.props.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && r7(t, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, r5(t, s)), n && r2(i.latestValues) && r7(t, i.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, r), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = rY());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nO(this.prevProjectionDelta.x, this.projectionDelta.x), nO(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), rj(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === a && this.treeScale.y === o && nz(this.projectionDelta.x, this.prevProjectionDelta.x) && nz(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nZ && nW.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = rW(), this.projectionDelta = rW(), this.projectionDeltaWithTransform = rW()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r;
                        let n = this.snapshot,
                            i = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            a = rW();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let o = rY(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(il));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (ia(a.x, t.x, n), ia(a.y, t.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, f, p;
                                rQ(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, io(f.x, p.x, o.x, n), io(f.y, p.y, o.y, n), r && (u = this.relativeTarget, d = r, nj(u.x, d.x) && nj(u.y, d.y)) && (this.isProjectionDirty = !1), r || (r = rY()), nN(r, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, r, n, i, s) {
                                i ? (t.opacity = eE(0, void 0 !== r.opacity ? r.opacity : 1, nT(n)), t.opacityExit = eE(void 0 !== e.opacity ? e.opacity : 1, 0, nS(n))) : s && (t.opacity = eE(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                for (let i = 0; i < nx; i++) {
                                    let s = `border${nE[i]}Radius`,
                                        a = nC(e, s),
                                        o = nC(r, s);
                                    (void 0 !== a || void 0 !== o) && (a || (a = 0), o || (o = 0), 0 === a || 0 === o || nk(a) === nk(o) ? (t[s] = Math.max(eE(nP(a), nP(o), n), 0), (tu.test(o) || tu.test(a)) && (t[s] += "%")) : t[s] = o)
                                }(e.rotate || r.rotate) && (t.rotate = eE(e.rotate || 0, r.rotate || 0, n))
                            }(s, i, this.latestValues, n, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (D(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = I.update(() => {
                            nf.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r) {
                                let n = rr(0) ? 0 : e7(0);
                                return n.start(e0("", n, 1e3, r)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: r,
                                layout: n,
                                latestValues: i
                            } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && ip(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || rY();
                                let e = rU(this.layout.layoutBox.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                let n = rU(this.layout.layoutBox.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + n
                            }
                            nN(e, r), r7(e, i), rj(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nJ), this.sharedNodes.get(t).add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: r
                            } = t;
                        if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), !e) return;
                        let n = {};
                        r.z && n0("z", t, n, this.animationValues);
                        for (let e = 0; e < nY.length; e++) n0(`rotate${nY[e]}`, t, n, this.animationValues), n0(`skew${nY[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, r;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return nX;
                        let n = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = nq(null == t ? void 0 : t.pointerEvents) || "", n.transform = i ? i(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = nq(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !r2(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, r) {
                            let n = "",
                                i = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                a = (null == r ? void 0 : r.z) || 0;
                            if ((i || s || a) && (n = `translate3d(${i}px, ${s}px, ${a}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), r) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: i,
                                    rotateY: s,
                                    skewX: a,
                                    skewY: o
                                } = r;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), i && (n += `rotateX(${i}deg) `), s && (n += `rotateY(${s}deg) `), a && (n += `skewX(${a}deg) `), o && (n += `skewY(${o}deg) `)
                            }
                            let o = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== o || 1 !== l) && (n += `scale(${o}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, a), i && (n.transform = i(a, n.transform));
                        let {
                            x: o,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*o.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (r = null !== (e = a.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, nm) {
                            if (void 0 === a[t]) continue;
                            let {
                                correct: e,
                                applyTo: r
                            } = nm[t], i = "none" === n.transform ? a[t] : e(a[t], s);
                            if (r) {
                                let t = r.length;
                                for (let e = 0; e < t; e++) n[r[e]] = i
                            } else n[t] = i
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? nq(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(n6), this.root.sharedNodes.clear()
                    }
                }
            }

            function n2(t) {
                t.updateLayout()
            }

            function n3(t) {
                var e;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: i
                    } = t.options, s = r.source !== t.layout.source;
                    "size" === i ? rX(t => {
                        let n = s ? r.measuredBox[t] : r.layoutBox[t],
                            i = rU(n);
                        n.min = e[t].min, n.max = n.min + i
                    }) : ip(i, r.layoutBox, e) && rX(n => {
                        let i = s ? r.measuredBox[n] : r.layoutBox[n],
                            a = rU(e[n]);
                        i.max = i.min + a, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + a)
                    });
                    let a = rW();
                    rj(a, e, r.layoutBox);
                    let o = rW();
                    s ? rj(o, t.applyTransform(n, !0), r.measuredBox) : rj(o, e, r.layoutBox);
                    let l = !nV(a),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: s
                            } = n;
                            if (i && s) {
                                let a = rY();
                                rQ(a, r.layoutBox, i.layoutBox);
                                let o = rY();
                                rQ(o, e, s.layoutBox), nH(a, o) || (u = !0), n.options.layoutRoot && (t.relativeTarget = o, t.relativeTargetOrigin = a, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: r,
                        delta: o,
                        layoutDelta: a,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function n4(t) {
                nZ && nW.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function n8(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function n5(t) {
                t.clearSnapshot()
            }

            function n6(t) {
                t.clearMeasurements()
            }

            function n9(t) {
                t.isLayoutDirty = !1
            }

            function n7(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function it(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function ie(t) {
                t.resolveTargetDelta()
            }

            function ir(t) {
                t.calcProjection()
            }

            function ii(t) {
                t.resetSkewAndRotation()
            }

            function is(t) {
                t.removeLeadSnapshot()
            }

            function ia(t, e, r) {
                t.translate = eE(e.translate, 0, r), t.scale = eE(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function io(t, e, r, n) {
                t.min = eE(e.min, r.min, n), t.max = eE(e.max, r.max, n)
            }

            function il(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let iu = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                ih = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                ic = ih("applewebkit/") && !ih("chrome/") ? Math.round : B.Z;

            function id(t) {
                t.min = ic(t.min), t.max = ic(t.max)
            }

            function ip(t, e, r) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nQ(e) - nQ(r)))
            }

            function ig(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let im = n1({
                    attachResizeListener: (t, e) => rR(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                iy = {
                    current: void 0
                },
                iv = n1({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!iy.current) {
                            let t = new im({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iy.current = t
                        }
                        return iy.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function iw(t, e, r) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === r);
                let i = n["onHover" + r];
                i && I.postRender(() => i(e, rT(e)))
            }
            class iA extends rd {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, r = {}) {
                        let [n, i, s] = ry(t, r), a = rv(t => {
                            let {
                                target: r
                            } = t, n = e(t);
                            if (!n || !r) return;
                            let s = rv(t => {
                                n(t), r.removeEventListener("pointerleave", s)
                            });
                            r.addEventListener("pointerleave", s, i)
                        });
                        return n.forEach(t => {
                            t.addEventListener("pointerenter", a, i)
                        }), s
                    }(t, t => (iw(this.node, t, "Start"), t => iw(this.node, t, "End"))))
                }
                unmount() {}
            }
            class ib extends rd {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = eb(rR(this.node.current, "focus", () => this.onFocus()), rR(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function iE(t, e, r) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === r);
                let i = n["onTap" + ("End" === r ? "" : r)];
                i && I.postRender(() => i(e, rT(e)))
            }
            class ix extends rd {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, r = {}) {
                        let [n, i, s] = ry(t, r), a = t => {
                            let n = t.currentTarget;
                            if (!rC(t) || rA.has(n)) return;
                            rA.add(n);
                            let s = e(t),
                                a = (t, e) => {
                                    window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), rC(t) && rA.has(n) && (rA.delete(n), s && s(t, {
                                        success: e
                                    }))
                                },
                                o = t => {
                                    a(t, r.useGlobalTarget || rk(n, t.target))
                                },
                                l = t => {
                                    a(t, !1)
                                };
                            window.addEventListener("pointerup", o, i), window.addEventListener("pointercancel", l, i)
                        };
                        return n.forEach(t => {
                            rP.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0), (r.useGlobalTarget ? window : t).addEventListener("pointerdown", a, i), t.addEventListener("focus", t => rx(t, i), i)
                        }), s
                    }(t, t => (iE(this.node, t, "Start"), (t, {
                        success: e
                    }) => iE(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let iP = new WeakMap,
                ik = new WeakMap,
                iC = t => {
                    let e = iP.get(t.target);
                    e && e(t)
                },
                iT = t => {
                    t.forEach(iC)
                },
                iS = {
                    some: 0,
                    all: 1
                };
            class iR extends rd {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: r,
                        amount: n = "some",
                        once: i
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : iS[n]
                    };
                    return function(t, e, r) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let r = t || document;
                            ik.has(r) || ik.set(r, {});
                            let n = ik.get(r),
                                i = JSON.stringify(e);
                            return n[i] || (n[i] = new IntersectionObserver(iT, {
                                root: t,
                                ...e
                            })), n[i]
                        }(e);
                        return iP.set(t, r), n.observe(t), () => {
                            iP.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, i && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? r : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return r => t[r] !== e[r]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var iB = r(5750);
            let iN = (0, nu.createContext)({});
            var iO = r(1534);
            let iI = (0, nu.createContext)({
                strict: !1
            });

            function iD(t) {
                return i(t.animate) || d.some(e => o(t[e]))
            }

            function iF(t) {
                return !!(iD(t) || t.variants)
            }

            function iM(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let iL = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                iU = {};
            for (let t in iL) iU[t] = {
                isEnabled: e => iL[t].some(t => !!e[t])
            };
            var iV = r(4563);
            let ij = Symbol.for("motionComponentSymbol"),
                iG = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function iH(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (iG.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }

            function iQ(t, {
                style: e,
                vars: r
            }, n, i) {
                for (let s in Object.assign(t.style, e, i && i.getProjectionStyles(n)), r) t.style.setProperty(s, r[s])
            }
            let iz = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function iJ(t, e, r, n) {
                for (let r in iQ(t, e, void 0, n), e.attrs) t.setAttribute(iz.has(r) ? r : rt(r), e.attrs[r])
            }

            function iK(t, {
                layout: e,
                layoutId: r
            }) {
                return p.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!nm[t] || "opacity" === t)
            }

            function i_(t, e, r) {
                var n;
                let {
                    style: i
                } = t, s = {};
                for (let a in i)(rr(i[a]) || e.style && rr(e.style[a]) || iK(a, t) || (null === (n = null == r ? void 0 : r.getValue(a)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[a] = i[a]);
                return s
            }

            function iq(t, e, r) {
                let n = i_(t, e, r);
                for (let r in t)(rr(t[r]) || rr(e[r])) && (n[-1 !== f.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return n
            }
            var iW = r(3576);
            let iZ = t => (e, r) => {
                    let n = (0, nu.useContext)(iN),
                        s = (0, nu.useContext)(nh.O),
                        a = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: r
                        }, n, s, a) {
                            let o = {
                                latestValues: function(t, e, r, n) {
                                    let s = {},
                                        a = n(t, {});
                                    for (let t in a) s[t] = nq(a[t]);
                                    let {
                                        initial: o,
                                        animate: l
                                    } = t, h = iD(t), c = iF(t);
                                    e && c && !h && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === l && (l = e.animate));
                                    let d = !!r && !1 === r.initial,
                                        f = (d = d || !1 === o) ? l : o;
                                    if (f && "boolean" != typeof f && !i(f)) {
                                        let e = Array.isArray(f) ? f : [f];
                                        for (let r = 0; r < e.length; r++) {
                                            let n = u(t, e[r]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...r
                                                } = n;
                                                for (let t in r) {
                                                    let e = r[t];
                                                    if (Array.isArray(e)) {
                                                        let t = d ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (s[t] = e)
                                                }
                                                for (let e in t) s[e] = t[e]
                                            }
                                        }
                                    }
                                    return s
                                }(n, s, a, t),
                                renderState: e()
                            };
                            return r && (o.mount = t => r(n, t, o)), o
                        })(t, e, n, s);
                    return r ? a() : (0, iW.h)(a)
                },
                iY = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                iX = () => ({ ...iY(),
                    attrs: {}
                }),
                i$ = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                i0 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                i1 = f.length;

            function i2(t, e, r) {
                let {
                    style: n,
                    vars: i,
                    transformOrigin: s
                } = t, a = !1, o = !1;
                for (let t in e) {
                    let r = e[t];
                    if (p.has(t)) {
                        a = !0;
                        continue
                    }
                    if (X(t)) {
                        i[t] = r;
                        continue
                    } {
                        let e = i$(r, t1[t]);
                        t.startsWith("origin") ? (o = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (a || r ? n.transform = function(t, e, r) {
                        let n = "",
                            i = !0;
                        for (let s = 0; s < i1; s++) {
                            let a = f[s],
                                o = t[a];
                            if (void 0 === o) continue;
                            let l = !0;
                            if (!(l = "number" == typeof o ? o === (a.startsWith("scale") ? 1 : 0) : 0 === parseFloat(o)) || r) {
                                let t = i$(o, t1[a]);
                                if (!l) {
                                    i = !1;
                                    let e = i0[a] || a;
                                    n += `${e}(${t}) `
                                }
                                r && (e[a] = t)
                            }
                        }
                        return n = n.trim(), r ? n = r(e, i ? "" : n) : i && (n = "none"), n
                    }(e, t.transform, r) : n.transform && (n.transform = "none")), o) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = s;
                    n.transformOrigin = `${t} ${e} ${r}`
                }
            }

            function i3(t, e, r) {
                return "string" == typeof t ? t : th.transform(e + r * t)
            }
            let i4 = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                i8 = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function i5(t, {
                attrX: e,
                attrY: r,
                attrScale: n,
                originX: i,
                originY: s,
                pathLength: a,
                pathSpacing: o = 1,
                pathOffset: l = 0,
                ...u
            }, h, c) {
                if (i2(t, u, c), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: f,
                    dimensions: p
                } = t;
                d.transform && (p && (f.transform = d.transform), delete d.transform), p && (void 0 !== i || void 0 !== s || f.transform) && (f.transformOrigin = function(t, e, r) {
                    let n = i3(e, t.x, t.width),
                        i = i3(r, t.y, t.height);
                    return `${n} ${i}`
                }(p, void 0 !== i ? i : .5, void 0 !== s ? s : .5)), void 0 !== e && (d.x = e), void 0 !== r && (d.y = r), void 0 !== n && (d.scale = n), void 0 !== a && function(t, e, r = 1, n = 0, i = !0) {
                    t.pathLength = 1;
                    let s = i ? i4 : i8;
                    t[s.offset] = th.transform(-n);
                    let a = th.transform(e),
                        o = th.transform(r);
                    t[s.array] = `${a} ${o}`
                }(d, a, o, l, !1)
            }
            let i6 = t => "string" == typeof t && "svg" === t.toLowerCase(),
                i9 = {
                    useVisualState: iZ({
                        scrapeMotionValuesFromProps: iq,
                        createRenderState: iX,
                        onMount: (t, e, {
                            renderState: r,
                            latestValues: n
                        }) => {
                            I.read(() => {
                                try {
                                    r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    r.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), I.render(() => {
                                i5(r, n, i6(e.tagName), t.transformTemplate), iJ(e, r)
                            })
                        }
                    })
                },
                i7 = {
                    useVisualState: iZ({
                        scrapeMotionValuesFromProps: i_,
                        createRenderState: iY
                    })
                };

            function st(t, e, r) {
                for (let n in e) rr(e[n]) || iK(n, r) || (t[n] = e[n])
            }
            let se = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function sr(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || se.has(t)
            }
            let sn = t => !sr(t);
            try {
                (T = require("@emotion/is-prop-valid").default) && (sn = t => t.startsWith("on") ? !sr(t) : T(t))
            } catch (t) {}
            let si = {
                    current: null
                },
                ss = {
                    current: !1
                },
                sa = new WeakMap,
                so = [...tE, tj, tW],
                sl = t => so.find(tb(t)),
                su = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class sh {
                scrapeMotionValuesFromProps(t, e, r) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: n,
                    blockInitialAnimation: i,
                    visualState: s
                }, a = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tR, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = t7.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, I.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: o,
                        renderState: l
                    } = s;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = iD(e), this.isVariantNode = iF(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== o[t] && rr(e) && e.set(o[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, sa.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), ss.current || function() {
                        if (ss.current = !0, iV.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => si.current = t.matches;
                                t.addListener(e), e()
                            } else si.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || si.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in sa.delete(this.current), this.projection && this.projection.unmount(), D(this.notifyUpdate), D(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let r;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = p.has(t),
                        i = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && I.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        i(), s(), r && r(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in iU) {
                        let e = iU[t];
                        if (!e) continue;
                        let {
                            isEnabled: r,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && r(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rY()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < su.length; e++) {
                        let r = su[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        for (let n in e) {
                            let i = e[n],
                                s = r[n];
                            if (rr(i)) t.addValue(n, i);
                            else if (rr(s)) t.addValue(n, e7(i, {
                                owner: t
                            }));
                            else if (s !== i) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, e7(void 0 !== e ? e : i, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let r = this.values.get(t);
                    e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = e7(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t, e) {
                    var r;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (r = this.getBaseTargetFromProps(this.props, t)) && void 0 !== r ? r : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (Z(n) || q(n)) ? n = parseFloat(n) : !sl(n) && tW.test(e) && (n = t4(t, e)), this.setBaseTarget(t, rr(n) ? n.get() : n)), rr(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let r;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let i = u(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        i && (r = i[t])
                    }
                    if (n && void 0 !== r) return r;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || rr(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new e8), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class sc extends sh {
                constructor() {
                    super(...arguments), this.KeyframeResolver = t5
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    rr(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class sd extends sc {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = iQ
                }
                readValueFromInstance(t, e) {
                    if (p.has(e)) {
                        let t = t3(e);
                        return t && t.default || 0
                    } {
                        let r = window.getComputedStyle(t),
                            n = (X(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return nt(t, e)
                }
                build(t, e, r) {
                    i2(t, e, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return i_(t, e, r)
                }
            }
            class sf extends sc {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = rY
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (p.has(e)) {
                        let t = t3(e);
                        return t && t.default || 0
                    }
                    return e = iz.has(e) ? e : rt(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return iq(t, e, r)
                }
                build(t, e, r) {
                    i5(t, e, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(t, e, r, n) {
                    iJ(t, e, r, n)
                }
                mount(t) {
                    this.isSVGTag = i6(t.tagName), super.mount(t)
                }
            }
            let sp = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (r, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((S = {
                animation: {
                    Feature: rf
                },
                exit: {
                    Feature: rg
                },
                inView: {
                    Feature: iR
                },
                tap: {
                    Feature: ix
                },
                focus: {
                    Feature: ib
                },
                hover: {
                    Feature: iA
                },
                pan: {
                    Feature: no
                },
                drag: {
                    Feature: ns,
                    ProjectionNode: iv,
                    MeasureLayout: nA
                },
                layout: {
                    ProjectionNode: iv,
                    MeasureLayout: nA
                }
            }, R = (t, e) => iH(t) ? new sf(e) : new sd(e, {
                allowProjection: t !== nu.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    let {
                        preloadedFeatures: e,
                        createVisualElement: r,
                        useRender: n,
                        useVisualState: i,
                        Component: s
                    } = t;
                    e && function(t) {
                        for (let e in t) iU[e] = { ...iU[e],
                            ...t[e]
                        }
                    }(e);
                    let a = (0, nu.forwardRef)(function(t, e) {
                        var a;
                        let l;
                        let u = { ...(0, nu.useContext)(iB._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, r = (0, nu.useContext)(nc.p).id;
                                    return r && void 0 !== e ? r + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = u,
                            c = function(t) {
                                let {
                                    initial: e,
                                    animate: r
                                } = function(t, e) {
                                    if (iD(t)) {
                                        let {
                                            initial: e,
                                            animate: r
                                        } = t;
                                        return {
                                            initial: !1 === e || o(e) ? e : void 0,
                                            animate: o(r) ? r : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, nu.useContext)(iN));
                                return (0, nu.useMemo)(() => ({
                                    initial: e,
                                    animate: r
                                }), [iM(e), iM(r)])
                            }(t),
                            d = i(t, h);
                        if (!h && iV.j) {
                            (0, nu.useContext)(iI).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: r
                                } = iU;
                                if (!e && !r) return {};
                                let n = { ...e,
                                    ...r
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == r ? void 0 : r.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(u);
                            l = t.MeasureLayout, c.visualElement = function(t, e, r, n, i) {
                                var s, a;
                                let {
                                    visualElement: o
                                } = (0, nu.useContext)(iN), l = (0, nu.useContext)(iI), u = (0, nu.useContext)(nh.O), h = (0, nu.useContext)(iB._).reducedMotion, c = (0, nu.useRef)(null);
                                n = n || l.renderer, !c.current && n && (c.current = n(t, {
                                    visualState: e,
                                    parent: o,
                                    props: r,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let d = c.current,
                                    f = (0, nu.useContext)(nd);
                                d && !d.projection && i && ("html" === d.type || "svg" === d.type) && function(t, e, r, n) {
                                    let {
                                        layoutId: i,
                                        layout: s,
                                        drag: a,
                                        dragConstraints: o,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: i,
                                        layout: s,
                                        alwaysMeasureLayout: !!a || o && rL(o),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(c.current, r, i, f);
                                let p = (0, nu.useRef)(!1);
                                (0, nu.useInsertionEffect)(() => {
                                    d && p.current && d.update(r, u)
                                });
                                let g = r[re],
                                    m = (0, nu.useRef)(!!g && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, g)) && (null === (a = window.MotionHasOptimisedAnimation) || void 0 === a ? void 0 : a.call(window, g)));
                                return (0, iO.L)(() => {
                                    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), ny.render(d.render), m.current && d.animationState && d.animationState.animateChanges())
                                }), (0, nu.useEffect)(() => {
                                    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, g)
                                    }), m.current = !1))
                                }), d
                            }(s, d, u, r, t.ProjectionNode)
                        }
                        return (0, nl.jsxs)(iN.Provider, {
                            value: c,
                            children: [l && c.visualElement ? (0, nl.jsx)(l, {
                                visualElement: c.visualElement,
                                ...u
                            }) : null, n(s, t, (a = c.visualElement, (0, nu.useCallback)(t => {
                                t && d.mount && d.mount(t), a && (t ? a.mount(t) : a.unmount()), e && ("function" == typeof e ? e(t) : rL(e) && (e.current = t))
                            }, [a])), d, h, c.visualElement)]
                        })
                    });
                    return a[ij] = s, a
                }({ ...iH(t) ? i9 : i7,
                    preloadedFeatures: S,
                    useRender: function(t = !1) {
                        return (e, r, n, {
                            latestValues: i
                        }, s) => {
                            let a = (iH(e) ? function(t, e, r, n) {
                                    let i = (0, nu.useMemo)(() => {
                                        let r = iX();
                                        return i5(r, e, i6(n), t.transformTemplate), { ...r.attrs,
                                            style: { ...r.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        st(e, t.style, t), i.style = { ...e,
                                            ...i.style
                                        }
                                    }
                                    return i
                                } : function(t, e) {
                                    let r = {},
                                        n = function(t, e) {
                                            let r = t.style || {},
                                                n = {};
                                            return st(n, r, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, nu.useMemo)(() => {
                                                    let r = iY();
                                                    return i2(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
                                })(r, i, s, e),
                                o = function(t, e, r) {
                                    let n = {};
                                    for (let i in t)("values" !== i || "object" != typeof t.values) && (sn(i) || !0 === r && sr(i) || !e && !sr(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                                    return n
                                }(r, "string" == typeof e, t),
                                l = e !== nu.Fragment ? { ...o,
                                    ...a,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = r,
                                h = (0, nu.useMemo)(() => rr(u) ? u.get() : u, [u]);
                            return (0, nu.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: R,
                    Component: t
                })
            }))
        },
        4563: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof window
        },
        3576: function(t, e, r) {
            r.d(e, {
                h: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        1534: function(t, e, r) {
            r.d(e, {
                L: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = r(4563).j ? n.useLayoutEffect : n.useEffect
        },
        2035: function(t, e, r) {
            r.d(e, {
                K: function() {
                    return i
                },
                k: function() {
                    return s
                }
            });
            var n = r(6277);
            let i = n.Z,
                s = n.Z
        },
        6277: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        }
    }
]);