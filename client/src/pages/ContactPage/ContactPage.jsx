import React, { useEffect, useRef, useState } from "react";
import "../../styles/contactpage/contactpage.css";
import { HackerEffect } from "../../components";
import emailjs from "emailjs-com";
import logoIMG from "../../assets/images/logo_transparent.png";

function ContactPage() {
  const details_h2_1 = "Let's work";
  const details_h2_2 = "together";
  const email = "carpio.johnjazpher.dc.3188@gmail.com";
  const contact_number = "(+63)999 353 751";

  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Forms
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_2n6x5qe",
        "template_5w6vx2b",
        form.current,
        "pJMPMP0XK7HM6Ao7t"
      )
      .then(
        () => {
          setSubmit(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSubmit(false);
        }
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="contact__page wrapper">
      <div className="contact__container">
        <div className="contact__details">
          <div className="details">
            <div className="details__h2">
              <h2>
                {details_h2_1.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </h2>
              <h2>
                {details_h2_2.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </h2>
            </div>
            <span className="label PPNeueMontreal">Based in Philippines</span>
            <div className="local__time">
              <span
                className="local__time__label light__on"
                style={{ animationDelay: "1.1s" }}
              >
                Local TIme ►
              </span>
              <span className="time">{time}</span>
            </div>
            <div className="local__time">
              <span
                className="local__time__label light__on"
                style={{ animationDelay: "1.4s" }}
              >
                Email ►
              </span>
              <span className="time">
                {email.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </span>
            </div>
            <div className="local__time">
              <span
                className="local__time__label light__on"
                style={{ animationDelay: "1.7s" }}
              >
                Contact Number ►
              </span>
              <span className="time">
                {contact_number.split("").map((letter, index) => (
                  <HackerEffect
                    key={index} // Ensure unique key for each letter
                    text={letter === " " ? "\u00A0" : letter} // Handle spaces
                    className={"letter PPNeueMontreal"}
                    scrambleSpeed={10} // Adjust speed as needed
                    startDelay={index * 100}
                  />
                ))}
              </span>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div
              className="input__group light__on"
              style={{ animationDelay: "1.1s" }}
            >
              <span className="label PPEiko">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={submit}
                placeholder="Your Name"
                required
              />
            </div>
            <div
              className="input__group light__on"
              style={{ animationDelay: "1.4s" }}
            >
              <span className="label PPEiko">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={submit}
                placeholder="Your Email"
                required
              />
            </div>
            <div
              className="input__group light__on"
              style={{ animationDelay: "1.7s" }}
            >
              <span className="label PPEiko">Message</span>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={submit}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="PPEiko light__on"
              style={{ animationDelay: "1.9s" }}
              disabled={submit}
            >
              {submit ? <span class="loader"></span> : "submit"}
            </button>
          </form>
        </div>
        <div className="contact__socials">
          <div className="logo light__on" style={{ animationDelay: "1s" }}>
            <img src={logoIMG} alt="logo" />
          </div>
          <div className="socials">
            <a
              className="light__on"
              style={{ animationDelay: "1s" }}
              href="https://www.facebook.com/tsuguko34"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="light__on"
              style={{ animationDelay: "1.4s" }}
              href="https://www.linkedin.com/in/jazphercarpio/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="light__on"
              style={{ animationDelay: "1.8s" }}
              href="https://github.com/Tsuguko35"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
