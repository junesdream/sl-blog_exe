import React from 'react'
import './EmptyList.css'
import Empty from '../../assets/empty.gif'

const EmptyList = () => {
    return (
        <div className="emptyList-wrap" >
        <img src={Empty} alt="empty" />
            
        </div>
    )
}

export default EmptyList
