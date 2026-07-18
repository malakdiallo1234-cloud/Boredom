document.addEventListener("DOMContentLoaded", () => {
    const loadingBar = document.getElementById("loading-bar");
    const alertText = document.getElementById("alert-text");
    const startBtn = document.getElementById("start-btn");
    const statusZone = document.getElementById("status-zone");
    const gameZone = document.getElementById("game-zone");

    // Lancement de l'animation d'accueil
    setTimeout(() => { loadingBar.style.width = "100%"; }, 200);
    setTimeout(() => { alertText.classList.remove("hidden"); }, 8000);
    setTimeout(() => { startBtn.classList.remove("hidden"); }, 9000);

    // Clic pour entrer dans le jeu
    startBtn.addEventListener("click", () => {
        statusZone.classList.add("hidden");
        gameZone.classList.remove("hidden");
    });
});

// Gestion dynamique des pièces
function loadRoom(roomName) {
    const screen = document.getElementById("room-content");
    
    if (roomName === 'music') {
        document.body.style.backgroundColor = "#0d1117"; // Ambiance un peu plus bleue
        screen.innerHTML = `
            <p style="font-size:0.9rem; font-style:italic; margin-bottom:15px;">I thought this room needed a soundtrack.</p>
            <p style="font-size: 0.8rem; color: var(--accent-brown);">“You once told me brown was your favorite color… so I figured this place should feel a little more like you.”</p>
            <div class="cassette" id="cassette-tap">
                <div class="cassette-label">
                    <span style="font-size:0.7rem; color:#121212; font-weight:bold; text-align:left;">Mixtape #1</span>
                    <div class="wheels">
                        <div class="wheel" id="w1"></div>
                        <div class="wheel" id="w2"></div>
                    </div>
                </div>
            </div>
            <p id="music-status" style="font-size:0.8rem; color:var(--accent-blue);">Click the tape to play...</p>
            <div id="spotify-box" class="hidden" style="width:100%; margin-top:15px;">
                <p style="color:var(--accent-green); font-size:0.85rem; font-weight:bold; margin-bottom:10px;">🎵 Reward unlocked. <br>Insomnia + Kamaal</p>
                <iframe src="https://open.spotify.com/embed/playlist/58mXmP0WzFvTee8rUAnv4W?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        `;
        
        document.getElementById("cassette-tap").addEventListener("click", () => {
            document.getElementById("w1").classList.add("spinning");
            document.getElementById("w2").classList.add("spinning");
            document.getElementById("music-status").classList.add("hidden");
            setTimeout(() => {
                document.getElementById("spotify-box").classList.remove("hidden");
                document.getElementById("inv-music").classList.add("unlocked");
            }, 1200);
        });

    } else if (roomName === 'cafe') {
        document.body.style.backgroundColor = "#1b1512"; // Ambiance marron chaud / Café
        screen.innerHTML = `
            <p style="font-size:0.9rem; margin-bottom:10px;">🎮 Roblox Café</p>
            <p style="font-size:0.8rem; color:#aaa;">Order something to eat...</p>
            <div class="cafe-options">
                <button class="action-btn" onclick="orderFood('🍕 Pizza')">🍕 Pizza</button>
                <button class="action-btn" onclick="orderFood('🍔 Burger')">🍔 Burger</button>
                <button class="action-btn" onclick="orderFood('🍟 Fries')">🍟 Fries</button>
                <button class="action-btn" onclick="orderFood('🥤 Drink')">🥤 Drink</button>
            </div>
            <div id="cafe-result" style="margin-top:20px; font-size:0.9rem;"></div>
        `;

    } else if (roomName === 'cat') {
        document.body.style.backgroundColor = "#1c1a16"; // Ambiance crème / cosy
        screen.innerHTML = `
            <p style="font-size:0.9rem; margin-bottom:15px;">🐈 Cat Corner</p>
            <p style="font-size:0.95rem; margin-bottom:15px;">Quiz: Which cat is secretly judging us right now? 😭</p>
            <button class="action-btn" style="margin-bottom:8px;" onclick="answerCat(true)">The sleepy one on the left</button>
            <button class="action-btn" onclick="answerCat(false)">Trick question, all of them</button>
            <p id="cat-result" style="margin-top:15px; font-size:0.85rem; color:var(--accent-green);"></p>
        `;

    } else if (roomName === 'pigeon') {
        document.body.style.backgroundColor = "#121814"; // Tons Verts / Papier ancien
        screen.innerHTML = `
            <p style="font-size:0.9rem; margin-bottom:15px;">📬 Pigeon Post</p>
            <button class="action-btn" id="pigeon-btn">🕊️ Send Mail</button>
            <div id="pigeon-animation" style="margin-top:20px; font-size:1.1rem;"></div>
        `;

        document.getElementById("pigeon-btn").addEventListener("click", () => {
            const anim = document.getElementById("pigeon-animation");
            anim.innerHTML = "🕊️ 💨 <i>Le pigeon s'envole...</i>";
            setTimeout(() => { anim.innerHTML = "🕊️ 📮 <i>The letter has been dropped.</i>"; }, 2000);
            setTimeout(() => { 
                anim.innerHTML = `<p style="font-size:0.95rem; font-style:italic; border-left: 2px solid var(--accent-brown); padding-left:10px; margin-top:10px;">Until we don’t need pigeons anymore. ❤️</p>`;
                document.getElementById("inv-pigeon").classList.add("unlocked");
            }, 4000);
        });
    }
}

function orderFood(item) {
    const res = document.getElementById("cafe-result");
    res.innerHTML = `Preparing your order of ${item}...`;
    setTimeout(() => { res.innerHTML = `Preparing your order of ${item}...<br><br><span style="color:red;">❌ Distance detected.</span>`; }, 1800);
    setTimeout(() => { 
        res.innerHTML += `<br><br>Virtual dinner served. 😭`; 
        document.getElementById("inv-cafe").classList.add("unlocked");
    }, 3500);
}

function answerCat(isLeft) {
    const res = document.getElementById("cat-result");
    if(isLeft) {
        res.innerHTML = "Correct. She knows everything. 🐈 Certificate unlocked !";
    } else {
        res.innerHTML = "Honestly? Highly probable. 🐈 Certificate unlocked !";
    }
    document.getElementById("inv-cat").classList.add("unlocked");
}
