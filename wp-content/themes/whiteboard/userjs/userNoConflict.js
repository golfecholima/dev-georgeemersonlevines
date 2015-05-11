var $j = jQuery.noConflict(); /*make sure there's no conflict with wordpress plugins*/

/*STICK NAV AFTER SCROLL PAST HEADER*/
var t = $j('#nav-primary').offset().top; /*find the position nav is offset from the top*/

$j(window).scroll(function () {
    if ($j(window).scrollTop() > t) {
        $j('#nav-primary').addClass('stickynav');
        $j('#content').addClass('contentpadstickynav', 10, 'swing');
        } else {
            $j('#nav-primary').removeClass('stickynav');
            $j('#content').removeClass('contentpadstickynav', 500, 'swing');
    }
});

/*add a link to twitter title*/
$j('h3:contains("@rhymeswthgeorge")').wrap('<a href= "https://twitter.com/rhymeswthgeorge"></a>');

/*add some AwesomeFont icons*/

$j('nav').append('<div class="socialfas"></div>');

	$j('.socialfas').append('<a href="https://plus.google.com/115799266358515283339/posts"><i class="fa fa-google-plus-square fa-fw fa-3x"></a></i><br class="cell-tab">');
	$j('.socialfas').append('<a href="https://www.facebook.com/georgelevines"><i class="fa fa-facebook-square fa-fw fa-3x"></a></i><br class="cell-tab">');
	$j('.socialfas').append('<a href="http://www.linkedin.com/pub/george-levines/2a/973/8b4"><i class="fa fa-linkedin-square fa-fw fa-3x"></a></i><br class="cell-tab">');
	$j('.socialfas').append('<a href="https://twitter.com/rhymeswthgeorge"><i class="fa fa-twitter-square fa-fw fa-3x"></a></i><br class="cell-tab">');

/* replace radios with AwesomeFont*/

$j('label.checkbox').append('<i class="fa fa-check-circle-o fa-fw"></i>');

/* make the tagline period orange */

$j('#tagline:contains(".")').each( function () {
    $j(this).html(
        $j(this).html().replace('.', '<span style="color: #F39C12;">.</span>'));
});
