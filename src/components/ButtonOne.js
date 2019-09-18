import React from 'react';
import stylesWrapper from './HOC/stylesWrapper';
/**
 * setState() that accepts a function rather than an object
 * @param {styles} props
 */
const ButtonOne = props => {
    let check = null;
    return (
      <div className="center">
        <button style={props.styles.disable}>I am ButtonOne</button>
            <label>
                <input type='checkbox' value="check" onChange={( e ) => this.setState(
                    { check: !check.value } )}
                />
                 Checkbox
                 </label>
        </div>
    );

        };

        export default stylesWrapper(ButtonOne);
