import authorPhoto from "../../../assets/profile_picture.jpg";
import facebookIcon from "../../../assets/facebook-icon.png";
import instagramIcon from "../../../assets/instagram-icon.svg";
import twitterIcon from "../../../assets/twitter-icon.svg";

function Author() {
  return (
    <section className="author" aria-labelledby="author-heading">
      <div>
        <h2 id="author-heading">The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis
          eleifend a nam sit turpis nostra. Tempus suspendisse libero
          curae faucibus lobortis litora bibendum praesent! Eget quam
          magna, diam commodo interdum sapien magnis.
        </p>
      </div>

      <img
        src={authorPhoto}
        width="200"
        alt="Portrait of the author"
      />

      <div className="author-socials">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="X" />
      </div>
    </section>
  );
}

export default Author;