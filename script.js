document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = id ? document.querySelector(id) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".sticky-service").forEach((service) => {
  const images = service.querySelectorAll("[data-service-image]");
  const steps = service.querySelectorAll("[data-service-step]");

  if (!images.length || !steps.length) return;

  const activateImage = (stepId) => {
    const stack = service.querySelector(".service-screen-stack");
    let isLandscapeActive = false;

    images.forEach((image) => {
      const isActive = image.dataset.serviceImage === stepId;
      image.classList.toggle("is-active", isActive);
      if (isActive && image.classList.contains("service-screen--landscape")) {
        isLandscapeActive = true;
      }
    });

    stack?.classList.toggle("is-landscape-active", isLandscapeActive);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activateImage(entry.target.dataset.serviceStep);
      });
    },
    {
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0,
    }
  );

  steps.forEach((step) => observer.observe(step));
});
