import React, { Component, ReactNode } from 'react'
import io from 'socket.io-client'
import Sendbar from './Sendbar'
import MessageBox from './MessageBox'

export interface Message {
  avatar: string;
  message: string;
  senderId: string;
}

export interface ChatBoxProps {
}

export interface ChatBoxState {
  messageList: Message[];
  currentSender: string;
}

function generateMsgs(): Message[] {
  return Array(15).fill('').map((val, idx): Message => ({
    avatar: 'https://avatars2.githubusercontent.com/u/22773923?s=40&v=4',
    message: 'test message balabala',
    senderId: (Math.random() * 5 | 0).toString(),
  }))
}
export default class ChatBox
  extends Component<ChatBoxProps, ChatBoxState> {
  public state = {
    messageList: generateMsgs(),
    currentSender: '1',
  }

  private socket = io('http://localhost:3001')

  public componentDidMount(): void {
    const { socket } = this
    socket.on('connect', (): void => {
      console.log('Connected')
    })
    socket.on('events', (data: any): void => {
      const { messageList, currentSender } = this.state
      messageList.push({
        avatar: 'https://avatars2.githubusercontent.com/u/22773923?s=40&v=4',
        message: data.message,
        senderId: currentSender,
      })
      this.setState({
        messageList,
      })
    })
    socket.on('exception', (data: any): void => {
      console.log('event', data)
    })
    socket.on('disconnect', (): void => {
      console.log('Disconnected')
    })
  }

  private handleSend = (message: string): void => {
    // request here
    const { messageList, currentSender } = this.state
    this.socket.emit('events', { message })
    messageList.push({
      avatar: 'https://avatars2.githubusercontent.com/u/22773923?s=40&v=4',
      message,
      senderId: currentSender,
    })
    this.setState({ messageList })
  }

  public render(): ReactNode {
    const { messageList, currentSender } = this.state
    return (
      <div>
        <div className="chat-box">
          {messageList.map((({ senderId, ...restProps }, idx): ReactNode => (
            <MessageBox
              key={senderId + idx}
              isSender={senderId === currentSender}
              {...restProps}
            />
          )))}
        </div>
        <Sendbar onSend={this.handleSend} />
      </div>
    )
  }
}
