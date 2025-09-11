---
parent: Les 4 - Social Media - OOP
title: 1 - Javascript
nav_order: 2
---

# HTML Genereren via javascript

Er zijn 3 manieren om HTML te genereren via javascript. De methode die jullie voor deze opdracht gaan gebruiken is de professionele methode. 

Als voorbeeld heb ik deze HTML. Van dit blok HTML code ga ik in javascript nabouwen.

Voor jouw eigen website, ga jouw eigen HTML en CSS gebruiken. Ga **NIET** *dit nabouwen*. 
```html
<article class="articleTile">
    <h3 class="articleTitle">Lorem ipsum delores septim tiberus</h3>
    <img class="article__img" src="https://placecats.com/300/200" alt="news image">
    <footer>
        <div>Likes: 10</div>
        <div>Comments: 10</div>
        <button>Comments: 10</button>
    </footer>
    
</article>
```

## Stap 1: Root element
Het root element is een `article`. In onze HTML document maken we een nieuw *article tag* aan.

```js
let articleElement = document.createElement("article");
```
Dit is nu nog maar lege tag. We hebben alleen nog maar `<article></article>` aangemaakt.
We moeten nu ook nog een classname mee geven.
```js
articleElement.className = "articleTile";
```
Nu hebben we `<article class="articleTile"></article>`!

Dit element voegen we toe aan onze pagina met de volgende regel code (uitgaan dat je een) element met een *id* genaamd *article__list* hebt. 
```js
let parent = document.querySelector("#article__list");
```

## Stap 2: De titel
Het zelfde gaan we nu ook doen voor de titel van het artikel (de h3).
```js
let titleEl = document.createElement("h3");
titleEl.className = "articleTitle";
titleEl.innerText = "Lorem ipsum delores septim tiberus";
parent.appendChild(titleEl);
```

Het resultaat van deze regel codes is de volgende HTML code:
```html
<article class="articleTile">
    <h3 class="articleTitle">Lorem ipsum delores septim tiberus</h3>
</article>
```
Op deze manier bouw je stap voor stap jouw HTML code na in javascript.

## Stap 3: De afbeelding en footer
Op dezelfde manier kan je verder bouwen aan de andere onderdelen van jouw eigen social media/nieuws website posts.

## Einde les 2
Dit is het einde van les 3. Volgende les gaan we beginnen aan de javascript van Social Media.