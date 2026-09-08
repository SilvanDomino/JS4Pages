---
parent: Social Media 3 - Async
title: Content inladen
nav_order: 3
---

# Content inladen

Ik ga er vanuit dat je via javascript met een enkele functie call een post kan aanmaken.
```js
let data1 = {
    user: "Vivien_on_the_hunt",
    likes: 201,
    comments: 67,
    text: "Black coat, white shoes, black hat, caddilac, yeah the boy's a time bomb"
}
makePost(data1);
```

## Maak een JSON bestand
Maak een .json bestand aan genaamd *data.json*. 
Vul dit bestand met jouw content, met minstens 10 posts.
```json
[
  {
    "user": "Vivien_on_the_hunt",
    "likes": 201,
    "comments": 67,
    "text": "Black coat, white shoes, black hat, caddilac, yeah the boy's a time bomb"
  },
  {
    "user": "PixelNomad",
    "likes": 87,
    "comments": 14,
    "text": "Coffee tastes better when it's earned after an all-nighter coding."
  }
]
```
<div class="note">
<b>Tip: <i>Gebruik hier AI voor</i><br><br></b>

Can you make me a JSON file with mock for my social media website? Content looks like this: <br>{ user: "Vivien_on_the_hunt", likes: 201, comments: 67, text: "Black coat, white shoes, black hat, caddilac, yeah the boy's a time bomb" } <br>I want an array of 10 objects.
</div>


## Fetch
Maak gebruik van de Fetch functie om de JSON binnen te halen.
```js
fetch('data.json')
.then(response=>response.json())
.then(data=>{
  console.log(posts);
  //HIER KOMT DE REST VAN DE CODE
})
```

## Gebruik de JSON
Als je de data binnen hebt kan je deze gebruiken om de posts aan te maken.
Er zijn 3 verschillende manieren om door een array heen te loopen in javascript. 

For-loop
```js
  for(let i = 0; i < posts.length; i++){
    makePost(posts[i]);
  }
```

For...of loop
```js
for(const post of posts){
  makePost(post);
}
```

forEach
```js
posts.forEach(post=>{
  makePost(post)
})
```

---
We hebben nu de javascript code geherstructureerd. Onze `main.js` bestand bestaat nu misschien uit 12 regels code. Ook hebben we content ingeladen vanuit een JSON bestand.

Volgende les gaan we aan de slag met de volgende opdracht, het bouwen van een Anime website.