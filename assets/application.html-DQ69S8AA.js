import{_ as s,e as a,f as n,o as t}from"./app-DlBE6PBf.js";const e={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="手动创建项目" tabindex="-1"><a class="header-anchor" href="#手动创建项目"><span>手动创建项目</span></a></h1><p>在<a href="../quick-start.mdx">快速上手</a>中，我们已经介绍了如何安装和使用 <code>nb-cli</code> 创建一个项目。在本章节中，我们将简要介绍如何在不使用 <code>nb-cli</code> 的方式创建一个机器人项目的<strong>最小实例</strong>并启动。如果你想要了解 NoneBot 的启动流程，也可以阅读本章节。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>我们十分不推荐直接创建机器人项目，请优先考虑使用 nb-cli 进行项目创建。</p></div><p>一个机器人项目的<strong>最小实例</strong>中<strong>至少</strong>需要包含以下内容:</p><ul><li>入口文件：初始化并运行机器人的 Python 文件</li><li>配置文件：存储机器人启动所需的配置</li><li>插件：为机器人提供具体的功能</li></ul><p>下面我们创建一个项目文件夹，来存放项目所需文件，以下步骤均在该文件夹中进行。</p><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><p>在创建项目前，我们首先需要将项目所需依赖安装至环境中。</p><ol><li><p>（可选）创建虚拟环境，以 venv 为例</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> venv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .venv</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prompt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># windows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">.venv\\Scripts\\activate</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># linux/macOS</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .venv/bin/activate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装 nonebot2 以及驱动器</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;nonebot2[fastapi]&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>驱动器包名可以在 <a href="/store/drivers" target="_blank" rel="noopener noreferrer">驱动器商店</a> 中找到。</p></li><li><p>安装适配器</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nonebot-adapter-console</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>适配器包名可以在 <a href="/store/adapters" target="_blank" rel="noopener noreferrer">适配器商店</a> 中找到。</p></li></ol><h2 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件"><span>创建配置文件</span></a></h2><p>配置文件用于存放 NoneBot 运行所需要的配置项，使用 <a href="https://docs.pydantic.dev/" target="_blank" rel="noopener noreferrer"><code>pydantic</code></a> 以及 <a href="https://saurabh-kumar.com/python-dotenv/" target="_blank" rel="noopener noreferrer"><code>python-dotenv</code></a> 来读取配置。配置项需符合 dotenv 格式，复杂类型数据需使用 JSON 格式填写。具体可选配置方式以及配置项详情参考<a href="../appendices/config.mdx">配置</a>。</p><p>在<strong>项目文件夹</strong>中创建一个 <code>.env</code> 文本文件，并写入以下内容:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">HOST</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">0.0.0.0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 配置 NoneBot 监听的 IP / 主机名</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PORT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">8080</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 配置 NoneBot 监听的端口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">COMMAND_START</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置命令起始字符</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">COMMAND_SEP</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[&quot;.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置命令分割字符</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建入口文件" tabindex="-1"><a class="header-anchor" href="#创建入口文件"><span>创建入口文件</span></a></h2><p>入口文件（ Entrypoint ）顾名思义，是用来初始化并运行机器人的 Python 文件。入口文件需要完成框架的初始化、注册适配器、加载插件等工作。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你使用 <code>nb-cli</code> 创建项目，入口文件不会被创建，该文件功能会被 <code>nb run</code> 命令代替。</p></div><p>在<strong>项目文件夹</strong>中创建一个 <code>bot.py</code> 文件，并写入以下内容:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.adapters.console </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Adapter </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ConsoleAdapter  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 避免重复命名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 初始化 NoneBot</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nonebot.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 注册适配器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">get_driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">register_adapter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(ConsoleAdapter)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在这里加载插件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nonebot.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">load_builtin_plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;echo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 内置插件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># nonebot.load_plugin(&quot;thirdparty_plugin&quot;)  # 第三方插件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># nonebot.load_plugins(&quot;awesome_bot/plugins&quot;)  # 本地插件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> __name__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;__main__&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    nonebot.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们暂时不需要了解其中内容的含义，这些将会在稍后的章节中逐一介绍。在创建完成以上文件并确认已安装所需适配器和插件后，即可运行机器人。</p><h2 id="运行机器人" tabindex="-1"><a class="header-anchor" href="#运行机器人"><span>运行机器人</span></a></h2><p>在<strong>项目文件夹</strong>中，使用配置好环境的 Python 解释器运行入口文件（如果使用虚拟环境，请先激活虚拟环境）:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bot.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你后续使用了 <code>nb-cli</code> ，你仍可以使用 <code>nb run</code> 命令来运行机器人，<code>nb-cli</code> 会自动检测入口文件 <code>bot.py</code> 是否存在并运行。</p>`,23)]))}const r=s(e,[["render",l],["__file","application.html.vue"]]),k=JSON.parse('{"path":"/version-2.3.3/tutorial/application.html","title":"手动创建项目","lang":"zh-CN","frontmatter":{"sidebar_position":0,"description":"创建一个 NoneBot 项目","options":{"menu":[{"category":"tutorial","weight":20}]},"head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.3.3/tutorial/application.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"手动创建项目"}],["meta",{"property":"og:description","content":"创建一个 NoneBot 项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手动创建项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":2.84,"words":852},"filePathRelative":"version-2.3.3/tutorial/application.md","excerpt":"\\n<p>在<a href=\\"../quick-start.mdx\\">快速上手</a>中，我们已经介绍了如何安装和使用 <code>nb-cli</code> 创建一个项目。在本章节中，我们将简要介绍如何在不使用 <code>nb-cli</code> 的方式创建一个机器人项目的<strong>最小实例</strong>并启动。如果你想要了解 NoneBot 的启动流程，也可以阅读本章节。</p>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p>我们十分不推荐直接创建机器人项目，请优先考虑使用 nb-cli 进行项目创建。</p>\\n</div>","bioChainData":{"outlink":[],"backlink":[{"title":"create-plugin","link":"version-2.3.3/tutorial/create-plugin.html"}],"localMap":{"nodes":[{"id":"version-2.3.3/tutorial/application.md","value":{"title":"application","path":"version-2.3.3/tutorial/application.md","outlink":[],"backlink":["version-2.3.3/tutorial/create-plugin.md"]}},{"id":"version-2.3.3/tutorial/create-plugin.md","value":{"title":"create-plugin","path":"version-2.3.3/tutorial/create-plugin.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.3.3/tutorial/create-plugin.md","target":"version-2.3.3/tutorial/application.md"}]}}}');export{r as comp,k as data};
