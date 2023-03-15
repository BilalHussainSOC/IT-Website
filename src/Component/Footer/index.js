import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from '../../Image/logo.png'
import letter from "../../Image/icon/letter.png";
import linkedin from "../../Image/icon/linkedin.png";
import twitter from "../../Image/icon/twitter.png";
import insta from "../../Image/icon/insta.png";
import facebook from "../../Image/icon/facebook.png";
import "./index.css";
import { padding } from "@mui/system";

const Footer = () => {
  // const [formdata,setformdata]=useState({
  //   name:'',
  //   email:'',
  //   contact:'',
  //   message:''
  // })

  // const handleChange=(key,e)=>{
  //   setformdata({...formdata,[key] :e.target.value})
  // }

  // const handleClick=()=>{
  //   console.log(formdata)
  // }
  return (
    <div id='footer'>
      <Container>
        <Grid container className="footer_main">
          {/* <Grid item lg={4.3} md={5} sm={7} xs={12} className="footer_child" style={{marginBottom:'50px'}}>
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
           Submit
             </Button>
          </Grid> */}

          <Grid item lg={4.3} md={5} sm={5.9} xs={12} className="footer_child" >
            <form
              action="https://formsubmit.co/bc5084ab169d2e7bc9c22c57a7b5bc61"
              onsubmit="myFunction()"
              method="POST"
              class=" p-4 p-md-5 contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                  href='#footer'
                value="http://localhost:3001/#footer"
              />
              <h5
            
                className='get_text'
              >
                Get A Free Consultation Now!
              </h5>
              <div class="form-group">
                <p style={{ marginLeft: "10px" }}>Your Name</p>
                <input
                  type="name"
                  class="form-control"
                  name="Name"
                  id="Name"
                  required
                  autoComplete="off"
                  className="footer_input"
                />
              </div>
              <div class="form-group">
                <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                  Email Address
                </p>
                <input
                  type="email"
                  class="form-control"
                  name="Email"
                  id="Email"
                  className="footer_input"
                />
              </div>
              <div class="form-group">
                <p style={{ marginTop: "30px", marginLeft: "10px" }}>
                  Contact Number
                </p>
                <input
                  type="number"
                  class="form-control"
                  name="Contact"
                  id="Email"
                  className="footer_input"
                />
              </div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Bussiness  Website"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="E-Commerce  Website"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Blog Website"
                />
              </FormGroup>
              <div class="form-group">
                <p style={{ marginTop: "30px", marginLeft: "10px" }}>Message</p>
                <textarea
                  name="massage"
                  cols="30"
                  rows="7"
                  class="form-control"
                  id="Message"
                  className="footer_input"
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  onclick="alert('Thanks For Contacting Us We Will Connect You Soon.')"
                  value="Submit"
                  // class="btn btn-primary py-3 px-5;modal-toggle"

                  style={{
                    textAlign: "end",
                    display: "block",
                    backgroundColor: "rgb(0,163,255)",
                    color: "white",
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    border: "none",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                    paddingBottom: "7px",
                    paddingTop: "7px",
                  }}
                />
              </div>
            </form>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={4.3} md={5} sm={5} xs={12}>
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
                    Click To Call : 8278427007
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
                    bigitsolutions@gmail.com
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
              <Grid item lg={5} md={5} sm={5} xs={4}>
                <img src={logo} className="footer-logo" />
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={2}></Grid>
              <Grid
                item
                lg={5}
                md={5}
                sm={5}
                xs={5}
                style={{ marginTop: "18%" }}
              >
                <Grid item lg={1}></Grid>
                <h4 id="follow">Follow Us ON</h4>
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
              {/* <Grid item lg={5.2} md={5.5} sm={5} xs={5.5}>
              <Button
        
                id='back_to_btn'
              >
                Back To Home
              </Button>
            </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
