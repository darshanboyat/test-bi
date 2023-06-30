import { getPost, getSlugs } from "../../utils/wordpress";
import React, { useState } from "react";
import Head from "next/head";
import LetsKick from "../../components/common/LetsKick";
import Footer from "../../components/common/Footer";
import KeepInTouch from "../../components/common/keepInTouch";
import LocateUs from "../../components/common/locateUs";
import Header from "../../components/header/Header";
import Loader from "../../components/common/loader";
import { useRouter } from "next/router";
import { getPosts } from "../../utils/wordpress";
import { getDate } from "../../utils/utils";

export default function PostPage({ post }) {
   
  const router = useRouter();
  
  var featuredMedia = post ? post["_embedded"]["wp:featuredmedia"][0] :"https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  // var featuredMedia = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

   
  return (
    <>
     <Loader />
        <div className="relative second-component">
          <Head>
            <title>{post.title.rendered}</title>
            <meta
          name="description"
          content={post.excerpt.rendered.split(">")[1].split("<")[0].split("Quick Summary: ")[1]}
        />
          </Head>
          <Header></Header>

          <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container pt-12 padding-left-all-section">
              <div className="grid grid-cols-3 gap-4 post-container">
                <div className="col-span-2 slug-img-container mt-8">
                  <h1 className="text-left Gilroy-Bold text-2xl mb-4  ">
                    {post.title.rendered}
                  </h1>
                  <img src={featuredMedia?.source_url} className="w-full slug-img" />
                  <span className="flex mt-2 mb-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg> */}
                    <label className="pl-2">
                      <small className="text-sm color-gray">
                        {getDate(post.modified)}
                      </small>
                    </label>
                  </span>
                  <div
                    className="card-text pb-5 slugall"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></div>
                </div>

                <div>
                  <div className="p-6 bg-gray-dc mt-8">
                    <h3 className="text-xl Gilroy-Bold mb-4">
                      Hire Dedicated Remote Developers from Brain Inventory
                    </h3>
                    <p className="text-sm">
                      Onboard{" "}
                      <a
                        className=""
                        href="https://braininventory.in/hire-dedicated-remote-developers"
                      >
                        <span className="color-hightlight">
                          dedicated remote developers
                        </span>
                      </a>{" "}
                      to your project as quickly as in 2 days. If at any point
                      in time, you feel the developer is not performing as per
                      expectation, you can ask for replacement or end the
                      contract with 0 penalty.
                    </p>
                  </div>

                  {/* <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Popular Blogs</h3>
                                        {post.length === 0 ? (
                                            <h2>No added posts</h2>
                                        ) : (
                                            <ul>
                                            {post.slice(0, 6).map((post, i) => (
                                                    <Featured post={post} key={i} />
                                                ))}
                                                </ul>
                                        )}
                                    </div> */}
                </div>
              </div>
            </div>
          </div>

          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = await getPost(params.slug);
  return {
    props: {
      post,
      posts,
    },
    revalidate: 10, // In seconds
  };
}