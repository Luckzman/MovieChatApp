import React, {Component} from 'react';
import MovieTable from './component/MovieTable';
import { Container } from 'semantic-ui-react';
import Modal from './component/Modal';
import moviesJson from './utils/movies.json';
import './App.scss';
import CommentList from './component/CommentList';

class App extends Component {
  state = {
    showModal: false,
  }

  handleTriggerModal = () => {
    const {showModal} = this.state;
    this.setState({showModal: !showModal})
  }

  render(){
    const {showModal} = this.state;
    return (
      <div className="App">
        <Container>
          <h2 className="title">Movie Chat App</h2>
          <MovieTable triggerModal={this.handleTriggerModal} />
          {showModal && <Modal hideModal={this.handleTriggerModal}>
            <CommentList />
          </Modal>}
        </Container>
      </div>
    );
  }
}

export default App;
