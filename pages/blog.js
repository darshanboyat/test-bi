import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getPosts } from "../utils/wordpress";
import { getNumberOfPosts } from "../utils/wordpress";
const Head =  dynamic(()=> import("next/head"));
const LetsKick =  dynamic(()=> import("../components/common/LetsKick"));
const Footer =  dynamic(()=> import("../components/common/Footer"));
const KeepInTouch =  dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs =  dynamic(()=> import("../components/common/locateUs"));
const Header =  dynamic(()=> import("../components/header/Header"));
const Loader =  dynamic(()=> import("../components/common/loader"));
const PostCard =  dynamic(()=> import("../components/blog/PostCard"));
const PopularBlog =  dynamic(()=> import("../components/blog/popularblog"));
// import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import fetch from "isomorphic-unfetch";

export default function Blog({ posts }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=5&page=${currentPage}`
      );
      const json = await res.json();
      setData([...data, ...json]);
    };
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentPage]);

  const itemsPerPage = 3;

  const [totalPages, setTotalPages] = useState(null);
  getNumberOfPosts().then((res) => {
    setTotalPages(res);
  });

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const jsxPosts = posts.slice(0, 3).map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"];

    const [url, setUrl] = useState(featuredMedia[0].source_url);
    return <PopularBlog post={post} featuredMedia={url} key={post.id} />;
  });

  // const popular = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => {
  const popular =
    data &&
    data.map((post) => {
      return <PostCard post={post} key={post.id} />;
    });


  return (
    <>
      <Head>
        <title>
          Brain Inventory Blog – Staff Augmentation | Software | Web | App
          Development
        </title>
        <meta
          name="description"
          content="Read the latest technology 
          trends, news & updates and 
          other topics about software & 
          app development from Brain 
          Inventory’s informative blogs!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Brain Inventory Blog –
Staff Augmentation | Software | Web | App Development 
"
        />
        <meta
          property="og:description"
          content=" Read the 
latest technology trends, news & updates and other topics 
about software & app development from Brain Inventory’s 
informative blogs!"
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta
          property="twitter:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/blog-4.jpg"
        />
        <meta
          property="twitter:title"
          content=" Brain Inventory Blog – 
Staff Augmentation | Software | Web | App Development "
        />
        <meta
          property="twitter:description"
          content=" Read the latest 
technology trends, news & updates and other topics about software
& app development from Brain Inventory’s informative blogs!"
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      {loading && <Loader />}
      <div className="relative second-component">
        <Header></Header>

        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section">
            <h1 className="text-6xl pt-12 Gilroy-Bold">Blogs</h1>
            <p className="text-sm pt-4">
              We write about things that matter. Brain Inventory Blog is a
              compilation of expert articles that highlight the most important
              aspects of today‘s tech industry. Trends, reviews, analysis,
              issues - fresh and unbiased content that unites tech enthusiasts,
              IT decision-makers, and tech-savvy readers.
            </p>

            <div>
              <h3 className="text-xl Gilroy-Bold mt-8 mb-3">Popular Blogs</h3>

              <div className="pb-2 grid lg:grid-cols-3 grid-cols-1 gap-4">
                {jsxPosts}
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <div className="col-span-2 ">{popular}</div>
              <div>
              <Pagination style="block lg:hidden"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
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
                    to your project as quickly as in 2 days. If at any point in
                    time, you feel the developer is not performing as per
                    expectation, you can ask for replacement or end the contract
                    with 0 penalty.
                  </p>
                </div>

                {/* <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Popular Blogs</h3>
                                        {posts.length === 0 ? (
                                        <h2>No added posts</h2>
                                    ) : (
                                        <ul>
                                              {posts.slice(0,6).map((post, i) => (
                                                <Featured/> 
                                            ))}
                                        </ul>
                                    )} 
                                    </div> */}
              </div>
            </div>
            <Pagination style="hidden lg:block"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
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

export function Pagination({ style, currentPage, onPageChange, totalPages, less}) {
  // const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const [load, setLoad] = useState(false)
  const changeLoad = () => {
    setLoad(true)
    setTimeout(() => {setLoad(false)}, 1500)
  }
  return (
    <div className={style}>
      <ul className="pagination">
        {/* {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={
              pageNumber === currentPage ? "pageItemActive" : "pageItem"
            }
          >
            <a className="pageLink" onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </a>`
          </li>
        ))} */}

        <button
          className={`flex rounded-full px-12 py-4 max-h-24 items-center font-bold ${
            Math.ceil(totalPages / 5) === currentPage
              ? "bg-[#0f0446]"
              : "bg-[#17008D]"
          }`}
          onClick={() => {
            onPageChange(currentPage + 1);
            changeLoad();
          }}
          disabled={Math.ceil(totalPages / 5) === currentPage}
        >
          {
            Math.ceil(totalPages / 5) === currentPage
              ? "Reached to end"
              : "Show more"
          }{" "}
         {load && <TailSpin
  height="30"
  width="30"
  color="#ffff"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{marginLeft: "1rem"}}
  wrapperClass=""
  visible={true}
/>}
        </button>
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
