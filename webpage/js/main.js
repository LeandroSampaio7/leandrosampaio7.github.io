$(document).ready(function() {
  $('.ct-modal-desc-exp').hide();
});

function abrirDetalhes(text){
  $('body').css('overflow', 'hidden'); // Bloquear a rolagem
  $('.ct-modal-desc-exp').fadeIn();

  $('html, body').animate({
    scrollTop: $('#modalDetalhes').offset().top
  }, 500); 

  $('#modalDetalhes').focus();

  switch (text) {

    case "topdown":
      preencheDetalhesTopDown();
      break;

    case "vegas":
      preencheDetalhesVegas();
      break;

  }


}

function fecharDetalhes(){
  $('body').css('overflow', 'auto'); // Bloquear a rolagem
  $('.ct-modal-desc-exp').hide();
}

function preencheDetalhesTopDown(){

  $('.ct-title-cargo-img').css('background-image', 'url("./img/iconExperienceTopDown.png")');

  var title = "TopDown - Sistemas de Informação";
  var cargo = "Cargo: Estagiario > Analista Junior";
  var duracao = "Tempo: 1 Ano e 3 Meses";

  var desc = `Durante minha trajetória na empresa TopDown, ingressei como estagiário focado na 
              migração de sistemas, atuando principalmente na transição de códigos ASP clássicos para .NET 
              MVC em C#. Após 10 meses, fui promovido a analista, onde passei a manter sistemas e APIs 
              existentes, além de resolver chamados para correções e melhorias. 
              Conquistei resultados expressivos, como a migração bem-sucedida de sistemas legados 
              para tecnologias modernas, que melhoraram significativamente o desempenho e a 
              usabilidade. Também otimizei processos internos com soluções inovadoras. 
              Minha experiência na TopDown me proporcionou crescimento profissional e pessoal, 
              aprendendo a trabalhar sob pressão, cumprir prazos e colaborar em equipe. 
              Principais responsabilidades: 
              Atualização de resultados em Daily; 
              Migração de tecnologias; 
              Apoio técnico a novos integrantes; 
              Organização de tasks em Sprints; 
              Manutenção de sistemas e APIs (ASP e .NET MVC).`;

  $('#title-exp').text(title);
  $('#cargo-exp').text(cargo);
  $('#duracao-exp').text(duracao);
  $('#desc-exp').text(desc);


}

function preencheDetalhesVegas(){

  $('.ct-title-cargo-img').css('background-image', 'url("./img/iconExperienceVegas.png")');

  var title = "Vegas Transportes";
  var cargo = "Cargo: Desenvolvedor .NET";
  var duracao = "Tempo: 7 Meses";
  var desc = `Desenvolvi e liderei a criação de um sistema personalizado utilizando .NET 
              MVC com C#, com foco na melhoria do atendimento ao cliente. O projeto foi estruturado 
              com programação orientada a objetos (POO) e teve um design meticulosamente elaborado no 
              Figma. 
              Durante o desenvolvimento, integrei diversas APIs para aprimorar as 
              funcionalidades do sistema, incluindo: 
              API de CEP para localização precisa; 
              API para envio de mensagens via WhatsApp; 
              API para publicação de imagens em repositórios públicos; 
              Entre outras. 
              O objetivo principal do sistema era coletar e armazenar informações dos 
              usuários de forma organizada, além de formalizar e profissionalizar o processo 
              de coleta através de formulários. 
              O projeto foi executado dentro de um prazo limitado de 5 meses. Após a 
              conclusão, minhas responsabilidades passaram a incluir a manutenção contínua 
              do sistema e a correção de eventuais bugs encontrados.`;

  $('#title-exp').text(title);
  $('#cargo-exp').text(cargo);
  $('#duracao-exp').text(duracao);
  $('#desc-exp').text(desc);


}