import styles from "./Article.module.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type articleDataProps = {
    id: number,
    title: string,
    preview: string,
    photoID: string,
}

export const Article: React.FC<articleDataProps> = (articleData: articleDataProps) => {
    return (
        <div className={styles.article}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={"/articleImages/" + articleData.photoID + ".jpg"}
                    title="articlePhoto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {articleData.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {articleData.preview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}