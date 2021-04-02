import React from 'react'

import { useSelector , useDispatch } from 'react-redux'
import Loading from './Loading'

const Notify = () => { 
    const { notify} = useSelector(state => state)

    return(
        <div>
           <Loading />
        </div>
    )

}

export default Notify