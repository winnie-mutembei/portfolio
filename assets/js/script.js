const navLinks = document.querySelectorAll("[data-nav-link]");

const highlightActiveNav = (target) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  const match = [...navLinks].find(
    (link) => link.dataset.navLink === target
  );
  if (match) {
    match.classList.add("active");
  }
};

const resolvePageFromPath = () => {
  const bodyPage = document.body.dataset.page;
  if (bodyPage) return bodyPage;

  const pathname = window.location.pathname;
  if (pathname === "/" || pathname.endsWith("index.html")) return "home";
  const slug = pathname.split("/").pop()?.replace(".html", "");
  return slug || "home";
};

const initNavHighlight = () => {
  highlightActiveNav(resolvePageFromPath());
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      highlightActiveNav(link.dataset.navLink);
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavHighlight, { once: true });
} else {
  initNavHighlight();
}

const observerOptions = {
  threshold: 0.25,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("[data-reveal]").forEach((section) => {
  section.classList.add("reveal-ready");
  revealObserver.observe(section);
});

const form = document.querySelector("[data-contact-form]");
const statusBox = document.querySelector("[data-form-status]");

const showStatus = (message, type = "success") => {
  if (!statusBox) return;
  statusBox.textContent = message;
  statusBox.dataset.status = type;
  statusBox.hidden = false;
  setTimeout(() => {
    statusBox.hidden = true;
  }, 4500);
};

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      showStatus("Please complete every field before sending.", "error");
      return;
    }

    const emailPattern = /^[\\w-.]+@[\\w-]+\\.[a-z]{2,}$/i;
    if (!emailPattern.test(values.email)) {
      showStatus("Your email looks incorrect. Try again?", "error");
      return;
    }

    form.reset();
    showStatus("Thanks for reaching out! I’ll reply within 2 days.");
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("timeline-visible");
        timelineObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

timelineItems.forEach((item) => timelineObserver.observe(item));

