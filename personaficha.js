   function rb_onchange(s) {
      if (s.checked && s.id == "reseth1") {
document.getElementById('typera1').style.display = 'none';
document.getElementById('typera').style.display = 'block';
document.getElementById("campo100").id = "reset1";
document.getElementById("campo101").id = "campo16";
document.getElementById("campo102").id = "campo17";
document.getElementById("campo103").id = "campo18";
document.getElementById("campo104").id = "campo21";
document.getElementById("campo105").id = "campo22";
document.getElementById("campo106").id = "campo23";
document.getElementById("campo107").id = "campo24";
document.getElementById("campo108").id = "campo25";
document.getElementById("campo109").id = "campo26";
document.getElementById("campo110").id = "campo27";
document.getElementById("campo111").id = "campo28";
document.getElementById("campo112").id = "campo29";
document.getElementById("campo113").id = "campo30";

document.getElementById("reset1").value="0";
document.getElementById("campo16").value="0";
document.getElementById("campo17").value="0";
document.getElementById("campo18").value="0";
document.getElementById("campo19").value="0";
document.getElementById("campo20").value="0";
document.getElementById("campo21").value="0";
document.getElementById("campo22").value="0";
document.getElementById("campo23").value="0";
document.getElementById("campo24").value="0";
document.getElementById("campo25").value="0";
document.getElementById("campo26").value="0";
document.getElementById("campo27").value="0";
document.getElementById("campo28").value="0";
document.getElementById("campo29").value="0";
document.getElementById("campo30").value="0";

      }
      if (s.checked && s.id == "tipo1") {
document.getElementById('typera1').style.display = 'block';
document.getElementById('typera').style.display = 'none';
document.getElementById("reset1").id = "campo100";
document.getElementById("campo16").id = "campo101";
document.getElementById("campo17").id = "campo102";
document.getElementById("campo18").id = "campo103";
document.getElementById("campo21").id = "campo104";
document.getElementById("campo22").id = "campo105";
document.getElementById("campo23").id = "campo106";
document.getElementById("campo24").id = "campo107";
document.getElementById("campo25").id = "campo108";
document.getElementById("campo26").id = "campo109";
document.getElementById("campo27").id = "campo110";
document.getElementById("campo28").id = "campo111";
document.getElementById("campo29").id = "campo112";
document.getElementById("campo30").id = "campo113";
      }
      if (s.checked && s.id == "resetmg1") {
document.getElementById('typera2').style.display = 'none';
document.getElementById('typera').style.display = 'block';
        document.getElementById("campo200").id = "reset1";
        document.getElementById("campo201").id = "campo16";
  document.getElementById("campo202").id = "campo17";
  document.getElementById("campo203").id = "campo18";
  document.getElementById("campo204").id = "campo21";
  document.getElementById("campo205").id = "campo22";
document.getElementById("campo206").id = "campo23";
document.getElementById("campo207").id = "campo24";
document.getElementById("campo208").id = "campo25";
document.getElementById("campo209").id = "campo26";
document.getElementById("campo210").id = "campo27";
document.getElementById("campo211").id = "campo28";
document.getElementById("campo212").id = "campo29";
document.getElementById("campo213").id = "campo30";

document.getElementById("reset1").value="0";
document.getElementById("campo16").value="0";
      }
      if (s.checked && s.id == "tipo3") {
document.getElementById('typera2').style.display = 'block';
document.getElementById('typera').style.display = 'none';

        document.getElementById("reset1").id = "campo200";
document.getElementById("campo16").id = "campo201";
document.getElementById("campo17").id = "campo202";
document.getElementById("campo18").id = "campo203";
document.getElementById("campo21").id = "campo204";
document.getElementById("campo22").id = "campo205";
document.getElementById("campo23").id = "campo206";
document.getElementById("campo24").id = "campo207";
document.getElementById("campo25").id = "campo208";
document.getElementById("campo26").id = "campo209";
document.getElementById("campo27").id = "campo210";
document.getElementById("campo28").id = "campo211";
document.getElementById("campo29").id = "campo212";
document.getElementById("campo30").id = "campo213";

      }
      if (s.checked && s.id == "tipo5") {
document.getElementById('typera1').style.display = 'none';
document.getElementById('typeraconf').style.display = 'block';
document.getElementById('tnar').style.display = 'none';

document.getElementById("campo100").id = "campo150";
document.getElementById("campo101").id = "campo151";
document.getElementById("campo102").id = "campo152";
document.getElementById("campo103").id = "campo153";
document.getElementById("campo104").id = "campo154";
document.getElementById("campo105").id = "campo155";
document.getElementById("campo106").id = "campo156";
document.getElementById("campo107").id = "campo157";
document.getElementById("campo108").id = "campo158";
document.getElementById("campo109").id = "campo159";
document.getElementById("campo110").id = "campo160";
document.getElementById("campo111").id = "campo161";
document.getElementById("campo112").id = "campo162";
document.getElementById("campo113").id = "campo163";

      }
if (s.checked && s.id == "tipo50") {
document.getElementById('typeraconf').style.display = 'none';
document.getElementById('typeraf').style.display = 'block';

      }
      else if (s.checked && s.id == "tipo6") {
       document.getElementById("campo200").id = "campo150";
document.getElementById("campo201").id = "campo151";
document.getElementById("campo202").id = "campo152";
document.getElementById("campo203").id = "campo153";
document.getElementById("campo204").id = "campo154";
document.getElementById("campo205").id = "campo155";
document.getElementById("campo206").id = "campo156";
document.getElementById("campo207").id = "campo157";
document.getElementById("campo208").id = "campo158";
document.getElementById("campo209").id = "campo159";
document.getElementById("campo210").id = "campo160";
document.getElementById("campo211").id = "campo161";
document.getElementById("campo212").id = "campo162";
document.getElementById("campo213").id = "campo163";

      }
    }
    
    function soma(){

var fr = parseFloat(document.getElementById("campo1").value); 
var des = parseFloat(document.getElementById("campo2").value); 
var agi = parseFloat(document.getElementById("campo3").value); 
var vgr = parseFloat(document.getElementById("campo4").value); 
var con = parseFloat(document.getElementById("campo5").value); 
var per = parseFloat(document.getElementById("campo6").value); 
var int = parseFloat(document.getElementById("campo7").value); 
var esp = parseFloat(document.getElementById("campo8").value); 
var sor = parseFloat(document.getElementById("campo9").value); 
var log = parseFloat(document.getElementById("campo10").value); 
var eng = parseFloat(document.getElementById("campo11").value); 
var car = parseFloat(document.getElementById("campo12").value); 
var will = parseFloat(document.getElementById("campo13").value);  

// Humano Normal
document.getElementById("campo100").value = parseInt((((con*2.5) + (((con*vgr)/(con+vgr))*2) + (vgr*1.5))*10)*1);
document.getElementById("campo101").value = parseInt((((esp*2.5) + (((esp*vgr)/(esp+vgr))*2) + (vgr*1.5))*5)*1);
document.getElementById("campo102").value = parseInt((((con*2.5) + (((con*vgr)/(con+vgr))*2) + (vgr*1.5))*5)*1);
document.getElementById("campo103").value = parseInt((((esp*2.5) + (((esp*vgr)/(esp+vgr))*2) + (vgr*1.5))*10)*1);
document.getElementById("campo104").value = parseInt(((fr*2.5) + (will*1.5) + (vgr*1))*1);
document.getElementById("campo105").value = parseInt(((per*2.5) + (will*1.5) + (vgr*1))*1);
document.getElementById("campo106").value = parseInt(((agi*2.5) + (sor*1.5) + (vgr*1))*1.1);
document.getElementById("campo107").value = parseInt(((des*2.5) + (sor*1.5) + (vgr*1))*1.1);
document.getElementById("campo108").value = parseInt(((eng*2.5) + (int*1.5) + (will*1))*1.4);
document.getElementById("campo109").value = parseInt(((log*2.5) + (int*1.5) + (will*1))*1.3);
document.getElementById("campo110").value = parseInt(((log*2.5) + (car*1.5) + (sor*1))*1.3);
document.getElementById("campo111").value = parseInt(((eng*2.5) + (car*1.5) + (sor*1))*1);
document.getElementById("campo112").value = parseInt(((will*1) + log + eng + int + esp)*1);
document.getElementById("campo113").value = parseInt((((per*2.5) + (will*1.5) + (vgr*1))/2)*1);
document.getElementById("campo46").value = parseInt(fr + des + agi + vgr + con + per + int + esp + sor + log + eng + car + will);

//Meio Gigante
document.getElementById("campo200").value = parseInt((((con*2.5) + (((con*vgr)/(con+vgr))*2) + (vgr*1.5))*10)*1.2);
document.getElementById("campo201").value = parseInt((((esp*2.5) + (((esp*vgr)/(esp+vgr))*2) + (vgr*1.5))*5)*0.8);
document.getElementById("campo202").value = parseInt((((con*2.5) + (((con*vgr)/(con+vgr))*2) + (vgr*1.5))*5)*1.2);
document.getElementById("campo203").value = parseInt((((esp*2.5) + (((esp*vgr)/(esp+vgr))*2) + (vgr*1.5))*10)*0.8);
document.getElementById("campo204").value = parseInt(((fr*2.5) + (will*1.5) + (vgr*1))*1.3);
document.getElementById("campo205").value = parseInt(((per*2.5) + (will*1.5) + (vgr*1))*1.4);
document.getElementById("campo206").value = parseInt(((agi*2.5) + (sor*1.5) + (vgr*1))*0.8);
document.getElementById("campo207").value = parseInt(((des*2.5) + (sor*1.5) + (vgr*1))*1);
document.getElementById("campo208").value = parseInt(((eng*2.5) + (int*1.5) + (will*1))*1.1);
document.getElementById("campo209").value = parseInt(((log*2.5) + (int*1.5) + (will*1))*1.2);
document.getElementById("campo210").value = parseInt(((log*2.5) + (car*1.5) + (sor*1))*1);
document.getElementById("campo211").value = parseInt(((eng*2.5) + (car*1.5) + (sor*1))*1);
document.getElementById("campo212").value = parseInt(((will*1) + log + eng + int + esp)*1);
document.getElementById("campo213").value = parseInt((((per*2.5) + (will*1.5) + (vgr*1))/2)*1.2);

}

 (function ($) {
    	'use strict';

    	$(window).on('load', function () {
    		$('#fa-generated-form').on('submit', function (event) {
         event.preventDefault();
         $(this).find('button.post-button[type="submit"]').text('Enviando a ficha.');
         setTimeout(function () {
    			  $.post('/post', {
    			  	subject: $('#fa-generated-title').val().trim(),
    				  f: 5,
    			  	message: $('#fa-generated-message').val().trim(),
    			  	mode: 'newtopic',
    			  	tid: $('[name="tid"]:first').val(),
    			  	post: 1,
    		  	}).done(function (e) {
    			   Swal.fire({
                     icon: 'success',
                     title: 'Postado com sucesso!',
                     html: 'Você será redicionado ao fórum',
                     timer: 3000,
                     allowEscapeKey: false,
                     showConfirmButton: false,
                     timerProgressBar: true
               }).then((result) => {
                     if (
                         result.dismiss === Swal.DismissReason.timer
                         ) {
                                      var href = $(e).find('a[href^="/viewtopic"]').attr('href');
            location.href = href;
                   }
               });
    			  }).fail(function () {
    			   Swal.fire({
                     icon: 'error',
                     title: 'Erro!',
                     text: 'Tente novamente ou entre em contato',
                  });
    			  });
         }, 600);
    		});
    	});
    }(jQuery));

