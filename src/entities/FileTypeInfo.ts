import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("file_type_info")
export class FileTypeInfo {
  public constructor(fileTypeInfo?: FileTypeInfo) {
    if (fileTypeInfo) {
      this.id = fileTypeInfo.id;
      this.format = fileTypeInfo.format;
      this.mime = fileTypeInfo.mime;
      this.basis = fileTypeInfo.basis;
      this.warning = fileTypeInfo.warning;
    }
  }
  @PrimaryColumn()
  id: string;

  @Column()
  format: string;

  @Column()
  mime: string;

  @Column()
  basis: string;

  @Column()
  warning: string;

  @CreateDateColumn({ name: "date_created" })
  createdDate?: string;

  @UpdateDateColumn({ name: "last_modified_date" })
  lastModifiedDate?: string;
}
