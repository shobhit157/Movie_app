import React from "react";
import Moviecard from "./Moviecard";

class MovieList extends React.Component{

    constructor(){

        super();
        this.state={
            movies:[
                {
                    title:"Avengers",
                    plot: "Based on 2010 avengers film",
                    img: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_.jpg ",
                    price: 500,
                    rating: 8.9,
                    star:0,
                    fav: false,
                    cart: false,
                },
                {
                    title:"Captain America : Civil War",
                    plot: "Based on challenges faced by Captain America",
                    img: "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                    price: 500,
                    rating: 9.5,
                    star:0,
                    fav: false,
                    cart: false,
                },
                {
                    title:"Golmaal: Fun Unlimited",
                    plot: "A story of four friends",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46SEumZFGYuRmdVRIEDAsDLPo57N9wmiUeKt3WOvW0GyylWQHlN1Z3azsAlKPlZCo35E&usqp=CAU ",
                    price: 500,
                    rating: 7.1,
                    star:0,
                    fav: false,
                    cart: false,
                },
                {
                    title:"BloodWarlock",
                    plot: "Story of young man and his journey on a magical path ",
                    img: "https://preview.redd.it/is-there-any-fan-continuation-of-blood-warlock-succubus-v0-3ho7vhlp3vgd1.png?width=108&crop=smart&auto=webp&s=7e348caf472ecfba78f38ac2e0a8237b24ab8422",
                    price: 400,
                    rating: 8.0,
                    star:0,
                    fav: false,
                    cart: false,
                }
            ]
        }
        
    }

    handleIncrStar=(movie)=>{

        const {movies} =this.state;

        const mid=movies.indexOf(movie);

        if(movies[mid].star>=5)
        {
            return;
        }

        movies[mid].star+=0.5;

        this.setState({

            movies: movies
        }
        )


       

    }

    handleDecrStar=(movie)=>{

        const {movies}=this.state;

        const mid=this.state.movies.indexOf(movie);

        if(movies[mid].star<=0)
        {
                return;
        }
        movies[mid].star-=0.5;

       
        this.setState(
            {
                movies:movies

            }
        )

        
    }

    

    handleFavBtn=(movie)=>{

        const {movies}=this.state;

        const mid=this.state.movies.indexOf(movie);

        movies[mid].fav=!movies[mid].fav;

        this.setState({
            
            movies:movies
        })
    }

    handleCartBtn= (movie)=>{

        const {movies}=this.state;

        const mid=this.state.movies.indexOf(movie);

        movies[mid].cart=!movies[mid].cart;
        this.setState({
            
            movies:movies
        })
    }

  
    render(){

        const {movies} =this.state;

        return(
            <>
            {movies.map((movie)=> <Moviecard  movies={movie} addStar={this.handleIncrStar} removeStar={this.handleDecrStar} favouriteHandler={this.handleFavBtn} cartHandler={this.handleCartBtn}/>)}

            </>
        )
        
        
        
    }
}

export default MovieList;