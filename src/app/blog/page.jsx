import { FETCH_CACHE_HEADER } from 'next/dist/client/components/app-router-headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
})
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map(item=>(
        <Link href={`/blog/${item.id}`}  key={item.id} className={styles.mainContainer}>
          <div className={styles.imageContainer}>
            <Image 
              src=""
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Description</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog