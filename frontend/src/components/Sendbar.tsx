import React, { Component, ReactNode } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Icon } from 'react-icons-kit'
import { send } from 'react-icons-kit/fa/send'

export interface SendbarProps {
  onSend: (message: string) => void;
}

export interface SendbarState {
}

export default class Sendbar extends Component<SendbarProps, SendbarState> {
  private messageResf = React.createRef<any>();

  private handleSendMessage = (): void => {
    const { onSend } = this.props
    onSend(this.messageResf.current.value)
    this.messageResf.current.value = ''
  }

  public render(): ReactNode {
    return (
      <div className="send-bar">
        <InputGroup>
          <FormControl
            placeholder="信息"
            ref={this.messageResf}
          />
          <InputGroup.Append>
            <Button onClick={this.handleSendMessage} variant="primary" style={{ width: 50 }}>
              <Icon icon={send} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
