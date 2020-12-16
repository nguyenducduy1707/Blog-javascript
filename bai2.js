// Page 2:
let titleBai2 = document.getElementById("titleBai2");
titleBai2.innerHTML = dataCodeForEveryOne[1].title
let imgBai2 = document.getElementById("imgBai2");
imgBai2.innerHTML = `
<img src="${dataCodeForEveryOne[1].img}" alt="">
`;
let suggestionsPictureAndContent2 = document.getElementById("suggestionsPictureAndContent2")
for(let i=2; i < dataCodeForEveryOne.length && i < 5; i++) {
    suggestionsPictureAndContent2.innerHTML += `
        <div class="col-md" id="pictureSuggestions1bai1">
            <a href="${dataCodeForEveryOne[i].link}">
                <img src="${dataCodeForEveryOne[i].img}" alt="">           
            </a>
            <div class="sugesstionContent">
                <a href="${dataCodeForEveryOne[i].link}">${dataCodeForEveryOne[i].title}</a>
                <p>${dataCodeForEveryOne[i].date}</p>
            </div>
        </div>
    `
};
 // Random maybe you like
 var res = dataCodeForEveryOne.sort(function() {
    return 0.5 - Math.random();
});
let randomPost = res.slice(dataCodeForEveryOne,3)
console.log(dataCodeForEveryOne)
let maybeYouLikePosts = document.getElementsByClassName("maybe-you-like-posts")[0]
for(let i = 0; i < 3; i++) {
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
