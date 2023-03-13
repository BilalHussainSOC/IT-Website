import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from '../../Image/logobg.png'
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as link } from "react-router-hash-link";
// services
const Header = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "rgb(222,190,22)" }}>
        {/* <Grid container>
          <Grid item lg={0.3}></Grid>
          <Grid item lg={2.5} md={2} sm={2} xs={4} className="header_logo">
            <p>Emil:info@worthissolutions</p>
          </Grid>
          <Grid item lg={2} style={{paddingTop:'4px'}}>
            <Grid container>
              <Grid item lg={3} className="header_icon">
                <img src={facebook} alt="" />
              </Grid>
              <Grid item lg={7} style={{paddingTop:'10px',marginLeft:'-12px'}}>
                +9193423543
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4.5} md={7} sm={7} xs={2}></Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={facebook} alt="" />
          </Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={linkedin} alt="" />
          </Grid>

          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={insta} alt="" />
          </Grid>
        </Grid> */}
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          style={{ backgroundColor: "white" }}
          id="nav-main"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color:'white'}}> 
              Navbar
            </a>
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
                        // marginBottom:'-10px',marginTop:'-10px'
                      }}
                      id="header_btn_resp"
                    >
                      Need Help?
                    </Button>
                  </Grid>
                </Grid>
              </Container>
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Header;
