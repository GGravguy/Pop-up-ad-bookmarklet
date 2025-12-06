(function() {
  const scamImages = [
    "https://media.tenor.com/D4BpNeRp4v0AAAAm/deal-or-no-deal-deal.webp",
    "https://media.tenor.com/esO1vsykewsAAAAM/popup-ad-popup-ads.gif",
    "https://media.tenor.com/PonMqjSWJrcAAAAM/fake-download-button-fake.gif",
    "https://media.tenor.com/EfD1nHDdoaoAAAAM/free-food-tag.gif",
    "https://media.tenor.com/TtPuU_GUjmIAAAAM/ice-cream-ad.gif",
    "https://media.tenor.com/MhhCa8QE_UsAAAAm/free-roblox.webp",
    "https://media.tenor.com/0couTsaRNvoAAAAM/robux.gif",
    "https://media.tenor.com/BRuXugTySf0AAAAM/get-free-v-bucks-v-bucks-funny.gif",
    "https://media.tenor.com/bTsjXytQtHIAAAAM/nitro.gif",
    "https://media.tenor.com/eXdlLI6laucAAAAm/giveaway-giveaways.webp"
  ];
  
  const adTexts = [
    "🚨 Limited Time Offer! 🚨<br>Click now and claim your prize!",
    "🎉 Congratulations! 🎉<br>You've won something special!",
    "🔥 Don't Miss Out! 🔥<br>Exclusive deal for you!",
    "🎁 You've unlocked a secret gift! 🎁<br>Claim it now!",
    "💥 Big Sale! 💥<br>Up to 70% off, act fast!",
    "⚡ Instant Win! ⚡<br>Click here to claim your reward!",
    "✨ It's your lucky day! ✨<br>Get a free item with every purchase!",
    "🚨 Urgent! 🚨<br>Last chance to get your free gift!",
    "🛍️ Shop Now! 🛍️<br>Special offer just for you!",
    "🎉 You're a Winner! 🎉<br>Click to claim your exclusive prize!",
    "💎 Surprise! 💎<br>You've unlocked a special deal!",
    "🎁 Free Gift Inside! 🎁<br>Click to claim your gift!",
    "🎉 You've been selected! 🎉<br>Get your free gift now!",
    "🔥 Hot Deal Alert! 🔥<br>Limited time only!",
    "💥 Flash Sale! 💥<br>Get it before it’s gone!",
    "💥 Get Your Free Gift Now! 💥<br>Claim it while supplies last!",
    "🎁 Click here to claim your exclusive deal! 🎁",
    "🛒 Huge Discounts Inside! 🛒<br>Don’t miss out on these deals!",
    "🌟 Incredible Offer! 🌟<br>Unlock your special deal now!",
    "🚨 Limited Stock! 🚨<br>Hurry before it’s gone!",
    "⚡ 24-Hour Sale! ⚡<br>Up to 90% off everything!"
  ];
  
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Function to play a random sound
  function playRandomSound() {
    const sounds = [
      "https://www.myinstants.com/media/sounds/windows-xp-exclamation-sound-by-s1h5.mp3",
      "https://www.myinstants.com/media/sounds/erro.mp3"
    ];
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
  }

  function createFakeAd() {
    const ad = document.createElement('div');
    const width = rand(250, 500);
    const height = rand(150, 300);
    
    ad.style.position = 'fixed';
    ad.style.top = rand(5, 85) + '%';
    ad.style.left = rand(5, 85) + '%';
    ad.style.width = width + 'px';
    ad.style.height = height + 'px';
    ad.style.backgroundColor = `rgba(${rand(0,255)},${rand(0,255)},${rand(0,255)},0.8)`;
    ad.style.border = `${rand(2, 8)}px solid rgba(${rand(0,255)}, ${rand(0,255)}, ${rand(0,255)}, 1)`;
    ad.style.borderRadius = rand(5, 15) + 'px';
    ad.style.boxShadow = `0 ${rand(5, 15)}px ${rand(10, 20)}px rgba(0, 0, 0, 0.4)`;
    ad.style.zIndex = 999999;
    ad.style.overflow = "hidden";
    ad.style.display = "flex";
    ad.style.justifyContent = "center";
    ad.style.alignItems = "center";
    ad.style.flexDirection = "column";
    ad.style.padding = "5px";
    ad.style.cursor = "pointer";
    
    ad.onclick = function() {
      window.location.href = "https://social.mtdv.me/giveaways/Ad-click-free-givaway";
    };

    // Create the image element
    const img = document.createElement("img");
    img.src = scamImages[Math.floor(Math.random() * scamImages.length)];
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.maxHeight = "60%";
    img.style.objectFit = "contain";
    
    const imagePosition = rand(0, 2);
    if (imagePosition === 0) {
      img.style.position = "absolute";
      img.style.top = "10px";
    } else if (imagePosition === 1) {
      img.style.position = "absolute";
      img.style.bottom = "10px";
    } else {
      img.style.position = "relative";
    }

    // Create the text element
    const text = document.createElement("div");
    text.innerHTML = adTexts[Math.floor(Math.random() * adTexts.length)];
    text.style.color = "white";
    text.style.fontSize = rand(14, 20) + "px";
    text.style.textAlign = "center";
    text.style.marginTop = "5px";
    text.style.maxHeight = "30%";
    text.style.animation = `fadeIn ${rand(1, 2)}s ease-in-out`;

    // Create the close button
    const close = document.createElement('button');
    close.innerHTML = "✖";
    close.style.position = "absolute";
    close.style.top = "5px";
    close.style.right = "5px";
    close.style.background = "rgba(0,0,0,0.6)";
    close.style.color = "white";
    close.style.border = "none";
    close.style.fontSize = "18px";
    close.style.cursor = "pointer";
    close.style.borderRadius = "4px";
    close.onclick = (e) => {
      e.stopPropagation();
      ad.remove();
    };

    ad.appendChild(close);
    ad.appendChild(img);
    ad.appendChild(text);
    document.body.appendChild(ad);
    
    // Play a random sound when the ad appears
    playRandomSound();
  }

  setInterval(createFakeAd, 1500);
})();
