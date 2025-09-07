---
parent: Les 2 - Kalender - Javascript
title: Dagen van de maand
nav_order: 1
---

# Dagen van de maand
We gaan nu de dagen van de maand dynamisch genereren, in plaats van alle dagen hardcoded in de HTML. Door de dagen dynamisch te generen kunnen we rekening houden met de verschillende hoeveelheid dagen van de maand en de verschillende startdagen van de maand.

## Dagen dynamisch genereren.
Als eerst gaan we wat HTML code weg gooien. Gooid alle dagen van de maand weg. Die gaan we straks via de javascript opnieuw aanmaken.
```html
<ol id="days" class="days">
</ol>
```

In de javascript pakken we deze lijst. Hier gaan we straks de dagen weer aan toe voegen. Ook is het handig om alvast te definieren naar welke maand we kijken.

```js
    const days = document.querySelector(".days");
    //We kijken naar het jaar 2025, en de 7e maand. Dus july 2025.
    let currentDate = new Date(2025, 6);
```

En vervolgens gaan we een heleboel **dag** elementen toevoegen aan het `days` element. Met deze for-loop maken we 31x een `li` element aan, geven het een class, geven het een tekst inhoud, en voegen het toe aan het *days* element.

```js
for (let i = 1; i <= 31; i++) {
    const day = document.createElement("li");
    day.classList.add("day");
    day.textContent = i;
    days.appendChild(day);
}
```

Probeer deze code maar uit!

## Hoeveelheid dagen in de maand
Om de hoeveelheid dagen per maand te krijgen moeten we een kleine truuk gebruiken. We gaan naar de eerst dag van de volgende maand. En gaan dan een dagje terug.

```js
const lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1, 1-1);
const numberOfDays = lastDayOfMonth.getDate();
```
Zet deze code boven de for-loop.

In de for-loop vervang de *31* met `numberOfDays`.

## Eerste dag van de maand
De eerste dag van de maand is zelden op een maandag. Dus we moeten de 'dag 1' verplaatsen naar de juiste kolom. De makkelijkste manier om dit te doen is door de juiste hoeveelheid *lege* elementen **voor** de 'dagen in de maand' te stoppen. Daar hebben we de eerste dag van de maand voor nodig, en dan vooral moeten we weten of dit op een ma/di/wo/do/vr/za/zo is. 

```js
const firstDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth(), 1).getDay();
if(firstDayOfMonth == 0) firstDayOfMonth = 7;
for (let i = 0; i < firstDayOfMonth - 1; i++) {
    const emptyDay = document.createElement("li");
    emptyDay.classList.add("empty");
    days.appendChild(emptyDay);
}
```

Zet deze code boven de for-loop van 'dagen in de maand'.

---

We hebben nu een werkende kalender. De volgende stap is bladeren naar de volgende of vorige maand.
[Volgend hoofdstuk: Naar de vorige maand en volgende maand](2buttons)