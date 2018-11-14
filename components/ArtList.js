import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Art from '../components/Art'

const SPACE_ID = 'x8sr9m86agv9'
const ACCESS_TOKEN = 'c2d2647f6073403125b969a28d52be9b1d2d18ecc7947e71580a988728047bfb'
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

class ArtList extends Component {
  state = {
    arts: [],
    searchString: ''
  }

  constructor(){
    super()
    this.getArts()
  }

  getArts = () => {
    client.getEntries({
      content_type: 'art',
      query: this.state.searchString
    })
    .then((response) => {
      this.setState({arts: response.items})
    })
    .catch((error) => {
      console.log("Error occured while fetching data")
      console.log(error)
    })
  }

  onSearchInputChange = (event) => {
    if(event.target.value){
      this.setState({searchString: event.target.value})
    } else {
      this.setState({searchString: ''})
    }
    this.getArts()
  }

  render() {
    return (
      <div>
        {this.state.arts ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              placeholder="Search for Arts"
              margin="normal"
              onChange = {this.onSearchInputChange} />
            <Grid container spacing={24} style={{padding: 24}}>
              {this.state.arts.map(currentArt => (
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                  <Art art={currentArt} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No arts found"}
      </div>
    )
  }

}

export default ArtList;
