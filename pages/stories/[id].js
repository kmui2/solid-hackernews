import{t as e,f as t,b as n,i,a as s,m as r,k as o,S as c,F as l,o as m,n as a}from"../../web-94d6e719.js";import{L as d}from"../../solid-app-router-fedbe7ad.js";const u=e('<div class="toggle"><a></a></div>',4),g=e('<ul class="comment-children"></ul>',2),h=e('<li class="comment"><div class="by"> \x3c!----\x3e ago</div><div class="text"></div></li>',7);function x(e){const[t,a]=n(!0);return(()=>{const n=h.cloneNode(!0),f=n.firstChild,b=f.firstChild,v=b.nextSibling,p=(v.nextSibling,f.nextSibling);return i(f,s(d,{get href(){return"users/"+e.comment.user},get children(){return e.comment.user}}),b),i(f,(()=>e.comment.time_ago),v),i(n,s(c,{get when(){return e.comment.comments.length},get children(){return[(()=>{const n=u.cloneNode(!0),s=n.firstChild;return s.__click=()=>a(!t()),i(s,(()=>{const n=r((()=>!!t()),!0);return()=>{return n()?"[-]":"[+] "+((t=e.comment.comments.length)+(1===t?" reply":" replies")+" collapsed");var t}})()),o((e=>m(n,{open:t()},e))),n})(),s(c,{get when(){return t()},get children(){const t=g.cloneNode(!0);return i(t,s(l,{get each(){return e.comment.comments},children:e=>s(x,{comment:e})})),t}})]}}),null),o((()=>p.innerHTML=e.comment.content)),n})()}t(["click"]);const f=e('<div class="item-view"><div class="item-view-header"><a target="_blank"><h1></h1></a><span v-if="item.url" class="host">(\x3c!----\x3e)</span><p class="meta"> points | by \x3c!----\x3e \x3c!----\x3e ago</p></div><div class="item-view-comments"><p class="item-view-comments-header"></p><ul class="comment-children"></ul></div></div>',21);function b(e){return s(c,{get when(){return e.story},get children(){const t=f.cloneNode(!0),n=t.firstChild,r=n.firstChild,c=r.firstChild,m=r.nextSibling,u=m.firstChild.nextSibling,g=(u.nextSibling,m.nextSibling),h=g.firstChild,b=h.nextSibling,v=b.nextSibling.nextSibling,p=(v.nextSibling,n.nextSibling.firstChild),y=p.nextSibling;return i(c,(()=>e.story.title)),i(m,(()=>e.story.domain),u),i(g,(()=>e.story.points),h),i(g,s(d,{get href(){return"users/"+e.story.user},get children(){return e.story.user}}),b),i(g,(()=>e.story.time_ago),v),i(p,(()=>e.story.comments_count?e.story.comments_count+" comments":"No comments yet.")),i(y,s(l,{get each(){return e.story.comments},children:e=>s(x,{comment:e})})),o((()=>a(r,"href",e.story.url))),t}})}export default b;
