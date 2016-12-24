/**/
$(function() {
	$('\
  	<nav id="navbar">\
  		<a href="index.html" id="nav-home">Schrey</a>\
  		<div>\
      	<a href="index.html">Home</a>\
      	<a href="history.html">History</a>\
      	<a href="family-tree.html">Family Tree</a>\
      	<a href="current-members.html">Current Members</a>\
      	<a href="contact.html">Contact</a>\
      </div>\
    </nav>').insertBefore("header");
  $('<div id="scroll-suggest">&#x25BC; Scroll down for more &#x25BC;</div>').insertAfter('header>h1');
  // fade navbar in/out
  $(document).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#navbar').addClass("mod-nav");
    } else {
        $('#navbar').removeClass("mod-nav");
    }
  });
  $(document).trigger('scroll'); // in case someone opens a # directly
  $('#navbar>div>a').each(function(){
  	console.log(document.location+'=='+this.href);
  	if(document.location == this.href || document.location+'index.html' == this.href) {
	  	$(this).addClass('current');
	  	$('header').css("background-image","url('images/"+this.innerHTML+".jpg')");
	  }
  });
});
/**/