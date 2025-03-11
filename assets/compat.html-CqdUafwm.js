import{_ as i,e as l,f as n,o}from"./app-DlBE6PBf.js";const t={};function a(d,e){return o(),l("div",null,e[0]||(e[0]=[n('<h1 id="nonebot-compat" tabindex="-1"><a class="header-anchor" href="#nonebot-compat"><span>nonebot.compat</span></a></h1><p>本模块为 Pydantic 版本兼容层模块</p><p>为兼容 Pydantic V1 与 V2 版本，定义了一系列兼容函数与类供使用。</p><h2 id="Required" tabindex="-1"><a class="header-anchor" href="#Required"><span><em>var</em> <code>Required</code></span></a></h2><ul><li><p><strong>类型:</strong> untyped</p></li><li><p><strong>说明:</strong> Alias of Ellipsis for compatibility with pydantic v1</p></li></ul><h2 id="PydanticUndefined" tabindex="-1"><a class="header-anchor" href="#PydanticUndefined"><span><em>library-attr</em> <code>PydanticUndefined</code></span></a></h2><ul><li><strong>说明:</strong> Pydantic Undefined object</li></ul><h2 id="PydanticUndefinedType" tabindex="-1"><a class="header-anchor" href="#PydanticUndefinedType"><span><em>library-attr</em> <code>PydanticUndefinedType</code></span></a></h2><ul><li><strong>说明:</strong> Pydantic Undefined type</li></ul><h2 id="DEFAULT-CONFIG" tabindex="-1"><a class="header-anchor" href="#DEFAULT-CONFIG"><span><em>var</em> <code>DEFAULT_CONFIG</code></span></a></h2><ul><li><p><strong>类型:</strong> untyped</p></li><li><p><strong>说明:</strong> Default config for validations</p></li></ul><h2 id="FieldInfo" tabindex="-1"><a class="header-anchor" href="#FieldInfo"><span><em>class</em> <code>FieldInfo(default=PydanticUndefined, **kwargs)</code></span></a></h2><ul><li><p><strong>说明:</strong> FieldInfo class with extra property for compatibility with pydantic v1</p></li><li><p><strong>参数</strong></p><ul><li><p><code>default</code> (Any)</p></li><li><p><code>**kwargs</code> (Any)</p></li></ul></li></ul><h3 id="FieldInfo-extra" tabindex="-1"><a class="header-anchor" href="#FieldInfo-extra"><span><em>property</em> <code>extra</code></span></a></h3><ul><li><p><strong>类型:</strong> dict[str, Any]</p></li><li><p><strong>说明</strong></p><p>Extra data that is not part of the standard pydantic fields.</p><p>For compatibility with pydantic v1.</p></li></ul><h2 id="ModelField" tabindex="-1"><a class="header-anchor" href="#ModelField"><span><em>class</em> <code>ModelField(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> ModelField class for compatibility with pydantic v1</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="ModelField-name" tabindex="-1"><a class="header-anchor" href="#ModelField-name"><span><em>instance-var</em> <code>name</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> The name of the field.</p></li></ul><h3 id="ModelField-annotation" tabindex="-1"><a class="header-anchor" href="#ModelField-annotation"><span><em>instance-var</em> <code>annotation</code></span></a></h3><ul><li><p><strong>类型:</strong> Any</p></li><li><p><strong>说明:</strong> The annotation of the field.</p></li></ul><h3 id="ModelField-field-info" tabindex="-1"><a class="header-anchor" href="#ModelField-field-info"><span><em>instance-var</em> <code>field_info</code></span></a></h3><ul><li><p><strong>类型:</strong> FieldInfo</p></li><li><p><strong>说明:</strong> The FieldInfo of the field.</p></li></ul><h3 id="ModelField-construct" tabindex="-1"><a class="header-anchor" href="#ModelField-construct"><span><em>classmethod</em> <code>construct(name, annotation, field_info=None)</code></span></a></h3><ul><li><p><strong>说明:</strong> Construct a ModelField from given infos.</p></li><li><p><strong>参数</strong></p><ul><li><p><code>name</code> (str)</p></li><li><p><code>annotation</code> (Any)</p></li><li><p><code>field_info</code> (FieldInfo | None)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>Self</li></ul></li></ul><h3 id="ModelField-get-default" tabindex="-1"><a class="header-anchor" href="#ModelField-get-default"><span><em>method</em> <code>get_default()</code></span></a></h3><ul><li><p><strong>说明:</strong> Get the default value of the field.</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>Any</li></ul></li></ul><h3 id="ModelField-validate-value" tabindex="-1"><a class="header-anchor" href="#ModelField-validate-value"><span><em>method</em> <code>validate_value(value)</code></span></a></h3><ul><li><p><strong>说明:</strong> Validate the value pass to the field.</p></li><li><p><strong>参数</strong></p><ul><li><code>value</code> (Any)</li></ul></li><li><p><strong>返回</strong></p><ul><li>Any</li></ul></li></ul><h2 id="extract-field-info" tabindex="-1"><a class="header-anchor" href="#extract-field-info"><span><em>def</em> <code>extract_field_info(field_info)</code></span></a></h2><ul><li><p><strong>说明:</strong> Get FieldInfo init kwargs from a FieldInfo instance.</p></li><li><p><strong>参数</strong></p><ul><li><code>field_info</code> (BaseFieldInfo)</li></ul></li><li><p><strong>返回</strong></p><ul><li>dict[str, Any]</li></ul></li></ul><h2 id="model-fields" tabindex="-1"><a class="header-anchor" href="#model-fields"><span><em>def</em> <code>model_fields(model)</code></span></a></h2><ul><li><p><strong>说明:</strong> Get field list of a model.</p></li><li><p><strong>参数</strong></p><ul><li><code>model</code> (type[BaseModel])</li></ul></li><li><p><strong>返回</strong></p><ul><li>list[ModelField]</li></ul></li></ul><h2 id="model-config" tabindex="-1"><a class="header-anchor" href="#model-config"><span><em>def</em> <code>model_config(model)</code></span></a></h2><ul><li><p><strong>说明:</strong> Get config of a model.</p></li><li><p><strong>参数</strong></p><ul><li><code>model</code> (type[BaseModel])</li></ul></li><li><p><strong>返回</strong></p><ul><li>Any</li></ul></li></ul><h2 id="model-dump" tabindex="-1"><a class="header-anchor" href="#model-dump"><span><em>def</em> <code>model_dump(model, include=None, exclude=None, by_alias=False, exclude_unset=False, exclude_defaults=False, exclude_none=False)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><p><code>model</code> (BaseModel)</p></li><li><p><code>include</code> (set[str] | None)</p></li><li><p><code>exclude</code> (set[str] | None)</p></li><li><p><code>by_alias</code> (bool)</p></li><li><p><code>exclude_unset</code> (bool)</p></li><li><p><code>exclude_defaults</code> (bool)</p></li><li><p><code>exclude_none</code> (bool)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>dict[str, Any]</li></ul></li></ul><h2 id="type-validate-python" tabindex="-1"><a class="header-anchor" href="#type-validate-python"><span><em>def</em> <code>type_validate_python(type_, data)</code></span></a></h2><ul><li><p><strong>说明:</strong> Validate data with given type.</p></li><li><p><strong>参数</strong></p><ul><li><p><code>type_</code> (type[T])</p></li><li><p><code>data</code> (Any)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>T</li></ul></li></ul><h2 id="type-validate-json" tabindex="-1"><a class="header-anchor" href="#type-validate-json"><span><em>def</em> <code>type_validate_json(type_, data)</code></span></a></h2><ul><li><p><strong>说明:</strong> Validate JSON with given type.</p></li><li><p><strong>参数</strong></p><ul><li><p><code>type_</code> (type[T])</p></li><li><p><code>data</code> (str | bytes)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>T</li></ul></li></ul><h2 id="custom-validation" tabindex="-1"><a class="header-anchor" href="#custom-validation"><span><em>def</em> <code>custom_validation(class_)</code></span></a></h2><ul><li><p><strong>说明:</strong> Use pydantic v1 like validator generator in pydantic v2</p></li><li><p><strong>参数</strong></p><ul><li><code>class_</code> (type[CVC])</li></ul></li><li><p><strong>返回</strong></p><ul><li>type[CVC]</li></ul></li></ul>',43)]))}const p=i(t,[["render",a],["__file","compat.html.vue"]]),r=JSON.parse('{"path":"/version-2.4.1/api/compat.html","title":"nonebot.compat","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":16,"description":"nonebot.compat 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.1/api/compat.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.compat"}],["meta",{"property":"og:description","content":"nonebot.compat 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.compat\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"version-2.4.1/api/compat.md","excerpt":"\\n<p>本模块为 Pydantic 版本兼容层模块</p>\\n<p>为兼容 Pydantic V1 与 V2 版本，定义了一系列兼容函数与类供使用。</p>\\n<h2><em>var</em> <code>Required</code></h2>\\n<ul>\\n<li>\\n<p><strong>类型:</strong> untyped</p>\\n</li>\\n<li>\\n<p><strong>说明:</strong> Alias of Ellipsis for compatibility with pydantic v1</p>\\n</li>\\n</ul>\\n<h2><em>library-attr</em> <code>PydanticUndefined</code></h2>","bioChainData":{"outlink":[],"backlink":[{"title":"params","link":"version-2.4.1/api/params.html"},{"title":"index","link":"version-2.4.1/api/dependencies/index.html"},{"title":"utils","link":"version-2.4.1/api/dependencies/utils.html"}],"localMap":{"nodes":[{"id":"version-2.4.1/api/compat.md","value":{"title":"compat","path":"version-2.4.1/api/compat.md","outlink":[],"backlink":["version-2.4.1/api/params.md","version-2.4.1/api/dependencies/index.md","version-2.4.1/api/dependencies/utils.md"]}},{"id":"version-2.4.1/api/params.md","value":{"title":"params","path":"version-2.4.1/api/params.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/dependencies/index.md","value":{"title":"index","path":"version-2.4.1/api/dependencies/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.1/api/dependencies/utils.md","value":{"title":"utils","path":"version-2.4.1/api/dependencies/utils.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.1/api/params.md","target":"version-2.4.1/api/compat.md"},{"source":"version-2.4.1/api/dependencies/index.md","target":"version-2.4.1/api/compat.md"},{"source":"version-2.4.1/api/dependencies/utils.md","target":"version-2.4.1/api/compat.md"}]}}}');export{p as comp,r as data};
