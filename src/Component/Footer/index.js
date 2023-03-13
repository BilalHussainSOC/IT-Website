import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn"
import logo from "../../Image/logo.jpg";
import letter from "../../Image/icon/letter.png";
import linkedin from "../../Image/icon/linkedin.png";
import twitter from "../../Image/icon/twitter.png";
import insta from "../../Image/icon/insta.png";
import facebook from "../../Image/icon/facebook.png";
import "./index.css";

const Footer = () => {
  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    contact:'',
    message:''
  })

  const handleChange=(key,e)=>{
    setformdata({...formdata,[key] :e.target.value})
  }

  const handleClick=()=>{
    console.log(formdata)
  }
  return (
    <div>
      <Container>
        <Grid container className="footer_main">
          <Grid item lg={4.3} md={5} sm={7} xs={12} className="footer_child" style={{marginBottom:'50px'}}>
            <h4 style={{ fontFamily: "Times New Roman, Times, serif"}}>Get A Free Consultation Now!</h4>
            <p style={{ marginLeft: "10px" }}>Your Name</p>
            <input type="text" required autoComplete="off"  className="footer_input"   value={formdata.name}  onChange={(e)=>handleChange('name',e)} />
            <p style={{ marginTop: "30px", marginLeft: "10px" }}>
              Email Address
            </p>
            <input type="text" className="footer_input" value={formdata.email} onChange={(e)=>handleChange('email',e)} />
            <p style={{ marginTop: "30px", marginLeft: "10px" }}>
              Contact Number
            </p>
            <input type="text" className="footer_input" value={formdata.contact} onChange={(e)=>handleChange('contact',e)} />
            <p style={{ marginTop: "30px", marginBottom: "-2px" }}>
              You Are Looking For....
            </p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Bussiness Information Website"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="E-Commerce Bussiness Website"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Blog Website"
              />
            </FormGroup>
            <p style={{ marginTop: "30px", marginLeft: "10px" }}>Message</p>
            <textarea type="text" className="footer_input" value={formdata.message} onChange={(e)=>handleChange('message',e)} />
            <Button
              style={{
                textAlign: "end",
                display: "block",
                backgroundColor: "rgb(0,163,255)",
                color: "white",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
              onClick={handleClick}
            >
              Request A Quote
            </Button>
          </Grid>
          <Grid item lg={1} md={1}></Grid>
          <Grid item lg={4.3} md={5} sm={7} xs={12}>
            <div className="footer-child-one">
              <Grid container style={{ padding: "20px" }}>
                <Grid item lg={2} md={2.5} sm={3} xs={3}>
                  <AddIcCallIcon
                    style={{ color: "rgb(0,163,255)", fontSize: "40px" }}
                  />
                </Grid>
                <Grid item lg={5} md={6}>
                  <p>
                    <b>Phone Or What app</b>
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      fontSize: "13px",
                      marginBottom: "-3px",
                    }}
                  >
                    Click To Call : +937423784
                  </p>
                </Grid>
              </Grid>
            </div>

            <div className="footer-child-one" style={{ marginTop: "25px" }}>
              <Grid container style={{ padding: "20px" }}>
                <Grid item lg={2} md={2.5} sm={3} xs={3}>
                  <EmailIcon
                    style={{ color: "rgb(0,163,255)", fontSize: "40px" }}
                  />
                </Grid>
                <Grid item lg={5}>
                  <p style={{ textAlign: "start" }}>
                    <b>Support Email</b>
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      fontSize: "13px",
                      marginBottom: "-1px",
                      textAlign: "start",
                    }}
                  >
                    info@worthissolutions
                  </p>
                </Grid>
              </Grid>
            </div>

            <div className="footer-child-one" style={{ marginTop: "25px" }}>
              <Grid container style={{ padding: "20px" }}>
                <Grid item lg={2} md={2.5} sm={3} xs={3}>
                  <LocationOnIcon
                    style={{ color: "rgb(0,163,255)", fontSize: "40px" }}
                  />
                </Grid>
                <Grid item lg={7}>
                  <p style={{ textAlign: "start" }}>
                    <b>Worth It Solution</b>
                  </p>
                  <p
                    style={{
                      textAlign: "start",
                      marginTop: "-15px",
                      fontSize: "13px",
                      marginBottom: "-3px",
                    }}
                  >
                    Shop No:It is a long established fac.
                  </p>
                </Grid>
              </Grid>
            </div>
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <img src={logo} className="footer-logo" />
              </Grid>
              <Grid item lg={5} md={5} sm={5} xs={5} style={{ marginTop: "18%" }}>
                <h4  id='follow'>Follow Us ON</h4>
                <Grid container>
                  <Grid item lg={1} md={1.5} sm={1.5} xs={1.5}></Grid>
                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <img src={facebook} alt="" className="footer_icon" />
                  </Grid>
                  <Grid item lg={0.6} md={0.7} sm={0.7} xs={0.5}></Grid>
                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <img src={letter} alt="" className="footer_icon" />
                  </Grid>
                  <Grid item lg={0.6} md={0.7} sm={0.7} xs={0.5}></Grid>

                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <img src={linkedin} alt="" className="footer_icon" />
                  </Grid>
                  <Grid item lg={0.6} md={0.7} sm={0.7} xs={0.5}></Grid>

                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <img src={insta} alt="" className="footer_icon" />
                  </Grid>
                </Grid>
                
              </Grid>
            </Grid>
            <Grid container style={{ justifyContent: "end" }}>
            <Grid item lg={5.2} md={5.5} sm={5} xs={5.5}>
              <Button
        
                id='back_to_btn'
              >
                Back To Home
              </Button>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
