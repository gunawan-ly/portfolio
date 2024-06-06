export default function Jumbotron(props) {
  return (
    <>
      <section>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <img
              src="https://source.unsplash.com/random/100x100"
              alt="No Image Link"
              className="img-thumbnail rounded-circle mx-auto d-block m-2"
            />

            <h1 class="display-4">Awanophile</h1>
            <p class="lead">{props.title}</p>
            <h1 className="display-4">About Me</h1>
            <p className="lead">{props.homeSect}</p>
          </div>
        </div>
      </section>
    </>
  );
}
