// JavaScript Document

// funcao que troca os [arroba] por @
function fixArrobaEmail() {
	tempHTML = document.getElementById('emailContainer').innerHTML;
	tempHTML = tempHTML.replace('[arroba]','@');
	tempHTML = tempHTML.replace('[arroba]','@'); 
	//tempHTML = tempHTML.replace('%5Barroba%5D','@');
	document.getElementById('emailContainer').innerHTML = tempHTML;
	
	if (document.all) { // verifica se e' IE
		tempText = document.getElementById('emailContainer').getElementsByTagName('a')[0].innerText;
		tempText = tempText.replace('[arroba]','@');
		document.getElementById('emailContainer').getElementsByTagName('a')[0].innerText = tempText;
	}
}
 
function showDetalhes(qualDetalhe) {
	document.getElementById('showDetalhes' + qualDetalhe).style.display = 'none';
	document.getElementById('hideDetalhes' + qualDetalhe).style.display = 'block';
	document.getElementById('detalhes'     + qualDetalhe).style.display = 'block';
}

function showLinhas(qualLinha) {
	document.getElementById('linhas' + qualLinha).style.display = 'block';
}

function hideDetalhes(qualDetalhe) {
	document.getElementById('showDetalhes' + qualDetalhe).style.display = 'block';
	document.getElementById('hideDetalhes' + qualDetalhe).style.display = 'none';
	document.getElementById('detalhes'     + qualDetalhe).style.display = 'none';
	document.getElementById('linhas' + qualDetalhe).style.display = 'none';
}


function abre_areaComprador() {
		document.getElementById('area_comprador').className = 'ac_aberta';
		document.getElementById('login_input').value="";
}

function hasEmail(comEmail) {  // variavel boolean true ou false
	if (comEmail) {
		document.getElementById('com_email').style.display = 'block';
		document.getElementById('sem_email').style.display = 'none';
	} else {
		document.getElementById('com_email').style.display = 'none';
		document.getElementById('sem_email').style.display = 'block';
	}
}

function showCadastro(pessoa) {
	
	if (document.all) {  // para o IE
		if (pessoa == 'juridica') {
			document.getElementById('cnpj').style.display = 'block';
			document.getElementById('cpf').style.display = 'none';
			document.getElementById('nome').style.display = 'none';
			document.getElementById('inscMunicipal').style.display = 'block';
			document.getElementById('pessoaContato').style.display = 'block';
			document.getElementById('funcionarios').style.display = 'block';
			document.getElementById('ativdPrinc').style.display = 'block';
			document.getElementById('nrDocComprdCnpj').focus();
		} else if (pessoa == 'fisica') {
			document.getElementById('cnpj').style.display = 'none';
			document.getElementById('cpf').style.display = 'block';
			document.getElementById('nome').style.display = 'none';
			document.getElementById('inscMunicipal').style.display = 'none';
			document.getElementById('pessoaContato').style.display = 'none';
			document.getElementById('funcionarios').style.display = 'none';
			document.getElementById('ativdPrinc').style.display = 'none';
			document.getElementById('nrDocComprdCpf').focus();
		}
	} else { // para o Firefox
		if (pessoa == 'juridica') {
			document.getElementById('cnpj').style.display = 'block';
			document.getElementById('cpf').style.display = 'none';
			document.getElementById('nome').style.display = 'none';
			document.getElementById('inscMunicipal').style.display = 'table-row';
			document.getElementById('pessoaContato').style.display = 'table-row';
			document.getElementById('funcionarios').style.display = 'table-row';
			document.getElementById('ativdPrinc').style.display = 'table-row';
		} else if (pessoa == 'fisica') {
			document.getElementById('cnpj').style.display = 'none';
			document.getElementById('cpf').style.display = 'block';
			document.getElementById('nome').style.display = 'none';
			document.getElementById('inscMunicipal').style.display = 'none';
			document.getElementById('pessoaContato').style.display = 'none';
			document.getElementById('funcionarios').style.display = 'none';
			document.getElementById('ativdPrinc').style.display = 'none';
		}
	}
}

function showCadastroNomeMenor(anoNascto) {
	var dtNasctoDia = document.getElementById("dtNasctoDia");
	var dtNasctoMes = document.getElementById("dtNasctoMes");
	var isMaior18 = Is18(dtNasctoDia.value + '/' + dtNasctoMes.value + '/' + anoNascto.value);

	if(isMaior18) {
		if (document.all) {  // para o IE
			document.getElementById('nome').style.display = 'none';
		} else { // para o Firefox
			document.getElementById('nome').style.display = 'none';
		}
	}else{
		if (document.all) {  // para o IE
			document.getElementById('nome').style.display = 'block';
		} else { // para o Firefox
			document.getElementById('nome').style.display = 'table-row';
		}
	}
}

function getIdade(data) {
	var hoje = new Date();

	var nascimento = new Date(convertDateMMDDYYY(data.split("/")));

	//Retorna a diferença entre hoje e a data de nascimento em anos.
	var ano = hoje.getFullYear() - nascimento.getFullYear();

	//Retorna a diferença de mês do mês de nascimento para o atual.
	var m = hoje.getMonth() - nascimento.getMonth();

	//Caso ainda não tenha ultrapassado o dia e o mês
	if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
		ano--;
	}
	return ano;
}

