document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAgendamento");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const especialidade = document.getElementById("especialidade").value;

    if (
      !nome ||
      !telefone ||
      !email ||
      !senha ||
      !data ||
      !horario ||
      !especialidade
    ) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const novoAgendamento = {
      nome,
      telefone,
      email,
      senha,
      data,
      horario,
      especialidade,
    };

    console.table(novoAgendamento);

    try {
      const response = await fetch("http://localhost:8080/agendamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoAgendamento),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar agendamento");
      }

      const dataResponse = await response.json();
      console.log("Cadastro realizado:", dataResponse);
      alert("Agendamento realizado com sucesso!");

      // 👉 Aqui salvamos o e-mail do usuário logado/cadastrado
      localStorage.setItem("emailUsuario", email);

      // (opcional) salva também o agendamento completo, se quiser
      localStorage.setItem("agendamentos", JSON.stringify([novoAgendamento]));

      form.reset();

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o agendamento.");
    }
  });
});
