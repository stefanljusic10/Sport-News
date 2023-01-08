import React from 'react'
import { useNavigate } from 'react-router-dom'
import formatString from '../../utils/formatString'

const MainNewsCard = ({ news }) => {
  const navigate = useNavigate()
  
  return (
    <div
      id="mainNewsCard"
      className='newsCard'
      onClick={() => navigate(`/${formatString(news.category.primary)}/${formatString(news.category.secondary)}/${news.id}`)}
    >
      <img src={news?.image} alt={news?.tags[0]} />
      <h2>{news?.headline}</h2>
    </div>
  )
}

export default MainNewsCard