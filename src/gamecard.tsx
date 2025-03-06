import trashIcon from "./assets/trash-solid.svg"
import editIcon from "./assets/pen-solid.svg"

//Renders the game in a small card for the game list

// Properties being looked out by GameCard for the prop passed down from GamePriority 1-3
type GameProperties = {
    name: {
        id:number,
        order:number,
        game:string
    }
}

// Returns the order of the the game alongside the game's name and two buttons for editing and deleting
export default function Gamecard({ name }: GameProperties) {

    return(
    <>
        <p>
            {name.order}: {name.game}
            
            <button className="btn btn-success ms-2 p-1" onClick={ () => alert(`Editing!`) }>
                    <img src={editIcon} style={{ width: "1rem" }}/>
            </button>

            <button className="btn btn-danger ms-2 p-1" onClick={ () => alert(`Deleting!`) }>
                <img src={trashIcon} style={{ width: "1rem" }}/>
            </button>
        </p>
    </>
    )
}