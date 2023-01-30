import React from "react";
import Article from "./Article"

function ArticleList({ posts }){
    const articleComponents = posts.map((singleArticle) => {
        return (<Article 
            key={singleArticle.id} 
            title={singleArticle.title} 
            date={singleArticle.date} 
            preview={singleArticle.preview} 
            minutes={singleArticle.minutes}
        />)
    });
    return <main>{articleComponents}</main>
}

export default ArticleList