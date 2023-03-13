import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img1 from '../../../Image/img1.png'
import "./index.css";

const Inventing = () => {
  return (
    <div className='bg_we_zax' style={{backgroundColor:'black'}} id='home'>
      <Container>
        <Grid container>
          <Grid item lg={7} md={7} sm={7.5} xs={12} className="we_zax_heading">
            <h1>
              <b>
            INVENTING AND MAKING <br></br>IT HAPPEN
              </b>
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable <br></br>content of a page when looking at its layout. The
              point.
            </p>
            <Button  style={{textAlign:'start',display:'block',backgroundColor:'rgb(0,163,255)',color:'white',marginBottom:'20px'}}>Request A Quote</Button>
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
