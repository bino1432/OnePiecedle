import { Menu, MenuHandler, Button } from "@material-tailwind/react"
export default function Header(){
    return(
    <>
    <header className="h-32 flex items-center content-center w-full bg-blue-500/75">
        <div className="">
            <img className="h-32" src="./LOGO.png" alt="" />
        </div>
    </header>
    </>
    )
}