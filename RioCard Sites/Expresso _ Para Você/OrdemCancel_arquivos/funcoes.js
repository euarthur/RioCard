function soNumber(obj){
	var keypress = window.event.keyCode;
	if (!(keypress > 47 && keypress < 58)){
		alert('Esse campo s� pode conter n�meros');
		return false;
	} else {
		return true;
	}
}
//************************************************************************
function formatValor(obj, e)
{
	if (navigator.userAgent.indexOf("IE") != -1)
	{
		var keypress = window.event.keyCode;
		if (!((keypress > 47 && keypress < 58) ||  
			((keypress == 46 || keypress == 44) && 
			obj.value.indexOf(",") == -1 && obj.value.indexOf(".") == -1)))
			event.returnValue = false;
	}
	else
	{
		if ((isNaN(String.fromCharCode(e.which)) ||  String.fromCharCode(e.which) != "." || String.fromCharCode(e.which) != ",") && e.which != 8 && e.which != 0)
			return false;
		return true;
	}
}
//************************************************************************
function formatDateTime(obj, e)
{
	if (navigator.userAgent.indexOf("IE") != -1)
	{
		var keypress = window.event.keyCode;
		if (keypress > 47 && keypress < 58 && obj.value.length < 16)
			{
			if (obj.value.length == 2) 
			   obj.value = obj.value + "/";
			if (obj.value.length == 5) 
			   obj.value = obj.value + "/";
			if (obj.value.length == 10) 
			   obj.value = obj.value + " ";
			if (obj.value.length == 13) 
			   obj.value = obj.value + ":";
			}
		else 
			event.returnValue = false;
	}
	else
	{
		if (obj.value.length == 10 && e.which != 8 && e.which != 0)
			
			return false;
		if (isNaN(String.fromCharCode(e.which)) && e.which != 8 && e.which != 0)
			return false;
		return true;
	}
}
//************************************************************************
function formatDate(obj, e)
{
	if (navigator.userAgent.indexOf("IE") != -1)
	{
		var keypress = window.event.keyCode;
		if (keypress > 47 && keypress < 58 && obj.value.length < 10)
		{
			if (obj.value.length == 2) 
			   obj.value = obj.value + "/";
			if (obj.value.length == 5) 
			   obj.value = obj.value + "/";
		}
		else 
			event.returnValue = false;
	}
	else
	{
		if (obj.value.length == 10 && e.which != 8 && e.which != 0)
			
			return false;
		if (isNaN(String.fromCharCode(e.which)) && e.which != 8 && e.which != 0)
			return false;
		return true;
	}
}
//************************************************************************
function  isValidDate(date)
{
	var dia, mes, ano;
   	var isBissexto = false;
	
	var r = /^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/ 
	
			
	if(! r.test(date))
		return false;
	
	var strDate = new String(date)
	
	var data = strDate.split('/');
			
	if (data.length != 3)
		return false;
			
	dia = data[0];
	mes = data[1];
	ano = data[2];

	if ((ano < 1950) || (ano > 2050))
		return false;

	if (((ano % 4) == 0) && (((ano % 100) != 0) || ((ano % 400) == 0)))
		isBissexto = true;

	if ((mes < 1) ||(mes > 12))
		return false;

	if(dia < 1)
		return false;

	var meses = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	if (isBissexto)
		meses[1] = 29;

	if (dia > meses[mes - 1])
		return false;

	return true;  
}
//************************************************************************
function isValidTime (tempo)
{
	var hora = tempo.split(":")[0];
	var minuto = tempo.split(":")[1];
	
	if (hora < 0 || hora > 24)
		return false;
	if (minuto < 0 || minuto > 59)
		return false;
	return true;
}



//*********************AUTO TAB************************************

