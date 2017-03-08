

document.querySelector("#text");

var resultText = document.querySelector("#text");
var userText; 
var textEmojis;
var differentEmojis = {
   happy:'<i class="em em-grinning"></i>',
   sad:'<i class="em em-cry"></i>',
   wondering:'<i class="em em-astonished"></i>'

};

 // A handler that reacts on blur
resultText.addEventListener('blur', function() {
  userText = resultText.value;
  console.log(userText);
  // textEmojis = userText.replace(/happy/g, "=D");
  textEmojis = userText.replace(/happy|sad|wondering/gi, function(matched){
    return differentEmojis[matched];
  });
  (textEmojis);

  document.getElementById("textResult").innerHTML = textEmojis;

})

// var mapObj = {
//    cat:"dog",
//    dog:"goat",
//    goat:"cat"

// };
// str = str.replace(/cat|dog|goat/gi, function(matched){
//   return mapObj[matched];
// });


        
  // var costumerMessage = document.createElement('p');
  //     costumerMessage.textContent = "=D";
  //     var parent = resultText.parentNode;
  //     parent.appendChild(costumerMessage);

  // var res = str.replace("happy", "=D");


// var str = "I am happy!";
// var res = str.replace("happy", "=D");


  //   if (userText.length < 5 ) {
  //     var costumerMessage = document.createElement('p');
  //     costumerMessage.textContent = "=D";
  //     var parent = resultText.parentNode;
  //     parent.appendChild(costumerMessage);
  //   }
  //   // else{
  //   // 	var message = document.createElement("p");
  //   // 	message.textContent = "Långt och bra!";
  //   // 	var parent = resultText.parentNode;
  //   // 	parent.appendChild(message);
  //   // }
  // });









 // A handler that reacts on blur
  // var inputField = document.querySelector('#validatable-input');
  // inputField.addEventListener('blur', function() {
  //   var text = inputField.value;
  //   console.log(text);
        
  //   if (text.length < 10) {
  //     var errorMessage = document.createElement('p');
  //     errorMessage.textContent = 'För kort ord';
  //     var parent = inputField.parentNode;
  //     parent.appendChild(errorMessage);
  //   }
  // });