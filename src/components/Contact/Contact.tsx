import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        {process.env.EMAIL_SERVICE_ID}
        <p>
          If you saw my potential or want to talk to me, don&lsquo;t hesitate to send me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:talhaakhter01@gmail.com">talhaakhter01@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+923342137306">(+92) 334-2137306</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
