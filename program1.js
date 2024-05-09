const getTotalIsles = function (grid) {
  const exploreIsland = (grid, i, j) => {
    
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
        return;
    }
   
    grid[i][j] = 'W';

    exploreIsland(grid, i - 1, j);
    exploreIsland(grid, i + 1, j); 
    exploreIsland(grid, i, j - 1); 
    exploreIsland(grid, i, j + 1);
};

let count = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        
        if (grid[i][j] === 'L') {
            exploreIsland(grid, i, j);
            count++;
        }
    }
}

return count;


  
  };
  
  module.exports = getTotalIsles;
