import {Column, Model, Table} from "sequelize-typescript";

@Table
export class NoteModel extends Model {
    @Column
    note: string;

    @Column
    userId: number;
}