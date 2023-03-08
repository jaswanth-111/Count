function check()
{
    var k=document.getElementById("1").value.length;
    var l=k;
    var s=document.getElementById("1").value;
    var w=1;
    var li=1;
    for(var i=0;i<k;i++)
    {
        if(s[i]==" ")
        {
            w=w+1;
            l=l-1;
        }
        else if(s[i]=="\n")
        {
            l=l-1;
            w=w+1;
            li=li+1;
        }
    }
    document.getElementById("2").innerHTML="Char count="+l;
    document.getElementById("3").innerHTML="Words count="+w;
    document.getElementById("4").innerHTML="Lines count="+li;
}