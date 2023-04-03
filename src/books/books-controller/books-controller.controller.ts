import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookServiceService } from '../book-service/book-service.service';

@Controller('books-controller')
export class BooksControllerController {
    constructor(private readonly bookService: BookServiceService) {

    }
    @Post()
    async addProduct(
        @Body('title') bookTitle: string,
        @Body('author') bookAuthor: string,
        @Body('price') bookPrice: number,
        @Body('category') bookCategory: string,
    ) {
        const docTocreate = await this.bookService.createBook(
            bookTitle,
            bookAuthor,
            bookPrice,
            bookCategory
        )
        return docTocreate
    }

    @Get()
    async getAllDocumnet() {
        const docToFindAllDocument = await this.bookService.findAll();
        return docToFindAllDocument
    }

    @Get(':Id')
    async getDocument(
        @Param('Id') Id: string
    ) {
        const getDocumentById = await this.bookService.findById(Id);
        return getDocumentById
    }

    @Post('/update')
    async updateDocument(
        @Param('Id') Id: any,
        @Body('payLoad') payLoad: any,
        
    ) {
        console.log(`Received Id: ${Id}`);
    console.log(`Received payLoad: ${JSON.stringify(payLoad)}`);
        const getDocumentById = await this.bookService.updateDocumentById(Id,payLoad);
        return getDocumentById
    } 

    // @Post('update') 
    // async updateDocument(
    //     @Body() body: any
    // ) {
    //     const { Id, payLoad } = body;
    //     Id;
    //     payLoad
    //     const getDocumentById = await this.bookService.updateDocumentById(Id, payLoad);
    //     return getDocumentById
    // }

    @Delete('changeStatus/:Id')
    async changeStatus(
        @Param('Id') Id: string
    ) {
        const changeStatusById = await this.bookService.updateStatusById(Id);
        return changeStatusById
    }

    @Delete(':Id')
    async deleteDocument(
        @Param('Id') Id: string
    ) {
        const deleteDocumentById = await this.bookService.deleteById(Id);
        return deleteDocumentById
    }
}
