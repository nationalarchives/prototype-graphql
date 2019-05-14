import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class CollectionFiles {
  @PrimaryColumn()
  @Column()
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
