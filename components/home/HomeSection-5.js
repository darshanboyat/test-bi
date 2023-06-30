import { useEffect, useState } from "react"
const HomeSectionFive = () => {
   const [position, setPostion] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset >= 3000){
        setPostion(true);
      }
    })
  })
    return (
        <div className=" relative flex flex-col p-10">
            <div className="container padding-left-all-section">
          
            <p className="text-heading-1 Gilroy-Bold mb-8">
              <span className="text-base-orange-1">our </span>   
               forte
            </p>
         
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-20 gap-8 flex-1">
          
                <div className="relative">
                  <div className="hover-image-animation cursor-pointer">
                   {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-1.png' loading="lazy" alt="NFT token development in India, UK, Canada and Jordan." className="w-full"></img>}
                  </div>
                   <div className="mt-2">
                      <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">NFT</h2>
                   </div>
                </div>
         
        
                <div className="relative hover-image-animation">
                <div className="hover-image-animation cursor-pointer">
                {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-6.png' loading="lazy" alt="Blockchain technology development services" className="w-full"></img>}
                  </div>
                <div className="mt-2">
                <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">Blockchain</h2>
                   </div>
                </div>
         
                <div className="relative hover-image-animation">
                <div className="hover-image-animation cursor-pointer">
                {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-5.png' loading="lazy" alt="Metaverse development Service in Inida, UK, Canada & Jordan." className="w-full"></img>}
                  </div>
                <div className="mt-2">
                <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">Metaverse</h2>
                   </div>
                </div>
         
                <div className="relative hover-image-animation">
                <div className="hover-image-animation cursor-pointer">
                {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-3.png' loading="lazy" alt="Batting app development company in Inida, UK, Canada & Jordan" className="w-full"></img>}
                  </div>
                <div className="mt-2">
                <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">Sports Betting Solutions</h2>
                   </div>
                </div>
         
                <div className="relative hover-image-animation">
                <div className="hover-image-animation cursor-pointer">
                {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-4.png' loading="lazy" alt="Social Media apps development service" className="w-full"></img>}
                  </div>
                <div className="mt-2">
                <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">Custom Social Networks</h2>
                   </div>
                </div>
         
                <div className="relative hover-image-animation">
                <div className="hover-image-animation cursor-pointer">
                {position && <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/forte-2.png' loading="lazy" alt="Elearning and educational apps development" className="w-full"></img>}
                  </div>
                <div className="mt-2">
                <h2 className="Gilroy-Bold text-white text-xl text-stroke-forte">elearning & LMS</h2>
                   </div>
                </div>
         
             
            </div>

            </div>
        </div>
    )
}

export default HomeSectionFive;