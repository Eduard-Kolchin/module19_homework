function Device(wattage){
        this.online = true,    // включен ли прибор
        this.mode = 'inactive',    // действующий режим
        this.modeOptions = ['inactive', 'active'],    // доступные режимы работы прибора
        this.wattage = wattage,    // потребляемая мощность прибора
        
        this.onOff = function(){    // включение/выключение прибора
            this.online = !this.online;
            if (this.online) {
                console.log('Device on');
            } else {
                console.log('Device off');
            }
        },
    
        this.changingMode = function(mode){    // изменение режима работы прибора
            const presece = this.modeOptions.some((el)=>el === mode);
            console.log(presece);
            if (presece){
                if (this.online) {
                    this.mode = mode;
                } else {
                    console.log('no online!');
                }  
            }else {
                console.log('The mode was not found!');
            }
        },

        this.readOptions = function(){    // вывод доступных режимов работы прибора
            console.log(this.modeOptions);
        }
}

const electricKettle = new Device(2);

const dishwasher = new Device(2);
    dishwasher.modeOptions = ['inactive', 'econom', 'standard', 'enhanced'];

const airConditioning = new Device(2,5);
    airConditioning.modeOptions =  ['inactive', 'cooling', 'circulation', 'heating'];

const waterHeater = new Device(1,5);
    waterHeater.modeOptions = 'inactive', 'standard', 'fast';

const washingMachine = new Device(2,5);
    washingMachine.modeOptions =  ['inactive', 'econom', 'standard', 'enhanced', 'cotton', 'synthetic', 'wool'];

const heater = new Device(3);
    heater.statusOptions = ['inactive', 'standard', 'enhanced'];