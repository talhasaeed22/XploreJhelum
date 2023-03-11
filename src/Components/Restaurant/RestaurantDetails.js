import React, {useEffect, useState} from 'react'
import { useRef } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import About from '../About';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../Config/Firebase.config'

const RestaurantDetails = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const [updated, setUpdated] = useState(false)

    const openModal = () => {
        ref.current.click();
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getComments();
    }, [updated])


      const [commentsData, setCommentsData] = useState({name:localStorage.getItem('name'), comment:''})

      const onCommentChange = (e)=>{
          setCommentsData({ ...commentsData, [e.target.name]: e.target.value })
      }
      
      const [list, setList] = useState([])
      const [commentLoading, setCommentLoading] = useState(false)
  
      const getComments = async ()=>{
  
          setCommentLoading(true)
          
           const querySnapshot = await getDocs(collection(db, "Restaurants"));
              querySnapshot.forEach((doc) => {
                  if(doc.id === location.state.RestaurantId){
                      const { feedback } = doc.data();
                      setList(feedback)
                  }
              });
              
              setCommentLoading(false)
  
      }
  
      const handleComments = async (key)=>{
          // const querySnapshot = await getDocs(collection(db, "Hotels"));
          //     querySnapshot.forEach((doc) => {
          //         if(doc.id === key){
  
          //         }
          //     });
          console.log(key)
          const washingtonRef = doc(db, "Restaurants", key);
  
          await updateDoc(washingtonRef, {
            feedback: [...list , {
              'name':localStorage.getItem('name'),
              'comment':commentsData.comment
  
            }]
          }).then(()=>{
              setUpdated(!updated)
              setCommentsData({name:'', comment:''})
              
              console.log('Success')
          }).catch((err)=>{
              console.log(err)
          }) ;
      }
  


    return (
        <>
            <div className="container d-flex justify-content-center">
                <img src={location.state.image[0]} alt="hotel" className="img-fluid my-3 w-75" />
            </div>
            
            <div className="container">
                {/* <h1 className='primaryHeading'>{location.state.name}</h1> */}
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{location.state.name}</h1>
                
                <p className='smallpara'>{location.state.desc}</p>
            </div>
            <div className="container">
                <div className="row mx-auto">
                    {location.state.image.map((img, index) => {
                        return <div key={index} className="col-md-4 mx-5 my-2" style={{backgroundImage:`url(${img})`, height:'500px', width:"500px", backgroundSize:'contain', paddingLeft:'50px', backgroundRepeat:"no-repeat",}}>
                            
                        </div>
                    })}
                </div>
            </div>

            <div className="container my-5">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Location</span>
                <br />
                <p style={{fontSize:"20px", textAlign:'center', margin:"auto", margin:'10px 0', fontWeight:'bold'}}>Click on the map to see details</p>
                <br />
                <a target='_blank' rel="noreferrer" href={location.state.link}><img src={location.state.map} alt="map" className="img-fluid" /></a>
            </div>

            <div className="container my-5 d-flex flex-column">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Contact Us: </span>
                <span>For further details and queries contact us by: </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>- {location.state.contact}</span>
                </div>
            </div>

            <div className="container my-3">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Feedback</span>
                <div className='px-5 py-2' style={{ backgroundColor: 'white', boxShadow: '0px 5px 7px 0px rgb(114 114 114 / 25%)', borderRadius: "10px", borderTop: '1px solid lightgray' }}>
                    {commentLoading ? <div>Loading</div> : list.map((feedback) => {
                        return <div className='d-flex flex-row gap-3 my-2' style={{ alignItems: 'center' }}>
                            <div>
                                <i className="fa fa-user" style={{ fontSize: '30px' }} aria-hidden="true"></i>
                            </div>
                            <div className='d-flex flex-column ' >
                                <span style={{ fontSize: '15px', color: 'black', fontWeight:'bold', }}>{feedback.name}</span>
                                <span style={{ fontSize: "14px", color: 'black', paddingRight:'18px' }}>{feedback.comment}</span>
                            </div>
                        </div>
                    })}

                    <div className='d-flex flex-row gap-3 my-3 items-center' style={{ alignItems: 'center', }} >
                        <div>
                            <i className="fa fa-user" style={{ fontSize: '30px' }} aria-hidden="true"></i>
                        </div>
                        <div onClick={()=>{
                                if(!localStorage.getItem('token')){
                                    alert('Please Login to Send Feedback')
                                }
                            }} className='d-flex flex-column ' style={{ width: '100%' }} >
                            <input value={commentsData.comment} onChange={onCommentChange} disabled={!localStorage.getItem('token')}  style={{ border: '1px solid lightgray', borderRadius: "12px", width: "100%", padding: '12px' }} type="text" name="comment" id="comment" placeholder='Enter Feedback' />
                        </div>
                        <div onClick={()=>{handleComments(location.state.RestaurantId)}} className='d-flex flex-column ' style={{ cursor: 'pointer' }}>
                            <i className="fa fa-paper-plane" style={{fontSize:"20px"}} aria-hidden="true"></i>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container my-3">
                <button className="readmore mx-2" onClick={openModal}>Call Us</button>
                <button className="readmore mx-2" onClick={() => { navigate('/Restaurants') }}>Go Back</button>
            </div>

            <div className="container">
                <About />
            </div>

        </>
    )
}

export default RestaurantDetails