import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('contact-row');
    [...row.children].forEach((col) => {
      const contactInfo = col.querySelectorAll('p');
      const contactInfoWrapper = contactInfo[0].closest('div');
      contactInfoWrapper.classList.add('contact-item');

      contactInfo[0].classList.add('contact-name');
      contactInfo[1].classList.add('contact-title');
      contactInfo[2].classList.add('contact-email');
      contactInfo[2].classList.remove('button-container');
      contactInfo[2].querySelector('a').classList.remove('button');
    })
  });
}
