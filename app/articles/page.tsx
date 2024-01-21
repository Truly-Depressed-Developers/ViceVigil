"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { SmolArticle } from "@/components/SmolArticle/SmolArticle";
import articles from "../../public/articleData/articleData.json";
import ISmolArticle from "@/interfaces/ISmolArticle";
import { Loading } from "@/components/Loading/Loading";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

type IPropertyList = string[];

const Article: React.FC = () => {
  const [article, setArticle] = useState<ISmolArticle>();
  const [propertyList, setPropertyList] = useState<IPropertyList>([]);

  const onlyUnique = (value: string, index: number, array: string[]) => {
    return array.indexOf(value) === index;
  }

  useEffect(() => {
    setTimeout(() => {
      const found = articles.find((el) => { return el.id == 6 });
      setArticle(found);
    }, 100);
  }, [article])

  useEffect(() => {
    let buttons = articles.map((el) => { return el.category }).filter(onlyUnique);
    setPropertyList(buttons);
  }, [])

  return (
    <div id={styles.articles}>
      <div className={styles.titleBlock}>
        <div className={styles.title}>title</div>
        <div className={styles.menu}>menu</div>
      </div>
      <div className={styles.mostWanted}>
        {
          article === undefined ? <Loading /> :
            <Card>
              <CardMedia
                sx={{
                  height: 220, marginTop: 3, borderRadius: 3,
                }}
                className={styles.card}
                image={"/articleImages/" + article.photoID + ".jpg"}
                title="articlePhoto"
              />
              <div className={styles.gradient}></div>
              <div className={styles.mostWantedText}>Selected for You</div>
              <div className={styles.mostWantedTitle}>{article.title}</div>
              <CardActions className={styles.button}>
                <Button size="small"><Link href={"/articles/" + article.id}>Learn More</Link></Button>
              </CardActions>
            </Card>
        }
      </div>
      <div className={styles.articleList}>
        {articles.map((el, i) => {
          return <SmolArticle key={i} id={el.id} title={el.title} photoID={el.photoID} />
        })}
      </div>
    </div>
  );
}

export default Article;