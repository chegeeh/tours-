import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import places from '/src/places';
import '/src/island1.jpg'
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background : 'rgba(0,0,0,0.5)',
    margin : '20px'
  },
  media: {
    height: 440,
  },
  title : {
    fontFamily : 'Nunito',
    fontWeight : 'bold',
    fontSize : '2 rem',
    color : '#fff',
  },
  description : {
    fontFamily : 'Nunito',
    fontSize : '2 rem',
    color : '#ddd',
  },
});

export default function ImageCard({ places }) {
  const classes = useStyles();

  return (
  	<Grow>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={places.imageUrl}
          title=" places"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {places.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {places.description}
          </Typography>
        </CardContent>
    </Card>
    </Grow>
  );
}