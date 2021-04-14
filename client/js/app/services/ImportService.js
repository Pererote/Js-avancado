class ImportService{

    constructor(){

        this._http = new HttpService;

    }
    
    
    
    weekImporter(){

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/semana')
            .then(negotiations => {
                console.log(negotiations);
                resolve(negotiations.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(error =>{ 
                console.error(error);
                reject('Não foi possível importar as negociações da semana');
            });
        });
    };
    
    lastWeekImporter(){
        
        return new Promise((resolve, reject) => {
            
            this._http.get('negociacoes/anterior')
            .then(negotiations => {
                console.log(negotiations);
                resolve(negotiations.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(error =>{ 
                console.error(error);
                reject('Não foi possível importar as negociações da semana anterior');
            });
        });
    };
    
    lastBeforeWeekImporter(){

        return new Promise((resolve, reject) => {
            
            this._http.get('negociacoes/retrasada')
            .then(negotiations => {
                console.log(negotiations);
                resolve(negotiations.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
            })
            .catch(error =>{ 
                console.error(error);
                reject('Não foi possível importar as negociações da semana retrasada');
            });
        });  
    }
}