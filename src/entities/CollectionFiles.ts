import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Collection } from "./Collection";

@Entity("collection_files")
export class CollectionFiles {
  public constructor(collectionsFiles?: CollectionFiles) {
    if (collectionsFiles) {
      this.id = collectionsFiles.id;
      this.checksum = collectionsFiles.checksum;
      this.size = collectionsFiles.size;
      this.path = collectionsFiles.lastModifiedDate;
      this.lastModifiedDate = collectionsFiles.lastModifiedDate;
      this.collection = collectionsFiles.collection;
    }
  }
  @PrimaryColumn()
  id: string;

  @Column()
  checksum: string;

  @Column()
  size: string;

  @Column()
  path: string;

  @Column({ name: "last_modified_date" })
  lastModifiedDate: string;

  @ManyToOne(_type => Collection, collection => collection.files)
  collection?: Collection;
}
