---
parent: Social Media 3 - Async
title: Code refractoren
nav_order: 2
---

# Code refractoren naar functie
Als het goed is heb je nu een heleboel javascript code die een HTML element genereerd met jouw social media post. Wat we willen is de code zo structureren dat we de posts heel eenvoudig kunnen aanmaken. **Bijvoorbeeld**:

```js
let data1 = {
    user: "Vivien_on_the_hunt",
    likes: 201,
    comments: 67,
    text: "Black coat, white shoes, black hat, caddilac, yeah the boy's a time bomb",
    imgUrl: "https://picsum.photos/200/300"
}

makePost(data1.user, data.imgUrl);
```


## Refractoren
We hebben nu een doel hoe onze code er uit moet gaan zien en hoe onze code gebruikt kan gaan worden. Gebruik **niet** de code van *deze tutorial*, maar gebruik de code van jouw eigen social media website. 

Als we deze HTML code hebben:
```html
<article class="articleTile">
    <h3 class="articleTitle">Lorem ipsum delores septim tiberus</h3>
    <footer>
        <div>Likes: 10</div>
        <div>Comments: 10</div>
    </footer>
</article>
```

Dan ziet onze Javascript code er als volgt uit:

```js
function createPost(title, imgUrl) {
  ///...
  ///hier je eerdere code
  ///...
  rootElement.innerHTML = `
    <h3 class="articleTitle">${title}</h3>
    <img class="article__img" src="${imgUrl}" alt="news image">
    <footer>
        <div>Likes: 10</div>
        <div>Comments: 10</div>
    </footer>
`;
}
```

---

## Meerde bestanden
We hebben nu een best groot bestand met veel code. Laten we dit opruimen en gebruik maken van meerdere javascript bestanden. Vooral de `makePost` functie zou mooi zijn in z'n eigen bestand. Hier voor moeten we gebruik maken van JS modules. 

1. Maak een bestand genaamd `post.js`.
2. Zet de `makepost` functie in dit bestand. *(Knip en plak)*
3. Exporteer de `makepost` functie. Zet de volgende code onder de functie.
```js
export makePost;
```
4. Open `main.js` en importeer de makepost functie. 
```js
import {makepost} from 'post';
```
5. Pas de *script tag* aan in de HTML. Voeg `type="module"` toe. Dit moeten we doen omdat met javascript in meerdere bestanden werken op deze manier relatief nieuw is.
```html
<script src="main.js" type="module"></script>
```

6. Nu kan je in `main.js` alsnog makePost() aanroepen om nieuwe posts aan te maken!
---
Vorige les ben je hard bezig geweest met javascript code schrijven, en nu met een paar kleine aanpassingen heb je ineens code die heel erg herbruikbaar is!
[Volgend hoofdstuk: Content inladen](3async.html)