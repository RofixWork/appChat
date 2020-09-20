import React, {useState, useContext} from 'react'
import { Context } from '../Global/Context'
import {db} from '../config/config';
import { useEffect } from 'react';

const Comments = (props) => {
    const {publishComment} = useContext(Context)
    const [comment, setcomment] = useState('')
    const [comments, setcomments] = useState([]);
    const {id} = props;
    const addComment = (e) => {
        e.preventDefault();
        publishComment({id, comment});
        setcomment('');
    };

    useEffect(() => {
        db.collection('posts').doc(id).collection('comments').orderBy('currentTime', 'desc').onSnapshot(snp => {
            setcomments(
                snp.docs.map(doc => ({
                    id: doc.id,
                    comment: doc.data().comment,
                    username: doc.data().username,
                }))
            )
        })
    })

    return (
        <>
        {comments.map((c, index) => {
            return( <div key={c.id} className='d-flex align-items-center ml-2 mb-2'>
              <p className='font-italic text-muted mb-0'>{c.username}</p>
              <h6 className='font-weight-bold mb-0 text-capitalize ml-2'>{c.comment}</h6>
            </div>)
        })}
            
           <form onSubmit={addComment}>
                <input value={comment} type="text" placeholder='Comment...' className='form-control shadow-none border-0' onChange={e => setcomment(e.target.value)} />
            </form> 
        </>
    )
}

export default Comments
