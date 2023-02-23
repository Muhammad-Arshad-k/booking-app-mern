import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

const { data,loading,error}  = useFetch("/hotels/countByCity?cities=wayanad,London,Calicut")
console.log(data)
return (
    <div className="featured">
      {loading?("loading..... please wait"
      ):(
      <>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>wayanad</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem"> 
        <img
          src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/7902928/pexels-photo-7902928.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>calicut</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></> )}
    </div>
  );
};

export default Featured;
