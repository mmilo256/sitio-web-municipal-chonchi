import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`max-w-[1200px] w-[80%] mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container