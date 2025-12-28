"use client";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiSend,
} from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

import "./contact.css";

export default function ContactForm() {
  return (
    <section className="contact">
      <h2 className="contact__title">CONTACT ME</h2>

      <div className="contact__wrapper">
        {/* LEFT INFO */}
        <div className="contact__info">
          <div className="contact__item">
            <FiMapPin size={22} />
            <div>
              <strong>OUR OFFICE:</strong>
              <p>Jurain, Dhaka Bangladesh</p>
            </div>
          </div>

          <div className="contact__item">
            <FiPhone size={22} />
            <div>
              <strong>CONTACT NUMBER:</strong>
              <p>+1234321321</p>
            </div>
          </div>

          <div className="contact__item">
            <FiMail size={22} />
            <div>
              <strong>EMAIL US:</strong>
              <p>websitename@mail.com</p>
            </div>
          </div>

          <div className="contact__socials">
            <strong>SOCIALS</strong>
            <div className="social__icons">
              <span><FaFacebookF /></span>
              <span><FaXTwitter /></span>
              <span><FaLinkedinIn /></span>
              <span><FaGithub /></span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact__form">
          <div className="form__row">
            <div className="form__group">
              <label>FULL NAME</label>
              <input type="text" placeholder="Steve Milner" />
              <FiUser className="input__icon" />
            </div>

            <div className="form__group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="hello@websitename.com" />
              <FiMail className="input__icon" />
            </div>
          </div>

          <div className="form__group full">
            <label>SUBJECT</label>
            <input type="text" placeholder="Your Subject" />
            <FiUser className="input__icon" />
          </div>

          <div className="form__group full">
            <label>YOUR MESSAGE</label>
            <textarea placeholder="Write Your message" rows={5}></textarea>
          </div>

          <button type="submit" className="contact__btn">
            Send Me Message <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
