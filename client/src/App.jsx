import React from 'react';
import reactDOM from 'react-dom';
import reviews from '../dummyData.js';
import Description from './Description.jsx';
import HoverDescription from './HoverDescription.jsx'
import Form from './Form.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: reviews
    }
  }

  componentDidMount(){
    $.get('/api/restaurant/1', (data)=>{
      this.setState({
        reviews:data
      })
    })
  }

  render(){
    return(
      <div>
        <h2><font color="#d32323">Recommended Reviews</font> for Straw</h2>
        <div>
          <Form />
        </div>
        <div>
          <Description reviews={this.state.reviews}/>
        </div>
        <div>
          <HoverDescription reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

reactDOM.render(
  <App/>, document.getElementById("app")
)