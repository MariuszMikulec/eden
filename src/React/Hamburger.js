//import '../scss/App.scss'
function Hamburger() {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span/>
                <span/>
                <span/>
                <ul id="menu">
                    <a href="#main page">
                        <li>Strona główna</li>
                    </a>
                    <a href="#project">
                        <li>Projekty</li>
                    </a>
                    <a href="#about">
                        <li>O nas</li>
                    </a>
                    <a href="#benefits">
                        <li>Korzyści</li>
                    </a>
                    <a href="#contact">
                        <li>Kontakt</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
export default Hamburger;
