import React, { useEffect, useState } from "react";
import { useStore } from "../components/common/store";
import ArticleListPage from "../components/pages/ArticleListPage";

const ArticleContainer = () => {
  const { articles, getArticles } = useStore();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    if (articles.economy.length) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [articles]);
//   useEffect(() => {
//     const res = async () => {
//       await getArticles();
//       if (articles.economy.length) {
//         setLoad(true);
//       } else {
//         setLoad(false);
//       }
//     };
//     // getArticles();
//     res();
//     console.log(articles);
//     console.log(articles.economy.length);
//     // if (Object.keys(articles.economy).length !== 0) {
//     //   setLoad(true);
//     // }
//     // console.log(Object.keys(articles.economy).length);
//   }, [articles]);

  return (
    <div>
      {load && articles.economy.length !== 0 && (
        <ArticleListPage article={articles} />
      )}
    </div>
  );
};

export default ArticleContainer;
