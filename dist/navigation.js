// Only navigation destinations participate; the résumé section retains Achievements.
export function activeSection(sections, offset, atBottom = false) {
  if (atBottom) return sections.at(-1)?.id;
  let active = sections[0]?.id;
  for (const section of sections) {
    if (section.top <= offset) active = section.id;
  }
  return active;
}

export function setupNavigation(nav) {
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links.map(link => document.querySelector(link.hash));
  let locked = null, timeout, frame;
  const setActive = id => links.forEach(link => {
    const active = link.hash === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  function update() {
    frame = null;
    if (locked) return;
    const offset = document.querySelector('header').getBoundingClientRect().height + 40;
    setActive(activeSection(targets.map(el => ({id: el.id, top: el.getBoundingClientRect().top})), offset,
      window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2));
  }
  function release() { locked = null; clearTimeout(timeout); update(); }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !targets.some(el => '#' + el.id === link.hash)) return;
    locked = link.hash.slice(1);
    setActive(locked);
    clearTimeout(timeout);
    timeout = setTimeout(release, 1500);
  });
  window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, {passive: true});
  window.addEventListener('scrollend', () => {
    if (!locked) return update();
    const target = document.getElementById(locked);
    const offset = document.querySelector('header').getBoundingClientRect().height + 40;
    const bottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
    if ((target.getBoundingClientRect().top >= 0 && target.getBoundingClientRect().top <= offset) || bottom) release();
  });
  for (const event of ['wheel', 'touchstart']) window.addEventListener(event, release, {passive: true});
  window.addEventListener('keydown', event => {
    if (['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) release();
  });
  window.addEventListener('resize', release);
  window.addEventListener('popstate', release);
  window.addEventListener('load', update);
  update();
}
