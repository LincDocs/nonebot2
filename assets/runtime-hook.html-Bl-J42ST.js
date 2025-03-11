import{_ as e,e as t,f as a,g as h,h as s,i as l,j as k,r as p,o as r}from"./app-DlBE6PBf.js";const d={};function o(A,i){const n=p("RouteLink");return r(),t("div",null,[i[3]||(i[3]=a('<h1 id="钩子函数" tabindex="-1"><a class="header-anchor" href="#钩子函数"><span>钩子函数</span></a></h1><blockquote><p><a href="https://zh.wikipedia.org/wiki/%E9%92%A9%E5%AD%90%E7%BC%96%E7%A8%8B" target="_blank" rel="noopener noreferrer">钩子编程</a>（hooking），也称作“挂钩”，是计算机程序设计术语，指通过拦截软件模块间的函数调用、消息传递、事件传递来修改或扩展操作系统、应用程序或其他软件组件的行为的各种技术。处理被拦截的函数调用、事件、消息的代码，被称为钩子（hook）。</p></blockquote><p>在 NoneBot 中有一系列预定义的钩子函数，可以分为两类：<strong>全局钩子函数</strong>和<strong>事件处理钩子函数</strong>，这些钩子函数可以用装饰器的形式来使用。</p><h2 id="全局钩子函数" tabindex="-1"><a class="header-anchor" href="#全局钩子函数"><span>全局钩子函数</span></a></h2><p>全局钩子函数是指 NoneBot 针对其本身运行过程的钩子函数。</p>',5)),h("p",null,[i[1]||(i[1]=s("这些钩子函数是由驱动器来运行的，故需要先")),l(n,{to:"/version-2.4.0/advanced/driver.html#%E8%8E%B7%E5%8F%96%E9%A9%B1%E5%8A%A8%E5%99%A8"},{default:k(()=>i[0]||(i[0]=[s("获得全局驱动器")])),_:1}),i[2]||(i[2]=s("。"))]),i[4]||(i[4]=a(`<h3 id="启动准备" tabindex="-1"><a class="header-anchor" href="#启动准备"><span>启动准备</span></a></h3><p>这个钩子函数会在 NoneBot 启动时运行。很多时候，我们并不希望在模块被导入时就执行一些耗时操作，如：连接数据库，这时候我们可以在这个钩子函数中进行这些操作。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> get_driver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> get_driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@driver</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_startup</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="终止处理" tabindex="-1"><a class="header-anchor" href="#终止处理"><span>终止处理</span></a></h3><p>这个钩子函数会在 NoneBot 终止时运行。我们可以在这个钩子函数中进行一些清理工作，如：关闭数据库连接。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> get_driver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> get_driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@driver</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_shutdown</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bot-连接处理" tabindex="-1"><a class="header-anchor" href="#bot-连接处理"><span>Bot 连接处理</span></a></h3><p>这个钩子函数会在任何协议适配器连接 <code>Bot</code> 对象至 NoneBot 时运行。支持依赖注入，可以直接注入 <code>Bot</code> 对象。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> get_driver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> get_driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@driver</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_bot_connect</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bot-断开处理" tabindex="-1"><a class="header-anchor" href="#bot-断开处理"><span>Bot 断开处理</span></a></h3><p>这个钩子函数会在 <code>Bot</code> 断开与 NoneBot 的连接时运行。支持依赖注入，可以直接注入 <code>Bot</code> 对象。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> get_driver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> get_driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@driver</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_bot_disconnect</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件处理钩子函数" tabindex="-1"><a class="header-anchor" href="#事件处理钩子函数"><span>事件处理钩子函数</span></a></h2><p>这些钩子函数指的是影响 NoneBot 进行<strong>事件处理</strong>的函数, 这些函数可以跟普通的事件处理函数一样接受相应的参数。</p><h3 id="事件预处理" tabindex="-1"><a class="header-anchor" href="#事件预处理"><span>事件预处理</span></a></h3><p>这个钩子函数会在 NoneBot 接收到新的事件时运行。支持依赖注入，可以注入 <code>Bot</code> 对象、事件、会话状态。在这个钩子函数内抛出 <code>nonebot.exception.IgnoredException</code> 会使 NoneBot 忽略该事件。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.exception </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> IgnoredException</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.message </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> event_preprocessor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@event_preprocessor</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> event.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">is_tome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> IgnoredException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;some reason&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件后处理" tabindex="-1"><a class="header-anchor" href="#事件后处理"><span>事件后处理</span></a></h3><p>这个钩子函数会在 NoneBot 处理事件完成后运行。支持依赖注入，可以注入 <code>Bot</code> 对象、事件、会话状态。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.message </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> event_postprocessor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@event_postprocessor</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行预处理" tabindex="-1"><a class="header-anchor" href="#运行预处理"><span>运行预处理</span></a></h3><p>这个钩子函数会在 NoneBot 运行事件响应器前运行。支持依赖注入，可以注入 <code>Bot</code> 对象、事件、事件响应器、会话状态。在这个钩子函数内抛出 <code>nonebot.exception.IgnoredException</code> 也会使 NoneBot 忽略本次运行。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.message </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> run_preprocessor</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.exception </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> IgnoredException</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@run_preprocessor</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> event.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">is_tome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> IgnoredException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;some reason&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行后处理" tabindex="-1"><a class="header-anchor" href="#运行后处理"><span>运行后处理</span></a></h3><p>这个钩子函数会在 NoneBot 运行事件响应器后运行。支持依赖注入，可以注入 <code>Bot</code> 对象、事件、事件响应器、会话状态、运行中产生的异常。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.message </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> run_postprocessor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@run_postprocessor</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> do_something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Matcher</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Optional[</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">Exception</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平台接口调用钩子" tabindex="-1"><a class="header-anchor" href="#平台接口调用钩子"><span>平台接口调用钩子</span></a></h3><p>这个钩子函数会在 <code>Bot</code> 对象调用平台接口时运行。在这个钩子函数中，我们可以通过引起 <code>MockApiException</code> 异常来阻止 <code>Bot</code> 对象调用平台接口并返回指定的结果。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.adapters </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Bot</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.exception </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MockApiException</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@Bot</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_calling_api</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handle_api_call</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> api</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Dict[</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">, Any]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> api </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;send_msg&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> MockApiException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">result</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="平台接口调用后钩子" tabindex="-1"><a class="header-anchor" href="#平台接口调用后钩子"><span>平台接口调用后钩子</span></a></h3><p>这个钩子函数会在 <code>Bot</code> 对象调用平台接口后运行。在这个钩子函数中，我们可以通过引起 <code>MockApiException</code> 异常来忽略平台接口返回的结果并返回指定的结果。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.adapters </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Bot</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> nonebot.exception </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MockApiException</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@Bot</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on_called_api</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handle_api_result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">    bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Optional[</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">Exception</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> api</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Dict[</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">, Any]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> Any</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> exception </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> api </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;send_msg&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> MockApiException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">result</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">**</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">result, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32))])}const g=e(d,[["render",o],["__file","runtime-hook.html.vue"]]),c=JSON.parse('{"path":"/version-2.4.0/advanced/runtime-hook.html","title":"钩子函数","lang":"zh-CN","frontmatter":{"sidebar_position":8,"description":"在特定的生命周期中执行代码","options":{"menu":[{"category":"advanced","weight":90}]},"head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.0/advanced/runtime-hook.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"钩子函数"}],["meta",{"property":"og:description","content":"在特定的生命周期中执行代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"钩子函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":3.54,"words":1063},"filePathRelative":"version-2.4.0/advanced/runtime-hook.md","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://zh.wikipedia.org/wiki/%E9%92%A9%E5%AD%90%E7%BC%96%E7%A8%8B\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">钩子编程</a>（hooking），也称作“挂钩”，是计算机程序设计术语，指通过拦截软件模块间的函数调用、消息传递、事件传递来修改或扩展操作系统、应用程序或其他软件组件的行为的各种技术。处理被拦截的函数调用、事件、消息的代码，被称为钩子（hook）。</p>\\n</blockquote>\\n<p>在 NoneBot 中有一系列预定义的钩子函数，可以分为两类：<strong>全局钩子函数</strong>和<strong>事件处理钩子函数</strong>，这些钩子函数可以用装饰器的形式来使用。</p>","bioChainData":{"outlink":[{"title":"driver","link":"version-2.4.0/advanced/driver.html"}],"backlink":[],"localMap":{"nodes":[{"id":"version-2.4.0/advanced/runtime-hook.md","value":{"title":"runtime-hook","path":"version-2.4.0/advanced/runtime-hook.md","outlink":["version-2.4.0/advanced/driver.md"],"backlink":[]}},{"id":"version-2.4.0/advanced/driver.md","value":{"title":"driver","path":"version-2.4.0/advanced/driver.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.0/advanced/runtime-hook.md","target":"version-2.4.0/advanced/driver.md"}]}}}');export{g as comp,c as data};
