"use client";
import { FC, useState } from "react";
import scss from "./Contact.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import phone from "../../../assets/image/icons-phone.png";
import email from "../../../assets/image/icons-mail.png";
import axios from "axios";

const Contact: FC = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userMassage, setUserMassage] = useState<string>("");
  const formSubmit = () => {
    const my_id = "-1002320898976";
    const token = "7570927555:AAGQ5hE36qSmk4uPu0eOY8Rsbedh3aXk93k";
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    let newUser = {
      chat_id: my_id,
      parse_mode: "html",
      text: `order:
      name: ${userName},
      email: ${userEmail},
      phone: ${userPhone},
      massage: ${userMassage}`,
    };
    if (
      userName.trim() === "" ||
      userEmail.trim() === "" ||
      userPhone.trim() === "" ||
      userMassage.trim() === ""
    ) {
      alert("Заполните пустую ячейку");
    } else {
      axios.post(url_api, newUser);
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setUserMassage("");
    }
  };
  return (
    <section className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.home_contact}>
            <span onClick={() => router.push("/")}>Home </span>/
            <span className={scss.color}> Contact</span>
          </div>
          <div className={scss.block}>
            <div className={scss.left}>
              <div className={scss.top}>
                <div className={scss.phone}>
                  <Image src={phone} alt="img" />
                  <h1>Call To Us</h1>
                </div>
                <div className={scss.text}>
                  <h1>We are available 24/7, 7 days a week.</h1>
                  <h1>Phone: +8801611112222</h1>
                </div>
              </div>
              <div className={scss.center}></div>
              <div className={scss.bottom}>
                <div className={scss.phone}>
                  <Image src={email} alt="img" />
                  <h1>Write To US</h1>
                </div>
                <div className={scss.text}>
                  <h1>
                    Fill out our form and we will contact you within 24 hours.
                  </h1>
                  <h1>Emails: customer@exclusive.com</h1>
                  <h1>Emails: support@exclusive.com</h1>
                </div>
              </div>
            </div>
            <div className={scss.right}>
              <div className={scss.top}>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  onChange={(e) => setUserPhone(e.target.value)}
                  value={userPhone}
                  type="text"
                  placeholder="Your Phone"
                />
              </div>
              <div className={scss.center}>
                <textarea
                  className={scss.inputMessage}
                  onChange={(e) => setUserMassage(e.target.value)}
                  value={userMassage}
                  id="message"
                  placeholder="Your Massage"
                ></textarea>
              </div>
              <div className={scss.bottom}>
                <button onClick={() => formSubmit()}>Send Massage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