<!-- Begin
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
function autoTab(input,len, e) {
var keyCode = (isNN) ? e.which : e.keyCode; 
var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
if(input.value.length >= len && !containsElement(filter,keyCode)) {
	input.value = input.value.slice(0, len);
	input.form[(getIndex(input)+1) % input.form.length].focus();
}
function containsElement(arr, ele) {
var found = false, index = 0;
while(!found && index < arr.length)
	if(arr[index] == ele)
		found = true;
	else
		index++;
		return found;
}
function getIndex(input) {
var index = -1, i = 0, found = false;
while (i < input.form.length && index == -1)
	if (input.form[i] == input)index = i;
	else i++;
		return index;
	}
		return true;
}
//  End -->

//**************************************************************
function Mascara (formato, keypress, objeto){
campo = eval (objeto);

// CEP
if (formato=='CEP'){
	separador = '-'; 
	conjunto1 = 5;
	if (campo.value.length == conjunto1){
		campo.value = campo.value + separador;
}

if ( (event.keyCode >= 48) && (event.keyCode <= 57)) {
	return true
	} else {
		if (event.keyCode != 8){
			event.keyCode = 0
			return false
		}
	}
}

// HORA
if (formato=='HORA'){
separador = ':'; 
conjunto1 = 2;
	if (campo.value.length == conjunto1){
		campo.value = campo.value + separador;
	}

	if ( (event.keyCode >= 48) && (event.keyCode <= 57)) {
		return true
	} else {
		if (event.keyCode != 8){
			event.keyCode = 0
			return false
		}
	}
}

// DATA
if (formato=='DATA'){
separador = '/'; 
conjunto1 = 2;
conjunto2 = 5;
	if (campo.value.length == conjunto1){
		campo.value = campo.value + separador;
	}
	if (campo.value.length == conjunto2){
		campo.value = campo.value + separador;
	}

	if ( (event.keyCode >= 48) && (event.keyCode <= 57)) {
		return true
	} else {
		if (event.keyCode != 8){
			event.keyCode = 0
			return false
		}
	}
}

// TELEFONE
if (formato=='TELEFONE'){
separador = '-'; 
conjunto1 = 4;
	if (campo.value.length == conjunto1){
		campo.value = campo.value + separador;
	}

	if ( (event.keyCode >= 48) && (event.keyCode <= 57)) {
		return true
	} else {
		if (event.keyCode != 8){
			event.keyCode = 0
			return false
		}
	}
}
}

//**************************************************************

// onkeypress="Data();"
function Data()//S� aceita numero, enter e barra
{
	var tecla = event.keyCode;
	if (tecla > 47 && tecla < 58) // numeros de 0 a 9
		return true;
	else {
	if (tecla != 13 && tecla != "47") // Enter e barra
		event.keyCode = 0;
    else
		return true;
	}
}
//**************************************************************
<!-- Mensagem deslizante na barra de status -->
function scrollit(seed)
{
   var m1  =  "Sistema de Colaborador - Help OnLine";
   var msg=m1;
   var out = " ";
   var c = 0;

   if (seed > 100)
     {
     seed--;
     var cmd="scrollit(" + seed + ")";
     timerTwo=window.setTimeout(cmd,7);
     }
   else
     if (seed <= 100 && seed > 0)
       {
       for (c=0 ; c < seed ; c++)
         {
         out+=" ";
         }
       out+=msg;
       seed--;
       var cmd="scrollit(" + seed + ")";
       window.status=out;
       timerTwo=window.setTimeout(cmd,7);
       }
     else if (seed <= 0)
       {
       if (-seed < msg.length)
         {
         out+=msg.substring(-seed,msg.length);
         seed--;
         var cmd="scrollit(" + seed + ")";
         window.status=out;
         timerTwo=window.setTimeout(cmd,7);
         }
       else
         {
         window.status=" ";
         timerTwo=window.setTimeout("scrollit(100)",75);
         }
       }
}
//**************************************************************
function help_online(pagina,campo){
	var msg = ''
	//AbrirJanelaModal("help.asp?pagina=" + pagina + "&campo=" + campo + "#" + campo)
	window.open("help.asp?pagina=" + pagina + "&campo=" + campo + "#" + campo,null, "height=300,width=500,channelmode=no,status=yes,toolbar=no,menubar=no,location=no ,scrollbars=yes");
}

