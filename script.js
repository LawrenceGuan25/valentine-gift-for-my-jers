const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");
const introSound = document.getElementById("introSound");

startBtn.addEventListener("click", () => {
    
    introSound.volume = 0.5;
    introSound.play().catch(e => console.log("Audio play blocked"));

    
    startBtn.style.display = "none";

    
    setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            mainContent.style.display = "flex";
            
           
            bgMusic.play();
            startTyping();
            heartExplosion();
            setInterval(createFallingPetal, 300);
        }, 1000);
    }, 4000);
});

function startTyping() {
    const titleText = "Hi Jers 🌹";
    const messageText = "Looking back, ang dami na nating pinagdaanan, mula nung SHS tayo hanggang ngayon na College na. I know I promised myself back then na poprotektahan kita no matter what, kahit nung ni-reject moko dati. Pero hindi ko rin mapigilan, lalo na nung nakita ko kung gaano ka ka-sipag mag-aral, kung gaano ka katalino, at kung gaano ka ka-understanding sa lahat. Youre just so beautiful inside and out. Kahit alam kong may iba kang gusto ngayon, Im still here. Ayaw ko nang gawin yung dati na sumuko lang. this time, I want to keep trying. Gagawin ko lahat para mapatunayan sayo na seryoso ako, kasi you make my life more beautiful just by being in it. I love you, and I wont give up on us. Happy Valentine's Day! ❤️";
    let i = 0, j = 0;

    function typeTitle() {
        if (i < titleText.length) {
            document.getElementById("title").innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 80);
        } else { typeMessage(); }
    }

    function typeMessage() {
        if (j < messageText.length) {
            document.getElementById("text").innerHTML += messageText.charAt(j);
            j++;
            setTimeout(typeMessage, 40);
        }
    }
    typeTitle();
}

function createFallingPetal() {
    const petal = document.createElement("div");
    petal.classList.add("falling-petal");
    const size = Math.random() * 10 + 10 + "px";
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 6000);
}

document.getElementById("surpriseBtn").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";
    heartExplosion();
});

function heartExplosion() {
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = "50%";
        heart.style.top = "40%";
        heart.style.setProperty('--x', (Math.random() * 600 - 300) + "px");
        heart.style.setProperty('--y', (Math.random() * 600 - 300) + "px");
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 2000);
    }
}