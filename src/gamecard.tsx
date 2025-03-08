import trashIcon from "./assets/trash-solid.svg"
import editIcon from "./assets/pen-solid.svg"

type AddedProps = {
    gameName: {
        id: number,
        priority: number,
        order: number,
        game: string
    }
}

//Renders the game in a small card for the game list

// Returns the order of the the game alongside the game's name and two buttons for editing and deleting
export default function Gamecard( {gameName}: AddedProps ) {

    return(
    <>
        <div>
            {gameName.order}: {gameName.game}
            
            <button className="btn btn-success ms-2 p-1" onClick={ () => alert(`Editing!`) }>
                    <img src={editIcon} style={{ width: "1rem" }}/>
            </button>

            <button className="btn btn-danger ms-2 p-1" onClick={ () => alert(`Deleting!`) }>
                <img src={trashIcon} style={{ width: "1rem" }}/>
            </button>
        </div>
    </>
    )
}