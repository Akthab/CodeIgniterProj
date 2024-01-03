import { useState } from 'react';
import RegisterFormView from '../view/RegisterFormView';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { backendAuth } from '../../../../../../axios/instance/BaseAxios';

const RegisterFormController = () => {
    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            remember: true
        },
        validationSchema: SignUpSchema,
        onSubmit: async (values) => {
            await handleRegister(values);
        }
    });

    const [signUpIsLoading, setSignUpIsLoading] = useState(false);

    const handleRegister = async (e) => {
        console.log('Handle Sign In');
        console.log('Inside the formik');
        if (formik.isValid && formik.dirty) {
            setSignUpIsLoading(true);

            e.preventDefault();
            backendAuth({
                url: 'http://localhost:8080/user/createUser',
                params: {
                    name: formik.values.name,
                    email: formik.values.email,
                    password: formik.values.password
                }
            })
                .then((response) => {
                    console.log(response.data.message);
                    setSignUpIsLoading(false);
                })
                .catch((err) => {
                    setSignUpIsLoading(false);
                });
        } else {
            formik.resetForm();
        }
    };

    return (
        <>
            {/* <PageHeaderController title={'Sign in'} /> */}
            <RegisterFormView formik={formik} handleRegister={handleRegister} signUpIsLoading={signUpIsLoading} />
        </>
    );
};

export default RegisterFormController;
