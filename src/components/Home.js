import React, { Component } from 'react';



class Home extends Component {



    render() {
        console.log(this.props, 'props');
        let itemList = (this.props.items) ? (this.props.items.map((item) => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>

                    </div>
                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })) : []

        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}



export default Home