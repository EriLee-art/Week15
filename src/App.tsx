import { useState } from "react"
import Gamedisplay from "./gamedisplay"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

export default function App() {

  const gameName = [
    {
      id: 0,
      priority: 1,
      order: 1,
      game: `Red Dead Redemption 2`
    },
    {
      id: 1,
      priority: 1,
      order: 2,
      game: `Hollow Knight: SilkSong`
    },
    {
      id: 2,
      priority: 1,
      order: 3,
      game: `Elden Ring: Shadow of the Erdtree`
    },
    {
      id: 3,
      priority: 2,
      order: 1,
      game: `A Hat In Time`
    },
    {
      id: 4,
      priority: 2,
      order: 2,
      game: `Halo Infinite`
    },
    {
      id: 5,
      priority: 2,
      order: 3,
      game: `Grand Theft Auto: 6`
    },
    {
      id: 6,
      priority: 3,
      order: 1,
      game: `Call of Duty: Black Ops 6`
    },
    {
      id: 7,
      priority: 3,
      order: 2,
      game: `The Legend of Zelda: Echoes of Wisdom`
    },
    {
      id: 8,
      priority: 3,
      order: 3,
      game: `Pokemon Legends: Z-A`
    }
  ]

  const [games, setGames] = useState(gameName);

  const addGame = () => {
    const newGame = {
      id: games.length ? games[games.length - 1].id + 1 : 0,
      priority: 1,
      order: 4,
      game: "The Legend of Zelda: Tears of The Kingdom"
    }

    setGames( [ ...games, newGame ] )
  }

  const deleteGame = (idToDelete:number) => {
    setGames( games.filter( game => game.id !== idToDelete) )
  }

  const updatePriority = (idToUpdate:number, newPriority:number) => {
    setGames(games.map( game => (
      game.id !== idToUpdate ? game : {
        ...game,
        priority: newPriority
      }
    )))
  }

  return(
    <div className="container-fluid row">
        <div className="col-sm-4">
          <Sidebar
          gameName={games}
          addGame={addGame}
          deleteGame={deleteGame}
          updatePriority={updatePriority}
          />
        </div>
        <div className="col">
          <div className="row">
            <Topbar />
          </div>
          <div className="row h-100 align-items-center">
            <Gamedisplay />
          </div>
        </div>  
    </div>
  )
}