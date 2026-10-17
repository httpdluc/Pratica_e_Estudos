const frm = document.querySelector('form');
const imgClube = document.querySelector('#imgClube');
const msg = document.querySelector('pre');

const trocarClube = (e) => {
    e.preventDefault();

    let clube = "";

    if (frm.brasil.checked) {
        clube = "brasil";
    } else if (frm.pelotas.checked) {
        clube = "pelotas";
    } else if (frm.farroupilha.checked) {
        clube = "farroupilha";
    }

    imgClube.src = `./img/${clube}.png`;
    imgClube.className = "img-fluid";
    imgClube.alt = `Símbolo do ${clube}`;

    localStorage.setItem("clube", clube);
    contadorVisitas()

}

frm.brasil.addEventListener("change", trocarClube);
frm.pelotas.addEventListener("change", trocarClube);
frm.farroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
    const clube = localStorage.getItem("clube");

    if (clube) {
        if (clube === "brasil") {
            frm.brasil.checked = true;
        } else if (clube === "pelotas") {
            frm.pelotas.checked = true;
        } else {
            frm.farroupilha.checked = true;
        }

        trocarClube();
    }
};

const contadorVisitas = () => {
    let visitas = Number(localStorage.getItem('visitas'))

    console.log(visitas)
    if(!visitas){
        visitas=1
        msg.innerText = `Muito bem vindo! Esta é sua primeira visita.`
    }else{
    visitas++
    msg.innerText = `Que bom que voltou! Esta é a sua visita de número ${visitas} ao nosso site.`
    }
    localStorage.setItem('visitas',visitas)
}

window.addEventListener("load", () =>{ 
    verificarClube();
    contadorVisitas();
});

