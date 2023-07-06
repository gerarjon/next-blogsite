import React from 'react'
import Button from '@/components/button/Button'
import Image from 'next/image'
import styles from './page.module.css'
import { items } from './data.js'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            src={items.image} 
            alt="" 
            fill="true" 
          />
        </div>
      </div>
    </div>
  )
}

export default Category