const Application = props =>
    <>
    <Nav/>
    <Jumbotron/>
    <div className="container pt-4">
      <Mountains mountains={props.mountains}/>
      <hr/>
      <Footer/>
    </div>
    </>;

const Nav = () =>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#home">Home
              <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>;


const Jumbotron = () =>
    <div className="jumbotron jumbotron-fluid bg-info text-white">
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">World's Greatest Mountains</h1>
        <p className="lead">By no means an exhaustive list</p>
        <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
          <button type="button" className="btn btn-primary btn-lg">View Now</button>
        </div>
      </div>
    </div>;

const Mountains = props =>
    <>
    <h1 id="mountains" className="display-4 my-4 text-center text-muted">Mountains</h1>
    <div className="row">
    {/* super important piece of code here to loop through all the cards for as long as the list of mountains exists */}
      {
        props.mountains.map((mountain, index) => <Card key={index} mountain={mountain}/>)
      }
      </div>
      </>;

const Footer = () =>
 <div className="row py-3">
  <div className="col-md-7">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
  <div className="col-md text-md-right">
    <small>&copy; Wow Marshall, what are you, six?</small>
  </div>
</div>;


const Card = props =>
 <div className="col-md-6 col-lg-3">
  <div className="card mb-3">
    <img className="card-img-top" src={`img/${props.mountain.image}.jpg`}/>
    <div className="card-body">
      <h4 className="card-title text-center">{props.mountain.name}</h4>
      <p className="card-text">
        {props.mountain.description}
      </p>
    </div>
  </div>
</div>;


const mountains = [
  {
    name: "Mount Rainier",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '1'
  },
  {
    name: "Mount Shasta",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '2'
  },
  {
    name: "Mount Whitney",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '3'
  },
  {
    name: "Meru Peak",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '4'
  },
  {
    name: "Devil's Tower",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '5'
  },
  {
    name: "Grand Tetons",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '6'
  },
  {
    name: "Denali",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '7'
  },
  {
    name: "Bugaboos",
    description: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '8'
  }
];

ReactDOM.render(
    <Application mountains={mountains}/>,
    document.getElementById('root')
);