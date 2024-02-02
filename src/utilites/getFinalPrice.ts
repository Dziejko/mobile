
export function getFinalPrice(planPrice:number,smartphonePrice:number){

    return Math.ceil(planPrice+(smartphonePrice+smartphonePrice*0.1)/12)-0.01
}