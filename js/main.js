
// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});

const opacity = 0.4;


//Top 50 Covers Left Gallery VARIABLES
const current = document.querySelector('#FavCurrentImg');
const imgs = document.querySelectorAll('.fav-covers-imgs img');

imgs.forEach(img => img.addEventListener('click',
imgClick));

function imgClick(e){
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity =1));
    //change current left image to src of clicked left ten covers
    current.src = e.target.src;
    //Add tcFadeIn animation class to selected current Left covers
    current.classList.add('top-covers-fade-in');
    //Remove tcFadeIn animation class
    setTimeout(() => current.classList.remove('top-covers-fade-in'),800);
  //Change the opacity to opacity Variable
    e.target.style.opacity = opacity;
  }
////////////////////////////////////////////////////////////////////

  $(document).ready(function(){
    $('.figure-logo').click(function(){
      $(this).parent().find(".name").fadeToggle();
    });
  })

  //Function to show menu when menu button is shown on smaller screens toggle for Nav Menu at 700px max-width
  document.querySelector('.menu-btn').addEventListener
  ('click', () => document.querySelector('.main-nav')
      .classList.toggle('show'));
  ////////////////////////////////////////////////////////////////////