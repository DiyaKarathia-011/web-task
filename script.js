// "What's not inside" list (rendered from data to keep markup clean)
const items = ['No fillers','No preservatives','No artificial flavors','No added sugar','No gluten','No dairy','No xyz','No GMOs'];
const xIcon = '<svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="7" fill="#262626"/><path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#FBF9F7" stroke-width="1.4" stroke-linecap="round"/></svg>';
document.getElementById('notList').innerHTML = items.map(t => `<li>${xIcon}<span>${t}</span></li>`).join('');

// Ingredient accordion
const rows = [...document.querySelectorAll('.ing')];
const toggleAll = document.getElementById('toggleAll');

function setRow(row, open){
  row.classList.toggle('open', open);
  row.setAttribute('aria-expanded', open);
}
function syncButton(){
  const allOpen = rows.every(r => r.classList.contains('open'));
  toggleAll.textContent = allOpen ? 'Hide all 3 ingredients −' : 'See all 3 ingredients +';
  toggleAll.setAttribute('aria-pressed', allOpen);
}
rows.forEach(row => row.addEventListener('click', () => {
  setRow(row, !row.classList.contains('open'));
  syncButton();
}));
toggleAll.addEventListener('click', () => {
  const open = !rows.every(r => r.classList.contains('open'));
  rows.forEach(r => setRow(r, open));
  syncButton();
});
