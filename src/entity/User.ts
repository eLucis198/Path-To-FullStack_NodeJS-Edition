import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  constructor (name: string, username: string, password: string) {
    this.name = name
    this.username = username
    this.password = password
  }
}
