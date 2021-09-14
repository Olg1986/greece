import {getResourse} from '../services/services';
const cards = () => {
 
    const btn = document.querySelector('.card-more');
        

    btn.addEventListener('click', function() {
        getResourse('assets/db.json')
        .then(res => createCard(res.cards))
        .catch(error => console.log(error))
         this.remove();
    });
    

}

function createCard(request) {
    request.forEach(({src, title, price, count, days}) => {
        let cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-12', 'col-md-6', 'col-lg-3', 'card', 'animated', 'fadeInUp');
        document.querySelector('.greysection').appendChild(cardWrapper);

        const card = document.createElement('div');
        card.classList.add('grey_inner');

        card.innerHTML = `
                <img src=${src} alt="grey_img" class="grey_img">
                <div class="grey_item">
                    <div class="grey_title">${title}</div>
                    <div class="grey_price">${price}$</div>
                    <div class="grey_day">${days} day</div>
                </div>
                <button class="grey_btn">View more</button>
            `;

        const starWrapper = document.createElement('div');
        starWrapper.classList.add('grey_icon');
        card.appendChild(starWrapper);

        for (let i = 1; i < count; i++) {
            const star = document.createElement('img');
            star.classList.add('star_img');
            star.setAttribute('src', './assets/img/Star.png');
            starWrapper.append(star);
        }
            
        cardWrapper.appendChild(card);
    });
}


export default cards;
export {createCard};