import { useState } from 'react';
import Idea from "../Idea/Idea";
export default function IdeasList() {
    const ideasArray = [
        { id: 1, idea: "ShenCar", group: "Hila, Keren, Reut" },
        { id: 2, idea: "Univille", group: "Dekel, Ido, Ofer" },
        { id: 3, idea: "Intellimap", group: "Daria, Dima, Or" },
    ];
    const [ideas, setIdeas] = useState(ideasArray);
    const updateIdeasArray = (itemId, newIdea) => {
        setIdeas(ideas.map(item => {
            if (item.id === itemId) {
                item.idea = newIdea;
                return item;
            }
            else {
                return item;
            }
        }));
    }
    const eachIdea = (item, i) => {
        return <Idea key={i} itemId={item.id} title={item.idea} group={item.group} onChange={updateIdeasArray} />
    }
    return (
        <div className="ideas-list">
            {ideas.map(eachIdea)}
        </div>
    )
}