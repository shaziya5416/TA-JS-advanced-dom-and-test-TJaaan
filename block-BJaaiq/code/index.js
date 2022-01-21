let rootElm=document.querySelector(`.quotes`);

let max=4;
let index=0;

function addQuotes(){
    for (i=0;i<max;i++){
        let li=document.createElement("li");
        let blockquote=document.createElement("blockquote");
        let cite=document.createElement("cite");
        blockquote.innerText=quotes[index].quoteText;
        cite.innerText=quotes[index].quoteAuthor;

        li.append(blockquote,cite);
        rootElm.append(li);
        index++;

    }
};

document.addEventListener(`scroll`,()=>{
    let scrollTop=document.documentElement.scrollTop;
    let scrollHeight=document.documentElement.scrollHeight;
    let clientHeight=document.documentElement.clientHeight;
    if(scrollTop + clientHeight >=scrollHeight && index<quotes.length){
        addQuotes();
    }
});

window.addEventListener(`DOMContentLoaded`,()=>{
    alert(`All content loaded`);
    addQuotes();
});