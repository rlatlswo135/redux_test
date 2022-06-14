import React, { useMemo } from 'react';

const Number = ({number,onIncrese,onDecrese}) => {
    // text만 바뀌었는데 어쨋든 number도 렌더링된단말이지 이때 useMemo useCallback을 쓰는거 아닐까?
    return (
        <div>
            <div>{number.num}</div>
            <button onClick={onIncrese}>+</button>
            <button onClick={onDecrese}>-</button>
        </div>
    );
};

export default Number;