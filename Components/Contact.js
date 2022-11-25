import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import doctor from '../public/butcher.png'
import { useRouter } from 'next/router';
import Modal from './Modal'

function Contact() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
        phone:"",
        subject:""
      });
      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (inputs.name == "" || inputs.email == "" || inputs.message == "" || inputs.phone == ""|| inputs.subject == "") {
            console.log("gee",inputs.email)
          setShow(true);
          setResponse("Enter Required Details");
          setTimeout(function () {
            setShow(false);
          }, 5000);
          return;
        } else {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
          };
    
          fetch("https://globaltechnologia.org/webAdmin/api/meet_shop_contact", requestOptions)
            .then((response) => {return response.json()})
            .then((res) => {
              console.log(res);
              setResponse(res.message);
              console.log(res.message);
          
            });
          setShow(true);
          setTimeout(function () {
            setShow(false);
          }, 3000);
        }
      };
  return (
    <>
    <div className={styles.background} id="contact">
    <div className={styles.contact} id='contact'>
      
        <div className={styles.sep}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                <Image
                    src={doctor}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
                </figure>
            </div>
            <div className={styles.right}>
            <form className={styles.form}>
            <h2 className={styles.h2}>Diversify with us.<br></br>Get in touch Today!</h2>
        <p className={styles.p}></p>
                     <div className={styles.crow}>
                     <input
                        type='text'
                        name='name'
                        id='name'
                        className={styles.input}
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                      />
                       <input
                        type='text'
                        name='email'
                        id='email'
                        className={styles.input}
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}
                      />
                     </div>
                    <div className={styles.crow}>
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='Phone Number'
                        className={styles.input}
                        value={inputs.phone} 
                        onChange={handleChange}
                      />
                        <input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                        className={styles.input}
                        value={inputs.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                    />
                     <button className={styles.button}  onClick={handleSubmit}>Send Message</button>
                  </form>
                 
            </div>
        </div>
        </div>
    </div>
    
    {show == true && <Modal message={response} />}
</>)
}

export default Contact