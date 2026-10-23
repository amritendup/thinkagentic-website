
document.addEventListener('DOMContentLoaded', () => {
 const search = document.querySelector('#article-search');
 const buttons = [...document.querySelectorAll('[data-filter]')];
 const cards = [...document.querySelectorAll('.article-card')];
 const empty = document.querySelector('#no-articles');
 let category = 'all';
 function apply() {
   const q = (search.value || '').trim().toLowerCase();
   let shown = 0;
   cards.forEach(card => {
     const match = (category === 'all' || card.dataset.category === category) &&
       (card.dataset.search || '').includes(q);
     card.hidden = !match;
     if(match) shown++;
   });
   empty.hidden = shown !== 0;
 }
 buttons.forEach(b => b.addEventListener('click', () => {
   category = b.dataset.filter;
   buttons.forEach(x => x.classList.toggle('active',x===b));
   apply();
 }));
 search.addEventListener('input',apply);
 apply();
});
