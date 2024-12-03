//数组去重
var a =[1,1,2,3,4,4,5,6,5];
var b=[];
for(var i=0; i<a.length;i++){
    var c =false;
    for(var j=0;j<b.length;j++){
        if(b[j]==a[i]) {
            var c=true;
            break;
        }
    }
    if(!c){
        b.push(a[i]);
    }
}
console.log(b);


var q=[1,2,3];
q.splice(0,0,0);
console.log(q);

var w =[1,2,3];
w.splice(w.length,0,4);
console.log(w);

var r=[1,2,3,4];
// r.length=2;
console.log(r);

r.splice(1,3);

var arr1=[12,11,23,1,2,45,123,78];
var target =23;
var c =[ ];
for (var i=0; i<length;i++){
    if(arr1[i]<=target){
      c.unshift(arr1[i]);
    }else {
    c.push(arr1[i]);
    }
    console.log(c);
}
