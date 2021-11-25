const header = document.querySelector(".header");
const mobileBtn = document.querySelector(".btn-mobile");
mobileBtn.addEventListener("click", () => header.classList.toggle("nav-open"));

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

const obs = new IntersectionObserver(
  (entities) => {
    const ent = entities[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    threshold: 0,
    root: null,
    rootMargin: "-80px",
  }
);

obs.observe(document.querySelector(".section-hero"));
