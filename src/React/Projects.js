import React, {Fragment, useState} from "react";
import { Col, Row} from "react-bootstrap";
import '../scss/App.scss'


export default function Projects({tab, setTab}) {
    const [project, setProject] = useState({title: "", describe: ""});

  //  const [tab, setTab] = useState([]);
    const addProject = () => {
        setTab(prev => [...prev, {title: project.title, describe: project.describe, id: project.title + 1234 }])
    }
    const DelProject = (id) => {
        setTab(prev => {
            return prev.filter(el => el.id !== id)
        })
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setProject(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };


    return (
        <Fragment>
            <header className="App-header" id="main page">
                <nav className="nav_stripe">
                    <a className="projects-edit" href="/"><p className="edit-p"><b>Strona główna</b></p></a>
                    <h1>Eden Initiative</h1>
                    <span/>
                </nav>
            </header>

            <section style={{marginTop: "10em"}}>
                <form>
                    <Row className="row projects-row">
                        <lavel>
                            <Col className='col projects-col' xs={9} md={4}>
                                <input className="element" type="text" name="title" value={project.title}
                                       onChange={handleChange} placeholder="Tytuł"/>
                            </Col>
                            <Col className='col projects-col' xs={9} md={4}>
                                <textarea className="element" type="text" name="describe" value={project.describe}
                                          onChange={handleChange} placeholder="Opis"/>
                            </Col>
                        </lavel>
                        <Col className='col projects-col' xs={9} md={4}>
                            <input className='projects-btn' type="button" onClick={addProject} value="Dodaj"/>
                        </Col>
                    </Row>
                </form>


                <h2>Lista projektów</h2>

                <ul>
                    {tab.map((el) =>
                        <>
                            <Col className='col projects-col' xs={9} md={4}>
                                <h2>{el.title}</h2>
                                <p>{el.describe}</p>
                                <input type="button" value="Usuń" onClick={() => DelProject(el.id)}/>
                            </Col>
                        </>
                    )}
                </ul>

            </section>
        </Fragment>
    );
}
/*
  <section style={{marginTop:"10em"}}>
                <form onSubmit={handleSubmit}>
                        <Row className="row projects-row">
                            <lavel>
                                <Col className='col projects-col' xs={9} md={4}>
                                    <div className='element'/>
                                </Col>
                            </lavel>

                            <Col className='col projects-col' xs={3} md={4}>
                                <input className='projects-btn' type="submit" value="Dodaj" />
                                <input className='projects-btn' type="submit" value="Usuń"/>
                            </Col>
                        </Row>
                </form>
            </section>

 */