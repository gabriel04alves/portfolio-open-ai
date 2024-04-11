document.addEventListener('DOMContentLoaded', function() {
    const [option1, option2, option3, option4, option5, option6, option7] = document.querySelectorAll('.option');
    const menu = document.querySelector('.menu');
    const title_main = document.querySelector('.title-main>p');

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
    function question(text) {
        menu.innerHTML = "<div id='typequestion'></div>";
        const typequestion = document.getElementById('typequestion');
        typequestion.style.color = 'white';
        let index = 0;
        function typing() {
            if (index < text.length) {
            typequestion.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
                index++;
                setTimeout(typing, Math.random() * 15);
            } else {
            typequestion.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
            }
        }
        typing();
        menu.style.display = 'block';
    }

    function switchDiv() {
        const div = document.getElementById('title-main')
        div.style.display = "none";
    }

    option1.addEventListener('click', function(event) {
    event.preventDefault();

    question("isso é uma pergunta"); 
    setTimeout(function() {
        type("This is a ChatGPT-like typing effect, simulating human typing with random delays and a blinking cursor. It also supports multiline text and ensures the cursor is displayed at the end of the last output character.");
    }, 3000); 
    switchDiv();
    });

    option2.addEventListener('click', function(event) {
        event.preventDefault();
        type("Sora");
        switchDiv()
    });

    option3.addEventListener('click', function (event) {
        event.preventDefault();
        type("Github Copilot");
        switchDiv()
    });

    option4.addEventListener('click', function (event) {
        event.preventDefault();
        type("Duolingo Max");
        switchDiv()
    });

    option5.addEventListener('click', function (event) {
        event.preventDefault();
        type("Quem sou eu?");
        switchDiv()
    });

    option6.addEventListener('click', function (event) {
        event.preventDefault();
        type("Habilidades");
        switchDiv()
    });

    option7.addEventListener('click', function (event) {
        event.preventDefault();
        type("Meus projetos");
        switchDiv()
    });
});
