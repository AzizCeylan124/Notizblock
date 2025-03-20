
function getNoteTemplate(index, note) {
    return `
    <div class="note">
        <div>  ${note}</div>
        <button class="btn" onclick="noteToArchiv(${index})">─</button>
        <button class="btn" onclick="noteToTrash(${index})">X</button>
    </div>  
    `;
}

function getArchivesTemplate(index, note) {
    return `
    <div class="note">
        <div>  ${note}</div>
        <button class="btn" onclick="restoreArchivNote(${index})">+</button>
        <button class="btn" onclick="archivNoteToTrash(${index})">X</button>
    </div>  
    `;
}

function getTrashNoteTemplate(index, trashNote) {
    return `
    <div class="note">
        <div class="divNote">${trashNote}</div>
        <div class="divBtn">
            <button class="btn" onclick="restoreNote(${index})">+</button>
            <button class="btn" onclick="deleteNote(${index})">X</button>
        </div>
    </div>  
    `;
}