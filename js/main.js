$("header a").on("click", function () {
  // get the link's href attribute
  var href = $(this).attr("href")
  // wait for a bit


$("header").toggleClass("visible")
	$("section").toggleClass("fade")

  setTimeout(function () {

    // make the window's location now go to the href variable
    window.location = href
  }, 1500)



  // stop the link going there straight away
  return false
})

$(document).ready(function(){

  $("header").toggleClass("visible")
	$("section").toggleClass("fade")
})

$('.menu-toggle').on('click',function(){
  $('.menu').toggleClass('open')
    return false

})

$(".menu-toggle").on("click", function () {
    $("header").toggleClass("visible")

  $(".menu-toggle span.line-1").toggleClass('rotate')
   $(".menu-toggle span.line-3").toggleClass('rotate2')

   if ($('.menu').hasClass('open')) {
      $(".menu-toggle span.line-2").css('opacity', '0')
      } else {
        $(".menu-toggle span.line-2").css('opacity', '1')
      }
      return false

})
