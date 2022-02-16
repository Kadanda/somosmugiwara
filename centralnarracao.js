!function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n(".cardperfbox",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo7").load(i+" .cardperfbox",function(){t("#conteudo7",i)}),n("#conteudo8").load(c+" .cardperfbox",function(){t("#conteudo8",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery),function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n("#atrificha",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo").load(i+" #atrificha",function(){t("#conteudo",i)}),n("#conteudo2").load(c+" #atrificha",function(){t("#conteudo2",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery),function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n("#atripr",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo3").load(i+" #atripr",function(){t("#conteudo3",i)}),n("#conteudo4").load(c+" #atripr",function(){t("#conteudo4",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery),function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n("#nick",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo5").load(i+" #nick",function(){t("#conteudo5",i)}),n("#conteudo6").load(c+" #nick",function(){t("#conteudo6",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery),function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n("#tableinfo",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo10").load(i+" #tableinfo",function(){t("#conteudo10",i)}),n("#conteudo11").load(c+" #tableinfo",function(){t("#conteudo11",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery),function(n){"use strict";var t=function(t,o,i){n.post(o).done(function(o){var c=n("#atrificha2",o);n(t).html(c),i&&"function"==typeof i&&i()})};n(function(){n(".links-form").on("submit",function(o){o.preventDefault(),n(".pre-ajax-content").hide(),n(".ajax-content").show();var i=n("#link-1").val(),c=n("#link-2").val();n("#conteudo07").load(i+" #atrificha2",function(){t("#conteudo07",i)}),n("#conteudo08").load(c+" #atrificha2",function(){t("#conteudo08",c,function(){n("[id]").each(function(t,o){n(this).attr("id",n(this).attr("id"))})})})})})}(jQuery);

jQuery(document).ready(function(){jQuery("#seender_abas").prepend('<ul id="navebar">\t<li><a class="ativo">Testes de Acerto e Esquiva</a></li><li><a>Testes de Dano e Bloqueio</a></li><li><a>Testes de Manipular e Raciocínio</a></li><li><a>Resultado de Batalha</a></li><li><a>Média de Narração</a></li><li><a>Testes de Atributos Primários</a></li></ul>'),jQuery(".aba").css({display:"none"}),jQuery("#aba1").css("display","block"),jQuery("a",jQuery("#navebar")).click(function(){var a=jQuery("a",jQuery("#navebar")).index(this)+1;jQuery(this).parents("#seender_abas").children(".aba:visible").hide(),jQuery("#aba"+a).show(),jQuery(this).parents("#navebar").find("a").removeClass("ativo"),jQuery(this).addClass("ativo")})});

function randNumber(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber1(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers1");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber2(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers2");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber3(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers3");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber4(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers4");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber5(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers5");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}function randNumber6(){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],e=1,r=document.getElementById("numbers6");r.innerHTML="";do{var t=Math.floor(Math.random()*n.length);r.innerHTML+=""+n[t],e--}while(e>0)}

function change() {
     setTimeout(carregar, 7000);
}

function carregar() {
$('#ajaxrow').show();
}

$(document).ready(function(){
$("#incrementar").click(function(){$(".tab").toggle(),$(".tnar").toggle(),$(".bform").toggle(),$(".infos-508p").toggle()});
});

var textarea = document.querySelector('#campo6');
var button = document.querySelector('.sign'); 

button.addEventListener('click', function() {
var assinatura = $('.fa-random-result').html();
var assinatura1 = $('.fa-random-result1').html();
var assinatura2 = $('.fa-random-result2').html();
    textarea.value += assinatura + assinatura1 + assinatura2;
});

var button2 = document.querySelector('.sign1'); 

button2.addEventListener('click', function() {
var assinatura3 = $('.fa-random-result3').html();
var assinatura4 = $('.fa-random-result4').html();
var assinatura5 = $('.fa-random-result5').html();
    textarea.value += assinatura3 + assinatura4 + assinatura5;
});

var button3 = document.querySelector('.sign2'); 
button3.addEventListener('click', function() {
    var df = parseFloat(document.getElementById('pvd').value);
var df2 = parseFloat(document.getElementById('pvrd').value);
var atak = $('#conteudo10 .boxx #tableone .conteudo3i').text();
var defs = $('#conteudo11 .boxx #tableone .conteudo3i').text();
    textarea.value += '<p id="fontuno">'+ atak + ' causou '+ parseInt(df - df2) +' de dano em '+ defs + ', que ficou com '+ df2 +' pontos de vida.</p>';
});

var button4 = document.querySelector('.sign10'); 
button4.addEventListener('click', function() {
    textarea.value = [];
});

    (function ($) {
      'use strict';
 
      $(window).on('load', function () {
         
          var idt =  $('#campo5').val();
          $('#fa-generated-form').on('submit', function (event) {
        event.preventDefault();
        $(this).find('button[type="submit"]').text('Postando...');
        var faid = $('#fa-generated-form').find('#campo5').val();

              $.post('/post', {
                  t: faid,
                  message: $('#fa-generated-message').val().trim(),
                  mode: 'reply',
                  tid: $('[name="tid"]:first').val(),
                  post: 1,
              }).done(function () {
                  Swal.fire('Postado',
                                    'Você será redirecinado para a mensagem.',
                                    'success'
                                );
            location.href = '/t' + faid + '-';
              }).fail(function () {
                  alert('Houve um erro! Tente novamente!');
              });

          });
      });
    }(jQuery));

 ClassicEditor
        .create( document.querySelector( '#campo3' ),{
removePlugins: [ 'List', 'Table', 'Indent' ]
} )
        .catch( error => {
            console.error( error );
        } );

               (function ($) {
            'use strict';
$(function mud10() {
$('.aba input').change(function() {
var atak = $('#conteudo10 .boxx #tableone .conteudo3i').text();
var defs = $('#conteudo11 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random').val();
                var config = {
                  minus: '<span class="nega">'+ defs + ' obteve sucesso em esquivar-se do golpe. Fim dos testes.</span>',
                  zero : '<span class="suce">'+ atak + ' obteve sucesso em acertar o golpe. Prossiga para os testes de dano e bloqueio.</span>',
                  plus : '<span class="suce">'+ atak + ' obteve sucesso em acertar o golpe. Prossiga para os testes de dano e bloqueio.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud0() {
$('.aba input').change(function() {
var atak = $('#conteudo10 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random1').val();
                var config = {
                  minus: '<span class="nega">'+ atak + ' falhou no acerto crítico.</span>',
                  zero : '<span class="suce">'+ atak + ' obteve sucesso no acerto crítico.</span>',
                  plus : '<span class="suce">'+ atak + ' obteve sucesso no acerto crítico.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result1').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud1() {
$('.aba input').change(function() {
var defs = $('#conteudo11 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random2').val();
                var config = {
                  minus: '<span class="nega">'+ defs + ' falhou na esquiva perfeita.</span>',
                  zero : '<span class="suce">'+ defs + ' obteve sucesso na esquiva perfeita.</span>',
                  plus : '<span class="suce">'+ defs + ' obteve sucesso na esquiva perfeita.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result2').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

 (function ($) {
            'use strict';
$(function mud20() {
$('.aba input').change(function() {
var atak = $('#conteudo10 .boxx #tableone .conteudo3i').text();
var defs = $('#conteudo11 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random3').val();
                var config = {
                  minus: '<span class="nega">'+ defs + ' obteve sucesso em bloquear o ataque. Prossiga para o resultado da batalha.</span>',
                  zero : '<span class="suce">'+ atak + ' obteve sucesso em atravessar o bloqueio. Prossiga para o resultado da batalha.</span>',
                  plus : '<span class="suce">'+ atak + ' obteve sucesso em atravessar o bloqueio. Prossiga para o resultado da batalha.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result3').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud3() {
$('.aba input').change(function() {
var atak = $('#conteudo10 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random4').val();
                var config = {
                  minus: '<span class="nega">'+ atak + ' falhou no dano fatal.</span>',
                  zero : '<span class="suce">'+ atak + ' obteve sucesso no dano fatal.</span>',
                  plus : '<span class="suce">'+ atak + ' obteve sucesso no dano fatal.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result4').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud4() {
$('.aba input').change(function() {
var defs = $('#conteudo11 .boxx #tableone .conteudo3i').text();
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random5').val();
                var config = {
                  minus: '<span class="nega">'+ defs + ' falhou no bloqueio perfeito.</span>',
                  zero : '<span class="suce">'+ defs + ' obteve sucesso no bloqueio perfeito.</span>',
                  plus : '<span class="suce">'+ defs + ' obteve sucesso no bloqueio perfeito.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result5').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud5() {
$('.aba input').change(function() {
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random6').val();
                var config = {
                  minus: '<span class="nega">falhou no bloqueio perfeito 1.</span>',
                  zero : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>',
                  plus : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result6').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud6() {
$('.aba input').change(function() {
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random7').val();
                var config = {
                  minus: '<span class="nega">Player defensor falhou no bloqueio perfeito 1.</span>',
                  zero : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>',
                  plus : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result7').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

(function ($) {
            'use strict';
$(function mud7() {
$('.aba input').change(function() {
 soma();
                var $this = $(this);
    
                var number = $('.fa-input-random8').val();
                var config = {
                  minus: '<span class="nega">Player defensor falhou no bloqueio perfeito 1.</span>',
                  zero : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>',
                  plus : '<span class="suce">Player defensor obteve sucesso no bloqueio perfeito 1.</span>'
                };
                var setHTML = function (html) {
                  $('.fa-random-result8').html(html);
                };
    
                if (number == 0) {
                  setHTML(config.zero);
                } else if (number > 0) {
                  setHTML(config.plus);
                } else if (number < 0) {
                  setHTML(config.minus);
                }
    });
              });
                  }(jQuery));

    (function($) {
        'use strict';

        $(function() {
            $("#incrementar").on("click", function() {
                $('.ulatris input[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('.ulatris1 input[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('.ulatriss input[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('.tnar button[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('.avatar-wrap input[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('.ulatris input[id]').each(function(index, el) {
                    $(this).attr('oninput', 'soma()');
                });
$('#tableinfo input[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
$('#tableinfo input[id]').each(function(index, el) {
                    $(this).attr('oninput', 'soma()');
                });
$('.avatar-wrap input[id]').each(function(index, el) {
                    $(this).attr('oninput', 'soma()');
                });
$(this).prop("disabled", true);
            });
        });
    }(jQuery));

    (function($) {
        'use strict';

        $(function() {
            $("#incrementar0").on("click", function() {
                $('.buts button[id]').each(function(index, el) {
                    $(this).attr('id', $(this).attr('id') + '0' + index);
                });
                $(this).prop("disabled", true);
            });
        });
    }(jQuery));

 function soma(){

document.getElementById("resultado00").value="0";
document.getElementById("resultado01").value="0";
document.getElementById("resultado02").value="0";
document.getElementById("resultado03").value="0";
document.getElementById("resultado04").value="0";
document.getElementById("resultado05").value="0";
document.getElementById("pvrd").value="0";
document.getElementById("med1").value="0";
document.getElementById("med2").value="0";
document.getElementById("resultadotf").value = '0';
document.getElementById("resultadotmf").value = '0';
document.getElementById("resultadotm").value = '0';
document.getElementById("resultadotd").value = '0';
document.getElementById("resultadotdi").value = '0';
document.getElementById("resultadotper").value = '0';

var level00 = parseFloat(document.getElementById("level00").value); 
var mnar01 = parseFloat(document.getElementById("mnar01").value);
var level02 = parseFloat(document.getElementById("level02").value); 
var mnar03 = parseFloat(document.getElementById("mnar03").value);
var pvd00 = parseFloat(document.getElementById("pvd00").value); 
var bva01 = parseFloat(document.getElementById("bva01").value);
var biq02 = parseFloat(document.getElementById("biq02").value); 
var pst03 = parseFloat(document.getElementById("pst03").value); 
var bva04 = parseFloat(document.getElementById("bva04").value); 
var biq05 = parseFloat(document.getElementById("biq05").value); 
var dano06 = parseFloat(document.getElementById("dano06").value); 
var ha07 = parseFloat(document.getElementById("ha07").value); 
var hr08 = parseFloat(document.getElementById("hr08").value); 
var bva09 = parseFloat(document.getElementById("bva09").value); 
var bmae010 = parseFloat(document.getElementById("bmae010").value); 
var biq011 = parseFloat(document.getElementById("biq011").value); 
var bcd012 = parseFloat(document.getElementById("bcd012").value); 
var block013 = parseFloat(document.getElementById("block013").value); 
var ha014 = parseFloat(document.getElementById("ha014").value); 
var hr015 = parseFloat(document.getElementById("hr015").value); 
var bva016 = parseFloat(document.getElementById("bva016").value); 
var bmae017 = parseFloat(document.getElementById("bmae017").value); 
var biq018 = parseFloat(document.getElementById("biq018").value); 
var bcd019 = parseFloat(document.getElementById("bcd019").value); 
var esquiva020 = parseFloat(document.getElementById("esquiva020").value); 
var ho021 = parseFloat(document.getElementById("ho021").value); 
var hr022 = parseFloat(document.getElementById("hr022").value); 
var bva023 = parseFloat(document.getElementById("bva023").value); 
var bmae024 = parseFloat(document.getElementById("bmae024").value); 
var biq025 = parseFloat(document.getElementById("biq025").value); 
var bcd026 = parseFloat(document.getElementById("bcd026").value); 
var acerto027 = parseFloat(document.getElementById("acerto027").value); 
var ho028 = parseFloat(document.getElementById("ho028").value); 
var hr029 = parseFloat(document.getElementById("hr029").value); 
var bva030 = parseFloat(document.getElementById("bva030").value); 
var bmae031 = parseFloat(document.getElementById("bmae031").value); 
var biq032 = parseFloat(document.getElementById("biq032").value); 
var bcd033 = parseFloat(document.getElementById("bcd033").value); 
var enganar034 = parseFloat(document.getElementById("enganar034").value); 
var hr035 = parseFloat(document.getElementById("hr035").value); 
var bva036 = parseFloat(document.getElementById("bva036").value); 
var bmae037 = parseFloat(document.getElementById("bmae037").value); 
var biq038 = parseFloat(document.getElementById("biq038").value); 
var bcd039 = parseFloat(document.getElementById("bcd039").value); 
var mentali040 = parseFloat(document.getElementById("mentali040").value); 
var hr041 = parseFloat(document.getElementById("hr041").value); 
var bva042 = parseFloat(document.getElementById("bva042").value); 
var bmae043 = parseFloat(document.getElementById("bmae043").value); 
var biq044 = parseFloat(document.getElementById("biq044").value); 
var bcd045 = parseFloat(document.getElementById("bcd045").value); 
var aparen046 = parseFloat(document.getElementById("aparen046").value); 
var bva047 = parseFloat(document.getElementById("bva047").value); 
var biq048 = parseFloat(document.getElementById("biq048").value); 
var bcd049 = parseFloat(document.getElementById("bcd049").value); 
var disfar050 = parseFloat(document.getElementById("disfar050").value); 
var bva051 = parseFloat(document.getElementById("bva051").value); 
var biq052 = parseFloat(document.getElementById("biq052").value); 
var bcd053 = parseFloat(document.getElementById("bcd053").value);
var concen054 = parseFloat(document.getElementById("concen054").value); 
var hr055 = parseFloat(document.getElementById("hr055").value); 
var bva056 = parseFloat(document.getElementById("bva056").value); 
var bmae057 = parseFloat(document.getElementById("bmae057").value); 
var biq058 = parseFloat(document.getElementById("biq058").value); 
var bcd059 = parseFloat(document.getElementById("bcd059").value); 
var resist060 = parseFloat(document.getElementById("resist060").value); 
var bva061 = parseFloat(document.getElementById("bva061").value); 
var biq062 = parseFloat(document.getElementById("biq062").value); 
var movt063 = parseFloat(document.getElementById("movt063").value); 
var pvd064 = parseFloat(document.getElementById("pvd064").value); 
var bva065 = parseFloat(document.getElementById("bva065").value);
var biq066 = parseFloat(document.getElementById("biq066").value); 
var pst067 = parseFloat(document.getElementById("pst067").value); 
var bva068 = parseFloat(document.getElementById("bva068").value); 
var biq069 = parseFloat(document.getElementById("biq069").value); 
var dano070 = parseFloat(document.getElementById("dano070").value); 
var ha071 = parseFloat(document.getElementById("ha071").value); 
var hr072 = parseFloat(document.getElementById("hr072").value); 
var bva073 = parseFloat(document.getElementById("bva073").value); 
var bmae074 = parseFloat(document.getElementById("bmae074").value); 
var biq075 = parseFloat(document.getElementById("biq075").value); 
var bcd076 = parseFloat(document.getElementById("bcd076").value); 
var block077 = parseFloat(document.getElementById("block077").value); 
var ha078 = parseFloat(document.getElementById("ha078").value); 
var hr079 = parseFloat(document.getElementById("hr079").value); 
var bva080 = parseFloat(document.getElementById("bva080").value); 
var bmae081 = parseFloat(document.getElementById("bmae081").value); 
var biq082 = parseFloat(document.getElementById("biq082").value); 
var bcd083 = parseFloat(document.getElementById("bcd083").value); 
var esquiva084 = parseFloat(document.getElementById("esquiva084").value); 
var ho085 = parseFloat(document.getElementById("ho085").value); 
var hr086 = parseFloat(document.getElementById("hr086").value); 
var bva087 = parseFloat(document.getElementById("bva087").value); 
var bmae088 = parseFloat(document.getElementById("bmae088").value); 
var biq089 = parseFloat(document.getElementById("biq089").value); 
var bcd090 = parseFloat(document.getElementById("bcd090").value); 
var acerto091 = parseFloat(document.getElementById("acerto091").value); 
var ho092 = parseFloat(document.getElementById("ho092").value); 
var hr093 = parseFloat(document.getElementById("hr093").value); 
var bva094 = parseFloat(document.getElementById("bva094").value); 
var bmae095 = parseFloat(document.getElementById("bmae095").value); 
var biq096 = parseFloat(document.getElementById("biq096").value); 
var bcd097 = parseFloat(document.getElementById("bcd097").value); 
var enganar098 = parseFloat(document.getElementById("enganar098").value); 
var hr099 = parseFloat(document.getElementById("hr099").value); 
var bva0100 = parseFloat(document.getElementById("bva0100").value); 
var bmae0101 = parseFloat(document.getElementById("bmae0101").value); 
var biq0102 = parseFloat(document.getElementById("biq0102").value); 
var bcd0103 = parseFloat(document.getElementById("bcd0103").value); 
var mentali0104 = parseFloat(document.getElementById("mentali0104").value); 
var hr0105 = parseFloat(document.getElementById("hr0105").value); 
var bva0106 = parseFloat(document.getElementById("bva0106").value); 
var bmae0107 = parseFloat(document.getElementById("bmae0107").value); 
var biq0108 = parseFloat(document.getElementById("biq0108").value); 
var bcd0109 = parseFloat(document.getElementById("bcd0109").value); 
var aparen0110 = parseFloat(document.getElementById("aparen0110").value); 
var bva0111 = parseFloat(document.getElementById("bva0111").value); 
var biq0112 = parseFloat(document.getElementById("biq0112").value); 
var bcd0113 = parseFloat(document.getElementById("bcd0113").value); 
var disfar0114 = parseFloat(document.getElementById("disfar0114").value); 
var bva0115 = parseFloat(document.getElementById("bva0115").value); 
var biq0116 = parseFloat(document.getElementById("biq0116").value); 
var bcd0117 = parseFloat(document.getElementById("bcd0117").value);
var concen0118 = parseFloat(document.getElementById("concen0118").value); 
var hr0119 = parseFloat(document.getElementById("hr0119").value); 
var bva0120 = parseFloat(document.getElementById("bva0120").value); 
var bmae0121 = parseFloat(document.getElementById("bmae0121").value); 
var biq0122 = parseFloat(document.getElementById("biq0122").value); 
var bcd0123 = parseFloat(document.getElementById("bcd0123").value); 
var resist0124 = parseFloat(document.getElementById("resist0124").value); 
var bva0125 = parseFloat(document.getElementById("bva0125").value); 
var biq0126 = parseFloat(document.getElementById("biq0126").value); 
var movt0127 = parseFloat(document.getElementById("movt0127").value); 
var numbers = parseFloat(document.getElementById("numbers").innerHTML); 
var numbers1 = parseFloat(document.getElementById("numbers1").innerHTML); 
var numbers2 = parseFloat(document.getElementById("numbers2").innerHTML); 
var numbers3 = parseFloat(document.getElementById("numbers3").innerHTML); 
var numbers4 = parseFloat(document.getElementById("numbers4").innerHTML); 
var numbers5 = parseFloat(document.getElementById("numbers5").innerHTML); 
var numbers6 = parseFloat(document.getElementById("numbers6").innerHTML); 
var pbot = parseFloat(document.getElementById("pbot").value);
var pbotn = parseFloat(document.getElementById("pbotn").value);
var pbot1 = parseFloat(document.getElementById("pbot1").value);
var debs00 = parseFloat(document.getElementById("debs00").value);
var bufs01 = parseFloat(document.getElementById("bufs01").value);
var debs02 = parseFloat(document.getElementById("debs02").value);
var bufs03 = parseFloat(document.getElementById("bufs03").value);
var debs04 = parseFloat(document.getElementById("debs04").value);
var bufs05 = parseFloat(document.getElementById("bufs05").value);
var debs06 = parseFloat(document.getElementById("debs06").value);
var bufs07 = parseFloat(document.getElementById("bufs07").value);
var debs08 = parseFloat(document.getElementById("debs08").value);
var bufs09 = parseFloat(document.getElementById("bufs09").value);
var debs010 = parseFloat(document.getElementById("debs010").value);
var bufs011 = parseFloat(document.getElementById("bufs011").value);
var debs012 = parseFloat(document.getElementById("debs012").value);
var bufs013 = parseFloat(document.getElementById("bufs013").value);
var debs014 = parseFloat(document.getElementById("debs014").value);
var bufs015 = parseFloat(document.getElementById("bufs015").value);
var debs016 = parseFloat(document.getElementById("debs016").value);
var bufs017 = parseFloat(document.getElementById("bufs017").value);
var debs018 = parseFloat(document.getElementById("debs018").value);
var bufs019 = parseFloat(document.getElementById("bufs019").value);
var debs020 = parseFloat(document.getElementById("debs020").value);
var bufs021 = parseFloat(document.getElementById("bufs021").value);
var debs022 = parseFloat(document.getElementById("debs022").value);
var bufs023 = parseFloat(document.getElementById("bufs023").value);
var debs024 = parseFloat(document.getElementById("debs024").value);
var bufs025 = parseFloat(document.getElementById("bufs025").value);
var debs026 = parseFloat(document.getElementById("debs026").value);
var bufs027 = parseFloat(document.getElementById("bufs027").value);
var debs028 = parseFloat(document.getElementById("debs028").value);
var bufs029 = parseFloat(document.getElementById("bufs029").value);
var debs030 = parseFloat(document.getElementById("debs030").value);
var bufs031 = parseFloat(document.getElementById("bufs031").value);
var dac = parseFloat(document.getElementById("dac").value);
var daf = parseFloat(document.getElementById("daf").value);
var pvd = parseFloat(document.getElementById("pvd").value);
var bbq = parseFloat(document.getElementById("bbq").value);
var notan00 = parseFloat(document.getElementById("notan00").value);
var notan01 = parseFloat(document.getElementById("notan01").value);
var notan02 = parseFloat(document.getElementById("notan02").value);
var notan03 = parseFloat(document.getElementById("notan03").value);
var notan04 = parseFloat(document.getElementById("notan04").value);
var notan05 = parseFloat(document.getElementById("notan05").value);
var notan06 = parseFloat(document.getElementById("notan06").value);
var notan07 = parseFloat(document.getElementById("notan07").value);
var notan08 = parseFloat(document.getElementById("notan08").value);
var notan09 = parseFloat(document.getElementById("notan09").value);
var atp = parseFloat(document.getElementById("atp").value);
var bsor = parseFloat(document.getElementById("bsor").value);
var tper = parseFloat(document.getElementById("tper").value);

document.getElementById("resultado00").value = parseInt((1 * (numbers + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs07 - debs06 + ho028 + hr029 + bva030 + bmae031))) * (acerto027 + biq032 + bcd033)))) + (- 1 * (numbers1 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs021 - debs020 + ho085 + hr086 + bva087 + bmae088))) * (esquiva084 + biq089 + bcd090)))));

document.getElementById("resultado01").value = parseInt((1 * (numbers + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs07 - debs06 + ho028 + hr029 + bva030 + bmae031))) * (acerto027 + biq032 + bcd033)))) + (- 1.5 * (numbers1 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs021 - debs020 + ho085 + hr086 + bva087 + bmae088))) * (esquiva084 + biq089 + bcd090)))));

document.getElementById("resultado02").value = parseInt((- 1.5 * (numbers + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs07 - debs06 + ho028 + hr029 + bva030 + bmae031))) * (acerto027 + biq032 + bcd033)))) + (1 * (numbers1 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs021 - debs020 + ho085 + hr086 + bva087 + bmae088))) * (esquiva084 + biq089 + bcd090)))));

document.getElementById("resultado03").value = parseInt((1 * (numbers2 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs01 - debs00 + ha07 + hr08 + bva09 + bmae010))) * (dano06 + biq011 + bcd012)))) + (- 1 * (numbers3 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs019 - debs018 + ha078 + hr079 + bva080 + bmae081))) * (block077 + biq082 + bcd083)))));

document.getElementById("resultado04").value = parseInt((1 * (numbers2 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs01 - debs00 + ha07 + hr08 + bva09 + bmae010))) * (dano06 + biq011 + bcd012)))) + (- 1.5 * (numbers3 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs019 - debs018 + ha078 + hr079 + bva080 + bmae081))) * (block077 + biq082 + bcd083)))));

