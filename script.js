function fAffiche(){
let nb1 = parseFloat(document.getElementById("shoeSize").value);
let nb2 = parseInt(document.getElementById("yearOfBirth").value);
let fois2 = nb1 * 2;
let plus5 = fois2 + 5;
let plus50 = plus5 * 50;
let moinsAn = plus50 - nb2;
let resultat = moinsAn + 1766;
alert('pointure : = ' + nb1 + '\n' + 'année naissance = ' + nb2 + '\npointure X2 = ' + fois2 +'\nplus 5 = ' + plus5 + '\nX50 = ' + plus50 + '\n- année = ' + moinsAn + '\najout 1766 = ' + resultat);
}
