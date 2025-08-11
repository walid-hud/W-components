import Letter3D from "./components/Letter3D"
import Scene from "./components/Scene"

export default function notFound(){
    return(
        <main>
        <Scene>
        <Letter3D text={"404"} isAnimated={false}/>
        </Scene>
        </main>
    )
}