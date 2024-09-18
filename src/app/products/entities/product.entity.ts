import {
  Table,
  Column,
  Model,
  PrimaryKey,
  NotNull,
  AutoIncrement,
  Default,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @NotNull
  @AutoIncrement
  @Column
  id: number;

  @Column
  @NotNull
  nama: string;

  @Column
  @NotNull
  deskripsi: string;

  @Column
  @NotNull
  stok: number;

  @Column
  @NotNull
  harga: number;

  @Column
  @NotNull
  id_kategori: number;

  @Column
  @NotNull
  id_ukuran: number;

  @Column
  @NotNull
  image: string;

  @Column
  @NotNull
  @Default('CURRENT_TIMESTAMP')
  @CreatedAt
  created_at: string;

  @Column
  @NotNull
  @Default('CURRENT_TIMESTAMP')
  @UpdatedAt
  updated_at: string;
}
