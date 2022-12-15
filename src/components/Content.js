const Content = (props) => {
  console.log(props.title);
  return (
    <div>
      <div className="lorem">
        <h1>{props.title}</h1> <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Content;
