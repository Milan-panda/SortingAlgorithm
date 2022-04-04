function SelectionSort() {
     disable();

     delay = 0;
    for (var i = 0; i < array_size;i++) {
      update(divs[i],div_sizes[i],"red");

     // Assign i to min_idx
     min_idx = i;

     for (var j=i+1; j < array_size;j++) {
     // Provide green color to the jth bar
       update(divs[i],div_sizes[i],"linear-gradient(to bottom, #66ff33 21%, #00ff00 100%)");

      // Compare jth bar & min bar
       if (div_sizes[j] < div_sizes[min_idx]) {
         if (min_idx!=i) {

       // Provide skyblue color to the (min-idx)th bar
           update(divs[min_idx],div_sizes[min_idx],"  rgb(24, 190, 255)");
         }

         min_idx = j;
         update(divs[min_idx],div_sizes[min_idx],"red");
       } else {

         // Provide skyblue color to the jth bar
         update(divs[j],div_sizes[j],"rgb(24, 190, 255)");
       }
     }
     if (min_idx!=i) {

     // To swap ith and (min_idx)th bar
     var temp = div_sizes[min_idx];
     div_sizes[min_idx] = div_sizes[i];
     div_sizes[i]=temp;

     update(divs[min_idx],div_sizes[min_idx],"red");
     swap(divs[min_idx],div_sizes[min_idx]);
     update(divs[i],div_sizes[i],"red");
     swap(divs[i],div_sizes[i]);
     update(divs[min_idx],div_sizes[min_idx],"rgb(24, 190, 255)");
     swap(divs[min_idx],div_sizes[min_idx]);
     }
     update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
   }
     update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");

     enable();
   }
