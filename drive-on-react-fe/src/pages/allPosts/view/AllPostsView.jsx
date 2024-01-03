import React from 'react';
// material-ui
import { Grid, Stack, Typography, Box, IconButton } from '@mui/material';
import { LikeOutlined, DeleteOutlined } from '@ant-design/icons';
import ImageSlider from 'components/slider/imageSlider';
import CarImage01 from 'assets/images/cars/car.jpg';
import CarImage02 from 'assets/images/cars/carImage.jpg';
import PostCardView from 'components/cards/postCard/postCardView';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const AllPostsView = (props) => {
    const { posts, handleDelete } = props;

    const slides = [
        { url: CarImage01, title: 'Car Image 01' },
        { url: CarImage02, title: 'Car Image 02' }
    ];

    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto'
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        {posts.map((post) => {
                            return (
                                <div style={containerStyles}>
                                    <PostCardView />
                                    {/* <ImageSlider slides={slides} /> */}
                                </div>
                                // <Grid item xs={12} sm={4} md={3} key={posts.email}>
                                //     <Box sx={{ p: 2, border: 'solid 4px blue' }}>
                                //         <Stack spacing={1}>
                                //             <Typography>{post.question}</Typography>
                                //             <Stack spacing={1} direction="row">
                                //                 <IconButton color="secondary" size="small" sx={{ fontSize: '0.875rem' }}>
                                //                     <LikeOutlined />
                                //                 </IconButton>
                                //                 <IconButton
                                //                     color="secondary"
                                //                     size="small"
                                //                     sx={{ fontSize: '0.875rem' }}
                                //                     onClick={() => handleDelete(post.postId)}
                                //                 >
                                //                     <DeleteOutlined />
                                //                 </IconButton>
                                //             </Stack>
                                //         </Stack>
                                //     </Box>
                                // </Grid>
                            );
                        })}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default AllPostsView;
