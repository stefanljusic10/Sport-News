import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNewsCard from '../components/AdminPanel/AdminNewsCard'
import SortNews from '../components/AdminPanel/SortNews'
import Button from '../components/Button/Button'
import NewsContext from '../utils/context'

const AdminPanel = () => {
  const { news } = useContext(NewsContext)
  const navigate = useNavigate()
  
  const cards = news.map((e) => <AdminNewsCard news={e} key={e.id} />)
  
  return (
    <div id="adminPanel">
      <h2>Admin Panel</h2>
      <Button text='CREATE' btnClass='btn btnCreate' method={() => navigate('/admin/create')} />
      <SortNews />
      {cards}
    </div>
  )
}

export default AdminPanel