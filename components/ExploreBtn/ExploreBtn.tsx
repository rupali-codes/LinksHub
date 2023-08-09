import React, {useContext} from 'react'
import classes from './ExploreBtn.module.css'
import { GlobalContext } from 'context/GlobalContext'


const ExploreBtn = () => {
  const { toggleNav } = useContext(GlobalContext)

    return (
            <button className={classes.container} onClick={toggleNav} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Explore
            </button>
    )
}

export default ExploreBtn
