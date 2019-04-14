import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Client, Server } from 'socket.io'

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  wsClients = new Map()

  @SubscribeMessage('events')
  findAll(client: Client, data: any): void {
    if (!this.wsClients.get(client.id)) {
      this.wsClients.set(client.id, client)
    }

    for (const c of this.wsClients.values()) {
      if (client.id !== c.id) {
        c.emit('events', { id: c.id, ...data })
      }
    }
  }
}
