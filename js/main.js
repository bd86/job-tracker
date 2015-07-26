//React Version
var TrackerBox = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <div>
        <h1>Tracker</h1>
        <TrackerBar data={this.state.data} />
        <TrackerList data={this.state.data} />
        <TrackerForm />
      </div>
    );
  }
});

var TrackerList = React.createClass({
  render: function () {
    var JobNodes = this.props.data.map(function (job) {
      return (
        <Job author={job.author} time={job.time}>
          {job.text}
        </Job>
      );
    });
    return (
      <div>
        {JobNodes}
      </div>
    );
  }
});

var TrackerBar = React.createClass({
  render: function () {
    var timer = 0;
    this.props.data.map(function (hours) {
      return timer += parseInt(hours.time);
    });
    return (
      <div className="progress">
        <div className="progress-bar" style={{width:timer}}>
          <span>{timer}% Complete</span>
        </div>
      </div>
    );
  }
});

var Job = React.createClass({
  render: function () {
    return (
      <div>
        <h2>{this.props.author}</h2>
        <p>{this.props.time}</p>
        {this.props.children}
      </div>
    );
  }
});

var TrackerForm = React.createClass({
  render: function () {
    return (
      <div>
        Tracker Form
      </div>
    );
  }
});

React.render(
  <TrackerBox url="jobs.json" />,
  document.getElementById('content')
);
