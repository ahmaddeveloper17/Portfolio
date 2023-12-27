
export default function Contect() {
  return (
    <div style={{backgroundColor:"#010101"}}><section className="contact" id="contact">
    <div className="max-width">
      <h2 className="title fadein">Contact me</h2>
      <div className="contact-content">
        <div className="column left">
          <div className="text">Reach Out to me!</div>
          <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
          <div className="icons">
            <div className="row">
              <img src="data:image/jpeg;base64,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" alt="git" width={40} height={40} />
              <div className="info">
                <div className="head">Name</div>
                <div className="sub-title">Muhammmad Ahmad</div>
              </div>
            </div>
            <div className="row">
            <img src="data:image/png;base64,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" alt="git" width={40} height={40} />
              <div className="info">
                <div className="head">Address</div>
                <div className="sub-title">Faisalabad, Pakistan</div>
              </div>
            </div>
            <div className="row">
             <img src="data:image/png;base64,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" alt="git" width={40} height={40} />
              <div className="info">
                <div className="head">Email</div>
                <div className="sub-title">mahmadasim123@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="text1">Stay Connected</div>
          <div>
            <div className="wrapper">
              <div className="button1">
                <div className="icon"style={{backgroundColor:"blue"}}>
                  <a href="https://www.linkedin.com" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a></div><a href="https://www.linkedin.com" target="_blank">
                  <span>LinkedIn </span></a>
              </div>
              <div className="buttonmob">
                <div className="button1">
                  <div className="icon"style={{backgroundColor:"#4CB9E7"}}>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter" />
                    </a></div><a href="https://twitter.com" target="_blank">
                    <span>Twitter </span></a>
                </div>
              </div>
              <div className="buttonmob1" />
              <div className="button1">
                <div className="icon" style={{backgroundColor:"gray"}}>
                  <a href="https://github.com/ahmaddeveloper17" target="_blank">
                    <i className="fab fa-github" />
                  </a></div><a href="https://github.com/ahmaddeveloper17" target="_blank">
                  <span>Github </span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="column right">
          <div className="text">Message me</div>
          <form action="#">
            <div className="fields">
              <div className="field name">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="field email">
                <input type="email" placeholder="Email" name="email" required />
              </div>
            </div>
            <div className="field">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="field textarea">
              <textarea cols={30} rows={10} placeholder="Describe Project..." required defaultValue={""} />
            </div>
            <div className="button">
              <button type="submit">Send Message <i className="fas fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}
