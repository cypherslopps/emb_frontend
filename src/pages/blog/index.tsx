import React from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Meta, Heading, PostExcerpt, AdBlock, FormSearch } from "@/components";
import GuestLayout from '@/components/layouts/GuestLayout';
import PostProps from '@/interfaces/posts';
import { getFilteredPosts } from '@/utils/apis/posts';
// import styles from '@/styles/svg-background.module.css';


function Blog({ posts }: PostProps[]) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Meta 
        title="Blog - Empowered Blockchain Firm"
        description="Always be current in the space - Crypto, Tech, etc."
        keyword="crypto, tech"
      />

      <main className="flex flex-col gap-y-20 h-auto">
      {/*${resolvedTheme === "light" ? styles.cubeLight : styles.cubeDark}*/}
        <section className={`blog__overview col-span-full py-20 bg-gray-50/90 flex flex-col items-center gap-y-14`}>
          <motion.h1 
            className="text-3xl font-noto_sans text-gray-800 bg-clip-text font-semibold dark:text-white font-noto_sans"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .3 }}
          >Our Blog</motion.h1>
        </section>

        {/* Blog List */}
        <section className="blog__list w-10/12 mx-auto flex flex-col gap-0 pr-7 pl-12 py-4">
          {/*<header className="flex justify-end items-center pb-4">            
            {/* Form Search 
            <FormSearch />
          </header>*/}

          {/* Post List */}
          <div className="list mt-5 space-y-6 divide-y">
            {posts.map(post => (
              <PostExcerpt
                key={post.id}
                {...post}
              />
            ))}
          </div>
        </section>

        {/* Blog sidebar */}
        {/*<aside className="blog__side sticky top-10 col-span-3 border-l border-gray-200/70 py-4 px-8 flex flex-col gap-6">
          {/* Ad Block
          <AdBlock />

          {/* Ad Block 
          <AdBlock />

          {/* Ad Block 
          <AdBlock />

          {/* Ad Block 
          <AdBlock />

          {/* Ad Block 
          <AdBlock />
        </aside> */}
      </main>
    </>
  )
}

export default Blog;

export async function getStaticProps() {
  const posts = await getFilteredPosts(1, 7);

  return {
    props: {
      posts
    }
  }
} 

Blog.getLayout = (page: any) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}