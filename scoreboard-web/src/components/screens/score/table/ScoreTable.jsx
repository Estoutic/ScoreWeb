const ScoreTable = ({ data }) => {
  return (
    <>
      <h2>First Category</h2>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.score}</p>
        </div>
      ))}
    </>
  );
};

export default ScoreTable;
