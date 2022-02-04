/*var  longueur = function(mot) {
    return mot.length;
};

console.log(longueur("alibaba"));


var effacer = function(lettre, mot) {
    mot = mot.replace(lettre, " ");
    return mot;
};

console.log(effacer("a", "allo"));
*/
//Créer une fonction second(tab) qui trouve le deuxième petit élément dans le tableau (Array) tab.
var second = function(tab) {
    var tempo;
    if (tab.length < 2) throw "Too short!";


trier (tab);
return tab[1];
};
var tableau=new Array();
tableau=[1, 13, 22, 12, 8, 4, 11];
console.log(second(tableau));


// Écrire une fonction compose(f,g) qui prend comme arguments deux fonctions à un argument, f et g, et qui retourne leur composition f . g.


// Écrire les fonctions map(f, [x1, x2, ..., xn]) qui étant donnée une fonction f et un tableau [x1, x2, ..., xn], retourne le tableau [f(x1), f(x2), ..., f(xn)].

// Écrire une fonction fmap([f1,f2,...,fk],x) qui prend comme arguments un tableau de fonctions et un nombre x, et qui retourne le tableau [f1(x), f2(x), ..., fk(x)].