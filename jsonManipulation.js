let datas = require('./data.json');

const itemsInMeetingRoom = (datas) => {
  const newData = datas.filter((data) => {
    return data.placement.name === 'Meeting Room';
  });
  const items = newData.map((item) => item.name);
  return console.log(items);
};

itemsInMeetingRoom(datas);

const allElectronic = (datas) => {
  const newData = datas.filter((data) => {
    return data.type === 'electronic';
  });
  const items = newData.map((item) => item.name);
  return console.log(items);
};
allElectronic(datas);

const allFurniture = (datas) => {
  const newData = datas.filter((data) => {
    return data.type === 'furniture';
  });
  const items = newData.map((item) => item.name);
  return console.log(items);
};
allFurniture(datas);

const itemWithBrownColor = (datas) => {
  const newData = datas.filter((data) => {
    return data.tags.includes('brown'); 
  });
  
  const items = newData.map((item) => item.name);
  return console.log(items);
};
itemWithBrownColor(datas);
const itemsPurchasedAt = (date) => {
  const newData = datas.filter((data) => {
    return data.purchased_at == date; 
  });
  return console.log(newData);
};
itemsPurchasedAt(1579190471);
