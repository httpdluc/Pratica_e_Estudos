# beecrowd | 1178

valor = float(input())
N = [0]*100

for i in range(100):
    N[i] = valor
    valor = valor/2
    
for i in range(100):
    print(f"N[{i}] = {N[i]:.4f}")
