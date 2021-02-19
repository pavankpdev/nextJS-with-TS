import Link from "next/link";
import styles from "../styles/Home.module.css";

const ArticleList = ({ articles }) => {
  return (
    <>
      <div className={styles.grid}>
        {articles.map(({ id, title, description }) => (
          <Link href={`/article/${id}`}>
            <a className={styles.card}>
              <h3>{title} &rarr;</h3>
              <p>{description}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
