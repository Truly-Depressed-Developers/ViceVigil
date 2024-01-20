import React from "react";
import styles from "./page.module.scss";
import { SmolArticle } from "@/components/SmolArticle/SmolArticle";
import articles from "../../public/articleData/articleData.json";

const Article: React.FC = () => {
  return (
    <div id={styles.articles}>
      {articles.map((el, i) => {
        return <SmolArticle key={i} id={el.id} title={el.title} preview={el.preview} photoID={el.photoID} />
      })}
    </div>
  );
}

export default Article;