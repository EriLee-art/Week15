import Gamedisplay from "./gamedisplay"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

export default function App() {
  return(
    <div className="container-fluid row">
        <div className="col-sm-4">
          <Sidebar />
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