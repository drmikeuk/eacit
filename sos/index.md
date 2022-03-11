---
layout: sosblank
title: "Start of Session"
nav: "yes"
sortTitle: "Start of Session"
---

<div class="container">
  <div class="col-md-6">

    <h2>Start of Session</h2>

    <p>This site contains a set of prototypes with dummy content to begin to explore the data and how it might be displayed. It doesn’t reflect the final site design, colours, etc.</p>

    <p>Ignore <b>how</b> you filter in these prototypes;<br/>check that we are showing the <b>right information</b> to the <b>right users</b>.</p>

    <h3>Prototypes</h3>

    <ul >
      {% comment %} Only include pages with `nav: yes` in the front-matter; sort on sortTitle{% endcomment %}
      {% assign pages = (site.pages | where: "sosnav","yes" | sort: "sortTitle" ) %}
      {% for page in pages %}
      <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
      {% endfor %}
    </ul>


    </div>
</div>
