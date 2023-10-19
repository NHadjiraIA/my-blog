import ArticlesList from '../components/ArticlesList';
import articles from './Data/article-content'

const ArticlesListPage = () => {
 return (
     <>
       <h1> Articles </h1>
        <ArticlesList articles={articles} />
     </>
 )}

export default ArticlesListPage;