// ContentList.js
import React, { useEffect, useState } from 'react';
import { fetchContentList } from '../api';

const ContentList = () => {
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        const getContentList = async () => {
            try {
                const data = await fetchContentList();
                setContentList(data);
            } catch (error) {
                // Handle error
            }
        };
        getContentList();
    }, []);

    return (
        <div>
            <h2>Content List</h2>
            <ul>
                {contentList.map(content => (
                    <li key={content._id}>{content.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContentList;
