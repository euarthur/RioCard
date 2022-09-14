function carregarRedesRecarga()
{
	var cidade = document.getElementById('cidade');
	var cdCid = cidade.options[cidade.selectedIndex].value;
	
	if ( cdCid > 0 ) {
		RioCardVT.selecionarRedeRecargaPorCidade(preencherComboRedeRecargas, cdCid);
	}else {
	   preencherComboRedeRecargas( null );
	}
}

function preencherComboRedeRecargas ( lista ) {
	var combo = document.getElementById( 'redeRecarga' );


	DWRUtil.removeAllOptions( 'redeRecarga' );
	
	combo[0] = new Option( "Selecione", -1 );
			
	for ( var i = 0; i < lista.length; i++ )
	{ 
		combo[ i + 1 ] = new Option( lista[ i ].dsRedeRecarg, lista[ i ].cdRedeRecarg );
	}
	
	combo.disabled = false;
	
	document.body.style.cursor = 'default';

}

function carregarCartao( nrCpf )
{
    if ( nrCpf != "" && nrCpf != 0) {
    	RioCardVT.selecionarCartaoIndividualExistente(preencherDadosCartao, nrCpf);
	}else {
		preencherDadosCartaoForCpfBlank();
	}
}

function carregarCartaoUsuarioAlteracao( nrCpf, cdCcUsuar )
{
    if ( nrCpf != "" && nrCpf != 0 && cdCcUsuar != "" && cdCcUsuar != 0) {
    	RioCardVT.selecionarCartaoIndividualExistenteUsuarioAlteracao(preencherDadosCartao, nrCpf, cdCcUsuar);
	}else {
		preencherDadosCartaoForCpfBlank();
	}
}

function preencherDadosCartaoForCpfBlank(){
	
	var nrCartaoExistente = document.getElementById("nrCartaoExistente");
	var stCartaoExistente = document.getElementById("stCartaoExistente");
	var msgCpfSemCartao = document.getElementById("msgCpfSemCartao");
	var tpCartaoPersonalizado = document.getElementById("tpCartaoPersonalizado");
	var tblCartaoPersonalizadoUsuarioExistente = document.getElementById("tblCartaoPersonalizadoUsuarioExistente");
	var idOpcoesCartao = document.getElementById("idOpcoesCartao");
	var imprCartao = document.getElementById("imprCartao");

	if ( tpCartaoPersonalizado ) {
		tpCartaoPersonalizado.disabled = true;
		tblCartaoPersonalizadoUsuarioExistente.style.display = 'none';
		idOpcoesCartao.style.display = 'block';
	}
	
	if ( nrCartaoExistente )
		nrCartaoExistente.innerHTML = "";
	
	if ( msgCpfSemCartao )
		msgCpfSemCartao.style.display = 'none';		
	
	if ( stCartaoExistente )
		stCartaoExistente.innerHTML = "";


	mostrarCheckHabilitarBilheteUnicoCarioca = false;
}


function preencherDadosCartao( bean )
{	
	var nrCartaoExistente = document.getElementById("nrCartaoExistente");
	var stCartaoExistente = document.getElementById("stCartaoExistente");
	var msgCpfSemCartao = document.getElementById("msgCpfSemCartao");
	var tpCartaoPersonalizado = document.getElementById("tpCartaoPersonalizado");
	var tblCartaoPersonalizadoUsuarioExistente = document.getElementById("tblCartaoPersonalizadoUsuarioExistente");
	var idOpcoesCartao = document.getElementById("idOpcoesCartao");

	if (bean != null && bean.cartaoScon.cdStCartao == 3) {
		 if ( tpCartaoPersonalizado ){
			tpCartaoPersonalizado.disabled = false;
			tblCartaoPersonalizadoUsuarioExistente.style.display = 'block';
			idOpcoesCartao.style.display = 'none';
		}
		if ( nrCartaoExistente )
			nrCartaoExistente.innerHTML = bean.cartaoScon.nrCartaoScFormatado;
		
		if ( msgCpfSemCartao )
			msgCpfSemCartao.style.display = 'none';
							
		if (bean.cartaoScon.dtCancelLogico != null) {
			if ( stCartaoExistente )
				stCartaoExistente.innerHTML = "Indispon&iacute;vel";
		}
		temBilheteUnicoHabilitado( document.getElementById("nrCpf").value );
	 }else {

		if ( tpCartaoPersonalizado ) {
			tpCartaoPersonalizado.disabled = true;
			tblCartaoPersonalizadoUsuarioExistente.style.display = 'none';
			idOpcoesCartao.style.display = 'block';
		}
		
		if ( nrCartaoExistente )
			nrCartaoExistente.innerHTML = "";
		
		if ( msgCpfSemCartao )
			msgCpfSemCartao.style.display = 'block';		
		
		if ( stCartaoExistente )
			stCartaoExistente.innerHTML = "";
		
		/*if(hash) 
			hash.style.display = 'none';*/
		
		mostrarCheckHabilitarBilheteUnicoCarioca = false;
		
	}
	
	
	
}

