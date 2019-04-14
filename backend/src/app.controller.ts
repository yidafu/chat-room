import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {
    // empty contructore
    console.log(appService)
  }

  @Get()
  public getHello(): string {
    return this.appService.getHello()
  }
}
