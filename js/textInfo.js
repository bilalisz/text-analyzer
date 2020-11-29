let textareaEl=document.querySelector('#text')
 let text=null;
const data={
    words:0,
    sentances:0,
    uppercase:0,
    lowercase:0,
    spaces:0,
    digits:0,
    vowels:0,
    consonantes:0,
}

const findLength=(item)=>item?item.length:0


const setText=()=>{
text=textareaEl.value
// let {words,sentances,uppercase,lowercase,spaces,digits,vowels,consonantes}=data
if(text == ''){
    alert('Please Write some text')
    return
}else{

data.words=findLength(text.match(/[a-z]+/gi));
data.sentances=findLength(text.match(/\056/g));
data.uppercase=findLength(text.match(/[A-Z]/g));
data.lowercase=findLength(text.match(/[A-z]/g));
data.spaces=findLength(text.match(/\s/g));
data.digits=findLength(text.match(/\d/g));
data.vowels=findLength(text.match(/[aeiou]/gi));
data.consonantes=findLength(text.match(/[bcdfghjklmnpqrstvwxys]/gi));

}

localStorage.setItem('data',JSON.stringify(data))
window.location='info.html'
};

const getData=()=>{
    return JSON.parse(localStorage.getItem('data'))
}

const showData=()=>{
    let data= getData();
    let htmlContent='';
    for(item in data){
        htmlContent+=`<div class='box'>
        <h2>${data[item]}</h2>
        <p>${item}</p>
        </div>`
    }
    document.querySelector('.info-wrapper').innerHTML=htmlContent;
    
}