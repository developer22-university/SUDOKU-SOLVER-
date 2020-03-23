function isSafe(board,r,c,i){
	
for(var i=0;i<9;i++){
	
if(board[i][c]==no || board[r][i]==no){
	return false;
}

var sx = r-r%3;
var sy = c-c%3;

for(var x=sx;x<sx+3;x++){
for(var y=sy;y<sy+3;y++){

if(board[x][y]==no){
	return false;
}


}
}




}






}



function solvesudokuHelper(board,r,c){
	
if(r==9{

changeboard(board);
return true;
}

if(c==9){
	return solvesudokuHelper(board,r+1,0);
}

if(board[r][c]!=0){
	return SolveSudokuHelper(board,r,c+1);

}

for(var i=1;i<=9;i++){
if(isSafe(board,r,c,i)){
  board[r][c] = i;
  var success = solveSudoku(board,r,c+1);
  if(success==true){
  return true;
  }


board[r][c]=0;
}

	}





}


return false;
}


