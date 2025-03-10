import{_ as t,e as o,f as n,o as a}from"./app-yjG2kzMn.js";const r={};function i(p,e){return a(),o("div",null,e[0]||(e[0]=[n('<h1 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h1><p>NoneBot2 是一个现代、跨平台、可扩展的 Python 聊天机器人框架（下称 NoneBot），它基于 Python 的类型注解和异步优先特性（兼容同步），能够为你的需求实现提供便捷灵活的支持。同时，NoneBot 拥有大量的开发者为其开发插件，用户无需编写任何代码，仅需完成环境配置及插件安装，就可以正常使用 NoneBot。</p><p>需要注意的是，NoneBot 仅支持 <strong>Python 3.9 以上版本</strong></p><h2 id="特色" tabindex="-1"><a class="header-anchor" href="#特色"><span>特色</span></a></h2><h3 id="异步优先" tabindex="-1"><a class="header-anchor" href="#异步优先"><span>异步优先</span></a></h3><p>NoneBot 基于 Python <a href="https://docs.python.org/zh-cn/3/library/asyncio.html" target="_blank" rel="noopener noreferrer">asyncio</a> / <a href="https://trio.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">trio</a> 编写，并在异步机制的基础上进行了一定程度的同步函数兼容。</p><h3 id="完整的类型注解" tabindex="-1"><a class="header-anchor" href="#完整的类型注解"><span>完整的类型注解</span></a></h3><p>NoneBot 参考 <a href="https://www.python.org/dev/peps/pep-0484/" target="_blank" rel="noopener noreferrer">PEP 484</a> 等 PEP 完整实现了类型注解，通过 Pyright（Pylance） 检查。配合编辑器的类型推导功能，能将绝大多数的 Bug 杜绝在编辑器中（<a href="./editor-support">编辑器支持</a>）。</p><h3 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用"><span>开箱即用</span></a></h3><p>NoneBot 提供了使用便捷、具有交互式功能的命令行工具--<code>nb-cli</code>，使得用户初次接触 NoneBot 时更容易上手。使用方法请阅读本文档<a href="./quick-start.mdx">指南</a>以及 <a href="https://cli.nonebot.dev/" target="_blank" rel="noopener noreferrer">CLI 文档</a>。</p><h3 id="插件系统" tabindex="-1"><a class="header-anchor" href="#插件系统"><span>插件系统</span></a></h3><p>插件系统是 NoneBot 的核心，通过它可以实现机器人的模块化以及功能扩展，便于维护和管理。</p><h3 id="依赖注入系统" tabindex="-1"><a class="header-anchor" href="#依赖注入系统"><span>依赖注入系统</span></a></h3><p>NoneBot 采用了一套自行定义的依赖注入系统，可以让事件的处理过程更加的简洁、清晰，增加代码的可读性，减少代码冗余。</p><h4 id="什么是依赖注入" tabindex="-1"><a class="header-anchor" href="#什么是依赖注入"><span>什么是依赖注入</span></a></h4><p><a href="https://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC" target="_blank" rel="noopener noreferrer"><strong>『依赖注入』</strong></a>意思是，在编程中，有一种方法可以让你的代码声明它工作和使用所需要的东西，即**『依赖』**。</p><p>系统（在这里是指 NoneBot）将负责做任何需要的事情，为你的代码提供这些必要依赖（即**『注入』**依赖性）</p><p>这在你有以下情形的需求时非常有用：</p><ul><li>这部分代码拥有共享的逻辑（同样的代码逻辑多次重复）</li><li>共享数据库以及网络请求连接会话 <ul><li>比如 <code>httpx.AsyncClient</code>、<code>aiohttp.ClientSession</code> 和 <code>sqlalchemy.Session</code></li></ul></li><li>机器人用户权限检查以及认证</li><li>还有更多...</li></ul><p>它在完成上述工作的同时，还能尽量减少代码的耦合和重复</p>',20)]))}const s=t(r,[["render",i],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/","title":"概览","lang":"zh-CN","frontmatter":{"sidebar_position":0,"id":"index","slug":"/","description":"概览 NoneBot2 是一个现代、跨平台、可扩展的 Python 聊天机器人框架（下称 NoneBot），它基于 Python 的类型注解和异步优先特性（兼容同步），能够为你的需求实现提供便捷灵活的支持。同时，NoneBot 拥有大量的开发者为其开发插件，用户无需编写任何代码，仅需完成环境配置及插件安装，就可以正常使用 NoneBot。 需要注意的是...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"概览"}],["meta",{"property":"og:description","content":"概览 NoneBot2 是一个现代、跨平台、可扩展的 Python 聊天机器人框架（下称 NoneBot），它基于 Python 的类型注解和异步优先特性（兼容同步），能够为你的需求实现提供便捷灵活的支持。同时，NoneBot 拥有大量的开发者为其开发插件，用户无需编写任何代码，仅需完成环境配置及插件安装，就可以正常使用 NoneBot。 需要注意的是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-02T12:43:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-02T12:43:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-02T12:43:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{"createdTime":1740919434000,"updatedTime":1740919434000,"contributors":[{"name":"Linc","username":"Linc","email":"762699299@qq.com","commits":1,"url":"https://github.com/Linc"}]},"readingTime":{"minutes":2.01,"words":603},"filePathRelative":"README.md","localizedDate":"2025年3月2日","excerpt":"\\n<p>NoneBot2 是一个现代、跨平台、可扩展的 Python 聊天机器人框架（下称 NoneBot），它基于 Python 的类型注解和异步优先特性（兼容同步），能够为你的需求实现提供便捷灵活的支持。同时，NoneBot 拥有大量的开发者为其开发插件，用户无需编写任何代码，仅需完成环境配置及插件安装，就可以正常使用 NoneBot。</p>\\n<p>需要注意的是，NoneBot 仅支持 <strong>Python 3.9 以上版本</strong></p>\\n<h2>特色</h2>\\n<h3>异步优先</h3>\\n<p>NoneBot 基于 Python <a href=\\"https://docs.python.org/zh-cn/3/library/asyncio.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">asyncio</a> / <a href=\\"https://trio.readthedocs.io/en/stable/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">trio</a> 编写，并在异步机制的基础上进行了一定程度的同步函数兼容。</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"README.md","value":{"title":"README","path":"README.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{s as comp,c as data};
