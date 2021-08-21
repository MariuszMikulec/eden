import React from "react";
import {Carousel} from "react-bootstrap";
import solar from '../pic/panele-słoneczne-pvgw.jpg'
import wingTower from '../pic/wiatrtowe słupowe.jpg'
import iter from '../pic/iter.jpg'
import {Link} from "react-router-dom";
export default function carousel (){
    return(
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={solar}
                alt="First slide"
            />
            <Carousel.Caption>
                <div className="text-container">
                    <h3>Ogniwa Petrowskitowe</h3>
                    <p><b> Innowacja na rynku fotowoltaiki. Ogniwa perowskitowe drukowane są na folii PET dzięki temu są cienkie,
                        lekkie, elastyczne i wydajne, nawet w miejscach, które nie mają
                        idealnego oświetlenia i we wnętrzach budynków jedynie ze sztucznym oświetleniem.
                        Na dodatek, można je także produkować w różnych kolorach!</b></p>
                    <Link to="/Projects"><p>Dowiedz się więcej!</p></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={wingTower}
                alt="Second slide"
            />

            <Carousel.Caption>
                <div className="text-container">
                <h3>Pionowa elektrownia wiatrowa</h3>
                <p><b> Pionowa turbina wiatrowa jest znacznie efektywniejsza od klasycznych wiatraków,
                    ponieważ pracuje przy małej sile wiatru i niezależnie od jego kierunku.  Elektrownia pracuje cicho.
                    nie powoduje drgań, a co najważniejsze nie wytwarza groźnych dla środowiska
                    infradźwięków.</b></p>
                    <Link><p>Dowiedz się więcej!</p></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={iter}
                alt="Third slide"
            />

            <Carousel.Caption>
                <div className="text-container">
                <h3>Projekt ITER </h3>
                <p><b>ITER(International Thermonuclear Experimental Reactor)
                    To reaktor termojądrowy i jednocześnie pełen rozmachu projekt badawczy. Pozwoli sprawdzić,
                    czy da się bezpiecznie produkować energię uzyskaną
                    poprzez kontrolowaną syntezę jądrową na dużą skalę.</b></p>
                    <Link><p>Dowiedz się więcej!</p></Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}