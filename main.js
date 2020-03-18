var handlescroll = function(){

  var heroheight = document.querySelector("#hero").offsetHeight;
  console.log(heroheight);
  var diagonal = document.querySelector('.hero-diagonal polygon');
  console.log(diagonal);				
  
   var skew=Math.floor((window.scrollY/heroheight)*500);
   if (skew<=60){
	   skew=80;
   }
   console.log(skew);
   diagonal.setAttribute("points", [0, 100,100,skew, 100,100]);
};

window.addEventListener('scroll', handlescroll);