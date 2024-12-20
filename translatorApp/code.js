// Setting up lists of alphabet characters and morse characters
var english = getColumn("Morse Table", "alphabet");
var morse = getColumn("Morse Table", "morse");
var completeMsg = "";

onEvent("translateButton", "click", function(){
  getMorse(getText("inputText"));
  setProperty("morseOutput","text",completeMsg);
});
// getMorse function turns an english message into a morse message
// text parameter is the english input
// return is the completed morse msg "completeMsg"
// textual output based on textual input
function getMorse(text){
  text = text.toLowerCase();
  var msg1 = [];
  completeMsg = "";
  // nested for loop-- outside loop goes letter by letter
  // inside loop checks the letter against all english letters in order to find an index
  // that index then is used to find the morse character
  // for example, 1=a=·- , e, 2=b= -···
  for (var x=1;x<text.length+2;x++){
    for(var i = 0; i < 38; i++){
      var y = x-1;
      if(text.substring(y,x)==english[i]){
        appendItem(msg1, morse[i]);
        i = 39;
      }
    }
  }
  for(var o=0;o<msg1.length-1;o++){
    completeMsg = completeMsg + msg1[o] + "\xa0";
  }
  return completeMsg;
}