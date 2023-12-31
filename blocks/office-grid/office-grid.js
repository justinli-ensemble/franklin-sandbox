export default function decorate(block) {
    document.createElement('div').className = 'office-grid';
    [...block.children].forEach(row => {
        const officeWrapper = row.closest('div');
        officeWrapper.classList.add('office-card');
        [...row.children].forEach(col => {
            const images = col.querySelectorAll('picture');
            if (images.length > 0) {
                const imageWrapper = images[0].closest('div');
                imageWrapper.classList.add('office-images');

                if (images.length > 1) {
                    for (let i = 0; i < images.length; i++) {
                        const image = images[i];

                        if (i > 0) image.classList.add('multi');
                    }
                }
            }

            const officeInfo = col.querySelectorAll('p');
            if (officeInfo.length > 0) {
                const phoneNumber = officeInfo[0];
                
                const wrapper = document.createElement('div');
                wrapper.classList.add('phone-number');
                phoneNumber.parentNode.insertBefore(wrapper, phoneNumber)
                wrapper.appendChild(phoneNumber);

                const links = col.querySelectorAll('a');
                links.forEach(link => link.classList.remove('button'))
            }
        })
    })
}
