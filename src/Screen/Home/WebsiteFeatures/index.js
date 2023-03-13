import Grid from "@mui/material/Grid";
import img2 from "../../../Image/img2.png";
import img3 from "../../../Image/img3.png";
import img4 from "../../../Image/img4.png";
import img5 from "../../../Image/img5.png";
import img6 from "../../../Image/img6.png";
import img7 from "../../../Image/img7.png";
import "./index.css";

const WebsiteFeatures = () => {
  return (
    <div style={{ backgroundColor: "black" }} id="services">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        <h3>Website Features For</h3> <br></br> Start-Up And Bussiness Plain
      </h1>
      <Grid container className="website_feature_main">
        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img2} alt="" />
          <p>
            <b>LIVE CHAT</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
            LIVE CHAT We provide live chat integration services to interact with
            website visitors in real-time. Our company provides simple chat
            solutions that raise engagement, increase conversions, and enhance
            customer fulfillment.
          </p>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img3} alt="" />
          <p>
            <b>RESPONSIVE DESIGN</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
          Our company offers responsive design services that assure your website will adjust to any device and provide the best user experience. With our mobile-friendly solutions, increase your online presence.
          </p>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img4} alt="" />
          <p>
            <b>PAYMENT GATEWAY INTEGRATION</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
          We can assist you in streamlining online transactions and giving your clients a flawless checkout experience with our payment gateway integration services. With the help of our trusted solutions, you may simplify your payment procedures and maximize client satisfaction.
          </p>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img5} alt="" />
          <p>
            <b>SPEED LIGHT</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
          We provide quick page load speed without compromising your security. Our network offers reliable and secure connectivity, so your users  can enjoy flawless online experiences.
          </p>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img6} alt="" />
          <p>
            <b>SOCIAL MEDIA INTEGRATION
</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
          Maximize your social media impact with our expert Social Media integration services. Our agency can help you streamline your social media presence and reach your target audience with greater efficiency and effectiveness.
          </p>
        </Grid>

        <Grid
          item
          lg={3.5}
          md={3.5}
          sm={5}
          xs={11}
          className="wesbsite_feature_child"
        >
          <img src={img7} alt="" />
          <p>
            <b>
24/7 PHONE SUPPORT
</b>
          </p>
          <p style={{ color: "white", textAlign: "justify", padding: "15px" }}>
          Our agency provides 24/7 website support services that ensure your website stays up and running smoothly around the clock. Trust our experienced team for reliable and efficient support.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default WebsiteFeatures;
