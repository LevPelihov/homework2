function parse( data )
{
  let arr1 =[], res =0,arr = data.split("");
  
  arr.map(function(b){
    b == 'i' ? res++ : res;
    b == 'd' ? res-- : res;
    b == 's' ? res= res*res : res;
    b == 'o' ? arr1.push(res): res;
  })

  return arr1; 
}