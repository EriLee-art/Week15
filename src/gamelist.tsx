import Gamecard from "./gamecard"

type AddedProps = {
    gameName: {
        id: number, priority: number, order: number, game: string
    }[]
}

// Creates an ordered list of games for the sidebar
export default function Gamelist( {gameName}: AddedProps ) {

    const Spacing = `mb-4 mt-1 pt-2`

    return(
        <>
            
            <h4 className={Spacing}>Game Priority 1</h4>
            <div>
                {gameName.map( g => (
                    <Gamecard key={g.id} gameName={g}/>
                ))}
            </div>

            <h4 className={Spacing}>Game Priority 2</h4>
            <div>
                {gameName.map( g => (
                    <Gamecard key={g.id} gameName={g}/>
                ))}
            </div>                

            <h4 className={Spacing}>Game Priority 3</h4>
            <div>
                {gameName.map( g => (
                    <Gamecard key={g.id} gameName={g}/>
                ))}
            </div>
        </>
    )
}