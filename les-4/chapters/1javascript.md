---
parent: Social Media 2 - Javascript
title: 1 - Javascript
nav_order: 2
---

# HTML Genereren via javascript

Er zijn 3 manieren om HTML te genereren via javascript. De methode die jullie voor deze opdracht gaan gebruiken is de meest eenvoudige methode, namelijk met gebruik *template literals*.

Als voorbeeld heb ik deze HTML. Van dit blok HTML code ga ik in javascript nabouwen.

Voor jouw eigen website, ga jouw eigen HTML en CSS gebruiken. Ga **NIET** *dit nabouwen*. 
```html
<article class="articleTile">
    <h3 class="articleTitle">Lorem ipsum delores septim tiberus</h3>
    <img class="article__img" src="https://placecats.com/300/200" alt="news image">
    <footer>
        <div>Likes: 10</div>
        <div>Comments: 10</div>
    </footer>
</article>
```

## Stap 1: Root element
Het root element is **netjes** om op de nette manier te gebruiken. Door een root element aan te maken hoeven we geen gebruik te maken van string manipulaties.

```js
let articleList = document.querySelector('#articleListID');

let rootElement = document.createElement("article");
rootElement.classList.add("articleTitle");
rootElement.innerHTML = `
<h3 class="articleTitle">Lorem ipsum delores septim tiberus</h3>
<img class="article__img" src="https://placecats.com/300/200" alt="news image">
<footer>
    <div>Likes: 10</div>
    <div>Comments: 10</div>
</footer>
`

//Hier voegen we ons HTML toe aan de lijst.
articleList.appendChild(rootElement);
```

Hier hebben we een root element aangemaakt voor ons artikel. 


## Stap 2: Functie
De volgende stap is het aanmaken van een functie. Iedere keer dat we de functie aanroepen wordt een nieuw html element. Zet hier de code in van vorige stap.

```js
function createPost(title, imgUrl){
    ///...
    ///hier je eerdere code
    ///...
    rootElement.innerHTML = `
        <h3 class="articleTitle">${title}</h3>
        <img class="article__img" src=${imgUrl} alt="news image">
        <footer>
            <div>Likes: 10</div>
            <div>Comments: 10</div>
        </footer>
        `
}
```

## Stap 3: Template literals


## Einde les 4
Dit is het einde van les 4. Volgende les gaan we beginnen aan het herstructureren van Social Media en asynchroon werken.