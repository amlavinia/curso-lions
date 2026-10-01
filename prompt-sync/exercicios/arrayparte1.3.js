//3. Soma das Vendas 

const vendas = [120, 340, 85, 200, 90];
let total = 0;
for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];
}
console.log("Faturamento:", total); // 835