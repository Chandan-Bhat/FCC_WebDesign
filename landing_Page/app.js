let dat
fetch("data.json").then(response => response.json).then((data) => {dat = data})

console(dat["1"].head)