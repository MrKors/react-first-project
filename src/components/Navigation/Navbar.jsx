import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={style.item}>
                <a href="/messages">Message</a>
            </div>
            <div className={style.item}>
                <a href="/news">News</a>
            </div>
            <div className={style.item}>
                <a href="/music">Music</a>
            </div>
            <div className={style.item}>
                <a href="/setting">Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;