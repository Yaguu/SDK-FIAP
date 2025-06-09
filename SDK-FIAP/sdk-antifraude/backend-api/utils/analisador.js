module.exports = function analisar(dados) {
    // Exemplo de regra simples
    if (dados.larguraTela < 300 || dados.userAgent.includes("Headless")) {
      return "alto";
    }
    if (dados.timezone !== "America/Sao_Paulo") {
      return "médio";
    }
    return "baixo";
  };
  