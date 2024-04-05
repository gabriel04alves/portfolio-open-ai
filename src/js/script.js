const [option1, option2, option3, option4, option5, option6, option7] = document.querySelectorAll('.option');
const menu = document.querySelector('.menu');
const title_main = document.querySelector('.title-main>p');

option1.addEventListener('click', function() {
    menu.innerHTML = '';
    title_main.innerHTML = '';
    menu.innerHTML = "<div id='typewriter'></div>";
    const text = "This is a ChatGPT-like typing effect, simulating human typing with random delays and a blinking cursor. It also supports multiline text and ensures the cursor is displayed at the end of the last output character.";

    const typewriter = document.getElementById('typewriter');
    typewriter.style.color = 'white';
    let index = 0;
    function type() {
        if (index < text.length) {
            typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
            index++;
            setTimeout(type, Math.random() * 10);
        } else {
            typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">||</span>';
        }
    }
    // start typing
    type();
    menu.style.display = 'block';
});

option2.addEventListener('click', function() {
    menu.innerHTML = '';
    title_main.innerHTML = '';
    menu.innerHTML = "<h1 class='prompt'>Sora</h1>";
    menu.style.display = 'block';
});

option3.addEventListener('click', function () {
    menu.innerHTML = '';
    title_main.innerHTML = '';
    menu.innerHTML = "<h1 class='prompt'>Github Copilot</h1>";
    menu.style.display = 'block';
});

option4.addEventListener('click', function () {
    menu.innerHTML = '';
    title_main.innerHTML = '';
    menu.innerHTML = "<h1 class='prompt'>Duolingo Max</h1>";
    menu.style.display = 'block';
});
