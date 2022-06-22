function picnicBudget(man) {
    const first100man = 5000;
    const second100man = 4000;
    const thard100man = 3000;
    if (man <= 100) {
        const frist100 = 100 * first100man;
        return frist100;
    }
    else if (man <= 200) {
        const first100 = 100 * first100man;
        const restman = man - 100;
        const second100 = restman * second100man;
        const totalman = first100 + second100;
        return totalman;
    }
    else{
        const first100 = 100 * first100man;
        const second100 = 100 * second100man;
        const restman = man - 200;
        const thardrest = restman * thard100man;
        const totalMan = first100 + second100 + thardrest;
        return totalMan; 


    }
}
const budget =picnicBudget(400);
console.log(budget);