function convertDateMMDDYYY(datearray) {
	return datearray[1] + '-' + datearray[0] + '-' + datearray[2];
}

function Is18(data) {
	if(getIdade(data) >= 18)
		return true;
	else
		return false;
}

function showResposta(qualResposta) {
	document.getElementById('resposta' + qualResposta).style.display = 'block';
}

function hideResposta(qualResposta) {
	document.getElementById('resposta' + qualResposta).style.display = 'none';
}


function showTodasRespostas() {
	
	divs = document.getElementsByTagName('div');
	respostas = new Array();
	for (i = 0; i <= divs.length - 1; i++) {
		if (divs[i].className == 'resposta') {
			respostas.push(divs[i]);
		}
	}
	
	for (i = 0; i <= respostas.length - 1; i++) {
		respostas[i].style.display = 'block';
	}
}


function hideTodasRespostas() {
	
	divs = document.getElementsByTagName('div');
	respostas = new Array();
	for (i = 0; i <= divs.length - 1; i++) {
		if (divs[i].className == 'resposta') {
			respostas.push(divs[i]);
		}
	}
	
	for (i = 0; i <= respostas.length - 1; i++) {
		respostas[i].style.display = 'none';
	}
}



function activateTab(qualTab) {
	qualTab = qualTab + 'Tab';
	Tabs = document.getElementsByTagName('li');
	for (i = 0; i <= Tabs.length - 1; i++) {
		if (Tabs[i].className == 'bgaba_ativo') {
			Tabs[i].className = 'bgaba';
			tempInnerHTML = Tabs[i].innerHTML;
			Tabs[i].innerHTML = tempInnerHTML.replace('dir_aba2','dir_aba');
		}
	}
	document.getElementById(qualTab).className = 'bgaba_ativo';
	tempInnerHTML = document.getElementById(qualTab).innerHTML;
	document.getElementById(qualTab).innerHTML = tempInnerHTML.replace('dir_aba','dir_aba2');
}

/*function activateTabPontosVenda(qualTab) {
	document.getElementById('expressoActive').style.display = 'none';
	document.getElementById('vtActive').style.display = 'none';
	document.getElementById('expresso_vtActive').style.display = 'none';
	qualTab = qualTab + 'Active';
	document.getElementById(qualTab).style.display = 'block';
}*/

function showResultadoConsultaRecarga() {
	document.getElementById('userData').style.display = 'block';
}

function showRecargaTransporte() {
	document.getElementById('transporteContent').style.display = 'block';
	document.getElementById('postosContent').style.display = 'none';
}

function showRecargaPostos() {
	document.getElementById('transporteContent').style.display = 'none';
	document.getElementById('postosContent').style.display = 'block';
}

function verificarCEP() {
	inputsEndereco = document.formEndereco.getElementsByTagName('input');
	for (i = 0; i <= inputsEndereco.length - 1; i++) {
		inputsEndereco[i].disabled = false;
	}
	document.formEndereco.selectLogradouro.disabled = false;
	return false;
}

function submitForm( formId ) {
    if(formId != ""){
        var form = document.getElementById(formId);
        if (form != null) form.submit();
    }
}

//JavaScript Document

function insertFlash(movie, width, height, transparent, flashvars, howScale, id) {
    document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '" id="' + id + '">');
    document.write('  <param name="movie" value="' + movie + '" />');
    document.write('  <param name="quality" value="high" />');

if (howScale = 'noscale') {
	document.write('<param name="SCALE" value="noscale">');
}

if (transparent) {
	document.write('  <param name="wmode" value="transparent" />');
}

if (flashvars) {
    document.write('  <param name="FlashVars" value="' + flashvars + '" />');
}
    document.write('  <embed src="' + movie + '" width="' + width + '" height="' + height + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"');

if (transparent) {
	document.write('wmode="transparent"');
}

if (flashvars) {
	document.write('flashvars="' + flashvars + '"');
}

if (howScale = 'noscale') {
	document.write('scale="noscale"');
}

	document.write('name="' + id + '"');
	document.write('swLiveConnect="true"');
	document.write('</embed>');
    document.write('</object>');
}

//JavaScript Document

strChamadas = 'Fetranspor lança cartão Riocard Mais Expresso em grande evento com presenças ilustres|Texto de exemplo de outra chamada de notícia|Terceira chamada de notícia do Vale-Transporte|Quarta chamada de notícia do Vale-Transporte|Quinta chamada de notícia do Vale-Transporte';

strFotos = '01|02|03|04|05';

strLinks = 'http://www.terra.com.br|http://www.uol.com.br|http://www.oglobo.com.br|http://www.ig.com.br|http://www.cnn.com';

strTargets = '_self|_blank|_self|_blank|_self';

path = '../resources/chamada_home/';

chamadasFlashVars = 'strChamadas=' + strChamadas + '&' + 'strFotos=' + str