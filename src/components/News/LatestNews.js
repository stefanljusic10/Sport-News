import React from 'react'
import { useNews } from '../../zustand/store';
import LatestNewsCard from './LatestNewsCard';

const LatestNews = () => {
  const news = useNews(state => state.news)
  const sortedNews =  news.sort((a, b) => new Date(b.date) - new Date(a.date))
  const renderLatestNews = sortedNews.map(e => <LatestNewsCard news={e} key={e.id} />)

  return (
    <div id="latestNews">
        <h2>LATEST NEWS</h2>
        {renderLatestNews}
    </div>
  )
}

export default LatestNews