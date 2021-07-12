import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Styles
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie.thumb" />
            </Link>
        ) : (
            <Image src={image} alt="movie.thumb" />
        )}
    </div>
);

Thumbnail.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
};

export default Thumbnail;
