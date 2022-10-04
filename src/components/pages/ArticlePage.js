import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../common/Header";
import styled from "styled-components";
import { useStore } from "../common/store";
import speaker from "../../img/sound-on.png";
import arrowL from "../../img/left-arrow.png";
import arrowR from "../../img/right-arrow.png";
import pauseIcon from "../../img/pause.png";

const ArticleArea = styled.div`
  background-color: whitesmoke;
  margin: 2%;
  padding: 2%;
  border-radius: 20px;
`;

const TitleArea = styled.div`
  margin-right: 2%;
  margin-bottom: 1%;
  display: flex;
  justify-content: space-between;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    padding: 10px;
    font-size: 14pt;
  }
`;

const ArticleButtons = styled.div`
  margin-inline: 2%;
  display: flex;
  justify-content: space-between;
`;

const ArticlePage = () => {
  const { type, id } = useParams();
  const { articles } = useStore();
  const { economy, culture, society, sports, entertain, politic, IT } =
    articles;
  let findArticle;
  let nextArticle;
  let prevArticle;
  let length;
  let num;
  let isLast = false;
  let isFirst = false;

  switch (type) {
    case "0":
      length = economy.length;
      findArticle = economy.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = economy.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = economy.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "1":
      length = culture.length;
      findArticle = culture.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = culture.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = culture.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "2":
      length = society.length;
      findArticle = society.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = society.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = society.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "3":
      length = sports.length;
      findArticle = sports.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = sports.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = sports.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "4":
      length = entertain.length;
      findArticle = entertain.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = entertain.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = entertain.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "5":
      length = politic.length;
      findArticle = politic.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = politic.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = politic.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    case "6":
      length = IT.length;
      findArticle = IT.find((article, index) => {
        num = index;
        return article._id === id;
      });
      if (num !== length - 1) {
        nextArticle = IT.at(num + 1)._id;
      } else {
        isLast = true;
      }
      if (num !== 0) {
        prevArticle = IT.at(num - 1)._id;
      } else {
        isFirst = true;
      }
      break;
    default:
  }
  let audio = new Audio(`http://haeun9969.dothome.co.kr/capstone/IT/${id}.wav`);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    return () => audio.pause();
  }, [playing]);

  function togglePlay() {
    setPlaying((s) => !s);
  }

  return (
    <div>
      <Header />
      <ArticleArea>
        <TitleArea>
          <h7>{findArticle.publisher}</h7>
          <h1>{findArticle.title}</h1>
          <div className="speaker" onClick={togglePlay}>
            {playing ? (
              <img className="pauseImg" src={pauseIcon} alt="pause" />
            ) : (
              <img className="speakerImg" src={speaker} alt="speaker" />
            )}
          </div>
        </TitleArea>
        <ContentArea>
          <img src={findArticle.img} alt="articleImg" />
          <p>{findArticle.contents}</p>
        </ContentArea>
        <p>{findArticle.reporter}</p>
        <button>
          <a
            href={findArticle.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            기사 본문 링크
          </a>
        </button>
      </ArticleArea>
      <ArticleButtons>
        {isFirst === false && (
          <Link to={`/article/${type}/${prevArticle}`} className="arrowL">
            <img className="arrowLImg" src={arrowL} alt="arrowL" />
          </Link>
        )}
        {isLast === false && (
          <Link to={`/article/${type}/${nextArticle}`} className="arrowR">
            <img className="arrowRImg" src={arrowR} alt="arrowR" />
          </Link>
        )}
      </ArticleButtons>
    </div>
  );
};

export default ArticlePage;
