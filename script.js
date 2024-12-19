function addNote() {
    const noteInput = document.getElementById("noteInput");
    const notes = document.getElementById("notes");
    const inputValue = noteInput.value.trim();

    if (inputValue !== "") {
        const note = document.createElement("div");
        note.className = "note";
        note.textContent = inputValue;

        if (inputValue.toLowerCase() === "/help") {
            const defaultResponse = document.createElement("div");
            defaultResponse.className = "note default-response";
            defaultResponse.textContent = "S3rv3r_S1d3_V@lid@ti0n_1s_B3st!";
            notes.appendChild(defaultResponse);
        }

        notes.appendChild(note);
        noteInput.value = "";
    } else {
        alert("Please enter a note.");
    }
    function clearNotes() {
        const notes = document.getElementById("notes");
        notes.innerHTML = ""; // Clears all notes
    }
}