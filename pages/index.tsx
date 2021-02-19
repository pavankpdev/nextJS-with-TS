import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// Components
import Meta from "../Components/MetaTags.component";
import Articles from "../Components/ArticleList.components";

export default function Home({ articles = [] }) {
  console.log(articles);

  return (
    <div className={styles.container}>
      <Meta title="Home" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Next Articles</a>
        </h1>

        <p className={styles.description}>Get the latest blogs in web dev</p>

        <Articles articles={articles} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.jsonbin.io/b/602f68bf7c58305d3956f26f`);
  const articles = await res.json();
  console.log({ articles });

  return {
    props: { articles },
  };
};
