## Teste 1 – Conhecimento básico em python
# Desenvolvido por Gabriel Junqueira - 02/08/2025

# entrada para recebimento da string
palavra = input("Digite um palavra: ").lower()
comprimento = int(len(palavra))
correspondenciasCorretas = 0

# loop para verificação de cada uma das letras
for i in range(len(palavra)):
    if palavra[i] == palavra[comprimento - i - 1]:
        correspondenciasCorretas+= 1
          
# condicao para impressao do resultado
if correspondenciasCorretas == comprimento:
    print(f"A palavra {palavra} é um palíndromo")
else:
    print(f"A palavra {palavra} não é um palíndromo")