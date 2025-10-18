# Site web de La Girafe à Sainte-Consorce
[https://la-girafe.fr](https://www.la-girafe.fr/)

## Edition du contenu
### Modification du contenu des pages
- Se rendre dans ```contenus/sections/```
- Éditer les fichiers ```.html``` correspondant à chaque section

Les fichiers sont en format markdown. Il est possible d'y mettre du texte : 
- en gras avec ```**texte en gras**```
- en italique avec ```*texte en italique*```
- sur un fond plus sombre avec ```> texte sur fond sombre```
- avec un highlight en utilisant ```{{#bg}}texte highlighté{{/bg}}```

### Ajout/modification des événements
Les événements sont tous listés dans le même fichier ```contenus/evenements/```. Ils doivent respecter un formattage stricte qui est le suivant : 
```
- date: 2023-10-08
  date_lisible: du jeudi 5 au dimanche 8 octobre 2023
  type: atelier
  titre: Exposition "Regard"
  texte: Joëlle Reversat (sculptures) et Romain Schaller (peinture)  Et la deuxième ligne
```
La **date** doit être formattée ainsi: ```yyyy-mm-dd``` pour que les événements soient correctement triés sur le site. 
Les autres champs peuvent contenir n'importe quel texte ou lien internet. 

Le **type** correspond à la petite icône associée à chaque événement.  
Voilà les différents types possibles :  
- `atelier`  
- `concert`  
- `association`  
- `rencontre`  
- `divers`  
- `jeux`
