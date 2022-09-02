import{_ as s,c as a,o as n,a as l}from"./app.69f30972.js";const A=JSON.parse('{"title":"solution","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8","slug":"\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8","link":"#\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8","children":[]},{"level":2,"title":"\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42","slug":"\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42","link":"#\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42","children":[]},{"level":2,"title":"\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E","slug":"\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E","link":"#\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E","children":[]},{"level":2,"title":"\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316","slug":"\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316","link":"#\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316","children":[]},{"level":2,"title":"\u4E94\uFF1A \u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE","slug":"\u4E94\uFF1A-\u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE","link":"#\u4E94\uFF1A-\u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE","children":[]}],"relativePath":"src/note/issue/02-vue-issue.md","lastUpdated":1662143585000}'),p={name:"src/note/issue/02-vue-issue.md"},o=l(`<h1 id="solution" tabindex="-1">solution <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h1><h2 id="\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8" tabindex="-1">\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8 <a class="header-anchor" href="#\u4E00\uFF1Avue\u7981\u6B62\u906E\u7F69\u5C42\u4E0B\u7684\u9875\u9762\u6EDA\u52A8" aria-hidden="true">#</a></h2><p>\u89E3\u51B3\uFF1A \u529F\u80FD\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5199\u906E\u7F69\u65F6\uFF0C\u9047\u5230\u906E\u7F69\u4E0B\u9875\u9762\u8FD8\u53EF\u4EE5\u6EDA\u52A8\u7684\u95EE\u9898\u3002</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isPopup</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disableRoll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      isPopup</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">disableRoll</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42" tabindex="-1">\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42 <a class="header-anchor" href="#\u4E8C\uFF1Avue\u4F7F\u7528element-ui\u7684modal\u63A5\u5165\u5FAE\u524D\u7AEF\u51FA\u73B0\u8499\u5C42" aria-hidden="true">#</a></h2><p>\u89E3\u51B3\uFF1A \u67E5\u770Belement-ui\u7684\u6587\u6863\uFF0Cmodal-append-to-body\u8BBE\u7F6E\u4E3Afalse</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-dialog</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u76D1\u63A7\u6761\u4EF6\u9009\u62E9</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      :visible.sync=&quot;dialogVisible&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      :modal-append-to-body=&quot;false&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">destroy-on-close</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-dialog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E" tabindex="-1">\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E <a class="header-anchor" href="#\u4E09\uFF1Avue\u5355\u9875\u5E94\u7528h5\u7981\u6B62\u7528\u6237\u7F29\u653E" aria-hidden="true">#</a></h2><p>\u89E3\u51B3\uFF1A\u5728index.html\u7684mate\u52A0\u5165\u4EE5\u4E0B\u5C5E\u6027</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">device</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">initial</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">minimum</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">maximum</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">scalable</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316" tabindex="-1">\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316 <a class="header-anchor" href="#\u56DB\uFF1Avue3\u7684reactive\u5BF9\u8C61\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><p>\u89E3\u51B3\uFF1A</p><ol><li>\u5728reactive\u4E2D\u5982\u679C\u76F4\u63A5\u8D4B\u503C\u7ED9\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u7684\u8BDD\uFF0C\u4F1A\u4E22\u6389\u54CD\u5E94\u5F0F</li><li>\u5728ts\u68C0\u6D4B\u65F6\u5019\uFF0CObject.key\u904D\u5386\u7684\u503C\u4F1A\u8BBF\u95EE\u663E\u793Astring\u7C7B\u578B\u7D22\u5F15\u9519\u8BEF\u3002</li></ol><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> registerInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RegisterInfoType</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">registerInfoItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> registerInfo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u91CD\u7F6E\u6CE8\u518C\u8868\u5355</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onReset </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">registerInfo</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">registerInfo</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">registerInfoItem</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E94\uFF1A-\u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE" tabindex="-1">\u4E94\uFF1A \u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE <a class="header-anchor" href="#\u4E94\uFF1A-\u56FE\u7247\u7981\u6B62\u62D6\u62FD\u6210\u7F29\u7565\u56FE" aria-hidden="true">#</a></h2><p>\u95EE\u9898\uFF1A\u5728h5\u4E0A\u7981\u6B62\u7528\u6237\u62D6\u62FD\u67D0\u5F20\u56FE\u7247\u4F7F\u5176\u6709\u7F29\u7565\u56FE</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mtitimg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images/m1titimg3.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">draggable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
