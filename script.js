var nb1;
var nb2;

function fVerifNombre(champ){
  nb1 = parseInt(champ.value);
  if(nb1 == ''){
    alert("Veuillez saisir le 1er champ")
    return false;
  }
  else if (nb1 != '' && isNaN(nb1)) {
    alert('Veuillez saisir un nombre à virgule (1)')
    return false;
  }
  else {
    return true;
  }
}


function fVerifNombre2(champ){
  nb2 = parseInt(champ.value);
  if(nb2 == ''){
    alert("Veuillez saisir le 2eme champ")
    return false;
  }
  else if (nb2 != '' && isNaN(nb2)) {
    alert('Veuillez saisir un nombre à virgule (2)')
    return false;
  }
  else {
    return true;
  }
}

function fVerifForm(f){
  var chiffre1ok = fVerifNombre(f.firstNumber);
  var chiffre2ok = fVerifNombre2(f.secondNumber);

  if(chiffre1ok && chiffre2ok){
    let fois2 = parseFloat(nb1) * 2;
    let plus5 = fois2 + 5;
    let plus50 = plus5 * 50;
    let moinsAn = plus50 - nb2;
    let resultat = moinsAn + 1766;
    alert('pointure : = ' + nb1 + '\n' + 'année naissance = ' + nb2 + '\npointure X2 = ' + fois2 +'\nplus 5 = ' + plus5 + '\nX50 = ' + plus50 + '\n- année (' + nb2 + ') = ' + moinsAn + '\najout 1766 = ' + resultat);
    return true;
  }
    else
    {
      alert("Veuillez remplir correctement tous les champs");
      return false;
    }
  }
