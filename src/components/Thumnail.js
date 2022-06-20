import "./Thumnail.css";

const Thumnail = (props) => {
    const { id, poster_path, onSelectMovieClick, title, release_date, vote_average } = props

    return (
        <div key={id} className="clickable" onClick={() => {onSelectMovieClick(id,poster_path,title,vote_average*20)}}>
            <div className="poster">
                <img src={"https://image.tmdb.org/t/p/original/" + poster_path}
                    alt={"poster :" + title} />
            </div>
            <div className="detail">
                <h2>{title}</h2>
                <div className="double-detail">
                    <h3>Release date :&nbsp;</h3>
                    <p>{release_date}</p>
                </div>
                <div className="double-detail">
                    <h4>Price :&nbsp;</h4>
                    <p>{vote_average * 20 + " Baht"} </p>
                </div>
            </div>
        </div>
    );
}

export default Thumnail;