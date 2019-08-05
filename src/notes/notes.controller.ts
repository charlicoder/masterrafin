import { Controller, Post, Get } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note-dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    async addNote(createNoteDto: CreateNoteDto) {
        const newNote = this.notesService.create(createNoteDto);
        return newNote;
    }

    @Get()
    async getAllNotes() {
        const notes = this.notesService.getAllNotes();
        return notes;
    }
}
