import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className='title active'
          // Reminder: NOT onClick={onTitleClick(index)}
          // onClick={onTitleClick(index)} would call this as soon as our list of items rendered
          onClick={() => onTitleClick(index)}
        >
          <i className='dropdown icon'></i>
            {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className='ui styled accordion'>
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
}

export default Accordion;
