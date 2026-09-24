// Substitua o 'G-SEU-CODIGO-AQUI' pelo seu ID real do Google Analytics
var gaId = 'G-HGJDEKGYNE';

// Carrega o script oficial do Google Analytics
var script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
document.head.appendChild(script);

// Inicializa a navegação e eventos
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', gaId);
