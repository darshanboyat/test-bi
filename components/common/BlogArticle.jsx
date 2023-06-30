import React, { useState, useEffect } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io"
import axios from "axios";

export default function BlogArticle() {
    const [store, setStore] = useState(null);

    useEffect(() => {
        axios
            .get(
                "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=3"
            )
            .then((res) => setStore(res.data));
    }, []);
    return (
        <div className="px-2 2xl:p-10 lg:p-8 2xl:space-y-8 space-y-6 w-full blogArticles">
            <div className="container padding-left-all-section-1">
                <div className="">
                    <div>
                        <div className="flex justify-between flex-col lg:flex-row">
                            <h1 className="Gilroy-Bold text-4xl leading-[3rem] lg:w-2/5 my-4">
                                The ultimate blogs & articles
                            </h1>
                            <div className="">
                                <button className="border-2 border-white p-4 m-2 rounded-full"><IoMdArrowBack /></button><button className="border-2 border-white p-4 m-2 rounded-full"><IoMdArrowForward /></button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center ">
                            {
                                store && store.map((ele, index) => (
                                    <a href={"https://www.braininventory.in/posts/"+ ele.slug} target="_self">
                                        <div className="my-4 lg:mr-4 relative h-64" key={index}>
                                            <img
                                                className="h-full rounded-3xl"
                                                src={ele._embedded["wp:featuredmedia"][0].source_url}
                                                alt="Card background"
                                            />
                                            {/* <div className="absolute inset-0 rounded-3xl bg-gray-900 opacity-60"></div> */}
                                            <div className="absolute inset-0 flex items-start justify-between flex-col p-4 ">
                                                {/* <h2 className="text-xl font-bold text-white uppercase">{ele.title.rendered}</h2> */}
                                                {/* <h2 className="text-xs font-bold text-white">{new Date(ele.date).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric"
                                                })}</h2> */}
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
