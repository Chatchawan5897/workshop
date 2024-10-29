import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('provinces')
export class Province {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    province_name:string;

}
