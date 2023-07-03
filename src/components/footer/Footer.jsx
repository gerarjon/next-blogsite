import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 GerarSuaverdez. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Gerar Suaverdez Facebook" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Gerar Suaverdez Instagram" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Gerar Suaverdez Twitter" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Gerar Suaverdez" />
        </div>
      </div>
    </div>
  )
}

export default Footer