import { useState } from "react";

export default function Idea({ itemId, title, group }) {
    const [editing, setEditing] = useState(false);
    const [newIdea, setNewIdea] = useState("");

    const editIdea = () => {
        console.log("Edit it");
        setEditing(true);
    };

    const saveIdea = () => {
        console.log(`Save: ${newIdea}`);
        setEditing(false);
    };

    const deleteIdea = () => {
        console.log("Delete it");
    };

    const ideaChanged = (ideaNewText) => {
        setNewIdea(ideaNewText);
    };

    const renderForm = () => {
        return (
            <div>
                <form>
                    <textarea onChange={(element) => ideaChanged(element.target.value)} />
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            saveIdea();
                        }}
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    };

    const renderList = () => {
        return (
            <div className="idea">
                <div>
                    <h2>
                        ({itemId}) {title}
                    </h2>
                    <h3>{group}</h3>
                </div>
                <span>
                    <button onClick={editIdea}>Edit</button>
                    <button onClick={deleteIdea}>Delete</button>
                </span>
            </div>
        );
    };

    return editing ? renderForm() : renderList();
}
