import React from 'react';
import { Link } from 'react-router-dom';
const Async = ({data,onClick,onRollBack,onGoHome}) => {
    return (
        <div>
            <h1>비동기 사가 테스트</h1>
            <button onClick={onClick}>Click!</button>
            <button onClick={onRollBack}>RollBack!</button>
            <button onClick={onGoHome}>Go Home!</button>
            <div>
                {
                    data?.map((ele,index) => {
                        return(
                                <h4>
                                    <Link to={`/${ele.id}`}>{ele.title}</Link>
                                </h4>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Async;