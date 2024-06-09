document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    userAuthentication(username, password, successCallback, failureCallback)

})

function userAuthentication(username, password, successCallback, failureCallback){
    const validUsername = "user"
    const validPassword = "password"

    if(username === "" || password === ""){
        failureCallback(`Por favor, preencha todos os campos!!`)

    } else if(username !== validUsername && password !== validPassword){
        failureCallback(`Nome de usuário e senha incorretos!!`)
    } else if(username !== validUsername){
        failureCallback("Nome do usuário está incorreto!!")
    } else if(password !== validPassword){
        failureCallback("Senha incorreta!!")
    } else{
        successCallback(username)
    }
}

function loginSuccess(username){
    const messageDiv = document.getElementById('message')
    messageDiv.style.color = 'green'
    messageDiv.textContent = `Login bem sucedido, bem-vindo ${username.toLowerCas()}!`

    messageDiv.classList.remove('shake')
    messageDiv.classList.add('fade-in')

    setTimeout(function(){
        window.location.href = 'welcome.html'

    }, 1000)
}

function loginFailure(errorMessage){
    const messageDiv = document.getElementById('message')
    messageDiv.style.color = 'red'
    messageDiv.textContent = errorMessage

    messageDiv.classList.remove('fade-in')
    messageDiv.classList.add('shake')

}