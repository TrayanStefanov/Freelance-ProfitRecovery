import { Link } from "react-router-dom";

const ArticleCard = ({ id, title, subtitle, image }) => {
  return (
    <div className="card w-full lg:max-w-md bg-[linear-gradient(theme(colors.secondary),theme(colors.white))] shadow-xl min-h-96 max-h-96 mb-4 lg:m-8 text-primary">
      <figure className="p-5 min-h-[20vh]">
        <img src={image} alt={title} className="object-cover min-w-[100%] max-h-[20vh]"/>
      </figure>
      <div className="card-body items-center text-center pt-0">
        <div className="hidden">{id}</div>
        <h2 className="card-title underline underline-offset-8"><Link to={`/articles/${id}`} className="hover:text-accent px-4 py-1 rounded">{title}</Link></h2>
        <h3 className="break-all hyphens-auto text-base">{subtitle}</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
