window.addEventListener('load', function(){

    // --------------- ANIMATION: Card vergrößern ---------------

    // alle cards in var deklarieren
    var card = document.querySelectorAll('.card');
    console.log(card)

    // mittel Schleife alle cards durchgehen 
    for (var i = 0; i < card.length; i++) {

        // jeder card mouseenter hinzufügen
        card[i].addEventListener('mouseenter', function (_e) {

            // aktuelle card auf der sich cursor befindet, in var deklarieren
            var current_card = _e.target;
            console.log(current_card)

            // Animation auf currend card hinzufügen
            gsap.to(current_card, {
                scale: 1.05, 
                ease: "power1.inOut",
                // from: "center",
            });

        });

        // jeder card mouseleave hinzufügen
        card[i].addEventListener('mouseleave', function (_e) {

            // aktuelle card auf der sich cursor befindet, in var deklarieren
            var current_card = _e.target;
            console.log(current_card)

            // Animation auf currend card hinzufügen
            gsap.to(current_card, {
                scale: 1, 
                ease: "power1.inOut",
                // from: "center",
            });

        });

    };


    // --------------- ANIMATION: Eingabefelder von Formular von rechts nach links schieben  ---------------

    // Timeline für verzögerte Reihenfolge erstellen
    var tl_form = gsap.timeline();

    // Input fields animieren 
    tl_form.from(".animate_input", {duration: 1, x: 30, ease: "back"});

    // Button 0.85 Sekunden zeitverzögert animieren
    tl_form.from(".animate_button", {duration: 1, x: 30, ease: "back"}, "-=0.85");


    // --------------- ANIMATION: Startscreen Overlay nach oben verschieben  ---------------

    gsap.to(".overlay", {duration: 0.8, y: "-190%", ease: "ease", transformOrigin: "top", delay: "2.5"});


    // --------------- ANIMATION: SVG Animation Blätter Header animieren  ---------------

    // Ast animieren 
    gsap.from(".stem", {duration: 0.5, opacity: 0, transformOrigin: "center", delay: 2.6});

    // Leave left animieren 
    var tl_leave = gsap.timeline();

    tl_leave.fromTo('.leaves1', 0.7, {transformOrigin: "center", ease: "ease-in-out", scale: 0}, {scale: 1, stagger: 0.1, delay: 3.2},0);
    tl_leave.fromTo('.leaves2', 0.3, {transformOrigin: "center", ease: "ease-in", scale: 0}, {scale: 1, stagger: 0.05, delay: 3.7},0);
    tl_leave.fromTo('.leaves3', 0.1, {transformOrigin: "center", ease: "ease-out", scale: 0}, {scale: 1, stagger: 0.08, delay: 3.6},0);
    
    // Leave right animieren 
    tl_leave.fromTo('.leaves4', 0.6, {transformOrigin: "center", ease: "ease-in-out", scale: 0}, {scale: 1, stagger: 0.1, delay: 3.4},0);
    tl_leave.fromTo('.leaves5', 0.4, {transformOrigin: "center", ease: "ease-in", scale: 0}, {scale: 1, stagger: 0.05, delay: 3.6},0);
    tl_leave.fromTo('.leaves6', 0.2, {transformOrigin: "center", ease: "ease-out", scale: 0}, {scale: 1, stagger: 0.08, delay: 3.3},0);
    

    // --------------- ANIMATION: Headline animieren  ---------------

    // h1 in var deklarieren 
    var h1 = document.querySelector('h1')
    console.log(h1)

    // p mit Klasse heading_animate in var deklarieren 
    var heading_animate = document.querySelector('.heading_animate')
    console.log(h1)

    // h1 und p heading_animate auf der y Achse so versetzen, dass es anfangs verborgen ist 
    TweenLite.set('h1, .heading_animate', {y:'200%'})

    // h1 und heading_animate animieren, dass nach 3 Sekunden und 3.2 Sekunden nach oben in den sichtbaren Bereich animiert
    gsap.to(h1, { duration: 1, ease:'power4.out', y:'0%', delay: 3})
    gsap.to(heading_animate, { duration: 1, ease:'power4.out', y:'0%', delay: 3.2})
    

    // --------------- ANIMATION: Button vergrößern ---------------

    // alle buttons in var deklarieren
    var button = document.querySelectorAll('button');
    console.log(button)

    // mittel Schleife alle cards durchgehen 
    for (var i = 0; i < button.length; i++) {

        // jedem button ein click event hinzufügen
        button[i].addEventListener('click', function (_e) {

            // aktueller button auf den User geklickt hat, in var deklarieren
            var current_button = _e.target;
            console.log(current_button)

            // Animation auf currend button hinzufügen
            gsap.to(current_button, {
                duration: 0.1, 
                scale: 1.05, 
                ease: 'power1.inOut',
                transformOrigin: 'center',
            });

        });

        // jedem button mouseleave hinzufügen
        button[i].addEventListener('mouseleave', function (_e) {

            // aktueller button auf den User geklickt hat, in var deklarieren
            var current_button = _e.target;
            console.log(current_button)

            // Animation auf currend button hinzufügen
            gsap.to(current_button, {
                scale: 1, 
                ease: "power1.inOut",
            });

        });

    };

    // --------------------------- Animation Banner Start ---------------------------

    var alreadyPlayed = 0;

    window.addEventListener("scroll", function () {

        if (document.scrollTop > 500 || alreadyPlayed === 0) {

            alreadyPlayed = alreadyPlayed + 1;
            console.log(alreadyPlayed)

            // Alle Assets in einer var deklarieren
            var banner_leave1 = document.querySelector('.banner_leave1');
            var banner_leave2 = document.querySelector('.banner_leave2');
            var banner_leave3 = document.querySelector('.banner_leave3');
            var banner_leave4 = document.querySelector('.banner_leave4');
            var banner_textBeginning = document.querySelector('.banner_textBeginning');
            var banner_textEnd = document.querySelector('.banner_textEnd');

            // neue Timeline erstellen
            tl = gsap.timeline({});

            // Labels hinzufügen
            tl.add("StartAnimation")

            // alle Elemente "leave" auf auf y -100% setzen, damit man sie am Anfang nicht sieht
            tl.set(banner_leave1, {y:"-100%"}, "StartAnimation");
            tl.set(banner_leave2, {y:"-100%"}, "StartAnimation");
            tl.set(banner_leave3, {y:"-100%"}, "StartAnimation");
            tl.set(banner_leave4, {y:"-100%"}, "StartAnimation");

            // banner_textBeginning sieht man schon von Anfang an, deshalb opacity auf 100 setzen
            tl.set(banner_textBeginning, {opacity: 100, y:"-30%"}, "StartAnimation");

            // banner_textEnd auf opacity setzen, damit man auch diesen Abschnitt nicht von Anfang an sieht
            tl.set(banner_textEnd, {opacity: 0, y:"-100%"}, "StartAnimation");

            // Leave1 wird animiert; von oben nach unten
            tl.to(banner_leave1, {
                duration: 0.5,
                opacity: 1,
                y:"0",
                ease: "power2.out",
            }, "StartAnimation+=3.5")

            // Leave2 wird animiert; von oben nach unten
            tl.to(banner_leave2, {
                duration: 0.5,
                opacity: 1,
                y:"0",
                ease: "power2.out",
            }, "StartAnimation+=3.5")

            // Leave3 wird animiert; von oben nach unten
            tl.to(banner_leave3, {
                duration: 0.5,
                opacity: 1,
                y:"0",
                ease: "power2.out",
            }, "StartAnimation+=3.2")

            // Leave4 wird animiert; von oben nach unten
            tl.to(banner_leave4, {
                duration: 0.5,
                opacity: 1,
                y:"0",
                ease: "power2.out",
            }, "StartAnimation+=3.3")

            // TextEnd wird einblenden, und von oben nach unten animiert
            tl.to(banner_textEnd, {
                opacity: 1,
                y: "80%"
            }, "StartAnimation+=3.1")
        }

    })

});

$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });

 
 // duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});