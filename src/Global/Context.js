import React, {createContext, useState, useEffect} from 'react'
import {auth, storage, db} from '../config/config'
import firebase from 'firebase'
export const Context = createContext();
const ContextProvider = (props) => {
    const [model, setmodel] = useState(false)
    const [user, setuser] = useState(null)
    const [loader, setloader] = useState(false)
    const [posts, setposts] = useState([])
    //open model
    const openModel = () => {
        setmodel(true)
    }
    //closeModel
    const closeModel = () => {
        setmodel(false);
    }

    //register
    const register = async user => {
        const {username, email, password} = user;

        try {
            const response = await auth.createUserWithEmailAndPassword(email, password);
            response.user.updateProfile({displayName: username});
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        
        auth.onAuthStateChanged(user => {
            setuser(user)
            setloader(!loader);
        })

        //Set posts
        db.collection('posts').orderBy('currentTime', 'desc').onSnapshot((snp) => {
            setposts(
                snp.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    username: doc.data().username,
                    image: doc.data().image
                    
                }))
            )
        })

    }, [])

    //login
    const login = async user => {
        const {email, password} = user;
        try {
            const res = auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    }
    
    //logOut
    const logOut = () => {
        auth.signOut()
            .then(() => {
                setuser(null)
            })
            .catch(err => {
                console.log(err);
            })
    }

    //create
    const create = data => {
        const {state, image} = data;
        const upload = storage.ref(`images/${image.name}`).put(image);

        upload.on(
            'state_changed',
            (snp) => {
                const progress = (snp.bytesTransferred / snp.totalBytes) * 100;
                console.log(progress);
            }, (err) => {
                console.log(err);
            }, 
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    db.collection('posts').add({
                        title: state,
                        image: url,
                        username: user.displayName,
                        currentTime: firebase.firestore.FieldValue.serverTimestamp()
                    })
                })
            }
        )

    }

    //publishComment
    const publishComment = data => {
        const {id, comment} = data;
        db.collection('posts').doc(id).collection('comments').add({
            username: user.displayName,
            comment,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <Context.Provider value={{model, openModel, closeModel, register, login, user, logOut, create, posts, publishComment}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
