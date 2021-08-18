const Jumbotron = (props) => {
    return(
        <div class="p-5 bg-light">
            <h1 class="mb-3">{props.title}</h1>
            <h4 class="mb-3">{props.description}</h4>
            <a class="btn btn-primary" href={props.buttonURL} role="button">{props.buttonLabel}</a>
        </div>
    )
}
export default Jumbotron;