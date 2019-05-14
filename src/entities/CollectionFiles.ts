import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class CollectionFiles {
  public constructor(collectionsFiles?: CollectionFiles) {
    if (collectionsFiles) {
      this.id = collectionsFiles.id;
      this.checksum = collectionsFiles.checksum;
      this.size = collectionsFiles.size;
      this.path = collectionsFiles.lastModifiedDate;
      this.lastModifiedDate = collectionsFiles.lastModifiedDate;
      this.collectionId = collectionsFiles.collectionId;
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

  @Column({ name: "collection_id" })
  collectionId: string;
}
