
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';

const   Reserve=({setOpen,hotelId}) =>{
  
  const {data,loading,error}= useFetch(`hotels/room/${hotelId}`)

  return ( 
   <div className="reserve">
    <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)} />
        <span>Select your room:</span>
        {data.map(item=>(
          <div className='ritem'>
             <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rdesc">{item.desc}</div>
              <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
              <div className="rPrice">{item.price}</div>
             </div>
             <div>
              {item.roomNumbers.map(roomNumber=>{
                <label htmlFor="">{roomNumber.number}</label>
              })}
             </div>
          </div>
        ))}
    </div>
   </div>
  )
}

export default Reserve