import React from "react";
import { Card, Button, Typography, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";

const MovieGrid = ({results, numResults, loadMore, currPage}) => {

    const StyledCardContent = styled(CardContent)(`padding-bottom: 0;`);

    return (
        <Grid container sx={{padding: 2}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
            {results.map(({Poster: poster, Title: title, Year: yearOfRelease}, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ height: "100%"}}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={poster}
                        />
                        <StyledCardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {yearOfRelease}
                            </Typography>
                        </StyledCardContent>
                        <CardActions sx={{bottom: "auto"}}>
                            <Button size="small">Button</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            {Math.ceil(numResults/10) > currPage && (
                <Grid sx={{alignSelf: "center"}} item xs={2} sm={4} md={4} key={'seeMore'}>
                    <Card sx={{  display: "flex", justifyContent: "center", alignContent: "center"}}>
                        <Button sx={{width: "100%",  p:5 }} onClick={loadMore}>
                            <AddIcon />
                            See More
                        </Button>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default MovieGrid