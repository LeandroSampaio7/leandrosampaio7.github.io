$(document).ready(function () {

    $('#inf-tdd').hide();
    $('#inf-ai').hide();

  const $container = $(".pipe-skills");
  const $list = $(".pipe-skills-list");

  if ($container.length && $list.length) {
    $list.append($list.html());

    let scrollAmount = 0;
    const speed = 0.5;

    function autoScroll() {
      scrollAmount += speed;
      $container.scrollLeft(scrollAmount);

      if (scrollAmount >= $list[0].scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }


   //ANIMAÇÃO DOS SERVIÇOS
  const serviceItems = document.querySelectorAll('.box-item-left, .box-item-right');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        if (el.classList.contains('box-item-left')) {
          el.classList.add('animate-left');
          el.classList.remove('animate-reset-left');
        } else if (el.classList.contains('box-item-right')) {
          el.classList.add('animate-right');
          el.classList.remove('animate-reset-right');
        }
      } else {
        if (el.classList.contains('box-item-left')) {
          el.classList.remove('animate-left');
          el.classList.add('animate-reset-left');
        } else if (el.classList.contains('box-item-right')) {
          el.classList.remove('animate-right');
          el.classList.add('animate-reset-right');
        }
      }
    });
  }, {
    threshold: 0.1 
  });

  serviceItems.forEach(el => observer.observe(el));


  //CARROSEL DOS PROJETOS
  const slider = document.querySelector('.projects-center');
  const dots = document.querySelectorAll('.dot-item');
  const items = document.querySelectorAll('.projects-item');

  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
      // Função para atualizar os dots conforme a rolagem
      function updateDots() {
          const scrollPosition = slider.scrollLeft;
          const itemWidth = items[0].offsetWidth + 40; // Largura do item + margem
          const index = Math.round(scrollPosition / itemWidth);
          
          dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
          });
      }

      // Adiciona evento de rolagem para atualizar os dots
      slider.addEventListener('scroll', updateDots);

      // Evento de arraste
      slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.style.cursor = "grabbing";
          startX = e.clientX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.style.cursor = "grab";
      });

      slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.style.cursor = "grab";
      });

      slider.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.clientX - slider.offsetLeft;
          const walk = (x - startX) * 2; // Ajuste a velocidade do arraste
          slider.scrollLeft = scrollLeft - walk;
          updateDots();
      });

      // Clique nos dots para navegar
      dots.forEach((dot, i) => {
          dot.addEventListener('click', () => {
              const itemWidth = items[0].offsetWidth + 40; // Largura do item + margem
              slider.scrollTo({
                  left: i * itemWidth,
                  behavior: 'smooth'
              });
          });
      });
  }




});


function updateTheme(status) {
  debugger
  if (status == 0) {
    $("#iconMoon").css("opacity", "0");
    $("#iconSun").css("opacity", "1");

    themeColor("clear");

  } else {
    $("#iconMoon").css("opacity", "1");
    $("#iconSun").css("opacity", "0");

    themeColor("dark");
  }
}

function updateThemeMob(status) {
  debugger
  if (status == 0) {
    $("#iconMoonMob").css("opacity", "0");
    $("#iconSunMob").css("opacity", "1");

    themeColor("clear");

  } else {
    $("#iconMoonMob").css("opacity", "1");
    $("#iconSunMob").css("opacity", "0");

    themeColor("dark");
  }
}

