import Concept from "./Concept";
import './Concepts.css'
function Concepts(props){
    return (
        <ul id="concepts">
        <Concept items={props.concepts[0]}/>
        <Concept items={props.concepts[1]}/>
        <Concept items={props.concepts[2]}/>
       </ul>
    )

}

export default Concepts;