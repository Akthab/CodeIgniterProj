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

const AddPostView = (props) => {
    const { formik, loginIsLoading, handleCreatePost } = props;

    const [checked, setChecked] = React.useState(false);

    const { errors, touched, getFieldProps } = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="ask-question">Question</InputLabel>
                            <OutlinedInput
                                id="question"
                                type="text"
                                name="question"
                                {...getFieldProps('question')}
                                placeholder="Enter Question"
                                fullWidth
                                error={Boolean(touched.question && errors.question)}
                            />
                            {touched.question && errors.question && (
                                <FormHelperText error id="standard-weight-helper-text-question">
                                    {errors.question}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="model">Model</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={Boolean(touched.model && errors.model)}
                                id="model"
                                type={'text'}
                                name="model"
                                {...getFieldProps('model')}
                                placeholder="Enter Model"
                            />
                            {touched.model && errors.model && (
                                <FormHelperText error id="standard-weight-helper-text-model">
                                    {errors.model}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="year">Year</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={Boolean(touched.year && errors.year)}
                                id="year"
                                type={'text'}
                                name="year"
                                {...getFieldProps('year')}
                                placeholder="Enter the year..."
                            />
                            {touched.year && errors.year && (
                                <FormHelperText error id="standard-weight-helper-text-year">
                                    {errors.year}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="make">Make</InputLabel>
                            <OutlinedInput
                                id="make"
                                type="text"
                                name="make"
                                {...getFieldProps('make')}
                                placeholder="Enter the make"
                                fullWidth
                                error={Boolean(touched.make && errors.make)}
                            />
                            {touched.make && errors.make && (
                                <FormHelperText error id="standard-weight-helper-text-make">
                                    {errors.make}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="fuelType">Fuel Type</InputLabel>
                            <OutlinedInput
                                id="fuelType"
                                type="text"
                                name="fuelType"
                                {...getFieldProps('fuelType')}
                                placeholder="Enter the fuel type"
                                fullWidth
                                error={Boolean(touched.fuelType && errors.fuelType)}
                            />
                            {touched.fuelType && errors.fuelType && (
                                <FormHelperText error id="standard-weight-helper-text-fuelType">
                                    {errors.fuelType}
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
                                disabled={loginIsLoading || !(formik.isValid && formik.dirty)}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                // className={classes.submitButon}
                                onClick={handleCreatePost}
                                startIcon={loginIsLoading ? <CircularProgress size={15} /> : null}
                            >
                                Ask Question
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </FormikProvider>
        </>
    );
};

export default AddPostView;
