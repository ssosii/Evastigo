import React, { useEffect, useState } from "react";
import pl from "../img/pl.svg";
import bg from "../img/bg.svg";
import contact from "../img/contact.svg";
import API from "./../helper/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isAccept, setIsAccept] = useState(false);
  const [isSuccess, setSuccess] = useState("");

  const [errors, setErrors] = useState({});
  let style = {
    width: "100%",
    color: "white",
    textAlign: "center",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    let errors = {};
    if (name.length == 0) {
      errors["name"] = "Musisz wypełnić imię";
    }
    if (email.length == 0) {
      errors["email"] = "Musisz wypełnić email";
    }
    if (content.length == 0) {
      errors["content"] = "Musisz wypełnić treść wiadomości";
    }
    if (isAccept == false) {
      errors["isAccept"] = "Musisz zaakceptować politykę prywatności";
    }
    setErrors(errors);
    const isValid = Object.keys(errors).length == 0 ? true : false;
    if (isValid) {
      setSuccess(true);
      API.post("http://ssosii.kylos.pl/mail/index.php", {
        name,
        email,
        content,
      });
      setName("");
      setEmail("");
      setContent("");
      setIsAccept(false);
    }
  };

  return (
    <div id="contact" class="contact">
      <img className="contact-img" src={contact} alt="contact-img"></img>

      <div class="contact-box">
        <span style={style}>
          <b>Masz pytania?</b> Skontaktuj sie z nami:
        </span>
        {isSuccess && <div class="form-success">Mail wysłany poprawnie</div>}
        <form
          class="form"
          id="contactForm"
          method="post"
          noValidate
          action="send-script.php"
          onSubmit={handleSubmit}
        >
          <div class="form-row">
            <label for="field-name">Imię</label>
            {errors["name"] && <div class="form-error">{errors["name"]}</div>}
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              required
              id="field-name"
              data-error="Wypełnij to pole"
              pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+"
            />
          </div>
          <div class="form-row">
            <label for="field-email">Email</label>
            {errors["email"] && <div class="form-error">{errors["email"]}</div>}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              required
              id="field-email"
              data-error="Wpisz poprawny email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
          </div>
          <div class="form-row">
            <label for="field-message">Wiadomość</label>
            {errors["content"] && (
              <div class="form-error">{errors["content"]}</div>
            )}
            <textarea
              onChange={(e) => setContent(e.target.value)}
              name="message"
              required
              data-error="Musisz wypełnić pole"
              id="field-message"
              pattern=".+"
              value={content}
            />
          </div>
          <div class="form-row">
            {errors["isAccept"] && (
              <div class="form-error">{errors["isAccept"]}</div>
            )}
          
            <label class="checkbox-cnt">
              <input
                onChange={(e) => setIsAccept(e.target.value)}
                type="checkbox"
                required
                value={isAccept}
                data-error="Musisz wypełnić pole"
                name="regulation"
                checked={isAccept}
              />
              <i class="state" aria-hidden="true"></i>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                libero arcu, vulputate sit amet mattis sit amet, ultrices in
                erat. Aenean suscipit arcu ac lorem lacinia ut scelerisque
                turpis commodo.
              </span>
            </label>
          </div>
          <div class="form-row">
            <button type="submit" class="submit-btn">
              Wyślij
            </button>
          </div>
        </form>
      </div>

      <div class="contact-box contact-box--destination">
        <div class="contact-box-pl">
          <img src={pl} alt="" />

          <div class="contact-box-pl-data">
            <i class="fas fa-envelope"></i> <span>biuro@evastigo.com</span>
            <br />
            <i class="fas fa-phone-alt"></i> <span>+48 577 904 445</span>
          </div>
        </div>
        <div class="contact-box-bg">
          {" "}
          <img src={bg} alt="" />
          <div class="contact-box-bg-data">
            <i class="fas fa-envelope"></i> <span>office@evastigo.com</span>
            <br />
            <i class="fas fa-phone-alt"></i> <span>+359 884043256</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
