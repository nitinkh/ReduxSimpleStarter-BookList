import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">{book.title}</li>
            )
        });
    }

    render() {

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Anything returned from this function will end up as props
// on this BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed 
    // to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. Make it available 
// as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);