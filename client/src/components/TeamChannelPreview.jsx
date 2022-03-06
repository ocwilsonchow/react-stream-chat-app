import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = ({ channel, type}) => {
  const { channel: activeChannel, client } = useChatContext()
  const ChannelPreview = () => (
    <div>
      # {channel?.data?.name || channel?.data?.id}
    </div>
  )

  return (
    <div>

    </div>
  )
}

export default TeamChannelPreview
