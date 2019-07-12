import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class AppService {

  @Get()
  getHello(): string {
    return 'Hello World! =)';
  }

  @Get('/welcome')
  getWelcome(): string {
    return 'Wolcome to my local API! =)';
  }
}
