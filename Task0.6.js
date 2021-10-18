function maximum(p, q, r){
    if (p > q){
        if (p > r){
            console.log(p);
        }else{
            console.log(r);
        }
    }else if (q > p){
        if (q > r){
            console.log(q);
        }else {
            console.log(r);
        }
    }else if (r > p){
        if (r > q){
            console.log(r);
        }else {
            console.log(q);
        }
    }else if (r > q){
        if (r > p){
            console.log(r);
        }else {
            console.log(p);
        }
    }
}

maximum(1, 29, 17);