(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1538: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 8027))
        },
        8027: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var s = a(7437),
                i = a(2265),
                r = a(8919),
                l = a(2351),
                o = a(8335),
                n = a(4743),
                c = a(3145);

            function d() {
                let [e, t] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    t(!0)
                }, []), (0, s.jsxs)("header", {
                    className: "relative w-full bg-black text-white overflow-hidden transition-opacity duration-500 ".concat(e ? "opacity-100" : "opacity-0"),
                    children: [(0, s.jsx)("div", {
                        className: "absolute left-0 top-0 h-full w-1/3",
                        children: (0, s.jsx)("div", {
                            className: "circuit-lines",
                            children: [...Array(15)].map((e, t) => (0, s.jsx)("div", {
                                className: "h-px bg-gradient-to-r from-red-500/50 to-transparent",
                                style: {
                                    transform: "translateY(".concat(25 * t, "px)"),
                                    width: "".concat(40 * Math.random() + 60, "%")
                                }
                            }, t))
                        })
                    }), (0, s.jsx)("div", {
                        className: "absolute right-0 top-0 h-full w-1/3 overflow-hidden",
                        children: (0, s.jsx)("div", {
                            className: "absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-gray-800/50 to-transparent transform rotate-12"
                        })
                    }), (0, s.jsxs)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between items-center py-4",
                            children: [(0, s.jsx)("div", {
                                className: "relative w-12 h-12 transition-transform hover:scale-110 duration-300 mt-2 ml-4",
                                children: (0, s.jsx)(c.default, {
                                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-12-26_12-03-12-removebg-preview-GpdVct9TLjPWJDUWawz8SVDps7Zlie.png",
                                    alt: "CheapAI Logo",
                                    layout: "fill",
                                    objectFit: "contain",
                                    className: "drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex gap-4",
                                children: [(0, s.jsx)("a", {
                                    href: "https://cheapai.gitbook.io/cheapai.fun/",
                                    className: "p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-white",
                                    children: (0, s.jsx)(r.Z, {
                                        className: "w-5 h-5"
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://twitter.com/cheapaifun",
                                    className: "p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-white",
                                    children: (0, s.jsx)(l.Z, {
                                        className: "w-5 h-5"
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "https://cheapai.fun",
                                    className: "p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-white",
                                    children: (0, s.jsx)(o.Z, {
                                        className: "w-5 h-5"
                                    })
                                }), (0, s.jsx)("a", {
                                    href: "mailto:contact@cheapai.fun",
                                    className: "p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-white",
                                    children: (0, s.jsx)(n.Z, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "py-16 text-center relative",
                            children: [(0, s.jsxs)("h1", {
                                className: "text-7xl font-bold tracking-tight mb-2",
                                children: [(0, s.jsx)("span", {
                                    className: "text-white",
                                    children: "CHEAP"
                                }), " ", (0, s.jsx)("span", {
                                    className: "text-red-500",
                                    children: "AI"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-32 h-0.5 bg-red-500/30 mx-auto mb-6"
                            }), (0, s.jsx)("p", {
                                className: "text-gray-300 max-w-2xl mx-auto text-lg",
                                children: "CheapAI: Zero fees on deployment, Create AI agents with automation using LiamaX—next-gen intelligence made simple"
                            })]
                        })]
                    })]
                })
            }
            var m = a(6702);
            let u = (0, i.createContext)(void 0),
                p = e => {
                    let {
                        children: t
                    } = e, [a, r] = (0, i.useState)(null), [l, o] = (0, i.useState)(!1), [n, c] = (0, i.useState)(null), d = async () => {
                        if (o(!0), c(null), void 0 !== window.ethereum) try {
                            await window.ethereum.request({
                                method: "eth_requestAccounts"
                            });
                            let e = new m.Q(window.ethereum),
                                t = await e.getSigner(),
                                a = await t.getAddress();
                            r(a)
                        } catch (e) {
                            console.error("Failed to connect wallet:", e), c("Failed to connect wallet. Please try again.")
                        } else c("Please install MetaMask or another Web3 wallet.");
                        o(!1)
                    };
                    return (0, i.useEffect)(() => ((async () => {
                        if (void 0 !== window.ethereum) {
                            let e = new m.Q(window.ethereum),
                                t = await e.listAccounts();
                            t.length > 0 && r(t[0])
                        }
                    })(), void 0 !== window.ethereum && window.ethereum.on("accountsChanged", e => {
                        e.length > 0 ? r(e[0]) : r(null)
                    }), () => {
                        void 0 !== window.ethereum && window.ethereum.removeAllListeners("accountsChanged")
                    }), []), (0, s.jsx)(u.Provider, {
                        value: {
                            account: a,
                            connectWallet: d,
                            disconnectWallet: () => {
                                r(null), c(null)
                            },
                            isConnecting: l,
                            error: n
                        },
                        children: t
                    })
                },
                h = () => {
                    let e = (0, i.useContext)(u);
                    if (void 0 === e) throw Error("useWallet must be used within a WalletProvider");
                    return e
                };
            var x = a(8614),
                g = a(7500);

            function b(e) {
                let {
                    isOpen: t,
                    onClose: a,
                    onDeploy: r
                } = e, [l, o] = (0, i.useState)(""), [n, d] = (0, i.useState)(""), [m, u] = (0, i.useState)("");
                return (0, s.jsx)(x.M, {
                    children: t && (0, s.jsx)(g.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                        onClick: a,
                        children: (0, s.jsxs)(g.E.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            className: "bg-white p-6 rounded-lg shadow-xl max-w-md w-full",
                            onClick: e => e.stopPropagation(),
                            children: [(0, s.jsx)("h2", {
                                className: "text-2xl font-bold mb-4 text-black",
                                children: "Deploy Your AI Token"
                            }), (0, s.jsx)("input", {
                                type: "text",
                                placeholder: "AI Token Name",
                                value: l,
                                onChange: e => o(e.target.value),
                                className: "w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            }), (0, s.jsx)("input", {
                                type: "text",
                                placeholder: "Logo URL",
                                value: n,
                                onChange: e => {
                                    let t = e.target.value;
                                    d(t), u(t)
                                },
                                className: "w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            }), m && (0, s.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, s.jsx)("p", {
                                    className: "text-sm text-gray-600 mb-2",
                                    children: "Logo Preview:"
                                }), (0, s.jsx)("div", {
                                    className: "relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500",
                                    children: (0, s.jsx)(c.default, {
                                        src: m,
                                        alt: "Logo preview",
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex justify-end",
                                children: [(0, s.jsx)("button", {
                                    onClick: a,
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                                    children: "Cancel"
                                }), (0, s.jsx)("button", {
                                    onClick: () => {
                                        l && n && (r(l, n), a(), o(""), d(""), u(""))
                                    },
                                    className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ml-2",
                                    children: "Deploy"
                                })]
                            })]
                        })
                    })
                })
            }

            function y(e) {
                let {
                    onDeploy: t
                } = e, [a, r] = (0, i.useState)(!1), {
                    account: l,
                    connectWallet: o,
                    disconnectWallet: n,
                    isConnecting: d,
                    error: m
                } = h(), [u, p] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    r(!0)
                }, []), (0, s.jsxs)("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [(0, s.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-6 transition-all duration-500 ".concat(a ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"),
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsxs)("h2", {
                                    className: "text-5xl font-bold text-gray-900",
                                    children: [(0, s.jsx)("span", {
                                        className: "text-red-500",
                                        children: "DEPLOY"
                                    }), " YOUR"]
                                }), (0, s.jsx)("h2", {
                                    className: "text-5xl font-bold text-gray-900",
                                    children: "AI AGENTS WITH"
                                }), (0, s.jsx)("h2", {
                                    className: "text-5xl font-bold text-gray-900",
                                    children: "ZERO FEES"
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-xl text-gray-600",
                                children: "POWERED By LiamaX"
                            }), (0, s.jsxs)("div", {
                                className: "flex gap-4",
                                children: [l ? (0, s.jsxs)("button", {
                                    onClick: n,
                                    className: "px-6 py-3 bg-red-500 text-white rounded-lg font-bold relative group overflow-hidden",
                                    children: [(0, s.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Disconnect Wallet"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                                    })]
                                }) : (0, s.jsxs)("button", {
                                    onClick: o,
                                    disabled: d,
                                    className: "px-6 py-3 bg-red-500 text-white rounded-lg font-bold relative group overflow-hidden disabled:opacity-50",
                                    children: [(0, s.jsx)("span", {
                                        className: "relative z-10",
                                        children: d ? "Connecting..." : "Connect Wallet"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                                    })]
                                }), (0, s.jsxs)("button", {
                                    onClick: () => {
                                        l ? p(!0) : o()
                                    },
                                    disabled: !l,
                                    className: "px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 rounded-lg font-bold relative group overflow-hidden disabled:opacity-50",
                                    children: [(0, s.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Deploy Now"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    })]
                                })]
                            }), l && (0, s.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Connected: ", l.slice(0, 6), "...", l.slice(-4)]
                            }), !l && !m && (0, s.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "NOTE - This Function Will Be Available After Connecting Your Wallet"
                            }), m && (0, s.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: m
                            })]
                        }), (0, s.jsx)("div", {
                            className: "relative h-[400px] transition-all duration-500 ".concat(a ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"),
                            style: {
                                transitionDelay: "200ms"
                            },
                            children: (0, s.jsx)(c.default, {
                                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wrroiGcKUPmDcsKmCs0Vbiff4wHW2H.png",
                                alt: "AI Assistant Illustration",
                                layout: "fill",
                                objectFit: "contain"
                            })
                        })]
                    }), (0, s.jsx)(b, {
                        isOpen: u,
                        onClose: () => p(!1),
                        onDeploy: (e, a) => {
                            t(e, a), p(!1)
                        }
                    })]
                })
            }
            var f = a(3247);

            function v() {
                let [e, t] = (0, i.useState)(""), [a, r] = (0, i.useState)([]), [l, o] = (0, i.useState)(!1), [n, d] = (0, i.useState)(null), m = async () => {
                    if (e) {
                        o(!0), d(null);
                        try {
                            let t = await fetch("https://api.dexscreener.com/latest/dex/search/?q=".concat(e));
                            if (!t.ok) throw Error("Failed to fetch token data");
                            let a = (await t.json()).pairs.slice(0, 5).map(e => ({
                                symbol: e.baseToken.symbol,
                                name: e.baseToken.name,
                                logo: "https://logo.chainbit.xyz/".concat(e.baseToken.address),
                                price: parseFloat(e.priceUsd),
                                volume24h: parseFloat(e.volume.h24)
                            }));
                            r(a)
                        } catch (e) {
                            d("An error occurred while fetching token data. Please try again."), console.error("Error fetching token data:", e)
                        } finally {
                            o(!1)
                        }
                    }
                };
                return (0, s.jsxs)("div", {
                    className: "mb-8",
                    children: [(0, s.jsxs)("div", {
                        className: "relative mb-4",
                        children: [(0, s.jsx)("input", {
                            type: "text",
                            placeholder: "Search Token......",
                            value: e,
                            onChange: e => t(e.target.value),
                            onKeyPress: e => "Enter" === e.key && m(),
                            className: "w-full px-4 py-2 bg-white text-black border-2 border-black rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                        }), (0, s.jsx)(f.Z, {
                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-black cursor-pointer",
                            onClick: m
                        })]
                    }), l && (0, s.jsx)("p", {
                        className: "text-center",
                        children: "Loading..."
                    }), n && (0, s.jsx)("p", {
                        className: "text-center text-red-500",
                        children: n
                    }), a.length > 0 && (0, s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: a.map((e, t) => (0, s.jsxs)("div", {
                            className: "bg-white rounded-lg p-4 flex items-center space-x-4 shadow-md",
                            children: [(0, s.jsx)("div", {
                                className: "relative w-12 h-12 flex-shrink-0",
                                children: (0, s.jsx)(c.default, {
                                    src: e.logo,
                                    alt: "".concat(e.name, " logo"),
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-full",
                                    onError: e => {
                                        e.currentTarget.src = "/placeholder.svg?height=48&width=48"
                                    }
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex-grow",
                                children: [(0, s.jsxs)("h3", {
                                    className: "font-bold text-lg text-gray-900",
                                    children: [e.name, " (", e.symbol, ")"]
                                }), (0, s.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["Price: $", e.price.toFixed(4)]
                                }), (0, s.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["24h Volume: $", e.volume24h.toLocaleString()]
                                })]
                            })]
                        }, t))
                    })]
                })
            }
            let j = [{
                name: "Peanut",
                symbol: "PNUT/SOL",
                mcap: "$647,750,380",
                price: "$0.6529",
                coinGeckoId: "peanut",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pnut-S8qcBfljRivYbgg17cKeeVc2JY7gg2.jpeg",
                buyLink: "https://pump.fun/coin/2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump"
            }, {
                name: "FWOG",
                symbol: "FWOG",
                mcap: "$275,110,440",
                price: "$0.276",
                coinGeckoId: "fwog",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KbBuRMbIb767IR3zVEvh8m74ANxyfJ.png",
                buyLink: "https://pump.fun/coin/A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump"
            }, {
                name: "Act I",
                symbol: "ACT",
                mcap: "$285,471,010",
                price: "$0.2869",
                coinGeckoId: "act-i",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c4i0Z99akbwyC0oorXtp6qo6kc6g3p.png",
                buyLink: "https://pump.fun/coin/GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump"
            }, {
                name: "Unicorn",
                symbol: "UFD",
                mcap: "$134,921,587",
                price: "$0.1335",
                coinGeckoId: "unicorn",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZAXf1FGlY4QuVP7F2R5NohTb8e3fHV.png",
                buyLink: "https://pump.fun/coin/eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump"
            }, {
                name: "Just a chill guy",
                symbol: "CHILLGUY",
                mcap: "$177,707,292",
                price: "$0.1773",
                coinGeckoId: "just-a-chill-guy",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x9acLkvkzVlfblzFWKY3zu2nYClbd7.png",
                buyLink: "https://pump.fun/coin/Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump"
            }, {
                name: "Alchemist AI",
                symbol: "ALCH",
                mcap: "$91,000,420",
                price: "$0.09187",
                coinGeckoId: "alchemist-ai",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XXFedv6Ok4eBNTa09kAEXkerPOJ9Mq.png",
                buyLink: "https://pump.fun/coin/HNg5PYJmtqcmzXrv6S9zP1CDKk5BgDuyFBxbvNApump"
            }, {
                name: "DADDY TATE",
                symbol: "DADDY",
                mcap: "$61,092,342",
                price: "$0.06109",
                coinGeckoId: "daddy-tate",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z8vL5vN8Zmfr3ogtIcBwBBdIbUqwpV.png",
                buyLink: "https://pump.fun/coin/4Cnk9EPnW5ixfLZatCPJjDB1PUtcRpVVgTQukm9epump"
            }, {
                name: "Rifampicin",
                symbol: "RIF",
                mcap: "$61,648,510",
                price: "$0.06141",
                coinGeckoId: "rifampicin",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fm1zw1aSjB77H3IxAZvgz1KQc8dCjW.png",
                buyLink: "https://pump.fun/coin/GJtJuWD9qYcCkrwMBmtY1tpapV1sKfB2zUv9Q4aqpump"
            }, {
                name: "Dasha",
                symbol: "vvaifu",
                mcap: "$53,204,566",
                price: "$0.05303",
                coinGeckoId: "dasha",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0xS4EGmSWvcX81skJ50fwQs3GnfTDm.png",
                buyLink: "https://pump.fun/coin/FQ1tyso61AH1tzodyJfSwmzsD3GToybbRNoZxUBz21p8"
            }];

            function N(e) {
                let {
                    token: t,
                    index: a
                } = e, [r, l] = (0, i.useState)(!1), o = function(e, t, a) {
                    let [s, r] = (0, i.useState)({
                        marketCap: t,
                        price: a
                    });
                    return (0, i.useEffect)(() => {
                        let s = async () => {
                            try {
                                let t = await fetch("https://api.coingecko.com/api/v3/coins/".concat(e));
                                if (!t.ok) throw Error("HTTP error! status: ".concat(t.status));
                                let a = await t.json();
                                r({
                                    marketCap: a.market_data.market_cap.usd.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 0
                                    }),
                                    price: a.market_data.current_price.usd.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 6
                                    })
                                })
                            } catch (s) {
                                console.error("Error fetching data for ".concat(e, ":"), s), r({
                                    marketCap: t,
                                    price: a
                                })
                            }
                        };
                        s();
                        let i = setInterval(s, 6e4);
                        return () => clearInterval(i)
                    }, [e, t, a]), s
                }(t.coinGeckoId, t.mcap, t.price);
                return (0, s.jsxs)(g.E.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .1 * a,
                        duration: .5
                    },
                    className: "relative overflow-hidden rounded-xl border-4 border-black shadow-lg hover:shadow-xl transition-all duration-300",
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    children: [(0, s.jsxs)(g.E.div, {
                        className: "relative z-10 p-6 bg-white",
                        initial: !1,
                        animate: r ? {
                            y: -10
                        } : {
                            y: 0
                        },
                        transition: {
                            duration: .3
                        },
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [(0, s.jsx)(g.E.div, {
                                initial: !1,
                                animate: r ? {
                                    scale: 1.1
                                } : {
                                    scale: 1
                                },
                                transition: {
                                    duration: .3
                                },
                                children: (0, s.jsx)(c.default, {
                                    src: t.image,
                                    alt: "".concat(t.name, " logo"),
                                    width: 60,
                                    height: 60,
                                    className: "rounded-full border-2 border-red-500"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "ml-4",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-xl font-bold text-black",
                                    children: t.name
                                }), (0, s.jsx)("p", {
                                    className: "text-sm text-gray-600",
                                    children: t.symbol
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-2 mb-4",
                            children: [(0, s.jsxs)("p", {
                                className: "text-sm text-gray-700",
                                children: [(0, s.jsx)("span", {
                                    className: "font-semibold text-red-600",
                                    children: "MCAP:"
                                }), " ", o.marketCap]
                            }), (0, s.jsxs)("p", {
                                className: "text-sm text-gray-700",
                                children: [(0, s.jsx)("span", {
                                    className: "font-semibold text-red-600",
                                    children: "Price:"
                                }), " ", o.price]
                            })]
                        }), (0, s.jsx)(g.E.a, {
                            href: t.buyLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full text-center py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-900 transition-colors duration-300",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: "BUY NOW"
                        })]
                    }), (0, s.jsx)(g.E.div, {
                        className: "absolute inset-0 bg-gradient-to-r from-red-600 via-red-800 to-black",
                        initial: !1,
                        animate: r ? {
                            opacity: .1
                        } : {
                            opacity: 0
                        },
                        transition: {
                            duration: .3
                        }
                    })]
                })
            }

            function w() {
                return (0, s.jsxs)(g.E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "container mx-auto px-4 py-8",
                    children: [(0, s.jsx)(v, {}), (0, s.jsx)(g.E.h2, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .2,
                            duration: .5
                        },
                        className: "text-3xl font-bold mb-6 text-black text-center",
                        children: "Trending Tokens To Buy"
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: j.map((e, t) => (0, s.jsx)(N, {
                            token: e,
                            index: t
                        }, e.symbol))
                    })]
                })
            }

            function k(e) {
                let {
                    tokens: t
                } = e;
                return 0 === t.length ? null : (0, s.jsxs)(g.E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "container mx-auto px-4 py-8",
                    children: [(0, s.jsx)(g.E.h2, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .2,
                            duration: .5
                        },
                        className: "text-3xl font-bold mb-6 text-black text-center",
                        children: "Your AI Tokens"
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: t.map((e, t) => (0, s.jsx)(g.E.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: .1 * t,
                                duration: .5
                            },
                            className: "relative overflow-hidden rounded-xl border-4 border-black shadow-lg hover:shadow-xl transition-all duration-300",
                            children: (0, s.jsxs)("div", {
                                className: "relative z-10 p-6 bg-white",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center mb-4",
                                    children: [(0, s.jsx)("div", {
                                        className: "relative w-16 h-16 rounded-full border-2 border-red-500 overflow-hidden",
                                        children: (0, s.jsx)(c.default, {
                                            src: e.logo,
                                            alt: "".concat(e.name, " logo"),
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "ml-4",
                                        children: [(0, s.jsx)("h3", {
                                            className: "text-xl font-bold text-black",
                                            children: e.name
                                        }), (0, s.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "AI Token"
                                        })]
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "text-sm text-gray-700 mb-4",
                                    children: "Your AI token has been successfully deployed!"
                                }), (0, s.jsx)("button", {
                                    className: "w-full text-center py-2 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-900 transition-colors duration-300",
                                    children: "Manage Token"
                                })]
                            })
                        }, t))
                    })]
                })
            }

            function C() {
                let [e, t] = (0, i.useState)([]);
                return (0, s.jsx)(p, {
                    children: (0, s.jsxs)("main", {
                        className: "min-h-screen bg-gray-100 text-gray-900",
                        children: [(0, s.jsx)(d, {}), (0, s.jsx)(y, {
                            onDeploy: (a, s) => {
                                t([...e, {
                                    name: a,
                                    logo: s
                                }])
                            }
                        }), (0, s.jsx)(w, {}), (0, s.jsx)(k, {
                            tokens: e
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [856, 971, 117, 744], function() {
            return e(e.s = 1538)
        }), _N_E = e.O()
    }
]);