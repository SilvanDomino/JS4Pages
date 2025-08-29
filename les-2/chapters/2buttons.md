---
parent: Les 2 - Kalender - Javascript
title: Buttons
nav_order: 2
---

# Buttons
We hebben nu een werkende kalender. Nu moeten we de knoppen werkend krijgen.

## Stap 1: Pak de knoppen
Pak de buttons in de javascript.
```javascript
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
```

## Stap 2: Maak de functies en hang deze aan de knoppen.
We hebben de knop, en hangen een event listener aan. Wanneer de click event gebeurt, gaat een van functies uitgevoerd worden.

```js
function nextMonth() {

}

function prevMonth() {

}
nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);
```

## Stap 3: De kalender aanpassen
Wanneer we op 'next' klikken, willen we de volgende maand zien. Dat betekent dat we de alle dagen die we vorig hoofdstuk hebben gemaakt mogelijk moeten gaan aanpassen. De code hebben we gelukkig al. Als eerst moeten we de inhoud van days leeg halen. 
```js
function nextMonth() {
    days.innerHTML = "";
}
```
Laten we ook toevoegen dat we naar de volgende maand moeten gaan kijken.
`currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);`

Maak zelf de `prevMonth` functie aan.

### Stap 3b: de maand opnieuw tekenen.
De volgende stap is *(bijna) alle **code*** van vorig hoofdstuk opnieuw uit te voeren. Dit moeten we doen wanneer we op de *next month* knop drukken, maar ook als we op de *prev month* knop drukken. Dat kunnen we doen op 2 manieren.

1) Kopieeer de code nog een keer.
2) We zetten deze code in een functie genaamd `renderMonth`.

```js
function renderMonth(){
    const lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1, 1-1);
    const numberOfDays = lastDayOfMonth.getDate();
    //De 3 for loops
}
```

Als je alle stappen hebt doorlopen heb je nu een 'eenvoudige' kalender gemaakt met Javascript.
**Laat deze zien aan de docent** (Silvan Herrema)
---

## Einde les 2
Dit is het einde van les 2. Volgende les gaan we beginnen aan social media.