import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// --- Imports --- //
// import React from "react";
import ReactDOM from "react-dom";

// --- Material Ui Imports --- //
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import Footer from "../../Footer/Footer";

// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "../../../FullImageCard";


import './home.css'
// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },


  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 345
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 140
  },


  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)"
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div style={{ width: '100%', height: '80%', display: 'flex' }}>
      <div style={{ flex: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="image">
          <img src="./images/switch.png" alt="Switch-Board" width={"100%"} height="auto" />
        </div>
      </div>
      <div style={{ flex: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <p>"I-Swith" is The New Revlution Technology of Automation.<br />
          IF You Be Like A Smart Then Install I-Switches
        </p>
      </div>
      <Footer />
    </div>







    // <Container className={classes.container}>
    //   <Typography variant="h3" paragraph>
    //     Material Ui Full Image Card
    //   </Typography>
    //   <Typography variant="h5" paragraph>
    //     Full image Material Ui card with text and action overlay.
    //   </Typography>
    //   <Box my={4}>
    //     <Typography variant="h6" paragraph align="center">
    //       Original
    //     </Typography>
    //     <Card className={classes.card}>
    //       <CardActionArea>
    //         <CardMedia
    //           className={classes.media}
    //           image="./images/bg1.jpg"
    //           title="Contemplative Reptile"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             I-City
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary" component="p">
    //           Address: C-39,
    //            KSSIDC Industrial Estate,
    //            Pillgumpe, Chokkahalli village,
    //            Hoskote - Chintamani Rd,
    //            Hoskote, Karnataka 562114
    //            Phone: 084319 25309.
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //         Smart Home 
    //         </Button>
    //         <Button size="small" color="primary">
    //           Learn More
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Box>

    //   {/* Full Image Card Demo */}
    //   <Box my={4}>
    //     <Typography variant="h6" paragraph align="center">
    //       Full Image Card
    //     </Typography>
    //     <FiCard className={classes.card}>
    //       <FiCardActionArea>
    //         <FiCardMedia
    //           media="picture"
    //           alt="Contemplative Reptile"
    //           image="/material-ui-lizard.jpg"
    //           title="Contemplative Reptile"
    //         />
    //         <FiCardContent className={classes.fiCardContent}>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             Lizard
    //           </Typography>
    //           <Typography
    //             variant="body2"
    //             className={classes.fiCardContentTextSecondary}
    //             component="p"
    //           >
    //             UC2F1511SE  DOCUMENTATION   CT047-3-2-SPCC  5 1.0 INTRODUCTION 
    //             1.1 Smart Home This is the era of advanced computing technology. 
    //             Almost all of the works we are doing by the help of automation system or computer controlled. 
    //             Now peoples are moving towards smart system. 
    //             As the technology is upgrading day by day peoples want more security in their daily life.
    //           </Typography>
    //         </FiCardContent>
    //       </FiCardActionArea>
    //     </FiCard>
    //   </Box>

    //   {/* Full Image Card with action buttons Demo */}
    //   <Box my={4}>
    //     <Typography variant="h6" paragraph align="center">
    //       Full Image Card with Action Buttons
    //     </Typography>
    //     <FiCard className={classes.card}>
    //       <FiCardMedia
    //         media="picture"
    //         alt="Contemplative Reptile"
    //         image="/material-ui-lizard.jpg"
    //         title="Contemplative Reptile"
    //       />
    //       <FiCardContent className={classes.fiCardContent}>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Lizard
    //         </Typography>
    //         <Typography
    //           variant="body2"
    //           className={classes.fiCardContentTextSecondary}
    //           component="p"
    //         >
    //           Lizards are a widespread group of squamate reptiles, with over
    //           6,000 species, ranging across all continents except Antarctica
    //         </Typography>
    //       </FiCardContent>
    //       <FiCardActions className={classes.fiCardContent}>
    //         <Button size="small" color="inherit" variant="outlined">
    //           Share
    //         </Button>
    //         <Button size="small" color="inherit" variant="outlined">
    //           Learn More
    //         </Button>
    //       </FiCardActions>
    //     </FiCard>
    //   </Box>

    //   {/* Full Image Card with action buttons Demo */}
    //   <Box my={4}>
    //     <Typography variant="h6" paragraph align="center">
    //       Full Image Card with Action Buttons
    //     </Typography>
    //     <FiCard className={classes.card}>
    //       <FiCardActionArea>
    //         <FiCardMedia
    //           media="picture"
    //           alt="Contemplative Reptile"
    //           image="/material-ui-lizard.jpg"
    //           title="Contemplative Reptile"
    //         />
    //         <FiCardContent className={classes.fiCardContent}>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             Lizard
    //           </Typography>
    //           <Typography
    //             variant="body2"
    //             className={classes.fiCardContentTextSecondary}
    //             component="p"
    //           >
    //             VictoFire is an entity of Pyrox i-City Pvt Ltd, established in April 2017. 
    //             Our Patent Pending products are researched, designed and manufactured in India.
    //           </Typography>
    //         </FiCardContent>
    //       </FiCardActionArea>
    //       <FiCardActions>
    //         <Button size="small" color="primary">
    //           Share
    //         </Button>
    //         <Button size="small" color="primary">
    //           Learn More
    //         </Button>
    //       </FiCardActions>
    //     </FiCard>
    //   </Box>
    // </Container>
  );
}

export default Home;