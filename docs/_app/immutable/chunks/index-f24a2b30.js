function T(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(P)}function K(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return T;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(U(n,e))}function ht(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,u){if(r){const s=D(n,e,i,u);t.p(s,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){const n={};for(const e in t)n[e]=!0;return n}let w=!1;function V(){w=!0}function X(){w=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Y(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[c],f)}}function tt(t,n){if(w){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){w&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function vt(){return A("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){G(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function $t(t,n,e){return z(t,n,e,O)}function Nt(t,n,e){return z(t,n,e,q)}function rt(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Tt(t){return rt(t," ")}function j(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t,n){const e=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",e);if(e===i)return new H(void 0,n);G(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(u,n)}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n){t.value=n==null?"":n}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function jt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function Ht(t,n,e){t.classList[e?"add":"remove"](n)}function st(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class ct{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=q(e.nodeName):this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class H extends ct{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function Lt(t){S().$$.on_mount.push(t)}function Bt(t){S().$$.after_update.push(t)}function Pt(){const t=S();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=st(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],L=[],x=[],B=[],F=Promise.resolve();let $=!1;function R(){$||($=!0,F.then(W))}function Dt(){return R(),F}function N(t){x.push(t)}const E=new Set;let y=0;function W(){const t=m;do{for(;y<d.length;){const n=d[y];y++,h(n),lt(n.$$)}for(h(null),d.length=0,y=0;L.length;)L.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];E.has(e)||(E.add(e),e())}x.length=0}while(d.length);for(;B.length;)B.pop()();$=!1,E.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const b=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function qt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Gt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function It(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(n,e),i||N(()=>{const c=u.map(P).filter(K);s?s.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(N)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,u,s,o=[-1]){const c=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:T,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,g,...k)=>{const C=k.length?k[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&ft(t,a)),g}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){V();const a=it(n.target);l.fragment&&l.fragment.l(a),a.forEach(v)}else l.fragment&&l.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),X(),W()}h(c)}class Rt{$destroy(){at(this,1),this.$destroy=T}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{T as A,ht as B,q as C,Nt as D,tt as E,pt as F,gt as G,mt as H,dt as I,xt as J,Ht as K,yt as L,Pt as M,jt as N,wt as O,p as P,N as Q,Mt as R,Rt as S,kt as T,H as U,At as V,L as W,bt as a,et as b,Tt as c,qt as d,vt as e,ot as f,Ot as g,v as h,Ft as i,Bt as j,O as k,$t as l,it as m,Et as n,Lt as o,Ct as p,A as q,rt as r,_t as s,Gt as t,St as u,It as v,zt as w,ut as x,at as y,Dt as z};
