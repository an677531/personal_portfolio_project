import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });
  const [errors, setErrors] = useState({
    name: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ensuring that any errors get cleared out on submission
    setErrors({ name: '', email: '', message: '' });

    // adding in basic form validation
    let formIsValid = true;
    let newErrors = { ...errors };

    // making sure that the name field is not left empty for submission
    if (!formData.name.trim()) {
      formIsValid = false;
      newErrors.name = 'Name is required';
    }

    //Here i am using regex to validate the email, ensuring that the user does not submit complete gibberish in the email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    // This part informs a user that they need to input something in the message field
    if (!formData.message.trim()) {
      formIsValid = false;
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // this check if everything is valid and then lets user submit the form
    if (formIsValid) {
      console.log('Form submitted:', formData);
    }
  };
//adding in basic animations and displaying the page content including a form that makes use of the functions responsible for submiting form logic required for this assignment.
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>

      <div className="socials">
        <p>Or reach me via:</p>
        <a href="https://instagram.com/designs_by_acz" target="_blank" rel="noreferrer">Instagram</a> |{' '}
        <a href="mailto:anthonyzarczynski@gmail.com">Email</a>
      </div>
    </motion.section>
  );
}

export default Contact;