import { useState } from 'react';
import  Alert  from '../../components/alert/Alert';
import { socialLinks } from '../../config/SocialMediaLink';
import './Contact.css';


const Contact = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('info');

  const triggerAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xnnarbzz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({ name: '', email: '', message: '' });
          triggerAlert('message sent successfully', 'success')
        } else {
          triggerAlert('Form submission failed', 'error')
        }
      })
      .catch((error) => console.error('Error:', error));
  };
  return (
    <div className=''>
      <div>
        <div className="contact-container w-80 md:w-5/12 mt-4 my-1 -z-10">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

        </div>
        <div className="social-icons">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-social-link ${link.hoverClass}`}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      {showAlert && (
      <Alert message={alertMessage} type={alertType} onClose={() => setShowAlert(false)}  />
       )} 
    </div>
  );


};

export default Contact;
