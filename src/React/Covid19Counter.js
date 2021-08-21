import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";


export default function Covid19Counter() {

    const [data, setData] = useState(null);
    /* Formularz wyboru kraju początek */
    const [show, setShow] = useState(true);
    const [country, setCountry] = useState(null);

    const handleChange = (e) => {
        setCountry(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`) //{ mode: 'no-cors'})
            .then(res => res.json())
            .then(data => {
                console.log(data[data.length - 1]);
                setData(data[data.length - 1])
            })
    };
    const handleClose = () => setShow(false);
    /*Formularz wyboru kraju koniec  */

    useEffect(() => {
        fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`) //{ mode: 'no-cors'})
            .then(res => res.json())
            .then(data => {
                console.log(data[data.length - 1]);
                setData(data[data.length - 1])
            })
    }, )

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <label>Chose your Country:
                            <input value={country} onChange={handleChange}/>
                            <input type="submit" value="Wyślij" onClick={handleClose}/>
                        </label>
                    </form>
                </Modal.Body>
            </Modal>
            <div className="covid-container">
                {data ? <p className="tracker A">Liczba zakażeń Covid-19: {data.Confirmed} </p> : <p>loading...</p>}
                {data ? <p className="tracker B">Na dzień: {data.Date} </p> : <p>loading...</p>}
            </div>
        </>
    )
}

