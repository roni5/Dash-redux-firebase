import React from 'react';

export default function Mailbox({ unreadMessages }) {
  //  const { unreadMessages } = props;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

export const messages = ['React', 'Re: React', 'Re:Re: React'];
