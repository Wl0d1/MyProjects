const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const note = document.querySelector('.note');
const deleteBtns = document.getElementsByClassName('.delete-note');
const deleteBtnsAll = document.querySelector('.delete-all');
const addBtn = document.querySelector('.add');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const textarea = document.querySelector('#text');
const category = document.querySelector('#category');
const error = document.querySelector('.error');

let selectedValue; // reprezentacja wybranego option
let cardID = 0; // zmienna przechowujaca dane unikalne. W momencie kiedy dajemy karte zwiekszamy id . jest po to zeby usunac notatke. zeby wiedziec ktora usunac. Nadalismy notatce ID 

const addNote = () => { 
    notePanel.style.display = 'flex'
 }

const addNote2 = () => {
    if(textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visibile'
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID)

    newNote.innerHTML = `
    <div class="note-header">
         <h3 class="note-title">${selectedValue}</h3>
         <button class="delete-note" onClick ='deleteNote(${cardID})'>
            <i class="fas fa-times icon"></i>
         </button>
    </div>
<div class="note-body">
    ${textarea.value}
</div>`


    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = '0'
    notePanel.style.display = 'none'
    checkColor(newNote)
}

const closeNote = () => {
    notePanel.style.display = 'none';
    error.style.visibiliy = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;    

}

const checkColor = (note) => {
    switch(selectedValue) {
        case 'Zakupy': 
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Praca': 
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne': 
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    noteArea.textContent = ''
}


addBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', closeNote)
saveBtn.addEventListener('click', addNote2)
deleteBtnsAll.addEventListener('click', deleteAllNotes)