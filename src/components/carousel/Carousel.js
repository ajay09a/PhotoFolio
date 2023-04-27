export const Carousel = ({ onNext, onPrev, onCancel, url, title }) => {
  return (
    <div>
      <button onClick={onCancel}>x</button>
      <button onClick={onPrev}>{"<"}</button>
      <img src={url} alt={title} />
      <button onClick={onNext}>{">"}</button>
    </div>
  );
};
