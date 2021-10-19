function maximum(p, q, r){
    if (p > q){
        if (p > r){
            return p;
        }else{
            return r;
        }
    }else if (q > p){
        if (q > r){
            return q;
        }else {
            return r;
        }
    }else if (r > p){
        if (r > q){
            return r;
        }else {
            return q;
        }
    }else if (r > q){
        if (r > p){
            return r;
        }else {
            return p;
        }
    }else if ((r == p)||(r == q)||(p==q)){
        return r;
    }
}

maximum(29, 29, 29);