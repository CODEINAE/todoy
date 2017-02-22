import React from 'react';

export default () => {
  return (
    <div className="ui huge fluid action input">
      <input type="text" placeholder="I want to..." />
      <button className="ui yellow icon button">
        Today
      </button>
      <button className="ui teal icon button">
        Later
      </button>
    </div>
  );
};
