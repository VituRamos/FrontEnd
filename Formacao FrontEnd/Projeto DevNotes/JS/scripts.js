// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

// Funções
function showNotes(){

    //Para cada elemento recebido de getNotes (Notes salvas)
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);
        
        //Add nota no container de notas
        notesContainer.appendChild(noteElement);
    });
}


function addNote(){

    const notes = getNotes();

    //Objeto
    const noteObject = {id: generateId(), content: noteInput.value, fixed: false};

    //Elemento
    const noteElement = createNote(noteObject.id, noteObject.content);

    //Add nota no container de notas
    notesContainer.appendChild(noteElement);

    //Salvar notas
    notes.push(noteObject);
    saveNotes(notes);

    noteInput.value = "";
}

function createNote(id, content, fixed){
    
    //Criar div
    const element = document.createElement("div");
    element.classList.add("note");

    //Criar area de texto
    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.placeholder = "Adicione algum texto...";

    //Adicionar area de texto a div
    element.appendChild(textarea);

    return element;
}

// Local storage
function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    return notes;
}

function saveNotes(notes){
    localStorage.setItem("notes",JSON.stringify(notes));
}


function generateId(){
    return Math.floor(Math.random()*5000);
}


// Eventos
addNoteBtn.addEventListener("click", () => addNote());


//Inicialização
showNotes();