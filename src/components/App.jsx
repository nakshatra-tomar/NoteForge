import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"

console.log(notes);

function App() {
    return <div>
        <Header />
        <Note 
        title="Title"
        content="This is the paragraph"/>
        <Footer />
    </div>
}

export default App;