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
    return <div>
        <Header />

        <CreateArea onAdd={addNote} />
        
        {notes.map((item) => (
            <Note
                key={item.key}
                title={item.title}    //braces since jsx is within html
                content={item.content}
                />
        
        ))}
        <Footer />
    </div>
}

export default App;