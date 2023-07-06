import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Blog = () => {
  return (
    <div>
      <Link href="/blog/testId" className={styles.mainContainer}>
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
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog