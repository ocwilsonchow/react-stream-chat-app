import React from 'react';

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === 'team' ? (
      <div>Connection error, please retry again.</div>
    ) : null;
  }

  if (loading) {
    return <div>{type === 'team' ? 'Channels' : 'Messages'} loading...</div>;
  }
  return(
    <div>
      <div>{type === 'team' ? 'Channels' : 'Direct Messages'} </div>
      { children }
    </div>
  )
};

export default TeamChannelList;
