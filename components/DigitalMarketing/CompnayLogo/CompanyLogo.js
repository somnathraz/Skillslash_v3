import Image from 'next/image'
import React from 'react'
import Styles from "./Company.module.css"

const CompanyLogo = () => {
  return (
    <>
    <div className={Styles.maindiv}>
      <h2>Our Trainers at top tech companies</h2>
      <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/digital-marketing/partner_logos.webp"
      alt='company_logo'
      width={900}
      height={100}
      />
    </div>
    </>
  )
}

export default CompanyLogo
