/* eslint-disable no-alert, react/sort-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  socialName: PropTypes.string.isRequired,
  socialURL: PropTypes.string.isRequired,
  chatName: PropTypes.string.isRequired,
  chatURL: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventURL: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  leaderURL: PropTypes.string.isRequired
};

function GroupInfo(props) {
  const {
    country,
    state,
    city,
    neighborhood,
    socialName,
    socialURL,
    chatName,
    chatURL,
    eventName,
    eventURL,
    leaderName,
    leaderURL
  } = props;

  console.log('country' + country);

  function social(socialURL, socialName) {
    return (
      <p>
        Join our<a href={socialURL}> {socialName} group</a>
      </p>
    );
  }

  function chat(chatURL, chatName) {
    return (
      <p>
        Chat with us on <a href={chatURL}> {chatName} </a>
      </p>
    );
  }

  function leader(leaderURL, leadertName) {
    return (
      <p>
        Our Group leader is <a href={leaderURL}>{leadertName}</a>
      </p>
    );
  }

  function eventDiv(eventURL, eventName) {
    return (
      <p>
        Visit our event calendar on <a href={eventURL}>{eventName}</a>
      </p>
    );
  }

  return (
    <div>
      <h1>{neighborhood !== 'undefined' ? neighborhood + ',' : ''}</h1>
      <h1>{city !== 'undefined' ? city + ',' : ''}</h1>
      <h1>{state !== 'undefined' ? state + ',' : ''}</h1>
      <h1>{country !== 'undefined' ? country : ''}</h1>
      <hr />
      {socialURL !== 'undefined' || socialName !== 'undefined'
        ? social(socialURL, socialName)
        : ''}

      {chatURL !== 'undefined' || chatName !== 'undefined'
        ? chat(chatURL, chatName)
        : ''}

      {leaderURL !== 'undefined' || leaderName !== 'undefined'
        ? leader(chatURL, chatName)
        : ''}

      {eventURL !== 'undefined' || eventName !== 'undefined'
        ? eventDiv(chatURL, chatName)
        : ''}
      <hr />
    </div>
  );
}

GroupInfo.displayName = 'GroupInfo';
GroupInfo.propTypes = propTypes;

export default GroupInfo;
