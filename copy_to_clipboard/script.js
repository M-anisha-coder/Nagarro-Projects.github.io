//using javascript
function myFuntion(){
    var text1=document.getElementById("inputuser");
    text1.select();
    text1.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text1.value); 
}




//using jQuery
// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('#inputuser').select()
//         document.execCommand("copy");
//     });

// });
