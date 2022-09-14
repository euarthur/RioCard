// JavaScript Document

function pesquisarUsuariosCartao() {
    document.getElementById('btPesquisar').style.display = 'none';
    document.getElementById('btPesquisarDisabled').style.display = 'block';
    document.getElementById('instrucaoPesquisar').style.display = 'none';
    document.getElementById('formPesquisaUsuarios').style.display = 'block';
}

function closePesquisaUsuariosCartao() {
    document.getElementById('btPesquisar').style.display = 'inline';
    document.getElementById('btPesquisarDisabled').style.display = 'none';
    document.getElementById('instrucaoPesquisar').style.display = 'inline';
    document.getElementById('formPesquisaUsuarios').style.display = 'none';
}

function retornarResultadoPesquisaUsuarios() {
	document.getElementById('listatabelaUsuarios').style.display = 'block';
	document.location = '#tabela_pesquisa';
}

function visualizarHistoricoCartao() {
	document.getElementById('btVisualizarHistorico').style.display = 'none';
	document.getElementById('btEsconderHistorico').style.display = 'inline';
	document.getElementById('conteudoHistorico').style.display = 'block';	
}

function esconderHistoricoCartao() {
	document.getElementById('btVisualizarHistorico').style.display = 'inline';
	document.getElementById('btEsconderHistorico').style.display = 'none';
	document.getElementById('conteudoHistorico').style.display = 'none';
}

function selectTipoFiltro(qualSelect,qualFiltro) {	
	if (qualFiltro == 0) {
		qualSelect.selectedIndex = 1;
		document.getElementById('filtroPedido').style.display = 'block';
		document.getElementById('filtroData').style.display = 'none';
	} else if (qualFiltro == 1) {
		qualSelect.selectedIndex = 0;
		document.getElementById('filtroPedido').style.display = 'none';
		document.getElementById('filtroData').style.display = 'block';
	}
}

function mostraBolsa(){
    document.getElementById('bolsa_credito').style.display = 'block';
}

function escolherFormaPgto(qualForma) {
    if (qualForma == 'boleto'){
        outraForma = 'formaQualquer'
    } else {
      outraForma = 'boleto';
    }
    document.getElementById(qualForma).className = 'nivel_01 box_selecionado';
    document.getElementById(outraForma).className = 'nivel_01_fechado';
}

function imprimirDetalhePedidoCancelamento() {
	window.open(document.URL + '?imprimir_sem_paginacao','impressao');
}

// Functions related to AJAX tables

 