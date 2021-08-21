import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Col, Row} from "react-bootstrap";



export default function JoinForm(e) {
    const [form, setForm] = useState({name:"",lastname:"",age:"",country:"",phone:"",email:""});
    const [joinshow, setJoinshow] = useState(false);

    const joinHide = () => setJoinshow(false);
    const joinShow = () => setJoinshow(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };
   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };


    const data = ['name', 'age'];
    const data2 = [{title: 'name', type: 'text'}];
    return (
        <>
            <div className="joinButton">   <a className="join" href={"#main"} onClick={joinShow}><h2>Join us!</h2></a></div>

                <Modal show={joinshow} onHide={joinHide} aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header closeButton/>
                    <div className="title-container"><h1 className="form-title">Join us!</h1></div>
                    <form onSubmit={handleSubmit}>
                    <Modal.Body className="show-grid">
                        <lavel>
                            {data.map(el => (
                                <Row className="row">
                                    <Col className='col' xs={6} md={14}>
                                        <p className="form-describe">{el}</p>
                                        <input type="text" name={el} value={form[el]} onChange={handleChange} placeholder={el}/>
                                    </Col>
                                </Row>
                            ))}
                            {data2.map(({title, type}) => (
                                <Row className="row">
                                    <Col className='col' xs={6} md={14}>
                                        <p className="form-describe">{title}</p>
                                        <input type={type} name={title} value={form[title]} onChange={handleChange} placeholder={title}/>
                                    </Col>
                                </Row>
                            ))}
                            <Row className="row">
                                <Col className='col' xs={6} md={14}>
                                    <p className="form-describe">Imię</p>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="name"/>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className='col' xs={6} md={14}>
                                    <p className="form-describe">Nazwisko</p>
                                    <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="lastname"/>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className='col' xs={6} md={1}>
                                    <p className="form-describe">Wiek</p>
                                    <input type="age" name="age" value={form.age} onChange={handleChange} placeholder="age"/>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className='col' xs={6} md={4}>
                                    <p className="form-describe">Kraj</p>
                                    <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="country"/>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className='col' xs={6} md={4}>
                                    <p className="form-describe">Numer telefonu</p>
                                    <input type="phone" name="phone" value={form.number} onChange={handleChange} placeholder="number"/>
                                </Col>
                            </Row>
                            <Row className="row">
                                <Col className='col' xs={6} md={4}>
                                    <p className="form-describe">Mail</p>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email"/>
                                </Col>
                            </Row>
                    </lavel>

                    </Modal.Body>

                    <Modal.Footer>
                        <input type="submit" value="Wyślij" className="submit" onClick={joinHide} />
                        <a href='#/' onClick={joinHide} className="submit close">Zamknij</a>
                    </Modal.Footer>
            </form>
                </Modal>

        </>
    );
}