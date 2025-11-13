// include.js
document.addEventListener("DOMContentLoaded", () => {
  // Função genérica para carregar componentes HTML
  async function loadComponent(id, path) {
    try {
      const container = document.getElementById(id);
      if (!container) return;
      const response = await fetch(path);
      const html = await response.text();
      container.innerHTML = html;

      // Inicializa o menu quando o header for carregado
      if (id === "header-placeholder") initMenu();
    } catch (error) {
      console.error(`Erro ao carregar componente ${path}:`, error);
    }
  }

  // 🧩 Carrega header e footer
  loadComponent("header-placeholder", "./components/header.html");
  loadComponent("footer-placeholder", "./components/footer.html");
  // 💡 Adicionando a seção de orçamento (em todas as páginas que tiver o placeholder)
  loadComponent("orcamento-placeholder", "./orcamento-section.html");

  
});

