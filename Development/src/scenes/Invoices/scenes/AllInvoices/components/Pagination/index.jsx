import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

//Styling
import './styles.css';

export default class Pagination extends Component {
    handlePageClick = (data) => {
        let selected = data.selected + 1;
        this.props.getPage(selected);
    };

    render = () => {
        return (
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        );
    }
}