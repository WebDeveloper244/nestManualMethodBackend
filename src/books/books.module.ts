import { Module } from '@nestjs/common';
import { BookServiceService } from './book-service/book-service.service';
import { BooksControllerController } from './books-controller/books-controller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './booksModel/books.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Books-Collection',schema:BookSchema}])],
  providers: [BookServiceService],
  controllers: [BooksControllerController]
})
export class BooksModule {}
