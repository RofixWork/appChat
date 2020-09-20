import React, {useState, useContext} from 'react'
import { FaCamera } from "react-icons/fa";
import { Context } from '../Global/Context';

const Create = () => {
    const {create} = useContext(Context)
    const [state, setstate] = useState('')
    const [image, setimage] = useState('')
    const handleChange = e => {
        setimage(e.target.files[0])
    }
    const createPosts = (e) => {
        e.preventDefault()
        create({state, image})
    }
    return (
        <div className='mb-3 card p-3 create'>
            <form onSubmit={createPosts}>
                <div className='mb-3'>
                    <textarea type="text" rows='3' placeholder={`What's on your mind, Owen?`} value={state} onChange={e => setstate(e.target.value)} className='form-control shadow-none' required></textarea>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <label htmlFor="file">
                            <FaCamera className='icon_camera'/>
                        </label>
                        <input id='file' type="file" className='d-none' required onChange={handleChange}/>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-danger'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create
