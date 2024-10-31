import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('subdistricts')
export class Subdistrict {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nameTH: string;
  @Column()
  nameEN:string;
  @Column()
  code:string;
}
