import { useState } from 'react'
import style from './index.module.css'
import { Button } from 'antd';

export const Toggle = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
    return (
        <>

            <Button
                className={style.btn}
                onClick={handleClick}
            >
                Click
            </Button>
            <div
                className={style.box}
                style={{
                    backgroundColor: isActive ? 'yellow' : '',
                }}></div>
        </>
    )
}