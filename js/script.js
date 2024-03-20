/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

//Creo il mio array
const myTeam = [
    {
      name : "Wayne barnett",
      role : "Founder & CEO",
      photo : "wayne-barnett-founder-ceo.jpg" 
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        photo : "angela-caroll-chief-editor.jpg" 
      },
      {
        name : "Walter Gordon",
        role : "Office Manager",
        photo : "walter-gordon-office-manager.jpg" 
      },
      {
        name : "Angela Lopez",
        role : "Social Media Manager",
        photo : "angela-lopez-social-media-manager.jpg" 
      },
      {
        name : "Scott estrada",
        role : "Developer",
        photo : "scott-estrada-developer.jpg" 
      },
      {
        name : "Barbara Ramos",
        role : "Graphics Designer",
        photo : "barbara-ramos-graphic-designer.jpg" 
      },
]
console.log(myTeam)