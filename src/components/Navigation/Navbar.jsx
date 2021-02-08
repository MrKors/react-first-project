import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <a href="/profile" className={style.item}>Profile</a>
            </div>
            <div>
                <a href="/messages" className={style.item}>Message</a>
            </div>
            <div>
                <a href="#" className={style.item}>News</a>
            </div>
            <div>
                <a href="#" className={style.item}>Music</a>
            </div>
            <div>
                <a href="#" className={style.item}>Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;