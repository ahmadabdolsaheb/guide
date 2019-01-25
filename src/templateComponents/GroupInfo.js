/* eslint-disable no-alert, react/sort-prop-types, no-nested-ternary  */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.object.isRequired,
  social: PropTypes.object,
  chat: PropTypes.object,
  event: PropTypes.object,
  leaders: PropTypes.array,
  photos: PropTypes.object
};

function GroupInfo(props) {
  const {
    location: { country, state, city, neighborhood },
    social,
    chat,
    event,
    leaders
  } = props;

  function fillInfo(text, item) {
    if (checkifempty(item)) {
      return '';
    }
    return (
      <p>
        {text} <a href={item.URL}>{item.name}</a>.
      </p>
    );
  }
  function leadersInfo(leaders) {
    if (checkifempty(leaders)) {
      return '';
    }
    return (
      <p>
        Our group leader{leaders.length > 1 ? 's are ' : ' is '}
        {leaders.map(function(item, i) {
          return (
            <span>
              {i === 0 ? '' : i < leaders.length - 1 ? ', ' : ', and '}
              <a href={item.URL} key={i}>
                {' '}
                {item.name}
              </a>
            </span>
          );
        })}
      </p>
    );
  }

  function checkifempty(first) {
    return !first.name || !first.name;
  }
  return (
    <div>
      {neighborhood ? <h1>{neighborhood + ','}</h1> : ''}
      {city ? <h1>{city + ','}</h1> : ''}
      {state ? <h1>{state + ','}</h1> : ''}
      {country ? <h1>{country}</h1> : ''}
      <hr />
      {social ? fillInfo('Join our ', social) : ''}
      {chat ? fillInfo('Chat with us on ', chat) : ''}
      {event ? fillInfo('Visit our event calendar on ', event) : ''}
      {leaders ? leadersInfo(leaders) : ''}
      <hr />
    </div>
  );
}

GroupInfo.displayName = 'GroupInfo';
GroupInfo.propTypes = propTypes;

export default GroupInfo;
