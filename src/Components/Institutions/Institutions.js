import React, {useEffect, useState} from 'react'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import { db } from '../../Config/Firebase.config'
import { getDocs, collection } from 'firebase/firestore'
import InstitutionCard from './InstitutionCard'
import About from '../About'
import LoadingSpinner from '../Spinner/LoadingSpinner'
const Institutions = () => {
    const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(false)
    useEffect(() => {
        getImages();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const getImages = async () => {
        try {
            setLoading(true)
            const postItem = [];
            const querySnapshot = await getDocs(collection(db, "Institutions"));
            querySnapshot.forEach((doc) => {
                
                const { name, image, number } = doc.data();
                postItem.push({
                    id:doc.id,
                    name: name,
                    image: image,
                    number: number,
                });
            });
            console.log(postItem)
            setPosts(postItem);
            setLoading(false)
        } catch (excep) {
            console.log(excep);
        }
    }
    return (
        <>
            <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
                <div className="container text-center w-75" >
                    <h1 className='primaryHeading'>Developed Institutions</h1>
                    <p className="smallpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione expedita accusamus est doloribus maxime esse voluptates atque non, cum, id vero eveniet autem sequi tempora accusantium quis perferendis mollitia?</p>
                </div>

                <div className="container">
                    <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>Developed Institutions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum suscipit ipsam ad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti placeat esse inventore dignissimos consequatur! Libero alias temporibus est tempore impedit perspiciatis voluptatum id pariatur, vel odit nobis dolor corrupti sapiente.</p>
                    <div className="container">
                        <div className="row ">
                            {loading ? <div className='d-flex align-items-center my-5 justify-content-center'><LoadingSpinner/></div> : posts.map((item) => {
                                return <div key={item.id} className="col-md-4 my-3 col-sm-6 col-12">
                                    <InstitutionCard key={item.id} image={[item.image[0], item.image[1], item.image[2], item.image[3], item.image[4], item.image[5]]} name={item.name} feature1={pool} feature2={drink} feature3={breakfast} />
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

export default Institutions
