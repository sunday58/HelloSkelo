var btn = document.querySelector("#sayHi");
var entry = document.querySelector("#hiText");

btn.addEventListener("click", function(){

    entry.textContent = "Hellooooo Awesome....";

    let storyPara =document.querySelector("#newbtn");
    storyPara.textContent = "don't forgit to commit...."
    storyPara.classList.add('story');
    
});

entry.addEventListener("mouseover", function()
{
    entry.textContent = "Take your mouse off me!!!";
});

entry.addEventListener("mouseout", function()
{
    entry.textContent = "Thank you learner...!!!";
});


console.log(btn);
console.log(entry);
