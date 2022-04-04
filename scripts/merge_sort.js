function MergeSort(){
    disable();
    dealy=0;

    Partition(0,array_size-1);

    enable();
}

//merge the subarrays in the sorting order 
function Merge(start,mid,end)
{
    var s=start;
    var m2=mid+1;

    //an empty array to store sorted elements
    var Arr=[];
    var k=0;
    for(var i=start;i<=end;i++)
    {
        //if start is greater than midlle element
        if(s>mid)
        {
        Arr[k++]=div_sizes[m2++];
        update(divs[m2-1],div_sizes[m2-1],"red");
        swap(divs[m2-1],div_sizes[m2-1]);
        }
        //if middle elemnt is greater than end
        else if(m2>end)
        {
            Arr[k++]=div_sizes[s++];
            update(divs[s-1],div_sizes[s-1],"#ff08ea");
            swap(divs[s-1],div_sizes[s-1]);
        }
        // to sort the element in sorted way
        else if(div_sizes[s]<div_sizes[m2])
        {
            Arr[k++]=div_sizes[s++];
            update(divs[s-1],div_sizes[s-1],"#08ffde");
            swap(divs[s-1],div_sizes[s-1]);
        }
        else
        {
            Arr[k++]=div_sizes[m2++];
            update(divs[m2-1],div_sizes[m2-1],"#ff5e08");
            swap(divs[m2-1],div_sizes[m2-1]);
        }
    }
        //storing all sorted elements from Arr
        for(var j=0;j<k;j++)
        {
            div_sizes[start++]=Arr[j];
            update(divs[start-1],div_sizes[start-1],"linear-gradient(to right, #7868e6 0%, #000000 100%)");
            swap(divs[start-1],div_sizes[start-1]);
        }   
}

//divide the array into subarrays
function Partition(start,end)
{
    if(start<end)
    {
        //to find the middle element of array
        var mid=Math.floor((start+end)/2);
       
        update(divs[mid],div_sizes[mid],"yellow");
        swap(divs[mid],div_sizes[mid]);

        Partition(start,mid);
        Partition(mid+1,end);

        Merge(start,mid,end);
    }
}