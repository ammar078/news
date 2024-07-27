const mql = window.matchMedia("(max-width:992px)");
const changeSlideView  = (slide)=>{
  var swiper = new Swiper(".swiper", {
  slidesPerView: slide,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
}
const handleMedia = (e)=>{
  if(mql.matches){
    changeSlideView(1)
  }else{
    changeSlideView(3)
  }
}

handleMedia()

mql.onchange=(e)=>{
  handleMedia(e)
}

document.getElementById("year").innerHTML = new Date().getFullYear();
