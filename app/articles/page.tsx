import React from "react";
import styles from "./page.module.scss";
import { Article } from "@/components/Article/Article";

const articles = [
  { id: 1, title: "Title", preview: "This is some simple text, that has to be cropped out so it's not the longest preview article in the world", photoID: "2137" },
  { id: 2, title: "Title", preview: "This is some simple text, that has to be cropped out so it's not the longest preview article in the world", photoID: "69" },
  { id: 3, title: "Title", preview: "This is some simple text, that has to be cropped out so it's not the longest preview article in the world.", photoID: "69" },
]

const Page: React.FC = () => {
  return (
    <div id={styles.articles}>
      {articles.map((el, i) => {
        return <Article key={i} id={el.id} title={el.title} preview={el.preview} photoID={el.photoID} />
      })}
    </div>
  );
}

export default Page;