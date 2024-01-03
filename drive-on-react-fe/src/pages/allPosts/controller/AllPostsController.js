import AllPostsView from '../view/AllPostsView';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { backendAuth } from '../../../axios/instance/BaseAxios';

const AllPostsController = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            await backendAuth({
                method: 'post',
                url: 'http://localhost:8080/post/getPosts',
                cancelToken: source.token
            })
                .then((response) => {
                    console.log(response.data);
                    setPosts(response.data);
                })
                .catch((err) => {});
        };
        fetchData();

        return () => {
            source.cancel();
        };
    }, []);

    const handleDelete = async (id) => {
        const source = axios.CancelToken.source();

        await backendAuth({
            method: 'post',
            url: 'http://localhost:8080/post/deletePosts',
            cancelToken: source.token,
            params: {
                postId: id
            }
        })
            .then((response) => {
                const updatedProducts = posts.filter((post) => post.postId !== id);
                setPosts(updatedProducts);
                console.log(response);
            })
            .catch((err) => {});
    };

    return <AllPostsView posts={posts} handleDelete={handleDelete} />;
};

export default AllPostsController;
