(()=>{
        "use strict";
        function A(A) {
            return function() {
                return A
            }
        }
        function t(A) {
            return 1e-6 * (A() - .5)
        }
        function n(A) {
            return A.index
        }
        function i(A, t) {
            var n = A.get(t);
            if (!n)
                throw new Error("node not found: " + t);
            return n
        }
        function r(A, t, n, i) {
            if (isNaN(t) || isNaN(n))
                return A;
            var r, g, e, I, o, a, h, f, C, s = A._root, u = {
                data: i
            }, l = A._x0, Q = A._y0, B = A._x1, y = A._y1;
            if (!s)
                return A._root = u,
                    A;
            for (; s.length; )
                if ((a = t >= (g = (l + B) / 2)) ? l = g : B = g,
                    (h = n >= (e = (Q + y) / 2)) ? Q = e : y = e,
                    r = s,
                    !(s = s[f = h << 1 | a]))
                    return r[f] = u,
                        A;
            if (I = +A._x.call(null, s.data),
                o = +A._y.call(null, s.data),
            t === I && n === o)
                return u.next = s,
                    r ? r[f] = u : A._root = u,
                    A;
            do {
                r = r ? r[f] = new Array(4) : A._root = new Array(4),
                    (a = t >= (g = (l + B) / 2)) ? l = g : B = g,
                    (h = n >= (e = (Q + y) / 2)) ? Q = e : y = e
            } while ((f = h << 1 | a) == (C = (o >= e) << 1 | I >= g));
            return r[C] = s,
                r[f] = u,
                A
        }
        function g(A, t, n, i, r) {
            this.node = A,
                this.x0 = t,
                this.y0 = n,
                this.x1 = i,
                this.y1 = r
        }
        function e(A) {
            return A[0]
        }
        function I(A) {
            return A[1]
        }
        function o(A, t, n) {
            var i = new a(null == t ? e : t,null == n ? I : n,NaN,NaN,NaN,NaN);
            return null == A ? i : i.addAll(A)
        }
        function a(A, t, n, i, r, g) {
            this._x = A,
                this._y = t,
                this._x0 = n,
                this._y0 = i,
                this._x1 = r,
                this._y1 = g,
                this._root = void 0
        }
        function h(A) {
            for (var t = {
                data: A.data
            }, n = t; A = A.next; )
                n = n.next = {
                    data: A.data
                };
            return t
        }
        var f = o.prototype = a.prototype;
        function C(A) {
            return A.x
        }
        function s(A) {
            return A.y
        }
        f.copy = function() {
            var A, t, n = new a(this._x,this._y,this._x0,this._y0,this._x1,this._y1), i = this._root;
            if (!i)
                return n;
            if (!i.length)
                return n._root = h(i),
                    n;
            for (A = [{
                source: i,
                target: n._root = new Array(4)
            }]; i = A.pop(); )
                for (var r = 0; r < 4; ++r)
                    (t = i.source[r]) && (t.length ? A.push({
                        source: t,
                        target: i.target[r] = new Array(4)
                    }) : i.target[r] = h(t));
            return n
        }
            ,
            f.add = function(A) {
                const t = +this._x.call(null, A)
                    , n = +this._y.call(null, A);
                return r(this.cover(t, n), t, n, A)
            }
            ,
            f.addAll = function(A) {
                var t, n, i, g, e = A.length, I = new Array(e), o = new Array(e), a = 1 / 0, h = 1 / 0, f = -1 / 0, C = -1 / 0;
                for (n = 0; n < e; ++n)
                    isNaN(i = +this._x.call(null, t = A[n])) || isNaN(g = +this._y.call(null, t)) || (I[n] = i,
                        o[n] = g,
                    i < a && (a = i),
                    i > f && (f = i),
                    g < h && (h = g),
                    g > C && (C = g));
                if (a > f || h > C)
                    return this;
                for (this.cover(a, h).cover(f, C),
                         n = 0; n < e; ++n)
                    r(this, I[n], o[n], A[n]);
                return this
            }
            ,
            f.cover = function(A, t) {
                if (isNaN(A = +A) || isNaN(t = +t))
                    return this;
                var n = this._x0
                    , i = this._y0
                    , r = this._x1
                    , g = this._y1;
                if (isNaN(n))
                    r = (n = Math.floor(A)) + 1,
                        g = (i = Math.floor(t)) + 1;
                else {
                    for (var e, I, o = r - n || 1, a = this._root; n > A || A >= r || i > t || t >= g; )
                        switch (I = (t < i) << 1 | A < n,
                            (e = new Array(4))[I] = a,
                            a = e,
                            o *= 2,
                            I) {
                            case 0:
                                r = n + o,
                                    g = i + o;
                                break;
                            case 1:
                                n = r - o,
                                    g = i + o;
                                break;
                            case 2:
                                r = n + o,
                                    i = g - o;
                                break;
                            case 3:
                                n = r - o,
                                    i = g - o
                        }
                    this._root && this._root.length && (this._root = a)
                }
                return this._x0 = n,
                    this._y0 = i,
                    this._x1 = r,
                    this._y1 = g,
                    this
            }
            ,
            f.data = function() {
                var A = [];
                return this.visit((function(t) {
                        if (!t.length)
                            do {
                                A.push(t.data)
                            } while (t = t.next)
                    }
                )),
                    A
            }
            ,
            f.extent = function(A) {
                return arguments.length ? this.cover(+A[0][0], +A[0][1]).cover(+A[1][0], +A[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
            }
            ,
            f.find = function(A, t, n) {
                var i, r, e, I, o, a, h, f = this._x0, C = this._y0, s = this._x1, u = this._y1, l = [], Q = this._root;
                for (Q && l.push(new g(Q,f,C,s,u)),
                         null == n ? n = 1 / 0 : (f = A - n,
                             C = t - n,
                             s = A + n,
                             u = t + n,
                             n *= n); a = l.pop(); )
                    if (!(!(Q = a.node) || (r = a.x0) > s || (e = a.y0) > u || (I = a.x1) < f || (o = a.y1) < C))
                        if (Q.length) {
                            var B = (r + I) / 2
                                , y = (e + o) / 2;
                            l.push(new g(Q[3],B,y,I,o), new g(Q[2],r,y,B,o), new g(Q[1],B,e,I,y), new g(Q[0],r,e,B,y)),
                            (h = (t >= y) << 1 | A >= B) && (a = l[l.length - 1],
                                l[l.length - 1] = l[l.length - 1 - h],
                                l[l.length - 1 - h] = a)
                        } else {
                            var c = A - +this._x.call(null, Q.data)
                                , E = t - +this._y.call(null, Q.data)
                                , v = c * c + E * E;
                            if (v < n) {
                                var x = Math.sqrt(n = v);
                                f = A - x,
                                    C = t - x,
                                    s = A + x,
                                    u = t + x,
                                    i = Q.data
                            }
                        }
                return i
            }
            ,
            f.remove = function(A) {
                if (isNaN(g = +this._x.call(null, A)) || isNaN(e = +this._y.call(null, A)))
                    return this;
                var t, n, i, r, g, e, I, o, a, h, f, C, s = this._root, u = this._x0, l = this._y0, Q = this._x1, B = this._y1;
                if (!s)
                    return this;
                if (s.length)
                    for (; ; ) {
                        if ((a = g >= (I = (u + Q) / 2)) ? u = I : Q = I,
                            (h = e >= (o = (l + B) / 2)) ? l = o : B = o,
                            t = s,
                            !(s = s[f = h << 1 | a]))
                            return this;
                        if (!s.length)
                            break;
                        (t[f + 1 & 3] || t[f + 2 & 3] || t[f + 3 & 3]) && (n = t,
                            C = f)
                    }
                for (; s.data !== A; )
                    if (i = s,
                        !(s = s.next))
                        return this;
                return (r = s.next) && delete s.next,
                    i ? (r ? i.next = r : delete i.next,
                        this) : t ? (r ? t[f] = r : delete t[f],
                    (s = t[0] || t[1] || t[2] || t[3]) && s === (t[3] || t[2] || t[1] || t[0]) && !s.length && (n ? n[C] = s : this._root = s),
                        this) : (this._root = r,
                        this)
            }
            ,
            f.removeAll = function(A) {
                for (var t = 0, n = A.length; t < n; ++t)
                    this.remove(A[t]);
                return this
            }
            ,
            f.root = function() {
                return this._root
            }
            ,
            f.size = function() {
                var A = 0;
                return this.visit((function(t) {
                        if (!t.length)
                            do {
                                ++A
                            } while (t = t.next)
                    }
                )),
                    A
            }
            ,
            f.visit = function(A) {
                var t, n, i, r, e, I, o = [], a = this._root;
                for (a && o.push(new g(a,this._x0,this._y0,this._x1,this._y1)); t = o.pop(); )
                    if (!A(a = t.node, i = t.x0, r = t.y0, e = t.x1, I = t.y1) && a.length) {
                        var h = (i + e) / 2
                            , f = (r + I) / 2;
                        (n = a[3]) && o.push(new g(n,h,f,e,I)),
                        (n = a[2]) && o.push(new g(n,i,f,h,I)),
                        (n = a[1]) && o.push(new g(n,h,r,e,f)),
                        (n = a[0]) && o.push(new g(n,i,r,h,f))
                    }
                return this
            }
            ,
            f.visitAfter = function(A) {
                var t, n = [], i = [];
                for (this._root && n.push(new g(this._root,this._x0,this._y0,this._x1,this._y1)); t = n.pop(); ) {
                    var r = t.node;
                    if (r.length) {
                        var e, I = t.x0, o = t.y0, a = t.x1, h = t.y1, f = (I + a) / 2, C = (o + h) / 2;
                        (e = r[0]) && n.push(new g(e,I,o,f,C)),
                        (e = r[1]) && n.push(new g(e,f,o,a,C)),
                        (e = r[2]) && n.push(new g(e,I,C,f,h)),
                        (e = r[3]) && n.push(new g(e,f,C,a,h))
                    }
                    i.push(t)
                }
                for (; t = i.pop(); )
                    A(t.node, t.x0, t.y0, t.x1, t.y1);
                return this
            }
            ,
            f.x = function(A) {
                return arguments.length ? (this._x = A,
                    this) : this._x
            }
            ,
            f.y = function(A) {
                return arguments.length ? (this._y = A,
                    this) : this._y
            }
        ;
        Math.PI,
            Math.sqrt(5);
        function u(A) {
            return A.x + A.vx
        }
        function l(A) {
            return A.y + A.vy
        }
        var Q = 1
            , B = 1 - Math.pow(.001, 1 / 300)
            , y = 0
            , c = .1
            , E = 1
            , v = 250
            , x = -1e3
            , d = !1
            , D = !1
            , w = !1
            , F = {}
            , M = []
            , G = [];
        self.onmessage = function(A) {
            var t = A.data
                , n = t.nodes;
            if (n) {
                for (var i in M = [],
                    F)
                    F.hasOwnProperty(i) && !n.hasOwnProperty(i) ? delete F[i] : M.push(F[i]);
                for (var i in n)
                    if (n.hasOwnProperty(i)) {
                        var r = n[i]
                            , g = F[i];
                        F.hasOwnProperty(i) || (g = F[i] = {
                            id: i,
                            x: 0,
                            y: 0,
                            vx: 0,
                            vy: 0,
                            fx: null,
                            fy: null
                        },
                            M.push(g)),
                        r && (g.x = r[0],
                            g.y = r[1])
                    }
                for (var e = 0; e < M.length; e++) {
                    (g = M[e]).index = e
                }
                d = !0
            }
            var I = t.links;
            if (I) {
                G = [];
                for (e = 0; e < I.length; e++) {
                    var o = I[e]
                        , a = F[o[0]]
                        , h = F[o[1]];
                    a && h && G.push({
                        source: a,
                        target: h
                    })
                }
                D = !0
            }
            var f = t.forceNode;
            f && ((g = F[f.id]) && (g.fx = f.x,
                g.fy = f.y));
            var C = t.forces;
            if (void 0 !== C) {
                var s = C.centerStrength;
                void 0 !== s && (c = s);
                var u = C.linkStrength;
                void 0 !== u && (E = u);
                var l = C.linkDistance;
                void 0 !== l && (v = l);
                var B = C.repelStrength;
                void 0 !== B && (x = -B)
            }
            void 0 !== t.alpha && Q < t.alpha && (Q = t.alpha),
            void 0 !== t.alphaTarget && (y = t.alphaTarget),
            void 0 !== t.run && W()
        }
        ;
        var S, p, U, _, N, q, R, k, b, J, Y, K = function() {
            try {
                if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                    var A = function(A) {
                        for (var t = atob(A), n = new Uint8Array(t.length), i = 0; i < t.length; i++)
                            n[i] = t.charCodeAt(i);
                        return n.buffer
                    }("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")
                        , t = new WebAssembly.Module(A)
                        , n = new WebAssembly.Instance(t,{
                        env: {
                            abort: function() {},
                            clog: console.log,
                            flog: console.log
                        }
                    }).exports
                        , i = n.memory;
                    return function() {
                        var A = 13 * M.length * 4 + 3 * G.length * 4 + 1024;
                        if (i.buffer.byteLength < A) {
                            var t = Math.ceil(A / 65536) - i.buffer.byteLength / 65536;
                            i.grow(t)
                        }
                        var r = new Float32Array(i.buffer)
                            , g = new Int32Array(i.buffer,20 * M.length);
                        if (d || D) {
                            d = D = !1;
                            for (var e = 0; e < M.length; e++) {
                                var I = M[e];
                                r[5 * e] = I.x,
                                    r[5 * e + 1] = I.y,
                                    r[5 * e + 2] = I.vx,
                                    r[5 * e + 3] = I.vy
                            }
                            for (e = 0; e < G.length; e++) {
                                var o = G[e];
                                g[3 * e] = o.source.index,
                                    g[3 * e + 1] = o.target.index
                            }
                            n.init(0, M.length, G.length)
                        }
                        n.simulate(0, M.length, G.length, Q, c, E, v, x, .9, .5),
                            n.complete(0, M.length, .6);
                        for (e = 0; e < M.length; e++) {
                            null != (I = M[e]).fx && (r[5 * e] = I.fx,
                                r[5 * e + 2] = 0),
                            null != I.fy && (r[5 * e + 1] = I.fy,
                                r[5 * e + 3] = 0)
                        }
                        for (e = 0; e < M.length; e++) {
                            (I = M[e]).x = r[5 * e],
                                I.y = r[5 * e + 1],
                                I.vx = r[5 * e + 2],
                                I.vy = r[5 * e + 3]
                        }
                    }
                }
            } catch (A) {}
            return null
        }() || (S = 4294967296,
                p = 1,
                U = function() {
                    return (p = (1664525 * p + 1013904223) % S) / S
                }
                ,
                _ = function(t) {
                    var n, i, r, g = A(.1);
                    function e(A) {
                        for (var t, g = 0, e = n.length; g < e; ++g)
                            (t = n[g]).vx += (r[g] - t.x) * i[g] * A
                    }
                    function I() {
                        if (n) {
                            var A, e = n.length;
                            for (i = new Array(e),
                                     r = new Array(e),
                                     A = 0; A < e; ++A)
                                i[A] = isNaN(r[A] = +t(n[A], A, n)) ? 0 : +g(n[A], A, n)
                        }
                    }
                    return "function" != typeof t && (t = A(null == t ? 0 : +t)),
                        e.initialize = function(A) {
                            n = A,
                                I()
                        }
                        ,
                        e.strength = function(t) {
                            return arguments.length ? (g = "function" == typeof t ? t : A(+t),
                                I(),
                                e) : g
                        }
                        ,
                        e.x = function(n) {
                            return arguments.length ? (t = "function" == typeof n ? n : A(+n),
                                I(),
                                e) : t
                        }
                        ,
                        e
                }().strength(.1),
                N = function(t) {
                    var n, i, r, g = A(.1);
                    function e(A) {
                        for (var t, g = 0, e = n.length; g < e; ++g)
                            (t = n[g]).vy += (r[g] - t.y) * i[g] * A
                    }
                    function I() {
                        if (n) {
                            var A, e = n.length;
                            for (i = new Array(e),
                                     r = new Array(e),
                                     A = 0; A < e; ++A)
                                i[A] = isNaN(r[A] = +t(n[A], A, n)) ? 0 : +g(n[A], A, n)
                        }
                    }
                    return "function" != typeof t && (t = A(null == t ? 0 : +t)),
                        e.initialize = function(A) {
                            n = A,
                                I()
                        }
                        ,
                        e.strength = function(t) {
                            return arguments.length ? (g = "function" == typeof t ? t : A(+t),
                                I(),
                                e) : g
                        }
                        ,
                        e.y = function(n) {
                            return arguments.length ? (t = "function" == typeof n ? n : A(+n),
                                I(),
                                e) : t
                        }
                        ,
                        e
                }().strength(.1),
                q = function(r) {
                    var g, e, I, o, a, h, f = n, C = function(A) {
                        return 1 / Math.min(o[A.source.index], o[A.target.index])
                    }, s = A(30), u = 1;
                    function l(A) {
                        for (var n = 0, i = r.length; n < u; ++n)
                            for (var I, o, f, C, s, l, Q, B = 0; B < i; ++B)
                                o = (I = r[B]).source,
                                    C = (f = I.target).x + f.vx - o.x - o.vx || t(h),
                                    s = f.y + f.vy - o.y - o.vy || t(h),
                                    C *= l = ((l = Math.sqrt(C * C + s * s)) - e[B]) / l * A * g[B],
                                    s *= l,
                                    f.vx -= C * (Q = a[B]),
                                    f.vy -= s * Q,
                                    o.vx += C * (Q = 1 - Q),
                                    o.vy += s * Q
                    }
                    function Q() {
                        if (I) {
                            var A, t, n = I.length, h = r.length, C = new Map(I.map(((A,t)=>[f(A, t, I), A])));
                            for (A = 0,
                                     o = new Array(n); A < h; ++A)
                                (t = r[A]).index = A,
                                "object" != typeof t.source && (t.source = i(C, t.source)),
                                "object" != typeof t.target && (t.target = i(C, t.target)),
                                    o[t.source.index] = (o[t.source.index] || 0) + 1,
                                    o[t.target.index] = (o[t.target.index] || 0) + 1;
                            for (A = 0,
                                     a = new Array(h); A < h; ++A)
                                t = r[A],
                                    a[A] = o[t.source.index] / (o[t.source.index] + o[t.target.index]);
                            g = new Array(h),
                                B(),
                                e = new Array(h),
                                y()
                        }
                    }
                    function B() {
                        if (I)
                            for (var A = 0, t = r.length; A < t; ++A)
                                g[A] = +C(r[A], A, r)
                    }
                    function y() {
                        if (I)
                            for (var A = 0, t = r.length; A < t; ++A)
                                e[A] = +s(r[A], A, r)
                    }
                    return null == r && (r = []),
                        l.initialize = function(A, t) {
                            I = A,
                                h = t,
                                Q()
                        }
                        ,
                        l.links = function(A) {
                            return arguments.length ? (r = A,
                                Q(),
                                l) : r
                        }
                        ,
                        l.id = function(A) {
                            return arguments.length ? (f = A,
                                l) : f
                        }
                        ,
                        l.iterations = function(A) {
                            return arguments.length ? (u = +A,
                                l) : u
                        }
                        ,
                        l.strength = function(t) {
                            return arguments.length ? (C = "function" == typeof t ? t : A(+t),
                                B(),
                                l) : C
                        }
                        ,
                        l.distance = function(t) {
                            return arguments.length ? (s = "function" == typeof t ? t : A(+t),
                                y(),
                                l) : s
                        }
                        ,
                        l
                }().id((function(A) {
                        return A.id
                    }
                )).distance(250),
                R = function() {
                    var n, i, r, g, e, I = A(-30), a = 1, h = 1 / 0, f = .81;
                    function u(A) {
                        var t, r = n.length, e = o(n, C, s).visitAfter(Q);
                        for (g = A,
                                 t = 0; t < r; ++t)
                            i = n[t],
                                e.visit(B)
                    }
                    function l() {
                        if (n) {
                            var A, t, i = n.length;
                            for (e = new Array(i),
                                     A = 0; A < i; ++A)
                                t = n[A],
                                    e[t.index] = +I(t, A, n)
                        }
                    }
                    function Q(A) {
                        var t, n, i, r, g, I = 0, o = 0;
                        if (A.length) {
                            for (i = r = g = 0; g < 4; ++g)
                                (t = A[g]) && (n = Math.abs(t.value)) && (I += t.value,
                                    o += n,
                                    i += n * t.x,
                                    r += n * t.y);
                            A.x = i / o,
                                A.y = r / o
                        } else {
                            (t = A).x = t.data.x,
                                t.y = t.data.y;
                            do {
                                I += e[t.data.index]
                            } while (t = t.next)
                        }
                        A.value = I
                    }
                    function B(A, n, I, o) {
                        if (!A.value)
                            return !0;
                        var C = A.x - i.x
                            , s = A.y - i.y
                            , u = o - n
                            , l = C * C + s * s;
                        if (u * u / f < l)
                            return l < h && (0 === C && (l += (C = t(r)) * C),
                            0 === s && (l += (s = t(r)) * s),
                            l < a && (l = Math.sqrt(a * l)),
                                i.vx += C * A.value * g / l,
                                i.vy += s * A.value * g / l),
                                !0;
                        if (!(A.length || l >= h)) {
                            (A.data !== i || A.next) && (0 === C && (l += (C = t(r)) * C),
                            0 === s && (l += (s = t(r)) * s),
                            l < a && (l = Math.sqrt(a * l)));
                            do {
                                A.data !== i && (u = e[A.data.index] * g / l,
                                    i.vx += C * u,
                                    i.vy += s * u)
                            } while (A = A.next)
                        }
                    }
                    return u.initialize = function(A, t) {
                        n = A,
                            r = t,
                            l()
                    }
                        ,
                        u.strength = function(t) {
                            return arguments.length ? (I = "function" == typeof t ? t : A(+t),
                                l(),
                                u) : I
                        }
                        ,
                        u.distanceMin = function(A) {
                            return arguments.length ? (a = A * A,
                                u) : Math.sqrt(a)
                        }
                        ,
                        u.distanceMax = function(A) {
                            return arguments.length ? (h = A * A,
                                u) : Math.sqrt(h)
                        }
                        ,
                        u.theta = function(A) {
                            return arguments.length ? (f = A * A,
                                u) : Math.sqrt(f)
                        }
                        ,
                        u
                }().strength((function() {
                        return -1e3
                    }
                )).distanceMin(30),
                k = function(n) {
                    var i, r, g, e = 1, I = 1;
                    function a() {
                        for (var A, n, a, f, C, s, Q, B = i.length, y = 0; y < I; ++y)
                            for (n = o(i, u, l).visitAfter(h),
                                     A = 0; A < B; ++A)
                                a = i[A],
                                    s = r[a.index],
                                    Q = s * s,
                                    f = a.x + a.vx,
                                    C = a.y + a.vy,
                                    n.visit(c);
                        function c(A, n, i, r, I) {
                            var o = A.data
                                , h = A.r
                                , u = s + h;
                            if (!o)
                                return n > f + u || r < f - u || i > C + u || I < C - u;
                            if (o.index > a.index) {
                                var l = f - o.x - o.vx
                                    , B = C - o.y - o.vy
                                    , y = l * l + B * B;
                                y < u * u && (0 === l && (y += (l = t(g)) * l),
                                0 === B && (y += (B = t(g)) * B),
                                    y = (u - (y = Math.sqrt(y))) / y * e,
                                    a.vx += (l *= y) * (u = (h *= h) / (Q + h)),
                                    a.vy += (B *= y) * u,
                                    o.vx -= l * (u = 1 - u),
                                    o.vy -= B * u)
                            }
                        }
                    }
                    function h(A) {
                        if (A.data)
                            return A.r = r[A.data.index];
                        for (var t = A.r = 0; t < 4; ++t)
                            A[t] && A[t].r > A.r && (A.r = A[t].r)
                    }
                    function f() {
                        if (i) {
                            var A, t, g = i.length;
                            for (r = new Array(g),
                                     A = 0; A < g; ++A)
                                t = i[A],
                                    r[t.index] = +n(t, A, i)
                        }
                    }
                    return "function" != typeof n && (n = A(null == n ? 1 : +n)),
                        a.initialize = function(A, t) {
                            i = A,
                                g = t,
                                f()
                        }
                        ,
                        a.iterations = function(A) {
                            return arguments.length ? (I = +A,
                                a) : I
                        }
                        ,
                        a.strength = function(A) {
                            return arguments.length ? (e = +A,
                                a) : e
                        }
                        ,
                        a.radius = function(t) {
                            return arguments.length ? (n = "function" == typeof t ? t : A(+t),
                                f(),
                                a) : n
                        }
                        ,
                        a
                }().radius(60).strength(.5),
                b = [_, N, q, R, k],
                J = q.strength(),
                console.log("Using fallback d3 simulator"),
                function() {
                    d && (b.forEach((function(A) {
                            return A.initialize && A.initialize(M, U)
                        }
                    )),
                        d = !1),
                    D && (q.links(G),
                        D = !1),
                    w && (_.strength(c),
                        N.strength(c),
                        q.strength((function(A, t, n) {
                                return E * J(A, t, n)
                            }
                        )),
                        q.distance(v),
                        R.strength(x),
                        w = !1),
                        b.forEach((function(A) {
                                return A(Q)
                            }
                        ));
                    for (var A = 0; A < M.length; ++A) {
                        var t = M[A];
                        null == t.fx ? t.x += t.vx *= .6 : (t.x = t.fx,
                            t.vx = 0),
                            null == t.fy ? t.y += t.vy *= .6 : (t.y = t.fy,
                                t.vy = 0)
                    }
                }
        ), O = null, X = function(A) {
            for (var t = [], n = new Float32Array(A), i = 0; i < M.length; i++) {
                var r = M[i];
                t.push(r.id),
                    n[2 * i] = r.x,
                    n[2 * i + 1] = r.y
            }
            return t
        }, L = !1;
        if (self.SharedArrayBuffer)
            try {
                var m = new SharedArrayBuffer(1);
                postMessage({
                    ignore: !0,
                    shared: m
                }),
                    L = !0
            } catch (A) {}
        if (L) {
            var T = null;
            Y = function() {
                var A = 4 * M.length * 2 + 4;
                T && T.byteLength === A || (T = new SharedArrayBuffer(A));
                var t = X(T)
                    , n = new Uint32Array(T,T.byteLength - 4,1)
                    , i = n[0];
                n[0]++,
                    postMessage({
                        id: t,
                        buffer: T,
                        v: i
                    })
            }
        } else
            Y = function() {
                var A = 4 * M.length * 2
                    , t = new ArrayBuffer(A)
                    , n = X(t);
                postMessage({
                    id: n,
                    buffer: t
                }, [t])
            }
            ;
        function Z() {
            if (O = null,
            Q > .001) {
                if (W(),
                0 === M.length)
                    return;
                Q += (y - Q) * B,
                    K(),
                    Y()
            }
        }
        function W() {
            O || (O = setTimeout(Z, 16.666666666666668))
        }
    }
)();
