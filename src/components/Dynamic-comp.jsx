import React, { useState } from 'react'

const Dynamiccomp = ({item}) => {
    const [value, setValue] = useState(0)
  return (
    <div>
        <p>{item.title}</p>
        <form action="">
            <input type="text" />
        </form>
    </div>
  )
}

export default Dynamiccomp