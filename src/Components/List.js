
const List = function (props) {

  const list = props.data.map((item, i) => {
    return <li key={item.id}>{item.text}</li>;
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default List;