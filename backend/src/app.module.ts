import { Module , NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimestampMiddleware } from './timestamp/timestamp.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    // aplicando el middleware tan solo a la ruta random-number con el metodo POST
      .apply(TimestampMiddleware).forRoutes('*')
  }
}