import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
export const metadata = {
    title:"W components",
    author:"Walid O | https://github.com/walid-hud",
    description:"A collection of reusable components built with React and Tailwind CSS.",
    keywords:"react, tailwind, components, ui, design",
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className="px-0 lg:px-12 dark text-foreground bg-background overflow-x-clip">
          <NavBar/>
          {children}
          <Footer/>
        </body>
    </html>
  )
}

export default RootLayout
