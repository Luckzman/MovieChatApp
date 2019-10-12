import React, {Component} from 'react';
import CustomInput from '../CustomInput';
import FilterDropdown from '../FilterDropdown';
import Pagination from '../Pagination';
import './MovieTable.scss';

class MovieTable extends Component {

  state = {
    input: '',
    movie: this.props.movieData,
    pageOfItems: []
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.filterMovie(e.target.value);
  }

  filterMovie = (input) => {
    console.log(this.state.movie.length, 'movielength')
    if(this.state.movie.length > 0) {
      this.setState(() => ({
        movie: this.props.movieData.filter((movie) => (movie.title.toLowerCase().includes(input.toLowerCase())))
      }))
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }

  filterByGenre = (value) => {
    const {movie} = this.state;
    this.setState(() => ({
      movie: movie.filter((movie) => (movie.genre.includes(value)))
    }))
  }
  
  render(){
    const {input, movie, pageOfItems} = this.state;
    const {triggerModal} = this.props;
    
    return(
      <>
        <div className="table-container">
          <table className="table">
            <thead className="">
              <tr className="">
                <th className="">Title</th>
                <th className="">Year</th>
                <th className="">Runtime</th>
                <th className="">Revenue</th>
                <th className="">Rating</th>
                <th className="">Genre</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="">
                  <form onSubmit={this.handleSubmit}>
                    <CustomInput
                      name="input"
                      value={input}
                      onChange={this.handleChange}
                      placeholder="filter by title"
                    />
                  </form>
                </td>
                <td colSpan='4' className=""></td>
                <td className=""><FilterDropdown getDropdownValue={this.filterByGenre}/></td>
              </tr>
              {pageOfItems.map((movie, index) => {
                return(<tr key={`movie${index}`} className="table-body">
                  <td className="title" onClick={() => triggerModal(movie.title)}>{movie.title}</td>
                  <td className="">{movie.year}</td>
                  <td className="">{movie.runtime}</td>
                  <td className="">{movie.revenue}</td>
                  <td className="">{movie.rating}</td>
                  <td className="">{movie.genre.join(', ')}</td>
                </tr>)})
              }
            </tbody>
          </table>
        </div>
        <Pagination className="pagination" items={movie} onChangePage={this.onChangePage} />
      </>
    )
  }
}


export default MovieTable;
