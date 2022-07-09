import '../App.css'
import headshot from "../pictures/head.jpg"

export default function Info () {
  return (
    <div class="info">
      <img className="info--headshot" src={headshot} placeholder="Matthew Sah headshot" alt="Matthew Sah headshot"></img>
      <h2 className="info--name">Matthew Sah</h2>
      <h4 className="info--occupation">Software Engineer</h4>
      <p className="info--website">google.com</p>
      <div className="buttons">
        <a href="https://www.gmail.com">
          <button className="info--email-button">Email</button>
        </a>
        <a href="https://www.linkedin.com/in/matthew-sah-260546162/">
          <button className="info--linkedin-button">Linkedin</button>
        </a>
      </div>
    </div>
  )
}