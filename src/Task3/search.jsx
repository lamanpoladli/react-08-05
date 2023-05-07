import { Input } from 'antd'
import React from 'react'


export default function Search({ storage, setPosts }) {
    const handleSearch = (e) => {
        const filteredPosts = storage.current.filter(x => x.title.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setPosts(filteredPosts)
    }

    return (
        <Input
            style={{ margin: '1% 0 2%' }}
            placeholder="Enter Title"
            onChange={(e) => handleSearch(e)}
        />
    )
}