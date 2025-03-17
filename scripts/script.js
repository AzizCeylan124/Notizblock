
let notes = [];
let trashNotes = [];

function renderNotes() {
    const contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    notes.forEach((note, index) => {
        contentRef.innerHTML += getNoteTemplate(index, note);
    });
}

function renderTrashNotes() {
    const trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    trashNotes.forEach((trashNote, index) => {
        trashContentRef.innerHTML += getTrashNoteTemplate(index, trashNote);
    });
}

function addNote() {
    const noteInputRef = document.getElementById('note_input');
    const noteInput = noteInputRef.value;
    if (noteInput.trim() !== "") {
        notes.push(noteInput);
        noteInputRef.value = "";
        saveToLocalStorage();
        renderNotes();
    }
}

function noteToTrash(indexNote) {
    const trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
    saveToLocalStorage();
    saveToLocalStorageTrashNote();
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    saveToLocalStorageTrashNote();
    renderTrashNotes();
}

function restoreNote(indexTrashNote) {
    const note = trashNotes.splice(indexTrashNote, 1)[0];
    notes.push(note);
    saveToLocalStorage();
    saveToLocalStorageTrashNote();
    renderNotes();
    renderTrashNotes();
}

// Localstorage
function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
    }

    const storedTrashNotes = localStorage.getItem("trashNotes");
    if (storedTrashNotes) {
        trashNotes = JSON.parse(storedTrashNotes);
    }
}

function saveToLocalStorageTrashNote() {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

