import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = ({ channel, type}) => {
  const { channel: activeChannel, client } = useChatContext()

  const ChannelPreview = () => (
    <div>
      # {channel?.data?.name || channel?.data?.id}
    </div>
  )

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(({ user}) => user.id !== client.userID)

    return (
      <div>
       <Avatar
         image={members[0]?.Avatar.user?.image}
         name={members[0]?.Avatar.user?.fullName}
         size={24}
       />
       <div>{members[0]?.Avatar.user?.fullName}</div>
      </div>
    )
  }

  // 44:40
  return (
    <div onClick={() => {
      console.log(channel)
    }}>
        {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview
