import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Document } from 'src/document/entities/document.entity';
import { Address } from 'src/address/entities/address.entity';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  idCard: string;

  @Column()
  nationality: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Document, (document) => document.applicant)
  documents: Document[];
  // เพิ่ม addresses
  @OneToMany(() => Address, (address) => address.applicant)
  addresses: Address[];
}
