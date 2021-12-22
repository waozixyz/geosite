---
slug: GN2-Jingle-Meows
title: 'GeoNews #2 - Jingle Meows'
issue: 2
date: 2021-12-21
excerpt: "Thanks for opening GEONEWS. It’s with this publication that we intend to distill our most important information into one place. Like every NONACO endeavour, we’ll see how this idea evolves and grows over the following months."
tags: [News]

---

## **Important News**

![snowfall](/geonews/2_teaser.png)

### Introduction

It's that magical time of the year again when NONACO creates an artificial snowfall in Geocity and we all buy things for one another.
Our market research shows that consumers enjoy the comforting atmosphere of snow-pixels falling from the sky, which is why we have provided a winter theme for anyone playing Geocats:V2.5.

The team at Nonaco would like to extend warm wishes to everyone here as they celebrate in their various ways. We appreciate you!

Our team won't be working too hard for the rest of the year, but we will be online to chill a bit, send out prizes, and collect feedback from the upcoming patch ... GEOCATS:V2.5!

### GEOCATS:V2.5 - Cold Snap

- Geocity has been given a winter theme with falling snow and a custom song! Players can anticipate a special gift waiting for them when they visit this frigid map for the first time.
- Do you have a **Yule Cat**, or a **Pumpkin Cat**? Congratulations! The game will soon be open to you!
- Keep your eyes out for a couple new characters and NFTs to win in-game.
- The Groundcat Puzzle has been reimplemented!
- We've removed the creepy city until next year. Version 2.5 will allow players with the Pumpkin Puzzle NFT to toggle the creepy theme in Geocity. 
- Geodex ProtoHYPE! :)

### GEOCATS:V3 - The Great Litterbox

##### Cutscenes

We're happy with the way our base dialogue system is working, but we felt that we could improve and create another artistic way to share narrative. V3 Players can look forward to seeing the first ever Geocats cutscenes... presented as they navigate the arid sand dunes of the Great Litter-Box. 

##### GeoQuariums

These interstellar terrariums are presently in production. More important info will be released later. They function as a convenient place to observe all your precious cats like some sort of omnipotentent mastermind.

---

## **Arts & Culture**
![snowfall](/geonews/snowfall_original.png)

### Putting the Art in Artificial Snow.

##### *On finding a functional compromise between mechanics and style.*

One of my tasks for *Geocats:V2.5* was to make a convincing snowfall effect.
	This was a project that I really wanted to take on, because I love snow levels in videogames.
	After researching a few of my favourite pixel snowfalls, I decided to draw the image manually in Krita (The image editor we use predominantly in production).

Three layers of snow, falling at different speeds to create a paralax effect. The trick to making this illusion work is to have the snow falling faster in the background than in the front. 
Here is the basic design, this blueprint covers twice the height of the Geocity level, to account for a complete snowfall animation. *(800x1200)*

| Snow Frame | Distance of Movement During 20 Frame Loop | Speed  | Number of Loops per Animation Frame |
| ---------- | ----------------------------------------- | ------ | :---------------------------------: |
| 1 (Front)  | 20 Pixels / Loop                          | Slow   |                 20                  |
| 2 (Middle) | 40 Pixels / Loop                          | Medium |                 10                  |
| 3 (Back)   | 400 Pixels / Loop                         | Fast   |                  1                  |

Getting this logic into the form of pixels was a logistic *Nightmare Before Christmas*... 
I moved each layer of the image, respective to its corresponding frame, 20 times. After saving all 20 frames into a folder, I merged them into one giant spritesheet image.

This 6000 x 1600 monstrosity was the result of my labour (Zoom in for full effect.).

![snowfall](/geonews/falling_snow_spritesheet.png)

Although beautiful when used in the game, it won this unfortunate title:

### ***Most Resource-Intense Graphic in Geocats***

In the end, we decided to go with the modern solution of using a particle effect in our game-engine, Godot.
The retro concepts and style remain the same, but our overall filesize has been greatly optimised. 

*(Players can now look forward to Geocats:V2.5 in the next few days, rendering ice cold snow without the risk of their computer overheating...)*

— *Kurt*

---

## **Research & Development**
![Sunset](/geonews/desert_sky.png)
### Estonian E-Residency and Nonaco

After a lot or research and deliberation, we are proud to share that Nonaco is officially a business registered in Estonia! 

This allows us to work internationally, take our operations a bit more seriously, and offer more fun features for our community in the long run. 

![Nonaco](/geonews/nonaco.png)

### Serverside

We've been working on an enhanced database system that will keep the player saved on whatever map they exit the game on. We'll focus an article on this subject in one of the next issues. 


---
## **Editorials & Opinions**

### **Festive Interrogation**s
It's certainly difficult entertaining family at this time of year, especially when your Grandma asks why you've spent your savings on digital cats. Here's my advice - Offer her a catnip brownie.

— *Steve French*

### **On the Existence of NO.Cat**
I have heard rumours of a glitched-out cat, living inside those evil entertainment machines at Geistesfluch Arcade. Whether or not these claims are substantiated by fact, I propose we remove this horrible business from our fair city. 

— *Concerned Citizen*

### **In Space No One Can Hear You Meow...**
These creeps from Nonaco expect us to believe that we live on a giant artificial-ring orbiting around a solar body!? Someone's been watching too many sci-fi movies. 

— *Beam_Me_Up_Kitty*

### Letter from the Editor

See you all in 2022.
— *Kurt*

Have something to say? *Opinions, comments, questions, and concerns can be sent to wassup@geocats.net*

---

## **Communty Events**

### Winter Festivity Contest

Here are the lucky winners. Thank you all very much for participating!

![winter](/geonews/snow_2.png)
![winners](/geonews/winter_winners.png)

---

## **NONACO "Fun-Zone"**

### Stray Cat Program

Do you have a stray or adopted cat in real life? 
Let us know, and we'll happily send you a Geocat for being such a cool person! Send us a picture and note and we'll get back to you... Please don't dox yourself though. :)

![Ancient Solar System](/geonews/ancient_solarsystem.png)

### Word-Search
![word search](/geonews/word_search_2.png)


| cactus            |      | clowder       |      | feline        |      |
| ----------------- | ---- | ------------- | ---- | ------------- | ---- |
| **geoquarium**    |      | **groundcat** |      | **hogwash**   |      |
| **immutable**     |      | **laser**     |      | **litterbox** |      |
| **megastructure** |      | **mushroom**  |      | **neocat**    |      |
| **Nonaco**        |      | **snowfall**  |      | **unique**    |      |

This week there's only one prize. First person to complete the puzzle wins a Geocel.
**(Wordsearch has been completed... Please try again in issue 3!)**

---

[Join us on Discord, for more Geocracy! ](https://discord.gg/JW6mgyN3rk) 

<center>

![feline closed eyes](/geonews/feline_closed_eyes.png)
</center>

<style>
img {
    max-width: 100%;
}
</style>