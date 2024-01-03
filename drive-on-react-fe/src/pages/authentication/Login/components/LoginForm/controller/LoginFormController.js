import { useState } from 'react';
import LoginFormView from '../view/LoginFormView';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { backendAuth } from '../../../../../../axios/instance/BaseAxios';
import { reduxStore } from 'store/reduxStore';
import { setSessionToken } from 'store/reducers/userProfile';
import { useNavigate } from 'react-router-dom';

const LoginFormController = () => {
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            await handleSignIn(values);
        }
    });

    const navigate = useNavigate();
    const [loginIsLoading, setLoginIsLoading] = useState(false);

    const handleSignIn = async (e) => {
        if (formik.isValid && formik.dirty) {
            setLoginIsLoading(true);

            e.preventDefault();
            await backendAuth({
                url: 'http://localhost:8080/user/login',
                params: {
                    email: formik.values.email,
                    password: formik.values.password
                }
            })
                .then((response) => {
                    reduxStore.dispatch(setSessionToken(response.data.jwt));
                    navigate('/homePage');
                    setLoginIsLoading(false);
                })
                .catch((err) => {
                    setLoginIsLoading(false);
                });
        } else {
            formik.resetForm();
        }
    };

    return (
        <>
            <LoginFormView formik={formik} handleSignIn={handleSignIn} loginIsLoading={loginIsLoading} />
        </>
    );
};

export default LoginFormController;
