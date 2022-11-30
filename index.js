const app = (list, val) => {
  

  let mylist = list.sort((a, b) => parseFloat(b) - parseFloat(a));
  let response = [];

  for (let i = 0; i < mylist.length; i++) {

    if (mylist.includes(val - mylist[i])) {
      response.push([mylist[i], val - mylist[i]]);
      mylist.splice(mylist[i], 1);
      mylist.splice(mylist.indexOf(val - mylist[i]), 1);
    }
  }

  console.log(response)
  return response
};

const list = [1, 9, 5, 0, 20, -4, 12, 16, 7];
const desiredValue = 12;

app(list, desiredValue);
