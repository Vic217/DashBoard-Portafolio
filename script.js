/*Eliminar enlaces de sidebar al disminuir el tamaño de pantalla*/
const nav_slid = document.querySelector("#contenedor-sidebar");
const a_slid = document.getElementsByClassName("a-sidebar");
const dino = document.getElementById("dino");
const dash = document.getElementById("dash");
let eliminados_sid = [];

/*Cambia al cambiar el tamaño de la ventana */
window.addEventListener("resize", () => {
    if (window.innerWidth < 1100) {
        [...a_slid].forEach(element => {
            let ultimoHijo = element.childNodes[1];
            if(ultimoHijo !== undefined){
                eliminados_sid.push(ultimoHijo);
                element.removeChild(ultimoHijo); 
                element.style.paddingLeft = "15px";
            }       
            nav_slid.style.width = "70px";  
            dino.style.width = "70px";
            dash.innerText = "DASH"
            dash.style.fontSize = "18px";
        });
    } else if (window.innerWidth > 1100){
        [...a_slid].forEach(element => {
            if(element.childNodes[1] == undefined){
                element.appendChild(eliminados_sid[0]); 
                eliminados_sid.shift();
                element.style.paddingLeft = "30px";
            }
            nav_slid.style.width = "245px";
            dino.style.width = "150px";
            dash.innerText = "Dashboard"
            dash.style.fontSize = "36px";
        });
    }
});

/*Al cargar la ventana si es un tamaño pequeño se ajusta*/
window.addEventListener("load", () => {
    if (window.innerWidth < 1100) {
        [...a_slid].forEach(element => {
            let ultimoHijo = element.childNodes[1];
            if(ultimoHijo !== undefined){
                eliminados_sid.push(ultimoHijo);
                element.removeChild(ultimoHijo); 
                element.style.paddingLeft = "15px";
            }       
            nav_slid.style.width = "70px";  
            dino.style.width = "70px";
            dash.innerText = "DASH"
            dash.style.fontSize = "18px";
        });
    }
});