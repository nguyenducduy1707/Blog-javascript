// scroll to top button
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
// Data code for every one home page
// searchingInput
let mainContent = document.getElementById("mainContent");
let leftSideContent = document.getElementById("left-side-content")
let myInputSearch = document.getElementById("myInputSearch");
dataCodeForEveryOne = [
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
let btnSearch = document.getElementById("btnSearch")
myInputSearch.onkeyup = function (e) {
    let searchString = e.target.value.toLowerCase();
    let filteredPosts = dataCodeForEveryOne.filter((eachPost) => {
        return eachPost.title.toLowerCase().includes(searchString)
    })
    if(myInputSearch.value) {
        btnSearch.onclick = function() {          
            if(filteredPosts.length != 0) {
                displayMainContent(filteredPosts)
                console.log(filteredPosts)
            } else {
                leftSideContent.innerHTML = `
                <div style="background-color: #f2f2f2 ; padding : 12px ; font-size:13px ; font-weight : 400">
                    There are no results found for "${myInputSearch.value.bold()}"               
                </div>
                `           
            }
        }
    }
}
// Display all data
let displayMainContent = (posts) => {
    let htmlMainContent = posts
    .map((post) => {
        return `
        <div class="row eachContent">
            <div class="col-md-5 imageOfContent">
                <div class="text-divider">${post.date}</div>
                <div class="mainImg">
                    <a href ="${post.link}">
                        <img src="${post.img}" alt="">                
                    </a>
                </div>
            </div>
            <div class="col-md-7 contentOfBlog">
                <div>
                    <a class="linkFromTitle" href="#">${post.title}</a>
                    <p>${post.overView}</p>
                </div>
                <a class="linkFromButton">
                    <button type="button" class="btn btnContent">Read more...</button>            
                </a>
            </div>
        </div>
        `
    })
    .join("");
    leftSideContent.innerHTML = `
        <div class="mainContent container-fluid" id="mainContent">
            ${htmlMainContent}
        </div> 
    `
}
displayMainContent(dataCodeForEveryOne)
// Navbar
    let listOfCodeForEveryOne = document.getElementsByClassName("list-of-code-for-everyone")[0];
    for (x of dataCodeForEveryOne) {
        listOfCodeForEveryOne.innerHTML += `
            <a class="dropdown-item" href="#">${x.title}</a>
            <div class="dropdown-divider"></div>
        `
    }
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
 // Random maybe you like
var res = dataCodeForEveryOne.sort(function() {
    return 0.5 - Math.random();
});
let randomPost = res.slice(dataCodeForEveryOne,3)
let maybeYouLikePosts = document.getElementsByClassName("maybe-you-like-posts")[0]
for(let i = 0; i < randomPost.length; i++) {
    maybeYouLikePosts.innerHTML += `
        <div class="row content-in-recent-posts">
            <div class="col-4 img-on-recent-posts-content">
                <a href="${randomPost[i].link}">
                    <img src="${randomPost[i].img}" alt="">          
                </a>
            </div>
            <div class="col-8">
                <a class="title-in-footer-posts" href="${randomPost[i].link}">${randomPost[i].title}</a>
                <p class="post-date">${randomPost[i].date}</p>
            </div>
        </div>
        `
}


