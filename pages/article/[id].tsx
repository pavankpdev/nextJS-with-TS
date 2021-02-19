import Meta from "../../Components/MetaTags.component";

import Styles from "../../styles/article.module.scss";

const IndividualArticle = ({ articles }) => {
  return (
    <div className={Styles.articlePost}>
      <div>
        <Meta title={articles.title} description={articles.description} />
        <img src={articles.image} alt={articles.title} />
        <h1>{articles.title}</h1>
        <p>{articles.description}</p>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`https://api.jsonbin.io/b/602f68bf7c58305d3956f26f`);
  const allArticles = await res.json();
  const articles = allArticles.filter(
    (article) => article.id === context.params.id
  )[0];
  if (!articles) {
    return {
      notFound: true,
    };
  }
  return { props: { articles } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.jsonbin.io/b/602f68bf7c58305d3956f26f`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default IndividualArticle;
