import { useState, useEffect, useContext } from "react";
import style from "../../styles/Help/Help.module.css"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Form } from "react-bootstrap";
import { MenuContext } from "../../pages/_app";
import { CgArrowRight } from "react-icons/cg";

function HelpForm() {
  const [value, setValue] = useState("");

  //hide menu when render new page
  const { showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
  return (
    <section className={style.form_container}>
      <div className="container">
        <div className="row">
          <article className="col-md-4">
            <h1 className={`title-3 ${style.form_title}`}>Contact the Photoeditzone</h1>
          </article>

          <article className="col-md-8">
            <Form className="row">
              <div className="col-md-6">
                <Form.Group className="mb-4" controlId="fristname">
                  <Form.Label className={style.contact_label}>
                    WHAT’S YOUR FIRST NAME?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={style.contact_input}
                    placeholder="Your first name"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-4" controlId="lastname">
                  <Form.Label className={style.contact_label}>
                    WHAT’S YOUR LAST NAME?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={style.contact_input}
                    placeholder="Your last name"
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className={style.contact_label}>
                    WHAT’S YOUR EMAIL?
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={style.contact_input}
                    placeholder="Your email address"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-4" controlId="phoneNumber">
                  <Form.Label className={style.contact_label}>
                    WHAT’S YOUR PHONE NUMBER?
                  </Form.Label>
                  <div className={style.phnInputk}>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      defaultCountry="US"
                      onChange={setValue}
                    />
                  </div>
                </Form.Group>
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={style.contact_label}>
                  WHAT’S YOUR MESSAGE?
                </Form.Label>
                <Form.Control
                  className={style.contact_input}
                  as="textarea"
                  rows={6}
                  placeholder="Write your message here"
                />
              </Form.Group>
              <div className="text-end">
                <button className={`main-btn btn-center-with-icon ${style.btn}`}>Submit <CgArrowRight className="fs-24"/></button>
              </div>
            </Form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HelpForm;
