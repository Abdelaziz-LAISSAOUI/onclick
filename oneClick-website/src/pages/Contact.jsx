import ContactInfo from "../compononent/ContactInfo"
import map from "../assets/contactInfo/map.svg"
import mail from "../assets/contactInfo/mail.svg"
import phone from "../assets/contactInfo/phone.svg"
import { useState, useRef, useEffect } from "react"
import emailjs from '@emailjs/browser';


function Contact() {
  const [email, setEmail] = useState('')
  const [invalidemail, setInvalidemail] = useState(false)
  const formRef = useRef();

  useEffect(() => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email === ''){
      setInvalidemail(false)
      return;
    }

    if (!emailRegex.test(email)) {
      setInvalidemail(true);
    } else {
      setInvalidemail(false);
    }
  }, [email]);


  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || invalidemail)
      return;

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        e.target.reset()
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <div className="hero h-[50vh] text-center text-white p-3">
        <div className="home">
          <h2 className="font-bold text-lg mt-28">LET&apos;S KEEP IN TOUCH!</h2>
          <p className="opacity-75 text-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>
        </div>
      </div>
      <div className="greenBg text-white px-3 pt-1 pb-20">
        <div className="home">
          <div className="bg-[#328773] px-5 py-12 mt-12">
            <h3 className="font-semibold mb-16">Contact info</h3>
            <ContactInfo icon={map} info={'CLS , Rue D’Alger , MEDEA - Algeria'} />
            <ContactInfo icon={mail} info={'OneClick@gmail.com'} />
            <ContactInfo icon={phone} info={'+213 792955534'} />
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="bg-[#328773] px-5 py-12 mt-8">
            <input
              className="w-full mt-4 py-4 pl-4 bg-[#D9D9D933] text-white rounded-[4px] focus:outline-none placeholder:text-[#FFFFFFBF]"
              type="text"
              placeholder="First Name"
              required
              name="user_first" />
            <input
              className="w-full mt-4 py-4 pl-4 bg-[#D9D9D933] focus:outline-none placeholder:text-[#FFFFFFBF]"
              type="text"
              placeholder="Last Name"
              required
              name="user_last" />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full mt-4 py-4 pl-4 bg-[#D9D9D933] focus:outline-none placeholder:text-[#FFFFFFBF]"
              type="email"
              placeholder="E-mail Adress"
              required
              name="user_email" />
            {invalidemail && <p className="text-red-600 font-medium">Invalid email format!</p>}
            <textarea
              className="w-full mt-4 py-4 pl-4 bg-[#D9D9D933] h-52 resize-none focus:outline-none placeholder:text-[#FFFFFFBF] "
              placeholder="Message .."
              required
              name="message">
            </textarea>
            <input className="w-full mt-4 py-4 text-center bg-white text-[#0A1A2F] font-semibold " type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact

