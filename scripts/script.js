   
let allNotes = {
    'notes': [],
    'archives': [],
    'trashNotes': []
}

function addNote() {
    const noteInputRef = document.getElementById('note_input');
    const noteInput = noteInputRef.value;
    if (noteInput.trim() !== "") {
        allNotes.notes.push({text: noteInput});
        noteInputRef.value = "";
        saveAllNotes();
        renderAllNotes();
    }
}
     
function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    saveToLocalStorage();
    renderAllNotes();
}

function renderAllNotes() {
    renderNotes();
    renderArchives();
    renderTrashNotes();
}

function renderNotes() {
    const contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    allNotes.notes.forEach((note, index) => {
        contentRef.innerHTML += getNoteTemplate(index, note);
    });
}

function renderArchives() {
    const contentRef = document.getElementById('Archiv_content');
    contentRef.innerHTML = "";
    allNotes.archives.forEach((archiv, index) => {
        contentRef.innerHTML += getArchivesTemplate(index, archiv);
    });
}

function renderTrashNotes() {
    const trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    allNotes.trashNotes.forEach((trashNote, index) => {
        trashContentRef.innerHTML += getTrashNoteTemplate(index, trashNote);
    });
}

//delete

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    saveAllNotes();
    renderAllNotes();
}

// Localstorage
function saveAllNotes() {
    saveToLocalStorage();
    saveToLocalStorageArchives();
    saveToLocalStorageTrashNote();
}

function saveToLocalStorage() {
    localStorage.setItem("allNotes.notes", JSON.stringify(allNotes.notes));
}

function saveToLocalStorageArchives() {
    localStorage.setItem("allNotes.archives", JSON.stringify(allNotes.archives));
}

function saveToLocalStorageTrashNote() {
    localStorage.setItem("allNotes.trashNotes", JSON.stringify(allNotes.trashNotes));
}

function getFromLocalStorage() {
    const storedNotes = localStorage.getItem("allNotes.notes");
    if (storedNotes) {
        allNotes.notes = JSON.parse(storedNotes) || [];
    }
    const storedArchives = localStorage.getItem("allNotes.archives");
    if (storedArchives) {
        allNotes.archives = JSON.parse(storedArchives) || [];
    }
    const storedTrashNotes = localStorage.getItem("allNotes.trashNotes");
    if (storedTrashNotes) {
        allNotes.trashNotes = JSON.parse(storedTrashNotes) || [];
    }
}
