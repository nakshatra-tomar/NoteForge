import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"



function noter(item){
    return <Note
        key={item.key}
        title={item.title}    //braces since jsx is within html
        content={item.content}
        />
}
function App() {
    return <div>
        <Header />
        
        {notes.map(noter)}
        <Footer />
    </div>
}

export default App;