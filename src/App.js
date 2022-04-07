import React from "react"
import { Route, Routes } from "react-router-dom"

import AllMeetupsPage from "./pages/AllMeetupsPage"
import NewMeeupsPage from "./pages/NewMeeupsPage"
import FavoritesPage from "./pages/FavoritesPage"
import Layout from "./layout/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />}></Route>
        <Route path='/new-meetups' element={<NewMeeupsPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
