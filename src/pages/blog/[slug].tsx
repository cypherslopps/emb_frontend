import Link from 'next/link'
import React from 'react'
import axiosClient from '@/lib/axiosClient';
import { IoArrowBack } from 'react-icons/io5';
import { Meta, PostOverview } from '@/components';
import Thumbnail from '../../../public/assets/images/wallpaperflare.com_wallpaper (10).jpg';
import GuestLayout from '@/components/layouts/GuestLayout';
import Head from 'next/head';
import PostProps from '@/interfaces/posts';

const post = {
  thumbnail: Thumbnail,
  title: "Loading scripts asynchronously as a Promise in Javascript",
  date: "February 16, 2023",
  stat: "1 min read",
  content: "Content"
}

function BlogDetail({ post }: { post: PostProps }) {
  return (
    <>
      <Meta 
        title={post.title}
        description={post.excerpt}
        keyword="crypto, tech"
      />

      <div className='mb-16 pt-12 flex justify-center'>
        <div className="wrapper w-2/4 space-y-12 min-w-screen">
          <Link href="/blog" className="flex items-center gap-3 text-sm text-gray-500/95 dark:text-dark-shade-500/90 font-light">
            <IoArrowBack />
            Back to blog
          </Link>

          {/* Post Overview */}
          <PostOverview {...post} />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const response = await axiosClient.get("/posts");
  const posts = response.data.data;
  const params = posts.map(({ slug }: {slug: string}) => ({
    params: {slug}
  }));

  return {
    fallback: false,
    paths: params 
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const response = await axiosClient.get(`/posts/${params.slug}`);
  const singlePost = response.data.data;
  console.log(singlePost, "single post ss", response.data.data)

  return {
    props: {
      post: singlePost
    }
  }
}

export default BlogDetail;

BlogDetail.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}