// Mirrors app/src/constants.js STYLES so the web page always matches the app
const STYLES = [
  { id: "anime",     label: "Anime",        emoji: "🌸", gradient: ["#ff6b9d", "#c44dff"], locked: false },
  { id: "cyberpunk", label: "Cyberpunk",    emoji: "⚡", gradient: ["#00f5d4", "#0066ff"], locked: false },
  { id: "fantasy",   label: "Fantasy",      emoji: "🔮", gradient: ["#a855f7", "#ec4899"], locked: false },
  { id: "studio3d",  label: "Studio 3D",    emoji: "✨", gradient: ["#f59e0b", "#ef4444"], locked: true  },
  { id: "oilpaint",  label: "Oil Painting", emoji: "🎨", gradient: ["#84cc16", "#059669"], locked: true  },
  { id: "scifi",     label: "Sci-Fi",       emoji: "🚀", gradient: ["#06b6d4", "#3b82f6"], locked: true  },
  { id: "dark",      label: "Dark Lord",    emoji: "🌑", gradient: ["#6366f1", "#1e1b4b"], locked: true  },
  { id: "kawaii",     label: "Kawaii",       emoji: "🍬", gradient: ["#f472b6", "#fb923c"], locked: true  },
];

// Mirrors app/src/screens/HelpSupportScreen.js FAQS
const FAQS = [
  {
    q: "How many avatars can I create on the free plan?",
    a: "Free plan members get 5 avatar generations per month, plus 2 photo-based avatars. Upgrade to Pro for unlimited generations and access to every style.",
  },
  {
    q: "What's Realistic Avatar mode?",
    a: "Toggle it on in the Customize step and upload a selfie or sample photo — AURA preserves your actual likeness while applying whichever style you've picked, anime to cyberpunk and beyond.",
  },
  {
    q: "How do I save an avatar to my phone?",
    a: "Open any avatar from your Gallery or right after creating it, then tap the ⬇ button next to Share Avatar to save it to your photo library.",
  },
  {
    q: "Can I rename an avatar?",
    a: "Yes — when creating a new avatar, enter a name in the \"Avatar Name\" field during the Customize step.",
  },
  {
    q: "What does the Creator plan add?",
    a: "Everything in Pro, plus a matching 4:3 landscape export for every avatar, API access, batch generation, and white-label exports.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Manage your subscription from your device's app store subscription settings (App Store or Google Play), since purchases are handled by the platform.",
  },
];

function renderStyles() {
  const grid = document.getElementById("stylesGrid");
  grid.innerHTML = STYLES.map(s => `
    <div class="style-card" style="background:linear-gradient(135deg, ${s.gradient[0]}33, ${s.gradient[1]}11)">
      ${s.locked ? '<span class="pro-badge">PRO</span>' : ""}
      <span class="emoji">${s.emoji}</span>
      <span class="label">${s.label}</span>
    </div>
  `).join("");
}

function renderFaq() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map((item, i) => `
    <div class="faq-item" data-index="${i}">
      <div class="faq-q">
        <span>${item.q}</span>
        <span class="faq-chevron">+</span>
      </div>
      <p class="faq-a">${item.a}</p>
    </div>
  `).join("");

  list.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-chevron").textContent = "+";
      });
      if (!wasOpen) {
        item.classList.add("open");
        item.querySelector(".faq-chevron").textContent = "−";
      }
    });
  });
}

renderStyles();
renderFaq();
