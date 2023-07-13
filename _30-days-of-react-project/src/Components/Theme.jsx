import { useContext } from "react"
import { themeContext } from "../Contexts/themeContext"

function Theme () {

    const [theme, setTheme] = useContext(themeContext)

    const handleEvent = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (<>
    <div className="theme-setter">
    <p className="theme-text">Mode: {theme}</p>
    <button className="theme-btn" onClick={handleEvent}>Change</button>
    </div>
    </>)
}

export default Theme