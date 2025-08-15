const $ = document;

const btn_get  =  $.getElementById('btn-get');
const btn_moon =  $.getElementById('btn-moon');
const btn_sun  =  $.getElementById('btn-sun');
const btn_main  =  $.getElementById('btn-main');
const h1_elm   =  $.getElementById('h1Elm');


btn_moon.addEventListener('click', function () {

    localStorage.setItem('Mode', 'Moon');
    applyTheme();

});

btn_sun.addEventListener('click', function () {

    localStorage.setItem('Mode', 'Sun');
    applyTheme();

});


document.addEventListener('DOMContentLoaded', applyTheme);

function applyTheme() {

    const Mode_id = localStorage.getItem('Mode');

    if (Mode_id === 'Sun') {

        btn_get.classList.remove('bg-gray-800', 'text-white');
        btn_get.classList.add('bg-gray-200', 'text-gray-950');
        h1_elm.classList.remove('text-gray-500');

    }
    else {

        btn_get.classList.add('bg-gray-800', 'text-white');
        h1_elm.classList.add('text-gray-500');

    }

}