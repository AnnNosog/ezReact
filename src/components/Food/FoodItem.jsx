import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        background: '#696969'
    }
};

Modal.setAppElement('#root');

const FoodItem = ({variant, src, title = '', cost = 0}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(1);
    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };

    function operation(operator) {
        if (operator === "-") {
            count <= 1 ? setCount(count) : setCount(count - 1);
        }
        if (operator === "+") {
            setCount(count + 1);
        }
    }

    const pay = () => {
        console.log(JSON.stringify(`${title} cost:${cost} count:${count} sum:${cost * count}`))

    };
    return (
        <>
            <Card
                bg={variant.toLowerCase()}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{marginTop: '50px'}}
                className="mb-2"
            >
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={src}/>
                    <Card.Title style={{marginTop: '10px'}}>{cost}$ </Card.Title>
                    <Button onClick={() => openModal()} variant="primary"
                            style={{background: "transparent"}}>Add</Button>
                </Card.Body>

            </Card>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Card
                    bg={variant.toLowerCase()}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    className="mb-2"
                >
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={src}/>
                        <Card.Title style={{marginTop: '10px'}}>Cost : {cost} $ </Card.Title>
                        <Card.Title>Count : {count} </Card.Title>
                        <Card.Title>Total : {cost * count} </Card.Title>
                        <Button onClick={() => operation("+")} variant="primary"><strong>+</strong></Button>
                        <Button onClick={() => operation("-")} variant="primary"><strong>-</strong></Button>
                    </Card.Body>

                </Card>

                <Button onClick={() => pay()} variant="success" style={{background: "#2E8B57"}}>Pay</Button>
                <Button onClick={() => closeModal()} variant="danger" style={{background: "#CD5C5C"}}>Close</Button>
            </Modal>
        </>
    );
}

export default FoodItem;