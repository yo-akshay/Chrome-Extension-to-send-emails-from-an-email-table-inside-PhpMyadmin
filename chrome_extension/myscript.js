function func(elem,id){
 elem.onclick = function () { 
 		var em=tr[id].getElementsByTagName("td")[5].getElementsByTagName("span")[0];
 		var s=tr[id].getElementsByTagName("td")[6].getElementsByTagName("span")[0];
 		var b=tr[id].getElementsByTagName("td")[7].getElementsByTagName("span")[0];
 		window.location="https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to="+em.innerHTML+"&su="+s.innerHTML+"&body="+b.innerHTML;
    };
}
var table1=document.getElementsByClassName("table_results ajax pma_table")[0];
 tr=table1.getElementsByTagName("tr");

 for (i = 1; i < tr.length; i++) {

 var td = document.createElement('td');
 var input = document.createElement('input');
 input.type = 'checkbox';
func(input,i);

 td.appendChild(input);
 tr[i].appendChild(td);
 }

