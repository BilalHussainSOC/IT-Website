import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img1 from '../../../Image/img1.png'
import "./index.css";

const Inventing = () => {
  const navigate=useNavigate()
  return (
    <div className='bg_we_zax' style={{backgroundColor:'black'}} id='home'>
      <Container>
        <Grid container>
          <Grid item lg={7} md={7} sm={7.5} xs={12} className="we_zax_heading">
            <h1>
              <b>
              BIGIT IT SOLUTIONS - All your IT problems ...Solved
              </b>
            </h1>
            <p>
            Get the best IT services from Web development to SEO to Marketing.<br></br> We do it all!
            </p>
            {/* <Button  style={{textAlign:'start',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px'}} >Request A Quote</Button> */}
          </Grid>
          <Grid item lg={5} md={5} sm={4.5} xs={12} className='inventing_img'>
            <img src={img1} alt=''/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Inventing;
