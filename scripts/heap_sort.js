function HeapSort(){
    disable();
    delay=0;

    hSort();

    enable();
}

//swap function to swap largest values
function hswap(i,j){
    update(divs[i],div_sizes[i],"red");
    update(divs[j],div_sizes[j],"red");
    swap(divs[j],div_sizes[j]);

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    update(divs[i],div_sizes[i],"black");
    swap(divs[i],div_sizes[i]);
    update(divs[j],div_sizes[j],"black");
    swap(divs[j],div_sizes[j]);
    
    update(divs[i],div_sizes[i],"blue");
    swap(divs[i],div_sizes[i]);
    update(divs[j],div_sizes[j],"blue");
    swap(divs[j],div_sizes[j]);

}

//heapify function create a heap of array
function heapify(n,i){
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest]){
        if(largest!=i){
            update(divs[largest],div_sizes[largest],"indigo");
        }
        largest=l;
        update(divs[largest],div_sizes[largest],"olive");
    }
    if(r<n && div_sizes[r]>div_sizes[largest]){
        if(largest!=i){
            update(divs[largest],div_sizes[largest],"indigo");
        }
        largest=r;
        update(divs[largest],div_sizes[largest],"olive");
    }
    if(largest!=i){
        hswap(i,largest);
        heapify(n,largest);
    }
}

//sort function to sort the values 
function hSort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--){
        heapify(array_size,i);
    }
    for(var i=array_size-1;i>0;i--){
        hswap(0,i);
        update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
        update(divs[i],div_sizes[i],"yellow");

        heapify(i,0);

        update(divs[i],div_sizes[i],"goldenroad");
        update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
    }
    update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");

}