import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Province } from 'src/province/entities/province.entity';

@Entity('districts')
export class District {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    district_name :string;

    // @ManyToOne(() => Province, (province) => province.districts)
    // province: Province;
}
