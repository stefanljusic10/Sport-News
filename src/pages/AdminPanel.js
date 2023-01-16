import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNewsCard from '../components/AdminPanel/AdminNewsCard'
import SortNews from '../components/AdminPanel/SortNews'
import Button from '../components/Button/Button'
import { useNews } from '../zustand/store'

const AdminPanel = () => {
  const news = useNews(state => state.news)
  const navigate = useNavigate()
  
  const cards = news.map((e) => <AdminNewsCard news={e} key={e.id} />)
  
  return (
    <div id="adminPanel">
      <h2>Admin Panel</h2>
      <Button text='CREATE' btnClass='btn btnCreate' method={() => navigate('/admin/create')} />
      <SortNews />
      <div className="adminPanel__cards">
        {cards}
      </div>
    </div>
  )
}

export default AdminPanel