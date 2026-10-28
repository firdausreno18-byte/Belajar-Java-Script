const transaksi = [
  {
    id: 1,
    barang: "Buku",
    harga: 50000,
    jumlah: 2,
    qty: 2,
    kategori: "Alat Tulis",
  },
  {
    id: 2,
    barang: "Pensil",
    harga: 10000,  
    jumlah: 5,
    qty: 5,
    kategori: "Alat Tulis",
  },
    {
    id: 3,
    barang: "Penghapus",
    harga: 5000,
    jumlah: 3,
    qty: 3,
    kategori: "Alat Tulis",
  },
  { 
    id: 4,
    barang: "Penggaris",
    harga: 15000,
    jumlah: 1,
    qty: 1,
    kategori: "Alat Tulis",
  },
    {
    id: 5,
    barang: "Tas",
    harga: 200000,
    jumlah: 2,
    qty: 2,
    kategori: "Aksesoris",
  },
   {
    id: 6,
    barang: "Sepatu",
    harga: 300000, 
    jumlah: 1,
    qty: 1,
    kategori: "Aksesoris",
    },
]

const kategoriDIpilih = "Aksesoris";

const transaksiFiltered = transaksi.filter((item) => item.kategori === kategoriDIpilih);

const totalHarga = transaksiFiltered.map(
    ({id, barang, harga, jumlah, qty, kategori}) => ({
        id,
        barang,
        harga,
        jumlah,
        qty,
        kategori,
        itemTotal: harga * qty
    })
);

const total = totalHarga.reduce((total, item) => total + item.itemTotal, 0);



console.log("================================");
console.log("          LAPORAN TRANSAKSI          ");
console.log("================================");
console.log(`Kategori: ${kategoriDIpilih}`);
console.log("--------------------------------");

totalHarga.forEach(
({barang, harga, qty, itemTotal}) => {
    console.log (`barang   : ${barang}`);
    console.log (`harga    : ${harga.toLocaleString("id-ID")}`);
    console.log (`qty   : ${qty}`);
    console.log (`itemTotal: ${itemTotal.toLocaleString("id-ID")}`);
    console.log("--------------------------------");
}

);

console.log(`Total Harga: Rp ${total.toLocaleString("id-ID")}`);