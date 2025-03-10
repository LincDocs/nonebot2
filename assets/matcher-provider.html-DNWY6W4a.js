import{_ as e,e as s,f as a,o as t}from"./app-yjG2kzMn.js";const n={};function r(h,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="事件响应器存储" tabindex="-1"><a class="header-anchor" href="#事件响应器存储"><span>事件响应器存储</span></a></h1><p>事件响应器是 NoneBot 处理事件的核心，它们默认存储在一个字典中。在进入会话状态后，事件响应器将会转为临时响应器，作为最高优先级同样存储于该字典中。因此，事件响应器的存储类似于会话存储，它决定了整个 NoneBot 对事件的处理行为。</p><p>NoneBot 默认使用 Python 的字典将事件响应器存储于内存中，但是我们也可以自定义事件响应器存储，将事件响应器存储于其他地方，例如 Redis 等。这样我们就可以实现持久化、在多实例间共享会话状态等功能。</p><h2 id="编写存储提供者" tabindex="-1"><a class="header-anchor" href="#编写存储提供者"><span>编写存储提供者</span></a></h2><p>事件响应器的存储提供者 <code>MatcherProvider</code> 抽象类继承自 <code>MutableMapping[int, list[type[Matcher]]]</code>，即以优先级为键，以事件响应器列表为值的映射。我们可以方便地进行逐优先级事件传播。</p><p>编写一个自定义的存储提供者，只需要继承并实现 <code>MatcherProvider</code> 抽象类：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.matcher </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MatcherProvider</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CustomProvider</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">MatcherProvider</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">    ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置存储提供者" tabindex="-1"><a class="header-anchor" href="#设置存储提供者"><span>设置存储提供者</span></a></h2><p>我们可以通过 <code>matchers.set_provider</code> 方法设置存储提供者：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.matcher </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> matchers</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">matchers.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">set_provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(CustomProvider)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">assert</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(matchers.provider, CustomProvider)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const p=e(n,[["render",r],["__file","matcher-provider.html.vue"]]),d=JSON.parse('{"path":"/advanced/matcher-provider.html","title":"事件响应器存储","lang":"zh-CN","frontmatter":{"sidebar_position":10,"description":"自定义事件响应器存储","options":{"menu":[{"category":"advanced","weight":110}]},"head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/advanced/matcher-provider.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"事件响应器存储"}],["meta",{"property":"og:description","content":"自定义事件响应器存储"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件响应器存储\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.13,"words":339},"filePathRelative":"advanced/matcher-provider.md","excerpt":"\\n<p>事件响应器是 NoneBot 处理事件的核心，它们默认存储在一个字典中。在进入会话状态后，事件响应器将会转为临时响应器，作为最高优先级同样存储于该字典中。因此，事件响应器的存储类似于会话存储，它决定了整个 NoneBot 对事件的处理行为。</p>\\n<p>NoneBot 默认使用 Python 的字典将事件响应器存储于内存中，但是我们也可以自定义事件响应器存储，将事件响应器存储于其他地方，例如 Redis 等。这样我们就可以实现持久化、在多实例间共享会话状态等功能。</p>\\n<h2>编写存储提供者</h2>\\n<p>事件响应器的存储提供者 <code>MatcherProvider</code> 抽象类继承自 <code>MutableMapping[int, list[type[Matcher]]]</code>，即以优先级为键，以事件响应器列表为值的映射。我们可以方便地进行逐优先级事件传播。</p>","bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"advanced/matcher-provider.md","value":{"title":"matcher-provider","path":"advanced/matcher-provider.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,d as data};
