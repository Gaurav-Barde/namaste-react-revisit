const arr = [1, 1, 1, 1, 1, 1, , 1, 1, 1].fill("");

console.log(arr);

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