$(document).ready(function(){
          $("input[id='tipo50']").click(function(){
              var $this = $(this);
 
              if(!$this.is(':checked')) return;
 
    $([
    'input',
    'textarea',
    'select'
    ].join(',')).prop('disabled', true);
    
    $([
    'input',
    'textarea',
    'select'
    ].join(',')).css({"background-color": "#ddd", "color": "#333"});
 
 
          });
      });

$(document).ready(function(){$("#but0").click(function(){$(".boxini").slideToggle(),$(".infopes").slideToggle()}),$("#but1").click(function(){$(".ptdcamp").slideToggle(),$(".tnar").slideToggle(),$(".infopes").slideToggle(),$(".batri").slideToggle()}),$("#but00").click(function(){$(".boxini").slideToggle(),$(".infopes").slideToggle()}),$("#but10").click(function(){$(".tnar").slideToggle(),$(".infopes").slideToggle(),$(".batri").slideToggle()}),$("#but2").click(function(){$(".batri").slideToggle(),$(".biobox").slideToggle()}),$("#but3").click(function(){$(".biobox").slideToggle(),$(".ppebox").slideToggle()}),$("#but20").click(function(){$(".tnar").slideToggle(),$(".batri").slideToggle(),$(".biobox").slideToggle()}),$("#but30").click(function(){$(".biobox").slideToggle(),$(".ppebox").slideToggle()}),$("#but4").click(function(){$(".ppebox").slideToggle(),$(".boxvd").slideToggle()}),$("#but40").click(function(){$(".ppebox").slideToggle(),$(".boxvd").slideToggle()}),$("#but5").click(function(){$(".tnar").slideToggle(),$(".boxvd").slideToggle(),$(".boxfinal").slideToggle()}),$("#but50").click(function(){$(".tnar").slideToggle(),$(".boxvd").slideToggle(),$(".boxfinal").slideToggle()})});