function showDetExp(year){
  document.body.style.overflow = "hidden";
  var form = '';

  if(year == 2023){
    form = `<div class="bg-modal-desc-exp">
            <div class="modal-desc-exp">
                <div class="modal-desc-exp-center">
                    <div class="ct-close-modal"><i class="bi bi-x" onclick="hideDetExp();"></i></div>
                    <div class="ct-modal-desc-cab">
                        <div>
                            <h1>TopSaúde HUB</h1>
                            <h2>Estágiario Programador</h2>
                        </div>
                        <img src="./img/iconExperienceTopSaudeHub.png">
                    </div>

                    <div class="ct-temp-enter">
                        <p>Jan 2023 até abr 2024 <i class="bi bi-calendar-event"></i> </p>
                    </div>

                    <div class="ct-lineDescExp">
                        <div class="lineDescExp"></div>
                    </div>

                    <div class="details-function">

                        <p>
                            Iniciei minha trajetória na TopDown como estagiário, atuando na migração de sistemas, 
                            especialmente na transição de ASP Clássico para .NET MVC C#. Durante esse período, 
                            fui responsável pelo desenvolvimento e manutenção de sistemas, implementando melhorias
                            e garantindo a estabilidade das plataformas. Com a migração bem-sucedida, otimizei 
                            processos internos, melhorei a performance dos sistemas e contribuí para a evolução 
                            das aplicações existentes.
                        </p>

                        <p>
                            Em janeiro de 2024, fui promovido a Analista de Software Júnior, passando a manter 
                            sistemas e APIs, solucionar chamados e participar ativamente das sprints. Além de 
                            contribuir com a organização de tarefas, acompanhei resultadose auxiliei novos 
                            membros da equipe. Meu trabalho trouxe melhorias expressivas na usabilidade e desempenho
                            dos sistemas, reforçando minha experiência em desenvolvimento orientado a testes, 
                            controle de versão e análise de dados. 🚀
                        </p>

                    </div>
                </div>
            </div>
        </div>`;

  }else if(year == 2024){
    form = `<div class="bg-modal-desc-exp">
            <div class="modal-desc-exp">
                <div class="modal-desc-exp-center">
                    <div class="ct-close-modal"><i class="bi bi-x" onclick="hideDetExp();"></i></div>
                    <div class="ct-modal-desc-cab">
                        <div>
                            <h1>Vegas Transportes</h1>
                            <h2>Desenvolvedor .Net C# FullStack</h2>
                        </div>
                        <img src="./img/iconExperienceVegas.png">
                    </div>

                    <div class="ct-temp-enter">
                        <p>Abr 2024 até nov 2024 <i class="bi bi-calendar-event"></i> </p>
                    </div>

                    <div class="lineDescExp">
                        <div class="lineDescExp"></div>
                    </div>

                    <div class="details-function">

                        <p>
                            Ao longo da minha trajetória, participei ativamente da modernização e manutenção de 
                            sistemas, garantindo soluções eficientes e de alta qualidade. Iniciei minha jornada 
                            focado na migração de plataformas legadas para .NET MVC C#, otimizando processos 
                            internos e aprimorando a performance das aplicações. Posteriormente, fui inserido 
                            em um projeto voltado ao desenvolvimento de interfaces responsivas, automação de 
                            processos e integração de APIs essenciais, assegurando uma experiência intuitiva 
                            para o usuário.
                        </p>

                        <p>
                            Nesse projeto, trabalhei na criação de layouts modernos com Angular e Bootstrap, 
                            implementei automações de fluxo de dados utilizando Python e garanti a manutenção 
                            contínua dos sistemas, corrigindo bugs e aprimorando o desempenho. O resultado
                            foi a entrega de um produto funcional, escalável e dentro do prazo estipulado, 
                            superando as expectativas do cliente e elevando a eficiência da plataforma. 🚀
                        </p>

                    </div>
                </div>
            </div>
        </div>`;

  }
  else if(year == 2025){
    form = `<div class="bg-modal-desc-exp">
            <div class="modal-desc-exp">
                <div class="modal-desc-exp-center">
                    <div class="ct-close-modal"><i class="bi bi-x" onclick="hideDetExp();"></i></div>
                    <div class="ct-modal-desc-cab">
                        <div>
                            <h1>RedMaxx Consultoria</h1>
                            <h2>Desenvolvedor .Net FullStack Jr</h2>
                        </div>
                        <img src="./img/iconExperienceRedMaxx.png">
                    </div>

                    <div class="ct-temp-enter">
                        <p>Nov 2024 até fev 2025 <i class="bi bi-calendar-event"></i> </p>
                    </div>

                    <div class="lineDescExp">
                        <div class="lineDescExp"></div>
                    </div>

                    <div class="details-function">

                        <p>
                            No projeto de migração e modernização de sistemas legados, fui responsável por refatorar 
                            aplicações do .NET Framework para .NET 8, desenvolvendo microsserviços, integrando APIs 
                            e automatizando processos para otimizar eficiência e estabilidade. Além disso, executei 
                            testes rigorosos e implementei melhorias na segurança e no desempenho, garantindo que 
                            os sistemas atendessem aos requisitos do projeto.
                        </p>

                        <p>
                            Minha atuação envolveu a migração de código, criação de microsserviços e aprimoramento 
                            da proteção dos dados, incluindo consultas SQL avançadas para melhorar a confiabilidade 
                            das operações. O resultado foi uma modernização bem-sucedida, proporcionando melhor 
                            performance, segurança reforçada e uma integração eficaz dos sistemas. 🚀
                        </p>

                    </div>
                </div>
            </div>
        </div>`;

  }
  else if(year == 0){
    form = `        <div class="bg-modal-desc-exp">
            <div class="modal-desc-exp">
                <div class="modal-desc-exp-center">
                    <div class="ct-close-modal"><i class="bi bi-x" onclick="hideDetExp();"></i></div>
                    <div class="ct-modal-desc-cab">
                        <div>
                            <h1>Tecban</h1>
                            <h2>Analista de segurança I</h2>
                        </div>
                        <img src="./img/iconExperienceTecban.png">
                    </div>

                    <div class="ct-temp-enter">
                        <p>Mar 2024 - atual <i class="bi bi-calendar-event"></i> </p>
                    </div>

                    <div class="lineDescExp">
                        <div class="lineDescExp"></div>
                    </div>

                    <div class="details-function">

                        <p>
                            Atuo no desenvolvimento de aplicações web e desktop, além de APIs, utilizando 
                            .NET e C#. No meu trabalho, também sou responsável pela criação de testes unitários 
                            em xUnit, garantindo qualidade e confiabilidade no código. Além disso, ofereço 
                            suporte no desenvolvimento de aplicações, auxiliando na implementação de soluções 
                            eficientes e robustas.
                        </p>

                        <p>
                            Além do ecossistema .NET, trabalho em projetos construídos com JavaScript e 
                            TypeScript, focando na escalabilidade e eficiência das aplicações. Minha 
                            abordagem envolve boas práticas de desenvolvimento, otimização de código e 
                            integração de tecnologias modernas para garantir alto desempenho e segurança 
                            nos sistemas criados. 🚀
                        </p>

                    </div>
                </div>
            </div>
        </div>`;

  }
  else{
    form = '';
  }

  $("#div-aux-modal").html(form);

}

