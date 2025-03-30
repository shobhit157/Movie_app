import React from 'react';
import "./index.css";

class Moviecard extends React.Component{

    // constructor(){
    //     super();
    //     this.state={
    //         title:"Avengers",
    //         plot: "Based on 2010 avengers film",
    //         price: 500,
    //         rating: 8.9,
    //         star:0,
    //         fav: false,
    //         cart: false,
    //     }
    // }

    // addStars=()=>{

    //     if(this.state.star>=5)
    //     {
    //         return;
    //     }
    //     this.setState({star:this.state.star+0.5});

    // }

    // removeStars=()=>{
    //     if(this.state.star<=0)
    //     {
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             star:prevState.star-0.5
    //         }
    //     });
    // }

    // favouritehandler=()=>{

    //     this.setState({
            
    //         fav: !this.state.fav
    //     })

    // }
    // cartHandler= ()=>{
    //     this.setState({
    //         cart:!this.state.cart
    //     })
    // }
    
    render(){
        const {title,plot,img,price,rating,star,fav,cart}=this.props.movies;
        return (
            <div className="main">
                <div className="moviecard">
                    <div className="left">
                        <img alt="poster" src={img}></img>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">
                            <p>{plot}</p></div>
                        <div className="price">Rs {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="stars">
                                <img onClick={()=>{this.props.removeStar(this.props.movies)}} className="star-btn-minus" alt="minus" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"></img>
                                <img className="star-btn" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"></img>
                                <img onClick={()=>{this.props.addStar(this.props.movies)}} className="star-btn-plus" alt="plus" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"></img>
                                <span className="star-count">{star}</span>
                            </div>
                            {/* {fav?  <button onClick={this.favouritehandler} className="unfavourite-btn">un-fav</button>: 
                            <button onClick={this.favouritehandler} className="favourite-btn">fav</button>} */}

                 
                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={()=>{this.props.favouriteHandler(this.props.movies)}} >{fav ? "un-fav": "fav"}</button>
                            {/* <button className="favourite-btn">fav</button>
                            <button className="unfavourite-btn">un-fav</button> */}
                            <button onClick={()=>{this.props.cartHandler(this.props.movies)}} className={cart?"removecart-btn":"cart-btn"}>{cart?"rmv-cart":"cart"}</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Moviecard;