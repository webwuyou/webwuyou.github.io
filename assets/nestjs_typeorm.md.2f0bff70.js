import{_ as s,c as a,o as n,a as l}from"./app.cf31d880.js";const A=JSON.parse('{"title":"\u5728nest\u4E2D\u4F7F\u7528typeorm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u521B\u5EFA\u5B9E\u4F53\u6587\u4EF6","slug":"\u521B\u5EFA\u5B9E\u4F53\u6587\u4EF6"}],"relativePath":"nestjs/typeorm.md","lastUpdated":1673314564000}'),p={name:"nestjs/typeorm.md"},o=l(`<h1 id="\u5728nest\u4E2D\u4F7F\u7528typeorm" tabindex="-1">\u5728nest\u4E2D\u4F7F\u7528typeorm <a class="header-anchor" href="#\u5728nest\u4E2D\u4F7F\u7528typeorm" aria-hidden="true">#</a></h1><blockquote><p>\u4E4B\u524D\u5728\u4F7F\u7528koa2\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u624B\u52A8\u53BB\u65B0\u5EFAmysql\u7684\u6570\u636E\u8868\u548C\u76F8\u5173\u5B57\u6BB5\u3002\u4F7F\u7528orm\u6846\u67B6\u53EF\u4EE5\u81EA\u52A8\u5E2E\u6211\u4EEC\u5B8C\u6210\u6570\u636E\u5E93\u8868\u548C\u5B57\u6BB5\u7684\u521B\u5EFA\u5DE5\u4F5C\uFF0C\u7701\u65F6\u7701\u529B\u3002typeOrm\u662F \u4E00\u6B3E\u6BD4\u8F83\u6D41\u884C\u7684orm\u6846\u67B6\uFF0C\u5728nestjs\u4E2D\u81EA\u5E26\u4E86\u5BF9typeOrm\u7684\u652F\u6301\u3002</p></blockquote><h4 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm add @nestjs/typeorm typeorm mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728\u8DDF\u6A21\u5757\u4E2D\u5F15\u5165TypeOrmModule\uFF0C\u5B89\u5168\u8D77\u89C1\uFF0C\u914D\u7F6E\u5185\u5BB9\u53EF\u4EE5\u653E\u5230.env\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u4E2D</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TypeOrmrModule</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forRoot</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">172.168.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3306</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u5B9E\u4F53\u6587\u4EF6" tabindex="-1">\u521B\u5EFA\u5B9E\u4F53\u6587\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u5B9E\u4F53\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// User.entity.ts</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Entry</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#676E95;font-style:italic;">//\u81EA\u5B9A\u4E49user\u8868\uFF0C\u4E0D\u4F20\u53C2\u9ED8\u8BA4\u4F1A\u4EE5\u6587\u4EF6\u540D\u4F5C\u4E3A\u8868\u540D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">PrimaryGeneratedColumn</span><span style="color:#A6ACCD;">()</span><span style="color:#676E95;font-style:italic;">//\u5B9A\u4E49\u4E3B\u952Eid\uFF0C\u7C7B\u578Bnumber\u4F1A\u5B9A\u4E49\u4E3Amysql\u4E2D\u7684int</span></span>
<span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Column</span><span style="color:#A6ACCD;">()</span><span style="color:#676E95;font-style:italic;">//\u5B9A\u4E49username\u5B57\u6BB5\uFF0C\u7C7B\u578Bstring\u4F1A\u5B9A\u4E49\u4E3Amysql\u4E2D\u7684varchar</span></span>
<span class="line"><span style="color:#FFCB6B;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Column</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">varchar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#676E95;font-style:italic;">//\u6307\u5B9Avarchar\u7C7B\u578B\u548C\u5B57\u6BB5\u957F\u5EA6</span></span>
<span class="line"><span style="color:#FFCB6B;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">Column</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">varchar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">string</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(r,c,y,D,F,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
