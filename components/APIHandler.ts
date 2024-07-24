export class Server {
    
    #api: string;
  
    public constructor(ip: string, port: number) {
        this.#api = `${ip}:${port}/`;
    }
  
    public async pullAllDates() {
        let data = (await fetch(this.#api + "list")).json();

        console.log(data);
        return data;
    }
}