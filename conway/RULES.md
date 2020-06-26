1. Any live cell with two or three live neighbours survives.

2. Any dead cell with three live neighbours becomes a live cell.

3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.


----NEIGHBOURS COUNT----


width = 25
height = 25
grid =
[[a, b],
 [c, d]]

newGrid = grid

for each x: 
    for each y:
        let neighbours = 0

        if y > 0:
            if grid[x][y-1] == 1:
                neighbours++
        
        if y < width - 1:
            if grid[x][y+1] ==1:
                neighbours++

        if x > 0:
            if grid[x-1][y] == 1:
                neighbours++

        if x < height - 1:
            if grid[x+1][y] == 1:
                neighbours++

        if y > 0 && x > 0:
            if grid[x-1][y-1] == 1:
                n++
        if y < width -1 &&  x>0:
            if grid[x-1][y+1]

        if x < height - 1 && y > 0:
            if grid[x+1][y-1]

        if x< height - 1 && y < width -1:
            if grid[x+1][y+1]



        if  grid[x][y] == 1: <--------------------------------------------------------- #1
            if neighbours == 2 || neighbours == 3:
                newGrid[x][y] = 1
            else:
                newGrid[x][y] = 0
        else: <------------------------------------------------------ #2 and #3
            if neighbours == 3:
                newGrid[x][y] = 1
            else:
                newGrid[x][y] = 0

grid = newGrid