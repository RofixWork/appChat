import React, {useContext} from 'react'
import { Context } from '../Global/Context';
import Comments from './Comments';

const Posts = () => {
    const { posts } = useContext(Context);
    
    return (
        <>
        {posts.map(post => {
            return(
                <div key={post.id} className="card mb-3">
                    <div className="card-header user_info bg-white d-flex align-items-center">
                        <h3 className="user_fLetter mb-0">{post.username.charAt(0)}</h3>
                        <h6 className='user_name mb-0 ml-1'>{post.username}</h6>
                    </div>
                    <img src={post.image} className='card-img-top' alt={post.image}/>
                    <div className="card-body">
                        <h5 className='mb-0'>{post.title}</h5>
                    </div>
                    <Comments id={post.id}/>
                </div>

            )
        })}

        </>
    );
}

export default Posts
