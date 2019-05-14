import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Collection {
  public constructor(collection?: Collection) {
    if (collection) {
      this.id = collection.id;
      this.name = collection.name;
      this.copyright = collection.copyright;
      this.closure = collection.closure;
      this.legalStatus = collection.legalStatus;
    }
  }

  @PrimaryColumn()
  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  copyright: string;

  @Column()
  closure: string;

  @Column({ name: "legal_status" })
  legalStatus: string;
}
