import React from 'react'

interface HeaderAndSubtext {
    header: string;
    subtext: string;
}

const HeaderText = ({ header, subtext }: HeaderAndSubtext) => {
    return (
        <div className="header py-5">
            <h1>{header}</h1>
            <small>{subtext}</small>
        </div>
    )
}

export default HeaderText
