import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
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

  @CreateDateColumn({ name: "date_created" })
  createdDate: string;

  @UpdateDateColumn({ name: "last_modified_date" })
  lastModifiedDate: string;

  @OneToMany(_type => CollectionFiles, files => files.collection, {
    eager: true
  })
  files?: CollectionFiles[];
}
