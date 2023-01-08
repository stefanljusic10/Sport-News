import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import LatestNews from '../components/News/LatestNews';
import MainNewsCard from '../components/News/MainNewsCard';
import NewsCard from '../components/News/NewsCard';
import NewsContext from '../utils/context'
import formatString from '../utils/formatString'

const News = () => {
    const { news } = useContext(NewsContext)
    const { category, subcategory } = useParams()
    let filteredNews = news

    if(category && !subcategory)
      filteredNews = news.filter(e => formatString(e.category.primary) === category)
    else if(category && subcategory)
      filteredNews = news.filter(e => formatString(e.category.secondary) === subcategory)

    const [mainNews, ...otherNews] = filteredNews

    const renderNews = otherNews.map(e => <NewsCard news={e} key={e.id} />)

  return (
    <div id="news">
      <div className='news__box'>
        <MainNewsCard news={mainNews} />
        <div id="news__grid">
            {renderNews}
        </div>
      </div>
      <LatestNews />
    </div>
  )
}

export default News