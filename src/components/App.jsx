import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea";




function App() {

    const [notes, setNotes] = useState([])         //initialized as empty array

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }


    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => { //will end up with array that has everything except the matched id node

                return index != id;

            })
        })
    }
    return (<div>
        <Header />

        <CreateArea onAdd={addNote} />
        
        {notes.map((noteItem) => {
            return (<Note
                title={noteItem.title}    
                content={noteItem.content}
                onDelete={deleteNote}
                />
        );
        })}
        <Footer />
    </div>
    );
}

export default App;