document.getElementById("resultado05").value = parseInt((- 1.5 * (numbers2 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs01 - debs00 + ha07 + hr08 + bva09 + bmae010))) * (dano06 + biq011 + bcd012)))) + (1 * (numbers3 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs019 - debs018 + ha078 + hr079 + bva080 + bmae081))) * (block077 + biq082 + bcd083)))));

document.getElementById("resultado06").value = parseInt((1 * (numbers5 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs09 - debs08 + hr035 + bva036 + bmae037))) * (enganar034 + biq038 + bcd039)))) + (- 1 * (numbers6 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs027 - debs026 + hr0105 + bva0106 + bmae0107))) * (mentali0104 + biq0108 + bcd0109)))));

document.getElementById("resultado07").value = parseInt((1 * (numbers5 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs09 - debs08 + hr035 + bva036 + bmae037))) * (enganar034 + biq038 + bcd039)))) + (- 1.5 * (numbers6 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs027 - debs026 + hr0105 + bva0106 + bmae0107))) * (mentali0104 + biq0108 + bcd0109)))));

document.getElementById("resultado08").value = parseInt((- 1.5 * (numbers5 + (1 + (0.15 * mnar01) + (0.05 * level00)) * ((1 + (0.01 * (bufs09 - debs08 + hr035 + bva036 + bmae037))) * (enganar034 + biq038 + bcd039)))) + (1 * (numbers6 + (1 + (0.15 * mnar03) + (0.05 * level02)) * ((1 + (0.01 * (bufs027 - debs026 + hr0105 + bva0106 + bmae0107))) * (mentali0104 + biq0108 + bcd0109)))));

