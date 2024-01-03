import MyPostView from '../view/MyPostsView';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

const MyPostController = () => {
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/user/getUsers',
                cancelToken: source.token
                // params: {
                //     email: formik.values.email,
                //     password: formik.values.password
                // }
            })
                .then((response) => {
                    console.log(response.data);
                    setPosts(response.data);
                    // setSubmitQuestionLoading(false);
                })
                .catch((err) => {
                    // setSubmitQuestionLoading(false);
                });
        };
        fetchData();

        return () => {
            source.cancel();
        };
    }, []);

    return <MyPostView posts={posts} />;
};

export default MyPostController;
