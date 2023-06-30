import { useState } from "react";
import { useRouter } from "next/router";
import HomeButton from "../buttons/HomeButton";
import { getDate } from "../../utils/utils";
import Loader from "../common/loader";

export default function PostCard({ post }) {
  const router = useRouter();

  const URLGOTO = () => {
    console.log(post);
    router.push(`/posts/${post.slug}`);
  };
  const truncate = (str, n) => {
    return str.length > 50 ? str.substring(0, 70) + "..." : str;
  };
  return (
    <>
      <div className="">
        {/* <Loader /> */}
        <div
          className="lg:flex custom-class cursor-pointer"
          onClick={() => URLGOTO()}
        >
          <div className="relative lg:w-1/2 mr-4 ">
            <div className="overlay">
            <img src={post["_embedded"]["wp:featuredmedia"][0].source_url}/>
            </div>
            <div className="absolute top-36 lg:top-40 left-4">
                  <HomeButton>
                    <span className="text-sm">Read More</span>
                  </HomeButton>
                </div>
          </div>
          <div className="lg:w-1/2">
            <div className="">
              <div className="">
                <h3 className="text-2xl Gilroy-Bold">{post.title.rendered}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  className="text-sm mt-2"
                ></p>

                <small className="text-sm color-gray">
                  {getDate(post.date)}
                </small>
                <br />
                
              </div>
              <div></div>
            </div>

            {/* </li> */}
          </div>
        </div>
      </div>
    </>
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
