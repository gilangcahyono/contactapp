export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase() // huruf kecil semua
    .trim() // hapus spasi di awal/akhir
    .replace(/\s+/g, "-") // ganti spasi dengan -
    .replace(/[^\w\-]+/g, "") // hapus karakter non-word
    .replace(/\-\-+/g, "-"); // ganti -- jadi -
};
