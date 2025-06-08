import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../.env'),
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest-auth'),
    AuthModule,
  ],
})
export class AppModule {}
