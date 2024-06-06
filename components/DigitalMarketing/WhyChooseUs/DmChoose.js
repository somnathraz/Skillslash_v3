import React from 'react'
import styles from './WhyChooseUs.module.css'
import Image from 'next/image'

const DmChoose = () => {
  return (
    <>
      

      <div className={styles.mainus}>
        <h2>Why Choose Us</h2>


<div className={styles.boxgroup}>

<div className={styles.box}>
<h4>10+</h4>
<p>Brand <br/> certificate</p>

</div>

<div className={styles.box}>
<h4>30+</h4>
<p>Brand Case
  <br/>
Studies</p>

</div>

<div className={styles.box}>
<h4>100%</h4>
<p>Placement
  <br/>
Assistance</p>

</div>

<div className={styles.box}>
<h4>1:1</h4>
<p>Doubt clearing
  <br/>
Sessions</p>

</div>










</div>


<div className={styles.maindownbox}>


      <div className={styles.downbox}>
        <div className={styles.backgroundImageWrapper}>
          <Image 
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/choose.webp"
            layout="fill"
            objectFit="cover"
            alt='bg img'
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.pup}>guaranteed <span className={styles.span}>Internship</span></p>
        </div>
      </div>

      </div>



      </div>
    </>
  )
}

export default DmChoose