function hideDetExp(){
  document.body.style.overflow = "";
  $("#div-aux-modal").empty();
}

function hideAllInfs() {

    $('#inf-aws').hide();
    $('#inf-tdd').hide();
    $('#inf-ai').hide();

}

function updateCoursed(course){

    document.querySelectorAll('.ct-dots-ball .dot-ball-course.active').forEach(function(dot) {
        dot.classList.remove('active');
    });

    if (course == "aws"){
        document.getElementById('aws').classList.add('active');

        hideAllInfs();
        $('#inf-aws').show();
    }

    else if (course == "tdd"){
        document.getElementById('tdd').classList.add('active');

        hideAllInfs();
        $('#inf-tdd').show();
    }

    else if (course == "ai"){
        document.getElementById('ai').classList.add('active');

        hideAllInfs();
        $('#inf-ai').show();
    }

    else {

    }

}

function openMenuMobile(){
    document.body.style.overflow = "hidden";
    const menu = document.getElementById("id_menu_mobile");
    menu.style.display = "flex";
}

function closeMenuMobile(){
    document.body.style.overflow = "";
    const menu = document.getElementById("id_menu_mobile");
    menu.style.display = "none";
}


function themeColor(theme){

    // --clear: #eaeaea;
    // --greenWater: #2a9d8f;
    // --blueClear: #264653;
    // --blueDark: #1a2228;
    // --blueMarDark: #12181c;
    // --dark: #121212;
    // --offSilver: #2a2a2a;

    const sobreMim = document.getElementById("red_sobreMim");
    const servicos = document.getElementById("red_servicos");
    const curriculo = document.getElementById("red_curriculo");
    const projetos = document.getElementById("h1_projetos");
    

    const descExp = document.querySelectorAll(".desc-exp");
    const ball = document.querySelectorAll(".ball");

    const icon_formacao = document.getElementById("icon_formacao");
    const h1_formacao = document.getElementById("h1_formacao");
    const h1_cetificacao = document.getElementById("h1_cetificacao");
    
    if(theme == "clear"){
        document.body.style.backgroundColor = "#eaeaea";

        sobreMim.style.color = "#121212";
        servicos.style.color = "#121212";
        curriculo.style.color = "#121212";
        projetos.style.color = "#121212";
        h1_cetificacao.style.color = "#121212";

        descExp.forEach(exp => {
            exp.style.fontWeight = "300";
        });

        ball.forEach(b => {
            b.style.color = "#eaeaea";
        });

        icon_formacao.style.color = "#121212";
        h1_formacao.style.color = "#121212";


    } else if (theme == "dark"){

        document.body.style.backgroundColor = "#12181c";

        sobreMim.style.color = "#eaeaea";
        servicos.style.color = "#eaeaea";
        curriculo.style.color = "#eaeaea";
        projetos.style.color = "#eaeaea";
        h1_cetificacao.style.color = "#121212";

        descExp.forEach(exp => {
            exp.style.fontWeight = "200";
        });

        ball.forEach(b => {
            b.style.color = "#eaeaea";
        });

        icon_formacao.style.color = "#eaeaea";
        h1_formacao.style.color = "#eaeaea";

        
    }


}


const container = document.querySelector('.projects-center');
let isDragging = false;
let startX = 0;
let scrollStart = 0;

const speedFactor = 2; // Ajuste esse valor para controlar a velocidade

container.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  scrollStart = container.scrollLeft;
});

container.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const deltaX = (currentX - startX) * speedFactor;
  container.scrollLeft = scrollStart - deltaX;
});

container.addEventListener('touchend', () => {
  isDragging = false;
});


