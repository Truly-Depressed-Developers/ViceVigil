import styles from "./SmolArticle.module.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ISmolArticle from "@/interfaces/ISmolArticle";
import Link from '@mui/material/Link';

export const SmolArticle: React.FC<ISmolArticle> = (articleData: ISmolArticle) => {
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
                    <Button size="small"><Link href={"/articles/" + articleData.id}>Learn More</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}