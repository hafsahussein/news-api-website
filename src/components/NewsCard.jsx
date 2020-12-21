const NewsArticle = ({article}) => {

    const {url, urlToImage, title, description, publishedAt, source} = article;
    return ( 
        <div className="news-card">
            <a target ="_blank" rel ="noreferrer" href ={url} className="card-image" style = {{
                backgroundImage:`url(${urlToImage||'https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg'})`,
                backgroundSize:'100% 100%'
            }}>
            </a>
            <div className="card-content">
                <div className="details">
        <p className="date">{(new Date(publishedAt).toDateString())}</p>
              <p className="source">
                  {source.name}
              </p>
                </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href ={url} className ="btn" target ="_blank" rel ="noreferrer">read more</a>
            </div>
        </div>
     );
}
 
export default NewsArticle;
