import Gamecard from "./gamecard"


// Creates a priority list of games the user wishes to prioritize
export default function Gamepriority1({ margin }: { margin:string }) {
    
    let gameName = [
        {
            id: 0,
            order: 1,
            game: `Red Dead Redemption 2`
        },
        {
            id: 1,
            order: 2,
            game: `Hollow Knight: SilkSong`
        },
        {
            id: 2,
            order: 3,
            game: `Elden Ring: Shadow of the Erdtree`
        }
    ]
    
    // Returns all the game objects into a div
    // Header takes in a margin from GameList
    return(
        
        <>
            <h4 className={margin}>Game Priority 1</h4>
            {gameName.map( game => <div key={game.id}>
                        <Gamecard name={game}/>
                    </div>
                )
            }
        </>
    )
}