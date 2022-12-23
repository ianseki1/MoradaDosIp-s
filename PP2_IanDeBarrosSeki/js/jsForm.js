const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

submit.addEventListener("click", mostrarDiv);

const reset = document.getElementById("limpar");

reset.addEventListener("click", limpar);

const editar = document.getElementById("editar");

editar.addEventListener("click", editarForm);


function mostrarDiv(e) {

    var dadosVerificados = document.querySelector('.dadosVerificados');

    const textoNomeR = document.getElementById("nomeCompletoR").value;
    const textoCpfR = document.getElementById("cpfR").value;
    const textoDataNascR = document.getElementById("dataNascR").value;
    const textoTeleR = document.getElementById("teleR").value;
    const textoEmailR = document.getElementById("emailR").value;
    const textoNomeH = document.getElementById("nomeCompletoH").value;
    const textoCpfH = document.getElementById("cpfH").value;
    const textoDataNascH = document.getElementById("dataNascH").value;
    const textoTeleH = document.getElementById("teleH").value;

    if (dadosVerificados.style.display === 'block') {
        dadosVerificados.style.display = 'none';

        
    } else {
        dadosVerificados.style.display = 'block';
        document.getElementById("pNomeR").innerHTML = textoNomeR;
        document.getElementById("pCpfR").innerHTML = textoCpfR;
        document.getElementById("pDataNascR").innerHTML = textoDataNascR;
        document.getElementById("pTeleR").innerHTML = textoTeleR;
        document.getElementById("pEmailR").innerHTML = textoEmailR;
        document.getElementById("pNomeH").innerHTML = textoNomeH;
        document.getElementById("pCpfH").innerHTML = textoCpfH;
        document.getElementById("pTeleH").innerHTML = textoTeleH;
        document.getElementById("pDataNascH").innerHTML = textoDataNascH;
    }
}

function validate(e) {
    e.preventDefault();

    const nomeR = document.getElementById("nomeCompletoR");
    const cpfR = document.getElementById("cpfR");
    const dataNascR = document.getElementById("dataNascR");
    const teleR = document.getElementById("teleR");
    const emailR = document.getElementById("emailR");
    const nomeH = document.getElementById("nomeCompletoH");
    const cpfH = document.getElementById("cpfH");
    const dataNascH = document.getElementById("dataNascH");
    const teleH = document.getElementById("teleH");

    const nameError = document.getElementById("nameError");
    const cpfError = document.getElementById("cpfError");
    const dataError = document.getElementById("dataError");
    const telError = document.getElementById("telError");
    const emailError = document.getElementById("emailError");
    const nameErrorH = document.getElementById("nameErrorH");
    const cpfErrorH = document.getElementById("cpfErrorH");
    const dataErrorH = document.getElementById("dataErrorH");
    const telErrorH = document.getElementById("telErrorH");


    let valid = true;

    if (!nomeR.value) {
        nameError.classList.add("visible");
        nomeR.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    } else {
        nomeR.disabled = true;
        nomeR.classList.add("valid");
    }
    if (!cpfR.value) {
        cpfError.classList.add("visible");
        cpfR.classList.add("invalid");
        cpfError.setAttribute("aria-hidden", false);
        cpfError.setAttribute("aria-invalid", true);
    }
    else {
        cpfR.disabled = true;
        cpfR.classList.add("valid");
    }
    if (!dataNascR.value) {
        dataError.classList.add("visible");
        dataNascR.classList.add("invalid");
        dataError.setAttribute("aria-hidden", false);
        dataError.setAttribute("aria-invalid", true);
    }
    else {
        dataNascR.disabled = true;
        dataNascR.classList.add("valid");
    }
    if (!teleR.value) {
        telError.classList.add("visible");
        teleR.classList.add("invalid");
        telError.setAttribute("aria-hidden", false);
        telError.setAttribute("aria-invalid", true);
    }
    else {
        teleR.disabled = true;
        teleR.classList.add("valid");
    }
    if (!emailR.value) {
        emailError.classList.add("visible");
        emailR.classList.add("invalid");
        emailError.setAttribute("aria-hidden", false);
        emailError.setAttribute("aria-invalid", true);
    }
    else {
        emailR.disabled = true;
        emailR.classList.add("valid");
    }
    if (!nomeH.value) {
        nameErrorH.classList.add("visible");
        nomeH.classList.add("invalid");
        nameErrorH.setAttribute("aria-hidden", false);
        nameErrorH.setAttribute("aria-invalid", true);
    }
    else {
        nomeH.disabled = true;
        nomeH.classList.add("valid");
    }
    if (!cpfH.value) {
        cpfErrorH.classList.add("visible");
        cpfH.classList.add("invalid");
        cpfErrorH.setAttribute("aria-hidden", false);
        cpfErrorH.setAttribute("aria-invalid", true);
    }
    else {
        cpfH.disabled = true;
        cpfH.classList.add("valid");
    }
    if (!dataNascH.value) {
        dataErrorH.classList.add("visible");
        dataNascH.classList.add("invalid");
        dataErrorH.setAttribute("aria-hidden", false);
        dataErrorH.setAttribute("aria-invalid", true);
    }
    else {
        dataNascH.disabled = true;
        dataNascH.classList.add("valid");
    }
    if (!teleH.value) {
        telErrorH.classList.add("visible");
        teleH.classList.add("invalid");
        telErrorH.setAttribute("aria-hidden", false);
        telErrorH.setAttribute("aria-invalid", true);
    }
    else {
        teleH.disabled = true;
        teleH.classList.add("valid");
    }

    return valid;
}

