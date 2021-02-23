# https---github.com-Olympiens-gamereviewmicroservice

Bonjour!
Instructions :
voici comment utiliser le projet :
Une fois le code téléchargé, il suffit d'entrer la commande "npm start" dans le dossier "gamereviewmicroservice"
Une page de browser web devrait ouvrir, avec un html qui permet de saisir le review et un commentaire optionnel.
Malheureusement, je n'arrive pas à bien utiliser client-sessions de express afin de générer un sessionId qui expire après un temps.
Néanmoins, on peut tester l'application facilement. J'ai déjà entré 5 champs dans la collection "feedbacks"
Les prochains que vous rentrer commence avec un sessionId bidon = 0, incrémenté de 1 par clique.
Simplement entrer cliquer sur le bouton "Submit" avec un review et avec ou sans commentaire pour ajouter un document à la collection.
pour avoir les 15 review les plus récent, tester avec l'url suivant : http://localhost:3000/getlast15reviews pour avoir les (jusqu'à) 15 reviews les plus récents.
Si l'interface ne plait pas, utiliser un logicel en ligne comme postman avec l'url suivant : http://localhost:3000/feedback/"sessionid" (donner le session Id voulu)

Database Design : une seule collection comme-ci : 
      sessionId: {
      type: String,
      required: true,
      unique : true
      },
      review: {
       type: Number,
       required: true
      },
      comment: {
        type: String
      },
      created_at: { 
        type: Date,
        required: true
      }
      });

API design: 2 route, /feedback/"sessionId" avec review et comment dans le body et le Ubi-userId (simulé par un UUID) dans le header
 et GET /getlast15reviews , sans payload.
 
