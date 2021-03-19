import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius:'25px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Ocard() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Paytm
        </Typography>
        <Typography variant="h5" component="h3" style={{display:'flex',padding:'20px'}}>
        <p style={{ fontSize:'larger',padding:'2px'}}>gift <br/> 
        <p style={{fontSize:'20px',paddingLeft:"5px"}}>card</p></p> 
          <p style={{ fontSize:'50px',padding:'2px',margin:'2px'}}>Rs.200</p>
          </Typography>
      </CardContent>
    </Card>
  );
}