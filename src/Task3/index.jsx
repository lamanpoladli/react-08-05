import style from './index.module.css'
import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row, Space } from 'antd';
import Search from './search';
import { LoadingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Antdesign() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const storage = useRef([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(resp => resp.json())
            .then((data) => {
                setPosts(data)
                storage.current = data
            })
            .finally(() => setLoading(false))
    }, []);

    return (
        <>
            {
                loading ? (<LoadingOutlined
                    style={{
                        fontSize: 30,
                        display: 'block',
                        margin: '40vh auto',
                        color: 'blue',
                    }}
                    spin
                />
                ) : (

                    <Space style={{ display: 'block', width: '90%', margin: '12% auto 0' }}>
                        <Search storage={storage} setPosts={setPosts} />
                        <Row gutter={[20, 30]} >

                            {posts.map((item) => {
                                return (
                                    <>
                                        <Col className='gutter-row' span={6} xs={24} sm={12} md={8} lg={6}>
                                            <Card
                                                hoverable
                                                cover={<img alt="example" src={item.url} />}
                                            >
                                                <Meta title={item.title} />
                                            </Card>
                                        </Col>
                                    </>
                                )
                            })}
                        </Row>
                        <div className={style.box}></div>
                    </Space>
                )}
        </>
    )

}