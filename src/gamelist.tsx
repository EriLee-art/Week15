import Gamepriority1 from "./gamepriority1"
import Gamepriority2 from "./gamepriority2"
import Gamepriority3 from "./gamepriority3"

// Creates an ordered list of games for the sidebar
export default function Gamelist() {

    const Spacing = `mb-4 mt-1 pt-2`

    return(
        <>
            <Gamepriority1 margin={Spacing}/>
            <Gamepriority2 margin={Spacing}/>
            <Gamepriority3 margin={Spacing}/>
        </>
    )
}