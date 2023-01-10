import{_ as s,c as a,o as n,a as l}from"./app.cf31d880.js";const A=JSON.parse('{"title":"\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61","description":"","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61","slug":"\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61"},{"level":2,"title":"\u5BF9\u8C61\u5C5E\u6027\u7279\u5F81","slug":"\u5BF9\u8C61\u5C5E\u6027\u7279\u5F81"},{"level":3,"title":"\u67E5\u770B\u5C5E\u6027\u7279\u5F81","slug":"\u67E5\u770B\u5C5E\u6027\u7279\u5F81"}],"relativePath":"js/object.md","lastUpdated":1656582172000}'),p={name:"js/object.md"},o=l(`<h2 id="\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61" tabindex="-1">\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61 <a class="header-anchor" href="#\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        show</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> u1</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">user</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">u1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">()</span><span style="color:#676E95;font-style:italic;">//\u5F20\u4E09</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> u2</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">user</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u674E\u56DB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">u2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#A6ACCD;">()</span><span style="color:#676E95;font-style:italic;">//\u674E\u56DB</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5BF9\u8C61\u5C5E\u6027\u7279\u5F81" tabindex="-1">\u5BF9\u8C61\u5C5E\u6027\u7279\u5F81 <a class="header-anchor" href="#\u5BF9\u8C61\u5C5E\u6027\u7279\u5F81" aria-hidden="true">#</a></h2><h3 id="\u67E5\u770B\u5C5E\u6027\u7279\u5F81" tabindex="-1">\u67E5\u770B\u5C5E\u6027\u7279\u5F81 <a class="header-anchor" href="#\u67E5\u770B\u5C5E\u6027\u7279\u5F81" aria-hidden="true">#</a></h3><p>Object.getOwnPropertyDescriptor(obj,key)\u67E5\u770B\u5BF9\u8C61\u67D0\u4E2A\u5C5E\u6027\u7279\u5F81\uFF0CObject.getOwnPropertyDescriptors(obj)\u67E5\u770B\u5BF9\u8C61\u6240\u6709\u5C5E\u6027\u7279\u5F81</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">19</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnPropertyDescriptor</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     configurable: true\uFF0C\u662F\u5426\u53EF\u914D\u7F6E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     enumerable: true\uFF0C\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\uFF08\u80FD\u5426\u88ABfor in \uFF0Ckeys()\u904D\u5386\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     value: 19,\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     writable: true\uFF0C\u662F\u5426\u53EF\u4FEE\u6539\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5C5E\u6027\u7279\u5F81\u63CF\u8FF0\u7B26" tabindex="-1">\u5C5E\u6027\u7279\u5F81\u63CF\u8FF0\u7B26 <a class="header-anchor" href="#\u5C5E\u6027\u7279\u5F81\u63CF\u8FF0\u7B26" aria-hidden="true">#</a></h4><table><thead><tr><th>\u63CF\u8FF0\u7B26</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u5BF9\u8C61\u5C5E\u6027\u503C</td><td>undefined</td></tr><tr><td>writable</td><td>\u5BF9\u8C61\u5C5E\u6027\u662F\u5426\u53EF\u4FEE\u6539\uFF0C\u662F\u53EF\u5199\u7684\u989D\u8FD8\u662F\u53EA\u8BFB\u7684</td><td>true</td></tr><tr><td>enumerable</td><td>\u5BF9\u8C61\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\uFF08\u80FD\u901A\u8FC7for in\u5FAA\u73AF\uFF0C\u6216\u8005Object.keys()\u8BFB\u53D6\uFF09</td><td>true</td></tr><tr><td>configurable</td><td>\u5C5E\u6027\u5C5E\u6027\u80FD\u5426\u4F7F\u7528delete\u5220\u9664\uFF0C\u80FD\u5426\u4FEE\u6539\u5C5E\u6027\u7279\u5F81\uFF0C\u6216\u80FD\u5426\u4FEE\u6539\u8BBF\u95EE\u5668\u5C5E\u6027</td><td>true</td></tr></tbody></table><h4 id="\u4FEE\u6539\u5C5E\u6027\u7279\u5F81" tabindex="-1">\u4FEE\u6539\u5C5E\u6027\u7279\u5F81 <a class="header-anchor" href="#\u4FEE\u6539\u5C5E\u6027\u7279\u5F81" aria-hidden="true">#</a></h4><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4FEE\u6539\u5355\u4E2A\u5C5E\u6027\u7279\u5F81</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7537</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4FEE\u6539\u591A\u4E2A\u5C5E\u6027\u7279\u5F81</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperties</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u674E\u56DB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">writable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">30</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">configurable</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u539F\u6765\u7684\u5C5E\u6027\u503C\u4E0D\u5B58\u5728\uFF0C\u5C31\u76F8\u5F53\u4E8E\u65B0\u589E\u5C5E\u6027\u4E86</strong></p>`,11),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
