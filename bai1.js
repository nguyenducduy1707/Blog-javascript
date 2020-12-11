// Page 1:
let titleBai1 = document.getElementById("titleBai1");
titleBai1.innerHTML = dataCodeForEveryOne[0].title
let imgBai1 = document.getElementById("imgBai1");
imgBai1.innerHTML = `
<img src="${dataCodeForEveryOne[0].img}" alt="">
`;
let suggestionsPictureAndContent1 = document.getElementById("suggestionsPictureAndContent1")
for(let i=1; i < dataCodeForEveryOne.length && i < 4; i++) {
    suggestionsPictureAndContent1.innerHTML += `
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
