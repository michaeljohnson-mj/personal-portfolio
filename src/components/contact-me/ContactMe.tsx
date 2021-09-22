import "./ContactMe.css";
import { contactMe } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactMe(props: any) {
  const theme = props.theme;
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row no-container title-holder">
          <h1 className="title align-text-center">{contactMe.title}</h1>
          <span className="sub-title align-text-center">
            Let's connect! I am available on&nbsp;
            <a
              className="contact-link"
              style={{ color: theme.themeColor }}
              href="https://www.linkedin.com/in/michaeljohnson-mj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            . If you want to get in touch or just say hi, I'd love to hear from
            you. I can help you with Web and Mobile Application Development.
          </span>
        </div>
        <div className="row no-container">
          {contactMe.contacts.map((contact, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                key={index}
              >
                <div className="contact-info-holder">
                  <FontAwesomeIcon
                    color={theme.themeColor}
                    className="contact-icon"
                    icon={contact.isEmail ? faEnvelope : faMapMarkerAlt}
                  />
                  <div className="contact-title">{contact.title}</div>
                  {contact.isEmail ? (
                    <a
                      href={
                        contact.isEmail
                          ? "mailto:michaeljohnsonblrtech@gmail.com"
                          : ""
                      }
                      style={{ color: theme.themeColor, cursor: 'pointer', textDecoration: 'none' }}
                      className="contact-data"
                    >
                      {contact.contact}
                    </a>
                  ) : (
                    <span
                      style={{ color: theme.themeColor }}
                      className="contact-data"
                    >
                      {contact.contact}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
