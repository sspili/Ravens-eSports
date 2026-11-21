// Mobile navigation
document.querySelectorAll(".menu-toggle").forEach(button => {
  button.addEventListener("click", () => document.querySelector(".nav")?.classList.toggle("open"));
});

// Reveal sections as they enter the viewport
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Interactive player profile cards
const playerNames = {
  sspili: "SSPILI", sl1dw: "SL1DW", meel1x: "MEEL1X",
  r3m3ks: "R3M3KS", casciavit: "CASCIAVIT", kh0men: "KH0MEN"
};
const modal = document.getElementById("player-modal");
function openPlayerProfile(key) {
  if (!modal) return;
  const name = playerNames[key] || key.toUpperCase();
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-avatar").textContent = name.charAt(0);
  document.getElementById("modal-description").textContent =
    "More information about " + name + " will be added soon.";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closePlayerProfile() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-player]").forEach(card => {
  card.addEventListener("click", () => openPlayerProfile(card.dataset.player));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); openPlayerProfile(card.dataset.player);
    }
  });
});
document.querySelector(".modal-close")?.addEventListener("click", closePlayerProfile);
modal?.addEventListener("click", event => { if (event.target === modal) closePlayerProfile(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closePlayerProfile(); });

// Rocket League application: opens an email draft with the submitted details.
document.getElementById("rl-application")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const fields = ["nickname", "rank", "platform", "experience", "availability", "tracker", "message"];
  const labels = {
    nickname: "Player nickname", rank: "Current rank", platform: "Platform",
    experience: "Competitive experience", availability: "Availability",
    tracker: "Tracker profile", message: "Message"
  };
  const body = fields.map(key => `${labels[key]}: ${data.get(key) || "Not provided"}`).join("\n");
  const subject = encodeURIComponent("RAVENS Rocket League Application — " + data.get("nickname"));
  const mailBody = encodeURIComponent(body);
  // Replace this address with the club's official recruitment email.
  window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${mailBody}`;
});

// Match filters are a visual filter framework; add CMS match cards when ready.
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll("[data-match-game]").forEach(card => {
      card.hidden = selected !== "all" && card.dataset.matchGame !== "all" && card.dataset.matchGame !== selected;
    });
  });
});
