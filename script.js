

function init(){

  console.log("here");

  let fadeins = document.getElementsByClassName("fadein");


  let fadeinindex = 0;

  let fadeinterval = setInterval(() => {

    if(fadeinindex == fadeins.length){
      return clearInterval(fadeinterval);
    }

    console.log(fadeins[fadeinindex]);

    fadeins[fadeinindex].style.opacity = 1;
    fadeinindex++;

  }, 100);



}


function url(theurl){

  window.open(theurl);

}
