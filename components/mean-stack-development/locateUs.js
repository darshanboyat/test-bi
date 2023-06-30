import Image from "next/image"

const locations = [
    {
        placeName: 'India (HQ)',
        address: '618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001',
        image: 'india.svg',
        phone: '+918109561401',
        alt: 'Brain Inventory India (HQ) - 618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001',
    },
    {
        placeName: 'United Kingdom',
        address: 'Brain Inventory, SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB',
        image: 'unitedKindom.svg',
        phone: '+18008209286',
        alt: 'Brain Inventory United Kingdom office: SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB',
    },
    {
        placeName: 'Canada',
        address: '44 Main Street East Milton, ONCanada L9T 1N3',
        image: 'canada.svg',
        phone: '+4166696505',
        alt: 'Brain Inventory Canada Office: 44 Main Street East Milton, ONCanada L9T 1N3',
    },
    {
        placeName: 'Jordan',
        address: '185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan ',
        phone: '+962790961000',
        image: 'Jordan.png',
        alt: 'Brain Inventory Jordan Office: 185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan',
    }
]

export default function LocateUs() {
    
    return (
        <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
            <div className="container padding-left-all-section">
            <div className="2xl:py-20 py-12 2xl:px-12 lg:px-16 border border-blue bg-base-blue-2 2xl:space-y-8 xl:space-y-6 space-y-4">
                <h4 className="text-heading-1 Gilroy-Bold mobile-padding">locate us</h4>
                <div className="lg:grid xl:grid-cols-4 grid-cols-2 2xl:gap-8 gap-4">
                    {
                        locations.map((el) => {
                            return (<Card key={el.placeName} info={el}  />)
                        })
                    }
                </div>
            </div>
        </div>
         </div>
    )
}

const Card = ({info}) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-2 mb-6 items-start">
                <div className="relative place-self-center">
                    <img src={'https://braininventory.s3.us-east-2.amazonaws.com/images/' + info.image} alt={info.alt} width={138} height={167} ></img>
                </div>
                <div className="flex flex-col">
                    <h4 className="2xl:text-base text-lg Gilroy-Bold">{info.placeName}</h4>
                    <p className="2xl:text-[11px] text-[11px]">{info.address}</p>
                    <p className="2xl:text-base text-sm mt-2">{info.phone}</p>
                </div>
            </div>
        </>
    )
}