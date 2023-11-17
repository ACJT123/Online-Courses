export default function Course({ courses }) {
    const { image, title, instructor, duration, price, discounted_price, level, rating } = courses;

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

    const levels = {
        beginner: 'course-level bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400',
        intermediate: 'course-level bg-blue-100 text-blue-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400',
        expert: 'course-level bg-yellow-100 text-yellow-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400',
        // Add more levels and their corresponding styles here
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

                    </div>
                    <h1 className="text-lg course-price ml-auto">
                        {discounted_price ? (
                            <div className="flex space-x-3">
                                <h1 className="text-xl">{discounted_price}</h1>
                                <del>{price}</del>
                            </div>
                        ) : (
                            <h1>{price}</h1>
                        )}
                    </h1>
                </div>
                {level && <span className={levels[level.toLowerCase()]}>{level}</span>}
            </div>
        </div>
    );
}
