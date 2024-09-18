import React from 'react'
import './contact.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Contact = () => {
  return (
    <div className='Contact'>
        <div className='ContactContainer'>
          <div className='CLeft'>
              <h2 >Get in touch</h2>
              <p>You can contact us on</p>
              <p>123456</p>
              <p>Message us on</p>
              <div className='Cicons'> </div></div>
          <div className='CRight'>
          <h2 style={{color:"black"}}>Contact Us</h2>
          <p className='CRp'>we are happy to receive your inquery and comments</p>
            <form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="3">
          Name
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextMobile">
        <Form.Label column sm="3">
          Mobile Number
        </Form.Label>
        <Col sm="8">
          <Form.Control type="phone" placeholder="Mobile Number" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          E-mail
        </Form.Label>
        <Col sm="8">
          <Form.Control type="email" placeholder="E-mail" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextComments">
        <Form.Label column sm="3">
          Any Comments
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="Comments" />
        </Col>
      </Form.Group>
      <button className='Cbtn'>Send</button>
            </form>
          </div>
        </div>
      </div>
  )
}
