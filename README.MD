# My Todo APP
Pada Tugas ini, kalian diminta untuk melanjutkan server todo app pada week sebelumnya dengan menambahkan penyimpanan database postgresql.

## Requirement
### 1. Struktur folder

Pada project ini kalian diminta untuk memisahkan logic pada repository kode kalian seperti gambar di bawah ini.
![Model-Controller Struktur Folder](./assets/folder-structure.png "Model-Controller Struktur Folder")

- Folder config : berisi config setup database
- Folder controllers: berisi logic untuk memproses request dari client.
- Folder migrations : berisi historikal perubahan/penambahan/penghapusan table pada database
- Folder seeders : berisi logic untuk mengisi table pada database
- Folder models : berisi file yang merepresentasikan entitas table di database
- Folder routes : berisi file routing endpoint

### 2. ERD Todos

nama table: Todo (Bisa plural/singular)
kolom:
- id : PRIMARY KEY DataTypes.INTEGER NOT NULL
- title: DataTypes.STRING, NOT NULL
- description: DataTypes.TEXT, NOT NULL
- status: DataTypes.ENUM, NOT NULL (ENUM: ["created", "in_progress", "done"])
- createdAt DataTypes.DATE, NOT NULL
- updatedAt: DataTypes.DATE, NOT NULL

### 3. ENDPOINT
Untuk detail endpoint requirement dapat dilihat pada folder assets/api-doc.md dan assets/todo-api.postman_collection.json. Pastikan server kalian dapat berjalan sesuai dengan berkas tersebut.

### 4. MIGRATION
Pada requirement ini kalian diminta untuk melakukan migrasi database todo app menggunakan sequelize cli dan tidak diperbolehkan mengubah secara langsung table/kolom/tipe data melalui gui atau psql. Untuk detailnya akan dijelaskan oleh mentor dan berikut referensinya : https://sequelize.org/docs/v6/other-topics/migrations/

### 5. SEEDER
Kalian diminta untuk membuat seeder sejumlah 5 data todo menggunakan sequelize-cli.
reference: https://sequelize.org/docs/v6/other-topics/migrations/

### 6. Sequelize hooks n validation
Tambahkan fungsional pada models dengan hooks n validasi berikut:

-- kolom title
- tambahkan validasi hanya bisa menerima panjang string maksimal 255 karakter
- tambahkan validasi input tidak boleh null atau string kosong

-- kolom description
- tambahkan validasi input tidak boleh null atau string kosong

-- kolom status
- buatlah hooks untuk memberi nilai default enum jika input status kosong atau tidak sesuai dengan value enum yang telah diset 
