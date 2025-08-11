import Category from "./components/CategoryMockups/Category"
import Gradient_background from "./components/Gradient_background"
import Header from "./components/Header"
import Scene from "./components/Scene"
import Letter3D from "./components/Letter3D"

const page = () => {
  return (<>
    {<Scene>
      <Letter3D text={"W"} isAnimated={true}/>
    </Scene> } {/*disabled it during development because re-rendering the 3D scene is a waste of resources 🤠*/} 
    <main className="relative border-x-1 border-muted h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <Gradient_background />
      <section role="heading" className="relative px-4 lg:px-12 lg:py-14 py-8">
        <Header />
      </section>
      <section role="categories" className=" px-4 lg:px-12 grid grid-cols-4 gap-4 w-full ">
        <Category isNew name={"Alerts"}  imgSrc={"/alerts.png"} amount={0} />
   
      </section>
    </main>
  </>
  )
}

export default page
