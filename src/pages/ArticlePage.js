// use a special hook called UseParam
import { useParams } from "react-router-dom";
import articles from "./Data/article-content";
import NotFoundPage from '../pages/NotFoundPage'
 
const ArticlePage = () => {
    const params = useParams();
     const  articleId = params.articleId;
     const article = articles.find (article => article.name === articleId)
     if (!article){
      return <NotFoundPage />
     }
     return(
         <>
           <h1> {article.title}</h1>
            {article.content.map((paragraph, i) =>(
                <p key={i}>{paragraph}</p>
            ))}
            
         </>
     );
}

export default ArticlePage;