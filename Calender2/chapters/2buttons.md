---
parent: Kalender 2 - Javascript
title: Buttons
nav_order: 2
---
# Buttons
We hebben nu een werkende kalender. Nu moeten we de knoppen werkend krijgen.

## Stap 0: Maak de knoppen
In de HTML ontbreken nog knoppen om van maand te navigeren. Maak deze aan. Geef ze de id `prev` (voor vorige maand) en `next` (voor volgende maand).

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

1. Kopieeer de code nog een keer. In de functie voor vorige maand en volgende maand. We hebben dan 3x deze code.
2. We zetten deze code in een functie genaamd `renderMonth`. En roepen deze functie aan iedere keer dat de *maand* opnieuw getekent moet worden.

```js
function renderMonth(){
    const lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1, 1-1);
    const numberOfDays = lastDayOfMonth.getDate();
    //De 3 for loops
}
```
We doen natuurlijk de tweede methode. 
Als je alle stappen hebt doorlopen heb je nu een 'eenvoudige' kalender gemaakt met Javascript.
**Laat deze zien aan de docent** (Silvan Herrema)

## Extra: Styling
De dagen van vorige maand en de dagen van de volgende maand hebben dezelfde stijl als die van de huidige maand. Pas dit aan. 
Zorg dat het duidelijk is dat de dagen van de vorige maand niet bij de huidige maand horen. 


---

## Einde les 2
Dit is het einde van les 2. Volgende les gaan we beginnen aan social media.