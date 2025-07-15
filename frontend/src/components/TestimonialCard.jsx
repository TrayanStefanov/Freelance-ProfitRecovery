const TestimonialCard = ({ title, image, description }) => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl shadow-primary rounded-xl min-h-64 max-h-64">
      <figure className="p-5 mt-[-35px] min-h-[20vh]">
        <img src={image} alt={title} className="min-h-[15vh] max-h-[15vh]" />
      </figure>
      <div className="card-body items-center text-center px-5 py-3">
        <h2 className="card-title">{title}</h2>
        <p className="break-all hyphens-auto text-xs" >{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
