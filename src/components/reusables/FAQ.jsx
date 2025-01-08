import style from "../../styles/FAQStyles.module.css";


function FAQ({ faqs, openIndex, toggleAnswer }) {
    return (
      <div className={style.faqContainer}>
        <h1 className={style.cardTitle}>FAQ</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={style.faqItem}>
            <div className={style.question} onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            {openIndex === index && <div className={style.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    );
  }

  export default FAQ
  