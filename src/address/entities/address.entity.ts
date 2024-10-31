import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Applicant } from 'src/applicant/entities/applicant.entity';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    subDistrict: string;

    @Column()
    district: string;

    @Column()
    province: string;

    @Column()
    postalCode: string;

    @ManyToOne(() => Applicant, (applicant) => applicant.addresses)
    applicant: Applicant;
}
