// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//function evento(tracker, categoria, acao, rotulo){
//    tracker.send('event', categoria, action, rotulo)
//}

//<!-- Google Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-123456-Y', 'auto');
ga('send', 'pageview');
//<!-- End Google Analytics -->

function evento(obj_ga, categoria, acao, rotulo){
    obj_ga('send', {
        hitType: 'event',
        eventCategory: categoria,
        eventAction: acao,
        eventLabel: rotulo
      });
}

// definindo listeners

// contato    
var obj_contato = document.getElementsByClassName("menu-lista-contato")[0]
if(obj_contato){        
    obj_contato.addEventListener("click", function(event){
        evento(ga, "menu","entre_em_contato","link_externo");
    });
}

// download pdf
var obj_pdf = document.getElementsByClassName("menu-lista-download")[0]
if(obj_pdf){
    obj_pdf.addEventListener("click", function(event){
        evento(ga, "menu","download_pdf","download_pdf");
    });
}

// ver mais LOREM
var obj_lorem = document.querySelectorAll('[data-id="lorem"]')[0]
if (obj_lorem){
    obj_lorem.addEventListener("click", function(event){
        evento(ga, "analise", "ver_mais", "Lorem");
    });
}

// ver mais IPSUM
var obj_ipsum = document.querySelectorAll('[data-id="ipsum"]')[0]
if (obj_ipsum){
    obj_ipsum.addEventListener("click", function(event){
        evento(ga, "analise", "ver_mais", "Ipsum");
    });
}

// ver mais DOLOR
var obj_dolor = document.querySelectorAll('[data-id="dolor"]')[0]
if (obj_dolor){
    obj_dolor.addEventListener("click", function(event){
        evento(ga, "analise", "ver_mais", "Dolor");
    });
}

// contato NOME
var obj_form_nome = document.getElementById("nome")
if (obj_form_nome){
    obj_form_nome.addEventListener("change", function(event){
        evento(ga, "contato","nome","preencheu");
    });
}

// contato EMAIL
var obj_form_email = document.getElementById("email")
if (obj_form_email){
    obj_form_email.addEventListener("change", function(event){
        evento(ga, "contato","email","preencheu");
    });
}

// contato TELEFONE
var obj_form_tel = document.getElementById("telefone")
if (obj_form_tel){
    obj_form_tel.addEventListener("change", function(event){
        evento(ga, "contato","telefone","preencheu");
    });
}

// contato ACEITO
var obj_form_aceito = document.getElementById("aceito")
if (obj_form_aceito){
    obj_form_aceito.addEventListener("change", function(event){
        evento(ga, "contato","aceito","preencheu");
    });
}

// contato ENVIADO
var obj_form_botao = document.getElementsByTagName("button")[0]
if(obj_form_botao){
    obj_form_botao.addEventListener("click", function(event){
        evento(ga, "contato","enviado","enviado");
    });
}