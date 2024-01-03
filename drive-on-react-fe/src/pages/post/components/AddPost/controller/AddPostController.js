import { useState } from 'react';
import AddPostView from '../view/AddPostView';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { backendAuth } from '../../../../../axios/instance/BaseAxios';
import { reduxStore } from 'store/reduxStore';
import { setSessionToken } from 'store/reducers/userProfile';

const AddPostController = () => {
    const LoginSchema = Yup.object().shape({
        question: Yup.string().max(255).required('Question is required'),
        model: Yup.string().max(255).required('Model is required'),
        year: Yup.string().max(255).required('Year is required'),
        make: Yup.string().max(255).required('Make is required'),
        fuelType: Yup.string().max(255).required('Fuel type is required')
    });

    const formik = useFormik({
        initialValues: {
            question: '',
            model: '',
            year: '',
            make: '',
            fuelType: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            await handleCreatePost(values);
        }
    });

    const [addPostLoading, setAddPostLoading] = useState(false);

    const handleCreatePost = async (e) => {
        if (formik.isValid && formik.dirty) {
            setAddPostLoading(true);

            e.preventDefault();
            await backendAuth({
                url: 'http://localhost:8080/post/createQuestion',
                // headers: {
                //     authorization: JSON.stringify(reduxStore.getState().userProfile.sessionToken)
                // },

                params: {
                    postUserId: '1',
                    question: formik.values.question,
                    make: formik.values.make,
                    year: formik.values.year,
                    fuelType: formik.values.fuelType,
                    model: formik.values.model
                }
            })
                .then((response) => {
                    console.log(response);
                    setAddPostLoading(false);
                })
                .catch((err) => {
                    setAddPostLoading(false);
                });
        } else {
            formik.resetForm();
        }
    };

    return (
        <>
            <AddPostView formik={formik} handleCreatePost={handleCreatePost} addPostLoading={addPostLoading} />
        </>
    );
};

export default AddPostController;
