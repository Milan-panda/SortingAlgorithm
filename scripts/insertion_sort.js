function InsertionSort(){
    disable();
    delay=0;

    for(var i=0;i<array_size;i++)
    {
        update(divs[i],div_sizes[i],"yellow");

        //key element in insertion sort
        var key=div_sizes[i];
        var j=i-1;

        //while loop to check if there is minimum bar present in right of it and then replace it
        while(j>=0 && div_sizes[j]>key)
        {
            //Provide red color to those which are being compared
            update(divs[j],div_sizes[j],"red");
            update(divs[j+1],div_sizes[j+1],"red");

            div_sizes[j+1]=div_sizes[j];

            //Provide red color to those which had been compared
            update(divs[j],div_sizes[j],"red");
            swap(divs[j],div_sizes[j]);
            update(divs[j+1],div_sizes[j+1],"red");
            swap(divs[j+1],div_sizes[j+1]);

            //Provide skyblue color to traversed bars
            update(divs[j],div_sizes[j],"rgb(24, 190, 255)");
            swap(divs[j],div_sizes[j]);

            if(j==(i-1))
            {
                //Provide green color to the bar who's left side been compared
                update(divs[j+1],div_sizes[j+1],"linear-gradient(to bottom, #66ff33 21%, #00ff00 100%)");
                swap(divs[j+1],div_sizes[j+1]);
            }
            else{
                update(divs[j+1],div_sizes[j+1],"rgb(24, 190, 255)");
                swap(divs[j+1],div_sizes[j+1]);
            }
            j--;
        }

        //move key to j+1th bar if there is no larger bar in left
        div_sizes[j+1]=key;

        for(var l=0;l<i;l++)
        {
            update(divs[l],div_sizes[l],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
            swap(divs[l],div_sizes[l]);
        }
    }
    update(divs[i-1],div_sizes[i-1],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
    enable();
}
