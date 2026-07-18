const bar = document.getElementById("bar");
const status = document.getElementById("status");
const button = document.getElementById("startBtn");

let progress = 0;

const messages = [
  "Checking Petra's boredom level...",
  "Looking for cats...",
  "Preparing snacks...",
  "Loading Roblox memories...",
  "Finding the perfect playlist...",
  "Mission almost ready..."
];

let index = 0;

const loading = setInterval(() => {

  progress++;
  bar.style.width = progress + "%";

  if(progress % 18 === 0 && index < messages.length-1){
      index++;
      status.textContent = messages[index];
  }

  if(progress >= 100){

      clearInterval(loading);

      status.innerHTML="✨ Mission ready.";

      button.disabled=false;

  }

},35);

button.onclick=home;

function home(){

document.querySelector(".card").innerHTML=`

<div class="tag">boredom.zip</div>

<h1>Hey Petra ☀️</h1>

<p style="line-height:1.8;margin:20px 0;color:#555;">
I heard someone was bored...

<br><br>

So I made you a tiny place to explore.

<br><br>

Nothing serious.

Just click around.

🤎

</p>

<button id="go">Let's go →</button>

`;

document.getElementById("go").onclick=menu;

}

function menu(){

document.querySelector(".card").innerHTML=`

<div class="tag">Choose a room</div>

<h1>Where first?</h1>

<div class="grid">

<button onclick="music()">🎵 Music Room</button>

<button onclick="roblox()">🎮 Roblox Café</button>

<button onclick="cats()">🐈 Cat Corner</button>

<button onclick="pigeon()">📮 Pigeon Post</button>

</div>

`;

}

function back(){

menu();

}

function music(){

document.querySelector(".card").innerHTML=`

<div class="tag">🎵 Music Room</div>

<h1>Insomnia + Kamaal</h1>

<p class="note">

I thought every adventure needed a soundtrack.

</p>

<iframe style="border-radius:18px;margin-top:20px;"
src="https://open.spotify.com/embed/playlist/37i9dQZF1EJtv6JxFG34IH?utm_source=generator"
width="100%"
height="352"
frameborder="0"
allowfullscreen=""
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>

<button style="margin-top:20px;" onclick="back()">← Back</button>

`;

}

function roblox(){

document.querySelector(".card").innerHTML=`

<div class="tag">🎮 Roblox Café</div>

<h1>Virtual Dinner</h1>

<p class="note">

Choose today's meal.

</p>

<div class="grid">

<button onclick="meal('🍕 Pizza')">🍕 Pizza</button>

<button onclick="meal('🍔 Burger')">🍔 Burger</button>

<button onclick="meal('🍟 Fries')">🍟 Fries</button>

<button onclick="meal('🍗 Fried chicken')">🍗 Chicken</button>

</div>

<button style="margin-top:20px;" onclick="back()">← Back</button>

`;

}

function meal(food){

alert(food + "\\n\\nDistance detected.\\nVirtual dinner started. 😭");

}

function cats(){

document.querySelector(".card").innerHTML=`

<div class="tag">🐈 Cat Corner</div>

<h1>Important Question</h1>

<p class="note">

Is your cat still secretly judging everyone?

</p>

<div class="grid">

<button onclick="alert('Correct answer. 😭')">Absolutely.</button>

<button onclick="alert('Wrong. The correct answer is yes. 😭')">No.</button>

</div>

<button style="margin-top:20px;" onclick="back()">← Back</button>

`;

}

function pigeon(){

document.querySelector(".card").innerHTML=`

<div class="tag">🕊️ Pigeon Post</div>

<h1>A little letter</h1>

<div style="background:white;padding:18px;border-radius:18px;margin:20px 0;color:#555;line-height:1.8;">

You once said that pigeons carrying letters was romantic.

<br><br>

So...

until we don't need pigeons anymore.

🕊️

</div>

<button onclick="back()">← Back</button>

`;

}
