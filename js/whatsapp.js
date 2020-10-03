/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

// const $form = document.querySelector('#form');
// const buttonSubmit = document.querySelector('#submit');
// const urlDesktop = 'https://web.whatsapp.com/';
// const urlMobile = 'whatsapp://';
// const phone = '56993321474';


// $form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
//     buttonSubmit.disabled = true

//     setTimeout(() => {
//         let name = document.querySelector('#name').value
//         let lastname = document.querySelector('#lastname').value
//         let email = document.querySelector('#email').value
//         let message = 'send?phone=' + phone + '&text=*_Formulario Gabriel Chávez_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + name + '%0A*¿Cuáles son tus apellidos?*%0A' + lastname + '%0A*¿Cuál es tu correo?*%0A' + email + ''


//         if (isMobile()) {
//             window.open(urlMobile + message, '_blank')
//         } else {
//             window.open(urlDesktop + message, '_blank')
//         }

//         buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
//         buttonSubmit.disabled = false

//     }, 4000);

// });

$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '56993321474', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Comunícate por WhatsApp!', //Popup Title
    popupMessage: 'Hola!, ¿ En qué te podemos ayudar ?', //Popup Message
    message: "Hola, me gustaría recibir el nuevo catálogo, gracias!.",
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    size:'52px',
    autoOpenTimeout:7000,
    zIndex:1,

    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});