// Stocker en fonction du genre dans un tableau les donnes du formulaires

var femmes = [] // tableau qui stock le genre feminin
var hommes = [] // tableau qui stock le genre masculin

function soumission() {

    event.preventDefault()
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var classe = document.getElementById("classe").value;
    var age = document.getElementById("age").value;
    var genre = document.getElementById("genre").value;

    // declare l'objet personne
    const personne = {
        prenom: prenom,
        age: age,
        genre: genre
    }

    // inscription des femmes
    if (genre == 'femme') {
        if (femmes.length == 5) {
            document.getElementById("error").style.display = "block"
            document.getElementById("error").innerHTML = "On affiche complet pour les femmes"

            setTimeout(() => {
                document.getElementById("error").style.display = "none"
            }, 5000);

        } else {
            femmes.push(personne)
            var tableauFemme = document.getElementById("femme")
            tableauFemme.innerHTML += `
            <tr>
                <td>${nom}</td>
                <td>${prenom}</td>
                <td>${age} ans</td>
                <td>${classe}</td>
                <td>${genre}</td>
                <td><a href="">supprimer</a></td>
            </tr>`
            document.getElementById("reset").click()
        }
    } else {
        if (hommes.length == 5) {
            document.getElementById("error").style.display = "block"
            document.getElementById("error").innerHTML = "On affiche complet pour les Hommes"
            document.getElementById("reset").click()
        } else {
            hommes.push(personne)
            var tableauHomme = document.getElementById("homme")
            tableauHomme.innerHTML += `
            <tr>
                <td>${nom}</td>
                <td>${prenom}</td>
                <td>${age} ans</td>
                <td>${classe}</td>
                <td>${genre}</td>
                <td><a href="">supprimer</a></td>
            </tr>`
            document.getElementById("reset").click()
        }
    }

}
