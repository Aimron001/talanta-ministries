import { Link } from 'react-router-dom'
export default function Ministry(props){
    return(
        <Link to={props.to}>
            <div className="ministry-link">
                <img src={props.photo} />
                <h3>{props.ministryName}</h3>
            </div>
        </Link>
    )
}