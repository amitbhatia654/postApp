import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Test from '../src/Test'
import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    setLoading(true)
    const { data } = await axios.get('https://dummyjson.com/posts')
    setPosts(data.posts)
    setLoading(false)
  }

  return (
    <div>
      <h1 className='Heading'>InstaGram Dummy Posts</h1>
      {posts?.map((data) => {
        return (
          <div className='postsBox '>
            <p> <b>Post No.</b>{data.id}</p>
            <p className='title'> <b>Title :</b> {data.title}</p>
            <p> <b>Body :</b> {data.body}</p>
            <p>{console.log(data)}</p>
            <p className='like'><FavoriteBorderOutlinedIcon />{data.reactions} Likes</p>
          </div>
        )
      })}
      {
        loading &&
        <LinearProgress />
      }

    </div>
  );
}

export default App;
