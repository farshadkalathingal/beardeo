function showHomePage()
		{window.location = "index.html";}
function showBlogPage()
		{window.location = "blog.html";}
function showContactPage()
		{window.location = "contact.html";}
function showOilPage()
		{window.location = "beardoil.html";}
function showBalmPage()
		{window.location = "beardbalm.html";}
function showWashPage()
		{window.location = "beardwash.html";}
function showLoginPage()
		{window.location = "login.html";}
function showSignupPage()
		{window.location = "signup.html";}
function showResetPage()
		{window.location = "reset.html";}
function showAboutPage()
		{window.location = "about.html";}
function showTipsPage()
		{window.location = "tips.html";}
function showHairPage()
		{window.location = "hair.html";}
function showCurlyPage()
		{window.location = "curlybeard.html";}
function showHabitPage()
		{window.location = "habit.html";}
function showFoodPage()
		{window.location = "food.html";}
function showBlowPage()
		{window.location = "blow.html";}
// ToUpper//

// Page Scroll//

$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll); 

function onScroll(){ 
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
}