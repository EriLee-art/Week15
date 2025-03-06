import Gamecard from "./gamecard"

// Creates a priority list of games the user wishes to prioritize
export default function Gamepriority3({ margin }: { margin:string }) {

    let gameName = [
        {
            id: 0,
            order: 1,
            game: `Call of Duty: Black Ops 6`
        },
        {
            id: 1,
            order: 2,
            game: `The Legend of Zelda: Echoes of Wisdom`
        },
        {
            id: 2,
            order: 3,
            game: `Pokemon Legends: Z-A`
        }
    ]

    // Returns all the game objects into a div
    // Header takes in a margin from GameList
    return(
        <>
            <h4 className={margin}>Game Priority 3</h4>
            {gameName.map( game => <div key={game.id}>
                        <Gamecard name={game}/>
                    </div>
                )
            }
        </>
    )
}