document.getElementById("pvrd").value = parseInt((pvd + bva065 + biq066 + resist0124 + bva0125 + biq0126 + (bbq * ((block077 + biq082 + bcd083 + ((block077 / 100) * (ha078 + hr079 + bva080 + bmae081 + bufs019 - debs018))) / 100))) - (dano06 + biq011 + bcd012 + ((dano06 / 100) * (ha07 + hr08 + bva09 + bmae010 + bufs01 - debs018)) + (daf * (pvd / 100)) + (dac * ((dano06 + biq011 + bcd012 + ((dano06 / 100) * (ha07 + hr08 + bva09 + bmae010 + bufs01 - debs018))) / 100))));

document.getElementById("med1").value = parseInt((((notan00 * 10) + (notan01 * 8) + (notan02 * 6) + (notan03 * 4) + (notan04 * 2)) / 30));

document.getElementById("med2").value = parseInt((((notan05 * 10) + (notan06 * 8) + (notan07 * 6) + (notan08 * 4) + (notan09 * 2)) / 30));

document.getElementById("resultadotdi").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - 125);
document.getElementById("resultadotd").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - 115);
document.getElementById("resultadotm").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - 95);
document.getElementById("resultadotf").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - 70);
document.getElementById("resultadotmf").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - 35);
document.getElementById("resultadotper").value = parseInt((mnar01 + atp + numbers4 + (bsor/2)) - tper);
}   
