import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieTable from './component/MovieTable';
import { Container } from 'semantic-ui-react';
import Modal from './component/Modal';
import {fetchComments} from './store/action';
import moviesJson from './utils/movies.json';
import './App.scss';
import CommentList from './component/CommentList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      movieTitle: '',
    }
  }
  
  handleCloseModal = () => {
    const {showModal} = this.state;
    this.setState(() => ({
      showModal: !showModal,
    }))
  }
  
  handleTriggerModal = (movieTitle) => {
    const {showModal} = this.state;
    this.setState(() => ({
      showModal: !showModal,
      movieTitle
    }))
    this.props.fetchComments(movieTitle);
  }
  
  render(){
    const {showModal, movieTitle} = this.state;
    return (
      <div className="App">
        <Container>
          <h2 className="title">Movie Chat App</h2>
          <MovieTable movieData={moviesJson} triggerModal={this.handleTriggerModal} />
          {showModal && <Modal movieTitle={movieTitle} hideModal={this.handleCloseModal}>
              <CommentList title={movieTitle}/>
          </Modal>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    comments
  } = state;
  return {
    comments
  }
}


export default connect(mapStateToProps, {
  fetchComments
})(App);
