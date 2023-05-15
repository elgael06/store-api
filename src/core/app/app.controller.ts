import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}
  @Get('health')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
