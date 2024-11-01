import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Province } from 'src/province/entities/province.entity';

@Entity('districts')
export class District {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nameTH :string;
    @Column()
    nameTEN :string;
    @Column()
    code:string;
    // @ManyToOne(() => Province, (province) => province.districts)
    // province: Province;
}
