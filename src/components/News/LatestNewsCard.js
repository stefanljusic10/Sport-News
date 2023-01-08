import React from 'react'
import { useNavigate } from 'react-router-dom'

const LatestNewsCard = ({ news }) => {
  const navigate = useNavigate()
  return (
    <div id='latestNewsCard' onClick={() => navigate(`/${news.category.primary}/${news.category.secondary}/${news.id}`)}>
        <h2>{news.headline}</h2>
        {news.tags.map(e => <span key={e}>{e}</span>)}
    </div>
  )
}

export default LatestNewsCard