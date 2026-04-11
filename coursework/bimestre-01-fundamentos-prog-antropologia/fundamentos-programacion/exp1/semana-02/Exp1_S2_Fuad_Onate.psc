Algoritmo VentaOnline
	// variables para los productos
	Dimension productos[5]
	Dimension precios[5] 
	Dimension stock[5]
	
	// variables del carrito
	Dimension carrito[10]
	Dimension cantidad[10]
	
	Definir opc, prod, cant, total Como Entero
	Definir items Como Entero
	Definir seguir Como Caracter
	
	// inicializo algunas cosas
	items = 0
	total = 0
	
	// cargo algunos productos de ejemplo
	productos[1] = "Notebook"
	precios[1] = 500000
	stock[1] = 5
	
	productos[2] = "Mouse"  
	precios[2] = 15000
	stock[2] = 10
	
	productos[3] = "Teclado"
	precios[3] = 35000
	stock[3] = 8
	
	productos[4] = "Monitor"
	precios[4] = 180000
	stock[4] = 3
	
	productos[5] = "Audifonos"
	precios[5] = 25000
	stock[5] = 15
	
	Escribir "SISTEMA DE VENTA ONLINE"
	Escribir ""
	
	// menu principal
	Repetir
		Escribir "Menu:"
		Escribir "1. Ver productos"
		Escribir "2. Buscar producto" 
		Escribir "3. Agregar al carrito"
		Escribir "4. Ver carrito"
		Escribir "5. Pagar"
		Escribir "6. Salir"
		Escribir "Elige opcion: "
		Leer opc
		
		Segun opc Hacer
			1:
				// mostrar productos
				Escribir "Lista de productos:"
				Para i = 1 Hasta 5 Hacer
					Escribir i, ". ", productos[i], " - Precio: $", precios[i], " - Stock: ", stock[i]
				FinPara
				
			2:
				// buscar un producto
				Escribir "Qué producto buscas?"
				Definir buscar Como Caracter
				Leer buscar
				
				Definir encontre Como Logico
				encontre = Falso
				
				Para i = 1 Hasta 5 Hacer
					// busco si el nombre coincide
					Si productos[i] = buscar Entonces
						Escribir "Encontrado: ", productos[i], " - $", precios[i]
						encontre = Verdadero
					FinSi
				FinPara
				
				Si encontre = Falso Entonces
					Escribir "No encontre ese producto"
				FinSi
				
			3:
				// agregar productos al carrito
				Escribir "Que producto quieres? (1-5): "
				Leer prod
				
				Si prod >= 1 y prod <= 5 Entonces
					Escribir "Cuantos quieres?"
					Leer cant
					
					Si cant <= stock[prod] y cant > 0 Entonces
						items = items + 1
						carrito[items] = prod
						cantidad[items] = cant
						stock[prod] = stock[prod] - cant
						
						Escribir "Agregado al carrito"
					Sino
						Escribir "No hay suficiente stock"
					FinSi
				Sino
					Escribir "Producto no valido"
				FinSi
				
			4:
				// ver el carrito
				Si items = 0 Entonces
					Escribir "Carrito vacio"
				Sino
					Escribir "Tu carrito:"
					total = 0
					
					Para i = 1 Hasta items Hacer
						Definir subtotal Como Entero
						subtotal = cantidad[i] * precios[carrito[i]]
						total = total + subtotal
						
						Escribir productos[carrito[i]], " x", cantidad[i], " = $", subtotal
					FinPara
					
					Escribir "Total: $", total
				FinSi
				
			5:
				// pagar la compra
				Si items = 0 Entonces
					Escribir "No hay nada que pagar"
				Sino
					Escribir "Procesando pago..."
					Escribir "Ingresa tu nombre:"
					Definir nombre Como Caracter
					Leer nombre
					
					Escribir "Direccion de envio:"
					Definir direccion Como Caracter
					Leer direccion
					
					Escribir "Pago realizado!"
					Escribir "Total pagado: $", total
					Escribir "Se enviara a: ", direccion
					
					// limpio el carrito
					items = 0
					total = 0
				FinSi
				
			6:
				Escribir "Gracias por tu compra"
				
			De Otro Modo:
				Escribir "Opcion incorrecta"
		FinSegun
		
		Escribir ""
		
	Hasta Que opc = 6
	
FinAlgoritmo
