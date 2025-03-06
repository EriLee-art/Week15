import Gamelist from "./gamelist"
import addIcon from "./assets/plus-solid.svg"

// Sidebar for the application
export default function Sidebar() {
    return(
        <div className="container-fluid text-center d-flex flex-column">
            
            <h1 className="mt-4 mb-4">My Games</h1>
            
            {
            // Creates a button for adding a game to the game priority lists
            }
            <button className="btn btn-outline-primary mb-5 mt-3" onClick={ () => alert(`Adding Game!`)}>
                Add Game 
                <img className="ms-1" style={{ width: "1rem" }} src={addIcon} />
            </button>
            
            <Gamelist />
        </div>
    )
}