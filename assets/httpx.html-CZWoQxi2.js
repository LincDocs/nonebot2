import{_ as r,e as p,f as o,g as i,h as l,i as e,j as t,r as a,o as d}from"./app-DlBE6PBf.js";const u={};function h(k,n){const s=a("RouteLink");return d(),p("div",null,[n[44]||(n[44]=o(`<h1 id="nonebot-drivers-httpx" tabindex="-1"><a class="header-anchor" href="#nonebot-drivers-httpx"><span>nonebot.drivers.httpx</span></a></h1><p><a href="https://www.python-httpx.org/" target="_blank" rel="noopener noreferrer">HTTPX</a> 驱动适配</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> driver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> httpx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot2[httpx]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本驱动仅支持客户端 HTTP 连接</p></div><h2 id="Session" tabindex="-1"><a class="header-anchor" href="#Session"><span><em>class</em> <code>Session(params=None, headers=None, cookies=None, version=HTTPVersion.H11, timeout=None, proxy=None)</code></span></a></h2>`,5)),i("ul",null,[i("li",null,[n[9]||(n[9]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[n[4]||(n[4]=i("li",null,[i("p",null,[i("code",null,"params"),l(" (QueryTypes)")])],-1)),n[5]||(n[5]=i("li",null,[i("p",null,[i("code",null,"headers"),l(" (HeaderTypes)")])],-1)),n[6]||(n[6]=i("li",null,[i("p",null,[i("code",null,"cookies"),l(" (CookieTypes)")])],-1)),i("li",null,[i("p",null,[n[1]||(n[1]=i("code",null,"version",-1)),n[2]||(n[2]=l(" (str | ")),e(s,{to:"/version-2.4.1/api/drivers/#HTTPVersion"},{default:t(()=>n[0]||(n[0]=[l("HTTPVersion")])),_:1}),n[3]||(n[3]=l(")"))])]),n[7]||(n[7]=i("li",null,[i("p",null,[i("code",null,"timeout"),l(" (float | None)")])],-1)),n[8]||(n[8]=i("li",null,[i("p",null,[i("code",null,"proxy"),l(" (str | None)")])],-1))])])]),n[45]||(n[45]=i("h3",{id:"Session-request",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#Session-request"},[i("span",null,[i("em",null,"async method"),l(),i("code",null,"request(setup)")])])],-1)),i("ul",null,[i("li",null,[n[14]||(n[14]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[n[11]||(n[11]=i("code",null,"setup",-1)),n[12]||(n[12]=l(" (")),e(s,{to:"/version-2.4.1/api/drivers/#Request"},{default:t(()=>n[10]||(n[10]=[l("Request")])),_:1}),n[13]||(n[13]=l(")"))])])]),i("li",null,[n[16]||(n[16]=i("p",null,[i("strong",null,"返回")],-1)),i("ul",null,[i("li",null,[e(s,{to:"/version-2.4.1/api/drivers/#Response"},{default:t(()=>n[15]||(n[15]=[l("Response")])),_:1})])])])]),n[46]||(n[46]=o('<h3 id="Session-setup" tabindex="-1"><a class="header-anchor" href="#Session-setup"><span><em>async method</em> <code>setup()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Session-close" tabindex="-1"><a class="header-anchor" href="#Session-close"><span><em>async method</em> <code>close()</code></span></a></h3><ul><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="Mixin" tabindex="-1"><a class="header-anchor" href="#Mixin"><span><em>class</em> <code>Mixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> HTTPX Mixin</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="Mixin-request" tabindex="-1"><a class="header-anchor" href="#Mixin-request"><span><em>async method</em> <code>request(setup)</code></span></a></h3>',7)),i("ul",null,[i("li",null,[n[21]||(n[21]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[n[18]||(n[18]=i("code",null,"setup",-1)),n[19]||(n[19]=l(" (")),e(s,{to:"/version-2.4.1/api/drivers/#Request"},{default:t(()=>n[17]||(n[17]=[l("Request")])),_:1}),n[20]||(n[20]=l(")"))])])]),i("li",null,[n[23]||(n[23]=i("p",null,[i("strong",null,"返回")],-1)),i("ul",null,[i("li",null,[e(s,{to:"/version-2.4.1/api/drivers/#Response"},{default:t(()=>n[22]||(n[22]=[l("Response")])),_:1})])])])]),n[47]||(n[47]=i("h3",{id:"Mixin-get-session",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#Mixin-get-session"},[i("span",null,[i("em",null,"method"),l(),i("code",null,"get_session(params=None, headers=None, cookies=None, version=HTTPVersion.H11, timeout=None, proxy=None)")])])],-1)),i("ul",null,[i("li",null,[n[33]||(n[33]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[n[28]||(n[28]=i("li",null,[i("p",null,[i("code",null,"params"),l(" (QueryTypes)")])],-1)),n[29]||(n[29]=i("li",null,[i("p",null,[i("code",null,"headers"),l(" (HeaderTypes)")])],-1)),n[30]||(n[30]=i("li",null,[i("p",null,[i("code",null,"cookies"),l(" (CookieTypes)")])],-1)),i("li",null,[i("p",null,[n[25]||(n[25]=i("code",null,"version",-1)),n[26]||(n[26]=l(" (str | ")),e(s,{to:"/version-2.4.1/api/drivers/#HTTPVersion"},{default:t(()=>n[24]||(n[24]=[l("HTTPVersion")])),_:1}),n[27]||(n[27]=l(")"))])]),n[31]||(n[31]=i("li",null,[i("p",null,[i("code",null,"timeout"),l(" (float | None)")])],-1)),n[32]||(n[32]=i("li",null,[i("p",null,[i("code",null,"proxy"),l(" (str | None)")])],-1))])]),n[34]||(n[34]=i("li",null,[i("p",null,[i("strong",null,"返回")]),i("ul",null,[i("li",null,"Session")])],-1))]),n[48]||(n[48]=i("h2",{id:"Driver",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#Driver"},[i("span",null,[i("em",null,"class"),l(),i("code",null,"Driver(env, config)")])])],-1)),i("ul",null,[i("li",null,[n[43]||(n[43]=i("p",null,[i("strong",null,"参数")],-1)),i("ul",null,[i("li",null,[i("p",null,[n[36]||(n[36]=i("code",null,"env",-1)),n[37]||(n[37]=l(" (")),e(s,{to:"/version-2.4.1/api/config.html#Env"},{default:t(()=>n[35]||(n[35]=[l("Env")])),_:1}),n[38]||(n[38]=l(")"))])]),i("li",null,[i("p",null,[n[40]||(n[40]=i("code",null,"config",-1)),n[41]||(n[41]=l(" (")),e(s,{to:"/version-2.4.1/api/config.html#Config"},{default:t(()=>n[39]||(n[39]=[l("Config")])),_:1}),n[42]||(n[42]=l(")"))])])])])])])}const g=r(u,[["render",h],["__file","httpx.html.vue"]]),m=JSON.parse('{"path":"/version-2.4.1/api/drivers/httpx.html","title":"nonebot.drivers.httpx","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":3,"description":"nonebot.drivers.httpx 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.1/api/drivers/httpx.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.drivers.httpx"}],["meta",{"property":"og:description","content":"nonebot.drivers.httpx 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.drivers.httpx\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"version-2.4.1/api/drivers/httpx.md","excerpt":"\\n<p><a href=\\"https://www.python-httpx.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HTTPX</a> 驱动适配</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">nb</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> driver</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> httpx</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 或者</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pip</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> nonebot2[httpx]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","bioChainData":{"outlink":[{"title":"index","link":"version-2.4.1/api/drivers/index.html"},{"title":"config","link":"version-2.4.1/api/config.html"}],"backlink":[],"localMap":{"nodes":[{"id":"version-2.4.1/api/drivers/httpx.md","value":{"title":"httpx","path":"version-2.4.1/api/drivers/httpx.md","outlink":["version-2.4.1/api/drivers/index.md","version-2.4.1/api/config.md"],"backlink":[]}},{"id":"version-2.4.1/api/drivers/index.md","value":{"title":"index","path":"version-2.4.1/api/drivers/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/config.md","value":{"title":"config","path":"version-2.4.1/api/config.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.1/api/drivers/httpx.md","target":"version-2.4.1/api/drivers/index.md"},{"source":"version-2.4.1/api/drivers/httpx.md","target":"version-2.4.1/api/config.md"}]}}}');export{g as comp,m as data};
