const RatingStars = (rating: number, maxStars: number = 5) => {
  const clampedRating = Math.min(rating, maxStars);

  const fullStars = Math.floor(clampedRating); // Number of full stars
  const hasHalfStar = clampedRating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`full-${index}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            className="w-5 h-5"
            aria-label="Full Star"
          >
            <path d="M12 17.3L7.8 19.6c-.4.2-.9.2-1.3 0s-.6-.6-.5-1l.9-5.2-3.8-3.7c-.3-.3-.4-.8-.2-1.2s.5-.6 1-.7l5.2-.7 2.2-4.6c.3-.6 1-.9 1.6-.6.2.1.4.3.5.5L15.4 8l5.2.7c.4.1.8.4 1 .7.1.4 0 .9-.3 1.2l-3.8 3.7.9 5.2c.1.4 0 .8-.5 1s-.9.2-1.3 0L12 17.3z"></path>
          </svg>
        ))}
      {hasHalfStar && (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          className="w-5 h-5"
          aria-label="Half Star"
        >
          <path d="M12 17.3L7.8 19.6c-.4.2-.9.2-1.3 0s-.6-.6-.5-1l.9-5.2-3.8-3.7c-.3-.3-.4-.8-.2-1.2s.5-.6 1-.7l5.2-.7 2.2-4.6c.3-.6 1-.9 1.6-.6.2.1.4.3.5.5L15.4 8l5.2.7c.4.1.8.4 1 .7.1.4 0 .9-.3 1.2l-3.8 3.7.9 5.2c.1.4 0 .8-.5 1s-.9.2-1.3 0L12 17.3z"></path>
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`empty-${index}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#d1d5db"
            className="w-5 h-5"
            aria-label="Empty Star"
          >
            <path d="M12 17.3L7.8 19.6c-.4.2-.9.2-1.3 0s-.6-.6-.5-1l.9-5.2-3.8-3.7c-.3-.3-.4-.8-.2-1.2s.5-.6 1-.7l5.2-.7 2.2-4.6c.3-.6 1-.9 1.6-.6.2.1.4.3.5.5L15.4 8l5.2.7c.4.1.8.4 1 .7.1.4 0 .9-.3 1.2l-3.8 3.7.9 5.2c.1.4 0 .8-.5 1s-.9.2-1.3 0L12 17.3z"></path>
          </svg>
        ))}
    </div>
  );
};

export default RatingStars;
