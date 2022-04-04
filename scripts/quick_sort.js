function QuickSort(){
    disable();

    delay=0;

    qSort(0,array_size-1);

    enable();
}

function qPartition(low,high){
    
    //Taking last element as pivot element and providing it yellow color
    var pivot_el=div_sizes[high];
    update(divs[high],div_sizes[high],"yellow");
    var i=low-1;

    for(var j=low;j<=high-1;j++)
    {
        if(div_sizes[j]<pivot_el)
        {
            i++;
            update(divs[j],div_sizes[j],"brown");
            update(divs[i],div_sizes[i],"red");
            update(divs[j],div_sizes[j],"red");

            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            //Provide Indigo colour to swapped Bar
            update(divs[i],div_sizes[i],"indigo");
            swap(divs[i],div_sizes[i]);
            update(divs[j],div_sizes[j],"indigo");
            swap(divs[j],div_sizes[j]);
            update(divs[i],div_sizes[i],"indigo");
            //Provide Black colour if the bar left to pivot is smaller
            update(divs[j],div_sizes[j],"black");

            
        }
    }
    //Provide blue color to swapped larger element
    update(divs[high],div_sizes[high],"DodgerBlue");
    swap(divs[high],div_sizes[high]);
    update(divs[i+1],div_sizes[i+1],"DodgerBlue");
    swap(divs[i+1],div_sizes[i+1]);
    var temp=div_sizes[i+1];
    div_sizes[i+1]=div_sizes[high];
    div_sizes[high]=temp;

    //Provide gray colur to previous position of pivot bar
    update(divs[high],div_sizes[high],"gray");
    swap(divs[high],div_sizes[high]);
    //Provide Pink colour to new pivot element bar
    update(divs[i+1],div_sizes[i+1],"pink");
    swap(divs[i+1],div_sizes[i+1]);

    for(var l=low;l<=high;l++)
    {
        //Provide colour to sorted elements
        update(divs[l],div_sizes[l],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
    }

    return i+1;

}

function qSort(low , high)
{
    if(low<high)
    {
        var pivot=qPartition(low,high);
        qSort(low,pivot-1);
        qSort(pivot+1,high);
    }
}