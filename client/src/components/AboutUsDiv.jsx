import "./css/about.css";

const videoUrl =
  "https://res.cloudinary.com/feyton/video/upload/v1645375050/Brainz/BB_yvhlg7.mp4";

function AboutUsDiv() {
  return (
    <div className="about-us center min-h-screen h-fit" id="about-us">
      <h2 className="text-5xl py-4 text-center font-bold">About Us</h2>
      <div className="content">
        <div className="story">
          <h2 className="text-center text-3xl font-bold">Our Story</h2>
          <br />
          <p className="text-sm text-h-3">
            Beautiful Brainz is an initiative of young professional women aged
            18-30, with a mission of supporting young girls aged 8-12 to stay
            and excel in school. According to the ministry of Education in
            Rwanda, the female school dropout rate was 6.8% in 2019.
          </p>
          <p className="text-sm text-h-3">
            Beautiful Brainz goal is to ensure that all girls enroll in school,
            stay and excel in school, by mitigating the severity of most of the
            major causes of school dropout. We support girls aged 8-12 from
            vulnerable families to access basic requirements needed by girls at
            school like school uniforms, shoes, books and sanitary materials to
            encourage girls to stay and excel in school .
          </p>
        </div>
        <div className="player md:pr-4">
          <div className="video">
            <h2 className="font-bold text-center">Watch Video</h2>
            <video
              src={videoUrl}
              className="video"
              poster="https://res.cloudinary.com/feyton/image/upload/v1645375055/Brainz/video-cover_rr5xvu.jpg"
              controls
              id="main-video"
            ></video>
          </div>

          <div className="buttons py-4">
            <div className="share-div">
              <span>Share</span>
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </div>
            <button className="btn btn-donate">DONATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsDiv;
