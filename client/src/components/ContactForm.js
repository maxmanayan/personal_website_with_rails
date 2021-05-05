import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';


const ContactForm = () => {
  return(
    <>
      <Form>
        <Form.Group>
          <Form.Control placeholder='Your Name' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Your Email' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Subject' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Message' />
        </Form.Group>
        <Button>
          Submit
        </Button>
      </Form>
    </>
  )
}



export default ContactForm