import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    ),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
