import React from "react";
import "../styles/Contact.scss";
import pl from "../img/pl.svg";
import bg from "../img/bg.svg";

const Contact = () => {
  let style = {
    width: "100%",
    color: "white",
    textAlign: "center",
  };
  return (
    <div id="contact" class="contact">
      <div class="contact-box">
        <span style={style}>
          <b>Masz pytania?</b> Skontaktuj sie z nami:
        </span>

        <form
          class="form"
          id="contactForm"
          method="post"
          novalidate
          action="send-script.php"
        >
          <div class="form-row">
            <label for="field-name">Imię</label>
            <input
              value=""
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
            <input
              value=""
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
            <textarea
              name="message"
              required
              data-error="Musisz wypełnić pole"
              id="field-message"
              pattern=".+"
            ></textarea>
          </div>
          <div class="form-row">
            <label class="checkbox-cnt">
              <input
                type="checkbox"
                required
                data-error="Musisz wypełnić pole"
                name="regulation"
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

      <div class="contact-box">
        <div class="contact-box-pl">
          <img src={pl} alt="" />

          <div class="contact-box-pl-data">
            <i class="fas fa-envelope"></i> <span>biuro@evastigo.com</span>
            <i class="fas fa-phone-alt"></i> <span>+48 577 904 445</span>
          </div>
        </div>
        <div class="contact-box-bg">
          {" "}
          <img src={bg} alt="" />
          <div class="contact-box-bg-data">
            <i class="fas fa-envelope"></i> <span>office@evastigo.com</span>
            <i class="fas fa-phone-alt"></i> <span>+359 884043256</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
