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
                    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
                    index++;
                    setTimeout(typing, Math.random() * 15);
                } else {
                    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
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
                    <i class="icon-user bi bi-person-circle"></i>
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
        
    });

    option3.addEventListener('click', function (event) {
       
    });

    option4.addEventListener('click', function (event) {
       
    });

    option5.addEventListener('click', function (event) {
       
    });

    option6.addEventListener('click', function (event) {
       
    });

    option7.addEventListener('click', function (event) {
       
    });
});