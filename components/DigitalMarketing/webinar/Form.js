import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Form.module.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); 
  const router = useRouter(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('jobTitle', formData.jobTitle);

    fetch("https://getform.io/f/pbgxklza", {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoading(false);
      setSuccess(true); 
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        jobTitle: '',
      });
      console.log('Form submission successful:', response);
      router.push('/Thankyou/digital-marketing/webinar'); 
    })
    .catch(error => {
      setLoading(false);
      setError('Form submission failed. Please try again.');
      console.error('Error submitting form:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.Title}>Webinar Registration</h2>
      <div className={styles.formSection}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formSection}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formSection}>
        <label htmlFor="phone">Phone</label>
        <PhoneInput
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          defaultCountry="IN" // Optional: specify the default country
          className={styles.phoneInput} // Optional: apply custom styles
          required
        />
      </div>
      <div className={styles.formSection}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      {loading ? (
        <div className={styles.loading}>Submitting...</div>
      ) : (
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      )}
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>Form submitted successfully!</div>}
    </form>
  );
};

export default Form;
