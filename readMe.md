# Diagramme UML

## Cas d'utilisation
- **Envoyer un message**: L'utilisateur envoie un message à un autre utilisateur.
- **Recevoir un message**: L'utilisateur reçoit un message d'un autre utilisateur.
- **Ajouter un contact**: L'utilisateur ajoute un nouveau contact à sa liste.
- **Supprimer un contact**: L'utilisateur supprime un contact de sa liste.
- **Créer un groupe**: L'utilisateur crée un groupe de discussion.
- **Envoyer un message de groupe**: L'utilisateur envoie un message dans un groupe de discussion.
- **Recevoir un message de groupe**: L'utilisateur reçoit un message dans un groupe de discussion.

## Diagramme de classes

### User (Utilisateur):
- **Attributs**: userID, username, email, password
- **Méthodes**: envoyerMessage(), recevoirMessage(), ajouterContact(), supprimerContact(), creerGroupe()

### Message (Message):
- **Attributs**: messageID, contenu, dateEnvoi, expediteurID, destinataireID
- **Méthodes**: afficherMessage()

### Contact (Contact):
- **Attributs**: contactID, userID, contactUserID

### Groupe (Groupe):
- **Attributs**: groupeID, nomGroupe, dateCreation
- **Méthodes**: ajouterMembre(), supprimerMembre(), envoyerMessageGroupe()

### GroupeMembre (GroupeMembre):
- **Attributs**: groupeID, userID

### MessageGroupe (MessageGroupe):
- **Attributs**: messageID, groupeID, contenu, dateEnvoi, expediteurID

# MCD (Modèle Conceptuel de Données)

## Entités

### Utilisateur:
- userID (PK)
- username
- email
- password

### Message:
- messageID (PK)
- contenu
- dateEnvoi
- expediteurID (FK vers Utilisateur)
- destinataireID (FK vers Utilisateur)

### Contact:
- contactID (PK)
- userID (FK vers Utilisateur)
- contactUserID (FK vers Utilisateur)

### Groupe:
- groupeID (PK)
- nomGroupe
- dateCreation

### GroupeMembre:
- groupeID (FK vers Groupe)
- userID (FK vers Utilisateur)

### MessageGroupe:
- messageID (PK)
- groupeID (FK vers Groupe)
- contenu
- dateEnvoi
- expediteurID (FK vers Utilisateur)




![Photo de Profil](/diagramme/doudou.png)