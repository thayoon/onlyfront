import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../style/palette";
import speaker from "../../../img/sound.png";
import pauseIcon from "../../../img/pause-sm.png";

const ArticleListArea = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
`;

const ArticleArea = styled.div`
  font-size: 14px;
  color: #353535;
  list-style: none;
  border-radius: 2%;
  margin: 0.5%;
  background-color: ${palette.gray[2]};
  box-shadow: 4px 4px 4px 4px ${palette.gray[5]};
  padding: 16px;
  /* max-width: 550px; */
  width: 30%;
  min-width: 400px;
  @media (max-width: 1385px) {
    /* max-width: 550px; */
    width: 45%;
    min-width: 400px;
  }
  @media (max-width: 800px) {
    /* max-width: 550px; */
    width: 80%;
    min-width: 400px;
  }
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const ArticleLink = styled(Link)`
  display: flex;
`;

const Thumbnail = styled.img`
  width: 93px;
  /* width: auto; */
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h2`
  margin-block: 2px;
  margin-left: 10px;
`;

function IT(props) {
  var arr = props.articles.filter((val) => val.title.includes(props.search));
  return (
    <ArticleListArea>
      {arr.map((a) => (
        <Article article={a} key={a._id} type="6"></Article>
      ))}
    </ArticleListArea>
  );
}

function Article(props) {
  const [playing, setPlaying] = useState(false);
  const API =
    window.location.hostname === "localhost"
      ? "http://haeun9969.dothome.co.kr/capstone/IT"
      : "/api";

  let audio = new Audio(`${API}/${props.article._id}.wav`);
  // let audio = new Audio(
  //   `http://haeun9969.dothome.co.kr/capstone/IT/${props.article._id}.wav`
  // );

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    return () => audio.pause();
  }, [playing]);

  function togglePlay() {
    setPlaying((s) => !s);
  }

  return (
    <ArticleArea>
      <ArticleLink
        to={`/article/${props.type}/${props.article._id}`}
        style={{ textDecoration: "none" }}
      >
        <Thumbnail src={props.article.img} alt="img" />
        <Title>{props.article.title}</Title>
      </ArticleLink>
      <div className="speaker" onClick={togglePlay}>
        {playing ? (
          <img className="pauseImg" src={pauseIcon} alt="pause" />
        ) : (
          <img className="speakerImg" src={speaker} alt="speaker" />
        )}{" "}
      </div>
    </ArticleArea>
  );
}

export default IT;
