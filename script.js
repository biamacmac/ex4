console.log("hello");

//MOUSEOVER//
function mOver(obj) {
  obj.innerHTML = "KIMETSU NO YABA";
}

function mOut(obj) {
  obj.innerHTML = "DEMON SLAYER";
}

// FIM MOUSEOVER



// ALTERAÇÃO DE FUNDO COM BoTÃO 

var background = new Array(); 
background[0] = "img2.jpeg";
background[1] = "img3.jpeg";
background[2] = "img4.jpeg";
background[3] = "img5.jpeg";
background[4] = "img6.jpeg";
background[5] = "img7.jpeg";
background[6] = "img8.jpeg";

var numberGen =Math.floor(Math.random()*6);
document.body.style.background='url('+background[numberGen]+')';

function fundo(){
   location.reload();
}

//fim do fundo

// menu 
$(document).ready(function(){
                      $('.sidebar').click(function(){
                         $('.side').toggleClass('active');
                          $('.sidebar').toggleClass('toggle');
                                          })
                      });
    

// botao revelar spoiler NAO FUNCIONA NAO PERCEBO PORQUE
// o objetivo seria desbloquear a secção ao carregar


$(function(){
    
    document.getElementById('myDIV');
    
    $('myDIV').hide();
    
    var $spoil = $('myDIV');
    
    $spoil.on('click', function zeni(){
        $(this).show();
    })
    
    
});

//FIM DO QUE NAO FUNCIONA 
// MOUSEMOVE






