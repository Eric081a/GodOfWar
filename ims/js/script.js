
try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#asssunto");
    const mensagemTextarea = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");


    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;
        if (nomeInput.value.trim() === '') {
            valido = false;
            alert("O campo de nome nao pode estar vazio!")
        }


        if (mensagemTextarea.value.trim() === '') {
            valido = false;
            alert("Mensagem nao pode estar vazia")
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false
            alert("mensagem deve ser menor que 500 caracteres.")
        }

        if (valido) {
            alert("agradecemos seu contato")
            form.submit();
        }
    }
    enviarBtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message);
}


