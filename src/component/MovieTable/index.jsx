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

 /**
   * @method handleChange
   * @description This method get user input value from input element
   * @param {object} event This is the event object
   * @return {null}
   */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.filterMovie(e.target.value);
  }

  /**
   * @description the method handles the filter of movies by their title
   * @method filterMovie
   * @param {string} input - take the parameter of the input
   * 
   */
  filterMovie = (input) => {
    if(this.state.movie.length > 0) {
      this.setState(() => ({
        movie: this.props.movieData.filter((movie) => (movie.title.toLowerCase().includes(input.toLowerCase())))
      }))
    }
  }

  /**
   * @method onChangePage
   * @description This method handles pagination of the json data
   * @param {number} pageOfItems - keep the current page of paginated data
   * @return {null}
   */
  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }

   /**
   * @method filterByGenre
   * @description This method filter comment by genre
   * @param {string} value - input is from the selected dropdown
   * @return {null}
   */
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
              <tr className="filter-row">
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
                  <td data-test="movie-title" className="title" onClick={() => triggerModal(movie.title)}>{movie.title}</td>
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
