"use client";

import * as React from "react";
import articles from "@/public/articleData/articleData.json";
import styles from "./page.module.scss";
import IArticle from "@/interfaces/IArticle";
import CardMedia from '@mui/material/CardMedia';
import { Loading } from "@/components/Loading/Loading";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';

type IRouteParams = {
    article: number
}

const AverageArticle: React.FC<{ params: IRouteParams }> = (props) => {
    const [article, setArticle] = React.useState<IArticle>();

    React.useEffect(() => {
        const foundArticle = articles.find((el) => { return el.id == props.params.article });
        setArticle(foundArticle);
    }, [props.params.article]);

    return (
        article === undefined ? <Loading /> :
            <div id={styles.averageArticle}>
                <div className={styles.button}>
                    <Button variant="text"><Link href="/articles"><ArrowBackIcon /></Link></Button>
                </div>
                <CardMedia
                    className={styles.media}
                    sx={{ height: 140 }}
                    image={"/articleImages/" + article.photoID + ".jpg"}
                    title="articlePhoto"
                />
                <div id={styles.averageArticleContentMain}>
                    <iframe src={article.link} width="100%" height="705px" allowFullScreen></iframe>
                </div>
            </div>
    )
}

export default AverageArticle;