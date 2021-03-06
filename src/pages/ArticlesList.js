import React from "react";
import articles from './article-content';

// const ArticlesList = () => (
//     <React.Fragment>
//         <h1>Articles</h1>
//     </React.Fragment>
//
// )



function ArticlesList(prop){
    return(
        <>
            <h1 className={"container-fluid"}>Articles</h1>
            {
                articles.map(a =>{
                    return(
                        <div className={"container px-4"} key={a.key}>

                            <div className={"p-3 border bg-light"}>
                                <a href={`/articles/${a.name}`} className={"link-secondary"}>{a.name}</a>
                            </div>


                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticlesList;