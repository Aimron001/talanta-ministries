export default function Hero(props) {
    return (
        <div
            className="hero"
            style={{ backgroundImage: `url(${props.bg})` }} // Set the background image
        >
            <h1 id="hero-title">{props.title}</h1>
        </div>
    )
}