 function recursiva(max) {
     if (max > 1000) return;
     console.log(max++);
     recursiva(max);
 }

 recursiva(0);