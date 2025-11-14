// Base da URL do backend
const API_URL = "http://localhost:8080/perfil";

// Seleciona o elemento onde os dados serão exibidos
const perfilInfo = document.getElementById("perfilInfo");

// Pega o e-mail do usuário logado (pode vir do localStorage, por exemplo)
const emailUsuario = localStorage.getItem("emailUsuario");

// Função para buscar dados do perfil
async function carregarPerfil() {
  if (!emailUsuario) {
    perfilInfo.innerHTML = "<p>Nenhum usuário logado encontrado.</p>";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${encodeURIComponent(emailUsuario)}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const dados = await response.json();
    console.log(dados);

    // Caso volte uma lista (vários agendamentos)
    if (dados.length > 0) {
      perfilInfo.innerHTML = dados.map(item => `
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Nome:</strong> ${item.nome}</p>
        <p><strong>Telefone:</strong> ${item.telefone}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Data:</strong> ${item.data}</p>
        <p><strong>Especialidade:</strong> ${item.especialidade}</p>
        <hr>
      `).join("");
    } else {
      perfilInfo.innerHTML = "<p>Nenhum agendamento encontrado para este e-mail.</p>";
    }

  } catch (error) {
    perfilInfo.innerHTML = "<p>Não foi possível carregar os dados.</p>";
    console.error(error);
  }
}

// Carrega dados ao abrir a página
carregarPerfil();
        console.log("Agendamento realizado:", data);
      alert("Agendamento realizado com sucesso!");