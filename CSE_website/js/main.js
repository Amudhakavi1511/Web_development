// ---------- Scroll-to-top button ----------
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Animated Counters ----------
function animateCounter(el, target) {
  let current = 0;
  const increment = Math.ceil(target / 100);
  const updateCounter = () => {
    current += increment;
    if (current > target) current = target;
    el.textContent = current + "+";
    if (current < target) requestAnimationFrame(updateCounter);
  };
  updateCounter();
}

const counters = document.querySelectorAll("[data-counter]");
if (counters.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const value = parseInt(entry.target.dataset.counter);
          animateCounter(entry.target, value);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(counter => observer.observe(counter));
}

// ---------- Smooth Scroll for Anchors ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ---------- Responsive Navigation ----------
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector("nav ul");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    })
  );
}

// ---------- Programs Page Tabs ----------
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

if (tabButtons.length) {
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // remove active from all
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      // activate clicked
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

// ---------- Faculty Page Filter ----------
const filterBtns = document.querySelectorAll(".filter-btn");
const facultyCards = document.querySelectorAll(".faculty-card");

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // remove active
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      facultyCards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ---------- Research Page Accordion ----------
const accordionHeaders = document.querySelectorAll(".accordion-header");

if (accordionHeaders.length) {
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const body = item.querySelector(".accordion-body");

      // toggle visibility
      body.style.display = body.style.display === "block" ? "none" : "block";

      // optional: close others for true accordion behavior
      accordionHeaders.forEach(h => {
        if (h !== header) {
          h.parentElement.querySelector(".accordion-body").style.display = "none";
        }
      });
    });
  });
}

// ---------- Contact Form Validation ----------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "form-message error";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.className = "form-message error";
      return;
    }

    // Simulate success
    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.className = "form-message success";

    contactForm.reset();
  });
}

