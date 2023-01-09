export const useHandleStars = () => handleStars;

const handleStars = (rating: number, identifier: string | number) => {
  const stars = [];
  for (let index = 1; index < 6; index++) {
    stars.push(
      <input
        type="radio"
        name={`rating-${identifier}`}
        className="mask mask-star-2 bg-orange-400 hover:cursor-default"
        disabled
        checked={index === Math.round(rating)}
      />
    );
  }
  return stars;
};
