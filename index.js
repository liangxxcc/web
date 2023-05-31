var tail=document.getElementById('l')
var nav=document.getElementById('la')
var as=document.getElementsByName('a')

nav.addEventListener("mouseover",function(e){
    
        if(e.target.tagName == "A"){
        tail.style.transform="translateX("+e.target.offsetLeft+"px)";
        tail.style.width=e.target.offsetWidth+"px";
        tail.style.display="block";
    }
})
nav.addEventListener("click",function(e){
    e.defaultPrevented();
    tail.style.display="block";
})


var imgs=document.getElementById('img_p')
var left=document.getElementById('left')
var right=document.getElementById('right')
var imgo=document.getElementById('img_o')

left.onclick=function(){
    if(imgs.style.left!=="0px"){
    imgs.style.left=parseInt(imgs.style.left)+500+"px";}
    else  imgs.style.left="-1500px";
}
right.onclick=function(){
    if(imgs.style.left!=="-1500px"){
    imgs.style.left=parseInt(imgs.style.left)-500+"px";}
    else  imgs.style.left="0px";
}


var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');

img1.onclick=function(){
    imgs.style.left="0px"
}
img2.onclick=function(){
    imgs.style.left="-500px"
}
img3.onclick=function(){
    imgs.style.left="-1000px"
}
img4.onclick=function(){
    imgs.style.left="-1500px"
}
var time = setInterval(function(){
    if(imgs.style.left!=="-1500px"){
        imgs.style.left=parseInt(imgs.style.left)-500+"px";}
        else  imgs.style.left="0px";
},1500);



