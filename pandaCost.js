function pandaCost(sengara ,somosa, zelapi) {
    const Sengara = sengara * 9;
    const totalSengara = Sengara;
    const Somosa = somosa * 10;
    const totalSomosa = Somosa;
    const Zelapi = zelapi * 10;
    const totalZelapi = Zelapi;
    const totalCost = totalSengara + totalSomosa + totalZelapi
    return totalCost;

}
const totalpandaCost = pandaCost(7, 10, 15)
console.log(totalpandaCost);