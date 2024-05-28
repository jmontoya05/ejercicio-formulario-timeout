// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
    usuarios: [
        {
            id: 1,
            name: "Steve Jobs",
            email: "steve@jobs.com",
            password: "Steve123",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "shanna@melissa.tv",
            password: "Ervin345",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            email: "nathan@yesenia.net",
            password: "Floppy39876",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            email: "julianne.oconner@kory.org",
            password: "MysuperPassword345",
        },
    ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */

window.addEventListener("load", () => {
    const button = document.querySelector("button.login-btn");
    const loader = document.querySelector("#loader");
    const errorContainer = document.querySelector("#error-container");

    button.addEventListener("click", () => {
        const email = document.querySelector("#email-input").value;
        const password = document.querySelector("#password-input").value;
        errorContainer.classList.add("hidden");
        loader.classList.remove("hidden");

        const validate =
            validateEmail(email) &&
            validatePassword(password) &&
            validatePerson(email, password, baseDeDatos.usuarios);

        setTimeout(() => {
            if (validate) {
                const form = document.querySelector("form");
                form.classList.add("hidden");
                const h1 = document.querySelector("h1");
                h1.innerText = "Bienvenido al sitio 😀";
            } else {
                loader.classList.add("hidden");
                errorContainer.innerHTML = `<small>Uno o todos los datos ingresados son incorrectos</small>`;
                errorContainer.classList.remove("hidden");
            }
        }, 3000);
    });
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password) {
    // Mínimo 8 caracteres
    // Al menos una letra mayúscula
    // Al menos una letra minúscula
    // Al menos un número
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

function validatePerson(email, password, users) {
    for (const user of users) {
        if (user.email === email && user.password === password) {
            return true;
        }
    }
    return false;
}
