import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useTheme} from '../contexts/ThemeContext'
import '../App.css'

export default function Albums() {
    const [albumList, setAlbumList] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res=> res.json())
        .then(data => setAlbumList(data.slice(0,10)))
    })
    const {theme, setTheme} = useTheme()
  return (
    <div className={theme}>
        <h1>Albums List</h1>
        {
            albumList.map(album => <li><Link to={`/album/${album.id}`} >Album No:{album.id}</Link></li>)
        }
        
    </div>
  )
}
