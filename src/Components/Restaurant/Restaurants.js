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
                const { name, image, number } = doc.data();
                postItem.push({
                    id: doc.id,
                    name: name,
                    image: image,
                    number: number,
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
                <p className="smallpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione expedita accusamus est doloribus maxime esse voluptates atque non, cum, id vero eveniet autem sequi tempora accusantium quis perferendis mollitia?</p>
            </div>

            <div className="container">
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>5 Star</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum suscipit ipsam ad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti placeat esse inventore dignissimos consequatur! Libero alias temporibus est tempore impedit perspiciatis voluptatum id pariatur, vel odit nobis dolor corrupti sapiente.</p>
                <div className="container">
                    <div className="row ">
                        {posts.map((item)=>{
                            return <div key={item.id} className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard key={item.id} image={[item.image[0], item.image[1], item.image[2], item.image[3], item.image[4], item.image[5]]} name={item.name} feature1={pool} feature2={drink} feature3={breakfast} />
                        </div>
                        })}
                        {/* <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard name="McDonald's" image={[mc1, mc2, mc3, mc4, mc5, mc6]} feature2={pool} feature1={drink} feature3={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard name="Chaaye Khana" image={[chaye1, chaye2, chaye3, chaye4, chaye5]} feature1={pool} feature3={drink} feature2={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard name="Monarch Lounge" image={[monarch1, monarch2, monarch3, monarch4, monarch5, monarch6]} feature1={pool} feature3={drink} feature2={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard name="China citi" image={[china1, china2, china3, china4, china5, china6]} feature1={pool} feature3={drink} feature2={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RestaurantsCard name="Asian Cuisine Family Restaurant" image={[asian1, asian2, asian3, asian4, asian5, asian6]} feature1={pool} feature3={drink} feature2={breakfast} />
                        </div> */}
                    </div>
                </div>
            </div>

            <About />
        </div>
    )
}

export default Restaurants