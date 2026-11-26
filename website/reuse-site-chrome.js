// Detail pages reuse the exact header and footer already used on the home page.
document.addEventListener("DOMContentLoaded", async () => {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (!headerSlot && !footerSlot) return;

  try {
    let page;
    for (const source of ["index.html", "testing.html"]) {
      const response = await fetch(source);
      if (!response.ok) continue;
      const parsed = new DOMParser().parseFromString(await response.text(), "text/html");
      if (parsed.body.children.length) { page = parsed; break; }
    }
    if (!page) throw new Error("Could not load the existing page layout.");

    const textOf = (element) => (element.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
    const findSmallest = (predicate) => [...page.querySelectorAll("body *")]
      .filter(predicate)
      .sort((a, b) => textOf(a).length - textOf(b).length)[0];
    const sharedHeader = page.querySelector("header, #site-header, #header, .site-header, .main-header, .header") ||
      findSmallest((element) => textOf(element).includes("talk to an engineer") && textOf(element).includes("independent"));
    const sharedFooter = page.querySelector("footer, #site-footer, #footer, .site-footer, .main-footer, .footer") ||
      findSmallest((element) => textOf(element).includes("copyright") && textOf(element).includes("mix 14"));
    const sharedContactBand = [...page.querySelectorAll("section, .contact-cta, .cta-section, .contact-band")]
      .find((section) => textOf(section).includes("have a test or"));

    if (headerSlot && sharedHeader) headerSlot.replaceWith(sharedHeader.cloneNode(true));
    if (footerSlot && sharedFooter) {
      const parts = [];
      if (sharedContactBand) parts.push(sharedContactBand.cloneNode(true));
      parts.push(sharedFooter.cloneNode(true));
      footerSlot.replaceWith(...parts);
    }
  } catch (error) {
    console.error("Shared header/footer could not be loaded:", error);
  }
});