function temBilheteUnicoHabilitado( nrCpf )
{
    if ( nrCpf != "" && nrCpf != 0) {
    	RioCardVT.temBilheteUnicoHabilitado(preencherCheckBilheteUnicoCarioca, nrCpf);
	}else{
		mostrarCheckHabilitarBilheteUnicoCarioca = false;
	}
}

function preencherCheckBilheteUnicoCarioca(temBilheteUnicoHabilitado){
	var buSuspenso = document.getElementById("buSuspenso");
	if (temBilheteUnicoHabilitado){
		mostrarCheckHabilitarBilheteUnicoCarioca = false;
	}else{
		mostrarCheckHabilitarBilheteUnicoCarioca = true;
	}	
	
}

function validar( PComp )
{
	
	if ( !PComp ) return;
	
	var options = PComp.options;
	
	for ( i = 0; i < options.length; i++ )
	{
		
		
		if ( options[ i ].selected && options[ i ].value == 4 )
		{
			hide( 'campos', true );
			return;					
		}// fim if
	}// fim for
	hide( 'campos', false );
}

function habilitar( PComp, PBool )
{
	
	var comp = document.getElementById( PComp );

	if ( comp )
	{
		comp.disabled = PBool;

		if ( PBool )
		{
			comp.className="disabled";
			comp.selectedIndex = 0;
		}
		else
		{
			comp.className="";
		}
	}// fim if
	return;
}

function hide( PComp, PBool )
{
	
	var comp = document.getElementById( PComp );
	
	if ( comp )
	{
		
		
		if ( PBool )
		{
			
			comp.style.display = "block";
			//comp.style.visibility = "visible";
		}
		else
		{
			comp.style.display = "none";
			//comp.style.visibility = "hidden";
		}			
	}// fim if
	return;
}

function submitForm(formId, valor) {
	var form = document.getElementById(formId);
	
	if (form && valor){
		var elementInput = form.getElementsByTagName('input')[0];
		elementInput.value = valor;
		form.submit();
	}
}

function submitForm2(formId, valor1, valor2) {
	var form = document.getElementById(formId);
	
	if (form && valor1 && valor2)
	{
		var elementInput = form.getElementsByTagName('input')[0];
		elementInput.value = valor1;
		
		elementInput = form.getElementsByTagName('input')[1];
		elementInput.value = valor2;
		
		form.submit();
	}
}

function swapDisplay(elementId) {		
	if (document.getElementById(elementId).style.display == 'block'){
		hide(elementId, false);
	}else{
		hide(elementId, true);
	} 
}

function swapText(elementId, text1, text2) {
	var element = document.getElementById(elementId);
	if (element){
		(element.innerHTML == text1) ? element.innerHTML = text2 : element.innerHTML = text1;
	}
}

	
function submit(formId) {	
	var form = document.getElementById(formId);
	if(form){
		form.submit();
	}	
}
function displayField(){
	var tpCartaoNovo = document.getElementById("tpCartaoNovo");
	var tpCartaoExistente = document.getElementById("tpCartaoExistente");

	if ( tpCartaoNovo && tpCartaoNovo.checked == true )
		hide('imprCartao', true);
		

	if ( tpCartaoExistente && tpCartaoExistente.checked == true ){
		hide('escolhaImprCartao', false);
		hide('imprCartao', false);
		hide('comboCartoesExistentes', true);
	}
		
}

function showHabilitarBilheteUnicoCarioca(habilitar) {
	var buSuspenso = document.getElementById('buSuspenso') ? document.getElementById('buSuspenso').value : null;
	var boxCheckBoxHabilitarBilheteUnicoCarioca = document.getElementById('boxHabilitarBilheteUnicoCarioca');
	var checkBoxHabilitarBilheteUnicoCarioca = document.getElementById("habilitarBilheteUnicoCarioca");


	if (checkBoxHabilitarBilheteUnicoCarioca) {
		checkBoxHabilitarBilheteUnicoCarioca.checked = false;
	}

	if (boxCheckBoxHabilitarBilheteUnicoCarioca) {
		if (habilitar && !buSuspenso) {
			boxCheckBoxHabilitarBilheteUnicoCarioca.style.display = 'block';

		} else {
			boxCheckBoxHabilitarBilheteUnicoCarioca.style.display = 'none';
		}
	}
}