function Abrir_Tela(){
	var msg = ''
	AbrirJanelaModal("capturar_data.asp")
	//window.open("capturar_data.asp",null, "height=170,width=300,channelmode=no,status=yes,toolbar=no,menubar=no,location=no ,scrollbars=yes");
}

function AbrirJanelaModal(pagina){
   var sFeatures="dialogHeight:140px,dialogWidht:140px,center:yes,resizable:no,scroll:no";
   window.showModalDialog(pagina, "",sFeatures);
   
}

//**************************************************************
function Valor(e)//S� aceita numero e virgulas
			{
				if (document.all) // Internet Explorer
					var tecla = event.keyCode;
				else if(document.layers) // Nestcape
					var tecla = e.which;
					if (tecla > 47 && tecla < 58) // numeros de 0 a 9
						return true;
					else
						{
							if (tecla != 8 && tecla != 44 && tecla != 13) // backspace e Virgula e Enter
								event.keyCode = 0;
								//return false;
							else
								return true;
						}
}

//**************************************************************

// onkeypress="SomenteNumero();"
function SomenteNumeros(){
if ( (event.keyCode >= 48) && (event.keyCode <= 57)) {
	return true
} else {
	if (event.keyCode != 8){
		event.keyCode = 0
		return false
	}
	}
}


//*************************************************************

// onkeypress="Numero();"
function Numero()//S� aceita numero
			{
				if (document.all) // Internet Explorer
					var tecla = event.keyCode;
				else if(document.layers) // Nestcape
					var tecla = e.which;
					if (tecla > 47 && tecla < 58) // numeros de 0 a 9
						return true;
					else
						{
							if (tecla != 8 && tecla != 13) // backspace e Enter
								{//event.keyCode = 0;
								event.keyCode = null;
								}	
								//return false;
							else
								return true;
						}
}

//************************************************************************
// onkeypress="return MaxLength(this.form, this.name,255);"
function MaxLength(form, nome, num) {
	if (form[nome].value.length >= num) {
		event.keyCode = 0;
	}
}
//************************************************************************
// onkeyup="BotaBarra(this.form);"
function BotaBarra(form) {
//	if (form.emissao.value.length == 2 || form.emissao.value.length == 5) 
//		form.emissao.value = form.emissao.value + "/";
}
//************************************************************************
// onblur="ValidaData(this.form, this.name);"
function ValidaData(form, nome)
{
	strinput = form[nome].value;
	if (!CriticaData(strinput)) {
		alert("Data Inv�lida! Preencha uma data v�lida no formato: dd/mm/aaaa");
		form[nome].focus();
	    return false;
	}
		
  if (form[nome].value.length < 10) {
     alert("Por favor preencha a data no formato: dd/mm/aaaa");
	 form[nome].focus();
     return false;
  }
		
  return true;
}
//************************DATA***************************************
// onkeypress="Data();"
function Data()//S� aceita numero, enter e barra
{
	var tecla = event.keyCode;
	if (tecla > 47 && tecla < 58) // numeros de 0 a 9
		return true;
	else {
	if (tecla != 13 && tecla != "47") // Enter e barra
		event.keyCode = 0;
    else
		return true;
	}
}
//**********************VOLTAR*********************************************
// onclick="Voltar('../cadastro.jsp');"
function Voltar(url) {
	form = document.forms[0];
	form.action=url;
	form.submit();
}

