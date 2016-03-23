<script type="text/javascript">
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
</script>