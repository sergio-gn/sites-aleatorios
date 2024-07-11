document.addEventListener('DOMContentLoaded', () => {
    const links = [
        'https://www.window-swap.com/',
        'https://asoftmurmur.com/',
        'https://piruleta.com.br/',
        'https://zoomquilt.org/',
        'https://radio.garden/',
        'https://pointerpointer.com/',
        'https://thisissand.com/',
        'https://cat-bounce.com/',
        'http://endless.horse/',
        'https://eelslap.com/',
        'https://ffffidget.com/'
    ];

    const anchor = document.getElementById('random-link');

    function setRandomLink() {
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];
        anchor.href = randomLink;
    }

    // Set a random link on page load
    setRandomLink();

    // Set a new random link when the anchor is clicked
    anchor.addEventListener('click', (event) => {
        setRandomLink();
    });
});
