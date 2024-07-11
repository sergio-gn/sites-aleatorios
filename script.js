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
        'https://ffffidget.com/',
        'https://heeeeeeeey.com/',
        'https://strobe.cool/',
        'https://www.pudim.com.br/',
        'https://hackertyper.com/',
        'http://www.staggeringbeauty.com/',
        'http://www.donothingfor2minutes.com/',
        'https://llamafont.com/',
        'https://zombo.com/',
        'https://termo.pt/',
        'https://quickdraw.withgoogle.com/',
        'https://songtrivia2.io/',
        'https://chickenonaraft.com/',
        'https://theuselessweb.com/',
        'https://metazooa.com/',
        'https://www.chosic.com/random-songs-generator-with-links-to-spotify-and-youtube/',
        'https://randommer.io/random-movies',
        'https://www.astrology.com/compatibility/fortune-cookie.html',
        'http://weavesilk.com/',
        'https://haxiomic.github.io/GPU-Fluid-Experiments/html5/?q=Medium',
        'https://www.neogeocity.com/',
        'https://savethesounds.info/'
        
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