//***********************CRITICA DATA****************************************
function CriticaData(strinput)	
{
	
	var barra1;
	var barra2;
	var parte1;
	var parte2;
	var partedia;
	var partemes;
	var parteano;
	var retorno;
	var restobisexto;
	var arrayultimodia;
	var datagerada;
	parte1=strinput.substr(0,3);
	barra1 = parte1.search("/");
	
	
	if (barra1 > 0 )
	{
			if (barra1 == 1) 
			{	
				partedia = "0" + parte1.substr(0,barra1);
			}
			else
			{
				partedia =  parte1.substr(0,barra1);
			}
			parte2=strinput.substr(barra1 + 1,3);
			barra2 = parte2.search("/");
			if (barra2 > 0)
			{
				
				if (barra2 == 1) 
				{	
					partemes = "0" + parte2.substr(0,barra2);
				}
				else
				{
					partemes =  parte2.substr(0,barra2);
				}
				parteano = strinput.substr(1 + barra1 + barra2 + 1);
				
				if (parteano.length == 2)
				{
					
					if (parseInt(parteano) > 50)
					{
						parteano = 19 + parteano;
					}
					else
					{
						parteano = 20 + parteano;
					}
					restobisexto = parteano % 4;
					if (restobisexto != 0)
					{
						arrayultimodia = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
					}
					else
					{
						arrayultimodia = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
					}
					if (partemes > 0) 
					{
						if (partemes <= 12)
						{
							if (partedia > 0)
							{
								if (partedia <= arrayultimodia[partemes-1])
								{
									datagerada = new Date(parseInt(parteano),parseInt(partemes), parseInt(partedia));
									if (datagerada)
									{
										retorno = true;
									}
								}
								else
								{
									retorno = false;
								}
							}
							else
							{
								retorno = false;
							}
						}
						else
						{
							retorno = false;
						}
					}
					else
					{
						retorno = false;
					}
							
				}
				else
				{
					if (parteano.length == 4)
					{	
						restobisexto = parteano % 4;
						if (restobisexto != 0)
						{
							arrayultimodia = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
						}
						else
						{
							arrayultimodia = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
						}
						if (partemes > 0) 
						{
							if (partemes <= 12)
							{
								if (partedia > 0)
								{
									if (partedia <= arrayultimodia[partemes-1])
									{
										datagerada = new Date(parseInt(parteano),parseInt(partemes), parseInt(partedia));
										if (datagerada)
										{
											retorno = true;
										}										
									}
									else
									{
										retorno = false;
									}
								}
								else
								{
									retorno = false;
								}
							}
							else
							{
								retorno = false;
							}
						}
						else
						{
							retorno = false;
						}
					}
					else 
					{
						// ano com tamanho diferente de 2 e 4
							retorno = false;
					}
				}
			}			
			else
			{
				// nao achou a segunda barra ou est� na terceira posicao
				retorno = false;
			}
	}
	else
	{
		// nao achou a primeira barra ou est� na primeira posicao
		retorno = false;
	}
	return retorno;
}

//**************************************************************
// Aqui inicia as fun��es de teste do CPF

function modulo(str) {
   
 soma=0;
    ind=2;
   
 for(pos=str.length-1;pos>-1;pos=pos-1) {
   
  soma = soma + (parseInt(str.charAt(pos)) * ind);
   
  ind++;
     if(str.length>11) 
{
      if(ind>9) ind=2;
   
  }
 }
    resto = soma - (Math.floor(soma / 11) * 11);
    if(resto < 2) {
    
 return 0
    }
    else 
{
     return 11 - resto
   
 }
}

function VerificaCPF(valor) 
{
 primeiro=valor.substr(1,1);
 falso=true;
 size=valor.length;
 if 
(size!=11){
  return 
false;
 }
 size--;
 for (i=2; i<size-1; 
++i){
  proximo=(valor.substr(i,1));
  if 
(primeiro!=proximo) 
{
   falso=false
  }
 }
 if 
(falso){
  return false;
 }
   
 if(modulo(valor.substring(0,valor.length - 2)) + "" + modulo(valor.substring(0,valor.length - 1)) != valor.substring(valor.length - 2,valor.length)) {
     return false;
 }
    return true
}

// Aqui finaliza as fun��es de teste do CPF

//**************************************************************

// Aqui inicia as fun��es de teste do CNPJ

function isNUMB(c)
	{
	if((cx=c.indexOf(","))!=-1)
		{		
		c = c.substring(0,cx)+"."+c.substring(cx+1);
		}
	if((parseFloat(c) / c != 1))
		{
		if(parseFloat(c) * c == 0)
			{
			return(1);
			}
		else
			{
			return(0);
			}
		}
	else
		{
		return(1);
		}
	}

