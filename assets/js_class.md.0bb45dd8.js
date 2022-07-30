import{_ as s,c as a,o as n,a as l}from"./app.89cba475.js";const D=JSON.parse('{"title":"\u57FA\u672C\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u8BED\u6CD5","slug":"\u57FA\u672C\u8BED\u6CD5"},{"level":2,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570"},{"level":2,"title":"class\u4E2D\u7684\u5B9E\u4F8B\u65B9\u6CD5","slug":"class\u4E2D\u7684\u5B9E\u4F8B\u65B9\u6CD5"}],"relativePath":"js/class.md","lastUpdated":1659167824000}'),e={name:"js/class.md"},p=l(`<h2 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1">\u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h2><p>es6\u4E2D\u7684class\u5176\u5B9E\u53EA\u662F\u4E00\u79CD\u8BED\u6CD5\u7CD6\uFF0C\u672C\u8D28\u4E0A\u548C\u4E4B\u524D\u501F\u52A9\u539F\u578B\u6765\u5B9E\u73B0\u7C7B\u7684\u529F\u80FD\u662F\u7C7B\u4F3C\u7684\uFF0C\u53EA\u662F\u5199\u6CD5\u4E0A\u66F4\u52A0\u901A\u4FD7\u6613\u61C2</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- \u5B9A\u4E49\u4E00\u4E2Aclass\u7C7B --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">class User{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u4F7F\u7528new\u5173\u952E\u8BCD\u6765\u5B9E\u4F8B\u5316\u5BF9\u8C61 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let u=new User()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(u)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u5728class\u4E2D\u9700\u8981\u521D\u59CB\u5316\u7684\u6570\u636E\u4E00\u822C\u653E\u5728constructor\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u5E76\u4E14\u6784\u9020\u51FD\u6570\u4F1A\u5728\u5B9E\u4F8B\u5316\u65F6\u81EA\u52A8\u6267\u884C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class User{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name,age){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name=name</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.age=age</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const u=new User(&#39;\u5F20\u4E09&#39;,18)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(u.name)//\u5F20\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="class\u4E2D\u7684\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1">class\u4E2D\u7684\u5B9E\u4F8B\u65B9\u6CD5 <a class="header-anchor" href="#class\u4E2D\u7684\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><strong>class\u4E2D\u7684\u65B9\u6CD5\u7ED3\u5C3E\u4E0D\u9700\u8981\u52A0\u9017\u53F7\u6216\u8005\u5206\u53F7\uFF0C\u6CE8\u610F\u548C\u5BF9\u8C61\u7684\u533A\u522B</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class User{</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(name,age){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name=name</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.age=age</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    say(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(\`hello \${this.name}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    study(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;study class&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const u=new User(&#39;\u5F20\u4E09&#39;,18)</span></span>
<span class="line"><span style="color:#A6ACCD;">u.say()//hello \u5F20\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),c=[p];function o(t,r,i,A,C,d){return n(),a("div",null,c)}var h=s(e,[["render",o]]);export{D as __pageData,h as default};
