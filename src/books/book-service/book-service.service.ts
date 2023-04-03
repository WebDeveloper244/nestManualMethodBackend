import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { bookInterface } from '../booksModel/books.model';

@Injectable()
export class BookServiceService {
    constructor(@InjectModel('Books-Collection') private readonly bookModel: Model<bookInterface>) { }

    async createBook(title: string, author: string, price: number, category: string) {
        try {
            const docTocreate = new this.bookModel({
                title,
                author,
                price,
                category,
            })

            const docToSave = await docTocreate.save();
            return {
                result: docToSave,
                body: true,
                message: 'Data Save Successfully'
            }

        } catch (error) {
            return {
                result: null,
                body: false,
                message: error.message
            }
        }
    }

    async findAll() {
        try {
            const docToFindAllDocument = await this.bookModel.find();
            return {
                result: docToFindAllDocument,
                body: true,
                message: 'find All Document'
            }

        } catch (error) {
            return {
                result: null,
                body: false,
                message: error.message
            }
        }
    }
    async findById(Id: string) {
        try {
            const docToFindDocumentById = await this.bookModel.findById(Id);
            return {
                result: docToFindDocumentById,
                body: true,
                message: 'find Document'
            }

        } catch (error) {
            return {
                result: null,
                body: false,
                message: error.message
            }
        }
    }

    async updateStatusById(Id: string) {
        try {
            const docToChangeStatus = await this.bookModel.findByIdAndUpdate(
                { _id: Id },
                { status: 1 },
                { new: true }
            )
            return {
                result: docToChangeStatus,
                body: true,
                message: "document Updated"
            }

        } catch (error) {
            return {
                result: null,
                body: false,
                message: error
            }
        }
    }

    async updateDocumentById(Id: any, payLoad: any) {
        try {
            console.log(Id);
            console.log(payLoad);
            const docToUpdateDocument = await this.bookModel.findByIdAndUpdate(
                { _id: Id },
                payLoad,
                { new: true }
            )
            if (docToUpdateDocument) {
                
            return {
                result: docToUpdateDocument,
                body: true,
                message: "Updated document Good"
            }
        }

        } catch (error) {
            console.log(error);
            return {
                result: null,
                body: false,
                message: error
            }
        }
    }

    // async updateDocumentById(Id: string, payLoad: any) {

    //     if (!Id || typeof Id !== 'string') {
    //         throw new Error('Invalid ID');
    //       }

    //       if (!payLoad || typeof payLoad !== 'object' || Object.keys(payLoad).length === 0) {
    //         throw new Error('Invalid payload');
    //       }

    //     const updatedDocument = await this.bookModel.findOneAndUpdate(
    //       { _id: Id },
    //       payLoad,
    //       { new: true }
    //     );

    //     if (updatedDocument) {
    //       return {
    //         result: updatedDocument.toObject(),
    //         body: true,
    //         message: 'Updated document successfully'
    //       };
    //     } else {
    //       return {
    //         result: null,
    //         body: false,
    //         message: 'Document not found'
    //       };
    //     }
    //   }

    async deleteById(Id: string) {
        try {
            const docTodeleteDocumentById = await this.bookModel.findByIdAndDelete(Id);
            return {
                result: docTodeleteDocumentById,
                body: true,
                message: 'Delete Document'
            }

        } catch (error) {
            return {
                result: null,
                body: false,
                message: error.message
            }
        }
    }
}


