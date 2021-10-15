let n = 14


for(i = 1; i <= n; i+=2){
  let line = ""
  for(j = (n - i)/2; j >= 1; j--){ 
    line += " "
  }
  for(j = 1; j <= i; j++){ 
    line += "*"
  }
  console.log(line)
}