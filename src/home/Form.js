import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gsap from "gsap";


function ContactForm() {
  
  useEffect(() => {
    const ctx = gsap.context (() => {
        gsap.from('.form', {x: 500, opacity: 0, duration: 5, delay: 5});
        gsap.from('.smallButton', {y:100, opacity: 0, duration: 5, delay: 5, repeat: -1});
    })
    return() => ctx.revert()
}, [])

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
