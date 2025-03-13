import React from 'react'

const Heading = ({ text, align = "center", dark = true }) => {

    return (
        <h2 className={`text-4xl ${dark ? "text-customDarkBlue" : "text-white"} py-16 uppercase font-black text-${align}`}>{text}</h2>
    )

}

export default Heading