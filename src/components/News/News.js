import arrowIcon from '../../icons/arrow.svg';

  return (
    <section className="news">
      {mainNewsElement}

      {newsData.secondaryNews.length > 0 && (
        <div className="secondary-news">
          {newsData.secondaryNews.map((news, index) => (
            <NewsArticle key={index} data={news} />
          ))}
        </div>
      )}

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
        <article className="news-article">
          <a href="#">
            <div className="image-wrapper">
              <img src="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1536x1024.jpg" />
            </div>

            <div className="info-wrapper">
              <span className="article-category">Naujienos</span>
              <h2 className="article-title">Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?</h2>
              <span className="article-date">2022-12-12</span>
            </div>
          </a>
        </article>
      </div>

      <a className="button-title" href="#">Visos naujienos <img src={arrowIcon} alt="arrow" /></a>
    </section>
  )
}

export default News;