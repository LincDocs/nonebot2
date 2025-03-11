import{_ as r,e as a,f as o,g as i,h as s,i as t,j as l,r as d,o as p}from"./app-DlBE6PBf.js";const u={};function c(k,e){const n=d("RouteLink");return p(),a("div",null,[e[25]||(e[25]=o(`<h1 id="nonebot-drivers-websockets" tabindex="-1"><a class="header-anchor" href="#nonebot-drivers-websockets"><span>nonebot.drivers.websockets</span></a></h1><p><a href="https://websockets.readthedocs.io/" target="_blank" rel="noopener noreferrer">websockets</a> 驱动适配</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> websockets</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot2[websockets]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本驱动仅支持客户端 WebSocket 连接</p></div><h2 id="catch-closed" tabindex="-1"><a class="header-anchor" href="#catch-closed"><span><em>def</em> <code>catch_closed(func)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><code>func</code> ((P) -&gt; Coroutine[Any, Any, T])</li></ul></li><li><p><strong>返回</strong></p><ul><li>(P) -&gt; Coroutine[Any, Any, T]</li></ul></li></ul><h2 id="Mixin" tabindex="-1"><a class="header-anchor" href="#Mixin"><span><em>class</em> <code>Mixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> Websockets Mixin</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="Mixin-websocket" tabindex="-1"><a class="header-anchor" href="#Mixin-websocket"><span><em>method</em> <code>websocket(setup)</code></span></a></h3>`,9)),i("ul",null,[i("li",null,[e[4]||(e[4]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[e[1]||(e[1]=i("code",null,"setup",-1)),e[2]||(e[2]=s(" (")),t(n,{to:"/version-2.3.3/api/drivers/#Request"},{default:l(()=>e[0]||(e[0]=[s("Request")])),_:1}),e[3]||(e[3]=s(")"))])])]),i("li",null,[e[8]||(e[8]=i("p",null,[i("strong",null,"返回")],-1)),i("ul",null,[i("li",null,[e[6]||(e[6]=s("AsyncGenerator[")),t(n,{to:"/version-2.3.3/api/drivers/#WebSocket"},{default:l(()=>e[5]||(e[5]=[s("WebSocket")])),_:1}),e[7]||(e[7]=s(", None]"))])])])]),e[26]||(e[26]=i("h2",{id:"WebSocket",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#WebSocket"},[i("span",null,[i("em",null,"class"),s(),i("code",null,"WebSocket(*, request, websocket)")])])],-1)),i("ul",null,[e[15]||(e[15]=i("li",null,[i("p",null,[i("strong",null,"说明:"),s(" Websockets WebSocket Wrapper")])],-1)),i("li",null,[e[14]||(e[14]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[i("p",null,[e[10]||(e[10]=i("code",null,"request",-1)),e[11]||(e[11]=s(" (")),t(n,{to:"/version-2.3.3/api/drivers/#Request"},{default:l(()=>e[9]||(e[9]=[s("Request")])),_:1}),e[12]||(e[12]=s(")"))])]),e[13]||(e[13]=i("li",null,[i("p",null,[i("code",null,"websocket"),s(" (WebSocketClientProtocol)")])],-1))])])]),e[27]||(e[27]=o('<h3 id="WebSocket-accept" tabindex="-1"><a class="header-anchor" href="#WebSocket-accept"><span><em>async method</em> <code>accept()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h3 id="WebSocket-close" tabindex="-1"><a class="header-anchor" href="#WebSocket-close"><span><em>async method</em> <code>close(code=1000, reason=&quot;&quot;)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>code</code> (int)</p></li><li><p><code>reason</code> (str)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h3 id="WebSocket-receive" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive"><span><em>async method</em> <code>receive()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str | bytes</li></ul></li></ul><h3 id="WebSocket-receive-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-text"><span><em>async method</em> <code>receive_text()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str</li></ul></li></ul><h3 id="WebSocket-receive-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-bytes"><span><em>async method</em> <code>receive_bytes()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>bytes</li></ul></li></ul><h3 id="WebSocket-send-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-text"><span><em>async method</em> <code>send_text(data)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>data</code> (str)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-send-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-bytes"><span><em>async method</em> <code>send_bytes(data)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>data</code> (bytes)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="Driver" tabindex="-1"><a class="header-anchor" href="#Driver"><span><em>class</em> <code>Driver(env, config)</code></span></a></h2>',15)),i("ul",null,[i("li",null,[e[24]||(e[24]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[i("p",null,[e[17]||(e[17]=i("code",null,"env",-1)),e[18]||(e[18]=s(" (")),t(n,{to:"/version-2.3.3/api/config.html#Env"},{default:l(()=>e[16]||(e[16]=[s("Env")])),_:1}),e[19]||(e[19]=s(")"))])]),i("li",null,[i("p",null,[e[21]||(e[21]=i("code",null,"config",-1)),e[22]||(e[22]=s(" (")),t(n,{to:"/version-2.3.3/api/config.html#Config"},{default:l(()=>e[20]||(e[20]=[s("Config")])),_:1}),e[23]||(e[23]=s(")"))])])])])])])}const b=r(u,[["render",c],["__file","websockets.html.vue"]]),g=JSON.parse('{"path":"/version-2.3.3/api/drivers/websockets.html","title":"nonebot.drivers.websockets","lang":"zh-CN","frontmatter":{"sidebar_position":4,"description":"nonebot.drivers.websockets 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.3.3/api/drivers/websockets.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.drivers.websockets"}],["meta",{"property":"og:description","content":"nonebot.drivers.websockets 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.drivers.websockets\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.71,"words":214},"filePathRelative":"version-2.3.3/api/drivers/websockets.md","excerpt":"\\n<p><a href=\\"https://websockets.readthedocs.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">websockets</a> 驱动适配</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nb</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> driver</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> websockets</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 或者</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pip</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nonebot2[websockets]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","bioChainData":{"outlink":[{"title":"index","link":"version-2.3.3/api/drivers/index.html"},{"title":"config","link":"version-2.3.3/api/config.html"}],"backlink":[],"localMap":{"nodes":[{"id":"version-2.3.3/api/drivers/websockets.md","value":{"title":"websockets","path":"version-2.3.3/api/drivers/websockets.md","outlink":["version-2.3.3/api/drivers/index.md","version-2.3.3/api/config.md"],"backlink":[]}},{"id":"version-2.3.3/api/drivers/index.md","value":{"title":"index","path":"version-2.3.3/api/drivers/index.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/config.md","value":{"title":"config","path":"version-2.3.3/api/config.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.3.3/api/drivers/websockets.md","target":"version-2.3.3/api/drivers/index.md"},{"source":"version-2.3.3/api/drivers/websockets.md","target":"version-2.3.3/api/config.md"}]}}}');export{b as comp,g as data};
