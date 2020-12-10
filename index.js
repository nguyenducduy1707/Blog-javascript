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
// Data home page
let dataCodeForEveryOne = [
    {
        date : "December 9, 2020",
        img : "https://2.bp.blogspot.com/-vlEsQFjiSKk/VupYFIU67qI/AAAAAAAADWs/AJbQSsLgu0cAGn1mbyFzTrXnExTodbCAQ/w680/guitar-1139397_960_720.jpg",
        title : "Bài 1 : Biến trong Javascript",
        overView : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ab praesentium quo reprehenderit earum optio animi iste? Sint eligendi, debitis id laudantium veritatis rerum numquam, itaque quisquam illo, nihil iure.", 
        link : "bai1.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://2.bp.blogspot.com/-EQKZwnKUe3U/W1q4UUxEVQI/AAAAAAAACow/u2PwukB77609F-2swRR9Rtg-E7yOgTPWgCK4BGAYYCw/w680/glo2.jpg",
        title : "Bài 2",
        overView : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ab praesentium quo reprehenderit earum optio animi iste? Sint eligendi, debitis id laudantium veritatis rerum numquam, itaque quisquam illo, nihil iure.",        
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-jboqjoqxwbo/W1q4hNrnKqI/AAAAAAAACo4/gorIT0PKvu8Zgj2bVDPaoNeGZieB6zabwCK4BGAYYCw/w680/glo4.jpg",
        title : "Bài 3",
        overView : "lorem"
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-wHVf1CDEwEg/W1q42OF8OcI/AAAAAAAACpE/K9U1nKqRcUsU_2BnbbZWiEI4ay9aoGi8gCK4BGAYYCw/w680/glo3.jpg",
        title : "Bài 4",
        overView : "lorem"
    }
]
let mainContent = document.getElementById("mainContent");
for(let i = 0; i < dataCodeForEveryOne.length; i++) {
    mainContent.innerHTML += `
    <div class="row eachContent">
        <div class="col-md-3 imageOfContent">
            <div class="text-divider">${dataCodeForEveryOne[i].date}</div>
            <div class="mainImg">
                <a href ="${dataCodeForEveryOne[i].link}">
                    <img src="${dataCodeForEveryOne[i].img}" alt="">                
                </a>
            </div>
        </div>
        <div class="col-md-9 contentOfBlog">
            <div>
                <a href="#">${dataCodeForEveryOne[i].title}</a>
                <p>${dataCodeForEveryOne[i].overView}</p>
            </div>
            <button type="button" class="btn btn-dark btnContent">Read more...</button>
        </div>
    </div>
    `
}
