import{_ as a,c as s,o as e,a as o}from"./app.4f27cdfa.js";const h=JSON.parse('{"title":"JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7AE0","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML\u4E2D\u7684JavaScript","slug":"html\u4E2D\u7684javascript","link":"#html\u4E2D\u7684javascript","children":[]}],"relativePath":"src/read/2022/technology/JavaScriptHighDesign/02-JavaScriptHighDesign.md","lastUpdated":1662512346000}'),c={name:"src/read/2022/technology/JavaScriptHighDesign/02-JavaScriptHighDesign.md"},n=o(`<h1 id="javascript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7AE0" tabindex="-1">JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7AE0 <a class="header-anchor" href="#javascript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7AE0" aria-hidden="true">#</a></h1><h2 id="html\u4E2D\u7684javascript" tabindex="-1">HTML\u4E2D\u7684JavaScript <a class="header-anchor" href="#html\u4E2D\u7684javascript" aria-hidden="true">#</a></h2><p>JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7AE0</p><ol><li>\u672C\u7AE0\u4E3B\u8981\u8BB2\u8FF0\u4E86\u5728<code>HTML</code>\u4E2DJavaScript\u7684\u4F7F\u7528\u6CE8\u610F\u3002\u5148\u4ECE<code>script</code>\u5C5E\u6027\u6765\u4ECB\u7ECD\u4E86\uFF1A\u5206\u522B\u53EF\u4EE5\u8BBE\u7F6E<code>async</code>,<code>charset</code>,<code>crossorigin</code>,<code>defer</code>,<code>integrity</code>,<code>language</code>,<code>src</code>,<code>type</code>\u3002\u91CD\u70B9\u5173\u6CE8\uFF1A\u5C5E\u6027<code>src</code>\u6307\u5B9A\u7684\u8DEF\u5F84\u53D1\u9001\u4E00\u4E2A<code>GET</code>\u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u521D\u59CB\u4E0D\u53D7\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u9650\u5236\uFF0C\u4F46\u662F\u8FD4\u56DE\u5E76\u88AB\u6267\u884C\u7684JavaScript\u5219\u53D7\u5230\u9650\u5236\u3002\u901A\u8FC7<code>integrity</code>\u6765\u9A8C\u8BC1\u7B7E\u540D\uFF0C\u63D0\u5347\u5B89\u5168\u6027\u3002</li><li>JavaScript\u811A\u672C\u5EFA\u8BAE\u653E\u5728<code>body</code>\u6807\u7B7E\u7684\u6700\u540E\u9762\uFF0C\u8FD9\u6837\u5904\u7406JS\u4EE3\u7801\u4E4B\u524D\u80FD\u5B8C\u5168\u6E32\u67D3\u9875\u9762\u3002</li><li>\u63A8\u8FDF\u811A\u672C\u6267\u884C\uFF1A<code>defer</code>\u548C<code>async</code>\uFF0C\u4E66\u4E2D\u63A8\u8350\u4F7F\u7528<code>defer</code>\uFF0C\u56E0async\u7ACB\u5373\u5F00\u59CB\u4E0B\u8F7D\u811A\u672C\uFF0C\u4E0D\u80FD\u963B\u6B62\u5176\u4ED6\u9875\u9762\u52A8\u4F5C\uFF0C\u8FD9\u4E2A\u4E00\u6B65\u811A\u672C\u4FDD\u8BC1\u4F1A\u5728\u9875\u9762<code>load</code>\u4E8B\u4EF6\u524D\u6267\u884C\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u5728<code>DOMContentLoaded</code>\u4E4B\u524D\u6216\u8005\u4E4B\u540E\u6267\u884C\uFF0C\u56E0\u4E3A\u5176\u4E0D\u786E\u5B9A\u5176\uFF0C\u800C<code>defer</code>\u5219\u662F\u591A\u4E2A\u811A\u672C\u6309\u7167\u987A\u5E8F\u5728<code>DOMContentLoaded</code>\u4E8B\u4EF6\u4E4B\u524D\u6267\u884C\u3002</li><li>\u63D0\u9192\u4E86\uFF0C\u6211\u4EEC\u901A\u8FC7<code>createElement</code>\u521B\u5EFA\u5143\u7D20\u7684<code>script</code>\u65F6\u5019\uFF0C\u53EF\u4EE5\u660E\u786E\u4F7F\u7528<code>script.async = false</code>\u6765\u5C06\u5176\u8BBE\u4E3A\u540C\u6B65\u52A0\u8F7D\u3002\u5E76\u5728\u5934\u90E8\u6DFB\u52A0 // \u4E0A\u8FF0\u521B\u5EFAscript\u65B9\u5F0F\uFF0C\u83B7\u53D6\u8D44\u6E90\u5BF9\u6D4F\u89C8\u5668\u9884\u52A0\u8F7D\u662F\u4E0D\u53EF\u9884\u89C1\u7684 // \u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u6211\u4EEC\u624B\u52A8\u663E\u793A\u58F0\u660E</li></ol><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">preload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>XHTML\u5C31\u4E0D\u591A\u5177\u4F53\u8D58\u8FF0\u4E86\u3002\u53E6\u5916\u517C\u5BB9\u6027\u5904\u7406\uFF0C\u52A0\u5165\u4E00\u884C<code>noscript</code>\u6765\u5BF9\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u811A\u672C\u6216\u6D4F\u89C8\u5668\u5BF9\u811A\u672C\u7684\u652F\u6301\u88AB\u5173\u95ED\u7684\u6D4F\u89C8\u5668\u663E\u793A\u4E0B\u65B9\u4EE3\u7801\u3002</li></ol><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8FD9\u4E2A\u6D4F\u89C8\u5668\u4E0D\u652F\u6301JavaScript</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),t=[n];function l(p,r,d,i,D,y){return e(),s("div",null,t)}const v=a(c,[["render",l]]);export{h as __pageData,v as default};