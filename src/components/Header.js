import "./Header.css";

const Header = () => {
    return (
    <nav className="header">
        <div className="title">
            <h1>Movie World</h1>
        </div>
        <div className="cart">
            <p className="fa-solid fa-cart-shopping" />
        </div>
    </nav>
    )
}

export default Header;