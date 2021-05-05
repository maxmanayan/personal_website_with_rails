import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';
import { MAX_BLUE } from '../colors';


const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'personal_website', e.target, 'user_wPlLzOpdv3kfK0cEV6SId')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  }

  return(
    <>
      <Form onSubmit={sendEmail}>
        <Form.Group>
          <Form.Control placeholder='Your Name' name='name' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Your Email Address' name='email' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Subject' name='subject' />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Message'  rows={5} type='textarea' as='textarea' name='message' />
        </Form.Group>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button type='submit' style={{background:`${MAX_BLUE}`, borderColor:`${MAX_BLUE}`, padding: '1em', width: '10em', fontWeight: 'bold'}}>
            SEND
          </Button>
        </div>
      </Form>
    </>
  )
}



export default ContactForm