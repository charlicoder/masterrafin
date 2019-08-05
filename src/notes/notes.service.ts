import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Note } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note-dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

    // fetch all notes
    async getAllNotes(): Promise<Note[]> {
        const notes = await this.noteModel.find().exec();
        return notes;
    }

    // create a new note
    async create(createNoteDto: CreateNoteDto): Promise<Note> {
        const newNote = new this.noteModel(createNoteDto);
        return await newNote.save();
    }

}
