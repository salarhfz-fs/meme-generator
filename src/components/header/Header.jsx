import './header.scss'

function Header() {
    return (
        <header className="header">
            <section className="header__brand">
                <img alt="troll face" src="/troll-face.svg" className="header__brand__img" />
                <span className="header__brand__text">Meme Generator</span>
            </section>
            <section className="header__details">React Course - Project 3</section>
        </header>
    )
}

export default Header;
