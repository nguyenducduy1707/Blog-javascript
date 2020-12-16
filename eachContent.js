// Scroll to top button
$(window).scroll(function() {
    $('.back-to-top').toggleClass('scrolled', $(this).scrollTop() > 100);
});
// Responsive page
function responsiveWindow() {
    if($(window).width() <= 992) {
        $(`.wrapper, .footerOfThePage`)
        .removeClass("container")
        .addClass("container-fluid");

    } else {
        $(`.wrapper, .footerOfThePage`)
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
        title : "Bài 1 : Các syntax cơ bản trong Javascript",
        overView : "Variables, Data Types, Operators trong Javascript.", 
        link : "bai1.html"       

    },
    {
        date : "December 10, 2020",
        img : "https://2.bp.blogspot.com/-EQKZwnKUe3U/W1q4UUxEVQI/AAAAAAAACow/u2PwukB77609F-2swRR9Rtg-E7yOgTPWgCK4BGAYYCw/w680/glo2.jpg",
        title : "Bài 2 : Câu điều kiện và vòng lặp",
        overView : "Boolean, flow chart, nested conditionals, 1 số bài tập nâng cao về logic toán.",        
        link : "bai2.html"       

    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-jboqjoqxwbo/W1q4hNrnKqI/AAAAAAAACo4/gorIT0PKvu8Zgj2bVDPaoNeGZieB6zabwCK4BGAYYCw/w680/glo4.jpg",
        title : "Bài 3 :  Tìm hiểu về Array",
        overView : "ICRUD, 1 số bài tập cơ bản về làm việc với mảng",
        link : "bai3.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-wHVf1CDEwEg/W1q42OF8OcI/AAAAAAAACpE/K9U1nKqRcUsU_2BnbbZWiEI4ay9aoGi8gCK4BGAYYCw/w680/glo3.jpg",
        title : "Bài 4 : Tìm hiểu về object, các kiểu kết hợp giữa array và object",
        overView : "ICRUD, array of objects, object containing array,object and array mix structure",
        link : "bai4.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-P5oyPBJwvfg/W1q5Bsv6q3I/AAAAAAAACpM/gxte7xFcNdco5RdG-kz_RcMO35BSqj2XQCK4BGAYYCw/w680/glo5.jpg",
        title : "Bài 5 : Giới thiệu về CSS",
        overView : "Cơ bản về CSS",
        link : "bai5.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://3.bp.blogspot.com/-w7oSb-WPXAM/W1q5IYCVf_I/AAAAAAAACpY/MWKhGDQORd4XJ5bDVdPE6-E-lOndlx27ACK4BGAYYCw/w680/glo1.jpg",
        title : "Bài 6 : Giới thiệu về CSS (phần 2)",
        overView : "1 số bài tập về CSS",
        link : "bai6.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-R3jFy7SYZL4/Vupgft_tacI/AAAAAAAADYM/fwh1GYHl8YYIRAREFKG1d-cxgA-05ySNA/w680/hipster-865295_960_720.jpg",
        title : "Bài 7 : Flex-box, học qua game Flexbox Froggy",
        overView : "Làm chủ cách sắp xếp vị trí các phần tử trong mảng với Flex-box",
        link : "bai7.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-tE181d_K7gs/Vupfu_6tHnI/AAAAAAAADYE/OXF5cqzoXao890DJVCBdSeEMyCtdcKIjA/w680/girl-984155_960_720.jpg",
        title : "Bài 8 : Function và DOM",
        overView : "Cách sử dụng Function và DOM",
        link : "bai8.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://4.bp.blogspot.com/-GkUyTOGonKQ/Vupe8svLNsI/AAAAAAAADX0/tqWMHfiRudY_V82YeEE7yq86apVldYnZA/w680/photographer-1150052_960_720.jpg",
        title : "Bài 9 : Thao tác với 1 list",
        overView : "Tiếp tục vận dụng kiến thức về DOM",
        link : "bai9.html"       
    },
    {
        date : "December 10, 2020",
        img : "https://1.bp.blogspot.com/-v0QptPDrcVs/VupeaXsiCOI/AAAAAAAADXw/mXxQ3zVItm0UWkJqINGNkzqwVFL4pA6DQ/w680/books-1185628_960_720.jpg",
        title : "Bài 10 : async, await, fetch API",
        overView : "Học cách lấy data, cách sử dụng async, await, json",
        link : "bai10.html"       
    },
]
// Popular post
let popularPosts = document.getElementById("popularPosts");
for(let i=0; i < dataCodeForEveryOne.length && i < 3; i++) {
    popularPosts.innerHTML += `
    <div class="row eachContent-on-popular-posts">
        <div class="col-5 img-on-popular-posts-content">
            <a href="${dataCodeForEveryOne[i].link}">
                <img src="${dataCodeForEveryOne[i].img}" alt="">          
            </a>
        </div>
        <div class="col-7 popular-posts-content">
            <a href="${dataCodeForEveryOne[i].link}">${dataCodeForEveryOne[i].title}</a>
            <p class="date-popular-posts-content">${dataCodeForEveryOne[i].date}</p>
        </div>
    </div>
    `
}
// Recent post
let recentPosts = document.getElementsByClassName("recent-posts")[0];
for(let i=0; i < dataCodeForEveryOne.length && i < 3; i++) {
    recentPosts.innerHTML += `
    <div class="row content-in-recent-posts">
        <div class="col-4 img-on-recent-posts-content">
            <a href="${dataCodeForEveryOne[i].link}">
                <img src="${dataCodeForEveryOne[i].img}" alt="">          
            </a>
        </div>
        <div class="col-8">
            <a class="title-in-footer-posts" href="${dataCodeForEveryOne[i].link}">${dataCodeForEveryOne[i].title}</a>
            <p class="post-date">${dataCodeForEveryOne[i].date}</p>
        </div>
    </div>
    `
}
// Navbar
let listOfCodeForEveryOne = document.getElementsByClassName("list-of-code-for-everyone")[0];
    for (x of dataCodeForEveryOne) {
        listOfCodeForEveryOne.innerHTML += `
            <a class="dropdown-item" href="#">${x.title}</a>
            <div class="dropdown-divider"></div>
        `
    }