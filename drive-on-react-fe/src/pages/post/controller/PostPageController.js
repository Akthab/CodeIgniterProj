import { useState } from 'react';
import PostPageView from '../view/PostPageView';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
// import { backendAuth } from '../../../../../../axios/instance/BaseAxios';

const PostPageController = () => {
    // const PostSchema = Yup.object().shape({
    //     postQuestion: Yup.string().required('Please enter a question')
    // });

    // const formik = useFormik({
    //     initialValues: {
    //         // postQuestion: '',
    //         remember: true
    //     },
    //     validationSchema: PostSchema,
    //     onSubmit: async (values) => {
    //         await handlePostQuestion(values);
    //     }
    // });

    // const [loginIsLoading, setLoginIsLoading] = useState(false);

    // const handleSignIn = async (e) => {
    //     console.log('Handle Sign In');
    //     // if (formik.isValid && formik.dirty) {
    //     console.log('Inside the formik');
    //     setLoginIsLoading(true);

    //     e.preventDefault();
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8080/post/createQuestion',
    //         params: {
    //             postQuestion: formik.values.postQuestion
    //         }
    //     });
    // };

    return (
        <>
            {/* <PageHeaderController title={'Sign in'} /> */}
            <PostPageView />
        </>
    );
};

export default PostPageController;
