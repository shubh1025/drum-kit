
var button = document.getElementById('common1');


button.addEventListener('click', myPlay); 
//button.removeEventListener('click', myPause);



function myPlay() {
   
    var a = new Audio('sounds/clap.wav');
    a.play(); // to play audio file 
    //this.removeEventListener('click', myPlay);
}


//    function myPause() 
//    {
///*    button.removeEventListener('click', myPause); */
//        a.pause();
//}


