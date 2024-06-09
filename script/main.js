// Une fonction de validation de formulaire
let age = 0;
let anneeNais = 0;
let annee = 0;
let anneeFin = 0;
let moisres = 0;
let nbrJrs = 0;
let jrsres = 0;
let response = document.getElementById("respons");

form.onsubmit = () => {
    age = Number.parseFloat(document.getElementById("age").value);
    nbrJrs = Number.parseFloat(document.getElementById("nbrJrs").value);

    annee = Number.parseInt(nbrJrs / 365);
    moisres = Number.parseInt((nbrJrs % 365)/30);
    jrsres = (nbrJrs % 365) % 30 ;

    anneeNais = 2024 - age;
    anneeFin = anneeNais + annee;


    response.textContent = "L'anné où l'age sera éteint est : "+anneeFin+' année '+ moisres +' mois '+jrsres+' jours ';
    return false;
} 



