
function getNoteTemplate(index, note) {
    return `
    <div class="note">
        <div class="divNote">${note.text}</div>
        <div class="divBtn">
        <button class="btn" onclick="moveNote(${index},'notes','archives')">A</button>
        <button class="btn" onclick="moveNote(${index},'notes','trashNotes')">X</button>
        </div>
    </div>  
    `;
}

function getArchivesTemplate(index, note) {
    return `
    <div class="note">
        <div class="divNote">${note.text}</div>
        <div class="divBtn">
        <button class="btn" onclick="moveNote(${index},'archives','notes')">+</button>
        <button class="btn" onclick="moveNote(${index},'archives','trashNotes')">X</button>
        </div>
    </div>  
    `;
}

function getTrashNoteTemplate(index, trashNote) {
    return `
    <div class="note">
        <div class="divNote">${trashNote.text}</div>
        <div class="divBtn">
            <button class="btn" onclick="moveNote(${index},'trashNotes','notes')">+</button>
            <button class="btn" onclick="deleteNote(${index})">D</button>
        </div>
    </div>  
    `;
}
