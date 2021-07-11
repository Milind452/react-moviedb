import React from "react";

//Helpers
import { calcTime, convertMoney } from "../../helpers";
import MovieInfo from "../MovieInfo/MovieInfo";
import { Content } from "../MovieInfo/MovieInfo.styles";

//Styles
import { Wrapper } from "../MovieInfoBar/MovieInfoBar.styles";
const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;
