import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from '../../AuthWrapper';
import RegisterFormController from '../components/RegisterForm/controller/RegisterFormController';

// ================================|| LOGIN ||================================ //

const RegisterView = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Register</Typography>
                    {/* <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography> */}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <RegisterFormController />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default RegisterView;
