const navLinks = document.querySelectorAll("[data-nav-link]");
const currentPage = document.body.dataset.page;

navLinks.forEach((link) => {
  if (link.dataset.navLink === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

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

