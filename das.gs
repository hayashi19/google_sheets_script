// SET: hiragana array list
var hiraganaList = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "", "ゆ", "", "よ"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "", "", "", "を"],
    ["ん", "", "", "", ""],
    ["が", "ぎ", "ぐ", "げ", "ご"],
    ["ざ", "じ", "ず", "ぜ", "ぞ"],
    ["だ", "ぢ", "づ", "で", "ど"],
    ["ば", "び", "ぶ", "べ", "ぼ"]
 ];

var hiraganaListH = [
    ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "が", "ざ", "だ", "ば"],
    ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "", "ぎ", "じ", "ぢ", "び"],
    ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "", "ぐ", "ず", "づ", "ぶ"],
    ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "", "げ", "ぜ", "で", "べ"],
    ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "を", "ご", "ぞ", "ど", "ぼ"],
    ["ん"]
];

// //////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION VERB TYPE 
function verbType(input){

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0) {
    return "Ichidan";
    // console.log(input.replace(input.slice(-1), 'ます'))
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
// FUNCTION FORMAL POSITIVE FORM
function verbFormalPositive(input){

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0) {
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
// FUNCTION FORMAL NEGATIVE FORM 
function verbFormalNegative(input){

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0) {

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
// FUNCTION FORMAL PAST FORM 
function verbFormalPast(input){

  // Check is it type II ichidan
  if(hiraganaListH[3].indexOf(input.slice(-2, -1)) >= 0 || hiraganaListH[1].indexOf(input.slice(-2, -1)) >= 0) {

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
