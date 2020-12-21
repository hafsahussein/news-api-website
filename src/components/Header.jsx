import {IoNewspaperSharp} from 'react-icons/io5'
const Header = () => {
    return ( 
        <header className="header">
            <h4 className="logo"><a href="/"><IoNewspaperSharp className ="icon" />World's<span>News</span></a></h4>
            <p>Read the world's news from over <br/>50,000 large and small news sources.</p>
            
        </header>
     );
}
 
export default Header;