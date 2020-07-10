import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Checkbox } from 'antd';

const ThemeCheckbox = ({ onChange, themes, value }) => {
    const [select, setSelect] = useState(value);
    
    useEffect(() => {
        onChange(select);
    }, []);

    useEffect(() => {
        setSelect(value);
    }, [value]);

    const onSelect = (index) => () => onChange(index);

    return (
        <div>
            {themes.map((theme, index) => (
                <Card.Grid 
                    onClick={onSelect(index)} 
                    key={index.toString()}
                    style={{
                        textAlign: 'right',
                        padding: '1px 3px',
                        height: 50,
                        width: '25%',
                        cursor: 'pointer',
                        ...theme.cardStyles
                    }}
                    hoverable={false}
                >
                  <Checkbox checked={index === select}/>
                </Card.Grid>
            ))}
        </div>
    );
};

ThemeCheckbox.propTypes = {
    onChange: PropTypes.func
};

export default ThemeCheckbox;