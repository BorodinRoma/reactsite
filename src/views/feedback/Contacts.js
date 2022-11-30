import React, {Component} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import "./Contacts.css"
import data from "bootstrap/js/src/dom/data";


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: "",
            email: "",
            send_me: false
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmitSend = this.handleSubmitSend.bind(this);
        this.sender = this.sender.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeText(event) {
        this.setState({textArea: event.target.value});
    }

    handleSubmitSend(event){
        this.setState({send_me: event.target.checked});
    }

    handleSubmit(event) {
        console.log('Почта: ' + this.state.email);
        console.log('Текст:'+ this.state.textArea);
        console.log('Отправить мне?', this.state.send_me);
        event.preventDefault();
    }

    sender() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'email': this.state.email,
                'text': this.state.textArea, 'send_me': this.state.send_me})
        };
        fetch('http://127.0.0.1:8000/api/v1/feedback/feedback', requestOptions)
            .then(response => response.json())
            .then(
                (error) => {
                    console.log(error);
                }
            );
        alert("Ваше обращение отправлено!\nОтвет будет получен в ближайшее время.")
    }

    render() {
        return (
            <Container className="contacts-main">
                <h1 className="name">Форма обратной связи</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ваше сообщение</Form.Label>
                        <Form.Control value={this.state.textArea} onChange={this.handleChangeText} as="textarea" rows="3"
                                      placeholder="Укажите тему и причину..."/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Отправить мне копию" value={this.state.send_me}
                                    onChange={this.handleSubmitSend} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.sender}>Отправить</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;