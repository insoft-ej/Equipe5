
$(function() {
	$(window).scroll(function(){
		var topo = $('#topo').height(); // altura do topo
		var rodape = $('#rodape').height(); // altura do rodape
		var scrollTop = $(window).scrollTop(); // qto foi rolado a barra
		var tamPagina = $(document).height(); // altura da página
				 
		if(scrollTop > topo){
			$('#menu').css({'position' : 'absolute', 'margin-top' : scrollTop - (topo-5)});
		}else{
			$('#menu').css({'position' : 'relative', 'margin-top' : 0});
		}               
	});
});



function somente_letra(campo){
	var digits="qwertyuiopasdfghjklçzxcvbnm@"
	var campo_temp

	for (var j=0;j<campo.value.length;j++){
		campo_temp=campo.value.substring(j,j+1)
		if (digits.indexOf(campo_temp) ==-1){
			campo.value = campo.value.substring(0,j);
			break;
		}
	}
}

function onLoadImg(){		
		document.getElementById("carregando").style.display="none";
		document.getElementById("creditos").style.display = "";
		document.getElementById("foto").style.display = "";
		document.getElementById('num').innerHTML = foto.numAtual;
		if (mudaFt == 0 && foto.numAtual > 0 && foto.numAtual < foto.numMax)
			{mudaFtInterv = setTimeout("mostraFoto(foto.numAtual+1)",10000)};
}

function mostraFoto(num){
		if (mudaFtInterv!=""){clearTimeout(mudaFtInterv)};
		if (num <= 0 || num > foto.numMax) {foto.numAtual = 1}
			else{foto.numAtual = num};
		var ft = document.getElementById("foto");
		ft.title = document.title + " - Imagem "+num+" / "+foto.numMax;
		ft.alt = "Imagem "+num+" / "+foto.numMax;
		ft.src = foto.endereco + completaNome(numReal(num) + foto.asomar) + foto.extensao;
		
		
		//---------------------------------------- INICIO: habiliar/desabilitar botões pr&oacute;ximo/anterior -------------------------------------------
		var prox = document.getElementById('proxima').disabled;
		var ant = document.getElementById('anterior').disabled;
		if (prox == true && num < foto.numMax)			{document.getElementById('proxima').disabled=false}
			else{if (prox == false && num == foto.numMax){document.getElementById('proxima').disabled=true}};
		if (ant == true && num > 1)					{document.getElementById('anterior').disabled=false}
			else{if (ant == false && num == 1)		{document.getElementById('anterior').disabled=true}};
		//---------------------------------------- FIM: habiliar/desabilitar botões pr&oacute;ximo/anterior -------------------------------------------
}
