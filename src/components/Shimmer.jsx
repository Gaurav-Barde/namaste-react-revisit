const arr = [1, 1, 1, 1, 1, 1, , 1, 1, 1].fill("");

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {arr.map((item, index) => (
        <div key={index} className="shimmer-block">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
