import React from 'react'
import DonateNavBar from './DonateNavBar'
import DonateFooter from './DonateFooter'
import DonateBloodForm from './DonateBloodForm'
import DonateBloodProfile from './DonateBloodProfile'

const DonateBlood = () => {
  return (
      <div>
          <DonateNavBar />
          <DonateBloodProfile/>
          <DonateBloodForm/>
          <DonateFooter />
      </div>
  )
}

export default DonateBlood