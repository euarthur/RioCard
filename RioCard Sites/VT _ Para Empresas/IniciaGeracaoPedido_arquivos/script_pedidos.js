
    	function handleSelectButtons() {
    		var table = document.getElementById('formPaginacao');
    		var inputs = table.getElementsByTagName('input');

			var allMarked = true;
    		for (var i = 0; i < inputs.length; i++)
    			if ( inputs[i].type == 'checkbox' && inputs[i].checked != true ) 
    				allMarked = false;
    		
    		if ( allMarked ) {
    			document.getElementById('deselecionarTop').style.display = 'inline';
    			document.getElementById('selecionarTop').style.display = 'none';
    			document.getElementById('deselecionarBottom').style.display = 'inline';
    			document.getElementById('selecionarBottom').style.display = 'none';
    		} else {
    			document.getElementById('deselecionarTop').style.display = 'none';
    			document.getElementById('selecionarTop').style.display = 'inline';
    			document.getElementById('deselecionarBottom').style.display = 'none';
    			document.getElementById('selecionarBottom').style.display = 'inline';
    		}
    	}
    
    	function selecionarTodas() {
    		var table = document.getElementById('formPaginacao');
    		var inputs = table.getElementsByTagName('input');
    		for (var i = 0; i < inputs.length; i++)
    			if (inputs[i].type == 'checkbox') 
    				inputs[i].checked = 'checked';
    				
    		handleSelectButtons();
    	}
    	
    	function deselecionarTodas() {
    		var table = document.getElementById('formPaginacao');
    		var inputs = table.getElementsByTagName('input');
    		for (var i = 0; i < inputs.length; i++)
    			if (inputs[i].type == 'checkbox') 
    				inputs[i].checked = false;
    		
    		handleSelectButtons();
    	}
	
	function alteraPagina( valor )
	{
		var url = document.getElementById(valor);
		var formulario = document.getElementById("formPaginacao");
		
		if ( formulario != null ){
		
			if ( formulario.endereco != null )
				formulario.endereco.value = (url != null) ? url.href : "";
			
			if ( formulario.incluir != null )
				formulario.incluir.value = "nao";
			
			if ( formulario.opcao != null )
				if ( formulario.opcao.value != 'detalhar' )
					formulario.opcao.value = "alterar";
			
			formulario.submit();
		}
		return false;
	}
	
	function incluiPedido()
	{
		var formulario = document.getElementById("formPaginacao");
		if (formulario != null) {
			formulario.incluir.value = "sim";
			formulario.submit();			
		} else {
			var msgErro = document.getElementById("msgErro");
			msgErro.style.display = "block";
		}	
	}
	
	function mostrarQtdDias ( valor )
	{
		var diasUteis = document.getElementById("diasUteis");
	
		if (valor == '0')
		{
			diasUteis.style.display = "block";
		}
		else
		{
			diasUteis.style.display = "none";		
		}
	}
	
	function getTotalDaPagina() {
		var valorCarga;
		var result = 0;
		var inputs = document.getElementsByName('valorPedido');
		var inputsCheckBoxes = document.getElementsByName('selecionados');
		
		for (var i = 0; i < inputs.length; i++){
			if ( inputsCheckBoxes[i].checked) {
				valorCarga = inputs[i].value == "" ? "0" : inputs[i].value;
				valorCarga = parseFloat(valorCarga.replace(/,/g,"."));
                result += valorCarga;            
            }
		}
		return result;
	}

	var totalOutrasPaginas = 0;
	
	function valorTotalInicial() {	
		var totalDaPagina = getTotalDaPagina();
        totalOutrasPaginas = valorTotal - totalDaPagina;
		calcValorTotal();
	}
	
	function calcValorTotal() {
	
		var elementValorAtualTop    = document.getElementById('valorTotalTop');
		var elementValorAtualBot    = document.getElementById('valorTotalBot');
		var totalDaPagina           = getTotalDaPagina();
		var valorTotalParcial       = (totalDaPagina + totalOutrasPaginas);
        var valorTotalHidden        = document.getElementById("valorTotalF");
        
		if(elementValorAtualTop != null && elementValorAtualBot!= null){
            var valorTotalParcialString = '' + valorTotalParcial.toFixed(2);
            valorTotalParcialString = valorTotalParcialString.replace(/\./g,",");
    		elementValorAtualTop.innerHTML = valorTotalParcialString;
    		elementValorAtualBot.innerHTML = valorTotalParcialString;
		}
		if (valorTotalHidden) {
		  valorTotalHidden.value = valorTotalParcial;
		}
	}
	
	function calcValorPedido( idValorQtdDias, idValorDiario, idValorPedido, rowNum ) {
		
		var valorQtdDias = document.getElementById( idValorQtdDias+rowNum ).value;
		var valorDiario = document.getElementById( idValorDiario+rowNum ).value.replace(/,/g,".");
		var objValorPedido = document.getElementById( idValorPedido+rowNum );
		
		if ( objValorPedido == null) return;

        if (valorQtdDias == "") {
        	valorQtdDias = "0";
        }
        if (valorDiario == "") {
        	valorDiario = "0";
        }
        
        var valueString = '' + ( parseFloat(valorQtdDias) * parseFloat(valorDiario) ).toFixed(2);
        objValorPedido.value = valueString.replace( /\./g, ",");
        calcValorTotal();
	}

	
	function mostraLinhaCorrente( index ) {
		var nrMatricula = document.getElementById("nrMatricula" + index);
		nrMatricula.readOnly = "";
		
		for(i= 0; i<20; i++) {	
			var sembusca = document.getElementById("sembusca" + i);
			var combusca = document.getElementById("combusca" + i);

			if (i == index) {
				sembusca.style.display="block";			
				combusca.style.display="none";				
			} else {
				sembusca.style.display="none";						
				combusca.style.display="none";
			}
			document.getElementById("nrMatricula" + i).readOnly = "";
			
		}
		
		// O trecho abaixo não está mais sendo usado.
		/*
		var ok = document.getElementById("ok" + index);	
		var okdisabled = document.getElementById("okdisabled" + index);	
		var select = document.getElementById("select" + index);
		
		ok.style.display = "none";		
		okdisabled.style.display = "block";		
		
		//Esse método so pode ser usado nos seguintes elementos: select, ul, e ol.
		DWRUtil.removeAllOptions("select" + index);
		
		select[ 0 ] = new Option( "Digite mais de 6 caracteres ao lado", -1 );
		select.disabled = "disabled";
		*/
	}
	
	function mostraBuscaCorrente( index ) {
			var sembusca = document.getElementById("sembusca" + index);
			var combusca = document.getElementById("combusca" + index);
			
			sembusca.style.display="none";											
			combusca.style.display="block";	
			
			var nrMatricula = document.getElementById("nrMatricula" + index);
			nrMatricula.readOnly = "readonly";
	}
	
	function mostraBotaoBusca( index, texto ) {
		var habilitado = document.getElementById("habilitado" + index);
		var desabilitado = document.getElementById("desabilitado" + index);		
		var ok = document.getElementById("ok" + index);	
		var okDisabled = document.getElementById("okdisabled" + index);	
		var select = document.getElementById("select" + index);
	
		if (texto.length > 6) {
			habilitado.style.display = "block";
			desabilitado.style.display = "none";
		} else {
			habilitado.style.display = "none";
			desabilitado.style.display = "block";		
		}

		ok.style.display = "none";		
		okDisabled.style.display = "block";		
		
		select.disabled = "disabled";
	}			
	

	var comboBox;
	var alerta;
			
	function carregarUsuarios( nrDocComprd, procura, index ) {
		//document.body.style.cursor="crosshair"; 	
		comboBox = "select" + index;
		alerta = "alerta" + index;
		
		DWRUtil.removeAllOptions(comboBox);
		
		var combo = document.getElementById( comboBox );
		
		combo[0] = new Option( "Aguarde...", -1 );
			
		var ok = document.getElementById("ok" + index);	
		var okDisabled = document.getElementById("okdisabled" + index);	
		
		ok.style.display = "block";
		okDisabled.style.display = "none";

		RioCardVT.listarUsuarios(preencheComboBox, nrDocComprd, procura);		
	}
				
	function preencheDescricao( bean ) {
		var d = document.getElementById(descricao);
		if ( bean.nmUsuar != null && d != null ) {
			d.style.color = '#000000';
			d.innerHTML = bean.nmUsuar;
			
			var inputNomeUsuar = document.getElementById('nmUsuar' + indexGlobal);

			if ( inputNomeUsuar != null ) {
				inputNomeUsuar.value = bean.nmUsuar;
			}

		} else {
			d.style.color = '#990000';
			d.innerHTML = 'Nenhum usu&aacute;rio encontrado.';
		}

		// Mostra a mensagem se o cartao for classic
		if(bean.cartaoClassic){
			document.getElementById('avisoCartaoClassic' + indexGlobal).style.display = 'inline-block';
		}

		document.getElementById('erroNrMatricula' + indexGlobal).innerHTML = "";
	}
	
	
	function preencheAllDescricao() {		
		var length = 20;		
		for (var i = 0; i < length; i++ ) {
			var d = document.getElementById('descricao'+i);
			var nmUsuar = document.getElementById('nmUsuar'+i);
			d.innerHTML = nmUsuar.value;
		}
	}
	
	function obterIdMatricula( index )
	{
		var comboBox = document.getElementById("select" + index);
		var nrMatricula = document.getElementById("nrMatricula" + index);
		if (comboBox.value != -1) {
			nrMatricula.disabled = "";
			nrMatricula.value = comboBox.value.replace(/^\s+|\s+$/g, '');
			nrMatricula.focus();
			nrMatricula.blur();
		}
	}
	
	
    function submitForm( formId ) {
        if(formId != ""){
            var form = document.getElementById(formId);
            if (form != null) {
                form.submit();
            }
        }
    }	
    

    function formatarSaidaValorTotal(valor) {    	
    	
    	
    		var valorInt = parseInt( valor, 10 );
    	
    		if (valorInt == valor) {
    			valor = valor * 100;
    		} else { 
    			valor = parseFloat(valor);
    			valor = valor.toFixed(2); 	
    		}
    		
    		
    		valor = new String(valor);
    		
    		valor = valor.replace(/\./g,",");
    		valor = mascararNumero(valor,'.',',');
    		return valor;
    }
    
    function calcValorTotalDigitacao() {
    	var elementValorAtualTop = document.getElementById('valor_total_top');
    	var elementValorAtualBot = document.getElementById('valor_total_bot');
    	var length = 20;
    	var valorTotal = 0;
    	
    	for (var i = 0; i < length; i++ ) {
    		var valor = document.getElementById('valorPedido'+i).value;
    		if (valor != '') {
    			valor = valor.replace(/,/g,".");
    			valor = parseFloat(valor);
    			valorTotal = parseFloat(valorTotal);
    			valorTotal = valorTotal + valor;
    		}
    	}
    	valorTotal = formatarSaidaValorTotal(valorTotal.toFixed(2));
    	
    	elementValorAtualTop.innerHTML = valorTotal;
    	elementValorAtualBot.innerHTML = valorTotal;
    } 
    
	function ordenarLista( obj, url )
	{
		var formulario = document.getElementById("formPaginacao");
		var objId = obj.getAttribute("id");
		
		if ( formulario != null ){
		
			if ( formulario.endereco != null )
				formulario.endereco.value = (url != null) ? url : "";
			
			if ( formulario.incluir != null )
				formulario.incluir.value = "nao";
			
			if ( formulario.opcao != null )
				if ( formulario.opcao.value != 'detalhar' )
					formulario.opcao.value = "alterar";			
			
			if ( formulario.campoOrdenacao != null ) {
				if ( objId == "linkTituloNome"  ){
					formulario.campoOrdenacao.value = "nome";
				}else if ( objId == "linkTituloMatricula" ){
					formulario.campoOrdenacao.value = "matricula";
				}
			}
			if ( formulario.ordemOrdenacao != null ) {
				if ( formulario.ordemOrdenacao.value == "desc"  ){
					formulario.ordemOrdenacao.value = "asc";
				}else {
					formulario.ordemOrdenacao.value = "desc";
				}
			}
			formulario.submit();
		}
		return false;
	}    
	
	function fowardOrderList( obj, newId ) {
		if ( obj && newId ){
			var element = obj.parentNode.getElementsByTagName("a")[0];

			if( element ){
				element.setAttribute('id', new String(newId));
				return alteraPagina( element.getAttribute("id") );
			}
		}
	}
	
	function setaIconeOrdenacao(){
		var elementNome = document.getElementById("linkTituloNome");
		var elementMatricula = document.getElementById("linkTituloMatricula");
		var formulario = document.getElementById("formPaginacao");
		var myClassNameElementName = 'sortable order1';
		var myClassNameElementMatricula = 'sortable';
		
		
		if ( formulario.campoOrdenacao.value == "nome"){
			if ( formulario.ordemOrdenacao.value == "desc" ){
				myClassNameElementName = 'sortable order2';
				myClassNameElementMatricula = 'sortable';
			}
		} else if ( formulario.campoOrdenacao.value == "matricula"){
			if ( formulario.ordemOrdenacao.value == "asc" ){
				myClassNameElementMatricula = 'sortable order1';
				myClassNameElementName = 'sortable';
			}
			if ( formulario.ordemOrdenacao.value == "desc" ){
				myClassNameElementMatricula = 'sortable order2';
				myClassNameElementName = 'sortable';
			}
		}
		
		elementNome.parentNode.className = myClassNameElementName;
		elementMatricula.parentNode.className = myClassNameElementMatricula;
	}
	