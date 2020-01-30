import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
         <h2>Link</h2>
        <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
        <p>From: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        <p>Clicks: <a href={link.to} target="_blank" rel="noopener noreferrer"><strong>{link.clicks}</strong></a></p>
        <p>Date: <a href={link.to} target="_blank" rel="noopener noreferrer"><strong>{new Date(link.date).toLocaleDateString()}</strong></a></p>
        </>

    )
}