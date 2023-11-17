export default function Course({ courses }) {
    const { image, title, instructor, duration, price, rating } = courses;
  
    const ratingStars = () => {
      if (rating < 4) {
        return "⭐";
      } else if (rating >= 4 && rating < 4.5) {
        return "⭐⭐";
      } else if (rating >= 4.5 && rating < 5) {
        return "⭐⭐⭐";
      } else {
        return "⭐⭐⭐⭐⭐";
      }
    };
  
    return (
      <div className="course-card bg-red-0 flex flex-col transition-transform transform hover:-translate-y-1 hover:cursor-pointer">
        <img className="course-image h-40" src={image} alt={title} />
        <div className="course-info px-1">
          <h1 className="course-title font-bold text-lg text-justify">{title}</h1>
          <h1 className="course-instructor text-sm">{instructor}</h1>
          <div className="flex flex-row items-center">
            <div className="flex space-x-5">
              <h1 className="course-rating">{rating}{ratingStars()}</h1>
              <span className="course-level bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">Beginner</span>
            </div>
            <h1 className="course-price ml-auto">{price}</h1>
          </div>
        </div>
      </div>
    );
  }
  