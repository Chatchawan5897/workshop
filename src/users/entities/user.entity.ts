// src/users/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Province } from 'src/province/entities/province.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prefix: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    nationalId: string;

    @Column()
    mobile: string;

    @Column()
    email: string;

    @Column()
    status: string;

    @Column()
    thaiIdVerification: string;

    @Column()
    address: string;
    // ทำการเชื่อมระหว่าง ตาราง user แลพ province 
    @ManyToOne(()=> Province , province => province.users)
    province: Province;
}
