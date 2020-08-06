import React from 'react';

import '../index.css'




class Category extends React.Component {



    render() {
        console.log(this.props.click);
        const data = this.props;
        return (
            <div className='cat'>
                <h4 >Category</h4>
                <a class=" btn catItem" onClick={() => data.click('shoes')}>Shoes</a>
                <a class="btn catItem" onClick={() => data.click('books')} >Books</a>
                <a class="btn catItem" onClick={() => data.click('tShirts')}>TShirt</a>
                <a class="btn catItem" onClick={() => data.click('shirts')}>Shirts</a>
            </div>
        )
    }
}




export default Category
