const Button = ( props ) => {
  return (
    <button className="btn btn-circle" onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Button;
