import { Applicant } from 'src/applicant/entities/applicant.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documentNumber: string;

    @Column()
    description: string;

    @Column()
    fee: number;

    @Column()
    approvalStatus: string;

    @Column()
    documentImage: string;

    @ManyToOne(() => Applicant, (applicant) => applicant.documents)
    applicant: Applicant;
}
