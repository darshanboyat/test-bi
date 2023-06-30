import Image from "next/image";

export default function loader({none}) {
  return (
    <>
      <div className={`position-loader first-component ${none}`}>
      <video
                            className="absolute top-0 left-0 w-full h-full object-contain scale-50 z-0 xs:rounded-b-3xl lg:rounded-r-3xl mobileContactVideo"
                            muted
                            loop
                            autoPlay={true}
                            controls={false}
                        >
                            <source
                                src="https://d1u4arv5y5eda6.cloudfront.net/videos/biloader.mp4"
                                type="video/mp4"
                            />
                        </video>
        {/* <video src="https://braininventory.s3.us-east-2.amazonaws.com/videos/biloader.mp4"></video> */}
        {/* <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/biloader.gif" className="w-full" alt="BrainInventory loading..."></img> */}
      </div>
    </>
  );
}
