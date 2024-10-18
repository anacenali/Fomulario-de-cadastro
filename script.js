document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const endereco = document.getElementById('endereco').value;

    if (!validateEmail(email)) {
        alert('Email inválido');
        return;
    }

    if (!validateCPF(cpf)) {
        alert('CPF inválido');
        return;
    }

    // Aqui você poderia fazer uma chamada à API para salvar os dados

    alert('Cadastro realizado com sucesso!');
});

document.getElementById('buscarEndereco').addEventListener('click', function() {
    const cep = document.getElementById('cep').value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado');
            } else {
                document.getElementById('endereco').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            }
        })
        .catch(error => {
            alert('Erro ao buscar endereço');
            console.error(error);
        });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateCPF(cpf) {
    // Validação simples (apenas para exemplo, implementar uma validação completa é necessário)
    return cpf.length === 11; // CPF deve ter 11 dígitos
}
