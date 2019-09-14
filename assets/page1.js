


var tabs1;
var tabs2;
var tabs2 = document.querySelector('#div-1');
var tabs1 = document.querySelector('.left-cards');
var nav = document.querySelector('.nav2-li');
var nav2 = document.querySelector('.nav1-li');

tabs2.style.display ='none';




function tab1(){
    
    tabs2.style.display = 'none';
    tabs1.style.display = 'grid';
   
   nav.style.borderLeft = '3px solid';
   nav2.style.borderLeft = 'none';
   
    
};

function tab2(){
                 
    tabs1.style.display = 'none';
    tabs2.style.display = 'block';
    
    nav2.style.borderLeft = '3px solid';
   nav.style.borderLeft = 'none';
   
    
};
function link(){
    tabs2.style.display= 'block';
    tabs1.style.display = 'none';
}
tabs2.addEventListener(onclick, tab1);
tabs1.addEventListener(onclick, tab2);