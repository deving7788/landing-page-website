const Contact = () => {
  const emailChecker = (e) => {
      const email = e.target;
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Please enter a correct email address.");
    } else {
      email.setCustomValidity("");
    }
  };
  const submitHandler = async function (e) {
    e.preventDefault();
    const textArea = document.getElementById("comment");
    const clientMsg = textArea.value;
    const res = await fetch("http://localhost:5000", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        clientMsg,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <section id="contact" className="contact-section-container">
        <div className="contact-section-top-layer"></div>
        <div className="contact-section-content">
          <div>
            <h1>Give us a phone call or send an email.</h1>
            <div>
              <p>Tel: 00-000-000</p>
              <p>Fax: 00-000-000</p>
              <p>Email: admin@legalexpert.com</p>
              <p>123 Main Street Anytown, USA 12345</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitHandler}>
            <label htmlFor="comment">
              <h1>Or, leave a message. We will make contact.</h1>
            </label>
            <textarea
              id="comment"
              placeholder="Tell us what legal assistance you need. "
              maxLength="5000"
            ></textarea>
            <div>
              <article>
                <label htmlFor="text">Name</label>
                <input id="text" type="text" maxLength="50" />
              </article>
              <article>
                <label htmlFor="tel">Tel</label>
                <input id="tel" maxLength="50" />
              </article>
              <article>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  required
                  type="email"
                  maxLength="100"
                  onInput={emailChecker}
                />
              </article>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
