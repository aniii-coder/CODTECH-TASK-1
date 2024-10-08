import React from 'react'
import LoadingGIF from '../thumbnailAvatar/loading.gif'

const Loader = () => {
  return (
    <div className='loader'>
        <div className="loaderImg">
            <img src={LoadingGIF} alt="" id='imgLoader'/>
        </div>
    </div>
  )
}

export default Loader