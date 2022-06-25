var x=0;
function show_submenu()
{
    if(x==0)
    {
        document.getElementById('about-us').style.display='block';
        x=1;
    }
    else
    {
        document.getElementById('about-us').style.display='none';
        x=0;
    }
}