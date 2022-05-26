// ################################################
// ################################################
let ele = document.getElementsByTagName("p").length;
console.log(ele);

// ################################################
// ################################################
let coucou = document.getElementById("coucou").textContent;
console.log(coucou);

// ################################################
// ################################################
let link = document.getElementsByTagName("a")[2].href;
console.log(link);

// ################################################
// ################################################
let count = document.querySelectorAll("li.compte-moi").length;
console.log(count);

// ################################################
// ################################################
let count1 = document.querySelectorAll("ol > li.compte-moi").length;
console.log(count1);

// ################################################
// ################################################
let res = document.querySelectorAll("div > ul")[1];
console.log(res.childNodes[1].textContent);
