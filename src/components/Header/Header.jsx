import "./Header.css"
import imgLogo from "../../assets/weather.svg"

const Header = () => {

    return (
        <div className="header">
            <img src={imgLogo} alt="" className="logoImg" />
            <p className="headerText">
                Wheather App
            </p>
        </div>
    )

}

export default Header;