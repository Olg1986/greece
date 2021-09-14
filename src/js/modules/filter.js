import {getResourse} from '../services/services';
import { createCard } from './cards';
const filter = () => {
    const btnPrice = document.querySelector('.price-btn'),
        btnStatus = document.querySelector('.status-btn'),
        cards = document.querySelectorAll('.card');

    btnPrice.addEventListener('click', () => {
        cards.forEach(card => {
            card.remove();
        });
        getResourse('assets/db.json')
            .then(res => {
                const arr = sortByPrice(res.carsss);
                console.log(arr);
                createCard(arr);
            })
            .catch(error => console.log(error))
    }); 
    
    btnStatus.addEventListener('click', () => {
        cards.forEach(card => {
            card.remove();
        });
        getResourse('assets/db.json')
            .then(res => {
                const arr = sortByFeetbacks(res.carsss);
                console.log(arr);
                createCard(arr);
            })
            .catch(error => console.log(error))
    });   

    function sortByPrice(arr) {
        const temp = JSON.parse(JSON.stringify(arr));
        temp.sort((a, b) => a.price > b.price ? 1 : -1);
        return temp;
    }

    function sortByFeetbacks(arr) {
        const temp = JSON.parse(JSON.stringify(arr));
        temp.sort((a, b) => b.count - a.count);
        return temp;
    }
}
export default filter;