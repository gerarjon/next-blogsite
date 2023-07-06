import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error in blanditiis reiciendis autem similique provident veritatis, a suscipit veniam soluta odit magni quisquam ex expedita libero repellendus doloribus deserunt.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita corrupti inventore voluptas repellendus tempore. Earum, enim asperiores, placeat repudiandae quae aliquid delectus praesentium, laborum temporibus dolore possimus velit dolorem?
        </p>
      </div>
    </div>
  )
}

export default BlogPost