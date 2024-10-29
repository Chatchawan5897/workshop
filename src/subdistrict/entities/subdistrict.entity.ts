import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity('subdistricts')
export class Subdistrict {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subdistrict_name: string;
}
