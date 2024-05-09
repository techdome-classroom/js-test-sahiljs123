const getTotalIsles = function (grid) {


    // write your code here
    let count=0;
    let flag=true;
    for (let i = 0; i < grid.length; i++) {
      
      
      for (let index = 0; index < grid[i].length; index++) {
        const element = gris[index];
        if(flag && arr[i][index]=="L"){
            count++;
            flag=false;
        }
        if(element=="L"){
          if(grid[i][index]==grid[i][index+1]){
            grid[index]="W"
          }
        }
        
      }
    }
    return count;

  };
  
  module.exports = getTotalIsles;

