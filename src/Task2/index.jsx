import React from 'react'
import style from './index.module.css'
import { Button, Input } from 'antd';
// import { v4 as uuidv4 } from 'uuid';

const Inp = () => {
    // function handleChange(e) {

    // }
    return (
        <>
            <Button
                className={style.add}
            >Add</Button>
            <Input
                name="name" 
                // onChange={(e) => handleChange(e)}
                className={style.input}
                style={{ width: '20%' }}
                type='text'
            />
        </>
    )
}

export default Inp