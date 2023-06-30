import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import HomeSectionImageOne from '../../publichttps://braininventory.s3.us-east-2.amazonaws.com/images/HomeSectionTwoOne.png'
import HomeSectionImageTwo from '../../publichttps://braininventory.s3.us-east-2.amazonaws.com/images/HomeSectionTwoTwo.png'
import FrameElements from '../../publichttps://braininventory.s3.us-east-2.amazonaws.com/images/frameElements.png'
import Frame from '../../publichttps://braininventory.s3.us-east-2.amazonaws.com/images/frame.png'

const HomeSectionTwo = () => {
    return (
        <div className="relative">
            <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden bg-gradient-2">
                <p className="text-heading-1 Gilroy-Bold 2xl:mt-52 xl:mt-44 lg:mt-40 mt-36 2xl:px-10 px-8">the new standard in the <br /> web design</p>
                <div className="absolute bottom-0">
                    <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/frameElements.png' className="w-[100vw]"></img>
                </div>
            </div>
            <div className="min-h-screen relative flex  items-center bg-gradient-3">
                <div className="w-2/3 flex items-center">
                    <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/HomeSectionTwoTwo.png' className="h-[38vh] ml-[10vw] z-40 w-[50vw]"></img>
                </div>
                <div className="w-1/3 p-8 flex flex-col items-center">
                    <div className="flex flex-col space-y-8">
                        <p className="text-heading-1 Gilroy-Bold">our work <br /> speaks about <br /> our company</p>
                        <p className="text-heading-4 w-3/4">Lorem Ipsem is a dummy text of printing and typesetting settings.</p>
                        <HomeButton>contact us</HomeButton>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 h-[200vh] z-20 w-full flex">
                <div className="absolute bottom-[23vh] h-[135vh] z-20">
                    <div className="sticky top-[25%]">
                        <div className="flex">
                            <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/frame.png' className="ml-[9vw] w-[60vw] h-[40vh]"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionTwo;