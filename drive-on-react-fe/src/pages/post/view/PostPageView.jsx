import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import CardWrapper from 'components/cards/wrapper/CardWrapper';
import AddPostController from '../components/AddPost/controller/AddPostController';
import MyPostController from '../components/MyPosts/controller/MyPostsController';

// ================================|| LOGIN ||================================ //

const PostPageView = () => (
    <CardWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Post Pages</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AddPostController />
            </Grid>
            <Grid item xs={12}>
                <MyPostController />
            </Grid>
        </Grid>
    </CardWrapper>
);

export default PostPageView;
