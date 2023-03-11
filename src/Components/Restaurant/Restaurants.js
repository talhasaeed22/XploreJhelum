import React, { useEffect, useState } from 'react'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import RestaurantsCard from './RestaurantsCard'
import { db } from '../../Config/Firebase.config'
import { getDocs, collection } from 'firebase/firestore'


import About from '../About'

const Restaurants = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            const postItem = [];
            const querySnapshot = await getDocs(collection(db, "Restaurants"));
            querySnapshot.forEach((doc) => {
                console.log('Inside')
                const { name, image, number, map, contact, desc, link, feedback } = doc.data();
                postItem.push({
                    id: doc.id,
                    name: name,
                    image: image,
                    number: number,
                    map:map,
                    contact:contact,
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
        <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
            <div className="container text-center w-75" >
                <h1 className='primaryHeading'>Restaurants</h1>
                <p className="smallpara">The days of discovering restaurants as you pass by on the street are long gone. When choosing where to eat or drink, people now turn more quickly to Google and check your restaurant description and reviews. To help you rank better in Google with updated information about your restaurants, our website are giving you all restaurants deatsils at one place. Restaurants offer the best way to get a fantastic meal and spend some time relaxing.  </p>
            </div>

            <div className="container">
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>5 Star</h1>
                <p className='px-5 pt-3'>When it comes to presenting that meal, most people just want their food without dealing with any kind of fanfare that complicates everything. All information you require, we provide you with that.</p>
                <div className="container">
                    <div className="row ">
                        {posts.map((item)=>{
                            return <div key={item.id} className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard RestaurantId={item.id} feedback={item.feedback} link={item.link} desc={item.desc} contact={item.contact} map={item.map} key={item.id} image={item.image} name={item.name} feature1={pool} feature2={drink} feature3={breakfast} />
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>

            <About />
        </div>
    )
}

export default Restaurants