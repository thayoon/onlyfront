import React, { useEffect } from "react";
import { useStore } from "../components/common/store";
import ArticleListPage from "../components/pages/ArticleListPage";

const ArticleContainer = () => {
  const { articles, getArticles } = useStore();

  useEffect(() => {
    getArticles();
    console.log(articles);
  }, []);

  return (
    <div>
      {articles.economy.length !== 0 && <ArticleListPage article={articles} />}
    </div>
  );
};

export default ArticleContainer;
