/*Eliminar enlaces de sidebar al disminuir el tamaño de pantalla*/
const nav_slid = document.querySelector("#contenedor-sidebar");
const a_slid = document.getElementsByClassName("a-sidebar");
const dino = document.getElementById("dino");
const dash = document.getElementById("dash");
const mostrar = document.getElementsByClassName("mostrar");
let contenido_side = [];

/* Al cargar la página */
window.addEventListener("load", () => {
    /*Texto de los enlaces los agrega a la lista*/
    [...a_slid].forEach(element => {
        const valor_ultimo_hijo = element.childNodes[1].textContent;
        contenido_side.push(valor_ultimo_hijo);
    });

    /*Cambia el tamaño del slidebar al cargar página con ventana menor a 1100 */
    if (window.innerWidth < 1150) {
        [...a_slid].forEach(element => {
            let ultimoHijo = element.childNodes[1];
            if (ultimoHijo.textContent !== "") {
                element.childNodes[1].textContent = "";
                element.style.paddingLeft = "15px";
            }
            nav_slid.style.width = "70px";
            dino.style.width = "70px";
            dash.innerText = "DASH"
            dash.style.fontSize = "18px";
        });

        /*Mostrar el nombre del enlace, en el sidebar*/
        [...mostrar].forEach(element => {
            element.addEventListener("mouseover", (e) => {
                const posicion = Number(e.target.getAttribute("id"));
                if (a_slid[posicion].childNodes[1].textContent === "") {
                    a_slid[posicion].childNodes[1].textContent = contenido_side[posicion];
                }
            });

            element.addEventListener("mouseout", (e) => {
                const posicion = Number(e.target.getAttribute("id"));
                if (window.innerWidth < 1150) {
                    a_slid[posicion].childNodes[1].textContent = "";
                }
            });
        });
    }
});

/*Cambiar el tamaño de la ventana */
window.addEventListener("resize", () => {
    /*Al cambiar el tamaño menor a 1100 modifica el sidebar*/
    if (window.innerWidth < 1150) {
        [...a_slid].forEach(element => {
            let ultimoHijo = element.childNodes[1];
            if (ultimoHijo.textContent !== "") {
                element.childNodes[1].textContent = "";
                element.style.paddingLeft = "15px";
            }
            nav_slid.style.width = "70px";
            dino.style.width = "70px";
            dash.innerText = "DASH"
            dash.style.fontSize = "18px";
        });

        /*Mostrar el nombre del enlace en el sidebar*/
        [...mostrar].forEach(element => {
            element.addEventListener("mouseover", (e) => {
                const posicion = Number(e.target.getAttribute("id"));
                if (a_slid[posicion].childNodes[1].textContent === "") {
                    a_slid[posicion].childNodes[1].textContent = contenido_side[posicion];
                }
            });

            element.addEventListener("mouseout", (e) => {
                const posicion = Number(e.target.getAttribute("id"));
                if (window.innerWidth < 1150) {
                    a_slid[posicion].childNodes[1].textContent = "";
                }
            });
        });

    /*Aumenta tamaño y se ajustan a tamaño normal */
    } else if (window.innerWidth > 1150) {
        let conteo = 0;
        [...a_slid].forEach(element => {
            if (element.childNodes[1].textContent === "") {
                element.childNodes[1].textContent = contenido_side[conteo];
                element.style.paddingLeft = "30px";
            }
            nav_slid.style.width = "245px";
            dino.style.width = "150px";
            dash.innerText = "Dashboard"
            dash.style.fontSize = "36px";
            conteo += 1;
        });
    }
});