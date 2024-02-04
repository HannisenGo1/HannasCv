
//gör variabler, dessa ska vara hela tiden på sidan.
//information     om mig.
//textcont2     kopplat i projekt 
//Projekt       kopplat i projekt, alla bilder med länk


const omMigBtn = document.getElementById('omMigbtn');
const projektBtn = document.getElementById('Projektbtn');
const kontaktBtn = document.getElementById('kontaktbtn');

const omMigDiv = document.querySelector('.ommig');

const projektinfo = document.querySelector('.Projekt')
const textCont2= document.querySelector('.textcont2');
const information = document.querySelector('.information');
const textCont3 = document.querySelector('.textcont3');
const projektIteams = document.querySelectorAll('.projekt-item');

//för kontakt::
const Kontakta =document.querySelector('.Kontakt');


function HideAll(){
	information.classList.add('hidden');
	omMigDiv.classList.add('hidden');
	projektinfo.classList.add('hidden');
	textCont2.classList.add('hidden');
	textCont3.classList.add('hidden');
	Kontakta.classList.add('hidden');
}

function showOmmig(){
	HideAll();
	information.classList.remove('hidden');
	omMigDiv.classList.remove('hidden');
}

function showProject(){
	HideAll();
	projektinfo.classList.remove('hidden');
	textCont2.classList.remove('hidden');
	textCont3.classList.remove('hidden');
}

function showKontakta(){
	HideAll();
	Kontakta.classList.remove('hidden');
}

function setHome(){
	HideAll();
	showOmmig();
}

setHome();

projektBtn.addEventListener('click', showProject);
omMigBtn.addEventListener('click', showOmmig)
kontaktBtn.addEventListener('click',showKontakta)




