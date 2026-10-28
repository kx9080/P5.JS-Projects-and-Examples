let coolness;
let othercoolness;
let coolnumber = 122;
function checkCoolness() {
  if (coolness == true) {
    if (othercoolness == false) {
      print("cool");
    } else {
      print("uncool");
    }
  } else {
    if (othercoolness == true) {
      if (coolnumber == 122) {
        print("cool");
      }
    } else {
      print("uncool");
    }
  }
}

let list1 = [1, 2, 5, 6, 8, 10];
let list2 = [1, 5, 2, 9, 10];
let list3 = [10, 9, 7, 5, 3];
let list4 = [10, 9, 8, 6, 7];
function checkIfSorted(list) {
  if (list[1] < list[2]) {
    checkLH(list);
  } else {
    checkHL(list);
  }
}
function checkLH(list) {
  for (i = 0; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      console.log("List not sorted");
      return;
    }
  }
  console.log("List sorted.");
}
function checkHL(list) {
  for (i = 0; i < list.length; i++) {
    if (list[i] < list[i + 1]) {
      console.log("List not sorted");
      return;
    }
  }
  console.log("List sorted.");
}
checkIfSorted(list1);
checkIfSorted(list2);
checkIfSorted(list3);
checkIfSorted(list4);

let listpair1 = [1, 2, 3, 4, 5, 6];
let listpair2 = [1, 3, 3, 4, 4, 6];
function checkForValuePairs(list1, list2) {
  for (i = 0; i < list1.length; i++) {
    if (list1[i] == list2[i]) {
      console.log("Pair");
    } else {
      console.log("No Pair");
    }
  }
}

checkForValuePairs(listpair1, listpair2);
