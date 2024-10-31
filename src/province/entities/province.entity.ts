import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('provinces')
export class Province {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameTh: string;

    @Column()
    nameEN: string;

    @Column({ nullable: true })
    code?: string; // รหัสจังหวัด (ถ้ามี)

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date; // วันที่สร้าง

    @Column()
    createdBy: string; // ผู้สร้าง

    @Column({ type: 'timestamp', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date; // วันที่แก้ไขล่าสุด

    @Column()
    updatedBy: string; // ผู้แก้ไขล่าสุด

    @OneToMany(() => User, user => user.province)
    users: User[];
}
