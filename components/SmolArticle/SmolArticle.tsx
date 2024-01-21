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
            <Card sx={{ width: 390, borderRadius: 3, display: "flex", flexDirection: "row", backgroundColor: "#1D1D1D" }}>
                <CardMedia
                    sx={{ height: 120, minWidth: 120 }}
                    image={"/articleImages/" + articleData.photoID + ".jpg"}
                    title="articlePhoto"
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {articleData.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link href={"/articles/" + articleData.id}>Learn More</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}