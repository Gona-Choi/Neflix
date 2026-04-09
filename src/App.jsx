import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


//공통 레이아웃을 여러 페이지가 같이 쓰려고 바깥틀 AppLayout을 공유
//홈페이지 / index means [path="/"]를 그대로 쓴다
//영화 전체 보여주는 페이지(서치) /movies?q=hhh
//영화 디테일 페이지 /movies/:id

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element = {<Homepage />}/>
        <Route path="movies">
          <Route index element={<MoviePage />}/>
          <Route path=":id" element={<MovieDetail/>}/>
        </Route>
      </Route>      
      <Route path="#" element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
