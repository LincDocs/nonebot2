import{_ as o,e as s,f as a,g as i,h as n,i as t,j as r,r as p,o as d}from"./app-DlBE6PBf.js";const m={};function u(g,e){const l=p("RouteLink");return d(),s("div",null,[e[15]||(e[15]=a('<h1 id="nonebot-typing" tabindex="-1"><a class="header-anchor" href="#nonebot-typing"><span>nonebot.typing</span></a></h1><p>本模块定义了 NoneBot 模块中共享的一些类型。</p><p>使用 Python 的 Type Hint 语法，<br> 参考 <a href="https://www.python.org/dev/peps/pep-0484/" target="_blank" rel="noopener noreferrer"><code>PEP 484</code></a>,<br><a href="https://www.python.org/dev/peps/pep-0526/" target="_blank" rel="noopener noreferrer"><code>PEP 526</code></a> 和<br><a href="https://docs.python.org/3/library/typing.html" target="_blank" rel="noopener noreferrer"><code>typing</code></a>。</p><h2 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides"><span><em>def</em> <code>overrides(InterfaceClass)</code></span></a></h2><ul><li><p><strong>说明:</strong> 标记一个方法为父类 interface 的 implement</p></li><li><p><strong>参数</strong></p><ul><li><code>InterfaceClass</code> (object)</li></ul></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h2 id="type-has-args" tabindex="-1"><a class="header-anchor" href="#type-has-args"><span><em>def</em> <code>type_has_args(type_)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><code>type_</code> (type[Any])</li></ul></li><li><p><strong>返回</strong></p><ul><li>bool</li></ul></li></ul><h2 id="origin-is-union" tabindex="-1"><a class="header-anchor" href="#origin-is-union"><span><em>def</em> <code>origin_is_union(origin)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><code>origin</code> (type[Any] | None)</li></ul></li><li><p><strong>返回</strong></p><ul><li>bool</li></ul></li></ul><h2 id="origin-is-literal" tabindex="-1"><a class="header-anchor" href="#origin-is-literal"><span><em>def</em> <code>origin_is_literal(origin)</code></span></a></h2><ul><li><p><strong>说明:</strong> 判断是否是 Literal 类型</p></li><li><p><strong>参数</strong></p><ul><li><code>origin</code> (type[Any] | None)</li></ul></li><li><p><strong>返回</strong></p><ul><li>bool</li></ul></li></ul><h2 id="all-literal-values" tabindex="-1"><a class="header-anchor" href="#all-literal-values"><span><em>def</em> <code>all_literal_values(type_)</code></span></a></h2><ul><li><p><strong>说明:</strong> 获取 Literal 类型包含的所有值</p></li><li><p><strong>参数</strong></p><ul><li><code>type_</code> (type[Any])</li></ul></li><li><p><strong>返回</strong></p><ul><li>list[Any]</li></ul></li></ul><h2 id="origin-is-annotated" tabindex="-1"><a class="header-anchor" href="#origin-is-annotated"><span><em>def</em> <code>origin_is_annotated(origin)</code></span></a></h2><ul><li><p><strong>说明:</strong> 判断是否是 Annotated 类型</p></li><li><p><strong>参数</strong></p><ul><li><code>origin</code> (type[Any] | None)</li></ul></li><li><p><strong>返回</strong></p><ul><li>bool</li></ul></li></ul><h2 id="is-none-type" tabindex="-1"><a class="header-anchor" href="#is-none-type"><span><em>def</em> <code>is_none_type(type_)</code></span></a></h2><ul><li><p><strong>说明:</strong> 判断是否是 None 类型</p></li><li><p><strong>参数</strong></p><ul><li><code>type_</code> (type[Any])</li></ul></li><li><p><strong>返回</strong></p><ul><li>bool</li></ul></li></ul><h2 id="evaluate-forwardref" tabindex="-1"><a class="header-anchor" href="#evaluate-forwardref"><span><em>def</em> <code>evaluate_forwardref(ref, globalns, localns)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><p><code>ref</code> (ForwardRef)</p></li><li><p><code>globalns</code> (dict[str, Any])</p></li><li><p><code>localns</code> (dict[str, Any])</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>Any</li></ul></li></ul><h2 id="StateFlag" tabindex="-1"><a class="header-anchor" href="#StateFlag"><span><em>class</em> <code>StateFlag(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>参数</strong></p><p>auto</p></li></ul><h2 id="T-State" tabindex="-1"><a class="header-anchor" href="#T-State"><span><em>var</em> <code>T_State</code></span></a></h2><ul><li><p><strong>类型:</strong> dict[Any, Any]</p></li><li><p><strong>说明:</strong> 事件处理状态 State 类型</p></li></ul><h2 id="T-BotConnectionHook" tabindex="-1"><a class="header-anchor" href="#T-BotConnectionHook"><span><em>var</em> <code>T_BotConnectionHook</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>Bot 连接建立时钩子函数</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-BotDisconnectionHook" tabindex="-1"><a class="header-anchor" href="#T-BotDisconnectionHook"><span><em>var</em> <code>T_BotDisconnectionHook</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>Bot 连接断开时钩子函数</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-CallingAPIHook" tabindex="-1"><a class="header-anchor" href="#T-CallingAPIHook"><span><em>var</em> <code>T_CallingAPIHook</code></span></a></h2>',28)),i("ul",null,[i("li",null,[i("p",null,[e[1]||(e[1]=i("strong",null,"类型:",-1)),e[2]||(e[2]=n(" (")),t(l,{to:"/version-2.4.0/api/adapters/#Bot"},{default:r(()=>e[0]||(e[0]=[n("Bot")])),_:1}),e[3]||(e[3]=n(", str, dict[str, Any]) -> Awaitable[Any]"))])]),e[4]||(e[4]=i("li",null,[i("p",null,[i("strong",null,"说明:"),n(),i("code",null,"bot.call_api"),n(" 钩子函数")])],-1))]),e[16]||(e[16]=i("h2",{id:"T-CalledAPIHook",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#T-CalledAPIHook"},[i("span",null,[i("em",null,"var"),n(),i("code",null,"T_CalledAPIHook")])])],-1)),i("ul",null,[i("li",null,[i("p",null,[e[6]||(e[6]=i("strong",null,"类型:",-1)),e[7]||(e[7]=n(" (")),t(l,{to:"/version-2.4.0/api/adapters/#Bot"},{default:r(()=>e[5]||(e[5]=[n("Bot")])),_:1}),e[8]||(e[8]=n(", Exception | None, str, dict[str, Any], Any) -> Awaitable[Any]"))])]),e[9]||(e[9]=i("li",null,[i("p",null,[i("strong",null,"说明:"),n(),i("code",null,"bot.call_api"),n(" 后执行的函数，参数分别为 bot, exception, api, data, result")])],-1))]),e[17]||(e[17]=a('<h2 id="T-EventPreProcessor" tabindex="-1"><a class="header-anchor" href="#T-EventPreProcessor"><span><em>var</em> <code>T_EventPreProcessor</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>事件预处理函数 EventPreProcessor 类型</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-EventPostProcessor" tabindex="-1"><a class="header-anchor" href="#T-EventPostProcessor"><span><em>var</em> <code>T_EventPostProcessor</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>事件后处理函数 EventPostProcessor 类型</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-RunPreProcessor" tabindex="-1"><a class="header-anchor" href="#T-RunPreProcessor"><span><em>var</em> <code>T_RunPreProcessor</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>事件响应器运行前预处理函数 RunPreProcessor 类型</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>MatcherParam: Matcher 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-RunPostProcessor" tabindex="-1"><a class="header-anchor" href="#T-RunPostProcessor"><span><em>var</em> <code>T_RunPostProcessor</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明</strong></p><p>事件响应器运行后后处理函数 RunPostProcessor 类型</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>MatcherParam: Matcher 对象</li><li>ExceptionParam: 异常对象（可能为 None）</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-RuleChecker" tabindex="-1"><a class="header-anchor" href="#T-RuleChecker"><span><em>var</em> <code>T_RuleChecker</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[bool]</p></li><li><p><strong>说明</strong></p><p>RuleChecker 即判断是否响应事件的处理函数。</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-PermissionChecker" tabindex="-1"><a class="header-anchor" href="#T-PermissionChecker"><span><em>var</em> <code>T_PermissionChecker</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[bool]</p></li><li><p><strong>说明</strong></p><p>PermissionChecker 即判断事件是否满足权限的处理函数。</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-Handler" tabindex="-1"><a class="header-anchor" href="#T-Handler"><span><em>var</em> <code>T_Handler</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[Any]</p></li><li><p><strong>说明:</strong> Handler 处理函数。</p></li></ul><h2 id="T-TypeUpdater" tabindex="-1"><a class="header-anchor" href="#T-TypeUpdater"><span><em>var</em> <code>T_TypeUpdater</code></span></a></h2><ul><li><p><strong>类型:</strong> _DependentCallable[str]</p></li><li><p><strong>说明</strong></p><p>TypeUpdater 在 Matcher.pause, Matcher.reject 时被运行，用于更新响应的事件类型。 默认会更新为 <code>message</code>。</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>MatcherParam: Matcher 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li></ul><h2 id="T-PermissionUpdater" tabindex="-1"><a class="header-anchor" href="#T-PermissionUpdater"><span><em>var</em> <code>T_PermissionUpdater</code></span></a></h2>',17)),i("ul",null,[i("li",null,[i("p",null,[e[11]||(e[11]=i("strong",null,"类型:",-1)),e[12]||(e[12]=n(" _DependentCallable[")),t(l,{to:"/version-2.4.0/api/permission.html#Permission"},{default:r(()=>e[10]||(e[10]=[n("Permission")])),_:1}),e[13]||(e[13]=n("]"))])]),e[14]||(e[14]=a("<li><p><strong>说明</strong></p><p>PermissionUpdater 在 Matcher.pause, Matcher.reject 时被运行，用于更新会话对象权限。 默认会更新为当前事件的触发对象。</p><p>依赖参数:</p><ul><li>DependParam: 子依赖参数</li><li>BotParam: Bot 对象</li><li>EventParam: Event 对象</li><li>StateParam: State 对象</li><li>MatcherParam: Matcher 对象</li><li>DefaultParam: 带有默认值的参数</li></ul></li>",1))]),e[18]||(e[18]=i("h2",{id:"T-DependencyCache",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#T-DependencyCache"},[i("span",null,[i("em",null,"var"),n(),i("code",null,"T_DependencyCache")])])],-1)),e[19]||(e[19]=i("ul",null,[i("li",null,[i("p",null,[i("strong",null,"类型:"),n(" dict[_DependentCallable[Any], DependencyCache]")])]),i("li",null,[i("p",null,[i("strong",null,"说明:"),n(" 依赖缓存, 用于存储依赖函数的返回值")])])],-1))])}const h=o(m,[["render",u],["__file","typing.html.vue"]]),v=JSON.parse('{"path":"/version-2.4.0/api/typing.html","title":"nonebot.typing","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":11,"description":"nonebot.typing 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.0/api/typing.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.typing"}],["meta",{"property":"og:description","content":"nonebot.typing 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.typing\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"version-2.4.0/api/typing.md","excerpt":"\\n<p>本模块定义了 NoneBot 模块中共享的一些类型。</p>\\n<p>使用 Python 的 Type Hint 语法，<br>\\n参考 <a href=\\"https://www.python.org/dev/peps/pep-0484/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>PEP 484</code></a>,<br>\\n<a href=\\"https://www.python.org/dev/peps/pep-0526/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>PEP 526</code></a> 和<br>\\n<a href=\\"https://docs.python.org/3/library/typing.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>typing</code></a>。</p>","bioChainData":{"outlink":[{"title":"index","link":"version-2.4.0/api/adapters/index.html"},{"title":"permission","link":"version-2.4.0/api/permission.html"}],"backlink":[{"title":"matcher","link":"version-2.4.0/api/matcher.html"},{"title":"message","link":"version-2.4.0/api/message.html"},{"title":"params","link":"version-2.4.0/api/params.html"},{"title":"permission","link":"version-2.4.0/api/permission.html"},{"title":"rule","link":"version-2.4.0/api/rule.html"},{"title":"index","link":"version-2.4.0/api/adapters/index.html"},{"title":"index","link":"version-2.4.0/api/drivers/index.html"},{"title":"on","link":"version-2.4.0/api/plugin/on.html"}],"localMap":{"nodes":[{"id":"version-2.4.0/api/typing.md","value":{"title":"typing","path":"version-2.4.0/api/typing.md","outlink":["version-2.4.0/api/adapters/index.md","version-2.4.0/api/permission.md"],"backlink":["version-2.4.0/api/matcher.md","version-2.4.0/api/message.md","version-2.4.0/api/params.md","version-2.4.0/api/permission.md","version-2.4.0/api/rule.md","version-2.4.0/api/adapters/index.md","version-2.4.0/api/drivers/index.md","version-2.4.0/api/plugin/on.md"]}},{"id":"version-2.4.0/api/adapters/index.md","value":{"title":"index","path":"version-2.4.0/api/adapters/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/permission.md","value":{"title":"permission","path":"version-2.4.0/api/permission.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/matcher.md","value":{"title":"matcher","path":"version-2.4.0/api/matcher.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/message.md","value":{"title":"message","path":"version-2.4.0/api/message.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/params.md","value":{"title":"params","path":"version-2.4.0/api/params.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/rule.md","value":{"title":"rule","path":"version-2.4.0/api/rule.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/drivers/index.md","value":{"title":"index","path":"version-2.4.0/api/drivers/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.0/api/plugin/on.md","value":{"title":"on","path":"version-2.4.0/api/plugin/on.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.0/api/typing.md","target":"version-2.4.0/api/adapters/index.md"},{"source":"version-2.4.0/api/typing.md","target":"version-2.4.0/api/permission.md"},{"source":"version-2.4.0/api/matcher.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/message.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/params.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/permission.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/rule.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/adapters/index.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/drivers/index.md","target":"version-2.4.0/api/typing.md"},{"source":"version-2.4.0/api/plugin/on.md","target":"version-2.4.0/api/typing.md"}]}}}');export{h as comp,v as data};
