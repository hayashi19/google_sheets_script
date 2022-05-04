// SET: hiragana array list
var hiraganaListH = [
    ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "が", "ざ", "だ", "ば"],
    ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", "ぎ", "じ", "ぢ", "び"],
    ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", "ぐ", "ず", "づ", "ぶ"],
    ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", "げ", "ぜ", "で", "べ"],
    ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", "ご", "ぞ", "ど", "ぼ"],
    ["ん"]
];

// Ichidan exception word
var ichidanException = ["見る", "出来る", "出る", "着る", "寝る"]

var deshou = "でしょう"
var rou = "ろう"
var darou = "だろう"
var imasu = "います"
var imasen = "いません"
var iru = "いる"
var imashita = "いました"
var imasendeshita = "いませんでした" 
var ita = "いた"
var kereba = "ければ"
var ra = "ら"
var sou = "そう"
var tai = "たい"
var tagaru = "たがる"
var nagara = "ながら"

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION VERB TYPE 
function WordType(input){

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0　|| ichidanException.indexOf(input) >= 0) {
    return "Ichidan";
  }
  
  // Check type III irregular
  if(input == '来る' || input == 'する'){
    return "Irregular";
  }
  
  // Check type I Godan
  else{
    return "Godan";
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION verbKanjiPolitePresentPositive 
function KanjiPolitePositive(input){

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'ます');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来ます";
  }

  if(input == 'する'){
    return "します";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ます');
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION VERB POLITE PRESENT NEGATIVE
function KanjiPoliteNegative(input) {

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ません');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ません";
  
  }

  if(input == 'する'){
  
    return "しません";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
  
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ません');
  
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION 
function KanjiCasualNegative(input) {
  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ない');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ない";
  
  }

  if(input == 'する'){
  
    return "しない";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'ない');   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'ない');
    }

  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteVolitionalPositive(input) {
  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'ましょう');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来ましょう";
  }

  if(input == 'する'){
    return "しましょう";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ましょう');
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteVolitionalNegative(input) {
  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ないでしょう');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ないでしょう";
  
  }

  if(input == 'する'){
  
    return "しないでしょう";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'ないでしょう');   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'ないでしょう');
    }
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiVolitonal(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'よう');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来よう";
  }

  if(input == 'する'){
    return "しよう";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[4][index] + 'う');
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainVolitionalNegative(input) {
  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ないだろう');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ないだろう";
  
  }

  if(input == 'する'){
  
    return "しないだろう";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'ないだろう');   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'ないだろう');
    }

  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiTe(input) {
  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て";
  
  }

  if(input == 'する'){
  
    return "して";
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って");
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで");
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて");
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで");
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して");
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiPoliteImperative(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'てください');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来てください";
  
  }

  if(input == 'する'){
  
    return "してください";
  
  }

  var kudasai = "ください" 
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + kudasai);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + kudasai);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて" + kudasai);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + kudasai);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + kudasai);
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteImperativeNegative(input) {

  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ないでください');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ないでください";
  
  }

  if(input == 'する'){
  
    return "しないでください";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'ないでください');   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'ないでください');
    }

  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiCasualImperative(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'ろ');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来い";
  }

  if(input == 'する'){
    return "しろ";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index]);
  }
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainImperativeNegative(input) {

  return input + "な"
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiPolitePast(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ました');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ました";
  
  }

  if(input == 'する'){
  
    return "しました";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
  
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ました');
  
  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiPolitePastNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ませんでした');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ませんでした";
  
  }

  if(input == 'する'){
  
    return "しませんでした";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ませんでした');

  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiCasualPast(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'た');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来た";
  
  }

  if(input == 'する'){
  
    return "した";
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "った");
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んだ");
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いた");
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いだ");
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "した");
  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiCasualPastNegative(input) {

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'なかった');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来なかった";
  
  }

  if(input == 'する'){
  
    return "しなかった";
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'なかった');   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'なかった');
    }

  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION 
