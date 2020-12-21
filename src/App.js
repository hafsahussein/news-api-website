import React, { Component } from 'react'
import news from './APIs'
import Header from './components/Header';
import NewsCards from './components/NewsCards';
import './App.css'
export class App extends Component {
    state ={
        articles:[],
    }
    async componentDidMount (){
        const response = await news.get('top-headlines')
        this.setState({
            articles:response.data.articles
        })
 }
 
    onChange = async(elem) => {
        try {
            const {sortBy, category, query} =this.state;
            const response = await news.get('top-headlines',
         {params:{q:query||'a', category: category||'technology',
          sortBy: sortBy||'latest'}})
          if(elem){
            this.setState({
                [elem.name]:elem.value,
                articles:response.data.articles
            })
        }        
        } catch (error) {
        console.error(error)    
        }
    }
    
    render() {
        const {articles} = this.state;
        return (
            <div className ="app">
                <Header/>
                <NewsCards 
                articles ={articles}handleChange ={this.onChange}
                 
                 />
            </div>
        )
    }
}

export default App
