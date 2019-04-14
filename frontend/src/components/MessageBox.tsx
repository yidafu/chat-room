import React, { Component, ReactNode } from 'react'

export interface MessageBoxProps {
  readonly isSender?: boolean;
  readonly avatar: string;
  readonly message: string;
}

export interface MessageBoxState {
}

export default class MessageBox extends Component<MessageBoxProps, MessageBoxState> {
  private static defaultProps = {
    isSender: false,
  }

  public render(): ReactNode {
    const { isSender, avatar, message } = this.props
    if (isSender) {
      return (
        <div className="message-box" style={{ textAlign: 'right' }}>
          <div className="message-col">
            <p className="message-content">
              {message}
            </p>
          </div>
          <div className="message-col">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      )
    }
    return (
      <div className="message-box">
        <div className="message-col">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="message-col">
          <p className="message-content">
            {message}
          </p>
        </div>
      </div>
    )
  }
}
