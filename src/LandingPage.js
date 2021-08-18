import React, {Fragment, useState} from "react";
import Covid19Counter from "./React/Covid19Counter";
import Hamburger from "./React/Hamburger";
import Carousel from "./React/Carousel";
//import './scss/App.scss';
import arrow from './pic/dooble-arrow.png'
import seamus from './pic/Seamus_Green.jpg';
import fb from './pic/facebook.jpg';
import tw from './pic/twitter.ico';
import li from './pic/LinkedIn.png';
import JoinForm from "./React/JoinForm";

function LandingPage() {
    const [mail, setMail] = useState()

   const handleChange=(e)=>{
       const {name, value} = e.target;
       setMail(prevState => {
           return {
               ...prevState,
               [name]: value
           }
       });
   }
   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(mail);
   }

    return (
        <Fragment>
            <header className="App-header" id="main page">
                <nav className="nav_stripe">
                    <a className="projects-edit" href="Projects"><p className="edit-p"><b>Edytuj Projekty</b></p></a>
                    <h1>Eden Initiative</h1>
                    <Hamburger/>
                </nav>
                <JoinForm/>
            </header>

            <Covid19Counter/>

            <section id="project">
                <div>
                    <Carousel/>
                </div>
            </section>

            <section className="about" id="about">
                <div>
                    <img className="seamus" src={seamus} alt="Seamus_Green"/>
                    <div className="quoteBox">
                        <p className="quote">"Put your trust in me to ensure a more responsible use of the planet's resources in the future."
                            -Seamus Green</p>
                    </div>
                </div>
                <p>Seamus Green jest założycielem i duchowym ojcem organizacji Eco, Eden Initiative.</p>
            </section>

            <section className="arrowCont">
                <img />
                <div className="arrow">
                    <a href="#main page"> <img className="scrollTopButton" src={arrow} alt=""/></a>
                </div>
            </section>


            <footer id="contact">
                <div>
                    <div className="contact">
                        <h2>Kontakt:</h2>
                        <p>eden.initiative@gmail.com</p>
                    </div>
                    <div className="subscribe">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>
                                <input type="mail" name="mail" onChange={handleChange}/>
                                </label>
                                <button type="submit"><b>Subskrybuj!</b></button>
                            </form>
                        </div>
                        <div className="socialmedia">
                            <a href="www.facebook.com"><img className='sm' src={fb} alt='fb'/></a>
                            <a href="www.twitter.com"><img className='sm' src={tw} alt='tw'/></a>
                            <a href="www.lindedin.com"><img className='sm' src={li} alt='li'/></a>
                        </div>
                    </div>
                </div>
            </footer>
            <p style={{color:"black"}}><b>Created by Mariusz Mikulec</b></p>
        </Fragment>
    );
}
export default LandingPage;

