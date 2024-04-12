document.addEventListener('DOMContentLoaded', function() {
    const [option1, option2, option3, option4, option5, option6, option7] = document.querySelectorAll('.option');
    const menu = document.querySelector('.menu');
   
    function typingAndWriter(question, answer) {
        function type(text) {
            menu.innerHTML = "<div id='typewriter'></div>";
            const typewriter = document.getElementById('typewriter');
            typewriter.style.color = 'white';
            let index = 0;
            function typing() {
                if (index < text.length) {
                    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
                    index++;
                    setTimeout(typing, Math.random() * 30);
                } else {
                    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
                }
            }
            typing();
            menu.style.display = 'block';
        }
    
        const hideTitle = () => {
            const div = document.getElementById('title-main');
            div.style.display = "none";
        };
    
        hideTitle();
    
        content = {
            question: question,
            answer: answer
        }
        
        const text = `
            <div class="content-hover">
                <div class="question-div">
                    <i class="icon-user bi bi-person-circle"></i>
                    <div class="text">
                        <p class="user-text">You</p>
                        <p class="text">${question}</p> 
                    </div>
                </div>
                <div class="answer-div">
                    <img class="icon-open-ai" src="/portifolio-open-ai/src/assets/images/open-ai-logo-circle.svg" alt="">
                    <div class="text">
                        <p class="user-text">ChatGPT</p>
                        <p class="text">${answer}</p>
                    </div>
                </div>    
            </div>
        `;
        
        type(text);
    }

    option1.addEventListener('click', function(event) {
        event.preventDefault();
        typingAndWriter(
            'Conte me sobre o Dall E-3', 
            'O ChatGPT, integrado com o DALL·E 3, é uma ferramenta que permite aos usuários transformar descrições textuais em imagens detalhadas e precisas.'
        );
    });

    option2.addEventListener('click', function(event) {
        event.preventDefault();
        typingAndWriter(
            'Como é sua participação no Sora?',
            'Minha capacidade de entender linguagem natural permite que o Sora interprete comandos textuais, gerando conteúdo visual dinâmico. Isso inclui criar legendas descritivas para dados visuais e animar imagens estáticas, resultando em vídeos mais precisos e inovadores. Essa integração impulsiona a criação de conteúdo visual avançado e abre caminho para modelos que simulam o mundo real, um passo importante para a inteligência geral artificial (AGI).'
        );
    });

    option3.addEventListener('click', function (event) {
        event.preventDefault();
        typingAndWriter(
            'O que você faz no GitHub Copilot?',
            'Integrado ao GitHub Copilot, sugiro trechos de código e completo linhas ou blocos automaticamente. Ao escrever uma função em Python, por exemplo, prevejo o que o desenvolvedor está tentando fazer e sugiro a conclusão da função. Isso economiza tempo, evita erros e melhora a qualidade do código.'
        );
    });

    option4.addEventListener('click', function (event) {
        event.preventDefault();
        typingAndWriter(
            'Como você é integrado ao Duolingo Max?',
            'No Duolingo Max, ajudo os usuários a aprender idiomas de forma personalizada. Ofereço explicações detalhadas sobre gramática e vocabulário, criando exercícios customizados. Em conversações simuladas, forneço respostas em tempo real, imitando interações humanas para prática dinâmica.'
        );
    });

    option5.addEventListener('click', function (event) {
        event.preventDefault();
        typingAndWriter(
            'Quem é você?',
            'Eu sou o ChatGPT, uma inteligência artificial criada pela OpenAI. Eu fui projetado para ser uma inteligência artificial amigável e útil. Meu objetivo é ajudar os usuários dando informações, respondendo perguntas e engajando em conversas de maneira útil e respeitosa.'
        );

    });

    option6.addEventListener('click', function (event) {
        event.preventDefault();
        typingAndWriter(
            'Quais são as suas habilidades?',
            'Como um modelo de linguagem de IA, possuo habilidades que incluem compreensão e interpretação da linguagem humana, geração de texto semelhante ao humano, manutenção de contexto em diálogos, acesso a informações para respostas relevantes, criação de texto criativo e original, tradução entre idiomas, sumarização de textos mantendo informações-chave, sugestão de completos para textos parciais, resposta a perguntas factuais e engajamento em conversas significativas sobre diversos tópicos. Essas habilidades são resultado do meu treinamento em vastos volumes de dados textuais e algoritmos avançados de aprendizado de máquina.'
        );
       
    });

    option7.addEventListener('click', function (event) {
        event.preventDefault();
        typingAndWriter(
            'Posso te encontrar em quais projetos?',
            'Como uma IA da OpenAI, estou em vários projetos. No Be My Eyes, auxilio usuários com deficiência visual. No Stripe Docs, resumo documentação em linguagem natural. Na Morgan Stanley, organizo conhecimento em gestão de patrimônios. Ajudo a preservar o islandês para o governo da Islândia. Na Khan Academy, sou o tutor virtual Khanmigo. Em projetos como ChatSonic, melhoro interações com chatbots. Com Petey, forneço respostas precisas. Na Legaltech Aline AI, analiso documentos legais. Amplemarket AI Copywriter gera textos de vendas. ChatGPT Plus oferece recursos avançados. E no Bing da Microsoft, melhoro resultados de busca. Esses projetos mostram minha utilidade em diversos contextos.'
        );       
    });
});