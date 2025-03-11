import{_ as r,e as s,f as l,g as e,h as a,i as t,j as o,r as p,o as d}from"./app-DlBE6PBf.js";const u={};function g(m,n){const i=p("RouteLink");return d(),s("div",null,[n[15]||(n[15]=l('<h1 id="nonebot-plugin-model" tabindex="-1"><a class="header-anchor" href="#nonebot-plugin-model"><span>nonebot.plugin.model</span></a></h1><p>本模块定义插件相关信息。</p><h2 id="PluginMetadata" tabindex="-1"><a class="header-anchor" href="#PluginMetadata"><span><em>class</em> <code>PluginMetadata(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 插件元信息，由插件编写者提供</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="PluginMetadata-name" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-name"><span><em>instance-var</em> <code>name</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 插件名称</p></li></ul><h3 id="PluginMetadata-description" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-description"><span><em>instance-var</em> <code>description</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 插件功能介绍</p></li></ul><h3 id="PluginMetadata-usage" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-usage"><span><em>instance-var</em> <code>usage</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 插件使用方法</p></li></ul><h3 id="PluginMetadata-type" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-type"><span><em>class-var</em> <code>type</code></span></a></h3><ul><li><p><strong>类型:</strong> str | None</p></li><li><p><strong>说明:</strong> 插件类型，用于商店分类</p></li></ul><h3 id="PluginMetadata-homepage" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-homepage"><span><em>class-var</em> <code>homepage</code></span></a></h3><ul><li><p><strong>类型:</strong> str | None</p></li><li><p><strong>说明:</strong> 插件主页</p></li></ul><h3 id="PluginMetadata-config" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-config"><span><em>class-var</em> <code>config</code></span></a></h3><ul><li><p><strong>类型:</strong> type[BaseModel] | None</p></li><li><p><strong>说明:</strong> 插件配置项</p></li></ul><h3 id="PluginMetadata-supported-adapters" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-supported-adapters"><span><em>class-var</em> <code>supported_adapters</code></span></a></h3><ul><li><p><strong>类型:</strong> set[str] | None</p></li><li><p><strong>说明</strong></p><p>插件支持的适配器模块路径</p><p>格式为 <code>&lt;module&gt;[:&lt;Adapter&gt;]</code>，<code>~</code> 为 <code>nonebot.adapters.</code> 的缩写。</p><p><code>None</code> 表示支持<strong>所有适配器</strong>。</p></li></ul><h3 id="PluginMetadata-extra" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-extra"><span><em>class-var</em> <code>extra</code></span></a></h3><ul><li><p><strong>类型:</strong> dict[Any, Any]</p></li><li><p><strong>说明:</strong> 插件额外信息，可由插件编写者自由扩展定义</p></li></ul><h3 id="PluginMetadata-get-supported-adapters" tabindex="-1"><a class="header-anchor" href="#PluginMetadata-get-supported-adapters"><span><em>method</em> <code>get_supported_adapters()</code></span></a></h3>',21)),e("ul",null,[n[4]||(n[4]=e("li",null,[e("p",null,[e("strong",null,"说明:"),a(" 获取当前已安装的插件支持适配器类列表")])],-1)),n[5]||(n[5]=e("li",null,[e("p",null,[e("strong",null,"参数")]),e("p",null,"empty")],-1)),e("li",null,[n[3]||(n[3]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[n[1]||(n[1]=a("set[type[")),t(i,{to:"/version-2.3.3/api/adapters/#Adapter"},{default:o(()=>n[0]||(n[0]=[a("Adapter")])),_:1}),n[2]||(n[2]=a("]] | None"))])])])]),n[16]||(n[16]=l('<h2 id="Plugin" tabindex="-1"><a class="header-anchor" href="#Plugin"><span><em>class</em> <code>Plugin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 存储插件信息</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="Plugin-name" tabindex="-1"><a class="header-anchor" href="#Plugin-name"><span><em>instance-var</em> <code>name</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 插件名称，NoneBot 使用 文件/文件夹 名称作为插件名称</p></li></ul><h3 id="Plugin-module" tabindex="-1"><a class="header-anchor" href="#Plugin-module"><span><em>instance-var</em> <code>module</code></span></a></h3><ul><li><p><strong>类型:</strong> ModuleType</p></li><li><p><strong>说明:</strong> 插件模块对象</p></li></ul><h3 id="Plugin-module-name" tabindex="-1"><a class="header-anchor" href="#Plugin-module-name"><span><em>instance-var</em> <code>module_name</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 点分割模块路径</p></li></ul><h3 id="Plugin-manager" tabindex="-1"><a class="header-anchor" href="#Plugin-manager"><span><em>instance-var</em> <code>manager</code></span></a></h3>',9)),e("ul",null,[e("li",null,[e("p",null,[n[7]||(n[7]=e("strong",null,"类型:",-1)),n[8]||(n[8]=a()),t(i,{to:"/version-2.3.3/api/plugin/manager.html#PluginManager"},{default:o(()=>n[6]||(n[6]=[a("PluginManager")])),_:1})])]),n[9]||(n[9]=e("li",null,[e("p",null,[e("strong",null,"说明:"),a(" 导入该插件的插件管理器")])],-1))]),n[17]||(n[17]=e("h3",{id:"Plugin-matcher",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Plugin-matcher"},[e("span",null,[e("em",null,"class-var"),a(),e("code",null,"matcher")])])],-1)),e("ul",null,[e("li",null,[e("p",null,[n[11]||(n[11]=e("strong",null,"类型:",-1)),n[12]||(n[12]=a(" set[type[")),t(i,{to:"/version-2.3.3/api/matcher.html#Matcher"},{default:o(()=>n[10]||(n[10]=[a("Matcher")])),_:1}),n[13]||(n[13]=a("]]"))])]),n[14]||(n[14]=e("li",null,[e("p",null,[e("strong",null,"说明:"),a(" 插件加载时定义的 "),e("code",null,"Matcher")])],-1))]),n[18]||(n[18]=l('<h3 id="Plugin-parent-plugin" tabindex="-1"><a class="header-anchor" href="#Plugin-parent-plugin"><span><em>class-var</em> <code>parent_plugin</code></span></a></h3><ul><li><p><strong>类型:</strong> Plugin | None</p></li><li><p><strong>说明:</strong> 父插件</p></li></ul><h3 id="Plugin-sub-plugins" tabindex="-1"><a class="header-anchor" href="#Plugin-sub-plugins"><span><em>class-var</em> <code>sub_plugins</code></span></a></h3><ul><li><p><strong>类型:</strong> set[Plugin]</p></li><li><p><strong>说明:</strong> 子插件集合</p></li></ul><h3 id="Plugin-id-" tabindex="-1"><a class="header-anchor" href="#Plugin-id-"><span><em>property</em> <code>id_</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 插件索引标识</p></li></ul>',6))])}const c=r(u,[["render",g],["__file","model.html.vue"]]),v=JSON.parse('{"path":"/version-2.3.3/api/plugin/model.html","title":"nonebot.plugin.model","lang":"zh-CN","frontmatter":{"sidebar_position":3,"description":"nonebot.plugin.model 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.3.3/api/plugin/model.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.plugin.model"}],["meta",{"property":"og:description","content":"nonebot.plugin.model 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.plugin.model\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"version-2.3.3/api/plugin/model.md","excerpt":"\\n<p>本模块定义插件相关信息。</p>\\n<h2><em>class</em> <code>PluginMetadata(&lt;auto&gt;)</code></h2>\\n<ul>\\n<li>\\n<p><strong>说明:</strong> 插件元信息，由插件编写者提供</p>\\n</li>\\n<li>\\n<p><strong>参数</strong></p>\\n<p>auto</p>\\n</li>\\n</ul>\\n<h3><em>instance-var</em> <code>name</code></h3>\\n<ul>\\n<li>\\n<p><strong>类型:</strong> str</p>\\n</li>\\n<li>\\n<p><strong>说明:</strong> 插件名称</p>\\n</li>\\n</ul>","bioChainData":{"outlink":[{"title":"index","link":"version-2.3.3/api/adapters/index.html"},{"title":"manager","link":"version-2.3.3/api/plugin/manager.html"},{"title":"matcher","link":"version-2.3.3/api/matcher.html"}],"backlink":[{"title":"plugin-info","link":"version-2.3.3/advanced/plugin-info.html"},{"title":"matcher","link":"version-2.3.3/api/matcher.html"},{"title":"index","link":"version-2.3.3/api/plugin/index.html"},{"title":"load","link":"version-2.3.3/api/plugin/load.html"},{"title":"manager","link":"version-2.3.3/api/plugin/manager.html"},{"title":"on","link":"version-2.3.3/api/plugin/on.html"}],"localMap":{"nodes":[{"id":"version-2.3.3/api/plugin/model.md","value":{"title":"model","path":"version-2.3.3/api/plugin/model.md","outlink":["version-2.3.3/api/adapters/index.md","version-2.3.3/api/plugin/manager.md","version-2.3.3/api/matcher.md"],"backlink":["version-2.3.3/advanced/plugin-info.md","version-2.3.3/api/matcher.md","version-2.3.3/api/plugin/index.md","version-2.3.3/api/plugin/load.md","version-2.3.3/api/plugin/manager.md","version-2.3.3/api/plugin/on.md"]}},{"id":"version-2.3.3/api/adapters/index.md","value":{"title":"index","path":"version-2.3.3/api/adapters/index.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/plugin/manager.md","value":{"title":"manager","path":"version-2.3.3/api/plugin/manager.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/matcher.md","value":{"title":"matcher","path":"version-2.3.3/api/matcher.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/advanced/plugin-info.md","value":{"title":"plugin-info","path":"version-2.3.3/advanced/plugin-info.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/plugin/index.md","value":{"title":"index","path":"version-2.3.3/api/plugin/index.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/plugin/load.md","value":{"title":"load","path":"version-2.3.3/api/plugin/load.md","outlink":[],"backlink":[]}},{"id":"version-2.3.3/api/plugin/on.md","value":{"title":"on","path":"version-2.3.3/api/plugin/on.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.3.3/api/plugin/model.md","target":"version-2.3.3/api/adapters/index.md"},{"source":"version-2.3.3/api/plugin/model.md","target":"version-2.3.3/api/plugin/manager.md"},{"source":"version-2.3.3/api/plugin/model.md","target":"version-2.3.3/api/matcher.md"},{"source":"version-2.3.3/advanced/plugin-info.md","target":"version-2.3.3/api/plugin/model.md"},{"source":"version-2.3.3/api/matcher.md","target":"version-2.3.3/api/plugin/model.md"},{"source":"version-2.3.3/api/plugin/index.md","target":"version-2.3.3/api/plugin/model.md"},{"source":"version-2.3.3/api/plugin/load.md","target":"version-2.3.3/api/plugin/model.md"},{"source":"version-2.3.3/api/plugin/manager.md","target":"version-2.3.3/api/plugin/model.md"},{"source":"version-2.3.3/api/plugin/on.md","target":"version-2.3.3/api/plugin/model.md"}]}}}');export{c as comp,v as data};
