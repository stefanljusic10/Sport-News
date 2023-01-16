import React from 'react'
import moment from 'moment'
import Button from '../Button/Button'
import { deleteNews } from '../../utils/deleteNews'
import { useNavigate } from 'react-router-dom'
import { useNews } from '../../zustand/store'

const AdminNewsCard = ({ news }) => {
  const setNews = useNews(state => state.setNews)
  const newsDate = moment(news.date.seconds*1000).format("DD MMM YYYY")
  const navigate = useNavigate()

  const deleteNewsFromDb = async (id) => {
    await deleteNews(id)
    setNews()
  }

  const edit = (news) => {
    sessionStorage.setItem('editNews', JSON.stringify(news))
    navigate(`/admin/edit/${news.id}`)
  }

  return (
    <div id="adminNewsCard">
        <div>
          <p>Author:</p>
          <p>{news.author}</p>
        </div>
        <div>
          <p>Date:</p>
          <p>{newsDate}</p>
        </div>
        <div>
          <p>Category:</p>
          <p>{news.category.primary}</p>
        </div>
        <div>
          <p>Tags:</p>
          <p>{news.tags[0]}</p>
        </div>
        <div>
          <Button text='EDIT' btnClass='btn btnEdit' method={() => edit(news)} />
          <Button text='DELETE' btnClass='btn btnDelete' method={() => deleteNewsFromDb(news.id)} />
        </div>
    </div>
  )
}

export default AdminNewsCard