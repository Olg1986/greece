import burger from "./modules/burger";
import slider from './modules/slider';
import filter from './modules/filter';
import cards from './modules/cards';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    burger();
    slider('.slider_item', '.slider_inner');
    cards();
    filter();
    scrolling('.pageup');
});