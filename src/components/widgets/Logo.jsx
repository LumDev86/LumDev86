import "./Logo.scss"
import React, {useEffect, useState} from 'react'
import {useUtils} from "/src/hooks/utils.js"

function Logo({ className = "", style = {}, size, setDidLoad, isDark }) {
    const utils = useUtils()

    className = className || ``
    size = utils.number.forceIntoBounds(size, 0, 4, 3)

    const sizeClass = `logo-wrapper-size-${size}`

    const logoFile = isDark === false
        ? `/logos/logo-lumdev-light.svg`
        : `/logos/logo-lumdev-dark.svg`

    return (
        <div className={`logo-wrapper ${sizeClass} ${className}`}
             style={style}>
            <img src={utils.file.resolvePath(logoFile)}
                 onLoad={() => { setDidLoad && setDidLoad(true) }}
                 alt={`logo`}/>
        </div>
    )
}

export default Logo