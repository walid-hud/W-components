import Divider from "./Divider"

const Footer = () => {
  return (
    <>
    <Divider/>
    <footer className="font-inter custom-border-footer relative text-foreground border-x-1 border-muted flex px-8 lg:px-12 py-8  items-center justify-between">
      <div> 
        <span className="text-muted-foreground text-shadow-stone-100 text-sm ">
        © {new Date().getFullYear() }  W_components
        </span>
      </div>
      <div className="text-sm text-muted-foreground">
        <span>A project by <a className="text-foreground  underline underline-offset-4 font-semibold " href="https://linkedin.com/in/walid101" target="_blank">Walid O.</a></span>
      </div>
    </footer>
    </>
  )
}

export default Footer
