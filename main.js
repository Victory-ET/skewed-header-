var handlescroll = function(){

  var heroheight = document.querySelector("#hero").offsetHeight;
  console.log(heroheight);
  var diagonal = document.querySelector('.hero-diagonal  polygon');
  
   var skew=(window.scrollY/heroheight)*100;
   diagonal.setAttribute(points, [100, 100, skew, 100, 100]);
};

window.addEventListener('scroll', handlescroll);