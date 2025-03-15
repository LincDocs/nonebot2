import{_ as s,e as a,f as r,g as e,h as o,i as t,j as l,r as p,o as d}from"./app-leStx6d6.js";const u={};function c(g,i){const n=p("RouteLink");return d(),a("div",null,[i[43]||(i[43]=r('<h1 id="nonebot-drivers" tabindex="-1"><a class="header-anchor" href="#nonebot-drivers"><span>nonebot.drivers</span></a></h1><p>本模块定义了驱动适配器基类。</p><p>各驱动请继承以下基类。</p><h2 id="ASGIMixin" tabindex="-1"><a class="header-anchor" href="#ASGIMixin"><span><em>abstract class</em> <code>ASGIMixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明</strong></p><p>ASGI 服务端基类。</p><p>将后端框架封装，以满足适配器使用。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="ASGIMixin-server-app" tabindex="-1"><a class="header-anchor" href="#ASGIMixin-server-app"><span><em>abstract property</em> <code>server_app</code></span></a></h3><ul><li><p><strong>类型:</strong> Any</p></li><li><p><strong>说明:</strong> 驱动 APP 对象</p></li></ul><h3 id="ASGIMixin-asgi" tabindex="-1"><a class="header-anchor" href="#ASGIMixin-asgi"><span><em>abstract property</em> <code>asgi</code></span></a></h3><ul><li><p><strong>类型:</strong> Any</p></li><li><p><strong>说明:</strong> 驱动 ASGI 对象</p></li></ul><h3 id="ASGIMixin-setup-http-server" tabindex="-1"><a class="header-anchor" href="#ASGIMixin-setup-http-server"><span><em>abstract method</em> <code>setup_http_server(setup)</code></span></a></h3><ul><li><p><strong>说明:</strong> 设置一个 HTTP 服务器路由配置</p></li><li><p><strong>参数</strong></p><ul><li><code>setup</code> (<a href="#HTTPServerSetup">HTTPServerSetup</a>)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="ASGIMixin-setup-websocket-server" tabindex="-1"><a class="header-anchor" href="#ASGIMixin-setup-websocket-server"><span><em>abstract method</em> <code>setup_websocket_server(setup)</code></span></a></h3><ul><li><p><strong>说明:</strong> 设置一个 WebSocket 服务器路由配置</p></li><li><p><strong>参数</strong></p><ul><li><code>setup</code> (<a href="#WebSocketServerSetup">WebSocketServerSetup</a>)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="Cookies" tabindex="-1"><a class="header-anchor" href="#Cookies"><span><em>class</em> <code>Cookies(cookies=None)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><code>cookies</code> (CookieTypes)</li></ul></li></ul><h3 id="Cookies-set" tabindex="-1"><a class="header-anchor" href="#Cookies-set"><span><em>method</em> <code>set(name, value, domain=&quot;&quot;, path=&quot;/&quot;)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>name</code> (str)</p></li><li><p><code>value</code> (str)</p></li><li><p><code>domain</code> (str)</p></li><li><p><code>path</code> (str)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Cookies-get" tabindex="-1"><a class="header-anchor" href="#Cookies-get"><span><em>method</em> <code>get(name, default=None, domain=None, path=None)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>name</code> (str)</p></li><li><p><code>default</code> (str | None)</p></li><li><p><code>domain</code> (str | None)</p></li><li><p><code>path</code> (str | None)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>str | None</li></ul></li></ul><h3 id="Cookies-delete" tabindex="-1"><a class="header-anchor" href="#Cookies-delete"><span><em>method</em> <code>delete(name, domain=None, path=None)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>name</code> (str)</p></li><li><p><code>domain</code> (str | None)</p></li><li><p><code>path</code> (str | None)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Cookies-clear" tabindex="-1"><a class="header-anchor" href="#Cookies-clear"><span><em>method</em> <code>clear(domain=None, path=None)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><p><code>domain</code> (str | None)</p></li><li><p><code>path</code> (str | None)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Cookies-update" tabindex="-1"><a class="header-anchor" href="#Cookies-update"><span><em>method</em> <code>update(cookies=None)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>cookies</code> (CookieTypes)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="Cookies-as-header" tabindex="-1"><a class="header-anchor" href="#Cookies-as-header"><span><em>method</em> <code>as_header(request)</code></span></a></h3><ul><li><p><strong>参数</strong></p><ul><li><code>request</code> (Request)</li></ul></li><li><p><strong>返回</strong></p><ul><li>dict[str, str]</li></ul></li></ul><h2 id="Driver" tabindex="-1"><a class="header-anchor" href="#Driver"><span><em>abstract class</em> <code>Driver(env, config)</code></span></a></h2>',28)),e("ul",null,[i[9]||(i[9]=e("li",null,[e("p",null,[e("strong",null,"说明")]),e("p",null,"驱动器基类。"),e("p",null,"驱动器控制框架的启动和停止，适配器的注册，以及机器人生命周期管理。")],-1)),e("li",null,[i[8]||(i[8]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[e("p",null,[i[1]||(i[1]=e("code",null,"env",-1)),i[2]||(i[2]=o(" (")),t(n,{to:"/version-2.4.2/api/config.html#Env"},{default:l(()=>i[0]||(i[0]=[o("Env")])),_:1}),i[3]||(i[3]=o("): 包含环境信息的 Env 对象"))])]),e("li",null,[e("p",null,[i[5]||(i[5]=e("code",null,"config",-1)),i[6]||(i[6]=o(" (")),t(n,{to:"/version-2.4.2/api/config.html#Config"},{default:l(()=>i[4]||(i[4]=[o("Config")])),_:1}),i[7]||(i[7]=o("): 包含配置信息的 Config 对象"))])])])])]),i[44]||(i[44]=r('<h3 id="Driver-env" tabindex="-1"><a class="header-anchor" href="#Driver-env"><span><em>instance-var</em> <code>env</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 环境名称</p></li></ul><h3 id="Driver-config" tabindex="-1"><a class="header-anchor" href="#Driver-config"><span><em>instance-var</em> <code>config</code></span></a></h3>',3)),e("ul",null,[e("li",null,[e("p",null,[i[11]||(i[11]=e("strong",null,"类型:",-1)),i[12]||(i[12]=o()),t(n,{to:"/version-2.4.2/api/config.html#Config"},{default:l(()=>i[10]||(i[10]=[o("Config")])),_:1})])]),i[13]||(i[13]=e("li",null,[e("p",null,[e("strong",null,"说明:"),o(" 全局配置对象")])],-1))]),i[45]||(i[45]=e("h3",{id:"Driver-bots",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Driver-bots"},[e("span",null,[e("em",null,"property"),o(),e("code",null,"bots")])])],-1)),e("ul",null,[e("li",null,[e("p",null,[i[15]||(i[15]=e("strong",null,"类型:",-1)),i[16]||(i[16]=o(" dict[str, ")),t(n,{to:"/version-2.4.2/api/adapters/#Bot"},{default:l(()=>i[14]||(i[14]=[o("Bot")])),_:1}),i[17]||(i[17]=o("]"))])]),i[18]||(i[18]=e("li",null,[e("p",null,[e("strong",null,"说明:"),o(" 获取当前所有已连接的 Bot")])],-1))]),i[46]||(i[46]=e("h3",{id:"Driver-register-adapter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Driver-register-adapter"},[e("span",null,[e("em",null,"method"),o(),e("code",null,"register_adapter(adapter, **kwargs)")])])],-1)),e("ul",null,[i[25]||(i[25]=e("li",null,[e("p",null,[e("strong",null,"说明:"),o(" 注册一个协议适配器")])],-1)),e("li",null,[i[24]||(i[24]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[e("p",null,[i[20]||(i[20]=e("code",null,"adapter",-1)),i[21]||(i[21]=o(" (type[")),t(n,{to:"/version-2.4.2/api/adapters/#Adapter"},{default:l(()=>i[19]||(i[19]=[o("Adapter")])),_:1}),i[22]||(i[22]=o("]): 适配器类"))])]),i[23]||(i[23]=e("li",null,[e("p",null,[e("code",null,"**kwargs"),o(": 其他传递给适配器的参数")])],-1))])]),i[26]||(i[26]=e("li",null,[e("p",null,[e("strong",null,"返回")]),e("ul",null,[e("li",null,"None")])],-1))]),i[47]||(i[47]=r('<h3 id="Driver-type" tabindex="-1"><a class="header-anchor" href="#Driver-type"><span><em>abstract property</em> <code>type</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 驱动类型名称</p></li></ul><h3 id="Driver-logger" tabindex="-1"><a class="header-anchor" href="#Driver-logger"><span><em>abstract property</em> <code>logger</code></span></a></h3><ul><li><p><strong>类型:</strong> untyped</p></li><li><p><strong>说明:</strong> 驱动专属 logger 日志记录器</p></li></ul><h3 id="Driver-run" tabindex="-1"><a class="header-anchor" href="#Driver-run"><span><em>abstract method</em> <code>run(*args, **kwargs)</code></span></a></h3><ul><li><p><strong>说明:</strong> 启动驱动框架</p></li><li><p><strong>参数</strong></p><ul><li><p><code>*args</code></p></li><li><p><code>**kwargs</code></p></li></ul></li><li><p><strong>返回</strong></p><ul><li>untyped</li></ul></li></ul><h3 id="Driver-on-startup" tabindex="-1"><a class="header-anchor" href="#Driver-on-startup"><span><em>method</em> <code>on_startup(func)</code></span></a></h3><ul><li><p><strong>说明:</strong> 注册一个启动时执行的函数</p></li><li><p><strong>参数</strong></p><ul><li><code>func</code> (LIFESPAN_FUNC)</li></ul></li><li><p><strong>返回</strong></p><ul><li>LIFESPAN_FUNC</li></ul></li></ul><h3 id="Driver-on-shutdown" tabindex="-1"><a class="header-anchor" href="#Driver-on-shutdown"><span><em>method</em> <code>on_shutdown(func)</code></span></a></h3><ul><li><p><strong>说明:</strong> 注册一个停止时执行的函数</p></li><li><p><strong>参数</strong></p><ul><li><code>func</code> (LIFESPAN_FUNC)</li></ul></li><li><p><strong>返回</strong></p><ul><li>LIFESPAN_FUNC</li></ul></li></ul><h3 id="Driver-on-bot-connect" tabindex="-1"><a class="header-anchor" href="#Driver-on-bot-connect"><span><em>classmethod</em> <code>on_bot_connect(func)</code></span></a></h3>',11)),e("ul",null,[i[34]||(i[34]=e("li",null,[e("p",null,[e("strong",null,"说明")]),e("p",null,"装饰一个函数使他在 bot 连接成功时执行。"),e("p",null,"钩子函数参数:"),e("ul",null,[e("li",null,"bot: 当前连接上的 Bot 对象")])],-1)),e("li",null,[i[31]||(i[31]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[i[28]||(i[28]=e("code",null,"func",-1)),i[29]||(i[29]=o(" (")),t(n,{to:"/version-2.4.2/api/typing.html#T-BotConnectionHook"},{default:l(()=>i[27]||(i[27]=[o("T_BotConnectionHook")])),_:1}),i[30]||(i[30]=o(")"))])])]),e("li",null,[i[33]||(i[33]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[t(n,{to:"/version-2.4.2/api/typing.html#T-BotConnectionHook"},{default:l(()=>i[32]||(i[32]=[o("T_BotConnectionHook")])),_:1})])])])]),i[48]||(i[48]=e("h3",{id:"Driver-on-bot-disconnect",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#Driver-on-bot-disconnect"},[e("span",null,[e("em",null,"classmethod"),o(),e("code",null,"on_bot_disconnect(func)")])])],-1)),e("ul",null,[i[42]||(i[42]=e("li",null,[e("p",null,[e("strong",null,"说明")]),e("p",null,"装饰一个函数使他在 bot 连接断开时执行。"),e("p",null,"钩子函数参数:"),e("ul",null,[e("li",null,"bot: 当前连接上的 Bot 对象")])],-1)),e("li",null,[i[39]||(i[39]=e("p",null,[e("strong",null,"参数")],-1)),e("ul",null,[e("li",null,[i[36]||(i[36]=e("code",null,"func",-1)),i[37]||(i[37]=o(" (")),t(n,{to:"/version-2.4.2/api/typing.html#T-BotDisconnectionHook"},{default:l(()=>i[35]||(i[35]=[o("T_BotDisconnectionHook")])),_:1}),i[38]||(i[38]=o(")"))])])]),e("li",null,[i[41]||(i[41]=e("p",null,[e("strong",null,"返回")],-1)),e("ul",null,[e("li",null,[t(n,{to:"/version-2.4.2/api/typing.html#T-BotDisconnectionHook"},{default:l(()=>i[40]||(i[40]=[o("T_BotDisconnectionHook")])),_:1})])])])]),i[49]||(i[49]=r('<h2 id="ForwardDriver" tabindex="-1"><a class="header-anchor" href="#ForwardDriver"><span><em>var</em> <code>ForwardDriver</code></span></a></h2><ul><li><p><strong>类型:</strong> ForwardMixin</p></li><li><p><strong>说明</strong></p><p>支持客户端请求的驱动器。</p><p><strong>Deprecated</strong>，请使用 <a href="#ForwardMixin">ForwardMixin</a> 或其子类代替。</p></li></ul><h2 id="ForwardMixin" tabindex="-1"><a class="header-anchor" href="#ForwardMixin"><span><em>abstract class</em> <code>ForwardMixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 客户端混入基类。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h2 id="HTTPClientMixin" tabindex="-1"><a class="header-anchor" href="#HTTPClientMixin"><span><em>abstract class</em> <code>HTTPClientMixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> HTTP 客户端混入基类。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="HTTPClientMixin-request" tabindex="-1"><a class="header-anchor" href="#HTTPClientMixin-request"><span><em>abstract async method</em> <code>request(setup)</code></span></a></h3><ul><li><p><strong>说明:</strong> 发送一个 HTTP 请求</p></li><li><p><strong>参数</strong></p><ul><li><code>setup</code> (<a href="#Request">Request</a>)</li></ul></li><li><p><strong>返回</strong></p><ul><li><a href="#Response">Response</a></li></ul></li></ul><h3 id="HTTPClientMixin-get-session" tabindex="-1"><a class="header-anchor" href="#HTTPClientMixin-get-session"><span><em>abstract method</em> <code>get_session(params=None, headers=None, cookies=None, version=HTTPVersion.H11, timeout=None, proxy=None)</code></span></a></h3><ul><li><p><strong>说明:</strong> 获取一个 HTTP 会话</p></li><li><p><strong>参数</strong></p><ul><li><p><code>params</code> (QueryTypes)</p></li><li><p><code>headers</code> (HeaderTypes)</p></li><li><p><code>cookies</code> (CookieTypes)</p></li><li><p><code>version</code> (str | <a href="#HTTPVersion">HTTPVersion</a>)</p></li><li><p><code>timeout</code> (float | None)</p></li><li><p><code>proxy</code> (str | None)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>HTTPClientSession</li></ul></li></ul><h2 id="HTTPServerSetup" tabindex="-1"><a class="header-anchor" href="#HTTPServerSetup"><span><em>class</em> <code>HTTPServerSetup(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> HTTP 服务器路由配置。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h2 id="HTTPVersion" tabindex="-1"><a class="header-anchor" href="#HTTPVersion"><span><em>enum</em> <code>HTTPVersion</code></span></a></h2><ul><li><p><strong>说明:</strong> An enumeration.</p></li><li><p><strong>参数</strong></p><p>auto</p><ul><li><p><code>H10: &#39;1.0&#39;</code></p></li><li><p><code>H11: &#39;1.1&#39;</code></p></li><li><p><code>H2: &#39;2&#39;</code></p></li></ul></li></ul><h2 id="Mixin" tabindex="-1"><a class="header-anchor" href="#Mixin"><span><em>abstract class</em> <code>Mixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 可与其他驱动器共用的混入基类。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="Mixin-type" tabindex="-1"><a class="header-anchor" href="#Mixin-type"><span><em>abstract property</em> <code>type</code></span></a></h3><ul><li><p><strong>类型:</strong> str</p></li><li><p><strong>说明:</strong> 混入驱动类型名称</p></li></ul><h2 id="Request" tabindex="-1"><a class="header-anchor" href="#Request"><span><em>class</em> <code>Request(method, url, *, params=None, headers=None, cookies=None, content=None, data=None, json=None, files=None, version=HTTPVersion.H11, timeout=None, proxy=None)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><p><code>method</code> (str | bytes)</p></li><li><p><code>url</code> (URL | str | RawURL)</p></li><li><p><code>params</code> (QueryTypes)</p></li><li><p><code>headers</code> (HeaderTypes)</p></li><li><p><code>cookies</code> (CookieTypes)</p></li><li><p><code>content</code> (ContentTypes)</p></li><li><p><code>data</code> (DataTypes)</p></li><li><p><code>json</code> (Any)</p></li><li><p><code>files</code> (FilesTypes)</p></li><li><p><code>version</code> (str | HTTPVersion)</p></li><li><p><code>timeout</code> (float | None)</p></li><li><p><code>proxy</code> (str | None)</p></li></ul></li></ul><h2 id="Response" tabindex="-1"><a class="header-anchor" href="#Response"><span><em>class</em> <code>Response(status_code, *, headers=None, content=None, request=None)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><p><code>status_code</code> (int)</p></li><li><p><code>headers</code> (HeaderTypes)</p></li><li><p><code>content</code> (ContentTypes)</p></li><li><p><code>request</code> (Request | None)</p></li></ul></li></ul><h2 id="ReverseDriver" tabindex="-1"><a class="header-anchor" href="#ReverseDriver"><span><em>var</em> <code>ReverseDriver</code></span></a></h2><ul><li><p><strong>类型:</strong> ReverseMixin</p></li><li><p><strong>说明</strong></p><p>支持服务端请求的驱动器。</p><p><strong>Deprecated</strong>，请使用 <a href="#ReverseMixin">ReverseMixin</a> 或其子类代替。</p></li></ul><h2 id="ReverseMixin" tabindex="-1"><a class="header-anchor" href="#ReverseMixin"><span><em>abstract class</em> <code>ReverseMixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> 服务端混入基类。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h2 id="WebSocket" tabindex="-1"><a class="header-anchor" href="#WebSocket"><span><em>abstract class</em> <code>WebSocket(*, request)</code></span></a></h2><ul><li><p><strong>参数</strong></p><ul><li><code>request</code> (Request)</li></ul></li></ul><h3 id="WebSocket-closed" tabindex="-1"><a class="header-anchor" href="#WebSocket-closed"><span><em>abstract property</em> <code>closed</code></span></a></h3><ul><li><p><strong>类型:</strong> bool</p></li><li><p><strong>说明:</strong> 连接是否已经关闭</p></li></ul><h3 id="WebSocket-accept" tabindex="-1"><a class="header-anchor" href="#WebSocket-accept"><span><em>abstract async method</em> <code>accept()</code></span></a></h3><ul><li><p><strong>说明:</strong> 接受 WebSocket 连接请求</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-close" tabindex="-1"><a class="header-anchor" href="#WebSocket-close"><span><em>abstract async method</em> <code>close(code=1000, reason=&quot;&quot;)</code></span></a></h3><ul><li><p><strong>说明:</strong> 关闭 WebSocket 连接请求</p></li><li><p><strong>参数</strong></p><ul><li><p><code>code</code> (int)</p></li><li><p><code>reason</code> (str)</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-receive" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive"><span><em>abstract async method</em> <code>receive()</code></span></a></h3><ul><li><p><strong>说明:</strong> 接收一条 WebSocket text/bytes 信息</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str | bytes</li></ul></li></ul><h3 id="WebSocket-receive-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-text"><span><em>abstract async method</em> <code>receive_text()</code></span></a></h3><ul><li><p><strong>说明:</strong> 接收一条 WebSocket text 信息</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>str</li></ul></li></ul><h3 id="WebSocket-receive-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-receive-bytes"><span><em>abstract async method</em> <code>receive_bytes()</code></span></a></h3><ul><li><p><strong>说明:</strong> 接收一条 WebSocket binary 信息</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>bytes</li></ul></li></ul><h3 id="WebSocket-send" tabindex="-1"><a class="header-anchor" href="#WebSocket-send"><span><em>async method</em> <code>send(data)</code></span></a></h3><ul><li><p><strong>说明:</strong> 发送一条 WebSocket text/bytes 信息</p></li><li><p><strong>参数</strong></p><ul><li><code>data</code> (str | bytes)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-send-text" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-text"><span><em>abstract async method</em> <code>send_text(data)</code></span></a></h3><ul><li><p><strong>说明:</strong> 发送一条 WebSocket text 信息</p></li><li><p><strong>参数</strong></p><ul><li><code>data</code> (str)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h3 id="WebSocket-send-bytes" tabindex="-1"><a class="header-anchor" href="#WebSocket-send-bytes"><span><em>abstract async method</em> <code>send_bytes(data)</code></span></a></h3><ul><li><p><strong>说明:</strong> 发送一条 WebSocket binary 信息</p></li><li><p><strong>参数</strong></p><ul><li><code>data</code> (bytes)</li></ul></li><li><p><strong>返回</strong></p><ul><li>None</li></ul></li></ul><h2 id="WebSocketClientMixin" tabindex="-1"><a class="header-anchor" href="#WebSocketClientMixin"><span><em>abstract class</em> <code>WebSocketClientMixin(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> WebSocket 客户端混入基类。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h3 id="WebSocketClientMixin-websocket" tabindex="-1"><a class="header-anchor" href="#WebSocketClientMixin-websocket"><span><em>abstract method</em> <code>websocket(setup)</code></span></a></h3><ul><li><p><strong>说明:</strong> 发起一个 WebSocket 连接</p></li><li><p><strong>参数</strong></p><ul><li><code>setup</code> (<a href="#Request">Request</a>)</li></ul></li><li><p><strong>返回</strong></p><ul><li>AsyncGenerator[<a href="#WebSocket">WebSocket</a>, None]</li></ul></li></ul><h2 id="WebSocketServerSetup" tabindex="-1"><a class="header-anchor" href="#WebSocketServerSetup"><span><em>class</em> <code>WebSocketServerSetup(&lt;auto&gt;)</code></span></a></h2><ul><li><p><strong>说明:</strong> WebSocket 服务器路由配置。</p></li><li><p><strong>参数</strong></p><p>auto</p></li></ul><h2 id="combine-driver" tabindex="-1"><a class="header-anchor" href="#combine-driver"><span><em>def</em> <code>combine_driver(driver, *mixins)</code></span></a></h2><ul><li><p><strong>说明:</strong> 将一个驱动器和多个混入类合并。</p></li><li><p><strong>重载</strong></p><p><strong>1.</strong> <code>(driver) -&gt; type[D]</code></p><ul><li><p><strong>参数</strong></p><ul><li><code>driver</code> (type[D])</li></ul></li><li><p><strong>返回</strong></p><ul><li>type[D]</li></ul></li></ul><p><strong>2.</strong> <code>(driver, __m, /, *mixins) -&gt; type[CombinedDriver]</code></p><ul><li><p><strong>参数</strong></p><ul><li><p><code>driver</code> (type[D])</p></li><li><p><code>__m</code> (type[<a href="#Mixin">Mixin</a>])</p></li><li><p><code>*mixins</code> (type[<a href="#Mixin">Mixin</a>])</p></li></ul></li><li><p><strong>返回</strong></p><ul><li>type[CombinedDriver]</li></ul></li></ul></li></ul>',54))])}const m=s(u,[["render",c],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/version-2.4.2/api/drivers/","title":"nonebot.drivers","lang":"zh-CN","frontmatter":{"mdx":{"format":"md"},"sidebar_position":0,"description":"nonebot.drivers 模块","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/nonebot2/version-2.4.2/api/drivers/"}],["meta",{"property":"og:site_name","content":"nonebot2"}],["meta",{"property":"og:title","content":"nonebot.drivers"}],["meta",{"property":"og:description","content":"nonebot.drivers 模块"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nonebot.drivers\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/nonebot2/\\"}]}"]]},"git":{},"readingTime":{"minutes":4.53,"words":1358},"filePathRelative":"version-2.4.2/api/drivers/index.md","excerpt":"\\n<p>本模块定义了驱动适配器基类。</p>\\n<p>各驱动请继承以下基类。</p>\\n<h2><em>abstract class</em> <code>ASGIMixin(&lt;auto&gt;)</code></h2>\\n<ul>\\n<li>\\n<p><strong>说明</strong></p>\\n<p>ASGI 服务端基类。</p>\\n<p>将后端框架封装，以满足适配器使用。</p>\\n</li>\\n<li>\\n<p><strong>参数</strong></p>\\n<p>auto</p>\\n</li>\\n</ul>\\n<h3><em>abstract property</em> <code>server_app</code></h3>","bioChainData":{"outlink":[{"title":"config","link":"version-2.4.2/api/config.html"},{"title":"index","link":"version-2.4.2/api/adapters/index.html"},{"title":"typing","link":"version-2.4.2/api/typing.html"}],"backlink":[{"title":"routing","link":"version-2.4.2/advanced/routing.html"},{"title":"config","link":"version-2.4.2/api/config.html"},{"title":"index","link":"version-2.4.2/api/index.html"},{"title":"index","link":"version-2.4.2/api/adapters/index.html"},{"title":"aiohttp","link":"version-2.4.2/api/drivers/aiohttp.html"},{"title":"fastapi","link":"version-2.4.2/api/drivers/fastapi.html"},{"title":"httpx","link":"version-2.4.2/api/drivers/httpx.html"},{"title":"quart","link":"version-2.4.2/api/drivers/quart.html"},{"title":"websockets","link":"version-2.4.2/api/drivers/websockets.html"}],"localMap":{"nodes":[{"id":"version-2.4.2/api/drivers/index.md","value":{"title":"index","path":"version-2.4.2/api/drivers/index.md","outlink":["version-2.4.2/api/config.md","version-2.4.2/api/adapters/index.md","version-2.4.2/api/typing.md"],"backlink":["version-2.4.2/advanced/routing.md","version-2.4.2/api/config.md","version-2.4.2/api/index.md","version-2.4.2/api/adapters/index.md","version-2.4.2/api/drivers/aiohttp.md","version-2.4.2/api/drivers/fastapi.md","version-2.4.2/api/drivers/httpx.md","version-2.4.2/api/drivers/quart.md","version-2.4.2/api/drivers/websockets.md"]}},{"id":"version-2.4.2/api/config.md","value":{"title":"config","path":"version-2.4.2/api/config.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/adapters/index.md","value":{"title":"index","path":"version-2.4.2/api/adapters/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/typing.md","value":{"title":"typing","path":"version-2.4.2/api/typing.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/advanced/routing.md","value":{"title":"routing","path":"version-2.4.2/advanced/routing.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/index.md","value":{"title":"index","path":"version-2.4.2/api/index.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/drivers/aiohttp.md","value":{"title":"aiohttp","path":"version-2.4.2/api/drivers/aiohttp.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/drivers/fastapi.md","value":{"title":"fastapi","path":"version-2.4.2/api/drivers/fastapi.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/drivers/httpx.md","value":{"title":"httpx","path":"version-2.4.2/api/drivers/httpx.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/drivers/quart.md","value":{"title":"quart","path":"version-2.4.2/api/drivers/quart.md","outlink":[],"backlink":[]}},{"id":"version-2.4.2/api/drivers/websockets.md","value":{"title":"websockets","path":"version-2.4.2/api/drivers/websockets.md","outlink":[],"backlink":[]}}],"links":[{"source":"version-2.4.2/api/drivers/index.md","target":"version-2.4.2/api/config.md"},{"source":"version-2.4.2/api/drivers/index.md","target":"version-2.4.2/api/adapters/index.md"},{"source":"version-2.4.2/api/drivers/index.md","target":"version-2.4.2/api/typing.md"},{"source":"version-2.4.2/advanced/routing.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/config.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/index.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/adapters/index.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/drivers/aiohttp.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/drivers/fastapi.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/drivers/httpx.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/drivers/quart.md","target":"version-2.4.2/api/drivers/index.md"},{"source":"version-2.4.2/api/drivers/websockets.md","target":"version-2.4.2/api/drivers/index.md"}]}}}');export{m as comp,v as data};
