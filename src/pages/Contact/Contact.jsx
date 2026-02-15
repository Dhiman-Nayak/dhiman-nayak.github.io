import { useState } from 'react';
import Alert from '../../components/alert/Alert';
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

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
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
  const profile = {
    name: 'Dhiman Nayak',
    status: 'Available for work',
    blurb:
      "My inbox is always open. Whether you have a project or just want to say hi, I'd love to hear from you.",
    phone: 'Available on request',
    email: 'dman.nayak@gmail.com',
    initials: 'DN',
  };

  return (
    <div className="contact-section">
      <div className="contact-grid">
        <div className="contact-card contact-form-card">
          <div className="contact-header">
            <p className="contact-kicker">Let&apos;s work together</p>
            <h2>Contact Me</h2>
            <p className="contact-subtitle">Have a project in mind? Drop a message and I will get back to you.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
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
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project"
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Send</button>
              <button type="button" className="ghost-btn" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>

        <div className="contact-side">
          <div className="contact-card profile-card">
            <div className="profile-header">
              <div className="avatar">{profile.initials}</div>
              <div>
                <p className="profile-name">{profile.name}</p>
                <span className="status-pill">{profile.status}</span>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-link ${link.hoverClass}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="profile-blurb">{profile.blurb}</p>
          </div>

          <div className="contact-card info-card">
            <p className="info-label">Phone</p>
            <p className="info-value">{profile.phone}</p>
          </div>

          <div className="contact-card info-card">
            <p className="info-label">Email</p>
            <a className="info-value info-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      {showAlert && (
        <Alert message={alertMessage} type={alertType} onClose={() => setShowAlert(false)} />
      )}
    </div>
  );


};

export default Contact;
