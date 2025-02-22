function replaceLogo() {
    const logo = document.querySelector('yt-icon#logo-icon');
    if (logo) {
        const newLogoContainer = document.createElement('div');
        newLogoContainer.style.display = 'flex';
        newLogoContainer.style.alignItems = 'center';

        const logoImage = document.createElement('img');
        logoImage.src = 'https://cdn.discordapp.com/avatars/825077085705994260/a5e7d0bfe7856d0fe7d36aadf9b021d2.webp?size=240';
        logoImage.alt = 'ylegorzatube';
        logoImage.style.width = '30px';
        logoImage.style.height = '30px';
        logoImage.style.marginRight = '8px';

        const logoText = document.createElement('span');
        logoText.textContent = 'YLEGORZTUBE';
        logoText.style.fontSize = '14px';
        logoText.style.fontWeight = 'bold';
        logoText.style.color = 'white';

        newLogoContainer.appendChild(logoImage);
        newLogoContainer.appendChild(logoText);

        logo.innerHTML = '';
        logo.appendChild(newLogoContainer);
    }
}

window.addEventListener('load', replaceLogo);
setInterval(replaceLogo, 1000);
