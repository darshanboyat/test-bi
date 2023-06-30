import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import HomeButton from "../buttons/HomeButton";
import { getDate } from "../../utils/utils";

export default function PopularBlog({ post, featuredMedia}) {
  // const featuredMedia = post["_embedded"]["wp:featuredmedia"][0];

  const router = useRouter();
  const URLGOTO = () => {
    router.push(`/posts/${post.slug}`);
  };

  const truncate = (str, n) => {
    return str.length > 50 ? str.substring(0, 70) + "..." : str;
  };
  return (
    <>
      <div className="relative hover-overlay cursor-pointer">
        <div className="overlay">
          <img src={featuredMedia} />
        </div>
        <div className="absolute top-12">
          <div className="pl-2 pr-2">
            <div className="mt-24" onClick={() => URLGOTO()}>
              <HomeButton>
                <span className="text-sm">Read More</span>
              </HomeButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const events = await getEvents();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
