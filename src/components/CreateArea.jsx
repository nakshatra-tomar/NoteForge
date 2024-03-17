import React from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // Destructure the 'name' and 'value' properties from the event target (input element)
    const { name, value } = event.target;
  
    // Update the 'note' state based on the previous state
    setNote(prevNote => {
      // Return a new state object by spreading the previous state (...prevNote)
      // and updating the property with the name provided by the event and its corresponding value
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input name="title" 
        onChange={handleChange}
        value={note.title} 
        placeholder="Title" 
        />

        <textarea 
        name="content" 
        onChange={handleChange}
          value={note.content}
          placeholder="Take a note..." 
          rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
