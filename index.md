---
layout: home
title: "EACIT"
header-img: images/patrick-perkins-ETRPjvb0KM0-unsplash.jpg
---

<div class="container">
  <div class="col-md-6">

    <h2>Projects</h2>

    <ul >
      {% comment %} Only include pages with `nav: yes` in the front-matter; sort on sortTitle{% endcomment %}
      {% assign pages = (site.pages | where: "nav","yes" | sort: "sortTitle" ) %}
      {% for page in pages %}
      <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
      {% endfor %}
    </ul>


    </div>

    <p style="padding-top: 5em; font-size: 80%; font-style: italic">Photo by <a href="https://unsplash.com/@patrickperkins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Perkins</a> on <a href="https://unsplash.com/s/photos/service-design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>

</div>
