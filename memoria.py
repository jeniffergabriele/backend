gastos = [500, 300, 600, 300]
ganhos = [1400, 500, 1200]


def somatorio(lista):
    soma=0
    contador=0  
    while (contador< len(lista)):
        soma= soma+lista[contador]
        #print(soma)
        #print(contador)
        contador=contador+1
    return soma    


total_gastos = somatorio(gastos)
total_ganhos = somatorio(ganhos)


diferenca = total_ganhos - total_gastos


print(f"Total de gastos: R${total_gastos}")
print(f"Total de ganhos: R${total_ganhos}")
print(f"Diferença (ganhos - custos): R${diferenca}")

