from _decimal import Decimal

raio = Decimal(input());

n = 3.14159;

area = Decimal(n) * (raio ** 2);

print(f"A={area.__round__(4)}");