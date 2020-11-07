import React, { useRef } from "react";
import PropTypes from "prop-types";

const getTogglePercentage = (current, max) => (85 * current) / max;
const getBarPercentage = (current, max) => (100 * current) / max;
const getLabelRercentage = (current, max) => (58 * current) / max;
const getValue = (percentage, max) => (max / 100) * percentage;

const getLeft = percentage => `calc(${percentage}% - 2px)`;

const Slider = ({ initialValue, maxValue, onChange}) => {
  const scaleRef = useRef();
  const barRef = useRef();
  const toggleRef = useRef();
  const labelRef = useRef();
  const valueRef = useRef();

  const diff = React.useRef();

  const initialPercentage = getTogglePercentage(initialValue, maxValue);

  const handleMouseMove = evt => {
    let newX = evt.clientX - diff.current - scaleRef.current.getBoundingClientRect().left;

    const end = scaleRef.current.offsetWidth - toggleRef.current.offsetWidth;

    const start = 0;
    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newTogglePercentage = getTogglePercentage(newX, end);
    const newBarPercentage = getBarPercentage(newX, end);
    const newLabelPercentage = getLabelRercentage(newX, end);
    const newValue = getValue(newBarPercentage, maxValue);
    valueRef.current.value = newValue;
    onChange(newValue);
    toggleRef.current.style.left = getLeft(newTogglePercentage);
    barRef.current.style.width = getLeft(newBarPercentage);
    labelRef.current.style.left = getLeft(newLabelPercentage);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = evt => {
    diff.current = evt.clientX - toggleRef.current.getBoundingClientRect().left;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="filters-group">
      <h3 className="filters-group-title">Price</h3>
      <div className="filter-range-container">
        <div className="filter-range">
          <div ref={scaleRef} className="scale">
            <div
              ref={barRef}
              className="bar"
              style={{ width: `100%` }}
            />
            {/* 0 - 100% */}
          </div>
          {/* label range = 0% - 58% */}
          <label
            ref={labelRef}
            className="filter-max-price"
            style={{ left: `58%` }}
          >
            $
            <input
              ref={valueRef}
              type="number"
              min="0"
              max={maxValue}
              readOnly="readonly"
              name="filter-max-price"
              defaultValue={initialValue}
            />
          </label>
          {/* toggle range =  5% - 85% */}
          <div
            ref={toggleRef}
            onMouseDown={handleMouseDown}
            className="toggle"
            tabIndex="0"
            style={{ left: getLeft(initialPercentage) }}
          />
        </div>
      </div>
    </section>
  );
};

Slider.propTypes = {
  initialValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Slider;
