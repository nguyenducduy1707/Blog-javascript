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
            <a href=""#>
                <img src="${dataCodeForEveryOne[i].img}" alt="">           
            </a>
            <div class="sugesstionContent">
                <a href="#">${dataCodeForEveryOne[i].title}</a>
                <p>${dataCodeForEveryOne[i].date}</p>
            </div>
        </div>
    `
};
