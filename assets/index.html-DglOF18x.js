import{_ as o,e as p,f as l,g as e,h as i,i as t,j as s,r,o as d}from"./app-DlBE6PBf.js";const c={};function m(u,n){const a=r("RouteLink");return d(),p("div",null,[n[5]||(n[5]=l('<h1 id="nonebot-dependencies" tabindex="-1"><a class="header-anchor" href="#nonebot-dependencies"><span>nonebot.dependencies</span></a></h1><p>本模块模块实现了依赖注入的定义与处理。</p><h2 id="Param" tabindex="-1"><a class="header-anchor" href="#Param"><span><em>abstract class</em> <code>Param(*args, validate=False, **kwargs)</code></span></a></h2><ul><li><p><strong>说明</strong></p><p>依赖注入的基本单元 —— 参数。</p><p>继承自 <code>pydantic.fields.FieldInfo</code>，用于描述参数信息（不包括参数名）。</p></li><li><p><strong>参数</strong></p><ul><li><p><code>*args</code></p></li><li><p><code>validate</code> (bool)</p></li><li><p><code>**kwargs</code> (Any)</p></li></ul></li></ul><h2 id="Dependent" tabindex="-1"><a class="header-anchor" href="#Dependent"><span><em>class</em> <code>Dependent(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 依赖注入容器</p></li><li><p><strong>参数</strong></p><ul><li><p><code>call</code>: 依赖注入的可调用对象，可以是任何 Callable 对象</p></li><li><p><code>pre_checkers</code>: 依赖注入解析前的参数检查</p></li><li><p><code>params</code>: 具名参数列表</p></li><li><p><code>parameterless</code>: 匿名参数列表</p></li><li><p><code>allow_types</code>: 允许的参数类型</p></li></ul></li></ul><h3 id="Dependent-parse-params" tabindex="-1"><a class="header-anchor" href="#Dependent-parse-params"><span><em>staticmethod</em> <code>parse_params(call, allow_types)</code></span></a></h3>',7)),e("ul",null,[n[4]||(n[4]=e("li",null,[e("p",null,[e("strong",null,"参数")]),e("ul",null,[e("li",null,[e("p",null,[e("code",null,"call"),i(" (_DependentCallable[R])")])]),e("li",null,[e("p",null,[e("code",null,"allow_types"),i(" (tuple[type[Param], ...])")])])])],-1)),e("li",null,[n[3]||(n[3]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[n[1]||(n[1]=i("tuple[")),t(a,{to:"/version-2.4.1/api/compat.html#ModelField"},{default:s(()=>n[0]||(n[0]=[i("ModelField")])),_:1}),n[2]||(n[2]=i(", ...]"))])])])]),n[6]||(n[6]=l('<h3 id="Dependent-parse-parameterless" tabindex="-1"><a class="header-anchor" href="#Dependent-parse-parameterless"><span><em>staticmethod</em> <code>parse_parameterless(parameterless, allow_types)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>parameterless</code> (tuple[Any, ...])</p></li><li><p><code>allow_types</code> (tuple[type[Param], ...])</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>tuple[Param, ...]</li></ul></li></ul><h3 id="Dependent-parse" tabindex="-1"><a class="header-anchor" href="#Dependent-parse"><span><em>classmethod</em> <code>parse(*, call, parameterless=None, allow_types)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>call</code> (_DependentCallable[R])</p></li><li><p><code>parameterless</code> (Iterable[Any] | None)</p></li><li><p><code>allow_types</code> (Iterable[type[Param]])</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>Dependent[R]</li></ul></li></ul><h3 id="Dependent-check" tabindex="-1"><a class="header-anchor" href="#Dependent-check"><span><em>async method</em> <code>check(**params)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>**params</code> (Any)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Dependent-solve" tabindex="-1"><a class="header-anchor" href="#Dependent-solve"><span><em>async method</em> <code>solve(**params)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>**params</code> (Any)</li></ul></li><li><p><strong>返回</strong></p><ul><li>dict[str, Any]</li></ul></li></ul>',8))])}const g=o(c,[["render",m],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/version-2.4.1/api/dependencies/","title":"nonebot.dependencies","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":0,"description":"nonebot.dependencies 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.1/api/dependencies/"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.dependencies"}],["meta",{"property":"og:description","content":"nonebot.dependencies 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.dependencies\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.81,"words":242},"filePathRelative":"version-2.4.1/api/dependencies/index.md","excerpt":"\\n<p>本模块模块实现了依赖注入的定义与处理。</p>\\n<h2><em>abstract class</em> <code>Param(*args, validate=False, **kwargs)</code></h2>\\n<ul>\\n<li>\\n<p><strong>说明</strong></p>\\n<p>依赖注入的基本单元 —— 参数。</p>\\n<p>继承自 <code>pydantic.fields.FieldInfo</code>，用于描述参数信息（不包括参数名）。</p>\\n</li>\\n<li>\\n<p><strong>参数</strong></p>\\n<ul>\\n<li>\\n<p><code>*args</code></p>\\n</li>\\n<li>\\n<p><code>validate</code> (bool)</p>\\n</li>\\n<li>\\n<p><code>**kwargs</code> (Any)</p>\\n</li>\\n</ul>\\n</li>\\n</ul>","bioChainData":{"outlink":[{"title":"compat","link":"version-2.4.1/api/compat.html"}],"backlink":[{"title":"matcher","link":"version-2.4.1/api/matcher.html"},{"title":"params","link":"version-2.4.1/api/params.html"},{"title":"permission","link":"version-2.4.1/api/permission.html"},{"title":"rule","link":"version-2.4.1/api/rule.html"},{"title":"on","link":"version-2.4.1/api/plugin/on.html"}],"localMap":{"nodes":[{"id":"version-2.4.1/api/dependencies/index.md","value":{"title":"index","path":"version-2.4.1/api/dependencies/index.md","outlink":["version-2.4.1/api/compat.md"],"backlink":["version-2.4.1/api/matcher.md","version-2.4.1/api/params.md","version-2.4.1/api/permission.md","version-2.4.1/api/rule.md","version-2.4.1/api/plugin/on.md"]}},{"id":"version-2.4.1/api/compat.md","value":{"title":"compat","path":"version-2.4.1/api/compat.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/matcher.md","value":{"title":"matcher","path":"version-2.4.1/api/matcher.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/params.md","value":{"title":"params","path":"version-2.4.1/api/params.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/permission.md","value":{"title":"permission","path":"version-2.4.1/api/permission.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/rule.md","value":{"title":"rule","path":"version-2.4.1/api/rule.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/plugin/on.md","value":{"title":"on","path":"version-2.4.1/api/plugin/on.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.1/api/dependencies/index.md","target":"version-2.4.1/api/compat.md"},{"source":"version-2.4.1/api/matcher.md","target":"version-2.4.1/api/dependencies/index.md"},{"source":"version-2.4.1/api/params.md","target":"version-2.4.1/api/dependencies/index.md"},{"source":"version-2.4.1/api/permission.md","target":"version-2.4.1/api/dependencies/index.md"},{"source":"version-2.4.1/api/rule.md","target":"version-2.4.1/api/dependencies/index.md"},{"source":"version-2.4.1/api/plugin/on.md","target":"version-2.4.1/api/dependencies/index.md"}]}}}');export{g as comp,v as data};
