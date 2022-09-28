import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
// import palette from '../../style/palette';
import Economy from './Tabs/Economy';
import Culture from './Tabs/Culture'
import Society from './Tabs/Society'
import Sports from './Tabs/Sports'
import Entertain from './Tabs/Entertain'
import Politics from './Tabs/Politics'
import It from './Tabs/IT'
import search from '../../img/search.png'

const Tab = styled.div`
  width: 100%;
  display: flex;
  border: 1px;
  li {
    width: 16%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    color: black;
    padding: 1rem;
    background-color: #dcdcdc;
  }
  li:active {
    background-color: gray;
  }
`

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
`

const Input = styled.input`
  width: 40%;
  height: 30px;
  margin: 15px;
  border-radius: 10px;
  font-size: 12pt;
`

const ArticleListPage = ({article}) => {
  
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const { economy, culture, society, sports, entertain, politic, IT } = article

  const tabList = {
    0: <Economy articles = {economy} search= {search}/>,
    1: <Culture articles = {culture} search= {search}/>,
    2: <Society articles={society} search= {search}/>,
    3: <Sports articles={sports} search= {search}/>,
    4: <Entertain articles={entertain} search= {search}/>,
    5: <Politics articles={politic} search= {search}/>,
    6: <It articles={IT} search= {search}/>
  }

  useEffect(() => {
    if(economy.length > 0) {
      setLoading(false);
    }
  }, [economy])

  if (loading) return <div>Loading...</div>

  const clickTab = (id) => {
    setActiveTab(id);
  }

  return (
    <div>
      <Header />
      <SearchArea>
        <Input 
          type="text"
          placeholder="검색"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </SearchArea>
      <Tab>
        <li onClick={() => clickTab(0)}>경제</li>
        <li onClick={() => clickTab(1)}>문화</li>
        <li onClick={() => clickTab(2)}>사회</li>
        <li onClick={() => clickTab(3)}>스포츠</li>
        <li onClick={() => clickTab(4)}>연예</li>
        <li onClick={() => clickTab(5)}>정치</li>
        <li onClick={() => clickTab(6)}>IT</li>
      </Tab>
      <div>
        {tabList[activeTab]}
      </div>
    </div>
  );
};

export default ArticleListPage;