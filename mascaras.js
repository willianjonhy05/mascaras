
// ------------------- DATA -------------------


var campoData = document.getElementById('id_data');

campoData.addEventListener('input', function () {
    this.value = mascaraData(this.value);
});


function mascaraData(data) {
    data = data.replace(/\D/g, '');
    if (data.length > 2) {
        data = data.replace(/^(\d{2})(\d)/g, '$1/$2');
        if (data.length > 5) {
            data = data.replace(/^(\d{2})\/(\d{2})(\d{1,4})$/, '$1/$2/$3');
        }
    }
    return data;
}


// -------------------- CEP ---------------------

var inputCEP = document.getElementById('id_cep');
inputCEP.addEventListener('input', function () {
    var cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5);
    }
    this.value = cep;
});

// ----------------------- CPF/CNPJ -----------------------

document.getElementById('id_cpfcnpj').addEventListener('input', function (event) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length === 11) {

        event.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length === 14) {

        event.target.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
});


// ------------------------ TELEFONE FIXO / CELULAR ---------------------


document.getElementById('id_telefone').addEventListener('input', function (event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    if (inputValue.length === 11) {
        inputValue = inputValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
        inputValue = inputValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }

    event.target.value = inputValue;
});


// ------------------------ PORCENTAGEM ---------------------

function mascaraPorcentagem(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor + '%';
    return valor;
}

var campoPorcentagem = document.getElementById('porcentagem');

campoPorcentagem.addEventListener('input', function () {
    this.value = mascaraPorcentagem(this.value);
});


// ------------------------ MÊS E ANO ---------------------


function mascaraMesAno(valor) {

    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 6);

    if (valor.length > 2) {
        valor = valor.slice(0, 2) + '/' + valor.slice(2);
    }

    return valor;
}


var campoMesAno = document.getElementById('mesAno');

campoMesAno.addEventListener('input', function () {
    this.value = mascaraMesAno(this.value);
});

// ------------------------ HORAS E MINUTOS ---------------------


function mascaraHorasMinutos(valor) {

    valor = valor.replace(/\D/g, '');
    valor = valor.slice(0, 4);
    if (valor.length > 2) {
        valor = valor.slice(0, 2) + 'h' + valor.slice(2);
    }

    if (valor.length > 4) {
        valor = valor.slice(0, 5) + 'min';
    }

    return valor;
}

var campoHorasMinutos = document.getElementById('horasMinutos');

campoHorasMinutos.addEventListener('input', function () {
    this.value = mascaraHorasMinutos(this.value);
});


// ------------------------ MOEDA (R$) ---------------------

function mascaraMoeda(valor) {

    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d)(\d{2})$/, '$1,$2');


    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    valor = 'R$ ' + valor;

    return valor;
}

var campoValor = document.getElementById('valor');

campoValor.addEventListener('input', function () {
    this.value = mascaraMoeda(this.value);
});