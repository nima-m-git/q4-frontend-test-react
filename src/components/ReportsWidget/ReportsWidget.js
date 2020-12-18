import "./ReportsWidget.scss";

const ReportsWidget = ({ report: { cover, title, documents } }) => (
  <article className="reports_item">
    <a href={cover} target="_blank" rel="noreferrer">
      <img className="reports_cover" src={cover} alt={title} />
    </a>
    <footer className="reports_docs">
      {documents.map(({ url, title, file_size, file_type }, i) => (
        <h3 className="reports_title" key={i}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
          <span className="file_info">
            {" "}
            ({file_size} {file_type})
          </span>
        </h3>
      ))}
    </footer>
  </article>
);

export { ReportsWidget };
