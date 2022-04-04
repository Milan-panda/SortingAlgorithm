function BubbleSort(){
    disable();
    delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            //Provide green color to jth bar
            update(divs[j],div_sizes[j],"linear-gradient(to bottom, #66ff33 21%, #00ff00 100%)");

            // Compare between jth j+1th bar
            if(div_sizes[j] > div_sizes[j+1])
            {
                 //Provide red color to those which are being compared
                 update(divs[j],div_sizes[j],"red");
                 update(divs[j+1],div_sizes[j+1],"red");
 
                 //swap the jth j+1th bar
                 var temp=div_sizes[j];
                 div_sizes[j]=div_sizes[j+1];
                 div_sizes[j+1]=temp;
 
                 //Provide red color to those which are compared and replaced
                 update(divs[j],div_sizes[j],"red");
                 swap(divs[j],div_sizes[j]);
                 update(divs[j+1],div_sizes[j+1],"red");
                 swap(divs[j+1],div_sizes[j+1]);
            }
            //Provide skyblue color to semisorted bars
            update(divs[j],div_sizes[j],"rgb(24, 190, 255)");
            // swap(divs[j],div_sizes[j]);
        }
        update(divs[j],div_sizes[j],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
    }
    update(divs[0],div_sizes[0],"linear-gradient(to right, #7868e6 0%, #000000 100%)");

    enable();
}
