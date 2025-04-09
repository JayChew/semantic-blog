---
layout: layout.njk
title: Home
description: Explore blog posts about semantic HTML and web accessibility.
---

<article>
  <header>
    <h1>Welcome to the Semantic Blog</h1>
    <p>By <a href="/author">Author Name</a> | <time datetime="2025-04-07">April 7, 2025</time></p>
  </header>
  <section>
    <p>This blog covers topics on web development, HTML5 features, SEO techniques, and accessibility practice</p>
    <p>Check out our latest posts below!</p>
  </section>
</article>

<section id="latest-posts" aria-labelledby="latest-articles">
  <h2>Latest Articles</h2>

  <article>
    <header>
      <h3><a href="/posts/html5-changed-web/">How HTML5 Changed the Web</a></h3>
      <p>Posted on <time datetime="2025-04-06">April 6, 2025</time></p>
    </header>
    <section>
      <p>A short overview on why semantic HTML matters for the modern web.</p>
    </section>
  </article>

</section>

<label for="filter">Filter Posts:</label>
<input type="text" id="filter" placeholder="Type a keyword..." />
