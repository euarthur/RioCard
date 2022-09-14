// JavaScript Document


links = document.getElementsByTagName('a');
for (i = 0; i <= links.length - 1; i++) {

    if (links[i].addEventListener) {

        links[i].addEventListener('focus', function () {
                this.blur();
            }
            , true);
    }
    else if (links[i].attachEvent) {

        links[i].attachEvent('onfocus', function () {
                var undefined;

                if (undefined != links[i]) {
                    links[i].blur();
                }
            }
        );
    }
}

/*
 Removes the non-numerical characters of an input element

 component 	The component that has the value to be clean of non-numerical characters
 */
function removeNonNumberCharacters(component) {
    if (component != null && component.value != null) {
        var numericalText = '';
        for (var i = 0; i < component.value.length; i++)
            if (component.value.charAt(i) >= '0' && component.value.charAt(i) <= '9')
                numericalText += component.value.charAt(i);

        component.value = numericalText;
        return true;
    } else {
        return false;
    }
}

function removeNonNumberCharacters(component, valorCampo) {
    if (valorCampo === '3') {
        return true;
    } else if (component != null && component.value != null) {

        var numericalText = '';
        for (var i = 0; i < component.value.length; i++)
            if (component.value.charAt(i) >= '0' && component.value.charAt(i) <= '9')
                numericalText += component.value.charAt(i);

        component.value = numericalText;
        return true;
    } else {
        return false;
    }
}

function removeNonNumberOrCommaCharacters(component) {
    if (component != null && component.value != null) {
        var numericalText = '';
        var hasComma = false;
        for (var i = 0; i < component.value.length; i++) {
            if ((component.value.charAt(i) >= '0' && component.value.charAt(i) <= '9') || (component.value.charAt(i) == ',' && !hasComma )) {
                numericalText += component.value.charAt(i);
            }
            if (component.value.charAt(i) == ',') hasComma = true;
        }
        component.value = numericalText;
        return true;
    } else {
        return false;
    }
}


function removeNonNumberOrListCharacters(component, charactersList) {
    //FIXME Alterar essa function para que ela permita uma lista de characters disponiveis, atraves do parametro characterList, pensar tambem no limite de vezes que um character poderão aparecer.
    if (component != null && component.value != null) {
        var numericalText = '';
        //var hasComma = false;
        for (var i = 0; i < component.value.length; i++) {
            if ((component.value.charAt(i) >= '0' && component.value.charAt(i) <= '9') || (component.value.charAt(i) == charactersList)) {
                numericalText += component.value.charAt(i);
            }
            //if ( component.value.charAt(i) == charactersList ) hasComma = true;
        }
        component.value = numericalText;
        return true;
    } else {
        return false;
    }
}

/*
 Gives the focus to the next field when the current field reaches its maxLength

 currentFieldName 	Name of the field that has the focus
 nextFieldName 		Name of the field that will have the focus when the current field reaches the maxLength
 */
function jumpToNextField(currentFieldName, nextFieldName) {
    var currentField = document.getElementById(currentFieldName);
    var nextField = document.getElementById(nextFieldName);
    if (currentField.value.length == currentField.maxLength) {
        nextField.focus();
        nextField.select();
    }

}

/*
 @param separator
 @param elements
 @return A String compose each object in "elements" separated by "separator"
 */
function join(separator, elements) {
    if (elements == null) return null;
    if (elements.length < 1) return "";
    if (separator == null) separator = "";
    var sb = elements[0];
    for (var i = 1; i < elements.length; i++)
        sb += separator + elements[i];
    return sb;
}

function mascararNumero(valor, separadorMilesimo, separadorDecimal) {
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';

    if (parseInt(valor) == 0) {
        return '0' + separadorDecimal + '00';
    }

    len = valor.length;
    for (i = 0; i < len; i++)
        if ((valor.charAt(i) != '0') && (valor.charAt(i) != separadorDecimal)) break;
    aux = '';
    for (; i < len; i++)
        if (strCheck.indexOf(valor.charAt(i)) != -1) aux += valor.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) valor = '';
    if (len == 1) valor = '0' + separadorDecimal + '0' + aux;
    if (len == 2) valor = '0' + separadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += separadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        valor = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
            valor += aux2.charAt(i);
        valor += separadorDecimal + aux.substr(len - 2, len);
    }
    return valor;
}

function submitFormAndSetValue(formId, valor) {
    var form = document.getElementById(formId);

    if (form && valor) {
        var elementInput = form.getElementsByTagName('input')[0];
        elementInput.value = valor;
        form.submit();
    }
}
var nrOrdCancel;
gerarBoleto = function () {
    window.open("../../comprador/cartoes/GeraBoletoPagamento.do?nrOrdCancel=" + nrOrdCancel);
};

hideBannerVirusBoleto = function () {
    var dark = document.getElementById('dark');
    dark.style.display = 'none';

    var virusBoleto = document.getElementById('virusBoleto');
    virusBoleto.style.display = 'none';

    gerarBoleto();
};

showBannerVirusBoleto = function (nrOrdCancel) {
    var dark = document.getElementById('dark');
    dark.style.display = 'block';

    var d1 = document.getElementById('virusBoleto');
    d1.style.display = 'block';
    this.nrOrdCancel = nrOrdCancel;
};
