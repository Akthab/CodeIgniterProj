import React from 'react';
// material-ui
import { Grid, Stack, Typography } from '@mui/material';

const MyPostView = (props) => {
    const { posts } = props;

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        {posts.map((post) => {
                            return (
                                <Grid item xs={12} sm={4} md={3} key={posts.email}>
                                    <Typography>{post.name}</Typography>
                                </Grid>
                            );
                        })}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default MyPostView;
