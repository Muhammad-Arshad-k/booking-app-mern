import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {

  const {data,loading,error}= useFetch("/hotels?featured=true&limit=4")


  return (
    <div className="fp">
       {loading? "loading..... please wait"
       :
       <>
       {data&& data.map((item)=>(
       <div className="fpItem" key={item._id}>
        <img
          // src={item.photos[0]}
          src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="fpImg"
        />
        <span className="fpName" >{item.name}</span>
        <span className="fpCity" >{item.city}</span>
        <span className="fpPrice" >Starting from ₹{item.cheapestPrice}</span>
       {item.rating&&
       <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div> 
    )) } </>}
    </div>
  );
};

export default FeaturedProperties;
