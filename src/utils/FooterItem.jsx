import React from 'react'

const FooterItem = ({ text }) => {
  return (
    <li className="font-gupter text-xl text-gray-500 hover:pl-5 hover:text-gray-300 transition-all ease-in-out duration-300 cursor-pointer text-start">{text}</li>
  )
}

export default FooterItem
