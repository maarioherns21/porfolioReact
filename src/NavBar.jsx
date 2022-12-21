import {BsMoonFill, BsSunFill} from 'react-icons/bs'

export default function Navbar({tuggleTheme, theme}){
    const modesTuggle = theme  === "light" ? <BsMoonFill /> : <BsSunFill />
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
            <h1 className="font-burtons text-lg nav">Mario Hernandez</h1>
            <ul className="flex items-center nav">
                <button onClick={tuggleTheme}>{modesTuggle}</button>
                <a className="px-4 py-2 bg-gradient-to-r from-blue-500 text- to-blue-500 bg-blue-300 rounded-md ml-8 text-white" href="https://www.linkedin.com/in/mario-hernandez-ortega/">Resume</a>
            </ul>
        </nav>
    )
}