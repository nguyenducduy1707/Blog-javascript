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
        link : "bai2.html"       

    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-jboqjoqxwbo/W1q4hNrnKqI/AAAAAAAACo4/gorIT0PKvu8Zgj2bVDPaoNeGZieB6zabwCK4BGAYYCw/w680/glo4.jpg",
        title : "Bài 3",
        overView : "lorem",
        link : "bai3.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-wHVf1CDEwEg/W1q42OF8OcI/AAAAAAAACpE/K9U1nKqRcUsU_2BnbbZWiEI4ay9aoGi8gCK4BGAYYCw/w680/glo3.jpg",
        title : "Bài 4",
        overView : "lorem",
        link : "bai4.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-P5oyPBJwvfg/W1q5Bsv6q3I/AAAAAAAACpM/gxte7xFcNdco5RdG-kz_RcMO35BSqj2XQCK4BGAYYCw/w680/glo5.jpg",
        title : "Bài 5",
        overView : "lorem",
        link : "bai5.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://3.bp.blogspot.com/-w7oSb-WPXAM/W1q5IYCVf_I/AAAAAAAACpY/MWKhGDQORd4XJ5bDVdPE6-E-lOndlx27ACK4BGAYYCw/w680/glo1.jpg",
        title : "Bài 6",
        overView : "lorem",
        link : "bai6.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-R3jFy7SYZL4/Vupgft_tacI/AAAAAAAADYM/fwh1GYHl8YYIRAREFKG1d-cxgA-05ySNA/w680/hipster-865295_960_720.jpg",
        title : "Bài 7",
        overView : "lorem",
        link : "bai7.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-tE181d_K7gs/Vupfu_6tHnI/AAAAAAAADYE/OXF5cqzoXao890DJVCBdSeEMyCtdcKIjA/w680/girl-984155_960_720.jpg",
        title : "Bài 8",
        overView : "lorem",
        link : "bai8.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-GkUyTOGonKQ/Vupe8svLNsI/AAAAAAAADX0/tqWMHfiRudY_V82YeEE7yq86apVldYnZA/w680/photographer-1150052_960_720.jpg",
        title : "Bài 9",
        overView : "lorem",
        link : "bai9.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-v0QptPDrcVs/VupeaXsiCOI/AAAAAAAADXw/mXxQ3zVItm0UWkJqINGNkzqwVFL4pA6DQ/w680/books-1185628_960_720.jpg",
        title : "Bài 10",
        overView : "lorem",
        link : "bai10.html"       
    },
]
let mainContent = document.getElementById("mainContent");
for(let i = 0; i < dataCodeForEveryOne.length; i++) {
    mainContent.innerHTML += `
    <div class="row eachContent">
        <div class="col-md-5 imageOfContent">
            <div class="text-divider">${dataCodeForEveryOne[i].date}</div>
            <div class="mainImg">
                <a href ="${dataCodeForEveryOne[i].link}">
                    <img src="${dataCodeForEveryOne[i].img}" alt="">                
                </a>
            </div>
        </div>
        <div class="col-md-7 contentOfBlog">
            <div>
                <a class="linkFromTitle" href="#">${dataCodeForEveryOne[i].title}</a>
                <p>${dataCodeForEveryOne[i].overView}</p>
            </div>
            <a class="linkFromButton">
                <button type="button" class="btn btnContent">Read more...</button>            
            </a>
        </div>
    </div>
    `
}
// 
let popularPosts = document.getElementById("popularPosts");
for(let i=0; i < dataCodeForEveryOne.length && i < 3; i++) {
    popularPosts.innerHTML += `
    <div class="row eachContent-on-popular-posts">
        <div class="col-5 img-on-popular-posts-content">
            <img src="${dataCodeForEveryOne[i].img}" alt="">
        </div>
        <div class="col-7 popular-posts-content">
            <a href="#">${dataCodeForEveryOne[i].title}</a>
            <p class="date-popular-posts-content">${dataCodeForEveryOne[i].date}</p>
        </div>
    </div>
    `
}
