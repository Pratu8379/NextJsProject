"use client"
import React from 'react'
import { useMyContext } from './context/Context';
import { useRouter } from "next/navigation";


const PostDataToServer = async () => {
    const { data } = useMyContext();
    const router = useRouter()

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            router.push(`/offers`);

        } else {
            console.error('Failed to post data to the server.');
            return false;
        }
    } catch (error) {
        console.error('Error posting data to the server:', error);
        return false;
    }
};

export default PostDataToServer

