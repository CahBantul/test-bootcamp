const cassier = (restoName, cassierName, items) => {
  const date = new Date().toISOString();
  const item = items
    .map((item) => {
      let bill = `${item.name}.........Rp. ${item.price}`;
      console.log(bill.length)
      if (bill.length > 32) {
        return  `${item.name}...........
        ............Rp. ${item.price}
        `;
      } else {
        return bill
      }
    })
    .join('\n');
  const result = `
${restoName}
Tanggal : ${date}
Nama Kasir : ${cassierName}
================================
${item}
    `;
  return result;
};

const restoName = 'Rumah Makan Padang';
const cassierName = 'Sambalado';
const items = [
  { name: 'nasi rendang', price: 16000 },
  { name: 'nasi ayam', price: 15000 },
  { name: 'nasi telur', price: 13000 },
  { name: 'nasi ayam bakar', price: 13000 },
];

console.log(cassier(restoName, cassierName, items));
