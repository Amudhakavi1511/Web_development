// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Restore theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// News Feed
const newsFeed = document.getElementById("newsFeed");
const sampleNews = [
  { title: "Hackathon 2025 Winners Announced", date: "Sept 1, 2025" },
  { title: "AI Workshop by Industry Experts", date: "Aug 15, 2025" },
  { title: "Research Grant Awarded to CSE Faculty", date: "July 28, 2025" }
];

sampleNews.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h4>${item.title}</h4><p>${item.date}</p>`;
  newsFeed.appendChild(card);
});

// Placement chart (Canvas API)
const ctx = document.getElementById("placementChart").getContext("2d");
ctx.fillStyle = "#0b3d91";
ctx.fillRect(50, 150, 50, -100);
ctx.fillStyle = "#0066cc";
ctx.fillRect(150, 150, 50, -70);
ctx.fillStyle = "#d9534f";
ctx.fillRect(250, 150, 50, -90);
