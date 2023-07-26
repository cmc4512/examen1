import {Entity, PrimaryGeneratedColumn, Column } from'typeorm'

@Entity()
export class ProductModel {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username: string;

    @Column()
    userdescription: string;

    @Column()
    userquantity: string;
 
}