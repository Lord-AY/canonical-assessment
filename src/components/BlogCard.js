import React from "react";

export default function BlogCard({ blog }) {
  const { link, featured_media, date, title, _embedded, tags } = blog;

  const { author } = _embedded;

  const tagsList = [].concat.apply([], _embedded["wp:term"]);
  const tagName = tagsList.find((tag) => tag.id === tags[0]).name;

  return (
    <React.Fragment>
      <div className="col-4 p-card card-post top-purple">
        <header className="p-card__header u-no-border-bottom">
          <h3 className="p-muted-heading u-no-margin--bottom">{tagName}</h3>
        </header>
        <hr />

        <div className="p-card__content">
          <div>
            <a href={link}>
              <img
                alt=""
                height="185"
                loading="lazy"
                src={featured_media}
                srcSet={featured_media}
                width="330"
                className="p-card__image"
              />
            </a>
          </div>

          <h3 className="p-heading--4">
            <a href={link}>{title.rendered}</a>
          </h3>

          <p>
            <em>
              by <a href={author[0].link}>{author[0].name}</a> on&nbsp;
              {new Date(date).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </em>
          </p>
        </div>
        <br />
        <div>
          <hr />
          <p>Article</p>
        </div>
      </div>
    </React.Fragment>
  );
}
