import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import NewsContext from '../utils/context'
import FormattedText from '../components/SelectedNews/FormattedText'
import moment from 'moment'

const SelectedNews = () => {
  const { news } = useContext(NewsContext)
  const { id } = useParams()

  const clickedNews = news.find(e => e.id === id)
  const newsDate = moment(clickedNews?.date.seconds*1000).format("DD MMM YYYY hh:mm a").slice(0, -3)

  return (
    <div id="selectedNews">
      <h2>{clickedNews?.headline}</h2>
      <p>
        <span>Author: </span>{clickedNews?.author} - {newsDate}
      </p>
      <img src={clickedNews?.image} alt="pictr" />
      <FormattedText clickedNews={clickedNews}/>
    </div>
  )
}

export default SelectedNews