const ExpertCourse = ({ name, value }) => {
  return (
    <div>
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "bold" }}
      >
        <div className="">{name}</div>
        <div className="">{value}%</div>
      </div>
      <hr style={{ width: `${value}%`, display: "inline-block" }} />
      <hr
        style={{
          width: `${100 - value}%`,
          display: "inline-block",
          backgroundColor: "#cccccc",
        }}
      />
    </div>
  );
};
export default ExpertCourse;
