import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";
import { Collection } from "./Collection";
import { FileTypeInfo } from "./FileTypeInfo";

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

  @Column({ name: "virus_status", nullable: true })
  virusStatus?: string;

  @Column({ name: "backend_checksum", nullable: true })
  backendChecksum?: string;

  @CreateDateColumn({ name: "date_created" })
  createdDate?: string;

  @UpdateDateColumn({ name: "last_modified_date" })
  lastModifiedDate?: string;

  @ManyToOne(_type => Collection, collection => collection.files)
  collection?: Collection;

  @OneToOne(_type => FileTypeInfo, { eager: true })
  @JoinColumn({ name: "file_type_info_id" })
  fileTypeInfo?: FileTypeInfo;
}
