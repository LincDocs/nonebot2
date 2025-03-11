import{_ as r,e as p,f as o,g as e,h as i,i as s,j as t,r as a,o as d}from"./app-DlBE6PBf.js";const u={};function k(g,l){const n=a("RouteLink");return d(),p("div",null,[l[61]||(l[61]=o(`<h1 id="nonebot-drivers-aiohttp" tabindex="-1"><a class="header-anchor" href="#nonebot-drivers-aiohttp"><span>nonebot.drivers.aiohttp</span></a></h1><p><a href="https://aiohttp.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">AIOHTTP</a> 驱动适配器。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> aiohttp</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot2[aiohttp]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本驱动仅支持客户端连接</p></div><h2 id="Session" tabindex="-1"><a class="header-anchor" href="#Session"><span><em>class</em> <code>Session(params=None, headers=None, cookies=None, version=HTTPVersion.H11, timeout=None, proxy=None)</code></span></a></h2>`,5)),e("ul",null,[e("li",null,[l[9]||(l[9]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[l[4]||(l[4]=e("li",null,[e("p",null,[e("code",null,"params"),i(" (QueryTypes)")])],-1)),l[5]||(l[5]=e("li",null,[e("p",null,[e("code",null,"headers"),i(" (HeaderTypes)")])],-1)),l[6]||(l[6]=e("li",null,[e("p",null,[e("code",null,"cookies"),i(" (CookieTypes)")])],-1)),e("li",null,[e("p",null,[l[1]||(l[1]=e("code",null,"version",-1)),l[2]||(l[2]=i(" (str | ")),s(n,{to:"/version-2.4.0/api/drivers/#HTTPVersion"},{default:t(()=>l[0]||(l[0]=[i("HTTPVersion")])),_:1}),l[3]||(l[3]=i(")"))])]),l[7]||(l[7]=e("li",null,[e("p",null,[e("code",null,"timeout"),i(" (float | None)")])],-1)),l[8]||(l[8]=e("li",null,[e("p",null,[e("code",null,"proxy"),i(" (str | None)")])],-1))])])]),l[62]||(l[62]=e("h3",{id:"Session-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Session-request"},[e("span",null,[e("em",null,"async method"),i(),e("code",null,"request(setup)")])])],-1)),e("ul",null,[e("li",null,[l[14]||(l[14]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[l[11]||(l[11]=e("code",null,"setup",-1)),l[12]||(l[12]=i(" (")),s(n,{to:"/version-2.4.0/api/drivers/#Request"},{default:t(()=>l[10]||(l[10]=[i("Request")])),_:1}),l[13]||(l[13]=i(")"))])])]),e("li",null,[l[16]||(l[16]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[s(n,{to:"/version-2.4.0/api/drivers/#Response"},{default:t(()=>l[15]||(l[15]=[i("Response")])),_:1})])])])]),l[63]||(l[63]=o('<h3 id="Session-setup" tabindex="-1"><a class="header-anchor" href="#Session-setup"><span><em>async method</em> <code>setup()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Session-close" tabindex="-1"><a class="header-anchor" href="#Session-close"><span><em>async method</em> <code>close()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="Mixin" tabindex="-1"><a class="header-anchor" href="#Mixin"><span><em>class</em> <code>Mixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> AIOHTTP Mixin</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="Mixin-request" tabindex="-1"><a class="header-anchor" href="#Mixin-request"><span><em>async method</em> <code>request(setup)</code></span></a></h3>',7)),e("ul",null,[e("li",null,[l[21]||(l[21]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[l[18]||(l[18]=e("code",null,"setup",-1)),l[19]||(l[19]=i(" (")),s(n,{to:"/version-2.4.0/api/drivers/#Request"},{default:t(()=>l[17]||(l[17]=[i("Request")])),_:1}),l[20]||(l[20]=i(")"))])])]),e("li",null,[l[23]||(l[23]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[s(n,{to:"/version-2.4.0/api/drivers/#Response"},{default:t(()=>l[22]||(l[22]=[i("Response")])),_:1})])])])]),l[64]||(l[64]=e("h3",{id:"Mixin-websocket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Mixin-websocket"},[e("span",null,[e("em",null,"method"),i(),e("code",null,"websocket(setup)")])])],-1)),e("ul",null,[e("li",null,[l[28]||(l[28]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[l[25]||(l[25]=e("code",null,"setup",-1)),l[26]||(l[26]=i(" (")),s(n,{to:"/version-2.4.0/api/drivers/#Request"},{default:t(()=>l[24]||(l[24]=[i("Request")])),_:1}),l[27]||(l[27]=i(")"))])])]),e("li",null,[l[32]||(l[32]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[l[30]||(l[30]=i("AsyncGenerator[")),s(n,{to:"/version-2.4.0/api/drivers/#WebSocket"},{default:t(()=>l[29]||(l[29]=[i("WebSocket")])),_:1}),l[31]||(l[31]=i(", None]"))])])])]),l[65]||(l[65]=e("h3",{id:"Mixin-get-session",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Mixin-get-session"},[e("span",null,[e("em",null,"method"),i(),e("code",null,"get_session(params=None, headers=None, cookies=None, version=HTTPVersion.H11, timeout=None, proxy=None)")])])],-1)),e("ul",null,[e("li",null,[l[42]||(l[42]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[l[37]||(l[37]=e("li",null,[e("p",null,[e("code",null,"params"),i(" (QueryTypes)")])],-1)),l[38]||(l[38]=e("li",null,[e("p",null,[e("code",null,"headers"),i(" (HeaderTypes)")])],-1)),l[39]||(l[39]=e("li",null,[e("p",null,[e("code",null,"cookies"),i(" (CookieTypes)")])],-1)),e("li",null,[e("p",null,[l[34]||(l[34]=e("code",null,"version",-1)),l[35]||(l[35]=i(" (str | ")),s(n,{to:"/version-2.4.0/api/drivers/#HTTPVersion"},{default:t(()=>l[33]||(l[33]=[i("HTTPVersion")])),_:1}),l[36]||(l[36]=i(")"))])]),l[40]||(l[40]=e("li",null,[e("p",null,[e("code",null,"timeout"),i(" (float | None)")])],-1)),l[41]||(l[41]=e("li",null,[e("p",null,[e("code",null,"proxy"),i(" (str | None)")])],-1))])]),l[43]||(l[43]=e("li",null,[e("p",null,[e("strong",null,"返回")]),e("ul",null,[e("li",null,"Session")])],-1))]),l[66]||(l[66]=e("h2",{id:"WebSocket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#WebSocket"},[e("span",null,[e("em",null,"class"),i(),e("code",null,"WebSocket(*, request, session, websocket)")])])],-1)),e("ul",null,[l[51]||(l[51]=e("li",null,[e("p",null,[e("strong",null,"说明:"),i(" AIOHTTP Websocket Wrapper")])],-1)),e("li",null,[l[50]||(l[50]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[e("p",null,[l[45]||(l[45]=e("code",null,"request",-1)),l[46]||(l[46]=i(" (")),s(n,{to:"/version-2.4.0/api/drivers/#Request"},{default:t(()=>l[44]||(l[44]=[i("Request")])),_:1}),l[47]||(l[47]=i(")"))])]),l[48]||(l[48]=e("li",null,[e("p",null,[e("code",null,"session"),i(" (aiohttp.ClientSession)")])],-1)),l[49]||(l[49]=e("li",null,[e("p",null,[e("code",null,"websocket"),i(" (aiohttp.ClientWebSocketResponse)")])],-1))])])]),l[67]||(l[67]=o('<h3 id="WebSocket-accept" tabindex="-1"><a class="header-anchor" href="#WebSocket-accept"><span><em>async method</em> <code>accept()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h3 id="WebSocket-close" tabindex="-1"><a class="header-anchor" href="#WebSocket-close"><span><em>async method</em> <code>close(code=1000, reason=&quot;&quot;)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>code</code> (int)</p></li><li><p><code>reason</code> (str)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h3 id="WebSocket-receive" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive"><span><em>async method</em> <code>receive()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str</li></ul></li></ul><h3 id="WebSocket-receive-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-text"><span><em>async method</em> <code>receive_text()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str</li></ul></li></ul><h3 id="WebSocket-receive-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-bytes"><span><em>async method</em> <code>receive_bytes()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>bytes</li></ul></li></ul><h3 id="WebSocket-send-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-text"><span><em>async method</em> <code>send_text(data)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>data</code> (str)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-send-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-bytes"><span><em>async method</em> <code>send_bytes(data)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>data</code> (bytes)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="Driver" tabindex="-1"><a class="header-anchor" href="#Driver"><span><em>class</em> <code>Driver(env, config)</code></span></a></h2>',15)),e("ul",null,[e("li",null,[l[60]||(l[60]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[e("p",null,[l[53]||(l[53]=e("code",null,"env",-1)),l[54]||(l[54]=i(" (")),s(n,{to:"/version-2.4.0/api/config.html#Env"},{default:t(()=>l[52]||(l[52]=[i("Env")])),_:1}),l[55]||(l[55]=i(")"))])]),e("li",null,[e("p",null,[l[57]||(l[57]=e("code",null,"config",-1)),l[58]||(l[58]=i(" (")),s(n,{to:"/version-2.4.0/api/config.html#Config"},{default:t(()=>l[56]||(l[56]=[i("Config")])),_:1}),l[59]||(l[59]=i(")"))])])])])])])}const m=r(u,[["render",k],["__file","aiohttp.html.vue"]]),v=JSON.parse('{"path":"/version-2.4.0/api/drivers/aiohttp.html","title":"nonebot.drivers.aiohttp","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":2,"description":"nonebot.drivers.aiohttp 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.0/api/drivers/aiohttp.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.drivers.aiohttp"}],["meta",{"property":"og:description","content":"nonebot.drivers.aiohttp 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.drivers.aiohttp\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"version-2.4.0/api/drivers/aiohttp.md","excerpt":"\\n<p><a href=\\"https://aiohttp.readthedocs.io/en/stable/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AIOHTTP</a> 驱动适配器。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nb</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> driver</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> aiohttp</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 或者</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pip</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nonebot2[aiohttp]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","bioChainData":{"outlink":[{"title":"index","link":"version-2.4.0/api/drivers/index.html"},{"title":"config","link":"version-2.4.0/api/config.html"}],"backlink":[],"localMap":{"nodes":[{"id":"version-2.4.0/api/drivers/aiohttp.md","value":{"title":"aiohttp","path":"version-2.4.0/api/drivers/aiohttp.md","outlink":["version-2.4.0/api/drivers/index.md","version-2.4.0/api/config.md"],"backlink":[]}},{"id":"version-2.4.0/api/drivers/index.md","value":{"title":"index","path":"version-2.4.0/api/drivers/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/config.md","value":{"title":"config","path":"version-2.4.0/api/config.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.0/api/drivers/aiohttp.md","target":"version-2.4.0/api/drivers/index.md"},{"source":"version-2.4.0/api/drivers/aiohttp.md","target":"version-2.4.0/api/config.md"}]}}}');export{m as comp,v as data};
