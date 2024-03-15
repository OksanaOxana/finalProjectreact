import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgqzwq");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="form">
      <input
        className="inputEmail"
        placeholder='Your Email: '
        type="email" 
        name="email"
      />
       
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            
      <textarea
        className="areaEmail"
        placeholder= "Your message: "
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="smallButton" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm
