var Search = (props) => (
  <h1 className="Recast col-4"><span className="glyphicon glyphicon-expand"></span> Recast</h1>
  <div className="search-bar form-inline col-7">
    <input onKeyUp={_.debounce(props.func.bind(props.parent), 500)} className="form-control" type="text" />
    <button onClick={props.func.bind(props.parent)} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
