import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import {
  ContactContainer,
  ContactWrapper,
  InfoColumn,
  FormColumn,
  ContactH2,
  ContactP,
  InfoItem,
  CopyButton,
  SocialIconsWrapper,
  SocialIconLink,
  MapWrapper,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
  FormMessage,
  ThankYouMessage
} from './styles';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // New state for thank you message
  const [copied, setCopied] = useState('');

  // Function to handle copying to clipboard
  const handleCopy = (textToCopy, type) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000); // Reset after 2 seconds
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('');

    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      setFormStatus('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setFormSubmitted(true); // Show thank you message
        },
        (error) => {
          setFormStatus('Failed to send message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <InfoColumn>
          <ContactH2>Get In Touch</ContactH2>
          {/* FIX: Updated the description to be more direct and professional */}
          <ContactP>
            Having recently completed my intensive full-stack development training, I am eager to apply my skills and contribute to a forward-thinking team. I am actively seeking new opportunities and would be excited to discuss how I can bring value to your projects.
          </ContactP>
          <InfoItem>
            <FaEnvelope />
            <span>mubarakshaik0464@gmail.com</span>
            <CopyButton onClick={() => handleCopy('mubarokshaik0464@gmail.com', 'email')}>
              {copied === 'email' ? 'Copied!' : 'Copy'}
            </CopyButton>
          </InfoItem>
          <InfoItem>
            <FaPhone />
            <span>+91 80 74 54 04 64</span>
            <CopyButton onClick={() => handleCopy('+918074540464', 'phone')}>
              {copied === 'phone' ? 'Copied!' : 'Copy'}
            </CopyButton>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>Y S R Kadapa district - 516329</span>
          </InfoItem>
          <SocialIconsWrapper>
            <SocialIconLink href="https://www.linkedin.com/in/mubarakshaik0464" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FaGithub />
            </SocialIconLink>
          </SocialIconsWrapper>
          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d123462.1742451372!2d78.75608384999999!3d14.46726745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37210d4f26e15%3A0x1e695f7ce33a1637!2sKadapa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1672848494883!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kadapa Location"
            ></iframe>
          </MapWrapper>
        </InfoColumn>
        <FormColumn>
          {formSubmitted ? (
            <ThankYouMessage>
              <FaCheckCircle />
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. I will get back to you shortly.</p>
            </ThankYouMessage>
          ) : (
            <ContactForm ref={form} onSubmit={sendEmail}>
              <Input type="text" name="user_name" placeholder="Your Name" required />
              <Input type="email" name="user_email" placeholder="Your Email" required />
              <TextArea name="message" placeholder="Your Message" required />
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              {formStatus && <FormMessage success={formStatus.includes('successfully')}>{formStatus}</FormMessage>}
            </ContactForm>
          )}
        </FormColumn>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
