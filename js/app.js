import animation from "../storage/animation.js";
import  myTeam from "./myTeam.js";
import myInicio from "./myIntro.js";
myInicio.muestraIntro();
myTeam.muestraTeam();

// parte del header
const toggleButton = document.querySelector('.toggle-button');
const navbarCollapse = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', function() {
  navbarCollapse.classList.toggle('active');
});

const button = document.getElementById('button');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBorderColor() {
  const color = getRandomColor();
  button.style.borderColor = color;
}

setInterval(changeBorderColor, 1000); // Cambia el color del borde cada segundo (puedes ajustar el intervalo según tus preferencias)


// parte de tecnologias


const classIsAnimated = 'isAnimated';
const elLinks = document.getElementsByClassName('sn-link');
const elLinksLength = elLinks.length;
const elTitle = document.getElementsByClassName('sn-title')[0];
const elDescr = document.getElementsByClassName('sn-descr')[0];
// const originalTitle = elTitle.textContent;
// const originalDescr = elDescr.textContent;


for (let i = 0; i < elLinksLength; i++) {
	const thisLink = elLinks[i];
   
	thisLink.addEventListener('mouseenter', activeContact, false);
	thisLink.addEventListener('focus', activeContact, false);
	
	thisLink.addEventListener('mouseleave', resetContacts, false);
	thisLink.addEventListener('blur', resetContacts, false);
}

function activeContact(e) {
	const title = e.target.getAttribute('data-title');
	elTitle.textContent = title;
	elDescr.textContent = e.target.getAttribute('data-descr');
	
	// add a aria-label with a  ':' after the social network name
	// to force SR to make a pause before spelling the description
	elTitle.setAttribute('aria-label', `${title}:`);
	
	blinkText();
}

function resetContacts() {
	elTitle.textContent = originalTitle;
	elDescr.textContent = originalDescr;
	elTitle.removeAttribute('aria-label');

	blinkText();
}

function blinkText() {
	elTitle.classList.remove(classIsAnimated);
	elDescr.classList.remove(classIsAnimated);
	
	setTimeout(function(){
		elTitle.classList.add(classIsAnimated);
		elDescr.classList.add(classIsAnimated);
	}, 10);
}


//Proyectos
// Función para aplicar estilos
function applyStyles(element, styles) {
    for (let prop in styles) {
      element.style[prop] = styles[prop];
    }
  }
  
  // Función para validar los checks
  function validateChecks() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkbox.parentNode.classList.add('checked');
        } else {
          checkbox.parentNode.classList.remove('checked');
        }
      });
    });
  }
  
  // Ejecutar la función de estilos
  window.onload = function () {
    const labels = document.querySelectorAll('.labels label');
    labels.forEach((label) => {
      applyStyles(label, {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px',
      });
    });
  
    // Ejecutar la función de validación de checks
    validateChecks();
  };




// funcion de footer
