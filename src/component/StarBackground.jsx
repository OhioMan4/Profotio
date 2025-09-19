import { useEffect, useState,setInteval} from "react";

export const StarBackground=()=>{
  const [stars,setStars]=useState([]);
  const [meteors,setMeteors]=useState([]);
  

  
  useEffect(() => {
  // const interval = setInterval(() => {
  //   generateStars(); 
  //   generateMeteor();// gọi mỗi 1 giây
  // }, 1000);
  // return () => clearInterval(interval);
  generateStars();
  generateMeteor();
  const handleResize = () => {
    generateStars();
  }
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  }
}, []);


  const generateStars=()=>{
    const numberOfStars=Math.floor( (window.innerWidth * window.innerHeight)/10000);

    const starsArray = [];
    for(let i=0;i<numberOfStars;i++){
       starsArray.push({
        id: i,
        size:Math.random()*3 +1,
         x:Math.random()*100,
         y:Math.random()*100,
         opacity:Math.random()*0.5+0.5,
         animationDuration:Math.random() * 4 +2,
      });
    }
    setStars(starsArray);
    console.log(starsArray);
  }

  const generateMeteor=()=>{
    const numberOfMeteor=5;

    const meteorArray = [];
    for(let i=0;i<numberOfMeteor;i++){
       meteorArray.push({
        id: i,
        size:Math.random()*2 +1,
         x:Math.random()*100,
         y:Math.random()*100,
         delay:Math.random()*15,
         animationDuration:Math.random() * 3 +3,
      });
    }
    setMeteors(meteorArray);
    console.log(meteorArray);
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
     {stars.map((star)=>(
      <div key={star.id} 
         className="star animate-pulse-subtle" style={{
         width: star.size+ "px",
         height:star.size+ "px" ,
         left:star.x+ "%",
         top:star.y+ "%",
         opacity:star.opacity.opacity,
        animationDuration:star.animationDuration+"s"
      }}/>
     ))}

     {meteors.map((meteo)=>(
      <div key={meteo.id} 
         className="meteor animate-meteor" style={{
         width: meteo.size *50 + "px",
         height:meteo.size*2  + "px" ,
         left:meteo.x+ "%",
         top:meteo.y+ "%",
         animationDelay:meteo.delay,
        animationDuration:meteo.animationDuration+"s"
      }}/>
     ))}
    </div>
  )
}