import "./css/about.css"

const videoUrl = "https://res.cloudinary.com/feyton/video/upload/v1645375050/Brainz/BB_yvhlg7.mp4"

function AboutUsDiv() {
    return ( 
        <div class="about-us center" id="about-us">

            <h2 class="display-2">About Us</h2>
            <video autoplay muted loop class="video-bg" id="bg-video">
                <source src={videoUrl} type="video/mp4"/>
            </video>
            <div class="content">
                <div class="story">
                    <h2>Our Story</h2>
                    <br/>
                    <p>Beautiful Brainz is an initiative of young professional women aged 18-30, with a mission of
                        supporting young girls aged 8-12 to stay and excel in school. According to the ministry of
                        Education in Rwanda, the female school dropout rate was 6.8% in 2019. Some of the main causes of
                        school dropouts are poverty, family conflicts, irresponsible parenting, being orphaned and
                        family size.(CEC Journal).</p>
                    <p>Beautiful Brainz goal is to ensure that all girls enroll in school, stay and excel in school, by
                        mitigating the severity of most of the major causes of school dropout. We support girls aged
                        8-12 from vulnerable families to access basic requirements needed by girls at school like school
                        uniforms, shoes, books and sanitary materials to encourage girls to stay and excel in school .
                    </p>
                </div>
                <div class="player">

                    <div class="video">
                        <h2>Watch Video</h2>
                        <video src={videoUrl} class="video" poster="assets/video-cover.jpg" controls
                            id="main-video"></video>

                    </div>

                    <div class="buttons">
                        <div class="share-div">
                            <span>Share</span>
                            <span onClick="
                            window.open(
                              'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href), 
                              'facebook-share-dialog', 
                              'width=626,height=436'); 
                            return false;"><i class="fab fa-facebook"></i></span>
                            <span><i class="fab fa-twitter"></i></span>

                        </div>
                        <button class="btn btn-donate">DONATE</button>
                    </div>

                </div>
            </div>


        </div>
     );
}

export default AboutUsDiv;