function LIMP(c)
	{
	while((cx=c.indexOf("-"))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf("/"))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf(","))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf("."))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf("("))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf(")"))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	while((cx=c.indexOf(" "))!=-1)
		{		
		c = c.substring(0,cx)+c.substring(cx+1);
		}
	return(c);
	}

function VerifyCNPJ(CNPJ)
	{
	CNPJ = LIMP(CNPJ);
	if(isNUMB(CNPJ) != 1)
		{
		return(0);
		}
	else
		{
		if(CNPJ == 0)
			{
			return(0);
			}
		else
			{
			g=CNPJ.length-2;
			if(RealTestaCNPJ(CNPJ,g) == 1)
				{
				g=CNPJ.length-1;
				if(RealTestaCNPJ(CNPJ,g) == 1)
					{	
					return(1);
					}
				else
					{
					return(0);
					}
				}
			else
				{
				return(0);
				}
			}
		}
	}
function RealTestaCNPJ(CNPJ,g)
	{
	var VerCNPJ=0;
	var ind=2;
	var tam;
	for(f=g;f>0;f--)
		{
		VerCNPJ+=parseInt(CNPJ.charAt(f-1))*ind;
		if(ind>8)
			{
			ind=2;
			}
		else
			{
			ind++;
			}
		}
		VerCNPJ%=11;
		if(VerCNPJ==0 || VerCNPJ==1)
			{
			VerCNPJ=0;
			}
		else
			{
			VerCNPJ=11-VerCNPJ;
			}
	if(VerCNPJ!=parseInt(CNPJ.charAt(g)))
		{
		return(0);
		}
	else
		{
		return(1);
		}
	}
// Aqui Finaliza as Funcoes de CNPJ 


//*******************CALENDARIO DATEPICKER********************************

/*
<APPLET WIDTH="22" HEIGHT="20" CODEBASE="/funcoes" CODE="CalendarWidget.class" ALT="DatePicker" MAYSCRIPT ARCHIVE="DatePicker.jar">
	<PARAM NAME="field" VALUE="nome_do_campo_data">
	<PARAM NAME="datemask" VALUE="">
	<PARAM NAME="title" VALUE="Data Inicial">
</APPLET>
*/


function jsDatePicker(szField, szDate, szAction){ 
	var form = document.forms[0];
	var field = form.elements[szField];
	if(szAction == "1"){
		field.value=szDate;
	}
	return field.value;
}

//****************REDIRECIONAR P�GINA***************************

/*Entre as tags <head>..</head> insira o seguinte comando:
onde: segundos, se refere ao tempo em segundos que voc� 
deseja que a outra p�gina seja chamada. Ex.: 3 segundos 
*/

//<META HTTP-EQUIV="Refresh" CONTENT="segundos ; URL= pagina.html">


//*****IMPRIMINDO PARTES ESPEC�FICAS DE UMA P�GINA**************


function Imprime(text)
{
if (window.print) {
 winId = window.open('','newwin','width=800,height=600,resizable');
 with (winId.document) 
  {
   write('<body text=red onLoad="window.focus();window.print()"><pre>'+text+'</pre><\/body>');
   close();
  }
}
}

//Cria um div onde vc quer imprimir, Segue o exemplo abaixo
/*
<div id=testa>
	<table>
	  <tr><td>teste1</td></tr>   
	  <tr><td>teste2</td></tr>
	  <tr><td>teste3</td></tr>
	</table>
</div>
<input type=button value="Imprimir" onclick="Imprime(testa.innerHTML)">
*/

//*******************VALIDA(objeto)**********************************20/05/2005
function valida(objeto)
{
  if(objeto.value != '' )
  {
	var sValoresOK = '0123456789.,';	
	var sValor = objeto.value;
	for (i=0; i < sValor.length;i++) {
		if (sValoresOK.indexOf(sValor.substr(i,1)) == -1)
		{
		//	alert('Valor deve ser preenchido apenas com n�meros.');
			return false;
		}
	} 
  }
}
//****************************************************************************
function Trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}

