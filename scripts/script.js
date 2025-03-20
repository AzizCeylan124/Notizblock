
let notes = [];
let archives = [];
let trashNotes = [];

function randerAllNotes() {
    renderNotes();
    renderArchives();
    renderTrashNotes();
}

function renderNotes() {
    const contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    notes.forEach((note, index) => {
        contentRef.innerHTML += getNoteTemplate(index, note);
    });
}

function renderArchives() {
    const contentRef = document.getElementById('Archiv_content');
    contentRef.innerHTML = "";
    archives.forEach((archiv, index) => {
        contentRef.innerHTML += getArchivesTemplate(index, archiv);
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
// Note
function noteToArchiv(indexNote) {
    const archive = notes.splice(indexNote, 1)[0];
    archives.push(archive);
    saveAllNotes();
    randerAllNotes();
}

function noteToTrash(indexNote) {
    const trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
    saveAllNotes();
    randerAllNotes();
}
// Archiv
function archivNoteToTrash(indexArchive) {
    const trashNote = archives.splice(indexArchive, 1)[0];
    trashNotes.push(trashNote);
    saveAllNotes();
    randerAllNotes();
}

function restoreArchivNote(indexArchive) {
    const note = archives.splice(indexArchive, 1)[0];
    notes.push(note);
    saveAllNotes();
    randerAllNotes();
}
//Trash
function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    saveAllNotes();
    randerAllNotes();
}

function restoreNote(indexTrashNote) {
    const note = trashNotes.splice(indexTrashNote, 1)[0];
    notes.push(note);
    saveAllNotes();
    randerAllNotes();
}

// Localstorage

function saveAllNotes() {
    saveToLocalStorage();
    saveToLocalStorageArchives();
    saveToLocalStorageTrashNote();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveToLocalStorageArchives() {
    localStorage.setItem("archives", JSON.stringify(archives));
}

function saveToLocalStorageTrashNote() {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function getFromLocalStorage() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
    }

    const storedArchives = localStorage.getItem("archives");
    if (storedArchives) {
        archives = JSON.parse(storedArchives);
    }

    const storedTrashNotes = localStorage.getItem("trashNotes");
    if (storedTrashNotes) {
        trashNotes = JSON.parse(storedTrashNotes);
    }
}

