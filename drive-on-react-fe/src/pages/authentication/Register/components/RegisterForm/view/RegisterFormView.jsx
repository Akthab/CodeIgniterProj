import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    CircularProgress
} from '@mui/material';

// third party
import { FormikProvider } from 'formik';

// project import
// import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const RegisterFormView = (props) => {
    const { formik, signUpIsLoading, handleRegister } = props;

    const [checked, setChecked] = React.useState(false);

    const { errors, touched, getFieldProps } = formik;

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        console.log('SUBMIT');
    };

    return (
        <>
            <FormikProvider value={formik}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="name-register">Name</InputLabel>
                            <OutlinedInput
                                id="name"
                                type="text"
                                name="name"
                                {...getFieldProps('name')}
                                placeholder="Enter your name"
                                fullWidth
                                error={Boolean(touched.name && errors.name)}
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="email-login">Email Address</InputLabel>
                            <OutlinedInput
                                id="email"
                                type="email"
                                name="email"
                                {...getFieldProps('email')}
                                placeholder="Enter email address"
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="password-login">Password</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={Boolean(touched.password && errors.password)}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                {...getFieldProps('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Enter password"
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="password-login">Confirm Password</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                {...getFieldProps('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Enter confirm password"
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.confirmPassword}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>

                    {errors.submit && (
                        <Grid item xs={12}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <AnimateButton>
                            <Button
                                id={'submit'}
                                type="submit"
                                fullWidth
                                disabled={signUpIsLoading || !(formik.isValid && formik.dirty)}
                                variant="contained"
                                color="primary"
                                startIcon={signUpIsLoading ? <CircularProgress size={15} /> : null}
                                onClick={handleRegister}
                            >
                                Sign Up
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <FirebaseSocial /> */}
                    </Grid>
                </Grid>
            </FormikProvider>
        </>
    );
};

export default RegisterFormView;
