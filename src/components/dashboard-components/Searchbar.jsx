const MySearch = (props) => {
  let input; // local variable for storing input

  // click handler
  const handleClick = () => {

     // using the "onSearch" function inside the "Toolkit" search props from ticketlist.
    props.onSearch(input.value);

  };

  return (
    <div>
      <input
        className="form-control"
        style={ { backgroundColor: 'whitesmoke' } }
        ref={ n => input = n }
        type="text"
      />
      <button className="btn btn-success" onClick={ handleClick }>Search Ticket</button>
    </div>
  );
};

export default MySearch;