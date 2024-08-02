import accordionFacts from "./data"
import { useState } from "react"

export default function Accordion(){

    const [selected, setSelected] = useState(null)

    function handleSingleSelection(currentId){
        //receive current id of current selection
        console.log(currentId)
        setSelected(currentId);
    }

    console.log(accordionFacts)

    return <div className="accordion_wrapper">
        <div className="accordion">
            { accordionFacts && accordionFacts.length > 0 ? (
                accordionFacts.map((fact) => (
                    <div className='fact'>
                        <div onClick={()=>handleSingleSelection(fact.id)} className="title">
                            <h3>{fact.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === fact.id ? 
                            <div className="content"> {fact.answer} </div>
                            
                            : null
                        }
                    </div>
                    ))
                ) : (
                <div> No Data Found </div>
                )
            }
        </div>
    </div>
}