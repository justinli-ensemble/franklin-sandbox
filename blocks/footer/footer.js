import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();
    block.innerHTML = html;

    block.children[0].classList.add('footer-content');
    const content = block.getElementsByClassName('content')[0];
    content.children[0].classList.add('first-row');
    content.children[0].children[3].classList.add('policies');
    content.children[1].classList.add('second-row');
    content.children[1].children[0].classList.add('ensemble-logo');
    content.children[1].children[1].classList.add('linked-in');
    content.children[1].children[2].classList.add('spacer');
    content.children[1].children[3].classList.add('ensemble-copyright');
  }
}
