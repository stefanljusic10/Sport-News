import React from "react";
import { useParams } from "react-router-dom";
import LatestNews from "../components/News/LatestNews";
import MainNewsCard from "../components/News/MainNewsCard";
import NewsCard from "../components/News/NewsCard";
import formatString from "../utils/formatString";
import { useNews } from "../zustand/store";
import Button from "../components/Button/Button";
import Error from "../pages/Error";
import { primaryCategories } from "../utils/listOfCategories";

const Landing = () => {
  const news = useNews((state) => state.news);
  const { category, subcategory } = useParams();
  let filteredNews = news;

  if(category && !primaryCategories.includes(category.toUpperCase()))
    return <Error />
  

  if (category && !subcategory)
    filteredNews = news.filter((e) => formatString(e.category.primary) === category);
  else if (category && subcategory)
    filteredNews = news.filter((e) => formatString(e.category.secondary) === subcategory);

  const [mainNews, ...otherNews] = filteredNews;

  const renderNews = otherNews.map((e) => <NewsCard news={e} key={e.id} />);

  return (
    <div className="landing">
      <div className="news__box">
        {mainNews ? <MainNewsCard news={mainNews} /> : null}
        <div>
          {renderNews}
        </div>
      </div>
      <LatestNews />
    </div>
  );
};

export default Landing;
