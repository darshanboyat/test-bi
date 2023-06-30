import React from 'react'

const Index = () => {
  return (
    <div className='max-w-full flex flex-col items-center'>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Challenges</h1>
            <p className='opacity-50 text-lg'>During the development of the project, we encountered several technical challenges that required careful consideration and implementation. One significant hurdle was the creation of dynamic PDF invoices. It was essential to generate these invoices with dynamic data, but accomplishing this solely on the front end posed difficulties. The handling of page breaks proved problematic, particularly when dealing with both English and Arabic versions, leading to layout shifts and inconsistencies. Another challenge involved the integration of invoices created on the platform with PayPal. We aimed to provide users with the capability to accept payments directly into their PayPal accounts through our platform. This integration necessitated meticulous record-keeping of payment transactions to ensure proper synchronization between the platform and PayPal. Furthermore, we faced the task of managing documents across multiple currencies on the platform. This requirement posed challenges when calculating reports, as differentiation based on currency became crucial for accurate reporting and analysis.</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Solution</h1>
            <p className='opacity-50 text-lg'>To address the challenge of generating dynamic PDF documents, we devised a technical solution that involved shifting the application logic responsible for PDF creation to the backend. By leveraging headless browsers, we were able to render HTML layouts and seamlessly generate PDFs from the dynamically generated content. This approach ensured greater control over page breaks and layout consistency, overcoming the limitations experienced on the front end. In terms of integrating PayPal, we implemented a robust solution by utilizing user-provided app credentials, and securely storing them in our database. This allowed us to establish a direct connection between our platform and PayPal, enabling seamless payment transactions. Through meticulous application logic and synchronization mechanisms, we ensured the accurate recording and tracking of payment transactions, providing users with a seamless payment experience. To handle the complexities associated with managing multiple currencies across different documents, we incorporated a reliable third-party service. This service facilitated the calculation of currency values against a base currency (USD) and stored them in our database. With this data in place, we were able to accurately convert values into the desired currencies, enabling precise differentiation and segregation of data when generating reports. This approach ensured that reports were generated with the correct currency representation, providing users with comprehensive and accurate financial insights.</p>
        </div>
    </div>
  )
}

export default Index