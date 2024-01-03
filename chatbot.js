import {r as T, P as De, u as Li, i as Me, L as as, a as Ri, f as w, n as L, c as _, b as F, R as ls, s as ne, j as U, F as ki} from "./index-f19d5368.js";
const cs = T.createContext({
    transformPagePoint: t=>t,
    isStatic: !1,
    reducedMotion: "never"
})
  , Xt = T.createContext({})
  , us = T.createContext({
    strict: !1
});
function Bi(t, e, n, s) {
    const {visualElement: i} = T.useContext(Xt)
      , r = T.useContext(us)
      , o = T.useContext(De)
      , a = T.useContext(cs).reducedMotion
      , c = T.useRef();
    s = s || r.renderer,
    !c.current && s && (c.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const l = c.current;
    T.useInsertionEffect(()=>{
        l && l.update(n, o)
    }
    );
    const u = T.useRef(!!window.HandoffAppearAnimations);
    return Li(()=>{
        l && (l.render(),
        u.current && l.animationState && l.animationState.animateChanges())
    }
    ),
    T.useEffect(()=>{
        l && (l.updateFeatures(),
        !u.current && l.animationState && l.animationState.animateChanges(),
        window.HandoffAppearAnimations = void 0,
        u.current = !1)
    }
    ),
    l
}
function dt(t) {
    return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function Fi(t, e, n) {
    return T.useCallback(s=>{
        s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : dt(n) && (n.current = s))
    }
    , [e])
}
function Dt(t) {
    return typeof t == "string" || Array.isArray(t)
}
function qt(t) {
    return typeof t == "object" && typeof t.start == "function"
}
const Le = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Re = ["initial", ...Le];
function Zt(t) {
    return qt(t.animate) || Re.some(e=>Dt(t[e]))
}
function hs(t) {
    return !!(Zt(t) || t.variants)
}
function ji(t, e) {
    if (Zt(t)) {
        const {initial: n, animate: s} = t;
        return {
            initial: n === !1 || Dt(n) ? n : void 0,
            animate: Dt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function Ei(t) {
    const {initial: e, animate: n} = ji(t, T.useContext(Xt));
    return T.useMemo(()=>({
        initial: e,
        animate: n
    }), [sn(e), sn(n)])
}
function sn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const on = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Mt = {};
for (const t in on)
    Mt[t] = {
        isEnabled: e=>on[t].some(n=>!!e[n])
    };
function Ii(t) {
    for (const e in t)
        Mt[e] = {
            ...Mt[e],
            ...t[e]
        }
}
const fs = T.createContext({})
  , Oi = Symbol.for("motionComponentSymbol");
function Ui({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i}) {
    t && Ii(t);
    function r(a, c) {
        let l;
        const u = {
            ...T.useContext(cs),
            ...a,
            layoutId: Ni(a)
        }
          , {isStatic: h} = u
          , d = Ei(a)
          , f = s(a, h);
        if (!h && Me) {
            d.visualElement = Bi(i, f, u, e);
            const m = T.useContext(fs)
              , p = T.useContext(us).strict;
            d.visualElement && (l = d.visualElement.loadFeatures(u, p, t, m))
        }
        return T.createElement(Xt.Provider, {
            value: d
        }, l && d.visualElement ? T.createElement(l, {
            visualElement: d.visualElement,
            ...u
        }) : null, n(i, a, Fi(f, d.visualElement, c), f, h, d.visualElement))
    }
    const o = T.forwardRef(r);
    return o[Oi] = i,
    o
}
function Ni({layoutId: t}) {
    const e = T.useContext(as).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function Hi(t) {
    function e(s, i={}) {
        return Ui(t(s, i))
    }
    if (typeof Proxy > "u")
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (s,i)=>(n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const Gi = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ke(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Gi.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const Ht = {};
function Wi(t) {
    Object.assign(Ht, t)
}
const Rt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ut = new Set(Rt);
function ds(t, {layout: e, layoutId: n}) {
    return ut.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ht[t] || t === "opacity")
}
const I = t=>!!(t && t.getVelocity)
  , $i = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , zi = Rt.length;
function Yi(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, s, i) {
    let r = "";
    for (let o = 0; o < zi; o++) {
        const a = Rt[o];
        if (t[a] !== void 0) {
            const c = $i[a] || a;
            r += `${c}(${t[a]}) `
        }
    }
    return e && !t.z && (r += "translateZ(0)"),
    r = r.trim(),
    i ? r = i(t, s ? "" : r) : n && s && (r = "none"),
    r
}
const ms = t=>e=>typeof e == "string" && e.startsWith(t)
  , ps = ms("--")
  , pe = ms("var(--")
  , Ki = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , _i = (t,e)=>e && typeof t == "number" ? e.transform(t) : t
  , nt = (t,e,n)=>Math.min(Math.max(n, t), e)
  , ht = {
    test: t=>typeof t == "number",
    parse: parseFloat,
    transform: t=>t
}
  , St = {
    ...ht,
    transform: t=>nt(0, 1, t)
}
  , Et = {
    ...ht,
    default: 1
}
  , wt = t=>Math.round(t * 1e5) / 1e5
  , Jt = /(-)?([\d]*\.?[\d])+/g
  , gs = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Xi = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function kt(t) {
    return typeof t == "string"
}
const Bt = t=>({
    test: e=>kt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e=>`${e}${t}`
})
  , J = Bt("deg")
  , G = Bt("%")
  , v = Bt("px")
  , qi = Bt("vh")
  , Zi = Bt("vw")
  , rn = {
    ...G,
    parse: t=>G.parse(t) / 100,
    transform: t=>G.transform(t * 100)
}
  , an = {
    ...ht,
    transform: Math.round
}
  , ys = {
    borderWidth: v,
    borderTopWidth: v,
    borderRightWidth: v,
    borderBottomWidth: v,
    borderLeftWidth: v,
    borderRadius: v,
    radius: v,
    borderTopLeftRadius: v,
    borderTopRightRadius: v,
    borderBottomRightRadius: v,
    borderBottomLeftRadius: v,
    width: v,
    maxWidth: v,
    height: v,
    maxHeight: v,
    size: v,
    top: v,
    right: v,
    bottom: v,
    left: v,
    padding: v,
    paddingTop: v,
    paddingRight: v,
    paddingBottom: v,
    paddingLeft: v,
    margin: v,
    marginTop: v,
    marginRight: v,
    marginBottom: v,
    marginLeft: v,
    rotate: J,
    rotateX: J,
    rotateY: J,
    rotateZ: J,
    scale: Et,
    scaleX: Et,
    scaleY: Et,
    scaleZ: Et,
    skew: J,
    skewX: J,
    skewY: J,
    distance: v,
    translateX: v,
    translateY: v,
    translateZ: v,
    x: v,
    y: v,
    z: v,
    perspective: v,
    transformPerspective: v,
    opacity: St,
    originX: rn,
    originY: rn,
    originZ: v,
    zIndex: an,
    fillOpacity: St,
    strokeOpacity: St,
    numOctaves: an
};
function Be(t, e, n, s) {
    const {style: i, vars: r, transform: o, transformOrigin: a} = t;
    let c = !1
      , l = !1
      , u = !0;
    for (const h in e) {
        const d = e[h];
        if (ps(h)) {
            r[h] = d;
            continue
        }
        const f = ys[h]
          , m = _i(d, f);
        if (ut.has(h)) {
            if (c = !0,
            o[h] = m,
            !u)
                continue;
            d !== (f.default || 0) && (u = !1)
        } else
            h.startsWith("origin") ? (l = !0,
            a[h] = m) : i[h] = m
    }
    if (e.transform || (c || s ? i.transform = Yi(t.transform, n, u, s) : i.transform && (i.transform = "none")),
    l) {
        const {originX: h="50%", originY: d="50%", originZ: f=0} = a;
        i.transformOrigin = `${h} ${d} ${f}`
    }
}
const Fe = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function vs(t, e, n) {
    for (const s in e)
        !I(e[s]) && !ds(s, n) && (t[s] = e[s])
}
function Ji({transformTemplate: t}, e, n) {
    return T.useMemo(()=>{
        const s = Fe();
        return Be(s, e, {
            enableHardwareAcceleration: !n
        }, t),
        Object.assign({}, s.vars, s.style)
    }
    , [e])
}
function Qi(t, e, n) {
    const s = t.style || {}
      , i = {};
    return vs(i, s, t),
    Object.assign(i, Ji(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
}
function to(t, e, n) {
    const s = {}
      , i = Qi(t, e, n);
    return t.drag && t.dragListener !== !1 && (s.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0),
    s.style = i,
    s
}
const eo = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function Gt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || eo.has(t)
}
let xs = t=>!Gt(t);
function no(t) {
    t && (xs = e=>e.startsWith("on") ? !Gt(e) : t(e))
}
try {
    no(require("@emotion/is-prop-valid").default)
} catch {}
function so(t, e, n) {
    const s = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (xs(i) || n === !0 && Gt(i) || !e && !Gt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}
function ln(t, e, n) {
    return typeof t == "string" ? t : v.transform(e + n * t)
}
function io(t, e, n) {
    const s = ln(e, t.x, t.width)
      , i = ln(n, t.y, t.height);
    return `${s} ${i}`
}
const oo = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , ro = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ao(t, e, n=1, s=0, i=!0) {
    t.pathLength = 1;
    const r = i ? oo : ro;
    t[r.offset] = v.transform(-s);
    const o = v.transform(e)
      , a = v.transform(n);
    t[r.array] = `${o} ${a}`
}
function je(t, {attrX: e, attrY: n, attrScale: s, originX: i, originY: r, pathLength: o, pathSpacing: a=1, pathOffset: c=0, ...l}, u, h, d) {
    if (Be(t, l, u, d),
    h) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: f, style: m, dimensions: p} = t;
    f.transform && (p && (m.transform = f.transform),
    delete f.transform),
    p && (i !== void 0 || r !== void 0 || m.transform) && (m.transformOrigin = io(p, i !== void 0 ? i : .5, r !== void 0 ? r : .5)),
    e !== void 0 && (f.x = e),
    n !== void 0 && (f.y = n),
    s !== void 0 && (f.scale = s),
    o !== void 0 && ao(f, o, a, c, !1)
}
const Ps = ()=>({
    ...Fe(),
    attrs: {}
})
  , Ee = t=>typeof t == "string" && t.toLowerCase() === "svg";
function lo(t, e, n, s) {
    const i = T.useMemo(()=>{
        const r = Ps();
        return je(r, e, {
            enableHardwareAcceleration: !1
        }, Ee(s), t.transformTemplate),
        {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const r = {};
        vs(r, t.style, t),
        i.style = {
            ...r,
            ...i.style
        }
    }
    return i
}
function co(t=!1) {
    return (n,s,i,{latestValues: r},o)=>{
        const c = (ke(n) ? lo : to)(s, r, o, n)
          , u = {
            ...so(s, typeof n == "string", t),
            ...c,
            ref: i
        }
          , {children: h} = s
          , d = T.useMemo(()=>I(h) ? h.get() : h, [h]);
        return T.createElement(n, {
            ...u,
            children: d
        })
    }
}
const Ie = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function bs(t, {style: e, vars: n}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const r in n)
        t.style.setProperty(r, n[r])
}
const Ts = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Vs(t, e, n, s) {
    bs(t, e, void 0, s);
    for (const i in e.attrs)
        t.setAttribute(Ts.has(i) ? i : Ie(i), e.attrs[i])
}
function Oe(t, e) {
    const {style: n} = t
      , s = {};
    for (const i in n)
        (I(n[i]) || e.style && I(e.style[i]) || ds(i, t)) && (s[i] = n[i]);
    return s
}
function Ss(t, e) {
    const n = Oe(t, e);
    for (const s in t)
        if (I(t[s]) || I(e[s])) {
            const i = Rt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            n[i] = t[s]
        }
    return n
}
function Ue(t, e, n, s={}, i={}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
}
const Wt = t=>Array.isArray(t)
  , uo = t=>!!(t && typeof t == "object" && t.mix && t.toValue)
  , ho = t=>Wt(t) ? t[t.length - 1] || 0 : t;
function Ut(t) {
    const e = I(t) ? t.get() : t;
    return uo(e) ? e.toValue() : e
}
function fo({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, s, i, r) {
    const o = {
        latestValues: mo(s, i, r, t),
        renderState: e()
    };
    return n && (o.mount = a=>n(s, a, o)),
    o
}
const ws = t=>(e,n)=>{
    const s = T.useContext(Xt)
      , i = T.useContext(De)
      , r = ()=>fo(t, e, s, i);
    return n ? r() : Ri(r)
}
;
function mo(t, e, n, s) {
    const i = {}
      , r = s(t, {});
    for (const d in r)
        i[d] = Ut(r[d]);
    let {initial: o, animate: a} = t;
    const c = Zt(t)
      , l = hs(t);
    e && l && !c && t.inherit !== !1 && (o === void 0 && (o = e.initial),
    a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    const h = u ? a : o;
    return h && typeof h != "boolean" && !qt(h) && (Array.isArray(h) ? h : [h]).forEach(f=>{
        const m = Ue(t, f);
        if (!m)
            return;
        const {transitionEnd: p, transition: P, ...x} = m;
        for (const y in x) {
            let g = x[y];
            if (Array.isArray(g)) {
                const b = u ? g.length - 1 : 0;
                g = g[b]
            }
            g !== null && (i[y] = g)
        }
        for (const y in p)
            i[y] = p[y]
    }
    ),
    i
}
const po = {
    useVisualState: ws({
        scrapeMotionValuesFromProps: Ss,
        createRenderState: Ps,
        onMount: (t,e,{renderState: n, latestValues: s})=>{
            w.read(()=>{
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            w.render(()=>{
                je(n, s, {
                    enableHardwareAcceleration: !1
                }, Ee(e.tagName), t.transformTemplate),
                Vs(e, n)
            }
            )
        }
    })
}
  , go = {
    useVisualState: ws({
        scrapeMotionValuesFromProps: Oe,
        createRenderState: Fe
    })
};
function yo(t, {forwardMotionProps: e=!1}, n, s) {
    return {
        ...ke(t) ? po : go,
        preloadedFeatures: n,
        useRender: co(e),
        createVisualElement: s,
        Component: t
    }
}
function z(t, e, n, s={
    passive: !0
}) {
    return t.addEventListener(e, n, s),
    ()=>t.removeEventListener(e, n)
}
const As = t=>t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function Qt(t, e="page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const vo = t=>e=>As(e) && t(e, Qt(e));
function Y(t, e, n, s) {
    return z(t, e, vo(n), s)
}
const xo = (t,e)=>n=>e(t(n))
  , tt = (...t)=>t.reduce(xo);
function Cs(t) {
    let e = null;
    return ()=>{
        const n = ()=>{
            e = null
        }
        ;
        return e === null ? (e = t,
        n) : !1
    }
}
const cn = Cs("dragHorizontal")
  , un = Cs("dragVertical");
function Ds(t) {
    let e = !1;
    if (t === "y")
        e = un();
    else if (t === "x")
        e = cn();
    else {
        const n = cn()
          , s = un();
        n && s ? e = ()=>{
            n(),
            s()
        }
        : (n && n(),
        s && s())
    }
    return e
}
function Ms() {
    const t = Ds(!0);
    return t ? (t(),
    !1) : !0
}
class it {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function hn(t, e) {
    const n = "pointer" + (e ? "enter" : "leave")
      , s = "onHover" + (e ? "Start" : "End")
      , i = (r,o)=>{
        if (r.type === "touch" || Ms())
            return;
        const a = t.getProps();
        t.animationState && a.whileHover && t.animationState.setActive("whileHover", e),
        a[s] && w.update(()=>a[s](r, o))
    }
    ;
    return Y(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class Po extends it {
    mount() {
        this.unmount = tt(hn(this.node, !0), hn(this.node, !1))
    }
    unmount() {}
}
class bo extends it {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = tt(z(this.node.current, "focus", ()=>this.onFocus()), z(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const Ls = (t,e)=>e ? t === e ? !0 : Ls(t, e.parentElement) : !1;
function se(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, Qt(n))
}
class To extends it {
    constructor() {
        super(...arguments),
        this.removeStartListeners = L,
        this.removeEndListeners = L,
        this.removeAccessibleListeners = L,
        this.startPointerPress = (e,n)=>{
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const s = this.node.getProps()
              , r = Y(window, "pointerup", (a,c)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: l, onTapCancel: u} = this.node.getProps();
                w.update(()=>{
                    Ls(this.node.current, a.target) ? l && l(a, c) : u && u(a, c)
                }
                )
            }
            , {
                passive: !(s.onTap || s.onPointerUp)
            })
              , o = Y(window, "pointercancel", (a,c)=>this.cancelPress(a, c), {
                passive: !(s.onTapCancel || s.onPointerCancel)
            });
            this.removeEndListeners = tt(r, o),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const e = r=>{
                if (r.key !== "Enter" || this.isPressing)
                    return;
                const o = a=>{
                    a.key !== "Enter" || !this.checkPressEnd() || se("up", (c,l)=>{
                        const {onTap: u} = this.node.getProps();
                        u && w.update(()=>u(c, l))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = z(this.node.current, "keyup", o),
                se("down", (a,c)=>{
                    this.startPress(a, c)
                }
                )
            }
              , n = z(this.node.current, "keydown", e)
              , s = ()=>{
                this.isPressing && se("cancel", (r,o)=>this.cancelPress(r, o))
            }
              , i = z(this.node.current, "blur", s);
            this.removeAccessibleListeners = tt(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: s, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        s && w.update(()=>s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !Ms()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: s} = this.node.getProps();
        s && w.update(()=>s(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = Y(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , s = z(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = tt(n, s)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const ge = new WeakMap
  , ie = new WeakMap
  , Vo = t=>{
    const e = ge.get(t.target);
    e && e(t)
}
  , So = t=>{
    t.forEach(Vo)
}
;
function wo({root: t, ...e}) {
    const n = t || document;
    ie.has(n) || ie.set(n, {});
    const s = ie.get(n)
      , i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(So,{
        root: t,
        ...e
    })),
    s[i]
}
function Ao(t, e, n) {
    const s = wo(e);
    return ge.set(t, n),
    s.observe(t),
    ()=>{
        ge.delete(t),
        s.unobserve(t)
    }
}
const Co = {
    some: 0,
    all: 1
};
class Do extends it {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: s, amount: i="some", once: r} = e
          , o = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Co[i]
        }
          , a = c=>{
            const {isIntersecting: l} = c;
            if (this.isInView === l || (this.isInView = l,
            r && !l && this.hasEnteredView))
                return;
            l && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", l);
            const {onViewportEnter: u, onViewportLeave: h} = this.node.getProps()
              , d = l ? u : h;
            d && d(c)
        }
        ;
        return Ao(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Mo(e, n)) && this.startObserver()
    }
    unmount() {}
}
function Mo({viewport: t={}}, {viewport: e={}}={}) {
    return n=>t[n] !== e[n]
}
const Lo = {
    inView: {
        Feature: Do
    },
    tap: {
        Feature: To
    },
    focus: {
        Feature: bo
    },
    hover: {
        Feature: Po
    }
};
function Rs(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s])
            return !1;
    return !0
}
function Ro(t) {
    const e = {};
    return t.values.forEach((n,s)=>e[s] = n.get()),
    e
}
function ko(t) {
    const e = {};
    return t.values.forEach((n,s)=>e[s] = n.getVelocity()),
    e
}
function te(t, e, n) {
    const s = t.getProps();
    return Ue(s, e, n !== void 0 ? n : s.custom, Ro(t), ko(t))
}
const Bo = "framerAppearId"
  , Fo = "data-" + Ie(Bo);
let jo = L
  , Ne = L;
const et = t=>t * 1e3
  , K = t=>t / 1e3
  , Eo = {
    current: !1
}
  , ks = t=>Array.isArray(t) && typeof t[0] == "number";
function Bs(t) {
    return !!(!t || typeof t == "string" && Fs[t] || ks(t) || Array.isArray(t) && t.every(Bs))
}
const Vt = ([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`
  , Fs = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Vt([0, .65, .55, 1]),
    circOut: Vt([.55, 0, 1, .45]),
    backIn: Vt([.31, .01, .66, -.59]),
    backOut: Vt([.33, 1.53, .69, .99])
};
function js(t) {
    if (t)
        return ks(t) ? Vt(t) : Array.isArray(t) ? t.map(js) : Fs[t]
}
function Io(t, e, n, {delay: s=0, duration: i, repeat: r=0, repeatType: o="loop", ease: a, times: c}={}) {
    const l = {
        [e]: n
    };
    c && (l.offset = c);
    const u = js(a);
    return Array.isArray(u) && (l.easing = u),
    t.animate(l, {
        delay: s,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: r + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function Oo(t, {repeat: e, repeatType: n="loop"}) {
    const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[s]
}
const Es = (t,e,n)=>(((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Uo = 1e-7
  , No = 12;
function Ho(t, e, n, s, i) {
    let r, o, a = 0;
    do
        o = e + (n - e) / 2,
        r = Es(o, s, i) - t,
        r > 0 ? n = o : e = o;
    while (Math.abs(r) > Uo && ++a < No);
    return o
}
function Ft(t, e, n, s) {
    if (t === e && n === s)
        return L;
    const i = r=>Ho(r, 0, 1, t, n);
    return r=>r === 0 || r === 1 ? r : Es(i(r), e, s)
}
const Go = Ft(.42, 0, 1, 1)
  , Wo = Ft(0, 0, .58, 1)
  , Is = Ft(.42, 0, .58, 1)
  , $o = t=>Array.isArray(t) && typeof t[0] != "number"
  , Os = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Us = t=>e=>1 - t(1 - e)
  , Ns = t=>1 - Math.sin(Math.acos(t))
  , He = Us(Ns)
  , zo = Os(He)
  , Hs = Ft(.33, 1.53, .69, .99)
  , Ge = Us(Hs)
  , Yo = Os(Ge)
  , Ko = t=>(t *= 2) < 1 ? .5 * Ge(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , _o = {
    linear: L,
    easeIn: Go,
    easeInOut: Is,
    easeOut: Wo,
    circIn: Ns,
    circInOut: zo,
    circOut: He,
    backIn: Ge,
    backInOut: Yo,
    backOut: Hs,
    anticipate: Ko
}
  , fn = t=>{
    if (Array.isArray(t)) {
        Ne(t.length === 4);
        const [e,n,s,i] = t;
        return Ft(e, n, s, i)
    } else if (typeof t == "string")
        return _o[t];
    return t
}
  , We = (t,e)=>n=>!!(kt(n) && Xi.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
  , Gs = (t,e,n)=>s=>{
    if (!kt(s))
        return s;
    const [i,r,o,a] = s.match(Jt);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(r),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Xo = t=>nt(0, 255, t)
  , oe = {
    ...ht,
    transform: t=>Math.round(Xo(t))
}
  , ct = {
    test: We("rgb", "red"),
    parse: Gs("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: s=1})=>"rgba(" + oe.transform(t) + ", " + oe.transform(e) + ", " + oe.transform(n) + ", " + wt(St.transform(s)) + ")"
};
function qo(t) {
    let e = ""
      , n = ""
      , s = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    s = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    s = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    s += s,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const ye = {
    test: We("#"),
    parse: qo,
    transform: ct.transform
}
  , mt = {
    test: We("hsl", "hue"),
    parse: Gs("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: s=1})=>"hsla(" + Math.round(t) + ", " + G.transform(wt(e)) + ", " + G.transform(wt(n)) + ", " + wt(St.transform(s)) + ")"
}
  , E = {
    test: t=>ct.test(t) || ye.test(t) || mt.test(t),
    parse: t=>ct.test(t) ? ct.parse(t) : mt.test(t) ? mt.parse(t) : ye.parse(t),
    transform: t=>kt(t) ? t : t.hasOwnProperty("red") ? ct.transform(t) : mt.transform(t)
}
  , D = (t,e,n)=>-n * t + n * e + t;
function re(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function Zo({hue: t, saturation: e, lightness: n, alpha: s}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , r = 0
      , o = 0;
    if (!e)
        i = r = o = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e
          , c = 2 * n - a;
        i = re(c, a, t + 1 / 3),
        r = re(c, a, t),
        o = re(c, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: s
    }
}
const ae = (t,e,n)=>{
    const s = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - s) + s))
}
  , Jo = [ye, ct, mt]
  , Qo = t=>Jo.find(e=>e.test(t));
function dn(t) {
    const e = Qo(t);
    let n = e.parse(t);
    return e === mt && (n = Zo(n)),
    n
}
const Ws = (t,e)=>{
    const n = dn(t)
      , s = dn(e)
      , i = {
        ...n
    };
    return r=>(i.red = ae(n.red, s.red, r),
    i.green = ae(n.green, s.green, r),
    i.blue = ae(n.blue, s.blue, r),
    i.alpha = D(n.alpha, s.alpha, r),
    ct.transform(i))
}
;
function tr(t) {
    var e, n;
    return isNaN(t) && kt(t) && (((e = t.match(Jt)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(gs)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const $s = {
    regex: Ki,
    countKey: "Vars",
    token: "${v}",
    parse: L
}
  , zs = {
    regex: gs,
    countKey: "Colors",
    token: "${c}",
    parse: E.parse
}
  , Ys = {
    regex: Jt,
    countKey: "Numbers",
    token: "${n}",
    parse: ht.parse
};
function le(t, {regex: e, countKey: n, token: s, parse: i}) {
    const r = t.tokenised.match(e);
    r && (t["num" + n] = r.length,
    t.tokenised = t.tokenised.replace(e, s),
    t.values.push(...r.map(i)))
}
function $t(t) {
    const e = t.toString()
      , n = {
        value: e,
        tokenised: e,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && le(n, $s),
    le(n, zs),
    le(n, Ys),
    n
}
function Ks(t) {
    return $t(t).values
}
function _s(t) {
    const {values: e, numColors: n, numVars: s, tokenised: i} = $t(t)
      , r = e.length;
    return o=>{
        let a = i;
        for (let c = 0; c < r; c++)
            c < s ? a = a.replace($s.token, o[c]) : c < s + n ? a = a.replace(zs.token, E.transform(o[c])) : a = a.replace(Ys.token, wt(o[c]));
        return a
    }
}
const er = t=>typeof t == "number" ? 0 : t;
function nr(t) {
    const e = Ks(t);
    return _s(t)(e.map(er))
}
const st = {
    test: tr,
    parse: Ks,
    createTransformer: _s,
    getAnimatableNone: nr
}
  , Xs = (t,e)=>n=>`${n > 0 ? e : t}`;
function qs(t, e) {
    return typeof t == "number" ? n=>D(t, e, n) : E.test(t) ? Ws(t, e) : t.startsWith("var(") ? Xs(t, e) : Js(t, e)
}
const Zs = (t,e)=>{
    const n = [...t]
      , s = n.length
      , i = t.map((r,o)=>qs(r, e[o]));
    return r=>{
        for (let o = 0; o < s; o++)
            n[o] = i[o](r);
        return n
    }
}
  , sr = (t,e)=>{
    const n = {
        ...t,
        ...e
    }
      , s = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (s[i] = qs(t[i], e[i]));
    return i=>{
        for (const r in s)
            n[r] = s[r](i);
        return n
    }
}
  , Js = (t,e)=>{
    const n = st.createTransformer(e)
      , s = $t(t)
      , i = $t(e);
    return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers ? tt(Zs(s.values, i.values), n) : Xs(t, e)
}
  , Lt = (t,e,n)=>{
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
}
  , mn = (t,e)=>n=>D(t, e, n);
function ir(t) {
    return typeof t == "number" ? mn : typeof t == "string" ? E.test(t) ? Ws : Js : Array.isArray(t) ? Zs : typeof t == "object" ? sr : mn
}
function or(t, e, n) {
    const s = []
      , i = n || ir(t[0])
      , r = t.length - 1;
    for (let o = 0; o < r; o++) {
        let a = i(t[o], t[o + 1]);
        if (e) {
            const c = Array.isArray(e) ? e[o] || L : e;
            a = tt(c, a)
        }
        s.push(a)
    }
    return s
}
function Qs(t, e, {clamp: n=!0, ease: s, mixer: i}={}) {
    const r = t.length;
    if (Ne(r === e.length),
    r === 1)
        return ()=>e[0];
    t[0] > t[r - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const o = or(e, s, i)
      , a = o.length
      , c = l=>{
        let u = 0;
        if (a > 1)
            for (; u < t.length - 2 && !(l < t[u + 1]); u++)
                ;
        const h = Lt(t[u], t[u + 1], l);
        return o[u](h)
    }
    ;
    return n ? l=>c(nt(t[0], t[r - 1], l)) : c
}
function rr(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = Lt(0, e, s);
        t.push(D(n, 1, i))
    }
}
function ar(t) {
    const e = [0];
    return rr(e, t.length - 1),
    e
}
function lr(t, e) {
    return t.map(n=>n * e)
}
function cr(t, e) {
    return t.map(()=>e || Is).splice(0, t.length - 1)
}
function zt({duration: t=300, keyframes: e, times: n, ease: s="easeInOut"}) {
    const i = $o(s) ? s.map(fn) : fn(s)
      , r = {
        done: !1,
        value: e[0]
    }
      , o = lr(n && n.length === e.length ? n : ar(e), t)
      , a = Qs(o, e, {
        ease: Array.isArray(i) ? i : cr(e, i)
    });
    return {
        calculatedDuration: t,
        next: c=>(r.value = a(c),
        r.done = c >= t,
        r)
    }
}
function ti(t, e) {
    return e ? t * (1e3 / e) : 0
}
const ur = 5;
function ei(t, e, n) {
    const s = Math.max(e - ur, 0);
    return ti(n - t(s), e - s)
}
const ce = .001
  , hr = .01
  , pn = 10
  , fr = .05
  , dr = 1;
function mr({duration: t=800, bounce: e=.25, velocity: n=0, mass: s=1}) {
    let i, r;
    jo(t <= et(pn));
    let o = 1 - e;
    o = nt(fr, dr, o),
    t = nt(hr, pn, K(t)),
    o < 1 ? (i = l=>{
        const u = l * o
          , h = u * t
          , d = u - n
          , f = ve(l, o)
          , m = Math.exp(-h);
        return ce - d / f * m
    }
    ,
    r = l=>{
        const h = l * o * t
          , d = h * n + n
          , f = Math.pow(o, 2) * Math.pow(l, 2) * t
          , m = Math.exp(-h)
          , p = ve(Math.pow(l, 2), o);
        return (-i(l) + ce > 0 ? -1 : 1) * ((d - f) * m) / p
    }
    ) : (i = l=>{
        const u = Math.exp(-l * t)
          , h = (l - n) * t + 1;
        return -ce + u * h
    }
    ,
    r = l=>{
        const u = Math.exp(-l * t)
          , h = (n - l) * (t * t);
        return u * h
    }
    );
    const a = 5 / t
      , c = gr(i, r, a);
    if (t = et(t),
    isNaN(c))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const l = Math.pow(c, 2) * s;
        return {
            stiffness: l,
            damping: o * 2 * Math.sqrt(s * l),
            duration: t
        }
    }
}
const pr = 12;
function gr(t, e, n) {
    let s = n;
    for (let i = 1; i < pr; i++)
        s = s - t(s) / e(s);
    return s
}
function ve(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const yr = ["duration", "bounce"]
  , vr = ["stiffness", "damping", "mass"];
function gn(t, e) {
    return e.some(n=>t[n] !== void 0)
}
function xr(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!gn(t, vr) && gn(t, yr)) {
        const n = mr(t);
        e = {
            ...e,
            ...n,
            velocity: 0,
            mass: 1
        },
        e.isResolvedFromDuration = !0
    }
    return e
}
function ni({keyframes: t, restDelta: e, restSpeed: n, ...s}) {
    const i = t[0]
      , r = t[t.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: c, mass: l, velocity: u, duration: h, isResolvedFromDuration: d} = xr(s)
      , f = u ? -K(u) : 0
      , m = c / (2 * Math.sqrt(a * l))
      , p = r - i
      , P = K(Math.sqrt(a / l))
      , x = Math.abs(p) < 5;
    n || (n = x ? .01 : 2),
    e || (e = x ? .005 : .5);
    let y;
    if (m < 1) {
        const g = ve(P, m);
        y = b=>{
            const V = Math.exp(-m * P * b);
            return r - V * ((f + m * P * p) / g * Math.sin(g * b) + p * Math.cos(g * b))
        }
    } else if (m === 1)
        y = g=>r - Math.exp(-P * g) * (p + (f + P * p) * g);
    else {
        const g = P * Math.sqrt(m * m - 1);
        y = b=>{
            const V = Math.exp(-m * P * b)
              , j = Math.min(g * b, 300);
            return r - V * ((f + m * P * p) * Math.sinh(j) + g * p * Math.cosh(j)) / g
        }
    }
    return {
        calculatedDuration: d && h || null,
        next: g=>{
            const b = y(g);
            if (d)
                o.done = g >= h;
            else {
                let V = f;
                g !== 0 && (m < 1 ? V = ei(y, g, b) : V = 0);
                const j = Math.abs(V) <= n
                  , A = Math.abs(r - b) <= e;
                o.done = j && A
            }
            return o.value = o.done ? r : b,
            o
        }
    }
}
function yn({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: i=10, bounceStiffness: r=500, modifyTarget: o, min: a, max: c, restDelta: l=.5, restSpeed: u}) {
    const h = t[0]
      , d = {
        done: !1,
        value: h
    }
      , f = S=>a !== void 0 && S < a || c !== void 0 && S > c
      , m = S=>a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c;
    let p = n * e;
    const P = h + p
      , x = o === void 0 ? P : o(P);
    x !== P && (p = x - h);
    const y = S=>-p * Math.exp(-S / s)
      , g = S=>x + y(S)
      , b = S=>{
        const M = y(S)
          , W = g(S);
        d.done = Math.abs(M) <= l,
        d.value = d.done ? x : W
    }
    ;
    let V, j;
    const A = S=>{
        f(d.value) && (V = S,
        j = ni({
            keyframes: [d.value, m(d.value)],
            velocity: ei(g, S, d.value),
            damping: i,
            stiffness: r,
            restDelta: l,
            restSpeed: u
        }))
    }
    ;
    return A(0),
    {
        calculatedDuration: null,
        next: S=>{
            let M = !1;
            return !j && V === void 0 && (M = !0,
            b(S),
            A(S)),
            V !== void 0 && S > V ? j.next(S - V) : (!M && b(S),
            d)
        }
    }
}
const Pr = t=>{
    const e = ({timestamp: n})=>t(n);
    return {
        start: ()=>w.update(e, !0),
        stop: ()=>_(e),
        now: ()=>F.isProcessing ? F.timestamp : performance.now()
    }
}
  , vn = 2e4;
function xn(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < vn; )
        e += n,
        s = t.next(e);
    return e >= vn ? 1 / 0 : e
}
const br = {
    decay: yn,
    inertia: yn,
    tween: zt,
    keyframes: zt,
    spring: ni
};
function Yt({autoplay: t=!0, delay: e=0, driver: n=Pr, keyframes: s, type: i="keyframes", repeat: r=0, repeatDelay: o=0, repeatType: a="loop", onPlay: c, onStop: l, onComplete: u, onUpdate: h, ...d}) {
    let f = 1, m = !1, p, P;
    const x = ()=>{
        P = new Promise(C=>{
            p = C
        }
        )
    }
    ;
    x();
    let y;
    const g = br[i] || zt;
    let b;
    g !== zt && typeof s[0] != "number" && (b = Qs([0, 100], s, {
        clamp: !1
    }),
    s = [0, 100]);
    const V = g({
        ...d,
        keyframes: s
    });
    let j;
    a === "mirror" && (j = g({
        ...d,
        keyframes: [...s].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let A = "idle"
      , S = null
      , M = null
      , W = null;
    V.calculatedDuration === null && r && (V.calculatedDuration = xn(V));
    const {calculatedDuration: $} = V;
    let X = 1 / 0
      , q = 1 / 0;
    $ !== null && (X = $ + o,
    q = X * (r + 1) - o);
    let B = 0;
    const k = C=>{
        if (M === null)
            return;
        f > 0 && (M = Math.min(M, C)),
        f < 0 && (M = Math.min(C - q / f, M)),
        S !== null ? B = S : B = Math.round(C - M) * f;
        const xt = B - e * (f >= 0 ? 1 : -1)
          , Ze = f >= 0 ? xt < 0 : xt > q;
        B = Math.max(xt, 0),
        A === "finished" && S === null && (B = q);
        let Je = B
          , Qe = V;
        if (r) {
            const ee = B / X;
            let jt = Math.floor(ee)
              , ot = ee % 1;
            !ot && ee >= 1 && (ot = 1),
            ot === 1 && jt--,
            jt = Math.min(jt, r + 1);
            const en = !!(jt % 2);
            en && (a === "reverse" ? (ot = 1 - ot,
            o && (ot -= o / X)) : a === "mirror" && (Qe = j));
            let nn = nt(0, 1, ot);
            B > q && (nn = a === "reverse" && en ? 1 : 0),
            Je = nn * X
        }
        const Pt = Ze ? {
            done: !1,
            value: s[0]
        } : Qe.next(Je);
        b && (Pt.value = b(Pt.value));
        let {done: tn} = Pt;
        !Ze && $ !== null && (tn = f >= 0 ? B >= q : B <= 0);
        const Mi = S === null && (A === "finished" || A === "running" && tn);
        return h && h(Pt.value),
        Mi && Di(),
        Pt
    }
      , Z = ()=>{
        y && y.stop(),
        y = void 0
    }
      , ft = ()=>{
        A = "idle",
        Z(),
        p(),
        x(),
        M = W = null
    }
      , Di = ()=>{
        A = "finished",
        u && u(),
        Z(),
        p()
    }
      , Xe = ()=>{
        if (m)
            return;
        y || (y = n(k));
        const C = y.now();
        c && c(),
        S !== null ? M = C - S : (!M || A === "finished") && (M = C),
        A === "finished" && x(),
        W = M,
        S = null,
        A = "running",
        y.start()
    }
    ;
    t && Xe();
    const qe = {
        then(C, xt) {
            return P.then(C, xt)
        },
        get time() {
            return K(B)
        },
        set time(C) {
            C = et(C),
            B = C,
            S !== null || !y || f === 0 ? S = C : M = y.now() - C / f
        },
        get duration() {
            const C = V.calculatedDuration === null ? xn(V) : V.calculatedDuration;
            return K(C)
        },
        get speed() {
            return f
        },
        set speed(C) {
            C === f || !y || (f = C,
            qe.time = K(B))
        },
        get state() {
            return A
        },
        play: Xe,
        pause: ()=>{
            A = "paused",
            S = B
        }
        ,
        stop: ()=>{
            m = !0,
            A !== "idle" && (A = "idle",
            l && l(),
            ft())
        }
        ,
        cancel: ()=>{
            W !== null && k(W),
            ft()
        }
        ,
        complete: ()=>{
            A = "finished"
        }
        ,
        sample: C=>(M = 0,
        k(C))
    };
    return qe
}
function Tr(t) {
    let e;
    return ()=>(e === void 0 && (e = t()),
    e)
}
const Vr = Tr(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Sr = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , It = 10
  , wr = 2e4
  , Ar = (t,e)=>e.type === "spring" || t === "backgroundColor" || !Bs(e.ease);
function Cr(t, e, {onUpdate: n, onComplete: s, ...i}) {
    if (!(Vr() && Sr.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, a, c;
    const l = ()=>{
        c = new Promise(y=>{
            a = y
        }
        )
    }
    ;
    l();
    let {keyframes: u, duration: h=300, ease: d, times: f} = i;
    if (Ar(e, i)) {
        const y = Yt({
            ...i,
            repeat: 0,
            delay: 0
        });
        let g = {
            done: !1,
            value: u[0]
        };
        const b = [];
        let V = 0;
        for (; !g.done && V < wr; )
            g = y.sample(V),
            b.push(g.value),
            V += It;
        f = void 0,
        u = b,
        h = V - It,
        d = "linear"
    }
    const m = Io(t.owner.current, e, u, {
        ...i,
        duration: h,
        ease: d,
        times: f
    });
    i.syncStart && (m.startTime = F.isProcessing ? F.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const p = ()=>m.cancel()
      , P = ()=>{
        w.update(p),
        a(),
        l()
    }
    ;
    return m.onfinish = ()=>{
        t.set(Oo(u, i)),
        s && s(),
        P()
    }
    ,
    {
        then(y, g) {
            return c.then(y, g)
        },
        attachTimeline(y) {
            return m.timeline = y,
            m.onfinish = null,
            L
        },
        get time() {
            return K(m.currentTime || 0)
        },
        set time(y) {
            m.currentTime = et(y)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(y) {
            m.playbackRate = y
        },
        get duration() {
            return K(h)
        },
        play: ()=>{
            o || (m.play(),
            _(p))
        }
        ,
        pause: ()=>m.pause(),
        stop: ()=>{
            if (o = !0,
            m.playState === "idle")
                return;
            const {currentTime: y} = m;
            if (y) {
                const g = Yt({
                    ...i,
                    autoplay: !1
                });
                t.setWithVelocity(g.sample(y - It).value, g.sample(y).value, It)
            }
            P()
        }
        ,
        complete: ()=>m.finish(),
        cancel: P
    }
}
function Dr({keyframes: t, delay: e, onUpdate: n, onComplete: s}) {
    const i = ()=>(n && n(t[t.length - 1]),
    s && s(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: L,
        pause: L,
        stop: L,
        then: r=>(r(),
        Promise.resolve()),
        cancel: L,
        complete: L
    });
    return e ? Yt({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const Mr = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Lr = t=>({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Rr = {
    type: "keyframes",
    duration: .8
}
  , kr = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Br = (t,{keyframes: e})=>e.length > 2 ? Rr : ut.has(t) ? t.startsWith("scale") ? Lr(e[1]) : Mr : kr
  , xe = (t,e)=>t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (st.test(e) || e === "0") && !e.startsWith("url("))
  , Fr = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jr(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [s] = n.match(Jt) || [];
    if (!s)
        return t;
    const i = n.replace(s, "");
    let r = Fr.has(e) ? 1 : 0;
    return s !== n && (r *= 100),
    e + "(" + r + i + ")"
}
const Er = /([a-z-]*)\(.*?\)/g
  , Pe = {
    ...st,
    getAnimatableNone: t=>{
        const e = t.match(Er);
        return e ? e.map(jr).join(" ") : t
    }
}
  , Ir = {
    ...ys,
    color: E,
    backgroundColor: E,
    outlineColor: E,
    fill: E,
    stroke: E,
    borderColor: E,
    borderTopColor: E,
    borderRightColor: E,
    borderBottomColor: E,
    borderLeftColor: E,
    filter: Pe,
    WebkitFilter: Pe
}
  , $e = t=>Ir[t];
function si(t, e) {
    let n = $e(t);
    return n !== Pe && (n = st),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const ii = t=>/^0[^.\s]+$/.test(t);
function Or(t) {
    if (typeof t == "number")
        return t === 0;
    if (t !== null)
        return t === "none" || t === "0" || ii(t)
}
function Ur(t, e, n, s) {
    const i = xe(e, n);
    let r;
    Array.isArray(n) ? r = [...n] : r = [null, n];
    const o = s.from !== void 0 ? s.from : t.get();
    let a;
    const c = [];
    for (let l = 0; l < r.length; l++)
        r[l] === null && (r[l] = l === 0 ? o : r[l - 1]),
        Or(r[l]) && c.push(l),
        typeof r[l] == "string" && r[l] !== "none" && r[l] !== "0" && (a = r[l]);
    if (i && c.length && a)
        for (let l = 0; l < c.length; l++) {
            const u = c[l];
            r[u] = si(e, a)
        }
    return r
}
function Nr({when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: r, repeatType: o, repeatDelay: a, from: c, elapsed: l, ...u}) {
    return !!Object.keys(u).length
}
function oi(t, e) {
    return t[e] || t.default || t
}
const ze = (t,e,n,s={})=>i=>{
    const r = oi(s, t) || {}
      , o = r.delay || s.delay || 0;
    let {elapsed: a=0} = s;
    a = a - et(o);
    const c = Ur(e, t, n, r)
      , l = c[0]
      , u = c[c.length - 1]
      , h = xe(t, l)
      , d = xe(t, u);
    let f = {
        keyframes: c,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...r,
        delay: -a,
        onUpdate: m=>{
            e.set(m),
            r.onUpdate && r.onUpdate(m)
        }
        ,
        onComplete: ()=>{
            i(),
            r.onComplete && r.onComplete()
        }
    };
    if (Nr(r) || (f = {
        ...f,
        ...Br(t, f)
    }),
    f.duration && (f.duration = et(f.duration)),
    f.repeatDelay && (f.repeatDelay = et(f.repeatDelay)),
    !h || !d || Eo.current || r.type === !1)
        return Dr(f);
    if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        const m = Cr(e, t, f);
        if (m)
            return m
    }
    return Yt(f)
}
;
function Kt(t) {
    return !!(I(t) && t.add)
}
const ri = t=>/^\-?\d*\.?\d+$/.test(t);
function Ye(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Ke(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class _e {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Ye(this.subscriptions, e),
        ()=>Ke(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, s);
            else
                for (let r = 0; r < i; r++) {
                    const o = this.subscriptions[r];
                    o && o(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Hr = t=>!isNaN(parseFloat(t));
class Gr {
    constructor(e, n={}) {
        this.version = "10.16.4",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (s,i=!0)=>{
            this.prev = this.current,
            this.current = s;
            const {delta: r, timestamp: o} = F;
            this.lastUpdated !== o && (this.timeDelta = r,
            this.lastUpdated = o,
            w.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = ()=>w.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: s})=>{
            s !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = e,
        this.canTrackVelocity = Hr(this.current),
        this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new _e);
        const s = this.events[e].add(n);
        return e === "change" ? ()=>{
            s(),
            w.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n),
        this.prev = e,
        this.timeDelta = s
    }
    jump(e) {
        this.updateAndNotify(e),
        this.prev = e,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? ti(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function yt(t, e) {
    return new Gr(t,e)
}
const ai = t=>e=>e.test(t)
  , Wr = {
    test: t=>t === "auto",
    parse: t=>t
}
  , li = [ht, v, G, J, Zi, qi, Wr]
  , bt = t=>li.find(ai(t))
  , $r = [...li, E, st]
  , zr = t=>$r.find(ai(t));
function Yr(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, yt(n))
}
function Kr(t, e) {
    const n = te(t, e);
    let {transitionEnd: s={}, transition: i={}, ...r} = n ? t.makeTargetAnimatable(n, !1) : {};
    r = {
        ...r,
        ...s
    };
    for (const o in r) {
        const a = ho(r[o]);
        Yr(t, o, a)
    }
}
function _r(t, e, n) {
    var s, i;
    const r = Object.keys(e).filter(a=>!t.hasValue(a))
      , o = r.length;
    if (o)
        for (let a = 0; a < o; a++) {
            const c = r[a]
              , l = e[c];
            let u = null;
            Array.isArray(l) && (u = l[0]),
            u === null && (u = (i = (s = n[c]) !== null && s !== void 0 ? s : t.readValue(c)) !== null && i !== void 0 ? i : e[c]),
            u != null && (typeof u == "string" && (ri(u) || ii(u)) ? u = parseFloat(u) : !zr(u) && st.test(l) && (u = si(c, l)),
            t.addValue(c, yt(u, {
                owner: t
            })),
            n[c] === void 0 && (n[c] = u),
            u !== null && t.setBaseTarget(c, u))
        }
}
function Xr(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}
function qr(t, e, n) {
    const s = {};
    for (const i in t) {
        const r = Xr(i, e);
        if (r !== void 0)
            s[i] = r;
        else {
            const o = n.getValue(i);
            o && (s[i] = o.get())
        }
    }
    return s
}
function Zr({protectedKeys: t, needsAnimating: e}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    s
}
function ci(t, e, {delay: n=0, transitionOverride: s, type: i}={}) {
    let {transition: r=t.getDefaultTransition(), transitionEnd: o, ...a} = t.makeTargetAnimatable(e);
    const c = t.getValue("willChange");
    s && (r = s);
    const l = []
      , u = i && t.animationState && t.animationState.getState()[i];
    for (const h in a) {
        const d = t.getValue(h)
          , f = a[h];
        if (!d || f === void 0 || u && Zr(u, h))
            continue;
        const m = {
            delay: n,
            elapsed: 0,
            ...r
        };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const P = t.getProps()[Fo];
            P && (m.elapsed = window.HandoffAppearAnimations(P, h, d, w),
            m.syncStart = !0)
        }
        d.start(ze(h, d, f, t.shouldReduceMotion && ut.has(h) ? {
            type: !1
        } : m));
        const p = d.animation;
        Kt(c) && (c.add(h),
        p.then(()=>c.remove(h))),
        l.push(p)
    }
    return o && Promise.all(l).then(()=>{
        o && Kr(t, o)
    }
    ),
    l
}
function be(t, e, n={}) {
    const s = te(t, e, n.custom);
    let {transition: i=t.getDefaultTransition() || {}} = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const r = s ? ()=>Promise.all(ci(t, s, n)) : ()=>Promise.resolve()
      , o = t.variantChildren && t.variantChildren.size ? (c=0)=>{
        const {delayChildren: l=0, staggerChildren: u, staggerDirection: h} = i;
        return Jr(t, e, l + c, u, h, n)
    }
    : ()=>Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [c,l] = a === "beforeChildren" ? [r, o] : [o, r];
        return c().then(()=>l())
    } else
        return Promise.all([r(), o(n.delay)])
}
function Jr(t, e, n=0, s=0, i=1, r) {
    const o = []
      , a = (t.variantChildren.size - 1) * s
      , c = i === 1 ? (l=0)=>l * s : (l=0)=>a - l * s;
    return Array.from(t.variantChildren).sort(Qr).forEach((l,u)=>{
        l.notify("AnimationStart", e),
        o.push(be(l, e, {
            ...r,
            delay: n + c(u)
        }).then(()=>l.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(o)
}
function Qr(t, e) {
    return t.sortNodePosition(e)
}
function ta(t, e, n={}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(r=>be(t, r, n));
        s = Promise.all(i)
    } else if (typeof e == "string")
        s = be(t, e, n);
    else {
        const i = typeof e == "function" ? te(t, e, n.custom) : e;
        s = Promise.all(ci(t, i, n))
    }
    return s.then(()=>t.notify("AnimationComplete", e))
}
const ea = [...Le].reverse()
  , na = Le.length;
function sa(t) {
    return e=>Promise.all(e.map(({animation: n, options: s})=>ta(t, n, s)))
}
function ia(t) {
    let e = sa(t);
    const n = ra();
    let s = !0;
    const i = (c,l)=>{
        const u = te(t, l);
        if (u) {
            const {transition: h, transitionEnd: d, ...f} = u;
            c = {
                ...c,
                ...f,
                ...d
            }
        }
        return c
    }
    ;
    function r(c) {
        e = c(t)
    }
    function o(c, l) {
        const u = t.getProps()
          , h = t.getVariantContext(!0) || {}
          , d = []
          , f = new Set;
        let m = {}
          , p = 1 / 0;
        for (let x = 0; x < na; x++) {
            const y = ea[x]
              , g = n[y]
              , b = u[y] !== void 0 ? u[y] : h[y]
              , V = Dt(b)
              , j = y === l ? g.isActive : null;
            j === !1 && (p = x);
            let A = b === h[y] && b !== u[y] && V;
            if (A && s && t.manuallyAnimateOnMount && (A = !1),
            g.protectedKeys = {
                ...m
            },
            !g.isActive && j === null || !b && !g.prevProp || qt(b) || typeof b == "boolean")
                continue;
            const S = oa(g.prevProp, b);
            let M = S || y === l && g.isActive && !A && V || x > p && V;
            const W = Array.isArray(b) ? b : [b];
            let $ = W.reduce(i, {});
            j === !1 && ($ = {});
            const {prevResolvedValues: X={}} = g
              , q = {
                ...X,
                ...$
            }
              , B = k=>{
                M = !0,
                f.delete(k),
                g.needsAnimating[k] = !0
            }
            ;
            for (const k in q) {
                const Z = $[k]
                  , ft = X[k];
                m.hasOwnProperty(k) || (Z !== ft ? Wt(Z) && Wt(ft) ? !Rs(Z, ft) || S ? B(k) : g.protectedKeys[k] = !0 : Z !== void 0 ? B(k) : f.add(k) : Z !== void 0 && f.has(k) ? B(k) : g.protectedKeys[k] = !0)
            }
            g.prevProp = b,
            g.prevResolvedValues = $,
            g.isActive && (m = {
                ...m,
                ...$
            }),
            s && t.blockInitialAnimation && (M = !1),
            M && !A && d.push(...W.map(k=>({
                animation: k,
                options: {
                    type: y,
                    ...c
                }
            })))
        }
        if (f.size) {
            const x = {};
            f.forEach(y=>{
                const g = t.getBaseTarget(y);
                g !== void 0 && (x[y] = g)
            }
            ),
            d.push({
                animation: x
            })
        }
        let P = !!d.length;
        return s && u.initial === !1 && !t.manuallyAnimateOnMount && (P = !1),
        s = !1,
        P ? e(d) : Promise.resolve()
    }
    function a(c, l, u) {
        var h;
        if (n[c].isActive === l)
            return Promise.resolve();
        (h = t.variantChildren) === null || h === void 0 || h.forEach(f=>{
            var m;
            return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(c, l)
        }
        ),
        n[c].isActive = l;
        const d = o(u, c);
        for (const f in n)
            n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: r,
        getState: ()=>n
    }
}
function oa(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Rs(e, t) : !1
}
function rt(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function ra() {
    return {
        animate: rt(!0),
        whileInView: rt(),
        whileHover: rt(),
        whileTap: rt(),
        whileDrag: rt(),
        whileFocus: rt(),
        exit: rt()
    }
}
class aa extends it {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = ia(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        this.unmount(),
        qt(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let la = 0;
class ca extends it {
    constructor() {
        super(...arguments),
        this.id = la++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n, custom: s} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const r = this.node.animationState.setActive("exit", !e, {
            custom: s ?? this.node.getProps().custom
        });
        n && !e && r.then(()=>n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const ua = {
    animation: {
        Feature: aa
    },
    exit: {
        Feature: ca
    }
}
  , Pn = (t,e)=>Math.abs(t - e);
function ha(t, e) {
    const n = Pn(t.x, e.x)
      , s = Pn(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class ui {
    constructor(e, n, {transformPagePoint: s}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const l = he(this.lastMoveEventInfo, this.history)
              , u = this.startEvent !== null
              , h = ha(l.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!u && !h)
                return;
            const {point: d} = l
              , {timestamp: f} = F;
            this.history.push({
                ...d,
                timestamp: f
            });
            const {onStart: m, onMove: p} = this.handlers;
            u || (m && m(this.lastMoveEvent, l),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, l)
        }
        ,
        this.handlePointerMove = (l,u)=>{
            this.lastMoveEvent = l,
            this.lastMoveEventInfo = ue(u, this.transformPagePoint),
            w.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (l,u)=>{
            if (this.end(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const {onEnd: h, onSessionEnd: d} = this.handlers
              , f = he(l.type === "pointercancel" ? this.lastMoveEventInfo : ue(u, this.transformPagePoint), this.history);
            this.startEvent && h && h(l, f),
            d && d(l, f)
        }
        ,
        !As(e))
            return;
        this.handlers = n,
        this.transformPagePoint = s;
        const i = Qt(e)
          , r = ue(i, this.transformPagePoint)
          , {point: o} = r
          , {timestamp: a} = F;
        this.history = [{
            ...o,
            timestamp: a
        }];
        const {onSessionStart: c} = n;
        c && c(e, he(r, this.history)),
        this.removeListeners = tt(Y(window, "pointermove", this.handlePointerMove), Y(window, "pointerup", this.handlePointerUp), Y(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        _(this.updatePoint)
    }
}
function ue(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function bn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function he({point: t}, e) {
    return {
        point: t,
        delta: bn(t, hi(e)),
        offset: bn(t, fa(e)),
        velocity: da(e, .1)
    }
}
function fa(t) {
    return t[0]
}
function hi(t) {
    return t[t.length - 1]
}
function da(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , s = null;
    const i = hi(t);
    for (; n >= 0 && (s = t[n],
    !(i.timestamp - s.timestamp > et(e))); )
        n--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const r = K(i.timestamp - s.timestamp);
    if (r === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - s.x) / r,
        y: (i.y - s.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function O(t) {
    return t.max - t.min
}
function Te(t, e=0, n=.01) {
    return Math.abs(t - e) <= n
}
function Tn(t, e, n, s=.5) {
    t.origin = s,
    t.originPoint = D(e.min, e.max, t.origin),
    t.scale = O(n) / O(e),
    (Te(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    t.translate = D(n.min, n.max, t.origin) - t.originPoint,
    (Te(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function At(t, e, n, s) {
    Tn(t.x, e.x, n.x, s ? s.originX : void 0),
    Tn(t.y, e.y, n.y, s ? s.originY : void 0)
}
function Vn(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + O(e)
}
function ma(t, e, n) {
    Vn(t.x, e.x, n.x),
    Vn(t.y, e.y, n.y)
}
function Sn(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + O(e)
}
function Ct(t, e, n) {
    Sn(t.x, e.x, n.x),
    Sn(t.y, e.y, n.y)
}
function pa(t, {min: e, max: n}, s) {
    return e !== void 0 && t < e ? t = s ? D(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? D(n, t, s.max) : Math.min(t, n)),
    t
}
function wn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function ga(t, {top: e, left: n, bottom: s, right: i}) {
    return {
        x: wn(t.x, n, i),
        y: wn(t.y, e, s)
    }
}
function An(t, e) {
    let n = e.min - t.min
      , s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,s] = [s, n]),
    {
        min: n,
        max: s
    }
}
function ya(t, e) {
    return {
        x: An(t.x, e.x),
        y: An(t.y, e.y)
    }
}
function va(t, e) {
    let n = .5;
    const s = O(t)
      , i = O(e);
    return i > s ? n = Lt(e.min, e.max - s, t.min) : s > i && (n = Lt(t.min, t.max - i, e.min)),
    nt(0, 1, n)
}
function xa(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Ve = .35;
function Pa(t=Ve) {
    return t === !1 ? t = 0 : t === !0 && (t = Ve),
    {
        x: Cn(t, "left", "right"),
        y: Cn(t, "top", "bottom")
    }
}
function Cn(t, e, n) {
    return {
        min: Dn(t, e),
        max: Dn(t, n)
    }
}
function Dn(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Mn = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , pt = ()=>({
    x: Mn(),
    y: Mn()
})
  , Ln = ()=>({
    min: 0,
    max: 0
})
  , R = ()=>({
    x: Ln(),
    y: Ln()
});
function H(t) {
    return [t("x"), t("y")]
}
function fi({top: t, left: e, right: n, bottom: s}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}
function ba({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function Ta(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , s = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
function fe(t) {
    return t === void 0 || t === 1
}
function Se({scale: t, scaleX: e, scaleY: n}) {
    return !fe(t) || !fe(e) || !fe(n)
}
function at(t) {
    return Se(t) || di(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function di(t) {
    return Rn(t.x) || Rn(t.y)
}
function Rn(t) {
    return t && t !== "0%"
}
function _t(t, e, n) {
    const s = t - n
      , i = e * s;
    return n + i
}
function kn(t, e, n, s, i) {
    return i !== void 0 && (t = _t(t, i, s)),
    _t(t, n, s) + e
}
function we(t, e=0, n=1, s, i) {
    t.min = kn(t.min, e, n, s, i),
    t.max = kn(t.max, e, n, s, i)
}
function mi(t, {x: e, y: n}) {
    we(t.x, e.translate, e.scale, e.originPoint),
    we(t.y, n.translate, n.scale, n.originPoint)
}
function Va(t, e, n, s=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let r, o;
    for (let a = 0; a < i; a++) {
        r = n[a],
        o = r.projectionDelta;
        const c = r.instance;
        c && c.style && c.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && gt(t, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }),
        o && (e.x *= o.x.scale,
        e.y *= o.y.scale,
        mi(t, o)),
        s && at(r.latestValues) && gt(t, r.latestValues))
    }
    e.x = Bn(e.x),
    e.y = Bn(e.y)
}
function Bn(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}
function Q(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function Fn(t, e, [n,s,i]) {
    const r = e[i] !== void 0 ? e[i] : .5
      , o = D(t.min, t.max, r);
    we(t, e[n], e[s], o, e.scale)
}
const Sa = ["x", "scaleX", "originX"]
  , wa = ["y", "scaleY", "originY"];
function gt(t, e) {
    Fn(t.x, e, Sa),
    Fn(t.y, e, wa)
}
function pi(t, e) {
    return fi(Ta(t.getBoundingClientRect(), e))
}
function Aa(t, e, n) {
    const s = pi(t, n)
      , {scroll: i} = e;
    return i && (Q(s.x, i.offset.x),
    Q(s.y, i.offset.y)),
    s
}
const Ca = new WeakMap;
class Da {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = R(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const i = c=>{
            this.stopAnimation(),
            n && this.snapToCursor(Qt(c, "page").point)
        }
          , r = (c,l)=>{
            const {drag: u, dragPropagation: h, onDragStart: d} = this.getProps();
            if (u && !h && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Ds(u),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            H(m=>{
                let p = this.getAxisMotionValue(m).get() || 0;
                if (G.test(p)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const x = P.layout.layoutBox[m];
                        x && (p = O(x) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[m] = p
            }
            ),
            d && w.update(()=>d(c, l), !1, !0);
            const {animationState: f} = this.visualElement;
            f && f.setActive("whileDrag", !0)
        }
          , o = (c,l)=>{
            const {dragPropagation: u, dragDirectionLock: h, onDirectionLock: d, onDrag: f} = this.getProps();
            if (!u && !this.openGlobalLock)
                return;
            const {offset: m} = l;
            if (h && this.currentDirection === null) {
                this.currentDirection = Ma(m),
                this.currentDirection !== null && d && d(this.currentDirection);
                return
            }
            this.updateAxis("x", l.point, m),
            this.updateAxis("y", l.point, m),
            this.visualElement.render(),
            f && f(c, l)
        }
          , a = (c,l)=>this.stop(c, l);
        this.panSession = new ui(e,{
            onSessionStart: i,
            onStart: r,
            onMove: o,
            onSessionEnd: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(),
        !s)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: r} = this.getProps();
        r && w.update(()=>r(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {drag: i} = this.getProps();
        if (!s || !Ot(e, i, this.currentDirection))
            return;
        const r = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (o = pa(o, this.constraints[e], this.elastic[e])),
        r.set(o)
    }
    resolveConstraints() {
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , {layout: s} = this.visualElement.projection || {}
          , i = this.constraints;
        e && dt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = ga(s.layoutBox, e) : this.constraints = !1,
        this.elastic = Pa(n),
        i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && H(r=>{
            this.getAxisMotionValue(r) && (this.constraints[r] = xa(s.layoutBox[r], this.constraints[r]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !dt(e))
            return !1;
        const s = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const r = Aa(s, i.root, this.visualElement.getTransformPagePoint());
        let o = ya(i.layout.layoutBox, r);
        if (n) {
            const a = n(ba(o));
            this.hasMutatedConstraints = !!a,
            a && (o = fi(a))
        }
        return o
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: s, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , c = this.constraints || {}
          , l = H(u=>{
            if (!Ot(u, n, this.currentDirection))
                return;
            let h = c && c[u] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , f = i ? 40 : 1e7
              , m = {
                type: "inertia",
                velocity: s ? e[u] : 0,
                bounceStiffness: d,
                bounceDamping: f,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...h
            };
            return this.startAxisValueAnimation(u, m)
        }
        );
        return Promise.all(l).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start(ze(e, s, 0, n))
    }
    stopAnimation() {
        H(e=>this.getAxisMotionValue(e).stop())
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase()
          , s = this.visualElement.getProps()
          , i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        H(n=>{
            const {drag: s} = this.getProps();
            if (!Ot(n, s, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , r = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                r.set(e[n] - D(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!dt(n) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        H(o=>{
            const a = this.getAxisMotionValue(o);
            if (a) {
                const c = a.get();
                i[o] = va({
                    min: c,
                    max: c
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: r} = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        H(o=>{
            if (!Ot(o, e, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: c, max: l} = this.constraints[o];
            a.set(D(c, l, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Ca.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Y(e, "pointerdown", c=>{
            const {drag: l, dragListener: u=!0} = this.getProps();
            l && u && this.start(c)
        }
        )
          , s = ()=>{
            const {dragConstraints: c} = this.getProps();
            dt(c) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , r = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        s();
        const o = z(window, "resize", ()=>this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: l})=>{
            this.isDragging && l && (H(u=>{
                const h = this.getAxisMotionValue(u);
                h && (this.originPoint[u] += c[u].translate,
                h.set(h.get() + c[u].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            o(),
            n(),
            r(),
            a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: s=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: o=Ve, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Ot(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function Ma(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class La extends it {
    constructor(e) {
        super(e),
        this.removeGroupControls = L,
        this.removeListeners = L,
        this.controls = new Da(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || L
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const jn = t=>(e,n)=>{
    t && w.update(()=>t(e, n))
}
;
class Ra extends it {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = L
    }
    onPointerDown(e) {
        this.session = new ui(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: jn(e),
            onStart: jn(n),
            onMove: s,
            onEnd: (r,o)=>{
                delete this.session,
                i && w.update(()=>i(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Y(this.node.current, "pointerdown", e=>this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function ka() {
    const t = T.useContext(De);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: s} = t
      , i = T.useId();
    return T.useEffect(()=>s(i), []),
    !e && n ? [!1, ()=>n && n(i)] : [!0]
}
const Nt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function En(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Tt = {
    correct: (t,e)=>{
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (v.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = En(t, e.target.x)
          , s = En(t, e.target.y);
        return `${n}% ${s}%`
    }
}
  , Ba = {
    correct: (t,{treeScale: e, projectionDelta: n})=>{
        const s = t
          , i = st.parse(t);
        if (i.length > 5)
            return s;
        const r = st.createTransformer(t)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * e.x
          , c = n.y.scale * e.y;
        i[0 + o] /= a,
        i[1 + o] /= c;
        const l = D(a, c, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= l),
        typeof i[3 + o] == "number" && (i[3 + o] /= l),
        r(i)
    }
};
class Fa extends ls.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i} = this.props
          , {projection: r} = e;
        Wi(ja),
        r && (n.group && n.group.add(r),
        s && s.register && i && s.register(r),
        r.root.didUpdate(),
        r.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        r.setOptions({
            ...r.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Nt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: s, drag: i, isPresent: r} = this.props
          , o = s.projection;
        return o && (o.isPresent = r,
        i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        e.isPresent !== r && (r ? o.promote() : o.relegate() || w.postRender(()=>{
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        queueMicrotask(()=>{
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function gi(t) {
    const [e,n] = ka()
      , s = T.useContext(as);
    return ls.createElement(Fa, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: T.useContext(fs),
        isPresent: e,
        safeToRemove: n
    })
}
const ja = {
    borderRadius: {
        ...Tt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Tt,
    borderTopRightRadius: Tt,
    borderBottomLeftRadius: Tt,
    borderBottomRightRadius: Tt,
    boxShadow: Ba
}
  , yi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Ea = yi.length
  , In = t=>typeof t == "string" ? parseFloat(t) : t
  , On = t=>typeof t == "number" || v.test(t);
function Ia(t, e, n, s, i, r) {
    i ? (t.opacity = D(0, n.opacity !== void 0 ? n.opacity : 1, Oa(s)),
    t.opacityExit = D(e.opacity !== void 0 ? e.opacity : 1, 0, Ua(s))) : r && (t.opacity = D(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let o = 0; o < Ea; o++) {
        const a = `border ${yi[o]}Radius`;
        let c = Un(e, a)
          , l = Un(n, a);
        if (c === void 0 && l === void 0)
            continue;
        c || (c = 0),
        l || (l = 0),
        c === 0 || l === 0 || On(c) === On(l) ? (t[a] = Math.max(D(In(c), In(l), s), 0),
        (G.test(l) || G.test(c)) && (t[a] += "%")) : t[a] = l
    }
    (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, s))
}
function Un(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Oa = vi(0, .5, He)
  , Ua = vi(.5, .95, L);
function vi(t, e, n) {
    return s=>s < t ? 0 : s > e ? 1 : n(Lt(t, e, s))
}
function Nn(t, e) {
    t.min = e.min,
    t.max = e.max
}
function N(t, e) {
    Nn(t.x, e.x),
    Nn(t.y, e.y)
}
function Hn(t, e, n, s, i) {
    return t -= e,
    t = _t(t, 1 / n, s),
    i !== void 0 && (t = _t(t, 1 / i, s)),
    t
}
function Na(t, e=0, n=1, s=.5, i, r=t, o=t) {
    if (G.test(e) && (e = parseFloat(e),
    e = D(o.min, o.max, e / 100) - o.min),
    typeof e != "number")
        return;
    let a = D(r.min, r.max, s);
    t === r && (a -= e),
    t.min = Hn(t.min, e, n, a, i),
    t.max = Hn(t.max, e, n, a, i)
}
function Gn(t, e, [n,s,i], r, o) {
    Na(t, e[n], e[s], e[i], e.scale, r, o)
}
const Ha = ["x", "scaleX", "originX"]
  , Ga = ["y", "scaleY", "originY"];
function Wn(t, e, n, s) {
    Gn(t.x, e, Ha, n ? n.x : void 0, s ? s.x : void 0),
    Gn(t.y, e, Ga, n ? n.y : void 0, s ? s.y : void 0)
}
function $n(t) {
    return t.translate === 0 && t.scale === 1
}
function xi(t) {
    return $n(t.x) && $n(t.y)
}
function Wa(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function Pi(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}
function zn(t) {
    return O(t.x) / O(t.y)
}
class $a {
    constructor() {
        this.members = []
    }
    add(e) {
        Ye(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Ke(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i=>e === i);
        if (n === 0)
            return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1) {
                s = r;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s,
        this.lead = e,
        e.show(),
        s)) {
            s.instance && s.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = s,
            n && (e.resumeFrom.preserveOpacity = !0),
            s.snapshot && (e.snapshot = s.snapshot,
            e.snapshot.latestValues = s.animationValues || s.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e=>{
            const {options: n, resumingFrom: s} = e;
            n.onExitComplete && n.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e=>{
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Yn(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x
      , r = t.y.translate / e.y;
    if ((i || r) && (s = `translate3d(${i}px, ${r}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {rotate: c, rotateX: l, rotateY: u} = n;
        c && (s += `rotate(${c}deg) `),
        l && (s += `rotateX(${l}deg) `),
        u && (s += `rotateY(${u}deg) `)
    }
    const o = t.x.scale * e.x
      , a = t.y.scale * e.y;
    return (o !== 1 || a !== 1) && (s += `scale(${o}, ${a})`),
    s || "none"
}
const za = (t,e)=>t.depth - e.depth;
class Ya {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Ye(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Ke(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(za),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function Ka(t, e) {
    const n = performance.now()
      , s = ({timestamp: i})=>{
        const r = i - n;
        r >= e && (_(s),
        t(r - e))
    }
    ;
    return w.read(s, !0),
    ()=>_(s)
}
function _a(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}
function Xa(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function qa(t, e, n) {
    const s = I(t) ? t : yt(t);
    return s.start(ze("", s, e, n)),
    s.animation
}
const Kn = ["", "X", "Y", "Z"]
  , _n = 1e3;
let Za = 0;
const lt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function bi({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i}) {
    return class {
        constructor(o={}, a=e == null ? void 0 : e()) {
            this.id = Za++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                lt.totalNodes = lt.resolvedTargetDeltas = lt.recalculatedProjection = 0,
                this.nodes.forEach(tl),
                this.nodes.forEach(ol),
                this.nodes.forEach(rl),
                this.nodes.forEach(el),
                _a(lt)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let c = 0; c < this.path.length; c++)
                this.path[c].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ya)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new _e),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const c = this.eventHandlers.get(o);
            c && c.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Xa(o),
            this.instance = o;
            const {layoutId: c, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (l || c) && (this.isLayoutDirty = !0),
            t) {
                let h;
                const d = ()=>this.root.updateBlockedByResize = !1;
                t(o, ()=>{
                    this.root.updateBlockedByResize = !0,
                    h && h(),
                    h = Ka(d, 250),
                    Nt.hasAnimatedSinceResize && (Nt.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(qn))
                }
                )
            }
            c && this.root.registerSharedNode(c, this),
            this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: f, layout: m})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || u.getDefaultTransition() || hl
                  , {onLayoutAnimationStart: P, onLayoutAnimationComplete: x} = u.getProps()
                  , y = !this.targetLayout || !Pi(this.targetLayout, m) || f
                  , g = !d && f;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || d && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(h, g);
                    const b = {
                        ...oi(p, "layout"),
                        onPlay: P,
                        onComplete: x
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0,
                    b.type = !1),
                    this.startAnimation(b)
                } else
                    d || qn(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            _(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(al),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const h = this.path[u];
                h.shouldResetTransform = !0,
                h.updateScroll("snapshot"),
                h.options.layoutRoot && h.willUpdate(!1)
            }
            const {layoutId: a, layout: c} = this.options;
            if (a === void 0 && !c)
                return;
            const l = this.getTransformTemplate();
            this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Xn);
                return
            }
            this.isUpdating || this.nodes.forEach(sl),
            this.isUpdating = !1,
            this.nodes.forEach(il),
            this.nodes.forEach(Ja),
            this.nodes.forEach(Qa),
            this.clearAllSnapshots();
            const a = performance.now();
            F.delta = nt(0, 1e3 / 60, a - F.timestamp),
            F.timestamp = a,
            F.isProcessing = !0,
            ne.update.process(F),
            ne.preRender.process(F),
            ne.render.process(F),
            F.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(nl),
            this.sharedNodes.forEach(ll)
        }
        scheduleUpdateProjection() {
            w.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            w.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let c = 0; c < this.path.length; c++)
                    this.path[c].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = R(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: s(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !xi(this.projectionDelta)
              , c = this.getTransformTemplate()
              , l = c ? c(this.latestValues, "") : void 0
              , u = l !== this.prevTransformTemplateValue;
            o && (a || at(this.latestValues) || u) && (i(this.instance, l),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let c = this.removeElementScroll(a);
            return o && (c = this.removeTransform(c)),
            fl(c),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: c,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return R();
            const a = o.measureViewportBox()
              , {scroll: c} = this.root;
            return c && (Q(a.x, c.offset.x),
            Q(a.y, c.offset.y)),
            a
        }
        removeElementScroll(o) {
            const a = R();
            N(a, o);
            for (let c = 0; c < this.path.length; c++) {
                const l = this.path[c]
                  , {scroll: u, options: h} = l;
                if (l !== this.root && u && h.layoutScroll) {
                    if (u.isRoot) {
                        N(a, o);
                        const {scroll: d} = this.root;
                        d && (Q(a.x, -d.offset.x),
                        Q(a.y, -d.offset.y))
                    }
                    Q(a.x, u.offset.x),
                    Q(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(o, a=!1) {
            const c = R();
            N(c, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && gt(c, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                at(u.latestValues) && gt(c, u.latestValues)
            }
            return at(this.latestValues) && gt(c, this.latestValues),
            c
        }
        removeTransform(o) {
            const a = R();
            N(a, o);
            for (let c = 0; c < this.path.length; c++) {
                const l = this.path[c];
                if (!l.instance || !at(l.latestValues))
                    continue;
                Se(l.latestValues) && l.updateSnapshot();
                const u = R()
                  , h = l.measurePageBox();
                N(u, h),
                Wn(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u)
            }
            return at(this.latestValues) && Wn(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const c = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== c;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: h, layoutId: d} = this.options;
            if (!(!this.layout || !(h || d))) {
                if (this.resolvedRelativeTargetAt = F.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = R(),
                    this.relativeTargetOrigin = R(),
                    Ct(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox),
                    N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = R(),
                    this.targetWithTransforms = R()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    ma(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox),
                    mi(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = R(),
                        this.relativeTargetOrigin = R(),
                        Ct(this.relativeTargetOrigin, this.target, f.target),
                        N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    lt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Se(this.parent.latestValues) || di(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , c = !!this.resumingFrom || this !== a;
            let l = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (l = !1),
            c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === F.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: h} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || h))
                return;
            N(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            Va(this.layoutCorrected, this.treeScale, this.path, c),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {target: m} = a;
            if (!m) {
                this.projectionTransform && (this.projectionDelta = pt(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = pt(),
            this.projectionDeltaWithTransform = pt());
            const p = this.projectionTransform;
            At(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
            this.projectionTransform = Yn(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== p || this.treeScale.x !== d || this.treeScale.y !== f) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", m)),
            lt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, a=!1) {
            const c = this.snapshot
              , l = c ? c.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , h = pt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const d = R()
              , f = c ? c.source : void 0
              , m = this.layout ? this.layout.source : void 0
              , p = f !== m
              , P = this.getStack()
              , x = !P || P.members.length <= 1
              , y = !!(p && !x && this.options.crossfade === !0 && !this.path.some(ul));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = b=>{
                const V = b / 1e3;
                Zn(h.x, o.x, V),
                Zn(h.y, o.y, V),
                this.setTargetDelta(h),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ct(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                cl(this.relativeTarget, this.relativeTargetOrigin, d, V),
                g && Wa(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = R()),
                N(g, this.relativeTarget)),
                p && (this.animationValues = u,
                Ia(u, l, this.latestValues, V, y, x)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = V
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (_(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = w.update(()=>{
                Nt.hasAnimatedSinceResize = !0,
                this.currentAnimation = qa(0, _n, {
                    ...o,
                    onUpdate: a=>{
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: ()=>{
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_n),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: c, layout: l, latestValues: u} = o;
            if (!(!a || !c || !l)) {
                if (this !== o && this.layout && l && Ti(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
                    c = this.target || R();
                    const h = O(this.layout.layoutBox.x);
                    c.x.min = o.target.x.min,
                    c.x.max = c.x.min + h;
                    const d = O(this.layout.layoutBox.y);
                    c.y.min = o.target.y.min,
                    c.y.max = c.y.min + d
                }
                N(a, c),
                gt(a, u),
                At(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new $a),
            this.sharedNodes.get(o).add(a);
            const l = a.options.initialPromotionConfig;
            a.promote({
                transition: l ? l.transition : void 0,
                preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: c}={}) {
            const l = this.getStack();
            l && l.promote(this, c),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: c} = o;
            if ((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0),
            !a)
                return;
            const l = {};
            for (let u = 0; u < Kn.length; u++) {
                const h = "rotate" + Kn[u];
                c[h] && (l[h] = c[h],
                o.setStaticValue(h, 0))
            }
            o.render();
            for (const u in l)
                o.setStaticValue(u, l[u]);
            o.scheduleRender()
        }
        getProjectionStyles(o={}) {
            var a, c;
            const l = {};
            if (!this.instance || this.isSVG)
                return l;
            if (this.isVisible)
                l.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                l.opacity = "",
                l.pointerEvents = Ut(o.pointerEvents) || "",
                l.transform = u ? u(this.latestValues, "") : "none",
                l;
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                p.pointerEvents = Ut(o.pointerEvents) || ""),
                this.hasProjected && !at(this.latestValues) && (p.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                p
            }
            const d = h.animationValues || h.latestValues;
            this.applyTransformsToTarget(),
            l.transform = Yn(this.projectionDeltaWithTransform, this.treeScale, d),
            u && (l.transform = u(d, l.transform));
            const {x: f, y: m} = this.projectionDelta;
            l.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`,
            h.animationValues ? l.opacity = h === this ? (c = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : l.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const p in Ht) {
                if (d[p] === void 0)
                    continue;
                const {correct: P, applyTo: x} = Ht[p]
                  , y = l.transform === "none" ? d[p] : P(d[p], h);
                if (x) {
                    const g = x.length;
                    for (let b = 0; b < g; b++)
                        l[x[b]] = y
                } else
                    l[p] = y
            }
            return this.options.layoutId && (l.pointerEvents = h === this ? Ut(o.pointerEvents) || "" : "none"),
            l
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o=>{
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Xn),
            this.root.sharedNodes.clear()
        }
    }
}
function Ja(t) {
    t.updateLayout()
}
function Qa(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: i} = t.layout
          , {animationType: r} = t.options
          , o = n.source !== t.layout.source;
        r === "size" ? H(h=>{
            const d = o ? n.measuredBox[h] : n.layoutBox[h]
              , f = O(d);
            d.min = s[h].min,
            d.max = d.min + f
        }
        ) : Ti(r, n.layoutBox, s) && H(h=>{
            const d = o ? n.measuredBox[h] : n.layoutBox[h]
              , f = O(s[h]);
            d.max = d.min + f,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[h].max = t.relativeTarget[h].min + f)
        }
        );
        const a = pt();
        At(a, s, n.layoutBox);
        const c = pt();
        o ? At(c, t.applyTransform(i, !0), n.measuredBox) : At(c, s, n.layoutBox);
        const l = !xi(a);
        let u = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {snapshot: d, layout: f} = h;
                if (d && f) {
                    const m = R();
                    Ct(m, n.layoutBox, d.layoutBox);
                    const p = R();
                    Ct(p, s, f.layoutBox),
                    Pi(m, p) || (u = !0),
                    h.options.layoutRoot && (t.relativeTarget = p,
                    t.relativeTargetOrigin = m,
                    t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: c,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {onExitComplete: s} = t.options;
        s && s()
    }
    t.options.transition = void 0
}
function tl(t) {
    lt.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function el(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function nl(t) {
    t.clearSnapshot()
}
function Xn(t) {
    t.clearMeasurements()
}
function sl(t) {
    t.isLayoutDirty = !1
}
function il(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function qn(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function ol(t) {
    t.resolveTargetDelta()
}
function rl(t) {
    t.calcProjection()
}
function al(t) {
    t.resetRotation()
}
function ll(t) {
    t.removeLeadSnapshot()
}
function Zn(t, e, n) {
    t.translate = D(e.translate, 0, n),
    t.scale = D(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Jn(t, e, n, s) {
    t.min = D(e.min, n.min, s),
    t.max = D(e.max, n.max, s)
}
function cl(t, e, n, s) {
    Jn(t.x, e.x, n.x, s),
    Jn(t.y, e.y, n.y, s)
}
function ul(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const hl = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Qn = t=>typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t)
  , ts = Qn("applewebkit/") && !Qn("chrome/") ? Math.round : L;
function es(t) {
    t.min = ts(t.min),
    t.max = ts(t.max)
}
function fl(t) {
    es(t.x),
    es(t.y)
}
function Ti(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Te(zn(e), zn(n), .2)
}
const dl = bi({
    attachResizeListener: (t,e)=>z(t, "resize", e),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , de = {
    current: void 0
}
  , Vi = bi({
    measureScroll: t=>({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: ()=>{
        if (!de.current) {
            const t = new dl({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            de.current = t
        }
        return de.current
    }
    ,
    resetTransform: (t,e)=>{
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t=>window.getComputedStyle(t).position === "fixed"
})
  , ml = {
    pan: {
        Feature: Ra
    },
    drag: {
        Feature: La,
        ProjectionNode: Vi,
        MeasureLayout: gi
    }
}
  , pl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function gl(t) {
    const e = pl.exec(t);
    if (!e)
        return [, ];
    const [,n,s] = e;
    return [n, s]
}
function Ae(t, e, n=1) {
    const [s,i] = gl(t);
    if (!s)
        return;
    const r = window.getComputedStyle(e).getPropertyValue(s);
    if (r) {
        const o = r.trim();
        return ri(o) ? parseFloat(o) : o
    } else
        return pe(i) ? Ae(i, e, n + 1) : i
}
function yl(t, {...e}, n) {
    const s = t.current;
    if (!(s instanceof Element))
        return {
            target: e,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    t.values.forEach(i=>{
        const r = i.get();
        if (!pe(r))
            return;
        const o = Ae(r, s);
        o && i.set(o)
    }
    );
    for (const i in e) {
        const r = e[i];
        if (!pe(r))
            continue;
        const o = Ae(r, s);
        o && (e[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = r))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const vl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Si = t=>vl.has(t)
  , xl = t=>Object.keys(t).some(Si)
  , ns = t=>t === ht || t === v
  , ss = (t,e)=>parseFloat(t.split(", ")[e])
  , is = (t,e)=>(n,{transform: s})=>{
    if (s === "none" || !s)
        return 0;
    const i = s.match(/^matrix3d\((.+)\)$/);
    if (i)
        return ss(i[1], e);
    {
        const r = s.match(/^matrix\((.+)\)$/);
        return r ? ss(r[1], t) : 0
    }
}
  , Pl = new Set(["x", "y", "z"])
  , bl = Rt.filter(t=>!Pl.has(t));
function Tl(t) {
    const e = [];
    return bl.forEach(n=>{
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]),
        s.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e.length && t.render(),
    e
}
const vt = {
    width: ({x: t},{paddingLeft: e="0", paddingRight: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t},{paddingTop: e="0", paddingBottom: n="0"})=>t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t,{top: e})=>parseFloat(e),
    left: (t,{left: e})=>parseFloat(e),
    bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
    right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
    x: is(4, 13),
    y: is(5, 14)
};
vt.translateX = vt.x;
vt.translateY = vt.y;
const Vl = (t,e,n)=>{
    const s = e.measureViewportBox()
      , i = e.current
      , r = getComputedStyle(i)
      , {display: o} = r
      , a = {};
    o === "none" && e.setStaticValue("display", t.display || "block"),
    n.forEach(l=>{
        a[l] = vt[l](s, r)
    }
    ),
    e.render();
    const c = e.measureViewportBox();
    return n.forEach(l=>{
        const u = e.getValue(l);
        u && u.jump(a[l]),
        t[l] = vt[l](c, r)
    }
    ),
    t
}
  , Sl = (t,e,n={},s={})=>{
    e = {
        ...e
    },
    s = {
        ...s
    };
    const i = Object.keys(e).filter(Si);
    let r = []
      , o = !1;
    const a = [];
    if (i.forEach(c=>{
        const l = t.getValue(c);
        if (!t.hasValue(c))
            return;
        let u = n[c]
          , h = bt(u);
        const d = e[c];
        let f;
        if (Wt(d)) {
            const m = d.length
              , p = d[0] === null ? 1 : 0;
            u = d[p],
            h = bt(u);
            for (let P = p; P < m && d[P] !== null; P++)
                f ? Ne(bt(d[P]) === f) : f = bt(d[P])
        } else
            f = bt(d);
        if (h !== f)
            if (ns(h) && ns(f)) {
                const m = l.get();
                typeof m == "string" && l.set(parseFloat(m)),
                typeof d == "string" ? e[c] = parseFloat(d) : Array.isArray(d) && f === v && (e[c] = d.map(parseFloat))
            } else
                h != null && h.transform && (f != null && f.transform) && (u === 0 || d === 0) ? u === 0 ? l.set(f.transform(u)) : e[c] = h.transform(d) : (o || (r = Tl(t),
                o = !0),
                a.push(c),
                s[c] = s[c] !== void 0 ? s[c] : e[c],
                l.jump(d))
    }
    ),
    a.length) {
        const c = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , l = Vl(e, t, a);
        return r.length && r.forEach(([u,h])=>{
            t.getValue(u).set(h)
        }
        ),
        t.render(),
        Me && c !== null && window.scrollTo({
            top: c
        }),
        {
            target: l,
            transitionEnd: s
        }
    } else
        return {
            target: e,
            transitionEnd: s
        }
}
;
function wl(t, e, n, s) {
    return xl(e) ? Sl(t, e, n, s) : {
        target: e,
        transitionEnd: s
    }
}
const Al = (t,e,n,s)=>{
    const i = yl(t, e, s);
    return e = i.target,
    s = i.transitionEnd,
    wl(t, e, n, s)
}
  , Ce = {
    current: null
}
  , wi = {
    current: !1
};
function Cl() {
    if (wi.current = !0,
    !!Me)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = ()=>Ce.current = t.matches;
            t.addListener(e),
            e()
        } else
            Ce.current = !1
}
function Dl(t, e, n) {
    const {willChange: s} = e;
    for (const i in e) {
        const r = e[i]
          , o = n[i];
        if (I(r))
            t.addValue(i, r),
            Kt(s) && s.add(i);
        else if (I(o))
            t.addValue(i, yt(r, {
                owner: t
            })),
            Kt(s) && s.remove(i);
        else if (o !== r)
            if (t.hasValue(i)) {
                const a = t.getValue(i);
                !a.hasAnimated && a.set(r)
            } else {
                const a = t.getStaticValue(i);
                t.addValue(i, yt(a !== void 0 ? a : r, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const os = new WeakMap
  , Ai = Object.keys(Mt)
  , Ml = Ai.length
  , rs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Ll = Re.length;
class Rl {
    constructor({parent: e, props: n, presenceContext: s, reducedMotionConfig: i, visualState: r}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>w.render(this.render, !1, !0);
        const {latestValues: a, renderState: c} = r;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = c,
        this.parent = e,
        this.props = n,
        this.presenceContext = s,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = Zt(n),
        this.isVariantNode = hs(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: l, ...u} = this.scrapeMotionValuesFromProps(n, {});
        for (const h in u) {
            const d = u[h];
            a[h] !== void 0 && I(d) && (d.set(a[h], !1),
            Kt(l) && l.add(h))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e,
        os.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,s)=>this.bindToMotionValue(s, n)),
        wi.current || Cl(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ce.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        os.delete(this.current),
        this.projection && this.projection.unmount(),
        _(this.notifyUpdate),
        _(this.render),
        this.valueSubscriptions.forEach(e=>e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features)
            this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const s = ut.has(e)
          , i = n.on("change", o=>{
            this.latestValues[e] = o,
            this.props.onUpdate && w.update(this.notifyUpdate, !1, !0),
            s && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , r = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, ()=>{
            i(),
            r()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...n}, s, i, r) {
        let o, a;
        for (let c = 0; c < Ml; c++) {
            const l = Ai[c]
              , {isEnabled: u, Feature: h, ProjectionNode: d, MeasureLayout: f} = Mt[l];
            d && (o = d),
            u(n) && (!this.features[l] && h && (this.features[l] = new h(this)),
            f && (a = f))
        }
        if (!this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: c, layout: l, drag: u, dragConstraints: h, layoutScroll: d, layoutRoot: f} = n;
            this.projection.setOptions({
                layoutId: c,
                layout: l,
                alwaysMeasureLayout: !!u || h && dt(h),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof l == "string" ? l : "both",
                initialPromotionConfig: r,
                layoutScroll: d,
                layoutRoot: f
            })
        }
        return a
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : R()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n=!0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let s = 0; s < rs.length; s++) {
            const i = rs[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const r = e["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = Dl(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
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
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial),
            s
        }
        const n = {};
        for (let s = 0; s < Ll; s++) {
            const i = Re[s]
              , r = this.props[i];
            (Dt(r) || r === !1) && (n[i] = r)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            ()=>n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e),
        this.bindToMotionValue(e, n)),
        this.values.set(e, n),
        this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = yt(n, {
            owner: this
        }),
        this.addValue(e, s)),
        s
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: s} = this.props
          , i = typeof s == "string" || typeof s == "object" ? (n = Ue(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (s && i !== void 0)
            return i;
        const r = this.getBaseTargetFromProps(this.props, e);
        return r !== void 0 && !I(r) ? r : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new _e),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Ci extends Rl {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: s}) {
        delete n[e],
        delete s[e]
    }
    makeTargetAnimatableFromInstance({transition: e, transitionEnd: n, ...s}, {transformValues: i}, r) {
        let o = qr(s, e || {}, this);
        if (i && (n && (n = i(n)),
        s && (s = i(s)),
        o && (o = i(o))),
        r) {
            _r(this, s, o);
            const a = Al(this, s, o, n);
            n = a.transitionEnd,
            s = a.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...s
        }
    }
}
function kl(t) {
    return window.getComputedStyle(t)
}
class Bl extends Ci {
    readValueFromInstance(e, n) {
        if (ut.has(n)) {
            const s = $e(n);
            return s && s.default || 0
        } else {
            const s = kl(e)
              , i = (ps(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return pi(e, n)
    }
    build(e, n, s, i) {
        Be(e, n, s, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return Oe(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        I(e) && (this.childSubscription = e.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(e, n, s, i) {
        bs(e, n, s, i)
    }
}
class Fl extends Ci {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ut.has(n)) {
            const s = $e(n);
            return s && s.default || 0
        }
        return n = Ts.has(n) ? n : Ie(n),
        e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return R()
    }
    scrapeMotionValuesFromProps(e, n) {
        return Ss(e, n)
    }
    build(e, n, s, i) {
        je(e, n, s, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        Vs(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = Ee(e.tagName),
        super.mount(e)
    }
}
const jl = (t,e)=>ke(t) ? new Fl(e,{
    enableHardwareAcceleration: !1
}) : new Bl(e,{
    enableHardwareAcceleration: !0
})
  , El = {
    layout: {
        ProjectionNode: Vi,
        MeasureLayout: gi
    }
}
  , Il = {
    ...ua,
    ...Lo,
    ...ml,
    ...El
}
  , me = Hi((t,e)=>yo(t, e, Il, jl));
function Ol() {
    const t = ["Today is a new chance to make your day better ☀️", "Challenges can help you learn and grow as an individual 🌱", "You can overcome tough things 💪🏽", "Be around happy people 😄", "Take care of yourself and be healthy 🥕", "Celebrate even small successes 🎉", "Don't worry about what you can't change 🙅🏽‍♀️", "Every day is a fresh start 🌅", "Stay positive and smile often 😁", "Focus on the good things in life 🌟", "Help others and spread kindness 💕", "Believe in yourself and your abilities 🌠", "Enjoy the simple moments in life 🌸", "Learn from your mistakes and keep moving forward 🚀", "Stay calm and handle stress with a deep breath 🧘🏽‍♀️", "Dream big and work hard to achieve your goals 🌌", "Surround yourself with people who support you 🤗", "Gratitude is the key to happiness 🙏", "You are enough just as you are 💖", "Find joy in the journey, not just the destination 🌈", "Your vibe attracts your tribe 🌟", "Life is too short for negativity 🚫", "Be the change you wish to see in the world 🌍", "You're stronger than you think 💪", "Kindness is never wasted 💕", "Your uniqueness is your magic ✨", "The best time for a new beginning is now 🌱", "You are the artist of your own life 🎨", "Don't forget to laugh today 😂", "Love yourself first, and everything else falls into place ❤️", "You can't pour from an empty cup. Take care of yourself first ☕", "The universe has your back 🌌", "You're capable of amazing things 🌠", "Don't forget to be awesome today 😎", "Your thoughts shape your world 🌏", "You're never alone. Reach out 🤝", "You're someone's reason to smile 😊", "The only limits that exist are the ones you place on yourself 🚀"]
      , e = Math.floor(Math.random() * t.length);
    return t[e]
}
function Ul() {
    const t = ["May this daily reminder brighten your day and boost your positivity.", "Wishing this daily reminder brings you more joy and happiness.", "I hope this daily reminder inspires a positive outlook on life.", "I hope this daily reminder makes you feel happier and more positive.", "Let this daily reminder uplift your spirits and foster positivity."]
      , e = Math.floor(Math.random() * t.length);
    return t[e]
}
function Gl({handleOnClick: t}) {
    const [e,n] = T.useState([])
      , [s,i] = T.useState([])
      , [r,o] = T.useState(!0)
      , a = T.useRef(null)
      , c = f=>new Promise(m=>setTimeout(m, f))
      , l = async(f,m=!1)=>{
        n(p=>[...p, {
            text: f,
            fromUser: m
        }]),
        await c(1200)
    }
      , u = async f=>{
        switch (o(!1),
        await l(f, !0),
        f) {
        case "Just saying Hello!":
            await l("Hello!"),
            await l("Thanks for saying hi 😆"),
            await l("I hope you enjoyed looking at my work."),
            await l("Can I help you with anything else?");
            break;
        case "How can I reach out to you?":
            await l("For quickly response, hit me up on LinkedIn or Instagram 🚀"),
            await l("Scroll to the bottom of the page for the links."),
            await l("Or mail me at ravitejagattu23@gmail.com"),
            await l("I'll try my best to get back to you."),
            await l("Anything else?");
            break;
        case "Daily Reminder":
            await l(Ol()),
            await l(Ul()),
            await l("Is there more on your mind?");
            break;
        case "Instagram Collaboration":
            await l("DM me at @ravitejagattu on Instagram for collaboration."),
            await l("Or email me at ravitejagattu23@gmail.com"),
            await l("Let's talk business! 💼"),
            await l("Is there more on your mind?");
            break
        }
        o(!0)
    }
    ;
    T.useEffect(()=>{
        (async()=>(await l("Hi!"),
        await l("I'm RaviTeja Bot, here to assist with any questions about Ravi Teja's work."),
        await l("How can I help you today?"),
        i(["Just saying Hello!", "How can I reach out to you?", "Daily Reminder", "Instagram Collaboration"])))()
    }
    , []),
    T.useEffect(()=>{
        var f;
        (f = a.current) == null || f.scrollIntoView()
    }
    , [e, r]);
    const h = ()=>e.map((f,m)=>{
        const p = /((?:https?:\/\/\S+)|(?:\S+\.\S+\@\S+)|(@\w+))/gi
          , P = f.text.replace(p, x=>x.match(/^https?:\/\//) ? `<a href="${x}" target="_blank">${x}</a>` : x.match(/\S+\.\S+\@\S+/) ? `<a href="mailto:${x}">${x}</a>` : x.startsWith("@") ? `<a href="https://www.instagram.com/${x.slice(1)}" target="_blank">${x}</a>` : x);
        return U.jsx(me.div, {
            initial: "hidden",
            animate: "visible",
            variants: {
                hidden: {
                    translateY: "10px",
                    opacity: 0
                },
                visible: {
                    translateY: "0px",
                    opacity: 1,
                    transition: {
                        delay: .35,
                        type: "spring",
                        duration: .5
                    }
                }
            },
            className: `message ${f.fromUser ? "user" : "bot"}`,
            dangerouslySetInnerHTML: {
                __html: P
            }
        }, m)
    }
    )
      , d = ()=>r ? s.map((f,m)=>U.jsx(me.button, {
        initial: "hidden",
        animate: "visible",
        variants: {
            hidden: {
                translateY: "10px",
                opacity: 0
            },
            visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: .5
                }
            }
        },
        onClick: ()=>u(f),
        children: f
    }, m)) : null;
    return U.jsxs(me.div, {
        exit: {
            translateY: "10px",
            opacity: 0
        },
        initial: {
            translateY: "100px",
            opacity: 0
        },
        animate: {
            translateY: "0px",
            opacity: 1,
            transition: {
                type: "spring",
                duration: .5
            }
        },
        className: "chat",
        children: [U.jsxs("div", {
            className: "chat-bar",
            children: [U.jsx("span", {
                children: "RaviTeja Bot"
            }), U.jsx("span", {
                children: "Ask me a question"
            }), U.jsx("button", {
                onClick: t,
                children: U.jsx(ki, {})
            })]
        }), U.jsxs("div", {
            className: "chat-container",
            children: [U.jsx("div", {
                className: "chat-container-message",
                children: h()
            }), U.jsx("div", {
                className: "chat-container-buttons",
                children: d()
            }), U.jsx("div", {
                ref: a
            })]
        })]
    })
}
export {Gl as default};
