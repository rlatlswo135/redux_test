import React from 'react';

const Text = ({text,onSubmit}) => {
    return (
        <div>
            <div>{text.text}</div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                // e.target.inputName.value
                onSubmit(e.target.text.value)
                e.target.text.value =""
            }}>
                <input type="text" placeholder='redux test' name="text"/>
                <input type="submit" value="변경" />
            </form>
      </div>
    );
};

export default Text;