import React, {useEffect, useState} from 'react'
import '.././Hotels/Hotels.css'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import { db } from '../../Config/Firebase.config'
import { getDocs, collection } from 'firebase/firestore'


import PlacesCard from './PlacesCard'
import About from '../About'

const Places = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            const postItem = [];
            const querySnapshot = await getDocs(collection(db, "Places"));
            querySnapshot.forEach((doc) => {
                const { name, image, number, map, desc, link, feedback } = doc.data();
                postItem.push({
                    id:doc.id,
                    name: name,
                    image: image,
                    number: number,
                    map:map,
                    desc,
                    link,
                    feedback
                });
            });
            console.log(postItem)
            setPosts(postItem);
        } catch (excep) {
            console.log(excep);
        }
    }

    return (
        <>
            <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
                <div className="container text-center w-75" >
                    <h1 className='primaryHeading'>Finest Places</h1>
                    <p className="smallpara">Jhelum is an ancient city, which has seen many eras of humankind. The City is developing to keep up with the modern world. Notable places to visit include the Khewra salt mine, 16th century’s Rohtas Fort and Mangla dam. If you’re looking for an underrated travel destination with a rich cultural history, you might want to consider visiting Jhelum through our website.</p>
                </div>

                <div className="container">
                  
                    <div className="container">
                        <div className="row ">
                            {posts.map((item) => {
                                return <div key={item.id} className="col-md-4 my-3 col-sm-6 col-12">
                                    <PlacesCard placeId={item.id} feedback={item.feedback} link={item.link} desc={item.desc} map={item.map} key={item.id} image={item.image} name={item.name} feature1={pool} feature2={drink} feature3={breakfast} />
                                </div>
                            })}
                           
                        </div>
                    </div>
                </div>

                <About />
            </div>
        </>
    )
}

export default Places
