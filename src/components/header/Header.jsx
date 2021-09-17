import "./header.css"
import headerImg from './img/banner.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesm">React & Node</span>
                <span className="headerTitlelg">Blog</span>
            </div>
            <img className="headerImg" src={headerImg} alt="header img" />
        </div>
    )
}
