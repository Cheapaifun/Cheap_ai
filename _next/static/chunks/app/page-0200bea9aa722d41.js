(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        7521: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 4196)), Promise.resolve().then(a.bind(a, 16)), Promise.resolve().then(a.bind(a, 6103)), Promise.resolve().then(a.bind(a, 2548))
        },
        4196: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return c
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(8919),
                i = a(2351),
                l = a(8335),
                o = a(4743);

            function c() {
                let [e, t] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    t(!0)
                }, []), (0, s.jsxs)("header", {
                    className: "relative w-full bg-white overflow-hidden transition-opacity duration-500 ".concat(e ? "opacity-100" : "opacity-0"),
                    children: [(0, s.jsx)("div", {
                        className: "absolute left-0 top-0 h-full w-1/4 opacity-0 transform -translate-x-12 transition-all duration-500",
                        style: {
                            transitionDelay: "200ms"
                        },
                        children: (0, s.jsxs)("svg", {
                            width: "100%",
                            height: "100%",
                            className: "text-red-500/20",
                            children: [(0, s.jsx)("pattern", {
                                id: "circuit-lines",
                                x: "0",
                                y: "0",
                                width: "20",
                                height: "20",
                                patternUnits: "userSpaceOnUse",
                                children: (0, s.jsx)("path", {
                                    d: "M0 10h20M10 0v20",
                                    stroke: "currentColor",
                                    strokeWidth: "0.5"
                                })
                            }), (0, s.jsx)("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#circuit-lines)"
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "absolute right-0 top-0 h-full w-1/4 opacity-0 transform scale-110 rotate-45 transition-all duration-500",
                        style: {
                            transitionDelay: "400ms"
                        },
                        children: (0, s.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            className: "w-full h-full text-gray-300",
                            children: (0, s.jsx)("path", {
                                fill: "currentColor",
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: "container mx-auto px-4 py-8 relative z-10",
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-end gap-4 mb-6",
                            children: [(0, s.jsx)("a", {
                                href: "https://cheapai.gitbook.io/cheapai.fun/",
                                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600",
                                children: (0, s.jsx)(n.Z, {
                                    className: "w-5 h-5"
                                })
                            }), (0, s.jsx)("a", {
                                href: "https://twitter.com/cheapaifun",
                                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600",
                                children: (0, s.jsx)(i.Z, {
                                    className: "w-5 h-5"
                                })
                            }), (0, s.jsx)("a", {
                                href: "https://cheapai.fun",
                                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600",
                                children: (0, s.jsx)(l.Z, {
                                    className: "w-5 h-5"
                                })
                            }), (0, s.jsx)("a", {
                                href: "mailto:contact@cheapai.fun",
                                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600",
                                children: (0, s.jsx)(o.Z, {
                                    className: "w-5 h-5"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "text-center space-y-4 transition-all duration-500 ".concat(e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"),
                            style: {
                                transitionDelay: "600ms"
                            },
                            children: [(0, s.jsxs)("h1", {
                                className: "text-6xl font-bold tracking-tight text-gray-900",
                                children: ["CHEAP ", (0, s.jsx)("span", {
                                    className: "text-red-500",
                                    children: "AI"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-16 h-0.5 bg-gray-200 mx-auto"
                            }), (0, s.jsx)("p", {
                                className: "text-gray-600 max-w-2xl mx-auto",
                                children: "CheapAI: Zero fees on deployment, Create AI agents with automation using LiamaX—next-gen intelligence made simple"
                            })]
                        })]
                    })]
                })
            }
        },
        16: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(3145),
                i = a(2548);

            function l() {
                let [e, t] = (0, r.useState)(!1), {
                    account: a,
                    connectWallet: l,
                    disconnectWallet: o
                } = (0, i.O)();
                return (0, r.useEffect)(() => {
                    t(!0)
                }, []), (0, s.jsxs)("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [(0, s.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-6 transition-all duration-500 ".concat(e ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"),
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
                                children: [a ? (0, s.jsxs)("button", {
                                    onClick: o,
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
                                    onClick: l,
                                    className: "px-6 py-3 bg-red-500 text-white rounded-lg font-bold relative group overflow-hidden",
                                    children: [(0, s.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Connect Wallet"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                                    })]
                                }), (0, s.jsxs)("button", {
                                    className: "px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 rounded-lg font-bold relative group overflow-hidden",
                                    children: [(0, s.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Deploy Now"
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    })]
                                })]
                            }), a && (0, s.jsxs)("p", {
                                className: "text-sm text-gray-500",
                                children: ["Connected: ", a.slice(0, 6), "...", a.slice(-4)]
                            }), !a && (0, s.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: "NOTE - This Function Will Be Available After Connecting Your Wallet"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "relative h-[400px] transition-all duration-500 ".concat(e ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"),
                            style: {
                                transitionDelay: "200ms"
                            },
                            children: (0, s.jsx)(n.default, {
                                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wrroiGcKUPmDcsKmCs0Vbiff4wHW2H.png",
                                alt: "AI Assistant Illustration",
                                layout: "fill",
                                objectFit: "contain"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "fixed bottom-0 left-0 right-0 bg-gray-100 p-4 flex justify-between items-center transition-transform duration-500 ".concat(e ? "translate-y-0" : "translate-y-full"),
                        style: {
                            transitionDelay: "400ms"
                        },
                        children: [(0, s.jsx)("p", {
                            className: "text-gray-700",
                            children: "Improve performance by enabling hardware acceleration"
                        }), (0, s.jsx)("button", {
                            className: "text-red-500 hover:text-red-600",
                            children: "Learn more"
                        })]
                    })]
                })
            }
        },
        6103: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(3247),
                i = a(3145);
            let l = [{
                name: "Bitcoin",
                symbol: "BTC",
                mcap: "$800B",
                price: "$40,000",
                contract: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
            }, {
                name: "Ethereum",
                symbol: "ETH",
                mcap: "$300B",
                price: "$2,500",
                contract: "ETH"
            }, {
                name: "Cardano",
                symbol: "ADA",
                mcap: "$40B",
                price: "$1.20",
                contract: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"
            }, {
                name: "Polkadot",
                symbol: "DOT",
                mcap: "$20B",
                price: "$20",
                contract: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402"
            }, {
                name: "Solana",
                symbol: "SOL",
                mcap: "$15B",
                price: "$50",
                contract: "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF"
            }, {
                name: "Chainlink",
                symbol: "LINK",
                mcap: "$10B",
                price: "$25",
                contract: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
            }, {
                name: "Uniswap",
                symbol: "UNI",
                mcap: "$5B",
                price: "$10",
                contract: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
            }, {
                name: "Aave",
                symbol: "AAVE",
                mcap: "$3B",
                price: "$200",
                contract: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
            }, {
                name: "Compound",
                symbol: "COMP",
                mcap: "$2B",
                price: "$300",
                contract: "0xc00e94Cb662C3520282E6f5717214004A7f26888"
            }];

            function o() {
                let [e, t] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    t(!0)
                }, []), (0, s.jsxs)("div", {
                    className: "container mx-auto px-4 py-8 transition-all duration-500 ".concat(e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"),
                    children: [(0, s.jsxs)("div", {
                        className: "relative mb-8",
                        children: [(0, s.jsx)("input", {
                            type: "text",
                            placeholder: "Search Token......",
                            className: "w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                        }), (0, s.jsx)(n.Z, {
                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        })]
                    }), (0, s.jsx)("h2", {
                        className: "text-xl font-bold mb-4 text-gray-900",
                        children: "Trending Tokens To Buy"
                    }), (0, s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: l.map((t, a) => (0, s.jsxs)("div", {
                            className: "bg-white rounded-lg p-4 flex items-center space-x-4 shadow-md transition-all duration-500 ".concat(e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"),
                            style: {
                                transitionDelay: "".concat(100 * a, "ms")
                            },
                            children: [(0, s.jsx)(i.default, {
                                src: "/placeholder.svg?height=50&width=50",
                                alt: "".concat(t.name, " logo"),
                                width: 50,
                                height: 50,
                                className: "rounded-full"
                            }), (0, s.jsxs)("div", {
                                className: "flex-grow",
                                children: [(0, s.jsxs)("h3", {
                                    className: "font-bold text-lg text-gray-900",
                                    children: [t.name, " (", t.symbol, ")"]
                                }), (0, s.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["MCAP: ", t.mcap]
                                }), (0, s.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: ["Price: ", t.price]
                                })]
                            }), (0, s.jsx)("a", {
                                href: "https://app.uniswap.org/#/swap?outputCurrency=".concat(t.contract),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "px-4 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors",
                                children: "BUY"
                            })]
                        }, t.symbol))
                    })]
                })
            }
        },
        2548: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return o
                },
                WalletProvider: function() {
                    return l
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(4229);
            let i = (0, r.createContext)(void 0),
                l = e => {
                    let {
                        children: t
                    } = e, [a, l] = (0, r.useState)(null), o = async () => {
                        if (void 0 !== window.ethereum) try {
                            await window.ethereum.request({
                                method: "eth_requestAccounts"
                            });
                            let e = new n.providers.Web3Provider(window.ethereum).getSigner(),
                                t = await e.getAddress();
                            l(t)
                        } catch (e) {
                            console.error("Failed to connect wallet:", e)
                        } else alert("Please install MetaMask!")
                    };
                    return (0, r.useEffect)(() => {
                        (async () => {
                            if (void 0 !== window.ethereum) {
                                let e = new n.providers.Web3Provider(window.ethereum),
                                    t = await e.listAccounts();
                                t.length > 0 && l(t[0])
                            }
                        })()
                    }, []), (0, s.jsx)(i.Provider, {
                        value: {
                            account: a,
                            connectWallet: o,
                            disconnectWallet: () => {
                                l(null)
                            }
                        },
                        children: t
                    })
                },
                o = () => {
                    let e = (0, r.useContext)(i);
                    if (void 0 === e) throw Error("useWallet must be used within a WalletProvider");
                    return e
                }
        }
    },
    function(e) {
        e.O(0, [808, 971, 117, 744], function() {
            return e(e.s = 7521)
        }), _N_E = e.O()
    }
]);