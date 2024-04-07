import './rating.css';

const Ratingpage = () => {
  return (
    <div className="container-ktb1">
      <h2 className="client-heading-ktb1">What our clients say</h2>
      <div className="testimonials-ktb1">
        <div className="testimonial-ktb1">
          <div className="profile-ktb1">
            <img src="/rating-pctrs/Ellipse 6.png" alt="Profile" />
            <b className="Alice-ktb1">Alice Khif</b>
          </div>
          <p> I've never felt more confident in my smile! Thank you to the skilled
            and compassionate team at this clinic for their exceptional work.</p>
          <div className="rating-ktb1">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
        </div>
        <div className="testimonial-ktb1">
          <div className="profile-ktb1">
            <img src="/rating-pctrs/Ellipse 6.png" alt="Profile" />
            <b className="Alice-ktb1">Alice Khif</b>
          </div>
          <p> I've never felt more confident in my smile! Thank you to the skilled
             and compassionate team at this clinic for their exceptional work.</p>
          <div className="rating-ktb1">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
        </div>
        <div className="testimonial-ktb1">
          <div className="profile-ktb1">
            <img src="/rating-pctrs/Ellipse 6.png" alt="Profile" />
            <b className="Alice-ktb1">Alice Khif</b>
          </div>
          <p> I've never felt more confident in my smile! Thank you to the skilled
           and compassionate team at this clinic for their exceptional work.</p>
          <div className="rating-ktb1">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
        </div>
      </div>
      <b className="share-your-experience-ktb1">Share your experience with us!</b>
      <div className="flex-wave-ktb1">
      <div className="comment-container-ktb1">
      <img className="comment-icon-ktb1" alt="" src="/rating-pctrs/Group 106.svg" />
        <input type="text" placeholder="write a comment.." />
      </div>
      <img className="vector-icon-ktb1" alt="" src="/rating-pctrs/Vector.svg" />
      </div>
    </div>
  );
};

export default Ratingpage;
