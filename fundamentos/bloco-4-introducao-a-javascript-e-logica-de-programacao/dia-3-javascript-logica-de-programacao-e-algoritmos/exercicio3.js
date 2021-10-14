let n = 5


for(i = 1; i <= n; i++){
  let line = ""
  for(j = n - i; j >= 1; j--){ 
    line += " "
  }
  for(j = 1; j <= i; j++){ 
    line += "*"
  }
  console.log(line)
}