function verbKanjiPolitePastVolitionalPositive(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'たでしょう');
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来たでしょう";
  
  }

  if(input == 'する'){
  
    return "しましたろう";
  
  }

  var deshou = "でしょう"
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "った" + deshou);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んだ" + deshou);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いた" + deshou);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いだ" + deshou);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "した" + deshou);
  }
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePastVolitionalNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'なかった' + deshou);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来なかった" + deshou;
  
  }

  if(input == 'する'){
  
    return "しなかった" + deshou;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'なかった' + deshou);   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'なかった' + deshou);
    }

  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainPastVolitionalPositive(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'た' + rou);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来た" + rou;
  
  }

  if(input == 'する'){
  
    return "した" + rou;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "った" + rou);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んだ" + rou);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いた" + rou);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いだ" + rou);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "した" + rou);
  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainPastVolitionalNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'なかった' + darou);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来なかった"+ darou;
  
  }

  if(input == 'する'){
  
    return "しなかった" + darou;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'なかった' + darou);   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'なかった' + darou);
    }

  }
  
}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION 
function verbKanjiPoliteProgressivePositive(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + imasu);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + imasu;
  
  }

  if(input == 'する'){
  
    return "して" + imasu;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + imasu);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + imasu);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + imasu);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + imasu);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + imasu);
  }

}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteProgressiveNegative(input) {
  
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + imasen);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + imasen;
  
  }

  if(input == 'する'){
  
    return "して" + imasen;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + imasen);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + imasen);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + imasen);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + imasen);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + imasen);
  }

}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiProgressive(input) {
  
   // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + iru);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + iru;
  
  }

  if(input == 'する'){
  
    return "して" + iru;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + iru);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + iru);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + iru);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + iru);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + iru);
  }

}

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function  verbKanjiPolitePastProgressivePositive(input) {
     // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + imashita);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + imashita;
  
  }

  if(input == 'する'){
  
    return "して" + imashita;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + imashita);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + imashita);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + imashita);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + imashita);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + imashita);
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePastProgressiveNegative(input) {

       // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + imasendeshita);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + imasendeshita;
  
  }

  if(input == 'する'){
  
    return "して" + imasendeshita;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + imasendeshita);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + imasendeshita);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + imasendeshita);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + imasendeshita);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + imasendeshita);
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainPastProgressivePositive(input) {

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'て' + ita);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来て" + ita;
  
  }

  if(input == 'する'){
  
    return "して" + ita;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "って" + ita);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んで" + ita);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いて"  + ita);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いで" + ita);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "して" + ita);
  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiConditional(input) {
    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'れば');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来れば";
  }

  if(input == 'する'){
    return "すれば";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index] + "ば");
  }
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainProvitionalConditionalNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'な' + kereba);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来な" + kereba;
  
  }

  if(input == 'する'){
  
    return "しな" + kereba;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'な' + kereba);   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'な' + kereba);
    }

  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteConditionalPositive(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ました' + ra);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ました" + ra;
  
  }

  if(input == 'する'){
  
    return "しました" + ra;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
  
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ました' + ra);
  
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteConditionalNegative(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'ませんでした' + ra);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来ませんでした" + ra;
  
  }

  if(input == 'する'){
  
    return "しませんでした" + ra;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + 'ませんでした' + ra);

  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function	verbKanjiPlainConditionalPositive(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'た' + ra);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来た" + ra;
  
  }

  if(input == 'する'){
  
    return "した" + ra;
  
  }
  
  // Check type I Godan
  if(input.slice(-1) == 'う' || input.slice(-1) == 'つ' || input.slice(-1) == 'る') {
    return input.replace(input.slice(-1), "った" + ra);
  }

  if(input.slice(-1) == 'ぬ' || input.slice(-1) == 'ぶ' || input.slice(-1) == 'む') {
      return input.replace(input.slice(-1), "んだ" + ra);
  }

  if(input.slice(-1) == 'く') {
      return input.replace(input.slice(-1), "いた" + ra);
  }

  if(input.slice(-1) == 'ぐ') {
      return input.replace(input.slice(-1), "いだ" + ra);
  }

  if(input.slice(-1) == 'す') {
      return input.replace(input.slice(-1), "した" + ra);
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainConditionalNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {

    return input.replace(input.slice(-1), 'なかった' + ra);
  
  }
  
  // Check type III irregular
  if(input == '来る'){
    
    return "来なかった"  + ra;
  
  }

  if(input == 'する'){
  
    return "しなかった" + ra;
  
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    if(index == 0) {
        return input.replace(input.slice(-1), "わ" + 'なかった' + ra);   
    }
    else {
        return input.replace(input.slice(-1), hiraganaListH[0][index] + 'なかった' + ra);
    }

  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePotentialPositive(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られます');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来られます";
  }

  if(input == 'する'){
    return "できます";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index] + "ます");
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePotentialNegative(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られません');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来られません";
  }

  if(input == 'する'){
    return "できません";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index] + "ません");
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiPotential(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られる');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来られる";
  }

  if(input == 'する'){
    return "できる";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index] + "る");
  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainPotentialNegative(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られない');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来られない";
  }

  if(input == 'する'){
    return "できない";
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[3][index] + "ない");
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteCasuativePositive(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'させます');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来させます";
  }

  if(input == 'する'){
    return "させます";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'せます');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'せます');
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPoliteCasuativeNegative(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'させません');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来させません";
  }

  if(input == 'する'){
    return "させません";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'せません');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'せません');
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiCasuative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'させる');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来させる";
  }

  if(input == 'する'){
    return "させる";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'せる');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'せる');
  }
  
}	

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainCasuativeNegative(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'させない');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来させない";
  }

  if(input == 'する'){
    return "させない";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'せない');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'せない');
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePassivePositive(input) {

    // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られます');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来らます";
  }

  if(input == 'する'){
    return "されます";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'れます');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'れます');
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPolitePassiveNegative(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られません');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来らません";
  }

  if(input == 'する'){
    return "されません";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'れません');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'れません');
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function KanjiPassive(input) {

        // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られる');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来らる";
  }

  if(input == 'する'){
    return "される";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'れる');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'れる');
  }
  
}	

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiPlainPassiveNegative(input) {

          // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), 'られない');
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来らない";
  }

  if(input == 'する'){
    return "されない";
  }
  
  // Check type I Godan
  let index = hiraganaListH[2].indexOf(input.slice(-1));
  if(index == 0) {
      return input.replace(input.slice(-1), "わ" + 'れない');   
  }
  else {
      return input.replace(input.slice(-1), hiraganaListH[0][index] + 'れない');
  }
  
}	

// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiLooks(input) {

      // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), sou);
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来" + sou;
  }

  if(input == 'する'){
    return "し" + sou;
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + sou);
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiDisire(input) {

        // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), tai);
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来" + tai;
  }

  if(input == 'する'){
    return "し" + tai;
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + tai);
  }
  
}	
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiWantTo(input) {

          // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), tagaru);
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来" + tagaru;
  }

  if(input == 'する'){
    return "し" + tagaru;
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + tagaru);
  }
  
}
// ==========================================================================================

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
function verbKanjiSimultenous(input) {

            // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0 || ichidanException.indexOf(input) >= 0) {
    return input.replace(input.slice(-1), nagara);
  }
  
  // Check type III irregular
  if(input == '来る'){
    return "来" + nagara;
  }

  if(input == 'する'){
    return "し" + nagara;
  }
  
  // Check type I Godan
  if(hiraganaListH[2].indexOf(input.slice(-1)) >= 0) {
    let index = hiraganaListH[2].indexOf(input.slice(-1));
    return input.replace(input.slice(-1), hiraganaListH[1][index] + nagara);
  }
  
}
// ==========================================================================================
