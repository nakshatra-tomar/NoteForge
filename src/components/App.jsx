import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"




function App() {
    return <div>
        <Header />
        
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