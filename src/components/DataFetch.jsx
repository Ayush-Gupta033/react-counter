import React, {useState,useEffect} from 'react'
import axios from 'axios';

function DataFetch() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})

    const [id, setId] = useState(1)
    const [idFromClick, setIdFromClick] = useState(1)


    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    },[] )

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
        .then(res => {
          console.log(res)
          setPost(res.data)
        })
        .catch(err =>{
          console.log(err)
        })

    }, [idFromClick])
    
    

  return (
    <div>
        <div>
            <input type="text" value={id} onChange={e=> setId(e.target.value)} />
            <button onClick={e=>setIdFromClick(id)}>View Post</button>
        {post.title}
        </div>
        {/* <ul>
            {
                posts.map(
                    post=> <li key={post.id}>{post.title}</li>
                )
            }
        </ul> */}
    </div>
  )
}

export default DataFetch