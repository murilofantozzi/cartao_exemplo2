function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}

// Fechar menu ao clicar em um link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("active");
  });
});

// Função para formatar um número como moeda brasileira (Real)
const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

// Função principal para calcular e atualizar o simulador
const updateSimulator = () => {
  // 1. Obter referências dos elementos
  const totalValueRange = document.getElementById("total-value-range");
  const installmentsRange = document.getElementById("installments-range");

  const totalValueDisplay = document.getElementById("total-value-display");
  const installmentsDisplay = document.getElementById("installments-display");
  const installmentValueDisplay = document.getElementById("installment-value");
  const installmentDetailsDisplay = document.getElementById(
    "installment-details"
  );
  const footerTotalValueDisplay = document.getElementById("footer-total-value");

  // 2. Obter os valores atuais dos inputs
  const totalValue = parseFloat(totalValueRange.value);
  const installments = parseInt(installmentsRange.value);

  // 3. Calcular o valor da parcela
  const installmentValue = totalValue / installments;

  // 4. Atualizar os displays de input
  totalValueDisplay.textContent = formatCurrency(totalValue);
  installmentsDisplay.textContent = `${installments}x`;

  // 5. Atualizar a seção de resultado
  installmentValueDisplay.textContent = formatCurrency(installmentValue);
  installmentDetailsDisplay.textContent = `${installments}x de ${formatCurrency(
    installmentValue
  )}`;

  // 6. Atualizar o rodapé
  footerTotalValueDisplay.textContent = formatCurrency(totalValue);
};

// 7. Adicionar event listeners aos inputs de range
document.addEventListener("DOMContentLoaded", () => {
  const totalValueRange = document.getElementById("total-value-range");
  const installmentsRange = document.getElementById("installments-range");

  // Inicializa o simulador com os valores padrão
  updateSimulator();

  // Adiciona listeners para o evento 'input' (atualiza em tempo real)
  totalValueRange.addEventListener("input", updateSimulator);
  installmentsRange.addEventListener("input", updateSimulator);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const telefoneInput = document.getElementById("telefone");

  // Função para formatar o telefone (XX) XXXXX-XXXX
  const formatPhone = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ""); // Remove tudo que não é dígito

    // Aplica a máscara (XX) XXXXX-XXXX
    if (value.length > 0) {
      value = "(" + value.substring(0, 2);
    }
    if (value.length > 3) {
      value = value + ") " + value.substring(2, 7);
    }
    if (value.length > 10) {
      value = value + "-" + value.substring(7, 11);
    }

    return value;
  };

  // Adiciona listener para formatar o telefone enquanto o usuário digita
  telefoneInput.addEventListener("input", (e) => {
    e.target.value = formatPhone(e.target.value);
  });

  // Listener para o envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Simulação de validação
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
      showMessage(
        "Por favor, preencha os campos obrigatórios (Nome e E-mail).",
        "error"
      );
      return;
    }

    // Simulação de envio bem-sucedido
    showMessage(
      "Mensagem enviada com sucesso! Em breve entraremos em contato.",
      "success"
    );
    form.reset(); // Limpa o formulário após o envio simulado

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  });

  // Função para exibir a mensagem de feedback
  const showMessage = (message, type) => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = "block";
  };
});

function scrollToSimulador() {
  const alvo = document.querySelector("#simulator");
  const offset = 100; // ajuste como quiser (px)

  const top = alvo.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
}

function scrollToComo() {
  const alvo = document.querySelector("#como");
  const offset = 100; // ajuste como quiser (px)

  const top = alvo.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
}
