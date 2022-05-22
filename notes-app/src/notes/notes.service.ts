import {Injectable} from '@nestjs/common';
import axios from "axios";
import {InjectModel} from "@nestjs/sequelize";
import {NoteModel} from "./notes.model";

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(NoteModel)
        private note: typeof NoteModel,
    ) {
    }

    async findAll(): Promise<NoteModel[]> {
        return this.note.findAll();
    }

    async create(data) {
        return await this.note.create(data);
    }

    async retrieve(id) {
        return await this.note.findOne({where: {id}})
    }

    async update(id, data) {
        return await this.note.update(data, {where: {id}})
    }

    async delete(id) {
        return await this.note.destroy({where: {id}})
    }
}
