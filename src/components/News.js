import React ,{ Component } from 'react'
import Newsitem from './Newsitem';

import GIF from './images/loading.gif';
 
export class News extends Component {
    
    constructor(){
        super();

        this.state={
            articles: this.articles,
            loading : true,
            page :1 ,

        }
        
    }

   
    async componentDidMount(){
        let myurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=35c6d7deefd24346af510f640c365a08&page=1&pageSize=18";

        let data = await fetch(myurl);

        let parsedData = await data.json();

        this.setState({articles : parsedData.articles, loading : false ,});

    }


    handlePrevClick = async()=>{

            let myurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=35c6d7deefd24346af510f640c365a08&page=${this.state.page - 1 }&pageSize=18`;

            let data = await fetch(myurl);
    
            let parsedData = await data.json();
           
            this.setState({
                page: this.state.page - 1 ,
                articles : parsedData.articles,
            })

    }
    handleNextClick = async()=>{
        let myurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=35c6d7deefd24346af510f640c365a08&page=${this.state.page + 1}&pageSize=18`;

        let data = await fetch(myurl);

        let parsedData = await data.json();
        
        this.setState({
            page: this.state.page + 1 ,
            articles : parsedData.articles,
        })

    }

   

   

  render() {
    return (
    <>

<section className="wrapper mt-4">
    <div className="container-fostrap">
        <div>
            <h2 className="heading">
                Read all of Latest News
            </h2>
        </div>
        <div className="content mt-4">
            <div className="container">
                <div className="row mt-5">
                    { this.state.loading  ? 
                    <div className='text-center'>
                        <h2 className='text-primary'>Loading</h2>
                         <img src={GIF} style={{width :'100px'}} />
                    </div>
                     : this.state.articles.map((element)=>{
                      return <Newsitem 
                        title={element.title ? element.title.slice(0 , 40) : ''} 
                        key={element.url}
                        imageUrl={element.urlToImage}
                        description={element.description ? element.description.slice(0 , 100) : ''}
                        detail={element.url}
                        />
                }   )}

                <div className="container text-center d-flex justify-content-around mt-5">
         
              <button disabled={this.state.page <= 1}  className="btn btn-primary " onClick={this.handlePrevClick}>Prev</button>
                <button className="btn btn-primary" onClick={this.handleNextClick}>Next</button>

                </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</section>

    </>
    )
  }
}

export default News