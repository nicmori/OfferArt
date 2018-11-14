import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Art = (props) => {
  return (
    <div>
      {props.art ? (
        <Card>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}}
            image={props.art.fields.artImage.fields.file.url}
            title={props.art.fields.title}
            />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.art.fields.title}
            </Typography>
            <Typography>
              {props.art.fields.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href="{props.course.fields.url}" target="_blank">
              Go to Listing
            </Button>
          </CardActions>
        </Card>
      ): null}
    </div>
  )
}
export default Art
