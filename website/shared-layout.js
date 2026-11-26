(() => {
  const header = document.getElementById("site-header") || document.querySelector("header");
  const footer = document.getElementById("site-footer") || document.querySelector("footer");
  if (!header || !footer) return;

  const style = document.createElement("style");
  style.textContent = `
    .shared-header,.shared-footer-shell{display:block!important;height:auto!important;padding:0!important;margin:0!important;background:transparent!important;border:0!important}
    .shared-topbar{height:54px;background:#292929;color:#fff;font-size:16px}
    .shared-wrap{width:min(1490px,calc(100% - 48px));margin:auto}
    .shared-topbar .shared-wrap,.shared-nav .shared-wrap{height:100%;display:flex;align-items:center;justify-content:space-between}
    .shared-topbar b{color:#f62445;font-weight:400}.shared-top-contact{display:flex;gap:26px;align-items:center}
    .shared-top-contact span:first-child:before{content:'☎';color:#f62445;margin-right:12px}
    .shared-top-contact span:last-child:before{content:'⌖';color:#f62445;margin-right:12px}
    .shared-nav{height:140px;background:#fff}.shared-brand{display:flex;align-items:center;color:#222;text-decoration:none;font-size:58px;font-weight:800;letter-spacing:-7px;line-height:1}
    .shared-brand sup{font-size:28px;letter-spacing:-2px;align-self:flex-start;margin:0 0 0 7px}
    .shared-brand-mark{background:repeating-linear-gradient(120deg,#303030 0 3px,transparent 3px 7px);color:#ed1e3b;background-clip:text;-webkit-background-clip:text}
    .shared-navlinks{display:flex;gap:54px;align-items:center}.shared-navlinks a{color:#063d33;text-decoration:none;font-size:18px}.shared-navlinks a.active{color:#f62445}
    .shared-talk{background:#f62445;color:#fff!important;padding:20px 30px;font-weight:700!important;text-transform:uppercase}
    .shared-cta{background:#f62445;color:#fff;padding:54px max(calc((100% - 1490px)/2),24px);display:flex;justify-content:space-between;align-items:center;gap:30px}
    .shared-cta h2{font-size:48px;line-height:1.2;margin:0 0 22px;max-width:520px}.shared-cta p{margin:0;font-size:18px}
    .shared-cta-actions{display:flex;gap:14px;flex-wrap:wrap}.shared-cta-actions a{padding:20px 28px;background:#151515;color:white;text-decoration:none;font-weight:700;text-transform:uppercase}.shared-cta-actions a+ a{background:transparent;border:1px solid #171717;color:#171717}
    .shared-footer{background:#111;color:#d0d0d0;padding:92px 0 34px}.shared-footer-grid{display:grid;grid-template-columns:2fr .6fr 1fr 1.2fr;gap:55px;padding-bottom:70px}.shared-footer h3{color:#fff;font-size:28px;margin:0 0 28px}.shared-footer p,.shared-footer a{color:#ccc;text-decoration:none;font-size:17px;line-height:2}.shared-footer-links{display:flex;flex-direction:column}.shared-footer-logo{font-size:54px!important;font-weight:800;letter-spacing:-6px;color:#eee!important;line-height:1!important}.shared-footer-logo b{color:#f62445}.shared-copy{border-top:1px solid #333;text-align:center;padding-top:30px;color:#eee;font-size:16px}.shared-copy b{color:#f62445}
    @media(max-width:900px){.shared-nav{height:auto;padding:24px 0}.shared-nav .shared-wrap{gap:24px;flex-wrap:wrap}.shared-navlinks{gap:18px;flex-wrap:wrap}.shared-footer-grid{grid-template-columns:1fr 1fr}.shared-cta{align-items:flex-start;flex-direction:column}.shared-topbar{height:auto;padding:12px 0}.shared-topbar .shared-wrap{gap:10px;flex-wrap:wrap}}
    @media(max-width:560px){.shared-wrap{width:calc(100% - 36px)}.shared-navlinks{gap:12px}.shared-navlinks a{font-size:15px}.shared-talk{padding:14px!important}.shared-footer-grid{grid-template-columns:1fr}.shared-cta h2{font-size:36px}.shared-top-contact{gap:10px;flex-wrap:wrap}.shared-brand{font-size:45px}}
  `;
  document.head.append(style);

  header.classList.add("shared-header");
  header.innerHTML = `
    <div class="shared-topbar"><div class="shared-wrap"><div><b>INDEPENDENT</b> AEROSPACE TESTING &amp; DEVELOPMENT</div><div class="shared-top-contact"><span>+44 (0)1865 407587</span><span>Abingdon, Oxfordshire</span></div></div></div>
    <div class="shared-nav"><div class="shared-wrap"><a class="shared-brand" href="index.html"><span class="shared-brand-mark">MIX</span><sup>14</sup></a><nav class="shared-navlinks"><a href="index.html">Home</a><a class="active" href="testing.html">Testing</a><a href="index.html#research">R&amp;D</a><a href="index.html#approach">Our Approach</a><a href="index.html#faqs">FAQ’s</a><a href="index.html#contact">Contact</a><a class="shared-talk" href="index.html#contact">Talk to an engineer ↗</a></nav></div></div>`;

  footer.classList.add("shared-footer-shell");
  footer.innerHTML = `
    <section class="shared-cta" id="contact"><div><h2>Have a test or<br>materials question?</h2><p>Talk directly with Mix14 about your requirement and the next best step.</p></div><div class="shared-cta-actions"><a href="mailto:gary@mix14.co.uk">Email the team ↗</a><a href="tel:+441865407587">☎ &nbsp;+44 (0)1865 407587</a></div></section>
    <footer class="shared-footer"><div class="shared-wrap"><div class="shared-footer-grid"><div><a class="shared-footer-logo" href="index.html"><span class="shared-brand-mark">MIX</span><sup>14</sup></a><p>Independent aerospace flammability and materials testing, supported by practical research and development.</p></div><div><h3>Links</h3><div class="shared-footer-links"><a href="index.html">Home</a><a href="testing.html">Testing</a><a href="index.html#faqs">FAQ’s</a><a href="index.html#contact">Contact</a><a href="index.html#policies">Policies</a></div></div><div><h3>Explore</h3><div class="shared-footer-links"><a href="testing.html">Flammability testing</a><a href="testing.html">Materials testing</a><a href="index.html#research">Research &amp; development</a><a href="index.html#approach">Our approach</a></div></div><div><h3>Contact</h3><p>☎ &nbsp; +44 (0)1865 407587</p><p>✉ &nbsp; gary@mix14.co.uk</p><p>⌖ &nbsp; Unit 112, Culham No1 Site Station Road, Abingdon Oxfordshire OX14 3DA</p></div></div><div class="shared-copy">Copyright © 2026. <b>Mix 14.</b> All Rights Reserved.</div></div></footer>`;
})();
