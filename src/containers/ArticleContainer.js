import React, { useEffect, useState } from "react";
import { useStore } from "../components/common/store";
import ArticleListPage from "../components/pages/ArticleListPage";

const ArticleContainer = () => {
  const { articles, getArticles, getData } = useStore();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getArticles();
    if (Object.keys(articles.economy).length === 0 || load === false) {
      getData();
      setLoad(true);
      console.log("getData");
      console.log(articles);
    } else if (load === true || Object.keys(articles.economy).length === 0) {
      setLoad(false);
    }
    // console.log(Object.keys(articles.economy).length);
  }, []);

  return (
    <div>{load && articles && <ArticleListPage article={articles} />}</div>
  );
};

export default ArticleContainer;
