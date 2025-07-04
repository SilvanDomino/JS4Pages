---
layout: home
title: Overzicht
permalink: /overzicht/
---

#  Overzicht P1 2025-2026
{: .text-green-200}

## Bijzondere Data

* **1 September:** Introductie week
* **20 Oktober:** Herfst vakantie
* **10 November:** Tiende week
* **12 November:** Open dag

## Lessen
{% for lesson in site.data.lessons %}
### **Les {{ lesson.number }}:**  {{ lesson.title }}
{{ lesson.description }}
{% endfor %}


