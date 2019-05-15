import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { CollectionFiles } from "./CollectionFiles";

@Entity("collection")
export class Collection {
  public constructor(collection?: Collection) {
    if (collection) {
      this.id = collection.id;
      this.name = collection.name;
      this.copyright = collection.copyright;
      this.closure = collection.closure;
      this.legalStatus = collection.legalStatus;
      this.files = collection.files;
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  copyright: string;

  @Column()
  closure: string;

  @Column({ name: "legal_status" })
  legalStatus: string;

  @OneToMany(_type => CollectionFiles, files => files.collection, {
    eager: true
  })
  files?: CollectionFiles[];
}
