import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Адрес:",
      info: "Главный офис: Василеос Павлу 28, Район Церкви Святого Лазаря Николау Россу 18, Район Центральной почты P.O.Box 40096 почтовый ящик",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Ларнака",
      info: "Смотреть на карте",
      link: "contact",
    },
    // {
    //   text: "Total Free Customer Care",
    //   info: "+(0) 123 050 945 02",
    //   link: "tel:+012305094502",
    // },
    // {
    //   text: "Need Live Support?",
    //   info: "hi@homez.com",
    //   link: "mailto:hi@homez.com",
    // },
  ];

  return (
    <div className="row">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info d-flex" key={index}>
          <p className="info-title mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
