$(document).ready(function () {
    handleData()
});


const table = document.querySelector('.tabela')
let data;
let buttonDetails;

function handleData() {
    try {
        data = $.ajax({
            type: "get",
            url: "./array.json",
            success: function (response) {
                response.forEach(obj => {
                    const row = document.createElement('tr');
                    const rowContent = `
                        <tr>
                            <td>${obj.nome}</td>
                            <td><p>${obj.data_nasc}</p></td>
                            <td><p>${obj.cpf}</p></td>
                            <td><p>${obj.rg}</p></td>
                            <td><p>${obj.email}</p></td>
                            <td><p>${obj.celular}</p></td>

                            <td>
                                <button type='button' class='btn btn-primary btn-sm data-dismiss="modal" '>Detalhe</button>
                            </td>
                        </tr>
                    `
                    row.innerHTML = rowContent
                    table.appendChild(row)
                });
                buttonDetails = document.querySelectorAll('.btn-primary');
                setButtonEventClick()
            }
        });
    } catch (error) {
        alert("Erro ao buscar os dados: " + error)
    }
}


function showUsersDetail(id) {
    const user = `
    Usuário: ${data.responseJSON[id].nome}
    Nascimento: ${data.responseJSON[id].data_nasc}
    CPF: ${data.responseJSON[id].cpf}
    RG: ${data.responseJSON[id].rg}
    Email: ${data.responseJSON[id].email}
    Celular: ${data.responseJSON[id].celular} 
        `
    alert(user);
}

function setButtonEventClick() {
    buttonDetails.forEach((botao, index) => {
        botao.setAttribute("id", index);
        botao.addEventListener("click", () => {
            showUsersDetail(index);
        })
    })
}
