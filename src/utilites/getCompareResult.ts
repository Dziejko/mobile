

export function getCompareResult(val1:number|boolean,val2:number|boolean){
  
        if(val1>val2){
            return "text-success"
        }else if(val1<val2){
            return "text-danger"
        }else{
            return
        }
}