function showHideTermoUso(opcao) {
	var cboProduto = document.getElementById('cboProduto');
	if (cboProduto) {
		opcao = cboProduto.value;
	}

	document.getElementById('idTermoUso').style.display = parseInt(opcao) === 3 ? 'table-row' : 'none';
}

//Funcao para enviar os dados do form de alterar ususario
function submeteFormularioLinkNome(cdUusarioCartao, nrChipCartaoSC, np, rp, nrCartaoSC, pequenoComprador){

    var form = document.createElement("form");
    form.setAttribute("id", "linkNomeUsuario");
    form.setAttribute("method", "post");
    form.setAttribute("action", "UsuarioManutencao");

    var hiddenField1 = document.createElement("input");
    hiddenField1.setAttribute("type", "hidden");
    hiddenField1.setAttribute("name", "action");
    hiddenField1.setAttribute("value", "dadosUsuCartao");

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("type", "hidden");
    hiddenField2.setAttribute("name", "cdCcUsuar");
    hiddenField2.setAttribute("value", cdUusarioCartao);

    var hiddenField3 = document.createElement("input");
    hiddenField3.setAttribute("type", "hidden");
    hiddenField3.setAttribute("name", "nrChipCartaoSc");
    hiddenField3.setAttribute("value", nrChipCartaoSC);

    var hiddenField4 = document.createElement("input");
    hiddenField4.setAttribute("type", "hidden");
    hiddenField4.setAttribute("name", "np");
    hiddenField4.setAttribute("value", np);

    var hiddenField5 = document.createElement("input");
    hiddenField5.setAttribute("type", "hidden");
    hiddenField5.setAttribute("name", "rp");
    hiddenField5.setAttribute("value", rp);

    var hiddenField6 = document.createElement("input");
    hiddenField5.setAttribute("type", "hidden");
    hiddenField5.setAttribute("name", "nrCartaoSc");
    hiddenField5.setAttribute("value", nrCartaoSC);

    var hiddenField7 = document.createElement("input");
    hiddenField6.setAttribute("type", "hidden");
    hiddenField6.setAttribute("name", "isPequenoComprador");
    hiddenField6.setAttribute("value", pequenoComprador);

    form.appendChild(hiddenField1);
    form.appendChild(hiddenField2);
    form.appendChild(hiddenField3);
    form.appendChild(hiddenField4);
    form.appendChild(hiddenField5);
    form.appendChild(hiddenField6);
    form.appendChild(hiddenField7);

    document.body.appendChild(form);
    form.submit();
    }

//Funcao para enviar os dados do form de alterar ususario
function submeteFormularioLinkCartao(nrChipCartaoSC, np, rp, reference){

    var form = document.createElement("form");
    form.setAttribute("id", "linkUsuarioCartao");
    form.setAttribute("method", "post");
    form.setAttribute("action", reference+"/comprador/Cartao");

    var hiddenField1 = document.createElement("input");
    hiddenField1.setAttribute("type", "hidden");
    hiddenField1.setAttribute("name", "action");
    hiddenField1.setAttribute("value", "detalhe");

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("type", "hidden");
    hiddenField2.setAttribute("name", "nrChip");
    hiddenField2.setAttribute("value", nrChipCartaoSC);

    var hiddenField3 = document.createElement("input");
    hiddenField3.setAttribute("type", "hidden");
    hiddenField3.setAttribute("name", "np");
    hiddenField3.setAttribute("value", np);

    var hiddenField4 = document.createElement("input");
    hiddenField4.setAttribute("type", "hidden");
    hiddenField4.setAttribute("name", "rp");
    hiddenField4.setAttribute("value", rp);

    var hiddenField5 = document.createElement("input");
    hiddenField5.setAttribute("type", "hidden");
    hiddenField5.setAttribute("name", "reference");
    hiddenField5.setAttribute("value", reference+"/comprador/usuario/UsuarioManutencao?action=manutencao");

    form.appendChild(hiddenField1);
    form.appendChild(hiddenField2);
    form.appendChild(hiddenField3);
    form.appendChild(hiddenField4);
    form.appendChild(hiddenField5);

    document.body.appendChild(form);
    form.submit();
    }
