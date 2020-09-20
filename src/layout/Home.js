import React, {useContext} from 'react'
import Create from '../components/Create';
import Navbar from '../components/Navbar'
import Posts from '../components/Posts';
import {Context} from '../Global/Context';
const Home = () => {
    const {loader, user} = useContext(Context)
    return (
      <>
        <Navbar />
        {!loader && user ? 
            <div className="container home">
            <div className="row">
                <div className="col-md-8">
                    <Create/>
                    <Posts/>
                </div>
                <div className="col-md-4 ">
                <div className="d-flex  align-items-center user_info" style={{position:'fixed'}}>
                    <h3 className='user_fLetter text-capitalize'>{user.displayName[0]}</h3>
                    <h6 className="ml-1 user_name">{user.displayName}</h6>
                </div>
                </div>
            </div>
            </div>
        : 
            <div className=" head d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className='text-center'>
                                <h1 className='head_title'>Developper Connector</h1>
                                <p className='lead head_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi temporibus culpa nisi fuga velit aut. Aliquam cupiditate dignissimos eligendi quae quo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
      </>
    );
}

export default Home
