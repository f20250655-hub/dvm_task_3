//navbar
function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    document.getElementById("clock").textContent =
        ` ${hours}:${minutes}:${seconds}${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    })

}, { threshold: 0.2 })

const navBar=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
    navBar.classList.add('scrolled');
}
    else{
        navBar.classList.remove('scrolled');
    }
})

//basement grotseque



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.outline').style.transform = `translateY(${scrollY * -0.2}px)`
    document.querySelector('.solid').style.transform = `translateY(${scrollY * -0.4}px)`;
})

function splitWord(eleclass, startDelay) {
    const element = document.querySelector(eleclass);
    const text = element.textContent;
    element.textContent = "";

    text.split("").forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add("letter");
        span.style.transitionDelay = `${startDelay + Math.sqrt(index) * 0.15}s`;
        element.appendChild(span);
    });
}
splitWord(".outline", 0);
splitWord(".solid", 0.3);

setTimeout(() => {
    document.querySelectorAll('.letter').forEach((span) => { span.classList.add('show'); });
}, 250
);
const scroll_down = document.querySelector(".scroll-down");
scroll_down.classList.add("appear");



const aboutText = document.querySelectorAll('.about-text');
const aboutLetters = document.querySelectorAll('.about-letters');
const letterOutline = document.querySelectorAll('.letter-outline');
const letterMain = document.querySelectorAll('.letter-mains');


aboutLetters.forEach((item) => observer.observe(item));
setTimeout(() => {
    aboutText.forEach((item) => observer.observe(item));
}, 700);
setTimeout(() => {
    letterOutline.forEach((item) => observer.observe(item));
    letterMain.forEach((item) => observer.observe(item));
}, 1500)


//alphabets 



const alpha1 = document.querySelector(".alpha1");
const alpha2 = document.querySelector(".alpha2");
const alpha3 = document.querySelector(".alpha3");

let alphabet1 = document.querySelector(".alphabet_para1");
let text1 = alphabet1.textContent;
let alphabet2 = document.querySelector(".alphabet_para2");
let text2 = alphabet2.textContent;
let alphabet3 = document.querySelector(".alphabet_para3");
let text3 = alphabet3.textContent;

alpha1.innerHTML = text1.split('').map((letter) => {
    return `<div class="alphabets_div">${letter}</div>`
}).join('');
alpha2.innerHTML = text2.split('').map((letter) => {
    return `<div class="alphabets_div">${letter}</div>`
}).join('');
alpha3.innerHTML = text3.split('').map((letter) => {
    return `<div class="alphabets_div">${letter}</div>`
}).join('');




function callObserver(eleclass, delay) {
    const element = document.querySelector(eleclass);

    const alphaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
 element.querySelectorAll('.alphabets_div').forEach((div, index) => {
setTimeout(() => {
div.classList.add('visible');
}, delay + index * 30);});
}
});
}, { threshold: 0.2 });
    alphaObserver.observe(element); 
}

callObserver('.alpha1', 0);
callObserver('.alpha2', 500);
callObserver('.alpha3', 1200);

observer.observe(document.querySelector('.alpha-background'));
observer.observe(document.querySelector('.hero-img'));





//characters

const characters = [
    'A', 'Á', 'Â', 'Ä', 'À', 'Å', 'Ã', 'Æ', 'B', 'C', 'Ç', 'D',
    'Ð', 'E', 'É', 'Ê', 'Ë', 'È', 'F', 'G', 'H', 'I', 'Í', 'Î',
    'Ï', 'Ì', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'Ó', 'Ô', 'Õ',
    'Ò', 'Ø', 'Ö', 'Œ', 'P', 'Þ', 'Q', 'R', 'S', 'ẞ', 'T', 'U',
    'Ú', 'Û', 'Ü', 'Ù', 'V', 'W', 'Ẃ', 'Ŵ', 'Ẇ', 'Ẉ', 'X', 'Y',
    'Ý', 'Ŷ', 'Ÿ', 'Ỳ', 'Z', 'a', 'á', 'â', 'ä', 'à', 'å', 'ã',
    'æ', 'b', 'c', 'ç', 'd', 'đ', 'e', 'é', 'ê', 'ë', 'è', 'f',
    'g', 'h', 'i', 'ı', 'ĩ', 'ī', 'l', 'ij', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'ó', 'ô', 'õ', 'ò', 'ø', 'ö', 'œ', 'p', 'þ',
    'q', 'r', 's', 'ß', 't', 'u', 'ú', 'û', 'ü', 'ù', 'v', 'w',
    'ẃ', 'ŵ', 'ẇ', 'ẉ', 'x', 'y', 'ý', 'ŷ', 'ÿ', 'ỳ', 'z', '¨',
    "'", '.', '·', ':', '-', '&', '†', '‡', '!', '¡',
    '?', '¿', '*', '#', '/', '\\', '–', '—', '_',
    '(', ')', '{', '}', '[', ']', '…',
    '\u2018', '\u2019',
    '«', '»', '‹', '›', '"',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@'
];

const grid = document.getElementById('characters-grid');
const viewAllBtn = document.getElementById('view-all-btn');
characters.forEach((char) => {
    const tile = document.createElement('div');
    tile.classList.add('char-tile');
    tile.textContent = char;
    grid.appendChild(tile);
});
const wrapper = document.getElementById('characters-grid-wrapper');
viewAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.toggle('expanded');
    viewAllBtn.textContent = wrapper.classList.contains('expanded')
        ? 'SHOW LESS ↑'
        : 'VIEW ALL ↗';
});


//catacoms

window.addEventListener('scroll', () => {
    document.querySelectorAll('.card-bottom p').forEach((item, index) => {
        const section = document.querySelector('.card-bottom');
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const value_scroll = -rect.top; 
        item.style.transform = `translateY(${value_scroll * 0.03 * (index + 1)}px)`;
    });
});

//slider section


const text = document.getElementById("try-font-text");
const metaDisplay = document.getElementById("meta-display");
const sizeValue = document.getElementById("size-value");
const trackingValue = document.getElementById("tracking-value");
const leadingValue = document.getElementById("leading-value");
const sizeSlider = document.getElementById("size-slider");
const trackingSlider = document.getElementById("tracking-slider");
const leadingSlider = document.getElementById("leading-slider");


function updateMeta() {
    metaDisplay.textContent = `S:${sizeSlider.value}PX|T:${trackingSlider.value}px|L:${leadingSlider.value}%`;
}
sizeSlider.addEventListener('input', () => {
    text.style.fontSize = sizeSlider.value + 'px';
    sizeValue.textContent = sizeSlider.value + 'PX';
    updateMeta();
});
trackingSlider.addEventListener('input', () => {
    text.style.letterSpacing = trackingSlider.value + 'px';
    trackingValue.textContent = trackingSlider.value + 'px';
    updateMeta();
});
leadingSlider.addEventListener('input', () => {
    text.style.lineHeight = leadingSlider.value + '%';
    leadingValue.textContent = leadingSlider.value + '%';
    updateMeta();
});



const cityItems = document.querySelectorAll('.cities p');


cityItems.forEach((item) => observer.observe(item));
const cataCombHeading = document.querySelectorAll('.catacomb-heading h2');
const cataCombImg = document.querySelectorAll('.catacomb-img');
const cataCombDescription = document.querySelectorAll('.catacomb-description p');

cataCombHeading.forEach((item) => observer.observe(item));
cataCombImg.forEach((item) => observer.observe(item));
cataCombDescription.forEach((item) => observer.observe(item));

const tryFontHeader = document.querySelectorAll('.try-font-header');
const tryFontInput = document.querySelectorAll('.try-font-input');
tryFontHeader.forEach((item) => observer.observe(item));
tryFontInput.forEach((item) => observer.observe(item));

//showcase img

window.addEventListener('scroll', () => {
    const section = document.querySelector('.showcase-img');
    const rect = section.getBoundingClientRect();

    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const value_scroll= -rect.top;
    section.querySelector('img').style.transform = 
        `translateY(${value_scroll * 0.03}px)`; 
});

//billboard-para
window.addEventListener('scroll',()=>{
    const section=document.querySelector("#billboard-para");
    const rect=section.getBoundingClientRect();
    if(rect.top>window.innerHeight||rect.bottom<0) return;
    const value_scroll=rect.top;
    section.style.transform=`translateY(${value_scroll*0.09}px)`;
})
//billboard img
window.addEventListener('scroll',()=>{
    const section=document.querySelector('.billboard-img');
    const rect=section.getBoundingClientRect();
    if(rect.top>window.innerHeight||rect.bottom<0)return;
    const value_scroll=rect.top;
    section.style.transform=`translateY(${value_scroll*0.09}px)`
})
const alphabetsP1 = document.querySelectorAll('.alphabets_para1');
const alphabetsP2 = document.querySelectorAll('.alphabets_para2');
const alphabetsP3 = document.querySelectorAll('.alphabets_para3');



//last bottom animation


(function () {
    const container = document.getElementById('footerLetters');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function createLetter(targetX, targetY) {
        const el = document.createElement('span');
        el.className = 'falling-letter';
        el.textContent = letters[Math.floor(Math.random() * letters.length)];

        const size = [50, 60, 70, 80][Math.floor(Math.random() * 4)];
        el.style.fontSize = size + 'px';
        el.style.position = 'absolute';
        el.style.lineHeight = '1';
        el.style.left = targetX + 'px';

        const startOffset = 120 + Math.random() * 100;
        el.style.top = `-${startOffset}px`;
        el.style.opacity = '0';

        const rotation = (Math.random() - 0.5) * 60;
        const isWhite = Math.random() > 0.5;
        el.style.color = isWhite ? 'white' : 'transparent';
        el.style.webkitTextStroke = isWhite ? '0' : '1.5px white';

        container.appendChild(el);

        const travelY = targetY + startOffset;
        animateLetter(el, rotation, travelY);
    }

    function animateLetter(el, rotation, floorY) {
        const duration = 400 + Math.random() * 600;
        const bounceH = 10 + Math.random() * 25;
        const delay = Math.random() * 3000;
        let start = null;

        function fall(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            el.style.transform = `translateY(${p * p * floorY}px) rotate(${rotation}deg)`;
            el.style.opacity = String(Math.min(p * 3, 1));
            if (p < 1) requestAnimationFrame(fall);
            else { start = null; requestAnimationFrame(bounce1); }
        }
        function bounce1(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / 220, 1);
            el.style.transform = `translateY(${floorY - Math.sin(p * Math.PI) * bounceH}px) rotate(${rotation}deg)`;
            if (p < 1) requestAnimationFrame(bounce1);
            else { start = null; requestAnimationFrame(bounce2); }
        }
        function bounce2(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / 160, 1);
            el.style.transform = `translateY(${floorY - Math.sin(p * Math.PI) * bounceH * 0.25}px) rotate(${rotation}deg)`;
            if (p < 1) requestAnimationFrame(bounce2);
            else el.style.transform = `translateY(${floorY}px) rotate(${rotation}deg)`;
        }

        setTimeout(() => requestAnimationFrame(fall), delay);
    }

    function startAnimation() {
        container.innerHTML = '';

        const W = container.offsetWidth;
        const H = container.offsetHeight;

        const cols = 8;
        const rows = 7;
        const slotW = W / cols;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * slotW + Math.random() * (slotW * 0.2);
                const y = row === rows - 1
                    ? H - 85
                    : (row / (rows - 1)) * (H - 85);
                createLetter(x, y);
            }
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.footer'));
})();

//for mobile



//sliding letters

function initCharactersTicker() {
    if (window.innerWidth > 900) return;

    const grid = document.querySelector('.characters-grid');
    if (!grid) return;

    const tiles = Array.from(grid.children);
    grid.innerHTML = '';
    const rowSize = 4;
    const numRows = 4;
    const rowsData = [];
    for (let i = 0; i < numRows; i++) {
        const start = i * rowSize;
        rowsData.push(tiles.slice(start, start + rowSize));
    }

    const container = document.createElement('div');
    container.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    width: 100%;
  `;

    const track = document.createElement('div');
    track.id = 'char-ticker-track';
    track.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: max-content;
    will-change: transform;
  `;

    rowsData.forEach((rowTiles) => {
        const row = document.createElement('div');
        row.style.cssText = `
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: nowrap;
    `;

        rowTiles.forEach(t => row.appendChild(t));

        for (let c = 0; c < 6; c++) {
            rowTiles.forEach(t => {
                row.appendChild(t.cloneNode(true));
            });
        }

        track.appendChild(row);
    });

    container.appendChild(track);
    grid.appendChild(container);
    let x = 0;
    const speed = 1.8;
    let paused = false;

    grid.addEventListener('touchstart', () => paused = true);
    grid.addEventListener('touchend', () => paused = false);

    function getTileWidth() {
        const firstTile = track.querySelector('.char-tile');
        return firstTile ? firstTile.offsetWidth + 8 : 60;
    }

    function tick() {
        if (!paused) {
            x += speed;
            const loopWidth = getTileWidth() * rowSize;
            if (x >= loopWidth) x = 0;

            track.style.transform = `translateX(${-x}px)`;
        }
        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

initCharactersTicker();

//updating slider for short screen

function updateSlider() {
    if (window.innerWidth < 900) {
        sizeSlider.value = 32;
        sizeSlidermin = 14;
        sizeSlider.max = 100;
    }
    else {
        sizeSlider.value = 108;
        sizeSlider.min = 21;
        sizeSlider.max = 195;
    }
    sizeSlider.dispatchEvent(new Event('input'));
}
updateSlider();
window.addEventListener('resize', updateSlider);

// dropdown
const dropDown = document.getElementById('selectionSelect');
const version = document.getElementById('version');
const feature = document.getElementById('feature');
const tweet = document.getElementById('tweet');


dropDown.addEventListener('change', (e) => {
    const id = e.target.value;

    version.classList.remove('active');
    feature.classList.remove('active');
    tweet.classList.remove('active');
    if (id === 'version') {
        version.classList.add('active');
    }
    if (id === 'feature') {
        feature.classList.add('active');
    }
    if (id === 'tweet') {
        tweet.classList.add('active');
    }
})
version.classList.add('active');