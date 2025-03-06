import Gamecard from "./gamecard"

// Creates a priority list of games the user wishes to prioritize
export default function Gamepriority2({ margin }: { margin:string }) {

    let gameName = [
        {
            id: 0,
            order: 1,
            game: `A Hat In Time`
        },
        {
            id: 1,
            order: 2,
            game: `Halo Infinite`
        },
        {
            id: 2,
            order: 3,
            game: `Grand Theft Auto: 6`
        }
    ]
    
    // Returns all the game objects into a div
    // Header takes in a margin from GameList
    return(
        <>
            <h4 className={margin}>Game Priority 2</h4>
            {gameName.map( game => <div key={game.id}>
                        <Gamecard name={game}/>
                    </div>
                )
            }
        </>
    )
}