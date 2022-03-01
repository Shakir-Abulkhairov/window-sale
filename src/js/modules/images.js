const images = () =>{
    const imagesPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bidImage = document.createElement('img');

    imagesPopup.classList.add('popup');
    workSection.appendChild(imagesPopup);

    imagesPopup.style.justifyContent = 'center';
    imagesPopup.style.alignItems = 'center';
    imagesPopup.style.display = 'none';

    imagesPopup.appendChild(bidImage);

    
    

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imagesPopup.style.display = 'flex';
            document.body.style.overflow="hidden";
            const path = target.parentNode.getAttribute('href');
            bidImage.setAttribute('src', path);

            bidImage.style.width = '600px';
            bidImage.style.height = '600px'

        }

        if(target && target.matches('div.popup')){//matches-совпадение если есть совпадение с попап то ...(подложка)
            imagesPopup.style.display = 'none';
            document.body.style.overflow="";
        }
    })
}
export default images;
