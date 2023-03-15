import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../Image/logo.png";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as link } from "react-router-hash-link";
// services
const Header = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "rgb(222,190,22)" }}>
        {/* <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          style={{ backgroundColor: "white" }}
          id="nav-main"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color:'white'}}> 
              Navbar
            </a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Container>
                <Grid container>
                  <Grid item lg={1.5} md={1} sm={1.5}>
                    <img src={logo} style={{width:'100%',height:'auto',marginTop:'-40%',marginBottom:'-28%'}}/>
                  </Grid>
                  <Grid item lg={1.5} md={1} sm={1.5} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <HashLink
                        to="#home"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <b>HOME</b>
                      </HashLink>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={1.2} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#why_bgvt"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <b>Company</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.5} md={2} sm={1.8} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#bit_game"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <HashLink
                          to="#services"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Services</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.6} md={2} sm={1.4} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <HashLink
                          to="#project"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Portfolio</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={1.5} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#raod_map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <HashLink
                          to="#course"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Courses</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.5} md={2} sm={3} xs={12}>
                    <Button
                      variant="outlined"
                      style={{
                        color: "white",
                        border: "1px solid rgb(129,23,49)",
                        backgroundColor: "rgb(129,23,49)",
                      }}
                      id="header_btn_resp"
                    >
                      Need Help?
                    </Button>
                  </Grid>
                </Grid>
              </Container>

            </div>
          </div>
        </nav> */}

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div class="container-fluid">
            <img src={logo} className="logo_img" />
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Container>
                <Grid container>
                  {/* <Grid item lg={1.5} md={1} sm={1.5}>
                    <img src={logo} style={{width:'100%',height:'auto',marginTop:'-40%',marginBottom:'-28%'}}/>
                  </Grid> */}
                  <Grid item lg={1.3}></Grid>
                  <Grid item lg={1.2} md={1} sm={1.5} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <HashLink
                        to="#home"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <b>HOME</b>
                      </HashLink>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={1.2} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#why_bgvt"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <b>Company</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.5} md={2} sm={1.8} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#bit_game"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <HashLink
                          to="#services"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Services</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.6} md={2} sm={1.4} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <HashLink
                          to="#project"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Portfolio</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={1.5} xs={12}>
                    <p className="header_text_resp_one" id="header_text_resp">
                      <a
                        href="#raod_map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <HashLink
                          to="#course"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>Courses</b>
                        </HashLink>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={3} xs={12}>
                    <HashLink 
                          to="#footer"
                           style={{textDecoration:'none'}}
                    >
                    <Button
                      variant="outlined"
                      style={{
                        color: "white",
                        border: "1px solid rgb(39,54,122)",
                        backgroundColor: "rgb(39,54,122)",
                      }}
                      id="header_btn_resp"
                    >
                      Need Help?
                    </Button>
                    </HashLink>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Header;
