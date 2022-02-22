function genererURL(serveur, chemin, json) {
    var parsedJSON = JSON.parse(json);
    var returnURL = "http://" + serveur + chemin;

    if (Object.keys(parsedJSON) !== 0) { //vérifier si JSON n'est pas vide
        var level = 0; //commencer arbre à 0
        for (var prop in parsedJSON) {
            if (level === 0) {
                returnURL = returnURL.concat("?"); //après chemin on met ?
            } else {
                returnURL = returnURL.concat("&"); //chaque élément après séparé par &
            }
            returnURL = returnURL.concat(prop.replaceAll(" ", "%20"), "=", parsedJSON[prop].replaceAll(" ", "%20")); //remplacer espace par %20 dans la clé et la valeur
            level++;
            //console.log(prop);
            //console.log(parsedJSON[prop]);
        }
    }
    
    return returnURL;
}

var serveur = "w4.uqo.ca";
var chemin = "/calc.cgi";
var json = '{"q": "a b c", "lang": "fr"}'

var url = genererURL(serveur, chemin, json);

console.log(url);
//"http://w4.uqo.ca/calc.cgi?q=a%20b%20c"