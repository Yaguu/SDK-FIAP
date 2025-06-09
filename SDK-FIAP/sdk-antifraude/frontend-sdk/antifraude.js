(function () {
    const dados = {
      userAgent: navigator.userAgent,
      idioma: navigator.language,
      larguraTela: screen.width,
      alturaTela: screen.height,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      data: new Date().toISOString()
    };
  
    fetch("https://sua-api.onrender.com/coletar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    }).catch(console.error);
  })();
  