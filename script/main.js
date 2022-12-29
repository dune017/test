window.addEventListener('scroll', function() {
    console.log("scroll y: " + window.scrollY);
})



const elephantEl = document.querySelector('#elephant_x');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 4900) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(elephantEl, 0.5, {
      opacity : 0,
      transition : '0.1s'
    });
  } else {
    gsap.to(elephantEl, 0.5, {
      opacity : 1,
    });
  }
},100));
// _.throttle(함수, 시간)
