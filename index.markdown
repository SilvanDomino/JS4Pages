---
layout: home
title: Frontend Programming
nav_order: 0
has_toc: false
---

# M9 Mobile Development - {{ page.title }}

Op deze website vind je links naar de opdrachten voor het vak Mobile Development in de module M9 Preflight.

---

[Lees hier hoe je vervolgens de opdrachten maakt en inlevert](instructie.html){: .btn .btn-blue }

---

## Lessen & Opdrachten

{% for lesson in site.data.lessons %}
{% assign today = "now"|date:"%Y%m%d" %}
{% assign lesson_date = lesson.datum|date:"%Y%m%d" %}

{% assign lesson_path = "les-" | append: lesson.number | append: "/index.markdown" %}
{% assign lesson_page = site.pages | where: "path", lesson_path | first %}
{% assign show_lesson = false %}
{% if lesson_page %}
{% if lesson_date <= today or site.settings.skip_date_check %}
{% assign show_lesson = true %}
{% endif %}
{% endif %}
{% if show_lesson %}
## Les {{ lesson.number }}:  {{ lesson.title }}
{: .text-purple-100 :}

{{ lesson.description }}

[Start](les-{{ lesson.number }}/){: .btn .btn-purple }
{% else %}
## Les {{ lesson.number }}:  {{ lesson.title }}
{: .text-grey-dk-000 :}

Deze les komt binnenkort online.
{% endif %}
---

{% endfor %}
