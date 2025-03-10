import{_ as h,e as l,g as s,f as p,h as a,i as e,j as t,r as k,o as d}from"./app-yjG2kzMn.js";const r={};function o(g,i){const n=k("RouteLink");return d(),l("div",null,[i[7]||(i[7]=s("h1",{id:"会话更新",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#会话更新"},[s("span",null,"会话更新")])],-1)),i[8]||(i[8]=s("p",null,"在 NoneBot 中，在某个事件响应器对事件响应后，即是进入了会话状态，会话状态会持续到整个事件响应流程结束。会话过程中，机器人可以与用户进行多次交互。每次需要等待用户事件时，NoneBot 将会复制一个新的临时事件响应器，并更新该事件响应器使其响应当前会话主体的消息，这个过程称为会话更新。",-1)),s("p",null,[i[5]||(i[5]=a("会话更新分为两部分：")),s("strong",null,[i[2]||(i[2]=a("更新")),e(n,{to:"/advanced/matcher.html#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94%E5%99%A8%E7%B1%BB%E5%9E%8B"},{default:t(()=>i[0]||(i[0]=[a("事件响应器类型")])),_:1}),i[3]||(i[3]=s("strong",null,"和",-1)),i[4]||(i[4]=a("更新")),e(n,{to:"/advanced/matcher.html#%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%E6%9D%83%E9%99%90"},{default:t(()=>i[1]||(i[1]=[a("事件触发权限")])),_:1})]),i[6]||(i[6]=a("。"))]),i[9]||(i[9]=p(`<h2 id="更新事件响应器类型" tabindex="-1"><a class="header-anchor" href="#更新事件响应器类型"><span>更新事件响应器类型</span></a></h2><p>通常情况下，与机器人用户进行的会话都是通过消息事件进行的，因此会话更新后的默认响应事件类型为 <code>message</code>。如果希望接收一个特定类型的消息，比如 <code>notice</code> 等，我们需要自定义响应事件类型更新函数。响应事件类型更新函数是一个 <code>Dependent</code>，可以使用依赖注入。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">foo </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> on_message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@foo</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">type_updater</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() -&gt; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;notice&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册了上述响应事件类型更新函数后，当我们需要等待用户事件时，将只会响应 <code>notice</code> 类型的事件。如果希望在会话过程中的不同阶段响应不同类型的事件，我们就需要使用更复杂的逻辑来更新响应事件类型（如：根据会话状态），这里将不再展示。</p><h2 id="更新事件触发权限" tabindex="-1"><a class="header-anchor" href="#更新事件触发权限"><span>更新事件触发权限</span></a></h2><p>会话通常是由机器人与用户进行的一对一交互，因此会话更新后的默认触发权限为当前事件的会话 ID。这个会话 ID 由协议适配器生成，通常由用户 ID 和群 ID 等组成。如果希望实现更复杂的会话功能（如：多用户同时参与的会话），我们需要自定义触发权限更新函数。触发权限更新函数是一个 <code>Dependent</code>，可以使用依赖注入。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> User</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">foo </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> on_message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@foo</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">permission_updater</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -&gt; Permission:</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Permission</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(User.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">from_event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(event, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">perm</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">matcher.permission))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述权限更新函数是默认的权限更新函数，它将会话的触发权限更新为当前事件的会话 ID。如果我们希望响应多个用户的消息，我们可以如下修改：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.permission </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> USER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">foo </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> on_message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@foo</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">permission_updater</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -&gt; Permission:</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> USER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;session1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;session2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">perm</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">matcher.permission)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，此处为全大写字母的 <code>USER</code> 权限，它可以匹配多个会话 ID。通过这种方式，我们可以实现多用户同时参与的会话。</p><p>我们已经了解了如何控制会话的更新，相信你已经能够实现更复杂的会话功能了，例如多人小游戏等等。欢迎将你的作品分享到<a href="/store/plugins" target="_blank" rel="noopener noreferrer">插件商店</a>。</p>`,11))])}const B=h(r,[["render",o],["__file","session-updating.html.vue"]]),c=JSON.parse('{"path":"/advanced/session-updating.html","title":"会话更新","lang":"zh-CN","frontmatter":{"sidebar_position":7,"description":"控制会话响应对象","options":{"menu":[{"category":"advanced","weight":80}]},"head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/advanced/session-updating.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"会话更新"}],["meta",{"property":"og:description","content":"控制会话响应对象"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"会话更新\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"advanced/session-updating.md","excerpt":"\\n<p>在 NoneBot 中，在某个事件响应器对事件响应后，即是进入了会话状态，会话状态会持续到整个事件响应流程结束。会话过程中，机器人可以与用户进行多次交互。每次需要等待用户事件时，NoneBot 将会复制一个新的临时事件响应器，并更新该事件响应器使其响应当前会话主体的消息，这个过程称为会话更新。</p>\\n<p>会话更新分为两部分：<strong>更新<a href=\\"/nonebot2/advanced/matcher.html#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94%E5%99%A8%E7%B1%BB%E5%9E%8B\\" target=\\"_blank\\">事件响应器类型</a><strong>和</strong>更新<a href=\\"/nonebot2/advanced/matcher.html#%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%E6%9D%83%E9%99%90\\" target=\\"_blank\\">事件触发权限</a></strong>。</p>","bioChainData":{"outlink":[{"title":"matcher","link":"advanced/matcher.html"}],"backlink":[],"localMap":{"nodes":[{"id":"advanced/session-updating.md","value":{"title":"session-updating","path":"advanced/session-updating.md","outlink":["advanced/matcher.md"],"backlink":[]}},{"id":"advanced/matcher.md","value":{"title":"matcher","path":"advanced/matcher.md","outlink":[],"backlink":[]}}],"links":[{"source":"advanced/session-updating.md","target":"advanced/matcher.md"}]}}}');export{B as comp,c as data};
