

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = 'Quinta-Feira'
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
    }
}

const data = new Date();
let diaSemana = data.getDay();
let diaNum = data.getDate();
let diaSem = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();
let sec = data.getSeconds();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

switch (diaSem) {
    case 0:
        diaSem = 'Janeiro'
        break;

    case 1:
        diaSem = 'Fevereiro'
        break;

    case 2:
        diaSem = 'Março'
        break;

    case 3:
        diaSem = 'Abril'
        break;

    case 4:
        diaSem = 'Maio'
        break;

    case 5:
        diaSem = 'Junho'
        break;

    case 6:
        diaSem = 'Julho'
        break;

    case 7:
        diaSem = 'Agosto'
        break;

    case 8:
        diaSem = 'Setembro'
        break;

    case 9:
        diaSem = 'Outubro'
        break;

    case 10:
        diaSem = 'Novembro'
        break;

    case 11:
        diaSem = 'Dezembro'
        break;
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0 ${num}`;
}

let pegarh1 = document.querySelector('h1');

pegarh1.innerHTML = `${diaSemanaTexto},${diaNum} de ${diaSem} de ${ano} <br> ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}:${zeroAEsquerda(sec)}`