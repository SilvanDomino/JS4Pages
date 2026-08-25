---
parent: Les 1 - Kalender - HTML en CSS
title: Header en weekdagen
nav_order: 3
---

# Header en weekdagen

## Header
In de header komen 3 elementen.
* Vorige maand knop
* De huidige maand en jaar
* Volgende maand knop.

```html
<header class="header">
    <button class="navbutton" id="prev">prev</button>
    <h2 id="date">July 2025</h2>
    <button class="navbutton" id="next">next</button>
</header>
```

Om deze naast elkaar te krijgen kan je gebruik maken van *grid* of *flexbox*. Ik ben in dit geval wel fan van grid.

```css
.header{
    display: grid;
    grid-template-columns: 1fr 300px 1fr;
}
```
Ik geef het element met de maand/jaar 300 pixels, want dan weet ik zeker dat de hele tekst weergeven kan worden. En de knoppen geef ik 1fr zodat ze allebei altijd even groot zijn.

Stijl deze verder zelf.

## Weekdagen
De weekdagen is een vaste lijst van dagen.
```html
<ol class="weekdays">
    <li class="weekday">MA</li>
    <li class="weekday">DI</li>
    <li class="weekday">WO</li>
    <li class="weekday">DO</li>
    <li class="weekday">VR</li>
    <li class="weekday">ZA</li>
    <li class="weekday">ZO</li>
</ol>
```
Stijl deze zodat ze precies boven de kolommen van de dagen van de maand zijn.

---

## Opdracht: Stylen van Kalender
Zorg er voor dat jouw Kalender mooi gestyled is. 

Dit is het einde van deze les. Volgende les gaan we aan de slag met de javascript.