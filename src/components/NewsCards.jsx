import Filter from './FilterNews';
import NewsCard from './NewsCard'

const NewsCards = ({articles, handleChange}) => {
    return ( 
        <div className="news-cards">

            {articles? (
                <div className ="container">
                    <Filter handleChange = {handleChange}/>
            <div className="cards">
                    {articles.map((article, i )=>(
                        <NewsCard key ={i} article ={article}/>
                    ))}
            </div>
                </div>
            ) : "loading..."}
        </div>
     );
}
 
export default NewsCards;