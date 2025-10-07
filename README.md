# Proyecto Leclere

### Sistema: https://trello.com/

### Instrucciones:

#### 1. Clonar repositorio:
```
git clone https://github.com/marchelooc/ProyectoLeclere.git
```

#### 2. Entrar al proyecto:
```
cd ProyectoLeclere
```

#### 4. Instalar dependencias:
```
npm install
```

#### 5. Iniciar test:
```
npx playwright install
```

#### 6. Iniciar test:
```
npx playwright test
```

#### 7. Mostrar reporte HTML:
```
npx playwright show-report
```

#### 8. Mostrar reporte Allure:
```
allure serve allure-results 
```
### Marks:

#### 1. Ejecutar marks @ui:
```
npx playwright test -g "@ui"
```
#### 2. Ejecutar marks @api:
```
npx playwright test -g "@api" 
```
#### 3. Ejecutar marks @smoke:
```
npx playwright test -g "@smoke" 
```
#### 4. Ejecutar marks @positive:
```
npx playwright test -g "@positive"
```
#### 5. Ejecutar marks @negative:
```
npx playwright test -g "@negative"
```
#### 6. Ejecutar marks @exploratory:
```
npx playwright test -g "@exploratory" 
```
#### 7. Ejecutar marks @boundary:
```
npx playwright test -g "@boundary" 
```