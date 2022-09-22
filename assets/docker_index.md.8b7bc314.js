import{_ as s,c as a,o as n,a as e}from"./app.335eea8d.js";const C=JSON.parse('{"title":"\u5B89\u88C5docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"image\u955C\u50CF","slug":"image\u955C\u50CF"},{"level":2,"title":"container\u5BB9\u5668","slug":"container\u5BB9\u5668"},{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"}],"relativePath":"docker/index.md","lastUpdated":1663820867000}'),l={name:"docker/index.md"},p=e(`<h1 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h1><h2 id="image\u955C\u50CF" tabindex="-1">image\u955C\u50CF <a class="header-anchor" href="#image\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u672C\u5730\u5B89\u88C5\u7684\u955C\u50CF\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4E0B\u8F7Dcentos\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull centos</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="container\u5BB9\u5668" tabindex="-1">container\u5BB9\u5668 <a class="header-anchor" href="#container\u5BB9\u5668" aria-hidden="true">#</a></h2><p>\u6709\u4E86\u955C\u50CF\u4EE5\u540E\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u955C\u50CF\u8FD0\u884C\u5BB9\u5668</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6240\u6709\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps --all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5BB9\u5668 \u5BB9\u5668id\u6216\u8005name</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm  60cc32129411</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u5BB9\u5668\u65F6\u6307\u5B9A\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name myName centos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u67D0\u4E2A\u5BB9\u5668\u7684\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">docker logs myName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u505C\u6B62\u67D0\u4E2A\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop myName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u52A8\u67D0\u4E2A\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start myName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u542F\u67D0\u4E2A\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker restart myName</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5E26\u4EA4\u4E92\u7684\u5BB9\u5668" tabindex="-1">\u5E26\u4EA4\u4E92\u7684\u5BB9\u5668 <a class="header-anchor" href="#\u5E26\u4EA4\u4E92\u7684\u5BB9\u5668" aria-hidden="true">#</a></h4><p>\u76F4\u63A5\u4F7F\u7528docker run myName\u540E\uFF0C\u5BB9\u5668\u5C31\u9000\u51FA\u4E86\uFF0C\u9700\u8981\u52A0\u4E0A--interactive --tty\uFF0C\u7B80\u5199-i -t \uFF0C\u8FD9\u6837\u5C31\u80FD\u521B\u5EFA\u5BB9\u5668\uFF0C\u5E76\u8FDB\u5165\u547D\u4EE4\u884C</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -i -t centos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u5728\u540E\u53F0\u8FD0\u884C\u7684\u5BB9\u5668-detach-\u7B80\u5199-d" tabindex="-1">\u5728\u540E\u53F0\u8FD0\u884C\u7684\u5BB9\u5668 --detach \u7B80\u5199-d <a class="header-anchor" href="#\u5728\u540E\u53F0\u8FD0\u884C\u7684\u5BB9\u5668-detach-\u7B80\u5199-d" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run --detach centos ping webwuyou.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><h4 id="_1-\u624B\u52A8\u521B\u5EFA-\u4E0D\u63A8\u8350" tabindex="-1">1.\u624B\u52A8\u521B\u5EFA(\u4E0D\u63A8\u8350) <a class="header-anchor" href="#_1-\u624B\u52A8\u521B\u5EFA-\u4E0D\u63A8\u8350" aria-hidden="true">#</a></h4><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -i -t centos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5728centos\u4E2D\u6DFB\u52A0nodejs\u4E0B\u8F7D\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">curl  --silent --location https://rpm.nodesource.com/setup_lts.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  bash -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528yum\u5B89\u88C5nodejs</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install nodejs -y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5C06\u5F53\u524D\u7684\u5BB9\u5668\u63D0\u4EA4\u4E3A\u955C\u50CF</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="_2-\u4F7F\u7528dockerfile\u521B\u5EFA\u955C\u50CF" tabindex="-1">2.\u4F7F\u7528dockerfile\u521B\u5EFA\u955C\u50CF <a class="header-anchor" href="#_2-\u4F7F\u7528dockerfile\u521B\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h4>`,15),c=[p];function o(t,i,r,d,h,y){return n(),a("div",null,c)}var m=s(l,[["render",o]]);export{C as __pageData,m as default};
