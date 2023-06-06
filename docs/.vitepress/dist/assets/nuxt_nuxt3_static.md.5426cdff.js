import{_ as s,c as a,o as e,a as n}from"./app.7d9e6929.js";const A=JSON.parse('{"title":"nuxt3\u4E2D\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"public\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406\uFF08\u539F\u6837\u8F93\u51FA\uFF09","slug":"public\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406\uFF08\u539F\u6837\u8F93\u51FA\uFF09"},{"level":2,"title":"assets\u4E2D\u7684\u6587\u4EF6\u5728\u6253\u5305\u65F6\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406","slug":"assets\u4E2D\u7684\u6587\u4EF6\u5728\u6253\u5305\u65F6\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406"}],"relativePath":"nuxt/nuxt3/static.md","lastUpdated":1673319950000}'),t={name:"nuxt/nuxt3/static.md"},p=n(`<h1 id="nuxt3\u4E2D\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528" tabindex="-1">nuxt3\u4E2D\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528 <a class="header-anchor" href="#nuxt3\u4E2D\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528" aria-hidden="true">#</a></h1><p>nuxt3\u9879\u76EE\u4E2D\u7684\u9759\u6001\u8D44\u6E90\uFF08\u56FE\u7247\u3001css\u7B49\uFF09\u53EF\u4EE5\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684public\u548Cassets\u8FD9\u4E24\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u90A3\u4E48public\u548Cassets\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F</p><h2 id="public\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406\uFF08\u539F\u6837\u8F93\u51FA\uFF09" tabindex="-1">public\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406\uFF08\u539F\u6837\u8F93\u51FA\uFF09 <a class="header-anchor" href="#public\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406\uFF08\u539F\u6837\u8F93\u51FA\uFF09" aria-hidden="true">#</a></h2><p>\u5728\u9875\u9762\u4E2D\u4F7F\u7528public\u4E2D\u7684\u6587\u4EF6\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528/\u5C31\u4F1A\u6620\u5C04\u5230public\u76EE\u5F55</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500assets</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \u2514avatar.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500public</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \u2514avatar.jpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- about.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;img src=&quot;/img/avatar.jpg&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="assets\u4E2D\u7684\u6587\u4EF6\u5728\u6253\u5305\u65F6\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406" tabindex="-1">assets\u4E2D\u7684\u6587\u4EF6\u5728\u6253\u5305\u65F6\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406 <a class="header-anchor" href="#assets\u4E2D\u7684\u6587\u4EF6\u5728\u6253\u5305\u65F6\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u5C0F\u56FE\u7247\u4F1A\u88AB\u6253\u5305\u6210base64\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF0C\u5728\u9875\u9762\u4F7F\u7528assets\u4E2D\u7684\u6587\u4EF6\u65F6\u65F6\uFF0C\u901A\u8FC7~/assets\u5F15\u5165</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- about.vue --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;img src=&quot;~/assets/avatar.jpg&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),l=[p];function c(i,o,r,d,u,_){return e(),a("div",null,l)}var g=s(t,[["render",c]]);export{A as __pageData,g as default};