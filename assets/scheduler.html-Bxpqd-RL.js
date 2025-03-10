import{_ as t,e as l,f as a,g as e,h as s,i as h,j as r,r as d,o as p}from"./app-yjG2kzMn.js";const k={};function o(c,i){const n=d("RouteLink");return p(),l("div",null,[i[13]||(i[13]=a('<h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h1><p><a href="https://apscheduler.readthedocs.io/en/3.x/" target="_blank" rel="noopener noreferrer">APScheduler</a> (Advanced Python Scheduler) 是一个 Python 第三方库，其强大的定时任务功能被广泛应用于各个场景。在 NoneBot 中，定时任务作为一个额外功能，依赖于基于 APScheduler 开发的 <a href="https://github.com/nonebot/plugin-apscheduler" target="_blank" rel="noopener noreferrer"><code>nonebot-plugin-apscheduler</code></a> 插件进行支持。</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件"><span>安装插件</span></a></h2><p>在使用前请先安装 <code>nonebot-plugin-apscheduler</code> 插件至项目环境中，可参考<a href="../tutorial/store.mdx#%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6">获取商店插件</a>来了解并选择安装插件的方式。如：</p><p>在<strong>项目目录</strong>下执行以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> plugin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot-plugin-apscheduler</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h2><p><code>nonebot-plugin-apscheduler</code> 本质上是对 <a href="https://apscheduler.readthedocs.io/en/3.x/" target="_blank" rel="noopener noreferrer">APScheduler</a> 进行了封装以适用于 NoneBot 开发，因此其使用方式与 APScheduler 本身并无显著区别。在此我们会简要介绍其调用方法，更多的使用方面的功能请参考<a href="https://apscheduler.readthedocs.io/en/3.x/userguide.html" target="_blank" rel="noopener noreferrer">APScheduler 官方文档</a>。</p><h3 id="导入调度器" tabindex="-1"><a class="header-anchor" href="#导入调度器"><span>导入调度器</span></a></h3>',9)),e("p",null,[i[1]||(i[1]=s("由于 ")),i[2]||(i[2]=e("code",null,"nonebot_plugin_apscheduler",-1)),i[3]||(i[3]=s(" 作为插件，因此需要在使用前对其进行")),i[4]||(i[4]=e("strong",null,"加载",-1)),i[5]||(i[5]=s("并")),i[6]||(i[6]=e("strong",null,"导入",-1)),i[7]||(i[7]=s("其中的 ")),i[8]||(i[8]=e("code",null,"scheduler",-1)),i[9]||(i[9]=s(" 调度器来创建定时任务。使用 ")),i[10]||(i[10]=e("code",null,"require",-1)),i[11]||(i[11]=s(" 方法可轻松完成这一过程，可参考 ")),h(n,{to:"/advanced/requiring.html"},{default:r(()=>i[0]||(i[0]=[s("跨插件访问")])),_:1}),i[12]||(i[12]=s(" 一节进行了解。"))]),i[14]||(i[14]=a(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> require</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;nonebot_plugin_apscheduler&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot_plugin_apscheduler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> scheduler</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加定时任务" tabindex="-1"><a class="header-anchor" href="#添加定时任务"><span>添加定时任务</span></a></h3><p>在 <a href="https://apscheduler.readthedocs.io/en/3.x/userguide.html#adding-jobs" target="_blank" rel="noopener noreferrer">APScheduler 官方文档</a> 中提供了以下两种直接添加任务的方式：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> require</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;nonebot_plugin_apscheduler&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot_plugin_apscheduler </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> scheduler</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基于装饰器的方式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@scheduler</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scheduled_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cron&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> hour</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*/2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;job_0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> args</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> kwargs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">{arg2: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> run_every_2_hour</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">arg1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> arg2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基于 add_job 方法的方式</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> run_every_day</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">arg1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> arg2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">scheduler.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">add_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    run_every_day, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;interval&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">days</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;job_1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">kwargs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{arg2: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">注意</p><p>由于 APScheduler 的定时任务并不是<strong>由事件响应器所触发的事件</strong>，因此其任务函数无法同<a href="../tutorial/handler.mdx#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0">事件处理函数</a>一样通过<a href="../tutorial/event-data.mdx#%E8%AE%A4%E8%AF%86%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5">依赖注入</a>获取上下文信息，也无法通过事件响应器对象的方法进行任何操作，因此我们需要使用<a href="../appendices/api-calling.mdx#%E8%B0%83%E7%94%A8%E5%B9%B3%E5%8F%B0-api">调用平台 API</a>的方式来获取信息或收发消息。</p><p>相对于事件处理依赖而言，编写定时任务更像是编写普通的函数，需要我们自行获取信息以及发送信息，请<strong>不要</strong>将事件处理依赖的特殊语法用于定时任务！</p></div><p>关于 APScheduler 的更多使用方法，可以参考 <a href="https://apscheduler.readthedocs.io/en/3.x/index.html" target="_blank" rel="noopener noreferrer">APScheduler 官方文档</a> 进行了解。</p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3><h4 id="apscheduler-autostart" tabindex="-1"><a class="header-anchor" href="#apscheduler-autostart"><span>apscheduler_autostart</span></a></h4><ul><li><strong>类型</strong>: <code>bool</code></li><li><strong>默认值</strong>: <code>True</code></li></ul><p>是否自动启动 <code>scheduler</code> ，若不启动需要自行调用 <code>scheduler.start()</code>。</p><h4 id="apscheduler-log-level" tabindex="-1"><a class="header-anchor" href="#apscheduler-log-level"><span>apscheduler_log_level</span></a></h4><ul><li><strong>类型</strong>: <code>int</code></li><li><strong>默认值</strong>: <code>30</code></li></ul><p>apscheduler 输出的日志等级</p><ul><li><code>WARNING</code> = <code>30</code> (默认)</li><li><code>INFO</code> = <code>20</code></li><li><code>DEBUG</code> = <code>10</code> (只有在开启 nonebot 的 debug 模式才会显示 debug 日志)</li></ul><h4 id="apscheduler-config" tabindex="-1"><a class="header-anchor" href="#apscheduler-config"><span>apscheduler_config</span></a></h4><ul><li><strong>类型</strong>: <code>dict</code></li><li><strong>默认值</strong>: <code>{ &quot;apscheduler.timezone&quot;: &quot;Asia/Shanghai&quot; }</code></li></ul><p><code>apscheduler</code> 的相关配置。参考<a href="https://apscheduler.readthedocs.io/en/latest/userguide.html#scheduler-config" target="_blank" rel="noopener noreferrer">配置调度器</a>, <a href="https://apscheduler.readthedocs.io/en/latest/modules/schedulers/base.html#apscheduler.schedulers.base.BaseScheduler" target="_blank" rel="noopener noreferrer">配置参数</a></p><p>配置需要包含 <code>apscheduler.</code> 作为前缀，例如 <code>apscheduler.timezone</code>。</p>`,18))])}const u=t(k,[["render",o],["__file","scheduler.html.vue"]]),A=JSON.parse('{"path":"/best-practice/scheduler.html","title":"定时任务","lang":"zh-CN","frontmatter":{"sidebar_position":0,"description":"定时执行任务","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/best-practice/scheduler.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"定时任务"}],["meta",{"property":"og:description","content":"定时执行任务"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定时任务\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"best-practice/scheduler.md","excerpt":"\\n<p><a href=\\"https://apscheduler.readthedocs.io/en/3.x/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">APScheduler</a> (Advanced Python Scheduler) 是一个 Python 第三方库，其强大的定时任务功能被广泛应用于各个场景。在 NoneBot 中，定时任务作为一个额外功能，依赖于基于 APScheduler 开发的 <a href=\\"https://github.com/nonebot/plugin-apscheduler\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>nonebot-plugin-apscheduler</code></a> 插件进行支持。</p>","bioChainData":{"outlink":[{"title":"requiring","link":"advanced/requiring.html"}],"backlink":[{"title":"requiring","link":"advanced/requiring.html"}],"localMap":{"nodes":[{"id":"best-practice/scheduler.md","value":{"title":"scheduler","path":"best-practice/scheduler.md","outlink":["advanced/requiring.md"],"backlink":["advanced/requiring.md"]}},{"id":"advanced/requiring.md","value":{"title":"requiring","path":"advanced/requiring.md","outlink":[],"backlink":[]}}],"links":[{"source":"best-practice/scheduler.md","target":"advanced/requiring.md"},{"source":"advanced/requiring.md","target":"best-practice/scheduler.md"}]}}}');export{u as comp,A as data};