function editarForm(e) {
    e.preventDefault();

    const nomeR = document.getElementById("nomeCompletoR");
    const cpfR = document.getElementById("cpfR");
    const dataNascR = document.getElementById("dataNascR");
    const teleR = document.getElementById("teleR");
    const emailR = document.getElementById("emailR");
    const nomeH = document.getElementById("nomeCompletoH");
    const cpfH = document.getElementById("cpfH");
    const dataNascH = document.getElementById("dataNascH");
    const teleH = document.getElementById("teleH");

    nomeR.disabled = false;
    cpfR.disabled = false;
    dataNascR.disabled = false;
    teleR.disabled = false;
    emailR.disabled = false;
    cpfH.disabled = false;
    nomeH.disabled = false;
    dataNascH.disabled = false;
    teleH.disabled = false;


}

function limpar(e) {
    e.preventDefault();

    const nomeR = document.getElementById("nomeCompletoR");
    const cpfR = document.getElementById("cpfR");
    const dataNascR = document.getElementById("dataNascR");
    const teleR = document.getElementById("teleR");
    const emailR = document.getElementById("emailR");
    const nomeH = document.getElementById("nomeCompletoH");
    const cpfH = document.getElementById("cpfH");
    const dataNascH = document.getElementById("dataNascH");
    const teleH = document.getElementById("teleH");

    document.getElementById('nomeCompletoR').value = '';
    document.getElementById('cpfR').value = '';
    document.getElementById('dataNascR').value = '';
    document.getElementById('teleR').value = '';
    document.getElementById('emailR').value = '';
    document.getElementById('nomeCompletoH').value = '';
    document.getElementById('cpfH').value = '';
    document.getElementById('dataNascH').value = '';
    document.getElementById('teleH').value = '';

    nomeR.disabled = false;
    cpfR.disabled = false;
    dataNascR.disabled = false;
    teleR.disabled = false;
    emailR.disabled = false;
    cpfH.disabled = false;
    nomeH.disabled = false;
    dataNascH.disabled = false;
    teleH.disabled = false;

    nomeR.classList.add("valid");
    cpfR.classList.add("valid");
    dataNascR.classList.add("valid");
    teleR.classList.add("valid");
    emailR.classList.add("valid");
    cpfH.classList.add("valid");
    nomeH.classList.add("valid");
    dataNascH.classList.add("valid");
    teleH.classList.add("valid");
}
