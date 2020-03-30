import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Heading from '@elements/heading';
import Input from '@elements/input';
import Button from '@elements/button/button.element';
import styles from './contact-section.module.scss';

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = 'default_service';
    const templateId = 'portfolio_email';

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        event.target,
        'user_fOtmp3V2I5ZwYbq0hlAfr'
      );
      setMessage("Thanks For the email. I'll read it as soon as possible.");
    } catch (error) {
      setMessage('Oh no. There was a problem with the email.');
    }
  };

  return (
    <div className={styles.stl}>
      <div className={styles.stl__container}>
        {message ? (
          <Heading className={styles.stl__form__message} tag="h3">
            {message}
          </Heading>
        ) : (
          <>
            <Heading tag="h2">Contact</Heading>
            <form
              ref={formRef}
              className={styles.stl__form}
              onSubmit={handleSubmit}
            >
              <div className={styles.stl__form__subcontainer}>
                <Input
                  id="name"
                  containerClassName={styles.stl__form__input}
                  label="Name"
                  helperText="required"
                  required
                />
                <Input
                  id="email"
                  containerClassName={styles.stl__form__input}
                  label="Email"
                  helperText="required"
                  required
                />
              </div>
              <div className={styles.stl__form__input__container}>
                <Input
                  id="subject"
                  containerClassName={styles.stl__form__input}
                  label="Subject"
                  helperText="required"
                  required
                />
              </div>
              <div className={styles.stl__form__input__container}>
                <Input
                  id="message"
                  containerClassName={styles.stl__form__input}
                  label="Message"
                  helperText="required"
                  isTextarea
                  required
                />
              </div>
              <Button submit>Send</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
