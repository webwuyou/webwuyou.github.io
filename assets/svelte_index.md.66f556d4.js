import{_ as s,c as n,o as a,a as l}from"./app.7d9e6929.js";const y=JSON.parse('{"title":"\u4EC0\u4E48\u662FSevelte","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u672C\u6E32\u67D3","slug":"\u6587\u672C\u6E32\u67D3"},{"level":2,"title":"html\u6E32\u67D3","slug":"html\u6E32\u67D3"},{"level":2,"title":"\u5C5E\u6027\u7ED1\u5B9A","slug":"\u5C5E\u6027\u7ED1\u5B9A"},{"level":2,"title":"\u4E8B\u4EF6\u7ED1\u5B9A","slug":"\u4E8B\u4EF6\u7ED1\u5B9A"},{"level":2,"title":"\u8BA1\u7B97\u5C5E\u6027","slug":"\u8BA1\u7B97\u5C5E\u6027"},{"level":2,"title":"\u591A\u5C5E\u6027\u4F20\u9012","slug":"\u591A\u5C5E\u6027\u4F20\u9012"},{"level":2,"title":"\u6761\u4EF6\u6E32\u67D3","slug":"\u6761\u4EF6\u6E32\u67D3"},{"level":2,"title":"\u5FAA\u73AF\u6E32\u67D3","slug":"\u5FAA\u73AF\u6E32\u67D3"},{"level":2,"title":"\u4E8B\u4EF6\u4FEE\u9970\u7B26","slug":"\u4E8B\u4EF6\u4FEE\u9970\u7B26"}],"relativePath":"svelte/index.md","lastUpdated":1673863527000}'),e={name:"svelte/index.md"},t=l(`<h1 id="\u4EC0\u4E48\u662Fsevelte" tabindex="-1">\u4EC0\u4E48\u662FSevelte <a class="header-anchor" href="#\u4EC0\u4E48\u662Fsevelte" aria-hidden="true">#</a></h1><p>sevelte\u548Cvue\u3001react\u4E4B\u7C7B\u7684\u6846\u67B6\u7684\u6838\u5FC3\u533A\u522B\u662F\uFF0Csevelte\u4F1A\u5728\u6253\u5305\u65F6\u5C06\u6846\u67B6\u7F16\u8BD1\u6210\u539F\u751F\u4EE3\u7801\uFF0C\u800C\u4E0D\u662F\u5728\u8FD0\u884C\u65F6\u518D\u53BB\u89E3\u6790\u6846\u67B6\u4EE3\u7801\uFF0C\u56E0\u6B64sevelte\u9879\u76EE\u6253\u5305\u540E\u7684\u4F53\u79EF\u4F1A\u66F4\u5C0F\uFF0C\u56E0\u4E3A\u4E0D\u4F1A\u5305\u542B\u6846\u67B6\u672C\u8EAB\uFF0Csevelte\u4EC5\u4EC5\u662F\u4F5C\u4E3A\u9879\u76EE\u7684\u5F00\u53D1\u4F9D\u8D56\u3002 \u8FD8\u6709\u4E00\u70B9\u5C31\u662F\uFF0C\u53EF\u4EE5\u5C06sevelte\u7EC4\u4EF6\u6253\u5305\u6210\u8DE8\u6846\u67B6\u7684\u5305\uFF0C\u63D0\u4F9B\u7ED9vue\u3001react\u9879\u76EE\u4F7F\u7528\uFF0C</p><h2 id="\u6587\u672C\u6E32\u67D3" tabindex="-1">\u6587\u672C\u6E32\u67D3 <a class="header-anchor" href="#\u6587\u672C\u6E32\u67D3" aria-hidden="true">#</a></h2><p>\u4F7F\u7528{name}\u6765\u6E32\u67D3\u53D8\u91CFname\uFF0C\u6CE8\u610F\u4E0D\u662F{</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;h1&gt;hello {name}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let name=&quot;world&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="html\u6E32\u67D3" tabindex="-1">html\u6E32\u67D3 <a class="header-anchor" href="#html\u6E32\u67D3" aria-hidden="true">#</a></h2><p>\u4F7F\u7528@html\u6765\u6E32\u67D3html\u5185\u5BB9</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;p&gt;{@html str}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let str=\`&lt;h1&gt;hello world&lt;/h1&gt;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C5E\u6027\u7ED1\u5B9A" tabindex="-1">\u5C5E\u6027\u7ED1\u5B9A <a class="header-anchor" href="#\u5C5E\u6027\u7ED1\u5B9A" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;img src={src}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let src=&quot;https://www.baidu.com/img/flexible/logo/pc/result.png&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5F53\u5C5E\u6027\u540D\u548C\u53D8\u91CF\u540D\u76F8\u540C\u65F6\u53EF\u4EE5\u7B80\u5199\u4E3A &lt;img {src} /&gt;</strong></p><h2 id="\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1">\u4E8B\u4EF6\u7ED1\u5B9A <a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>\u901A\u8FC7on:click\u6765\u7ED1\u5B9A\u4E8B\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;button on:click={handleClick}&gt;{num}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let num=1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function handleClick(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        num++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BA1\u7B97\u5C5E\u6027" tabindex="-1">\u8BA1\u7B97\u5C5E\u6027 <a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a></h2><p>sevelte\u63D0\u4F9B\u4E86\u53CD\u5E94\u5F0F\u58F0\u660E$: \u901A\u8FC7$:double\u8FD9\u6837\u7684\u5F62\u5F0F\u6765\u5B9A\u4E49,$:\u540E\u4E3A\u65B0\u53D8\u91CF\u7684\u540D\u79F0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;p&gt;{num} double is {doubleNum}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let num=1</span></span>
<span class="line"><span style="color:#A6ACCD;">    $:doubleNum=num*2</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528$:\u58F0\u660E\u53CD\u5E94\u5F0F\u7684\u8BED\uFF0C\u5F53count\u6539\u53D8\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6253\u5370\u4FE1\u606F</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$: console.log(\`the count is \${count}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u591A\u5C5E\u6027\u4F20\u9012" tabindex="-1">\u591A\u5C5E\u6027\u4F20\u9012 <a class="header-anchor" href="#\u591A\u5C5E\u6027\u4F20\u9012" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u7ED9\u7EC4\u4EF6\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u7684\u591A\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528{...obj}\u5C55\u5F00\u8FD0\u7B97\u7B26\u7684\u5F62\u5F0F\uFF0C\u7EC4\u4EF6\u4E2D\u901A\u8FC7$$props\u76F4\u63A5\u83B7\u53D6\uFF0C\u7C7B\u4F3Cvue\u4E2D\u7684v-bind\u548C$attrs\u7684\u7528\u6CD5</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	import Info from &#39;./Info.svelte&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	const pkg = {</span></span>
<span class="line"><span style="color:#A6ACCD;">		name: &#39;svelte&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		version: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">		speed: &#39;blazing&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		website: &#39;https://svelte.dev&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Info {...pkg}/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6761\u4EF6\u6E32\u67D3" tabindex="-1">\u6761\u4EF6\u6E32\u67D3 <a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- if --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {#if user.token}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button on:click={logout}&gt;\u9000\u51FA&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/if}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {#if !user.token}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button on:click={login}&gt;\u767B\u5F55&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/if&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- if else  --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {#if user.token}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button on:click={logout}&gt;\u9000\u51FA&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/if}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {:else}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;button on:click={login}&gt;\u767B\u5F55&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/if}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- if else if --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{#if x &gt; 10}</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;p&gt;{x} is greater than 10&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{:else if 5 &gt; x}</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;p&gt;{x} is less than 5&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{:else}</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;p&gt;{x} is between 5 and 10&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{/if}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5FAA\u73AF\u6E32\u67D3" tabindex="-1">\u5FAA\u73AF\u6E32\u67D3 <a class="header-anchor" href="#\u5FAA\u73AF\u6E32\u67D3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {#each list as item,index}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li&gt;{item.name}--{index+1}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/each}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4E0B\u6807index</strong>\uFF0C\u901A\u8FC7(key)\u6765\u6307\u5B9A\u552F\u4E00key</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {#each list as item (item.id)}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;li&gt;{item.name}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/each}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E8B\u4EF6\u4FEE\u9970\u7B26" tabindex="-1">\u4E8B\u4EF6\u4FEE\u9970\u7B26 <a class="header-anchor" href="#\u4E8B\u4EF6\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h2><p>\u5728\u4E8B\u4EF6\u540D\u540E\u901A\u8FC7|\u7B26\u53F7\u6765\u4F7F\u7528\u4E8B\u4EF6\u4FEE\u9970\u7B26</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;button on:click|once={handleClick}&gt;\u63D0\u4EA4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5E38\u7528\u7684\u4E8B\u4EF6\u4FEE\u9970\u7B26</p><table><thead><tr><th style="text-align:left;">\u4FEE\u9970\u7B26</th><th style="text-align:left;">\u529F\u80FD</th></tr></thead><tbody><tr><td style="text-align:left;">preventDefault</td><td style="text-align:left;">\u8C03\u7528event.preventDefault()\uFF0C\u7981\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:left;">\u8C03\u7528event.stopPropagation()\uFF0C\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</td></tr><tr><td style="text-align:left;">capture</td><td style="text-align:left;">\u5728\u6355\u83B7\u9636\u6BB5\u8C03\u7528</td></tr><tr><td style="text-align:left;">once</td><td style="text-align:left;">\u53EA\u4F1A\u6267\u884C\u4E00\u6B21</td></tr><tr><td style="text-align:left;">self</td><td style="text-align:left;">\u4EC5\u5F53event.target\u4E3A\u672C\u8EAB\u65F6\u624D\u6267\u884C</td></tr><tr><td style="text-align:left;">passive</td><td style="text-align:left;">\u4F18\u5316\u4E86\u5BF9 touch/wheel \u4E8B\u4EF6\u7684\u6EDA\u52A8\u8868\u73B0(Svelte \u4F1A\u5728\u5408\u9002\u7684\u5730\u65B9\u81EA\u52A8\u6DFB\u52A0\u6EDA\u52A8\u6761)\u3002</td></tr></tbody></table><p><strong>\u4FEE\u9970\u7B26\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528 on:click|once|capture={handleClick}</strong></p>`,34),p=[t];function c(o,i,r,C,A,d){return a(),n("div",null,p)}var h=s(e,[["render",c]]);export{y as __pageData,h as default};
