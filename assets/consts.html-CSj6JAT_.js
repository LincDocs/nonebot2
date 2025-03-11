import{_ as n,e as a,f as o,o as s}from"./app-DlBE6PBf.js";const t={};function r(i,e){return s(),a("div",null,e[0]||(e[0]=[o('<h1 id="nonebot-consts" tabindex="-1"><a class="header-anchor" href="#nonebot-consts"><span>nonebot.consts</span></a></h1><p>本模块包含了 NoneBot 事件处理过程中使用到的常量。</p><h2 id="RECEIVE-KEY" tabindex="-1"><a class="header-anchor" href="#RECEIVE-KEY"><span><em>var</em> <code>RECEIVE_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_receive_{id}&#39;]</p></li><li><p><strong>说明:</strong> <code>receive</code> 存储 key</p></li></ul><h2 id="LAST-RECEIVE-KEY" tabindex="-1"><a class="header-anchor" href="#LAST-RECEIVE-KEY"><span><em>var</em> <code>LAST_RECEIVE_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_last_receive&#39;]</p></li><li><p><strong>说明:</strong> <code>last_receive</code> 存储 key</p></li></ul><h2 id="ARG-KEY" tabindex="-1"><a class="header-anchor" href="#ARG-KEY"><span><em>var</em> <code>ARG_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;{key}&#39;]</p></li><li><p><strong>说明:</strong> <code>arg</code> 存储 key</p></li></ul><h2 id="REJECT-TARGET" tabindex="-1"><a class="header-anchor" href="#REJECT-TARGET"><span><em>var</em> <code>REJECT_TARGET</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_current_target&#39;]</p></li><li><p><strong>说明:</strong> 当前 <code>reject</code> 目标存储 key</p></li></ul><h2 id="REJECT-CACHE-TARGET" tabindex="-1"><a class="header-anchor" href="#REJECT-CACHE-TARGET"><span><em>var</em> <code>REJECT_CACHE_TARGET</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_next_target&#39;]</p></li><li><p><strong>说明:</strong> 下一个 <code>reject</code> 目标存储 key</p></li></ul><h2 id="PAUSE-PROMPT-RESULT-KEY" tabindex="-1"><a class="header-anchor" href="#PAUSE-PROMPT-RESULT-KEY"><span><em>var</em> <code>PAUSE_PROMPT_RESULT_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_pause_result&#39;]</p></li><li><p><strong>说明:</strong> <code>pause</code> prompt 发送结果存储 key</p></li></ul><h2 id="REJECT-PROMPT-RESULT-KEY" tabindex="-1"><a class="header-anchor" href="#REJECT-PROMPT-RESULT-KEY"><span><em>var</em> <code>REJECT_PROMPT_RESULT_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_reject_{key}_result&#39;]</p></li><li><p><strong>说明:</strong> <code>reject</code> prompt 发送结果存储 key</p></li></ul><h2 id="PREFIX-KEY" tabindex="-1"><a class="header-anchor" href="#PREFIX-KEY"><span><em>var</em> <code>PREFIX_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_prefix&#39;]</p></li><li><p><strong>说明:</strong> 命令前缀存储 key</p></li></ul><h2 id="CMD-KEY" tabindex="-1"><a class="header-anchor" href="#CMD-KEY"><span><em>var</em> <code>CMD_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;command&#39;]</p></li><li><p><strong>说明:</strong> 命令元组存储 key</p></li></ul><h2 id="RAW-CMD-KEY" tabindex="-1"><a class="header-anchor" href="#RAW-CMD-KEY"><span><em>var</em> <code>RAW_CMD_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;raw_command&#39;]</p></li><li><p><strong>说明:</strong> 命令文本存储 key</p></li></ul><h2 id="CMD-ARG-KEY" tabindex="-1"><a class="header-anchor" href="#CMD-ARG-KEY"><span><em>var</em> <code>CMD_ARG_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;command_arg&#39;]</p></li><li><p><strong>说明:</strong> 命令参数存储 key</p></li></ul><h2 id="CMD-START-KEY" tabindex="-1"><a class="header-anchor" href="#CMD-START-KEY"><span><em>var</em> <code>CMD_START_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;command_start&#39;]</p></li><li><p><strong>说明:</strong> 命令开头存储 key</p></li></ul><h2 id="CMD-WHITESPACE-KEY" tabindex="-1"><a class="header-anchor" href="#CMD-WHITESPACE-KEY"><span><em>var</em> <code>CMD_WHITESPACE_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;command_whitespace&#39;]</p></li><li><p><strong>说明:</strong> 命令与参数间空白符存储 key</p></li></ul><h2 id="SHELL-ARGS" tabindex="-1"><a class="header-anchor" href="#SHELL-ARGS"><span><em>var</em> <code>SHELL_ARGS</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_args&#39;]</p></li><li><p><strong>说明:</strong> shell 命令 parse 后参数字典存储 key</p></li></ul><h2 id="SHELL-ARGV" tabindex="-1"><a class="header-anchor" href="#SHELL-ARGV"><span><em>var</em> <code>SHELL_ARGV</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_argv&#39;]</p></li><li><p><strong>说明:</strong> shell 命令原始参数列表存储 key</p></li></ul><h2 id="REGEX-MATCHED" tabindex="-1"><a class="header-anchor" href="#REGEX-MATCHED"><span><em>var</em> <code>REGEX_MATCHED</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_matched&#39;]</p></li><li><p><strong>说明:</strong> 正则匹配结果存储 key</p></li></ul><h2 id="STARTSWITH-KEY" tabindex="-1"><a class="header-anchor" href="#STARTSWITH-KEY"><span><em>var</em> <code>STARTSWITH_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_startswith&#39;]</p></li><li><p><strong>说明:</strong> 响应触发前缀 key</p></li></ul><h2 id="ENDSWITH-KEY" tabindex="-1"><a class="header-anchor" href="#ENDSWITH-KEY"><span><em>var</em> <code>ENDSWITH_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_endswith&#39;]</p></li><li><p><strong>说明:</strong> 响应触发后缀 key</p></li></ul><h2 id="FULLMATCH-KEY" tabindex="-1"><a class="header-anchor" href="#FULLMATCH-KEY"><span><em>var</em> <code>FULLMATCH_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_fullmatch&#39;]</p></li><li><p><strong>说明:</strong> 响应触发完整消息 key</p></li></ul><h2 id="KEYWORD-KEY" tabindex="-1"><a class="header-anchor" href="#KEYWORD-KEY"><span><em>var</em> <code>KEYWORD_KEY</code></span></a></h2><ul><li><p><strong>类型:</strong> Literal[&#39;_keyword&#39;]</p></li><li><p><strong>说明:</strong> 响应触发关键字 key</p></li></ul>',42)]))}const p=n(t,[["render",r],["__file","consts.html.vue"]]),c=JSON.parse(`{"path":"/version-2.4.1/api/consts.html","title":"nonebot.consts","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":9,"description":"nonebot.consts 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.1/api/consts.html"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.consts"}],["meta",{"property":"og:description","content":"nonebot.consts 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.consts\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"version-2.4.1/api/consts.md","excerpt":"\\n<p>本模块包含了 NoneBot 事件处理过程中使用到的常量。</p>\\n<h2><em>var</em> <code>RECEIVE_KEY</code></h2>\\n<ul>\\n<li>\\n<p><strong>类型:</strong> Literal['_receive_{id}']</p>\\n</li>\\n<li>\\n<p><strong>说明:</strong> <code>receive</code> 存储 key</p>\\n</li>\\n</ul>\\n<h2><em>var</em> <code>LAST_RECEIVE_KEY</code></h2>\\n<ul>\\n<li>\\n<p><strong>类型:</strong> Literal['_last_receive']</p>\\n</li>\\n<li>\\n<p><strong>说明:</strong> <code>last_receive</code> 存储 key</p>\\n</li>\\n</ul>","bioChainData":{"outlink":[],"backlink":[{"title":"session-state","link":"version-2.4.1/appendices/session-state.html"}],"localMap":{"nodes":[{"id":"version-2.4.1/api/consts.md","value":{"title":"consts","path":"version-2.4.1/api/consts.md","outlink":[],"backlink":["version-2.4.1/appendices/session-state.md"]}},{"id":"version-2.4.1/appendices/session-state.md","value":{"title":"session-state","path":"version-2.4.1/appendices/session-state.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.1/appendices/session-state.md","target":"version-2.4.1/api/consts.md"}]}}}`);export{p as comp,c as data};
