const nome = document.querySelector('#nome')
const sobreNome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const form = document.querySelector('#formulario')
const btnForm = document.querySelector('#btn-form')
const msg = document.querySelector('.msg')


btnForm.addEventListener('click',(e) =>{
    e.preventDefault()
    const nomevalue = nome.value
    const sobreNomevalue = sobreNome.value
    const emailvalue = email.value
    const senhavalue = senha.value

    if(nomevalue === "" || sobreNomevalue === "" || emailvalue === "" || senhavalue === ""){
        msg.textContent = "preencha todo  o formulário!"
        return;
     
    }


})




