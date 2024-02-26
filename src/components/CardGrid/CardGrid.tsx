import Card from '../Card/Card';

const CardGrid = () => {
  return (
    <div className="w-full pl-12 pt-5 flex gap-5 flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return <Card />;
      })}
    </div>
  );
};

export default CardGrid;
