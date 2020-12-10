//
$(window).scroll(function() {
    $('.back-to-top').toggleClass('scrolled', $(this).scrollTop() > 100);
});
// Responsive page
function responsiveWindow() {
    if($(window).width() <= 992) {
        $(`.wrapper`)
        .removeClass("container")
        .addClass("container-fluid");

    } else {
        $(`.wrapper`)
        .removeClass("container-fluid")
        .addClass("container")
    }
};
responsiveWindow();
$(window).resize(function() {
    responsiveWindow();
})
// Data of all page
let dataCodeForEveryOne = [
    {
        date : "December 9, 2020",
        img : "https://2.bp.blogspot.com/-vlEsQFjiSKk/VupYFIU67qI/AAAAAAAADWs/AJbQSsLgu0cAGn1mbyFzTrXnExTodbCAQ/w680/guitar-1139397_960_720.jpg",
        title : "Bài 1 : Biến trong Javascript",    
    },
    {
        date : "December 10, 2020",
        img : "https://2.bp.blogspot.com/-EQKZwnKUe3U/W1q4UUxEVQI/AAAAAAAACow/u2PwukB77609F-2swRR9Rtg-E7yOgTPWgCK4BGAYYCw/w680/glo2.jpg",
        title : "Bài 2",
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-jboqjoqxwbo/W1q4hNrnKqI/AAAAAAAACo4/gorIT0PKvu8Zgj2bVDPaoNeGZieB6zabwCK4BGAYYCw/w680/glo4.jpg",
        title : "Bài 3",
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-wHVf1CDEwEg/W1q42OF8OcI/AAAAAAAACpE/K9U1nKqRcUsU_2BnbbZWiEI4ay9aoGi8gCK4BGAYYCw/w680/glo3.jpg",
        title : "Bài 4",
    }
]
// Data each page
    