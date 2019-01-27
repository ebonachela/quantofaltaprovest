var vestibulares = [];
vestibulares['enem'] = 'Nov 4, 2019 13:00:00';
vestibulares['fuvest'] = 'Nov 11, 2019 13:00:00';
vestibulares['unicamp'] = 'Nov 18, 2019 13:00:00';
vestibulares['unesp'] = 'Nov 15, 2019 13:00:00';
vestibulares['ita'] = 'Nov 23, 2019 13:00:00';

var current = 'enem';
var intervalo;

function cron() {
    var dataVestibular = new Date(vestibulares[current]).getTime();

    intervalo = setInterval(function() {

    var dataHoje = new Date().getTime();

    var diferenca = dataVestibular - dataHoje;

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("cron").innerHTML = dias + " dias " + horas + " horas "
    + minutos + " minutos " + segundos + " segundos ";

    if (diferenca < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "É HOJE";
    }
    }, 1000);
}

cron();

$('#btn_enem').click(function(){
    current = 'enem';
    clearInterval(intervalo);
    cron();
    document.getElementById("explic-cron").innerHTML = 'Faltam para o ENEM';
});

$('#btn_fuvest').click(function(){
    current = 'fuvest';
    clearInterval(intervalo);
    cron();
    document.getElementById("explic-cron").innerHTML = 'Faltam para o FUVEST';
});

$('#btn_unicamp').click(function(){
    current = 'unicamp';
    clearInterval(intervalo);
    cron();
    document.getElementById("explic-cron").innerHTML = 'Faltam para o UNICAMP';
});

$('#btn_unesp').click(function(){
    current = 'unesp';
    clearInterval(intervalo);
    cron();
    document.getElementById("explic-cron").innerHTML = 'Faltam para o UNESP';
});

$('#btn_ita').click(function(){
    current = 'ita';
    clearInterval(intervalo);
    cron();
    document.getElementById("explic-cron").innerHTML = 'Faltam para o ITA';
});