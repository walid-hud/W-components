import Image from "next/image"
export default function Category({imgSrc , isNew , name , amount}){
    return(
        <>
        <div className="rounded-2xl  relative overflow-hidden">
            <a href={name}>
                <div>
                {isNew && <p className="absolute top-4 left-4 text-lg font-thin text-muted-foreground  " style={{fontFamily:"cursive"}}>new</p>}
                <img src={"/thumbnails/alerts.png"} alt="alert components" className="rounded-sm"  width={320} height={320 / 3 * 2 } />
            </div>
            <div className="text-center font-outfit mt-3">
                <p >{name}</p>
                <p className="text-md text-muted-foreground">{amount} components</p>
            </div>  
            </a>

        </div>
        </>
        )}
