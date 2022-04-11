import{_ as s,c as e,o as t,d as a}from"./app.ccb77a3e.js";const g='{"title":"Results","description":"","frontmatter":{},"headers":[{"level":2,"title":"Supports","slug":"supports"},{"level":2,"title":"Arguments","slug":"arguments"},{"level":2,"title":"Config","slug":"config"}],"relativePath":"guides/results.md","lastUpdated":1649596723000}',n={},r=a(`<h1 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-hidden="true">#</a></h1><p>This library uses <a href="https://github.com/test-results-reporter/parser" target="_blank" rel="noopener noreferrer">test-results-parser</a> to read test results from different test frameworks.</p><h2 id="supports" tabindex="-1">Supports <a class="header-anchor" href="#supports" aria-hidden="true">#</a></h2><p>Test results reporter type.</p><p>\u2705 TestNG</p><p>\u2705 JUnit</p><p>\u2705 xUnit</p><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><h4 id="type-string" tabindex="-1">&gt; type (string) <a class="header-anchor" href="#type-string" aria-hidden="true">#</a></h4><p>Name of the test runner.</p><h4 id="files-string" tabindex="-1">&gt; files (string[]) <a class="header-anchor" href="#files-string" aria-hidden="true">#</a></h4><p>Path to the test result files.</p><div class="danger custom-block"><p class="custom-block-title">LIMITATIONS</p><ul><li>Currently it supports only one test results report file.</li><li>No support for wildcard paths.</li></ul></div><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><p>Sample partial config file.</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testng&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;path/to/testng-results.xml&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,16),p=[r];function o(l,i,u,c,d,h){return t(),e("div",null,p)}var m=s(n,[["render",o]]);export{g as __pageData,m as default};